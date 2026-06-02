import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BrandLogo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white p-1 shadow-[0_12px_34px_rgba(0,0,0,0.28)]",
          markClassName
        )}
      >
        <img src="/famex-logo.svg" alt="" className="h-full w-full object-contain" aria-hidden="true" />
      </span>
      <span className="font-heading text-xl font-bold tracking-tight">{siteConfig.name}</span>
    </span>
  );
}
