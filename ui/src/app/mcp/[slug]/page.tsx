import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ---------------------------------------------------------------------------
// MCP catalog — every published MEOK MCP server gets a /mcp/<slug> detail page
// ---------------------------------------------------------------------------

type MCPRecord = {
  slug: string;        // /mcp/<slug>
  pkg: string;         // PyPI package name
  name: string;        // io.github.CSOAI-ORG/<pkg> in the registry
  title: string;
  tagline: string;
  pack: "governance" | "a2a" | "trade" | "industry" | "cybersec";
  features: string[];
};

const CATALOG: Record<string, MCPRecord> = {
  // ---- Governance pack (8) ----
  "eu-ai-act-compliance": { slug: "eu-ai-act-compliance", pkg: "eu-ai-act-compliance-mcp", name: "io.github.CSOAI-ORG/eu-ai-act-compliance-mcp", title: "EU AI Act Compliance MCP", tagline: "410 articles from EUR-Lex via FTS5 search. Instant risk scan + Annex IV evidence pack.", pack: "governance", features: ["EUR-Lex full text via FTS5 search", "Annex III high-risk classifier (Dec 2027 cliff)", "Article 50 transparency obligations (Nov 2026)", "HMAC-signed compliance attestations"] },
  "dora-compliance": { slug: "dora-compliance", pkg: "dora-compliance-mcp", name: "io.github.CSOAI-ORG/dora-compliance-mcp", title: "DORA Compliance MCP", tagline: "Digital Operational Resilience Act for EU financial entities. ICT risk + third-party register.", pack: "governance", features: ["ICT risk management framework", "Third-party register builder", "Incident reporting (within 24h)", "DORA-NIS2 crosswalk built-in"] },
  "nis2-compliance": { slug: "nis2-compliance", pkg: "nis2-compliance-mcp", name: "io.github.CSOAI-ORG/nis2-compliance-mcp", title: "NIS2 Compliance MCP", tagline: "EU NIS2 Directive cybersecurity baseline. 10 governance domains + entity classification.", pack: "governance", features: ["Entity classification (Essential / Important)", "10 cybersecurity governance domains", "Incident notification workflow", "DE-specific register integration"] },
  "cra-compliance": { slug: "cra-compliance", pkg: "cra-compliance-mcp", name: "io.github.CSOAI-ORG/cra-compliance-mcp", title: "Cyber Resilience Act MCP", tagline: "EU CRA Annex I classifier + SBOM + vulnerability handling. Sept 2027 cliff.", pack: "governance", features: ["Annex I classification (Class I / Class II / important)", "SBOM in CycloneDX 1.6 format", "Vulnerability handling process", "Conformity assessment routing"] },
  "ai-bom": { slug: "ai-bom", pkg: "ai-bom-mcp", name: "io.github.CSOAI-ORG/ai-bom-mcp", title: "AI Bill of Materials MCP", tagline: "CycloneDX ML-BOM 1.6 + SPDX 3.0. Model provenance + training data + dependency tree.", pack: "governance", features: ["CycloneDX ML-BOM 1.6 export", "SPDX 3.0 export", "Model lineage tracking", "EU AI Act Annex IV alignment"] },
  "ai-incident-reporting": { slug: "ai-incident-reporting", pkg: "ai-incident-reporting-mcp", name: "io.github.CSOAI-ORG/ai-incident-reporting-mcp", title: "AI Incident Reporting MCP", tagline: "EU AI Act Article 73 serious-incident reports. Within 15-day deadline + market surveillance routing.", pack: "governance", features: ["Article 73 incident classification", "15-day reporting workflow", "Market surveillance authority routing", "Incident severity scoring"] },
  "dora-nis2-crosswalk": { slug: "dora-nis2-crosswalk", pkg: "dora-nis2-crosswalk-mcp", name: "io.github.CSOAI-ORG/dora-nis2-crosswalk-mcp", title: "DORA × NIS2 Crosswalk MCP", tagline: "Map shared controls across DORA + NIS2 + EU AI Act. One control test, multi-regulation evidence.", pack: "governance", features: ["DORA → NIS2 control mapping", "NIS2 → EU AI Act mapping", "Shared evidence library", "Single audit, multiple frameworks"] },
  "bias-detection": { slug: "bias-detection", pkg: "bias-detection-mcp", name: "io.github.CSOAI-ORG/bias-detection-mcp", title: "Bias Detection MCP", tagline: "Demographic parity + equalized odds + calibration. EU AI Act Article 10 testing baseline.", pack: "governance", features: ["Demographic parity test", "Equalized odds + calibration metrics", "EU AI Act Article 10 alignment", "Disparate impact reports"] },
  "watermarking-authenticity": { slug: "watermarking-authenticity", pkg: "watermarking-authenticity-mcp", name: "io.github.CSOAI-ORG/watermarking-authenticity-mcp", title: "Watermarking + Authenticity MCP", tagline: "C2PA 2.1 + invisible watermark + Sigstore. EU AI Act Article 50 (2 Nov 2026 cliff).", pack: "governance", features: ["C2PA 2.1 manifest generation", "Invisible perturbation watermarking", "Sigstore-signed provenance", "RFC 3161 timestamp authority"] },
  "uk-ai-bill-compliance": { slug: "uk-ai-bill-compliance", pkg: "uk-ai-bill-compliance-mcp", name: "io.github.CSOAI-ORG/uk-ai-bill-compliance-mcp", title: "UK AI Bill Compliance MCP", tagline: "Pro-innovation UK framework + sectoral regulator mapping (ICO/CMA/FCA/Ofcom).", pack: "governance", features: ["UK AI Bill 2026 obligations", "ICO + CMA + FCA + Ofcom mapping", "Pro-innovation principles checklist", "Sectoral regulator routing"] },

  // ---- A2A pack (6) ----
  "agent-prompt-injection-firewall": { slug: "agent-prompt-injection-firewall", pkg: "agent-prompt-injection-firewall-mcp", name: "io.github.CSOAI-ORG/agent-prompt-injection-firewall-mcp", title: "Prompt Injection Firewall MCP", tagline: "OWASP LLM01 defence. Multi-layer detection: regex, embeddings, behavioural drift.", pack: "a2a", features: ["OWASP LLM01 alignment", "Regex + embedding + behavioural detection", "Inline blocking + audit log", "MITRE ATLAS-mapped"] },
  "agent-data-residency": { slug: "agent-data-residency", pkg: "agent-data-residency-mcp", name: "io.github.CSOAI-ORG/agent-data-residency-mcp", title: "Agent Data Residency MCP", tagline: "Enforce data locality (EU/UK/US/CN) for agent context + tool calls. GDPR + Schrems II.", pack: "a2a", features: ["EU/UK/US/CN region enforcement", "GDPR Chapter V alignment", "Schrems II evidence trail", "Per-tool residency policy"] },
  "agent-handoff-certified": { slug: "agent-handoff-certified", pkg: "agent-handoff-certified-mcp", name: "io.github.CSOAI-ORG/agent-handoff-certified-mcp", title: "Certified Agent Handoff MCP", tagline: "HMAC-signed context transfer between agents. Audit chain + non-repudiation.", pack: "a2a", features: ["HMAC-SHA256 signed handoffs", "Audit chain with timestamps", "Non-repudiation evidence", "Multi-agent workflow tracing"] },
  "agent-policy-enforcement": { slug: "agent-policy-enforcement", pkg: "agent-policy-enforcement-mcp", name: "io.github.CSOAI-ORG/agent-policy-enforcement-mcp", title: "Agent Policy Enforcement MCP", tagline: "OPA-style policy-as-code for agent tool use. Inline allow/deny + audit.", pack: "a2a", features: ["OPA-style policy language", "Inline tool-call decisions", "Per-agent policy bundles", "Decision audit log"] },
  "agent-audit-logger": { slug: "agent-audit-logger", pkg: "agent-audit-logger-mcp", name: "io.github.CSOAI-ORG/agent-audit-logger-mcp", title: "Agent Audit Logger MCP", tagline: "Tamper-evident append-only log of every agent action. Merkle-root anchored.", pack: "a2a", features: ["Append-only event log", "Merkle root anchoring", "Sigstore-signed snapshots", "EU AI Act Article 12 evidence"] },
  "agent-rate-limiter": { slug: "agent-rate-limiter", pkg: "agent-rate-limiter-mcp", name: "io.github.CSOAI-ORG/agent-rate-limiter-mcp", title: "Agent Rate Limiter MCP", tagline: "Token bucket + leaky bucket rate limits per agent + per tool. Prevent runaway costs.", pack: "a2a", features: ["Token + leaky bucket strategies", "Per-agent + per-tool limits", "Burst handling", "Quota analytics"] },

  // ---- Trade pack (7) ----
  "haulage-uk-compliance": { slug: "haulage-uk-compliance", pkg: "haulage-uk-compliance-mcp", name: "io.github.CSOAI-ORG/haulage-uk-compliance-mcp", title: "UK Haulage Compliance MCP", tagline: "Operator licence + tacho + DVSA roadside + WTD. The black-box of UK road transport.", pack: "trade", features: ["Operator licence tracking", "Tachograph compliance", "DVSA roadside readiness", "Working Time Directive"] },
  "skip-hire-ai": { slug: "skip-hire-ai", pkg: "skip-hire-ai-mcp", name: "io.github.CSOAI-ORG/skip-hire-ai-mcp", title: "Skip Hire AI MCP", tagline: "Waste carrier licence + duty of care + transfer notes. EA + SEPA + NRW compliance.", pack: "trade", features: ["Waste carrier licence checks", "Duty of care evidence", "EA / SEPA / NRW mapping", "Transfer note automation"] },
  "construction-iso-19650": { slug: "construction-iso-19650", pkg: "construction-iso-19650-mcp", name: "io.github.CSOAI-ORG/construction-iso-19650-mcp", title: "ISO 19650 BIM MCP", tagline: "BIM information management. CDE + EIR + BEP + asset information requirements.", pack: "trade", features: ["Common Data Environment (CDE)", "EIR + BEP + AIR templates", "ISO 19650 alignment", "BIM Level 2 evidence"] },
  "nrswa-ai": { slug: "nrswa-ai", pkg: "nrswa-ai-mcp", name: "io.github.CSOAI-ORG/nrswa-ai-mcp", title: "NRSWA Compliance MCP", tagline: "New Roads + Street Works Act. Permits + reinstatement + Section 74 charges.", pack: "trade", features: ["Permit scheme automation", "Reinstatement quality checks", "Section 74 charge avoidance", "Highway authority routing"] },
  "chas-elite-prep": { slug: "chas-elite-prep", pkg: "chas-elite-prep-mcp", name: "io.github.CSOAI-ORG/chas-elite-prep-mcp", title: "CHAS Elite Prep MCP", tagline: "CHAS Elite accreditation prep. Health + safety + finance + environment + quality.", pack: "trade", features: ["CHAS Elite checklist", "Health + safety SSIP mapping", "Finance + environment + quality", "Pre-audit gap report"] },
  "crane-hire-cpcs": { slug: "crane-hire-cpcs", pkg: "crane-hire-cpcs-mcp", name: "io.github.CSOAI-ORG/crane-hire-cpcs-mcp", title: "Crane Hire CPCS MCP", tagline: "CPCS + LOLER + BS 7121. Lift planning + operator competence + thorough exam.", pack: "trade", features: ["CPCS card tracking", "LOLER thorough examination", "BS 7121 lift planning", "Operator competence matrix"] },
  "concrete-pump-cpa": { slug: "concrete-pump-cpa", pkg: "concrete-pump-cpa-mcp", name: "io.github.CSOAI-ORG/concrete-pump-cpa-mcp", title: "Concrete Pump CPA MCP", tagline: "CPA + ICDS guidance. Outrigger + boom + concrete delivery safety + competence.", pack: "trade", features: ["CPA membership compliance", "ICDS guidance integration", "Outrigger + boom safety", "Operator competence tracking"] },

  // ---- Industry pack (7) ----
  "mica-crypto": { slug: "mica-crypto", pkg: "mica-crypto-mcp", name: "io.github.CSOAI-ORG/mica-crypto-mcp", title: "MiCA Crypto Compliance MCP", tagline: "EU Markets in Crypto-Assets Regulation. CASP licence + whitepaper + market abuse.", pack: "industry", features: ["CASP licence checklist", "Whitepaper requirements", "Market abuse rules", "EBA + ESMA routing"] },
  "fsa-food-safety": { slug: "fsa-food-safety", pkg: "fsa-food-safety-mcp", name: "io.github.CSOAI-ORG/fsa-food-safety-mcp", title: "FSA Food Safety MCP", tagline: "HACCP + allergen + traceability. FSA inspection prep + Natasha's Law.", pack: "industry", features: ["HACCP plan automation", "Allergen labelling (Natasha's Law)", "Traceability one-step-forward / back", "FSA inspection checklist"] },
  "mdr-medical-device": { slug: "mdr-medical-device", pkg: "mdr-medical-device-mcp", name: "io.github.CSOAI-ORG/mdr-medical-device-mcp", title: "EU MDR Medical Device MCP", tagline: "Medical Device Regulation (EU 2017/745). Classification + technical file + UDI + PMS.", pack: "industry", features: ["Device classification (I / IIa / IIb / III)", "Technical file builder", "UDI assignment", "Post-market surveillance"] },
  "fda-samd": { slug: "fda-samd", pkg: "fda-samd-mcp", name: "io.github.CSOAI-ORG/fda-samd-mcp", title: "FDA SaMD MCP", tagline: "Software as a Medical Device. IMDRF risk + 510(k) + De Novo + PMA routing.", pack: "industry", features: ["IMDRF risk categorisation", "510(k) substantial equivalence", "De Novo + PMA routing", "Quality System Regulation"] },
  "coppa-ferpa": { slug: "coppa-ferpa", pkg: "coppa-ferpa-mcp", name: "io.github.CSOAI-ORG/coppa-ferpa-mcp", title: "COPPA + FERPA MCP", tagline: "US child + student data privacy. COPPA verifiable parental consent + FERPA SAR.", pack: "industry", features: ["COPPA verifiable parental consent", "FERPA student record access", "Age-gating automation", "Audit-ready disclosures"] },
  "basel-ai-overlay": { slug: "basel-ai-overlay", pkg: "basel-ai-overlay-mcp", name: "io.github.CSOAI-ORG/basel-ai-overlay-mcp", title: "Basel III AI Overlay MCP", tagline: "EU CRR / Basel III + model risk management (SS1/23, SR 11-7). AI in capital + credit.", pack: "industry", features: ["SS1/23 model risk management", "SR 11-7 model validation", "EU CRR alignment", "AI in IRB / counterparty risk"] },
  "mifid-ii-ai": { slug: "mifid-ii-ai", pkg: "mifid-ii-ai-mcp", name: "io.github.CSOAI-ORG/mifid-ii-ai-mcp", title: "MiFID II AI MCP", tagline: "Algo trading governance (RTS 6) + best execution + product governance. AI in trading.", pack: "industry", features: ["RTS 6 algo trading governance", "Best execution evidence", "Product governance + target market", "Pre-trade controls"] },
  "aml-ai": { slug: "aml-ai", pkg: "aml-ai-mcp", name: "io.github.CSOAI-ORG/aml-ai-mcp", title: "AML / KYC AI MCP", tagline: "EU AMLD6 + FATF + FinCEN. AI in transaction monitoring + KYC + sanctions screening.", pack: "industry", features: ["AMLD6 + FATF alignment", "Transaction monitoring AI controls", "Sanctions screening governance", "Model risk + bias testing"] },

  // ---- Cybersec pack (6) ----
  "cisa-kev": { slug: "cisa-kev", pkg: "cisa-kev-mcp", name: "io.github.CSOAI-ORG/cisa-kev-mcp", title: "CISA KEV MCP", tagline: "Known Exploited Vulnerabilities catalog with stable-baseline patching SLAs.", pack: "cybersec", features: ["KEV catalog live query", "CISA BOD 22-01 SLA tracking", "Vulnerability + asset linkage", "Patch evidence pack"] },
  "sbom-cyclonedx": { slug: "sbom-cyclonedx", pkg: "sbom-cyclonedx-mcp", name: "io.github.CSOAI-ORG/sbom-cyclonedx-mcp", title: "SBOM CycloneDX MCP", tagline: "Software Bill of Materials in CycloneDX 1.6. EU CRA + US EO 14028 evidence.", pack: "cybersec", features: ["CycloneDX 1.6 generation", "EU CRA Annex I alignment", "US EO 14028 + NIST SSDF", "Component licensing audit"] },
  "mitre-attack": { slug: "mitre-attack", pkg: "mitre-attack-mcp", name: "io.github.CSOAI-ORG/mitre-attack-mcp", title: "MITRE ATT&CK MCP", tagline: "Adversary tactics + techniques mapping. Threat-informed defence baseline.", pack: "cybersec", features: ["ATT&CK tactic + technique catalog", "Detection coverage mapping", "Threat-informed defence pivots", "STIX 2.1 export"] },
  "mitre-atlas": { slug: "mitre-atlas", pkg: "mitre-atlas-mcp", name: "io.github.CSOAI-ORG/mitre-atlas-mcp", title: "MITRE ATLAS MCP", tagline: "Adversarial Threat Landscape for AI Systems. AI-specific attack catalog + defence.", pack: "cybersec", features: ["ATLAS tactic + technique catalog", "ML supply chain attacks", "Prompt injection mappings", "OWASP LLM crosswalk"] },
  "slsa-supply-chain": { slug: "slsa-supply-chain", pkg: "slsa-supply-chain-mcp", name: "io.github.CSOAI-ORG/slsa-supply-chain-mcp", title: "SLSA Supply Chain MCP", tagline: "Supply-chain Levels for Software Artifacts (SLSA v1.0). Provenance + isolation.", pack: "cybersec", features: ["SLSA Level 1-4 evidence", "Build provenance attestations", "Hermetic build verification", "GitHub Actions integration"] },
  "sigstore-cosign": { slug: "sigstore-cosign", pkg: "sigstore-cosign-mcp", name: "io.github.CSOAI-ORG/sigstore-cosign-mcp", title: "Sigstore Cosign MCP", tagline: "Keyless artefact signing with Fulcio + Rekor. Transparent supply-chain provenance.", pack: "cybersec", features: ["Keyless OIDC signing", "Rekor transparency log", "Cosign verify + bundle", "RFC 3161 timestamps"] },

  // ---- Bridge / Legacy (1) ----
  "cobol-bridge": { slug: "cobol-bridge", pkg: "cobol-bridge-mcp", name: "io.github.CSOAI-ORG/cobol-bridge-mcp", title: "COBOL Bridge MCP", tagline: "COBOL ↔ modern stack. Copybook parsing + EBCDIC + JCL + CICS to JSON/REST.", pack: "industry", features: ["Copybook → JSON schema", "EBCDIC ↔ UTF-8 conversion", "JCL + CICS workflow bridge", "Mainframe modernisation prep"] },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

export async function generateStaticParams() {
  return Object.keys(CATALOG).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const mcp = CATALOG[slug];
  if (!mcp) return { title: "MCP not found · MEOK AI Labs" };
  return {
    title: `${mcp.title} · ${mcp.pkg}`,
    description: mcp.tagline,
    alternates: { canonical: `https://meok.ai/mcp/${slug}` },
    openGraph: {
      title: `${mcp.title} · MEOK AI Labs`,
      description: mcp.tagline,
      type: "website",
      url: `https://meok.ai/mcp/${slug}`,
    },
  };
}

export default async function MCPDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mcp = CATALOG[slug];
  if (!mcp) notFound();

  const pypiUrl = `https://pypi.org/project/${mcp.pkg}/`;
  const registryUrl = `https://registry.modelcontextprotocol.io/v0/servers?search=${mcp.pkg}`;
  const githubUrl = `https://github.com/CSOAI-ORG/${mcp.pkg}`;

  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <nav style={{ marginBottom: "1.5rem", fontSize: ".88rem", opacity: .65 }}>
          <Link href="/labs/mcp" style={{ color: NAVY }}>← All MCP servers</Link>
          <span style={{ marginLeft: ".75rem", padding: ".15rem .6rem", border: `1px solid ${GOLD}`, borderRadius: 999, color: GOLD, fontWeight: 600, fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".05em" }}>{mcp.pack}</span>
        </nav>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-.02em", marginBottom: ".5rem" }}>{mcp.title}</h1>
        <p style={{ fontSize: "1.05rem", color: NAVY, opacity: .75, marginBottom: "2rem", lineHeight: 1.55 }}>{mcp.tagline}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: ".75rem", marginBottom: "2.5rem" }}>
          <a href={pypiUrl} target="_blank" rel="noopener noreferrer" style={{ background: NAVY, color: BG, padding: ".95rem 1.25rem", borderRadius: 10, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
            PyPI →
          </a>
          <a href={registryUrl} target="_blank" rel="noopener noreferrer" style={{ background: GOLD, color: NAVY, padding: ".95rem 1.25rem", borderRadius: 10, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
            MCP Registry →
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: NAVY, border: `1px solid ${NAVY}`, padding: ".95rem 1.25rem", borderRadius: 10, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
            GitHub →
          </a>
        </div>

        <section style={{ marginBottom: "2.5rem", padding: "1.5rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}22` }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: ".75rem" }}>Install</h2>
          <pre style={{ background: NAVY, color: BG, padding: "1rem 1.25rem", borderRadius: 10, fontFamily: "ui-monospace,Menlo,monospace", fontSize: ".88rem", overflowX: "auto", margin: 0 }}>
{`# Option 1 — uvx (no install)
uvx ${mcp.pkg}

# Option 2 — pip
pip install ${mcp.pkg}

# Option 3 — npx meok-setup install (recommended)
npx meok-setup --pack ${mcp.pack === "a2a" ? "a2a" : mcp.pack}`}
          </pre>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>What it does</h2>
          <ul style={{ display: "grid", gap: ".75rem", listStyle: "none", padding: 0 }}>
            {mcp.features.map((f, i) => (
              <li key={i} style={{ padding: "1rem 1.25rem", background: "#fff", borderRadius: 10, border: `1px solid ${NAVY}22`, fontSize: ".95rem", lineHeight: 1.5 }}>
                <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>✓</span>{f}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "2.5rem", padding: "1.5rem", background: NAVY, color: BG, borderRadius: 14 }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: ".75rem" }}>Claude Desktop config</h2>
          <pre style={{ background: "rgba(0,0,0,.3)", color: BG, padding: "1rem 1.25rem", borderRadius: 10, fontFamily: "ui-monospace,Menlo,monospace", fontSize: ".82rem", overflowX: "auto", margin: 0 }}>
{`{
  "mcpServers": {
    "${mcp.pkg.replace(/-mcp$/, "")}": {
      "command": "uvx",
      "args": ["${mcp.pkg}"]
    }
  }
}`}
          </pre>
        </section>

        <div style={{ paddingTop: "2rem", borderTop: `1px solid ${NAVY}22`, fontSize: ".88rem", opacity: .7 }}>
          <p style={{ marginBottom: ".5rem" }}>Part of the MEOK governance MCP suite — <Link href="/labs/mcp" style={{ color: NAVY, fontWeight: 600 }}>see all 38 servers</Link></p>
          <p>MIT licensed · HMAC-signed attestations · Built by <a href="https://meok.ai" style={{ color: NAVY, fontWeight: 600 }}>MEOK AI Labs</a></p>
        </div>
      </div>
    </main>
  );
}
