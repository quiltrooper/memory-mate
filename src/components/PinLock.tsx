import React, { useEffect, useState } from 'react';
import type { Language } from '../types';
import { choose } from '../utils/activity';
async function hashPin(pin: string) {
 const bytes = new TextEncoder().encode(pin);
 const digest = await crypto.subtle.digest('SHA-256', bytes);
 return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2,'0')).join('');
}
export function PinLock({onUnlocked,language='en',onLanguageChange}: {onUnlocked:()=>void;language?:Language;onLanguageChange?:(language:Language)=>void}) {
 const [savedHash,setSavedHash]=useState<string|null|undefined>();
 const [pin,setPin]=useState(''), [confirm,setConfirm]=useState(''), [message,setMessage]=useState('');
 useEffect(()=>{try {setSavedHash(localStorage.getItem('mm_pin_hash'));} catch {setMessage(choose(language,'Device storage is unavailable. Allow site storage to continue.','डिवाइस संग्रहण उपलब्ध नहीं है। जारी रखने के लिए साइट संग्रहण की अनुमति दें।','ডিভাইচৰ সংৰক্ষণ উপলব্ধ নহয়। আগবাঢ়িবলৈ ছাইট সংৰক্ষণৰ অনুমতি দিয়ক।'));}},[language]);
 const isSetup=!savedHash;
 const submit=async(event:React.FormEvent)=>{
  event.preventDefault();
  if(!/^\d{4,12}$/.test(pin)){setMessage(choose(language,'Use 4–12 digits.','4–12 अंक इस्तेमाल करें।','4–12 টা অংক ব্যৱহাৰ কৰক।'));return;}
  try {
   const hash=await hashPin(pin);
   if(isSetup){if(pin!==confirm){setMessage(choose(language,'The PINs do not match.','PIN मेल नहीं खाते।','PIN দুটা মিলা নাই।'));return;}localStorage.setItem('mm_pin_hash',hash);onUnlocked();}
   else if(hash===savedHash)onUnlocked();else {setMessage(choose(language,'That PIN is not correct.','PIN सही नहीं है।','PIN শুদ্ধ নহয়।'));setPin('');}
  }catch {setMessage(choose(language,'Could not access secure device storage.','सुरक्षित डिवाइस संग्रहण उपलब्ध नहीं हुआ।','সুৰক্ষিত ডিভাইচ সংৰক্ষণ উপলব্ধ নহ’ল।'));}
 };
 return <main className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-5 text-[#2D2E2E]"><section className="w-full max-w-md bg-white border border-[#E5E1D8] rounded-3xl p-7 space-y-5">
 <label className="block text-sm">{choose(language,'Language','भाषा','ভাষা')}<select aria-label="Language" value={language} onChange={e=>onLanguageChange?.(e.target.value as Language)} className="ml-3 border rounded-lg p-2"><option value="en">English</option><option value="hi">हिन्दी</option><option value="as">অসমীয়া</option></select></label>
 <h1 className="text-2xl font-bold">{isSetup?choose(language,'Protect Memory Mate','Memory Mate सुरक्षित करें','Memory Mate সুৰক্ষিত কৰক'):choose(language,'Memory Mate is locked','Memory Mate लॉक है','Memory Mate লক কৰা আছে')}</h1>
 <p>{choose(language,'Use a device PIN to control casual access.','सामान्य पहुँच नियंत्रित करने के लिए डिवाइस PIN रखें।','সাধাৰণ প্ৰৱেশ নিয়ন্ত্ৰণৰ বাবে ডিভাইচ PIN ব্যৱহাৰ কৰক।')}</p>
 <form onSubmit={submit} className="space-y-4"><label className="block" htmlFor="memory-mate-pin">PIN (4–12)<input id="memory-mate-pin" type="password" inputMode="numeric" autoComplete={isSetup?'new-password':'current-password'} value={pin} onChange={e=>setPin(e.target.value.replace(/\D/g,''))} maxLength={12} required className="block w-full border rounded-xl p-3 mt-1"/></label>
 {isSetup&&<label className="block" htmlFor="memory-mate-confirm-pin">{choose(language,'Confirm PIN','PIN की पुष्टि करें','PIN নিশ্চিত কৰক')}<input id="memory-mate-confirm-pin" type="password" inputMode="numeric" autoComplete="new-password" value={confirm} onChange={e=>setConfirm(e.target.value.replace(/\D/g,''))} maxLength={12} required className="block w-full border rounded-xl p-3 mt-1"/></label>}
 {message&&<p role="alert">{message}</p>}<button type="submit" disabled={savedHash===undefined} className="w-full p-3 rounded-xl bg-[#58745E] text-white disabled:opacity-50">{isSetup?choose(language,'Create PIN and continue','PIN बनाकर जारी रखें','PIN তৈয়াৰ কৰি আগবাঢ়ক'):choose(language,'Unlock Memory Mate','Memory Mate खोलें','Memory Mate খোলক')}</button></form>
 <p className="text-xs text-[#73706A]">{choose(language,'This PIN prevents casual access. The prototype stores records locally without encryption.','यह PIN सामान्य पहुँच रोकता है। प्रोटोटाइप रिकॉर्ड स्थानीय रूप से बिना एन्क्रिप्शन रखता है।','এই PIN সাধাৰণ প্ৰৱেশ বাধা দিয়ে। প্ৰটোটাইপে নথি এনক্ৰিপচন অবিহনে স্থানীয়ভাৱে ৰাখে।')}</p>
 </section></main>;
}
