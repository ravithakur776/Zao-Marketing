import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ExperienceShell } from "@/components/providers/experience-shell";
import { SiteHeader } from "@/components/layout/site-header";
import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { AnalyticsScripts } from "@/components/common/analytics";
import { StructuredData } from "@/components/common/structured-data";
import { TrackingReady } from "@/components/common/tracking-ready";
import { baseMetadata } from "@/lib/site";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = baseMetadata;
export const viewport: Viewport = {
  themeColor: "#6d28d9",
  colorScheme: "dark light"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <TrackingReady />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[160] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <AnimatedCursor />
          <SiteHeader />
          <ExperienceShell>{children}</ExperienceShell>
        </ThemeProvider>
        <StructuredData data={organizationSchema()} />
        <StructuredData data={localBusinessSchema()} />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
