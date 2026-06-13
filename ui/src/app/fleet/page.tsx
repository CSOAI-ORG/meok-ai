// /fleet page — serves the static fleet hub (cross-links to 65+ pages + 338 packages)
// Generated from /Users/nicholas/clawd/meok.ai/fleet/index.html on 2026-06-13
// See /Users/nicholas/clawd/_TABS/_inventory/FLEET_500_INVESTIGATION_2026-06-13.md

export const dynamic = 'force-static';
export const revalidate = false;

const FLEET_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MEOK Compliance MCP Fleet — 340+ Regulation-as-Code Servers</title>
<meta name="description" content="One MCP server per regulation. EU AI Act, DORA, NIS2, CRA, GDPR, ISO 42001, SOC 2, PCI DSS, HIPAA, FDA, MDR, AIDA. All MIT-licensed, all on PyPI, all in the official MCP registry.">
<link rel="canonical" href="https://meok.ai/fleet/">
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 1200px; margin: 0 auto; padding: 2rem; color: #1a1a1a; }
  h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  h2 { margin-top: 2.5rem; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; }
  h3 { margin-top: 1.5rem; color: #444; }
  .lede { font-size: 1.2rem; color: #555; margin-bottom: 2rem; }
  .stat-row { display: flex; gap: 2rem; margin: 2rem 0; flex-wrap: wrap; }
  .stat { background: #f7f7fa; padding: 1rem 1.5rem; border-radius: 8px; min-width: 150px; }
  .stat-num { font-size: 2rem; font-weight: 700; color: #5b21b6; }
  .stat-label { font-size: 0.9rem; color: #666; }
  .package-list { columns: 3; column-gap: 1rem; }
  .package-list li { break-inside: avoid; margin-bottom: 0.3rem; }
</style>
</head>
<body>
<h1>MEOK Compliance MCP Fleet</h1>
<p class="lede">One MCP server per regulation. All MIT-licensed, all on PyPI, all in the official MCP registry.</p>

<div class="stat-row">
<div class="stat"><div class="stat-num">340+</div><div class="stat-label">MCP servers</div></div>
<div class="stat"><div class="stat-num">299/300</div><div class="stat-label">Published to MCP registry</div></div>
<div class="stat"><div class="stat-num">6,295</div><div class="stat-label">Weekly PyPI downloads (top 10)</div></div>
<div class="stat"><div class="stat-num">53</div><div class="stat-label">Days to Article 50 cliff</div></div>
</div>

<h2>By regulation</h2>
<h3>EU AI Act</h3>
<ul class="package-list">
<li>eu-ai-act-compliance-mcp</li>
<li>meok-eu-ai-act-art-13-ifu-mcp</li>
<li>meok-eu-ai-act-art-26-fria-mcp</li>
<li>meok-watermark-attest-mcp (Article 50 watermarking)</li>
<li>meok-ai-bom-mcp (Article 10 data quality + Article 13 transparency)</li>
</ul>

<h3>Financial</h3>
<ul class="package-list">
<li>dora-compliance-mcp</li>
<li>dora-nis2-crosswalk-mcp</li>
<li>nis2-compliance-mcp</li>
<li>cra-compliance-mcp</li>
<li>meok-cra-annex-iv-classifier-mcp</li>
<li>pci-dss-ai-mcp</li>
</ul>

<h3>Privacy</h3>
<ul class="package-list">
<li>gdpr-compliance-ai-mcp</li>
<li>uk-gdpr-ai-mcp</li>
<li>ccpa-cpra-ai-mcp</li>
<li>lgpd-ai-mcp</li>
<li>pipeda-ai-mcp</li>
<li>popia-ai-mcp</li>
</ul>

<h3>Audit + Governance</h3>
<ul class="package-list">
<li>agent-audit-logger-mcp</li>
<li>iso-42001-ai-mcp</li>
<li>soc2-compliance-ai-mcp</li>
<li>hipaa-compliance-mcp</li>
<li>fda-samd-mcp</li>
<li>mdr-medical-device-mcp</li>
<li>canada-aida-ai-mcp</li>
</ul>

<h3>Agent infrastructure</h3>
<ul class="package-list">
<li>agent-mcp-router-mcp</li>
<li>a2a-governance-bridge-mcp</li>
<li>agent-policy-enforcement-mcp</li>
<li>agent-commerce-protocol-mcp</li>
<li>agent-identity-trust-mcp</li>
<li>meok-council (36-node PBFT substrate)</li>
<li>sovereign-temple (local AI brain runtime)</li>
</ul>

<h3>Knowledge & tools</h3>
<ul class="package-list">
<li>vector-knowledge-graph-mcp</li>
<li>database-universal-mcp</li>
<li>meok-sdk-py</li>
<li>mcp-scorecard-mcp</li>
</ul>

<h2>Install</h2>
<pre><code>pip install eu-ai-act-compliance-mcp</code></pre>

<p>Then add to <code>claude_desktop_config.json</code>:</p>
<pre><code>{
  "mcpServers": {
    "eu-ai-act-compliance": {
      "command": "uvx",
      "args": ["eu-ai-act-compliance-mcp"]
    }
  }
}</code></pre>

<h2>One install, every regulation</h2>
<p>Use the <a href="https://pypi.org/project/agent-mcp-router-mcp/">agent-mcp-router-mcp</a> to load the entire fleet at once, or pin specific regulations for your stack.</p>

<h2>Try the Article 50 Kit</h2>
<p>The 53-day clock to the EU AI Act Article 50 cliff is ticking. <a href="https://meok.ai/article-50-kit">Read the kit</a> or <a href="https://meok.ai/verify">verify an attestation</a> now.</p>

<hr>
<p><small>Last updated: 13 June 2026. Maintained by MEOK AI Labs (Yorkshire, UK). MIT-licensed.</small></p>
</body>
</html>`;

export default function FleetPage() {
  return <div dangerouslySetInnerHTML={{ __html: FLEET_HTML }} />;
}
