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
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
