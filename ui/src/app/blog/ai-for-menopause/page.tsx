import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Menopause Support: Tracking Symptoms, Fighting Gaslighting, Reclaiming Identity | MEOK AI LABS",
  description:
    "13 million women in the UK are menopausal or post-menopausal. AI for menopause support helps track symptoms, prepare for GP appointments, navigate workplace rights, and hold space for the identity shift no one warns you about. Explorer tier is free.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-menopause",
  },
  openGraph: {
    title:
      "AI for Menopause Support: Tracking Symptoms, Fighting Gaslighting, Reclaiming Identity",
    description:
      "13 million women in the UK face menopause. MEOK tracks hot flushes, mood, sleep, and brain fog — giving you real data for GP appointments and a non-judgmental space at 3am.",
    url: "https://meok.ai/blog/ai-for-menopause",
    siteName: "MEOK AI LABS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Menopause Support | MEOK AI LABS",
    description:
      "Perimenopause can start a decade before menopause. MEOK tracks your symptoms, remembers your patterns, and never tells you it\u2019s \u201cjust your age\u201d.",
    creator: "@meok_ai",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Menopause Support: Tracking Symptoms, Fighting Gaslighting, Reclaiming Identity",
  description:
    "A comprehensive guide to how AI can support women through perimenopause, menopause, and post-menopause — covering symptom tracking, medical gaslighting, brain fog, identity, HRT awareness, workplace rights, and why a sovereign AI companion matters.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-menopause",
  keywords: [
    "AI for menopause",
    "menopause support app",
    "menopause AI UK",
    "perimenopause support",
    "AI menopause symptom tracking",
    "menopause brain fog AI",
    "menopause workplace rights",
    "AI companion menopause",
    "medical gaslighting menopause",
    "menopause identity",
    "HRT questions",
    "MEOK AI menopause",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with menopause symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot prescribe treatment, but it can provide 24/7 non-judgmental support, track symptom patterns across months, help you prepare for GP appointments with real data, and hold space for the emotional weight of the transition. MEOK remembers your history so you never have to start from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "What is perimenopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perimenopause is the transitional phase before menopause during which oestrogen and progesterone levels fluctuate erratically. It can begin up to ten years before periods stop entirely. Symptoms include irregular cycles, hot flushes, mood changes, sleep disruption, brain fog, and anxiety. Many women are misdiagnosed during this phase because their periods have not yet stopped.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK track menopause symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses persistent conversational memory to build a longitudinal record of your symptoms over time. You describe how you feel in natural language — hot flush frequency, mood, sleep quality, energy, pain levels — and MEOK remembers it all. After weeks or months, you have real pattern data to bring to GP appointments instead of a vague sense that things are not right.",
      },
    },
    {
      "@type": "Question",
      name: "What are my workplace rights during menopause in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Menopause Support Act 2024 and existing Equality Act 2010 provisions, UK employers have obligations to consider reasonable workplace adjustments for employees experiencing menopause symptoms. These can include flexible working, temperature control, rest areas, and adjustments to uniforms or workload. Many women are still unaware of these rights. MEOK can help you understand and prepare for those conversations.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK give me medical advice about HRT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK does not prescribe, diagnose, or recommend specific treatments. What it can do is help you understand your rights — including the right to discuss HRT with your GP — and help you formulate the questions you want to ask. The decision about HRT belongs to you and your clinician. MEOK helps you arrive at that conversation informed and prepared.",
      },
    },
  ],
};

