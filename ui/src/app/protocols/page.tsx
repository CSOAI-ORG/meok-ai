import type { Metadata } from "next";
import Link from "next/link";

// ---------------------------------------------------------------------------
// /protocols — Definitive coverage matrix.
//
// Procurement-team reference page: which of the 8 live agent-interop protocols
// + 30+ regulatory frameworks does each of MEOK's 47 MCPs support.
// ---------------------------------------------------------------------------

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const GREEN = "#7BC47F";
const RED = "#dc2626";

export const metadata: Metadata = {
  title: "MEOK Protocol Coverage — 8 agent-interop protocols + 30+ regulatory frameworks",
  description:
    "Definitive coverage matrix: which of the 8 live agent-interop protocols (MCP, A2A, IBM ACP, Stripe ACP, AP2, x402, OASF, ANP) and 30+ regulatory frameworks each of MEOK's 47 MCPs supports.",
  alternates: { canonical: "https://meok.ai/protocols" },
  openGraph: {
    title: "MEOK Protocol Coverage — 8 protocols × 30+ frameworks × 47 MCPs",
    description: "The only A2A substrate that bridges MCP + A2A + IBM ACP + Stripe ACP + AP2 + x402 + OASF + ANP.",
    type: "website",
    url: "https://meok.ai/protocols",
    siteName: "MEOK.AI",
  },
};

type ProtoStatus = "native" | "bridge" | "via" | "partial" | "roadmap" | "watch";

const PROTOCOLS: { id: string; name: string; owner: string; layer: string; status: ProtoStatus; note?: string }[] = [
  { id: "mcp", name: "MCP", owner: "Anthropic", layer: "Agent → tools/data", status: "native", note: "All 47 MCPs" },
  { id: "a2a", name: "A2A", owner: "Google + Linux Foundation", layer: "Agent ↔ agent", status: "native", note: "12 A2A MCPs + Substrate" },
  { id: "ibm-acp", name: "IBM ACP", owner: "IBM Research (was)", layer: "Agent messaging", status: "via", note: "Merged into A2A Sept 2025" },
  { id: "stripe-acp", name: "Stripe ACP", owner: "Stripe + OpenAI", layer: "Agent commerce in ChatGPT", status: "roadmap", note: "Q3 — agent-commerce-protocol-mcp" },
  { id: "ap2", name: "AP2", owner: "Google + 60 orgs", layer: "Cross-platform payments + mandates", status: "partial", note: "agent-commerce-payments-mcp PSD2/MiCA; AP2 mandates Q3" },
  { id: "x402", name: "x402", owner: "Coinbase", layer: "HTTP 402 pay-per-call", status: "partial", note: "api.meok.ai gateway returns 402 → settle on-chain" },
  { id: "oasf", name: "OASF / AGNTCY", owner: "Cisco Outshift + Linux Foundation", layer: "Agent schema + directory", status: "roadmap", note: "Q3 — oasf-agent-directory-mcp" },
  { id: "anp", name: "ANP", owner: "Cisco", layer: "Agent network discovery", status: "watch", note: "Early — watch-list" },
];

