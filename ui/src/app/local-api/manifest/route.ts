// MEOK MCP machine-readable manifest — public discovery surface
// Use case: directories, aggregators, and AI agents can fetch this JSON
// to enumerate every MEOK MCP server in one shot.
//
// URL: https://meok.ai/mcp/manifest.json
// License: CC0 (public domain) — copy and ingest freely

import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600; // re-cache hourly

type ManifestEntry = {
  slug: string;
  registry_name: string;
  pypi_package: string;
  pypi_url: string;
  github_url: string;
  registry_url: string;
  detail_url: string;
  pack: "governance" | "a2a" | "trade" | "industry" | "cybersec";
  title: string;
  tagline: string;
  install: {
    uvx: string;
    pip: string;
    npx_meok_setup: string;
  };
  claude_desktop_config: Record<string, unknown>;
  // NEW (2026-05-16): per-MCP Stripe checkout for direct purchase
  buy_url: string;
  monthly_price_gbp: number;
  tier: "starter";
};

// Per-MCP Stripe payment links (generated 2026-05-16 by monetisation sweep)
// All £29/mo GBP recurring. Metadata includes mcp_slug for webhook routing.
// Master list: ~/clawd/revenue/monetisation_sweep_2026-05-16.md
const BUY_URLS: Record<string, string> = {
  "eu-ai-act-compliance": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "dora-compliance": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "nis2-compliance": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "cra-compliance": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "ai-bom": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "ai-incident-reporting": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "dora-nis2-crosswalk": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "bias-detection": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "watermarking-authenticity": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "uk-ai-bill-compliance": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "agent-prompt-injection-firewall": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "agent-data-residency": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "agent-handoff-certified": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "agent-policy-enforcement": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "agent-audit-logger": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "agent-rate-limiter": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "haulage-uk-compliance": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "skip-hire-ai": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "construction-iso-19650": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "nrswa-ai": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "chas-elite-prep": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "crane-hire-cpcs": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "concrete-pump-cpa": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "mica-crypto": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "fsa-food-safety": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "mdr-medical-device": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "fda-samd": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "coppa-ferpa": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "basel-ai-overlay": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "mifid-ii-ai": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "aml-ai": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "cobol-bridge": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "cisa-kev": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "sbom-cyclonedx": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "mitre-attack": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "mitre-atlas": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "slsa-supply-chain": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "sigstore-cosign": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
  "care-home-cqc": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
};

