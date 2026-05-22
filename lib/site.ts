import type { Metadata } from "next";

export const siteConfig = {
  name: "Zao Marketing",
  description:
    "Founder-led personal-brand marketing agency helping startups, creators, and businesses turn clicks into customers with full-funnel growth systems.",
  tagline: "Turning Clicks Into Customers",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zaomarketing.com",
  ogImage: "/og-zao-marketing.jpg",
  founderRole: "Full Stack Developer & Marketing Strategist",
  founderName: "Zao Marketing Founder",
  location: {
    city: "Mathura",
    region: "Uttar Pradesh",
    country: "India"
  },
  serviceRegion: "Local + Global",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+919999999999",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/zaomarketing",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/zaomarketing/strategy-call",
  email: "hello@zaomarketing.com"
};

export const heroConfig = {
  eyebrow: "Startup + Corporate Premium Agency",
  headline: "Helping Brands Grow Faster Through Marketing & Technology",
  subheadline:
    "Zao Marketing helps startups, creators, and businesses scale online with high-converting marketing strategies, premium web experiences, branding, and growth-focused digital systems.",
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
  headline: "Trusted by growing brands",
  supportingText: "Built for results, not noise. Early momentum, real execution."
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
    quote: "Zao helped us tighten our positioning and launch faster with a cleaner conversion flow.",
    name: "A. Mehta",
    role: "Founder, Early-Stage SaaS"
  },
  {
    quote: "Communication was direct, execution was sharp, and every update moved us forward.",
    name: "R. Sharma",
    role: "Growth Lead, Creator Brand"
  },
  {
    quote: "The team blended design, marketing, and technical thinking in a way most agencies do not.",
    name: "M. Patel",
    role: "Owner, Service Business"
  }
];

export const servicesSectionConfig = {
  label: "Core Services",
  headline: "Premium execution across the channels that drive growth",
  supportingText:
    "Built for conversion-focused brands that need design quality, technical depth, and measurable performance."
};

export const homeServices = [
  {
    icon: "web",
    title: "Web Development",
    description: "Fast, premium websites engineered to convert visitors into qualified leads and customers.",
    href: "/services",
    featured: true
  },
  {
    icon: "seo",
    title: "SEO",
    description: "Improve search visibility and bring in consistent organic traffic from high-intent audiences.",
    href: "/services",
    featured: true
  },
  {
    icon: "ads",
    title: "Meta Ads",
    description: "Launch performance campaigns that drive targeted traffic and qualified customer acquisition.",
    href: "/services",
    featured: true
  },
  {
    icon: "social",
    title: "Social Media Management",
    description: "Build consistent brand presence with content systems designed for reach, trust, and engagement.",
    href: "/services",
    featured: false
  },
  {
    icon: "brand",
    title: "Branding",
    description: "Position your business with a premium identity that builds authority and buyer confidence.",
    href: "/services",
    featured: false
  },
  {
    icon: "uiux",
    title: "UI/UX Design",
    description: "Design intuitive digital experiences that improve retention, usability, and conversion outcomes.",
    href: "/services",
    featured: false
  }
] as const;

export const aboutSectionConfig = {
  label: "About Zao Marketing",
  headline: "Helping brands grow through smart marketing and systems.",
  supportingText:
    "Zao Marketing is a founder-led studio built at the intersection of strategy, technology, and modern brand execution."
};

export const aboutFounderStory = {
  intro:
    "I started Zao Marketing to close the gap between beautiful design and measurable growth. Many brands were getting one or the other. I wanted both.",
  mission:
    "Our mission is to help brands grow with strategy, design, development, marketing, and automation working as one cohesive system.",
  vision:
    "Our vision is to build modern digital systems that turn attention into revenue, sustainably and at scale."
};

