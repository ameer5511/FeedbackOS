import { StatusBadge } from "@/components/ui/status-badge";

type Theme = {
  name: string;
  sentiment: "positive" | "negative" | "neutral";
  count: number;
  summary: string;
  trend: string;
};

export function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <article className="rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,252,0.92))] p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-semibold text-slate-950">{theme.name}</p>
          <p className="mt-1 text-sm text-slate-500">{theme.count} mentions</p>
        </div>
        <StatusBadge sentiment={theme.sentiment}>{theme.sentiment}</StatusBadge>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{theme.summary}</p>

      <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Trend signal
          </p>
          <p className="mt-1 text-sm font-medium text-slate-900">{theme.trend}</p>
        </div>
        <div className="flex gap-1">
          {[36, 22, 48, 30, 56, 34].map((height, index) => (
            <span
              key={`${theme.name}-${index}`}
              className="w-2 rounded-full bg-[linear-gradient(180deg,#0f172a,#14b8a6)]"
              style={{ height }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
