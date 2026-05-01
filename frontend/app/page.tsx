import Link from "next/link";

import { AppShell } from "@/components/ui/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";

const quickStats = [
  { label: "Feedback synced", value: "12.4k", detail: "Across 8 active sources" },
  { label: "Themes tracked", value: "36", detail: "Updated in the last 24 hours" },
  { label: "Questions answered", value: "284", detail: "With source-backed responses" },
];

const featuredThemes = [
  {
    name: "Onboarding clarity",
    sentiment: "negative" as const,
    summary: "New users still need more guidance in the first 10 minutes.",
  },
  {
    name: "Faster exports",
    sentiment: "positive" as const,
    summary: "Power users are noticing better export speed after the latest release.",
  },
  {
    name: "Notification noise",
    sentiment: "neutral" as const,
    summary: "Teams want more granular control before enabling alerts broadly.",
  },
];

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          eyebrow="Workspace overview"
          title="FeedbackOS gives your team a calm, fast view of what customers are really saying."
          description="Track themes, inspect evidence, and ask natural-language questions without jumping between spreadsheets, threads, and support tools."
          actions={
            <div className="flex flex-wrap gap-3">
              <Link className="btn-primary" href="/dashboard">
                Open dashboard
              </Link>
              <Link className="btn-secondary" href="/chat">
                Try AI chat
              </Link>
            </div>
          }
        />

        <section className="grid gap-4 md:grid-cols-3">
          {quickStats.map((stat) => (
            <SectionCard key={stat.label}>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-600">{stat.detail}</p>
            </SectionCard>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <SectionCard className="overflow-hidden">
            <div className="flex flex-col gap-3 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-teal-700">Why teams choose this view</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
                  A homepage that points straight to the important workflows
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Instead of a generic landing page, this home screen orients the team with
                product health, key themes, and direct paths into analysis.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(160deg,rgba(20,184,166,0.1),rgba(255,255,255,0.95))] p-5">
                <p className="text-sm font-semibold text-slate-900">Fast pattern detection</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Spot what is rising, what is fading, and which themes need a PM decision.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(160deg,rgba(14,165,233,0.1),rgba(255,255,255,0.95))] p-5">
                <p className="text-sm font-semibold text-slate-900">Evidence-backed answers</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  AI responses stay grounded with raw customer quotes attached to every answer.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(160deg,rgba(51,65,85,0.08),rgba(255,255,255,0.95))] p-5">
                <p className="text-sm font-semibold text-slate-900">Clean admin setup</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Webhooks and alerts are visible, understandable, and easy to adjust.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Featured themes</p>
                <p className="mt-1 text-sm text-slate-600">
                  What your team would likely inspect first.
                </p>
              </div>
              <Link
                className="text-sm font-semibold text-teal-700 hover:text-teal-800"
                href="/dashboard"
              >
                View all
              </Link>
            </div>
            <div className="mt-5 space-y-3">
              {featuredThemes.map((theme) => (
                <div
                  key={theme.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-950">{theme.name}</p>
                    <StatusBadge sentiment={theme.sentiment}>{theme.sentiment}</StatusBadge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{theme.summary}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      </div>
    </AppShell>
  );
}
