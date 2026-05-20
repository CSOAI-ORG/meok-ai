import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK vs Vanta: EU AI Act, DORA, NIS2 & CRA Bolt-On (2026)",
  description:
    "Vanta is excellent for SOC 2 + ISO 27001 + GDPR. It does NOT cover EU AI Act, DORA, NIS2, or EU CRA. MEOK is the EU-regulatory bolt-on you stack on top — £79-£1,499/mo vs $7.5-25K/yr.",
  alternates: { canonical: "https://meok.ai/vs-vanta" },
  openGraph: {
    title: "MEOK vs Vanta — what Vanta does NOT cover (EU AI Act, DORA, NIS2)",
    description: "Vanta = US frameworks. MEOK = EU regulatory bolt-on. Run them together.",
    type: "website",
    url: "https://meok.ai/vs-vanta",
    images: [{ url: "/api/og?title=MEOK+vs+Vanta&desc=EU+AI+Act+%2B+DORA+%2B+NIS2+bolt-on", width: 1200, height: 630, alt: "MEOK vs Vanta" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const COMPARISON: { row: string; vanta: string | boolean; meok: string | boolean; note?: string }[] = [
  { row: "SOC 2 (Type 1 + 2)", vanta: true, meok: false, note: "Vanta's home turf — keep using" },
  { row: "ISO 27001", vanta: true, meok: false, note: "Use Vanta" },
  { row: "HIPAA", vanta: true, meok: false },
  { row: "GDPR (controls + DPA)", vanta: true, meok: "Crosswalk + DPIA bridge", note: "Both — MEOK adds AI-system-specific DPIA→FRIA" },
  { row: "PCI DSS", vanta: true, meok: false },
  { row: "EU AI Act Article 4 (literacy)", vanta: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 6 + Annex III", vanta: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 9 (RMS)", vanta: false, meok: true },
  { row: "EU AI Act Article 10 (bias)", vanta: false, meok: true, note: "Live at /bias-detection £299/mo" },
  { row: "EU AI Act Article 14 (oversight)", vanta: false, meok: true },
  { row: "EU AI Act Article 26(9) (FRIA)", vanta: false, meok: true, note: "EDPB harmonised template (14 Apr 2026) wired" },
  { row: "EU AI Act Article 43 (conformity)", vanta: false, meok: true },
  { row: "EU AI Act Article 50 (watermarking)", vanta: false, meok: true, note: "Live at /article-50-kit · 2 Nov 2026 cliff" },
  { row: "EU AI Act Article 72 (post-market)", vanta: false, meok: true },
  { row: "DORA (Reg 2022/2554)", vanta: false, meok: true, note: "Belgium hard cliff already passed 18 Apr 2026" },
  { row: "NIS2 / NIS2-UmsuCG (DE)", vanta: false, meok: true, note: "Live at /nis2-de-kit" },
  { row: "EU CRA (Reg 2024/2847)", vanta: false, meok: true, note: "24h ENISA reporting from 11 Sep 2026" },
  { row: "ISO/IEC 42001 (AI mgmt system)", vanta: false, meok: true },
  { row: "NIST AI RMF", vanta: false, meok: true },
  { row: "HMAC-signed evidence per control", vanta: false, meok: true, note: "Auditor curl-verifiable, not dashboard trust" },
  { row: "Open-source MCP packages", vanta: false, meok: true, note: "234 packages, MIT licensed" },
  { row: "Pricing entry point", vanta: "$7,500-$25,000/yr", meok: "£0 free + £79/mo Pro", note: "10x cheaper at the entry tier" },
];

const FAQ = [
  {
    q: "Does Vanta cover the EU AI Act?",
    a: "No. Vanta covers SOC 2, ISO 27001, HIPAA, GDPR baseline, PCI DSS, and a handful of US/global security frameworks. The EU AI Act, DORA, NIS2, and the EU CRA are not on Vanta's roadmap as of this page's last review (27 April 2026). For EU AI/cyber regulations you need a bolt-on like MEOK.",
  },
  {
    q: "Can I run Vanta and MEOK together?",
    a: "Yes — recommended. Vanta is your operational evidence platform for SOC 2 + ISO + HIPAA + GDPR baseline. MEOK is your EU-regulatory evidence layer for EU AI Act + DORA + NIS2 + CRA + ISO/IEC 42001. The two don't conflict because they target different control families and different auditor audiences.",
  },
  {
    q: "How does Vanta pricing compare to MEOK?",
    a: "Vanta starts around $7,500/yr at the entry tier and scales to $25,000+/yr for mid-market with full multi-framework coverage. MEOK Pro is £79/mo (£790/yr annual) and Enterprise is £1,499/mo (£14,990/yr annual). Combined Vanta entry + MEOK Pro is approximately £6,000-£8,000/yr for SOC 2 + EU AI Act + DORA + NIS2 + CRA — typically less than half of Vanta+Drata side-by-side.",
  },
  {
    q: "Does Vanta sign cryptographic attestations?",
    a: "No. Vanta produces dashboards and trust pages with auditor-readable evidence, but the evidence isn't cryptographically signed in a way an external auditor can independently verify by URL. MEOK signs every attestation with HMAC-SHA256 and exposes a public verify_url any auditor can curl without contacting MEOK.",
  },
  {
    q: "If I'm EU-only, can I drop Vanta?",
    a: "It depends on your auditor and customers. If you sell to US enterprise customers they will ask for SOC 2 (Vanta's strength). If you're EU-only B2B and your auditors are continental European they may accept ISO 27001 + EU AI Act evidence stacks instead — that's where MEOK alone can carry compliance evidence.",
  },
  {
    q: "How long to add MEOK on top of Vanta?",
    a: "The free /scorecard takes 90 seconds. Bias Detection (Article 10) is a 7-day free trial then £299/mo. The Audit-Prep Bundle is a 14-day engagement at £4,950. No data migration — MEOK is API-side + signed-evidence side, Vanta is dashboard-side; they don't share storage.",
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

export default function VsVantaPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(201,168,76,0.15)",
            border: `1px solid rgba(201,168,76,0.4)`,
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Honest comparison · updated 27 April 2026
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          MEOK vs Vanta
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          Vanta is excellent. It just doesn't cover Europe.
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40 }}>
          Vanta is the gold-standard for SOC 2 + ISO 27001 + HIPAA + GDPR baseline. We use it. We
          recommend it. But the EU AI Act, DORA, NIS2, and the EU CRA aren't on Vanta's roadmap.
          That's our lane.
        </p>

        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, overflow: "hidden", marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div style={{ padding: "12px 16px" }}>FRAMEWORK / CONTROL</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>VANTA</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: GOLD }}>MEOK</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>NOTE</div>
          </div>
          {COMPARISON.map((c, i) => (
            <div key={c.row} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontSize: 13, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{c.row}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>
                {c.vanta === true ? "✓" : c.vanta === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ fontSize: 11 }}>{c.vanta}</span>}
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Already on Vanta? Add EU coverage in 14 days.</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>
            Free 30-min triage call: bring your Vanta dashboard, we map gaps to EU AI Act + DORA + NIS2 + CRA. You leave with an action list and a 14-day quote if you want one.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@meok.ai?subject=Vanta%20gap%20analysis%20call" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book gap-analysis (free) →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          We respect Vanta. They built one of the best compliance products in the world. This page is here because their users keep asking us "do you do EU AI Act?" — yes. That's all.
          <br />
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>Refund policy</Link>
        </p>
      </div>
    </main>
  );
}
