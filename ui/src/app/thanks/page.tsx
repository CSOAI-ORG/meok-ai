import type { Metadata } from "next";
import { Suspense } from "react";
import ThanksClient from "./ThanksClient";

// ---------------------------------------------------------------------------
// /thanks — post-purchase landing for Stripe checkout
// Server component shell — provides SSR title, hero, and static fallback.
// Dynamic per-mcp content + sessionId logic lives in ThanksClient.
// URL pattern: /thanks?mcp=<slug>&session_id=<checkout_session_id>
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Welcome to MEOK AI Labs — Subscription Active",
  description:
    "Your subscription is active. Install your MCP, retrieve your HMAC signing key, and start producing signed compliance attestations.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Welcome to MEOK AI Labs",
    description: "Your subscription is active. Your MCP access is ready.",
    type: "website",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const SUCCESS = "#7BC47F";

function StaticThanksShell() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {/* Success banner — SSR */}
      <div
        style={{
          padding: "2rem",
          background: SUCCESS,
          color: NAVY,
          borderRadius: 16,
          marginBottom: "2rem",
          textAlign: "center",
          boxShadow: "0 6px 24px rgba(123,196,127,.25)",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>✓</div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-.02em",
            marginBottom: ".5rem",
          }}
        >
          Welcome to MEOK AI Labs
        </h1>
        <p style={{ fontSize: "1.05rem", opacity: 0.85, marginBottom: 0 }}>
          Your subscription is active. Your MCP access is ready.
        </p>
      </div>

      {/* Static next-steps — visible immediately during hydration */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>What to do next</h2>
        <ul style={{ display: "grid", gap: ".75rem", listStyle: "none", padding: 0 }}>
          <li
            style={{
              padding: "1rem 1.25rem",
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${NAVY}22`,
              fontSize: ".95rem",
            }}
          >
            <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>1.</span>
            Install your MCP with <code>uvx &lt;mcp-name&gt;-mcp</code> (full snippet below once it loads).
          </li>
          <li
            style={{
              padding: "1rem 1.25rem",
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${NAVY}22`,
              fontSize: ".95rem",
            }}
          >
            <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>2.</span>
            Retrieve your HMAC signing key from <code>meok-attestation-api.vercel.app/provision</code>.
          </li>
          <li
            style={{
              padding: "1rem 1.25rem",
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${NAVY}22`,
              fontSize: ".95rem",
            }}
          >
            <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>3.</span>
            Call any <code>sign_*</code> tool — signed compliance attestations land in your audit log.
          </li>
          <li
            style={{
              padding: "1rem 1.25rem",
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${NAVY}22`,
              fontSize: ".95rem",
            }}
          >
            <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>4.</span>
            Need help? Email{" "}
            <a href="mailto:hello@meok.ai" style={{ color: NAVY, fontWeight: 600 }}>
              hello@meok.ai
            </a>{" "}
            — 24h SLA.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <div style={{ paddingTop: "2rem", textAlign: "center", fontSize: ".82rem", opacity: 0.6 }}>
        MIT licensed code · HMAC-signed commercial attestations · By{" "}
        <a href="https://meok.ai" style={{ color: NAVY }}>
          MEOK AI Labs
        </a>
      </div>
    </div>
  );
}

export default function ThanksPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <Suspense fallback={<StaticThanksShell />}>
        <ThanksClient />
      </Suspense>
    </main>
  );
}
