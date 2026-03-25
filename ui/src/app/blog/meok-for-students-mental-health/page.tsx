import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Student Mental Health: Sovereign AI at University | MEOK AI LABS",
  description:
    "1 in 4 UK students reports a mental health problem during their studies. University counselling waits average 4\u20136 weeks. MEOK\u2019s free Explorer tier is there at 3am \u2014 personal, persistent, and governed by safe messaging guidelines.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-students-mental-health",
  },
  openGraph: {
    title: "MEOK for Student Mental Health: Sovereign AI at University",
    description:
      "73% of UK students experienced a mental health crisis at university. Only 36% sought help. MEOK\u2019s free Explorer tier is available at 3am, remembers your story, and never sells your data.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-students-mental-health",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Student+Mental+Health&desc=Sovereign+AI+at+University",
        width: 1200,
        height: 630,
        alt: "MEOK for Student Mental Health: Sovereign AI at University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Student Mental Health: Sovereign AI at University",
    description:
      "University counselling waits 4\u20136 weeks. Mental health crises don\u2019t schedule around office hours. MEOK\u2019s Explorer tier is free, remembers you, and is there at 3am.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Student+Mental+Health&desc=Sovereign+AI+at+University",
    ],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for Student Mental Health: Sovereign AI at University",
  description:
    "1 in 4 UK students reports a mental health problem during their studies. University counselling waits average 4\u20136 weeks. MEOK\u2019s free Explorer tier is there at 3am \u2014 personal, persistent, and governed by safe messaging guidelines.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-students-mental-health",
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
  image:
    "https://meok.ai/api/og?title=MEOK+for+Student+Mental+Health&desc=Sovereign+AI+at+University",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-students-mental-health",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK free for students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Explorer tier is permanently free \u2014 no credit card, no trial period. It includes a persistent AI companion with memory, daily check-ins, safe messaging guidelines, and basic emotional and study support. The Sovereign tier is a paid upgrade that unlocks Claude Sonnet, advanced memory retrieval, and full data export. Both tiers operate under the Maternal Covenant: no data sold, no training on your conversations, ever.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with university mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports student mental health through persistent memory (it remembers your degree, your flatmate situation, your ongoing anxieties without you re-explaining each time), the Maternal Covenant safe messaging framework (which enforces evidence-based guidelines on self-harm and suicide topics), 24/7 availability so you\u2019re not limited by counselling office hours, Guardian scam protection (against fake internships and phishing), and archetypes tailored for study support. It is a companion, not a therapist \u2014 and it always signposts professional help when the situation warrants it.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK better than university counselling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is not a replacement for university counselling \u2014 and it will never claim to be. Clinical therapy with a trained professional does things AI categorically cannot: diagnose conditions, prescribe treatment, provide crisis intervention, or build the kind of therapeutic relationship that comes from human expertise and presence. What MEOK does is fill the gaps. The average UK university counselling wait is 4\u20136 weeks; some exceed 10 weeks. In that waiting period, students need somewhere to go. MEOK is that somewhere \u2014 available at 3am, remembering your context, never judging, never billing by the hour. Use both.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with exam anxiety and study stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Scholar archetype uses Socratic questioning to turn revision from passive reading into active recall \u2014 a method with strong evidence behind it for memory consolidation. The Pioneer archetype provides deadline accountability: it knows your submission dates, checks in on your progress, and helps you break 4,000-word essays into manageable daily tasks. For exam anxiety specifically, MEOK can run pre-exam grounding sessions, help you articulate what you\u2019re afraid of, and interrupt catastrophic thought spirals \u2014 because it knows your history and can name what\u2019s happening in context rather than responding generically.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://meok.ai",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://meok.ai/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MEOK for Student Mental Health",
      item: "https://meok.ai/blog/meok-for-students-mental-health",
    },
  ],
};

