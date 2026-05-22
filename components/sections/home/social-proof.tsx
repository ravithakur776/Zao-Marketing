"use client";

import { motion } from "framer-motion";
import {
  socialProofBadges,
  socialProofConfig,
  socialProofStats,
  socialProofTestimonials
} from "@/lib/site";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" }
  })
};

export function SocialProofSection() {
  return (
    <section id="social-proof" className="pb-20 md:pb-24" aria-labelledby="social-proof-title">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {socialProofConfig.label}
            </motion.p>

            <motion.h2
              id="social-proof-title"
              custom={0.06}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl"
            >
              {socialProofConfig.headline}
            </motion.h2>

            <motion.p
              custom={0.12}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-3 max-w-2xl text-sm text-muted sm:text-base"
            >
              {socialProofConfig.supportingText}
            </motion.p>

            <motion.ul
              custom={0.18}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3"
            >
              {socialProofBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-xl border border-border/70 bg-background/45 px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.11em] text-foreground/75 sm:text-xs"
                >
                  {badge}
                </li>
              ))}
            </motion.ul>

            <motion.ul
              custom={0.24}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {socialProofStats.map((stat) => (
                <li
                  key={stat.label}
                  className="group rounded-2xl border border-border/75 bg-surface/75 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/45"
                >
                  <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{stat.label}</p>
                </li>
              ))}
            </motion.ul>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {socialProofTestimonials.map((item, index) => (
                <motion.figure
                  key={item.name}
                  custom={0.3 + index * 0.06}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="group rounded-2xl border border-border/70 bg-background/55 p-5 transition duration-300 hover:border-primary/40 hover:bg-surface/80"
                >
                  <blockquote className="text-sm leading-relaxed text-foreground/90">“{item.quote}”</blockquote>
                  <figcaption className="mt-5 border-t border-border/70 pt-4">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.1em] text-muted">{item.role}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
