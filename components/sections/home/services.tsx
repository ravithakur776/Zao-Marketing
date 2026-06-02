"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";
import { SectionChapterIntro, SectionDivider } from "@/components/ui/section-heading";
import { servicesSectionConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay, ease: "easeOut" }
  })
};

type ServiceShowcase = {
  id: string;
  number: string;
  title: string;
  description: string;
  outcome: string;
  href: string;
  images: readonly { src: string; label: string; shape?: "portrait" | "landscape" | "square" }[];
};

const serviceShowcase = [
  {
    id: "web",
    number: "01",
    title: "Web Development",
    outcome: "High-Converting Websites",
    description:
      "Premium websites and product experiences built to turn attention into qualified leads with clean storytelling, fast performance, and conversion-focused structure.",
    href: "/services",
    images: [
      { src: "/portfolio/web/ecofuture-homepage.png", label: "EcoFuture Website", shape: "landscape" },
      { src: "/portfolio/web/lions-fitness-project.png", label: "Lions Fitness Project", shape: "landscape" }
    ]
  },
  {
    id: "reels",
    number: "02",
    title: "Reel Editing",
    outcome: "50K+ Views Generated",
    description:
      "Short-form content systems with real reel edits, scroll-stopping hooks, and polished pacing designed to increase visibility and audience engagement.",
    href: "/services",
    images: [
      { src: "/portfolio/reels/bnp-library-exterior.png", label: "BNP Exterior Reel", shape: "portrait" },
      { src: "/portfolio/reels/bnp-library-study-cabin.png", label: "Study Cabin Reel", shape: "portrait" },
      { src: "/portfolio/reels/rotigo-restaurant-reel.png", label: "Restaurant Reel", shape: "portrait" },
      { src: "/portfolio/reels/real-estate-reel.png", label: "Real Estate Reel", shape: "portrait" }
    ]
  },
  {
    id: "social",
    number: "03",
    title: "Social Media Management",
    outcome: "Consistent Brand Growth",
    description:
      "Structured content calendars, brand creatives, and growth-led publishing systems that make your social presence feel consistent, credible, and active.",
    href: "/services",
    images: [
      { src: "/portfolio/reels/bnp-library-exterior.png", label: "BNP Content", shape: "square" },
      { src: "/portfolio/social/motivational-post.jpg", label: "Motivational Post", shape: "square" },
      { src: "/portfolio/social/marketing-post-1.jpg", label: "Marketing Post", shape: "square" },
      { src: "/portfolio/social/brand-creative-1.jpg", label: "Brand Creative", shape: "square" },
      { src: "/portfolio/social/brand-creative-2.jpg", label: "Campaign Creative", shape: "square" },
      { src: "/portfolio/social/marketing-post-2.jpg", label: "Growth Post", shape: "square" }
    ]
  },
  {
    id: "ads",
    number: "04",
    title: "Meta Ads",
    outcome: "Qualified Leads & Reach Growth",
    description:
      "Performance-focused ad creative and campaign execution for brands that need sharper offers, stronger reach, and measurable lead generation.",
    href: "/services",
    images: [
      { src: "/portfolio/ads/fitness-poster.jpg", label: "Fitness Poster", shape: "portrait" },
      { src: "/portfolio/ads/food-biryani.jpg", label: "Food Creative", shape: "portrait" },
      { src: "/portfolio/ads/burger-promo.jpg", label: "Promo Ad", shape: "portrait" },
      { src: "/portfolio/ads/promotional-creative.jpg", label: "Campaign Ad", shape: "portrait" }
    ]
  },
  {
    id: "design",
    number: "05",
    title: "Graphic Design",
    outcome: "Sharper Campaign Assets",
    description:
      "Posters, social creatives, and promotional visuals that translate strategy into polished assets your audience can understand quickly.",
    href: "/services",
    images: [
      { src: "/portfolio/social/brand-creative-3.jpg", label: "Brand Creative", shape: "square" },
      { src: "/portfolio/ads/food-pizza.jpg", label: "Food Poster", shape: "portrait" },
      { src: "/portfolio/social/creative-01.png", label: "Creative Asset", shape: "square" },
      { src: "/portfolio/social/creative-02.jpg", label: "Social Design", shape: "square" }
    ]
  },
  {
    id: "logo",
    number: "06",
    title: "Logo Design",
    outcome: "Stronger Brand Identity",
    description:
      "Clean logo concepts, monograms, and identity marks presented with a premium system that helps brands look sharper and more trustworthy.",
    href: "/services",
    images: [
      { src: "/portfolio/logos/monogram-logo.jpg", label: "Monogram Logo", shape: "square" },
      { src: "/portfolio/logos/epw-logo.jpg", label: "Logo Mark", shape: "square" }
    ]
  }
] as const satisfies readonly ServiceShowcase[];

function ViewServiceLink({ href }: { href: string }) {
  return (
    <Link href={href} className="group/link inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary">
      View Service
      <span aria-hidden="true" className="transition duration-300 group-hover/link:translate-x-1">
        →
      </span>
    </Link>
  );
}

