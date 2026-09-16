/* Browser speech lifecycle shared by the assistant and memory cards. */
(() => {
  let recognition, utterance, cancelPlayback;
  const locale = l => ({en:'en-IN', hi:'hi-IN', as:'as-IN'}[l] || 'en-IN');
  const fail = error => ({error});
  window.mmSpeech = async (action, p) => {
    if(action === 'stopListening') { recognition?.stop(); return {}; }
    if(action === 'speak') {
      const synth=window.speechSynthesis;
      if(!synth) return fail('Speech is unavailable in this browser.');
      cancelPlayback?.(); synth.cancel();
      let voices=synth.getVoices();
      if(!voices.length) voices=await new Promise(resolve=>{
        const finish=()=>{clearTimeout(timer);synth.removeEventListener('voiceschanged',changed);resolve(synth.getVoices());};
        const changed=()=>{if(synth.getVoices().length)finish();};
        const timer=setTimeout(finish,1500);synth.addEventListener('voiceschanged',changed);
      });
      const language=locale(p.language), voice=voices.find(v=>v.lang.toLowerCase()===language.toLowerCase()) || voices.find(v=>v.lang.toLowerCase().startsWith(language.slice(0,2)));
      if(!voice && voices.length) return fail('No voice for this language is installed. Choose another profile language or install a matching system voice.');
      return new Promise(resolve=>{
        let done=false,started=false;
        const finish=result=>{if(done)return;done=true;clearTimeout(timer);cancelPlayback=null;utterance=null;resolve(result);};
        utterance=new SpeechSynthesisUtterance(p.text);utterance.lang=language;utterance.rate=.85;if(voice)utterance.voice=voice;
        utterance.onstart=()=>{started=true;clearTimeout(timer);};
        utterance.onend=()=>finish({});
        utterance.onerror=e=>finish(e.error==='canceled'||e.error==='interrupted'?{}:fail(e.error==='not-allowed'?'Playback was blocked. Click Read aloud to start it.':'Audio playback failed. Check your speaker output and installed voice.'));
        const timer=setTimeout(()=>{if(!started){synth.cancel();finish(fail('Audio did not start. Click Read aloud and check your system voice and speaker output.'));}},8000);
        cancelPlayback=()=>finish({});synth.resume();synth.speak(utterance);
      });
    }
    if(action === 'listen') {
      if(recognition)return fail('Voice input is already listening.');
      if(!window.isSecureContext)return fail('Microphone access requires localhost or HTTPS.');
      const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
      if(!Recognition)return fail('Voice input is unavailable in this browser. Try Chrome or Edge, or type instead.');
      cancelPlayback?.();window.speechSynthesis?.cancel();
      return new Promise(resolve=>{
        const r=new Recognition();recognition=r;r.lang=locale(p.language);r.interimResults=true;r.continuous=false;r.maxAlternatives=1;
        let text='',done=false;
        const finish=result=>{if(done)return;done=true;clearTimeout(timer);recognition=null;resolve(result);};
        const errors={'not-allowed':'Microphone permission is blocked. Allow microphone access for this site in your browser settings, then retry.','service-not-allowed':'Speech recognition is blocked by this browser. Try Chrome or Edge.','audio-capture':'No working microphone was found. Check your selected input device.','network':'Speech recognition could not reach its service. Check your connection or type instead.','language-not-supported':'Voice recognition does not support this profile language. Choose another language or type instead.','no-speech':'No speech was heard. Try again and speak after clicking Voice input.'};
        r.onresult=e=>{text=Array.from(e.results).map(x=>x[0].transcript).join(' ').trim();};
        r.onerror=e=>finish(fail(errors[e.error]||'Voice input stopped. Please retry or type instead.'));
        r.onend=()=>finish(text?{text}:fail(errors['no-speech']));
        const timer=setTimeout(()=>{r.abort();finish(text?{text}:fail(errors['no-speech']));},20000);
        try{r.start();}catch(_){finish(fail('Microphone could not start. Check browser permission and retry.'));}
      });
    }
    throw Error('Unsupported speech operation');
  };
})();
