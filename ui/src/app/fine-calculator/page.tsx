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

export default function FineCalculatorPage() {
  return <FineCalculatorClient />;
}
