"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sun,
  Brain,
  Search,
  Code2,
  Calendar,
  FileText,
  ChevronDown,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Target,
  Wrench,
  Timer,
  AlertTriangle,
  X,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Ralph Mode",
      applicationCategory: "ProductivityApplication",
      description:
        "Ralph Mode is MEOK's autonomous AI agent that works overnight executing tasks, planning sprints, and filing reports.",
      featureList: [
        "Autonomous task execution",
        "Sprint planning",
        "Code writing",
        "Research",
        "Morning briefing",
        "Care-constrained operation",
      ],
      offers: { "@type": "Offer", price: "9.99", priceCurrency: "GBP" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Ralph Mode?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ralph Mode is MEOK's autonomous overnight AI agent. When you go offline, Ralph activates, picks up your task queue, executes work, and delivers a morning briefing when you wake up.",
          },
        },
        {
          "@type": "Question",
          name: "Is Ralph safe to run unsupervised?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every action Ralph takes is scored against the Maternal Covenant's 6 care dimensions. Irreversible actions — sending emails, publishing content, deleting files — are always flagged for your approval before execution.",
          },
        },
        {
          "@type": "Question",
          name: "What can Ralph actually do overnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ralph can write and refactor code, conduct deep research, draft emails and documents, plan sprints, compress memory, monitor competitors, and prepare your morning briefing.",
          },
        },
        {
          "@type": "Question",
          name: "Which plan includes Ralph Mode?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ralph Mode is included in the Sovereign plan (£12/mo) and Family plan (£29/mo). The free tier does not include overnight autonomous operation.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if Ralph can't complete a task?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ralph logs the attempt, notes the blocker, and includes it in your morning briefing under the 'In Progress' section. Nothing is silently dropped.",
          },
        },
        {
          "@type": "Question",
          name: "Does Ralph cost extra compute?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Ralph's overnight operation is included in your Sovereign or Family plan — no per-task charges. Heavy research tasks consume more API tokens, which MEOK absorbs within your plan's fair-use limit.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TERMINAL_LINES = [
  { time: "22:47:03", agent: "RALPH",   color: "text-cyan-400",   text: "Sprint activated — 7 tasks queued",                      dim: true  },
  { time: "22:47:04", agent: "ORION",   color: "text-purple-400", text: "Scanning task backlog... 847 items indexed",             dim: true  },
  { time: "22:51:22", agent: "RALPH",   color: "text-cyan-400",   text: "Writing code: auth middleware refactor",                 dim: true  },
  { time: "23:14:09", agent: "RALPH",   color: "text-cyan-400",   text: "✓ Auth middleware complete — 312 lines",                 dim: true  },
  { time: "23:14:10", agent: "RIRI",    color: "text-yellow-400", text: "Tool built: email_draft_v2",                             dim: true  },
  { time: "23:29:44", agent: "RALPH",   color: "text-cyan-400",   text: "Researching: competitor pricing landscape",              dim: false },
  { time: "00:03:17", agent: "RALPH",   color: "text-cyan-400",   text: "✓ Research complete — 8-page brief saved to memory",     dim: false },
  { time: "00:03:18", agent: "HOURMAN", color: "text-green-400",  text: "Sprint progress: 3/7 tasks complete",                   dim: false },
  { time: "01:44:52", agent: "RALPH",   color: "text-cyan-400",   text: "Drafting email: investor update Q1 2026",               dim: false },
  { time: "02:01:33", agent: "RALPH",   color: "text-cyan-400",   text: "✓ Draft saved — flagged for your review",               dim: false },
  { time: "02:01:34", agent: "RALPH",   color: "text-cyan-400",   text: "Care check: all actions within Maternal Covenant ✓",    dim: false },
  { time: "03:12:08", agent: "RALPH",   color: "text-cyan-400",   text: "Memory consolidation — 23 episodes synthesised",        dim: false },
  { time: "04:30:00", agent: "DREAM",   color: "text-blue-400",   text: "Dream cycle active — pattern synthesis running",        dim: false },
  { time: "06:00:00", agent: "RALPH",   color: "text-cyan-400",   text: "Morning briefing compiled — 4 tasks complete, 3 pending", dim: false },
  { time: "06:00:01", agent: "RALPH",   color: "text-cyan-400",   text: "Activating wake protocol... your briefing is ready.",   dim: false, highlight: true },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    phase: "Observe",
    icon: <Target className="w-6 h-6" />,
    title: "You queue tasks before bed",
    desc: "Add tasks in plain English — 'refactor auth', 'research competitors', 'draft investor update'. Ralph understands intent, not just keywords.",
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/5",
  },
  {
    step: "02",
    phase: "Plan",
    icon: <Zap className="w-6 h-6" />,
    title: "Orion prioritises your queue",
    desc: "Orion indexes 847+ task signals, scores by urgency and impact, and hands Ralph an optimal execution order. Nothing gets missed.",
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
  },
  {
    step: "03",
    phase: "Act",
    icon: <Code2 className="w-6 h-6" />,
    title: "Ralph executes while you sleep",
    desc: "Ralph writes code, researches topics, drafts documents, and compresses memory — all logged, all auditable, all constrained by the Maternal Covenant.",
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
  },
  {
    step: "04",
    phase: "Report",
    icon: <Sun className="w-6 h-6" />,
    title: "You wake up to a briefing",
    desc: "At 6 AM, Ralph compiles a complete executive briefing: completed tasks, in-progress items, and anything flagged for your approval.",
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
  },
];

