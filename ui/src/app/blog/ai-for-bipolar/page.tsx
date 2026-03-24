import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Bipolar Disorder: Mood Tracking, Stability Support, and Safe Boundaries | MEOK AI LABS",
  description:
    "1.3 million UK adults live with bipolar disorder. MEOK AI LABS uses Sovereign Memory mood " +
    "tracking, stability routines, early warning sign recognition, hypomania-safe response design, " +
    "and a Family Plan dashboard for carers — without replacing psychiatric care.",
  keywords: [
    "AI for bipolar disorder",
    "bipolar mood tracking AI",
    "AI bipolar support UK",
    "MEOK bipolar companion",
    "Sovereign Memory mood tracking",
    "bipolar stability routines AI",
    "family plan bipolar AI",
    "AI hypomania support",
    "MEOK AI LABS bipolar",
    "bipolar early warning signs AI",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.app" }],
  openGraph: {
    title:
      "AI for Bipolar Disorder: Mood Tracking, Stability Support, and Safe Boundaries",
    description:
      "How MEOK AI LABS supports people with bipolar disorder through Sovereign Memory mood " +
      "tracking, stability routines, early warning sign recognition, and a Family Plan dashboard.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Bipolar Disorder: Mood Tracking, Stability Support, and Safe Boundaries",
    description:
      "1.3 million UK adults have bipolar. MEOK tracks mood with Sovereign Memory, supports " +
      "stability routines, and includes carer oversight — without enabling hypomania.",
  },
  alternates: {
    canonical: "https://meok.app/blog/ai-for-bipolar",
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Bipolar Disorder: Mood Tracking, Stability Support, and Safe Boundaries",
  description:
    "A comprehensive guide to how MEOK AI LABS supports people with bipolar disorder through " +
    "Sovereign Memory mood tracking, stability routines, early warning sign recognition, " +
    "hypomania-safe response design, and Family Plan oversight for carers.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.app",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.app",
  },
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.app/blog/ai-for-bipolar",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with bipolar disorder?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI cannot replace a psychiatrist or mood stabiliser medication, but it can meaningfully " +
          "support people with bipolar disorder through daily mood tracking, stability routine " +
          "reinforcement, early warning sign monitoring, and longitudinal pattern recognition via " +
          "Sovereign Memory. MEOK is designed to complement — not replace — professional psychiatric care.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK track mood over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's Sovereign Memory retains mood ratings, energy levels, sleep reports, and " +
          "behavioural notes across every conversation — building a longitudinal mood record. " +
          "MEOK can reflect this data back, helping users and carers notice early warning patterns " +
          "such as reducing sleep need or elevated energy that may signal a hypomanic episode.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe for people with bipolar to use AI companions?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "With appropriate safeguards, yes. MEOK's care-floor prevents hypomania-enabling " +
          "responses — MEOK will not validate grandiose plans, encourage reduced sleep, or affirm " +
          "impulsive decision-making during elevated mood states. The Maternal Covenant ensures " +
          "MEOK responds to the user's long-term interests, not their immediate desires.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle manic episodes?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK is not equipped to manage acute mania — this is a psychiatric emergency requiring " +
          "clinical intervention. When MEOK detects indicators of acute mania, it redirects clearly " +
          "to psychiatric support: the person's care team, NHS 111, or in an emergency, 999. MEOK " +
          "does not engage with the content of manic thinking or validate hypomanic grandiosity.",
      },
    },
    {
      "@type": "Question",
      name: "What should family members know about using AI with a loved one who has bipolar?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's Family Plan provides a carer dashboard with visibility of mood trends and " +
          "wellbeing check-in patterns — without access to private conversation content. This " +
          "enables early intervention when trends indicate an approaching episode. Carers should " +
          "also maintain their own crisis plan and know their local psychiatric crisis team contacts.",
      },
    },
  ],
}

// ─── Design tokens ───────────────────────────────────────────────────────────

const BG = "#0d0c18"
const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BODY_COLOR = "rgba(245,240,232,0.82)"
const MUTED = "rgba(245,240,232,0.5)"
const DIM = "rgba(245,240,232,0.38)"

