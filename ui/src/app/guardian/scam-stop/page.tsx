"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  AlertTriangle,
  Eye,
  MessageCircle,
  Users,
  Brain,
  TrendingUp,
  CheckCircle,
  XCircle,
  Heart,
  Phone,
  FileText,
  Search,
  ChevronDown,
  ChevronUp,
  EyeOff,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const FEATURE_CARDS = [
  {
    icon: MessageCircle,
    colorClass: "icon-gold",
    accentColor: "#c9a84c",
    title: "Message Scanner",
    tagline: "Paste any suspicious message. Analysed in seconds.",
    bullets: [
      "WhatsApp messages, emails, DMs, texts",
      "Flags: urgency pressure, authority impersonation, love-bombing, financial pressure",
      "Before your nan replies to 'her bank', you both know if it's real",
    ],
  },
  {
    icon: Search,
    colorClass: "icon-blue",
    accentColor: "#60a5fa",
    title: "Person & Company Checker",
    tagline: "Is this person who they say they are?",
    bullets: [
      "Name, company, LinkedIn verification",
      "Companies House cross-reference, credential checking",
      "The 'investment advisor' contacting your dad — real or fabricated?",
    ],
  },
  {
    icon: Brain,
    colorClass: "icon-purple",
    accentColor: "#a78bfa",
    title: "Relationship Pattern Analysis",
    tagline: "What one person can't see over time, MEOK can.",
    bullets: [
      "Promise tracking — how many were kept",
      "Contribution balance — who's giving, who's taking",
      "Financial flow — who's spending whose money",
      "The product that would have caught James in week 2",
    ],
  },
  {
    icon: TrendingUp,
    colorClass: "icon-gold",
    accentColor: "#c9a84c",
    title: "Financial Flow Monitor",
    tagline: "Track the money. Catch the extraction.",
    bullets: [
      "Track what they're spending on new 'friends' or relationships",
      "Flag sudden gifts, loans, or transfers",
      "Monitor for subscription traps and unauthorised charges",
      "£12,000 later is too late. MEOK flags it at £500.",
    ],
  },
  {
    icon: FileText,
    colorClass: "icon-green",
    accentColor: "#4ade80",
    title: "Document & Contract Shield",
    tagline: "Before they sign anything, MEOK reads it.",
    bullets: [
      "Tenancy agreements, care contracts, financial products",
      "Plain English translation",
      "Flags manipulation clauses and unfair terms",
    ],
  },
  {
    icon: Eye,
    colorClass: "icon-red",
    accentColor: "#f87171",
    title: "Isolation Detector",
    tagline: "Spotting when someone is being cut off.",
    bullets: [
      "Flags when contact patterns change",
      "Alerts when someone is being encouraged to avoid family",
      "Coercive control starts with isolation. MEOK notices.",
    ],
  },
];

const SCENARIOS = [
  {
    borderColor: "#c9a84c",
    headline: "Your nan gets a phone call from 'her bank'",
    body: "The caller knows her account number. Uses her full name. Sounds completely legitimate. She's about to give her one-time passcode. She forwards the caller's text to MEOK first.\n\nMEOK flags it: the sending number doesn't match her bank's registered number. The domain in the link is registered 3 days ago. The urgency language matches 9 known fraud patterns. She doesn't answer.",
  },
  {
    borderColor: "#60a5fa",
    headline: "Your autistic son has a new 'business partner'",
    body: "Three months of conversations. The partner has made 23 promises. Delivered on 2. Asked your son to stop mentioning him to family. Asked for three loans 'to close a deal'.\n\nMEOK's relationship analysis flags the pattern: promise/delivery ratio 8.7%. Isolation request. Financial requests accelerating. It suggests a family conversation — gently, without accusation.",
  },
  {
    borderColor: "#a78bfa",
    headline: "Your mum clicks a link in an email",
    body: "It looks exactly like HMRC. Same logo, same fonts, urgent tax refund. She's about to enter her National Insurance number.\n\nMEOK checks the domain instantly: registered in Eastern Europe, 4 days old. HTTPS certificate is fake. The 'HMRC' email address has a hidden unicode character. Mum gets a gentle warning before she types a single digit.",
  },
  {
    borderColor: "#f87171",
    headline: "Your dad gets a 'romance' that moves very fast",
    body: "Started on Facebook. Beautiful profile. Seems genuinely interested. Moving towards 'I need to borrow money — just once.'\n\nGuardian has been quietly tracking the relationship velocity — how quickly declarations escalate vs. how much they actually share about themselves. The pattern matches romance fraud in 94% of MEOK's trained cases. You get a quiet heads-up. Not accusation — just: 'Dad might want to slow this down.'",
  },
];

