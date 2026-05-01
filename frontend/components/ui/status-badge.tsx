import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Sentiment = "positive" | "negative" | "neutral";

const sentimentStyles: Record<Sentiment, string> = {
  positive: "border-emerald-200 bg-emerald-50 text-emerald-700",
  negative: "border-rose-200 bg-rose-50 text-rose-700",
  neutral: "border-slate-200 bg-slate-100 text-slate-700",
};

export function StatusBadge({
  sentiment,
  children,
}: {
  sentiment: Sentiment;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold capitalize tracking-wide",
        sentimentStyles[sentiment],
      )}
    >
      {children}
    </span>
  );
}
