import type { Metadata } from "next";

// /buy — single-page funnel for the £1 / £9 / £29 ladder.
// Designed so Nick can paste meok.ai/buy in any tweet / DM / post.
// Independent of any backend — pure Stripe checkout links.

const LADDER = [
  {
    price: "£1",
    title: "Smoke Test",
    badge: "Start here",
    blurb:
      "Signed sample MCP-Hardening report + EU AI Act Article 50 deadline tracker PDF. Validates the whole stack works end-to-end. Refundable.",
    href: "https://buy.stripe.com/fZu14p5Sc0025g91Uc8k91v",
    cta: "Get the £1 smoke test",
    schemaId: "smoke-test",
    delivery: "Instant — Stripe email receipt + downloadable artefacts.",
  },
  {
    price: "£9",
    title: "Article 50 Quick Kit",
    badge: "For AI video / image / text shops",
    blurb:
      "Implementation guide for the EU AI Act Article 50 (2 Nov 2026 watermarking cliff). C2PA + EU-Icon spec + JSON-LD emitter + uvx-runnable script. Built for Synthesia / HeyGen / Runway / Pika-class shops.",
    href: "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
    cta: "Get the £9 kit",
    schemaId: "quick-kit",
    delivery: "Instant — PDF + JSON-LD + uvx install script.",
  },
  {
    price: "£29",
    title: "Founder Office Hour",
    badge: "30 minutes, 1-on-1",
    blurb:
      "Direct call with Nicholas Templeman, founder of MEOK AI Labs. EU AI Act, DORA, NIS2, CRA, UK AI Bill, AAIF, A2A, ACP — honest answers to your compliance questions. No upsell quota.",
    href: "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
    cta: "Book the £29 founder call",
    schemaId: "founder-call",
    delivery: "Cal.com booking link in receipt. Pick a slot in next 7 days.",
  },
];

export const metadata: Metadata = {
  title:
    "Buy MEOK · £1 smoke test, £9 EU AI Act Article 50 kit, £29 founder call",
  description:
    "Three ways to use MEOK AI Labs today. £1 signed sample MCP-Hardening report. £9 Article 50 watermarking kit. £29 30-minute founder call. UK Stripe, VAT-clean, refundable. Built on the 81-MCP MEOK fleet covering EU AI Act, DORA, NIS2, CRA, AAIF, A2A, ACP, libp2p, ABCI.",
  alternates: { canonical: "https://meok.ai/buy" },
  openGraph: {
    title: "Buy MEOK — £1 / £9 / £29 instant compliance",
    description:
      "Instant-buy ladder from £1 to £29. EU AI Act, DORA, NIS2, CRA, A2A. UK Stripe, refundable.",
    type: "website",
    url: "https://meok.ai/buy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy MEOK — instant compliance from £1",
    description:
      "£1 smoke test · £9 Article 50 kit · £29 founder call. UK Stripe, refundable.",
  },
};

// Schema.org Product JSON-LD — each tier is a Product with an Offer.
// Google can index price + buy button directly in search results.
const productGraph = {
  "@context": "https://schema.org",
  "@graph": LADDER.map(t => ({
    "@type": "Product",
    "@id": `https://meok.ai/buy#${t.schemaId}`,
    name: `MEOK ${t.title}`,
    description: t.blurb,
    brand: { "@type": "Organization", name: "MEOK AI Labs" },
    sku: `meok-${t.schemaId}`,
    offers: {
      "@type": "Offer",
      url: t.href,
      priceCurrency: "GBP",
      price: t.price.replace("£", ""),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "CSOAI LTD",
        url: "https://meok.ai",
      },
      areaServed: "Worldwide",
    },
  })),
};

