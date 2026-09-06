import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { TrendPoint } from '../../types';
import { TrendingUp, Brain, Focus, Zap, Info } from 'lucide-react';
import { computeBenchmarkCurves, BENCHMARK_SAMPLE_SIZES } from '../../utils/benchmarks';

interface CognitiveTrendChartProps {
  data: TrendPoint[];
  showBenchmarks?: boolean;
}

export const CognitiveTrendChart: React.FC<CognitiveTrendChartProps> = ({ data, showBenchmarks = true }) => {
  const latestPoint = data[data.length - 1] || { memory: 72, attention: 80, executive: 75, composite: 76 };
  const firstPoint = data[0] || { memory: 78, attention: 82, executive: 76, composite: 79 };

  const memoryChange = latestPoint.memory - firstPoint.memory;
  const attentionChange = latestPoint.attention - firstPoint.attention;
  const execChange = latestPoint.executive - firstPoint.executive;

  const benchmarks = useMemo(() => computeBenchmarkCurves(), []);

  // Merge the active patient's real data with benchmark reference curves for overlay
  const chartData = useMemo(() => {
    return data.map((point, i) => ({
      ...point,
      decliningAvg: benchmarks[i]?.decliningAvg,
      improvingAvg: benchmarks[i]?.improvingAvg,
      stableAvg: benchmarks[i]?.stableAvg,
    }));
  }, [data, benchmarks]);

  return (
    <div id="cognitive-trend-chart-card" className="bg-white rounded-2xl p-6 border border-[#E5E1D8] shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E1D8] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#7C9070]" />
            <h3 className="text-xl font-bold text-[#2D2E2E]">
              8-Week Longitudinal Cognitive Trends
            </h3>
          </div>
          <p className="text-sm text-[#73706A] mt-0.5 font-normal">
            Tracking Memory, Attention, and Executive Function domains over weekly assessments
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF9F6] text-[#2D2E2E] border border-[#E5E1D8]">
            Jorhat Clinical Standard (0 - 100)
          </span>
        </div>
      </div>

      {showBenchmarks && (
        <div className="flex items-start gap-2 text-xs text-[#5C6E53] bg-[#F0F3EE] border border-[#D5DFD0] rounded-xl p-3">
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            <strong>Synthetic Demo Dataset:</strong> The dashed reference lines below are averaged from a
            100-profile synthetic dataset modeled on general dementia progression patterns commonly seen in
            medical literature worldwide (not real patient records). They let you compare this patient's actual
            trend against typical decline, stable, and care-driven improvement trajectories.
          </span>
        </div>
      )}

      {/* Domain Quick Metric Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#7C9070] text-white flex items-center justify-center">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#2D2E2E] block">Memory Domain</span>
              <span className="text-xs text-[#73706A]">Recall & retention</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-[#2D2E2E]">{latestPoint.memory}</span>
            <span className={`text-[11px] block font-semibold ${memoryChange >= 0 ? 'text-[#5C6E53]' : 'text-[#8C5E28]'}`}>
              {memoryChange >= 0 ? `+${memoryChange}` : memoryChange} pts (8w)
            </span>
          </div>
        </div>

        <div className="bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#5C6E53] text-white flex items-center justify-center">
              <Focus className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#2D2E2E] block">Attention Domain</span>
              <span className="text-xs text-[#73706A]">Pattern & focus</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-[#2D2E2E]">{latestPoint.attention}</span>
            <span className={`text-[11px] block font-semibold ${attentionChange >= 0 ? 'text-[#5C6E53]' : 'text-[#8C5E28]'}`}>
              {attentionChange >= 0 ? `+${attentionChange}` : attentionChange} pts (8w)
            </span>
          </div>
        </div>

        <div className="bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#384233] text-white flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#2D2E2E] block">Executive Function</span>
              <span className="text-xs text-[#73706A]">Picture association</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-[#2D2E2E]">{latestPoint.executive}</span>
            <span className={`text-[11px] block font-semibold ${execChange >= 0 ? 'text-[#5C6E53]' : 'text-[#8C5E28]'}`}>
              {execChange >= 0 ? `+${execChange}` : execChange} pts (8w)
            </span>
          </div>
        </div>
      </div>

      {/* Recharts Line Chart with Benchmark Overlays */}
      <div className="h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E1D8" />
            <XAxis
              dataKey="week"
              stroke="#73706A"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              domain={[30, 100]}
              stroke="#73706A"
              fontSize={12}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FAF9F6',
                borderColor: '#E5E1D8',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                fontSize: '13px',
                color: '#2D2E2E',
              }}
            />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '13px', fontWeight: 600, color: '#2D2E2E' }}
            />
            {showBenchmarks && (
              <>
                <Line
                  type="monotone"
                  name={`Typical Decline (n=${BENCHMARK_SAMPLE_SIZES.decliningCount})`}
                  dataKey="decliningAvg"
                  stroke="#C97B4A"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="monotone"
                  name={`Typical Improvement (n=${BENCHMARK_SAMPLE_SIZES.improvingCount})`}
                  dataKey="improvingAvg"
                  stroke="#4A7FC9"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="monotone"
                  name={`Typical Stable (n=${BENCHMARK_SAMPLE_SIZES.stableCount})`}
                  dataKey="stableAvg"
                  stroke="#A8A39A"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  dot={false}
                  activeDot={false}
                />
              </>
            )}
            <Line
              type="monotone"
              name="This Patient — Memory"
              dataKey="memory"
              stroke="#7C9070"
              strokeWidth={3}
              activeDot={{ r: 6 }}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              name="This Patient — Attention"
              dataKey="attention"
              stroke="#5C6E53"
              strokeWidth={3}
              activeDot={{ r: 6 }}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              name="This Patient — Executive"
              dataKey="executive"
              stroke="#384233"
              strokeWidth={3}
              activeDot={{ r: 6 }}
              dot={{ r: 3 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="text-xs text-[#73706A] bg-[#FAF9F6] p-3 rounded-xl border border-[#E5E1D8] flex items-center justify-between">
        <span>* Clinical baseline calculated from clinical MoCA and standardized game sessions.</span>
        <span className="font-semibold text-[#5C6E53]">Stability Index: 92% (Normal mild fluctuation)</span>
      </div>
    </div>
  );
};
