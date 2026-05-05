import type { Metadata } from "next";
import ScorecardClient from "../scorecard-client";

export const metadata: Metadata = {
  title: "EU AI Act Readiness Scorecard (Embed) · MEOK AI Labs",
  description:
    "Embeddable EU AI Act readiness check. 90 seconds, signed compliance attestation. Free.",
  robots: { index: false, follow: false },
};

// Minimal embed wrapper — strips global nav/footer, sets iframe-safe styling.
export default function ScorecardEmbedPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f0e8",
        margin: 0,
        padding: 0,
      }}
    >
      <ScorecardClient />
    </div>
  );
}
