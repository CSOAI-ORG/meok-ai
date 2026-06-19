import type { Metadata } from "next";
import Link from "next/link";
import { Article50Countdown } from "@/components/Article50Countdown";

export const metadata: Metadata = {
  title:
    "Code of Practice 2nd Draft (3 March 2026) · what changed, final version forecast, prep guide · MEOK AI Labs",
  description:
    "Analysis of the 3 March 2026 second draft of the EU Code of Practice on AI-Generated Content. What changed from draft 1, what the June 2026 final version will likely contain, and how to prepare now. Two-layer marking, disclosure standards, enforcement timeline.",
  alternates: {
    canonical: "https://meok.ai/code-of-practice-2nd-draft",
  },
  openGraph: {
    title:
      "Code of Practice 2nd Draft — What Changed, What Comes Next, How to Prep",
    description:
      "3 March 2026 second draft analysis: two-layer marking mandate, disclosure clarity, enforcement timeline. Forecast for June 2026 final version.",
    type: "website",
    url: "https://meok.ai/code-of-practice-2nd-draft",
    images: [
      {
        url: "/api/og?title=Code+of+Practice+2nd+Draft&desc=3+March+2026+%C2%B7+what+changed+%C2%B7+final+version+forecast+%C2%B7+prep+guide",
        width: 1200,
        height: 630,
        alt: "Code of Practice 2nd Draft Analysis",
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

const CHANGES_DRAFT1_TO_DRAFT2 = [
  {
    area: "Two-layer marking mandate",
    draft1:
      "Suggested machine-readable marking as a best practice. Mentioned C2PA and watermarking as possible approaches but stopped short of mandating both.",
    draft2:
      "Explicitly requires at least two active layers of machine-readable marking. The preferred combination is (1) secured provenance metadata (C2PA Content Credentials v2.3 or equivalent) and (2) an imperceptible watermark embedded at the model output layer. Perceptual fingerprinting is accepted as a fallback where watermarks are not technically feasible.",
    impact:
      "HIGH — Single-layer solutions (C2PA-only or watermark-only) are non-compliant under the draft. Providers must implement at least two layers before 2 August 2026.",
  },
  {
    area: "Deployer disclosure standards",
    draft1:
      "Stated that deployers should inform natural persons about AI-generated content, but did not specify the format, prominence, or placement of disclosures.",
    draft2:
      "Specifies minimum standards for deployer disclosures: the label must be clearly visible, distinguishable from surrounding content, placed proximate to the AI-generated output, and persistent across the consumption lifecycle. Machine-readable disclosure (JSON-LD or microdata on web pages) is recommended alongside the visible label.",
    impact:
      "MEDIUM — Deployers with vague or small-disclosure workflows need to redesign for prominence and persistence. The recommendation for machine-readable disclosure alongside visible labels adds technical scope.",
  },
  {
    area: "C2PA specification hardening",
    draft1:
      "Referenced C2PA generically without specifying version or implementation requirements.",
    draft2:
      "Specifically calls out C2PA v2.3 (ISO/IEC 22144) as the reference metadata standard. Mandates DigiCert-level X.509 certificates for signing manifests. Requires the manifest to include: issuer identity, generation timestamp, model identifier, input parameters, and cryptographic output hash.",
    impact:
      "HIGH — Generic C2PA implementations not meeting the v2.3 spec with proper certificate provisioning will need upgrades. Self-signed or test certificates are not acceptable.",
  },
  {
    area: "Watermark resilience thresholds",
    draft1:
      "Stated that watermarks should be robust but did not quantify thresholds.",
    draft2:
      "Sets minimum resilience requirements: watermarks must survive JPEG compression (up to Q=75), crops (at least 70% remaining), resolution downscaling (at least 512px shortest side for images), and standard platform re-encoding for video (H.264, VP9). The watermark must be statistically detectable with <1% false positive rate.",
    impact:
      "MEDIUM — Light or fragile watermark schemes that degrade under common platform transformations need reinforcement. The quantified thresholds provide a clear pass/fail benchmark.",
  },
  {
    area: "Text marking guidance",
    draft1:
      "Effectively exempted text from technical marking, noting it was an open research area.",
    draft2:
      "Acknowledges text watermarking remains less mature than image/audio/video marking but mandates best-effort application of syntactic or logit-based watermarking where technically feasible. Where infeasible, deployer disclosure (visible AI label) alone suffices, but the provider must document why technical marking was not applied.",
    impact:
      "MEDIUM — Text-heavy providers must document feasibility assessments. Best-effort syntactic/logit-based watermarking should be implemented where possible.",
  },
  {
    area: "Attestation and audit trail",
    draft1:
      "Did not specify attestation or audit trail requirements.",
    draft2:
      "Requires providers to maintain an audit trail of all generated outputs with their marking status, and to produce a conformity attestation for each output batch. The attestation must be HMAC-signed or equivalent and include a verification mechanism that regulators can independently verify.",
    impact:
      "HIGH — Providers without audit logging or signed attestation pipelines need to build them. The attestation verification mechanism must be external-accessible (not locked inside the provider's network).",
  },
  {
    area: "Timeline and enforcement",
    draft1:
      "Suggested phased implementation aligned with the Digital Omnibus proposal (which would have deferred Article 50).",
    draft2:
      "Recognises that Article 50's 2 August 2026 deadline for new systems was not deferred by the Digital Omnibus. Legacy systems get 2 December 2026. Enforcement expectations: national supervisory authorities will begin compliance checks from 2 August 2026, with graduated enforcement (warnings → corrective measures → penalties).",
    impact:
      "HIGH — The timeline clarification removes any ambiguity. 2 August 2026 for new systems is confirmed and enforcement is expected immediately.",
  },
];

const FINAL_VERSION_FORECAST = [
  {
    topic: "Layer-count hardening",
    forecast:
      "The final Code of Practice is expected to maintain the two-layer minimum and may elevate it to an explicit requirement rather than 'preferred configuration'. Multi-modal outputs (e.g., video with audio track) may require layer coverage per modality.",
  },
  {
    topic: "Watermark standardisation",
    forecast:
      "The final version may specify a particular watermark algorithm or reference an ISO standard for imperceptible marking, rather than allowing providers to self-certify their watermark implementation. Expect alignment with ongoing work at ISO/IEC JTC 1/SC 42.",
  },
  {
    topic: "Text marking evolution",
    forecast:
      "Syntactic and logit-based watermarking research is moving fast. The final draft may harden the text marking requirement if the technology matures enough. Providers should implement best-effort now to avoid retrofitting under a tighter final spec.",
  },
  {
    topic: "Standardised attestation format",
    forecast:
      "Expect the final version to specify a standardised HMAC-signed attestation template (likely JSON-based with a defined schema) to ensure cross-provider interoperability and regulator verifiability. Early adopters should use a flexible schema that can be updated.",
  },
  {
    topic: "Cross-platform interoperability",
    forecast:
      "The final version will likely require C2PA manifests to survive cross-platform distribution to certain baseline surfaces. This may include specifying minimum metadata preservation requirements for major platforms (Google Search, Microsoft Bing, Meta, TikTok, YouTube).",
  },
  {
    topic: "Deepfake and political content",
    forecast:
      "Additional requirements for deepfake content that simulates real persons (especially political figures) are expected — possibly faster labelling requirements, mandatory disclosure within shorter timeframes, and audit trail retention for election-related content.",
  },
];

const WHY = [
  'We will wait for the final version in June before doing anything. — Waiting until June leaves at most 8 weeks before the 2 August enforcement date. The kit covers all known draft 2 requirements and the forecasted final version additions. Implement now, update in June via Pro subscription.',
  '"Draft 2 is close to final — how much can change?" — The gap between draft 2 and the final version is expected to be narrower than the gap from draft 1 to draft 2. However, text marking, attestation standardisation, and cross-platform compliance could still shift materially. Being first-mover-compliant now costs £999. Retrofitting later costs 10-50x more in engineering time.',
  '"Draft is not law — we don\'t need to follow a draft." — Article 50 is the law. The Code of Practice is the European Commission\'s official guidance on how to satisfy Article 50. A regulator assessing compliance will use the Code of Practice as the reference standard. Ignoring the draft while it forms the standard increases enforcement risk.',
  "Penalties up to €15M or 3% global annual turnover under EU AI Act Article 99 for non-compliance. First enforcement actions expected from August 2026.",
];

const FAQ = [
  {
    q: "What is the EU Code of Practice on AI-Generated Content?",
    a: "The EU Code of Practice on AI-Generated Content is a standard-setting instrument developed under the EU AI Pact framework. It specifies the technical and operational requirements for satisfying Article 50 transparency obligations. Draft 1 was published in late 2025. Draft 2 was published on 3 March 2026. The final version is expected in June 2026. While compliance with the Code is technically voluntary (Article 50 itself is the law), the Code establishes the accepted standard of compliance — following the Code provides a presumption of conformity; deviating from it requires the provider to demonstrate equivalent effectiveness to the regulator.",
  },
  {
    q: "What was the single biggest change from draft 1 to draft 2?",
    a: "The explicit two-layer marking mandate. Draft 1 suggested machine-readable marking as a best practice. Draft 2 requires at least two active layers — specifically C2PA v2.3 provenance metadata plus an imperceptible watermark. This change makes single-layer solutions (C2PA-only or watermark-only) effectively non-compliant under the draft Code. Providers who invested in single-layer solutions between draft 1 and draft 2 now need to add the second layer before enforcement begins.",
  },
  {
    q: "When is the final version expected, and what will it change?",
    a: "The European Commission aims to publish the final version in June 2026 — approximately 8 weeks before the 2 August 2026 enforcement date for new systems. Our analysis suggests the final version will: harden the two-layer requirement (potentially making it explicit instead of 'preferred'), standardise watermark algorithms via ISO reference, specify a standardised attestation format, add cross-platform interoperability requirements, and introduce stricter rules for deepfake and political content. Text marking requirements may also tighten if the technology matures.",
  },
  {
    q: "How should we prepare for the final version now?",
    a: "Four concrete steps: (1) Implement a two-layer marking solution now (C2PA + invisible watermark) — this is the bulk of the work and is net-new whether or not the final version changes minor details. (2) Build an audit trail pipeline that logs every generation event with marking status — the draft 2 attestation requirement is likely to harden, not soften. (3) Design your deployer disclosure workflow with prominence and persistence in mind — visible labels should be proximate, clearly distinguishable, and persistent across sharing. (4) Subscribe to the Code of Practice revision tracker — our Pro subscription includes automatic updates to the marking pipeline as the standard evolves.",
  },
  {
    q: "Does the Code of Practice apply only to large platforms or to all providers and deployers?",
    a: "The Code of Practice applies to all providers of generative AI systems and all deployers within the scope of the EU AI Act. There is no size-based exemption for Article 50 transparency obligations. Small and medium enterprises are subject to the same marking, disclosure, and attestation requirements. However, the Code may include phased implementation or proportionality provisions in the final version — these are not yet confirmed. Our £9 Quick Kit exists specifically to give smaller teams a low-cost compliance validation path.",
  },
  {
    q: "What happens if the final version differs from draft 2?",
    a: "The final version will be the reference standard for compliance assessment. If it introduces new requirements beyond draft 2, providers and deployers will need to update their implementations within the transition period (if any) specified in the final text. Our kit is designed for upgradeability: the C2PA signing layer is spec-compliant and future-proof; the watermark layer can be swapped or extended; and the audit/attestation pipeline uses a flexible schema that can accommodate standardised formats. Pro and Enterprise subscribers receive all final-version updates at no additional cost.",
  },
  {
    q: "What is the enforcement timeline? Will regulators really act on 2 August 2026?",
    a: "The draft 2 text confirms enforcement expectations: national supervisory authorities will begin compliance monitoring from 2 August 2026 for new systems. Graduated enforcement is expected — initial notices and corrective orders rather than immediate maximum fines — but non-compliance from day one creates legal exposure and attracts regulatory scrutiny. Several EU member states (Ireland, Germany, France, Netherlands) are actively building AI Act enforcement capacity, including dedicated AI inspectorates. First penalty actions are expected within the first 6-12 months of enforcement.",
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
  name: "EU Code of Practice 2nd Draft Compliance Kit",
  description:
    "Two-layer marking solution (C2PA v2.3 + invisible watermark) aligned with the 3 March 2026 Code of Practice draft. HMAC-signed attestation, audit trail, deployer disclosure guidance. Ships in 7 days.",
  brand: { "@type": "Brand", name: "MEOK AI Labs" },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/code-of-practice-2nd-draft",
    seller: {
      "@type": "Organization",
      name: "MEOK AI Labs",
      url: "https://meok.ai",
    },
  },
};

export default function CodeOfPractice2ndDraftPage() {
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
          EU Code of Practice — Second Draft
          <br />
          <span style={{ color: GOLD }}>
            3 March 2026 · what changed, what&apos;s next, how to prepare
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
          The second draft of the EU Code of Practice on AI-Generated Content,
          published <strong>3 March 2026</strong>, represents a significant
          hardening from the first draft. The most consequential change:{" "}
          <strong>two-layer marking is now explicitly required</strong> — C2PA
          v2.3 provenance metadata <em>plus</em> an imperceptible watermark.
          Single-layer solutions are non-compliant under the draft. With the
          final version expected <strong>June 2026</strong> and enforcement
          beginning <strong>2 August 2026</strong>, the window to prepare is
          closing fast.
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
          <p
            style={{
              fontWeight: 900,
              marginBottom: 8,
              fontSize: 14,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Timeline at a glance
          </p>
          <ul
            style={{
              paddingLeft: 18,
              color: `${NAVY}cc`,
              fontSize: 14,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <li>
              <strong>3 March 2026:</strong> Draft 2 published — two-layer
              marking mandate introduced
            </li>
            <li>
              <strong>June 2026:</strong> Final version expected — may harden
              requirements further
            </li>
            <li>
              <strong>2 August 2026:</strong> Article 50 enforcement begins for{" "}
              <em>new</em> generative AI systems
            </li>
            <li>
              <strong>2 December 2026:</strong> Article 50 enforcement begins
              for <em>legacy</em> systems
            </li>
            <li>
              <strong>December 2027:</strong> High-risk (Annex III) compliance
              deadline
            </li>
          </ul>
        </div>

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
            href="/article-50-transparency"
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
            Transparency Obligations →
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
            Two-Layer Marking Deep-Dive →
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
            EU Code of Practice First-Mover →
          </Link>
          <a
            href="mailto:nicholas@meok.ai?subject=Compliance%20triage%20call%20request&body=Hi%20Nicholas%2C%0A%0AI%27d%20like%20to%20book%20the%20free%2030-min%20compliance%20triage%20call.%20My%20availability%3A%0A%0A-%20%5Byour%20preferred%20day%2Ftime%5D%0A%0ACompany%3A%20%5BCompany%5D%0AContext%3A%20%5BEU%20AI%20Act%20%2F%20DORA%20%2F%20NIS2%20%2F%20CRA%5D%0A%0AThanks"
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
          What changed: Draft 1 → Draft 2
        </h2>
        <p
          style={{
            color: `${NAVY}99`,
            fontSize: 14,
            lineHeight: 1.55,
            marginBottom: 20,
          }}
        >
          Seven areas saw significant changes between the first draft (late
          2025) and the 3 March 2026 second draft:
        </p>
        <div style={{ display: "grid", gap: 20, marginBottom: 40 }}>
          {CHANGES_DRAFT1_TO_DRAFT2.map((c) => (
            <div
              key={c.area}
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
                  marginBottom: 10,
                  color: GOLD,
                }}
              >
                {c.area}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "4px 16px",
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: `${NAVY}99`,
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: NAVY,
                    background: "rgba(220,38,38,0.06)",
                    padding: "2px 6px",
                    borderRadius: 4,
                    fontSize: 11,
                  }}
                >
                  DRAFT 1
                </span>
                <span>{c.draft1}</span>
                <span
                  style={{
                    fontWeight: 700,
                    color: NAVY,
                    background: "rgba(34,197,94,0.06)",
                    padding: "2px 6px",
                    borderRadius: 4,
                    fontSize: 11,
                  }}
                >
                  DRAFT 2
                </span>
                <span>{c.draft2}</span>
                <span
                  style={{
                    fontWeight: 700,
                    color: NAVY,
                    background: "rgba(201,168,76,0.1)",
                    padding: "2px 6px",
                    borderRadius: 4,
                    fontSize: 11,
                  }}
                >
                  IMPACT
                </span>
                <span>{c.impact}</span>
              </div>
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
          What the final version (June 2026) will likely contain
        </h2>
        <p
          style={{
            color: `${NAVY}99`,
            fontSize: 14,
            lineHeight: 1.55,
            marginBottom: 20,
          }}
        >
          Based on the trajectory from draft 1 to draft 2, the European
          Commission&apos;s stated objectives, and stakeholder feedback patterns,
          we forecast these changes in the June 2026 final version:
        </p>
        <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
          {FINAL_VERSION_FORECAST.map((f) => (
            <div
              key={f.topic}
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
                {f.topic}
              </h3>
              <p
                style={{
                  color: `${NAVY}99`,
                  fontSize: 14,
                  lineHeight: 1.55,
                }}
              >
                {f.forecast}
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
          Why act now
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
            Code-of-Practice-aligned marking pipeline. Automatic updates when
            the final version drops. 90-day setup support included.
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
          Code of Practice — frequently asked
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
          Explore the full Sprint 2 series:{" "}
          <Link href="/article-50-transparency" style={{ color: GOLD }}>
            Transparency Obligations
          </Link>{" "}
          ·{" "}
          <Link href="/article-50-marking" style={{ color: GOLD }}>
            Two-Layer Marking Deep-Dive
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
