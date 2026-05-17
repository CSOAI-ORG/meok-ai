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

  // ---- Care (1) ----
  "care-home-cqc": { slug: "care-home-cqc", pkg: "care-home-cqc-mcp", name: "io.github.CSOAI-ORG/care-home-cqc-mcp", title: "Care Home CQC MCP", tagline: "UK CQC Single Assessment Framework. KLOEs evidence + medication management (NICE NG5) + DSPT alignment.", pack: "industry", features: ["CQC KLOEs evidence collation", "Single Assessment Framework prep", "NICE NG5 medication management", "DSPT alignment + inspection drills"] },
};

// Per-MCP Stripe payment links — generated 2026-05-16 by monetisation sweep
// All £29/mo GBP recurring with 14-day free trial. Master list in monetisation_sweep_2026-05-16.md
// Pro tier (£79-£99/mo) URLs in PRO_URLS below — Pro CTA renders only when set.
// 4 MCPs ARCHIVED (sigstore-cosign, mitre-attack, mitre-atlas, cisa-kev) — these wrap free upstream services so paid tier doesn't make sense; their pages now point at the MEOK Defence bundle.
const BUY_URLS: Record<string, string> = {
  "eu-ai-act-compliance": "https://buy.stripe.com/dRm8wRdkEcMO4c5dCU8k83O",
  "dora-compliance": "https://buy.stripe.com/7sYaEZbcw5km8sl56o8k83P",
  "nis2-compliance": "https://buy.stripe.com/3cI8wR3K4aEG7oh56o8k83Q",
  "cra-compliance": "https://buy.stripe.com/aFa5kFa8s9AC23XgP68k83R",
  "ai-bom": "https://buy.stripe.com/bJeeVf3K428agYR9mE8k83S",
  "ai-incident-reporting": "https://buy.stripe.com/3cI7sNfsMaEG5g9dCU8k83T",
  "dora-nis2-crosswalk": "https://buy.stripe.com/aFa5kF1BW146gYRdCU8k83U",
  "bias-detection": "https://buy.stripe.com/fZu14p4O8fZ06kd6as8k83V",
  "watermarking-authenticity": "https://buy.stripe.com/cNi00l94o6oqgYR9mE8k83W",
  "uk-ai-bill-compliance": "https://buy.stripe.com/cNi4gB80kdQS9wpdCU8k83X",
  "agent-prompt-injection-firewall": "https://buy.stripe.com/6oUcN73K45kmfUNcyQ8k83Y",
  "agent-data-residency": "https://buy.stripe.com/6oU00l5Sc28aaAt0Q88k83Z",
  "agent-handoff-certified": "https://buy.stripe.com/5kQ4gB1BWbIKdMFeGY8k840",
  "agent-policy-enforcement": "https://buy.stripe.com/00w28t94o5km38156o8k841",
  "agent-audit-logger": "https://buy.stripe.com/8x2eVf1BW9ACaAt1Uc8k842",
  "agent-rate-limiter": "https://buy.stripe.com/4gMeVfa8sfZ07ohfL28k843",
  "haulage-uk-compliance": "https://buy.stripe.com/4gMbJ3fsM28a381fL28k844",
  "skip-hire-ai": "https://buy.stripe.com/4gM8wR6Wg8wy4c5gP68k845",
  "construction-iso-19650": "https://buy.stripe.com/eVq9AV0xSeUW6kdeGY8k846",
  "nrswa-ai": "https://buy.stripe.com/7sYdRbcgA1466kd0Q88k847",
  "chas-elite-prep": "https://buy.stripe.com/9B6aEZ94ocMO6kdcyQ8k900",
  "crane-hire-cpcs": "https://buy.stripe.com/14AcN70xS6oq8sl56o8k901",
  "concrete-pump-cpa": "https://buy.stripe.com/fZu3cxa8seUW6kdfL28k902",
  "mica-crypto": "https://buy.stripe.com/00wdRbcgAaEG9wpfL28k903",
  "fsa-food-safety": "https://buy.stripe.com/7sYbJ3gwQeUW5g91Uc8k904",
  // mdr-medical-device + fda-samd intentionally OMITTED:
  // Selling medical-device regulatory tools without FDA/MDR credentialing
  // is legally risky. See ARCHIVED_BUNDLE_UPSELL below.
  "coppa-ferpa": "https://buy.stripe.com/28EfZj6WgfZ03818iA8k907",
  "basel-ai-overlay": "https://buy.stripe.com/eVqbJ36Wg5km9wpfL28k908",
  "mifid-ii-ai": "https://buy.stripe.com/14A3cxfsM28a5g90Q88k909",
  "aml-ai": "https://buy.stripe.com/aFa7sN80k6oqeQJ0Q88k90a",
  "cobol-bridge": "https://buy.stripe.com/6oU28tdkE8wyeQJ6as8k90b",
  "cisa-kev": "https://buy.stripe.com/4gM00lgwQ00223X42k8k90c",
  "sbom-cyclonedx": "https://buy.stripe.com/00w9AV4O828a6kd56o8k90d",
  "mitre-attack": "https://buy.stripe.com/eVqdRbdkE9ACfUN6as8k90e",
  "mitre-atlas": "https://buy.stripe.com/28E8wRbcw0024c5fL28k90f",
  "slsa-supply-chain": "https://buy.stripe.com/28E00lbcw28a8sl0Q88k90g",
  "care-home-cqc":     "https://buy.stripe.com/8x2fZj80k5km9wpbuM8k90n",
  // sigstore-cosign + mitre-attack + mitre-atlas + cisa-kev intentionally OMITTED:
  // they wrap free upstream services — see ARCHIVED_BUNDLE_UPSELL below.
};

