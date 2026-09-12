const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { writeFileSync } from 'node:fs';
const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE,headless:true});
const context=await browser.newContext({viewport:{width:1280,height:900}});
const errors=[];const results=[];
const profile=id=>({dataSource:'user',profile:{id,name:`Test ${id}`,age:70,gender:'Other',location:'Assam',diagnosis:'Not provided',primaryCaregiver:'Test caregiver',ashaWorker:'Test worker',hospital:'Not provided',notes:''},reminders:[],memories:[],knownFaces:[],trendData:[],gameSessions:[]});
await context.addInitScript(({profiles,pin})=>{
 if (!localStorage.getItem('mm_patient_datasets')){localStorage.setItem('mm_patient_datasets',JSON.stringify(profiles));localStorage.setItem('mm_active_patient_id','A');localStorage.setItem('mm_pin_hash',pin);}
 window.__recognition=null;
 window.SpeechRecognition=class {start(){window.__recognition=this;}stop(){this.onend?.();}abort(){this.onend?.();}};
}, {profiles:[profile('A'),profile('B')],pin:createHash('sha256').update('2468').digest('hex')});
const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
const unlock=async()=>{await page.locator('#memory-mate-pin').fill('2468');await page.locator('button[type=submit]').click();await page.locator('#app-header').waitFor();};
try {
 await page.goto('http://localhost:3001');await unlock();
 await page.locator('#btn-caregiver-mode').click();assert.match(await page.locator('body').innerText(),/Complete a game to start a dated activity history/);assert.doesNotMatch(await page.locator('body').innerText(),/Word Recall accuracy dipped 14%/);results.push('Empty profile has no fabricated history or observations');
 await page.locator('#btn-patient-mode').click();await page.locator('#patient-nav-games').click();await page.locator('#tab-game-word').click();
 await page.clock.install();await page.locator('#start-word-game-btn').click();
 const targetWords=await page.locator('#word-recall-game .grid p').allTextContents();

 await page.clock.runFor(10500);

 await page.clock.runFor(31000);
 const choiceButtons=page.locator('#word-recall-game .grid button');
 const choices=await choiceButtons.allTextContents();

 // Select three visible distractors to exercise an actual zero score.
 for (const label of ['Courtyard','Morning','Sunlight']) await choiceButtons.filter({hasText:label}).click();
 await page.getByRole('button',{name:'Check My Words'}).click();
 await page.waitForFunction(()=>JSON.parse(localStorage.getItem('mm_patient_datasets')).find(p=>p.profile.id==='A').gameSessions.length===1);
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('mm_patient_datasets')));
 assert.equal(saved[0].gameSessions[0].gameTitle,'Word Recall');assert.equal(saved[0].gameSessions[0].accuracy,0);assert.equal(saved[0].gameSessions[0].score,0);assert.equal(saved[0].gameSessions[0].synced,false);assert.match(saved[0].gameSessions[0].timestamp,/T.*Z$/);results.push('Real game saves zero accuracy with a full date and unsynced AI status');
 await page.locator('#patient-selector').selectOption('B');await page.locator('#btn-caregiver-mode').click();assert.match(await page.locator('body').innerText(),/Complete a game to start a dated activity history/);results.push('Switching profiles preserves separate activity');
 await page.locator('#patient-selector').selectOption('A');assert.match(await page.locator('body').innerText(),/0%/);
 await page.locator('#lang-hi').click();assert.match(await page.locator('body').innerText(),/साप्ताहिक दर्ज गतिविधि/);await page.locator('#lang-as').click();assert.match(await page.locator('body').innerText(),/সাপ্তাহিক নথিভুক্ত কাৰ্যকলাপ/);results.push('Hindi and Assamese caregiver summaries and charts render');
 await page.locator('#lang-en').click();await page.locator('#btn-patient-mode').click();await page.locator('#patient-nav-assistant').click();await page.locator('#chat-voice-btn').click();await page.evaluate(()=>window.__recognition.onresult({resultIndex:0,results:[[{transcript:'Show my reminders'}]]}));assert.equal(await page.locator('#chat-text-input').inputValue(),'Show my reminders');await page.evaluate(()=>window.__recognition.onerror({error:'not-allowed'}));assert.match(await page.locator('body').innerText(),/Microphone permission was denied/);results.push('Mock speech recognition fills editable input and reports denied permission');
 await page.locator('#patient-nav-games').click();await page.locator('#tab-game-pattern').click();
 for (let round=0;round<2;round++) {
   await page.locator('#start-pattern-btn').click();await page.clock.runFor(1200);
   const lit=await page.locator('[id^="tile-btn-"][class*="scale-105"]').getAttribute('id');
   const wrong=(Number(lit.split('-').at(-1))+1)%4;
   await page.clock.runFor(4200);await page.locator(`#tile-btn-${wrong}`).click();await page.getByRole('button',{name:'Finish Session',exact:true}).click();
   await page.getByRole('button',{name:'Play Again',exact:true}).waitFor();
   if(round===0)await page.getByRole('button',{name:'Play Again',exact:true}).click();
 }
 const patterns=await page.evaluate(()=>JSON.parse(localStorage.getItem('mm_patient_datasets'))[0].gameSessions.filter(s=>s.gameType==='pattern'));
 assert.equal(patterns.length,2);assert.ok(patterns.every(s=>s.accuracy===0&&s.errors===1));results.push('Pattern game records independent attempts after Play Again');
 await page.locator('#tab-game-matching').click();await page.locator('#start-picture-matching-btn').click();assert.equal(await page.locator('[id^="card-match-"]').count(),8);
 for(let pair=0;pair<4;pair++){await page.locator(`#card-match-${pair*2}`).click();await page.locator(`#card-match-${pair*2+1}`).click();await page.clock.runFor(600);}
 await page.getByRole('button',{name:'Play Picture Matching Again',exact:true}).waitFor();
 const matching=await page.evaluate(()=>JSON.parse(localStorage.getItem('mm_patient_datasets'))[0].gameSessions.find(s=>s.gameType==='matching'));
 assert.equal(matching.accuracy,100);assert.equal(matching.errors,0);assert.equal(matching.gameTitle,'Picture Matching');
 await page.getByRole('button',{name:'Play Picture Matching Again',exact:true}).click();await page.locator('#start-picture-matching-btn').click();assert.equal(await page.locator('[id^="card-match-"]').count(),10);results.push('Matching game records 100% and adapts the next game from 4 to 5 pairs');
 await page.evaluate(()=>navigator.serviceWorker.ready);await page.reload();await unlock();await page.waitForFunction(()=>navigator.serviceWorker.controller!==null);
 await context.setOffline(true);await page.reload();await unlock();await page.waitForFunction(()=>document.body.innerText.includes('Offline mode'));assert.match(await page.locator('body').innerText(),/Offline mode/);await page.locator('#btn-caregiver-mode').click();assert.match(await page.locator('body').innerText(),/Recorded/);results.push('Installed production app reloads offline and retains activity');
 await context.setOffline(false);await page.setViewportSize({width:390,height:844});await page.screenshot({path:'docs/browser-mobile.png',fullPage:true});
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);assert.equal(overflow,false);results.push('Mobile view fits a 390px viewport');
 await page.setViewportSize({width:1280,height:900});await page.screenshot({path:'docs/browser-caregiver.png',fullPage:true});
 assert.deepEqual(errors,[]);results.push('No uncaught browser errors');
 console.log(JSON.stringify({results,errors},null,2));writeFileSync('docs/browser-test-results.json',JSON.stringify({results,errors,limitations:['Speech API event handling tested with a mock; actual microphone and device language availability need user testing.','Gemini responses were not tested without a key.']},null,2));
}finally {await browser.close();}
