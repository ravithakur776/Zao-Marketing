import { faqItems, homeServices, siteConfig } from "@/lib/site";

const cleanedWhatsapp = siteConfig.whatsappNumber.replace(/\D/g, "");

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.instagramUrl,
      "https://linkedin.com/company/zaomarketing",
      "https://x.com/zaomarketing",
      "https://facebook.com/zaomarketing"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: `+${cleanedWhatsapp}`,
        areaServed: ["IN", "Global"],
        availableLanguage: ["English", "Hindi"]
      }
    ]
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    priceRange: "$$$",
    telephone: `+${cleanedWhatsapp}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mathura",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    areaServed: [
      { "@type": "City", name: "Mathura" },
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Global" }
    ],
    serviceType: [
      "Marketing Agency",
      "Web Development Agency",
      "SEO Agency",
      "Digital Growth Agency",
      "UI/UX Agency",
      "AI Automation Agency"
    ]
  };
}

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    serviceType: "Digital Growth Services",
    areaServed: ["India", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zao Marketing Services",
      itemListElement: homeServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description
        }
      }))
    }
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString()
    }))
  };
}
