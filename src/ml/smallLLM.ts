/**
 * A small custom neural language model — built completely from scratch
 * (trained with NumPy + hand-coded backprop, see /ml/build_small_llm_v2.py)
 * — separate from Gemini. Same core architecture as every LLM
 * (embeddings -> neural network -> next-word prediction), just tiny:
 * ~42,000 parameters and a 511-word domain vocabulary, vs. Gemini's
 * billions. Trained on Memory Mate's own reminders, memory-box
 * captions, reminiscence prompts, and caregiver check-in phrases
 * (266 sentences, ~3,000 training tokens).
 *
 * Uses temperature-based sampling (not just greedy argmax), so the
 * SAME prompt can produce genuinely different completions on repeat
 * calls — e.g. "your family caregiver will..." might complete as
 * "visit this afternoon" one time and "call you this evening" the
 * next, both plausible given the training data.
 */
import { SMALL_LLM_WEIGHTS } from './smallLLMWeights';

const { vocab, contextSize, W_embed, W_hidden, b_hidden, W_out, b_out } = SMALL_LLM_WEIGHTS;

const wordToIdx: Record<string, number> = {};
vocab.forEach((w, i) => (wordToIdx[w] = i));
const UNK_IDX = wordToIdx['<UNK>'];

function tokenize(text: string): string[] {
  let t = text.toLowerCase();
  for (const ch of [',', '.', '?', '!']) {
    t = t.split(ch).join(` ${ch}`);
  }
  return t.split(/\s+/).filter(Boolean);
}

function wordId(w: string): number {
  return wordToIdx[w] ?? UNK_IDX;
}

function tanh(x: number): number {
  return Math.tanh(x);
}

function softmax(logits: number[]): number[] {
  const max = Math.max(...logits);
  const exps = logits.map((l) => Math.exp(l - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((e) => e / sum);
}

/** Forward pass: context word indices -> probability distribution over vocab. */
function forward(contextIds: number[]): number[] {
  const embedFlat: number[] = [];
  for (const id of contextIds) {
    embedFlat.push(...W_embed[id]);
  }

  const hiddenDim = b_hidden.length;
  const h: number[] = new Array(hiddenDim).fill(0);
  for (let j = 0; j < hiddenDim; j++) {
    let sum = b_hidden[j];
    for (let i = 0; i < embedFlat.length; i++) {
      sum += embedFlat[i] * W_hidden[i][j];
    }
    h[j] = tanh(sum);
  }

  const vocabSize = b_out.length;
  const logits: number[] = new Array(vocabSize).fill(0);
  for (let k = 0; k < vocabSize; k++) {
    let sum = b_out[k];
    for (let j = 0; j < hiddenDim; j++) {
      sum += h[j] * W_out[j][k];
    }
    logits[k] = sum;
  }

  return softmax(logits);
}

/** Sample an index from a probability distribution (weighted random choice). */
function sampleFromDistribution(probs: number[]): number {
  const r = Math.random();
  let cumulative = 0;
  for (let i = 0; i < probs.length; i++) {
    cumulative += probs[i];
    if (r <= cumulative) return i;
  }
  return probs.length - 1;
}

/**
 * Predict the next word.
 * @param greedy If true, always pick the single most likely word (deterministic).
 *               If false (default), use temperature sampling for variety.
 * @param temperature Lower = safer/more predictable, higher = more varied/riskier.
 */
export function predictNextWord(
  contextWords: string[],
  options: { greedy?: boolean; temperature?: number } = {}
): string {
  const { greedy = false, temperature = 0.7 } = options;
  let ids = contextWords.slice(-contextSize).map(wordId);
  while (ids.length < contextSize) ids = [UNK_IDX, ...ids];

  const probs = forward(ids);

  if (greedy) {
    let bestIdx = 0;
    let bestProb = -1;
    probs.forEach((p, i) => {
      if (p > bestProb) {
        bestProb = p;
        bestIdx = i;
      }
    });
    return vocab[bestIdx];
  }

  const adjusted = probs.map((p) => Math.pow(p, 1 / temperature));
  const sum = adjusted.reduce((a, b) => a + b, 0);
  const normalized = adjusted.map((p) => p / sum);
  const idx = sampleFromDistribution(normalized);
  return vocab[idx];
}

/**
 * Generate a short domain-specific completion from a prompt.
 * Defaults to temperature sampling (real variety); pass greedy: true
 * for fully deterministic/reproducible output.
 */
export function generateCompletion(
  prompt: string,
  maxWords: number = 10,
  options: { greedy?: boolean; temperature?: number } = {}
): string {
  const words = tokenize(prompt);
  for (let i = 0; i < maxWords; i++) {
    const next = predictNextWord(words, options);
    if (next === '<UNK>') break;
    words.push(next);
    if (next === '.' || next === '?' || next === '!') break;
  }
  return words.join(' ').replace(/ ([,.?!])/g, '$1');
}
