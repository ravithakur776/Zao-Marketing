import type { Metadata } from "next";
import { HomeHeroSection } from "@/components/sections/home/hero";
import {
  AboutPreviewSection,
  ServicesPreviewSection,
  WorksPreviewSection
} from "@/components/sections/home/previews";
import { PricingPreviewSection } from "@/components/sections/home/pricing-preview";
import { FinalCtaSection } from "@/components/sections/home/final-cta";
import { FooterSection } from "@/components/sections/home/footer";
import { StructuredData } from "@/components/common/structured-data";
import { breadcrumbSchema, servicesSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Famex Marketing | Premium Growth Marketing Agency",
  description:
    "Famex Marketing is a founder-led agency helping brands scale with content, websites, advertising, design, and digital growth systems.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={servicesSchema()} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" }
        ])}
      />
      <HomeHeroSection />
      <ServicesPreviewSection />
      <PricingPreviewSection />
      <WorksPreviewSection />
      <AboutPreviewSection />
      <FinalCtaSection />
      <FooterSection />
    </>
  );
}
