import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK vs ServiceNow GRC: Open-source EU AI Act Bolt-On (2026)",
  description:
    "ServiceNow GRC is an enterprise risk + audit + policy + business continuity platform. It does NOT cover EU AI Act, DORA, NIS2, or EU CRA out of the box. MEOK is the open-source bolt-on at £149-£999/mo.",
  alternates: { canonical: "https://meok.ai/vs-servicenow-grc" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const COMPARISON: { row: string; sn: string | boolean; meok: string | boolean; note?: string }[] = [
  { row: "Enterprise risk management (ERM)", sn: true, meok: false, note: "ServiceNow's strongest area" },
  { row: "Operational risk management", sn: true, meok: false },
  { row: "Audit management workflow", sn: true, meok: false },
  { row: "Policy + compliance management", sn: true, meok: false },
  { row: "Business continuity management", sn: true, meok: false },
  { row: "Vendor risk management (VRM)", sn: true, meok: false },
  { row: "ITSM + ITOM integration", sn: true, meok: false, note: "ServiceNow's home" },
  { row: "EU AI Act Article 4 (literacy)", sn: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 6 + Annex III", sn: false, meok: true },
  { row: "EU AI Act Article 9 (RMS)", sn: false, meok: true },
  { row: "EU AI Act Article 10 (bias)", sn: false, meok: true },
  { row: "EU AI Act Article 14 (oversight)", sn: false, meok: true },
  { row: "EU AI Act Article 26(9) (FRIA)", sn: false, meok: true },
  { row: "EU AI Act Article 50 (watermarking)", sn: false, meok: true },
  { row: "EU AI Act Article 72 (post-market)", sn: false, meok: true },
  { row: "DORA (Reg 2022/2554)", sn: false, meok: true },
  { row: "NIS2 / NIS2-UmsuCG", sn: false, meok: true },
  { row: "EU CRA (Reg 2024/2847)", sn: false, meok: true },
  { row: "ISO/IEC 42001", sn: false, meok: true },
  { row: "Pre-built EU regulatory crosswalks", sn: "Manual config", meok: "Out-of-box" },
  { row: "Open-source MIT MCPs", sn: false, meok: true },
  { row: "HMAC-signed cryptographic evidence", sn: false, meok: true },
  { row: "Pricing entry", sn: "$70K-$500K+/yr enterprise", meok: "£0 free + £149/mo Pro" },
];

const FAQ = [
  { q: "Does ServiceNow GRC cover the EU AI Act?", a: "Out of the box, no. ServiceNow GRC is a configurable enterprise platform for ERM, audit management, policy management, business continuity, and vendor risk. Customers CAN configure EU AI Act controls in ServiceNow if they have months of consulting time + a 6-figure ServiceNow PS budget. MEOK ships pre-built EU AI Act + DORA + NIS2 + CRA controls out of the box, MIT-licensed, no configuration." },
  { q: "Can I run ServiceNow and MEOK together?", a: "Yes — common in large enterprises. ServiceNow handles ERM + ITSM + audit workflow + business continuity. MEOK provides the EU regulatory crosswalks + signed evidence + cryptographic verifier that flow INTO ServiceNow as evidence artefacts. Different layers; complementary." },
  { q: "What's the price gap?", a: "ServiceNow GRC starts ~$70K/yr for the platform license + typically $50K-$200K of consulting for an EU AI Act configuration. MEOK Pro is £149/mo (£1,490/yr). Combined, ServiceNow + MEOK at Pro is roughly $80K/yr — saves $50K-$200K of EU-specific PS work because MEOK comes pre-built." },
  { q: "Does ServiceNow sign cryptographic attestations?", a: "Not natively. ServiceNow GRC produces audit evidence but doesn't HMAC-sign it for independent auditor verification. MEOK signs every attestation with HMAC-SHA256 and exposes a public verify_url. The signed certs flow into ServiceNow as evidence + give external auditors a verification path that doesn't require ServiceNow access." },
  { q: "Why pick MEOK over ServiceNow GRC?", a: "Three reasons: (1) you need pre-built EU AI Act / DORA / NIS2 / CRA controls without months of ServiceNow PS configuration; (2) you need cryptographically signed evidence with external verifier; (3) you want open-source MIT-licensed tooling. For Fortune 500 ITSM-anchored companies running ServiceNow already, MEOK augments. For pre-Series-C AI companies, MEOK alone is sufficient." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function VsServiceNowGRCPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          Honest comparison · updated 27 April 2026
        </div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>MEOK vs ServiceNow GRC</h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>ServiceNow is enterprise platform. MEOK is pre-built EU regulatory bolt-on.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40 }}>
          ServiceNow GRC is a strong enterprise platform for ERM + audit + policy + business continuity. We use it.
          But getting EU AI Act + DORA + NIS2 + CRA running on ServiceNow needs months of PS work. MEOK ships those pre-built.
        </p>

        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, overflow: "hidden", marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div style={{ padding: "12px 16px" }}>FRAMEWORK / CONTROL</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>SERVICENOW GRC</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: GOLD }}>MEOK</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>NOTE</div>
          </div>
          {COMPARISON.map((c, i) => (
            <div key={c.row} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontSize: 13, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{c.row}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>
                {c.sn === true ? "✓" : c.sn === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ fontSize: 11 }}>{c.sn}</span>}
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Save 6 months of ServiceNow PS work</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Bring your ServiceNow GRC scope, we map gaps to pre-built MEOK EU AI Act + DORA + NIS2 + CRA controls + signed evidence flow.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@meok.ai?subject=ServiceNow%20GRC%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book gap-analysis (free) →</a>
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