function ServicePreview({ service }: { service: ServiceShowcase }) {
  if (service.id === "web") {
    return (
      <div className="relative h-full p-4 sm:p-6">
        <div className="rounded-[1.35rem] border border-white/15 bg-gradient-to-b from-white/14 to-white/[0.04] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.045] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="group/web aspect-[16/10] overflow-hidden">
              <motion.div
                className="flex h-full w-[200%]"
                animate={{ x: ["0%", "-50%", "0%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                {service.images.map((image) => (
                  <div key={image.src} className="relative h-full w-1/2">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="h-full w-full object-cover transition duration-700 group-hover/web:scale-[1.035]"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {image.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-3 w-[72%] rounded-b-full bg-white/[0.08]" />
      </div>
    );
  }

  if (service.id === "social") {
    return (
      <div className="h-full p-4 sm:p-6">
        <div className="mx-auto max-w-md rounded-[1.55rem] border border-white/10 bg-black/35 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-3">
            <img src="/portfolio/logos/monogram-logo.jpg" alt="Brand profile" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold text-foreground">Famex Content System</p>
              <p className="text-xs text-muted">Real social assets</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {service.images.map((image, index) => (
              <motion.div
                key={image.src}
                className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-black"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.035 }}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (service.id === "logo") {
    return (
      <div className="grid h-full place-items-center p-5">
        <div className="grid w-full max-w-md grid-cols-2 gap-4">
          {service.images.map((image, index) => (
            <motion.div
              key={image.src}
              className="grid aspect-square place-items-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.34)]"
              initial={{ opacity: 0, rotate: index === 0 ? -3 : 3, y: 14 }}
              whileInView={{ opacity: 1, rotate: index === 0 ? -1 : 1, y: 0 }}
              whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img src={image.src} alt={image.label} className="h-full w-full object-contain p-4" loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden p-4 sm:p-6">
      <div className="flex h-full items-center justify-center gap-3 sm:gap-4">
        {service.images.map((image, index) => (
          <motion.div
            key={image.src}
            className={cn(
              "group/asset relative shrink-0 overflow-hidden border border-white/14 bg-black shadow-[0_22px_70px_rgba(0,0,0,0.36)]",
              image.shape === "portrait" ? "h-[17rem] w-[9.5rem] rounded-[1.45rem]" : "h-[10rem] w-[10rem] rounded-[1.25rem]"
            )}
            initial={{ opacity: 0, y: 18, rotate: index % 2 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 1.5 : -1.5 }}
            whileHover={{ y: -8, rotate: 0, scale: 1.045 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.055, ease: "easeOut" }}
          >
            <img
              src={image.src}
              alt={image.label}
              className="h-full w-full object-cover transition duration-700 group-hover/asset:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
            <p className="absolute inset-x-3 bottom-3 text-xs font-semibold text-white">{image.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const activeService = serviceShowcase[activeIndex];

  return (
    <section id="services" className="relative overflow-hidden bg-[#06030b] py-32 md:py-40" aria-labelledby="services-section-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:62px_62px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_22%,rgba(124,58,237,0.045))]"
      />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />

      <div className="container-shell">
        <div className="relative">
          <SectionChapterIntro
            label="SERVICES"
            titleId="services-section-title"
            title={servicesSectionConfig.headline}
            description={servicesSectionConfig.supportingText}
          />

          <motion.div
            custom={0.18}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.16 }}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setGlow({
                x: ((event.clientX - rect.left) / rect.width) * 100,
                y: ((event.clientY - rect.top) / rect.height) * 100
              });
            }}
            className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-6 lg:p-8"
            style={
              {
                "--glow-x": `${glow.x}%`,
                "--glow-y": `${glow.y}%`
              } as CSSProperties
            }
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--glow-x)_var(--glow-y),rgba(168,85,247,0.18),transparent_30%)]"
            />

            <div className="relative grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
              <div className="space-y-3">
                {serviceShowcase.map((service, index) => (
                  <motion.button
                    key={service.id}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    whileHover={{ x: 4 }}
                    className={cn(
                      "group/service w-full rounded-[1.35rem] border p-4 text-left transition duration-300 sm:p-5",
                      activeIndex === index
                        ? "border-primary/35 bg-primary/[0.09] shadow-[0_18px_58px_rgba(124,58,237,0.16)]"
                        : "border-white/10 bg-black/20 hover:border-primary/24 hover:bg-white/[0.045]"
                    )}
                  >
                    <div className="grid gap-4 sm:grid-cols-[4.25rem_1fr]">
                      <span
                        className={cn(
                          "font-mono text-sm font-semibold tracking-[0.16em] transition duration-300",
                          activeIndex === index ? "text-primary" : "text-foreground/38 group-hover/service:text-primary/80"
                        )}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                          {service.title}
                        </h3>
                        <motion.p
                          animate={{ height: activeIndex === index ? "auto" : 0, opacity: activeIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.26, ease: "easeOut" }}
                          className="mt-3 overflow-hidden text-sm leading-6 text-muted"
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="relative min-h-[30rem] overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/30 shadow-[0_22px_80px_rgba(0,0,0,0.32)]"
              >
                <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/35 px-5 py-4 backdrop-blur-xl">
                  <div>
                    <p className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">{activeService.number}</p>
                    <h3 className="mt-1 font-heading text-2xl font-semibold text-foreground">{activeService.title}</h3>
                  </div>
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                    {activeService.outcome}
                  </span>
                </div>

                <div className="h-full pt-24">
                  <ServicePreview service={activeService} />
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-wrap items-end justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                  <p className="max-w-xl text-sm leading-6 text-muted">{activeService.description}</p>
                  <ViewServiceLink href={activeService.href} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
