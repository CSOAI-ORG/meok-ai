import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Heart, DollarSign, Lock, Briefcase, Megaphone, Code, Globe, Check, ArrowRight } from "lucide-react";
import { Surface, GlowText, IconOrb } from "@/components/design-system";

export const metadata: Metadata = {
  title: "Industry Packs — MCP Server Bundles | MEOK Labs",
  description: "Pre-configured MCP server bundles for healthcare, finance, legal, cybersecurity, marketing, developer tools, and more.",
  alternates: { canonical: "https://meok.ai/labs/mcp/packs" },
};

const PACKS = [
  {
    id: "compliance",
    name: "Legal & Compliance",
    icon: Shield,
    price: 99,
    servers: [
      "eu-ai-act-compliance-mcp", "nist-rmf-ai-mcp", "iso-42001-ai-mcp",
      "gdpr-compliance-ai-mcp", "soc2-compliance-ai-mcp", "iso-27001-ai-mcp",
      "csoai-governance-crosswalk-mcp", "meok-governance-engine-mcp",
      "ai-self-audit-mcp", "contract-review-ai-mcp", "hipaa-compliance-mcp", "owasp-agentic-mcp",
    ],
    features: [
      "12 regulatory framework crosswalks",
      "EU AI Act risk classification + Article lookup",
      "ISO 42001 management system auditing",
      "GDPR DPIA generation",
      "SOC 2 Type II assessment",
      "HIPAA safeguard evaluation",
      "OWASP Agentic security scanning",
      "AI agent self-audit capabilities",
      "2,000 API calls/day",
      "Audit trail (JSONL export)",
    ],
    highlight: "The only 12-framework crosswalk in existence",
    color: "blue",
    orbVariant: "blue" as const,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    price: 79,
    servers: [
      "healthcare-fhir-mcp", "patient-safety-ai-mcp", "clinical-trials-ai-mcp",
      "healthcare-ai-governance-mcp", "hipaa-compliance-mcp", "gdpr-compliance-ai-mcp", "iso-27001-ai-mcp",
    ],
    features: [
      "FHIR R4 clinical data access",
      "Drug interaction checking",
      "Dosage validation with safety ranges",
      "Clinical trial search and eligibility",
      "HIPAA compliance assessment",
      "GDPR for health data",
      "Care membrane safety validation",
    ],
    highlight: "HIPAA + GDPR + FHIR in one pack",
    color: "green",
    orbVariant: "green" as const,
  },
  {
    id: "finance",
    name: "Financial Services",
    icon: DollarSign,
    price: 79,
    servers: [
      "soc2-compliance-ai-mcp", "tax-calculator-ai-mcp", "budget-planner-ai-mcp",
      "expense-tracker-ai-mcp", "stock-analyzer-ai-mcp", "risk-assessment-ai-mcp",
      "invoice-generator-ai-mcp", "pci-dss-mcp", "accounting-ai-mcp",
    ],
    features: [
      "SOC 2 Type II compliance",
      "PCI DSS 4.0 assessment",
      "UK/US income tax calculation",
      "EU VAT across 27 countries",
      "Budget planning and forecasting",
      "Enterprise risk scoring",
      "Invoice generation",
    ],
    highlight: "SOC 2 + PCI DSS + tax in one pack",
    color: "yellow",
    orbVariant: "gold" as const,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: Lock,
    price: 79,
    servers: [
      "cybersecurity-ai-mcp", "deepfake-detector-mcp", "credential-manager-mcp",
      "trust-chain-mcp", "owasp-agentic-mcp", "blockchain-verification-mcp",
      "ai-self-audit-mcp", "proofof-ai-mcp",
    ],
    features: [
      "Deepfake detection (image, video, audio)",
      "OWASP Top 10 for AI agents",
      "Verifiable credentials with signatures",
      "Cryptographic trust chains",
      "Blockchain certificate verification",
      "Content provenance and authenticity",
    ],
    highlight: "OWASP Agentic + deepfake detection",
    color: "red",
    orbVariant: "red" as const,
  },
  {
    id: "smb",
    name: "SMB Operations",
    icon: Briefcase,
    price: 49,
    servers: [
      "invoice-generator-ai-mcp", "expense-tracker-ai-mcp", "customer-support-ai-mcp",
      "crm-ai-mcp", "time-tracker-ai-mcp", "project-management-ai-mcp",
      "meeting-summarizer-ai-mcp", "email-automation-mcp", "habit-tracker-ai-mcp", "subscription-tracker-ai-mcp",
    ],
    features: [
      "Invoice generation with templates",
      "Expense tracking and categorization",
      "Customer support ticket management",
      "CRM with lead scoring",
      "Time tracking with reports",
      "Meeting summarization",
      "Data persists between restarts",
    ],
    highlight: "Run your business from Claude",
    color: "purple",
    orbVariant: "purple" as const,
  },
  {
    id: "marketing",
    name: "Marketing & Growth",
    icon: Megaphone,
    price: 49,
    servers: [
      "ad-copy-ai-mcp", "content-calendar-ai-mcp", "seo-checker-ai-mcp",
      "social-media-ai-mcp", "competitor-monitor-ai-mcp", "lead-scoring-ai-mcp",
      "sentiment-analysis-ai-mcp", "churn-predictor-ai-mcp", "feedback-analyzer-ai-mcp", "tone-rewriter-ai-mcp",
    ],
    features: [
      "Ad copy generation with A/B testing",
      "Content calendar planning",
      "SEO analysis and optimization",
      "Competitor monitoring",
      "Lead scoring and qualification",
      "Churn prediction",
    ],
    highlight: "10 marketing tools, one subscription",
    color: "orange",
    orbVariant: "orange" as const,
  },
  {
    id: "developer",
    name: "Developer Tools",
    icon: Code,
    price: 29,
    servers: [
      "code-executor-mcp", "code-reviewer-ai-mcp", "ci-cd-generator-ai-mcp",
      "test-case-generator-ai-mcp", "api-tester-ai-mcp", "api-docs-generator-ai-mcp",
      "git-helper-ai-mcp", "dockerfile-generator-ai-mcp", "docker-helper-ai-mcp", "dependency-updater-ai-mcp",
    ],
    features: [
      "Sandboxed code execution",
      "Automated code review",
      "CI/CD pipeline generation",
      "Test case generation",
      "API testing and documentation",
      "Dockerfile optimization",
    ],
    highlight: "Ship faster with AI code review",
    color: "cyan",
    orbVariant: "teal" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise All-In",
    icon: Globe,
    price: 499,
    servers: ["All 208 servers included"],
    features: [
      "Every MCP server we make — forever",
      "Unlimited API calls",
      "SSO / SAML integration",
      "On-premise deployment option",
      "99.9% SLA guarantee",
      "Dedicated account manager",
      "Custom compliance frameworks",
      "Webhook event notifications",
      "Multi-tenant isolation",
      "Priority support (4-hour response)",
    ],
    highlight: "Credo AI costs £150K/yr. We cost £6K/yr.",
    color: "white",
    orbVariant: "gold" as const,
  },
];

