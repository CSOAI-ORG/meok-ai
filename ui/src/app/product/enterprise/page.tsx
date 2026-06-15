import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Users, Shield, Globe, ArrowRight, Check, MessageSquare, Briefcase, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise & Team | MEOK.AI",
  description: "Enterprise AI solutions with SSO, role-based access, custom deployments, dedicated support, and SLA guarantees.",
  alternates: { canonical: "https://meok.ai/product/enterprise" },
};

const ENTERPRISE_FEATURES = [
  {
    icon: Users,
    title: "SSO & SAML",
    desc: "Integrate with your identity provider. Okta, Azure AD, Google Workspace, Auth0 — we work with all major IdPs.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    desc: "Define who can see what. Admin, manager, user, viewer — granular permissions across your organisation.",
  },
  {
    icon: Globe,
    title: "Custom Deployments",
    desc: "On-premise, private cloud, or dedicated VPC. Deploy MEOK wherever your data residency requirements demand.",
  },
  {
    icon: Building2,
    title: "Dedicated Support",
    desc: "Named account manager, priority support channel, and SLA-backed response times. We're here when you need us.",
  },
];

const TEAM_FEATURES = [
  { title: "Shared character library", desc: "Deploy company-wide companion characters" },
  { title: "Team memory vault", desc: "Shared context across your team" },
  { title: "Conversation analytics", desc: "Insights into team AI usage patterns" },
  { title: "Admin dashboard", desc: "Manage users, permissions, and billing" },
  { title: "Audit logs", desc: "Full visibility into who accessed what" },
  { title: "Custom training", desc: "Fine-tune characters on your data" },
];

const PRICING_TIERS = [
  {
    name: "Team",
    price: "£19",
    period: "/user/month",
    desc: "For small teams wanting AI collaboration",
    features: ["Up to 20 users", "Shared character library", "Basic analytics", "Email support", "SSO (beta)"],
    cta: "Start team trial",
    popular: false,
  },
  {
    name: "Business",
    price: "£49",
    period: "/user/month",
    desc: "For organisations needing full control",
    features: ["Unlimited users", "Custom deployments", "Full audit logs", "Priority support", "Dedicated account manager", "SLA guarantee"],
    cta: "Contact sales",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For national-scale deployments",
    features: ["On-premise option", "Custom model fine-tuning", "White-label", "24/7 phone support", "Custom SLA", "Security assessment"],
    cta: "Talk to us",
    popular: false,
  },
];

const ENTERPRISE_FAQ = [
  { q: "How much does MEOK for teams cost?", a: "The Team plan is £19 per user per month for up to 20 users, including a shared character library, basic analytics, email support, and SSO (beta). The Business plan is £49 per user per month for unlimited users with custom deployments, full audit logs, priority support, a dedicated account manager, and an SLA guarantee. Enterprise pricing is custom for national-scale deployments." },
  { q: "What identity providers does SSO support?", a: "MEOK integrates with all major IdPs via SSO and SAML — including Okta, Azure AD, Google Workspace, and Auth0. SSO is in beta on the Team plan and fully available on Business and Enterprise." },
  { q: "Can MEOK be deployed on-premise?", a: "Yes. Custom deployments support on-premise, private cloud, or a dedicated VPC, so you can deploy MEOK wherever your data residency requirements demand. On-premise is available on the Enterprise plan." },
  { q: "Who uses MEOK Enterprise?", a: "Healthcare (patient companion AI, staff support, care home monitoring with NHS-compliant data handling), professional services (client-facing assistants, case memory, compliance tracking), and government (citizen support AI and sensitive data handling, G-Cloud approved)." },
];

const ENT_BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "Enterprise & Team", item: "https://meok.ai/product/enterprise" },
] };

