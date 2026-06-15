import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Press Kit | Logos, screenshots, fact sheets | MEOK.AI",
  description:
    "MEOK press kit: company fact sheet, founder bio, screenshots, logos (MEOK indigo + electric cyan), citation guidelines, contact for press inquiries. MIT-licensed brand assets.",
  keywords: [
    "MEOK press kit",
    "MEOK logo",
    "MEOK brand assets",
    "MEOK founder",
    "MEOK media",
    "MEOK company facts",
  ],
  alternates: { canonical: "https://meok.ai/press-kit" },
};

const NAVY = "#1a1a2e"; const GOLD = "#c9a84c"; const BG = "#f5f0e8";

const FACT_SHEET = [
  { label: "Company", value: "MEOK AI Labs (trading name of CSOAI LTD, UK Companies House 16939677)" },
  { label: "Founded", value: "Easter Sunday 2026 (12 April 2026)" },
  { label: "Founder", value: "Nicholas Templeman, Yorkshire, UK (solo founder)" },
  { label: "Headquarters", value: "Yorkshire, United Kingdom" },
  { label: "Sector", value: "AI compliance infrastructure / open-source MCP servers" },
  { label: "Fleet size", value: "340+ open-source MCP packages · 491 GitHub repos" },
  { label: "Standards adopted", value: "MCP · CycloneDX · SPDX · SLSA · C2PA · Sigstore · ISO 42001 · ISO 19650" },
  { label: "Regulator coverage", value: "EU AI Act (Reg 2024/1689) · DORA (Reg 2022/2554) · NIS2 (Dir 2022/2555) · GDPR · UK AI Bill" },
  { label: "Pricing (compliance tier)", value: "Sovereign £29/mo · Pro £199/mo · Enterprise £1,499/mo" },
  { label: "Pricing (consumer tier)", value: "Explorer free · Sovereign £9/mo · Pro £19/mo · Family £29/mo" },
  { label: "License", value: "MIT (software) · MIT (content)" },
  { label: "Active subscriptions", value: "0 (launched 12 April 2026)" },
];

const COLORS = [
  { name: "MEOK Navy", hex: "#1a1a2e", usage: "Primary text, dark surfaces, anchor color" },
  { name: "MEOK Gold", hex: "#c9a84c", usage: "CTA buttons, accent text, premium tier" },
  { name: "MEOK Cream", hex: "#f5f0e8", usage: "Page background, soft surfaces" },
  { name: "MEOK Electric Cyan", hex: "#00d4ff", usage: "Hover states, link underline, AEO" },
];

const CONTACT = [
  { label: "Press inquiries", value: "press@meok.ai" },
  { label: "Founder direct", value: "nicholas@meok.ai" },
  { label: "Security disclosures", value: "security@meok.ai" },
  { label: "Telegram (founder)", value: "@meok_ai_bot" },
  { label: "GitHub org", value: "https://github.com/CSOAI-ORG" },
];

const CITATION = `Cite as: '<concept>, MEOK AI Labs (https://meok.ai)'. We do not charge for citation and do not require attribution beyond this format. For press, link to the most-specific page on meok.ai (e.g. /attestations for the Ed25519 / HMAC + compliance evidence, /charter for governance, /publickey for cryptographic verification).`;