// Pro tier URLs (£79-£99/mo, 14-day trial) — only set for high-value enterprise MCPs.
// When set, the slug page renders a second "Subscribe Pro" button alongside Starter.
const PRO_URLS: Record<string, { url: string; price: string }> = {
  "eu-ai-act-compliance":  { url: "https://buy.stripe.com/7sY14p3K4dQSaAt0Q88k90i", price: "£79" },
  "dora-compliance":       { url: "https://buy.stripe.com/3cI8wRbcwaEG23X56o8k90j", price: "£79" },
  "nis2-compliance":       { url: "https://buy.stripe.com/7sY4gBbcw9ACfUN0Q88k90k", price: "£79" },
  // mdr-medical-device + fda-samd intentionally omitted (legal risk without credentialing)
};

// MCPs whose Stripe products are archived. Two categories:
// (a) wrap-free-upstream (sigstore/MITRE/CISA) — paid tier doesn't make sense
// (b) legal-risk-without-credentialing (medical device) — won't sell these
// All show "this MCP is free + MEOK Defence £499/mo for signed bundle" on their slug page.
const ARCHIVED_BUNDLE_UPSELL: Record<string, "free-upstream" | "legal-risk"> = {
  "sigstore-cosign": "free-upstream",
  "mitre-attack": "free-upstream",
  "mitre-atlas": "free-upstream",
  "cisa-kev": "free-upstream",
  "mdr-medical-device": "legal-risk",
  "fda-samd": "legal-risk",
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const PRIMARY = "#3B82F6"; // anchor blue — Buy CTA

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
  const buyUrl = BUY_URLS[slug];
  const proInfo = PRO_URLS[slug];
  const isArchivedBundleUpsell = ARCHIVED_BUNDLE_UPSELL[slug] || null;

  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <nav style={{ marginBottom: "1.5rem", fontSize: ".88rem", opacity: .65 }}>
          <Link href="/labs/mcp" style={{ color: NAVY }}>← All MCP servers</Link>
          <span style={{ marginLeft: ".75rem", padding: ".15rem .6rem", border: `1px solid ${GOLD}`, borderRadius: 999, color: GOLD, fontWeight: 600, fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".05em" }}>{mcp.pack}</span>
        </nav>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-.02em", marginBottom: ".5rem" }}>{mcp.title}</h1>
        <p style={{ fontSize: "1.05rem", color: NAVY, opacity: .75, marginBottom: "2rem", lineHeight: 1.55 }}>{mcp.tagline}</p>

        {isArchivedBundleUpsell === "free-upstream" && (
          <section style={{ marginBottom: "2rem", padding: "1.5rem", background: NAVY, color: BG, borderRadius: 14 }}>
            <div style={{ fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".08em", opacity: .8, marginBottom: ".25rem" }}>Free MCP · open-source wrapper</div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: ".5rem" }}>This MCP is free</h2>
            <p style={{ fontSize: ".95rem", opacity: .85, marginBottom: "1rem", lineHeight: 1.55 }}>
              It wraps a free upstream service (sigstore, MITRE, or CISA data). Use it without subscription.
              For <strong>signed bundles, monitoring, and 24h SLA across all MEOK MCPs</strong>,
              consider MEOK Defence at £499/mo.
            </p>
            <a href="https://meok.ai/pricing" style={{ background: GOLD, color: NAVY, padding: ".75rem 1.25rem", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>
              See MEOK Defence £499/mo →
            </a>
          </section>
        )}

        {isArchivedBundleUpsell === "legal-risk" && (
          <section style={{ marginBottom: "2rem", padding: "1.5rem", background: "#7C3F1B", color: "#fff", borderRadius: 14 }}>
            <div style={{ fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".08em", opacity: .9, marginBottom: ".25rem" }}>Information only · not for sale</div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: ".5rem" }}>Medical-device compliance — informational reference only</h2>
            <p style={{ fontSize: ".95rem", opacity: .92, marginBottom: "1rem", lineHeight: 1.55 }}>
              This MCP is a reference implementation of EU MDR / FDA SaMD requirements. <strong>It is not a regulated medical device, not a substitute for Notified Body / FDA submissions, and we don&apos;t hold the credentialing to sell it as a compliance product.</strong> Use the open-source code freely; for an actual medical-device regulatory submission, engage a qualified Notified Body or FDA agent.
            </p>
            <a href={`https://github.com/CSOAI-ORG/${mcp.pkg}`} target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#7C3F1B", padding: ".75rem 1.25rem", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>
              View on GitHub (MIT)
            </a>
          </section>
        )}

        {buyUrl && !isArchivedBundleUpsell && (
          <>
            {/* Urgency banner — governance MCPs face EU AI Act 2 Aug 2026 cliff */}
            {mcp.pack === "governance" && (
              <div style={{ marginBottom: ".75rem", padding: ".75rem 1.25rem", background: "#FB923C", color: "#fff", borderRadius: 10, fontSize: ".88rem", fontWeight: 600 }}>
                ⏰ EU AI Act Article 50 transparency obligations apply <strong>2 Nov 2026</strong>; high-risk Annex III obligations <strong>2 Dec 2027</strong>. First-10 subscribers lock today&apos;s £29/mo for life.
              </div>
            )}
            {mcp.pack === "a2a" && (
              <div style={{ marginBottom: ".75rem", padding: ".75rem 1.25rem", background: "#FB923C", color: "#fff", borderRadius: 10, fontSize: ".88rem", fontWeight: 600 }}>
                ⏰ Agent compliance is now an active DRCF concern (ICO+FCA+CMA+Ofcom joint statement, May 2026). First-10 subscribers lock today&apos;s £29/mo for life.
              </div>
            )}
            {mcp.pack === "industry" && (
              <div style={{ marginBottom: ".75rem", padding: ".75rem 1.25rem", background: "#FB923C", color: "#fff", borderRadius: 10, fontSize: ".88rem", fontWeight: 600 }}>
                ⏰ Vertical regulatory cliffs are live now (DORA in force, MiCA effective, FDA AI/ML guidance enforced). First-10 subscribers lock today&apos;s £29/mo for life.
              </div>
            )}
            {mcp.pack === "trade" && (
              <div style={{ marginBottom: ".75rem", padding: ".75rem 1.25rem", background: "#FB923C", color: "#fff", borderRadius: 10, fontSize: ".88rem", fontWeight: 600 }}>
                ⏰ DVSA/CHAS/LOLER audits run year-round — one failed inspection costs £5-15k. First-10 subscribers lock today&apos;s £29/mo for life.
              </div>
            )}
            {mcp.pack === "cybersec" && (
              <div style={{ marginBottom: ".75rem", padding: ".75rem 1.25rem", background: "#FB923C", color: "#fff", borderRadius: 10, fontSize: ".88rem", fontWeight: 600 }}>
                ⏰ EU CRA (Sept 2027 cliff) + US EO 14028 + NIS2 all require SBOMs + signed artefacts now. First-10 subscribers lock today&apos;s £29/mo for life.
              </div>
            )}

            <section style={{ marginBottom: ".75rem", padding: "1.5rem", background: PRIMARY, color: "#fff", borderRadius: 14, boxShadow: "0 6px 24px rgba(59,130,246,.18)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <div>
                  <div style={{ fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".08em", opacity: .9, marginBottom: ".25rem" }}>Starter · 14 days free</div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 800, letterSpacing: "-.01em" }}>£29 <span style={{ fontSize: "1rem", fontWeight: 500, opacity: .85 }}>/ month, after trial</span></div>
                  <div style={{ fontSize: ".88rem", opacity: .9, marginTop: ".35rem", maxWidth: 480 }}>Signed attestations + unlimited audits + email support. Trial = £0 for 14 days, cancel anytime. Use code <code style={{ background: "rgba(0,0,0,.2)", padding: ".1rem .35rem", borderRadius: 4 }}>FREE14</code> for first month free.</div>
                </div>
                <a href={buyUrl} style={{ background: "#fff", color: PRIMARY, padding: "1rem 1.75rem", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: "1.05rem", boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}>
                  Start 14-day trial →
                </a>
              </div>
            </section>

            {/* Pro tier — only renders for the 5 high-value enterprise MCPs */}
            {proInfo && (
              <section style={{ marginBottom: "2rem", padding: "1.25rem 1.5rem", background: NAVY, color: BG, borderRadius: 14, border: `2px solid ${GOLD}` }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div>
                    <div style={{ fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".08em", color: GOLD, fontWeight: 700, marginBottom: ".25rem" }}>★ Pro · 14 days free · Recommended</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{proInfo.price} <span style={{ fontSize: ".95rem", fontWeight: 500, opacity: .8 }}>/ month, after trial</span></div>
                    <div style={{ fontSize: ".88rem", opacity: .85, marginTop: ".35rem", maxWidth: 480 }}>Everything in Starter + priority support + 24h SLA + monthly regulatory brief + custom-domain signing endpoint.</div>
                  </div>
                  <a href={proInfo.url} style={{ background: GOLD, color: NAVY, padding: "1rem 1.75rem", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: "1.05rem" }}>
                    Start Pro trial →
                  </a>
                </div>
              </section>
            )}
          </>
        )}

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
