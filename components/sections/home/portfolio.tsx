"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { portfolioProjects, portfolioSectionConfig } from "@/lib/site";

type PortfolioCardProps = {
  category: string;
  title: string;
  description: string;
  techStack: readonly string[];
  previewHref: string;
  caseStudyHref: string;
  featured: boolean;
  metric: string;
  index: number;
};

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" }
  })
};

function ProjectMockup({ featured }: { featured: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/65 p-4">
      <motion.div
        aria-hidden="true"
        className="absolute -right-12 -top-10 h-32 w-32 rounded-full bg-primary/25 blur-3xl"
        animate={{ x: [0, 6, 0], y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative space-y-3">
        <div className="flex items-center justify-between rounded-xl border border-border/65 bg-surface/70 px-3 py-2">
          <span className="text-[11px] uppercase tracking-[0.12em] text-muted">Live Module</span>
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-[1.25fr_0.75fr] gap-3">
          <div className="space-y-2 rounded-xl border border-border/65 bg-surface/70 p-3">
            <div className="h-2.5 w-2/3 rounded-full bg-primary/45" />
            <div className="h-2 w-full rounded-full bg-foreground/20" />
            <div className="h-2 w-4/5 rounded-full bg-foreground/15" />
            <div className="mt-2 h-20 rounded-lg bg-gradient-to-br from-primary/20 via-accent/15 to-transparent" />
          </div>
          <div className="space-y-2 rounded-xl border border-border/65 bg-surface/70 p-3">
            <div className="h-10 rounded-lg bg-gradient-to-br from-primary/25 to-transparent" />
            <div className="h-10 rounded-lg bg-gradient-to-br from-accent/25 to-transparent" />
            <div className="h-10 rounded-lg bg-gradient-to-br from-primary/15 to-transparent" />
          </div>
        </div>

        <div className={cn("grid gap-2", featured ? "grid-cols-3" : "grid-cols-2")}>
          <div className="h-12 rounded-lg border border-border/60 bg-surface/75" />
          <div className="h-12 rounded-lg border border-border/60 bg-surface/75" />
          {featured ? <div className="h-12 rounded-lg border border-border/60 bg-surface/75" /> : null}
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({
  category,
  title,
  description,
  techStack,
  previewHref,
  caseStudyHref,
  featured,
  metric,
  index
}: PortfolioCardProps) {
  return (
    <motion.article
      custom={0.16 + index * 0.08}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/75 bg-surface/70 p-4 shadow-panel transition duration-300 sm:p-5",
        featured && "lg:col-span-2"
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.08) 45%, rgba(0,0,0,0) 100%)"
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
        animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            {category}
          </span>
          <span className="rounded-full border border-border/70 bg-background/55 px-3 py-1 text-[11px] font-medium text-muted">
            {metric}
          </span>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <ProjectMockup featured={featured} />
        </motion.div>

        <div>
          <h3 className="font-heading text-xl font-semibold sm:text-2xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {techStack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border/70 bg-background/45 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/80"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            href={previewHref}
            className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:scale-[1.02] hover:bg-primary/15"
          >
            Live Preview
            <span aria-hidden="true">↗</span>
          </Link>
          <Link
            href={caseStudyHref}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/65 px-4 py-2 text-sm font-semibold transition hover:border-primary/40 hover:text-primary"
          >
            Case Study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="pb-20 md:pb-24" aria-labelledby="portfolio-section-title">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/16"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {portfolioSectionConfig.label}
            </motion.p>

            <motion.h2
              id="portfolio-section-title"
              custom={0.06}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl"
            >
              {portfolioSectionConfig.headline}
            </motion.h2>

            <motion.p
              custom={0.12}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-3 max-w-2xl text-sm text-muted sm:text-base"
            >
              {portfolioSectionConfig.supportingText}
            </motion.p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {portfolioProjects.map((project, index) => (
                <PortfolioCard key={project.title} index={index} {...project} />
              ))}
            </div>

            <motion.div
              custom={0.36}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <LinkButton href="/services" variant="outline">
                View Full Portfolio
              </LinkButton>
              <LinkButton href="/contact">Start Your Project</LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
