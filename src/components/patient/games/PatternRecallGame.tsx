import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Volume2, Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { GameSession, Language } from '../../../types';
import { speakText } from '../../../utils/speech';
import { TRANSLATIONS } from '../../../utils/translations';

interface PatternRecallGameProps {
  onSessionComplete: (session: GameSession) => void;
  offlineMode: boolean;
  language: Language;
}

interface Tile {
  id: number;
  names: Record<Language, string>;
  colorClass: string;
  activeClass: string;
  lightHex: string;
}

const TILES: Tile[] = [
  {
    id: 0,
    names: { en: 'Tea Leaf Green', as: 'সেউজীয়া (Green)', hi: 'पत्ती हरा (Green)' },
    colorClass: 'bg-emerald-600 hover:bg-emerald-500',
    activeClass: 'bg-emerald-300 ring-8 ring-emerald-200 scale-105',
    lightHex: '#059669',
  },
  {
    id: 1,
    names: { en: 'Saffron Amber', as: 'হালধীয়া (Amber)', hi: 'केसरिया (Amber)' },
    colorClass: 'bg-amber-500 hover:bg-amber-400',
    activeClass: 'bg-amber-200 ring-8 ring-amber-100 scale-105',
    lightHex: '#d97706',
  },
  {
    id: 2,
    names: { en: 'River Sky Blue', as: 'আকাশী নীলা (Blue)', hi: 'आसमानी नीला (Blue)' },
    colorClass: 'bg-sky-600 hover:bg-sky-500',
    activeClass: 'bg-sky-200 ring-8 ring-sky-100 scale-105',
    lightHex: '#0284c7',
  },
  {
    id: 3,
    names: { en: 'Lotus Rose', as: 'গোলাপী (Rose)', hi: 'गुलाबी (Rose)' },
    colorClass: 'bg-rose-500 hover:bg-rose-400',
    activeClass: 'bg-rose-200 ring-8 ring-rose-100 scale-105',
    lightHex: '#e11d48',
  },
];