const ENTRIES: Array<Omit<ManifestEntry, "pypi_url" | "github_url" | "registry_url" | "detail_url" | "install" | "claude_desktop_config" | "buy_url" | "monthly_price_gbp" | "tier">> = [
  // Governance
  { slug: "eu-ai-act-compliance", registry_name: "io.github.CSOAI-ORG/eu-ai-act-compliance-mcp", pypi_package: "eu-ai-act-compliance-mcp", pack: "governance", title: "EU AI Act Compliance MCP", tagline: "410 articles from EUR-Lex via FTS5 search. Instant risk scan + Annex IV evidence pack." },
  { slug: "dora-compliance", registry_name: "io.github.CSOAI-ORG/dora-compliance-mcp", pypi_package: "dora-compliance-mcp", pack: "governance", title: "DORA Compliance MCP", tagline: "Digital Operational Resilience Act for EU financial entities. ICT risk + third-party register." },
  { slug: "nis2-compliance", registry_name: "io.github.CSOAI-ORG/nis2-compliance-mcp", pypi_package: "nis2-compliance-mcp", pack: "governance", title: "NIS2 Compliance MCP", tagline: "EU NIS2 Directive cybersecurity baseline. 10 governance domains + entity classification." },
  { slug: "cra-compliance", registry_name: "io.github.CSOAI-ORG/cra-compliance-mcp", pypi_package: "cra-compliance-mcp", pack: "governance", title: "Cyber Resilience Act MCP", tagline: "EU CRA Annex I classifier + SBOM + vulnerability handling. Sept 2027 cliff." },
  { slug: "ai-bom", registry_name: "io.github.CSOAI-ORG/ai-bom-mcp", pypi_package: "ai-bom-mcp", pack: "governance", title: "AI Bill of Materials MCP", tagline: "CycloneDX ML-BOM 1.6 + SPDX 3.0. Model provenance + training data + dependency tree." },
  { slug: "ai-incident-reporting", registry_name: "io.github.CSOAI-ORG/ai-incident-reporting-mcp", pypi_package: "ai-incident-reporting-mcp", pack: "governance", title: "AI Incident Reporting MCP", tagline: "EU AI Act Article 73 serious-incident reports. 15-day deadline + market surveillance routing." },
  { slug: "dora-nis2-crosswalk", registry_name: "io.github.CSOAI-ORG/dora-nis2-crosswalk-mcp", pypi_package: "dora-nis2-crosswalk-mcp", pack: "governance", title: "DORA × NIS2 Crosswalk MCP", tagline: "Map shared controls across DORA + NIS2 + EU AI Act. One control test, multi-regulation evidence." },
  { slug: "bias-detection", registry_name: "io.github.CSOAI-ORG/bias-detection-mcp", pypi_package: "bias-detection-mcp", pack: "governance", title: "Bias Detection MCP", tagline: "Demographic parity + equalized odds + calibration. EU AI Act Article 10 testing baseline." },
  { slug: "watermarking-authenticity", registry_name: "io.github.CSOAI-ORG/watermarking-authenticity-mcp", pypi_package: "watermarking-authenticity-mcp", pack: "governance", title: "Watermarking + Authenticity MCP", tagline: "C2PA 2.1 + invisible watermark + Sigstore. EU AI Act Article 50 (2 Aug 2026 cliff)." },
  { slug: "uk-ai-bill-compliance", registry_name: "io.github.CSOAI-ORG/uk-ai-bill-compliance-mcp", pypi_package: "uk-ai-bill-compliance-mcp", pack: "governance", title: "UK AI Bill Compliance MCP", tagline: "Pro-innovation UK framework + sectoral regulator mapping (ICO/CMA/FCA/Ofcom)." },
  // A2A
  { slug: "agent-prompt-injection-firewall", registry_name: "io.github.CSOAI-ORG/agent-prompt-injection-firewall-mcp", pypi_package: "agent-prompt-injection-firewall-mcp", pack: "a2a", title: "Prompt Injection Firewall MCP", tagline: "OWASP LLM01 defence. Multi-layer detection: regex, embeddings, behavioural drift." },
  { slug: "agent-data-residency", registry_name: "io.github.CSOAI-ORG/agent-data-residency-mcp", pypi_package: "agent-data-residency-mcp", pack: "a2a", title: "Agent Data Residency MCP", tagline: "Enforce data locality (EU/UK/US/CN) for agent context + tool calls. GDPR + Schrems II." },
  { slug: "agent-handoff-certified", registry_name: "io.github.CSOAI-ORG/agent-handoff-certified-mcp", pypi_package: "agent-handoff-certified-mcp", pack: "a2a", title: "Certified Agent Handoff MCP", tagline: "HMAC-signed context transfer between agents. Audit chain + non-repudiation." },
  { slug: "agent-policy-enforcement", registry_name: "io.github.CSOAI-ORG/agent-policy-enforcement-mcp", pypi_package: "agent-policy-enforcement-mcp", pack: "a2a", title: "Agent Policy Enforcement MCP", tagline: "OPA-style policy-as-code for agent tool use. Inline allow/deny + audit." },
  { slug: "agent-audit-logger", registry_name: "io.github.CSOAI-ORG/agent-audit-logger-mcp", pypi_package: "agent-audit-logger-mcp", pack: "a2a", title: "Agent Audit Logger MCP", tagline: "Tamper-evident append-only log of every agent action. Merkle-root anchored." },
  { slug: "agent-rate-limiter", registry_name: "io.github.CSOAI-ORG/agent-rate-limiter-mcp", pypi_package: "agent-rate-limiter-mcp", pack: "a2a", title: "Agent Rate Limiter MCP", tagline: "Token bucket + leaky bucket rate limits per agent + per tool." },
  // Trade
  { slug: "haulage-uk-compliance", registry_name: "io.github.CSOAI-ORG/haulage-uk-compliance-mcp", pypi_package: "haulage-uk-compliance-mcp", pack: "trade", title: "UK Haulage Compliance MCP", tagline: "Operator licence + tacho + DVSA roadside + WTD." },
  { slug: "skip-hire-ai", registry_name: "io.github.CSOAI-ORG/skip-hire-ai-mcp", pypi_package: "skip-hire-ai-mcp", pack: "trade", title: "Skip Hire AI MCP", tagline: "Waste carrier licence + duty of care + transfer notes. EA + SEPA + NRW." },
  { slug: "construction-iso-19650", registry_name: "io.github.CSOAI-ORG/construction-iso-19650-mcp", pypi_package: "construction-iso-19650-mcp", pack: "trade", title: "ISO 19650 BIM MCP", tagline: "BIM information management. CDE + EIR + BEP." },
  { slug: "nrswa-ai", registry_name: "io.github.CSOAI-ORG/nrswa-ai-mcp", pypi_package: "nrswa-ai-mcp", pack: "trade", title: "NRSWA Compliance MCP", tagline: "New Roads + Street Works Act. Permits + reinstatement + Section 74." },
  { slug: "chas-elite-prep", registry_name: "io.github.CSOAI-ORG/chas-elite-prep-mcp", pypi_package: "chas-elite-prep-mcp", pack: "trade", title: "CHAS Elite Prep MCP", tagline: "CHAS Elite accreditation prep. Health + safety + finance + environment." },
  { slug: "crane-hire-cpcs", registry_name: "io.github.CSOAI-ORG/crane-hire-cpcs-mcp", pypi_package: "crane-hire-cpcs-mcp", pack: "trade", title: "Crane Hire CPCS MCP", tagline: "CPCS + LOLER + BS 7121. Lift planning + operator competence." },
  { slug: "concrete-pump-cpa", registry_name: "io.github.CSOAI-ORG/concrete-pump-cpa-mcp", pypi_package: "concrete-pump-cpa-mcp", pack: "trade", title: "Concrete Pump CPA MCP", tagline: "CPA + ICDS guidance. Outrigger + boom safety + operator competence." },
  // Industry
  { slug: "mica-crypto", registry_name: "io.github.CSOAI-ORG/mica-crypto-mcp", pypi_package: "mica-crypto-mcp", pack: "industry", title: "MiCA Crypto Compliance MCP", tagline: "EU Markets in Crypto-Assets Regulation. CASP licence + whitepaper + market abuse." },
  { slug: "fsa-food-safety", registry_name: "io.github.CSOAI-ORG/fsa-food-safety-mcp", pypi_package: "fsa-food-safety-mcp", pack: "industry", title: "FSA Food Safety MCP", tagline: "HACCP + allergen + traceability. FSA inspection prep + Natasha's Law." },
  { slug: "mdr-medical-device", registry_name: "io.github.CSOAI-ORG/mdr-medical-device-mcp", pypi_package: "mdr-medical-device-mcp", pack: "industry", title: "EU MDR Medical Device MCP", tagline: "Medical Device Regulation. Classification + technical file + UDI + PMS." },
  { slug: "fda-samd", registry_name: "io.github.CSOAI-ORG/fda-samd-mcp", pypi_package: "fda-samd-mcp", pack: "industry", title: "FDA SaMD MCP", tagline: "Software as a Medical Device. IMDRF risk + 510(k) + De Novo + PMA routing." },
  { slug: "coppa-ferpa", registry_name: "io.github.CSOAI-ORG/coppa-ferpa-mcp", pypi_package: "coppa-ferpa-mcp", pack: "industry", title: "COPPA + FERPA MCP", tagline: "US child + student data privacy. COPPA verifiable parental consent + FERPA SAR." },
  { slug: "basel-ai-overlay", registry_name: "io.github.CSOAI-ORG/basel-ai-overlay-mcp", pypi_package: "basel-ai-overlay-mcp", pack: "industry", title: "Basel III AI Overlay MCP", tagline: "EU CRR / Basel III + model risk management (SS1/23, SR 11-7)." },
  { slug: "mifid-ii-ai", registry_name: "io.github.CSOAI-ORG/mifid-ii-ai-mcp", pypi_package: "mifid-ii-ai-mcp", pack: "industry", title: "MiFID II AI MCP", tagline: "Algo trading governance (RTS 6) + best execution + product governance." },
  { slug: "aml-ai", registry_name: "io.github.CSOAI-ORG/aml-ai-mcp", pypi_package: "aml-ai-mcp", pack: "industry", title: "AML / KYC AI MCP", tagline: "EU AMLD6 + FATF + FinCEN. AI in transaction monitoring + KYC + sanctions." },
  { slug: "cobol-bridge", registry_name: "io.github.CSOAI-ORG/cobol-bridge-mcp", pypi_package: "cobol-bridge-mcp", pack: "industry", title: "COBOL Bridge MCP", tagline: "COBOL ↔ modern stack. Copybook parsing + EBCDIC + JCL + CICS to JSON/REST." },
  // Cybersec
  { slug: "cisa-kev", registry_name: "io.github.CSOAI-ORG/cisa-kev-mcp", pypi_package: "cisa-kev-mcp", pack: "cybersec", title: "CISA KEV MCP", tagline: "Known Exploited Vulnerabilities catalog with stable-baseline patching SLAs." },
  { slug: "sbom-cyclonedx", registry_name: "io.github.CSOAI-ORG/sbom-cyclonedx-mcp", pypi_package: "sbom-cyclonedx-mcp", pack: "cybersec", title: "SBOM CycloneDX MCP", tagline: "Software Bill of Materials in CycloneDX 1.6. EU CRA + US EO 14028 evidence." },
  { slug: "mitre-attack", registry_name: "io.github.CSOAI-ORG/mitre-attack-mcp", pypi_package: "mitre-attack-mcp", pack: "cybersec", title: "MITRE ATT&CK MCP", tagline: "Adversary tactics + techniques mapping. Threat-informed defence baseline." },
  { slug: "mitre-atlas", registry_name: "io.github.CSOAI-ORG/mitre-atlas-mcp", pypi_package: "mitre-atlas-mcp", pack: "cybersec", title: "MITRE ATLAS MCP", tagline: "Adversarial Threat Landscape for AI Systems. AI-specific attack catalog + defence." },
  { slug: "slsa-supply-chain", registry_name: "io.github.CSOAI-ORG/slsa-supply-chain-mcp", pypi_package: "slsa-supply-chain-mcp", pack: "cybersec", title: "SLSA Supply Chain MCP", tagline: "Supply-chain Levels for Software Artifacts (SLSA v1.0)." },
  { slug: "sigstore-cosign", registry_name: "io.github.CSOAI-ORG/sigstore-cosign-mcp", pypi_package: "sigstore-cosign-mcp", pack: "cybersec", title: "Sigstore Cosign MCP", tagline: "Keyless artefact signing with Fulcio + Rekor." },
  // Care
  { slug: "care-home-cqc", registry_name: "io.github.CSOAI-ORG/care-home-cqc-mcp", pypi_package: "care-home-cqc-mcp", pack: "industry", title: "Care Home CQC MCP", tagline: "UK CQC Single Assessment Framework. KLOEs evidence + medication management (NICE NG5) + DSPT alignment." },
];

