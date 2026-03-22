"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Search,
  Mail,
  Brain,
  Calendar,
  ChevronDown,
  Check,
  Clock,
  Shield,
  BookOpen,
  Layers,
  FolderOpen,
  Users,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does MEOK read my emails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK connects to Gmail via OAuth with minimal scopes. Sensitive content is processed locally on your device using Ollama — our servers never see your emails. You grant access, you can revoke it at any time, and you control exactly what MEOK can touch.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is built for data sovereignty from the ground up. You own your data, can export it in full at any time, and can request complete deletion. Sensitive content is processed locally via Ollama. We publish our data architecture openly — no hidden processing.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK connect to my existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK connects via secure integrations to Gmail, Google Calendar, GitHub, and Notion. Each connection uses OAuth with the minimum permissions needed. You can disconnect any integration at any time and your memory remains intact.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK replace Notion or Slack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK isn't trying to replace your existing tools — it's the intelligence layer that sits across them. It remembers context from all of them so you never have to manually connect the dots. Think of it as the colleague who was in every meeting and read every document.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take for MEOK to become useful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most users find it genuinely useful within the first week. By day 30, it knows your priorities, writing style, and the people who matter most. The more context you give it, the more powerful it becomes — it compounds over time in a way no other tool does.",
      },
    },
    {
      "@type": "Question",
      name: "When does MEOK Work launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Work launches April 2026. Join the waitlist now for early access, founding member pricing, and a free 30-day trial at launch.",
      },
    },
  ],
};

const WORK_CARDS = [
  {
    icon: Brain,
    iconClass: "icon-gold",
    title: "Meeting memory",
    body: "Every meeting, transcribed and stored. Six months later, when a client references that conversation, you pull it up in three seconds — not three Slack searches.",
  },
  {
    icon: FileText,
    iconClass: "icon-blue",
    title: "Document context",
    body: "Your documents don't exist in isolation. MEOK links them to the meetings, emails, and decisions that created them. The proposal remembers why it was written.",
  },
  {
    icon: Mail,
    iconClass: "icon-purple",
    title: "Email intelligence",
    body: "Not just search. MEOK understands tone, relationships, and history. It drafts in your voice, warns you when something feels off, and never forgets a thread.",
  },
  {
    icon: BookOpen,
    iconClass: "icon-gold",
    title: "Decision log",
    body: "Every major decision, automatically catalogued with the context that led to it. Six months later, when someone asks why — you have the answer.",
  },
  {
    icon: Search,
    iconClass: "icon-blue",
    title: "Research synthesis",
    body: "Stop losing track of what you read. MEOK synthesises research across sources, links it to your projects, and resurfaces it when it's actually relevant.",
  },
  {
    icon: FolderOpen,
    iconClass: "icon-purple",
    title: "Project continuity",
    body: "When a team member leaves, their knowledge doesn't walk out with them. MEOK holds the institutional memory — client preferences, open questions, unfinished threads.",
  },
];

const SCENARIOS = [
  {
    situation: "You're in a client meeting.",
    pain: "They reference a conversation from four months ago. You remember it vaguely. You're scrambling.",
    solution: "With MEOK, you pull up the exact exchange in three seconds — with context, sentiment, and action items from that day.",
    accent: "text-[#c9a84c]",
    border: "border-[#c9a84c]/25",
    bg: "bg-[#c9a84c]/[0.05]",
    num: "01",
  },
  {
    situation: "A key team member just handed in their notice.",
    pain: "Everything they knew — client relationships, project history, unwritten rules — is about to walk out the door with them.",
    solution: "With MEOK, it doesn't. Their context, decisions, and institutional knowledge is already in the memory. The next person starts where they left off.",
    accent: "text-blue-400",
    border: "border-blue-400/25",
    bg: "bg-blue-400/[0.04]",
    num: "02",
  },
  {
    situation: "It's 8pm. You're writing a proposal.",
    pain: "You know you had a great framework for this exact client type three weeks ago. You can't find it. You rewrite from scratch.",
    solution: "With MEOK, you ask. It finds the framework, the context around it, and the email where you first pitched a version of this idea.",
    accent: "text-[#2d9b8a]",
    border: "border-[#2d9b8a]/25",
    bg: "bg-[#2d9b8a]/[0.04]",
    num: "03",
  },
];

