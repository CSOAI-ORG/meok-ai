import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NIS2-UmsuCG BSI-Registrierung · Late-Filing Kit · £49 / £999",
  description:
    "NIS2-UmsuCG late-filing rapid response for the ~17,500 German Mittelstand entities that missed the 6 March 2026 BSI deadline. £49 self-serve or £999 done-for-you with 7-day turnaround.",
  alternates: { canonical: "https://meok.ai/nis2-de-kit" },
  openGraph: {
    title: "Germany NIS2 BSI Register — Late-Filing Kit (£49 / £999)",
    description: "Of 30K obligated entities, only ~11.5K registered by 6 March 2026. ~17.5K still non-compliant. 7-day turnaround.",
    type: "website",
    url: "https://meok.ai/nis2-de-kit",
    locale: "de_DE",
    images: [{ url: "/api/og?title=NIS2-UmsuCG+BSI-Registrierung&desc=%C2%A349+self-serve+%E2%80%A2+%C2%A3999+done-for-you", width: 1200, height: 630, alt: "NIS2-DE Kit" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const SELF_SERVE = "https://buy.stripe.com/9B69AVfsM28afUN0Q88k83b";
const DFY = "https://buy.stripe.com/bJedRb1BWdQSgYRfL28k83c";

const SELF_INCLUDES = [
  "Step-by-step BSI MIP register walkthrough (English-first)",
  "Section 30 (KRITIS) vs Section 32 (significant entities) classifier",
  "Elster certificate setup guide (most common blocker)",
  "BSI portal login + register completion in ~30 min",
  "meok-nis2-de-register MCP for ongoing automation",
  "90 days of email support",
];

const DFY_INCLUDES = [
  "Everything in Self-Serve",
  "We complete your Section 30/32 register on your behalf",
  "1× 60-min Zoom kickoff + Elster cert setup support",
  "Late-filing rationale document for BSI inspectors",
  "Signed compliance attestation for your audit committee",
  "7-day turnaround from order to register-filed",
  "30 days of post-filing email support",
];

export default function NIS2DeKitPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(220,38,38,0.1)",
            border: `1px solid rgba(220,38,38,0.4)`,
            color: "#dc2626",
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          🇩🇪 Deadline passed 6 March 2026 · ~17,500 still non-compliant
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
          Germany NIS2 BSI Register
        </h1>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 40 }}>
          Of an estimated 30,000+ obligated entities, only ~11,500 registered by the 6 March 2026
          deadline. ~17,500 are non-compliant right now. The BSI portal requires "Mein
          Unternehmenskonto" + Elster cert + German UI navigation. We solve that for you.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 64 }}>
          <div
            style={{
              padding: 28,
              background: "white",
              borderRadius: 16,
              border: `1px solid ${NAVY}1a`,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: `${NAVY}66`, marginBottom: 8 }}>
              SELF-SERVE
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 4 }}>£49</h2>
            <div style={{ fontSize: 13, color: `${NAVY}99`, marginBottom: 20 }}>
              one-time · ~30 min to complete
            </div>
            <ul style={{ paddingLeft: 18, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.65, marginBottom: 24 }}>
              {SELF_INCLUDES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a
              href={SELF_SERVE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "14px 24px",
                borderRadius: 12,
                background: NAVY,
                color: "white",
                fontWeight: 900,
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              Buy Self-Serve · £49 →
            </a>
          </div>

          <div
            style={{
              padding: 28,
              background: GOLD,
              color: NAVY,
              borderRadius: 16,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -10,
                left: 24,
                padding: "4px 10px",
                background: NAVY,
                color: GOLD,
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.1em",
              }}
            >
              MOST POPULAR · PANIC TIER
            </div>
            <div style={{ fontSize: 12, fontWeight: 900, marginBottom: 8, opacity: 0.7 }}>
              DONE-FOR-YOU
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 4 }}>£999</h2>
            <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 20 }}>
              one-time · 7-day turnaround
            </div>
            <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.65, marginBottom: 24 }}>
              {DFY_INCLUDES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a
              href={DFY}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "14px 24px",
                borderRadius: 12,
                background: NAVY,
                color: GOLD,
                fontWeight: 900,
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              Book Done-For-You · £999 →
            </a>
          </div>
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Who's affected
        </h2>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>
          NIS2-UmsuCG ("NIS2 Umsetzungs- und Cybersicherheitsstärkungsgesetz") covers German entities in:
        </p>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 64 }}>
          <li>Energy, transport, water, healthcare, ICT services, food production (essential entities — Section 30)</li>
          <li>Manufacturing, postal/courier, waste, chemicals, research (important entities — Section 32)</li>
          <li>Digital service providers (DSP), MSPs, B2B SaaS with German customers</li>
          <li>50+ employees OR &gt;€10M turnover (smaller entities can opt in)</li>
        </ul>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Not sure which tier fits?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            Free 30-min triage call — we'll classify your entity and tell you whether self-serve or
            done-for-you is the right path.
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
            Book triage call (free) →
          </a>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 13, textAlign: "center" }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House 16939677 ·{" "}
          <Link href="/" style={{ color: GOLD }}>
            meok.ai
          </Link>
        </p>
      </div>
    </main>
  );
}
