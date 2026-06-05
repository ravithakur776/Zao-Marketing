"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/brand-logo";
import {
  footerConfig,
  footerQuickLinks,
  footerServiceLinks,
  footerSocialLinks,
  siteConfig
} from "@/lib/site";

type SocialIconName = (typeof footerSocialLinks)[number]["icon"];

function SocialIcon({ name }: { name: SocialIconName }) {
  const cls = "h-4 w-4";

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10v6M8 8.2v.1M12 16v-3.2c0-1.1.9-2 2-2s2 .9 2 2V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <path
          d="M9.2 19c-3.8 1.2-3.8-2-5.4-2.4M14.6 21v-3c0-.8.1-1.3-.4-2 1.8-.2 3.7-.9 3.7-4.2a3.3 3.3 0 0 0-.9-2.3 3 3 0 0 0-.1-2.3s-.8-.3-2.5 1a8.5 8.5 0 0 0-4.6 0c-1.7-1.3-2.5-1-2.5-1a3 3 0 0 0-.1 2.3 3.3 3.3 0 0 0-.9 2.3c0 3.3 1.9 4 3.7 4.2-.5.7-.5 1.4-.5 2.2v2.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
      <path d="M13.5 8H16V5h-2.5c-2.3 0-4 1.7-4 4v2H7v3h2.5v5h3v-5h2.7l.5-3h-3.2V9c0-.6.5-1 1-1Z" fill="currentColor" />
    </svg>
  );
}

export function FooterSection() {
  const phoneHref = `tel:${siteConfig.whatsappNumber.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=Hi%20Famex%20Marketing,%20I%20want%20to%20discuss%20my%20growth%20project.`;

  return (
    <footer id="footer" className="relative isolate overflow-hidden border-t border-border/70 py-14 sm:py-20" aria-labelledby="footer-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,hsl(var(--primary)/0.14),transparent_32%),linear-gradient(180deg,hsl(var(--primary)/0.05),transparent_42%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="premium-panel rounded-[2rem] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1fr] lg:gap-8">
            <section>
              <h2 id="footer-title">
                <BrandLogo className="items-center" markClassName="h-12 w-12" />
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-muted">{footerConfig.description}</p>

              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Social links">
                {footerSocialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/75 bg-background/45 text-foreground/75 transition duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 hover:text-primary"
                    >
                      <SocialIcon name={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <nav aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Navigation</p>
              <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                {footerQuickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section aria-label="Footer services">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Services</p>
              <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                {footerServiceLinks.map((service) => (
                  <li key={service.label}>
                    <Link href={service.href} className="transition hover:text-primary">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-primary/20 bg-primary/[0.06] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Next Step</p>
              <h3 className="mt-4 max-w-xs font-heading text-2xl font-bold leading-tight text-foreground">
                Need help growing your brand?
              </h3>
              <div className="mt-6 grid gap-3 sm:max-w-xs">
                <a
                  href={phoneHref}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_38px_hsl(var(--primary)/0.24)] transition duration-300 hover:scale-[1.02]"
                >
                  Call Us
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground transition duration-300 hover:border-primary hover:text-primary"
                >
                  WhatsApp Us
                </a>
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {siteConfig.name}. All rights reserved.</p>
            <p>{footerConfig.closingLine}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
