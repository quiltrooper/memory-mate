/**
 * A small custom neural language model — built completely from scratch
 * (trained with NumPy + hand-coded backprop, see /ml/build_small_llm.py)
 * — separate from Gemini. Same core architecture as every LLM
 * (embeddings -> neural network -> next-word prediction), just tiny:
 * ~21,000 parameters and a 401-word domain vocabulary, vs. Gemini's
 * billions. Trained only on Memory Mate's own reminders, memory-box
 * captions, and reminiscence prompts.
 *
 * Prediction here is pure math: embedding lookup -> concatenate ->
 * tanh hidden layer -> softmax over vocabulary. No ML framework
 * needed at runtime, so it deploys anywhere (including Vercel) with
 * zero extra dependencies.
 */
import { SMALL_LLM_WEIGHTS } from './smallLLMWeights';

const { vocab, contextSize, W_embed, W_hidden, b_hidden, W_out, b_out } = SMALL_LLM_WEIGHTS;

const wordToIdx: Record<string, number> = {};
vocab.forEach((w, i) => (wordToIdx[w] = i));
const UNK_IDX = wordToIdx['<UNK>'];

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/,/g, ' ,')
    .replace(/\./g, ' .')
    .split(/\s+/)
    .filter(Boolean);
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
  // Embedding lookup + concatenate
  const embedFlat: number[] = [];
  for (const id of contextIds) {
    embedFlat.push(...W_embed[id]);
  }

  // Hidden layer: tanh(embedFlat @ W_hidden + b_hidden)
  const hiddenDim = b_hidden.length;
  const h: number[] = new Array(hiddenDim).fill(0);
  for (let j = 0; j < hiddenDim; j++) {
    let sum = b_hidden[j];
    for (let i = 0; i < embedFlat.length; i++) {
      sum += embedFlat[i] * W_hidden[i][j];
    }
    h[j] = tanh(sum);
  }

  // Output layer: h @ W_out + b_out
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

/** Predict the single most likely next word (greedy, no randomness). */
export function predictNextWord(contextWords: string[]): string {
  let ids = contextWords.slice(-contextSize).map(wordId);
  while (ids.length < contextSize) ids = [UNK_IDX, ...ids];

  const probs = forward(ids);
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

/** Generate a short domain-specific completion from a prompt. */
export function generateCompletion(prompt: string, maxWords: number = 8): string {
  const words = tokenize(prompt);
  for (let i = 0; i < maxWords; i++) {
    const next = predictNextWord(words);
    if (next === '<UNK>' || next === '.') break;
    words.push(next);
  }
  return words.join(' ');
}
