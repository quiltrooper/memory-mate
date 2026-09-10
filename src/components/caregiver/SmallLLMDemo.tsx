import React, { useState } from 'react';
import { Sparkles, Cpu, RefreshCw } from 'lucide-react';
import { generateCompletion } from '../../ml/smallLLM';

const SAMPLE_PROMPTS = [
  'it is time for your morning',
  'your family caregiver will',
  'i remember walking beside',
  'how are you feeling',
];

/**
 * Demo card for the custom small language model — built entirely from
 * scratch (NumPy, hand-coded backprop), separate from Gemini. Isolated
 * component so it can't affect any other part of the dashboard.
 *
 * Supports free-text prompts (limited to the model's 511-word domain
 * vocabulary) and temperature-sampled generation, so clicking
 * "Regenerate" on the same prompt can yield a genuinely different,
 * still-plausible completion each time.
 */
export const SmallLLMDemo: React.FC = () => {
  const [prompt, setPrompt] = useState(SAMPLE_PROMPTS[0]);
  const [result, setResult] = useState<string | null>(null);
  const [completionOnly, setCompletionOnly] = useState<string>('');

  const runGeneration = (p: string) => {
    const completion = generateCompletion(p, 10, { temperature: 0.7 });
    setResult(completion);
    setCompletionOnly(completion.slice(p.trim().length).trim());
  };

  const handlePresetClick = (p: string) => {
    setPrompt(p);
    runGeneration(p);
  };

  const handleFreeTextRun = () => {
    if (prompt.trim().length > 0) runGeneration(prompt.trim());
  };

  const handleRegenerate = () => {
    if (prompt.trim().length > 0) runGeneration(prompt.trim());
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
        ~42,000 parameters, 511-word domain vocabulary) on Memory Mate's own text.
        Uses temperature sampling — try "Regenerate" for a different completion.
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {SAMPLE_PROMPTS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => handlePresetClick(p)}
            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#F0F3EE] hover:bg-[#E5EBE0] text-[#5C6E53] border border-[#D5DFD0]"
          >
            "{p}..."
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleFreeTextRun()}
          placeholder="Type your own prompt (domain words work best)..."
          className="flex-1 px-3 py-2 text-sm rounded-xl border border-[#E5E1D8] focus:outline-none focus:border-[#7C9070]"
        />
        <button
          type="button"
          onClick={handleFreeTextRun}
          className="px-3 py-2 rounded-xl text-xs font-semibold bg-[#7C9070] text-white hover:bg-[#6B7F60]"
        >
          Generate
        </button>
      </div>

      {result && (
        <div className="flex items-start gap-2 bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl p-3">
          <Sparkles className="w-4 h-4 text-[#7C9070] shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-[#2D2E2E]">
              <span className="font-semibold">{prompt}</span>{' '}
              <span className="text-[#5C6E53]">{completionOnly}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={handleRegenerate}
            title="Generate a different completion for the same prompt (temperature sampling)"
            className="shrink-0 p-1.5 rounded-lg hover:bg-[#F0F3EE] text-[#7C9070]"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
