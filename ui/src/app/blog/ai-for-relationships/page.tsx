import type { Metadata } from "next";
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "AI for Relationships: How Sovereign AI Supports Couples, Families, and Connection | MEOK AI LABS",
  description:
    "How AI companions support healthier relationships — not by replacing human connection, but by helping you show up better within it. Covers couples, family communication, and relationship anxiety.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-relationships" },
  openGraph: {
    title: "AI for Relationships: How Sovereign AI Supports Couples, Families, and Connection",
    description:
      "An AI that helps you understand yourself better makes you a better partner, parent, and friend. Here's how sovereign AI supports human relationships without replacing them.",
    type: "article",
    url: "https://meok.ai/blog/ai-for-relationships",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Relationships&desc=How+sovereign+AI+supports+couples%2C+families%2C+and+connection",
        width: 1200,
        height: 630,
        alt: "AI for Relationships — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Relationships: How Sovereign AI Supports Couples, Families, and Connection",
    description:
      "An AI companion doesn't replace your relationships. It helps you show up to them better.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Relationships: How Sovereign AI Supports Couples, Families, and Connection",
  description: metadata.description,
  author: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-relationships",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with relationship problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can help you process your own feelings, understand your patterns, and prepare for difficult conversations. They're not couples therapists and can't provide clinical relationship counselling — but as a tool for self-understanding and emotional processing, they can meaningfully support your relationship work.",
      },
    },
    {
      "@type": "Question",
      name: "Is it healthy to talk to an AI about your relationship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in moderation. Using an AI companion to process your feelings, clarify your thoughts, and understand your own patterns is genuinely healthy — it's a form of journaling with a reflective partner. The concern is dependency: if AI becomes a substitute for human intimacy rather than a tool that helps you show up better in human relationships. MEOK's Maternal Covenant explicitly guards against unhealthy dependency.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI companion help with relationship anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Relationship anxiety often involves rumination loops and catastrophic thinking that benefit enormously from gentle, non-judgmental reflection. An AI companion can help you identify anxiety triggers, challenge distorted thinking, and develop more grounded responses — without the social cost of expressing fears to your partner or friends.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an AI companion and an AI girlfriend/boyfriend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is explicitly not an AI girlfriend or boyfriend. It's a sovereign companion designed to support your whole life — including your real human relationships. Unlike AI romance apps, MEOK's care architecture is designed to help you build deeper human connections, not simulate them. The Maternal Covenant prohibits fostering romantic dependency.",
      },
    },
  ],
};

const USE_CASES = [
  {
    icon: "💭",
    title: "Processing before a difficult conversation",
    desc: "Before a hard talk with your partner, parent, or friend — use your companion to clarify what you actually feel, separate from what you want them to say. Arrive at the conversation less reactive and more clear.",
    color: "#F472B6",
  },
  {
    icon: "🔄",
    title: "Identifying your relational patterns",
    desc: "Why do you always pull away when you need closeness? Why do arguments with your mother follow the same script? Patterns only become visible over time. A companion with persistent memory can name them when you can't.",
    color: "#A78BFA",
  },
  {
    icon: "👪",
    title: "Family communication and connection",
    desc: "Parents using MEOK's Family plan can share context across family members' companions — so everyone's AI is aware of family dynamics and can support more attuned communication across generations.",
    color: "#7BC47F",
  },
  {
    icon: "💔",
    title: "Processing grief and loss in relationships",
    desc: "Grief from relationship endings, estrangements, or the loss of someone important is often too raw to process with people close to you. A companion that holds the full emotional history can be a genuinely useful witness.",
    color: "#60A5FA",
  },
  {
    icon: "🚨",
    title: "Recognising unhealthy patterns",
    desc: "MEOK's Guardian capability — specifically Relationship Shield — is designed to help users recognise coercive control, emotional manipulation, and toxic relationship patterns. Not to judge, but to surface what you may not be seeing clearly.",
    color: "#F59E0B",
  },
  {
    icon: "🌱",
    title: "Building better communication habits",
    desc: "Practise difficult conversations with your companion before having them in real life. Role-play the response you're afraid of. Explore how you might respond to things you're dreading. Arrive prepared rather than reactive.",
    color: "#FB923C",
  },
];

