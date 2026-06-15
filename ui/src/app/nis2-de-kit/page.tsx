import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NIS2-UmsuCG BSI-Registrierung · Late-Filing Kit · £99 / £499",
  description:
    "NIS2-UmsuCG late-filing rapid response for the ~17,500 German Mittelstand entities that missed the 6 March 2026 BSI deadline. £99 self-serve or £499 done-for-you with 7-day turnaround.",
  alternates: { canonical: "https://meok.ai/nis2-de-kit" },
  openGraph: {
    title: "Germany NIS2 BSI Register — Late-Filing Kit (£99 / £499)",
    description: "Of 30K obligated entities, only ~11.5K registered by 6 March 2026. ~17.5K still non-compliant. 7-day turnaround.",
    type: "website",
    url: "https://meok.ai/nis2-de-kit",
    locale: "de_DE",
    images: [{ url: "/api/og?title=NIS2-UmsuCG+BSI-Registrierung&desc=%C2%A399+self-serve+%E2%80%A2+%C2%A3499+done-for-you", width: 1200, height: 630, alt: "NIS2-DE Kit" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const SELF_SERVE = "https://buy.stripe.com/8x200l5Sc5kmeQJ9mE8k91p"; // £99 self-serve (price_1TfJVOQvIueK5XpbbP8CBCPL)
const DFY = "https://buy.stripe.com/00waEZ3K48wydMF6as8k91k"; // £499 done-for-you

const FAQ = [
  { q: "Who must register on the BSI portal?", a: "NIS2-UmsuCG covers essential entities (Section 30 — energy, transport, water, healthcare, ICT services, food production) and important entities (Section 32 — manufacturing, postal/courier, waste, chemicals, research), plus digital service providers, MSPs and B2B SaaS with German customers, generally at 50+ employees OR >€10M turnover. Smaller entities can opt in." },
  { q: "I missed the 6 March 2026 deadline — what now?", a: "You are among the ~17,500 of an estimated 30,000+ obligated entities that did not register by the deadline. Of those obligated, only ~11,500 registered on time. Late filing is still required and the kit includes a late-filing rationale document for BSI inspectors plus a signed compliance attestation for your audit committee." },
  { q: "What's the difference between the £99 and £499 tiers?", a: "Self-Serve (£99, one-time) gives you a step-by-step English-first BSI MIP register walkthrough, the Section 30 vs Section 32 classifier, the Elster certificate setup guide, the meok-nis2-de-register MCP and 90 days of email support — about 30 minutes to complete yourself. Done-For-You (£499, one-time) adds us completing your register on your behalf, a 60-min Zoom kickoff, the late-filing rationale, a signed attestation, a 7-day turnaround and 30 days of post-filing support." },
  { q: "Why is the BSI portal hard to use without help?", a: "The BSI portal requires \"Mein Unternehmenskonto\", an Elster certificate (the most common blocker) and German-language UI navigation. The kit walks you through Elster setup and portal completion in English so you can finish in roughly 30 minutes, or we do it all for you on the Done-For-You tier." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Germany NIS2 BSI Register", item: "https://meok.ai/nis2-de-kit" }] };

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", name: "NIS2-UmsuCG BSI Late-Filing Kit", serviceType: "Cybersecurity compliance registration", areaServed: "DE", provider: { "@type": "Organization", name: "MEOK AI Labs" }, url: "https://meok.ai/nis2-de-kit", offers: [{ "@type": "Offer", name: "Self-Serve", price: "99", priceCurrency: "GBP", url: SELF_SERVE }, { "@type": "Offer", name: "Done-For-You", price: "499", priceCurrency: "GBP", url: DFY }] };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
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
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 4 }}>£99</h2>
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
              Buy Self-Serve · £99 →
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
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 4 }}>£499</h2>
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
              Book Done-For-You · £499 →
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

        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Frequently asked
        </h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 48 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 16, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 900, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.65 }}>{f.a}</p>
            </details>
          ))}
        </div>

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
