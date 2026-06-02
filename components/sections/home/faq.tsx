"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { FaqAccordionItem } from "@/components/ui/faq-accordion-item";
import { SectionChapterIntro, SectionDivider } from "@/components/ui/section-heading";
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
    <section id="faq" className="relative overflow-hidden bg-[#07040d] py-32 md:py-40" aria-labelledby="faq-section-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_24%),radial-gradient(circle_at_76%_0%,rgba(124,58,237,0.09),transparent_32%)]"
      />
      <div className="container-shell">
        <SectionChapterIntro
          label="FAQ"
          titleId="faq-section-title"
          title={faqSectionConfig.headline}
          description={faqSectionConfig.supportingText}
        />

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-border/75 bg-surface/60 p-6 shadow-panel backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/16"
          />

          <div className="relative">
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
