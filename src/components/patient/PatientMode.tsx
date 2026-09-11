import React, { useMemo, useState } from 'react';
import {
  BrainCog,
  CalendarDays,
  CheckSquare,
  ChevronRight,
  Gamepad2,
  Heart,
  MessageSquareHeart,
  Pill,
  Sparkles,
} from 'lucide-react';
import { PatientProfile, Reminder, MemoryItem, KnownFace, GameSession, Language } from '../../types';
import { CognitiveGames } from './games/CognitiveGames';
import { MemoryAssistant } from './assistant/MemoryAssistant';
import { DailyReminders } from './reminders/DailyReminders';
import { DigitalMemoryBox } from './memorybox/DigitalMemoryBox';
import { TRANSLATIONS } from '../../utils/translations';

type PatientSection = 'home' | 'games' | 'assistant' | 'reminders' | 'memorybox';

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
  const [activeSection, setActiveSection] = useState<PatientSection>('home');
  const t = TRANSLATIONS[language];
  const completedReminders = reminders.filter((reminder) => reminder.completed).length;
  const upcomingReminders = reminders.filter((reminder) => !reminder.completed).slice(0, 2);
  const location = patientProfile.location.split('(')[0].trim();

  const today = useMemo(() => {
    const locales: Record<Language, string> = { en: 'en-IN', as: 'as-IN', hi: 'hi-IN' };
    return new Intl.DateTimeFormat(locales[language], {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(new Date());
  }, [language]);

  const copy = {
    today: language === 'as' ? 'আজিৰ পৰিকল্পনা চাওক' : language === 'hi' ? 'आज की योजना देखें' : "See Today’s Plan",
    next: language === 'as' ? 'তাৰ পিছত' : language === 'hi' ? 'आगे क्या है' : 'Coming up next',
    activity: language === 'as' ? 'কাৰ্যকলাপ' : language === 'hi' ? 'गतिविधि' : 'Activity',
    medicine: language === 'as' ? 'ঔষধৰ সোঁৱৰণী' : language === 'hi' ? 'दवा की याद दिलाना' : 'Medication reminder',
    help: language === 'as' ? 'মোক সহায় লাগে' : language === 'hi' ? 'मुझे मदद चाहिए' : 'I need help',
    quick: language === 'as' ? 'আপুনি কি কৰিব বিচাৰে?' : language === 'hi' ? 'आप क्या करना चाहेंगे?' : 'What would you like to do?',
    saved: language === 'as' ? 'এই ডিভাইচত স্বয়ংক্ৰিয়ভাৱে সংৰক্ষিত' : language === 'hi' ? 'इस डिवाइस पर अपने-आप सहेजा गया' : 'Saved safely on this device',
    noReminders: language === 'as' ? 'আজি আৰু কোনো সোঁৱৰণী নাই' : language === 'hi' ? 'आज कोई और रिमाइंडर नहीं है' : 'There are no more reminders for today.',
  };

  const selectSection = (section: PatientSection) => {
    setActiveSection(section);
    if (section !== 'home') {
      window.setTimeout(() => document.getElementById('patient-main-view')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
    }
  };

  const quickActions: Array<{
    id: Exclude<PatientSection, 'home'>;
    icon: React.ElementType;
    title: string;
    subtitle: string;
  }> = [
    { id: 'assistant', icon: MessageSquareHeart, title: t.tabAssistant, subtitle: t.tabAssistantSub },
    { id: 'games', icon: Gamepad2, title: t.tabGames, subtitle: t.tabGamesSub },
    { id: 'reminders', icon: CheckSquare, title: t.tabReminders, subtitle: `${completedReminders}/${reminders.length}` },
    { id: 'memorybox', icon: Sparkles, title: t.tabMemoryBox, subtitle: `${memories.length} ${language === 'hi' ? 'यादें' : language === 'as' ? 'স্মৃতি' : 'memories'}` },
  ];

  return (
    <div id="patient-mode-container" className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
      <section className="overflow-hidden rounded-[28px] border border-[#E8E2D9] bg-[#FAF6F0] shadow-[0_10px_30px_rgba(67,63,57,0.06)]">
        <div className="border-b border-[#E8E2D9] px-5 py-4 sm:px-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[#2D2D2D]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#698A70] text-white"><Heart className="h-4 w-4 fill-current" /></span>
              <span className="font-serif text-lg font-bold tracking-tight">Memory Mate</span>
            </div>
            <span className="text-xs font-semibold text-[#5C5C5C]">{copy.saved}</span>
          </div>
        </div>

        <div className="space-y-6 px-5 py-7 sm:px-8 sm:py-9">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#2D2D2D]">
              <span className="text-2xl" aria-hidden="true">☀</span>
              <h2 className={`font-serif font-semibold tracking-tight ${largeText ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'}`}>
                {language === 'as' ? `সুপ্ৰভাত, ${patientProfile.name}` : language === 'hi' ? `सुप्रभात, ${patientProfile.name}` : `Good morning, ${patientProfile.name}`}
              </h2>
            </div>
            <p className="text-lg font-semibold text-[#2D2D2D]">{today}</p>
            <p className="text-base text-[#5C5C5C]">{location}</p>
          </div>

          <button
            id="patient-today-plan"
            type="button"
            onClick={() => selectSection('reminders')}
            className="flex min-h-[72px] w-full items-center justify-between gap-4 rounded-[20px] bg-[#698A70] px-5 text-left text-white transition-colors hover:bg-[#58745E] focus:outline-none focus:ring-4 focus:ring-[#C9D9C7]"
          >
            <span className="flex items-center gap-3">
              <CalendarDays className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span className="text-xl font-bold">{copy.today}</span>
            </span>
            <ChevronRight className="h-6 w-6 shrink-0" aria-hidden="true" />
          </button>

          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-semibold text-[#2D2D2D]">{copy.next}</h3>
            {upcomingReminders.length > 0 ? upcomingReminders.map((reminder) => {
              const isMedication = reminder.category === 'medication';
              return (
                <button
                  key={reminder.id}
                  type="button"
                  onClick={() => selectSection(isMedication ? 'reminders' : 'games')}
                  className="flex min-h-[104px] w-full items-center gap-4 rounded-[20px] border border-[#E8E2D9] bg-white p-5 text-left shadow-[0_2px_4px_rgba(67,63,57,0.03)] transition-colors hover:border-[#B9CDB8] focus:outline-none focus:ring-4 focus:ring-[#DDE9DB]"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${isMedication ? 'bg-[#FDF1EF] text-[#B85F54]' : 'bg-[#EDF2EE] text-[#58745E]'}`}>
                    {isMedication ? <Pill className="h-6 w-6" /> : <BrainCog className="h-6 w-6" />}
                  </span>
                  <span className="min-w-0 space-y-1">
                    <span className="block text-xs font-bold uppercase tracking-wide text-[#5C5C5C]">{isMedication ? copy.medicine : copy.activity}</span>
                    <span className="block text-lg font-bold text-[#2D2D2D]">{reminder.title}</span>
                    <span className="block text-base text-[#5C5C5C]">{reminder.time}{reminder.notes ? ` • ${reminder.notes}` : ''}</span>
                  </span>
                </button>
              );
            }) : (
              <div className="rounded-[20px] border border-dashed border-[#D7D0C6] bg-white px-5 py-6 text-base text-[#5C5C5C]">{copy.noReminders}</div>
            )}
          </div>
        </div>
      </section>

      <section className="space-y-3" aria-label="Patient actions">
        <h3 className="px-1 font-serif text-2xl font-semibold text-[#2D2D2D]">{copy.quick}</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickActions.map(({ id, icon: Icon, title, subtitle }) => (
            <button
              key={id}
              id={`patient-nav-${id}`}
              type="button"
              onClick={() => selectSection(id)}
              className={`flex min-h-[92px] items-center gap-4 rounded-[20px] border p-5 text-left transition-all focus:outline-none focus:ring-4 focus:ring-[#DDE9DB] ${
                activeSection === id ? 'border-[#698A70] bg-[#EDF2EE] shadow-[0_4px_12px_rgba(67,63,57,0.06)]' : 'border-[#E8E2D9] bg-white hover:border-[#B9CDB8]'
              }`}
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${activeSection === id ? 'bg-[#698A70] text-white' : 'bg-[#EDF2EE] text-[#58745E]'}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-lg font-bold text-[#2D2D2D]">{title}</span>
                <span className="block text-sm text-[#5C5C5C]">{subtitle}</span>
              </span>
              <ChevronRight className="ml-auto h-5 w-5 shrink-0 text-[#698A70]" aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>

      <button
        id="patient-help-button"
        type="button"
        onClick={() => selectSection('assistant')}
        className="flex min-h-[64px] w-full items-center justify-center gap-3 rounded-[20px] bg-[#D97365] px-6 text-lg font-bold text-white transition-colors hover:bg-[#C76557] focus:outline-none focus:ring-4 focus:ring-[#F0C7C0]"
      >
        <MessageSquareHeart className="h-6 w-6" aria-hidden="true" />
        {copy.help}
      </button>

      <main id="patient-main-view" className="scroll-mt-32">
        {activeSection === 'assistant' && (
          <MemoryAssistant
            patientProfile={patientProfile}
            reminders={reminders}
            knownFaces={knownFaces}
            onAddKnownFace={onAddKnownFace}
            language={language}
            largeText={largeText}
          />
        )}

        {activeSection === 'games' && (
          <CognitiveGames
            onSessionComplete={onSessionComplete}
            sessions={gameSessions}
            offlineMode={offlineMode}
            language={language}
          />
        )}

        {activeSection === 'reminders' && (
          <DailyReminders
            reminders={reminders}
            onToggleReminder={onToggleReminder}
            onAddReminder={onAddReminder}
            language={language}
            largeText={largeText}
          />
        )}

        {activeSection === 'memorybox' && (
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
