"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { SectionChapterIntro, SectionDivider } from "@/components/ui/section-heading";

const categories = ["All", "Reels", "Websites", "Creatives", "Branding", "Logos", "Ads"] as const;
type Category = (typeof categories)[number];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay, ease: "easeOut" }
  })
};

const webAssets = [
  { src: "/portfolio/web/ecofuture-homepage.png", label: "EcoFuture website screenshot" },
  { src: "/portfolio/web/lions-fitness-project.png", label: "Lions Fitness project screenshot" }
] as const;

const reelAssets = [
  { src: "/portfolio/reels/bnp-library-exterior.png", title: "BNP Library Exterior", metric: "50K Views" },
  { src: "/portfolio/reels/bnp-library-study-cabin.png", title: "Study Cabin Reel", metric: "120K Reach" },
  { src: "/portfolio/reels/rotigo-restaurant-reel.png", title: "Restaurant Reel", metric: "Local Reach" },
  { src: "/portfolio/reels/real-estate-reel.png", title: "Real Estate Reel", metric: "More Inquiries" },
  { src: "/portfolio/social/motivational-post.jpg", title: "Motivational Study Content", metric: "High Retention" },
  { src: "/portfolio/social/marketing-post-1.jpg", title: "Marketing Content", metric: "Brand Growth" }
] as const;

const creativeAssets = [
  { src: "/portfolio/ads/fitness-poster.jpg", title: "Gym Poster", type: "Poster Design" },
  { src: "/portfolio/ads/food-biryani.jpg", title: "RotiGo Creative", type: "Ad Creative" },
  { src: "/portfolio/ads/burger-promo.jpg", title: "Burger Promo", type: "Promotional Ad" },
  { src: "/portfolio/ads/food-pizza.jpg", title: "Food Creative", type: "Ad Creative" },
  { src: "/portfolio/ads/promotional-creative.jpg", title: "Campaign Creative", type: "Promotional Design" },
  { src: "/portfolio/social/brand-creative-1.jpg", title: "Brand Creative", type: "Social Design" },
  { src: "/portfolio/social/brand-creative-2.jpg", title: "Social Media Creative", type: "Social Design" },
  { src: "/portfolio/social/brand-creative-3.jpg", title: "Marketing Post", type: "Social Design" },
  { src: "/portfolio/social/creative-01.png", title: "Featured Creative", type: "Graphic Design" },
  { src: "/portfolio/social/creative-02.jpg", title: "Poster Asset", type: "Graphic Design" },
  { src: "/portfolio/social/creative-03.jpg", title: "Campaign Asset", type: "Graphic Design" },
  { src: "/portfolio/social/creative-04.jpg", title: "Social Creative", type: "Graphic Design" }
] as const;

const adAssets = creativeAssets.slice(0, 5);

const logoAssets = [
  { src: "/portfolio/logos/monogram-logo.jpg", title: "Monogram Logo" },
  { src: "/portfolio/logos/epw-logo.jpg", title: "EPW Brand Mark" }
] as const;

const featuredProjects = [
  {
    name: "EcoFuture",
    category: "Website Development",
    description: "Designed and developed a sustainable products website focused on trust, clarity, and lead generation.",
    tools: ["Website Design", "Development", "Lead Generation", "Brand Storytelling"],
    results: ["5K+ Website Views", "300+ Leads Generated"],
    primary: "Live Website",
    secondary: "View Case Study",
    visual: "web" as const
  },
  {
    name: "BNP Library",
    category: "Reel Editing / Social Media / Meta Ads",
    description: "Managed content creation, reel editing, social growth, and local lead generation campaigns.",
    tools: ["Reel Editing", "Social Media", "Meta Ads", "Creative Design"],
    results: ["50K+ Views", "120K+ Reach", "200+ Leads", "2X Engagement"],
    primary: "View Project",
    secondary: "Watch Reels",
    visual: "reels" as const
  },
  {
    name: "Lions Fitness",
    category: "Web App",
    description: "Built a fitness-focused web experience designed to improve engagement and digital presence.",
    tools: ["Web App", "UX Design", "Responsive Build", "Performance"],
    results: ["2.3X User Engagement", "40% Faster Experience", "Improved Online Presence"],
    primary: "Live Demo",
    secondary: "Project Details",
    visual: "lions" as const
  }
] as const;

function FilterPills({ active, onChange }: { active: Category; onChange: (category: Category) => void }) {
  return (
    <motion.div
      custom={0.16}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-10 flex flex-wrap gap-2"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className="relative rounded-full border border-border/80 bg-surface/55 px-4 py-2 text-sm font-medium text-muted transition duration-300 hover:border-primary/35 hover:bg-primary/[0.06] hover:text-foreground"
        >
          {active === category ? (
            <motion.span
              layoutId="portfolio-active-filter"
              className="absolute inset-0 rounded-full border border-primary/35 bg-primary/12"
              transition={{ type: "spring", stiffness: 360, damping: 34 }}
            />
          ) : null}
          <span className="relative">{category}</span>
        </button>
      ))}
    </motion.div>
  );
}