export async function GET() {
  const expanded: ManifestEntry[] = ENTRIES.map((e) => ({
    ...e,
    pypi_url: `https://pypi.org/project/${e.pypi_package}/`,
    github_url: `https://github.com/CSOAI-ORG/${e.pypi_package}`,
    registry_url: `https://registry.modelcontextprotocol.io/v0/servers?search=${e.pypi_package}`,
    detail_url: `https://meok.ai/mcp/${e.slug}`,
    install: {
      uvx: `uvx ${e.pypi_package}`,
      pip: `pip install ${e.pypi_package}`,
      npx_meok_setup: `npx meok-setup --pack ${e.pack}`,
    },
    claude_desktop_config: {
      mcpServers: {
        [e.pypi_package.replace(/-mcp$/, "")]: {
          command: "uvx",
          args: [e.pypi_package],
        },
      },
    },
    // NEW (2026-05-16): direct-to-checkout deep link per MCP
    buy_url: BUY_URLS[e.slug] || `https://meok.ai/pricing#${e.slug}`,
    monthly_price_gbp: 29,
    tier: "starter" as const,
  }));

  const manifest = {
    $schema: "https://meok.ai/mcp/manifest.schema.json",
    publisher: "MEOK AI Labs",
    publisher_url: "https://meok.ai",
    license: "MIT (each MCP) · CC0 (this manifest)",
    last_updated: new Date().toISOString(),
    total: expanded.length,
    packs: {
      governance: expanded.filter((e) => e.pack === "governance").length,
      a2a: expanded.filter((e) => e.pack === "a2a").length,
      trade: expanded.filter((e) => e.pack === "trade").length,
      industry: expanded.filter((e) => e.pack === "industry").length,
      cybersec: expanded.filter((e) => e.pack === "cybersec").length,
    },
    one_shot_install: "npx meok-setup --pack all",
    attestation_api: "https://meok-attestation-api.vercel.app",
    servers: expanded,
  };

  return NextResponse.json(manifest, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