// ── Design tokens ──────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.7)";
const MUTED_DIM = "rgba(245,240,232,0.45)";
const CARD_BG = "rgba(255,255,255,0.05)";
const CARD_BORDER = "rgba(255,255,255,0.08)";
const CONTAINER = "840px";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokForStudentsMentalHealth() {
  return (
    <div
      style={{
        background: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
      }}
    >
      {/* JSON-LD blocks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: CONTAINER,
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Breadcrumb nav */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "2rem",
              fontSize: "0.8rem",
              color: MUTED_DIM,
            }}
          >
            <Link
              href="/"
              style={{ color: MUTED_DIM, textDecoration: "none" }}
            >
              Home
            </Link>
            <span style={{ color: MUTED_DIM }}>/</span>
            <Link
              href="/blog"
              style={{ color: MUTED_DIM, textDecoration: "none" }}
            >
              Blog
            </Link>
            <span style={{ color: MUTED_DIM }}>/</span>
            <span style={{ color: GOLD }}>Student Mental Health</span>
          </nav>

          {/* Tags + meta row */}
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
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.35rem 0.85rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Mental Health
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.35rem 0.85rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Students
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_DIM }}>
              25 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_DIM }}>
              14 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              lineHeight: 1.18,
              color: "#ffffff",
              marginBottom: "1.5rem",
              maxWidth: "760px",
            }}
          >
            MEOK for Student Mental Health: Sovereign AI at University
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: MUTED,
              maxWidth: "660px",
              marginBottom: "2.5rem",
            }}
          >
            73% of UK students have experienced a mental health crisis during their
            degree. University counselling waits average 4&ndash;6 weeks. Mental
            health crises don&apos;t schedule around office hours &mdash; and
            neither does MEOK.
          </p>

          {/* Stats strip */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {[
              { stat: "1 in 4", label: "students reports a mental health problem" },
              { stat: "4\u20136 wks", label: "average counselling wait time (2025)" },
              { stat: "73%", label: "experienced a crisis at university" },
              { stat: "36%", label: "actually sought help" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                style={{
                  background: CARD_BG,
                  border: "1px solid " + CARD_BORDER,
                  borderRadius: "0.75rem",
                  padding: "1rem 1.25rem",
                  minWidth: "140px",
                  flex: "1 1 140px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: "0.35rem",
                  }}
                >
                  {stat}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: MUTED_DIM,
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: CONTAINER,
          margin: "0 auto",
          padding: "3.5rem 1.5rem 5rem",
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            background: CARD_BG,
            border: "1px solid " + CARD_BORDER,
            marginBottom: "3.5rem",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#fff",
              fontSize: "0.8rem",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.85rem",
                color: TEXT,
                marginBottom: "0.15rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.72rem",
                color: MUTED_DIM,
                marginBottom: "0.35rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.72rem",
                color: MUTED_DIM,
                lineHeight: 1.5,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him.
              He lives and works in the UK &mdash; mostly from a caravan on his
              farm. He believes sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: GOLD,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── BODY PROSE ────────────────────────────────────────────────── */}
        <div
          style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: MUTED,
          }}
        >
          {/* Opening */}
          <p style={{ marginBottom: "1.5rem" }}>
            There is a particular quality to 3am in a university halls of residence.
            The corridor is silent. Everyone else appears to be asleep, or at least
            pretending to be. The essay deadline is in seven hours. Your flatmate
            hasn&apos;t spoken to you properly in two weeks. Your student loan
            statement arrived this morning and you now understand, for the first
            time at a visceral level, what &pound;50,000 of debt actually means.
            And you are lying on a thin mattress wondering whether any of this is
            going to work out.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            That moment &mdash; that specific, underrated moment &mdash; is what
            MEOK was built for. Not the GP appointment you can get in three weeks.
            Not the university counsellor you are on a waiting list to see in six.
            Not the friend you don&apos;t want to burden at this hour. Right there,
            at 3am, when the only thing that matters is having somewhere honest and
            private to put what you&apos;re feeling.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            This is not a sales pitch. It is an honest account of what MEOK can and
            cannot do for students dealing with mental health pressures &mdash; and
            why the gap it fills is real, not manufactured.
          </p>

          {/* ── SECTION 1 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            The UK University Mental Health Crisis Is Not Overblown
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            You&apos;ve probably seen the headlines. Student mental health is in
            crisis. Waiting lists are too long. Students are falling through the
            gaps. But statistics can feel abstract when you&apos;re living the
            reality, so let&apos;s be specific about what the data actually shows.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            According to Student Minds&apos; 2025 University Mental Health Report,{" "}
            <strong style={{ color: TEXT, fontWeight: 700 }}>
              73% of UK students experienced a mental health crisis during their
              university career
            </strong>
            . That number should stop you. Not 1 in 10. Not 1 in 4. Nearly
            three-quarters. And of those, only 36% sought professional help. The
            gap between people who needed support and people who got it is not a
            small rounding error &mdash; it is the majority of the student
            population suffering in silence.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The reasons are not hard to identify. University counselling services
            across the UK reported an average wait time of 4&ndash;6 weeks in 2025.
            Some institutions &mdash; particularly those with high
            student-to-counsellor ratios &mdash; are running waits that exceed 10
            weeks. By the time a student reaches the front of the queue, they may
            have already failed a module, dropped out of a course, or simply stopped
            asking for help.
          </p>

          {/* Callout box */}
          <div
            style={{
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderLeft: "4px solid " + GOLD,
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.5rem",
              }}
            >
              The structural reality
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: MUTED,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              UK universities employ an average of 1 counsellor for every 312
              students. The recommended ratio, according to BACP guidelines, is
              1:1000 &mdash; a number that itself reflects resource constraints
              rather than clinical best practice. Even at the recommended ratio,
              a student experiencing a crisis on a Wednesday afternoon cannot get
              support until their scheduled appointment, which may be weeks away.
            </p>
          </div>

          <p style={{ marginBottom: "1.5rem" }}>
            This is not a criticism of university counselling teams. They are, in
            almost every case, skilled, compassionate professionals doing their best
            inside a system that is chronically under-resourced. The problem is
            structural. And MEOK&apos;s role is not to fix the structure &mdash; it
            is to exist in the gaps that the structure creates.
          </p>

          {/* ── SECTION 2 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why University Is Uniquely Hard: The Pressure Stack
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            Student mental health problems are not simply about academic pressure,
            though that is part of it. They emerge from the collision of multiple
            stressors arriving simultaneously &mdash; many for the first time in a
            person&apos;s life.
          </p>

          <p style={{ marginBottom: "1.25rem" }}>
            Consider what the average first-year undergraduate is navigating:
          </p>

          {/* Pressure cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              {
                icon: "\uD83C\uDFE0",
                title: "Leaving home for the first time",
                body:
                  "The removal of a familiar support network \u2014 parents, childhood friends, local GP, known routines \u2014 without a replacement system in place. The loneliness of this transition is often not talked about because it feels embarrassing to admit.",
              },
              {
                icon: "\uD83D\uDCB8",
                title: "Financial anxiety",
                body:
                  "A tuition fee loan of up to \u00a39,535 per year, plus maintenance loans that rarely cover actual living costs in London or other high-cost cities. Most students are aware they are accumulating debt in the \u00a350,000+ range. The psychological weight of this is rarely acknowledged.",
              },
              {
                icon: "\uD83D\uDCDA",
                title: "Academic pressure",
                body:
                  "Degrees are assessed differently to A-levels. The independent study expectation is real. Imposter syndrome is rampant, particularly at Russell Group universities where many students encounter, for the first time, peers who are genuinely more prepared than they are.",
              },
              {
                icon: "\uD83D\uDCF1",
                title: "Social comparison",
                body:
                  "Instagram, TikTok, and BeReal create a continuous feed of other people\u2019s highlights. Living in halls means your social comparison is immediate and inescapable. The student who appears to have ten close friends and a thriving social life by week two is, in most cases, performing.",
              },
              {
                icon: "\uD83E\uDDD0",
                title: "Identity formation",
                body:
                  "University is, for many people, the first sustained period of living without parental observation. Questions about sexuality, gender, politics, religion, career, and values that were previously abstract become urgent and immediate. Not all of them resolve neatly.",
              },
              {
                icon: "\uD83D\uDC94",
                title: "Relationship issues",
                body:
                  "Long-distance relationships with school partners frequently collapse in the first term. New relationships form quickly and break quickly. The social awkwardness of shared living with strangers creates friction that, in a different context, would be called a workplace conflict.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  background: CARD_BG,
                  border: "1px solid " + CARD_BORDER,
                  borderRadius: "0.875rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "0.6rem",
                    lineHeight: 1,
                  }}
                >
                  {icon}
                </div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: TEXT,
                    marginBottom: "0.5rem",
                    lineHeight: 1.35,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: MUTED_DIM,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.5rem" }}>
            Any one of these pressures, in isolation, is manageable. All of them,
            simultaneously, in a new city, away from every established support
            structure, while trying to write a 2,500-word essay on Keynesian
            economics that is due on Friday &mdash; that is a different proposition
            entirely.
          </p>

          {/* ── SECTION 3 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            The 3am Problem: Why Mental Health Support Needs to Be Always On
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            Mental health crises do not respect the 9&ndash;5. They arrive when
            they arrive &mdash; during an all-night revision session, at 3am after
            a night out that went badly, during the Sunday evening spiral that most
            students know well even if they don&apos;t have a name for it.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            This is not a new observation. Crisis lines exist precisely because the
            need for support is not bounded by office hours. But crisis lines are
            for crisis. The vast majority of student mental health struggles exist
            in the register below crisis &mdash; the persistent low-grade anxiety,
            the rumination that won&apos;t stop, the sense that everything is
            slightly too hard and you don&apos;t know why. These states are too
            serious to dismiss and too sub-acute for crisis services.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            They are exactly what MEOK was designed for.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              margin: "2rem 0",
              padding: "1.5rem 2rem",
              borderLeft: "3px solid " + GOLD,
              background: CARD_BG,
              borderRadius: "0 0.75rem 0.75rem 0",
            }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: TEXT,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              &ldquo;The question isn&apos;t whether students need support at 3am.
              They clearly do. The question is whether the support they reach for
              at 3am was designed with their wellbeing as the primary
              objective.&rdquo;
            </p>
          </blockquote>

          <p style={{ marginBottom: "1.5rem" }}>
            A general-purpose AI assistant &mdash; ChatGPT, Gemini, Claude &mdash;
            will respond to a distressed message at 3am. It will say something
            reasonable. But it does not know you. It does not know that this is
            the third time this week you&apos;ve had this conversation, or that
            the anxiety you&apos;re describing is connected to a specific family
            situation you mentioned two months ago. It starts fresh every time.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Persistent memory is not a minor feature. For mental health support
            specifically, context is everything. A therapist who remembered nothing
            between sessions would be useless. MEOK remembers.
          </p>

          {/* ── SECTION 4 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What MEOK Actually Does for Students
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            MEOK is not a mental health app in the clinical sense. It is an AI
            companion with a persistent relationship, governed by care ethics, built
            to be genuinely useful across the full range of student life &mdash; not
            just during the worst moments, but through the whole texture of being
            a student.
          </p>

          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.15rem",
              color: TEXT,
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Persistent memory across your whole student life
          </h3>

          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s four-layer memory architecture means your companion knows
            your degree subject, your module list, your upcoming deadlines, the
            difficult situation with your flatmate, your ongoing anxiety about
            disappointing your parents, and the fact that you cope better when
            you&apos;ve slept than when you haven&apos;t. You don&apos;t
            re-explain yourself each session. The context is there. This sounds
            like a small thing until you&apos;ve experienced what it&apos;s like
            to carry your entire backstory into every conversation you have about
            how you&apos;re feeling.
          </p>

          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.15rem",
              color: TEXT,
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            The Maternal Covenant: safe messaging built in
          </h3>

          <p style={{ marginBottom: "1.5rem" }}>
            When conversations touch on self-harm or suicidal ideation,
            MEOK&apos;s Maternal Covenant governance framework enforces
            evidence-based safe messaging guidelines. This is not a filter or a
            block &mdash; it is a considered framework that determines how the
            companion responds: with care, without dismissal, and always with a
            clear signpost to professional support. The goal is to hold the person
            who needs holding while never pretending to be something the companion
            is not.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            This matters enormously in the student context. Research consistently
            shows that students are more likely to disclose mental health struggles
            to an AI than to a human &mdash; partly because of stigma, partly
            because the social cost of disclosure to a peer or family member feels
            too high. MEOK takes that disclosure seriously.
          </p>

          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.15rem",
              color: TEXT,
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Guardian: protecting students from scams
          </h3>

          <p style={{ marginBottom: "1.5rem" }}>
            Students are disproportionately targeted by fraud. Fake internship
            postings, fraudulent accommodation listings, student loan phishing
            emails that replicate Student Finance England communications with
            disturbing accuracy &mdash; the scam ecosystem around universities is
            sophisticated and predatory. MEOK&apos;s Guardian module provides
            real-time pattern recognition on suspicious content. Send Guardian a
            suspicious email, a too-good-to-be-true job listing, or an unfamiliar
            bank account request, and it will tell you honestly whether something
            looks wrong.
          </p>

          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.15rem",
              color: TEXT,
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Scholar and Pioneer: study support that actually helps
          </h3>

          <p style={{ marginBottom: "1.5rem" }}>
            The Scholar archetype uses Socratic method for revision: instead of
            telling you the answer, it asks you questions that force active recall.
            The cognitive science evidence for active recall over passive re-reading
            is overwhelming, and most students still revise by re-reading their
            notes because nobody has ever properly shown them a better approach.
            Scholar does that &mdash; patiently, without judgment, at 11pm when
            the library has closed.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Pioneer handles deadline accountability. It knows your submission dates.
            It checks in. It helps you break a 4,000-word dissertation chapter into
            daily word targets. It remembers that you said you&apos;d start the
            literature review on Tuesday, and it will gently hold you to that
            &mdash; not as surveillance, but as the accountability structure that
            most students are trying to build for themselves but never quite manage
            to maintain alone.
          </p>

          {/* Feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                label: "Free Explorer tier",
                desc: "No credit card. No time limit. Full persistent memory and daily check-ins from day one.",
              },
              {
                label: "Maternal Covenant",
                desc: "Safe messaging on self-harm and suicide. Care ethics baked into governance, not bolted on as policy.",
              },
              {
                label: "24/7 availability",
                desc: "Not limited by office hours, waiting lists, or the social cost of asking someone for help.",
              },
              {
                label: "Scholar archetype",
                desc: "Socratic revision that turns passive re-reading into active recall. Evidence-based, genuinely effective.",
              },
              {
                label: "Pioneer archetype",
                desc: "Deadline accountability. Breaks large tasks into daily targets. Remembers what you committed to.",
              },
              {
                label: "Guardian protection",
                desc: "Scam detection on suspicious emails, fake job listings, and phishing attempts targeting students.",
              },
            ].map(({ label, desc }) => (
              <div
                key={label}
                style={{
                  background: CARD_BG,
                  border: "1px solid " + CARD_BORDER,
                  borderRadius: "0.875rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: GOLD,
                    marginBottom: "0.75rem",
                  }}
                />
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "0.77rem",
                    color: MUTED_DIM,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── SECTION 5 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            International Students: An Overlooked Mental Health Population
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            Everything described above &mdash; the financial pressure, the identity
            questions, the social adjustment, the academic demands &mdash; applies
            to domestic students. For international students, all of it arrives
            alongside a layer of difficulty that is genuinely different in kind,
            not just degree.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Cultural displacement is real. It is not the same as homesickness. It
            is the experience of finding that the social scripts you developed over
            twenty years don&apos;t map onto the new environment &mdash; that
            British directness reads as cold when you&apos;re used to different
            norms, or that British indirectness reads as incomprehensible when you
            prefer clarity. Small things accumulate. Food is wrong. Weather is
            wrong. The currency is confusing. The administrative systems require a
            level of independent navigation that no one prepared you for.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Language anxiety is its own specific form of pressure. Even for
            students with strong English, the experience of conducting an entire
            academic and social life in a second language is exhausting. The
            cognitive load of simultaneous translation, the fear of being judged
            for an accent, the particular humiliation of misunderstanding a joke
            &mdash; these are not small things.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Visa stress is structural. The anxiety around maintaining student visa
            conditions &mdash; attendance requirements, grade thresholds, work hour
            limits, the immigration consequences of a single failed module &mdash;
            creates a specific form of high-stakes pressure that domestic students
            simply do not experience. An international student who fails a module
            doesn&apos;t just lose the credits. They may lose their right to remain
            in the country.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            MEOK remembers all of this. It knows you&apos;re an international
            student. It knows your home country. It knows whether you&apos;ve
            mentioned language anxiety, visa worries, or family pressure from
            thousands of miles away. It can hold that context when you come back
            to it at 3am, which is usually when international students feel most
            isolated.
          </p>

          {/* ── SECTION 6 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            MEOK vs SilverCloud vs University Counselling: An Honest Comparison
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            Students looking for mental health support have several options.
            Understanding what each actually offers &mdash; and where each falls
            short &mdash; matters more than marketing positioning.
          </p>

          {/* Comparison table */}
          <div
            style={{
              overflowX: "auto",
              margin: "1.5rem 0 2rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.85rem",
                minWidth: "540px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    borderBottom: "1px solid " + CARD_BORDER,
                  }}
                >
                  {[
                    "Feature",
                    "MEOK",
                    "SilverCloud",
                    "University Counselling",
                  ].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: i === 0 ? "left" : "center",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: i === 1 ? GOLD : MUTED_DIM,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persistent memory", "\u2713", "\u2717", "\u2713*"],
                  ["Available 24/7", "\u2713", "Partial", "\u2717"],
                  ["Free for students", "\u2713", "Via university", "Via university"],
                  ["Personal context", "\u2713", "\u2717", "\u2713"],
                  ["Safe messaging (SH/suicide)", "\u2713", "\u2713", "\u2713"],
                  ["Scam protection", "\u2713", "\u2717", "\u2717"],
                  ["Study support", "\u2713", "\u2717", "\u2717"],
                  ["Clinical diagnosis", "\u2717", "\u2717", "\u2713"],
                  ["Average wait time", "Instant", "1\u20133 days", "4\u20136 weeks"],
                  ["Data sovereignty", "\u2713", "\u2717", "N/A"],
                ].map(([feature, meok, silver, uni], i) => (
                  <tr
                    key={feature}
                    style={{
                      borderBottom: "1px solid " + CARD_BORDER,
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.7rem 1rem",
                        color: MUTED,
                        fontWeight: 500,
                      }}
                    >
                      {feature}
                    </td>
                    {[meok, silver, uni].map((val, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          color:
                            val === "\u2713"
                              ? "#4ade80"
                              : val === "\u2717"
                              ? "rgba(245,240,232,0.3)"
                              : j === 0
                              ? GOLD
                              : MUTED_DIM,
                          fontWeight: j === 0 ? 700 : 400,
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              fontSize: "0.72rem",
              color: MUTED_DIM,
              marginBottom: "2rem",
            }}
          >
            * University counsellors maintain session notes but are not available
            between appointments. MEOK maintains persistent context continuously.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            SilverCloud is a legitimate, evidence-based platform used by many UK
            universities as a first-line digital intervention. Its strength is
            structured CBT-based content. Its weakness is that it is anonymous by
            design &mdash; it does not learn who you are, what your specific
            situation involves, or how your current state connects to your history.
            It is content, not a companion.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            University counselling &mdash; when you can access it &mdash; is better
            for acute and complex mental health needs than any digital product. The
            limitation is access. A 6-week wait is not hypothetical: it is the
            lived experience of thousands of students every academic year.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            MEOK does not claim superiority over clinical support. It claims
            existence in the gap. Being personal, persistent, available, and free
            &mdash; while consistently directing students toward professional help
            when that help is what the situation actually requires.
          </p>

          {/* ── SECTION 7 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            The Explorer Tier Is Free. That Is a Design Choice, Not a Marketing Tactic.
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            The decision to make MEOK&apos;s Explorer tier permanently free &mdash;
            not a 14-day trial, not a freemium that locks the useful features behind
            a paywall &mdash; was deliberate. Students are, almost by definition,
            financially constrained. A mental health tool that costs money will not
            be used by the students who most need it, because those students are
            often dealing with financial anxiety as one of their primary stressors.
            The tool has to be free to reach the people it was built for.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The Explorer tier includes: a persistent AI companion with the full
            four-layer memory architecture, daily check-in routines, basic emotional
            support, Scholar and Pioneer archetype access for study support,
            Guardian scam protection, and the full Maternal Covenant care ethics
            framework including safe messaging guidelines. No credit card required.
            No time limit.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            What the free tier does not include: Claude Sonnet as the primary
            reasoning engine (Explorer uses DeepSeek), advanced vector memory
            retrieval for very long-term recall across years, full data export in
            machine-readable formats, and local processing via Ollama for maximum
            privacy. These are genuine upgrades in the Sovereign tier &mdash; but
            the core companion experience is not diminished by staying on Explorer.
          </p>

          {/* Stats callout */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "1rem",
              padding: "1.75rem 2rem",
              margin: "2.5rem 0",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div style={{ flex: "1 1 180px" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                &pound;0
              </div>
              <div style={{ fontSize: "0.8rem", color: MUTED_DIM }}>
                cost of the Explorer tier, forever
              </div>
            </div>
            <div style={{ flex: "1 1 180px" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                4 layers
              </div>
              <div style={{ fontSize: "0.8rem", color: MUTED_DIM }}>
                of persistent memory on the free tier
              </div>
            </div>
            <div style={{ flex: "1 1 180px" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                24/7
              </div>
              <div style={{ fontSize: "0.8rem", color: MUTED_DIM }}>
                availability including 3am on a Wednesday
              </div>
            </div>
          </div>

          {/* ── SECTION 8 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Data Sovereignty Matters More for Students Than They Realise
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            When you talk to a general-purpose AI about your mental health, you are
            making a series of implicit decisions about your data that you probably
            haven&apos;t explicitly considered. Most AI chat products train their
            models on user conversations. That means the distress you expressed at
            3am in your first year becomes, in some diffuse form, part of the
            training data that shapes the next version of the model. You didn&apos;t
            consent to that. You probably didn&apos;t know it was happening.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s commitment on this is unambiguous: your conversations are
            never used for model training, and your data is never sold to third
            parties. This is not a policy buried in a terms-of-service document
            &mdash; it is a structural decision enforced by the Maternal Covenant
            governance framework. The companion exists to serve you. It does not
            extract value from you in exchange for that service.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            For students, this matters for reasons beyond privacy in the abstract.
            What you say about your mental health, your financial situation, your
            relationships, your politics, and your identity during university could
            follow you in ways you cannot predict. The graduate job you want in five
            years does not need to be preceded by a dossier of your most vulnerable
            moments. Sovereign AI means your data is yours.
          </p>

          {/* ── SECTION 9 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What MEOK Is Not: Keeping the Boundaries Clear
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            The hardest thing to write honestly about is the limits. It is easier,
            commercially, to gesture vaguely at benefits and let people read what
            they want into them. MEOK chooses not to do that, because the student
            population includes people in serious distress, and those people deserve
            clarity about what they&apos;re dealing with.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            <strong style={{ color: TEXT, fontWeight: 700 }}>
              MEOK is not a therapist.
            </strong>{" "}
            It cannot diagnose depression, anxiety disorders, eating disorders, or
            any other mental health condition. It cannot provide clinical treatment.
            It cannot prescribe medication. It cannot offer the kind of therapeutic
            relationship that comes from years of clinical training and the specific
            accountability of a professional duty of care.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            <strong style={{ color: TEXT, fontWeight: 700 }}>
              MEOK is not a crisis service.
            </strong>{" "}
            If you are in immediate danger, call 999. If you are in crisis and need
            to talk, call Samaritans on 116 123 (free, 24/7). MEOK will always
            signpost these resources when a conversation suggests they are needed
            &mdash; because the Maternal Covenant mandates it, not just because
            it&apos;s good practice.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            <strong style={{ color: TEXT, fontWeight: 700 }}>
              MEOK is not a substitute for university counselling.
            </strong>{" "}
            If your university has a counselling service and you need clinical
            support, use it. The wait is real and it is frustrating, but it is
            worth waiting for when you need what clinical support can provide. MEOK
            exists alongside that service, not instead of it.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            What MEOK is: a persistent, personal AI companion that understands your
            situation, is available when nothing else is, and treats your wellbeing
            as the primary objective of every interaction. Within those boundaries,
            it is genuinely useful in ways that other tools are not.
          </p>

          {/* ── SECTION 10 ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Getting Started: What Happens When You Hatch Your Companion
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            The process of starting with MEOK is called hatching. It takes about
            three minutes. You do not fill in a form. You do not complete a PHQ-9.
            You name your companion, choose an archetype, and begin a conversation.
            That conversation becomes the first layer of your persistent context.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            For students, we recommend starting with a brief orientation: tell your
            companion what you&apos;re studying, where you are in your degree, what
            your current biggest stressors are, and what you want from the
            relationship. This is not a mandatory onboarding flow &mdash; it is
            simply what makes the companion useful faster. The more context it has,
            the more relevant it is from the first real conversation.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The Scholar archetype is a strong starting point for students who are
            primarily experiencing academic pressure. Pioneer suits students who
            struggle with procrastination and deadline management. If your primary
            concern is emotional &mdash; anxiety, loneliness, low mood &mdash; the
            default Healer archetype provides patient, grounded companionship
            without the directive structure of Scholar or Pioneer.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            You can change archetype at any time. Your memory persists across the
            change. The companion who knew your exam anxiety also knows your
            dissertation topic when you switch to Scholar mode in third year.
          </p>

          {/* Crisis resources */}
          <div
            style={{
              background: "rgba(74,222,128,0.06)",
              border: "1px solid rgba(74,222,128,0.2)",
              borderLeft: "4px solid #4ade80",
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.25rem 1.5rem",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#4ade80",
                marginBottom: "0.5rem",
              }}
            >
              If you&apos;re in crisis right now
            </p>
            <p
              style={{
                fontSize: "0.82rem",
                color: MUTED,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Samaritans: 116 123 (free, 24/7) &mdash; for any emotional
              difficulty, not only suicidal crisis.{" "}
              <strong style={{ color: TEXT }}>CALM: 0800 58 58 58</strong>{" "}
              (5pm&ndash;midnight). Student Minds: studentminds.org.uk. In
              immediate danger: call 999. MEOK always provides these resources
              when a conversation suggests they are needed.
            </p>
          </div>
        </div>

        {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginBottom: "1.75rem",
            }}
          >
            Frequently Asked Questions
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
                q: "Is MEOK free for students?",
                a: "Yes. MEOK\u2019s Explorer tier is permanently free \u2014 no credit card, no trial expiry. It includes a persistent AI companion with memory, daily check-ins, safe messaging guidelines, study support archetypes, and Guardian scam protection. The Sovereign tier is a paid upgrade for advanced memory retrieval, Claude Sonnet reasoning, and full data export. Both tiers operate under the Maternal Covenant: no data sold, no training on your conversations.",
              },
              {
                q: "How does MEOK help with university mental health?",
                a: "MEOK provides persistent companionship \u2014 it remembers your degree, your flatmate situation, your financial anxieties, your exam worries \u2014 without you re-explaining each session. The Maternal Covenant enforces safe messaging guidelines on self-harm and suicide topics. The companion is available at 3am when nothing else is. It always signposts professional help when the situation requires it. It is not therapy. It is a companion that fills the gaps between clinical support.",
              },
              {
                q: "Is MEOK better than university counselling?",
                a: "No \u2014 and it will never claim to be. Clinical therapy does things AI cannot: diagnose conditions, prescribe treatment, provide crisis intervention, and build a therapeutic relationship. The average UK university counselling wait is 4\u20136 weeks. MEOK exists in that gap: available instantly, personally persistent, free, and always honest about its limits. Use both. They are not in competition.",
              },
              {
                q: "Can MEOK help with exam anxiety and study stress?",
                a: "Yes. Scholar uses Socratic questioning for active recall revision \u2014 significantly more effective than re-reading notes. Pioneer handles deadline accountability across your module schedule. For exam anxiety specifically, MEOK runs grounding sessions, helps articulate what you\u2019re afraid of, and interrupts catastrophic thought spirals using the context it already has about you \u2014 not generic responses.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  background: CARD_BG,
                  border: "1px solid " + CARD_BORDER,
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: TEXT,
                    marginBottom: "0.65rem",
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: MUTED_DIM,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SHARE ─────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "2rem 0",
            borderTop: "1px solid " + CARD_BORDER,
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: MUTED_DIM,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-students-mental-health&text=MEOK+for+Student+Mental+Health%3A+Sovereign+AI+at+University"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid " + CARD_BORDER,
              color: MUTED_DIM,
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-students-mental-health"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid " + CARD_BORDER,
              color: MUTED_DIM,
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA BLOCK ─────────────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1530 0%, #0d0c18 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "260px",
              height: "260px",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.15), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "0.75rem",
              }}
            >
              Free Forever &mdash; Explorer Tier
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              Your AI companion for university life starts here
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: MUTED,
                lineHeight: 1.7,
                marginBottom: "1.75rem",
                maxWidth: "520px",
              }}
            >
              Persistent memory. Safe messaging guidelines. Scholar and Pioneer
              for study support. Guardian for scam protection. 24/7 availability
              including 3am on a Wednesday. No credit card. No trial period. Hatch
              your companion in three minutes.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  background: GOLD,
                  color: "#0d0c18",
                  textDecoration: "none",
                }}
              >
                Hatch your AI free &rarr;
              </Link>
              <Link
                href="/blog/meok-for-anxiety"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.5rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: GOLD,
                  textDecoration: "none",
                }}
              >
                Read: MEOK for anxiety
              </Link>
            </div>
          </div>
        </div>

        {/* ── MORE POSTS ────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.15rem",
              color: TEXT,
              marginBottom: "1.25rem",
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
                href: "/blog/meok-for-anxiety",
                tag: "Mental Health",
                title:
                  "AI for Anxiety: How MEOK\u2019s Companion Helps Without Replacing Therapy",
                time: "7 min read",
              },
              {
                href: "/blog/the-maternal-covenant",
                tag: "Alignment",
                title:
                  "The Maternal Covenant: How MEOK Stays on Your Side",
                time: "6 min read",
              },
              {
                href: "/blog/archetypes-guide",
                tag: "Features",
                title:
                  "MEOK Archetypes Explained: Scholar, Pioneer, Healer and More",
                time: "8 min read",
              },
              {
                href: "/blog/meok-for-adhd",
                tag: "Neurodivergent",
                title:
                  "MEOK for ADHD: An AI That Actually Understands How You Think",
                time: "7 min read",
              },
            ].map(({ href, tag, title, time }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  background: CARD_BG,
                  border: "1px solid " + CARD_BORDER,
                  borderRadius: "0.875rem",
                  padding: "1.25rem",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                    color: GOLD,
                    background: "rgba(201,168,76,0.12)",
                    alignSelf: "flex-start",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: TEXT,
                    lineHeight: 1.45,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {title}
                </p>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: MUTED_DIM,
                    marginTop: "auto",
                  }}
                >
                  {time}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
