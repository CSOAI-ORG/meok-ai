import type { Metadata } from "next";
import Link from "next/link";
import { Article50Countdown } from "@/components/Article50Countdown";

export const metadata: Metadata = {
  title: "EU AI Act Article 50 — Transparency & Watermarking (2 Nov 2026 cliff)",
  description:
    "What EU AI Act Article 50 actually requires: machine-readable AI-content marking + visible disclosure to users. Code of Practice 2-layer approach. €15M / 3% turnover fines. Implementation guide.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-50" },
  openGraph: {
    title: "EU AI Act Article 50 — Watermarking + Transparency Guide",
    description: "C2PA + invisible watermark + fingerprinting. 2 Nov 2026 deadline. Fines €15M / 3%.",
    type: "article",
    url: "https://meok.ai/eu-ai-act/article-50",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const RED = "#dc2626";

const FAQ = [
  {
    q: "When does EU AI Act Article 50 apply?",
    a: "Article 50 transparency obligations apply from 2 November 2026 (24 months after entry into force on 1 August 2024). Providers of AI systems generating synthetic content must mark outputs as machine-readable. Deployers must visibly disclose AI generation to people exposed to it.",
  },
  {
    q: "What does 'machine-readable marking' actually mean?",
    a: "Per the second draft of the EU Code of Practice on marking AI-generated content (3 March 2026), machine-readable marking means a two-layer approach: secured C2PA Content Credentials metadata embedded in the file PLUS an imperceptible watermark in the content itself. Fingerprinting/logging is the documented fallback when neither layer survives.",
  },
  {
    q: "Does C2PA Content Credentials alone satisfy Article 50?",
    a: "No. The Code of Practice draft explicitly says single-layer C2PA metadata is not sufficient because it strips on screenshot, recompression, or platform re-encoding. The two-layer requirement (C2PA + invisible watermark) is what survives common content workflows.",
  },
  {
    q: "What about text outputs?",
    a: "Article 50(2) covers text-generating AI. The Code of Practice draft prefers imperceptible watermarking for text where technically feasible (e.g. SynthID-class watermarks at the model output layer). Where watermarking text is not feasible, the deployer disclosure obligation in Article 50(4) alone applies — the visible 'this is AI-generated' notice.",
  },
  {
    q: "Who's exempt from Article 50?",
    a: "Article 50(2) exempts AI systems performing 'an assistive function for standard editing or which do not substantially alter the input data' (typewriter mode). Article 50(4) exempts where AI use is 'authorised by law to detect, prevent, investigate or prosecute criminal offences'. Both exemptions are narrow — most consumer-facing GenAI products are NOT exempt.",
  },
  {
    q: "What's the maximum fine for Article 50 non-compliance?",
    a: "Article 99(4) caps the fine at €15 million or 3% of global annual turnover, whichever is higher. Per-infringement basis — multiple non-compliant outputs can compound. Use our /fine-calculator to model your exposure.",
  },
  {
    q: "How long does it take to implement Article 50 compliance?",
    a: "MEOK's Article 50 Watermarking Kit (£999) ships in 7 days and includes: C2PA manifest signing with DigiCert cert, SynthID-class invisible watermark embedding, perceptual fingerprint database, signed Article 50 conformity attestation. The Audit-Prep Bundle (£4,950) wraps Article 50 plus Articles 9/10/14/26 in a 14-day engagement.",
  },
  {
    q: "Will the watermark survive screenshots, recompression, or light editing?",
    a: "Yes for SynthID-class invisible watermarks at the model output layer (~98% survival on common edits). C2PA metadata strips on screenshot but the perceptual fingerprint database lets you re-identify the artefact later. The three-layer redundancy (C2PA + watermark + fingerprint) is exactly why single-layer tools fail audit.",
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

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EU AI Act Article 50 — Transparency & Watermarking",
  description: "Implementation guide for EU AI Act Article 50 transparency obligations. 2 November 2026 cliff.",
  author: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  publisher: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  mainEntityOfPage: "https://meok.ai/eu-ai-act/article-50",
};

export default function Article50Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Article50Countdown />
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>
          ← All EU AI Act articles
        </Link>

        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(220,38,38,0.1)", border: `1px solid rgba(220,38,38,0.4)`, color: RED, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 24, marginBottom: 24 }}>
          ⚠️ 2 November 2026 cliff
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          EU AI Act Article 50 — Transparency & Watermarking
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 50 is the EU AI Act provision that forces every consumer-facing AI product into
          provable transparency. Effective 2 November 2026. €15M / 3% turnover fines. The Code of
          Practice on AI-generated content marking — final draft expected June 2026 — adds a
          two-layer technical specification most current tools do not meet.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What the article actually says</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Article 50(1) — natural-person interaction disclosure</h3>
          <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 16 }}>
            Providers of AI systems intended to interact directly with natural persons (chatbots, voice
            agents, virtual assistants) must design + develop them so users are informed they are
            interacting with an AI system, unless this is obvious to a reasonably well-informed,
            observant, and circumspect person.
          </p>
          <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Article 50(2) — synthetic content marking</h3>
          <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 16 }}>
            Providers of AI systems generating synthetic audio, image, video or text content must
            ensure outputs are marked in a machine-readable format and detectable as artificially
            generated or manipulated. Technical solutions must be effective, interoperable, robust,
            and reliable to the extent technically feasible.
          </p>
          <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Article 50(4) — deployer disclosure for deepfakes + public-interest text</h3>
          <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6 }}>
            Deployers of AI systems that produce or manipulate image/audio/video constituting a deep
            fake must visibly disclose the content has been artificially generated or manipulated.
            Deployers using AI-generated text on matters of public interest must disclose unless the
            output has undergone human review or editorial control with editorial responsibility.
          </p>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>Common gaps — how teams fail Article 50 audit</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>Single-layer C2PA only.</strong> Code of Practice draft requires two layers. Most current "Content Credentials" implementations fail.</li>
          <li><strong>No watermark survival testing.</strong> If your watermark dies on a screenshot, JPEG re-save, or platform re-encode, it doesn't satisfy "robust + reliable to the extent technically feasible."</li>
          <li><strong>Deployer disclosure missing on deepfakes.</strong> Article 50(4) is about visible disclosure — not just metadata. Forgetting the visible "AI-generated" badge on user-facing surfaces is a common audit fail.</li>
          <li><strong>No audit trail for the marking decision.</strong> Auditor will ask: "show me the decision log for which outputs were marked vs not." If you don't have it, you fail Article 12 record-keeping at the same time.</li>
          <li><strong>Text watermarking deferred.</strong> Article 50(2) explicitly covers text. SynthID-style invisible watermarks for text are technically feasible — "we don't watermark text" is no longer a defensible answer.</li>
          <li><strong>No fallback fingerprinting.</strong> Code of Practice says fingerprinting is the documented fallback. No fingerprint DB = no fallback evidence.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 50</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
            <li><strong>meok-watermark-attest-mcp</strong> — C2PA manifest signing + SynthID-class invisible watermark + perceptual fingerprint. All three layers, signed cert per batch.</li>
            <li><strong>/article-50-kit (£999)</strong> — turnkey 7-day deployment of all three layers in your GenAI pipeline. Includes the signed conformity attestation.</li>
            <li><strong>/audit-prep-bundle (£4,950)</strong> — Article 50 + Articles 9/10/14/26 wrapped in a 14-day engagement with full evidence pack.</li>
            <li><strong>Verification</strong> — every signed cert has a public verify URL at meok-attestation-api.vercel.app/verify your auditor can curl independently.</li>
          </ul>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center", marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>2 Nov 2026 is the only real EU AI Act cliff left</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            The Digital Omnibus delayed Annex III high-risk to Dec 2027. Article 50 wasn't delayed.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/article-50-kit" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£999 Article 50 Kit →</Link>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free 90-second scorecard →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Sources: EU AI Act <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>Regulation (EU) 2024/1689</a> · <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-second-draft-code-practice-marking-and-labelling-ai-generated-content" style={{ color: GOLD }}>Second draft Code of Practice on marking AI-generated content (3 March 2026)</a>
          <br />
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
