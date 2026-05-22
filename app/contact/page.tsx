import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact | Talk to Zao Marketing",
  description:
    "Contact Zao Marketing for web development, SEO, paid growth, UI/UX, and automation services in Mathura, UP and worldwide remote projects.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
      <PagePlaceholder
        title="Contact"
        description="Share your growth goal and get a founder-led response with clear next steps."
      />
    </>
  );
}
