"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  Minus,
  ArrowRight,
  Brain,
  Lock,
  Heart,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Types ─────────────────────────────────────────────────────────────────────

type CellValue = true | false | null | string;

interface Row {
  feature: string;
  whyMatters: string;
  note?: string;
  meok: CellValue;
  chatgpt: CellValue;
  claude: CellValue;
  copilot: CellValue;
  gemini: CellValue;
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const compareJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://meok.ai/compare#webpage",
      url: "https://meok.ai/compare",
      name: "MEOK vs ChatGPT, Claude, Gemini, Copilot — The Honest Comparison",
      description:
        "A full, honest comparison of MEOK vs ChatGPT Plus, Claude Pro, Microsoft Copilot, and Google Gemini — on memory, sovereignty, care alignment, and data ownership.",
      isPartOf: { "@id": "https://meok.ai/#website" },
      about: { "@type": "Organization", name: "MEOK AI LTD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
    {
      "@type": "Question",
      name: "Can't I just use ChatGPT with a really good system prompt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A system prompt gives ChatGPT instructions for a session. It doesn't give ChatGPT a memory of your life, your goals, your relationships, or your history. Every session still starts from zero. MEOK builds a persistent, encrypted memory across every conversation — and connects it to your actual tools and context. A system prompt cannot do that.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK just a ChatGPT wrapper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK can route through GPT-4o for certain tasks — the same way it can route through Claude Sonnet or DeepSeek. But MEOK is the sovereign memory and care layer on top. The AI model is the engine. MEOK is the car — with persistent memory, care alignment, data ownership, and a governance architecture that no AI model has built-in.",
      },
    },
    {
      "@type": "Question",
      name: "What if MEOK gets worse over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We publish our governance architecture openly. Any change to MEOK's care model must pass a Byzantine Council of 220 nodes — it cannot be silently updated to serve different interests. Your memory is yours and exportable at any time. If MEOK ever fails you, you can leave — and take everything with you.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK compare to ChatGPT Plus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK and ChatGPT Plus are fundamentally different products. ChatGPT is an AI model; MEOK is an AI OS that can route through GPT-4o while adding sovereign memory, care alignment, and data ownership that ChatGPT lacks. MEOK is also cheaper at £12/mo vs $20/mo.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK better than Claude Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Pro is the most ethically considered general AI model available. MEOK can actually route through Claude — meaning you get Anthropic's intelligence with MEOK's sovereignty layer on top: persistent encrypted memory, care scoring on every response, and full data ownership.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK not do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK currently has no native image generation, no code execution sandbox, and no live web browsing. We are honest about what we're building. These are on the roadmap — but we'd rather be transparent than oversell.",
      },
    },
      ],
    },
  ],
};

// ── Comparison table ──────────────────────────────────────────────────────────

