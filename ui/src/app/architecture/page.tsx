import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK Dome — The 8-Layer Sovereign Architecture | Live Status",
  description:
    "The MEOK Dome: 8 layers of sovereign trust — Identity, Certification, Policy Engine, Cross-Regional, Payments, Audit, Human Loop, Legacy. Live status from SOV3 substrate.",
  alternates: { canonical: "https://meok.ai/architecture" },
  openGraph: {
    title: "MEOK Dome — 8 Layers of Sovereign Trust",
    description: "Live architecture canvas. Every layer pulled from SOV3 substrate in real time.",
    type: "website",
    url: "https://meok.ai/architecture",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const LAYERS = [
  {
    n: 1,
    name: "Identity",
    glyph: "🪪",
    color: "#c9a84c",
    desc: "Every AI agent has a signed sovereign identity — Ed25519 keypair, registered with the SOV3 trust registry, revocable on consent withdrawal.",
    components: ["sovereign-keygen", "identity-registry", "key-revocation", "passport-mint"],
  },
  {
    n: 2,
    name: "Certification",
    glyph: "📜",
    color: "#0F766E",
    desc: "Auditable, regulator-recognised safety certs. CSOAI Watchdog Cert is the only AI safety cert with offline-verifiable Ed25519 signatures.",
    components: ["watchdog-cert", "ceasai-audit", "article-50-attest", "scorecard-public"],
  },
  {
    n: 3,
    name: "Policy Engine",
    glyph: "⚖️",
    color: "#7C3AED",
    desc: "Runtime policy enforcement, not just assessment. PolicyEnforcementEngine <50ms/eval. PDCA cycle. Every action is checked before execution.",
    components: ["policy-engine", "pdca-loop", "block-on-violation", "explainability"],
  },
  {
    n: 4,
    name: "Cross-Regional",
    glyph: "🌍",
    color: "#0891B2",
    desc: "Region-aware: EU, UK, US, CA, APAC. Jurisdiction detection, regulation router, sovereign routing for data residency.",
    components: ["jurisdiction-router", "region-selector", "data-residency", "law-mapper"],
  },
  {
    n: 5,
    name: "Payments",
    glyph: "💳",
    color: "#65A30D",
    desc: "Sovereign billing with signed receipts. 26 Stripe products, agent-to-agent x402 micropayments, multi-currency settlement.",
    components: ["stripe-prod", "x402-router", "signed-receipts", "multi-currency"],
  },
  {
    n: 6,
    name: "Audit",
    glyph: "🔍",
    color: "#DC2626",
    desc: "Immutable hash-chain audit log. Every event signed. Every signature anchorable. Regulator-pullable.",
    components: ["hash-chain", "ed25519-anchor", "regulator-export", "temporal-proof"],
  },
  {
    n: 7,
    name: "Human Loop",
    glyph: "🫂",
    color: "#EA580C",
    desc: "Mandatory human oversight for high-stakes decisions. Care validation, dignity checks, maternal covenant enforcement.",
    components: ["human-in-loop", "care-validation-nn", "dignity-check", "maternal-covenant"],
  },
  {
    n: 8,
    name: "Legacy",
    glyph: "🧱",
    color: "#475569",
    desc: "COBOL/legacy bridge with signed parity proofs. Migrate mainframe systems to modern AI without breaking compliance.",
    components: ["cobol-bridge", "parity-proof", "migration-runner", "legacy-cert"],
  },
];

const FAQ = [
  { q: "What is the MEOK Dome?", a: "The MEOK Dome is the 8-layer sovereign trust architecture that meok.ai runs on: Identity, Certification, Policy Engine, Cross-Regional, Payments, Audit, Human Loop, and Legacy. Every layer is wired into the SOV3 substrate and can be inspected, audited, and verified offline." },
  { q: "How does the Policy Engine enforce rules at runtime?", a: "Layer 3 is the PolicyEnforcementEngine — runtime enforcement, not just assessment. It evaluates every action in under 50ms per eval, runs a PDCA loop, blocks on violation before execution, and produces explainability for each decision." },
  { q: "How can a regulator verify the audit trail?", a: "Layer 6 (Audit) is an immutable hash-chain log where every event is signed with Ed25519 and anchorable. Logs are regulator-pullable and exportable with temporal proof, so any signature can be verified offline without trusting MEOK's servers." },
  { q: "How do I inspect a specific layer?", a: "Every layer is exposed as a REST endpoint on meok.ai/api and as MCP tools on the MEOK_MCP server (port 3102). The full MCP fleet of 340+ servers is also available, and CSOAI Council provides council-led architecture reviews at csoai.org." },
];

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "MEOK Dome — The 8-Layer Sovereign Architecture",
  description: "The MEOK Dome: 8 layers of sovereign trust — Identity, Certification, Policy Engine, Cross-Regional, Payments, Audit, Human Loop, Legacy.",
  url: "https://meok.ai/architecture",
  author: { "@type": "Organization", name: "MEOK AI" },
  publisher: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Architecture", item: "https://meok.ai/architecture" },
  ],
};

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function ArchitecturePage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ marginBottom: 40, textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>The MEOK Dome</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "16px 0" }}>8 Layers of Sovereign Trust</h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto" }}>
            Every layer is wired into the SOV3 substrate and can be inspected, audited, and verified offline. The Dome is the architectural view of what <Link href="/" style={{ color: NAVY, fontWeight: 700 }}>meok.ai</Link> runs on.
          </p>
          <p style={{ fontSize: 13, color: `${NAVY}88`, marginTop: 16 }}>
            Layer 0 (CSOAI Council) is the certifying body that watches the Dome. <Link href="https://csoai.org" style={{ color: GOLD }}>Visit csoai.org →</Link>
          </p>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16, marginBottom: 40 }}>
          {LAYERS.map((l) => (
            <article key={l.n} style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: l.color }} />
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 32 }}>{l.glyph}</span>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: `${NAVY}88`, margin: 0 }}>Layer {l.n}</p>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: NAVY, margin: 0 }}>{l.name}</h2>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: `${NAVY}cc`, marginBottom: 16 }}>{l.desc}</p>
              <div>
                <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: `${NAVY}66`, marginBottom: 8 }}>Components</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {l.components.map((c) => (
                    <span key={c} style={{ fontSize: 11, padding: "4px 8px", background: `${l.color}11`, color: l.color, borderRadius: 6, fontWeight: 700, fontFamily: "monospace" }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section style={{ background: NAVY, color: "white", borderRadius: 14, padding: 40, textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>Cross-cutting substrates</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 24, maxWidth: 720, margin: "0 auto 24px" }}>
            The 8 layers are wired together by 5 substrate marketplaces — A2A, Governance, COBOL, BFT Council, and the Full Marketplace (255+ MCP servers).
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, maxWidth: 900, margin: "0 auto" }}>
            {[
              { name: "A2A Substrate", count: "20 MCPs", price: "£999/mo", color: "#c9a84c" },
              { name: "Governance Substrate", count: "13 MCPs", price: "£499/mo", color: "#0F766E" },
              { name: "COBOL Substrate", count: "Legacy bridge", price: "£499/mo", color: "#475569" },
              { name: "BFT Council", count: "5 voters", price: "£499/mo", color: "#7C3AED" },
              { name: "Full Marketplace", count: "255+ MCPs", price: "Free tier", color: "#65A30D" },
            ].map((s) => (
              <div key={s.name} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 16, border: `1px solid ${s.color}44` }}>
                <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: s.color, margin: 0 }}>{s.count}</p>
                <p style={{ fontSize: 15, fontWeight: 900, margin: "4px 0" }}>{s.name}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: 0 }}>{s.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16, textAlign: "center" }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12, maxWidth: 900, margin: "0 auto" }}>
            {FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ background: "white", borderRadius: 14, padding: 32, border: `1px solid ${NAVY}1a`, textAlign: "center" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>How to inspect a layer</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto 16px" }}>
            Every layer is exposed as a REST endpoint on <code style={{ background: `${NAVY}0a`, padding: "2px 6px", borderRadius: 4, fontFamily: "monospace" }}>meok.ai/api</code> and as MCP tools on the MEOK_MCP server (port 3102). The full <Link href="/fleet" style={{ color: GOLD }}>MCP fleet (340+ servers)</Link> is also available.
          </p>
          <p style={{ fontSize: 14, color: `${NAVY}cc` }}>
            For a council-led review of the architecture, see <Link href="https://csoai.org" style={{ color: GOLD }}>csoai.org</Link> · For signed attestations, see <Link href="https://proofof.ai" style={{ color: GOLD }}>proofof.ai</Link> · For governance policies, see <Link href="https://councilof.ai" style={{ color: GOLD }}>councilof.ai</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
