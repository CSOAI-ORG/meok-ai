import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for SaaS AI | EU AI Act + SOC 2 + ISO 42001",
  description: "MEOK AI compliance for SaaS: EU AI Act classification + SOC 2 (AI overlay) + ISO 42001 + GDPR + NIS2 (if essential entity).",
  keywords: ["MEOK SaaS AI", "SOC 2 AI", "ISO 42001 SaaS", "EU AI Act SaaS", "SaaS compliance"],
  alternates: { canonical: "https://meok.ai/saas" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "EU AI Act", desc: "Classification: limited (chatbots, deepfake disclosure), high-risk (employment, credit, education), or general-purpose (foundation models)." },
  { name: "SOC 2 (AI overlay)", desc: "CC1-CC9 trust service criteria + AI-specific control additions (training data governance, model card)." },
  { name: "ISO 42001 (AIMS)", desc: "AI Management System, Cl 6-10 controls, continual improvement, leadership accountability." },
  { name: "GDPR", desc: "Art 5-22, DPIA for high-risk processing, Art 22 right not to be subject to automated decisions." },
  { name: "NIS2 (essential/important entities)", desc: "If SaaS serves EU critical infrastructure (energy, transport, health, digital) - full NIS2 stack." },
  { name: "UK AI Bill (sectoral)", desc: "If serving regulated UK sectors (health, finance, legal, education) - sectoral regulator mapping." },
];

const MCPS = ["eu-ai-act-compliance-mcp", "soc2-compliance-ai-mcp", "iso-42001-ai-mcp", "gdpr-compliance-ai-mcp", "nis2-compliance-mcp", "agent-audit-logger-mcp", "agent-policy-enforcement-mcp", "agent-data-residency-mcp", "bias-detection-mcp"];

const FAQ = [
  { q: "Is my SaaS AI high-risk under the EU AI Act?", a: "It depends on use case, not on being SaaS. Limited-risk obligations (transparency, deepfake/chatbot disclosure under Article 50) apply to most generative features. High-risk applies if your AI is used in employment, credit scoring, education or other Annex III areas. General-purpose / foundation models carry their own Chapter V obligations. MEOK classifies each feature and ships the matching evidence pack." },
  { q: "How does SOC 2 change when AI is in scope?", a: "The Trust Service Criteria (CC1-CC9) still apply, but an AI overlay adds controls auditors now expect: training-data governance and provenance, model cards, model-change management, and monitoring for drift and bias. MEOK maps these AI-specific controls onto your existing SOC 2 control set so a single evidence chain covers both." },
  { q: "What does ISO 42001 require beyond SOC 2?", a: "ISO/IEC 42001 is a full AI Management System (AIMS). Clauses 6-10 require leadership accountability, AI risk and impact assessment, defined objectives, operational controls and continual improvement, all kept under a documented management-system loop. It is the certifiable AI-governance backbone that SOC 2 and the EU AI Act both lean on, and MEOK runs it as the substrate under both." },
  { q: "Does NIS2 apply to my SaaS?", a: "Only if you are an essential or important entity, typically SaaS serving EU critical infrastructure such as energy, transport, health or digital infrastructure, or qualifying as a digital service provider. If in scope, NIS2 adds cyber risk-management measures, supply-chain security and 24-hour incident notification. MEOK's nis2-compliance-mcp determines scope and ships the corresponding stack." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "SaaS AI Compliance", name: "MEOK for SaaS AI", description: "MEOK AI compliance for SaaS: EU AI Act classification + SOC 2 (AI overlay) + ISO 42001 + GDPR + NIS2 (if essential entity).", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "199", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "SaaS AI", item: "https://meok.ai/saas" }] };

export default function SaasPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK SaaS AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            EU AI Act + SOC 2 + ISO 42001. One substrate for every SaaS.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Generic SaaS AI: EU AI Act applicability (limited, high-risk, or general-purpose), SOC 2 with AI overlay, ISO 42001 AIMS. MEOK ships it all as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the SaaS bundle</h2>
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
            199 GBP per month. Subscription includes monthly attestations and HMAC-signed evidence chain.
          </p>
          <a href="https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T" target="_blank" rel="noopener noreferrer"
             style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            Start Pro →
          </a>
        </section>
      </div>
    </main>
  );
}
