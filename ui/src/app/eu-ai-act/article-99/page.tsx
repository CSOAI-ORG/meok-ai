import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 99 — Penalties: €35M, €15M, €7.5M Fine Bands Explained",
  description:
    "EU AI Act Article 99 sets three penalty tiers: €35M / 7% turnover for prohibited practices (Art. 5), €15M / 3% for high-risk violations (Arts. 16 / 26 / 50 etc), €7.5M / 1% for false / misleading info to authorities. Free fine calculator.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-99" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What's the highest possible fine under the EU AI Act?", a: "Article 99(3) — €35,000,000 OR 7% of total worldwide annual turnover for the preceding financial year, whichever is higher. This applies to violations of Article 5 (prohibited AI practices). For SMEs the rule reverses: the LOWER of the two. The objective: the fine must hurt." },
  { q: "What's the middle tier?", a: "Article 99(4) — €15,000,000 OR 3% of total worldwide annual turnover, whichever is higher. Applies to non-compliance with: Article 16 (provider obligations), Article 22 (authorised representative), Article 23 (importer), Article 24 (distributor), Article 25 (deployer), Article 26 (deployer obligations including 26(9) FRIA), Article 50 (transparency / watermarking), the relevant requirements of Articles 27 + 28, the obligations of Notified Bodies." },
  { q: "What's the lowest tier?", a: "Article 99(5) — €7,500,000 OR 1% of total worldwide annual turnover, whichever is higher. Applies to: supply of incorrect, incomplete, or misleading information to Notified Bodies + competent authorities. Designed to incentivise honest engagement with the conformity-assessment process." },
  { q: "How are penalties calculated for a multi-product violator?", a: "Article 99(7) — when deciding the amount, supervisory authorities take into account: nature, gravity + duration of the infringement, number of affected persons, level of damage, intent or negligence, financial situation of the operator, prior infringements, cooperation with authorities, technical + organisational measures implemented by the operator. There's discretion within the cap." },
  { q: "Are GPAI providers subject to penalties?", a: "Yes — Article 101 sets separate penalties for GPAI (general-purpose AI) providers: up to 3% of worldwide annual turnover OR €15M, whichever is higher, for non-compliance with Articles 51-55 (foundation-model transparency, training-data summary, copyright policy, systemic-risk obligations). Imposed by the EU AI Office, not member-state authorities." },
  { q: "What about EU institutions themselves?", a: "Article 100 — different framework. EU institutions, bodies, offices, agencies are subject to administrative fines by the European Data Protection Supervisor (EDPS) up to €1.5M (Art. 5 violations) or €750K (other violations). Lower because public-sector EU bodies, not commercial." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article99Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 99 — Penalties</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 99 is the part everyone wants to know up front. Three penalty bands. Highest is €35M or 7% of global turnover. Middle is €15M or 3%. Lower (false info to authorities) €7.5M or 1%. Discretion exists within the bands but the ceilings are real.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>The three bands</h2>

        <div style={{ display: "grid", gap: 16, marginBottom: 32 }}>
          <div style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, borderLeft: "6px solid #dc2626" }}>
            <div style={{ fontSize: 11, color: "#dc2626", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Top tier</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 6 }}>€35,000,000 or 7% turnover</div>
            <div style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6 }}>Article 5 — prohibited AI practices. Subliminal manipulation, exploitation of vulnerabilities, social scoring, profile-based predictive policing, untargeted facial scraping, emotion recognition at work/school, biometric categorisation by sensitive attributes, real-time remote biometric ID in public.</div>
          </div>

          <div style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, borderLeft: "6px solid #f59e0b" }}>
            <div style={{ fontSize: 11, color: "#f59e0b", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Middle tier</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 6 }}>€15,000,000 or 3% turnover</div>
            <div style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6 }}>Provider obligations (Art. 16), deployer obligations (Art. 25 + 26 + 26(9) FRIA), transparency / watermarking (Art. 50), authorised representative (Art. 22), importer (Art. 23), distributor (Art. 24), Notified Body obligations.</div>
          </div>

          <div style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, borderLeft: `6px solid ${GOLD}` }}>
            <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Lower tier</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 6 }}>€7,500,000 or 1% turnover</div>
            <div style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6 }}>Supply of incorrect, incomplete, or misleading information to Notified Bodies + competent authorities. Lying to your regulator costs less than the underlying violation but still hurts.</div>
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>SME special rule</h2>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 24 }}>
          Article 99(6) — for SMEs (incl. start-ups), the fine is the LOWER of the two amounts (cap or % turnover) rather than the HIGHER. Net effect: an SME with €1M turnover faces €70K (top tier) instead of €35M. Designed to keep the regulation from being a startup death sentence.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>Calculate your max exposure</h2>
        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 8 }}>Free fine calculator</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>Enter your turnover + which articles are at risk. Get exact max exposure across the three bands. 30 seconds. Signed attestation.</p>
          <Link href="/fine-calculator" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Calculate exposure →</Link>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 Audit-Prep Bundle →</Link>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free 90-sec scorecard →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 99</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
