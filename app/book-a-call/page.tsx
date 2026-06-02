import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Book a Call | Free Growth Strategy Session",
  description:
    "Book a strategy call with Zao Marketing to review your current funnel, identify growth bottlenecks, and build a conversion-focused execution roadmap.",
  path: "/book-a-call"
});

export default function BookACallPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book a Call", path: "/book-a-call" }
        ])}
      />
      <PagePlaceholder
        title="Book a Call"
        description="Reserve a focused session to align strategy, digital execution, and measurable conversion goals."
      />
    </>
  );
}
