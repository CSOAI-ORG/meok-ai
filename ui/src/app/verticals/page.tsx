import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vertical MCP Consulting · MEOK AI Labs",
  description:
    "Industry-specific MCP transformation. Not generic AI consulting. Construction, waste management, healthcare, financial services — 48h readiness assessments and production MCP architecture.",
  alternates: { canonical: "https://meok.ai/verticals" },
  openGraph: {
    title: "Vertical MCP Consulting · MEOK AI Labs",
    description:
      "Industry-specific MCP transformation. Construction, waste management, healthcare, and financial services verticals with 48h readiness assessments.",
    type: "website",
    url: "https://meok.ai/verticals",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const VERTICALS = [
  {
    name: "Construction & Plant Hire",
    pitch: "Fleet management, grab hire, and plant hire SaaS — MCP-first architecture for a £6B+ UK market.",
    href: "/verticals/construction",
    brands: "grabhire.ai · planthire.ai",
  },
  {
    name: "Waste Management",
    pitch: "30,000+ waste operators need AI compliance by 2027. Waste stream classification, permit verification, carbon reporting.",
    href: "/verticals/waste-management",
    brands: "muckaway.ai",
  },
  {
    name: "Healthcare & Optometry",
    pitch: "Offline-first MCP for mobile healthcare. FHIR-compliant, NHS GOS claims, EU AI Act Annex III high-risk ready.",
    href: "/verticals/healthcare",
    brands: "optimobile.ai",
  },
  {
    name: "Financial Services",
    pitch: "EU AI Act compliance for fintech — credit scoring, fraud detection, algorithmic trading. High-risk AI conformity.",
    href: "/eu-ai-act-for-fintech",
    brands: "EU AI Act for Fintech",
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vertical MCP Consulting — MEOK AI Labs",
  description:
    "Industry-specific MCP transformation consulting. Construction, waste management, healthcare, and financial services verticals.",
  url: "https://meok.ai/verticals",
  provider: {
    "@type": "Organization",
    name: "MEOK AI Labs",
    legalName: "CSOAI LTD",
    url: "https://meok.ai",
  },
  areaServed: "GB",
  serviceType: "AI Compliance Consulting",
};

export default function VerticalsIndexPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link
          href="/"
          style={{ color: GOLD, textDecoration: "none", fontSize: 14, fontWeight: 700, marginBottom: 24, display: "inline-block" }}
        >
          ← meok.ai
        </Link>

        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Vertical <span style={{ color: GOLD }}>MCP</span> Consulting
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 48 }}>
          Industry-specific MCP transformation. Not generic AI consulting. We build production MCP
          servers for regulated industries — tools, resources, and prompts that AI agents actually use
          to operate your business.
        </p>

        {/* Vertical cards */}
        <div style={{ display: "grid", gap: 20, marginBottom: 64 }}>
          {VERTICALS.map((v) => (
            <Link
              key={v.name}
              href={v.href}
              style={{
                display: "block",
                padding: 28,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
                textDecoration: "none",
                color: NAVY,
                transition: "border-color 0.15s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 8 }}>{v.name}</h2>
                  <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55, marginBottom: 12 }}>{v.pitch}</p>
                  <span style={{ color: `${NAVY}66`, fontSize: 12, fontWeight: 700 }}>{v.brands}</span>
                </div>
                <span style={{ color: GOLD, fontWeight: 900, fontSize: 15, whiteSpace: "nowrap", marginTop: 4 }}>
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* What every vertical gets */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Every vertical includes
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {[
            { num: "1", title: "48h Assessment", desc: "Full stack audit mapped to MCP primitives. Ranked implementation roadmap." },
            { num: "2", title: "MCP Architecture", desc: "Custom server design — tools, resources, prompts. Built for your industry." },
            { num: "3", title: "Compliance", desc: "EU AI Act, DORA, NIS2 — whichever regulations apply to your vertical." },
            { num: "4", title: "Attestations", desc: "HMAC-signed certificates. Independently verifiable. Auditor-ready." },
          ].map((s) => (
            <div
              key={s.num}
              style={{
                padding: 24,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 900, color: GOLD, marginBottom: 8 }}>{s.num}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 900, marginBottom: 6 }}>{s.title}</h3>
              <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
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
            Book a 48h assessment
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            We audit your stack, map it to MCP primitives, and deliver a ranked implementation roadmap. £5,000 flat.
          </p>
          <a
            href="https://buy.stripe.com/eVq6oJ3K49AC0ZTaqI8k91m"
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
            Book 48h Assessment — £5,000 →
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
