import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act for SaaS Companies (2026): Provider, Deployer, or GPAI?",
  description:
    "Most SaaS shipping AI features land in 'provider' role under the EU AI Act. Article 4 literacy already binds. Article 50 watermarking 2 Aug 2026. Annex III high-risk delayed to 2 Dec 2027.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-for-saas" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "Am I a provider, deployer, or GPAI under the EU AI Act?", a: "If you SHIP an AI system or feature in your SaaS — you're a PROVIDER (Article 3(3)). If you USE someone else's AI system in your business — you're a DEPLOYER (Article 3(4)). If you train + ship a foundation/general-purpose model — you're a GPAI provider (Articles 51-55). Most B2B SaaS with AI features land squarely in PROVIDER role for their own model + DEPLOYER for any third-party model they integrate. You can be all three at once." },
  { q: "What's binding now for SaaS?", a: "Article 4 (literacy) since 2 February 2025 — your staff need a documented AI training programme. Article 5 (prohibited practices) — fully in force, no manipulative AI / social scoring / etc. GPAI obligations 51-55 — if you ship a foundation model. Article 50 (watermarking) — 2 Aug 2026 if you ship generative outputs. NIS2 (where transposed) — Germany 17 Oct 2026, depends on member state." },
  { q: "Is my SaaS Annex III high-risk?", a: "Probably not — most B2B SaaS with AI features (productivity tools, CRM AI, dev tools, design tools) is NOT Annex III high-risk. Annex III(1)-(8) covers specific use-cases: biometric ID, critical infrastructure, education, employment, essential services, law enforcement, migration/border control, justice. If your SaaS is used by customers IN those domains, you may face deployer-side obligations downstream — your customers will push them back through contract." },
  { q: "What changes with the Digital Omnibus delay?", a: "Annex III high-risk obligations now apply 2 December 2027 (was 2 August 2026). Annex I product-safety AI now 2 August 2028. Article 50 watermarking applies 2 August 2026. Article 4, Article 5, and GPAI 51-55 are already in force. For most SaaS the only thing that changed is that the high-risk classification work has 16 more months — which means you have time to GET classified properly + ship evidence on day one when obligations bite." },
  { q: "What does MEOK ship for SaaS?", a: "Free 90-second readiness scorecard at /scorecard with signed attestation. Article 50 watermark starter kit £99 if you ship generative outputs. /transparency £399/mo for instructions-for-use + decision-trace logging. /audit-prep-bundle £4,950 if you need full evidence pack for enterprise customer due-diligence. All MIT-licensed MCPs on PyPI you can self-host." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function SaaSPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>SaaS vertical · 28 April 2026</div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>EU AI Act for SaaS</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>Most SaaS = provider. Article 4 + Article 50 already biting.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          B2B SaaS shipping AI features lands squarely as a PROVIDER under the EU AI Act. Most are NOT Annex III high-risk. But Article 4 (literacy), Article 5 (prohibited practices), Article 50 (watermarking) all bite already. Enterprise customers ask for signed evidence — ship it and you win procurement; don't and you lose deals.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { title: "90-Sec Readiness Scorecard", price: "FREE", href: "/scorecard", desc: "Determines provider/deployer/GPAI role + which articles bind. Signed cert." },
            { title: "Article 50 Watermark Starter", price: "£99", href: "/article-50-kit", desc: "C2PA manifest + SynthID watermark template + deployer disclosure policy." },
            { title: "Transparency Logs", price: "£399/mo", href: "/transparency", desc: "Decision-trace logging + instructions-for-use generator + audit." },
            { title: "Audit-Prep Bundle", price: "£4,950", href: "/audit-prep-bundle", desc: "14-day delivered: enterprise procurement evidence pack." },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", marginBottom: 6 }}>{c.price}</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>SaaS compliance checklist</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>Document your role(s)</strong> — provider for own AI features, deployer for third-party AI you integrate, GPAI provider if you ship a foundation model.</li>
          <li><strong>Article 4 literacy programme</strong> — already binding. Document staff training.</li>
          <li><strong>Article 5 prohibition check</strong> — verify no banned practices (manipulation, exploitation of vulnerabilities, social scoring, etc.).</li>
          <li><strong>Annex III scoping</strong> — check if your AI features fall under Annex III(1)-(8). Most B2B SaaS does not.</li>
          <li><strong>Article 50 watermarking</strong> — if you ship generative outputs, ship C2PA + watermark by 2 Aug 2026.</li>
          <li><strong>GPAI 51-55</strong> — if you ship a foundation model, technical docs + training-data summary + copyright policy.</li>
          <li><strong>Customer-facing evidence</strong> — your enterprise customers will ask for signed compliance attestation in RFPs. Ship it.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Win EU enterprise procurement, don't lose it</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>EU enterprise buyers now require pre-built EU AI Act evidence in RFPs. Ship signed compliance attestations and you get past the gate; don't and you lose the deal.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free scorecard →</Link>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong></p>
      </div>
    </main>
  );
}
