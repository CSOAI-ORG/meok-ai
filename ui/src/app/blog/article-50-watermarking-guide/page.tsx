import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Article 50 Watermarking — Complete Implementation Guide for 2 August 2026 | MEOK Blog",
  description:
    "EU AI Act Article 50 binds generative AI providers from 2 August 2026. Here's the C2PA Content Credentials manifest, SynthID-class watermarking, and end-user disclosure pattern that satisfies it.",
  alternates: { canonical: "https://meok.ai/blog/article-50-watermarking-guide" },
  openGraph: {
    title: "Article 50 Watermarking — Complete Guide for 2 August 2026",
    description:
      "C2PA Content Credentials 2.1 manifest + SynthID-class robust watermark + end-user disclosure. The pattern that satisfies Article 50.",
    type: "article",
    publishedTime: "2026-04-27",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/article-50-watermarking-guide",
    siteName: "MEOK.AI",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Article 50 Watermarking — Complete Implementation Guide for 2 August 2026",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Person", name: "Nicholas Templeman", url: "https://meok.ai/about" },
  publisher: { "@type": "Organization", name: "MEOK AI Labs", logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" } },
  description: "EU AI Act Article 50 binds generative AI from 2 Aug 2026. The C2PA + SynthID + disclosure pattern that satisfies it.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://meok.ai/blog/article-50-watermarking-guide" },
};

export default function Article50GuidePage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <article style={{ maxWidth: 740, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/blog" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All posts</Link>
        <div style={{ fontSize: 12, color: GOLD, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 50 · 27 April 2026 · 8 min read</div>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>Article 50 Watermarking — the implementation pattern</h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 32 }}>The clock to 2 August 2026 is real. The Commission Q1 2026 implementing-act guidance settled most of the open questions, and the pattern that satisfies Article 50 is now concrete: <strong>C2PA Content Credentials 2.1 manifest, robust per-output watermark, end-user disclosure</strong>. Here's what each piece looks like in practice.</p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>What Article 50 actually says</h2>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>Article 50(2) binds <strong>providers</strong> of generative AI systems (text, image, audio, video, synthetic decision content) to ensure outputs are <em>marked in a machine-readable format and detectable as artificially generated or manipulated</em>.</p>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>Article 50(4) adds the deployer disclosure obligation: when output is intended to inform the public on matters of public interest (deep fakes, news, etc.), the deployer must disclose that the content is artificial.</p>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 24 }}>Penalty band: Article 99(4)(g) — up to €15M or 3% global annual turnover, whichever is higher.</p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>The three layers</h2>

        <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginTop: 24, marginBottom: 12 }}>1. C2PA Content Credentials 2.1 manifest</h3>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>The Coalition for Content Provenance and Authenticity (C2PA) v2.1 spec is the de facto standard the Commission has aligned with. A C2PA manifest is a signed JSON-LD assertion bundle embedded in the output container (PNG, JPEG-XL, MP4, WebM, audio).</p>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>Required claims for Article 50:</p>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 16 }}>
          <li><code>claim_generator_info</code> — your model + version (e.g. <code>your-app/1.0; sd-3-medium-ft-2026-03</code>)</li>
          <li><code>c2pa.actions</code> — at least one <code>c2pa.created</code> or <code>c2pa.placed</code> action with <code>digitalSourceType</code> = <code>trainedAlgorithmicMedia</code></li>
          <li><code>c2pa.training-mining</code> — your training-data policy (mandatory for foundation models, optional for fine-tunes)</li>
          <li>Signature with X.509 cert chain rooted in a recognized CA (Adobe, Microsoft, Google, or a self-signed cert with public verification endpoint)</li>
        </ul>

        <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginTop: 24, marginBottom: 12 }}>2. Robust per-output watermark</h3>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>The C2PA manifest can be stripped (re-encoding, transcoding, screenshot). The watermark is the durable layer.</p>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 16 }}>
          <li><strong>Image:</strong> SynthID-Image (Google), Stable Signature (Meta), or Numbers Protocol. Must survive crop, resize, JPEG q=70, format conversion.</li>
          <li><strong>Audio:</strong> SynthID-Audio or AudioSeal. Must survive MP3 128kbps, time-stretching ±5%.</li>
          <li><strong>Text:</strong> SynthID-Text (token-level), KGW (Kirchenbauer et al), or Aaronson watermark. Survives ~50% paraphrase. Commission has signaled this level is acceptable as "best-effort technical measures."</li>
          <li><strong>Video:</strong> SynthID applied per-keyframe + audio track watermarked separately.</li>
        </ul>

        <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginTop: 24, marginBottom: 12 }}>3. End-user disclosure</h3>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>The user-facing disclosure that an output is AI-generated. Three patterns satisfy:</p>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 16 }}>
          <li><strong>Visible badge in the UI:</strong> "AI-generated" label adjacent to the output. Recommended for consumer-facing products.</li>
          <li><strong>EXIF/manifest-only with deployer opt-out:</strong> machine-readable mark only, with documented justification (e.g. integration into B2B workflow where end-user disclosure is provided downstream by deployer).</li>
          <li><strong>API-only:</strong> no UI, machine-readable C2PA + watermark only. Deployer carries the user-disclosure obligation.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>Open questions still being settled</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 24 }}>
          <li><strong>Cross-provider detection</strong> — no mandate yet to maintain a public verifier. Best practice: publish a verify endpoint at <code>your-domain.example/c2pa/verify</code> for auditor curl-checks.</li>
          <li><strong>Open-weights split obligation</strong> — Recital 102 reduces the open-weight provider's obligation. Downstream deployer carries it. Practical: ship watermarking code in your reference inference scripts so deployers don't have to write it.</li>
          <li><strong>Synthetic-data training pipelines</strong> — outputs of generative models used to seed downstream training don't trigger Article 50 directly (training-data ≠ output to public). But the resulting model's outputs do.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>What to ship by 2 August 2026</h2>
        <ol style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 24 }}>
          <li>C2PA manifest generator wired into your output pipeline (every generation produces a manifest).</li>
          <li>Signing key custody — hardware HSM or cloud KMS. NEVER bundle private keys client-side.</li>
          <li>Watermarker integration — SynthID, AudioSeal, KGW depending on modality.</li>
          <li>End-user disclosure pattern (badge, EXIF-only, or API-only) chosen and documented.</li>
          <li>Public verify endpoint (curl-able by auditors).</li>
          <li>Article 4 literacy log + Article 9 RMS entry covering "watermark robustness limitations" risk.</li>
        </ol>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 48 }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 8 }}>Need a starter kit?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>£99 self-serve ZIP: C2PA manifest template, SynthID-class watermark config, signed compliance attestation, deployer disclosure policy template.</p>
          <Link href="/article-50-kit" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£99 Article 50 Kit →</Link>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>Regulation 2024/1689 Art. 50</a> · <a href="https://c2pa.org/specifications" style={{ color: GOLD }}>C2PA spec 2.1</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </article>
    </main>
  );
}
