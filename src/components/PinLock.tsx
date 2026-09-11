import React, { useEffect, useState } from 'react';
import { LockKeyhole, ShieldCheck } from 'lucide-react';

const PIN_STORAGE_KEY = 'mm_pin_hash';

async function hashPin(pin: string) {
  const bytes = new TextEncoder().encode(pin);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

interface PinLockProps {
  onUnlocked: () => void;
}

export const PinLock: React.FC<PinLockProps> = ({ onUnlocked }) => {
  const [savedHash, setSavedHash] = useState<string | null | undefined>(undefined);
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSavedHash(localStorage.getItem(PIN_STORAGE_KEY));
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!/^\d{4,}$/.test(pin)) {
      setMessage('Choose a PIN with at least 4 numbers.');
      return;
    }

    const pinHash = await hashPin(pin);
    if (!savedHash) {
      if (pin !== confirmPin) {
        setMessage('The PINs do not match. Please try again.');
        return;
      }
      localStorage.setItem(PIN_STORAGE_KEY, pinHash);
      onUnlocked();
      return;
    }

    if (pinHash === savedHash) {
      onUnlocked();
      return;
    }
    setMessage('That PIN is not correct. Please try again.');
    setPin('');
  };

  if (savedHash === undefined) return null;
  const isSetup = !savedHash;

  return (
    <main className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-5 text-[#2D2E2E]">
      <section className="w-full max-w-md bg-white border border-[#E5E1D8] rounded-3xl shadow-sm p-7 sm:p-9">
        <div className="w-14 h-14 rounded-2xl bg-[#F0F3EE] text-[#5C6E53] flex items-center justify-center mb-5">
          <LockKeyhole className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold">{isSetup ? 'Protect Memory Mate' : 'Memory Mate is locked'}</h1>
        <p className="text-sm text-[#73706A] mt-2 leading-6">
          {isSetup
            ? 'Create a device PIN to keep patient information private when this app is opened.'
            : 'Enter your device PIN to access patient information.'}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="memory-mate-pin" className="block text-sm font-semibold mb-1.5">PIN</label>
            <p id="memory-mate-pin-help" className="text-xs text-[#73706A] mb-2">Enter 4 or more numbers, for example: 1234</p>
            <input
              id="memory-mate-pin"
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete={isSetup ? 'new-password' : 'current-password'}
              value={pin}
              onChange={(event) => setPin(event.target.value.replace(/\D/g, ''))}
              aria-describedby="memory-mate-pin-help"
              className="w-full rounded-xl border border-[#D5DFD0] px-4 py-3 text-lg tracking-[0.2em] outline-none focus:border-[#7C9070]"
              maxLength={12}
              required
              autoFocus
            />
          </div>
          {isSetup && (
            <div>
              <label htmlFor="memory-mate-confirm-pin" className="block text-sm font-semibold mb-1.5">Confirm PIN</label>
              <p id="memory-mate-confirm-pin-help" className="text-xs text-[#73706A] mb-2">Enter the same numbers again</p>
              <input
                id="memory-mate-confirm-pin"
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="new-password"
                value={confirmPin}
                onChange={(event) => setConfirmPin(event.target.value.replace(/\D/g, ''))}
                aria-describedby="memory-mate-confirm-pin-help"
                className="w-full rounded-xl border border-[#D5DFD0] px-4 py-3 text-lg tracking-[0.2em] outline-none focus:border-[#7C9070]"
                maxLength={12}
                required
              />
            </div>
          )}
          {message && <p role="alert" className="text-sm text-[#A44A3F]">{message}</p>}
          <button type="submit" className="w-full rounded-xl bg-[#7C9070] hover:bg-[#687A5E] py-3 text-white font-bold transition-colors">
            {isSetup ? 'Create PIN and continue' : 'Unlock Memory Mate'}
          </button>
        </form>

        <p className="mt-5 flex gap-2 text-xs leading-5 text-[#73706A]">
          <ShieldCheck className="w-4 h-4 shrink-0 text-[#7C9070] mt-0.5" />
          This PIN prevents casual access on this device. Data is stored locally and is not encrypted by this demo app.
        </p>
      </section>
    </main>
  );
};
