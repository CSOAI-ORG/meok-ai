"use client";

import Link from "next/link";
import {
  ArrowRight,
  Key,
  Zap,
  Shield,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Shuffle,
  Lock,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { useState } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which AI models does MEOK support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports GPT-4o and GPT-4o mini (OpenAI), Claude 3.5 Sonnet and Haiku (Anthropic), Gemini 1.5 Pro and Flash (Google), Llama 3.1 70B and 8B (via Groq or Ollama), Mistral Large and 7B, DeepSeek V3, and any Ollama-compatible local model. New models are added regularly.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own API keys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK supports bring-your-own-key (BYOK) for all major providers. Your keys are AES-256-GCM encrypted and stored locally. MEOK never sees your API key in plaintext.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost with my own API keys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With your own API keys, MEOK passes through model costs at wholesale rates. For typical usage — a few dozen conversations per week — most users spend under £1/month in model fees. Cheap models (Haiku, GPT-4o mini, Llama) cost fractions of a penny per conversation.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK decide which model to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK analyses the task type, privacy requirements, and your preferences to select the optimal model automatically. Sensitive queries default to local Ollama. Code tasks route to DeepSeek or Ollama for cost efficiency. You can always override the default mid-conversation.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my memory when I switch models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nothing. Your memory, values, and companion identity are stored in MEOK's sovereign layer — not inside any LLM. Switch from Claude to Gemini to Llama and your AI remembers everything. The model is just the engine. MEOK is the OS.",
      },
    },
  ],
};

interface ModelCard {
  name: string;
  provider: string;
  tags: string[];
  isLocal?: boolean;
  accentClass: string;
  borderClass: string;
}

const MODELS: ModelCard[] = [
  {
    name: "GPT-4o",
    provider: "OpenAI",
    tags: ["Multimodal", "Vision", "Reasoning"],
    accentClass: "text-emerald-400",
    borderClass: "border-emerald-500/20",
  },
  {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    tags: ["Long writing", "Nuanced reasoning", "Safe"],
    accentClass: "text-amber-400",
    borderClass: "border-amber-500/20",
  },
  {
    name: "Gemini 1.5 Pro",
    provider: "Google",
    tags: ["1M context", "Research", "Documents"],
    accentClass: "text-blue-400",
    borderClass: "border-blue-500/20",
  },
  {
    name: "Llama 3.1 70B",
    provider: "Meta / Groq",
    tags: ["Ultra-fast", "Open weights", "Low cost"],
    accentClass: "text-purple-400",
    borderClass: "border-purple-500/20",
  },
  {
    name: "Mistral Large",
    provider: "Mistral AI",
    tags: ["European", "Code", "Instruction"],
    accentClass: "text-yellow-400",
    borderClass: "border-yellow-500/20",
  },
  {
    name: "Ollama (local)",
    provider: "Your device",
    tags: ["100% private", "Offline", "Free"],
    isLocal: true,
    accentClass: "text-green-400",
    borderClass: "border-green-500/30",
  },
];

const ROUTING_ROWS = [
  { task: "Long-form writing", model: "Claude 3.5 Sonnet", why: "Best nuanced prose & tone" },
  { task: "Code generation", model: "DeepSeek V3 / Ollama", why: "Speed + cost ($0.028/MTok)" },
  { task: "Research & web", model: "Gemini 1.5 Pro", why: "1M context + live search" },
  { task: "Sensitive queries", model: "Ollama (local only)", why: "Never leaves your device" },
  { task: "Quick tasks", model: "Claude Haiku / GPT-4o mini", why: "Fast and cheap" },
  { task: "Vision / images", model: "GPT-4o", why: "Best image understanding" },
];