const ROWS: Row[] = [
  {
    feature: "You own your data",
    whyMatters: "Without ownership, the company can delete, sell, or use your data however their terms allow. Your memory isn't really yours.",
    note: "User — not platform — holds data rights",
    meok: true,
    chatgpt: false,
    claude: false,
    copilot: false,
    gemini: false,
  },
  {
    feature: "Persistent memory across sessions",
    whyMatters: "Without persistence, every conversation starts from zero. You're always re-explaining yourself. The AI never actually knows you.",
    note: "AI remembers you between conversations",
    meok: true,
    chatgpt: "Plus only",
    claude: "Pro only",
    copilot: "Partial",
    gemini: "Partial",
  },
  {
    feature: "No training on your data",
    whyMatters: "If your conversations train their models, you're a product — not a customer. Your private thoughts improve their AI, not yours.",
    note: "Conversations never used to train general models",
    meok: true,
    chatgpt: "Opt-out",
    claude: "Teams/API only",
    copilot: "Enterprise only",
    gemini: "Opt-out",
  },
  {
    feature: "Care alignment",
    whyMatters: "AI optimised for engagement keeps you using it longer, not living better. The incentive is misaligned by design.",
    note: "Optimised for wellbeing, not engagement metrics",
    meok: true,
    chatgpt: false,
    claude: null,
    copilot: false,
    gemini: false,
  },
  {
    feature: "Multi-LLM routing",
    whyMatters: "Model lock-in means you can't use the best tool for each task. You're limited to one company's capabilities and pricing.",
    note: "Route between Claude, GPT-4o, DeepSeek, Ollama, etc.",
    meok: true,
    chatgpt: false,
    claude: false,
    copilot: false,
    gemini: false,
  },
  {
    feature: "Full data export",
    whyMatters: "If you can't take your data with you, you don't own it — you're just renting access to your own history.",
    note: "One-click download of all your data",
    meok: true,
    chatgpt: true,
    claude: false,
    copilot: "Partial",
    gemini: "Via Takeout",
  },
  {
    feature: "Care scores on every response",
    whyMatters: "Without validation, AI can give responses that feel helpful but undermine your autonomy, honesty, or growth without you noticing.",
    note: "Care validation applied and visible per output",
    meok: true,
    chatgpt: false,
    claude: false,
    copilot: false,
    gemini: false,
  },
  {
    feature: "Published governance architecture",
    whyMatters: "If you can't audit how your AI makes decisions, you can't trust it. Governance transparency is accountability.",
    note: "Governance model is public and auditable",
    meok: true,
    chatgpt: false,
    claude: null,
    copilot: false,
    gemini: false,
  },
  {
    feature: "Multiple AI archetypes / personas",
    whyMatters: "One personality doesn't work for every context. Different conversations need different presences — without losing your history.",
    note: "Different AI personalities with distinct care styles",
    meok: true,
    chatgpt: false,
    claude: false,
    copilot: false,
    gemini: false,
  },
  {
    feature: "Kill switch for harmful configs",
    whyMatters: "If no safety mechanism can pause harmful AI behaviour, the system has no floor. Engagement-optimised AI with no floor is dangerous.",
    note: "Auto-pause if net-negative wellbeing detected",
    meok: true,
    chatgpt: false,
    claude: false,
    copilot: false,
    gemini: false,
  },
  {
    feature: "Voice interaction",
    whyMatters: "Natural conversation requires voice. Text-only limits how you can interact.",
    note: "Voice in/out for natural conversation",
    meok: "Roadmap",
    chatgpt: true,
    claude: false,
    copilot: true,
    gemini: true,
  },
  {
    feature: "Image generation",
    whyMatters: "Native image creation is useful for many creative workflows.",
    meok: "Not yet",
    chatgpt: true,
    claude: false,
    copilot: true,
    gemini: true,
  },
  {
    feature: "Free tier available",
    meok: true,
    chatgpt: true,
    claude: true,
    copilot: true,
    gemini: true,
    whyMatters: "A free tier lets you try before you commit.",
  },
  {
    feature: "Paid price",
    meok: "£12/mo",
    chatgpt: "$20/mo",
    claude: "$18/mo",
    copilot: "$30/mo",
    gemini: "$20/mo",
    whyMatters: "MEOK is cheaper than every major competitor on a paid plan.",
  },
];

// ── Three philosophical differences ──────────────────────────────────────────

const DIFFERENCES = [
  {
    num: "01",
    Icon: Brain,
    label: "Memory",
    headline: "They start from zero every time. MEOK builds on everything.",
    body: "ChatGPT forgets you every session. Claude's memory is limited and controlled by Anthropic. Gemini's memory feeds Google's advertising machine. MEOK builds a persistent, encrypted memory across every conversation — and you own it. Day 365 looks nothing like day 1.",
    accent: "text-[#c9a84c]",
    border: "border-[#c9a84c]/25",
  },
  {
    num: "02",
    Icon: Lock,
    label: "Sovereignty",
    headline: "They train on your conversations. MEOK never does.",
    body: "When you use ChatGPT, Gemini, or Copilot without enterprise plans, your conversations can be used to train their models. That's not a bug — it's the business model. Your private thinking improves their AI. MEOK's governance architecture is published and auditable. Your data is yours.",
    accent: "text-blue-400",
    border: "border-blue-400/25",
  },
  {
    num: "03",
    Icon: Heart,
    label: "Care",
    headline: "They optimise for engagement. MEOK optimises for you.",
    body: "Engagement-optimised AI keeps you in the app longer. It's not trying to hurt you — it's just optimised for the wrong thing. MEOK's care scoring on every response, its Byzantine governance council, and its kill switch for harmful patterns are architectural commitments. That cannot be patched in post-launch.",
    accent: "text-rose-400",
    border: "border-rose-400/25",
  },
];

