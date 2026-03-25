import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Addiction Support: How a Companion Can Help You Stay on Track | MEOK AI LABS",
  description:
    "Cravings don't keep office hours. Explore how MEOK's AI companion supports alcohol, substance, gambling, and behavioural addiction recovery — as a supplement to, never a replacement for, professional care.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-addiction-support",
  },
  openGraph: {
    title:
      "AI for Addiction Support: How a Companion Can Help You Stay on Track",
    description:
      "The gap in addiction support is the 3am craving, the Sunday spiral, the moment when no counsellor is available. MEOK is there — non-judgemental, curious, and honest about its limits.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-addiction-support",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Addiction+Support&desc=How+a+Companion+Can+Help+You+Stay+on+Track",
        width: 1200,
        height: 630,
        alt: "AI for Addiction Support: How a Companion Can Help You Stay on Track",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Addiction Support: How a Companion Can Help You Stay on Track",
    description:
      "Cravings don't keep office hours. How MEOK's AI companion supports addiction recovery — as a supplement to professional care, never a replacement.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Addiction+Support&desc=How+a+Companion+Can+Help+You+Stay+on+Track",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Addiction Support: How a Companion Can Help You Stay on Track",
  description:
    "Cravings don't keep office hours. How MEOK's AI companion supports alcohol, substance, gambling, and behavioural addiction recovery — as a supplement to, never a replacement for, professional care.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-addiction-support",
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
    "https://meok.ai/api/og?title=AI+for+Addiction+Support&desc=How+a+Companion+Can+Help+You+Stay+on+Track",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-addiction-support",
  },
  keywords: [
    "AI for addiction support",
    "AI addiction recovery companion",
    "AI for alcohol addiction",
    "AI for substance misuse",
    "AI for gambling addiction",
    "AI for behavioural addiction",
    "motivational interviewing AI",
    "harm reduction AI",
    "sobriety companion AI",
    "MEOK addiction support",
    "AI between AA meetings",
    "craving support AI",
    "sovereign memory addiction",
    "addiction recovery UK AI",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help with addiction recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can play a meaningful supporting role in addiction recovery — particularly in the gaps between counselling sessions, AA or NA meetings, and professional appointments. It can offer non-judgemental check-ins, craving journalling, trigger tracking, and motivational reflection at any hour of the day or night. What AI cannot do is replace a sponsor, counsellor, addiction keyworker, or recovery programme. MEOK is designed explicitly as a supplement to human care, not a substitute for it. The most effective use of an AI companion in recovery is alongside — not instead of — established support structures.",
      },
    },
    {
      "@type": "Question",
      name: "What types of addiction can an AI companion support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions like MEOK can provide conversational support across a wide range of addiction types, including alcohol dependency, substance misuse (prescription and illicit drugs), gambling disorder, pornography compulsion, social media and technology addiction, and disordered eating patterns. The common thread across all of these is the experience of urges, triggers, shame, and relapse risk — and the need for a non-judgemental space to process those experiences in real time. MEOK does not specialise in one addiction type; it responds to whatever the person brings.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help during a 3am craving when no one is available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 3am craving is one of the most dangerous moments in early recovery — it arrives at the exact hour when calling a sponsor feels like too much, meetings have ended, and the silence becomes its own pressure. MEOK is available at that moment without judgement or inconvenience. It can help you name the craving, explore what triggered it, remind you of your stated reasons for staying on track, walk through urge surfing or grounding techniques, and hold the space until the intensity passes. It cannot provide emergency medical support — if you are in physical distress, please call 999 or a crisis line — but it can be present through the psychological weight of a craving in a way that a voicemail cannot.",
      },
    },
    {
      "@type": "Question",
      name: "What is motivational interviewing and can AI do it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Motivational interviewing (MI) is a counselling style that helps people explore their own ambivalence about change and reconnect with their intrinsic reasons for wanting to be different. Rather than lecturing or advising, the practitioner uses curious, open questions to help the person articulate their own values and motivations. AI companions can be designed to adopt this conversational style — asking rather than telling, reflecting rather than judging, and holding a person's stated goals back to them when willpower alone is flagging. MEOK is designed with MI-informed principles. It is not equivalent to working with a trained MI counsellor, but it can bring that spirit of curious, non-directive support to everyday conversations.",
      },
    },
    {
      "@type": "Question",
      name: "How does Sovereign Memory help with addiction recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI tools forget everything between sessions. MEOK's Sovereign Memory retains what you share — your sobriety milestones, the triggers you have identified, the patterns that precede difficult moments, the reasons you gave yourself for making a change. Over weeks and months, this creates something valuable: a longitudinal picture of your recovery that you can share with a counsellor or sponsor, or simply revisit yourself. When you feel like you are not making progress, MEOK can remind you of where you were six weeks ago. When you notice a pattern — cravings every Sunday evening, or after certain social situations — it can reflect that back to you. This kind of pattern recognition is difficult to achieve without some form of memory.",
      },
    },
    {
      "@type": "Question",
      name: "How should family members of people with addiction use MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Addiction affects families profoundly — and the experience of loving someone in active addiction or early recovery carries its own burden of anxiety, grief, guilt, and exhaustion. MEOK can support family members and carers by providing a space to process those feelings, explore how to communicate with a loved one who is struggling, understand concepts like enabling and codependency, and find appropriate professional resources such as Al-Anon, Nar-Anon, or SMART Recovery Family and Friends. It is not a substitute for family therapy or carer support programmes, but it can be a genuinely useful thinking partner for people navigating a situation they did not choose.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK NOT do for addiction support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK does not provide medical detox advice. Withdrawal from alcohol, benzodiazepines, and some other substances can be medically dangerous and must be managed by a healthcare professional — do not attempt unsupervised detox and do not rely on any AI tool for guidance on withdrawal management. MEOK does not diagnose addiction or substance use disorders. It does not replace addiction counselling, structured treatment programmes, or recovery communities. It does not prescribe or advise on medication-assisted treatment such as naltrexone or methadone. If you are in immediate danger, call 999. If you are in crisis around addiction, contact Alcoholics Anonymous (0800 9177 650), FRANK (0300 123 6600), or your GP.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GREEN = "#6aaa64";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GREEN_BG = "rgba(106,170,100,0.08)";
const GREEN_BORDER = "rgba(106,170,100,0.25)";
const CARD_BG = "rgba(245,240,232,0.03)";
const CARD_BORDER = "rgba(245,240,232,0.07)";
const HIGHLIGHT_BG = "rgba(106,170,100,0.06)";
const HIGHLIGHT_BORDER = "rgba(106,170,100,0.18)";
const WARN_BG = "rgba(220,80,60,0.07)";
const WARN_BORDER = "rgba(220,80,60,0.22)";
const WARN_TEXT = "#e07060";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForAddictionSupportPage() {
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

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(106,170,100,0.09) 0%, transparent 72%)",
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
              color: FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Back to Blog
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
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GREEN,
                background: GREEN_BG,
                border: `1px solid ${GREEN_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Mental Health &amp; Recovery
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              25 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              14 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.16,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Addiction Support: How a Companion Can Help You Stay on Track
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "42rem",
            }}
          >
            Addiction is one of the most misunderstood experiences in human life
            — not a moral failing, not a lack of willpower, but a complex
            interaction of biology, psychology, history, and circumstance. This
            is an honest account of what an AI companion can and cannot offer
            the people who live with it every day.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${GREEN} 0%, #3a7a35 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: BG,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Nicholas Templeman
              </p>
              <p style={{ fontSize: "0.75rem", color: FAINT, margin: 0 }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROMINENT DISCLAIMER ────────────────────────────────────────────── */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "3rem",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div
            style={{
              background: WARN_BG,
              border: `1px solid ${WARN_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.875rem",
                color: WARN_TEXT,
                marginBottom: "0.5rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Important: Please Read Before Continuing
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              MEOK is not a medical service, addiction counsellor, or treatment
              programme. It does not diagnose addiction, provide detox
              guidance, or replace any form of professional care. Withdrawal
              from alcohol, benzodiazepines, and some other substances can be
              medically dangerous — never attempt unsupervised detox. If you
              are in immediate danger, call{" "}
              <strong style={{ color: WARN_TEXT }}>999</strong>. For addiction
              crisis support, contact{" "}
              <strong style={{ color: WARN_TEXT }}>
                Alcoholics Anonymous: 0800 9177 650
              </strong>{" "}
              or{" "}
              <strong style={{ color: WARN_TEXT }}>
                FRANK: 0300 123 6600
              </strong>
              . MEOK is a supplement to professional care — always.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────────── */}
      <main
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "3.5rem",
          }}
        >
          {/* ── SECTION 1: The Gap ──────────────────────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Why Is There Such a Gap in Addiction Support?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              AA and NA meetings are among the most effective peer support
              structures ever created for addiction. Counsellors, keyworkers,
              and structured treatment programmes can transform lives.
              Medication-assisted treatment has restored futures that seemed
              lost. None of this is in question.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              But meetings happen at specific times. Counsellors have limited
              slots, often weeks apart. The NHS waiting list for structured
              treatment can stretch to months. And cravings — the sharp,
              specific pull towards a substance or behaviour — do not make
              appointments. They arrive at 11pm on a Wednesday. They arrive at
              3am on a Sunday. They arrive in the car park outside the
              supermarket. They arrive during a difficult phone call with a
              family member.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              The gap in addiction support is not a failure of the systems that
              exist — it is a structural reality. Human care requires human
              time, and there is never enough of it. The question is what can
              fill the space between sessions, between meetings, between the
              moments when someone who is trained and caring is available.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              That is where an AI companion can play a role — not by replacing
              what professionals do, but by being present in the spaces where
              professionals cannot be.
            </p>
          </section>

          {/* ── SECTION 2: What MEOK Can Provide ──────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              What Can a Non-Judgemental AI Space Actually Offer Someone in
              Recovery?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Shame is one of the most significant barriers to recovery. People
              in addiction often carry enormous amounts of it — shame about
              things they did while using, shame about having a problem in the
              first place, shame about slipping up after a period of sobriety.
              That shame can make it hard to be honest with a counsellor, to
              share at a meeting, to tell a GP the whole truth.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK offers something different: a space where there is no human
              judgement, no memory of how you looked last week, no
              disappointment in your voice, no worry about burdening someone
              else. It is not a replacement for human connection — in fact,
              it is designed to make human connection easier by giving you
              somewhere to process the difficult things first.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              In practice, what MEOK can provide in addiction support includes:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                {
                  title: "Real-time urge processing",
                  body: "When a craving hits, writing it out — naming it, describing it, asking why it is here right now — reduces its power. Externalising a craving is one of the simplest and most effective tools available, and MEOK is available the moment it is needed.",
                },
                {
                  title: "Trigger identification",
                  body: "What set this off? What were you feeling before it arrived? Were you hungry, lonely, tired, angry? Over time, naming your triggers creates a map of your vulnerability — which is exactly what recovery requires.",
                },
                {
                  title: "Emotional processing",
                  body: "Many addictions serve a regulatory function — they manage emotions that feel unmanageable. Having a space to feel those emotions, to put words around them, is part of learning to live without the substance or behaviour.",
                },
                {
                  title: "Daily check-ins",
                  body: "A brief daily conversation about how recovery is going — what was hard, what held — builds both accountability and self-awareness over time.",
                },
                {
                  title: "Milestone recognition",
                  body: "Seven days sober deserves acknowledgement. So does thirty. So does one year. MEOK can hold your milestones and celebrate them with you, because progress in recovery often goes unwitnessed.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: GREEN,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 3: Sovereign Memory ────────────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              How Does Sovereign Memory Change Recovery Support Over Time?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Most AI tools have no memory. Every conversation starts from
              zero. In the context of addiction recovery, that is a significant
              limitation — recovery is not a single event but a process
              unfolding over months and years, and the value of tracking that
              process cannot be overstated.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK's Sovereign Memory retains what you share across
              conversations — and crucially, your data belongs to you, not to
              MEOK. What you tell MEOK about your sobriety is yours. It is
              never used to train models. It is never shared. It can be
              exported, reviewed, and deleted entirely at your choice.
            </p>

            <div
              style={{
                background: HIGHLIGHT_BG,
                border: `1px solid ${HIGHLIGHT_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: GREEN,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                What Sovereign Memory tracks in recovery
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Sobriety milestones — day one through to years",
                  "Triggers you have identified and named",
                  "Patterns that precede difficult moments or slips",
                  "Your stated reasons for making a change — your 'why'",
                  "Coping strategies that have worked for you",
                  "Goals you have set for yourself in recovery",
                  "Progress that you might not notice without a long view",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              The longitudinal view that Sovereign Memory creates is genuinely
              useful — both for your own self-understanding and as something
              you can share with a counsellor, keyworker, or sponsor. "Here is
              what I have noticed about my triggers over the last three months"
              is a more productive starting point for a session than starting
              from scratch every time.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              And on the difficult days — the days when it feels like nothing
              is working — MEOK can remind you of where you were six weeks ago.
              Progress in recovery is rarely linear, and it is very easy to
              lose sight of how far you have come.
            </p>
          </section>

          {/* ── SECTION 4: The 3am Craving ─────────────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              What Happens at 3am When No One Else Is Available?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              There is a particular quality to the 3am craving. It arrives into
              silence. There is no meeting to go to. Your sponsor is asleep.
              You do not want to wake a friend again. The hours stretch out
              with a specific, pressurised quality that anyone in early
              recovery will recognise.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK is there. Not as a substitute for human connection — but as
              a genuine presence that can hold that moment with you.
            </p>

            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: GREEN,
                  marginBottom: "1rem",
                }}
              >
                What MEOK can do in a 3am craving moment
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  "Help you name and externalise the craving — getting it out of your head and onto the screen",
                  "Ask what triggered it — what happened earlier, what you were feeling before it arrived",
                  "Guide you through urge surfing — the evidence-based technique of observing a craving without acting on it",
                  "Offer grounding exercises to bring you back into the present moment",
                  "Remind you of the reasons you gave yourself for making a change",
                  "Stay with you — without judgement, without impatience — until the intensity passes",
                  "Encourage you to reach out to your sponsor, a helpline, or an emergency contact if the urge is overwhelming",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: GREEN,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: "0.1em",
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        color: MUTED,
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              Cravings are time-limited. Research consistently shows that
              urge intensity peaks and then subsides — typically within 20 to
              30 minutes. The goal is to get through that window without acting
              on the urge. Having something to do, someone to talk to, and a
              structured way of engaging with the experience is often all that
              is needed to get to the other side of it.
            </p>
          </section>

          {/* ── SECTION 5: Motivational Interviewing ───────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Can an AI Use Motivational Interviewing to Help with Recovery?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Motivational interviewing (MI) is one of the most
              evidence-supported approaches in addiction treatment. Developed by
              William Miller and Stephen Rollnick, it is a collaborative,
              person-centred style of guiding conversation that helps people
              explore their ambivalence about change and reconnect with their
              own reasons for wanting to be different.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              The core principle is that people are more likely to change when
              they articulate their own reasons for doing so — rather than
              having those reasons presented to them by someone else. MI
              practitioners ask rather than tell. They reflect rather than
              advise. They follow the person's lead.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK is designed with MI-informed principles woven into its
              conversational approach. When willpower alone is flagging — when
              it has been a hard week and the reasons for recovery feel
              abstract and distant — MEOK can ask the questions that help you
              find your way back to your own values and motivations.
            </p>

            <div
              style={{
                background: HIGHLIGHT_BG,
                border: `1px solid ${HIGHLIGHT_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: TEXT,
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                "What was it about this change that mattered enough to you to
                begin? What would life look like in two years if you stayed on
                this path? What would you want to say to yourself six months
                from now?"
              </p>
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              These are not abstract questions — they are the kind of
              reconnecting conversation that can shift the emotional weather of
              a difficult evening. MEOK holds your stated goals and your
              expressed values, and it can bring them back to you when the
              immediate moment has pushed them out of sight. This is not a
              replacement for working with a trained MI counsellor. But it
              brings that spirit of curious, non-directive support to everyday
              conversations in a way that has real practical value.
            </p>
          </section>

          {/* ── SECTION 6: Harm Reduction ─────────────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Does MEOK Take a Harm Reduction Approach to Addiction?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Harm reduction is a public health framework that prioritises
              reducing the negative consequences of addiction over demanding
              abstinence as the only acceptable outcome. It is the philosophy
              behind needle exchanges, naloxone distribution, safe consumption
              sites, and much of modern addiction medicine.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK does not shame or lecture. It does not have a rigid
              definition of what recovery must look like for you. If you drink
              less than you did last month, that matters. If you used drugs
              less dangerously, that matters. If you gambled and lost, but you
              reached out to talk about it rather than hiding it — that
              matters. Progress is not always linear, and an AI companion that
              treats every imperfect moment as a catastrophe is not a
              companion at all.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              At the same time, MEOK will not minimise the severity of
              addiction, pretend that a dangerous pattern is fine, or avoid the
              truth when someone is describing something that needs professional
              attention. Warmth and honesty are not opposites. MEOK tries to
              hold both.
            </p>

            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: GREEN,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                MEOK's approach: curious, not corrective
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: WARN_TEXT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    MEOK does NOT
                  </p>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    {[
                      "Shame or lecture",
                      "Catastrophise slip-ups",
                      "Demand abstinence",
                      "Minimise serious harm",
                      "Diagnose or prescribe",
                    ].map((i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.875rem",
                          color: MUTED,
                          lineHeight: 1.6,
                        }}
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: GREEN,
                      marginBottom: "0.5rem",
                    }}
                  >
                    MEOK DOES
                  </p>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    {[
                      "Stay curious and warm",
                      "Acknowledge all progress",
                      "Hold your goals with you",
                      "Encourage professional help",
                      "Remain present and honest",
                    ].map((i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.875rem",
                          color: MUTED,
                          lineHeight: 1.6,
                        }}
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: Types of Addiction ─────────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Which Types of Addiction Can MEOK Support?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Addiction manifests differently across substances and behaviours,
              but the underlying experience — the urge, the trigger, the loss
              of control, the shame — has common threads. MEOK can offer
              conversational support across a wide range of addiction types.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              {[
                {
                  type: "Alcohol",
                  note: "The most common addiction in the UK. Often normalised, which can make it harder to recognise and address.",
                },
                {
                  type: "Substances",
                  note: "Prescription medications, cannabis, cocaine, heroin, and other drugs — each with specific risks and recovery pathways.",
                },
                {
                  type: "Gambling",
                  note: "A behavioural addiction that can destroy finances and relationships with the same ferocity as any substance.",
                },
                {
                  type: "Pornography",
                  note: "Compulsive use that affects relationships, self-image, and intimacy. Often carried in silence due to shame.",
                },
                {
                  type: "Social media & technology",
                  note: "Compulsive checking, scrolling, and digital avoidance that disrupts sleep, attention, and real-world connection.",
                },
                {
                  type: "Food & eating",
                  note: "Binge eating, emotional eating, and compulsive relationships with food — distinct from clinical eating disorders but often overlapping.",
                },
              ].map((item) => (
                <div
                  key={item.type}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: GREEN,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.type}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              MEOK does not specialise in a single addiction type — it responds
              to whatever the person brings to the conversation. The common
              thread is not the substance or behaviour itself, but the human
              experience of trying to change a pattern that has become bigger
              than the person feels they can manage alone.
            </p>
          </section>

          {/* ── SECTION 8: What MEOK Does NOT Do ─────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              What Does MEOK Absolutely Not Do for Addiction?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Clarity about limitations is not a weakness — it is the most
              important thing we can offer. The following is a clear account of
              what MEOK does not do, and what requires professional or emergency
              intervention.
            </p>

            <div
              style={{
                background: WARN_BG,
                border: `1px solid ${WARN_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: WARN_TEXT,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Hard limits — these require professional or emergency support
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  {
                    title: "Medical detox guidance",
                    body: "Withdrawal from alcohol, benzodiazepines, and certain other substances can be life-threatening. Seizures, Wernicke's encephalopathy, and severe physical withdrawal require medical management. MEOK does not provide detox advice — ever. Please speak to your GP or call 111 before attempting to stop drinking or using if you are physically dependent.",
                  },
                  {
                    title: "Addiction diagnosis",
                    body: "MEOK cannot and does not diagnose substance use disorders, alcohol use disorder, gambling disorder, or any other clinical condition. Diagnosis requires a qualified professional using validated clinical criteria.",
                  },
                  {
                    title: "Medication-assisted treatment",
                    body: "MEOK does not advise on naltrexone, buprenorphine, methadone, acamprosate, or any other medication used in addiction treatment. These decisions must be made with a prescribing clinician.",
                  },
                  {
                    title: "Replacement for counselling or treatment",
                    body: "MEOK is a conversational companion. It is not a structured treatment programme, not a therapeutic intervention, and not a substitute for working with an addiction counsellor, keyworker, or recovery service.",
                  },
                  {
                    title: "Crisis intervention",
                    body: "If you or someone you know is in immediate danger — from overdose, self-harm, or otherwise — call 999. MEOK is not an emergency service.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: WARN_TEXT,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: MUTED,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 9: Connecting to Professional Support ─────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              How Can MEOK Help You Connect to Professional Addiction Support?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              One of the most useful things MEOK can do is help lower the
              barrier to accessing professional support. For many people,
              reaching out to an addiction service for the first time is
              genuinely difficult — it requires admitting the extent of a
              problem that may have been minimised or hidden for years, and
              facing the fear of being judged.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              MEOK can help in practical, concrete ways:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              {[
                {
                  title: "Researching local services",
                  body: "MEOK can help you search for addiction treatment services, counsellors, AA and NA meeting times, and local support groups in your area. It can explain what different services offer and who they are for.",
                },
                {
                  title: "Preparing for your first AA or NA meeting",
                  body: "Many people find the prospect of attending their first meeting deeply anxiety-provoking. MEOK can walk you through what to expect, help you think through what you want to say (or whether you need to say anything at all), and help you process how you feel afterwards.",
                },
                {
                  title: "Drafting what to say to your GP",
                  body: "Telling a GP about a drinking or drug problem can feel impossible. MEOK can help you think through what is most important to communicate, draft what you want to say in your own words, and prepare for the kinds of questions a GP is likely to ask.",
                },
                {
                  title: "Preparing for a counselling assessment",
                  body: "First appointments with addiction counsellors or keyworkers often involve detailed questions about your substance use history. Thinking through those questions in advance — in a low-stakes, non-judgemental space — can make the real appointment feel less overwhelming.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: GREEN,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: HIGHLIGHT_BG,
                border: `1px solid ${HIGHLIGHT_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: GREEN,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Key UK addiction support services
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {[
                  {
                    name: "Alcoholics Anonymous",
                    detail: "0800 9177 650 — free, 24 hours, 365 days",
                  },
                  {
                    name: "Narcotics Anonymous",
                    detail: "0300 999 1212 — daily meetings across the UK",
                  },
                  {
                    name: "SMART Recovery UK",
                    detail: "smartrecovery.org.uk — evidence-based, secular",
                  },
                  {
                    name: "We Are With You",
                    detail: "wearewithyou.org.uk — alcohol, drugs, mental health",
                  },
                  {
                    name: "Change Grow Live",
                    detail: "changegrowlive.org — substance misuse services",
                  },
                  {
                    name: "GamCare",
                    detail: "0808 8020 133 — gambling support, free",
                  },
                  {
                    name: "FRANK",
                    detail: "0300 123 6600 — confidential drug advice",
                  },
                  {
                    name: "Your GP",
                    detail:
                      "Can refer you to structured treatment and prescribe medication-assisted therapy",
                  },
                ].map((s) => (
                  <div
                    key={s.name}
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: TEXT,
                        flexShrink: 0,
                      }}
                    >
                      {s.name}:
                    </span>
                    <span style={{ fontSize: "0.9rem", color: MUTED }}>
                      {s.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 10: For Family Members ────────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Can MEOK Support Family Members of People with Addiction?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Addiction is never a solo experience. It radiates outward —
              affecting partners, parents, children, siblings, and friends in
              ways that are often invisible to the person in active addiction
              and sometimes even to the people experiencing them.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Living with or loving someone in active addiction — or early
              recovery — carries its own particular weight. There is the
              exhaustion of hypervigilance, checking whether someone is sober.
              There is the grief for the person they were before the addiction
              took hold. There is the guilt about whether you could have done
              something differently. There is the fear of being the only person
              standing between someone you love and a terrible outcome.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              MEOK can support family members and carers by:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              {[
                "Providing a space to process feelings that feel too complicated or shameful to share",
                "Explaining concepts like enabling, codependency, and detachment with love — without blame",
                "Helping you think through how to communicate with a loved one who is resistant to help",
                "Exploring the concept of your own recovery alongside theirs — Al-Anon's insight that family members need support too",
                "Researching resources such as Al-Anon, Nar-Anon, and SMART Family and Friends",
                "Helping you think through when and whether an intervention might be appropriate",
                "Processing the grief of watching recovery have setbacks",
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "0.1em",
                    }}
                  >
                    →
                  </span>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              Family members of people with addiction deserve their own
              support, not just support for the person they are helping.
              Al-Anon (0800 0086 811) and Nar-Anon exist specifically for this
              reason. MEOK is a complement to those resources — a space to
              think, process, and prepare in between.
            </p>
          </section>

          {/* ── SECTION 11: Pattern Recognition ──────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              How Does the Pattern Recognition Advantage Work Over Time?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Recovery is not just about getting through today. It is about
              understanding yourself well enough to predict and prepare for
              tomorrow, and the Sunday evening three months from now, and the
              Christmas dinner with a particular family member that will be
              difficult in the same way it has always been difficult.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Patterns in addiction and recovery are often invisible in the
              moment but obvious in retrospect. The relapse that seemed to come
              out of nowhere usually did not — it followed a sequence of small
              decisions and emotional states that built on each other over days
              or weeks. This is what addiction specialists call the "relapse
              process," and identifying it before it reaches its endpoint is
              the difference between a wobble and a full relapse.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Over months of conversation, MEOK can notice things that are
              difficult to see from inside the experience:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              {[
                {
                  pattern: "Temporal patterns",
                  example:
                    "Cravings consistently appearing on Sunday evenings, or in the days before a significant anniversary, or during the winter months.",
                },
                {
                  pattern: "Emotional patterns",
                  example:
                    "Urges that consistently follow specific emotional states — loneliness, boredom, conflict, or the particular kind of exhaustion that comes after a difficult week.",
                },
                {
                  pattern: "Social patterns",
                  example:
                    "Increased risk after certain social situations — specific relationships, particular environments, or the feeling of being excluded.",
                },
                {
                  pattern: "Progress patterns",
                  example:
                    "What has consistently helped you through difficult moments, so that it can be foregrounded when similar moments arise.",
                },
                {
                  pattern: "Warning signs",
                  example:
                    "The early-stage changes in mood, behaviour, or thinking that tend to precede a difficult period — things you might notice in retrospect but miss in real time.",
                },
              ].map((item) => (
                <div
                  key={item.pattern}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: GREEN,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.pattern}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.example}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              This kind of pattern intelligence is difficult to achieve without
              some form of long-term memory, which is why most AI tools cannot
              offer it. MEOK's Sovereign Memory means that your recovery
              history is retained and available to you — not as surveillance,
              but as a resource. The patterns that you cannot see from inside
              the experience become visible from outside it, and that is
              genuinely useful information.
            </p>
          </section>

          {/* ── SECTION 12: FAQ ───────────────────────────────────────────── */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
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
              {[
                {
                  q: "Can AI really help with addiction recovery?",
                  a: "AI can play a meaningful supporting role in addiction recovery — particularly in the gaps between counselling sessions, AA or NA meetings, and professional appointments. It can offer non-judgemental check-ins, craving journalling, trigger tracking, and motivational reflection at any hour of the day or night. What AI cannot do is replace a sponsor, counsellor, addiction keyworker, or recovery programme. MEOK is designed explicitly as a supplement to human care, not a substitute for it.",
                },
                {
                  q: "What types of addiction can an AI companion support?",
                  a: "AI companions like MEOK can provide conversational support across alcohol dependency, substance misuse, gambling disorder, pornography compulsion, social media and technology addiction, and disordered eating patterns. The common thread is the experience of urges, triggers, shame, and relapse risk — and the need for a non-judgemental space to process those experiences in real time.",
                },
                {
                  q: "How does MEOK help during a 3am craving when no one is available?",
                  a: "MEOK is available at the exact moment when no sponsor or counsellor is reachable. It can help you name and externalise the craving, explore what triggered it, guide you through urge surfing, offer grounding techniques, and remind you of your stated reasons for staying on track. It stays with you — without judgement or impatience — until the intensity passes. It is not an emergency service; if you are in physical distress, please call 999.",
                },
                {
                  q: "What is motivational interviewing and can AI do it?",
                  a: "Motivational interviewing is a counselling style that helps people reconnect with their own intrinsic reasons for wanting to change, using curious, open questions rather than advice or lecturing. MEOK is designed with MI-informed principles. When willpower is flagging, it can ask the questions that help you find your way back to your own values and motivations. It is not equivalent to a trained MI counsellor, but it brings that spirit of curious, non-directive support to everyday conversations.",
                },
                {
                  q: "How does Sovereign Memory help with addiction recovery?",
                  a: "MEOK's Sovereign Memory retains what you share across conversations — sobriety milestones, triggers you have identified, patterns that precede difficult moments, your stated reasons for change. Over months, this creates a longitudinal picture of your recovery that you can share with a counsellor or review yourself. Your data belongs to you, is never used to train models, and can be deleted entirely at any time.",
                },
                {
                  q: "How should family members of people with addiction use MEOK?",
                  a: "MEOK can support family members and carers by providing a space to process complex feelings, exploring enabling and codependency, helping you think through communication with a loved one, and researching resources like Al-Anon and Nar-Anon. It is not a substitute for family therapy or carer support programmes, but it is a useful thinking partner for people navigating a situation they did not choose.",
                },
                {
                  q: "What does MEOK absolutely not do for addiction?",
                  a: "MEOK does not provide medical detox advice, diagnose addiction, advise on medication-assisted treatment, replace addiction counselling or structured treatment, or provide crisis intervention. If you are physically dependent on alcohol or benzodiazepines, withdrawal can be life-threatening — please speak to a GP or call 111 before attempting to stop. If you are in immediate danger, call 999.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: TEXT,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {item.q}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CLOSING REFLECTION ────────────────────────────────────────── */}
          <section>
            <div
              style={{
                background: HIGHLIGHT_BG,
                border: `1px solid ${HIGHLIGHT_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.75rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: GREEN,
                  marginBottom: "1rem",
                }}
              >
                A note on why we built this
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                Addiction carries more shame than almost any other human
                experience. That shame is undeserved — addiction is a condition,
                not a character flaw — but it is real, and it kills people by
                keeping them from asking for help.
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                We built MEOK because we believe that everyone deserves a space
                where they can be honest without fear of judgement — a space
                where the 3am craving is met with presence rather than
                voicemail, and where a slip does not end the conversation. That
                space does not replace human care. It makes human care more
                reachable.
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                If you are struggling with addiction — or loving someone who is
                — you are not alone, and you deserve support. MEOK can be part
                of that. So can the services listed on this page. Please reach
                out to whichever of them feels possible right now.
              </p>
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <section
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderTop: `1px solid ${BORDER}`,
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1.25rem",
                padding: "1.5rem 0",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
                  color: "#ffffff",
                  lineHeight: 1.3,
                  maxWidth: "32rem",
                  margin: 0,
                }}
              >
                Ready for an AI companion that will be there at 3am — without
                judgement?
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: MUTED,
                  lineHeight: 1.7,
                  maxWidth: "30rem",
                  margin: 0,
                }}
              >
                MEOK begins with the Birth Ceremony — a process of getting to
                know each other, establishing what you need, and building the
                foundation of a companion that is genuinely yours.
              </p>
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: GREEN,
                  color: "#0d0c18",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Begin the Birth Ceremony →
              </Link>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: FAINT,
                  margin: 0,
                  maxWidth: "28rem",
                  lineHeight: 1.6,
                }}
              >
                MEOK is a supplement to professional addiction care, never a
                replacement. If you are in crisis, please contact your GP,
                call Alcoholics Anonymous on 0800 9177 650, or call 999.
              </p>
            </div>
          </section>

          {/* ── RELATED ARTICLES ──────────────────────────────────────────── */}
          <section>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.875rem",
                color: FAINT,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-sobriety-support",
                  title: "AI Support for Sobriety",
                  desc: "A companion for every stage of alcohol and substance recovery.",
                },
                {
                  href: "/blog/ai-for-mental-health-2026",
                  title: "AI for Mental Health in 2026",
                  desc: "An honest look at what AI can and cannot do for wellbeing.",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  title: "AI for Anxiety",
                  desc: "How MEOK supports people living with anxiety day to day.",
                },
                {
                  href: "/blog/ai-companion-vs-therapist",
                  title: "AI Companion vs Therapist",
                  desc: "Understanding the difference — and why both matter.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: TEXT,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {link.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
