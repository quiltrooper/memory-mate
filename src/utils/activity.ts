import type { GameSession, GameType, Language, Reminder } from '../types';

export const choose = (language: Language, en: string, hi: string, as: string) => ({ en, hi, as })[language];
export const scoreAccuracy = (accuracy: number) => Math.round(Math.max(0, Math.min(100, accuracy)));
export const isRecorded = (session: GameSession) => session.dataSource === 'recorded';
export const isDated = (session: GameSession) => /^\d{4}-\d{2}-\d{2}T/.test(session.timestamp) && Number.isFinite(Date.parse(session.timestamp));
export const validSession = (session: any): session is GameSession =>
  Boolean(session) &&
  ['pattern', 'word', 'matching'].includes(session.gameType) &&
  Number.isFinite(session.accuracy) && session.accuracy >= 0 && session.accuracy <= 100 &&
  Number.isFinite(session.responseTimeMs) && session.responseTimeMs >= 0 &&
  Number.isInteger(session.errors) && session.errors >= 0 &&
  Number.isInteger(session.level) && session.level >= 1;

export function recentSessions(sessions: GameSession[], count = 5) {
  return sessions.filter(s => isRecorded(s) && validSession(s) && isDated(s))
    .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)).slice(0, count);
}

export function adaptiveLevel(sessions: GameSession[], game: GameType) {
  const recent = recentSessions(sessions.filter(s => s.gameType === game), 3);
  if (!recent.length) return 1;
  const average = recent.reduce((sum, s) => sum + s.accuracy, 0) / recent.length;
  return Math.min(3, Math.max(1, recent[0].level + (average >= 85 ? 1 : average < 55 ? -1 : 0)));
}

export function sessionConsistency(sessions: GameSession[], now = new Date()) {
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const dates = new Set(sessions.filter(s => isRecorded(s) && isDated(s) && validSession(s))
    .filter(s => { const time = Date.parse(s.timestamp); return time >= today - 6 * 86400000 && time <= now.getTime(); })
    .map(s => new Date(s.timestamp).toISOString().slice(0, 10)));
  return { days: dates.size, percent: Math.round(dates.size / 7 * 100) };
}

export interface WeeklyActivity {
  week: string;
  memory: number | null;
  attention: number | null;
  executive: number | null;
  composite: number;
  sessions: number;
}

export function weeklyActivity(sessions: GameSession[]): WeeklyActivity[] {
  const buckets = new Map<string, GameSession[]>();
  for (const session of sessions.filter(s => isRecorded(s) && isDated(s) && validSession(s))) {
    const date = new Date(session.timestamp);
    date.setUTCHours(0, 0, 0, 0);
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 6) % 7);
    const key = date.toISOString().slice(0, 10);
    buckets.set(key, [...(buckets.get(key) ?? []), session]);
  }
  return [...buckets.entries()].sort(([a], [b]) => a.localeCompare(b)).slice(-8).map(([week, items]) => {
    const average = (subset: GameSession[]) => subset.length ? Math.round(subset.reduce((n, s) => n + s.accuracy, 0) / subset.length) : null;
    return { week, memory: average(items.filter(s => s.gameType === 'word')), attention: average(items.filter(s => s.gameType === 'pattern')), executive: average(items.filter(s => s.gameType === 'matching')), composite: average(items)!, sessions: items.length };
  });
}

export function activitySummary(sessions: GameSession[], reminders: Reminder[], language: Language) {
  const recent = recentSessions(sessions);
  const completed = reminders.filter(r => r.completed).length;
  const average = recent.length ? scoreAccuracy(recent.reduce((n, s) => n + s.accuracy, 0) / recent.length) : null;
  const consistency = sessionConsistency(sessions);
  const flags = [
    choose(language, `${recent.length} recent recorded sessions; average accuracy ${average === null ? 'not yet available' : `${average}%`}.`, `${recent.length} हाल के दर्ज सत्र; औसत सटीकता ${average === null ? 'अभी उपलब्ध नहीं' : `${average}%`}।`, `${recent.length} শেহতীয়া নথিভুক্ত অধিবেশন; গড় শুদ্ধতা ${average === null ? 'এতিয়াও উপলব্ধ নহয়' : `${average}%`}।`),
    choose(language, `${completed} of ${reminders.length} reminders currently marked complete.`, `${reminders.length} में से ${completed} अनुस्मारक पूरे चिह्नित हैं।`, `${reminders.length} টা সোঁৱৰণিৰ ভিতৰত ${completed} টা সম্পূৰ্ণ বুলি চিহ্নিত।`),
    choose(language, `Activity recorded on ${consistency.days} of the last 7 days (UTC).`, `पिछले 7 दिनों में ${consistency.days} दिन गतिविधि दर्ज हुई (UTC)।`, `যোৱা 7 দিনৰ ${consistency.days} দিনত কাৰ্যকলাপ নথিভুক্ত হৈছে (UTC)।`),
  ];
  return { flags, weeklySummary: flags.join(' ') };
}

export function mergeSessionUpdates(current: GameSession[], updates: GameSession[]) {
  const byId = new Map(updates.map(s => [s.id, s]));
  return current.map(s => byId.has(s.id) ? { ...s, ...byId.get(s.id) } : s);
}

export function sessionTime(timestamp: string, language: Language) {
  return /^\d{4}-\d{2}-\d{2}T/.test(timestamp) ? new Date(timestamp).toLocaleString({en:'en-IN',hi:'hi-IN',as:'as-IN'}[language]) : timestamp;
}