export const PatternRecallGame: React.FC<PatternRecallGameProps> = ({
  onSessionComplete,
  offlineMode,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [sequenceLength, setSequenceLength] = useState<number>(3);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userStep, setUserStep] = useState<number>(0);
  const [activeTile, setActiveTile] = useState<number | null>(null);
  const [gameState, setGameState] = useState<'intro' | 'showing' | 'playing' | 'roundSuccess' | 'roundFail' | 'completed'>('intro');
  const [roundsCompleted, setRoundsCompleted] = useState<number>(0);
  const [totalErrors, setTotalErrors] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [latestAiFeedback, setLatestAiFeedback] = useState<{ score?: number; trend?: string; message?: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const generateSequence = (len: number) => {
    const seq: number[] = [];
    for (let i = 0; i < len; i++) {
      seq.push(Math.floor(Math.random() * 4));
    }
    return seq;
  };

  const startRound = (len = sequenceLength) => {
    const newSeq = generateSequence(len);
    setSequence(newSeq);
    setUserStep(0);
    setGameState('showing');

    let step = 0;
    const interval = setInterval(() => {
      if (step < newSeq.length) {
        const tileId = newSeq[step];
        setActiveTile(tileId);

        setTimeout(() => {
          setActiveTile(null);
        }, 650);

        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setGameState('playing');
          setStartTime(Date.now());
          const prompt =
            language === 'as'
              ? 'এতিয়া আপোনাৰ পাল! ক্ৰমত স্পৰ্শ কৰক।'
              : language === 'hi'
              ? 'अब आपकी बारी! क्रम से स्पर्श करें।'
              : 'Your turn. Repeat the sequence.';
          speakText(prompt, language);
        }, 400);
      }
    }, 1100);

    timerRef.current = interval;
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleTileClick = (tileId: number) => {
    if (gameState !== 'playing') return;

    setActiveTile(tileId);
    setTimeout(() => setActiveTile(null), 250);

    const expected = sequence[userStep];
    if (tileId === expected) {
      if (userStep + 1 === sequence.length) {
        setRoundsCompleted((prev) => prev + 1);
        const newLen = Math.min(6, sequenceLength + 1);
        setSequenceLength(newLen);
        setGameState('roundSuccess');
        const successPrompt =
          language === 'as'
            ? 'খুবেই ভাল! সকলোবোৰ সঠিক হ’ল।'
            : language === 'hi'
            ? 'बहुत सुंदर! सभी रंग सही क्रम में पहचाने।'
            : 'Well done! That was completely correct.';
        speakText(successPrompt, language);
      } else {
        setUserStep((prev) => prev + 1);
      }
    } else {
      setTotalErrors((prev) => prev + 1);
      const newLen = Math.max(2, sequenceLength - 1);
      setSequenceLength(newLen);
      setGameState('roundFail');
      const failPrompt =
        language === 'as'
          ? 'কোনো চিন্তা নকৰিব। আমি অলপ সহজ কৰি দিছোঁ।'
          : language === 'hi'
          ? 'कोई बात नहीं, अभ्यास से सब सरल हो जाता है।'
          : 'Gentle effort. Let us try a softer pattern.';
      speakText(failPrompt, language);
    }
  };

  const finishSession = async () => {
    setIsSubmitting(true);
    const accuracy = Math.round((roundsCompleted / Math.max(1, roundsCompleted + totalErrors)) * 100);
    const responseTimeMs = Math.max(2000, Date.now() - startTime);

    if (offlineMode) {
      const fallbackSession: GameSession = {
        id: `sess-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        gameType: 'pattern',
        gameTitle: t.gamePattern,
        accuracy,
        responseTimeMs,
        errors: totalErrors,
        level: sequenceLength,
        score: Math.min(95, Math.max(30, accuracy - totalErrors * 5)),
        trend: accuracy >= 70 ? 'stable' : 'declining',
        supportiveMessage:
          language === 'as'
            ? 'অফলাইনত সংৰক্ষিত। আপোনাৰ মনোযোগ আৰু শান্ত প্ৰচেষ্টা বহুত শলাগিবলগীয়া!'
            : language === 'hi'
            ? 'ऑफ़लाइन सहेजा गया। आपका ध्यान और शांत प्रयास अत्यंत सराहनीय है!'
            : 'Saved offline. Your focus and gentle repetitions are supporting healthy brain plasticity!',
        synced: false,
      };

      setLatestAiFeedback({
        score: fallbackSession.score,
        trend: fallbackSession.trend,
        message: fallbackSession.supportiveMessage,
      });
      setIsSubmitting(false);
      setGameState('completed');
      onSessionComplete(fallbackSession);
      return;
    }

    try {
      const res = await fetch('/api/gemini/cognitive-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameType: 'Pattern Recall (Visual Working Memory)',
          accuracy,
          responseTimeMs,
          errors: totalErrors,
          level: sequenceLength,
          language,
        }),
      });

      const data = await res.json();
      const session: GameSession = {
        id: `sess-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        gameType: 'pattern',
        gameTitle: t.gamePattern,
        accuracy,
        responseTimeMs,
        errors: totalErrors,
        level: sequenceLength,
        score: data.score || 82,
        trend: data.trend || 'stable',
        supportiveMessage:
          data.supportiveMessage ||
          (language === 'as'
            ? 'আজিৰ অভ্যাস অতি সুন্দৰ হ’ল!'
            : language === 'hi'
            ? 'आज का अभ्यास बहुत अच्छा रहा!'
            : 'Great effort today!'),
        synced: true,
      };

      setLatestAiFeedback({
        score: data.score,
        trend: data.trend,
        message: data.supportiveMessage,
      });
      setIsSubmitting(false);
      setGameState('completed');
      onSessionComplete(session);
      speakText(data.supportiveMessage, language);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setGameState('completed');
    }
  };

  return (
    <div id="pattern-recall-game" className="bg-white rounded-2xl p-6 border border-[#E5E1D8] shadow-xs">
      {/* Game Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E1D8]">
        <div>
          <span className="text-xs font-semibold text-[#5C6E53] uppercase tracking-wide bg-[#F0F3EE] px-2.5 py-1 rounded-md border border-[#D5DFD0]">
            {language === 'as' ? 'দৃষ্টি স্মৃতি আৰু মনোযোগ' : language === 'hi' ? 'दृष्टि स्मृति और एकाग्रता' : 'Visual Memory & Working Attention'}
          </span>
          <h3 className="text-2xl font-bold text-[#2D2E2E] mt-2">
            {t.gamePattern}
          </h3>
          <p className="text-base text-[#73706A] mt-0.5">
            {language === 'as'
              ? 'ৰঙীন টাইলবোৰ উজ্জ্বল হোৱা লক্ষ্য কৰক, তাৰ পিছত একে ক্ৰমত স্পৰ্শ কৰক।'
              : language === 'hi'
              ? 'रंगीन टाइल्स को क्रम से जलते देखें, फिर उसी क्रम में स्पर्श करें।'
              : 'Watch the colored tiles light up in order, then tap them in the same sequence.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#FAF9F6] px-3.5 py-1.5 rounded-xl border border-[#E5E1D8] text-center">
            <span className="text-xs font-semibold text-[#73706A] block">
              {language === 'as' ? 'স্তৰ' : language === 'hi' ? 'स्तर' : 'Difficulty'}
            </span>
            <span className="text-lg font-bold text-[#2D2E2E]">
              {sequenceLength} {language === 'as' ? 'টাইল' : language === 'hi' ? 'टाइल्स' : 'Tiles'}
            </span>
          </div>
          <div className="bg-[#F0F3EE] px-3.5 py-1.5 rounded-xl border border-[#D5DFD0] text-center">
            <span className="text-xs font-semibold text-[#5C6E53] block">
              {language === 'as' ? 'সমাধান' : language === 'hi' ? 'सफल' : 'Rounds Solved'}
            </span>
            <span className="text-lg font-bold text-[#5C6E53]">
              {roundsCompleted}
            </span>
          </div>
        </div>
      </div>

      {/* Main Game Screen */}
      {gameState === 'intro' && (
        <div className="text-center py-8 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#F0F3EE] text-[#5C6E53] mx-auto flex items-center justify-center mb-4 ring-8 ring-[#F0F3EE]">
            <Play className="w-8 h-8 ml-1" />
          </div>
          <h4 className="text-xl font-bold text-[#2D2E2E] mb-2">
            {language === 'as' ? 'ৰঙীন স্মৃতি অনুশীলনৰ বাবে সাজু?' : language === 'hi' ? 'रंग स्मृति अभ्यास के लिए तैयार हैं?' : 'Ready for a Gentle Pattern Exercise?'}
          </h4>
          <p className="text-[#73706A] text-base sm:text-lg mb-6 leading-relaxed">
            {language === 'as'
              ? 'ৰঙীন টাইলবোৰ এটা এটাকৈ জ্বলিব। শান্তভাৱে মন কৰক আৰু একেদৰে স্পৰ্শ কৰক।'
              : language === 'hi'
              ? 'रंगीन टाइलें एक-एक करके जलेंगी। शांत मन से देखें और उसी क्रम में दबाएं।'
              : 'The colored tiles will light up one by one. Take your time to watch calmly, then tap them back. The game gently adapts to your pace.'}
          </p>
          <button
            id="start-pattern-btn"
            type="button"
            onClick={() => startRound(sequenceLength)}
            className="px-8 py-3.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-lg rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 mx-auto min-h-[56px] min-w-[200px]"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>{language === 'as' ? 'আৰম্ভ কৰক' : language === 'hi' ? 'प्रारंभ करें' : 'Begin Pattern'}</span>
          </button>
        </div>
      )}

      {(gameState === 'showing' || gameState === 'playing') && (
        <div className="max-w-md mx-auto py-4">
          {/* Status Instructions */}
          <div className="text-center mb-6">
            {gameState === 'showing' ? (
              <div className="inline-flex items-center gap-2 bg-[#FDF6ED] text-[#8C5E28] border border-[#E8D4BE] px-4 py-2 rounded-xl text-base sm:text-lg font-semibold animate-pulse">
                <Sparkles className="w-5 h-5 text-[#8C5E28]" />
                <span>{language === 'as' ? 'মনোযোগেৰে চাওক: ক্ৰমটো জ্বলিব ধৰিছে...' : language === 'hi' ? 'ध्यान से देखें: क्रम प्रकाशित हो रहा है...' : 'Watch carefully: Pattern is lighting up...'}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0] px-4 py-2 rounded-xl text-base sm:text-lg font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#7C9070]" />
                <span>{language === 'as' ? `আপোনাৰ পাল! ${sequence.length} টাৰ ভিতৰত ${userStep + 1} নম্বৰ স্পৰ্শ কৰক` : language === 'hi' ? `आपकी बारी! ${sequence.length} में से ${userStep + 1} वां स्पर्श करें` : `Your turn! Tap tile ${userStep + 1} of ${sequence.length}`}</span>
              </div>
            )}
          </div>

          {/* 4 Colored Tiles Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 my-4">
            {TILES.map((tile) => {
              const isActive = activeTile === tile.id;
              return (
                <button
                  key={tile.id}
                  id={`tile-btn-${tile.id}`}
                  type="button"
                  disabled={gameState === 'showing'}
                  onClick={() => handleTileClick(tile.id)}
                  aria-label={tile.names[language]}
                  className={`h-36 sm:h-44 rounded-2xl transition-all duration-200 flex flex-col items-center justify-end p-4 text-white font-bold text-lg shadow-sm border-2 border-white/20 select-none ${
                    tile.colorClass
                  } ${isActive ? tile.activeClass : 'active:scale-95'}`}
                >
                  <span className="bg-black/30 backdrop-blur-xs px-3 py-1 rounded-lg text-sm sm:text-base font-semibold">
                    {tile.names[language]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Controls below grid */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#E5E1D8]">
            <button
              type="button"
              onClick={() => startRound(sequenceLength)}
              className="text-[#73706A] hover:text-[#2D2E2E] font-semibold text-sm flex items-center gap-1.5 p-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'as' ? 'পুনৰ দেখুৱাওক' : language === 'hi' ? 'पुनः दिखाएं' : 'Show Sequence Again'}</span>
            </button>

            <button
              type="button"
              onClick={finishSession}
              disabled={isSubmitting}
              className="px-4 py-2 bg-[#FAF9F6] hover:bg-[#F5F3EF] border border-[#E5E1D8] text-[#2D2E2E] font-semibold text-sm rounded-xl transition-colors"
            >
              {isSubmitting ? (language === 'as' ? 'মূল্যাঙ্কন...' : language === 'hi' ? 'मूल्यांकन...' : 'Evaluating...') : (language === 'as' ? 'সম্পূৰ্ণ আৰু স্কোৰ পৰীক্ষা' : language === 'hi' ? 'समाप्त व स्कोर जांचें' : 'Finish & Check Score')}
            </button>
          </div>
        </div>
      )}

      {/* Round Success State */}
      {gameState === 'roundSuccess' && (
        <div className="text-center py-8 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#F0F3EE] text-[#5C6E53] mx-auto flex items-center justify-center mb-4 ring-8 ring-[#F0F3EE]">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h4 className="text-2xl font-bold text-[#2D2E2E] mb-2">
            {language === 'as' ? 'শুদ্ধ! অতি সুন্দৰ!' : language === 'hi' ? 'सही! बहुत सुंदर!' : 'Correct! Very Well Done!'}
          </h4>
          <p className="text-[#73706A] text-base sm:text-lg mb-6">
            {language === 'as'
              ? `আপুনি সকলো ${sequence.length} টা টাইল মনত ৰাখিলে। এতিয়া আহক ${sequenceLength} টাৰ চেষ্টা কৰোঁ!`
              : language === 'hi'
              ? `आपने सभी ${sequence.length} टाइल्स सही याद रखे। अब ${sequenceLength} टाइल्स का अभ्यास करते हैं!`
              : `You remembered all ${sequence.length} tiles accurately. Next, let us try an adaptive ${sequenceLength}-tile pattern!`}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => startRound(sequenceLength)}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-base sm:text-lg rounded-xl shadow-xs flex items-center justify-center gap-2 min-h-[52px]"
            >
              <span>{language === 'as' ? `পৰৱৰ্তী ক্ৰম (${sequenceLength} টাইল)` : language === 'hi' ? `अगला क्रम (${sequenceLength} टाइल्स)` : `Next Pattern (${sequenceLength} Tiles)`}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={finishSession}
              className="w-full sm:w-auto px-5 py-3.5 bg-[#FAF9F6] hover:bg-[#F5F3EF] text-[#2D2E2E] border border-[#E5E1D8] font-semibold text-base rounded-xl"
            >
              {language === 'as' ? 'অনুশীলন সমাপ্ত' : language === 'hi' ? 'अभ्यास पूरा करें' : 'Complete Session'}
            </button>
          </div>
        </div>
      )}

      {/* Round Fail State */}
      {gameState === 'roundFail' && (
        <div className="text-center py-8 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#FDF6ED] text-[#8C5E28] mx-auto flex items-center justify-center mb-4 ring-8 ring-[#FDF6ED]">
            <AlertCircle className="w-9 h-9" />
          </div>
          <h4 className="text-2xl font-bold text-[#2D2E2E] mb-2">
            {language === 'as' ? 'একদম ওচৰ পাইছিল!' : language === 'hi' ? 'लगभग सही था!' : 'Almost had it!'}
          </h4>
          <p className="text-[#73706A] text-base sm:text-lg mb-6">
            {language === 'as'
              ? `ধীৰে ধীৰে অভ্যাস কৰিলে স্মৃতি সজীৱ হয়। আমি আপোনাৰ বাবে স্তৰটো ${sequenceLength} টাইললৈ সহজ কৰিছোঁ।`
              : language === 'hi'
              ? `धीरे-धीरे अभ्यास करने से स्मृति सुदृढ़ होती है। हमने आपके लिए इसे सरल करके ${sequenceLength} टाइल्स का किया है।`
              : `Memory practice works best with gentle steps. We adjusted the difficulty to a gentler ${sequenceLength}-tile pattern for you.`}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => startRound(sequenceLength)}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-base sm:text-lg rounded-xl shadow-xs flex items-center justify-center gap-2 min-h-[52px]"
            >
              <span>{language === 'as' ? `সহজ স্তৰ চেষ্টা কৰক (${sequenceLength} টাইল)` : language === 'hi' ? `सरल स्तर प्रयास करें (${sequenceLength} टाइल्स)` : `Try Gentle Round (${sequenceLength} Tiles)`}</span>
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={finishSession}
              className="w-full sm:w-auto px-5 py-3.5 bg-[#FAF9F6] hover:bg-[#F5F3EF] text-[#2D2E2E] border border-[#E5E1D8] font-semibold text-base rounded-xl"
            >
              {language === 'as' ? 'সমাপ্ত কৰক' : language === 'hi' ? 'समाप्त करें' : 'Finish Session'}
            </button>
          </div>
        </div>
      )}

      {/* Final Session Results (With Gemini Score) */}
      {gameState === 'completed' && latestAiFeedback && (
        <div className="max-w-lg mx-auto py-6">
          <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#E5E1D8] text-center mb-6">
            <div className="inline-flex items-center gap-1.5 bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0] text-xs uppercase font-bold px-3 py-1 rounded-md mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#7C9070]" />
              <span>{language === 'as' ? 'জেমিণি বৌদ্ধিক মূল্যাঙ্কন' : language === 'hi' ? 'जेमिनी संज्ञानात्मक मूल्यांकन' : 'Gemini Cognitive Assessment'}</span>
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
                  onClick={() => speakText(latestAiFeedback.message || '', language)}
                  title="Listen to message"
                />
                <p className="text-[#2D2E2E] text-base sm:text-lg font-normal leading-relaxed">
                  "{latestAiFeedback.message}"
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setGameState('intro');
                setRoundsCompleted(0);
                setTotalErrors(0);
              }}
              className="px-6 py-3 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-base rounded-xl shadow-xs"
            >
              {language === 'as' ? 'পুনৰ খেলক' : language === 'hi' ? 'पुनः खेलें' : 'Play Again'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
