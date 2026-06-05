import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { FeatureCard, PageCta, PageHero, PageSection } from "@/components/layout/agency-page";
import { FadeIn } from "@/components/ui/fade-in";
import { aboutFounderStory, aboutJourney } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us | Founder-Led Growth Agency",
  description:
    "Learn how Famex Marketing helps brands grow through strategy, content, websites, advertising, design, and execution systems.",
  path: "/about"
});

const strengths = [
  "Growth strategy",
  "Conversion-focused websites",
  "Content systems",
  "Paid media execution",
  "Brand identity",
  "Automation workflows"
] as const;

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" }
        ])}
      />
      <PageHero
        label="About Us"
        title="Helping brands grow through strategy, systems, and execution."
        description="Famex Marketing was built to bridge the gap between strong creative work and measurable business growth."
      />

      <PageSection
        label="Founder Story"
        title="Built for brands that need more than scattered marketing."
        description="The work starts with clarity: what the brand sells, who it needs to reach, and which systems can turn attention into revenue."
      >
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn className="premium-panel rounded-[1.75rem] p-7 md:p-9">
            <h3 className="font-heading text-3xl font-semibold">Founder-led, strategy-first execution.</h3>
            <p className="mt-5 text-base leading-8 text-muted">{aboutFounderStory.intro}</p>
            <p className="mt-5 text-base leading-8 text-muted">
              Every project is treated as a growth system: sharper positioning, better digital experiences, stronger content, and clearer conversion paths.
            </p>
          </FadeIn>
          <FeatureCard
            eyebrow="Trust Signal"
            title="Hands-on growth partner"
            description="You get a focused founder-led workflow with strategy, implementation, and feedback loops connected from day one."
          />
        </div>
      </PageSection>

      <PageSection label="Journey" title="A progression of growth and capability.">
        <div className="relative grid gap-4 lg:grid-cols-3">
          {aboutJourney.map((item, index) => (
            <FeatureCard key={item.year} eyebrow={item.year} title={item.title} description={item.detail}>
              <span className="font-mono text-sm font-semibold tracking-[0.18em] text-primary">0{index + 1}</span>
            </FeatureCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        label="Expertise"
        title="The strengths behind the work."
        description="Famex combines creative production, technical execution, and growth thinking into one focused partner."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item) => (
            <FadeIn key={item} className="premium-panel-muted rounded-2xl px-5 py-4 text-sm font-semibold text-foreground/90">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" />
              {item}
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageCta />
    </>
  );
}
