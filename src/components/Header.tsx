import React, { useRef } from 'react';
import {
  Download,
  Globe,
  HeartHandshake,
  Save,
  Settings2,
  ShieldCheck,
  Upload,
  User,
  Users,
  Wifi,
  WifiOff,
} from 'lucide-react';
import { Language, PatientDataset } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  currentView: 'patient' | 'caregiver';
  onViewChange: (view: 'patient' | 'caregiver') => void;
  offlineMode: boolean;
  onToggleOffline: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  queuedCount: number;
  onSync: () => void;
  largeText: boolean;
  onToggleLargeText: () => void;
  patients: PatientDataset[];
  activePatientId: string;
  onSelectPatient: (id: string) => void;
  canInstall: boolean;
  onInstall: () => void;
  onExportBackup: () => void;
  onRestoreBackup: (file: File) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  offlineMode,
  onToggleOffline,
  language,
  onLanguageChange,
  queuedCount,
  onSync,
  largeText,
  onToggleLargeText,
  patients,
  activePatientId,
  onSelectPatient,
  canInstall,
  onInstall,
  onExportBackup,
  onRestoreBackup,
}) => {
  const backupInputRef = useRef<HTMLInputElement>(null);
  const t = TRANSLATIONS[language];

  return (
    <header id="app-header" className="sticky top-0 z-40 border-b border-[#E8E2D9] bg-[#FAF6F0]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-fit items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#698A70] text-white shadow-[0_3px_10px_rgba(67,63,57,0.12)]">
              <HeartHandshake className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-bold tracking-tight text-[#2D2D2D]">{t.appName}</h1>
                <span className="hidden rounded-full border border-[#D5DFD0] bg-[#EDF2EE] px-2 py-0.5 text-[11px] font-bold text-[#58745E] sm:inline">NER</span>
              </div>
              <p className="hidden text-sm text-[#5C5C5C] sm:block">{t.tagline}</p>
            </div>
          </div>

          <div className="flex flex-1 flex-wrap items-center justify-end gap-2 sm:gap-3">
            <label className="sr-only" htmlFor="patient-selector">{t.patientSelector}</label>
            <div className="flex max-w-full items-center gap-2 rounded-xl border border-[#E8E2D9] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(67,63,57,0.04)]">
              <Users className="h-4 w-4 shrink-0 text-[#698A70]" aria-hidden="true" />
              <select
                id="patient-selector"
                value={activePatientId}
                onChange={(event) => onSelectPatient(event.target.value)}
                aria-label={t.patientSelector}
                className="max-w-[160px] bg-transparent text-sm font-semibold text-[#2D2D2D] outline-none sm:max-w-[280px]"
              >
                {patients.map((patient) => (
                  <option key={patient.profile.id} value={patient.profile.id}>
                    {patient.profile.name} ({patient.profile.age}y • {patient.profile.location.split(',')[0]})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex rounded-xl border border-[#E8E2D9] bg-[#E8E2D9] p-1" aria-label="Choose view">
              <button
                id="btn-patient-mode"
                type="button"
                onClick={() => onViewChange('patient')}
                className={`flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-bold transition-colors ${currentView === 'patient' ? 'bg-[#698A70] text-white shadow-sm' : 'text-[#2D2D2D] hover:bg-white/70'}`}
              >
                <User className="h-4 w-4" aria-hidden="true" />
                <span className="hidden md:inline">{t.patientMode}</span>
                <span className="md:hidden">Patient</span>
              </button>
              <button
                id="btn-caregiver-mode"
                type="button"
                onClick={() => onViewChange('caregiver')}
                className={`flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-bold transition-colors ${currentView === 'caregiver' ? 'bg-[#58745E] text-white shadow-sm' : 'text-[#2D2D2D] hover:bg-white/70'}`}
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span className="hidden md:inline">{t.caregiverDashboard}</span>
                <span className="md:hidden">Care</span>
              </button>
            </div>

            <div className="flex items-center rounded-xl border border-[#E8E2D9] bg-[#E8E2D9] p-1 text-sm" aria-label="Language">
              <Globe className="ml-1.5 h-4 w-4 text-[#5C5C5C]" aria-hidden="true" />
              {([
                ['en', 'EN'],
                ['as', 'অ'],
                ['hi', 'हि'],
              ] as const).map(([code, label]) => (
                <button
                  key={code}
                  id={`lang-${code}`}
                  type="button"
                  onClick={() => onLanguageChange(code)}
                  className={`min-h-8 rounded-lg px-2 font-bold transition-colors ${language === code ? 'bg-white text-[#2D2D2D] shadow-sm' : 'text-[#5C5C5C] hover:text-[#2D2D2D]'}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <details className="group relative">
              <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-xl border border-[#D5DFD0] bg-[#EDF2EE] px-3 text-sm font-bold text-[#58745E] transition-colors hover:bg-[#E1EADF] [&::-webkit-details-marker]:hidden">
                <Settings2 className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Options</span>
              </summary>
              <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-72 space-y-2 rounded-2xl border border-[#E8E2D9] bg-white p-3 shadow-[0_16px_40px_rgba(67,63,57,0.16)]">
                <button
                  id="toggle-offline"
                  type="button"
                  onClick={onToggleOffline}
                  className={`flex min-h-11 w-full items-center justify-between rounded-xl border px-3 text-left text-sm font-semibold ${offlineMode ? 'border-[#E8D4BE] bg-[#FDF6ED] text-[#8C5E28]' : 'border-[#D5DFD0] bg-[#EDF2EE] text-[#58745E]'}`}
                >
                  <span className="flex items-center gap-2">{offlineMode ? <WifiOff className="h-4 w-4" /> : <Wifi className="h-4 w-4" />}{offlineMode ? t.offlineMode : t.cloudConnected}</span>
                  <span className="text-xs">{offlineMode ? 'Simulated' : 'Connected'}</span>
                </button>
                {queuedCount > 0 && (
                  <button id="header-sync-btn" type="button" onClick={onSync} className="min-h-11 w-full rounded-xl bg-[#698A70] px-3 text-sm font-bold text-white hover:bg-[#58745E]">
                    {t.sync} ({queuedCount})
                  </button>
                )}
                {canInstall && (
                  <button id="install-app" type="button" onClick={onInstall} className="flex min-h-11 w-full items-center gap-2 rounded-xl border border-[#D5DFD0] px-3 text-sm font-bold text-[#58745E] hover:bg-[#EDF2EE]">
                    <Download className="h-4 w-4" /> Install Memory Mate
                  </button>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={onExportBackup} className="flex min-h-11 items-center justify-center gap-1 rounded-xl border border-[#E8E2D9] text-xs font-bold text-[#2D2D2D] hover:bg-[#FAF6F0]">
                    <Save className="h-4 w-4" /> Backup
                  </button>
                  <button type="button" onClick={() => backupInputRef.current?.click()} className="flex min-h-11 items-center justify-center gap-1 rounded-xl border border-[#E8E2D9] text-xs font-bold text-[#2D2D2D] hover:bg-[#FAF6F0]">
                    <Upload className="h-4 w-4" /> Restore
                  </button>
                </div>
                <button type="button" onClick={onToggleLargeText} className={`min-h-10 w-full rounded-xl text-sm font-bold ${largeText ? 'bg-[#2D2D2D] text-white' : 'bg-[#FAF6F0] text-[#2D2D2D]'}`}>
                  {largeText ? 'Use regular text' : 'Use larger text'}
                </button>
              </div>
            </details>
            <input
              ref={backupInputRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) onRestoreBackup(file);
                event.target.value = '';
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
