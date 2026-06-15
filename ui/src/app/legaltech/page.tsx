import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Legal AI | EU AI Act + GDPR + UK AI Bill + privilege",
  description: "MEOK AI compliance for legal tech: EU AI Act (Annex III section 6 high-risk) + GDPR + UK AI Bill + Legal Professional Privilege + bias detection + HMAC-signed audit.",
  keywords: ["MEOK legal AI", "EU AI Act legal", "legal tech AI compliance", "GDPR legal", "UK AI Bill legal"],
  alternates: { canonical: "https://meok.ai/legaltech" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "EU AI Act Annex III section 6", desc: "Access to essential public services + law enforcement = high-risk. 9-Article stack required." },
  { name: "GDPR (lawful basis)", desc: "Art 6 lawful basis for AI processing of personal data. Art 22 right not to be subject to automated decisions." },
  { name: "Legal Professional Privilege", desc: "LPP-protected communications must not flow through AI systems without explicit consent. MEOK enforces LPP boundaries." },
  { name: "UK AI Bill (sectoral)", desc: "Legal Services Regulators Network (LSRN) + SRA + Law Society of Scotland + BSB joint guidance on AI in legal services." },
  { name: "Bias Detection (Art 10)", desc: "Demographic parity + equalized odds for AI used in judicial decisions, sentencing, bail, asylum. ISO 42005 aligned." },
  { name: "EU AI Act Art 6(3)", desc: "Standalone high-risk for AI used to assist judicial authorities. Strictest conformity assessment class." },
];

const MCPS = ["eu-ai-act-compliance-mcp", "gdpr-compliance-ai-mcp", "bias-detection-mcp", "agent-data-residency-mcp", "agent-audit-logger-mcp", "agent-policy-enforcement-mcp", "agent-handoff-certified-mcp", "agent-rate-limiter-mcp", "uk-ai-bill-compliance-mcp"];

const FAQ = [
  { q: "Is legal AI high-risk under the EU AI Act?", a: "Yes, in most judicial and access-to-justice contexts. Annex III section 6 / Article 6(3) capture AI used to assist a judicial authority in researching and interpreting facts and the law, plus AI affecting access to essential public services and law enforcement. That triggers the full 9-Article high-risk stack: risk management (Art 9), data governance (Art 10), technical documentation (Art 11), record-keeping (Art 12), transparency (Art 13), human oversight (Art 14), accuracy/robustness (Art 15), QMS (Art 17) and conformity assessment (Art 43)." },
  { q: "How does Legal Professional Privilege constrain legal AI?", a: "LPP-protected communications must not flow through AI systems without explicit, informed client consent. MEOK enforces LPP boundaries at the data layer: privileged material is fenced from training, retrieval and logging pipelines, and the audit trail records that the boundary held. Breaking privilege is not just a compliance failure, it can be a regulatory and negligence liability for the firm." },
  { q: "What does GDPR add on top of the AI Act for legal tech?", a: "GDPR Article 6 requires a lawful basis for any AI processing of personal data, and Article 22 gives individuals the right not to be subject to solely-automated decisions producing legal or similarly significant effects. In sentencing, bail, asylum and similar contexts that means human-in-the-loop review must be substantive, not a rubber stamp. A DPIA is expected wherever the processing is high-risk." },
  { q: "Why does bias detection matter for legal AI?", a: "AI used in judicial decisions, sentencing, bail and asylum can produce disparate impact across protected groups. MEOK ships demographic-parity and equalized-odds testing aligned to ISO/IEC 42005, satisfying EU AI Act Article 10 data-governance and bias-examination duties and giving procurement teams signed evidence that ranking and scoring outputs were fairness-tested." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "Legal Tech AI Compliance", name: "MEOK for Legal AI", description: "MEOK AI compliance for legal tech: EU AI Act (Annex III section 6 high-risk) + GDPR + UK AI Bill + Legal Professional Privilege + bias detection + HMAC-signed audit.", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "1499", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Legal AI", item: "https://meok.ai/legaltech" }] };

export default function LegalPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Legal AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            AI Act high-risk + LPP + GDPR. One signed pack.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Legal AI is the highest-stakes high-risk under EU AI Act (Annex III section 6 covers judicial assistance, access to public services, law enforcement). Plus LPP (Legal Professional Privilege) is a hard boundary. MEOK enforces both.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Frameworks</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {FRAMEWORKS.map((f, i) => (
              <li key={i} style={{ background: "white", borderRadius: 12, padding: 20, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: 16, fontWeight: 900, color: GOLD, margin: "0 0 6px" }}>{f.name}</h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the legal bundle</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8 }}>
            {MCPS.map((m, i) => (
              <li key={i} style={{ background: "white", padding: "10px 12px", borderRadius: 8, fontSize: 12, fontFamily: "monospace", border: `1px solid ${NAVY}0d` }}>
                pip install {m}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f, i) => (
              <details key={i} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Get the bundle</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, lineHeight: 1.6, marginBottom: 16 }}>
            1499 GBP per month. Subscription includes monthly attestations and HMAC-signed evidence chain.
          </p>
          <a href="https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U" target="_blank" rel="noopener noreferrer"
             style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            Start Enterprise →
          </a>
        </section>
      </div>
    </main>
  );
}