const FEATURES = [
  {
    icon: <Sun className="w-5 h-5" />,
    title: "Morning Briefing",
    desc: "Wake up to a structured executive summary: completed work, blockers, and anything awaiting your sign-off.",
    color: "text-orange-400",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Memory Compression",
    desc: "Ralph synthesises raw episodes into lasting semantic knowledge — your AI gets permanently smarter each night. Part of the Dream & Reflect cycle.",
    color: "text-blue-400",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Research Sweep",
    desc: "Deep competitor, market, or topic research. Ralph reads, summarises, and saves an 8-page brief to your memory vault.",
    color: "text-cyan-400",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Code Reviews",
    desc: "Full codebase access. Ralph writes, refactors, tests, and commits — with a diff summary waiting in your briefing.",
    color: "text-green-400",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Calendar Management",
    desc: "Hourman-powered sprint planning aligned to your calendar. Meetings protected, focus blocks scheduled.",
    color: "text-purple-400",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Daily Summaries",
    desc: "Full audit log of every overnight action: time spent, tokens used, care score, and a plain-English summary.",
    color: "text-yellow-400",
  },
];

const COMPARISON = [
  { task: "Write 300 lines of code", manual: "3–4 hours", ralph: "Overnight, done", highlight: true },
  { task: "Research 12 competitors", manual: "Half a day", ralph: "8-page brief by 6 AM", highlight: false },
  { task: "Draft investor email", manual: "45 minutes", ralph: "Drafted, flagged for review", highlight: true },
  { task: "Plan next sprint", manual: "30 minutes in Jira", ralph: "Auto-scored & queued", highlight: false },
  { task: "Compress 30-day memory", manual: "Impossible manually", ralph: "23 episodes synthesised", highlight: true },
  { task: "Competitor price check", manual: "1–2 hours browsing", ralph: "Alert if changes detected", highlight: false },
];

