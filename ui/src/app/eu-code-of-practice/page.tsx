import type { Metadata } from "next";
import Link from "next/link";
import { Article50Countdown } from "@/components/Article50Countdown";

export const metadata: Metadata = {
  title: "EU Code of Practice first-mover · AI content marking standard · MEOK AI Labs",
  description:
    "The EU Code of Practice on AI-Generated Content finalises June 2026. Mandates two-layer marking: C2PA + invisible watermark. Be first-mover compliant before the autumn final draft locks in requirements.",
  alternates: { canonical: "https://meok.ai/eu-code-of-practice" },
  openGraph: {
    title: "EU Code of Practice — First-Mover Advantage",
    description: "Two-layer marking (C2PA + invisible watermark) mandated in June 2026 draft. Be compliant before the final standard. £999 one-time.",
    type: "website",
    url: "https://meok.ai/eu-code-of-practice",
    images: [{ url: "/api/og?title=EU+Code+of+Practice&desc=First-mover+advantage+%C2%B7+June+2026+finalisation", width: 1200, height: 630, alt: "EU Code of Practice" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_LINK = "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u";
const STRIPE_LINK_LAUNCH50 = "https://buy.stripe.com/4gM00d9pY7kq6oh3yM8k91R";
const STRIPE_LINK_PRO = "https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T";
const STRIPE_LINK_ENTERPRISE = "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U";

const PILLARS = [
  {
    pillar: "C2PA Content Credentials",
    desc: "Every AI-generated artifact ships with a signed C2PA manifest. ISO/IEC 22144 compliant. Visible on Adobe, Google, Microsoft surfaces.",
  },
  {
    pillar: "Invisible watermarking",
    desc: "SynthID-class invisible watermark embedded at the model output layer. Survives crops, resizes, recompression. Not visible to the human eye.",
  },
  {
    pillar: "Perceptual fingerprint DB",
    desc: "Hash-based fingerprint of every generated artifact stored for downstream provenance tracking. Works even when C2PA metadata is stripped.",
  },
  {
    pillar: "Signed compliance attestation",
    desc: "HMAC-signed Code-of-Practice conformity statement per batch. Verification URL the regulator can curl. Ed25519 signed.",
  },
];

const WHY = [
  "The June 2026 Code of Practice draft is the final version before the autumn standard. First-movers set the compliance baseline everyone else migrates to.",
  "Two-layer marking (C2PA + watermark) is the minimum. Single-layer tools fail audit. The Code calls this out explicitly.",
  "Being first-mover means your compliance posture is set before the final standard drops. No scramble, no panic-buying at Q4 prices.",
  "Penalties up to EUR 15M or 3% of global turnover under EU AI Act Article 99 for non-compliance.",
];

const FAQ = [
  {
    q: "When does the EU Code of Practice finalise?",
    a: "The second draft was published 3 March 2026. The final Code of Practice on AI-Generated Content is expected to finalise June 2026, with the autumn 2026 legislative process locking in the standard. First-movers who comply now avoid the Q4 scramble.",
  },
  {
    q: "What does the Code require?",
    a: "At least two active layers of machine-readable marking: (1) secured C2PA metadata or equivalent Content Credentials, AND (2) an imperceptible watermark embedded at the model output layer. Perceptual fingerprinting and logging serve as a fallback where watermarking is not technically feasible.",
  },
  {
    q: "How is this different from Article 50 compliance?",
    a: "Article 50 sets the legal obligation (you MUST mark AI output). The Code of Practice defines the HOW (two-layer C2PA + watermark). Compliance with the Code creates a presumption of conformity with Article 50. The kit satisfies both.",
  },
  {
    q: "Can I start now and adjust later?",
    a: "Yes — the kit is modular. Start with C2PA manifest-only (Quick Kit, £9), add watermarking when ready, add fingerprinting when scaling. Every tier is forward-compatible with the final standard.",
  },
  {
    q: "What happens if I wait until autumn?",
    a: "The final standard drops when everyone else wakes up to it. Integration queues, consultant rates, and implementation timelines all spike. First-movers who integrated in June have a 4-6 month lead on the late majority.",
  },
  {
    q: "Do I need this if I already mark outputs?",
    a: "Single-layer marking (e.g. visible watermark only, or C2PA-only without an imperceptible layer) does not satisfy the Code's two-layer requirement. The kit adds the missing layer with zero integration changes to your existing pipeline.",
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
  name: "EU Code of Practice — First-Mover Kit",
  description:
    "C2PA + invisible watermark + perceptual fingerprinting bundle + signed conformity attestation. Aligned with the June 2026 EU Code of Practice on AI-Generated Content.",
  brand: { "@type": "Brand", name: "MEOK AI Labs" },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/eu-code-of-practice",
    seller: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  },
};

export default function EUCodeOfPracticePage() {
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
            background: "rgba(201,168,76,0.1)",
            border: `1px solid rgba(201,168,76,0.4)`,
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          🏆 First-mover window: June 2026
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
          The EU Code of Practice finalises{" "}
          <span style={{ color: GOLD }}>this month.</span>
          <br />
          Be first-mover compliant before the standard locks.
        </h1>
        <p style={{ fontSize: "1.5rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          Code-of-Practice-ready kit — £999 one-time + £99/mo monitoring (optional)
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 24 }}>
          The June 2026 draft mandates <strong>at least two active layers</strong> of machine-readable
          marking. C2PA Content Credentials + invisible watermark + perceptual fingerprinting +
          signed conformity attestation. One kit, deployed in days.
        </p>

        <div
          style={{
            background: "white",
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: 12,
            padding: "18px 22px",
            maxWidth: 680,
            marginBottom: 32,
          }}
        >
          <p style={{ fontWeight: 900, marginBottom: 8, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Why first-mover matters
          </p>
          <ul style={{ paddingLeft: 18, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            <li><strong>June 2026:</strong> Code of Practice final draft published.</li>
            <li><strong>Autumn 2026:</strong> Standard locked into legislative process.</li>
            <li><strong>2 Aug 2026:</strong> Article 50 transparency obligations begin.</li>
            <li>First-movers who integrate now have a <strong>4-6 month lead</strong> on the late majority.</li>
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
            href="/article-50-kit"
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
            Compare Article 50 Kit →
          </Link>
          <a
            href="mailto:nicholas@meok.ai?subject=Code%20of%20Practice%20first-mover%20kit%20&body=Hi%20Nicholas%2C%0A%0AI%20want%20to%20discuss%20the%20EU%20Code%20of%20Practice%20first-mover%20kit.%0A%0ACompany%3A%20%5BCompany%5D%0AContext%3A%20%5BAI%20systems%20we%20operate%5D%0A%0AThanks"
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
            Free 30-min readiness check →
          </a>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Choose your tier
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            {
              tier: "Quick Kit", price: "£9", sub: "one-time",
              desc: "Test C2PA Content Credentials on a small scale. No watermark.",
              cta: "Get £9 Quick Kit", href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W", primary: false,
            },
            {
              tier: "CoP Kit (LAUNCH50)", price: "£499", sub: "£999 → £499, 50% off",
              desc: "Full kit: C2PA + invisible watermark + fingerprint + HMAC attestation. Limited time.",
              cta: "Buy LAUNCH50 — £499", href: STRIPE_LINK_LAUNCH50, primary: true,
            },
            {
              tier: "CoP Kit", price: "£999", sub: "one-time",
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
          ].map((t) => (
            <div
              key={t.tier}
              style={{
                background: "white",
                borderRadius: 12,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                border: t.primary ? `2px solid ${GOLD}` : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: `${NAVY}66`, marginBottom: 4 }}>
                {t.tier}
              </p>
              <p style={{ fontSize: "2rem", fontWeight: 900, margin: 0 }}>
                {t.price}
                <span style={{ fontSize: 12, fontWeight: 400, color: `${NAVY}66` }}>
                  {" "}{t.sub}
                </span>
              </p>
              <p style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5, flex: 1, margin: "12px 0 20px" }}>
                {t.desc}
              </p>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px 0",
                  borderRadius: 10,
                  background: t.primary ? GOLD : `${NAVY}0d`,
                  color: t.primary ? NAVY : NAVY,
                  fontWeight: 900,
                  textDecoration: "none",
                  fontSize: 14,
                }}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          What&apos;s in the kit
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 40 }}>
          {PILLARS.map((p) => (
            <div key={p.pillar} style={{ background: "white", borderRadius: 12, padding: "24px 20px" }}>
              <p style={{ fontSize: 14, fontWeight: 900, marginBottom: 8, color: GOLD, letterSpacing: "0.02em" }}>
                {p.pillar}
              </p>
              <p style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.6, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Why this matters now
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
          {WHY.map((w, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 12,
                padding: "16px 20px",
                fontSize: 14,
                color: `${NAVY}cc`,
                lineHeight: 1.6,
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              {w}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Frequently asked questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 48 }}>
          {FAQ.map((f, i) => (
            <details
              key={i}
              style={{
                background: "white",
                borderRadius: 12,
                padding: "14px 20px",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              <summary style={{ fontWeight: 900, color: NAVY, marginBottom: 8 }}>
                {f.q}
              </summary>
              <p style={{ color: `${NAVY}99`, lineHeight: 1.7, margin: 0 }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div style={{ textAlign: "center", borderTop: `1px solid ${NAVY}15`, paddingTop: 32 }}>
          <p style={{ fontSize: 13, color: `${NAVY}66`, marginBottom: 8 }}>
            Already using our Article 50 Kit? The CoP Kit adds Code-of-Practice-specific attestation.
          </p>
          <Link href="/article-50-kit" style={{ color: GOLD, fontWeight: 900, fontSize: 13 }}>
            See the Article 50 Watermarking Kit →
          </Link>
        </div>
      </div>
    </main>
  );
}
