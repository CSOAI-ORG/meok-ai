import type { Metadata } from "next";
import { EconomyClient } from "./economy-client";

export const metadata: Metadata = {
  title: "Sovereign Economy — MEOK Aethelgard Treasury",
  description:
    "Explore the Aethelgard sovereign economy dashboard: treasury balance, jobs, daily trades, tax revenue, and a live debt yield curve.",
  alternates: { canonical: "https://meok.ai/economy" },
  openGraph: {
    title: "Sovereign Economy — MEOK Aethelgard Treasury",
    description:
      "Live-ish macro dashboard for the first MEOK civilization. Treasury, jobs, trades, tax revenue, and debt yield curve.",
    type: "website",
    url: "https://meok.ai/economy",
  },
};

export default function EconomyPage() {
  return <EconomyClient />;
}
