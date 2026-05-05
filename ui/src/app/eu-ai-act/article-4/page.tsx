import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 4 — AI Literacy Implementation Guide (in force Feb 2025)",
  description:
    "What Article 4 requires: AI literacy training for staff who design, develop, deploy, or use AI systems. Already in force since 2 Feb 2025. Free MEOK template + signed evidence pack.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-4" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "When does Article 4 apply?", a: "Article 4 has been in force since 2 February 2025 (the earliest EU AI Act provision to take effect). It applies to providers and deployers of AI systems, plus any other person on whose behalf an AI system is operated. There is NO grace period — the obligation is live now." },
  { q: "What level of AI literacy is required?", a: "Article 4 requires 'a sufficient level of AI literacy' — calibrated to the specific role of the staff member. A junior support agent needs less depth than an ML engineer. The standard is: enough to make informed decisions, recognize risks, and operate the system safely. The Commission's Q&A (April 2026) clarifies it's a risk-proportionate obligation, not a one-size-fits-all certification." },
  { q: "Do we need to enrol everyone in formal training?", a: "No — but you need a defensible audit trail showing each role got literacy proportionate to its risk exposure. A 30-min onboarding module + role-specific top-ups + an annual refresher is typical for SMBs. Larger organisations should match curricula to OECD AI Literacy Framework." },
  { q: "Does it apply to non-EU companies?", a: "Yes — Article 4 binds providers and deployers placing AI systems on the EU market or using them in the EU. A US SaaS with EU users is in scope. Article 113 effective-date provisions confirm this." },
  { q: "What's the penalty?", a: "Article 4 obligations don't have a dedicated penalty tier — they're enforced through the general Article 99 framework. Failure to provide AI literacy can be cited as evidence of broader Article 9 risk-management failure (€15M / 3% turnover). In practice, regulators cite Article 4 as a contextual element of high-risk AI audits, not as a standalone fine driver." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article4Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 4 — AI Literacy</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 4 is the EU AI Act provision most teams forget exists. It came into force on 2 February 2025 — the earliest of all EU AI Act provisions. There's no grace period. Anyone whose staff designs, deploys, or uses AI systems must show appropriate literacy.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What Article 4 requires</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>4(1)</strong> — Providers and deployers must take measures to ensure, to the best extent, a sufficient level of AI literacy of their staff and other persons dealing with the operation and use of AI systems.</li>
          <li><strong>Calibration</strong> — measures must take into account technical knowledge, experience, education, and training of the persons + the context the AI system is used in + the persons or groups of persons on which the AI system is used.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>Common audit failures</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li>Generic 1-page "AI Acceptable Use Policy" with no role-specific calibration.</li>
          <li>No record of who completed which module when.</li>
          <li>Onboarding-only — no annual refresher.</li>
          <li>Non-EU operations excluded from training (Article 4 applies extraterritorially).</li>
          <li>Contractors / agency staff / consultants excluded — Article 4 covers anyone "operating" the system on your behalf.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 4</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 12 }}>meok-governance-engine-mcp emits an Article 4 literacy curriculum tailored to your roles + records who completed what + when. /audit-prep-bundle (£4,950) wraps Article 4 + Articles 9/10/14/26/50/72 in a 14-day signed evidence pack.</p>
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
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free 90-second scorecard →</Link>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 Audit-Prep Bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 4</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
