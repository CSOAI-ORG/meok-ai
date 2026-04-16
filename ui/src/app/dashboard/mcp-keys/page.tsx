import type { Metadata } from "next";
import Link from "next/link";
import { Key, Copy, RefreshCw, Shield, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "MCP API Keys | MEOK Dashboard",
  description: "Manage your MCP server API keys for MEOK Labs compliance and governance tools.",
};

export default function McpKeysPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Key className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl font-bold">MCP API Keys</h1>
        </div>

        <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-400">Getting Started</p>
              <p className="text-sm text-[#f5f0e8]/60 mt-1">
                API keys authenticate your MCP server requests. Include your key as the <code className="bg-white/10 px-1 rounded">api_key</code> parameter in every tool call.
              </p>
            </div>
          </div>
        </div>

        {/* Current Tier */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
          <h2 className="text-lg font-semibold mb-4">Your Plan</h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-amber-400">Explorer</div>
              <div className="text-sm text-[#f5f0e8]/50">15 MCP calls/day · Governance servers only</div>
            </div>
            <Link
              href="/labs/mcp#pricing"
              className="px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-colors"
            >
              Upgrade
            </Link>
          </div>
        </div>

        {/* API Key Display */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your API Key</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-sm hover:bg-white/20 transition-colors">
              <RefreshCw className="w-3 h-3" />
              Regenerate
            </button>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/10">
            <code className="text-sm font-mono text-green-400 flex-1">meok_free_••••••••••••••••••••</code>
            <button className="p-2 rounded hover:bg-white/10 transition-colors" title="Copy key">
              <Copy className="w-4 h-4 text-[#f5f0e8]/50" />
            </button>
          </div>

          <p className="text-xs text-[#f5f0e8]/30 mt-2">
            Keep your API key secret. Do not share it in public repositories or client-side code.
          </p>
        </div>

        {/* Usage */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
          <h2 className="text-lg font-semibold mb-4">Usage Today</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs text-[#f5f0e8]/50">Calls made</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15</div>
              <div className="text-xs text-[#f5f0e8]/50">Daily limit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">15</div>
              <div className="text-xs text-[#f5f0e8]/50">Remaining</div>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-green-400" style={{ width: '100%' }} />
          </div>
        </div>

        {/* Quick Start */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-[#f5f0e8]/70 mb-2">Install a server:</p>
              <code className="block p-3 rounded-lg bg-black/30 text-sm font-mono text-green-400">
                pip install eu-ai-act-compliance-mcp
              </code>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f5f0e8]/70 mb-2">Use with Claude Desktop:</p>
              <pre className="p-3 rounded-lg bg-black/30 text-sm font-mono text-green-400 overflow-x-auto">{`{
  "mcpServers": {
    "eu-ai-act": {
      "command": "python",
      "args": ["-m", "eu_ai_act_compliance_mcp"]
    }
  }
}`}</pre>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f5f0e8]/70 mb-2">Pass your API key in tool calls:</p>
              <pre className="p-3 rounded-lg bg-black/30 text-sm font-mono text-green-400 overflow-x-auto">{`classify_ai_risk(
  description="My AI system...",
  api_key="meok_free_your_key_here"
)`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