export const aboutJourney = [
  {
    year: "Year 1",
    title: "Built the foundation",
    detail: "Started with founder-led projects focused on websites, positioning, and lead generation systems."
  },
  {
    year: "Year 2",
    title: "Expanded execution depth",
    detail: "Integrated SEO, paid media, and automation into one growth workflow tailored to each brand."
  },
  {
    year: "Now",
    title: "Scaling premium outcomes",
    detail: "Helping startups and businesses turn digital attention into qualified pipeline and revenue."
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
  label: "Portfolio / Projects",
  headline: "Work that blends premium design with growth performance",
  supportingText:
    "Three example engagements showing how strategy, UX, and execution come together to drive real outcomes."
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
    title: "Authority-Led Creator Portfolio",
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

export const processSectionConfig = {
  label: "How We Work",
  headline: "A clear growth system from first audit to scalable execution",
  supportingText:
    "Every engagement follows a structured flow so strategy, design, and performance stay aligned from day one."
};

export const processSteps = [
  {
    id: "01",
    icon: "audit",
    title: "Audit",
    description: "We review positioning, funnel friction, channel performance, and technical blockers.",
    badge: "Strategy First",
    metric: "Clarity map in 72h"
  },
  {
    id: "02",
    icon: "planning",
    title: "Planning",
    description: "We design a focused roadmap with priorities, messaging direction, and KPI targets.",
    badge: "Growth Focused",
    metric: "Roadmap + KPI model"
  },
  {
    id: "03",
    icon: "design",
    title: "Design",
    description: "We craft premium user journeys and conversion-ready interfaces built for trust and action.",
    badge: "Conversion Ready",
    metric: "UX + brand alignment"
  },
  {
    id: "04",
    icon: "marketing",
    title: "Marketing",
    description: "We launch campaigns, content, and distribution loops that bring qualified traffic and leads.",
    badge: "Performance Driven",
    metric: "Acquisition engine live"
  },
  {
    id: "05",
    icon: "scale",
    title: "Scale",
    description: "We optimize continuously with insights, automations, and systems that compound over time.",
    badge: "Scalable Systems",
    metric: "Weekly optimization cycles"
  }
] as const;

export const testimonialsSectionConfig = {
  label: "Client Voices",
  headline: "Results that feel premium and perform in the real world",
  supportingText:
    "Founders, operators, and creators trust Zao Marketing for strategic execution that turns attention into qualified growth."
};

export const homeTestimonials = [
  {
    name: "Neha Arora",
    role: "Startup Founder, Fintech SaaS",
    avatar: "NA",
    rating: 5,
    quote:
      "Zao brought structure to our launch. The funnel messaging became clearer, and qualified demo requests improved within weeks."
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
  label: "Pricing Preview",
  headline: "Flexible Plans Built for Growth",
  supportingText:
    "Project-based engagements designed around business stage, goals, and execution depth. Every plan can be tailored to your growth targets."
};

export const pricingPreviewPlans = [
  {
    name: "Starter",
    price: "$1,500 - $3,000",
    description: "For early-stage brands that need a premium foundation and clean conversion setup.",
    badge: "Project Based",
    highlight: "Fast launch with strategic essentials",
    featured: false,
    features: [
      "Website Design & Development",
      "SEO Optimization",
      "Branding Support",
      "Analytics Setup"
    ]
  },
  {
    name: "Premium",
    price: "$4,000 - $8,000",
    description: "For growing brands ready to combine premium digital presence with acquisition systems.",
    badge: "Most Popular",
    highlight: "Balanced build + growth execution",
    featured: true,
    features: [
      "Website Design & Development",
      "SEO Optimization",
      "Meta Ads Setup",
      "Funnel Optimization",
      "Growth Strategy",
      "Priority Support"
    ]
  },
  {
    name: "Pro",
    price: "$9,000 - $18,000",
    description: "For brands scaling aggressively with advanced funnels, automation, and performance loops.",
    badge: "Custom Scope",
    highlight: "End-to-end growth system architecture",
    featured: false,
    features: [
      "Full Funnel Build",
      "Meta Ads + Optimization",
      "AI Automation",
      "Advanced Analytics Setup",
      "Brand & UX Evolution",
      "Priority Support"
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
    "Zao Marketing helps brands scale online by combining marketing, development, branding, and growth systems designed to turn traffic into customers.",
  newsletterCta: "Get growth insights, frameworks, and launch ideas in your inbox.",
  closingLine: "Built with strategy, design, and growth in mind."
};

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Call", href: "/book-a-call" }
] as const;

export const footerServiceLinks = [
  { label: "Web Development", href: "/services" },
  { label: "SEO", href: "/services" },
  { label: "Meta Ads", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "Branding", href: "/services" },
  { label: "Social Media Marketing", href: "/services" }
] as const;

export const footerSocialLinks = [
  { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/zaomarketing", icon: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/zaomarketing", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/zaomarketing", icon: "github" },
  { label: "X", href: "https://x.com/zaomarketing", icon: "x" },
  { label: "Facebook", href: "https://facebook.com/zaomarketing", icon: "facebook" }
] as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Call", href: "/book-a-call" }
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
