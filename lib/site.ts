import type { Metadata } from "next";

export const siteConfig = {
  name: "Famex Marketing",
  description:
    "Founder-led marketing agency helping startups, creators, and businesses scale online with content, design, advertising, websites, and growth systems.",
  tagline: "Helping Brands Scale Online",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://famexmarketing.com",
  ogImage: "/og-famex-marketing.jpg",
  founderRole: "Full Stack Developer & Marketing Strategist",
  founderName: "Ravi Thakur",
  location: {
    city: "Mathura",
    region: "Uttar Pradesh",
    country: "India"
  },
  serviceRegion: "Local + Global",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+91 89795 61869",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/famex.marketing/",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/famexmarketing/strategy-call",
  email: "famexmarketing.in@gmail.com",
  linkedInUrl: "https://www.linkedin.com/company/famex-marketings/"
};

export const heroConfig = {
  headline: "Helping Brands Grow Faster Through Marketing & Technology",
  subheadline:
    "Famex Marketing helps startups, creators, and businesses scale online with high-converting marketing strategies, premium web experiences, branding, and growth-focused digital systems.",
  supportingText:
    "From web development and SEO to paid ads and AI automation — we build digital experiences designed to turn attention into revenue.",
  trustPoints: ["Helping startups scale online", "Results-driven marketing"]
};

export const heroBadges = ["Conversion-First", "Full Stack + Marketing", "Performance-Led Creative"];

export const heroStats = [
  { value: "120+", label: "Growth campaigns launched" },
  { value: "8.4x", label: "Average return on ad spend" },
  { value: "92%", label: "Retainer continuity rate" }
];

export const socialProofConfig = {
  label: "Trusted Momentum",
  headline: "Results that speak louder",
  supportingText: "Built through strategy, execution, and measurable growth."
};

export const socialProofBadges = [
  "Startup Partner",
  "Conversion-Focused Execution",
  "Founder-Led Delivery",
  "Premium Digital Systems",
  "Performance Marketing",
  "Creative + Technical Strategy"
];

export const socialProofStats = [
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Clients" },
  { value: "1 Year", label: "Founder-Led Agency Journey" }
];

export const socialProofTestimonials = [
  {
    quote: "Famex helped us turn scattered marketing into a clear growth system. The new landing pages brought stronger leads within the first month.",
    name: "A. Mehta",
    role: "Founder",
    companyType: "Early-Stage SaaS"
  },
  {
    quote: "The team understood our audience quickly and improved the offer, funnel, and campaign flow without making the process feel heavy.",
    name: "R. Sharma",
    role: "Growth Lead",
    companyType: "Creator Brand"
  },
  {
    quote: "Our website finally feels premium and conversion-focused. More importantly, the leads we get now are better qualified.",
    name: "M. Patel",
    role: "Owner",
    companyType: "Local Service Business"
  },
  {
    quote: "They gave us the structure we were missing: sharper positioning, cleaner creative, and reporting that made next steps obvious.",
    name: "N. Kapoor",
    role: "Co-Founder",
    companyType: "D2C Brand"
  }
];

export const servicesSectionConfig = {
  label: "Core Services",
  headline: "Services That Drive Real Business Growth",
  supportingText:
    "From viral short-form content and paid advertising to high-converting websites and social media systems — every service is built to generate measurable business results."
};

export const homeServices = [
  {
    title: "Reels & Video Editing",
    outcome: "Higher Engagement",
    description: "Create engaging short-form content designed to increase visibility and audience engagement.",
    href: "/services",
    type: "reels",
    tier: "main"
  },
  {
    title: "Meta Ads & Google Ads",
    outcome: "Scalable Lead Generation",
    description: "Launch strategic paid campaigns that reach high-intent audiences and generate measurable growth.",
    href: "/services",
    type: "ads",
    tier: "main"
  },
  {
    title: "Web Development",
    outcome: "Conversion-Focused Websites",
    description: "Build premium web experiences designed to turn visitors into qualified leads and customers.",
    href: "/services",
    type: "web",
    tier: "main"
  },
  {
    title: "Social Media Management",
    outcome: "Consistent Brand Growth",
    description: "Manage your social presence with a structured content system built for trust, reach, and consistency.",
    href: "/services",
    type: "social",
    tier: "main"
  },
  {
    title: "Branding",
    outcome: "Stronger Brand Identity",
    description: "Create a sharper identity system that builds recognition, trust, and premium perception.",
    href: "/services",
    type: "branding",
    tier: "secondary"
  },
  {
    title: "SEO",
    outcome: "Long-Term Organic Growth",
    description: "Improve search visibility and attract high-intent traffic through structured organic growth.",
    href: "/services",
    type: "seo",
    tier: "secondary"
  },
  {
    title: "AI Automation",
    outcome: "Operational Efficiency",
    description: "Automate repetitive workflows so your team can move faster and focus on growth.",
    href: "/services",
    type: "automation",
    tier: "secondary"
  }
] as const;

