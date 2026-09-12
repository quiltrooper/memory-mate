import test from 'node:test';
import assert from 'node:assert/strict';
import type { AddressInfo } from 'node:net';
process.env.NODE_ENV='test';
const { app } = await import('../server');
delete process.env.GEMINI_API_KEY;
test('API: missing credentials and invalid input produce honest errors',async()=>{
 const server=app.listen(0,'127.0.0.1');await new Promise<void>(r=>server.once('listening',r));
 const url=`http://127.0.0.1:${(server.address() as AddressInfo).port}`;
 try {
  const status=await (await fetch(url+'/api/status')).json();assert.equal(status.configured,false);assert.equal(status.storage,'local');
  const post=(route:string,body:any)=>fetch(url+route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const invalid=await post('/api/gemini/cognitive-score',{accuracy:NaN});assert.equal(invalid.status,400);
  const zero=await post('/api/gemini/cognitive-score',{gameType:'word',accuracy:0,responseTimeMs:2000,errors:0,level:1});assert.equal(zero.status,503);assert.equal((await zero.json()).source,'unavailable');
  for (const [route,body] of [['chat',{message:'What is on my saved schedule?'}],['reminiscence',{title:'User photo',caption:'Saved caption'}],['caregiver-analysis',{facts:['0 sessions recorded.']}]] as const) {const response=await post('/api/gemini/'+route,body);assert.equal(response.status,503);const data=await response.json();assert.equal(data.source,'unavailable');assert.equal(data.reply,undefined);}
 } finally {await new Promise<void>((resolve,reject)=>server.close(error=>error?reject(error):resolve()));}
});
