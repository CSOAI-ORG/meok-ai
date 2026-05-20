import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust Center · MEOK AI Labs",
  description:
    "Security posture, signed compliance attestations, sub-processors, and policies for MEOK AI Labs (CSOAI LTD, UK Companies House 16939677). Buyer-grade trust signals.",
  alternates: { canonical: "https://meok.ai/trust" },
  openGraph: {
    title: "MEOK AI Labs Trust Center",
    description: "Security, attestations, sub-processors, policies.",
    type: "website",
    url: "https://meok.ai/trust",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const ATTESTATIONS = [
  {
    framework: "EU AI Act",
    status: "Self-attested · auditor-verifiable",
    cert: "MEOK-EUAIAC-MAIN",
    note: "Articles 4, 6, 9, 10, 14, 26(9), 43, 50, 72 — full crosswalk.",
  },
  {
    framework: "DORA (Reg 2022/2554)",
    status: "Self-attested · auditor-verifiable",
    cert: "MEOK-DORA-MAIN",
    note: "Operational resilience for financial entities + ICT third-party risk.",
  },
  {
    framework: "NIS2 / NIS2-UmsuCG",
    status: "Self-attested · auditor-verifiable",
    cert: "MEOK-NIS2-MAIN",
    note: "EU + Germany BSI register + Section 30 / 32 entity classification.",
  },
  {
    framework: "EU CRA (Reg 2024/2847)",
    status: "Self-attested · auditor-verifiable",
    cert: "MEOK-CRA-MAIN",
    note: "Annex IV technical documentation + 24h ENISA reporting (live 11 Sep 2026).",
  },
  {
    framework: "GDPR",
    status: "Self-attested · DPIA template + Article 30 records",
    cert: "MEOK-GDPR-MAIN",
    note: "EDPB harmonised DPIA template (14 Apr 2026) wired.",
  },
  {
    framework: "ISO/IEC 42001",
    status: "Crosswalk shipped · external audit pending",
    cert: "MEOK-ISO42001-MAIN",
    note: "AI management system controls cross-mapped to EU AI Act articles.",
  },
];

const SUB_PROCESSORS = [
  { name: "Vercel Inc.", purpose: "Application hosting + edge CDN", region: "EU + US (multi-region)", website: "https://vercel.com/legal/dpa" },
  { name: "Stripe Inc.", purpose: "Payment processing", region: "EU + US", website: "https://stripe.com/legal/dpa" },
  { name: "Anthropic PBC", purpose: "LLM inference (when configured)", region: "US (zero data retention on API)", website: "https://www.anthropic.com/legal/privacy" },
  { name: "Cloudflare Inc.", purpose: "DNS + DDoS protection (Cloudflare-fronted MCPs only)", region: "Global", website: "https://www.cloudflare.com/cloudflare-customer-dpa/" },
  { name: "Namecheap PrivateEmail", purpose: "Business email (nicholas@meok.ai)", region: "EU + US", website: "https://www.namecheap.com/legal/general/privacy-policy/" },
  { name: "GitHub Inc. (Microsoft)", purpose: "Source code hosting + CI", region: "Global", website: "https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement" },
  { name: "PyPI (Python Software Foundation)", purpose: "Package distribution (234 MCPs)", region: "Global", website: "https://www.python.org/privacy/" },
];

const POLICIES = [
  { name: "Privacy Policy", href: "/privacy", desc: "GDPR-aligned, EU + UK + Swiss data handling, retention, rights." },
  { name: "Terms of Service", href: "/terms", desc: "Commercial terms for paid tiers + free-tier signed attestations." },
  { name: "Security Statement", href: "/security", desc: "Encryption, key handling, incident response, access controls." },
  { name: "Sub-processors", href: "/sub-processors", desc: "Full list of vendors that may process personal data on our behalf." },
  { name: "Verifier", href: "https://meok-attestation-api.vercel.app/verify", desc: "Independent cryptographic verification of any signed MEOK certificate." },
  { name: "Catalogue", href: "https://meok-attestation-api.vercel.app/catalogue", desc: "All 234 published MCP packages + verify URLs." },
];

const SECURITY_PRACTICES = [
  "All HMAC-signed attestations use SHA-256 with a server-side key never exposed to clients.",
  "Stripe webhook signatures verified on every event — fail-loud if signature header missing.",
  "API rate limiting: 120 req/min per IP, applied at middleware before any handler.",
  "No PII stored beyond email + entity name in lead-capture flow; certs purge after 365 days.",
  "All 234 PyPI packages signed at upload time; sigstore / SBOM roadmap Q3 2026.",
  "Founder is sole technical operator; access to production is single-key + audit-logged.",
  "Source code public on GitHub (CSOAI-ORG); third-party security review welcomed.",
  "Open-source AGPLv3 / MIT licensing on MCP packages; commercial features licensed separately.",
];

export default function TrustPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(201,168,76,0.15)",
            border: `1px solid rgba(201,168,76,0.4)`,
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Trust Center · MEOK AI Labs
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Trust, plainly stated.
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          We sell signed compliance attestations to companies that get audited. That means our own
          posture has to be auditable too. Every claim on this page is verifiable, dated, and
          accountable to a single named operator: Nicholas Templeman, founder, CSOAI LTD (UK
          Companies House <strong>16939677</strong>).
        </p>

        {/* Live attestations grid */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Live signed attestations
        </h2>
        <p style={{ color: `${NAVY}99`, fontSize: 14, marginBottom: 24, maxWidth: 720 }}>
          MEOK signs its own compliance certificates with the same HMAC API customers buy. Every
          certificate has a <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>verify_url</code> any auditor can curl
          independently.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginBottom: 56 }}>
          {ATTESTATIONS.map((a) => (
            <div key={a.framework} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 12, color: GOLD, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>{a.framework}</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{a.status}</div>
              <div style={{ fontSize: 12, color: `${NAVY}77`, marginBottom: 10, fontFamily: "monospace" }}>{a.cert}</div>
              <p style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{a.note}</p>
            </div>
          ))}
        </div>

        {/* Security practices */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Security practices
        </h2>
        <div style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 56 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, fontSize: 14, margin: 0 }}>
            {SECURITY_PRACTICES.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Sub-processors */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Sub-processors
        </h2>
        <p style={{ color: `${NAVY}99`, fontSize: 14, marginBottom: 24, maxWidth: 720 }}>
          The current vendors that process customer data on our behalf. We notify customers of
          material changes via email + this page.
        </p>
        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, marginBottom: 56, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.6fr 1fr 1fr", fontSize: 12, fontWeight: 900, padding: "12px 18px", background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div>VENDOR</div>
            <div>PURPOSE</div>
            <div>REGION</div>
            <div>DPA</div>
          </div>
          {SUB_PROCESSORS.map((s, i) => (
            <div key={s.name} style={{ display: "grid", gridTemplateColumns: "1.2fr 1.6fr 1fr 1fr", fontSize: 13, padding: "14px 18px", borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ fontWeight: 700 }}>{s.name}</div>
              <div style={{ color: `${NAVY}99` }}>{s.purpose}</div>
              <div style={{ color: `${NAVY}99` }}>{s.region}</div>
              <div>
                <a href={s.website} target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline", fontSize: 12 }}>view →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Policies */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Policies + verifiers
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginBottom: 56 }}>
          {POLICIES.map((p) => (
            <Link key={p.name} href={p.href} style={{ background: "white", borderRadius: 14, padding: 18, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY }}>
              <div style={{ fontSize: 14, fontWeight: 900, marginBottom: 4, color: GOLD }}>{p.name} →</div>
              <div style={{ fontSize: 12, color: `${NAVY}99`, lineHeight: 1.5 }}>{p.desc}</div>
            </Link>
          ))}
        </div>

        {/* Incident reporting */}
        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginBottom: 40 }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 8 }}>
            Reporting a security issue
          </h3>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 16, fontSize: 14, lineHeight: 1.6 }}>
            Found a vulnerability or compliance concern? Email{" "}
            <a href="mailto:security@csoai.org" style={{ color: GOLD, textDecoration: "underline" }}>security@csoai.org</a>{" "}
            (mirrors to nicholas@meok.ai). 24-hour acknowledgement, 72-hour triage. We do not run a paid
            bug bounty yet but credit researchers in the next monthly trust update.
          </p>
        </div>

        <p style={{ color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Last reviewed 27 April 2026. Material changes notified via email to active customers.
          <br />
          MEOK AI Labs is a trading name of CSOAI LTD · UK Companies House <strong>16939677</strong> · Registered England & Wales
        </p>
      </div>
    </main>
  );
}
