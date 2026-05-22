import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const primaryKeywords = [
  "marketing agency",
  "web development agency",
  "SEO agency",
  "digital growth agency",
  "UI/UX agency",
  "AI automation agency"
];

export const locationKeywords = [
  "marketing agency in Mathura",
  "digital marketing agency Mathura UP",
  "web development company in Mathura",
  "SEO services in Uttar Pradesh",
  "India digital growth agency",
  "global remote marketing agency"
];

export const sharedKeywords = [
  ...primaryKeywords,
  ...locationKeywords,
  "startup growth marketing",
  "conversion optimization",
  "lead generation agency",
  "brand strategy",
  "Meta ads management"
];

type PageSEOInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = sharedKeywords,
  type = "website"
}: PageSEOInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage]
    }
  };
}
