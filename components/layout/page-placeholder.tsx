import type { ReactNode } from "react";
import { LinkButton } from "@/components/ui/button";

type PagePlaceholderProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PagePlaceholder({ title, description, children }: PagePlaceholderProps) {
  return (
    <section className="section-space" aria-labelledby="page-placeholder-title">
      <div className="container-shell">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h1 id="page-placeholder-title" className="font-heading text-3xl font-bold md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-muted">{description}</p>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            Serving businesses in Mathura, Uttar Pradesh, across India, and global remote teams.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <LinkButton href="/book-a-call">Book a Strategy Call</LinkButton>
            <LinkButton href="/contact" variant="outline">
              Discuss Your Project
            </LinkButton>
          </div>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
