import type { Metadata } from "next";
import Link from "next/link";
import { Search, ExternalLink, Github, Shield, Heart, Package, Code, Zap, Globe, Cpu } from "lucide-react";
import { Surface, GlowText, IconOrb } from "@/components/design-system";

export const metadata: Metadata = {
  title: "MCP Server Directory — 208 Servers | MEOK Labs",
  description: "Browse all 208 MEOK Labs MCP servers. AI governance, healthcare, finance, cybersecurity, developer tools, and more.",
  alternates: { canonical: "https://meok.ai/labs/mcp/servers" },
};

const CATEGORIES = [
  { id: "governance", name: "Governance & Compliance", icon: Shield, count: 15, color: "blue" },
  { id: "healthcare", name: "Healthcare", icon: Heart, count: 7, color: "green" },
  { id: "finance", name: "Financial Services", icon: Package, count: 9, color: "gold" },
  { id: "security", name: "Cybersecurity", icon: Shield, count: 8, color: "red" },
  { id: "developer", name: "Developer Tools", icon: Code, count: 15, color: "blue" },
  { id: "marketing", name: "Marketing & Growth", icon: Zap, count: 10, color: "orange" },
  { id: "operations", name: "Business Operations", icon: Globe, count: 20, color: "purple" },
  { id: "industry", name: "Industry Vertical", icon: Cpu, count: 30, color: "white" },
  { id: "utility", name: "Utility & Data", icon: Package, count: 40, color: "gray" },
  { id: "other", name: "Other", icon: Globe, count: 54, color: "gray" },
] as const;

const FEATURED_SERVERS = [
  { name: "eu-ai-act-compliance-mcp", desc: "EU AI Act risk classification, Article lookup, gap analysis, multi-jurisdiction", tools: 7, category: "governance", pypi: true },
  { name: "iso-42001-ai-mcp", desc: "First ISO/IEC 42001 AI Management System MCP server globally", tools: 6, category: "governance", pypi: true },
  { name: "nist-rmf-ai-mcp", desc: "NIST AI Risk Management Framework compliance assessment", tools: 6, category: "governance", pypi: true },
  { name: "csoai-governance-crosswalk-mcp", desc: "12-framework regulatory crosswalk mapping", tools: 8, category: "governance", pypi: true },
  { name: "gdpr-compliance-ai-mcp", desc: "GDPR compliance with DPIA generation and data rights", tools: 6, category: "governance", pypi: true },
  { name: "hipaa-compliance-mcp", desc: "HIPAA safeguards, PHI handling, breach notification", tools: 5, category: "healthcare", pypi: false },
  { name: "owasp-agentic-mcp", desc: "OWASP Top 10 for AI agents — prompt injection, tool poisoning", tools: 5, category: "security", pypi: false },
  { name: "deepfake-detector-mcp", desc: "Detect AI-generated content — image, video, audio authenticity", tools: 4, category: "security", pypi: true },
  { name: "clinical-trials-ai-mcp", desc: "Clinical trial search, eligibility checking, comparison", tools: 5, category: "healthcare", pypi: true },
  { name: "uk-ai-act-mcp", desc: "UK AI regulation compliance — first mover, AISI alignment", tools: 5, category: "governance", pypi: false },
  { name: "code-executor-mcp", desc: "Sandboxed Python/shell execution with safety guards", tools: 3, category: "developer", pypi: true },
  { name: "tax-calculator-ai-mcp", desc: "UK/US income tax, EU VAT, corporation tax, capital gains", tools: 5, category: "finance", pypi: true },
];

export default function ServersPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      {/* Hero */}
      <section className="relative pt-28 pb-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <GlowText variant="gold" as="span">MCP Server Directory</GlowText>
          </h1>
          <p className="text-[#f5f0e8]/60 mb-8 max-w-2xl mx-auto">
            Browse all 208 servers. Install any server free with pip.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f5f0e8]/30" />
            <input
              type="text"
              placeholder="Search servers..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-[rgba(201,168,76,0.4)]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-sm hover:border-[rgba(201,168,76,0.3)] hover:text-white/90 transition-all"
              >
                <cat.icon className="w-3 h-3 text-[#c9a84c]" />
                {cat.name}
                <span className="text-xs text-[#f5f0e8]/30">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Servers */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Featured Servers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_SERVERS.map((server) => (
              <Surface key={server.name} variant="glass" className="p-5 hover:border-[rgba(201,168,76,0.2)] transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.08] text-[#f5f0e8]/60 border border-white/[0.08]">
                    {server.category}
                  </span>
                  <div className="flex gap-1">
                    {server.pypi && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/15 text-green-400 border border-green-500/20">PyPI</span>
                    )}
                  </div>
                </div>
                <h3 className="font-mono text-sm text-[#c9a84c] mb-1">{server.name}</h3>
                <p className="text-xs text-[#f5f0e8]/50 mb-3">{server.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#f5f0e8]/30">{server.tools} tools</span>
                  <div className="flex gap-3">
                    <Link
                      href={`https://github.com/CSOAI-ORG/${server.name}`}
                      className="text-xs text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors flex items-center gap-1"
                    >
                      <Github className="w-3 h-3" /> GitHub
                    </Link>
                    <Link
                      href={`https://pypi.org/project/${server.name}/`}
                      className="text-xs text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" /> PyPI
                    </Link>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <code className="text-xs font-mono text-green-400/80">pip install {server.name}</code>
                </div>
              </Surface>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="https://github.com/CSOAI-ORG"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
              View All 208 Servers on GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
