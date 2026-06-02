import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { FeatureCard, PageCta, PageHero, PageSection } from "@/components/layout/agency-page";
import { LinkButton } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { pricingPreviewPlans } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Plans | Famex Marketing Service Plans",
  description:
    "Explore Famex Marketing service plans for content, production, ads, social media, website development, and full growth execution.",
  path: "/packages"
});

export default function PackagesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Plans", path: "/plans" }
        ])}
      />
      <PageHero
        label="Plans"
        title="Premium service plans for every growth stage."
        description="Choose the engagement model that fits your current needs, from consistent social presence to full growth execution. No fixed public prices, only plan fit, inclusions, and outcomes."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/contact">Find Your Package</LinkButton>
          <LinkButton href="/works" variant="outline">See Proof of Work</LinkButton>
        </div>
      </PageHero>

      <PageSection
        label="Service Plans"
        title="Choose the service plan that fits your brand’s current growth stage."
        description="Each plan is designed around practical execution: content, production, ads, social media, website support, and strategy."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPreviewPlans.map((plan, index) => (
            <FadeIn
              key={plan.name}
              delay={index * 0.06}
              className={`rounded-[1.75rem] border p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl ${
                plan.featured ? "border-primary/45 bg-primary/[0.09] lg:-mt-4 lg:mb-4" : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {plan.badge}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold">{plan.name}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">{plan.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {plan.groups.map((group) => (
                  <span key={group} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
                    {group}
                  </span>
                ))}
              </div>
              <p className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-foreground">
                {plan.highlight}
              </p>
              <ul className="mt-5 space-y-3">
                {plan.features.map((included) => (
                  <li key={included} className="flex gap-3 text-sm text-foreground/88">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {included}
                  </li>
                ))}
              </ul>
              <LinkButton href="/contact" className="mt-7 w-full" variant={plan.featured ? "primary" : "outline"}>
                {plan.cta}
              </LinkButton>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection label="Comparison" title="A simple way to compare support levels.">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
          {[
            ["Plan", "Content & Growth", "Growth Plus", "Full Growth System"],
            ["Best for", "Consistent social presence", "Content + stronger ads", "Complete execution partner"],
            ["Core focus", "Content, social, Meta Ads", "Production, visits, Meta + Google", "Daily shoots, website, strategy"],
            ["Outcome", "Foundation for brand growth", "Balanced marketing execution", "Premium full growth support"]
          ].map((row) => (
            <div key={row[0]} className="grid gap-0 border-b border-white/10 last:border-b-0 md:grid-cols-4">
              {row.map((cell, index) => (
                <div key={cell} className={`p-4 text-sm ${index === 0 ? "font-semibold text-primary" : "text-foreground/86"}`}>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection label="How Scope Works" title="Every package is tailored after a strategy call.">
        <div className="grid gap-5 lg:grid-cols-3">
          <FeatureCard title="1. Diagnose" description="We understand your brand, offer, funnel, and growth bottlenecks." />
          <FeatureCard title="2. Scope" description="We recommend the package and deliverables that match your next stage." />
          <FeatureCard title="3. Execute" description="We build the creative, technical, and marketing systems needed to move forward." />
        </div>
      </PageSection>

      <PageCta title="Need help choosing the right package?" />
    </>
  );
}
