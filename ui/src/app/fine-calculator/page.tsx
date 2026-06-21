import type { Metadata } from "next";
import FineCalculatorClient from "./fine-calculator-client";

export const metadata: Metadata = {
  title: "EU AI Act Fine Calculator · €15M or 3% turnover · MEOK AI Labs",
  description:
    "Calculate your maximum EU AI Act fine in 30 seconds. €35M or 7% global turnover for prohibited practices · €15M or 3% for Articles 5/16/26/50/99 · €7.5M or 1% for misinformation. Free, no email required.",
  alternates: { canonical: "https://meok.ai/fine-calculator" },
  openGraph: {
    title: "EU AI Act Fine Calculator — what's your maximum exposure?",
    description: "30 seconds. Free. €35M / €15M / €7.5M tier breakdown by Article.",
    type: "website",
    url: "https://meok.ai/fine-calculator",
    images: [{ url: "/api/og?title=EU+AI+Act+Fine+Calculator&desc=%E2%82%AC35M+%2F+%E2%82%AC15M+%2F+%E2%82%AC7.5M+exposure", width: 1200, height: 630, alt: "Fine Calculator" }],
  },
};

const WEBAPP_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "EU AI Act Fine Calculator",
  description:
    "Free tool to calculate your maximum EU AI Act administrative fine. Pick your global turnover band and breach type to see exposure: €35M or 7% of turnover for prohibited practices (Article 5), €15M or 3% for Article 5/16/26/50 / Annex III non-compliance, €7.5M or 1% for misleading information to authorities. Source: EU AI Act Article 99.",
  url: "https://meok.ai/fine-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/fine-calculator",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI Labs",
    url: "https://meok.ai",
  },
};

const FAQ = [
  {
    q: "How are EU AI Act fines calculated?",
    a: "The EU AI Act caps administrative fines at the higher of a fixed Euro amount OR a percentage of your prior-year global turnover. Whichever is greater is the maximum exposure.",
  },
  {
    q: "What is the maximum fine for prohibited AI practices?",
    a: "Prohibited practices under Article 5 (subliminal manipulation, exploiting vulnerabilities, social scoring by public authorities, untargeted facial-recognition scraping, real-time biometric ID in public spaces) are capped at the higher of €35M or 7% of global turnover, per Articles 5 and 99(3).",
  },
  {
    q: "What is the fine for general EU AI Act non-compliance?",
    a: "Failures of obligations under Articles 5/16/26/50 or Annex III high-risk requirements — including operator, notified body, transparency and GPAI provider duties — are capped at the higher of €15M or 3% of global turnover, per Article 99(4).",
  },
  {
    q: "What is the fine for giving misleading information to authorities?",
    a: "Supplying incorrect, incomplete, or misleading information to notified bodies or competent authorities is capped at the higher of €7.5M or 1% of global turnover, per Article 99(5).",
  },
  {
    q: "Is this fine calculator free?",
    a: "Yes. It is free to use, requires no email, and takes about 30 seconds. It is a maximum-exposure calculator based on EU AI Act Article 99, not legal advice.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FineCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <FineCalculatorClient />
    </>
  );
}
