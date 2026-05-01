import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/chat", label: "Chat" },
  { href: "/settings", label: "Settings" },
];

export function AppShell({
  children,
  contentClassName,
}: {
  children: ReactNode;
  contentClassName?: string;
}) {
  return (
    <div className="min-h-screen px-4 py-4 text-slate-950 sm:px-6 lg:px-8">
      <div className="app-surface mx-auto grid min-h-[calc(100vh-2rem)] max-w-[1540px] overflow-hidden lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="relative border-b border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.78))] px-5 py-6 lg:border-r lg:border-b-0 lg:px-6">
          <div className="grid-noise absolute inset-0 opacity-50" />
          <div className="relative flex h-full flex-col">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-teal-500/10">
                  <Image
                    src="/feedback-logo-leaf.png"
                    alt="FeedbackOS logo"
                    width={44}
                    height={44}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                    FeedbackOS
                  </p>
                  <p className="text-sm text-slate-500">Voice of customer workspace</p>
                </div>
              </div>
            </div>

            <nav className="mt-8 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">This week</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">+18%</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                More source-backed insights shared with the product team than last week.
              </p>
            </div>

            <div className="mt-auto hidden rounded-3xl bg-slate-950 p-5 text-white lg:block">
              <p className="text-sm font-semibold">Workspace pulse</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Negative sentiment is concentrated in onboarding and notification settings, not
                spread across the product.
              </p>
            </div>
          </div>
        </aside>

        <main className={cn("min-w-0 bg-white/35 p-4 sm:p-6 lg:p-8", contentClassName)}>
          {children}
        </main>
      </div>
    </div>
  );
}
