import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Waste Management AI | Waste carrier + Duty of care + ISO 14001",
  description: "MEOK AI compliance for waste management: waste carrier licence + duty of care + ISO 14001 + permit tracking + audit trail.",
  keywords: ["MEOK waste AI", "waste carrier licence", "duty of care waste", "ISO 14001 AI", "waste compliance"],
  alternates: { canonical: "https://meok.ai/waste-mgmt" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "Waste Carrier Licence (UK)", desc: "Upper-tier registration with EA/SEPA/NRW/NIES, 3-year renewal, criminal record check." },
  { name: "Duty of Care (Section 34 EPA 1990)", desc: "Waste transfer notes, description, EWC code, carrier details, 2-year retention." },
  { name: "ISO 14001 (EMS)", desc: "Environmental Management System, legal compliance register, continual improvement." },
  { name: "Hazardous Waste (England Regs 2005)", desc: "Consignment notes, pre-notification to EA, quarterly returns." },
  { name: "EU Waste Shipment Regs", desc: "Trans-frontier shipment of waste, prior informed consent, financial guarantees." },
  { name: "EU AI Act", desc: "AI for route optimisation = low-risk. AI for hazardous classification = potentially high-risk." },
];

const MCPS = ["skip-hire-ai", "waste-mgmt-compliance-mcp", "agent-audit-logger-mcp", "agent-policy-enforcement-mcp", "eu-ai-act-compliance-mcp", "iso-14001-ai-mcp", "agent-data-residency-mcp", "agent-handoff-certified-mcp", "bias-detection-mcp"];

const FAQ = [
  { q: "Do I need a waste carrier licence to move waste?", a: "Yes. Anyone who transports waste in the course of business must register with the relevant regulator (EA in England, SEPA in Scotland, NRW in Wales, NIEA in Northern Ireland). Carriers of their own or controlled/hazardous waste need upper-tier registration, which is renewable every 3 years and subject to a criminal-record check. MEOK tracks registration tier and renewal dates so a licence never lapses mid-contract." },
  { q: "What does Duty of Care under Section 34 EPA 1990 require?", a: "Every transfer of waste must be accompanied by a waste transfer note containing an accurate description, the European Waste Catalogue (EWC) code, and the carrier's registration details. Transfer notes must be retained for 2 years (3 years for hazardous consignment notes). MEOK generates compliant notes and keeps the retention clock and audit trail automatically." },
  { q: "How does ISO 14001 fit with waste compliance?", a: "ISO 14001 is an Environmental Management System. Its legal-compliance register must capture every applicable obligation, including carrier licences, duty of care, hazardous-waste and shipment rules, and demonstrate continual improvement against them. MEOK keeps that register live and links each legal duty to the evidence that proves it is being met." },
  { q: "Is AI in waste management high-risk under the EU AI Act?", a: "It depends on the function. AI used purely for route optimisation or logistics is low-risk. AI that classifies hazardous waste, or that feeds environmental or safety decisions, can be drawn toward high-risk treatment because errors carry environmental and public-safety consequences. MEOK classifies each AI feature and ships the matching EU AI Act evidence so you only carry the obligations you actually trigger." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "Waste Management AI Compliance", name: "MEOK for Waste Management AI", description: "MEOK AI compliance for waste management: waste carrier licence + duty of care + ISO 14001 + permit tracking + audit trail.", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "199", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Waste Management AI", item: "https://meok.ai/waste-mgmt" }] };

export default function WasteMgmtPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Waste Management AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            Waste carrier licence + Duty of care + ISO 14001. One substrate.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Waste management AI runs on skip permits, waste-carrier licences, duty-of-care notes, and ISO 14001 environmental management. MEOK ships it all as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the waste management bundle</h2>
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
