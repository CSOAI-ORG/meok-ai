import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Omnibus 2026: EU AI Act High-Risk Delayed 16 Months — What Actually Changed | MEOK Blog",
  description:
    "March 2026 Digital Omnibus implementing acts pushed Annex III obligations to 2 December 2027 and Annex I to 2 August 2028. Here's what's still binding now and the deadlines you can't ignore.",
  alternates: { canonical: "https://meok.ai/blog/digital-omnibus-delay-2026" },
  openGraph: {
    title: "Digital Omnibus 2026: EU AI Act High-Risk Delayed — What Actually Changed",
    description:
      "Article 50 watermarking, Article 4 literacy, Article 5 prohibited practices, GPAI obligations: still binding. High-risk Annex III deferred 16 months.",
    type: "article",
    publishedTime: "2026-04-27",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/digital-omnibus-delay-2026",
    siteName: "MEOK.AI",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Digital Omnibus 2026: EU AI Act High-Risk Delayed 16 Months — What Actually Changed",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Person", name: "Nicholas Templeman", url: "https://meok.ai/about" },
  publisher: { "@type": "Organization", name: "MEOK AI Labs", logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" } },
  description:
    "March 2026 Digital Omnibus implementing acts pushed Annex III obligations to 2 December 2027 and Annex I to 2 August 2028. What's still binding now.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://meok.ai/blog/digital-omnibus-delay-2026" },
};

export default function DigitalOmnibusDelayPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <article style={{ maxWidth: 740, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/blog" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All posts</Link>
        <div style={{ fontSize: 12, color: GOLD, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 24, marginBottom: 16 }}>EU AI Act · 27 April 2026 · 6 min read</div>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>Digital Omnibus 2026 — what 16 months of high-risk delay actually changes</h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 32 }}>The European Commission published the Digital Omnibus implementing acts in March 2026. The headline number — high-risk Annex III obligations pushed from 2 August 2026 to 2 December 2027, Annex I to 2 August 2028 — is real, but most teams are mis-reading what it covers.</p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>What got delayed</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 24 }}>
          <li><strong>Article 6 + Annex III</strong> — the high-risk classification trigger. Now 2 Dec 2027.</li>
          <li><strong>Articles 9-15</strong> — the high-risk requirements bundle (RMS, data governance, technical documentation, record-keeping, transparency, oversight, accuracy/robustness/cybersecurity).</li>
          <li><strong>Article 26</strong> — deployer obligations including 26(9) FRIA. Same deadline.</li>
          <li><strong>Article 43 + Annex VI/VII</strong> — conformity assessment + CE marking.</li>
          <li><strong>Articles 71/72/73</strong> — EU database registration, post-market monitoring, incident reporting (15-day / 2-day deadlines).</li>
          <li><strong>Annex I high-risk</strong> — those tied to existing EU product safety legislation (medical devices, machinery, vehicles). Pushed further to 2 Aug 2028.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>What did NOT get delayed</h2>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>This is the part most teams miss:</p>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 24 }}>
          <li><strong>Article 4 — AI literacy.</strong> In force since 2 February 2025. No grace period. Every provider AND every deployer needs a documented AI literacy programme covering staff who use, oversee, or are affected by AI. <Link href="/eu-ai-act/article-4" style={{ color: GOLD }}>Detail</Link>.</li>
          <li><strong>Article 5 — prohibited practices.</strong> Fully in force. Manipulative subliminal techniques, exploitation of vulnerabilities, social scoring, real-time biometric ID in public spaces (with narrow exceptions): banned now.</li>
          <li><strong>Article 50 — transparency / watermarking.</strong> Now <strong>2 November 2026</strong>. Generative AI providers + deployers need C2PA-class provenance markers. <Link href="/eu-ai-act/article-50" style={{ color: GOLD }}>Detail</Link> · <Link href="/article-50-kit" style={{ color: GOLD }}>£99 starter kit</Link>.</li>
          <li><strong>Articles 51-55 — GPAI obligations.</strong> Already in force since 2 August 2025. Foundation-model providers need technical docs, training-data summaries, copyright policies, systemic-risk assessments where applicable.</li>
          <li><strong>Articles 99-101 — penalties.</strong> Effective per the original timeline for whichever obligations the penalties attach to.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>What the delay does NOT solve</h2>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>Three traps:</p>
        <ol style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 24 }}>
          <li><strong>Article 50 is 4 months out, not 16.</strong> Watermarking infrastructure is not a sprint — C2PA manifest generation, key custody, robust per-output marker integration, and end-user disclosure UI all need real engineering. Teams banking on the delay haven't read the right line.</li>
          <li><strong>National implementation is moving.</strong> Member states are using the delay to refine national supervisory authority structures and notified body lists. France, Germany, Italy, Spain, Netherlands have all started consultations. The substantive obligations don't change with national transposition; the enforcement regime does.</li>
          <li><strong>NIS2 + DORA + CRA aren't deferred.</strong> NIS2-UmsuCG (Germany) lands 17 October 2026 with €10M / 2% turnover penalty ceilings. DORA Reg 2022/2554 has been fully applicable since 17 January 2025. EU CRA (Reg 2024/2847) phases in from 11 December 2027. None of those moved.</li>
        </ol>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>What to do this quarter</h2>
        <ol style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 24 }}>
          <li><strong>Article 4 literacy programme</strong> — document training, identify affected roles, log completion. Already overdue.</li>
          <li><strong>Article 50 watermarking</strong> — pick a C2PA-compatible provider, integrate, test, ship before 2 Nov 2026. <Link href="/article-50-kit" style={{ color: GOLD }}>Starter kit</Link>.</li>
          <li><strong>Annex III scoping</strong> — even though obligations are deferred, classification work is not. Knowing now whether you're in scope is what lets you budget for 2027.</li>
          <li><strong>NIS2-DE entity classification</strong> — German operations or German revenue: you're likely in scope. <Link href="/nis2-de-kit" style={{ color: GOLD }}>£499 kit</Link>.</li>
          <li><strong>Take the readiness scorecard</strong> if you don't know where to start. Free, 90 sec, signed attestation: <Link href="/scorecard" style={{ color: GOLD }}>meok.ai/scorecard</Link>.</li>
        </ol>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 48 }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 8 }}>Need a signed evidence pack mapping each binding article to your stack?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>14-day Audit-Prep Bundle covers Article 4 + 5 + 50 + GPAI + DORA + NIS2 + CRA in a single HMAC-signed file.</p>
          <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 Audit-Prep Bundle →</Link>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>Regulation 2024/1689</a> · Digital Omnibus implementing acts March 2026 · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </article>
    </main>
  );
}
