import type { GameSession, Language } from '../types';
import { choose, scoreAccuracy } from './activity';

export async function assessSession(session: GameSession, offline: boolean, language: Language): Promise<GameSession> {
  const local: GameSession = { ...session, timestamp: session.timestamp || new Date().toISOString(), dataSource: 'recorded', metricVersion: 2, score: scoreAccuracy(session.accuracy), scoreSource: 'local', synced: false,
    supportiveMessage: choose(language, 'Your activity is saved on this device. Thank you for taking part.', 'आपकी गतिविधि इस डिवाइस पर सहेजी गई है। भाग लेने के लिए धन्यवाद।', 'আপোনাৰ কাৰ্যকলাপ এই ডিভাইচত সংৰক্ষিত হৈছে। অংশ লোৱাৰ বাবে ধন্যবাদ।') };
  if (offline) return local;
  try {
    const response = await fetch('/api/gemini/cognitive-score', { method: 'POST', headers: {'Content-Type':'application/json'}, signal: AbortSignal.timeout(15000), body: JSON.stringify({ ...local, language }) });
    const result = await response.json();
    if (!response.ok || result.source !== 'gemini' || typeof result.supportiveMessage !== 'string') return local;
    return { ...local, synced: true, supportiveMessage: result.supportiveMessage, feedbackSource: 'gemini' };
  } catch { return local; }
}

export async function saveAndAssess(session: GameSession, offline: boolean, language: Language, save: (s: GameSession) => void): Promise<GameSession> {
  const local = await assessSession(session, true, language);
  save(local);
  if (offline) return local;
  const result = await assessSession(local, false, language);
  if (result.synced) save(result);
  return result;
}
