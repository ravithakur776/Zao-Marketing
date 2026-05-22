"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FaqAccordionItemProps = {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

export function FaqAccordionItem({ id, question, answer, open, onToggle }: FaqAccordionItemProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border/75 bg-surface/75 shadow-panel transition duration-300 hover:border-primary/35">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
        >
          <span className="font-heading text-base font-semibold sm:text-lg">{question}</span>
          <span
            className={cn(
              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition duration-300",
              open && "rotate-45"
            )}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/70 px-5 pb-5 pt-4 sm:px-6">
              <p className="text-sm leading-relaxed text-muted sm:text-base">{answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
