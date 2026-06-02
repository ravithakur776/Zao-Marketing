"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import {
  footerConfig,
  footerQuickLinks,
  footerServiceLinks,
  footerSocialLinks,
  siteConfig
} from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

type SocialIconName = (typeof footerSocialLinks)[number]["icon"];

const particles = [
  { left: "7%", top: "16%", delay: 0.1 },
  { left: "18%", top: "58%", delay: 0.4 },
  { left: "28%", top: "80%", delay: 0.7 },
  { left: "46%", top: "24%", delay: 1.1 },
  { left: "63%", top: "66%", delay: 0.9 },
  { left: "78%", top: "32%", delay: 1.3 },
  { left: "91%", top: "74%", delay: 0.5 }
] as const;

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

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <path d="M5 5h3.1l7.8 14H12.8L5 5Zm10.8 0H19l-4 4.6L9.8 19H6.7l4.5-5.1L15.8 5Z" fill="currentColor" />
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
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer id="footer" className="relative isolate overflow-hidden pb-8" aria-labelledby="footer-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(124,58,237,0.3),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(168,85,247,0.24),transparent_34%),radial-gradient(circle_at_48%_92%,rgba(91,33,182,0.22),transparent_38%)]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          background:
            "linear-gradient(120deg, rgba(124,58,237,0.16), rgba(0,0,0,0) 35%, rgba(168,85,247,0.18) 68%, rgba(0,0,0,0))"
        }}
        animate={{ x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          aria-hidden="true"
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-primary/55"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -10, 0], opacity: [0.15, 0.95, 0.15] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: particle.delay + index * 0.08 }}
        />
      ))}

      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-2xl sm:p-8 md:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1.05fr]">
            <section>
              <h2 id="footer-title">
                <BrandLogo className="items-center" markClassName="h-11 w-11" />
              </h2>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-primary">{siteConfig.tagline}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{footerConfig.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton href="/book-a-call" className="px-4 py-2.5 text-sm">
                  Book a Call
                </LinkButton>
                <LinkButton href="/contact" variant="outline" className="px-4 py-2.5 text-sm">
                  Let&apos;s Work Together
                </LinkButton>
              </div>
            </section>

            <nav aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Navigation</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
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
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                {footerServiceLinks.map((service) => (
                  <li key={service.label}>
                    <Link href={service.href} className="transition hover:text-primary">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Stay Updated</p>
              <p className="mt-3 text-sm text-muted">{footerConfig.newsletterCta}</p>

              <form
                className="mt-4 space-y-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubscribed(true);
                  trackEvent("lead", "footer_newsletter");
                }}
              >
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/15"
                >
                  Subscribe
                </button>
              </form>
              {subscribed ? <p className="mt-2 text-xs text-primary">Subscribed. You&apos;ll hear from us soon.</p> : null}

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Social links">
                {footerSocialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/75 bg-background/55 text-foreground/80 transition hover:-translate-y-0.5 hover:border-primary/45 hover:text-primary"
                    >
                      <SocialIcon name={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-10 border-t border-border/70 pt-5">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {siteConfig.name}. {footerConfig.closingLine}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
