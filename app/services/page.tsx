import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { FeatureCard, PageCta, PageHero, PageSection } from "@/components/layout/agency-page";
import { FadeIn } from "@/components/ui/fade-in";
import { LinkButton } from "@/components/ui/button";
import { breadcrumbSchema, servicesSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services | Content, Ads, Websites, Branding, SEO & Automation",
  description:
    "Explore Famex Marketing services for reels, paid ads, web development, social media management, branding, graphic design, SEO, and AI automation.",
  path: "/services"
});

const services = [
  {
    title: "Reels & Video Editing",
    outcome: "Higher Engagement",
    image: "/portfolio/reels/bnp-library-exterior.png",
    description: "Short-form content editing built to capture attention and increase visibility.",
    deliverables: ["Hook-led reel edits", "Captions and pacing", "Thumbnail direction", "Content repurposing"]
  },
  {
    title: "Meta Ads & Google Ads",
    outcome: "More Qualified Leads",
    image: "/portfolio/ads/fitness-poster.jpg",
    description: "Campaigns and creatives designed to reach high-intent audiences and generate measurable demand.",
    deliverables: ["Offer strategy", "Ad creatives", "Campaign setup", "Performance optimization"]
  },
  {
    title: "Web Development",
    outcome: "High-Converting Websites",
    image: "/portfolio/web/ecofuture-homepage.png",
    description: "Premium websites built for trust, speed, storytelling, and conversion.",
    deliverables: ["Landing pages", "Responsive builds", "SEO foundations", "Analytics setup"]
  },
  {
    title: "Social Media Management",
    outcome: "Consistent Brand Growth",
    image: "/portfolio/social/brand-creative-1.jpg",
    description: "Structured content systems that help brands stay visible, consistent, and trusted.",
    deliverables: ["Content planning", "Creative direction", "Publishing system", "Growth reporting"]
  },
  {
    title: "Monitoring, Analytics & Reporting",
    outcome: "Clearer Decisions",
    image: "/portfolio/social/marketing-post-2.jpg",
    description: "Focused reporting that connects content, campaigns, leads, and next-step recommendations.",
    deliverables: ["Performance reviews", "Lead tracking", "Channel insights", "Action reports"]
  },
  {
    title: "Video Shoot",
    outcome: "Stronger Content Library",
    image: "/portfolio/reels/bnp-library-study-cabin.png",
    description: "On-location content production planned around reels, ads, interviews, and brand storytelling.",
    deliverables: ["Shoot planning", "Shot direction", "Short-form capture", "Content organization"]
  },
  {
    title: "Photo + Video Production",
    outcome: "Premium Brand Presence",
    image: "/portfolio/reels/rotigo-restaurant-reel.png",
    description: "Coordinated photo and video production for campaigns, social media, launches, and ongoing content.",
    deliverables: ["Creative planning", "Photo production", "Video editing", "Campaign-ready exports"]
  },
  {
    title: "Events & Visits",
    outcome: "Timely Brand Coverage",
    image: "/portfolio/reels/real-estate-reel.png",
    description: "Content coverage for events, locations, launches, visits, and important brand moments.",
    deliverables: ["Visit planning", "Event capture", "Fast-turn edits", "Social-ready assets"]
  },
  {
    title: "Branding",
    outcome: "Stronger Brand Identity",
    image: "/portfolio/logos/monogram-logo.jpg",
    description: "Identity work that improves recognition, positioning, and premium perception.",
    deliverables: ["Logo direction", "Brand marks", "Visual language", "Usage guidance"]
  },
  {
    title: "Graphic Design",
    outcome: "Better Reach",
    image: "/portfolio/ads/food-biryani.jpg",
    description: "Posters, ad creatives, and social graphics that make offers easier to understand.",
    deliverables: ["Posters", "Social creatives", "Ad designs", "Campaign assets"]
  },
  {
    title: "SEO",
    outcome: "Long-Term Organic Growth",
    image: "/portfolio/social/marketing-post-1.jpg",
    description: "Search visibility foundations that help brands attract high-intent traffic over time.",
    deliverables: ["Keyword mapping", "On-page SEO", "Content structure", "Technical recommendations"]
  },
  {
    title: "AI Automation",
    outcome: "Operational Efficiency",
    image: "/portfolio/ads/promotional-creative.jpg",
    description: "Lean automations that reduce repeated work and keep growth operations moving faster.",
    deliverables: ["Workflow mapping", "Lead routing", "Content ops support", "Tool integration planning"]
  }
] as const;

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={servicesSchema()} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ])}
      />
      <PageHero
        label="Services"
        title="Everything your brand needs to grow online."
        description="From viral short-form content and paid advertising to high-converting websites and social media systems, each service is built to generate measurable business outcomes."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/contact">Start a Project</LinkButton>
          <LinkButton href="/works" variant="outline">See Real Work</LinkButton>
        </div>
      </PageHero>

      <PageSection
        label="Service Catalog"
        title="Choose the growth system your brand needs next."
        description="Each service can work independently, but the strongest results happen when content, traffic, design, and conversion are connected."
      >
        <div className="space-y-5">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={(index % 3) * 0.04}
              className="premium-panel grid gap-6 rounded-[1.75rem] p-5 md:grid-cols-[0.45fr_1fr] md:p-6"
            >
              <div className="media-frame group rounded-[1.25rem]">
                <img
                  src={service.image}
                  alt={`${service.title} portfolio preview`}
                  className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-semibold tracking-[0.18em] text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {service.outcome}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-semibold">{service.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted md:text-base">{service.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="premium-inset rounded-2xl px-4 py-3 text-sm text-foreground/88">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <LinkButton href="/contact" variant="outline">View Service</LinkButton>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection label="Why It Works" title="Services are connected around outcomes, not isolated deliverables.">
        <div className="grid gap-5 lg:grid-cols-3">
          <FeatureCard title="Attention" description="Reels, social content, ads, and creatives help the right audience notice the brand." />
          <FeatureCard title="Trust" description="Websites, branding, and stronger presentation make the business easier to believe in." />
          <FeatureCard title="Conversion" description="Campaigns, pages, and systems turn visibility into leads, inquiries, and sales conversations." />
        </div>
      </PageSection>

      <PageCta />
    </>
  );
}
