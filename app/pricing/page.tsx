import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing | Flexible Project-Based Growth Plans",
  description:
    "View project-based pricing options from Zao Marketing for website development, SEO, ads, and conversion growth systems. Built for value and scalability.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" }
        ])}
      />
      <PagePlaceholder
        title="Pricing"
        description="Transparent, premium engagement structures designed around outcomes, not cheap deliverables."
      />
    </>
  );
}
