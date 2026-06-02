"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { SectionChapterIntro, SectionDivider } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { processSectionConfig, processSteps } from "@/lib/site";

type ProcessIconName = (typeof processSteps)[number]["icon"];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" }
  })
};

function ProcessIcon({ name }: { name: ProcessIconName }) {
  const base = "h-5 w-5 text-primary";

  if (name === "audit") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "planning") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 9h8M8 13h5M8 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="m6 18 7-12 5 5-12 7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m14 7 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "marketing") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M4 15.5h3.5L17 8v8l-9.5-7.5H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M17 9.5c1.2.8 1.9 1.9 1.9 3s-.7 2.2-1.9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
      <path d="M5 14.5 10 9.5l3.2 3.2L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 11V7h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#08050e] py-32 md:py-40" aria-labelledby="process-section-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_0%,rgba(124,58,237,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]"
      />
      <div className="container-shell">
        <SectionChapterIntro
          label="PROCESS"
          titleId="process-section-title"
          title={processSectionConfig.headline}
          description={processSectionConfig.supportingText}
        />

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/16"
          />

          <div className="relative">
            <div className="relative">
              <motion.svg
                aria-hidden="true"
                viewBox="0 0 1000 180"
                className="pointer-events-none absolute left-0 top-1/2 hidden h-[170px] w-full -translate-y-1/2 lg:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
              >
                <motion.path
                  d="M40 120 C 170 35, 280 35, 390 95 C 490 150, 610 145, 705 85 C 790 35, 875 40, 960 100"
                  stroke="url(#processGradient)"
                  strokeWidth="2.6"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.3, ease: "easeInOut", delay: 0.15 }}
                />
                <defs>
                  <linearGradient id="processGradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(124,58,237,0.2)" />
                    <stop offset="0.5" stopColor="rgba(168,85,247,0.85)" />
                    <stop offset="1" stopColor="rgba(124,58,237,0.2)" />
                  </linearGradient>
                </defs>
              </motion.svg>

              <ol className="grid gap-4 lg:grid-cols-5">
                {processSteps.map((step, index) => (
                  <motion.li
                    key={step.id}
                    custom={0.18 + index * 0.08}
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    whileHover={{ y: -4 }}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-border/75 bg-surface/75 p-4 transition duration-300 sm:p-5",
                      index % 2 === 1 && "lg:mt-10"
                    )}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(130deg, rgba(124,58,237,0.16) 0%, rgba(168,85,247,0.08) 52%, rgba(0,0,0,0) 100%)"
                      }}
                    />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                          {step.id}
                        </span>
                        <span className="rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">
                          {step.badge}
                        </span>
                      </div>

                      <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/10">
                        <ProcessIcon name={step.icon} />
                      </div>

                      <h3 className="mt-4 font-heading text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                      <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/75">
                        {step.metric}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

            <motion.div
              custom={0.42}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <LinkButton href="/book-a-call">Book a Call</LinkButton>
              <LinkButton href="/contact" variant="outline">
                Let&apos;s Build Your Growth System
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
