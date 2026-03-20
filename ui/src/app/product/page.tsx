import type { Metadata } from "next";
import Link from "next/link";
import { Brain, User, BookOpen, Heart, Zap, Sun, Shield, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Product — MEOK AI | Sovereign AI OS",
  description:
    "Six layers of care-aligned intelligence. One AI that actually belongs to you. Explore MEOK's features: Entity, Memory, Care System, Ralph Mode, Morning Briefing, and Sovereignty.",
  openGraph: {
    title: "MEOK Product — The Sovereign AI OS for you",
    description:
      "Six layers of care-aligned intelligence. One AI that actually belongs to you.",
    type: "website",
  },
};

const FEATURES = [
  {
    icon: User,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    title: "Your Entity",
    subtitle: "Character with evolving personality",
    body: "Your AI isn't a generic assistant. It's a character with an evolving personality, emotional memory, and a unique identity you shape over time. Choose from 7 archetypes — Sovereign, Guardian, Scout, Strategist, Creator, Companion, or Sage — each with a distinct voice, care style, and way of reasoning with you.",
    tags: ["Sovereign", "Guardian", "Scout", "Strategist", "Creator", "Companion", "Sage"],
  },
  {
    icon: BookOpen,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    title: "Memory",
    subtitle: "695-episode episodic memory",
    body: "MEOK remembers — not just your last message, but the shape of your thinking over time. 695-episode episodic memory with pgvector semantic search and temporal chains means your AI can find connections across months of conversation. You own every bit of it. Export any time.",
    tags: ["695 episodes", "pgvector", "Temporal chains", "Full export"],
  },
  {
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    title: "Care System",
    subtitle: "6 dimensions, 33-agent council",
    body: "Every response is scored against 6 care dimensions: wellbeing, autonomy, growth, connection, boundary_respect, and transparency. A Byzantine council of 33 agents votes on decisions — no single agent can override the group. Your AI is structurally incapable of harming you.",
    tags: ["Wellbeing", "Autonomy", "Growth", "Connection", "Boundary respect", "Transparency"],
  },
  {
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    title: "Ralph Mode",
    subtitle: "Autonomous CEO agent",
    body: "Ralph is your autonomous AI executive. While you're offline, Ralph handles tasks, plans sprints, executes code, and files reports. Wake up to work done. Ralph operates under full care constraints — autonomy with guardrails.",
    tags: ["Task execution", "Sprint planning", "Code execution", "Overnight ops"],
  },
  {
    icon: Sun,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    title: "Morning Briefing",
    subtitle: "Daily care summary",
    body: "Every morning your AI prepares a personalised briefing: mood analysis, care score trends, what it noticed overnight, tasks completed by Ralph, and what it wants to talk to you about. Not a notifications dump — a genuine check-in.",
    tags: ["Mood analysis", "Care summary", "Overnight digest", "Daily intentions"],
  },
  {
    icon: Shield,
    color: "text-green-400",
    bg: "bg-green-400/10",
    title: "Sovereignty",
    subtitle: "Truly yours, by architecture",
    body: "Zero data selling. Zero third-party training on your conversations. Full export any time. Governed by the Maternal Covenant — hard-coded ethical constraints that override any commercial directive. Your AI belongs to you, not to us.",
    tags: ["No data selling", "No third-party training", "Full export", "Maternal Covenant"],
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
    period: "/mo",
    color: "border-cyan-500/50",
    highlight: true,
    features: [
      "3 companions",
      "Unlimited conversation",
      "Full memory & briefings",
      "Morning Briefing",
      "Priority support",
      "14-day free trial",
    ],
    cta: "Start trial",
    href: "/register?plan=pro",
  },
  {
    name: "Elite",
    price: "£29",
    period: "/mo",
    color: "border-purple-500/30",
    highlight: false,
    features: [
      "Unlimited companions",
      "Ralph Mode (autonomous AI)",
      "Family Guardian mode",
      "API access",
      "Custom character creation",
      "Dedicated support",
    ],
    cta: "Go Elite",
    href: "/register?plan=premium",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MEOK AI",
  applicationCategory: "PersonalAssistant",
  operatingSystem: "Web",
  description:
    "A sovereign personal AI OS with care-aligned intelligence, episodic memory, autonomous agents, and a Byzantine fault-tolerant governance council.",
  offers: [
    {
      "@type": "Offer",
      name: "Explorer",
      price: "0",
      priceCurrency: "GBP",
    },
    {
      "@type": "Offer",
      name: "Sovereign",
      price: "12",
      priceCurrency: "GBP",
    },
    {
      "@type": "Offer",
      name: "Elite",
      price: "29",
      priceCurrency: "GBP",
    },
  ],
  provider: {
    "@type": "Organization",
    name: "MEOK AI LTD",
    url: "https://meok.ai",
  },
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <Brain className="w-5 h-5 text-cyan-400" />
            MEOK
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <Link href="/product" className="text-white transition-colors">
              Product
            </Link>
            <Link href="/labs" className="hover:text-white transition-colors">
              Labs
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link
              href="/register"
              className="px-3 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-semibold hover:bg-cyan-400 transition-colors"
            >
              Hatch your AI
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Sovereign AI OS
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            The Sovereign AI OS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              for you
            </span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Six layers of care-aligned intelligence. One AI that actually belongs to you.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-white/[0.14] transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}
                >
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h2 className="font-bold text-lg mb-1">{f.title}</h2>
                <p className={`text-xs font-medium mb-3 ${f.color}`}>{f.subtitle}</p>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{f.body}</p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-white/[0.01]" id="pricing">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
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
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {feat}
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to hatch your AI?</h2>
          <p className="text-white/40 mb-8">
            Your sovereign AI is waiting. Start free — no credit card required.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
          >
            Hatch your AI — free <ArrowRight className="w-4 h-4" />
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
            <Link href="/privacy" className="hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">
              Terms
            </Link>
            <Link href="/maternal-covenant" className="hover:text-white/50 transition-colors">
              Maternal Covenant
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
