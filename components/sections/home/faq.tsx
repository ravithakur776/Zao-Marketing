"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { FaqAccordionItem } from "@/components/ui/faq-accordion-item";
import { faqItems, faqSectionConfig } from "@/lib/site";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" }
  })
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="pb-20 md:pb-24" aria-labelledby="faq-section-title">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/16"
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-6 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
            animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {faqSectionConfig.label}
            </motion.p>

            <motion.h2
              id="faq-section-title"
              custom={0.06}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl"
            >
              {faqSectionConfig.headline}
            </motion.h2>

            <motion.p
              custom={0.12}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-3 max-w-2xl text-sm text-muted sm:text-base"
            >
              {faqSectionConfig.supportingText}
            </motion.p>

            <motion.div
              custom={0.2}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 space-y-3"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                >
                  <FaqAccordionItem
                    id={`faq-${index}`}
                    question={item.question}
                    answer={item.answer}
                    open={openIndex === index}
                    onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              custom={0.34}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <p className="text-sm text-muted">Still have questions? Book a call and we’ll map your growth path.</p>
              <LinkButton href="/book-a-call">Book a Call</LinkButton>
              <LinkButton href="/contact" variant="outline">
                Let&apos;s Talk About Your Project
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
