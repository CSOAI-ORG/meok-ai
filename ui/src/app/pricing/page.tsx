import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "Pricing — MEOK AI | Sovereign AI OS",
  description:
    "MEOK pricing: Explorer (free), Sovereign (£12/mo), Sovereign Elite (£29/mo). Start free — no credit card required. Cancel any time.",
  keywords: [
    "MEOK pricing",
    "sovereign AI pricing",
    "personal AI subscription",
    "care-aligned AI cost",
    "MEOK plans",
  ],
  alternates: { canonical: "https://meok.ai/pricing" },
  openGraph: {
    title: "Pricing — MEOK AI | Sovereign AI OS",
    description: "Start free. Upgrade when you're ready. Simple, transparent pricing.",
    type: "website",
    url: "https://meok.ai/pricing",
  },
};

interface PlanFeature {
  label: string;
  explorer: boolean | string;
  sovereign: boolean | string;
  elite: boolean | string;
}

const PLAN_FEATURES: PlanFeature[] = [
  { label: "AI companions", explorer: "1", sovereign: "3", elite: "Unlimited" },
  { label: "Messages per month", explorer: "50", sovereign: "Unlimited", elite: "Unlimited" },
  {
    label: "Semantic memory",
    explorer: "Basic (last 30 days)",
    sovereign: "Full (lifetime)",
    elite: "Full (lifetime)",
  },
  { label: "Morning briefing", explorer: false, sovereign: true, elite: true },
  { label: "Voice interaction", explorer: false, sovereign: true, elite: true },
  { label: "Full dashboard", explorer: false, sovereign: true, elite: true },
  { label: "Ralph Mode (autonomous AI)", explorer: false, sovereign: false, elite: true },
  { label: "Family Guardian mode", explorer: false, sovereign: false, elite: true },
  { label: "API access", explorer: false, sovereign: false, elite: true },
  { label: "Custom character creation", explorer: false, sovereign: false, elite: true },
  { label: "Care score reports", explorer: false, sovereign: true, elite: true },
  { label: "Data export (full)", explorer: true, sovereign: true, elite: true },
  { label: "Zero third-party training", explorer: true, sovereign: true, elite: true },
  { label: "Maternal Covenant protection", explorer: true, sovereign: true, elite: true },
  { label: "Byzantine governance", explorer: true, sovereign: true, elite: true },
  { label: "Support", explorer: "Community", sovereign: "Priority email", elite: "Dedicated" },
  { label: "Free trial", explorer: "Always free", sovereign: "14 days", elite: "14 days" },
];

const PLANS = [
  {
    name: "Explorer",
    price: "Free",
    period: "",
    desc: "Try sovereign AI with no commitment. Start hatching today.",
    color: "border-white/10",
    textColor: "text-white",
    highlight: false,
    cta: "Start free",
    href: "/register",
    key: "explorer" as const,
  },
  {
    name: "Sovereign",
    price: "£12",
    period: "/month",
    desc: "Full sovereignty. Unlimited conversation. The complete MEOK experience.",
    color: "border-cyan-500/50",
    textColor: "text-cyan-400",
    highlight: true,
    cta: "Start 14-day trial",
    href: "/register?plan=pro",
    key: "sovereign" as const,
  },
  {
    name: "Sovereign Elite",
    price: "£29",
    period: "/month",
    desc: "For power users. Autonomous agents, API, unlimited everything.",
    color: "border-purple-500/30",
    textColor: "text-purple-400",
    highlight: false,
    cta: "Go Elite",
    href: "/register?plan=premium",
    key: "elite" as const,
  },
];

