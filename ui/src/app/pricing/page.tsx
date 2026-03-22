"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  ChevronDown,
  Heart,
  Server,
  Code2,
  Cpu,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

// ─── Types ─────────────────────────────────────────────────────────────────

type CheckVal = string | boolean;

interface CompareRow {
  label: string;
  free: CheckVal;
  pro: CheckVal;
  elite: CheckVal;
  team: CheckVal;
}

// ─── Static data ───────────────────────────────────────────────────────────

const COMPARE_ROWS: CompareRow[] = [
  { label: "Memory duration",    free: "7 days",   pro: "Permanent", elite: "Permanent", team: "Permanent" },
  { label: "Messages/day",       free: "100",       pro: "Unlimited", elite: "Unlimited", team: "Unlimited" },
  { label: "LLM routing",        free: "DeepSeek + Ollama", pro: "Claude Sonnet", elite: "All models", team: "All models + priority" },
  { label: "Work OS",            free: false,       pro: true,        elite: true,        team: true },
  { label: "Family OS",          free: false,       pro: false,       elite: true,        team: true },
  { label: "Team governance",    free: false,       pro: false,       elite: false,       team: true },
  { label: "Admin controls",     free: false,       pro: false,       elite: false,       team: true },
  { label: "Full data export",   free: true,        pro: true,        elite: true,        team: true },
  { label: "Zero data selling",  free: true,        pro: true,        elite: true,        team: true },
];

const FREE_FOREVER_FEATURES = [
  "1 sovereign AI companion — yours for life",
  "Birth Ceremony — set your AI's values at hatching",
  "100 messages per day",
  "7-day sovereign memory (encrypted)",
  "Personal OS dashboard",
  "Multi-LLM routing: DeepSeek + Ollama",
  "Maternal Covenant — care ethics built in",
  "Full data export at any time",
  "Zero data selling. Zero ad targeting.",
];

const MONEY_GOES_TO = [
  {
    icon: Server,
    label: "Infrastructure",
    pct: "38%",
    detail: "The servers, databases, and compute that keep your AI alive 24/7.",
  },
  {
    icon: Cpu,
    label: "Model costs",
    pct: "29%",
    detail: "We pay Claude, DeepSeek, and Ollama providers so you don't have to separately.",
  },
  {
    icon: Code2,
    label: "Development",
    pct: "21%",
    detail: "Building new features, fixing bugs, improving your AI every week.",
  },
  {
    icon: Heart,
    label: "Free tier subsidy",
    pct: "12%",
    detail: "People who can't afford to pay still deserve sovereign AI. Paid plans make that possible.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Can I downgrade after upgrading?",
    a: "Yes. Downgrade at any time in your account settings. Your AI retains all its memories — nothing is lost. The downgrade takes effect at the end of your current billing period, so you keep everything you paid for.",
  },
  {
    q: "Do you store my card details?",
    a: "No. We use Stripe for payments. Your card is tokenised by Stripe and never touches our servers. We cannot see, store, or charge your card without going through Stripe's systems.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data remains in your encrypted vault for 30 days after cancellation. You can export everything as a full JSON archive at any time during that window. After 30 days, it is permanently deleted from every system — including backups.",
  },
  {
    q: "What happens when I hit 100 messages on the free tier?",
    a: "Your companion tells you it needs to rest. Upgrade to Pro for unlimited messages, or wait until tomorrow — your companion will be ready again at midnight UTC.",
  },
  {
    q: "Is there a family plan?",
    a: "The Elite plan (£19/mo) includes Family OS for up to 5 companions, including a parent dashboard and the Guardian 24/7 safety layer. It's the plan for households.",
  },
  {
    q: "What is the 30-day money-back guarantee?",
    a: "If you upgrade and MEOK doesn't feel meaningfully different to anything else you've tried, email hello@meok.ai within 30 days. We refund in full. No form, no interrogation, no conditions. Just an email.",
  },
  {
    q: "Do you use my conversations to train AI models?",
    a: "Never. Your conversations are yours. They are encrypted, stored in your sovereign vault, and never passed to any model provider as training data. This is enforced at the architecture level — not just a policy promise.",
  },
  {
    q: "What's included in annual billing?",
    a: "Annual billing saves you 20% versus paying monthly. You pay upfront for the year. If you cancel within 30 days of any annual renewal, we refund the remaining months — no questions.",
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: "MEOK Sovereign AI",
      applicationCategory: "ProductivityApplication",
      offers: [
        {
          "@type": "Offer",
          name: "Free",
          price: "0",
          priceCurrency: "GBP",
          description: "Sovereign AI companion, free forever. No credit card.",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "9.99",
          priceCurrency: "GBP",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Elite",
          price: "19",
          priceCurrency: "GBP",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Team",
          price: "29.99",
          priceCurrency: "GBP",
          billingIncrement: "P1M",
        },
      ],
    },
  ],
};