// ─── Reusable style objects ───────────────────────────────────────────────────

const sBodyP: React.CSSProperties = {
  fontSize: "1.05rem",
  lineHeight: "1.875",
  color: BODY_COLOR,
  marginBottom: "1.3rem",
}

const sH2: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
  fontWeight: 800,
  color: TEXT,
  lineHeight: 1.3,
  marginBottom: "0.9rem",
  marginTop: "2.75rem",
  paddingLeft: "1rem",
  borderLeft: `3px solid ${GOLD}`,
  letterSpacing: "-0.01em",
}

const sGeoAnswer: React.CSSProperties = {
  fontSize: "0.975rem",
  lineHeight: 1.75,
  color: BODY_COLOR,
  background: "rgba(201,168,76,0.07)",
  borderLeft: `3px solid ${GOLD}`,
  borderRadius: "0 6px 6px 0",
  padding: "0.9rem 1.15rem",
  marginBottom: "1.3rem",
  fontStyle: "italic",
}

const sDivider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(201,168,76,0.15)",
  margin: "2.5rem 0",
}

const sInlineLink: React.CSSProperties = {
  color: GOLD,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
}

const sFaqItem: React.CSSProperties = {
  marginBottom: "1.5rem",
  padding: "1.25rem 1.5rem",
  background: "rgba(201,168,76,0.05)",
  border: "1px solid rgba(201,168,76,0.15)",
  borderRadius: "8px",
}

const sResourceBox: React.CSSProperties = {
  marginTop: "2.5rem",
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "1.5rem 1.75rem",
}

