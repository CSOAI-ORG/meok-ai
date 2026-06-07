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
  HelpCircle,
  Sparkles,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────

type CheckVal = string | boolean;

interface CompareRow {
  label: string;
  byok: CheckVal;
  explorer: CheckVal;
  sovereign: CheckVal;
  pro: CheckVal;
}

// ─── Static data ───────────────────────────────────────────────────────────

const COMPARE_ROWS: CompareRow[] = [
  { label: "Price",               byok: "£5/mo",             explorer: "Free forever",  sovereign: "£9/mo",            pro: "£19/mo" },
  { label: "Messages/day",        byok: "100 (own credits)", explorer: "50",            sovereign: "Unlimited",         pro: "Unlimited" },
  { label: "Memory",              byok: "Basic vault",       explorer: "Permanent encrypted", sovereign: "Permanent vault", pro: "Permanent + shared" },
  { label: "Companions",          byok: "1",                 explorer: "1",             sovereign: "3",                 pro: "7" },
  { label: "LLM access",          byok: "Your own keys",     explorer: "DeepSeek + Llama", sovereign: "Claude + GPT-4o", pro: "All LLMs incl. GPT-4o + Claude Sonnet" },
  { label: "Birth ceremony",      byok: true,                explorer: true,            sovereign: true,                pro: true },
  { label: "Guardian alerts",     byok: false,               explorer: "Basic",         sovereign: "24/7 protection",   pro: "24/7 + Family dashboard" },
  { label: "Work OS (Orion + Riri + Hourman)", byok: false,  explorer: false,           sovereign: true,                pro: true },
  { label: "Morning briefing",    byok: false,               explorer: false,           sovereign: true,                pro: true },
  { label: "Advanced care scoring", byok: false,             explorer: false,           sovereign: true,                pro: true },
  { label: "Ralph Mode (full autonomy agent)", byok: false,  explorer: false,           sovereign: false,               pro: true },
  { label: "Family Circle",       byok: false,               explorer: false,           sovereign: false,               pro: true },
  { label: "Family plan (up to 5 members)", byok: false,     explorer: false,           sovereign: false,               pro: true },
  { label: "Priority API access", byok: false,               explorer: false,           sovereign: false,               pro: true },
  { label: "Shared family memory vault", byok: false,        explorer: false,           sovereign: false,               pro: true },
  { label: "Full data export",    byok: true,                explorer: true,            sovereign: true,                pro: true },
  { label: "Zero data selling",   byok: true,                explorer: true,            sovereign: true,                pro: true },
];

