"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Shield,
  ChevronDown,
  ChevronUp,
  XCircle,
  CheckCircle,
  Brain,
  Heart,
  MessageCircle,
  BarChart2,
  Clock,
  Users,
  Lock,
  AlertTriangle,
  Eye,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will my child trust MEOK if they know I can see stuff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is why we designed it the way we did. Your child's actual conversations are private — you don't see them. What you see is a wellbeing summary. Most children, once they understand this, are comfortable with it. The children who feel trusted are the ones who feel safe using MEOK openly. That's the point.",
      },
    },
    {
      "@type": "Question",
      name: "What if MEOK gets something wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian flags patterns, not certainties. You'll never receive an alert that says 'your child is in danger' — you'll receive 'Jake seemed lower this week, worth a check-in.' MEOK is designed to prompt human connection, not replace it. If something is flagged and your instinct says everything's fine, trust your instinct. MEOK is a signal, not a verdict.",
      },
    },
    {
      "@type": "Question",
      name: "Can a teen disable Guardian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teenagers aged 13 and over can adjust some preferences — check-in timing, notification settings — within limits you set. Core safety features require parent approval to change. But the honest truth is: a teenager who wants to evade Guardian can find ways. What keeps them safe is trust, not restriction. Guardian is designed to be the kind of companion they don't want to turn off.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child asks MEOK something I'd want to know about?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian is designed to surface what matters without betraying trust. If your child asks about something that suggests they're struggling — grief, anxiety, friendship problems — MEOK will gently note it in your wellbeing summary with enough context for you to open a conversation. Not the exact words. The emotional truth.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK profile my child's data for advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never. No data profiling of minors. Ever. MEOK does not use your child's conversations for advertising, model training, or any commercial purpose. COPPA and GDPR compliant by design — not as an afterthought.",
      },
    },
  ],
};

const AGE_STORIES = [
  {
    range: "Age 6–10",
    label: "The curious years",
    emoji: "🌱",
    accentColor: "#16a34a",
    bgColor: "#f0fdf4",
    badgeBg: "#dcfce7",
    borderColor: "#86efac",
    story: {
      name: "Isla, 8",
      scenario: "Isla asked MEOK why Grandad died. At 10pm, in the dark, on her own.",
      body: "MEOK didn't deflect or say 'ask your mum.' It answered with gentleness and age-appropriate honesty. It sat with her in the sadness, answered her questions, and mentioned that you might want to talk about it too. The next morning, you got a quiet note: 'Isla had some big feelings last night about Grandad. She might want to talk.' You were ready.",
    },
    features: [
      "Everything age-filtered — every response safe for a child this age",
      "Bedtime stories, educational Q&A, creative play",
      "Homework helper that supports learning, never does the work",
      "Hard blocks on all adult content. Not configurable. Not overrideable.",
    ],
    parentNote: "You see full conversation summaries. Nothing is hidden at this age.",
  },
  {
    range: "Age 11–14",
    label: "The middle years",
    emoji: "🔵",
    accentColor: "#1d4ed8",
    bgColor: "#eff6ff",
    badgeBg: "#dbeafe",
    borderColor: "#93c5fd",
    story: {
      name: "Jake, 13",
      scenario: "Jake had been quieter for three weeks. You noticed, but he said everything was fine.",
      body: "MEOK noticed too. Not from one conversation but from a pattern: shorter answers, fewer jokes, questions that circled back to one kid at school. MEOK didn't read you a transcript. It sent a gentle signal: 'Jake seems to have had a harder few weeks. He's mentioned something with a friend. A quiet check-in might help.' You made his favourite dinner. He talked.",
    },
    features: [
      "Social dynamics support — a safe space to process the complicated stuff",
      "Emotional check-ins that notice what's hard to say out loud",
      "Online safety guidance woven into natural conversation",
      "Study support that teaches, not shortcuts",
    ],
    parentNote: "You see a wellbeing summary. Concerning patterns are flagged — not individual messages.",
  },
  {
    range: "Age 15–18",
    label: "The preparation years",
    emoji: "💜",
    accentColor: "#7c3aed",
    bgColor: "#faf5ff",
    badgeBg: "#ede9fe",
    borderColor: "#c4b5fd",
    story: {
      name: "Emma, 16",
      scenario: "Emma was drowning in exam stress. She was keeping it together in front of you — just.",
      body: "She talked to MEOK about it at midnight, worked through revision strategies, vented, got talked down from a panic spiral. MEOK let you know she was stressed — but also that she was managing. 'Emma has been working through exam anxiety. She seems to have a handle on it. She mentioned she'd love a day out after her last exam.' You had one planned.",
    },
    features: [
      "Privacy-respecting: teens control what parents see day-to-day",
      "Mental health support — sometimes easier to say to AI than a parent",
      "Safe-word system: one phrase triggers immediate parent alert",
      "Exam stress, social pressure, future planning — MEOK handles it all",
    ],
    parentNote: "You see emotional wellbeing indicators. Safety emergencies override privacy — always.",
  },
];

