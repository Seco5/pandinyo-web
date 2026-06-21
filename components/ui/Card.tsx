import { ComponentProps } from "react";

export function Card({
  className = "",
  children,
  ...rest
}: ComponentProps<"div">) {
  return (
    <div
      className={`bg-surface border border-border rounded-3xl shadow-soft ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Pill({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-secondary ${className}`}
    >
      {children}
    </span>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs font-bold text-accent">
      {children}
    </span>
  );
}
