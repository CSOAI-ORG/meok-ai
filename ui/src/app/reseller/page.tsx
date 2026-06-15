import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reseller Program — 30% Lifetime Commission · MEOK AI White-Label",
  description:
    "White-label the MEOK compliance fleet under your own brand. 30% lifetime commission, dedicated Slack, custom domain, co-marketing budget up to $10K/year.",
  alternates: { canonical: "https://meok.ai/reseller" },
  openGraph: {
    title: "MEOK Reseller Program — 30% Lifetime Commission + White-Label",
    description: "White-label MEOK under your own brand. 30% commission, dedicated Slack, $10K co-marketing budget.",
    type: "website",
    url: "https://meok.ai/reseller",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_RESELLER_DEPOSIT = "https://buy.stripe.com/cNi5kD5xY1BQfFhfL28k91m";

const BENEFITS = [
  {
    title: "30% lifetime commission",
    body: "On every /verify call. Paid monthly. No cap. White-label means you set your own end-customer price — you keep the margin on top of the 30%.",
  },
  {
    title: "White-label dashboard",
    body: "Your logo, your colors, your domain. The /verify endpoint is your-branded. Custom bundle scripts for your clients. Mobile-responsive.",
  },
  {
    title: "Co-marketing budget",
    body: "Up to $10K/year in joint marketing spend (paid ads, events, content). Plus dedicated case-study support and analyst relations.",
  },
  {
    title: "Dedicated Slack channel",
    body: "Direct line to the MEOK engineering team + founder. Same-day response SLA. Quarterly roadmap reviews.",
  },
];

const EXPECTATIONS = [
  "Sign a reseller agreement (£25K/yr floor or 30% commission, whichever is greater).",
  "Maintain a co-branded landing page + at least 3 active client deployments in first 6 months.",
  "Attend quarterly business reviews and provide pipeline forecasts.",
  "White-label only — no co-mingling of MEOK branding in your customer-facing surface.",
];

const FAQ = [
  { q: "How is white-label delivered?", a: "We spin up {your-firm}.meok.ai/scorecard and {your-firm}.meok.ai/verify with your logo + colors + custom domain. The /verify endpoint is rebranded. You get a private deployment with your tenant isolation." },
  { q: "What's the floor commitment?", a: "£25K/yr in commission OR 5 active client deployments, whichever comes first. Most resellers hit the 5-client mark in 90 days." },
  { q: "Can I set my own end-customer pricing?", a: "Yes. You set the price your customers pay. You pay MEOK the wholesale rate (70% of MSRP) and keep the margin. This is true white-label, not reseller-discount." },
  { q: "What's NOT included in the reseller tier?", a: "Custom MCP development (Enterprise tier only), on-prem deployment (Enterprise tier only), and dedicated compliance officer (CSOAI Watchdog Cert). All available as add-ons." },
  { q: "How long is the contract?", a: "12 months, auto-renewing. 30-day notice to cancel. We don't lock you in." },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ResellerPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ marginBottom: 48, textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>MEOK Reseller Program</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "16px 0" }}>White-label. 30% lifetime. $10K co-marketing.</h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto" }}>
            For system integrators, MSPs, and large consultancies who want to ship the MEOK compliance fleet under their own brand. Your logo, your colors, your domain. We provide the engine, you own the customer.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>What's included</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: 17, fontWeight: 900, color: GOLD, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: `${NAVY}cc`, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>What we expect</h2>
          <div style={{ background: "white", borderRadius: 14, padding: 32, border: `1px solid ${NAVY}1a` }}>
            <ol style={{ margin: 0, paddingLeft: 24, color: `${NAVY}cc`, fontSize: 15, lineHeight: 1.7 }}>
              {EXPECTATIONS.map((e, i) => <li key={i}>{e}</li>)}
            </ol>
          </div>
        </section>

        <section style={{ marginBottom: 48, background: NAVY, color: "white", borderRadius: 14, padding: 40, textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>Apply for the reseller program</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 24, maxWidth: 600, margin: "0 auto 24px" }}>
            £499 application fee (refunded on contract signature). Includes white-label deployment scoping call, custom-domain DNS setup, and direct line to the engineering team.
          </p>
          <a
            href={STRIPE_RESELLER_DEPOSIT}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "16px 32px", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 16 }}
          >
            Apply for reseller — £499 →
          </a>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>
            Or email <a href="mailto:nicholas@meok.ai?subject=Reseller%20program" style={{ color: GOLD }}>nicholas@meok.ai</a> for the deal sheet and sample contract.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>Reseller FAQ</h2>
          {FAQ.map((f) => (
            <div key={f.q} style={{ background: "white", borderRadius: 10, padding: 20, border: `1px solid ${NAVY}1a`, marginBottom: 12 }}>
              <h3 style={{ fontSize: 15, fontWeight: 900, margin: "0 0 8px" }}>{f.q}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: `${NAVY}cc`, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </section>

        <section style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, textAlign: "center", fontSize: 13, color: `${NAVY}88` }}>
          <p style={{ margin: 0 }}>
            Site: <a href="https://meok.ai" style={{ color: NAVY }}>meok.ai</a> · Fleet: <a href="https://meok.ai/fleet" style={{ color: NAVY }}>meok.ai/fleet</a> · Org: <a href="https://github.com/CSOAI-ORG" style={{ color: NAVY }}>github.com/CSOAI-ORG</a>
          </p>
        </section>
      </div>
    </main>
  );
}
