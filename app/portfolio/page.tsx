import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { PageCta, PageHero } from "@/components/layout/agency-page";
import { LinkButton } from "@/components/ui/button";
import { PortfolioSection } from "@/components/sections/home/portfolio";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio | Real Websites, Reels, Creatives, Ads & Logos",
  description:
    "Explore Famex Marketing portfolio work across websites, reels, social media creatives, ads, branding, and logo design.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" }
        ])}
      />
      <PageHero
        label="Portfolio"
        title="Real work across content, design, advertising, and technology."
        description="A premium case-study gallery built from real Famex portfolio assets, real project categories, and real growth-focused outcomes."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/contact">Start a Similar Project</LinkButton>
          <LinkButton href="/services" variant="outline">Explore Services</LinkButton>
        </div>
      </PageHero>
      <PortfolioSection />
      <PageCta title="Want your brand to become the next case study?" />
    </>
  );
}
