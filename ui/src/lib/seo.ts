/**
 * MEOK SEO & Meta Optimization
 * 
 * Structured data, Open Graph, Twitter Cards, and search optimization.
 */

import { Metadata } from "next";

// ── Default Meta Configuration ─────────────────────────────────────────────

export const DEFAULT_META: Metadata = {
  title: {
    default: "MEOK.AI — Personal Sovereign AI That Remembers You",
    template: "%s | MEOK.AI",
  },
  description:
    "Every AI forgets you. MEOK remembers. The world's first sovereign AI OS — one memory layer, every LLM, built to work, guard, and play. Free forever.",
  keywords: [
    "personal sovereign AI",
    "sovereign AI OS",
    "AI that remembers you",
    "AI companion",
    "private AI",
    "AI with memory",
    "sovereign AI agent",
    "MEOK AI",
    "Maternal Covenant",
  ],
  authors: [{ name: "MEOK AI LABS" }],
  creator: "MEOK AI LABS",
  publisher: "MEOK AI LABS",
  metadataBase: new URL("https://meok.ai"),
  alternates: {
    canonical: "https://meok.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://meok.ai",
    siteName: "MEOK.AI",
    title: "MEOK.AI — Personal Sovereign AI That Remembers You",
    description:
      "Every AI forgets you. MEOK remembers. The world's first sovereign AI OS.",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK.AI&desc=Your+sovereign+AI",
        width: 1200,
        height: 630,
        alt: "MEOK.AI — Your Sovereign AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@meokai",
    creator: "@meokai",
    title: "MEOK.AI — Personal Sovereign AI That Remembers You",
    description:
      "Every AI forgets you. MEOK remembers. The world's first sovereign AI OS.",
    images: ["https://meok.ai/api/og?title=MEOK.AI&desc=Your+sovereign+AI"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

// ── Structured Data Generators ────────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    logo: "https://meok.ai/brand/icon-512.png",
    description:
      "MEOK builds sovereign AI companions with permanent memory. Your data. Your AI. Your rules.",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Nicholas",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    sameAs: [
      "https://twitter.com/meokai",
      "https://github.com/meok-ai",
      "https://linkedin.com/company/meok-ai",
    ],
  };
}

export function generateSoftwareApplicationSchema(rating?: number, reviewCount?: number) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MEOK.AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      priceValidUntil: "2026-12-31",
    },
    description:
      "Personal sovereign AI companion with permanent memory. One memory layer, every LLM.",
    url: "https://meok.ai",
    image: "https://meok.ai/brand/cover.png",
    author: {
      "@type": "Organization",
      name: "MEOK AI LABS",
    },
    featureList: [
      "Permanent encrypted memory",
      "Multi-LLM routing (Claude, GPT-4o, DeepSeek)",
      "Birth ceremony character creation",
      "Family Guardian protection",
      "Ralph Mode autonomous agents",
      "Work OS tools",
    ],
  };

  if (rating && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

export function generateProductSchema(tier: "explorer" | "sovereign" | "family") {
  const products = {
    explorer: {
      name: "MEOK Explorer",
      description: "Free forever. 50 messages/day. One companion.",
      price: "0",
    },
    sovereign: {
      name: "MEOK Sovereign",
      description: "Unlimited messages. 3 companions. Claude + GPT-4o.",
      price: "9.00",
    },
    family: {
      name: "MEOK Family",
      description: "5 family members. Ralph Mode. Family Guardian.",
      price: "29.00",
    },
  };

  const product = products[tier];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "MEOK",
    },
    offers: {
      "@type": "Offer",
      url: `https://meok.ai/pricing`,
      price: product.price,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
    },
  };
}

export function generateFAQSchema(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  dateModified?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "MEOK AI LABS",
      url: "https://meok.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "MEOK AI LABS",
      logo: {
        "@type": "ImageObject",
        url: "https://meok.ai/brand/icon-512.png",
      },
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── Page-Specific Meta Generators ──────────────────────────────────────────

export function generatePricingMeta(): Metadata {
  return {
    title: "Pricing — Choose Your Sovereign AI Companion",
    description:
      "Explorer: Free forever with 50 messages/day. Sovereign: £9/month for unlimited messages and premium LLMs. Family: £29/month for 5 members.",
    openGraph: {
      title: "MEOK Pricing — Free Forever, Upgrade When Ready",
      description: "Explorer: Free. Sovereign: £9/mo. Family: £29/mo. No hidden fees. Cancel anytime.",
    },
  };
}

export function generateChatMeta(): Metadata {
  return {
    title: "Chat — Your Sovereign AI Companion",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export function generateDashboardMeta(): Metadata {
  return {
    title: "Dashboard — Your AI OS",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export function generateBlogPostMeta(
  title: string,
  excerpt: string,
  slug: string,
  publishedAt: string
): Metadata {
  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      url: `https://meok.ai/blog/${slug}`,
      type: "article",
      publishedTime: publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
    },
  };
}

// ── Dynamic OG Image URL Generator ─────────────────────────────────────────

export function generateOGImageUrl(params: {
  title?: string;
  description?: string;
  type?: "default" | "pricing" | "blog" | "character";
  accent?: string;
}): string {
  const { title, description, type = "default", accent = "#c9a84c" } = params;

  const searchParams = new URLSearchParams();
  if (title) searchParams.set("title", title);
  if (description) searchParams.set("desc", description);
  if (type) searchParams.set("type", type);
  if (accent) searchParams.set("accent", accent.replace("#", ""));

  return `https://meok.ai/api/og?${searchParams.toString()}`;
}

// ── Canonical URL Helper ───────────────────────────────────────────────────

export function getCanonicalUrl(path: string): string {
  const baseUrl = "https://meok.ai";
  const cleanPath = path.replace(/\/$/, ""); // Remove trailing slash
  return `${baseUrl}${cleanPath}`;
}

// ── Alternate Language/Locale ──────────────────────────────────────────────

export const SUPPORTED_LOCALES = ["en", "en-GB", "en-US"] as const;

export function generateAlternateLocales(path: string) {
  return {
    languages: {
      "en-GB": `https://meok.ai${path}`,
      "en-US": `https://meok.ai${path}`,
      "x-default": `https://meok.ai${path}`,
    },
  };
}
