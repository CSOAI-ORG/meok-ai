import type { Metadata } from "next";
import ScorecardClient from "./scorecard-client";

export const metadata: Metadata = {
  title: "Free EU AI Act Readiness Scorecard · MEOK AI Labs",
  description:
    "10-question readiness check for EU AI Act + GDPR + DORA + NIS2. Get a personalized score + signed compliance attestation. Free, takes 90 seconds, no credit card.",
  alternates: { canonical: "https://meok.ai/scorecard" },
  openGraph: {
    title: "Free EU AI Act Readiness Scorecard",
    description:
      "10 questions. 90 seconds. Personalized compliance score + signed attestation. Free.",
    type: "website",
    url: "https://meok.ai/scorecard",
  },
};

export default function ScorecardPage() {
  return <ScorecardClient />;
}
