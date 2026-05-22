"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingPreviewConfig, pricingPreviewPlans } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" }
  })
};

type Plan = (typeof pricingPreviewPlans)[number];

function FeatureCheck() {
  return (
    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-primary/10 text-primary">
      <svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
        <path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.article
      custom={0.16 + index * 0.08}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border p-5 shadow-panel transition duration-300 sm:p-6",
        plan.featured
          ? "border-primary/55 bg-gradient-to-br from-primary/14 via-surface/80 to-accent/12 lg:-mt-2 lg:mb-2"
          : "border-border/75 bg-surface/75 hover:border-primary/35"
      )}
    >
      <motion.div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl",
          plan.featured ? "bg-primary/30" : "bg-primary/15"
        )}
        animate={{ y: [0, -8, 0], x: [0, 7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-heading text-2xl font-semibold">{plan.name}</h3>
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]",
              plan.featured
                ? "border-primary/45 bg-primary/15 text-primary"
                : "border-border/70 bg-background/55 text-muted"
            )}
          >
            {plan.badge}
          </span>
        </div>

        <p className="mt-4 font-heading text-4xl font-bold text-primary">{plan.price}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-foreground/70">Project-based investment</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{plan.description}</p>

        <p className="mt-4 rounded-xl border border-border/70 bg-background/55 px-3 py-2 text-xs uppercase tracking-[0.1em] text-foreground/80">
          {plan.highlight}
        </p>

        <ul className="mt-5 space-y-2.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
              <FeatureCheck />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <LinkButton
            href="/book-a-call"
            onClick={() => trackEvent("callBooked", `pricing_${plan.name.toLowerCase()}_book_call`)}
            className="w-full px-4 py-2.5 text-sm"
          >
            Book a Call
          </LinkButton>
          <LinkButton
            href="/pricing"
            variant="outline"
            onClick={() => trackEvent("lead", `pricing_${plan.name.toLowerCase()}_choose_plan`)}
            className="w-full px-4 py-2.5 text-sm"
          >
            Choose Plan
          </LinkButton>
        </div>
      </div>
    </motion.article>
  );
}

export function PricingPreviewSection() {
  return (
    <section id="pricing-preview" className="pb-20 md:pb-24" aria-labelledby="pricing-preview-title">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/16"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {pricingPreviewConfig.label}
            </motion.p>

            <motion.h2
              id="pricing-preview-title"
              custom={0.06}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl"
            >
              {pricingPreviewConfig.headline}
            </motion.h2>

            <motion.p
              custom={0.12}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-3 max-w-2xl text-sm text-muted sm:text-base"
            >
              {pricingPreviewConfig.supportingText}
            </motion.p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {pricingPreviewPlans.map((plan, index) => (
                <PricingCard key={plan.name} plan={plan} index={index} />
              ))}
            </div>

            <motion.div
              custom={0.38}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <LinkButton href="/book-a-call">Book a Call</LinkButton>
              <LinkButton href="/pricing" variant="outline">
                Compare Full Plan Details
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
