import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Compliance Software — Per-Article Evidence (2026 Guide)",
  description:
    "EU AI Act compliance software that produces cryptographically signed per-Article evidence. Cover Articles 4, 6, 9, 10, 14, 26(9), 43, 50, and 72. From £149/mo.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-compliance-software" },
  openGraph: {
    title: "EU AI Act Compliance Software — Per-Article Signed Evidence",
    description: "Cryptographic attestations for every EU AI Act Article, not a dashboard. From £149/mo.",
    type: "article",
    url: "https://meok.ai/eu-ai-act-compliance-software",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const RED = "#dc2626";

const FAQ = [
  {
    q: "What is the best software for EU AI Act compliance?",
    a: "MEOK AI Labs is the only platform that issues cryptographically signed (HMAC-SHA256 + Ed25519) compliance attestations for every EU AI Act Article that an auditor can verify by URL. It covers all 9 in-scope Articles (4, 6, 9, 10, 14, 26(9), 43, 50, 72) and ships with a per-Article evidence package. From £149/mo. Free 7-day trial for Bias Detection (Article 10) and the Article 50 Kit.",
  },
  {
    q: "How much does EU AI Act compliance software cost?",
    a: "MEOK pricing: free 7-day trial for Bias Detection, then £299/mo; Pro tier £149/mo covers Articles 4 + 14 + 26(9) + 72; Audit-Prep Bundle £4,950 one-time for full Article 9 + 43 + conformity assessment prep. Compared to Vanta (~$10k/yr for AI modules) or Drata ($8k-15k/yr), MEOK is 60-80% cheaper and produces signed evidence, not dashboards.",
  },
  {
    q: "When does the EU AI Act come into force?",
    a: "The EU AI Act entered into force on 1 August 2024. Article 50 transparency + watermarking obligations apply from 2 August 2026 (53 days away from 12 June 2026). High-risk Annex III obligations were originally due 2 August 2026 but were DELAYED to 2 December 2027 by the Digital Omnibus (EU Parliament approved 569-45 on 23 March 2026). Pre-existing AI systems have a 2-year transition to 2 August 2027. The Digital Omnibus only delayed high-risk; Article 50 dates are unchanged.",
  },
  {
    q: "Do I need EU AI Act compliance if I'm not in the EU?",
    a: "Yes, if (a) you place AI systems on the EU market, (b) the output of your AI is used in the EU, (c) users of your AI system are in the EU, or (d) you're a provider/deployer with EU-established subsidiaries. The Act has explicit extraterritorial reach (Article 2). UK and US companies with EU customers or EU users are in scope. The penalties are up to €35M or 7% of global turnover for prohibited-practice violations.",
  },
  {
    q: "What's the difference between a 'compliance dashboard' and signed evidence?",
    a: "A compliance dashboard (Vanta, Drata, Sprinto, OneTrust) shows you what you claim to do. It produces internal reports. A signed evidence attestation (MEOK, proofof.ai) is a tamper-evident cryptographic document that an external auditor, regulator, or customer can verify independently without access to your account. Signed evidence is what the EU AI Act's conformity assessment (Article 43) and post-market monitoring (Article 72) actually require.",
  },
  {
    q: "Do I need a Notified Body for EU AI Act?",
    a: "For most high-risk AI systems (Annex III), yes — you'll need a Notified Body to issue the conformity assessment certificate before CE marking. For limited-risk AI (Article 50 transparency), no Notified Body is required but you must self-assess and sign your own attestation. MEOK helps you produce the technical documentation, risk management system, and post-market monitoring evidence the Notified Body will review.",
  },
  {
    q: "What about the Digital Omnibus delay?",
    a: "On 23 March 2026, the EU Parliament voted 569-45 in favour of the Digital Omnibus package, which DELAYS the high-risk Annex III obligations by ~17 months (from 2 August 2026 to 2 December 2027). It also delays product-embedded Annex I obligations to 2 August 2028. However, Article 50 transparency + watermarking obligations remain at 2 August 2026. The delay gives you breathing room on the hardest parts but the easy-to-implement transparency layer is still day-1.",
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

const ARTICLES = [
  { n: 4, title: "AI literacy", desc: "Staff training on AI capabilities, limitations, risks, ethics.", deadline: "2 Feb 2025", severity: "Low" },
  { n: 6, title: "High-risk classification", desc: "Determine if your system falls into Annex III categories.", deadline: "2 Dec 2027 (Annex III delay)", severity: "Critical" },
  { n: 9, title: "Risk management system", desc: "Continuous identification + mitigation of risks across the lifecycle.", deadline: "2 Dec 2027 (Annex III delay)", severity: "Critical" },
  { n: 10, title: "Data governance + bias", desc: "Training data quality, bias detection, representativeness checks.", deadline: "2 Dec 2027 (Annex III delay)", severity: "Critical" },
  { n: 14, title: "Human oversight", desc: "Effective human review, intervention ability, kill switch.", deadline: "2 Dec 2027 (Annex III delay)", severity: "High" },
  { n: "26(9)", title: "FRIA — Fundamental Rights Impact", desc: "Impact assessment for AI used in public services + essential services.", deadline: "2 Dec 2027 (Annex III delay)", severity: "High" },
  { n: 43, title: "Conformity assessment", desc: "Third-party (Notified Body) or self-assessment before market placement.", deadline: "2 Dec 2027 (Annex III delay)", severity: "Critical" },
  { n: 50, title: "Transparency + watermarking", desc: "Disclose AI, mark synthetic content, allow deepfake disclosure.", deadline: "2 Aug 2026 (UNCHANGED)", severity: "Critical" },
  { n: 72, title: "Post-market monitoring", desc: "Continuous monitoring + reporting of serious incidents to authorities.", deadline: "Ongoing", severity: "High" },
];

export default function Page() {
  return (
    <article className="min-h-screen text-white" style={{ backgroundColor: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
          EU AI Act · 2026 Compliance Guide
        </p>
        <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-4xl mx-auto">
          EU AI Act compliance, with evidence your auditor can verify
        </h1>
        <p className="text-white/60 text-lg max-w-3xl mx-auto">
          Cryptographically signed per-Article attestations for every obligation
          under Reg (EU) 2024/1689. Not a dashboard. Tamper-evident signed
          certificates that travel with your AI system.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/article-50-kit"
            className="px-8 py-4 rounded-xl font-bold text-black"
            style={{ backgroundColor: GOLD }}
          >
            Get the Article 50 Kit (£499)
          </Link>
          <a
            href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t"
            className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:border-white/40"
          >
            Pro tier — £199/mo
          </a>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-8">The 9 in-scope Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {ARTICLES.map((a) => (
              <div
                key={a.n}
                className="rounded-2xl border border-white/[0.08] p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-mono text-sm" style={{ color: GOLD }}>
                    Article {a.n}
                  </p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full uppercase"
                    style={{
                      backgroundColor:
                        a.severity === "Critical"
                          ? "rgba(220,38,38,0.2)"
                          : a.severity === "High"
                            ? "rgba(201,168,76,0.2)"
                            : "rgba(255,255,255,0.1)",
                      color: a.severity === "Critical" ? "#fca5a5" : a.severity === "High" ? GOLD : "#fff",
                    }}
                  >
                    {a.severity}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{a.title}</h3>
                <p className="text-white/60 text-sm mb-2">{a.desc}</p>
                <p className="text-white/40 text-xs">Deadline: {a.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: BG, color: NAVY }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">How MEOK produces evidence</h2>
          <ol className="space-y-6 text-lg">
            <li>
              <strong>1. Run a 90-second scorecard.</strong> Free at{" "}
              <Link href="/scorecard" className="underline">/scorecard</Link>. Identifies which
              Articles apply to your AI system.
            </li>
            <li>
              <strong>2. Sign per-Article attestations.</strong> Each Article gets its own
              HMAC-SHA256 + Ed25519-signed certificate with your data, timestamp, and
              cryptographic chain.
            </li>
            <li>
              <strong>3. Share the verify URL.</strong> Your auditor, customer, or regulator
              pastes the cert_id at <Link href="/verify" className="underline">/verify</Link>{" "}
              and sees the tamper-evident proof. No dashboard access required.
            </li>
            <li>
              <strong>4. Post-market monitor.</strong> Article 72 requires ongoing
              monitoring. MEOK re-signs and re-stamps on every material change.
            </li>
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

      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto rounded-2xl p-8 border" style={{ borderColor: GOLD, backgroundColor: "rgba(201,168,76,0.05)" }}>
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            53 days to 2 Aug 2026
          </p>
          <h3 className="text-3xl font-black mb-4">Article 50 is day-1</h3>
          <p className="text-white/60 mb-6">
            The Digital Omnibus delay only covers high-risk Annex III. Article 50
            transparency + watermarking is unchanged at 2 August 2026.
          </p>
          <Link
            href="/article-50-kit"
            className="inline-block px-8 py-4 rounded-xl font-bold text-black"
            style={{ backgroundColor: GOLD }}
          >
            Article 50 Kit — £499
          </Link>
        </div>
      </section>
    </article>
  );
}
