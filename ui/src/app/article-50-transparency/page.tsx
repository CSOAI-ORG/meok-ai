import type { Metadata } from "next";
import Link from "next/link";
import { Article50Countdown } from "@/components/Article50Countdown";

export const metadata: Metadata = {
  title:
    "Article 50 transparency obligations · disclosure notices, AI labels, penalties · MEOK AI Labs",
  description:
    "Full breakdown of EU AI Act Article 50 transparency obligations: what must be disclosed, to whom, by when. Disclosure notices, user-facing labels, machine-readable marking requirements. Penalties up to €15M or 3% global turnover.",
  alternates: {
    canonical: "https://meok.ai/article-50-transparency",
  },
  openGraph: {
    title:
      "Article 50 Transparency — What You Must Disclose, to Whom, by When",
    description:
      "Disclosure notices, user-facing AI labels, machine-readable marking. 2 August 2026 cliff. Penalties up to €15M or 3% global turnover.",
    type: "website",
    url: "https://meok.ai/article-50-transparency",
    images: [
      {
        url: "/api/og?title=Article+50+Transparency+Obligations&desc=Disclosure+notices+%C2%B7+AI+labels+%C2%B7+penalties+up+to+%E2%82%AC15M",
        width: 1200,
        height: 630,
        alt: "Article 50 Transparency Obligations",
      },
    ],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_LINK = "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u";
const STRIPE_LINK_LAUNCH50 = "https://buy.stripe.com/4gM00d9pY7kq6oh3yM8k91R";
const STRIPE_LINK_QUICK = "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W";
const STRIPE_LINK_PRO = "https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T";
const STRIPE_LINK_ENTERPRISE = "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U";
const STRIPE_LINK_AUDIT = "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X";
const STRIPE_LINK_CERT = "https://buy.stripe.com/9B6dRb2G0eUWcIBaqI8k91Y";

const OBLIGATION_TYPES = [
  {
    label: "Deployer disclosure",
    desc: "Any deployer of a generative AI system must disclose to natural persons exposed to AI-generated content that the content is artificially generated. This applies to images, video, audio, and text.",
  },
  {
    label: "Provider machine-readable marking",
    desc: "Providers of generative AI systems must ensure AI-generated outputs are marked in a machine-readable format. Article 50(2) mandates technical solutions enabling detection that content is AI-generated.",
  },
  {
    label: "User-facing labels",
    desc: "When a deployer uses AI to generate or manipulate content that resembles existing persons, objects, places, or events, a visible label must accompany the output identifying it as artificially generated or manipulated.",
  },
  {
    label: "Emotion recognition / biometric categorisation",
    desc: "Deployers of emotion recognition or biometric categorisation systems must inform natural persons subjected to the system. This carries separate disclosure requirements under Article 50(3).",
  },
  {
    label: "Deepfake transparency",
    desc: "AI-generated or manipulated content that substantially resembles real persons or events (deepfakes) must be labelled as artificially generated, subject to certain exceptions for lawful purposes.",
  },
];

const WHY = [
  "“We already label outputs with a small AI icon.” — A tiny icon in the corner of your interface is almost certainly non-compliant. Article 50 requires disclosure that is clearly visible and distinguishable. The Code of Practice specifies minimum label prominence standards.",
  "“Our users don't need to know — it's B2B.” — Article 50 applies to all deployers, not just B2C. B2B deployers must still mark machine-readable disclosure and provide labels if natural persons are exposed.",
  "“We'll handle it after the final Code of Practice is published.” — The 2 August 2026 deadline is fixed by Article 50 itself, not the Code of Practice. The Code only clarifies how to comply. Waiting risks penalties from day one.",
  "Penalties up to €15M or 3% global annual turnover under EU AI Act Article 99. Enforcement begins 2 August 2026 for new systems.",
];

const FAQ = [
  {
    q: "What must be disclosed under Article 50?",
    a: "Article 50 distinguishes between provider obligations and deployer obligations. Providers must ensure AI-generated outputs are machine-readable (technical detection provenance). Deployers must disclose AI generation to natural persons exposed to the output, label deepfakes, and inform persons subjected to emotion recognition or biometric categorisation systems. The Code of Practice (finalising June 2026) provides the technical specification for machine-readable marking.",
  },
  {
    q: "To whom must disclosure be made?",
    a: "Disclosure must be made to any natural person exposed to AI-generated content. This includes end users viewing AI-generated images, videos, or text; persons interacting with AI chatbots; employees using AI tools in the workplace; and any person whose biometric data is processed by an emotion recognition system. In B2B contexts, the obligation transfers to the deployer who interfaces with end users.",
  },
  {
    q: "When does Article 50 take effect?",
    a: "Article 50 transparency obligations apply from 2 August 2026 for providers and deployers of new generative AI systems placed on the market after that date. Legacy systems (placed on market before 2 August 2026) have until 2 December 2026. Existing high-risk AI systems classified under Annex III have until December 2027. The Digital Omnibus did not alter the Article 50 timetable for new systems.",
  },
  {
    q: "What are the penalties for non-compliance with Article 50?",
    a: "Non-compliance with Article 50 transparency obligations attracts penalties under EU AI Act Article 99: up to €15 million or 3% of the undertaking's total global annual turnover for the preceding financial year, whichever is higher. Penalties are per infringement and can be cumulative across multiple outputs. National supervisory authorities also have powers to issue public warnings, impose corrective measures, and require withdrawal from the market.",
  },
  {
    q: "What is a 'deployer' for Article 50 purposes?",
    a: "A 'deployer' means any natural or legal person, public authority, agency or other body using an AI system under its own authority. If your organisation integrates a third-party generative AI model (GPT, Claude, Gemini, Stable Diffusion, etc.) into your product or service and exposes the output to users, you are a deployer with independent Article 50 disclosure obligations. This cannot be contracted away to the model provider.",
  },
  {
    q: "Does machine-readable marking satisfy the deployer disclosure obligation?",
    a: "Not on its own. Machine-readable marking (Article 50(2)) satisfies the provider's obligation to ensure outputs carry technical provenance data. Deployers must additionally provide a visible, clear, distinguishable disclosure to natural persons. The Code of Practice treats these as separate but complementary obligations. Our Article 50 Kit addresses both: machine-readable C2PA + invisible watermark for provider marking, plus compliance attestation guidance for deployer disclosure workflows.",
  },
  {
    q: "What should we be doing right now — 90 days out?",
    a: "First, identify every system in your organisation that generates or manipulates content using AI. Map each to its deployment context (B2C, B2B, internal). Second, select a technical marking solution that covers at least two machine-readable layers as required by the Code of Practice (C2PA + invisible watermark). Third, design your deployer disclosure workflow — where, when, and how natural persons will see the AI label. Fourth, document your compliance approach for audit readiness. Our free 30-min triage call can help you scope this.",
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
  name: "EU AI Act Article 50 Transparency Compliance Kit",
  description:
    "Disclosure notices, user-facing AI labelling guidance, machine-readable marking (C2PA + invisible watermark), and signed Article 50 conformity attestation. Code-of-Practice-aligned.",
  brand: { "@type": "Brand", name: "MEOK AI Labs" },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/article-50-transparency",
    seller: {
      "@type": "Organization",
      name: "MEOK AI Labs",
      url: "https://meok.ai",
    },
  },
};

export default function Article50TransparencyPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PRODUCT_JSONLD),
        }}
      />
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
          Article 50 Transparency Obligations
          <br />
          <span style={{ color: GOLD }}>
            What you must disclose, to whom, by when
          </span>
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: GOLD,
            fontWeight: 900,
            marginBottom: 8,
          }}
        >
          Article 50 Watermarking Kit — £999 one-time + £99/mo monitoring
          (optional)
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            color: `${NAVY}99`,
            maxWidth: 640,
            marginBottom: 24,
          }}
        >
          Article 50(1)–(3) imposes three distinct transparency obligations:{" "}
          <strong>machine-readable marking</strong> by providers,{" "}
          <strong>visible disclosure</strong> by deployers, and{" "}
          <strong>deepfake labelling</strong> for manipulated content. The
          second draft of the Code of Practice (3 March 2026) clarifies how
          each obligation is satisfied. Non-compliance risks penalties up to{" "}
          <strong>€15M or 3% global turnover</strong>.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
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
            Free 90-sec Scope Scorecard →
          </Link>
          <Link
            href="/article-50-marking"
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
            Technical: Two-layer Marking →
          </Link>
          <Link
            href="/code-of-practice-2nd-draft"
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
            Code of Practice 2nd Draft →
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

        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 900,
            marginBottom: 24,
            letterSpacing: "-0.01em",
          }}
        >
          Choose your tier
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {[
            {
              tier: "Quick Kit",
              price: "£9",
              sub: "one-time",
              desc: "Test the kit on a small scale. C2PA manifest only. No watermark.",
              cta: "Get £9 Quick Kit",
              href: STRIPE_LINK_QUICK,
              primary: false,
            },
            {
              tier: "Article 50 Kit (LAUNCH50)",
              price: "£499",
              sub: "£999 → £499, 50% off",
              desc: "Full kit: C2PA + invisible watermark + perceptual fingerprint + HMAC attestation. Limited time.",
              cta: "Buy LAUNCH50 — £499",
              href: STRIPE_LINK_LAUNCH50,
              primary: true,
            },
            {
              tier: "Article 50 Kit",
              price: "£999",
              sub: "one-time",
              desc: "Full kit + 90-day support + 1 conformity attestation. Ships in 7 days.",
              cta: "Buy — £999",
              href: STRIPE_LINK,
              primary: false,
            },
            {
              tier: "Pro (ongoing)",
              price: "£199",
              sub: "/month",
              desc: "C2PA + watermark + fingerprint + monthly attestations + new-model support.",
              cta: "Subscribe — £199/mo",
              href: STRIPE_LINK_PRO,
              primary: false,
            },
            {
              tier: "Enterprise",
              price: "£1,499",
              sub: "/month",
              desc: "Multi-tenant, custom rules, council governance, unlimited attestations.",
              cta: "Talk sales — £1,499/mo",
              href: STRIPE_LINK_ENTERPRISE,
              primary: false,
            },
            {
              tier: "Audit-Prep Bundle",
              price: "£4,950",
              sub: "one-time",
              desc: "Auditor-ready evidence pack for ISO 42001 / EU AI Act / DORA. CEASAI-aligned.",
              cta: "Buy Audit-Prep — £4,950",
              href: STRIPE_LINK_AUDIT,
              primary: false,
            },
            {
              tier: "CSOAI Watchdog Cert",
              price: "£4,950",
              sub: "one-time",
              desc: "Third-party CEASAI certification. MEOK signs the cert. Auditor verifies.",
              cta: "Buy Watchdog Cert — £4,950",
              href: STRIPE_LINK_CERT,
              primary: false,
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
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: t.primary ? GOLD : GOLD,
                }}
              >
                {t.tier}
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>
                {t.price}
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    opacity: 0.7,
                    marginLeft: 4,
                  }}
                >
                  {t.sub}
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  opacity: 0.85,
                  margin: 0,
                  flex: 1,
                }}
              >
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
                  border: t.primary
                    ? "none"
                    : `1px solid ${NAVY}33`,
                }}
              >
                {t.cta} →
              </a>
            </div>
          ))}
        </div>

        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 900,
            marginBottom: 24,
            letterSpacing: "-0.01em",
          }}
        >
          The five transparency obligations under Article 50
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
          {OBLIGATION_TYPES.map((o) => (
            <div
              key={o.label}
              style={{
                padding: 22,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 900,
                  marginBottom: 6,
                  color: GOLD,
                }}
              >
                {o.label}
              </h3>
              <p
                style={{
                  color: `${NAVY}99`,
                  fontSize: 14,
                  lineHeight: 1.55,
                }}
              >
                {o.desc}
              </p>
            </div>
          ))}
        </div>

        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 900,
            marginBottom: 24,
            letterSpacing: "-0.01em",
          }}
        >
          Why acting now matters
        </h2>
        <ul
          style={{
            marginBottom: 32,
            paddingLeft: 20,
            color: `${NAVY}99`,
            lineHeight: 1.8,
          }}
        >
          {WHY.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <div
          style={{
            background: NAVY,
            color: "white",
            padding: 32,
            borderRadius: 16,
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Ships within 7 days of order
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              marginBottom: 20,
            }}
          >
            All three marking layers + deployer disclosure guidance + signed
            conformity attestation. 90-day setup support included.
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
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 900,
            marginTop: 56,
            marginBottom: 20,
          }}
        >
          Transparency — frequently asked
        </h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details
              key={f.q}
              style={{
                background: "white",
                borderRadius: 12,
                padding: "16px 20px",
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <summary
                style={{
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: 15,
                  color: NAVY,
                }}
              >
                {f.q}
              </summary>
              <p
                style={{
                  marginTop: 10,
                  color: `${NAVY}99`,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <p
          style={{
            marginTop: 40,
            color: `${NAVY}66`,
            fontSize: 13,
            textAlign: "center",
          }}
        >
          Dive deeper:{" "}
          <Link href="/article-50-marking" style={{ color: GOLD }}>
            Two-layer marking technical deep-dive
          </Link>{" "}
          ·{" "}
          <Link href="/code-of-practice-2nd-draft" style={{ color: GOLD }}>
            Code of Practice 2nd Draft analysis
          </Link>{" "}
          ·{" "}
          <Link href="/article-50-kit" style={{ color: GOLD }}>
            Article 50 Kit
          </Link>{" "}
          ·{" "}
          <Link href="/eu-code-of-practice" style={{ color: GOLD }}>
            EU Code of Practice
          </Link>
          .
          <br />
          <br />
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
          MEOK AI Labs · CSOAI LTD · UK Companies House{" "}
          <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
