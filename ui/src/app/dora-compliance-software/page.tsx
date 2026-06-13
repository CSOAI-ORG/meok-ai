import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DORA Compliance Software — Reg (EU) 2022/2554 (2026)",
  description:
    "DORA compliance software for financial entities. ICT risk management, incident reporting, third-party oversight, threat-led penetration testing. Reg (EU) 2022/2554. From £149/mo.",
  alternates: { canonical: "https://meok.ai/dora-compliance-software" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const RED = "#dc2626";

const FAQ = [
  {
    q: "What is DORA?",
    a: "DORA (Digital Operational Resilience Act) is EU Regulation 2022/2554. It applies to financial entities — banks, insurance companies, investment firms, payment institutions, crypto-asset service providers, and their critical ICT third-party service providers (CTPPs). It requires: ICT risk management (Article 5-16), ICT-related incident reporting (Article 17-23), digital operational resilience testing (Article 24-27), ICT third-party risk management (Article 28-44), and information sharing arrangements. DORA has been in force since 17 January 2025, with Belgium's hard cliff passing 18 April 2026.",
  },
  {
    q: "Who does DORA apply to?",
    a: "20 categories of financial entities per Article 2: credit institutions, payment institutions, e-money institutions, investment firms, insurance/reinsurance undertakings, insurance intermediaries, fund management companies, AIFMs, UCITS, CCPs, CSDs, trading venues, securitisation repositories, credit rating agencies, statutory auditors, Crowdfunding Service Providers, Securitisation Repositories, and ICT third-party service providers designated as critical. MEOK's scope matrix maps your entity type to the relevant Articles automatically.",
  },
  {
    q: "What are the DORA incident reporting requirements?",
    a: "Financial entities must report major ICT-related incidents to their competent authority within strict timelines: initial notification within 4 hours of classification, intermediate report within 72 hours, final report within 1 month. For significant cyber threats, voluntary early warning is encouraged. Article 19 specifies the criteria for 'major' (number of clients affected, duration, geographic spread, data losses, critical services impacted, economic impact). MEOK's incident report template aligns to these criteria and signs each report.",
  },
  {
    q: "What is TLPT (Threat-Led Penetration Testing)?",
    a: "DORA Article 26-27 mandates threat-led penetration testing for designated significant financial entities at least every 3 years. The European Supervisory Authorities (ESAs: EBA, ESMA, EIOPA) published the Regulatory Technical Standard (RTS) on TLPT in December 2024. TLPT is more rigorous than standard pen-testing — it's a controlled, intelligence-led red-team exercise using real threat intelligence. MEOK ships a TLPT-readiness checklist + signed per-control evidence for the RTS requirements.",
  },
  {
    q: "What is a CTPP designation?",
    a: "Critical ICT Third-Party Service Provider. The ESAs can designate an ICT service provider as 'critical' to the financial system (Article 33). Once designated, the CTPP is subject to direct ESA oversight: information requests, recommendations, stress testing coordination. As of 2026, the major cloud providers (AWS, Microsoft Azure, Google Cloud, IBM Cloud) and some SaaS providers are being assessed. MEOK signs evidence that helps both the financial entity and the prospective CTPP demonstrate compliance with the oversight framework.",
  },
  {
    q: "How does DORA relate to NIS2?",
    a: "DORA is a sector-specific regulation for financial services. NIS2 (Network and Information Security Directive 2) is a horizontal cybersecurity directive covering essential and important entities across all sectors (energy, transport, banking, health, digital infrastructure, public administration, etc.). For financial entities, DORA lex specialis prevails — you follow DORA. For non-financial entities in scope of NIS2, you follow NIS2. Both are signed-evidence-friendly and MEOK handles both from a single AIMS.",
  },
  {
    q: "What are the DORA penalties?",
    a: "National competent authorities can impose administrative penalties up to 1% of average daily worldwide turnover per day during the period of non-compliance, with a maximum of 5 months of such penalties. For ICT third-party service providers designated as critical, ESAs can impose fines up to €5M or 1% of average daily worldwide turnover (whichever is higher). For individuals, fines up to €1M. Criminal sanctions depend on national law.",
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

const PILLARS = [
  { num: "I", title: "ICT Risk Management", articles: "Art 5-16", desc: "Governance, identification, protection, detection, response, recovery, learning." },
  { num: "II", title: "Incident Reporting", articles: "Art 17-23", desc: "Classification, 4hr notification, 72hr intermediate, 1-month final." },
  { num: "III", title: "Resilience Testing", articles: "Art 24-27", desc: "Annual testing + TLPT every 3 years for significant entities." },
  { num: "IV", title: "Third-Party Risk", articles: "Art 28-44", desc: "Register of contracts, exit strategies, sub-outsourcing, CTPP oversight." },
  { num: "V", title: "Information Sharing", articles: "Art 45", desc: "Voluntary cyber threat intel sharing between financial entities." },
];

export default function Page() {
  return (
    <article className="min-h-screen text-white" style={{ backgroundColor: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
          DORA · Reg (EU) 2022/2554
        </p>
        <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-4xl mx-auto">
          DORA compliance, signed and auditor-ready
        </h1>
        <p className="text-white/60 text-lg max-w-3xl mx-auto">
          Digital Operational Resilience Act software for financial entities.
          5 pillars. 44 Articles. Cryptographically signed per-Article evidence.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?intent=enterprise"
            className="px-8 py-4 rounded-xl font-bold text-black"
            style={{ backgroundColor: GOLD }}
          >
            Book a DORA readiness review
          </Link>
          <a
            href="https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-bold text-white border border-white/30 hover:border-white transition-colors"
          >
            Enterprise — £1,499/mo
          </a>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-8">The 5 DORA pillars</h2>
          <div className="space-y-3">
            {PILLARS.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl border border-white/[0.08] p-5 flex gap-6 items-start"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="text-4xl font-black flex-shrink-0 w-16 text-center"
                  style={{ color: GOLD }}
                >
                  {p.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{p.articles}</p>
                  <p className="text-white/60 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
