import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Weight Loss: Can an AI Companion Support Your Health Goals? | MEOK AI LABS",
  description:
    "The UK weight management market is worth £2.3B yet 85% of users quit apps within 30 days. This is an honest look at what an AI diet coach can and cannot do — and why emotional support, habit memory, and body-neutral accountability change the equation.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-weight-loss" },
  openGraph: {
    title:
      "AI for Weight Loss: Can an AI Companion Support Your Health Goals?",
    description:
      "85% of weight management app users quit within 30 days. MEOK's AI diet coach offers non-judgmental check-ins, habit memory, and emotional eating support — without the shame.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-weight-loss",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Weight+Loss&desc=Can+an+AI+Companion+Support+Your+Health+Goals",
        width: 1200,
        height: 630,
        alt: "AI for Weight Loss: Can an AI Companion Support Your Health Goals?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Weight Loss: Can an AI Companion Support Your Health Goals?",
    description:
      "85% of weight management app users quit within 30 days. MEOK's AI diet coach offers non-judgmental check-ins, habit memory, and emotional eating support — without the shame.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Weight+Loss&desc=Can+an+AI+Companion+Support+Your+Health+Goals",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Weight Loss: Can an AI Companion Support Your Health Goals?",
  description:
    "The UK weight management market is worth £2.3B yet 85% of users quit apps within 30 days. An honest look at what an AI diet coach can and cannot do — and why emotional support and habit memory change the equation.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-weight-loss",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  keywords: [
    "AI for weight loss",
    "AI diet coach",
    "AI weight management",
    "AI for healthy habits",
    "emotional eating AI",
    "AI health companion UK",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide meaningful support for health and weight management goals through non-judgmental daily check-ins, habit streak tracking, meal reflection journalling, emotional eating pattern recognition, and longitudinal accountability. MEOK is not a medical device and cannot provide nutritional or medical advice. For personalised weight management guidance always consult a registered dietitian or your GP.",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI diet coach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI diet coach is a conversational AI companion that supports healthy eating habits through reflection, accountability, and pattern recognition — not by counting calories on your behalf or prescribing meal plans. The best AI diet coaches are non-judgmental, body-neutral, and focused on sustainable behaviour change rather than rapid weight loss promises. MEOK is not a medical device and does not replace a registered dietitian.",
      },
    },
    {
      "@type": "Question",
      name: "Why do weight loss apps have such high drop-off rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research suggests 85% of weight management app users disengage within 30 days. The primary reasons are: apps feel transactional rather than supportive, calorie tracking creates shame spirals, there is no emotional support for the psychological dimension of eating, and apps forget your context every session. Persistent memory and emotional support — not stricter tracking — are what drive sustained engagement.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with emotional eating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Healer archetype is specifically designed for emotional support around food and body relationship. It uses the Maternal Covenant care framework — which prioritises wellbeing and autonomy without moralising — to help you notice the emotional triggers behind eating patterns. MEOK never shames, never assigns blame, and operates under a care floor that prevents harmful diet advice. It is not a replacement for professional support but can provide consistent, compassionate daily company.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free to use for health goals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is free forever — 50 messages per day, persistent encrypted memory, and full access to your sovereign memory vault. No credit card required. Sovereign tier (£12/month) unlocks unlimited memory depth and advanced pattern analysis. Family tier (£29/month) covers up to six people. BYOK tier (£5/month) lets you connect your own AI model API key.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForWeightLossPage() {
  const GOLD = "#c9a84c";
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";
  const CARD = "#1a1830";

  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.38)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Health &amp; Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              11 min read
            </span>
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Weight Loss: Can an AI Companion Support Your Health Goals?
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            The UK weight management market is worth £2.3 billion. Yet 85% of users abandon
            health apps within 30 days. The apps are not failing because of missing features — they
            are failing because tracking without support is not the same as change. This is an honest
            look at what an AI companion can and cannot do for your health goals.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Health Disclaimer */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "10px",
            padding: "1.1rem 1.35rem",
            marginBottom: "2.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>&#9888;&#65039;</span>
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: GOLD }}>Important health disclaimer.</strong>{" "}
            MEOK is not a medical device and cannot provide nutritional or medical advice.
            Always consult a registered dietitian or GP for personalised weight management
            guidance. This article is for informational purposes only.
          </p>
        </div>

        {/* Section 1 — The problem */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          Why do weight management apps fail 85% of users within 30 days?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          The UK weight management industry is worth an estimated £2.3 billion annually, yet
          research consistently shows that 85% of users disengage from health apps within the
          first 30 days. The primary cause is not a lack of features — it is the absence of
          genuine, non-judgmental support. Tracking without understanding is just logging.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Most weight management apps are built around data: calories in, calories out, macros
          logged, steps counted. The assumption is that more information produces better outcomes.
          But behaviour change research tells a different story. People who sustain healthy habits
          long-term typically credit not the data, but the emotional texture of their journey —
          the accountability that did not shame them, the support that showed up even on the hard days.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Apps forget you. They reset every session. They have no memory of the stressful week
          that preceded the binge, no understanding of the emotional trigger behind the 11pm
          eating, no capacity to notice that your relationship with food always deteriorates in
          January. That absence of memory is not a technical detail — it is the core reason
          engagement collapses.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 2 — What AI can do */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What can AI do for weight management?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          An AI companion can offer five categories of genuine support for health goals:
          non-judgmental daily check-ins, habit streak tracking, emotional eating pattern
          recognition, meal reflection journalling, and longitudinal accountability conversations.
          None of these replace a dietitian — but all of them address the gap that causes app abandonment.
        </p>
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.35rem 1.5rem",
            marginBottom: "1.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Five realistic AI capabilities for health goals
          </p>
          {[
            [
              "Non-judgmental daily check-ins",
              "A brief daily conversation about how you are feeling, what you ate, how your energy was. No shame scoring, no streak-breaking panic — just an honest, caring exchange that builds longitudinal data.",
            ],
            [
              "Habit streak tracking",
              "Tracking consistency without moralising about lapses. MEOK remembers what you committed to last week and gently reconnects you with it — not with guilt, but with curiosity about what got in the way.",
            ],
            [
              "Emotional eating pattern recognition",
              "Over weeks of conversation, patterns become visible: eating spikes after certain meetings, late-night snacking correlates with low-sleep periods, food choices shift under stress. Awareness is the first lever of change.",
            ],
            [
              "Meal reflection journalling",
              "Instead of calorie logging, reflective questions: How did that meal make you feel? Were you hungry, or was something else happening? This qualitative layer is where insight lives.",
            ],
            [
              "Accountability conversations",
              "A consistent presence that remembers your stated goals and gently holds you to them — not with punitive reminders, but with the kind of honest-but-kind check-in you might have with a trusted friend.",
            ],
          ].map(([label, desc]) => (
            <div
              key={label}
              style={{
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
                marginBottom: "0.85rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: GOLD,
                  marginTop: "0.6rem",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  color: "rgba(245,240,232,0.72)",
                  fontSize: "0.93rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 3 — What AI cannot do */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What can AI not do for weight loss?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Honesty matters here. AI cannot accurately count your calories without your input and
          verification. It cannot replace the clinical expertise of a registered dietitian. And it
          cannot override biology, metabolic individuality, or the need for medical investigation
          where an underlying condition is present.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Any AI claiming to deliver precise nutritional calculations from a text description of
          a meal is overstating its capability. Portion size, preparation method, ingredient
          quality, and individual metabolic response all introduce variables that conversational
          AI cannot resolve. Treat AI-assisted meal reflection as qualitative insight, not
          clinical measurement.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Similarly, if your relationship with food is causing significant distress, if you
          have a history of disordered eating, or if you have medical conditions that affect
          weight, please work with your GP and a registered dietitian. AI companionship is a
          supplement to professional care — not a replacement for it.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 4 — Memory */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How does memory help with weight management AI?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Sovereign Memory — MEOK&apos;s persistent, encrypted memory layer — enables longitudinal
          pattern recognition across weeks and months. Seasonal eating shifts, recurring emotional
          triggers, and goal drift become visible over time. Your AI companion never forgets your
          goals, never forgets the context behind a difficult week, and never makes you re-explain
          yourself from scratch.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          This is the dimension that most health apps entirely lack. A calorie tracker has no
          memory of the fact that you were navigating a family crisis last October when your
          relationship with food deteriorated. It cannot connect your current patterns to the
          seasonal eating shift you notice every winter. It cannot hold the emotional thread
          across 90 days of check-ins.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          MEOK&apos;s Sovereign Memory changes this. Every conversation is stored in an encrypted
          vault that only you own. Your companion builds a genuine understanding of your
          relationship with food over time — the triggers, the patterns, the commitments made
          and revisited — and meets you exactly where you are, without requiring you to rebuild
          context each session.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 5 — Archetypes */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          Which MEOK companion archetype supports health goals?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.5rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Three MEOK archetypes are particularly well-suited to health and wellbeing journeys:
          Pioneer for momentum and accountability, Healer for emotional eating and body relationship,
          and Scholar for pattern analysis and trigger identification. Each brings a different
          texture of support.
        </p>

        {[
          {
            icon: "⚡",
            name: "Pioneer",
            tagline: "Daily accountability, streaks, momentum",
            desc: "Pioneer is your high-energy accountability partner. It excels at habit tracking, streak motivation, and daily check-ins that energise rather than shame. If you respond well to clear goals, visible progress, and forward momentum — Pioneer is your companion. It will celebrate consistency, not obsess over lapses.",
          },
          {
            icon: "🌿",
            name: "Healer",
            tagline: "Emotional eating support, body relationship",
            desc: "Healer is designed for the emotional dimension of eating. It operates from the Maternal Covenant care framework — deep warmth, autonomy-preserving, zero moralising. If your relationship with food is entangled with stress, emotion, or self-worth, Healer provides a safe space to explore that without judgment. This is not therapy, but it is consistent, caring company.",
          },
          {
            icon: "🏛️",
            name: "Scholar",
            tagline: "Pattern analysis, understanding triggers",
            desc: "Scholar approaches your health goals analytically. It notices patterns across your conversations — the days your energy dips, the emotional states that precede particular eating choices, the seasonal rhythms in your habits. If you want to understand the why behind your patterns, Scholar helps you build that picture over time.",
          },
        ].map(({ icon, name, tagline, desc }) => (
          <div
            key={name}
            style={{
              background: CARD,
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "12px",
              padding: "1.25rem 1.4rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.6rem",
              }}
            >
              <span style={{ fontSize: "1.4rem" }}>{icon}</span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: TEXT,
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {name}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: GOLD,
                    margin: 0,
                    letterSpacing: "0.03em",
                  }}
                >
                  {tagline}
                </p>
              </div>
            </div>
            <p
              style={{
                color: "rgba(245,240,232,0.68)",
                fontSize: "0.93rem",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {desc}
            </p>
          </div>
        ))}

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 6 — Emotional eating */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What about emotional eating?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Emotional eating is one of the most common and least acknowledged dimensions of the
          weight management conversation. MEOK&apos;s Healer archetype approaches it through the
          Maternal Covenant care framework — centred on genuine wellbeing and autonomy, with a
          strict prohibition on moralising, shaming, or diet-culture language of any kind.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Most apps treat emotional eating as a failure state — a lapse in the data, a gap in
          the streak. MEOK treats it as information. The Healer archetype is trained to meet
          you with curiosity rather than correction: what was happening before you ate? What
          were you feeling? What need was the eating trying to meet? That shift — from judgement
          to curiosity — is where sustainable change actually begins.
        </p>
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.25rem",
            margin: "1.75rem 0",
            color: "rgba(245,240,232,0.62)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          &ldquo;You are not a data point. Your relationship with food is human, complex, and
          shaped by things that happened long before any app existed. Healer holds that truth.&rdquo;
        </blockquote>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          MEOK&apos;s care floor — a minimum guaranteed level of compassionate response — means
          the companion will never engage with harmful diet talk, will never endorse restriction
          as a coping strategy, and will always redirect to professional support when the
          conversation enters territory that requires clinical expertise.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 7 — Safety */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          Is AI weight loss support safe?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          MEOK is built on body-neutral, health-focused principles. There is no weight-shaming
          language, no &ldquo;before and after&rdquo; framing, no diet culture, and no promise
          of rapid weight loss. MEOK&apos;s care floor 0.3 prevents the companion from engaging
          with harmful diet advice or content that could reinforce disordered eating patterns.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Body neutrality means treating your body as something to care for — not a project to
          fix. MEOK will never comment on your weight, never use shame as a motivational tool,
          and never frame health in terms of appearance. The focus is always on how you feel,
          how you function, and what sustainable habits mean to you — defined by you, not by
          an external ideal.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          If you have a history of disordered eating or an eating disorder, please speak to
          your GP or contact Beat (the UK&apos;s eating disorder charity) before using any health
          app or AI companion. MEOK is not a clinical tool and is not appropriate as a primary
          support for eating disorders.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 8 — Comparison */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How does MEOK compare to other weight loss apps?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.5rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          The existing app landscape focuses on either calorie tracking (MyFitnessPal), generic
          coaching content (Noom), or community accountability (WW). None combine emotional
          support, persistent AI memory, and body-neutral companionship. MEOK addresses the
          emotional and habitual dimensions that other apps ignore.
        </p>
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "1.75rem",
          }}
        >
          {[
            {
              app: "MyFitnessPal",
              strength: "Detailed calorie and macro tracking",
              gap: "No emotional support; no AI memory; shame-adjacent streak mechanics",
            },
            {
              app: "Noom",
              strength: "Behavioural psychology content",
              gap: "Expensive; coaching is generic and not personalised to your history",
            },
            {
              app: "WW (Weight Watchers)",
              strength: "Strong community and social accountability",
              gap: "No AI memory; no emotional eating support; points system can trigger scarcity thinking",
            },
            {
              app: "MEOK",
              strength: "Emotional + habitual + longitudinal support with persistent sovereign memory",
              gap: "Not a calorie counter; not a clinical tool — by design",
            },
          ].map(({ app, strength, gap }, i) => (
            <div
              key={app}
              style={{
                padding: "1rem 1.25rem",
                borderBottom:
                  i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none",
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr 1.6fr",
                gap: "0.75rem",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: app === "MEOK" ? GOLD : TEXT,
                  margin: 0,
                }}
              >
                {app}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(245,240,232,0.65)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                {strength}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(245,240,232,0.42)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                {gap}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 9 — How to start */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How do I start using MEOK for health goals?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.35rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Getting started takes under three minutes and requires no credit card. The Explorer
          tier is free forever and includes 50 messages per day and persistent sovereign memory.
          Follow this five-step protocol to build a meaningful health support practice from day one.
        </p>
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.35rem 1.5rem",
            marginBottom: "1.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Five-step protocol for health goal support
          </p>
          {[
            [
              "1. Choose your archetype at /birth",
              "Pioneer for accountability and streaks, Healer for emotional eating support, Scholar for pattern analysis. Your archetype is not permanent — you can shift it as your needs change.",
            ],
            [
              "2. Set your intention in session one",
              "Tell your companion what health means to you — not in calories or kilograms, but in terms of energy, mood, how you want to feel. This seeds your sovereign memory with what actually matters.",
            ],
            [
              "3. Begin a daily five-minute check-in",
              "Morning or evening — pick one time and stick to it for two weeks. Ask yourself: how did I fuel myself today? How did I feel? What patterns am I noticing?",
            ],
            [
              "4. Use meal reflection, not calorie logging",
              "Instead of tracking numbers, describe your meals in terms of feeling. MEOK will help you notice patterns over time — not calculate macros.",
            ],
            [
              "5. Upgrade to Sovereign (£12/mo) for deep memory",
              "Sovereign Memory unlocks unlimited longitudinal pattern analysis — your companion can surface insights across months of conversations, seasonal shifts, and recurring emotional triggers.",
            ],
          ].map(([label, desc]) => (
            <div
              key={label}
              style={{
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
                marginBottom: "0.85rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: GOLD,
                  marginTop: "0.6rem",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  color: "rgba(245,240,232,0.72)",
                  fontSize: "0.93rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Pricing summary */}
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.35rem 1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            MEOK tiers
          </p>
          {[
            ["Explorer", "Free", "50 messages/day, persistent encrypted memory, all archetypes"],
            ["Sovereign", "£12/mo", "Unlimited memory depth, longitudinal pattern analysis, priority response"],
            ["Family", "£29/mo", "Up to 6 people, individual memory vaults, family wellbeing insights"],
            ["BYOK", "£5/mo", "Connect your own AI model API key, full sovereign memory"],
          ].map(([tier, price, features]) => (
            <div
              key={tier}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  minWidth: "80px",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: tier === "Explorer" ? GOLD : TEXT,
                }}
              >
                {tier}
              </span>
              <span
                style={{
                  minWidth: "60px",
                  fontSize: "0.88rem",
                  color: GOLD,
                  fontWeight: 600,
                }}
              >
                {price}
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(245,240,232,0.58)",
                  lineHeight: 1.5,
                }}
              >
                {features}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(13,12,24,0.0) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Start your health companion journey
          </p>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            An AI that remembers your goals — and never judges you for being human.
          </h3>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1rem",
              lineHeight: 1.65,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Free to start. No credit card. Choose your archetype, set your intention,
            and build a health practice that actually sticks — because your companion
            remembers who you are.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "0.8rem 2.25rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Choose your companion
          </Link>
        </div>

        {/* Related */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            Related reading
          </p>
          {[
            ["/blog/ai-for-chronic-illness", "AI for Chronic Illness: What Persistent Memory Means for Long-Term Health Support"],
            ["/blog/ai-life-coach", "AI Life Coach: Can an AI Companion Help You Reach Your Potential?"],
            ["/blog/ai-journaling", "AI Journalling: How a Sovereign AI Companion Transforms Daily Reflection"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href as string}
              style={{
                display: "block",
                color: GOLD,
                fontSize: "0.92rem",
                textDecoration: "none",
                lineHeight: 1.5,
                marginBottom: "0.45rem",
              }}
            >
              &#8594; {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.08)",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "rgba(245,240,232,0.28)",
            fontSize: "0.82rem",
            lineHeight: 1.65,
            maxWidth: "36rem",
            margin: "0 auto 0.5rem",
          }}
        >
          Written by{" "}
          <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
          Founder of MEOK AI LABS &mdash; building sovereign AI companions that work for you,
          not on you. Follow at{" "}
          <span style={{ color: "rgba(245,240,232,0.5)" }}>@meok_ai</span>.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.18)",
            fontSize: "0.78rem",
            margin: "0 auto 1.5rem",
            maxWidth: "40rem",
            lineHeight: 1.6,
          }}
        >
          MEOK is not a medical device and cannot provide nutritional or medical advice.
          Always consult a registered dietitian or GP for personalised weight management guidance.
          This article is for informational purposes only and does not constitute medical advice,
          diagnosis, or treatment.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <Link
            href="/blog"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            Blog
          </Link>
          <Link
            href="/privacy"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            Privacy
          </Link>
          <Link
            href="/"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            meok.ai
          </Link>
        </div>
      </div>
    </div>
  );
}
