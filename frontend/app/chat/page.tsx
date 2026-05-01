import { ChatPlayground } from "@/components/chat/chat-playground";
import { AppShell } from "@/components/ui/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { getChatSeedData } from "@/lib/api";

export default async function ChatPage() {
  const seedData = await getChatSeedData();

  return (
    <AppShell contentClassName="flex min-h-[calc(100vh-3rem)] flex-col">
      <div className="flex flex-1 flex-col gap-8">
        <PageHeader
          eyebrow="AI assistant"
          title="Ask Feedback AI"
          description="Explore customer sentiment with natural questions, then inspect the quotes behind each answer before you act."
        />
        <ChatPlayground initialMessages={seedData} />
      </div>
    </AppShell>
  );
}
