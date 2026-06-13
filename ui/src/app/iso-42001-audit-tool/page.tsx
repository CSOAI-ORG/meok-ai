import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ISO/IEC 42001 Audit Tool — AI Management System Software (2026)",
  description:
    "ISO/IEC 42001 audit tool. AI Management System (AIMS) software with signed per-control evidence. Aligns with EU AI Act + NIST AI RMF. From £149/mo.",
  alternates: { canonical: "https://meok.ai/iso-42001-audit-tool" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  {
    q: "What is ISO/IEC 42001?",
    a: "ISO/IEC 42001:2023 is the international standard for AI Management Systems (AIMS). It specifies requirements for establishing, implementing, maintaining, and continually improving an AIMS. It was published December 2023 and is the first AI-specific certifiable management system standard. It maps closely to ISO 27001 (information security) and ISO 9001 (quality), and explicitly cross-references the EU AI Act and NIST AI RMF.",
  },
  {
    q: "Do I need ISO 42001 certification?",
    a: "It's not yet legally required anywhere, but it's becoming a procurement requirement for AI vendors selling to enterprises, governments, and the public sector. The EU AI Act's high-risk Article 9 (risk management system) and Article 10 (data governance) are largely satisfied by an ISO 42001 AIMS. MEOK maps every ISO 42001 Annex A control to the corresponding EU AI Act Article, so a single AIMS gives you both certifications.",
  },
  {
    q: "How is ISO 42001 different from ISO 27001?",
    a: "ISO 27001 is information security management (ISMS). ISO 42001 is AI management (AIMS). Overlap is significant — both use Annex SL high-level structure, both require risk assessment, both require continuous improvement. The differences: 42001 has AI-specific controls in Annex A (AI policy, AI risk assessment, AI system lifecycle, data quality for AI, transparency, human oversight, vendor management, incident management). Most organisations implementing 42001 already have 27001; MEOK generates evidence for both with one AIMS.",
  },
  {
    q: "How long does ISO 42001 certification take?",
    a: "Typical timeline: 4-8 months from project kickoff to certification. Phase 1 (gap analysis + scope): 4-6 weeks. Phase 2 (implement controls + collect evidence): 8-16 weeks. Phase 3 (internal audit + management review): 4-6 weeks. Phase 4 (Stage 1 + Stage 2 certification audit by an accredited body): 6-10 weeks. MEOK's signed evidence system compresses Phase 2 by 50-70% because every control is already pre-mapped to a signed attestation.",
  },
  {
    q: "What is an AIMS?",
    a: "An AI Management System is the set of policies, processes, and controls an organisation uses to govern its use of AI. It's analogous to an ISMS for ISO 27001 or a QMS for ISO 9001. An AIMS includes: AI policy, AI risk assessment methodology, AI system inventory, AI lifecycle controls, data quality controls, transparency & explainability, human oversight, vendor management, incident management, and continual improvement.",
  },
  {
    q: "What does MEOK provide for ISO 42001?",
    a: "MEOK ships: (1) a pre-built AIMS template aligned to ISO/IEC 42001:2023 Annex A, (2) signed per-control attestations (HMAC-SHA256 + Ed25519) for evidence of implementation, (3) cross-mapping to EU AI Act Articles and NIST AI RMF functions, (4) auditor portal where your certification body's auditor can independently verify each control's evidence by URL, (5) internal audit checklist + management review template, (6) gap analysis against your current state.",
  },
  {
    q: "How much does ISO 42001 certification cost?",
    a: "Auditor fees for a small-to-mid-sized org: £15k-£40k for Stage 1 + Stage 2. MEOK's AIMS tooling: Pro tier £149/mo covers the management system template + signed evidence; Audit-Prep Bundle £4,950 one-time covers the gap analysis + internal audit + Stage 1 readiness review. Total: £15k-£45k including auditor fees for SMB, vs £40k-£120k+ if you go with traditional GRC consultancy.",
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

const ANNEX_A = [
  { ctrl: "A.2", title: "AI policy", desc: "Top-level policy defining organisation's AI use principles." },
  { ctrl: "A.3", title: "AI roles & responsibilities", desc: "Defined roles: AI owner, AI risk officer, AI steering committee." },
  { ctrl: "A.4", title: "AI risk assessment", desc: "Methodology + register for AI-specific risks (bias, drift, hallucination, security)." },
  { ctrl: "A.5", title: "AI system inventory", desc: "Complete registry of all AI systems in production or development." },
  { ctrl: "A.6", title: "Data quality for AI", desc: "Training data provenance, bias testing, representativeness, data freshness." },
  { ctrl: "A.7", title: "AI system lifecycle", desc: "Controls across design → develop → deploy → operate → retire." },
  { ctrl: "A.8", title: "Transparency & explainability", desc: "User-facing disclosure, model cards, decision explanations." },
  { ctrl: "A.9", title: "Human oversight", desc: "Kill switch, intervention ability, escalation paths." },
  { ctrl: "A.10", title: "Vendor management", desc: "AI supplier due diligence, contract terms, ongoing monitoring." },
  { ctrl: "A.11", title: "Incident management", desc: "AI-specific incident response, regulator notification (Article 72)." },
  { ctrl: "A.12", title: "Continual improvement", desc: "Periodic review, metrics, lessons learned, change management." },
];

export default function Page() {
  return (
    <article className="min-h-screen text-white" style={{ backgroundColor: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
          ISO/IEC 42001 · 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-4xl mx-auto">
          ISO 42001 audit tool — signed per-control evidence
        </h1>
        <p className="text-white/60 text-lg max-w-3xl mx-auto">
          AI Management System (AIMS) software with cryptographically signed
          Annex A evidence. Cross-mapped to EU AI Act + NIST AI RMF. Pass your
          certification audit in 4-8 months, not 12.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?intent=enterprise"
            className="px-8 py-4 rounded-xl font-bold text-black"
            style={{ backgroundColor: GOLD }}
          >
            Book a 30-min audit review
          </Link>
          <a
            href="https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T"
            className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:border-white/40"
          >
            Pro tier — £199/mo
          </a>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Annex A controls, signed</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {ANNEX_A.map((c) => (
              <div
                key={c.ctrl}
                className="rounded-xl border border-white/[0.08] p-4"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <p className="font-mono text-sm mb-1" style={{ color: GOLD }}>
                  {c.ctrl}
                </p>
                <h3 className="font-bold mb-1">{c.title}</h3>
                <p className="text-white/60 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: BG, color: NAVY }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">MEOK ↔ ISO 42001 ↔ EU AI Act</h2>
          <p className="text-lg mb-6">
            Every ISO 42001 Annex A control in MEOK is cross-mapped to the
            corresponding EU AI Act Article and NIST AI RMF function. One AIMS,
            three certifications, one set of signed evidence.
          </p>
          <ul className="space-y-2 text-base">
            <li><strong>ISO 42001 A.4 (risk assessment)</strong> ↔ EU AI Act Article 9 ↔ NIST Govern</li>
            <li><strong>ISO 42001 A.6 (data quality)</strong> ↔ EU AI Act Article 10 ↔ NIST Map</li>
            <li><strong>ISO 42001 A.8 (transparency)</strong> ↔ EU AI Act Article 50 ↔ NIST Explain</li>
            <li><strong>ISO 42001 A.9 (human oversight)</strong> ↔ EU AI Act Article 14 ↔ NIST Manage</li>
            <li><strong>ISO 42001 A.11 (incident mgmt)</strong> ↔ EU AI Act Article 72 ↔ NIST Manage</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8">FAQ</h2>
          <div className="space-y-6">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-2xl border border-white/[0.08] p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                <summary className="font-bold cursor-pointer text-white">{f.q}</summary>
                <p className="text-white/60 text-sm mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
