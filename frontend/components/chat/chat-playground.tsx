"use client";

import { useState } from "react";

import { SectionCard } from "@/components/ui/section-card";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
};

const cannedReply = {
  content:
    "The biggest frustration is still early onboarding. Users understand the value proposition, but they lose confidence when setup feels ambiguous or takes too many steps.",
  sources: [
    "I liked the product once it worked, but the first setup took way longer than expected.",
    "The onboarding flow looks clean, but I still was not sure which step actually mattered.",
    "It feels like there are too many decisions before I can get to the part I care about.",
  ],
};

export function ChatPlayground({ initialMessages }: { initialMessages: Message[] }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
      },
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content: cannedReply.content,
        sources: cannedReply.sources,
      },
    ]);
    setInput("");
  }

  return (
    <SectionCard className="flex min-h-[620px] flex-1 flex-col overflow-hidden p-0">
      <div className="border-b border-slate-200/80 px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">Conversation</p>
            <p className="mt-1 text-sm text-slate-600">
              Ask for trends, summaries, or what customers are signaling most strongly.
            </p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            Source-backed answers enabled
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto bg-[linear-gradient(180deg,rgba(248,250,252,0.88),rgba(255,255,255,0.96))] px-6 py-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
          >
            <div className="max-w-3xl">
              <div
                className={cn(
                  "rounded-[24px] px-5 py-4 text-sm leading-7 shadow-sm",
                  message.role === "user"
                    ? "bg-slate-950 text-white"
                    : "border border-slate-200 bg-white text-slate-800",
                )}
              >
                {message.content}
              </div>

              {message.role === "assistant" && message.sources?.length ? (
                <div className="mt-3 rounded-[22px] border border-teal-100 bg-teal-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
                    Sources
                  </p>
                  <div className="mt-3 grid gap-3">
                    {message.sources.map((source) => (
                      <blockquote
                        key={source}
                        className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm leading-6 text-slate-700"
                      >
                        &ldquo;{source}&rdquo;
                      </blockquote>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 bg-white/90 px-4 py-4 sm:px-6">
        <div className="flex gap-3 rounded-[24px] border border-slate-200 bg-slate-50 p-2 shadow-inner">
          <input
            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            placeholder="Ask what customers are struggling with, loving, or requesting..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button className="btn-primary px-4 py-3" onClick={handleSend} type="button">
            Send
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
