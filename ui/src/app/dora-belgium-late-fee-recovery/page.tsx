import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DORA Belgium Late-Fee Recovery · Self-assessment cliff passed 18 Apr 2026",
  description:
    "Belgium was the first EU member state with a hard DORA self-assessment cutoff (18 April 2026). Late-filing rapid response from MEOK: signed Article 28 register + late-filing rationale, 7-day turnaround, £999.",
  alternates: { canonical: "https://meok.ai/dora-belgium-late-fee-recovery" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const RED = "#dc2626";

const STRIPE_LINK = "https://buy.stripe.com/bJedRb1BWdQSgYRfL28k83c";

const FAQ = [
  { q: "What was the 18 April 2026 Belgium DORA cutoff?", a: "Belgium became the first EU member state to enforce a hard self-assessment deadline under the Digital Operational Resilience Act (DORA, Reg 2022/2554). Belgian financial entities (banks, insurers, IORPs, payment institutions) had to submit their first self-assessment by 18 April 2026." },
  { q: "What if my entity missed the deadline?", a: "The NBB (Nationale Bank van België) accepts late filings with a documented late-filing rationale. The rationale should reference the entity's systemic obligations, evidence of good faith remediation, and a forward-looking compliance plan." },
  { q: "What does MEOK's £999 late-filing kit include?", a: "Article 28 ICT third-party register populated for your entity. TLPT scope plan (Article 26). Signed late-filing rationale referencing Belgian + EU DORA grace-period guidance. Signed compliance attestation with public verify URL. 7-day turnaround from order to filed." },
  { q: "Are other member states adopting hard cliffs?", a: "France, Germany, Netherlands and Italy have published similar self-assessment timelines but none yet as hard as Belgium's 18 April cutoff. Belgium is the leading-edge enforcement jurisdiction; the rest are likely to follow within Q3-Q4 2026." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function DoraBelgiumPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← meok.ai</Link>

        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(220,38,38,0.1)", border: `1px solid rgba(220,38,38,0.4)`, color: RED, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 24, marginBottom: 24 }}>
          🇧🇪 Belgium DORA cutoff passed 18 April 2026
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          DORA Belgium — Late-Filing Rapid Response
        </h1>
        <p style={{ fontSize: "1.5rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>£999 · 7-day turnaround</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32, lineHeight: 1.6 }}>
          Belgium became the first EU member state with a hard DORA self-assessment cutoff. The NBB
          accepts late filings with a documented rationale. We complete the Article 28 register +
          late-filing rationale + signed attestation in 7 days.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
          <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" style={{ padding: "16px 28px", borderRadius: 12, background: GOLD, color: NAVY, fontWeight: 900, textDecoration: "none", fontSize: 15 }}>
            Book Belgium DORA late-filing — £999 →
          </a>
          <a href="mailto:nicholas@csoai.org?subject=Belgium%20DORA%20late-filing%20call" target="_blank" rel="noopener noreferrer" style={{ padding: "16px 28px", borderRadius: 12, background: "transparent", color: NAVY, fontWeight: 900, textDecoration: "none", fontSize: 15, border: `1px solid ${NAVY}33` }}>
            Or book a 30-min triage call (free) →
          </a>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>What's in the kit</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li>Article 28 ICT third-party register populated for your entity</li>
          <li>TLPT (Threat-Led Penetration Testing) scope plan per Article 26</li>
          <li>Signed late-filing rationale referencing Belgian + EU DORA grace-period guidance</li>
          <li>HMAC-signed compliance attestation with public verify URL</li>
          <li>7-day turnaround from order to filed</li>
          <li>30 days of post-filing email support for NBB follow-ups</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 8 }}>Other member state cutoffs coming?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            We're building the same kit pattern for France, Germany, Netherlands, Italy. Email us if your jurisdiction needs the same treatment.
          </p>
          <a href="mailto:nicholas@csoai.org?subject=DORA%20jurisdiction%20kit%20request" style={{ display: "inline-block", padding: "12px 22px", background: GOLD, color: NAVY, borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
            Request a jurisdiction kit →
          </a>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://www.nbb.be/" style={{ color: GOLD }}>Nationale Bank van België</a> · DORA Reg 2022/2554 · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
