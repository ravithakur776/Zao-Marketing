"use client";

import { motion } from "framer-motion";
import { SectionChapterIntro, SectionDivider } from "@/components/ui/section-heading";
import { aboutFounderStory, aboutJourney, aboutSectionConfig } from "@/lib/site";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay, ease: "easeOut" }
  })
};

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#07040d] py-32 md:py-40" aria-labelledby="about-section-title">
      <SectionDivider />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_18%,rgba(255,255,255,0.055),transparent_24%),radial-gradient(circle_at_18%_24%,rgba(124,58,237,0.075),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(168,85,247,0.045),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:54px_54px]"
      />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 opacity-18" />

      <div className="container-shell">
        <div className="relative grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <article>
            <SectionChapterIntro
              label="ABOUT"
              titleId="about-section-title"
              title={aboutSectionConfig.headline}
              description={aboutSectionConfig.supportingText}
            />

            <motion.div
              custom={0.18}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
              whileHover={{ y: -4 }}
              className="mt-14 rounded-[1.65rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-300 hover:border-primary/24 hover:bg-white/[0.06] sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-2xl font-semibold text-foreground">Founder Story</h3>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Growth Partner
                </span>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/88">{aboutFounderStory.intro}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Strategy", "Systems", "Execution"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-foreground/86">
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </article>

          <motion.aside
            custom={0.14}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 lg:pt-12"
          >
            <motion.div
              whileHover={{ y: -3 }}
              className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_58px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 hover:border-primary/24 hover:bg-white/[0.055]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/[0.08] blur-3xl"
              />
              <div className="relative">
                <p className="text-xs font-medium uppercase text-primary">Founder-Led</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">Strategy-first execution.</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                  Strategy-first execution with a hands-on approach to growth.
                </p>
              </div>
            </motion.div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_58px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase text-primary">Journey</p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">Built through progression</h3>
                </div>
              </div>

              <ol className="relative mt-7 space-y-5">
                <div aria-hidden="true" className="absolute bottom-5 left-[1.05rem] top-5 w-px bg-gradient-to-b from-primary/50 via-white/12 to-transparent" />
                {aboutJourney.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.48, delay: index * 0.09, ease: "easeOut" }}
                    className="relative grid grid-cols-[2.25rem_1fr] gap-4"
                  >
                    <span className="relative z-10 mt-1 grid h-9 w-9 place-items-center rounded-full border border-primary/25 bg-[#100a19] text-[0.62rem] font-semibold text-primary shadow-[0_0_0_5px_rgba(7,4,13,0.9)]">
                      {index + 1}
                    </span>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition duration-300 hover:border-primary/24 hover:bg-white/[0.045]">
                      <span className="text-xs font-semibold uppercase text-primary">{item.year}</span>
                      <p className="mt-2 font-heading text-lg font-semibold text-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