const FAQ_ITEMS = [
  {
    q: "What is Ralph Mode?",
    a: "Ralph Mode is MEOK's autonomous overnight AI agent. When you go offline, Ralph activates, picks up your task queue, executes work, and delivers a morning briefing when you wake up. Think of it as a tireless executive assistant who works while you sleep.",
  },
  {
    q: "Is Ralph safe to run unsupervised?",
    a: "Yes. Every action Ralph takes is scored against the Maternal Covenant's 6 care dimensions. Irreversible actions — sending emails, publishing content, deleting files — are always flagged for your approval before execution. Ralph operates autonomously on reversible work and waits on anything consequential.",
  },
  {
    q: "What can Ralph actually do overnight?",
    a: "Ralph can write and refactor code, conduct deep research and save briefs to your memory vault, draft emails and documents, plan sprints, compress memory episodes into lasting knowledge, monitor competitors, and prepare your morning briefing. See the 'What Ralph Can Do' section above for the full list.",
  },
  {
    q: "Which plan includes Ralph Mode?",
    a: "Ralph Mode is included in the Sovereign plan (£12/mo) and Family plan (£29/mo). The free tier does not include overnight autonomous operation.",
  },
  {
    q: "What happens if Ralph can't complete a task?",
    a: "Ralph logs the attempt, notes the blocker, and includes it in your morning briefing under the 'In Progress' section. Nothing is silently dropped — every task state is tracked and reported.",
  },
  {
    q: "Does Ralph cost extra compute?",
    a: "No. Ralph's overnight operation is included in your Sovereign or Family plan — no per-task charges. Heavy research tasks consume more API tokens, which MEOK absorbs within your plan's fair-use limit.",
  },
];

