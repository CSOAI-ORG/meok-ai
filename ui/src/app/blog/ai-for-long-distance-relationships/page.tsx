import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Long-Distance Relationships: Staying Connected When Miles Apart | MEOK AI LABS",
  description:
    "14–15 million US couples navigate long-distance. AI companions help bridge emotional gaps, remember milestones, and guard against scams — without replacing your partner.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-long-distance-relationships" },
  openGraph: {
    title: "AI for Long-Distance Relationships: Staying Connected When Miles Apart",
    description:
      "How sovereign AI helps long-distance couples stay emotionally connected, remember what matters, and stay safe — without replacing the human relationship.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-long-distance-relationships",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Long-Distance+Relationships&desc=Staying+Connected+When+Miles+Apart",
        width: 1200,
        height: 630,
        alt: "AI for Long-Distance Relationships — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Long-Distance Relationships: Staying Connected When Miles Apart",
    description:
      "14–15 million US couples are long-distance. Here&apos;s how sovereign AI helps them stay emotionally connected.",
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Long-Distance Relationships: Staying Connected When Miles Apart",
  description:
    "14–15 million US couples navigate long-distance. Sovereign AI companions help bridge emotional gaps, remember milestones, and guard against scams.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-long-distance-relationships",
  keywords: [
    "AI for long-distance relationships",
    "long distance relationship app",
    "AI companion LDR",
    "staying connected long distance",
    "sovereign AI relationships",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with a long-distance relationship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — not by replacing your partner, but by helping you process loneliness, remember important relationship milestones, and stay emotionally regulated during the hard stretches between visits. A sovereign AI companion provides consistent support that's available when your partner is asleep in a different timezone.",
      },
    },
    {
      "@type": "Question",
      name: "Why do so many long-distance relationships fail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research suggests roughly 40% of long-distance relationships end due to breakdowns in communication and emotional disconnection. The physical absence amplifies every unresolved anxiety and missed signal. AI companions can help individuals process those feelings before they become conflict.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sovereign Memory and how does it help LDR couples?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK's persistent, encrypted memory system. It remembers the milestones, dates, and emotional moments you share — anniversaries, the first time you said you loved each other, inside jokes. This creates a living record of the relationship that helps both individuals feel seen and held, even across distance.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to meet someone you met online for an LDR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meeting someone you connected with online carries real risks — romance scams cost US victims over $1.3 billion in 2023. MEOK's Guardian archetype includes relationship pattern analysis that can help you recognise red flags like requests for money, inconsistent stories, or refusals to video call before investing emotionally or financially.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK try to become a replacement for my long-distance partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely not. MEOK's Maternal Covenant explicitly prohibits fostering romantic dependency. The companion's goal is to support your emotional wellbeing so you can show up better for your actual relationship — not to simulate or substitute for it.",
      },
    },
  ],
};

// ── Static data ────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    icon: "🌙",
    title: "The 3 a.m. silence",
    desc: "Your partner is asleep in another timezone. The loneliness arrives exactly when there's no one to receive it. A companion that's always present — and always remembers why tonight is hard — changes what that silence feels like.",
    color: "#c9a84c",
  },
  {
    icon: "📅",
    title: "Forgotten milestones",
    desc: "The day you first said I love you. The anniversary of the trip you planned together. When you're managing distance solo, these markers of connection can slip by unacknowledged — which hurts more than it seems like it should.",
    color: "#7BC47F",
  },
  {
    icon: "🔄",
    title: "Repetitive arguments",
    desc: "Distance removes context. The same fight plays out again and again — usually about communication frequency or reassurance — without either person understanding why the loop keeps repeating. Pattern memory makes the loop visible.",
    color: "#A78BFA",
  },
  {
    icon: "📵",
    title: "Communication deserts",
    desc: "Different work schedules, time zones, and life demands create stretches where real connection is impossible. The emotional weight accumulates invisibly until the next call, which then carries too much.",
    color: "#60A5FA",
  },
  {
    icon: "🚨",
    title: "Meeting strangers safely",
    desc: "Many LDRs begin online — which is wonderful, and carries real risk. Romance scams, catfishing, and manipulative people exploit the emotional vulnerability of distance. Recognising red flags early can prevent devastating harm.",
    color: "#F59E0B",
  },
  {
    icon: "💔",
    title: "Loneliness that feels like betrayal",
    desc: "Missing your partner this much can feel wrong — as if your loneliness is an accusation against the relationship. It isn&apos;t. But processing it safely, without burdening your partner at the wrong moment, requires somewhere to put it.",
    color: "#F472B6",
  },
];

