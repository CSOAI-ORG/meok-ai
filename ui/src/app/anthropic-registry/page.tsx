import type { Metadata } from "next";
import Link from "next/link";
import { MCPS, CATEGORIES, type RegistryMCP } from "./data";

// ---------------------------------------------------------------------------
// /anthropic-registry — public announcement page
//
// 47 MEOK / CSOAI-ORG MCPs published to the official Anthropic MCP Registry.
// Used as link-bait for HN comments + Twitter + Discord; primary SEO target
// is "anthropic mcp registry" + "compliance mcp servers" long-tail.
// ---------------------------------------------------------------------------

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

export const metadata: Metadata = {
  title: `${MCPS.length}+ MEOK compliance MCPs in the Anthropic Registry`,
  description: `${MCPS.length} MIT-licensed compliance MCP servers from MEOK AI Labs — EU AI Act, DORA, NIS2, CRA, A2A patterns, and more — all live in the official Anthropic Registry. Install via uvx or pip.`,
  alternates: { canonical: "https://meok.ai/anthropic-registry" },
  openGraph: {
    title: `${MCPS.length} MEOK compliance MCPs in the Anthropic Registry`,
    description: "47 MIT-licensed MCP servers covering EU AI Act, DORA, NIS2, CRA, A2A patterns. By MEOK AI Labs.",
    type: "website",
    url: "https://meok.ai/anthropic-registry",
    siteName: "MEOK.AI",
    images: [{
      url: `https://meok.ai/api/og?title=${MCPS.length}+MEOK+MCPs+in+the+Anthropic+Registry&desc=EU+AI+Act+%C2%B7+DORA+%C2%B7+NIS2+%C2%B7+CRA+%C2%B7+A2A+%E2%80%94+MIT+licensed`,
      width: 1200,
      height: 630,
      alt: `${MCPS.length} MEOK MCPs in the Anthropic Registry`,
    }],
  },
  twitter: { card: "summary_large_image" },
};

// Schema.org ItemList JSON-LD for crawler indexing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": `${MCPS.length}+ MEOK compliance MCPs in the Anthropic Registry`,
  "description": "MIT-licensed compliance MCP servers from MEOK AI Labs (CSOAI LTD, UK Companies House 16939677).",
  "url": "https://meok.ai/anthropic-registry",
  "numberOfItems": MCPS.length,
  "itemListElement": MCPS.map((m, i) => ({
    "@type": "SoftwareApplication",
    "position": i + 1,
    "name": m.title,
    "description": m.description,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Linux, macOS, Windows",
    "softwareVersion": m.version,
    "url": `https://github.com/CSOAI-ORG/${m.slug}`,
    "downloadUrl": `https://pypi.org/project/${m.slug}/`,
    "license": "https://opensource.org/licenses/MIT",
    "offers": [
      { "@type": "Offer", "price": "0", "priceCurrency": "GBP", "name": "Self-host (MIT)" },
      { "@type": "Offer", "price": "29", "priceCurrency": "GBP", "name": "Starter (HMAC-signed attestations)" },
      { "@type": "Offer", "price": "79", "priceCurrency": "GBP", "name": "Pro (24h SLA + custom signing)" },
    ],
  })),
};

