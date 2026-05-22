"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { heroBadges, heroConfig, heroStats, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const ctaItems = [
  { label: "Book a Call", href: "/book-a-call" },
  { label: "Let's Work Together", href: "/contact" },
  { label: "Get Free Strategy Call", href: "/book-a-call" },
  { label: "Start Your Project", href: "/contact" }
] as const;

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09
    }
  }
};

const child = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" }
  }
};

export function HomeHeroSection() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=Hi%20Zao%20Marketing,%20I%20want%20to%20scale%20my%20brand.`;

  return (
    <section
      id="home-hero"
      aria-labelledby="home-hero-title"
      className="relative isolate flex min-h-[calc(100svh-5.5rem)] items-center overflow-hidden py-10 sm:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_82%_20%,rgba(168,85,247,0.2),transparent_36%),radial-gradient(circle_at_50%_88%,rgba(91,33,182,0.2),transparent_42%)]"
      />

      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[30px] border border-border/80 bg-surface/65 p-6 shadow-panel backdrop-blur-2xl sm:p-8 md:p-10 lg:p-12">
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/20" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />

          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            className="relative grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]"
          >
            <header>
              <motion.p
                variants={child}
                className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
              >
                {heroConfig.eyebrow}
              </motion.p>

              <motion.h1
                id="home-hero-title"
                variants={child}
                className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-[1.08] text-balance sm:text-5xl md:text-6xl"
              >
                {heroConfig.headline}
              </motion.h1>

              <motion.p variants={child} className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
                {heroConfig.subheadline}
              </motion.p>

              <motion.p variants={child} className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
                {heroConfig.supportingText}
              </motion.p>

              <motion.div variants={child} className="mt-8 grid gap-3 sm:grid-cols-2">
                {ctaItems.map((item, index) => (
                  <LinkButton
                    key={item.label}
                    href={item.href}
                    variant={index === 0 || index === 2 ? "primary" : "outline"}
                    onClick={() => {
                      if (item.href.includes("book-a-call")) {
                        trackEvent("callBooked", `hero_${item.label.toLowerCase().replace(/\\s+/g, "_")}`);
                      } else {
                        trackEvent("lead", `hero_${item.label.toLowerCase().replace(/\\s+/g, "_")}`);
                      }
                    }}
                    className="w-full min-h-12 px-5 text-sm"
                  >
                    {item.label}
                  </LinkButton>
                ))}
                <LinkButton href="/services" variant="ghost" className="sm:col-span-2 justify-start px-1 py-1 text-sm text-primary">
                  View Services
                </LinkButton>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("whatsappClick", "hero_secondary")}
                  className="sm:col-span-2 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:scale-[1.02] hover:bg-primary/15"
                >
                  WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>
              </motion.div>

              <motion.ul variants={child} className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted sm:text-sm">
                {heroConfig.trustPoints.map((point) => (
                  <li key={point} className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/55 px-3 py-1.5">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </motion.ul>

              <motion.ul variants={child} className="mt-4 flex flex-wrap gap-2">
                {heroBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-border/70 bg-background/45 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/85"
                  >
                    {badge}
                  </li>
                ))}
              </motion.ul>
            </header>

            <motion.aside variants={child} className="relative lg:pl-6">
              <div className="relative rounded-3xl border border-border/70 bg-background/45 p-4 shadow-panel backdrop-blur-2xl sm:p-5">
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-14 -top-10 h-36 w-36 rounded-full bg-primary/30 blur-3xl"
                  animate={{ x: [0, 8, 0], y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  aria-hidden="true"
                  className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-accent/30 blur-3xl"
                  animate={{ x: [0, -6, 0], y: [0, 12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative grid gap-4">
                  <motion.article
                    className="rounded-2xl border border-border/70 bg-surface/80 p-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-primary">Live Performance</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {heroStats.map((stat) => (
                        <div key={stat.label} className="rounded-lg border border-border/60 bg-background/60 p-2">
                          <p className="font-heading text-lg font-bold text-primary sm:text-xl">{stat.value}</p>
                          <p className="mt-0.5 text-[10px] text-muted">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.article>

                  <motion.article
                    className="rounded-2xl border border-border/70 bg-surface/75 p-4"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-primary">Growth Velocity</p>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 rounded-full bg-background/80">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: "22%" }}
                          animate={{ width: ["22%", "72%", "58%", "86%"] }}
                          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      <div className="h-2 rounded-full bg-background/80">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-violet-400 to-primary"
                          initial={{ width: "35%" }}
                          animate={{ width: ["35%", "68%", "78%", "62%"] }}
                          transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.article>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.article
                      className="rounded-2xl border border-border/70 bg-surface/75 p-4"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.12em] text-muted">Acquisition Cost</p>
                      <p className="mt-2 font-heading text-2xl font-bold text-foreground">-31%</p>
                      <p className="text-[11px] text-primary">Efficiency gain</p>
                    </motion.article>

                    <motion.article
                      className="relative overflow-hidden rounded-2xl border border-border/70 bg-surface/75 p-4"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.18 }}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute right-2 top-2 h-10 w-10 rounded-full border border-primary/25 bg-primary/10"
                      />
                      <p className="text-[11px] uppercase tracking-[0.12em] text-muted">Founder Oversight</p>
                      <p className="mt-2 font-heading text-2xl font-bold text-foreground">1:1</p>
                      <p className="text-[11px] text-primary">Direct execution</p>
                    </motion.article>
                  </div>
                </div>
              </div>

              <motion.div
                aria-hidden="true"
                className="absolute -bottom-5 right-6 hidden h-28 w-28 rounded-full border border-primary/30 bg-gradient-to-b from-primary/20 to-transparent md:block"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-x-3 bottom-2 h-12 rounded-t-full border border-primary/40 bg-primary/10" />
              </motion.div>
            </motion.aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
