/* Browser-only capabilities; records stay on this origin, keys stay on the API. */
(() => {
  let installPrompt;
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; });
  const locale = l => ({en:'en-IN',hi:'hi-IN',as:'as-IN'}[l] || 'en-IN');
  window.mmCall = (name, payload) => {
    const p = JSON.parse(payload);
    if (name === 'get') return JSON.stringify(localStorage.getItem(p.key));
    if (name === 'set') { localStorage.setItem(p.key,p.value); return 'true'; }
    if (name === 'remove') { localStorage.removeItem(p.key); return 'true'; }
    if (name === 'online') return JSON.stringify(navigator.onLine);
    if (name === 'download') {
      const u=URL.createObjectURL(new Blob([p.text],{type:'application/json'}));
      const a=document.createElement('a'); a.href=u; a.download=p.name; a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);return 'true';
    }
    if (name === 'speak') {
      if (!window.speechSynthesis) return JSON.stringify('Speech is unavailable in this browser.');
      speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(p.text);u.lang=locale(p.language);
      const voices=speechSynthesis.getVoices(); const v=voices.find(v=>v.lang.startsWith(u.lang.slice(0,2)));
      if(!v && voices.length) return JSON.stringify('No voice for this language is installed. The text remains available.');
      if(v)u.voice=v;u.rate=.85;speechSynthesis.speak(u);return JSON.stringify('');
    }
    if(name==='stopSpeech'){window.speechSynthesis?.cancel();return 'true';}
    throw Error('Unsupported browser operation');
  };
  window.mmAsync = async (name,payload) => {
    const p=JSON.parse(payload);
    if(name==='pin'){
      const saved=JSON.parse(localStorage.getItem('mm_flutter_pin')||'null');
      if(p.setup && saved)throw Error('A PIN already exists.');
      const salt=p.setup ? crypto.getRandomValues(new Uint8Array(16)) : new Uint8Array(saved?.salt||[]);
      if(!p.setup&&!saved)return JSON.stringify(false);
      const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(p.pin),'PBKDF2',false,['deriveBits']);
      const hash=Array.from(new Uint8Array(await crypto.subtle.deriveBits({name:'PBKDF2',salt,iterations:120000,hash:'SHA-256'},key,256)));
      if(p.setup){localStorage.setItem('mm_flutter_pin',JSON.stringify({salt:Array.from(salt),hash}));return 'true';}
      return JSON.stringify(hash.every((v,i)=>v===saved.hash[i]));
    }
    if(name==='file')return new Promise((resolve,reject)=>{
      const input=document.createElement('input');input.type='file';input.accept=p.image?'image/png,image/jpeg,image/webp':'.json,application/json';
      input.oncancel=()=>resolve('null');
      input.onchange=async()=>{
        const f=input.files[0];if(!f){resolve('null');return;}
        if(f.size>(p.image?1000000:30000000)){reject(Error('File is too large.'));return;}
        if(p.image){if(!['image/png','image/jpeg','image/webp'].includes(f.type)){reject(Error('Choose PNG, JPEG or WebP.'));return;}
          const reader=new FileReader();reader.onload=()=>resolve(JSON.stringify(reader.result));reader.onerror=()=>reject(Error('Cannot read image.'));reader.readAsDataURL(f);
        }else resolve(JSON.stringify(await f.text()));
      };input.click();
    });
    if(['listen','speak','stopListening'].includes(name))return JSON.stringify(await window.mmSpeech(name,p));
    if(name==='install'){
      if(!installPrompt)return JSON.stringify('Use your browser menu to install this app if available.');
      await installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;return JSON.stringify('');
    }
    throw Error('Unsupported browser operation');
  };
})();

if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('offline-sw.js').catch(()=>{}));
