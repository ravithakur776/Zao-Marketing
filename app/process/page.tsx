import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { FeatureCard, PageCta, PageHero, PageSection } from "@/components/layout/agency-page";
import { LinkButton } from "@/components/ui/button";
import { processSteps } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Process | How Famex Marketing Works",
  description:
    "See the Famex Marketing process from audit and planning to design, development, marketing, and scale.",
  path: "/process"
});

const expandedSteps = [
  ...processSteps.slice(0, 3),
  {
    id: "04",
    title: "Development",
    description: "We turn strategy and design into fast, responsive, conversion-focused digital assets.",
    badge: "Build Phase",
    metric: "Web system live"
  },
  ...processSteps.slice(3)
] as const;

export default function ProcessPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" }
        ])}
      />
      <PageHero
        label="Process"
        title="A clear growth system from first audit to scale."
        description="Famex works through a structured flow so strategy, design, content, development, and marketing stay aligned from the beginning."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/contact">Start the Process</LinkButton>
          <LinkButton href="/services" variant="outline">Explore Services</LinkButton>
        </div>
      </PageHero>

      <PageSection label="Workflow" title="How Famex turns growth problems into execution plans.">
        <div className="relative">
          <div aria-hidden="true" className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent lg:block" />
          <ol className="space-y-5">
            {expandedSteps.map((step, index) => (
              <li key={`${step.id}-${step.title}`} className="relative lg:pl-16">
                <FeatureCard eyebrow={step.id} title={step.title} description={step.description}>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{step.badge}</span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-muted">{step.metric}</span>
                  </div>
                </FeatureCard>
                <span className="absolute left-2 top-8 hidden h-8 w-8 place-items-center rounded-full border border-primary/30 bg-[#100a19] text-xs font-semibold text-primary lg:grid">
                  {index + 1}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </PageSection>

      <PageSection label="Operating Style" title="Premium work needs clean communication.">
        <div className="grid gap-5 lg:grid-cols-3">
          <FeatureCard title="Clear priorities" description="Every project starts with business goals, channel priorities, and measurable outcomes." />
          <FeatureCard title="Founder-led reviews" description="You get direct strategic thinking, practical updates, and focused review cycles." />
          <FeatureCard title="Iteration after launch" description="The work improves through insights, creative testing, and performance feedback." />
        </div>
      </PageSection>

      <PageCta title="Ready to start with a clear growth audit?" />
    </>
  );
}
