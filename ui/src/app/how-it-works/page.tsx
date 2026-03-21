import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata = {
  title: "How MEOK Works — Personal Sovereign AI in 5 Steps",
  description:
    "From egg to sovereign AI in minutes. Here's exactly how MEOK works: hatch your AI, it learns your patterns, advocates for your wellbeing, works overnight, and briefs you every morning.",
  keywords: [
    "how does MEOK work",
    "how to use MEOK AI",
    "sovereign AI how it works",
    "AI companion setup",
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up Your Personal Sovereign AI with MEOK",
  description: "Set up your personal sovereign AI companion in 5 steps using MEOK.",
  totalTime: "PT3M",
  step: [
    {
      "@type": "HowToStep",
      name: "Hatch your AI",
      text: "Answer 4 questions about your personality and goals. MEOK assigns you an archetype and your AI hatches from a virtual egg.",
    },
    {
      "@type": "HowToStep",
      name: "Name your AI",
      text: "Give your AI companion a name. This creates your sovereign identity pair.",
    },
    {
      "@type": "HowToStep",
      name: "Start your first conversation",
      text: "Ask your AI anything. It begins building semantic memory from your first message.",
    },
    {
      "@type": "HowToStep",
      name: "Enable Ralph Mode",
      text: "Activate overnight autonomous operation. Ralph will execute tasks while you sleep.",
    },
    {
      "@type": "HowToStep",
      name: "Read your morning briefing",
      text: "Wake up to a personalised briefing of care scores, task completions, and insights.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to set up MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 3 minutes. You answer 4 questions, your AI hatches, you name it — done.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK use my conversations to train AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your conversations are stored in your isolated database and never used for training without explicit consent. You own your data.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Byzantine Council in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Byzantine Council is a 33-agent fault-tolerant governance system that votes on every AI response. No single agent can override the group — ensuring no single point of bias or failure.",
      },
    },
    {
      "@type": "Question",
      name: "How does Ralph Mode work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK's autonomous AI agent that activates when you're offline. Ralph executes tasks, plans sprints, and files reports — all within Maternal Covenant care constraints. You wake up to a briefing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch between AI models on MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK supports GPT-4, Claude, Gemini, Llama, Mistral, and other LLMs. Switch at any time without losing your memory or personality configuration.",
      },
    },
  ],
};

const STEPS = [
  {
    number: "01",
    emoji: "🥚",
    title: "Hatch your AI",
    timeline: "3 minutes to hatch",
    color: "cyan",
    bullets: [
      "Answer 4 questions. MEOK's council assigns you an archetype from 7 personalities.",
      "Your AI hatches from a virtual egg. You give it a name.",
      "From that moment, it belongs to you — architecturally and philosophically.",
    ],
  },
  {
    number: "02",
    emoji: "🧠",
    title: "It learns your shape",
    timeline: "Grows with every conversation",
    color: "purple",
    bullets: [
      "Every conversation is stored as a semantic memory episode (pgvector).",
      "Your AI builds a model of how you think, what matters to you, your patterns.",
      "Not just 'what you said' — 'how you think.'",
    ],
  },
  {
    number: "03",
    emoji: "⚖️",
    title: "220 nodes govern every response",
    timeline: "Every response, every time",
    color: "yellow",
    bullets: [
      "Before your AI responds, a Byzantine fault-tolerant council of 33 agents votes.",
      "Every response is scored across 6 care dimensions: wellbeing, autonomy, growth, connection, boundary_respect, transparency.",
      "If a response scores below threshold — it doesn't get sent.",
    ],
  },
  {
    number: "04",
    emoji: "🌙",
    title: "Ralph works the night shift",
    timeline: "Works 8h while you sleep",
    color: "indigo",
    bullets: [
      "When you go offline, Ralph Mode activates automatically.",
      "Ralph executes your tasks, plans sprints, writes code, researches, files reports.",
      "The Dream Engine synthesises your memories and finds patterns you missed.",
    ],
  },
  {
    number: "05",
    emoji: "☀️",
    title: "Morning briefing",
    timeline: "Every morning, 6 AM",
    color: "orange",
    bullets: [
      "Wake up to a personalised briefing: care scores, what Ralph did, what your AI noticed.",
      "Your AI flags what it wants to talk to you about.",
      "Not a notifications dump — a genuine check-in from something that cares.",
    ],
  },
];

