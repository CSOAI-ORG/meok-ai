"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Eye,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Brain,
  Lock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

const FAQS = [
  {
    q: "Will my child know they're being monitored?",
    a: "Yes, always. MEOK Predator Stop is consent-based and transparent. Your child knows Guardian is there for their safety. Hidden surveillance breaks trust and undermines the relationship you're trying to protect. We believe informed children are safer children — they know they can come to you, and they know the system is on their side.",
  },
  {
    q: "Does this read their messages?",
    a: "No. Predator Stop analyses communication patterns — who's contacting them, how fast a relationship is escalating, what category of language is being used — without reading the content of private conversations. The pattern is enough to detect danger. The content stays private.",
  },
  {
    q: "What if my child's friend group includes adults?",
    a: "Guardian understands gaming contexts. Age-gap contacts in gaming environments are flagged as worth watching, not automatically blocked. Adult clan members, streamers, moderators — the system learns the difference between normal gaming community relationships and escalating one-on-one contact. You get context, not just an alarm.",
  },
  {
    q: "Can predators get around this?",
    a: "Sophisticated predators still create patterns. Grooming is a process — it takes time, follows recognisable steps, and leaves a trail of communication behaviour. MEOK learns continuously from known predator tactics. Even when specific language is avoided, the relational pattern — gift giving, isolation requests, escalating private contact — remains detectable.",
  },
  {
    q: "What if I get a false alarm?",
    a: "Alerts are designed to start conversations, not accusations. You'll never receive a message saying 'your child is being groomed.' You'll receive: 'A new contact is showing some patterns worth discussing with Ella.' It's a signal to check in, not a verdict. Most alerts resolve simply — with a conversation.",
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
      >
        <span className="font-semibold text-white/80 text-sm sm:text-base">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-blue-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1">
          <p className="text-white/50 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function PredatorStopPage() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "#00071a" }}
    >

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 pb-20 overflow-hidden"
        style={{ background: "#00071a" }}
      >
        {/* Blobs */}
        <div
          aria-hidden
          className="absolute w-[700px] h-[700px] top-[-150px] left-[-150px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(29,78,216,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute w-[500px] h-[500px] top-[25%] right-[-100px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute w-[600px] h-[600px] bottom-[-100px] right-[20%] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-300 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Guardian · Predator Stop · For Parents
          </div>

          {/* Shield icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-600/15 border border-blue-500/30">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6">
            Your child plays online.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #1d4ed8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Not every player is a child.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-4">
            Online gaming is where friendships form, skills grow, and strangers
            get access to your child. MEOK Predator Stop monitors communication
            patterns across Discord, in-game chat, and DMs — without reading
            your child&apos;s private conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 mt-10">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-white transition-all text-base"
              style={{
                background: "#1d4ed8",
                boxShadow: "0 0 40px rgba(29,78,216,0.3)",
              }}
            >
              Activate free for families
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-blue-300 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 transition-all text-base"
            >
              How it works
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-white/25 font-mono">
            Consent-based · Age-appropriate · Parental insight, not surveillance
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE REALITY
      ═══════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: "#00071a", borderTop: "1px solid rgba(29,78,216,0.15)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              The reality
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Gaming is where predators
              <br />
              <span className="text-white/35">look for children.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {[
              {
                stat: "1 in 9",
                desc: "children is contacted by a predator online",
              },
              {
                stat: "#1",
                desc: "Online gaming is the #1 new vector for child grooming",
              },
              {
                stat: "73%",
                desc: "of gaming-related incidents happen in 'private' Discord servers",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl p-7 text-center border border-blue-500/15"
                style={{ background: "rgba(29,78,216,0.06)" }}
              >
                <div
                  className="text-5xl font-black mb-3"
                  style={{ color: "#60a5fa" }}
                >
                  {item.stat}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8 border border-blue-500/15"
            style={{ background: "rgba(29,78,216,0.04)" }}
          >
            <p className="text-white/60 leading-relaxed text-sm mb-4">
              The tactics haven&apos;t changed. The venue has.
            </p>
            <div className="space-y-3">
              {[
                '"You\'re so much more mature than other players your age."',
                '"Don\'t tell your parents about this server."',
                '"Can we move to DMs?"',
              ].map((line) => (
                <div
                  key={line}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  <span className="text-blue-400 font-black text-xs mt-0.5 flex-shrink-0">
                    ›
                  </span>
                  <p className="text-white/50 text-sm italic">{line}</p>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm leading-relaxed mt-5">
              MEOK recognises these patterns before your child does.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT PREDATOR STOP DOES
      ═══════════════════════════════════════════════ */}
      <section
        id="how"
        className="py-24 px-6"
        style={{ background: "#00071a", borderTop: "1px solid rgba(29,78,216,0.12)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              How it works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              What Predator Stop{" "}
              <span style={{ color: "#60a5fa" }}>does.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Brain,
                iconColor: "text-blue-400",
                iconBg: "bg-blue-600/15",
                borderColor: "border-blue-500/20",
                title: "Communication Pattern Analysis",
                subtitle: "Monitors who contacts your child and how",
                features: [
                  "Tracks new contacts in gaming environments",
                  "Flags escalating private communication attempts",
                  "Detects adult-to-minor grooming language patterns",
                ],
              },
              {
                icon: Shield,
                iconColor: "text-blue-400",
                iconBg: "bg-blue-600/15",
                borderColor: "border-blue-500/20",
                title: "Platform Coverage",
                subtitle: "Across every platform they play on",
                features: [
                  "Discord, Steam, Xbox Live, PlayStation Network",
                  "In-game chat, friend requests, DMs",
                  "Works across PC, console, and mobile",
                ],
              },
              {
                icon: Eye,
                iconColor: "text-purple-400",
                iconBg: "bg-purple-600/15",
                borderColor: "border-purple-500/20",
                title: "Parent Dashboard",
                subtitle: "You see the pattern. Not the conversation.",
                features: [
                  "Weekly summaries of your child's social patterns",
                  "Alert when something shifts — who's new, who's becoming intense",
                  "Never reads actual message content without child's consent",
                ],
              },
              {
                icon: AlertTriangle,
                iconColor: "text-amber-400",
                iconBg: "bg-amber-400/10",
                borderColor: "border-amber-400/20",
                title: "Gentle Escalation",
                subtitle: "Soft alerts, not panic",
                features: [
                  'First alert to you: "A new contact is escalating unusually fast"',
                  "Option to review with your child together",
                  "Emergency escalation if clear danger signals appear",
                ],
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`rounded-2xl p-7 border ${card.borderColor}`}
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.iconBg} mb-5`}
                  >
                    <Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                  <h3 className="font-black text-white text-base mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-white/40 mb-4 font-mono">
                    {card.subtitle}
                  </p>
                  <ul className="space-y-2">
                    {card.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm text-white/50"
                      >
                        <span className={`${card.iconColor} font-black text-xs mt-0.5 flex-shrink-0`}>
                          ›
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          REAL PATTERN EXAMPLES
      ═══════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: "#000d2e" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Real patterns
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              What it looks like
              <br />
              <span className="text-white/35">before it becomes a crisis.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                label: "The compliment pattern",
                scenario:
                  "A new 'friend' tells your 13-year-old they're 'so much more mature' than other players. Asks to play private games together. Moves conversation to Discord. Starts asking personal questions about school, home, whether they have a boyfriend/girlfriend.",
                response:
                  "Predator Stop flags the escalation velocity and language markers. You get a quiet alert: 'A new contact is showing some patterns worth discussing with Jack.'",
              },
              {
                label: "The secret server",
                scenario:
                  "Your daughter has been invited to a 'special server' and asked not to tell her parents. The server has adults claiming to be teenage gamers. Messages ask for photos of 'gaming setups.'",
                response:
                  "Predator Stop detects the isolation request (don't tell parents) and photo solicitation pattern. Immediate alert. No need to read her conversations — the pattern alone is enough.",
              },
              {
                label: "The gift giver",
                scenario:
                  "Someone keeps sending your child in-game gifts, currency, rare items. Has been building a relationship for 3 months. Now wants to 'meet up at a gaming event.'",
                response:
                  "Guardian has tracked the relationship — one-sided gift giving over time is a known grooming pattern. The offline meeting request triggers an immediate parent alert.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-blue-500/15 overflow-hidden"
                style={{ background: "rgba(0,7,26,0.8)" }}
              >
                <div className="p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs font-black tracking-widest uppercase mb-5">
                    {item.label}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    &ldquo;{item.scenario}&rdquo;
                  </p>
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(29,78,216,0.08)",
                      border: "1px solid rgba(29,78,216,0.2)",
                    }}
                  >
                    <span className="text-[10px] font-black text-blue-400/60 font-mono block mb-2">
                      GUARDIAN RESPONSE
                    </span>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DOES / NEVER DOES
      ═══════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: "#1a1a2e" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              What Predator Stop{" "}
              <span style={{ color: "#60a5fa" }}>will</span> and{" "}
              <span className="text-white/35">won&apos;t</span> do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DOES */}
            <div
              className="rounded-2xl p-7 border border-green-500/20"
              style={{ background: "rgba(21,128,61,0.05)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h3 className="font-black text-green-400 text-sm tracking-widest uppercase">
                  Predator Stop does
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Monitor communication patterns, not content",
                  "Alert parents to escalating or unusual contact",
                  "Detect known grooming language markers",
                  "Cover multiple platforms from one dashboard",
                  "Alert child and parent simultaneously (age-appropriate)",
                  "Provide context for difficult parent-child conversations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NEVER DOES */}
            <div
              className="rounded-2xl p-7 border border-red-500/20"
              style={{ background: "rgba(239,68,68,0.04)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="font-black text-red-400 text-sm tracking-widest uppercase">
                  Never does
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Read your child's private messages without consent",
                  "Create a secret surveillance system your child doesn't know about",
                  "Automatically report to authorities (that's your decision)",
                  "Block contacts without your review",
                  "Share data with platforms, advertisers, or third parties",
                  "Override your child's right to know they're protected",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          AGE GROUPS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-black/30 block mb-4">
              Age-appropriate protection
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0a0a1a] leading-tight">
              Protection that grows
              <br />
              <span className="text-black/35">with your child.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                range: "Ages 6–12",
                label: "Full protection, minimal visibility",
                body: "You see everything. They know Guardian is there for safety. Full monitoring with age-appropriate protection on all platforms.",
                accentColor: "#1d4ed8",
                badgeBg: "#dbeafe",
                badgeText: "#1e40af",
                borderColor: "#93c5fd",
                bg: "#eff6ff",
              },
              {
                range: "Ages 13–16",
                label: "Partnership mode",
                body: "They can see what Guardian flags. Builds media literacy alongside protection. Joint conversations about online safety replace unilateral monitoring.",
                accentColor: "#7c3aed",
                badgeBg: "#ede9fe",
                badgeText: "#5b21b6",
                borderColor: "#c4b5fd",
                bg: "#f5f3ff",
              },
              {
                range: "Ages 16–18",
                label: "Trust and verify",
                body: "More autonomy, same coverage. Guardian shifts to coaching rather than monitoring. Alerts only for serious escalation patterns.",
                accentColor: "#0f766e",
                badgeBg: "#ccfbf1",
                badgeText: "#134e4a",
                borderColor: "#5eead4",
                bg: "#f0fdfa",
              },
            ].map((card) => (
              <div
                key={card.range}
                className="rounded-2xl p-7 border"
                style={{
                  background: card.bg,
                  borderColor: card.borderColor,
                }}
              >
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black mb-4"
                  style={{
                    background: card.badgeBg,
                    color: card.badgeText,
                  }}
                >
                  {card.range}
                </div>
                <h3
                  className="font-black text-base mb-2"
                  style={{ color: card.accentColor }}
                >
                  {card.label}
                </h3>
                <p className="text-sm leading-relaxed text-black/60">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: "#0d0c18" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              What parents ask us.
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: "#00071a" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-blue-600/15 border border-blue-500/30">
            <Lock className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Gaming should be safe.
            <br />
            <span style={{ color: "#60a5fa" }}>MEOK makes it that way.</span>
          </h2>
          <p className="text-white/45 leading-relaxed mb-8 text-sm max-w-lg mx-auto">
            Free for families. Consent-based. Designed by parents, advised by
            child safety experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-white transition-all text-base"
              style={{
                background: "#1d4ed8",
                boxShadow: "0 0 40px rgba(29,78,216,0.3)",
              }}
            >
              Activate Predator Stop free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/guardian"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-blue-300 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 transition-all text-base"
            >
              All Guardian features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
