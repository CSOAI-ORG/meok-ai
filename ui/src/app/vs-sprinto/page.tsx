import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK vs Sprinto: EU AI Act, DORA, NIS2 & CRA Bolt-On (2026)",
  description:
    "Sprinto is great for SOC 2 + ISO 27001 + HIPAA + GDPR continuous monitoring. It does NOT cover EU AI Act, DORA, NIS2, or EU CRA. MEOK is the EU regulatory bolt-on at £149-£999/mo.",
  alternates: { canonical: "https://meok.ai/vs-sprinto" },
  openGraph: {
    title: "MEOK vs Sprinto — what Sprinto does NOT cover",
    description: "Sprinto = US frameworks. MEOK = EU regulatory bolt-on.",
    type: "website",
    url: "https://meok.ai/vs-sprinto",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const COMPARISON: { row: string; sprinto: string | boolean; meok: string | boolean; note?: string }[] = [
  { row: "SOC 2 (Type 1 + 2)", sprinto: true, meok: false, note: "Sprinto's home turf — keep using" },
  { row: "ISO 27001", sprinto: true, meok: false },
  { row: "HIPAA", sprinto: true, meok: false },
  { row: "GDPR (controls + DPA)", sprinto: true, meok: "Crosswalk + DPIA bridge" },
  { row: "PCI DSS", sprinto: true, meok: false },
  { row: "Continuous-monitoring agent", sprinto: true, meok: false, note: "Sprinto's strongest area" },
  { row: "EU AI Act Article 4 (literacy)", sprinto: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 6 + Annex III", sprinto: false, meok: true },
  { row: "EU AI Act Article 9 (RMS)", sprinto: false, meok: true },
  { row: "EU AI Act Article 10 (bias)", sprinto: false, meok: true, note: "Live at /bias-detection £299/mo" },
  { row: "EU AI Act Article 14 (oversight)", sprinto: false, meok: true },
  { row: "EU AI Act Article 26(9) (FRIA)", sprinto: false, meok: true, note: "EDPB harmonised template wired" },
  { row: "EU AI Act Article 43 (conformity)", sprinto: false, meok: true },
  { row: "EU AI Act Article 50 (watermarking)", sprinto: false, meok: true, note: "Live at /article-50-kit · 2 Nov 2026" },
  { row: "EU AI Act Article 72 (post-market)", sprinto: false, meok: true },
  { row: "DORA (Reg 2022/2554)", sprinto: false, meok: true },
  { row: "NIS2 / NIS2-UmsuCG (DE)", sprinto: false, meok: true, note: "Live at /nis2-de-kit" },
  { row: "EU CRA (Reg 2024/2847)", sprinto: false, meok: true },
  { row: "ISO/IEC 42001 (AI mgmt)", sprinto: false, meok: true },
  { row: "HMAC-signed evidence per control", sprinto: false, meok: true, note: "Auditor curl-verifiable" },
  { row: "Open-source MCPs (MIT)", sprinto: false, meok: true, note: "8 packages on PyPI" },
  { row: "Pricing entry", sprinto: "$2,500-$15,000+/yr", meok: "£0 free + £149/mo Pro" },
];

const FAQ = [
  { q: "Does Sprinto cover the EU AI Act?", a: "No. Sprinto's launched scope (continuous compliance for cloud + SaaS) covers SOC 2, ISO 27001, HIPAA, GDPR baseline, PCI DSS, and a handful of cloud-security frameworks. The EU AI Act, DORA, NIS2, and the EU CRA are not on Sprinto's roadmap as of 27 April 2026. For EU AI/cyber regulations you need a bolt-on like MEOK." },
  { q: "Can I run Sprinto and MEOK together?", a: "Yes — recommended. Sprinto handles your continuous-monitoring evidence platform for SOC 2 / ISO 27001 / HIPAA / GDPR baseline. MEOK handles the EU regulatory evidence layer for EU AI Act + DORA + NIS2 + CRA + ISO/IEC 42001. Different control families, different auditor audiences, no overlap." },
  { q: "Sprinto vs MEOK pricing — what's the real cost?", a: "Sprinto pricing is opaque but indie reports suggest $2,500-$15,000+/yr depending on company size + framework count. MEOK Pro is £149/mo (£1,490/yr annual) and Defence is £999/mo (£9,990/yr annual). Combined Sprinto entry + MEOK Pro is approximately £3,000-£8,000/yr for SOC 2 + EU AI Act + DORA + NIS2 + CRA — typically half of running Sprinto + a separate EU compliance tool stack." },
  { q: "Does Sprinto sign cryptographic attestations?", a: "No. Sprinto produces dashboards + continuous-monitoring evidence — auditors can read it via Sprinto's UI but the evidence isn't cryptographically signed for independent verification. MEOK signs every attestation with HMAC-SHA256 and exposes a public verify_url any auditor can curl from outside the platform." },
  { q: "How long to add MEOK on top of Sprinto?", a: "The free /scorecard takes 90 seconds. Bias Detection (Article 10) is a 7-day free trial then £299/mo. Audit-Prep Bundle is a 14-day engagement at £4,950. No data migration — MEOK is API + signed-evidence side, Sprinto is dashboard side; they don't share storage." },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function VsSprintoPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          Honest comparison · updated 27 April 2026
        </div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>MEOK vs Sprinto</h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>Sprinto is excellent. It just doesn't cover Europe.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40 }}>
          Sprinto is a strong continuous-compliance platform for SOC 2 + ISO 27001 + HIPAA + GDPR. We use it.
          But the EU AI Act, DORA, NIS2, and the EU CRA aren't on Sprinto's roadmap. That's our lane.
        </p>

        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, overflow: "hidden", marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div style={{ padding: "12px 16px" }}>FRAMEWORK / CONTROL</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>SPRINTO</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: GOLD }}>MEOK</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>NOTE</div>
          </div>
          {COMPARISON.map((c, i) => (
            <div key={c.row} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontSize: 13, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{c.row}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>
                {c.sprinto === true ? "✓" : c.sprinto === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ fontSize: 11 }}>{c.sprinto}</span>}
              </div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08`, background: "rgba(201,168,76,0.04)" }}>
                {c.meok === true ? <span style={{ color: GOLD, fontWeight: 900 }}>✓</span> : c.meok === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ color: GOLD, fontSize: 11 }}>{c.meok}</span>}
              </div>
              <div style={{ padding: "12px 16px", color: `${NAVY}77`, fontSize: 12, borderLeft: `1px solid ${NAVY}08` }}>{c.note || ""}</div>
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Already on Sprinto? Add EU coverage in 14 days.</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Free 30-min triage call: bring your Sprinto dashboard, we map gaps to EU AI Act + DORA + NIS2 + CRA.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@meok.ai?subject=Sprinto%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book gap-analysis (free) →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          We respect Sprinto. They built one of the best continuous-compliance products. This page is here because their users keep asking us "do you do EU AI Act?" — yes. That's all.
          <br />
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
