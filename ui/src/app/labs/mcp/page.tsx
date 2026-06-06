import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Code, Zap, Globe, ArrowRight, Check, Terminal, Package, AlertTriangle } from "lucide-react";
import { Surface, GlowText, FeatureCard, IconOrb } from "@/components/design-system";

export const metadata: Metadata = {
  title: "MEOK Labs MCP — AI Governance Servers | 208 Servers, 1054 Tools",
  description:
    "The world's most comprehensive AI governance infrastructure as MCP servers. EU AI Act, NIST, ISO 42001, GDPR, SOC 2 — 208 servers, 1054 tools, 12-framework crosswalk.",
  alternates: { canonical: "https://meok.ai/labs/mcp" },
  openGraph: {
    title: "MEOK Labs MCP — AI Governance Servers",
    description: "208 MCP servers. 1054 tools. 12 regulatory frameworks. Enterprise compliance at SMB prices.",
    type: "website",
    url: "https://meok.ai/labs/mcp",
    siteName: "MEOK.AI",
  },
};

const STATS = [
  { label: "MCP Servers", value: "208" },
  { label: "Tools", value: "1,054" },
  { label: "Regulatory Frameworks", value: "12" },
  { label: "Lines of Code", value: "79K+" },
];

const PACKS = [
  { name: "Legal & Compliance", price: "99", servers: 12, desc: "EU AI Act, NIST, ISO 42001, GDPR, SOC 2, HIPAA + crosswalk", href: "https://buy.stripe.com/00wfZjcgAeUW4c5cyQ8k90K" },
  { name: "Healthcare", price: "79", servers: 7, desc: "FHIR R4, patient safety, clinical trials, HIPAA, GDPR", href: "https://buy.stripe.com/aFaeVfeoIbIKcIBdCU8k90S" },
  { name: "Financial Services", price: "79", servers: 9, desc: "SOC 2, PCI DSS, tax, budget, expense, risk, stock", href: "https://buy.stripe.com/aFaeVfeoIbIKcIBdCU8k90S" },
  { name: "Cybersecurity", price: "79", servers: 8, desc: "OWASP Agentic, deepfake detection, trust chains, credentials", href: "https://buy.stripe.com/aFaeVfeoIbIKcIBdCU8k90S" },
  { name: "SMB Operations", price: "49", servers: 10, desc: "Invoice, expense, CRM, support, time tracking, PM", href: "https://buy.stripe.com/aFaeVfeoIbIKcIBdCU8k90S" },
  { name: "Marketing & Growth", price: "49", servers: 10, desc: "Ad copy, content calendar, SEO, social, leads, sentiment", href: "/pricing" },
  { name: "Developer Tools", price: "29", servers: 10, desc: "Code review, CI/CD, testing, API docs, Docker, git", href: "/pricing" },
  { name: "Defence All-In", price: "999", servers: 208, desc: "Every server, unlimited calls, SSO, SLA, on-premise", href: "/pricing" },
];

const TIERS = [
  {
    name: "Free",
    price: "£0",
    period: "/forever",
    desc: "For developers and evaluation",
    features: ["All 208 servers via pip", "15 API calls/day", "Community support", "stdio transport"],
    cta: "Get Started Free",
    href: "https://github.com/CSOAI-ORG",
    popular: false,
  },
  {
    name: "Starter",
    price: "£49",
    period: "/month",
    desc: "For small businesses",
    features: ["1 industry pack included", "500 API calls/day", "Data persistence", "Email support", "Audit logging"],
    cta: "Start Free Trial",
    href: "https://buy.stripe.com/aFaeVfeoIbIKcIBdCU8k90S",
    popular: false,
  },
  {
    name: "Pro",
    price: "£149",
    period: "/month",
    desc: "For consultants & mid-market",
    features: ["Full compliance suite", "12 framework crosswalks", "2,000 API calls/day", "Audit trail export", "Priority support", "1 industry pack included"],
    cta: "Start Free Trial",
    href: "https://buy.stripe.com/00wfZjcgAeUW4c5cyQ8k90K",
    popular: true,
  },
  {
    name: "Defence",
    price: "£999",
    period: "/month",
    desc: "For regulated industries",
    features: ["All 208 servers", "Unlimited API calls", "SSO / SAML", "On-premise option", "99.9% SLA", "Dedicated manager", "Custom frameworks"],
    cta: "Book a Demo",
    href: "mailto:nicholas@meok.ai?subject=MEOK Labs Defence Inquiry",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "£2,499",
    period: "/month",
    desc: "For multi-BU deployments & global compliance",
    features: ["Everything in Defence", "Multi-BU audit-grade separation", "Custom verify domain", "White-label option", "Pay by invoice / PO", "Dedicated CSM + SLA", "On-premise + air-gapped option"],
    cta: "Contact Sales",
    href: "mailto:nicholas@meok.ai?subject=MEOK Labs Enterprise Inquiry",
    popular: false,
  },
];

