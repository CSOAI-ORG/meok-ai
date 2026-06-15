import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Charity AI | UK Charity Commission + GDPR + EU AI Act",
  description: "MEOK AI compliance for charities: UK Charity Commission reporting + GDPR Art 9 + EU AI Act + donor privacy + safeguarding.",
  keywords: ["MEOK charity AI", "UK Charity Commission AI", "GDPR Art 9 charity", "EU AI Act charity", "donor privacy"],
  alternates: { canonical: "https://meok.ai/charity" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "UK Charity Commission", desc: "Annual return, trustee report, public benefit reporting. AI for narrative compliance." },
  { name: "GDPR Art 9 (special category)", desc: "Health, religion, political opinions, trade union membership, sexual orientation. Common in charity sector." },
  { name: "Safeguarding", desc: "Children Act 1989/2004, Care Act 2014. Mandatory reporting for vulnerable beneficiaries." },
  { name: "Donor Privacy (FRS 102 / Charities SORP)", desc: "Donor lists, gift aid records, 6-year retention. AI for donor segmentation requires DPIA." },
  { name: "EU AI Act", desc: "AI for beneficiary selection = potentially high-risk (Annex III section 5 social services). Full 9-Article stack." },
  { name: "Fundraising Regulator (UK)", desc: "Code of Fundraising Practice, consent, vulnerable persons. AI for donor targeting must respect code." },
];

const MCPS = ["gdpr-compliance-ai-mcp", "eu-ai-act-compliance-mcp", "agent-audit-logger-mcp", "agent-data-residency-mcp", "agent-policy-enforcement-mcp", "bias-detection-mcp", "agent-handoff-certified-mcp", "agent-prompt-injection-firewall-mcp", "agent-rate-limiter-mcp"];

const FAQ = [
  { q: "Is AI for beneficiary selection high-risk under the EU AI Act?", a: "Often yes. Annex III section 5 captures AI used to evaluate eligibility for, or to allocate, essential public assistance and social services. A charity using AI to triage or rank beneficiaries for support is squarely in that category and must meet the full high-risk stack — risk management, data governance, human oversight (Article 14), transparency (Article 13) and logging. MEOK's eu-ai-act-compliance-mcp ships the 9-Article evidence pack and bias-detection-mcp covers the fairness testing." },
  { q: "How does GDPR Article 9 apply to charities?", a: "Charities routinely process special-category data — health, religion, political opinion, trade-union membership, sexual orientation — for example a health charity or a faith-based organisation. Article 9 prohibits processing unless a specific condition applies (explicit consent, not-for-profit-body processing of members, substantial public interest, etc.). You need to document the Article 9 condition alongside an Article 6 lawful basis. The gdpr-compliance-ai-mcp maintains that dual-basis register automatically." },
  { q: "What safeguarding duties bite when AI touches vulnerable beneficiaries?", a: "Where beneficiaries are children or adults at risk, the Children Act 1989/2004 and Care Act 2014 impose safeguarding and mandatory-reporting duties. Any AI that profiles, screens or makes recommendations about vulnerable people must keep a human in the loop and an auditable decision trail so safeguarding leads can review and override. MEOK's agent-policy-enforcement-mcp and agent-audit-logger-mcp provide the override controls and the signed log." },
  { q: "Can we use AI for donor targeting under the Fundraising Regulator code?", a: "Yes, but the Code of Fundraising Practice requires lawful, fair processing, valid consent for marketing, and extra care with people in vulnerable circumstances. AI donor segmentation that profiles individuals needs a DPIA and must honour the Charities SORP / FRS 102 record-keeping (donor lists, gift-aid records, 6-year retention). MEOK runs the DPIA template and bias-detection-mcp checks that targeting models do not unfairly exclude or pressure vulnerable donors." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "AI compliance for charities", name: "MEOK for Charity AI", description: "MEOK AI compliance for charities: UK Charity Commission reporting + GDPR Art 9 + EU AI Act + donor privacy + safeguarding.", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "199", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Charity AI", item: "https://meok.ai/charity" }] };

export default function CharityPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Charity AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            UK Charity Commission + GDPR + EU AI Act. One substrate.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Charity AI runs on Charity Commission reporting, GDPR Art 9 special category, and EU AI Act when processing donor or beneficiary data. MEOK ships it all as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the charity bundle</h2>
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
