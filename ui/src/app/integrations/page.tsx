import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations · Claude Code, Cursor, Cline, Windsurf · MEOK MCPs",
  description:
    "Drop MEOK compliance MCPs into Claude Code, Cursor, Cline, Windsurf, Apify, Smithery, Glama, MCPize. One config block, 8 servers. EU AI Act / DORA / NIS2 / CRA in any agent stack.",
  alternates: { canonical: "https://meok.ai/integrations" },
  openGraph: {
    title: "MEOK Integrations — every major MCP-aware agent stack",
    description: "Claude Code · Cursor · Cline · Windsurf · Apify · Smithery · Glama. 8 MCPs, one config.",
    type: "website",
    url: "https://meok.ai/integrations",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const HOSTS: {
  name: string;
  blurb: string;
  configFile: string;
  status: "live" | "ready" | "soon";
  example: string;
  href?: string;
}[] = [
  {
    name: "Claude Code",
    blurb: "Anthropic's official CLI. All 8 MEOK MCPs publish to the official MCP Registry that Claude Code reads natively.",
    configFile: "~/.claude.json",
    status: "live",
    example: `{
  "mcpServers": {
    "meok-watermark": {
      "command": "uvx",
      "args": ["meok-watermark-attest-mcp"]
    },
    "meok-omnibus": {
      "command": "uvx",
      "args": ["meok-omnibus-tracker-mcp"]
    }
  }
}`,
    href: "https://docs.claude.com/en/docs/claude-code/mcp",
  },
  {
    name: "Cursor",
    blurb: "Cursor's MCP support reads ~/.cursor/mcp.json. Same uvx command pattern.",
    configFile: ".cursor/mcp.json or ~/.cursor/mcp.json",
    status: "live",
    example: `{
  "mcpServers": {
    "meok-eu-ai-act": {
      "command": "uvx",
      "args": ["meok-governance-engine-mcp"]
    }
  }
}`,
    href: "https://docs.cursor.com/context/model-context-protocol",
  },
  {
    name: "Cline (VS Code)",
    blurb: "Cline reads cline_mcp_settings.json. Settings → Open MCP Settings.",
    configFile: "cline_mcp_settings.json",
    status: "live",
    example: `{
  "mcpServers": {
    "meok-bias-detection": {
      "command": "uvx",
      "args": ["meok-mcp-injection-scan-mcp"],
      "env": {}
    }
  }
}`,
    href: "https://docs.cline.bot/mcp/configuring-mcp-servers",
  },
  {
    name: "Windsurf",
    blurb: "Windsurf MCP config is the same uvx-based pattern; settings panel exposes a JSON editor.",
    configFile: "~/.codeium/windsurf/mcp_config.json",
    status: "live",
    example: `{
  "mcpServers": {
    "meok-nis2": {
      "command": "uvx",
      "args": ["meok-nis2-de-register-mcp"]
    }
  }
}`,
    href: "https://docs.codeium.com/windsurf/cascade/mcp",
  },
  {
    name: "Apify",
    blurb: "Apify Actor wrappers in progress. Pay-per-event pricing for compliance scans (~£0.50/cert).",
    configFile: "Apify Console → Actor",
    status: "soon",
    example: `# Coming Q3 2026 — Apify Actor wraps:
#   meok-watermark-attest-mcp → £0.50 per signed cert
#   meok-omnibus-tracker-mcp → £0.10 per deadline lookup`,
    href: "https://apify.com/store",
  },
  {
    name: "Smithery",
    blurb: "Smithery indexes MCPs and provides a hosted runtime with /sse + WebSocket bridge. MEOK servers are submission-pending.",
    configFile: "smithery.ai/server",
    status: "ready",
    example: `# After Smithery listing accepted:
npx -y @smithery/cli install meok-watermark-attest-mcp --client claude
# or
smithery run @csoai-org/meok-omnibus-tracker-mcp`,
    href: "https://smithery.ai",
  },
  {
    name: "Glama",
    blurb: "Glama auto-crawls public GitHub repos. Several MEOK MCPs already indexed; submission flow accelerates the rest.",
    configFile: "glama.ai/mcp/servers",
    status: "ready",
    example: `# Glama configures via web UI — paste GitHub URL of MCP repo
# https://github.com/CSOAI-ORG/meok-watermark-attest-mcp`,
    href: "https://glama.ai/mcp/servers",
  },
  {
    name: "PulseMCP",
    blurb: "PulseMCP daily-ingests the official MCP Registry. All 8 MEOK servers will appear automatically within 7 days of registry publish (already published).",
    configFile: "auto-ingest",
    status: "live",
    example: `# Already auto-discovered via MCP Registry. Browse:
# https://www.pulsemcp.com/servers?search=meok`,
    href: "https://www.pulsemcp.com",
  },
  {
    name: "MCPize",
    blurb: "MCPize handles hosted MCPs with built-in Stripe billing (85% creator share). Best monetization rail per industry data.",
    configFile: "mcpize.com/dashboard",
    status: "ready",
    example: `# Submit each MCP via mcpize.com — set price, Stripe payouts handled
# £79/mo for typical compliance MCP, 6% conversion benchmark`,
    href: "https://mcpize.com",
  },
  {
    name: "Anthropic Plugin Directory",
    blurb: "Claude Code official plugin directory at anthropics/claude-plugins-official. PR pending for `meok-compliance-pack` bundling all 8 MCPs.",
    configFile: "github.com/anthropics/claude-plugins-official/external_plugins/",
    status: "soon",
    example: `# After PR merged:
/plugin install meok/compliance-pack
# brings all 8 MCPs + /compliance-attest slash command`,
    href: "https://github.com/anthropics/claude-plugins-official",
  },
];

const FAQ = [
  {
    q: "Do I need an API key to use MEOK MCPs?",
    a: "No. All 8 MEOK MCPs run locally via uvx or pip and don't require any MEOK key for the free tier. The signed-attestation calls go to meok-attestation-api.vercel.app/sign with email-only auth (free) or Pro API key (£79/mo for custom verify domain).",
  },
  {
    q: "Do MEOK MCPs work offline?",
    a: "Mostly yes. The MCPs themselves run locally and don't require network for crosswalks, classification, or template generation. Only the optional attestation-signing call hits meok-attestation-api. Air-gapped customers can self-host the attestation API on their own infra (Pro/Enterprise feature).",
  },
  {
    q: "What licence do the MCPs ship under?",
    a: "MIT for the MCPs themselves (8 packages on PyPI under user csoai). The attestation API code is dual-licensed: Apache 2.0 for the verifier (so customers can self-host verify) and proprietary for the signer.",
  },
  {
    q: "How do I install all 8 at once?",
    a: "After the meok-compliance-pack plugin lands in the Anthropic Plugin Directory, /plugin install meok/compliance-pack will bring everything. Until then, copy the example block from /docs and add 8 entries to your mcpServers config.",
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

export default function IntegrationsPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>
          ← meok.ai
        </Link>

        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(201,168,76,0.15)",
            border: `1px solid rgba(201,168,76,0.4)`,
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: 24,
            marginBottom: 24,
          }}
        >
          8 MCPs · 10 host integrations
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Integrations
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          MEOK MCPs run wherever the Model Context Protocol runs. One config block adds EU AI Act,
          DORA, NIS2, CRA, and signed-attestation tooling to your agent stack.
        </p>

        <div style={{ display: "grid", gap: 16, marginBottom: 64 }}>
          {HOSTS.map((h) => (
            <div key={h.name} style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 900 }}>{h.name}</h3>
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    background:
                      h.status === "live" ? "rgba(34, 197, 94, 0.12)" : h.status === "ready" ? "rgba(201, 168, 76, 0.15)" : "rgba(0, 0, 0, 0.05)",
                    color: h.status === "live" ? "#16a34a" : h.status === "ready" ? GOLD : `${NAVY}66`,
                    fontSize: 11,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {h.status === "live" ? "✓ Live" : h.status === "ready" ? "Submission-ready" : "Coming soon"}
                </span>
              </div>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55, marginBottom: 12 }}>{h.blurb}</p>
              <div style={{ fontSize: 11, color: `${NAVY}66`, marginBottom: 8, fontFamily: "monospace" }}>
                Config: {h.configFile}
              </div>
              <pre
                style={{
                  background: NAVY,
                  color: "white",
                  padding: 16,
                  borderRadius: 10,
                  fontFamily: "monospace",
                  fontSize: 12,
                  lineHeight: 1.5,
                  margin: 0,
                  overflowX: "auto",
                  whiteSpace: "pre",
                }}
              >
                {h.example}
              </pre>
              {h.href && (
                <a
                  href={h.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", marginTop: 10, color: GOLD, fontSize: 13, fontWeight: 700, textDecoration: "underline" }}
                >
                  Host docs →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 8 }}>
            Need a host that's not listed?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, fontSize: 14 }}>
            Email <a href="mailto:nicholas@csoai.org?subject=MCP%20integration%20request" style={{ color: GOLD }}>nicholas@csoai.org</a> with the host name and we'll add a config example here within 48h.
          </p>
          <Link href="/docs" style={{ display: "inline-block", padding: "12px 22px", background: GOLD, color: NAVY, borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
            See full /docs →
          </Link>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT MCPs
        </p>
      </div>
    </main>
  );
}
