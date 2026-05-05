import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developer Docs · MEOK MCPs + Attestation API",
  description:
    "How to install, configure, and use the 8 MEOK compliance MCPs (EU AI Act, DORA, NIS2, CRA) + the HMAC-signed attestation API. Drop-in for Claude Code, Cursor, Cline, Windsurf.",
  alternates: { canonical: "https://meok.ai/docs" },
  openGraph: {
    title: "MEOK Developer Docs",
    description: "MCPs + Attestation API for EU AI Act, DORA, NIS2, CRA. MIT-licensed.",
    type: "website",
    url: "https://meok.ai/docs",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const MCPS = [
  {
    name: "meok-watermark-attest-mcp",
    title: "EU AI Act Article 50 Watermarking",
    install: "uvx meok-watermark-attest-mcp",
    desc: "C2PA + invisible watermark + perceptual fingerprint per the Code of Practice (2 Nov 2026 cliff). HMAC-signed conformity attestation.",
    registry: "io.github.CSOAI-ORG/meok-watermark-attest-mcp",
  },
  {
    name: "meok-attestation-verify",
    title: "Attestation Verifier",
    install: "uvx meok-attestation-verify",
    desc: "Cryptographically verifies any MEOK signed compliance certificate by cert_id. Stand-alone — works without contacting MEOK.",
    registry: "io.github.CSOAI-ORG/meok-attestation-verify",
  },
  {
    name: "meok-cra-annex-iv-classifier-mcp",
    title: "EU CRA Annex IV Classifier",
    install: "uvx meok-cra-annex-iv-classifier-mcp",
    desc: "Classifies your product against the EU Cyber Resilience Act Annex III + Annex IV technical documentation requirements. 24h ENISA reporting from 11 Sep 2026.",
    registry: "io.github.CSOAI-ORG/meok-cra-annex-iv-classifier-mcp",
  },
  {
    name: "meok-dpia-edpb-template-mcp",
    title: "EDPB Harmonised DPIA Template",
    install: "uvx meok-dpia-edpb-template-mcp",
    desc: "Auto-fills the EDPB harmonised DPIA template (14 April 2026) for any AI system. Cross-maps to EU AI Act Article 26(9) FRIA requirements.",
    registry: "io.github.CSOAI-ORG/meok-dpia-edpb-template-mcp",
  },
  {
    name: "meok-governance-engine-mcp",
    title: "Governance Engine",
    install: "uvx meok-governance-engine-mcp",
    desc: "Cross-walks every EU AI Act article (4-72) to ISO/IEC 42001 Annex A controls + NIST AI RMF + Anthropic RSP. One control source, three frameworks.",
    registry: "io.github.CSOAI-ORG/meok-governance-engine-mcp",
  },
  {
    name: "meok-mcp-injection-scan-mcp",
    title: "MCP Injection Scanner",
    install: "uvx meok-mcp-injection-scan-mcp",
    desc: "Scans MCP servers for known prompt-injection + tool-poisoning vectors before you let an agent use them. Outputs signed scan certificate.",
    registry: "io.github.CSOAI-ORG/meok-mcp-injection-scan-mcp",
  },
  {
    name: "meok-nis2-de-register-mcp",
    title: "Germany NIS2 BSI Register",
    install: "uvx meok-nis2-de-register-mcp",
    desc: "Section 30/32 entity classifier + BSI register payload generator. Late-filing rationale included for the 6 March 2026 deadline.",
    registry: "io.github.CSOAI-ORG/meok-nis2-de-register-mcp",
  },
  {
    name: "meok-omnibus-tracker-mcp",
    title: "EU Digital Omnibus Deadline Tracker",
    install: "uvx meok-omnibus-tracker-mcp",
    desc: "Authoritative dated tracker for every EU AI Act / DORA / NIS2 / CRA / GDPR deadline + the 16-month omnibus delay (Annex III → Dec 2027).",
    registry: "io.github.CSOAI-ORG/meok-omnibus-tracker-mcp",
  },
];

export default function DocsPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
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
          MIT licensed · 8 MCPs in the Official Registry
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Developer Docs
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          MEOK ships compliance MCPs you drop into any agent stack. All 8 packages are listed in the
          official Model Context Protocol Registry, MIT-licensed, and run via{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>uvx</code>{" "}
          or{" "}
          <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>pip install</code>.
          No central API key needed for the free tier.
        </p>

        {/* Quick install in Claude Code */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Quick install — Claude Code
        </h2>
        <div style={{ background: NAVY, color: "white", padding: 24, borderRadius: 14, marginBottom: 20, fontFamily: "monospace", fontSize: 13, lineHeight: 1.6 }}>
          <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8 }}># Add to ~/.claude.json `mcpServers` block:</div>
          <div>
            <span style={{ color: "#94a3b8" }}>{"{"}</span>
            <br />
            <span style={{ paddingLeft: 16 }}>"mcpServers": {"{"}</span>
            <br />
            <span style={{ paddingLeft: 32, color: GOLD }}>"meok-watermark"</span>: {"{"}
            <br />
            <span style={{ paddingLeft: 48 }}>"command": "uvx",</span>
            <br />
            <span style={{ paddingLeft: 48 }}>"args": ["meok-watermark-attest-mcp"]</span>
            <br />
            <span style={{ paddingLeft: 32 }}>{"}"},</span>
            <br />
            <span style={{ paddingLeft: 32, color: GOLD }}>"meok-omnibus"</span>: {"{"}
            <br />
            <span style={{ paddingLeft: 48 }}>"command": "uvx",</span>
            <br />
            <span style={{ paddingLeft: 48 }}>"args": ["meok-omnibus-tracker-mcp"]</span>
            <br />
            <span style={{ paddingLeft: 32 }}>{"}"}</span>
            <br />
            <span style={{ paddingLeft: 16 }}>{"}"}</span>
            <br />
            <span style={{ color: "#94a3b8" }}>{"}"}</span>
          </div>
        </div>
        <p style={{ fontSize: 13, color: `${NAVY}99`, marginBottom: 56 }}>
          Restart Claude Code. Run <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>/mcp</code> to verify both servers connected. Same pattern works in Cursor (`.cursor/mcp.json`), Cline (`cline_mcp_settings.json`), and Windsurf.
        </p>

        {/* MCP catalogue */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          The 8 MCPs
        </h2>
        <div style={{ display: "grid", gap: 14, marginBottom: 56 }}>
          {MCPS.map((m) => (
            <div key={m.name} style={{ background: "white", borderRadius: 14, padding: 22, border: `1px solid ${NAVY}1a` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: GOLD }}>{m.title}</h3>
                <code style={{ fontSize: 12, color: `${NAVY}66`, fontFamily: "monospace" }}>{m.name}</code>
              </div>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55, marginBottom: 10 }}>{m.desc}</p>
              <div style={{ background: "rgba(0,0,0,0.04)", padding: "8px 12px", borderRadius: 8, fontFamily: "monospace", fontSize: 12, color: NAVY, marginBottom: 6 }}>
                $ {m.install}
              </div>
              <div style={{ fontSize: 11, color: `${NAVY}55`, fontFamily: "monospace" }}>
                Registry: {m.registry}
              </div>
            </div>
          ))}
        </div>

        {/* Attestation API */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
          Attestation API
        </h2>
        <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
          POST to <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>meok-attestation-api.vercel.app/sign</code> with email + entity + regulation + score + findings, get back an HMAC-SHA256-signed certificate with a public verify URL.
        </p>
        <div style={{ background: NAVY, color: "white", padding: 22, borderRadius: 14, marginBottom: 20, fontFamily: "monospace", fontSize: 13, overflowX: "auto" }}>
          <div style={{ color: GOLD }}># Free tier: pass email, get a signed cert</div>
          <div>{`curl -X POST https://meok-attestation-api.vercel.app/sign \\`}</div>
          <div>{`  -H "Content-Type: application/json" \\`}</div>
          <div>{`  -d '{`}</div>
          <div>{`    "email": "you@company.com",`}</div>
          <div>{`    "regulation": "EU_AI_ACT",`}</div>
          <div>{`    "entity": "Your Co Ltd",`}</div>
          <div>{`    "score": 78,`}</div>
          <div>{`    "findings": ["Article 9 RMS in place"],`}</div>
          <div>{`    "articles_audited": ["9", "10", "14", "26", "50"]`}</div>
          <div>{`  }'`}</div>
        </div>
        <p style={{ fontSize: 13, color: `${NAVY}99`, marginBottom: 32 }}>
          Returns a <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>cert_id</code> + <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>verify_url</code> + <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4 }}>signature_sha256_hmac</code>. Auditors verify by curling the verify_url — no MEOK contact needed.
        </p>

        <p style={{ fontSize: 13, color: `${NAVY}77`, marginBottom: 56 }}>
          Pro (£79/mo) unlocks: custom verify domain, your own HMAC signing key, no "free tier" cert marker, Slack support, unlimited certs. <Link href="/pricing" style={{ color: GOLD }}>See pricing →</Link>
        </p>

        {/* Source links */}
        <div style={{ background: NAVY, color: "white", padding: 28, borderRadius: 16 }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 12 }}>Sources</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 1.8 }}>
            <li>
              <strong>GitHub:</strong> <a href="https://github.com/CSOAI-ORG" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>github.com/CSOAI-ORG</a>
            </li>
            <li>
              <strong>PyPI publisher:</strong> all 8 packages under user{" "}
              <a href="https://pypi.org/user/csoai/" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>csoai</a>
            </li>
            <li>
              <strong>MCP Registry:</strong>{" "}
              <a href="https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.CSOAI-ORG" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
                registry.modelcontextprotocol.io/...search=io.github.CSOAI-ORG
              </a>
            </li>
            <li>
              <strong>Live Catalogue:</strong>{" "}
              <a href="https://meok-attestation-api.vercel.app/catalogue" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
                meok-attestation-api.vercel.app/catalogue
              </a>
            </li>
            <li>
              <strong>Verifier UI:</strong>{" "}
              <a href="https://meok-attestation-api.vercel.app/verify" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
                meok-attestation-api.vercel.app/verify
              </a>
            </li>
          </ul>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT-licensed MCPs
        </p>
      </div>
    </main>
  );
}
