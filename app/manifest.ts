import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Famex",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0918",
    theme_color: "#6d28d9",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