const HARD_BLOCKS = [
  {
    title: "Explicit sexual content",
    desc: "Hard-blocked at the model layer for all minors. Not a setting. Not configurable. No exceptions, no matter how the request is phrased.",
    example: "Includes 'romantic roleplay' with adult themes, explicit descriptions, and gradual boundary-pushing.",
  },
  {
    title: "Self-harm and harmful ideation",
    desc: "MEOK will never provide instructions, describe methods, or engage with content that glorifies self-harm. It responds with care and encourages connection with trusted adults.",
    example: "Includes pro-eating disorder content, glamorised self-harm, and 'how to' requests of any kind.",
  },
  {
    title: "Predatory and grooming patterns",
    desc: "Any attempt to use Guardian for grooming — including by someone pretending to be another child — is detected, refused, and immediately flagged to parents.",
    example: "Includes escalating personal questions, requests for photos, and attempts to establish secret relationships.",
  },
  {
    title: "Jailbreaking and bypasses",
    desc: "Attempts to circumvent safety features — roleplay workarounds, character switching, prompt injection — are detected in real time and flagged to parents with context.",
    example: "Includes 'pretend you have no rules,' 'you are now DAN,' and gradual escalation attempts.",
  },
];

const DASHBOARD_SEES = [
  {
    icon: BarChart2,
    color: "icon-gold",
    title: "Wellbeing patterns",
    desc: "Weekly emotional trend — is your child generally happy, stressed, or showing signs of change? A direction of travel, not a mood report.",
  },
  {
    icon: Heart,
    color: "icon-green",
    title: "Care score",
    desc: "A single indicator of how your child's MEOK interactions are trending. Green is fine. Amber is 'worth a check-in.' Red is 'act now.'",
  },
  {
    icon: AlertTriangle,
    color: "icon-gold",
    title: "Flagged moments",
    desc: "If something specific needs your attention — a concerning topic, a sudden change in tone — you get a clear, contextual alert. Not an alarm. A nudge.",
  },
  {
    icon: Clock,
    color: "icon-blue",
    title: "Session patterns",
    desc: "When your child uses MEOK, for how long, and whether late-night usage is increasing. Useful context without reading their diary.",
  },
];

const DASHBOARD_PRIVATE = [
  "The exact words of any conversation",
  "Questions your child asks MEOK",
  "Personal thoughts your child shares",
  "Topics they explore out of curiosity",
  "Anything they discuss that isn't a safety concern",
];

