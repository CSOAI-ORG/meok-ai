import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — EU AI Act, DORA, NIS2, CRA tools + guides · MEOK AI Labs",
  description:
    "Free interactive tools (fine calculator, readiness scorecard) + per-article guides + comparison pages + signed-attestation API. Everything in one place.",
  alternates: { canonical: "https://meok.ai/resources" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const SECTIONS = [
  {
    title: "Free interactive tools",
    items: [
      { name: "EU AI Act Readiness Scorecard", href: "/scorecard", desc: "10 questions · 90 seconds · personalised score + signed attestation" },
      { name: "EU AI Act Fine Calculator", href: "/fine-calculator", desc: "Maximum exposure by tier — €35M / €15M / €7.5M based on Article 99" },
      { name: "Live Catalogue (26 PyPI MCPs)", href: "https://meok-attestation-api.vercel.app/catalogue", desc: "Public catalogue + signed-cert listing", external: true },
      { name: "Verifier", href: "https://meok-attestation-api.vercel.app/verify", desc: "Cryptographically verify any MEOK signed certificate", external: true },
    ],
  },
  {
    title: "EU AI Act per-article guides",
    items: [
      { name: "Article 9 — Risk Management System", href: "/eu-ai-act/article-9" },
      { name: "Article 10 — Data Governance + Bias", href: "/eu-ai-act/article-10" },
      { name: "Article 14 — Human Oversight", href: "/eu-ai-act/article-14" },
      { name: "Article 26 — Deployer Obligations + FRIA", href: "/eu-ai-act/article-26" },
      { name: "Article 50 — Transparency + Watermarking", href: "/eu-ai-act/article-50" },
      { name: "All articles index", href: "/eu-ai-act" },
    ],
  },
  {
    title: "Compliance kits + bundles",
    items: [
      { name: "Article 50 Watermarking Kit · £999", href: "/article-50-kit", desc: "C2PA + invisible watermark + fingerprint · ships in 7 days" },
      { name: "NIS2-DE BSI Register · £49 / £999", href: "/nis2-de-kit", desc: "Self-serve walkthrough or 7-day done-for-you" },
      { name: "AI Bias Detection · £299/mo", href: "/bias-detection", desc: "Continuous Article 10 evidence · 7-day free trial" },
      { name: "Audit-Prep Bundle · £4,950", href: "/audit-prep-bundle", desc: "14-day engagement covering Articles 9/10/14/26/50/72" },
      { name: "Compliance Consulting · £950/day", href: "/consulting", desc: "Founder-led EU AI Act / DORA / NIS2 / GDPR" },
    ],
  },
  {
    title: "Comparison pages — vs other vendors",
    items: [
      { name: "MEOK vs Comp AI", href: "/vs-comp-ai", desc: "SOC 2 / ISO / HIPAA / GDPR vs EU AI Act + DORA + NIS2 + CRA" },
      { name: "MEOK vs Vanta", href: "/vs-vanta" },
      { name: "MEOK vs Drata", href: "/vs-drata" },
      { name: "MEOK vs Holistic AI", href: "/vs-holistic-ai" },
      { name: "MEOK vs Credo AI", href: "/vs-credo-ai" },
    ],
  },
  {
    title: "Developer surface",
    items: [
      { name: "Developer Docs", href: "/docs", desc: "Install all 8 MCPs in Claude Code, Cursor, Cline, Windsurf" },
      { name: "Integrations", href: "/integrations", desc: "10 hosts: Claude Code, Cursor, Cline, Windsurf, Apify, Smithery, Glama, MCPize, etc." },
      { name: "Attestation API", href: "https://meok-attestation-api.vercel.app", desc: "POST /sign with email-only auth for free tier", external: true },
      { name: "GitHub: CSOAI-ORG", href: "https://github.com/CSOAI-ORG", desc: "All 8 MCPs source code, MIT-licensed", external: true },
    ],
  },
  {
    title: "Trust + commercial",
    items: [
      { name: "Trust Center", href: "/trust", desc: "Live attestations + sub-processors + security practices" },
      { name: "Refund Policy", href: "/refund", desc: "Plain-English per-product refund + auditor-rejection guarantee" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security Statement", href: "/security" },
      { name: "Pricing", href: "/pricing" },
      { name: "Case Studies", href: "/case-studies", desc: "Real teams in production" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← meok.ai</Link>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>
          Resources
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Every tool, guide, and comparison MEOK ships — in one indexable hub. Everything below is
          free or has a free tier. Compliance buyers, devs, and procurement reviewers all find what
          they need here.
        </p>

        <div style={{ display: "grid", gap: 32 }}>
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 14, color: NAVY }}>{s.title}</h2>
              <div style={{ display: "grid", gap: 8 }}>
                {s.items.map((i) => (
                  <Link
                    key={i.name}
                    href={i.href}
                    target={"external" in i && i.external ? "_blank" : undefined}
                    rel={"external" in i && i.external ? "noopener noreferrer" : undefined}
                    style={{
                      display: "block",
                      padding: "14px 18px",
                      background: "white",
                      border: `1px solid ${NAVY}1a`,
                      borderRadius: 10,
                      textDecoration: "none",
                      color: NAVY,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{i.name}</div>
                      <div style={{ fontSize: 12, color: GOLD, fontWeight: 700 }}>{"external" in i && i.external ? "↗" : "→"}</div>
                    </div>
                    {"desc" in i && i.desc && <div style={{ fontSize: 12, color: `${NAVY}77`, marginTop: 4 }}>{i.desc}</div>}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p style={{ marginTop: 56, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
