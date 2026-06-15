import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Education AI | FERPA + AADC + EU AI Act + UK AI Bill | MEOK.AI",
  description:
    "MEOK AI compliance for EdTech: FERPA + UK Age-Appropriate Design Code + EU AI Act (Annex III §3 high-risk) + UK AI Bill + GDPR Art 8. One signed evidence pack.",
  keywords: [
    "MEOK edtech",
    "FERPA AI",
    "AADC edtech",
    "EU AI Act education",
    "UK AI Bill",
    "GDPR Art 8 education",
  ],
  alternates: { canonical: "https://meok.ai/edtech" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "FERPA (US)", desc: "Student records · parent + eligible-student rights · directory info opt-out. Department of Education enforcement." },
  { name: "UK Age-Appropriate Design Code", desc: "ICO 15 standards · DPIA mandatory · best interests of the child. Applies to all UK education services." },
  { name: "EU AI Act Annex III §3", desc: "Education = high-risk (admissions, evaluation, monitoring). Full 9-Article stack required." },
  { name: "UK AI Bill (2026 outlook)", desc: "Sectoral regulator-led · Ofsted for AI in schools · anticipated in force 2026-2027." },
  { name: "GDPR Art 8 (under 16)", desc: "Parental consent for information society services. Member-state variance: 13-16." },
  { name: "State privacy laws (US)", desc: "NY Shield Act · California SOPIPA · Illinois SOPPA. Mapped by the MEOK crosswalk." },
];

const MCPS = [
  "coppa-ferpa-mcp", "agent-data-residency-mcp", "agent-policy-enforcement-mcp",
  "agent-audit-logger-mcp", "bias-detection-mcp", "eu-ai-act-compliance-mcp",
  "uk-ai-bill-compliance-mcp", "agent-handoff-certified-mcp", "agent-rate-limiter-mcp",
];

const FAQ = [
  { q: "Is education AI high-risk under the EU AI Act?", a: "Yes. EU AI Act Annex III §3 classifies AI used for admissions, evaluation of learning outcomes, and monitoring of students as high-risk. That triggers the full 9-Article compliance stack — risk management, data governance, technical documentation, logging, transparency, human oversight, accuracy/robustness, and conformity assessment." },
  { q: "What US frameworks apply to edtech AI?", a: "FERPA governs student records, parent and eligible-student rights, and directory-info opt-out, enforced by the Department of Education. State privacy laws stack on top: New York's SHIELD Act, California's SOPIPA, and Illinois' SOPPA — all mapped by the MEOK crosswalk." },
  { q: "Does the UK Age-Appropriate Design Code apply to schools and edtech?", a: "Yes. The ICO's 15 AADC standards apply to all UK education services likely to be accessed by children, with a DPIA mandatory and the best interests of the child as the governing principle. GDPR Article 8 also requires parental consent for information society services for under-16s, with the threshold varying 13-16 by member state." },
  { q: "What does MEOK ship for edtech compliance?", a: "One signed evidence pack covering FERPA, the UK AADC, EU AI Act Annex III §3, the upcoming UK AI Bill, and GDPR Article 8 — backed by 9 MCPs including coppa-ferpa-mcp, eu-ai-act-compliance-mcp, uk-ai-bill-compliance-mcp, and bias-detection-mcp. Pro tier is £199/mo for district-wide deployments; Enterprise is £1,499/mo for state-wide." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "Education AI Compliance", item: "https://meok.ai/edtech" },
] };

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", name: "MEOK Education AI Compliance", serviceType: "EdTech AI compliance evidence pack", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, url: "https://meok.ai/edtech", areaServed: "GB", offers: { "@type": "Offer", price: "199", priceCurrency: "GBP", url: "https://meok.ai/edtech" } };

export default function EdtechPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK · Education AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            FERPA + AADC + Annex III §3 + UK AI Bill. One signed pack.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Education AI is high-risk under EU AI Act Annex III §3. Plus FERPA in the US, AADC
            in the UK, and the upcoming UK AI Bill. MEOK ships it all as one signed evidence
            pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>9 MCPs in the edtech bundle</h2>
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
            Pro tier for district-wide edtech; Enterprise for state-wide. £199/mo or £1,499/mo.
          </p>
          <a href="https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T" target="_blank" rel="noopener noreferrer"
             style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            Start Pro — £199/mo →
          </a>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 900, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
