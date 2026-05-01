import { EmailPreferences } from "@/components/settings/email-preferences";
import { WebhookCard } from "@/components/settings/webhook-card";
import { AppShell } from "@/components/ui/app-shell";
import { PageHeader } from "@/components/ui/page-header";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          eyebrow="Workspace controls"
          title="Settings"
          description="Manage how feedback enters the workspace and how your team stays informed about meaningful changes."
        />

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <WebhookCard />
          <EmailPreferences />
        </div>
      </div>
    </AppShell>
  );
}
