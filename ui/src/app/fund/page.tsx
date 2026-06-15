import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Fund | Sustainable economics for sovereign AI | MEOK.AI",
  description:
    "MEOK Fund: a sustainable-economics overview. Revenue model, capital efficiency, gross margins, EU AI Act cliff economics, treasury policy. No fluff, no speculation — just the numbers.",
  keywords: [
    "MEOK fund",
    "MEOK revenue model",
    "MEOK economics",
    "MEOK unit economics",
    "MEOK treasury",
    "MEOK capital",
  ],
  alternates: { canonical: "https://meok.ai/fund" },
};

const NAVY = "#1a1a2e"; const GOLD = "#c9a84c"; const BG = "#f5f0e8";

const WEBPAGE_JSONLD = { "@context": "https://schema.org", "@type": "WebPage", name: "MEOK Fund — Sustainable economics for sovereign AI", description: "MEOK Fund: a sustainable-economics overview. Revenue model, capital efficiency, gross margins, EU AI Act cliff economics, treasury policy. No fluff, no speculation — just the numbers.", url: "https://meok.ai/fund" };
const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Fund", item: "https://meok.ai/fund" }] };

const REVENUE_MODEL = [
  { stream: "Compliance tier subscriptions", unit_economics: "Stripe, gross margin 95%+, monthly recurring" },
  { stream: "Consumer tier subscriptions", unit_economics: "Stripe, gross margin 90%+ (LLM API costs in 5-10%)" },
  { stream: "Article 50 Kit one-time", unit_economics: "Stripe, gross margin 99%, one-time £999" },
  { stream: "Audit-Prep Bundle one-time", unit_economics: "Stripe, gross margin 95%, one-time £4,950" },
  { stream: "CSOAI Watchdog Cert one-time", unit_economics: "Third-party CEASAI pass-through + MEOK margin, £4,950" },
  { stream: "Custom distribution builds", unit_economics: "Service revenue, 14-day delivery, £4,950 + £199/mo maintenance" },
  { stream: "MCP x402 micro-call", unit_economics: "$0.05/call, free tier 1/day, paid via x402 protocol" },
  { stream: "Enterprise contracts", unit_economics: "Multi-region deploy, white-label, custom SLA" },
];

const CURRENT = [
  { metric: "£0", label: "Active revenue (as of 2026-06-14, ~2 months post-launch)" },
  { metric: "0", label: "Active subscriptions" },
  { metric: "0", label: "Charges (24h, all-time)" },
  { metric: "10", label: "Active Stripe payment links (consumer + compliance + one-time)" },
  { metric: "491", label: "Public GitHub repos" },
  { metric: "340+", label: "Open-source MCP packages" },
  { metric: "1", label: "Founder (no employees, no contractors, no agency)" },
];

const TARGETS = [
  { period: "Q3 2026 (post Article 50 cliff)", target: "5 paying Enterprise customers + 50 Pro + 200 Sovereign Starter" },
  { period: "Q4 2026", target: "20 Enterprise + 200 Pro + 1000 Sovereign Starter + 100 Article 50 Kits" },
  { period: "Q1 2027", target: "MRR £50K (50 Enterprise x £1,499 - churn buffer + 200 Pro x £199 + 5000 Starter x £29)" },
  { period: "Q2 2027", target: "MRR £150K + Audit-Prep pipeline (50 x £4,950/qtr)" },
];

const POLICY = [
  { label: "Treasury policy", value: "All revenue in GBP. Reserves held in FSCS-protected UK bank accounts. No crypto, no algorithmic stablecoins, no yield farming." },
  { label: "No revenue claims", value: "Per MEOK methodology rule FR-06, we do not publish revenue numbers in marketing. The 'Current' table above is verifiable on the public Stripe dashboard." },
  { label: "Open books", value: "Quarterly financial summary published at /fund. Annual Companies House filing available at Companies House 16939677." },
  { label: "No investors", value: "Bootstrapped. No VC, no angels, no SAFE, no convertible notes, no token sale. The company is wholly owned by the founder." },
  { label: "Capital efficiency", value: "Burn rate is the founder's personal cost of living. No salaries, no offices, no contractors. Every line of code is the founder's." },
  { label: "Procurement policy", value: "We will not accept work from governments or entities on the UK/EU sanctions list. We will not work with the tobacco industry or arms manufacturers." },
];

export default function FundPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Fund</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>Sustainable economics for sovereign AI.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            No fluff, no speculation, no projections. Revenue model, capital efficiency, treasury policy, and the actual numbers — verified on the public Stripe dashboard.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Current state (live, verifiable)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
            {CURRENT.map((c) => (
              <div key={c.label} style={{ background: "white", borderRadius: 12, padding: 16, border: `1px solid ${NAVY}1a`, textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: GOLD, lineHeight: 1, marginBottom: 6 }}>{c.metric}</div>
                <div style={{ fontSize: 11, color: `${NAVY}cc`, lineHeight: 1.3 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Revenue model</h2>
          <div style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a` }}>
            {REVENUE_MODEL.map((r, i) => (
              <div key={r.stream} style={{ padding: "12px 0", borderBottom: i < REVENUE_MODEL.length - 1 ? `1px solid ${NAVY}0d` : "none" }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: NAVY }}>{r.stream}</div>
                <div style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5 }}>{r.unit_economics}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Targets (Q3 2026 onwards)</h2>
          <p style={{ fontSize: 13, color: `${NAVY}cc`, marginBottom: 12, fontStyle: "italic" }}>
            Targets, not commitments. We will publish actuals in this table every quarter.
          </p>
          {TARGETS.map((t) => (
            <div key={t.period} style={{ background: "white", borderRadius: 12, padding: 16, border: `1px solid ${NAVY}1a`, marginBottom: 8 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ minWidth: 200, fontSize: 13, fontWeight: 900, color: GOLD, paddingTop: 1 }}>{t.period}</div>
                <div style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5 }}>{t.target}</div>
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Treasury & operating policy</h2>
          <dl style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a`, display: "grid", gridTemplateColumns: "200px 1fr", gap: "12px 24px", fontSize: 14 }}>
            {POLICY.map((p) => (
              <div key={p.label} style={{ display: "contents" }}>
                <dt style={{ fontWeight: 900, color: NAVY }}>{p.label}</dt>
                <dd style={{ margin: 0, color: `${NAVY}cc`, lineHeight: 1.5 }}>{p.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section style={{ background: NAVY, color: "white", borderRadius: 14, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Want to invest or partner?</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
            We are not raising. If you are a regulator, an industry body, or a public-sector entity interested in MEOK for compliance collaboration, we will respond.
          </p>
          <a href="mailto:nicholas@meok.ai?subject=Partnership%20inquiry" style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            nicholas@meok.ai →
          </a>
        </section>
      </div>
    </main>
  );
}
