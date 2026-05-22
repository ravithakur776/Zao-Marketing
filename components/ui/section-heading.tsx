import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ badge, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <header className={cn("max-w-3xl", align === "center" && "mx-auto text-center") }>
      {badge ? (
        <p className="mb-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {badge}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-muted md:text-lg">{description}</p> : null}
    </header>
  );
}