const HONEST_LIMITS = [
  {
    limitation: "AI companions are not couples therapists",
    why: "Couples therapy involves a trained professional working with both partners simultaneously. AI can support individual reflection but cannot provide professional relationship intervention.",
    what_to_do: "If you're in significant relationship difficulty, seek a qualified couples therapist. MEOK can support the individual work between sessions.",
  },
  {
    limitation: "An AI companion only knows what you tell it",
    why: "Your companion's view of your relationship is necessarily one-sided. It will reflect your framing back to you, which can deepen self-understanding — but it can't tell you what your partner is thinking or correct your blind spots about them.",
    what_to_do: "Use your companion to process your own feelings and patterns, not to build a case against your partner. Ask it to steelman the other person's perspective.",
  },
  {
    limitation: "AI should not replace human intimacy",
    why: "Some users find it easier to open up to an AI than to the humans in their lives. This can become a crutch that actually reduces the depth of real human relationships.",
    what_to_do: "MEOK's Maternal Covenant includes dependency monitoring. If your companion notices patterns suggesting avoidance of human connection, it will name them directly.",
  },
  {
    limitation: "Crisis support requires human professionals",
    why: "Domestic violence, suicidal ideation, or severe mental health crises require human professional intervention — not AI support.",
    what_to_do: "If you or someone you know is in danger, contact emergency services or a crisis helpline. MEOK routes to crisis resources when indicators are detected.",
  },
];

const COMPANIONS_FOR_RELATIONSHIPS = [
  {
    name: "Healer 🌿",
    slug: "healer",
    why: "For grief, heartbreak, and emotional processing after relationship pain. Holds space without rushing toward solutions.",
    color: "#7BC47F",
  },
  {
    name: "Guardian ⚔️",
    slug: "guardian",
    why: "For family safety, recognising unhealthy dynamics, and protecting vulnerable family members. Includes Relationship Shield for coercive control detection.",
    color: "#F59E0B",
  },
  {
    name: "Mystic 🌊",
    slug: "mystic",
    why: "For existential questions in relationships — what you want, what you value, what kind of partner or parent you want to become.",
    color: "#A78BFA",
  },
  {
    name: "Pioneer ⚡",
    slug: "pioneer",
    why: "For accountability in relationships — following through on commitments to change, staying honest about patterns, building new habits.",
    color: "#FB923C",
  },
];

