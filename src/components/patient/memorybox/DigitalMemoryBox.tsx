import React, { useState } from 'react';
import { Sparkles, Volume2, Plus, X, Calendar, MapPin, MessageSquareHeart, Image as ImageIcon } from 'lucide-react';
import { MemoryItem, Language, PatientProfile } from '../../../types';
import { speakText } from '../../../utils/speech';
import { TRANSLATIONS } from '../../../utils/translations';

interface DigitalMemoryBoxProps {
  memories: MemoryItem[];
  onAddMemory: (memory: MemoryItem) => void;
  patientProfile?: PatientProfile;
  language: Language;
  largeText: boolean;
}

export const DigitalMemoryBox: React.FC<DigitalMemoryBoxProps> = ({
  memories,
  onAddMemory,
  patientProfile,
  language,
  largeText,
}) => {
  const t = TRANSLATIONS[language];
  const [activePromptMemoryId, setActivePromptMemoryId] = useState<string | null>(null);
  const [prompts, setPrompts] = useState<Record<string, string>>({});
  const [loadingPromptId, setLoadingPromptId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Memory Form
  const [title, setTitle] = useState('');
  const [era, setEra] = useState('Autumn 2018');
  const [location, setLocation] = useState(patientProfile?.location.split(',')[0] || 'Assam');
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleTellMeAboutThis = async (memory: MemoryItem) => {
    if (prompts[memory.id] || memory.aiPrompt) {
      const textToRead = prompts[memory.id] || memory.aiPrompt || '';
      setActivePromptMemoryId(memory.id);
      speakText(textToRead, language);
      return;
    }

    setLoadingPromptId(memory.id);
    setActivePromptMemoryId(memory.id);

    try {
      const res = await fetch('/api/gemini/reminiscence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: memory.title,
          caption: memory.caption,
          year: memory.dateOrEra,
          location: memory.location,
          language,
          patientName: patientProfile?.name,
        }),
      });

      const data = await res.json();
      const promptResult =
        data.prompt ||
        (language === 'as'
          ? 'কিমান সুন্দৰ স্মৃতি! সেই দিনাৰ আনন্দ আৰু হাঁহি আপোনাৰ মনত পৰে নে?'
          : language === 'hi'
          ? 'कितनी मधुर स्मृति है! क्या उस दिन की सुगंध और सुखद बातें आपको याद हैं?'
          : 'What a heartwarming memory. Do you remember the happy laughter and the gentle breeze on that day?');

      setPrompts((prev) => ({ ...prev, [memory.id]: promptResult }));
      setLoadingPromptId(null);
      speakText(promptResult, language);
    } catch (err) {
      console.error(err);
      setLoadingPromptId(null);
      const fallback =
        language === 'as'
          ? 'পৰিয়ালৰ সৈতে এটি আনন্দৰ মূহূৰ্ত। মনত পৰে নে সেই দিনা একেলগে চাহ খোৱাৰ কথা?'
          : language === 'hi'
          ? 'परिवार के साथ एक अनमोल पल। क्या उस दिन साथ में पी गई गर्म चाय याद है?'
          : 'A wonderful memory with family. Do you remember the warm cup of tea you shared together afterward?';
      setPrompts((prev) => ({ ...prev, [memory.id]: fallback }));
      speakText(fallback, language);
    }
  };

  const handleCreateMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !caption.trim()) return;

    const newMem: MemoryItem = {
      id: `mem-${Date.now()}`,
      title: title.trim(),
      dateOrEra: era.trim() || 'Precious days',
      location: location.trim() || (patientProfile?.location.split(',')[0] || 'Assam'),
      caption: caption.trim(),
      imageUrl:
        imageUrl.trim() ||
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString().split('T')[0],
    };

    onAddMemory(newMem);
    setShowAddModal(false);
    setTitle('');
    setCaption('');
    setImageUrl('');
    const confirmPrompt =
      language === 'as'
        ? `স্মৃতি সঁফুৰাত "${newMem.title}" সংৰক্ষণ কৰা হ’ল।`
        : language === 'hi'
        ? `स्मृति मंजूषा में "${newMem.title}" को सहेजा गया।`
        : `Saved "${newMem.title}" to your memory box.`;
    speakText(confirmPrompt, language);
  };

  return (
    <div id="digital-memory-box-section" className="space-y-6">
      {/* Section Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#E5E1D8] shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6E53] bg-[#F0F3EE] px-2.5 py-1 rounded-md border border-[#D5DFD0]">
            {language === 'as' ? 'জীৱনৰ স্মৃতি আৰু কাহিনী' : language === 'hi' ? 'जीवन संस्मरण और कथा मंजूषा' : 'Reminiscence & Life Story Therapy'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2E2E] mt-2">
            {t.tabMemoryBox}
          </h3>
          <p className="text-[#73706A] text-base mt-0.5">
            {t.memoriesSaved(memories.length)}
          </p>
        </div>

        <button
          id="btn-add-memory"
          type="button"
          onClick={() => setShowAddModal(true)}
          className="px-5 py-3.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-base rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all min-h-[50px]"
        >
          <Plus className="w-5 h-5" />
          <span>{language === 'as' ? 'নতুন স্মৃতি যোগ কৰক' : language === 'hi' ? 'स्मृति जोड़ें' : 'Add Family Photo'}</span>
        </button>
      </div>

      {/* Grid of Memory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map((mem) => {
          const prompt = prompts[mem.id] || mem.aiPrompt;
          const isLoadingThis = loadingPromptId === mem.id;
          const isExpanded = activePromptMemoryId === mem.id && prompt;

          return (
            <div
              key={mem.id}
              id={`memory-card-${mem.id}`}
              className="bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden shadow-2xs hover:border-[#7C9070] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo with fallback */}
                <div className="relative h-56 bg-[#FAF9F6] overflow-hidden">
                  <img
                    src={mem.imageUrl}
                    alt={mem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{mem.dateOrEra}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 text-xs text-[#5C6E53] font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#7C9070]" />
                    <span>{mem.location}</span>
                  </div>

                  <h4
                    className={`font-bold text-[#2D2E2E] mb-2 leading-snug ${
                      largeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {mem.title}
                  </h4>

                  <p className="text-sm text-[#575551] font-normal leading-relaxed">
                    {mem.caption}
                  </p>
                </div>
              </div>

              {/* Reminiscence Prompt Box */}
              <div className="p-5 pt-0">
                {isExpanded && (
                  <div className="mb-4 p-4 rounded-xl bg-[#F0F3EE] border border-[#D5DFD0] text-[#2D2E2E] text-sm leading-relaxed animate-in fade-in">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1 text-xs font-bold text-[#5C6E53] uppercase">
                        <Sparkles className="w-3.5 h-3.5 text-[#7C9070]" />
                        <span>{language === 'as' ? 'মেমৰি মেটৰ কথা' : language === 'hi' ? 'मेमरी मेट की यादें' : 'Memory Mate Prompt'}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => speakText(prompt || '', language)}
                        className="p-1 text-[#5C6E53] hover:text-[#2D2E2E]"
                        title="Listen again"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="italic font-normal">"{prompt}"</p>
                  </div>
                )}

                {/* Button to invoke Gemini Reminiscence */}
                <button
                  type="button"
                  onClick={() => handleTellMeAboutThis(mem)}
                  disabled={isLoadingThis}
                  className="w-full py-3 px-4 bg-[#FAF9F6] hover:bg-[#F0F3EE] text-[#2D2E2E] hover:text-[#2D2E2E] font-semibold text-sm rounded-xl border border-[#E5E1D8] transition-all flex items-center justify-center gap-2 min-h-[46px]"
                >
                  {isLoadingThis ? (
                    <>
                      <Sparkles className="w-4 h-4 text-[#7C9070] animate-spin" />
                      <span>{language === 'as' ? 'মনত পেলাই থকা হৈছে...' : language === 'hi' ? 'स्मृति संजोई जा रही है...' : 'Remembering gently...'}</span>
                    </>
                  ) : (
                    <>
                      <MessageSquareHeart className="w-4 h-4 text-[#7C9070]" />
                      <span>{language === 'as' ? 'এই বিষয়ে কওক' : language === 'hi' ? 'इसके बारे में बताएं' : 'Tell Me About This'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Memory Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-lg border border-[#E5E1D8]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-6 h-6 text-[#7C9070]" />
                <h4 className="text-xl font-bold text-[#2D2E2E]">
                  {language === 'as' ? 'পৰিয়ালৰ ফটো যোগ কৰক' : language === 'hi' ? 'पारिवारिक तस्वीर जोड़ें' : 'Add Family Photo'}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-1 text-[#73706A] hover:text-[#2D2E2E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateMemory} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'স্মৃতিৰ নাম *' : language === 'hi' ? 'संस्मरण शीर्षक *' : 'Memory Title *'}
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={language === 'as' ? 'যেনে: বিহু নৃত্য বা পুৰণি ঘৰৰ চোতাল' : language === 'hi' ? 'जैसे: असम बिहू उत्सव या पुराना आंगन' : 'e.g. Rongali Bihu courtyard gathering'}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'সময় / বছৰ' : language === 'hi' ? 'वर्ष / समय' : 'Era / Year'}
                  </label>
                  <input
                    type="text"
                    value={era}
                    onChange={(e) => setEra(e.target.value)}
                    placeholder="2018"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'স্থান' : language === 'hi' ? 'स्थान' : 'Location'}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Assam"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'মৰমৰ বিৱৰণ / কাহিনী *' : language === 'hi' ? 'मधुर प्रसंग / कथा *' : 'Loving Story / Caption *'}
                </label>
                <textarea
                  rows={3}
                  required
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder={language === 'as' ? 'সেই বিশেষ দিনটোৰ সুখদ কথা লিখক...' : language === 'hi' ? 'उस विशेष दिन की सुंदर बातें लिखें...' : 'Tell the gentle story of what happened on this special day...'}
                  className="w-full px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'ফটোৰ লিংক (বা খালি ৰাখক)' : language === 'hi' ? 'फ़ोटो लिंक (या खाली छोड़ें)' : 'Photo URL (or leave empty)'}
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#E5E1D8]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-[#73706A] hover:text-[#2D2E2E] text-sm font-semibold"
                >
                  {language === 'as' ? 'বাতিল' : language === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-sm rounded-xl shadow-xs"
                >
                  {language === 'as' ? 'সংৰক্ষণ কৰক' : language === 'hi' ? 'सहेजें' : 'Save to Memory Box'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