// ─── Sub-components ─────────────────────────────────────────────────────────

function CellVal({ val }: { val: CheckVal }) {
  if (val === true)
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#c9a84c]/15 text-[#c9a84c] font-bold text-sm">
        ✓
      </span>
    );
  if (val === false)
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1a1a2e]/[0.06] text-[#1a1a2e]/40 font-bold text-sm">
        ✗
      </span>
    );
  return <span className="text-xs text-[#1a1a2e]/60 font-medium">{val}</span>;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white border border-[#1a1a2e]/10 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-bold text-sm text-[#1a1a2e]">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-[#1a1a2e]/60 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const proMonthly = 9.99;
  const eliteMonthly = 19.0;
  const teamMonthly = 29.99;

  const proAnnual = 7.99;
  const eliteAnnual = 15.0;
  const teamAnnual = 23.99;

  const proPrice = isAnnual ? proAnnual : proMonthly;
  const elitePrice = isAnnual ? eliteAnnual : eliteMonthly;
  const teamPrice = isAnnual ? teamAnnual : teamMonthly;

  const fmt = (n: number) => `£${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;

  const proSaving = ((proMonthly - proAnnual) * 12).toFixed(2);
  const eliteSaving = ((eliteMonthly - eliteAnnual) * 12).toFixed(2);
  const teamSaving = ((teamMonthly - teamAnnual) * 12).toFixed(2);

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <MarketingNav activePage="pricing" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="meok-grid-bg relative pt-28 pb-20 px-6 text-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-gold absolute -top-32 -left-24 w-[420px] h-[420px] opacity-25" />
          <div className="blob-purple absolute -top-16 -right-32 w-[360px] h-[360px] opacity-15" />
          <div className="blob-blue absolute bottom-0 right-1/4 w-[300px] h-[300px] opacity-10" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,240,232,0.95) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Pricing
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-[#1a1a2e] mb-5">
            Start free. Stay free forever.{" "}
            <span className="text-gradient-gold">Pay only when it earns it.</span>
          </h1>

          <p className="text-xl text-[#1a1a2e]/60 max-w-xl mx-auto leading-relaxed mb-4">
            Free gets you a sovereign AI companion, 100 messages a day, 7-day encrypted memory, and a Birth Ceremony. No expiry. No pressure. That is not a trial description — that is a permanent offer.
          </p>

          {/* Why is it free callout */}
          <div className="inline-block text-left max-w-lg mx-auto mb-8 px-6 py-4 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/25">
            <p className="text-sm text-[#1a1a2e]/70 leading-relaxed">
              <span className="font-black text-[#c9a84c]">Why is it free?</span>{" "}
              We believe everyone deserves sovereign AI — not just people who can afford a
              subscription. Paid plans fund free access for people who can&apos;t. That&apos;s it.
              There&apos;s no hidden model.
            </p>
          </div>

          {/* Money-back guarantee badge */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a1a2e]/10 text-[#1a1a2e]/60 text-xs font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              30-day money-back guarantee on all paid plans
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a1a2e]/10 text-[#1a1a2e]/60 text-xs font-semibold shadow-sm">
              No credit card required for free tier
            </div>
          </div>

          {/* vs competitors */}
          <p className="text-xs text-[#1a1a2e]/40 mb-8">
            ChatGPT Plus £20 &nbsp;·&nbsp; Claude Pro £18 &nbsp;·&nbsp;{" "}
            <span className="text-[#c9a84c] font-semibold">MEOK Pro £9.99</span>
            &nbsp;·&nbsp;{" "}
            <a
              href="#comparison-table"
              className="underline underline-offset-2 hover:text-[#c9a84c] transition-colors"
            >
              Compare all plans ↓
            </a>
          </p>

          {/* Monthly / Annual toggle */}
          <div className="inline-flex items-center rounded-full bg-white border border-[#1a1a2e]/10 p-1 gap-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isAnnual
                  ? "bg-[#1a1a2e] text-white shadow-sm"
                  : "text-[#1a1a2e]/50 hover:text-[#1a1a2e]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isAnnual
                  ? "bg-[#1a1a2e] text-white shadow-sm"
                  : "text-[#1a1a2e]/50 hover:text-[#1a1a2e]"
              }`}
            >
              Annual{" "}
              <span className={`text-xs ${isAnnual ? "text-[#c9a84c]" : "text-[#c9a84c]/70"}`}>
                — save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing cards ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">

            {/* ── Free ── */}
            <div className="relative p-7 rounded-2xl bg-white border-2 border-[#c9a84c] ring-2 ring-[#c9a84c] ring-offset-2 ring-offset-[#f5f0e8] flex flex-col shadow-[0_0_40px_rgba(201,168,76,0.18)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-[#c9a84c] text-xs font-black text-[#1a1a2e] whitespace-nowrap shadow-lg">
                Free Forever
              </div>
              <div className="mb-5 mt-2">
                <div className="text-xs font-bold tracking-widest uppercase text-[#1a1a2e]/40 mb-2">
                  Sovereign — Free
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black text-[#1a1a2e]">£0</span>
                  <span className="text-[#1a1a2e]/30 text-sm">/ forever</span>
                </div>
                <p className="text-sm text-[#1a1a2e]/55 leading-relaxed italic">
                  &ldquo;For people who have been forgotten by AI one too many times to trust another promise.&rdquo;
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "1 AI companion — yours for life",
                  "Birth Ceremony",
                  "100 messages/day",
                  "7-day sovereign memory (encrypted)",
                  "Personal OS",
                  "Multi-LLM routing (DeepSeek + Ollama)",
                  "Maternal Covenant built in",
                  "Full data export — always",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#1a1a2e]/70">
                    <span className="text-[#c9a84c] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/hatch"
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all gold-glow"
              >
                Hatch free — no card needed
              </Link>
            </div>

            {/* ── Pro ── */}
            <div className="relative p-7 rounded-2xl bg-[#1a1a2e] border border-[#c9a84c]/20 flex flex-col shadow-sm">
              {!isAnnual && (
                <div className="absolute -top-3.5 right-5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide uppercase bg-[#c9a84c]/15 border border-[#c9a84c]/35 text-[#c9a84c] whitespace-nowrap">
                  Save 20% annually
                </div>
              )}
              <div className="mb-5">
                <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
                  Pro — Bonded
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  {isAnnual && (
                    <span className="text-xl font-black text-white/25 line-through">£9.99</span>
                  )}
                  <span className="text-5xl font-black text-white">{fmt(proPrice)}</span>
                  <span className="text-white/30 text-sm">/mo{isAnnual ? "*" : ""}</span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-[#c9a84c] font-semibold mb-1">
                    You save £{proSaving}/year
                  </p>
                )}
                <p className="text-sm text-white/50 leading-relaxed italic mt-2">
                  &ldquo;For people who tried it, and realised they wanted it to remember them forever — not just for a week.&rdquo;
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Everything in Free",
                  "Unlimited messages",
                  "Permanent sovereign memory",
                  "Work OS (Orion mode)",
                  "Custom character evolution",
                  "Priority routing (Claude Sonnet)",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="text-[#c9a84c] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/hatch?plan=pro"
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all"
              >
                Start 30-day free trial →
              </Link>
              <p className="text-xs text-white/20 text-center mt-2">No charge for 30 days</p>
            </div>

            {/* ── Elite ── */}
            <div className="relative p-7 rounded-2xl bg-[#1a1a2e] border border-purple-500/20 flex flex-col shadow-sm">
              {!isAnnual && (
                <div className="absolute -top-3.5 right-5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide uppercase bg-purple-500/15 border border-purple-500/35 text-purple-300 whitespace-nowrap">
                  Save 20% annually
                </div>
              )}
              <div className="mb-5">
                <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
                  Elite — Family
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  {isAnnual && (
                    <span className="text-xl font-black text-white/25 line-through">£19</span>
                  )}
                  <span className="text-5xl font-black text-white">{fmt(elitePrice)}</span>
                  <span className="text-white/30 text-sm">/mo{isAnnual ? "*" : ""}</span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-[#c9a84c] font-semibold mb-1">
                    You save £{eliteSaving}/year
                  </p>
                )}
                <p className="text-sm text-white/50 leading-relaxed italic mt-2">
                  &ldquo;For households where five people deserve sovereign AI — not just the one who found it first.&rdquo;
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Everything in Pro",
                  "Family OS (up to 5 companions)",
                  "Parent dashboard & Guardian 24/7",
                  "All LLM models (GPT-4o, Claude Opus, Gemini)",
                  "Priority model routing",
                  "Family memory vault",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="text-purple-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/hatch?plan=elite"
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-white border-2 border-purple-500/40 hover:border-purple-500/70 hover:bg-purple-500/10 transition-all"
              >
                Start 30-day free trial →
              </Link>
              <p className="text-xs text-white/20 text-center mt-2">No charge for 30 days</p>
            </div>

            {/* ── Team ── */}
            <div className="relative p-7 rounded-2xl bg-white border border-[#1a1a2e]/10 flex flex-col">
              <div className="mb-5">
                <div className="text-xs font-bold tracking-widest uppercase text-[#1a1a2e]/40 mb-2">
                  Team — Council
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  {isAnnual && (
                    <span className="text-xl font-black text-[#1a1a2e]/25 line-through">£29.99</span>
                  )}
                  <span className="text-5xl font-black text-[#1a1a2e]">{fmt(teamPrice)}</span>
                  <span className="text-[#1a1a2e]/30 text-sm">/seat/mo{isAnnual ? "*" : ""}</span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-[#c9a84c] font-semibold mb-1">
                    You save £{teamSaving}/seat/year
                  </p>
                )}
                <p className="text-sm text-[#1a1a2e]/55 leading-relaxed italic mt-2">
                  &ldquo;For teams where every person who leaves takes institutional memory with them — and you are tired of starting from zero.&rdquo;
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Everything in Elite",
                  "Byzantine Council governance",
                  "Team sovereign memory",
                  "Admin controls & audit log",
                  "GDPR admin tools & data export",
                  "71 MCP integrations (Slack, Notion, GitHub…)",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#1a1a2e]/70">
                    <span className="text-[#c9a84c] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@meok.ai"
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-[#1a1a2e] border-2 border-[#1a1a2e]/20 hover:border-[#1a1a2e]/40 hover:bg-[#1a1a2e]/[0.03] transition-all"
              >
                Talk to us →
              </a>
              <p className="text-xs text-[#1a1a2e]/30 text-center mt-2">30-day free trial included</p>
            </div>
          </div>

          {isAnnual && (
            <p className="text-xs text-[#1a1a2e]/30 text-center mt-5">
              * Annual prices shown per month. Billed as one payment.
            </p>
          )}
        </div>
      </section>

      {/* ── "What's included free. Forever." ──────────────────────────────── */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
              What&apos;s included free. Forever.
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              Not a free trial. Not a bait-and-switch. These features are yours from the moment
              you hatch — for as long as you want them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FREE_FOREVER_FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
                <div className="w-7 h-7 rounded-full icon-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/80 font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where your money goes ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a2e]/40 block mb-3">
              Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a2e] tracking-tight mb-3">
              Where your money goes
            </h2>
            <p className="text-[#1a1a2e]/55 text-sm max-w-md mx-auto leading-relaxed">
              Not &ldquo;operational costs&rdquo;. Real percentages, real categories — because you should know what you are paying for.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {MONEY_GOES_TO.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-5 rounded-2xl bg-white border border-[#1a1a2e]/10 p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-black text-[#1a1a2e] text-base">{item.label}</span>
                      <span className="text-[#c9a84c] font-black text-lg">{item.pct}</span>
                    </div>
                    <p className="text-sm text-[#1a1a2e]/50 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The money-back guarantee ──────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-6">
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
            If MEOK doesn&apos;t feel different in 30 days, we give your money back.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-6">
            Not different in a marketing way — different in a &ldquo;this AI actually knows me&rdquo; way. If you do not feel that within 30 days, email{" "}
            <a
              href="mailto:hello@meok.ai"
              className="text-[#c9a84c] hover:underline"
            >
              hello@meok.ai
            </a>
            .{" "}
            <span className="text-white font-semibold">
              Full refund. No form. No questions. No guilt.
            </span>
          </p>
          <p className="text-white/30 text-sm">
            One person built this. One person answers the emails. This is a founder&apos;s promise — not a policy drafted by a legal team.
          </p>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────────────────── */}
      <section id="comparison-table" className="py-16 px-6 bg-[#edeae0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-10 text-center tracking-tight">
            Full comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/10">
            <table className="w-full min-w-[560px] bg-white">
              <thead>
                <tr className="border-b border-[#1a1a2e]/[0.07] bg-[#f5f0e8]">
                  <th className="text-left py-4 px-5 text-xs text-[#1a1a2e]/40 font-semibold w-1/4">
                    Feature
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-bold text-[#1a1a2e]/60">Free</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">£0</div>
                  </th>
                  <th className="py-4 px-3 text-center bg-[#c9a84c]/[0.06]">
                    <div className="text-sm font-black text-[#c9a84c]">Pro</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">{fmt(proPrice)}/mo</div>
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-bold text-purple-600">Elite</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">{fmt(elitePrice)}/mo</div>
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-bold text-[#1a1a2e]/60">Team</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">{fmt(teamPrice)}/seat</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-t border-[#1a1a2e]/[0.05] ${i % 2 === 1 ? "bg-[#f5f0e8]/40" : ""}`}
                  >
                    <td className="py-4 px-5 text-sm text-[#1a1a2e]/70 font-medium">{row.label}</td>
                    <td className="py-4 px-3 text-center">
                      <CellVal val={row.free} />
                    </td>
                    <td className="py-4 px-3 text-center bg-[#c9a84c]/[0.04]">
                      <CellVal val={row.pro} />
                    </td>
                    <td className="py-4 px-3 text-center">
                      <CellVal val={row.elite} />
                    </td>
                    <td className="py-4 px-3 text-center">
                      <CellVal val={row.team} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#1a1a2e]/30 text-center mt-4">
            All plans include the Maternal Covenant. Zero data sales. Zero ad targeting. That&apos;s
            the floor, not a feature.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a2e]/40 block mb-3">
              Questions about money
            </span>
            <h2 className="text-2xl font-black text-[#1a1a2e] tracking-tight">
              The things you actually want to know
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center bg-[#1a1a2e] relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-gold absolute -top-32 left-1/4 w-[400px] h-[400px] opacity-10" />
          <div className="blob-purple absolute -bottom-32 right-1/4 w-[400px] h-[400px] opacity-10" />
        </div>
        <div className="relative max-w-xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">The egg is there. Tap it.</h2>
          <p className="text-white/50 mb-2 leading-relaxed">
            Free forever. No credit card. An AI that will still remember this conversation in six months.
          </p>
          <p className="text-white/30 text-sm mb-8">
            Upgrade, downgrade, or stay free — always your call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm gold-glow"
            >
              Hatch free — no credit card required
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/20 hover:border-white/40 transition-all text-sm"
            >
              Compare with competitors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
