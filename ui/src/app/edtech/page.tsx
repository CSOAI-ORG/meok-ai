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

export default function EdtechPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
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
      </div>
    </main>
  );
}
