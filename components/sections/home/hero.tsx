"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { trackEvent } from "@/lib/tracking";

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const child = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: "easeOut" }
  }
};

const dashboardMetrics = [
  { label: "Website Traffic", value: 82, suffix: "%", detail: "Qualified visits" },
  { label: "Leads Generated", value: 1240, suffix: "+", detail: "Pipeline growth" },
  { label: "Conversion Rate", value: 14.8, suffix: "%", detail: "Landing pages" },
  { label: "Revenue Growth", value: 68, suffix: "%", detail: "Quarterly lift" }
] as const;

const channelMetrics = [
  { label: "Social Media Growth", value: "+47%" },
  { label: "Marketing ROI", value: "3.8x" }
] as const;

function AnimatedCounter({
  value,
  suffix,
  decimals = 0
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <>
      {displayValue.toLocaleString("en-US", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals
      })}
      {suffix}
    </>
  );
}

function AnalyticsDashboard() {
  return (
    <motion.aside
      variants={child}
      className="relative mx-auto w-full max-w-3xl [perspective:1400px] lg:ml-auto lg:max-w-none"
      aria-label="Famex Marketing growth analytics dashboard"
    >
      <div className="absolute -inset-x-5 top-12 h-72 rounded-full bg-primary/[0.07] blur-3xl" aria-hidden="true" />

      <motion.div
        className="relative"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative mx-auto w-full origin-top lg:scale-[0.88] 2xl:scale-100"
          whileHover={{ rotateX: 1.5, rotateY: -2.5, y: -3 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="premium-panel relative mx-auto rounded-[1.65rem] bg-gradient-to-b from-foreground/[0.08] via-surface/80 to-surface/55 p-1.5 sm:p-2">
            <div className="absolute left-1/2 top-2 z-10 h-2 w-20 -translate-x-1/2 rounded-b-xl bg-foreground/55" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.2rem] border border-border/80 bg-[hsl(var(--panel-muted))] p-2.5 sm:p-3">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,hsl(var(--foreground)/0.09),transparent_24%,transparent_74%,hsl(var(--foreground)/0.035)),radial-gradient(circle_at_24%_18%,hsl(var(--primary)/0.12),transparent_34%)]"
              />
              <div className="premium-panel relative rounded-[1rem] p-3 sm:p-4">
                <div className="flex items-center justify-between gap-4 border-b border-border/80 pb-3">
                  <div>
                    <p className="text-[0.62rem] font-medium uppercase text-muted">Famex Growth OS</p>
                    <h2 className="mt-1 font-heading text-base font-semibold text-foreground sm:text-lg">Performance snapshot</h2>
                  </div>
                  <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold text-primary">
                    Q3 Growth
                  </div>
                </div>

                <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_0.95fr]">
                  <div className="premium-inset rounded-2xl p-3.5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.68rem] font-medium uppercase text-muted">Revenue Growth</p>
                        <p className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground">
                          <AnimatedCounter value={68} suffix="%" />
                        </p>
                      </div>
                      <div className="rounded-full border border-border/80 bg-surface/75 px-3 py-1 text-[0.65rem] font-semibold text-primary">
                        +24% MoM
                      </div>
                    </div>

                    <div className="mt-4 h-32 sm:h-40">
                      <svg viewBox="0 0 560 230" className="h-full w-full overflow-visible" role="img" aria-label="Animated growth trend line chart">
                        <defs>
                          <linearGradient id="hero-chart-line" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="58%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#e9d5ff" />
                          </linearGradient>
                          <linearGradient id="hero-chart-fill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {[44, 88, 132, 176, 220].map((y) => (
                          <line key={y} x1="8" x2="552" y1={y} y2={y} stroke="hsl(var(--border))" strokeOpacity="0.65" strokeWidth="1" />
                        ))}

                        <motion.path
                          d="M 18 192 C 76 172, 96 142, 148 148 C 210 155, 222 104, 278 107 C 348 111, 358 62, 420 66 C 480 70, 498 38, 542 30 L 542 220 L 18 220 Z"
                          fill="url(#hero-chart-fill)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                        />
                        <motion.path
                          d="M 18 192 C 76 172, 96 142, 148 148 C 210 155, 222 104, 278 107 C 348 111, 358 62, 420 66 C 480 70, 498 38, 542 30"
                          fill="none"
                          stroke="url(#hero-chart-line)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
                        />
                        {[18, 148, 278, 420, 542].map((x, index) => {
                          const points = [192, 148, 107, 66, 30];

                          return (
                            <motion.circle
                              key={x}
                              cx={x}
                              cy={points[index]}
                              r="4"
                              fill="hsl(var(--primary))"
                              stroke="hsl(var(--panel))"
                              strokeWidth="3"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.35, delay: 0.82 + index * 0.1, ease: "easeOut" }}
                            />
                          );
                        })}
                      </svg>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    {dashboardMetrics.map((metric, index) => (
                      <motion.article
                        key={metric.label}
                        className="premium-panel-muted rounded-2xl p-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease: "easeOut" }}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[0.68rem] text-muted">{metric.label}</p>
                            <p className="mt-1 font-heading text-lg font-bold text-foreground">
                              <AnimatedCounter value={metric.value} suffix={metric.suffix} decimals={metric.value % 1 ? 1 : 0} />
                            </p>
                          </div>
                          <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-primary/80 to-primary/10" aria-hidden="true" />
                        </div>
                        <p className="mt-1 text-[0.65rem] text-muted/85">{metric.detail}</p>
                      </motion.article>
                    ))}
                  </div>
                </div>

                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {channelMetrics.map((metric) => (
                    <div key={metric.label} className="premium-inset flex items-center justify-between rounded-2xl px-3.5 py-3">
                      <span className="text-xs text-muted">{metric.label}</span>
                      <span className="font-heading text-base font-semibold text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto h-4 w-[92%] rounded-b-[2rem] bg-gradient-to-b from-foreground/15 to-foreground/[0.04] shadow-[0_20px_42px_hsl(var(--shadow-color)/0.18)]">
            <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-xl bg-foreground/25" aria-hidden="true" />
          </div>
          <div className="mx-auto h-2 w-[78%] rounded-b-full bg-foreground/20 blur-[1px]" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </motion.aside>
  );
}

export function HomeHeroSection() {
  return (
    <section
      id="home-hero"
      aria-labelledby="home-hero-title"
      className="relative isolate -mt-20 overflow-hidden bg-background pb-20 pt-32 sm:pb-24 sm:pt-36 lg:min-h-[calc(100svh-1rem)] lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,hsl(var(--primary)/0.15),transparent_34%),radial-gradient(circle_at_84%_20%,hsl(var(--accent)/0.08),transparent_34%),linear-gradient(180deg,hsl(var(--background)/0.15),hsl(var(--background))_92%)]"
      />
      <div aria-hidden="true" className="chapter-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 opacity-25" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/80 to-transparent" />

      <div className="container-shell">
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14"
        >
          <header className="max-w-xl">
            <motion.p
              variants={child}
              className="inline-flex rounded-full border border-border/80 bg-surface/70 px-4 py-2 text-xs font-medium text-primary shadow-[0_8px_26px_hsl(var(--shadow-color)/0.07)] backdrop-blur-xl"
            >
              Strategy &bull; Design &bull; Growth
            </motion.p>

            <motion.h1
              id="home-hero-title"
              aria-label="Famex Marketing"
              variants={child}
              className="mt-7 font-heading text-5xl font-extrabold leading-[0.86] text-foreground sm:text-6xl lg:text-[4.15rem]"
            >
              <span className="block" aria-hidden="true">Famex</span>
              <span className="block font-bold text-foreground/95" aria-hidden="true">Marketing</span>
            </motion.h1>

            <motion.p variants={child} className="mt-7 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Helping brands scale through marketing, design, and digital growth systems.
            </motion.p>

            <motion.div variants={child} className="mt-10 flex flex-col gap-3.5 sm:flex-row">
              <LinkButton
                href="/contact"
                variant="primary"
                onClick={() => trackEvent("lead", "hero_contact_us")}
                className="min-h-12 w-full px-6 sm:w-auto"
              >
                Contact Us
              </LinkButton>
              <LinkButton
                href="/services"
                variant="outline"
                onClick={() => trackEvent("lead", "hero_explore_services")}
                className="min-h-12 w-full px-6 sm:w-auto"
              >
                Explore Services
              </LinkButton>
            </motion.div>

            <motion.p variants={child} className="mt-6 text-sm font-medium text-muted/85">
              Performance marketing that drives results.
            </motion.p>
          </header>

          <AnalyticsDashboard />
        </motion.div>
      </div>
    </section>
  );
}
