import type { Metadata } from "next";
import { StructuredData } from "@/components/common/structured-data";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog | SEO, Marketing, Web Design, AI Growth Insights",
  description:
    "Read growth-focused insights from Zao Marketing on SEO, conversion optimization, startup web design, branding, AI tools, and digital scale strategies.",
  path: "/blog",
  type: "article"
});

export default function BlogPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" }
        ])}
      />
      <PagePlaceholder
        title="Growth Blog"
        description="Upcoming content pillars: SEO playbooks, web conversion systems, startup growth loops, AI automation, and brand positioning."
      />
    </>
  );
}
