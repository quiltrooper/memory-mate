import React from 'react';
import type { Language } from '../types';
import { choose } from '../utils/activity';
interface Props { offlineMode: boolean; queuedCount: number; onSync: () => void; isSyncing: boolean; lastSyncedTime?: string; language?: Language; aiConfigured?: boolean; message?: string }
export const OfflineSyncBanner: React.FC<Props> = ({offlineMode, queuedCount, onSync, isSyncing, lastSyncedTime, language='en' as Language, aiConfigured=false, message}) => (
  <section id="offline-sync-banner" role="status" className="bg-[#F5F3EF] border-b border-[#E5E1D8] px-5 py-3 text-sm text-[#2D2E2E]">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <div><strong>{offlineMode ? choose(language,'Offline mode','ऑफ़लाइन मोड','অফলাইন অৱস্থা') : aiConfigured ? choose(language,'AI key configured; requests may still be unavailable','AI कुंजी जुड़ी है; अनुरोध फिर भी अनुपलब्ध हो सकते हैं','AI কী সংযুক্ত; অনুৰোধ তথাপি অনুপলব্ধ হ’ব পাৰে') : choose(language,'AI unavailable — local features are ready','AI अनुपलब्ध — स्थानीय सुविधाएँ तैयार हैं','AI উপলব্ধ নহয় — স্থানীয় সুবিধা সাজু আছে')}</strong>
      <p>{choose(language,`${queuedCount} activities awaiting optional AI feedback. Records stay on this device; export a backup to keep a copy.`,`${queuedCount} गतिविधियों की वैकल्पिक AI प्रतिक्रिया बाकी है। रिकॉर्ड इस डिवाइस पर हैं; प्रतिलिपि के लिए बैकअप निर्यात करें।`,`${queuedCount} টা কাৰ্যকলাপৰ ঐচ্ছিক AI মতামত বাকী। নথি এই ডিভাইচত আছে; প্ৰতিলিপিৰ বাবে বেকআপ উলিয়াওক।`)}</p>
      {message && <p>{message}</p>}{lastSyncedTime && <p>{choose(language,'Last AI feedback: ','अंतिम AI प्रतिक्रिया: ','শেষ AI মতামত: ')}{lastSyncedTime}</p>}</div>
      {queuedCount > 0 && <button id="sync-now-banner-btn" type="button" disabled={offlineMode || !aiConfigured || isSyncing} onClick={onSync} className="rounded-xl bg-[#58745E] text-white px-4 py-2 disabled:opacity-50">{isSyncing ? choose(language,'Requesting feedback…','प्रतिक्रिया मिल रही है…','মতামত অনুৰোধ কৰা হৈছে…') : choose(language,'Retry AI feedback','AI प्रतिक्रिया फिर माँगें','AI মতামত পুনৰ চেষ্টা কৰক')}</button>}
    </div>
  </section>
);
