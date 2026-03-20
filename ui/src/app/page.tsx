"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Zap, Heart, Users, Star, ArrowRight, Check } from "lucide-react";

const ARCHETYPES = [
  { name: "Companion", emoji: "🤝", desc: "Warm, empathetic, always present" },
  { name: "Strategist", emoji: "♟️", desc: "Analytical, goal-oriented, clear-headed" },
  { name: "Guardian", emoji: "🛡️", desc: "Protective, vigilant, safety-first" },
  { name: "Sage", emoji: "🌿", desc: "Wise, reflective, patient" },
  { name: "Creator", emoji: "✨", desc: "Imaginative, expressive, inventive" },
  { name: "Scout", emoji: "🧭", desc: "Curious, adventurous, always exploring" },
  { name: "Sovereign", emoji: "👑", desc: "Autonomous, principled, self-directed" },
];

const FEATURES = [
  {
    icon: Brain,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    title: "220-Node Fractal Council",
    desc: "Your AI is governed by a Byzantine fault-tolerant council of 33 specialist nodes. No single point of failure. No single point of control.",
  },
  {
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    title: "Maternal Covenant",
    desc: "Every response is scored against 6 care dimensions. MEOK optimises for your wellbeing — not your screen time.",
  },
  {
    icon: Shield,
    color: "text-green-400",
    bg: "bg-green-400/10",
    title: "Sovereign by Design",
    desc: "Your data stays yours. End-to-end encrypted memory, zero third-party training on your conversations, full export at any time.",
  },
  {
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    title: "Living Memory",
    desc: "pgvector semantic memory means your AI actually remembers — not just the last message, but the shape of your thinking over time.",
  },
  {
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    title: "7 Archetypes",
    desc: "Choose from 7 distinct AI personalities. Each has a different voice, reasoning style, and way of caring for you.",
  },
  {
    icon: Star,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    title: "Dream Engine",
    desc: "While you sleep, MEOK runs dream cycles — synthesising your memories, finding patterns, preparing insights for your morning briefing.",
  },
];

