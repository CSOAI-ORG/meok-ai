import type { Metadata } from "next";
import { BetaClient } from "./beta-client";

export const metadata: Metadata = {
  title: "You're in Line — MEOK Public Beta",
  description:
    "You're on the MEOK public beta waitlist. Share with friends and explore the first live civilization while you wait.",
  alternates: { canonical: "https://meok.ai/beta" },
  openGraph: {
    title: "You're in Line — MEOK Public Beta",
    description: "Sovereign AI agents. Public beta access. Join the waitlist.",
    type: "website",
    url: "https://meok.ai/beta",
  },
};

export default function BetaPage() {
  return <BetaClient />;
}
