import { LinkButton } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import type { ReactNode } from "react";

const previewServices = [
  "Reels & Video Editing",
  "Meta Ads & Google Ads",
  "Web Development",
  "Social Media Management"
] as const;

const portfolioImages = [
  "/portfolio/web/ecofuture-homepage.png",
  "/portfolio/reels/bnp-library-exterior.png",
  "/portfolio/ads/fitness-poster.jpg",
  "/portfolio/logos/monogram-logo.jpg"
] as const;

function SectionShell({
  id,
  label,
  title,
  description,
  children
}: {
  id: string;
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative overflow-hidden bg-[#07040d] py-24 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(124,58,237,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_24%)]"
      />
      <div className="container-shell relative">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">{label}</p>
          <h2 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">{description}</p>
        </FadeIn>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function AboutPreviewSection() {
  return (
    <SectionShell
      id="about-preview"
      label="ABOUT"
      title="Founder-led growth execution for brands that need clarity."
      description="Famex Marketing bridges creative work and measurable business growth through strategy, design, marketing, and technical systems."
    >
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-8">
          <h3 className="font-heading text-2xl font-semibold">Built for strategy, systems, and execution.</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
            Ravi Thakur built Famex for businesses that need more than scattered posts or isolated campaigns. The work connects content, websites, advertising, and automation into one focused growth system.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Strategy First", "Founder-Led", "Execution Focused"].map((item) => (
              <span key={item} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6 backdrop-blur-xl md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Growth Philosophy</p>
          <p className="mt-4 font-heading text-3xl font-bold leading-tight">Content → Traffic → Leads → Revenue</p>
          <LinkButton href="/about" className="mt-7">Read the Founder Story</LinkButton>
        </FadeIn>
      </div>
    </SectionShell>
  );
}

export function ServicesPreviewSection() {
  return (
    <SectionShell
      id="services-preview"
      label="SERVICES"
      title="Core services built around real business growth."
      description="A focused preview of the systems Famex uses to help brands attract attention, generate leads, and improve online presence."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {previewServices.map((service, index) => (
          <FadeIn
            key={service}
            delay={index * 0.05}
            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_58px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/[0.055]"
          >
            <span className="font-mono text-sm font-semibold tracking-[0.18em] text-primary">0{index + 1}</span>
            <h3 className="mt-5 font-heading text-2xl font-semibold">{service}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Premium execution designed to create stronger visibility, better trust, and measurable growth.
            </p>
          </FadeIn>
        ))}
      </div>
      <div className="mt-8">
        <LinkButton href="/services">Explore All Services</LinkButton>
      </div>
    </SectionShell>
  );
}

export function PortfolioPreviewSection() {
  return (
    <SectionShell
      id="portfolio-preview"
      label="PORTFOLIO"
      title="Real work across websites, reels, ads, and branding."
      description="A quick look at portfolio assets from real projects. Explore the full gallery for case studies and category filters."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {portfolioImages.map((src, index) => (
          <FadeIn
            key={src}
            delay={index * 0.05}
            className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 p-3 shadow-[0_18px_58px_rgba(0,0,0,0.24)]"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-black">
              <img src={src} alt="Famex portfolio preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="mt-8">
        <LinkButton href="/portfolio">View Full Portfolio</LinkButton>
      </div>
    </SectionShell>
  );
}

export function PackagesPreviewSection() {
  return (
    <SectionShell
      id="packages-preview"
      label="PACKAGES"
      title="Value-based packages for different growth stages."
      description="No fixed template pricing. Choose the level of support that matches your stage, goals, and execution depth."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {["Launch Package", "Growth Package", "Authority Package"].map((name, index) => (
          <FadeIn key={name} delay={index * 0.06} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{index === 1 ? "Most Popular" : "Custom Scope"}</span>
            <h3 className="mt-4 font-heading text-2xl font-semibold">{name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Designed around outcomes, deliverables, and the kind of growth system your brand needs next.
            </p>
          </FadeIn>
        ))}
      </div>
      <div className="mt-8">
        <LinkButton href="/packages">Compare Packages</LinkButton>
      </div>
    </SectionShell>
  );
}
