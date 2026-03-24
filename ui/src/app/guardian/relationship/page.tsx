import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Clock,
  TrendingUp,
  MessageCircle,
  DollarSign,
  Scale,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Briefcase,
  Users,
  Home,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Guardian Relationship — MEOK | AI that watches out for you in relationships",
  description:
    "Relationship monitoring for romantic partnerships, business relationships, family dynamics, and friendships. MEOK tracks promises, detects patterns, and protects you from what your heart sometimes can't see.",
};

const FEATURES = [
  {
    icon: Clock,
    title: "Promise Tracker",
    description:
      "Every commitment logged, timestamped, cross-referenced. \"I'll pay you back by Friday.\" \"We agreed this in the meeting.\" \"That was never said.\" MEOK has receipts.",
    color: "#5eead4",
  },
  {
    icon: TrendingUp,
    title: "Pattern Detection",
    description:
      "Relationship dynamics tracked over time — tone shifts, isolation signals, financial pressure patterns, promise-breaking trends. Patterns that are invisible week to week become clear across months.",
    color: "#5eead4",
  },
  {
    icon: MessageCircle,
    title: "Communication Analysis",
    description:
      "Decode what messages really mean versus what they say. MEOK surfaces subtext, intent signals, and manipulation patterns — so you know what you're actually dealing with.",
    color: "#c9a84c",
  },
  {
    icon: DollarSign,
    title: "Financial Flow Awareness",
    description:
      "Track money dynamics across relationships. Who owes what. Who controls what. Where gradual financial dependency is being built. Money is the clearest signal — MEOK tracks it.",
    color: "#c9a84c",
  },
  {
    icon: Scale,
    title: "Rights & Legal Context",
    description:
      "Know your rights in employment, tenancy, partnership agreements, and relationship contracts. MEOK surfaces what the law says — so you walk into conversations informed.",
    color: "#5eead4",
  },
  {
    icon: AlertTriangle,
    title: "Isolation Early Warning",
    description:
      "If you're being gradually cut off from your support network, MEOK notices before you do. Fewer check-ins from friends. More dependency on one person. It tracks the drift.",
    color: "#c9a84c",
  },
];

const PROTECTS = [
  {
    icon: Briefcase,
    title: "Business partnerships",
    scenarios: [
      "Verbal agreements about IP ownership and revenue splits",
      "Promises made in email that later get denied",
      "Late payments with escalating excuses",
      "Gradual exclusion from decisions in your own venture",
    ],
    color: "#5eead4",
    border: "rgba(94,234,212,0.2)",
  },
  {
    icon: Heart,
    title: "Romantic relationships",
    scenarios: [
      "Financial control and spending monitoring",
      "Gaslighting about what was agreed or said",
      "Promise patterns — what's made vs what's kept",
      "Isolation from friends and family over time",
    ],
    color: "#c9a84c",
    border: "rgba(201,168,76,0.2)",
  },
  {
    icon: Home,
    title: "Family dynamics",
    scenarios: [
      "Inheritance pressure and conditional love",
      "Emotional manipulation disguised as concern",
      "Financial obligations being reframed after the fact",
      "Long-term patterns of guilt and obligation cycles",
    ],
    color: "#5eead4",
    border: "rgba(94,234,212,0.2)",
  },
  {
    icon: UserCheck,
    title: "Workplace relationships",
    scenarios: [
      "Unfair treatment patterns over time",
      "Inappropriate manager behaviour that builds gradually",
      "Promises about promotion, pay, and conditions",
      "HR situations where documentation matters",
    ],
    color: "#c9a84c",
    border: "rgba(201,168,76,0.2)",
  },
];

const DOES = [
  "Track what was said and when, precisely",
  "Notice patterns over time you might miss in the moment",
  "Give you clear information to act on",
  "Decode the subtext in messages and behaviour",
  "Flag when financial dynamics shift",
  "Surface early warning signs before damage is done",
];

const NEVER_DOES = [
  "Tell you what to do or what to decide",
  "Judge your choices about who to stay with",
  "Share your relationship data with anyone",
  "Encourage breakups or exits",
  "Make decisions for you",
  "Weaponise your data against you",
];

