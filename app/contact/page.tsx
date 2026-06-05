import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { FinalCtaForm } from "@/components/forms/final-cta-form";
import { FeatureCard, PageHero, PageSection } from "@/components/layout/agency-page";
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
  const phoneHref = `tel:${siteConfig.whatsappNumber.replace(/\s/g, "")}`;
  const emailHref = `mailto:${siteConfig.email}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=Hi%20Famex%20Marketing,%20I%20want%20to%20discuss%20my%20growth%20project.`;

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" }
        ])}
      />
      <PageHero
        label="Contact Us"
        title="Ready to scale your brand?"
        description="Share what you want to build, improve, or grow. Famex Marketing will respond with clear next steps for your brand."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_38px_hsl(var(--primary)/0.24)] transition hover:scale-[1.02]"
          >
            Call Us
          </a>
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
        description="Use the form for service inquiries, collaborations, and growth-focused projects."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <FinalCtaForm />
          <div className="grid gap-5">
            <FeatureCard
              eyebrow="Phone"
              title={siteConfig.whatsappNumber}
              description="Call directly when you want to discuss your brand, campaign, or website requirement."
            >
              <a href={phoneHref} className="text-sm font-semibold text-primary hover:underline">Call Us</a>
            </FeatureCard>
            <FeatureCard
              eyebrow="WhatsApp"
              title={siteConfig.whatsappNumber}
              description="Message on WhatsApp for fast project context and next-step coordination."
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:underline">
                WhatsApp Us
              </a>
            </FeatureCard>
            <FeatureCard
              eyebrow="Email"
              title={siteConfig.email}
              description="Send a direct brief if you already know the scope or want to share references."
            >
              <a href={emailHref} className="text-sm font-semibold text-primary hover:underline">Email Us</a>
            </FeatureCard>
            <FeatureCard
              eyebrow="Location"
              title={`${siteConfig.location.city}, ${siteConfig.location.region}`}
              description="Serving brands from Mathura, Uttar Pradesh with remote collaboration for growth projects."
            />
            <FeatureCard
              eyebrow="Social"
              title="Follow Famex Marketing"
              description="Connect with Famex Marketing on Instagram and LinkedIn."
            >
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-primary">
                <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
                <a href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </div>
            </FeatureCard>
          </div>
        </div>
      </PageSection>
    </>
  );
}
