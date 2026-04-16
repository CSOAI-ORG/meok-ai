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
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

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

const FEATURES = [
  {
    icon: Brain,
    title: "Communication Pattern Analysis",
    description: "Monitors who contacts your child and how. Flags escalating private communication attempts and detects grooming language patterns.",
  },
  {
    icon: Shield,
    title: "Platform Coverage",
    description: "Across Discord, Steam, Xbox Live, PlayStation Network. In-game chat, friend requests, DMs — PC, console, and mobile.",
  },
  {
    icon: Eye,
    title: "Parent Dashboard",
    description: "Weekly summaries of social patterns. Alert when something shifts. Never reads actual message content without consent.",
  },
  {
    icon: AlertTriangle,
    title: "Gentle Escalation",
    description: "Soft alerts, not panic. First alert: 'A new contact is escalating unusually fast.' Emergency escalation only for clear danger signals.",
  },
];

const CAPABILITIES = [
  "Tracks new contacts in gaming environments",
  "Detects adult-to-minor grooming language patterns",
  "Learns continuously from known predator tactics",
  "Provides context for difficult parent-child conversations",
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Surface variant="glass" className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-white/80 text-sm sm:text-base">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-orange-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-orange-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1">
          <p className="text-white/50 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </Surface>
  );
}

export default function PredatorStopPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute w-[700px] h-[700px] top-[-150px] left-[-150px] opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(224,115,64,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute w-[500px] h-[500px] top-[25%] right-[-100px] opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(224,115,64,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute w-[600px] h-[600px] bottom-[-100px] right-[20%] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(224,115,64,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Guardian · Predator Stop · For Parents
          </div>

          <div className="flex justify-center mb-6">
            <IconOrb icon={Shield} variant="orange" size="lg" pulse />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6">
            Your child plays online.
            <br />
            <GlowText variant="orange" as="span">
              Not every player is a child.
            </GlowText>
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
                background: "#e07340",
                boxShadow: "0 0 40px rgba(224,115,64,0.3)",
              }}
            >
              Activate free for families
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-orange-300 border border-orange-500/40 hover:border-orange-400 hover:bg-orange-500/10 transition-all text-base"
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
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
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
              { stat: "1 in 9", desc: "children is contacted by a predator online" },
              { stat: "#1", desc: "Online gaming is the #1 new vector for child grooming" },
              { stat: "73%", desc: "of gaming-related incidents happen in 'private' Discord servers" },
            ].map((item) => (
              <Surface key={item.stat} variant="elevated" glow="orange" className="p-7 text-center">
                <div className="text-5xl font-black mb-3 text-orange-400">
                  {item.stat}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </Surface>
            ))}
          </div>

          <Surface variant="glass" className="p-8">
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
                  className="flex items-start gap-3 p-3 rounded-xl bg-black/30"
                >
                  <span className="text-orange-400 font-black text-xs mt-0.5 flex-shrink-0">
                    ›
                  </span>
                  <p className="text-white/50 text-sm italic">{line}</p>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm leading-relaxed mt-5">
              MEOK recognises these patterns before your child does.
            </p>
          </Surface>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════ */}
      <section id="how" className="py-24 px-6 bg-[#13121f] animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              How it works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              What Predator Stop{" "}
              <GlowText variant="orange" as="span">does.</GlowText>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((feat) => (
              <FeatureCard
                key={feat.title}
                title={feat.title}
                description={feat.description}
                icon={feat.icon}
                iconVariant="orange"
                glow="orange"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CAPABILITIES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                Pattern-based.
                <br />
                <GlowText variant="orange" as="span">
                  Privacy-first.
                </GlowText>
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                Predator Stop monitors communication patterns — who is contacting
                your child, how fast relationships escalate, and what categories of
                language are being used. The pattern alone is enough to detect danger.
                The content stays private.
              </p>
            </div>
            <Surface variant="elevated" glow="orange" className="p-7">
              <ul className="space-y-4">
                {CAPABILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <Eye className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DOES / NEVER DOES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              What Predator Stop{" "}
              <GlowText variant="orange" as="span">will</GlowText> and{" "}
              <span className="text-white/35">won&apos;t</span> do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Surface variant="elevated" glow="teal" className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <h3 className="font-black text-teal-400 text-sm tracking-widest uppercase">
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
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>

            <Surface variant="elevated" className="p-7" style={{ borderColor: "rgba(239,68,68,0.2)" }}>
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
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#13121f] animate-fade-in-up">
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
      <section className="py-24 px-6 bg-[#0a0a0f] animate-fade-in-up">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <IconOrb icon={Lock} variant="orange" size="lg" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Gaming should be safe.
            <br />
            <GlowText variant="orange" as="span">MEOK makes it that way.</GlowText>
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
                background: "#e07340",
                boxShadow: "0 0 40px rgba(224,115,64,0.3)",
              }}
            >
              Activate Predator Stop free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/guardian"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-orange-300 border border-orange-500/40 hover:border-orange-400 hover:bg-orange-500/10 transition-all text-base"
            >
              All Guardian features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
