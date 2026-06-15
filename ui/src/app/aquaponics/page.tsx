import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Aquaponics AI | DEFRA + FSA + ISO 22000 + HACCP",
  description: "MEOK AI compliance for aquaponics: DEFRA APB + FSA + ISO 22000 + HACCP + Animal Welfare Act 2006 + Aquatic Animal Health Regs 2021.",
  keywords: ["MEOK aquaponics AI", "DEFRA aquaponics", "FSA aquaponics", "ISO 22000 aquaponics", "HACCP aquaponics"],
  alternates: { canonical: "https://meok.ai/aquaponics" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "DEFRA APB (Aquatic Pathogen Biosecurity)", desc: "Notifiable disease list, KHV/SVC/IHN/VHS, biosecurity measures. AI for early-warning detection." },
  { name: "FSA Food Safety", desc: "HACCP plans, Natasha Law PPDS, food contact materials. AI for water quality and label compliance." },
  { name: "ISO 22000 (Food Safety Management)", desc: "FSMS, PRPs, CCPs, interactive communication. AI for automated CCP monitoring." },
  { name: "Animal Welfare Act 2006", desc: "Duty of care to animals, suitable environment, diet, behaviour. AI for fish welfare scoring." },
  { name: "Aquatic Animal Health (England) Regs 2021", desc: "Registration, movement records, health certificates, disease control. AI for movement compliance." },
  { name: "GDPR + UK GDPR (water/sensor data)", desc: "IoT sensor data privacy, lawful basis for monitoring, DPIA for sensitive data." },
];

const MCPS = ["fsa-food-safety", "agent-audit-logger-mcp", "agent-data-residency-mcp", "agent-rate-limiter-mcp", "agent-policy-enforcement-mcp", "gdpr-compliance-ai-mcp", "bias-detection-mcp", "agent-handoff-certified-mcp", "iso-22000-ai-mcp"];

const FAQ = [
  { q: "Do I need HACCP and ISO 22000 for an aquaponics farm?", a: "Yes. Any business placing fish or produce on the market is a food business operator under FSA rules and must have a documented HACCP plan identifying CCPs (e.g. water quality, harvest, packing). ISO 22000 wraps HACCP into a full Food Safety Management System with prerequisite programmes (PRPs) and interactive communication up and down the chain. MEOK's iso-22000-ai-mcp auto-generates the FSMS docs and the fsa-food-safety MCP monitors CCP thresholds and Natasha's Law PPDS labelling." },
  { q: "How does DEFRA APB biosecurity apply to aquaponics?", a: "Aquatic Pathogen Biosecurity covers notifiable diseases such as KHV, SVC, IHN and VHS. You must operate biosecurity measures, keep movement records, and notify the Fish Health Inspectorate of suspected notifiable disease. Aquaponics systems recirculate water, so a single pathogen can spread fast — AI early-warning detection on sensor data is the practical control. The Aquatic Animal Health (England) Regs 2021 add registration, health certificates and movement compliance on top." },
  { q: "Does the Animal Welfare Act 2006 cover farmed fish?", a: "Yes. Fish are protected animals under the Animal Welfare Act 2006, which imposes a duty of care covering suitable environment, diet, the ability to exhibit normal behaviour, and protection from pain and suffering. For aquaponics that means continuous monitoring of dissolved oxygen, ammonia, nitrite, pH and stocking density. AI fish-welfare scoring on sensor and vision data gives you the auditable evidence of duty-of-care that an inspector will ask for." },
  { q: "Is sensor and IoT data in scope for UK GDPR?", a: "Water and environmental sensor telemetry is usually not personal data, but as soon as you tie monitoring to identifiable staff, customers or CCTV you are processing personal data and need a lawful basis and, for higher-risk processing, a DPIA. MEOK's gdpr-compliance-ai-mcp and agent-data-residency-mcp keep the lawful-basis register and data-residency controls in the same signed evidence chain as your food-safety and welfare records." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "AI compliance for aquaponics", name: "MEOK for Aquaponics AI", description: "MEOK AI compliance for aquaponics: DEFRA APB + FSA + ISO 22000 + HACCP + Animal Welfare Act 2006 + Aquatic Animal Health Regs 2021.", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "199", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Aquaponics AI", item: "https://meok.ai/aquaponics" }] };

export default function AquaponicsPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Aquaponics AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            DEFRA + FSA + ISO 22000 + HACCP. One substrate.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Aquaponics AI runs on water quality, feed conversion ratio, fish health, plant health, and food safety compliance. MEOK ships it all as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the aquaponics bundle</h2>
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