// FAQ schema — boosts the long-tail SEO surface.
const faqGraph = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why £1?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Lowest possible friction. £1 validates the full Stripe → webhook → receipt → fulfilment pipeline. If you like it, the £9 and £29 tiers are one click. If you don't, refund is one email.",
      },
    },
    {
      "@type": "Question",
      name: "What's the £9 kit?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "EU AI Act Article 50 implementation guide. Covers C2PA 2.2 + the EU-specific icon spec from the Code of Practice 2nd draft (Jan 2026). 2 Nov 2026 enforcement cliff. PDF + JSON-LD emitter + uvx-runnable script. Designed for Synthesia, HeyGen, Runway, Pika-class shops.",
      },
    },
    {
      "@type": "Question",
      name: "What happens on the £29 call?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "30 min with Nicholas Templeman, MEOK founder. You bring a compliance question (EU AI Act, DORA, NIS2, CRA, UK AI Bill, AAIF, A2A, ACP, libp2p, ABCI). I tell you exactly where your stack sits and what's missing. No script, no upsell quota.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK refundable?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, all three tiers. Reply to the Stripe receipt with the word 'refund' and the amount comes back within 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Who's behind MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK AI Labs is the trading name of CSOAI LTD, a UK company (Companies House #16939677). Solo founder Nicholas Templeman. 25+ open-source MCPs shipped on PyPI in May 2026, covering every major EU compliance regime plus the AAIF / A2A / ACP / libp2p / ABCI agent protocols.",
      },
    },
  ],
};

export default function BuyPage() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "#f5f5f5",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        minHeight: "100vh",
        padding: "4rem 1.5rem",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqGraph) }}
      />

      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <header style={{ marginBottom: "3rem" }}>
          <p
            style={{
              color: "#d4af37",
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            MEOK AI Labs · 81 compliance MCPs · UK Stripe
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: 0,
              color: "#fff",
            }}
          >
            Three ways to use MEOK today.
          </h1>
          <p
            style={{
              color: "#aaa",
              fontSize: "1.1rem",
              marginTop: "1rem",
              maxWidth: 680,
            }}
          >
            £1 to find out if any of this is worth anything. £9 if you ship
            AI video / image / text and want the EU AI Act Article 50
            deadline solved. £29 if you want 30 minutes with the founder.
            All refundable.
          </p>
        </header>

        <section style={{ display: "grid", gap: "1.25rem" }}>
          {LADDER.map(t => (
            <a
              key={t.schemaId}
              href={t.href}
              data-tier={t.schemaId}
              style={{
                display: "block",
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: "0.75rem",
                padding: "1.5rem 1.75rem",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 120ms",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#d4af37",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {t.badge}
                  </div>
                  <h2 style={{ margin: 0, fontSize: "1.4rem", color: "#fff" }}>
                    {t.title}
                  </h2>
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#d4af37",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.price}
                </div>
              </div>
              <p style={{ color: "#bbb", margin: "0.75rem 0 1rem", lineHeight: 1.55 }}>
                {t.blurb}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: "#888", fontSize: "0.85rem" }}>
                  {t.delivery}
                </span>
                <span
                  style={{
                    background: "#d4af37",
                    color: "#0a0a0a",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "0.45rem",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  {t.cta} →
                </span>
              </div>
            </a>
          ))}
        </section>

        <section style={{ marginTop: "3rem", color: "#888", fontSize: "0.9rem" }}>
          <h3 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
            What sits underneath
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "1rem" }}>
            81 MCPs covering the EU AI Act (Articles 9 / 13 / 26 / 50 / 73),
            DORA, NIS2 (Wbni-2 NL + DE registers), CRA Article 14, ISO 42001
            + 42005, Korea AI Basic Act, UK AI Bill, US AI Bill of Rights, AAIF
            agent cards, Google A2A, Stripe ACP, Coinbase x402, Google AP2,
            C2PA 2.2, libp2p mesh, Tendermint/Cosmos ABCI. Every MCP is
            MIT-licensed, every signed report verifies at <a href="/verify" style={{ color: "#d4af37" }}>meok.ai/verify</a>.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Want the full surface? <a href="/anthropic-registry" style={{ color: "#d4af37" }}>/anthropic-registry</a> ·
            <a href="/a2a" style={{ color: "#d4af37" }}> /a2a</a> ·
            <a href="/governance" style={{ color: "#d4af37" }}> /governance</a> ·
            <a href="/cobol" style={{ color: "#d4af37" }}> /cobol</a>
          </p>
        </section>

        <footer style={{ marginTop: "3rem", color: "#666", fontSize: "0.85rem" }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House 16939677 · founder
          <a href="mailto:nicholas@meok.ai" style={{ color: "#888", marginLeft: 4 }}>
            nicholas@meok.ai
          </a>
        </footer>
      </div>
    </main>
  );
}
