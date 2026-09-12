import { choose } from '../../../utils/activity';
import { useVoiceInput } from '../../../hooks/useVoiceInput';
import React, { useState, useRef, useEffect } from 'react';
import { Send, Image as ImageIcon, Volume2, Mic, Sparkles, UserCheck, Plus, X, Heart, Shield } from 'lucide-react';
import { ChatMessage, KnownFace, Reminder, PatientProfile, Language } from '../../../types';
import { speakText } from '../../../utils/speech';
import { TRANSLATIONS } from '../../../utils/translations';

interface MemoryAssistantProps {
  patientProfile: PatientProfile;
  reminders: Reminder[];
  knownFaces: KnownFace[];
  onAddKnownFace: (face: KnownFace) => void;
  language: Language;
  largeText: boolean;
  offlineMode?: boolean;
}

export const MemoryAssistant: React.FC<MemoryAssistantProps> = ({
  patientProfile,
  reminders,
  knownFaces,
  onAddKnownFace,
  language,
  largeText,
  offlineMode = false,
}) => {
  const t = TRANSLATIONS[language];

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'msg-0',
      sender: 'assistant',
      text: t.defaultGreeting(patientProfile.name, patientProfile.location.split(',')[0]),
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const voice = useVoiceInput(language, setInputText, offlineMode || !navigator.onLine);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showAddFaceModal, setShowAddFaceModal] = useState(false);

  // New Face form state
  const [newFaceName, setNewFaceName] = useState('');
  const [newFaceRel, setNewFaceRel] = useState('');
  const [newFaceNotes, setNewFaceNotes] = useState('');
  const [newFacePhoto, setNewFacePhoto] = useState('');

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // When patient or language changes, refresh initial greeting
  useEffect(() => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'assistant',
        text: t.defaultGreeting(patientProfile.name, patientProfile.location.split(',')[0]),
        timestamp: 'Just now',
      },
    ]);
  }, [patientProfile.id, language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string, imageToSend?: string) => {
    const text = textToSend ?? inputText;
    const img = imageToSend ?? selectedImage;

    if (isTyping || (!text.trim() && !img)) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text || (language === 'as' ? 'এইখন ফটোত কোন হয়?' : language === 'hi' ? 'तस्वीर में यह कौन हैं?' : 'Who is this in the photo?'),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      imagePreview: img || undefined,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setSelectedImage(null);
    setIsTyping(true);

    try {
      if (offlineMode || !navigator.onLine) throw new Error('Offline');
      const res = await fetch('/api/gemini/chat', {
        signal: AbortSignal.timeout(15000),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          imageBase64: img,
          patientProfile,
          knownFaces,
          reminders,
          language,
          chatHistory: messages.slice(-6).map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok || data.source !== 'gemini' || typeof data.reply !== 'string') throw new Error('AI unavailable');
      const replyText = data.reply;

      setMessages((prev) => [
        ...prev,
        {
          id: `msg-reply-${Date.now()}`,
          sender: 'assistant',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      speakText(replyText, language);
    } catch (err) {
      console.error(err);
      const savedReminders = reminders.filter(r => !r.completed).map(r => `${r.time}: ${r.title}`).join('; ');
      const fallback = choose(language,
        `AI is unavailable. Saved reminders: ${savedReminders || 'No pending reminders are recorded.'} You can also open your labeled family photos and Memory Box.`,
        `AI उपलब्ध नहीं है। सहेजे गए अनुस्मारक: ${savedReminders || 'कोई लंबित अनुस्मारक दर्ज नहीं है।'} आप नाम वाली पारिवारिक तस्वीरें और स्मृति बॉक्स खोल सकते हैं।`,
        `AI উপলব্ধ নহয়। সংৰক্ষিত সোঁৱৰণি: ${savedReminders || 'বাকী সোঁৱৰণি নথিভুক্ত নাই।'} আপুনি নামযুক্ত পৰিয়ালৰ ছবি আৰু স্মৃতি বাকচ খুলিব পাৰে।`);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-err-${Date.now()}`,
          sender: 'assistant',
          text: fallback,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      speakText(fallback, language);
    } finally {
      setIsTyping(false);
    }
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setSelectedImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const selectSampleFace = (face: KnownFace) => {
    const text = choose(language, `Saved photo label: ${face.name}. Relationship: ${face.relationship}. ${face.notes}`, `सहेजी गई तस्वीर का नाम: ${face.name}। संबंध: ${face.relationship}। ${face.notes}`, `সংৰক্ষিত ছবিৰ নাম: ${face.name}। সম্পৰ্ক: ${face.relationship}। ${face.notes}`);
    setMessages(previous => [...previous, {id: crypto.randomUUID(), sender:'assistant', text, timestamp: new Date().toLocaleTimeString(), imagePreview: face.photoUrl}]);
    speakText(text, language);
  };

  const handleSaveNewFace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFaceName || !newFaceRel) return;

    const newFace: KnownFace = {
      id: `face-${Date.now()}`,
      name: newFaceName,
      relationship: newFaceRel,
      location: patientProfile.location.split(',')[0],
      notes: newFaceNotes || 'Beloved family member.',
      photoUrl: newFacePhoto || '/memory-mate.svg',
    };

    onAddKnownFace(newFace);
    setShowAddFaceModal(false);
    setNewFaceName('');
    setNewFaceRel('');
    setNewFaceNotes('');
    setNewFacePhoto('');

    const confirmMsg =
      language === 'as'
        ? `মই ${newFace.name} (${newFace.relationship})ক চিনাকি মুখ হিচাপে মনত ৰাখিলো!`
        : language === 'hi'
        ? `मैंने ${newFace.name} (${newFace.relationship}) को स्मृति में जोड़ लिया है!`
        : `I have saved ${newFace.name} (${newFace.relationship}) into your recognized family faces!`;
    setMessages((prev) => [
      ...prev,
      {
        id: `msg-saved-${Date.now()}`,
        sender: 'assistant',
        text: confirmMsg,
        timestamp: 'Just now',
      },
    ]);
    speakText(confirmMsg, language);
  };

  return (
    <div id="memory-assistant-container" className="bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden shadow-xs flex flex-col">
      {/* Header Bar */}
      <div className="p-4 sm:p-5 bg-[#FAF9F6] border-b border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#7C9070] text-white flex items-center justify-center shadow-xs">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2E2E]">
              {t.assistantTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#73706A] font-normal">
              {t.assistantSubtitle}
            </p>
          </div>
        </div>

        {/* Quick Add Face Button */}
        <button
          id="btn-teach-face"
          type="button"
          onClick={() => setShowAddFaceModal(true)}
          className="px-3.5 py-2 bg-white hover:bg-[#F0F3EE] text-[#2D2E2E] border border-[#E5E1D8] rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all self-start sm:self-auto shadow-2xs"
        >
          <UserCheck className="w-4 h-4 text-[#7C9070]" />
          <span>{t.teachFaceBtn}</span>
        </button>
      </div>

      {/* Suggested Quick Questions for Dementia Patient */}
      <div className="px-4 py-2.5 bg-white border-b border-[#E5E1D8] flex items-center gap-2 overflow-x-auto text-xs sm:text-sm">
        <span className="font-semibold text-[#73706A] shrink-0">
          {t.quickQuestions}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleSendMessage(t.q1)}
            className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#F0F3EE] text-[#2D2E2E] border border-[#E5E1D8] rounded-full text-xs font-medium transition-colors"
          >
            "{t.q1}"
          </button>
          <button
            type="button"
            onClick={() => handleSendMessage(t.q2)}
            className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#F0F3EE] text-[#2D2E2E] border border-[#E5E1D8] rounded-full text-xs font-medium transition-colors"
          >
            "{t.q2}"
          </button>
          <button
            type="button"
            onClick={() => handleSendMessage(t.q3)}
            className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#F0F3EE] text-[#2D2E2E] border border-[#E5E1D8] rounded-full text-xs font-medium transition-colors"
          >
            "{t.q3}"
          </button>
        </div>
      </div>

      {/* Face Recall Demo Strip */}
      <div className="px-4 py-2.5 bg-[#FAF9F6] border-b border-[#E5E1D8] flex items-center gap-3 overflow-x-auto text-xs">
        <span className="font-semibold text-[#2D2E2E] shrink-0">
          {t.tryFaceRecall}
        </span>
        {knownFaces.map((face) => (
          <button
            key={face.id}
            type="button"
            onClick={() => selectSampleFace(face)}
            className="flex items-center gap-2 bg-white hover:bg-[#F0F3EE] px-2.5 py-1 rounded-full border border-[#E5E1D8] transition-colors shrink-0 shadow-2xs"
          >
            <img
              src={face.photoUrl}
              alt={face.name}
              referrerPolicy="no-referrer"
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="font-semibold text-[#2D2E2E]">{face.name}</span>
            <span className="text-[10px] text-[#73706A] font-normal">({face.relationship.split(' ')[0]})</span>
          </button>
        ))}
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 max-h-[500px]">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 sm:p-5 shadow-2xs transition-all ${
                  isUser
                    ? 'bg-[#7C9070] text-white rounded-br-xs'
                    : 'bg-[#FAF9F6] text-[#2D2E2E] rounded-bl-xs border border-[#E5E1D8]'
                }`}
              >
                {/* Attached Image if any */}
                {msg.imagePreview && (
                  <div className="mb-3 rounded-xl overflow-hidden border border-black/10 max-w-xs">
                    <img
                      src={msg.imagePreview}
                      alt="Uploaded face or photo"
                      referrerPolicy="no-referrer"
                      className="w-full h-44 object-cover"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <p
                    className={`leading-relaxed font-normal whitespace-pre-line ${
                      largeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {msg.text}
                  </p>

                  {!isUser && (
                    <button
                      type="button"
                      onClick={() => speakText(msg.text, language)}
                      title="Read aloud"
                      className="p-1.5 text-[#73706A] hover:text-[#2D2E2E] hover:bg-[#E5E1D8]/40 rounded-lg shrink-0 transition-colors"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div
                  className={`text-[11px] mt-2 ${
                    isUser ? 'text-white/80 text-right' : 'text-[#73706A] text-left'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#E5E1D8] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#7C9070] animate-spin" />
              <span className="text-base text-[#73706A] font-medium">
                {t.thinking}
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Selected Image Preview before sending */}
      {selectedImage && (
        <div className="px-4 py-2 bg-[#FAF9F6] border-t border-[#E5E1D8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={selectedImage}
              alt="Preview"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-lg object-cover border border-[#E5E1D8]"
            />
            <span className="text-sm font-semibold text-[#2D2E2E]">
              {t.photoSelected}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="p-1.5 text-[#73706A] hover:text-[#2D2E2E]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Chat Input Bar (Extra Large Touch Friendly) */}
      <div className="p-3 sm:p-4 bg-white border-t border-[#E5E1D8]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          {/* Photo upload trigger */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageFileChange}
            accept="image/*"
            className="hidden"
          />

          <button
            id="chat-upload-photo-btn"
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title={t.uploadPhotoTitle}
            className="h-12 w-12 rounded-xl bg-[#FAF9F6] hover:bg-[#F0F3EE] text-[#73706A] border border-[#E5E1D8] flex items-center justify-center shrink-0 transition-colors"
          >
            <ImageIcon className="w-6 h-6 text-[#7C9070]" />
          </button>

          {/* Text Input */}
          <input
            id="chat-text-input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={selectedImage ? t.inputWithPhotoPlaceholder : t.inputPlaceholder}
            className={`flex-1 h-12 px-4 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C9070] text-[#2D2E2E] placeholder-[#73706A]/70 ${
              largeText ? 'text-lg' : 'text-base'
            }`}
          />

          {/* Voice Prompt trigger */}
          <button
            id="chat-voice-btn"
            type="button"
            onClick={voice.toggle}
            aria-label={voice.listening ? choose(language,'Stop listening','सुनना रोकें','শুনা বন্ধ কৰক') : choose(language,'Speak your question','अपना प्रश्न बोलें','প্ৰশ্ন কওক')}
            aria-pressed={voice.listening}
            title={choose(language,'Voice input; availability depends on browser and language','आवाज़ से लिखें; उपलब्धता ब्राउज़र और भाषा पर निर्भर है','মাতৰ ইনপুট; উপলব্ধতা ব্ৰাউজাৰ আৰু ভাষাৰ ওপৰত নিৰ্ভৰশীল')}
            className="h-12 w-12 rounded-xl bg-[#FAF9F6] hover:bg-[#F0F3EE] text-[#73706A] border border-[#E5E1D8] flex items-center justify-center shrink-0 transition-colors"
          >
            <Mic className="w-5 h-5 text-[#73706A]" />
          </button>

          {/* Send Button */}
          <button
            id="chat-send-btn"
            type="submit"
            disabled={isTyping || (!inputText.trim() && !selectedImage)}
            className="h-12 px-5 bg-[#7C9070] hover:bg-[#687A5E] disabled:bg-[#E5E1D8] disabled:text-[#73706A] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shrink-0 shadow-xs"
          >
            <Send className="w-5 h-5" />
            <span className="hidden sm:inline">{t.send}</span>
          </button>
        </form>
        <p role="status" className="text-xs mt-2 text-[#73706A]">{voice.message || choose(language, "Microphone input may need internet and browser permission. You can always type.", "माइक्रोफ़ोन के लिए इंटरनेट और ब्राउज़र अनुमति लग सकती है। आप टाइप कर सकते हैं।", "মাইক্ৰফোনৰ বাবে ইণ্টাৰনেট আৰু ব্ৰাউজাৰৰ অনুমতি লাগিব পাৰে। আপুনি লিখিব পাৰে।")}</p>
      </div>

      {/* Teach New Face Modal */}
      {showAddFaceModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-lg border border-[#E5E1D8]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-[#7C9070]" />
                <h4 className="text-xl font-bold text-[#2D2E2E]">
                  {t.teachFaceBtn}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowAddFaceModal(false)}
                className="p-1 text-[#73706A] hover:text-[#2D2E2E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#73706A] mb-4">
              {language === 'as'
                ? 'পৰিয়ালৰ সদস্য বা যত্নকৰ্তাৰ তথ্য এবাৰ যোগ কৰক যাতে মেমৰি মেটে ফটো চালে তৎক্ষণাত চিনি পায়।'
                : language === 'hi'
                ? 'परिवार के सदस्य या देखभालकर्ता को एक बार जोड़ें ताकि मेमरी मेट फ़ोटो देखकर तुरंत पहचान सके।'
                : 'Register a family member or caregiver once so Memory Mate can instantly recall them when a photo is shown.'}
            </p>

            <form onSubmit={handleSaveNewFace} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'সম্পূৰ্ণ নাম *' : language === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={newFaceName}
                  onChange={(e) => setNewFaceName(e.target.value)}
                  placeholder={language === 'as' ? 'যেনে: ৰাহুল বৰা (নাতি)' : language === 'hi' ? 'जैसे: राहुल बोरा (पोता)' : 'e.g. Rahul Borah (Grandson)'}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'সম্পৰ্ক *' : language === 'hi' ? 'रिश्ता *' : 'Relationship *'}
                </label>
                <input
                  type="text"
                  required
                  value={newFaceRel}
                  onChange={(e) => setNewFaceRel(e.target.value)}
                  placeholder={language === 'as' ? 'যেনে: নাতি / জীয়ৰী' : language === 'hi' ? 'जैसे: पोता / दामाद' : 'e.g. Grandson / Daughter'}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'সহায়কাৰী টোকা' : language === 'hi' ? 'सुखद विवरण / संस्मरण' : 'Helpful Context / Reassuring Note'}
                </label>
                <textarea
                  rows={2}
                  value={newFaceNotes}
                  onChange={(e) => setNewFaceNotes(e.target.value)}
                  placeholder={language === 'as' ? 'যেনে: গুৱাহাটীত থাকে, মিঠা লৈ আহে।' : language === 'hi' ? 'जैसे: त्योहारों में आते हैं, मिठाई लाते हैं।' : 'e.g. Visits on weekends, brings flowers and sweets.'}
                  className="w-full px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'ফটোৰ লিংক (বা খালি ৰাখক)' : language === 'hi' ? 'फ़ोटो लिंक (या खाली छोड़ें)' : 'Photo URL (or leave empty for default)'}
                </label>
                <input
                  type="url"
                  value={newFacePhoto}
                  onChange={(e) => setNewFacePhoto(e.target.value)}
                  placeholder="https://... (or leave empty)"
                  className="w-full px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#E5E1D8]">
                <button
                  type="button"
                  onClick={() => setShowAddFaceModal(false)}
                  className="px-4 py-2 text-[#73706A] hover:text-[#2D2E2E] text-sm font-semibold"
                >
                  {language === 'as' ? 'বাতিল' : language === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-sm rounded-xl shadow-xs"
                >
                  {language === 'as' ? 'সংৰক্ষণ কৰক' : language === 'hi' ? 'सहेजें' : 'Save Face to Memory'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
