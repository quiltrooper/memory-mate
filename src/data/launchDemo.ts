import type { PatientDataset, GameType } from '../types';
import { INITIAL_PATIENTS } from './initialData';

// Fictional launch examples; never treated as measured patient activity.
export const LAUNCH_DEMO_PATIENTS: PatientDataset[] = INITIAL_PATIENTS.slice(0, 3).map((patient, index) => {
  const id = `launch-demo-${index + 1}`;
  return {
    ...patient,
    dataSource: 'demo',
    profile: { ...patient.profile, id, name: `${patient.profile.name} (Demo)`, diagnosis: 'Not assessed — fictional demonstration profile', notes: `Fictional launch example. ${patient.profile.notes ?? ''}` },
    knownFaces: patient.knownFaces.map((face, i) => ({ ...face, id: `${id}-face-${i}`, notes: `Fictional example; photo is illustrative. ${face.notes}` })),
    memories: patient.memories.map((memory, i) => ({ ...memory, id: `${id}-memory-${i}`, caption: `Sample memory: ${memory.caption}` })),
    reminders: [
      { id: `${id}-breakfast`, title: 'Breakfast and a glass of water', time: '08:30 AM', category: 'meal', completed: true, assignedBy: patient.profile.primaryCaregiver, notes: 'Sample daily routine.' },
      { id: `${id}-game`, title: 'Play a short memory game', time: '10:00 AM', category: 'routine', completed: false, assignedBy: patient.profile.primaryCaregiver },
      { id: `${id}-album`, title: 'Look through the family memory album', time: '04:00 PM', category: 'routine', completed: false, assignedBy: patient.profile.primaryCaregiver },
      { id: `${id}-call`, title: 'Evening call with family', time: '06:00 PM', category: 'routine', completed: false, assignedBy: patient.profile.primaryCaregiver },
    ],
    gameSessions: Array.from({ length: 9 }, (_, i) => {
      const gameType = (['word', 'pattern', 'matching'] as GameType[])[i % 3];
      const accuracy = Math.min(100, 50 + index * 10 + i * 3);
      return { id: `${id}-sample-${i}`, timestamp: new Date(Date.UTC(2026, 8, 3 + i, 10)).toISOString(), gameType, gameTitle: `${gameType === 'word' ? 'Word Recall' : gameType === 'pattern' ? 'Pattern Recall' : 'Picture Matching'} (sample)`, accuracy, responseTimeMs: 4000 - i * 150 + index * 200, errors: Math.max(0, 5 - Math.floor(i / 2)), level: 1, score: accuracy, synced: false, dataSource: 'demo', metricVersion: 2, supportiveMessage: 'Synthetic example session for the launch demonstration.' };
    }),
  };
});

export function withLaunchDemoPatients(patients: PatientDataset[]): PatientDataset[] {
  const existing = new Set(patients.map(patient => patient.profile.id));
  return [...LAUNCH_DEMO_PATIENTS.filter(patient => !existing.has(patient.profile.id)), ...patients];
}
