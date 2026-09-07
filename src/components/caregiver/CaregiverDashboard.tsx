import React, { useState, useMemo } from 'react';
import {
  PatientProfile,
  Reminder,
  TrendPoint,
  GameSession,
  Language,
  PatientDataset,
} from '../../types';
import { CognitiveTrendChart } from './CognitiveTrendChart';
import { CaregiverReminders } from './CaregiverReminders';
import { predictRisk } from '../../ml/riskModel';
import {
  ShieldCheck,
  Users,
  AlertTriangle,
  FileText,
  Sparkles,
  RefreshCw,
  Clock,
  CheckCircle2,
  Database,
  Download,
  Plus,
  X,
  UserCheck,
} from 'lucide-react';
import { speakText } from '../../utils/speech';
import { TRANSLATIONS } from '../../utils/translations';

interface CaregiverDashboardProps {
  patientProfile: PatientProfile;
  trendData: TrendPoint[];
  reminders: Reminder[];
  onAddReminder: (reminder: Reminder) => void;
  onUpdateReminder: (reminder: Reminder) => void;
  onDeleteReminder: (id: string) => void;
  gameSessions: GameSession[];
  language?: Language;
  patients?: PatientDataset[];
  activePatientId?: string;
  onSelectPatient?: (id: string) => void;
  onAddPatientDataset?: (newDataset: PatientDataset) => void;
}

