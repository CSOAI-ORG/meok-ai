import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK AI Bill 2026 — What UK Businesses Must Do Now",
  description:
    "The UK AI Bill 2026 gives the ICO, CMA, FCA, and Ofcom new AI-specific powers. Here's what it means for your business — with MEOK tools to evidence compliance today.",
  alternates: { canonical: "https://meok.ai/uk-ai-bill-2026" },
  openGraph: {
    title: "UK AI Bill 2026 — Compliance Guide for UK Businesses",
    description: "Sector-led AI regulation is becoming law. Your existing regulators now have explicit AI enforcement powers. What you need to do before Q3 2026.",
    url: "https://meok.ai/uk-ai-bill-2026",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const RED = "#dc2626";

const FAQ = [
  {
    q: "What is the UK AI Bill 2026?",
    a: "The UK AI Bill 2026 legislates the 'pro-innovation' AI regulatory framework first proposed in the 2023 AI Regulation White Paper. Rather than creating a new regulatory body, it gives sector regulators — the ICO, CMA, FCA, Ofcom, MHRA — statutory AI-specific enforcement powers. It covers transparency, accountability, fairness, safety, and contestability principles, and requires covered organisations to maintain AI governance documentation. Royal Assent expected Q3 2026.",
  },
  {
    q: "Does the UK AI Bill apply to my business?",
    a: "If you use AI systems in the UK — or serve UK consumers with AI-assisted products — you are likely in scope. The Bill targets 'high-impact' AI use across regulated sectors (financial services, healthcare, media, telecoms, data-processing). Even SMBs that use AI for hiring decisions, customer credit scoring, or content moderation will have obligations.",
  },
  {
    q: "How does the UK AI Bill relate to the EU AI Act?",
    a: "They are separate but complementary. The EU AI Act has direct effect in the EU and applies extraterritorially to UK businesses with EU customers. The UK AI Bill applies domestically. For most UK businesses, EU AI Act obligations are more prescriptive and arrive first (high-risk AI obligations: 2 December 2027 per Digital Omnibus delay). However, the UK Bill adds an additional domestic layer of transparency and accountability reporting.",
  },
  {
    q: "What's the penalty for non-compliance?",
    a: "The Bill empowers each sector regulator to use its existing enforcement toolkit — so FCA can use Financial Services Act powers, ICO can use UK GDPR enforcement (£17.5M / 4% global turnover), CMA can use Competition Act tools. There will also be new AI-specific civil penalty provisions mirroring the EU AI Act's tiered structure (proposed: up to £10M or 2% of UK turnover, whichever is higher).",
  },
  {
    q: "What is the disclosure requirement in the UK AI Bill?",
    a: "The Bill requires providers of AI systems in regulated sectors to disclose: (a) that AI is being used in a customer-facing decision, (b) the basis for AI-assisted decisions affecting individuals, (c) that individuals have a right to request human review. These disclosure obligations align closely with EU AI Act Article 50 (transparency for certain AI systems) and UK GDPR Article 22 (automated decision-making).",
  },
  {
    q: "What about the DSIT AI Assurance roadmap?",
    a: "The UK AI Bill is underpinned by DSIT's AI Assurance Ecosystem — a network of third-party conformity assessors (auditors) who can provide evidence of compliance. Unlike the EU AI Act's Notified Body system, UK assurance is voluntary but regulators can require evidence-based assurance as part of enforcement. The MEOK HMAC-signed attestation standard aligns with the DSIT assurance approach.",
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
  headline: "UK AI Bill 2026 — Compliance Guide for UK Businesses",
  description: metadata.description,
  author: { "@type": "Organization", name: "MEOK AI Labs" },
  publisher: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  url: "https://meok.ai/uk-ai-bill-2026",
  dateModified: new Date().toISOString().split("T")[0],
};

const REGULATORS = [
  { name: "ICO", full: "Information Commissioner's Office", ai_power: "AI-specific audit powers, transparency enforcement, GDPR Art. 22 AI alignment" },
  { name: "FCA", full: "Financial Conduct Authority", ai_power: "AI risk management in financial services, model governance, Consumer Duty AI alignment" },
  { name: "CMA", full: "Competition & Markets Authority", ai_power: "AI market power abuse, algorithmic collusion, foundation model market study enforcement" },
  { name: "Ofcom", full: "Office of Communications", ai_power: "AI-generated content in media, deepfake broadcast standards, Online Safety Act AI link" },
  { name: "MHRA", full: "Medicines & Healthcare products Regulatory Agency", ai_power: "AI as medical device (SaMD), Software and AI as a Medical Device (SaMD) pathway" },
];

export default function UKAIBill2026Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>

        {/* Breadcrumb */}
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← EU AI Act Overview</Link>
        <span style={{ fontSize: 13, color: `${NAVY}33`, margin: "0 8px" }}>·</span>
        <Link href="/dora" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>DORA →</Link>

        {/* Status badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 999, background: `${RED}18`, border: `1px solid ${RED}44`, color: RED, fontSize: 12, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 20, marginBottom: 20 }}>
          <span>⚠</span> Royal Assent expected Q3 2026 — prepare now
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          UK AI Bill 2026
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 16, lineHeight: 1.65 }}>
          The UK&apos;s domestic AI legislation gives sector regulators — the ICO, CMA, FCA, Ofcom, MHRA — statutory AI-specific enforcement powers for the first time. It builds on the pro-innovation framework from the 2023 AI Regulation White Paper, making transparency, accountability, and contestability obligations legally binding.
        </p>
        <p style={{ fontSize: "1rem", color: `${NAVY}88`, maxWidth: 720, marginBottom: 40, lineHeight: 1.65 }}>
          Unlike the EU AI Act (which creates a single EU-wide rulebook), the UK Bill empowers <strong>your existing regulator</strong> with new AI tools. For UK financial services businesses, that&apos;s the FCA. For healthcare, the MHRA. For data processing, the ICO.
        </p>

        {/* Quick action CTA */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
          <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 26px", background: NAVY, color: "white", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 15 }}>
            Run your AI risk scorecard →
          </Link>
          <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 26px", background: "transparent", color: NAVY, borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 15, border: `1px solid ${NAVY}33` }}>
            Get the Audit Prep Bundle
          </Link>
        </div>

        {/* Timeline */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 20 }}>UK AI Bill 2026 timeline</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 48 }}>
          {[
            { date: "Mar 2023", event: "AI Regulation White Paper published — pro-innovation framework proposed, no new regulator" },
            { date: "Jan 2025", event: "UK Government AI Opportunities Action Plan — 50 commitments, confirmed sector-led approach" },
            { date: "Mar 2026", event: "UK AI Bill introduced in Parliament — 2nd reading completed" },
            { date: "Q3 2026", event: "Royal Assent expected — sector regulators receive new enforcement powers" },
            { date: "Q1 2027", event: "Sector regulators publish AI-specific enforcement guidance and compliance frameworks" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 16, padding: "16px 20px", background: "white", borderRadius: 10, border: `1px solid ${NAVY}0d`, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, fontWeight: 900, fontSize: 13, color: GOLD, minWidth: 70 }}>{item.date}</div>
              <div style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.5 }}>{item.event}</div>
            </div>
          ))}
        </div>

        {/* Five principles */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 8 }}>The five regulatory principles</h2>
        <p style={{ fontSize: 14, color: `${NAVY}77`, marginBottom: 20, lineHeight: 1.6 }}>
          The UK AI Bill enshrines the five cross-cutting principles from the 2023 White Paper. Each sector regulator is required to apply these principles in its domain.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { num: "1", title: "Safety & Security", desc: "AI systems must not create unacceptable safety risks. Regulators must consider physical, psychological, and financial harm." },
            { num: "2", title: "Transparency", desc: "Users must know when AI is influencing decisions that affect them. AI-generated content must be disclosed." },
            { num: "3", title: "Fairness", desc: "AI must not discriminate unlawfully. Protected characteristics under the Equality Act 2010 apply in AI decision-making." },
            { num: "4", title: "Accountability", desc: "Organisations must be able to identify who is responsible for AI decisions and evidence their governance structure." },
            { num: "5", title: "Contestability & Redress", desc: "Affected individuals must have a meaningful route to contest AI-assisted decisions. Human review must be available for high-impact decisions." },
          ].map((p) => (
            <div key={p.num} style={{ padding: 20, background: "white", borderRadius: 12, border: `1px solid ${NAVY}0d` }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Principle {p.num}</div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}77`, lineHeight: 1.55 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Sector regulators */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 8 }}>Who enforces it — by sector</h2>
        <p style={{ fontSize: 14, color: `${NAVY}77`, marginBottom: 20, lineHeight: 1.6 }}>
          The UK AI Bill doesn&apos;t create a new AI regulator. Your existing sector regulator gets new AI-specific enforcement tools.
        </p>
        <div style={{ marginBottom: 48 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: NAVY, color: "white" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Regulator</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Full name</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>New AI enforcement powers</th>
              </tr>
            </thead>
            <tbody>
              {REGULATORS.map((r, i) => (
                <tr key={r.name} style={{ background: i % 2 === 0 ? "white" : `${NAVY}05` }}>
                  <td style={{ padding: "12px 16px", fontWeight: 900, color: GOLD }}>{r.name}</td>
                  <td style={{ padding: "12px 16px", color: `${NAVY}88` }}>{r.full}</td>
                  <td style={{ padding: "12px 16px", color: `${NAVY}77` }}>{r.ai_power}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* UK vs EU comparison */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 20 }}>UK AI Bill vs EU AI Act — key differences</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
          <div style={{ padding: 24, background: `#003399` + "12", borderRadius: 12, border: `1px solid #003399` + "33" }}>
            <div style={{ fontWeight: 900, fontSize: 16, color: "#003399", marginBottom: 12 }}>🇪🇺 EU AI Act</div>
            <ul style={{ paddingLeft: 16, color: `${NAVY}88`, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
              <li>Single EU-wide regulation</li>
              <li>Risk-tiered obligations (minimal → high-risk → prohibited)</li>
              <li>New EU AI Office + Notified Bodies</li>
              <li>Max fine: €35M or 7% global turnover</li>
              <li>High-risk AI: 2 Dec 2027 (Omnibus delay)</li>
              <li>CE marking + conformity assessment required</li>
            </ul>
          </div>
          <div style={{ padding: 24, background: `#C8102E` + "0d", borderRadius: 12, border: `1px solid #C8102E` + "33" }}>
            <div style={{ fontWeight: 900, fontSize: 16, color: "#C8102E", marginBottom: 12 }}>🇬🇧 UK AI Bill 2026</div>
            <ul style={{ paddingLeft: 16, color: `${NAVY}88`, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
              <li>Sector-led via existing regulators</li>
              <li>Principles-based (5 cross-cutting principles)</li>
              <li>No new AI body — ICO/CMA/FCA/Ofcom</li>
              <li>Max fine: £10M or 2% UK turnover (proposed)</li>
              <li>Royal Assent: Q3 2026</li>
              <li>No CE marking — assurance via DSIT ecosystem</li>
            </ul>
          </div>
        </div>

        {/* MEOK product CTA */}
        <div style={{ background: NAVY, color: "white", borderRadius: 16, padding: 36, marginBottom: 48, border: `1px solid ${GOLD}44` }}>
          <h2 style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: 12, color: "white" }}>
            Evidence compliance with MEOK
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.65, marginBottom: 24, fontSize: 14 }}>
            MEOK&apos;s HMAC-signed attestation framework aligns with both the EU AI Act conformity evidence requirements and the DSIT AI Assurance Ecosystem approach. One audit trail that satisfies both regimes.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "12px 22px", background: GOLD, color: NAVY, borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
              Run your AI risk scorecard (free)
            </Link>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "12px 22px", background: "transparent", color: "white", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 14, border: "1px solid rgba(255,255,255,0.25)" }}>
              Audit Prep Bundle →
            </Link>
            <Link href="/transparency" style={{ display: "inline-block", padding: "12px 22px", background: "transparent", color: "white", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 14, border: "1px solid rgba(255,255,255,0.25)" }}>
              Transparency Report generator →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 24 }}>Frequently asked questions</h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 48 }}>
          {FAQ.map((item, i) => (
            <div key={i} style={{ padding: 24, background: "white", borderRadius: 12, border: `1px solid ${NAVY}0d` }}>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{item.q}</div>
              <div style={{ fontSize: 14, color: `${NAVY}88`, lineHeight: 1.65 }}>{item.a}</div>
            </div>
          ))}
        </div>

        {/* Related */}
        <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 16 }}>Related compliance surfaces</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[
            { href: "/eu-ai-act", label: "EU AI Act overview" },
            { href: "/dora", label: "DORA (financial services)" },
            { href: "/nis2-de-kit", label: "NIS2 Germany kit" },
            { href: "/scorecard", label: "AI risk scorecard" },
            { href: "/transparency", label: "Transparency report" },
            { href: "/bias-detection", label: "Bias detection audit" },
            { href: "/care-homes", label: "Care home compliance" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "inline-block", padding: "9px 16px", background: "white", color: NAVY, borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 13, border: `1px solid ${NAVY}1a` }}>
              {l.label} →
            </Link>
          ))}
        </div>

        <p style={{ color: `${NAVY}55`, fontSize: 12, lineHeight: 1.6, borderTop: `1px solid ${NAVY}0d`, paddingTop: 24 }}>
          This page reflects the UK AI Bill 2026 as introduced in Parliament. Details may change before Royal Assent. Last updated May 2026. This is compliance information, not legal advice. Consult a qualified solicitor for advice specific to your organisation. MEOK AI Labs · CSOAI LTD · Companies House 16939677.
        </p>
      </div>
    </main>
  );
}
