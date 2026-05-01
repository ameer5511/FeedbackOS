import { SectionCard } from "@/components/ui/section-card";

type Stat = {
  label: string;
  value: string;
  change: string;
  detail: string;
};

export function StatsOverview({ stats }: { stats: Stat[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <SectionCard key={stat.label} className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0f172a,#14b8a6,#38bdf8)]" />
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <p className="text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
              {stat.change}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{stat.detail}</p>
        </SectionCard>
      ))}
    </section>
  );
}