export const aboutSectionConfig = {
  label: "About Famex Marketing",
  headline: "Helping brands grow through strategy, systems, and execution.",
  supportingText:
    "Famex Marketing was built to bridge the gap between strong creative work and measurable business growth."
};

export const aboutFounderStory = {
  intro:
    "Famex Marketing exists for brands that need more than isolated campaigns. We combine marketing strategy, conversion-focused design, and technical execution into systems built to attract attention, generate leads, and scale with clarity.",
  mission:
    "Our mission is to help brands grow with strategy, design, development, marketing, and automation working as one cohesive system.",
  vision:
    "Our vision is to build modern digital systems that turn attention into revenue, sustainably and at scale."
};

export const aboutJourney = [
  {
    year: "Year 1",
    title: "Built the growth foundation",
    detail: "Focused on positioning, websites, and lead-generation systems for businesses that needed clearer digital execution."
  },
  {
    year: "Year 2",
    title: "Connected strategy to channels",
    detail: "Integrated content, paid media, SEO, and conversion systems into a more complete growth workflow."
  },
  {
    year: "Now",
    title: "Scaling measurable outcomes",
    detail: "Helping brands turn attention into qualified pipeline with strategy-first execution and sharper systems."
  }
];

export const aboutExpertiseBadges = [
  "Full Stack Development",
  "Growth Marketing",
  "Conversion UX",
  "SEO & Content Strategy",
  "Paid Media Systems",
  "AI Automation Workflows"
];

export const portfolioSectionConfig = {
  label: "Works",
  headline: "Real Work. Real Results.",
  supportingText:
    "From content creation and social media growth to websites, branding, and advertising — every project is built to drive measurable business outcomes."
};

export const portfolioProjects = [
  {
    category: "E-commerce",
    title: "Conversion-First Commerce Experience",
    description:
      "Rebuilt a growth-focused e-commerce website with cleaner product storytelling, faster checkout flow, and stronger purchase intent capture.",
    techStack: ["Next.js", "Shopify", "GA4", "Meta Pixel"],
    previewHref: "/services",
    caseStudyHref: "/contact",
    featured: true,
    metric: "+38% checkout conversion"
  },
  {
    category: "Personal Brand",
    title: "Authority-Led Creator Works",
    description:
      "Designed a premium founder portfolio with sharper positioning, trust-led sections, and engagement paths for inbound collaborations.",
    techStack: ["Next.js", "Framer Motion", "SEO", "Email Capture"],
    previewHref: "/services",
    caseStudyHref: "/contact",
    featured: false,
    metric: "2.4x higher inquiry rate"
  },
  {
    category: "Dashboard / SaaS UI",
    title: "SaaS Analytics Command Center",
    description:
      "Crafted a modern analytics interface with clearer visual hierarchy, actionable data modules, and smoother product onboarding flows.",
    techStack: ["React", "TypeScript", "Data Viz", "UX Strategy"],
    previewHref: "/services",
    caseStudyHref: "/contact",
    featured: false,
    metric: "-27% onboarding drop-off"
  }
] as const;

export const testimonialsSectionConfig = {
  label: "Client Voices",
  headline: "Results that feel premium and perform in the real world",
  supportingText:
    "Founders, operators, and creators trust Famex Marketing for strategic execution that turns attention into qualified growth."
};

export const homeTestimonials = [
  {
    name: "Neha Arora",
    role: "Startup Founder, Fintech SaaS",
    avatar: "NA",
    rating: 5,
    quote:
      "Famex brought structure to our launch. The funnel messaging became clearer, and qualified demo requests improved within weeks."
  },
  {
    name: "Rohan Mehta",
    role: "Owner, E-commerce Brand",
    avatar: "RM",
    rating: 5,
    quote:
      "The team improved our website flow and ad alignment. Conversion quality got better, not just traffic volume."
  },
  {
    name: "Aisha Khan",
    role: "Creator & SaaS Consultant",
    avatar: "AK",
    rating: 5,
    quote:
      "Execution felt premium and focused. Every recommendation had a reason, and implementation was clean and fast."
  }
] as const;

export const pricingPreviewConfig = {
  label: "Plans",
  headline: "PLANS",
  supportingText:
    "Choose the service plan that fits your brand’s current growth stage."
};