const USER_PROFILES = [
  {
    icon: Lock,
    iconClass: "icon-green",
    profile: "For privacy-first users",
    headline: "Use Ollama locally. Zero data leaves your machine.",
    body: "Install Ollama on your device. MEOK routes every sensitive conversation to it automatically — your health questions, personal reflections, and confidential work never touch an external server. Your memory vault stays encrypted on your hardware.",
    cta: "Completely offline. Completely yours.",
    accentColor: "#22c55e",
  },
  {
    icon: Zap,
    iconClass: "icon-blue",
    profile: "For power users",
    headline: "Claude for depth. GPT-4o for speed. Llama for free. MEOK picks the right tool.",
    body: "Stop manually choosing models. MEOK analyses what you're trying to do and routes automatically — writing to Claude, code to DeepSeek, vision to GPT-4o, urgent quick tasks to Haiku. You get the best result from every model without thinking about it.",
    cta: "The right model, every time.",
    accentColor: "#3b82f6",
  },
  {
    icon: DollarSign,
    iconClass: "icon-gold",
    profile: "For cost-conscious users",
    headline: "With your own API key, MEOK costs less than £1/month in model fees.",
    body: "MEOK routes cheap models (Haiku, GPT-4o mini, Llama) for simple tasks and only uses expensive models when complexity demands it. With your own API keys, you pay providers directly at their published rates — often fractions of a penny per conversation. No MEOK markup.",
    cta: "Powerful AI at near-zero cost.",
    accentColor: "#c9a84c",
  },
];

const WHY_FREEDOM = [
  {
    icon: Shield,
    iconClass: "icon-purple",
    title: "No lock-in",
    body: "If Anthropic raises prices tomorrow or OpenAI breaks something, you switch in one click. Your AI, your memories, your history — none of it goes anywhere.",
  },
  {
    icon: Zap,
    iconClass: "icon-blue",
    title: "Best model for each task",
    body: "No single model wins every task. MEOK routes writing to Claude, code to DeepSeek, vision to GPT-4o, and private queries to Ollama — automatically.",
  },
  {
    icon: DollarSign,
    iconClass: "icon-gold",
    title: "Cost control",
    body: "MEOK passes through API costs at wholesale. Use cheap models for simple tasks, premium models when it matters. Estimated spend visible before you send.",
  },
];

