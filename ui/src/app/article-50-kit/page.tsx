import type { Metadata } from "next";
import Link from "next/link";
import { Article50Countdown } from "@/components/Article50Countdown";

export const metadata: Metadata = {
  title: "Article 50 deadline did NOT move — 2 Aug 2026 · £999 two-layer marking kit · MEOK AI Labs",
  description:
    "The EU Digital Omnibus did not defer Article 50 for new systems: 2 August 2026 is live, and the June 2026 Code of Practice requires at least two active layers of machine-readable marking. C2PA + invisible watermark + fingerprinting, £999 one-time. Ships in 7 days.",
  alternates: { canonical: "https://meok.ai/article-50-kit" },
  openGraph: {
    title: "EU AI Act Article 50 Watermarking Kit — £999, ships in 7 days",
    description: "C2PA + invisible watermark + fingerprinting + signed Article 50 conformity attestation. 2 Aug 2026 cliff.",
    type: "website",
    url: "https://meok.ai/article-50-kit",
    images: [{ url: "/api/og?title=EU+AI+Act+Article+50+Watermarking+Kit&desc=%C2%A3999+%C2%B7+ships+in+7+days+%C2%B7+2+Aug+2026+cliff", width: 1200, height: 630, alt: "Article 50 Watermarking Kit" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_LINK = "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u"; // £999 one-time Article 50 kit
const STRIPE_LINK_LAUNCH50 = "https://buy.stripe.com/4gM00d9pY7kq6oh3yM8k91R"; // £499 with LAUNCH50
const STRIPE_LINK_QUICK = "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W"; // £9 Quick Kit
const STRIPE_LINK_PRO = "https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T"; // £199/mo Pro
const STRIPE_LINK_ENTERPRISE = "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U"; // £1,499/mo Enterprise
const STRIPE_LINK_AUDIT = "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X"; // £4,950 Audit-Prep
const STRIPE_LINK_CERT = "https://buy.stripe.com/9B6dRb2G0eUWcIBaqI8k91Y"; // £4,950 CSOAI Watchdog

const PILLARS = [
  {
    pillar: "C2PA manifest",
    desc:
      "Every generated image / video / audio / text artifact ships with a Content Credentials manifest signed by your DigiCert C2PA cert. Provenance trail visible on Adobe, Google, Microsoft surfaces.",
  },
  {
    pillar: "Invisible watermark",
    desc:
      "SynthID-class invisible watermark embedded in every generated image at the model output layer. Survives crops, resizes, light edits. Not visible to the human eye.",
  },
  {
    pillar: "Perceptual fingerprinting",
    desc:
      "Hash-based fingerprint of every generated artifact stored in your private database for downstream provenance tracking + DMCA-style takedown.",
  },
  {
    pillar: "Signed compliance attestation",
    desc:
      "HMAC-signed Article 50 conformity statement for every batch of generated content. Verification URL the regulator can curl.",
  },
];

const WHY = [
  "“Isn't one watermark enough?” — Not under the June 2026 Code of Practice. It calls for at least two active layers; watermark + C2PA metadata satisfies it.",
  "“We'll just use the model provider's marking.” — Provider marks are single-layer and don't produce YOUR signed, auditor-verifiable evidence. The kit gives you proof you own.",
  "“Is C2PA real?” — v2.3, ISO/IEC 22144; Google Pixel 10 ships it, Microsoft added it to M365, OpenAI signs GPT-Image-2 with it. It's the standard.",
  "Penalties up to €15M or 3% global turnover under EU AI Act Article 99.",
];

const FAQ = [
  {
    q: "When does EU AI Act Article 50 apply?",
    a: "Article 50 transparency obligations apply from 2 August 2026. Providers of generative AI systems must mark AI-generated outputs as machine-readable; deployers must disclose AI generation to people exposed to it.",
  },
  {
    q: "What's the fine for Article 50 non-compliance?",
    a: "Up to €15 million or 3% of global annual turnover, whichever is higher (EU AI Act Article 99). Penalties apply per infringement and can be cumulative across multiple outputs.",
  },
  {
    q: "Does C2PA Content Credentials alone satisfy Article 50?",
    a: "No. The second draft of the EU Code of Practice on marking AI-generated content (3 March 2026) explicitly requires a two-layered approach: secured C2PA metadata PLUS an imperceptible (invisible) watermark, with fingerprinting/logging as a fallback. Single-layer C2PA-only is non-compliant under the draft Code.",
  },
  {
    q: "Will the watermark survive screenshots, recompression, or light editing?",
    a: "Yes for SynthID-class invisible watermarks at the model output layer. C2PA metadata strips on screenshot but our perceptual fingerprint database lets you reidentify the artefact. The three-layer redundancy is exactly why single-layer tools fail audit.",
  },
  {
    q: "Does Article 50 apply to text outputs or only images, video, audio?",
    a: "Text is in scope (Art. 50(2)). The Code of Practice draft prefers imperceptible watermarking for text where technically feasible; otherwise the deployer disclosure obligation alone applies (visible 'this is AI-generated' label).",
  },
  {
    q: "Is the £999 kit a one-time purchase or recurring?",
    a: "£999 one-time for the watermarking + C2PA + fingerprinting bundle plus signed Article 50 conformity attestation. Optional £99/mo monitoring covers continuous attestation regeneration + Code of Practice update tracking. Cancel monitoring any time.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EU AI Act Article 50 Watermarking Kit",
  description:
    "C2PA + invisible watermark + perceptual fingerprinting bundle + signed Article 50 conformity attestation. Code-of-Practice-aligned (May-June 2026 finalisation).",
  brand: { "@type": "Brand", name: "MEOK AI Labs" },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/article-50-kit",
    seller: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  },
};

export default function Article50KitPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Article50Countdown />
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
          ⚠️ Hard cliff: 2 August 2026
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
          The EU AI Act Article 50 deadline did <em>not</em> move.
          <br />
          <span style={{ color: GOLD }}>2 August 2026 is live.</span>
        </h1>
        <p style={{ fontSize: "1.5rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          Article 50 Watermarking Kit — £999 one-time + £99/mo monitoring (optional)
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 24 }}>
          New AI systems must mark machine-generated output with <strong>at least two active layers</strong> of
          machine-readable marking. We ship both — turnkey — in days: C2PA manifest + invisible
          watermark + perceptual fingerprinting + signed Article 50 conformity attestation.
        </p>

        <div
          style={{
            background: "white",
            borderLeft: `4px solid #dc2626`,
            borderRadius: 12,
            padding: "18px 22px",
            maxWidth: 680,
            marginBottom: 32,
          }}
        >
          <p style={{ fontWeight: 900, marginBottom: 8, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            What the Digital Omnibus actually changed (and didn&apos;t)
          </p>
          <ul style={{ paddingLeft: 18, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            <li><strong>New systems: still 2 August 2026.</strong> Not deferred.</li>
            <li><em>Legacy</em> generative systems: 2 December 2026.</li>
            <li>High-risk (Annex III) classification: slipped to Dec 2027.</li>
            <li>
              The final <strong>Code of Practice on AI-Generated Content (June 2026)</strong> requires{" "}
              <strong>at least two active layers of machine-readable marking</strong> — watermark{" "}
              <strong>+</strong> metadata/C2PA. One layer is no longer enough.
            </li>
          </ul>
        </div>

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
            Buy Kit — £999 →
          </a>
          <Link
            href="/scorecard"
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
            Not sure you&apos;re in scope? Free 90-sec Scorecard →
          </Link>
          <Link
            href="/eu-code-of-practice"
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
            EU Code of Practice first-mover →
          </Link>
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
            30-min readiness check (free) →
          </a>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Choose your tier
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            {
              tier: "Quick Kit", price: "£9", sub: "one-time",
              desc: "Test the kit on a small scale. C2PA manifest only. No watermark.",
              cta: "Get £9 Quick Kit", href: STRIPE_LINK_QUICK, primary: false,
            },
            {
              tier: "Article 50 Kit (LAUNCH50)", price: "£499", sub: "£999 → £499, 50% off",
              desc: "Full kit: C2PA + invisible watermark + perceptual fingerprint + HMAC attestation. Limited time.",
              cta: "Buy LAUNCH50 — £499", href: STRIPE_LINK_LAUNCH50, primary: true,
            },
            {
              tier: "Article 50 Kit", price: "£999", sub: "one-time",
              desc: "Full kit + 90-day support + 1 conformity attestation. Ships in 7 days.",
              cta: "Buy — £999", href: STRIPE_LINK, primary: false,
            },
            {
              tier: "Pro (ongoing)", price: "£199", sub: "/month",
              desc: "C2PA + watermark + fingerprint + monthly attestations + new-model support.",
              cta: "Subscribe — £199/mo", href: STRIPE_LINK_PRO, primary: false,
            },
            {
              tier: "Enterprise", price: "£1,499", sub: "/month",
              desc: "Multi-tenant, custom rules, council governance, unlimited attestations.",
              cta: "Talk sales — £1,499/mo", href: STRIPE_LINK_ENTERPRISE, primary: false,
            },
            {
              tier: "Audit-Prep Bundle", price: "£4,950", sub: "one-time",
              desc: "Auditor-ready evidence pack for ISO 42001 / EU AI Act / DORA. CEASAI-aligned.",
              cta: "Buy Audit-Prep — £4,950", href: STRIPE_LINK_AUDIT, primary: false,
            },
            {
              tier: "CSOAI Watchdog Cert", price: "£4,950", sub: "one-time",
              desc: "Third-party CEASAI certification. MEOK signs the cert. Auditor verifies.",
              cta: "Buy Watchdog Cert — £4,950", href: STRIPE_LINK_CERT, primary: false,
            },
          ].map((t) => (
            <div
              key={t.tier}
              style={{
                background: t.primary ? NAVY : "white",
                color: t.primary ? "white" : NAVY,
                borderRadius: 14,
                padding: 20,
                border: `2px solid ${t.primary ? GOLD : NAVY + "1a"}`,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", color: t.primary ? GOLD : GOLD }}>
                {t.tier}
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>
                {t.price}
                <span style={{ fontSize: 12, fontWeight: 400, opacity: 0.7, marginLeft: 4 }}>
                  {t.sub}
                </span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.5, opacity: 0.85, margin: 0, flex: 1 }}>
                {t.desc}
              </p>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: t.primary ? GOLD : "transparent",
                  color: t.primary ? NAVY : NAVY,
                  fontWeight: 900,
                  textDecoration: "none",
                  fontSize: 13,
                  border: t.primary ? "none" : `1px solid ${NAVY}33`,
                }}
              >
                {t.cta} →
              </a>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Why two layers, why us
        </h2>
        <ul style={{ marginBottom: 32, paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
          {WHY.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <div style={{ display: "grid", gap: 16, marginBottom: 64 }}>
          {PILLARS.map((p) => (
            <div
              key={p.pillar}
              style={{
                padding: 22,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 900, marginBottom: 6, color: GOLD }}>
                {p.pillar}
              </h3>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Ships within 7 days of order
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            All three layers + signed conformity attestation. 90-day setup support included.
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
            Buy — £999 →
          </a>
        </div>

        {/* FAQ section — visible + schema */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>
          Article 50 — frequently asked
        </h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 13, textAlign: "center" }}>
          Need more than the kit? See the{" "}
          <Link href="/audit-prep-bundle" style={{ color: GOLD }}>
            £4,950 Audit-Prep Bundle
          </Link>{" "}
          (kit + 2-day engagement + 90-day support). Refund policy:{" "}
          <Link href="/refund" style={{ color: GOLD }}>
            14-day pre-deployment
          </Link>
          .
          <br />
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