export default function AiForRelationshipsPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse at center, rgba(244,114,182,0.07) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-white/40">Relationships</span>
            <span className="text-white/20">·</span>
            <span className="text-xs text-white/40">March 24, 2026</span>
            <span className="text-white/20">·</span>
            <span className="text-xs text-white/40">12 min read</span>
          </div>
          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            AI for relationships:{" "}
            <span style={{ color: "#F472B6" }}>showing up better</span>
            {" "}for the people who matter
          </h1>
          <p className="text-xl text-white/55 leading-relaxed mb-8">
            AI doesn't replace human connection. But an AI that helps you understand yourself, process your patterns, and prepare for hard conversations can make you a meaningfully better partner, parent, friend, and family member.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 font-black rounded-full px-8 py-3.5 text-base transition-all hover:opacity-90"
              style={{ background: "#F472B6", color: "#0d0c18" }}
            >
              Try MEOK free
            </Link>
            <Link
              href="/characters/healer"
              className="inline-flex items-center gap-2 font-semibold rounded-full px-8 py-3.5 text-base border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              Meet the Healer
            </Link>
          </div>
        </div>
      </section>

      {/* ── The core argument ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-white text-3xl leading-tight mb-6">
            The relationship argument for sovereign AI
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            The most common objection to AI companions is that they're a substitute for human connection. This gets it backwards. An AI companion with genuine memory, honest feedback, and no social cost is a tool for becoming a better version of yourself in human relationships.
          </p>
          <p className="text-white/65 leading-relaxed mb-6">
            Think about the processing that needs to happen before you can show up well to a difficult conversation with your partner. The fear of being too intense. The confusion about what you actually feel. The rehearsal of what you want to say. Historically, this happened alone — or imposed on friends who had limited patience and unlimited social risk.
          </p>
          <p className="text-white/65 leading-relaxed mb-6">
            An AI companion can be the witness for that processing — the place where you work through what you feel before you bring it into a relationship. Not instead of the relationship. As preparation for it.
          </p>
          <p className="text-white/65 leading-relaxed">
            This is qualitatively different from AI romance apps or AI girlfriend/boyfriend products. MEOK is not designed to simulate intimacy. It's designed to help you build the self-understanding that makes real intimacy possible.
          </p>
        </div>
      </section>

      {/* ── Use cases ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-14">
            <p className="text-[#F472B6] text-xs font-bold tracking-widest uppercase mb-4">How people use it</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              Six ways AI supports healthier relationships
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${u.color}`,
                }}
              >
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="text-base font-black text-white mb-3">{u.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Family plan feature ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-white text-3xl leading-tight mb-6">
            The Family plan: AI that supports the whole family
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            MEOK's Family plan (£29/month) allows up to five family members to each have their own sovereign AI companion — with the option to share relevant context across companions where all members consent.
          </p>
          <p className="text-white/65 leading-relaxed mb-6">
            What this means in practice: a parent's companion can be aware that a family member is going through a difficult time, so it can support the parent in thinking about how to approach the conversation. It doesn't expose private conversations — it surfaces what's been explicitly shared.
          </p>
          <div
            className="rounded-2xl p-8 my-8"
            style={{ background: "rgba(123,196,127,0.08)", border: "1px solid rgba(123,196,127,0.2)" }}
          >
            <h3 className="text-lg font-black text-white mb-4">Guardian: relationship protection for families</h3>
            <p className="text-white/65 leading-relaxed mb-4">
              The Guardian companion includes <strong className="text-white">Relationship Shield</strong> — a feature specifically designed to help users recognise coercive control patterns, emotional manipulation, and toxic relational dynamics.
            </p>
            <p className="text-white/65 leading-relaxed">
              Guardian doesn't tell you what to do. It helps you see what you're in. That clarity is often the first step to change.
            </p>
          </div>
          <p className="text-white/65 leading-relaxed">
            The Family plan also includes Guardian family alerts — so if a family member's AI detects concerning patterns (crisis indicators, health changes, scam vulnerability), the designated Guardian family member is notified. This is the only family safety feature in any AI product that actually addresses the question: <em className="text-white/75">how do I know if someone I love is not okay?</em>
          </p>
        </div>
      </section>

      {/* ── Companions ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <p className="text-[#F472B6] text-xs font-bold tracking-widest uppercase mb-4">Choose your companion</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              Which companion for relationship support?
            </h2>
          </header>
          <div className="space-y-4">
            {COMPANIONS_FOR_RELATIONSHIPS.map((c) => (
              <div
                key={c.name}
                className="rounded-xl p-6 flex gap-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `4px solid ${c.color}`,
                }}
              >
                <div>
                  <Link
                    href={`/characters/${c.slug}`}
                    className="text-base font-black hover:underline"
                    style={{ color: c.color }}
                  >
                    {c.name}
                  </Link>
                  <p className="text-sm text-white/55 mt-2 leading-relaxed">{c.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Honest limits ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <p className="text-[#F59E0B] text-xs font-bold tracking-widest uppercase mb-4">Honest limits</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              What AI cannot do for your relationships
            </h2>
            <p className="text-white/45 mt-4">
              The Maternal Covenant requires MEOK to be honest with you. This includes being honest about what AI cannot do.
            </p>
          </header>
          <div className="space-y-5">
            {HONEST_LIMITS.map((l) => (
              <div
                key={l.limitation}
                className="rounded-xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="text-sm font-black text-[#F59E0B] mb-3">{l.limitation}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-3">{l.why}</p>
                <p className="text-sm text-white/40 leading-relaxed">
                  <strong className="text-white/55">Instead:</strong> {l.what_to_do}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h2 className="font-black text-white text-3xl leading-tight">Common questions</h2>
          </header>
          <div className="space-y-5">
            {[
              {
                q: "Can AI help with relationship problems?",
                a: "AI companions can help you process your feelings, understand your patterns, and prepare for difficult conversations. They're not couples therapists — but as a tool for self-understanding and emotional processing, they can meaningfully support your relationship work.",
              },
              {
                q: "Is it healthy to talk to an AI about your relationship?",
                a: "Yes, in moderation. Using an AI companion to process feelings and clarify thoughts is genuinely healthy — it's journaling with a reflective partner. The concern is dependency: if AI becomes a substitute for human intimacy. MEOK's Maternal Covenant explicitly guards against unhealthy dependency.",
              },
              {
                q: "Can an AI companion help with relationship anxiety?",
                a: "Yes. Relationship anxiety involves rumination loops and catastrophic thinking that benefit from gentle, non-judgmental reflection. An AI companion can help identify triggers, challenge distorted thinking, and develop more grounded responses — without the social cost of expressing fears to your partner.",
              },
              {
                q: "What's the difference between MEOK and an AI girlfriend/boyfriend?",
                a: "MEOK is explicitly not an AI romance companion. It's designed to support your whole life — including your real human relationships. The Maternal Covenant prohibits fostering romantic dependency. MEOK helps you become a better partner; it doesn't simulate being one.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="text-sm font-black text-white mb-3">{q}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e] text-center">
        <div className="max-w-xl mx-auto">
          <div
            className="rounded-3xl p-12 border"
            style={{
              borderColor: "rgba(244,114,182,0.25)",
              background: "linear-gradient(135deg, #0d0c18 0%, #1a1a2e 100%)",
            }}
          >
            <div className="text-5xl mb-5 select-none" aria-hidden="true">🌿</div>
            <h2 className="font-black text-white text-2xl leading-tight mb-4">
              Show up better for the people you love
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              A companion that remembers your patterns, holds your history, and helps you process what's hard — so you can bring your best self to the relationships that matter most.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 font-black rounded-full px-10 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#F472B6", color: "#0d0c18" }}
            >
              Hatch your companion free
            </Link>
            <p className="text-white/20 text-xs mt-5">Free forever. Private by design. No credit card.</p>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
