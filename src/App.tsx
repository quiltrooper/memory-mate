import { validDataset, parseStoredPatients } from './utils/storage';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { OfflineSyncBanner } from './components/OfflineSyncBanner';
import { PatientMode } from './components/patient/PatientMode';
import { CaregiverDashboard } from './components/caregiver/CaregiverDashboard';
import { PinLock } from './components/PinLock';
import type { Reminder, MemoryItem, KnownFace, GameSession, Language, PatientDataset } from './types';
import { ALL_PATIENTS } from './data/initialData';
import { withLaunchDemoPatients } from './data/launchDemo';
import { choose, isRecorded, mergeSessionUpdates, validSession } from './utils/activity';
import { assessSession } from './utils/assessment';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{outcome: 'accepted' | 'dismissed'; platform: string}>;
}
function markSources(patients: PatientDataset[]): PatientDataset[] {
  const demoIds = new Set(ALL_PATIENTS.flatMap(p => p.gameSessions.map(s => s.id)));
  const demoProfiles = new Set(ALL_PATIENTS.map(p => p.profile.id));
  return patients.map(p => ({ ...p, dataSource: p.dataSource ?? (demoProfiles.has(p.profile.id) ? 'demo' : 'user'), gameSessions: p.gameSessions.map(s => ({ ...s, dataSource: s.dataSource ?? (demoIds.has(s.id) ? 'demo' : 'legacy') })) }));
}
function loadPatients() {
  try { return markSources(withLaunchDemoPatients(parseStoredPatients(localStorage.getItem('mm_patient_datasets')) ?? ALL_PATIENTS)); }
  catch { return markSources(ALL_PATIENTS); }
}
function unreadableRecords() {
  try { parseStoredPatients(localStorage.getItem('mm_patient_datasets')); return false; }
  catch { return true; }
}
export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentView, setCurrentView] = useState<'patient' | 'caregiver'>('patient');
  const [offlineMode, setOfflineMode] = useState(false);
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);
  const [language, setLanguage] = useState<Language>('en');
  const [largeText, setLargeText] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [loadError, setLoadError] = useState(unreadableRecords);
  const [patients, setPatients] = useState<PatientDataset[]>(loadPatients);
  const patientsRef = useRef(patients);
  const restoreGeneration = useRef(0);
  const [activePatientId, setActivePatientId] = useState(() => {
    try { const id = localStorage.getItem('mm_active_patient_id'); return patients.find(p => p.profile.id === id)?.profile.id ?? patients[0].profile.id; }
    catch { return patients[0].profile.id; }
  });
  const [speechMessage, setSpeechMessage] = useState('');
  useEffect(() => {
    const handler = (event: Event) => setSpeechMessage((event as CustomEvent<string>).detail);
    window.addEventListener('memory-mate-speech-status', handler);
    return () => window.removeEventListener('memory-mate-speech-status', handler);
  }, []);
  const [storageError, setStorageError] = useState(false);
  const commitPatients = useCallback((update: (p: PatientDataset[]) => PatientDataset[]) => {
    if (loadError) { setStorageError(true); return; }
    const next = update(patientsRef.current);
    patientsRef.current = next;
    setPatients(next);
    try { localStorage.setItem('mm_patient_datasets', JSON.stringify(next)); setStorageError(false); }
    catch { setStorageError(true); }
  }, [loadError]);
  const patchPatient = (id: string, change: (p: PatientDataset) => PatientDataset) => commitPatients(all => all.map(p => p.profile.id === id ? change(p) : p));
  const currentDataset = patients.find(p => p.profile.id === activePatientId) ?? patients[0];
  const { profile: patientProfile, reminders, memories, knownFaces, trendData, gameSessions } = currentDataset;
  const [serverReachable, setServerReachable] = useState(true);
  const effectiveOfflineMode = offlineMode || !isOnline || !serverReachable;
  const [aiConfigured, setAiConfigured] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncedTime, setLastSyncedTime] = useState('');
  const syncing = useRef(false);
  const queuedCount = patients.flatMap(p => p.gameSessions).filter(s => isRecorded(s) && !s.synced).length;

  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);
    const install = (event: Event) => { event.preventDefault(); setInstallPrompt(event as BeforeInstallPromptEvent); };
    window.addEventListener('online', online); window.addEventListener('offline', offline); window.addEventListener('beforeinstallprompt', install);
    return () => { window.removeEventListener('online', online); window.removeEventListener('offline', offline); window.removeEventListener('beforeinstallprompt', install); };
  }, []);
  useEffect(() => {
    if (offlineMode || !isOnline) return;
    let cancelled = false;
    const check = async () => { try { const r = await fetch('/api/status', {signal: AbortSignal.timeout(5000)}); const status = await r.json(); if (!cancelled) { setAiConfigured(r.ok && status.configured === true); setServerReachable(r.ok); } } catch { if (!cancelled) { setAiConfigured(false); setServerReachable(false); } } };
    void check(); const timer = setInterval(check, 30000);
    return () => { cancelled = true; clearInterval(timer); };
  }, [offlineMode, isOnline]);

  const handleSyncQueued = useCallback(async () => {
    if (syncing.current || effectiveOfflineMode || !aiConfigured || !isUnlocked) return;
    syncing.current = true; setIsSyncing(true);
    const generation = restoreGeneration.current;
    let successes = 0; let failed = false;
    try {
      for (const patient of patientsRef.current) {
        const pending = patient.gameSessions.filter(s => isRecorded(s) && !s.synced);
        for (const session of pending) {
          const result = await assessSession(session, false, language);
          if (restoreGeneration.current !== generation) return;
          if (!result.synced) { failed = true; break; }
          successes++;
          commitPatients(current => current.map(p => p.profile.id === patient.profile.id ? {...p, gameSessions: mergeSessionUpdates(p.gameSessions, [result])} : p));
        }
        if (failed) break;
      }
      if (successes) setLastSyncedTime(new Date().toLocaleTimeString());
      setSyncMessage(failed ? choose(language, 'AI feedback is unavailable. Records remain saved locally; retry later.', 'AI प्रतिक्रिया उपलब्ध नहीं है। रिकॉर्ड स्थानीय रूप से सुरक्षित हैं; बाद में प्रयास करें।', 'AI মতামত উপলব্ধ নহয়। নথি স্থানীয়ভাৱে সংৰক্ষিত আছে; পিছত চেষ্টা কৰক।') : '');
    } finally { syncing.current = false; setIsSyncing(false); }
  }, [effectiveOfflineMode, aiConfigured, isUnlocked, language, commitPatients]);
  // Retry on reconnection, unlock, and periodically, not on every state update.
  useEffect(() => {
    void handleSyncQueued();
    const retry = setInterval(() => void handleSyncQueued(), 60000);
    return () => clearInterval(retry);
  }, [handleSyncQueued]);

  const handleSelectPatient = (id: string) => {
    if (!patientsRef.current.some(p => p.profile.id === id)) return;
    setActivePatientId(id);
    try { localStorage.setItem('mm_active_patient_id', id); } catch { setStorageError(true); }
  };
  const handleAddPatientDataset = (patient: PatientDataset) => { commitPatients(current => [...current, patient]); handleSelectPatient(patient.profile.id); };
  const handleSessionComplete = (session: GameSession) => patchPatient(activePatientId, p => ({...p, gameSessions: [session, ...p.gameSessions.filter(s => s.id !== session.id)]}));
  const handleToggleReminder = (id: string) => patchPatient(activePatientId, p => ({...p, reminders: p.reminders.map(r => r.id === id ? {...r, completed: !r.completed} : r)}));
  const handleAddReminder = (r: Reminder) => patchPatient(activePatientId, p => ({...p, reminders: [r, ...p.reminders]}));
  const handleUpdateReminder = (r: Reminder) => patchPatient(activePatientId, p => ({...p, reminders: p.reminders.map(item => item.id === r.id ? r : item)}));
  const handleDeleteReminder = (id: string) => patchPatient(activePatientId, p => ({...p, reminders: p.reminders.filter(r => r.id !== id)}));
  const handleAddMemory = (m: MemoryItem) => patchPatient(activePatientId, p => ({...p, memories: [m, ...p.memories]}));
  const handleAddKnownFace = (f: KnownFace) => patchPatient(activePatientId, p => ({...p, knownFaces: [f, ...p.knownFaces]}));
  const handleToggleOffline = () => setOfflineMode(v => !v);
  const handleInstall = async () => { if (!installPrompt) return; await installPrompt.prompt(); if ((await installPrompt.userChoice).outcome === 'accepted') setInstallPrompt(null); };
  const handleExportBackup = () => {
    if (loadError) {
      const original = localStorage.getItem('mm_patient_datasets') ?? '';
      const url = URL.createObjectURL(new Blob([original], {type:'application/json'}));
      const link = document.createElement('a'); link.href=url; link.download='memory-mate-original-records.json'; link.click(); setTimeout(()=>URL.revokeObjectURL(url),1000); return;
    }
    const backup = {format: 'memory-mate-backup', version: 2, exportedAt: new Date().toISOString(), activePatientId, patients: patientsRef.current};
    const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], {type: 'application/json'}));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = `memory-mate-backup-${new Date().toISOString().slice(0,10)}.json`; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const handleRestoreBackup = async (file: File) => {
    try {
      const data = JSON.parse(await file.text());
      if (data.format !== 'memory-mate-backup' || !Array.isArray(data.patients) || !data.patients.length || !data.patients.every(validDataset) || new Set(data.patients.map((p: PatientDataset) => p.profile.id)).size !== data.patients.length) throw new Error('Invalid backup');
      if (!window.confirm(choose(language, 'Replace this device’s records with this backup?', 'इस डिवाइस के रिकॉर्ड इस बैकअप से बदलें?', 'এই ডিভাইচৰ নথি এই বেকআপেৰে সলনি কৰিবনে?'))) return;
      restoreGeneration.current++;
      if (loadError) {
        const original = localStorage.getItem('mm_patient_datasets');
        if (original !== null) localStorage.setItem('mm_original_records_recovery', original);
        const restored = markSources(data.patients);
        localStorage.setItem('mm_patient_datasets', JSON.stringify(restored));
        patientsRef.current = restored; setPatients(restored); setLoadError(false);
      } else commitPatients(() => markSources(data.patients));
      handleSelectPatient(data.patients.some((p: PatientDataset) => p.profile.id === data.activePatientId) ? data.activePatientId : data.patients[0].profile.id);
    } catch { window.alert(choose(language, 'This backup is invalid. Existing records were kept.', 'बैकअप अमान्य है। पुराने रिकॉर्ड रखे गए हैं।', 'বেকআপটো বৈধ নহয়। আগৰ নথি ৰখা হৈছে।')); }
  };
  if (!isUnlocked) return <PinLock language={language} onLanguageChange={setLanguage} onUnlocked={() => setIsUnlocked(true)} />;
  if (loadError) return <main className="max-w-xl mx-auto p-8 space-y-5"><h1 className="text-xl font-bold">{choose(language,'Saved records need recovery','सहेजे रिकॉर्ड को पुनः प्राप्त करना होगा','সংৰক্ষিত নথি পুনৰুদ্ধাৰ কৰিব লাগিব')}</h1><p>{choose(language,'Existing records could not be read. They have not been replaced. Download the original file or restore a valid backup.','मौजूदा रिकॉर्ड पढ़े नहीं गए। उन्हें बदला नहीं गया है। मूल फ़ाइल डाउनलोड करें या वैध बैकअप बहाल करें।','আগৰ নথি পঢ়িব পৰা নগ’ল। সলনি কৰা হোৱা নাই। মূল ফাইল উলিয়াওক বা বৈধ বেকআপ পুনৰুদ্ধাৰ কৰক।')}</p><button onClick={handleExportBackup} className="border p-3 rounded-xl">{choose(language,'Download original records','मूल रिकॉर्ड डाउनलोड करें','মূল নথি উলিয়াওক')}</button><input aria-label="Restore backup" type="file" accept="application/json,.json" onChange={e=>{const file=e.target.files?.[0];if(file)void handleRestoreBackup(file);}}/></main>;
  return (
    <div className={`min-h-screen bg-[#FAF6F0] text-[#2D2D2D] flex flex-col font-sans ${largeText ? 'text-lg' : 'text-base'}`}>
      {storageError && <div role="alert" className="bg-red-100 p-4 text-red-900">{choose(language, 'Device storage is full or unavailable. Export a backup before closing this page.', 'डिवाइस का संग्रहण भरा या अनुपलब्ध है। पेज बंद करने से पहले बैकअप निर्यात करें।', 'ডিভাইচৰ সংৰক্ষণ ভৰি গৈছে বা উপলব্ধ নহয়। পৃষ্ঠা বন্ধ কৰাৰ আগতে বেকআপ উলিয়াওক।')}</div>}
      {speechMessage && <p role="status" className="px-5 py-2 bg-amber-50 text-sm">{speechMessage}</p>}
      {/* Top Header & Navigation */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        offlineMode={effectiveOfflineMode}
        onToggleOffline={handleToggleOffline}
        language={language}
        onLanguageChange={(lang) => { setLanguage(lang); setSpeechMessage(''); }}
        queuedCount={queuedCount}
        onSync={handleSyncQueued}
        largeText={largeText}
        onToggleLargeText={() => setLargeText((v) => !v)}
        patients={patients}
        activePatientId={activePatientId}
        onSelectPatient={handleSelectPatient}
        canInstall={installPrompt !== null}
        onInstall={handleInstall}
        onExportBackup={handleExportBackup}
        onRestoreBackup={handleRestoreBackup}
      />

      {/* Local storage and optional AI feedback status */}
      <OfflineSyncBanner
        language={language}
        aiConfigured={aiConfigured}
        message={syncMessage}
        offlineMode={effectiveOfflineMode}
        queuedCount={queuedCount}
        onSync={handleSyncQueued}
        isSyncing={isSyncing}
        lastSyncedTime={lastSyncedTime}
      />

      {currentDataset.dataSource === 'demo' && <p className="text-center px-4 py-2 text-sm bg-amber-50">{choose(language,'Demonstration profile: supplied patient details and past records are synthetic. Newly played activities are marked recorded.','प्रदर्शन प्रोफ़ाइल: दिए गए विवरण और पुराने रिकॉर्ड कृत्रिम हैं। नए खेले गए सत्र दर्ज चिह्नित हैं।','প্ৰদৰ্শন প্ৰফাইল: দিয়া বিৱৰণ আৰু পুৰণি নথি কৃত্ৰিম। নতুন খেলৰ অধিবেশন নথিভুক্ত বুলি চিহ্নিত।')}</p>}
      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {currentView === 'patient' ? (
          <PatientMode
            key={`${activePatientId}:${language}`}
            patientProfile={patientProfile}
            reminders={reminders}
            onToggleReminder={handleToggleReminder}
            onAddReminder={handleAddReminder}
            memories={memories}
            onAddMemory={handleAddMemory}
            knownFaces={knownFaces}
            onAddKnownFace={handleAddKnownFace}
            gameSessions={gameSessions}
            onSessionComplete={handleSessionComplete}
            offlineMode={effectiveOfflineMode}
            language={language}
            largeText={largeText}
          />
        ) : (
          <CaregiverDashboard
            key={`${activePatientId}:${language}`}
            patientProfile={patientProfile}
            trendData={trendData}
            reminders={reminders}
            onAddReminder={handleAddReminder}
            onUpdateReminder={handleUpdateReminder}
            onDeleteReminder={handleDeleteReminder}
            gameSessions={gameSessions}
            language={language}
            patients={patients}
            activePatientId={activePatientId}
            onSelectPatient={handleSelectPatient}
            onAddPatientDataset={handleAddPatientDataset}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E8E2D9] bg-[#FAF6F0] py-6 mt-12 text-[#5C5C5C] text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-bold text-[#2D2D2D]">Memory Mate</span> — A calm memory companion for patients, families, and community health workers.
            <span className="block sm:inline sm:ml-2 text-[#5C5C5C] font-medium">
              Designed for offline-first care across Northeast India.
            </span>
          </div>
          <div className="flex items-center gap-3 font-semibold text-[#58745E]">
            <span>Local data control</span>
            <span>•</span>
            <span>English · অসমীয়া · हिन्दी</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
