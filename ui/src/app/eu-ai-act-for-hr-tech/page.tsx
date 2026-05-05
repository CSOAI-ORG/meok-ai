import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act for HR Tech (2026): Annex III Employment + Article 26(9) FRIA Required",
  description:
    "HR/recruitment AI (CV screening, interview scoring, performance review) is Annex III(4) high-risk. Deployers must run Article 26(9) FRIA before going live. We ship the FRIA generator + signed evidence.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-for-hr-tech" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "Is HR/recruitment AI high-risk?", a: "Annex III(4) explicitly lists: 'AI systems intended to be used (a) for the recruitment or selection of natural persons, in particular to place targeted job advertisements, to analyse and filter job applications, and to evaluate candidates' AND '(b) to make decisions affecting terms of work-related relationships, the promotion or termination of work-related contractual relationships, to allocate tasks based on individual behaviour or personal traits or characteristics, or to monitor and evaluate the performance and behaviour of persons in such relationships.' That covers ATSes, interview scoring, performance review AI, and most workforce-management AI." },
  { q: "What does the deployer have to do?", a: "Article 26 deployer obligations apply when you USE the system (not just provide it). Key: (a) follow the provider's instructions for use, (b) human oversight assigned to a competent natural person, (c) input data is relevant + sufficiently representative, (d) Article 26(9) FRIA before first deployment, (e) GDPR Article 35 DPIA where personal data is processed, (f) inform workers + worker reps + workers' councils." },
  { q: "What's a FRIA in HR context?", a: "A Fundamental Rights Impact Assessment under Article 26(9). For HR systems it must cover: rights engaged (non-discrimination, dignity, data protection, effective remedy, freedom of choice of occupation), categories of affected persons (candidates, employees, vulnerable groups), specific harms by context, mitigation measures, residual risk justification, stakeholder consultation (works council mandatory in Germany under Mitbestimmung), monitoring schedule." },
  { q: "When does this take effect?", a: "Annex III high-risk obligations now apply from 2 December 2027 after Digital Omnibus delay. BUT Article 4 (literacy) is already binding since 2 February 2025 and Article 5 (no exploitation of vulnerabilities) applies to recruitment AI now. GDPR Art. 22 automated-decision protections + Article 35 DPIA also bite immediately for AI-assisted hiring/firing." },
  { q: "What does MEOK ship for HR tech?", a: "FRIA generator (free at /scorecard), Article 10 bias-detection (£299/mo) for selection-rate auditing across protected groups, Article 14 oversight templates, /audit-prep-bundle (£4,950) wrapping Annex IV + FRIA + Article 9 RMS in 14 days." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function HRTechPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>HR Tech vertical · 28 April 2026</div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>EU AI Act for HR Tech</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>Annex III(4) makes you high-risk. FRIA before launch. We ship it.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          ATS, interview-scoring, performance-review, workforce-monitoring AI are <strong>explicitly</strong> Annex III(4) high-risk. Deployers (your customers) must complete an Article 26(9) Fundamental Rights Impact Assessment before first use. If your platform doesn't help them produce one, you lose deals.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { title: "FRIA Generator (free)", price: "FREE", href: "/scorecard", desc: "Seeded from 10-question scorecard, EDPB harmonised template." },
            { title: "Article 10 Bias for Hiring", price: "£299/mo", href: "/bias-detection", desc: "Selection-rate parity across protected groups, continuous attestations." },
            { title: "Article 14 Oversight Templates", price: "£399/mo", href: "/transparency", desc: "Human-in-the-loop control logs + decision-trace audit." },
            { title: "Audit-Prep Bundle", price: "£4,950", href: "/audit-prep-bundle", desc: "14-day delivered: Annex IV + FRIA + RMS + signed evidence." },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", marginBottom: 6 }}>{c.price}</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>What HR tech needs to ship</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>Provider obligations</strong> — instructions for use, technical documentation (Annex IV), risk management system (Art. 9), data governance evidence (Art. 10), human oversight design (Art. 14), conformity assessment (Art. 43), CE marking + registration (Art. 49 + 71).</li>
          <li><strong>Deployer support</strong> — give your customers a FRIA template + bias dashboard + DPIA bridge so they can comply with Article 26(9).</li>
          <li><strong>Worker consultation</strong> — in Germany Mitbestimmung gives works councils a veto on workforce AI. Document the consultation.</li>
          <li><strong>GDPR Article 22 + 35</strong> — automated decision-making protection + DPIA. Stack on top of Article 26(9) FRIA.</li>
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Make EU AI Act a sales accelerator, not a blocker</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>White-label our FRIA generator + bias dashboard so your customers stop saying "wait, we need to check with legal" and start saying "yes, we'll buy."</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@csoai.org?subject=HR%20Tech%20OEM%20partnership" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>OEM partnership →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong></p>
      </div>
    </main>
  );
}
