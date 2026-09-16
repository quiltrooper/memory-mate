import vm from 'node:vm';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const source=fs.readFileSync(process.argv[2]||'flutter_app/web/speech.js','utf8');
let mode='success',instance;
class Recognition {
 constructor(){instance=this;}
 start(){queueMicrotask(()=>{if(mode==='success'){this.onresult({results:[[{transcript:'My name is Priya'}]]});this.onend();}else if(mode!=='wait')this.onerror({error:mode});});}
 stop(){this.onend();} abort(){}
}
let voices=[],listener,spoken;
const synth={getVoices:()=>voices,addEventListener:(_,f)=>{listener=f;queueMicrotask(()=>{voices=[{lang:'en-IN'}];f();});},removeEventListener(){},cancel(){},resume(){},speak(u){spoken=u;queueMicrotask(()=>{u.onstart();u.onend();});}};
const window={isSecureContext:true,SpeechRecognition:Recognition,speechSynthesis:synth};
const ctx={window,SpeechSynthesisUtterance:class{constructor(text){this.text=text;}},setTimeout,clearTimeout};vm.runInNewContext(source,ctx);
assert.equal((await window.mmSpeech('listen',{language:'en'})).text,'My name is Priya');
for(const [error,part] of [['not-allowed','permission'],['audio-capture','microphone'],['network','connection'],['language-not-supported','language']]){mode=error;assert.ok((await window.mmSpeech('listen',{language:'en'})).error.includes(part));}
mode='wait';const waiting=window.mmSpeech('listen',{language:'en'});await window.mmSpeech('stopListening',{});assert.match((await waiting).error,/No speech/);
assert.equal((await window.mmSpeech('speak',{language:'en',text:'Hello Priya'})).error,undefined);assert.equal(spoken.text,'Hello Priya');assert.equal(spoken.voice.lang,'en-IN');
assert.match((await window.mmSpeech('speak',{language:'as',text:'test'})).error,/No voice/);
synth.speak=u=>queueMicrotask(()=>u.onerror({error:'not-allowed'}));assert.match((await window.mmSpeech('speak',{language:'en',text:'test'})).error,/blocked/);
console.log('PASS speech: name capture, permission/device/network/language errors, stop listening, delayed voices, playback failure');