const STACK_COMPARE = [
  {
    tool: "Notion",
    problem: "Requires you to manually structure everything. If you didn't write it down, it's gone. No intelligence — just storage.",
    meok: "MEOK learns from your context automatically. You don't organise it — it organises around you.",
    iconClass: "icon-purple",
  },
  {
    tool: "Slack",
    problem: "Conversations buried under 12 other channels. Institutional knowledge lives in threads nobody can find six months later.",
    meok: "MEOK pulls the relevant thread and the context around it. Not just the message — the meaning.",
    iconClass: "icon-blue",
  },
  {
    tool: "Google Drive",
    problem: "Unstructured folders. No connection between documents. The proposal doesn't know about the email that informed it.",
    meok: "MEOK links your documents to the conversations, meetings, and decisions that created them. Context, always.",
    iconClass: "icon-gold",
  },
  {
    tool: "ChatGPT",
    problem: "Forgets you every session. You paste context in every time. No connection to your actual work, tools, or history.",
    meok: "MEOK builds on everything. The longer you use it, the more powerful it gets. Day 365 looks nothing like day 1.",
    iconClass: "icon-purple",
  },
];

const STATS = [
  {
    stat: "2.5 hrs",
    label: "per day spent searching",
    source: "McKinsey Global Institute",
    note: "The average knowledge worker spends 2.5 hours daily searching for information — that's 30% of the working week.",
  },
  {
    stat: "42%",
    label: "of institutional knowledge leaves with each person",
    source: "IBM Institute for Business Value",
    note: "When someone leaves, nearly half of what they knew was never written down anywhere.",
  },
  {
    stat: "19 mins",
    label: "to refocus after an interruption",
    source: "University of California, Irvine",
    note: "Every context switch costs nearly 20 minutes of productive time. MEOK reduces context switching by holding the context for you.",
  },
  {
    stat: "£26K",
    label: "per knowledge worker per year in lost productivity",
    source: "IDC Research",
    note: "The economic cost of information fragmentation, searching, and rebuilding lost context.",
  },
];

