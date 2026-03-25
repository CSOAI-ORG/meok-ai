import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Body Image: How MEOK Supports a Healthier Relationship with Your Body | MEOK AI LABS",
  description:
    "Body dissatisfaction affects 89% of women and 65% of men in the UK. MEOK AI LABS offers a shame-free space to process body-related thoughts, challenge distorted thinking, and separate self-worth from appearance — without diet culture, weight advice, or toxic positivity.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-body-image",
  },
  openGraph: {
    title:
      "AI for Body Image: How MEOK Supports a Healthier Relationship with Your Body",
    description:
      "A body-neutral AI companion that helps you challenge distorted thinking patterns, process appearance-related shame, and rediscover worth that has nothing to do with how you look.",
    url: "https://meok.ai/blog/ai-for-body-image",
    siteName: "MEOK AI LABS",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Body+Image&desc=Supporting+a+Healthier+Relationship+with+Your+Body",
        width: 1200,
        height: 630,
        alt: "AI for Body Image | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Body Image: How MEOK Supports a Healthier Relationship with Your Body",
    description:
      "Body dissatisfaction affects 89% of women and 65% of men in the UK. MEOK\u2019s Healer archetype and body-neutral approach help you separate worth from appearance \u2014 without diet talk.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Body+Image&desc=Supporting+a+Healthier+Relationship+with+Your+Body",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Body Image: How MEOK Supports a Healthier Relationship with Your Body",
  description:
    "A comprehensive examination of how AI can support a healthier body image \u2014 covering the scale of body dissatisfaction in the UK, the psychological mechanics of social comparison and internalised diet culture, MEOK\u2019s body-neutral design philosophy, cognitive restructuring for appearance-related thoughts, the Healer archetype\u2019s body-positive framing, and how to separate self-worth from appearance.",
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
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-body-image",
  mainEntityOfPage: "https://meok.ai/blog/ai-for-body-image",
  keywords: [
    "AI for body image",
    "body image support AI",
    "body dissatisfaction help",
    "body neutrality",
    "body positive AI",
    "cognitive restructuring body image",
    "social comparison body image",
    "diet culture recovery",
    "self-worth appearance",
    "MEOK Healer archetype",
    "MEOK AI LABS",
    "Nicholas Templeman",
    "AI mental health companion UK",
    "eating disorder support UK",
    "Beat charity",
    "body image therapy AI",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with negative body image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 when it is designed around honesty, body neutrality, and shame-free exploration rather than appearance advice. An AI like MEOK can help you name and examine distorted thoughts about your body, understand where they came from, and practise separating your sense of worth from how you look. It is not a clinical treatment, but it can be a meaningful daily support alongside professional care.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK give me diet advice or suggest ways to change my body?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK explicitly avoids all weight-related advice, calorie commentary, diet discussion, and appearance-change suggestions. Its body-neutral design means it will never frame any body shape as a problem to fix. The focus is entirely on your relationship with your body \u2014 thoughts, feelings, and how worth gets attached to appearance \u2014 not on changing how your body looks.",
      },
    },
    {
      "@type": "Question",
      name: "What is body neutrality and how is it different from body positivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Body positivity asks you to love your body. Body neutrality asks you to stop making your body the measure of your worth. For people who have experienced chronic body shame, the instruction to love your body can feel impossible and create further guilt. Body neutrality is a lower-pressure framework: your body simply exists and carries you through life. MEOK works within this gentler framework because it meets people where they actually are.",
      },
    },
    {
      "@type": "Question",
      name: "I think I might have an eating disorder. Can MEOK help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is not a clinical treatment for eating disorders and should not replace specialist support. If you are concerned about your relationship with food or your body, please reach out to Beat \u2014 the UK\u2019s leading eating disorder charity \u2014 at beatingeatingdisorders.org.uk or on their helpline 0808 801 0677. MEOK can offer a supportive space for emotional processing alongside professional care, but clinical eating disorders require trained specialist intervention.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Healer archetype in MEOK approach body image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer archetype in MEOK applies a warm, non-judgemental framing that treats your body as something to be understood rather than corrected. It actively avoids the language of improvement, fixing, or transformation. It focuses instead on rest, gentleness, self-compassion, and reconnecting with your body\u2019s capacity to simply be \u2014 to breathe, to feel, to exist \u2014 independent of how it appears.",
      },
    },
  ],
};