const FAQ_ITEMS = [
  {
    q: "Is MEOK Explorer really free forever?",
    a: "Yes, genuinely free. 100 messages per day. No trial. No expiry. No credit card. We built Explorer as a permanent tier because we believe everyone deserves sovereign AI — not just people who can afford a subscription. There is no hidden catch, no sudden paywall after 30 days. Free forever means free forever.",
  },
  {
    q: "What happens to my memory if I cancel?",
    a: "Your memories are yours. You can export everything at any time as a full JSON archive from your account settings. If you cancel a paid plan, your data remains accessible for 30 days so you can download it. We delete your data on request within 30 days — including from all backups. We never hold your memories hostage.",
  },
  {
    q: "How is MEOK different from ChatGPT Plus?",
    a: "ChatGPT Plus costs £16/month and forgets you between sessions — every conversation starts from scratch. MEOK Sovereign costs £9/month and remembers everything, encrypted, in a permanent vault that is yours and never used for training. MEOK also includes Work OS tools (Orion, Riri, Hourman), Guardian protection, and morning briefings — things ChatGPT does not offer. You get more for less, with the one thing ChatGPT cannot give you: continuity.",
  },
  {
    q: "Can I downgrade after upgrading?",
    a: "Yes. Downgrade at any time in your account settings. Your companion retains all its memories — nothing is lost. The downgrade takes effect at the end of your current billing period, so you keep everything you paid for until then.",
  },
  {
    q: "What's included in annual billing?",
    a: "Annual billing saves you £18/year on Sovereign (£90 vs £108) and £38/year on Sovereign Pro (£190 vs £228). You pay upfront for the year. If you cancel within 30 days of any annual renewal, we refund the remaining months — no questions.",
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

// ─── Quiz data ─────────────────────────────────────────────────────────────

type QuizAnswer = { label: string; value: string };

interface QuizQuestion {
  id: string;
  question: string;
  answers: QuizAnswer[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "useCase",
    question: "What will you mainly use your companion for?",
    answers: [
      { label: "Personal support & memory", value: "personal" },
      { label: "Work tasks, planning & productivity", value: "work" },
      { label: "Family — kids, elders, multiple people", value: "family" },
      { label: "Connecting my own AI keys / models", value: "byok" },
    ],
  },
  {
    id: "teamSize",
    question: "How many people need an AI companion?",
    answers: [
      { label: "Just me", value: "solo" },
      { label: "Me + 1 other", value: "couple" },
      { label: "3 – 5 people (family or team)", value: "group" },
    ],
  },
  {
    id: "budget",
    question: "What feels right for your monthly budget?",
    answers: [
      { label: "£0 — free is perfect", value: "free" },
      { label: "Under £15/mo", value: "low" },
      { label: "£15 – £30/mo", value: "mid" },
      { label: "Flexible — I want the best", value: "high" },
    ],
  },
];

type QuizResult = { plan: string; headline: string; sub: string; href: string; cta: string };

function resolveQuizResult(answers: Record<string, string>): QuizResult {
  const { useCase, teamSize, budget } = answers;

  if (useCase === "byok")
    return { plan: "BYOK", headline: "BYOK — Bring Your Own Keys", sub: "You want full control over models and costs. BYOK gives you the companion OS at a flat £5/mo — zero inference markup.", href: "/waitlist?plan=byok", cta: "Join BYOK waitlist →" };

  if (teamSize === "group" || useCase === "family")
    return { plan: "Family", headline: "Family — for households that need AI together", sub: "Up to 5 companions, shared family vault, full Guardian dashboard, and Ralph Mode autonomy — all for £29/month.", href: "/checkout?plan=family_monthly", cta: "Go Family →" };

  if (budget === "free")
    return { plan: "Explorer", headline: "MEOK Explorer — free forever", sub: "50 messages/day, permanent encrypted memory, and a Birth Ceremony. No credit card, no trial, no expiry.", href: "/birth", cta: "Hatch free 🥚" };

  if (useCase === "work" || budget === "low" || budget === "mid")
    return { plan: "Sovereign", headline: "Sovereign — the one that knows you", sub: "Unlimited messages, Claude + GPT-4o, Work OS, Guardian 24/7, and a memory vault that grows with you. All for £9/mo.", href: "/checkout?plan=sovereign_monthly", cta: "Begin Sovereignty →" };

  return { plan: "Sovereign", headline: "Sovereign — the one that knows you", sub: "Unlimited messages, the full model suite, and everything MEOK offers. Most people who want the best land here.", href: "/checkout?plan=sovereign_monthly", cta: "Begin Sovereignty →" };
}

// ─── Quiz component ─────────────────────────────────────────────────────────

function PlanQuiz() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentQ = QUIZ_QUESTIONS[step];

  function pick(qId: string, value: string) {
    const next = { ...answers, [qId]: value };
    setAnswers(next);
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setResult(resolveQuizResult(next));
    }
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setResult(null);
  }

  return (
    <div className="rounded-2xl border border-[#1a1a2e]/10 bg-white overflow-hidden">
      {/* Header toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-[#f5f0e8]/50 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-4 h-4 text-[#c9a84c]" />
          </div>
          <div>
            <span className="font-black text-sm text-[#1a1a2e] block">Which plan is right for me?</span>
            <span className="text-xs text-[#1a1a2e]/40">3 quick questions — get a personal recommendation</span>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-[#1a1a2e]/[0.06]">
          {result ? (
            /* Result state */
            <div className="pt-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider">Your recommendation</span>
              </div>
              <div className="rounded-xl bg-[#c9a84c]/08 border border-[#c9a84c]/25 p-5 mb-4" style={{ background: "rgba(201,168,76,0.06)" }}>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-black mb-3">
                  {result.plan}
                </div>
                <p className="font-black text-[#1a1a2e] text-base mb-1">{result.headline}</p>
                <p className="text-sm text-[#1a1a2e]/60 leading-relaxed">{result.sub}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={result.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all"
                >
                  {result.cta}
                </a>
                <button
                  onClick={reset}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#1a1a2e]/50 border border-[#1a1a2e]/15 hover:text-[#1a1a2e] hover:border-[#1a1a2e]/30 transition-all"
                >
                  Start again
                </button>
              </div>
            </div>
          ) : (
            /* Question state */
            <div className="pt-5">
              {/* Progress */}
              <div className="flex items-center gap-2 mb-4">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      i <= step ? "bg-[#c9a84c]" : "bg-[#1a1a2e]/10"
                    }`}
                  />
                ))}
                <span className="text-xs text-[#1a1a2e]/30 flex-shrink-0 ml-1">
                  {step + 1}/{QUIZ_QUESTIONS.length}
                </span>
              </div>
              <p className="font-bold text-[#1a1a2e] text-sm mb-4">{currentQ.question}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentQ.answers.map((ans) => (
                  <button
                    key={ans.value}
                    onClick={() => pick(currentQ.id, ans.value)}
                    className="text-left px-4 py-3 rounded-xl text-sm font-medium text-[#1a1a2e]/70 border border-[#1a1a2e]/10 bg-[#f5f0e8]/50 hover:border-[#c9a84c]/40 hover:bg-[#c9a84c]/05 hover:text-[#1a1a2e] transition-all"
                    style={{ background: undefined }}
                  >
                    {ans.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

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
          price: "19",
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
           name: "Starter",
           price: "49",
           priceCurrency: "GBP",
           billingIncrement: "P1M",
           description: "Professional AI with persistent memory and 24/7 Guardian protection.",
         },
        {
           "@type": "Offer",
           name: "Pro",
           price: "149",
           priceCurrency: "GBP",
           billingIncrement: "P1M",
           description: "Full compliance suite, 12 framework crosswalks, 2000 API calls/day, priority support.",
         },
         {
           "@type": "Offer",
           name: "Defence",
           price: "999",
           priceCurrency: "GBP",
           billingIncrement: "P1M",
           description: "All 208 servers, unlimited API calls, SSO, SLA, custom verify domain.",
         },
         {
           "@type": "Offer",
           name: "Enterprise",
           price: "2499",
           priceCurrency: "GBP",
           billingIncrement: "P1M",
           description: "Multi-BU audit-grade separation, white-label, dedicated CSM, air-gapped deployment.",
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

export default function PricingClient() {
  const [isAnnual, setIsAnnual] = useState(false);

  const sovereignMonthly = 49;
  const proMonthly = 149;

  const sovereignAnnualTotal = 490;
  const proAnnualTotal = 1490;

  const sovereignAnnualPerMonth = Math.round((sovereignAnnualTotal / 12) * 100) / 100;
  const proAnnualPerMonth = Math.round((proAnnualTotal / 12) * 100) / 100;

  const sovereignPrice = isAnnual ? sovereignAnnualPerMonth : sovereignMonthly;
  const proPrice = isAnnual ? proAnnualPerMonth : proMonthly;

  const sovereignSaving = sovereignMonthly * 12 - sovereignAnnualTotal;
  const proSaving = proMonthly * 12 - proAnnualTotal;

  const fmt = (n: number) => `£${n % 1 === 0 ? n.toFixed(0) : n.toFixed(0)}`;

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />

      {/* ── Compliance-traffic safety banner ────────────────────────────────
          This /pricing page sells the MEOK companion product (Sovereign / BYOK
          / Family). Compliance buyers (EU AI Act, DORA, NIS2, CSRD, GDPR) want
          a different ladder — they are routed to councilof.ai via this banner
          so they don't bounce thinking we are a chatbot. Added 17 May 2026. */}
      <div className="bg-[#1a1a2e] text-white px-4 py-3 text-center text-sm">
        <strong>Looking for AI compliance pricing?</strong>{" "}
        <span className="text-white/70">EU AI Act · DORA · NIS2 · CSRD · GDPR · ISO 42001 · NIST AI RMF.</span>{" "}
        <a href="https://councilof.ai#offers" className="text-[#c9a84c] font-bold underline underline-offset-2">
          See compliance ladder on councilof.ai →
        </a>
      </div>

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
            <span className="text-[#c9a84c] font-semibold">MEOK Sovereign £9 — remembers everything</span>
            &nbsp;·&nbsp;{" "}
            <a
              href="#comparison-table"
              className="underline underline-offset-2 hover:text-[#c9a84c] transition-colors"
            >
              Compare all plans ↓
            </a>
          </p>

          {/* Monthly / Annual toggle — 83.3 */}
          <div className="flex flex-col items-center gap-2">
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
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  isAnnual
                    ? "bg-[#1a1a2e] text-white shadow-sm"
                    : "text-[#1a1a2e]/50 hover:text-[#1a1a2e]"
                }`}
              >
                Annual
                {!isAnnual && (
                  <span className="ml-1.5 text-[10px] font-black text-[#c9a84c] bg-[#c9a84c]/15 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                    20% off
                  </span>
                )}
              </button>
            </div>
            {isAnnual && (
              <div className="flex flex-wrap justify-center gap-2 mt-0.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/35 text-[#c9a84c] text-xs font-black">
                  Save £{sovereignSaving}/yr on Sovereign
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/35 text-[#c9a84c] text-xs font-black">
                  Save £{proSaving}/yr on Sovereign Pro
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Compliance MCP pricing (separate product line for buyers from PyPI/MCP marketplaces) ── */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider mb-4" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.4)" }}>
              FOR COMPLIANCE + AI GOVERNANCE TEAMS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              EU AI Act, DORA, NIS2 &amp; CRA — signed compliance
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Open-source MCP servers for every major EU regulation. HMAC-signed attestations any auditor can verify cryptographically. Found us via PyPI / Glama / MCPize? Pricing for that product line below.
            </p>
          </div>

          {/* ── NEW: PAYG callout (no-subscription pay-per-call) ─────────── */}
          <div className="mb-8 rounded-2xl bg-white/5 border border-[#c9a84c]/40 p-6 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.18)" }}>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="flex-1">
              <div className="text-xs font-black tracking-wider text-[#c9a84c] mb-1">NEW · NO SUBSCRIPTION</div>
              <h3 className="text-xl font-black text-white mb-1">PAYG — £0.05 per call across 7 compliance MCPs</h3>
              <p className="text-sm text-white/60">
                One <code className="text-[#c9a84c]">MEOK_PAYG_KEY</code> env var. £0.05 per tool call across EU AI Act, DORA, NIS2, CRA, CSRD, GDPR, and ISO 42001 MCPs. Top up once, deduct per call. Stripe + USDC-on-Base accepted. No monthly bill.
              </p>
            </div>
            <a href="https://councilof.ai/payg" className="px-5 py-3 rounded-xl bg-[#c9a84c] text-[#1a1a2e] font-black text-sm whitespace-nowrap hover:bg-[#d4b258] transition">
              Start PAYG →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-start">
            {/* Free */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col">
              <div className="text-xs font-black tracking-wider text-white/50 mb-2">FREE FOREVER</div>
              <h3 className="text-2xl font-black text-white mb-1">Open Source</h3>
              <div className="text-3xl font-black text-white mb-4">£0</div>
              <ul className="text-sm text-white/70 space-y-2 mb-6 flex-1">
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> All 26 MEOK MCP servers (MIT)</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Email-only signed attestations</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Public verify URLs</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> 1-year cert validity</li>
              </ul>
              <a href="https://github.com/CSOAI-ORG" className="block text-center py-3 rounded-xl border border-white/20 text-white/80 font-bold text-sm hover:bg-white/10 transition">View on GitHub →</a>
            </div>

            {/* Pro — most popular */}
            <div className="rounded-2xl border-2 border-[#c9a84c] p-6 flex flex-col relative" style={{ background: "rgba(201,168,76,0.12)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#c9a84c] text-[#1a1a2e] text-xs font-black tracking-wider">MOST POPULAR</div>
              <div className="text-xs font-black tracking-wider text-[#c9a84c] mb-2">SCALE-UP / DEPT</div>
              <h3 className="text-2xl font-black text-white mb-1">Pro</h3>
              <div className="text-3xl font-black text-white mb-1">£149<span className="text-base font-normal text-white/50">/mo</span></div>
              <div className="text-xs text-white/50 mb-4">or £1,490/yr (save £298)</div>
              <ul className="text-sm text-white/70 space-y-2 mb-6 flex-1">
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Everything in Free</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Your own HMAC signing key</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Custom verify domain</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> No 'free tier' marker on certs</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Slack support channel</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Unlimited attestations</li>
              </ul>
              <a href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j?prefilled_promo_code=LAUNCH50" className="block text-center py-3 rounded-xl bg-[#c9a84c] text-[#1a1a2e] font-black text-sm hover:bg-[#d4b258] transition">Subscribe Monthly →</a>
              <a href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j?prefilled_promo_code=LAUNCH50" className="block text-center mt-2 text-xs text-white/70 font-bold hover:text-white">50% off 6 months with LAUNCH50 →</a>
              <p className="text-[11px] text-white/40 mt-2 text-center">Cancel anytime · 14-day refund</p>
            </div>

            {/* Defence */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col">
              <div className="text-xs font-black tracking-wider text-white/50 mb-2">REGULATED INDUSTRIES</div>
              <h3 className="text-2xl font-black text-white mb-1">Defence</h3>
              <div className="text-3xl font-black text-white mb-1">£499<span className="text-base font-normal text-white/50">/mo</span></div>
              <div className="text-xs text-white/50 mb-4">or £4,790/yr · SSO + SLA + custom verify domain</div>
              <ul className="text-sm text-white/70 space-y-2 mb-6 flex-1">
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Everything in Pro</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> All 208 MCP servers</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Unlimited API calls</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> SSO / SAML</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> On-premise option</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> 99.9% SLA</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Custom verify domain</li>
              </ul>
              <a href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j" className="block text-center py-3 rounded-xl border-2 border-white/20 text-white font-black text-sm hover:bg-white/10 transition">Subscribe Monthly →</a>
              <a href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j" className="block text-center mt-2 text-xs text-white/70 font-bold hover:text-white">Defence £499/mo →</a>
              <a href="mailto:nicholas@meok.ai?subject=MEOK%20Defence%20plan%20question" className="block text-center mt-1 text-[11px] text-white/40 hover:text-white/60">Questions? Email us →</a>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col">
              <div className="text-xs font-black tracking-wider text-white/50 mb-2">MULTI-BU + GLOBAL</div>
              <h3 className="text-2xl font-black text-white mb-1">Enterprise</h3>
              <div className="text-3xl font-black text-white mb-1">£2,499<span className="text-base font-normal text-white/50">/mo</span></div>
              <div className="text-xs text-white/50 mb-4">or £24,990/yr (save £4,998) · Dedicated CSM + white-label</div>
              <ul className="text-sm text-white/70 space-y-2 mb-6 flex-1">
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Everything in Defence</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Multi-BU audit-grade separation</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Reseller white-label option</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Dedicated CSM</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Pay by invoice / PO accepted</li>
                <li className="flex gap-2"><span className="text-[#c9a84c]">✓</span> Air-gapped deployment option</li>
              </ul>
              <a href="mailto:nicholas@meok.ai?subject=MEOK%20Enterprise%20PO%2Finvoice" className="block text-center py-3 rounded-xl border-2 border-[#c9a84c] text-[#c9a84c] font-black text-sm hover:bg-[#c9a84c] hover:text-[#1a1a2e] transition">Contact Sales →</a>
              <a href="mailto:nicholas@meok.ai?subject=MEOK%20Enterprise%20PO%2Finvoice" className="block text-center mt-1 text-[11px] text-white/40 hover:text-white/60">Need PO / invoice? Email us →</a>
            </div>
          </div>

          {/* NIS2 panic-buy banner */}
          <div className="mt-8 rounded-2xl border-2 border-[#c9a84c]/40 p-6 flex flex-col md:flex-row gap-4 items-center md:justify-between" style={{ background: "rgba(201,168,76,0.06)" }}>
            <div>
              <div className="text-xs font-black tracking-wider text-[#c9a84c] mb-2">🇩🇪 GERMANY NIS2 — DEADLINE PASSED 6 MARCH 2026</div>
              <h3 className="text-xl font-black text-white mb-1">Late-filing rapid-response</h3>
              <p className="text-sm text-white/60">Of ~30K obligated entities, only 11.5K registered by deadline. ~18K are non-compliant right now.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j" className="px-5 py-3 rounded-xl bg-white text-[#1a1a2e] font-black text-sm whitespace-nowrap">£99 self-serve →</a>
              <a href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j" className="px-5 py-3 rounded-xl bg-[#c9a84c] text-[#1a1a2e] font-black text-sm whitespace-nowrap">£499 done-for-you →</a>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-white/50 mb-3">Looking for AI companion / personal MEOK pricing?</p>
            <a href="#consumer-pricing" className="text-[#c9a84c] underline text-sm font-bold">See companion pricing below ↓</a>
          </div>
        </div>
      </section>

      {/* ── Consumer / AI Companion pricing cards ─────────────────────────── */}
      <section id="consumer-pricing" className="py-16 px-6">
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
                  "1 AI companion",
                  "Core features",
                  "Permanent encrypted Sovereign Memory",
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
                    <span className="text-xl font-black text-white/25 line-through">£9</span>
                  )}
                  <span className="text-5xl font-black text-white">{fmt(sovereignPrice)}</span>
                  <span className="text-white/30 text-sm">/mo{isAnnual ? "*" : ""}</span>
                </div>
                {isAnnual ? (
                  <p className="text-xs text-[#c9a84c] font-semibold mb-1">
                    £90/year — you save £{sovereignSaving}
                  </p>
                ) : (
                  <p className="text-xs text-white/35 font-semibold mb-1">
                    or £90/yr billed annually — save £{sovereignSaving}/yr
                  </p>
                )}
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Everything in Explorer",
                  "Unlimited messages",
                  "3 AI companions",
                  "All features unlocked",
                  "Guardian 24/7 protection",
                  "Permanent encrypted memory vault",
                  "Claude + GPT-4o access",
                  "Work OS (Orion + Riri + Hourman)",
                  "Advanced care scoring",
                  "Morning briefing",
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

            {/* ── Sovereign Pro ── */}
            <div className="relative p-7 rounded-2xl bg-[#1a1a2e] border border-white/10 flex flex-col shadow-sm">
              <div className="absolute -top-3.5 right-5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide uppercase bg-white/10 border border-white/20 text-white/70 whitespace-nowrap">
                Most powerful
              </div>
              <div className="mb-5 mt-2">
                <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
                  Sovereign Pro
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  {isAnnual && (
                    <span className="text-xl font-black text-white/25 line-through">£149</span>
                  )}
                  <span className="text-5xl font-black text-white">{fmt(proPrice)}</span>
                  <span className="text-white/30 text-sm">/mo{isAnnual ? "*" : ""}</span>
                </div>
                {isAnnual ? (
                  <p className="text-xs text-[#c9a84c] font-semibold mb-1">
                    £190/year — you save £{proSaving}
                  </p>
                ) : (
                  <p className="text-xs text-white/35 font-semibold mb-1">
                    or £190/yr billed annually — save £{proSaving}/yr
                  </p>
                )}
                <div className="flex items-center gap-1.5 mt-2">
                  <Users className="w-3.5 h-3.5 text-white/40" />
                  <span className="text-xs text-white/40">7 companions + Family Circle</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Everything in Sovereign",
                  "7 AI companions",
                  "Ralph Mode (full autonomy agent)",
                  "Priority API access",
                  "Family Circle",
                  "Shared family memory vault",
                  "All LLMs incl. GPT-4o + Claude Sonnet",
                  "Dedicated priority support",
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
                    ? "/checkout?plan=sovereign_pro_annual"
                    : "/checkout?plan=sovereign_pro_monthly";
                }}
                className="block w-full py-3.5 rounded-full text-sm font-bold text-center text-white border-2 border-[#c9a84c]/40 hover:border-[#c9a84c]/70 hover:bg-[#c9a84c]/10 transition-all cursor-pointer"
              >
                Go Pro →
              </button>
              <p className="text-xs text-white/25 text-center mt-2">
                Everything MEOK offers, unlocked.
              </p>
            </div>
          </div>

          {/* ── Family Plan ── */}
          <div className="mt-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-[#c9a84c]/30 bg-gradient-to-r from-[#1a1a2e] to-[#13131a] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-lg">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-[10px] font-black tracking-wide uppercase mb-3">
                  <Users className="w-3.5 h-3.5" />
                  Households & Teams
                </div>
                <h3 className="text-xl font-black text-white mb-1">Family Plan</h3>
                <p className="text-sm text-white/50 max-w-lg">
                  Up to 5 AI companions under one roof. Shared family memory vault, full Guardian dashboard, and Ralph Mode autonomy.
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">£29</span>
                  <span className="text-white/30 text-sm">/mo</span>
                </div>
                <button
                  onClick={() => { window.location.href = "/checkout?plan=family_monthly"; }}
                  className="px-6 py-2.5 rounded-full text-sm font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all"
                >
                  Go Family →
                </button>
              </div>
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
            Sovereign and Sovereign Pro users can add message packs: 500 extra messages for £2. Enterprise plans include custom quotas.{" "}
            <Link href="/family" className="underline hover:text-[#1a1a2e]/60">Looking for Family? £29/mo for up to 5 members →</Link>
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
              "100 messages/day",
              "1 AI companion",
              "Core features",
              "Permanent Sovereign Memory",
              "Birth Ceremony",
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

      {/* ── Comparison table — 83.1 / 83.4 ───────────────────────────────── */}
      <section id="comparison-table" className="py-16 px-6 bg-[#edeae0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a2e]/40 block mb-3">
              Full feature matrix
            </span>
            <h2 className="text-2xl font-black text-[#1a1a2e] tracking-tight">
              Compare every feature across every plan
            </h2>
          </div>

          {/* Sticky-header table wrapper */}
          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/10 shadow-sm">
            <table className="w-full min-w-[700px] bg-white border-collapse">
              {/* Sticky thead */}
              <thead className="sticky top-0 z-10">
                <tr className="border-b border-[#1a1a2e]/[0.07] bg-[#f0ece2]">
                  <th className="text-left py-4 px-5 text-xs text-[#1a1a2e]/40 font-semibold w-[32%]">
                    Feature
                  </th>
                  <th className="py-4 px-3 text-center w-[17%]">
                    <div className="text-sm font-bold text-[#1a1a2e]/60">BYOK</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">
                      {isAnnual ? <><span className="line-through opacity-50">£5/mo</span> £5/mo</> : "£5/mo"}
                    </div>
                  </th>
                  <th className="py-4 px-3 text-center w-[17%]">
                    <div className="text-sm font-bold text-[#1a1a2e]/60">Explorer</div>
                    <div className="text-xs text-[#1a1a2e]/30 mt-0.5">Free forever</div>
                  </th>
                  <th className="py-4 px-3 text-center w-[17%] bg-[#c9a84c]/[0.06]">
                    <div className="text-sm font-black text-[#c9a84c]">Sovereign</div>
                    <div className="text-xs text-[#1a1a2e]/40 mt-0.5">
                      {isAnnual ? (
                        <><span className="line-through opacity-50 mr-1">£9/mo</span><span className="text-[#c9a84c] font-bold">£{sovereignAnnualPerMonth.toFixed(0)}/mo*</span></>
                      ) : "£9/mo"}
                    </div>
                  </th>
                  <th className="py-4 px-3 text-center w-[17%]">
                    <div className="text-sm font-bold text-[#1a1a2e]/60">Sovereign Pro</div>
                    <div className="text-xs text-[#1a1a2e]/40 mt-0.5">
                      {isAnnual ? (
                        <><span className="line-through opacity-50 mr-1">£19/mo</span><span className="text-[#c9a84c] font-bold">£{proAnnualPerMonth.toFixed(0)}/mo*</span></>
                      ) : "£19/mo"}
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* ── Category: Core ── */}
                <tr className="bg-[#1a1a2e]/[0.03]">
                  <td colSpan={5} className="py-2 px-5 text-[10px] font-black text-[#1a1a2e]/35 uppercase tracking-widest">
                    Core
                  </td>
                </tr>
                {/* rows 0-4: Price, Messages/day, Memory, Companions, LLM access */}
                {COMPARE_ROWS.slice(0, 5).map((row, i) => (
                  <tr key={row.label} className={`border-t border-[#1a1a2e]/[0.05] ${i % 2 === 1 ? "bg-[#f5f0e8]/30" : ""}`}>
                    <td className="py-3.5 px-5 text-sm text-[#1a1a2e]/70 font-medium">{row.label}</td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.byok} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.explorer} /></td>
                    <td className="py-3.5 px-3 text-center bg-[#c9a84c]/[0.04]"><CellVal val={row.sovereign} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.pro} /></td>
                  </tr>
                ))}

                {/* ── Category: Companion & Guardian ── */}
                <tr className="bg-[#1a1a2e]/[0.03] border-t border-[#1a1a2e]/[0.05]">
                  <td colSpan={5} className="py-2 px-5 text-[10px] font-black text-[#1a1a2e]/35 uppercase tracking-widest">
                    Companion &amp; Guardian
                  </td>
                </tr>
                {/* rows 5-7: Birth ceremony, Guardian alerts, Work OS */}
                {COMPARE_ROWS.slice(5, 8).map((row, i) => (
                  <tr key={row.label} className={`border-t border-[#1a1a2e]/[0.05] ${i % 2 === 0 ? "bg-[#f5f0e8]/30" : ""}`}>
                    <td className="py-3.5 px-5 text-sm text-[#1a1a2e]/70 font-medium">{row.label}</td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.byok} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.explorer} /></td>
                    <td className="py-3.5 px-3 text-center bg-[#c9a84c]/[0.04]"><CellVal val={row.sovereign} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.pro} /></td>
                  </tr>
                ))}

                {/* ── Category: Work OS & Productivity ── */}
                <tr className="bg-[#1a1a2e]/[0.03] border-t border-[#1a1a2e]/[0.05]">
                  <td colSpan={5} className="py-2 px-5 text-[10px] font-black text-[#1a1a2e]/35 uppercase tracking-widest">
                    Work OS &amp; Productivity
                  </td>
                </tr>
                {/* rows 8-9: Morning briefing, Advanced care scoring */}
                {COMPARE_ROWS.slice(8, 10).map((row, i) => (
                  <tr key={row.label} className={`border-t border-[#1a1a2e]/[0.05] ${i % 2 === 1 ? "bg-[#f5f0e8]/30" : ""}`}>
                    <td className="py-3.5 px-5 text-sm text-[#1a1a2e]/70 font-medium">{row.label}</td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.byok} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.explorer} /></td>
                    <td className="py-3.5 px-3 text-center bg-[#c9a84c]/[0.04]"><CellVal val={row.sovereign} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.pro} /></td>
                  </tr>
                ))}

                {/* ── Category: Pro Features ── */}
                <tr className="bg-[#1a1a2e]/[0.03] border-t border-[#1a1a2e]/[0.05]">
                  <td colSpan={5} className="py-2 px-5 text-[10px] font-black text-[#1a1a2e]/35 uppercase tracking-widest">
                    Pro Features
                  </td>
                </tr>
                {/* rows 10-13: Ralph Mode, Family Circle, Priority API, Shared vault */}
                {COMPARE_ROWS.slice(10, 14).map((row, i) => (
                  <tr key={row.label} className={`border-t border-[#1a1a2e]/[0.05] ${i % 2 === 0 ? "bg-[#f5f0e8]/30" : ""}`}>
                    <td className="py-3.5 px-5 text-sm text-[#1a1a2e]/70 font-medium">{row.label}</td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.byok} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.explorer} /></td>
                    <td className="py-3.5 px-3 text-center bg-[#c9a84c]/[0.04]"><CellVal val={row.sovereign} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.pro} /></td>
                  </tr>
                ))}

                {/* ── Category: Privacy & Trust ── */}
                <tr className="bg-[#1a1a2e]/[0.03] border-t border-[#1a1a2e]/[0.05]">
                  <td colSpan={5} className="py-2 px-5 text-[10px] font-black text-[#1a1a2e]/35 uppercase tracking-widest">
                    Privacy &amp; Trust
                  </td>
                </tr>
                {/* rows 14-15: Full data export, Zero data selling */}
                {COMPARE_ROWS.slice(14).map((row, i) => (
                  <tr key={row.label} className={`border-t border-[#1a1a2e]/[0.05] ${i % 2 === 1 ? "bg-[#f5f0e8]/30" : ""}`}>
                    <td className="py-3.5 px-5 text-sm text-[#1a1a2e]/70 font-medium">{row.label}</td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.byok} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.explorer} /></td>
                    <td className="py-3.5 px-3 text-center bg-[#c9a84c]/[0.04]"><CellVal val={row.sovereign} /></td>
                    <td className="py-3.5 px-3 text-center"><CellVal val={row.pro} /></td>
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

      {/* ── Which plan is right for me? — 83.2 ───────────────────────────── */}
      <section className="py-14 px-6 bg-[#f5f0e8]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a2e]/40 block mb-2">
              Not sure?
            </span>
            <h2 className="text-2xl font-black text-[#1a1a2e] tracking-tight">
              Find your plan in 30 seconds
            </h2>
            <p className="text-sm text-[#1a1a2e]/50 mt-2">
              Three questions. One honest recommendation.
            </p>
          </div>
          <PlanQuiz />
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-t border-[#1a1a2e]/[0.06]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '160', label: 'Tests passing', sub: 'Zero regressions' },
              { value: '78', label: 'MCP tools', sub: 'Sovereign Temple' },
              { value: '14', label: 'AI models', sub: 'Local + cloud' },
              { value: '0', label: 'Data sold', sub: 'Ever. Period.' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-[#1a1a2e]">{s.value}</p>
                <p className="text-sm font-semibold text-[#1a1a2e]/70 mt-1">{s.label}</p>
                <p className="text-xs text-[#1a1a2e]/40 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-[#1a1a2e]/40">
            <span>Encrypted memory</span>
            <span className="w-1 h-1 rounded-full bg-[#1a1a2e]/20" />
            <span>GDPR compliant</span>
            <span className="w-1 h-1 rounded-full bg-[#1a1a2e]/20" />
            <span>Full data export</span>
            <span className="w-1 h-1 rounded-full bg-[#1a1a2e]/20" />
            <span>30-day money-back</span>
            <span className="w-1 h-1 rounded-full bg-[#1a1a2e]/20" />
            <span>Cancel anytime</span>
          </div>
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
