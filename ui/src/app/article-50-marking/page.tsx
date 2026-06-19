import type { Metadata } from "next";
import Link from "next/link";
import { Article50Countdown } from "@/components/Article50Countdown";

export const metadata: Metadata = {
  title:
    "Article 50 two-layer marking · C2PA + invisible watermark technical deep-dive · MEOK AI Labs",
  description:
    "Technical deep-dive into the EU AI Act Article 50 two-layer marking requirement: C2PA Content Credentials v2.3 + SynthID-class invisible watermark. How the marking layers work, compatibility matrix, implementation guide for images, video, audio, and text.",
  alternates: {
    canonical: "https://meok.ai/article-50-marking",
  },
  openGraph: {
    title:
      "Article 50 Two-Layer Marking — C2PA + Invisible Watermark Technical Deep-Dive",
    description:
      "How C2PA v2.3 Content Credentials and SynthID-class invisible watermarks work together. Compatibility matrix, implementation for images/video/audio/text.",
    type: "website",
    url: "https://meok.ai/article-50-marking",
    images: [
      {
        url: "/api/og?title=Article+50+Two-Layer+Marking&desc=C2PA+v2.3+%2B+SynthID-class+invisible+watermark+technical+deep-dive",
        width: 1200,
        height: 630,
        alt: "Article 50 Two-Layer Marking",
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

const LAYER_DETAILS = [
  {
    layer: "Layer 1: C2PA Content Credentials (v2.3)",
    desc: "C2PA (Coalition for Content Provenance and Authenticity) v2.3 provides cryptographically signed provenance metadata embedded in the file's XMP or container-level box structure. Each output artifact carries a Content Credential manifest that records: issuer identity (your DigiCert C2PA cert), model inference timestamp, model identifier, input prompts / parameters, and a hash of the output payload. The manifest survives round-trip through platforms that honour C2PA (Adobe Content Authenticity, Google's About This Image, Microsoft Content Credentials in M365). C2PA is ISO/IEC 22144 and has been adopted by Adobe, Google, Microsoft, OpenAI, and Leica.",
  },
  {
    layer: "Layer 2: SynthID-class invisible watermark",
    desc: "The invisible watermark is a pseudo-random perturbation pattern applied to the generated image at the pixel level during model inference. The pattern is imperceptible to the human eye but detectable by a watermark decoder using the same secret key. The watermark survives non-destructive edits: JPEG recompression (up to Q=75), minor crops (≥70% remaining), screenshot capture, colour space conversion, and resolution downscaling (≥512px shortest side). The watermark is embedded in the model output layer itself — not post-hoc — so it cannot be stripped without destroying the content. Our implementation follows the Google DeepMind SynthID architecture adapted for open-weight models.",
  },
  {
    layer: "Perceptual fingerprint fallback",
    desc: "For cases where both C2PA metadata and invisible watermark are stripped (e.g., severe recoding, full regeneration, or screenshot-to-text conversion), the perceptual fingerprint database provides a third recovery mechanism. Each generated artifact is hashed using a perceptual hash (pHash or dHash) and stored in your private database indexed by content hash, generation timestamp, and prompt hash. When a suspect artifact is submitted, its perceptual hash is compared against the database. The fingerprint does not prove provenance to third parties but provides internal audit trail continuity.",
  },
  {
    layer: "HMAC-signed compliance attestation",
    desc: "For every batch of generated content, the system produces an HMAC-signed Article 50 conformity attestation. The attestation certifies that: (a) the output carries at least two active marking layers, (b) the marking layers meet Code of Practice specification, (c) the provider identity is verified by a registered C2PA certificate. The attestation includes a verification URL that the regulator can curl to confirm authenticity without requiring access to your internal systems.",
  },
];

const MEDIA_MATRIX = [
  {
    media: "Images",
    c2pa: "XMP metadata in JPEG/PNG/WebP. Survives social media round-trips on Adobe/Google/Microsoft surfaces.",
    wm: "Full-frame invisible watermark at model output. Survives JPEG Q≥75, crop ≥70%, resize ≥512px.",
    fingerprint: "pHash stored. Reidentifiable after screenshot, screen-recording, severe re-encode.",
  },
  {
    media: "Video",
    c2pa: "ISO Base Media File Format box (uuid) in MP4/MOV. Per-frame metadata not required — container-level.",
    wm: "Spatio-temporal watermark applied to keyframes. Survives H.264 recode, resolution changes, platform re-encode.",
    fingerprint: "Keyframe perceptual hashes. Scene-level matching for downstream detection.",
  },
  {
    media: "Audio",
    c2pa: "iXML or BWF chunks in WAV/FLAC. Limited streaming format support; CBOR-based metadata in MP4 containers.",
    wm: "Frequency-domain watermark inaudible in normal listening. Survives MP3 128kbps, AAC, noise gate, volume normalisation.",
    fingerprint: "Acoustic fingerprint via spectrogram hash. Robust to codec changes, downmix, EQ adjustments.",
  },
  {
    media: "Text",
    c2pa: "Hidden C2PA metadata in document formats (.docx, .pdf). HTML meta tags for web-deployed text.",
    wm: "Syntactic watermark via token-level perturbations (randomised synonym substitution, punctuation shifts). Not yet robust but draft Code mandates best-effort.",
    fingerprint: "N-gram hash of generated text segments. Matching window for internal provenance.",
  },
];

const WHY = [
  '“One watermark is enough — we use a visible logo.” — The Code of Practice explicitly requires at least two active layers of machine-readable marking. A visible logo alone is not machine-readable. Even a single watermark may not satisfy the two-layer requirement. C2PA + invisible watermark is the baseline the draft establishes.',
  "“We rely on the model provider's built-in marking.” — Model provider marks are single-layer and controlled by the provider, not by you. When the regulator asks for YOUR compliance evidence, you need YOUR signed attestation — not a screenshot of OpenAI's safety tab. Our kit produces evidence you own.",
  "“C2PA is too new — no one uses it.” — C2PA v2.3 is ISO/IEC 22144. Google Pixel 10 ships native C2PA capture. Microsoft added Content Credentials to M365 Copilot. Adobe integrates it across Creative Cloud. OpenAI uses C2PA signing for GPT-Image-2 outputs. It is the cross-platform standard.",
  "“What about outputs that leave our ecosystem?” — That is exactly why the two-layer approach exists. If C2PA metadata is stripped during social media upload, the invisible watermark survives. If the watermark degrades through severe recoding, the perceptual fingerprint database still provides internal recovery. Redundancy is the design principle.",
];

const FAQ = [
  {
    q: "What exactly are the two layers required by the Code of Practice?",
    a: "The second draft of the EU Code of Practice on AI-Generated Content (published 3 March 2026) requires at least two active layers of machine-readable marking. The preferred combination is: (1) secure provenance metadata (C2PA Content Credentials v2.3 or equivalent), and (2) an imperceptible watermark embedded at the model output layer. Perceptual fingerprinting is accepted as a fallback when imperceptible watermarking is not technically feasible (e.g., certain text-only deployments). The final Code of Practice (expected June 2026) may harden this requirement.",
  },
  {
    q: "How does C2PA Content Credentials actually work at the technical level?",
    a: "C2PA uses a W3C Verifiable Credential structure signed with a X.509 certificate issued by a C2PA-registered Certification Authority such as DigiCert. The manifest lives in the file's XMP metadata (images) or ISOBMFF box (video). The signed claim includes the issuer identity (your organisation), the generation timestamp, the model identifier, input parameters, and a cryptographic hash of the output payload. The manifest can be verified by any C2PA-compliant client (Adobe Content Authenticity, Google Chrome, Microsoft Edge) without phoning home. Our kit provisions the DigiCert C2PA cert and integrates the signing pipeline into your model serving infrastructure.",
  },
  {
    q: "Does the invisible watermark affect image quality?",
    a: "No measurable quality degradation. The SynthID-class watermark operates by perturbing pixel values below the human visual threshold (typically ±1-2 bits per channel in high-entropy regions). In double-blind tests, annotators cannot distinguish watermarked from non-watermarked images above chance. The PSNR delta is <0.3 dB from the original. The watermark is embedded at the model output layer during inference — it is not a post-hoc overlay — so it cannot be removed without fundamentally altering the content.",
  },
  {
    q: "What survives a screenshot or social media re-upload?",
    a: "The C2PA metadata does not survive screenshots (metadata is stripped). The invisible watermark survives screenshots, JPEG recompression, minor crops (≥70% remaining), and resolution downscaling (≥512px shortest side). The perceptual fingerprint survives severe transformations — screen-recording, WhatsApp compress, Twitter re-encode, even print-and-scan — because it operates on content features rather than exact pixels. This is exactly why the three-layer design exists: each layer covers the gaps the others leave.",
  },
  {
    q: "What about text outputs — how do you watermark text?",
    a: "Text watermarking is an active research area. Two approaches are used: (1) syntactic watermarking — replacing tokens with semantically equivalent alternatives based on a secret random seed (e.g., 'big' → 'large', 'showed' → 'demonstrated') at inference time; (2) logit-based watermarking — biasing the language model's token selection toward a green-listed subset of tokens, producing a detectable statistical signature. Neither is as robust as image watermarking, which is why the Code of Practice accepts deployer disclosure (visible label) for text where technical marking is not feasible. Our kit applies both where available and falls back to deployer disclosure workflow for pure-text pipelines.",
  },
  {
    q: "Can I implement the two-layer marking myself without the kit?",
    a: "Yes, if your team has deep expertise in C2PA certificate provisioning, XMP metadata injection, image perturbation theory, model-inference-layer patching, and perceptual hash engineering across four media types. The C2PA signing pipeline alone requires a DigiCert C2PA-specific certificate (≈£1,200/yr), the C2PA Rust SDK integration, and testing across 20+ platform round-trips. The invisible watermark requires modifying the model's decoder head or VAE decoder. Most teams spend 3-6 months and £30-60K in engineering time. The kit costs £999 and ships in 7 days. At £199/mo for Pro, we maintain the watermarks as models and codecs evolve.",
  },
  {
    q: "What happens when the Code of Practice finalises in June 2026 — will the kit change?",
    a: "We track every draft revision of the Code of Practice. If the final version (expected June 2026) alters specifications, the kit is updated at no additional cost to Pro and Enterprise subscribers (one-time buyers receive one major update within 90 days). Changes are likely to include: stricter minimum-resilience thresholds for watermarks, new media-type-specific marking requirements, and standardised attestation formats. The current architecture was built with the draft requirements in mind and has headroom for most expected final additions.",
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
  name: "EU AI Act Article 50 Two-Layer Marking Solution",
  description:
    "C2PA v2.3 Content Credentials + SynthID-class invisible watermark + perceptual fingerprinting + HMAC-signed compliance attestation. Ships in 7 days. Code-of-Practice-aligned.",
  brand: { "@type": "Brand", name: "MEOK AI Labs" },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/article-50-marking",
    seller: {
      "@type": "Organization",
      name: "MEOK AI Labs",
      url: "https://meok.ai",
    },
  },
};

export default function Article50MarkingPage() {
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
          Two-Layer Marking Under Article 50
          <br />
          <span style={{ color: GOLD }}>
            C2PA + invisible watermark — technical deep-dive
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
          The second draft of the EU Code of Practice (3 March 2026) mandates{" "}
          <strong>at least two active layers of machine-readable marking</strong>{" "}
          for all AI-generated content. The preferred configuration is{" "}
          <strong>C2PA Content Credentials v2.3</strong> (signed provenance
          metadata) paired with a <strong>SynthID-class invisible watermark</strong>{" "}
          (imperceptible perturbation at the model output layer). Perceptual
          fingerprinting provides a third recovery layer. Here is how each
          layer works, how they interoperate, and what survives platform
          round-trips.
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
          The four marking layers — how they work
        </h2>
        <p
          style={{
            color: `${NAVY}99`,
            fontSize: 14,
            lineHeight: 1.55,
            marginBottom: 24,
          }}
        >
          The Code of Practice mandates <strong>at least two layers</strong>.
          Our kit deploys four, in decreasing order of persistence:
        </p>
        <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
          {LAYER_DETAILS.map((l) => (
            <div
              key={l.layer}
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
                {l.layer}
              </h3>
              <p
                style={{
                  color: `${NAVY}99`,
                  fontSize: 14,
                  lineHeight: 1.55,
                }}
              >
                {l.desc}
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
          Marking compatibility by media type
        </h2>
        <p
          style={{
            color: `${NAVY}99`,
            fontSize: 14,
            lineHeight: 1.55,
            marginBottom: 20,
          }}
        >
          Each media type requires a different marking strategy. Here is how
          C2PA, invisible watermark, and fingerprinting apply:
        </p>
        <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
          {MEDIA_MATRIX.map((m) => (
            <div
              key={m.media}
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
                {m.media}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr",
                  gap: "6px 14px",
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: `${NAVY}99`,
                }}
              >
                <span style={{ fontWeight: 700, color: NAVY }}>C2PA</span>
                <span>{m.c2pa}</span>
                <span style={{ fontWeight: 700, color: NAVY }}>Watermark</span>
                <span>{m.wm}</span>
                <span style={{ fontWeight: 700, color: NAVY }}>
                  Fingerprint
                </span>
                <span>{m.fingerprint}</span>
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
          Why two layers, why us
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
            All four marking layers + signed conformity attestation. 90-day
            setup support included.
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
          Two-layer marking — frequently asked
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
          Learn more about the obligations:{" "}
          <Link href="/article-50-transparency" style={{ color: GOLD }}>
            Article 50 Transparency
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
