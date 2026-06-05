"use client";

import { useState } from "react";
import { ActionButton } from "@/components/ui/button";
import { trackEvent } from "@/lib/tracking";

export function FinalCtaForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="premium-panel rounded-2xl p-5 sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        trackEvent("lead", "final_cta_form");
      }}
    >
      <h3 className="font-heading text-xl font-semibold">Tell us about your growth goal</h3>
      <p className="mt-2 text-sm text-muted">Share a short brief and the Famex team will respond with clear next steps.</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="sm:col-span-1">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-border/90 bg-background/80 px-4 py-3 text-sm text-foreground outline-none ring-primary transition placeholder:text-muted/70 focus:border-primary/60 focus:ring-2"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-border/90 bg-background/80 px-4 py-3 text-sm text-foreground outline-none ring-primary transition placeholder:text-muted/70 focus:border-primary/60 focus:ring-2"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Service Needed</span>
          <input
            required
            name="serviceNeeded"
            type="text"
            placeholder="Video editing, ads, website..."
            className="w-full rounded-xl border border-border/90 bg-background/80 px-4 py-3 text-sm text-foreground outline-none ring-primary transition placeholder:text-muted/70 focus:border-primary/60 focus:ring-2"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Business Name</span>
          <input
            required
            name="businessName"
            type="text"
            autoComplete="organization"
            placeholder="Brand or company name"
            className="w-full rounded-xl border border-border/90 bg-background/80 px-4 py-3 text-sm text-foreground outline-none ring-primary transition placeholder:text-muted/70 focus:border-primary/60 focus:ring-2"
          />
        </label>

        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Email <span className="normal-case tracking-normal text-muted/70">(optional)</span></span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-border/90 bg-background/80 px-4 py-3 text-sm text-foreground outline-none ring-primary transition placeholder:text-muted/70 focus:border-primary/60 focus:ring-2"
          />
        </label>

        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Share your current goal, timeline, and what you want Famex to help you improve."
            className="w-full rounded-xl border border-border/90 bg-background/80 px-4 py-3 text-sm text-foreground outline-none ring-primary transition placeholder:text-muted/70 focus:border-primary/60 focus:ring-2"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <ActionButton type="submit" className="px-5 py-3">
          Send Inquiry
        </ActionButton>
        <p className="text-xs text-muted">We will review your inquiry and respond with the best next step.</p>
      </div>

      {submitted ? <p className="mt-4 text-sm text-primary">Thanks. Your project brief has been captured.</p> : null}
    </form>
  );
}
