"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const leadX = useSpring(cursorX, { stiffness: 430, damping: 32, mass: 0.25 });
  const leadY = useSpring(cursorY, { stiffness: 430, damping: 32, mass: 0.25 });
  const trailX = useSpring(cursorX, { stiffness: 140, damping: 24, mass: 0.8 });
  const trailY = useSpring(cursorY, { stiffness: 140, damping: 24, mass: 0.8 });
  const auraX = useSpring(cursorX, { stiffness: 90, damping: 18, mass: 1.1 });
  const auraY = useSpring(cursorY, { stiffness: 90, damping: 18, mass: 1.1 });

  const [enabled, setEnabled] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (coarsePointer) {
      return;
    }

    setEnabled(true);

    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [data-magnetic="true"], input, textarea, select');
      setHoveringInteractive(Boolean(interactive));
    };

    const handleOut = () => {
      setHoveringInteractive(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [cursorX, cursorY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[140] hidden h-10 w-10 rounded-full border border-primary/30 bg-primary/10 md:block"
        animate={{ scale: hoveringInteractive ? 1.28 : 1, opacity: hoveringInteractive ? 0.85 : 0.55 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{ x: auraX, y: auraY, translateX: "-50%", translateY: "-50%" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[141] hidden h-7 w-7 rounded-full border border-primary/40 bg-primary/10 md:block"
        animate={{ scale: hoveringInteractive ? 1.2 : 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[142] hidden h-2.5 w-2.5 rounded-full bg-primary/80 shadow-[0_0_20px_rgba(147,51,234,0.7)] mix-blend-screen md:block"
        animate={{ scale: hoveringInteractive ? 1.55 : 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{ x: leadX, y: leadY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