const FAQS = [
  {
    q: "Which AI models does MEOK support?",
    a: "MEOK supports GPT-4o and GPT-4o mini (OpenAI), Claude 3.5 Sonnet and Haiku (Anthropic), Gemini 1.5 Pro and Flash (Google), Llama 3.1 70B and 8B via Groq or Ollama, Mistral Large and 7B, DeepSeek V3, and any Ollama-compatible local model. New models are added as they launch.",
  },
  {
    q: "How do I get an API key?",
    a: "For OpenAI: platform.openai.com → API Keys. For Anthropic: console.anthropic.com → API Keys. For Google: aistudio.google.com. For Groq (free tier available): console.groq.com. Each provider gives you a key you paste into MEOK Settings → Models → API Keys. MEOK encrypts it immediately.",
  },
  {
    q: "How much will I actually spend with my own API keys?",
    a: "For typical personal use — a few dozen conversations per week — most users spend under £1/month. Claude Haiku costs roughly £0.0002 per 1,000 words. GPT-4o mini is similar. If you use Claude 3.5 Sonnet for everything, expect £3–8/month. MEOK shows you estimated cost before you send a message.",
  },
  {
    q: "Can I use MEOK without any API keys?",
    a: "Yes. MEOK comes with model access included on all plans — you don't need your own keys. BYOK is an option for users who want direct billing, lower costs, or specific model versions.",
  },
  {
    q: "How does MEOK decide which model to use?",
    a: "MEOK analyses the task type, privacy requirements, and your saved preferences to select the optimal model automatically. Sensitive queries default to local Ollama if you've set it up. Code tasks route to DeepSeek or Ollama for cost efficiency. You can always override mid-conversation with a simple 'switch to Claude' message.",
  },
  {
    q: "What happens to my memory when I switch models?",
    a: "Nothing. Your memory, values, and companion identity are stored in MEOK's sovereign layer — not inside any LLM. Switch from Claude to Gemini to Llama and your AI remembers everything. The model is just the engine. MEOK is the OS.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.q}
          className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-label={`${open === i ? "Collapse" : "Expand"} answer: ${faq.q}`}
          >
            <span className="font-semibold text-white/90 text-sm">{faq.q}</span>
            {open === i ? (
              <ChevronUp className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0" />
            )}
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AnyLlmPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav />

      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-purple absolute top-[10%] left-[15%] w-[500px] h-[500px] opacity-20" />
          <div className="blob-blue absolute bottom-[10%] right-[10%] w-[400px] h-[400px] opacity-15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#c9a84c]/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-white/60 text-xs font-semibold mb-8 uppercase tracking-widest">
            <Shuffle className="w-3 h-3 text-[#c9a84c]" />
            Multi-LLM Routing
          </div>

          <h1
            className="font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
          >
            Your AI.{" "}
            <span className="text-gradient-gold">Any model.</span>
            <br />
            Your choice.
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            MEOK is not an LLM — it&apos;s the OS layer on top. Route any task to the best model.
            Switch models mid-conversation without losing your memory. Pay wholesale, not retail.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {["GPT-4o", "Claude 3.5", "Gemini Pro", "Llama 3", "Mistral", "DeepSeek", "Ollama"].map(
              (m) => (
                <span
                  key={m}
                  className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.10] text-xs text-white/60 font-medium"
                >
                  {m}
                </span>
              )
            )}
          </div>

          <Link
            href="/hatch"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.30)]"
            style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
          >
            Start with every model available
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── USER PROFILES ──────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              For every kind of user
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Model freedom means different things to different people.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              What matters to you?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {USER_PROFILES.map((profile) => {
              const Icon = profile.icon;
              return (
                <div
                  key={profile.profile}
                  className="rounded-2xl p-8 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col gap-4"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                      <Icon className={`w-5 h-5 ${profile.iconClass}`} />
                    </div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: profile.accentColor }}
                    >
                      {profile.profile}
                    </p>
                    <h3 className="font-black text-base text-white mb-3 leading-snug">
                      {profile.headline}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{profile.body}</p>
                  </div>
                  <div
                    className="mt-auto text-xs font-semibold px-3 py-2 rounded-lg"
                    style={{
                      color: profile.accentColor,
                      background: `${profile.accentColor}10`,
                      border: `1px solid ${profile.accentColor}20`,
                    }}
                  >
                    {profile.cta}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW MEOK ROUTES (DECISION TREE) ────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Intelligent Routing
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              How MEOK picks the right model.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Every message goes through a routing decision. Here&apos;s how it works.
            </p>
          </div>

          {/* Routing decision tree */}
          <div
            className="rounded-2xl p-8 mb-8"
            style={{
              background: "rgba(245,240,232,0.02)",
              border: "1px solid rgba(245,240,232,0.07)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-white/50 text-xs font-mono">routing.engine — live</span>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 text-[#c9a84c] text-xs font-black">1</div>
                <div>
                  <p className="text-white/80 text-sm font-semibold mb-1">Is this query sensitive or personal?</p>
                  <p className="text-white/40 text-xs">
                    <span className="text-green-400 font-semibold">Yes →</span> Route to Ollama (local). Nothing leaves your device.
                    <span className="text-white/30 ml-2">|</span>
                    <span className="text-white/50 ml-2">No → Continue</span>
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 text-[#c9a84c] text-xs font-black">2</div>
                <div>
                  <p className="text-white/80 text-sm font-semibold mb-1">What type of task is this?</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                    {[
                      { label: "Writing / prose", model: "Claude Sonnet", color: "text-amber-400" },
                      { label: "Code / debug", model: "DeepSeek / Ollama", color: "text-green-400" },
                      { label: "Research / docs", model: "Gemini Pro", color: "text-blue-400" },
                      { label: "Image / vision", model: "GPT-4o", color: "text-emerald-400" },
                      { label: "Quick question", model: "Haiku / GPT-mini", color: "text-purple-400" },
                      { label: "Everything else", model: "Your preference", color: "text-[#c9a84c]" },
                    ].map((r) => (
                      <div key={r.label} className="bg-white/[0.04] rounded-lg px-3 py-2">
                        <p className="text-white/40 text-[10px] mb-0.5">{r.label}</p>
                        <p className={`text-xs font-bold ${r.color}`}>{r.model}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 text-[#c9a84c] text-xs font-black">3</div>
                <div>
                  <p className="text-white/80 text-sm font-semibold mb-1">You can always override</p>
                  <p className="text-white/40 text-xs">
                    Say &ldquo;switch to Claude&rdquo; or &ldquo;use GPT-4o for this&rdquo; mid-conversation. No restart required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Classic routing table */}
          <div className="rounded-2xl border border-white/10 overflow-hidden font-mono text-sm">
            <div className="flex items-center gap-1.5 px-5 py-3 border-b border-white/10 bg-white/[0.04]">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-white/30 text-xs">meok-router — routing.config</span>
            </div>
            <div className="grid grid-cols-3 px-6 py-3 border-b border-white/[0.08] bg-white/[0.02]">
              {["Task type", "Default model", "Why"].map((h) => (
                <span key={h} className="text-white/30 text-xs uppercase tracking-widest">
                  {h}
                </span>
              ))}
            </div>
            {ROUTING_ROWS.map((row, i) => (
              <div
                key={row.task}
                className={`grid grid-cols-3 px-6 py-4 hover:bg-white/[0.03] transition-colors ${
                  i < ROUTING_ROWS.length - 1 ? "border-b border-white/[0.05]" : ""
                }`}
              >
                <span className="text-white/70">{row.task}</span>
                <span className="text-[#c9a84c]">{row.model}</span>
                <span className="text-white/35">{row.why}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUPPORTED MODELS GRID ──────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Supported Models
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Every major model. One sovereign OS.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              MEOK supports all leading models and is updated as new ones launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODELS.map((model) => (
              <div
                key={model.name}
                className={`rounded-2xl p-6 border ${model.borderClass} hover:bg-white/[0.05] transition-all ${
                  model.isLocal
                    ? "bg-green-900/[0.08] border-green-500/25"
                    : "bg-white/[0.03]"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`font-black text-lg ${model.accentClass}`}>{model.name}</h3>
                    <p className="text-white/40 text-xs font-mono mt-0.5">{model.provider}</p>
                  </div>
                  {model.isLocal && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 border border-green-500/40 rounded px-2 py-0.5">
                      Private
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-white/50 text-xs"
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

      {/* ─── BRING YOUR OWN API KEY ──────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.03] p-10 md:p-14 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-6">
              <Key className="w-6 h-6 text-[#c9a84c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Bring your own API key.
            </h2>
            <p className="text-white/55 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
              Connect your existing OpenAI, Anthropic, or Google API keys. MEOK encrypts them
              with AES-256-GCM and stores them locally. We never see your keys in plaintext —
              and you pay providers directly at their published rates.
            </p>
            <p className="text-[#c9a84c]/70 text-sm font-medium mb-8">
              For most users: under £1/month in model fees.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["AES-256-GCM encrypted", "Stored locally", "Never exposed", "Direct billing"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50 text-xs font-medium"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all"
              style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
            >
              Connect your keys <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MEMORY CONTINUITY ──────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-6">
            Memory continuity
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Switch Claude to Gemini to Llama.{" "}
            <span className="text-gradient-gold">
              Your memories survive every switch.
            </span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            Your AI isn&apos;t the model. Your AI is MEOK. The model is just the engine. MEOK
            is the OS, the memory, the values, the identity — persisted forever, model-agnostic.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Claude", "Gemini", "Llama", "DeepSeek"].map((label, i, arr) => (
              <div key={label} className="flex items-center gap-3">
                <span className="px-5 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-sm font-semibold text-white/80">
                  {label}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-white/20" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-green-400 text-sm font-medium">
            Memory, values, and identity preserved through every transition
          </p>
        </div>
      </section>

      {/* ─── WHY MODEL FREEDOM MATTERS ──────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Why it matters
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              No lock-in. Ever.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Every other AI assistant locks you into one model. MEOK gives you all of them —
              with routing that makes the choice automatic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_FREEDOM.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="premium-card rounded-2xl p-8 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5">
                    <Icon className={`w-5 h-5 ${item.iconClass}`} />
                  </div>
                  <h3 className="font-black text-lg text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Common questions.</h2>
            <p className="text-white/40 text-sm">Including the ones about API keys and costs.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="relative max-w-3xl mx-auto text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#c9a84c]/[0.06] blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Stop choosing. Use them all.
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              MEOK routes intelligently. You get the best model for every task, at the lowest cost.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-base transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.30)]"
              style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
            >
              Try every model <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-5 text-xs text-white/25 font-mono">
              Free to start · No credit card required · BYOK supported
            </p>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