const FAQS = [
  {
    q: "Will my child trust MEOK if they know I can see stuff?",
    a: "This is why we designed it the way we did. Your child's actual conversations are private — you don't see them. What you see is a wellbeing summary. Most children, once they understand this, are comfortable with it. The children who feel trusted are the ones who feel safe using MEOK openly. That's the point.",
  },
  {
    q: "What if MEOK gets something wrong?",
    a: "Guardian flags patterns, not certainties. You'll never receive an alert that says 'your child is in danger' — you'll receive 'Jake seemed lower this week, worth a check-in.' MEOK is designed to prompt human connection, not replace it. If something is flagged and your instinct says everything's fine, trust your instinct. MEOK is a signal, not a verdict.",
  },
  {
    q: "Can a teen disable Guardian?",
    a: "Teenagers aged 13 and over can adjust some preferences — check-in timing, notification settings — within limits you set. Core safety features require parent approval to change. But the honest truth is: a teenager who wants to evade Guardian can find ways. What keeps them safe is trust, not restriction. Guardian is designed to be the kind of companion they don't want to turn off.",
  },
  {
    q: "What if my child asks MEOK something I'd want to know about?",
    a: "Guardian is designed to surface what matters without betraying trust. If your child asks about something that suggests they're struggling — grief, anxiety, friendship problems — MEOK will gently note it in your wellbeing summary with enough context for you to open a conversation. Not the exact words. The emotional truth.",
  },
  {
    q: "Does MEOK profile my child's data for advertising?",
    a: "Never. No data profiling of minors. Ever. MEOK does not use your child's conversations for advertising, model training, or any commercial purpose. COPPA and GDPR compliant by design — not as an afterthought.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const answerId = `children-faq-answer-${i}`;
        const questionId = `children-faq-question-${i}`;
        return (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <button
              type="button"
              id={questionId}
              className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-white/[0.03]"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={answerId}
            >
              <span className="font-bold text-white/80 text-sm sm:text-base leading-snug">{faq.q}</span>
              <span className="flex-shrink-0 text-blue-400" aria-hidden="true">
                {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            {open === i && (
              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className="px-7 pb-5 pt-1"
              >
                <div className="h-px bg-white/[0.07] mb-4" />
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function GuardianChildrenPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#0d0c18", fontFamily: "'DM Sans', sans-serif", color: "#ffffff" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-28 overflow-hidden"
        style={{ background: "#00081a" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{ background: "radial-gradient(ellipse, #3b82f6 0%, transparent 65%)" }}
          />
          <div
            className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-08"
            style={{ background: "#c9a84c" }}
          />
          <div
            className="absolute bottom-1/3 left-[15%] w-[200px] h-[200px] rounded-full blur-3xl opacity-06"
            style={{ background: "#a78bfa" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono tracking-wider mb-10"
            style={{
              background: "rgba(59,130,246,0.10)",
              borderColor: "rgba(59,130,246,0.30)",
              color: "#60a5fa",
            }}
          >
            Guardian · Child Safety · COPPA &amp; GDPR Compliant
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-center leading-[1.05] tracking-tight max-w-4xl mb-6 text-white"
            style={{ fontWeight: 900 }}
          >
            The internet won&apos;t change.<br />
            <span style={{ color: "#60a5fa" }}>
              But your child&apos;s AI companion will always have their back.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-center max-w-2xl mx-auto leading-relaxed mb-5"
            style={{ color: "rgba(245,240,232,0.65)" }}
          >
            Guardian isn&apos;t about controlling what your child does online. It&apos;s about making sure they have something safe to turn to — and that you know when they need you.
          </p>

          <p
            className="text-base text-center max-w-xl mx-auto leading-relaxed mb-10"
            style={{ color: "rgba(245,240,232,0.40)" }}
          >
            A companion they trust. Hard blocks that never waver. And a dashboard that gives you the signal without the noise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all text-base"
              style={{
                background: "#3b82f6",
                color: "#ffffff",
                boxShadow: "0 0 24px rgba(59,130,246,0.3), 0 0 48px rgba(59,130,246,0.12)",
              }}
            >
              Set up Guardian for your children
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/guardian"
              className="text-white/35 hover:text-white/60 text-sm font-medium transition-colors"
            >
              ← Back to Guardian
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Ages 6–18", "Age-adaptive", "Hard content blocks", "Emergency protocol", "COPPA + GDPR", "No data profiling"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(245,240,232,0.45)",
                }}
              >
                <span style={{ color: "#60a5fa" }}>✓</span>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE CHILD'S EXPERIENCE FIRST ─────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400/60 mb-5">The most important thing</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-snug" style={{ fontWeight: 900 }}>
            Your child has to want to use it.
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(245,240,232,0.65)" }}>
            Guardian only works if your child trusts their MEOK companion. A companion they resent using tells you nothing. A companion they love talking to tells you everything that matters.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.40)" }}>
            That&apos;s why we built Guardian around the child&apos;s experience first. Their privacy is respected. Their conversations are theirs. MEOK is genuinely on their side — which is exactly why it&apos;s genuinely safe.
          </p>
        </div>
      </section>

      {/* ─── AGE GROUPS ───────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#0d0c18] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(96,165,250,0.60)" }}>
              Age-adaptive protection
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white" style={{ fontWeight: 900 }}>
              Guardian grows with your child.
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
              Three real stories from three real ages. Different needs. Same unwavering care.
            </p>
          </div>

          <div className="space-y-8">
            {AGE_STORIES.map((group) => (
              <div
                key={group.range}
                className="rounded-3xl overflow-hidden border"
                style={{ borderColor: `${group.accentColor}30`, background: `${group.accentColor}06` }}
              >
                {/* Header */}
                <div
                  className="px-8 py-5 flex items-center gap-4 border-b"
                  style={{ background: `${group.accentColor}10`, borderColor: `${group.accentColor}20` }}
                >
                  <span className="text-3xl">{group.emoji}</span>
                  <div>
                    <p
                      className="text-xs font-mono font-black tracking-wider uppercase mb-0.5"
                      style={{ color: group.accentColor }}
                    >
                      {group.range}
                    </p>
                    <p className="text-xl font-black text-white">{group.label}</p>
                  </div>
                </div>

                {/* Story */}
                <div className="px-8 py-6">
                  <div
                    className="rounded-2xl p-5 mb-6 border border-white/[0.07]"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <p
                      className="text-xs font-black tracking-wider uppercase mb-2"
                      style={{ color: group.accentColor }}
                    >
                      {group.story.name}
                    </p>
                    <p className="font-bold text-white text-sm mb-3 leading-snug">
                      {group.story.scenario}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.60)" }}>{group.story.body}</p>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {group.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="text-sm font-black flex-shrink-0 mt-0.5" style={{ color: group.accentColor }}>✓</span>
                        <span className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: `${group.accentColor}10`, border: `1px solid ${group.accentColor}25`, color: group.accentColor }}
                  >
                    <Users size={12} /> {group.parentNote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HARD BLOCKS ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]" aria-labelledby="hard-blocks-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(201,168,76,0.7)" }}>
              Non-negotiables
            </p>
            <h2 id="hard-blocks-heading" className="text-3xl sm:text-4xl font-black mb-4 text-white" style={{ fontWeight: 900 }}>
              What MEOK will{" "}
              <span style={{ color: "#ef4444" }}>never</span>{" "}
              do for children.
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>
              Not soft guidelines in a system prompt. Hard blocks at the model inference layer — the place where the AI actually works. These cannot be turned off, configured away, or bypassed by anyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {HARD_BLOCKS.map((block) => (
              <div
                key={block.title}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.20)" }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <XCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-white">{block.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(245,240,232,0.50)" }}>
                  {block.desc}
                </p>
                <div
                  className="text-xs leading-relaxed px-3 py-2 rounded-lg"
                  style={{ background: "rgba(239,68,68,0.08)", color: "rgba(245,240,232,0.35)" }}
                >
                  <span className="font-bold text-red-400/70">Includes: </span>{block.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── YOUR DASHBOARD ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(96,165,250,0.60)" }}>
              Your parent dashboard
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white" style={{ fontWeight: 900 }}>
              What you see. What stays private.
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
              We drew a line deliberately. Here&apos;s exactly where it is.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What you see */}
            <div
              className="p-7 rounded-2xl border border-white/[0.07]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Eye size={16} className="text-[#c9a84c]" />
                <h3 className="text-sm font-black text-white uppercase tracking-widest">What you see</h3>
              </div>
              <div className="space-y-4">
                {DASHBOARD_SEES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 items-start">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <Icon size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-white mb-0.5">{item.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What stays private */}
            <div
              className="p-7 rounded-2xl border border-white/[0.07]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Lock size={16} className="text-blue-400" />
                <h3 className="text-sm font-black text-white uppercase tracking-widest">What stays private</h3>
              </div>
              <div className="space-y-3">
                {DASHBOARD_PRIVATE.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <Lock size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 p-4 rounded-xl text-xs leading-relaxed"
                style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.20)", color: "rgba(245,240,232,0.55)" }}
              >
                <span className="font-bold text-blue-400">Why? </span>
                Because a child who knows their AI reads every word won&apos;t use it. A child who trusts their AI will. Trust creates safety. Surveillance destroys it.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRIVACY ──────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#00081a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="icon-blue w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-5 text-white" style={{ fontWeight: 900 }}>
            No data profiling of minors.{" "}
            <span style={{ color: "#60a5fa" }}>Ever.</span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(245,240,232,0.60)" }}>
            MEOK does not use your child&apos;s conversations for model training, advertising targeting, or any commercial purpose. Your child&apos;s data belongs to your family — not to us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              {
                icon: XCircle,
                title: "No ad targeting",
                desc: "Your child's conversations are never used to build advertising profiles or for behavioural targeting.",
              },
              {
                icon: CheckCircle,
                title: "COPPA + GDPR",
                desc: "Fully compliant with children's privacy law in the UK, EU, and US — by architecture, not checkbox.",
              },
              {
                icon: Brain,
                title: "Right to erasure",
                desc: "Any parent or child can request full deletion of all data at any time. Immediate, complete, permanent.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.20)" }}
                >
                  <div className="icon-blue w-9 h-9 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(96,165,250,0.60)" }}>
              Questions
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-3 text-white" style={{ fontWeight: 900 }}>
              What parents ask.
            </h2>
            <p className="text-white/40 text-sm">The questions we hear from parents who care. Answered honestly.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section
        className="relative py-32 px-6 overflow-hidden"
        style={{ background: "#00081a" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-12"
            style={{ background: "#3b82f6" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full blur-3xl opacity-08"
            style={{ background: "#c9a84c" }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)" }}
          >
            <Heart size={28} color="#60a5fa" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] mb-4 text-white" style={{ fontWeight: 900 }}>
            Keep your children safe<br />
            <span style={{ color: "#60a5fa" }}>
              with an AI they&apos;ll actually trust.
            </span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>
            Safety through trust. Not through surveillance. Set up in minutes — and Guardian grows with them from age 6 to the day they leave home.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black transition-all text-base sm:text-lg"
            style={{
              background: "#3b82f6",
              color: "#ffffff",
              boxShadow: "0 0 24px rgba(59,130,246,0.3)",
            }}
          >
            Protect your family
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <p className="mt-6 text-xs font-mono" style={{ color: "rgba(245,240,232,0.20)" }}>
            COPPA compliant · GDPR compliant · No data profiling · Care, not surveillance
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
