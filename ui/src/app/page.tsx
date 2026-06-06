import type { Metadata } from "next";
import HomePageClient from "./home-page-client";

export const metadata: Metadata = {
  title: "MEOK AI Labs — Sovereign AI Compliance Infrastructure",
  description:
    "218 open-source MCP servers. 15 regulatory frameworks. One command to install. MEOK AI Labs builds the compliance infrastructure layer for autonomous AI agents.",
  keywords: [
    "MCP servers",
    "AI compliance",
    "EU AI Act",
    "DORA",
    "NIS2",
    "GDPR",
    "HMAC-SHA256 attestation",
    "agent-native compliance",
    "open source AI",
    "MEOK AI Labs",
    "SafetyOf.AI",
    "SOV3",
    "x402 payments",
  ],
  alternates: { canonical: "https://meok.ai" },
  openGraph: {
    title: "MEOK AI Labs — Sovereign AI Compliance Infrastructure",
    description:
      "218 open-source MCP servers. 15 regulatory frameworks. One command to install.",
    type: "website",
    url: "https://meok.ai",
    siteName: "MEOK AI Labs",
    locale: "en_GB",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+AI+Labs&desc=Sovereign+AI+Compliance+Infrastructure",
        width: 1200,
        height: 630,
        alt: "MEOK AI Labs — Sovereign AI Compliance Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK AI Labs — Sovereign AI Compliance Infrastructure",
    description:
      "218 open-source MCP servers. 15 regulatory frameworks. One command to install.",
    site: "@meok_ai",
    images: ["https://meok.ai/api/og?title=MEOK+AI+Labs&desc=Sovereign+AI+Compliance+Infrastructure"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEOK AI LABS",
  url: "https://meok.ai",
  logo: "https://meok.ai/logo.png",
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Nicholas Templeman" },
  description:
    "MEOK AI Labs builds sovereign AI compliance infrastructure: 218 open-source MCP servers, 15 regulatory frameworks, cryptographic attestation, and agent-native payments.",
  address: { "@type": "PostalAddress", addressCountry: "GB" },
  contactPoint: [
    { "@type": "ContactPoint", email: "hello@meok.ai", contactType: "customer service" },
    { "@type": "ContactPoint", email: "press@meok.ai", contactType: "press" },
  ],
  sameAs: [
    "https://github.com/CSOAI-ORG",
    "https://pypi.org/user/meok-ai/",
    "https://smithery.ai/@meok-ai",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MEOK AI Labs",
  url: "https://meok.ai",
  description:
    "Sovereign AI compliance infrastructure. 218 open-source MCP servers. 15 regulatory frameworks. One command to install.",
  publisher: { "@type": "Organization", name: "MEOK AI LABS" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <HomePageClient />
    </>
  );
}
