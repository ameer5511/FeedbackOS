import { SectionCard } from "@/components/ui/section-card";

type Trend = {
  month: string;
  volume: number;
};

export function TrendPanel({ trends }: { trends: Trend[] }) {
  const max = Math.max(...trends.map((trend) => trend.volume));

  return (
    <SectionCard className="h-full">
      <div className="border-b border-slate-200/80 pb-5">
        <p className="text-sm font-semibold text-slate-900">Momentum</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
          Theme activity over the last six months
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          This space is ready for `recharts` later, but already gives you a clean visual rhythm for
          trend analysis.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {trends.map((trend) => (
          <div key={trend.month} className="grid grid-cols-[72px_minmax(0,1fr)_52px] items-center gap-3">
            <span className="text-sm font-medium text-slate-500">{trend.month}</span>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#0f172a,#14b8a6,#38bdf8)]"
                style={{ width: `${(trend.volume / max) * 100}%` }}
              />
            </div>
            <span className="text-right text-sm font-semibold text-slate-900">{trend.volume}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-teal-100 bg-teal-50/80 p-5">
        <p className="text-sm font-semibold text-teal-800">Interpretation</p>
        <p className="mt-2 text-sm leading-6 text-teal-900/90">
          The strongest rise is concentrated around onboarding friction, which suggests a focused
          UX issue instead of a broad drop in satisfaction.
        </p>
      </div>
    </SectionCard>
  );
}
