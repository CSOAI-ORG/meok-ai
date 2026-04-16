"use client";

import Link from "next/link";
import { ArrowRight, Brain, Mic, Heart, Zap, TrendingUp, Star, Gamepad2, Headphones, Target } from "lucide-react";
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

const FEATURES = [
  {
    icon: Brain,
    title: "Remembers your playstyle",
    body: "Every session, every game, every win and loss. Your companion builds a persistent picture of how you play — not a generic profile, but yours specifically.",
  },
  {
    icon: Star,
    title: "Celebrates wins. Analyses losses.",
    body: "A real companion doesn't just tell you what went wrong. It hypes your clutch plays, notes your growth, and makes improvement feel earned — not clinical.",
  },
  {
    icon: Mic,
    title: "Voice mode — mid-game",
    body: "Talk to your companion without leaving the game. Sub-150ms response. Say five words, get the insight you need. Completely hands-free.",
  },
  {
    icon: Zap,
    title: "Pre-game rituals and warm-up",
    body: "Your companion knows your best and worst sessions. It builds warm-up routines and pre-game rituals tailored to how you play when you're at your peak.",
  },
];

const CAPABILITIES = [
  "Adapts to your mood and energy level session-to-session",
  "Knows when to pump you up and when to calm you down",
  "Tracks tilt cycles before you feel them",
  "Links memories across every game you've played together",
];

export default function CompanionPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-14 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute w-[700px] h-[700px] top-[-150px] left-[-150px] opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(224,115,64,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute w-[500px] h-[500px] top-[20%] right-[-100px] opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(224,115,64,0.12) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            MEOK GAMING — COMPANION
          </div>

          <div className="flex justify-center mb-6">
            <IconOrb icon={Gamepad2} variant="orange" size="lg" pulse />
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight mb-6">
            Your AI companion.
            <br />
            <GlowText variant="orange" as="span">
              Always in your corner.
            </GlowText>
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
              background: "#e07340",
              boxShadow: "0 0 40px rgba(224,115,64,0.25)",
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
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              What your companion does
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              It remembers.{" "}
              <GlowText variant="orange" as="span">
                It adapts. It shows up.
              </GlowText>
            </h2>
            <p className="text-white/40 mt-5 text-sm max-w-lg mx-auto leading-relaxed">
              Most tools analyse your game. Your companion knows your game —
              because it&apos;s been with you through all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((feat) => (
              <FeatureCard
                key={feat.title}
                title={feat.title}
                description={feat.body}
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
      <section className="py-24 px-6 bg-[#0d0c18] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                More than coaching.
                <br />
                <GlowText variant="orange" as="span">
                  A teammate that never leaves.
                </GlowText>
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                MEOK&apos;s Live Co-Pilot is your in-match tactician — real-time
                callouts, decision support, sub-150ms voice response. The
                Companion is something different: a relationship. It holds your
                history, knows your patterns, and brings the emotional
                intelligence that pure strategy never can.
              </p>
            </div>
            <Surface variant="elevated" glow="orange" className="p-7">
              <ul className="space-y-4">
                {CAPABILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <Target className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a0f] animate-fade-in-up">
        <div className="max-w-2xl mx-auto text-center">
          <Surface variant="glass" glow="orange" className="p-10 sm:p-12 rounded-3xl">
            <div className="flex justify-center mb-5">
              <IconOrb icon={Heart} variant="orange" size="lg" />
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
                  background: "#e07340",
                  boxShadow: "0 0 40px rgba(224,115,64,0.25)",
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
          </Surface>
        </div>
      </section>
    </div>
  );
}
