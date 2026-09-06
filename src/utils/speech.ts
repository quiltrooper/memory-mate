export function speakText(text: string, lang: string = 'en-IN') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map short codes if provided
    let voiceLang = lang;
    if (lang === 'en') voiceLang = 'en-IN';
    else if (lang === 'hi') voiceLang = 'hi-IN';
    else if (lang === 'as') {
      // In many browser engines, 'as-IN' is supported or falls back to 'bn-IN' or 'hi-IN'
      voiceLang = 'as-IN';
    }

    utterance.lang = voiceLang;
    utterance.rate = 0.88; // Slightly slower, calm pace for elderly listeners
    utterance.pitch = 1.0;

    // If voices are available, try to find matching voice
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const match = voices.find(
        (v) =>
          v.lang.toLowerCase() === voiceLang.toLowerCase() ||
          (lang === 'as' && (v.lang.startsWith('as') || v.lang.startsWith('bn'))) ||
          (lang === 'hi' && v.lang.startsWith('hi')) ||
          (lang === 'en' && v.lang.startsWith('en'))
      );
      if (match) {
        utterance.voice = match;
      }
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('Speech synthesis error:', err);
  }
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
