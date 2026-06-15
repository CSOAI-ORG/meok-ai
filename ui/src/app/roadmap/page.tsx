import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Roadmap — 2026 to 2028 | MEOK.AI",
  description:
    "MEOK roadmap 2026-2028: 28-hive mesh rollout, EU AI Act Article 50 cliff (2 Aug 2026), NIS2 UK implementation, ISO 42001 certifications, full regulatory timeline.",
  keywords: [
    "MEOK roadmap",
    "EU AI Act timeline",
    "Article 50 cliff",
    "NIS2 timeline",
    "ISO 42001 certification",
    "MEOK milestones",
  ],
  alternates: { canonical: "https://meok.ai/roadmap" },
};

const NAVY = "#1a1a2e"; const GOLD = "#c9a84c"; const BG = "#f5f0e8";

const ROADMAP_FAQ = [
  { q: "When is the EU AI Act Article 50 cliff?", a: "Article 50 transparency obligations for new AI systems apply from 2 August 2026 (C2PA + watermark + fingerprint for generative outputs). A second Article 50 cliff on 2 December 2026 covers pre-existing generative AI systems. MEOK ships the Art 50 Kit and an attestation library ahead of both dates." },
  { q: "Has the EU AI Act high-risk timeline been delayed?", a: "Yes. The Digital Omnibus delayed Annex III high-risk classification to 2 December 2027 and Annex I product-embedded high-risk to 2 August 2028. Watermarking under Article 50 is now the nearest cliff in 2026." },
  { q: "What other 2026-2027 deadlines does the roadmap track?", a: "NIS2 UK deadline for essential entities (1 Jul 2026), EU Cyber Resilience Act main obligations (11 Dec 2027), DORA full enforcement for financial entities (17 Jan 2027), plus ISO 42001 certification work and the EU Product Liability Directive national transposition." },
  { q: "Are the MEOK milestones promises or targets?", a: "Targets, not commitments. The only thing MEOK guarantees on this page is the date format for regulator-driven deadlines. Every MEOK milestone — including the £10K MRR by Q4 2026 figure — is an internal target. Honesty over hype." },
];

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "Roadmap", item: "https://meok.ai/roadmap" },
] };

const ARTICLE_JSONLD = { "@context": "https://schema.org", "@type": "TechArticle", headline: "MEOK Roadmap — 2026 to 2028", description: "Every regulator-driven AI compliance deadline from 2026 to 2028 (EU AI Act Article 50, NIS2, CRA, DORA, ISO 42001) plus MEOK milestones.", url: "https://meok.ai/roadmap", author: { "@type": "Organization", name: "MEOK AI Labs" }, publisher: { "@type": "Organization", name: "MEOK AI Labs" } };