const SCAM_STOP_DOES = [
  "Analyse messages shared willingly for fraud patterns",
  "Track relationships across time with consent",
  "Monitor financial patterns with permission",
  "Alert family contacts when patterns match known fraud",
  "Verify identities and companies independently",
  "Provide plain English contract and document reading",
];

const SCAM_STOP_NEVER = [
  "Read private messages without explicit sharing",
  "Activate without the protected person's consent",
  "Report data to third parties, insurers, or government",
  "Use information for advertising or model training",
  "Require continuous monitoring (only analyses what's shared)",
  "Override anyone's right to decline protection",
];

const FAQS = [
  {
    q: "Is my family member being monitored without knowing?",
    a: "No. Consent is non-negotiable. Scam Stop cannot be activated on anyone without their explicit knowledge and agreement. They choose what they share with MEOK. They can pause or stop it at any time. Protection without consent isn't protection — it's surveillance. We won't do it.",
  },
  {
    q: "What if they don't want to use it?",
    a: "Then it's not activated. Period. We've built Scam Stop to be something people want to use — a companion that helps them feel confident and safe, not something imposed on them by a worried family member. If they're not on board, neither is MEOK.",
  },
  {
    q: "How is this different from just using antivirus software?",
    a: "Antivirus catches technical attacks: malware, phishing links, infected files. It can't catch a person who builds trust over three months and then asks for money. It can't notice that someone's relationship is moving in an unusual direction. It can't read a contract and explain what the small print actually means. Guardian catches human manipulation — which is what causes most real financial harm to vulnerable people.",
  },
  {
    q: "What happens when Guardian detects a threat?",
    a: "A soft alert — not an alarm. MEOK will gently flag what it noticed, explain why it's concerned, and suggest a conversation. It won't confront anyone, fire off scary notifications, or trigger automated responses. The goal is to give you and your loved one the information to make a good decision together. MEOK starts the conversation; you finish it.",
  },
  {
    q: "Can I see what MEOK found?",
    a: "You get a summary, not transcripts. MEOK will tell you: 'We noticed a pattern that concerned us — here's what it looked like.' It will not share the full conversation your family member had. Their privacy stays theirs. You get enough to act; they keep their dignity.",
  },
];

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.q}
          className="rounded-2xl border overflow-hidden transition-all"
          style={{
            background: open === i ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.03)",
            borderColor: open === i ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)",
          }}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-white/90 text-sm sm:text-base leading-snug">{faq.q}</span>
            <span className="flex-shrink-0 text-[#c9a84c]">
              {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <div className="h-px bg-white/[0.06] mb-4" />
              <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ScamStopPage() {
  return (
    <div
      className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <MarketingNav />

      {/* ─── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[700px] h-[600px] top-[-10%] left-[-10%]" />
          <div
            className="blob-gold w-[500px] h-[400px] bottom-[10%] right-[-5%]"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="blob-blue w-[400px] h-[400px] top-[40%] right-[20%]"
            style={{ opacity: 0.6 }}
          />
        </div>

        {/* Badge */}
        <div className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
          Guardian · Scam Stop
        </div>

        {/* Floating icon */}
        <div className="relative mb-10 float-slow">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <span className="text-5xl select-none" aria-hidden>🛡️</span>
          </div>
          <div className="absolute -inset-3 rounded-3xl border border-[#c9a84c]/15 animate-pulse" />
        </div>

        {/* Headline */}
        <h1
          className="text-[3rem] sm:text-6xl lg:text-7xl font-black text-center leading-[1.02] tracking-tight max-w-4xl mb-6 text-white relative"
          style={{ fontWeight: 900 }}
        >
          Hatch your AI.{" "}
          <span className="text-gradient-gold">Protect your people.</span>
        </h1>

        {/* Subheading */}
        <p className="relative text-lg sm:text-xl text-white/60 text-center max-w-2xl leading-relaxed mb-4">
          Your nan trusts everyone. Your autistic cousin missed the red flags. Your dad doesn&apos;t
          understand why the bank is calling. Your MEOK Guardian watches over the people you love
          — without watching over them.
        </p>
        <p className="relative text-base text-white/45 text-center max-w-xl leading-relaxed mb-10">
          MEOK Scam Stop monitors for fraud patterns, relationship extraction, and financial
          manipulation. Not surveillance — care. The difference is consent, transparency, and who
          it answers to: you.
        </p>

        {/* CTAs */}
        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.45)] text-base"
          >
            Activate Scam Stop free
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#how"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-sm"
          >
            How it protects them →
          </a>
        </div>

        <p className="relative mt-5 text-xs text-white/25 font-mono">
          Consent-first · Encrypted · Your family&apos;s AI · Never sold
        </p>
      </section>

      {/* ─── 2. THE EPIDEMIC ──────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#100a00" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="blob-gold w-[600px] h-[500px] top-[-15%] right-[-10%]"
            style={{ opacity: 0.7 }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              The scale of the problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white" style={{ fontWeight: 900 }}>
              The people you love are the{" "}
              <span style={{ color: "#fbbf24" }}>most targeted.</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { stat: "£2.3bn", label: "lost to fraud in the UK in 2024" },
              { stat: "67%", label: "of fraud victims are over 65" },
              { stat: "3×", label: "more likely — neurodivergent individuals targeted by scammers" },
            ].map((s) => (
              <div
                key={s.stat}
                className="premium-card rounded-2xl p-8 text-center"
                style={{ borderColor: "rgba(201,168,76,0.2)" }}
              >
                <div
                  className="text-5xl font-black mb-3 leading-none"
                  style={{ color: "#c9a84c" }}
                >
                  {s.stat}
                </div>
                <p className="text-white/55 text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/60 text-base leading-relaxed max-w-3xl mx-auto text-center mb-8">
            Scammers don&apos;t pick targets randomly. They pick people who trust easily, respond to
            authority, get confused by urgency, or struggle to say no. Your grandmother. Your
            autistic son. Your lonely parent who got a &apos;friendly&apos; call. MEOK Scam Stop was built
            specifically for them.
          </p>

          <p className="text-center text-base font-bold" style={{ color: "#c9a84c" }}>
            Power is back in your hands when you hatch your AI.
          </p>
        </div>
      </section>

      {/* ─── 3. HOW IT PROTECTS THEM ──────────────────────────────────────────── */}
      <section id="how" className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Six layers of protection
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Not monitoring.{" "}
              <span className="text-gradient-gold">Noticing. Then acting.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Every tool built specifically for the manipulation tactics used against vulnerable
              people — not generic cybersecurity, but human-targeted fraud defence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="premium-card rounded-2xl p-7 flex flex-col gap-4 hover:border-white/15 transition-all"
                  style={{ borderTop: `2px solid ${card.accentColor}30` }}
                >
                  <div className={`${card.colorClass} w-11 h-11 rounded-xl flex items-center justify-center`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white mb-1">{card.title}</h3>
                    <p
                      className="text-xs font-bold mb-3"
                      style={{ color: card.accentColor }}
                    >
                      {card.tagline}
                    </p>
                    <ul className="space-y-2">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-xs text-white/50 leading-snug">
                          <span
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: card.accentColor }}
                          >
                            ·
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. HOW IT WORKS — 3 STEPS ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Setup in minutes
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Set it up in three steps.{" "}
              <span className="text-gradient-gold">Then MEOK watches over them.</span>
            </h2>
          </div>

          <div className="relative">
            <div
              className="hidden sm:block absolute left-[2.75rem] top-10 bottom-10 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(201,168,76,0.3), rgba(201,168,76,0.05))",
              }}
            />
            <div className="space-y-5">
              {[
                {
                  num: "01",
                  emoji: "🥚",
                  title: "Hatch your AI",
                  desc: "You start by hatching your own sovereign AI companion. Takes 3 minutes. This is your MEOK — loyal to you, encrypted end-to-end, and the foundation everything else is built on.",
                },
                {
                  num: "02",
                  emoji: "👥",
                  title: "Add your family",
                  desc: "Tell MEOK about the people you want to protect. Their name, their vulnerabilities, what to watch for. They get their own companion — with consent. Their MEOK is theirs. You stay in the loop.",
                },
                {
                  num: "03",
                  emoji: "🛡️",
                  title: "Guardian activates",
                  desc: "MEOK learns their patterns. Monitors communications they share with it. Alerts you to anomalies. Never reads their private messages without permission. Always transparent about what it's doing and why.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="flex gap-6 p-7 rounded-2xl premium-card hover:border-white/15 transition-all"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl icon-gold">
                      {step.emoji}
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black"
                      style={{
                        background: "#1a1a2e",
                        color: "#c9a84c",
                        border: "1px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-black mb-2 text-white">{step.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. REAL SCENARIOS ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#0a0820" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="blob-blue w-[500px] h-[500px] top-[-10%] right-[-5%]"
            style={{ opacity: 0.5 }}
          />
          <div
            className="blob-gold w-[400px] h-[400px] bottom-[5%] left-[-5%]"
            style={{ opacity: 0.4, animationDelay: "4s" }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Real protection in practice
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              The moments{" "}
              <span className="text-gradient-gold">Guardian catches.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              These aren&apos;t edge cases. They happen every day to families across the UK.
            </p>
          </div>

          <div className="space-y-5">
            {SCENARIOS.map((s) => (
              <div
                key={s.headline}
                className="premium-card p-7 rounded-2xl"
                style={{ borderLeft: `3px solid ${s.borderColor}60` }}
              >
                <p
                  className="font-black text-white text-base mb-3 leading-snug"
                >
                  {s.headline}
                </p>
                {s.body.split("\n\n").map((para, i) => (
                  <p key={i} className={`text-sm leading-relaxed ${i === 0 ? "text-white/60 mb-3" : "text-white/75 font-medium"}`}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. DOES / NEVER DOES ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#c9a84c]/70 tracking-widest uppercase mb-3">
              The honest version
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white leading-tight"
              style={{ fontWeight: 900 }}
            >
              Scam Stop protects.{" "}
              <span className="text-gradient-gold">It never surveils.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="p-7 rounded-2xl bg-green-500/[0.05] border border-green-500/15">
              <h3 className="text-xs font-black text-green-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <Eye size={14} /> What Scam Stop does
              </h3>
              <div className="space-y-3">
                {SCAM_STOP_DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-red-500/[0.05] border border-red-500/15">
              <h3 className="text-xs font-black text-red-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <EyeOff size={14} /> What Scam Stop never does
              </h3>
              <div className="space-y-3">
                {SCAM_STOP_NEVER.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="p-5 rounded-2xl border text-sm text-white/60 leading-relaxed text-center"
            style={{
              background: "rgba(201,168,76,0.06)",
              borderColor: "rgba(201,168,76,0.2)",
            }}
          >
            <span className="text-[#c9a84c] font-bold">Consent is non-negotiable. </span>
            Everyone protected by Scam Stop must agree to their protection settings. It cannot be
            activated on anyone without their knowledge.
          </div>
        </div>
      </section>

      {/* ─── 7. WHO THIS IS FOR ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: "#1a1a2e60" }}
            >
              Who this is for
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#1a1a2e]">
              You already know the worry.{" "}
              <span style={{ color: "#c9a84c" }}>This is for that.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: "The adult child who worries",
                detail:
                  "Your parent is 300 miles away and keeps getting calls from 'their bank', 'a government helpline', or a 'financial advisor' who found them on Facebook. Scam Stop gives you a quiet signal when something looks wrong — without turning their life into a surveillance feed.",
                color: "#c9a84c",
                border: "#c9a84c30",
              },
              {
                label: "The family protecting a neurodivergent member",
                detail:
                  "Someone you love trusts easily, misses the patterns, and would never want to believe they're being manipulated. MEOK doesn't shame them or second-guess them. It quietly notices what they can't see — and frames it as information, not accusation.",
                color: "#60a5fa",
                border: "#60a5fa30",
              },
              {
                label: "Anyone who's watched a loved one get hurt",
                detail:
                  "You've already seen extraction happen. You watched the money go. You watched the relationship sour. You watched someone you love get hurt, and you won't watch it again. Scam Stop exists because you shouldn't have to.",
                color: "#a78bfa",
                border: "#a78bfa30",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-2xl p-7 border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                style={{ borderColor: p.border }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                <h3 className="font-black text-sm leading-snug text-[#1a1a2e]">{p.label}</h3>
                <p className="text-sm text-[#4a4a3a] leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#c9a84c]/70 tracking-widest uppercase mb-3">
              Hard questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              The questions you should ask.
            </h2>
            <p className="text-white/45 text-sm max-w-md mx-auto">
              We&apos;d rather you asked them of us than found out later. Here are the honest answers.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── 8B. EMPOWERMENT CALLOUT ──────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderLeft: "3px solid #c9a84c",
            }}
          >
            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-tight">
              You have the power to protect them.
            </h3>
            <p className="text-white/65 leading-relaxed">
              Fraudsters rely on isolation. They count on families being too busy, too far away,
              or too trusting. When you hatch an AI that watches what they can&apos;t see, you
              change the odds. It&apos;s down to you — and now you have the tools.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 9. CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="blob-gold w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: 0.65 }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.35)",
            }}
          >
            <Shield size={32} color="#c9a84c" strokeWidth={1.5} />
          </div>

          <h2
            className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white"
            style={{ fontWeight: 900 }}
          >
            The people you love deserve protection.{" "}
            <span className="text-gradient-gold">So do you.</span>
          </h2>

          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Free to set up. Runs quietly in the background. Answers to your family — not to
            corporations, advertisers, or governments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-sm hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
            >
              Hatch your AI. Protect your people.
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/guardian"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-sm"
            >
              Learn about Guardian →
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/20 font-mono">
            Consent-first · Encrypted · Free forever for individuals
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
