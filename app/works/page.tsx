import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { PageCta, PageHero } from "@/components/layout/agency-page";
import { LinkButton } from "@/components/ui/button";
import { PortfolioSection } from "@/components/sections/home/portfolio";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Works | Real Websites, Reels, Creatives, Ads & Logos",
  description:
    "Explore Famex Marketing works across websites, reels, social media creatives, ads, branding, and logo design.",
  path: "/works"
});

export default function WorksPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Works", path: "/works" }
        ])}
      />
      <PageHero
        label="Works"
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
