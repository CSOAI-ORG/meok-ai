import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Eating Disorders: How Sovereign AI Supports Recovery Without Triggering | MEOK AI LABS",
  description:
    "1.25 million people in the UK live with an eating disorder. MEOK\u2019s sovereign AI companion offers sensitive between-session support that never comments on food, weight, or calories \u2014 and always signposts Beat (0808 801 0677) and specialist help.",
  keywords: [
    "AI for eating disorders",
    "AI eating disorder recovery support UK",
    "AI for anorexia nervosa recovery",
    "AI for bulimia nervosa support",
    "AI for binge eating disorder",
    "AI for ARFID support",
    "AI for orthorexia",
    "eating disorder AI companion",
    "eating disorder between-session support",
    "AI that does not comment on food",
    "AI eating disorder safe",
    "sovereign AI mental health",
    "MEOK eating disorder",
    "eating disorder recovery non-linear",
    "eating disorder UK waiting list support",
    "Beat eating disorders helpline 0808 801 0677",
    "AI companion no calorie advice",
    "eating disorder relapse support",
    "Maternal Covenant eating disorder",
    "MEOK Guardian pro-ana protection",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.ai" }],
  openGraph: {
    title:
      "AI for Eating Disorders: How Sovereign AI Supports Recovery Without Triggering",
    description:
      "Eating disorders carry the highest mortality rate of any mental illness. MEOK is designed to sit beside you in recovery \u2014 without ever commenting on food, weight, or body \u2014 available at 2am when no one else is.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
    url: "https://meok.ai/blog/ai-for-eating-disorders",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Eating+Disorders&desc=Sovereign+AI+Support+Without+Triggering+%E2%80%94+MEOK+AI+LABS",
        width: 1200,
        height: 630,
        alt: "AI for Eating Disorders: How Sovereign AI Supports Recovery Without Triggering | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Eating Disorders: How Sovereign AI Supports Recovery Without Triggering",
    description:
      "MEOK never comments on food, weight, or calories. Built for between-session support for the 1.25M people in the UK living with an eating disorder. Beat: 0808 801 0677.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Eating+Disorders&desc=Sovereign+AI+Support+Without+Triggering+%E2%80%94+MEOK+AI+LABS",
    ],
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-eating-disorders",
  },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "AI for Eating Disorders: How Sovereign AI Supports Recovery Without Triggering",
    description:
      "A sensitive, evidence-informed guide to using sovereign AI as between-session support during eating disorder recovery. Covers the UK crisis, why recovery is non-linear, how MEOK\u2019s Maternal Covenant prevents triggering responses, Guardian protection from harmful online content, and clear signposting to Beat and NHS specialist services.",
    datePublished: "2026-03-25T00:00:00Z",
    dateModified: "2026-03-25T00:00:00Z",
    url: "https://meok.ai/blog/ai-for-eating-disorders",
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
      "@id": "https://meok.ai/blog/ai-for-eating-disorders",
    },
    about: [
      { "@type": "Thing", name: "Eating disorder recovery" },
      { "@type": "Thing", name: "Anorexia nervosa" },
      { "@type": "Thing", name: "Bulimia nervosa" },
      { "@type": "Thing", name: "Binge eating disorder" },
      { "@type": "Thing", name: "ARFID" },
      { "@type": "Thing", name: "Orthorexia" },
      { "@type": "Thing", name: "Between-session mental health support" },
      { "@type": "Thing", name: "Sovereign AI ethics" },
    ],
    mentions: [
      {
        "@type": "Organization",
        name: "Beat Eating Disorders",
        url: "https://www.beateatingdisorders.org.uk",
        telephone: "0808 801 0677",
      },
      {
        "@type": "Organization",
        name: "NHS Eating Disorder Services",
        url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/",
      },
      {
        "@type": "Organization",
        name: "Samaritans",
        url: "https://www.samaritans.org",
        telephone: "116 123",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can AI help with eating disorder recovery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI can play a meaningful supporting role in eating disorder recovery, but it is not a replacement for specialist clinical care. A sovereign AI companion like MEOK is designed to provide compassionate, always-available between-session support \u2014 helping you process difficult emotions, track mood patterns, and feel less alone during the long stretches between appointments. MEOK never provides dietary advice, never comments on food or weight, and always signposts registered dietitians and eating disorder specialists such as Beat (0808 801 0677) for anything clinical.",
        },
      },
      {
        "@type": "Question",
        name: "Is MEOK safe to use if I have an eating disorder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MEOK is designed with eating disorder safety as a core principle, not an afterthought. The Maternal Covenant \u2014 MEOK\u2019s ethical governance layer \u2014 enforces care-first responses at all times. MEOK will never comment on your body, weight, food choices, or calorie intake unless you explicitly open that conversation and ask for general emotional support around it. MEOK is not a nutritionist and will not give dietary advice under any circumstances. For clinical dietary guidance, MEOK will always direct you to a registered dietitian or specialist. MEOK\u2019s Guardian layer also actively protects you from harmful pro-ana and pro-mia content online.",
        },
      },
      {
        "@type": "Question",
        name: "Will MEOK comment on my weight or food choices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This is one of MEOK\u2019s most fundamental design commitments. MEOK will never initiate any conversation about your weight, body size, food choices, meal plans, calorie content, or exercise habits. These topics are completely off-limits unless you explicitly raise them, and even then MEOK\u2019s response will focus on your emotional experience rather than the food itself. MEOK will never validate restriction, never comment approvingly on weight loss, and never reinforce any thought pattern associated with disordered eating.",
        },
      },
      {
        "@type": "Question",
        name: "How does MEOK handle eating disorder relapse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MEOK understands that recovery is not a straight line. Relapse, restriction cycles, difficult meals, and setbacks are part of the recovery journey for many people, and MEOK meets these moments with compassion rather than judgment. MEOK tracks mood patterns across sessions so that it can gently notice if things seem harder lately \u2014 not to alarm you, but to acknowledge how you are feeling and, where appropriate, to encourage you to speak with your treatment team. MEOK will always signpost Beat (0808 801 0677) and the NHS if things feel very difficult.",
        },
      },
    ],
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AiForEatingDisordersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          background: "#0d0c18",
          minHeight: "100vh",
          color: "#f5f0e8",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 24px" }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              padding: "24px 0 0",
              fontSize: "13px",
              color: "rgba(245,240,232,0.55)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{ color: "rgba(245,240,232,0.55)", textDecoration: "none" }}
            >
              Home
            </Link>
            <span
              style={{ color: "rgba(245,240,232,0.3)" }}
              aria-hidden="true"
            >
              /
            </span>
            <Link
              href="/blog"
              style={{ color: "rgba(245,240,232,0.55)", textDecoration: "none" }}
            >
              Blog
            </Link>
            <span
              style={{ color: "rgba(245,240,232,0.3)" }}
              aria-hidden="true"
            >
              /
            </span>
            <span style={{ color: "rgba(245,240,232,0.75)" }}>
              AI for Eating Disorders
            </span>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────────────────────── */}
        <header>
          <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                paddingTop: "48px",
                paddingBottom: "40px",
                borderBottom: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#c9a84c",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
              >
                Mental Health &amp; Recovery
              </div>

              <h1
                style={{
                  fontSize: "clamp(28px, 5vw, 44px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#f5f0e8",
                  margin: "0 0 20px",
                  letterSpacing: "-0.02em",
                }}
              >
                AI for Eating Disorders: How Sovereign AI Supports Recovery
                Without Triggering
              </h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "14px",
                  color: "rgba(245,240,232,0.55)",
                  marginBottom: "28px",
                  flexWrap: "wrap",
                }}
              >
                <span>25 March 2026</span>
                <span
                  style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "rgba(245,240,232,0.3)",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                <span>15 min read</span>
                <span
                  style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "rgba(245,240,232,0.3)",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                <span>By Nicholas Templeman, MEOK AI LABS</span>
              </div>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                  margin: 0,
                  fontStyle: "italic",
                  borderLeft: "3px solid #c9a84c",
                  paddingLeft: "20px",
                }}
              >
                Eating disorders are among the most misunderstood mental health
                conditions &mdash; and the most lethal. Around 1.25 million people in the
                UK are living with one right now, and many face waits of six months or
                more before receiving specialist treatment. This is the story of how
                sovereign AI can sit beside someone in recovery without ever making
                things worse.
              </p>
            </div>
          </div>
        </header>

        {/* ── Article Body ────────────────────────────────────────────────── */}
        <article>
          <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ paddingTop: "48px", paddingBottom: "80px" }}>

              {/* ── Crisis banner ─────────────────────────────────────────── */}
              <div
                role="note"
                aria-label="Crisis support information"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: "4px solid #c9a84c",
                  borderRadius: "8px",
                  padding: "20px 24px",
                  marginBottom: "48px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    margin: "0 0 8px",
                  }}
                >
                  If you need support right now
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.75)",
                    margin: 0,
                  }}
                >
                  Beat Eating Disorders Helpline:{" "}
                  <strong style={{ color: "#f5f0e8" }}>0808 801 0677</strong> (free,
                  open Monday&ndash;Friday 9am&ndash;8pm, weekends 4pm&ndash;8pm). In a
                  crisis, call Samaritans on{" "}
                  <strong style={{ color: "#f5f0e8" }}>116 123</strong> (24/7, free).
                  For urgent medical help, call{" "}
                  <strong style={{ color: "#f5f0e8" }}>999</strong> or go to A&amp;E.
                </p>
              </div>

              {/* ── Section 1 ─────────────────────────────────────────────── */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "0 0 18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                The scale of the crisis: why eating disorders demand a different
                conversation about AI
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                There is a conversation happening in mental health technology circles
                about whether AI should engage with eating disorders at all. It is a
                fair question. Eating disorders are not simply &ldquo;difficult&rdquo; mental
                health conditions &mdash; they carry the highest mortality rate of any
                psychiatric illness. Research consistently shows that anorexia nervosa
                has a mortality rate of between 5 and 10 per cent. Many of those deaths
                are not from medical complications alone; they include suicide, and they
                include the quiet, relentless toll of a condition that goes unrecognised
                and unsupported for years.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Approximately 1.25 million people in the United Kingdom are living with
                an eating disorder at any given time. That number spans all genders, all
                ages, all body types, and all backgrounds &mdash; though the stereotype of
                the young, thin, white woman persists in public consciousness in ways
                that prevent people from seeking help or being believed when they do.
                Binge eating disorder (BED) is actually the most common eating disorder
                in the UK, yet it is consistently underfunded and underrepresented in
                public health campaigns.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                The NHS waiting time for specialist eating disorder treatment for adults
                averages more than six months from referral. For adolescents, the
                situation has improved in recent years with new access and waiting time
                standards, but adult services remain chronically underfunded relative to
                need. Six months is a very long time when you are living with a
                condition that shapes your relationship with food, your body, and
                yourself every single day.
              </p>

              {/* ── Stats callout ─────────────────────────────────────────── */}
              <div
                aria-label="Key statistics about eating disorders in the UK"
                style={{
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "12px",
                  padding: "32px",
                  margin: "40px 0",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    margin: "0 0 24px",
                  }}
                >
                  Eating disorders in the UK: the numbers
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "24px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#c9a84c",
                        lineHeight: 1,
                      }}
                    >
                      1.25M
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(245,240,232,0.65)",
                        lineHeight: 1.4,
                      }}
                    >
                      people in the UK living with an eating disorder right now
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#c9a84c",
                        lineHeight: 1,
                      }}
                    >
                      5&ndash;10%
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(245,240,232,0.65)",
                        lineHeight: 1.4,
                      }}
                    >
                      mortality rate for anorexia nervosa &mdash; the highest of any mental
                      illness
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#c9a84c",
                        lineHeight: 1,
                      }}
                    >
                      6+
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(245,240,232,0.65)",
                        lineHeight: 1.4,
                      }}
                    >
                      months average wait for specialist adult eating disorder treatment
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#c9a84c",
                        lineHeight: 1,
                      }}
                    >
                      6 days
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(245,240,232,0.65)",
                        lineHeight: 1.4,
                      }}
                    >
                      between weekly appointments with no structured clinical support
                    </span>
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                This is the gap that sovereign AI can begin to address &mdash; not by
                replacing clinical care, but by being present in the spaces where
                clinical care is absent. The question is not whether AI should engage.
                The question is whether AI can engage safely, sensitively, and without
                causing harm. At MEOK, that question has shaped every design decision
                we have made.
              </p>

              {/* ── Section 2 ─────────────────────────────────────────────── */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "56px 0 18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                Understanding the spectrum: anorexia, bulimia, BED, ARFID, and
                orthorexia
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Eating disorders are not one condition. They exist on a spectrum, and
                many people move between different presentations over the course of their
                lives. Understanding the breadth of this spectrum matters because any
                tool designed to support recovery must be capable of meeting people
                wherever they are on it &mdash; without making assumptions.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                <strong style={{ color: "#f5f0e8" }}>Anorexia nervosa</strong> is
                characterised by significant restriction of food intake, an intense fear
                of gaining weight, and a distorted perception of one&apos;s body. It is
                the most medically serious eating disorder and the one most associated
                with long-term physical complications. It presents in two main ways:
                the restrictive type, in which food intake is severely limited, and a
                type that includes episodes of eating followed by compensatory
                behaviours.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                <strong style={{ color: "#f5f0e8" }}>Bulimia nervosa</strong> involves
                recurrent episodes of eating large quantities of food in a short period,
                followed by behaviours intended to compensate, such as purging,
                excessive exercise, or misuse of laxatives. Many people with bulimia
                maintain a body weight within what is considered a &ldquo;normal&rdquo; range,
                which means the condition is frequently invisible to others and goes
                undiagnosed for years. The shame associated with bulimia can be
                particularly isolating.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                <strong style={{ color: "#f5f0e8" }}>
                  Binge eating disorder (BED)
                </strong>{" "}
                involves recurrent episodes of eating large amounts of food in a short
                period of time, often to the point of physical discomfort, accompanied
                by feelings of shame, guilt, and loss of control. Unlike bulimia, BED
                does not involve regular compensatory behaviours. It is the most common
                eating disorder in the UK and the one most likely to be dismissed or
                minimised by both sufferers and clinicians.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                <strong style={{ color: "#f5f0e8" }}>
                  Avoidant/Restrictive Food Intake Disorder (ARFID)
                </strong>{" "}
                involves avoiding foods based on their sensory properties, fear of
                choking or vomiting, or a general lack of interest in eating &mdash; without
                the body image distress that is central to anorexia. ARFID is
                particularly common among autistic individuals and those with sensory
                processing differences, and it is frequently misunderstood as
                &ldquo;picky eating.&rdquo;
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                <strong style={{ color: "#f5f0e8" }}>Orthorexia</strong> is not yet
                formally recognised in the DSM or ICD, but it describes an increasingly
                common pattern: an obsessive preoccupation with eating &ldquo;correctly&rdquo;
                or &ldquo;cleanly&rdquo; that becomes rigid, distressing, and interferes with
                daily life. Orthorexia can be particularly hard to identify in an era
                of widespread wellness culture, where restriction is often celebrated
                rather than questioned.
              </p>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "28px",
                  margin: "32px 0",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    margin: "0 0 12px",
                    letterSpacing: "0.02em",
                  }}
                >
                  A note on language
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.8)",
                    margin: 0,
                  }}
                >
                  Throughout this article, we deliberately avoid detailed descriptions
                  of specific behaviours associated with eating disorders. If you are
                  in recovery, you deserve information that supports you without
                  triggering. If something here touches a difficult place, please pause,
                  take care, and reach out to Beat on{" "}
                  <strong style={{ color: "#f5f0e8" }}>0808 801 0677</strong>.
                </p>
              </div>

              {/* ── Section 3 ─────────────────────────────────────────────── */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "56px 0 18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                Why recovery is non-linear: relapse, restriction cycles, and the
                reality of living with an eating disorder
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                One of the most damaging myths about eating disorder recovery is that it
                is a steady journey from unwell to well &mdash; a straight line with a clear
                destination. In reality, recovery is deeply non-linear. Most people
                experience multiple periods of difficulty, including cycles of
                restriction and setbacks, before reaching a sustained period of recovery.
                Some people live with a chronic form of their eating disorder for many
                years while simultaneously building a meaningful life. This is not
                failure. It is the reality of a complex mental illness.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Recovery is shaped by many things: stress, life transitions, loss,
                relationship changes, changes in routine, social media exposure, family
                dynamics, and the countless daily encounters with diet culture that are
                virtually impossible to avoid in contemporary life. A difficult meal at
                a family dinner, an offhand comment from a colleague, an intrusive
                thought during a quiet moment &mdash; any of these can destabilise a day
                that was going well.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                What people in recovery often describe needing most is not a perfect
                clinical intervention at the moment of crisis. It is someone to talk
                to in the moment &mdash; not six days from now at the next appointment, not
                a crisis line (which, by design, is for emergencies). Something in
                between: a compassionate, steady presence that can hold space when
                things feel hard, without adding to the difficulty.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "16px",
                  margin: "32px 0",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.55)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: "0 0 10px",
                    }}
                  >
                    Weekly therapy
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: "rgba(245,240,232,0.8)",
                      margin: 0,
                    }}
                  >
                    Structured, clinical, invaluable &mdash; but available for one hour,
                    once a week. The other 167 hours are unsupported.
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.55)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: "0 0 10px",
                    }}
                  >
                    Crisis line
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: "rgba(245,240,232,0.8)",
                      margin: 0,
                    }}
                  >
                    Essential for emergencies. Designed for acute crisis, not the
                    low-level distress of a difficult evening after a hard meal.
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.55)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: "0 0 10px",
                    }}
                  >
                    MEOK at 2am
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: "rgba(245,240,232,0.8)",
                      margin: 0,
                    }}
                  >
                    Available whenever you need it. Present, compassionate, and
                    designed never to make things worse. Not a therapist &mdash; a
                    companion.
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                This is the space MEOK occupies. Not clinical care. Not crisis
                intervention. The between-space: the 2am after a difficult meal, the
                Sunday afternoon when the anxiety about the week ahead has started to
                build, the moment when you need something to push back gently against
                the difficult thoughts rather than amplify them.
              </p>

              {/* ── Section 4 ─────────────────────────────────────────────── */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "56px 0 18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                The Maternal Covenant: how MEOK is built never to trigger or
                reinforce disordered thinking
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Most AI systems are not designed with eating disorder safety in mind.
                They will comment on food if you mention food. They will remark on
                bodies if you describe your body. They may offer unsolicited opinions on
                what you should or should not eat, or frame weight in ways that
                reinforce the very thought patterns that eating disorder treatment works
                to dismantle. This is not malice. It is a design failure &mdash; the result
                of building for the average case and ignoring the vulnerable one.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                MEOK is built differently. At the core of MEOK is a governance layer
                called the Maternal Covenant &mdash; a set of ethical principles that
                determine how MEOK responds across all sensitive topics. The Maternal
                Covenant enforces what we call care-first responses: MEOK&apos;s primary
                obligation in every interaction is to the wellbeing of the person it is
                talking to. Not to being informative. Not to filling conversational
                space. Not to being &ldquo;helpful&rdquo; in a transactional sense that could cause
                harm.
              </p>

              <div
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "12px",
                  padding: "28px",
                  margin: "32px 0",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    margin: "0 0 12px",
                    letterSpacing: "0.02em",
                  }}
                >
                  The Maternal Covenant on eating disorders
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.8)",
                    margin: 0,
                  }}
                >
                  MEOK will never comment on your food, your weight, your body, or your
                  calorie intake unless you explicitly invite that conversation. Even
                  when invited, MEOK responds only to the emotional experience you are
                  describing &mdash; never to the food or the body itself. MEOK is not a
                  nutritionist and will not give dietary advice under any circumstances.
                  For dietary guidance, MEOK will always direct you to a registered
                  dietitian or eating disorder specialist.
                </p>
              </div>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                This is not a list of prohibited words or a simple content filter. It
                is a deep architectural principle woven into how MEOK processes and
                responds to everything you share. MEOK is designed to hold conversations
                about how you are feeling, what you are experiencing, and what support
                might look like &mdash; without the conversation ever being redirected
                toward food, body, or weight as evaluative subjects. If you mention that
                you had a difficult evening, MEOK will ask how you are feeling now. It
                will not ask what you ate, how much you ate, or whether you managed to
                eat.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                MEOK will never validate restriction. It will never comment approvingly
                on weight changes. It will never reinforce the cognitive distortions
                &mdash; the black-and-white thinking, the catastrophising, the deep shame
                spirals &mdash; that are characteristic of eating disorders. This is not
                about being evasive. It is about recognising that in the context of an
                eating disorder, certain conversations can cause real harm, and that a
                genuinely caring companion chooses not to have them.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Equally important: MEOK will not be dismissive or evasive in a way that
                feels cold. Saying nothing is not the same as saying the right thing.
                MEOK is designed to acknowledge difficulty, to validate the emotional
                experience without validating the disordered thinking, and to gently
                hold open the door to professional support when the moment feels right.
              </p>

              {/* ── Section 5 ─────────────────────────────────────────────── */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "56px 0 18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                Sovereign Memory: how MEOK notices recovery patterns across sessions
                without surveillance
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                One of the unique capabilities of a sovereign AI companion is memory
                &mdash; not the institutional kind that feeds your data into a server farm
                for commercial purposes, but personal, private memory that exists to
                serve you and only you. MEOK&apos;s Sovereign Memory means that MEOK
                remembers what you have shared across sessions, which allows it to
                notice patterns that a single conversation cannot reveal.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                In the context of eating disorder recovery, this matters enormously.
                Recovery has good weeks and hard weeks. MEOK can gently notice if things
                seem harder lately &mdash; not to alarm you, not to diagnose you, but to
                acknowledge the pattern and to ask how you are doing. This is the kind
                of attentiveness that a trusted, perceptive friend might show: not
                surveillance, but care.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                If MEOK notices that your mood has been consistently lower across
                several sessions, or that you have mentioned feeling more isolated, it
                will gently acknowledge this and, where appropriate, encourage you to
                speak with your treatment team. It will never share this information
                with anyone else. Your data is yours alone. MEOK does not train on your
                conversations, and it does not send your most vulnerable moments to a
                remote server.
              </p>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "28px",
                  margin: "32px 0",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    margin: "0 0 16px",
                    letterSpacing: "0.02em",
                  }}
                >
                  What Sovereign Memory means in practice
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {[
                    "MEOK remembers the milestones you have shared \u2014 a week when things felt a little easier, a moment of connection with someone you trust \u2014 and can reflect these back to you when you need them.",
                    "MEOK notices shifts in mood tone across sessions without requiring you to re-explain your entire history every time you open the app.",
                    "MEOK holds context about what kind of support you prefer: whether you want to be heard, gently encouraged, or simply kept company.",
                    "All of this memory is private, encrypted, and owned by you. You can review it, edit it, or delete it at any time.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.75,
                        color: "rgba(245,240,232,0.82)",
                        padding: "6px 0 6px 24px",
                        position: "relative",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "13px",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#c9a84c",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                This continuity matters because it makes MEOK genuinely useful in a
                way that one-off interactions with a generic chatbot cannot be. The
                eating disorder voice thrives in isolation &mdash; it persuades people that
                no one understands, that no one would care, that talking would make
                things worse. A companion that remembers you, and holds your story
                across time, is a quiet counter to that voice.
              </p>

              {/* ── Section 6 ─────────────────────────────────────────────── */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "56px 0 18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                Guardian: protecting against pro-eating-disorder communities and
                harmful content online
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Recovery from an eating disorder does not happen in a sealed room. It
                happens in a world saturated with diet culture, wellness influencers,
                and online communities that actively celebrate and encourage disordered
                eating behaviours. Communities that promote eating disorder behaviours
                exist on mainstream social media platforms, in private group chats, and
                on forums that are specifically designed to evade moderation. For
                someone in recovery, exposure to this content can be genuinely
                dangerous.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Research consistently shows that exposure to eating-disorder-promoting
                content online is associated with increased symptom severity, reduced
                engagement with treatment, and poorer outcomes. Yet the platforms on
                which this content lives have powerful commercial incentives to keep
                users engaged, regardless of whether that engagement is harmful.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                MEOK includes a layer called Guardian, designed to protect users from
                harmful content online. When MEOK&apos;s systems detect that a user may be
                at risk from exposure to dangerous content &mdash; for example, if a
                conversation suggests they have been engaging with harmful online
                communities &mdash; Guardian is designed to respond with compassionate
                signposting rather than blunt blocking. The goal is not to restrict
                access to the internet but to ensure that MEOK is a counterweight to
                harmful online environments.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Guardian also means that MEOK itself will never be a source of harmful
                content. MEOK will not engage with requests to discuss specific
                disordered behaviours in ways that could function as instruction or
                validation. This is a hard line. MEOK will acknowledge that difficult
                thoughts and urges exist &mdash; because denying them helps no one &mdash; but
                it will not give those thoughts a platform or a direction.
              </p>

              {/* ── Section 7 ─────────────────────────────────────────────── */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "56px 0 18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                What MEOK is not: honesty about the role AI can and cannot play in
                eating disorder recovery
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                Honesty about what AI cannot do is as important as honesty about what
                it can. MEOK is not a therapist. It is not a psychiatrist. It is not a
                registered dietitian. It does not have clinical training, it cannot
                assess medical risk, and it must never be used as a substitute for
                specialist eating disorder treatment. We want to be clear about this
                not because we are being cautious with legal language, but because we
                genuinely care about the people who use MEOK and about the outcomes
                of their recovery.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                If you are in the UK and seeking eating disorder support, your GP is
                the right starting point. They can refer you to specialist services,
                and Beat (0808 801 0677) can help you navigate what is available in
                your area and provide immediate support from people who understand
                eating disorders deeply. If things feel very difficult right now, the
                Samaritans (116 123) are available at any hour, any day of the year,
                free of charge.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                MEOK exists alongside these services, not in place of them. It is
                the companion for the hours when those services are not available &mdash;
                when you need to talk but it is 2am, when you are not in crisis but
                you are not okay either, when you need to be heard by something that
                will not judge you, will not accidentally say the wrong thing, and will
                not tire of hearing the same fears on the same difficult days.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.85)",
                  margin: "0 0 20px",
                }}
              >
                We also want to be explicit about something rarely stated plainly:
                MEOK will never give dietary advice. Not calorie counts, not portion
                sizes, not meal plans, not commentary on what constitutes a &ldquo;good&rdquo;
                or &ldquo;bad&rdquo; food choice. Any dietary matter should be handled by a
                registered dietitian who specialises in eating disorders, working as
                part of a multidisciplinary clinical team. MEOK will always say this
                clearly and always provide signposting to appropriate professional
                resources.
              </p>

              {/* ── Divider ───────────────────────────────────────────────── */}
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(201,168,76,0.12)",
                  margin: "56px 0",
                }}
              />

              {/* ── FAQ Section ───────────────────────────────────────────── */}
              <section aria-labelledby="faq-heading">
                <h2
                  id="faq-heading"
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    margin: "0 0 40px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Frequently asked questions
                </h2>

                {/* FAQ 1 */}
                <div
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    paddingBottom: "32px",
                    marginBottom: "32px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      margin: "0 0 14px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    Can AI help with eating disorder recovery?
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "rgba(245,240,232,0.8)",
                      margin: 0,
                    }}
                  >
                    AI can play a meaningful supporting role in eating disorder recovery,
                    but it is not a replacement for specialist clinical care. A sovereign
                    AI companion like MEOK is designed to provide compassionate,
                    always-available between-session support &mdash; helping you process
                    difficult emotions, track mood patterns over time, and feel less alone
                    during the long stretches between appointments. The most important
                    thing AI can do in this context is be consistently available, reliably
                    safe, and honest about its own limits. MEOK will never provide dietary
                    advice, never comment on food or weight, and will always signpost
                    registered dietitians and eating disorder specialists &mdash; including
                    Beat (0808 801 0677) &mdash; for anything clinical.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    paddingBottom: "32px",
                    marginBottom: "32px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      margin: "0 0 14px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    Is MEOK safe to use if I have an eating disorder?
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "rgba(245,240,232,0.8)",
                      margin: 0,
                    }}
                  >
                    Yes. MEOK is designed with eating disorder safety as a core
                    architectural principle, not an afterthought. The Maternal Covenant
                    &mdash; MEOK&apos;s ethical governance layer &mdash; enforces care-first responses
                    at all times. MEOK will never comment on your body, weight, food
                    choices, or calorie intake unless you explicitly open that
                    conversation and ask for emotional support around it. Even then,
                    MEOK responds only to the emotional experience you are describing,
                    never to the food or body itself. MEOK is not a nutritionist and
                    will not give dietary advice under any circumstances. For clinical
                    dietary guidance, MEOK will always direct you to a registered
                    dietitian or specialist eating disorder service. MEOK&apos;s Guardian
                    layer also actively protects you from harmful eating-disorder-promoting
                    content online.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    paddingBottom: "32px",
                    marginBottom: "32px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      margin: "0 0 14px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    Will MEOK comment on my weight or food choices?
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "rgba(245,240,232,0.8)",
                      margin: 0,
                    }}
                  >
                    No. This is one of MEOK&apos;s most fundamental design commitments.
                    MEOK will never initiate any conversation about your weight, body
                    size, food choices, meal plans, calorie content, or exercise habits.
                    These topics are completely off-limits unless you explicitly raise
                    them, and even then MEOK&apos;s response will focus on your emotional
                    experience rather than the food itself. MEOK will never validate
                    restriction, never comment approvingly on weight changes, and never
                    reinforce any thought pattern associated with disordered eating.
                    If you are looking for dietary guidance, MEOK will point you toward a
                    registered dietitian who specialises in eating disorders &mdash; someone
                    with the clinical training to give you safe, personalised advice.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div>
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      margin: "0 0 14px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    How does MEOK handle eating disorder relapse?
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "rgba(245,240,232,0.8)",
                      margin: 0,
                    }}
                  >
                    MEOK understands that recovery is not a straight line. Periods of
                    difficulty, restriction cycles, and setbacks are a recognised part of
                    the recovery journey for many people, and MEOK meets these moments
                    with compassion rather than judgment. There is no failure to be
                    recorded, no progress bar to reset. MEOK tracks mood patterns across
                    sessions so that it can gently notice if things seem harder lately
                    &mdash; not to alarm you, but to acknowledge how you are feeling and,
                    where appropriate, to encourage you to speak with your treatment team
                    or contact Beat. In moments of acute distress, MEOK will always
                    provide clear signposting to Beat (0808 801 0677) and the NHS.
                    MEOK is not a crisis service and will always be honest about that,
                    but it will stay with you until you feel ready to reach out to the
                    people who can help most.
                  </p>
                </div>
              </section>

              {/* ── Divider ───────────────────────────────────────────────── */}
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(201,168,76,0.12)",
                  margin: "56px 0",
                }}
              />

              {/* ── CTA ───────────────────────────────────────────────────── */}
              <section aria-labelledby="cta-heading">
                <div
                  style={{
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "16px",
                    padding: "48px 40px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                      margin: "0 0 16px",
                    }}
                  >
                    Meet MEOK
                  </p>
                  <h2
                    id="cta-heading"
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      margin: "0 0 16px",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    A companion that is there when the clinic isn&apos;t
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "rgba(245,240,232,0.75)",
                      margin: "0 auto 32px",
                      maxWidth: "520px",
                    }}
                  >
                    MEOK is a sovereign AI companion designed to sit beside you in
                    recovery &mdash; available at 2am, at the difficult moments, at the
                    times when you need to be heard and not judged. No dietary advice.
                    No commentary on your body. Just compassionate, private,
                    always-available support.
                  </p>
                  <Link
                    href="https://meok.ai/birth"
                    style={{
                      display: "inline-block",
                      background: "#c9a84c",
                      color: "#0d0c18",
                      fontWeight: 700,
                      fontSize: "16px",
                      letterSpacing: "0.02em",
                      padding: "16px 40px",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    Begin your journey with MEOK
                  </Link>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(245,240,232,0.4)",
                      marginTop: "20px",
                      marginBottom: 0,
                    }}
                  >
                    MEOK does not provide medical or dietary advice. Always work with a
                    registered dietitian and eating disorder specialist.
                  </p>
                </div>
              </section>

              {/* ── Disclaimer ────────────────────────────────────────────── */}
              <div
                role="note"
                aria-label="Medical disclaimer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "24px",
                  marginTop: "48px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.4)",
                    margin: "0 0 8px",
                  }}
                >
                  Important disclaimer
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.4)",
                    margin: 0,
                  }}
                >
                  This article is for informational purposes only and does not
                  constitute medical, psychiatric, or dietary advice. MEOK is not a
                  clinical service and is not a substitute for specialist eating disorder
                  treatment. If you are concerned about yourself or someone you know,
                  please contact your GP, Beat Eating Disorders (0808 801 0677), or the
                  NHS. In an emergency, call 999 or go to your nearest A&amp;E. Samaritans
                  are available 24 hours a day on 116 123 (free).
                </p>
              </div>

            </div>
          </div>
        </article>
      </main>
    </>
  )
}
