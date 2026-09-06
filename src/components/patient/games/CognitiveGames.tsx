import React, { useState } from 'react';
import { GameType, GameSession, Language } from '../../../types';
import { PatternRecallGame } from './PatternRecallGame';
import { WordRecallGame } from './WordRecallGame';
import { PictureMatchingGame } from './PictureMatchingGame';
import { LayoutGrid, Type, Image as ImageIcon, History, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../../../utils/translations';

interface CognitiveGamesProps {
  onSessionComplete: (session: GameSession) => void;
  sessions: GameSession[];
  offlineMode: boolean;
  language: Language;
}

export const CognitiveGames: React.FC<CognitiveGamesProps> = ({
  onSessionComplete,
  sessions,
  offlineMode,
  language,
}) => {
  const [activeGame, setActiveGame] = useState<GameType>('pattern');
  const t = TRANSLATIONS[language];

  return (
    <div id="cognitive-games-section" className="space-y-6">
      {/* Game Selector Tabs (Large, Easy to Tap) */}
      <div className="bg-white p-2 rounded-2xl border border-[#E5E1D8] shadow-xs flex flex-col sm:flex-row gap-2">
        <button
          id="tab-game-pattern"
          type="button"
          onClick={() => setActiveGame('pattern')}
          className={`flex-1 py-3.5 px-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all min-h-[52px] ${
            activeGame === 'pattern'
              ? 'bg-[#7C9070] text-white shadow-xs'
              : 'text-[#2D2E2E] hover:bg-[#FAF9F6]'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span>1. {t.gamePattern}</span>
        </button>

        <button
          id="tab-game-word"
          type="button"
          onClick={() => setActiveGame('word')}
          className={`flex-1 py-3.5 px-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all min-h-[52px] ${
            activeGame === 'word'
              ? 'bg-[#7C9070] text-white shadow-xs'
              : 'text-[#2D2E2E] hover:bg-[#FAF9F6]'
          }`}
        >
          <Type className="w-5 h-5" />
          <span>2. {t.gameWord}</span>
        </button>

        <button
          id="tab-game-matching"
          type="button"
          onClick={() => setActiveGame('matching')}
          className={`flex-1 py-3.5 px-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all min-h-[52px] ${
            activeGame === 'matching'
              ? 'bg-[#7C9070] text-white shadow-xs'
              : 'text-[#2D2E2E] hover:bg-[#FAF9F6]'
          }`}
        >
          <ImageIcon className="w-5 h-5" />
          <span>3. {t.gameMatch}</span>
        </button>
      </div>

      {/* Active Game Display */}
      <div>
        {activeGame === 'pattern' && (
          <PatternRecallGame
            onSessionComplete={onSessionComplete}
            offlineMode={offlineMode}
            language={language}
          />
        )}
        {activeGame === 'word' && (
          <WordRecallGame
            onSessionComplete={onSessionComplete}
            offlineMode={offlineMode}
            language={language}
          />
        )}
        {activeGame === 'matching' && (
          <PictureMatchingGame
            onSessionComplete={onSessionComplete}
            offlineMode={offlineMode}
            language={language}
          />
        )}
      </div>

      {/* Recent Sessions Mini-Strip */}
      {sessions.length > 0 && (
        <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-[#E5E1D8]">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#73706A] flex items-center gap-2">
              <History className="w-4 h-4 text-[#7C9070]" />
              <span>{t.recentExercises}</span>
            </h4>
            <span className="text-xs text-[#73706A]">
              {language === 'as' ? 'জেমিণি দ্বাৰা মূল্যাঙ্কিত' : language === 'hi' ? 'जेमिनी द्वारा मूल्यांकित' : 'Evaluated by Gemini Clinical Scorer'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sessions.slice(0, 3).map((sess) => (
              <div
                key={sess.id}
                className="bg-white p-3.5 rounded-xl border border-[#E5E1D8] shadow-2xs flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-[#2D2E2E]">{sess.gameTitle}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0]">
                    {sess.score ?? sess.accuracy}/100
                  </span>
                </div>
                <p className="text-xs text-[#73706A] italic line-clamp-2">
                  "{sess.supportiveMessage || 'Good steady effort.'}"
                </p>
                <div className="mt-2 text-[11px] text-[#73706A] flex items-center justify-between">
                  <span>{sess.timestamp}</span>
                  <span className="flex items-center gap-1 text-[#5C6E53] font-medium">
                    <CheckCircle2 className="w-3 h-3 text-[#7C9070]" />
                    {sess.synced ? (language === 'as' ? 'সংযুক্ত' : language === 'hi' ? 'सिंक हुआ' : 'Synced') : (language === 'as' ? 'অফলাইন সংৰক্ষিত' : language === 'hi' ? 'ऑफ़लाइन सहेजा' : 'Saved Offline')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
