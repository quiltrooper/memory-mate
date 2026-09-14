import assert from 'node:assert/strict';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE,headless:true});
try {
 const page=await browser.newPage({viewport:{width:1280,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('http://127.0.0.1:8000/api/**',async route=>{const response=await route.fetch({url:route.request().url().replace(':8000/',':8001/')});await route.fulfill({response});});
 await page.goto('http://127.0.0.1:3002');
 async function enter(name,value){const field=page.getByRole('textbox',{name,exact:true});await field.click();await field.press('ControlOrMeta+A');await field.pressSequentially(value,{delay:35});await field.press('Tab');}
 await page.getByRole('button',{name:'Add patient',exact:true}).click();
 await enter('Name','Browser reviewer profile');
 await enter('Age','70');
 const createdResponse=page.waitForResponse(r=>r.url().endsWith('/api/patients')&&r.request().method()==='POST');
 await page.keyboard.press('Tab');
 await page.getByRole('button',{name:'Save',exact:true}).click();
 const pid=(await (await createdResponse).json()).id;
 await page.getByRole('button',{name:'Patient profile Browser reviewer profile'}).waitFor();
 console.log('PASS new profile created through Flutter');
 await page.getByRole('button',{name:'Memories Tab 3 of 4'}).click();
 await page.getByRole('button',{name:'Add memory',exact:true}).click();
 await enter('Title','Garden visit');
 await enter('Caption','We walked in the garden together.');
 await page.keyboard.press('Tab');
 await page.getByRole('button',{name:'Save',exact:true}).click();
 await page.getByRole('button',{name:'Edit memory',exact:true}).waitFor({timeout:10000}).catch(async e=>{console.log(await page.locator('body').ariaSnapshot());throw e;});
 await page.getByRole('button',{name:'Edit memory',exact:true}).click();
 await enter('Caption','A supplied family memory, edited.');
 await page.keyboard.press('Tab');
 await page.getByRole('button',{name:'Save',exact:true}).click();
 await page.getByRole('button',{name:'Edit memory',exact:true}).waitFor();
 await page.getByRole('group',{name:'Garden visit · A supplied family memory, edited.',exact:true}).waitFor();
 console.log('PASS memory creation and editing');
 await page.getByRole('button',{name:'Games Tab 4 of 4'}).click();
 await page.getByRole('checkbox',{name:'Pattern recall',exact:true}).click();
 await page.getByRole('button',{name:'Start pattern recall'}).click();
 const sequence=new Map();const deadline=Date.now()+6000;
 while(sequence.size<3&&Date.now()<deadline){const snapshot=await page.locator('body').ariaSnapshot();const m=snapshot.match(/Remember (Flower|Sun|Water|Tree) \((\d) of 3\)/);if(m)sequence.set(Number(m[2]),m[1]);await page.waitForTimeout(100);}
 assert.equal(sequence.size,3);
 const patternResponse=page.waitForResponse(r=>r.url().endsWith('/sessions')&&r.request().method()==='POST');
 for(let i=1;i<=3;i++)await page.getByRole('button',{name:sequence.get(i),exact:true}).click();
 const pattern=await(await patternResponse).json();console.log('PASS pattern result saved');assert.equal(pattern.game_type,'pattern');assert.equal(pattern.score,100);assert.equal(pattern.errors,0);
 await page.getByRole('button',{name:'Continue',exact:true}).click();
 await page.getByRole('checkbox',{name:'Picture matching',exact:true}).click();
 await page.getByRole('button',{name:'Start picture matching'}).click();
 const known=new Map();const remaining=new Set([1,2,3,4,5,6,7,8]);let attempts=0;
 const matchingResponse=page.waitForResponse(r=>r.url().endsWith('/sessions')&&r.request().method()==='POST');matchingResponse.catch(()=>{});
 async function reveal(index){await page.getByRole('button',{name:`Hidden card ${index}`,exact:true}).click();await page.getByRole('button',{name:new RegExp(`^(Flower|Sun|Water|Tree|Book|Home) card ${index}$`)}).or(page.getByRole('group',{name:/% accuracy/})).first().waitFor();const snap=await page.locator('body').ariaSnapshot();const match=snap.match(new RegExp(`button "(Flower|Sun|Water|Tree|Book|Home) card ${index}"`));if(!match&&remaining.size===2&&snap.includes('% accuracy'))return known.get([...remaining].find(i=>i!==index));assert.ok(match,snap);known.set(index,match[1]);return match[1];}
 while(remaining.size){const a=[...remaining][0];const value=await reveal(a);const b=[...remaining].find(i=>i!==a&&known.get(i)===value)??[...remaining].find(i=>i!==a&&!known.has(i))??[...remaining].find(i=>i!==a);const second=await reveal(b);attempts++;if(value===second){remaining.delete(a);remaining.delete(b);}else{await page.getByRole('button',{name:`Hidden card ${a}`,exact:true}).waitFor();}}
 const matching=await(await matchingResponse).json();assert.equal(matching.game_type,'matching');assert.equal(matching.attempts,attempts);assert.equal(matching.correct,4);
 console.log('PASS pattern recall and picture matching save measured results');
 const stored=await (await page.request.get(`http://127.0.0.1:8001/api/patients/${pid}`)).json();assert.equal(stored.recordedSessions.length,2);assert.equal(stored.memories[0].caption,'A supplied family memory, edited.');

 await page.getByRole('button',{name:'Continue',exact:true}).click();
 let refresh='Refresh records';
 for(const locale of [
  {code:'hi',refresh:'रिकॉर्ड ताज़ा करें',settings:'प्रोफ़ाइल सेटिंग',save:'सहेजें',cancel:'रद्द करें',start:'शब्द खेल शुरू करें',word:'चाय'},
  {code:'as',refresh:'নথি সতেজ কৰক',settings:'প্ৰফাইল ছেটিংছ',save:'সংৰক্ষণ কৰক',cancel:'বাতিল',start:'শব্দ খেল আৰম্ভ কৰক',word:'চাহ'}
 ]){
  const current=await(await page.request.get(`http://127.0.0.1:8001/api/patients/${pid}`)).json();
  const p=current.profile;
  const changed=await page.request.patch(`http://127.0.0.1:8001/api/patients/${pid}`,{data:{name:p.name,age:p.age,gender:p.gender,location:p.location,primaryCaregiver:p.primaryCaregiver,notes:p.notes,preferences:{...p.preferences,language:locale.code,largeText:true},version:current.version}});
  assert.equal(changed.status(),200);
  await page.getByRole('button',{name:refresh,exact:true}).click();refresh=locale.refresh;
  await page.getByRole('button',{name:locale.start,exact:true}).waitFor();
  await page.getByRole('button',{name:locale.settings,exact:true}).click();
  await page.getByRole('button',{name:locale.save,exact:true}).waitFor();
  await page.getByRole('button',{name:locale.cancel,exact:true}).click();
  await page.getByRole('button',{name:locale.start,exact:true}).click();
  await page.getByRole('checkbox',{name:locale.word,exact:true}).waitFor({timeout:12000});
  console.log(`PASS ${locale.code} profile language reaches forms, game instructions, and recall words`);
 }
 assert.deepEqual(errors,[]);
 console.log('PASS no uncaught errors across new profile, memories, and both games');
}finally{await browser.close();}
