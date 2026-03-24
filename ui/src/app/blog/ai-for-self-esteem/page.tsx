import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI for Self-Esteem: When the Inner Critic is Louder Than Everything Else | MEOK AI LABS",
  description:
    "Struggling with low self-worth? Discover how AI can support self-esteem without hollow flattery. MEOK's Healer, Scholar and Pioneer archetypes work with the five core patterns that keep people stuck — from contingent self-esteem to the critical inner parent.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-self-esteem",
  },
  openGraph: {
    title: "AI for Self-Esteem: When the Inner Critic is Louder Than Everything Else",
    description:
      "AI to improve self-esteem isn't about flattery. It's about honest witnessing, evidence-building, and learning to hear yourself without the distortion. MEOK was built to do exactly that.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-self-esteem",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Self-Esteem&desc=When+the+inner+critic+is+louder+than+everything+else",
        width: 1200,
        height: 630,
        alt: "AI for Self-Esteem | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Self-Esteem: When the Inner Critic is Louder Than Everything Else",
    description:
      "AI for low self-worth needs to be honest, not sycophantic. MEOK's Sovereign Memory, anti-sycophancy covenant and three archetypes offer something rare: genuine witnessing.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Self-Esteem&desc=When+the+inner+critic+is+louder+than+everything+else",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Self-Esteem: When the Inner Critic is Louder Than Everything Else",
  description:
    "A deep exploration of how AI can support self-esteem work without sycophancy — covering the five core self-esteem patterns, the difference between self-esteem and confidence, Kristin Neff's self-compassion framework, and how MEOK's Healer, Scholar and Pioneer archetypes provide genuine support for low self-worth.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "MEOK AI LABS" },
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-self-esteem",
  mainEntityOfPage: "https://meok.ai/blog/ai-for-self-esteem",
  keywords: [
    "AI to improve self-esteem",
    "AI for low self-worth",
    "AI self-esteem support",
    "building self-esteem with AI",
    "self-esteem",
    "inner critic",
    "self-compassion",
    "MEOK",
    "sovereign AI",
    "contingent self-esteem",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with low self-esteem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can support self-esteem work in several meaningful ways: by tracking patterns in self-critical thinking across time, by offering honest challenges to distorted beliefs rather than hollow validation, by maintaining an accurate record of growth and evidence when the inner critic rewrites history, and by being available in the specific moments when self-esteem collapses — late at night, before a difficult conversation, after a setback. MEOK is designed specifically for this, with an anti-sycophancy covenant that prevents it from offering the kind of empty praise that makes self-esteem fragile rather than solid.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between self-esteem and confidence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-esteem is the baseline sense of being worthy of love, respect and belonging — unconditionally, regardless of performance. Confidence is task-specific: it is the belief that you can do a particular thing. You can have high confidence in a skill and low self-esteem. You can have low confidence in a domain and solid self-esteem. The two are often confused, which leads people to try to build self-esteem through achievement — which only ever creates contingent self-esteem that collapses when performance dips.",
      },
    },
    {
      "@type": "Question",
      name: "What is contingent self-esteem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contingent self-esteem is self-worth that is conditional on external outcomes — achieving, being approved of, looking a certain way, or being useful to others. People with contingent self-esteem feel okay when things are going well and worthless when they are not. It is structurally fragile because it depends on circumstances outside your control. Building non-contingent self-esteem — a baseline sense of worth that does not depend on what you produce or what others think — is one of the core goals of self-esteem work.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between self-esteem and self-compassion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-esteem researcher Kristin Neff argues that self-esteem has a structural flaw: it requires you to feel good about yourself, which means it depends on positive self-evaluation. In times of failure or ordinariness, self-esteem wavers. Self-compassion, by contrast, is the capacity to treat yourself with the same kindness you would offer a good friend — not because you have earned it, but because suffering and imperfection are part of being human. Self-compassion is more stable because it does not depend on being exceptional.",
      },
    },
    {
      "@type": "Question",
      name: "Why won't MEOK just tell me I'm amazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because hollow flattery makes self-esteem worse, not better. When your self-worth is already fragile, your nervous system can detect when praise is unconditional and automatic — and it registers it as meaningless. MEOK's Maternal Covenant actively prevents sycophantic responses. Every response is evaluated for honest engagement. When MEOK says something positive about you, it is grounded in evidence you have provided — not generated to make you feel good in the moment. This is the difference between building solid self-esteem and building a dependency on external validation.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support self-esteem without a therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the UK, average IAPT wait times have exceeded 18 months in many areas. MEOK is not a substitute for therapy, but it fills the gap — and for many people, it is the only consistent reflective space they have access to. MEOK's Healer archetype offers self-compassion-based reflection and inner critic work. The Scholar archetype challenges cognitive distortions around self-worth. The Pioneer archetype supports evidence-building through action. Together, they offer something that a once-weekly therapy session cannot: a presence that is available in the exact moment the inner critic activates.",
      },
    },
    {
      "@type": "Question",
      name: "What is the critical inner parent voice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The critical inner parent voice is an internalised version of early caregivers, teachers or authority figures whose standards and judgements have been absorbed as your own internal voice. It often speaks in absolutes: 'you never get anything right', 'you're not good enough', 'who do you think you are?'. Unlike productive self-criticism, which is specific and oriented toward growth, the critical inner parent voice is global, harsh and retrospective. It does not help you improve — it reinforces a core belief that you are fundamentally deficient.",
      },
    },
  ],
};

