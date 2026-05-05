import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NIS2-UmsuCG Germany Deadline 17 October 2026 — Entity Classification Guide | MEOK Blog",
  description:
    "30,000+ German companies are now in scope of NIS2-UmsuCG. Here's how to classify whether you're an Essential or Important entity, and what BSI registration requires by 17 October 2026.",
  alternates: { canonical: "https://meok.ai/blog/nis2-germany-deadline-2026" },
  openGraph: {
    title: "NIS2-UmsuCG Germany Deadline — Entity Classification Guide for 17 Oct 2026",
    description:
      "Essential vs Important entity classification under NIS2-UmsuCG. Penalty ceilings €10M / 2% turnover (essential), €7M / 1.4% (important).",
    type: "article",
    publishedTime: "2026-04-27",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/nis2-germany-deadline-2026",
    siteName: "MEOK.AI",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NIS2-UmsuCG Germany Deadline 17 October 2026 — Entity Classification Guide",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Person", name: "Nicholas Templeman", url: "https://meok.ai/about" },
  publisher: { "@type": "Organization", name: "MEOK AI Labs", logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" } },
  description: "30,000+ German companies in NIS2-UmsuCG scope. Classify Essential vs Important by 17 October 2026.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://meok.ai/blog/nis2-germany-deadline-2026" },
};

export default function Nis2DEPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <article style={{ maxWidth: 740, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/blog" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All posts</Link>
        <div style={{ fontSize: 12, color: GOLD, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 24, marginBottom: 16 }}>NIS2 · 27 April 2026 · 6 min read</div>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>NIS2-UmsuCG Germany — entity classification by 17 October 2026</h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 32 }}>The Umsetzungs- und Cybersicherheitsstärkungsgesetz transposes EU NIS2 (Directive 2022/2555) into German federal law. Roughly 30,000 German companies are now in scope — most don't know it yet. Registration with the BSI is required by 17 October 2026, and the penalty ceilings are real.</p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>Two entity tiers</h2>

        <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginTop: 24, marginBottom: 12 }}>Essential entities (Art. 28 NIS2-UmsuCG)</h3>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>Threshold: ≥250 employees OR &gt;€50M turnover, in any of the 18 sectors listed in Anhang 1:</p>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 16 }}>
          <li>Energy (electricity, oil, gas, hydrogen, district heating)</li>
          <li>Transport (air, rail, water, road)</li>
          <li>Banking (CRR credit institutions)</li>
          <li>Financial market infrastructure</li>
          <li>Health (hospitals, EU reference labs, medical devices, pharmaceuticals)</li>
          <li>Drinking water + wastewater</li>
          <li>Digital infrastructure (IXPs, DNS, TLD registries, cloud, data centres, CDN, trust service providers, electronic communications)</li>
          <li>ICT service management (B2B)</li>
          <li>Public administration (federal + state, with carve-outs)</li>
          <li>Space</li>
        </ul>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 24 }}>Penalty ceiling: <strong>€10M or 2% global turnover</strong>, whichever is higher.</p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginTop: 24, marginBottom: 12 }}>Important entities (Art. 29 NIS2-UmsuCG)</h3>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>Threshold: ≥50 employees OR &gt;€10M turnover, in any of these additional sectors (Anhang 2):</p>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 16 }}>
          <li>Postal + courier</li>
          <li>Waste management</li>
          <li>Manufacture/distribution of chemicals</li>
          <li>Production, processing, distribution of food</li>
          <li>Manufacture of medical devices, in vitro diagnostics, computers/electronics, electrical equipment, machinery, motor vehicles, other transport equipment</li>
          <li>Digital providers (online marketplaces, search engines, social networks)</li>
          <li>Research</li>
        </ul>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 24 }}>Penalty ceiling: <strong>€7M or 1.4% global turnover</strong>, whichever is higher.</p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>What you must do by 17 October 2026</h2>
        <ol style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 24 }}>
          <li><strong>Register with BSI</strong> — Bundesamt für Sicherheit in der Informationstechnik. Single point of contact for incident reports + supervisory communication.</li>
          <li><strong>Implement Art. 30 measures</strong> — risk analysis + information security policies, incident handling, business continuity + crisis management, supply chain security, system acquisition / development / maintenance, policies + procedures for cryptography, HR security, access control, multi-factor auth, secure communications.</li>
          <li><strong>Article 32 incident reporting</strong> — early warning within 24 hours, incident notification within 72 hours, final report within 1 month for significant incidents.</li>
          <li><strong>Management body training + accountability</strong> — board-level sign-off on cyber risk management. Personal liability for directors.</li>
          <li><strong>Supply chain risk assessment</strong> — Annex IV plus your contracts with critical suppliers must include security clauses.</li>
        </ol>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 40, marginBottom: 16 }}>How to classify yourself in 5 minutes</h2>
        <ol style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 24 }}>
          <li>Count headcount (FTE-equivalent, including parent + subsidiary if grouped).</li>
          <li>Look up most recent annual turnover (consolidated, group level).</li>
          <li>Check sector against Anhang 1 (Essential) and Anhang 2 (Important).</li>
          <li>If Essential thresholds met AND Anhang 1 sector → Essential entity. Done.</li>
          <li>If not Essential, check Important thresholds (≥50 emp OR &gt;€10M) AND Anhang 2 sector → Important entity.</li>
          <li>If neither → still review supply-chain dependencies. You may not be in scope but your customers are, and they'll push obligations down through contract.</li>
        </ol>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 48 }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 8 }}>Need the classifier + register template?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>£499 self-serve kit: NIS2-UmsuCG entity classifier wizard, BSI register submission template, Art. 30 measures checklist, incident-reporting workflow template. HMAC-signed evidence per check.</p>
          <Link href="/nis2-de-kit" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£499 NIS2-DE Kit →</Link>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/dir/2022/2555/oj" style={{ color: GOLD }}>Directive (EU) 2022/2555</a> · NIS2-UmsuCG (German federal law) · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </article>
    </main>
  );
}
