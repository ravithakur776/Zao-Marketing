"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-heading";
import { finalCtaConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="chapter-section" aria-labelledby="final-cta-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,hsl(var(--primary)/0.15),transparent_34%),radial-gradient(circle_at_50%_90%,hsl(var(--accent)/0.09),transparent_42%)]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(120deg, hsl(var(--primary) / 0.12), transparent 35%, hsl(var(--accent) / 0.11) 68%, transparent)"
        }}
        animate={{ x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-shell">
        <div className="premium-panel relative overflow-hidden rounded-3xl p-7 sm:p-10 md:p-12 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/14 via-transparent to-accent/18"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.7fr] lg:items-end lg:gap-10">
            <header className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xs font-semibold uppercase tracking-[0.32em] text-primary sm:text-sm"
              >
                FINAL CTA
              </motion.p>

              <motion.h2
                id="final-cta-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.06, ease: "easeOut" }}
                className="mt-5 max-w-4xl font-heading text-[2.5rem] font-bold leading-[0.98] text-balance sm:text-5xl lg:text-[5.4rem]"
              >
                {finalCtaConfig.headline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
                className="mt-4 text-lg font-semibold text-primary sm:text-xl"
              >
                {finalCtaConfig.subheadline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
                className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg"
              >
                {finalCtaConfig.supportingText}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <LinkButton
                  href="/contact"
                  onClick={() => trackEvent("lead", "final_cta_contact_us")}
                  className="min-w-[210px]"
                >
                  Contact Us
                </LinkButton>
                <LinkButton
                  href="/plans"
                  variant="outline"
                  onClick={() => trackEvent("lead", "final_cta_view_plans")}
                  className="min-w-[190px]"
                >
                  View Plans
                </LinkButton>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="mt-5 max-w-2xl text-xs text-muted sm:text-sm"
              >
                {finalCtaConfig.trustMicrocopy}
              </motion.p>
            </header>

            <motion.aside
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
              className="relative"
            >
              <div className="premium-inset rounded-3xl p-6 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Growth Partner</p>
                <p className="mt-4 font-heading text-3xl font-semibold leading-tight">Content, design, ads, websites, and systems working together.</p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  One focused partner connecting creative production, marketing execution, and digital systems around measurable growth.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
