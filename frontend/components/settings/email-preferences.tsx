import { SectionCard } from "@/components/ui/section-card";

const preferences = [
  {
    title: "Weekly digest",
    description: "Send a concise summary of the most important feedback shifts every Monday.",
    enabled: true,
  },
  {
    title: "Sentiment alerts",
    description: "Notify the team when negative feedback spikes around a specific theme.",
    enabled: true,
  },
  {
    title: "AI briefing notes",
    description: "Email a short AI-generated recap when a major product question gets answered.",
    enabled: false,
  },
];

export function EmailPreferences() {
  return (
    <SectionCard>
      <p className="text-sm font-semibold text-slate-900">Email preferences</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
        Control how your team hears about changes
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Keep alerts useful instead of noisy by matching notifications to the pace of your product
        workflow.
      </p>

      <div className="mt-6 space-y-4">
        {preferences.map((preference) => (
          <div
            key={preference.title}
            className="flex items-start justify-between gap-4 rounded-[24px] border border-slate-200 bg-slate-50/85 p-4"
          >
            <div>
              <p className="text-sm font-semibold text-slate-950">{preference.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{preference.description}</p>
            </div>
            <button
              type="button"
              aria-pressed={preference.enabled}
              className={`relative inline-flex h-8 w-14 shrink-0 rounded-full border transition ${
                preference.enabled
                  ? "border-teal-500 bg-teal-500"
                  : "border-slate-300 bg-slate-200"
              }`}
            >
              <span
                className={`mt-0.5 ml-0.5 block h-6 w-6 rounded-full bg-white shadow-sm transition ${
                  preference.enabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
