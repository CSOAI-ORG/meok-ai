import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Fintech AI | DORA + AML + MiFID II + Basel III | MEOK.AI",
  description:
    "MEOK AI compliance for fintech: DORA ICT risk + third-party register + AMLD6 + FATF + MiFID II RTS 6 + Basel III SS1/23. One substrate, 5 frameworks, signed evidence pack.",
  keywords: [
    "MEOK fintech",
    "DORA AI compliance",
    "AML AI compliance",
    "MiFID II AI",
    "Basel III AI overlay",
    "EU AI Act financial services",
    "CASP MiCA",
  ],
  alternates: { canonical: "https://meok.ai/fintech" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "DORA (Reg 2022/2554)", desc: "ICT risk management · incident reporting · threat-led pen-testing · ICT third-party register. 17 Jan 2025 in force." },
  { name: "EU AI Act (high-risk)", desc: "Credit scoring + insurance pricing = Annex III high-risk. 9-Article stack required, all HMAC-signed." },
  { name: "AML / KYC (AMLD6 + FATF)", desc: "Suspicious transaction reporting · beneficial ownership · CDD/EDD. Mapped to AI Act bias-detection requirements." },
  { name: "MiFID II + RTS 6", desc: "Algorithmic trading governance · kill-switch requirements · pre/post-trade controls. AI overlay for ML-based execution." },
  { name: "Basel III (SS1/23 + SR 11-7)", desc: "Model risk management · validation · ongoing monitoring. AI overlay for ML/DL credit models." },
  { name: "MiCA (Crypto)", desc: "CASP authorisation · whitepaper requirements · reserve asset rules. AI for trading bots and DeFi protocols." },
];

const MCPS = [
  "dora-compliance-mcp", "dora-nis2-crosswalk-mcp", "dora-compliance-software",
  "aml-ai-mcp", "mifid-ii-ai-mcp", "basel-ai-overlay-mcp", "mica-crypto-mcp",
  "eu-ai-act-compliance-mcp", "bias-detection-mcp", "agent-audit-logger-mcp",
  "agent-handoff-certified-mcp", "agent-policy-enforcement-mcp",
];

const FAQ = [
  { q: "Why is fintech AI the most-regulated AI in the EU?", a: "Financial services AI sits under five overlapping frameworks at once: DORA for ICT risk, the EU AI Act (credit scoring and insurance pricing are Annex III high-risk), AML/KYC under AMLD6 and FATF, MiFID II with RTS 6 for algorithmic trading, and Basel III model risk management. MEOK ships all five as one substrate with a single signed evidence pack." },
  { q: "What does DORA require of financial entities?", a: "DORA (Regulation 2022/2554, in force since 17 January 2025) requires ICT risk management, incident reporting, threat-led penetration testing, and an ICT third-party register. Under DORA Article 5 most financial entities are designated essential or important, which triggers the full framework — that is why the Enterprise tier is the most common fit for fintech." },
  { q: "How does the EU AI Act apply to credit scoring?", a: "Credit scoring and insurance pricing are classified as Annex III high-risk under the EU AI Act. That triggers the full 9-Article stack — risk management, data governance, technical documentation, record-keeping, transparency, human oversight, and more — all of which MEOK delivers HMAC-signed. AML bias-detection requirements are mapped to the same evidence." },
  { q: "How much does the fintech bundle cost?", a: "The Enterprise tier is £1,499/mo and is the most common choice for fintech because DORA Article 5 designates most financial entities as essential or important, triggering the full framework. Onboarding takes 14 days, and the bundle includes 12 MCP servers spanning DORA, AML, MiFID II, Basel III, MiCA, and the EU AI Act." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "Fintech AI", item: "https://meok.ai/fintech" },
] };

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", name: "MEOK for Fintech AI", serviceType: "DORA + EU AI Act + AML + MiFID II + Basel III compliance", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, url: "https://meok.ai/fintech", areaServed: "GB", offers: { "@type": "Offer", price: "1499", priceCurrency: "GBP", url: "https://meok.ai/fintech" } };

export default function FintechPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK · Fintech AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            DORA + EU AI Act + AML + MiFID + Basel. One invoice.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Financial services AI is the most-regulated AI in the EU. Five overlapping frameworks,
            one signed evidence pack. MEOK ships it as a substrate.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Frameworks</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {FRAMEWORKS.map((f) => (
              <div key={f.name} style={{ background: "white", borderRadius: 12, padding: 20, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: 16, fontWeight: 900, color: GOLD, margin: "0 0 6px" }}>{f.name}</h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>12 MCPs in the fintech bundle</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8 }}>
            {MCPS.map((m) => (
              <code key={m} style={{ background: "white", padding: "10px 12px", borderRadius: 8, fontSize: 12, fontFamily: "monospace", border: `1px solid ${NAVY}0d` }}>
                pip install {m}
              </code>
            ))}
          </div>
        </section>

        <section style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Get the bundle</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, lineHeight: 1.6, marginBottom: 16 }}>
            Enterprise tier is the most common for fintech (DORA Article 5 designates most
            financial entities as essential/important, which triggers the full framework).
            £1,499/mo. Onboarding: 14 days.
          </p>
          <a href="https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U" target="_blank" rel="noopener noreferrer"
             style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            Start Enterprise — £1,499/mo →
          </a>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f) => (
              <div key={f.q} style={{ background: "white", borderRadius: 12, padding: 20, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: 16, fontWeight: 900, color: GOLD, margin: "0 0 6px" }}>{f.q}</h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
