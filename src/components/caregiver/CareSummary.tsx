import React, { useMemo } from 'react';
import { Activity, Brain, CheckCircle2, Clock3, ShieldAlert, Volume2 } from 'lucide-react';
import { GameSession, Reminder } from '../../types';
import { RiskPrediction } from '../../ml/riskModel';

interface CareSummaryProps {
  gameSessions: GameSession[];
  reminders: Reminder[];
  riskPrediction: RiskPrediction | null;
  onSpeak: (text: string) => void;
}

export const CareSummary: React.FC<CareSummaryProps> = ({ gameSessions, reminders, riskPrediction, onSpeak }) => {
  const metrics = useMemo(() => {
    const recent = gameSessions.slice(0, 5);
    const count = recent.length;
    return {
      accuracy: count ? Math.round(recent.reduce((total, item) => total + item.accuracy, 0) / count) : null,
      response: count ? (recent.reduce((total, item) => total + item.responseTimeMs, 0) / count / 1000).toFixed(1) : null,
      errors: count ? (recent.reduce((total, item) => total + item.errors, 0) / count).toFixed(1) : null,
      completed: reminders.filter((item) => item.completed).length,
    };
  }, [gameSessions, reminders]);

  const adherence = reminders.length ? Math.round((metrics.completed / reminders.length) * 100) : 0;
  const followUp = !riskPrediction
    ? 'Complete a cognitive game to begin the local risk assessment.'
    : riskPrediction.label === 'High'
    ? 'Review recent sessions with the family caregiver and ASHA worker.'
    : riskPrediction.label === 'Medium'
    ? 'Continue daily activities and review the next few sessions for changes.'
    : 'Continue the current routine and encourage regular cognitive activities.';
  const spoken = `Care summary. ${gameSessions.length} sessions recorded. Recent average accuracy is ${metrics.accuracy ?? 'not available'} percent. Reminder completion is ${adherence} percent. ${followUp}`;

  return (
    <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E1D8] shadow-xs" aria-labelledby="care-summary-title">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div><h3 id="care-summary-title" className="font-bold text-[#2D2E2E] text-lg">Caregiver Daily Summary</h3><p className="text-xs text-[#73706A] mt-0.5">Recent session metrics stored on this device. The risk signal supports care conversations and does not diagnose dementia.</p></div>
        <button type="button" onClick={() => onSpeak(spoken)} className="shrink-0 px-3 py-2 bg-[#F0F3EE] hover:bg-[#E6ECE4] text-[#5C6E53] rounded-lg text-xs font-bold flex items-center gap-1.5 border border-[#D5DFD0]"><Volume2 className="w-4 h-4" />Read summary</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <Metric icon={<Brain className="w-4 h-4" />} label="Sessions" value={String(gameSessions.length)} detail="Recorded locally" />
        <Metric icon={<Activity className="w-4 h-4" />} label="Recent accuracy" value={metrics.accuracy === null ? '—' : `${metrics.accuracy}%`} detail="Last 5 sessions" />
        <Metric icon={<Clock3 className="w-4 h-4" />} label="Response time" value={metrics.response === null ? '—' : `${metrics.response}s`} detail={metrics.errors === null ? 'No sessions yet' : `${metrics.errors} avg. errors`} />
        <Metric icon={<CheckCircle2 className="w-4 h-4" />} label="Reminders" value={`${adherence}%`} detail={`${metrics.completed} of ${reminders.length} complete`} />
        <Metric icon={<ShieldAlert className="w-4 h-4" />} label="Local risk signal" value={riskPrediction?.label ?? 'Pending'} detail={riskPrediction ? `${Math.round(riskPrediction.confidence * 100)}% model confidence` : 'Needs a session'} tone={riskPrediction?.label} />
      </div>
      <div className="mt-4 px-3.5 py-3 rounded-xl bg-[#FAF9F6] border border-[#E5E1D8] text-sm text-[#2D2E2E]"><span className="font-bold text-[#5C6E53]">Suggested follow-up: </span>{followUp}</div>
    </section>
  );
};

function Metric({ icon, label, value, detail, tone }: { icon: React.ReactNode; label: string; value: string; detail: string; tone?: 'Low' | 'Medium' | 'High' }) {
  const color = tone === 'High' ? 'text-[#9B3B3B]' : tone === 'Medium' ? 'text-[#8C5E28]' : 'text-[#5C6E53]';
  return <div className="rounded-xl border border-[#E5E1D8] bg-[#FAF9F6] p-3.5 min-h-28"><div className={`flex items-center gap-1.5 text-xs font-semibold ${tone ? color : 'text-[#73706A]'}`}>{icon}{label}</div><p className={`text-xl font-bold mt-2 ${tone ? color : 'text-[#2D2E2E]'}`}>{value}</p><p className="text-[11px] text-[#73706A] mt-1 leading-4">{detail}</p></div>;
}
