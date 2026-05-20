import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compliance Consulting · £950/day · MEOK AI Labs",
  description:
    "Founder-led EU AI Act, DORA, NIS2 + GDPR consulting at £950/day. Hands-on technical implementation of compliance MCPs, signed-attestation infrastructure, and audit-prep. UK + EU coverage.",
  alternates: { canonical: "https://meok.ai/consulting" },
  openGraph: {
    title: "MEOK Compliance Consulting · £950/day",
    description:
      "Founder-led EU AI Act / DORA / NIS2 / GDPR technical consulting. £950/day. Book a 30-min triage call.",
    type: "website",
    url: "https://meok.ai/consulting",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const ENGAGEMENTS = [
  {
    title: "EU AI Act Article 50 implementation",
    sub: "2-3 days",
    desc:
      "Wire C2PA + invisible watermark + fingerprinting into your generative-AI surface ahead of the 2 Nov 2026 cliff. Signed compliance attestation pack delivered.",
  },
  {
    title: "DORA Article 28 third-party register",
    sub: "1-2 days",
    desc:
      "Generate the Article 28 ICT third-party register with criticality classification + Article 26 TLPT scope plan. Signed evidence pack ready for FCA / BaFin.",
  },
  {
    title: "Germany NIS2 BSI register catch-up",
    sub: "1 day",
    desc:
      "Late-filing rapid response for the ~17,500 Mittelstand entities that missed the 6 March 2026 deadline. Section 30/32 register filled + Elster cert walkthrough.",
  },
  {
    title: "Audit-prep dry-run",
    sub: "2 days",
    desc:
      "Full Article 6 risk classification + Article 26(9) FRIA + Article 50 transparency mapping for your AI product. Signed attestation pack the auditor can verify cryptographically.",
  },
  {
    title: "MCP-based compliance workflow design",
    sub: "1-2 days",
    desc:
      "Wire MEOK's open-source MCPs into your Claude Code / Cursor workflow so every release ships with signed compliance evidence. Custom signing keys + verify domain.",
  },
];

const CREDS = [
  "Solo founder of MEOK AI Labs (UK CSOAI LTD, Companies House 16939677)",
  "234 open-source MCPs published; 7 deep-flagship covering EU AI Act, DORA, NIS2, CRA, GDPR, UK AI Bill",
  "Public attestation API at meok-attestation-api.vercel.app handling signed compliance artifacts",
  "Listed on Glama, MCPize (21 servers), Anthropic Plugin Directory queue (20 submissions)",
  "Building from a UK farm — no Big-4 day-rates, no procurement overhead",
];

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nicholas Templeman",
  jobTitle: "Founder & Principal Consultant",
  url: "https://meok.ai/consulting",
  email: "nicholas@meok.ai",
  worksFor: {
    "@type": "Organization",
    name: "MEOK AI Labs",
    legalName: "CSOAI LTD",
    identifier: "UK Companies House 16939677",
    url: "https://meok.ai",
  },
  knowsAbout: [
    "EU AI Act",
    "EU AI Act Article 50 (transparency / watermarking)",
    "EU AI Act Article 9 (risk management system)",
    "EU AI Act Article 10 (data governance + bias mitigation)",
    "EU AI Act Article 14 (human oversight)",
    "EU AI Act Article 26(9) (Fundamental Rights Impact Assessment)",
    "DORA (Regulation 2022/2554)",
    "NIS2 / NIS2-UmsuCG (Germany)",
    "EU CRA (Regulation 2024/2847)",
    "GDPR",
    "ISO/IEC 42001",
    "NIST AI RMF",
    "Model Context Protocol (MCP)",
    "HMAC-signed compliance attestation infrastructure",
  ],
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MEOK Compliance Consulting",
  description:
    "Founder-led EU AI Act / DORA / NIS2 / CRA / GDPR technical consulting. Day-rate £950/day. Hands-on implementation of compliance MCPs, signed-attestation infrastructure, audit-prep, and remediation.",
  url: "https://meok.ai/consulting",
  provider: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  serviceType: "AI Compliance Consulting",
  areaServed: ["GB", "EU"],
  offers: {
    "@type": "Offer",
    price: "950",
    priceCurrency: "GBP",
    eligibleQuantity: { "@type": "QuantitativeValue", unitText: "DAY" },
    availability: "https://schema.org/InStock",
  },
};

