import type { Metadata } from "next";
import HomePageClient from "./home-page-client";

// ─── METADATA ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK.AI — Personal Sovereign AI That Remembers You | Free Forever",
  description:
    "Every AI forgets you. MEOK remembers. The world's first sovereign AI OS — hatches from an egg, grows with you, works across every LLM. Your data, your rules. Free forever.",
  keywords: [
    "personal sovereign AI",
    "sovereign AI OS",
    "AI that remembers you",
    "care-aligned AI",
    "AI companion",
    "personal AI operating system",
    "MEOK AI",
    "Maternal Covenant",
    "Byzantine AI governance",
    "AI memory",
    "multi-LLM AI",
    "private AI",
  ],
  alternates: { canonical: "https://meok.ai" },
  openGraph: {
    title: "MEOK.AI — Personal Sovereign AI That Remembers You",
    description:
      "Every AI forgets you. MEOK remembers. The world's first personal sovereign AI OS — hatches from an egg, grows with care, works with every LLM. Free forever.",
    type: "website",
    url: "https://meok.ai",
    siteName: "MEOK.AI",
    locale: "en_GB",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK.AI&desc=Your+sovereign+AI.+Built+to+remember.+Designed+to+care.",
        width: 1200,
        height: 630,
        alt: "MEOK.AI — Personal Sovereign AI OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK.AI — Personal Sovereign AI That Remembers You",
    description:
      "Every AI forgets you. MEOK remembers. Sovereign AI OS — hatches from an egg, grows with you, works with every LLM. Free forever.",
    site: "@meok_ai",
    images: ["https://meok.ai/api/og?title=MEOK.AI&desc=Your+sovereign+AI.+Built+to+remember.+Designed+to+care."],
  },
};

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEOK AI LABS",
  url: "https://meok.ai",
  logo: "https://meok.ai/logo.png",
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Nicholas Templeman" },
  description:
    "MEOK AI LABS builds the world's first personal sovereign AI OS — an AI companion that remembers you, protects your data, and is governed by the Maternal Covenant care framework.",
  address: { "@type": "PostalAddress", addressCountry: "GB" },
  contactPoint: [
    { "@type": "ContactPoint", email: "hello@meok.ai", contactType: "customer service" },
    { "@type": "ContactPoint", email: "press@meok.ai", contactType: "press" },
  ],
  sameAs: ["https://github.com/meok-ai/meok-ai"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MEOK.AI",
  url: "https://meok.ai",
  description:
    "Personal sovereign AI OS. Your AI hatches from an egg, remembers you permanently, works with every LLM, and is governed by the Maternal Covenant care ethics constitution.",
  publisher: { "@type": "Organization", name: "MEOK AI LABS" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://meok.ai/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEOK AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK.AI is the world's first personal sovereign AI operating system. Your AI hatches from an egg, grows with care, works with every major LLM, and answers only to you.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK AI remember me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unlike other AI tools that reset every session, MEOK maintains a permanent encrypted memory vault across all your conversations.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is free forever at the base tier (Explorer). Sovereign is £9/month or £90/year. Sovereign Pro is £19/month or £190/year. Enterprise pricing is custom. All paid plans include a 30-day money-back guarantee.",
      },
    },
  ],
};

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomePageClient />
    </>
  );
}
