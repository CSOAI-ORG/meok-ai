import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK vs Credo AI: Open-source EU AI Act Bolt-On (2026)",
  description:
    "Credo AI is enterprise AI governance with policy management workflows. MEOK is the open-source EU AI Act + DORA + NIS2 + CRA bolt-on with signed cryptographic attestations.",
  alternates: { canonical: "https://meok.ai/vs-credo-ai" },
  openGraph: {
    title: "MEOK vs Credo AI — open-source EU regulatory bolt-on",
    description: "Credo AI = governance dashboards. MEOK = MIT MCPs + signed certs.",
    type: "website",
    url: "https://meok.ai/vs-credo-ai",
    images: [{ url: "/api/og?title=MEOK+vs+Credo+AI&desc=Open-source+regulatory+bolt-on", width: 1200, height: 630, alt: "MEOK vs Credo AI" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const COMPARISON: { row: string; credo: string | boolean; meok: string | boolean; note?: string }[] = [
  { row: "EU AI Act coverage", credo: true, meok: true, note: "Both — different focus" },
  { row: "Article 9 (RMS)", credo: true, meok: true },
  { row: "Article 10 (bias / data quality)", credo: true, meok: true, note: "Live at /bias-detection £299/mo" },
  { row: "Article 14 (human oversight)", credo: true, meok: true },
  { row: "Article 26(9) FRIA", credo: true, meok: true, note: "MEOK uses EDPB harmonised template" },
  { row: "Article 50 watermarking", credo: false, meok: true, note: "MEOK only" },
  { row: "DORA (Reg 2022/2554)", credo: false, meok: true, note: "MEOK only" },
  { row: "NIS2 / NIS2-UmsuCG", credo: false, meok: true },
  { row: "EU CRA (Reg 2024/2847)", credo: false, meok: true },
  { row: "ISO/IEC 42001 controls", credo: true, meok: true },
  { row: "NIST AI RMF crosswalk", credo: true, meok: true },
  { row: "Policy management workflows", credo: true, meok: false, note: "Credo AI's strongest area" },
  { row: "Risk assessment dashboards", credo: true, meok: "Crosswalk-only", note: "Credo's enterprise dashboards are richer" },
  { row: "Open-source MIT MCPs", credo: false, meok: true, note: "MEOK only — 8 packages on PyPI" },
  { row: "Signed cryptographic attestations", credo: false, meok: true },
  { row: "Drop-in MCP for Claude/Cursor/Cline", credo: false, meok: true },
  { row: "Self-host option", credo: false, meok: true },
  { row: "Pricing entry", credo: "$30K-$100K/yr enterprise", meok: "£0 free + £79/mo Pro" },
];

const FAQ = [
  {
    q: "How is Credo AI different from MEOK?",
    a: "Credo AI is an enterprise AI governance platform with strong policy-management workflows, risk assessment dashboards, and committee-grade reporting. MEOK is the open-source MCP + signed-attestation infrastructure layer. Credo helps an AI governance committee run their process; MEOK gives engineers cryptographic evidence drop-in their agent stack.",
  },
  {
    q: "Can they run together?",
    a: "Yes — Credo's policy + dashboard surface is the management view; MEOK's signed certificates are the verifiable evidence layer that flows into those dashboards. A typical large enterprise might use both: Credo for AI governance committee workflow, MEOK for the cryptographically signed evidence that backs each policy decision.",
  },
  {
    q: "What's the pricing gap?",
    a: "Credo AI is enterprise-tier ($30K-$100K+ annual contracts). MEOK starts free (8 MIT MCPs on PyPI) and scales to £79/mo Pro / £1,499/mo Enterprise. MEOK is appropriate for pre-Series-C AI startups and mid-market companies; Credo is appropriate for Fortune 500 AI governance committees.",
  },
  {
    q: "Does Credo cover Article 50 watermarking, DORA, NIS2, or CRA?",
    a: "No. As of April 2026, Credo's roadmap covers EU AI Act + ISO/IEC 42001 + NIST AI RMF policy management. The transparency layer (Article 50 watermarking via Code of Practice 2-layer requirements), DORA, NIS2, and EU CRA are not on Credo's roadmap. MEOK ships all four.",
  },
  {
    q: "Why pick MEOK over Credo if I'm an AI governance committee?",
    a: "Pick Credo if your committee needs deep policy/risk-assessment workflow software. Pick MEOK if your engineering team needs drop-in evidence-generation MCPs that produce cryptographic certificates auditors can verify by URL. Many enterprises run both side-by-side at very different price points.",
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

export default function VsCredoPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          Honest comparison · updated 27 April 2026
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          MEOK vs Credo AI
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          Credo AI is committee software. MEOK is engineering tooling.
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40 }}>
          Credo AI ships strong policy-management + dashboards for AI governance committees. We ship
          MIT-licensed MCPs + cryptographically signed attestations engineers drop into their agent
          stack. Different shapes; complementary at scale.
        </p>

        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, overflow: "hidden", marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div style={{ padding: "12px 16px" }}>FRAMEWORK / CONTROL</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>CREDO AI</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: GOLD }}>MEOK</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>NOTE</div>
          </div>
          {COMPARISON.map((c, i) => (
            <div key={c.row} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontSize: 13, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{c.row}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>
                {c.credo === true ? "✓" : c.credo === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ fontSize: 11 }}>{c.credo}</span>}
              </div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08`, background: "rgba(201,168,76,0.04)" }}>
                {c.meok === true ? <span style={{ color: GOLD, fontWeight: 900 }}>✓</span> : c.meok === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ color: GOLD, fontSize: 11 }}>{c.meok}</span>}
              </div>
              <div style={{ padding: "12px 16px", color: `${NAVY}77`, fontSize: 12, borderLeft: `1px solid ${NAVY}08` }}>
                {c.note || ""}
              </div>
            </div>
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Want signed cryptographic evidence in your Credo dashboard?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>
            Free 30-min triage call: bring your Credo workflow, we map gaps to MEOK signed certs + Article 50 + DORA + NIS2 + CRA.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@csoai.org?subject=Credo%20AI%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book gap-analysis (free) →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          We respect Credo AI. They built one of the most credible enterprise AI governance platforms. This page exists because their users keep asking us "do you ship signed evidence?" — yes. That's all.
          <br />
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>Refund policy</Link>
        </p>
      </div>
    </main>
  );
}
