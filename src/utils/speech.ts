import { choose } from './activity';
import type { Language } from '../types';
export function speakText(text: string, lang = 'en-IN') {
  const language: Language = lang.startsWith('as') ? 'as' : lang.startsWith('hi') ? 'hi' : 'en';
  const unavailable = () => window.dispatchEvent(new CustomEvent('memory-mate-speech-status', {detail: choose(language,'A voice for this language is unavailable on this device. Please use the displayed text.','इस डिवाइस पर इस भाषा की आवाज़ उपलब्ध नहीं है। स्क्रीन का पाठ पढ़ें।','এই ডিভাইচত এই ভাষাৰ মাত উপলব্ধ নহয়। পৰ্দাৰ লিখনি পঢ়ক।')}));
  if (typeof window === 'undefined') return;
  if (!('speechSynthesis' in window)) { unavailable(); return; }
  window.speechSynthesis.cancel();
  const voiceLang = {en:'en-IN',hi:'hi-IN',as:'as-IN'}[language];
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v=>v.lang.toLowerCase()===voiceLang.toLowerCase()) ?? voices.find(v=>v.lang.toLowerCase().startsWith(language+'-'));
  // Do not silently substitute Bengali or Hindi for Assamese.
  if (voices.length && !voice) { unavailable(); return; }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = voiceLang; utterance.rate = .88;
  if (voice) utterance.voice = voice;
  utterance.onerror = unavailable;
  window.speechSynthesis.speak(utterance);
}
export function stopSpeaking() { if(typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel(); }
