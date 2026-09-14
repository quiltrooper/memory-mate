String translate(
  String language,
  String key, [
  Map<String, Object?> values = const {},
]) {
  var result = messages[language]?[key] ?? key;
  for (final entry in values.entries) {
    result = result.replaceAll('{${entry.key}}', '${entry.value}');
  }
  return result;
}

const messages = <String, Map<String, String>>{
  'hi': {
"No patients available.":"कोई प्रोफ़ाइल उपलब्ध नहीं है।",
"Cannot reach Memory Mate. Check that the local backend is running, then retry.":"Memory Mate से संपर्क नहीं हो रहा। स्थानीय सर्वर चालू करके फिर कोशिश करें।",
"Unable to load this patient. Please retry.":"प्रोफ़ाइल लोड नहीं हुई। फिर कोशिश करें।",
"This reminder changed elsewhere. Refresh and try again.":"अनुस्मारक दूसरी जगह बदला गया है। ताज़ा करके फिर कोशिश करें।",
"Record changed elsewhere. Refresh and retry.":"रिकॉर्ड दूसरी जगह बदला गया है। ताज़ा करके फिर कोशिश करें।",
"Could not save or load this record ({status}).":"रिकॉर्ड सहेज या लोड नहीं सके ({status})।",
"Please check the supplied fields. ({status})":"भरी गई जानकारी जाँचें। ({status})",
    "Required": "आवश्यक",
    "Retry": "फिर कोशिश करें",
    "true": "हाँ",
    "false": "नहीं",
    "en": "English",
    "hi": "हिन्दी",
    "as": "অসমীয়া",
    "routine": "दिनचर्या",
    "meal": "भोजन",
    "appointment": "मुलाकात",
    "medication": "दवा",
    "Reminder saved": "अनुस्मारक सहेजा गया",
    "Remove this saved item?": "यह सहेजी हुई जानकारी हटाएँ?",
    "A little support, every day.": "हर दिन, थोड़ा सहारा।",
    "Your memories, familiar faces, and daily routines in one place.":
        "आपकी यादें, परिचित चेहरे और दिनचर्या एक जगह।",
    "Your daily rhythm": "आपकी दिनचर्या",
    "The moments that matter": "अनमोल पल",
    "Familiar stories to explore with someone you trust.":
        "किसी अपने के साथ परिचित कहानियाँ याद करें।",
    "Small steps for a familiar day.": "परिचित दिनचर्या के छोटे कदम।",
    "An activity estimate, not a diagnosis. Synthetic history is excluded.":
        "यह गतिविधि का अनुमान है, निदान नहीं। कृत्रिम इतिहास शामिल नहीं है।",
    "DEMO PROFILE · Fictional patient details and sample memories. New game results are recorded separately.":
        "डेमो प्रोफ़ाइल · काल्पनिक विवरण और नमूना यादें। नए खेल परिणाम अलग सहेजे जाते हैं।",
    "A moment for your mind": "मन के लिए कुछ पल",
    "Take a moment to remember these words.":
        "इन शब्दों को याद करने के लिए कुछ पल लें।",
    "This is a game result, not a diagnosis.":
        "यह खेल का परिणाम है, निदान नहीं।",
    "Activity measure only. This is not a diagnosis.":
        "केवल गतिविधि का माप। यह निदान नहीं है।",
    "Saved to your activity history.": "गतिविधि इतिहास में सहेजा गया।",
    "Could not save. Your result is still here.":
        "सहेज नहीं सके। आपका परिणाम अभी यहाँ है।",
    "Result could not be saved. Please retry.":
        "परिणाम सहेजा नहीं गया। फिर कोशिश करें।",
    "Tea": "चाय",
    "Garden": "बगीचा",
    "Book": "किताब",
    "River": "नदी",
    "Flower": "फूल",
    "Window": "खिड़की",
    "Bicycle": "साइकिल",
    "Cloud": "बादल",
    "Sun": "सूरज",
    "Water": "पानी",
    "Tree": "पेड़",
    "Home": "घर",
    "Word recall · Level {level} · Difficulty uses your recorded game history.":
        "शब्द स्मरण · स्तर {level} · कठिनाई आपके खेल इतिहास पर आधारित है।",
    "Remember {count} words, then find them in a list.":
        "{count} शब्द याद करें, फिर सूची में खोजें।",
    "Choose up to {count} words you remember.":
        "याद आए अधिकतम {count} शब्द चुनें।",
    "{correct} of {count} words recalled":
        "{count} में से {correct} शब्द याद आए",
    "{count} recorded activities": "{count} सहेजी गई गतिविधियाँ",
    "{score}% accuracy": "{score}% सही",
    "{correct} correct out of {attempts} attempts. {errors} errors.":
        "{attempts} प्रयासों में {correct} सही। {errors} गलतियाँ।",
    "Level {level}. Watch the symbols, then repeat their order.":
        "स्तर {level}। चिन्ह देखें, फिर उसी क्रम में चुनें।",
    "Remember {symbol} ({position} of {count})":
        "{symbol} याद रखें ({count} में {position})",
    "Your turn: {position} of {count}": "आपकी बारी: {count} में {position}",
    "Level {level}. Find {count} matching pairs. No time limit.":
        "स्तर {level}। {count} मिलते जोड़े खोजें। समय सीमा नहीं है।",
    "{symbol} card {index}": "{symbol} कार्ड {index}",
    "Hidden card {index}": "छिपा कार्ड {index}",
    "{count} / 3 activities completed": "{count} / 3 गतिविधियाँ पूरी",
    "{days} / {goal} active days this week":
        "इस सप्ताह {days} / {goal} सक्रिय दिन",
    "{age} years · {location}": "{age} वर्ष · {location}",
    "Caregiver: {name}": "देखभालकर्ता: {name}",
    "{done} of {total} daily reminders complete":
        "{total} में {done} दैनिक अनुस्मारक पूरे",
    "{errors} errors · {ms} ms per answer":
        "{errors} गलतियाँ · प्रति उत्तर {ms} ms",
    "Complete three activities to calculate an activity-support estimate. Synthetic history is excluded.":
        "गतिविधि सहायता का अनुमान पाने के लिए तीन गतिविधियाँ पूरी करें। कृत्रिम इतिहास शामिल नहीं है।",
    "Support index = 60% error component + 25% pace component + 15% weekly-goal shortfall. Uses the last five recorded activities and this profile’s chosen pace and weekly goal. Low <25; Medium 25–<50; High ≥50. This is a transparent prototype rule, not a diagnosis or validated clinical model.":
        "सहायता सूचकांक = 60% गलती + 25% गति + 15% साप्ताहिक लक्ष्य की कमी। पिछली पाँच गतिविधियाँ और चुनी हुई गति व लक्ष्य उपयोग होते हैं। कम <25; मध्यम 25–<50; अधिक ≥50। यह प्रोटोटाइप नियम है, निदान या प्रमाणित चिकित्सीय मॉडल नहीं।",
    'Today': 'आज',
    'Reminders': 'अनुस्मारक',
    'Memories': 'यादें',
    'Games': 'खेल',
    'Patient profile': 'व्यक्ति की प्रोफ़ाइल',
    'Search patients': 'प्रोफ़ाइल खोजें',
    'Profile settings': 'प्रोफ़ाइल सेटिंग',
    'Add patient': 'प्रोफ़ाइल जोड़ें',
    'Add reminder': 'अनुस्मारक जोड़ें',
    'Add memory': 'याद जोड़ें',
    'Edit memory': 'याद संपादित करें',
    'Activity support': 'गतिविधि सहायता',
    'How this is calculated': 'गणना कैसे होती है',
    'Word recall': 'शब्द स्मरण',
    'Pattern recall': 'क्रम स्मरण',
    'Picture matching': 'चित्र मिलान',
    'Low': 'कम',
    'Medium': 'मध्यम',
    'High': 'अधिक',
    'Name': 'नाम',
    'Age': 'आयु',
    'Location': 'स्थान',
    'Caregiver': 'देखभालकर्ता',
    'Notes': 'टिप्पणी',
    'Language': 'भाषा',
    'Large text': 'बड़ा पाठ',
    'Title': 'शीर्षक',
    'Caption': 'विवरण',
    'Time': 'समय',
    'Category': 'श्रेणी',
    'Image URL (optional)': 'चित्र URL (वैकल्पिक)',
    'Year or era': 'वर्ष या समय',
    'Weekly activity goal (days)': 'साप्ताहिक लक्ष्य (दिन)',
    'Comfortable response pace (ms)': 'सहज उत्तर समय (ms)',
    'Delete': 'हटाएँ',
    'Edit reminder': 'अनुस्मारक संपादित करें',
    'Save': 'सहेजें',
    'Cancel': 'रद्द करें',
    'Refresh records': 'रिकॉर्ड ताज़ा करें',
    'Continue': 'जारी रखें',
    'Start word recall': 'शब्द खेल शुरू करें',
    'Start pattern recall': 'क्रम खेल शुरू करें',
    'Start picture matching': 'चित्र खेल शुरू करें',
    'Check my words': 'उत्तर जाँचें',
    'Retry saving': 'फिर सहेजें',
    'Play again': 'फिर खेलें',
  },
  'as': {
"No patients available.":"কোনো প্ৰফাইল উপলব্ধ নাই।",
"Cannot reach Memory Mate. Check that the local backend is running, then retry.":"Memory Mateৰ সৈতে সংযোগ হোৱা নাই। স্থানীয় চাৰ্ভাৰ চলাই আকৌ চেষ্টা কৰক।",
"Unable to load this patient. Please retry.":"প্ৰফাইল লোড নহ’ল। আকৌ চেষ্টা কৰক।",
"This reminder changed elsewhere. Refresh and try again.":"সোঁৱৰণী আন ঠাইত সলনি হৈছে। সতেজ কৰি আকৌ চেষ্টা কৰক।",
"Record changed elsewhere. Refresh and retry.":"নথি আন ঠাইত সলনি হৈছে। সতেজ কৰি আকৌ চেষ্টা কৰক।",
"Could not save or load this record ({status}).":"নথি সংৰক্ষণ বা লোড কৰিব নোৱাৰিলোঁ ({status})।",
"Please check the supplied fields. ({status})":"দিয়া তথ্য পৰীক্ষা কৰক। ({status})",
    "Required": "প্ৰয়োজনীয়",
    "Retry": "আকৌ চেষ্টা কৰক",
    "true": "হয়",
    "false": "নহয়",
    "en": "English",
    "hi": "हिन्दी",
    "as": "অসমীয়া",
    "routine": "দৈনন্দিন কাম",
    "meal": "আহাৰ",
    "appointment": "সাক্ষাৎ",
    "medication": "ঔষধ",
    "Reminder saved": "সোঁৱৰণী সংৰক্ষণ কৰা হ’ল",
    "Remove this saved item?": "এই সংৰক্ষিত তথ্য মচিবনে?",
    "A little support, every day.": "প্ৰতিদিনে অলপ সহায়।",
    "Your memories, familiar faces, and daily routines in one place.":
        "আপোনাৰ স্মৃতি, চিনাকি মুখ আৰু দৈনন্দিন কাম একে ঠাইতে।",
    "Your daily rhythm": "আপোনাৰ দৈনন্দিন তালিকা",
    "The moments that matter": "মূল্যৱান মুহূৰ্তবোৰ",
    "Familiar stories to explore with someone you trust.":
        "বিশ্বাসৰ আপোনজনৰ সৈতে চিনাকি কাহিনী মনত পেলাওক।",
    "Small steps for a familiar day.": "চিনাকি দিন এটাৰ বাবে সৰু পদক্ষেপ।",
    "An activity estimate, not a diagnosis. Synthetic history is excluded.":
        "এয়া কাৰ্যকলাপৰ অনুমান, ৰোগ নিৰ্ণয় নহয়। কৃত্ৰিম ইতিহাস অন্তৰ্ভুক্ত নহয়।",
    "DEMO PROFILE · Fictional patient details and sample memories. New game results are recorded separately.":
        "ডেমো প্ৰফাইল · কাল্পনিক তথ্য আৰু নমুনা স্মৃতি। নতুন খেলৰ ফলাফল পৃথককৈ সংৰক্ষণ কৰা হয়।",
    "A moment for your mind": "মনটোৰ বাবে অলপ সময়",
    "Take a moment to remember these words.":
        "এই শব্দবোৰ মনত ৰাখিবলৈ অলপ সময় লওক।",
    "This is a game result, not a diagnosis.":
        "এয়া খেলৰ ফলাফল, ৰোগ নিৰ্ণয় নহয়।",
    "Activity measure only. This is not a diagnosis.":
        "কেৱল কাৰ্যকলাপৰ মাপ। এয়া ৰোগ নিৰ্ণয় নহয়।",
    "Saved to your activity history.": "কাৰ্যকলাপৰ ইতিহাসত সংৰক্ষণ কৰা হ’ল।",
    "Could not save. Your result is still here.":
        "সংৰক্ষণ কৰিব নোৱাৰিলোঁ। আপোনাৰ ফলাফল ইয়াতে আছে।",
    "Result could not be saved. Please retry.":
        "ফলাফল সংৰক্ষণ নহ’ল। আকৌ চেষ্টা কৰক।",
    "Tea": "চাহ",
    "Garden": "বাগিচা",
    "Book": "কিতাপ",
    "River": "নদী",
    "Flower": "ফুল",
    "Window": "খিৰিকী",
    "Bicycle": "চাইকেল",
    "Cloud": "ডাৱৰ",
    "Sun": "সূৰ্য",
    "Water": "পানী",
    "Tree": "গছ",
    "Home": "ঘৰ",
    "Word recall · Level {level} · Difficulty uses your recorded game history.":
        "শব্দ স্মৰণ · স্তৰ {level} · কঠিনতা আপোনাৰ খেলৰ ইতিহাসৰ ওপৰত নিৰ্ভৰ কৰে।",
    "Remember {count} words, then find them in a list.":
        "{count}টা শব্দ মনত ৰাখক, তাৰ পিছত তালিকাত বিচাৰক।",
    "Choose up to {count} words you remember.":
        "মনত থকা সৰ্বাধিক {count}টা শব্দ বাছক।",
    "{correct} of {count} words recalled":
        "{count}টাৰ ভিতৰত {correct}টা শব্দ মনত পৰিল",
    "{count} recorded activities": "{count}টা সংৰক্ষিত কাৰ্যকলাপ",
    "{score}% accuracy": "{score}% শুদ্ধ",
    "{correct} correct out of {attempts} attempts. {errors} errors.":
        "{attempts}টা চেষ্টাৰ ভিতৰত {correct}টা শুদ্ধ। {errors}টা ভুল।",
    "Level {level}. Watch the symbols, then repeat their order.":
        "স্তৰ {level}। চিহ্নবোৰ চাওক, তাৰ পিছত একে ক্ৰমত বাছক।",
    "Remember {symbol} ({position} of {count})":
        "{symbol} মনত ৰাখক ({count}টাৰ ভিতৰত {position})",
    "Your turn: {position} of {count}":
        "আপোনাৰ পাল: {count}টাৰ ভিতৰত {position}",
    "Level {level}. Find {count} matching pairs. No time limit.":
        "স্তৰ {level}। {count}টা মিল থকা যোৰ বিচাৰক। সময়ৰ সীমা নাই।",
    "{symbol} card {index}": "{symbol} কাৰ্ড {index}",
    "Hidden card {index}": "লুকোৱা কাৰ্ড {index}",
    "{count} / 3 activities completed": "{count} / 3টা কাৰ্যকলাপ সম্পূৰ্ণ",
    "{days} / {goal} active days this week":
        "এই সপ্তাহত {days} / {goal}টা সক্ৰিয় দিন",
    "{age} years · {location}": "{age} বছৰ · {location}",
    "Caregiver: {name}": "যত্ন লওঁতা: {name}",
    "{done} of {total} daily reminders complete":
        "{total}টাৰ ভিতৰত {done}টা দৈনিক সোঁৱৰণী সম্পূৰ্ণ",
    "{errors} errors · {ms} ms per answer":
        "{errors}টা ভুল · প্ৰতিটো উত্তৰত {ms} ms",
    "Complete three activities to calculate an activity-support estimate. Synthetic history is excluded.":
        "কাৰ্যকলাপৰ সহায়ৰ অনুমান পাবলৈ তিনিটা কাৰ্যকলাপ সম্পূৰ্ণ কৰক। কৃত্ৰিম ইতিহাস অন্তৰ্ভুক্ত নহয়।",
    "Support index = 60% error component + 25% pace component + 15% weekly-goal shortfall. Uses the last five recorded activities and this profile’s chosen pace and weekly goal. Low <25; Medium 25–<50; High ≥50. This is a transparent prototype rule, not a diagnosis or validated clinical model.":
        "সহায় সূচক = 60% ভুল + 25% গতি + 15% সাপ্তাহিক লক্ষ্যৰ ঘাটি। শেহতীয়া পাঁচটা কাৰ্যকলাপ আৰু বাছি লোৱা গতি আৰু লক্ষ্য ব্যৱহাৰ কৰে। কম <25; মধ্যম 25–<50; বেছি ≥50। এয়া প্ৰটোটাইপ নিয়ম, ৰোগ নিৰ্ণয় বা প্ৰমাণিত চিকিৎসা মডেল নহয়।",
    'Today': 'আজিৰ দিন',
    'Reminders': 'সোঁৱৰণী',
    'Memories': 'স্মৃতি',
    'Games': 'খেল',
    'Patient profile': 'ব্যক্তিৰ প্ৰফাইল',
    'Search patients': 'প্ৰফাইল বিচাৰক',
    'Profile settings': 'প্ৰফাইল ছেটিংছ',
    'Add patient': 'প্ৰফাইল যোগ কৰক',
    'Add reminder': 'সোঁৱৰণী যোগ কৰক',
    'Add memory': 'স্মৃতি যোগ কৰক',
    'Edit memory': 'স্মৃতি সম্পাদনা কৰক',
    'Activity support': 'কাৰ্যকলাপৰ সহায়',
    'How this is calculated': 'গণনা কেনেকৈ হয়',
    'Word recall': 'শব্দ স্মৰণ',
    'Pattern recall': 'ক্ৰম স্মৰণ',
    'Picture matching': 'ছবি মিলোৱা',
    'Low': 'কম',
    'Medium': 'মধ্যম',
    'High': 'বেছি',
    'Name': 'নাম',
    'Age': 'বয়স',
    'Location': 'স্থান',
    'Caregiver': 'যত্ন লওঁতা',
    'Notes': 'টোকা',
    'Language': 'ভাষা',
    'Large text': 'ডাঙৰ আখৰ',
    'Title': 'শিৰোনাম',
    'Caption': 'বিৱৰণ',
    'Time': 'সময়',
    'Category': 'শ্ৰেণী',
    'Image URL (optional)': 'ছবিৰ URL (ঐচ্ছিক)',
    'Year or era': 'বছৰ বা সময়',
    'Weekly activity goal (days)': 'সাপ্তাহিক লক্ষ্য (দিন)',
    'Comfortable response pace (ms)': 'সহজ উত্তৰৰ সময় (ms)',
    'Delete': 'মচক',
    'Edit reminder': 'সোঁৱৰণী সম্পাদনা কৰক',
    'Save': 'সংৰক্ষণ কৰক',
    'Cancel': 'বাতিল',
    'Refresh records': 'নথি সতেজ কৰক',
    'Continue': 'আগবাঢ়ক',
    'Start word recall': 'শব্দ খেল আৰম্ভ কৰক',
    'Start pattern recall': 'ক্ৰম খেল আৰম্ভ কৰক',
    'Start picture matching': 'ছবি খেল আৰম্ভ কৰক',
    'Check my words': 'উত্তৰ পৰীক্ষা কৰক',
    'Retry saving': 'পুনৰ সংৰক্ষণ কৰক',
    'Play again': 'আকৌ খেলক',
  },
};