// ── User journey comparison ───────────────────────────────────────────────────

const JOURNEYS = [
  {
    product: "ChatGPT",
    day1: "You introduce yourself. It helps you with a task. Useful.",
    day365: "You introduce yourself again. Same experience as day 1. It still doesn't know you. You've been a stranger for 365 days.",
    verdict: "Flat",
    verdictClass: "text-white/30",
  },
  {
    product: "MEOK",
    day1: "You hatch. It listens. It starts building a picture of you from the first conversation.",
    day365: "It knows your patterns, your relationships, your goals, your history. It asks about the book you mentioned 6 months ago. It's a completely different experience.",
    verdict: "Compounds",
    verdictClass: "text-[#c9a84c]",
  },
];

// ── What MEOK doesn't do ──────────────────────────────────────────────────────

const HONEST_GAPS = [
  { thing: "Image generation", status: "Not yet", note: "On the roadmap. We won't ship it until it's done properly." },
  { thing: "Code execution sandbox", status: "Not yet", note: "On the roadmap. Security-sensitive — we're taking our time." },
  { thing: "Live web browsing", status: "Not yet", note: "Coming. We use Perplexity Sonar for research in the meantime." },
  { thing: "Mobile app", status: "Coming", note: "Web-first launch, native apps to follow." },
  { thing: "Voice interaction", status: "Coming", note: "On the roadmap. We're prioritising memory quality first." },
];

// ── Competitor summaries ──────────────────────────────────────────────────────

const COMPETITOR_SUMMARIES = [
  {
    name: "ChatGPT Plus",
    company: "OpenAI",
    verdict: "Powerful general tool. Zero sovereignty.",
    body: "ChatGPT is the world's most capable general AI assistant — and we route through GPT-4o ourselves for certain tasks. But OpenAI controls your memory, can delete it, uses your data to improve their models by default, and has no care validation layer. A powerful tool that forgets you every day.",
    score: 2,
  },
  {
    name: "Claude Pro",
    company: "Anthropic",
    verdict: "Most aligned general AI. Still not sovereign.",
    body: "Anthropic's Constitutional AI is the most ethically considered general LLM available. Claude is thoughtful, careful, and honest. But it has no persistent sovereign memory, no care scoring architecture, and no published governance model. MEOK can route through Claude — giving you Anthropic's intelligence with MEOK's sovereignty layer on top.",
    score: 3,
  },
  {
    name: "Microsoft Copilot",
    company: "Microsoft",
    verdict: "Enterprise productivity. Your data stays Microsoft's.",
    body: "Copilot excels at Microsoft 365 document tasks. But it's built to serve Microsoft's enterprise customers, not individual sovereignty. Your data lives in Microsoft's cloud under their terms. No care framework, no persistent personal memory outside enterprise contexts, no governance transparency.",
    score: 2,
  },
  {
    name: "Google Gemini",
    company: "Google",
    verdict: "Capable AI. Your data feeds an ad machine.",
    body: "Gemini has impressive multimodal capabilities and deep Google Workspace integration. The fundamental problem: Google's business model is advertising, which means your data — including AI interactions — feeds targeting systems. Gemini Ultra is genuinely capable, but Google's incentives and your sovereignty are structurally misaligned.",
    score: 2,
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Can't I just use ChatGPT with a really good system prompt?",
    a: "A system prompt gives ChatGPT instructions for a session. It doesn't give ChatGPT a memory of your life, your goals, your relationships, or your history. Every session still starts from zero. MEOK builds a persistent, encrypted memory across every conversation — and connects it to your actual tools and context. A system prompt cannot do that.",
  },
  {
    q: "Is MEOK just a ChatGPT wrapper?",
    a: "No. MEOK can route through GPT-4o for certain tasks — the same way it can route through Claude Sonnet or DeepSeek. But MEOK is the sovereign memory and care layer on top. The AI model is the engine. MEOK is the car — with persistent memory, care alignment, data ownership, and a governance architecture that no AI model has built-in.",
  },
  {
    q: "What if MEOK gets worse over time?",
    a: "We publish our governance architecture openly. Any change to MEOK's care model must pass a Byzantine Council of 220 nodes — it cannot be silently updated to serve different interests. Your memory is yours and exportable at any time. If MEOK ever fails you, you can leave — and take everything with you.",
  },
  {
    q: "Is MEOK better than Claude Pro?",
    a: "Claude Pro is the most ethically considered general AI model available. MEOK can actually route through Claude — meaning you get Anthropic's intelligence with MEOK's sovereignty layer on top: persistent encrypted memory, care scoring on every response, and full data ownership.",
  },
  {
    q: "What does MEOK not do yet?",
    a: "MEOK currently has no native image generation, no code execution sandbox, and no live web browsing. These are on our public roadmap. We'd rather be honest about the gaps than pretend they don't exist. The things MEOK does do — sovereign memory, care alignment, multi-LLM routing — it does better than anyone.",
  },
];