const PRICING_FAQS = [
  {
    q: "Can I cancel at any time?",
    a: "Yes, completely. There are no lock-in periods and no cancellation fees. Cancel from your dashboard with one click. Your subscription continues until the end of your billing period. No emails asking you to reconsider — that's the Maternal Covenant in action.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data is retained for 30 days after cancellation in case you change your mind. After that, it is permanently and automatically deleted from our servers. At any point — before or after cancellation — you can export a full copy of your data as a JSON archive, or trigger immediate deletion. You'll receive a deletion certificate confirming the action.",
  },
  {
    q: "Is the free trial for real? No credit card?",
    a: "The Explorer tier is permanently free — no trial, no credit card ever required. The 14-day trial on Sovereign and Elite plans requires a card to start, but you won't be charged until day 15. Cancel before then and you pay nothing. We don't auto-charge without a reminder email first.",
  },
  {
    q: "Can I switch plans or downgrade?",
    a: "Yes. You can upgrade, downgrade, or cancel at any time from your dashboard. If you downgrade to Explorer, your full conversation history and memories are preserved — you just won't be able to add new conversations beyond the 50/month limit. Your data is never deleted because you changed plans.",
  },
  {
    q: "Are there discounts for annual billing?",
    a: "Annual billing with a 20% discount (equivalent to about 2 months free) is in development and will launch later in 2026. If you sign up now, you'll be offered the annual option when it becomes available, and we'll apply the discount retroactively to your current billing period.",
  },
];

function FeatureCell({ val }: { val: boolean | string }) {
  if (val === true) return <Check className="w-4 h-4 text-cyan-400 mx-auto" />;
  if (val === false) return <X className="w-4 h-4 text-white/15 mx-auto" />;
  return <span className="text-xs text-white/50 block text-center">{val}</span>;
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <MarketingNav activePage="pricing" />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              pricing
            </span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Start free. Upgrade when you&apos;re ready. No dark patterns, no lock-in — that&apos;s in the
            Maternal Covenant.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-7 rounded-2xl border ${plan.color} ${
                  plan.highlight ? "bg-cyan-950/20" : "bg-white/[0.02]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-xs font-semibold text-black">
                    Most popular
                  </div>
                )}
                <div className="mb-6">
                  <h2 className={`font-bold text-lg ${plan.textColor}`}>{plan.name}</h2>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/30 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-white/40 mt-3 leading-relaxed">{plan.desc}</p>
                </div>
                <Link
                  href={plan.href}
                  className={`block w-full py-3 rounded-xl text-sm font-semibold text-center transition-colors ${
                    plan.highlight
                      ? "bg-cyan-500 text-black hover:bg-cyan-400"
                      : "bg-white/[0.06] text-white/70 hover:bg-white/[0.1] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full feature table */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Full feature comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="text-left py-4 px-5 text-xs text-white/30 font-medium w-1/2">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-sm font-semibold text-white/60">Explorer</div>
                    <div className="text-xs text-white/25 mt-0.5">Free</div>
                  </th>
                  <th className="py-4 px-4 text-center bg-cyan-950/[0.12]">
                    <div className="text-sm font-bold text-cyan-400">Sovereign</div>
                    <div className="text-xs text-white/25 mt-0.5">£12/mo</div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-sm font-semibold text-purple-400">Elite</div>
                    <div className="text-xs text-white/25 mt-0.5">£29/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {PLAN_FEATURES.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-t border-white/[0.04] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                  >
                    <td className="py-3.5 px-5 text-sm text-white/70">{row.label}</td>
                    <td className="py-3.5 px-4 text-center">
                      <FeatureCell val={row.explorer} />
                    </td>
                    <td className="py-3.5 px-4 text-center bg-cyan-950/[0.06]">
                      <FeatureCell val={row.sovereign} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <FeatureCell val={row.elite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/20 text-center mt-4">
            All plans include the Maternal Covenant, Byzantine governance, and full data sovereignty.
            That&apos;s not a feature — it&apos;s the floor.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white/[0.01] border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Pricing FAQ</h2>
          <p className="text-white/40 text-center mb-12 text-sm">
            Questions about billing, cancellation, and data.
          </p>
          <div className="space-y-4">
            {PRICING_FAQS.map(({ q, a }) => (
              <div
                key={q}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10] transition-all"
              >
                <h3 className="font-semibold text-base mb-3">{q}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start for free today</h2>
          <p className="text-white/40 mb-8">
            No credit card required. Your sovereign AI is ready to hatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors text-sm"
            >
              Hatch free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors text-sm"
            >
              Compare with competitors
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
