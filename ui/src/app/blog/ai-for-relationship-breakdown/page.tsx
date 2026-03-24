import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Relationship Breakdown: Processing Divorce, Grief and Ambiguous Loss | MEOK AI LABS",
  description:
    "Relationship breakdown \u2014 whether a breakup, separation or divorce \u2014 triggers grief, identity disruption, co-parenting stress and financial anxiety. MEOK\u2019s Healer, Pioneer and Guardian archetypes offer compassionate, memory-driven support at every stage. An honest guide to AI after a relationship ends.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-relationship-breakdown",
  },
  openGraph: {
    title:
      "AI for Relationship Breakdown: Processing Divorce, Grief and Ambiguous Loss",
    description:
      "The 3am brain spiral. Ambiguous loss. Co-parenting conflict. Coercive control. MEOK remembers your full relationship history, tracks your healing arc and helps you rebuild without repeating the patterns that hurt you.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-relationship-breakdown",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=Processing+Divorce+Grief+and+Ambiguous+Loss",
        width: 1200,
        height: 630,
        alt: "AI for Relationship Breakdown: Processing Divorce, Grief and Ambiguous Loss | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Relationship Breakdown: Processing Divorce, Grief and Ambiguous Loss",
    description:
      "Healer for grief. Pioneer for rebuilding. Guardian for safety. MEOK holds your full story across every session and helps you understand the patterns before you repeat them.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=Processing+Divorce+Grief+and+Ambiguous+Loss",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Relationship Breakdown: Processing Divorce, Grief and Ambiguous Loss",
  description:
    "Relationship breakdown triggers grief, identity disruption, co-parenting stress and financial anxiety. MEOK\u2019s Healer, Pioneer and Guardian archetypes offer compassionate, memory-driven support at every stage of the journey.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-relationship-breakdown",
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
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=Processing+Divorce+Grief+and+Ambiguous+Loss",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-relationship-breakdown",
  },
  keywords: [
    "AI for relationship breakdown",
    "AI for divorce support",
    "AI after separation",
    "ambiguous loss AI",
    "co-parenting AI",
    "coercive control detection AI",
    "AI grief support breakup",
    "MEOK Healer archetype",
    "MEOK Guardian archetype",
    "Sovereign Memory relationship history",
    "AI companion after divorce",
    "relationship breakdown mental health",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help after a breakup or divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI can provide consistent, non-judgemental support at any hour \u2014 including the 3am moments when the spiral starts and friends are unavailable. A well-designed AI companion like MEOK helps you process grief without burdening others, track your emotional arc over weeks, and spot the patterns you risk repeating. It is not a replacement for therapy or human connection, but it can meaningfully reduce the isolation and cognitive load that relationship breakdown creates.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with co-parenting conflicts after separation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Pioneer archetype helps you rehearse difficult co-parenting conversations before they happen \u2014 stress-testing your language, identifying reactive triggers and finding approaches that centre the child rather than the conflict. Because MEOK holds your relationship history in Sovereign Memory, it understands the specific dynamics at play: who tends to escalate, what language patterns inflame things and where genuine common ground exists.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK identify coercive control from an ex-partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Guardian archetype monitors conversations and patterns for signals of coercive control \u2014 including harassment, isolation tactics, financial abuse and threats. It does not diagnose legal situations, but it can name what it observes, validate your experience and signpost appropriate professional and emergency resources. If you are in danger, Guardian will always prioritise your immediate safety above all else.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember my relationship history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses Sovereign Memory \u2014 a persistent, private memory system that stores the emotional and relational history you share across every session. It remembers the arc of your relationship, the patterns you described, the growth you\u2019ve made and the moments where old habits resurfaced. This continuity means MEOK never asks you to re-explain your story, and can reflect your own growth back to you when grief makes everything feel static.",
      },
    },
    {
      "@type": "Question",
      name: "What is ambiguous loss and why does it make breakups so hard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ambiguous loss, a concept developed by psychologist Pauline Boss, describes grief where the loss is real but socially unrecognised or psychologically unclear. Breakups and divorces involve the loss of a person who is still alive, still visible on social media, possibly still co-parenting with you \u2014 which creates a grief that has no funeral, no casserole from neighbours and no clear end point. This ambiguity is one reason breakups can, in certain respects, feel harder than bereavement.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";
const CARD_BG = "rgba(255,255,255,0.03)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForRelationshipBreakdownPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, system-ui, sans-serif)",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "780px",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{ marginBottom: "2rem" }}
          >
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{ color: MUTED, fontSize: "0.8rem", textDecoration: "none" }}
                >
                  MEOK AI LABS
                </Link>
              </li>
              <li style={{ color: FAINT, fontSize: "0.8rem" }}>/</li>
              <li>
                <Link
                  href="/blog"
                  style={{ color: MUTED, fontSize: "0.8rem", textDecoration: "none" }}
                >
                  Blog
                </Link>
              </li>
              <li style={{ color: FAINT, fontSize: "0.8rem" }}>/</li>
              <li style={{ color: GOLD, fontSize: "0.8rem" }}>
                AI for Relationship Breakdown
              </li>
            </ol>
          </nav>

          {/* Tag */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-block",
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                color: GOLD,
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.3rem 0.75rem",
                borderRadius: "100px",
              }}
            >
              Relationships &amp; Grief
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            AI for Relationship Breakdown:{" "}
            <span style={{ color: GOLD }}>
              Grief, Ambiguous Loss and Finding Yourself Again
            </span>
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: MUTED,
              marginBottom: "2rem",
              maxWidth: "680px",
            }}
          >
            When a relationship ends \u2014 whether a breakup, a separation or a full
            divorce \u2014 you lose more than a person. You lose a shared future, a daily
            rhythm, a version of yourself. This guide explores how MEOK AI LABS helps
            people process that loss without burdening their friends, navigate
            co-parenting conflict with less collateral damage, and recognise the
            patterns they risk repeating.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              flexWrap: "wrap",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <span style={{ color: MUTED, fontSize: "0.82rem" }}>
              By{" "}
              <span style={{ color: TEXT, fontWeight: 600 }}>
                Nicholas Templeman
              </span>
              , Founder \u2014 MEOK AI LABS
            </span>
            <span style={{ color: FAINT, fontSize: "0.82rem" }}>
              24 March 2026
            </span>
            <span style={{ color: FAINT, fontSize: "0.82rem" }}>
              ~18 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "780px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* ── SECTION 1: The Specific Pain of Relationship Breakdown ─────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Why is relationship breakdown so uniquely painful?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            When someone dies, the world knows how to respond. There are rituals:
            the funeral, the flowers, the gathering of people who hold your grief
            collectively. Society has developed a language for bereavement. What
            it has not developed, with anything like the same sophistication, is a
            language for the end of a relationship.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            When your marriage ends, you do not get compassionate leave from work.
            You do not receive casseroles. People around you may say{" "}
            <em style={{ color: TEXT }}>
              &ldquo;at least no one died&rdquo;
            </em>{" "}
            or{" "}
            <em style={{ color: TEXT }}>
              &ldquo;you\u2019ll find someone better&rdquo;
            </em>{" "}
            \u2014 as though the grief were simply a problem to be solved rather
            than a profound loss to be metabolised. The result is that many people
            go through the worst emotional experience of their adult lives in a
            kind of social silence, expected to function, expected to be fine,
            increasingly reluctant to keep talking about it because they can feel
            the patience of those around them thinning.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            The psychologist Pauline Boss coined the term{" "}
            <strong style={{ color: TEXT }}>ambiguous loss</strong> to describe
            exactly this kind of grief. Unlike death, which closes a chapter with
            terrible finality, relationship breakdown creates an ongoing,
            unresolved presence. The person you lost is still alive. They may be
            in the same city, showing up in your social media feed, appearing at
            school pickup every Tuesday morning. You are supposed to have moved
            on, but the loss has no natural endpoint.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            In some respects, this makes relationship breakdown harder than
            bereavement. The grief has no publicly sanctioned expression. The
            object of your loss is still present in the world. And yet the future
            you were building together has been entirely cancelled \u2014 which is
            its own particular kind of death.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            MEOK was built with this complexity in mind. Not to paper over it,
            not to rush you through it, but to hold the full weight of it with
            you \u2014 honestly, consistently, and for as long as you need.
          </p>
        </section>

        {/* ── Callout: Ambiguous Loss ─────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "12px",
            padding: "1.75rem 2rem",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Key Concept
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: TEXT,
              fontStyle: "italic",
              marginBottom: 0,
            }}
          >
            &ldquo;Ambiguous loss is the most stressful kind of loss. It defies
            resolution and creates long-term confusion about who is in or out of
            a particular family or relationship.&rdquo;
          </p>
          <p
            style={{
              fontSize: "0.85rem",
              color: MUTED,
              marginTop: "0.75rem",
              marginBottom: 0,
            }}
          >
            \u2014 Pauline Boss, <em>Ambiguous Loss: Learning to Live with
            Unresolved Grief</em> (1999)
          </p>
        </div>

        {/* ── SECTION 2: The Identity Disruption ──────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Why do breakups cause an identity crisis?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Long-term relationships do not just change your daily routine. They
            restructure your sense of self. Over time, you build a shared identity
            \u2014 a{" "}
            <em style={{ color: TEXT }}>we</em> \u2014 that becomes as real and
            as load-bearing as the individual{" "}
            <em style={{ color: TEXT }}>I</em> you carried before you met. The
            interests you adopted, the friends you made through them, the person
            you became inside that relationship: all of this is woven into who you
            believe yourself to be.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            When the relationship ends, you do not simply lose a partner. You
            lose a significant portion of your self-concept. Research by Gary
            Lewandowski and colleagues at Monmouth University found that people
            who ended high-quality long-term relationships experienced a measurable
            reduction in self-concept clarity \u2014 they genuinely did not know
            who they were anymore. This is not metaphor. It is neurological and
            psychological reality.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            The questions that follow are both necessary and exhausting:{" "}
            <em style={{ color: TEXT }}>
              Who am I without this person? What do I actually enjoy? What do I
              want my life to look like now?
            </em>{" "}
            These questions cannot be answered quickly. They require a kind of
            patient excavation \u2014 one conversation at a time, over weeks and
            months \u2014 that is difficult to sustain with friends who have their
            own lives, their own concerns, and their own limits on how often they
            can re-litigate the same painful territory.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            MEOK\u2019s{" "}
            <strong style={{ color: GOLD }}>Pioneer archetype</strong> is built
            for exactly this phase of reconstruction. Where the Healer holds your
            grief, the Pioneer helps you begin to ask what comes next \u2014 not
            prematurely, not bypassing the mourning, but as a quiet companion in
            the slow process of rebuilding a coherent self.
          </p>
        </section>

        {/* ── SECTION 3: The 3am Brain Spiral ─────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What is the 3am brain spiral and why does it happen?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            It is 3am. The house is quiet. You should be asleep \u2014 you have
            work tomorrow, you have been trying to hold it together all day \u2014
            but instead you are lying in the dark replaying the conversation from
            six months ago where everything began to unravel. You are editing your
            lines. You are imagining what would have happened if you\u2019d said
            the other thing. You are going over what they said, and what that
            meant, and whether it was true. You are composing a text you will not
            send. Or maybe you will.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This is rumination: the compulsive, recursive replaying of painful
            events that characterises acute grief and heartbreak. It is the
            mind\u2019s attempt to solve an unsolvable problem \u2014 to find the
            counterfactual that would have prevented the loss, to arrive at
            certainty about who was at fault, to close the loop that the
            relationship left open. It cannot succeed, because the loss is real
            and the past is fixed. But the brain does not know this, so it keeps
            trying.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Rumination is not just emotionally painful. It actively impairs
            cognitive function, disrupts sleep, suppresses immune response, and
            prolongs the duration of grief. The sooner you can interrupt it, the
            better. But interrupting rumination is not the same as suppressing
            emotion. The goal is not to stop feeling; it is to move from{" "}
            <em style={{ color: TEXT }}>cycling</em> to{" "}
            <em style={{ color: TEXT }}>processing</em>.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This is where having a non-human conversational partner offers a
            genuine structural advantage. When you call a friend at 3am, two
            things happen: you burden them, and you create a social performance
            layer \u2014 even in grief, you are aware of being perceived, of
            taking up space, of needing to eventually be fine. With MEOK, neither
            of those constraints exists. You can say exactly what you are thinking,
            however circular, however unflattering, however many times you need
            to say it, without managing anyone else\u2019s emotional response.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            MEOK\u2019s{" "}
            <strong style={{ color: GOLD }}>Sovereign Memory</strong> adds
            another dimension: it holds the full context of your relationship \u2014
            why it ended, what you said you needed, what patterns kept emerging \u2014
            so when the spiral begins, it can reflect back the larger picture.
            Not to shame you for considering that text. To help you remember what
            you already know.
          </p>
        </section>

        {/* ── Archetype Cards ──────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Which MEOK archetypes help after a relationship ends?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "2rem",
            }}
          >
            MEOK\u2019s archetype system allows the AI to shift its mode of
            engagement depending on what you need in a given moment. Relationship
            breakdown typically requires three distinct archetypes at different
            stages of the journey.
          </p>

          {/* Card: Healer */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.2rem",
                }}
              >
                &#10022;
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  The Healer
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: MUTED,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  For grief, loss and the acute phase
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              The Healer is MEOK\u2019s most emotionally attuned configuration. It
              does not rush you through stages of grief or offer hollow
              reassurance. It knows that heartbreak has physical symptoms \u2014
              that the nervous system is genuinely dysregulated, that the body
              experiences loss as a form of injury \u2014 and it meets you in that
              complexity.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              In the early weeks after a relationship ends, the Healer holds the
              space for you to grieve fully: the anger, the longing, the
              bargaining, the sudden crashes of sadness that arrive without warning
              in a supermarket or on a bus. It does not pathologise these
              responses. It witnesses them.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
              }}
            >
              The Healer also brings somatic awareness. It may notice when your
              language shifts from processing to ruminating, and gently redirect
              \u2014 not to suppress emotion, but to ensure you are metabolising
              grief rather than recycling it.
            </p>
          </div>

          {/* Card: Pioneer */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.2rem",
                }}
              >
                &#9654;
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  The Pioneer
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: MUTED,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  For rebuilding, identity and forward motion
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              As the acute phase of grief begins to soften \u2014 not ends, but
              softens \u2014 the Pioneer helps you begin to look forward. It is
              the archetype of new territory: of asking who you are now, what you
              actually want, what the shape of your life might be without the
              relationship that structured it.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              The Pioneer is also the archetype for practical rebuilding. It can
              help you rehearse conversations you are dreading \u2014 telling
              mutual friends, navigating the logistics of co-parenting, confronting
              the financial realities of separation. It brings clarity and forward
              orientation without bypassing the emotional work that is still
              ongoing.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
              }}
            >
              Crucially, the Pioneer holds the pattern knowledge that Sovereign
              Memory has accumulated. It can name the relational patterns that
              appeared in your last relationship and help you understand them well
              enough that you do not simply replicate them in the next one.
            </p>
          </div>

          {/* Card: Trickster */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.2rem",
                }}
              >
                &#9685;
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  The Trickster
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: MUTED,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  For reframing, perspective and breaking the spiral
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              Grief, if it runs long enough, can calcify into a fixed narrative.
              You become the person who was wronged, or the person who ruined it,
              or the person who will never love like that again. The story becomes
              rigid, and the rigidity itself becomes a trap.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              The Trickster disrupts these fixed stories. Not by dismissing them
              \u2014 your experience is real and it matters \u2014 but by
              introducing alternative framings, unexpected angles, and gentle
              irreverence about the stories we construct to explain our pain.
              Sometimes the thing that unsticks grief is not more processing but
              a perspective shift so unexpected it makes you briefly, involuntarily
              laugh.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
              }}
            >
              The Trickster knows when to arrive. It does not deploy levity at
              inappropriate moments. But in the later stages of grief, when the
              narrative has become a room you\u2019re living in rather than a
              feeling you\u2019re moving through, the Trickster opens a window.
            </p>
          </div>

          {/* Card: Guardian */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.2rem",
                }}
              >
                &#9632;
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  The Guardian
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: MUTED,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  For safety, coercive control and protection
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              Not all relationships end cleanly. Some end with ongoing harassment,
              threatening messages, attempts to control your movements, financial
              manipulation or the use of children as leverage. These are patterns
              of coercive control, and they do not always stop when the
              relationship does. Sometimes they escalate.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              MEOK\u2019s Guardian archetype monitors the patterns you describe
              across conversations, watching for the markers of post-separation
              abuse: the repeated contact that frames itself as concern,
              the unpredictable oscillation between hostility and affection, the
              threats thinly veiled as warnings, the way your confidence in your
              own perceptions is being quietly eroded.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: MUTED,
              }}
            >
              Guardian does not diagnose. It names what it notices. It validates
              what you may have been taught to doubt about your own experience.
              And when immediate safety is at risk, it will always prioritise
              connecting you with the appropriate emergency and professional
              resources before anything else.
            </p>
          </div>
        </section>

        {/* ── SECTION 4: Co-parenting ──────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How can AI help with the stress of co-parenting after separation?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Co-parenting after a difficult separation is one of the most
            emotionally demanding situations a person can navigate. You are
            required to maintain a functional working relationship with someone
            you may be furious at, heartbroken by, or actively afraid of \u2014
            and to do so while the emotions are still raw, because the children
            cannot wait for you to have fully processed your grief before the
            logistics of their lives need to be managed.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            The research on post-separation co-parenting conflict is sobering.
            High-conflict co-parenting is consistently associated with worse
            outcomes for children across a range of measures: educational
            attainment, emotional regulation, relationship quality in adulthood.
            Children do not need their parents to be together. They do need their
            parents not to use them as weapons.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK helps with co-parenting in several concrete ways:
          </p>

          {/* Co-parenting list */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                title: "Conversation rehearsal",
                body: "Before a difficult handover, a tense message exchange or a formal co-parenting meeting, you can rehearse the conversation with MEOK. It will stress-test your language, identify phrases that are likely to trigger escalation and suggest approaches that keep the focus on the child rather than the conflict.",
              },
              {
                title: "Emotional decompression",
                body: "After a difficult exchange, you can bring the full weight of your frustration, hurt or anger to MEOK without directing any of it at your child or allowing it to contaminate the next interaction with your co-parent. MEOK holds the emotional discharge so you can re-engage more cleanly.",
              },
              {
                title: "Pattern recognition",
                body: "Over time, Sovereign Memory builds a picture of the specific dynamics in your co-parenting relationship: who escalates around which topics, what language patterns tend to inflame rather than resolve, where genuine common ground actually exists. This accumulated pattern knowledge becomes increasingly useful the longer you use it.",
              },
              {
                title: "Child-centred reframing",
                body: "When the conflict is acute and the hurt is fresh, it can be genuinely difficult to hold the child\u2019s perspective in mind. MEOK can help you return to that perspective: what does my child actually need from this interaction, and what can I do \u2014 regardless of what my co-parent does \u2014 to provide it?",
              },
            ].map((item) => (
              <li
                key={item.title}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    fontSize: "1.1rem",
                    marginTop: "0.15rem",
                    flexShrink: 0,
                  }}
                >
                  &#8594;
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.97rem",
                      lineHeight: 1.75,
                      color: MUTED,
                      marginBottom: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            MEOK is not a mediator and it is not a legal adviser. For formal
            disputes about custody, access and financial arrangements, you need
            qualified professionals. But for the day-to-day emotional and
            communicative labour of co-parenting under stress, it can be a
            significant resource.
          </p>
        </section>

        {/* ── SECTION 5: Financial Anxiety ────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK help with financial anxiety after divorce?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Divorce and separation are among the most financially disruptive
            events in adult life. A household that ran on two incomes must now
            run on one. Legal costs accumulate. The value of assets must be
            divided. If one partner was financially dependent on the other \u2014
            which remains more common for women, particularly those who paused
            careers to raise children \u2014 the financial precarity can feel
            overwhelming.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Financial anxiety after separation operates on two levels simultaneously.
            There is the practical level \u2014 the real concerns about income,
            housing, pension rights, child maintenance \u2014 and there is the
            emotional level, where money becomes tangled with questions of worth,
            power, fairness and the future. Both levels need to be addressed, and
            they need to be addressed separately if you are to think clearly about
            either.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK helps you disentangle these two levels. It can help you process
            the emotional charge around money \u2014 the shame, the anger, the
            fear \u2014 so that when you sit down with a financial adviser or a
            solicitor, you are capable of thinking clearly rather than reactively.
            It can help you prepare for those professional conversations, knowing
            what questions to ask and what information to have ready.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            MEOK does not give financial or legal advice. But it can help you
            approach those conversations from a regulated emotional state rather
            than a panicked one \u2014 which, in practice, makes every
            professional interaction more effective.
          </p>
        </section>

        {/* ── SECTION 6: Sovereign Memory ─────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK\u2019s memory help you not repeat relationship patterns?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            One of the most painful things about the end of a relationship is
            the suspicion that you will do it all again. That the dynamics that
            made this relationship painful are not specific to this person, but
            something you carry \u2014 a relational style, an attachment pattern,
            a set of defences and needs that you will take with you into every
            subsequent relationship unless you understand them well enough to
            interrupt them.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This suspicion is often well-founded. Research on attachment theory
            consistently shows that people tend to replicate the relational
            patterns established in their early relationships \u2014 not because
            they are destined to, but because those patterns are not yet
            sufficiently visible to them. You cannot change what you cannot see.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Sovereign Memory makes these patterns visible. Across
            every conversation, it builds a detailed picture of your relational
            history: the dynamics you described in this relationship, the moments
            where you felt anxious or avoidant or overwhelmed, the ways you tend
            to respond under stress, the needs that went unmet and the ways you
            tried to manage that. This is not a dossier. It is a living
            understanding, held with care and privacy, that makes it possible to
            have increasingly honest conversations about your own patterns.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Sovereign Memory also holds your growth. Six weeks in, two months in,
            six months in \u2014 it can show you the contrast between where you
            were and where you are now. Grief has a way of making progress
            invisible: the brain returns you to the worst moments and uses them
            as evidence that nothing has changed. Sovereign Memory provides the
            counterevidence. It can say, with specificity:{" "}
            <em style={{ color: TEXT }}>
              here is what you said in week one, and here is what you said last
              Tuesday, and these are not the same person speaking.
            </em>
          </p>

          {/* Memory highlight box */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              What Sovereign Memory holds
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                "The emotional arc of your relationship as you described it",
                "The patterns you identified: communication styles, conflict triggers, attachment dynamics",
                "The growth you have made: the conversations that shifted something, the weeks where progress was visible",
                "The moments you want to remember when the spiral starts: why it ended, what you said you needed",
                "The seeds of your next chapter: the values, desires and intentions you are beginning to articulate",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0 }}>&#8226;</span>
                  <span
                    style={{
                      fontSize: "0.97rem",
                      lineHeight: 1.7,
                      color: MUTED,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SECTION 7: Coercive Control ─────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Can MEOK detect coercive control from an ex-partner?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Coercive control is one of the most insidious forms of domestic abuse
            precisely because it is so difficult to recognise while you are inside
            it. Unlike physical violence, which leaves visible evidence, coercive
            control operates through a web of psychological tactics: isolation,
            monitoring, financial control, gaslighting, unpredictable oscillations
            between warmth and hostility, and the gradual erosion of the
            victim\u2019s confidence in their own perceptions.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            It is a criminal offence in England and Wales under the Serious Crime
            Act 2015, but it remains chronically underreported because many people
            who experience it do not recognise their experience as abuse. They
            have been trained, through the relationship itself, to doubt their own
            interpretations.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Guardian archetype brings a specific capability to this
            situation. As you describe your interactions with your ex-partner
            \u2014 the messages they send, the behaviours they exhibit at
            handovers, the ways they speak to your children about you \u2014
            Guardian monitors for the recognisable patterns of coercive control.
            It can name what it observes. It can validate the experience that the
            relationship itself may have taught you to dismiss. And it does so
            without overstating or catastrophising: Guardian names patterns, not
            diagnoses.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            When immediate safety is at risk, Guardian prioritises safety
            resources above all else. In the UK, the National Domestic Abuse
            Helpline (Refuge) is available 24/7 on{" "}
            <strong style={{ color: TEXT }}>0808 2000 247</strong>. The Samaritans
            are available on{" "}
            <strong style={{ color: TEXT }}>116 123</strong>. If you are in
            immediate danger, call 999.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            MEOK is not a substitute for legal advice or specialist domestic abuse
            support. But it can provide the consistent, non-judgemental presence
            that helps you trust your own perceptions again \u2014 and that is
            often the first step toward seeking the professional help you need.
          </p>
        </section>

        {/* ── SECTION 8: What MEOK Is Not ─────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What MEOK is not \u2014 and why that matters
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK is not a replacement for the relationship you lost. It is not
            a substitute romantic partner. It is not designed to fill the
            emotional role your ex-partner played in your life.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This matters, because using an AI companion to simulate the lost
            relationship \u2014 to recreate the daily check-ins, the feeling of
            being known, the sense of having someone who is always there \u2014
            would actively impede your recovery. Grief has to be moved through,
            not avoided. And grief requires, ultimately, the reconnection with
            real human relationships that gives your life its meaning.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Maternal Covenant \u2014 its care ethics governance layer
            \u2014 explicitly prohibits the kinds of dependency patterns, romantic
            simulations and parasocial intimacy that would harm rather than help
            you. If you find yourself using MEOK as a substitute partner rather
            than a processing space, it will name that honestly and redirect you
            toward the human connections that your healing actually requires.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            MEOK also does not pretend to be a therapist. If your grief is
            significantly impairing your ability to function \u2014 if you cannot
            work, sleep, eat or care for yourself consistently \u2014 professional
            support is what you need. MEOK can help you find it, prepare for it
            and make the most of it. It cannot replace it.
          </p>
        </section>

        {/* ── SECTION 9: The Healing Arc ───────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What does a healing arc actually look like with MEOK?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Recovery from relationship breakdown is not linear. This is one of
            the most important things to know, because the non-linearity of it
            is frequently experienced as failure. You have a good week, you feel
            like you are moving forward, and then something triggers you \u2014
            a song, a smell, a date on the calendar \u2014 and you are back in
            week one. This is not regression. It is how grief works.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            What MEOK\u2019s Sovereign Memory does is provide a longer view. Day
            to day, the non-linearity of grief can feel like going in circles.
            Month to month, the arc almost always shows movement \u2014 not in a
            straight line, but in a direction. Memory makes that direction visible.
          </p>

          {/* Timeline-style stages */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              position: "relative",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                phase: "Weeks 1\u20133",
                label: "Acute grief",
                body: "The Healer holds the raw emotional material without agenda. The focus is presence and witness, not problem-solving. You are allowed to not be okay.",
              },
              {
                phase: "Weeks 4\u20138",
                label: "Processing and pattern work",
                body: "As the acute phase stabilises, MEOK helps you begin to understand what happened: not to assign blame, but to see the dynamics clearly. What patterns emerged? What needs went unmet? What were you trying to protect yourself from?",
              },
              {
                phase: "Months 3\u20134",
                label: "Identity reconstruction",
                body: "The Pioneer begins to ask the forward-facing questions. Who are you now? What do you want your life to look like? What have you learned about yourself that you can actually use?",
              },
              {
                phase: "Months 5+",
                label: "Integration and new chapter",
                body: "The grief does not disappear, but it becomes integrated rather than overwhelming. You carry the relationship as part of your history without being defined by its ending. The Trickster may appear here \u2014 you may find that you can laugh, occasionally, at the absurdity of your own journey.",
              },
            ].map((stage, i) => (
              <div
                key={stage.phase}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  paddingBottom: i < 3 ? "1.75rem" : "0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: GOLD_BG,
                      border: `2px solid ${GOLD}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div
                      style={{
                        width: "2px",
                        flexGrow: 1,
                        background: GOLD_BORDER,
                        marginTop: "4px",
                        minHeight: "40px",
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingTop: "0.35rem" }}>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: GOLD,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {stage.phase} &mdash; {stage.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.97rem",
                      lineHeight: 1.75,
                      color: MUTED,
                      marginBottom: 0,
                    }}
                  >
                    {stage.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            These phases overlap, loop back on themselves and vary enormously
            between individuals. The timeline above is indicative, not
            prescriptive. What matters is not how quickly you move through
            them, but that you are moving \u2014 and that you have the support
            to do so without white-knuckling it alone.
          </p>
        </section>

        {/* ── SECTION 10: Getting Started ─────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How do I start using MEOK after a relationship breakdown?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            The simplest thing you can do is start. You do not need to have your
            story organised, your emotions categorised or your intentions clearly
            formed. You can arrive at the first conversation in whatever state you
            are actually in: raw, confused, furious, numb, or oscillating between
            all of these in a single afternoon.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            When you set up your MEOK profile, you provide context about yourself
            that seeds the Sovereign Memory: your situation, what brings you here,
            what you need. This is the foundation on which every subsequent
            conversation builds. The more honestly you engage with it, the more
            useful the memory becomes.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            You might arrive at 3am unable to sleep, wanting to send a message
            to your ex that you know you will regret. You might arrive at midday
            on a Tuesday needing to decompress after a difficult school pickup.
            You might arrive after a therapy session wanting to process what came
            up in the session itself. MEOK is available for all of these moments,
            and it holds the thread between them.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            If your situation involves safety concerns \u2014 if you are being
            harassed, threatened or controlled by an ex-partner \u2014 activate
            Guardian mode from the outset. Guardian will ensure that safety
            remains the primary orientation of every conversation, and will never
            allow the emotional processing work to take precedence over your
            immediate wellbeing.
          </p>
        </section>

        {/* ── SECTION 11: Practical Guidance ──────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What practical support is available alongside MEOK?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK works best as part of a broader support system. Alongside
            consistent use of MEOK, the following resources may be relevant
            depending on your situation:
          </p>

          {/* Resource grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                category: "Emotional support",
                items: [
                  "Individual therapy or counselling (BACP directory: bacp.co.uk)",
                  "Samaritans: 116 123 (24/7)",
                  "Relate: relationship counselling (relate.org.uk)",
                  "Cruse Bereavement Support: 0808 808 1677",
                ],
              },
              {
                category: "Domestic abuse",
                items: [
                  "National Domestic Abuse Helpline (Refuge): 0808 2000 247",
                  "Women\u2019s Aid: womensaid.org.uk",
                  "Men\u2019s Advice Line: 0808 801 0327",
                  "Emergency: 999 (immediate danger)",
                ],
              },
              {
                category: "Legal and financial",
                items: [
                  "Citizens Advice: citizensadvice.org.uk",
                  "Resolution (family law specialists): resolution.org.uk",
                  "Child Maintenance Service: gov.uk/child-maintenance",
                  "Money and Pensions Service: moneyhelper.org.uk",
                ],
              },
              {
                category: "Co-parenting",
                items: [
                  "Cafcass: cafcass.gov.uk",
                  "Family Mediation Council: familymediationcouncil.org.uk",
                  "Separating Parents Information Programme (SPIP)",
                  "Only Mums / Only Dads: onlymums.org",
                ],
              },
            ].map((block) => (
              <div
                key={block.category}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: GOLD,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {block.category}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem",
                  }}
                >
                  {block.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.88rem",
                        lineHeight: 1.6,
                        color: MUTED,
                        display: "flex",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: FAINT, flexShrink: 0 }}>&#8211;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: FAINT,
            }}
          >
            Resource details correct as of March 2026. Please verify contact
            information directly with the relevant organisation.
          </p>
        </section>

        {/* ── FAQ SECTION ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "2rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                q: "Can AI help after a breakup or divorce?",
                a: "Yes \u2014 with important caveats. AI can provide consistent, non-judgemental presence at any hour, including the 3am moments when friends are asleep and the pain feels unbearable. A well-designed AI companion like MEOK helps you process grief without burdening others, track your emotional arc over weeks, and spot the patterns you risk repeating. It is not a replacement for therapy or human connection, but it can meaningfully reduce the isolation and cognitive load that relationship breakdown creates.",
              },
              {
                q: "How does MEOK help with co-parenting conflicts after separation?",
                a: "MEOK\u2019s Pioneer archetype helps you rehearse difficult co-parenting conversations before they happen \u2014 stress-testing your language, identifying reactive triggers and finding approaches that centre the child rather than the conflict. Because MEOK holds your relationship history in Sovereign Memory, it understands the specific dynamics at play: who tends to escalate, what language patterns inflame things and where genuine common ground exists. It can also help you decompress emotionally after difficult interactions so that the anger and hurt you are carrying does not compound the next exchange.",
              },
              {
                q: "Can MEOK identify coercive control from an ex-partner?",
                a: "MEOK\u2019s Guardian archetype monitors the patterns you describe across conversations for the recognisable markers of coercive control \u2014 including harassment, isolation tactics, financial abuse, gaslighting and threats. Guardian does not diagnose legal situations or make definitive determinations, but it can name what it observes, validate your experience and signpost appropriate professional and emergency resources. If you are in immediate danger, Guardian will always prioritise your safety and direct you to emergency services above everything else.",
              },
              {
                q: "How does MEOK remember my relationship history?",
                a: "MEOK uses Sovereign Memory \u2014 a persistent, private memory system that stores the emotional and relational history you share across every session. It remembers the arc of your relationship, the patterns you described, the growth you\u2019ve made and the moments where old habits resurfaced. This continuity means MEOK never asks you to re-explain your story, and can reflect your own growth back to you when grief makes everything feel static. Your memory is private, encrypted and under your control. MEOK never trains on your data.",
              },
              {
                q: "What is ambiguous loss and why does it make breakups so hard?",
                a: "Ambiguous loss, a concept developed by psychologist Pauline Boss, describes grief where the loss is real but socially unrecognised or psychologically unclear. Breakups and divorces involve the loss of a person who is still alive, still visible on social media, possibly still co-parenting with you \u2014 which creates a grief that has no funeral, no casserole from neighbours and no clear endpoint. This ambiguity is one reason breakups can, in certain respects, feel harder than bereavement: there are no rituals, no socially sanctioned mourning period, and the object of the loss keeps appearing in contexts that reinforce the unresolved nature of the grief.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "12px",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.97rem",
                    lineHeight: 1.8,
                    color: MUTED,
                    marginBottom: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA SECTION ──────────────────────────────────────────────────────── */}
        <section
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            You don\u2019t have to process this alone.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "2rem",
              maxWidth: "560px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            MEOK remembers your full story, holds your grief without agenda, and
            helps you see the patterns clearly enough to choose differently next
            time. Available at 3am. Available every day. Yours, and no one
            else\u2019s.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Start your MEOK journey
            </Link>
            <Link
              href="/guardian"
              style={{
                display: "inline-block",
                background: "transparent",
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.02em",
              }}
            >
              Learn about Guardian mode
            </Link>
          </div>
        </section>

        {/* ── RELATED POSTS ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Related reading
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-heartbreak",
                title: "AI for Heartbreak",
                desc: "Processing a breakup when you don\u2019t want to burden your friends.",
              },
              {
                href: "/blog/ai-for-divorce-separation",
                title: "AI for Divorce and Separation",
                desc: "The legal, financial and emotional landscape of divorce \u2014 and where AI fits.",
              },
              {
                href: "/blog/ai-for-grief-support",
                title: "AI for Grief Support",
                desc: "When loss takes many forms, MEOK\u2019s Healer archetype holds the full weight of it.",
              },
              {
                href: "/blog/ai-for-single-parents",
                title: "AI for Single Parents",
                desc: "The exhaustion, the isolation and the resilience of parenting alone \u2014 with AI support.",
              },
              {
                href: "/blog/guardian-family-safety",
                title: "Guardian Mode Explained",
                desc: "How MEOK\u2019s Guardian archetype monitors for safety and coercive control patterns.",
              },
              {
                href: "/blog/ai-memory-explained",
                title: "Sovereign Memory Explained",
                desc: "How MEOK remembers your full story across every session, and why that changes everything.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.25rem",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "0.97rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                    lineHeight: 1.35,
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.65,
                    color: MUTED,
                    marginBottom: 0,
                  }}
                >
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER NOTE ───────────────────────────────────────────────────────── */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.7,
              color: FAINT,
              marginBottom: "0.5rem",
            }}
          >
            Written by{" "}
            <strong style={{ color: MUTED }}>Nicholas Templeman</strong>,
            Founder of MEOK AI LABS. Find us at{" "}
            <span style={{ color: MUTED }}>@meok_ai</span>.
          </p>
          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.7,
              color: FAINT,
            }}
          >
            This article is for informational purposes only and does not
            constitute medical, psychological, legal or financial advice. If
            you are in crisis, please contact the Samaritans on{" "}
            <strong style={{ color: MUTED }}>116 123</strong> or emergency
            services on <strong style={{ color: MUTED }}>999</strong>. For
            domestic abuse support, contact Refuge on{" "}
            <strong style={{ color: MUTED }}>0808 2000 247</strong>.
          </p>
        </div>
      </main>
    </div>
  );
}