export default function ConsultingPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(201,168,76,0.12)",
            border: `1px solid rgba(201,168,76,0.4)`,
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Founder-led · UK + EU
        </div>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Compliance consulting at <span style={{ color: GOLD }}>£950/day</span>
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          EU AI Act, DORA, NIS2, CRA + GDPR — hands-on technical implementation, not slideware. Day-rate
          engagements, no retainer minimum, no procurement overhead. Hands on the code, signed
          attestations the auditor can verify cryptographically. Booking 6 days/month at this rate;
          fast-tracked for NIS2-affected German Mittelstand and EU AI Act Article 50 deadline cases.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <a
            href="mailto:nicholas@meok.ai?subject=Compliance%20triage%20call%20request%20&body=Hi%20Nicholas%2C%0A%0AI%27d%20like%20to%20book%20the%20free%2030-min%20compliance%20triage%20call.%20My%20availability%3A%0A%0A-%20%5Byour%20preferred%20day%2Ftime%5D%0A%0ACompany%3A%20%5BCompany%5D%0AContext%3A%20%5BEU%20AI%20Act%20%2F%20DORA%20%2F%20NIS2%20%2F%20CRA%5D%0A%0AThanks"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "16px 28px",
              borderRadius: 12,
              background: GOLD,
              color: NAVY,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            Book free 30-min triage call →
          </a>
          <a
            href="mailto:nicholas@meok.ai?subject=MEOK%20consulting%20enquiry"
            style={{
              padding: "16px 28px",
              borderRadius: 12,
              background: "transparent",
              color: NAVY,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 15,
              border: `1px solid ${NAVY}33`,
            }}
          >
            Email nicholas@meok.ai
          </a>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          What I'll do for you
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64 }}>
          {ENGAGEMENTS.map((e) => (
            <div
              key={e.title}
              style={{
                padding: 24,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 900 }}>{e.title}</h3>
                <span style={{ color: GOLD, fontWeight: 700, fontSize: 13 }}>· {e.sub}</span>
              </div>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55 }}>{e.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 16, letterSpacing: "-0.01em" }}>
          How a typical engagement runs
        </h2>
        <ol style={{ marginBottom: 64, paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.7 }}>
          <li>
            <strong style={{ color: NAVY }}>30-min triage call (free)</strong> — I scope your problem +
            tell you whether I'm the right fit. If not, I'll point you to who is.
          </li>
          <li>
            <strong style={{ color: NAVY }}>Written engagement note</strong> — fixed scope, fixed price,
            fixed delivery date. £950/day, billed at start of engagement via Stripe.
          </li>
          <li>
            <strong style={{ color: NAVY }}>Hands-on delivery</strong> — code you can run, signed
            attestations the auditor can verify, and a 30-min handoff session.
          </li>
          <li>
            <strong style={{ color: NAVY }}>30-day post-engagement support</strong> — async via email +
            Slack channel.
          </li>
        </ol>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 16, letterSpacing: "-0.01em" }}>
          Why me
        </h2>
        <ul style={{ marginBottom: 64, paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.7 }}>
          {CREDS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <div
          style={{
            background: NAVY,
            color: "white",
            padding: 32,
            borderRadius: 16,
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Compliance deadline approaching?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            Article 50 hits 2 November 2026. NIS2 BSI deadline already passed. DORA already in force.
          </p>
          <a
            href="mailto:nicholas@meok.ai?subject=Compliance%20triage%20call%20request%20&body=Hi%20Nicholas%2C%0A%0AI%27d%20like%20to%20book%20the%20free%2030-min%20compliance%20triage%20call.%20My%20availability%3A%0A%0A-%20%5Byour%20preferred%20day%2Ftime%5D%0A%0ACompany%3A%20%5BCompany%5D%0AContext%3A%20%5BEU%20AI%20Act%20%2F%20DORA%20%2F%20NIS2%20%2F%20CRA%5D%0A%0AThanks"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: GOLD,
              color: NAVY,
              borderRadius: 12,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            Book triage call →
          </a>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 13, textAlign: "center" }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House 16939677 · 3rd Floor, 86-90 Paul Street,
          London EC2A 4NE · <Link href="/" style={{ color: GOLD }}>meok.ai</Link>
        </p>
      </div>
    </main>
  );
}
