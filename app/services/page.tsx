import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { breadcrumbSchema, servicesSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services | Web Development, SEO, UI/UX, Meta Ads, AI Automation",
  description:
    "Explore Zao Marketing services for local and global clients: web development, SEO, Meta Ads, UI/UX design, branding, and AI automation systems.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={servicesSchema()} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ])}
      />
      <PagePlaceholder
        title="Services"
        description="Conversion-focused services tailored to your growth stage, market, and revenue objectives."
      />
    </>
  );
}