const ENT_PRODUCT_JSONLD = { "@context": "https://schema.org", "@type": "Service", name: "MEOK Enterprise & Team", description: "Enterprise AI solutions with SSO, role-based access, custom deployments, dedicated support, and SLA guarantees.", url: "https://meok.ai/product/enterprise", provider: { "@type": "Organization", name: "MEOK AI Labs" }, offers: [
  { "@type": "Offer", name: "Team", price: "19", priceCurrency: "GBP", description: "Per user per month — up to 20 users, shared character library, basic analytics, email support, SSO (beta)." },
  { "@type": "Offer", name: "Business", price: "49", priceCurrency: "GBP", description: "Per user per month — unlimited users, custom deployments, full audit logs, priority support, dedicated account manager, SLA guarantee." },
] };

const ENT_FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: ENTERPRISE_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ENT_BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ENT_PRODUCT_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ENT_FAQ_JSONLD) }} />
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="blob-blue" style={{ width: 600, height: 500, top: -150, left: "50%", transform: "translateX(-50%)", opacity: 0.15 }} />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Enterprise & Team
          </div>
          <h1 className="font-black text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>
            AI that works <span className="text-gradient-blue">for your organisation</span>.
          </h1>
          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From startup teams to national-scale deployments. SSO, custom deployments, SLAs, and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/hatch" className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-blue-500 hover:bg-blue-400 transition-all text-sm">
              Start team trial — free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#pricing" className="text-sm text-[#f5f0e8]/50 hover:text-blue-400 transition-colors font-medium">
              View pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-500/60 block mb-4">
              Enterprise-ready
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Built for organisations.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENTERPRISE_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="premium-card p-7 border-blue-500/10 hover:border-blue-500/30 transition-all">
                <div className="icon-blue w-11 h-11 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Features */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Team features
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Everything your team needs.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TEAM_FEATURES.map(({ title, desc }) => (
              <div key={title} className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="icon-blue w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{title}</div>
                  <div className="text-xs text-[#f5f0e8]/50">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white">Who uses MEOK Enterprise?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="premium-card p-7">
              <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-bold text-white text-lg mb-2">Healthcare</h3>
              <p className="text-sm text-[#f5f0e8]/55">Patient companion AI, staff support, care home monitoring. NHS data handling compliant.</p>
            </div>
            <div className="premium-card p-7">
              <Briefcase className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-bold text-white text-lg mb-2">Professional Services</h3>
              <p className="text-sm text-[#f5f0e8]/55">Client-facing AI assistants, case memory, compliance tracking. Solicitor-friendly.</p>
            </div>
            <div className="premium-card p-7">
              <Crown className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-bold text-white text-lg mb-2">Government</h3>
              <p className="text-sm text-[#f5f0e8]/55">Citizen support AI, internal assistance, sensitive data handling. G-Cloud approved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Plans for every stage.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map(({ name, price, period, desc, features, cta, popular }) => (
              <div key={name} className={`premium-card p-7 ${popular ? "border-blue-500 ring-1 ring-blue-500/30" : "border-white/10"}`}>
                <div className="text-xs font-bold tracking-widest uppercase text-[#c9a84c] mb-3">{name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black text-white">{price}</span>
                  <span className="text-sm text-[#f5f0e8]/50">{period}</span>
                </div>
                <p className="text-sm text-[#f5f0e8]/55 mb-6">{desc}</p>
                <ul className="space-y-2 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#f5f0e8]/70">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={price === "Custom" ? "/contact" : "/hatch"} className={`block w-full py-3 text-center rounded-xl font-bold text-sm transition-all ${popular ? "bg-blue-500 hover:bg-blue-400 text-[#1a1a2e]" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"}`}>
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Frequently asked.
            </h2>
          </div>
          <div className="space-y-3">
            {ENTERPRISE_FAQ.map(({ q, a }) => (
              <details key={q} className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-5">
                <summary className="font-bold text-white text-sm cursor-pointer">{q}</summary>
                <p className="mt-3 text-sm text-[#f5f0e8]/60 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1a1a2e] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6">
            <Building2 className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="font-black text-white text-2xl sm:text-3xl mb-4">Ready to deploy at scale?</h2>
          <p className="text-[#f5f0e8]/50 mb-10">Talk to our enterprise team about your requirements.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-blue-500 hover:bg-blue-400 transition-all text-base">
            Contact enterprise team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}