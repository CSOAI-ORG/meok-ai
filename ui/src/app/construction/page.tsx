import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Construction AI | ISO 19650 + NRSWA + CHAS + CPCS",
  description: "MEOK AI compliance for construction: ISO 19650 BIM + NRSWA + CHAS Elite + CPCS crane operator + concrete pump CPA. One signed evidence pack.",
  keywords: ["MEOK construction AI", "ISO 19650 AI", "NRSWA AI", "CHAS AI", "CPCS crane AI", "construction compliance"],
  alternates: { canonical: "https://meok.ai/construction" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "ISO 19650 (BIM)", desc: "Common Data Environment (CDE), Exchange Information Requirements (EIR), BIM Execution Plan (BEP)." },
  { name: "NRSWA (street works)", desc: "Section 74 permits, reinstatement, noticing, classification. UK HAUC-aligned." },
  { name: "CHAS Elite", desc: "Contractor health and safety accreditation, environmental, financial, quality. AI for site risk analysis." },
  { name: "CPCS (plant operator)", desc: "Construction Plant Competence Scheme, LOLER, BS 7121 safe use of cranes." },
  { name: "EU AI Act", desc: "Construction AI for safety monitoring = potentially high-risk (workplace safety). Annex III section 6." },
  { name: "CDM Regs 2015", desc: "Construction (Design and Management) Regulations 2015, duty-holder identification." },
];

const MCPS = ["construction-iso-19650", "nrswa-ai", "chas-elite-prep", "crane-hire-cpcs", "concrete-pump-cpa", "eu-ai-act-compliance-mcp", "agent-audit-logger-mcp", "agent-policy-enforcement-mcp", "bias-detection-mcp"];

const FAQ = [
  { q: "What does ISO 19650 require for BIM on a project?", a: "ISO 19650 is the international standard for managing information over the whole life of a built asset using BIM. It requires a Common Data Environment (CDE) as the single source of truth, Exchange Information Requirements (EIR) that the appointing party sets, and a BIM Execution Plan (BEP) from the delivery team. MEOK's construction-iso-19650 MCP generates and version-controls the EIR/BEP and keeps the CDE information-container audit trail in the signed evidence chain." },
  { q: "Is construction AI for site safety high-risk under the EU AI Act?", a: "Potentially yes. Annex III section 6 covers AI used in workplace management, and safety-monitoring AI (PPE detection, exclusion-zone monitoring, fatigue detection) can fall into the high-risk tier where it affects worker safety or employment decisions. That triggers Article 14 human oversight, Article 10 data governance and Article 13 transparency. MEOK's eu-ai-act-compliance-mcp ships the high-risk evidence pack and bias-detection-mcp tests the vision models for fairness across workforce demographics." },
  { q: "How do CPCS, LOLER and BS 7121 fit together for crane work?", a: "CPCS (the Construction Plant Competence Scheme) certifies operator competence; LOLER 1998 requires thorough examination of lifting equipment and a documented lift plan; and BS 7121 is the code of practice for the safe use of cranes including appointed-person duties. They are layered, not alternatives. MEOK's crane-hire-cpcs and concrete-pump-cpa MCPs validate operator cards, examination dates and lift-plan completeness before plant goes to site." },
  { q: "What are the NRSWA and CDM 2015 duties on a street-works job?", a: "Under NRSWA you need the right Section 74 permits, correct noticing and classification, and compliant reinstatement to HAUC specification. CDM 2015 separately requires you to identify duty-holders (client, principal designer, principal contractor), produce the construction phase plan and the health-and-safety file. MEOK's nrswa-ai MCP tracks permits and reinstatement deadlines while chas-elite-prep underpins the contractor health-and-safety accreditation those duties rely on." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "AI compliance for construction", name: "MEOK for Construction AI", description: "MEOK AI compliance for construction: ISO 19650 BIM + NRSWA + CHAS Elite + CPCS crane operator + concrete pump CPA. One signed evidence pack.", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "199", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Construction AI", item: "https://meok.ai/construction" }] };

export default function ConstructionPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Construction AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            ISO 19650 + NRSWA + CHAS + CPCS. One substrate.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Construction AI runs on BIM + permits + qualifications + safety. ISO 19650, NRSWA, CHAS, CPCS, LOLER. MEOK ships it all as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the construction bundle</h2>
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
            {FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
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
