import { SectionCard } from "@/components/ui/section-card";

export function WebhookCard() {
  return (
    <SectionCard>
      <p className="text-sm font-semibold text-slate-900">Workspace webhook</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
        Route feedback into this workspace
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
        Connect forms, support tools, or internal workflows to send new customer feedback directly
        into FeedbackOS for theme extraction and AI search.
      </p>

      <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
        <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Webhook URL
        </label>
        <div className="mt-3 flex flex-col gap-3 lg:flex-row">
          <input
            readOnly
            value="https://api.feedbackos.app/webhooks/workspaces/ws_48ak19g7/ingest"
            className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
          />
          <button type="button" className="btn-secondary">
            Copy URL
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">Recommended payload</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Include message body, source, workspace ID, and timestamp so downstream theme analysis
            stays consistent.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">Delivery status</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Last event received 8 minutes ago from Intercom. Ingestion health looks stable.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
