import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { FinalCtaForm } from "@/components/forms/final-cta-form";
import { FeatureCard, PageHero, PageSection } from "@/components/layout/agency-page";
import { LinkButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Famex Marketing | Start a Growth Project",
  description:
    "Contact Famex Marketing to discuss websites, reels, ads, branding, social media management, SEO, and growth systems.",
  path: "/contact"
});

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=Hi%20Famex%20Marketing,%20I%20want%20to%20discuss%20my%20growth%20project.`;

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
      <PageHero
        label="Contact"
        title="Ready to scale your brand?"
        description="Tell us what you are trying to build, fix, or grow. You will get a founder-led response with clear next steps."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/book-a-call">Book a Free Strategy Call</LinkButton>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition hover:scale-[1.02] hover:bg-primary/15"
          >
            WhatsApp Us
          </a>
        </div>
      </PageHero>

      <PageSection
        label="Inquiry"
        title="Share the growth goal."
        description="Use the form for project inquiries, package requests, collaborations, and strategy calls."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <FinalCtaForm />
          <div className="grid gap-5">
            <FeatureCard
              eyebrow="Email"
              title={siteConfig.email}
              description="Send a brief directly if you already know the scope or want to share references."
            />
            <FeatureCard
              eyebrow="WhatsApp"
              title={siteConfig.whatsappNumber}
              description="Use WhatsApp for faster conversation, quick project context, and strategy call coordination."
            />
            <FeatureCard
              eyebrow="Trust"
              title="Founder-led response"
              description="Your inquiry is reviewed with strategy in mind, not routed through a generic intake process."
            />
          </div>
        </div>
      </PageSection>
    </>
  );
}
