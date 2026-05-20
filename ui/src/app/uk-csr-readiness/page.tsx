import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Cyber Security & Resilience Bill — readiness for MSPs + data centres",
  description:
    "The UK Cyber Security and Resilience Bill brings MSPs + data centres into NIS-equivalent scope. 24h initial / 72h full incident reporting. MEOK readiness scorecard + audit-prep bundle.",
  alternates: { canonical: "https://meok.ai/uk-csr-readiness" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What is the UK Cyber Security and Resilience Bill?", a: "A new UK Bill at committee stage in the 2025-26 parliamentary session. It updates the Network and Information Systems Regulations 2018 (UK NIS) to bring managed service providers (MSPs) and data centres into scope, expand the regulator's powers, and standardise incident reporting timelines." },
  { q: "Who's newly in scope?", a: "Managed service providers (MSPs) — IT outsourcing, managed security, managed cloud. Data centres above a threshold. Some critical digital infrastructure operators not previously in NIS. The exact threshold + scope wording is still moving in committee." },
  { q: "What incident reporting is required?", a: "Phased: initial notification within 24 hours of becoming aware of a significant incident, full report within 72 hours. Mirrors EU NIS2 Article 23 timelines. Designated Critical Operations require additional reports to relevant sector regulators." },
  { q: "When does the Bill take effect?", a: "Phased implementation expected from 2026 onward, contingent on Royal Assent and statutory instruments. Current estimate: substantive obligations from 2027 with grace periods for new in-scope entities." },
  { q: "How does MEOK help?", a: "We're scaffolding a meok-uk-csr-readiness MCP based on the existing meok-nis2-de-register-mcp codebase. Same evidence-pack pattern: entity classifier + register payload + signed compliance attestation. Available to early customers — email nicholas@meok.ai for early access." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function UKCSRPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← meok.ai</Link>

        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 24, marginBottom: 24 }}>
          🇬🇧 UK CSR Bill — committee stage
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          UK Cyber Security &amp; Resilience Bill — MSP + data-centre readiness
        </h1>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          The UK CSR Bill brings managed service providers and data centres into NIS-equivalent
          scope. 24h initial / 72h full incident reporting timelines. We're scaffolding a turnkey
          readiness pack now — early access available.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>What's expected to be required</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li>Risk-management measures appropriate to the entity's risk profile (similar to NIS2 Article 21)</li>
          <li>Incident reporting: 24h initial notification, 72h full report</li>
          <li>Designated regulator powers including penalties for non-compliance</li>
          <li>Supply-chain security obligations covering downstream MSP customers</li>
          <li>Senior management accountability with personal liability for systemic failures</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>How to get ahead now</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li>If you're an MSP or data centre, complete a NIS2-equivalent self-assessment now — UK CSR is essentially NIS2 with British branding.</li>
          <li>Wire incident-reporting flow with 24h/72h tooling — meok-ai-incident-reporting-mcp covers both NIS2 Art 23 and UK CSR timelines.</li>
          <li>Pre-populate evidence pack: ICT third-party register, supply chain map, incident response runbook.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Early access — first 10 MSPs</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            We're shipping the meok-uk-csr-readiness MCP + evidence-pack template to the first 10 MSPs that ask. Free during the early access window in exchange for feedback. Email below.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:nicholas@meok.ai?subject=UK%20CSR%20Bill%20early%20access" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Request early access →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://bills.parliament.uk/bills/4035" style={{ color: GOLD }}>UK Parliament — Cyber Security and Resilience Bill</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
