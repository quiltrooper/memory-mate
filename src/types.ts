export type GameType = 'pattern' | 'word' | 'matching';

export type CognitiveTrend = 'improving' | 'stable' | 'declining';

export interface GameSession {
  id: string;
  timestamp: string;
  gameType: GameType;
  gameTitle: string;
  accuracy: number; // 0 - 100
  responseTimeMs: number;
  errors: number;
  level: number;
  score?: number; // 0 - 100 from Gemini
  trend?: CognitiveTrend;
  supportiveMessage?: string;
  synced: boolean;
  dataSource?: 'recorded' | 'demo' | 'legacy';
  metricVersion?: number;
  scoreSource?: 'local';
  feedbackSource?: 'gemini';
}

export type ReminderCategory = 'medication' | 'meal' | 'appointment' | 'routine';

export interface Reminder {
  id: string;
  title: string;
  time: string; // e.g. "08:30 AM"
  category: ReminderCategory;
  completed: boolean;
  notes?: string;
  assignedBy?: string;
}

export interface MemoryItem {
  id: string;
  title: string;
  dateOrEra: string;
  location: string;
  caption: string;
  imageUrl: string;
  aiPrompt?: string;
  createdAt: string;
}

export interface KnownFace {
  id: string;
  name: string;
  relationship: string;
  location: string;
  notes: string;
  photoUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  imagePreview?: string;
}

export interface PatientProfile {
  id: string;
  name: string;
  age: number;
  gender: string;
  location: string;
  diagnosis: string;
  primaryCaregiver: string;
  ashaWorker: string;
  hospital: string;
  notes?: string;
}

export interface PatientDataset {
  dataSource?: 'demo' | 'user' | 'legacy';
  profile: PatientProfile;
  reminders: Reminder[];
  memories: MemoryItem[];
  knownFaces: KnownFace[];
  trendData: TrendPoint[];
  gameSessions: GameSession[];
}

export interface TrendPoint {
  week: string;
  memory: number;
  attention: number;
  executive: number;
  composite: number;
}

export type Language = 'en' | 'as' | 'hi';
