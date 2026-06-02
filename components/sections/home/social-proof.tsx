"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionChapterIntro, SectionDivider } from "@/components/ui/section-heading";
import { socialProofConfig, socialProofTestimonials } from "@/lib/site";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" }
  })
};

const metrics = [
  { value: 24, suffix: "+", label: "Projects Completed" },
  { value: 14, suffix: "+", label: "Happy Clients" },
  { value: 3200, suffix: "+", label: "Leads Generated" },
  { value: 168, suffix: "%", label: "Organic Traffic Growth" },
  { value: 42, suffix: "%", label: "Conversion Increase" },
  { value: 18, suffix: "+", label: "Websites Built" }
] as const;

const sliderItems = [...socialProofTestimonials, ...socialProofTestimonials];

function CountUpMetric({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let animationFrame = 0;
    const duration = 1300;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function SocialProofSection() {
  return (
    <section id="social-proof" className="relative overflow-hidden bg-[#07040d] py-32 md:py-40" aria-labelledby="social-proof-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,0.07),transparent_30%),radial-gradient(circle_at_84%_78%,rgba(168,85,247,0.045),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:52px_52px]"
      />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />

      <div className="container-shell">
        <div className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <SectionChapterIntro
              label="RESULTS"
              titleId="social-proof-title"
              title={socialProofConfig.headline}
              description={socialProofConfig.supportingText}
            />

            <motion.div
              custom={0.16}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-5"
            >
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {metrics.map((metric, index) => (
                  <motion.li
                    key={metric.label}
                    custom={0.2 + index * 0.04}
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.055]"
                  >
                    <p className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      <CountUpMetric value={metric.value} suffix={metric.suffix} />
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase text-muted">{metric.label}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            custom={0.28}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-8 overflow-hidden"
          >
            <div className="group relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#07040d] to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#07040d] to-transparent"
              />

              <div className="flex w-max gap-4 [animation:social-proof-slide_34s_linear_infinite] group-hover:[animation-play-state:paused]">
                {sliderItems.map((item, index) => (
                  <figure
                    key={`${item.name}-${index}`}
                    className="flex h-56 w-[20rem] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/[0.06] sm:w-[23rem]"
                  >
                    <blockquote className="text-sm leading-6 text-foreground/86">&ldquo;{item.quote}&rdquo;</blockquote>
                    <figcaption className="border-t border-white/10 pt-4">
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="mt-1 text-xs text-muted">{item.role}</p>
                      <p className="mt-1 text-xs font-medium text-primary">{item.companyType}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes social-proof-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
      `}</style>
    </section>
  );
}
