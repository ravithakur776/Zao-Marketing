import type { ReactNode } from "react";
import { LinkButton } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function PageHero({
  label,
  title,
  description,
  children
}: {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="chapter-section pb-20 pt-28 md:pb-24 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.13),transparent_34%),radial-gradient(circle_at_84%_20%,hsl(var(--accent)/0.07),transparent_34%)]"
      />
      <div aria-hidden="true" className="chapter-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />
      <div className="container-shell relative">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary">{label}</p>
          <h1 className="mt-5 max-w-5xl font-heading text-5xl font-bold leading-[0.98] text-foreground md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-xl md:leading-8">{description}</p>
        </FadeIn>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

export function PageSection({
  label,
  title,
  description,
  children,
  id
}: {
  label?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="chapter-section">
      <div aria-hidden="true" className="section-divider-line" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,hsl(var(--primary)/0.08),transparent_30%),linear-gradient(180deg,hsl(var(--foreground)/0.018),transparent_25%)]"
      />
      <div className="container-shell relative">
        <FadeIn>
          {label ? <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{label}</p> : null}
          <h2 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
          {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">{description}</p> : null}
        </FadeIn>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function PageCta({
  title = "Ready to scale your brand?",
  description = "Share your growth goal and we will map the clearest next step for your business."
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="chapter-section">
      <div aria-hidden="true" className="section-divider-line" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.13),transparent_36%)]" />
      <div className="container-shell relative">
        <FadeIn className="premium-panel rounded-[2rem] p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Next Step</p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/contact">Contact Us</LinkButton>
            <LinkButton href="/plans" variant="outline">View Plans</LinkButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function FeatureCard({
  title,
  description,
  eyebrow,
  children
}: {
  title: string;
  description: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <FadeIn className="premium-panel h-full rounded-[1.5rem] p-6">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
      <h3 className="mt-3 font-heading text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </FadeIn>
  );
}
