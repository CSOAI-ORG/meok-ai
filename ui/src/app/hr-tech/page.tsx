import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for HR Tech AI | EU AI Act Annex III + NYC AEDT + IL HB 3773",
  description: "MEOK AI compliance for HR tech: EU AI Act Annex III section 4 (employment) + NYC Local Law 144 AEDT + IL HB 3773 + GDPR Art 22 + bias auditing.",
  keywords: ["MEOK HR AI", "EU AI Act employment", "NYC AEDT", "IL HB 3773", "GDPR Art 22", "HR tech compliance"],
  alternates: { canonical: "https://meok.ai/hr-tech" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "EU AI Act Annex III section 4", desc: "Employment AI = high-risk: recruitment, selection, task allocation, performance monitoring, promotion, termination." },
  { name: "NYC Local Law 144 (AEDT)", desc: "Automated Employment Decision Tools, annual bias audit, public summary, candidate notice 10 business days." },
  { name: "Illinois HB 3773 (AI Video Interview Act)", desc: "Consent, 30-day deletion, bias audit, reporting to Illinois Department of Commerce." },
  { name: "GDPR Art 22", desc: "Right not to be subject to solely-automated decisions with legal/significant effects, right to human review." },
  { name: "Colorado AI Act (SB 24-205)", desc: "High-risk AI for employment + consequential decisions, annual impact assessment, consumer notice." },
  { name: "EU AI Act Art 10 (data governance)", desc: "Training data quality, bias detection, representativeness. Mapped to NYC AEDT bias audit." },
];

const MCPS = ["eu-ai-act-compliance-mcp", "bias-detection-mcp", "gdpr-compliance-ai-mcp", "agent-audit-logger-mcp", "agent-policy-enforcement-mcp", "agent-data-residency-mcp", "agent-handoff-certified-mcp", "agent-rate-limiter-mcp", "agent-prompt-injection-firewall-mcp"];

const FAQ = [
  { q: "Why is HR AI classed as high-risk under the EU AI Act?", a: "Annex III section 4 designates AI used in employment, workers management, and access to self-employment as high-risk: recruitment and selection (CV screening, ranking, filtering), and AI used to make or materially influence decisions on terms, promotion, termination, task allocation, and performance/behaviour monitoring. High-risk status triggers Article 9–15 obligations (risk management, data governance, transparency, human oversight, logging) plus Article 26 deployer duties. MEOK ships the Annex IV technical documentation and oversight evidence as one signed pack." },
  { q: "What does NYC Local Law 144 (AEDT) require?", a: "If you use an Automated Employment Decision Tool to substantially assist hiring or promotion of NYC candidates, Local Law 144 requires: an independent bias audit within the past year, a publicly posted summary of the audit results and the tool's distribution date, and notice to candidates at least 10 business days before use (with the data categories and source). Penalties are per-violation, per-day. Our bias-detection MCP produces the impact-ratio audit by sex, race/ethnicity, and intersectional categories that the audit standard expects." },
  { q: "How is Illinois HB 3773 different from the AI Video Interview Act?", a: "Illinois has two layers. The earlier Artificial Intelligence Video Interview Act requires candidate consent before AI analyses a video interview, deletion within 30 days on request, limits on sharing, and demographic reporting where AI alone decides who advances. HB 3773 (effective Jan 2026) amends the Illinois Human Rights Act to make it a civil-rights violation to use AI that discriminates in employment decisions or to use ZIP code as a proxy, and adds notice duties. You need consent, deletion, bias auditing, and notice — our HR pack covers all four." },
  { q: "How does GDPR Article 22 limit automated hiring decisions?", a: "Article 22 gives individuals the right not to be subject to a decision based solely on automated processing — including profiling — that produces legal or similarly significant effects, such as rejecting a job application. Solely-automated hiring is only lawful under narrow exceptions (explicit consent, contract necessity, or authorising law) and even then you must provide meaningful human review, the ability to contest, and an explanation. In practice HR AI must keep a human in the loop with genuine authority to override. We map Article 22 review rights onto your workflow logs." },
];

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", serviceType: "HR tech AI compliance", name: "MEOK for HR Tech AI", description: "MEOK AI compliance for HR tech: EU AI Act Annex III section 4 (employment) + NYC Local Law 144 AEDT + IL HB 3773 + GDPR Art 22 + bias auditing.", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, areaServed: "GB", offers: { "@type": "Offer", price: "1499", priceCurrency: "GBP" } };

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "HR Tech AI", item: "https://meok.ai/hr-tech" }] };

export default function HrTechPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK HR Tech AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            Annex III section 4 + NYC AEDT + IL HB 3773 + GDPR Art 22. One substrate.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            HR AI is the most-restricted AI under EU AI Act (Annex III section 4). Plus NYC Local Law 144 (AEDT), Illinois HB 3773, GDPR Art 22. MEOK ships it all as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>MCPs in the HR Tech bundle</h2>
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
