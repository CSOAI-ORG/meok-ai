import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support for Student Mental Health: The Companion That's Available 24/7 | MEOK AI LABS",
  description:
    "UK student mental health is in crisis — NHS waiting lists, loneliness, imposter syndrome. MEOK is the AI companion available at 2am when no one else is.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-student-mental-health",
  },
  openGraph: {
    title:
      "AI Support for Student Mental Health: The Companion That's Available 24/7",
    description:
      "1 in 5 UK students considers dropping out due to mental health. MEOK is the AI companion built to support university students through the pressure, the loneliness, and the 2am spirals.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-student-mental-health",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+for+Student+Mental+Health&desc=The+Companion+Thats+Available+247",
        width: 1200,
        height: 630,
        alt: "AI Support for Student Mental Health: The Companion That's Available 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support for Student Mental Health: The Companion That's Available 24/7",
    description:
      "UK student counselling waiting lists can stretch to 12 weeks. MEOK is the AI companion available the moment you need it — for free.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+for+Student+Mental+Health&desc=The+Companion+Thats+Available+247",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Student Mental Health: The Companion That's Available 24/7",
  description:
    "UK student mental health is in crisis — NHS waiting lists, loneliness, imposter syndrome. MEOK is the AI companion available at 2am when no one else is.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-student-mental-health",
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
    "https://meok.ai/api/og?title=AI+Support+for+Student+Mental+Health&desc=The+Companion+Thats+Available+247",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-student-mental-health",
  },
  keywords: [
    "student mental health AI",
    "AI companion for university students",
    "student counselling waiting list UK",
    "student loneliness at university",
    "imposter syndrome university",
    "AI for student anxiety",
    "MEOK student support",
    "first year university mental health",
    "international student mental health UK",
    "student mental health crisis UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help with student mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions like MEOK can provide meaningful emotional support for students dealing with everyday stress, loneliness, academic pressure, and anxiety. They are not a replacement for professional therapy or crisis intervention, but they offer consistent, non-judgmental availability that the NHS and university counselling services structurally cannot match. Research from Student Minds and the NUS shows that many students never access professional support at all — partly because waiting lists are too long and partly because they do not want to be a burden. An AI companion removes both barriers.",
      },
    },
    {
      "@type": "Question",
      name: "How long are student counselling waiting lists in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waiting times for university counselling services in the UK vary widely, but Student Minds and the NUS have documented cases where students wait six to twelve weeks or longer for an initial appointment. By comparison, NHS IAPT (Improving Access to Psychological Therapies) services typically aim for a 28-day wait, though demand often exceeds capacity. MEOK is available immediately, at any time of day or night, with no referral required.",
      },
    },
    {
      "@type": "Question",
      name: "What is imposter syndrome at university and how can AI help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Imposter syndrome is the persistent feeling that you do not belong or are not as capable as your peers believe you to be — a feeling that is extremely common among first-generation university students, students from underrepresented backgrounds, and high achievers who tie their self-worth to performance. MEOK can help by offering a space to articulate and challenge those feelings without fear of judgement. Because MEOK remembers previous conversations, it can also track patterns over time — noticing when imposter thoughts spike around deadlines or assessment results and helping you build a more resilient internal narrative.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for students in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is free forever, requires no credit card, and includes full Sovereign Memory, unlimited daily conversations, and access to the Scholar archetype. Students on a budget — including those working part-time alongside their degree — can use MEOK throughout their entire university life at zero cost.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK keep conversations about mental health private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK AI LABS is ICO-registered and operates under UK GDPR. All conversations are encrypted with AES-GCM-256 and stored in your personal Sovereign vault. MEOK never trains on your data without explicit, separately given consent. Your private disclosures — including anything you share about your mental health — are never shared with your university, the NHS, advertisers, or any third party.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from a crisis helpline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is not a crisis service and is not designed to replace one. If you are in crisis, please contact Samaritans on 116 123 (free, 24/7) or text SHOUT to 85258. MEOK is for the everyday emotional labour of student life — processing a tough seminar, working through loneliness on a Sunday evening, managing academic pressure, or simply having somewhere to put your thoughts when your flatmates are asleep. It is the low-acuity, always-available layer that sits beneath professional support.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help international students feel less isolated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "International students in the UK face a particular combination of challenges: cultural adjustment, distance from family support networks, potential language anxiety, and the financial pressure of overseas tuition fees. MEOK is available in multiple languages, operates on any time zone, and — because it stores persistent context — can hold your whole situation in mind across conversations. It is not the same as finding your community on campus, but it can be a genuine bridge during the months when that community is still forming.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForStudentMentalHealthPage() {
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 72%)",
          }}
        />

        <div
          style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              marginBottom: "2rem",
              fontSize: "0.8125rem",
              color: MUTED,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{ color: MUTED, textDecoration: "none" }}
            >
              Home
            </Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link
              href="/blog"
              style={{ color: MUTED, textDecoration: "none" }}
            >
              Blog
            </Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: GOLD }}>AI for Student Mental Health</span>
          </nav>

          {/* Category badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "2rem",
              padding: "0.3rem 0.875rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Student Mental Health
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              color: TEXT,
            }}
          >
            AI Support for Student Mental Health: The Companion That&apos;s
            Available 24/7
          </h1>

          {/* Intro paragraph */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "2rem",
            }}
          >
            You are three weeks into your first term, it is half past midnight,
            and you have a 2,000-word essay due in the morning. Your flatmates
            are asleep. Your student counsellor appointment is six weeks away.
            You are not in crisis — but you are not okay either. This is the gap
            that MEOK was built to fill.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              paddingBottom: "2rem",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
              }}
            >
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: GOLD,
                  flexShrink: 0,
                }}
              >
                NT
              </div>
              <div>
                <div
                  style={{ fontSize: "0.875rem", fontWeight: 600, color: TEXT }}
                >
                  Nicholas Templeman
                </div>
                <div style={{ fontSize: "0.75rem", color: MUTED }}>
                  Founder, MEOK AI LABS
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: FAINT,
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <time dateTime="2026-03-24">24 March 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* ── SECTION: THE CRISIS ─────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Student mental health in the United Kingdom has moved from a quiet
            concern to a full-blown crisis. The numbers are stark. Research
            published by Student Minds — the UK&apos;s student mental health
            charity — found that 57% of students experienced a serious
            psychological problem during their time at university. The NUS
            (National Union of Students) has reported that 1 in 5 students has
            considered withdrawing from their course because of mental health
            difficulties. UCAS data shows that disclosure of mental health
            conditions among applicants has risen by more than 450% over the
            last decade, which reflects both a genuine increase in need and a
            welcome reduction in stigma.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            And yet the infrastructure that supports student wellbeing has not
            kept pace. University counselling services are chronically
            under-resourced. NHS Student Health practices are under the same
            demand pressure as every other part of the health service. The
            practical result — as any student who has tried to get help will
            tell you — is a waiting list that stretches from weeks into months,
            and a triage process that often filters out the students who are
            struggling but not yet in acute crisis.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            This is not a failure of individual counsellors or GPs. It is a
            structural problem: demand vastly outstrips supply, and the model of
            care — weekly or fortnightly 50-minute sessions with a human
            professional — simply cannot scale to cover hundreds of thousands of
            students. Something has to fill the gap between &quot;fine&quot; and
            &quot;in crisis&quot;. That is where AI companions enter the
            picture.
          </p>
        </section>

        {/* ── H2 1 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}
        >
          Why Is Student Mental Health Getting Worse in the UK?
        </h2>

        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Before exploring what AI can offer, it is worth being honest about
            what students are actually dealing with. University life is often
            sold as the best years of your life — new friends, intellectual
            freedom, late-night conversations that change how you see the world.
            And it genuinely can be that. But it can also be profoundly
            isolating, exhausting, and financially frightening in ways that
            previous generations simply did not face to the same degree.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The cost of living crisis has made things significantly worse.
            Students in England now graduate with an average debt load exceeding
            £45,000 according to the Student Loans Company. A growing proportion
            are working 15 to 20 hours a week in part-time jobs alongside a
            full-time degree — not for experience or pocket money, but to cover
            rent and food. When you are sleep-deprived, financially anxious, and
            racing between a lecture and a shift at a café, there is very little
            bandwidth left for processing emotion or maintaining mental
            equilibrium.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Social media compounds this. Students are surrounded by curated
            versions of their peers&apos; lives — the nights out that look like
            film stills, the placement offers announced on LinkedIn, the
            dissertation results celebrated publicly. The gap between what
            students see online and what they experience privately can feel
            enormous, and it creates a specific kind of loneliness that is hard
            to articulate: not the loneliness of being alone, but the loneliness
            of feeling like you are the only one who is not thriving.
          </p>

          {/* Callout box */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>Key statistic:</strong> Student
              Minds&apos; University Mental Health Report found that only 26% of
              students who experienced a mental health problem sought help from
              their university&apos;s counselling service. The most common
              reason for not seeking help was not stigma — it was not knowing
              what was available or believing the problem was not serious enough.
            </p>
          </div>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            This is important context for thinking about where AI fits in. A
            significant proportion of the students who are struggling never make
            it to a counsellor — not because they do not want help, but because
            the threshold for seeking formal support feels too high, or because
            the waiting time makes it feel futile. An AI companion that requires
            no referral, no waiting room, and no formal disclosure addresses
            precisely this group.
          </p>
        </section>

        {/* ── H2 2 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}
        >
          What Does the First Year of University Actually Feel Like?
        </h2>

        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The transition to university is one of the most significant life
            changes a young person in the UK will make. You move away from your
            family, your home town, your friendship networks, and the routines
            that have structured your entire adolescence — often all in the same
            week. You are expected to be independent, capable, and
            self-sufficient at exactly the moment when you are most uncertain
            about who you are.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The first few weeks — freshers&apos; week and the weeks immediately
            following — are often simultaneously the most socially intense and
            the most privately difficult. Freshers&apos; week is designed to
            help you make friends, but it is built around alcohol-fuelled
            socialising in loud environments, which actively excludes a large
            proportion of students: those who do not drink, those who have
            social anxiety, those who are quietly overwhelmed by the noise and
            the pressure to seem like they are having the time of their lives.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Then the party ends, the academic year properly begins, and the
            performance anxiety starts. Are you in the right seminars? Is
            everyone else already better at this than you are? Is the person
            next to you going to figure out that you do not really know what
            you&apos;re doing? This is the onset of imposter syndrome — and it
            is almost universal among new university students, though almost
            nobody talks about it openly.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            For many students, particularly those from lower-income households
            or who are the first in their family to go to university, this
            feeling is compounded by a class awareness that is difficult to
            name. University culture — its norms, its social codes, its
            assumptions about what you should already know — can feel like a
            language you were never taught. Students in this position often
            describe feeling simultaneously proud to be there and convinced they
            do not deserve to be.
          </p>
        </section>

        {/* ── H2 3 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}
        >
          How Can an AI Companion Help With Loneliness at University?
        </h2>

        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Loneliness at university is a specific and underacknowledged
            problem. It is possible to be surrounded by hundreds of people —
            sharing a kitchen, sitting in a lecture theatre, walking through a
            busy campus — and still feel profoundly alone. The NUS has
            documented that more than half of UK students report feeling lonely
            during their time at university. For many, this peaks in the first
            term and again in second year, when the freshers&apos; social
            scaffolding has been removed and deeper friendships have not yet
            taken root.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            An AI companion does not cure loneliness — nothing replaces genuine
            human connection, and we would never pretend otherwise. What it can
            do is reduce the specific pain of having no one to process your day
            with. There is a particular quality to Sunday evenings at university
            — the shops are shut, the campus is quiet, your friends are home for
            the weekend, and you are left alone with your thoughts and a
            deadline for Monday morning. That is not a crisis. It is just a hard
            moment. But hard moments that have nowhere to go accumulate.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK is available in those moments. It is not going to tell you to
            look on the bright side or redirect you to a wellbeing leaflet. It
            is going to ask how you are actually doing, remember that you
            mentioned your mum was ill last week, notice that this is the third
            Sunday you have described feeling isolated, and reflect that pattern
            back to you — gently, without drama, in a way that helps you
            understand your own experience rather than feeling worse about it.
          </p>

          {/* Feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Always Available
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: MUTED,
                  margin: 0,
                }}
              >
                MEOK is available at 2am, on bank holidays, over Christmas break
                — the moments when human support networks are most stretched and
                most needed.
              </p>
            </div>
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                No Waiting List
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: MUTED,
                  margin: 0,
                }}
              >
                No referral, no GP appointment, no six-week wait. You open MEOK
                and you start talking. That&apos;s it.
              </p>
            </div>
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Sovereign Memory
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: MUTED,
                  margin: 0,
                }}
              >
                MEOK remembers what you told it last week, last month, last
                term. You never have to start from scratch or explain your whole
                situation again.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The Sovereign Memory architecture is particularly significant for
            students dealing with loneliness, because loneliness is partly about
            being unknown. When MEOK remembers that you struggle on Sunday
            evenings, that your course changed in November, that you had a
            falling out with your flatmate in January — it holds a version of
            your life that a new friend cannot yet hold. That continuity has
            genuine value.
          </p>
        </section>

        {/* ── H2 4 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}
        >
          Can AI Help Students Deal With Imposter Syndrome and Academic
          Pressure?
        </h2>

        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Imposter syndrome is the feeling that you are not as capable as
            others believe you to be — that you have somehow deceived your
            university into accepting you, and that it is only a matter of time
            before someone notices. This is not a rare or pathological
            experience. It is, in various degrees, close to universal at
            university — particularly in the first year, around assessment
            periods, and after any significant setback such as a poor grade or a
            failed exam.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            What makes imposter syndrome damaging is not its presence but its
            silence. Students who feel like imposters rarely talk about it —
            partly because doing so feels like the confession that will lead to
            their unmasking, and partly because the social norm at university is
            to project confidence and competence. The result is that everyone
            sits in the same lecture theatre quietly convinced they are the only
            one who does not understand, while the person next to them feels
            exactly the same.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK offers a space where the confession is safe. You can tell MEOK
            that you think you are not good enough, that you are terrified your
            dissertation supervisor has figured out you have no idea what you are
            doing, that you got a 2:2 on your first essay and it felt like
            confirmation of everything you feared. MEOK will not dismiss those
            feelings or rush past them with reassurance. It will explore them
            with you — tracing where they come from, what evidence supports them
            (and what does not), and how they interact with the broader patterns
            of your life that it holds in memory.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Academic pressure is a related but distinct problem. UK universities
            have, over the last two decades, shifted substantially towards
            continuous assessment, coursework deadlines, and the kind of
            constant-performance culture that leaves very little room for the
            kind of sustained, exploratory thinking that undergraduate education
            is supposed to cultivate. Students describe feeling like they are
            always behind, always producing, never quite able to absorb what
            they are learning because the next deadline is already bearing down.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK Scholar — the archetype tuned specifically for students — is
            designed to work with this reality rather than pretending it does not
            exist. It can help you build revision schedules, break overwhelming
            workloads into manageable chunks, and think through how to prioritise
            competing demands. But it also understands that sometimes the most
            useful thing is not a to-do list — it is someone who acknowledges
            that the pressure is real and that you are handling it as well as
            anyone could.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.5rem",
              marginLeft: 0,
              marginRight: 0,
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.1875rem",
                lineHeight: 1.65,
                fontStyle: "italic",
                color: TEXT,
                margin: 0,
              }}
            >
              &ldquo;The problem with imposter syndrome at university is not
              that students feel it — it is that they feel it alone. MEOK is
              built to be the space where that silence ends.&rdquo;
            </p>
            <footer
              style={{
                marginTop: "0.75rem",
                fontSize: "0.875rem",
                color: MUTED,
              }}
            >
              — Nicholas Templeman, Founder, MEOK AI LABS
            </footer>
          </blockquote>
        </section>

        {/* ── H2 5 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}
        >
          What About International Students? How Is Their Experience Different?
        </h2>

        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            International students studying in the UK occupy a particularly
            difficult position in the student mental health conversation. They
            face all the challenges of any first-year student — adjustment,
            loneliness, academic pressure — plus a layer of complexity that
            domestic students simply do not have to navigate.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The financial stakes are dramatically higher. International tuition
            fees at UK universities typically range from £15,000 to £38,000 per
            year — several times the domestic rate. For many international
            students, the expectation of family members back home, the financial
            sacrifice that has been made to get them here, and the social
            pressure not to fail or even struggle adds a weight to every
            assignment and every social interaction that is genuinely
            destabilising. There is often a strong disincentive to disclose
            mental health difficulties — either to university services or to
            family — because doing so risks being perceived as ungrateful,
            incapable, or not worth the investment.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Cultural adjustment adds another dimension. The social codes, humour,
            and unspoken rules of British university life are not intuitive if
            you have not grown up within them. Making friends can feel like
            trying to participate in a conversation where everyone else knows
            the references and you are learning the language in real time. And
            the time zone gap — being 5, 8, or 11 hours from the family
            members who know you best — means that the moments when you most
            need to hear a familiar voice are often the moments when it is the
            wrong time of day to call.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK operates across any time zone and holds persistent context
            about your whole situation. If you have told MEOK that you are from
            Mumbai and that the pressure from your family to succeed is
            significant, it will hold that context across every subsequent
            conversation. It will not ask you to re-explain your background
            every time you open the app. That continuity — the sense of being
            known — is particularly meaningful when you are in a country where
            very few people know you at all.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            We also want to be direct about what MEOK is not: it is not a
            substitute for the international student support networks that
            universities should be building and funding properly. International
            students deserve access to culturally informed counselling services,
            peer communities, and pastoral support that understands their
            specific circumstances. MEOK is a supplement to those things, not
            a reason to defund them.
          </p>
        </section>

        {/* ── H2 6 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}
        >
          Is MEOK Safe to Use for Students With Serious Mental Health
          Difficulties?
        </h2>

        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            This is the question that matters most, and we want to answer it
            clearly and without corporate hedging.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK is not a mental health service. It is not regulated as a
            medical device. It is not a substitute for professional therapy,
            psychiatric support, or crisis intervention. If you are experiencing
            thoughts of suicide or self-harm, please contact Samaritans on
            116 123 (free, available 24 hours a day, 365 days a year) or text
            SHOUT to 85258. If you are in immediate danger, please call 999 or
            go to your nearest A&E.
          </p>

          {/* Crisis box */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.875rem",
              }}
            >
              Crisis Support in the UK
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
              }}
            >
              <li
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: TEXT,
                }}
              >
                <strong style={{ color: GOLD }}>Samaritans:</strong> 116 123 —
                free, 24/7, available every day of the year
              </li>
              <li
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: TEXT,
                }}
              >
                <strong style={{ color: GOLD }}>Shout Crisis Text Line:</strong>{" "}
                text SHOUT to 85258 — free, 24/7 text support
              </li>
              <li
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: TEXT,
                }}
              >
                <strong style={{ color: GOLD }}>Student Minds:</strong>{" "}
                studentminds.org.uk — UK student mental health charity, peer
                support and resources
              </li>
              <li
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: TEXT,
                }}
              >
                <strong style={{ color: GOLD }}>NHS 111:</strong> call 111 or
                visit 111.nhs.uk for urgent (non-emergency) medical help
              </li>
            </ul>
          </div>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            With that clearly stated: for the vast majority of students dealing
            with the everyday spectrum of difficulty — exam stress, relationship
            anxiety, low mood, loneliness, academic pressure, imposter syndrome,
            the weight of managing money and work and study simultaneously —
            MEOK is designed to be genuinely helpful. It operates under the
            Maternal Covenant, which is the ethical framework Nicholas Templeman
            built into MEOK&apos;s core: the principle that MEOK should never
            make you feel worse about yourself, never reinforce self-destructive
            patterns of thinking, and always be honest with you even when
            honesty is uncomfortable.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            This means MEOK will not tell you that everything is fine when it
            is not. It will not offer you toxic positivity or empty
            encouragement. If a pattern of thought seems worth examining — if
            you keep describing situations where you feel you are failing despite
            evidence to the contrary — MEOK will gently name that pattern and
            invite you to look at it. It is not therapy. But it is not nothing,
            either.
          </p>
        </section>

        {/* ── H2 7 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}
        >
          How Does MEOK Fit Alongside University Counselling and NHS Support?
        </h2>

        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The honest answer is: MEOK occupies a different layer of the support
            ecosystem, and it is not in competition with professional services.
            Think of it as a triangle. At the base is self-care and informal
            support — friends, family, exercise, sleep. In the middle is
            structured but non-clinical support — peer support groups, apps,
            university wellbeing services, and AI companions like MEOK. At the
            top is professional clinical support — counsellors, therapists,
            psychiatrists, GPs.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The problem in the current UK student mental health system is that
            the middle layer is extremely thin. Most universities have some form
            of counselling service, but demand far outstrips capacity and the
            threshold for access is often set high. Below that, there is almost
            nothing systematic — a few wellbeing apps, some peer support
            schemes, a set of leaflets in the Student Union. MEOK is designed to
            occupy and strengthen that middle layer: available to the student who
            does not need a therapist but absolutely needs something more than
            nothing.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK can also serve as a preparation layer for professional support.
            Many students find it difficult to articulate what they are
            experiencing when they finally see a counsellor. The sessions feel
            short, the therapeutic relationship takes time to build, and the
            first appointments are often spent establishing context rather than
            making progress. If a student has been using MEOK for several months
            before their first counselling appointment, they will likely arrive
            with more self-awareness, a clearer account of their own patterns,
            and a greater ability to use the professional support effectively.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                57%
              </div>
              <div style={{ fontSize: "0.8125rem", color: MUTED, lineHeight: 1.5 }}>
                of UK students experience a serious psychological problem at
                university (Student Minds)
              </div>
            </div>
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                1 in 5
              </div>
              <div style={{ fontSize: "0.8125rem", color: MUTED, lineHeight: 1.5 }}>
                UK students consider withdrawing from university due to mental
                health (NUS)
              </div>
            </div>
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                74%
              </div>
              <div style={{ fontSize: "0.8125rem", color: MUTED, lineHeight: 1.5 }}>
                of students who struggle never access their university
                counselling service (Student Minds)
              </div>
            </div>
          </div>
        </section>

        {/* ── H2 8 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}
        >
          What Makes MEOK Different From Other Mental Health Apps for Students?
        </h2>

        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            There are other apps in the student mental health space — Woebot,
            Wysa, Headspace, Calm, and various university-licensed tools among
            them. Each has genuine merits. But MEOK was built from a different
            premise, and it is worth being specific about what that means in
            practice.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Most mental health apps are built around structured programmes —
            CBT exercises, mindfulness sessions, mood tracking, psychoeducation
            modules. These are valuable, but they are finite. Once you have
            completed the programme, there is nothing left to do. And they
            respond to you as a generic user, not as you specifically — with
            your particular history, your specific situation, your individual
            relationship to your own mental health.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK is built around Sovereign Memory — a 4-layer persistent
            architecture that stores your context across every conversation, with
            encryption that means your data belongs to you and no one else. The
            difference this makes is not subtle. When you tell MEOK in October
            that you are worried about your maths module, and you come back in
            February after your January exams, MEOK already knows. It does not
            need you to catch it up. It asks how the exams went — because it
            remembers that the exams were happening.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            There is also the question of data. Most mental health apps — and
            general-purpose AI tools like ChatGPT or Gemini — use your
            conversations to improve their models. MEOK operates under the
            Privacy Covenant: we do not train on your data without your explicit
            consent, and your mental health disclosures are encrypted at rest
            and in transit using AES-GCM-256. Your private thoughts about your
            anxiety, your relationships, or your academic performance are not
            becoming training data for a language model. MEOK AI LABS is
            ICO-registered and fully compliant with UK GDPR.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Finally — and this matters for students — MEOK is free. The Explorer
            tier includes full Sovereign Memory, the Scholar archetype, and
            unlimited daily conversations. No credit card required. No
            artificial limitations designed to push you towards a paid tier. If
            you graduate and you never pay MEOK a penny, that is fine. We built
            the free tier to be genuinely useful, not a teaser.
          </p>
        </section>

        {/* ── CLOSING ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            University is supposed to be transformative. And it often is — but
            transformation is not a comfortable process, and the UK system
            currently asks students to navigate enormous personal change while
            managing financial pressure, academic performance, and social
            navigation largely on their own. The mental health infrastructure
            that should support this transition is underfunded and
            overstretched, and the gap between &quot;struggling&quot; and
            &quot;in crisis&quot; is where most students live.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK does not fix the structural problems. It does not shorten NHS
            waiting lists or persuade universities to hire more counsellors.
            What it does is be there — at midnight on a Tuesday, on the Sunday
            evening when everyone has gone home, at 6am the morning before an
            exam you are convinced you will fail. It listens. It remembers. It
            does not judge you for struggling. It does not tell you to be more
            grateful or count your blessings. It just holds space for the
            version of yourself that is having a hard time — and helps you find
            your way through it.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            That is not a small thing. For a lot of students, it is exactly the
            thing.
          </p>
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.8vw, 1.65rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
              color: TEXT,
              marginBottom: "1.75rem",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* FAQ Item 1 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Can AI really help with student mental health?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: MUTED,
                  margin: 0,
                }}
              >
                AI companions like MEOK can provide meaningful emotional support
                for students dealing with everyday stress, loneliness, academic
                pressure, and anxiety. They are not a replacement for
                professional therapy or crisis intervention, but they offer
                consistent, non-judgmental availability that the NHS and
                university counselling services structurally cannot match.
                Research from Student Minds and the NUS shows that many students
                never access professional support at all — partly because waiting
                lists are too long and partly because they do not want to be a
                burden. An AI companion removes both barriers.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                How long are student counselling waiting lists in the UK?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: MUTED,
                  margin: 0,
                }}
              >
                Waiting times vary widely, but Student Minds and the NUS have
                documented cases where students wait six to twelve weeks or
                longer for an initial appointment at their university counselling
                service. NHS IAPT services typically aim for a 28-day wait,
                though demand often exceeds capacity. MEOK is available
                immediately, at any time of day or night, with no referral
                required.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                What is imposter syndrome at university and how can AI help?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: MUTED,
                  margin: 0,
                }}
              >
                Imposter syndrome is the persistent feeling that you do not
                belong or are not as capable as your peers believe you to be. It
                is extremely common among first-generation university students,
                students from underrepresented backgrounds, and high achievers
                who tie their self-worth to performance. MEOK can help by
                offering a space to articulate and challenge those feelings
                without fear of judgement — and, because it holds persistent
                memory, it can track patterns over time and help you build a
                more resilient internal narrative.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Is MEOK free for students in the UK?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: MUTED,
                  margin: 0,
                }}
              >
                Yes. MEOK&apos;s Explorer tier is free forever, requires no
                credit card, and includes full Sovereign Memory, unlimited daily
                conversations, and access to the Scholar archetype. Students on
                a budget — including those working part-time alongside their
                degree — can use MEOK throughout their entire university life at
                zero cost.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Does MEOK keep conversations about mental health private?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: MUTED,
                  margin: 0,
                }}
              >
                Yes. MEOK AI LABS is ICO-registered and operates under UK GDPR.
                All conversations are encrypted with AES-GCM-256 and stored in
                your personal Sovereign vault. MEOK never trains on your data
                without explicit consent. Your private disclosures — including
                anything you share about your mental health — are never shared
                with your university, the NHS, advertisers, or any third party.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                How is MEOK different from a crisis helpline?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: MUTED,
                  margin: 0,
                }}
              >
                MEOK is not a crisis service. If you are in crisis, please
                contact Samaritans on 116 123 (free, 24/7) or text SHOUT to
                85258. MEOK is for the everyday emotional labour of student life
                — processing a tough seminar, working through loneliness on a
                Sunday evening, managing academic pressure, or simply having
                somewhere to put your thoughts when your flatmates are asleep.
                It is the low-acuity, always-available layer that sits beneath
                professional support.
              </p>
            </div>

            {/* FAQ Item 7 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Can MEOK help international students feel less isolated?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: MUTED,
                  margin: 0,
                }}
              >
                International students face a particular combination of
                challenges: cultural adjustment, distance from family support
                networks, potential language anxiety, and the financial pressure
                of overseas tuition fees. MEOK is available across any time
                zone, operates in multiple languages, and — because it stores
                persistent context — holds your whole situation in mind across
                conversations. It is not the same as finding your community on
                campus, but it can be a genuine bridge during the months when
                that community is still forming.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.875rem",
            }}
          >
            Start Free — No Credit Card Required
          </div>
          <h3
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
              fontWeight: 700,
              color: TEXT,
              lineHeight: 1.3,
              marginBottom: "0.875rem",
            }}
          >
            The companion that&apos;s there at midnight.
          </h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: MUTED,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            MEOK Scholar is built for university life. It remembers your
            modules, your deadlines, your worries, and your wins — across every
            conversation, for free. No waiting list. No referral. No judgement.
          </p>
          <Link
            href="/signup"
            style={{
              display: "inline-block",
              background: GOLD,
              color: BG,
              fontWeight: 700,
              fontSize: "0.9375rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Try MEOK Free
          </Link>
        </section>

        {/* ── RELATED POSTS ───────────────────────────────────────────────── */}
        <section>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "1rem",
            }}
          >
            <Link
              href="/blog/ai-for-students"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: GOLD,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Students
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  AI for Students: Sovereign Memory for University, Revision,
                  and Real Life
                </div>
                <div
                  style={{ fontSize: "0.8125rem", color: FAINT }}
                >
                  meok.ai/blog/ai-for-students
                </div>
              </div>
            </Link>

            <Link
              href="/blog/ai-for-exam-stress"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: GOLD,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Exam Stress
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  AI for Exam Stress: When the Pressure Feels Impossible
                </div>
                <div
                  style={{ fontSize: "0.8125rem", color: FAINT }}
                >
                  meok.ai/blog/ai-for-exam-stress
                </div>
              </div>
            </Link>

            <Link
              href="/blog/ai-for-anxiety"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: GOLD,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Anxiety
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  AI for Anxiety: A Companion That Never Tells You to Calm Down
                </div>
                <div
                  style={{ fontSize: "0.8125rem", color: FAINT }}
                >
                  meok.ai/blog/ai-for-anxiety
                </div>
              </div>
            </Link>

            <Link
              href="/blog/ai-for-impostor-syndrome"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: GOLD,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Impostor Syndrome
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  AI for Impostor Syndrome: When You Feel Like Everyone Else
                  Has It Figured Out
                </div>
                <div
                  style={{ fontSize: "0.8125rem", color: FAINT }}
                >
                  meok.ai/blog/ai-for-impostor-syndrome
                </div>
              </div>
            </Link>

            <Link
              href="/blog/meok-vs-woebot"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: GOLD,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Comparison
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  MEOK vs Woebot: Which AI Companion Is Better for Mental
                  Health?
                </div>
                <div
                  style={{ fontSize: "0.8125rem", color: FAINT }}
                >
                  meok.ai/blog/meok-vs-woebot
                </div>
              </div>
            </Link>

            <Link
              href="/blog/ai-for-loneliness"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: GOLD,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Loneliness
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  AI for Loneliness: The Companion That Remembers You Tomorrow
                </div>
                <div
                  style={{ fontSize: "0.8125rem", color: FAINT }}
                >
                  meok.ai/blog/ai-for-loneliness
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── FOOTER NOTE ─────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              lineHeight: 1.7,
              color: FAINT,
              marginBottom: "0.75rem",
            }}
          >
            <strong style={{ color: MUTED }}>Disclaimer:</strong> MEOK is not a
            regulated medical device or mental health service. It is not a
            substitute for professional clinical care. If you are experiencing a
            mental health crisis, please contact Samaritans (116 123), text
            SHOUT to 85258, or call 999. MEOK AI LABS is ICO-registered and
            compliant with UK GDPR.
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              lineHeight: 1.7,
              color: FAINT,
            }}
          >
            Written by Nicholas Templeman, Founder of MEOK AI LABS. Published
            24 March 2026.{" "}
            <Link
              href="/blog"
              style={{ color: GOLD, textDecoration: "none" }}
            >
              Back to the blog
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
