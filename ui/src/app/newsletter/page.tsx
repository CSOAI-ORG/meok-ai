import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Compliance Brief — Free Weekly Newsletter | MEOK AI Labs",
  description:
    "1-page weekly newsletter on EU AI Act + DORA + NIS2 + EU CRA. What changed this week, one practical tip, one paid resource. No fluff. No spam.",
  alternates: { canonical: "https://meok.ai/newsletter" },
  openGraph: {
    title: "EU AI Compliance Brief — Weekly Newsletter",
    description: "What changed this week in EU AI regulation. Free, 1-page, every Monday 8am UK.",
    type: "website",
    url: "https://meok.ai/newsletter",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "How often does it go out?", a: "Every Monday morning at 8am UK time. One issue, one page, takes 3 minutes to read. No mid-week sends, no upsell blasts." },
  { q: "What's in each issue?", a: "(1) What changed this week — a 3-bullet recap of new implementing acts, delegated acts, national transposition updates, EDPB / AI Office guidance. (2) One practical tip — concrete this-week action you can take. (3) One paid resource link — usually our /audit-prep-bundle or a partner kit." },
  { q: "Is it free?", a: "Yes. Always free. No paywall version. The newsletter exists to build distribution + trust, not as a revenue channel itself." },
  { q: "Do you sell my email?", a: "No. We use Buttondown for delivery (privacy-first newsletter platform, GDPR compliant). We never share, sell, or rent emails. Unsubscribe link in every issue, one click." },
  { q: "What if I'm not in EU?", a: "Most subscribers ship to EU customers even if based elsewhere. The Brief covers EU regulatory developments that affect anyone selling, deploying, or building AI for EU users." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function NewsletterPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 740, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Free · weekly · 3 min read</div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>EU AI Compliance Brief</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>1 page. Every Monday. What changed + one practical tip.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 40, lineHeight: 1.6 }}>
          A 3-minute weekly digest covering what shifted in the EU AI Act, DORA, NIS2, EU CRA, and ISO/IEC 42001 — written for compliance leads, founders, and engineering teams who need to know without spending hours on EUR-Lex.
        </p>

        <form
          method="POST"
          action="https://buttondown.email/api/emails/embed-subscribe/meok-eu-ai-compliance-brief"
          target="popupwindow"
          className="embeddable-buttondown-form"
          style={{
            background: "white",
            borderRadius: 14,
            padding: 28,
            border: `1px solid ${NAVY}1a`,
            marginBottom: 40,
          }}
        >
          <label htmlFor="bd-email" style={{ display: "block", fontSize: 14, fontWeight: 700, marginBottom: 10 }}>
            Your work email
          </label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="founder@your-saas.com"
              required
              style={{
                flex: "1 1 220px",
                padding: "12px 14px",
                borderRadius: 10,
                border: `1px solid ${NAVY}33`,
                fontSize: 15,
                background: "white",
                color: NAVY,
              }}
            />
            <input type="hidden" value="1" name="embed" />
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                background: GOLD,
                color: NAVY,
                borderRadius: 10,
                fontWeight: 900,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
              }}
            >
              Subscribe (free) →
            </button>
          </div>
          <div style={{ fontSize: 12, color: `${NAVY}66`, marginTop: 12, lineHeight: 1.5 }}>
            One email a week. No spam. Unsubscribe anytime in one click. Powered by Buttondown (privacy-first, GDPR compliant).
          </div>
        </form>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>Sample issue structure</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <div style={{ fontSize: 13, color: `${NAVY}66`, marginBottom: 8 }}>EU AI Compliance Brief #N — Monday 8am UK</div>
          <div style={{ fontSize: 15, fontWeight: 900, marginBottom: 12 }}>What changed this week</div>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.7, fontSize: 13, marginBottom: 16 }}>
            <li>EDPB published Q2 2026 FRIA template — Article 26(9) implementation guidance</li>
            <li>BSI confirmed NIS2-UmsuCG registration portal opens 1 September 2026</li>
            <li>Article 50 implementing-act draft circulated — text watermark robustness threshold defined</li>
          </ul>

          <div style={{ fontSize: 15, fontWeight: 900, marginBottom: 12 }}>This week's practical tip</div>
          <p style={{ color: `${NAVY}99`, lineHeight: 1.7, fontSize: 13, marginBottom: 16 }}>
            If you ship generative outputs, confirm your C2PA signing key chain rolls up to a recognized CA before 2 November 2026. Most teams forget that self-signed certs work for testing but fail Adobe / Google / Microsoft surface verification.
          </p>

          <div style={{ fontSize: 15, fontWeight: 900, marginBottom: 12 }}>One resource</div>
          <p style={{ color: `${NAVY}99`, lineHeight: 1.7, fontSize: 13 }}>
            Article 50 Watermark Starter Kit — £99 ZIP — includes C2PA manifest template + signing-key custody policy. <Link href="/article-50-kit" style={{ color: GOLD, fontWeight: 700 }}>meok.ai/article-50-kit</Link>
          </p>
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

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · Newsletter delivered by <a href="https://buttondown.email/" style={{ color: GOLD }}>Buttondown</a>
        </p>
      </div>
    </main>
  );
}
