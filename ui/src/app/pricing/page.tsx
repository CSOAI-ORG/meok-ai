import type { Metadata } from "next";
import { PricingCard } from "@meok/ui";

export const metadata: Metadata = {
  title: "Pricing — MEOK Compliance MCP Fleet | Two Product Lines | MEOK.AI",
  description:
    "MEOK pricing: two product lines. Consumer (Explorer free, Sovereign £9, Pro £19, Family £29) for individuals. Compliance (Starter £29, Pro £199, Enterprise £1,499) for organisations. Article 50 Kit £999. All GBP, all live.",
  keywords: [
    "MEOK pricing",
    "compliance MCP pricing",
    "EU AI Act cost",
    "DORA compliance cost",
    "NIS2 cost",
    "Article 50 kit price",
    "Sovereign AI pricing",
  ],
  alternates: { canonical: "https://meok.ai/pricing" },
  openGraph: {
    title: "MEOK Pricing — Consumer + Compliance tiers",
    description: "Two product lines, one substrate. Explorer free through Enterprise £1,499/mo.",
    type: "website",
    url: "https://meok.ai/pricing",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Pricing&desc=Consumer+%2B+Compliance+tiers",
        width: 1200,
        height: 630,
        alt: "MEOK Pricing",
      },
    ],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const CONSUMER_TIERS = [
  {
    tier: "Explorer",
    price: "Free",
    sub: "forever",
    desc: "50 messages/day, persistent Sovereign Memory, sovereign AI agent.",
    cta: { label: "Start free", href: "https://meok.ai/signup", primary: false },
  },
  {
    tier: "Sovereign",
    price: "£9/mo",
    sub: "billed monthly",
    desc: "Permanent memory, unlimited messages, Work OS, custom character evolution.",
    cta: { label: "Subscribe £9/mo", href: "https://buy.stripe.com/9B67sNeoIcMObEx56o8k91S", primary: true },
  },
  {
    tier: "Sovereign Pro",
    price: "£19/mo",
    sub: "billed monthly",
    desc: "All LLM models, custom character evolution, advanced memory graph.",
    cta: { label: "Subscribe £19/mo", href: "https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T", primary: false },
  },
  {
    tier: "Family",
    price: "£29/mo",
    sub: "up to 5 members",
    desc: "Family OS for up to 5 members, Guardian 24/7, all LLM models, shared memory vault.",
    cta: { label: "Subscribe £29/mo", href: "https://buy.stripe.com/4gM00d9pY7kq6oh3yM8k91R", primary: false },
  },
];

const COMPLIANCE_TIERS = [
  {
    tier: "Sovereign Starter",
    price: "£29/mo",
    sub: "compliance tier",
    desc: "Audit trail + 5 MCPs + signed evidence chain.",
    cta: { label: "Subscribe £29/mo", href: "https://buy.stripe.com/9B67sNeoIcMObEx56o8k91S", primary: false },
  },
  {
    tier: "Pro",
    price: "£199/mo",
    sub: "compliance tier",
    desc: "Full MCP fleet + monthly attestations + new-regulator alerts + 50 MCPs.",
    cta: { label: "Subscribe £199/mo", href: "https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T", primary: true },
  },
  {
    tier: "Enterprise",
    price: "£1,499/mo",
    sub: "multi-tenant",
    desc: "Council governance + custom rules + white-label portal + multi-region deploy.",
    cta: { label: "Subscribe £1,499/mo", href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U", primary: false },
  },
];

const ONE_TIME = [
  {
    tier: "Article 50 Kit",
    price: "£999",
    sub: "one-time",
    desc: "C2PA + SynthID + perceptual fingerprinting + Ed25519 attestations. EU Code of Practice compliant.",
    cta: { label: "Buy Article 50 Kit", href: "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u", primary: false },
  },
  {
    tier: "LAUNCH50",
    price: "£499",
    sub: "£999 -> £499, 50% off",
    desc: "Article 50 Kit at half price. Limited time. Same kit, same delivery.",
    cta: { label: "Buy LAUNCH50", href: "https://buy.stripe.com/4gM00d9pY7kq6oh3yM8k91R", primary: true },
  },
  {
    tier: "Quick Kit",
    price: "£9",
    sub: "one-time",
    desc: "Test the kit on a small scale. C2PA manifest only, no watermark. Sample compliance.",
    cta: { label: "Buy Quick Kit", href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W", primary: false },
  },
  {
    tier: "Audit-Prep Bundle",
    price: "£4,950",
    sub: "one-time",
    desc: "Auditor-ready evidence pack aligned to ISO 42001 + ISO 42005 + EU AI Act. CEASAI-aligned.",
    cta: { label: "Buy Audit-Prep", href: "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X", primary: false },
  },
  {
    tier: "CSOAI Watchdog Cert",
    price: "£4,950",
    sub: "one-time",
    desc: "Third-party CEASAI certification. MEOK signs the cert. Auditor verifies offline.",
    cta: { label: "Buy Watchdog Cert", href: "https://buy.stripe.com/9B6dRb2G0eUWcIBaqI8k91Y", primary: false },
  },
];

const NOTES = [
  { label: "Live mode", value: "All prices are GBP, livemode, acct MEOK AI LTD acct_1TLlEKQvIueK5Xpb." },
  { label: "VAT", value: "Prices exclude VAT. UK customers: 20% VAT added at checkout. EU customers: reverse-charge for VAT-registered businesses." },
  { label: "Cancellation", value: "Cancel anytime. Pro-rated refund within 14 days. No refund after 14 days." },
  { label: "Compliance evidence", value: "Every subscription includes signed evidence. MEOK signs the same HMAC and Ed25519 keys customers use." },
  { label: "Pricing changes", value: "We do not retroactively increase prices for existing customers. New prices apply only on renewal." },
];

const FAQ = [
  {
    q: "What's the difference between the Consumer and Compliance product lines?",
    a: "Consumer tiers (Explorer free, Sovereign £9/mo, Sovereign Pro £19/mo, Family £29/mo) are for individuals using MEOK as a personal AI companion with persistent Sovereign Memory and character evolution. Compliance tiers (Starter £29/mo, Pro £199/mo, Enterprise £1,499/mo) are for organisations under EU AI Act, DORA, NIS2, GDPR, ISO 42001, SOC 2, HIPAA, or FDA, and add the HMAC-signed evidence chain, monthly attestations, and council governance.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Explorer tier is free forever and includes 50 messages/day, persistent Sovereign Memory, and a sovereign AI agent. No card required to start.",
  },
  {
    q: "Do you offer one-time purchases instead of a subscription?",
    a: "Yes. The Article 50 Kit is £999 (C2PA + SynthID + perceptual fingerprinting + Ed25519 attestations), with a LAUNCH50 half-price option at £499. There's also a £9 Quick Kit to test on a small scale, an Audit-Prep Bundle at £4,950 (ISO 42001 + ISO 42005 + EU AI Act aligned), and a CSOAI Watchdog Cert at £4,950. One-time purchases ship in 7 days or less.",
  },
  {
    q: "How is VAT handled and can I cancel?",
    a: "All prices exclude VAT; UK customers have 20% VAT added at checkout and VAT-registered EU businesses use reverse-charge. You can cancel any subscription anytime, with a pro-rated refund within 14 days. We never retroactively increase prices for existing customers.",
  },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://meok.ai/pricing" },
  ],
};

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MEOK Compliance MCP Fleet",
  description: "MEOK pricing across two product lines: Consumer (Explorer free, Sovereign, Sovereign Pro, Family) and Compliance (Starter, Pro, Enterprise), plus one-time kits.",
  brand: { "@type": "Brand", name: "MEOK AI" },
  url: "https://meok.ai/pricing",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "9",
    highPrice: "4950",
    offerCount: 12,
    offers: [
      { "@type": "Offer", name: "Sovereign", price: "9", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "Sovereign Pro", price: "19", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "Family", price: "29", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "Sovereign Starter", price: "29", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "Compliance Pro", price: "199", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "Enterprise", price: "1499", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "Article 50 Kit", price: "999", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "LAUNCH50", price: "499", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "Quick Kit", price: "9", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "Audit-Prep Bundle", price: "4950", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
      { "@type": "Offer", name: "CSOAI Watchdog Cert", price: "4950", priceCurrency: "GBP", url: "https://meok.ai/pricing" },
    ],
  },
};