export default function PacksPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      {/* Hero */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <GlowText variant="gold" as="span">Industry Packs</GlowText>
          </h1>
          <p className="text-[#f5f0e8]/60 mb-8 max-w-2xl mx-auto">
            Pre-configured MCP server bundles for your industry. Each pack includes all relevant servers, compliance frameworks, and tools.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-6">
          {PACKS.map((pack) => (
            <Surface key={pack.id} id={pack.id} variant="glass" className="p-6 sm:p-8 hover:border-white/15 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <IconOrb icon={pack.icon} variant={pack.orbVariant} size="md" />
                    <h2 className="text-2xl font-bold">{pack.name}</h2>
                  </div>
                  <p className="text-sm text-[#c9a84c]/80 mb-4 font-medium">{pack.highlight}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-4">
                    {pack.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span className="text-[#f5f0e8]/60">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-[#f5f0e8]/30 mb-1">Servers included:</p>
                    <div className="flex flex-wrap gap-1">
                      {pack.servers.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-white/[0.06] text-[#f5f0e8]/50 font-mono border border-white/[0.06]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-52 md:text-right flex md:block items-center gap-4 md:gap-0">
                  <div className="text-3xl font-bold text-[#c9a84c]">
                    £{pack.price}<span className="text-sm font-normal text-[#f5f0e8]/40">/mo</span>
                  </div>
                  <Link
                    href={`mailto:nicholas@meok.ai?subject=MEOK Labs ${pack.name} Pack`}
                    className="mt-0 md:mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c9a84c] text-black font-semibold text-sm hover:opacity-90 transition-colors"
                  >
                    Get Started <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </Surface>
          ))}
        </div>
      </section>
    </div>
  );
}
