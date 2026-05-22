import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Zao Marketing | Founder-Led Digital Growth Agency",
  description:
    "Learn how Zao Marketing, based in Mathura, UP, helps local and global brands scale through web development, SEO, paid growth, UI/UX, and automation.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ])}
      />
      <PagePlaceholder
        title="About Zao Marketing"
        description="Founder-led strategic growth partner for businesses that want premium digital execution and measurable outcomes."
      />
    </>
  );
}