export const CaregiverDashboard: React.FC<CaregiverDashboardProps> = ({
  patientProfile,
  trendData,
  reminders,
  onAddReminder,
  onUpdateReminder,
  onDeleteReminder,
  gameSessions,
  language = 'en',
  patients = [],
  activePatientId = patientProfile.id,
  onSelectPatient,
  onAddPatientDataset,
}) => {
  const t = TRANSLATIONS[language];
  const [flags, setFlags] = useState<string[]>([
    'Word Recall accuracy dipped 14% this week during late evening — consider shifting cognitive tasks to calmer morning hours.',
    'Visual memory & Pattern recognition remained high and stable at 84%, demonstrating resilient visual working memory.',
    'Morning medication adherence was 100%; evening routine completed with family assistance.',
  ]);

  const [weeklySummary, setWeeklySummary] = useState<string>(
    `${patientProfile.name} had a reassuring and active week overall. Visual memory and daily routine participation remained very stable, especially during morning hours. We noticed a slight fatigue pattern during late-afternoon memory recall, so shifting cognitive games to 10:00 AM will provide the gentlest and most encouraging experience.`
  );

  // Custom-trained logistic regression risk classifier — independent of
  // Gemini. Runs entirely client-side on the last 5 game sessions.
  const riskPrediction = useMemo(() => predictRisk(gameSessions, 5), [gameSessions]);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeCaregiverRole, setActiveCaregiverRole] = useState<'family' | 'asha'>('family');
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);

  // New Patient Form state
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('70');
  const [newGender, setNewGender] = useState<'Male' | 'Female' | 'Other'>('Female');
  const [newLocation, setNewLocation] = useState('Guwahati, Assam');
  const [newDiagnosis, setNewDiagnosis] = useState('Mild Cognitive Impairment');
  const [newCaregiver, setNewCaregiver] = useState('Family Caregiver');
  const [newAsha, setNewAsha] = useState('Community ASHA Health Worker');
  const [newHospital, setNewHospital] = useState('District Civil Hospital');
  const [newNotes, setNewNotes] = useState('');

  const handleRunAiAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const res = await fetch('/api/gemini/caregiver-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trendData,
          patientProfile,
          recentLogs: gameSessions.slice(0, 5),
          language,
        }),
      });

      const data = await res.json();
      if (data.flags && data.flags.length > 0) {
        setFlags(data.flags);
      }
      if (data.weeklySummary) {
        setWeeklySummary(data.weeklySummary);
      }
      setIsAnalyzing(false);
      speakText('Updated clinical assessment and weekly summary with Gemini.', language);
    } catch (err) {
      console.error(err);
      setIsAnalyzing(false);
    }
  };

  const handleExportTrainingData = () => {
    const trainingExport = {
      exportedAt: new Date().toISOString(),
      platform: 'Memory Mate Dementia Cognitive Care',
      patientDataset: {
        id: patientProfile.id,
        anonymizedCode: `SUBJ-${patientProfile.id.toUpperCase()}`,
        age: patientProfile.age,
        gender: patientProfile.gender,
        diagnosis: patientProfile.diagnosis,
        locationRegion: patientProfile.location,
        clinicalTrends: trendData,
        gameSessionsLogs: gameSessions.map((s) => ({
          sessionId: s.id,
          timestamp: s.timestamp,
          gameType: s.gameType,
          accuracyPercent: s.accuracy,
          averageLatencyMs: s.responseTimeMs,
          errorCount: s.errors,
          adaptiveLevel: s.level,
          geminiScore: s.score,
          clinicalTrend: s.trend,
        })),
        activeRemindersCount: reminders.length,
        completionAdherenceRate: Math.round(
          (reminders.filter((r) => r.completed).length / Math.max(1, reminders.length)) * 100
        ),
      },
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(trainingExport, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `memory_mate_patient_training_data_${patientProfile.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    speakText('Patient cognitive dataset exported successfully for AI training.', language);
  };

  const handleExportAllTrainingData = () => {
    const bulkExport = {
      exportedAt: new Date().toISOString(),
      platform: 'Memory Mate Dementia Cognitive Care',
      datasetType: 'Synthetic + Demo — Northeast India Longitudinal Cognitive Dataset',
      totalPatients: patients.length,
      patients: patients.map((p) => ({
        anonymizedCode: `SUBJ-${p.profile.id.toUpperCase()}`,
        age: p.profile.age,
        gender: p.profile.gender,
        diagnosis: p.profile.diagnosis,
        locationRegion: p.profile.location,
        clinicalTrends: p.trendData,
        gameSessionsLogs: p.gameSessions.map((s) => ({
          sessionId: s.id,
          timestamp: s.timestamp,
          gameType: s.gameType,
          accuracyPercent: s.accuracy,
          averageLatencyMs: s.responseTimeMs,
          errorCount: s.errors,
          adaptiveLevel: s.level,
          geminiScore: s.score,
          clinicalTrend: s.trend,
        })),
      })),
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(bulkExport, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `memory_mate_full_training_dataset_${patients.length}_patients.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    speakText(`Full training dataset with ${patients.length} patients exported successfully.`, language);
  };

  const handleCreatePatient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newId = `patient-${Date.now()}`;
    const newProfile: PatientProfile = {
      id: newId,
      name: newName.trim(),
      age: Number(newAge) || 70,
      gender: newGender,
      location: newLocation.trim(),
      diagnosis: newDiagnosis.trim(),
      primaryCaregiver: newCaregiver.trim(),
      ashaWorker: newAsha.trim(),
      hospital: newHospital.trim(),
      notes: newNotes.trim() || 'New patient profile registered for cognitive monitoring.',
    };

    const newDataset: PatientDataset = {
      profile: newProfile,
      knownFaces: [
        {
          id: `face-${Date.now()}-1`,
          name: newCaregiver.trim(),
          relationship: 'Primary Caregiver',
          location: newLocation.trim(),
          notes: 'Loving family support and daily care.',
          photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
        },
      ],
      reminders: [
        {
          id: `rem-${Date.now()}-1`,
          title: 'Morning Medicine & Warm Water',
          time: '08:30 AM',
          category: 'medication',
          completed: false,
          notes: 'Take with care after breakfast.',
          assignedBy: newCaregiver.trim(),
        },
      ],
      memories: [
        {
          id: `mem-${Date.now()}-1`,
          title: 'Family Courtyard Gathering',
          dateOrEra: 'Recent memory',
          location: newLocation.trim(),
          caption: 'Smiling with beloved family on a peaceful afternoon.',
          imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80',
          createdAt: new Date().toISOString().split('T')[0],
        },
      ],
      trendData: [
        { week: 'W1', memory: 75, attention: 78, executive: 74, composite: 76 },
        { week: 'W2', memory: 78, attention: 80, executive: 76, composite: 78 },
      ],
      gameSessions: [],
    };

    if (onAddPatientDataset) {
      onAddPatientDataset(newDataset);
    }
    if (onSelectPatient) {
      onSelectPatient(newId);
    }

    setShowAddPatientModal(false);
    setNewName('');
    speakText(`New patient dataset for ${newProfile.name} initialized.`, language);
  };

  return (
    <div id="caregiver-dashboard-container" className="space-y-6">
      {/* Patient Training & Research Datasets Management Bar */}
      <div className="bg-white rounded-2xl p-5 border border-[#E5E1D8] shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0] flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[#2D2E2E] text-base sm:text-lg">
                  {language === 'as' ? 'ৰোগী প্ৰশিক্ষণ আৰু গৱেষণা তথ্য' : language === 'hi' ? 'मरीज़ प्रशिक्षण व शोध डेटाबेस' : 'Patient Training & Research Datasets'}
                </h3>
                <span className="text-xs bg-[#F0F3EE] text-[#5C6E53] font-semibold px-2 py-0.5 rounded-md border border-[#D5DFD0]">
                  {patients.length} {language === 'as' ? 'ৰোগী সংৰক্ষিত' : language === 'hi' ? 'मरीज़ डेटासेट्स' : 'Datasets'}
                </span>
                <span className="text-xs bg-[#FDF3E7] text-[#8C5E28] font-semibold px-2 py-0.5 rounded-md border border-[#F0DDBB]">
                  {language === 'as' ? 'কৃত্ৰিম ডেম' : language === 'hi' ? 'सिंथेटिक डेमो' : 'Synthetic Demo Data'}
                </span>
              </div>
              <p className="text-xs text-[#73706A]">
                {language === 'as'
                  ? 'ভিন্ন লিংগ আৰু স্তৰৰ ৰোগীৰ তথ্য বাছনি কৰক বা ভৱিষ্যত এআই প্ৰশিক্ষণৰ বাবে ৰপ্তানি কৰক।'
                  : language === 'hi'
                  ? 'विभिन्न वृद्धजनों का डेटा चुनें अथवा भविष्य में एआई मॉडल प्रशिक्षण हेतु डाउनलोड करें।'
                  : 'Synthetic reference dataset (modeled on general worldwide dementia trends) used to benchmark new real patients against typical decline, stable, and improvement trajectories.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Patient Switcher: searchable dropdown for large datasets */}
            <div className="relative w-full sm:w-64">
              <select
                value={activePatientId}
                onChange={(e) => onSelectPatient && onSelectPatient(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 pr-8 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-sm font-semibold text-[#2D2E2E] focus:outline-none focus:border-[#7C9070] cursor-pointer"
              >
                {patients.map((p) => (
                  <option key={p.profile.id} value={p.profile.id}>
                    {p.profile.name} ({p.profile.gender}, {p.profile.age}y) — {p.profile.location.split(',')[0]}
                  </option>
                ))}
              </select>
              <UserCheck className="w-4 h-4 text-[#7C9070] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Export for Training */}
            <button
              type="button"
              onClick={handleExportTrainingData}
              className="px-3.5 py-1.5 bg-[#FAF9F6] hover:bg-[#F0F3EE] text-[#2D2E2E] border border-[#E5E1D8] hover:border-[#7C9070] rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
              title="Export JSON for model training"
            >
              <Download className="w-3.5 h-3.5 text-[#7C9070]" />
              <span>{language === 'as' ? 'প্ৰশিক্ষণ তথ্য সংগ্ৰহ (JSON)' : language === 'hi' ? 'प्रशिक्षण डेटा निर्यात (JSON)' : 'Export Current Patient'}</span>
            </button>

            {/* Bulk Export All Patients */}
            <button
              type="button"
              onClick={handleExportAllTrainingData}
              className="px-3.5 py-1.5 bg-[#F0F3EE] hover:bg-[#E5EBE0] text-[#5C6E53] border border-[#D5DFD0] hover:border-[#7C9070] rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
              title={`Export all ${patients.length} patients as one JSON training dataset`}
            >
              <Database className="w-3.5 h-3.5 text-[#7C9070]" />
              <span>
                {language === 'as'
                  ? `সকলো (${patients.length}) ৰপ্তানি কৰক`
                  : language === 'hi'
                  ? `सभी (${patients.length}) निर्यात करें`
                  : `Export All ${patients.length} (Training Set)`}
              </span>
            </button>

            {/* Add New Patient */}
            <button
              type="button"
              onClick={() => setShowAddPatientModal(true)}
              className="px-3.5 py-1.5 bg-[#7C9070] hover:bg-[#687A5E] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{language === 'as' ? 'নতুন ৰোগী তথ্য' : language === 'hi' ? 'नया मरीज़ जोड़ें' : 'Add Patient'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Patient Profile & Multi-Caregiver Header */}
      <div className="bg-white text-[#2D2E2E] rounded-2xl p-6 sm:p-8 border border-[#E5E1D8] shadow-xs relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Patient Details */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F0F3EE] px-3 py-1 rounded-full text-xs font-semibold mb-2 border border-[#D5DFD0] text-[#5C6E53]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7C9070]" />
                <span>{language === 'as' ? 'যত্নকৰ্তা আৰু ক্লিনিচিয়ান পৰ্টেল' : language === 'hi' ? 'देखभालकर्ता व चिकित्सक पोर्टल' : 'Caregiver & Clinician Portal'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D2E2E]">
                {patientProfile.name}, {patientProfile.age} yrs
                <span className="text-sm font-normal text-[#73706A] ml-2">({patientProfile.gender})</span>
              </h2>
              <p className="text-[#73706A] text-sm mt-1 flex flex-wrap items-center gap-2">
                <span className="font-medium text-[#2D2E2E]">{patientProfile.diagnosis}</span>
                <span>•</span>
                <span>{patientProfile.location}</span>
                <span>•</span>
                <span>{language === 'as' ? 'চিকিৎসালয়:' : language === 'hi' ? 'अस्पताल:' : 'Hospital:'} {patientProfile.hospital}</span>
              </p>
              {patientProfile.notes && (
                <p className="text-xs text-[#73706A] italic mt-1.5">
                  "{patientProfile.notes}"
                </p>
              )}

              {riskPrediction && (
                <div className="mt-3">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${
                      riskPrediction.label === 'High'
                        ? 'bg-[#FCEEEE] text-[#9B3B3B] border-[#F0C9C9]'
                        : riskPrediction.label === 'Medium'
                        ? 'bg-[#FDF6ED] text-[#8C5E28] border-[#E8D4BE]'
                        : 'bg-[#F0F3EE] text-[#5C6E53] border-[#D5DFD0]'
                    }`}
                    title={`Custom logistic regression model confidence: ${(riskPrediction.confidence * 100).toFixed(0)}%`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        riskPrediction.label === 'High'
                          ? 'bg-[#C24C4C]'
                          : riskPrediction.label === 'Medium'
                          ? 'bg-[#C58A3E]'
                          : 'bg-[#7C9070]'
                      }`}
                    />
                    <span>
                      {language === 'as'
                        ? `জ্ঞানীয় ঝুঁকি: ${riskPrediction.label}`
                        : language === 'hi'
                        ? `संज्ञानात्मक जोखिम: ${riskPrediction.label}`
                        : `Cognitive Risk: ${riskPrediction.label}`}
                    </span>
                    <span className="opacity-70 font-semibold">
                      ({(riskPrediction.confidence * 100).toFixed(0)}%)
                    </span>
                  </div>
                  <p className="text-[11px] text-[#73706A] mt-1.5 max-w-md">
                    {language === 'en'
                      ? `Custom-trained model (not Gemini) — based on the last ${Math.min(5, gameSessions.length)} game sessions. Top factor: ${
                          riskPrediction.topFactors[0]?.feature.replace(/_/g, ' ')
                        }.`
                      : language === 'hi'
                      ? `पिछले ${Math.min(5, gameSessions.length)} सत्रों पर आधारित (स्वतंत्र मॉडल)।`
                      : `শেষৰ ${Math.min(5, gameSessions.length)} টা সেশ্বনৰ ওপৰত ভিত্তি কৰি (স্বতন্ত্ৰ মডেল)।`}
                  </p>
                </div>
              )}
            </div>

            {/* Multi-Caregiver Shared Access UI Badge */}
            <div className="bg-[#FAF9F6] border border-[#E5E1D8] p-4 rounded-xl max-w-md w-full">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#7C9070]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#73706A]">
                    {language === 'as' ? 'ভাগ-বটোৱাৰা যত্ন প্ৰণালী' : language === 'hi' ? 'साझा देखभालकर्ता प्रणाली' : 'Multi-Caregiver Shared Access'}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#5C6E53] bg-[#F0F3EE] border border-[#D5DFD0] px-2 py-0.5 rounded-md">
                  Active Sync
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setActiveCaregiverRole('family')}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    activeCaregiverRole === 'family'
                      ? 'bg-white text-[#2D2E2E] border-[#7C9070] ring-1 ring-[#7C9070] shadow-xs'
                      : 'bg-[#FAF9F6] text-[#2D2E2E] border-[#E5E1D8] hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-bold block text-[#2D2E2E]">
                    {language === 'as' ? 'পৰিয়ালৰ সদস্য' : language === 'hi' ? 'परिवार सदस्य' : 'Family Caregiver'}
                  </span>
                  <span className="text-[11px] text-[#73706A] block truncate">
                    {patientProfile.primaryCaregiver}
                  </span>
                  <span className="text-[10px] text-[#5C6E53] font-bold block mt-0.5">
                    ● Primary Contact
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCaregiverRole('asha')}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    activeCaregiverRole === 'asha'
                      ? 'bg-white text-[#2D2E2E] border-[#7C9070] ring-1 ring-[#7C9070] shadow-xs'
                      : 'bg-[#FAF9F6] text-[#2D2E2E] border-[#E5E1D8] hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-bold block text-[#2D2E2E]">
                    {language === 'as' ? 'আশা স্বাস্থ্যকৰ্মী' : language === 'hi' ? 'आशा कार्यकर्ता' : 'ASHA Worker'}
                  </span>
                  <span className="text-[11px] text-[#73706A] block truncate">
                    {patientProfile.ashaWorker}
                  </span>
                  <span className="text-[10px] text-[#7C9070] font-bold block mt-0.5">
                    ● Community Outreach
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* AI Concerns Panel & Weekly Summary (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 1. AI-Flagged Concerns Panel */}
        <div id="ai-concerns-panel" className="bg-white rounded-2xl p-6 border border-[#E5E1D8] shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-[#E5E1D8] pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#FDF6ED] text-[#8C5E28] border border-[#E8D4BE] rounded-xl">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2E2E] text-lg">
                    {language === 'as' ? 'এআই চিহ্নিত স্বাস্থ্য নিৰীক্ষণ' : language === 'hi' ? 'एआई-चिह्नित स्वास्थ्य निगरानी' : 'AI-Flagged Clinical Concerns'}
                  </h3>
                  <p className="text-xs text-[#73706A]">
                    {language === 'as' ? 'জ্ঞানীয় নম্বৰ আৰু খেলৰ তথ্যৰ জেমিনি বিশ্লেষণ' : language === 'hi' ? 'संज्ञानात्मक स्कोर व खेलों का जेमिनी विश्लेषण' : 'Gemini analysis of recent cognitive scores & game logs'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleRunAiAnalysis}
                disabled={isAnalyzing}
                className="px-3 py-1.5 bg-[#F5F3EF] hover:bg-[#E5E1D8] disabled:opacity-60 text-[#2D2E2E] font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors border border-[#E5E1D8]"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
                <span>{language === 'as' ? 'পুনৰ পৰীক্ষা' : language === 'hi' ? 'पुनः विश्लेषण' : 'Re-Analyze'}</span>
              </button>
            </div>

            <div className="space-y-3">
              {flags.map((flag, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5E1D8] text-[#2D2E2E] text-sm font-normal flex items-start gap-2.5"
                >
                  <div className="w-2 h-2 rounded-full bg-[#7C9070] shrink-0 mt-2" />
                  <p className="leading-relaxed text-[#2D2E2E]">{flag}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-[#73706A] bg-[#FAF9F6] p-3 rounded-xl border border-[#E5E1D8] flex items-center justify-between">
            <span>{language === 'as' ? `আশা কৰ্মী (${patientProfile.ashaWorker}) সৈতে সংযুক্ত` : language === 'hi' ? `आशा कार्यकर्ता (${patientProfile.ashaWorker}) के साथ साझा` : `Shared with ${patientProfile.ashaWorker}`}</span>
            <span className="font-semibold text-[#5C6E53]">No acute emergencies</span>
          </div>
        </div>

        {/* 2. Auto-Generated Weekly Summary */}
        <div id="weekly-summary-panel" className="bg-white rounded-2xl p-6 border border-[#E5E1D8] shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-[#E5E1D8] pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0] rounded-xl">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2E2E] text-lg">
                    {language === 'as' ? 'সাপ্তাহিক পৰিয়াল আৰু চিকিৎসক প্ৰতিবেদন' : language === 'hi' ? 'साप्ताहिक परिवार व चिकित्सक सारांश' : 'Weekly Family & Clinician Summary'}
                  </h3>
                  <p className="text-xs text-[#73706A]">
                    {language === 'as' ? 'পৰিয়াল আৰু স্বাস্থ্যকৰ্মীৰ বাবে জেমিনি দ্বাৰা প্ৰস্তুত' : language === 'hi' ? 'परिवार व स्वास्थ्य कार्यकर्ताओं हेतु जेमिनी द्वारा निर्मित' : 'Auto-generated by Gemini for family and healthcare volunteers'}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-semibold bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0] px-2.5 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-[#7C9070]" />
                <span>Gemini Powered</span>
              </div>
            </div>

            <div className="bg-[#FAF9F6] rounded-xl p-4 border border-[#E5E1D8] text-[#2D2E2E] text-sm sm:text-base leading-relaxed space-y-3 font-normal">
              <p>{weeklySummary}</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E5E1D8] text-xs">
            <span className="text-[#73706A]">Week 9 longitudinal cycle</span>
            <button
              type="button"
              onClick={handleRunAiAnalysis}
              disabled={isAnalyzing}
              className="text-[#7C9070] hover:text-[#5C6E53] font-semibold flex items-center gap-1"
            >
              <span>{language === 'as' ? 'জেমিনিৰ সৈতে নতুন প্ৰতিবেদন প্ৰস্তুত কৰক' : language === 'hi' ? 'जेमिनी द्वारा पुनः सारांश बनाएं' : 'Regenerate Summary with Gemini'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* 8-Week Longitudinal Cognitive Trend Chart */}
      <CognitiveTrendChart data={trendData} />

      {/* Reminder & Medicine Prescription Management */}
      <CaregiverReminders
        reminders={reminders}
        onAddReminder={onAddReminder}
        onUpdateReminder={onUpdateReminder}
        onDeleteReminder={onDeleteReminder}
      />

      {/* Detailed Patient Game Sessions Log */}
      <div id="caregiver-session-log" className="bg-white rounded-2xl p-6 border border-[#E5E1D8] shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-3">
          <div>
            <h3 className="text-xl font-bold text-[#2D2E2E]">
              {language === 'as' ? 'শেহতীয়া জ্ঞানীয় মূল্যায়ন অধিৱেশনসমূহ' : language === 'hi' ? 'हाल के संज्ञानात्मक मूल्यांकन सत्र' : 'Recent Cognitive Assessment Sessions'}
            </h3>
            <p className="text-sm text-[#73706A]">
              {language === 'as' ? 'সঠিকতা, সঁহাৰিৰ সময় আৰু এআই মূল্যায়ন তালিকা' : language === 'hi' ? 'सटीकता, प्रतिक्रिया गति और एआई मूल्यांकन विवरण' : 'Raw session performance metrics, latency, and AI evaluation logs'}
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F5F3EF] text-[#2D2E2E] border border-[#E5E1D8]">
            {gameSessions.length} {language === 'as' ? 'অধিৱেশন সংৰক্ষিত' : language === 'hi' ? 'कुल सत्र दर्ज' : 'Total Sessions Logged'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#E5E1D8] text-xs font-bold text-[#73706A] uppercase tracking-wider">
                <th className="pb-3 pl-2">{language === 'as' ? 'সময়' : language === 'hi' ? 'समय' : 'Session Timestamp'}</th>
                <th className="pb-3">{language === 'as' ? 'খেলৰ বিষয়' : language === 'hi' ? 'अभ्यास' : 'Exercise Domain'}</th>
                <th className="pb-3">{language === 'as' ? 'সঠিকতা' : language === 'hi' ? 'सटीकता' : 'Accuracy'}</th>
                <th className="pb-3">{language === 'as' ? 'গতি' : language === 'hi' ? 'गति' : 'Avg Latency'}</th>
                <th className="pb-3">{language === 'as' ? 'ভুল' : language === 'hi' ? 'भूल' : 'Errors'}</th>
                <th className="pb-3">{language === 'as' ? 'এআই স্কোৰ' : language === 'hi' ? 'एआई स्कोर' : 'AI Score'}</th>
                <th className="pb-3">{language === 'as' ? 'গতিধাৰা' : language === 'hi' ? 'प्रवृत्ति' : 'Trend'}</th>
                <th className="pb-3 pr-2 text-right">{language === 'as' ? 'স্থিতি' : language === 'hi' ? 'स्थिति' : 'Sync Status'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E1D8]">
              {gameSessions.map((sess) => (
                <tr key={sess.id} className="hover:bg-[#FAF9F6] transition-colors">
                  <td className="py-3 pl-2 text-[#73706A] font-medium whitespace-nowrap">
                    {sess.timestamp}
                  </td>
                  <td className="py-3 font-semibold text-[#2D2E2E]">
                    {sess.gameTitle}
                  </td>
                  <td className="py-3">
                    <span className="font-bold text-[#2D2E2E]">{sess.accuracy}%</span>
                  </td>
                  <td className="py-3 text-[#73706A]">
                    {(sess.responseTimeMs / 1000).toFixed(1)}s
                  </td>
                  <td className="py-3 text-[#73706A]">
                    {sess.errors}
                  </td>
                  <td className="py-3 font-bold text-[#7C9070]">
                    {sess.score ?? sess.accuracy} / 100
                  </td>
                  <td className="py-3 capitalize text-xs font-semibold">
                    <span
                      className={`px-2 py-0.5 rounded-md border ${
                        sess.trend === 'improving'
                          ? 'bg-[#F0F3EE] text-[#5C6E53] border-[#D5DFD0]'
                          : sess.trend === 'declining'
                          ? 'bg-[#FDF6ED] text-[#8C5E28] border-[#E8D4BE]'
                          : 'bg-[#F5F3EF] text-[#73706A] border-[#E5E1D8]'
                      }`}
                    >
                      {sess.trend || 'stable'}
                    </span>
                  </td>
                  <td className="py-3 pr-2 text-right">
                    {sess.synced ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#5C6E53]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9070]" />
                        <span>Cloud Synced</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C5E28]">
                        <Clock className="w-3.5 h-3.5 text-[#8C5E28]" />
                        <span>Queued Local</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Patient Profile Modal */}
      {showAddPatientModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-lg border border-[#E5E1D8]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-[#2D2E2E]">
                  {language === 'as' ? 'নতুন ৰোগীৰ তথ্য অন্তৰ্ভুক্ত কৰক' : language === 'hi' ? 'नया मरीज़ प्रोफ़ाइल जोड़ें' : 'Add New Patient Dataset'}
                </h4>
                <p className="text-xs text-[#73706A]">
                  {language === 'as' ? 'প্ৰশিক্ষণ আৰু জ্ঞানীয় নিৰীক্ষণৰ বাবে' : language === 'hi' ? 'मॉडल प्रशिक्षण व दैनिक निगरानी हेतु' : 'For longitudinal tracking, clinical care, and model training'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddPatientModal(false)}
                className="p-1 text-[#73706A] hover:text-[#2D2E2E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePatient} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'ৰোগীৰ নাম *' : language === 'hi' ? 'मरीज़ का नाम *' : 'Patient Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Deepali Devi"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'বয়স *' : language === 'hi' ? 'आयु *' : 'Age *'}
                  </label>
                  <input
                    type="number"
                    required
                    min={45}
                    max={105}
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'লিংগ' : language === 'hi' ? 'लिंग' : 'Gender'}
                  </label>
                  <select
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Non-Binary / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'স্থান (চহৰ / জিলা)' : language === 'hi' ? 'स्थान (ज़िला / नगर)' : 'Location / District'}
                  </label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g. Dibrugarh, Assam"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'চিকিৎসা নিৰ্ণয় / স্তৰ' : language === 'hi' ? 'चिकित्सीय निदान / स्थिति' : 'Diagnosis / Stage'}
                </label>
                <input
                  type="text"
                  value={newDiagnosis}
                  onChange={(e) => setNewDiagnosis(e.target.value)}
                  placeholder="e.g. Mild Cognitive Impairment (Early Stage)"
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'মুখ্য পৰিয়াল যত্নকৰ্তা' : language === 'hi' ? 'मुख्य परिजन देखभालकर्ता' : 'Family Caregiver'}
                  </label>
                  <input
                    type="text"
                    value={newCaregiver}
                    onChange={(e) => setNewCaregiver(e.target.value)}
                    placeholder="e.g. Son / Daughter"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'আশা স্বাস্থ্যকৰ্মী' : language === 'hi' ? 'आशा स्वास्थ्य कार्यकर्ता' : 'ASHA Worker'}
                  </label>
                  <input
                    type="text"
                    value={newAsha}
                    onChange={(e) => setNewAsha(e.target.value)}
                    placeholder="e.g. Health Sub-Center Worker"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'বিশেষ টোকা বা পছন্দ' : language === 'hi' ? 'विशेष रुचि / पृष्ठभूमि' : 'Background Notes & Sensory Preferences'}
                </label>
                <textarea
                  rows={2}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="e.g. Loves gardening, listening to folk songs, drinking light Assam tea."
                  className="w-full px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#E5E1D8]">
                <button
                  type="button"
                  onClick={() => setShowAddPatientModal(false)}
                  className="px-4 py-2 text-[#73706A] hover:text-[#2D2E2E] text-sm font-semibold"
                >
                  {language === 'as' ? 'বাতিল' : language === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-sm rounded-xl shadow-xs"
                >
                  {language === 'as' ? 'ৰোগী সৃষ্টি কৰক' : language === 'hi' ? 'मरीज़ जोड़ें' : 'Save & Activate Patient'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
