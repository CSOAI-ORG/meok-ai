import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK Hive Status — Live Empire Dashboard | Real-time",
  description:
    "Live status of every service in the MEOK sovereign stack: SOV3, MEOK_MCP, MEOKBRIDGE mesh, sovereign OLM, Farm Vision, M2 sidekick. Updated every 30s.",
  alternates: { canonical: "https://meok.ai/status" },
  openGraph: {
    title: "MEOK Hive Status — Live Empire Dashboard",
    description: "193 sovereign agents, 7/8 mesh nodes, real-time SOV3 substrate.",
    type: "website",
    url: "https://meok.ai/status",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

// All endpoints - rendered server-side with static fallback
// Client component refreshes every 30s
import StatusClient from "./StatusClient";

export default function StatusPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ marginBottom: 40, textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>MEOK Hive Status · Live</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "16px 0" }}>Sovereign substrate, in real time</h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto" }}>
            Every service in the MEOK empire, polled every 30 seconds. SOV3, MEOK_MCP, sovereign OLM, MEOKBRIDGE mesh, Farm Vision HARVI. If a service is down, you'll see it here before the regulator does.
          </p>
        </header>
        <StatusClient />
        <section style={{ marginTop: 48, textAlign: "center", fontSize: 13, color: `${NAVY}88` }}>
          <p>
            Layer 0: <Link href="https://csoai.org" style={{ color: GOLD }}>csoai.org</Link> · Catalogue: <Link href="https://proofof.ai" style={{ color: GOLD }}>proofof.ai</Link> · Council: <Link href="https://councilof.ai" style={{ color: GOLD }}>councilof.ai</Link> · Open Patent: <Link href="https://openpatent.ai" style={{ color: GOLD }}>openpatent.ai</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
