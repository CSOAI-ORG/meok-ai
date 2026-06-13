import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR AI Compliance Tool — DPIA-to-FRIA Bridge (2026)",
  description:
    "GDPR AI compliance tool with a built-in DPIA → FRIA bridge. EU AI Act Article 26(9) FRIA, EDPB harmonised template (14 Apr 2026), and UK GDPR Article 22. From £149/mo.",
  alternates: { canonical: "https://meok.ai/gdpr-ai-compliance-tool" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  {
    q: "How do I make my AI GDPR-compliant?",
    a: "GDPR compliance for AI requires five things: (1) lawful basis (Article 6) for the personal data used in training/inference, (2) DPIA (Article 35) for high-risk processing, (3) FRIA (EU AI Act Article 26(9)) for AI in public/essential services, (4) Article 22 safeguards for automated decision-making, and (5) cross-border data transfer mechanisms (SCCs, adequacy decisions, BCRs). MEOK signs cryptographic attestations for each, with verify URLs for your DPO.",
  },
  {
    q: "Do I need a DPIA for AI?",
    a: "Yes, if your AI system processes personal data AND meets the Article 35 high-risk criteria (profiling, large-scale processing, sensitive data, public-facing services, children, biometric ID, etc.). Most production AI systems with EU users trigger DPIA. The EDPB and most national DPAs treat all LLM-based customer-facing systems as triggering DPIA. MEOK's DPIA generator produces an EDPB-aligned template that satisfies ICO, CNIL, BfDI, and AEPD requirements.",
  },
  {
    q: "What is the DPIA → FRIA bridge?",
    a: "The EU AI Act Article 26(9) FRIA (Fundamental Rights Impact Assessment) overlaps significantly with the GDPR Article 35 DPIA. The EDPB and the European Commission published a harmonised joint FRIA/DPIA template on 14 April 2026 (template at https://ec.europa.eu/newsroom...). MEOK ships the harmonised template and signs both assessments with a single cert_id so you can satisfy both regulators with one signed document.",
  },
  {
    q: "Is automated decision-making (Article 22) allowed?",
    a: "Article 22 GDPR gives individuals the right not to be subject to a decision based solely on automated processing that produces legal or similarly significant effects. There are three exceptions: (1) contractual necessity, (2) explicit consent, (3) Member State law. Even with an exception, you must implement 'suitable measures to safeguard the data subject's rights and freedoms'. MEOK Article 14 (human oversight) evidence package covers this for AI systems.",
  },
  {
    q: "What about UK GDPR + AI?",
    a: "UK GDPR (the retained EU GDPR) applies in the UK and is enforced by the ICO. The UK AI Bill 2026 (expected Royal Assent Q3 2026) adds AI-specific enforcement powers to the ICO. UK GDPR Article 22 mirrors EU GDPR. For UK-only operations, you can use the ICO's DPIA template; for cross-border UK ↔ EU operations, use the EDPB harmonised template. MEOK generates both and tags the cert_id with jurisdiction.",
  },
  {
    q: "How is MEOK different from a generic privacy management tool?",
    a: "OneTrust, Securiti, and TrustArc are privacy management platforms — they track processing activities, manage DSRs, generate ROPA, and store consent. MEOK is purpose-built for AI-specific obligations: signed per-Article attestations, DPIA → FRIA bridge, Article 22 safeguards evidence, and verifiable human-oversight logs. If your AI stack is your compliance risk, MEOK. If your CRM/marketing stack is your risk, use OneTrust.",
  },
  {
    q: "What are the GDPR fines for AI?",
    a: "Up to €20M or 4% of global annual turnover, whichever is higher (Article 83(5)). For AI specifically, the EU AI Act adds separate fines up to €35M or 7% of global turnover. The fines stack — a single non-compliant AI system could trigger both. The UK ICO's max is £17.5M or 4% of global turnover.",
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

const STEPS = [
  { title: "Map your AI processing activities", desc: "ROPA entry per AI system, with lawful basis + cross-border transfer mechanism." },
  { title: "Run the DPIA", desc: "Article 35 template aligned to ICO + CNIL + EDPB. Auto-populated from your ROPA." },
  { title: "Run the FRIA (if required)", desc: "EU AI Act Article 26(9) using the EDPB harmonised template (14 Apr 2026)." },
  { title: "Sign the joint attestation", desc: "Single cert_id that satisfies both the DPIA and the FRIA. Auditor-verifiable by URL." },
  { title: "Maintain Article 22 evidence", desc: "Human-oversight logs, intervention ability, and re-review on model changes." },
];

export default function Page() {
  return (
    <article className="min-h-screen text-white" style={{ backgroundColor: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
          GDPR · AI · 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-4xl mx-auto">
          GDPR + EU AI Act compliance, signed
        </h1>
        <p className="text-white/60 text-lg max-w-3xl mx-auto">
          DPIA-to-FRIA bridge. EDPB harmonised template. Cryptographically signed
          per-system attestations your DPO can hand to a regulator.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/start"
            className="px-8 py-4 rounded-xl font-bold text-black"
            style={{ backgroundColor: GOLD }}
          >
            Run a free 90-sec GDPR-AI scorecard
          </Link>
          <a
            href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t?prefilled_promo_code=LAUNCH50"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-bold text-white border border-white/30 hover:border-white transition-colors"
          >
            Get Pro — £199/mo (50% off)
          </a>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: BG, color: NAVY }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">The 5-step GDPR-for-AI flow</h2>
          <ol className="space-y-6 text-lg">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="text-2xl font-black flex-shrink-0" style={{ color: GOLD }}>
                  {i + 1}.
                </span>
                <div>
                  <strong>{s.title}.</strong> {s.desc}
                </div>
              </li>
            ))}
          </ol>
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
