import { choose, sessionTime } from '../../../utils/activity';
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
  const [gameRun, setGameRun] = useState(0);
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
          <span>1. {t.patternRecallTitle}</span>
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
          <span>2. {t.wordRecallTitle}</span>
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
          <span>3. {t.pictureMatchingTitle}</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm"><p>{choose(language, 'Difficulty uses recent recorded performance. Start again after a session to apply the next level.', 'कठिनाई हाल के प्रदर्शन पर आधारित है। अगला स्तर लागू करने के लिए सत्र के बाद फिर शुरू करें।', 'কঠিনতা শেহতীয়া প্ৰদৰ্শনৰ ওপৰত নিৰ্ভৰ কৰে। পৰৱৰ্তী স্তৰৰ বাবে অধিবেশনৰ পিছত পুনৰ আৰম্ভ কৰক।')}</p><button type="button" onClick={() => setGameRun(run => run + 1)} className="rounded-xl border px-3 py-2">{choose(language,'Start a fresh game','नया खेल शुरू करें','নতুন খেল আৰম্ভ কৰক')}</button></div>
      {/* Active Game Display */}
      <div>
        {activeGame === 'pattern' && (
          <PatternRecallGame
            key={gameRun}
            sessions={sessions}
            onSessionComplete={onSessionComplete}
            offlineMode={offlineMode}
            language={language}
          />
        )}
        {activeGame === 'word' && (
          <WordRecallGame
            key={gameRun}
            sessions={sessions}
            onSessionComplete={onSessionComplete}
            offlineMode={offlineMode}
            language={language}
          />
        )}
        {activeGame === 'matching' && (
          <PictureMatchingGame
            key={gameRun}
            sessions={sessions}
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
              <span>{choose(language,'Recent activities','हाल की गतिविधियाँ','শেহতীয়া কাৰ্যকলাপ')}</span>
            </h4>
            <span className="text-xs text-[#73706A]">
              {language === 'as' ? 'এই ডিভাইচত জোখা নম্বৰ' : language === 'hi' ? 'इस डिवाइस पर मापा गया स्कोर' : 'Scores measured on this device'}
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
                  <span>{sessionTime(sess.timestamp, language)}</span>
                  <span className="flex items-center gap-1 text-[#5C6E53] font-medium">
                    <CheckCircle2 className="w-3 h-3 text-[#7C9070]" />
                    {sess.synced ? (language === 'as' ? 'AI মতামত পোৱা' : language === 'hi' ? 'AI प्रतिक्रिया मिली' : 'AI feedback received') : (language === 'as' ? 'স্থানীয়ভাৱে সংৰক্ষিত' : language === 'hi' ? 'स्थानीय रूप से सहेजा' : 'Saved locally')}
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