const FAQS = [
  {
    q: "Does MEOK read my emails?",
    a: "MEOK connects to Gmail via OAuth with minimal scopes. Sensitive content is processed locally on your device using Ollama — our servers never see your emails. You grant access, you can revoke it at any time, and you control exactly what MEOK can touch.",
  },
  {
    q: "Is MEOK GDPR compliant?",
    a: "Yes. MEOK is built for data sovereignty from the ground up. You own your data, can export it in full at any time, and can request complete deletion. Sensitive content is processed locally via Ollama. We publish our data architecture openly — no hidden processing.",
  },
  {
    q: "How does MEOK connect to my existing tools?",
    a: "MEOK connects via secure integrations to Gmail, Google Calendar, GitHub, and Notion. Each connection uses OAuth with the minimum permissions needed. You can disconnect any integration at any time and your memory remains intact.",
  },
  {
    q: "Will MEOK replace Notion or Slack?",
    a: "MEOK isn't trying to replace your existing tools — it's the intelligence layer that sits across them. It remembers context from all of them so you never have to manually connect the dots. Think of it as the colleague who was in every meeting and read every document.",
  },
  {
    q: "How long does it take for MEOK to become useful?",
    a: "Most users find it genuinely useful within the first week. By day 30, it knows your priorities, writing style, and the people who matter most. The more context you give it, the more powerful it becomes — it compounds over time in a way no other tool does.",
  },
  {
    q: "When does MEOK Work launch?",
    a: "MEOK Work launches April 2026. Join the waitlist now for early access, founding member pricing, and a free 30-day trial at launch.",
  },
];

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
        aria-label={`Toggle answer: ${q}`}
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

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MarketingNav activePage="work" />

      {/* ═══════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
        <div aria-hidden className="blob-gold w-[600px] h-[600px] top-[-100px] left-[-100px] opacity-60" />
        <div aria-hidden className="blob-purple w-[500px] h-[500px] bottom-[-50px] right-[-80px] opacity-70" />
        <div aria-hidden className="blob-blue w-[400px] h-[400px] top-[30%] right-[10%]" />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-black tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Launching April 2026 — join the waitlist
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl icon-gold flex items-center justify-center float-slow">
              <Briefcase className="w-9 h-9" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-[0.92] tracking-tight mb-6">
            Everything you know.{" "}
            <span className="text-gradient-gold">Instantly findable. Never lost again.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-4">
            You spent 20 minutes finding that email. You rebuilt context that already existed somewhere.
            You rewrote something you wrote three weeks ago. You know the feeling.
          </p>
          <p className="text-base text-white/35 max-w-xl mx-auto leading-relaxed mb-10">
            MEOK is the AI that holds your entire professional context — and makes it findable in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm sm:text-base gold-glow"
            >
              Join waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/compare"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white/60 border border-white/10 hover:border-[#c9a84c]/40 hover:text-white transition-all text-sm sm:text-base"
            >
              See how MEOK compares
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c18] via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src="/brand/ralph-agents.png"
            alt="MEOK Work — AI professional memory"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Ralph Mode explainer */}
        <div className="relative mt-10 w-full max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#c9a84c]/25 bg-[#c9a84c]/[0.05] px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-10 h-10 rounded-xl icon-gold flex items-center justify-center flex-shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-1">Meet Ralph</p>
              <p className="text-sm text-white/70 leading-relaxed">
                <span className="font-black text-white">Ralph is MEOK&apos;s autonomous work agent</span> — a persistent AI worker that executes tasks, manages projects, and takes action on your behalf while you&apos;re away. Think of Ralph as your always-on digital executive assistant.
              </p>
            </div>
            <Link
              href="/ralph"
              className="flex-shrink-0 flex items-center gap-1.5 text-xs font-black text-[#c9a84c] hover:text-[#d4b463] transition-colors whitespace-nowrap"
            >
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. THE EMOTIONAL TRUTH — STATS
      ═══════════════════════════════════════════════ */}
      <div className="section-divider" />
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              The knowledge loss problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              This isn't an organisation problem.{" "}
              <span className="text-gradient-gold">It's your daily reality.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
              The research is clear. Knowledge workers are drowning in information they can't find when they need it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((s) => (
              <div key={s.stat} className="premium-card p-7 flex flex-col gap-3">
                <div className="text-4xl font-black text-[#c9a84c] leading-none">{s.stat}</div>
                <div className="text-sm font-black text-white leading-snug">{s.label}</div>
                <div className="text-xs text-white/30 leading-relaxed mt-auto">{s.note}</div>
                <div className="text-[10px] text-white/15 font-mono mt-1">{s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ═══════════════════════════════════════════════
          3. THREE REAL-WORK SCENARIOS
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Real situations. Real solutions.
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              The moments where{" "}
              <span className="text-gradient-gold">MEOK changes everything.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {SCENARIOS.map((s) => (
              <div
                key={s.num}
                className={`rounded-2xl border ${s.border} ${s.bg} overflow-hidden`}
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-0">
                  <div className={`px-8 py-8 flex items-start md:items-center ${s.accent} opacity-30`}>
                    <span className="text-5xl font-black font-mono leading-none">{s.num}</span>
                  </div>
                  <div className="px-8 py-8 border-t md:border-t-0 md:border-l border-white/[0.06]">
                    <p className="text-xs font-black tracking-[0.15em] uppercase text-white/25 mb-3">The situation</p>
                    <p className="text-white/70 font-semibold text-sm leading-relaxed mb-2">{s.situation}</p>
                    <p className="text-white/40 text-sm leading-relaxed">{s.pain}</p>
                  </div>
                  <div className={`px-8 py-8 border-t md:border-t-0 md:border-l ${s.border}`}>
                    <p className={`text-xs font-black tracking-[0.15em] uppercase mb-3 ${s.accent}`}>With MEOK</p>
                    <p className="text-white/80 text-sm leading-relaxed">{s.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHAT MEOK HOLDS FOR YOUR WORK — 6 CARDS
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              What MEOK holds
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Your entire professional context.{" "}
              <span className="text-gradient-gold">In one place.</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
              Six dimensions of your work life, all connected, all searchable, all remembered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORK_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="premium-card p-7 flex flex-col gap-4">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${card.iconClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-base text-white">{card.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. MEOK VS YOUR CURRENT STACK
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Honest comparison
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              The tools you're using.{" "}
              <span className="text-gradient-gold">What they're missing.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
              None of your current tools are wrong. They're just not connected. MEOK is the active intelligence that links them all.
            </p>
          </div>

          <div className="space-y-4">
            {STACK_COMPARE.map((item) => (
              <div
                key={item.tool}
                className="rounded-2xl border border-white/[0.07] overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] items-stretch">
                  <div className="px-7 py-6 flex items-center gap-3 border-b md:border-b-0 md:border-r border-white/[0.06]">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconClass}`}>
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="font-black text-sm text-white">{item.tool}</span>
                  </div>
                  <div className="px-7 py-6 border-b md:border-b-0 md:border-r border-white/[0.06]">
                    <p className="text-xs text-white/25 uppercase tracking-widest font-black mb-2">The problem</p>
                    <p className="text-sm text-white/45 leading-relaxed">{item.problem}</p>
                  </div>
                  <div className="px-7 py-6 bg-[#c9a84c]/[0.03]">
                    <p className="text-xs text-[#c9a84c]/70 uppercase tracking-widest font-black mb-2">MEOK</p>
                    <p className="text-sm text-white/65 leading-relaxed">{item.meok}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. HOW IT WORKS — 3 STEPS
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              How it works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              From chaos to clarity.{" "}
              <span className="text-gradient-gold">In three steps.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div
              aria-hidden
              className="hidden md:block absolute top-[2.2rem] left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent"
            />
            {[
              {
                step: "01",
                title: "Connect your tools",
                desc: "Link Gmail, Calendar, GitHub, and Notion in minutes. MEOK reads your existing context and builds its first memory of your professional world. No restructuring required.",
                accent: "text-[#c9a84c]",
                border: "border-[#c9a84c]/30",
              },
              {
                step: "02",
                title: "It learns, you work",
                desc: "Every document, email thread, meeting, and decision feeds the memory. After one week, MEOK knows your priorities, your writing style, and the people who matter most.",
                accent: "text-blue-400",
                border: "border-blue-400/30",
              },
              {
                step: "03",
                title: "Context, always",
                desc: "Ask anything about your work. Find any file, email, decision, or idea in seconds. Draft in your voice. Never start from zero again.",
                accent: "text-[#2d9b8a]",
                border: "border-[#2d9b8a]/30",
              },
            ].map((step) => (
              <div key={step.step} className={`premium-card p-8 border ${step.border}`}>
                <div className={`text-4xl font-black mb-5 ${step.accent} font-mono`}>{step.step}</div>
                <h3 className="font-black text-lg text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. PRIVACY + SOVEREIGNTY
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card p-10 sm:p-14 border border-[#c9a84c]/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl icon-gold flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black tracking-[0.2em] uppercase text-[#c9a84c]/60 block mb-1">
                  Data sovereignty
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Your professional intelligence belongs to you.
                </h2>
              </div>
            </div>
            <p className="text-white/40 leading-relaxed mb-8 max-w-2xl text-sm">
              Sensitive content — confidential emails, proprietary documents, credentials — is processed locally on your device via Ollama. It never touches our servers. Everything is encrypted at rest. You can export your entire memory at any time, and delete it completely if you choose to leave. GDPR compliant by architecture, not by policy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Local processing", desc: "Sensitive content processed on your device" },
                { label: "Full export", desc: "Your memory, always yours to take with you" },
                { label: "Zero training", desc: "Your data never trains anyone else's model" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2d9b8a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-black text-white">{item.label}</p>
                    <p className="text-xs text-white/30 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8. FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Common questions
            </span>
            <h2 className="text-4xl font-black">Things professionals ask us.</h2>
            <p className="text-white/35 mt-3 text-sm">We answer honestly. Even when the honest answer is &ldquo;not yet.&rdquo;</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9. FINAL CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div
          aria-hidden
          className="blob-gold w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-3xl icon-gold flex items-center justify-center float-slow">
              <Clock className="w-7 h-7" />
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] mb-4 tracking-tight">
            Stop losing time{" "}
            <span className="text-gradient-gold">to lost knowledge.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            MEOK Work launches April 2026. Early access members get founding pricing and a free 30-day trial. Your context is waiting.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base sm:text-lg gold-glow"
          >
            Join the waitlist — free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-6 text-xs text-white/20 font-mono">
            No credit card required · GDPR compliant · Data sovereign by design
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
