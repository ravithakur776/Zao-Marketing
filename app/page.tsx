import type { Metadata } from "next";
import { HomeHeroSection } from "@/components/sections/home/hero";
import { SocialProofSection } from "@/components/sections/home/social-proof";
import { ServicesSection } from "@/components/sections/home/services";
import { AboutSection } from "@/components/sections/home/about";
import { PortfolioSection } from "@/components/sections/home/portfolio";
import { ProcessSection } from "@/components/sections/home/process";
import { TestimonialsSection } from "@/components/sections/home/testimonials";
import { PricingPreviewSection } from "@/components/sections/home/pricing-preview";
import { FaqSection } from "@/components/sections/home/faq";
import { FinalCtaSection } from "@/components/sections/home/final-cta";
import { FooterSection } from "@/components/sections/home/footer";
import { StructuredData } from "@/components/common/structured-data";
import { faqSchema, breadcrumbSchema, servicesSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Marketing Agency in Mathura for Web, SEO & Growth Systems",
  description:
    "Zao Marketing is a founder-led marketing and web development agency in Mathura, UP helping local and global brands turn traffic into customers with SEO, paid growth, UI/UX, and automation.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={servicesSchema()} />
      <StructuredData data={faqSchema()} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" }
        ])}
      />
      <HomeHeroSection />
      <SocialProofSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </>
  );
}
