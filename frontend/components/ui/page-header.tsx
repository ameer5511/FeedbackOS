import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-[28px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,249,255,0.78))] px-6 py-6 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.28)] sm:px-8 sm:py-7 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}
