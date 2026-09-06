import { Language } from '../types';

export const TRANSLATIONS = {
  en: {
    // Header & Meta
    appName: 'Memory Mate',
    tagline: 'Cognitive Assessment & Reassuring Memory Companion',
    regionalTag: 'Northeast India',
    patientMode: 'Patient Mode',
    caregiverDashboard: 'Caregiver Dashboard',
    cloudConnected: 'Cloud Connected',
    offlineMode: 'Offline Mode (Simulated)',
    sync: 'Sync',
    largeText: 'Aa+',
    patientSelector: 'Patient Profile:',

    // Patient Banner
    welcome: 'Welcome',
    goodDay: 'Good day',
    bannerSubtitle: (caregiver: string, asha: string) =>
      `Take a slow, gentle breath. Your family (${caregiver}) and community health worker (${asha}) are keeping everything organized for you today.`,
    tasksDone: (completed: number, total: number) => `${completed} of ${total} tasks done`,
    exercisesDone: (count: number) => `${count} brain exercises recorded`,
    memoriesSaved: (count: number) => `${count} family memories saved`,

    // Navigation Tabs
    tabAssistant: 'Memory Assistant',
    tabAssistantSub: 'Chat & Face Recall',
    tabGames: 'Cognitive Games',
    tabGamesSub: '3 Adaptive Tests',
    tabReminders: 'Daily Reminders',
    tabRemindersSub: 'Routine & Medicine',
    tabMemoryBox: 'Digital Memory Box',
    tabMemoryBoxSub: 'Photos & Stories',

    // Assistant
    assistantTitle: 'Gentle Memory Assistant',
    assistantSubtitle: "Ask about today's routine, reminders, or show a photo to recall family faces",
    teachFaceBtn: 'Teach New Face',
    quickQuestions: 'Quick Questions:',
    q1: 'What do I need to do today?',
    q2: 'When is my next medicine?',
    q3: 'Tell me something comforting about home.',
    tryFaceRecall: 'Try Face Recall:',
    inputPlaceholder: "Type or ask anything (e.g. 'What is today's plan?')...",
    inputWithPhotoPlaceholder: "Ask: 'Who is this?' or add a note...",
    voiceGuidance: 'Voice guidance',
    uploadPhotoTitle: "Upload photo to ask 'Who is this?'",
    send: 'Send',
    thinking: 'Memory Mate is thinking gently...',
    photoSelected: 'Photo selected for recall',
    defaultGreeting: (name: string, location: string) =>
      `Hello, ${name}! I am right here with you today.\n\nYou are at your peaceful home in ${location}, completely safe and surrounded by love. Your family and community health worker have organized your daily routine and medicines with great care.\n\nYou can ask me what is planned for today, when your next medicine or tea is, or show me a photo to recognize anyone you cherish. How are you feeling right now?`,

    // Cognitive Games
    gamesTitle: 'Cognitive Exercise Games',
    gamesSubtitle: 'Gentle, adaptive games that measure accuracy and memory to assess cognitive wellness with Gemini.',
    patternRecallTitle: 'Pattern Recall',
    patternRecallSub: 'Adaptive tile sequence test',
    wordRecallTitle: 'Word Recall',
    wordRecallSub: '10s memorization + distraction task',
    pictureMatchingTitle: 'Picture Matching',
    pictureMatchingSub: 'Icon matching card pairs',
    startExercise: 'Start Exercise',
    round: 'Round',
    level: 'Level',
    accuracy: 'Accuracy',
    responseTime: 'Avg Speed',
    errors: 'Errors',
    nextRound: 'Next Round',
    repeatPattern: 'Repeat Pattern',
    watchCarefully: 'Watch the pattern carefully...',
    yourTurn: 'Now repeat the pattern!',
    memorizeWords: 'Memorize these words',
    distractionTask: 'Gentle Distraction Task',
    selectRecalledWords: 'Which words were shown earlier?',
    checkAnswers: 'Check Answers',
    completedSession: 'Session Complete!',
    submittingToGemini: 'Evaluating with Gemini...',

    // Reminders
    remindersTitle: "Today's Routine Reminders",
    remindersBadge: 'Daily Routine & Medicine Schedule',
    remindersProgress: (done: number, total: number) => `${done} of ${total} daily items completed today`,
    addReminder: 'Add Reminder',
    markDone: 'Mark Done',
    completed: 'Completed',
    readAloud: 'Read aloud',
    categoryMed: 'Medication',
    categoryMeal: 'Meal / Tea',
    categoryAppt: 'Appointment',
    categoryRoutine: 'Routine Walk / Rest',

    // Digital Memory Box
    memoryBoxTitle: 'Digital Memory Box',
    memoryBoxBadge: 'Nostalgia & Reminiscence Therapy',
    memoryBoxSub: "Cherished family photos and stories. Tap 'Tell Me About This' to reminisce warmly with Gemini.",
    addNewMemory: 'Add New Memory',
    tellMeAboutThis: 'Tell Me About This',
    revisitMemory: 'Revisit Memory (Voice Prompt)',
    generatingPrompt: 'Generating Prompt...',
    reminiscencePrompt: 'Reminiscence Prompt',

    // Caregiver Dashboard
    caregiverTitle: 'Clinical Cognitive Dashboard',
    caregiverSubtitle: 'Longitudinal monitoring, daily adherence, and clinical evaluation with Gemini AI.',
    switchPatient: 'Switch Patient Data',
    addPatient: '+ Add Patient Data',
    patientDataNotice: 'Active Patient Profile',
    exportReport: 'Export Clinical Summary',
    domainMemory: 'Memory Domain',
    domainAttention: 'Attention Domain',
    domainExecutive: 'Executive Domain',
    domainComposite: 'Composite Index',
  },

  as: {
    // Header & Meta
    appName: 'মেমৰি মেট (Memory Mate)',
    tagline: 'জ্ঞানীয় মূল্যায়ন আৰু আশ্বাসদায়ক স্মৃতি সহায়ক',
    regionalTag: 'উত্তৰ-পূব ভাৰত',
    patientMode: 'বয়োজ্যেষ্ঠ মোড',
    caregiverDashboard: 'যত্নকৰ্তা ডেচবৰ্ড',
    cloudConnected: 'ক্লাউড সংযোগ সক্ৰিয়',
    offlineMode: 'অফলাইন মোড (অনুকৰণ)',
    sync: 'সংমিশ্ৰণ',
    largeText: 'ডাঙৰ আখৰ',
    patientSelector: 'ৰোগীৰ তথ্য:',

    // Patient Banner
    welcome: 'স্বাগতম',
    goodDay: 'নমস্কাৰ',
    bannerSubtitle: (caregiver: string, asha: string) =>
      `এটা গভীৰ, শান্ত শ্বাস লওক। আপোনাৰ পৰিয়ালৰ সদস্য (${caregiver}) আৰু আশা স্বাস্থ্যকৰ্মী (${asha}) আজি আপোনাৰ সকলো দায়িত্ব সূচাৰুৰূপে পালন কৰি আছে।`,
    tasksDone: (completed: number, total: number) => `${total} টা কামৰ ভিতৰত ${completed} টা সম্পন্ন হৈছে`,
    exercisesDone: (count: number) => `${count} টা মানসিক ব্যায়াম সম্পূৰ্ণ`,
    memoriesSaved: (count: number) => `${count} টা পাৰিবাৰিক স্মৃতি সংৰক্ষিত`,

    // Navigation Tabs
    tabAssistant: 'স্মৃতি সহায়ক',
    tabAssistantSub: 'কথোপকথন আৰু মুখ চিনাক্তকৰণ',
    tabGames: 'মানসিক খেলসমূহ',
    tabGamesSub: '৩ টা অভিযোজিত খেল',
    tabReminders: 'দৈনন্দিন ৰুটিন',
    tabRemindersSub: 'নিয়ম আৰু ঔষধৰ তালিকা',
    tabMemoryBox: 'ডিজিটেল স্মৃতি পেৰা',
    tabMemoryBoxSub: 'ছবি আৰু সোঁৱৰণি',

    // Assistant
    assistantTitle: 'শান্ত আৰু সহৃদয় স্মৃতি সহায়ক',
    assistantSubtitle: 'আজিৰ নিয়ম, ঔষধৰ সময় সোধক বা পৰিয়ালৰ মুখ চিনাক্ত কৰিবলৈ ফটো দেখুৱাওক',
    teachFaceBtn: 'নতুন মুখ চিনাকি কৰক',
    quickQuestions: 'দ্ৰুত প্ৰশ্নসমূহ:',
    q1: 'আজি মই কি কৰিব লাগিব?',
    q2: 'মোৰ পৰৱৰ্তী ঔষধ কেতিয়া লব লাগিব?',
    q3: 'মোক ঘৰৰ বিষয়ে কিবা শান্তিদায়ক কথা কওক।',
    tryFaceRecall: 'চিনাকি মুখ পৰীক্ষা:',
    inputPlaceholder: "যিকোনো কথা সোধক (যেনে: 'আজিৰ কি কাৰ্যসূচী আছে?')...",
    inputWithPhotoPlaceholder: "সোধক: 'এইজন কোন হয়?' বা কিবা লিখক...",
    voiceGuidance: 'কণ্ঠ নিৰ্দেশনা',
    uploadPhotoTitle: "ফটো আপলোড কৰি সোধক 'এইজন কোন?'",
    send: 'প্ৰেৰণ কৰক',
    thinking: 'মেমৰি মেটে শান্তভাৱে চিন্তা কৰিছে...',
    photoSelected: 'চিনাক্তকৰণৰ বাবে ফটো বাছনি কৰা হৈছে',
    defaultGreeting: (name: string, location: string) =>
      `নমস্কাৰ, ${name}! মই আপোনাৰ ওচৰতেই আছোঁ।\n\nআপুনি ${location}ৰ শান্ত আৰু আপোন ঘৰখনতেই সম্পূৰ্ণ সুৰক্ষিত হৈ আছে। আপোনাৰ পৰিয়াল আৰু আশা স্বাস্থ্যকৰ্মীয়ে আজিৰ সকলো ঔষধ আৰু দৈনন্দিন কাৰ্যসূচী সুন্দৰকৈ সজাই থৈছে।\n\nআজিৰ দিনটোৰ কাম, ঔষধৰ সময় বা কোনো চিনাকি মুখ চিনিবলৈ মোক সুধিব পাৰে। আপোনাৰ মনটো এতিয়া কেনে লাগিছে কওকচোন?`,

    // Cognitive Games
    gamesTitle: 'মানসিক ব্যায়াম খেলসমূহ',
    gamesSubtitle: 'সহজ আৰু মৰমলগা খেল, যিয়ে একাগ্ৰতা আৰু স্মৃতি জুখি জেমিনি এআইৰ সৈতে ফলাফল দিয়ে।',
    patternRecallTitle: 'ৰং আৰ্হি মনত ৰখা',
    patternRecallSub: 'ক্ৰমবৰ্ধমান ৰঙৰ ক্ৰম মনত ৰখাৰ খেল',
    wordRecallTitle: 'শব্দ মনত ৰখা খেল',
    wordRecallSub: '১০ ছেকেণ্ড শব্দ চাই মনত ৰখাৰ খেল',
    pictureMatchingTitle: 'ছবি মিলোৱা খেল',
    pictureMatchingSub: 'যোৰা ছবি চিনাক্ত কৰি মিলোৱা খেল',
    startExercise: 'খেল আৰম্ভ কৰক',
    round: 'পৰ্যায়',
    level: 'স্তৰ',
    accuracy: 'সঠিকতা',
    responseTime: 'সময়',
    errors: 'ভুল',
    nextRound: 'পৰৱৰ্তী পৰ্যায়',
    repeatPattern: 'একে আৰ্হি টিপক',
    watchCarefully: 'ৰঙৰ ক্ৰমটো মনোযোগেৰে চাওক...',
    yourTurn: 'এতিয়া আপুনি একেদৰে টিপক!',
    memorizeWords: 'এই শব্দকেইটা মনত ৰাখক',
    distractionTask: 'এক মুহূৰ্তৰ বিৰতি ব্যায়াম',
    selectRecalledWords: 'পূৰ্বে দেখুওৱা শব্দবোৰ বাছক:',
    checkAnswers: 'উত্তৰ পৰীক্ষা কৰক',
    completedSession: 'খেল সম্পন্ন হ’ল!',
    submittingToGemini: 'জেমিনিৰ সৈতে মূল্যায়ন চলিছে...',

    // Reminders
    remindersTitle: 'আজিৰ দৈনন্দিন কামৰ তালিকা',
    remindersBadge: 'দৈনন্দিন নিয়ম আৰু ঔষধৰ সময়সূচী',
    remindersProgress: (done: number, total: number) => `আজিৰ ${total} টা কামৰ ভিতৰত ${done} টা সম্পন্ন`,
    addReminder: 'নতুন কাম যোগ কৰক',
    markDone: 'সম্পন্ন চিহ্নিত কৰক',
    completed: 'সম্পন্ন হ’ল',
    readAloud: 'পঢ়ি শুনক',
    categoryMed: 'ঔষধ',
    categoryMeal: 'আহাৰ / চাহ',
    categoryAppt: 'সাক্ষাৎ / পৰীক্ষা',
    categoryRoutine: 'দৈনিক নিয়ম / ফুৰা-চকা',

    // Digital Memory Box
    memoryBoxTitle: 'ডিজিটেল স্মৃতি পেৰা',
    memoryBoxBadge: 'পুৰণি স্মৃতি আৰু আনন্দদায়ক সোঁৱৰণি',
    memoryBoxSub: "পৰিয়ালৰ সুন্দৰ ছবি আৰু কাহিনী। জেমিনিৰ সৈতে আনন্দৰে মনত পেলাবলৈ 'এই বিষয়ে কওক' টিপক।",
    addNewMemory: 'নতুন স্মৃতি যোগ কৰক',
    tellMeAboutThis: 'এই বিষয়ে কওক',
    revisitMemory: 'স্মৃতি পুনৰ সোঁৱৰক (কণ্ঠ প্ৰশ্ন)',
    generatingPrompt: 'প্ৰশ্ন প্ৰস্তুত হৈছে...',
    reminiscencePrompt: 'আনন্দময় সোঁৱৰণি প্ৰশ্ন',

    // Caregiver Dashboard
    caregiverTitle: 'ক্লিনিকেল কগনিটিভ ডেচবৰ্ড',
    caregiverSubtitle: 'বয়োজ্যেষ্ঠসকলৰ জ্ঞানীয় অগ্ৰগতি, দৈনন্দিন নিয়ম আৰু জেমিনি এআই নিৰীক্ষণ।',
    switchPatient: 'ৰোগী সলনি কৰক',
    addPatient: '+ নতুন ৰোগী যোগ কৰক',
    patientDataNotice: 'বৰ্তমান সক্ৰিয় ৰোগী',
    exportReport: 'চিকিৎসা প্ৰতিবেদন ডাউনল’ড',
    domainMemory: 'স্মৃতি ক্ষমতা',
    domainAttention: 'মনোযোগ ক্ষমতা',
    domainExecutive: 'কাৰ্য্যকৰী ক্ষমতা',
    domainComposite: 'সামগ্ৰিক সূচক',
  },

  hi: {
    // Header & Meta
    appName: 'मेमरी मेट (Memory Mate)',
    tagline: 'संज्ञानात्मक मूल्यांकन और आश्वस्त करने वाला स्मृति साथी',
    regionalTag: 'पूर्वोत्तर भारत',
    patientMode: 'मरीज़ मोड',
    caregiverDashboard: 'देखभालकर्ता डैशबोर्ड',
    cloudConnected: 'क्लाउड कनेक्टेड',
    offlineMode: 'ऑफ़लाइन मोड (सिम्युलेटेड)',
    sync: 'सिंक करें',
    largeText: 'बड़ा अक्षर',
    patientSelector: 'मरीज़ प्रोफ़ाइल:',

    // Patient Banner
    welcome: 'स्वागत है',
    goodDay: 'नमस्ते',
    bannerSubtitle: (caregiver: string, asha: string) =>
      `एक शांत और गहरी साँस लें। आपके परिवार के सदस्य (${caregiver}) और आशा स्वास्थ्य कार्यकर्ता (${asha}) आज आपके सभी कार्यों का पूरा ध्यान रख रहे हैं।`,
    tasksDone: (completed: number, total: number) => `${total} में से ${completed} कार्य पूरे हुए`,
    exercisesDone: (count: number) => `${count} दिमागी अभ्यास पूरे किए गए`,
    memoriesSaved: (count: number) => `${count} पारिवारिक यादें सहेजी गईं`,

    // Navigation Tabs
    tabAssistant: 'स्मृति सहायक',
    tabAssistantSub: 'बातचीत और चेहरा पहचान',
    tabGames: 'दिमागी खेल',
    tabGamesSub: '3 अनुकूलन योग्य खेल',
    tabReminders: 'दैनिक कार्यसूची',
    tabRemindersSub: 'नित्यकर्म और दवाइयाँ',
    tabMemoryBox: 'डिजिटल स्मृति पेटी',
    tabMemoryBoxSub: 'फ़ोटो और संस्मरण',

    // Assistant
    assistantTitle: 'स्नेहपूर्ण स्मृति सहायक',
    assistantSubtitle: 'आज की दिनचर्या, दवा के समय के बारे में पूछें या परिजनों के चेहरे पहचानने के लिए फ़ोटो दिखाएं',
    teachFaceBtn: 'नया चेहरा सिखाएं',
    quickQuestions: 'त्वरित प्रश्न:',
    q1: 'आज मुझे क्या करना है?',
    q2: 'मेरी अगली दवाई कब है?',
    q3: 'मुझे घर के बारे में कोई सुखद बात बताएं।',
    tryFaceRecall: 'चेहरा पहचान आज़माएं:',
    inputPlaceholder: "कुछ भी पूछें (जैसे: 'आज की क्या योजना है?')...",
    inputWithPhotoPlaceholder: "पूछें: 'फ़ोटो में यह कौन हैं?' या संदेश लिखें...",
    voiceGuidance: 'आवाज़ सहायता',
    uploadPhotoTitle: "फ़ोटो अपलोड करके पूछें 'यह कौन हैं?'",
    send: 'भेजें',
    thinking: 'मेमरी मेट शांत भाव से सोच रहा है...',
    photoSelected: 'पहचान के लिए फ़ोटो चुनी गई',
    defaultGreeting: (name: string, location: string) =>
      `नमस्ते, ${name}! मैं आज आपके साथ हूँ।\n\nआप ${location} स्थित अपने सुखद और शांत घर में पूरी तरह सुरक्षित हैं। आपके परिजनों और आशा स्वास्थ्य कार्यकर्ता ने आपकी सभी दवाइयाँ और दैनिक दिनचर्या बहुत प्यार से व्यवस्थित कर रखी है।\n\nआप मुझसे आज के कार्यों, अगली दवाई के समय, या किसी भी प्रियजन को पहचानने के लिए फ़ोटो दिखाकर पूछ सकते हैं। आप अभी कैसा महसूस कर रहे हैं?`,

    // Cognitive Games
    gamesTitle: 'संज्ञानात्मक दिमागी खेल',
    gamesSubtitle: 'सरल और सुखद खेल, जो एकाग्रता और स्मरण शक्ति का आकलन करके जेमिनी एआई द्वारा परिणाम देते हैं।',
    patternRecallTitle: 'रंग पैटर्न स्मरण',
    patternRecallSub: 'रंगों के क्रम को याद रखने का खेल',
    wordRecallTitle: 'शब्द स्मरण खेल',
    wordRecallSub: '10 सेकंड में शब्द याद रखने की चुनौती',
    pictureMatchingTitle: 'चित्र मिलान खेल',
    pictureMatchingSub: 'जोड़ियों में चित्रों को मिलाने का खेल',
    startExercise: 'अभ्यास शुरू करें',
    round: 'दौर',
    level: 'स्तर',
    accuracy: 'सटीकता',
    responseTime: 'औसत गति',
    errors: 'त्रुटियाँ',
    nextRound: 'अगला दौर',
    repeatPattern: 'पैटर्न दोहराएं',
    watchCarefully: 'रंगों के क्रम को ध्यान से देखें...',
    yourTurn: 'अब उसी क्रम में दबाएं!',
    memorizeWords: 'इन शब्दों को याद रखें',
    distractionTask: 'हल्का ध्यान भटकाव अभ्यास',
    selectRecalledWords: 'पहले दिखाए गए शब्द चुनें:',
    checkAnswers: 'उत्तर जांचें',
    completedSession: 'सत्र पूरा हुआ!',
    submittingToGemini: 'जेमिनी एआई द्वारा मूल्यांकन किया जा रहा है...',

    // Reminders
    remindersTitle: 'आज के दैनिक कार्य',
    remindersBadge: 'दैनिक दिनचर्या और दवाई का समय',
    remindersProgress: (done: number, total: number) => `आज के ${total} में से ${done} काम संपन्न`,
    addReminder: 'नया कार्य जोड़ें',
    markDone: 'संपन्न चिह्नित करें',
    completed: 'पूरा हुआ',
    readAloud: 'बोलकर सुनाएं',
    categoryMed: 'दवाई',
    categoryMeal: 'भोजन / चाय',
    categoryAppt: 'मिलना / डॉक्टर जांच',
    categoryRoutine: 'नित्यकर्म / टहलना',

    // Digital Memory Box
    memoryBoxTitle: 'डिजिटल स्मृति पेटी',
    memoryBoxBadge: 'पुरानी यादें और सुखद स्मरण',
    memoryBoxSub: "परिवार की अनमोल तस्वीरें और किस्से। जेमिनी के साथ स्नेहपूर्वक याद करने के लिए 'इसके बारे में बताएं' दबाएं।",
    addNewMemory: 'नई याद जोड़ें',
    tellMeAboutThis: 'इसके बारे में बताएं',
    revisitMemory: 'याद ताज़ा करें (आवाज़ प्रश्न)',
    generatingPrompt: 'प्रश्न तैयार हो रहा है...',
    reminiscencePrompt: 'सुखद संस्मरण प्रश्न',

    // Caregiver Dashboard
    caregiverTitle: 'क्लिनिकल संज्ञानात्मक डैशबोर्ड',
    caregiverSubtitle: 'दीर्घकालिक निगरानी, दैनिक कार्य पालन और जेमिनी एआई क्लिनिकल विश्लेषण।',
    switchPatient: 'मरीज़ बदलें',
    addPatient: '+ नया मरीज़ जोड़ें',
    patientDataNotice: 'वर्तमान सक्रिय मरीज़',
    exportReport: 'क्लिनिकल रिपोर्ट डाउनलोड करें',
    domainMemory: 'स्मरण क्षमता',
    domainAttention: 'एकाग्रता क्षमता',
    domainExecutive: 'कार्यकारी क्षमता',
    domainComposite: 'समग्र सूचकांक',
  },
};

