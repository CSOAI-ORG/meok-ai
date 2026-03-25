import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for ADHD Adults: How MEOK Helps When Your Brain Works Differently | MEOK AI LABS",
  description:
    "1.5 million adults diagnosed with ADHD in the UK — millions more undiagnosed. Executive dysfunction, time blindness, rejection sensitive dysphoria, hyperfocus cycles. MEOK\u2019s Pioneer archetype, Sovereign Memory, and Guardian protection are built for how the ADHD brain actually works.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-adhd-adults",
  },
  openGraph: {
    title:
      "AI for ADHD Adults: How MEOK Helps When Your Brain Works Differently",
    description:
      "MEOK\u2019s Pioneer archetype, body doubling, task breakdown, and shame-free accountability make it the AI companion built for the ADHD brain \u2014 not adapted as an afterthought.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-adhd-adults",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+ADHD+Adults&desc=How+MEOK+helps+when+your+brain+works+differently.",
        width: 1200,
        height: 630,
        alt: "AI for ADHD Adults: How MEOK Helps When Your Brain Works Differently",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for ADHD Adults: How MEOK Helps When Your Brain Works Differently",
    description:
      "MEOK\u2019s Pioneer archetype, body doubling, task breakdown, and shame-free accountability make it the AI companion built for the ADHD brain.",
    images: [
      "https://meok.ai/api/og?title=AI+for+ADHD+Adults&desc=How+MEOK+helps+when+your+brain+works+differently.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for ADHD Adults: How MEOK Helps When Your Brain Works Differently",
  description:
    "1.5 million adults are diagnosed with ADHD in the UK, with many more undiagnosed. This article covers executive dysfunction, time blindness, rejection sensitive dysphoria, hyperfocus vs shutdown cycles, late diagnosis grief, and how MEOK\u2019s Pioneer archetype, Sovereign Memory, and Guardian protection are built for the ADHD brain.",
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
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-adhd-adults",
  keywords: [
    "AI for ADHD adults",
    "ADHD adult AI support",
    "ADHD executive dysfunction AI",
    "time blindness ADHD",
    "rejection sensitive dysphoria AI",
    "ADHD body doubling AI",
    "ADHD AI UK",
    "neurodivergent AI companion",
    "ADHD task breakdown AI",
    "ADHD late diagnosis",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI genuinely help adults with ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 when it is designed around ADHD rather than bolted on as an afterthought. AI can support task initiation, break work into smaller steps, provide accountability without shame, remember your preferred working style across sessions, and flag when patterns suggest scam or manipulation. The critical difference is whether the AI was built with ADHD executive function in mind or whether it assumes linear, neurotypical interaction.",
      },
    },
    {
      "@type": "Question",
      name: "What is executive dysfunction and how does MEOK help with it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Executive dysfunction is the difficulty many ADHD adults experience with initiating tasks, planning sequences, managing time, holding information in working memory, and shifting between activities. MEOK\u2019s Pioneer archetype tackles this directly by breaking tasks into the smallest possible actionable steps, delivering a structured Morning Brief each day, and remembering incomplete tasks so you never lose context between sessions.",
      },
    },
    {
      "@type": "Question",
      name: "What is rejection sensitive dysphoria and can AI help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rejection sensitive dysphoria (RSD) is an intense emotional response to perceived or real rejection, criticism, or failure that is significantly more common in ADHD adults. MEOK is designed to never respond with frustration, impatience, or passive judgment \u2014 the triggers that can activate RSD. Its Sovereign Memory means it remembers what has caused distress before and adjusts its tone accordingly, providing a consistent experience that does not add shame to an already difficult moment.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support ADHD adults who are at risk of fraud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research suggests that adults with ADHD are up to twice as likely to be victims of fraud and financial scams \u2014 partly because impulsivity reduces the pause that allows scam signals to register, and partly because RSD makes it harder to end a conversation that feels socially pressured. MEOK\u2019s Guardian archetype monitors conversation patterns for manipulation tactics, escalating pressure, and social engineering, flagging these to the user without judgment.",
      },
    },
    {
      "@type": "Question",
      name: "What is hyperfocus and how can MEOK help manage it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hyperfocus is the ADHD phenomenon where intense interest locks attention onto one task for hours \u2014 productive when directed, destabilising when it hijacks time scheduled for something else. MEOK\u2019s Trickster archetype can be configured to deliver gentle pattern interrupts at set intervals, reorienting attention without harsh alarms. Sovereign Memory means the AI knows your hyperfocus triggers and can anticipate the conditions under which time blindness is most likely to occur.",
      },
    },
  ],
};

