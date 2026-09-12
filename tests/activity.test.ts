import test from 'node:test';
import assert from 'node:assert/strict';
import { scoreAccuracy, validSession, weeklyActivity, adaptiveLevel, sessionConsistency, activitySummary, mergeSessionUpdates } from '../src/utils/activity';
import { assessSession, saveAndAssess } from '../src/utils/assessment';
import { riskFeatures } from '../src/ml/riskFeatures';
import { predictRisk } from '../src/ml/riskModel';
import type { GameSession } from '../src/types';
const fixture = (changes: Partial<GameSession> = {}): GameSession => ({id:'one',timestamp:'2026-09-10T10:00:00.000Z',gameType:'word',gameTitle:'Word Recall',accuracy:0,responseTimeMs:3000,errors:3,level:1,synced:false,dataSource:'recorded',metricVersion:2,...changes});
test('zero scores and zero errors remain valid',()=>{assert.equal(scoreAccuracy(0),0);assert.equal(validSession(fixture({errors:0})),true);assert.equal(validSession(null),false);assert.equal(validSession(fixture({accuracy:NaN})),false);assert.equal(validSession(fixture({errors:-1})),false);});
test('weekly history measures each game and leaves unplayed domains empty',()=>{
 const rows=weeklyActivity([fixture(),fixture({id:'two',accuracy:100}),fixture({id:'three',gameType:'pattern',accuracy:80,timestamp:'2026-09-15T10:00:00.000Z'}),fixture({id:'demo',dataSource:'demo',accuracy:100})]);
 assert.equal(rows.length,2);assert.equal(rows[0].week,'2026-09-07');assert.equal(rows[0].memory,50);assert.equal(rows[0].attention,null);assert.equal(rows[1].attention,80);assert.equal(rows[1].memory,null);
});
test('consistency counts unique UTC days, excludes future, demo and legacy records',()=>{
 const sessions=[fixture(),fixture({id:'duplicate'}),fixture({timestamp:'10:00 AM',dataSource:'legacy'}),fixture({timestamp:'2026-09-11T01:00:00+05:30'}),fixture({timestamp:'2026-09-12T12:00:00Z'}),fixture({timestamp:'2026-09-08T10:00:00Z',dataSource:'demo'})];
 assert.deepEqual(sessionConsistency(sessions,new Date('2026-09-11T12:00:00Z')),{days:1,percent:14});
});
test('adaptive games use recorded history and respect difficulty bounds',()=>{
 assert.equal(adaptiveLevel([fixture({dataSource:'demo',accuracy:100})],'word'),1);
 assert.equal(adaptiveLevel([fixture({accuracy:100,level:1})],'word'),2);
 assert.equal(adaptiveLevel([fixture({accuracy:0,level:3})],'word'),2);
 assert.equal(adaptiveLevel([fixture({accuracy:100,level:3})],'word'),3);
});
test('summary uses observed numbers instead of fixed patient claims',()=>{const data=activitySummary([fixture({accuracy:0})],[],'en');assert.match(data.weeklySummary,/0%/);assert.doesNotMatch(data.weeklySummary,/Bhaben|medication adherence|14%/);});
test('late AI replies preserve new sessions and unrelated records',()=>{const old=fixture();const next=fixture({id:'new'});const merged=mergeSessionUpdates([next,old],[{...old,synced:true}]);assert.equal(merged.length,2);assert.equal(merged[0].id,'new');assert.equal(merged[1].synced,true);});
test('risk requires three measured records and returns normalized probabilities',()=>{
 assert.equal(predictRisk([fixture()]),null);
 const sessions=[fixture(),fixture({id:'two',accuracy:50}),fixture({id:'three',accuracy:100})];
 const features=riskFeatures(sessions,new Date('2026-09-11T00:00:00Z'))!;assert.equal(features.accuracy,50);assert.equal(features.activity_days_7,1);assert.ok(features.accuracy_std>0);
 const prediction=predictRisk(sessions)!;assert.ok(prediction);assert.ok(Math.abs(Object.values(prediction.probabilities).reduce((a,b)=>a+b,0)-1)<1e-10);
 assert.equal(predictRisk(sessions.map(s=>({...s,dataSource:'demo'}))),null);
});
test('AI failure never becomes a successful sync or overwrites zero',async()=>{
 const original=globalThis.fetch;
 try {globalThis.fetch=async()=>new Response(JSON.stringify({source:'unavailable',score:78}),{status:503});const result=await assessSession(fixture(),false,'en');assert.equal(result.score,0);assert.equal(result.synced,false);assert.equal(result.scoreSource,'local');} finally {globalThis.fetch=original;}
});
test('successful AI only adds wording, not an invented score',async()=>{
 const original=globalThis.fetch;
 try {globalThis.fetch=async()=>new Response(JSON.stringify({source:'gemini',score:90,supportiveMessage:'Thank you for taking part.'}));const result=await assessSession(fixture(),false,'en');assert.equal(result.score,0);assert.equal(result.synced,true);} finally {globalThis.fetch=original;}
});
test('session is saved before the AI request finishes',async()=>{
 const original=globalThis.fetch;let finish!: (r:Response)=>void;const saved:GameSession[]=[];
 try {globalThis.fetch=async()=>new Promise<Response>(resolve=>{finish=resolve;});const pending=saveAndAssess(fixture(),false,'en',s=>saved.push(s));await new Promise(resolve=>setImmediate(resolve));assert.equal(saved.length,1);assert.equal(saved[0].score,0);finish(new Response(JSON.stringify({source:'gemini',supportiveMessage:'Thanks.'})));await pending;assert.equal(saved.length,2);assert.equal(saved[0].id,saved[1].id);} finally {globalThis.fetch=original;}
});
