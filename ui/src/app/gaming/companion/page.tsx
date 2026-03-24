import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Mic, Heart, Zap, TrendingUp, Star } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "Gaming Companion — MEOK",
  description:
    "Your AI companion that plays alongside you. Knows your playstyle, remembers every session, celebrates your wins and helps you learn from every loss.",
};

const FEATURES = [
  {
    icon: Brain,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    title: "Remembers your playstyle",
    body: "Every session, every game, every win and loss. Your companion builds a persistent picture of how you play — not a generic profile, but yours specifically.",
  },
  {
    icon: Star,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
    title: "Celebrates wins. Analyses losses.",
    body: "A real companion doesn't just tell you what went wrong. It hypes your clutch plays, notes your growth, and makes improvement feel earned — not clinical.",
  },
  {
    icon: Mic,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    title: "Voice mode — mid-game",
    body: "Talk to your companion without leaving the game. Sub-150ms response. Say five words, get the insight you need. Completely hands-free.",
  },
  {
    icon: Zap,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
    title: "Pre-game rituals and warm-up",
    body: "Your companion knows your best and worst sessions. It builds warm-up routines and pre-game rituals tailored to how you play when you're at your peak.",
  },
  {
    icon: Heart,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    title: "Adapts to your mood and energy",
    body: "Tired? It dials back the intensity. Focused and ready? It leans in. Your companion reads the session and adjusts — so you always get the right kind of support.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
    title: "Knows when to pump you up",
    body: "And knows when to calm you down. Tilt happens. Your companion recognises it early and knows whether you need hype, strategy, or a five-minute break.",
  },
];

export default function CompanionPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-14 pb-20 overflow-hidden">
        {/* Blobs */}
        <div
          aria-hidden
          className="absolute w-[700px] h-[700px] top-[-150px] left-[-150px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute w-[500px] h-[500px] top-[20%] right-[-100px] opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        {/* Grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,146,60,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            MEOK GAMING — COMPANION
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight mb-6">
            Your AI companion.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FB923C 0%, #f0a020 40%, #ea580c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Always in your corner.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-4">
            Not a bot. Not a guide. A companion that knows your playstyle,
            remembers every session, celebrates your wins and helps you learn
            from every loss.
          </p>
          <p className="text-sm text-white/25 max-w-xl mx-auto leading-relaxed mb-10 font-mono">
            Memory · Voice mode · Mood-aware · Pre-game rituals · Always on your side
          </p>

          <Link
            href="/hatch"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#1a1a2e] transition-all text-base"
            style={{
              background: "#FB923C",
              boxShadow: "0 0 40px rgba(251,146,60,0.25)",
            }}
          >
            Get your gaming companion
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              What your companion does
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              It remembers.{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FB923C 0%, #ea580c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                It adapts. It shows up.
              </span>
            </h2>
            <p className="text-white/40 mt-5 text-sm max-w-lg mx-auto leading-relaxed">
              Most tools analyse your game. Your companion knows your game —
              because it&apos;s been with you through all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className={`rounded-2xl p-7 border ${feat.borderColor} hover:border-orange-400/35 transition-all`}
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${feat.iconBg} mb-5`}
                  >
                    <Icon className={`w-5 h-5 ${feat.iconColor}`} />
                  </div>
                  <h3 className="font-black text-white text-base mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed">
                    {feat.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPANION VS COACHING
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
                The difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                Co-pilot coaches.
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #FB923C 0%, #ea580c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Companion stays.
                </span>
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                MEOK&apos;s Live Co-Pilot is your in-match tactician — real-time
                callouts, decision support, sub-150ms voice response. The
                Companion is something different: a relationship. It holds your
                history, knows your patterns, and brings the emotional
                intelligence that pure strategy never can.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Live Co-Pilot",
                  desc: "Tactical guidance during matches. Real-time. Situational. Reactive.",
                  icon: "⚡",
                  dim: false,
                  accentBg: "rgba(251,146,60,0.06)",
                  accentBorder: "rgba(251,146,60,0.25)",
                },
                {
                  label: "Companion",
                  desc: "Relationship, memory, emotional support. Knows your full story.",
                  icon: "🧠",
                  dim: false,
                  accentBg: "rgba(201,168,76,0.06)",
                  accentBorder: "rgba(201,168,76,0.25)",
                },
                {
                  label: "Together",
                  desc: "Co-Pilot handles the match. Companion handles everything around it. The full MEOK Gaming OS.",
                  icon: "🎮",
                  dim: false,
                  accentBg: "rgba(139,92,246,0.06)",
                  accentBorder: "rgba(139,92,246,0.20)",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{
                    background: row.accentBg,
                    border: `1px solid ${row.accentBorder}`,
                  }}
                >
                  <span className="text-2xl flex-shrink-0">{row.icon}</span>
                  <div>
                    <p className="font-black text-sm text-white mb-1">
                      {row.label}
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a0f]">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="rounded-3xl p-10 sm:p-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(251,146,60,0.07), rgba(234,88,12,0.03))",
              border: "1.5px solid rgba(251,146,60,0.2)",
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-orange-400/10">
              <Heart className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Your companion is waiting.
            </h2>
            <p className="text-white/45 leading-relaxed text-sm max-w-md mx-auto mb-8">
              Every session you play without it is a session it can&apos;t
              remember. The sooner it starts learning you, the better it gets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/hatch"
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#1a1a2e] transition-all text-base"
                style={{
                  background: "#FB923C",
                  boxShadow: "0 0 40px rgba(251,146,60,0.25)",
                }}
              >
                Get your gaming companion
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/gaming"
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-orange-300 border border-orange-500/40 hover:border-orange-400 hover:bg-orange-500/10 transition-all text-base"
              >
                All MEOK Gaming features
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
