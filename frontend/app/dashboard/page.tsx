import { StatsOverview } from "@/components/dashboard/stats-overview";
import { ThemeCard } from "@/components/dashboard/theme-card";
import { TrendPanel } from "@/components/dashboard/trend-panel";
import { AppShell } from "@/components/ui/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { getDashboardData } from "@/lib/api";

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          eyebrow="Feedback intelligence"
          title="Feedback Dashboard"
          description="A fast, high-signal summary of the themes shaping product sentiment across your workspace."
        />

        <StatsOverview stats={data.stats} />

        <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <SectionCard>
            <div className="flex flex-col gap-2 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                  Theme map
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Each card highlights volume, tone, and the takeaway your team should keep in
                  mind.
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">
                {data.themes.length} themes surfaced
              </p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {data.themes.map((theme) => (
                <ThemeCard key={theme.name} theme={theme} />
              ))}
            </div>
          </SectionCard>

          <TrendPanel trends={data.trends} />
        </section>
      </div>
    </AppShell>
  );
}