const ROADMAP_FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: ROADMAP_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const QUARTERS = [
  {
    period: "Q2 2026 (April-June)",
    items: [
      { date: "Apr 12", text: "Easter launch — 28-hive mesh genesis · MEOK Charter signed · 36-node council" },
      { date: "Apr 12", text: "MEOK AI Labs (CSOAI LTD, UK 16939677) — company formalised" },
      { date: "May 17", text: "llms-full.txt live for GPTBot/ClaudeBot/PerplexityBot (39 MCP server index)" },
      { date: "Jun 10", text: "Pricing ratified (livemode, acct_1TLlEKQvIueK5Xpb)" },
      { date: "Jun 13", text: "340+ MCP packages shipped · Article 50 Kit launched · 5 SEO pages" },
      { date: "Jun 14", text: "EAT push: 4 trust pages · 5 industry hubs · 138 vercel rewrites · /humans.txt" },
    ],
  },
  {
    period: "Q3 2026 (July-September) — EU AI Act cliff",
    items: [
      { date: "Jul 1", text: "NIS2 UK deadline for essential entities (energy, transport, health, digital)" },
      { date: "Aug 2", text: "EU AI Act Article 50 cliff — new systems must comply (C2PA + watermark + fingerprint)" },
      { date: "Aug 15", text: "MEOK Art 50 Kit v2 — pre-built attestation library + Slack/Teams integrations" },
      { date: "Sep 1", text: "Council v2.0 — 72-node PBFT, cross-hive attestation bridges" },
      { date: "Sep 15", text: "DORA-NIS2 crosswalk v2 — automated EBA RTS 2023/04 mapping" },
    ],
  },
  {
    period: "Q4 2026 (October-December)",
    items: [
      { date: "Oct 12", text: "MEOK Charter v1.1 review window opens (90-day notice)" },
      { date: "Nov 1", text: "ISO 42001 certification push — 5 framework packs to CEASAI-aligned certified" },
      { date: "Dec 2", text: "EU AI Act Article 50 cliff (pre-existing generative AI systems)" },
      { date: "Dec 11", text: "EU Cyber Resilience Act main obligations cliff" },
      { date: "Dec 31", text: "2026 fleet year — published 2027 priorities" },
    ],
  },
  {
    period: "Q1 2027 (January-March)",
    items: [
      { date: "Jan 1", text: "MEOK Pricing v2 — adds Canada AIDA + Australia AI Bill + Singapore PDPA GenAI" },
      { date: "Jan 17", text: "DORA full enforcement (financial entities)" },
      { date: "Mar 1", text: "MEOK Art 50 v3 — pre-built for Stable Diffusion 3 + Flux + Sora 2" },
      { date: "Mar 31", text: "Quarterly: 491 GitHub repos · 14 Apify Actors · 39 PyPI throttled (now published)" },
    ],
  },
  {
    period: "Q4 2027 (Annex III delay)",
    items: [
      { date: "Dec 2 2027", text: "EU AI Act Annex III high-risk classification (delayed by Digital Omnibus)" },
    ],
  },
  {
    period: "Q3 2028 (Annex I delay)",
    items: [
      { date: "Aug 2 2028", text: "EU AI Act Annex I product-embedded (delayed by Digital Omnibus)" },
    ],
  },
];

const MILESTONES = [
  { metric: "340+", label: "MCP packages shipped (current)" },
  { metric: "491", label: "GitHub repos in CSOAI-ORG" },
  { metric: "186K", label: "PyPI downloads last 30 days" },
  { metric: "84.6/100", label: "Fleet average scorecard" },
  { metric: "0", label: "Active revenue (target: £10K MRR by Q4 2026)" },
  { metric: "1", label: "Founder (Nicholas Templeman)" },
];

export default function RoadmapPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ROADMAP_FAQ_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Roadmap 2026-2028</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "8px 0 16px" }}>The compliance timeline, in one place.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Every regulator-driven deadline from 2026 to 2028, plus the MEOK milestones. Honesty over hype — the only thing we've promised is the date format. Everything else is a target, not a commitment.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>MEOK state today</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
            {MILESTONES.map((m) => (
              <div key={m.label} style={{ background: "white", borderRadius: 12, padding: 16, border: `1px solid ${NAVY}1a`, textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: GOLD, lineHeight: 1, marginBottom: 6 }}>{m.metric}</div>
                <div style={{ fontSize: 11, color: `${NAVY}cc`, lineHeight: 1.3 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Quarter by quarter</h2>
          {QUARTERS.map((q) => (
            <div key={q.period} style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 900, color: GOLD, margin: "0 0 12px" }}>{q.period}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {q.items.map((it) => (
                  <li key={it.date + it.text} style={{ display: "flex", gap: 16, padding: "8px 0", borderBottom: `1px solid ${NAVY}0d`, fontSize: 14 }}>
                    <span style={{ minWidth: 80, color: `${NAVY}cc`, fontFamily: "monospace", fontSize: 12, paddingTop: 1 }}>{it.date}</span>
                    <span style={{ color: NAVY, lineHeight: 1.5 }}>{it.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {ROADMAP_FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ background: "white", borderRadius: 14, padding: 32, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Submission</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, lineHeight: 1.6, margin: 0 }}>
            Spotted something we should add? Email <a href="mailto:roadmap@meok.ai" style={{ color: NAVY, textDecoration: "underline" }}>roadmap@meok.ai</a>. The Charter (Article 52) requires a 90-day notice for any major amendment — so by 12 October 2026 we'll publish the v1.1 amendments to this roadmap.
          </p>
        </section>
      </div>
    </main>
  );
}
