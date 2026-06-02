import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))"
      },
      fontFamily: {
        heading: ["Satoshi", "Space Grotesk", "Avenir Next", "Segoe UI", "sans-serif"],
        body: ["Inter", "Manrope", "Avenir Next", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"]
      },
      boxShadow: {
        glow: "0 12px 60px -20px rgba(132, 67, 255, 0.55)",
        panel: "0 16px 40px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
