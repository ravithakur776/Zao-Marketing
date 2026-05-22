"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeServices, servicesSectionConfig } from "@/lib/site";

type ServiceIconName = (typeof homeServices)[number]["icon"];

type ServiceCardProps = {
  icon: ServiceIconName;
  title: string;
  description: string;
  href: string;
  featured: boolean;
  delay: number;
};

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" }
  })
};

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const base = "h-5 w-5 text-primary";

  if (name === "web") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="7" cy="6.5" r="0.8" fill="currentColor" />
        <circle cx="10" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  if (name === "seo") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15.5 15.5 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 11.5 10.2 9.3 12.2 11.3 14 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "ads") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M4 15.5h3.5L17 8v8l-9.5-7.5H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M17 9.5c1.2.8 1.9 1.9 1.9 3s-.7 2.2-1.9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "social") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7.8 11.2 16.2 7.8M7.8 12.8l8.4 3.4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "brand") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M12 3 5 7v5c0 4.2 2.7 7.4 7 9 4.3-1.6 7-4.8 7-9V7l-7-4Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m9.2 12 1.8 1.8 3.8-3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
      <path d="M4 7h16M8 12h8M10 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ServiceCard({ icon, title, description, href, featured, delay }: ServiceCardProps) {
  return (
    <motion.article
      custom={delay}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border p-5 transition duration-300 sm:p-6",
        featured
          ? "border-primary/45 bg-gradient-to-br from-primary/12 via-surface/70 to-accent/12"
          : "border-border/75 bg-surface/70 hover:border-primary/35"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full blur-3xl",
          featured ? "bg-primary/30" : "bg-primary/15"
        )}
      />

      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/10">
          <ServiceIcon name={icon} />
        </div>
        <h3 className="mt-4 font-heading text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
          Learn more
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="pb-20 md:pb-24" aria-labelledby="services-section-title">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-4 h-56 w-56 rounded-full bg-accent/18 blur-3xl"
          />

          <div className="relative">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {servicesSectionConfig.label}
            </motion.p>

            <motion.h2
              id="services-section-title"
              custom={0.06}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl"
            >
              {servicesSectionConfig.headline}
            </motion.h2>

            <motion.p
              custom={0.12}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-3 max-w-2xl text-sm text-muted sm:text-base"
            >
              {servicesSectionConfig.supportingText}
            </motion.p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {homeServices.map((service, index) => (
                <ServiceCard key={service.title} {...service} delay={0.18 + index * 0.06} />
              ))}
            </div>

            <motion.div
              custom={0.35}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <LinkButton href="/services" variant="outline">
                See Services
              </LinkButton>
              <LinkButton href="/book-a-call">Book a Call</LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
