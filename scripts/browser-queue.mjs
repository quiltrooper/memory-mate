const {chromium}=await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE,headless:true});
const context=await browser.newContext({serviceWorkers:'block'});
let configured=false, resolveRequest;const requested=new Promise(r=>resolveRequest=r);let release;const gate=new Promise(r=>release=r);
const user=id=>({profile:{id,name:'Queue '+id,age:70,gender:'Other',location:'Assam',diagnosis:'Not provided',primaryCaregiver:'Assigned family',ashaWorker:'Assigned worker',hospital:'Not provided',notes:''},dataSource:'user',reminders:[],memories:[],knownFaces:[],trendData:[],gameSessions:id==='A'?[{id:'queued-A',timestamp:new Date().toISOString(),gameType:'word',gameTitle:'Word Recall',accuracy:0,responseTimeMs:2000,errors:3,level:1,synced:false,dataSource:'recorded',metricVersion:2}]:[]});
await context.addInitScript(({patients,pin})=>{localStorage.setItem('mm_patient_datasets',JSON.stringify(patients));localStorage.setItem('mm_pin_hash',pin);localStorage.setItem('mm_active_patient_id','A');},{patients:[user('A'),user('B')],pin:createHash('sha256').update('2468').digest('hex')});
await context.route('**/api/status',r=>r.fulfill({json:{configured,storage:'local'}}));
await context.route('**/api/gemini/cognitive-score',async r=>{resolveRequest();await gate;await r.fulfill({json:{source:'gemini',score:99,supportiveMessage:'Thank you for playing.'}});});
const page=await context.newPage();
try {
 await page.goto('http://localhost:3001');await page.locator('#memory-mate-pin').fill('2468');await page.locator('button[type=submit]').click();await page.locator('#app-header').waitFor();
 await page.evaluate(()=>window.dispatchEvent(new Event('offline')));configured=true;await page.evaluate(()=>window.dispatchEvent(new Event('online')));
 await Promise.race([requested,new Promise((_,reject)=>setTimeout(()=>reject(new Error('Queue did not retry after reconnection')),8000))]);
 await page.locator('#patient-selector').selectOption('B');await page.locator('#btn-caregiver-mode').click();await page.getByRole('button',{name:'Add reminder',exact:true}).click();await page.getByRole('textbox',{name:'Title',exact:true}).fill('New B reminder');await page.getByRole('button',{name:'Save reminder',exact:true}).click();
 release();await page.waitForFunction(()=>JSON.parse(localStorage.getItem('mm_patient_datasets'))[0].gameSessions[0].synced===true);
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('mm_patient_datasets')));
 assert.equal(saved[0].gameSessions[0].score,0);assert.equal(saved[1].gameSessions.length,0);assert.equal(saved[1].reminders[0].title,'New B reminder');assert.equal(saved[1].reminders[0].assignedBy,'Assigned family');
 console.log('PASS: reconnection triggers pending AI feedback; late response preserves the other patient and their newly added reminder.');
}finally {release();await browser.close();}
