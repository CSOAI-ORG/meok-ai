import type { Metadata } from "next";
import Link from "next/link";
import { Article50Countdown } from "@/components/Article50Countdown";

export const metadata: Metadata = {
  title: "Free EU AI Act + DORA + NIS2 Compliance Tools (2026)",
  description:
    "Free tools for EU AI Act + DORA + NIS2 + EU CRA compliance: 90-second readiness scorecard, fine calculator, NIS2 entity classifier, FRIA generator, watermark starter kit. No credit card.",
  alternates: { canonical: "https://meok.ai/tools" },
  openGraph: {
    title: "Free EU AI Act + DORA + NIS2 Compliance Tools — MEOK AI Labs",
    description:
      "Six free tools every EU compliance team needs. 90-second scorecard, fine calculator, FRIA generator. Signed compliance attestations.",
    type: "website",
    url: "https://meok.ai/tools",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const TOOLS = [
  {
    href: "/scorecard",
    title: "EU AI Act Readiness Scorecard",
    blurb: "10 questions, 90 seconds, signed compliance attestation. Covers EU AI Act Articles 4, 9, 10, 14, 26, 50, 72.",
    badge: "FREE · 90s",
    emoji: "📊",
  },
  {
    href: "/fine-calculator",
    title: "EU AI Act Fine Calculator",
    blurb: "Calculate your maximum exposure: €35M / 7% turnover (prohibited), €15M / 3% (high-risk violations), €7.5M / 1% (misinformation).",
    badge: "FREE · 30s",
    emoji: "💷",
  },
  {
    href: "/article-50-kit",
    title: "Article 50 Watermark Starter Kit",
    blurb: "C2PA Content Credentials manifest + SynthID-class watermarking template. Comply with the 2 Nov 2026 deadline.",
    badge: "£99 · ZIP",
    emoji: "🔏",
  },
  {
    href: "/nis2-de-kit",
    title: "NIS2 Germany Entity Classifier",
    blurb: "NIS2-UmsuCG entity classifier + register template. Determine if your business is in scope by 17 October 2026.",
    badge: "£499 · KIT",
    emoji: "🇩🇪",
  },
  {
    href: "/dora-belgium-late-fee-recovery",
    title: "DORA Belgium Late-Fee Recovery",
    blurb: "Belgian financial entities late on DORA Reg 2022/2554? Recovery template + signed evidence pack for FSMA.",
    badge: "£1,499",
    emoji: "🇧🇪",
  },
  {
    href: "/uk-csr-readiness",
    title: "UK Cyber Security Readiness",
    blurb: "UK Cyber Security & Resilience Bill 2026 readiness check. Crosswalk to NIS2 + EU CRA. Future-proof now.",
    badge: "FREE",
    emoji: "🇬🇧",
  },
  {
    href: "/bias-detection",
    title: "Article 10 Bias Detection",
    blurb: "Live bias monitoring for high-risk AI. Demographic parity, equalized odds, calibration. Continuous attestations.",
    badge: "£299/mo",
    emoji: "⚖️",
  },
  {
    href: "/transparency",
    title: "Article 13 Transparency Logs",
    blurb: "Decision-trace logging for instructions for use + post-market monitoring. Auditor-verifiable signed evidence.",
    badge: "£399/mo",
    emoji: "🔍",
  },
];

const TOOL_LIST_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MEOK AI Labs Compliance Tools",
  description:
    "Free and paid tools for EU AI Act + DORA + NIS2 + EU CRA compliance.",
  itemListElement: TOOLS.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `https://meok.ai${t.href}`,
    description: t.blurb,
  })),
};

const FAQ = [
  {
    q: "Are these tools really free?",
    a: "The Readiness Scorecard, Fine Calculator, and UK CSR Readiness check are completely free — no credit card, no signup. The Article 50 Kit (£99), NIS2 DE Kit (£499), DORA Belgium template (£1,499), Bias Detection (£299/mo) and Transparency (£399/mo) are paid. Scorecard + Fine Calculator generate signed attestations free.",
  },
  {
    q: "Do these produce auditor-ready evidence?",
    a: "Yes. Every tool emits an HMAC-SHA256 signed attestation that any third-party auditor can curl-verify against meok-attestation-api.vercel.app. The signed cert proves you ran the check, when, with what answers — and the result was not tampered with after the fact.",
  },
  {
    q: "Which is the right starting point?",
    a: "If you have no idea whether you're in scope, run the Readiness Scorecard (90 sec) — it tells you which articles apply. If you're already mid-build and worried about budget exposure, run the Fine Calculator (30 sec) to see what's at stake. If you're shipping a generative AI product, the Article 50 Kit is the fastest path to November 2026 compliance.",
  },
  {
    q: "How do these connect to MEOK's MCP servers?",
    a: "All eight tools share the same backend signing infrastructure as our 31+ open-source MIT MCPs on PyPI. Use them in our hosted UI, or pull the corresponding MCP into your own agent stack. Same signed cert format either way.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ToolsHubPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TOOL_LIST_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Article50Countdown />
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          8 tools · updated 27 April 2026
        </div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Free EU AI Act + DORA + NIS2 + CRA Compliance Tools
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 48, lineHeight: 1.6 }}>
          Eight tools your compliance team can use today. Three are free. Five are paid (£99–£1,499). Every result emits an HMAC-SHA256 signed attestation any auditor can verify.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16, marginBottom: 64 }}>
          {TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              style={{
                background: "white",
                borderRadius: 14,
                padding: 24,
                border: `1px solid ${NAVY}1a`,
                textDecoration: "none",
                color: NAVY,
                display: "block",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ fontSize: 28 }}>{t.emoji}</div>
                <div style={{ fontSize: 11, fontWeight: 900, color: GOLD, letterSpacing: "0.06em", padding: "4px 8px", borderRadius: 999, background: "rgba(201,168,76,0.1)" }}>
                  {t.badge}
                </div>
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, marginBottom: 8 }}>{t.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{t.blurb}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Need all eight in a single signed evidence pack?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>
            14-day Audit-Prep Bundle wraps every tool above into a single HMAC-signed evidence file ready for Notified Body or self-assessment.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/audit-prep-bundle"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                background: GOLD,
                color: NAVY,
                borderRadius: 12,
                fontWeight: 900,
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              £4,950 Audit-Prep Bundle →
            </Link>
            <Link
              href="/consulting"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 12,
                fontWeight: 900,
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              £950/day consulting →
            </Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>30-day money-back</Link>
        </p>
      </div>
    </main>
  );
}
