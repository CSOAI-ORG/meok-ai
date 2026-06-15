import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program — 20% Lifetime Commission · MEOK AI Compliance",
  description:
    "Join the MEOK partner program. 20% lifetime commission on every /verify call from clients you refer. Co-marketing, lead sharing, no cap. For consultancies, integrators, and AI safety firms.",
  alternates: { canonical: "https://meok.ai/partner" },
  openGraph: {
    title: "MEOK Partner Program — 20% Lifetime Commission",
    description: "Earn 20% lifetime commission on MEOK compliance referrals. Co-marketing, lead sharing, no cap.",
    type: "website",
    url: "https://meok.ai/partner",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_PARTNER_DEPOSIT = "https://buy.stripe.com/cNi5kD5xY1BQfFhfL28k91m";

const BENEFITS = [
  {
    title: "20% lifetime commission",
    body: "On every /verify call from clients you refer. Paid monthly. No cap. No clawback. For 12 months, even if the client churns.",
  },
  {
    title: "Co-marketing",
    body: "Joint case studies, conference booth sharing, blog cross-posts, joint webinars. We'll send our founder (Nick Templeman) to your event.",
  },
  {
    title: "Lead sharing",
    body: "Inbound leads we can't serve in your region or vertical, we pass to you. You do the same. The pie is bigger when we share.",
  },
];

const EXPECTATIONS = [
  "Recommend the MEOK compliance fleet when your clients ask about EU AI Act, DORA, NIS2, or SOC 2.",
  "Embed the MEOK scorecard on your site (1-line iframe — we provide the snippet).",
  "Tag every client referral with your UTM source so we attribute the revenue correctly.",
  "Maintain the MEOK brand standard in any co-marketing (we'll share the brand kit).",
];

const FAQ = [
  { q: "Is there a signup fee?", a: "No. Free to join. We make money when your referrals convert." },
  { q: "When do I get paid?", a: "Monthly. 1st of every month, for the previous month's referred revenue. Stripe Connect or wire." },
  { q: "What if my client churns in month 1?", a: "You still get the 12-month tail. We pay out for 12 months after the last paid month, even on churn." },
  { q: "Can I white-label?", a: "Not at the partner tier. White-label is part of the Reseller program (30% commission, dedicated Slack, custom branding). Email nicholas@meok.ai for the deal sheet." },
  { q: "How is attribution tracked?", a: "Stripe UTM source on every paid checkout. You get a monthly dashboard showing every referred account + their MRR." },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function PartnerPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ marginBottom: 48, textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>MEOK Partner Program</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "16px 0" }}>20% lifetime commission. No cap. No clawback.</h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto" }}>
            For consultancies, integrators, and AI safety firms who recommend the MEOK compliance fleet to their clients. Co-marketing, lead sharing, and 12 months of paid tail.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>What you get</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: GOLD, marginBottom: 8 }}>{b.title}</h3>
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
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>Apply to become a partner</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 24, maxWidth: 600, margin: "0 auto 24px" }}>
            £99 one-time application fee (refunded on your first referred customer). Includes the partner onboarding pack: brand kit, scorecard embed snippet, Slack channel, and direct line to the founder.
          </p>
          <a
            href={STRIPE_PARTNER_DEPOSIT}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "16px 32px", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 16 }}
          >
            Apply now — £99 →
          </a>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>
            Or email <a href="mailto:nicholas@meok.ai?subject=Partner%20program" style={{ color: GOLD }}>nicholas@meok.ai</a> for the enterprise deal sheet.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>Partner FAQ</h2>
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
