import React, { useState } from 'react';
import { Play, RotateCcw, Sparkles, Volume2, Coffee, Flower2, Home, Sun, Heart, Bird } from 'lucide-react';
import { GameSession, Language } from '../../../types';
import { speakText } from '../../../utils/speech';
import { TRANSLATIONS } from '../../../utils/translations';

interface PictureMatchingGameProps {
  onSessionComplete: (session: GameSession) => void;
  offlineMode: boolean;
  language: Language;
}

interface CardItem {
  id: number;
  pairKey: string;
  name: string;
  iconName: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface IconConfig {
  key: string;
  names: Record<Language, string>;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const ICONS_CONFIG: IconConfig[] = [
  {
    key: 'tea',
    names: { en: 'Assam Tea', as: 'অসমৰ চাহ (Tea)', hi: 'असम चाय (Tea)' },
    icon: Coffee,
    color: 'text-amber-700 bg-amber-50',
  },
  {
    key: 'flower',
    names: { en: 'Orchid Flower', as: 'কপৌ ফুল (Orchid)', hi: 'ऑर्किड फूल (Orchid)' },
    icon: Flower2,
    color: 'text-rose-600 bg-rose-50',
  },
  {
    key: 'home',
    names: { en: 'Courtyard Home', as: 'চোতালৰ ঘৰ (Home)', hi: 'आंगन घर (Home)' },
    icon: Home,
    color: 'text-emerald-700 bg-emerald-50',
  },
  {
    key: 'sun',
    names: { en: 'Morning Sun', as: 'ৰাতিপুৱাৰ সূৰ্য্য (Sun)', hi: 'सुबह का सूरज (Sun)' },
    icon: Sun,
    color: 'text-amber-600 bg-amber-50',
  },
  {
    key: 'heart',
    names: { en: 'Loving Family', as: 'মৰমৰ পৰিয়াল (Family)', hi: 'प्यारा परिवार (Family)' },
    icon: Heart,
    color: 'text-red-600 bg-red-50',
  },
  {
    key: 'bird',
    names: { en: 'River Heron', as: 'বগলী (Heron)', hi: 'बगुला पक्षी (Heron)' },
    icon: Bird,
    color: 'text-sky-700 bg-sky-50',
  },
];

export const PictureMatchingGame: React.FC<PictureMatchingGameProps> = ({
  onSessionComplete,
  offlineMode,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedCardIds, setFlippedCardIds] = useState<number[]>([]);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'completed'>('intro');
  const [moves, setMoves] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [latestAiFeedback, setLatestAiFeedback] = useState<{ score: number; trend: string; message: string } | null>(null);

  const initGame = () => {
    const deck: CardItem[] = [];
    let idCounter = 0;

    ICONS_CONFIG.forEach((cfg) => {
      for (let i = 0; i < 2; i++) {
        deck.push({
          id: idCounter++,
          pairKey: cfg.key,
          name: cfg.names[language],
          iconName: cfg.key,
          isFlipped: false,
          isMatched: false,
        });
      }
    });

    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCardIds([]);
    setMoves(0);
    setErrors(0);
    setStartTime(Date.now());
    setGameState('playing');
    const startPrompt =
      language === 'as'
        ? 'ছবি মিলাওক খেল আৰম্ভ হ’ল। দুখন দুখন কাৰ্ড স্পৰ্শ কৰক।'
        : language === 'hi'
        ? 'चित्र मिलान खेल शुरू हुआ। दो-दो कार्ड्स स्पर्श करके मिलान करें।'
        : 'Matching game started. Tap two cards at a time to find pairs.';
    speakText(startPrompt, language);
  };

  const handleCardClick = (cardId: number) => {
    if (flippedCardIds.length === 2) return;
    const clickedCard = cards.find((c) => c.id === cardId);
    if (!clickedCard || clickedCard.isMatched || clickedCard.isFlipped) return;

    const newCards = cards.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c));
    setCards(newCards);

    const newFlipped = [...flippedCardIds, cardId];
    setFlippedCardIds(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const firstCard = newCards.find((c) => c.id === newFlipped[0])!;
      const secondCard = newCards.find((c) => c.id === newFlipped[1])!;

      if (firstCard.pairKey === secondCard.pairKey) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.pairKey === firstCard.pairKey ? { ...c, isMatched: true, isFlipped: true } : c
            )
          );
          setFlippedCardIds([]);