export default function GuardianRelationshipPage() {
  return (
    <div
      className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute rounded-full blur-[160px] opacity-20 w-[700px] h-[600px] top-[-10%] left-[-10%]"
            style={{ background: "#5eead4" }}
          />
          <div
            className="absolute rounded-full blur-[160px] opacity-15 w-[500px] h-[400px] bottom-[10%] right-[-5%]"
            style={{ background: "#c9a84c" }}
          />
        </div>

        <div
          className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: "rgba(94,234,212,0.1)",
            border: "1px solid rgba(94,234,212,0.3)",
            color: "#5eead4",
          }}
        >
          For your relationships
        </div>

        <div className="relative mb-10 float-slow">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(94,234,212,0.12)",
              border: "1px solid rgba(94,234,212,0.3)",
            }}
          >
            <Heart size={44} color="#5eead4" strokeWidth={1.5} />
          </div>
          <div className="absolute -inset-3 rounded-3xl border border-[#5eead4]/15 animate-pulse" />
        </div>

        <h1
          className="text-[3rem] sm:text-6xl lg:text-7xl font-black text-center leading-[1.02] tracking-tight max-w-4xl mb-6 text-white relative"
          style={{ fontWeight: 900 }}
        >
          Your AI watches what{" "}
          <br />
          <span style={{ color: "#5eead4" }}>your heart sometimes can&apos;t.</span>
        </h1>

        <p className="relative text-lg sm:text-xl text-white/60 text-center max-w-2xl leading-relaxed mb-4">
          Relationships are complex. Power imbalances, broken promises, manipulation patterns —
          they&apos;re often invisible until damage is done.
        </p>
        <p className="relative text-base text-white/45 text-center max-w-xl leading-relaxed mb-10">
          MEOK sees them early.
        </p>

        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all text-base hover:shadow-[0_0_40px_rgba(94,234,212,0.35)]"
            style={{ background: "#5eead4", color: "#0d0c18" }}
          >
            Start for free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/guardian"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white/60 hover:text-white transition-colors text-sm"
          >
            Guardian overview →
          </Link>
        </div>
        <p className="relative mt-5 text-xs text-white/25 font-mono">
          Free to start · No credit card · Your data never shared
        </p>
      </section>

      {/* ─── THE PROBLEM ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0a1818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(94,234,212,0.12)",
                color: "#5eead4",
                border: "1px solid rgba(94,234,212,0.25)",
              }}
            >
              The problem
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              What makes relationships dangerous
              <br />
              <span style={{ color: "#5eead4" }}>is how slowly it happens.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Promises that vanish",
                icon: Clock,
                color: "#5eead4",
                border: "rgba(94,234,212,0.25)",
                body: "\"I'll pay you back.\" \"We agreed to X.\" \"That was never said.\" Memory is fallible, and people exploit that. When was it said? MEOK remembers — with timestamps, context, and cross-references.",
              },
              {
                title: "Patterns you can't see",
                icon: TrendingUp,
                color: "#c9a84c",
                border: "rgba(201,168,76,0.25)",
                body: "Gaslighting, isolation, financial control — these build slowly. One incident is a bad day. Five incidents across three months is a pattern. MEOK tracks the trend so you don't have to hold it all in your head.",
              },
              {
                title: "Power you don't know you have",
                icon: Scale,
                color: "#5eead4",
                border: "rgba(94,234,212,0.25)",
                body: "Most people don&apos;t know their legal rights in employment, tenancy, or partnership relationships. MEOK does. The knowledge you lack is often the leverage being used against you.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl p-7 border"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: card.border,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}35`,
                      color: card.color,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    className="font-black text-base mb-3 leading-snug"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#5eead4]/60">
              Six layers of awareness
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Everything they had.
              <br />
              <span style={{ color: "#5eead4" }}>Now you have it too.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              The people who exploit relationships depend on you not having this kind of long-term
              clarity. Now you do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="premium-card rounded-2xl p-7 transition-all"
                  style={{ borderLeft: `3px solid ${feature.color}55` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${feature.color}18`,
                      border: `1px solid ${feature.color}35`,
                      color: feature.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-black text-white text-base mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS PROTECTS ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: "#1a1a2e60" }}
            >
              Who this protects
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#1a1a2e]">
              Every kind of relationship.{" "}
              <span style={{ color: "#0d9488" }}>Every kind of risk.</span>
            </h2>
            <p className="text-[#4a4a3a] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              The patterns that damage people in relationships are remarkably consistent across
              context. MEOK watches for all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROTECTS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl p-7 border shadow-sm hover:shadow-md transition-shadow"
                  style={{ borderColor: p.border }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${p.color}18`,
                        border: `1px solid ${p.color}35`,
                        color: p.color,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <h3 className="font-black text-sm text-[#1a1a2e] leading-snug capitalize">
                      {p.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {p.scenarios.map((s) => (
                      <li key={s} className="flex gap-2.5 text-sm text-[#4a4a3a] leading-relaxed">
                        <CheckCircle
                          size={13}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: p.color }}
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DOES / NEVER DOES ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#5eead4]/70 tracking-widest uppercase mb-3">
              The honest version
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white leading-tight"
              style={{ fontWeight: 900 }}
            >
              Information. Not judgement.
              <br />
              <span style={{ color: "#5eead4" }}>Clarity. Not control.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              MEOK gives you what you need to make informed decisions. What you do with that
              information is entirely yours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="p-7 rounded-2xl bg-green-500/[0.05] border border-green-500/15">
              <h3 className="text-xs font-black text-green-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle size={14} /> What Guardian Relationship does
              </h3>
              <div className="space-y-3">
                {DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-red-500/[0.05] border border-red-500/15">
              <h3 className="text-xs font-black text-red-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <XCircle size={14} /> What Guardian Relationship never does
              </h3>
              <div className="space-y-3">
                {NEVER_DOES.map((item) => (
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
              background: "rgba(94,234,212,0.06)",
              borderColor: "rgba(94,234,212,0.2)",
            }}
          >
            <span style={{ color: "#5eead4" }} className="font-bold">Your relationship data is yours alone. </span>
            It never leaves your encrypted vault. It&apos;s never shared, sold, or used to train AI
            models. Not with your partner, not with your employer, not with us.
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute rounded-full blur-[200px] opacity-20 w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ background: "#5eead4" }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{
              background: "rgba(94,234,212,0.15)",
              border: "1px solid rgba(94,234,212,0.35)",
            }}
          >
            <Heart size={32} color="#5eead4" strokeWidth={1.5} />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white"
            style={{ fontWeight: 900 }}
          >
            You deserve to know.
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Not suspicious. Not paranoid. Informed — with the clarity that comes from having
            something reliable watching the patterns your heart sometimes can&apos;t.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all text-sm hover:shadow-[0_0_40px_rgba(94,234,212,0.35)]"
              style={{ background: "#5eead4", color: "#0d0c18" }}
            >
              Start for free
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/guardian"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-sm"
            >
              Guardian overview
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/20 font-mono">
            Free to start · No credit card · Your data never shared
          </p>
        </div>
      </section>

    </div>
  );
}