export const pricingPreviewPlans = [
  {
    name: "Content & Growth Plan",
    cta: "Get Started",
    description: "Businesses that need consistent content, social media presence, and basic ad support.",
    badge: "Foundation",
    highlight: "Consistent brand growth and social presence",
    featured: false,
    groups: ["Content", "Social Media", "Ads"],
    features: [
      "Video Editing",
      "Graphic Design",
      "Daily posters",
      "Social media creatives",
      "Social Media Management",
      "Monitoring, Analytics & Reporting",
      "Coordination with client team",
      "Video Shoot",
      "Meta Ads"
    ]
  },
  {
    name: "Growth Plus Plan",
    cta: "Scale My Brand",
    description: "Brands that want content, media production, and stronger ad execution working together.",
    badge: "Most Popular",
    highlight: "Best balance between content, marketing, and execution",
    featured: true,
    groups: ["Content", "Production", "Ads"],
    features: [
      "All services from Plan 1",
      "Photo + Video Shooting / Editing",
      "Events & Visits",
      "Meta Ads",
      "Google Ads"
    ]
  },
  {
    name: "Full Growth System",
    cta: "Book a Strategy Call",
    description: "Brands that want a complete marketing partner and dedicated execution.",
    badge: "Premium",
    highlight: "Complete high-value growth execution",
    featured: false,
    groups: ["Strategy", "Website", "Production"],
    features: [
      "All services from Plan 2",
      "Dedicated everyday shoot",
      "Website development",
      "Website charges discussed separately depending on project scope"
    ]
  }
] as const;

export const faqSectionConfig = {
  label: "FAQ",
  headline: "Answers that remove friction and move projects forward",
  supportingText:
    "Clear expectations, transparent process, and founder-led communication so you can make confident growth decisions."
};

export const faqItems = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects run between 2 and 8 weeks depending on scope. We define clear milestones upfront so you know what is delivered each week and how progress is tracked."
  },
  {
    question: "Can you manage SEO and Meta Ads together?",
    answer:
      "Yes. We often combine SEO, landing pages, and Meta Ads into one growth system so organic and paid channels support each other instead of competing."
  },
  {
    question: "How does communication work during the project?",
    answer:
      "You get a founder-led workflow with structured updates, review checkpoints, and clear next actions. We keep communication concise, strategic, and implementation-focused."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. After launch, we can continue with optimization, maintenance, analytics refinement, and growth experiments through monthly support or custom retainers."
  },
  {
    question: "What platforms and tech stack do you build on?",
    answer:
      "We build on modern scalable stacks such as Next.js and related growth tools, with platform choices based on your business goals, team workflow, and long-term scalability."
  }
] as const;

export const finalCtaConfig = {
  label: "Final Step",
  headline: "Ready to Scale Your Brand?",
  subheadline: "Let’s Turn Your Traffic Into Revenue",
  supportingText:
    "Build a premium growth system that converts attention into customers through strategy, design, marketing, and automation.",
  trustMicrocopy:
    "Founder-led, strategy-first execution for startups and modern businesses that want measurable digital growth."
};

export const footerConfig = {
  description:
    "Helping brands scale through content, marketing, design, and digital growth systems.",
  closingLine: "Built with strategy, creativity & growth."
};

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Plans", href: "/plans" },
  { label: "Works", href: "/works" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
] as const;

export const footerServiceLinks = [
  { label: "Video Editing", href: "/services" },
  { label: "Social Media Management", href: "/services" },
  { label: "Meta Ads", href: "/services" },
  { label: "Graphic Design", href: "/services" },
  { label: "Branding", href: "/services" },
  { label: "Website Development", href: "/services" }
] as const;

export const footerSocialLinks = [
  { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/famex.marketing/", icon: "instagram" },
  { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/company/famex-marketings/", icon: "linkedin" }
] as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Plans", href: "/plans" },
  { label: "Works", href: "/works" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
];

export const serviceItems = [
  "Website Development",
  "SEO",
  "Social Media Management",
  "Video Editing",
  "Branding",
  "Paid Ads",
  "Instagram Growth",
  "UI/UX Design",
  "Funnel Building",
  "AI Automation"
];

export const audienceItems = [
  "Startups",
  "Local businesses",
  "Creators",
  "Coaches",
  "E-commerce brands",
  "SaaS companies",
  "Personal brands",
  "Restaurants",
  "Real estate businesses"
];

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "Business",
  authors: [{ name: siteConfig.founderName }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
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
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  alternates: {
    canonical: siteConfig.url
  },
  keywords: [
    "marketing agency",
    "web development agency",
    "seo agency",
    "digital growth agency",
    "ui ux agency",
    "ai automation agency",
    "marketing agency in Mathura",
    "digital marketing agency Mathura UP",
    "India growth agency",
    "startup growth marketing"
  ]
};