const COMPLIANCE_SERVERS = [
  { name: "eu-ai-act-compliance-mcp", desc: "EU AI Act risk classification, Article lookup, gap analysis", tools: 7 },
  { name: "nist-rmf-ai-mcp", desc: "NIST AI Risk Management Framework compliance", tools: 6 },
  { name: "iso-42001-ai-mcp", desc: "ISO/IEC 42001 AI Management System (first globally)", tools: 6 },
  { name: "gdpr-compliance-ai-mcp", desc: "GDPR compliance with DPIA generation", tools: 6 },
  { name: "soc2-compliance-ai-mcp", desc: "SOC 2 Type II trust criteria assessment", tools: 6 },
  { name: "hipaa-compliance-mcp", desc: "HIPAA safeguards and PHI handling", tools: 5 },
  { name: "pci-dss-mcp", desc: "PCI DSS 4.0 payment card compliance", tools: 5 },
  { name: "owasp-agentic-mcp", desc: "OWASP Top 10 for AI agents", tools: 5 },
  { name: "csoai-governance-crosswalk-mcp", desc: "12-framework regulatory crosswalk mapping", tools: 8 },
  { name: "ai-self-audit-mcp", desc: "AI agents audit their own compliance", tools: 5 },
];

const CATEGORIES = [
  { id: "all", name: "All" },
  { id: "governance", name: "Governance" },
  { id: "healthcare", name: "Healthcare" },
  { id: "security", name: "Security" },
  { id: "developer", name: "Developer" },
];