          const remainingUnmatched = newCards.filter(
            (c) => !c.isMatched && c.pairKey !== firstCard.pairKey
          );
          if (remainingUnmatched.length === 0) {
            finishSession(moves + 1, errors);
          }
        }, 500);
      } else {
        setErrors((e) => e + 1);
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c
            )
          );
          setFlippedCardIds([]);
        }, 900);
      }
    }
  };

  const finishSession = async (finalMoves: number, finalErrors: number) => {
    setIsSubmitting(true);
    const duration = Date.now() - startTime;
    const accuracy = Math.round(Math.max(35, Math.min(100, (6 / finalMoves) * 100)));
    const responseTimeMs = Math.round(duration / Math.max(1, finalMoves));

    if (offlineMode) {
      const fallbackSession: GameSession = {
        id: `sess-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        gameType: 'matching',
        gameTitle: t.gameMatch,
        accuracy,
        responseTimeMs,
        errors: finalErrors,
        level: 1,
        score: Math.min(95, Math.max(40, accuracy - finalErrors * 2)),
        trend: accuracy >= 80 ? 'improving' : 'stable',
        supportiveMessage:
          language === 'as'
            ? 'অফলাইনত সংৰক্ষিত। আপুনি সকলো ছবি অতি সুন্দৰভাৱে মিলালে!'
            : language === 'hi'
            ? 'ऑफ़लाइन सहेजा गया। आपने शांतिपूर्वक सभी चित्र जोड़े मिला लिए!'
            : 'Saved offline. You paired the peaceful icons with great patience!',
        synced: false,
      };

      setLatestAiFeedback({
        score: fallbackSession.score || 80,
        trend: fallbackSession.trend || 'stable',
        message: fallbackSession.supportiveMessage || '',
      });
      setIsSubmitting(false);
      setGameState('completed');
      onSessionComplete(fallbackSession);
      speakText(fallbackSession.supportiveMessage || '', language);
      return;
    }

    try {
      const res = await fetch('/api/gemini/cognitive-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameType: 'Picture Matching (Associative Memory)',
          accuracy,
          responseTimeMs,
          errors: finalErrors,
          level: 1,
          language,
        }),
      });

      const data = await res.json();
      const session: GameSession = {
        id: `sess-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        gameType: 'matching',
        gameTitle: t.gameMatch,
        accuracy,
        responseTimeMs,
        errors: finalErrors,
        level: 1,
        score: data.score || 85,
        trend: data.trend || 'stable',
        supportiveMessage:
          data.supportiveMessage ||
          (language === 'as'
            ? 'পৰিদৰ্শন আৰু স্মৃতি অতি চমৎকার হৈছে।'
            : language === 'hi'
            ? 'अवलोकन और स्मरण शक्ति बहुत सुंदर रही।'
            : 'Wonderful visual recall session!'),
        synced: true,
      };

      setLatestAiFeedback({
        score: session.score || 85,
        trend: session.trend || 'stable',
        message: session.supportiveMessage || '',
      });
      setIsSubmitting(false);
      setGameState('completed');
      onSessionComplete(session);
      speakText(session.supportiveMessage || '', language);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setGameState('completed');
    }
  };

  const getIconComponent = (key: string) => {
    const match = ICONS_CONFIG.find((c) => c.key === key);
    return match?.icon || Coffee;
  };

  const getIconColor = (key: string) => {
    const match = ICONS_CONFIG.find((c) => c.key === key);
    return match?.color || 'text-emerald-700 bg-emerald-50';
  };

  return (
    <div id="picture-matching-game" className="bg-white rounded-2xl p-6 border border-[#E5E1D8] shadow-xs">
      {/* Game Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E1D8]">
        <div>
          <span className="text-xs font-semibold text-[#5C6E53] uppercase tracking-wide bg-[#F0F3EE] px-2.5 py-1 rounded-md border border-[#D5DFD0]">
            {language === 'as' ? 'দৃষ্টি সম্পৰ্কীয় স্মৃতি' : language === 'hi' ? 'दृश्य साहचर्य स्मृति' : 'Visual Associative Memory'}
          </span>
          <h3 className="text-2xl font-bold text-[#2D2E2E] mt-2">
            {t.gameMatch}
          </h3>
          <p className="text-base text-[#73706A] mt-0.5">
            {language === 'as'
              ? 'একেলগে দুখন কাৰ্ড ওলোটাই চিনাকি ছবিৰ যোৰবোৰ বিচাৰি উলিয়াওক।'
              : language === 'hi'
              ? 'एक साथ दो कार्ड्स पलटकर परिचित चित्रों के जोड़े खोजिए।'
              : 'Find the matching pairs of gentle everyday pictures by turning two cards at a time.'}
          </p>
        </div>

        {gameState === 'playing' && (
          <div className="flex items-center gap-3">
            <div className="bg-[#FAF9F6] px-3.5 py-1.5 rounded-xl border border-[#E5E1D8] text-center">
              <span className="text-xs font-semibold text-[#73706A] block">
                {language === 'as' ? 'চেষ্টা' : language === 'hi' ? 'चालें' : 'Moves'}
              </span>
              <span className="text-lg font-bold text-[#2D2E2E]">{moves}</span>
            </div>
            <div className="bg-[#FAF9F6] px-3.5 py-1.5 rounded-xl border border-[#E5E1D8] text-center">
              <span className="text-xs font-semibold text-[#73706A] block">
                {language === 'as' ? 'অমিল' : language === 'hi' ? 'अमिल' : 'Mismatches'}
              </span>
              <span className="text-lg font-bold text-[#2D2E2E]">{errors}</span>
            </div>
          </div>
        )}
      </div>

      {/* Intro Phase */}
      {gameState === 'intro' && (
        <div className="text-center py-8 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#F0F3EE] text-[#5C6E53] mx-auto flex items-center justify-center mb-4 ring-8 ring-[#F0F3EE]">
            <Coffee className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-[#2D2E2E] mb-2">
            {language === 'as' ? 'শান্তিপূৰ্ণ ৬ টা ছবিৰ যোৰ মিলাওক' : language === 'hi' ? '६ सुंदर चित्रों के जोड़े मिलाएं' : 'Match the 6 Peaceful Pictures'}
          </h4>
          <p className="text-[#73706A] text-base sm:text-lg mb-6 leading-relaxed">
            {language === 'as'
              ? '১২ খন কাৰ্ড ওলোটাই ৰখা আছে। কাৰ্ড এখন স্পৰ্শ কৰি ছবি চাওক আৰু তাৰ যোৰ বিচাৰক। কোনো লৰালৰি নাই।'
              : language === 'hi'
              ? '१२ कार्ड्स उल्टे रखे हैं। एक कार्ड छूकर चित्र देखें और उसका जोड़ा खोजें। आराम से खेलें।'
              : 'There are 12 cards facing down. Tap a card to reveal its picture, then tap another to find its pair. Take all the time you need.'}
          </p>
          <button
            id="start-picture-matching-btn"
            type="button"
            onClick={initGame}
            className="px-8 py-3.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-lg rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 mx-auto min-h-[56px] min-w-[200px]"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>{language === 'as' ? 'ছবি মিলোৱা খেল আৰম্ভ কৰক' : language === 'hi' ? 'चित्र मिलान खेल शुरू करें' : 'Start Matching Game'}</span>
          </button>
        </div>
      )}

      {/* Playing Phase */}
      {gameState === 'playing' && (
        <div className="max-w-xl mx-auto py-2">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 my-4">
            {cards.map((card) => {
              const IconComp = getIconComponent(card.pairKey);
              const colorClasses = getIconColor(card.pairKey);

              return (
                <button
                  key={card.id}
                  id={`card-match-${card.id}`}
                  type="button"
                  onClick={() => handleCardClick(card.id)}
                  aria-label={card.isFlipped ? card.name : 'Hidden card'}
                  className={`h-28 sm:h-32 rounded-2xl p-2 transition-all duration-300 flex flex-col items-center justify-center border shadow-2xs ${
                    card.isMatched
                      ? 'bg-[#F0F3EE] border-[#7C9070] ring-1 ring-[#7C9070]'
                      : card.isFlipped
                      ? 'bg-white border-[#7C9070] ring-1 ring-[#7C9070] scale-102'
                      : 'bg-[#FAF9F6] hover:bg-[#F5F3EF] border-[#E5E1D8] active:scale-95'
                  }`}
                >
                  {card.isFlipped || card.isMatched ? (
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className={`p-2.5 rounded-xl ${colorClasses} mb-1.5`}>
                        <IconComp className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-semibold text-[#2D2E2E] line-clamp-1">
                        {card.name}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#73706A]">
                      <div className="w-8 h-8 rounded-full border border-dashed border-[#C5BFB5] flex items-center justify-center mb-1">
                        <span className="text-sm font-bold text-[#73706A]">?</span>
                      </div>
                      <span className="text-xs font-medium text-[#73706A]">
                        {language === 'as' ? 'স্পৰ্শ' : language === 'hi' ? 'स्पर्श' : 'Tap'}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#E5E1D8] mt-6">
            <button
              type="button"
              onClick={initGame}
              className="text-[#73706A] hover:text-[#2D2E2E] font-semibold text-sm flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'as' ? 'পুনৰ সজাওক' : language === 'hi' ? 'पुनः शुरू करें' : 'Shuffle & Restart'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Completed Phase */}
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
                setGameState('intro');
              }}
              className="px-6 py-3 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-base rounded-xl shadow-xs flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'as' ? 'পুনৰ খেলক' : language === 'hi' ? 'पुनः खेलें' : 'Play Picture Matching Again'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
