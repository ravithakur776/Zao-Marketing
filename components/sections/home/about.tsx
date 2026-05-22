"use client";

import { motion } from "framer-motion";
import {
  aboutExpertiseBadges,
  aboutFounderStory,
  aboutJourney,
  aboutSectionConfig,
  siteConfig
} from "@/lib/site";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" }
  })
};

export function AboutSection() {
  return (
    <section id="about" className="pb-20 md:pb-24" aria-labelledby="about-section-title">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-6 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <article>
              <motion.p
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
              >
                {aboutSectionConfig.label}
              </motion.p>

              <motion.h2
                id="about-section-title"
                custom={0.06}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl"
              >
                {aboutSectionConfig.headline}
              </motion.h2>

              <motion.p
                custom={0.12}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-3 max-w-2xl text-sm text-muted sm:text-base"
              >
                {aboutSectionConfig.supportingText}
              </motion.p>

              <motion.div
                custom={0.18}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-7 space-y-4 rounded-2xl border border-border/70 bg-background/45 p-5"
              >
                <h3 className="font-heading text-xl font-semibold">Founder Story</h3>
                <p className="text-sm leading-relaxed text-foreground/90">{aboutFounderStory.intro}</p>
                <p className="text-sm leading-relaxed text-muted">
                  Built by a <span className="text-foreground">{siteConfig.founderRole}</span> focused on practical execution, fast learning loops, and compounding growth.
                </p>
              </motion.div>

              <motion.div
                custom={0.24}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-5 grid gap-4 sm:grid-cols-2"
              >
                <article className="rounded-2xl border border-border/70 bg-surface/75 p-5">
                  <h3 className="font-heading text-lg font-semibold">Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{aboutFounderStory.mission}</p>
                </article>
                <article className="rounded-2xl border border-border/70 bg-surface/75 p-5">
                  <h3 className="font-heading text-lg font-semibold">Vision</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{aboutFounderStory.vision}</p>
                </article>
              </motion.div>

              <motion.ul
                custom={0.3}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {aboutExpertiseBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-border/70 bg-background/45 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.09em] text-foreground/80"
                  >
                    {badge}
                  </li>
                ))}
              </motion.ul>
            </article>

            <motion.aside
              custom={0.16}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-surface/75 p-5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/25 blur-3xl"
                />

                <div className="relative flex items-center gap-4">
                  <motion.div
                    aria-hidden="true"
                    className="relative h-16 w-16 overflow-hidden rounded-full border border-primary/40 bg-gradient-to-b from-primary/20 to-transparent"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-x-3 bottom-2 h-8 rounded-t-full border border-primary/35 bg-primary/15" />
                  </motion.div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-primary">Founder-led</p>
                    <p className="mt-1 font-heading text-lg font-semibold">Personal strategy. Premium execution.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-background/50 p-5">
                <h3 className="font-heading text-xl font-semibold">Journey</h3>
                <ol className="mt-4 space-y-4">
                  {aboutJourney.map((item, index) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                      className="grid grid-cols-[68px_1fr] gap-3"
                    >
                      <span className="inline-flex h-fit rounded-full border border-primary/40 bg-primary/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary">
                        {item.year}
                      </span>
                      <div className="rounded-xl border border-border/70 bg-surface/70 p-3">
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