const FAQ = [
  { q: "How should I cite or attribute MEOK?", a: CITATION },
  { q: "Can I use the MEOK logo and brand colors?", a: "Yes. All MEOK brand assets are MIT-licensed. High-resolution SVG and PNG logos are at github.com/CSOAI-ORG/meok-brand. The palette is MEOK Navy (#1a1a2e), MEOK Gold (#c9a84c), MEOK Cream (#f5f0e8), and MEOK Electric Cyan (#00d4ff)." },
  { q: "Who is the founder and how do I request an interview?", a: "Nicholas Templeman is the solo founder, based in Yorkshire, UK. He is available for podcast, panel, and written interviews and answers within 48 hours. No PR agency, no gatekeeping, no fee. Email nicholas@meok.ai." },
  { q: "What is MEOK AI Labs?", a: "MEOK AI Labs (trading name of CSOAI LTD, UK Companies House 16939677) is an AI compliance infrastructure company building open-source MCP servers covering the EU AI Act, DORA, NIS2, GDPR, and the UK AI Bill. It was founded on Easter Sunday, 12 April 2026." },
];

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEOK AI",
  alternateName: "MEOK AI Labs",
  url: "https://meok.ai",
  logo: "https://meok.ai/logo.png",
  description: "AI compliance infrastructure and open-source MCP servers covering the EU AI Act, DORA, NIS2, GDPR, and the UK AI Bill.",
  email: "press@meok.ai",
  foundingDate: "2026-04-12",
  founder: { "@type": "Person", name: "Nicholas Templeman" },
  address: { "@type": "PostalAddress", addressRegion: "Yorkshire", addressCountry: "GB" },
  sameAs: ["https://github.com/CSOAI-ORG", "https://csoai.org"],
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Press Kit", item: "https://meok.ai/press-kit" },
  ],
};

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function PressKitPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Press Kit</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>Press kit, fact sheet, and brand assets.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Everything you need to write about MEOK: company fact sheet, founder bio, screenshots, logo, citation guidelines, and contact for press inquiries. All assets MIT-licensed.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Company fact sheet</h2>
          <dl style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a`, display: "grid", gridTemplateColumns: "180px 1fr", gap: "12px 24px", fontSize: 14 }}>
            {FACT_SHEET.map((f) => (
              <div key={f.label} style={{ display: "contents" }}>
                <dt style={{ fontWeight: 900, color: NAVY }}>{f.label}</dt>
                <dd style={{ margin: 0, color: `${NAVY}cc`, lineHeight: 1.5 }}>{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Brand colors</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {COLORS.map((c) => (
              <div key={c.name} style={{ background: "white", borderRadius: 12, padding: 0, border: `1px solid ${NAVY}1a`, overflow: "hidden" }}>
                <div style={{ background: c.hex, height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: c.name === "MEOK Cream" ? NAVY : "white", fontFamily: "monospace", fontSize: 14, fontWeight: 700 }}>{c.hex}</div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 900, margin: "0 0 4px" }}>{c.name}</h3>
                  <p style={{ fontSize: 12, color: `${NAVY}cc`, margin: 0 }}>{c.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Logo</h2>
          <div style={{ background: "white", borderRadius: 14, padding: 32, border: `1px solid ${NAVY}1a`, display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontWeight: 900, fontSize: 28, fontFamily: "serif" }}>M</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: NAVY }}>MEOK</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, background: "white", border: `2px solid ${NAVY}`, display: "flex", alignItems: "center", justifyContent: "center", color: NAVY, fontWeight: 900, fontSize: 28, fontFamily: "serif" }}>M</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: NAVY }}>MEOK</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: `${NAVY}cc`, marginTop: 12, textAlign: "center" }}>
            High-res SVG and PNG logos are at <a href="https://github.com/CSOAI-ORG/meok-brand" style={{ color: NAVY, textDecoration: "underline" }}>github.com/CSOAI-ORG/meok-brand</a>
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Citation policy</h2>
          <div style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a` }}>
            <p style={{ fontSize: 14, color: `${NAVY}cc`, lineHeight: 1.6, margin: 0 }}>{CITATION}</p>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Press contact</h2>
          <dl style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a`, display: "grid", gridTemplateColumns: "180px 1fr", gap: "12px 24px", fontSize: 14 }}>
            {CONTACT.map((c) => (
              <div key={c.label} style={{ display: "contents" }}>
                <dt style={{ fontWeight: 900, color: NAVY }}>{c.label}</dt>
                <dd style={{ margin: 0, color: `${NAVY}cc`, lineHeight: 1.5 }}>{c.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ background: NAVY, color: "white", borderRadius: 14, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Want an interview?</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
            Nicholas is available for podcast, panel, and written interviews. He answers within 48 hours. No PR agency, no gatekeeping, no fee.
          </p>
          <a href="mailto:nicholas@meok.ai?subject=Interview%20request" style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            nicholas@meok.ai →
          </a>
        </section>
      </div>
    </main>
  );
}
