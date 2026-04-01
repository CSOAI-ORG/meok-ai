import type { Metadata } from "next";
import PricingClient from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing — MEOK AI Sovereign Companions",
  description: "Explorer (free) or Sovereign ($29/mo). Private memory, AI companions that grow with you, and zero data training. No hidden costs.",
  alternates: { canonical: "https://meok.ai/pricing" },
  openGraph: {
    title: "Pricing — MEOK AI",
    description: "Explorer free forever. Sovereign $29/mo. Private AI companions with persistent memory, character evolution, and zero training on your data.",
    type: "website",
    url: "https://meok.ai/pricing",
    images: [{ url: "/api/og?title=Pricing&desc=Free+forever.+Sovereign+%C2%A39%2Fmo.+Pro+%C2%A319%2Fmo.", width: 1200, height: 630, alt: "Pricing" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://meok.ai/pricing" },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PricingClient />
    </>
  );
}