const FRAMEWORKS = [
  { code: "EU AI Act", date: "In force · Art 50 cliff Aug 2026 · Annex III Dec 2027", status: "native" as ProtoStatus, mcp: "eu-ai-act-compliance-mcp" },
  { code: "DORA", date: "In force · 17 Jan 2025", status: "native" as ProtoStatus, mcp: "dora-compliance-mcp" },
  { code: "NIS2", date: "In force · DE 6 Mar 2026", status: "native" as ProtoStatus, mcp: "nis2-compliance-mcp + meok-nis2-de-register-mcp" },
  { code: "EU Cyber Resilience Act", date: "In force · 11 Dec 2027", status: "native" as ProtoStatus, mcp: "cra-compliance-mcp" },
  { code: "GDPR", date: "In force since 2018", status: "via" as ProtoStatus, mcp: "agent-data-residency-mcp (Chapter V transfers)" },
  { code: "EU Product Liability Directive", date: "In force · nat'l by Dec 2026 · replaced AI Liability", status: "roadmap" as ProtoStatus, mcp: "Q3 — eu-product-liability-mcp" },
  { code: "EU Code of Practice (GenAI)", date: "Voluntary signing window", status: "partial" as ProtoStatus, mcp: "watermarking-authenticity-mcp" },
  { code: "EUDI Wallet / eIDAS 2.0", date: "EU rollout 2026", status: "roadmap" as ProtoStatus, mcp: "Q3 — eudi-wallet-mcp" },
  { code: "UK AI Bill / AI(Reg) Bill", date: "ATRS mandated; full Act pending", status: "native" as ProtoStatus, mcp: "uk-ai-bill-compliance-mcp" },
  { code: "UK DSIT AI Code of Practice", date: "Voluntary", status: "partial" as ProtoStatus, mcp: "uk-ai-bill-compliance-mcp" },
  { code: "ISO/IEC 42001:2023 (AIMS)", date: "Published", status: "native" as ProtoStatus, mcp: "ai-self-audit-mcp" },
  { code: "ISO/IEC 42005:2025 (Impact)", date: "Published May 2025", status: "roadmap" as ProtoStatus, mcp: "Q3 — iso-42005-impact-mcp" },
  { code: "ISO/IEC TS 25058 (LLM eval)", date: "Published late 2025", status: "roadmap" as ProtoStatus, mcp: "Q3 — iso-25058-llm-eval-mcp" },
  { code: "NIST AI RMF 1.0 + 600-1", date: "Published", status: "native" as ProtoStatus, mcp: "ai-bom-mcp + bias-detection-mcp" },
  { code: "NIST AI 100-2 E2025 (Adversarial)", date: "March 2025 · adds AI agent vulns", status: "partial" as ProtoStatus, mcp: "agent-prompt-injection-firewall-mcp" },
  { code: "MITRE ATT&CK", date: "Updated", status: "native" as ProtoStatus, mcp: "mitre-attack-mcp" },
  { code: "MITRE ATLAS (2026)", date: "Updated", status: "native" as ProtoStatus, mcp: "mitre-atlas-mcp" },
  { code: "OWASP LLM Top 10 (2025)", date: "Updated", status: "partial" as ProtoStatus, mcp: "agent-prompt-injection-firewall-mcp (LLM01)" },
  { code: "CISA KEV", date: "Continuous", status: "native" as ProtoStatus, mcp: "cisa-kev-mcp" },
  { code: "SBOM CycloneDX 1.6 + SPDX 3.0", date: "Current", status: "native" as ProtoStatus, mcp: "ai-bom-mcp + sbom-cyclonedx-mcp" },
  { code: "SLSA v1.1 (provenance)", date: "Current", status: "native" as ProtoStatus, mcp: "slsa-supply-chain-mcp" },
  { code: "Sigstore + Rekor + in-toto", date: "Current", status: "native" as ProtoStatus, mcp: "sigstore-cosign-mcp" },
  { code: "in-toto attestations", date: "CNCF", status: "roadmap" as ProtoStatus, mcp: "Q3 — in-toto-attest-mcp" },
  { code: "W3C DID v2 + VC 2.0", date: "v2 in draft", status: "partial" as ProtoStatus, mcp: "agent-identity-trust-mcp" },
  { code: "OID4VC + OID4VP", date: "Current", status: "roadmap" as ProtoStatus, mcp: "Q3 — oid4vc-bridge-mcp" },
  { code: "mDoc (ISO 18013-5)", date: "Current", status: "roadmap" as ProtoStatus, mcp: "Bridge in agent-identity-trust-mcp" },
  { code: "EO 14028 (US Federal SBOM)", date: "In force", status: "native" as ProtoStatus, mcp: "sbom-cyclonedx-mcp + slsa-supply-chain-mcp" },
  { code: "US OMB M-24-10 + M-24-18", date: "In force for federal", status: "roadmap" as ProtoStatus, mcp: "Q3 — us-omb-federal-ai-mcp" },
  { code: "Canada AIDA", date: "In legislative process", status: "native" as ProtoStatus, mcp: "canada-aida-ai-mcp" },
  { code: "Korea AI Basic Act", date: "In force · 22 Jan 2026", status: "roadmap" as ProtoStatus, mcp: "Q3 — korea-ai-basic-act-mcp" },
  { code: "Japan AI Promotion Act", date: "2025 · honour-only", status: "roadmap" as ProtoStatus, mcp: "Q3 — japan-ai-promotion-mcp" },
  { code: "Singapore AI Verify", date: "Live testing toolkit", status: "roadmap" as ProtoStatus, mcp: "Q3 — singapore-ai-verify-mcp" },
  { code: "Australia Mandatory Guardrails", date: "Q3 2026 consultation", status: "roadmap" as ProtoStatus, mcp: "Q3 — australia-guardrails-mcp" },
  { code: "UAE National AI Charter", date: "2024", status: "roadmap" as ProtoStatus, mcp: "Q3 — uae-ai-charter-mcp" },
  { code: "China Interim Measures GenAI", date: "In force", status: "watch" as ProtoStatus, mcp: "Watch-list" },
  { code: "Brazil PL 21/20", date: "Legislative process", status: "watch" as ProtoStatus, mcp: "Watch-list" },
  { code: "MiCA (Crypto)", date: "In force", status: "native" as ProtoStatus, mcp: "mica-crypto-mcp" },
  { code: "Basel III AI Overlay + FRTB", date: "Implementation", status: "native" as ProtoStatus, mcp: "basel-ai-overlay-mcp" },
  { code: "MiFID II AI", date: "In force", status: "native" as ProtoStatus, mcp: "mifid-ii-ai-mcp" },
  { code: "AML / 6AMLD / FinCEN", date: "Current", status: "native" as ProtoStatus, mcp: "aml-ai-mcp" },
  { code: "MDR + IVDR (EU MedTech)", date: "In force", status: "native" as ProtoStatus, mcp: "mdr-medical-device-mcp" },
  { code: "FDA SaMD Action Plan", date: "Current", status: "native" as ProtoStatus, mcp: "fda-samd-mcp" },
  { code: "COPPA + FERPA + AADC", date: "In force", status: "native" as ProtoStatus, mcp: "coppa-ferpa-mcp" },
  { code: "UK FSA + EU Reg 178/2002", date: "In force", status: "native" as ProtoStatus, mcp: "fsa-food-safety-mcp" },
  { code: "ENISA AI Threat Landscape", date: "Annual + 2026 update", status: "partial" as ProtoStatus, mcp: "agent-prompt-injection-firewall-mcp" },
  { code: "ML-DSA-65 / FIPS 204 (PQ sig)", date: "Aug 2024 finalised", status: "roadmap" as ProtoStatus, mcp: "Q3 upgrade in agent-audit-logger-mcp" },
  { code: "HPKE (RFC 9180)", date: "Current", status: "roadmap" as ProtoStatus, mcp: "Q3 attestation channels" },
  { code: "zkML proofs (Risc Zero, EZKL)", date: "Emerging", status: "roadmap" as ProtoStatus, mcp: "Q3 — zkml-attestation-mcp" },
  { code: "AWS Nitro + Intel TDX + AMD SEV-SNP", date: "Current", status: "roadmap" as ProtoStatus, mcp: "Q3 — tee-attest-mcp" },
];

