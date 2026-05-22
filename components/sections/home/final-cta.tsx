"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { FinalCtaForm } from "@/components/forms/final-cta-form";
import { finalCtaConfig, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const particles = [
  { left: "8%", top: "20%", delay: 0 },
  { left: "18%", top: "72%", delay: 0.4 },
  { left: "34%", top: "36%", delay: 1.1 },
  { left: "52%", top: "14%", delay: 0.7 },
  { left: "68%", top: "64%", delay: 1.4 },
  { left: "82%", top: "30%", delay: 0.9 },
  { left: "91%", top: "78%", delay: 1.7 }
] as const;

export function FinalCtaSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=Hi%20Zao%20Marketing,%20I%20want%20a%20free%20strategy%20call.`;

  return (
    <section id="final-cta" className="relative isolate flex min-h-[95svh] items-center overflow-hidden pb-20 pt-16 md:pb-24" aria-labelledby="final-cta-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(124,58,237,0.3),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_50%_86%,rgba(91,33,182,0.24),transparent_40%)]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(120deg, rgba(124,58,237,0.16), rgba(0,0,0,0) 35%, rgba(168,85,247,0.16) 68%, rgba(0,0,0,0))"
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
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.95, 0.2] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: particle.delay + index * 0.07 }}
        />
      ))}

      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-2xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/14 via-transparent to-accent/18"
          />

          <div className="relative grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <header>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex rounded-full border border-primary/45 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
              >
                {finalCtaConfig.label}
              </motion.p>

              <motion.h2
                id="final-cta-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.06, ease: "easeOut" }}
                className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl md:text-6xl"
              >
                {finalCtaConfig.headline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
                className="mt-4 text-lg font-semibold text-primary sm:text-xl"
              >
                {finalCtaConfig.subheadline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
                className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg"
              >
                {finalCtaConfig.supportingText}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <LinkButton
                  href="/book-a-call"
                  onClick={() => trackEvent("callBooked", "final_cta_primary_book_call")}
                  className="min-w-[210px]"
                >
                  Get Free Strategy Call
                </LinkButton>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("whatsappClick", "final_cta_primary")}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary transition hover:scale-[1.02] hover:bg-primary/15"
                >
                  WhatsApp Us
                </a>
                <LinkButton
                  href="/contact"
                  variant="outline"
                  onClick={() => trackEvent("lead", "final_cta_work_together")}
                  className="min-w-[190px]"
                >
                  Let&apos;s Work Together
                </LinkButton>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="mt-5 max-w-2xl text-xs text-muted sm:text-sm"
              >
                {finalCtaConfig.trustMicrocopy}
              </motion.p>

              <motion.form
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
                className="mt-6 rounded-2xl border border-border/75 bg-background/55 p-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setEmailSubmitted(true);
                  trackEvent("lead", "final_cta_quick_email");
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Quick Email Capture</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto_auto]">
                  <label className="sr-only" htmlFor="final-email">
                    Email
                  </label>
                  <input
                    id="final-email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your best email"
                    className="rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
                  />
                  <LinkButton
                    href="/book-a-call"
                    onClick={() => trackEvent("callBooked", "final_cta_quick_email_book_call")}
                    className="w-full sm:w-auto"
                  >
                    Book a Call
                  </LinkButton>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/15 sm:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
                {emailSubmitted ? <p className="mt-3 text-xs text-primary">You&apos;re in. We&apos;ll send practical growth insights.</p> : null}
              </motion.form>
            </header>

            <motion.aside
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                aria-hidden="true"
                className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-primary/25 blur-3xl"
                animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/25 blur-3xl"
                animate={{ y: [0, 10, 0], x: [0, -7, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative space-y-4">
                <FinalCtaForm />

                <div className="grid gap-3 sm:grid-cols-2">
                  <article className="rounded-2xl border border-border/70 bg-surface/75 p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-primary">Booking</p>
                    <p className="mt-2 text-sm text-muted">Pick a time and discuss growth priorities directly.</p>
                    <a
                      href={siteConfig.calendlyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                    >
                      Open Calendar
                    </a>
                  </article>

                  <article className="rounded-2xl border border-border/70 bg-surface/75 p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-primary">Fastest Response</p>
                    <p className="mt-2 text-sm text-muted">For urgent queries, message directly on WhatsApp.</p>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                    >
                      Start WhatsApp Chat
                    </a>
                  </article>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
