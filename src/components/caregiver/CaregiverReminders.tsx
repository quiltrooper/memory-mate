import React, { useState } from 'react';
import { Reminder, ReminderCategory } from '../../types';
import { Plus, Edit2, Trash2, CheckCircle2, Clock, Pill, Utensils, Calendar, Footprints, X, Save } from 'lucide-react';

interface CaregiverRemindersProps {
  reminders: Reminder[];
  onAddReminder: (reminder: Reminder) => void;
  onUpdateReminder: (reminder: Reminder) => void;
  onDeleteReminder: (id: string) => void;
}

export const CaregiverReminders: React.FC<CaregiverRemindersProps> = ({
  reminders,
  onAddReminder,
  onUpdateReminder,
  onDeleteReminder,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('09:00 AM');
  const [category, setCategory] = useState<ReminderCategory>('medication');
  const [notes, setNotes] = useState('');
  const [assignedBy, setAssignedBy] = useState<'Priya (Family)' | 'Runu Gogoi (ASHA Worker)'>('Priya (Family)');

  const startEdit = (rem: Reminder) => {
    setEditingId(rem.id);
    setTitle(rem.title);
    setTime(rem.time);
    setCategory(rem.category);
    setNotes(rem.notes || '');
    setAssignedBy((rem.assignedBy as any) || 'Priya (Family)');
    setShowAddForm(false);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setNotes('');
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId || !title.trim()) return;

    const existing = reminders.find((r) => r.id === editingId);
    if (!existing) return;

    const updated: Reminder = {
      ...existing,
      title: title.trim(),
      time,
      category,
      notes: notes.trim() || undefined,
      assignedBy,
    };

    onUpdateReminder(updated);
    cancelEdit();
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
      assignedBy,
    };

    onAddReminder(newRem);
    setTitle('');
    setNotes('');
    setShowAddForm(false);
  };

  const getCategoryIcon = (cat: ReminderCategory) => {
    switch (cat) {
      case 'medication':
        return <Pill className="w-4 h-4 text-rose-600" />;
      case 'meal':
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case 'appointment':
        return <Calendar className="w-4 h-4 text-blue-600" />;
      case 'routine':
      default:
        return <Footprints className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div id="caregiver-reminders-card" className="bg-white rounded-2xl p-6 border border-[#E5E1D8] shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E1D8] pb-4">
        <div>
          <h3 className="text-xl font-bold text-[#2D2E2E]">
            Caregiver Schedule & Prescription Management
          </h3>
          <p className="text-sm text-[#73706A]">
            Reminders managed here are displayed in large accessible format in Patient Mode
          </p>
        </div>

        {!showAddForm && !editingId && (
          <button
            type="button"
            onClick={() => {
              setShowAddForm(true);
              setTitle('');
              setNotes('');
            }}
            className="px-4 py-2 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center gap-1.5 shadow-2xs transition-colors self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add Care Schedule Item</span>
          </button>
        )}
      </div>

      {/* Add / Edit Form */}
      {(showAddForm || editingId) && (
        <form
          onSubmit={editingId ? handleSaveEdit : handleCreate}
          className="bg-[#FAF9F6] p-5 rounded-2xl border border-[#E5E1D8] space-y-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-[#2D2E2E] text-base">
              {editingId ? 'Edit Schedule Item' : 'New Schedule Item'}
            </h4>
            <button
              type="button"
              onClick={() => {
                setShowAddForm(false);
                cancelEdit();
              }}
              className="text-[#73706A] hover:text-[#2D2E2E]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                Reminder / Medicine Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Afternoon Donepezil 5mg tablet"
                className="w-full px-3 py-2 bg-white border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:ring-1 focus:ring-[#7C9070] focus:border-[#7C9070]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                Time *
              </label>
              <input
                type="text"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="02:00 PM"
                className="w-full px-3 py-2 bg-white border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:ring-1 focus:ring-[#7C9070] focus:border-[#7C9070]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ReminderCategory)}
                className="w-full px-3 py-2 bg-white border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:ring-1 focus:ring-[#7C9070] focus:border-[#7C9070]"
              >
                <option value="medication">Medication / Prescription</option>
                <option value="meal">Meal / Tea Nutrition</option>
                <option value="appointment">Clinical / ASHA Visit</option>
                <option value="routine">Routine Walk & Rest</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
                Assigned By (Caregiver Role)
              </label>
              <select
                value={assignedBy}
                onChange={(e) => setAssignedBy(e.target.value as any)}
                className="w-full px-3 py-2 bg-white border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:ring-1 focus:ring-[#7C9070] focus:border-[#7C9070]"
              >
                <option value="Priya (Family)">Priya Borah (Family Member)</option>
                <option value="Runu Gogoi (ASHA Worker)">Runu Gogoi (ASHA Worker)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2D2E2E] mb-1">
              Instructions for Patient
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Take with 1 glass of warm water after meals"
              className="w-full px-3 py-2 bg-white border border-[#E5E1D8] rounded-xl text-[#2D2E2E] text-sm focus:ring-1 focus:ring-[#7C9070] focus:border-[#7C9070]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setShowAddForm(false);
                cancelEdit();
              }}
              className="px-4 py-2 text-[#73706A] hover:text-[#2D2E2E] text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#7C9070] hover:bg-[#687A5E] text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{editingId ? 'Update Reminder' : 'Save Reminder'}</span>
            </button>
          </div>
        </form>
      )}

      {/* Reminders Table / List */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[#E5E1D8] text-xs font-bold text-[#73706A] uppercase tracking-wider">
              <th className="pb-3 pl-2">Time</th>
              <th className="pb-3">Title & Notes</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Set By</th>
              <th className="pb-3">Status Today</th>
              <th className="pb-3 pr-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E1D8]">
            {reminders.map((rem) => (
              <tr key={rem.id} className="hover:bg-[#FAF9F6] transition-colors">
                <td className="py-3.5 pl-2 font-semibold text-[#2D2E2E] whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#73706A]" />
                    <span>{rem.time}</span>
                  </div>
                </td>

                <td className="py-3.5">
                  <div className="font-semibold text-[#2D2E2E]">{rem.title}</div>
                  {rem.notes && (
                    <div className="text-xs text-[#73706A] line-clamp-1">{rem.notes}</div>
                  )}
                </td>

                <td className="py-3.5">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E5E1D8] text-[#2D2E2E] capitalize">
                    {getCategoryIcon(rem.category)}
                    <span>{rem.category}</span>
                  </span>
                </td>

                <td className="py-3.5 text-xs text-[#73706A] font-medium">
                  {rem.assignedBy || 'Caregiver'}
                </td>

                <td className="py-3.5">
                  {rem.completed ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#5C6E53] bg-[#F0F3EE] px-2.5 py-1 rounded-md border border-[#D5DFD0]">
                      <CheckCircle2 className="w-3 h-3 text-[#7C9070]" />
                      <span>Completed</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-xs font-medium text-[#73706A] bg-[#FAF9F6] border border-[#E5E1D8] px-2.5 py-1 rounded-md">
                      Pending
                    </span>
                  )}
                </td>

                <td className="py-3.5 pr-2 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      onClick={() => startEdit(rem)}
                      title="Edit reminder"
                      className="p-1.5 text-[#73706A] hover:text-[#7C9070] hover:bg-[#FAF9F6] rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeleteReminder(rem.id)}
                      title="Delete reminder"
                      className="p-1.5 text-[#73706A] hover:text-[#8C5E28] hover:bg-[#FDF6ED] rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