// Word recall pool per language (flat lists, kept for reference/back-compat)
export const WORD_POOLS: Record<Language, string[]> = {
  en: [
    'Tea', 'Brahmaputra', 'River', 'Pitha', 'Flute', 'Garden',
    'Sunlight', 'Courtyard', 'Smile', 'Majuli', 'Music', 'Morning',
    'Village', 'Lotus', 'Breeze', 'Rain', 'Friend', 'Temple',
  ],
  as: [
    'চাহ', 'ব্ৰহ্মপুত্ৰ', 'নদী', 'পিঠা', 'পেঁপা', 'ফুলনি',
    'ৰোদ', 'চোতাল', 'হাঁহি', 'মাজুলী', 'গীত', 'পুৱা',
    'গাঁও', 'পদ্ম', 'বতাহ', 'বৰষুণ', 'বন্ধু', 'নামঘৰ',
  ],
  hi: [
    'चाय', 'ब्रह्मपुत्र', 'नदी', 'पीठा', 'बांसुरी', 'बगीचा',
    'धूप', 'आँगन', 'मुस्कान', 'माजुली', 'गीत', 'सुबह',
    'गांव', 'कमल', 'हवा', 'बारिश', 'दोस्त', 'मंदिर',
  ],
};

// Shape expected by WordRecallGame: { target: Item[], distractor: Item[] }
// where Item = { id: string, word: string, subtext: string }
interface WordRecallItem {
  id: string;
  word: string;
  subtext: string;
}

