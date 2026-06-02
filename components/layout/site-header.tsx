"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LinkButton } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 12);

    if (latest < 90) {
      setHidden(false);
      return;
    }

    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: hidden ? -88 : 0, opacity: hidden ? 0.7 : 1 }}
      transition={{ duration: 0.34, ease: "easeOut" }}
      className="sticky top-0 z-[120] px-2 pt-3 sm:px-4"
    >
      <div className="container-shell">
        <div
          className={cn(
            "flex h-16 items-center justify-between gap-4 rounded-2xl border px-4 shadow-panel backdrop-blur-2xl transition duration-300 sm:px-6",
            scrolled
              ? "border-primary/35 bg-background/55"
              : "border-border/70 bg-background/45"
          )}
        >
          <Link href="/" data-magnetic="true" aria-label={`${siteConfig.name} home`}>
            <BrandLogo markClassName="h-9 w-9" />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-magnetic="true"
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm font-medium transition duration-300",
                    active ? "text-primary" : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-primary/35 bg-primary/10"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    />
                  ) : null}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <LinkButton href="/book-a-call" className="px-4 py-2 text-xs" variant="primary">
              Book a Call
            </LinkButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="container-shell overflow-hidden lg:hidden"
      >
        <div className="mt-2 grid gap-2 rounded-2xl border border-border/70 bg-surface/95 p-3 shadow-panel backdrop-blur-2xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-3 py-2 text-sm transition duration-300",
                pathname === item.href ? "bg-primary/20 text-primary" : "hover:bg-background"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
