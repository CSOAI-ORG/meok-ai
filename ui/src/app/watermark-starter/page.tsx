import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Article 50 Watermarking Starter Kit · £99 self-serve · MEOK AI Labs",
  description:
    "EU AI Act Article 50 watermarking implementation kit. C2PA manifest templates + invisible watermark recipe + Code-of-Practice 2-layer checklist + signed conformity attestation template. Self-deployed in 2 hours. £99 one-time.",
  alternates: { canonical: "https://meok.ai/watermark-starter" },
  openGraph: {
    title: "Article 50 Watermarking Starter Kit — £99 self-serve",
    description: "C2PA + invisible watermark + Code-of-Practice 2-layer checklist. Ship in 2 hours.",
    type: "website",
    url: "https://meok.ai/watermark-starter",
    images: [{ url: "/api/og?title=Watermarking+Starter+Kit&desc=%C2%A399+%C2%B7+2-hour+ship+%C2%B7+EU+AI+Act+Art+50", width: 1200, height: 630, alt: "Watermarking Starter Kit" }],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const RED = "#dc2626";

const STRIPE_LINK = "https://buy.stripe.com/cNi14pfsMdQS8sl6as8k91w";

const CONTENTS = [
  {
    file: "01-code-of-practice-checklist.pdf",
    desc: "EU AI Act Code of Practice on AI-content marking (3 March 2026 second draft) translated into a 2-page implementation checklist. Every required field, every threshold, every fallback path.",
  },
  {
    file: "02-c2pa-manifest-templates/",
    desc: "5 C2PA Content Credentials manifest templates (image, video, audio, text-LLM, mixed-media). Pre-populated with the c2pa.actions.v2 + c2pa.training-mining + IPTC photo-metadata assertions per the 2.1 spec. Drop your DigiCert C2PA cert in the signature slot.",
  },
  {
    file: "03-invisible-watermark-recipe.md",
    desc: "Pick a SynthID-class invisible-watermark library (DeepMind SynthID for Google models, StableSig for Stable Diffusion, custom for in-house). Recipe shows where to insert in the model output layer, threshold tuning, survival testing matrix.",
  },
  {
    file: "04-perceptual-fingerprint-ledger.sql",
    desc: "PostgreSQL schema + indices for the Code-of-Practice fingerprinting fallback ledger. Drop into your DB. Includes pHash + dHash columns + sample queries for fuzzy duplicate detection.",
  },
  {
    file: "05-conformity-attestation-template.json",
    desc: "Signed Article 50 conformity attestation JSON template. HMAC-SHA256, public verify URL, dated to 2 August 2026 cliff. Plug your entity name + signing key + paste into your evidence pack.",
  },
  {
    file: "06-disclosure-copy-library.md",
    desc: "20 ready-to-paste deployer-disclosure-copy templates per Article 50(4): chatbot 'this is AI', deepfake video overlay, emotion-recognition kiosk notice, public-interest text watermarks. EN + DE + FR translations.",
  },
  {
    file: "07-survival-test-matrix.csv",
    desc: "Watermark survival test matrix: screenshot, JPEG re-save, platform re-encode (Twitter, LinkedIn, Substack, Discord), 4× upscale, crop, rotation. Score each by % retained on your watermark library.",
  },
  {
    file: "08-90-day-runbook.pdf",
    desc: "90-day shipping runbook from order to live Article 50 conformity. Day-by-day checklist, gotchas (DigiCert C2PA cert acquisition, SynthID library licensing, fingerprint DB sizing), regulator-readiness checks.",
  },
];

const FAQ = [
  {
    q: "Why only £99 when the full /article-50-kit is £999?",
    a: "The £999 kit ships in 7 days with hands-on integration support + signed attestation generation tied to YOUR entity. The £99 starter is templates + recipe + checklist that you self-deploy in 2 hours. If you have a competent engineer + 2 hours, the starter does it. If you want it done for you with auditor-grade signatures, the £999 kit is the upgrade.",
  },
  {
    q: "Does the £99 kit include the signed attestation cert?",
    a: "It includes a TEMPLATE for the signed conformity attestation. You sign it yourself with your own HMAC key. The £999 kit signs it via meok-attestation-api with a public verify URL. The template is sufficient for self-attestation; the signed cert is sufficient for auditor-verifiable evidence.",
  },
  {
    q: "What format is the kit?",
    a: "Single ZIP file (~5MB) with the 8 files listed. PDFs are printable; templates are JSON / SQL / Markdown / CSV. After you complete the £99 Stripe checkout, you're redirected to the download URL automatically.",
  },
  {
    q: "Refund?",
    a: "14-day refund if the kit hasn't been deployed (no signed cert generated yet). After deployment, no refund — you have the working artefact. UK Consumer Rights Act 2015 statutory protections apply.",
  },
  {
    q: "Do I still need to write code?",
    a: "Yes. The kit is templates + recipes + checklists, not a turnkey runtime. You'll plug it into your existing GenAI pipeline (Stable Diffusion / Comfy / OpenAI / Anthropic / custom). Estimated 2-4 hours of engineering for an experienced ML engineer. The £999 kit removes the engineering work.",
  },
  {
    q: "Will this satisfy my auditor?",
    a: "The kit produces the artifacts your auditor will ask for (C2PA manifest, watermark survival test results, fingerprint ledger, signed attestation). Whether your auditor accepts your self-attestation versus requiring our cryptographically-signed-via-our-API attestation is auditor-specific. Most auditors accept self-attestation if the artefacts are complete; some Big-4 firms want third-party signatures (the £999 + £4,950 SKUs).",
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
  name: "Article 50 Watermarking Starter Kit",
  description: "Self-serve £99 EU AI Act Article 50 implementation kit. C2PA + invisible watermark + Code-of-Practice 2-layer checklist + signed attestation template.",
  brand: { "@type": "Brand", name: "MEOK AI Labs" },
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/watermark-starter",
  },
};

export default function WatermarkStarterPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← meok.ai</Link>

        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(220,38,38,0.1)", border: `1px solid rgba(220,38,38,0.4)`, color: RED, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 24, marginBottom: 24 }}>
          ⚠️ 2 Aug 2026 cliff · £99 self-serve · 2-hour ship
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Article 50 Watermarking Starter Kit
        </h1>
        <p style={{ fontSize: "1.5rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>£99 one-time</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32, lineHeight: 1.6 }}>
          Self-deploy EU AI Act Article 50 watermarking compliance in 2 hours. C2PA manifest
          templates + SynthID-class invisible watermark recipe + Code-of-Practice second-draft
          (3 March 2026) 2-layer checklist + signed conformity attestation template. Single ZIP,
          instant download after Stripe checkout.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
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
            Buy Starter Kit — £99 →
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
            Or full £999 kit (done-in-7-days) →
          </Link>
        </div>

        {/* What's in the kit */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 20 }}>What's in the ZIP</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 56 }}>
          {CONTENTS.map((c) => (
            <div key={c.file} style={{ background: "white", borderRadius: 12, padding: 20, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontFamily: "monospace", fontSize: 13, color: GOLD, fontWeight: 700, marginBottom: 6 }}>
                {c.file}
              </div>
              <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>Starter (£99) vs Full Kit (£999) vs Audit-Prep Bundle (£4,950)</h2>
        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, marginBottom: 56, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div style={{ padding: "12px 16px" }}>WHAT YOU GET</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>STARTER £99</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>FULL £999</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>BUNDLE £4,950</div>
          </div>
          {[
            { feat: "Templates + recipes + checklist (DIY)", s: "✓", f: "✓", b: "✓" },
            { feat: "Hands-on integration with your pipeline", s: "—", f: "✓", b: "✓" },
            { feat: "Signed cert via meok-attestation-api", s: "Self-sign", f: "✓", b: "✓" },
            { feat: "Public verify URL per cert", s: "—", f: "✓", b: "✓" },
            { feat: "DigiCert C2PA cert acquisition support", s: "—", f: "✓", b: "✓" },
            { feat: "Watermark survival testing on your media", s: "—", f: "✓", b: "✓" },
            { feat: "Article 9 + 10 + 14 + 26 evidence wrapped", s: "—", f: "—", b: "✓" },
            { feat: "90-day post-engagement support", s: "—", f: "✓", b: "✓" },
            { feat: "Time to ship", s: "2 hrs", f: "7 days", b: "14 days" },
            { feat: "Auditor-grade evidence pack", s: "DIY", f: "Yes", b: "Yes + 90d support" },
          ].map((r, i) => (
            <div key={r.feat} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", fontSize: 13, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{r.feat}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>{r.s}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08`, color: GOLD, fontWeight: 700 }}>{r.f}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08`, color: GOLD, fontWeight: 700 }}>{r.b}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Buy now, ship in 2 hours</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            Single Stripe checkout. ZIP downloads automatically after payment. 14-day refund if you haven't deployed.
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
            Buy Kit — £99 →
          </a>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>14-day refund</Link>
        </p>
      </div>
    </main>
  );
}