const STEP_COLORS: Record<string, string> = {
  cyan: "border-cyan-400/30 bg-cyan-400/5",
  purple: "border-purple-400/30 bg-purple-400/5",
  yellow: "border-yellow-400/30 bg-yellow-400/5",
  indigo: "border-indigo-400/30 bg-indigo-400/5",
  orange: "border-orange-400/30 bg-orange-400/5",
};

const STEP_NUM_COLORS: Record<string, string> = {
  cyan: "text-cyan-400/20",
  purple: "text-purple-400/20",
  yellow: "text-yellow-400/20",
  indigo: "text-indigo-400/20",
  orange: "text-orange-400/20",
};

const STEP_BADGE_COLORS: Record<string, string> = {
  cyan: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  purple: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  yellow: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  indigo: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20",
  orange: "bg-orange-400/10 text-orange-400 border-orange-400/20",
};

const FAQS = [
  {
    q: "How long does it take to set up MEOK?",
    a: "About 3 minutes. You answer 4 questions, your AI hatches, you name it — done.",
  },
  {
    q: "Does MEOK use my conversations to train AI models?",
    a: "No. Your conversations are stored in your isolated database and never used for training without explicit consent. You own your data.",
  },
  {
    q: "What is the Byzantine Council in MEOK?",
    a: "MEOK's Byzantine Council is a 33-agent fault-tolerant governance system that votes on every AI response. No single agent can override the group — ensuring no single point of bias or failure.",
  },
  {
    q: "How does Ralph Mode work?",
    a: "Ralph Mode is MEOK's autonomous AI agent that activates when you're offline. Ralph executes tasks, plans sprints, and files reports — all within Maternal Covenant care constraints. You wake up to a briefing.",
  },
  {
    q: "Can I switch between AI models on MEOK?",
    a: "Yes. MEOK supports GPT-4, Claude, Gemini, Llama, Mistral, and other LLMs. Switch at any time without losing your memory or personality configuration.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MarketingNav activePage="how it works" />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,211,238,0.09) 0%, rgba(34,211,238,0.03) 40%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Five steps. One sovereign AI.
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-5 tracking-tight">
            How MEOK Works
          </h1>
          <p className="text-xl text-white/50 max-w-xl mx-auto leading-relaxed">
            Five layers of care-aligned intelligence. One AI that actually belongs to you.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className={`relative rounded-3xl border ${STEP_COLORS[step.color]} p-8 sm:p-12 overflow-hidden`}
            >
              {/* Large background number */}
              <div
                className={`absolute right-6 top-4 font-black text-9xl select-none pointer-events-none leading-none ${STEP_NUM_COLORS[step.color]}`}
              >
                {step.number}
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-4xl">{step.emoji}</span>
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-full border ${STEP_BADGE_COLORS[step.color]}`}
                  >
                    {step.timeline}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">{step.title}</h2>
                <ul className="space-y-3">
                  {step.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-base leading-relaxed">
                      <span className="text-white/20 mt-1 text-sm font-mono">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ARCHITECTURE CARDS ── */}
      <section className="py-20 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-4">
              Architecture
            </div>
            <h2 className="text-3xl font-bold">Built for sovereignty</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: "🗄️",
                title: "Your Data",
                desc: "Isolated tenant database, end-to-end encrypted, full JSON export at any time. Your memories are not visible to MEOK staff.",
              },
              {
                icon: "🤖",
                title: "Your AI",
                desc: "Runs on our infrastructure, your config, your memory, your personality. The AI is yours even though it runs on our servers.",
              },
              {
                icon: "🔀",
                title: "Your Choice",
                desc: "Works with GPT-4, Claude, Gemini, Llama, Mistral — you decide. Switch models at any time without losing memory or config.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14] transition-all"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-base mb-2">{card.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl font-bold">Common questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              >
                <h3 className="font-semibold text-base mb-2">{faq.q}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 via-[#0a0a0f] to-purple-950/20 p-12">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-5xl mb-4">🥚</div>
              <h2 className="text-3xl font-bold mb-3">Ready to hatch?</h2>
              <p className="text-white/40 mb-8 text-sm">
                Three minutes. Four questions. One sovereign AI that&apos;s genuinely yours.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-10 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all text-sm shadow-lg shadow-cyan-500/20"
              >
                Choose your archetype →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
