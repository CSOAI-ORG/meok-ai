import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Children's AI | COPPA + FERPA + AADC + UK Age-Appropriate | MEOK.AI",
  description:
    "MEOK AI compliance for kids' products: COPPA + FERPA + UK Age-Appropriate Design Code + GDPR Art 8 + EU AI Act Art 5(1)(b) ban on exploitation. One substrate, signed evidence.",
  keywords: [
    "MEOK kids AI",
    "COPPA AI compliance",
    "FERPA AI",
    "UK Age Appropriate Design Code",
    "GDPR Art 8",
    "EU AI Act Art 5(1)(b)",
    "children AI",
  ],
  alternates: { canonical: "https://meok.ai/kidsai" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "COPPA (US, under 13)", desc: "Verifiable parental consent · data minimisation · retention limits. FTC enforcement, $50k/violation." },
  { name: "FERPA (US, schools)", desc: "Directory info opt-out · parent/eligible-student rights. Department of Education enforcement." },
  { name: "UK Age-Appropriate Design Code (AADC)", desc: "ICO's 15 standards · DPIA mandatory · best interests of the child. Applies to all UK services likely to be accessed by children." },
  { name: "GDPR Art 8 (EU/UK, under 16)", desc: "Parental consent for information society services · age 13-16 by member state. Joint with EU AI Act for high-risk minors." },
  { name: "EU AI Act Art 5(1)(b)", desc: "Prohibition on AI that exploits vulnerabilities of children. Hard ban, not high-risk classification." },
  { name: "Maternal Covenant (MEOK IP)", desc: "MEOK Charter Article 3: 'An agent shall never replace a parent's judgement on a child's welfare.'" },
];

const MCPS = [
  "coppa-ferpa-mcp", "agent-data-residency-mcp", "agent-policy-enforcement-mcp",
  "agent-audit-logger-mcp", "agent-handoff-certified-mcp", "bias-detection-mcp",
  "eu-ai-act-compliance-mcp", "agent-rate-limiter-mcp", "agent-prompt-injection-firewall-mcp",
];

export default function KidsAIPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK · Children's AI</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            COPPA + FERPA + AADC + Art 8 + Art 5(1)(b). The strongest bar.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Kids' AI carries the highest compliance burden of any sector. Six overlapping
            frameworks, plus a Charter obligation that overrides any of them. MEOK ships the
            whole thing as one signed evidence pack.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>9 MCPs in the kids-AI bundle</h2>
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
            Enterprise tier. Kids' AI vendors carry the most reputational risk — we recommend
            the multi-tenant, council-governed version. £1,499/mo.
          </p>
          <a href="https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U" target="_blank" rel="noopener noreferrer"
             style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            Start Enterprise — £1,499/mo →
          </a>
        </section>
      </div>
    </main>
  );
}
