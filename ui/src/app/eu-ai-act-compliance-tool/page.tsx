import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EU AI Act Compliance Tool — Free + £199/mo Pro | MEOK AI Labs",
  description:
    "The open-source EU AI Act compliance tool: classify AI-system risk, check Article 50 transparency & GPAI obligations, generate Annex IV evidence, and emit auditor-verifiable signed attestations. Free to install. Article 50 enforceable 2 Aug 2026.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-compliance-tool" },
  keywords: ["EU AI Act compliance tool","EU AI Act software","Article 50 compliance","AI Act risk classification","GPAI compliance","Annex IV","AI compliance checker","EU AI Act MCP"],
  openGraph: {
    title: "EU AI Act Compliance Tool — Free + Pro",
    description: "Classify risk, check Article 50/GPAI, generate Annex IV evidence, emit signed attestations. Free to install. Deadline 2 Aug 2026.",
    type: "website", url: "https://meok.ai/eu-ai-act-compliance-tool",
  },
};

const NAVY = "#1a1a2e"; const GOLD = "#c9a84c"; const BG = "#f5f0e8";
const STRIPE_PRO = "https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j?prefilled_promo_code=LAUNCH50&utm_source=seo&utm_campaign=compliance_tool";
const AUDIT = "https://meok.ai/audit-prep-bundle";
const READINESS = "https://csoai-readiness-o8qtxthmo-niks-projects-0a2ef942.vercel.app";

const FAQ = [
  { q: "What is the EU AI Act compliance tool?", a: "An open-source MCP server (eu-ai-act-compliance-mcp) that runs inside Claude, Cursor, or any MCP client. It classifies your AI system's risk tier, checks Article 50 transparency and GPAI obligations across all 410 articles, generates Annex IV technical-documentation evidence, and emits HMAC + Ed25519-signed attestations an auditor can verify." },
  { q: "When does EU AI Act Article 50 apply?", a: "Article 50 transparency and AI-content marking obligations are enforceable from 2 August 2026. Non-compliance carries fines up to €15M or 3% of global turnover (Article 99(4))." },
  { q: "Is it free?", a: "Yes — the core tool is MIT-licensed and free: pip install eu-ai-act-compliance-mcp (10 checks/day). Pro (£199/mo) unlocks unlimited checks plus auditor-verifiable signed attestations. A £4,950 2-day audit-prep engagement gets you fully audit-ready." },
  { q: "Does it cover DORA, NIS2, CRA and GDPR too?", a: "Yes. MEOK AI Labs ships a 290-server compliance suite covering EU AI Act, DORA, NIS2, CRA, GDPR, ISO 42001, SOC 2 and HIPAA — all on PyPI and the official MCP Registry." },
];

export default function Page() {
  const ld = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "SoftwareApplication", name: "EU AI Act Compliance Tool (eu-ai-act-compliance-mcp)", applicationCategory: "BusinessApplication", operatingSystem: "Any (Python/MCP)", offers: [{ "@type": "Offer", price: "0", priceCurrency: "GBP", name: "Free" }, { "@type": "Offer", price: "79", priceCurrency: "GBP", name: "Pro / month" }], description: "Open-source EU AI Act compliance tool: risk classification, Article 50 & GPAI checks, Annex IV evidence, signed attestations.", publisher: { "@type": "Organization", name: "MEOK AI Labs (CSOAI LTD)" } },
      { "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "inline-block", marginBottom: 16, padding: "5px 14px", borderRadius: 999, background: "rgba(220,38,38,0.10)", border: "1px solid rgba(220,38,38,0.35)", color: "#dc2626", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>⏰ Article 50 enforceable 2 Aug 2026</div>
        <h1 style={{ fontSize: "2.7rem", fontWeight: 900, lineHeight: 1.05, marginBottom: 14 }}>EU AI Act <span style={{ color: GOLD }}>Compliance Tool</span></h1>
        <p style={{ fontSize: "1.2rem", color: `${NAVY}aa`, marginBottom: 28, lineHeight: 1.5 }}>
          Classify your AI system's risk, check Article 50 transparency &amp; GPAI obligations across all 410 articles, generate Annex IV evidence, and emit <strong>auditor-verifiable signed attestations</strong> — from inside Claude, Cursor, or any MCP client. Free to install.
        </p>
        <div style={{ background: NAVY, color: "#fff", borderRadius: 12, padding: "16px 20px", marginBottom: 28, fontFamily: "monospace", fontSize: 15 }}>$ pip install eu-ai-act-compliance-mcp</div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14, marginBottom: 36 }}>
          {[
            { t: "Free", p: "£0", d: "10 checks/day · all 410 articles · risk classification · MIT", cta: "Run free readiness check →", href: READINESS, primary: false },
            { t: "Pro", p: "£39.50/mo", d: "Launch offer — 50% off first 6 months (then £199/mo). Unlimited checks + auditor-verifiable signed attestations + verify URLs", cta: "Subscribe — 50% off 6mo →", href: STRIPE_PRO, primary: true },
            { t: "Audit-Prep", p: "£4,950", d: "2-day engagement: gap analysis, watermarking wired in, signed evidence pack", cta: "Get audit-ready →", href: AUDIT, primary: false },
          ].map(c => (
            <div key={c.t} style={{ background: "#fff", border: `1px solid ${c.primary ? GOLD : NAVY + "1a"}`, borderRadius: 16, padding: 22, boxShadow: c.primary ? "0 8px 30px rgba(201,168,76,0.18)" : "none" }}>
              <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", color: GOLD, marginBottom: 6 }}>{c.t}</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 6 }}>{c.p}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, marginBottom: 16, lineHeight: 1.5, minHeight: 60 }}>{c.d}</div>
              <a href={c.href} style={{ display: "block", textAlign: "center", background: c.primary ? GOLD : "transparent", color: c.primary ? NAVY : NAVY, border: c.primary ? "none" : `1px solid ${NAVY}33`, fontWeight: 800, fontSize: 14, padding: "11px", borderRadius: 10, textDecoration: "none" }}>{c.cta}</a>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>FAQ</h2>
        {FAQ.map(f => (
          <div key={f.q} style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{f.q}</div>
            <div style={{ color: `${NAVY}aa`, fontSize: 15, lineHeight: 1.55 }}>{f.a}</div>
          </div>
        ))}
        <p style={{ fontSize: 12, color: `${NAVY}66`, marginTop: 32, lineHeight: 1.6 }}>MEOK AI Labs (trading name of CSOAI LTD · UK Companies House 16939677). MIT-licensed source · on the official MCP Registry &amp; PyPI · not legal advice.</p>
      </div>
    </main>
  );
}
