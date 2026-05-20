import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act for EdTech (2026): Annex III Education + Children's Data + FRIA",
  description:
    "EdTech AI for admissions, exam scoring, proctoring, learning-path personalisation is Annex III(3) high-risk. GDPR Article 8 (children) stacks. FRIA mandatory. We ship the evidence.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-for-edtech" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "Is EdTech AI high-risk?", a: "Annex III(3) lists education AI as high-risk: '(a) AI systems intended to be used to determine access or admission or to assign natural persons to educational and vocational training institutions, (b) to evaluate learning outcomes, including when those outcomes are used to steer the learning process, (c) for the purpose of assessing the appropriate level of education that a person will receive, (d) for monitoring and detecting prohibited behaviour during tests in the context of training and education.' Admissions AI, automated grading, AI proctoring, adaptive-learning AI — all in scope." },
  { q: "What about children's data?", a: "GDPR Article 8 protects children — minimum age for valid consent for information-society services is between 13-16 depending on member state. Article 35 DPIA is mandatory whenever children's data is processed. EU AI Act Article 5(b) bans AI that exploits vulnerabilities of persons due to their age. Stack: GDPR Art. 8 + Art. 35 DPIA + AI Act Article 5 ban + Annex III high-risk + Article 26(9) FRIA." },
  { q: "What's required for AI proctoring?", a: "Especially scrutinised. Annex III(3)(d) explicitly captures AI to detect prohibited behaviour during tests. Bias mitigation (Article 10) for facial recognition under different lighting/skin tones is mandatory. Human oversight (Article 14) must be effective — false-positive flags must be reviewed by a competent natural person before academic consequence. Transparency to test-takers (Article 13 + 50) about AI use. National supervisory authorities are paying close attention." },
  { q: "When does this take effect?", a: "Annex III high-risk obligations now apply from 2 December 2027 after Digital Omnibus delay. Article 4 (literacy) is binding since 2 February 2025 — for EdTech this includes student-facing literacy as well as staff. Article 5 (no exploitation of children's vulnerabilities) is fully in force. GDPR DPIA requirements are immediate." },
  { q: "What does MEOK ship for EdTech?", a: "FRIA generator (free at /scorecard) seeded with EdTech Annex III categories. Article 10 bias-detection (£299/mo) for grading + admissions + proctoring AI. Article 13 transparency logs (£399/mo) for student/parent disclosure. /audit-prep-bundle £4,950 for full Annex IV + FRIA in 14 days." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function EdtechPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>EdTech vertical · 28 April 2026</div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>EU AI Act for EdTech</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>Annex III(3) + GDPR children data + FRIA. We ship the evidence pack.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Admissions AI, automated grading, AI proctoring, adaptive learning are Annex III(3) high-risk. With children's data the stack thickens — GDPR Article 8 + Article 35 DPIA + EU AI Act Article 5(b) + Article 26(9) FRIA. National supervisory authorities pay close attention to this sector.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { title: "FRIA + DPIA Generator", price: "FREE", href: "/scorecard", desc: "EDPB harmonised template + GDPR DPIA bridge for child data." },
            { title: "Article 10 Bias Detection", price: "£299/mo", href: "/bias-detection", desc: "Grade + admission + proctoring fairness across demographic groups." },
            { title: "Article 13 Transparency", price: "£399/mo", href: "/transparency", desc: "Student / parent disclosure logs + decision-trace audit." },
            { title: "Audit-Prep Bundle", price: "£4,950", href: "/audit-prep-bundle", desc: "14-day delivered: Annex IV + FRIA + DPIA + RMS." },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", marginBottom: 6 }}>{c.price}</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>The EdTech AI compliance stack</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>EU AI Act Annex III(3)</strong> — high-risk classification for education AI.</li>
          <li><strong>EU AI Act Article 5(b)</strong> — ban on exploiting children's vulnerabilities (in force now).</li>
          <li><strong>EU AI Act Article 26(9) FRIA</strong> — mandatory for deployers (schools, universities, training providers).</li>
          <li><strong>GDPR Article 8</strong> — children's consent, age 13-16 by member state.</li>
          <li><strong>GDPR Article 35 DPIA</strong> — mandatory for systematic monitoring of children.</li>
          <li><strong>GDPR Article 22</strong> — automated-decision protection for grades / admissions.</li>
          <li><strong>National sector laws</strong> — France Code de l'éducation + national rules on automated grading vary.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Win EU university procurement, don't lose it</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Universities + schools now require pre-built Annex III evidence in vendor RFPs. Ship the FRIA + DPIA + bias dashboard and you get on shortlist; don't and you don't.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep →</Link>
            <a href="mailto:nicholas@meok.ai?subject=EdTech%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free triage →</a>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong></p>
      </div>
    </main>
  );
}
