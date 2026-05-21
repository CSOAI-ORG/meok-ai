import type { Metadata } from "next";
import Link from "next/link";
import { MCPS, type RegistryMCP } from "../anthropic-registry/data";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Developer Docs · MEOK MCPs + Attestation API + Substrates",
  description:
    "Install, configure, and use 59+ MEOK MCPs across governance (EU AI Act, DORA, NIS2, CRA, ISO 42005, Korea AI Basic Act, UK AI Bill), A2A (BFT, identity, payments, x402, OASF, EUDI, replay debugger), cybersec, trade, and platform — plus the HMAC-signed attestation API. Drop-in for Claude Code, Cursor, Cline, Windsurf.",
  alternates: { canonical: "https://meok.ai/docs" },
  openGraph: {
    title: "MEOK Developer Docs · 59 MCPs + 5 Substrates",
    description:
      "MCPs + Attestation API for EU AI Act, DORA, NIS2, CRA, A2A protocols. MIT-licensed.",
    type: "website",
    url: "https://meok.ai/docs",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const GREEN = "#7bc47f";
const BG = "#f5f0e8";

const CATEGORY_LABELS: Record<RegistryMCP["category"], string> = {
  governance: "Governance & Compliance",
  a2a: "A2A — Agent-to-Agent",
  cybersec: "Cybersecurity",
  trade: "Trade verticals",
  industry: "Industry verticals",
  platform: "Platform & Care",
  devtool: "Developer tooling",
};

const CATEGORY_ORDER: RegistryMCP["category"][] = [
  "governance",
  "a2a",
  "cybersec",
  "platform",
  "trade",
  "industry",
  "devtool",
];

const SUBSTRATES = [
  { name: "Governance Substrate", price: "£499/mo", href: "/governance", desc: "10 governance MCPs · EU AI Act + DORA + NIS2 + CRA + ISO 42005 bundled with one signed evidence chain." },
  { name: "A2A Substrate", price: "£999/mo", href: "/a2a", desc: "20 agent-to-agent primitives · identity, trust, policy, firewall, audit, BFT progress council, ACP, x402, OASF, EUDI." },
  { name: "COBOL Substrate", price: "£999/mo Pro · £4,990/mo Defence", href: "/cobol", desc: "Legacy COBOL → modern stack migration substrate with AI-generated test parity + audit chain." },
  { name: "BFT Council Substrate", price: "£499/mo", href: "/councilof", desc: "Byzantine-fault-tolerant agent governance · 5-voter consensus + anti-loop guardrail + signed council decrees." },
  { name: "Universal PAYG", price: "£29/mo + £0.0002/call", href: "/pricing", desc: "Pay-as-you-go for any of the 59 MCPs · API-keyed metered billing · no commit." },
];

const SAMPLE_INSTALLS = [
  { key: "claude-code", title: "Claude Code", path: "~/.claude.json", lang: "json" },
  { key: "cursor", title: "Cursor", path: ".cursor/mcp.json", lang: "json" },
  { key: "cline", title: "Cline", path: "cline_mcp_settings.json", lang: "json" },
  { key: "windsurf", title: "Windsurf", path: "~/.windsurf/mcp.json", lang: "json" },
];

export default function DocsPage() {
  const byCat = new Map<RegistryMCP["category"], RegistryMCP[]>();
  for (const m of MCPS) {
    if (!byCat.has(m.category)) byCat.set(m.category, []);
    byCat.get(m.category)!.push(m);
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "4.5rem 1.5rem" }}>
        {/* Hero */}
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
            marginBottom: 24,
          }}
        >
          MIT licensed · {MCPS.length} MCPs in the official MCP Registry · 5 Substrates
        </div>
        <div style={{ marginBottom: 18 }}>
          <ShareButtons
            text={`${MCPS.length} MEOK MCPs — EU AI Act + DORA + NIS2 + CRA + A2A. MIT-licensed. Drop into Claude Code, Cursor, Cline, Windsurf.`}
            url="https://meok.ai/docs"
            hashtags={["mcp", "claudecode", "cursor", "compliance"]}
            hnTitle="MEOK Developer Docs — 59 MCPs for compliance + agent-to-agent infrastructure"
          />
        </div>

        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Developer Docs
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: `${NAVY}99`,
            maxWidth: 720,
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          MEOK ships compliance + agent-infrastructure MCPs you drop into any agent stack. All
          packages are MIT-licensed, listed in the official Model Context Protocol Registry, and
          run via{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            uvx
          </code>{" "}
          or{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            pip install
          </code>
          . No central API key needed for the free tier.
        </p>

        {/* In-page nav */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 48,
            padding: "1rem",
            background: "rgba(26,26,46,0.04)",
            borderRadius: 12,
          }}
        >
          {[
            { id: "install", label: "Install" },
            { id: "substrates", label: "5 Substrates" },
            { id: "catalogue", label: "MCP Catalogue" },
            { id: "attestation", label: "Attestation API" },
            { id: "sources", label: "Sources" },
          ].map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              style={{
                padding: "6px 12px",
                background: "white",
                color: NAVY,
                border: `1px solid ${NAVY}1a`,
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {nav.label}
            </a>
          ))}
        </div>

        {/* Quick install */}
        <h2 id="install" style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Quick install — any MCP client
        </h2>
        <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
          Every MEOK MCP follows the same install pattern. Replace{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            {"<slug>"}
          </code>{" "}
          with any package name from the catalogue below.
        </p>
        <div
          style={{
            background: NAVY,
            color: "white",
            padding: 24,
            borderRadius: 14,
            marginBottom: 16,
            fontFamily: "monospace",
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8 }}>
            # ~/.claude.json — `mcpServers` block:
          </div>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "#e2e8f0" }}>{`{
  "mcpServers": {
    "meok-watermark":   { "command": "uvx", "args": ["meok-watermark-attest-mcp"] },
    "meok-omnibus":     { "command": "uvx", "args": ["meok-omnibus-tracker-mcp"] },
    "bft-council":      { "command": "uvx", "args": ["bft-progress-council-mcp"] },
    "agent-replay":     { "command": "uvx", "args": ["agent-replay-debugger-mcp"] },
    "eudi-wallet":      { "command": "uvx", "args": ["eudi-wallet-mcp"] },
    "oasf-directory":   { "command": "uvx", "args": ["oasf-agent-directory-mcp"] }
  }
}`}</pre>
        </div>
        <p style={{ fontSize: 13, color: `${NAVY}99`, marginBottom: 24 }}>
          Restart your client. Run{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            /mcp
          </code>{" "}
          (Claude Code) to verify connection. Same JSON shape works for Cursor (
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            .cursor/mcp.json
          </code>
          ), Cline (
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            cline_mcp_settings.json
          </code>
          ), and Windsurf.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 8,
            marginBottom: 56,
          }}
        >
          {SAMPLE_INSTALLS.map((s) => (
            <div
              key={s.key}
              style={{
                background: "white",
                padding: "10px 14px",
                borderRadius: 10,
                border: `1px solid ${NAVY}1a`,
                fontSize: 12,
              }}
            >
              <strong>{s.title}</strong>
              <br />
              <code style={{ color: `${NAVY}77`, fontSize: 11 }}>{s.path}</code>
            </div>
          ))}
        </div>

        {/* Substrates */}
        <h2 id="substrates" style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          5 Substrates — bundle pricing
        </h2>
        <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
          Buy MCPs individually via Universal PAYG (£29/mo + £0.0002/call), or bundle by domain:
        </p>
        <div style={{ display: "grid", gap: 12, marginBottom: 56 }}>
          {SUBSTRATES.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              style={{
                display: "block",
                background: "white",
                padding: "1.1rem 1.4rem",
                borderRadius: 12,
                border: `1px solid ${NAVY}1a`,
                textDecoration: "none",
                color: NAVY,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 6,
                }}
              >
                <strong style={{ fontSize: "1.05rem", color: GOLD }}>{s.name}</strong>
                <code style={{ fontSize: 12, color: `${NAVY}77`, fontFamily: "monospace" }}>
                  {s.price}
                </code>
              </div>
              <p style={{ margin: 0, color: `${NAVY}99`, fontSize: 13, lineHeight: 1.55 }}>
                {s.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* Catalogue */}
        <h2 id="catalogue" style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          MCP Catalogue · {MCPS.length} MCPs
        </h2>
        <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
          Every entry below is on PyPI + the official MCP Registry. Click any title for the
          per-MCP install page with tools list and source links.
        </p>

        {CATEGORY_ORDER.filter((c) => byCat.has(c)).map((cat) => (
          <section key={cat} style={{ marginBottom: 40 }}>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 900,
                marginBottom: 14,
                color: NAVY,
                display: "flex",
                alignItems: "baseline",
                gap: 8,
              }}
            >
              {CATEGORY_LABELS[cat]}
              <span style={{ fontSize: 11, color: `${NAVY}66`, fontWeight: 700 }}>
                ({byCat.get(cat)!.length})
              </span>
            </h3>
            <div style={{ display: "grid", gap: 10 }}>
              {byCat.get(cat)!.map((m) => (
                <Link
                  key={m.slug}
                  href={`/docs/${m.slug}`}
                  style={{
                    display: "block",
                    background: "white",
                    borderRadius: 12,
                    padding: "0.95rem 1.2rem",
                    border: `1px solid ${NAVY}1a`,
                    textDecoration: "none",
                    color: NAVY,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 4,
                    }}
                  >
                    <strong style={{ fontSize: 14, color: GOLD }}>{m.title}</strong>
                    <code
                      style={{
                        fontSize: 11,
                        color: `${NAVY}55`,
                        fontFamily: "monospace",
                      }}
                    >
                      v{m.version}
                    </code>
                  </div>
                  <p
                    style={{
                      margin: "0 0 6px",
                      color: `${NAVY}99`,
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  >
                    {m.description}
                  </p>
                  <code
                    style={{
                      background: "rgba(0,0,0,0.04)",
                      padding: "3px 8px",
                      borderRadius: 6,
                      fontFamily: "monospace",
                      fontSize: 11,
                      color: NAVY,
                    }}
                  >
                    uvx {m.slug}
                  </code>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Attestation API */}
        <h2 id="attestation" style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Attestation API
        </h2>
        <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
          POST to{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            meok-attestation-api.vercel.app/sign
          </code>{" "}
          with email + entity + regulation + score + findings, get back an HMAC-SHA256-signed
          certificate with a public verify URL.
        </p>
        <div
          style={{
            background: NAVY,
            color: "white",
            padding: 22,
            borderRadius: 14,
            marginBottom: 20,
            fontFamily: "monospace",
            fontSize: 13,
            overflowX: "auto",
          }}
        >
          <div style={{ color: GOLD }}># Free tier: pass email, get a signed cert</div>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "#e2e8f0" }}>{`curl -X POST https://meok-attestation-api.vercel.app/sign \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "you@company.com",
    "regulation": "EU_AI_ACT",
    "entity": "Your Co Ltd",
    "score": 78,
    "findings": ["Article 9 RMS in place"],
    "articles_audited": ["9", "10", "14", "26", "50"]
  }'`}</pre>
        </div>
        <p style={{ fontSize: 13, color: `${NAVY}99`, marginBottom: 32 }}>
          Returns a{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            cert_id
          </code>{" "}
          +{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            verify_url
          </code>{" "}
          +{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>
            signature_sha256_hmac
          </code>
          . Auditors verify by curling the verify_url — no MEOK contact needed.
        </p>

        <p style={{ fontSize: 13, color: `${NAVY}77`, marginBottom: 56 }}>
          Pro (£149/mo) unlocks: custom verify domain, your own HMAC signing key, no &ldquo;free
          tier&rdquo; cert marker, Slack support, unlimited certs.{" "}
          <Link href="/pricing" style={{ color: GOLD }}>
            See pricing →
          </Link>
        </p>

        {/* Sources */}
        <div id="sources" style={{ background: NAVY, color: "white", padding: 28, borderRadius: 16 }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 12 }}>Sources</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 1.8 }}>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/CSOAI-ORG"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                github.com/CSOAI-ORG
              </a>
            </li>
            <li>
              <strong>PyPI publisher:</strong>{" "}
              <a
                href="https://pypi.org/user/csoai/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                csoai
              </a>
            </li>
            <li>
              <strong>MCP Registry:</strong>{" "}
              <a
                href="https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.CSOAI-ORG"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                registry.modelcontextprotocol.io/...search=io.github.CSOAI-ORG
              </a>
            </li>
            <li>
              <strong>Anthropic Registry page:</strong>{" "}
              <Link href="/anthropic-registry" style={{ color: GOLD }}>
                meok.ai/anthropic-registry
              </Link>
            </li>
            <li>
              <strong>Substrate landings:</strong>{" "}
              <Link href="/a2a" style={{ color: GOLD }}>
                /a2a
              </Link>
              {" · "}
              <Link href="/governance" style={{ color: GOLD }}>
                /governance
              </Link>
              {" · "}
              <Link href="/cobol" style={{ color: GOLD }}>
                /cobol
              </Link>
              {" · "}
              <Link href="/councilof" style={{ color: GOLD }}>
                /councilof
              </Link>
            </li>
            <li>
              <strong>Live Catalogue:</strong>{" "}
              <a
                href="https://meok-attestation-api.vercel.app/catalogue"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                meok-attestation-api.vercel.app/catalogue
              </a>
            </li>
            <li>
              <strong>Verifier UI:</strong>{" "}
              <a
                href="https://meok-attestation-api.vercel.app/verify"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                meok-attestation-api.vercel.app/verify
              </a>
            </li>
          </ul>
          <div
            style={{
              marginTop: 16,
              padding: "10px 14px",
              background: "rgba(123,196,127,0.16)",
              border: `1px solid ${GREEN}55`,
              borderRadius: 10,
              fontSize: 12,
              color: GREEN,
            }}
          >
            <strong>docs.meok.ai</strong> mirrors this page on its own subdomain once Vercel domain
            attach is complete.
          </div>
        </div>

        <p
          style={{
            marginTop: 40,
            color: `${NAVY}66`,
            fontSize: 12,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT-licensed
          MCPs
        </p>
      </div>
    </main>
  );
}
