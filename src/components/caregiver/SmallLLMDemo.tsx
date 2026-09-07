import React, { useState } from 'react';
import { Sparkles, Cpu } from 'lucide-react';
import { generateCompletion } from '../../ml/smallLLM';

const SAMPLE_PROMPTS = [
  'it is time for your morning',
  'please remember to drink',
  'your family caregiver will',
];

/**
 * Demo card for the custom small language model — built entirely from
 * scratch (NumPy, hand-coded backprop), separate from Gemini. Isolated
 * component so it can't affect any other part of the dashboard.
 */
export const SmallLLMDemo: React.FC = () => {
  const [prompt, setPrompt] = useState(SAMPLE_PROMPTS[0]);
  const [result, setResult] = useState<string | null>(null);

  const handleRun = (p: string) => {
    setPrompt(p);
    const completion = generateCompletion(p, 8);
    setResult(completion);
  };

  return (
    <div className="bg-white border border-[#E5E1D8] rounded-2xl p-5 max-w-xl">
      <div className="flex items-center gap-2 mb-1">
        <Cpu className="w-4 h-4 text-[#7C9070]" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#73706A]">
          Custom Small Language Model (built from scratch — not Gemini)
        </span>
      </div>
      <p className="text-xs text-[#73706A] mb-3">
        A neural network we trained ourselves (embeddings → hidden layer → softmax,
        ~21,000 parameters) on Memory Mate's own domain text. Try a prompt below.
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {SAMPLE_PROMPTS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => handleRun(p)}
            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#F0F3EE] hover:bg-[#E5EBE0] text-[#5C6E53] border border-[#D5DFD0]"
          >
            "{p}..."
          </button>
        ))}
      </div>

      {result && (
        <div className="flex items-start gap-2 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl p-3">
          <Sparkles className="w-4 h-4 text-[#7C9070] shrink-0 mt-0.5" />
          <p className="text-sm text-[#2D2E2E]">
            <span className="font-semibold">{prompt}</span>{' '}
            <span className="text-[#5C6E53]">
              {result.slice(prompt.length).trim()}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
