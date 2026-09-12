import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStoredPatients, validDataset } from '../src/utils/storage';
import { ALL_PATIENTS } from '../src/data/initialData';
test('bundled datasets remain readable during migration',()=>{assert.ok(ALL_PATIENTS.every(validDataset));assert.equal(parseStoredPatients(JSON.stringify(ALL_PATIENTS))!.length,ALL_PATIENTS.length);});
test('corrupt and empty stored records are rejected rather than silently replacing data',()=>{assert.equal(parseStoredPatients(null),null);assert.throws(()=>parseStoredPatients('{broken'));assert.throws(()=>parseStoredPatients('[]'));assert.throws(()=>parseStoredPatients(JSON.stringify([{profile:{id:'one'}}])));assert.throws(()=>parseStoredPatients(JSON.stringify([ALL_PATIENTS[0],ALL_PATIENTS[0]])));});
