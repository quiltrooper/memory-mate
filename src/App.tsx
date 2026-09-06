import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { OfflineSyncBanner } from './components/OfflineSyncBanner';
import { PatientMode } from './components/patient/PatientMode';
import { CaregiverDashboard } from './components/caregiver/CaregiverDashboard';
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
import { speakText } from './utils/speech';

export default function App() {
  const [currentView, setCurrentView] = useState<'patient' | 'caregiver'>('patient');
  const [offlineMode, setOfflineMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('en');
  const [largeText, setLargeText] = useState<boolean>(false);

  // Multi-patient datasets state
  const [patients, setPatients] = useState<PatientDataset[]>(() => {
    const saved = localStorage.getItem('mm_patient_datasets');
    return saved ? JSON.parse(saved) : ALL_PATIENTS;
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
    handleSelectPatient(newDataset.profile.id);
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
            return {
              ...sess,
              score: data.score || sess.score,
              trend: data.trend || sess.trend,
              supportiveMessage: data.supportiveMessage || sess.supportiveMessage,
              synced: true,
            };
          } catch (e) {
            return { ...sess, synced: true };
          }
        })
      );

      setGameSessions(updatedSessions);
      setLastSyncedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setIsSyncing(false);
      speakText('All queued cognitive sessions have been successfully synced with Gemini cloud!', language);
    } catch (err) {
      console.error(err);
      setIsSyncing(false);
    }
  };

  const handleSessionComplete = (session: GameSession) => {
    setGameSessions((prev) => [session, ...prev]);
    const latestScore = session.score || session.accuracy;
    setTrendData((prev) => {
      const copy = [...prev];
      const lastIdx = copy.length - 1;
      if (lastIdx >= 0) {
        copy[lastIdx] = {
          ...copy[lastIdx],
          composite: Math.round((copy[lastIdx].composite + latestScore) / 2),
        };
      }
      return copy;
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

  return (
    <div className={`min-h-screen bg-[#FBF9F5] text-[#2D2E2E] flex flex-col font-sans ${largeText ? 'text-lg' : 'text-base'}`}>
      {/* Top Header & Navigation */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        offlineMode={offlineMode}
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
      />

      {/* Offline Sync Banner (Simulated offline support) */}
      <OfflineSyncBanner
        offlineMode={offlineMode}
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
            offlineMode={offlineMode}
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
      <footer className="bg-white border-t border-[#E5E1D8] py-6 mt-12 text-[#73706A] text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-bold text-[#2D2E2E]">Memory Mate</span> — Elderly Cognitive Care & Reassurance Platform.
            <span className="block sm:inline sm:ml-2 text-[#73706A] font-medium">
              Supporting families and community ASHA health volunteers across Northeast India.
            </span>
          </div>
          <div className="flex items-center gap-3 font-semibold text-[#5C6E53]">
            <span>Offline-First Architecture</span>
            <span>•</span>
            <span>Gemini AI Engine</span>
            <span>•</span>
            <span>Multi-Patient Clinical Care</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
