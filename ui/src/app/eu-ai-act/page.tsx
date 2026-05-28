import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act — Article-by-article implementation guides · MEOK AI Labs",
  description:
    "Per-article implementation guides for the EU AI Act: Article 4 literacy, Article 9 RMS, Article 10 data governance, Article 14 oversight, Article 26 deployer obligations + FRIA, Article 50 transparency, Article 72 post-market monitoring.",
  alternates: { canonical: "https://meok.ai/eu-ai-act" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const ARTICLES = [
  { num: 4, title: "AI Literacy", desc: "Provider AND deployer training programmes for staff who use, oversee, or are affected by AI. Already binding.", deadline: "IN FORCE since 2 Feb 2025 — NO GRACE", href: "/eu-ai-act/article-4" },
  { num: 9, title: "Risk Management System (RMS)", desc: "Continuous, iterative risk identification + analysis + mitigation across the lifecycle.", deadline: "Annex III now Dec 2027 (delayed)", href: "/eu-ai-act/article-9" },
  { num: 10, title: "Data Governance + Bias Mitigation", desc: "Relevant, representative, error-free training/validation/test datasets with documented bias examination.", deadline: "Annex III now Dec 2027", href: "/eu-ai-act/article-10" },
  { num: 13, title: "Transparency to Deployers", desc: "Provider must supply instructions for use containing all info deployers need to use the system safely + lawfully.", deadline: "Annex III now Dec 2027", href: "/eu-ai-act/article-13" },
  { num: 14, title: "Human Oversight", desc: "Effective natural-person intervention, override, and stop capabilities for high-risk AI.", deadline: "Annex III now Dec 2027", href: "/eu-ai-act/article-14" },
  { num: 15, title: "Accuracy / Robustness / Cybersecurity", desc: "Technical guarantees + adversarial-attack resilience + audit-grade logging for high-risk AI.", deadline: "Annex III now Dec 2027", href: "/eu-ai-act/article-15" },
  { num: 26, title: "Deployer Obligations + FRIA (26(9))", desc: "Operational obligations on companies USING high-risk AI, plus the Fundamental Rights Impact Assessment for public-sector + insurance deployers.", deadline: "Annex III now Dec 2027", href: "/eu-ai-act/article-26" },
  { num: 43, title: "Conformity Assessment + CE Marking", desc: "Self-assessment (Annex VI) or Notified Body audit (Annex VII) before placing on EU market. EU declaration of conformity + CE marking.", deadline: "Annex III now Dec 2027", href: "/eu-ai-act/article-43" },
  { num: 50, title: "Transparency + Watermarking", desc: "Machine-readable AI-content marking + visible deepfake disclosure. C2PA Content Credentials + SynthID-class watermark.", deadline: "2 August 2026 — HARD CLIFF", href: "/eu-ai-act/article-50" },
  { num: 72, title: "Post-Market Monitoring", desc: "Documented PMM plan + continuous data collection + feedback loop into Article 9 RMS + Article 73 incident reporting.", deadline: "Annex III now Dec 2027", href: "/eu-ai-act/article-72" },
];

export default function EUAIActIndexPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← meok.ai</Link>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>
          EU AI Act — article-by-article guides
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Plain-English implementation guides for the EU AI Act articles that actually move money. Each
          page links to the legal text, common audit failures, MEOK MCPs that cover the article, and
          the kit/bundle that ships the evidence pack.
        </p>

        <div style={{ display: "grid", gap: 14, marginBottom: 56 }}>
          {ARTICLES.map((a) => (
            <Link
              key={a.num}
              href={a.href}
              style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 6 }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 900 }}>
                  <span style={{ color: GOLD }}>Article {a.num}</span> — {a.title}
                </h2>
                <div style={{ fontSize: 11, color: a.deadline.includes("HARD CLIFF") ? "#dc2626" : `${NAVY}66`, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {a.deadline}
                </div>
              </div>
              <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.55 }}>{a.desc}</p>
              <div style={{ fontSize: 13, color: GOLD, fontWeight: 700, marginTop: 8 }}>Read implementation guide →</div>
            </Link>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Take the readiness scorecard first</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            10 questions covering all 5 articles above plus Article 4 literacy, Article 43 conformity, Article 72 post-market. 90 seconds. Free. No credit card.
          </p>
          <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 28px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 15 }}>
            Take readiness scorecard →
          </Link>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
