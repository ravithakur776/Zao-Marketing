import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BrandLogo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/famex-logo.svg"
        alt=""
        width={48}
        height={48}
        className={cn("h-10 w-10 shrink-0 object-contain dark:invert", markClassName)}
        aria-hidden="true"
        priority
      />
      <span className="font-heading text-xl font-bold tracking-tight">{siteConfig.name}</span>
    </span>
  );
}
