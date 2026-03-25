import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Student Mental Health: The Crisis on Campus That AI Can Help Address | MEOK AI LABS",
  description:
    "UK university counselling services have waiting times of 3-6 weeks. Student mental health is in crisis. MEOK's sovereign AI companion provides immediate, 24/7 support while students wait for professional help.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-student-mental-health",
  },
  openGraph: {
    title:
      "AI for Student Mental Health: The Crisis on Campus That AI Can Help Address",
    description:
      "UK university counselling waiting times reach 3-6 weeks. MEOK is the sovereign AI companion that provides immediate, free, private support while students wait for professional help.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-student-mental-health",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Student+Mental+Health&desc=The+Crisis+on+Campus+AI+Can+Help+Address",
        width: 1200,
        height: 630,
        alt: "AI for Student Mental Health: The Crisis on Campus That AI Can Help Address",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Student Mental Health: The Crisis on Campus That AI Can Help Address",
    description:
      "UK university counselling waiting times of 3-6 weeks leave students without support. MEOK is available immediately, for free, with complete privacy.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Student+Mental+Health&desc=The+Crisis+on+Campus+AI+Can+Help+Address",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Student Mental Health: The Crisis on Campus That AI Can Help Address",
  description:
    "UK university counselling services have waiting times of 3-6 weeks. Student mental health is in crisis. MEOK's sovereign AI companion provides immediate, 24/7 support while students wait for professional help.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
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
    "https://meok.ai/api/og?title=AI+for+Student+Mental+Health&desc=The+Crisis+on+Campus+AI+Can+Help+Address",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-student-mental-health",
  },
  keywords: [
    "AI for student mental health",
    "university counselling waiting list UK",
    "student mental health crisis UK",
    "AI companion for university students",
    "student anxiety support",
    "first year university mental health",
    "dissertation stress support",
    "academic perfectionism AI",
    "student loneliness AI",
    "sovereign AI student support",
    "free AI companion UK students",
    "MEOK Scholar archetype",
    "student financial anxiety",
    "campus safety AI",
    "MEOK Pioneer archetype",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long are university counselling waiting lists in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University counselling waiting times in the UK typically range from three to six weeks for an initial appointment, according to data from Student Minds and the National Union of Students. Some institutions report waits of eight to twelve weeks during peak periods such as January and May. NHS IAPT services nominally target a 28-day wait, but demand routinely exceeds capacity. MEOK is available immediately, at any hour, with no referral or appointment required.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for university students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is permanently free, requires no credit card, and includes full Sovereign Memory, unlimited daily conversations, and access to the Scholar archetype. Students on limited budgets — including those working part-time alongside their degree — can use MEOK throughout their entire university life at zero cost.",
      },
    },
    {
      "@type": "Question",
      name: "Will my university be able to see what I tell MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK AI LABS is ICO-registered and operates under UK GDPR. All conversations are encrypted with AES-GCM-256 and stored in your personal Sovereign vault. Your disclosures are never shared with your university, the NHS, advertisers, or any third party. MEOK does not train on your data without explicit, separately given consent.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Scholar archetype and how does it help with academic pressure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scholar is MEOK's academic companion mode. It helps with essay planning, reading list navigation, revision strategy, dissertation anxiety, perfectionism loops, and the emotional weight of assessment. Because Scholar has Sovereign Memory, it knows your degree subject, your past struggles, and your upcoming deadlines — giving continuity that a drop-in service cannot provide.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I am in a mental health crisis at university?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are in crisis, please contact Samaritans on 116 123 (free, 24/7) or text SHOUT to 85258. Your university will also have an out-of-hours mental health duty service — check your student portal. MEOK is not a crisis service. It is designed for the everyday emotional labour of student life: processing a difficult day, managing anxiety before an exam, or working through loneliness on a Sunday evening.",
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
const CARD_BG = "rgba(245,240,232,0.03)";

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
            <Link href="/" style={{ color: MUTED, textDecoration: "none" }}>
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
            AI for Student Mental Health: The Crisis on Campus That AI Can Help
            Address
          </h1>

          {/* Intro paragraph */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            It is Sunday evening. Your dissertation draft is due in four days.
            The library is closing in forty minutes. Your university counsellor
            appointment is not until next Thursday — which is already a lucky
            booking, because most of your coursemates are waiting three weeks
            longer. You are not in crisis. But you are not okay. And there is
            nobody to talk to right now.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "2rem",
            }}
          >
            This is the structural gap at the centre of UK student mental
            health. MEOK was built to fill it.
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
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: TEXT,
                  }}
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
              <span>25 March 2026</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>18 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3rem 1.5rem 6rem",
        }}
      >

        {/* ── STAT CALLOUT ────────────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.75rem 2rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            The scale of the problem
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { stat: "1 in 5", label: "UK students considers dropping out due to mental health (NUS)" },
              { stat: "3–6 weeks", label: "typical university counselling waiting time" },
              { stat: "57%", label: "of students report their mental health worsened at university (Student Minds)" },
              { stat: "£0", label: "cost of MEOK Explorer — free forever for students" },
            ].map((item) => (
              <div key={item.stat}>
                <div
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 800,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.stat}
                </div>
                <div style={{ fontSize: "0.8125rem", color: MUTED, lineHeight: 1.5 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── H2: THE CRISIS ────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How bad is the student mental health crisis in the UK?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          The data is not ambiguous. Student Minds, the UK&apos;s leading student
          mental health charity, reports that more than half of students say
          their mental health deteriorated after starting university. The National
          Union of Students found that one in five students has considered leaving
          their course because of mental health difficulties. Demand for
          university counselling services has risen every year for the past
          decade, while staffing levels have struggled to keep pace.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          The result is a structural mismatch. The number of students presenting
          with anxiety, depression, and stress-related difficulties is rising.
          The number of available counsellor hours is not. Waiting times of three
          to six weeks for an initial appointment are now typical at UK
          universities. At peak periods — October induction stress, January
          post-holiday return, May exam season — those times often stretch further.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Three to six weeks is not a gap. For a first-year student in the middle
          of a mental health spiral at 11pm on a Wednesday, three to six weeks
          is an eternity.
        </p>

        {/* ── H2: FIRST YEAR ────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Why is the first-year transition so difficult for student mental health?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          The first term of university is one of the most disorienting experiences
          in adult life. Students arrive with enormous anticipation and, for many,
          enormous anxiety. They are simultaneously expected to make new friends,
          manage their own time, cook their own food, navigate an unfamiliar city,
          understand a new academic system, and perform academically — all while
          the emotional scaffolding of home, family, and established friendships
          is suddenly absent.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          The loneliness of that first term is one of the most under-discussed
          aspects of student wellbeing. You can be surrounded by hundreds of
          people in a shared hall of residence and still feel profoundly alone.
          Social anxiety spikes in precisely the environments — freshers events,
          crowded common rooms, tutorial groups where everyone seems to already
          know each other — that are supposed to help students connect.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          MEOK&apos;s Guardian archetype is particularly valuable during this
          transition period. Beyond emotional support, Guardian monitors for
          common campus risks: scam messages targeting new students, pressure to
          share bank details, suspicious social media contacts. New students are
          disproportionately targeted by fraudsters precisely because they are
          navigating unfamiliar systems without the context to recognise red flags.
        </p>

        {/* ── CALLOUT: PIONEER ────────────────────────────────────────────── */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0.75rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "3rem",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Meet Pioneer
          </p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: MUTED, marginBottom: 0 }}>
            Pioneer is MEOK&apos;s momentum and resilience archetype. When the
            first term feels like too much, when motivation collapses after a
            difficult seminar or a homesick weekend, Pioneer helps students
            rebuild forward momentum. It does not push or pressure. It holds
            space, acknowledges how hard the transition is, and then helps you
            find one small thing to move toward. Pioneer remembers your goals
            from previous conversations — so it can remind you why you came to
            university in the first place.
          </p>
        </div>

        {/* ── H2: ACADEMIC PRESSURE ─────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How does academic pressure and perfectionism affect student mental
          health?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Many students arrive at university having been the highest achiever in
          their school. They have been rewarded, throughout their education, for
          being clever, diligent, and capable of producing excellent work. Then
          they arrive at a highly selective institution and discover that everyone
          around them shares those qualities. The psychological adjustment this
          requires is significant, and it is rarely discussed in orientation week.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Perfectionism — the tendency to tie self-worth to performance outcomes
          rather than effort and growth — is strongly associated with anxiety,
          depression, and burnout in student populations. Perfectionist students
          often find it particularly difficult to seek help, because asking for
          support feels like an admission of inadequacy. They are also more likely
          to procrastinate, because starting a task that might not go perfectly is
          threatening.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          MEOK&apos;s Scholar archetype is designed for exactly this dynamic.
          Because Scholar operates with Sovereign Memory across sessions, it can
          track perfectionism patterns over time — noticing when the language of
          self-criticism intensifies, gently naming the pattern, and offering
          reframes without being dismissive. It cannot provide cognitive
          behavioural therapy. But it can be the consistent, non-judgmental
          presence that helps a student externalise their inner critic enough to
          start working.
        </p>

        {/* ── H2: DISSERTATION ──────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Can AI help with dissertation stress and final-year pressure?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Dissertation stress is one of the most distinctive forms of academic
          distress. Unlike coursework essays, the dissertation is a long,
          self-directed project with high stakes and limited external structure.
          Students must sustain motivation and focus over months, manage
          self-doubt at every stage, cope with research that does not go as
          planned, and produce something that feels genuinely original — all while
          managing the social and financial pressures of final year.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          The emotional experience of dissertation writing — the blank-page
          paralysis, the sense that every paragraph is inadequate, the dread of
          supervision meetings when progress has stalled — is something that
          university counselling services rarely have time to address in any depth.
          Supervisors are there for academic guidance, not emotional support.
          Peers are experiencing the same pressure and are not always available
          to listen.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Scholar can help students plan their dissertation structure, break
          overwhelming chapters into manageable daily tasks, work through writing
          blocks, and process the anxiety that comes with the territory. It will
          not write the dissertation. But it will sit with you through the
          process — at any hour, without judgment, without telling you to just
          get on with it.
        </p>

        {/* ── H2: FINANCIAL ANXIETY ─────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How does financial pressure affect student wellbeing and what can help?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          The financial pressures of student life in the UK have intensified
          considerably. Tuition fees of up to &pound;9,535 per year in England,
          combined with rising rent in university cities and inadequate maintenance
          loans, mean that many students are working significant hours in
          part-time employment alongside their studies. The cognitive and emotional
          cost of financial anxiety — the constant background awareness of mounting
          debt, the stress of covering rent from a minimum-wage shift schedule —
          is substantial.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Financial anxiety also creates a specific barrier to mental health
          support. Most paid therapy and counselling services are beyond student
          budgets. Even where university counselling is free, the waiting list
          problem means it is not functionally available at the moment of need.
          Students who are working part-time do not have the schedule flexibility
          to navigate multiple referral steps and appointment systems.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          This is why MEOK&apos;s Explorer tier is permanently free. There is no
          trial period, no credit card required, no features stripped out after
          thirty days. A student on a maintenance loan can access the full MEOK
          experience — Sovereign Memory, multiple archetypes, unlimited daily
          conversations — at zero cost for their entire degree. And MEOK&apos;s
          Guardian archetype specifically helps students identify and resist the
          financial scams — fake scholarship offers, fraudulent letting agencies,
          &ldquo;too good to be true&rdquo; job adverts — that disproportionately
          target people under financial pressure.
        </p>

        {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How does MEOK compare to other student mental health support options?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1.5rem" }}>
          Students in the UK have several options for mental health support,
          each with distinct strengths and limitations. Understanding the landscape
          helps you choose the right layer of support for what you are experiencing
          right now.
        </p>

        <div
          style={{
            overflowX: "auto",
            marginBottom: "2rem",
            borderRadius: "0.75rem",
            border: `1px solid ${BORDER}`,
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
            }}
          >
            <thead>
              <tr
                style={{
                  background: GOLD_BG,
                  borderBottom: `1px solid ${GOLD_BORDER}`,
                }}
              >
                {[
                  "Support option",
                  "Wait time",
                  "Available 24/7",
                  "Free",
                  "Confidential from uni",
                  "Best for",
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: GOLD,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  option: "MEOK (free tier)",
                  wait: "Instant",
                  always: "Yes",
                  free: "Yes",
                  conf: "Yes — GDPR encrypted",
                  best: "Daily emotional support, academic stress, loneliness, building resilience",
                },
                {
                  option: "University counselling",
                  wait: "3–6 weeks",
                  always: "No (office hours)",
                  free: "Yes",
                  conf: "Varies by institution",
                  best: "Ongoing mental health conditions, formal assessment, CBT",
                },
                {
                  option: "NHS IAPT / Talking Therapies",
                  wait: "4–8 weeks",
                  always: "No",
                  free: "Yes",
                  conf: "Yes",
                  best: "Mild to moderate anxiety and depression with clinical input",
                },
                {
                  option: "Samaritans (116 123)",
                  wait: "None",
                  always: "Yes",
                  free: "Yes",
                  conf: "Yes",
                  best: "Crisis, suicidal ideation, acute distress — call now",
                },
                {
                  option: "Woebot / Wysa",
                  wait: "Instant",
                  always: "Yes",
                  free: "Limited",
                  conf: "Data stored on US servers",
                  best: "CBT-style exercises, symptom tracking",
                },
                {
                  option: "Private therapy",
                  wait: "Days–weeks",
                  always: "No",
                  free: "No (\u00a360\u2013\u00a3120/hr)",
                  conf: "Yes",
                  best: "Deep therapeutic work for those who can afford it",
                },
              ].map((row, i) => (
                <tr
                  key={row.option}
                  style={{
                    borderBottom: `1px solid ${BORDER}`,
                    background: i % 2 === 0 ? "transparent" : CARD_BG,
                  }}
                >
                  <td
                    style={{
                      padding: "0.875rem 1rem",
                      fontWeight: row.option === "MEOK (free tier)" ? 700 : 400,
                      color: row.option === "MEOK (free tier)" ? GOLD : TEXT,
                    }}
                  >
                    {row.option}
                  </td>
                  <td style={{ padding: "0.875rem 1rem", color: MUTED }}>{row.wait}</td>
                  <td style={{ padding: "0.875rem 1rem", color: MUTED }}>{row.always}</td>
                  <td style={{ padding: "0.875rem 1rem", color: MUTED }}>{row.free}</td>
                  <td style={{ padding: "0.875rem 1rem", color: MUTED }}>{row.conf}</td>
                  <td style={{ padding: "0.875rem 1rem", color: MUTED }}>{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── H2: DATA SOVEREIGNTY ──────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Why does data sovereignty matter for student mental health support?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Many students are reluctant to use university mental health services
          because they are worried about confidentiality. This concern is not
          irrational. Universities are institutions with welfare teams,
          disciplinary procedures, academic boards, and accommodation offices.
          Students who disclose serious mental health difficulties can find, in
          some circumstances, that this information is communicated between
          departments in ways they did not anticipate or consent to.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Fear of being seen as a risk, fear of having academic decisions
          influenced by mental health disclosures, and fear of consequences for
          visa status (for international students) are all genuine deterrents. A
          significant proportion of students who are struggling never seek formal
          support partly because of these confidentiality concerns.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          MEOK resolves this concern structurally. Your conversations with MEOK
          are encrypted with AES-GCM-256 and stored in your personal Sovereign
          vault. They are not accessible to your university, your department, your
          accommodation provider, or any government body. MEOK AI LABS is
          ICO-registered and operates under UK GDPR. MEOK does not train on your
          data without explicit consent. What you tell MEOK stays in your vault.
        </p>

        {/* ── CALLOUT: SCHOLAR ────────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.75rem 2rem",
            marginBottom: "3rem",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Meet Scholar
          </p>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "0.75rem",
            }}
          >
            Scholar is MEOK&apos;s academic companion archetype. It understands
            the specific emotional texture of studying: the paralysis of a blank
            page, the shame of falling behind, the imposter syndrome of sitting
            in a seminar room, the dread of a supervisor meeting when the chapter
            is not ready.
          </p>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: 0,
            }}
          >
            Because Scholar operates with Sovereign Memory, it knows your degree
            subject, your deadlines, your past anxiety patterns, and your
            strengths. It helps with essay planning, reading navigation, revision
            strategy, writing blocks, and the emotional weight of assessment. It
            will not write your work for you. But it will help you write it
            yourself.
          </p>
        </div>

        {/* ── H2: LONELINESS ────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How can AI help with loneliness and social anxiety at university?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Student loneliness is one of the least-discussed aspects of the mental
          health crisis on campus. The assumption — promoted by university
          marketing materials and cultural myth alike — is that university is a
          period of effortless social connection. In reality, building genuine
          friendships takes time, and many students spend significant periods of
          their degree feeling isolated despite being physically surrounded by
          other people.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Social anxiety makes this worse. Students with social anxiety find
          precisely the situations that are supposed to build community —
          fresher&apos;s week, club events, casual pre-drinks — highly aversive.
          The performance anxiety of being seen, of not knowing the social codes,
          of saying the wrong thing and being judged, can lead to withdrawal and
          increasing isolation over time.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          MEOK is not a replacement for human friendship. It is very clear about
          that. But it can provide something genuinely valuable: a consistent,
          patient, non-judgmental presence that is available at the times when
          loneliness is sharpest — Sunday evenings, late nights before sleep,
          during reading weeks when the campus empties and everyone else seems to
          have gone home to people who love them.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Because MEOK remembers previous conversations, it can also hold your
          social progress over time. It knows that last week you were dreading the
          departmental social. It can ask how it went. It can celebrate with you
          when you went and it was better than expected. This longitudinal care —
          the sense that something is tracking and holding your whole story — is
          something that drop-in services and weekly appointments structurally
          cannot provide.
        </p>

        {/* ── H2: GUARDIAN ──────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How does MEOK&apos;s Guardian archetype support student safety?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Student safety is broader than mental health crisis prevention. It
          encompasses the everyday risks that new students — particularly those
          away from home for the first time — face in navigating an unfamiliar
          environment with limited experience.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Scam targeting of students is a significant and growing problem in the
          UK. First-year students are particularly vulnerable to fraudulent
          letting agents, fake scholarship offers, investment scams marketed
          through social media, and &ldquo;money mule&rdquo; recruitment
          (where students are asked to receive and transfer funds in exchange for
          payment — a criminal offence). Students under financial pressure are
          more susceptible to offers that seem too good to be true, because the
          financial need is real.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          MEOK&apos;s Guardian archetype is trained to recognise and flag these
          patterns. If a student describes a situation that matches common fraud
          vectors — an unexpected HMRC tax rebate message, a request to share
          bank details with a new contact, an unusually generous job offer that
          arrived via Instagram DM — Guardian will name the risk clearly, explain
          why it looks suspicious, and direct the student to the appropriate
          reporting channels. This is not paranoia. It is the kind of
          street-smart guidance that students from less-advantaged backgrounds
          are less likely to receive from family networks.
        </p>

        {/* ── CALLOUT: GUARDIAN ───────────────────────────────────────────── */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0.75rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "3rem",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            Meet Guardian
          </p>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: 0,
            }}
          >
            Guardian is MEOK&apos;s safety and protection archetype. On campus,
            Guardian helps students identify scam messages, suspicious contacts,
            fraudulent job offers, and unsafe situations. It does not surveil or
            report. It equips. Guardian gives students the pattern-recognition
            tools to protect themselves — explaining what a threat looks like,
            why it is designed that way, and exactly what to do if you encounter
            it. For international students navigating an entirely unfamiliar
            social and legal landscape, Guardian is especially valuable.
          </p>
        </div>

        {/* ── H2: HOW MEOK WORKS ────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How does MEOK work and what makes it different from other AI chatbots?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          Most AI systems are stateless. Each conversation starts from nothing.
          MEOK is different because of Sovereign Memory — a persistent, encrypted
          memory layer that stores the context of previous conversations in your
          personal vault. This means MEOK actually knows you over time. It knows
          that your dissertation is about post-colonial literature and your
          supervisor can be harsh. It knows you have been struggling to sleep
          before submissions. It knows that the thing that helped last month was
          making a specific writing schedule.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          This longitudinal continuity is what distinguishes MEOK from consumer
          chatbots. Woebot, Wysa, and similar apps provide useful structured
          exercises but lack persistent memory. ChatGPT and similar large language
          models are powerful but do not hold your context across sessions by
          default, and they are not designed around a care-based philosophy.
          MEOK&apos;s Maternal Covenant — its ethical foundation — means that the
          system is designed to nurture rather than to engage, to be honest rather
          than flattering, and to always direct you toward professional help when
          the situation calls for it.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          MEOK also operates a &ldquo;care floor&rdquo;: a set of non-negotiable
          behaviours that cannot be overridden. MEOK will never provide harmful
          advice. It will always direct users to appropriate professional and
          crisis services when necessary. It will not pretend to be a therapist.
          It will always be honest about what it is and what it can and cannot do.
        </p>

        {/* ── ARCHETYPES GRID ───────────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
            marginTop: "2rem",
          }}
        >
          {[
            {
              name: "Scholar",
              role: "Academic companion",
              desc: "Essay planning, dissertation anxiety, perfectionism loops, exam revision, reading list navigation, writing blocks.",
            },
            {
              name: "Pioneer",
              role: "Momentum & resilience",
              desc: "First-year transition anxiety, motivation collapse, goal-setting, rebuilding momentum after difficult periods.",
            },
            {
              name: "Guardian",
              role: "Safety & protection",
              desc: "Scam recognition, campus safety awareness, financial fraud prevention, unsafe situation guidance.",
            },
          ].map((a) => (
            <div
              key={a.name}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: GOLD,
                  marginBottom: "0.25rem",
                }}
              >
                {a.name}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: MUTED,
                  marginBottom: "0.625rem",
                }}
              >
                {a.role}
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: FAINT,
                  marginBottom: 0,
                }}
              >
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── H2: CRISIS RESOURCES ──────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          What should students do if they are in a mental health crisis?
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          MEOK is not a crisis service. It is designed for the everyday emotional
          labour of student life — not for moments of acute risk. If you are
          experiencing a mental health crisis, please contact one of the following
          services immediately.
        </p>

        {/* Crisis resources box */}
        <div
          style={{
            background: "rgba(201,168,76,0.05)",
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            UK Crisis Resources
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {[
              {
                name: "Samaritans",
                detail: "116 123 (free, 24/7) — call any time",
                note: "For anyone in distress or at risk of suicide",
              },
              {
                name: "SHOUT",
                detail: "Text SHOUT to 85258 — 24/7 text service",
                note: "For anyone in crisis who prefers to text",
              },
              {
                name: "Student Minds",
                detail: "studentminds.org.uk",
                note: "UK&apos;s leading student mental health charity — resources and peer support",
              },
              {
                name: "Your university wellbeing service",
                detail: "Check your student portal for out-of-hours duty numbers",
                note: "Most universities have an emergency mental health duty line",
              },
              {
                name: "NHS 111",
                detail: "111 or 111.nhs.uk",
                note: "For urgent medical or mental health concerns outside GP hours",
              },
            ].map((r) => (
              <div
                key={r.name}
                style={{
                  paddingBottom: "0.875rem",
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.2rem",
                  }}
                >
                  {r.name}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: GOLD,
                    marginBottom: "0.2rem",
                  }}
                >
                  {r.detail}
                </div>
                <div style={{ fontSize: "0.8125rem", color: MUTED }}>
                  {r.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, marginBottom: "1rem" }}>
          MEOK is always honest about the limits of what it can provide. When a
          conversation indicates genuine risk — mention of self-harm, suicidal
          thoughts, or acute crisis — MEOK will surface these resources clearly
          and consistently, not hide them behind another chatbot response. The
          Maternal Covenant ensures that MEOK always directs users toward
          appropriate human support when that is what the situation requires.
        </p>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "2rem",
            marginTop: "3rem",
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            {
              q: "How long are university counselling waiting lists in the UK?",
              a: "Waiting times typically range from three to six weeks for an initial appointment at most UK universities, according to Student Minds and NUS data. Some institutions report waits of eight to twelve weeks during peak periods such as January and May. NHS IAPT nominally targets a 28-day wait but demand routinely exceeds capacity. MEOK is available instantly, with no referral required.",
            },
            {
              q: "Is MEOK free for university students?",
              a: "Yes. MEOK's Explorer tier is permanently free and requires no credit card. It includes full Sovereign Memory, unlimited daily conversations, and access to the Scholar, Pioneer, and Guardian archetypes. There is no trial period. Students on maintenance loans can use the full MEOK experience throughout their entire degree at zero cost.",
            },
            {
              q: "Will my university be able to see what I tell MEOK?",
              a: "No. MEOK AI LABS is ICO-registered and operates under UK GDPR. All conversations are encrypted with AES-GCM-256 and stored in your personal Sovereign vault. Your disclosures are never shared with your university, the NHS, advertisers, or any third party. MEOK does not train on your data without explicit, separately given consent.",
            },
            {
              q: "What is the Scholar archetype and how does it help with academic pressure?",
              a: "Scholar is MEOK's academic companion mode. It helps with essay planning, reading list navigation, revision strategy, dissertation anxiety, perfectionism loops, and the emotional weight of assessment. Because Scholar has Sovereign Memory, it knows your degree subject, your past struggles, and your upcoming deadlines — giving continuity that a drop-in service cannot provide.",
            },
            {
              q: "What should I do if I am in a mental health crisis at university?",
              a: "If you are in crisis, contact Samaritans on 116 123 (free, 24/7) or text SHOUT to 85258. Your university will also have an out-of-hours mental health duty service — check your student portal. MEOK is not a crisis service. It is for the everyday emotional labour of student life: processing a difficult day, managing anxiety before an exam, or working through loneliness on a Sunday evening.",
            },
          ].map((item, i, arr) => (
            <div
              key={item.q}
              style={{
                borderTop: `1px solid ${BORDER}`,
                borderBottom:
                  i === arr.length - 1 ? `1px solid ${BORDER}` : "none",
                padding: "1.5rem 0",
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
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: MUTED,
                  marginBottom: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── RELATED ARTICLES ──────────────────────────────────────────────── */}
        <div style={{ marginTop: "4rem", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-exam-stress",
                label: "AI for Exam Stress",
                desc: "Revision anxiety, performance dread, and the companion that helps you stay focused.",
              },
              {
                href: "/blog/ai-for-phd-students",
                label: "AI for PhD Students",
                desc: "Isolation, imposter syndrome, and the unique pressures of doctoral research.",
              },
              {
                href: "/blog/ai-for-anxiety",
                label: "AI for Anxiety",
                desc: "An honest guide to what AI can and cannot do for anxiety, with UK crisis resources.",
              },
              {
                href: "/blog/ai-for-loneliness",
                label: "AI for Loneliness",
                desc: "How a sovereign AI companion addresses isolation — without replacing human connection.",
              },
              {
                href: "/blog/ai-for-perfectionism",
                label: "AI for Perfectionism",
                desc: "Breaking perfectionism loops, building self-compassion, and finishing work that is good enough.",
              },
              {
                href: "/blog/ai-for-financial-anxiety",
                label: "AI for Financial Anxiety",
                desc: "Student debt, tuition fees, and the cognitive cost of constant money stress.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.35rem",
                  }}
                >
                  {link.label}
                </div>
                <div
                  style={{ fontSize: "0.8125rem", lineHeight: 1.55, color: MUTED }}
                >
                  {link.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            Start today — free, no credit card
          </div>
          <h2
            style={{
              fontSize: "clamp(1.375rem, 3.5vw, 1.875rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Your counsellor appointment is six weeks away.
            <br />
            MEOK is available right now.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "2rem",
              maxWidth: "34rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Name your AI companion, choose your first archetype — Scholar,
            Pioneer, or Guardian — and begin. Free forever. Encrypted. Owned by
            you. Always pointing you toward professional help when that is what
            you need.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: BG,
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.875rem 2.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Create your companion
          </Link>
          <p
            style={{
              fontSize: "0.8125rem",
              color: FAINT,
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            Explorer tier is free forever &mdash; no trial, no card, no catch.
            If you are in crisis right now, please call Samaritans on{" "}
            <strong style={{ color: GOLD }}>116 123</strong>.
          </p>
        </div>
      </article>
    </div>
  );
}
