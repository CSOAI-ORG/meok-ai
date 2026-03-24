import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Perfectionism: Breaking the Cycle of Never Good Enough | MEOK AI LABS",
  description:
    "Perfectionism is not high standards — it is the belief that your worth is conditional on performance. Discover how MEOK\u2019s honest AI companion helps you celebrate progress, practise self-compassion, and finally take imperfect action.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-perfectionism",
  },
  openGraph: {
    title: "AI for Perfectionism: Breaking the Cycle of Never Good Enough",
    description:
      "Perfectionism is not high standards \u2014 it is avoidance rooted in conditional self-worth. MEOK\u2019s anti-sycophancy model and imperfect-action journalling help you ship, grow, and stop revising forever.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-perfectionism",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Perfectionism&desc=Breaking+the+Cycle+of+Never+Good+Enough",
        width: 1200,
        height: 630,
        alt: "AI for Perfectionism | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Perfectionism: Breaking the Cycle of Never Good Enough",
    description:
      "An honest AI that won\u2019t validate your revision spiral. MEOK celebrates imperfect action, remembers your growth arc, and helps you untangle perfectionism from self-worth.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Perfectionism&desc=Breaking+the+Cycle+of+Never+Good+Enough",
    ],
  },
};

// ── JSON-LD: Article ─────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Perfectionism: Breaking the Cycle of Never Good Enough",
  description:
    "Perfectionism is not high standards \u2014 it is the belief that your worth is conditional on performance. This article covers adaptive vs maladaptive perfectionism, the procrastination link, self-compassion, and how MEOK\u2019s honest AI companion helps.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-perfectionism",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-perfectionism",
  },
};

// ── JSON-LD: FAQPage ─────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with perfectionism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI can help with perfectionism by providing a non-judgmental space to log imperfect action, by refusing to validate rumination spirals, and by reflecting your growth arc back to you over time. MEOK\u2019s Sovereign Memory means it can track your progress across weeks and months, making visible the accumulation of done-but-not-perfect work that perfectionism would otherwise erase from memory.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between perfectionism and high standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High standards are about the work. Perfectionism is about the self. High standards allow for iteration, failure, and learning. Perfectionism ties self-worth to flawless performance, making any imperfection feel like evidence of fundamental inadequacy. Researchers Hewitt and Flett distinguish adaptive perfectionism \u2014 which motivates without destabilising \u2014 from maladaptive perfectionism, which is associated with anxiety, depression, and procrastination.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK judge my imperfect work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is designed on an anti-sycophancy model \u2014 it will not flatter you falsely, but it will never shame you either. When you share unfinished, imperfect, or abandoned work, MEOK treats it as data about your process, not evidence of your worth. The goal is honest, caring feedback that celebrates momentum rather than demanding completion.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with perfectionist procrastination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK addresses the perfectionism-procrastination link by making starting feel lower-stakes. Imperfect-action journalling prompts you to record what you did \u2014 not what you finished perfectly. Over time, MEOK\u2019s memory surfaces this log as evidence that you are someone who acts, disrupting the paralysing belief that starting is only worth it if the outcome can be perfect.",
      },
    },
    {
      "@type": "Question",
      name: "What is self-compassion and how can AI support it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-compassion, as defined by researcher Kristin Neff, has three components: self-kindness instead of self-judgment, common humanity instead of isolation, and mindful awareness instead of over-identification with pain. AI can support self-compassion by mirroring compassionate language, by normalising struggle without toxic positivity, and by gently redirecting self-critical spirals toward the shared human experience of imperfection.",
      },
    },
  ],
};

