import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { OfflineSyncBanner } from './components/OfflineSyncBanner';
import { PatientMode } from './components/patient/PatientMode';
import { CaregiverDashboard } from './components/caregiver/CaregiverDashboard';
import { PinLock } from './components/PinLock';
import {
  PatientProfile,
  Reminder,
  MemoryItem,
  KnownFace,
  GameSession,
  TrendPoint,
  Language,
  PatientDataset,
} from './types';
import { INITIAL_PATIENTS, ALL_PATIENTS } from './data/initialData';
import { addDemoFamilyFaces } from './data/demoFamilyFaces';
import { speakText } from './utils/speech';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentView, setCurrentView] = useState<'patient' | 'caregiver'>('patient');
  const [offlineMode, setOfflineMode] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);
  const [language, setLanguage] = useState<Language>('en');
  const [largeText, setLargeText] = useState<boolean>(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    const onAppInstalled = () => setInstallPrompt(null);

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  useEffect(() => {
    const markOnline = () => setIsOnline(true);
    const markOffline = () => setIsOnline(false);
    window.addEventListener('online', markOnline);
    window.addEventListener('offline', markOffline);
    return () => {
      window.removeEventListener('online', markOnline);
      window.removeEventListener('offline', markOffline);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') setInstallPrompt(null);
  };

  const handleExportBackup = () => {
    const backup = {
      format: 'memory-mate-backup',
      version: 1,
      exportedAt: new Date().toISOString(),
      activePatientId,
      patients,
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `memory-mate-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleRestoreBackup = async (file: File) => {
    try {
      const backup = JSON.parse(await file.text()) as { format?: string; activePatientId?: string; patients?: PatientDataset[] };
      if (backup.format !== 'memory-mate-backup' || !Array.isArray(backup.patients) || backup.patients.some((patient) => !patient?.profile?.id)) {
        throw new Error('invalid backup');
      }
      if (!window.confirm('Restore this backup? It will replace the current patient data stored on this device.')) return;
      const nextActiveId = backup.patients.some((patient) => patient.profile.id === backup.activePatientId)
        ? backup.activePatientId!
        : backup.patients[0]?.profile.id;
      const nextActivePatient = backup.patients.find((patient) => patient.profile.id === nextActiveId);
      setPatients(backup.patients);
      localStorage.setItem('mm_patient_datasets', JSON.stringify(backup.patients));
      if (nextActivePatient && nextActiveId) {
        setActivePatientId(nextActiveId);
        localStorage.setItem('mm_active_patient_id', nextActiveId);
        setPatientProfile(nextActivePatient.profile);
        setReminders(nextActivePatient.reminders);
        setMemories(nextActivePatient.memories);
        setKnownFaces(nextActivePatient.knownFaces);
        setTrendData(nextActivePatient.trendData);
        setGameSessions(nextActivePatient.gameSessions);
      }
    } catch {
      window.alert('This file is not a valid Memory Mate backup. Choose a backup created by this app.');
    }
  };

  // Multi-patient datasets state
  const [patients, setPatients] = useState<PatientDataset[]>(() => {
    const saved = localStorage.getItem('mm_patient_datasets');
    if (!saved) return ALL_PATIENTS;

    try {
      const savedPatients = JSON.parse(saved) as PatientDataset[];
      if (!Array.isArray(savedPatients)) return ALL_PATIENTS;

      // Older versions stored only the three demonstration profiles in the
      // browser. Merge those locally edited profiles into the complete
      // bundled dataset instead of hiding the 100 generated profiles.
      const savedById = new Map(
        savedPatients
          .filter((patient) => patient?.profile?.id)
          .map((patient) => [patient.profile.id, patient]),
      );
      const bundledIds = new Set(ALL_PATIENTS.map((patient) => patient.profile.id));
      const mergedPatients = ALL_PATIENTS.map(
        (patient) => savedById.get(patient.profile.id) ?? patient,
      );

      // Preserve patients manually added by a caregiver as well.
      return addDemoFamilyFaces([
        ...mergedPatients,
        ...savedPatients.filter((patient) => !bundledIds.has(patient?.profile?.id)),
      ], bundledIds);
    } catch {
      return ALL_PATIENTS;
    }
  });

  const [activePatientId, setActivePatientId] = useState<string>(() => {
    const saved = localStorage.getItem('mm_active_patient_id');
    return saved || INITIAL_PATIENTS[0].profile.id;
  });

  // Current active patient data derived or initialized
  const currentDataset = patients.find((p) => p.profile.id === activePatientId) || patients[0];

  const [patientProfile, setPatientProfile] = useState<PatientProfile>(currentDataset.profile);
  const [reminders, setReminders] = useState<Reminder[]>(currentDataset.reminders);
  const [memories, setMemories] = useState<MemoryItem[]>(currentDataset.memories);
  const [knownFaces, setKnownFaces] = useState<KnownFace[]>(currentDataset.knownFaces);
  const [trendData, setTrendData] = useState<TrendPoint[]>(currentDataset.trendData);
  const [gameSessions, setGameSessions] = useState<GameSession[]>(currentDataset.gameSessions);

  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncedTime, setLastSyncedTime] = useState<string>('Today at 09:15 AM');

  // When activePatientId changes, update the individual active states
  const handleSelectPatient = (id: string) => {
    const selected = patients.find((p) => p.profile.id === id);
    if (!selected) return;

    setActivePatientId(id);
    localStorage.setItem('mm_active_patient_id', id);

    setPatientProfile(selected.profile);
    setReminders(selected.reminders);
    setMemories(selected.memories);
    setKnownFaces(selected.knownFaces);
    setTrendData(selected.trendData);
    setGameSessions(selected.gameSessions);
  };

  // Add new patient dataset (for training and clinical evaluation)
  const handleAddPatientDataset = (newDataset: PatientDataset) => {
    setPatients((prev) => {
      const updated = [...prev, newDataset];
      localStorage.setItem('mm_patient_datasets', JSON.stringify(updated));
      return updated;
    });
    // Select the new record directly. The state update above is asynchronous,
    // so looking it up through handleSelectPatient could still see the old list.
    setActivePatientId(newDataset.profile.id);
    localStorage.setItem('mm_active_patient_id', newDataset.profile.id);
    setPatientProfile(newDataset.profile);
    setReminders(newDataset.reminders);
    setMemories(newDataset.memories);
    setKnownFaces(newDataset.knownFaces);
    setTrendData(newDataset.trendData);
    setGameSessions(newDataset.gameSessions);
  };

  // Sync active patient changes back into the `patients` array and localStorage
  useEffect(() => {
    setPatients((prev) => {
      const updated = prev.map((p) => {
        if (p.profile.id === activePatientId) {
          return {
            ...p,
            profile: patientProfile,
            reminders,
            memories,
            knownFaces,
            trendData,
            gameSessions,
          };
        }
        return p;
      });
      localStorage.setItem('mm_patient_datasets', JSON.stringify(updated));
      return updated;
    });
  }, [patientProfile, reminders, memories, knownFaces, trendData, gameSessions, activePatientId]);

  const queuedCount = gameSessions.filter((s) => !s.synced).length;

  const handleToggleOffline = () => {
    const next = !offlineMode;
    setOfflineMode(next);
    if (next) {
      speakText('Offline simulation enabled. Future game sessions will queue locally on this device.', language);
    } else {
      speakText('Cloud connection active. Local data will now sync with Gemini.', language);
      if (queuedCount > 0) {
        handleSyncQueued();
      }
    }
  };

  const handleSyncQueued = async () => {
    if (queuedCount === 0) return;
    setIsSyncing(true);

    try {
      const updatedSessions = await Promise.all(
        gameSessions.map(async (sess) => {
          if (sess.synced) return sess;
          try {
            const res = await fetch('/api/gemini/cognitive-score', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                gameType: sess.gameTitle,
                accuracy: sess.accuracy,
                responseTimeMs: sess.responseTimeMs,
                errors: sess.errors,
                level: sess.level,
                language,
              }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(`Gemini request failed: ${res.status}`);
            return {
              ...sess,
              score: data.score || sess.score,
              trend: data.trend || sess.trend,
              supportiveMessage: data.supportiveMessage || sess.supportiveMessage,
              synced: true,
            };
          } catch (e) {
            // Keep the record in the local queue until a real request succeeds.
            return sess;
          }
        })
      );

      setGameSessions(updatedSessions);
      setLastSyncedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setIsSyncing(false);
      const remainingCount = updatedSessions.filter((session) => !session.synced).length;
      speakText(
        remainingCount === 0
          ? 'All queued cognitive sessions have been successfully updated.'
          : `${remainingCount} session${remainingCount > 1 ? 's are' : ' is'} still safely saved on this device and will retry when connected.`,
        language,
      );
    } catch (err) {
      console.error(err);
      setIsSyncing(false);
    }
  };

  const handleSessionComplete = (session: GameSession) => {
    const nextGameSessions = [session, ...gameSessions];
    const latestScore = session.score || session.accuracy;
    const nextTrendData = (() => {
      const copy = [...trendData];
      const lastIdx = copy.length - 1;
      if (lastIdx >= 0) {
        copy[lastIdx] = {
          ...copy[lastIdx],
          composite: Math.round((copy[lastIdx].composite + latestScore) / 2),
        };
      }
      return copy;
    });
    setGameSessions(nextGameSessions);
    setTrendData(nextTrendData);

    // Save the completed session immediately, before the user can close the app.
    setPatients((previousPatients) => {
      const updatedPatients = previousPatients.map((patient) =>
        patient.profile.id === activePatientId
          ? { ...patient, profile: patientProfile, reminders, memories, knownFaces, trendData: nextTrendData, gameSessions: nextGameSessions }
          : patient,
      );
      localStorage.setItem('mm_patient_datasets', JSON.stringify(updatedPatients));
      return updatedPatients;
    });
  };

  const handleToggleReminder = (id: string) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r))
    );
  };

  const handleAddReminder = (reminder: Reminder) => {
    setReminders((prev) => [reminder, ...prev]);
  };

  const handleUpdateReminder = (reminder: Reminder) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === reminder.id ? reminder : r))
    );
  };

  const handleDeleteReminder = (id: string) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  };

  const handleAddMemory = (memory: MemoryItem) => {
    setMemories((prev) => [memory, ...prev]);
  };

  const handleAddKnownFace = (face: KnownFace) => {
    setKnownFaces((prev) => [face, ...prev]);
  };

  const effectiveOfflineMode = offlineMode || !isOnline;

  if (!isUnlocked) return <PinLock onUnlocked={() => setIsUnlocked(true)} />;

  return (
    <div className={`min-h-screen bg-[#FAF6F0] text-[#2D2D2D] flex flex-col font-sans ${largeText ? 'text-lg' : 'text-base'}`}>
      {/* Top Header & Navigation */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        offlineMode={effectiveOfflineMode}
        onToggleOffline={handleToggleOffline}
        language={language}
        onLanguageChange={setLanguage}
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

      {/* Offline Sync Banner (Simulated offline support) */}
      <OfflineSyncBanner
        offlineMode={effectiveOfflineMode}
        queuedCount={queuedCount}
        onSync={handleSyncQueued}
        isSyncing={isSyncing}
        lastSyncedTime={lastSyncedTime}
      />

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {currentView === 'patient' ? (
          <PatientMode
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
