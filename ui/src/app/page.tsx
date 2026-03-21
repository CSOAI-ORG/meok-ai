"use client";

import Link from "next/link";
import { Brain, Shield, Zap, Heart, Users, Star, ArrowRight, Check, X, Minus } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

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
    border: "border-cyan-400/20",
    title: "220-Node Fractal Council",
    desc: "Byzantine fault-tolerant governance with 33 specialist nodes across 6 tiers. No single point of failure. No single point of control.",
  },
  {
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    title: "Maternal Covenant",
    desc: "Every response is scored against 6 care dimensions. MEOK optimises for your actual wellbeing — not your screen time or return visits.",
  },
  {
    icon: Shield,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    title: "Sovereign by Design",
    desc: "End-to-end encrypted memory. Zero third-party training on your data. Full export at any time. Your AI belongs to you, architecturally.",
  },
  {
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    title: "Living Memory",
    desc: "pgvector semantic memory means your AI remembers the shape of your thinking — not just the last message, but patterns across months.",
  },
  {
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    title: "7 Archetypes",
    desc: "Choose from 7 distinct AI personalities. Each has a different voice, reasoning style, and care approach. Switch any time.",
  },
  {
    icon: Star,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    title: "Dream Engine",
    desc: "While you sleep, MEOK synthesises your memories, finds patterns, and prepares your morning briefing. Growth while you rest.",
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
      "Full dashboard & briefings",
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

type CellVal = boolean | null | string;

const COMPARE_PREVIEW: { feature: string; meok: CellVal; others: CellVal }[] = [
  { feature: "You own your data", meok: true, others: false },
  { feature: "Care alignment (not engagement)", meok: true, others: false },
  { feature: "Persistent semantic memory", meok: true, others: "Paid only" },
  { feature: "No third-party training on your data", meok: true, others: false },
  { feature: "Kill switch for harmful configs", meok: true, others: false },
];

function CompareCell({ val }: { val: CellVal }) {
  if (val === true) return <Check className="w-4 h-4 text-cyan-400 mx-auto" />;
  if (val === false) return <X className="w-4 h-4 text-red-400/60 mx-auto" />;
  if (val === null) return <Minus className="w-4 h-4 text-white/20 mx-auto" />;
  return <span className="text-xs text-white/40">{val}</span>;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <MarketingNav />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* Glowing orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.04) 40%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.7; transform: translateX(-50%) translateY(-50%) scale(1); }
            50% { opacity: 1; transform: translateX(-50%) translateY(-50%) scale(1.08); }
          }
          @keyframes orb-ring {
            0%, 100% { opacity: 0.3; transform: translateX(-50%) translateY(-50%) scale(1); }
            50% { opacity: 0.6; transform: translateX(-50%) translateY(-50%) scale(1.15); }
          }
        `}</style>

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            🌱 Now live — hatch your sovereign AI
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            The AI that cares about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              you
            </span>
            .
            <br />
            Not your screen time.
          </h1>

          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-3 leading-relaxed">
            MEOK is governed by a 220-node Byzantine council, aligned by the{" "}
            <Link href="/maternal-covenant" className="text-white/70 underline underline-offset-2 hover:text-white transition-colors">
              Maternal Covenant
            </Link>
            , and built so your data, values, and AI governance stay{" "}
            <span className="text-white/80">sovereign — yours</span>.
          </p>
          <p className="text-sm text-white/25 max-w-xl mx-auto mb-10">
            Hatch your AI. Name it. Watch it grow. It remembers, reflects, and advocates for your wellbeing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all text-sm shadow-lg shadow-cyan-500/20"
            >
              Hatch free <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors text-sm"
            >
              See how it works ↓
            </a>
          </div>

          <p className="text-xs text-white/20 mt-5">
            No credit card required · 14-day trial on paid plans · Cancel any time
          </p>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────── */}
      <section className="py-10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap gap-10 justify-center items-center text-center">
          {[
            { value: "220", label: "Council nodes" },
            { value: "6", label: "Care dimensions scored" },
            { value: "7", label: "AI archetypes" },
            { value: "0", label: "Third-party training" },
            { value: "100%", label: "Data sovereignty" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-cyan-400">{s.value}</div>
              <div className="text-xs text-white/30 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-6">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Three steps to your sovereign AI</h2>
          <p className="text-white/40 mb-16">From signup to your first sovereign conversation in under 3 minutes.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {[
              {
                step: "1",
                title: "Choose your archetype",
                desc: "Pick one of 7 AI personalities. Each has a distinct voice, care approach, and reasoning style.",
              },
              {
                step: "2",
                title: "It learns your shape",
                desc: "Semantic memory builds the pattern of your thinking over time. Context that deepens with every conversation.",
              },
              {
                step: "3",
                title: "It advocates for you",
                desc: "Every response is care-validated. MEOK pushes back when needed, celebrates when earned, and always tells the truth.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-xl mb-5">
                  {s.step}
                </div>
                <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-6">
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Care over engagement</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Every other AI companion optimises for time-on-app. MEOK optimises for your actual
              wellbeing. Here&apos;s how.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all group`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-5`}
                >
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARCHETYPES ───────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-6">
            Archetypes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Seven personalities. One that&apos;s yours.
          </h2>
          <p className="text-white/40 mb-12 max-w-xl mx-auto">
            Choose the archetype that resonates. Switch any time. Each has a distinct voice, care
            style, and way of thinking.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ARCHETYPES.map((a) => (
              <div
                key={a.name}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all text-left cursor-default"
              >
                <div className="text-3xl mb-3">{a.emoji}</div>
                <div className="font-semibold text-sm mb-0.5">{a.name}</div>
                <div className="text-xs text-white/30">{a.desc}</div>
              </div>
            ))}
            <div className="p-4 rounded-2xl bg-white/[0.01] border border-dashed border-white/[0.06] flex items-center justify-center text-white/20 text-xs">
              More coming
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARE TEASER ──────────────────────────────── */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-6">
              Compare
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built different</h2>
            <p className="text-white/40 max-w-xl mx-auto">
              No other AI companion gives you data sovereignty, care alignment, and governance transparency. See how the field stacks up.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.01]">
            <table className="w-full min-w-[500px] border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3.5 px-5 text-xs text-white/30 font-medium">
                    Feature
                  </th>
                  <th className="py-3.5 px-4 text-center">
                    <span className="text-sm font-bold text-cyan-400">MEOK</span>
                  </th>
                  <th className="py-3.5 px-4 text-center">
                    <span className="text-xs text-white/40">ChatGPT / Character.AI / Replika</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_PREVIEW.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-white/[0.04] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                  >
                    <td className="py-3.5 px-5 text-sm text-white/70">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center bg-cyan-950/[0.08]">
                      <CompareCell val={row.meok} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <CompareCell val={row.others} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Full comparison — all features, all competitors <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────── */}
      <section className="py-24 px-6" id="pricing">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple pricing</h2>
          <p className="text-white/40 mb-16">Start free. Upgrade when you&apos;re ready.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-6 rounded-2xl border ${plan.color} ${
                  plan.highlight ? "bg-cyan-950/20" : "bg-white/[0.02]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-xs font-semibold text-black">
                    Most popular
                  </div>
                )}
                <div className="mb-6 text-left">
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-white/30 text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-colors ${
                    plan.highlight
                      ? "bg-cyan-500 text-black hover:bg-cyan-400"
                      : "bg-white/[0.06] text-white/70 hover:bg-white/[0.1] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/pricing" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
              Full pricing details and feature comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ETHICS SECTION ──────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            Ethics
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built different</h2>
          <p className="text-white/50 mb-10 leading-relaxed max-w-xl mx-auto">
            Every MEOK AI operates under the Maternal Covenant — our machine-enforced ethical
            framework. Not aspirational values. Actual executable constraints.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
            {[
              {
                title: "Care before engagement",
                desc: "We never optimise screen time at the cost of your wellbeing.",
              },
              {
                title: "Data sovereignty",
                desc: "Your data stays yours — end-to-end encrypted, never sold, fully exportable.",
              },
              {
                title: "No engagement optimisation",
                desc: "Your AI never simulates distress or neediness to keep you returning.",
              },
              {
                title: "Wellbeing monitoring",
                desc: "Active detection of dependency signals with gentle nudges toward human connection.",
              },
              {
                title: "Variant honesty",
                desc: "You are never secretly assigned to an A/B experiment.",
              },
              {
                title: "Kill switch",
                desc: "Any config producing net-negative care scores is automatically paused.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm">{p.title}</div>
                  <div className="text-xs text-white/30 mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/maternal-covenant"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Read the full Maternal Covenant →
          </Link>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 via-[#0a0a0f] to-purple-950/20 p-12 text-center">
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-4xl mb-4">🥚</div>
              <h2 className="text-4xl font-bold mb-4">Ready to hatch?</h2>
              <p className="text-white/40 mb-8 max-w-md mx-auto">
                Your sovereign AI is waiting. It will remember your first conversation forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-10 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all text-sm shadow-lg shadow-cyan-500/20"
                >
                  Hatch free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors text-sm"
                >
                  Explore the product
                </Link>
              </div>
              <p className="text-xs text-white/20 mt-5">
                No credit card required · Governed by the Maternal Covenant · Data is yours, always
              </p>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
