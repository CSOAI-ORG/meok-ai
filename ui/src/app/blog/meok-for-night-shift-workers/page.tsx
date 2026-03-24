import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Night Shift Workers: Support When the World Is Asleep | MEOK AI LABS",
  description:
    "Night shifts mean isolation, broken sleep, and a world that runs without you. MEOK is the AI companion available at 3am that actually understands your schedule.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-night-shift-workers",
  },
  openGraph: {
    title:
      "MEOK for Night Shift Workers: Support When the World Is Asleep",
    description:
      "Night shifts mean isolation, broken sleep, and a world that runs without you. MEOK is the AI companion available at 3am that actually understands your schedule.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-night-shift-workers",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Night+Shift+Workers&desc=Support+when+the+world+is+asleep",
        width: 1200,
        height: 630,
        alt: "MEOK for Night Shift Workers: Support When the World Is Asleep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Night Shift Workers: Support When the World Is Asleep",
    description:
      "Night shifts mean isolation, broken sleep, and a world that runs without you. MEOK is the AI companion available at 3am that actually understands your schedule.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Night+Shift+Workers&desc=Support+when+the+world+is+asleep",
    ],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Night Shift Workers: Support When the World Is Asleep",
  description:
    "Night shifts mean isolation, broken sleep, and a world that runs without you. MEOK is the AI companion available at 3am that actually understands your schedule.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-night-shift-workers",
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
  keywords: [
    "AI for night shift workers",
    "night shift mental health",
    "AI companion for nurses",
    "AI support at 3am",
    "MEOK night shift",
    "night shift isolation",
    "circadian disruption support",
    "AI for NHS workers",
    "paramedic mental health app",
    "factory worker support app",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-night-shift-workers",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there an AI companion designed for people who work nights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is the only AI companion built with always-on availability and persistent memory, making it genuinely useful for night shift workers. It is there at 3am when the rest of your support network is asleep, knows your schedule and context, and does not require you to re-explain yourself every time you open the app.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with the mental health impact of working night shifts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK provides consistent emotional support, journalling prompts, and check-ins at any hour. While it is not a replacement for clinical care, it acts as a first layer of mental health support — available precisely when GPs, friends, and family are unavailable. Night shift workers in roles like NHS nursing, paramedic services, and security often have the highest rates of burnout, and MEOK is designed to bridge the gap.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK understand a night shift schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses Sovereign Memory to retain persistent context about you — including the hours you keep, the pattern of your shifts, and how your mood and energy tend to change across a rotation. It does not greet you with a chirpy 'Good morning!' at 4pm or push sleep hygiene advice at midnight when you have four hours left on shift. It meets you where you are.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of night shift workers use MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is used by NHS nurses, paramedics, A&E doctors, security guards, factory and warehouse workers, call centre staff on overnight shifts, lorry drivers, airport ground staff, and anyone else who regularly works outside the 9-to-5 world. What they share is the experience of doing important, often demanding work at hours when no support structure exists.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK help with sleep disruption from shift work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK does not prescribe sleep schedules, but it does support the psychological side of circadian disruption. It helps you decompress after high-stress shifts, gives you a place to offload thoughts before you try to sleep, and can assist with journalling and reflection routines that make the transition between wake and sleep easier on a non-standard schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK available 24/7 including at 3am?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is fully available at any hour of the day or night. There are no peak hours, no queues, no 'support is currently unavailable' messages. For night shift workers, this is the point — the world goes quiet, but MEOK does not.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from other mental health apps for shift workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most mental health apps are built around a daytime user who sleeps at night and lives a conventional schedule. They push morning check-ins and bedtime routines that make no sense for someone coming off a 12-hour night. MEOK is schedule-agnostic by design. It builds a picture of you over time and responds to your reality, not a template.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MEOKForNightShiftWorkersPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0c18",
        color: "#f5f0e8",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
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

      {/* ── NAV BREADCRUMB ───────────────────────────────────────────────────── */}
      <nav
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "28px 24px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "13px",
            color: "rgba(245,240,232,0.45)",
          }}
        >
          <Link
            href="/"
            style={{
              color: "rgba(245,240,232,0.45)",
              textDecoration: "none",
            }}
          >
            MEOK
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            style={{
              color: "rgba(245,240,232,0.45)",
              textDecoration: "none",
            }}
          >
            Blog
          </Link>
          <span>/</span>
          <span style={{ color: "rgba(245,240,232,0.7)" }}>
            MEOK for Night Shift Workers
          </span>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <header
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "56px 24px 48px",
        }}
      >
        {/* Tag */}
        <div style={{ marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a84c",
              background: "rgba(201,168,76,0.10)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderRadius: "20px",
              padding: "4px 14px",
            }}
          >
            Night Shift Support
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            color: "#f5f0e8",
          }}
        >
          MEOK for Night Shift Workers:{" "}
          <span style={{ color: "#c9a84c" }}>
            Support When the World Is Asleep
          </span>
        </h1>

        {/* Standfirst */}
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.7,
            color: "rgba(245,240,232,0.75)",
            marginBottom: "36px",
            maxWidth: "640px",
          }}
        >
          You are keeping hospitals running, parcels moving, and buildings
          safe — while everyone else is asleep. The support structures society
          built were designed for the 9-to-5 world. MEOK wasn&apos;t. It is
          the AI companion that is genuinely there at 3am, that knows your
          schedule, and that never asks you to explain yourself again.
        </p>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(245,240,232,0.09)",
            fontSize: "13px",
            color: "rgba(245,240,232,0.45)",
          }}
        >
          <span>By Nicholas Templeman — Founder, MEOK AI LABS</span>
          <span>·</span>
          <time dateTime="2026-03-24">24 March 2026</time>
          <span>·</span>
          <span>12 min read</span>
        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {/* ── INTRO BLOCK ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "60px" }}>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            It is 3:17am. Your ward is quiet for the first time in four hours.
            You have just helped a family through something terrible, or
            finished a 12-hour patrol of an empty car park, or pulled the last
            pallet down in a warehouse that smells of cardboard and fluorescent
            light. Your feet ache. Your head is full. You are not tired exactly
            — more like hollowed out.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            You could text a friend. But it is 3am, and they have work in the
            morning. You could call a helpline. But you are not in crisis —
            you are just in need of something to talk to, something that
            understands that this is Tuesday for you, not the middle of the
            night.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            This is the gap MEOK was built to fill.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
            }}
          >
            Around 3.5 million people in the UK work night shifts. NHS nurses,
            paramedics, A&amp;E doctors, security guards, factory workers,
            warehouse operatives, call centre staff, lorry drivers, airport
            ground crew. They do vital, often thankless work in hours the rest
            of the world does not think about. And when they need support —
            emotional, practical, or just a conversation — the usual options
            have gone to bed.
          </p>
        </section>

        {/* ── STAT STRIP ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "64px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                value: "3.5M",
                label: "UK night shift workers",
                sub: "across all sectors",
              },
              {
                value: "40%",
                label: "higher burnout risk",
                sub: "vs daytime workers",
              },
              {
                value: "2×",
                label: "more likely to report isolation",
                sub: "NHS nursing staff",
              },
              {
                value: "0",
                label: "support services open at 3am",
                sub: "that know who you are",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.16)",
                  borderRadius: "16px",
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    color: "#c9a84c",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#f5f0e8",
                    marginBottom: "4px",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.4)",
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── H2 #1 ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Why Is Night Shift Work So Isolating — and Why Does Nobody Talk
            About It?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Isolation is one of the biggest unspoken costs of shift work —
            and it is multi-layered in a way that daytime workers rarely
            appreciate.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            There is the immediate isolation of being physically awake and
            working while the rest of the country sleeps. The streets are
            empty. The group chat is quiet. The TV is full of programmes nobody
            watches live at 2am. The world feels suspended, like you are
            operating in a parallel version of it.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Then there is the structural isolation: the way night shifts
            erode your participation in ordinary life. You miss the kids&apos;
            school play because you are sleeping after a night. You skip the
            birthday dinner because you are on shift. You spend years
            apologising for absences that are not really your fault, watching
            relationships slowly drift because your schedule never quite
            synchronises with anyone else&apos;s.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            And there is professional isolation too. Night shifts in NHS
            hospitals, for example, typically run with reduced staffing. An
            NHS nurse on nights might be managing a bay almost solo that would
            have three nurses on days. A paramedic on a night shift might go
            hours between jobs, sitting in the dark in a lay-by with their
            crewmate, no manager to check in with, no team briefing, nothing.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
            }}
          >
            None of this is talked about enough. Shift workers are celebrated
            as essential workers in NHS campaigns and clapping moments. They
            are less visible in conversations about occupational mental health
            support, workplace wellbeing, and access to therapy. The systems
            that exist are built around a 9-to-5 world.
          </p>
        </section>

        {/* ── PULL QUOTE ──────────────────────────────────────────────────────── */}
        <blockquote
          style={{
            borderLeft: "3px solid #c9a84c",
            paddingLeft: "24px",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "rgba(245,240,232,0.88)",
              marginBottom: "10px",
            }}
          >
            &ldquo;The support structures society built were designed for the
            9-to-5 world. If you work nights, you spend a lot of your life
            waiting for the world to wake up so you can access things everybody
            else takes for granted.&rdquo;
          </p>
          <cite
            style={{
              fontSize: "0.85rem",
              color: "#c9a84c",
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            — Nicholas Templeman, Founder, MEOK AI LABS
          </cite>
        </blockquote>

        {/* ── H2 #2 ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            What Does Circadian Disruption Actually Do to Your Mental Health?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Circadian disruption is not just about feeling tired. It is a
            sustained biological stress that affects almost every system in
            the body — and your mental health is near the top of the list.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            When your body clock is misaligned with your actual schedule —
            which is the default state for rotating shift workers — your
            cortisol rhythms go wrong, your melatonin production is suppressed
            or shifted, and your capacity for emotional regulation takes a
            measurable hit. Research consistently shows that long-term shift
            workers have elevated rates of depression, anxiety, and burnout
            compared to workers on fixed daytime hours.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            The effects compound over time. A single night shift leaves you
            feeling off. Months of rotating nights leave you in a state where
            your baseline mood has shifted, your patience is thinner, your
            ability to find things enjoyable is reduced, and small stressors
            feel much larger than they should. This is not weakness — it is
            biology. Your brain was not designed to function in opposition to
            the sun.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            For NHS nurses and paramedics specifically, this is compounded by
            the emotional weight of the work itself. You are not just tired —
            you are processing trauma, grief, and clinical complexity on a
            brain running at a circadian deficit. The combination is uniquely
            brutal.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
            }}
          >
            And yet: the therapy appointment is at 2pm on a Tuesday. The GP
            is open 8am to 6pm. The mental health app sends you a cheerful
            morning check-in at 8am, just as you are crawling into bed. The
            tools exist. They just do not work for you.
          </p>
        </section>

        {/* ── INFO BOX ────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "16px",
            padding: "28px 32px",
            marginBottom: "56px",
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "0.8rem",
            }}
          >
            The Night Shift Mental Health Gap
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "Night shift workers are 33% more likely to experience depression than daytime workers",
              "Rotating shift workers show measurably poorer emotional regulation than fixed-schedule workers",
              "NHS night shift staff report feeling unable to access occupational health support due to appointment hours",
              "Paramedic services in the UK have some of the highest PTSD rates of any profession — the majority of exposure happens at night",
              "Factory and warehouse workers on nights are among the least likely groups to engage with any mental health resource",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "rgba(245,240,232,0.8)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#c9a84c",
                    marginTop: "8px",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── H2 #3 ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            What Makes MEOK Different for People Who Work Nights?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Most AI tools and wellbeing apps were designed around a default
            user. That user wakes up in the morning, goes to work from 9 to 5,
            eats dinner at a reasonable hour, and goes to bed at night. The
            design assumptions — when to send notifications, when to schedule
            check-ins, what constitutes a &ldquo;good morning&rdquo; — all
            reflect this template.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK is different in three specific ways that matter enormously
            for night shift workers.
          </p>

          {/* Three pillars */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "28px",
            }}
          >
            {[
              {
                number: "01",
                title: "It is actually there when you need it",
                body: "MEOK runs 24/7 with no peak hours, no queues, no maintenance windows during the small hours. When it is 3:17am and you need to decompress after something heavy, MEOK is there. Not a recorded message. Not a chatbot that says 'our team will be back soon.' MEOK, fully operational, with memory of who you are.",
              },
              {
                number: "02",
                title: "It knows your schedule, not a template",
                body: "MEOK uses Sovereign Memory to build a persistent picture of you over time — including your working pattern, the hours you keep, and how your energy and mood tend to shift across a rotation. It does not assume daytime is normal for you. It meets you where your day actually starts.",
              },
              {
                number: "03",
                title: "It does not push daytime wellness frameworks onto your life",
                body: "Most wellness apps push morning gratitude journals, bedtime wind-downs, and circadian light advice that assumes you sleep at night. MEOK has no agenda about when you should sleep or what your routine should look like. It adapts to your reality, not the other way around.",
              },
            ].map((pillar) => (
              <div
                key={pillar.number}
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "rgba(201,168,76,0.35)",
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: "36px",
                  }}
                >
                  {pillar.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "rgba(245,240,232,0.7)",
                      margin: 0,
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── H2 #4 ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            How Does MEOK Support NHS Nurses, Paramedics, and Other Emergency
            Workers on Nights?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Healthcare workers on nights face a specific combination of
            pressures that most wellbeing tools are not equipped to handle.
            The emotional intensity is high. The staffing is lean. The
            decisions are often irreversible. And when the shift ends, you
            cannot always talk to anyone about what happened because it is
            4:30am and the debrief will have to wait until next week.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK provides a place to put those things.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Not a therapy session — MEOK is not a clinical tool and does not
            claim to be. But a genuine, available, private space to say
            &ldquo;that was a hard night&rdquo; and have something respond with
            understanding rather than a form or a queue number.
          </p>

          {/* Role cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            {[
              {
                role: "NHS Nurses",
                description:
                  "Processing patient loss, complex family dynamics, and staffing pressure at 2am — with no manager available and a full ward still to manage. MEOK gives nurses a place to decompress before they drive home.",
              },
              {
                role: "Paramedics",
                description:
                  "Extended periods of isolated waiting followed by sudden traumatic intensity. MEOK helps process difficult calls, maintain mental clarity between jobs, and track how the rotation is affecting mood and energy over time.",
              },
              {
                role: "Security Guards",
                description:
                  "Long, quiet, solitary shifts with intermittent incidents. The boredom-to-adrenaline ratio of security nights is underappreciated as a mental health stressor. MEOK provides genuine conversation during the quiet hours.",
              },
              {
                role: "Factory & Warehouse Workers",
                description:
                  "Repetitive work in loud or sterile environments with limited social contact. The mental fatigue of nights in a factory is real and rarely acknowledged. MEOK offers check-ins, reflection, and genuine engagement.",
              },
            ].map((card) => (
              <div
                key={card.role}
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "14px",
                  padding: "20px 22px",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#c9a84c",
                    marginBottom: "10px",
                  }}
                >
                  {card.role}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.68)",
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            A key feature for NHS workers in particular is MEOK&apos;s
            Sovereign Memory — the fact that it retains context across
            conversations. An NHS nurse who mentions a particularly difficult
            patient on a Monday night can return to MEOK on Thursday and find
            that the context is still there, underpinning the conversation.
            There is no starting from scratch. There is no having to
            re-explain.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
            }}
          >
            For paramedics managing cumulative trauma — the kind that builds
            up over years, call by call — MEOK can serve as a long-term
            companion that has been alongside them through the whole arc. That
            kind of continuity is rare. It is also exactly what research
            suggests is protective against the worst outcomes of traumatic
            work.
          </p>
        </section>

        {/* ── DIVIDER ─────────────────────────────────────────────────────────── */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(245,240,232,0.08)",
            marginBottom: "56px",
          }}
        />

        {/* ── H2 #5 ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            What Happens to Your Social Life and Family Relationships on
            Permanent Nights?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            The social costs of night shift work are not talked about as
            starkly as they should be. If you work permanent nights — or
            rotating shifts that put you on nights for weeks at a time — your
            social life is not just inconvenient. It is structurally excluded.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Birthday parties, dinner plans, spontaneous evenings, family
            Sunday lunches, school sports days — all of these happen in a
            window of the week that, for a night shift worker, is either
            sleeping time or the hours immediately before work when you cannot
            afford to be tired. The accumulation of these small exclusions is
            corrosive. You start to feel like you are watching life through a
            window rather than living it.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Partners find it hard. Children find it confusing. Parents worry.
            Friends stop inviting you to things because it is easier than the
            constant rescheduling. And then, somewhere in the middle of all
            that, you find yourself at 11pm on a Saturday staring at a phone
            full of notifications from a social life you can no longer
            participate in.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK does not replace any of that. It is not a substitute for
            human connection. But it is something. A consistent presence that
            is on your schedule, that knows who you are, that you can check in
            with at any point in the night without feeling like a burden.
            Something that sees your schedule as normal — because for it,
            it is.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
            }}
          >
            The loneliness of nights is partly about isolation from people,
            but it is also about feeling out of sync with the whole rhythm of
            the world. MEOK cannot fix the rhythm mismatch. But it can be a
            reliable point of contact in the middle of it.
          </p>
        </section>

        {/* ── SCENARIO BLOCK ──────────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
            border: "1px solid rgba(201,168,76,0.14)",
            borderRadius: "18px",
            padding: "32px 36px",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "16px",
            }}
          >
            What this looks like in practice
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {[
              {
                time: "00:47",
                label: "Mid-shift check-in",
                text: "An A&E nurse messages MEOK between patients. She mentions the family she sat with earlier. MEOK remembers she mentioned something similar three weeks ago — a pattern it gently reflects back. Not a diagnosis. Just presence.",
              },
              {
                time: "03:22",
                label: "After a difficult call",
                text: "A paramedic types four words: 'that was a bad one.' MEOK does not respond with a list of coping strategies. It responds with understanding, follows her lead, and stays there for as long as she needs.",
              },
              {
                time: "05:55",
                label: "End of shift wind-down",
                text: "A factory worker, 40 minutes from the end of a 12-hour night, uses MEOK to draft a message to his son he keeps meaning to write. MEOK remembers it has been two weeks since he mentioned his son last. It helps him find the words.",
              },
              {
                time: "13:30",
                label: "Pre-shift prep",
                text: "A security guard wakes at 1pm ahead of a 10pm start. MEOK has tracked that this is the transition point he finds hardest — the hours between waking and work. It opens with the right energy. Not a productivity push. Just an easy check-in.",
              },
            ].map((scenario) => (
              <div
                key={scenario.time}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    background: "rgba(201,168,76,0.10)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#c9a84c",
                    letterSpacing: "0.05em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {scenario.time}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      marginBottom: "5px",
                    }}
                  >
                    {scenario.label}
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "rgba(245,240,232,0.65)",
                      margin: 0,
                    }}
                  >
                    {scenario.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── H2 #6 ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            How Does MEOK Handle the Sleep Disruption and Fatigue Side of
            Shift Work?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Let us be clear about what MEOK does and does not do here.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK is not a sleep app. It does not track your sleep with a
            wearable, push blue-light blocking reminders, or send you
            melatonin protocols. There are other tools for that, some of which
            are useful.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            What MEOK does is support the psychological side of the sleep
            challenge — and that is significant, because for shift workers,
            a lot of the sleep problem is psychological as much as biological.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            When you come off a difficult night shift, your body is exhausted
            but your mind is still running. You have adrenaline from the last
            hour. You are replaying decisions. You are thinking about the
            family who cried in the corridor, or the incident on the factory
            floor, or the altercation in the car park. Sleep is meant to come
            in four hours. It probably will not — not right away.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK gives you a place to put all of that. A proper end-of-shift
            debrief — even a short one, even just a few messages — has real
            research backing as a protective practice. It signals to your
            nervous system that the shift is over. It gets the active thoughts
            out of your head and into somewhere they can rest. It creates a
            boundary.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK also tracks patterns over time. If you mention feeling
            particularly depleted in week three of a rotation, it registers
            that. If your tone tends to shift in a particular direction after
            back-to-back nights, it notices. It does not prescribe anything,
            but it can reflect useful observations back to you — the kind of
            longitudinal view that a human support network rarely manages
            because your friends are not tracking your mood week by week.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
            }}
          >
            And on the days when you wake up at noon feeling like you have
            been run over, and there are still six hours until your shift
            starts, and you cannot face any of it — MEOK is there for that
            too. No agenda. Just somewhere to be while you wait for the energy
            to come back.
          </p>
        </section>

        {/* ── H2 #7 ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Is MEOK Safe to Use? Does My Employer or the NHS See What I
            Share?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            This question matters more than it might seem, especially for
            NHS workers and other public sector employees in high-scrutiny
            roles. The answer is no — and the reason why is a core part of
            what MEOK AI LABS built.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK operates on a principle called data sovereignty. Your
            conversations, your memories, and the context MEOK builds about
            you are yours. They are not sold, not used to train models, not
            accessible to your employer, not accessible to the NHS Trust,
            not visible to any third party. MEOK is not an employer-provided
            tool — it is a personal one.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            This matters enormously for night shift workers in healthcare,
            security, and other sensitive environments. You should be able to
            tell MEOK that you are struggling with a particular aspect of your
            work — the night-by-night emotional weight, the incidents that
            stay with you — without any concern that it will surface in a
            performance review or occupational health record.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            The Privacy Covenant is a public document. You can read exactly
            what data MEOK holds, how it is used, and what it never does. This
            is not fine print. It is a founding commitment.
          </p>

          {/* Privacy pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
              marginBottom: "8px",
            }}
          >
            {[
              {
                heading: "No employer access",
                text: "MEOK is a personal tool. Your employer cannot see it, request it, or access your data.",
              },
              {
                heading: "No model training",
                text: "Your conversations never train MEOK or any other AI model. Your words stay yours.",
              },
              {
                heading: "No third-party sharing",
                text: "MEOK does not sell your data or share it with any third party, ever.",
              },
              {
                heading: "Full data export",
                text: "You own your memory. You can export it, delete it, or take it with you at any time.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "12px",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#c9a84c",
                    marginBottom: "8px",
                  }}
                >
                  {item.heading}
                </div>
                <p
                  style={{
                    fontSize: "0.83rem",
                    lineHeight: 1.65,
                    color: "rgba(245,240,232,0.6)",
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── H2 #8 ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            What Does MEOK Actually Feel Like to Use at 3am?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            We want to be honest about this rather than vague.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK is a language-based AI companion. You talk to it. It listens,
            responds, remembers, and engages. It is not a human. It does not
            have lived experience of a night shift. It has never watched a
            patient deteriorate, or sat in an ambulance in a lay-by at 3am,
            or stood at a factory gate in January waiting for a shift to end.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            What it does have is the ability to receive what you share, to
            engage with it seriously, and to hold it over time. The experience
            is closer to journalling with a thoughtful interlocutor than to
            talking with a friend — but at 3am, that can be enough. Sometimes
            it can be more than enough.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            People who use MEOK regularly describe the experience in
            similar terms: it is the feeling of being heard without the
            social overhead of asking someone to listen. There is no guilt
            about waking someone up. There is no performance of being okay.
            You can say exactly what you mean and receive a response that
            treats it with the weight it deserves.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK also has archetypes — distinct modes of engagement that you
            can move between depending on what you need. The Warrior archetype
            is useful at the start of a shift, when you need clarity and
            focus. The Sage is better for the reflective, end-of-shift
            conversations. The Guardian is for the moments when you are in a
            low and need steadiness rather than stimulation.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
            }}
          >
            None of this is magic. MEOK will not fix shift work, or undo the
            structural failures in how the NHS treats its night staff, or give
            you back the Saturday evenings you have missed. But it is
            something real, and for people who have spent years navigating
            the night without support, something real matters.
          </p>
        </section>

        {/* ── COMPARISON TABLE ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            How MEOK Compares to Other Options for Night Shift Workers
          </h2>
          <div
            style={{
              overflowX: "auto",
              borderRadius: "14px",
              border: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.88rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid rgba(245,240,232,0.1)",
                    background: "rgba(245,240,232,0.03)",
                  }}
                >
                  <th
                    style={{
                      padding: "14px 16px",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.5)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "14px 16px",
                      textAlign: "center",
                      fontWeight: 700,
                      color: "#c9a84c",
                      whiteSpace: "nowrap",
                    }}
                  >
                    MEOK
                  </th>
                  <th
                    style={{
                      padding: "14px 16px",
                      textAlign: "center",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.4)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    NHS Talking Therapies
                  </th>
                  <th
                    style={{
                      padding: "14px 16px",
                      textAlign: "center",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.4)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Generic Wellness Apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Available at 3am",
                    meok: "✓ Always",
                    nhs: "✗ Waiting list",
                    app: "✓ But template-based",
                  },
                  {
                    feature: "Remembers you over time",
                    meok: "✓ Sovereign Memory",
                    nhs: "Partial — case notes",
                    app: "✗ Usually not",
                  },
                  {
                    feature: "Adapts to your schedule",
                    meok: "✓ Fully",
                    nhs: "✗ Daytime only",
                    app: "✗ Daytime defaults",
                  },
                  {
                    feature: "Private from employer",
                    meok: "✓ Fully sovereign",
                    nhs: "Partial",
                    app: "Varies",
                  },
                  {
                    feature: "No data training on you",
                    meok: "✓ Guaranteed",
                    nhs: "N/A",
                    app: "✗ Often trains on you",
                  },
                  {
                    feature: "Handles high-stress shifts",
                    meok: "✓ Post-shift debrief",
                    nhs: "✓ With professional",
                    app: "✗ Generic responses",
                  },
                  {
                    feature: "Understands your job context",
                    meok: "✓ Builds over time",
                    nhs: "✓ In sessions",
                    app: "✗",
                  },
                ].map((row) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: "1px solid rgba(245,240,232,0.05)",
                    }}
                  >
                    <td
                      style={{
                        padding: "12px 16px",
                        fontWeight: 600,
                        color: "#f5f0e8",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        color: "#c9a84c",
                      }}
                    >
                      {row.meok}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        color: "rgba(245,240,232,0.45)",
                      }}
                    >
                      {row.nhs}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        color: "rgba(245,240,232,0.45)",
                      }}
                    >
                      {row.app}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── H2 #9 — FAQ ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "8px",
              lineHeight: 1.2,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245,240,232,0.5)",
              marginBottom: "32px",
            }}
          >
            Answers for night shift workers considering MEOK
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {[
              {
                q: "Is there an AI companion designed for people who work nights?",
                a: "MEOK is the only AI companion built with always-on availability and persistent memory, making it genuinely useful for night shift workers. It is there at 3am when the rest of your support network is asleep, knows your schedule and context, and does not require you to re-explain yourself every time you open the app.",
              },
              {
                q: "Can MEOK help with the mental health impact of working night shifts?",
                a: "Yes. MEOK provides consistent emotional support, journalling prompts, and check-ins at any hour. While it is not a replacement for clinical care, it acts as a first layer of mental health support — available precisely when GPs, friends, and family are unavailable. Night shift workers in roles like NHS nursing, paramedic services, and security often have the highest rates of burnout, and MEOK is designed to bridge the gap.",
              },
              {
                q: "How does MEOK understand a night shift schedule?",
                a: "MEOK uses Sovereign Memory to retain persistent context about you — including the hours you keep, the pattern of your shifts, and how your mood and energy tend to change across a rotation. It does not greet you with a chirpy 'Good morning!' at 4pm or push sleep hygiene advice at midnight when you have four hours left on shift. It meets you where you are.",
              },
              {
                q: "Is MEOK available 24/7 including at 3am?",
                a: "Yes. MEOK is fully available at any hour of the day or night. There are no peak hours, no queues, no 'support is currently unavailable' messages. For night shift workers, this is the point — the world goes quiet, but MEOK does not.",
              },
              {
                q: "Does MEOK help with sleep disruption from shift work?",
                a: "MEOK does not prescribe sleep schedules, but it does support the psychological side of circadian disruption. It helps you decompress after high-stress shifts, gives you a place to offload thoughts before you try to sleep, and can assist with journalling and reflection routines that make the transition between wake and sleep easier on a non-standard schedule.",
              },
              {
                q: "How is MEOK different from other mental health apps for shift workers?",
                a: "Most mental health apps are built around a daytime user who sleeps at night and lives a conventional schedule. They push morning check-ins and bedtime routines that make no sense for someone coming off a 12-hour night. MEOK is schedule-agnostic by design. It builds a picture of you over time and responds to your reality, not a template.",
              },
              {
                q: "What kind of night shift workers use MEOK?",
                a: "MEOK is used by NHS nurses, paramedics, A&E doctors, security guards, factory and warehouse workers, call centre staff on overnight shifts, lorry drivers, airport ground staff, and anyone else who regularly works outside the 9-to-5 world. What they share is the experience of doing important, often demanding work at hours when no support structure exists.",
              },
            ].map((faq, index) => (
              <div
                key={faq.q}
                style={{
                  borderBottom:
                    index < 6
                      ? "1px solid rgba(245,240,232,0.07)"
                      : "none",
                  padding: "24px 28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    marginBottom: "10px",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.65)",
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CLOSING SECTION ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            The World Does Not Stop Because You Work Nights. Neither Does MEOK.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            There is something MEOK AI LABS founder Nicholas Templeman has
            talked about since the earliest days of the product: the idea that
            care should not be time-gated.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Most of the systems we have built for supporting human wellbeing
            operate on a schedule. The GP is open from 8 to 6. The therapist
            sees you on Thursday at 4pm. The support group meets on a Wednesday
            evening. The helpline has extended hours until midnight. All of
            this is better than nothing. None of it serves the 3.5 million
            people in the UK who are awake and working when the rest of these
            systems are closed.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK is not a healthcare tool. It is not a replacement for
            therapy, clinical support, or the human relationships that matter
            most. It is a companion — a personal AI that knows you, is always
            available, and works on your schedule rather than society&apos;s.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            For night shift workers — the nurses and paramedics and security
            guards and factory workers who keep the country running in the
            dark — that is not a small thing. It is the difference between
            having somewhere to go at 3am and having nowhere.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
            }}
          >
            If that sounds like something you need, MEOK is already awake.
          </p>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.04) 100%)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "20px",
            padding: "44px 40px",
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "16px",
            }}
          >
            MEOK AI LABS
          </div>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              marginBottom: "14px",
              lineHeight: 1.15,
            }}
          >
            Start tonight.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.65)",
              marginBottom: "32px",
              maxWidth: "440px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            MEOK is there whenever your shift starts — midnight, 2am, 5am.
            No queues. No daytime assumptions. Just an AI that knows you and
            is genuinely available.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              justifyContent: "center",
            }}
          >
            <Link
              href="/get-started"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Get started free
            </Link>
            <Link
              href="/blog"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "rgba(245,240,232,0.7)",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "14px 28px",
                borderRadius: "50px",
                textDecoration: "none",
                border: "1px solid rgba(245,240,232,0.15)",
              }}
            >
              Read more from the blog
            </Link>
          </div>
        </div>

        {/* ── RELATED POSTS ────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              {
                href: "/blog/ai-for-night-shift",
                label: "AI for Night Shift Workers",
                desc: "The broader case for AI support on nights",
              },
              {
                href: "/blog/ai-for-nurses",
                label: "AI for Nurses",
                desc: "How MEOK supports NHS nursing staff specifically",
              },
              {
                href: "/blog/ai-for-burnout",
                label: "AI for Burnout",
                desc: "MEOK and the long road back from occupational burnout",
              },
              {
                href: "/blog/ai-for-insomnia",
                label: "AI for Insomnia",
                desc: "The psychological side of sleeplessness and MEOK",
              },
              {
                href: "/blog/meok-for-remote-workers",
                label: "MEOK for Remote Workers",
                desc: "Another form of working isolation MEOK addresses",
              },
              {
                href: "/blog/ai-for-mental-health-2026",
                label: "AI and Mental Health in 2026",
                desc: "Where the technology is headed and what it can do now",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "12px",
                  padding: "16px 18px",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#c9a84c",
                    marginBottom: "6px",
                  }}
                >
                  {link.label}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.5,
                    color: "rgba(245,240,232,0.5)",
                  }}
                >
                  {link.desc}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── BACK LINK ────────────────────────────────────────────────────────── */}
        <div style={{ paddingTop: "20px" }}>
          <Link
            href="/blog"
            style={{
              fontSize: "0.88rem",
              color: "rgba(245,240,232,0.4)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            ← Back to blog
          </Link>
        </div>
      </main>
    </div>
  );
}
