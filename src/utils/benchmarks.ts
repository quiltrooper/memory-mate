import { PatientDataset, TrendPoint } from '../types';
import { GENERATED_PATIENTS } from '../data/generatedPatients';

export interface BenchmarkPoint {
  week: string;
  decliningAvg: number;
  improvingAvg: number;
  stableAvg: number;
}

/**
 * Computes average composite-score curves across the synthetic demo dataset,
 * grouped by trend shape (declining / improving / stable).
 *
 * IMPORTANT: This is a SYNTHETIC DEMO DATASET modeled on general,
 * widely-documented dementia progression patterns seen in medical literature
 * worldwide — it is not derived from real patient records. It exists so a
 * caregiver adding a NEW real patient can visually compare that patient's
 * actual weekly cognitive trend against typical reference trajectories
 * (e.g. "is this patient tracking closer to the typical early-decline curve,
 * or the typical improving-under-care curve?").
 */
export function computeBenchmarkCurves(
  syntheticPatients: (PatientDataset & { trendShape: 'declining' | 'improving' | 'stable' })[] = GENERATED_PATIENTS
): BenchmarkPoint[] {
  const byShape: Record<'declining' | 'improving' | 'stable', TrendPoint[][]> = {
    declining: [],
    improving: [],
    stable: [],
  };

  syntheticPatients.forEach((p) => {
    byShape[p.trendShape].push(p.trendData);
  });

  const weekCount = syntheticPatients[0]?.trendData.length || 9;
  const weekLabels = syntheticPatients[0]?.trendData.map((t) => t.week) || [];

  const avgAtWeek = (curves: TrendPoint[][], weekIdx: number): number => {
    const values = curves
      .map((c) => c[weekIdx]?.composite)
      .filter((v): v is number => typeof v === 'number');
    if (values.length === 0) return 0;
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  };

  const result: BenchmarkPoint[] = [];
  for (let i = 0; i < weekCount; i++) {
    result.push({
      week: weekLabels[i] || `W${i + 1}`,
      decliningAvg: avgAtWeek(byShape.declining, i),
      improvingAvg: avgAtWeek(byShape.improving, i),
      stableAvg: avgAtWeek(byShape.stable, i),
    });
  }

  return result;
}

export const BENCHMARK_SAMPLE_SIZES = {
  get decliningCount() {
    return GENERATED_PATIENTS.filter((p) => p.trendShape === 'declining').length;
  },
  get improvingCount() {
    return GENERATED_PATIENTS.filter((p) => p.trendShape === 'improving').length;
  },
  get stableCount() {
    return GENERATED_PATIENTS.filter((p) => p.trendShape === 'stable').length;
  },
};