function BrowserShowcase({ images = webAssets }: { images?: readonly { src: string; label: string }[] }) {
  return (
    <div className="relative">
      <div className="premium-panel rounded-[1.5rem] bg-gradient-to-b from-foreground/[0.08] to-surface/70 p-2">
        <div className="media-frame rounded-[1.15rem]">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-neutral-900 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="group/browser aspect-[16/10] overflow-hidden bg-black">
            <motion.div
              className="flex h-full"
              style={{ width: `${images.length * 100}%` }}
              animate={images.length > 1 ? { x: ["0%", `-${100 / images.length}%`, "0%"] } : undefined}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {images.map((image) => (
                <div key={image.src} className="relative h-full" style={{ width: `${100 / images.length}%` }}>
                  <img
                    src={image.src}
                    alt={image.label}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover/browser:scale-[1.035]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[76%] rounded-b-full bg-foreground/[0.08]" />
    </div>
  );
}

function ReelStack() {
  return (
    <div className="flex min-h-[21rem] items-center justify-center gap-3 overflow-hidden">
      {reelAssets.slice(0, 4).map((asset, index) => (
        <motion.div
          key={asset.src}
          className="media-frame group/reel relative h-[17.5rem] w-[9.8rem] shrink-0 rounded-[1.6rem]"
          initial={{ opacity: 0, y: 18, rotate: index % 2 ? 3 : -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 1.5 : -1.5 }}
          whileHover={{ y: -8, rotate: 0, scale: 1.04 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
        >
          <img
            src={asset.src}
            alt={asset.title}
            className="h-full w-full object-cover transition duration-700 group-hover/reel:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/10" />
          <div className="absolute inset-x-3 bottom-3">
            <div className="mb-2 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/45 text-xs text-white opacity-0 backdrop-blur-md transition duration-300 group-hover/reel:opacity-100">
              ▶
            </div>
            <p className="text-xs font-semibold text-white">{asset.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ProjectVisual({ visual }: { visual: (typeof featuredProjects)[number]["visual"] }) {
  if (visual === "web") return <BrowserShowcase images={[webAssets[0]]} />;
  if (visual === "lions") return <BrowserShowcase images={[webAssets[1]]} />;
  return <ReelStack />;
}

function ProjectCard({ project, featured = false, index = 0 }: { project: (typeof featuredProjects)[number]; featured?: boolean; index?: number }) {
  return (
    <motion.article
      layout
      custom={0.18 + index * 0.07}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      whileHover={{ y: -5 }}
      className={
        featured
          ? "premium-panel grid gap-8 overflow-hidden rounded-[2rem] p-5 transition duration-300 hover:border-primary/35 sm:p-7 lg:grid-cols-[1.08fr_0.92fr] lg:p-8"
          : "premium-panel overflow-hidden rounded-[1.6rem] p-5 transition duration-300 hover:border-primary/35 sm:p-6"
      }
    >
      <div className={featured ? "relative min-h-[25rem]" : "mb-6"}>
        <ProjectVisual visual={project.visual} />
      </div>
      <div className={featured ? "flex flex-col justify-center" : ""}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{project.category}</p>
        <h3 className={featured ? "mt-3 font-heading text-4xl font-bold text-foreground" : "mt-2 font-heading text-2xl font-semibold text-foreground"}>
          {project.name}
        </h3>
        <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">{project.description}</p>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {project.results.map((result) => (
            <li key={result} className="premium-inset rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/90">
              {result}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li key={tool} className="rounded-full border border-border/80 bg-surface/65 px-3 py-1.5 text-xs font-medium text-muted">
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(168,85,247,0.22)] transition hover:-translate-y-0.5">
            {project.primary}
          </Link>
          <Link href="/services" className="rounded-full border border-border/90 bg-surface/70 px-5 py-3 text-sm font-semibold text-foreground/85 transition hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary">
            {project.secondary}
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedProjects() {
  return (
    <div className="space-y-5">
      <ProjectCard project={featuredProjects[0]} featured />
      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.slice(1).map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

function ReelsShowcase() {
  return (
    <motion.div layout className="space-y-5">
      <div>
        <h3 className="font-heading text-3xl font-bold text-foreground">Reels & Video Editing</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          Real short-form content previews built for attention, retention, and measurable local growth.
        </p>
      </div>
      <div className="-mx-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none]">
        <div className="flex gap-4">
          {reelAssets.map((asset, index) => (
            <motion.article
              key={asset.src}
              custom={0.12 + index * 0.04}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.16 }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="premium-panel group min-w-[15.5rem] rounded-[1.5rem] p-3"
            >
              <div className="media-frame relative aspect-[9/14] rounded-[1.2rem]">
                <img
                  src={asset.src}
                  alt={asset.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-transparent to-black/10" />
                <div className="absolute left-3 top-3 rounded-full border border-primary/25 bg-black/55 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md">
                  {asset.metric}
                </div>
                <div className="absolute inset-0 grid place-items-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md">
                    ▶
                  </span>
                </div>
                <h4 className="absolute inset-x-3 bottom-3 font-heading text-lg font-semibold text-white">{asset.title}</h4>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CreativeShowcase({ assets = creativeAssets, adsOnly = false }: { assets?: readonly (typeof creativeAssets)[number][]; adsOnly?: boolean }) {
  return (
    <motion.div layout className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="font-heading text-3xl font-bold text-foreground">{adsOnly ? "Advertising Creatives" : "Creatives, Ads & Posters"}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Posters, social media designs, promotional ads, and campaign creatives from real portfolio work.
          </p>
        </div>
        <span className="rounded-full border border-border/80 bg-surface/65 px-4 py-2 text-sm font-semibold text-primary">
          +30 More Designs
        </span>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
        {assets.map((creative, index) => (
          <motion.article
            key={creative.src}
            custom={0.12 + index * 0.035}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.14 }}
            whileHover={{ y: -4 }}
            className="premium-panel group mb-4 break-inside-avoid overflow-hidden rounded-[1.35rem] p-3 transition duration-300 hover:border-primary/35"
          >
            <div className="media-frame relative rounded-[1.1rem] p-2">
              <img
                src={creative.src}
                alt={creative.title}
                className="h-auto w-full rounded-[0.85rem] object-contain transition duration-700 group-hover:scale-[1.025]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="px-1 pb-1 pt-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{creative.type}</p>
              <h4 className="mt-1 font-heading text-lg font-semibold text-foreground">{creative.title}</h4>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

function LogoShowcase() {
  return (
    <motion.div layout className="space-y-5">
      <div>
        <h3 className="font-heading text-3xl font-bold text-foreground">Logo Design & Brand Marks</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          Uploaded logo concepts and brand marks presented in clean, premium glass panels.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {logoAssets.map((logo, index) => (
          <motion.article
            key={logo.src}
            custom={0.12 + index * 0.05}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="premium-panel group rounded-[1.5rem] p-5 transition duration-300 hover:border-primary/35"
          >
            <div className="grid aspect-square place-items-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-white">
              <img
                src={logo.src}
                alt={logo.title}
                className="h-full w-full object-contain p-4 transition duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h4 className="mt-4 font-heading text-xl font-semibold text-foreground">{logo.title}</h4>
            <p className="mt-1 text-sm text-primary opacity-0 transition duration-300 group-hover:opacity-100">View Branding Work</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

function WorksContent({ activeCategory }: { activeCategory: Category }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        className="mt-12 space-y-16"
      >
        {activeCategory === "All" && <FeaturedProjects />}
        {activeCategory === "Websites" && (
          <div className="space-y-5">
            <ProjectCard project={featuredProjects[0]} featured />
            <ProjectCard project={featuredProjects[2]} />
          </div>
        )}
        {(activeCategory === "All" || activeCategory === "Reels") && <ReelsShowcase />}
        {(activeCategory === "All" || activeCategory === "Creatives") && <CreativeShowcase />}
        {activeCategory === "Ads" && <CreativeShowcase assets={adAssets} adsOnly />}
        {(activeCategory === "All" || activeCategory === "Branding" || activeCategory === "Logos") && <LogoShowcase />}
      </motion.div>
    </AnimatePresence>
  );
}

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  return (
    <section id="works" className="chapter-section" aria-labelledby="works-section-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,hsl(var(--foreground)/0.025),transparent_28%,hsl(var(--primary)/0.045)_74%,transparent),radial-gradient(circle_at_18%_16%,hsl(var(--primary)/0.07),transparent_30%),radial-gradient(circle_at_84%_68%,hsl(var(--accent)/0.04),transparent_34%)]"
      />
      <div aria-hidden="true" className="chapter-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />

      <div className="container-shell">
        <div className="relative">
          <SectionChapterIntro
            label="WORKS"
            titleId="works-section-title"
            title="Real Projects. Real Results. Real Growth."
            description="A collection of websites, reels, ad creatives, branding systems, and growth campaigns delivered for real businesses."
          />

          <FilterPills active={activeCategory} onChange={setActiveCategory} />
          <WorksContent activeCategory={activeCategory} />
        </div>
      </div>
    </section>
  );
}
