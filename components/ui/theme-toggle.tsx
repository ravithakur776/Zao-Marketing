"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-border/80" aria-hidden="true" />;
  }

  const isDark = theme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 transition hover:border-primary"
    >
      <span className="text-lg transition group-hover:scale-110">{isDark ? "☀" : "☾"}</span>
    </button>
  );
}