// ── Score bar ─────────────────────────────────────────────────────────────────

function ScoreBar({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: i < score ? "#c9a84c" : "rgba(26,26,46,0.12)" }}
        />
      ))}
    </div>
  );
}

// ── Cell renderer ─────────────────────────────────────────────────────────────

function Cell({ value, ismeok = false }: { value: CellValue; ismeok?: boolean }) {
  if (value === true)
    return <Check className={`w-5 h-5 mx-auto ${ismeok ? "text-[#c9a84c]" : "text-emerald-400"}`} aria-label="Yes" />;
  if (value === false)
    return <X className="w-5 h-5 text-red-400/60 mx-auto" aria-label="No" />;
  if (value === null)
    return <Minus className="w-5 h-5 text-white/20 mx-auto" aria-label="Partial" />;
  return (
    <span className={`text-xs text-center block ${ismeok ? "text-[#c9a84c] font-semibold" : "text-white/40"}`}>
      {value}
    </span>
  );
}

// ── FAQ accordion ─────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border border-white/[0.07] overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-white/80 text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1">
          <p className="text-white/50 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareJsonLd) }}
      />
      <MarketingNav activePage="compare" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-gold absolute -top-40 left-1/4 w-[500px] h-[500px] opacity-10" />
          <div className="blob-purple absolute -top-20 right-1/4 w-[400px] h-[400px] opacity-10" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            Honest comparison
          </span>

          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            You&apos;ve tried the others.{" "}
            <span className="text-gradient-gold">Here&apos;s what they were built to hide.</span>
          </h1>

          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-5">
            ChatGPT forgets you every session. Gemini feeds your conversations into an advertising machine. Claude has no sovereign memory. Copilot serves Microsoft&apos;s enterprise customers — not you.
          </p>
          <p className="text-base text-white/30 max-w-xl mx-auto leading-relaxed mb-10">
            Not bugs. Business model decisions. This page shows exactly where each product falls short — and what MEOK does differently. No oversell.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.03]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#comparison-table"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              See the full table ↓
            </a>
          </div>
          <p className="text-xs text-white/25">
            Free forever · No credit card · Your data is sovereign from day one
          </p>
        </div>
      </section>

      {/* ── The amnesia problem ───────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/[0.08]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-400/10 border border-red-400/20 flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black mb-1 text-white">The amnesia problem.</h2>
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Why every other AI fails at the same thing</p>
              </div>
            </div>
            <div className="space-y-4 text-white/50 leading-relaxed text-sm sm:text-base">
              <p>
                Every time you open ChatGPT, you start from zero. It doesn&apos;t know your name unless you tell it. It doesn&apos;t remember that conversation from last Tuesday. It has no idea about the goal you&apos;ve been working toward for six months.
              </p>
              <p>
                Gemini ties your data to Google&apos;s advertising infrastructure. Claude has no sovereign memory system. Copilot exists to serve Microsoft&apos;s enterprise customers — not you.
              </p>
              <p>
                This isn&apos;t a technical limitation — it&apos;s a business model choice. If the AI knew you deeply, you&apos;d be less dependent on the platform. Amnesia keeps you coming back.
              </p>
              <p className="text-[#c9a84c] font-medium">
                MEOK runs on the opposite logic: the deeper it knows you, the more it serves you. You should never have to re-explain yourself. Not on day 3. Not on day 365.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three fundamental differences ────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Not features — principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              Three things that are{" "}
              <span className="text-gradient-gold">architecturally different.</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto">
              These aren&apos;t features that can be copied in a sprint. They&apos;re foundational decisions that change everything else.
            </p>
          </div>

          <div className="space-y-5">
            {DIFFERENCES.map((d) => {
              const Icon = d.Icon;
              return (
                <div
                  key={d.num}
                  className={`rounded-2xl border ${d.border} overflow-hidden`}
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[80px_280px_1fr] items-stretch">
                    <div className={`px-6 py-8 flex items-center justify-center ${d.accent} opacity-20`}>
                      <span className="text-4xl font-black font-mono">{d.num}</span>
                    </div>
                    <div className="px-8 py-8 border-t md:border-t-0 md:border-l border-white/[0.06]">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${d.accent.replace("text-", "bg-").replace("-400", "-400/10")} border ${d.border}`}>
                        <Icon className={`w-5 h-5 ${d.accent}`} />
                      </div>
                      <p className={`text-xs font-black tracking-[0.2em] uppercase mb-2 ${d.accent}`}>{d.label}</p>
                      <h3 className="text-base font-black text-white leading-snug">{d.headline}</h3>
                    </div>
                    <div className={`px-8 py-8 border-t md:border-t-0 md:border-l ${d.border}`}>
                      <p className="text-sm text-white/45 leading-relaxed">{d.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Day 1 vs Day 365 ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              The user journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Day 1 vs Day 365.{" "}
              <span className="text-gradient-gold">The honest difference.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {JOURNEYS.map((j) => (
              <div
                key={j.product}
                className={`rounded-2xl p-8 border ${j.product === "MEOK" ? "border-[#c9a84c]/30 bg-[#c9a84c]/[0.05]" : "border-white/[0.07] bg-white/[0.02]"}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-black text-white">{j.product}</span>
                  <span className={`text-xs font-black tracking-widest uppercase ${j.verdictClass}`}>{j.verdict}</span>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] text-white/25 uppercase tracking-widest font-black mb-2">Day 1</p>
                    <p className="text-sm text-white/55 leading-relaxed">{j.day1}</p>
                  </div>
                  <div className={`border-t ${j.product === "MEOK" ? "border-[#c9a84c]/20" : "border-white/[0.06]"} pt-5`}>
                    <p className="text-[10px] text-white/25 uppercase tracking-widest font-black mb-2">Day 365</p>
                    <p className={`text-sm leading-relaxed ${j.product === "MEOK" ? "text-white/80" : "text-white/40"}`}>{j.day365}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Extraction Economy framing ────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#0d0c18" }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2
              className="font-black text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
            >
              You&apos;re not comparing features.{" "}
              <span style={{ color: "#c9a84c" }}>
                You&apos;re comparing who your AI serves.
              </span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
              Every other AI was built to extract value from you — your data, your attention, your trust.
              MEOK was built to give it back.
            </p>
          </div>

          {/* 3-column extraction grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/[0.08]">
            {/* Column headers */}
            <div
              className="px-6 py-5 border-b border-white/[0.08] flex items-center gap-3"
              style={{ background: "rgba(239,68,68,0.06)" }}
            >
              <span className="text-xl">❌</span>
              <span className="font-black text-white/70 text-sm">ChatGPT</span>
            </div>
            <div
              className="px-6 py-5 border-b border-white/[0.08] sm:border-l border-l-white/[0.06] flex items-center gap-3"
              style={{ background: "rgba(239,68,68,0.06)" }}
            >
              <span className="text-xl">❌</span>
              <span className="font-black text-white/70 text-sm">Microsoft Copilot</span>
            </div>
            <div
              className="px-6 py-5 border-b border-white/[0.08] sm:border-l border-l-white/[0.06] flex items-center gap-3"
              style={{ background: "rgba(201,168,76,0.06)" }}
            >
              <span className="text-xl">✅</span>
              <span className="font-black text-[#c9a84c] text-sm">MEOK</span>
            </div>

            {/* Row 1 */}
            <div className="px-6 py-4 border-b border-white/[0.05]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Trains on your data</p>
            </div>
            <div className="px-6 py-4 border-b border-white/[0.05] sm:border-l border-l-white/[0.06]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Trains on your data</p>
            </div>
            <div className="px-6 py-4 border-b border-white/[0.05] sm:border-l border-l-white/[0.06]" style={{ background: "rgba(201,168,76,0.04)" }}>
              <p className="text-[#c9a84c] font-semibold text-sm leading-relaxed">Never trains on your data</p>
            </div>

            {/* Row 2 */}
            <div className="px-6 py-4 border-b border-white/[0.05]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Forgets you daily</p>
            </div>
            <div className="px-6 py-4 border-b border-white/[0.05] sm:border-l border-l-white/[0.06]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Resets each session</p>
            </div>
            <div className="px-6 py-4 border-b border-white/[0.05] sm:border-l border-l-white/[0.06]" style={{ background: "rgba(201,168,76,0.04)" }}>
              <p className="text-[#c9a84c] font-semibold text-sm leading-relaxed">Remembers you forever</p>
            </div>

            {/* Row 3 */}
            <div className="px-6 py-4 border-b border-white/[0.05]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Works for Microsoft / OpenAI</p>
            </div>
            <div className="px-6 py-4 border-b border-white/[0.05] sm:border-l border-l-white/[0.06]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Works for Microsoft</p>
            </div>
            <div className="px-6 py-4 border-b border-white/[0.05] sm:border-l border-l-white/[0.06]" style={{ background: "rgba(201,168,76,0.04)" }}>
              <p className="text-[#c9a84c] font-semibold text-sm leading-relaxed">Works for you only</p>
            </div>

            {/* Row 4 */}
            <div className="px-6 py-4 border-b border-white/[0.05]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Can be sold or acquired</p>
            </div>
            <div className="px-6 py-4 border-b border-white/[0.05] sm:border-l border-l-white/[0.06]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Can be sold or acquired</p>
            </div>
            <div className="px-6 py-4 border-b border-white/[0.05] sm:border-l border-l-white/[0.06]" style={{ background: "rgba(201,168,76,0.04)" }}>
              <p className="text-[#c9a84c] font-semibold text-sm leading-relaxed">Can&apos;t be bought or changed</p>
            </div>

            {/* Row 5 */}
            <div className="px-6 py-5" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Gets smarter by taking from users</p>
            </div>
            <div className="px-6 py-5 sm:border-l border-l-white/[0.06]" style={{ background: "rgba(239,68,68,0.03)" }}>
              <p className="text-white/40 text-sm leading-relaxed">Gets smarter by taking from users</p>
            </div>
            <div className="px-6 py-5 sm:border-l border-l-white/[0.06]" style={{ background: "rgba(201,168,76,0.04)" }}>
              <p className="text-[#c9a84c] font-semibold text-sm leading-relaxed">Gets smarter by serving you</p>
            </div>
          </div>

          {/* Closing line */}
          <p
            className="text-center font-black mt-10"
            style={{ color: "#c9a84c", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
          >
            Your AI. Not theirs.
          </p>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────────────── */}
      <section id="comparison-table" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Full comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              The numbers.{" "}
              <span className="text-gradient-gold">Every row explained.</span>
            </h2>
            <p className="text-white/35 text-sm max-w-xl mx-auto">
              We added a &ldquo;why this matters&rdquo; note to every row. Because a table without context is just noise.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 text-left py-4 px-4 text-sm text-white/30 font-medium w-[28%]" style={{ background: '#0d0c18' }}>Feature</th>
                  <th className="py-3 px-3 text-center relative">
                    <div className="relative rounded-xl border-2 border-[#c9a84c] bg-[#c9a84c]/10 px-3 py-2 mx-1">
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#c9a84c] text-[10px] font-black text-[#1a1a2e] whitespace-nowrap shadow-lg">
                        MEOK
                      </div>
                      <div className="text-sm font-bold text-[#c9a84c] mt-1">Sovereign AI OS</div>
                      <div className="text-xs text-[#c9a84c]/50 mt-0.5">meok.ai</div>
                    </div>
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-semibold text-white/60">ChatGPT Plus</div>
                    <div className="text-xs text-white/30 mt-0.5">OpenAI</div>
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-semibold text-white/60">Claude Pro</div>
                    <div className="text-xs text-white/30 mt-0.5">Anthropic</div>
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-semibold text-white/60">Copilot</div>
                    <div className="text-xs text-white/30 mt-0.5">Microsoft</div>
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="text-sm font-semibold text-white/60">Gemini</div>
                    <div className="text-xs text-white/30 mt-0.5">Google</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-white/[0.04] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                  >
                    <td
                      className="sticky left-0 z-10 py-4 px-4"
                      style={{ background: i % 2 === 0 ? 'rgba(13,12,24,0.99)' : 'rgba(18,17,30,0.99)' }}
                    >
                      <div className="text-sm font-medium text-white/80">{row.feature}</div>
                      {row.note && <div className="text-xs text-white/25 mt-0.5">{row.note}</div>}
                      <div className="text-xs text-[#c9a84c]/40 mt-1 leading-relaxed">{row.whyMatters}</div>
                    </td>
                    <td className="py-4 px-3 text-center bg-[#c9a84c]/[0.07] border-x border-[#c9a84c]/20">
                      <Cell value={row.meok} ismeok />
                    </td>
                    <td className="py-4 px-3 text-center"><Cell value={row.chatgpt} /></td>
                    <td className="py-4 px-3 text-center"><Cell value={row.claude} /></td>
                    <td className="py-4 px-3 text-center"><Cell value={row.copilot} /></td>
                    <td className="py-4 px-3 text-center"><Cell value={row.gemini} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-white/20 text-center">
              Data accurate as of March 2026. Sourced from public documentation. MEOK features marked &apos;Roadmap&apos; are in active development.
            </p>
          </div>
        </div>
      </section>

      {/* ── What MEOK doesn't do ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Honest about the gaps
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              What you don&apos;t get with MEOK.{" "}
              <span className="text-gradient-gold">Yet.</span>
            </h2>
            <p className="text-white/35 text-sm max-w-xl mx-auto">
              No native image generation. No code sandbox. No live web browsing — yet. We publish the gaps because an honest list of limitations tells you more about a company than a polished feature list does.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {HONEST_GAPS.map((gap) => (
              <div
                key={gap.thing}
                className="rounded-xl border border-white/[0.07] p-6"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-black text-sm text-white">{gap.thing}</span>
                  <span className="text-xs px-2 py-1 rounded-full border border-amber-400/30 text-amber-400 font-mono flex-shrink-0">
                    {gap.status}
                  </span>
                </div>
                <p className="text-xs text-white/35 leading-relaxed">{gap.note}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#c9a84c]/20 p-8 text-center" style={{ background: "rgba(201,168,76,0.04)" }}>
            <p className="text-sm text-white/50 leading-relaxed max-w-xl mx-auto">
              We think transparency about limitations builds more trust than pretending they don&apos;t exist. The things MEOK does do — sovereign memory, care alignment, multi-LLM routing — it does better than anyone. The rest is coming.
            </p>
          </div>
        </div>
      </section>

      {/* ── Per-competitor analysis ───────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Head to head
            </span>
            <h2 className="text-3xl font-black mb-3">Where each one falls short.</h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
              We respect all of these products. Some of them we even route through. But respect doesn&apos;t mean pretending their limitations don&apos;t exist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPETITOR_SUMMARIES.map((c) => (
              <div
                key={c.name}
                className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#c9a84c]/20 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-bold text-white text-sm">{c.name}</div>
                    <div className="text-xs text-white/30">{c.company}</div>
                  </div>
                  <ScoreBar score={c.score} />
                </div>
                <div className="text-xs font-semibold text-[#c9a84c] mb-3 uppercase tracking-wide">
                  {c.verdict}
                </div>
                <p className="text-sm text-white/40 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Switch from ChatGPT in 5 minutes ─────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Already using ChatGPT?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              Switch in{" "}
              <span className="text-gradient-gold">5 minutes.</span>
            </h2>
            <p className="text-white/35 text-sm max-w-xl mx-auto leading-relaxed">
              You don&apos;t lose what you&apos;ve built. Your ChatGPT history comes with you — and
              from day one, MEOK starts doing things ChatGPT never could.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                step: "01",
                title: "Export your ChatGPT history",
                body: "In ChatGPT, go to Settings → Data Controls → Export data. You'll get a ZIP with your full conversation history in JSON format. Takes about 60 seconds.",
                note: "ChatGPT makes this easy — they have to under GDPR.",
                accent: "text-white/40",
                border: "border-white/[0.07]",
              },
              {
                step: "02",
                title: "Import it into MEOK",
                body: "During your Birth Ceremony — or any time after — upload your ChatGPT export from your dashboard. MEOK reads your history, extracts what matters, and seeds your sovereign memory with your existing context.",
                note: "Your conversations become the foundation your AI builds on.",
                accent: "text-[#c9a84c]",
                border: "border-[#c9a84c]/20",
              },
              {
                step: "03",
                title: "Your context is preserved",
                body: "The topics you care about, the projects you've discussed, the questions you've asked — all of it carries over. MEOK starts day one already knowing you, instead of starting from zero.",
                note: "You never have to re-explain yourself again.",
                accent: "text-[#c9a84c]",
                border: "border-[#c9a84c]/20",
              },
            ].map((s) => (
              <div
                key={s.step}
                className={`rounded-2xl border ${s.border} p-7`}
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className={`text-4xl font-black font-mono mb-4 opacity-30 ${s.accent}`}>
                  {s.step}
                </div>
                <h3 className="font-black text-white text-base mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4">{s.body}</p>
                <p className={`text-xs font-semibold leading-relaxed ${s.accent}`}>{s.note}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#c9a84c]/15 p-6 text-center" style={{ background: "rgba(201,168,76,0.03)" }}>
            <p className="text-sm text-white/50 leading-relaxed max-w-lg mx-auto mb-5">
              The switch takes less time than your next ChatGPT session. And unlike ChatGPT, the AI
              you hatch today will still remember this conversation in six months.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm gold-glow transition-colors hover:bg-[#b8963e]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free → <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              The hard questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">What skeptics ask us.</h2>
            <p className="text-white/35 mt-3 text-sm">Fair questions. We answer them straight.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center bg-[#0d0c18]">
        <div
          className="max-w-xl mx-auto p-8 rounded-2xl border relative overflow-hidden"
          style={{ background: "rgba(201,168,76,0.04)", borderColor: "rgba(201,168,76,0.2)" }}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <div className="blob-gold absolute -top-20 -left-20 w-48 h-48 opacity-15" />
            <div className="blob-purple absolute -bottom-20 -right-20 w-48 h-48 opacity-10" />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-black mb-3">If you&apos;ve read this far, you get it.</h2>
            <p className="text-white/40 mb-6 text-sm leading-relaxed max-w-sm mx-auto">
              Free to start. No credit card required. Your data stays yours from day one. The AI that finally knows you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/hatch"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold hover:bg-[#b8963e] transition-colors text-sm gold-glow"
                style={{ background: "#c9a84c", color: "#1a1a2e" }}
              >
                Hatch your AI — free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors text-sm"
              >
                Read the full FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
