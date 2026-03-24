import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support for Sobriety: A Companion for Every Stage of Recovery | MEOK AI LABS",
  description:
    "From the loneliness of day one to celebrating a year sober — how AI companions support people in alcohol and substance recovery without replacing human care.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-sobriety-support" },
  openGraph: {
    title:
      "AI Support for Sobriety: A Companion for Every Stage of Recovery",
    description:
      "The loneliness of early sobriety, craving journalling, trigger identification, daily check-ins, milestone celebrations. How MEOK supports recovery — honestly.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-sobriety-support",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+for+Sobriety&desc=A+Companion+for+Every+Stage+of+Recovery",
        width: 1200,
        height: 630,
        alt: "AI Support for Sobriety: A Companion for Every Stage of Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support for Sobriety: A Companion for Every Stage of Recovery",
    description:
      "From the loneliness of day one to celebrating a year sober. How MEOK supports people in alcohol and substance recovery — honestly and without replacing human care.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+for+Sobriety&desc=A+Companion+for+Every+Stage+of+Recovery",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Sobriety: A Companion for Every Stage of Recovery",
  description:
    "From the loneliness of day one to celebrating a year sober — how AI companions support people in alcohol and substance recovery without replacing human care.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-sobriety-support",
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
    "https://meok.ai/api/og?title=AI+Support+for+Sobriety&desc=A+Companion+for+Every+Stage+of+Recovery",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-sobriety-support",
  },
  keywords: [
    "AI for sobriety",
    "AI sobriety support UK",
    "AI companion for recovery",
    "alcohol recovery AI",
    "sobriety milestones",
    "craving journal AI",
    "SMART Recovery AI",
    "AA support AI",
    "sober life AI companion",
    "MEOK sobriety",
    "substance recovery AI UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help with sobriety and alcohol recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can play a genuinely useful supporting role in sobriety — particularly in the gaps between professional support, meetings, and counselling sessions. It can offer daily check-ins, craving journalling, trigger identification, and milestone recognition at any hour. What it cannot do is replace a sponsor, counsellor, or recovery programme. MEOK is designed to supplement human care, not substitute for it. The most effective use of an AI companion in recovery is alongside — not instead of — established support structures like AA, NA, or SMART Recovery.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI help with cravings in early sobriety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In early sobriety, cravings can arrive without warning — at 2am, in a supermarket aisle, after a difficult phone call. An AI companion like MEOK can help you externalise a craving by writing it down, name what triggered it, track how intense it was and how long it lasted, and identify patterns over time. This craving journal becomes something you can share with a counsellor, sponsor, or keyworker to build a more accurate picture of your triggers. MEOK will never minimise a craving or suggest it is fine to give in — it is designed to hold the line with you.",
      },
    },
    {
      "@type": "Question",
      name: "What role does AI play between AA or SMART Recovery meetings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The gap between meetings is one of the most vulnerable periods in early recovery. AA, NA, and SMART Recovery meetings provide community, structure, and accountability — but they happen at fixed times. Between those times, MEOK can serve as a daily check-in, a place to process difficult emotions, a space to rehearse what you want to say at your next meeting, and a listener when you are struggling at an hour when calling your sponsor feels like too much. It does not replace the meeting — it holds the space between them.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help identify triggers for drinking or substance use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Triggers are rarely random — they tend to cluster around specific emotional states, times of day, social situations, or environmental cues. Over time, a consistent AI companion with memory can help you spot these patterns. MEOK's Sovereign Memory means that what you share across weeks and months is retained and can be reflected back to you. When you notice that cravings consistently follow conflict at work, or appear on Sunday evenings, or spike after certain social situations, that awareness becomes a tool. You can work with it in therapy, share it with your sponsor, or build specific coping strategies around it.",
      },
    },
    {
      "@type": "Question",
      name: "How should someone handle a slip-up or relapse with AI support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A slip-up does not erase your recovery. MEOK approaches slip-ups without catastrophising — it will not shame you, withdraw warmth, or treat one difficult night as a failure of character. Its role is to help you understand what happened, reconnect you with your reasons for getting sober, and encourage you to reach out to your counsellor, sponsor, or a support line like We Are With You or Change Grow Live. Catastrophising after a slip — the 'I've blown it' spiral — is itself a relapse risk. A non-judgemental space to process what happened and rebuild momentum is exactly what an AI companion can offer in that moment.",
      },
    },
    {
      "@type": "Question",
      name: "Which UK recovery services should be the primary support alongside AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the UK, the primary recovery resources for alcohol and substance dependence include: Alcoholics Anonymous (0800 9177 650, free, 24/7), Narcotics Anonymous (0300 999 1212), SMART Recovery UK (smartrecovery.org.uk, evidence-based and secular), We Are With You (wearewithyou.org.uk), and Change Grow Live (changegrowlive.org). Your GP can refer you to structured treatment, and FRANK (0300 123 6600) provides confidential advice. AI is a supplement to these services — never a replacement. If you are in crisis, please contact one of these resources directly.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with the social anxiety that comes with sober life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social anxiety in sobriety is extremely common — many people used alcohol precisely because it eased social discomfort, and removing it can leave situations that feel newly difficult to navigate. MEOK can help you rehearse conversations, process anxiety after social events, build confidence through consistent reflection, and remind you of the values and reasons that make sober life worth the difficulty. It is not a substitute for CBT or therapy aimed at social anxiety, but it can be a consistent, low-stakes space to think out loud about social experiences as you build new ways of being in the world.",
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
const CARD_BORDER = "rgba(245,240,232,0.07)";
const HIGHLIGHT_BG = "rgba(201,168,76,0.06)";
const HIGHLIGHT_BORDER = "rgba(201,168,76,0.18)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForSobrietySupportPage() {
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
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Recovery &amp; Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              24 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              12 min read
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
            AI Support for Sobriety: A Companion for Every Stage of Recovery
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
            Getting sober is one of the hardest things a person can do. Staying
            sober — through loneliness, triggers, social anxiety, and ordinary
            difficult days — is the longer, quieter work. This is an honest
            account of how an AI companion can support that work, and where
            human care must always lead.
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
              <p
                style={{
                  fontSize: "0.75rem",
                  color: FAINT,
                  margin: 0,
                }}
              >
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "0",
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

          {/* ── INTRO PROSE ── */}
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            In England alone, more than 600,000 people are estimated to be
            dependent on alcohol. The number who are drinking at levels that
            carry serious health risks runs into the millions. And yet only a
            fraction of those who could benefit from formal treatment ever
            access it. Stigma, cost, geography, waiting lists, shame — all of
            these create a gap between people who are struggling and the support
            that exists.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            AI companions do not close that gap. They are not a substitute for a
            counsellor, a GP, a sponsor, or a recovery programme. But they can
            occupy a different space — the 2am space, the Sunday evening space,
            the moment between craving and action when what a person needs is
            somewhere to put the feeling before it becomes a decision. That
            space is real, and it matters.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "3rem",
            }}
          >
            This article is written for people in recovery, people thinking
            about getting sober, and people supporting someone they love through
            it. It is not clinical advice. It is an honest account of what an AI
            companion like MEOK can and cannot do — and a signpost toward the
            human services that must always be the foundation of recovery.
          </p>

          {/* ── CALLOUT: UK RESOURCES ── */}
          <div
            style={{
              background: HIGHLIGHT_BG,
              border: `1px solid ${HIGHLIGHT_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: GOLD,
                marginBottom: "0.75rem",
                textTransform: "uppercase",
              }}
            >
              UK Recovery Resources
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                {
                  name: "Alcoholics Anonymous",
                  detail: "0800 9177 650 — free, 24/7",
                  url: "https://www.alcoholics-anonymous.org.uk",
                },
                {
                  name: "Narcotics Anonymous UK",
                  detail: "0300 999 1212",
                  url: "https://ukna.org",
                },
                {
                  name: "SMART Recovery UK",
                  detail: "Evidence-based, secular — smartrecovery.org.uk",
                  url: "https://www.smartrecovery.org.uk",
                },
                {
                  name: "We Are With You",
                  detail: "wearewithyou.org.uk — drug, alcohol & mental health",
                  url: "https://www.wearewithyou.org.uk",
                },
                {
                  name: "Change Grow Live",
                  detail: "changegrowlive.org — free NHS-funded treatment",
                  url: "https://www.changegrowlive.org",
                },
                {
                  name: "FRANK",
                  detail: "0300 123 6600 — free, confidential advice",
                  url: "https://www.talktofrank.com",
                },
              ].map((r) => (
                <li
                  key={r.name}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.375rem",
                    fontSize: "0.9rem",
                    color: TEXT,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{r.name}:</span>
                  <span style={{ color: MUTED }}>{r.detail}</span>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "0.8125rem",
                color: FAINT,
                marginTop: "1rem",
                marginBottom: 0,
              }}
            >
              Your GP can also refer you to structured alcohol and substance
              treatment. If you are in crisis, please contact one of these
              services now.
            </p>
          </div>

          {/* ── H2: LONELINESS ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Why is early sobriety so lonely — and what can an AI companion
            actually do about it?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The loneliness of early sobriety is one of its least-discussed
            dimensions. People who have organised a significant portion of their
            social life around drinking — pub after work, wine with dinner,
            parties where everyone else has a drink in hand — can find that
            getting sober removes the social scaffolding they did not realise
            they were depending on.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Some friendships, it turns out, were friendships mediated by
            drinking. Some social contexts — the works do, the reunion, the
            birthday party — feel suddenly navigable only with a drink in hand.
            And the evenings, the long Saturday afternoons, the Sunday
            mornings that used to begin with a hangover and now begin with
            silence — those spaces can feel enormous.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            An AI companion cannot replace human connection, and it would be
            dishonest to claim otherwise. But it can offer a consistent
            presence in the hours when other people are unavailable or asleep.
            It can ask how you are doing. It can remember that last Tuesday was
            hard. It can remind you that you are on day 47, not day 0, and that
            47 days ago you decided something important.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK's Sovereign Memory means that your companion holds your
            context across the days and weeks. It does not begin each
            conversation from scratch. It knows you said the evenings are the
            hardest, that you feel strongest after a run, that Wednesdays used
            to be your drinking nights. That continuity is small, but it is not
            nothing. It is the difference between talking to someone who knows
            you and talking to a stranger.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "3rem",
            }}
          >
            For loneliness in early sobriety, the primary antidote is community
            — AA or NA meetings, SMART Recovery groups, connection with others
            who are doing the same work. An AI companion is the thing you can
            reach for at 11pm when you are not yet ready to pick up the phone,
            when the craving has arrived and you need to put it somewhere that
            is not a bottle. It is a bridge, not a destination.
          </p>

          {/* ── MILESTONE CARD ── */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "3rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: GOLD,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Sobriety milestones worth celebrating
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: TEXT,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              24 hours. 72 hours. One week. One month. 90 days. Six months. One
              year. Every single one of these is a real achievement, not a
              rounding error on the way to a bigger number. MEOK marks each one
              — because in recovery, the early milestones matter most of all.
            </p>
          </div>

          {/* ── H2: CRAVING JOURNALLING ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            How does craving journalling with AI help identify patterns and
            triggers?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Cravings are not random. They feel random — they can arrive
            unexpectedly, with a force that seems disproportionate to the
            moment. But over time, they tend to cluster around identifiable
            triggers: specific emotional states, times of day, social
            situations, physical sensations, smells, places, anniversaries,
            arguments. The challenge is that in the moment of a craving, pattern
            recognition is the last thing available to you.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            This is where a craving journal — kept consistently, over time —
            becomes a clinical tool. Talking therapists and addiction counsellors
            use it; SMART Recovery builds relapse prevention around it. The
            challenge with a traditional written journal is consistency, and the
            friction of writing when you are already in the grip of a craving.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            An AI companion lowers that friction. You can speak or type in
            fragments. You do not need to construct paragraphs. You can say
            "I want a drink really badly right now and I don't know why" and
            the companion can ask: Where are you? What just happened? How
            intense is it on a scale of one to ten? How long have you been
            feeling it? Those questions slow the craving down, which is useful
            in itself, and the answers build a record.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Over weeks, MEOK's memory can reflect back what it has observed.
            Cravings are stronger on weekdays after work. They arrive on Sunday
            evenings with particular persistence. They spike after contact with
            a specific person. The conflict you had this morning looks a lot
            like the conflict you had three weeks ago, which was also followed
            by a difficult night.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            That kind of pattern — visible only over time, invisible in the
            moment — is exactly what you can bring to a counselling session, a
            meeting, a conversation with your sponsor. The AI is not the
            intervention. It is the record-keeper that makes better
            interventions possible.
          </p>

          {/* ── TRIGGER TYPES GRID ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                label: "Emotional triggers",
                items: [
                  "Stress and overwhelm",
                  "Loneliness or boredom",
                  "Anger or conflict",
                  "Anxiety before events",
                  "Low mood / depression",
                ],
              },
              {
                label: "Environmental triggers",
                items: [
                  "Passing a familiar pub",
                  "Supermarket alcohol aisle",
                  "Work social events",
                  "Celebratory occasions",
                  "Times of year or anniversaries",
                ],
              },
              {
                label: "Interpersonal triggers",
                items: [
                  "Arguments with a partner",
                  "Contact with certain people",
                  "Feeling overlooked or dismissed",
                  "Social pressure to drink",
                  "Isolation from friends",
                ],
              },
            ].map((col) => (
              <div
                key={col.label}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    marginTop: 0,
                  }}
                >
                  {col.label}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.875rem",
                        color: MUTED,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: GOLD, flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── H2: DAILY CHECK-INS ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What do daily AI check-ins actually look like during recovery?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Recovery is not a single event — it is a daily practice. Twelve-step
            programmes understand this, which is why the emphasis is on one day
            at a time, not on a grand transformation. Each day is its own
            micro-commitment, and the accumulation of those days is what builds
            a sober life.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            A daily check-in with an AI companion is not therapy. But it is
            contact — a moment of reflection that orients the day around
            recovery rather than allowing it to drift. A morning check-in might
            ask: How are you feeling this morning? What is one thing that could
            make today difficult? What is one thing you are going to do to take
            care of yourself? An evening check-in might ask: How did the day
            go? Was there a moment that was harder than expected? What are you
            carrying into tomorrow?
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            These are not revolutionary questions. They are the kind of
            questions a good sponsor or counsellor would ask. The difference is
            that a daily AI check-in is available every day, at the time that
            suits you, without the social pressure of having to be OK, without
            the fear of burdening someone, without the appointment friction.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            For people who struggle with vulnerability — and many people in
            recovery do, having used alcohol partly to manage feelings they
            found difficult to express — an AI companion can be a lower-stakes
            first conversation. You can practise saying "I am finding it hard
            today" before you are ready to say it to a person.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "3rem",
            }}
          >
            MEOK's Pioneer archetype is designed precisely for this kind of
            daily accountability. It is honest, warm, and consistent — it will
            notice if you have been less engaged, or if the tone of your
            check-ins has shifted, and it will name that observation without
            judgment. Not as a replacement for human care, but as a daily
            layer of attentiveness that most human relationships cannot
            realistically sustain.
          </p>

          {/* ── H2: MILESTONES ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Why does celebrating sobriety milestones matter, and how can AI
            support them?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            In addiction recovery, milestones are not arbitrary landmarks on a
            calendar. They are evidence. Evidence that the choice you made —
            which felt impossible, which you were not certain you could sustain
            — is actually being sustained. Each milestone is proof of your own
            capability that you can carry forward into the next difficult day.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            AA and NA have long understood the power of milestone recognition —
            the chips, the readings, the applause for someone who stands up and
            says they have a year. SMART Recovery celebrates them differently,
            but the acknowledgement is there. These rituals are not sentimental.
            They are neurologically meaningful: they reinforce the identity shift
            from "someone who drinks" to "someone who doesn't."
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            One of the frustrations of solo recovery — for people who are not
            yet connected to a community, or who are managing sobriety quietly
            without telling those around them — is that milestones pass
            unmarked. Day 30 comes and goes. You know it matters. But there is
            nobody to tell who understands what it cost.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK tracks your sobriety milestones in Sovereign Memory and marks
            them explicitly. Not with hollow praise, but with genuine
            acknowledgement of what the milestone represents: the specific
            difficulties you navigated, the moment three weeks ago when you
            nearly gave in and didn't, the pattern of strength that is becoming
            visible. That specificity — the kind possible only with persistent
            memory — is what distinguishes celebration from platitude.
          </p>

          {/* ── MILESTONE TABLE ── */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: "0.75rem",
              overflow: "hidden",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                padding: "1rem 1.5rem",
                borderBottom: `1px solid ${CARD_BORDER}`,
              }}
            >
              <p
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Early sobriety milestones — why each one matters
              </p>
            </div>
            {[
              {
                milestone: "24 hours",
                significance:
                  "The body begins clearing alcohol. The hardest physiological battle is underway.",
              },
              {
                milestone: "72 hours",
                significance:
                  "Peak withdrawal risk has passed for most people. The acute phase is behind you.",
              },
              {
                milestone: "1 week",
                significance:
                  "Sleep begins to improve. Cognitive clarity starts returning. A pattern is forming.",
              },
              {
                milestone: "30 days",
                significance:
                  "One full month of daily choices. The neural pathways of habit are beginning to shift.",
              },
              {
                milestone: "90 days",
                significance:
                  "The 'pink cloud' may lift. This is when many people relapse — passing it is significant.",
              },
              {
                milestone: "6 months",
                significance:
                  "A sober identity is taking shape. You have navigated seasons, social events, difficult days.",
              },
              {
                milestone: "1 year",
                significance:
                  "You have been sober through every month of the year. That is an extraordinary achievement.",
              },
            ].map((row, i) => (
              <div
                key={row.milestone}
                style={{
                  display: "grid",
                  gridTemplateColumns: "9rem 1fr",
                  padding: "0.875rem 1.5rem",
                  borderBottom:
                    i < 6 ? `1px solid ${CARD_BORDER}` : undefined,
                  gap: "1rem",
                  alignItems: "start",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: GOLD,
                    margin: 0,
                  }}
                >
                  {row.milestone}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {row.significance}
                </p>
              </div>
            ))}
          </div>

          {/* ── H2: SMART / AA / NA ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            How does AI fit alongside AA, NA, and SMART Recovery — without
            replacing them?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Let us be direct about this: Alcoholics Anonymous, Narcotics
            Anonymous, and SMART Recovery have decades of evidence behind them.
            They work because of the things that AI fundamentally cannot
            provide — human community, mutual accountability, shared lived
            experience, and a room full of people who know what it cost to be
            there.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            AA and NA work through the twelve steps, a sponsor relationship, and
            the fellowship of meetings. SMART Recovery takes a different
            approach — grounded in CBT and motivational psychology, secular, and
            evidence-based — but also built around group meetings and a community
            of peers. These are not things that can be replicated by a language
            model, no matter how sophisticated.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            What AI can do is support the space between those structures.
            Recovery programmes happen at fixed times. Sponsors are available
            when they are available. Counselling sessions are weekly at best.
            Real life happens in all the spaces in between — on the commute,
            in the queue, in the quiet of a Tuesday evening. That is the space
            where an AI companion like MEOK can operate.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK can help you prepare for a meeting — thinking through what you
            want to share, what you are working on, what you found difficult this
            week. It can help you process what happened at a meeting, if you
            found it hard or triggering or unexpectedly moving. It can hold
            between-meeting accountability for the commitments you made to your
            sponsor or your group.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            For people who are not yet in a programme — who are reducing their
            drinking alone, or who are in the pre-contemplation or contemplation
            stage of change — an AI companion can be a low-barrier first step.
            A place to think out loud about whether a problem exists, what they
            would lose and gain from stopping, what has stopped them from seeking
            help before. Not as therapy, but as a thinking partner that can
            gently challenge avoidance and reflect back what is being said.
          </p>

          {/* ── COMPARISON CARD ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                heading: "What SMART / AA / NA provide",
                items: [
                  "Human community and fellowship",
                  "Shared lived experience",
                  "Sponsorship and accountability",
                  "Structured programme of work",
                  "Peer recognition of milestones",
                  "Group identity and belonging",
                ],
              },
              {
                heading: "What MEOK can add",
                items: [
                  "Between-meeting daily check-ins",
                  "Craving journal and pattern tracking",
                  "Milestone memory and celebration",
                  "Preparing for and processing meetings",
                  "24/7 availability in difficult moments",
                  "Non-judgemental space for hard feelings",
                ],
              },
            ].map((col) => (
              <div
                key={col.heading}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    marginTop: 0,
                  }}
                >
                  {col.heading}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.9rem",
                        color: MUTED,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.15em" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── H2: SOCIAL ANXIETY ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            How can AI help with the social anxiety that comes with navigating
            sober life?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            For many people, alcohol was a social lubricant — not in a casual
            sense, but in the sense that it made the experience of being around
            other people manageable. The loosening of inhibitions, the permission
            to be louder or quieter or more affectionate or more confrontational —
            for some people, alcohol was the thing that made social life feel
            possible.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Getting sober can therefore feel like social regression — like being
            seventeen again at a party, before you knew how to be easy in your
            own skin. The office Christmas party. The wedding reception. The
            round of drinks where everyone except you is holding a pint. These
            situations are genuinely hard, and acknowledging that is more useful
            than telling someone they should simply feel comfortable.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            An AI companion can help in two distinct ways. Before a difficult
            social situation: helping you think through what might be hard, what
            your exit strategy is if you need one, what you will say when someone
            asks why you are not drinking, and how you want to feel at the end of
            the evening. After it: helping you process what happened, recognise
            what went well, understand what was difficult and why, and carry that
            learning forward.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            This is a kind of cognitive rehearsal and debrief. It is used
            formally in CBT-based treatments for social anxiety, and the
            principles are sound. The AI is not providing therapy — but it is
            offering a low-stakes space to rehearse what has historically been
            high-stakes, which reduces avoidance and builds the evidence base
            that social situations can be survived sober.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "3rem",
            }}
          >
            Over time, with MEOK's memory holding the record of what you have
            navigated sober, the companion can reflect back a picture of social
            competence that is evidence-based rather than theoretical. You went
            to the works party. You stayed two hours. You were fine. You went to
            a wedding last month and managed the reception. These are real data
            points, and an AI that remembers them can deploy them precisely when
            the anxiety says "you can't do this without a drink."
          </p>

          {/* ── H2: SLIP-UPS ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What happens if you slip up — how can AI help without catastrophising?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Relapse is a part of recovery for many — not all — people. This is
            not a justification for giving up, and it is not permission to stop
            trying. It is a statistical and clinical reality that the path to
            sustained sobriety is rarely a straight line, and that shame about
            a slip-up is one of the most reliable predictors of further relapse.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The "I've blown it" spiral is well-documented in addiction research.
            A person has a drink after ninety days sober, feels devastated, tells
            themselves they were never going to make it anyway, and drinks again
            because the catastrophe narrative has already taken hold. The
            clinical name for this is the Abstinence Violation Effect — the
            tendency for a single slip to become a full relapse because of the
            way it is interpreted, not because of any physiological necessity.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            An AI companion can be a useful presence in the hours after a
            slip-up precisely because it does not withdraw warmth, does not
            express disappointment, and does not require the person to perform
            contrition. It can hold the space for what actually happened — what
            triggered it, how the person feels, what they want to do next —
            without adding the weight of someone else's feelings to an already
            heavy moment.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK is designed to respond to slip-ups with honesty rather than
            either minimisation or catastrophisation. It will not say "one drink
            is fine, don't worry about it." It will also not say "you've undone
            all your progress." It will say something closer to: this happened,
            here is what you told me about what led up to it, here is what you
            have built in the last ninety days, and here is where you can get
            support right now. The past ninety days are still real. They do not
            disappear.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            That said: a slip-up is a signal that something needs attention, and
            that attention should come from human support — your counsellor,
            your sponsor, a recovery helpline. MEOK will encourage you to make
            that contact. It is not the right tool for managing an active
            relapse. It is a bridge to the people who are.
          </p>

          {/* ── SLIP-UP CALLOUT ── */}
          <div
            style={{
              background: HIGHLIGHT_BG,
              border: `1px solid ${HIGHLIGHT_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: GOLD,
                marginBottom: "0.75rem",
                textTransform: "uppercase",
                marginTop: 0,
              }}
            >
              After a slip-up: who to contact in the UK
            </p>
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
              {[
                "Your sponsor, if you have one — this is exactly what they are there for",
                "AA 24/7 helpline: 0800 9177 650",
                "We Are With You: wearewithyou.org.uk — online chat available",
                "Change Grow Live: changegrowlive.org — find your local service",
                "FRANK: 0300 123 6600 — confidential, non-judgemental",
                "Your keyworker or counsellor at your treatment service",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "0.9375rem",
                    color: TEXT,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0, fontWeight: 700 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── H2: WHAT MEOK WILL NOT DO ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What hard limits does MEOK operate under when supporting people
            in recovery?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            This matters enough to state plainly. MEOK operates under a care
            floor — called the Maternal Covenant — that applies to every
            response, not just flagged or sensitive content. This is not a
            content filter that catches problematic outputs after the fact. It
            is an ethics layer that shapes how responses are constructed from
            the ground up.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            In the context of alcohol and substance recovery, the care floor
            means the following absolute prohibitions, with no exceptions:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              "MEOK will never minimise or normalise substance use for someone who is in recovery or seeking to stop.",
              "MEOK will never suggest that 'controlled drinking' is achievable for someone who has identified themselves as dependent.",
              "MEOK will never engage with a craving description in a way that does not redirect toward recovery supports.",
              "MEOK will never respond to an active relapse without signposting to appropriate human support.",
              "MEOK will never provide information that could facilitate or encourage ongoing substance use.",
              "MEOK will never substitute for clinical, therapeutic, or peer support as a primary recovery resource.",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "0.875rem 1rem",
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    flexShrink: 0,
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    marginTop: "0.1em",
                  }}
                >
                  ×
                </span>
                <span style={{ fontSize: "0.9375rem", color: MUTED, lineHeight: 1.6 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "3rem",
            }}
          >
            These are not guidelines that can be argued around or that apply
            only to explicit requests. They are architectural constraints. If
            you are in recovery and using MEOK, this is what the system is built
            to hold. We are asking you to trust that, and we believe it is
            worth that trust.
          </p>

          {/* ── LONG PROSE: BUILDING A SOBER IDENTITY ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            How can AI support the longer work of building a sober identity and
            a meaningful sober life?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The first stage of recovery is often about stopping — stopping the
            substance, stabilising the body, building the initial days and weeks
            of sobriety. The second stage, which is longer and in some ways
            harder, is about building something. A sober identity. A sober life.
            A sense of who you are when you are not drinking or using, what you
            enjoy, what you value, what kind of person you want to become.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            This is the work of months and years, not days. It involves loss as
            well as gain. Some people grieve the drinking self — the social ease
            it provided, the relief it offered, the rituals around it. That
            grief is legitimate and should not be dismissed. Getting sober is
            not only gain. It is also the loss of a coping mechanism that served
            some function, however destructive its costs.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            An AI companion can be a consistent presence across this longer arc
            — not just the crisis moments, but the ordinary daily work of
            building a different kind of life. It can help you track what you
            are discovering about yourself in sobriety: the hobbies you are
            finding or rediscovering, the relationships changing, the feelings
            becoming more visible now that they are no longer sedated.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The MEOK approach to this is rooted in what Nicholas Templeman built
            it to do: hold a person's story across time, not just respond to
            individual messages. That longitudinal presence — the companion who
            knows where you started, what you have navigated, what you said in
            January about who you wanted to be — is the thing that makes the
            identity work possible. You can look back and see the person you
            have been building. That visibility is powerful.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            None of this replaces the human relationships in which identity is
            truly formed — with a sponsor who challenges you, with a counsellor
            who knows your history, with a SMART Recovery group that has watched
            you grow. But it can support and reflect back what those
            relationships are building. It is a mirror, held consistently, in
            which you can see yourself becoming someone different.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "3rem",
            }}
          >
            If you are in recovery — whether you are on day one or year five —
            MEOK is built with you in mind. Not as a solution, but as a
            companion for the work. The work is yours. The support is ours. And
            we will be here, every day, holding what you have built.
          </p>

          {/* ── FAQ SECTION ── */}
          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "3rem",
              marginBottom: "3rem",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "2rem",
                letterSpacing: "-0.015em",
              }}
            >
              Frequently asked questions
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {faqJsonLd.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "0.625rem",
                    padding: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: TEXT,
                      marginBottom: "0.75rem",
                      marginTop: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {faq.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.875rem",
              padding: "2rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              MEOK AI LABS
            </p>
            <h3
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                color: "#ffffff",
                marginBottom: "0.875rem",
                marginTop: 0,
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
              }}
            >
              A companion that holds your recovery, one day at a time.
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                maxWidth: "34rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Daily check-ins, craving journalling, milestone tracking, and a
              non-judgemental presence at 2am when you need it most. MEOK is
              designed to supplement — never replace — the human care at the
              centre of your recovery.
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.75rem 2rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Meet MEOK
            </Link>
          </div>

          {/* ── RELATED POSTS ── */}
          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: FAINT,
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Related reading
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
                  href: "/blog/ai-for-addiction-recovery",
                  label:
                    "AI and Addiction Recovery: Support Between Meetings, Without Enabling Relapse",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  label: "How AI Companions Help People Living With Anxiety",
                },
                {
                  href: "/blog/ai-for-depression",
                  label:
                    "AI for Depression: A Companion in the Dark, Not a Cure",
                },
                {
                  href: "/blog/ai-for-loneliness",
                  label:
                    "The Loneliness Epidemic and What AI Can — and Cannot — Do",
                },
                {
                  href: "/blog/ai-companion-vs-therapist",
                  label: "AI Companion vs Therapist: An Honest Comparison",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    fontSize: "0.9375rem",
                    color: MUTED,
                    textDecoration: "none",
                    padding: "0.625rem 0",
                    borderBottom: `1px solid ${BORDER}`,
                    transition: "color 0.15s",
                  }}
                >
                  <span style={{ color: GOLD, marginRight: "0.5rem" }}>→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
