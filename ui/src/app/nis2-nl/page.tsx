import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Netherlands NIS2 (Wbni-2) NCSC-NL Registration · Deadline 30 June 2026 · £499 Done-For-You",
  description:
    "Dutch NIS2 implementation (Cyberbeveiligingswet/Wbni-2) requires in-scope entities to register with NCSC-NL by 30 June 2026. £499 done-for-you: scoping memo, portal registration filed, management-body evidence pack.",
  alternates: { canonical: "https://meok.ai/nis2-nl" },
  openGraph: {
    title: "Netherlands NIS2 — NCSC-NL registration before 30 June 2026",
    description: "£499 done-for-you: scoping memo + NCSC-NL registration filed + board evidence pack.",
    type: "website",
    url: "https://meok.ai/nis2-nl",
    locale: "nl_NL",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const DFY_LINK = "https://buy.stripe.com/28E7sNfsMeUWfUN9mE8k91E"; // £499 done-for-you (NL)

const INCLUDES = [
  "Scoping memo — are you an essential or important entity under Wbni-2, and which regulator (NCSC-NL, DNB for financial-sector entities)?",
  "NCSC-NL portal registration payload prepared and filed — entity details, sectors, contact points, IP ranges",
  "Management-body accountability brief — the board-level evidence Wbni-2 expects you to hold",
  "Signed completion attestation with a public verify URL your auditor checks offline",
  "7-day turnaround · email support until the registration is confirmed",
];

const FAQ = [
  {
    q: "When is the Dutch NIS2 registration deadline?",
    a: "30 June 2026. In-scope entities under the Dutch NIS2 implementation (Cyberbeveiligingswet / Wbni-2) must be registered with NCSC-NL by then. Financial-sector entities also face DNB as sector regulator.",
  },
  {
    q: "Are we in scope?",
    a: "NIS2 covers essential and important entities across 18 sectors — energy, transport, health, digital infrastructure, ICT management (B2B), public administration, space, manufacturing and more — generally from 50 staff / €10M turnover. The £499 service starts with a scoping memo; if you're genuinely out of scope, we say so and refund.",
  },
  {
    q: "Can we do it ourselves?",
    a: "Yes — NCSC-NL's portal is public, and our open-source meok-nis2-nl-register-mcp generates the registration payload for free (pip install meok-nis2-nl-register-mcp). The £499 is for teams that want it scoped, filed and evidenced without spending internal time on it.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Netherlands NIS2 (Wbni-2) NCSC-NL Registration — Done-For-You",
  brand: { "@type": "Brand", name: "MEOK AI Labs" },
  description: "Scoping memo + NCSC-NL registration filed + management-body evidence pack. Deadline 30 June 2026.",
  offers: {
    "@type": "Offer",
    price: "499",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/nis2-nl",
    seller: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  },
};

export default function Nis2NlPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(220,38,38,0.1)",
            border: "1px solid rgba(220,38,38,0.4)",
            color: "#dc2626",
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          ⏰ NCSC-NL registration deadline: 30 June 2026
        </div>

        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 16 }}>
          Netherlands NIS2 registration,
          <br />
          <span style={{ color: GOLD }}>filed for you before the deadline.</span>
        </h1>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 8 }}>
          The Dutch NIS2 implementation (Cyberbeveiligingswet / Wbni-2) requires in-scope entities to register with{" "}
          <strong>NCSC-NL by 30 June 2026</strong>. We scope you, prepare and file the registration, and hand your
          board the evidence pack — in 7 days, for <strong>£499 one-time</strong>.
        </p>
        <p style={{ fontSize: "0.9rem", color: `${NAVY}66`, marginBottom: 32 }}>
          Same playbook as our German BSI service (<Link href="/nis2-de-kit" style={{ color: GOLD }}>nis2-de-kit</Link>) — Netherlands edition.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          <a
            href={DFY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "16px 28px", borderRadius: 12, background: GOLD, color: NAVY, fontWeight: 900, textDecoration: "none", fontSize: 15 }}
          >
            Done-For-You — £499 →
          </a>
          <a
            href="https://pypi.org/project/meok-nis2-nl-register-mcp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "16px 28px", borderRadius: 12, background: "transparent", color: NAVY, fontWeight: 900, textDecoration: "none", fontSize: 15, border: `1px solid ${NAVY}33` }}
          >
            DIY — free open-source MCP →
          </a>
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 20 }}>What the £499 includes</h2>
        <ul style={{ marginBottom: 48, paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.9 }}>
          {INCLUDES.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 40 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15 }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <p style={{ color: `${NAVY}66`, fontSize: 13, textAlign: "center" }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · Signed attestations verifiable at{" "}
          <a href="https://www.proofof.ai/pubkey" style={{ color: GOLD }}>proofof.ai/pubkey</a>
        </p>
      </div>
    </main>
  );
}
