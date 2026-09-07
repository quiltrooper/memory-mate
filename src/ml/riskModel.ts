/**
 * Cognitive risk prediction — a plain-TypeScript reimplementation of a
 * trained multinomial logistic regression (see /ml for the Python training
 * pipeline that produced riskModelWeights.ts). No server or Python runtime
 * needed: prediction is just standardize -> weighted sum -> softmax.
 */
import { GameSession } from '../types';
import { RISK_MODEL_WEIGHTS } from './riskModelWeights';

export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface RiskPrediction {
  label: RiskLevel;
  confidence: number; // 0-1, softmax probability of the predicted class
  probabilities: Record<RiskLevel, number>;
  topFactors: { feature: string; contribution: number }[]; // explainability
}

/** Build the model's raw feature vector from a single game session. */
function sessionToFeatureVector(session: GameSession): Record<string, number> {
  return {
    accuracy: session.accuracy,
    response_time_ms: session.responseTimeMs,
    errors: session.errors,
    level: session.level,
    game_pattern: session.gameType === 'pattern' ? 1 : 0,
    game_word: session.gameType === 'word' ? 1 : 0,
    game_matching: session.gameType === 'matching' ? 1 : 0,
  };
}

/** Average feature values across a set of recent sessions (smooths noise). */
function averageFeatures(sessions: GameSession[]): Record<string, number> {
  const vectors = sessions.map(sessionToFeatureVector);
  const keys = RISK_MODEL_WEIGHTS.features;
  const avg: Record<string, number> = {};
  for (const k of keys) {
    avg[k] = vectors.reduce((sum, v) => sum + (v[k] ?? 0), 0) / vectors.length;
  }
  return avg;
}

function softmax(logits: number[]): number[] {
  const max = Math.max(...logits);
  const exps = logits.map((l) => Math.exp(l - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((e) => e / sum);
}

/**
 * Predict cognitive-decline risk from a patient's recent game sessions.
 * Uses the N most recent sessions (default 5) so risk reflects the current
 * trend rather than the patient's entire history.
 */
export function predictRisk(
  sessions: GameSession[],
  recentCount: number = 5
): RiskPrediction | null {
  if (!sessions || sessions.length === 0) return null;

  const recent = sessions.slice(0, recentCount);
  const features = averageFeatures(recent);
  const { classes, features: featureOrder, coef, intercept, scaler_mean, scaler_scale } =
    RISK_MODEL_WEIGHTS;

  // Standardize: (x - mean) / scale — must match the Python StandardScaler
  // used at training time exactly, or predictions will be wrong.
  const standardized = featureOrder.map(
    (f, i) => (features[f] - scaler_mean[i]) / scaler_scale[i]
  );

  // Linear score per class: intercept + dot(weights, standardized features)
  const logits = classes.map((_, classIdx) => {
    let z = intercept[classIdx];
    for (let i = 0; i < featureOrder.length; i++) {
      z += coef[classIdx][i] * standardized[i];
    }
    return z;
  });

  const probs = softmax(logits);
  const probabilities = Object.fromEntries(
    classes.map((c, i) => [c, probs[i]])
  ) as Record<RiskLevel, number>;

  const bestIdx = probs.indexOf(Math.max(...probs));
  const label = classes[bestIdx] as RiskLevel;

  // Explainability: which standardized features pushed hardest toward the
  // predicted class (this is the "not a black box" talking point).
  const contributions = featureOrder.map((f, i) => ({
    feature: f,
    contribution: coef[bestIdx][i] * standardized[i],
  }));
  contributions.sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution));

  return {
    label,
    confidence: probs[bestIdx],
    probabilities,
    topFactors: contributions.slice(0, 3),
  };
}
