import React from 'react';
import { HeartHandshake, User, ShieldCheck, Wifi, WifiOff, Globe, Sparkles, Users } from 'lucide-react';
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
}) => {
  const t = TRANSLATIONS[language];
  const activePatient = patients.find((p) => p.profile.id === activePatientId) || patients[0];

  return (
    <header id="app-header" className="bg-[#FAF9F6]/95 backdrop-blur-xs border-b border-[#E5E1D8] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          
          {/* Logo & Subtitle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#7C9070] flex items-center justify-center text-white ring-2 ring-[#E5E1D8]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2D2E2E]">
                    {t.appName}
                  </h1>
                  <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0]">
                    {t.regionalTag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#73706A] font-normal">
                  {t.tagline}
                </p>
              </div>
            </div>

            {/* Mobile offline badge */}
            <div className="lg:hidden flex items-center gap-1.5">
              <button
                id="mobile-offline-btn"
                type="button"
                onClick={onToggleOffline}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg flex items-center gap-1 border transition-colors ${
                  offlineMode
                    ? 'bg-[#FDF6ED] text-[#8C5E28] border-[#E8D4BE]'
                    : 'bg-[#F0F3EE] text-[#5C6E53] border-[#D5DFD0]'
                }`}
              >
                {offlineMode ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
                <span>{offlineMode ? t.offlineMode.split(' ')[0] : t.cloudConnected.split(' ')[0]}</span>
              </button>
            </div>
          </div>

          {/* Controls: Patient Switcher, Mode Switcher & Language */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            
            {/* Patient Profile Switcher */}
            <div className="flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E5E1D8] px-2.5 py-1.5 rounded-xl shadow-2xs">
              <Users className="w-4 h-4 text-[#7C9070]" />
              <label htmlFor="patient-selector" className="sr-only">
                {t.patientSelector}
              </label>
              <select
                id="patient-selector"
                value={activePatientId}
                onChange={(e) => onSelectPatient(e.target.value)}
                aria-label={t.patientSelector}
                className="bg-transparent text-xs sm:text-sm font-semibold text-[#2D2E2E] outline-none cursor-pointer pr-1"
              >
                {patients.map((p) => (
                  <option key={p.profile.id} value={p.profile.id} className="text-[#2D2E2E] py-1">
                    {p.profile.name} ({p.profile.age}y • {p.profile.location.split(',')[0]})
                  </option>
                ))}
              </select>
            </div>

            {/* View Switcher (Patient vs Caregiver) */}
            <div className="bg-[#EFECE6] p-1 rounded-xl flex items-center border border-[#E5E1D8]">
              <button
                id="btn-patient-mode"
                type="button"
                onClick={() => onViewChange('patient')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                  currentView === 'patient'
                    ? 'bg-[#7C9070] text-white shadow-xs'
                    : 'text-[#2D2E2E] hover:bg-[#E5E1D8]/60'
                }`}
              >
                <User className="w-4 h-4" />
                <span>{t.patientMode}</span>
              </button>

              <button
                id="btn-caregiver-mode"
                type="button"
                onClick={() => onViewChange('caregiver')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                  currentView === 'caregiver'
                    ? 'bg-[#5C6E53] text-white shadow-xs'
                    : 'text-[#2D2E2E] hover:bg-[#E5E1D8]/60'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{t.caregiverDashboard}</span>
              </button>
            </div>

            {/* Offline Simulator Switch */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                id="desktop-toggle-offline"
                type="button"
                onClick={onToggleOffline}
                title="Toggle offline mode simulation"
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 border transition-all ${
                  offlineMode
                    ? 'bg-[#FDF6ED] text-[#8C5E28] border-[#E8D4BE] shadow-xs'
                    : 'bg-[#FFFFFF] text-[#2D2E2E] border-[#E5E1D8] hover:bg-[#F5F3EF]'
                }`}
              >
                {offlineMode ? (
                  <>
                    <WifiOff className="w-3.5 h-3.5 text-[#8C5E28] animate-pulse" />
                    <span>{t.offlineMode}</span>
                  </>
                ) : (
                  <>
                    <Wifi className="w-3.5 h-3.5 text-[#7C9070]" />
                    <span>{t.cloudConnected}</span>
                  </>
                )}
              </button>

              {queuedCount > 0 && (
                <button
                  id="header-sync-btn"
                  type="button"
                  onClick={onSync}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#7C9070] text-white hover:bg-[#687A5E] flex items-center gap-1.5 shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.sync} ({queuedCount})</span>
                </button>
              )}
            </div>

            {/* Font Size Toggle for Elderly Eyes */}
            <button
              id="font-size-toggle"
              type="button"
              onClick={onToggleLargeText}
              title="Toggle Extra Large Text"
              className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                largeText
                  ? 'bg-[#2D2E2E] text-white border-[#2D2E2E]'
                  : 'bg-[#FFFFFF] text-[#2D2E2E] border-[#E5E1D8] hover:bg-[#F5F3EF]'
              }`}
            >
              Aa+
            </button>

            {/* Language Selector */}
            <div className="flex items-center space-x-1 bg-[#EFECE6] border border-[#E5E1D8] rounded-lg p-0.5 text-xs font-medium">
              <Globe className="w-3.5 h-3.5 text-[#73706A] ml-1.5" />
              <button
                id="lang-en"
                type="button"
                onClick={() => onLanguageChange('en')}
                title="English"
                className={`px-2 py-1 rounded-md font-semibold transition-colors ${
                  language === 'en' ? 'bg-[#FFFFFF] text-[#2D2E2E] shadow-xs' : 'text-[#73706A] hover:text-[#2D2E2E]'
                }`}
              >
                English
              </button>
              <button
                id="lang-as"
                type="button"
                onClick={() => onLanguageChange('as')}
                title="Assamese (অসমীয়া)"
                className={`px-2 py-1 rounded-md font-semibold transition-colors ${
                  language === 'as' ? 'bg-[#FFFFFF] text-[#2D2E2E] shadow-xs' : 'text-[#73706A] hover:text-[#2D2E2E]'
                }`}
              >
                অসমীয়া
              </button>
              <button
                id="lang-hi"
                type="button"
                onClick={() => onLanguageChange('hi')}
                title="Hindi (हिंदी)"
                className={`px-2 py-1 rounded-md font-semibold transition-colors ${
                  language === 'hi' ? 'bg-[#FFFFFF] text-[#2D2E2E] shadow-xs' : 'text-[#73706A] hover:text-[#2D2E2E]'
                }`}
              >
                हिन्दी
              </button>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
