"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { SectionChapterIntro, SectionDivider } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { homeTestimonials, testimonialsSectionConfig } from "@/lib/site";

type Testimonial = (typeof homeTestimonials)[number];

type MarqueeRowProps = {
  items: readonly Testimonial[];
  speed?: number;
  reverse?: boolean;
};

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          fill={index < rating ? "currentColor" : "none"}
          className={cn("h-4 w-4", index < rating ? "text-primary" : "text-primary/35")}
          aria-hidden="true"
        >
          <path
            d="M10 2.5 12.3 7l4.9.7-3.5 3.4.8 4.9-4.5-2.4-4.5 2.4.8-4.9L2.8 7.7 7.7 7 10 2.5Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative w-[300px] shrink-0 rounded-2xl border border-border/75 bg-surface/75 p-5 shadow-panel backdrop-blur-xl sm:w-[340px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(130deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.08) 48%, rgba(0,0,0,0) 100%)"
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/45 bg-primary/10 text-sm font-semibold text-primary">
              {item.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">{item.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-muted">{item.role}</p>
            </div>
          </div>
          <RatingStars rating={item.rating} />
        </div>

        <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">“{item.quote}”</blockquote>
      </div>
    </motion.article>
  );
}

function MarqueeRow({ items, speed = 34, reverse = false }: MarqueeRowProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const [distance, setDistance] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) {
      return;
    }

    const update = () => {
      setDistance(node.scrollWidth / 2);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!distance || paused) {
      return;
    }

    const direction = reverse ? 1 : -1;
    const shift = (speed * delta) / 1000;
    const next = x.get() + shift * direction;

    if (!reverse && next <= -distance) {
      x.set(next + distance);
      return;
    }

    if (reverse && next >= 0) {
      x.set(next - distance);
      return;
    }

    x.set(next);
  });

  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-surface/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-surface/90 to-transparent" />

      <motion.ul ref={trackRef} style={{ x }} className="flex w-max gap-4 py-2">
        {doubled.map((item, index) => (
          <li key={`${item.name}-${index}`}>
            <TestimonialCard item={item} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#08050e] py-32 md:py-40" aria-labelledby="testimonials-section-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_0%,rgba(124,58,237,0.1),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_26%)]"
      />
      <div className="container-shell">
        <SectionChapterIntro
          label="TESTIMONIALS"
          titleId="testimonials-section-title"
          title={testimonialsSectionConfig.headline}
          description={testimonialsSectionConfig.supportingText}
        />

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/16"
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="mt-8 space-y-4"
            >
              <MarqueeRow items={homeTestimonials} speed={32} />
              <MarqueeRow items={homeTestimonials} speed={38} reverse />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <LinkButton href="/book-a-call">Book a Call</LinkButton>
              <LinkButton href="/contact" variant="outline">
                Let&apos;s Grow Your Brand
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
