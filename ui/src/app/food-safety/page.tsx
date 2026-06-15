import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Food Safety AI | HACCP + Natasha Law + FSA + ISO 22000",
  description: "MEOK AI compliance for food safety: HACCP + Natasha Law (PPDS allergen labelling) + FSA + ISO 22000 + Food Information Regulations 2014.",
  keywords: ["MEOK food safety AI", "HACCP AI", "Natasha Law AI", "FSA AI", "ISO 22000 AI", "food compliance"],
  alternates: { canonical: "https://meok.ai/food-safety" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "HACCP (Hazard Analysis Critical Control Points)", desc: "7 principles, CCPs, critical limits, monitoring, corrective actions, verification. AI for CCP monitoring." },
  { name: "Natasha Law (PPDS)", desc: "Pre-packed for direct sale, full ingredient list, allergen emphasis, 2021 in force. AI for label compliance." },
  { name: "FSA (Food Standards Agency)", desc: "Inspection regime, Food Hygiene Rating Scheme, 6 categories. AI for hygiene violation detection." },
  { name: "ISO 22000 (Food Safety Management)", desc: "FSMS, interactive communication, system management, prerequisite programmes (PRPs)." },
  { name: "EU Food Information to Consumers (Reg 1169/2011)", desc: "Allergen disclosure, nutrition declaration, origin, country of origin labelling." },
  { name: "GDPR (dietary/health data)", desc: "Allergen preferences, dietary restrictions. Art 9 special category when health-related." },
];

const MCPS = ["fsa-food-safety", "haccp-ai-mcp", "agent-audit-logger-mcp", "agent-policy-enforcement-mcp", "agent-rate-limiter-mcp", "agent-data-residency-mcp", "gdpr-compliance-ai-mcp", "bias-detection-mcp", "agent-prompt-injection-firewall-mcp"];

const FAQ = [
  { q: "Does HACCP require AI-specific controls?", a: "HACCP itself is technology-neutral: the 7 principles (hazard analysis, CCP identification, critical limits, monitoring, corrective actions, verification, documentation) apply whether monitoring is manual or AI-driven. But if AI performs CCP monitoring — e.g. computer vision for cook temperature or fill level — you must validate it as a monitoring procedure under Principle 4 and keep verification records under Principle 6. MEOK ships the HACCP AI monitoring + verification evidence as a signed pack." },
  { q: "What does Natasha's Law (PPDS) require for AI labelling?", a: "Natasha's Law (in force since October 2021) requires Pre-Packed for Direct Sale food to carry a full ingredient list with the 14 regulated allergens emphasised (e.g. bold). If you use AI to generate or check labels, the AI must capture every ingredient and never drop an allergen flag — a missed allergen is a criminal offence and a fatal safety risk. Our label-compliance MCP cross-checks generated labels against the 14 allergens and the recipe source of truth." },
  { q: "How does the FSA Food Hygiene Rating Scheme interact with AI?", a: "The FSA inspects against the FHRS using 6 categories and issues a 0–5 rating. AI for hygiene-violation detection (e.g. CCTV monitoring of handwashing or cross-contamination) is a supporting control, not a substitute for the statutory inspection. Keep AI outputs as auditable evidence the inspector can review, and ensure corrective actions are logged — that is what improves the rating." },
  { q: "When does GDPR Article 9 apply to food safety AI?", a: "Allergen preferences and dietary restrictions can reveal health information, which is special-category data under GDPR Article 9. If your AI processes customer allergen/dietary data (e.g. personalised menus, allergy pre-orders) you need an Article 9 condition (usually explicit consent) plus the lawful basis under Article 6, data minimisation, and retention limits. ISO 22000 communication requirements and GDPR must be reconciled — our GDPR MCP handles the special-category mapping." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "Food safety AI compliance", name: "MEOK for Food Safety AI", description: "MEOK AI compliance for food safety: HACCP + Natasha Law (PPDS allergen labelling) + FSA + ISO 22000 + Food Information Regulations 2014.", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "199", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Food Safety AI", item: "https://meok.ai/food-safety" }] };

export default function FoodSafetyPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Food Safety AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            HACCP + Natasha Law + FSA + ISO 22000. One substrate.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Food safety AI runs on HACCP plans, Natasha Law allergen labelling, FSA inspections, and ISO 22000. MEOK ships it all as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the food safety bundle</h2>
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
                <summary style={{ fontWeight: 900, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
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