interface WordRecallPool {
  target: WordRecallItem[];
  distractor: WordRecallItem[];
}

const buildPool = (
  targetWords: string[],
  distractorWords: string[],
  subtexts: string[]
): WordRecallPool => ({
  target: targetWords.map((word, idx) => ({
    id: `t-${idx}`,
    word,
    subtext: subtexts[idx] || '',
  })),
  distractor: distractorWords.map((word, idx) => ({
    id: `d-${idx}`,
    word,
    subtext: subtexts[targetWords.length + idx] || '',
  })),
});

export const WORD_RECALL_POOLS: Record<Language, WordRecallPool> = {
  en: buildPool(
    ['Tea', 'Brahmaputra', 'Flute', 'Garden', 'Smile'],
    ['River', 'Pitha', 'Sunlight', 'Courtyard', 'Majuli', 'Music', 'Morning'],
    [
      'A warm cup shared at home', 'The great river of Assam', 'A gentle bamboo instrument',
      'A place where flowers grow', 'A warm, happy expression',
      'Flowing water nearby', 'A sweet rice cake', 'Light from the sun',
      'The open area outside a home', 'An island on the river', 'A pleasant tune', 'The start of the day',
    ]
  ),
  as: buildPool(
    ['চাহ', 'ব্ৰহ্মপুত্ৰ', 'পেঁপা', 'ফুলনি', 'হাঁহি'],
    ['নদী', 'পিঠা', 'ৰোদ', 'চোতাল', 'মাজুলী', 'গীত', 'পুৱা'],
    [
      'ঘৰত একেলগে খোৱা পানীয়', 'অসমৰ মহান নদী', 'বাঁহৰ কোমল বাদ্যযন্ত্ৰ',
      'ফুল ফুলা ঠাই', 'সুখী মুখৰ ভাব',
      'ওচৰৰ প্ৰবাহিত পানী', 'মিঠা চাউলৰ পিঠা', 'সূৰ্যৰ পোহৰ',
      'ঘৰৰ বাহিৰৰ খোলা ঠাই', 'নদীৰ দ্বীপ', 'এটা মধুৰ সুৰ', 'দিনৰ আৰম্ভণি',
    ]
  ),
  hi: buildPool(
    ['चाय', 'ब्रह्मपुत्र', 'बांसुरी', 'बगीचा', 'मुस्कान'],
    ['नदी', 'पीठा', 'धूप', 'आँगन', 'माजुली', 'गीत', 'सुबह'],
    [
      'घर पर साथ पी जाने वाली गर्म पेय', 'असम की महान नदी', 'बांस से बना कोमल वाद्ययंत्र',
      'फूल खिलने की जगह', 'खुश चेहरे का भाव',
      'पास बहता पानी', 'मीठा चावल का पकवान', 'सूरज की रोशनी',
      'घर के बाहर खुला स्थान', 'नदी का द्वीप', 'एक मधुर धुन', 'दिन की शुरुआत',
    ]
  ),
};
