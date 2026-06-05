import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

type CommonProps = {
  className?: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type ActionButtonProps = CommonProps & {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

function getButtonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "group/button relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
    variant === "primary" &&
      "bg-gradient-to-r from-primary to-accent text-white shadow-[0_14px_38px_hsl(var(--primary)/0.24)] hover:scale-[1.02] hover:shadow-[0_18px_46px_hsl(var(--primary)/0.3)]",
    variant === "outline" &&
      "border border-border/90 bg-surface/75 text-foreground shadow-[0_8px_24px_hsl(var(--shadow-color)/0.07)] hover:border-primary/60 hover:bg-primary/[0.06] hover:text-primary",
    variant === "ghost" && "text-foreground/80 hover:text-primary",
    className
  );
}

export function LinkButton({ href, className, variant = "primary", onClick, children }: LinkButtonProps) {
  return (
    <Link href={href} data-magnetic="true" onClick={onClick} className={getButtonClasses(variant, className)}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_58%)] opacity-0 transition duration-300 group-hover/button:opacity-100"
      />
      {children}
    </Link>
  );
}

export function ActionButton({
  onClick,
  type = "button",
  className,
  variant = "primary",
  children
}: ActionButtonProps) {
  return (
    <button type={type} data-magnetic="true" onClick={onClick} className={getButtonClasses(variant, className)}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_58%)] opacity-0 transition duration-300 group-hover/button:opacity-100"
      />
      {children}
    </button>
  );
}