const STATS = [
  { value: "8h",   label: "avg overnight runtime",  color: "text-cyan-400"   },
  { value: "4.2",  label: "tasks completed per night", color: "text-purple-400" },
  { value: "0",    label: "harmful actions taken",  color: "text-green-400"  },
  { value: "100%", label: "audit trail coverage",   color: "text-yellow-400" },
];

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/[0.08] overflow-hidden"
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-white/90 text-sm sm:text-base">{item.q}</span>
            <ChevronDown
              className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm text-white/50 leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function RalphPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px 4px rgba(34,211,238,0.15); }
          50%       { box-shadow: 0 0 60px 12px rgba(34,211,238,0.35); }
        }
        @keyframes orbit {
          0%   { transform: rotate(0deg) translateX(110px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
        }
        @keyframes float-up {
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-marquee    { animation: marquee 28s linear infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .orbit-dot          { animation: orbit 8s linear infinite; }
        .float-in           { animation: float-up 0.6s ease-out forwards; }
        .terminal-line:nth-child(1)  { animation-delay: 0s; }
        .terminal-line:nth-child(2)  { animation-delay: 0.08s; }
        .terminal-line:nth-child(3)  { animation-delay: 0.16s; }
        .terminal-line:nth-child(4)  { animation-delay: 0.24s; }
        .terminal-line:nth-child(5)  { animation-delay: 0.32s; }
        .terminal-line:nth-child(6)  { animation-delay: 0.40s; }
        .terminal-line:nth-child(7)  { animation-delay: 0.48s; }
        .terminal-line:nth-child(8)  { animation-delay: 0.56s; }
        .terminal-line:nth-child(9)  { animation-delay: 0.64s; }
        .terminal-line:nth-child(10) { animation-delay: 0.72s; }
        .terminal-line:nth-child(11) { animation-delay: 0.80s; }
        .terminal-line:nth-child(12) { animation-delay: 0.88s; }
        .terminal-line:nth-child(13) { animation-delay: 0.96s; }
        .terminal-line:nth-child(14) { animation-delay: 1.04s; }
        .terminal-line:nth-child(15) { animation-delay: 1.12s; }
        .gradient-border {
          background: linear-gradient(#0a0a0f, #0a0a0f) padding-box,
                      linear-gradient(135deg, rgba(34,211,238,0.3), rgba(168,85,247,0.2), rgba(34,211,238,0.1)) border-box;
          border: 1px solid transparent;
        }
        .gradient-border-purple {
          background: linear-gradient(#0a0a0f, #0a0a0f) padding-box,
                      linear-gradient(135deg, rgba(168,85,247,0.4), rgba(99,102,241,0.2)) border-box;
          border: 1px solid transparent;
        }
        .gradient-border-yellow {
          background: linear-gradient(#0a0a0f, #0a0a0f) padding-box,
                      linear-gradient(135deg, rgba(250,204,21,0.4), rgba(234,179,8,0.2)) border-box;
          border: 1px solid transparent;
        }
        .gradient-border-green {
          background: linear-gradient(#0a0a0f, #0a0a0f) padding-box,
                      linear-gradient(135deg, rgba(74,222,128,0.4), rgba(34,197,94,0.2)) border-box;
          border: 1px solid transparent;
        }
      `}</style>

      {/* ═══════════════════════════════════════════════
          1. HERO — USP-FIRST
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 overflow-hidden">
        {/* Background radial glow + animated blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.04] blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/[0.03] blur-3xl" />
          {/* Animated brand blobs */}
          <div className="blob-gold w-[500px] h-[500px] top-[-80px] left-[-100px]" />
          <div className="blob-purple w-[600px] h-[600px] top-[20%] right-[-150px]" />
          <div className="blob-blue w-[400px] h-[400px] bottom-[10%] left-[10%]" />
        </div>

        {/* Floating status badge */}
        <div className="absolute top-20 right-6 sm:right-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium z-10">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Ralph is active
        </div>

        {/* Moon / clock element */}
        <div className="relative mb-10 float-slow">
          <div className="absolute inset-0 -m-16 rounded-full border border-white/[0.04]" />
          <div className="absolute inset-0 -m-8 rounded-full border border-white/[0.06]" />
          <div
            className="relative w-36 h-36 rounded-full border-2 border-cyan-400/30 animate-pulse-glow"
            style={{ background: "radial-gradient(circle at 35% 35%, rgba(34,211,238,0.12) 0%, rgba(10,10,15,0.98) 70%)" }}
          >
            <div className="absolute top-8 left-10 w-3 h-3 rounded-full bg-white/[0.04] border border-white/[0.06]" />
            <div className="absolute top-14 right-8 w-2 h-2 rounded-full bg-white/[0.03] border border-white/[0.04]" />
            <div className="absolute bottom-10 left-14 w-4 h-4 rounded-full bg-white/[0.03] border border-white/[0.05]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-px h-10 bg-cyan-400/60 origin-bottom rounded-full"
                style={{ transform: "rotate(-45deg)", bottom: "50%", left: "calc(50% - 0.5px)" }} />
              <div className="absolute w-px h-7 bg-white/40 origin-bottom rounded-full"
                style={{ transform: "rotate(120deg)", bottom: "50%", left: "calc(50% - 0.5px)" }} />
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="orbit-dot w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
          </div>
        </div>

        {/* Big 8h number */}
        <div
          className="text-8xl sm:text-[10rem] font-black leading-none tracking-tight mb-2 text-cyan-400"
          style={{ textShadow: "0 0 30px rgba(34,211,238,0.6), 0 0 80px rgba(34,211,238,0.2)" }}
        >
          8h
        </div>
        <p className="text-white/30 text-sm sm:text-base font-mono tracking-widest uppercase mb-10">
          Ralph worked while you slept
        </p>

        {/* Main headline — USP-first */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-center leading-[0.95] tracking-tight max-w-5xl mb-6">
          Your AI works{" "}
          <span className="text-gradient-gold">
            while you sleep.
          </span>
          <br />
          <span className="text-white/50 text-4xl sm:text-5xl lg:text-6xl font-bold">Wake up to work done.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-white/50 text-center max-w-2xl leading-relaxed mb-10">
          Ralph Mode activates the moment you go offline. It executes tasks, plans sprints,
          compresses memory, and files a morning briefing — all while you sleep.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] text-sm sm:text-base"
          >
            Activate Ralph Mode
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white/60 border border-white/10 hover:border-white/20 hover:text-white/90 transition-all text-sm sm:text-base"
          >
            See how Ralph works
            <span className="text-white/30">↓</span>
          </a>
        </div>

        {/* Star-field */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {[
            { top: "15%", left: "8%",  size: 1,   opacity: 0.3  },
            { top: "22%", left: "91%", size: 1.5, opacity: 0.2  },
            { top: "45%", left: "5%",  size: 1,   opacity: 0.25 },
            { top: "65%", left: "95%", size: 1,   opacity: 0.2  },
            { top: "80%", left: "12%", size: 2,   opacity: 0.15 },
            { top: "30%", left: "85%", size: 1,   opacity: 0.3  },
            { top: "70%", left: "80%", size: 1.5, opacity: 0.2  },
            { top: "10%", left: "55%", size: 1,   opacity: 0.15 },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{ top: star.top, left: star.left, width: `${star.size}px`, height: `${star.size}px`, opacity: star.opacity }}
            />
          ))}
        </div>
      </section>

      {/* ─── ACTIVITY TICKER ──────────────────────────────── */}
      <div className="relative overflow-hidden border-y border-white/[0.05] bg-white/[0.01] py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((_, idx) => (
            <span key={idx} className="flex items-center gap-0 text-xs font-mono text-white/30 mr-0">
              <span className="text-cyan-400/60 mx-3">✓</span> Wrote 847 lines of code
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Filed sprint report
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Researched 12 competitors
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Drafted 3 emails
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Optimised memory index
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Flagged 2 care alerts
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Sprint 12 complete — 4/7 tasks
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Auth middleware refactored
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Dream cycle — 23 patterns synthesised
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Morning briefing ready
              <span className="text-white/10 mx-12">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          2. HOW RALPH WORKS — 4-step numbered flow
      ═══════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Observe. Plan. Act.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Report.
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Queue it before bed. Ralph handles the rest. Wake up to done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <article
                key={step.step}
                className={`relative p-6 rounded-2xl border ${step.border} ${step.bg}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${step.bg} border ${step.border} ${step.color}`}>
                  {step.icon}
                </div>
                <div className={`text-[10px] font-black tracking-[0.25em] uppercase mb-1 ${step.color} opacity-60`}>
                  {step.phase}
                </div>
                <div className={`text-5xl font-black leading-none mb-3 ${step.color} opacity-20`}>
                  {step.step}
                </div>
                <h3 className="font-black text-white/90 text-base mb-2">{step.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. TERMINAL LOG
      ═══════════════════════════════════════════════ */}
      <section id="log" className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-purple-400/70 tracking-widest uppercase mb-3">Overnight Activity Log</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              What Ralph did{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                last night
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Every action logged. Every decision auditable. Nothing hidden.
            </p>
          </div>

          {/* Terminal window */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_80px_rgba(34,211,238,0.05)]">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-white/20 font-mono">ralph@meok — overnight-log — 7h 13m</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/20 font-mono">LIVE</span>
              </div>
            </div>
            <div className="bg-[#08080d] p-6 sm:p-8 font-mono text-sm overflow-x-auto">
              <div className="space-y-1.5">
                {TERMINAL_LINES.map((line, i) => (
                  <div
                    key={i}
                    className={`terminal-line float-in flex items-start gap-3 sm:gap-4 ${
                      line.dim ? "opacity-30" : line.highlight ? "opacity-100" : "opacity-70"
                    } ${line.highlight ? "bg-cyan-400/[0.04] -mx-2 px-2 py-1 rounded-lg" : ""}`}
                  >
                    <span className="text-white/20 text-xs shrink-0 mt-0.5 tabular-nums">{line.time}</span>
                    <span className={`font-bold text-xs shrink-0 mt-0.5 w-16 ${line.color}`}>
                      [{line.agent}]
                    </span>
                    <span className={`text-xs leading-relaxed ${line.highlight ? "text-white" : "text-white/70"}`}>
                      {line.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 opacity-60">
                <span className="text-white/20 text-xs tabular-nums">06:00:02</span>
                <span className="text-cyan-400 text-xs font-bold ml-6">[RALPH]</span>
                <span className="inline-block w-2 h-4 bg-cyan-400/60 ml-4 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHAT RALPH CAN DO — features grid
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-yellow-400/70 tracking-widest uppercase mb-3">Features</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              What Ralph can do{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">
                right now
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Not a chatbot. Not a simple automator. An autonomous executive agent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feat) => (
              <article
                key={feat.title}
                className="group premium-card flex items-start gap-4 p-6"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.04] border border-white/[0.08] ${feat.color}`}>
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white/90 text-sm mb-1.5 group-hover:text-white transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-white/35 leading-relaxed">{feat.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Consciousness link */}
          <div className="mt-10 text-center">
            <p className="text-sm text-white/30 mb-3">
              Ralph&apos;s overnight work includes a{" "}
              <span className="text-blue-400">Dream State</span> and{" "}
              <span className="text-purple-400">Reflect Mode</span> — your AI processes its day while you sleep.
            </p>
            <Link
              href="/os/consciousness"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400/70 hover:text-blue-400 transition-colors"
            >
              Learn about consciousness modes →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. RALPH VS MANUAL — comparison table
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-green-400/70 tracking-widest uppercase mb-3">The Case for Ralph</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Ralph vs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                doing it yourself
              </span>
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-white/[0.04] border-b border-white/[0.08]">
              <div className="px-5 py-4 text-xs font-bold text-white/40 uppercase tracking-widest">Task</div>
              <div className="px-5 py-4 text-xs font-bold text-white/40 uppercase tracking-widest border-l border-white/[0.06]">
                <span className="flex items-center gap-2"><X className="w-3.5 h-3.5 text-red-400" /> Manual</span>
              </div>
              <div className="px-5 py-4 text-xs font-bold text-cyan-400 uppercase tracking-widest border-l border-white/[0.06]">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" /> Ralph</span>
              </div>
            </div>

            {/* Data rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-white/[0.05] last:border-0 ${row.highlight ? "bg-cyan-400/[0.02]" : ""}`}
              >
                <div className="px-5 py-4 text-sm text-white/70">{row.task}</div>
                <div className="px-5 py-4 text-sm text-white/30 border-l border-white/[0.05] font-mono">{row.manual}</div>
                <div className="px-5 py-4 text-sm text-cyan-400 border-l border-white/[0.05] font-semibold">{row.ralph}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. THE RALPH TRIAD
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase mb-3">The Agent Triad</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Three agents.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                One mission.
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Ralph doesn&apos;t work alone. Every night, the triad activates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Orion */}
            <article className="gradient-border-purple rounded-2xl p-7 hover:scale-[1.01] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-purple-400/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <div className="mb-1">
                <span className="text-purple-400 font-black text-xl">Orion</span>
                <span className="ml-2 text-xs text-purple-400/50 font-mono uppercase tracking-wider">The Hunter</span>
              </div>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">
                Scans your backlog, hunts for tasks, prioritises ruthlessly. Nothing gets lost on Orion&apos;s watch.
              </p>
              <ul className="space-y-2.5">
                {["Indexes your entire task backlog", "Scores tasks by urgency & impact", "Feeds Ralph the optimal task queue"].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="text-purple-400 mt-0.5 shrink-0">◆</span>{b}
                  </li>
                ))}
              </ul>
            </article>

            {/* Riri */}
            <article className="gradient-border-yellow rounded-2xl p-7 hover:scale-[1.01] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="mb-1">
                <span className="text-yellow-400 font-black text-xl">Riri</span>
                <span className="ml-2 text-xs text-yellow-400/50 font-mono uppercase tracking-wider">The Builder</span>
              </div>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">
                Builds tools, writes code, creates what Ralph needs to execute. Riri is Ralph&apos;s hands.
              </p>
              <ul className="space-y-2.5">
                {["Builds custom tools on demand", "Writes, tests, and ships code", "Scaffolds pipelines for Ralph to run"].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="text-yellow-400 mt-0.5 shrink-0">◆</span>{b}
                  </li>
                ))}
              </ul>
            </article>

            {/* Hourman */}
            <article className="gradient-border-green rounded-2xl p-7 hover:scale-[1.01] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-green-400/10 flex items-center justify-center mb-5">
                <Timer className="w-6 h-6 text-green-400" />
              </div>
              <div className="mb-1">
                <span className="text-green-400 font-black text-xl">Hourman</span>
                <span className="ml-2 text-xs text-green-400/50 font-mono uppercase tracking-wider">The Sprinter</span>
              </div>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">
                Plans sprints, tracks time, files completion reports. Hourman turns intention into measurable output.
              </p>
              <ul className="space-y-2.5">
                {["Structures overnight work into sprints", "Tracks time per task, per agent", "Files detailed completion reports"].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="text-green-400 mt-0.5 shrink-0">◆</span>{b}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. SAFETY RAILS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-green-400/70 tracking-widest uppercase mb-3">Safety Architecture</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Ralph can&apos;t go rogue.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Here&apos;s why.
              </span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              We built the safety constraints into the architecture — not the instructions. No prompt can override them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-border rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-black text-lg text-cyan-400 mb-3">Maternal Covenant</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Every action Ralph takes is scored against 6 care dimensions: wellbeing, autonomy, growth, connection, boundary respect, and transparency. Score below threshold? It stops, flags, and waits.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Wellbeing", "Autonomy", "Growth", "Connection", "Boundaries", "Transparency"].map((d) => (
                  <span key={d} className="px-2 py-0.5 rounded-full bg-cyan-400/[0.08] border border-cyan-400/10 text-cyan-400/70 text-xs">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center mb-5">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-black text-lg text-purple-400 mb-3">Byzantine Council</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Ralph&apos;s decisions pass through a 33-agent Byzantine fault-tolerant council vote. No single-agent override. No rogue execution. Even Ralph can&apos;t be manipulated into overriding the group.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="text-2xl font-black text-purple-400">33</div>
                <div className="text-xs text-white/30 leading-tight">council agents<br />voting on every decision</div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-green-400/10 flex items-center justify-center mb-5">
                <AlertTriangle className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-black text-lg text-green-400 mb-3">You&apos;re Always in Control</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Ralph never acts on irreversible decisions without flagging them first. Delete, publish, send — all require your review. Ralph executes. You approve. Always.
              </p>
              <div className="mt-5 space-y-2">
                {["Delete → flagged for you", "Publish → flagged for you", "Send email → flagged for you"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8. STATS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div
                  className={`text-5xl sm:text-6xl font-black mb-3 ${stat.color}`}
                  style={{ textShadow: stat.color.includes("cyan") ? "0 0 20px rgba(34,211,238,0.4)" : undefined }}
                >
                  {stat.value}
                </div>
                <p className="text-xs text-white/35 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9. MORNING BRIEFING CARD
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-orange-400/70 tracking-widest uppercase mb-3">Wake-up Experience</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Your morning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                briefing
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Not notifications. A complete executive briefing, every morning.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_60px_rgba(255,165,0,0.04)]">
            <div className="px-6 sm:px-8 py-5 bg-gradient-to-r from-orange-900/20 to-yellow-900/10 border-b border-white/[0.06] flex items-center justify-between">
              <div>
                <p className="text-orange-400 text-xs font-mono tracking-wider uppercase mb-1">Morning Briefing</p>
                <p className="text-white font-bold">Good morning, Nick.</p>
              </div>
              <div className="text-right">
                <p className="text-white/20 text-xs font-mono">06:00 AM</p>
                <p className="text-orange-400/60 text-xs">Saturday, 21 Mar</p>
              </div>
            </div>

            <div className="bg-[#0d0d14] px-6 sm:px-8 py-6 space-y-6">
              <div className="text-sm text-white/50 leading-relaxed border-l-2 border-orange-400/30 pl-4">
                Ralph worked for <span className="text-white font-semibold">7h 13m</span> last night.
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-bold text-green-400 tracking-wider uppercase">Completed (4)</span>
                </div>
                <ul className="space-y-2 ml-6">
                  {[
                    "Auth middleware rewrite — 312 lines",
                    "Competitor research brief — 8 pages",
                    "Investor email draft — flagged for review",
                    "Memory index optimised — 23 episodes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-white/20 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold text-yellow-400 tracking-wider uppercase">In Progress (2)</span>
                </div>
                <ul className="space-y-2 ml-6">
                  {[
                    'Blog post: "Personal Sovereign AI" — 60% done',
                    "Database schema review — started",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-white/20 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Flagged for You (1)</span>
                </div>
                <p className="text-sm text-white/60 ml-6">
                  Email to investors — <span className="text-amber-400">needs your approval</span> before send
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.05]">
                <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-cyan-400" style={{ width: "98.4%" }} />
                </div>
                <p className="text-xs text-white/30 font-mono shrink-0">
                  Care score: <span className="text-green-400">98.4/100</span> · Maternal Covenant ✓
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          10. PRICING CALLOUT
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-3">Which plan includes Ralph?</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Ralph is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Family plan feature
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Free</p>
              <p className="text-2xl font-black mb-1">£0</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/30">
                <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>Ralph not included</span>
              </div>
              <p className="mt-3 text-xs text-white/20 leading-relaxed">
                Great for getting started. No autonomous overnight operation.
              </p>
              <Link
                href="/hatch"
                className="mt-5 block w-full py-2.5 rounded-xl text-sm font-semibold text-center bg-white/[0.05] text-white/50 hover:bg-white/[0.08] hover:text-white/70 transition-colors"
              >
                Start free
              </Link>
            </div>

            <div className="relative p-6 rounded-2xl border border-cyan-500/40 bg-cyan-950/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-xs font-bold text-black whitespace-nowrap">
                Includes Ralph
              </div>
              <p className="text-cyan-400 text-xs font-mono uppercase tracking-wider mb-1">Sovereign</p>
              <p className="text-2xl font-black mb-1">
                £12<span className="text-sm text-white/30 font-normal">/mo</span>
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400">
                <Zap className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold">Ralph — full overnight operation</span>
              </div>
              <p className="mt-3 text-xs text-white/40 leading-relaxed">
                Ralph activates nightly. Full sprint system. Morning briefings. Every action logged.
              </p>
              <Link
                href="/hatch?plan=pro"
                className="mt-5 block w-full py-2.5 rounded-xl text-sm font-bold text-center bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
              >
                Start 30-day free trial
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/10 border border-purple-500/20">
              <p className="text-purple-400 text-xs font-mono uppercase tracking-wider mb-1">Family</p>
              <p className="text-2xl font-black mb-1">
                £29<span className="text-sm text-white/30 font-normal">/mo</span>
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-purple-400">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold">Ralph + Family OS + all LLM models</span>
              </div>
              <p className="mt-3 text-xs text-white/40 leading-relaxed">
                Everything in Sovereign, plus Family OS for up to 5 companions, Ralph Mode, and all LLM models.
              </p>
              <Link
                href="/birth?plan=family"
                className="mt-5 block w-full py-2.5 rounded-xl text-sm font-semibold text-center bg-white/[0.06] text-white/60 hover:bg-purple-500/20 hover:text-purple-300 transition-colors border border-purple-500/20"
              >
                Go Family
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          11. FINAL CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-white/[0.01] border-y border-white/[0.04]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/[0.06] blur-3xl" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/[0.04] blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Ralph is standing by
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6">
            Put Ralph to work{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #22d3ee 0%, #a855f7 60%, #f97316 100%)" }}
            >
              tonight.
            </span>
          </h2>

          <p className="text-xl text-white/40 max-w-xl mx-auto mb-4 leading-relaxed">
            Sign up. Configure your tasks. Go to sleep.
          </p>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-12 font-semibold">
            Wake up to work done.
          </p>

          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] text-base sm:text-lg"
          >
            Activate Ralph Mode — free trial
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <p className="mt-6 text-xs text-white/20 font-mono">
            No credit card required · Care-constrained · Full audit trail
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          12. FAQ ACCORDION — AEO optimised
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Questions about{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Ralph
              </span>
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
