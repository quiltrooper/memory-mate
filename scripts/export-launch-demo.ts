import { writeFileSync } from 'node:fs';
import { LAUNCH_DEMO_PATIENTS } from '../src/data/launchDemo';
import { GENERATED_PATIENTS } from '../src/data/generatedPatients';
import { validDataset } from '../src/utils/storage';

const patients = [
  ...LAUNCH_DEMO_PATIENTS,
  ...GENERATED_PATIENTS.map(patient => ({
    ...patient,
    dataSource: 'demo' as const,
    gameSessions: patient.gameSessions.map(session => ({ ...session, dataSource: 'demo' as const, synced: false })),
  })),
];
if (patients.length !== 103 || new Set(patients.map(p => p.profile.id)).size !== 103 || !patients.every(validDataset)) {
  throw new Error('Expected 103 unique, valid synthetic patient records');
}
writeFileSync('backend/demo-patients.json', JSON.stringify(patients, null, 2));
console.log('Exported 103 synthetic patient records');
