import Link from "next/link";
import { ComponentProps } from "react";

type Variant = "primary" | "outline" | "ghost" | "disabled";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-150 active:scale-[0.98] select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:bg-accent-deep shadow-soft hover:shadow-card",
  outline:
    "bg-surface text-primary border border-border hover:border-ink/30",
  ghost: "bg-transparent text-secondary hover:text-ink",
  disabled:
    "bg-border/60 text-muted cursor-not-allowed pointer-events-none",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href && variant !== "disabled") {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
