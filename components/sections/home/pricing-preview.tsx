"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { SectionChapterIntro, SectionDivider } from "@/components/ui/section-heading";
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

function ServiceCue({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border/80 bg-background/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
      {label}
    </span>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.article
      custom={0.16 + index * 0.08}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: plan.featured ? 1.015 : 1.01 }}
      className={cn(
        "group relative h-full overflow-hidden rounded-[1.75rem] border p-5 shadow-[0_24px_70px_hsl(var(--shadow-color)/0.12)] transition duration-300 sm:p-6",
        plan.featured
          ? "border-primary/55 bg-gradient-to-br from-primary/16 via-surface/80 to-accent/10 lg:-mt-4 lg:mb-4"
          : "border-border/80 bg-[hsl(var(--panel)/0.82)] hover:border-primary/35"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
          plan.featured ? "via-primary/70" : "via-border"
        )}
      />

      <div className="relative">
        <div className="flex min-h-11 items-start justify-between gap-3">
          <div>
            <p className="font-mono text-sm font-semibold tracking-[0.18em] text-primary">0{index + 1}</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold leading-tight md:text-3xl">{plan.name}</h3>
          </div>
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]",
              plan.featured
                ? "border-primary/45 bg-primary/15 text-primary"
                : "border-border/80 bg-background/65 text-muted"
            )}
          >
            {plan.badge}
          </span>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Best for</p>
        <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-muted">{plan.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {plan.groups.map((group) => (
            <ServiceCue key={group} label={group} />
          ))}
        </div>

        <p className="premium-inset mt-5 rounded-2xl px-4 py-3 text-sm font-semibold leading-6 text-foreground/90">
          {plan.highlight}
        </p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">Included services</p>
        <ul className="mt-4 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
              <FeatureCheck />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <LinkButton
            href="/contact"
            onClick={() => trackEvent("lead", `service_plan_${plan.name.toLowerCase().replaceAll(" ", "_")}`)}
            className="w-full px-4 py-3 text-sm"
            variant={plan.featured ? "primary" : "outline"}
          >
            {plan.cta}
          </LinkButton>
        </div>
      </div>
    </motion.article>
  );
}

export function PricingPreviewSection() {
  return (
    <section id="pricing-preview" className="chapter-section" aria-labelledby="pricing-preview-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.11),transparent_34%),linear-gradient(180deg,hsl(var(--foreground)/0.018),transparent_28%)]"
      />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 opacity-16" />
      <div className="container-shell">
        <SectionChapterIntro
          label="SERVICE PLANS"
          titleId="pricing-preview-title"
          title={pricingPreviewConfig.headline}
          description={pricingPreviewConfig.supportingText}
        />

        <div className="premium-panel relative mt-16 overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/16"
          />

          <div className="relative">
            <div className="grid gap-4 lg:grid-cols-3">
              {pricingPreviewPlans.map((plan, index) => (
                <PlanCard key={plan.name} plan={plan} index={index} />
              ))}
            </div>

            <motion.div
              custom={0.38}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <LinkButton href="/contact">Discuss Your Plan</LinkButton>
              <LinkButton href="/plans" variant="outline">
                Compare Full Service Plans
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
