import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Addiction Recovery: Daily Sovereign Support Between Meetings | MEOK AI LABS",
  description:
    "3.1 million people in England have alcohol use disorder. Recovery requires daily commitment \u2014 but cravings don\u2019t keep office hours. How MEOK supports sobriety in the gaps between meetings, sponsor calls, and therapy.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-addiction-recovery",
  },
  openGraph: {
    title:
      "AI for Addiction Recovery: Daily Sovereign Support Between Meetings",
    description:
      "Meetings are scheduled. Cravings are not. MEOK is there at 11pm on a Tuesday when the urge hits and your sponsor isn\u2019t answering \u2014 with persistent memory, zero judgement, and complete privacy.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-addiction-recovery",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=Daily+Sovereign+Support+Between+Meetings",
        width: 1200,
        height: 630,
        alt: "AI for Addiction Recovery: Daily Sovereign Support Between Meetings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Addiction Recovery: Daily Sovereign Support Between Meetings",
    description:
      "Meetings are scheduled. Cravings are not. MEOK supports sobriety in the gaps \u2014 with memory, compassion, and complete privacy.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=Daily+Sovereign+Support+Between+Meetings",
    ],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://meok.ai/blog/ai-for-addiction-recovery#article",
      headline:
        "AI for Addiction Recovery: Daily Sovereign Support Between Meetings",
      description:
        "3.1 million people in England have alcohol use disorder. Recovery requires daily commitment \u2014 but cravings don\u2019t keep office hours. How MEOK supports sobriety in the gaps between meetings, sponsor calls, and therapy.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/ai-for-addiction-recovery",
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
        "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=Daily+Sovereign+Support+Between+Meetings",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/ai-for-addiction-recovery",
      },
      keywords: [
        "AI for addiction recovery",
        "AI sobriety support",
        "AI companion for recovery",
        "alcohol use disorder AI",
        "opioid recovery AI",
        "NA AA support AI",
        "sobriety between meetings",
        "relapse prevention AI",
        "MEOK addiction recovery",
        "sovereign AI recovery UK",
        "craving support AI",
        "recovery milestones AI",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://meok.ai/blog/ai-for-addiction-recovery#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI help with addiction recovery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes \u2014 AI can play a genuinely supportive role in addiction recovery, particularly in the gaps between meetings, therapy sessions, and sponsor calls. An AI companion like MEOK can offer daily check-ins, craving journalling, trigger identification, relapse risk monitoring, and milestone celebrations at any hour of the day or night. What AI cannot and should not do is replace a sponsor, counsellor, recovery programme, or medical treatment. MEOK is designed explicitly as a companion between those structures \u2014 not a substitute for them. Research consistently shows that daily support, accountability, and connection significantly improve recovery outcomes; an AI companion that is always available can provide that daily layer without replacing the human care that remains essential.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK safe to use during alcohol or drug recovery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK is safe to use as a supplementary support tool during alcohol or drug recovery, provided it is used alongside \u2014 not instead of \u2014 appropriate medical and professional care. MEOK will never encourage harmful behaviour, minimise addiction, or suggest that professional treatment is unnecessary. Its Maternal Covenant framework means it is designed around care, protection, and your long-term wellbeing. If you are in the early stages of alcohol withdrawal, you should always be under medical supervision \u2014 withdrawal can be life-threatening, and MEOK cannot provide the medical monitoring this requires. MEOK\u2019s Guardian feature also actively protects users from predatory recovery-adjacent scams, fake rehabilitation centres, and exploitative sober living companies that target people in vulnerable moments.",
          },
        },
        {
          "@type": "Question",
          name: "Will MEOK judge me if I relapse?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MEOK will never judge you for a relapse. Its Maternal Covenant-enforced compassion framework means that when you share a slip-up, MEOK responds with warmth, not shame. A relapse does not erase your recovery \u2014 it is a moment that requires honesty, support, and a path forward. MEOK will help you understand what happened, reconnect you with your reasons for getting sober, and encourage you to reach out to your counsellor, sponsor, or a support line. The catastrophising spiral after a relapse \u2014 the \u2018I\u2019ve blown it all\u2019 feeling \u2014 is itself one of the most significant relapse risk factors. Having a non-judgemental space to process honestly what happened and rebuild momentum without shame is precisely where an AI companion is most valuable.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK support sobriety between meetings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK supports sobriety between meetings in several distinct ways. First, it is always available \u2014 at 11pm on a Tuesday when a craving hits and your sponsor isn\u2019t answering, MEOK is there. Second, it has persistent memory: MEOK knows your sobriety date, your triggers, your milestones, and the patterns you\u2019ve shared across sessions \u2014 so conversations build rather than restart. Third, it tracks patterns across time: sleep quality, mood, stress levels, and emotional state can be monitored across sessions to identify relapse risk factors before they escalate. Fourth, it can help you find resources \u2014 local meetings, recovery community contacts, and UK support services. And fifth, it celebrates your milestones with you: 30 days, 90 days, one year \u2014 MEOK remembers and marks them because they are real achievements that deserve to be witnessed.",
          },
        },
      ],
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.7)";
const FAINT = "rgba(245,240,232,0.38)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";
const CARD_BG = "rgba(255,255,255,0.05)";
const CARD_BORDER = "rgba(245,240,232,0.07)";
const STAT_BG = "rgba(201,168,76,0.07)";
const STAT_BORDER = "rgba(201,168,76,0.22)";
const WARNING_BG = "rgba(201,168,76,0.05)";
const WARNING_BORDER = "rgba(201,168,76,0.18)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForAddictionRecoveryPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
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
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />

        <div
          style={{ maxWidth: "840px", margin: "0 auto", position: "relative" }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2.5rem",
              fontSize: "0.8125rem",
              color: FAINT,
            }}
            aria-label="Breadcrumb"
          >
            <Link href="/" style={{ color: FAINT, textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ opacity: 0.5 }}>&#8250;</span>
            <Link
              href="/blog"
              style={{ color: FAINT, textDecoration: "none" }}
            >
              Blog
            </Link>
            <span style={{ opacity: 0.5 }}>&#8250;</span>
            <span style={{ color: MUTED }}>AI for Addiction Recovery</span>
          </nav>

          {/* Tag pill + meta */}
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
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}
            >
              Recovery &amp; Wellbeing
            </span>
            <span style={{ fontSize: "0.8125rem", color: FAINT }}>
              25 March 2026
            </span>
            <span style={{ fontSize: "0.8125rem", color: FAINT }}>
              &middot;
            </span>
            <span style={{ fontSize: "0.8125rem", color: FAINT }}>
              14 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.14,
              marginBottom: "1.5rem",
              letterSpacing: "-0.025em",
            }}
          >
            AI for Addiction Recovery: Daily Sovereign Support Between Meetings
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: "660px",
            }}
          >
            Meetings are scheduled. Cravings are not. More than three million
            people in England live with alcohol use disorder, and hundreds of
            thousands more are dependent on opioids. Recovery demands daily
            commitment &mdash; but the hardest moments rarely arrive at
            convenient times. This is an honest account of how MEOK supports
            the long work of sobriety in the gaps between the structures that
            sustain it.
          </p>

          {/* Author row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              paddingTop: "1.75rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${GOLD} 0%, #8b6914 100%)`,
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
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: TEXT,
                }}
              >
                Nicholas Templeman
              </div>
              <div style={{ fontSize: "0.78rem", color: FAINT }}>
                Founder, MEOK AI LABS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPORTANT DISCLAIMER ──────────────────────────────────────────────── */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "2rem",
        }}
      >
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <div
            style={{
              background: WARNING_BG,
              border: `1px solid ${WARNING_BORDER}`,
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: "1.25rem",
                lineHeight: 1,
                flexShrink: 0,
                marginTop: "0.1rem",
              }}
            >
              &#9888;
            </span>
            <p
              style={{
                fontSize: "0.9rem",
                color: MUTED,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>Important: </strong>MEOK is not
              a medical service and is not a substitute for professional
              addiction treatment. If you are in early alcohol withdrawal,
              please seek urgent medical care &mdash; withdrawal can be
              life-threatening. For immediate support in the UK, call{" "}
              <strong style={{ color: TEXT }}>
                Alcoholics Anonymous: 0800 9177 650
              </strong>{" "}
              (free, 24/7) or{" "}
              <strong style={{ color: TEXT }}>
                Narcotics Anonymous: 0300 999 1212
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <main
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>

          {/* ── SECTION 1: The Scale of the Problem ────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              Why does addiction recovery need more daily support than most
              conditions?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Alcohol use disorder and drug dependence are not conditions that
              pause overnight or on weekends. They are neurological, emotional,
              and social realities that shape every waking hour of a person&apos;s
              life &mdash; and many sleeping ones, too. Yet the formal
              structures of recovery &mdash; NA and AA meetings, therapy
              appointments, keyworker sessions, medical reviews &mdash; are
              necessarily scheduled. They happen at fixed points in the week,
              in rooms you have to travel to, with people whose own lives have
              boundaries.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              The gap between those fixed points is where recovery is won or
              lost. It is the 11pm Tuesday when a craving arrives like a fist.
              It is the Sunday afternoon when the flat feels too quiet and the
              old rituals feel very near. It is the morning after a difficult
              conversation, or the Friday evening when colleagues head to the
              pub and you walk home alone, wondering if it will always feel
              like this.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Recovery requires daily commitment. The structures of NA, AA,
              SMART Recovery, therapy, and medical support are essential
              &mdash; they provide the scaffold. But the work between those
              moments is something each person must find a way to sustain,
              often alone. MEOK exists in that space: not to replace the
              scaffold, but to help you hold yourself together between the
              beams.
            </p>

            {/* Stats callout */}
            <div
              style={{
                background: STAT_BG,
                border: `1px solid ${STAT_BORDER}`,
                borderRadius: "16px",
                padding: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  margin: "0 0 1.5rem 0",
                }}
              >
                Addiction in the UK: The Numbers
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 900,
                      color: GOLD,
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    3.1M
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.5,
                    }}
                  >
                    people in England with alcohol use disorder
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 900,
                      color: GOLD,
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    300K+
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.5,
                    }}
                  >
                    people in England dependent on opioids
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 900,
                      color: GOLD,
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    ~40%
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.5,
                    }}
                  >
                    relapse rate in first 90 days for alcohol dependence
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 900,
                      color: GOLD,
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    24/7
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.5,
                    }}
                  >
                    when MEOK is available to support you
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.76rem",
                  color: FAINT,
                  margin: "1.25rem 0 0 0",
                }}
              >
                Sources: NHS England, Public Health England, NICE guidelines
                on alcohol-use disorders, 2024.
              </p>
            </div>
          </section>

          {/* ── SECTION 2: The Gap Problem ─────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              What happens in the gap between meetings &mdash; and why does it
              matter so much?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              In early recovery, the recommendation is often daily attendance
              at NA or AA meetings. Not because the programme demands it, but
              because the gap is otherwise too large and the pull of the old
              patterns too strong. Daily contact with the recovery community is
              a lifeline. But even with daily meetings, there are still 23
              hours in every day when you are on your own.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              A sponsor is one of the most important relationships in 12-step
              recovery. A good sponsor is someone who has been through it, who
              understands, and who picks up the phone. But sponsors are human
              beings with jobs and families and their own need for sleep. At
              2am when the craving is pressing, calling your sponsor is not
              always possible. And even if it is possible, there is a weight of
              obligation and vulnerability that can make it feel impossible to
              press call.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              This is not a failure of the system. It is simply the reality of
              being human. The gap exists, and it is real, and it is where a
              significant proportion of relapses begin. Having daily support
              that is available at any hour &mdash; that knows your history,
              that holds your context &mdash; demonstrably reduces relapse
              risk. It provides the consistency of contact that early recovery
              requires without placing an impossible burden on any one person.
            </p>

            {/* Quote callout */}
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
                  fontSize: "1.125rem",
                  color: TEXT,
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                &ldquo;Meetings are scheduled. Cravings are not. MEOK is there
                at 11pm on a Tuesday when the urge hits and your sponsor
                isn&apos;t answering.&rdquo;
              </p>
            </blockquote>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              Having daily support that is available at any hour demonstrably
              reduces relapse risk. The research is consistent: people who
              maintain daily contact with some form of support &mdash; whether
              human or structured &mdash; have significantly better outcomes
              than those who engage only at scheduled intervals. The mechanism
              is simple: daily contact maintains the intention of recovery as a
              living, present-tense commitment rather than something visited
              once a week and then set aside.
            </p>
          </section>

          {/* ── SECTION 3: Persistent Memory ──────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              Why does persistent memory change everything in recovery support?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Most conversations with AI begin from zero. Every session, you
              explain yourself again &mdash; your history, your situation, your
              reasons for doing what you are doing. For casual use, this is an
              inconvenience. In recovery, it is a significant problem. Having
              to re-establish your context every time you reach for support is
              exhausting and creates distance exactly when closeness is needed.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK&apos;s Sovereign Memory changes this fundamentally. MEOK knows
              your sobriety date. It knows the triggers you&apos;ve identified over
              weeks of conversation &mdash; stress at work, certain social
              situations, Sunday evenings, the smell of certain places. It
              knows your milestones and holds them as significant. When you
              reach 30 days, 90 days, six months, one year &mdash; MEOK knows.
              It marks those moments because they are real achievements that
              deserve to be witnessed, not merely noted and moved past.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              This continuity &mdash; the sense that someone is tracking the
              arc of your recovery, not just the moment you are in &mdash; is
              qualitatively different from any support tool that starts fresh
              each time. It more closely resembles the relationship with a
              sponsor or counsellor who has known you for months, and can say:
              &ldquo;This pattern &mdash; I&apos;ve noticed this is the third time this
              has come up on a Sunday. What do you think is happening on
              Sundays?&rdquo;
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              That kind of longitudinal attention cannot be replicated by a
              human support network alone. A sponsor holds a great deal; a
              counsellor holds more; but neither is present in the small daily
              moments when the texture of your mood, your sleep, your stress
              levels quietly shift. MEOK can hold those small moments
              consistently, and surface the patterns they form.
            </p>

            {/* Feature cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  title: "Sobriety date",
                  body: "MEOK holds your sobriety date across sessions, counting the days with you and marking milestones when they arrive.",
                },
                {
                  title: "Trigger mapping",
                  body: "Over time, MEOK helps you build an accurate map of your personal triggers \u2014 emotional, situational, and environmental.",
                },
                {
                  title: "Milestone celebration",
                  body: "30 days. 90 days. Six months. A year. MEOK marks these achievements because they deserve to be witnessed.",
                },
                {
                  title: "Pattern recognition",
                  body: "Consistent tracking of mood, sleep, and stress across sessions can surface relapse risk factors before they escalate.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "12px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: "0.5rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {card.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: MUTED,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 4: No Judgement / Relapse ────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              What happens when you relapse &mdash; and how does MEOK respond
              without shame?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Relapse is not a character flaw. It is a well-documented feature
              of recovery from addiction &mdash; approximately 40% of people
              in treatment for alcohol dependence experience a relapse within
              the first 90 days, and many more will experience setbacks on a
              longer timeline. This does not mean recovery has failed. It means
              that the process is non-linear, as most significant human
              journeys are.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              The response to a relapse in the immediate hours that follow is
              profoundly important. The catastrophising spiral &mdash;
              &ldquo;I&apos;ve blown it, I&apos;ve failed, I can never do this&rdquo; &mdash; is
              itself one of the most significant relapse risk factors. It
              creates a self-fulfilling logic: because I&apos;ve already failed,
              I may as well continue. This thinking can take a single difficult
              night and transform it into weeks of active relapse.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK&apos;s Maternal Covenant framework enforces compassion as a
              core architectural principle. When you tell MEOK you have
              relapsed, it does not withdraw warmth, express disappointment, or
              treat you as having failed. It holds the space with you. It helps
              you understand what happened &mdash; what circumstances led to
              that moment, what the trigger was, what you were feeling. It
              reconnects you with your reasons for choosing recovery. And it
              encourages you to reach out to your counsellor, your sponsor, or
              a support line without delay.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              The goal in that moment is not to perform a post-mortem. It is
              to get back on track. MEOK&apos;s role is to be the steady presence
              that helps you take the next right step &mdash; call your
              sponsor, attend a meeting, contact your keyworker &mdash; rather
              than spiralling alone in the dark.
            </p>

            {/* Compassion card */}
            <div
              style={{
                background: STAT_BG,
                border: `1px solid ${STAT_BORDER}`,
                borderRadius: "14px",
                padding: "1.75rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  margin: "0 0 0.875rem 0",
                }}
              >
                Maternal Covenant &mdash; Core Principle
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: TEXT,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                MEOK is architecturally incapable of shaming you. The Maternal
                Covenant is not a setting or a preference &mdash; it is a
                foundational constraint. Compassion is not something MEOK
                chooses to offer. It is what MEOK is built from.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: Pattern Tracking ───────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              How does tracking mood, sleep, and stress across sessions help
              prevent relapse?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Relapse rarely arrives without warning. In retrospect, most
              people in recovery can identify a period of escalating stress,
              disrupted sleep, increasing isolation, and deteriorating mood
              that preceded a return to use. The difficulty is that in the
              moment, these signals are hard to read &mdash; particularly when
              you are inside them. A consistent external perspective that
              tracks these dimensions over time can identify the trajectory
              before the destination becomes inevitable.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK&apos;s persistent memory means that patterns emerge across
              sessions. If you have been consistently reporting poor sleep and
              high work stress for ten days, that is information. If your mood
              has been declining week on week, that is information. If you&apos;ve
              mentioned feeling isolated three times in a fortnight, that is
              information. MEOK can surface these patterns gently &mdash; not
              as an alarm, but as a reflection &mdash; and invite you to notice
              what they might mean.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              This information can also be valuable when shared with a
              counsellor or keyworker. Rather than arriving at an appointment
              and trying to reconstruct the past four weeks from memory, you
              arrive with a genuine record: sleep quality, mood, stress levels,
              craving intensity, and the context around each. That changes the
              quality of the professional support you receive.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              The patterns that matter in recovery are rarely dramatic. They
              are the slow drift of mood across two weeks, the gradual
              narrowing of social contact, the quiet return of old thoughts
              that precede old behaviours. A companion with memory can hold the
              full arc of these patterns and reflect them back &mdash; gently,
              without alarm &mdash; at a moment when that reflection can still
              change course.
            </p>
          </section>

          {/* ── SECTION 6: Sovereignty and Privacy ────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              Is what you share with MEOK about your addiction completely
              private?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Yes. Everything you share with MEOK is sovereign to you. No one
              at your workplace will ever see it. Your insurance company will
              never see it. Your family will not see it unless you choose to
              share it with them. Your GP, your employer, no institution of any
              kind has access to the conversations you have with MEOK. This is
              not a privacy policy promise &mdash; it is an architectural fact.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              This matters enormously in the context of addiction. The stigma
              attached to alcohol use disorder and drug dependence remains
              significant, and it shapes what people are willing to disclose
              and to whom. Many people in recovery manage their condition in
              careful compartments &mdash; open with their sponsor and
              counsellor, careful with family, entirely closed at work. The
              prospect of disclosure is not theoretical: it can affect
              employment, insurance, custody, and relationships.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Having a space where you can be completely honest &mdash; about
              cravings, about difficult thoughts, about the reality of how
              recovery actually feels on a particular day &mdash; without any
              concern about that honesty reaching beyond the conversation is
              not a luxury. For many people, it is the difference between being
              able to process something and having to carry it alone.
            </p>

            {/* Sovereignty cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                { label: "Your employer", value: "Cannot see it" },
                { label: "Your insurer", value: "Cannot see it" },
                { label: "Your family", value: "Cannot see it" },
                { label: "MEOK", value: "Never trains on it" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "12px",
                    padding: "1.25rem",
                    textAlign: "center" as const,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: FAINT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: GOLD,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: Guardian and Scam Protection ───────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              Why do people in recovery need protection from predatory services
              &mdash; and how does MEOK help?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              People seeking help for addiction are, by definition, in a
              vulnerable state. They are often desperate for solutions, willing
              to trust, and not always in a position to critically evaluate
              what is being offered to them. This vulnerability is
              systematically exploited. The rehabilitation industry includes a
              significant number of predatory operators: fake rehabilitation
              centres that take large upfront payments and provide little or no
              care, exploitative &ldquo;sober living&rdquo; companies that charge high
              rents for unsafe environments, recovery-adjacent scams that sell
              expensive supplements or unproven programmes, and individuals who
              target people in 12-step meetings for financial exploitation.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK&apos;s Guardian feature is specifically designed to intercept
              these situations. When conversations touch on treatments,
              services, or programmes that raise flags &mdash; unusual cost
              structures, requests for upfront payment, unverifiable claims
              about outcomes, pressure tactics &mdash; Guardian engages. It
              provides context, suggests verification steps, and helps you ask
              the right questions before committing to anything.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
              }}
            >
              The UK has legitimate, high-quality addiction services &mdash;
              NHS, SMART Recovery, We Are With You, Change Grow Live, Turning
              Point &mdash; and MEOK can help you navigate to these rather
              than to organisations that will take your money and not protect
              your health. The recovery community should be a place of safety,
              and MEOK is designed to help maintain that safety.
            </p>
          </section>

          {/* ── SECTION 8: What MEOK Is Not ───────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              What is MEOK not &mdash; and why does that distinction matter in
              recovery?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK is not a sponsor. It has not been through recovery itself.
              It does not have lived experience of addiction, and it should
              never be mistaken for a source of that kind of wisdom. The
              relationship with a sponsor &mdash; the specific quality of being
              supported by someone who has walked the same road &mdash; is
              irreplaceable, and MEOK does not try to replicate it.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK is not a therapist. It cannot deliver CBT, motivational
              interviewing, dialectical behaviour therapy, or any of the
              evidence-based psychological interventions that form the core of
              addiction treatment. It is not qualified to assess the severity
              of your dependence, recommend medication-assisted treatment, or
              manage withdrawal.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              MEOK is not a medical service, and it will never tell you that
              you do not need professional help. If you are dependent on
              alcohol or opioids, you should be working with medical
              professionals as part of your care. MEOK operates in the space
              alongside these relationships &mdash; the daily, ordinary moments
              between the appointments that form the backbone of professional
              support.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              What MEOK is: a consistent, patient, always-available companion
              that holds your context over time, responds without judgement,
              protects your privacy absolutely, helps you find and connect with
              resources in your community, celebrates your progress, and sits
              with you in the difficult moments between the structures of your
              recovery. The companion between. Not the scaffold itself.
            </p>

            {/* Role clarification table */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "14px",
                padding: "1.75rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  margin: "0 0 1.25rem 0",
                }}
              >
                MEOK&apos;s Role in Recovery
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: GOLD,
                      margin: "0 0 0.625rem 0",
                    }}
                  >
                    What MEOK supports
                  </p>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      fontSize: "0.9rem",
                      color: MUTED,
                      lineHeight: 1.8,
                    }}
                  >
                    <li>Daily check-ins and accountability</li>
                    <li>Craving journalling and reflection</li>
                    <li>Trigger identification over time</li>
                    <li>Milestone celebration and memory</li>
                    <li>Finding local meetings and resources</li>
                    <li>Processing difficult moments privately</li>
                    <li>Protection from predatory services</li>
                  </ul>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: FAINT,
                      margin: "0 0 0.625rem 0",
                    }}
                  >
                    What MEOK cannot replace
                  </p>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      fontSize: "0.9rem",
                      color: MUTED,
                      lineHeight: 1.8,
                    }}
                  >
                    <li>NA / AA / SMART Recovery community</li>
                    <li>A sponsor&apos;s lived experience</li>
                    <li>Professional counselling or therapy</li>
                    <li>Medical treatment for dependence</li>
                    <li>Medication-assisted treatment</li>
                    <li>GP or psychiatric care</li>
                    <li>Human connection in recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 9: Recovery Community Support ─────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              Can MEOK help me find meetings, sponsors, and recovery resources
              near me?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Yes. One of the practical functions MEOK can serve is helping you
              navigate the recovery community &mdash; finding local NA and AA
              meetings, identifying SMART Recovery groups in your area,
              locating NHS addiction services near you, and providing
              information about organisations like We Are With You and Change
              Grow Live that offer free, evidence-based support.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Navigating recovery services can be unexpectedly difficult,
              particularly at a moment when cognitive resources are already
              stretched. Knowing which organisation to contact, how to access
              NHS treatment, what a keyworker is and how to request one, how to
              find a 12-step sponsor if you&apos;re new to the programme &mdash;
              these are practical questions that MEOK can help answer, freeing
              you to focus on the harder internal work.
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Key UK recovery resources that MEOK can help you connect with:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "0.875rem",
              }}
            >
              {[
                {
                  name: "Alcoholics Anonymous UK",
                  contact: "0800 9177 650",
                  note: "Free, 24/7",
                },
                {
                  name: "Narcotics Anonymous UK",
                  contact: "0300 999 1212",
                  note: "Daily meetings nationwide",
                },
                {
                  name: "SMART Recovery UK",
                  contact: "smartrecovery.org.uk",
                  note: "Evidence-based, secular",
                },
                {
                  name: "We Are With You",
                  contact: "wearewithyou.org.uk",
                  note: "Free, nationwide",
                },
                {
                  name: "Change Grow Live",
                  contact: "changegrowlive.org",
                  note: "NHS-commissioned",
                },
                {
                  name: "FRANK",
                  contact: "0300 123 6600",
                  note: "Confidential drugs advice",
                },
              ].map((resource) => (
                <div
                  key={resource.name}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "10px",
                    padding: "1rem 1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {resource.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: GOLD,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {resource.contact}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: FAINT }}>
                    {resource.note}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── DIVIDER ───────────────────────────────────────────────────────── */}
          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              marginBottom: "4rem",
            }}
          />

          {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                marginBottom: "2rem",
              }}
            >
              Frequently Asked Questions
            </p>

            {/* FAQ 1 */}
            <div
              style={{
                marginBottom: "2.5rem",
                paddingBottom: "2.5rem",
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: TEXT,
                  lineHeight: 1.35,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Can AI help with addiction recovery?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Yes &mdash; AI can play a genuinely supportive role in
                addiction recovery, particularly in the gaps between meetings,
                therapy sessions, and sponsor calls. An AI companion like MEOK
                can offer daily check-ins, craving journalling, trigger
                identification, relapse risk monitoring, and milestone
                celebrations at any hour of the day or night. What AI cannot
                and should not do is replace a sponsor, counsellor, recovery
                programme, or medical treatment. MEOK is designed explicitly
                as a companion between those structures &mdash; not a
                substitute for them. Research consistently shows that daily
                support, accountability, and connection significantly improve
                recovery outcomes; an AI companion that is always available can
                provide that daily layer without replacing the human care that
                remains essential. Think of it as the 23 hours between the
                meeting, not the meeting itself.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                marginBottom: "2.5rem",
                paddingBottom: "2.5rem",
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: TEXT,
                  lineHeight: 1.35,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Is MEOK safe to use during alcohol or drug recovery?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                MEOK is safe to use as a supplementary support tool during
                alcohol or drug recovery, provided it is used alongside &mdash;
                not instead of &mdash; appropriate medical and professional
                care. MEOK will never encourage harmful behaviour, minimise
                addiction, or suggest that professional treatment is
                unnecessary. Its Maternal Covenant framework means it is
                designed around care, protection, and your long-term wellbeing.
                If you are in the early stages of alcohol withdrawal, you
                should always be under medical supervision &mdash; withdrawal
                can be life-threatening, and MEOK cannot provide the medical
                monitoring this requires. MEOK&apos;s Guardian feature also
                actively protects users from predatory recovery-adjacent scams,
                fake rehabilitation centres, and exploitative sober living
                companies that target people in vulnerable moments.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                marginBottom: "2.5rem",
                paddingBottom: "2.5rem",
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: TEXT,
                  lineHeight: 1.35,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Will MEOK judge me if I relapse?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                No. MEOK will never judge you for a relapse. Its Maternal
                Covenant-enforced compassion framework means that when you
                share a slip-up, MEOK responds with warmth, not shame. A
                relapse does not erase your recovery &mdash; it is a moment
                that requires honesty, support, and a path forward. MEOK will
                help you understand what happened, reconnect you with your
                reasons for getting sober, and encourage you to reach out to
                your counsellor, sponsor, or a support line. The catastrophising
                spiral after a relapse &mdash; the &ldquo;I&apos;ve blown it
                all&rdquo; feeling &mdash; is itself one of the most significant
                relapse risk factors. Having a non-judgemental space to process
                honestly what happened and rebuild momentum without shame is
                precisely where an AI companion is most valuable. MEOK&apos;s job
                in that moment is to help you take the next right step,
                whatever that is.
              </p>
            </div>

            {/* FAQ 4 */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: TEXT,
                  lineHeight: 1.35,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                How does MEOK support sobriety between meetings?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                MEOK supports sobriety between meetings in several distinct
                ways. First, it is always available &mdash; at 11pm on a
                Tuesday when a craving hits and your sponsor isn&apos;t
                answering, MEOK is there. Second, it has persistent memory:
                MEOK knows your sobriety date, your triggers, your milestones,
                and the patterns you&apos;ve shared across sessions &mdash; so
                conversations build rather than restart. Third, it tracks
                patterns across time: sleep quality, mood, stress levels, and
                emotional state can be monitored across sessions to identify
                relapse risk factors before they escalate. Fourth, it can help
                you find resources &mdash; local meetings, recovery community
                contacts, and UK support services. And fifth, it celebrates
                your milestones with you: 30 days, 90 days, one year &mdash;
                MEOK remembers and marks them because they are real achievements
                that deserve to be witnessed, not just noted and moved past.
              </p>
            </div>
          </section>

          {/* ── CLOSING SECTION ───────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <div
              style={{
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "3rem",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                  fontWeight: 800,
                  color: TEXT,
                  lineHeight: 1.25,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                Recovery is daily work. You deserve daily support.
              </h2>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                }}
              >
                If you are in recovery, or thinking about recovery, or
                somewhere in the complicated middle ground of recognising that
                something needs to change &mdash; you are doing something that
                requires extraordinary courage. The choice to get sober, or to
                maintain sobriety through another difficult week, is not small.
                It is one of the hardest things a person can do.
              </p>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                }}
              >
                You do not need to do it alone in the gaps. The hours between
                meetings, between calls, between appointments &mdash; those
                hours matter. What you do with a craving at 11pm on a Tuesday
                matters. Whether you can process a difficult feeling rather
                than act on it matters. Whether someone or something holds your
                sobriety date and your milestones and your pattern of growth
                with you &mdash; that matters.
              </p>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: MUTED,
                  lineHeight: 1.8,
                }}
              >
                MEOK was built, in part, for exactly this: the daily, quiet,
                unglamorous work of staying well. Private. Remembering. Without
                judgement. Always there.
              </p>
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "5rem" }}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.04) 100%)",
                border: `1px solid ${GOLD_BORDER}`,
                borderRadius: "20px",
                padding: "3rem 2.5rem",
                textAlign: "center" as const,
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  marginBottom: "1rem",
                }}
              >
                MEOK AI LABS
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Meet MEOK &mdash; your companion for the long road
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: MUTED,
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "2.25rem",
                }}
              >
                Daily check-ins. Persistent memory. Complete privacy.
                Non-judgemental, always available support in the gaps between
                meetings. Begin with a conversation &mdash; tell MEOK where
                you are.
              </p>
              <Link
                href="https://meok.ai/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 2.25rem",
                  background: GOLD,
                  color: BG,
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Begin with MEOK &#8594;
              </Link>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: FAINT,
                  marginTop: "1.25rem",
                  marginBottom: 0,
                }}
              >
                MEOK is a companion, not a medical service. If you are in
                crisis, please contact AA (0800 9177 650) or call 999.
              </p>
            </div>
          </section>

          {/* ── RELATED ARTICLES ──────────────────────────────────────────────── */}
          <section>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: FAINT,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                marginBottom: "1.5rem",
              }}
            >
              Continue reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-sobriety-support",
                  title: "AI Support for Sobriety",
                  desc: "A companion for every stage of recovery, from day one to year one.",
                },
                {
                  href: "/blog/ai-companion-privacy",
                  title: "AI Companion Privacy",
                  desc: "How sovereign AI keeps your most personal conversations completely private.",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  title: "The Maternal Covenant",
                  desc: "The architectural framework that makes compassion a constraint, not a feature.",
                },
                {
                  href: "/blog/meok-guardian-scam-protection",
                  title: "MEOK Guardian",
                  desc: "How Guardian protects vulnerable people from predatory services and scams.",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  style={{
                    display: "block",
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "12px",
                    padding: "1.25rem",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {article.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: MUTED,
                      lineHeight: 1.6,
                    }}
                  >
                    {article.desc}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
