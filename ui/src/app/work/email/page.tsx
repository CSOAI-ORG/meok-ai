"use client";

import Link from "next/link";
import {
  Mail,
  Sparkles,
  AlignLeft,
  Bell,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  Send,
  User,
  History,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { useState } from "react";

/* ─── DATA ─────────────────────────────────────────────── */

const FEATURES = [
  {
    Icon: Sparkles,
    iconClass: "icon-blue",
    title: "Smart drafting",
    desc: "Describe the email you need in a few words and MEOK drafts it in your voice. It knows your writing style, your relationship with this contact, and the history of your thread.",
    example: '"Decline the meeting, keep it warm, mention rescheduling next month"',
  },
  {
    Icon: AlignLeft,
    iconClass: "icon-gold",
    title: "Thread summarisation",
    desc: "Catch up on a 50-message thread in 10 seconds. Structured digest: key decisions, open actions, outstanding questions — all extracted automatically.",
    example: '"What were the 3 key decisions from the agency thread last week?"',
  },
  {
    Icon: Bell,
    iconClass: "icon-purple",
    title: "Follow-up reminders",
    desc: "Every email you send that expects a reply is tracked. MEOK reminds you to follow up exactly when it matters — not too soon, not too late.",
    example: '"Remind me if Sarah hasn\'t replied by Thursday"',
  },
  {
    Icon: MessageSquare,
    iconClass: "icon-green",
    title: "Priority inbox",
    desc: "MEOK learns which senders and topics demand your attention. Urgent signals surface immediately. Low-signal mail is quietly batched for when you're ready.",
    example: '"Your 3 most urgent emails right now, with suggested actions"',
  },
];

const STYLE_PATTERNS = [
  {
    label: "Formality per contact",
    desc: "Learns how formal or casual you are with each person — clients get professional closings, close colleagues get first names.",
  },
  {
    label: "How you open emails",
    desc: "Whether you say \"Hi\" or \"Hey\" or jump straight to the point — MEOK mirrors your natural opener every time.",
  },
  {
    label: "Your sign-off style",
    desc: "\"Best,\" \"Thanks,\" \"Cheers\" — it tracks which you use with whom, so every draft closes correctly.",
  },
  {
    label: "Response length norms",
    desc: "Some people get three sentences. Some get three paragraphs. MEOK learns your length instinct per relationship.",
  },
];

const FAQ = [
  {
    q: "Does MEOK actually send emails?",
    a: "Only when you explicitly approve each one. MEOK drafts and queues — it never sends without your confirmation. You can review every word before anything leaves your inbox. You can optionally set up auto-approve rules for low-stakes reply types (like scheduling confirmations) if you choose.",
  },
  {
    q: "Can it draft in my voice?",
    a: "Yes — and it's genuinely yours, not a generic template. MEOK trains a local style model from emails you've written and approved. It learns your tone, vocabulary, formality per contact, and how you structure different types of messages. The model lives on your device.",
  },
  {
    q: "Does it read all my emails automatically?",
    a: "No. MEOK uses OAuth with minimal-scope access. It reads only what you direct it to — specific threads, your drafts, or explicit summaries you request. Your inbox is never batch-scanned on a server without your instruction.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Email — Email That Works For You. Not Against You.",
  description:
    "Smart drafting, thread summarisation, follow-up reminders, and priority inbox. Sovereign.",
  url: "https://meok.ai/work/email",
  provider: { "@type": "Organization", name: "MEOK AI LTD", url: "https://meok.ai" },
};

/* ─── FAQ ITEM ─────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
        aria-label={`Toggle answer: ${q}`}
      >
        <span className="font-semibold text-[#f5f0e8] text-sm leading-relaxed">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-sm text-[#f5f0e8]/60 leading-relaxed">{a}</p>}
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────── */
export default function EmailPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav activePage="work" />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-semibold text-[#a0a0b8] hover:text-[#c9a84c] transition-colors mb-8">
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Mail className="w-3 h-3" />
              Work OS · Email
            </div>
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            You get 127 emails a day.{" "}
            <span className="text-gradient-gold">MEOK reads all of them. You only need to know 5.</span>
          </h1>

          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-2 leading-relaxed">
            The average professional receives 121 emails per day and spends 28% of their working week
            in their inbox. MEOK surfaces what matters, drafts your replies in your voice, and
            tracks every follow-up — so you can close the tab.
          </p>
          <p className="text-[#f5f0e8]/40 text-xs max-w-lg mx-auto mb-10">
            Source: McKinsey Global Institute — The Social Economy (2012); updated figures via Adobe Email Usage Study.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm"
              aria-label="Join the MEOK waitlist to get AI Email access"
            >
              Tame your inbox — free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/work" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8]/80 transition-colors font-medium">
              See all Work OS features →
            </Link>
          </div>

          {/* Draft in 3 words demo */}
          <div className="mt-16 max-w-lg mx-auto premium-card p-6 text-left">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              3 words → full draft
            </p>
            <div className="bg-[#0d0c18]/80 border border-[#c9a84c]/20 rounded-xl px-4 py-3 flex items-center gap-3 mb-3">
              <Mail className="w-4 h-4 text-[#c9a84c]/60" />
              <span className="text-[#f5f0e8]/70 text-sm">
                &ldquo;Reply to Mark about Q2 proposal with &apos;pushing to Q3, let&apos;s reschedule&apos;&rdquo;
              </span>
              <span className="ml-auto text-xs text-[#c9a84c] font-semibold whitespace-nowrap">→ drafting</span>
            </div>

            {/* MEOK context pill */}
            <div className="flex items-center gap-2 mb-4 px-1">
              <User className="w-3 h-3 text-[#c9a84c]/50" />
              <span className="text-[10px] text-[#f5f0e8]/35">
                Mark Chen · Head of Partnerships at Axiom · 4 previous threads · prefers direct tone
              </span>
            </div>

            <div className="bg-[#1a1a2e]/60 border border-white/[0.07] rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[#f5f0e8]/50 text-xs">To: mark.chen@axiom.io</p>
                  <p className="text-[#f5f0e8]/50 text-xs mt-0.5">Subject: Re: Q2 Proposal — Axiom Partnership</p>
                </div>
                <span className="text-xs text-green-400 font-semibold bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
                  Care: ✓
                </span>
              </div>
              <p className="text-[#f5f0e8]/75 text-sm leading-relaxed">
                Hi Mark,<br /><br />
                Thanks for sending this over. We need to push the Q2 timeline — we&apos;re moving this
                to Q3 on our end. Would be good to get 30 minutes in the diary to realign before
                then. What does your calendar look like in the next two weeks?<br /><br />
                Best,<br />Nicholas
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c9a84c] text-[#1a1a2e] text-xs font-bold hover:bg-[#b8963e] transition-colors">
                  <Send className="w-3 h-3" />
                  Send
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#f5f0e8]/60 text-xs hover:bg-white/[0.08] transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#f5f0e8]/60 text-xs hover:bg-white/[0.08] transition-colors">
                  More formal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Four ways MEOK takes back your inbox.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map(({ Icon, iconClass, title, desc, example }) => (
              <div key={title} className="premium-card p-7">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-black text-white text-lg mb-3">{title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed mb-4">{desc}</p>
                <div className="bg-[#0d0c18]/60 border border-white/[0.06] rounded-xl p-3">
                  <p className="text-xs text-[#c9a84c]/70 italic">{example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT MEOK LEARNS ABOUT YOUR EMAIL STYLE ──────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Style intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What MEOK learns about your email style
            </h2>
            <p className="text-[#f5f0e8]/55 mt-4 max-w-xl mx-auto leading-relaxed">
              Not a generic AI voice. Yours. MEOK trains quietly on the emails you send and approve —
              until it writes exactly like you do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {STYLE_PATTERNS.map((pattern) => (
              <div key={pattern.label} className="premium-card p-6">
                <p className="font-black text-white text-sm mb-2">{pattern.label}</p>
                <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">{pattern.desc}</p>
              </div>
            ))}
          </div>

          {/* Email relationship memory */}
          <div className="premium-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-gold w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <History className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">Email relationship memory</h3>
                <p className="text-[#f5f0e8]/55 text-sm leading-relaxed">
                  MEOK doesn&apos;t just draft — it remembers. It knows who Mark is, your full thread
                  history, that he prefers direct communication, and that the last time you rescheduled
                  you both agreed on a two-week lead time. Every draft is aware of all of it.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Who they are", desc: "Role, company, relationship type — client, colleague, or partner." },
                { label: "Your full history", desc: "Every thread, decision, and agreement from the past." },
                { label: "Their preferences", desc: "Communication style, response time, formality level." },
              ].map((item) => (
                <div key={item.label} className="bg-[#1a1a2e]/60 border border-white/[0.06] rounded-xl p-4">
                  <p className="font-black text-white text-xs mb-1">{item.label}</p>
                  <p className="text-xs text-[#f5f0e8]/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Questions</h2>
          </div>
          <div className="divide-y divide-white/[0.07]">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Email, <span className="text-gradient-gold">finally under control.</span>
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-md mx-auto mb-10 leading-relaxed">
            Join the MEOK waitlist for early access to AI Email when Work OS launches.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            aria-label="Join the MEOK waitlist for early access to AI Email"
          >
            Join the waitlist — free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-xs text-[#f5f0e8]/30 font-mono">No credit card · Local-first · Care-aligned</p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