export default function PricingPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSONLD) }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ marginBottom: 48, textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>MEOK AI Labs · Ratified 2026-06-10</p>
          <h1 style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, margin: "16px 0" }}>Two product lines, one substrate.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto" }}>
            Consumer (Explorer through Family) for individuals. Compliance (Starter through Enterprise) for regulated organisations. Article 50 Kit, Audit-Prep, and Watchdog Cert as one-time purchases.
          </p>
        </header>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Consumer tier</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, marginBottom: 20, maxWidth: 720 }}>
            For individuals using MEOK as a personal AI companion. Persistent memory, character evolution, family OS.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONSUMER_TIERS.map((t) => (
              <PricingCard
                key={t.tier}
                product={{
                  id: t.tier,
                  name: t.tier,
                  price: t.price,
                  sub: t.sub,
                  description: t.desc,
                  href: t.cta.href,
                  featured: t.cta.primary,
                  cta: t.cta.label,
                }}
              />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Compliance tier</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, marginBottom: 20, maxWidth: 720 }}>
            For organisations operating under EU AI Act, DORA, NIS2, GDPR, ISO 42001, SOC 2, HIPAA, or FDA. HMAC-signed evidence chain, monthly attestations, council governance.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPLIANCE_TIERS.map((t) => (
              <PricingCard
                key={t.tier}
                product={{
                  id: t.tier,
                  name: t.tier,
                  price: t.price,
                  sub: t.sub,
                  description: t.desc,
                  href: t.cta.href,
                  featured: t.cta.primary,
                  cta: t.cta.label,
                }}
              />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>One-time purchases</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, marginBottom: 20, maxWidth: 720 }}>
            For specific compliance needs that don't require a subscription. Ships in 7 days or less.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {ONE_TIME.map((t) => (
              <PricingCard
                key={t.tier}
                product={{
                  id: t.tier,
                  name: t.tier,
                  price: t.price,
                  sub: t.sub,
                  description: t.desc,
                  href: t.cta.href,
                  featured: t.cta.primary,
                  cta: t.cta.label,
                }}
              />
            ))}
          </div>
        </section>

        <section style={{ background: "white", borderRadius: 14, padding: 32, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Fine print</h2>
          <dl style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "12px 24px", fontSize: 14 }}>
            {NOTES.map((n) => (
              <div key={n.label} style={{ display: "contents" }}>
                <dt style={{ fontWeight: 900, color: NAVY }}>{n.label}</dt>
                <dd style={{ margin: 0, color: `${NAVY}cc`, lineHeight: 1.5 }}>{n.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Frequently asked</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, marginBottom: 20, maxWidth: 720 }}>
            Pricing, plans, VAT, and one-time purchases.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 14, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 900, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ background: NAVY, color: "white", borderRadius: 14, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>Need a custom quote?</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
            If you're a regulator, a global enterprise, or a non-standard deployment, we ship custom contracts. Talk to me directly.
          </p>
          <a href="mailto:nicholas@meok.ai?subject=Custom%20quote" style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            nicholas@meok.ai →
          </a>
        </section>
      </div>
    </main>
  );
}