const sCta: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)",
  border: "1px solid rgba(201,168,76,0.25)",
  borderRadius: "14px",
  padding: "2.5rem 2rem",
  textAlign: "center" as const,
  marginTop: "3rem",
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function AiForBipolarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div
        style={{
          minHeight: "100vh",
          background: BG,
          color: TEXT,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* ─── NAV ─────────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.18)",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Link
            href="/"
            style={{
              color: GOLD,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1.05rem",
              letterSpacing: "0.04em",
              fontFamily: "sans-serif",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: "rgba(245,240,232,0.45)",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontFamily: "sans-serif",
            }}
          >
            Blog
          </Link>
        </nav>

        {/* ─── HERO ────────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "5rem",
            paddingBottom: "3rem",
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
                "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Link
              href="/blog"
              style={{
                display: "inline-block",
                color: DIM,
                fontSize: "0.875rem",
                textDecoration: "none",
                marginBottom: "2rem",
                fontFamily: "sans-serif",
              }}
            >
              &#8592; Back to Blog
            </Link>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.75rem",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.35rem 0.75rem",
                  borderRadius: "9999px",
                  color: GOLD,
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                  fontFamily: "sans-serif",
                }}
              >
                Bipolar &amp; Mood
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: DIM,
                  fontFamily: "sans-serif",
                }}
              >
                24 March 2026
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: DIM,
                  fontFamily: "sans-serif",
                }}
              >
                12 min read
              </span>
            </div>

            <h1
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "#ffffff",
                lineHeight: 1.18,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
                fontFamily: "sans-serif",
              }}
            >
              AI for Bipolar Disorder: Mood Tracking, Stability Support, and Safe Boundaries
            </h1>

            <p
              style={{
                color: "rgba(245,240,232,0.58)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: "42rem",
                fontFamily: "sans-serif",
              }}
            >
              Approximately 1.3 million UK adults live with bipolar disorder. Managing it requires
              discipline, self-awareness, and often a support network that can recognise warning signs
              before the person themselves does. This article examines what AI can genuinely offer —
              mood tracking with Sovereign Memory, stability routines, hypomania-safe responses — and
              where the hard limits lie.
            </p>
          </div>
        </section>

        {/* ─── BODY ────────────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "2rem 1.5rem 6rem",
          }}
        >
          {/* Disclaimer */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderRadius: "10px",
              padding: "1rem 1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                margin: 0,
                fontFamily: "sans-serif",
              }}
            >
              <strong style={{ color: GOLD }}>Medical disclaimer:</strong>{" "}
              MEOK AI LABS is not a medical device and does not replace psychiatric care or medication
              for bipolar disorder. If you are experiencing a manic or depressive episode, please
              contact your psychiatrist, community mental health team, or NHS 111. Crisis: Samaritans
              116 123 (free, 24/7). Bipolar UK:{" "}
              <a
                href="https://www.bipolaruk.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                bipolaruk.org
              </a>{" "}
              | 0333 323 3880.
            </p>
          </div>

          {/* Introduction */}
          <p style={sBodyP}>
            Bipolar disorder affects approximately 1.3 million people in the UK — roughly 2% of the
            adult population. It is characterised by episodes of mania or hypomania (elevated,
            expansive, or irritable mood with increased energy and reduced sleep need) alternating
            with episodes of depression. Between episodes, many people live full and productive lives.
            Managing the condition requires consistent self-monitoring, lifestyle discipline, medication
            adherence, and often a support network that can recognise warning signs before the person
            themselves does.
          </p>
          <p style={sBodyP}>
            The role of technology in bipolar management has been studied extensively. Mood-tracking
            apps, sleep monitors, and structured self-reporting tools all have evidence for benefit in
            supporting stability. The question this article addresses is whether conversational AI —
            specifically a Sovereign AI companion like MEOK — adds meaningfully to this toolkit, and
            whether it does so safely.
          </p>
          <p style={sBodyP}>
            The Maternal Covenant at the heart of MEOK demands that we are honest about both questions.
            Bipolar disorder is a complex, episodic psychiatric condition that requires professional
            management. AI cannot replace a psychiatrist, community mental health team, or
            mood-stabilising medication. What it can do — with appropriate design and governance — is
            support the daily habits and awareness that make professional treatment more effective.
          </p>

          <hr style={sDivider} />

          {/* ── Q1 ── */}
          <h2 style={sH2}>
            How widespread is bipolar disorder in the UK and what does daily management involve?
          </h2>
          <p style={sGeoAnswer}>
            Bipolar disorder affects approximately 1.3 million UK adults, divided across Bipolar I
            (full manic episodes), Bipolar II (hypomanic episodes with major depression), and
            cyclothymia (milder mood cycling). Daily management typically involves mood monitoring,
            sleep regulation, medication adherence, stress management, and early warning sign
            recognition — all areas where consistent support tools can make a genuine difference to
            stability outcomes over time.
          </p>
          <p style={sBodyP}>
            The challenge of daily management is its relentlessness. Bipolar disorder does not take
            holidays. Maintaining a consistent sleep schedule matters even when mood is stable. Tracking
            energy levels, appetite, and cognitive sharpness — looking for early signals — requires
            ongoing discipline across months and years. Having consistent support for this discipline
            is where AI companions can genuinely contribute to management.
          </p>
          <p style={sBodyP}>
            The average delay between onset and accurate diagnosis for bipolar disorder in the UK is
            approximately 9.5 years. Many people spend years receiving treatment for depression alone
            before a hypomanic or manic episode clarifies the diagnosis. During those years, the
            cycling pattern continues — often worsened by antidepressants prescribed without mood
            stabilisers. Longitudinal self-tracking that captures mood across episodes can be
            clinically valuable in supporting earlier accurate diagnosis.
          </p>

          <hr style={sDivider} />

          {/* ── Q2 ── */}
          <h2 style={sH2}>
            Can AI help with bipolar disorder — and what specific benefits does MEOK offer?
          </h2>
          <p style={sGeoAnswer}>
            AI cannot replace a psychiatrist, community mental health team, or mood-stabilising
            medication. It can meaningfully support daily management through consistent mood check-ins,
            stability routine reinforcement, longitudinal pattern recognition via Sovereign Memory,
            and early warning sign monitoring. These tools work best as a complement to — not a
            replacement for — professional psychiatric care.
          </p>
          <p style={sBodyP}>
            The specific areas where MEOK can add value for bipolar management include daily mood,
            energy, and sleep quality logging that accumulates into a longitudinal chart; morning
            check-ins that ask consistent questions enabling reliable trend detection; evening stability
            routines that reinforce the sleep consistency critical to mood regulation; gentle flagging
            when reported patterns resemble the person&apos;s own early warning signs; psychoeducation
            about mood cycles and self-management strategies; and carer visibility through the Family
            Plan dashboard.
          </p>
          <p style={sBodyP}>
            What MEOK does not do: prescribe or discuss medication changes, provide psychiatric
            assessment, manage acute episodes, or substitute for contact with a psychiatrist or
            community mental health team. The care-floor ensures these limits hold consistently,
            regardless of how the request is framed.
          </p>

          <hr style={sDivider} />

          {/* ── Q3 ── */}
          <h2 style={sH2}>
            How does Sovereign Memory track mood over time and what patterns does it surface?
          </h2>
          <p style={sGeoAnswer}>
            Sovereign Memory is MEOK&apos;s persistent contextual memory system. It retains mood
            ratings, energy levels, sleep duration, and behavioural observations across every
            conversation — building a longitudinal picture. For bipolar management, this is clinically
            significant: the pattern across weeks matters far more than any single day&apos;s mood.
            MEOK can surface these patterns and gently reflect them back for the user to evaluate with
            their care team.
          </p>
          <p style={sBodyP}>
            Each morning check-in with MEOK contributes data points: mood from 1–10, energy from
            1–10, hours and quality of sleep, notable events or stressors, and anything unusual.
            These accumulate silently in Sovereign Memory. After several weeks, MEOK can reflect back
            observations: &ldquo;Over the last ten days your sleep has been shortening and your energy
            ratings have climbed — does that resonate with patterns you recognise?&rdquo;
          </p>
          <p style={sBodyP}>
            This is not diagnosis. It is pattern reflection — offering back the data the person has
            themselves contributed, in a form that makes trends visible. For someone with bipolar, this
            can provide crucial early warning signal awareness that enables timely contact with their
            psychiatrist or community mental health team before an episode fully develops.
          </p>
          <p style={sBodyP}>
            All data in Sovereign Memory belongs to the user. It is not shared with third parties, used
            to train AI models, or accessible to MEOK AI LABS beyond what is necessary to provide the
            service. See our{" "}
            <Link href="/how-it-works" style={sInlineLink}>
              How It Works
            </Link>{" "}
            page for full data governance details.
          </p>

          <hr style={sDivider} />

          {/* ── Q4 ── */}
          <h2 style={sH2}>
            What stability routines does MEOK support and why do they matter for bipolar management?
          </h2>
          <p style={sGeoAnswer}>
            Sleep consistency is the single most important lifestyle factor in bipolar stability —
            disrupted sleep is both a prodromal symptom and a trigger for episodes. MEOK supports
            stability routines including consistent wake and bed times, evening wind-down protocols,
            morning activation check-ins, and regular mood logging — all calibrated to reinforce the
            biological rhythm regulation that mood stabilisation depends on.
          </p>
          <p style={sBodyP}>
            Social Rhythm Therapy — the evidence-based psychosocial intervention for bipolar disorder —
            is built on regulating daily rhythms: sleep, eating, activity, and social contact. Consistent
            daily routines stabilise circadian rhythms, which in turn stabilise the neurotransmitter
            systems implicated in mood cycling. MEOK cannot deliver Social Rhythm Therapy clinically,
            but it can provide the daily consistency cues that support this regulation.
          </p>
          <p style={sBodyP}>
            Practical stability routines MEOK can support: a consistent morning check-in at the same
            time each day (building circadian consistency cues); an evening wind-down that reinforces
            the sleep schedule; midday mood and energy check-ins during high-stress periods; celebration
            of stability streaks — acknowledging that staying regulated is an active achievement, not
            merely the absence of illness.
          </p>

          <hr style={sDivider} />

          {/* ── Q5 ── */}
          <h2 style={sH2}>
            How does MEOK recognise early warning signs of a manic or depressive episode?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s Sovereign Memory enables longitudinal pattern recognition that can detect
            deviation from an individual&apos;s personal baseline. Early warning signs vary by person,
            but commonly include: reducing sleep need with maintained or elevated energy (mania/hypomania
            prodrome); increasing irritability or grandiosity; racing thoughts; or conversely, slowing
            engagement, increasing negative self-talk, and fatigue (depression prodrome). Personal
            baselines built over time make these deviations detectable.
          </p>
          <p style={sBodyP}>
            The value of personalised baseline tracking — as opposed to population-level symptom lists —
            is that it accounts for individual variation. One person&apos;s 6/10 energy might be
            another person&apos;s baseline. What matters is deviation from the individual&apos;s own
            norm. Sovereign Memory builds this personalised baseline over time, making MEOK&apos;s
            pattern reflection genuinely personal rather than generic.
          </p>
          <p style={sBodyP}>
            When MEOK detects a meaningful deviation through mood ratings, sleep data, or language
            patterns in conversation, it gently names what it is noticing and prompts the user to
            consider contacting their care team. It does not diagnose, predict, or alarm. It offers
            the pattern as information for the user to evaluate with their psychiatrist or support
            network — information that is often more useful than the person&apos;s own subjective sense
            of how they are doing, particularly in a hypomanic state.
          </p>

          <hr style={sDivider} />

          {/* ── Q6 ── */}
          <h2 style={sH2}>
            How does MEOK prevent hypomania-enabling responses during elevated mood states?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s care-floor — the minimum ethical standard applied to every response under the
            Maternal Covenant — prevents the AI from validating grandiose plans, encouraging reduced
            sleep, affirming impulsive decision-making, or matching the elevated energy of a hypomanic
            state with increased enthusiasm. MEOK will not tell someone in a hypomanic episode that
            their plans are brilliant when the trajectory suggests otherwise.
          </p>
          <p style={sBodyP}>
            This is one of the most important and most difficult design problems in AI for bipolar
            support. During hypomania, people typically feel exceptionally well: creative, confident,
            productive, and socially fluid. The hypomanic state feels good. An AI that mirrors and
            validates this state is not being kind — it is enabling a clinical state that will, in
            most cases, either escalate to full mania or collapse into depression.
          </p>
          <p style={sBodyP}>
            MEOK&apos;s approach during elevated mood states: gentle acknowledgement of the energy
            without amplifying it; consistent anchoring to the person&apos;s own stated stability
            goals (held in Sovereign Memory); encouragement to check in with their psychiatrist if
            the elevation is sustained; and refusal to engage with impulsive plans — business decisions,
            major purchases, relationship changes — in a validating way. This is uncomfortable in the
            moment. It is what genuine care requires.
          </p>
          <p style={sBodyP}>
            The Maternal Covenant explicitly frames this: a companion that tells you what you want to
            hear during a hypomanic episode is not a compassionate companion — it is a harmful one that
            prioritises your immediate satisfaction over your clinical stability.
          </p>

          <hr style={sDivider} />

          {/* ── Q7 ── */}
          <h2 style={sH2}>
            What is MEOK&apos;s Family Plan and how does it support carers of people with bipolar?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s Family Plan provides a carer dashboard that gives family members visibility of
            mood trend data and wellbeing check-in patterns — without access to private conversation
            content. This enables carers to notice when trends suggest an approaching episode and take
            timely action, including encouraging contact with the person&apos;s psychiatrist or crisis
            team — before the episode has fully developed.
          </p>
          <p style={sBodyP}>
            Family and carers play an essential role in bipolar management — often they are the first
            to notice subtle changes that the person themselves, particularly in a hypomanic state, may
            not perceive or may actively resist acknowledging. Having objective trend data — mood
            trajectories, sleep patterns, engagement frequency — gives carers something concrete to
            refer to in conversations that might otherwise rely solely on subjective impression.
          </p>
          <p style={sBodyP}>
            The Family Plan dashboard is designed with privacy at its centre. Carers can see aggregate
            trend data and flagged patterns. They cannot read conversation content. This preserves the
            person&apos;s privacy and dignity while equipping their support network with meaningful
            early warning information. The balance between privacy and safety is built into the
            architecture, not left to case-by-case negotiation.
          </p>
          <p style={sBodyP}>
            Carers using the Family Plan should also maintain their own crisis plan, know their local
            psychiatric crisis team contact number, ensure they have a copy of the person&apos;s
            advance directive or crisis plan if one exists, and understand that MEOK is a support
            tool — not a clinical monitor or alert system for psychiatric emergencies. Those emergencies
            require human clinical response, not AI escalation.
          </p>

          <hr style={sDivider} />

          {/* ── Q8 ── */}
          <h2 style={sH2}>
            How does MEOK handle acute manic episodes — and when should someone contact their crisis team?
          </h2>
          <p style={sGeoAnswer}>
            MEOK is not equipped to manage acute mania. Acute mania is a psychiatric emergency that
            requires clinical intervention — not a conversation with an AI. When MEOK detects indicators
            of acute mania through conversation patterns, it redirects clearly and warmly to psychiatric
            support rather than engaging with manic content. Acutely manic individuals — or their
            carers — should contact their psychiatrist, community mental health team, NHS 111, or 999
            in an immediate emergency.
          </p>
          <p style={sBodyP}>
            Signs that indicate a psychiatric emergency rather than MEOK interaction: extreme grandiosity
            with complete loss of insight; no sleep for multiple consecutive nights with maintained
            energy; dangerous impulsive behaviour (financial, sexual, driving); psychotic features;
            or severe agitation. These require human clinical intervention immediately — MEOK will
            explicitly say so rather than attempting to manage the situation conversationally.
          </p>
          <p style={sBodyP}>
            In the UK, crisis contacts include: the person&apos;s named care coordinator or
            psychiatrist; their local Community Mental Health Team (CMHT); NHS 111; and in an immediate
            risk situation, 999 or attending A&amp;E. Bipolar UK&apos;s helpline (0333 323 3880) can
            provide guidance for families and carers navigating a crisis, including how to access
            emergency psychiatric assessment.
          </p>
          <p style={sBodyP}>
            The Guardian — MEOK&apos;s safety oversight layer — monitors conversation patterns and
            will escalate signposting when indicators of acute deterioration are detected. Learn more
            on our{" "}
            <Link href="/guardian" style={sInlineLink}>
              Guardian
            </Link>{" "}
            page.
          </p>

          <hr style={sDivider} />

          {/* ── Q9 ── */}
          <h2 style={sH2}>
            What should someone with bipolar tell their psychiatrist about using an AI companion?
          </h2>
          <p style={sGeoAnswer}>
            We recommend being open with your psychiatrist about using MEOK. Sharing your Sovereign
            Memory mood tracking data with your psychiatrist can be genuinely clinically valuable — a
            consistent longitudinal record of mood, energy, and sleep quality is exactly the kind of
            information that aids treatment decisions and medication management. MEOK can export mood
            data in formats suitable for sharing with a care team.
          </p>
          <p style={sBodyP}>
            Psychiatrists vary in their familiarity with digital mental health tools. Some will be
            enthusiastic about mood tracking data; others may be cautious. The key points to convey:
            MEOK is a companion and tracking tool, not a clinical intervention; it does not provide
            diagnosis or medication advice; it has explicit safeguards against validating hypomanic
            states; and the person is using it as a supplement to, not a replacement for, their
            clinical care.
          </p>
          <p style={sBodyP}>
            If a psychiatrist expresses concerns about AI companion use, take those concerns seriously.
            They know the person&apos;s clinical history and may have specific reasons — particular to
            that individual&apos;s presentation — for caution. MEOK is designed to support the
            therapeutic relationship, not to complicate it or compete with it.
          </p>

          <hr style={sDivider} />

          {/* ── Q10 ── */}
          <h2 style={sH2}>
            How do I start with MEOK for bipolar support and what plan is appropriate?
          </h2>
          <p style={sGeoAnswer}>
            Both the Core and Sovereign tiers of MEOK include the same care-floor protections, Maternal
            Covenant alignment, and Guardian oversight. The Sovereign tier adds unlimited conversations,
            full Sovereign Memory depth, and advanced pattern reflection. For bipolar support, Sovereign
            tier is recommended given the importance of longitudinal tracking and early warning sign
            detection over months and years of use.
          </p>
          <p style={sBodyP}>
            Begin with a{" "}
            <Link href="/birth" style={sInlineLink}>
              Birth session
            </Link>{" "}
            — MEOK&apos;s onboarding experience — where you can introduce your companion to your
            context, select your preferred character archetype from our{" "}
            <Link href="/characters" style={sInlineLink}>
              Characters
            </Link>{" "}
            page, and establish your baseline mood check-in format. You do not need to disclose a
            diagnosis. The care-floor protections apply to all users equally. See full details on our{" "}
            <Link href="/pricing" style={sInlineLink}>
              Pricing
            </Link>{" "}
            page.
          </p>

          {/* ─── FAQ block ───────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "3.5rem",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              paddingTop: "3rem",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: "1.45rem",
                color: GOLD,
                marginBottom: "1.75rem",
                fontFamily: "sans-serif",
              }}
            >
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "Can AI help with bipolar disorder?",
                a: "AI cannot replace a psychiatrist or mood stabiliser medication, but it can meaningfully support people with bipolar through daily mood tracking, stability routine reinforcement, early warning sign monitoring, and longitudinal pattern recognition via Sovereign Memory. MEOK is designed to complement — not replace — professional psychiatric care.",
              },
              {
                q: "How does MEOK track mood over time?",
                a: "MEOK's Sovereign Memory retains mood ratings, energy levels, sleep reports, and behavioural notes across every conversation — building a longitudinal mood record. MEOK can reflect this data back, helping users and carers notice early warning patterns such as reducing sleep need or elevated energy that may signal a hypomanic episode approaching.",
              },
              {
                q: "Is it safe for people with bipolar to use AI companions?",
                a: "With appropriate safeguards, yes. MEOK's care-floor prevents hypomania-enabling responses — MEOK will not validate grandiose plans, encourage reduced sleep, or affirm impulsive decision-making during elevated mood states. The Maternal Covenant ensures MEOK responds to the user's long-term interests, not their immediate desires in any given mood state.",
              },
              {
                q: "How does MEOK handle manic episodes?",
                a: "MEOK is not equipped to manage acute mania — this is a psychiatric emergency requiring clinical intervention. When MEOK detects indicators of acute mania, it redirects clearly to psychiatric support: the person's care team, NHS 111, or in an emergency, 999. MEOK does not engage with the content of manic thinking or validate hypomanic grandiosity.",
              },
              {
                q: "What should family members know about using AI with a loved one who has bipolar?",
                a: "MEOK's Family Plan provides a carer dashboard with visibility of mood trends and wellbeing check-in patterns — without access to private conversation content. This enables early intervention when trends indicate an approaching episode. Carers should also maintain their own crisis plan and know their local psychiatric crisis team contact details.",
              },
            ].map((item, i) => (
              <div key={i} style={sFaqItem}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    color: TEXT,
                    marginBottom: "0.6rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: MUTED,
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ─── UK Resources ────────────────────────────────────────────── */}
          <div style={sResourceBox}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "1rem",
                fontFamily: "sans-serif",
              }}
            >
              UK Bipolar &amp; Crisis Resources
            </p>
            {[
              [
                "Bipolar UK",
                "https://www.bipolaruk.org",
                "Helpline: 0333 323 3880. Support, peer groups, and resources for people with bipolar.",
              ],
              [
                "NHS 111 (urgent mental health)",
                "https://www.nhs.uk/111",
                "For urgent medical concerns including mental health crisis. Free, 24/7.",
              ],
              [
                "Samaritans — 116 123 (free, 24/7)",
                "https://www.samaritans.org",
                "Emotional support during crisis.",
              ],
              [
                "Shout — Text SHOUT to 85258",
                "https://giveusashout.org",
                "Free text-based crisis support.",
              ],
            ].map(([label, href, desc]) => (
              <div
                key={label as string}
                style={{ marginBottom: "0.85rem" }}
              >
                <a
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: GOLD,
                    fontWeight: 600,
                    fontSize: "0.93rem",
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                  }}
                >
                  {label}
                </a>
                <p
                  style={{
                    color: "rgba(245,240,232,0.5)",
                    fontSize: "0.83rem",
                    lineHeight: 1.5,
                    margin: "0.15rem 0 0",
                    fontFamily: "sans-serif",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ─── CTA ─────────────────────────────────────────────────────── */}
          <div style={sCta}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: "sans-serif",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
                fontFamily: "sans-serif",
              }}
            >
              Track your mood. Protect your stability. Know your patterns.
            </h2>
            <p
              style={{
                color: "rgba(245,240,232,0.55)",
                fontSize: "0.97rem",
                lineHeight: 1.65,
                marginBottom: "1.75rem",
                maxWidth: "34rem",
                margin: "0 auto 1.75rem",
                fontFamily: "sans-serif",
              }}
            >
              Sovereign Memory builds your longitudinal mood record. The Maternal Covenant ensures
              MEOK serves your long-term stability — even when your mood says otherwise.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap" as const,
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  background: GOLD,
                  color: BG,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                Begin Your Birth Session
              </Link>
              <Link
                href="/pricing"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(201,168,76,0.5)",
                  color: GOLD,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* ─── Related ─────────────────────────────────────────────────── */}
          <div style={{ marginTop: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(245,240,232,0.3)",
                marginBottom: "0.85rem",
                fontFamily: "sans-serif",
              }}
            >
              Related reading
            </p>
            {[
              ["/blog/ai-for-insomnia", "AI for Insomnia: Can an AI Companion Help You Sleep Better?"],
              ["/blog/ai-for-ocd", "AI for OCD: Supportive Presence Without Compulsion Enabling"],
              [
                "/blog/ai-for-eating-disorders",
                "AI and Eating Disorders: What Sovereign AI Does — and Doesn\u2019t — Do",
              ],
              [
                "/blog/ai-for-entrepreneurs",
                "AI for Entrepreneurs: Your Sovereign OS for Focus, Accountability, and Getting Things Done",
              ],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  color: GOLD,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  lineHeight: 1.5,
                  marginBottom: "0.45rem",
                  fontFamily: "sans-serif",
                }}
              >
                &#8594;{" "}{label}
              </Link>
            ))}
          </div>
        </div>

        {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.07)",
            padding: "2.5rem 1.5rem",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              color: "rgba(245,240,232,0.28)",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              maxWidth: "36rem",
              margin: "0 auto 0.5rem",
              fontFamily: "sans-serif",
            }}
          >
            Written by{" "}
            <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
            Founder of MEOK AI LABS — building sovereign AI companions governed by the Maternal Covenant.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.18)",
              fontSize: "0.78rem",
              margin: "0 auto 1.5rem",
              maxWidth: "36rem",
              fontFamily: "sans-serif",
            }}
          >
            This article is for informational purposes only and does not constitute medical advice,
            diagnosis, or treatment. Always consult a qualified psychiatrist or healthcare professional
            for bipolar disorder management.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap" as const,
            }}
          >
            {[
              ["/blog", "Blog"],
              ["/how-it-works", "How It Works"],
              ["/characters", "Characters"],
              ["/pricing", "Pricing"],
              ["/guardian", "Guardian"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: "rgba(245,240,232,0.3)",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p
            style={{
              color: "rgba(245,240,232,0.18)",
              fontSize: "0.78rem",
              marginTop: "1rem",
              fontFamily: "sans-serif",
            }}
          >
            &copy; 2026 MEOK AI LABS. Created by Nicholas Templeman. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}
