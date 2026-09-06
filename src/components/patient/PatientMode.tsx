import React, { useState } from 'react';
import { Gamepad2, MessageSquareHeart, CheckSquare, Sparkles, Heart } from 'lucide-react';
import { PatientProfile, Reminder, MemoryItem, KnownFace, GameSession, Language } from '../../types';
import { CognitiveGames } from './games/CognitiveGames';
import { MemoryAssistant } from './assistant/MemoryAssistant';
import { DailyReminders } from './reminders/DailyReminders';
import { DigitalMemoryBox } from './memorybox/DigitalMemoryBox';
import { TRANSLATIONS } from '../../utils/translations';

interface PatientModeProps {
  patientProfile: PatientProfile;
  reminders: Reminder[];
  onToggleReminder: (id: string) => void;
  onAddReminder: (reminder: Reminder) => void;
  memories: MemoryItem[];
  onAddMemory: (memory: MemoryItem) => void;
  knownFaces: KnownFace[];
  onAddKnownFace: (face: KnownFace) => void;
  gameSessions: GameSession[];
  onSessionComplete: (session: GameSession) => void;
  offlineMode: boolean;
  language: Language;
  largeText: boolean;
}

export const PatientMode: React.FC<PatientModeProps> = ({
  patientProfile,
  reminders,
  onToggleReminder,
  onAddReminder,
  memories,
  onAddMemory,
  knownFaces,
  onAddKnownFace,
  gameSessions,
  onSessionComplete,
  offlineMode,
  language,
  largeText,
}) => {
  const [activeTab, setActiveTab] = useState<'games' | 'assistant' | 'reminders' | 'memorybox'>('assistant');
  const t = TRANSLATIONS[language];

  const completedReminders = reminders.filter((r) => r.completed).length;

  return (
    <div id="patient-mode-container" className="space-y-6">
      {/* Patient Welcome Banner */}
      <div className="bg-white text-[#2D2E2E] rounded-2xl p-6 sm:p-8 border border-[#E5E1D8] shadow-xs relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#F0F3EE] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 border border-[#D5DFD0] text-[#5C6E53]">
            <Heart className="w-4 h-4 text-[#7C9070] fill-current" />
            <span>{t.welcome}, {patientProfile.name} • {patientProfile.location.split('(')[0]}</span>
          </div>

          <h2
            className={`font-bold tracking-tight text-[#2D2E2E] mb-2 ${
              largeText ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
            }`}
          >
            {t.goodDay}, {patientProfile.name}!
          </h2>

          <p className="text-[#575551] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            {t.bannerSubtitle(
              patientProfile.primaryCaregiver.split('(')[0].trim(),
              patientProfile.ashaWorker.split('(')[0].trim()
            )}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-[#E5E1D8] text-xs sm:text-sm text-[#73706A]">
            <span>✓ {t.tasksDone(completedReminders, reminders.length)}</span>
            <span>•</span>
            <span>🧠 {t.exercisesDone(gameSessions.length)}</span>
            <span>•</span>
            <span>📸 {t.memoriesSaved(memories.length)}</span>
          </div>
        </div>

        {/* Decorative subtle background circle */}
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#F0F3EE] blur-2xl pointer-events-none" />
      </div>

      {/* Primary Navigation Cards (Max 2 Taps to Anything) */}
      <nav id="patient-primary-nav" aria-label="Patient navigation" className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Tab 1: Memory Assistant */}
        <button
          id="patient-nav-assistant"
          type="button"
          onClick={() => setActiveTab('assistant')}
          className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col items-start justify-between min-h-[110px] sm:min-h-[130px] text-left shadow-xs ${
            activeTab === 'assistant'
              ? 'bg-[#F0F3EE] border-[#7C9070] ring-1 ring-[#7C9070]'
              : 'bg-white border-[#E5E1D8] hover:border-[#7C9070]/60'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
              activeTab === 'assistant' ? 'bg-[#7C9070] text-white' : 'bg-[#F0F3EE] text-[#5C6E53]'
            }`}
          >
            <MessageSquareHeart className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`font-bold block text-[#2D2E2E] ${
                largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}
            >
              {t.tabAssistant}
            </span>
            <span className="text-xs text-[#73706A] font-normal">
              {t.tabAssistantSub}
            </span>
          </div>
        </button>

        {/* Tab 2: Cognitive Games */}
        <button
          id="patient-nav-games"
          type="button"
          onClick={() => setActiveTab('games')}
          className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col items-start justify-between min-h-[110px] sm:min-h-[130px] text-left shadow-xs ${
            activeTab === 'games'
              ? 'bg-[#F0F3EE] border-[#7C9070] ring-1 ring-[#7C9070]'
              : 'bg-white border-[#E5E1D8] hover:border-[#7C9070]/60'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
              activeTab === 'games' ? 'bg-[#7C9070] text-white' : 'bg-[#F0F3EE] text-[#5C6E53]'
            }`}
          >
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`font-bold block text-[#2D2E2E] ${
                largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}
            >
              {t.tabGames}
            </span>
            <span className="text-xs text-[#73706A] font-normal">
              {t.tabGamesSub}
            </span>
          </div>
        </button>

        {/* Tab 3: Daily Routine */}
        <button
          id="patient-nav-reminders"
          type="button"
          onClick={() => setActiveTab('reminders')}
          className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col items-start justify-between min-h-[110px] sm:min-h-[130px] text-left shadow-xs ${
            activeTab === 'reminders'
              ? 'bg-[#F0F3EE] border-[#7C9070] ring-1 ring-[#7C9070]'
              : 'bg-white border-[#E5E1D8] hover:border-[#7C9070]/60'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
              activeTab === 'reminders' ? 'bg-[#7C9070] text-white' : 'bg-[#F0F3EE] text-[#5C6E53]'
            }`}
          >
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`font-bold block text-[#2D2E2E] ${
                largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}
            >
              {t.tabReminders}
            </span>
            <span className="text-xs text-[#73706A] font-normal">
              {t.tabRemindersSub} ({completedReminders}/{reminders.length})
            </span>
          </div>
        </button>

        {/* Tab 4: Digital Memory Box */}
        <button
          id="patient-nav-memorybox"
          type="button"
          onClick={() => setActiveTab('memorybox')}
          className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col items-start justify-between min-h-[110px] sm:min-h-[130px] text-left shadow-xs ${
            activeTab === 'memorybox'
              ? 'bg-[#F0F3EE] border-[#7C9070] ring-1 ring-[#7C9070]'
              : 'bg-white border-[#E5E1D8] hover:border-[#7C9070]/60'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
              activeTab === 'memorybox' ? 'bg-[#7C9070] text-white' : 'bg-[#F0F3EE] text-[#5C6E53]'
            }`}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`font-bold block text-[#2D2E2E] ${
                largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}
            >
              {t.tabMemoryBox}
            </span>
            <span className="text-xs text-[#73706A] font-normal">
              {t.tabMemoryBoxSub} ({memories.length})
            </span>
          </div>
        </button>
      </nav>

      {/* Render Selected View */}
      <main id="patient-main-view">
        {activeTab === 'assistant' && (
          <MemoryAssistant
            patientProfile={patientProfile}
            reminders={reminders}
            knownFaces={knownFaces}
            onAddKnownFace={onAddKnownFace}
            language={language}
            largeText={largeText}
          />
        )}

        {activeTab === 'games' && (
          <CognitiveGames
            onSessionComplete={onSessionComplete}
            sessions={gameSessions}
            offlineMode={offlineMode}
            language={language}
          />
        )}

        {activeTab === 'reminders' && (
          <DailyReminders
            reminders={reminders}
            onToggleReminder={onToggleReminder}
            onAddReminder={onAddReminder}
            language={language}
            largeText={largeText}
          />
        )}

        {activeTab === 'memorybox' && (
          <DigitalMemoryBox
            memories={memories}
            onAddMemory={onAddMemory}
            patientProfile={patientProfile}
            language={language}
            largeText={largeText}
          />
        )}
      </main>
    </div>
  );
};
