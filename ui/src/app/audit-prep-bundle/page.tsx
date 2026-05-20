import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compliance Audit-Prep Bundle · £4,950 · 14-day · MEOK AI Labs",
  description:
    "2-day founder-led audit-prep engagement + 90 days post-support + Article 50 watermarking kit + NIS2 register kit. Signed compliance attestation pack the auditor can verify cryptographically.",
  alternates: { canonical: "https://meok.ai/audit-prep-bundle" },
  openGraph: {
    title: "Audit-Prep Bundle — £4,950 · 14-day signed attestation pack",
    description: "Founder-led 2-day engagement + 90-day support + Article 50 + NIS2 + signed Article 9/14/26 evidence pack.",
    type: "website",
    url: "https://meok.ai/audit-prep-bundle",
    images: [{ url: "/api/og?title=Audit-Prep+Bundle&desc=%C2%A34%2C950+%C2%B7+14-day+signed+attestation+pack", width: 1200, height: 630, alt: "Audit-Prep Bundle" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_LINK = "https://buy.stripe.com/dRmfZjcgA6oq5g9cyQ8k83d";

const INCLUDES = [
  { item: "Day 1 — full audit", desc: "Full review of your AI/data pipeline against EU AI Act Article 6 risk classification, Article 26(9) FRIA, Article 50 transparency obligations, and any relevant overlay (DORA / NIS2 / CRA / GDPR)." },
  { item: "Day 2 — fix + sign", desc: "Hands-on remediation of the gaps surfaced. Generate the signed compliance attestation pack via meok-attestation-api with HMAC-SHA256 verification URLs." },
  { item: "EU AI Act Article 50 kit (£999 retail)", desc: "C2PA + invisible watermark + fingerprinting bundled and ready for the 2 November 2026 cliff." },
  { item: "NIS2 DE register kit (£999 retail)", desc: "Section 30/32 register payload, KRITIS classification, BSI Elster cert walkthrough." },
  { item: "90-day post-engagement support", desc: "Async email + Slack channel for follow-up questions, regulatory clarifications, and minor corrections." },
  { item: "Custom signing keys", desc: "Your own HMAC signing key + verify subdomain (your-firm.com/verify/<cert_id>) so attestations are independent of MEOK's central key." },
];

const FIT = [
  "Series A AI startups facing first compliance review",
  "EU SaaS scale-ups going through SOC 2 / ISO 27001 / EU AI Act dry-run",
  "DORA-scoped fintechs preparing the Article 28 register",
  "UK firms shipping GenAI products into the EU before the 2 Nov 2026 Article 50 transparency cliff (Annex III high-risk now delayed to 2 Dec 2027 per Digital Omnibus)",
];

export default function AuditPrepBundlePage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
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
          Founder-led · 2-day engagement · 90-day support
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
          Audit-Prep Bundle
        </h1>
        <p style={{ fontSize: "1.5rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>£4,950 one-time</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          Two days of founder-led compliance audit-prep + the EU AI Act Article 50 kit + the NIS2 DE
          register kit + 90 days of async post-support, all signed cryptographically. Equivalent
          consulting at Big-4 day rates: £15,000-£40,000. We deliver in 14 days from booking.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
          <a
            href={STRIPE_LINK}
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
            Book Audit-Prep Bundle — £4,950 →
          </a>
          <a
            href="mailto:nicholas@meok.ai?subject=Compliance%20triage%20call%20request%20&body=Hi%20Nicholas%2C%0A%0AI%27d%20like%20to%20book%20the%20free%2030-min%20compliance%20triage%20call.%20My%20availability%3A%0A%0A-%20%5Byour%20preferred%20day%2Ftime%5D%0A%0ACompany%3A%20%5BCompany%5D%0AContext%3A%20%5BEU%20AI%20Act%20%2F%20DORA%20%2F%20NIS2%20%2F%20CRA%5D%0A%0AThanks"
            target="_blank"
            rel="noopener noreferrer"
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
            Or book a 30-min triage call (free) →
          </a>
        </div>

        {/* Big-4 anchor card */}
        <div style={{ background: "white", border: `2px solid ${GOLD}`, borderRadius: 16, padding: 28, marginBottom: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: `${NAVY}88`, marginBottom: 6 }}>Big-4 audit consultant</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 900, color: `${NAVY}99` }}>£15,000 – £50,000</div>
            <div style={{ fontSize: 12, color: `${NAVY}66`, marginTop: 4 }}>4-8 weeks · 3-5 hand-offs · no signed evidence</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginBottom: 6 }}>MEOK Audit-Prep Bundle</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 900, color: NAVY }}>£4,950</div>
            <div style={{ fontSize: 12, color: `${NAVY}77`, marginTop: 4, fontWeight: 700 }}>14 days · founder-led · cryptographically signed evidence pack</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: GOLD, marginBottom: 4 }}>YOU SAVE</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 900, color: NAVY }}>£10K – £45K</div>
            <div style={{ fontSize: 11, color: `${NAVY}66`, marginTop: 4 }}>+ months of calendar time</div>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div style={{ background: "rgba(34, 197, 94, 0.06)", border: "1px solid rgba(34, 197, 94, 0.3)", borderRadius: 12, padding: 18, marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 32 }}>🛡️</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 900, marginBottom: 2 }}>Auditor-rejection guarantee</div>
            <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>
              If your named auditor rejects the signed evidence pack in writing within 60 days, full refund. No arguments.{" "}
              <Link href="/refund" style={{ color: GOLD, fontWeight: 700 }}>See refund policy →</Link>
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          What's in the bundle
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64 }}>
          {INCLUDES.map((i) => (
            <div
              key={i.item}
              style={{
                padding: 22,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <h3 style={{ fontSize: "1.05rem", fontWeight: 900, marginBottom: 6 }}>{i.item}</h3>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55 }}>{i.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 16 }}>Who this is for</h2>
        <ul style={{ marginBottom: 64, paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.7 }}>
          {FIT.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Ship-ready in 14 days
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            Book today, receive your engagement note within 24h, kickoff within 2 weeks.
          </p>
          <a
            href={STRIPE_LINK}
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
            Book — £4,950 →
          </a>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 13, textAlign: "center", lineHeight: 1.7 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> ·{" "}
          <Link href="/refund" style={{ color: GOLD }}>
            Refund: full pre-kickoff, 50% mid-engagement
          </Link>
          <br />
          <Link href="/trust" style={{ color: GOLD }}>Trust Center</Link>
          {" · "}
          <Link href="/privacy" style={{ color: GOLD }}>Privacy</Link>
          {" · "}
          <Link href="/terms" style={{ color: GOLD }}>Terms</Link>
          {" · "}
          <Link href="/" style={{ color: GOLD }}>meok.ai</Link>
        </p>
      </div>
    </main>
  );
}
