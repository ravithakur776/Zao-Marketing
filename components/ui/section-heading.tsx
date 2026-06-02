"use client";

import { motion } from "framer-motion";
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

type SectionChapterIntroProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
};

const chapterReveal = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, delay, ease: "easeOut" }
  })
};

export function SectionChapterIntro({
  label,
  title,
  description,
  align = "left",
  className,
  titleId
}: SectionChapterIntroProps) {
  return (
    <header className={cn("relative max-w-5xl", align === "center" && "mx-auto text-center", className)}>
      <motion.p
        variants={chapterReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="text-xs font-semibold uppercase tracking-[0.32em] text-primary sm:text-sm"
      >
        {label}
      </motion.p>
      <motion.h2
        id={titleId}
        custom={0.06}
        variants={chapterReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-5 max-w-5xl font-heading text-[2rem] font-bold leading-[0.98] tracking-normal text-foreground sm:text-5xl lg:text-[5rem]"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          custom={0.12}
          variants={chapterReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={cn(
            "mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </header>
  );
}

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-x-0 top-0 h-px", className)}>
      <div className="mx-auto h-px w-[min(1120px,calc(100%-2rem))] bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      <div className="mx-auto h-10 w-[min(820px,70vw)] bg-primary/10 blur-3xl" />
    </div>
  );
}