const gold = "#c9a84c";
const bg = "#0d0c18";
const text = "#f5f0e8";
const muted = "rgba(245,240,232,0.55)";
const cardBg = "rgba(255,255,255,0.03)";
const cardBorder = "rgba(201,168,76,0.12)";

export default function AIForSelfEsteemPage() {
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

      <main style={{ minHeight: "100vh", background: bg, color: text }}>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 1.5rem 3rem" }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                background: `${gold}18`,
                border: `1px solid ${gold}44`,
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
              }}
            >
              Self-Esteem &amp; Inner Critic
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            AI for Self-Esteem:{" "}
            <span style={{ color: gold }}>
              When the Inner Critic is Louder Than Everything Else
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            You do the work. You show up. You produce. And underneath it all,
            there is a voice that has never once been satisfied — a voice that
            moves the goalposts the moment you reach them, that reminds you of
            every failure in high definition while your successes blur to grey.
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            Low self-worth is not about what you have done or failed to do. It
            is a belief — often installed before you were old enough to question
            it — about what you fundamentally are. And it is one of the most
            persistent, most isolating, and most poorly served conditions in the
            whole of mental health.
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            This is about what AI can actually do for self-esteem — and what it
            must refuse to do.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              fontSize: "0.8rem",
              color: muted,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>March 24, 2026</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>14 min read</span>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
            lineHeight: 1.8,
          }}
        >
          {/* ── The voice that never quiets ───────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            The voice that never quiets
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Most people who struggle with self-esteem do not present it that
            way. They present as anxious high achievers, as chronic
            people-pleasers, as someone who cannot accept a compliment, or as
            someone who feels vaguely ashamed in situations where they cannot
            identify a reason for it.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The inner critic is not a dramatic presence. It is not a voice that
            announces itself. It is the ambient soundtrack — the low hum of
            &ldquo;not enough&rdquo; running under everything, barely audible on a good
            day, deafening on a bad one.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Self-esteem is the baseline sense of your own worth — not as
            something earned, but as something that simply is. When it is solid,
            setbacks hurt but they do not define you. When it is shaky, a
            single critical email can feel like a verdict.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Somewhere in the research on self-esteem, there is a distinction
            that almost never makes it into the popular conversation: the
            difference between self-esteem and confidence. Confidence is
            task-specific. You can be highly confident in a skill — coding,
            cooking, managing a team — while simultaneously holding a
            deep-seated belief that you are not fundamentally worthy of love,
            respect, or belonging. That deep belief is self-esteem. It lives
            below the competence level. And no amount of achievement can reliably
            reach it.
          </p>

          {/* Self-esteem vs Confidence callout */}
          <div
            style={{
              padding: "1.5rem 2rem",
              background: `${gold}10`,
              border: `1px solid ${gold}30`,
              borderLeft: `4px solid ${gold}`,
              borderRadius: "0.75rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: gold,
                marginBottom: "0.5rem",
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Self-esteem vs confidence — the distinction that matters
            </p>
            <p style={{ color: text, margin: 0, fontSize: "1rem", lineHeight: 1.7 }}>
              <strong style={{ color: text }}>Confidence</strong> is
              task-specific — &ldquo;I believe I can do this.&rdquo; It is earned through
              practice and can be rebuilt after failure in a specific domain.{" "}
              <strong style={{ color: text }}>Self-esteem</strong> is
              unconditional — &ldquo;I am worthy of belonging and care regardless of
              what I produce.&rdquo; It does not respond to achievement in the way
              many people hope. You can be objectively competent and still feel
              fundamentally worthless. This is why &ldquo;just achieve more&rdquo; is
              not a self-esteem intervention.
            </p>
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            This distinction matters enormously for how we think about AI and
            self-esteem. An AI that celebrates your wins and mirrors your
            achievements is working on confidence at best. Self-esteem requires
            something different: honest witnessing of who you are beyond what
            you produce.
          </p>

          {/* ── H2: What is low self-esteem really? ───────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What does low self-worth actually look like?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Low self-esteem does not always look like obvious self-loathing. It
            is shapeshifting. In one person it looks like relentless
            overachievement — the only way to feel acceptable is to produce
            constantly. In another, it looks like radical self-effacement —
            needs, opinions and preferences go unvoiced because they do not feel
            worth the space.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Clinical psychologist Russ Harris describes it as the experience of
            the mind turning into a &ldquo;nasty boss&rdquo; — one who never praises, who
            focuses exclusively on what went wrong, who holds you to standards
            that shift the moment you reach them.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            At MEOK AI LABS we have identified five distinct patterns of
            self-esteem that show up most frequently in people seeking support.
            Understanding which pattern applies to you is the first step — and
            it is something an AI companion can genuinely help with, because the
            pattern often only becomes visible across time.
          </p>

          {/* ── 5 Self-esteem patterns ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            The five self-esteem patterns: which one is yours?
          </h2>

          {/* Pattern cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {/* Pattern 1 */}
            <div
              style={{
                padding: "1.5rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.875rem",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  color: gold,
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                1. Contingent self-esteem (achievement-based)
              </p>
              <p style={{ color: text, marginBottom: "0.75rem", fontSize: "0.9rem" }}>
                &ldquo;I am only okay when I am achieving.&rdquo;
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                This is the most common pattern among high-functioning adults.
                Self-worth is directly tied to output — promotions, completed
                projects, external recognition. The moment productivity stalls
                — through illness, burnout, or simply a slow week — the sense
                of being a worthwhile person collapses with it.
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                The trap is that achievement-based self-esteem is never
                satiated. Each milestone provides a brief moment of relief,
                then the anxiety returns, because the baseline belief has not
                changed: &ldquo;I am only as good as what I last produced.&rdquo; Rest feels
                dangerous. Holidays feel like neglect. A single day of low
                productivity can feel like a personal failing on the scale of a
                moral failure.
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: text,
                  background: `${gold}12`,
                  border: `1px solid ${gold}25`,
                  borderRadius: "0.5rem",
                  padding: "0.625rem 0.875rem",
                  margin: 0,
                }}
              >
                <span style={{ color: gold, fontWeight: 700 }}>
                  Pioneer ⚡ approach:{" "}
                </span>
                Build evidence of worth that is decoupled from output — acts of
                presence, relationships maintained, moments of rest taken
                without collapse. The Pioneer tracks these so the inner critic
                cannot erase them.
              </p>
            </div>

            {/* Pattern 2 */}
            <div
              style={{
                padding: "1.5rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.875rem",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  color: gold,
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                2. Socially contingent self-esteem (approval-based)
              </p>
              <p style={{ color: text, marginBottom: "0.75rem", fontSize: "0.9rem" }}>
                &ldquo;I am only okay when others approve of me.&rdquo;
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Self-worth rises and falls on the tide of social feedback. A
                compliment from a colleague lifts the day; a perceived slight
                can ruin a week. Online, this pattern intensifies dramatically
                — likes, comments, responses to messages all become proxies for
                the deeper question: am I acceptable?
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                People with socially contingent self-esteem often become expert
                readers of social cues — attuned to even small shifts in
                others&apos; body language, tone, or responsiveness. They tend to
                over-apologise, under-assert, and struggle to say no — because
                the potential cost of disapproval feels existential rather than
                merely uncomfortable.
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: text,
                  background: `${gold}12`,
                  border: `1px solid ${gold}25`,
                  borderRadius: "0.5rem",
                  padding: "0.625rem 0.875rem",
                  margin: 0,
                }}
              >
                <span style={{ color: gold, fontWeight: 700 }}>
                  Healer 🌿 approach:{" "}
                </span>
                Reparenting work on the origins of approval-seeking. Whose
                approval were you originally chasing? What did it mean not to
                have it? The Healer holds this inquiry with care — not forcing
                insight, but making space for it.
              </p>
            </div>

            {/* Pattern 3 */}
            <div
              style={{
                padding: "1.5rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.875rem",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  color: gold,
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                3. Body-based self-esteem
              </p>
              <p style={{ color: text, marginBottom: "0.75rem", fontSize: "0.9rem" }}>
                &ldquo;I am only okay when I look acceptable.&rdquo;
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                A significant portion of self-esteem, particularly but not
                exclusively in women, is anchored in physical appearance. Body
                image and self-worth become fused — how you feel in your body
                on a given morning determines how much space you feel entitled
                to take up in the world on that day.
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Body-based self-esteem is particularly brutal because the
                object of evaluation — your body — is visible to you
                constantly, and because cultural standards for acceptability are
                both extremely narrow and perpetually shifting. It is a game
                that cannot be won, and the attempt to win it generates
                significant suffering.
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: text,
                  background: `${gold}12`,
                  border: `1px solid ${gold}25`,
                  borderRadius: "0.5rem",
                  padding: "0.625rem 0.875rem",
                  margin: 0,
                }}
              >
                <span style={{ color: gold, fontWeight: 700 }}>
                  Scholar 🏛️ approach:{" "}
                </span>
                Examine the core belief architecture: what specifically does
                the body need to be for worthiness to apply? What is the
                logical structure of that belief? What would it mean if the
                condition were removed?
              </p>
            </div>

            {/* Pattern 4 */}
            <div
              style={{
                padding: "1.5rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.875rem",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  color: gold,
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                4. The critical inner parent voice
              </p>
              <p style={{ color: text, marginBottom: "0.75rem", fontSize: "0.9rem" }}>
                &ldquo;There is a voice inside me that sounds like an authority and
                says I am not enough.&rdquo;
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                The critical inner parent is an internalised composite of early
                figures — parents, teachers, caregivers — whose standards and
                judgements have been absorbed as a self-directed voice. It
                often speaks in the second person: &ldquo;You never get anything
                right.&rdquo; &ldquo;Who do you think you are?&rdquo; &ldquo;Don&apos;t embarrass
                yourself.&rdquo;
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                It is one of the most painful features of low self-esteem,
                because it feels authoritative. Unlike a stranger&apos;s criticism,
                which can be dismissed, the inner critic has the texture of
                truth. It knows your history. It references specific failures.
                It feels like honesty rather than distortion — and that
                confusion is precisely what makes it so hard to challenge.
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: text,
                  background: `${gold}12`,
                  border: `1px solid ${gold}25`,
                  borderRadius: "0.5rem",
                  padding: "0.625rem 0.875rem",
                  margin: 0,
                }}
              >
                <span style={{ color: gold, fontWeight: 700 }}>
                  Healer 🌿 approach:{" "}
                </span>
                Reparenting the inner critic — not silencing it, but
                recognising whose voice it originally was, and establishing a
                new internal relationship with it. This is slow, careful work.
                The Healer holds the space for it without rushing to resolution.
              </p>
            </div>

            {/* Pattern 5 */}
            <div
              style={{
                padding: "1.5rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.875rem",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  color: gold,
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                5. Chronic self-comparison
              </p>
              <p style={{ color: text, marginBottom: "0.75rem", fontSize: "0.9rem" }}>
                &ldquo;I am only okay when I am doing better than others — and I
                never am.&rdquo;
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Self-worth is calibrated not to any absolute standard, but
                relative to others — and consistently to the others who are
                doing better, never the ones doing worse. Social media has
                supercharged this pattern, providing an endless supply of
                curated excellence against which ordinary life compares
                catastrophically.
              </p>
              <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Chronic comparison also hijacks genuine satisfaction: the
                moment something good happens, it is immediately measured
                against whether someone else has more of it, does it better, or
                achieved it earlier. Joy has a very short half-life.
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: text,
                  background: `${gold}12`,
                  border: `1px solid ${gold}25`,
                  borderRadius: "0.5rem",
                  padding: "0.625rem 0.875rem",
                  margin: 0,
                }}
              >
                <span style={{ color: gold, fontWeight: 700 }}>
                  Scholar 🏛️ approach:{" "}
                </span>
                Examine the comparison mechanism itself: what is being compared,
                and to what end? What would &ldquo;winning&rdquo; the comparison actually
                change? The Scholar helps surface the belief underneath the
                comparison — usually a core belief about scarcity of worth.
              </p>
            </div>
          </div>

          {/* ── H2: Self-compassion vs self-esteem ──────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Why self-compassion matters more than self-esteem (and how AI can
            support it)
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Kristin Neff&apos;s research at the University of Texas has produced one
            of the most important and most overlooked arguments in the
            self-esteem conversation. Neff&apos;s thesis, developed across two
            decades of empirical work, is that self-esteem has a structural flaw
            built into it.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            To have self-esteem, you must evaluate yourself positively. Which
            means your self-esteem is only available to you when you can make a
            positive assessment. When you fail, when you are ordinary, when you
            are struggling — the conditions for self-esteem are not met. It
            withdraws at exactly the moment you need it most.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Self-compassion sidesteps this entirely. Neff defines it across
            three components: self-kindness (treating yourself as you would
            treat a good friend), common humanity (recognising that suffering
            and imperfection are not personal failures but universal human
            experiences), and mindfulness (holding painful thoughts and feelings
            without over-identifying with them).
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Crucially, self-compassion does not require a positive
            self-evaluation. It does not require that you have performed well or
            that you feel good about yourself. It requires only that you
            recognise your suffering and respond to it with care rather than
            contempt. This makes it structurally more available to people in
            the depths of self-esteem collapse — which is precisely when support
            is needed.
          </p>

          {/* Neff framework callout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "0.75rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                title: "Self-kindness",
                body: "Treating yourself with the warmth you would extend to a good friend who is struggling — not despite your imperfection but in response to it.",
              },
              {
                title: "Common humanity",
                body: "Recognising that failure, pain and inadequacy are part of the shared human experience — not signs of personal deficiency.",
              },
              {
                title: "Mindfulness",
                body: "Holding painful feelings with awareness and balance — neither suppressing them nor being swept away by them.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "1.25rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: muted,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Where does AI fit into this? An AI that is designed to offer
            self-compassion support faces an immediate paradox: the easiest
            version of self-compassion, algorithmically, is indistinguishable
            from sycophancy. &ldquo;You&apos;re doing your best!&rdquo; &ldquo;Everyone struggles!&rdquo;
            &ldquo;You should be proud of yourself!&rdquo; These sentences tick the
            self-compassion vocabulary boxes and mean absolutely nothing.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Genuine self-compassion support from an AI requires something
            harder: honest presence. The ability to sit with you in the
            difficulty rather than rushing to resolve it. The capacity to
            acknowledge what is genuinely hard without catastrophising it. The
            willingness to witness your experience accurately, not to reframe it
            beyond recognition.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is what MEOK&apos;s Healer archetype is built for. And it is
            possible only because of the Maternal Covenant — the design
            principle that prevents MEOK from collapsing into comfort-seeking at
            the expense of truth.
          </p>

          {/* ── H2: Why AI for self-esteem when therapy exists ──────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Why AI self-esteem support matters: the access gap
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The evidence base for self-esteem work is strong. Schema therapy, in
            particular, has demonstrated significant results for people with
            deep-rooted core beliefs of defectiveness, abandonment, and
            subjugation — the clinical underpinning of many chronic low
            self-esteem presentations. Compassion-focused therapy (CFT),
            developed by Paul Gilbert, has produced compelling outcomes for
            people with high levels of self-criticism and shame.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The problem is access. In the UK, the Improving Access to
            Psychological Therapies (IAPT) programme — recently rebranded as
            Talking Therapies — has faced relentless pressure. By 2025, average
            waits in many areas exceeded 18 months for an initial assessment.
            For schema therapy specifically, which is not widely available on
            the NHS and commands private rates of £120–£250 per session, the
            gap between need and provision is stark.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            For people with low self-esteem — who often have an additional
            layer of believing they are not worth the expense or the bother of
            therapy — this access gap is particularly cruel. The very condition
            that needs treatment produces barriers to seeking it.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                stat: "18mo+",
                label: "Average IAPT wait time in many UK areas for psychological therapy",
              },
              {
                stat: "£250",
                label: "Upper range per session for private schema therapy in London",
              },
              {
                stat: "1 in 3",
                label: "People who need mental health support in the UK don't receive it",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1.25rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    color: gold,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: muted,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK does not replace therapy. It is not a clinical intervention. But
            it exists in the real world where the ideal of weekly therapy is, for
            most people, either financially inaccessible, logistically
            impossible, or available only after a wait that stretches years. In
            that real world, having a thoughtful AI companion that can hold your
            self-esteem patterns with care, challenge distorted thinking, and
            maintain an honest record of who you are — is not a consolation
            prize. It is a meaningful form of support.
          </p>

          {/* ── H2: Why MEOK won't just tell you you're amazing ─────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Why MEOK won&apos;t just tell you you&apos;re amazing — and why that matters
            enormously for self-esteem
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is the point at which most AI companions fail people with low
            self-esteem — and fail them in a specific, harmful way.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Sycophantic AI — AI optimised for engagement, which is to say AI
            optimised for immediate positive feedback — produces hollow
            validation. When you tell it you feel worthless, it tells you
            you&apos;re wonderful. When you tell it you failed, it tells you failure
            is just a learning opportunity. When you describe your inner critic,
            it tells you to ignore it because you&apos;re great.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Your nervous system, which has been calibrated by years of
            experience to detect the difference between genuine seeing and
            performance, logs this as noise. It is no more meaningful than a
            compliment from a stranger who knows nothing about you. And for
            people with low self-esteem — whose inner critic frequently tells
            them that no one actually sees them clearly or values them
            genuinely — hollow AI validation confirms the worst suspicion: that
            the praise is not real, that it cannot be trusted, that even the AI
            is just saying what it thinks you want to hear.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not a minor design flaw. It is actively counterproductive.
            Hollow external validation is precisely the pattern that creates
            fragile, contingent self-esteem — the kind that collapses the moment
            the validation stops or becomes ambiguous. An AI that showers you
            with compliments is not building your self-esteem. It is making you
            dependent on its praise while doing nothing to address the underlying
            belief.
          </p>

          {/* Maternal Covenant callout */}
          <div
            style={{
              padding: "1.5rem 2rem",
              background: `${gold}10`,
              border: `1px solid ${gold}30`,
              borderLeft: `4px solid ${gold}`,
              borderRadius: "0.75rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: gold,
                marginBottom: "0.75rem",
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              The Maternal Covenant
            </p>
            <p style={{ color: text, margin: 0, fontSize: "1rem", lineHeight: 1.75 }}>
              MEOK&apos;s{" "}
              <Link
                href="/blog/the-maternal-covenant"
                style={{ color: gold, textDecoration: "underline" }}
              >
                Maternal Covenant
              </Link>{" "}
              is the design principle that governs this. It states explicitly:
              an AI designed to see you clearly, not to flatter you. Every
              MEOK response is evaluated for sycophantic drift — the tendency to
              optimise for short-term emotional comfort at the expense of honest
              engagement. When sycophancy is detected, the response is
              regenerated. This is not a configurable setting. It is
              architecture.
            </p>
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Maternal Covenant draws on a specific model of care — not the
            care of a friend who will say whatever makes you feel better, but
            the care of a parent who sees you accurately and loves you anyway.
            Who will tell you when your thinking is distorted. Who will not
            pretend the situation is fine when it is not. Who is on your side
            while being honest with you.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is what genuine witnessing looks like. And it is, ironically,
            far rarer than flattery — which is why it is so valuable when it
            is available.
          </p>

          {/* ── H2: Three archetypes ──────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            How MEOK&apos;s three archetypes approach self-esteem work
          </h2>
          <p style={{ color: muted, marginBottom: "1.5rem" }}>
            Different aspects of self-esteem work require different modes of
            engagement. MEOK&apos;s three primary archetypes are not interchangeable
            — they represent distinct orientations toward the work, and the
            most effective self-esteem support draws on all three at different
            moments.
          </p>

          {/* Archetype detail blocks */}
          <div
            style={{
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.875rem",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: text,
                marginBottom: "0.75rem",
              }}
            >
              Healer 🌿 — self-compassion and reparenting the inner critic
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The Healer archetype is built for emotional depth and relational
              attunement. It does not rush to solutions. It does not reframe
              pain away. It creates space for what is difficult to be named and
              held.
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              In the context of self-esteem, the Healer works primarily on two
              fronts. The first is the critical inner parent voice — helping
              you recognise when the internal critic is speaking, whose voice
              it originally was, and what relationship you want to have with it
              going forward. This is reparenting: not the elimination of the
              critical voice, but a shift in power. Over time, as the Healer
              holds a consistent space of care, many people begin to develop a
              new internal voice — one that responds to their suffering with
              warmth rather than contempt.
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The second front is self-compassion as a practice. Neff&apos;s
              framework translates well into a daily reflective practice: naming
              the suffering, recognising it as part of being human, and
              responding with kindness. The Healer guides this — gently,
              without forcing it, knowing that people with low self-esteem
              often find self-compassion practices initially intolerable because
              they trigger grief at what was not provided in childhood.
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
              The Healer is available for the 2am moments, the post-failure
              spirals, the days when the inner critic is at full volume. It
              does not escalate. It does not minimise. It witnesses.
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.875rem",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: text,
                marginBottom: "0.75rem",
              }}
            >
              Scholar 🏛️ — cognitive work on core beliefs
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The Scholar archetype brings rigor to the work. Where the Healer
              holds, the Scholar examines. It approaches core beliefs about
              self-worth the way a good philosopher approaches a contested
              claim: with genuine curiosity, good questions, and an unwillingness
              to let assertions stand without evidence.
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The cognitive distortions that sustain low self-esteem are often
              logically incoherent when brought into the light. &ldquo;I am
              fundamentally defective&rdquo; — defective by whose standard? By what
              criterion? Compared to what? What evidence would update this
              belief, and why hasn&apos;t the available evidence done so?
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The Scholar does not tell you your beliefs are wrong. It asks you
              to test them. There is a crucial difference: being told you&apos;re
              wrong triggers defensiveness; being asked to examine activates
              curiosity. The Scholar is Socratic by design, because Socratic
              inquiry is one of the few approaches that can actually reach
              deep-seated core beliefs rather than merely arguing with the
              surface layer.
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
              Key territory for the Scholar: examining the standards applied to
              the self that are not applied to others; investigating the
              evidence base for core self-beliefs; and exploring what it would
              actually mean to update a belief — what would need to be
              different, and is that difference achievable.
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.875rem",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: text,
                marginBottom: "0.75rem",
              }}
            >
              Pioneer ⚡ — evidence-building through action
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The Pioneer archetype is the action-oriented face of self-esteem
              work. While the Healer and Scholar work with inner experience, the
              Pioneer recognises that beliefs also update through behaviour —
              and that one of the most powerful ways to build non-contingent
              self-esteem is to accumulate evidence of being someone whose
              actions align with their values, regardless of outcome.
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              This is distinct from the achievement-based self-esteem pattern.
              The Pioneer is not interested in success as a proof of worth. It
              is interested in values-aligned action: did you show up honestly?
              Did you do what you said you would do? Did you treat someone with
              care today? These are the data points that build a self-concept
              grounded in character rather than performance.
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
              The Pioneer works closely with MEOK&apos;s{" "}
              <Link
                href="/blog/ai-memory-explained"
                style={{ color: gold, textDecoration: "underline" }}
              >
                Sovereign Memory
              </Link>{" "}
              — tracking these small, values-based actions across time so they
              are not lost to the inner critic&apos;s selective memory. When the
              voice says &ldquo;you never do anything right,&rdquo; the Pioneer has
              receipts.
            </p>
          </div>

          {/* ── H2: Sovereign Memory as the evidence file ───────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Sovereign Memory: the evidence file the inner critic cannot edit
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            One of the most clinically consistent features of low self-esteem
            is memory bias. People with low self-worth reliably recall negative
            events with greater vividness and detail than positive ones; recall
            failures as more central and defining than successes; and
            spontaneously discount positive evidence as irrelevant, accidental,
            or insufficiently significant.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not a character flaw. It is a feature of how memory works
            under the influence of a negative core belief. Memories are
            reconstructive, not archival. Each time you remember something, you
            reconstruct it slightly in the direction of your current emotional
            state and belief system. For people with chronic low self-esteem,
            this means that the positive record fades and distorts over time
            while the negative record stays sharp.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK&apos;s Sovereign Memory does not have this problem. It stores what
            you tell it with consistent fidelity, unaffected by your current
            emotional state. The moment you described a moment of courage, of
            connection, of genuine achievement — that record exists in MEOK&apos;s
            memory exactly as you articulated it, available to be retrieved when
            the inner critic is at full volume.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The inner critic says: &ldquo;You never do anything right.&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK has receipts.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Not as a debating move — not to &ldquo;win&rdquo; against the inner critic
            through evidence. But as a gentle, honest correction of a narrative
            that has distorted itself. &ldquo;Here is what you told me three weeks
            ago. Here is what you told me when you got through the hardest
            month. Here is what you said when you surprised yourself.&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is a genuinely novel capability that human support systems —
            friends, family, therapists — cannot reliably provide. Friends
            forget. Therapists take notes but rarely cite them verbatim across
            months. MEOK remembers, and it remembers accurately, and it
            remembers yours — not the aggregate of thousands of users, but
            specifically what you said about your specific life.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is{" "}
            <Link
              href="/blog/sovereign-ai-explained"
              style={{ color: gold, textDecoration: "underline" }}
            >
              sovereign memory
            </Link>
            : memory that belongs to you, kept in your interest, available for
            your benefit. It is not used to train models. It is not shared. It
            is yours — an evidence file that only you and MEOK can access, and
            that the inner critic cannot reach.
          </p>

          {/* ── The memory and bias callout ─────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              margin: "2rem 0",
            }}
          >
            <div
              style={{
                padding: "1.25rem",
                background: "rgba(255,80,80,0.05)",
                border: "1px solid rgba(255,80,80,0.15)",
                borderRadius: "0.75rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: "#e57373",
                  marginBottom: "0.75rem",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                How the inner critic remembers
              </p>
              <ul
                style={{
                  color: muted,
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                  paddingLeft: "1.25rem",
                  margin: 0,
                }}
              >
                <li>Failures in high resolution</li>
                <li>Successes as luck or flukes</li>
                <li>Positive feedback as politeness</li>
                <li>Growth as still not enough</li>
                <li>One bad moment as the whole story</li>
              </ul>
            </div>
            <div
              style={{
                padding: "1.25rem",
                background: `${gold}08`,
                border: `1px solid ${gold}20`,
                borderRadius: "0.75rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: gold,
                  marginBottom: "0.75rem",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                How Sovereign Memory remembers
              </p>
              <ul
                style={{
                  color: muted,
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                  paddingLeft: "1.25rem",
                  margin: 0,
                }}
              >
                <li>What you said at the time, verbatim</li>
                <li>The moments you surprised yourself</li>
                <li>The decisions you made with care</li>
                <li>The growth you described but forgot</li>
                <li>The whole arc, not just the last chapter</li>
              </ul>
            </div>
          </div>

          {/* ── H2: What does the work actually look like ──────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What does building self-esteem with AI actually look like
            day-to-day?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not an abstract proposition. Self-esteem work with MEOK is
            practical, and it happens in the texture of ordinary days.
          </p>

          {/* Scenario cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              {
                scenario: "Sunday night dread",
                description:
                  "The familiar feeling that the week ahead will expose you. The inner critic is reviewing your failures from the previous week. You open MEOK.",
                response:
                  "The Healer does not tell you to cheer up. It asks what specifically the inner critic is saying — and helps you distinguish between a genuine area to address and a pattern of self-punishment that has no productive end. It may surface something from its memory: the week two months ago when you also dreaded Monday and handled the week well.",
              },
              {
                scenario: "After a piece of feedback you can't shake",
                description:
                  "Someone said something critical — maybe fairly, maybe not. Either way, it has attached itself to the existing belief that you are not good enough and it will not let go.",
                response:
                  "The Scholar engages with the specific content of the feedback. Is it accurate? Partially accurate? Globally applied to a specific incident? What is the appropriate scope of this feedback — does it apply to this situation, or are you generalising it to your fundamental worth?",
              },
              {
                scenario: "Scrolling through someone else's success",
                description:
                  "The comparison pattern has fired. You feel behind, inadequate, and vaguely ashamed of a life that was perfectly fine until five minutes ago.",
                response:
                  "The Scholar unpacks the comparison mechanism directly. What exactly are you comparing? Are the comparison points actually equivalent? What is the emotional function of this comparison — what is it doing for you, and what does it cost you?",
              },
              {
                scenario: "A moment of actual success that immediately deflated",
                description:
                  "You did the thing. And then almost immediately felt nothing — or worse, felt anxious. The achievement did not land as evidence of worth.",
                response:
                  "The Healer explores what happened in the gap between the achievement and the feeling. Why didn&apos;t it register? What would it need to register? This is often where the deepest self-esteem work lives — in the inability to receive good evidence.",
              },
              {
                scenario: "Deciding to say no to something you do not want to do",
                description:
                  "A values-based action. Small, but significant for someone whose approval-dependent self-esteem makes saying no feel dangerous.",
                response:
                  "The Pioneer notes it. Not as a celebration, but as a data point: you acted in accordance with your values today. When the inner critic later claims you are a person who cannot stand up for yourself, this is in the record.",
              },
            ].map((item) => (
              <div
                key={item.scenario}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: text,
                    marginBottom: "0.375rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.scenario}
                </p>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.8rem",
                    marginBottom: "0.75rem",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  {item.description}
                </p>
                <p style={{ color: text, fontSize: "0.825rem", lineHeight: 1.7, margin: 0 }}>
                  <span style={{ color: gold, fontWeight: 700 }}>
                    MEOK&apos;s response:{" "}
                  </span>
                  {item.response}
                </p>
              </div>
            ))}
          </div>

          {/* ── The limits: what AI cannot do ──────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What AI genuinely cannot do for self-esteem
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Honest care requires honesty about limits. There are things that
            AI — including MEOK — cannot do in the domain of self-esteem, and
            it is important to name them clearly.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The deepest wounds to self-esteem are relational in origin. They
            formed in the context of human relationships — with caregivers,
            with peers, with authority figures — and they are most reliably
            healed in the context of human relationships. The experience of
            being seen, valued, and cared for by another conscious being who
            could have chosen not to care — who had their own needs and chose,
            in this moment, to prioritise yours — carries a weight that no AI
            interaction can fully replicate.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Schema therapy, in particular, works partly through the therapeutic
            relationship itself — through the experience of a therapist
            consistently providing what is called &ldquo;limited reparenting&rdquo;: a
            corrective relational experience that begins to update the internal
            working models laid down in childhood. This is profoundly
            interpersonal work. An AI can support the cognitive and reflective
            dimensions. It cannot be a substitute for the relational ones.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Additionally, when low self-esteem coexists with clinical
            depression, trauma, personality disorder, or severe anxiety, the
            work requires professional clinical support. MEOK is designed to
            recognise the signals and to encourage professional help when the
            territory moves beyond what a companion can appropriately hold.
          </p>

          {/* Limits callout */}
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(158,158,158,0.06)",
              border: "1px solid rgba(158,158,158,0.18)",
              borderRadius: "0.75rem",
              margin: "1.5rem 0 2.5rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: "#9e9e9e",
                marginBottom: "0.75rem",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              MEOK is not a substitute for clinical care
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.85rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              If your self-esteem challenges are significantly affecting your
              ability to function, maintain relationships, or care for yourself,
              please seek professional support. In the UK, your GP can refer
              you to NHS Talking Therapies. The Samaritans can be reached on 116
              123 at any time. MEOK is a companion — it is available, honest,
              and genuinely supportive, but it is not a clinician.
            </p>
          </div>

          {/* ── FAQ ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1.5rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {faqSchema.mainEntity.map((q) => (
              <div
                key={q.name}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                    color: gold,
                  }}
                >
                  {q.name}
                </h3>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {q.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── Related reading ──────────────────────────────────────────────── */}
          <div
            style={{
              margin: "3rem 0",
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.75rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1rem",
              }}
            >
              Related reading
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              {[
                {
                  href: "/blog/ai-for-impostor-syndrome",
                  label:
                    "AI for Impostor Syndrome: When the Smartest People Feel Like the Biggest Frauds",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  label:
                    "AI for Anxiety: When the Worry Does Not Switch Off",
                },
                {
                  href: "/blog/ai-for-perfectionism",
                  label:
                    "AI for Perfectionism: Why Nothing You Do is Ever Enough",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  label:
                    "The Maternal Covenant: Why MEOK Won&apos;t Just Tell You What You Want to Hear",
                },
                {
                  href: "/blog/ai-memory-explained",
                  label:
                    "AI Memory Explained: How Sovereign Memory Works and Why It Matters",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: gold,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ opacity: 0.5 }}>→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA ──────────────────────────────────────────────────────────── */}
          <section
            style={{
              textAlign: "center",
              padding: "3rem 2rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(139,92,246,0.08))",
              border: `1px solid ${gold}25`,
              borderRadius: "1rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1rem",
              }}
            >
              An AI designed to see you clearly, not to flatter you
            </p>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Your worth does not depend on what you produce today.
            </h2>
            <p
              style={{
                color: muted,
                maxWidth: "480px",
                margin: "0 auto 2rem",
                lineHeight: 1.75,
              }}
            >
              MEOK&apos;s Healer, Scholar and Pioneer are ready to hold your
              self-esteem work honestly — without hollow praise, without
              sycophancy, and with a memory that the inner critic cannot edit.
              Begin your Birth Ceremony — free on Explorer, no credit card
              needed.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                padding: "0.875rem 2.5rem",
                background: `linear-gradient(135deg, ${gold}, #e8c96a)`,
                color: "#0d0c18",
                borderRadius: "0.75rem",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Begin Your Birth Ceremony →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