function StatusBadge({ status }: { status: ProtoStatus }) {
  const styles: Record<ProtoStatus, { color: string; bg: string; label: string }> = {
    native: { color: GREEN, bg: "rgba(123,196,127,0.15)", label: "✓ Native" },
    via: { color: GREEN, bg: "rgba(123,196,127,0.1)", label: "✓ Via merge" },
    partial: { color: GOLD, bg: "rgba(201,168,76,0.15)", label: "◐ Partial" },
    bridge: { color: GOLD, bg: "rgba(201,168,76,0.15)", label: "◐ Bridge" },
    roadmap: { color: "#3B82F6", bg: "rgba(59,130,246,0.12)", label: "→ Q3 2026" },
    watch: { color: `${NAVY}66`, bg: `${NAVY}10`, label: "👁 Watch" },
  };
  const s = styles[status];
  return (
    <span style={{ display: "inline-block", padding: "2px 8px", background: s.bg, color: s.color, borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
      {s.label}
    </span>
  );
}

export default function ProtocolsPage() {
  const totalCovered = PROTOCOLS.filter((p) => p.status === "native" || p.status === "via" || p.status === "partial").length;
  const totalRoadmap = PROTOCOLS.filter((p) => p.status === "roadmap").length;
  const frameworksCovered = FRAMEWORKS.filter((f) => f.status === "native" || f.status === "via" || f.status === "partial").length;
  const frameworksRoadmap = FRAMEWORKS.filter((f) => f.status === "roadmap").length;

  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Hero */}
        <div style={{ padding: "2.2rem 2rem", background: NAVY, color: "#fff", borderRadius: 18, marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", padding: "4px 12px", background: "rgba(123,196,127,0.18)", color: GREEN, borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            For procurement teams
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 14 }}>
            <span style={{ color: GOLD }}>8</span> agent-interop protocols.
            <br />
            <span style={{ color: GOLD }}>30+</span> regulatory frameworks.
            <br />
            <span style={{ color: GOLD }}>47</span> MCPs.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, marginBottom: 20, maxWidth: 720 }}>
            The complete MEOK coverage matrix. We bridge every active agent-interop protocol —
            MCP, A2A (which absorbed IBM ACP), Stripe ACP, AP2, x402, OASF — and 30+ regulatory
            frameworks from EU AI Act to Korea AI Basic Act to ISO 42005. Linux Foundation
            governance on the spine; MIT licence on the source.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              href="/universe"
              style={{ padding: "12px 22px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Universe £1,499/mo — all 47 →
            </Link>
            <Link
              href="/anthropic-registry"
              style={{ padding: "12px 22px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Browse all 47 →
            </Link>
            <Link
              href="/a2a"
              style={{ padding: "12px 22px", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", fontWeight: 700, borderRadius: 12, fontSize: 14 }}
            >
              A2A Substrate £499/mo →
            </Link>
          </div>
        </div>

        {/* Trust band */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 28 }}>
          <div style={{ padding: "1rem", background: "#fff", borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: NAVY }}>{totalCovered}/{PROTOCOLS.length}</div>
            <div style={{ fontSize: 11, color: `${NAVY}99`, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Protocols covered</div>
          </div>
          <div style={{ padding: "1rem", background: "#fff", borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: NAVY }}>{frameworksCovered}/{FRAMEWORKS.length}</div>
            <div style={{ fontSize: 11, color: `${NAVY}99`, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Frameworks covered</div>
          </div>
          <div style={{ padding: "1rem", background: "#fff", borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#3B82F6" }}>{totalRoadmap + frameworksRoadmap}</div>
            <div style={{ fontSize: 11, color: `${NAVY}99`, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Q3 roadmap</div>
          </div>
          <div style={{ padding: "1rem", background: "#fff", borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: GREEN }}>MIT</div>
            <div style={{ fontSize: 11, color: `${NAVY}99`, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Licence + LF gov</div>
          </div>
        </div>

        {/* Agent interop protocols */}
        <section style={{ marginBottom: "2.6rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>Agent interop protocols (8 live)</h2>
          <div style={{ background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a`, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: `${NAVY}06` }}>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Protocol</th>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Owner</th>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Layer</th>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Status</th>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {PROTOCOLS.map((p) => (
                  <tr key={p.id} style={{ borderTop: `1px solid ${NAVY}10` }}>
                    <td style={{ padding: "0.6rem 1rem", fontWeight: 700, whiteSpace: "nowrap" }}>{p.name}</td>
                    <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc` }}>{p.owner}</td>
                    <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc`, fontSize: 12 }}>{p.layer}</td>
                    <td style={{ padding: "0.6rem 1rem" }}><StatusBadge status={p.status} /></td>
                    <td style={{ padding: "0.6rem 1rem", color: `${NAVY}99`, fontSize: 12 }}>{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Regulatory frameworks */}
        <section style={{ marginBottom: "2.6rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>Regulatory frameworks ({FRAMEWORKS.length} mapped)</h2>
          <div style={{ background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a`, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ background: `${NAVY}06` }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 1rem", fontWeight: 800 }}>Framework</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 1rem", fontWeight: 800 }}>Date / clock</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 1rem", fontWeight: 800 }}>Status</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 1rem", fontWeight: 800 }}>MCP</th>
                </tr>
              </thead>
              <tbody>
                {FRAMEWORKS.map((f) => (
                  <tr key={f.code} style={{ borderTop: `1px solid ${NAVY}10` }}>
                    <td style={{ padding: "0.5rem 1rem", fontWeight: 700, whiteSpace: "nowrap" }}>{f.code}</td>
                    <td style={{ padding: "0.5rem 1rem", color: `${NAVY}99`, fontSize: 11 }}>{f.date}</td>
                    <td style={{ padding: "0.5rem 1rem" }}><StatusBadge status={f.status} /></td>
                    <td style={{ padding: "0.5rem 1rem", color: `${NAVY}cc`, fontSize: 11, fontFamily: "ui-monospace,Menlo,monospace" }}>{f.mcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why this matters */}
        <section style={{ marginBottom: "2.6rem", padding: "1.6rem 1.8rem", background: NAVY, color: "#fff", borderRadius: 14 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 10, color: GOLD }}>Why this matters for procurement</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 12 }}>
            The agent protocol layer is consolidating in real time. IBM ACP merged into A2A in
            September 2025. The EU AI Liability Directive was withdrawn in October 2025 and
            replaced by the revised Product Liability Directive. Korea&apos;s AI Basic Act came into
            force on 22 January 2026. Buying for one protocol or one regulator&apos;s clock is a bet
            on something that will keep moving.
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>
            MEOK&apos;s commitment: <strong style={{ color: GOLD }}>we ship the bridge.</strong> When a new protocol or framework lands, your
            existing Substrate subscription gets the new MCP for free. No re-procurement, no migration,
            no abandoned audit trails. The HMAC-signed evidence chain at <code style={{ background: "rgba(0,0,0,0.4)", padding: "2px 6px", borderRadius: 4 }}>verify.meok.ai</code> stays continuous.
          </p>
        </section>

        {/* CTAs */}
        <div style={{ padding: "1.8rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a`, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 8 }}>Pick your substrate</h3>
          <p style={{ color: `${NAVY}99`, marginBottom: 20, fontSize: 14, lineHeight: 1.55 }}>
            Free self-host, £99-£499/mo per substrate, or £1,499/mo for the lot.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/a2a" style={{ padding: "10px 18px", background: NAVY, color: "#fff", textDecoration: "none", fontWeight: 700, borderRadius: 10, fontSize: 13 }}>A2A £499</Link>
            <Link href="/governance" style={{ padding: "10px 18px", background: NAVY, color: "#fff", textDecoration: "none", fontWeight: 700, borderRadius: 10, fontSize: 13 }}>Governance £499</Link>
            <a href="https://buy.stripe.com/9B67sN4O8aEG6kdaqI8k90v" style={{ padding: "10px 18px", background: NAVY, color: "#fff", textDecoration: "none", fontWeight: 700, borderRadius: 10, fontSize: 13 }}>Cybersec £199</a>
            <a href="https://buy.stripe.com/cNi9AV0xS8wy5g9aqI8k90u" style={{ padding: "10px 18px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 10, fontSize: 13 }}>Universe £1,499</a>
            <a href="https://buy.stripe.com/00w3cxcgAaEGcIBcyQ8k90s" style={{ padding: "10px 18px", background: "transparent", color: NAVY, border: `1px solid ${NAVY}33`, textDecoration: "none", fontWeight: 700, borderRadius: 10, fontSize: 13 }}>PAYG £29</a>
          </div>
        </div>

        <p style={{ marginTop: 24, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT source · Apache 2.0 Python · Updated 2026-05-21
        </p>
      </div>
    </main>
  );
}