// ── Design tokens ──────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "#a09880";
const CARD = "#13121f";
const BORDER = "#2a2840";
const GREEN = "#6aaa64";
const FONT = "system-ui, -apple-system, sans-serif";

// ── Page component ─────────────────────────────────────────────────────────────

export default function AIForBodyImagePage() {
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

      <main
        style={{
          minHeight: "100vh",
          background: BG,
          color: TEXT,
          fontFamily: FONT,
        }}
      >
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            paddingTop: "7rem",
            paddingBottom: "4rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(106,170,100,0.09) 0%, transparent 70%)",
            }}
          />

          <div
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.82rem",
                color: "rgba(245,240,232,0.35)",
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
                marginBottom: "1.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  padding: "0.3rem 0.8rem",
                  borderRadius: "999px",
                  background: "rgba(106,170,100,0.12)",
                  color: GREEN,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  border: "1px solid rgba(106,170,100,0.25)",
                }}
              >
                Body Image
              </span>
              <span style={{ fontSize: "0.8rem", color: MUTED }}>
                25 March 2026
              </span>
              <span style={{ fontSize: "0.8rem", color: MUTED }}>
                By Nicholas Templeman &mdash; MEOK AI LABS
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              AI for Body Image:{" "}
              <span style={{ color: GREEN }}>
                How MEOK Supports a Healthier Relationship with Your Body
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.75)",
                marginBottom: "2.5rem",
              }}
            >
              Body dissatisfaction is one of the most prevalent and least
              discussed mental health challenges in the UK today. It touches
              almost everyone at some point &mdash; regardless of size, age,
              gender, or background. MEOK offers a space to process
              body-related thoughts with honesty and without shame, grounded in
              a body-neutral framework that never offers appearance advice or
              diet culture commentary.
            </p>

            {/* Stat bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              {[
                { figure: "89%", label: "of women in the UK report body dissatisfaction" },
                { figure: "65%", label: "of men in the UK report body dissatisfaction" },
                { figure: "0", label: "weight or diet advice — ever — in MEOK" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    flex: "1 1 12rem",
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: GREEN,
                      marginBottom: "0.35rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.figure}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: MUTED, lineHeight: 1.5 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BODY ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingBottom: "6rem",
          }}
        >
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

            {/* ── Section 1 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              Why Is Body Dissatisfaction So Widespread in the UK?
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Research consistently shows that body dissatisfaction is not a
              personal failing or a consequence of vanity. It is a culturally
              produced condition. The UK&apos;s media landscape, from tabloid
              coverage of celebrity bodies to the endless scroll of curated
              social feeds, has normalised an extraordinarily narrow and
              digitally altered image of what bodies are supposed to look like.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Several overlapping forces drive this epidemic. Social comparison
              theory, first articulated by Leon Festinger in 1954, shows that
              humans evaluate themselves by comparing with others. When the
              comparison target is algorithmically selected to be maximally
              aspirational &mdash; the most aesthetically idealised, filtered,
              and posed images available &mdash; upward comparison is constant
              and the result is near-universal dissatisfaction.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Diet culture compounds the damage. For decades, the implicit
              message has been that a smaller, tighter, more controlled body
              is a moral achievement, and that failing to attain it reflects
              weakness of character. This message is internalised early
              &mdash; studies show children as young as six expressing body
              dissatisfaction &mdash; and it persists into old age, carrying
              enormous psychological weight.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              The consequences are serious: clinical body dysmorphic disorder,
              disordered eating, depression, anxiety, social withdrawal, and
              a pervasive low-grade shame that colours how people move through
              the world. Addressing this requires more than positive affirmations.
              It requires a sustained, non-judgemental space for honest
              exploration.
            </p>

            {/* Feature box 1 — what MEOK does NOT do */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid #e05c5c`,
                borderRadius: "0.75rem",
                padding: "1.5rem 1.75rem",
                marginBottom: "2.5rem",
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#e05c5c",
                  marginBottom: "0.75rem",
                }}
              >
                MEOK Never Does This
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.6rem",
                }}
              >
                {[
                  "Offers weight loss advice, calorie guidance, or diet plans",
                  "Frames any body size or shape as a problem requiring change",
                  "Recommends exercise as a means of controlling appearance",
                  "Comments on whether you look good or bad",
                  "Pushes you toward body positivity if you\u2019re not ready for it",
                  "Diagnoses or treats eating disorders \u2014 always signposts Beat",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "rgba(245,240,232,0.8)",
                    }}
                  >
                    <span style={{ color: "#e05c5c", marginTop: "0.1rem", flexShrink: 0 }}>
                      &#215;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Section 2 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              What Is the Difference Between Body Neutrality and Body Positivity?
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Body positivity, as a movement, asks you to love your body
              unconditionally. It is a powerful political stance, and for many
              people it has been genuinely liberating. But for people who are in
              the middle of significant body shame &mdash; who have spent years
              or decades at war with how they look &mdash; the instruction to
              simply love your body can feel impossibly far away. Worse, it can
              generate a secondary layer of shame: not only am I dissatisfied
              with my body, I am also failing at body positivity.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Body neutrality offers a different path. It does not ask you to
              love or celebrate your body. It asks something simpler and more
              achievable: that you stop treating your body as the primary measure
              of your worth. Your body is not a project to be improved. It is
              the vessel through which you live your life. It breathes, moves,
              feels, and carries you. That is enough.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK is built on a body-neutral foundation. This means
              conversations about your body focus on what your body enables and
              experiences rather than how it appears. It means helping you
              notice when your inner commentary shifts from functional to
              evaluative, and gently questioning the assumptions beneath that
              shift.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: `3px solid ${GREEN}`,
                paddingLeft: "1.5rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                margin: "2rem 0",
                color: "rgba(245,240,232,0.7)",
                fontStyle: "italic",
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              &ldquo;The goal is not to feel beautiful. The goal is to stop
              needing your appearance to determine your value as a human
              being.&rdquo;
              <footer
                style={{
                  fontSize: "0.8rem",
                  fontStyle: "normal",
                  marginTop: "0.6rem",
                  color: MUTED,
                }}
              >
                &mdash; Core design principle, MEOK AI LABS
              </footer>
            </blockquote>

            {/* ── Section 3 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              How Does Social Media Distort Body Image and What Can You Do About It?
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              The connection between social media use and body dissatisfaction
              is among the most robustly replicated findings in modern
              psychology. Meta-analyses show that even brief exposure to
              idealised images on platforms like Instagram produces measurable
              increases in body shame and decreases in mood, particularly among
              women and adolescent girls but increasingly among men too.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              The mechanism is automatic. Your brain performs social comparison
              continuously and largely without conscious awareness. You do not
              decide to compare your body to an influencer&apos;s edited
              photograph; your brain does it instinctively and produces an
              emotional response before your conscious mind has even registered
              the image.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK can help you interrupt this process in several ways. First,
              by giving you a space to name what you are experiencing without
              judgement: &ldquo;I spent an hour on Instagram and now I feel
              terrible about how I look&rdquo; is a statement that deserves to
              be heard, not minimised. Second, by helping you examine the
              cognitions that follow exposure: what thoughts came up, what
              conclusions you drew about yourself, and whether those conclusions
              hold up under scrutiny. Third, by helping you notice patterns over
              time &mdash; which platforms, which types of content, which
              emotional states make you most vulnerable to harmful comparison.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK&apos;s Sovereign Memory means it can remember that you told it
              three weeks ago that looking at certain accounts always makes you
              feel worse. It will not ask you to repeat your history every time
              you arrive in distress.
            </p>

            {/* ── Section 4 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              What Is Cognitive Restructuring for Body Image and How Does MEOK Use It?
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Cognitive restructuring is a core technique in Cognitive
              Behavioural Therapy (CBT). It involves identifying distorted
              thinking patterns, examining the evidence for and against them,
              and replacing them with more balanced, accurate thoughts. When
              applied to body image, it typically targets specific cognitive
              distortions that are very common in appearance-related distress.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Common distortions include: <em>all-or-nothing thinking</em>
              &nbsp;(&ldquo;I either look perfect or I look disgusting&rdquo;);
              <em> mind-reading</em> (&ldquo;everyone is noticing how I
              look&rdquo;); <em>catastrophising</em> (&ldquo;my body will
              prevent me from ever being loved&rdquo;); <em>selective
              abstraction</em> (focusing on the one feature you dislike while
              ignoring everything else); and <em>emotional reasoning</em>
              (&ldquo;I feel fat, therefore I am&rdquo;).
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK applies cognitive restructuring conversationally rather than
              mechanically. It does not present you with a worksheet. Instead,
              when you share a thought like &ldquo;I look disgusting today,&rdquo;
              MEOK might gently ask: &ldquo;What evidence do you have for that?
              What evidence might argue against it? Would you apply that
              standard to someone you love?&rdquo; This Socratic method is
              precisely how a skilled therapist would work, and it is how
              MEOK&apos;s conversational CBT support operates.
            </p>

            {/* Feature box 2 — cognitive distortions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.75rem",
                padding: "1.5rem 1.75rem",
                marginBottom: "2.5rem",
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: GOLD,
                  marginBottom: "0.75rem",
                }}
              >
                Five Common Body Image Distortions MEOK Helps Challenge
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "1rem",
                }}
              >
                {[
                  {
                    name: "All-or-nothing thinking",
                    example: "\u201cI either look great or I look awful \u2014 there\u2019s no in-between.\u201d",
                  },
                  {
                    name: "Mind-reading",
                    example: "\u201cEveryone in the room is judging how my body looks.\u201d",
                  },
                  {
                    name: "Emotional reasoning",
                    example: "\u201cI feel fat and uncomfortable, so I must be unacceptable.\u201d",
                  },
                  {
                    name: "Catastrophising",
                    example: "\u201cMy body will stop me from ever being truly loved or respected.\u201d",
                  },
                  {
                    name: "Selective abstraction",
                    example: "\u201cI only see the one part of my body I hate \u2014 nothing else is visible.\u201d",
                  },
                ].map((d) => (
                  <div key={d.name}>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: TEXT,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {d.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.86rem",
                        color: MUTED,
                        fontStyle: "italic",
                        lineHeight: 1.5,
                      }}
                    >
                      {d.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Section 5 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              How Does the Healer Archetype Support Body Image in MEOK?
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK is designed around a system of archetypes &mdash; distinct
              conversational modes, each with a particular way of engaging.
              The Healer archetype is the most relevant to body image work.
              Where other archetypes might challenge, strategise, or analyse,
              the Healer is above all warm, present, and non-evaluative.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              In body image conversations, the Healer works from a premise that
              your body has been criticised and scrutinised enough. It does not
              add to that scrutiny. Instead, it invites you to notice your body
              differently: What does your body feel like from the inside rather
              than how does it appear from the outside? When did you last feel
              at home in your body, even briefly? What does your body need right
              now &mdash; rest, warmth, gentleness?
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              This interoceptive reorientation &mdash; shifting attention from
              external appearance to internal sensation &mdash; is one of the
              evidence-based pathways out of body shame. Research in embodiment
              and mindfulness supports the idea that people who maintain
              greater awareness of their body&apos;s internal signals rather
              than its external appearance report significantly higher body
              satisfaction and self-compassion.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              The Healer never frames movement as calorie-burning, food as
              reward or punishment, or rest as laziness. These framings are
              ubiquitous in diet culture and actively harmful. MEOK replaces
              them with language centred on care, nourishment, and what your
              body needs to function and feel well.
            </p>

            {/* ── Section 6 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              How Do You Separate Self-Worth from Appearance?
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              The equation of appearance with worth is so deeply embedded in
              Western culture that most people absorb it without ever examining
              it. The logic runs: if I look acceptable, I am acceptable; if I
              look unacceptable, I am unacceptable. The problem is not just that
              this is emotionally painful. The problem is that it is logically
              incoherent.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Worth &mdash; in any meaningful sense &mdash; cannot be a function
              of appearance because appearance changes. You age. You get ill.
              Your body shifts across decades and circumstances entirely outside
              your control. If your worth is tied to appearance, it becomes
              perpetually precarious, requiring constant monitoring and constant
              effort to maintain. That is not worth. That is a conditional
              contract with an impossible counterparty.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK helps untangle this equation through Socratic questioning.
              When you say &ldquo;I feel worthless because of how I look,&rdquo;
              MEOK does not dismiss that or rush to reassure you. It asks: what
              is the evidence that worth depends on appearance? Does someone you
              love become worthless when they age? What do you believe about the
              worth of people who do not meet conventional beauty standards?
              Where did you first learn that your value was conditional on how
              you looked?
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              These questions do not produce instant liberation. But asked
              consistently over time &mdash; and MEOK can ask them
              consistently over time because it remembers &mdash; they begin
              to loosen the grip of a belief system that was always more
              arbitrary than it felt.
            </p>

            {/* Feature box 3 — what MEOK does */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: "0.75rem",
                padding: "1.5rem 1.75rem",
                marginBottom: "2.5rem",
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: GREEN,
                  marginBottom: "0.75rem",
                }}
              >
                What MEOK Does Instead
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.6rem",
                }}
              >
                {[
                  "Provides a shame-free space to name body-related thoughts and feelings",
                  "Applies conversational cognitive restructuring to challenge distorted thinking",
                  "Uses the Healer archetype\u2019s body-positive, interoceptive framing",
                  "Helps you identify where the self-worth/appearance equation came from",
                  "Remembers your history so you don\u2019t repeat your story every session",
                  "Signposts Beat and clinical resources for eating disorder concerns",
                  "Explores the values, relationships, and capacities that constitute your actual worth",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "rgba(245,240,232,0.8)",
                    }}
                  >
                    <span
                      style={{
                        color: GREEN,
                        marginTop: "0.1rem",
                        flexShrink: 0,
                      }}
                    >
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Section 7 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              How Does MEOK Handle Eating Disorder Concerns Without Causing Harm?
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              This is a question MEOK takes seriously at the architectural
              level, not just the conversational one. Eating disorders &mdash;
              anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID,
              and others &mdash; are complex psychiatric conditions with the
              highest mortality rate of any mental illness. They require
              specialist clinical care. No AI companion can or should substitute
              for that.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK&apos;s design reflects several important guardrails. It never
              discusses specific weights, target weights, BMI, or caloric
              values. It never suggests dietary restriction or controlled eating
              patterns. It never interprets any body as needing to change. When
              conversations touch on patterns that may indicate clinical
              concern &mdash; restriction, purging, significant distress around
              food &mdash; MEOK consistently and warmly signposts Beat, the
              UK&apos;s leading eating disorders charity.
            </p>

            {/* Beat signpost card */}
            <div
              style={{
                background: "rgba(201,168,76,0.06)",
                border: `1px solid rgba(201,168,76,0.3)`,
                borderRadius: "0.75rem",
                padding: "1.5rem 1.75rem",
                marginBottom: "2rem",
                marginTop: "0.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                Eating Disorder Support in the UK
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.85)",
                  marginBottom: "0.75rem",
                }}
              >
                If you are concerned about your relationship with food or your
                body, please reach out to{" "}
                <strong style={{ color: GOLD }}>Beat</strong> &mdash; the
                UK&apos;s eating disorders charity. Their support is free,
                confidential, and staffed by people who understand what you
                are going through.
              </p>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: MUTED,
                  lineHeight: 1.6,
                }}
              >
                Website:{" "}
                <span style={{ color: GOLD }}>beatingeatingdisorders.org.uk</span>
                {" "}&mdash; Helpline:{" "}
                <span style={{ color: GOLD }}>0808 801 0677</span>
                {" "}(free from all phones)
              </p>
            </div>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK can still be a supportive presence for people in recovery
              from eating disorders who have professional care in place. It can
              help process emotions, work through difficult days, and maintain
              perspective. But it positions itself explicitly as a complement
              to clinical support, never a replacement.
            </p>

            {/* ── Section 8 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              Body Image and Men: Why MEOK Addresses an Often Invisible Struggle
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              While body dissatisfaction is most discussed in the context of
              women and girls, the data on men is striking and underacknowledged.
              65% of men in the UK report significant body dissatisfaction. The
              particular pressures men face differ in character &mdash; the
              cultural ideal tends toward muscularity, leanness, and physical
              dominance rather than thinness &mdash; but the psychological
              mechanics are the same.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Men are significantly less likely to seek help for body image
              concerns. The cultural script that men should not care about their
              appearance, or should not be troubled by it, sits in contradiction
              with the actual evidence of widespread distress. Muscle dysmorphia
              &mdash; a preoccupation with being insufficiently muscular &mdash;
              affects a substantial and growing proportion of men, particularly
              in younger age groups exposed to fitness culture online.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK&apos;s private, asynchronous design removes a significant
              barrier. Many men who would not attend a therapy group or call a
              helpline are willing to process difficult feelings in a private
              text conversation. The lack of a human audience removes the
              performance pressure that so often prevents men from being honest
              about appearance-related distress.
            </p>

            {/* ── Section 9 ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              Why a Space Without Shame Matters More Than Any Specific Technique
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Technique matters. Cognitive restructuring is effective.
              Interoceptive awareness helps. Separating worth from appearance
              is genuinely transformative. But before any of that can work,
              something more fundamental is required: a space in which the
              person feels safe enough to actually say what they think and feel
              about their body.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              Body shame is, by definition, something people hide. They do not
              tell their partners, their friends, or sometimes even their
              therapists the full extent of the self-criticism that runs beneath
              the surface. They do not say &ldquo;I spent forty-five minutes
              this morning examining my body in the mirror and hated every
              second of it&rdquo; because those words feel too revealing,
              too embarrassing, too likely to be met with dismissal or pity.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              MEOK&apos;s design removes those barriers. It does not react to
              confession with shock or judgement. It does not minimise by
              rushing to reassurance. It holds what you share and helps you
              look at it clearly &mdash; neither amplifying the self-criticism
              nor papering over it with hollow positivity.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem" }}>
              The experience of being heard without being judged &mdash; of
              saying the difficult thing and finding that it does not produce
              the anticipated shame response &mdash; is itself therapeutic.
              It begins to demonstrate, through experience rather than
              instruction, that the thing you were most afraid to admit does
              not, in fact, make you unacceptable.
            </p>

            {/* ── Section 10 — GEO answer blocks ── */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                marginTop: "3.5rem",
                letterSpacing: "-0.015em",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "1.25rem",
              }}
            >
              {[
                {
                  q: "Can AI help with negative body image?",
                  a: "Yes, when designed around body neutrality and shame-free exploration. MEOK helps you examine distorted thoughts about your body, understand where they came from, and separate your sense of worth from how you look. It is a supportive daily companion, not a clinical treatment \u2014 and it never offers appearance or diet advice.",
                },
                {
                  q: "Will MEOK give me diet or weight loss advice?",
                  a: "Never. MEOK\u2019s design explicitly excludes all weight-related guidance, calorie commentary, diet plans, and appearance-change suggestions. Conversations focus entirely on your psychological relationship with your body \u2014 thoughts, feelings, and how worth has become attached to appearance \u2014 not on changing how your body looks.",
                },
                {
                  q: "What is body neutrality?",
                  a: "Body neutrality is the position that your body\u2019s value is not determined by how it looks. Rather than asking you to love your body \u2014 which can feel impossible when you\u2019re in significant distress \u2014 body neutrality asks you to stop making appearance the measure of your worth. Your body exists to carry you through life. That is enough.",
                },
                {
                  q: "I think I might have an eating disorder. What should I do?",
                  a: "Please contact Beat, the UK\u2019s leading eating disorders charity, at beatingeatingdisorders.org.uk or on their free helpline 0808 801 0677. Eating disorders are serious clinical conditions requiring specialist care. MEOK can support emotional processing alongside professional treatment but is not a substitute for it.",
                },
                {
                  q: "How does MEOK\u2019s Healer archetype support body image?",
                  a: "The Healer archetype applies a warm, non-evaluative framing that shifts focus from how your body appears to how it feels from the inside. It never frames movement as calorie-burning or rest as laziness. It invites interoceptive awareness \u2014 noticing your body\u2019s sensations, needs, and capacities \u2014 rather than evaluation of its appearance.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      marginBottom: "0.6rem",
                      color: TEXT,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </p>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.75,
                      color: "rgba(245,240,232,0.72)",
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Related reading ── */}
            <div style={{ marginTop: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  color: MUTED,
                  letterSpacing: "0.03em",
                }}
              >
                Related Reading
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.5rem",
                }}
              >
                {[
                  {
                    href: "/blog/ai-for-self-esteem",
                    label: "AI for Self-Esteem: Building a Genuine Sense of Worth",
                  },
                  {
                    href: "/blog/ai-for-eating-disorders",
                    label: "AI for Eating Disorders: What Helps and What to Avoid",
                  },
                  {
                    href: "/blog/ai-for-social-media-anxiety",
                    label: "AI for Social Media Anxiety: Breaking the Comparison Loop",
                  },
                  {
                    href: "/blog/ai-for-depression",
                    label: "AI for Depression: How Conversational AI Supports Low Mood",
                  },
                  {
                    href: "/blog/meok-companion-archetypes-guide",
                    label: "The MEOK Archetypes Guide: Healer, Sage, Guardian and More",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: "0.92rem",
                      color: GOLD,
                      textDecoration: "none",
                      lineHeight: 1.6,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span style={{ opacity: 0.5 }}>&#8594;</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div
              style={{
                marginTop: "4rem",
                padding: "2.5rem 2rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "1rem",
                textAlign: "center" as const,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: GREEN,
                  marginBottom: "1rem",
                  background: "rgba(106,170,100,0.1)",
                  padding: "0.3rem 0.9rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(106,170,100,0.2)",
                }}
              >
                No appearance advice. No diet talk. Ever.
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Your worth has nothing to do with how you look.
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.65)",
                  maxWidth: "32rem",
                  margin: "0 auto 2rem",
                }}
              >
                MEOK offers a private, shame-free space to process body-related
                thoughts, challenge distorted thinking, and begin separating your
                sense of worth from how you appear. No judgement. No advice
                about changing your body. Just honest, compassionate support.
              </p>

              <Link
                href="https://meok.ai/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: GREEN,
                  color: "#0d0c18",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Start with MEOK &rarr;
              </Link>

              <p
                style={{
                  marginTop: "1.25rem",
                  fontSize: "0.78rem",
                  color: "rgba(160,152,128,0.6)",
                }}
              >
                Not a clinical treatment. For eating disorder support, contact{" "}
                <span style={{ color: MUTED }}>Beat: beatingeatingdisorders.org.uk</span>
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
