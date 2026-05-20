import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK vs Holistic AI: Open-source EU AI Act Bolt-On (2026)",
  description:
    "Holistic AI is enterprise AI governance ($30K+/yr). MEOK is the open-source EU AI Act + DORA + NIS2 + CRA bolt-on at £79-£1,499/mo. 8 MIT-licensed MCPs + signed cryptographic attestations.",
  alternates: { canonical: "https://meok.ai/vs-holistic-ai" },
  openGraph: {
    title: "MEOK vs Holistic AI — open-source bolt-on for EU compliance",
    description: "Holistic AI = $30K+/yr enterprise. MEOK = £79/mo + open-source MCPs.",
    type: "website",
    url: "https://meok.ai/vs-holistic-ai",
    images: [{ url: "/api/og?title=MEOK+vs+Holistic+AI&desc=Open-source+EU+AI+Act+bolt-on", width: 1200, height: 630, alt: "MEOK vs Holistic AI" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const COMPARISON: { row: string; holistic: string | boolean; meok: string | boolean; note?: string }[] = [
  { row: "EU AI Act coverage", holistic: true, meok: true, note: "Both — see articles below" },
  { row: "Article 9 (RMS)", holistic: true, meok: true },
  { row: "Article 10 (bias / data quality)", holistic: true, meok: true, note: "Holistic AI's strongest area" },
  { row: "Article 14 (human oversight)", holistic: true, meok: true },
  { row: "Article 26(9) FRIA", holistic: true, meok: true, note: "MEOK uses EDPB harmonised template (14 Apr 2026)" },
  { row: "Article 50 watermarking", holistic: false, meok: true, note: "MEOK only — Code of Practice 2-layer" },
  { row: "DORA (Reg 2022/2554)", holistic: false, meok: true, note: "MEOK only" },
  { row: "NIS2 / NIS2-UmsuCG", holistic: false, meok: true, note: "MEOK only" },
  { row: "EU CRA (Reg 2024/2847)", holistic: false, meok: true, note: "MEOK only" },
  { row: "ISO/IEC 42001 mapping", holistic: true, meok: true },
  { row: "NIST AI RMF crosswalk", holistic: true, meok: true },
  { row: "Open-source under MIT", holistic: false, meok: true, note: "8 MCPs on PyPI, free to inspect + self-host" },
  { row: "Signed cryptographic attestations", holistic: false, meok: true, note: "HMAC-SHA256, public verify URL" },
  { row: "Drop-in MCP for Claude Code / Cursor", holistic: false, meok: true },
  { row: "Self-host option", holistic: false, meok: true, note: "Run MEOK MCPs locally on your laptop" },
  { row: "Enterprise dashboards", holistic: true, meok: false, note: "Holistic AI's strength — keep using if you have it" },
  { row: "Pre-built model audits (commercial models)", holistic: true, meok: false, note: "Holistic AI runs on big-vendor models" },
  { row: "Pricing entry", holistic: "$30,000+/yr enterprise", meok: "£0 free + £79/mo Pro", note: "MEOK 50x cheaper at entry" },
];

const FAQ = [
  {
    q: "Is Holistic AI's EU AI Act coverage broader than MEOK's?",
    a: "Holistic AI is broader on bias/data-quality testing for big-vendor commercial AI models — they run pre-built audits across OpenAI/Anthropic/Cohere outputs. MEOK is broader on EU regulatory bolt-ons: we cover Article 50 watermarking, DORA, NIS2, and EU CRA which Holistic AI doesn't. Together they're complementary.",
  },
  {
    q: "How does the pricing differ?",
    a: "Holistic AI is enterprise-tier ($30,000+ annual contracts, mid-market starting around $50K). MEOK starts free (8 MIT-licensed MCPs on PyPI) and scales to £79/mo Pro / £1,499/mo Enterprise. For most pre-Series-B AI startups, Holistic AI prices them out — MEOK is the working alternative at that stage.",
  },
  {
    q: "Can I run them together?",
    a: "Yes. Holistic AI's bias-testing dashboards plus MEOK's signed-attestation infrastructure is a strong combo. MEOK's signed certs can wrap the bias-test outputs Holistic AI produces, giving you cryptographic evidence on top of their dashboards.",
  },
  {
    q: "Does Holistic AI sign cryptographic attestations?",
    a: "No. Holistic AI produces dashboards and reports auditors can read but doesn't ship HMAC-signed certificates with public verify URLs. MEOK does — the meok-attestation-api signs every result with HMAC-SHA256, and any auditor can independently verify by curling the verify_url.",
  },
  {
    q: "Why would I pick MEOK over Holistic AI?",
    a: "Three reasons: (1) you need Article 50 watermarking, DORA, NIS2, or CRA — Holistic AI doesn't cover those. (2) you need open-source self-hostable tooling — Holistic AI is closed-source SaaS. (3) you're price-sensitive — MEOK is 50x cheaper at the entry tier.",
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

export default function VsHolisticPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          Honest comparison · updated 27 April 2026
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          MEOK vs Holistic AI
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          Holistic AI is enterprise. MEOK is open-source.
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40 }}>
          Holistic AI ships great enterprise dashboards on big-vendor model audits. We ship MIT-licensed
          MCPs + signed attestations + EU regulatory bolt-ons (Article 50, DORA, NIS2, CRA) Holistic AI
          doesn't cover. Different shapes; different price points.
        </p>

        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, overflow: "hidden", marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div style={{ padding: "12px 16px" }}>FRAMEWORK / CONTROL</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>HOLISTIC AI</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: GOLD }}>MEOK</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>NOTE</div>
          </div>
          {COMPARISON.map((c, i) => (
            <div key={c.row} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontSize: 13, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{c.row}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>
                {c.holistic === true ? "✓" : c.holistic === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ fontSize: 11 }}>{c.holistic}</span>}
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Want EU AI Act + DORA + NIS2 coverage on top of Holistic AI?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>
            Free 30-min triage call: bring your Holistic AI usage, we map gaps to Article 50 + DORA + NIS2 + CRA. £4,950 14-day audit-prep bundle if you want a full evidence pack.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@meok.ai?subject=Holistic%20AI%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book gap-analysis (free) →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          We respect Holistic AI. They're one of the deepest enterprise AI-governance vendors. This page exists because their users keep asking us "do you do Article 50?" — yes. That's all.
          <br />
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>Refund policy</Link>
        </p>
      </div>
    </main>
  );
}
