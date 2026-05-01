import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-slate-200/80 bg-white/86 p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.25)] backdrop-blur",
        className,
      )}
    >
      {children}
    </section>
  );
}
