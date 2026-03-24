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
  Users,
  Key,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────

type CheckVal = string | boolean;

interface CompareRow {
  label: string;
  byok: CheckVal;
  explorer: CheckVal;
  sovereign: CheckVal;
  family: CheckVal;
}

// ─── Static data ───────────────────────────────────────────────────────────

const COMPARE_ROWS: CompareRow[] = [
  { label: "Price",               byok: "£5/mo",             explorer: "Free forever",  sovereign: "£12/mo",           family: "£29/mo" },
  { label: "Messages/day",        byok: "50 (own credits)",  explorer: "50",            sovereign: "Unlimited",         family: "Unlimited (×5)" },
  { label: "Memory",              byok: "Basic vault",       explorer: "Permanent encrypted", sovereign: "Permanent vault", family: "Permanent + shared" },
  { label: "Companions",          byok: "1",                 explorer: "1",             sovereign: "1",                 family: "Up to 5" },
  { label: "LLM access",          byok: "Your own keys",     explorer: "DeepSeek + Llama", sovereign: "Claude + GPT-4o", family: "All LLMs incl. GPT-4o + Claude Sonnet" },
  { label: "Birth ceremony",      byok: true,                explorer: true,            sovereign: true,                family: true },
  { label: "Guardian alerts",     byok: false,               explorer: "Basic",         sovereign: "24/7 protection",   family: "Family dashboard" },
  { label: "Work OS (Orion + Riri + Hourman)", byok: false,  explorer: false,           sovereign: true,                family: true },
  { label: "Morning briefing",    byok: false,               explorer: false,           sovereign: true,                family: true },
  { label: "Advanced care scoring", byok: false,             explorer: false,           sovereign: true,                family: true },
  { label: "Child safe mode",     byok: false,               explorer: false,           sovereign: false,               family: true },
  { label: "Elder care companion", byok: false,              explorer: false,           sovereign: false,               family: true },
  { label: "Ralph Mode (full autonomy agent)", byok: false,  explorer: false,           sovereign: false,               family: true },
  { label: "Shared family memory vault", byok: false,        explorer: false,           sovereign: false,               family: true },
  { label: "Full data export",    byok: true,                explorer: true,            sovereign: true,                family: true },
  { label: "Zero data selling",   byok: true,                explorer: true,            sovereign: true,                family: true },
];

