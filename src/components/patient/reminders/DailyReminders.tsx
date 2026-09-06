import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Pill, Utensils, Calendar, Footprints, Plus, X, Volume2 } from 'lucide-react';
import { Reminder, ReminderCategory, Language } from '../../../types';
import { speakText } from '../../../utils/speech';
import { TRANSLATIONS } from '../../../utils/translations';

interface DailyRemindersProps {
  reminders: Reminder[];
  onToggleReminder: (id: string) => void;
  onAddReminder: (reminder: Reminder) => void;
  language: Language;
  largeText: boolean;
}

export const DailyReminders: React.FC<DailyRemindersProps> = ({
  reminders,
  onToggleReminder,
  onAddReminder,
  language,
  largeText,
}) => {
  const t = TRANSLATIONS[language];
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [category, setCategory] = useState<ReminderCategory>('medication');
  const [notes, setNotes] = useState('');

  const getCategoryIcon = (cat: ReminderCategory) => {
    switch (cat) {
      case 'medication':
        return <Pill className="w-6 h-6 text-[#8C5E28]" />;
      case 'meal':
        return <Utensils className="w-6 h-6 text-[#7C9070]" />;
      case 'appointment':
        return <Calendar className="w-6 h-6 text-[#5C6E53]" />;
      case 'routine':
      default:
        return <Footprints className="w-6 h-6 text-[#5C6E53]" />;
    }
  };

  const getCategoryLabel = (cat: ReminderCategory) => {
    switch (cat) {
      case 'medication':
        return language === 'as' ? 'ঔষধ' : language === 'hi' ? 'दवा' : 'Medication';
      case 'meal':
        return language === 'as' ? 'আহাৰ / চাহ' : language === 'hi' ? 'भोजन / चाय' : 'Meal / Tea';
      case 'appointment':
        return language === 'as' ? 'পৰীক্ষা / সাক্ষাৎ' : language === 'hi' ? 'चिकित्सक भेंट' : 'Appointment';
      case 'routine':
      default:
        return language === 'as' ? 'দৈনন্দিন বিশ্ৰাম / খোজ' : language === 'hi' ? 'दिनचर्या / विश्राम' : 'Routine Walk / Rest';
    }
  };

  const getCategoryBg = (cat: ReminderCategory) => {
    switch (cat) {
      case 'medication':
        return 'bg-[#FDF6ED] border-[#E8D4BE]';
      case 'meal':
        return 'bg-[#F0F3EE] border-[#D5DFD0]';
      case 'appointment':
        return 'bg-[#F0F3EE] border-[#D5DFD0]';
      case 'routine':
      default:
        return 'bg-[#F0F3EE] border-[#D5DFD0]';
    }
  };

  const handleToggle = (rem: Reminder) => {
    onToggleReminder(rem.id);
    if (!rem.completed) {
      const completionPrompt =
        language === 'as'
          ? `সম্পূৰ্ণ কৰা হ’ল: ${rem.title}। অতি সুন্দৰ!`
          : language === 'hi'
          ? `पूर्ण चिह्नित: ${rem.title}। बहुत अच्छा!`
          : `Marked completed: ${rem.title}. Good job!`;
      speakText(completionPrompt, language);
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newRem: Reminder = {
      id: `rem-${Date.now()}`,
      title: title.trim(),
      time,
      category,
      completed: false,
      notes: notes.trim() || undefined,
      assignedBy: language === 'as' ? 'নিজে' : language === 'hi' ? 'स्वयं' : 'Self',
    };

    onAddReminder(newRem);
    setTitle('');
    setNotes('');
    setShowAddModal(false);
    const addedPrompt =
      language === 'as'
        ? `${time} ৰ বাবে নতুন সূচী যোগ কৰা হ’ল: ${newRem.title}`
        : language === 'hi'
        ? `${time} के लिए नई अनुस्मारक जोड़ी गई: ${newRem.title}`
        : `Added reminder for ${time}: ${newRem.title}`;
    speakText(addedPrompt, language);
  };

  const completedCount = reminders.filter((r) => r.completed).length;

  return (
    <div id="daily-reminders-section" className="space-y-6">
      {/* Header & Progress */}
      <div className="bg-white p-6 rounded-2xl border border-[#E5E1D8] shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6E53] bg-[#F0F3EE] px-2.5 py-1 rounded-md border border-[#D5DFD0]">
            {language === 'as' ? 'দৈনন্দিন কাৰ্যসূচী আৰু ঔষধ সময়তালিকা' : language === 'hi' ? 'दैनिक दिनचर्या और दवा समयसारणी' : 'Daily Routine & Medicine Schedule'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2E2E] mt-2">
            {t.tabReminders}
          </h3>
          <p className="text-[#73706A] text-base mt-0.5">
            {t.tasksDone(completedCount, reminders.length)}
          </p>
        </div>

        <button
          id="btn-add-daily-reminder"
          type="button"
          onClick={() => setShowAddModal(true)}
          className="px-5 py-3.5 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-base rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all min-h-[50px]"
        >
          <Plus className="w-5 h-5" />
          <span>{language === 'as' ? 'নতুন সূচী যোগ কৰক' : language === 'hi' ? 'अनुस्मारक जोड़ें' : 'Add Reminder'}</span>
        </button>
      </div>

      {/* Large Reminder Cards */}
      <div className="grid grid-cols-1 gap-4">
        {reminders.map((rem) => {
          const catBg = getCategoryBg(rem.category);
          return (
            <div
              key={rem.id}
              id={`reminder-card-${rem.id}`}
              className={`p-5 sm:p-6 rounded-2xl border transition-all shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                rem.completed
                  ? 'bg-[#FAF9F6] border-[#E5E1D8] opacity-75'
                  : 'bg-white border-[#E5E1D8] hover:border-[#7C9070]'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Category Icon Badge */}
                <div
                  className={`p-3.5 rounded-2xl border ${catBg} shrink-0 mt-0.5`}
                >
                  {getCategoryIcon(rem.category)}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md bg-[#FAF9F6] text-[#2D2E2E] border border-[#E5E1D8]">
                      <Clock className="w-3.5 h-3.5 text-[#73706A]" />
                      {rem.time}
                    </span>
                    <span className="text-xs font-medium text-[#73706A]">
                      {getCategoryLabel(rem.category)}
                    </span>
                    {rem.assignedBy && (
                      <span className="text-xs text-[#73706A]">
                        • {language === 'as' ? `দ্বাৰা: ${rem.assignedBy}` : language === 'hi' ? `द्वारा: ${rem.assignedBy}` : `by ${rem.assignedBy}`}
                      </span>
                    )}
                  </div>

                  <h4
                    className={`font-bold text-[#2D2E2E] leading-snug ${
                      largeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                    } ${rem.completed ? 'line-through text-[#73706A]' : ''}`}
                  >
                    {rem.title}
                  </h4>

                  {rem.notes && (
                    <p className="text-sm text-[#73706A] font-normal mt-1 leading-relaxed">
                      {rem.notes}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons: Speak & Mark Done */}
              <div className="flex items-center gap-2 shrink-0 sm:self-center">
                <button
                  type="button"
                  onClick={() => speakText(`${rem.time}: ${rem.title}. ${rem.notes || ''}`, language)}
                  title="Read aloud"
                  className="p-3 text-[#73706A] hover:text-[#2D2E2E] hover:bg-[#FAF9F6] rounded-xl border border-[#E5E1D8] min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleToggle(rem)}
                  className={`px-5 py-3 rounded-xl font-semibold text-base flex items-center gap-2 transition-all min-h-[48px] ${
                    rem.completed
                      ? 'bg-[#F0F3EE] text-[#5C6E53] border border-[#D5DFD0]'
                      : 'bg-[#7C9070] hover:bg-[#687A5E] text-white shadow-xs'
                  }`}
                >
                  {rem.completed ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-[#5C6E53]" />
                      <span>{language === 'as' ? 'সম্পূৰ্ণ' : language === 'hi' ? 'पूर्ण' : 'Completed'}</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-5 h-5" />
                      <span>{language === 'as' ? 'সম্পূৰ্ণ কৰক' : language === 'hi' ? 'पूर्ण चिह्नित करें' : 'Mark Done'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Reminder Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-lg border border-[#E5E1D8]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-[#2D2E2E]">
                {language === 'as' ? 'দৈনন্দিন সূচী যোগ কৰক' : language === 'hi' ? 'दैनिक अनुस्मारक जोड़ें' : 'Add Daily Reminder'}
              </h4>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-1 text-[#73706A] hover:text-[#2D2E2E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'শীৰ্ষক *' : language === 'hi' ? 'शीर्षक *' : 'Reminder Title *'}
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={language === 'as' ? 'যেনে: দুপৰীয়াৰ ঔষধ কুহুমীয়া পানীৰে' : language === 'hi' ? 'जैसे: दोपहर की गोली गुनगुने पानी के साथ' : 'e.g. Afternoon BP tablet with warm water'}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'সময় *' : language === 'hi' ? 'समय *' : 'Scheduled Time *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="02:30 PM"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                    {language === 'as' ? 'শ্ৰেণী' : language === 'hi' ? 'श्रेणी' : 'Category'}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ReminderCategory)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9070]"
                  >
                    <option value="medication">{language === 'as' ? 'ঔষধ' : language === 'hi' ? 'दवा' : 'Medication'}</option>
                    <option value="meal">{language === 'as' ? 'আহাৰ / চাহ' : language === 'hi' ? 'भोजन / चाय' : 'Meal / Tea'}</option>
                    <option value="appointment">{language === 'as' ? 'সাক্ষাৎ' : language === 'hi' ? 'भेंट' : 'Appointment'}</option>
                    <option value="routine">{language === 'as' ? 'নিয়মীয়া খোজ / বিশ্ৰাম' : language === 'hi' ? 'दिनचर्या / विश्राम' : 'Routine Walk / Rest'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                  {language === 'as' ? 'সহায়ক নিৰ্দেশ / টোকা' : language === 'hi' ? 'सहज निर्देश / विवरण' : 'Gentle Instructions / Notes'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={language === 'as' ? 'যেনে: আহাৰৰ পিছত ১ টা টেবলেট খাব।' : language === 'hi' ? 'जैसे: भोजन के बाद १ गोली लें।' : 'e.g. Take 1 tablet after lunch with a glass of water.'}
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
                  {language === 'as' ? 'সংৰক্ষণ কৰক' : language === 'hi' ? 'सहेजें' : 'Save Reminder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
