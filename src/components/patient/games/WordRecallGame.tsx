import { saveAndAssess } from '../../../utils/assessment';
import { choose, adaptiveLevel } from '../../../utils/activity';
import React, { useState, useEffect, useMemo } from 'react';
import { Play, Clock, Sparkles, Volume2, CheckCircle2, RotateCcw, ArrowRight, Brain } from 'lucide-react';
import { GameSession, Language } from '../../../types';
import { speakText } from '../../../utils/speech';
import { TRANSLATIONS, WORD_RECALL_POOLS } from '../../../utils/translations';

interface WordRecallGameProps {
  onSessionComplete: (session: GameSession) => void;
  offlineMode: boolean;
  sessions?: GameSession[];
  language: Language;
}

export const WordRecallGame: React.FC<WordRecallGameProps> = ({
  onSessionComplete,
  sessions = [],
  offlineMode,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [level, setLevel] = useState(() => adaptiveLevel(sessions, 'word'));
  const wordPool = WORD_RECALL_POOLS[language] || WORD_RECALL_POOLS.en;
  const wordCount = level + 2;
  const targetWords = wordPool.target.slice(0, wordCount);
  const distractorWords = wordPool.distractor;

  const [phase, setPhase] = useState<'intro' | 'memorize' | 'distraction' | 'recall' | 'completed'>('intro');
  const [memorizeTimer, setMemorizeTimer] = useState<number>(10);
  const [distractionTimer, setDistractionTimer] = useState<number>(30);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [, setDistractionCount] = useState<number>(0);
  const [recallStartTime, setRecallStartTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [latestAiFeedback, setLatestAiFeedback] = useState<{ score: number; trend: string; message: string } | null>(null);

  // Memorization countdown (10s)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (phase === 'memorize' && memorizeTimer > 0) {
      interval = setInterval(() => {
        setMemorizeTimer((prev) => prev - 1);
      }, 1000);
    } else if (phase === 'memorize' && memorizeTimer === 0) {
      setPhase('distraction');
      setDistractionTimer(30);
      const prompt =
        language === 'as'
          ? 'সময় শেষ। এতিয়া অলপ শান্ত হওক আৰু এটা সৰু অংক কৰক।'
          : language === 'hi'
          ? 'समय समाप्त। अब थोड़ा विश्राम लें और एक छोटा कार्य करें।'
          : 'Time is up. Now, take a gentle breath for a short distraction task.';
      speakText(prompt, language);
    }
    return () => clearInterval(interval);
  }, [phase, memorizeTimer, language]);

  // Distraction countdown (30s)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (phase === 'distraction' && distractionTimer > 0) {
      interval = setInterval(() => {
        setDistractionTimer((prev) => prev - 1);
      }, 1000);
    } else if (phase === 'distraction' && distractionTimer === 0) {
      setPhase('recall');
      setRecallStartTime(Date.now());
      const prompt =
        language === 'as'
          ? 'এতিয়া আগতে দেখা দেখুওৱা শব্দ মনত পেলাই বাছনি কৰক।'
          : language === 'hi'
          ? 'अब जो दिखाए गए शब्द आपने पहले देखे थे, उन्हें चुनिए।'
          : 'Now, please choose the words shown you remembered from earlier.';
      speakText(prompt, language);
    }
    return () => clearInterval(interval);
  }, [phase, distractionTimer, language]);

  const startMemorize = () => {
    setMemorizeTimer(10);
    setSelectedWords([]);
    setDistractionCount(0);
    setPhase('memorize');
    const prompt =
      language === 'as'
        ? 'এই দেখুওৱা শব্দ মনোযোগেৰে পঢ়ক। আপোনাৰ ১০ ছেকেণ্ড আছে।'
        : language === 'hi'
        ? 'इन दिखाए गए शब्दों को ध्यान से पढ़ें। आपके पास १० सेकंड हैं।'
        : 'Read these words shown carefully. You have ten seconds.';
    speakText(prompt, language);
  };

  const skipDistraction = () => {
    setPhase('recall');
    setRecallStartTime(Date.now());
    const prompt =
      language === 'as'
        ? 'মনত থকা শব্দকেইটা বাছক।'
        : language === 'hi'
        ? 'जो शब्द याद हैं उन्हें चुनिए।'
        : 'Please select the words shown you remember from earlier.';
    speakText(prompt, language);
  };

  const toggleWordSelection = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords((prev) => prev.filter((w) => w !== word));
    } else {
      if (selectedWords.length < wordCount) {
        setSelectedWords((prev) => [...prev, word]);
      }
    }
  };

  const submitRecall = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const correctCount = selectedWords.filter(w => targetWords.some(target => target.word === w)).length;
    const session = await saveAndAssess({ id: crypto.randomUUID(), timestamp: new Date().toISOString(), gameType: 'word', gameTitle: t.wordRecallTitle,
      accuracy: Math.round(correctCount / wordCount * 100), responseTimeMs: Math.round((Date.now() - recallStartTime) / wordCount), errors: wordCount - correctCount, level, synced: false }, offlineMode, language, onSessionComplete);
    setLatestAiFeedback({ score: session.score!, trend: choose(language,'Saved locally','स्थानीय रूप से सहेजा','স্থানীয়ভাৱে সংৰক্ষিত'), message: session.supportiveMessage! });
    setIsSubmitting(false);
    setPhase('completed');
  };

  const allWordChoices = useMemo(() => {
    const combined = [...targetWords, ...distractorWords];
    return combined.sort((a, b) => a.word.localeCompare(b.word));
  }, [targetWords, distractorWords]);

  return (
    <div id="word-recall-game" className="bg-white rounded-2xl border border-[#E5E1D8] p-6 sm:p-8 shadow-xs">
      {/* Intro Phase */}
      {phase === 'intro' && (
        <div className="max-w-xl mx-auto text-center py-6">
          <div className="w-16 h-16 rounded-2xl bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0] flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-[#7C9070]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2E2E] mb-2">
            {t.wordRecallTitle}
          </h3>
          <p className="text-[#575551] text-base sm:text-lg mb-6 leading-relaxed">
            {language === 'as'
              ? 'আপোনাক কেইটামান চিনাকি শব্দ ১০ ছেকেণ্ডৰ বাবে দেখুওৱা হ’ব। তাৰ পিছত এটা চুটি জিৰণি থাকিব, আৰু তাৰ পিছত আপুনি মনত থকা শব্দবোৰ বাছনি কৰিব লাগিব।'
              : language === 'hi'
              ? 'आपको १० सेकंड के लिए कुछ परिचित शब्द दिखाए जाएंगे। इसके बाद एक छोटा विश्राम कार्य होगा, फिर आपको वे शब्द याद करके चुनने होंगे।'
              : 'You will see a few familiar words for 10 seconds. After a short 30-second distraction task, you will choose which words you remember.'}
          </p>

          <button
            id="start-word-game-btn"
            type="button"
            onClick={startMemorize}
            className="px-8 py-3.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-lg rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 mx-auto min-h-[52px]"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>{language === 'as' ? 'শব্দ স্মৃতি আৰম্ভ কৰক' : language === 'hi' ? 'शब्द स्मृति शुरू करें' : 'Start 10s Memorize'}</span>
          </button>
        </div>
      )}

      {/* Memorization Phase (10s Countdown) */}
      {phase === 'memorize' && (
        <div className="max-w-xl mx-auto text-center py-4">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2 text-[#5C6E53] font-semibold">
              <Clock className="w-5 h-5 text-[#7C9070] animate-spin" />
              <span>{language === 'as' ? 'মনত ৰখাৰ সময়:' : language === 'hi' ? 'स्मरण का समय:' : 'Memorization Window:'} {memorizeTimer}s</span>
            </div>
            <div className="w-32 bg-[#EFECE6] h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#7C9070] h-full transition-all duration-1000"
                style={{ width: `${(memorizeTimer / 10) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {targetWords.map((item, idx) => (
              <div
                key={item.id}
                className="bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl p-4 text-left shadow-2xs hover:border-[#7C9070] transition-colors"
              >
                <span className="text-xs font-semibold text-[#5C6E53] bg-[#F0F3EE] border border-[#D5DFD0] px-2 py-0.5 rounded-md">
                  {language === 'as' ? `শব্দ #${idx + 1}` : language === 'hi' ? `शब्द #${idx + 1}` : `Word #${idx + 1}`}
                </span>
                <div className="text-2xl font-bold text-[#2D2E2E] mt-1.5">
                  {item.word}
                </div>
                <div className="text-sm text-[#73706A] font-normal mt-0.5">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#73706A] text-sm">
            {language === 'as'
              ? `${memorizeTimer} ছেকেণ্ডত বন্ধ হ’ব... শান্তভাৱে পঢ়ক।`
              : language === 'hi'
              ? `${memorizeTimer} सेकंड में बंद होगा... शांत चित्त से पढ़ें।`
              : `Closing in ${memorizeTimer} seconds... Take a steady breath.`}
          </p>
        </div>
      )}

      {/* 30-Second Distraction Task */}
      {phase === 'distraction' && (
        <div className="py-6 max-w-lg mx-auto text-center">
          <div className="bg-[#FAF9F6] border border-[#E5E1D8] rounded-2xl p-6 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6E53] bg-[#F0F3EE] border border-[#D5DFD0] px-3 py-1 rounded-md">
              {language === 'as' ? '৩০ ছেকেণ্ডৰ জিৰণি কাম' : language === 'hi' ? '३० सेकंड का सरल विश्राम कार्य' : '30-Second Gentle Distraction Task'}
            </span>
            <h4 className="text-2xl font-bold text-[#2D2E2E] mt-3 mb-2">
              {language === 'as' ? 'যোৰ সংখ্যাবোৰত স্পৰ্শ কৰক' : language === 'hi' ? 'सम संख्याओं पर स्पर्श करें' : 'Tap Even Numbers To Relax'}
            </h4>
            <p className="text-[#73706A] text-base mb-4">
              {language === 'as'
                ? '২, ৪, ৬, ৮, ১০ লৈ স্পৰ্শ কৰক। ই স্মৃতি স্থিৰ কৰাত সহায় কৰে।'
                : language === 'hi'
                ? 'क्रम से स्पर्श करें: २, ४, ६, ८, १०... इससे मस्तिष्क शांत होता है।'
                : 'Tap the buttons below in order: 2, 4, 6, 8, 10... This allows your brain to settle before recall.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 my-4">
              {[2, 4, 6, 8, 10].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setDistractionCount((prev) => prev + 1)}
                  className="w-14 h-14 rounded-xl bg-white border border-[#E5E1D8] text-[#2D2E2E] text-2xl font-bold hover:bg-[#7C9070] hover:text-white hover:border-[#7C9070] transition-all shadow-2xs active:scale-95 flex items-center justify-center"
                >
                  {num}
                </button>
              ))}
            </div>

            <div className="text-sm text-[#5C6E53] font-semibold mt-2">
              {language === 'as' ? `সময় বাকী: ${distractionTimer} ছেকেণ্ড` : language === 'hi' ? `समय शेष: ${distractionTimer} सेकंड` : `Distraction timer: ${distractionTimer} seconds left`}
            </div>
          </div>

          <button
            type="button"
            onClick={skipDistraction}
            className="px-6 py-2.5 bg-[#FAF9F6] hover:bg-[#F5F3EF] text-[#2D2E2E] font-semibold text-sm rounded-xl border border-[#E5E1D8] transition-colors"
          >
            {language === 'as' ? 'মই এতিয়াই মনত পেলাবলৈ সাজু (Skip)' : language === 'hi' ? 'मैं अभी याद करने को तैयार हूँ (Skip)' : 'I am Ready to Recall Now (Skip Timer)'}
          </button>
        </div>
      )}

      {/* Recall Phase */}
      {phase === 'recall' && (
        <div className="py-4 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-[#2D2E2E]">
              {language === 'as' ? 'আগতে কোন দেখুওৱা শব্দ দেখা পাইছিল?' : language === 'hi' ? 'पहले आपने कौन से दिखाए गए शब्द देखे थे?' : 'Which words shown did you see earlier?'}
            </h4>
            <p className="text-[#73706A] text-base sm:text-lg mt-1">
              {language === 'as'
                ? `দেখুওৱা শব্দ বাছক (${selectedWords.length}/${wordCount} নিৰ্বাচিত):`
                : language === 'hi'
                ? `दिखाए गए शब्दों का चयन करें (${selectedWords.length}/${wordCount} चुने गए):`
                : `Select the words you remember (${selectedWords.length}/${wordCount} selected):`}
            </p>
          </div>

          {/* Word options grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-6">
            {allWordChoices.map((item) => {
              const isSelected = selectedWords.includes(item.word);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleWordSelection(item.word)}
                  className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#F0F3EE] border-[#7C9070] ring-1 ring-[#7C9070] shadow-2xs'
                      : 'bg-[#FAF9F6] border-[#E5E1D8] hover:border-[#7C9070]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#2D2E2E]">
                      {item.word}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-[#7C9070] shrink-0" />
                    )}
                  </div>
                  <span className="text-xs text-[#73706A] mt-1">
                    {item.subtext}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#E5E1D8]">
            <span className="text-[#73706A] text-sm font-semibold">
              {language === 'as'
                ? `${wordCount} টাৰ ভিতৰত ${selectedWords.length} টা বাছনি কৰা হ’ল`
                : language === 'hi'
                ? `${wordCount} में से ${selectedWords.length} शब्द चुने गए`
                : `${selectedWords.length} of words shown chosen`}
            </span>

            <button
              type="button"
              disabled={selectedWords.length === 0 || isSubmitting}
              onClick={submitRecall}
              className="px-8 py-3.5 bg-[#7C9070] hover:bg-[#687A5E] disabled:bg-[#E5E1D8] disabled:text-[#73706A] text-white font-semibold text-base sm:text-lg rounded-xl shadow-xs transition-colors flex items-center gap-2 min-h-[52px]"
            >
              <span>{isSubmitting ? (language === 'as' ? 'কাৰ্যকলাপ সংৰক্ষণ চলিছে...' : language === 'hi' ? 'गतिविधि सहेज रहे हैं...' : 'Saving activity...') : (language === 'as' ? 'শব্দ পৰীক্ষা কৰক' : language === 'hi' ? 'शब्द जांचें' : 'Check My Words')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Completed Phase */}
      {phase === 'completed' && latestAiFeedback && (
        <div className="max-w-lg mx-auto py-6">
          <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#E5E1D8] text-center mb-6">
            <div className="inline-flex items-center gap-1.5 bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0] text-xs uppercase font-bold px-3 py-1 rounded-md mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#7C9070]" />
              <span>{language === 'as' ? 'নথিভুক্ত খেলৰ ফলাফল' : language === 'hi' ? 'दर्ज खेल परिणाम' : 'Recorded game result'}</span>
            </div>

            <div className="flex items-center justify-center gap-2 my-2">
              <span className="text-5xl font-bold text-[#2D2E2E]">
                {latestAiFeedback.score}
              </span>
              <span className="text-xl font-semibold text-[#7C9070]">/ 100</span>
            </div>

            <div className="inline-block px-3 py-1 bg-white rounded-lg text-sm font-semibold text-[#5C6E53] border border-[#D5DFD0] capitalize mb-4">
              {language === 'as' ? 'স্থিতি:' : language === 'hi' ? 'स्थिति:' : 'Status:'} {latestAiFeedback.trend}
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#E5E1D8] text-left shadow-2xs">
              <div className="flex items-start gap-2">
                <Volume2
                  className="w-5 h-5 text-[#7C9070] shrink-0 mt-0.5 cursor-pointer hover:scale-110"
                  onClick={() => speakText(latestAiFeedback.message, language)}
                  title="Listen to message"
                />
                <p className="text-[#2D2E2E] text-base sm:text-lg font-normal leading-relaxed">
                  "{latestAiFeedback.message}"
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                setLevel(adaptiveLevel(sessions, 'word'));
                setPhase('intro');
                setSelectedWords([]);
              }}
              className="px-6 py-3 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-base rounded-xl shadow-xs flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'as' ? 'পুনৰ চেষ্টা কৰক' : language === 'hi' ? 'पुनः प्रयास करें' : 'Try Again'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
