import type { PatientDataset } from '../types';
import { validSession } from './activity';
export function validDataset(value: any): value is PatientDataset {
 const strings=(item:any,keys:string[])=>Boolean(item)&&keys.every(key=>typeof item[key]==='string');
 if(!value || !strings(value.profile,['id','name','location','gender','diagnosis','primaryCaregiver','ashaWorker','hospital']) || !value.profile.id || !value.profile.name || !Number.isFinite(value.profile.age))return false;
 if(!['reminders','memories','knownFaces','trendData','gameSessions'].every(key=>Array.isArray(value[key])))return false;
 return value.gameSessions.every((s:any)=>s&&typeof s.id==='string'&&typeof s.timestamp==='string'&&validSession(s)) &&
 value.reminders.every((r:any)=>strings(r,['id','title','time'])&&['medication','meal','appointment','routine'].includes(r.category)&&typeof r.completed==='boolean')&&
 value.memories.every((m:any)=>strings(m,['id','title','caption','imageUrl','dateOrEra','location']))&&
 value.knownFaces.every((f:any)=>strings(f,['id','name','relationship','photoUrl','location','notes']));
}
export function parseStoredPatients(raw:string|null): PatientDataset[] | null {
 if(raw===null)return null;
 const result=JSON.parse(raw);
 if(!Array.isArray(result)||!result.length||!result.every(validDataset)||new Set(result.map(p=>p.profile.id)).size!==result.length)throw new Error('Invalid patient records');
 return result;
}
