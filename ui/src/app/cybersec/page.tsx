import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Cybersecurity | CRA + SBOM + CISA KEV + Sigstore | MEOK.AI",
  description:
    "MEOK AI compliance for cybersecurity vendors: EU CRA + SBOM CycloneDX 1.6 + CISA KEV + Sigstore Cosign + SLSA v1.0 + MITRE ATT&CK. One substrate, every framework.",
  keywords: [
    "MEOK cybersec",
    "EU CRA compliance",
    "SBOM CycloneDX",
    "CISA KEV",
    "Sigstore Cosign",
    "SLSA supply chain",
    "MITRE ATT&CK",
  ],
  alternates: { canonical: "https://meok.ai/cybersec" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "EU Cyber Resilience Act (CRA 2024/2847)", desc: "Annex I cybersecurity requirements · SBOM · 11 Dec 2027 main obligations cliff. Applies to all products with digital elements." },
  { name: "SBOM (CycloneDX 1.6 + SPDX 3.0)", desc: "Machine-readable software bill of materials. Required by CRA + EO 14028 + US DoD + EU AI Act Annex IV." },
  { name: "SLSA v1.0 (Supply-chain Levels for Software Artefacts)", desc: "Provenance attestation · Level 1-4 maturity model. Sigstore for keyless signing." },
  { name: "CISA KEV (Known Exploited Vulnerabilities)", desc: "BOD 22-01 SLA tracking · 14-day patch for vulns actively exploited in the wild. Required for federal agencies." },
  { name: "MITRE ATT&CK + ATLAS", desc: "Adversary tactics catalog + AI-specific attack catalog. STIX 2.1 exportable." },
  { name: "OWASP LLM Top 10", desc: "Prompt injection (LLM01) + sensitive info disclosure (LLM02) + supply chain (LLM05). Mapped to MCP server patterns." },
];

const MCPS = [
  "cra-compliance-mcp", "sbom-cyclonedx-mcp", "cisa-kev-mcp", "slsa-supply-chain-mcp",
  "sigstore-cosign-mcp", "mitre-attack-mcp", "mitre-atlas-mcp", "agent-prompt-injection-firewall-mcp",
  "firmware-attestation-mcp", "agent-audit-logger-mcp", "agent-policy-enforcement-mcp", "agent-rate-limiter-mcp",
];

export default function CybersecPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK · Cybersecurity</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            CRA + SBOM + KEV + SLSA + Sigstore. One signed evidence pack.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Cybersecurity vendors carry the heaviest compliance load of any sector: CRA, NIS2,
            AI Act (for AI features), SBOM mandates, KEV tracking, supply-chain attestation.
            MEOK ships all of it as one substrate, HMAC-signed.
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
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>12 MCPs in the cybersec bundle</h2>
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
            Pro tier is the most common for cybersec vendors (CRA Annex I requires the 9-Article
            AI Act stack if your product includes AI features). £199/mo. Enterprise for OEM
            integrators.
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