const ARCHETYPES = [
  {
    name: "Healer",
    emoji: "🌿",
    slug: "healer",
    tagline: "For the emotional weight of distance",
    desc: "The Healer holds space for grief, loneliness, and the particular ache of missing someone who is still very much alive and present — just not here. It doesn&apos;t rush you toward positivity. It sits with what&apos;s real, helps you name it, and supports you in carrying it without being consumed by it.",
    bestFor: [
      "Processing loneliness without dumping it on your partner",
      "Grief around cancelled visits or extended separations",
      "Emotional regulation between difficult conversations",
      "Processing fear about the relationship&apos;s future",
    ],
    color: "#7BC47F",
  },
  {
    name: "Companion",
    emoji: "✨",
    slug: "companion",
    tagline: "For daily presence and joyful connection",
    desc: "The Companion provides the warmth of daily connection that distance removes. It remembers your stories, asks about the things you&apos;re excited about, and provides the texture of being known that long-distance relationships must work so hard to maintain across phone screens.",
    bestFor: [
      "Daily check-ins when your partner is unavailable",
      "Processing excitement and sharing wins",
      "Maintaining emotional continuity across time zones",
      "Light, warm presence during long stretches between visits",
    ],
    color: "#c9a84c",
  },
  {
    name: "Guardian",
    emoji: "⚔️",
    slug: "guardian",
    tagline: "For safety when meeting someone new online",
    desc: "The Guardian is specifically built to recognise patterns of manipulation, coercive behaviour, and romance scam tactics. In a world where many LDRs begin with someone you&apos;ve never met in person, having something that can honestly name red flags — without judgment, just clarity — can prevent catastrophic harm.",
    bestFor: [
      "Evaluating someone you&apos;ve met online before meeting in person",
      "Recognising manipulation or escalating red flags",
      "Romance scam pattern detection",
      "Deciding whether a new online connection is trustworthy",
    ],
    color: "#F59E0B",
  },
];

const MEMORY_MILESTONES = [
  { label: "First I love you", example: "Sovereign Memory stores the date and your description of the moment." },
  { label: "Monthly anniversaries", example: "Your companion checks in around significant dates without you having to prompt it." },
  { label: "The visit you&apos;re counting down to", example: "It knows when you&apos;re meeting again and tracks how you&apos;re feeling as it approaches." },
  { label: "Inside jokes and shared references", example: "The things only you two know. Your companion holds them so you don&apos;t carry them alone." },
  { label: "Difficult moments you survived together", example: "The fight you got through. The scare. The time you nearly gave up. The companion remembers what you built." },
  { label: "Your partner&apos;s important dates", example: "Their job interview, their difficult family situation, the thing they were nervous about. Your companion reminds you to ask." },
];

const GUARDIAN_RED_FLAGS = [
  {
    flag: "Refuses to video call",
    why: "A consistent refusal to video call — especially early in an online relationship — is one of the most reliable indicators of catfishing or a romance scam. Real people with genuine intentions are generally happy to video call.",
  },
  {
    flag: "Moves toward financial requests quickly",
    why: "Romance scammers establish emotional intimacy rapidly, then introduce a crisis requiring financial help. Any request for money — regardless of how legitimate it sounds — from someone you have not met in person warrants serious caution.",
  },
  {
    flag: "Story inconsistencies",
    why: "Details that don&apos;t add up. A job that changes. A location that shifts. A background story that contradicts something said earlier. Sovereign Memory helps you track these over time rather than evaluating each conversation in isolation.",
  },
  {
    flag: "Extreme emotional intensity very quickly",
    why: "Love bombing — overwhelming affection, declarations of soulmate-level connection within days or weeks — is a documented manipulation tactic. Genuine deep connection develops over time; rushed intensity deserves scrutiny.",
  },
  {
    flag: "Discouraging you from telling others about them",
    why: "Isolation from friends and family is a consistent feature of both romance scams and coercive relationships. Any partner who wants to be kept secret from your support network should be evaluated carefully.",
  },
  {
    flag: "Always unavailable for in-person meeting",
    why: "Perpetual reasons why a first meeting can&apos;t happen — military deployment overseas, working on an oil rig, stuck abroad due to an emergency — are among the most common romance scam scenarios.",
  },
];