const FAQ_ITEMS = [
  {
    q: "Is MEOK Explorer really free forever?",
    a: "Yes, genuinely free. 50 messages per day. No trial. No expiry. No credit card. We built Explorer as a permanent tier because we believe everyone deserves sovereign AI — not just people who can afford a subscription. There is no hidden catch, no sudden paywall after 30 days. Free forever means free forever.",
  },
  {
    q: "What happens to my memory if I cancel?",
    a: "Your memories are yours. You can export everything at any time as a full JSON archive from your account settings. If you cancel a paid plan, your data remains accessible for 30 days so you can download it. We delete your data on request within 30 days — including from all backups. We never hold your memories hostage.",
  },
  {
    q: "How is MEOK different from ChatGPT Plus?",
    a: "ChatGPT Plus costs £16/month and forgets you between sessions — every conversation starts from scratch. MEOK Sovereign costs £12/month and remembers everything, encrypted, in a permanent vault that is yours and never used for training. MEOK also includes Work OS tools (Orion, Riri, Hourman), Guardian protection, and morning briefings — things ChatGPT does not offer. You get more for less, with the one thing ChatGPT cannot give you: continuity.",
  },
  {
    q: "Can I downgrade after upgrading?",
    a: "Yes. Downgrade at any time in your account settings. Your companion retains all its memories — nothing is lost. The downgrade takes effect at the end of your current billing period, so you keep everything you paid for until then.",
  },
  {
    q: "What's included in annual billing?",
    a: "Annual billing saves you £24/year on Sovereign (£120 vs £144) and £58/year on Sovereign Family (£290 vs £348). You pay upfront for the year. If you cancel within 30 days of any annual renewal, we refund the remaining months — no questions.",
  },
  {
    q: "Do you use my conversations to train AI models?",
    a: "Never. Your conversations are yours. They are encrypted, stored in your sovereign vault, and never passed to any model provider as training data. This is enforced at the architecture level — not just a policy promise.",
  },
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
    detail: "We pay Claude, DeepSeek, GPT-4o and Llama providers so you don't have to separately.",
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
      name: "MEOK AI Labs",
      applicationCategory: "ProductivityApplication",
      offers: [
        {
          "@type": "Offer",
          name: "BYOK",
          price: "5",
          priceCurrency: "GBP",
          billingIncrement: "P1M",
          description: "Bring your own API keys. Platform access at a flat monthly fee.",
        },
        {
          "@type": "Offer",
          name: "Explorer",
          price: "0",
          priceCurrency: "GBP",
          description: "Sovereign AI companion, free forever. No credit card.",
        },
        {
          "@type": "Offer",
          name: "Sovereign",
          price: "12",
          priceCurrency: "GBP",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Sovereign Family",
          price: "29",
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
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1a1a2e]/[0.06] text-[#1a1a2e]/30 font-bold text-sm">
        —
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

  const sovereignMonthly = 12;
  const familyMonthly = 29;

  const sovereignAnnualTotal = 120;
  const familyAnnualTotal = 290;

  const sovereignAnnualPerMonth = 10;
  const familyAnnualPerMonth = Math.round((familyAnnualTotal / 12) * 100) / 100;

  const sovereignPrice = isAnnual ? sovereignAnnualPerMonth : sovereignMonthly;
  const familyPrice = isAnnual ? familyAnnualPerMonth : familyMonthly;

  const sovereignSaving = sovereignMonthly * 12 - sovereignAnnualTotal;
  const familySaving = familyMonthly * 12 - familyAnnualTotal;

  const fmt = (n: number) => `£${n % 1 === 0 ? n.toFixed(0) : n.toFixed(0)}`;

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />

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
            Free gets you a sovereign AI companion, 50 messages a day, permanent encrypted Sovereign Memory, and a Birth Ceremony. No expiry. No pressure. That is not a trial — that is a permanent offer.
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

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a1a2e]/10 text-[#1a1a2e]/60 text-xs font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              30-day money-back guarantee on all paid plans
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a1a2e]/10 text-[#1a1a2e]/60 text-xs font-semibold shadow-sm">
              No credit card required for Explorer
            </div>
          </div>

          {/* vs competitors */}
          <p className="text-xs text-[#1a1a2e]/40 mb-8">
            ChatGPT Plus £16 — forgets you every session &nbsp;·&nbsp;{" "}
            <span className="text-[#c9a84c] font-semibold">MEOK Sovereign £12 — remembers everything</span>
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
                — save more
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing cards ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

            {/* ── BYOK ── */}
            <div className="relative p-7 rounded-2xl bg-white border border-[#1a1a2e]/10 flex flex-col shadow-sm">
              <div className="absolute -top-3.5 right-5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide uppercase bg-[#1a1a2e]/5 border border-[#1a1a2e]/15 text-[#1a1a2e]/50 whitespace-nowrap">
                🔑 Self-hosted
              </div>
              <div className="mb-5 mt-2">
                <div className="text-xs font-bold tracking-widest uppercase text-[#1a1a2e]/40 mb-2">
                  BYOK
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-black text-[#1a1a2e]">£5</span>
                  <span className="text-[#1a1a2e]/30 text-sm">/mo</span>
                </div>
                <p className="text-xs text-[#1a1a2e]/40 font-semibold mt-1">
                  Your keys. Your models. Your control.
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Bring your own OpenAI, Anthropic, or Groq keys",
                  "50 messages/day (your API credits)",
                  "No MEOK LLM costs — pay providers directly",
                  "Birth ceremony + memory + companion",
                  "Memory vault (basic)",
                  "Community support",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#1a1a2e]/70">
                    <span className="text-[#c9a84c] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/checkout?plan=byok_monthly"
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-[#1a1a2e] bg-[#1a1a2e]/5 border-2 border-[#1a1a2e]/15 hover:bg-[#1a1a2e]/10 transition-all"
              >
                Get started →
              </Link>
              <p className="text-xs text-[#1a1a2e]/30 text-center mt-2">
                Platform fee only. Keys stay yours.
              </p>
            </div>

            {/* ── Explorer (Free) ── */}
            <div className="relative p-7 rounded-2xl bg-white border border-[#1a1a2e]/10 flex flex-col shadow-sm">
              <div className="mb-5 mt-2">
                <div className="text-xs font-bold tracking-widest uppercase text-[#1a1a2e]/40 mb-2">
                  Explorer
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-black text-[#1a1a2e]">£0</span>
                  <span className="text-[#1a1a2e]/30 text-sm">/ forever</span>
                </div>
                <p className="text-xs text-[#1a1a2e]/40 font-semibold mt-1">
                  No card. No trial. Free forever.
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "50 messages/day",
                  "Permanent encrypted Sovereign Memory",
                  "1 companion",
                  "6 archetype choices",
                  "Birth ceremony",
                  "Basic Guardian alerts",
                  "Multi-LLM (DeepSeek + Llama)",
                  "Mobile app (coming soon)",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#1a1a2e]/70">
                    <span className="text-[#c9a84c] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/birth"
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-[#1a1a2e] bg-[#c9a84c]/20 border-2 border-[#c9a84c]/40 hover:bg-[#c9a84c]/30 transition-all"
              >
                Hatch free 🥚
              </Link>
              <p className="text-xs text-[#1a1a2e]/30 text-center mt-2">
                No card. No trial. Free forever.
              </p>
            </div>

            {/* ── Sovereign ── */}
            <div className="relative p-7 rounded-2xl bg-[#1a1a2e] border-2 border-[#c9a84c] ring-2 ring-[#c9a84c] ring-offset-2 ring-offset-[#f5f0e8] flex flex-col shadow-[0_0_40px_rgba(201,168,76,0.22)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-[#c9a84c] text-xs font-black text-[#1a1a2e] whitespace-nowrap shadow-lg">
                Most popular
              </div>
              <div className="mb-5 mt-2">
                <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
                  Sovereign
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  {isAnnual && (
                    <span className="text-xl font-black text-white/25 line-through">£12</span>
                  )}
                  <span className="text-5xl font-black text-white">{fmt(sovereignPrice)}</span>
                  <span className="text-white/30 text-sm">/mo{isAnnual ? "*" : ""}</span>
                </div>
                {isAnnual ? (
                  <p className="text-xs text-[#c9a84c] font-semibold mb-1">
                    £120/year — you save £{sovereignSaving}
                  </p>
                ) : (
                  <p className="text-xs text-white/35 font-semibold mb-1">
                    or £10/mo billed annually — save £{sovereignSaving}/yr
                  </p>
                )}
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Everything in Explorer",
                  "Unlimited messages",
                  "Permanent encrypted memory vault",
                  "1 companion (all archetypes available)",
                  "Claude + GPT-4o access",
                  "Work OS (Orion + Riri + Hourman)",
                  "Guardian 24/7 protection",
                  "Advanced care scoring",
                  "Morning briefing",
                  "Priority support",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <span className="text-[#c9a84c] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  window.location.href = isAnnual
                    ? "/checkout?plan=sovereign_annual"
                    : "/checkout?plan=sovereign_monthly";
                }}
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all gold-glow cursor-pointer"
              >
                Begin Sovereignty →
              </button>
              <p className="text-xs text-white/25 text-center mt-2">
                Cancel anytime. Your memory stays yours.
              </p>
            </div>

            {/* ── Sovereign Family ── */}
            <div className="relative p-7 rounded-2xl bg-[#1a1a2e] border border-white/10 flex flex-col shadow-sm">
              <div className="absolute -top-3.5 right-5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide uppercase bg-white/10 border border-white/20 text-white/70 whitespace-nowrap">
                For families
              </div>
              <div className="mb-5 mt-2">
                <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
                  Sovereign Family
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  {isAnnual && (
                    <span className="text-xl font-black text-white/25 line-through">£29</span>
                  )}
                  <span className="text-5xl font-black text-white">{fmt(familyPrice)}</span>
                  <span className="text-white/30 text-sm">/mo{isAnnual ? "*" : ""}</span>
                </div>
                {isAnnual ? (
                  <p className="text-xs text-[#c9a84c] font-semibold mb-1">
                    £290/year — you save £{familySaving}
                  </p>
                ) : (
                  <p className="text-xs text-white/35 font-semibold mb-1">
                    or £24/mo billed annually — save £{familySaving}/yr
                  </p>
                )}
                <div className="flex items-center gap-1.5 mt-2">
                  <Users className="w-3.5 h-3.5 text-white/40" />
                  <span className="text-xs text-white/40">Up to 5 family members</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Everything in Sovereign (×5)",
                  "Family Guardian dashboard",
                  "School-safe child mode",
                  "Elder care companion",
                  "Ralph Mode (full autonomy agent)",
                  "Shared family memory vault",
                  "All LLMs incl. GPT-4o + Claude Sonnet",
                  "Dedicated family support",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <span className="text-[#c9a84c] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  window.location.href = isAnnual
                    ? "/checkout?plan=family_annual"
                    : "/checkout?plan=family_monthly";
                }}
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-white border-2 border-[#c9a84c]/40 hover:border-[#c9a84c]/70 hover:bg-[#c9a84c]/10 transition-all cursor-pointer"
              >
                Protect your family →
              </button>
              <p className="text-xs text-white/25 text-center mt-2">
                One bill. Five companions. Real protection.
              </p>
            </div>
          </div>

          {isAnnual && (
            <p className="text-xs text-[#1a1a2e]/30 text-center mt-5">
              * Annual prices shown per month. Billed as one payment upfront.
            </p>
          )}

          {/* Overage note */}
          <p className="text-xs text-[#1a1a2e]/40 text-center mt-6 max-w-lg mx-auto leading-relaxed">
            <span className="font-semibold text-[#1a1a2e]/55">Need more?</span>{" "}
            Sovereign users can add message packs: 500 extra messages for £2. Family packs available.
          </p>
        </div>
      </section>

      {/* ── BYOK — Bring Your Own Keys ────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#edeae0]">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[#1a1a2e]/10 bg-white overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8">
              {/* Badge */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a2e]/5 border border-[#1a1a2e]/10 flex items-center justify-center">
                  <Key className="w-6 h-6 text-[#1a1a2e]/50" />
                </div>
              </div>
              {/* Copy */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <span className="text-xl font-black text-[#1a1a2e]">BYOK — Bring Your Own Keys</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#1a1a2e]/5 text-[#1a1a2e]/40 border border-[#1a1a2e]/10 tracking-wide uppercase">Coming P2</span>
                </div>
                <p className="text-sm text-[#1a1a2e]/55 leading-relaxed mb-3">
                  Connect your own Anthropic, OpenAI, or Mistral API keys. MEOK charges a flat platform fee — zero inference markup, ever. You control your model costs; we provide the OS layer.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-[#1a1a2e]/40">
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c9a84c]" /> Full companion &amp; memory</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c9a84c]" /> Zero inference markup</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c9a84c]" /> Any model, any provider</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c9a84c]" /> Keys encrypted, never logged</span>
                </div>
              </div>
              {/* Price + CTA */}
              <div className="flex-shrink-0 text-center sm:text-right">
                <div className="text-3xl font-black text-[#1a1a2e]">£5<span className="text-base font-semibold text-[#1a1a2e]/40">/mo</span></div>
                <div className="text-xs text-[#1a1a2e]/30 mb-3">Platform fee only</div>
                <button
                  onClick={() => window.location.href = "/waitlist?plan=byok"}
                  className="block w-full py-2.5 px-5 rounded-full text-sm font-bold text-[#1a1a2e] bg-[#1a1a2e]/5 border border-[#1a1a2e]/15 hover:bg-[#1a1a2e]/10 transition-all cursor-pointer whitespace-nowrap"
                >
                  Join waitlist →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's free. Forever. ──────────────────────────────────────────── */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "50 messages/day",
              "Permanent Sovereign Memory",
              "1 sovereign companion",
              "Birth Ceremony",
              "6 archetype choices",
              "Basic Guardian alerts",
              "Multi-LLM (DeepSeek + Llama)",
              "Full data export — always",
            ].map((f) => (
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

      {/* ── Money-back guarantee ──────────────────────────────────────────── */}
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
            <a href="mailto:hello@meok.ai" className="text-[#c9a84c] hover:underline">
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

      {/* ── Comparison table ──────────────────────────────────────────────── */}
      <section id="comparison-table" className="py-16 px-6 bg-[#edeae0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-10 text-center tracking-tight">
            Full comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/10">
            <table className="w-full min-w-[680px] bg-white">
              <thead>
                <tr className="border-b border-[#1a1a2e]/[0.07] bg-[#f5f0e8]">
                  <th className="text-left py-4 px-5 text-xs text-[#1a1a2e]/40 font-semibold w-1/4">
                    Feature
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-bold text-[#1a1a2e]/60">BYOK</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">£5/mo</div>
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-bold text-[#1a1a2e]/60">Explorer</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">Free forever</div>
                  </th>
                  <th className="py-4 px-3 text-center bg-[#c9a84c]/[0.06]">
                    <div className="text-sm font-black text-[#c9a84c]">Sovereign</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">
                      {isAnnual ? "£10/mo*" : "£12/mo"}
                    </div>
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-bold text-[#1a1a2e]/60">Sovereign Family</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">
                      {isAnnual ? "£24/mo*" : "£29/mo"}
                    </div>
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
                      <CellVal val={row.byok} />
                    </td>
                    <td className="py-4 px-3 text-center">
                      <CellVal val={row.explorer} />
                    </td>
                    <td className="py-4 px-3 text-center bg-[#c9a84c]/[0.04]">
                      <CellVal val={row.sovereign} />
                    </td>
                    <td className="py-4 px-3 text-center">
                      <CellVal val={row.family} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#1a1a2e]/30 text-center mt-4">
            All plans include zero data selling and zero ad targeting. That&apos;s the floor, not a feature.
            {isAnnual && " * Annual prices shown per month, billed upfront."}
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a2e]/40 block mb-3">
              Questions about MEOK
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
              href="/birth"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm gold-glow"
            >
              Hatch free 🥚 — no credit card required
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

    </div>
  );
}
