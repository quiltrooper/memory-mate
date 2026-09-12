import React from 'react';
import type { GameSession, Reminder, Language } from '../../types';
import type { RiskPrediction } from '../../ml/riskModel';
import { choose, recentSessions, sessionConsistency, activitySummary } from '../../utils/activity';
interface Props {gameSessions: GameSession[]; reminders: Reminder[]; riskPrediction: RiskPrediction | null; onSpeak: (text: string) => void; language?: Language}
export const CareSummary = ({gameSessions, reminders, riskPrediction, onSpeak, language='en'}: Props) => {
  const recent = recentSessions(gameSessions);
  const average = (key: 'accuracy' | 'responseTimeMs' | 'errors') => recent.length ? recent.reduce((n,s) => n+s[key],0)/recent.length : null;
  const consistency = sessionConsistency(gameSessions);
  const facts = activitySummary(gameSessions, reminders, language);
  const accuracy = average('accuracy'); const response = average('responseTimeMs');
  const items = [
    [choose(language,'Recent accuracy','हाल की सटीकता','শেহতীয়া শুদ্ধতা'), accuracy === null ? '—' : `${Math.round(accuracy)}%`],
    [choose(language,'Average response per decision','प्रति निर्णय औसत प्रतिक्रिया','প্ৰতি সিদ্ধান্তৰ গড় সঁহাৰি'), response === null ? '—' : `${(response/1000).toFixed(1)} s`],
    [choose(language,'Active days (last 7, UTC)','सक्रिय दिन (पिछले 7, UTC)','সক্ৰিয় দিন (যোৱা 7, UTC)'), `${consistency.days}/7`],
    [choose(language,'Reminders marked complete','पूर्ण चिह्नित अनुस्मारक','সম্পূৰ্ণ চিহ্নিত সোঁৱৰণি'), `${reminders.filter(r=>r.completed).length}/${reminders.length}`],
    [choose(language,'Activity risk signal','गतिविधि जोखिम संकेत','কাৰ্যকলাপৰ আশংকা সংকেত'), riskPrediction ? ({Low:choose(language,'Low','कम','কম'),Medium:choose(language,'Medium','मध्यम','মধ্যম'),High:choose(language,'High','अधिक','বেছি')}[riskPrediction.label]) : choose(language,'Needs 3 recorded sessions','3 दर्ज सत्र चाहिए','3 টা নথিভুক্ত অধিবেশন লাগে')],
  ];
  return <section className="bg-white border border-[#E5E1D8] rounded-2xl p-6 space-y-4"><div className="flex justify-between gap-4"><h3 className="text-lg font-bold">{choose(language,'Caregiver activity summary','देखभालकर्ता गतिविधि सारांश','যত্নদাতাৰ কাৰ্যকলাপৰ সাৰাংশ')}</h3><button className="px-3 py-2 bg-[#F0F3EE] rounded-xl" onClick={()=>onSpeak(facts.weeklySummary)}>{choose(language,'Read summary','सारांश पढ़ें','সাৰাংশ পঢ়ক')}</button></div><p className="text-sm text-[#73706A]">{choose(language,'Recorded activities only. The risk classifier is a synthetic-data prototype, not a diagnosis.','केवल दर्ज गतिविधियाँ। जोखिम वर्गीकरण कृत्रिम डेटा पर बना प्रोटोटाइप है, निदान नहीं।','কেৱল নথিভুক্ত কাৰ্যকলাপ। আশংকা শ্ৰেণীবিভাজন কৃত্ৰিম তথ্যৰ প্ৰটোটাইপ, ৰোগ নিৰ্ণয় নহয়।')}</p><div className="grid grid-cols-2 lg:grid-cols-5 gap-3">{items.map(([label,value])=><div key={label} className="p-3 bg-[#FAF9F6] rounded-xl"><p className="text-sm">{label}</p><p className="text-lg font-bold mt-2">{value}</p></div>)}</div></section>;
};
