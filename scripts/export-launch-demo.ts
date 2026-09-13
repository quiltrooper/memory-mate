import { writeFileSync } from 'node:fs';
import { LAUNCH_DEMO_PATIENTS } from '../src/data/launchDemo';
writeFileSync('backend/demo-patients.json', JSON.stringify(LAUNCH_DEMO_PATIENTS, null, 2));