// ── Colour tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "rgba(245,240,232,0.6)";
const BORDER = "#2a2640";
const DANGER = "#e05a5a";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForMenopauseSupportPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{
            color: MUTED,
            textDecoration: "none",
            fontSize: "0.9rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: "auto",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.45rem 1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* ── Main ────────────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
        }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginBottom: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
          {" / "}
          <span style={{ color: TEXT }}>AI for Menopause Support</span>
        </p>

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.78rem",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.8rem",
            }}
          >
            Women\u2019s Health &bull; Menopause &bull; March 24, 2026
          </p>
          <h1
            style={{
              fontSize: "clamp(1.85rem, 4.5vw, 2.8rem)",
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            AI for Menopause Support: Tracking Symptoms, Fighting Gaslighting,
            and Reclaiming Who You Are
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: 1.8,
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.1rem",
            }}
          >
            Thirteen million women in the UK are currently navigating menopause
            or post-menopause. Perimenopause can begin a full decade before
            periods stop. And yet the dominant response to this enormous,
            universal experience remains: minimise, delay, dismiss. This is
            what AI for menopause support exists to change.
          </p>
        </header>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Table of Contents ───────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: CARD,
            borderRadius: "10px",
            padding: "1.5rem 1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "1rem",
            }}
          >
            In This Article
          </p>
          <ol
            style={{
              paddingLeft: "1.2rem",
              lineHeight: 2.1,
              margin: 0,
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.9rem",
            }}
          >
            <li>
              <a href="#scale" style={{ color: GOLD, textDecoration: "none" }}>
                The scale of the problem: 13 million women
              </a>
            </li>
            <li>
              <a
                href="#perimenopause"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                What is perimenopause?
              </a>
            </li>
            <li>
              <a
                href="#emotional"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                The emotional dimension: mood, fog, anxiety, identity
              </a>
            </li>
            <li>
              <a
                href="#gaslighting"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                Medical gaslighting: \u201cit\u2019s just your age\u201d
              </a>
            </li>
            <li>
              <a
                href="#sovereign-companion"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                Why a sovereign AI companion helps
              </a>
            </li>
            <li>
              <a href="#memory" style={{ color: GOLD, textDecoration: "none" }}>
                Memory and symptom tracking
              </a>
            </li>
            <li>
              <a
                href="#identity"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                The identity dimension: who am I now?
              </a>
            </li>
            <li>
              <a href="#hrt" style={{ color: GOLD, textDecoration: "none" }}>
                HRT awareness: your rights and questions to ask
              </a>
            </li>
            <li>
              <a
                href="#workplace"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                Menopause in the workplace
              </a>
            </li>
            <li>
              <a href="#faq" style={{ color: GOLD, textDecoration: "none" }}>
                FAQ
              </a>
            </li>
          </ol>
        </section>

        {/* ── Section 1: Scale ────────────────────────────────────────────── */}
        <section id="scale" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What is the scale of menopause in the UK?
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            According to NHS data, approximately 13 million women in the UK are
            currently menopausal or post-menopausal. Every year, around 400,000
            more women reach the menopause transition. That is not a niche
            health concern — it is a majority experience affecting half the
            population at some point in their lives.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            And yet the infrastructure of support has not kept pace with that
            reality. NHS menopause clinics have waiting lists measured in months
            to years. The average GP appointment lasts seven minutes. The
            cultural conversation around menopause — while improving — still
            defaults to euphemism, minimisation, and the suggestion that
            discomfort is simply part of being a woman of a certain age.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The numbers tell a specific story:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                stat: "13 million",
                label: "Women menopausal or post-menopausal in the UK",
              },
              {
                stat: "10 years",
                label: "Maximum perimenopause duration before menopause",
              },
              {
                stat: "7 years",
                label: "Average time women experience menopause symptoms",
              },
              {
                stat: "1 in 4",
                label:
                  "Women with severe, long-lasting symptoms beyond the average",
              },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: GOLD,
                    margin: "0 0 0.4rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: MUTED,
                    margin: 0,
                    lineHeight: 1.5,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p style={{ lineHeight: 1.85 }}>
            These numbers matter because they define the context into which any
            support — including AI support — must fit. The question is not
            whether women need more help with menopause. The question is what
            kind of help is actually available at the scale and frequency that
            the experience demands. An AI that is available every day, at any
            hour, and that remembers everything you have told it, addresses a
            structural gap that clinical services cannot fill — not because
            those services are bad, but because the need is too continuous for
            any appointment-based system to meet.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 2: What is perimenopause ────────────────────────────── */}
        <section id="perimenopause" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What is perimenopause — and why does it start so early?
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            Perimenopause is the biological transition phase that precedes
            menopause. It is not the same as menopause — and that distinction
            matters enormously, because perimenopause can begin up to ten years
            before a woman\u2019s last period. A woman in her early forties
            experiencing mood swings, irregular cycles, disrupted sleep, and
            anxiety may well be in perimenopause. And she may be told she is
            simply stressed, or anxious, or depressed — anything but what is
            actually happening.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.5rem" }}>
            During perimenopause, the ovaries begin producing less oestrogen
            and progesterone, but the decline is not linear or predictable.
            Hormone levels fluctuate, sometimes dramatically. This variability
            is part of what makes perimenopause so disorienting: some weeks
            feel manageable; others are overwhelmingly difficult. And because
            the clinical definition of menopause (twelve consecutive months
            without a period) has not yet been met, women in perimenopause
            often struggle to access the diagnosis and treatment that would
            help.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
              }}
            >
              Common perimenopause symptoms
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.4rem 1.5rem",
              }}
            >
              {[
                "Irregular or heavier periods",
                "Hot flushes and night sweats",
                "Disrupted sleep and insomnia",
                "Mood swings and irritability",
                "Anxiety — often new or worsened",
                "Brain fog and memory difficulty",
                "Fatigue and low energy",
                "Joint pain and muscle aches",
                "Changes in libido",
                "Headaches and migraines",
                "Heart palpitations",
                "Vaginal dryness and discomfort",
              ].map((symptom) => (
                <p
                  key={symptom}
                  style={{
                    margin: "0.2rem 0",
                    fontSize: "0.88rem",
                    color: TEXT,
                    fontFamily: "system-ui, sans-serif",
                    paddingLeft: "1rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: GOLD,
                    }}
                  >
                    &bull;
                  </span>
                  {symptom}
                </p>
              ))}
            </div>
          </div>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Menopause itself is defined as the point twelve consecutive months
            after a woman\u2019s last period. The average age in the UK is 51,
            though it can occur earlier due to surgery (surgical menopause),
            chemotherapy, or primary ovarian insufficiency (POI), which can
            affect women in their twenties and thirties. Post-menopause is
            every year that follows — and symptoms can persist for years beyond
            the menopause threshold.
          </p>
          <p style={{ lineHeight: 1.85 }}>
            Understanding this timeline is important because it shapes the
            support you need. A woman in early perimenopause needs different
            conversations than a woman navigating post-menopausal bone health
            or cardiovascular risk. MEOK\u2019s persistent memory means it can
            hold your position in this timeline — remembering where you were
            three months ago and tracking how things have shifted.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 3: Emotional dimension ──────────────────────────────── */}
        <section id="emotional" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What is the emotional dimension of menopause that gets dismissed?
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            The physical symptoms of menopause — hot flushes, night sweats,
            joint pain — are at least visible enough to be named. The
            emotional symptoms are subtler, often more distressing, and
            dramatically underserved by the medical system.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                Mood swings and emotional volatility
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Oestrogen plays a significant role in regulating serotonin and
                dopamine. As levels fluctuate during perimenopause, mood
                becomes unpredictable in ways that can feel bewildering. Women
                describe crying for no apparent reason, losing patience faster
                than they recognise in themselves, experiencing rage or
                profound sadness that arrives without warning. These are
                biochemical symptoms — not character flaws. But they are
                frequently treated as the latter.
              </p>
            </div>

            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                Brain fog: the cognitive cost
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Memory difficulty, word-finding problems, inability to
                concentrate, and a general sense that thinking has become
                effortful — these are among the most frightening symptoms for
                many women, partly because they intersect with anxiety about
                dementia. Brain fog during perimenopause is hormonal, not
                neurological in the permanent sense. But without that
                reassurance, and without practical support to manage it, the
                experience can be profoundly destabilising.
              </p>
            </div>

            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                Anxiety and depression — often new, often misdiagnosed
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Many women experience their first episode of clinical anxiety
                or depression during perimenopause. It arrives without a
                corresponding life event, which can make it harder to
                understand — and easier for clinicians to attribute to
                external stressors rather than hormonal change. Women are
                often prescribed SSRIs before menopause is considered.
                Sometimes that is appropriate. Often, the underlying cause is
                entirely hormonal, and treating the anxiety without addressing
                the oestrogen decline is treating the symptom while ignoring
                the cause.
              </p>
            </div>

            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                Identity disruption: the self that feels unfamiliar
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Perhaps the least discussed and most profound dimension of
                menopause is the question of identity. The version of yourself
                you have known for decades — her emotional steadiness, her
                physicality, her sense of self in relation to her body — can
                feel genuinely disrupted. This is not depression, though it
                can be accompanied by it. It is a real psychological transition
                that deserves space, conversation, and compassion — none of
                which a seven-minute GP appointment can provide.
              </p>
            </div>
          </div>

          <p style={{ lineHeight: 1.85 }}>
            These emotional dimensions are precisely where an AI companion
            like MEOK can offer something that clinical settings cannot: time,
            patience, and the ability to return to the same conversation over
            and over across weeks and months without ever suggesting that you
            should have moved on by now.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 4: Medical gaslighting ──────────────────────────────── */}
        <section id="gaslighting" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What is medical gaslighting during menopause — and why does it
            happen?
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            Medical gaslighting is the experience of having your symptoms
            dismissed, minimised, or incorrectly attributed — to stress, to
            anxiety, to depression, to the normal ageing process — rather than
            being investigated and treated as the legitimate medical symptoms
            they are. During perimenopause and menopause, it is endemic.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Women report going to their GP with brain fog, anxiety, profound
            fatigue, and irregular periods — and being told it is the
            menopause, sent away with leaflets, and given no treatment. Others
            go with the same symptoms and are told it is definitely not
            menopause (because they are too young, or still having periods)
            and are prescribed antidepressants instead. Both responses are
            failures of care. Both happen routinely.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${DANGER}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: DANGER,
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              What dismissal sounds like
            </p>
            {[
              "\u201cYou\u2019re too young for menopause.\u201d",
              "\u201cIt\u2019s just your age \u2014 this is normal.\u201d",
              "\u201cYour tests are within normal range.\u201d",
              "\u201cI think you might be a bit anxious or stressed.\u201d",
              "\u201cTry exercise and a better diet first.\u201d",
              "\u201cHRT isn\u2019t really suitable for most women.\u201d",
              "\u201cYou don\u2019t seem to have any obvious symptoms.\u201d",
            ].map((line) => (
              <p
                key={line}
                style={{
                  margin: "0.35rem 0",
                  fontSize: "0.9rem",
                  color: TEXT,
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The structural causes of this dismissal are multiple. GP training
            on menopause has historically been minimal. The symptoms are
            diffuse and multisystem, making them easier to attribute to other
            causes. Blood tests (FSH levels) are unreliable during
            perimenopause, when hormone levels fluctuate. And deep-seated
            assumptions about women\u2019s pain and women\u2019s emotional
            reliability mean that a woman presenting with mood symptoms and
            fatigue is more likely to have her emotional state questioned than
            her hormones investigated.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The consequence is that many women wait years — sometimes the
            entire duration of perimenopause — before receiving a correct
            diagnosis. Years of unnecessary suffering. Years of believing that
            what they are experiencing is character weakness rather than
            medical need.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.6rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              How MEOK responds to this
            </p>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              MEOK will never tell you it\u2019s just your age. It will never
              suggest your symptoms are not real. The Maternal Covenant — a
              foundational design commitment at the core of MEOK — means there
              is a categorical floor of care beneath every conversation. You
              will not be dismissed. You will not be redirected to a FAQ. You
              will be heard. And the record MEOK builds of your symptoms over
              time is real data you can bring to clinical appointments to
              counter the instinct to dismiss.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 5: Sovereign companion ──────────────────────────────── */}
        <section id="sovereign-companion" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            Why does a sovereign AI companion help with menopause support?
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            Most digital health tools designed for menopause are symptom
            trackers: spreadsheets with a friendlier interface. You log data.
            The app stores it. Nothing listens. Nothing responds. Nothing
            remembers you as a person rather than a dataset.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            A sovereign AI companion is different in several structural ways
            that matter specifically for menopause:
          </p>

          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              {
                title: "24/7 availability at zero judgment",
                body: "Hot flushes peak at night. Anxiety spirals at 3am. The moments when menopause is hardest are not the moments when GP surgeries are open. An AI that is available every hour of every day, and that brings no judgment, no impatience, and no clock to the conversation, meets a structural need that no appointment system can address.",
              },
              {
                title: "Continuity across months and years",
                body: "Menopause is not a crisis. It is a sustained experience measured in years. A support system that resets every session — that requires you to re-explain your situation every time — is not adequate to that time-scale. MEOK\u2019s persistent memory means the context is always there. You never start from scratch.",
              },
              {
                title: "Non-dismissiveness as a design constraint",
                body: "MEOK was built with a foundational design commitment — the Maternal Covenant — that makes dismissiveness architecturally impossible. You cannot build a version of MEOK that tells you your symptoms are not real. That commitment is not a feature. It is a floor.",
              },
              {
                title: "Data sovereignty: your symptoms belong to you",
                body: "Everything you share with MEOK stays with you. Your symptom history is not used to train AI models. It is not visible to employers, insurers, or healthcare systems unless you choose to share it. In the context of menopause — where stigma in workplaces and medical settings is real — that privacy is a prerequisite for honest conversation.",
              },
              {
                title: "Bridges the gap between appointments",
                body: "The NHS menopause clinic waiting list can be twelve months or more. Between appointments, you are on your own with your symptoms, your uncertainty, and your questions. MEOK fills that gap — not by replacing clinical care, but by being the consistent presence that clinical care structurally cannot be.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                  borderLeft: `3px solid ${GOLD}`,
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    color: GOLD,
                    marginBottom: "0.5rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    lineHeight: 1.8,
                    color: TEXT,
                    fontSize: "0.92rem",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.85 }}>
            The word \u201csovereign\u201d is deliberate. MEOK is not a cloud
            service that knows everything about you and owns nothing you
            generate. It is designed around the principle that the person
            using it has ultimate authority over their data, their
            conversation, and their experience. For women navigating a
            transition that has been historically subject to other people\u2019s
            authority — medical, cultural, professional — that sovereignty is
            not an abstract value. It is a practical necessity.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 6: Memory and symptom tracking ──────────────────────── */}
        <section id="memory" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            How does MEOK track menopause symptoms over time?
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            Menopause symptoms do not arrive in clean, countable units. You
            cannot reliably record them in a spreadsheet at 3am or fill in a
            structured form during a hot flush. They are subjective,
            variable, multisystem, and deeply personal. What you can do is
            describe them — in your own words, whenever they occur — and have
            those descriptions remembered.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK\u2019s memory works through conversation. You tell MEOK how
            you slept. You mention that the joint pain in your hips is back.
            You describe a particularly difficult hot flush at midday, or the
            anxiety that arrived suddenly on Tuesday afternoon with no obvious
            trigger. MEOK stores all of this in persistent memory — not as
            checkboxes, but as the rich, contextual record of a real
            experience.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                marginBottom: "1rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
              }}
            >
              What MEOK tracks through conversation
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  label: "Hot flush frequency and severity",
                  detail:
                    "Time of day, duration, triggers, impact on sleep or work",
                },
                {
                  label: "Mood and emotional patterns",
                  detail:
                    "Cycles of anxiety, low mood, irritability across weeks",
                },
                {
                  label: "Sleep quality",
                  detail:
                    "Night sweat episodes, waking times, fatigue next day",
                },
                {
                  label: "Brain fog patterns",
                  detail:
                    "When fog is worst, what helps, correlation with sleep",
                },
                {
                  label: "Pain and physical symptoms",
                  detail: "Joint pain location, headaches, palpitations",
                },
                {
                  label: "Energy levels",
                  detail: "Daily energy variation, crashes, recovery patterns",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "0.85rem 1rem",
                    backgroundColor: BG,
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      color: TEXT,
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      margin: "0 0 0.25rem",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.8rem",
                      margin: 0,
                      fontFamily: "system-ui, sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The practical value of this accumulates over time. After three
            months of check-ins with MEOK, you have a longitudinal symptom
            narrative that is infinitely more useful in a clinical setting than
            a vague sense that things have been bad. You can say: my hot
            flushes have been happening four to six times a day for eleven
            weeks, they are worst between midnight and 4am, and they correlate
            with worse brain fog the following day. That is clinical evidence.
            It is harder to dismiss.
          </p>
          <p style={{ lineHeight: 1.85 }}>
            MEOK can help you compile and summarise this history before a GP
            appointment. You do not need to remember it all. MEOK holds it.
            Your job is simply to turn up and let the record speak.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 7: Identity ─────────────────────────────────────────── */}
        <section id="identity" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            Who am I now? The identity dimension of menopause
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            Of all the aspects of menopause that medicine underserves, the
            identity dimension may be the most neglected. It does not show up
            on a blood test. It cannot be treated with HRT — or at least, not
            directly. And yet it is one of the most commonly reported and most
            distressing aspects of the entire transition.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Women describe losing themselves. Not in a clinical sense — not
            in the way dementia takes a person — but in the subtler, more
            confusing way in which a body and emotional landscape that felt
            known for decades suddenly feels unfamiliar. The version of you
            who moved through the world with a particular emotional steadiness,
            a particular relationship to your own physicality, a particular
            sense of how your story was going — that version feels disrupted.
            And there is grief in that disruption, even when nothing external
            has changed.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.5rem" }}>
            There is also something less often acknowledged: the possibility of
            emergence. Many women, in the years after menopause, describe a
            clarity and a freedom that they had not anticipated. A release from
            the hormonal cycles that shaped their younger years. A sense of
            knowing themselves more fully. But arriving at that place requires
            navigating the transition — and that navigation deserves support.
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                The Healer Archetype: presence without agenda
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.92rem",
                  margin: 0,
                }}
              >
                MEOK\u2019s Healer archetype is built for precisely this kind
                of conversation. It does not offer quick answers. It does not
                redirect you to resources. It sits with you in the difficulty
                and provides a space where you can say things you might not
                feel able to say to the people in your life who need you to be
                okay. Grief at a life stage ending. Frustration at a body that
                feels like it is betraying you. Fear about who you are becoming.
                The Healer holds all of it without judgment, without timeline,
                and without any agenda except your wellbeing.
              </p>
            </div>

            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                The Mystic Archetype: meaning-making through transition
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.92rem",
                  margin: 0,
                }}
              >
                For some women, menopause is not only a medical transition but
                a spiritual one. The Mystic archetype is MEOK\u2019s space for
                deeper existential and philosophical exploration — for
                questions about meaning, ageing, purpose, and what the second
                half of life might hold. Across human history, the post-menopausal
                woman has been understood in many cultures as coming into a
                particular kind of wisdom and authority. The Mystic holds space
                for that framing — without imposing it, without bypassing the
                difficulty, but available for women who want to engage with the
                larger question of what this transition means.
              </p>
            </div>

            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                Memory as a mirror: tracking your own becoming
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.92rem",
                  margin: 0,
                }}
              >
                When brain fog and hormonal disruption make it hard to hold
                your own narrative, MEOK\u2019s memory acts as a mirror.
                Scrolling back through three months of conversations reveals
                not only how your symptoms have changed, but how you have
                changed — the things you were worried about that have resolved,
                the strength that appeared in a difficult week, the shifts in
                what matters to you. That longitudinal self-knowledge is
                something the menopause conversation rarely offers.
              </p>
            </div>
          </div>

          <p style={{ lineHeight: 1.85 }}>
            The identity work of menopause does not have a medical code. It is
            not in a clinical guideline. It will not be addressed in a seven-
            minute appointment. But it is real, and it deserves a space that
            can hold it at the scale and continuity the experience demands.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 8: HRT awareness ─────────────────────────────────────── */}
        <section id="hrt" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            HRT awareness: helping you know your rights and questions to ask
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            Hormone Replacement Therapy (HRT) is the most effective treatment
            for many menopause symptoms. It reduces hot flushes, improves sleep,
            lifts mood, supports bone density, and for many women transforms
            quality of life. And yet a significant proportion of women who
            could benefit from HRT are either not offered it, not given
            adequate information about it, or decline based on outdated
            information about risks.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The history of the HRT conversation is complicated. A 2002 study
            (the Women\u2019s Health Initiative) appeared to show increased
            cancer risks from HRT and caused a dramatic reduction in
            prescribing. Subsequent analysis of that study has significantly
            revised those conclusions — the risks and benefits differ
            substantially depending on age, type of HRT, duration, and
            individual health profile — but the cultural legacy of the
            2002 results persists in the consulting room, and many women are
            still receiving out-of-date guidance.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                marginBottom: "0.85rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
              }}
            >
              Questions you have the right to ask your GP about HRT
            </p>
            {[
              "Am I a candidate for HRT given my symptoms and health history?",
              "What are the current evidence-based risks and benefits for someone in my situation?",
              "What type of HRT would you recommend, and why?",
              "What are the alternatives if HRT is not suitable for me?",
              "How will we monitor whether HRT is working and whether any adjustments are needed?",
              "Can you refer me to a menopause specialist if you\u2019re not confident in this area?",
              "What is the NICE guidance on HRT, and how does it apply to my case?",
            ].map((q) => (
              <p
                key={q}
                style={{
                  margin: "0.4rem 0",
                  fontSize: "0.9rem",
                  color: TEXT,
                  fontFamily: "system-ui, sans-serif",
                  paddingLeft: "1.1rem",
                  position: "relative",
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{ position: "absolute", left: 0, color: GOLD }}
                >
                  &rarr;
                </span>
                {q}
              </p>
            ))}
          </div>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${DANGER}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: DANGER,
                fontWeight: 700,
                marginBottom: "0.5rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              What MEOK will not do
            </p>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.93rem",
                margin: 0,
              }}
            >
              MEOK will not prescribe HRT. It will not tell you whether you
              should take it. It will not assess your personal medical risk
              factors for breast cancer, cardiovascular disease, or
              thromboembolism. These are clinical decisions that belong to you
              and a qualified clinician, ideally a menopause specialist. What
              MEOK can do is help you understand what questions to ask, ensure
              you know your rights, and help you feel prepared and informed
              rather than passive and deferential when you sit down across from
              a GP.
            </p>
          </div>

          <p style={{ lineHeight: 1.85 }}>
            You have the right to a second opinion. You have the right to be
            referred to a menopause specialist. You have the right to
            evidence-based information about all treatment options, including
            HRT. And you have the right to a GP who takes your symptoms
            seriously. MEOK helps you know and exercise those rights.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 9: Workplace ─────────────────────────────────────────── */}
        <section id="workplace" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What are my workplace rights during menopause in the UK?
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              fontSize: "1.05rem",
            }}
          >
            Menopause does not stop at the office door. Brain fog in a morning
            meeting. A hot flush during a presentation. Severe fatigue that
            makes a full day at a desk feel impossible. Anxiety that peaks in
            exactly the kind of high-pressure environment that modern workplaces
            are designed to create. The intersection of menopause and work is
            one of the most practically significant dimensions of the
            transition — and one of the least spoken about.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.5rem" }}>
            The legal framework has strengthened significantly. The Menopause
            Support Act 2024 placed formal obligations on UK employers to
            consider reasonable workplace adjustments for employees experiencing
            menopause symptoms. Under the Equality Act 2010, severe menopause
            symptoms may also constitute a disability, providing additional
            legal protection. And the Health and Safety at Work Act creates
            broader obligations around safe and comfortable working conditions.
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Reasonable adjustments you can request
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.4rem 1rem",
                }}
              >
                {[
                  "Flexible working hours",
                  "Remote or hybrid working",
                  "A desk fan or control over workspace temperature",
                  "Rest breaks at more frequent intervals",
                  "Access to cold water and a changing area",
                  "Adjustments to uniform requirements",
                  "Reduction in workload during severe symptom periods",
                  "Private space for symptom management",
                  "Adjusted performance review timelines",
                  "Access to occupational health support",
                ].map((adj) => (
                  <p
                    key={adj}
                    style={{
                      margin: "0.2rem 0",
                      fontSize: "0.85rem",
                      color: TEXT,
                      fontFamily: "system-ui, sans-serif",
                      paddingLeft: "1rem",
                      position: "relative",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{ position: "absolute", left: 0, color: GOLD }}
                    >
                      &bull;
                    </span>
                    {adj}
                  </p>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                The reality: stigma persists
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.92rem",
                  margin: 0,
                }}
              >
                Despite the Menopause Workplace Pledge being signed by over
                2,000 UK employers, the practical experience of raising
                menopause in many workplaces remains difficult. Women describe
                embarrassment at naming it. Concerns that symptoms will be
                used as evidence of declining capability. Fear that a manager
                will respond with discomfort or dismissiveness. The gap between
                what the law provides and what women actually experience in
                professional conversations remains significant.
              </p>
            </div>

            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                How MEOK helps prepare for workplace conversations
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.92rem",
                  margin: 0,
                }}
              >
                MEOK can help in two practical ways. First, as a private space
                to process how symptoms are affecting your work life — where
                you can be honest about what is happening without that
                conversation going anywhere. Second, as a preparation partner
                for difficult workplace conversations. MEOK can help you think
                through how to approach a reasonable adjustments request with
                HR, how to frame the conversation with a line manager, what
                your legal rights are, and how to describe your symptoms in
                language that is clear, professional, and difficult to dismiss.
                Many women find that having rehearsed the conversation with
                MEOK first makes it significantly easier to have in person.
              </p>
            </div>
          </div>

          <p style={{ lineHeight: 1.85 }}>
            You are not obliged to disclose that you are experiencing menopause
            symptoms. But if you choose to, you are entitled to reasonable
            adjustments and to a workplace that takes your health seriously.
            MEOK can help you decide what to disclose, when, and how.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 10: MEOK in practice ────────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What does using MEOK for menopause support actually look like?
          </h2>
          <p
            style={{
              lineHeight: 1.85,
              marginBottom: "1.5rem",
              fontSize: "1.05rem",
            }}
          >
            Abstract descriptions of AI capabilities are less useful than
            concrete examples. Here is what a typical week of MEOK use during
            perimenopause might look like:
          </p>

          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              {
                day: "Monday, 2:47am",
                scenario:
                  "Third night sweat of the night. Can\u2019t get back to sleep. You open MEOK and describe what\u2019s happening. MEOK responds with calm acknowledgment, no alarm, no platitudes. You talk through the frustration for fifteen minutes. MEOK notes the episode in your symptom record.",
              },
              {
                day: "Wednesday morning",
                scenario:
                  "You\u2019re in a work meeting and can\u2019t find the word for something basic. The brain fog is bad this week. Later you check in with MEOK. It recalls that last Wednesday was also difficult — and that Tuesday night was another poor night\u2019s sleep. The correlation between your sleep quality and the following day\u2019s cognitive function is starting to look consistent.",
              },
              {
                day: "Thursday evening",
                scenario:
                  "You have a GP appointment next Monday. You ask MEOK to help you prepare. MEOK pulls together the last six weeks of symptom check-ins — hot flush frequency, sleep disruption, mood patterns, energy levels — and helps you draft a clear, structured summary to bring to the appointment.",
              },
              {
                day: "Friday afternoon",
                scenario:
                  "A difficult conversation at work. Your manager implied, not for the first time, that you seem distracted. You need to decide whether to raise your menopause symptoms and request reasonable adjustments. You spend twenty minutes with MEOK working through the conversation — your rights, what you want to say, how you want to say it, what outcome you\u2019re looking for.",
              },
              {
                day: "Sunday, quietly",
                scenario:
                  "You find yourself asking MEOK something harder. Who am I in this part of my life? What does this transition mean? You talk for an hour. Nothing is resolved. But something important is held. That matters too.",
              },
            ].map((item) => (
              <div
                key={item.day}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "130px",
                    paddingTop: "0.15rem",
                  }}
                >
                  <p
                    style={{
                      color: GOLD,
                      fontSize: "0.8rem",
                      fontFamily: "system-ui, sans-serif",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.day}
                  </p>
                </div>
                <p
                  style={{
                    lineHeight: 1.8,
                    color: TEXT,
                    fontSize: "0.92rem",
                    margin: 0,
                  }}
                >
                  {item.scenario}
                </p>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.85 }}>
            This is not a replacement for clinical care. It is the layer of
            support that exists between clinical care and the rest of your
            life. That layer is enormous. It has been unfilled. MEOK is built
            to fill it.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 11: NHS resources ────────────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            Where can I find trusted menopause information and support in the UK?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK is one component of a wider support ecosystem. Please also
            make use of the following trusted resources:
          </p>
          <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              {
                name: "NHS: Menopause",
                url: "https://www.nhs.uk/conditions/menopause/",
                display: "nhs.uk/conditions/menopause",
                desc: "The starting point for clinical information, HRT options, and finding NHS support near you.",
              },
              {
                name: "British Menopause Society",
                url: "https://thebms.org.uk",
                display: "thebms.org.uk",
                desc: "The professional body for menopause specialists; their patient resources are among the most authoritative available.",
              },
              {
                name: "Menopause Support",
                url: "https://www.menopausesupport.co.uk",
                display: "menopausesupport.co.uk",
                desc: "A UK charity providing community, peer support, and information for women at every stage.",
              },
              {
                name: "Henpicked: Menopause in the Workplace",
                url: "https://henpicked.net/menopause-hub/",
                display: "henpicked.net/menopause-hub",
                desc: "Workplace-focused guidance, employer resources, and the Menopause Workplace Pledge information.",
              },
              {
                name: "Balance (Dr Louise Newson)",
                url: "https://www.balance-menopause.com",
                display: "balance-menopause.com",
                desc: "Evidence-based information and a free symptom checker app from the UK\u2019s leading menopause specialist.",
              },
            ].map((resource) => (
              <div
                key={resource.name}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.1rem 1.4rem",
                  borderLeft: `3px solid ${GOLD}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.2rem",
                    fontSize: "0.95rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {resource.name}{" "}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: GOLD,
                      textDecoration: "none",
                      fontSize: "0.82rem",
                      fontWeight: 400,
                    }}
                  >
                    &rarr; {resource.display}
                  </a>
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.85rem",
                    margin: 0,
                    lineHeight: 1.55,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {resource.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.1rem 1.5rem",
              borderLeft: `3px solid ${DANGER}`,
            }}
          >
            <p
              style={{
                lineHeight: 1.75,
                fontSize: "0.93rem",
                margin: 0,
                color: TEXT,
              }}
            >
              <strong style={{ color: DANGER }}>Important:</strong> If you are
              experiencing severe symptoms — including significant depression,
              chest pain or palpitations, or anything materially affecting your
              ability to function day to day — please see your GP as a priority.
              MEOK supports you between clinical care, not instead of it.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section id="faq" style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "grid", gap: "1rem" }}>
            {/* FAQ 1 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.4rem 1.6rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Can AI help with menopause symptoms?
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: MUTED,
                  fontSize: "0.93rem",
                  margin: 0,
                }}
              >
                AI cannot prescribe treatment, but it can provide 24/7
                non-judgmental support, track symptom patterns across months,
                help you prepare for GP appointments with real data, and hold
                space for the emotional weight of the transition. MEOK
                remembers your history so you never have to start from scratch
                — and its Maternal Covenant design means you will never be
                dismissed or minimised.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.4rem 1.6rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                What is perimenopause?
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: MUTED,
                  fontSize: "0.93rem",
                  margin: 0,
                }}
              >
                Perimenopause is the transitional phase before menopause during
                which oestrogen and progesterone levels fluctuate erratically.
                It can begin up to ten years before periods stop entirely.
                Symptoms include irregular cycles, hot flushes, mood changes,
                sleep disruption, brain fog, and anxiety. Many women are
                misdiagnosed during this phase because their periods have not
                yet stopped and standard blood tests are unreliable.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.4rem 1.6rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                How does MEOK track menopause symptoms?
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: MUTED,
                  fontSize: "0.93rem",
                  margin: 0,
                }}
              >
                MEOK uses persistent conversational memory to build a
                longitudinal record of your symptoms over time. You describe
                how you feel in natural language — hot flush frequency, mood,
                sleep quality, energy, pain levels — and MEOK remembers it all.
                After weeks or months, you have real pattern data to bring to
                GP appointments instead of a vague sense that things are not
                right. MEOK can also help you compile a structured summary
                before a clinical appointment.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.4rem 1.6rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                What are my workplace rights during menopause in the UK?
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: MUTED,
                  fontSize: "0.93rem",
                  margin: 0,
                }}
              >
                Under the Menopause Support Act 2024 and existing Equality Act
                2010 provisions, UK employers have obligations to consider
                reasonable workplace adjustments for employees experiencing
                menopause symptoms. These can include flexible working,
                temperature control, rest areas, and adjustments to uniforms
                or workload. If your symptoms are severe, they may also
                constitute a disability under the Equality Act. MEOK can help
                you understand your rights and prepare for those conversations.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.4rem 1.6rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Will MEOK give me medical advice about HRT?
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: MUTED,
                  fontSize: "0.93rem",
                  margin: 0,
                }}
              >
                No. MEOK does not prescribe, diagnose, or recommend specific
                treatments. What it can do is help you understand your rights
                — including the right to discuss HRT with your GP — and help
                you formulate the questions you want to ask. MEOK can also
                help you understand what the current NICE guidelines say, so
                you arrive at the clinical conversation informed rather than
                passive. The decision about HRT belongs entirely to you and
                your clinician.
              </p>
            </div>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Pricing ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            How much does MEOK cost?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.5rem" }}>
            Support during menopause should not sit behind a paywall. MEOK\u2019s
            Explorer tier is free — no credit card required — and provides 50
            messages per day with persistent memory. For women who want
            unlimited access, the Sovereign tier is \u00a312 per month.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(185px, 1fr))",
              gap: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            {[
              {
                name: "Explorer",
                price: "Free",
                detail: "50 messages/day",
                sub: "Always free, no card",
              },
              {
                name: "Sovereign",
                price: "\u00a312/mo",
                detail: "Unlimited messages",
                sub: "Full persistent memory",
              },
              {
                name: "Family",
                price: "\u00a329/mo",
                detail: "Up to 5 people",
                sub: "Shared plan",
              },
              {
                name: "BYOK",
                price: "\u00a35/mo",
                detail: "Bring your own API key",
                sub: "Maximum control",
              },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    margin: "0 0 0.3rem",
                    fontFamily: "system-ui, sans-serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tier.name}
                </p>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    margin: "0 0 0.3rem",
                    fontFamily: "system-ui, sans-serif",
                    color: TEXT,
                  }}
                >
                  {tier.price}
                </p>
                <p
                  style={{
                    color: TEXT,
                    fontSize: "0.82rem",
                    margin: "0 0 0.15rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {tier.detail}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.76rem",
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {tier.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: CARD,
            borderRadius: "14px",
            padding: "2.75rem 2rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.85rem",
            }}
          >
            Start Today &mdash; No Credit Card Required
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
              lineHeight: 1.3,
              marginBottom: "1rem",
              maxWidth: "520px",
              margin: "0 auto 1rem",
            }}
          >
            You deserve to be heard. Every day. Not just in appointments.
          </h2>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.8,
              maxWidth: "490px",
              margin: "0 auto 1.75rem",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.95rem",
            }}
          >
            MEOK remembers your symptom history, holds your patterns across
            months, and is there at 3am when everything else is closed. Never
            dismissive. Never resets. Free to start.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.9rem 2.4rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            Meet Your MEOK &mdash; Free
          </Link>
          <p
            style={{
              color: MUTED,
              fontSize: "0.77rem",
              marginTop: "0.9rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Explorer tier: 50 messages/day, no card needed &bull; @meok_ai
          </p>
        </section>

        {/* ── Related Reading ──────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.78rem",
              color: MUTED,
              marginBottom: "1.25rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Related Reading
          </p>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              {
                href: "/blog/ai-companion-for-menopause",
                title:
                  "AI Companion for Menopause: Persistent Support Through the Transition No One Talks About",
                desc: "A deeper look at MEOK as a daily companion through menopause — symptom journaling, 3am support, and why persistence changes everything.",
              },
              {
                href: "/blog/ai-companion-for-women",
                title:
                  "AI Companion for Women: Support That Understands Your Life",
                desc: "How MEOK serves women across every life stage — from perimenopause to post-menopause, fertility, grief, and beyond.",
              },
              {
                href: "/blog/ai-for-anxiety",
                title: "AI for Anxiety: A Non-Judgmental Space When Anxiety Spikes",
                desc: "Perimenopause anxiety is real, biochemical, and often dismissed. MEOK provides 24/7 support that never minimises what you\u2019re experiencing.",
              },
              {
                href: "/blog/ai-for-insomnia",
                title: "AI for Insomnia: Support at 3am When Sleep Won\u2019t Come",
                desc: "Night sweats and sleep disruption are among the most common and most disruptive menopause symptoms. MEOK is always awake.",
              },
              {
                href: "/blog/ai-for-workplace-stress",
                title: "AI for Workplace Stress: Preparing for Difficult Conversations",
                desc: "How MEOK helps with the professional dimension of menopause — reasonable adjustments, difficult conversations, and knowing your rights.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.1rem 1.3rem",
                  textDecoration: "none",
                  borderLeft: `3px solid ${BORDER}`,
                }}
              >
                <p
                  style={{
                    color: TEXT,
                    fontWeight: 600,
                    marginBottom: "0.25rem",
                    fontSize: "0.92rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.82rem",
                    margin: 0,
                    lineHeight: 1.6,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.5rem",
              fontSize: "0.9rem",
            }}
          >
            MEOK AI LABS
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: "0.8rem",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.5rem",
            }}
          >
            Founded by Nicholas Templeman &bull;{" "}
            <a
              href="https://twitter.com/meok_ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: MUTED, textDecoration: "none" }}
            >
              @meok_ai
            </a>
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: "0.74rem",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "1.25rem",
              maxWidth: "520px",
              margin: "0 auto 1.25rem",
              lineHeight: 1.65,
            }}
          >
            MEOK is not a medical device and does not provide clinical advice.
            Always consult a qualified healthcare professional for medical
            concerns. If you are in crisis, please contact your GP, call 111,
            or visit{" "}
            <a
              href="https://www.nhs.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: MUTED }}
            >
              nhs.uk
            </a>
            .
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
              { href: "/birth", label: "Get Started" },
              { href: "/privacy", label: "Privacy" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