export default function LabsMcpPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-widest uppercase mb-8">
            <AlertTriangle className="w-3 h-3" />
            EU AI Act Article 50 deadline: 2 August 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            AI Governance
            <br />
            <GlowText variant="gold" as="span">as Infrastructure</GlowText>
          </h1>

          <p className="text-xl text-[#f5f0e8]/70 max-w-3xl mx-auto mb-4">
            208 MCP servers. 1,054 tools. 12 regulatory frameworks.
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0d0c18] bg-[#c9a84c]/20 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#c9a84c]">
              <span className="text-white">1,578 downloads/mo</span> &middot; Trusted by AI governance teams
            </p>
          </div>
          <p className="text-lg text-[#f5f0e8]/50 max-w-2xl mx-auto mb-8">
            The only MCP provider with ISO 42001 compliance and 12-framework crosswalk mapping.
            Enterprise compliance at SMB prices.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/20 font-mono text-sm">
              <Terminal className="w-4 h-4 text-green-400" />
              pip install eu-ai-act-compliance-mcp
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {STATS.map((stat) => (
              <Surface key={stat.label} variant="glass" className="p-4 text-center">
                <div className="text-3xl font-bold text-[#c9a84c]">{stat.value}</div>
                <div className="text-sm text-[#f5f0e8]/50">{stat.label}</div>
              </Surface>
            ))}
          </div>

          {/* CSOAI Robot */}
          <div className="max-w-xs mx-auto text-center">
            <img
              src="/brand/csoai-robot.png"
              alt="CSOAI Robot Mascot"
              className="w-full h-auto rounded-2xl mb-4"
              style={{
                filter: "drop-shadow(0 0 30px rgba(201,168,76,0.15))",
              }}
            />
            <p className="text-sm text-[#f5f0e8]/40">CSOAI Labs — Built by agents, for agents</p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Getting Started</h2>
          <p className="text-center text-[#f5f0e8]/50 mb-10">Three steps to automated compliance.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Surface variant="elevated" className="p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.15)] text-[#c9a84c] font-bold text-lg flex items-center justify-center mx-auto mb-4 border border-[rgba(201,168,76,0.25)]">1</div>
              <h3 className="font-semibold mb-2">Install</h3>
              <code className="text-xs bg-white/[0.05] px-3 py-1.5 rounded-lg font-mono text-[#c9a84c] block">pip install eu-ai-act-compliance-mcp</code>
            </Surface>
            <Surface variant="elevated" className="p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.15)] text-[#c9a84c] font-bold text-lg flex items-center justify-center mx-auto mb-4 border border-[rgba(201,168,76,0.25)]">2</div>
              <h3 className="font-semibold mb-2">Configure</h3>
              <p className="text-sm text-[#f5f0e8]/60">Add to your Claude/Cursor MCP config</p>
            </Surface>
            <Surface variant="elevated" className="p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.15)] text-[#c9a84c] font-bold text-lg flex items-center justify-center mx-auto mb-4 border border-[rgba(201,168,76,0.25)]">3</div>
              <h3 className="font-semibold mb-2">Ask</h3>
              <p className="text-sm text-[#f5f0e8]/60">Ask your AI to check compliance</p>
            </Surface>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Compliance Costs Comparison</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Surface variant="glass" className="p-5 text-center">
              <div className="text-2xl font-bold text-red-400">£150K+/yr</div>
              <div className="text-sm text-[#f5f0e8]/50 mt-1">Credo AI / Holistic AI</div>
              <div className="text-xs text-[#f5f0e8]/30 mt-1">Enterprise GRC platform</div>
            </Surface>
            <Surface variant="glass" className="p-5 text-center">
              <div className="text-2xl font-bold text-yellow-400">£250-500/hr</div>
              <div className="text-sm text-[#f5f0e8]/50 mt-1">Compliance consultants</div>
              <div className="text-xs text-[#f5f0e8]/30 mt-1">Manual, slow, not scalable</div>
            </Surface>
            <Surface variant="glass" glow="gold" className="p-5 text-center">
              <div className="text-2xl font-bold text-green-400">£49-999/mo</div>
              <div className="text-sm text-[#f5f0e8]/50 mt-1">MEOK Labs</div>
              <div className="text-xs text-[#f5f0e8]/30 mt-1">Automated, API-driven, instant</div>
            </Surface>
          </div>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  cat.id === "all"
                    ? "bg-[rgba(201,168,76,0.2)] text-[#c9a84c] border border-[rgba(201,168,76,0.4)] shadow-[0_0_12px_rgba(201,168,76,0.2)]"
                    : "bg-white/[0.05] text-white/60 border border-white/10 hover:border-[rgba(201,168,76,0.3)] hover:text-white/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Compliance Servers */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Core Compliance Servers</h2>
            <p className="text-[#f5f0e8]/50">The governance suite that no one else has.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {COMPLIANCE_SERVERS.map((server) => (
              <Surface
                key={server.name}
                variant="glass"
                className="p-4 hover:border-[rgba(201,168,76,0.25)] transition-colors group"
              >
                <Link
                  href={`https://github.com/CSOAI-ORG/${server.name}`}
                  className="flex items-start gap-3"
                >
                  <Shield className="w-5 h-5 text-[#c9a84c] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-[#c9a84c]">{server.name}</div>
                    <div className="text-sm text-[#f5f0e8]/60 mt-0.5">{server.desc}</div>
                    <div className="text-xs text-[#f5f0e8]/30 mt-1">{server.tools} tools</div>
                  </div>
                </Link>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Packs */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Industry Packs</h2>
            <p className="text-[#f5f0e8]/50">Pre-configured bundles for your vertical.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PACKS.map((pack) => (
              <Surface key={pack.name} variant="elevated" className="p-5 hover:border-white/15 transition-colors flex flex-col">
                <h3 className="font-semibold mb-1">{pack.name}</h3>
                <p className="text-xs text-[#f5f0e8]/40 mb-3">{pack.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#c9a84c]">£{pack.price}</span>
                  <span className="text-xs text-[#f5f0e8]/40">/mo</span>
                </div>
                <div className="text-xs text-[#f5f0e8]/30 mt-1 mb-4">{pack.servers} servers</div>
                <a
                  href={pack.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block w-full text-center py-2 rounded-lg font-semibold text-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Buy Now
                </a>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 border-t border-white/5" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Pricing</h2>
            <p className="text-[#f5f0e8]/50">Start free. Scale when ready.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {TIERS.map((tier) => (
              <Surface
                key={tier.name}
                variant={tier.popular ? "glass" : "elevated"}
                glow={tier.popular ? "gold" : "none"}
                className="p-6"
              >
                {tier.popular && <div className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest mb-2">Recommended</div>}
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <div className="mt-1 mb-3">
                  <span className="text-2xl font-bold">{tier.price}</span>
                  <span className="text-sm text-[#f5f0e8]/40">{tier.period}</span>
                </div>
                <p className="text-xs text-[#f5f0e8]/50 mb-4">{tier.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs">
                      <Check className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-[#f5f0e8]/60">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block w-full text-center py-2 rounded-lg font-semibold text-sm transition-colors ${
                    tier.popular
                      ? "bg-[#c9a84c] text-black hover:opacity-90"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 border-t border-white/5 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to automate compliance?</h2>
        <p className="text-[#f5f0e8]/50 mb-6 max-w-xl mx-auto">
          Install any server free. Upgrade when you need more calls, audit trails, or enterprise features.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="https://github.com/CSOAI-ORG" className="px-6 py-3 rounded-xl bg-[#c9a84c] text-black font-semibold hover:opacity-90 transition-colors inline-flex items-center gap-2">
            Browse 208 Servers <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="mailto:nicholas@meok.ai?subject=MEOK Labs Demo" className="px-6 py-3 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition-colors">
            Book a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
