import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for UK Haulage AI | DVSA + tacho + WTD + OCRS",
  description: "MEOK AI compliance for haulage: DVSA + digital tacho + Working Time Directive + OCRS + Driver CPC + Operator Licence.",
  keywords: ["MEOK haulage AI", "DVSA compliance", "tachograph AI", "WTD haulage", "OCRS", "driver CPC"],
  alternates: { canonical: "https://meok.ai/haulage" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "DVSA Operator Licence", desc: "Standard National or Standard International, 5-year CPC holder, financial standing, professional competence." },
  { name: "Digital Tachograph (EU 2016/799)", desc: "Driver card, vehicle unit, download every 28 days, 1-year retention. AI for HOS violation detection." },
  { name: "Working Time Directive (2002/15/EC)", desc: "Max 9h daily driving, 56h weekly, 90h fortnightly, 45h weekly rest. AI for shift scheduling." },
  { name: "DVSA Earned Recognition (OCRS)", desc: "Operator Compliance Risk Score, monthly upload, 4-week download compliance. AI for anomaly detection." },
  { name: "Driver CPC (EU 2018/645)", desc: "35h periodic training every 5 years. AI for training compliance and scheduling." },
  { name: "EU Mobility Package", desc: "Cabotage rules, return-to-home rule, driver posting declarations. AI for cross-border compliance." },
];

const MCPS = ["haulage-uk-compliance-mcp", "meok-tacho-audit-mcp", "agent-audit-logger-mcp", "agent-policy-enforcement-mcp", "agent-rate-limiter-mcp", "agent-data-residency-mcp", "agent-handoff-certified-mcp", "eu-ai-act-compliance-mcp", "bias-detection-mcp"];

const FAQ = [
  { q: "Can AI handle digital tachograph compliance?", a: "AI can flag hours-of-service (HOS) violations from tachograph data, but it cannot replace the legal obligations under EU 2016/799: driver-card and vehicle-unit data must still be downloaded (cards every 28 days, vehicle units periodically) and retained for at least 1 year. AI is best used to detect breaches early — overrun driving, missing rest, manipulated cards — so the transport manager can act before a DVSA roadside check. MEOK's tacho-audit MCP produces the signed anomaly evidence." },
  { q: "What does the Working Time Directive limit for drivers?", a: "The road transport WTD (2002/15/EC) caps driving and working time: max 9 hours daily driving (extendable to 10 twice a week), 56 hours weekly driving, 90 hours over a fortnight, and a minimum 45-hour weekly rest. These sit alongside EU 561/2006 drivers' hours. AI shift-scheduling must respect all of these limits simultaneously, which is where most manual rotas fail — our scheduling check validates a roster against WTD and 561/2006 before it is published." },
  { q: "How does OCRS / Earned Recognition work with AI?", a: "DVSA's Operator Compliance Risk Score (OCRS) and Earned Recognition scheme judge operators on maintenance and traffic compliance history. Earned Recognition requires monthly KPI uploads and demonstrable systems. AI anomaly detection helps keep your green OCRS band by catching missed downloads, overdue maintenance, and HOS infringements before they hit your score — and the audit trail is exactly what the DVSA auditor expects to see." },
  { q: "Does an Operator Licence require disclosing AI use?", a: "The DVSA Operator Licence (Standard National or Standard International) is judged on financial standing, professional competence (a CPC holder), and good repute — not on whether you use AI. But the systems you rely on for compliance must be robust and auditable. If AI underpins your drivers' hours or maintenance compliance, you should be able to show the Traffic Commissioner that the system is validated and that a human transport manager retains effective control." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "UK haulage AI compliance", name: "MEOK for UK Haulage AI", description: "MEOK AI compliance for haulage: DVSA + digital tacho + Working Time Directive + OCRS + Driver CPC + Operator Licence.", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "199", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "UK Haulage AI", item: "https://meok.ai/haulage" }] };

export default function HaulagePage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK UK Haulage AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            DVSA + tacho + WTD + OCRS. One substrate.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            UK haulage AI runs on DVSA earned recognition, digital tachograph rules, Working Time Directive for drivers, and Operator Compliance Risk Score. MEOK ships it all as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the haulage bundle</h2>
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
