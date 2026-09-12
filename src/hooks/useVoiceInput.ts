import { useEffect, useRef, useState } from 'react';
import type { Language } from '../types';
import { choose } from '../utils/activity';
interface Recognition { lang: string; continuous: boolean; interimResults: boolean; onresult: ((event: any) => void) | null; onerror: ((event: {error: string}) => void) | null; onend: (() => void) | null; start(): void; stop(): void; abort(): void }
export function useVoiceInput(language: Language, onText: (text: string) => void, offline: boolean) {
  const recognition = useRef<Recognition | null>(null);
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState('');
  const ctor = typeof window === 'undefined' ? undefined : ((window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition) as (new () => Recognition) | undefined;
  useEffect(() => () => { const r = recognition.current; if (r) { r.onresult = null; r.onerror = null; r.onend = null; r.abort(); } }, [language]);
  const toggle = () => {
    if (listening) { recognition.current?.stop(); return; }
    if (!ctor || offline) { setMessage(choose(language, 'Voice input is unavailable here or offline. Please type your question.', 'यहाँ या ऑफ़लाइन आवाज़ से लिखना उपलब्ध नहीं है। प्रश्न टाइप करें।', 'ইয়াত বা অফলাইনত মাতৰ ইনপুট উপলব্ধ নহয়। প্ৰশ্ন লিখক।')); return; }
    window.speechSynthesis?.cancel();
    const r = new ctor(); recognition.current = r;
    r.lang = {en:'en-IN',hi:'hi-IN',as:'as-IN'}[language]; r.continuous = false; r.interimResults = false;
    r.onresult = event => { const result = event.results[event.resultIndex ?? 0]; if (result?.[0]?.transcript) { onText(result[0].transcript); setMessage(choose(language,'Check the words, then press Send.','शब्द जाँचें, फिर भेजें दबाएँ।','শব্দ পৰীক্ষা কৰি পঠাওক টিপক।')); } };
    r.onerror = event => { setListening(false); setMessage(event.error === 'not-allowed' ? choose(language,'Microphone permission was denied. Allow it in your browser or type instead.','माइक्रोफ़ोन अनुमति नहीं मिली। ब्राउज़र में अनुमति दें या टाइप करें।','মাইক্ৰফোনৰ অনুমতি নাই। ব্ৰাউজাৰত অনুমতি দিয়ক বা লিখক।') : choose(language,'Speech could not be recognized in this language. Try again or type.','इस भाषा में आवाज़ पहचानी नहीं गई। फिर प्रयास करें या टाइप करें।','এই ভাষাত মাত চিনাক্ত কৰিব পৰা নগ’ল। পুনৰ চেষ্টা কৰক বা লিখক।')); };
    r.onend = () => setListening(false);
    try { r.start(); setListening(true); setMessage(choose(language,'Listening… Your browser may use an online speech service.','सुन रहे हैं… ब्राउज़र ऑनलाइन वाक् सेवा इस्तेमाल कर सकता है।','শুনি আছে… ব্ৰাউজাৰে অনলাইন বাক্ সেৱা ব্যৱহাৰ কৰিব পাৰে।')); }
    catch { setListening(false); setMessage(choose(language,'Microphone could not start. Please type.','माइक्रोफ़ोन शुरू नहीं हुआ। टाइप करें।','মাইক্ৰফোন আৰম্ভ নহ’ল। লিখক।')); }
  };
  return {listening, message, toggle, supported: Boolean(ctor)};
}
