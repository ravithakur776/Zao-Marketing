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
    <section className="relative overflow-hidden bg-[#07040d] pb-20 pt-28 md:pb-24 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.16),transparent_34%),radial-gradient(circle_at_84%_20%,rgba(168,85,247,0.09),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:56px_56px]"
      />
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
    <section id={id} className="relative overflow-hidden bg-[#07040d] py-24 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(124,58,237,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_25%)]"
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
  description = "Book a free strategy call and we will map the clearest growth path for your business."
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#06030b] py-24 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.16),transparent_36%)]" />
      <div className="container-shell relative">
        <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Next Step</p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/contact">Let&apos;s Work Together</LinkButton>
            <LinkButton href="/book-a-call" variant="outline">Book a Free Strategy Call</LinkButton>
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
    <FadeIn className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_58px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
      <h3 className="mt-3 font-heading text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </FadeIn>
  );
}