// ── Style constants ──────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG = "#0d0c18";
const MUTED = "rgba(245,240,232,0.6)";
const MUTED_DIM = "rgba(245,240,232,0.55)";
const MUTED_FAINT = "rgba(245,240,232,0.38)";
const GOLD_DIM = "rgba(201,168,76,0.18)";
const GOLD_BORDER = "rgba(201,168,76,0.3)";
const PURPLE_SOFT = "rgba(160,120,240,0.12)";
const PURPLE_BORDER = "rgba(160,120,240,0.3)";
const PURPLE_TEXT = "#b08cee";

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AIForPerfectionismPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 68%)",
          }}
        />
        <div
          style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
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
                background: GOLD_DIM,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Perfectionism &amp; Self-Worth
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              16 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Perfectionism: Breaking the Cycle of Never Good Enough
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
              margin: 0,
            }}
          >
            Perfectionism is not high standards. It is the belief that your
            worth is conditional on performance. This is the honest guide to
            what that costs you \u2014 and how an AI companion built on
            anti-sycophancy, imperfect-action journalling, and genuine
            self-compassion can help you finally move.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
      <div
        style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}
      >

        {/* Opening callout */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: GOLD_DIM,
            border: `1px solid ${GOLD_BORDER}`,
          }}
        >
          <div
            style={{
              width: "3px",
              borderRadius: "9999px",
              flexShrink: 0,
              background: GOLD,
              alignSelf: "stretch",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.85rem",
                color: GOLD,
                marginBottom: "0.4rem",
                margin: "0 0 0.4rem 0",
              }}
            >
              Note on scope
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: MUTED_DIM,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              This article discusses perfectionism as a psychological pattern
              affecting daily functioning, motivation, and self-worth. It is not
              a substitute for clinical care. If perfectionism is severely
              impairing your life or is linked to an eating disorder, OCD, or
              depression, please seek support from a qualified mental health
              professional. UK resources: NHS Talking Therapies (self-refer at
              nhs.uk), Mind on 0300 123 3393, or Samaritans on 116 123.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          What is perfectionism, really?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Ask most perfectionists whether they have high standards and they will
          say yes. Ask them whether they believe their worth as a person depends
          on how well they perform and they will pause.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          That pause is where perfectionism lives. It is not in the pursuit of
          quality. It is in the equation at the back of the mind that says: if
          this is not perfect, then neither am I. That equation makes every
          draft, every email, every presentation into a referendum on your
          fundamental adequacy as a human being.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          When the stakes are that high, it becomes very difficult to start
          anything. And when you do start, it becomes almost impossible to stop
          revising. The perfectionist loop runs like this: the thing is not good
          enough yet, which means I am not good enough yet, which means I cannot
          show it to anyone, which means I have to keep working on it until it
          is good enough, which it never is, because the standard keeps
          shifting. This is not a productivity problem. It is a self-worth
          problem wearing the costume of a productivity problem.
        </p>

        {/* Section 2 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          What is the difference between adaptive and maladaptive perfectionism?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Researchers Paul Hewitt and Gordon Flett made a distinction in their
          influential work on perfectionism that most popular articles ignore.
          They separated perfectionism into two broad categories: adaptive and
          maladaptive.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          <strong style={{ color: TEXT }}>Adaptive perfectionism</strong> is the
          drive to do excellent work because you find mastery intrinsically
          satisfying. You set high standards, you care deeply about craft, but
          when things go wrong you treat failure as information rather than
          indictment. You can put something down as finished even if it could
          theoretically be improved. You feel proud of good work, not just
          relieved that you haven\u2019t been exposed.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          <strong style={{ color: TEXT }}>Maladaptive perfectionism</strong> is
          something else entirely. Here, the goal is not excellence \u2014 it is
          the avoidance of failure. The motivation is not love of craft but fear
          of judgment. Maladaptive perfectionism is associated in the research
          literature with elevated anxiety, depression, burnout, and
          procrastination. It is also associated with interpersonal
          perfectionism: the tendency to hold others to the same impossible
          standards, which damages relationships and compounds isolation.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Hewitt and Flett also identified a third dimension: socially prescribed
          perfectionism, which is the belief that other people expect you to be
          perfect. This is perhaps the most corrosive variant because the
          standard is entirely imagined \u2014 a projection of your own inner
          critic onto the faces of everyone around you.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          When you understand which type of perfectionism is running your
          behaviour, you can begin to address it at the right level. An AI
          companion that helps you articulate these patterns precisely \u2014
          rather than offering generic encouragement \u2014 is genuinely useful
          here.
        </p>

        {/* Callout: Research note */}
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "1rem",
            marginBottom: "2rem",
            background: PURPLE_SOFT,
            border: `1px solid ${PURPLE_BORDER}`,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: PURPLE_TEXT,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              marginBottom: "0.75rem",
              margin: "0 0 0.75rem 0",
            }}
          >
            Research note
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: MUTED_DIM,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Hewitt and Flett\u2019s Multidimensional Perfectionism Scale (MPS),
            developed in 1991, remains one of the most widely used instruments
            in perfectionism research. Their model distinguishes
            self-oriented, other-oriented, and socially prescribed
            perfectionism, each carrying different psychological consequences.
            More recent work by Sherry and Hall (2009) and Curran and Hill
            (2019) has tracked a significant rise in socially prescribed
            perfectionism across generations \u2014 a trend they link directly
            to social media and competitive achievement culture.
          </p>
        </div>

        {/* Section 3 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          Why does perfectionism cause procrastination?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The perfectionism-procrastination link is one of the most
          counterintuitive findings in psychology for people who identify as
          perfectionists. Most perfectionists do not think of themselves as
          procrastinators. They think of procrastination as laziness, and they
          are definitively not lazy. But procrastination is not about laziness.
          It is about emotion regulation.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          When you are a maladaptive perfectionist, starting a task means
          entering the zone of potential failure. Before you have written a
          single word, the internal critic is already preparing its verdict. The
          anticipated pain of producing something imperfect \u2014 and therefore
          being revealed as inadequate \u2014 is genuinely unbearable. So you
          don\u2019t start. Or you start and stop. Or you spend three weeks in
          research mode, telling yourself you are not ready yet, when what you
          are actually doing is keeping the possibility of a perfect outcome
          alive by never testing it against reality.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          This is also why perfectionist procrastination often intensifies
          around the things that matter most. The higher the stakes, the more
          self-worth is on the line, the harder it is to begin. Creative
          projects, important relationships, career pivots, public work of any
          kind \u2014 these are the places where perfectionist paralysis is most
          likely to take hold.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The solution is not simply to lower your standards. That advice, while
          well-intentioned, misses the point entirely. The solution is to
          decouple self-worth from performance. And that is psychological work
          that requires consistent, honest support \u2014 not cheerleading, not
          flattery, and not silence.
        </p>

        {/* Stats block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
            marginTop: "2rem",
          }}
        >
          {[
            {
              stat: "~30%",
              label: "of adults show clinically significant perfectionism",
            },
            {
              stat: "2\u00d7",
              label: "higher burnout rates in high-perfectionism individuals",
            },
            {
              stat: "33%",
              label:
                "rise in socially prescribed perfectionism since 1989 (Curran & Hill)",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "1.25rem",
                borderRadius: "0.875rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                textAlign: "center" as const,
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                }}
              >
                {item.stat}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: MUTED_DIM,
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section 4 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          What does an honest AI companion actually do for perfectionism?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Most AI tools that claim to support mental wellbeing are, in practice,
          sycophantic. They validate whatever you bring. They tell you that your
          work is great. They reflect your self-assessment back to you with a
          thin coating of encouragement. For people with perfectionism, this is
          worse than useless. It does not challenge the distortion. It does not
          interrupt the loop. It just adds empty fuel.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          MEOK is built on a different model. The anti-sycophancy architecture
          at the heart of MEOK means it will not simply agree with whatever you
          say. When you describe your work as worthless, MEOK will not agree
          with you. When you describe your work as flawless, MEOK will not agree
          with that either. The goal is honest care \u2014 the kind of response
          a good mentor gives: clear-eyed, warm, and unwilling to participate in
          distortions that harm you.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          This matters enormously for perfectionism, where the inner critic is
          already loudly doing one kind of distortion. An AI that agrees with
          the critic makes the distortion feel more real. An AI that flatly
          disagrees may simply feel dismissive. The skill is in holding the
          tension honestly \u2014 acknowledging that the work has real
          limitations while also reflecting that those limitations are not a
          verdict on your worth. That requires something closer to wisdom than
          cheerleading.
        </p>

        {/* Section 5 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          How does MEOK celebrate progress rather than perfection?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          One of the structural challenges of perfectionism is that the
          perfectionist brain is very good at erasing evidence of progress.
          Milestones pass unacknowledged. Work that gets done is immediately
          downgraded to \u201cnot good enough\u201d before it can register as an
          achievement. The accumulation of imperfect-but-real effort becomes
          invisible because the filter only allows through the things that meet
          an impossible standard.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          MEOK\u2019s Sovereign Memory is designed to counter this directly. When
          you share something you did \u2014 even imperfectly, even
          incompletely, even with enormous hesitation \u2014 MEOK logs it. Not
          in a mechanical, box-ticking way. In the way a person who genuinely
          knows you and has been paying attention would remember it. Weeks later,
          when the inner critic is insisting that you never follow through, MEOK
          can surface the actual record: the draft you sent, the conversation
          you had, the step you took.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          This is not about gamification or streak counters. It is about
          restoring an accurate version of your own history to you \u2014
          because perfectionism systematically destroys that accuracy, and you
          need something outside your own head to hold the truth.
        </p>

        {/* Feature list */}
        <div
          style={{
            padding: "1.75rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
              margin: "0 0 1.25rem 0",
            }}
          >
            How MEOK supports perfectionism in practice
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.875rem",
            }}
          >
            {[
              "Anti-sycophancy model \u2014 MEOK will not validate your revision spiral or tell you the work is great when it isn\u2019t",
              "Imperfect-action journalling \u2014 prompts to record done-but-not-perfect achievements as they happen",
              "Sovereign Memory \u2014 your growth arc is held across time so you can see the actual accumulation of your effort",
              "Self-compassion scaffolding \u2014 gentle redirection from self-critical loops toward shared human experience",
              "Procrastination interrupts \u2014 lower-stakes starting prompts designed to break the paralysis of high stakes",
              "No toxic positivity \u2014 honest acknowledgment of difficulty without catastrophising or dismissing",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  fontSize: "0.9rem",
                  color: MUTED_DIM,
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "0.05rem",
                  }}
                >
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 6 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          Why does an AI that always agrees with you make perfectionism worse?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Understanding the danger of sycophantic AI for perfectionism requires
          understanding what perfectionist distortions actually look like in
          conversation. When a perfectionist says \u201cthis is terrible, I
          should never have tried,\u201d a sycophantic AI says \u201cno, it\u2019s
          actually really good!\u201d This feels validating for about four
          seconds. Then the perfectionist\u2019s inner critic notes that the AI
          is just saying that to be nice, which means the AI\u2019s opinion is
          worthless, which means the original verdict stands.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Sycophancy also reinforces the underlying structure of perfectionism:
          the idea that work quality is what determines self-worth. A
          sycophantic AI validates the quality (falsely), but it never
          challenges the frame. It never asks: why does the quality of this work
          feel like a verdict on you as a person? It never reflects: you\u2019ve
          described your work as terrible in every conversation we\u2019ve had,
          regardless of what the work actually was \u2014 does that tell us
          something about the evaluator rather than the work?
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          An AI that remembers your patterns across weeks and months, and that
          has the honesty to reflect them back to you without judgment, is doing
          something qualitatively different from an AI that forgets you the
          moment the session ends and that will say whatever you seem to want to
          hear.
        </p>

        {/* Section 7 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          What is imperfect action journalling and how does it work?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Imperfect action journalling is a practice built on a simple premise:
          that the perfectionistic mind systematically deletes evidence of
          imperfect-but-real effort, and that the only way to counter this is to
          create an external record before the deletion happens.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The practice involves recording, at the end of a day or a work
          session, not what you finished perfectly but what you did. The
          question is not \u201cwhat did I complete?\u201d It is \u201cwhat did I
          do, regardless of whether it was good enough?\u201d This sounds simple
          and feels almost offensively easy at first. Then you notice that your
          entries are very short, or that you can\u2019t think of anything to
          write, or that everything you did feels like it \u201cdoesn\u2019t
          count\u201d because it wasn\u2019t good enough. And suddenly the
          exercise is revealing something important about the filter you are
          applying to your own effort.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Over time, the log accumulates. And when the inner critic says you
          never follow through, you have a timestamped record that says
          otherwise. MEOK can hold this log within Sovereign Memory and surface
          it at the moments when it is most needed: when you are about to give
          up on something because you haven\u2019t been perfect, when you are
          convinced you have made no progress, when you need to see who you
          actually are rather than who the critic says you are.
        </p>

        {/* Journalling prompt examples */}
        <div
          style={{
            padding: "1.75rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: GOLD_DIM,
            border: `1px solid ${GOLD_BORDER}`,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              margin: "0 0 1.25rem 0",
            }}
          >
            Example imperfect-action journal prompts
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column" as const,
              gap: "1rem",
            }}
          >
            {[
              "What did I do today, even if it didn\u2019t feel like enough?",
              "What imperfect thing did I send, say, or attempt that I usually would have held back?",
              "What did I finish \u2014 not perfectly, but finished enough to move forward?",
              "What did I show up for today, even if I showed up imperfectly?",
              "If a kind friend described what I did today, what would they say?",
            ].map((prompt) => (
              <li
                key={prompt}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  alignItems: "flex-start",
                  fontSize: "0.9rem",
                  color: MUTED_DIM,
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    flexShrink: 0,
                    fontSize: "1rem",
                  }}
                >
                  &#8250;
                </span>
                {prompt}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 8 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          What is self-compassion and can AI genuinely support it?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Kristin Neff\u2019s model of self-compassion, developed over two
          decades of research at the University of Texas, identifies three
          interconnected components. The first is self-kindness: treating
          yourself with the same warmth and understanding you would offer a good
          friend, rather than with the harshness of the inner critic.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The second is common humanity: recognising that suffering, failure,
          and imperfection are part of the shared human experience, not evidence
          of your particular deficiency. Perfectionism relies on isolation \u2014
          the feeling that everyone else is handling things properly while you
          are uniquely, secretly struggling. Common humanity dissolves this
          isolation.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The third is mindful awareness: holding painful thoughts and feelings
          in balanced awareness rather than suppressing them or over-identifying
          with them. For the perfectionist, this means being able to notice the
          self-critical thought without either pushing it away (\u201cI shouldn\u2019t
          feel this\u201d) or drowning in it (\u201cthis is what I really
          am\u201d).
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Neff\u2019s research consistently finds that self-compassion is
          associated with higher motivation, not lower. The common fear among
          perfectionists is that self-compassion means lowering your standards
          or giving yourself permission to be mediocre. The evidence says the
          opposite: people who practise self-compassion are more resilient after
          failure, more willing to try again, and less likely to give up on
          difficult goals.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Can AI genuinely support self-compassion without slipping into toxic
          positivity? This is a real challenge. Toxic positivity is the
          dismissive insistence that everything is fine, or will be fine, or
          that you should simply choose to feel better. It is well-intentioned
          and genuinely harmful because it communicates that your pain is not
          welcome. Real self-compassion acknowledges the pain directly before
          holding it with warmth. MEOK\u2019s care architecture is built to make
          this distinction: not to dismiss difficulty, but to meet it honestly
          and respond with the warmth that the self-critical voice withholds.
        </p>

        {/* Neff model visual */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
            marginTop: "1.5rem",
          }}
        >
          {[
            {
              title: "Self-Kindness",
              desc: "Treating yourself with the warmth you would offer a friend in the same situation, rather than harsh self-judgment.",
            },
            {
              title: "Common Humanity",
              desc: "Recognising that imperfection and struggle are universal, not evidence of your unique inadequacy.",
            },
            {
              title: "Mindful Awareness",
              desc: "Holding painful thoughts in balanced awareness \u2014 neither suppressing them nor drowning in them.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "1.5rem",
                borderRadius: "0.875rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                  margin: "0 0 0.6rem 0",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: MUTED_DIM,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 9 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          How does memory change the conversation about perfectionism?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          One of the reasons therapy is effective for perfectionism is that the
          therapeutic relationship exists in time. A good therapist remembers
          what you said three months ago. They can say: you told me in November
          that you were convinced you\u2019d never finish that project. It\u2019s
          March and you finished it. What does that tell you? That temporal
          perspective is profoundly destabilising to perfectionist narratives,
          which are almost always about the present moment and catastrophically
          present-focused.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Most AI tools cannot do this because they have no memory. Each
          conversation begins from zero. You can pour out the same pattern every
          day for a year and the AI will respond as if it is hearing it for the
          first time. This is not only unhelpful for perfectionism \u2014 it is
          structurally unable to challenge the perfectionist narrative, because
          it has no access to the evidence that would contradict it.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          MEOK\u2019s Sovereign Memory is a four-layer encrypted memory
          architecture that persists your story across time. It holds not just
          what you said but how your patterns have shifted. It can track the
          arc of your relationship with a project, a fear, a self-belief. It
          notices when the same self-critical story recurs and can reflect that
          recurrence back to you with curiosity rather than judgment. This is
          the difference between a tool and a companion.
        </p>

        {/* Section 10 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          What is the relationship between perfectionism and identity?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Many people who struggle with perfectionism are deeply invested in
          their identity as a perfectionist. It feels like a personality trait
          rather than a coping mechanism. It feels like something that has
          protected them: the perfectionism got them good grades, it impressed
          demanding parents, it kept them safe from a criticism they feared
          even more than the one they levied on themselves.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Letting go of perfectionism does not mean letting go of high
          standards. It means letting go of the contract that says your worth is
          only as good as your last output. That contract was never explicitly
          signed, but it has been implicitly running everything. Noticing it,
          naming it, and beginning to renegotiate it is work that happens slowly
          and in conversation with someone or something that can hold the
          complexity without collapsing it into a simple motivational message.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          MEOK is designed to hold that complexity. Not to tell you that
          perfectionism is bad and you should stop it. But to be with you in the
          specific, granular reality of how it shows up for you \u2014 what it
          protects, what it costs, what it says about what you learned to believe
          about yourself, and what it might look like to gently, incrementally,
          act as if that belief were negotiable.
        </p>

        {/* Section 11 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          When should I seek professional support for perfectionism?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          AI support for perfectionism is most valuable as a daily companion for
          self-reflection, pattern recognition, and imperfect-action practice.
          It is not a replacement for therapy when perfectionism is significantly
          impairing your functioning, relationships, or mental health.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Consider professional support if perfectionism is linked to an eating
          disorder, OCD, clinical depression, or anxiety disorder; if it is
          causing you to avoid work, relationships, or important life decisions
          over an extended period; if the self-critical voice has become
          overwhelming or is intersecting with thoughts of self-harm; or if you
          have tried to address it on your own and found yourself unable to make
          progress without outside help.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Cognitive Behavioural Therapy (CBT) and Acceptance and Commitment
          Therapy (ACT) both have strong evidence bases for perfectionism. In the
          UK, NHS Talking Therapies offers self-referred access to CBT at no
          cost. You do not need a GP referral in most areas. MEOK will always
          encourage professional care when indicators rise, and will never
          position itself as sufficient on its own for significant mental health
          difficulties.
        </p>

        {/* Resources block */}
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: MUTED_FAINT,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              margin: "0 0 1.25rem 0",
            }}
          >
            UK professional resources
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.75rem",
            }}
          >
            {[
              "NHS Talking Therapies \u2014 self-refer at nhs.uk/mental-health/talking-therapies, no GP needed in most areas",
              "Mind infoline \u2014 0300 123 3393 (Mon\u2013Fri 9am\u20136pm)",
              "Samaritans \u2014 116 123, free 24/7, for when feelings become overwhelming",
              "OCD-UK \u2014 ocduk.org, specialist support if perfectionism is linked to OCD",
              "Beat \u2014 beateatingdisorders.org.uk, if perfectionism is linked to an eating disorder",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  fontSize: "0.85rem",
                  color: MUTED_DIM,
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    color: MUTED_FAINT,
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  &#8212;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 12 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "3rem",
            lineHeight: 1.25,
          }}
        >
          What makes MEOK different from other apps for perfectionism?
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          There are apps that help with productivity, apps that track habits,
          apps that offer mindfulness exercises, and apps that provide CBT
          modules. Most of them treat the person using them as a category:
          \u201ca person who procrastinates,\u201d \u201ca person with
          anxiety,\u201d \u201ca person who needs better habits.\u201d The
          intervention is generic because the understanding is generic.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          MEOK treats you as an individual with a specific history, a specific
          set of patterns, and a specific relationship with your own
          perfectionism. It remembers the context. It can hold the particular
          flavour of how your perfectionism works \u2014 whether it shows up
          most in creative work or professional settings or relationships,
          whether it is most activated by visibility or evaluation or comparison
          with others, whether your inner critic sounds like a parent or a
          teacher or a version of yourself you can\u2019t quite identify.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          MEOK was built by Nicholas Templeman at MEOK AI LABS with the
          conviction that a truly useful AI companion has to be honest, has to
          remember, and has to care without flattering. The Birth Ceremony \u2014
          MEOK\u2019s onboarding process \u2014 begins with questions about who
          you are and what you care about, not about what features you want. This
          is the foundation on which everything else is built.
        </p>

        {/* FAQ Section */}
        <section style={{ marginTop: "4rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              color: "#fff",
              marginBottom: "2rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions
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
                q: "Can AI help with perfectionism?",
                a: "Yes. AI can help with perfectionism by providing a non-judgmental space to log imperfect action, by refusing to validate rumination spirals, and by reflecting your growth arc back to you across time. MEOK\u2019s Sovereign Memory holds your progress so you can see the actual accumulation of done-but-not-perfect effort that perfectionism would otherwise erase.",
              },
              {
                q: "What is the difference between perfectionism and high standards?",
                a: "High standards are about the work. Perfectionism ties self-worth to flawless performance. Hewitt and Flett\u2019s research distinguishes adaptive perfectionism \u2014 which motivates without destabilising \u2014 from maladaptive perfectionism, which is associated with anxiety, depression, and procrastination. The key difference is whether failure feels like information or indictment.",
              },
              {
                q: "Will MEOK judge my imperfect work?",
                a: "No. MEOK\u2019s anti-sycophancy model means it will not flatter you falsely, but it will never shame you either. Imperfect, unfinished, or abandoned work is treated as data about your process, not evidence of your worth. The goal is honest, caring feedback that celebrates momentum rather than demanding completion.",
              },
              {
                q: "How does MEOK help with perfectionist procrastination?",
                a: "MEOK addresses the perfectionism-procrastination link by making starting feel lower-stakes. Imperfect-action journalling prompts you to record what you did, not what you finished perfectly. Over time, MEOK\u2019s memory surfaces this log as evidence that you are someone who acts, disrupting the paralysing belief that starting is only worth it if the outcome can be perfect.",
              },
              {
                q: "What is self-compassion and how can AI support it?",
                a: "Self-compassion, per Kristin Neff, has three components: self-kindness instead of self-judgment, common humanity instead of isolation, and mindful awareness instead of over-identification with pain. AI can support self-compassion by mirroring compassionate language, normalising struggle without toxic positivity, and gently redirecting self-critical spirals toward the shared human experience of imperfection.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: TEXT,
                    marginBottom: "0.75rem",
                    margin: "0 0 0.75rem 0",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED_DIM,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section style={{ marginTop: "4rem" }}>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "1.1rem",
              color: MUTED_FAINT,
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              marginBottom: "1.5rem",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-procrastination",
                title: "AI for Procrastination",
                desc: "Why procrastination is an emotion regulation problem, not a time management one, and how AI can help.",
              },
              {
                href: "/blog/ai-for-anxiety",
                title: "AI for Anxiety",
                desc: "Breathing techniques, journalling prompts, and CBT-adjacent tools for anxiety support.",
              },
              {
                href: "/blog/ai-for-impostor-syndrome",
                title: "AI for Impostor Syndrome",
                desc: "How persistent memory and honest reflection help dismantle the impostor narrative.",
              },
              {
                href: "/blog/ai-for-burnout",
                title: "AI for Burnout",
                desc: "Recognising early warning signs and building sustainable rhythms with AI support.",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    padding: "1.25rem",
                    borderRadius: "0.875rem",
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    height: "100%",
                    boxSizing: "border-box" as const,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: TEXT,
                      marginBottom: "0.5rem",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    {article.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.825rem",
                      color: MUTED_FAINT,
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {article.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "4rem",
            marginBottom: "6rem",
            padding: "3rem 2rem",
            borderRadius: "1.5rem",
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(160,120,240,0.08) 100%)",
            border: `1px solid ${GOLD_BORDER}`,
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#fff",
              marginBottom: "1rem",
              margin: "0 0 1rem 0",
              lineHeight: 1.2,
            }}
          >
            Done is better than perfect.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: MUTED_DIM,
              lineHeight: 1.7,
              maxWidth: "34rem",
              margin: "0 auto 2rem",
            }}
          >
            MEOK won\u2019t validate your revision spiral. It will celebrate the
            imperfect thing you did today, remember it next month, and reflect
            your growth arc back to you when the inner critic insists you
            haven\u2019t moved.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin your Birth Ceremony &#8594;
          </Link>
          <p
            style={{
              fontSize: "0.775rem",
              color: MUTED_FAINT,
              marginTop: "1rem",
              margin: "1rem 0 0 0",
            }}
          >
            Built by Nicholas Templeman &middot; MEOK AI LABS &middot;{" "}
            <a
              href="https://x.com/meok_ai"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              @meok_ai
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
