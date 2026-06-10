import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK API Keys — Unlock Pro Compliance Tools",
  description:
    "Get unlimited access to EU AI Act audits, Annex IV documentation generation, multi-jurisdiction mapping, and 200+ compliance MCP tools. From GBP 29/month.",
  openGraph: {
    title: "MEOK API Keys — Unlock Pro Compliance Tools",
    description:
      "Get unlimited access to EU AI Act audits, Annex IV documentation generation, multi-jurisdiction mapping, and 200+ compliance MCP tools.",
  },
};

const FREE_TOOLS = [
  "quick_scan — instant risk classification",
  "deadline_check — all enforcement dates",
  "classify_ai_risk — risk level (summary)",
  "check_compliance — compliance score",
  "get_timeline — implementation milestones",
  "assess_penalties — fine calculator",
];

const PRO_TOOLS = [
  "classify_ai_risk — full detailed matches + remediation steps",
  "check_compliance — full 42-point checklist with specific fixes",
  "generate_documentation — Annex IV technical docs (saves 40+ hours)",
  "audit_report — complete audit report (replaces GBP 2-5K consultancy)",
  "multi_jurisdiction_map — EU + UK + Singapore + Canada + US NIST",
  "predict_risk_neural — AI-powered risk prediction",
  "neural_insights — aggregate compliance intelligence",
  "All 200+ MEOK compliance MCP tools",
];

const TIERS = [
  {
    name: "Free",
    price: "GBP 0",
    period: "forever",
    description: "Get started with basic compliance checks. No API key needed.",
    features: FREE_TOOLS,
    cta: "Install Free",
    ctaHref: "https://pypi.org/project/eu-ai-act-compliance-mcp/",
    highlight: false,
    badge: null,
  },
  {
    name: "Starter",
    price: "GBP 29",
    period: "/month",
    description: "For teams starting their EU AI Act compliance journey.",
    features: [
      "Everything in Free",
      "100 API calls/day across all tools",
      "Full detailed analysis output",
      "generate_documentation (Annex IV)",
      "audit_report (complete compliance audit)",
      "Email support",
    ],
    cta: "Get Starter Key",
    ctaHref: "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
    highlight: false,
    badge: null,
  },
  {
    name: "Professional",
    price: "GBP 79",
    period: "/month",
    description: "For compliance officers managing multiple AI systems.",
    features: [
      "Everything in Starter",
      "1,000 API calls/day",
      "multi_jurisdiction_map (5 jurisdictions)",
      "predict_risk_neural (AI risk prediction)",
      "Verifiable HMAC-signed attestations",
      "Audit trail with tamper-proof logging",
      "Priority support",
    ],
    cta: "Get Pro Key",
    ctaHref: "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For regulated enterprises with complex multi-framework needs.",
    features: [
      "Everything in Professional",
      "Unlimited API calls",
      "All 5+ compliance frameworks",
      "Custom neural model training",
      "On-premise deployment option",
      "Dedicated account manager",
      "SLA guarantee",
      "SSO + SAML",
    ],
    cta: "Contact Sales",
    ctaHref: "mailto:nicholas@meok.ai?subject=MEOK%20Enterprise%20API%20Key",
    highlight: false,
    badge: null,
  },
];

export default function ApiKeysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Nav */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
              MEOK AI Labs
            </Link>
            <div className="flex space-x-6">
              <Link href="/pricing" className="text-sm text-slate-300 hover:text-white transition">
                Pricing
              </Link>
              <a
                href="https://github.com/CSOAI-ORG"
                className="text-sm text-slate-300 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-8 text-center px-4">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
          200+ MCP Compliance Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          MEOK API Keys
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-2">
          Unlock detailed compliance audits, documentation generation, and
          multi-jurisdiction mapping. Works with Claude, ChatGPT, Cursor, Windsurf, and any MCP client.
        </p>
        <p className="text-sm text-slate-500">
          57,000+ monthly installs. Used by compliance teams across the EU.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                tier.highlight
                  ? "bg-emerald-500/10 border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/10"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-medium">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className="text-slate-400 text-sm">{tier.period}</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">{tier.description}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-400 mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaHref}
                className={`block text-center py-2.5 rounded-lg font-medium transition ${
                  tier.highlight
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          How It Works
        </h2>
        <div className="space-y-8">
          {[
            {
              step: "1",
              title: "Install the MCP server",
              code: "pip install eu-ai-act-compliance-mcp",
            },
            {
              step: "2",
              title: "Get your API key",
              code: "# Purchase above, key emailed within minutes",
            },
            {
              step: "3",
              title: "Set your environment variable",
              code: "export MEOK_API_KEY=meok_abc123...",
            },
            {
              step: "4",
              title: "Use in any MCP client",
              code: '# In Claude, Cursor, ChatGPT, etc:\n"Run a full EU AI Act compliance audit on my HR screening system"',
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-sm">
                {s.step}
              </div>
              <div className="flex-1">
                <p className="font-medium mb-2">{s.title}</p>
                <pre className="bg-slate-800/50 border border-white/10 rounded-lg p-3 text-sm text-slate-300 overflow-x-auto whitespace-pre-wrap">
                  {s.code}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free vs Pro comparison */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Free vs Pro: What You Get
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Free Tier Output</h3>
            <pre className="text-xs text-slate-400 bg-slate-800/50 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap">
{`{
  "classification": "high-risk",
  "confidence": "high",
  "high_risk_matches": [
    {
      "area": 4,
      "title": "Employment",
      "description": "[UPGRADE to see]",
      "matched_keywords": [
        "3 keywords matched"
      ]
    }
  ],
  "compliance_roadmap": "LOCKED",
  "upgrade": {
    "url": "meok.ai/api-keys",
    "price": "From GBP 29/month"
  }
}`}
            </pre>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">
              Pro Tier Output
            </h3>
            <pre className="text-xs text-slate-300 bg-slate-800/50 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap">
{`{
  "classification": "high-risk",
  "confidence": "high",
  "high_risk_matches": [
    {
      "area": 4,
      "title": "Employment",
      "description": "AI for recruitment,
        screening, filtering...",
      "subcategories": [
        "Recruitment and screening",
        "Decision-making on promotion",
        "Monitoring work performance"
      ],
      "matched_keywords": [
        "recruit", "hiring", "HR"
      ]
    }
  ],
  "remediation_plan": [
    "Establish Article 9 risk mgmt",
    "Create Annex IV documentation",
    "Implement Article 14 oversight"
  ]
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Supported frameworks */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Works With Every MCP Client</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Claude Desktop",
            "Claude Code",
            "ChatGPT (Jan 2026+)",
            "Google Gemini",
            "Cursor",
            "Windsurf",
            "Cline",
            "VS Code Copilot",
            "Amazon Q",
            "Any MCP Client",
          ].map((client) => (
            <span
              key={client}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        <p>
          MEOK AI Labs |{" "}
          <a href="https://github.com/CSOAI-ORG" className="hover:text-white transition">
            GitHub
          </a>{" "}
          |{" "}
          <a href="mailto:nicholas@meok.ai" className="hover:text-white transition">
            nicholas@meok.ai
          </a>
        </p>
        <p className="mt-2">
          200+ MCP compliance tools. 57,000+ monthly installs. Open source.
        </p>
      </footer>
    </div>
  );
}
