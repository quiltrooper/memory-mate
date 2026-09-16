import assert from 'node:assert/strict';
import {unlock} from './browser-common.mjs';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE,headless:true});
try {
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{
  window.voiceMode='success';window.spoken=[]; window.SpeechSynthesisUtterance=class {constructor(text){this.text=text;}};
  class Recognition { start(){setTimeout(()=>{if(window.voiceMode==='success'){this.onresult({results:[[{transcript:'My name is Priya'}]]});this.onend();}else this.onerror({error:'not-allowed'});},100);} stop(){this.onend();}abort(){} }
  window.SpeechRecognition=Recognition;
  Object.defineProperty(window,'speechSynthesis',{value:{getVoices:()=>[{lang:'en-IN'}],cancel(){},resume(){},speak(u){window.spoken.push(u.text);setTimeout(()=>{u.onstart();u.onend();},50);}}});
 });
 await page.route('**/api/**',async route=>{const response=await route.fetch();const data=await response.json(); const english=p=>{if(p?.profile?.preferences)p.profile.preferences.language='en';}; if(Array.isArray(data))data.forEach(english);else english(data);await route.fulfill({response,json:data});});
 await page.goto('http://127.0.0.1:3002');await unlock(page); await page.getByRole('button',{name:'Patient profile Bhaben Borah (Demo)',exact:true}).waitFor();
 await page.getByRole('button',{name:'Assistant Tab 5 of 5'}).click();
 await page.getByRole('button',{name:'Voice input',exact:true}).click();
 const field=page.getByRole('textbox',{name:'Your message',exact:true});
 await page.getByText('Voice captured. Check the text, then press Send.',{exact:true}).waitFor(); await field.click(); assert.equal(await field.inputValue(),'My name is Priya');
 await page.evaluate(()=>window.voiceMode='blocked');await page.getByRole('button',{name:'Voice input',exact:true}).click();
 await page.getByText('Microphone permission is blocked. Allow microphone access for this site in your browser settings, then retry.',{exact:true}).waitFor();
 await page.getByRole('button',{name:'Memories Tab 3 of 5'}).click();
 await page.getByRole('button',{name:'Read aloud',exact:true}).first().click();
 await page.waitForFunction(()=>window.spoken.length>0);
 const p=await(await page.request.get('http://127.0.0.1:8000/api/patients/launch-demo-1')).json();
 assert.equal(new Set(p.memories.map(m=>m.imageUrl)).size,3);
 for(const m of p.memories){const response=await page.request.get('http://127.0.0.1:3002'+m.imageUrl);assert.equal(response.status(),200);assert.match(m.caption,/Fictional demo/);}
 assert.deepEqual(errors,[]);console.log('PASS assistant transcript and permission feedback, memory read-aloud wiring, three distinct locally served images. Speech device simulated; actual hardware check still required.');
} finally {await browser.close();}
