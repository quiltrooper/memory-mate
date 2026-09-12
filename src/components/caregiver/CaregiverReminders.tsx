import React, { useState } from 'react';
import type { Reminder, ReminderCategory, Language } from '../../types';
import { choose } from '../../utils/activity';
interface Props { reminders:Reminder[];onAddReminder:(r:Reminder)=>void;onUpdateReminder:(r:Reminder)=>void;onDeleteReminder:(id:string)=>void;language?:Language;caregiverName?:string;workerName?:string }
export function CaregiverReminders({reminders,onAddReminder,onUpdateReminder,onDeleteReminder,language='en',caregiverName='',workerName=''}:Props) {
 const [draft,setDraft]=useState<Reminder|null>(null);
 const [editing,setEditing]=useState(false);
 const labels:Record<ReminderCategory,string>={medication:choose(language,'Medication','दवा','ঔষধ'),meal:choose(language,'Meal','भोजन','আহাৰ'),appointment:choose(language,'Appointment','मुलाकात','সাক্ষাৎ'),routine:choose(language,'Routine','दिनचर्या','দিনচৰ্যা')};
 const update=(part:Partial<Reminder>)=>setDraft(r=>r?{...r,...part}:null);
 const save=(event:React.FormEvent)=>{event.preventDefault();if(!draft?.title.trim())return;const result={...draft,title:draft.title.trim()};editing?onUpdateReminder(result):onAddReminder(result);setDraft(null);};
 return <section id="caregiver-reminders-card" className="bg-white border border-[#E5E1D8] rounded-2xl p-6 space-y-4">
  <div className="flex flex-wrap justify-between gap-3"><div><h3 className="font-bold text-xl">{choose(language,'Caregiver schedule','देखभालकर्ता की समय-सारणी','যত্নদাতাৰ সময়সূচী')}</h3><p className="text-sm text-[#73706A]">{choose(language,'Saved reminders also appear in Patient Mode.','सहेजे गए अनुस्मारक रोगी मोड में भी दिखाई देते हैं।','সংৰক্ষিত সোঁৱৰণি ব্যক্তিৰ অৱস্থাতো দেখা যায়।')}</p></div><button className="bg-[#58745E] text-white px-4 py-2 rounded-xl" onClick={()=>{setEditing(false);setDraft({id:crypto.randomUUID(),title:'',time:'09:00 AM',category:'routine',completed:false,notes:'',assignedBy:caregiverName});}}>{choose(language,'Add reminder','अनुस्मारक जोड़ें','সোঁৱৰণি যোগ কৰক')}</button></div>
  {draft&&<form onSubmit={save} className="bg-[#FAF9F6] p-4 rounded-xl space-y-3">
   <label className="block">{choose(language,'Title','शीर्षक','শিৰোনাম')}<input aria-label={choose(language,'Title','शीर्षक','শিৰোনাম')} className="block border rounded-lg w-full p-2" value={draft.title} onChange={e=>update({title:e.target.value})} required/></label>
   <label className="block">{choose(language,'Time','समय','সময়')}<input className="block border rounded-lg w-full p-2" value={draft.time} onChange={e=>update({time:e.target.value})} required placeholder="09:00 AM"/></label>
   <label className="block">{choose(language,'Category','श्रेणी','শ্ৰেণী')}<select className="block border rounded-lg w-full p-2" value={draft.category} onChange={e=>update({category:e.target.value as ReminderCategory})}>{Object.entries(labels).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>
   <label className="block">{choose(language,'Assigned by','जिन्होंने जोड़ा','যোগ কৰা ব্যক্তি')}<input list="caregiver-names" className="block border rounded-lg w-full p-2" value={draft.assignedBy??''} onChange={e=>update({assignedBy:e.target.value})}/><datalist id="caregiver-names"><option value={caregiverName}/><option value={workerName}/></datalist></label>
   <label className="block">{choose(language,'Saved instructions','सहेजे निर्देश','সংৰক্ষিত নিৰ্দেশ')}<textarea className="block border rounded-lg w-full p-2" value={draft.notes??''} onChange={e=>update({notes:e.target.value})}/></label>
   <div className="flex gap-3"><button type="submit" className="bg-[#58745E] text-white px-4 py-2 rounded-lg">{choose(language,'Save reminder','अनुस्मारक सहेजें','সোঁৱৰণি সংৰক্ষণ কৰক')}</button><button type="button" onClick={()=>setDraft(null)}>{choose(language,'Cancel','रद्द करें','বাতিল কৰক')}</button></div>
  </form>}
  {!reminders.length&&<p>{choose(language,'No reminders recorded yet.','अभी कोई अनुस्मारक दर्ज नहीं है।','এতিয়ালৈকে সোঁৱৰণি নথিভুক্ত নাই।')}</p>}
  <div className="space-y-3">{reminders.map(r=><article key={r.id} className="border rounded-xl p-4"><div className="flex flex-wrap justify-between gap-2"><div><p className="font-bold">{r.time} · {r.title}</p><p className="text-sm">{labels[r.category]} · {r.assignedBy}</p><p className="text-sm text-[#73706A]">{r.notes}</p></div><div className="flex gap-3 items-start"><button onClick={()=>{setEditing(true);setDraft({...r});}}>{choose(language,'Edit','संपादित करें','সম্পাদনা')}</button><button onClick={()=>onDeleteReminder(r.id)}>{choose(language,'Delete','हटाएँ','মচক')}</button></div></div><p className="mt-2 text-sm">{r.completed?choose(language,'Marked complete','पूर्ण चिह्नित','সম্পূৰ্ণ চিহ্নিত'):choose(language,'Pending','बाकी','বাকী')}</p></article>)}</div>
 </section>;
}