function MCPRow({ m }: { m: RegistryMCP }) {
  return (
    <div
      style={{
        padding: "1.2rem 1.4rem",
        background: "#fff",
        borderRadius: 12,
        border: `1px solid ${NAVY}1a`,
        marginBottom: 12,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 800, margin: 0 }}>{m.title}</h3>
        <div style={{ fontSize: ".75rem", color: `${NAVY}99`, fontFamily: "monospace" }}>v{m.version}</div>
      </div>
      <p style={{ fontSize: ".88rem", color: `${NAVY}cc`, lineHeight: 1.45, margin: "0 0 12px" }}>{m.description}</p>
      <pre
        style={{
          background: NAVY,
          color: BG,
          padding: ".5rem .75rem",
          borderRadius: 6,
          fontFamily: "ui-monospace,Menlo,monospace",
          fontSize: ".78rem",
          margin: "0 0 10px",
          overflowX: "auto",
        }}
      >{`uvx ${m.slug}`}</pre>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", fontSize: ".78rem", fontWeight: 700 }}>
        <a
          href={`https://github.com/CSOAI-ORG/${m.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: NAVY, textDecoration: "none", padding: ".3rem .6rem", border: `1px solid ${NAVY}33`, borderRadius: 6 }}
        >
          GitHub →
        </a>
        <a
          href={`https://pypi.org/project/${m.slug}/`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: NAVY, textDecoration: "none", padding: ".3rem .6rem", border: `1px solid ${NAVY}33`, borderRadius: 6 }}
        >
          PyPI →
        </a>
        <a
          href={`https://registry.modelcontextprotocol.io/v0.1/servers?search=${m.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: NAVY, textDecoration: "none", padding: ".3rem .6rem", border: `1px solid ${NAVY}33`, borderRadius: 6 }}
        >
          Verify in Registry →
        </a>
        <Link
          href={`/mcp/${m.slug.replace("-mcp", "")}`}
          style={{ background: GOLD, color: NAVY, textDecoration: "none", padding: ".3rem .6rem", borderRadius: 6 }}
        >
          Buy Starter £29 →
        </Link>
      </div>
    </div>
  );
}

export default function AnthropicRegistryPage() {
  const byCategory = CATEGORIES.map((c) => ({
    ...c,
    items: MCPS.filter((m) => m.category === c.id),
  })).filter((c) => c.items.length > 0);

  const shareText = `${MCPS.length} compliance MCPs from @meok_ai now in the Anthropic Registry — EU AI Act, DORA, NIS2, CRA, A2A patterns, all MIT-licensed:`;
  const shareUrl = "https://meok.ai/anthropic-registry";

  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        {/* Hero */}
        <div
          style={{
            padding: "2.2rem 2rem",
            background: NAVY,
            color: "#fff",
            borderRadius: 18,
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "inline-block", padding: "4px 12px", background: "rgba(201,168,76,0.18)", color: GOLD, borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            Published 2026-05-21 · 14 new MCPs today
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
            <span style={{ color: GOLD }}>{MCPS.length}</span> MEOK compliance MCPs
            <br />
            live in the Anthropic Registry.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.55, marginBottom: 22, maxWidth: 680 }}>
            EU AI Act · DORA · NIS2 · CRA · UK AI Bill · MITRE ATT&CK · SBOM · A2A patterns ·
            Care membrane · 12 governance MCPs · 12 agent-to-agent MCPs · MIT-licensed,
            self-hostable via <code style={{ background: "rgba(0,0,0,0.4)", padding: "2px 6px", borderRadius: 4 }}>uvx</code> in 10 seconds.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/catalogue"
              style={{ padding: "12px 22px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              See full catalogue →
            </Link>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&via=meok_ai`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px 22px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Share on Twitter →
            </a>
            <a
              href="https://github.com/CSOAI-ORG"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px 22px", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", fontWeight: 700, borderRadius: 12, fontSize: 14 }}
            >
              github.com/CSOAI-ORG
            </a>
          </div>
        </div>

        {/* Trust band */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28, padding: "1rem 1.2rem", background: "#fff", borderRadius: 12, fontSize: 13, color: `${NAVY}99` }}>
          <div><strong style={{ color: NAVY }}>{MCPS.length}</strong> MCPs in Anthropic Registry</div>
          <div>·</div>
          <div><strong style={{ color: NAVY }}>247</strong> packages on PyPI</div>
          <div>·</div>
          <div><strong style={{ color: NAVY }}>MIT</strong> licensed</div>
          <div>·</div>
          <div><strong style={{ color: NAVY }}>HMAC-signed</strong> attestations</div>
          <div>·</div>
          <div>CSOAI LTD · Companies House <strong style={{ color: NAVY }}>16939677</strong></div>
        </div>

        {/* By category */}
        {byCategory.map((cat) => (
          <section key={cat.id} style={{ marginBottom: "2.4rem" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 900, letterSpacing: "-0.015em", marginBottom: 4 }}>
              {cat.label} <span style={{ color: `${NAVY}66`, fontSize: "1rem", fontWeight: 600 }}>· {cat.items.length}</span>
            </h2>
            <p style={{ fontSize: ".95rem", color: `${NAVY}99`, marginBottom: 14, lineHeight: 1.5 }}>{cat.description}</p>
            {cat.items.map((m) => (
              <MCPRow key={m.slug} m={m} />
            ))}
          </section>
        ))}

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "2rem",
            padding: "2rem",
            background: NAVY,
            color: "#fff",
            borderRadius: 16,
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Ship signed compliance evidence in 14 days
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 20, maxWidth: 560, margin: "0 auto 20px", fontSize: 14, lineHeight: 1.55 }}>
            Self-host MIT for free. £29/mo Starter adds HMAC-signed attestations.
            £79/mo Pro adds 24h SLA. £1,499/mo Enterprise adds SLA + multi-BU
            separation + reseller white-label.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/pricing"
              style={{ padding: "12px 22px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              See pricing →
            </Link>
            <Link
              href="/fine-calculator"
              style={{ padding: "12px 22px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              EU AI Act fine calculator →
            </Link>
            <Link
              href="/audit-prep-bundle"
              style={{ padding: "12px 22px", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", fontWeight: 700, borderRadius: 12, fontSize: 14 }}
            >
              £4,950 audit-prep bundle →
            </Link>
          </div>
        </div>

        <p style={{ marginTop: "2rem", color: `${NAVY}66`, fontSize: 12, textAlign: "center" }}>
          Built solo in Lincolnshire, UK · CSOAI LTD trading as MEOK AI Labs · UK Companies House 16939677 ·
          Apache 2.0 / MIT · hello@meok.ai
        </p>
      </div>
    </main>
  );
}