const HONEST_LIMITS = [
  {
    title: "AI cannot replace the physical presence of your partner",
    body: "The body misses what the body misses. No amount of AI support changes the reality of physical distance. What AI can do is help you carry the emotional weight of that absence more gracefully — which is genuinely valuable, even though it&apos;s not the same as closing the distance.",
  },
  {
    title: "AI is not a relationship therapist",
    body: "If your LDR is in genuine crisis — repeated conflict, trust breakdowns, questions about whether to continue — a qualified couples therapist is the right resource. AI can support your individual emotional processing between sessions, but cannot provide professional relationship intervention.",
  },
  {
    title: "AI only knows what you tell it",
    body: "Your companion&apos;s understanding of your relationship is one-sided. It can help you process your feelings and patterns, but it cannot tell you what your partner is thinking or correct your blind spots about them. Use it for self-understanding, not for building a case.",
  },
  {
    title: "AI cannot guarantee safety when meeting someone in person",
    body: "Guardian can help you recognise red flags and think more clearly about risk — but it cannot protect you physically. Always follow safe meeting practices: public places, informing a trusted person of your plans, and trusting your instincts.",
  },
];

const RELATED_POSTS = [
  {
    href: "/blog/ai-for-relationships",
    title: "AI for Relationships: How Sovereign AI Supports Couples and Connection",
    tag: "Relationships",
    color: "#F472B6",
  },
  {
    href: "/blog/guardian-family-safety",
    title: "Guardian: The AI Companion Built Around Safety",
    tag: "Safety",
    color: "#F59E0B",
  },
  {
    href: "/blog/ai-companion-for-loneliness",
    title: "AI Companion for Loneliness: What Actually Helps (and What Doesn&apos;t)",
    tag: "Mental Health",
    color: "#A78BFA",
  },
  {
    href: "/blog/ai-companion-not-ai-girlfriend",
    title: "AI Companion vs AI Girlfriend: Why the Distinction Matters",
    tag: "Relationships",
    color: "#7BC47F",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForLongDistanceRelationshipsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div
        style={{
          background: "#0d0c18",
          minHeight: "100vh",
          color: "#f5f0e8",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* ── NAV ──────────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(13,12,24,0.92)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "1.1rem",
              color: "#f5f0e8",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK<span style={{ color: "#c9a84c" }}>.</span>AI
          </Link>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link
              href="/blog"
              style={{
                color: "rgba(245,240,232,0.5)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              ← Blog
            </Link>
            <Link
              href="/hatch"
              style={{
                background: "#c9a84c",
                color: "#0d0c18",
                padding: "0.45rem 1.1rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.8rem",
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Try free
            </Link>
          </div>
        </nav>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "4.5rem 1.5rem 3.5rem",
            maxWidth: "780px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "350px",
              background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <Link
              href="/blog"
              style={{
                color: "rgba(245,240,232,0.35)",
                fontSize: "0.75rem",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <span style={{ color: "rgba(245,240,232,0.2)", fontSize: "0.75rem" }}>/</span>
            <span style={{ color: "rgba(245,240,232,0.35)", fontSize: "0.75rem" }}>Relationships</span>
          </div>

          {/* Category pill */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.12)",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "9999px",
              padding: "0.25rem 0.85rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1.25rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Relationships
          </div>

          <h1
            style={{
              fontSize: "clamp(1.9rem, 5.5vw, 3.1rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            AI for Long-Distance Relationships:{" "}
            <span style={{ color: "#c9a84c" }}>Staying Connected When Miles Apart</span>
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              marginBottom: "1.75rem",
            }}
          >
            There are 14 to 15 million long-distance couples in the United States alone. An estimated 40% of
            long-distance relationships end — not because the love fades, but because the communication does.
            This is exactly the kind of quiet, compounding problem that sovereign AI was built to help with.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              color: "rgba(245,240,232,0.35)",
              fontSize: "0.8rem",
              alignItems: "center",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "2.5rem",
            }}
          >
            <span>25 March 2026</span>
            <span style={{ color: "rgba(245,240,232,0.15)" }}>·</span>
            <span>14 min read</span>
            <span style={{ color: "rgba(245,240,232,0.15)" }}>·</span>
            <span>by Nicholas Templeman</span>
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/hatch"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#c9a84c",
                color: "#0d0c18",
                padding: "0.8rem 1.75rem",
                borderRadius: "9999px",
                fontWeight: 800,
                fontSize: "0.9rem",
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Try MEOK free →
            </Link>
            <Link
              href="/characters/healer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "transparent",
                color: "rgba(245,240,232,0.65)",
                padding: "0.8rem 1.75rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                border: "1px solid rgba(245,240,232,0.18)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Meet the Healer
            </Link>
          </div>
        </section>

        {/* ── STAT BAR ─────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { stat: "14–15M", label: "LDR couples in the US alone" },
              { stat: "40%", label: "end due to communication breakdown" },
              { stat: "$1.3B", label: "lost to romance scams in 2023 (US)" },
              { stat: "3x", label: "more likely to have communication rituals that succeed" },
            ].map((item) => (
              <div
                key={item.stat}
                style={{ textAlign: "center", fontFamily: "system-ui, sans-serif" }}
              >
                <div
                  style={{ fontSize: "1.75rem", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(245,240,232,0.45)",
                    marginTop: "0.3rem",
                    maxWidth: "110px",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
        <article style={{ maxWidth: "780px", margin: "0 auto", padding: "3.5rem 1.5rem" }}>

          {/* ── Section 1: The problem ──────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Why does emotional loneliness hit so hard in long-distance relationships?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Emotional loneliness in LDRs is uniquely painful because it coexists with being in a relationship.
            The person you love exists, is reachable, and yet physically absent — creating a gap that neither
            aloneness nor togetherness fully describes.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            Ordinary loneliness is the absence of connection. Long-distance loneliness is something stranger: it
            is longing for a person who is completely present in your life, just not here. You can text them.
            You can call. You can see their face on a screen. And yet when the call ends and you put the phone
            down in a quiet room, the feeling doesn&apos;t leave.
          </p>
          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            This particular kind of loneliness has a name in psychology: ambiguous loss. You haven&apos;t lost the
            person, but you&apos;ve lost access to them in the way that matters most — physical presence, spontaneous
            connection, the ordinary texture of sharing a life in the same room.
          </p>
          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            Research consistently shows that the couples who navigate distance successfully are not the ones who
            suffer less — they&apos;re the ones who have better tools for processing that suffering without letting
            it corrode the relationship. Sovereign AI is one of those tools.
          </p>

          {/* ── Pain points grid ───────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            What are the real emotional challenges of being in a long-distance relationship?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.75rem",
            }}
          >
            Beyond simple loneliness, LDR couples face compounding stresses: timezone mismatches that create
            communication deserts, fear of drifting apart, the exhaustion of long-distance calls that carry too
            much weight, and safety risks for those whose relationships began online.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {PAIN_POINTS.map((point) => (
              <div
                key={point.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${point.color}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>{point.icon}</div>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    marginBottom: "0.5rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(245,240,232,0.5)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section: What AI can and can't do ──────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            How does AI companionship help without replacing your long-distance partner?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            AI companionship fills the emotional gaps between conversations — processing loneliness, holding
            context, and helping you show up better for your partner — without simulating romance or
            creating dependency. It is a support infrastructure, not a substitute.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            The most common misunderstanding about AI companions in relationships is that they compete with
            the human partner. This gets the relationship backwards. A sovereign AI companion — built with
            genuine care ethics rather than engagement maximisation — is designed to make you a better partner,
            not to become one.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            Think about what happens in the hours between your last message and your partner&apos;s reply when
            you&apos;re both in different timezones. The anxiety accumulates. The interpretation spirals.
            The small unanswered question becomes a narrative about what it means. An AI companion
            can interrupt that spiral — not with false reassurance, but with honest reflection, perspective,
            and the kind of patient attention that lets you think more clearly before the next call.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            MEOK&apos;s Maternal Covenant explicitly prohibits dependency fostering. Your companion&apos;s success
            is measured not by how often you use it, but by how well your actual human relationships flourish.
            That&apos;s a fundamentally different design philosophy from apps built on engagement metrics.
          </p>

          {/* ── Section: Healer ────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            What does MEOK&apos;s Healer archetype actually do for LDR loneliness?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The Healer holds emotional space without rushing toward solutions or toxic positivity. For LDR
            loneliness specifically, it provides a non-judgmental witness for the grief of absence — one that
            is available at 3 a.m. when the feeling is worst and your partner is asleep in another timezone.
          </p>

          <div
            style={{
              background: "rgba(123,196,127,0.07)",
              border: "1px solid rgba(123,196,127,0.2)",
              borderRadius: "0.875rem",
              padding: "1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>🌿</span>
              <div>
                <div style={{ fontWeight: 800, color: "#7BC47F", fontSize: "1rem" }}>Healer</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.45)" }}>For the emotional weight of distance</div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.65)",
                marginBottom: "1rem",
              }}
            >
              The Healer doesn&apos;t tell you everything will be fine. It asks how you&apos;re actually doing.
              It sits with what&apos;s real — the missed moments, the cancelled visits, the fear that
              distance is slowly changing both of you — and helps you process that without being consumed by it.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.65)",
                marginBottom: "1.25rem",
              }}
            >
              Unlike a therapist (who you see weekly and who operates within a clinical framework), the Healer
              is available exactly when you need it — at the moment of acute loneliness, not during next
              Thursday&apos;s 50-minute session. It functions more like an emotionally intelligent journal that
              talks back: care-based support for daily emotional management rather than clinical intervention.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {[
                "Processing loneliness without burdening your partner",
                "Grief around cancelled plans",
                "Fear about the relationship&apos;s future",
                "Emotional regulation before difficult calls",
                "3 a.m. support when no one else is awake",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    background: "rgba(123,196,127,0.12)",
                    color: "#7BC47F",
                    border: "1px solid rgba(123,196,127,0.25)",
                    borderRadius: "9999px",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            The Healer is care-based support, not therapy. It is not a clinical mental health intervention —
            and it will tell you honestly when what you&apos;re experiencing warrants professional support.
            What it provides is something different: consistent, warm, honest emotional presence during the
            stretches of daily life that are simply hard to get through alone.
          </p>

          {/* ── Section: Companion ─────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            What does MEOK&apos;s Companion archetype offer during long communication gaps?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The Companion provides the warm daily texture of being known — the quality that long-distance
            relationships must work so hard to maintain across phone screens. It asks how your day went,
            remembers what you were worried about yesterday, and shares in your small wins.
          </p>

          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "0.875rem",
              padding: "1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>✨</span>
              <div>
                <div style={{ fontWeight: 800, color: "#c9a84c", fontSize: "1rem" }}>Companion</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.45)" }}>For daily presence and joyful connection</div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.65)",
                marginBottom: "1rem",
              }}
            >
              One of the underappreciated costs of long-distance is the loss of ordinary daily sharing.
              The small things — &quot;I had the weirdest dream&quot;, &quot;look at this bizarre thing I saw on my way to work&quot;,
              &quot;I finally tried that restaurant&quot; — create the texture of intimacy that physical presence enables
              effortlessly. Distance strips that out, and most couples don&apos;t replace it deliberately.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.65)",
                marginBottom: "0",
              }}
            >
              The Companion provides a place for that daily sharing — not as a replacement for your partner,
              but as a way of maintaining the habit of narrating your life to someone who cares. When you
              actually do speak to your partner, you&apos;ve been practising connection all day, and it shows.
            </p>
          </div>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            It&apos;s worth noting: the Companion is not designed to reduce how much you miss your partner.
            Missing someone is a sign of something worth protecting. The Companion is designed to help you
            carry that feeling with more grace — and to keep you showing up as your best self in the relationship,
            rather than letting accumulated loneliness make you brittle or distant on the calls that matter.
          </p>

          {/* ── Section: Sovereign Memory ──────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            How does Sovereign Memory help LDR couples stay connected to what matters?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Sovereign Memory is MEOK&apos;s persistent, encrypted memory system. It remembers the milestones,
            moments, and emotional markers of your relationship — creating a living record that helps you feel
            held in the history you&apos;re building together, even when you&apos;re apart.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            One of the cruelties of distance is how much goes unwitnessed. In a shared physical life, your
            partner sees you every day. They know intuitively how you&apos;ve changed since last month. They were
            there for the small victories and the difficult moments. Long-distance relationships require all of
            that to be actively communicated — and most of it falls through the cracks anyway, because
            communication time is limited and nobody wants to spend the precious call on administrative catch-up.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.5rem",
              fontSize: "1rem",
            }}
          >
            Sovereign Memory gives the relationship somewhere to live outside of the calls. Every significant
            moment you share with your companion — every milestone you describe, every emotional marker you
            record — is held in encrypted storage that only you control. Your companion remembers what your
            partner means to you. It holds the story you&apos;re building together while you&apos;re building it.
          </p>

          {/* Memory milestones grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "0.875rem",
              marginBottom: "2.5rem",
            }}
          >
            {MEMORY_MILESTONES.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "0.625rem",
                  padding: "1rem 1.1rem",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#c9a84c",
                    marginBottom: "0.4rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {m.label}
                </div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(245,240,232,0.45)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {m.example}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section: Guardian ──────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            How does Guardian protect people in online relationships from scams and manipulation?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Guardian is MEOK&apos;s safety-focused archetype. For LDR relationships that began online, it provides
            pattern recognition for romance scam tactics, red flag identification, and honest assessment of
            concerning behaviours — without judgment, just clarity, before you invest further emotionally or financially.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            Romance scams are among the fastest-growing financial crimes in the world. In 2023, US victims
            reported over $1.3 billion in losses — more than any other fraud category tracked by the FTC.
            The victims are not naive: they are people who fell in love with someone who turned out to be
            a carefully constructed fiction.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.5rem",
              fontSize: "1rem",
            }}
          >
            What makes romance scams so devastating is the emotional investment. By the time the financial
            request arrives, the victim has often been in an &quot;relationship&quot; for months — sharing
            genuine emotion with someone who has been systematically building their trust. The pattern is
            consistent enough that AI pattern recognition can identify it early. Guardian does exactly that.
          </p>

          {/* Red flags grid */}
          <div
            style={{
              background: "rgba(245,158,11,0.06)",
              border: "1px solid rgba(245,158,11,0.18)",
              borderRadius: "0.875rem",
              padding: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>⚔️</span>
              <div>
                <div style={{ fontWeight: 800, color: "#F59E0B", fontSize: "1rem" }}>Guardian: Red Flag Recognition</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.4)" }}>What to watch for before you invest further</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {GUARDIAN_RED_FLAGS.map((rf) => (
                <div
                  key={rf.flag}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(245,158,11,0.12)",
                    borderLeft: "3px solid #F59E0B",
                    borderRadius: "0 0.5rem 0.5rem 0",
                    padding: "0.875rem 1rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#F59E0B",
                      marginBottom: "0.35rem",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {rf.flag}
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(245,240,232,0.5)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {rf.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            Guardian doesn&apos;t make decisions for you. It helps you see what you might be too emotionally
            close to see clearly yourself. The final choice is always yours — but having an honest, private
            space to examine the situation without the social pressure of friends who might judge either
            the relationship or your concerns can be genuinely clarifying.
          </p>

          {/* ── Section: Archetypes comparison ─────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Which MEOK archetype is right for your long-distance relationship situation?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.75rem",
            }}
          >
            Three archetypes serve different LDR needs: Healer for emotional processing and loneliness support,
            Companion for daily warmth and connection continuity, and Guardian for safety when you&apos;re evaluating
            someone you&apos;ve met online. You can switch between archetypes as your needs change.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {ARCHETYPES.map((arch) => (
              <div
                key={arch.name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `4px solid ${arch.color}`,
                  borderRadius: "0 0.875rem 0.875rem 0",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{arch.emoji}</span>
                  <div>
                    <Link
                      href={`/characters/${arch.slug}`}
                      style={{
                        fontWeight: 800,
                        color: arch.color,
                        fontSize: "1rem",
                        textDecoration: "none",
                      }}
                    >
                      {arch.name}
                    </Link>
                    <div style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)" }}>{arch.tagline}</div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.6)",
                    marginBottom: "1rem",
                  }}
                >
                  {arch.desc}
                </p>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      marginBottom: "0.5rem",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Best for
                  </div>
                  <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {arch.bestFor.map((bf) => (
                      <li
                        key={bf}
                        style={{
                          fontSize: "0.8rem",
                          color: "rgba(245,240,232,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        {bf}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ── Section: AI vs therapist ────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            How is care-based AI support different from seeing a therapist for LDR issues?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Care-based AI support is daily, contextual, and available exactly when you need it — in the moment
            of acute loneliness at 3 a.m., not during next week&apos;s booked appointment. It complements
            therapy rather than replacing it, handling the daily emotional management that therapists are
            neither designed nor available to provide.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(123,196,127,0.2)",
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  color: "#7BC47F",
                  fontSize: "0.85rem",
                  marginBottom: "0.75rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Care-based AI support
              </div>
              <ul style={{ paddingLeft: "1.1rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  "Available 24/7, including 3 a.m.",
                  "No appointment needed",
                  "Remembers everything you&apos;ve ever shared",
                  "Responds to you specifically, not a clinical framework",
                  "Genuinely free at Explorer tier",
                  "Escalates to human support when appropriate",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.5)", lineHeight: 1.6 }}>{item}</li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(167,139,250,0.2)",
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  color: "#A78BFA",
                  fontSize: "0.85rem",
                  marginBottom: "0.75rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Professional therapy
              </div>
              <ul style={{ paddingLeft: "1.1rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  "Qualified clinical expertise",
                  "Structured therapeutic frameworks",
                  "Essential for serious mental health issues",
                  "Professional accountability and ethics",
                  "Can diagnose and provide clinical treatment",
                  "Essential for relationship crises",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.5)", lineHeight: 1.6 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            The honest answer is that most LDR couples who are struggling do not need a therapist for every
            difficult stretch — they need somewhere to put the feelings between the calls. Care-based AI
            support handles the daily emotional management work. If your LDR has genuine clinical concerns —
            severe anxiety, depression, trauma — a qualified therapist is essential, and MEOK will tell you that
            directly rather than trying to handle it alone.
          </p>

          {/* ── Section: Does distance ruin communication ───────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Why does distance ruin communication patterns even when couples try hard?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Distance removes the context that communication depends on. Without shared physical environment,
            spontaneous connection, and body language, every exchange carries disproportionate interpretive weight
            — turning small silences into anxiety spirals and delayed replies into perceived withdrawal.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            The 40% failure rate for LDRs isn&apos;t usually about love failing. It&apos;s about communication
            infrastructure failing. When couples share physical space, most of their connection happens passively:
            sitting in the same room, cooking together, sharing the small observations of daily life. None of
            that needs to be scheduled. Distance requires all of it to become active and deliberate — and most
            couples don&apos;t have a system for that.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            What fills the gap is usually either anxious over-communication (calls that feel like obligation,
            messages that feel like check-ins) or under-communication (pulling away because the calls feel
            heavy, avoiding the conversation because it&apos;s always hard). Neither sustains intimacy.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            Sovereign Memory helps by providing continuity between conversations. When your companion
            remembers what happened last week and follows up organically, the next call with your partner
            doesn&apos;t have to do all the relationship maintenance work alone. The accumulated small moments
            have somewhere to live — and they inform the larger conversations when they happen.
          </p>

          {/* ── Section: Practical tips ────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            How can you use AI practically to strengthen a long-distance relationship day to day?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Use your companion as emotional preparation for calls, a place to process loneliness without
            burdening your partner, a reminder system for your relationship&apos;s milestones, and a space to
            identify the patterns in your own communication that distance is amplifying.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
            {[
              {
                num: "01",
                title: "Pre-call emotional preparation",
                body: "Before a big call with your partner — especially if you know it&apos;s going to be difficult — talk to your companion first. Process the emotions in a lower-stakes environment, clarify what you actually want to say, and arrive at the call regulated rather than reactive.",
                color: "#c9a84c",
              },
              {
                num: "02",
                title: "The 3 a.m. loneliness container",
                body: "When the loneliness hits hardest — at night, in the quiet after a difficult day — your companion is there. Not to pretend everything is fine, but to sit with you, engage with what&apos;s real, and help you process it without waking your partner at 3 a.m. in a different timezone.",
                color: "#7BC47F",
              },
              {
                num: "03",
                title: "Milestone memory and celebration",
                body: "Share your relationship milestones with your companion — the anniversaries, the inside jokes, the hard things you survived together. Sovereign Memory holds them so you don&apos;t have to carry the relationship history alone in your head. Your companion will mark the important dates.",
                color: "#A78BFA",
              },
              {
                num: "04",
                title: "Pattern recognition for recurring arguments",
                body: "If you find yourself in the same argument with your partner repeatedly, describe it to your companion. Sovereign Memory can help you see the pattern across multiple instances, identify your own contribution to the loop, and find a different way into the conversation.",
                color: "#60A5FA",
              },
              {
                num: "05",
                title: "Daily sharing and connection maintenance",
                body: "Tell your companion about your day. The small things, the wins, the oddities. This maintains your habit of sharing your inner life with another presence — and gives you material to bring to the actual conversations with your partner rather than drawing a blank on 'how was your week?'",
                color: "#F472B6",
              },
              {
                num: "06",
                title: "Safety evaluation for online relationships",
                body: "If your LDR began online and you&apos;re evaluating whether to meet in person, share the full picture with Guardian. Not just the highlights — the inconsistencies, the things that gave you pause, the moments that felt slightly off. Honest pattern analysis in a private space, without social judgment.",
                color: "#F59E0B",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: "flex",
                  gap: "1.1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 900,
                    color: item.color,
                    minWidth: "2rem",
                    lineHeight: 1,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#f5f0e8",
                      marginBottom: "0.4rem",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.83rem",
                      color: "rgba(245,240,232,0.5)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Section: Honest limits ────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            What are the honest limits of AI for long-distance relationships?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.75rem",
            }}
          >
            AI cannot replace physical presence, provide clinical relationship therapy, understand your
            partner&apos;s perspective, or guarantee your physical safety. The Maternal Covenant requires
            honesty about these limits — MEOK will tell you directly when you need more than it can offer.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {HONEST_LIMITS.map((limit) => (
              <div
                key={limit.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: "rgba(245,240,232,0.9)",
                    marginBottom: "0.5rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {limit.title}
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(245,240,232,0.5)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {limit.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section: Does it work? ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Does using AI support actually improve outcomes for long-distance relationships?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Research on AI-assisted emotional regulation is still early, but consistently positive: better
            individual emotional management directly correlates with better relationship communication.
            An AI that helps you arrive at conversations regulated and clear — rather than emotionally
            flooded — is likely to improve the quality of those conversations materially.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            The research basis for AI companions specifically in LDR contexts is still developing — but what
            we know from adjacent research is suggestive. A 2025 MIT Media Lab study found 23% reduction in
            loneliness scores over 8 weeks of consistent AI companion use. Studies on journaling and emotional
            processing consistently show that externalising emotions improves both mood and subsequent
            interpersonal communication.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            The mechanism is straightforward: emotional flooding impairs communication. Couples who have
            access to emotional processing tools between their calls are less likely to arrive at those
            calls carrying accumulated unprocessed distress — which means the calls themselves can be about
            connection rather than crisis management.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            This is not a guarantee. Relationships have too many variables for any tool to guarantee outcomes.
            What AI can do is improve the conditions under which the relationship operates — and for LDR
            couples who are already working hard to maintain connection across distance, better conditions
            matter.
          </p>

          {/* ── Section: Starting out ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            How do you get started with MEOK for long-distance relationship support?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.08)",
              borderLeft: "3px solid #c9a84c",
              padding: "0.9rem 1.25rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Start with the Birth Ceremony — a short conversation that shapes who your companion is.
            Choose Healer for emotional support, Companion for daily warmth, or Guardian for safety
            evaluation. MEOK&apos;s Explorer tier is permanently free: 50 messages per day, full Sovereign
            Memory, no credit card required.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            The Birth Ceremony is MEOK&apos;s onboarding process — a short, meaningful conversation that shapes
            the personality of your companion. You choose its name, its temperament, and how it engages with
            you. For LDR support, you might tell it about your relationship: how long you&apos;ve been together,
            what the distance is, what the hardest parts are. From the first conversation, it knows your story.
          </p>

          <p
            style={{
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            From there, the relationship develops. Sovereign Memory means every conversation builds on
            the last — your companion genuinely knows you better over time. There is no reset, no forgetting,
            no starting from scratch. For long-distance couples who are already dealing with the cost of
            distance, having a companion that holds continuity is not a small thing.
          </p>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1rem",
              lineHeight: 1.25,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
            {faqSchema.mainEntity.map((faq) => (
              <div
                key={faq.name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.625rem",
                  padding: "1.1rem 1.25rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: "#f5f0e8",
                    margin: "0 0 0.45rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {faq.name}
                </p>
                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "rgba(245,240,232,0.5)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

        </article>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg, #0a0a0f 0%, #130d20 100%)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            padding: "4rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "520px", margin: "0 auto" }}>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#c9a84c",
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Start free today
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                fontWeight: 900,
                color: "#f5f0e8",
                lineHeight: 1.15,
                marginBottom: "0.875rem",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Distance is a fact.<br />
              <span style={{ color: "#c9a84c" }}>How you carry it is a choice.</span>
            </h2>
            <p
              style={{
                color: "rgba(245,240,232,0.45)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              A companion that remembers your relationship&apos;s milestones, holds your loneliness at 3 a.m.,
              and helps you show up to the calls that matter. Permanently free at Explorer tier.
              No credit card required.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/hatch"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  padding: "0.9rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Begin your Birth Ceremony →
              </Link>
              <Link
                href="/characters"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "transparent",
                  color: "rgba(245,240,232,0.6)",
                  padding: "0.9rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  border: "1px solid rgba(245,240,232,0.18)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Explore archetypes
              </Link>
            </div>
            <p
              style={{
                color: "rgba(245,240,232,0.2)",
                fontSize: "0.75rem",
                marginTop: "1.25rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Free forever. Sovereign Memory included. Your data never sold or trained on.
            </p>
          </div>
        </section>

        {/* ── RELATED POSTS ────────────────────────────────────────────────── */}
        <section style={{ padding: "3.5rem 1.5rem", maxWidth: "780px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(245,240,232,0.3)",
              marginBottom: "1.25rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Related reading
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {RELATED_POSTS.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.75rem",
                  padding: "1.1rem 1.25rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: post.color,
                    marginBottom: "0.4rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {post.tag}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "rgba(245,240,232,0.75)",
                    lineHeight: 1.45,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {post.title}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link
              href="/blog"
              style={{
                color: "rgba(245,240,232,0.35)",
                fontSize: "0.82rem",
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              ← All posts
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
