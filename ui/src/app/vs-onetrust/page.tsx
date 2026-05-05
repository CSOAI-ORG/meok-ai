import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK vs OneTrust — Open-Source EU AI Act Bolt-On (2026)",
  description:
    "OneTrust is enterprise privacy GRC ($50K-$300K+/yr). It does NOT cover EU AI Act, DORA, NIS2, or EU CRA out of the box. MEOK is the open-source EU regulatory bolt-on at £79-£1,499/mo.",
  alternates: { canonical: "https://meok.ai/vs-onetrust" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const COMPARISON: { row: string; ot: string | boolean; meok: string | boolean; note?: string }[] = [
  { row: "Privacy management (GDPR DSAR, RoPA, DPIA)", ot: true, meok: false, note: "OneTrust's home turf" },
  { row: "Cookie consent management", ot: true, meok: false, note: "OneTrust's strongest area" },
  { row: "Vendor risk management (TPRM)", ot: true, meok: false },
  { row: "Privacy training + awareness", ot: true, meok: false },
  { row: "Trust Intelligence Platform", ot: true, meok: false },
  { row: "ESG + sustainability", ot: true, meok: false },
  { row: "AI Governance module", ot: "Add-on", meok: "Out-of-box", note: "OneTrust shipped GenAI gov in 2024 — generic" },
  { row: "EU AI Act Article 4 (literacy)", ot: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 6 + Annex III", ot: "Generic", meok: true },
  { row: "EU AI Act Article 9 (RMS)", ot: "Generic", meok: true },
  { row: "EU AI Act Article 10 (bias detection)", ot: false, meok: true, note: "Live at /bias-detection £299/mo" },
  { row: "EU AI Act Article 14 (oversight templates)", ot: false, meok: true },
  { row: "EU AI Act Article 26(9) FRIA", ot: false, meok: true, note: "EDPB harmonised template" },
  { row: "EU AI Act Article 50 watermarking", ot: false, meok: true, note: "C2PA + SynthID kit" },
  { row: "EU AI Act Article 72 post-market monitoring", ot: false, meok: true },
  { row: "DORA (Reg 2022/2554)", ot: false, meok: true },
  { row: "NIS2 / NIS2-UmsuCG (Germany)", ot: false, meok: true, note: "Live at /nis2-de-kit £499" },
  { row: "EU CRA (Reg 2024/2847)", ot: false, meok: true },
  { row: "ISO/IEC 42001 (AI mgmt)", ot: false, meok: true },
  { row: "Pre-built EU regulatory crosswalks", ot: "Manual config", meok: "Out-of-box" },
  { row: "Open-source MIT MCPs", ot: false, meok: true, note: "31+ on PyPI" },
  { row: "HMAC-signed cryptographic evidence", ot: false, meok: true, note: "Auditor curl-verifiable" },
  { row: "Pricing entry", ot: "$50K-$300K+/yr enterprise", meok: "£0 free + £79/mo Pro" },
];

const FAQ = [
  { q: "Does OneTrust cover the EU AI Act?", a: "OneTrust shipped a generic 'AI Governance' module in 2024 covering AI inventory + risk classification, but it does not ship pre-built EU AI Act Article-by-Article controls. To configure Articles 4/9/10/13/14/15/26/43/50/72 + DORA + NIS2 + CRA on OneTrust requires significant professional services time + 6-figure contract. MEOK ships those pre-built, MIT-licensed, no configuration." },
  { q: "Can I run OneTrust and MEOK together?", a: "Yes — recommended for enterprise. OneTrust handles privacy GRC + cookie consent + DSAR + vendor TPRM. MEOK provides the EU regulatory crosswalks + signed evidence + cryptographic verifier that flow into OneTrust as evidence artefacts. Different layers; complementary." },
  { q: "What's the price gap?", a: "OneTrust enterprise starts ~$50K/yr (small team, 1-2 modules) and scales to $300K+/yr (multi-module + AI Governance + Privacy + ESG). MEOK Pro is £79/mo (£790/yr). For a typical mid-market company already paying for OneTrust, adding MEOK Pro is a rounding error that closes the EU regulatory gap." },
  { q: "Does OneTrust sign cryptographic attestations?", a: "Not natively. OneTrust produces audit-ready dashboards + assessment reports but does not HMAC-sign evidence for independent auditor verification. MEOK signs every attestation with HMAC-SHA256 and exposes a public verify_url. The signed certs flow into OneTrust as evidence + give external auditors a verification path." },
  { q: "Why pick MEOK over OneTrust for AI compliance specifically?", a: "Three reasons: (1) you need pre-built EU AI Act / DORA / NIS2 / CRA controls without months of OneTrust professional services configuration; (2) you need cryptographically signed evidence with external verifier; (3) you want open-source MIT-licensed MCPs you can pull into your own agent stack. For Fortune 500 privacy GRC teams running OneTrust already, MEOK augments. For pre-Series-C AI companies, MEOK alone is sufficient." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function VsOneTrustPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          Honest comparison · 28 April 2026
        </div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>MEOK vs OneTrust</h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>OneTrust is privacy + cookie + TPRM. MEOK is pre-built EU regulatory.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40 }}>
          OneTrust is a strong enterprise platform for privacy GRC, cookie consent, DSAR, vendor TPRM. We respect it.
          But getting EU AI Act + DORA + NIS2 + CRA running on OneTrust needs months of professional services.
          MEOK ships those pre-built.
        </p>

        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, overflow: "hidden", marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div style={{ padding: "12px 16px" }}>FRAMEWORK / CONTROL</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>ONETRUST</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: GOLD }}>MEOK</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>NOTE</div>
          </div>
          {COMPARISON.map((c, i) => (
            <div key={c.row} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontSize: 13, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{c.row}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>
                {c.ot === true ? "✓" : c.ot === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ fontSize: 11 }}>{c.ot}</span>}
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Already on OneTrust? Add EU regulatory in 14 days.</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Bring your OneTrust scope, we map gaps to MEOK pre-built EU AI Act + DORA + NIS2 + CRA controls + signed evidence flow.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@csoai.org?subject=OneTrust%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book gap-analysis (free) →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>30-day money-back</Link>
        </p>
      </div>
    </main>
  );
}
