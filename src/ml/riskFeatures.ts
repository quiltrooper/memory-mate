import { recentSessions, sessionConsistency } from '../utils/activity';
import type { GameSession } from '../types';
export const FEATURE_NAMES = ['accuracy','response_time_ms','errors','activity_days_7','accuracy_std','level'] as const;
export function riskFeatures(sessions: GameSession[], now = new Date()) {
  const recent = recentSessions(sessions.filter(s => s.metricVersion === 2), 5);
  if (recent.length < 3) return null;
  const mean = (key: 'accuracy' | 'responseTimeMs' | 'errors' | 'level') => recent.reduce((sum,s) => sum+s[key],0)/recent.length;
  const accuracy = mean('accuracy');
  return { accuracy, response_time_ms: mean('responseTimeMs'), errors: mean('errors'), activity_days_7: sessionConsistency(sessions,now).days, accuracy_std: Math.sqrt(recent.reduce((sum,s) => sum+(s.accuracy-accuracy)**2,0)/recent.length), level:mean('level') };
}
