"use client";

import { useState } from "react";
import { ActionButton } from "@/components/ui/button";
import { trackEvent } from "@/lib/tracking";

export function FinalCtaForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-2xl border border-border/75 bg-surface/75 p-5 shadow-panel backdrop-blur-xl sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        trackEvent("lead", "final_cta_form");
      }}
    >
      <h3 className="font-heading text-xl font-semibold">Tell us about your growth goal</h3>
      <p className="mt-2 text-sm text-muted">Share a quick brief and we will map your best next move.</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="sm:col-span-1">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Business / Brand</span>
          <input
            required
            name="brand"
            type="text"
            autoComplete="organization"
            placeholder="Brand or company name"
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Project / Service Need</span>
          <input
            required
            name="serviceNeed"
            type="text"
            placeholder="Reels, ads, website, social media..."
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
          />
        </label>

        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Share your current goal, timeline, and what you want Famex to help you improve."
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <ActionButton type="submit" className="px-5 py-3">
          Let&apos;s Work Together
        </ActionButton>
        <p className="text-xs text-muted">Demo mode active. Connect to CRM/webhook for production capture.</p>
      </div>

      {submitted ? <p className="mt-4 text-sm text-primary">Thanks. Your project brief has been captured.</p> : null}
    </form>
  );
}