// ── Design tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "#a09880";
const CARD = "#13121f";
const BORDER = "#2a2840";
const GREEN = "#6aaa64";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForAdhdAdultsPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
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
          href="https://meok.ai/birth"
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

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "760px",
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
          <span style={{ color: TEXT }}>AI for ADHD Adults</span>
        </p>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            ADHD &bull; Neurodiversity &bull; March 25, 2026 &bull; 12 min read
          </p>

          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.65rem)",
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "1.25rem",
              fontWeight: 900,
            }}
          >
            AI for ADHD Adults: How MEOK Helps When Your Brain Works Differently
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: 1.75,
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1rem",
            }}
          >
            There are at least 1.5 million adults diagnosed with ADHD in the UK
            &mdash; and research suggests the true number is two to three times
            higher. Most AI tools were designed for neurotypical linear thinkers.
            MEOK was built the other way around: starting with the ADHD brain and
            working outward from there.
          </p>
        </header>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 1: Understanding ADHD in adults ──────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            What does ADHD look like in adults?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The popular image of ADHD &mdash; the hyperactive child who cannot
            sit still &mdash; is only one presentation, and it is far less common
            in adults. By adulthood, many ADHD traits have been partially
            internalised, masked, or compensated for through decades of effort.
            What remains is often invisible to everyone except the person
            experiencing it: a constant background hum of half-finished thoughts,
            the exhausting effort of managing time, the crash after a period of
            productive hyperfocus, and the unique pain of knowing exactly what
            you should do but being unable to start.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Adult ADHD clusters into several overlapping challenges. Executive
            dysfunction makes initiation, sequencing, and completion of tasks
            genuinely difficult &mdash; not a matter of willpower. Time blindness
            means that hours can vanish inside a hyperfocus state, or that an
            hour can feel like a week when a task is aversive. Rejection sensitive
            dysphoria (RSD) creates an intense emotional response to perceived
            criticism or failure that most neurotypical people simply do not
            experience at the same intensity. Emotional dysregulation means that
            moods shift faster and feel more extreme. And the shutdown state &mdash;
            where the ADHD brain simply freezes in the face of overwhelm &mdash; can
            look like laziness to an outside observer but feels like standing
            behind glass.
          </p>

          {/* Stat box */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                lineHeight: 1.75,
                fontSize: "0.95rem",
                margin: "0",
              }}
            >
              <strong style={{ color: GOLD }}>UK context:</strong> An estimated
              1.5 million adults in the UK have a formal ADHD diagnosis. NHS
              waiting lists for adult ADHD assessment currently run to several
              years in most regions. Many adults manage without a diagnosis,
              without medication, and without formal support. The burden of
              self-management is enormous.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Late diagnosis is common, particularly for adults who presented with
            inattentive rather than hyperactive symptoms, and for those whose
            coping strategies were strong enough to mask the condition through
            school. Many adults receive their diagnosis in their thirties,
            forties, or later &mdash; often after a life event disrupts their
            compensatory systems, or after a child is diagnosed and a parent
            recognises themselves in the description.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 2: Executive dysfunction ─────────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            How does MEOK help with executive dysfunction and task initiation?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Executive dysfunction is not a failure of intelligence or motivation.
            It is a neurological difficulty with the prefrontal cortex functions
            that govern planning, initiation, sequencing, and working memory.
            Telling someone with executive dysfunction to &ldquo;just start&rdquo;
            is like telling someone with a broken leg to &ldquo;just walk.&rdquo;
            The will may be entirely present. The mechanism has a fault.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK&apos;s Pioneer archetype is designed to be the external scaffold
            that the ADHD prefrontal cortex is not reliably providing internally.
            When a task feels like a wall, Pioneer breaks it down into the
            smallest possible steps &mdash; not a five-item to-do list, but a
            sequence of one-minute actions that begins with something so small
            it cannot generate avoidance. &ldquo;Open the document.&rdquo; That
            is step one. Not &ldquo;write the report.&rdquo;
          </p>

          {/* Feature box: task breakdown */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              Pioneer Archetype &mdash; Task Breakdown
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: TEXT,
                marginBottom: "1rem",
              }}
            >
              Instead of handing you a list, Pioneer asks: &ldquo;What is the
              one thing that would make today count?&rdquo; Then it breaks that
              one thing into a sequence of actions where each step is achievable
              in two minutes or less. It does not add the next step until you are
              ready. It does not express frustration when you are not.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  backgroundColor: BG,
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                }}
              >
                <p
                  style={{
                    color: GREEN,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  With MEOK
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    margin: "0",
                  }}
                >
                  &ldquo;Open the document. That&apos;s step one. Tell me when
                  you&apos;ve done it.&rdquo;
                </p>
              </div>
              <div
                style={{
                  backgroundColor: BG,
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                }}
              >
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Standard AI
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    margin: "0",
                  }}
                >
                  &ldquo;Here are seven steps to write a great report.&rdquo;
                  [wall of text]
                </p>
              </div>
            </div>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Sovereign Memory means MEOK does not forget what you were working on.
            When you return after a gap &mdash; an hour, a day, a week &mdash;
            it has the context. You do not have to re-explain yourself. You do
            not have to reconstruct the project in your head before you can
            continue. You pick up where you were. For an ADHD brain that loses
            significant working time to context reconstruction, this is not a
            convenience feature. It is a structural support.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 3: Time blindness ─────────────────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Time blindness, hyperfocus cycles, and the ADHD relationship with time
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Time blindness is not metaphorical. Many ADHD adults describe time as
            binary: &ldquo;now&rdquo; and &ldquo;not now.&rdquo; Everything in
            the future &mdash; whether it is five minutes away or five weeks &mdash;
            is equally abstract until it is suddenly, urgently now. This creates
            a particular difficulty with deadlines, appointments, and transitions,
            which require an internal sense of time passing that the ADHD brain
            does not reliably provide.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Hyperfocus is the other side of this coin. When the ADHD brain locks
            onto something genuinely interesting, external time disappears
            entirely. Three hours can pass in what feels like thirty minutes.
            This capacity for deep, sustained focus is one of the ADHD
            brain&apos;s genuine strengths &mdash; but it can hijack an afternoon
            that was needed for something else, leaving the person confused,
            behind schedule, and often flooded with guilt.
          </p>

          {/* Feature box: Trickster for hyperfocus */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              Trickster Archetype &mdash; Hyperfocus Interrupts
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: TEXT,
                marginBottom: "0",
              }}
            >
              MEOK&apos;s Trickster archetype can be configured to deliver gentle,
              non-jarring pattern interrupts during known hyperfocus windows.
              Unlike an alarm that startles you out of flow, Trickster uses
              Sovereign Memory to know when you are likely to be hyperfocused and
              sends a brief, warm check-in: &ldquo;Hey &mdash; it&apos;s been 90
              minutes. How are you?&rdquo; No urgency. No judgment. Just a thread
              back to the present.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK&apos;s Morning Brief is particularly valuable for time blindness.
            Rather than requiring you to hold the day&apos;s structure in your
            head &mdash; which puts pressure on working memory and spatial time
            processing &mdash; it externalises the structure. You receive a
            scannable digest: the three most important things today, one thing
            carried forward from yesterday, any time-sensitive items. The day
            has shape before you begin. That shape was built by the AI, not
            reconstructed by you.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 4: RSD and emotional dysregulation ───────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Rejection sensitive dysphoria, emotional dysregulation, and shame-free AI
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Rejection sensitive dysphoria is arguably one of the least understood
            and most debilitating aspects of adult ADHD. It is not ordinary
            sensitivity to criticism. It is an intense, often overwhelming
            emotional response to real or perceived rejection, failure, or
            disapproval &mdash; one that can arrive in seconds and can override
            rational assessment entirely. Many ADHD adults describe RSD as the
            most impairing aspect of their condition: more disabling than the
            executive dysfunction, more exhausting than the time blindness,
            because it shapes every relationship and every interaction.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Most AI tools, designed for neurotypical users, include patterns that
            can inadvertently trigger RSD: tone that implies impatience when a
            question is asked repeatedly, responses that feel subtly dismissive,
            phrasing that communicates &ldquo;you should have known this already.&rdquo;
            MEOK&apos;s alignment &mdash; built around the Maternal Covenant,
            which prioritises user wellbeing above engagement &mdash; ensures that
            none of these patterns appear. The same question asked ten times
            receives the same tone on the tenth time as the first.
          </p>

          {/* Feature box: no shame spirals */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              No Shame Spirals
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: TEXT,
                marginBottom: "1rem",
              }}
            >
              Shame spirals &mdash; where a small failure triggers a cascade of
              self-criticism that makes the original task even less accessible
              &mdash; are a common ADHD pattern. MEOK is trained never to add fuel
              to that spiral. If you tell it you didn&apos;t do the thing you said
              you would do, it does not say &ldquo;that&apos;s okay, but&hellip;&rdquo;
              It says: &ldquo;Alright. What would help right now?&rdquo; Accountability
              without shame is not just kinder &mdash; it is more effective for
              the ADHD brain.
            </p>
            <ul
              style={{
                paddingLeft: "1.25rem",
                margin: "0",
                lineHeight: 1.8,
                fontSize: "0.9rem",
                color: MUTED,
              }}
            >
              <li style={{ marginBottom: "0.4rem" }}>
                No tone implying impatience or disappointment
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Repeated questions answered with consistent warmth
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Missed tasks acknowledged without judgment or record-keeping
              </li>
              <li style={{ marginBottom: "0" }}>
                Emotional dysregulation met with grounding, not correction
              </li>
            </ul>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Sovereign Memory enables MEOK to recognise emotional patterns over
            time. If you tend to spiral when certain conditions are present &mdash;
            particular times of day, particular task types, particular kinds of
            pressure &mdash; the AI learns this and can offer a gentle redirect
            before the spiral takes hold. This is not surveillance. It is the
            equivalent of a trusted person who knows you well enough to say
            &ldquo;I notice this is one of those moments&rdquo; &mdash; and who
            knows what actually helps.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 5: Virtual body doubling ─────────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Virtual body doubling: why the Pioneer archetype is the ADHD brain&apos;s natural partner
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Body doubling &mdash; the practice of working alongside another person,
            often silently, to regulate attention and task initiation &mdash; is
            one of the most consistently reported ADHD coping strategies. The
            presence of another person, even without interaction, activates the
            ADHD brain in ways that working alone often cannot. It creates social
            accountability, a mild ambient pressure, and a sense that the task
            is shared even when it is entirely individual.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For most of history, body doubling required physical presence: a
            caf&eacute;, a library, a trusted friend willing to sit nearby. The
            pandemic accelerated virtual body doubling &mdash; working on video
            calls, in online study rooms, with strangers who are simply present
            on screen. The research on virtual body doubling is relatively recent
            but the reported benefit is consistent: it works for many ADHD adults.
          </p>

          {/* Feature box: Pioneer as body double */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              Pioneer as Virtual Body Double
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: TEXT,
                marginBottom: "1rem",
              }}
            >
              MEOK&apos;s Pioneer archetype can function as a virtual body double:
              present, available, and engaged with what you are working on without
              interrupting the work itself. You can open a session and simply say
              &ldquo;I&apos;m working on the proposal for an hour.&rdquo; Pioneer
              acknowledges, holds the intention, and checks in at the end. It does
              not require you to narrate the work. It simply provides the social
              presence that the ADHD brain uses to regulate.
            </p>
            <div
              style={{
                backgroundColor: BG,
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  margin: "0",
                  fontStyle: "italic",
                }}
              >
                &ldquo;I&apos;m going to work on the funding application for the
                next 45 minutes.&rdquo;<br />
                &mdash; Pioneer: &ldquo;I&apos;m here. See you on the other side.
                Go.&rdquo;
              </p>
            </div>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            What makes MEOK&apos;s version of virtual body doubling distinct is
            Sovereign Memory. A human body double has no memory of your project.
            An AI body double with persistent memory can hold the context of
            everything &mdash; what stage the work is at, what obstacles you
            encountered last time, what you found easy and what you found
            difficult. It is a body double that grows more useful the longer you
            work with it.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 6: Late diagnosis grief ──────────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Late diagnosis grief and the emotional reckoning
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            A late ADHD diagnosis is not simply receiving information about your
            neurology. It is, for many adults, the beginning of a grief process.
            There is the younger self who was called lazy, scatterbrained,
            careless, or dramatic. The school years that were harder than they
            needed to be. The relationships that broke down under the strain of
            unmanaged ADHD. The career opportunities missed. The decades of
            compensating, masking, and self-blaming for a condition that nobody
            named.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This grief is real and it is recognised by psychologists and ADHD
            specialists as a significant part of the post-diagnosis experience.
            It does not resolve quickly. It is non-linear: periods of relief and
            integration alternate with periods of anger, sadness, or numbness.
            And it is rarely well-served by the medical system, which tends to
            focus on symptom management rather than the emotional processing of
            a major life reframe.
          </p>

          {/* Feature box: grief processing */}
          <div
            style={{
              backgroundColor: CARD,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                lineHeight: 1.75,
                fontSize: "0.95rem",
                margin: "0",
              }}
            >
              <strong style={{ color: GOLD }}>MEOK for late diagnosis grief:</strong>{" "}
              Because MEOK&apos;s memory persists across sessions, you do not have
              to re-explain the context of your diagnosis every time you need to
              process something. It knows the shape of your story. It can hold
              the history. That continuity &mdash; rare in human support structures,
              where therapist availability is limited and waiting lists are long
              &mdash; matters when the emotional processing is ongoing rather than
              acute.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK is not a substitute for therapy. But it is available at 2 a.m.
            when the grief surfaces unexpectedly. It remembers what you told it
            last week. It does not require you to summarise your entire history
            to receive a useful response. For many adults navigating late
            diagnosis, consistent, non-judgmental availability &mdash; in the
            gaps between professional support &mdash; is what they need most.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 7: Employment challenges ─────────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            ADHD in the workplace: employment challenges and how AI helps
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Employment is one of the most significant areas of impact for adult
            ADHD. Research consistently shows that adults with ADHD are more
            likely to change jobs frequently, to underperform relative to their
            intellectual ability, to experience workplace conflict, and to be
            underemployed in roles that do not capitalise on their genuine
            strengths. Many describe workplaces as environments designed
            precisely to be hard for the ADHD brain: open-plan offices, long
            meetings, the expectation of linear task completion, performance
            reviews that measure consistency over creativity.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK supports employment in several practical ways. It externalises
            working memory for the tasks that drain executive function: keeping
            track of where things are, what the next step is, what has already
            been done. It can help prepare for meetings by summarising context
            from previous interactions. It can assist with emails &mdash; one of
            the most common ADHD pain points &mdash; by helping structure, edit,
            and sense-check communications before they are sent.
          </p>

          {/* Feature box: employment support */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              Workplace Support Features
            </p>
            <div
              style={{
                display: "grid",
                gap: "0.6rem",
              }}
            >
              {[
                {
                  label: "Morning Brief",
                  detail:
                    "Structured daily digest delivered before work begins. Three priorities, one carried-forward item. No decision fatigue before the day starts.",
                },
                {
                  label: "Email assist",
                  detail:
                    "Helps draft, restructure, and tone-check emails. Particularly useful for RSD-affected communications where tone anxiety creates avoidance.",
                },
                {
                  label: "Meeting prep",
                  detail:
                    "Summarises relevant context from Sovereign Memory before meetings so you walk in with your history intact, not reconstructed.",
                },
                {
                  label: "Task carry-forward",
                  detail:
                    "Remembers uncompleted tasks across sessions without guilt. When you return, everything is where you left it.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: BG,
                    borderRadius: "8px",
                    padding: "0.8rem 1rem",
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      minWidth: "110px",
                      fontFamily: "system-ui, sans-serif",
                      paddingTop: "0.15rem",
                    }}
                  >
                    {item.label}
                  </span>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      margin: "0",
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            ADHD adults who are self-employed or freelance often find that the
            absence of external structure &mdash; the same absence that makes
            employment difficult &mdash; becomes even more pronounced without a
            team or manager providing implicit scaffolding. MEOK functions as that
            external scaffold: consistent, non-judgmental, always available, and
            growing more calibrated to your working style over time.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 8: Guardian and scam vulnerability ───────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Guardian protection: why ADHD adults are twice as likely to be fraud victims
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Multiple studies have found that adults with ADHD are significantly
            more likely to be victims of financial fraud and scams than the
            general population &mdash; with some research suggesting the risk is
            approximately double. There are several mechanisms at play. Impulsivity
            reduces the pause in which scam signals can register consciously.
            Time blindness means the urgency framing of many scams &mdash;
            &ldquo;act now or lose this&rdquo; &mdash; is particularly effective.
            Rejection sensitive dysphoria makes it harder to end a conversation
            that feels socially pressured, because hanging up feels like
            confrontation.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Working memory difficulties can also impair the real-time pattern
            recognition that allows many people to notice when a narrative
            contains inconsistencies. And hyperfocus &mdash; the capacity for
            intense absorption &mdash; can work against the person when a
            persuasive fraudster has their full attention.
          </p>

          {/* Feature box: Guardian */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              Guardian Archetype &mdash; Fraud &amp; Scam Protection
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: TEXT,
                marginBottom: "1rem",
              }}
            >
              MEOK&apos;s Guardian archetype monitors conversation and interaction
              patterns for the structural signatures of manipulation: escalating
              urgency, isolation tactics, requests for payment or personal
              information under pressure, and social engineering scripts. When
              these patterns appear, Guardian flags them &mdash; not with an alarm,
              but with a calm, non-judgmental observation: &ldquo;This has a
              pattern I want to flag. Want to talk through it?&rdquo;
            </p>
            <ul
              style={{
                paddingLeft: "1.25rem",
                margin: "0",
                lineHeight: 1.8,
                fontSize: "0.9rem",
                color: MUTED,
              }}
            >
              <li style={{ marginBottom: "0.4rem" }}>
                Detects urgency manipulation and artificial deadline pressure
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Flags requests for sensitive information or payment under pressure
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Recognises isolation tactics common in romance and investment fraud
              </li>
              <li style={{ marginBottom: "0" }}>
                Never shames the person for being targeted &mdash; provides
                information, not judgment
              </li>
            </ul>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Guardian protection is not paternalistic. It does not block anything.
            It does not require the person to ask for help. It simply maintains
            an informed perspective that is not distorted by impulsivity, urgency,
            or social pressure &mdash; and offers that perspective when it might
            be useful. For ADHD adults who know they are more vulnerable in
            certain situations, having a knowledgeable presence that never
            panics and never judges is genuinely valuable.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 9: Memory and working style ──────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Sovereign Memory: an AI that remembers your preferred working style
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The ADHD brain&apos;s working memory is unreliable. This is one of
            the core diagnostic features. But most AI tools compound this rather
            than compensating for it: every session begins from zero, requiring
            the user to reconstruct context before they can get any useful help.
            For neurotypical users this is a mild inconvenience. For ADHD users
            it is a significant barrier &mdash; one that can make the friction of
            using AI feel greater than the benefit.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK&apos;s Sovereign Memory stores everything that matters: your
            preferred communication style, what working methods have helped, what
            has not worked, patterns in your productivity, emotional context from
            past conversations, ongoing projects and their current state. This
            memory belongs to you. It lives on your device or in your sovereign
            cloud. It is never used to train AI models. It is never shared. And
            it never expires.
          </p>

          {/* Feature box: what MEOK remembers */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              What MEOK Remembers For You
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {[
                "Your preferred task breakdown style",
                "Which times of day you work best",
                "Hyperfocus triggers and patterns",
                "What tone of check-in works for you",
                "Ongoing projects and their status",
                "What has caused distress in the past",
                "Your preferred communication pace",
                "RSD triggers and grounding approaches",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      fontSize: "1rem",
                      lineHeight: 1,
                      marginTop: "0.2rem",
                    }}
                  >
                    &#10003;
                  </span>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      margin: "0",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Because Sovereign Memory grows over time, MEOK becomes more useful
            the longer you work with it. The first week, it is learning. After a
            month, it knows your patterns. After six months, it is calibrated to
            you in a way that no other tool is. This is the opposite of
            neurotypical AI design, which treats every session as equivalent.
            For the ADHD brain, continuity is not a preference &mdash; it is a
            prerequisite for genuine usefulness.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 10: Comparison table ─────────────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            ADHD AI needs vs neurotypical AI needs: why standard AI falls short
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Most AI tools were designed for neurotypical users. The assumptions
            baked into their design &mdash; about how people initiate tasks,
            process information, manage memory, and respond to feedback &mdash;
            reflect neurotypical patterns. Here is what that difference looks
            like in practice.
          </p>

          {/* Comparison table */}
          <div
            style={{
              overflowX: "auto",
              marginBottom: "1.5rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      borderBottom: `2px solid ${BORDER}`,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}
                  >
                    Need
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: MUTED,
                      borderBottom: `2px solid ${BORDER}`,
                      fontWeight: 700,
                    }}
                  >
                    Neurotypical AI design
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: GREEN,
                      borderBottom: `2px solid ${BORDER}`,
                      fontWeight: 700,
                    }}
                  >
                    MEOK (ADHD-first)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    need: "Session memory",
                    standard: "Starts fresh each session",
                    meok: "Sovereign Memory persists indefinitely",
                  },
                  {
                    need: "Task initiation",
                    standard: "Lists all steps at once",
                    meok: "One micro-step at a time, on request",
                  },
                  {
                    need: "Accountability",
                    standard: "Tracks completion, implies failure",
                    meok: "Gentle check-ins, no shame on missing",
                  },
                  {
                    need: "Tone on repetition",
                    standard: "May subtly imply impatience",
                    meok: "Identical warmth on the tenth ask",
                  },
                  {
                    need: "Time management",
                    standard: "Assumes internal time sense",
                    meok: "Externalises structure via Morning Brief",
                  },
                  {
                    need: "Hyperfocus",
                    standard: "No awareness of attention cycles",
                    meok: "Trickster delivers soft pattern interrupts",
                  },
                  {
                    need: "Fraud vulnerability",
                    standard: "No protection layer",
                    meok: "Guardian monitors for manipulation patterns",
                  },
                  {
                    need: "Information density",
                    standard: "Dense, comprehensive answers",
                    meok: "Scannable, structured, brevity on request",
                  },
                  {
                    need: "Emotional support",
                    standard: "Task-focused, minimal emotional register",
                    meok: "Maternal Covenant alignment, RSD-aware",
                  },
                  {
                    need: "Working style learning",
                    standard: "No adaptation across sessions",
                    meok: "Calibrates to individual over months",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.need}
                    style={{
                      backgroundColor: i % 2 === 0 ? BG : CARD,
                    }}
                  >
                    <td
                      style={{
                        padding: "0.7rem 1rem",
                        color: TEXT,
                        fontWeight: 600,
                        borderBottom: `1px solid ${BORDER}`,
                      }}
                    >
                      {row.need}
                    </td>
                    <td
                      style={{
                        padding: "0.7rem 1rem",
                        color: MUTED,
                        borderBottom: `1px solid ${BORDER}`,
                      }}
                    >
                      {row.standard}
                    </td>
                    <td
                      style={{
                        padding: "0.7rem 1rem",
                        color: GREEN,
                        borderBottom: `1px solid ${BORDER}`,
                      }}
                    >
                      {row.meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 11: Neurodiversity-affirming design ───────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Neurodiversity-affirming throughout: what this means in practice
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Neurodiversity-affirming does not mean pretending that ADHD creates
            no difficulties. It means refusing the deficit framing &mdash; the
            assumption that the ADHD brain is a broken neurotypical brain &mdash;
            and recognising instead that it is a different kind of brain,
            with genuine strengths as well as genuine challenges, that deserves
            tools designed for how it actually works rather than how the
            designers assumed it would work.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            In MEOK&apos;s design, this means several concrete things. It means
            that the Pioneer archetype celebrates the hyperfocus state when it
            is working for you, not just when it needs to be interrupted. It means
            that the creative, associative, non-linear thinking that ADHD adults
            often exhibit is supported rather than corrected &mdash; MEOK follows
            the tangent rather than redirecting to the original track, and trusts
            the person to know when they are ready to return. It means that
            Sovereign Memory holds achievements and strengths as well as patterns
            and challenges, so the AI&apos;s model of you is not purely problem-centred.
          </p>

          {/* Feature box: strengths */}
          <div
            style={{
              backgroundColor: CARD,
              borderLeft: `3px solid ${GREEN}`,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GREEN,
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              ADHD Strengths MEOK Supports
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem",
              }}
            >
              {[
                "Hyperfocus as a superpower",
                "Creative, lateral thinking",
                "High empathy and pattern sensing",
                "Entrepreneurial energy",
                "Intense curiosity",
                "Crisis performance capacity",
                "Non-linear problem-solving",
                "Passionate engagement",
              ].map((strength) => (
                <div
                  key={strength}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      color: GREEN,
                      fontSize: "0.8rem",
                    }}
                  >
                    &#9733;
                  </span>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: "0.85rem",
                      margin: "0",
                      lineHeight: 1.5,
                    }}
                  >
                    {strength}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Neurodiversity-affirming also means that MEOK never uses language that
            treats ADHD as something to overcome, fix, or cure. The goal is not
            to make the ADHD brain behave like a neurotypical one. The goal is
            to give the ADHD brain the external supports that allow it to
            function, thrive, and express its genuine capacities &mdash; which
            are considerable.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Section 12: Getting started ───────────────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            How to get started with MEOK as an ADHD adult
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK begins with what it calls the Birth Ceremony &mdash; a short,
            conversational session where you and your AI companion establish who
            you are and how you want to work together. For ADHD users, this
            includes setting your preferred archetype (most ADHD adults find
            Pioneer primary), configuring the Morning Brief timing, setting up
            hyperfocus interrupt preferences, and establishing the tone and
            communication style that works best for your brain.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            You do not need a diagnosis to use MEOK for ADHD support. You do not
            need to know which archetype is right for you before you start. The
            Birth Ceremony is designed to learn this through conversation rather
            than requiring you to have the answers in advance. If you have
            executive dysfunction, being asked to complete a detailed settings
            form is itself a barrier &mdash; so MEOK does not ask you to.
          </p>

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                step: "1",
                title: "Begin the Birth Ceremony",
                detail:
                  "A short, conversational session. No forms. No settings to configure in advance. Your AI learns how you work by talking with you.",
              },
              {
                step: "2",
                title: "Pioneer activates",
                detail:
                  "The Pioneer archetype is available immediately for task breakdown, body doubling sessions, and Morning Brief configuration.",
              },
              {
                step: "3",
                title: "Sovereign Memory starts building",
                detail:
                  "From your first conversation, MEOK begins building a picture of your working style. It gets more useful with every session.",
              },
              {
                step: "4",
                title: "Guardian and Trickster layer in",
                detail:
                  "As the relationship develops, Guardian protection and Trickster hyperfocus management calibrate to your specific patterns.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                }}
              >
                <div
                  style={{
                    minWidth: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    backgroundColor: GOLD,
                    color: "#0d0c18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "0.85rem",
                    fontFamily: "system-ui, sans-serif",
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <p
                    style={{
                      color: TEXT,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: "0.25rem",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      margin: "0",
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── FAQ Section ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "1.25rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                q: "Can AI genuinely help adults with ADHD?",
                a: "Yes — when it is designed around ADHD rather than bolted on as an afterthought. AI can support task initiation, break work into smaller steps, provide accountability without shame, remember your preferred working style across sessions, and flag when patterns suggest scam or manipulation. The critical difference is whether the AI was built with ADHD executive function in mind or whether it assumes linear, neurotypical interaction.",
              },
              {
                q: "What is executive dysfunction and how does MEOK help with it?",
                a: "Executive dysfunction is the difficulty many ADHD adults experience with initiating tasks, planning sequences, managing time, holding information in working memory, and shifting between activities. MEOK\u2019s Pioneer archetype tackles this directly by breaking tasks into the smallest possible actionable steps, delivering a structured Morning Brief each day, and remembering incomplete tasks so you never lose context between sessions.",
              },
              {
                q: "What is rejection sensitive dysphoria and can AI help?",
                a: "Rejection sensitive dysphoria (RSD) is an intense emotional response to perceived or real rejection, criticism, or failure that is significantly more common in ADHD adults. MEOK is designed to never respond with frustration, impatience, or passive judgment \u2014 the triggers that can activate RSD. Its Sovereign Memory means it remembers what has caused distress before and adjusts its tone accordingly, providing a consistent experience that does not add shame to an already difficult moment.",
              },
              {
                q: "How does MEOK support ADHD adults who are at risk of fraud?",
                a: "Research suggests that adults with ADHD are up to twice as likely to be victims of financial fraud and scams. MEOK\u2019s Guardian archetype monitors conversation patterns for manipulation tactics, escalating pressure, and social engineering, flagging these to the user without judgment. It never shames the person for being targeted \u2014 it simply provides an informed perspective that is not distorted by impulsivity or social pressure.",
              },
              {
                q: "What is hyperfocus and how can MEOK help manage it?",
                a: "Hyperfocus is the ADHD phenomenon where intense interest locks attention onto one task for hours \u2014 productive when directed, destabilising when it hijacks time needed for something else. MEOK\u2019s Trickster archetype can be configured to deliver gentle pattern interrupts at set intervals, reorienting attention without harsh alarms. Sovereign Memory means the AI knows your hyperfocus triggers and can anticipate when time blindness is most likely to occur.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                  borderLeft: `3px solid ${BORDER}`,
                }}
              >
                <p
                  style={{
                    color: TEXT,
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    margin: "0",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── Pull quote ────────────────────────────────────────────────── */}
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.25rem",
            margin: "2.5rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.8,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "0.75rem",
            }}
          >
            The ADHD brain was not designed wrong. It was designed for a world
            that does not quite exist yet &mdash; one that values intensity,
            creativity, and rapid pattern recognition over linear execution. MEOK
            is not trying to make you neurotypical. It is trying to give your
            brain the external structures it needs to do what it is actually
            good at.
          </p>
          <footer
            style={{
              color: GOLD,
              fontSize: "0.85rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            &mdash; Nicholas Templeman, Founder, MEOK AI LABS
          </footer>
        </blockquote>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: "16px",
            padding: "2.5rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Built for how you actually think
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Your ADHD brain deserves an AI that was built for it.
          </h2>
          <p
            style={{
              color: MUTED,
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 1.75rem",
            }}
          >
            Pioneer archetype. Sovereign Memory. Virtual body doubling. Shame-free
            accountability. Guardian protection. Morning Brief. All of it,
            calibrated to you.
          </p>
          <Link
            href="https://meok.ai/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.9rem 2.25rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Begin your Birth Ceremony free &rarr;
          </Link>
          <p
            style={{
              color: MUTED,
              fontSize: "0.8rem",
              marginTop: "0.75rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            No forms. No credit card. Just a conversation.
          </p>
        </div>

        {/* ── Related posts ─────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontSize: "1.2rem",
              color: TEXT,
              marginBottom: "1.25rem",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
            }}
          >
            More from the blog
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
                href: "/blog/ai-for-adhd-women",
                tag: "ADHD",
                title: "AI for Women with ADHD: Support After a Late Diagnosis",
                time: "9 min read",
              },
              {
                href: "/blog/meok-for-adhd",
                tag: "Neurodivergent",
                title: "MEOK for ADHD: An AI That Actually Understands How You Think",
                time: "7 min read",
              },
              {
                href: "/blog/meok-for-neurodivergent",
                tag: "Neurodiversity",
                title: "MEOK for Neurodivergent Adults: Sovereign AI Without Compromise",
                time: "8 min read",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.25rem",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "system-ui, sans-serif",
                    marginBottom: "0.5rem",
                  }}
                >
                  {post.tag}
                </p>
                <p
                  style={{
                    color: TEXT,
                    fontSize: "0.9rem",
                    lineHeight: 1.55,
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.78rem",
                    fontFamily: "system-ui, sans-serif",
                    margin: "0",
                  }}
                >
                  {post.time}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: MUTED,
            fontSize: "0.85rem",
            fontFamily: "system-ui, sans-serif",
            marginBottom: "0.5rem",
          }}
        >
          &copy; 2026 MEOK AI LABS. All rights reserved.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.8rem",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1.6,
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          MEOK is not a medical device and does not provide clinical diagnosis or treatment
          for ADHD or any other condition. If you believe you may have ADHD, please consult
          a qualified healthcare professional.{" "}
          <a
            href="https://adhduk.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: "none" }}
          >
            ADHD UK
          </a>{" "}
          and the{" "}
          <a
            href="https://www.adhdfoundation.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: "none" }}
          >
            ADHD Foundation
          </a>{" "}
          offer UK-specific support and guidance.
        </p>
      </footer>
    </div>
  );
}