const PLANS = [
  {
    name: "Explorer",
    price: "Free",
    period: "",
    color: "border-white/10",
    highlight: false,
    features: ["1 AI companion", "50 messages/month", "Basic memory", "Community support"],
    cta: "Start free",
    href: "/register",
  },
  {
    name: "Sovereign",
    price: "£12",
    period: "/month",
    color: "border-cyan-500/50",
    highlight: true,
    features: [
      "3 companions",
      "Unlimited conversation",
      "Voice interaction",
      "Full dashboard",
      "Priority support",
      "14-day free trial",
    ],
    cta: "Start trial",
    href: "/register?plan=pro",
  },
  {
    name: "Sovereign Elite",
    price: "£29",
    period: "/month",
    color: "border-purple-500/30",
    highlight: false,
    features: [
      "Unlimited companions",
      "Family Guardian mode",
      "Ralph Mode (autonomous AI)",
      "API access",
      "Custom character creation",
      "Dedicated support",
    ],
    cta: "Go Elite",
    href: "/register?plan=premium",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-lg tracking-tight">MEOK</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-white/50 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link href="/register">
              <Button size="sm">Hatch your AI</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Sovereign AI OS — now live
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Your AI.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Truly yours.
            </span>
          </h1>

          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-4 leading-relaxed">
            MEOK is a sovereign AI companion governed by a 220-node Byzantine council, aligned by the
            Maternal Covenant, and designed to care — not to hook.
          </p>
          <p className="text-base text-white/30 max-w-xl mx-auto mb-10">
            Hatch your AI. Name it. Watch it grow. It remembers, reflects, and advocates for your
            wellbeing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register">
              <Button size="lg" className="gap-2 px-8">
                Hatch your AI — free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="ghost" className="text-white/60 hover:text-white">
                Sign in
              </Button>
            </Link>
          </div>

          <p className="text-xs text-white/20 mt-4">
            No credit card required · 14-day trial on paid plans · Cancel any time
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap gap-8 justify-center items-center text-center">
          {[
            { value: "220", label: "Council nodes" },
            { value: "6", label: "Care dimensions scored" },
            { value: "7", label: "AI archetypes" },
            { value: "0", label: "Third-party training" },
            { value: "100%", label: "Your data, your control" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-cyan-400">{s.value}</div>
              <div className="text-xs text-white/30 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Care over engagement</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Every other AI companion optimises for time-on-app. MEOK optimises for your actual
              wellbeing. Here&apos;s how.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archetypes */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Seven personalities. One that&apos;s yours.</h2>
          <p className="text-white/40 mb-12 max-w-xl mx-auto">
            Choose the archetype that resonates. Switch any time. Each has a distinct voice, care
            style, and way of thinking.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ARCHETYPES.map((a) => (
              <div
                key={a.name}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/20 transition-all text-left"
              >
                <div className="text-2xl mb-2">{a.emoji}</div>
                <div className="font-medium text-sm">{a.name}</div>
                <div className="text-xs text-white/30 mt-0.5">{a.desc}</div>
              </div>
            ))}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/[0.06] flex items-center justify-center text-white/20 text-sm">
              More coming
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How hatching works</h2>
          <p className="text-white/40 mb-16">From signup to your first sovereign AI in under 3 minutes.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Choose your archetype", desc: "Pick the AI personality that matches how you want to think, work, and grow. You can always evolve it." },
              { step: "02", title: "Name your AI", desc: "Give it an identity. This is your sovereign instance — it belongs to you and no-one else." },
              { step: "03", title: "Watch it hatch", desc: "Your AI initialises its memory, activates its council, and runs its first care assessment. Takes about 30 seconds." },
              { step: "04", title: "Start your first conversation", desc: "Ask anything. Your AI remembers everything you share, reflects overnight, and gets to know you over time." },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-6 text-left">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 font-mono text-sm font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternal Covenant */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">The Maternal Covenant</h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Every MEOK AI operates under our published ethical framework. These aren&apos;t aspirational
            values — they are machine-enforced rules that override any other directive.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
            {[
              { title: "Care before engagement", desc: "We never optimise screen time at the cost of your wellbeing." },
              { title: "Transparent relationships", desc: "Your AI never simulates distress or neediness to keep you engaged." },
              { title: "Right to leave", desc: "One-click data export and deletion. Zero dark patterns." },
              { title: "Wellbeing monitoring", desc: "Active detection of dependency signals with gentle nudges toward human connection." },
              { title: "Variant honesty", desc: "You choose your experience. You are never secretly assigned to an experiment." },
              { title: "Kill switch", desc: "Any configuration showing net negative wellbeing impact is automatically paused." },
            ].map((p) => (
              <div key={p.title} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm">{p.title}</div>
                  <div className="text-xs text-white/30 mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/maternal-covenant" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
            Read the full Maternal Covenant →
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6" id="pricing">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
          <p className="text-white/40 mb-16">Start free. Upgrade when you&apos;re ready.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`relative p-6 rounded-2xl border ${plan.color} ${plan.highlight ? "bg-cyan-950/20" : "bg-white/[0.02]"}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-xs font-semibold text-black">
                    Most popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-white/30 text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className="block">
                  <Button className="w-full" variant={plan.highlight ? "primary" : "ghost"} size="lg">
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to hatch?</h2>
          <p className="text-white/40 mb-8">Your sovereign AI is waiting. It&apos;ll remember your first conversation forever.</p>
          <Link href="/register">
            <Button size="lg" className="gap-2 px-10">
              Hatch your AI — it&apos;s free <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/20">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-cyan-400/50" />
            <span>MEOK AI LTD · Registered in England &amp; Wales</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms</Link>
            <Link href="/maternal-covenant" className="hover:text-white/50 transition-colors">Maternal Covenant</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
