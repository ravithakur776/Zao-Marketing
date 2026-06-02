"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { siteConfig } from "@/lib/site";

type ExperienceShellProps = {
  children: React.ReactNode;
};

export function ExperienceShell({ children }: ExperienceShellProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 30,
    mass: 0.35
  });

  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, -130]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hasLoaded = sessionStorage.getItem("famex-loader-seen") === "1";
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("famex-loader-seen", "1");
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
            className="fixed inset-0 z-[130] grid place-items-center bg-background"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-[280px] rounded-2xl border border-primary/35 bg-surface/70 p-6 text-center shadow-panel backdrop-blur-xl"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-primary/30 blur-2xl"
              />
              <BrandLogo className="justify-center" markClassName="h-12 w-12" />
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-primary">{siteConfig.tagline}</p>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full border border-border/70 bg-background/60">
                <motion.span
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 0.95, ease: "easeInOut" }}
                  className="block h-full w-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden="true"
          style={{ y: reduceMotion ? 0 : blobOneY }}
          className="absolute -left-20 top-[8%] h-[340px] w-[340px] rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          style={{ y: reduceMotion ? 0 : blobTwoY }}
          className="absolute right-[-120px] top-[18%] h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl"
        />
        <div aria-hidden="true" className="noise-overlay absolute inset-0" />
      </div>

      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[115] h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
        style={{ scaleX: progress }}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main-content"
          key={pathname}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6, filter: "blur(4px)" }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          className="relative z-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
