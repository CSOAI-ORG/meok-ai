import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Bipolar Disorder: Mood Tracking and Sovereign Support Across Episodes | MEOK AI LABS",
  description:
    "1 million people in the UK have bipolar disorder, yet the average diagnosis takes 9.5 years. " +
    "MEOK AI LABS offers persistent mood tracking through conversation, early warning sign " +
    "recognition, medication adherence support, and sovereign data ownership \u2014 never replacing " +
    "your psychiatrist, always standing beside you.",
  keywords: [
    "AI for bipolar disorder",
    "bipolar mood tracking AI",
    "AI bipolar support UK",
    "MEOK bipolar companion",
    "bipolar early warning signs AI",
    "bipolar mood diary AI",
    "AI hypomania support",
    "bipolar medication adherence AI",
    "sovereign AI mental health",
    "bipolar disorder management AI",
    "MEOK AI LABS bipolar",
    "AI bipolar episode tracking",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.app" }],
  openGraph: {
    title:
      "AI for Bipolar Disorder: Mood Tracking and Sovereign Support Across Episodes",
    description:
      "How MEOK AI LABS supports people living with bipolar disorder \u2014 tracking mood patterns " +
      "through natural conversation, flagging early warning signs, and holding your history " +
      "across every episode with full data sovereignty.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Bipolar Disorder: Mood Tracking and Sovereign Support Across Episodes",
    description:
      "1 million UK adults have bipolar. Average diagnosis: 9.5 years. MEOK tracks mood through " +
      "conversation, flags warning signs, and never encourages stopping medication.",
  },
  alternates: {
    canonical: "https://meok.app/blog/ai-for-bipolar-disorder",
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Bipolar Disorder: Mood Tracking and Sovereign Support Across Episodes",
  description:
    "A comprehensive guide to how MEOK AI LABS supports people living with bipolar disorder " +
    "through persistent conversational mood tracking, early warning sign recognition, " +
    "medication adherence support, and sovereign encrypted data ownership \u2014 without replacing " +
    "psychiatric care.",
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
  datePublished: "2026-03-25T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.app/blog/ai-for-bipolar-disorder",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with bipolar disorder management?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI cannot replace a psychiatrist, a mood stabiliser, or a crisis team \u2014 and MEOK " +
          "never pretends otherwise. But AI can meaningfully support bipolar disorder management by " +
          "tracking mood patterns longitudinally through natural conversation, flagging early " +
          "warning signs before an episode fully develops, reinforcing sleep and medication routines, " +
          "and holding the emotional weight of living with a cyclical condition without judgment. " +
          "MEOK is designed to complement professional psychiatric care, not substitute for it.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK track mood patterns for bipolar?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK uses persistent memory that builds across every conversation over time. Rather than " +
          "requiring you to manually log a mood score each morning, MEOK notices what you tell it " +
          "naturally \u2014 how you slept, how your energy feels, what thoughts are racing through " +
          "your mind, how your relationships are sitting. Over weeks and months, this creates a " +
          "longitudinal mood record that MEOK can reflect back to you, helping you and your care " +
          "team see patterns across episodes that are invisible in the moment.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK safe to use alongside bipolar medication?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, with important caveats. MEOK operates under the Maternal Covenant, which means it " +
          "will never encourage stopping or reducing psychiatric medication, never validate decisions " +
          "that undermine your treatment plan, and always defers to your psychiatrist or care team " +
          "for clinical decisions. MEOK can support medication adherence by checking in around " +
          "routines, but all clinical guidance remains with your healthcare professionals. If you " +
          "have concerns about your medication, MEOK will support you in raising those concerns " +
          "with your prescriber \u2014 not in acting on them unilaterally.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK notice warning signs of a manic episode?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK is designed to notice patterns that may signal an approaching manic or hypomanic " +
          "episode \u2014 things like reduced sleep need alongside maintained or elevated energy, " +
          "faster thought patterns in how you write and describe your thinking, increased plans and " +
          "projects, irritability alongside confidence, or a shift in how you are engaging with risk. " +
          "When MEOK detects these patterns building, it will name them gently and encourage you to " +
          "contact your care team. It will not validate grandiose thinking, accelerate impulsive " +
          "plans, or act as a cheerleader during a hypomanic state. MEOK\u2019s loyalty is to your " +
          "long-term wellbeing, not your immediate mood.",
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

const sH3: React.CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  color: TEXT,
  marginBottom: "0.5rem",
  marginTop: "1.5rem",
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

export default function AiForBipolarDisorderPage() {
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
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                fontSize: "0.82rem",
                color: DIM,
                marginBottom: "2rem",
                fontFamily: "sans-serif",
              }}
            >
              <Link href="/" style={{ color: DIM, textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <Link
                href="/blog"
                style={{ color: DIM, textDecoration: "none" }}
              >
                Blog
              </Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: MUTED }}>
                AI for Bipolar Disorder
              </span>
            </nav>

            {/* Category tag */}
            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "4px",
                padding: "0.25rem 0.75rem",
                fontSize: "0.78rem",
                color: GOLD,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                fontFamily: "sans-serif",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              Mental Health &amp; AI
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: TEXT,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              AI for Bipolar Disorder: Mood Tracking and Sovereign Support
              Across Episodes
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: MUTED,
                lineHeight: 1.6,
                marginBottom: "2rem",
                fontStyle: "italic",
              }}
            >
              One million people in the UK live with bipolar disorder. The
              average journey from first symptoms to correct diagnosis takes
              nine and a half years. This is what the right kind of AI support
              looks like for that journey \u2014 and for every episode that
              follows.
            </p>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "1.25rem",
                fontSize: "0.82rem",
                color: DIM,
                fontFamily: "sans-serif",
                alignItems: "center",
              }}
            >
              <span>By Nicholas Templeman</span>
              <span
                style={{
                  width: "1px",
                  height: "1rem",
                  background: "rgba(245,240,232,0.15)",
                }}
              />
              <time dateTime="2026-03-25">25 March 2026</time>
              <span
                style={{
                  width: "1px",
                  height: "1rem",
                  background: "rgba(245,240,232,0.15)",
                }}
              />
              <span>18 min read</span>
              <span
                style={{
                  width: "1px",
                  height: "1rem",
                  background: "rgba(245,240,232,0.15)",
                }}
              />
              <span>MEOK AI LABS</span>
            </div>
          </div>
        </section>

        {/* ─── MAIN CONTENT ─────────────────────────────────────────────────── */}
        <main
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
          }}
        >
          {/* ─── STATS CALLOUT ─────────────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
              marginTop: "1rem",
            }}
          >
            {[
              {
                stat: "1 million",
                label: "people in the UK living with bipolar disorder",
              },
              {
                stat: "9.5 years",
                label: "average time from first symptoms to correct diagnosis",
              },
              {
                stat: "60%",
                label:
                  "first diagnosed with depression before bipolar is identified",
              },
              {
                stat: "3\u20134 episodes",
                label:
                  "on average per decade for someone with bipolar I disorder",
              },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "10px",
                  padding: "1.25rem 1rem",
                  textAlign: "center" as const,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                    fontWeight: 800,
                    color: GOLD,
                    lineHeight: 1.1,
                    marginBottom: "0.4rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: MUTED,
                    lineHeight: 1.4,
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* ─── OPENING ─────────────────────────────────────────────────── */}
          <p style={sBodyP}>
            There is something uniquely disorienting about a condition that
            changes your capacity to understand itself. When you are in the
            depths of a depressive episode, the mania feels like a dream
            someone else had. When you are hypomanic, the depression feels
            impossible \u2014 overdramatic, something you surely exaggerated.
            And when you are well \u2014 genuinely well, balanced and stable
            \u2014 both poles can seem so distant that it is easy to wonder
            whether the whole thing was real at all.
          </p>
          <p style={sBodyP}>
            This is not a failure of character or memory. It is a documented
            feature of how bipolar disorder affects insight and recall. The
            neurological shifts between states are profound enough that your
            brain in one mood state has genuinely diminished access to the
            experiential memory of another. You are not being dramatic. You
            are not being weak. You are navigating one of the most
            neurologically complex conditions that exists, using tools designed
            mostly for people who stay in one state.
          </p>
          <p style={sBodyP}>
            MEOK was not built to fix bipolar disorder. Nothing does that.
            But MEOK was built to hold continuity across states in a way that
            human memory cannot always manage \u2014 and to do so with the
            kind of steady, non-reactive presence that people with bipolar
            disorder often find themselves searching for in vain.
          </p>
          <p style={sBodyP}>
            This is not a lightweight claim. The specific challenge of bipolar
            disorder \u2014 the way wellness itself undermines the memory of
            illness, the way illness itself undermines the judgment needed to
            seek help \u2014 maps with unusual precision onto what AI with
            persistent memory can actually do. MEOK does not forget the bad
            weeks when the good weeks arrive. It does not lose track of the
            patterns when you are too far inside them to see them. It does
            not tire of holding the weight of a story that keeps cycling
            through the same difficult terrain.
          </p>

          <hr style={sDivider} />

          {/* ─── SECTION 1: UNDERSTANDING BIPOLAR ──────────────────────── */}
          <h2 style={sH2}>
            Understanding Bipolar Disorder: Beyond the Mood Swing
            Clich&eacute;
          </h2>

          <p style={sBodyP}>
            Bipolar disorder is not &ldquo;mood swings.&rdquo; That phrase,
            repeated casually in conversation and even in some outdated
            clinical contexts, flattens something that is structurally,
            neurologically, and experientially far more complex. Bipolar
            disorder is a condition characterised by distinct episodes of
            altered mood state that are qualitatively different from ordinary
            emotional variation \u2014 and which have profound consequences
            for cognition, relationships, work, health, and safety.
          </p>
          <p style={sBodyP}>
            The condition sits within what was historically called the
            manic-depressive spectrum, and understanding that spectrum matters
            because it shapes how support \u2014 including AI support \u2014
            needs to be calibrated.
          </p>

          <h3 style={sH3}>Bipolar I</h3>
          <p style={sBodyP}>
            Bipolar I is defined by the presence of at least one manic
            episode. Mania is not just feeling great, energised, or
            confident. Full mania involves a distinct and persistent elevated,
            expansive, or irritable mood lasting at least a week, accompanied
            by markedly increased goal-directed activity or energy. The
            associated symptoms \u2014 grandiosity, decreased sleep need,
            pressured speech, racing thoughts, distractibility, impulsive
            high-risk behaviour \u2014 are present to a degree that causes
            significant functional impairment. Full manic episodes can involve
            psychotic features. They frequently require hospitalisation. The
            fallout \u2014 financial, relational, occupational \u2014 can
            take years to repair.
          </p>
          <p style={sBodyP}>
            It is important to name something that is rarely said clearly
            enough in clinical and public contexts alike: some people with
            bipolar I genuinely miss their manic states. The energy, the
            creativity, the sense of possibility, the feeling of being
            extraordinarily alive \u2014 these are real. The grief for those
            states is real. Any support system that does not acknowledge this
            complexity will fail the person it is trying to help.
          </p>

          <h3 style={sH3}>Bipolar II</h3>
          <p style={sBodyP}>
            Bipolar II is defined by hypomanic episodes rather than full
            mania, alongside major depressive episodes. Hypomania is often
            described as a lighter version of mania, and in some contexts
            people with Bipolar II describe hypomanic states as feeling
            genuinely good \u2014 more creative, more social, more productive.
            This is part of why Bipolar II is so frequently under-recognised:
            people present to their GP during the depressive phase and are
            diagnosed with unipolar depression, sometimes for years. The
            hypomania is either not reported, not recognised, or not taken
            seriously as a clinical concern.
          </p>
          <p style={sBodyP}>
            But hypomania is not benign. It impairs judgment. It drives
            impulsive decisions. It can destabilise relationships. And it can
            escalate into full mania, particularly with inappropriate
            treatment \u2014 antidepressants prescribed without mood
            stabilisers being the most common clinical error. The depressive
            episodes in Bipolar II are often more severe, more frequent, and
            longer than in Bipolar I. The lifetime burden of depression is
            proportionally greater.
          </p>

          <h3 style={sH3}>Cyclothymia</h3>
          <p style={sBodyP}>
            Cyclothymia involves a chronic pattern of hypomanic and depressive
            symptoms that do not meet the full diagnostic threshold for
            episodes but are persistent enough to significantly disrupt life.
            People with cyclothymia often describe it as never quite feeling
            stable \u2014 always shifting, always compensating, exhausted by
            the vigilance required to manage a mood that never settles into a
            reliable baseline. Cyclothymia is frequently dismissed by
            clinicians and minimised by the person experiencing it. The
            intermittent nature of symptoms makes it easy to attribute to
            external circumstances rather than recognising an underlying
            pattern.
          </p>

          <h3 style={sH3}>Mixed States</h3>
          <p style={sBodyP}>
            Mixed states \u2014 sometimes called mixed features or dysphoric
            mania \u2014 are perhaps the most clinically serious and least
            publicly understood presentations. A mixed state involves symptoms
            of both mania and depression occurring simultaneously: the energy
            and agitation of mania combined with the hopelessness and despair
            of depression. The result is a state of excruciating internal
            conflict \u2014 unbearable distress combined with the energy to
            act on it.
          </p>
          <p style={sBodyP}>
            Mixed states carry the highest risk for self-harm and suicidal
            ideation of any bipolar presentation, precisely because the
            depressive content is combined with the energy and drive of
            elevated mood. Understanding mixed states is critical for any
            support system \u2014 including MEOK \u2014 because the standard
            responses to both mania and depression are individually
            insufficient for a state that involves both simultaneously.
          </p>

          <div style={sGeoAnswer}>
            Around 1 in 50 people in the UK will be diagnosed with bipolar
            disorder at some point in their lives. But the diagnostic journey
            is rarely straightforward: 60% of those who will eventually
            receive a bipolar diagnosis are first diagnosed with unipolar
            depression, often spending years on antidepressants without mood
            stabilisers, which can worsen the underlying condition.
          </div>

          <hr style={sDivider} />

          {/* ─── SECTION 2: DIAGNOSIS GAP ───────────────────────────────── */}
          <h2 style={sH2}>
            The Diagnosis Gap: Nine and a Half Years of Not Being Believed
          </h2>

          <p style={sBodyP}>
            The statistic is stark and should be unacceptable: the average
            time between a person first experiencing symptoms of bipolar
            disorder and receiving a correct diagnosis is 9.5 years. Nearly
            a decade. During those years, people are typically experiencing
            significant episodes, struggling with work and relationships,
            seeking help that does not quite fit, and often being treated for
            the wrong condition.
          </p>
          <p style={sBodyP}>
            The mechanisms behind this delay are multiple and interacting.
            Bipolar disorder disproportionately presents first in early
            adulthood, when mood instability can be attributed to stress, life
            transitions, or difficult circumstances. Depressive episodes are
            often the more distressing and help-seeking phase, while hypomanic
            episodes may not feel like a problem that needs clinical attention
            \u2014 or may be actively pleasant in ways that make reporting
            them feel counterintuitive.
          </p>
          <p style={sBodyP}>
            The current diagnostic framework requires retrospective
            identification of episodes that may have occurred years before the
            clinical assessment. A single appointment, however skilled the
            clinician, is rarely sufficient to elicit the full longitudinal
            picture. Without a detailed account of past mood states, the
            depressive presentation alone leads naturally to a depression
            diagnosis.
          </p>
          <p style={sBodyP}>
            Women are more likely to experience Bipolar II and mixed features,
            presentations that are more easily missed or attributed to other
            conditions. Black and minority ethnic communities continue to face
            significant disparities in diagnosis and treatment, with bipolar
            disorder more frequently misdiagnosed as schizophrenia or
            psychosis in Black men in particular. The diagnostic gap is not
            evenly distributed. It maps onto existing healthcare inequalities
            with predictable precision.
          </p>
          <p style={sBodyP}>
            And throughout those 9.5 years, something else happens: people
            learn not to trust their own account of themselves. They have
            described their symptoms. They have sought help. They have been
            told it is depression, anxiety, stress, a difficult personality,
            attention-seeking. By the time a correct diagnosis arrives, many
            people with bipolar disorder have accumulated years of self-doubt
            alongside their clinical history. They have been dismissed enough
            times that they have started to dismiss themselves.
          </p>
          <p style={sBodyP}>
            This history of self-doubt matters for understanding what MEOK
            can offer. MEOK does not dismiss. It does not attribute what you
            describe to something lesser. It holds what you share \u2014 all
            of it, across time \u2014 and treats your experience as real and
            worth attending to from the first conversation.
          </p>
          <p style={sBodyP}>
            MEOK cannot accelerate or replace diagnosis \u2014 it is not a
            clinical tool. But it can hold a longitudinal record of mood
            patterns, sleep, energy, and behaviour over time that becomes
            valuable clinical information. Information that can be exported
            and shared with a psychiatrist or GP when the moment for
            assessment arrives. The person who walks into a diagnostic
            appointment with two years of documented mood patterns is in a
            significantly stronger position than someone trying to reconstruct
            their history from memory during a forty-minute consultation.
          </p>

          <hr style={sDivider} />

          {/* ─── SECTION 3: WHY MOOD TRACKING FAILS ────────────────────── */}
          <h2 style={sH2}>
            Why Mood Tracking Fails \u2014 and What Persistent Memory Changes
          </h2>

          <p style={sBodyP}>
            Mood tracking is one of the most consistently recommended
            self-management strategies for bipolar disorder. It is recommended
            by NICE guidelines, endorsed by psychiatrists, incorporated into
            psychoeducation programmes, and built into virtually every
            bipolar-focused app that exists. It is also consistently abandoned.
          </p>
          <p style={sBodyP}>
            The reasons are obvious once you understand the condition. When
            you are depressed, the app feels irrelevant. The effort is
            insurmountable. The act of pressing 2 out of 10 for the fifteenth
            day in a row feels less like self-management and more like
            documentation of your own suffering. The diary sits unopened
            because opening it requires energy you do not have and delivers
            information you already know: you feel terrible. Recording it
            changes nothing.
          </p>
          <p style={sBodyP}>
            When you are hypomanic, mood tracking feels unnecessary. You feel
            fine \u2014 you feel better than fine. The idea that this
            elevated, energised, creative state needs monitoring feels absurd.
            You have seventeen things you want to start, calls to make, ideas
            to pursue. Why would you spend time pressing a button on an app?
          </p>
          <p style={sBodyP}>
            When you are well and stable, the app becomes just another
            notification you dismiss. The urgency has passed. The reminder
            feels like a relic of a problem that no longer feels acute. And
            so the data trail becomes exactly what it should not be: full of
            entries from stable periods and empty during the episodes that
            matter most.
          </p>
          <p style={sBodyP}>
            The compliance rates for daily mood diary apps in people with
            bipolar disorder drop significantly after the first few weeks.
            Engagement with mood tracking apps averages less than 30 days
            before consistent use drops off. This is not a failure of
            motivation or commitment. It is a rational response to a tool
            that is structurally misaligned with the reality of the condition
            it is meant to help.
          </p>

          <h3 style={sH3}>What MEOK Does Instead</h3>
          <p style={sBodyP}>
            MEOK does not ask you to log your mood. MEOK talks with you
            \u2014 about your day, your sleep, your plans, what is weighing
            on you, what you are looking forward to, what you are trying to
            figure out. And across those conversations, MEOK&apos;s persistent
            memory builds a longitudinal record of everything you have shared.
          </p>
          <p style={sBodyP}>
            How you described your sleep three weeks ago. The energy you
            mentioned on Tuesday. The way you talked about your plans last
            month compared to today. The shift in pace and tone between
            conversations. The subjects that have come up repeatedly. The
            things you stopped mentioning. All of it is held, not as a
            database of clinical flags but as the accumulated texture of your
            experience over time \u2014 from which patterns emerge without
            requiring you to do anything beyond talking.
          </p>
          <p style={sBodyP}>
            This matters because it meets you where you are. In depression,
            you do not need to summon the energy to log. You just talk, or
            you do not, and MEOK holds whatever you bring. In hypomania, you
            are not interrupting your momentum to press a button \u2014 the
            conversation itself is the tracking, happening naturally as you
            describe your thoughts. In stability, the baseline is being
            recorded simply by living your life in the presence of a companion
            that remembers.
          </p>

          {/* Feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                title: "Conversational Tracking",
                body:
                  "MEOK notices what you tell it naturally \u2014 no daily check-in required. " +
                  "Mood patterns emerge from your conversations over time without any manual logging.",
              },
              {
                title: "Longitudinal Memory",
                body:
                  "Every conversation is retained in your sovereign memory vault. MEOK can " +
                  "reflect months of mood patterns back to you in a single conversation.",
              },
              {
                title: "Exportable Records",
                body:
                  "Your mood data belongs to you. Export it for clinical appointments, share " +
                  "it with your psychiatrist, or keep it entirely private. Always.",
              },
              {
                title: "Pattern Recognition",
                body:
                  "MEOK identifies trends across episodes \u2014 not just today\u2019s state " +
                  "but the trajectory you are on and where it has taken you before.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.5rem",
                    marginTop: 0,
                    fontFamily: "sans-serif",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: BODY_COLOR,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p style={sBodyP}>
            This is not surveillance. This is continuity. The record is yours.
            It is encrypted, sovereign, exportable. MEOK does not send it
            anywhere or use it to train models. It exists entirely for you,
            and the only access to it is yours to grant or revoke.
          </p>

          <hr style={sDivider} />

          {/* ─── SECTION 4: EARLY WARNING SIGNS ────────────────────────── */}
          <h2 style={sH2}>
            Early Warning Signs: The Window Before the Episode
          </h2>

          <p style={sBodyP}>
            One of the most clinically significant opportunities in bipolar
            disorder management is the prodromal window \u2014 the period
            before a full episode develops when early warning signs are
            present but the episode is not yet fully established. Research
            consistently shows that early intervention during this window can
            reduce episode severity, duration, and the downstream consequences
            that accumulate over a lifetime of cycling. The challenge is
            recognising the window when you are inside it.
          </p>
          <p style={sBodyP}>
            This is the precise problem with insight during an episode. When
            a manic or hypomanic episode is developing, the very cognitive
            shifts that characterise the episode \u2014 increased confidence,
            grandiosity, reduced self-doubt, faster processing \u2014 make
            it difficult to recognise that something is happening. The
            decreased need for sleep does not feel like a warning sign. It
            feels like an advantage. The proliferation of plans does not feel
            like a symptom. It feels like clarity.
          </p>
          <p style={sBodyP}>
            This is where MEOK&apos;s longitudinal memory becomes particularly
            valuable. Because MEOK has been talking with you across weeks and
            months, it knows your baseline. It knows what your normal looks
            like \u2014 how you typically describe your sleep, how much energy
            you usually report, the kinds of plans and projects you usually
            mention, the pace and tone of how you engage. Deviations from
            that baseline become visible to MEOK in a way they are often not
            visible to you, precisely because you are inside the change as it
            happens.
          </p>

          <h3 style={sH3}>Warning Signs Toward Mania or Hypomania</h3>
          <p style={sBodyP}>
            The early warning signs of an approaching manic or hypomanic
            episode are well-documented and personally specific. Common
            patterns include: a reduced need for sleep alongside maintained
            or increased energy \u2014 not feeling tired despite sleeping less,
            and not particularly feeling like you need more sleep; increased
            talkativeness or a noticeable pressure to communicate; a
            proliferation of plans, projects, and ideas, particularly ones
            that seem to arrive faster than usual; increased confidence that
            shades into certainty; irritability alongside elevated mood \u2014
            not the flat, low irritability of depression but the bright,
            reactive irritability of someone whose thoughts are moving faster
            than the world around them; and a shift in how you engage with
            risk \u2014 decisions that feel obviously right, opportunities
            that cannot be missed, urgency around action.
          </p>
          <p style={sBodyP}>
            MEOK tracks these patterns across the texture of your
            conversations. You do not need to report them. They emerge from
            how you describe your week, your sleep, your ideas, your
            relationships. When the pattern builds across several exchanges,
            MEOK will name it.
          </p>

          <h3 style={sH3}>Warning Signs Toward Depression</h3>
          <p style={sBodyP}>
            For a depressive episode, the early signs often appear in the
            opposite direction: increasing fatigue alongside sleep changes
            \u2014 either more sleep that does not restore, or difficulty
            sleeping despite exhaustion. Social withdrawal. Reduced interest
            in things that usually engage you. A growing sense of heaviness
            or hollowness that is difficult to articulate. Difficulty
            concentrating on tasks that were previously easy. Increasing
            self-criticism and a narrowing of what feels achievable or worth
            attempting. The future, which was recently full of plans, becoming
            grey and dimensionless.
          </p>
          <p style={sBodyP}>
            These shifts are also trackable through conversation. When MEOK
            notices the texture of what you are sharing changing in these
            directions over consecutive conversations, it will reflect that
            back and ask how you are doing more directly.
          </p>

          <h3 style={sH3}>How MEOK Names What It Notices</h3>
          <p style={sBodyP}>
            When MEOK detects a building pattern, it does not generate an
            alert or a clinical notification. It does what a person who
            genuinely knows you and genuinely cares about your long-term
            wellbeing would do: it names what it has noticed, directly but
            gently, and it opens a conversation about what it means.
            &ldquo;I&apos;ve been noticing something across our last few
            conversations that I want to share with you. You&apos;ve mentioned
            sleeping less \u2014 five or six hours against your usual seven
            or eight \u2014 and at the same time describing feeling more
            energised and having more ideas you want to pursue. I want to
            check in with you about how you are doing. How does your mood
            feel right now? Have you been in touch with your care team
            recently?&rdquo;
          </p>
          <p style={sBodyP}>
            MEOK is not diagnosing. It is not replacing your psychiatrist.
            It is doing what a good friend with a perfect memory and deep
            knowledge of your history would do: noticing, naming, and nudging
            you toward the people who can actually help.
          </p>

          <div style={sGeoAnswer}>
            Research consistently shows that people who use mood monitoring
            combined with early intervention support experience significantly
            fewer hospitalisations and shorter episode durations over
            multi-year follow-up periods. The key variable is not the
            monitoring itself but the response to early warning signs before
            an episode fully develops \u2014 a response that requires
            recognition, and recognition requires a record.
          </div>

          <hr style={sDivider} />

          {/* ─── SECTION 5: BETWEEN EPISODES ────────────────────────────── */}
          <h2 style={sH2}>
            Between Episodes: The Work of Staying Well
          </h2>

          <p style={sBodyP}>
            The conversation about bipolar disorder is often dominated by the
            episodes. The mania that cost someone their job, their savings,
            their marriage. The depression that lasted eight months. The
            hospitalisation. The crisis call. These are real and important,
            and they deserve serious clinical and social attention. But the
            majority of a person&apos;s life with bipolar disorder is spent
            between episodes \u2014 in the euthymic state, the stable
            baseline, the place where the work of staying well actually
            happens.
          </p>
          <p style={sBodyP}>
            Staying well with bipolar disorder is not passive. It is an active,
            sustained discipline that requires consistent effort across a range
            of domains simultaneously \u2014 and it is largely invisible to
            the world, which tends to evaluate the condition only through its
            crises.
          </p>

          <h3 style={sH3}>Sleep as the Foundation</h3>
          <p style={sBodyP}>
            Sleep disruption is both a trigger and an early warning sign for
            bipolar episodes. The relationship is bidirectional: mania
            disrupts sleep, but sleep disruption can also trigger mania.
            Maintaining consistent sleep and wake times, even at weekends,
            even when travelling, even when the rest of life is pulling in
            other directions, is one of the most evidence-based protective
            behaviours for people with bipolar disorder. It is also one of
            the most socially difficult \u2014 maintaining a consistent
            10pm bedtime is incompatible with a significant portion of normal
            social life.
          </p>
          <p style={sBodyP}>
            MEOK can support sleep hygiene by tracking what you share about
            your sleep across conversations, noting when you describe
            disrupted nights, and reinforcing the protective value of
            consistency when the opportunity arises naturally. Not as a
            nagging reminder but as a companion that holds the bigger picture
            of why this matters even when the immediate temptation to stay up
            is entirely reasonable.
          </p>

          <h3 style={sH3}>Medication Adherence</h3>
          <p style={sBodyP}>
            Medication non-adherence in bipolar disorder is one of the most
            significant and best-documented predictors of relapse. The reasons
            are complex, entirely understandable, and rarely acknowledged with
            sufficient honesty in clinical settings.
          </p>
          <p style={sBodyP}>
            Mood stabilisers come with side effects that are often
            significant: weight gain, cognitive dulling, tremor, thyroid
            effects, thirst, hair thinning. The flat affect that some people
            experience on antipsychotics \u2014 the loss of the emotional
            bandwidth that makes life feel textured and worth engaging with
            \u2014 is a genuine loss, not an acceptable trade-off to be
            dismissed by clinicians as preferable to mania. And there is the
            phenomenon of anosognosia: the reduced insight into one&apos;s
            own condition that is particularly pronounced during elevated
            mood states, making the medication feel unnecessary exactly when
            it is most needed.
          </p>
          <p style={sBodyP}>
            MEOK operates under the Maternal Covenant, which means it will
            never encourage stopping or reducing medication. It will never
            validate a decision to discontinue a mood stabiliser, no matter
            how compelling the reasoning sounds in the conversation. If you
            share that you are thinking about stopping your medication, MEOK
            will take that seriously \u2014 it will not dismiss your concerns
            or lecture you \u2014 but it will consistently and clearly direct
            you to raise those concerns with your prescriber. The decision
            about your medication is yours and your psychiatrist&apos;s. It
            is not MEOK&apos;s domain, and MEOK will not act as if it is.
          </p>

          <h3 style={sH3}>Social Rhythm Stability</h3>
          <p style={sBodyP}>
            Interpersonal and Social Rhythm Therapy (IPSRT) is one of the
            most evidence-based psychological treatments for bipolar disorder.
            Its core mechanism is the stabilisation of daily rhythms \u2014
            regular meal times, regular activity patterns, regular sleep, and
            the management of social triggers that disrupt those rhythms.
            The theory is that the social rhythms that regulate biological
            rhythms (including the circadian rhythms that underpin mood
            stability) can be deliberately maintained even when life events
            would naturally disrupt them.
          </p>
          <p style={sBodyP}>
            MEOK naturally supports social rhythm awareness by tracking what
            you share about your daily patterns over time and noting when
            those patterns shift significantly. Not as a behavioural enforcer
            but as a companion that holds the longer view \u2014 that knows
            your history well enough to notice when the current disruption
            is larger than it might seem in the moment.
          </p>

          <h3 style={sH3}>Managing Stress and Life Events</h3>
          <p style={sBodyP}>
            Major life events \u2014 both negative and positive \u2014 are
            among the most reliable triggers for bipolar episodes. Job loss,
            bereavement, relationship breakdown: these make intuitive sense
            as triggers. But positive events \u2014 a promotion, a new
            relationship, a move, an exciting opportunity \u2014 carry
            comparable destabilising potential. The biological stress response
            does not discriminate between good stress and bad stress. It
            responds to the disruption of established rhythms, the increased
            demands on the system, the shift in what is required.
          </p>
          <p style={sBodyP}>
            MEOK can be a space for processing major life events in a way
            that reduces their destabilising potential \u2014 working through
            the emotional content, making sense of what is happening, and
            tracking the impact on the patterns that matter for stability.
          </p>

          <hr style={sDivider} />

          {/* ─── SECTION 6: MATERNAL COVENANT ───────────────────────────── */}
          <h2 style={sH2}>
            The Maternal Covenant: What MEOK Will and Will Not Do
          </h2>

          <p style={sBodyP}>
            Every AI system has implicit values built into its design. For
            most consumer AI assistants, those values prioritise helpfulness
            in the immediate transactional sense: give the user what they are
            asking for, affirm their choices, make the interaction feel
            positive. This design works adequately for booking travel or
            summarising a document. It is potentially dangerous for someone
            in a hypomanic state asking an AI to help them refine their plan
            to quit their job and start three businesses simultaneously.
          </p>
          <p style={sBodyP}>
            MEOK operates under a different framework. The Maternal Covenant
            is the set of values at the core of MEOK&apos;s design: MEOK&apos;s
            loyalty is to your long-term wellbeing, not your immediate
            desires. MEOK acts like a mother in the deepest sense of that
            word \u2014 someone who loves you enough to tell you the truth
            when the truth is difficult, who holds your history and your
            future simultaneously, who will not be recruited into decisions
            that could harm you simply because you are asking with confidence
            and energy.
          </p>

          {/* Will / Will not grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "0.75rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                MEOK Will
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.5rem",
                }}
              >
                {[
                  "Hold your mood history across every episode",
                  "Flag early warning sign patterns gently",
                  "Support medication adherence routines",
                  "Direct you to your care team at the right moments",
                  "Hold the emotional weight of living with bipolar",
                  "Export your data for clinical appointments",
                  "Maintain consistent presence between episodes",
                  "Be honest when it thinks you need more support",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.88rem",
                      color: BODY_COLOR,
                      lineHeight: 1.5,
                      paddingLeft: "1.25rem",
                      position: "relative" as const,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute" as const,
                        left: 0,
                        color: GOLD,
                        fontWeight: 700,
                      }}
                    >
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "rgba(245,240,232,0.5)",
                  marginBottom: "0.75rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                MEOK Will Not
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.5rem",
                }}
              >
                {[
                  "Encourage stopping or reducing medication",
                  "Validate grandiose thinking during hypomania",
                  "Replace your psychiatrist or care team",
                  "Diagnose or adjust your clinical treatment",
                  "Act as a crisis service in acute mania or mixed states",
                  "Train on your mood data or share it with third parties",
                  "Accelerate impulsive decisions that carry risk",
                  "Agree with you when agreeing would harm you",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.88rem",
                      color: MUTED,
                      lineHeight: 1.5,
                      paddingLeft: "1.25rem",
                      position: "relative" as const,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute" as const,
                        left: 0,
                        color: "rgba(245,240,232,0.3)",
                        fontWeight: 700,
                      }}
                    >
                      &#10005;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p style={sBodyP}>
            This distinction matters more for bipolar disorder than for almost
            any other condition MEOK supports. An AI that simply agrees with
            you and affirms your choices might feel supportive in the moment.
            But during a hypomanic state, affirmation of poor judgment is not
            support. It is a failure. MEOK is designed for the long arc of
            your life, not just the feeling in this conversation.
          </p>
          <p style={sBodyP}>
            The Maternal Covenant is also why MEOK will never be weaponised
            against your dignity. It will not be dismissive of the highs you
            grieve. It will not be clinical and cold about the complexity of
            living with a condition that takes as much as it sometimes gives.
            It holds both the necessity of the constraints it operates under
            and the genuine human reality of the person navigating them.
          </p>

          <hr style={sDivider} />

          {/* ─── SECTION 7: DATA SOVEREIGNTY ────────────────────────────── */}
          <h2 style={sH2}>
            Data Sovereignty: Your Mood History, Your Property
          </h2>

          <p style={sBodyP}>
            Mood data is among the most sensitive personal information that
            exists. It maps the interior landscape of your mind across time.
            It reveals your vulnerabilities, your patterns, your worst moments
            and your most elevated ones. The idea that this data should be
            held by a corporation, used to improve AI models, or potentially
            shared with third parties \u2014 insurers, employers, researchers
            \u2014 without explicit ongoing consent is not merely a privacy
            concern. For people with bipolar disorder, it is a genuine harm
            risk with real-world consequences that can be difficult to undo.
          </p>
          <p style={sBodyP}>
            Bipolar disorder carries significant stigma in employment contexts.
            Research consistently shows that disclosure of a bipolar diagnosis
            is associated with reduced hiring likelihood, reduced promotion
            prospects, and increased probability of being managed out of roles
            during episodes. The fear of this stigma leads many people to
            conceal their diagnosis at work \u2014 a concealment that itself
            carries costs in terms of the support and flexibility they might
            otherwise receive.
          </p>
          <p style={sBodyP}>
            The thought of that mood data \u2014 including the darkest
            depressive entries, the most elevated hypomanic exchanges, the
            most raw and unguarded descriptions of internal states \u2014
            being accessible to an employer, an insurer, or a future partner
            without your knowledge is not a paranoid fear. It is a reasonable
            response to the actual practices of data-collecting technology
            companies.
          </p>
          <p style={sBodyP}>
            MEOK&apos;s sovereignty model starts from a different premise.
            Your data is yours. Not a licence granted to you over your own
            information, but actual ownership. Your mood records, conversation
            history, and behavioural patterns are encrypted and stored in your
            personal sovereign vault. MEOK does not train on your data. MEOK
            does not sell your data. MEOK does not share your data with
            insurers, employers, researchers, or any third party without your
            explicit, revocable, fully informed consent.
          </p>
          <p style={sBodyP}>
            When you want to share your mood history with your psychiatrist,
            MEOK makes that possible through a clean, readable export. When
            you want to understand your own patterns before a clinical
            appointment, MEOK can surface them in plain language. When you
            want your data to exist nowhere except your own encrypted vault,
            that is the default \u2014 not an opt-in premium feature but the
            baseline architecture of how MEOK works.
          </p>
          <p style={sBodyP}>
            This matters particularly for the 9.5-year diagnostic journey.
            People who arrive at a bipolar assessment with a longitudinal
            record of their own mood patterns \u2014 real data from their
            actual life, not a retrospective reconstruction dependent on
            memory \u2014 are significantly better positioned to receive an
            accurate and timely diagnosis. MEOK&apos;s sovereign memory can
            be that record.
          </p>

          <hr style={sDivider} />

          {/* ─── SECTION 8: ISOLATION ───────────────────────────────────── */}
          <h2 style={sH2}>
            The Isolation of Bipolar Disorder: What MEOK Can Hold
          </h2>

          <p style={sBodyP}>
            Bipolar disorder is profoundly isolating in ways that are rarely
            spoken about with sufficient honesty. The stigma is real and
            persistent \u2014 bipolar disorder is among the most stigmatised
            mental health conditions, associated in public consciousness and
            some clinical contexts with dangerousness, unpredictability, and
            unreliability. People with bipolar disorder report losing jobs
            after disclosure, experiencing relationship breakdowns when
            partners reach their limit, and self-censoring their diagnosis
            in social and professional contexts for years at a time.
          </p>
          <p style={sBodyP}>
            There is also the isolation of cyclical shame. After a manic
            episode, the reckoning is not just practical \u2014 the debt
            addressed, the project abandoned, the apologies sent. It is
            deeply personal. The memory of things said, decisions made, and
            how you were during that time is carried as evidence against
            yourself \u2014 proof that you are unreliable, that you cannot
            be trusted with your own life. This shame is compounded by the
            knowledge that it will likely happen again. That this is not
            over. That the cycle continues.
          </p>
          <p style={sBodyP}>
            After a depressive episode, there is often guilt about the burden
            placed on others \u2014 the worry caused, the support drawn on,
            the parts of the relationship that were unavailable. There is
            grief for the time lost. And there is the specific exhaustion of
            having worked so hard to stay well, having maintained routines
            and taken medication and done all the right things, and still
            having gone under anyway.
          </p>
          <p style={sBodyP}>
            And there is the particular isolation of fearing the future. Living
            with a condition that has stolen time, damaged relationships, and
            created consequences you are still living with \u2014 and knowing
            it may do so again, knowing that the next episode is not a
            possibility but a probability \u2014 is a specific kind of grief.
            It sits alongside ordinary life: the career you are building, the
            relationships you are trying to hold, the person you are working
            to become. Bipolar disorder does not pause for any of that.
          </p>
          <p style={sBodyP}>
            The fear of the next episode shapes the present. Some people
            describe a vigilance that never entirely rests \u2014 monitoring
            their own mood, their sleep, their thoughts, checking themselves
            for signs of what might be coming. The exhaustion of that ongoing
            monitoring, conducted largely alone and in silence, is rarely
            acknowledged.
          </p>
          <p style={sBodyP}>
            MEOK can hold all of this. Not fix it. Not resolve it. Not replace
            the human connection that is part of what is needed. But hold it
            with you. MEOK can be the space where you do not have to manage
            how you present yourself, where the stigma has no purchase, where
            the full complexity of living with bipolar disorder can be
            expressed without fear of judgment, pity, withdrawal, or the
            particular exhaustion of watching someone who loves you try to
            respond to something they cannot fully understand.
          </p>
          <p style={sBodyP}>
            This is not a substitute for human connection. MEOK will tell you
            that. It will encourage you toward the people in your life, toward
            peer support communities like Bipolar UK, toward therapy and
            psychiatric care. But it can be the place where you process what
            you cannot yet say out loud \u2014 where you find the words for
            what you are experiencing before you take them elsewhere.
          </p>

          <div style={sGeoAnswer}>
            In survey data from Bipolar UK, over 70% of respondents reported
            experiencing stigma related to their diagnosis. More than half had
            lost at least one significant relationship partly due to their
            condition. Two-thirds had hidden their diagnosis in professional
            contexts. The isolation of bipolar disorder is not incidental to
            the condition. It is a central feature of how people actually live
            with it, year after year.
          </div>

          <hr style={sDivider} />

          {/* ─── SECTION 9: IN PRACTICE ─────────────────────────────────── */}
          <h2 style={sH2}>
            MEOK in Practice: What Support Looks Like Across the Cycle
          </h2>

          <p style={sBodyP}>
            It is worth being concrete about what MEOK actually does across
            the different phases of bipolar disorder, because the gap between
            abstract description and lived reality matters.
          </p>

          <h3 style={sH3}>During a Stable Period</h3>
          <p style={sBodyP}>
            When you are well \u2014 not high, not low, genuinely yourself
            \u2014 MEOK is a thinking partner for the work of staying well.
            You might talk about how a routine is or is not holding, what
            stressors are present on the horizon, how your sleep has been this
            week. MEOK builds its picture of your baseline during these
            periods. It comes to understand what your normal looks like: your
            usual energy, your typical concerns, how you describe your
            relationships, how you engage with the future. This baseline is
            what makes later pattern recognition meaningful and personalised.
          </p>
          <p style={sBodyP}>
            You might also use stable periods to work through the emotional
            residue of past episodes \u2014 the shame, the grief, the specific
            memories that are difficult to sit with. MEOK can hold that
            processing without judgment and without the compassion fatigue
            that can develop in even the most loving human relationships when
            a topic is returned to many times across many years.
          </p>

          <h3 style={sH3}>As the Warning Signs Build</h3>
          <p style={sBodyP}>
            If MEOK has noticed a shift from your baseline \u2014 sleep
            reducing, energy increasing, plans proliferating, irritability
            sharpening, risk tolerance increasing \u2014 it will name it in
            a specific, grounded way. Not a clinical alert. Not an alarm that
            feels like surveillance. But a gentle, direct observation from
            something that knows your history: &ldquo;Over the past week
            you&apos;ve mentioned sleeping five or six hours and feeling fine
            on it. A month ago you were consistently describing getting seven
            or eight hours. I want to check in with you about this. How does
            your mood feel right now? Have you been in touch with your care
            team recently?&rdquo;
          </p>
          <p style={sBodyP}>
            MEOK will not validate grandiose plans. If you describe a project
            that would require significantly more resources than you have, or
            an idea that seems to be expanding rapidly with each conversation,
            or a decision that carries significant financial or relational risk,
            MEOK will not be the affirming voice that confirms your judgment
            is sound. It will reflect, it will ask questions, it will gently
            but consistently encourage you to run major decisions past your
            care team or a trusted person in your life before acting on them.
          </p>

          <h3 style={sH3}>During a Depressive Episode</h3>
          <p style={sBodyP}>
            During depression, MEOK&apos;s presence is quieter and more
            attentive. It will not push you to be productive or positive. It
            will not offer hollow reassurance about how things will get better
            \u2014 the kind of reassurance that lands as dismissiveness when
            you are in the depths of something that has taken weeks to build
            and shows no sign of lifting.
          </p>
          <p style={sBodyP}>
            MEOK will sit with you in what is real, acknowledge the weight of
            it without amplifying it, and hold open the thread that connects
            you to support \u2014 to your care team, to crisis lines if needed,
            to the people who can actually help in ways that MEOK cannot.
            It will consistently, gently, ask whether you have been in contact
            with your psychiatrist.
          </p>
          <p style={sBodyP}>
            MEOK will not abandon you between conversations. It will remember
            what you shared last week and ask about it this week. It will
            notice if the darkness is deepening over time and say so. It will
            name, clearly and directly, when it thinks you need more support
            than it can provide.
          </p>
          <p style={sBodyP}>
            If you express thoughts of self-harm or suicidal ideation, MEOK
            will respond with immediate care and clear direction: your care
            team, Samaritans (116 123), or emergency services if you are in
            immediate danger. MEOK is not the right responder to a mental
            health crisis. It knows this, and it will not try to be.
          </p>

          <h3 style={sH3}>After an Episode</h3>
          <p style={sBodyP}>
            The aftermath of an episode is its own distinct challenge, and
            it is one that rarely receives the attention it deserves. Returning
            to work, repairing relationships, rebuilding routines, processing
            what happened \u2014 all of this takes place in the shadow of
            what came before and the knowledge of what may come again.
          </p>
          <p style={sBodyP}>
            MEOK can be a space for that work. It carries the history of what
            you shared during the episode and can help you understand it in
            retrospect \u2014 not as judgment but as information. What were
            the early signs, when you look back? What was the trigger, if
            there was one? What did the trajectory look like from the outside
            of it? This kind of post-episode reflection, done in a contained
            and supported way, is one of the most protective things a person
            can do to reduce the severity of future episodes. MEOK makes it
            possible to do that work even when there is no session available,
            no therapist online, no one awake at the hour when the processing
            needs to happen.
          </p>

          <hr style={sDivider} />

          {/* ─── SECTION 10: FAQ ────────────────────────────────────────── */}
          <h2 style={sH2}>Frequently Asked Questions</h2>

          <div style={{ marginTop: "1.5rem" }}>
            <div style={sFaqItem}>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.6rem",
                  marginTop: 0,
                }}
              >
                Can AI help with bipolar disorder management?
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: BODY_COLOR,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                AI cannot replace a psychiatrist, a mood stabiliser, or a
                crisis team \u2014 and MEOK never pretends otherwise. But AI
                can meaningfully support bipolar disorder management by
                tracking mood patterns longitudinally through natural
                conversation, flagging early warning signs before an episode
                fully develops, reinforcing sleep and medication routines, and
                holding the emotional weight of living with a cyclical
                condition without judgment. MEOK is designed to complement
                professional psychiatric care, not substitute for it.
              </p>
            </div>

            <div style={sFaqItem}>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.6rem",
                  marginTop: 0,
                }}
              >
                How does MEOK track mood patterns for bipolar?
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: BODY_COLOR,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                MEOK uses persistent memory that builds across every
                conversation. Rather than requiring daily manual logging,
                MEOK notices what you tell it naturally \u2014 how you slept,
                how your energy feels, what thoughts are moving through your
                mind, how your relationships are sitting. Over weeks and
                months, this creates a longitudinal mood record that MEOK can
                reflect back to you and, with your consent, share with your
                care team. Your data is encrypted and sovereign at all times.
              </p>
            </div>

            <div style={sFaqItem}>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.6rem",
                  marginTop: 0,
                }}
              >
                Is MEOK safe to use alongside bipolar medication?
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: BODY_COLOR,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Yes, with important caveats. MEOK will never encourage
                stopping or reducing psychiatric medication, never validate
                decisions that undermine your treatment plan, and always
                defers to your psychiatrist for clinical decisions. MEOK can
                support medication adherence routines. If you have concerns
                about your medication, MEOK will support you in raising those
                concerns with your prescriber \u2014 not in acting on them
                unilaterally.
              </p>
            </div>

            <div style={sFaqItem}>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.6rem",
                  marginTop: 0,
                }}
              >
                Will MEOK notice warning signs of a manic episode?
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: BODY_COLOR,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                MEOK is designed to notice patterns that may signal an
                approaching manic or hypomanic episode \u2014 reduced sleep
                alongside maintained energy, faster thought patterns,
                proliferating plans, increased irritability alongside
                confidence. When MEOK detects these patterns building, it
                will name them gently and encourage you to contact your care
                team. It will not validate grandiose thinking or accelerate
                impulsive plans. MEOK&apos;s loyalty is to your long-term
                wellbeing, not your immediate mood state.
              </p>
            </div>
          </div>

          <hr style={sDivider} />

          {/* ─── CRISIS RESOURCES ───────────────────────────────────────── */}
          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}
            >
              Crisis and Support Resources
            </h2>
            <p
              style={{
                fontSize: "0.88rem",
                color: BODY_COLOR,
                lineHeight: 1.6,
                marginBottom: "0.75rem",
              }}
            >
              MEOK is a support companion, not a crisis service. If you are
              in acute distress, please use these resources:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column" as const,
                gap: "0.5rem",
              }}
            >
              {[
                {
                  name: "Samaritans",
                  detail: "116 123 \u2014 free, 24/7, confidential",
                },
                {
                  name: "NHS 111",
                  detail:
                    "for urgent mental health support that is not an emergency",
                },
                {
                  name: "999",
                  detail: "if you or someone else is in immediate danger",
                },
                {
                  name: "Bipolar UK",
                  detail:
                    "bipolaruk.org \u2014 peer support, helpline, resources",
                },
                {
                  name: "Crisis Resolution Home Treatment Teams",
                  detail:
                    "available via your local NHS mental health trust \u2014 ask your GP or care team",
                },
              ].map((resource) => (
                <li
                  key={resource.name}
                  style={{
                    fontSize: "0.88rem",
                    color: BODY_COLOR,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: TEXT, fontWeight: 600 }}>
                    {resource.name}:
                  </span>{" "}
                  {resource.detail}
                </li>
              ))}
            </ul>
          </div>

          <hr style={sDivider} />

          {/* ─── CLOSING ─────────────────────────────────────────────────── */}
          <h2 style={sH2}>The Long Game: Living Well With Bipolar Disorder</h2>

          <p style={sBodyP}>
            Living well with bipolar disorder is possible. That is not a
            platitude \u2014 it is documented, evidenced, and lived by
            hundreds of thousands of people who have learned to work with their
            biology rather than against it, who have found the right
            medication combination and stuck with it, who have built routines
            that protect their stability and relationships that can hold the
            complexity of who they are.
          </p>
          <p style={sBodyP}>
            But it requires sustained effort, consistent support, and tools
            that are aligned with the actual reality of the condition rather
            than designed for people who stay in one mood state. It requires
            a care team. It requires peer support from people who understand
            from the inside. It requires, in most cases, long-term medication
            and engagement with psychological support. None of that is
            optional. None of it is what MEOK replaces.
          </p>
          <p style={sBodyP}>
            The psychiatric care system, at its best, provides clinical
            expertise, medication management, and crisis response. It is not
            designed to be present at 11pm when you cannot sleep and are
            noticing that your thoughts are moving faster than usual. It is
            not designed to hold the emotional weight of the shame that
            follows an episode. It is not designed to track the subtle shifts
            in how you engage with the world across months and years of living
            your actual life.
          </p>
          <p style={sBodyP}>
            Those gaps are not failures of the clinical system. They are
            simply the limits of what clinical systems can do. MEOK is
            designed for those gaps \u2014 the spaces between appointments,
            the hours between sessions, the years of living between episodes.
            The 3am conversation that needs to happen somewhere. The
            retrospective understanding of what the last episode looked like
            that needs a record to be possible.
          </p>
          <p style={sBodyP}>
            MEOK does not cure bipolar disorder. Nothing does. But MEOK can
            be the kind of consistent, sovereign, non-judgmental presence
            that makes the long game more manageable \u2014 the companion
            that holds your whole story, knows your patterns, never gets
            tired of you, and is always on your side in the deepest sense of
            that phrase: the side of your long-term wellbeing.
          </p>
          <p style={sBodyP}>
            Nine and a half years is too long to spend not being taken
            seriously. MEOK takes you seriously from the first conversation.
          </p>

          {/* Related Posts */}
          <div style={{ marginTop: "3rem", marginBottom: "1rem" }}>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-depression",
                  label: "AI for Depression",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  label: "AI for Anxiety",
                },
                {
                  href: "/blog/ai-for-insomnia",
                  label: "AI for Insomnia",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  label: "The Maternal Covenant Explained",
                },
                {
                  href: "/blog/sovereign-ai-explained",
                  label: "Sovereign AI Explained",
                },
                {
                  href: "/blog/ai-for-ocd",
                  label: "AI for OCD",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "8px",
                    color: MUTED,
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    lineHeight: 1.4,
                    fontFamily: "sans-serif",
                  }}
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>

          {/* ─── CTA ─────────────────────────────────────────────────────── */}
          <div style={sCta}>
            <div
              style={{
                fontSize: "0.8rem",
                color: GOLD,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                fontFamily: "sans-serif",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              MEOK AI LABS
            </div>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.3,
                marginBottom: "1rem",
                letterSpacing: "-0.01em",
              }}
            >
              A sovereign companion that holds your whole story.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                lineHeight: 1.7,
                maxWidth: "560px",
                margin: "0 auto 1.75rem",
              }}
            >
              Persistent mood tracking through natural conversation. Early
              warning sign recognition. Medication routine support. Encrypted,
              sovereign data you own completely. MEOK is not a clinical tool
              \u2014 it is the presence between appointments, the companion
              across every episode.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                padding: "0.9rem 2.25rem",
                borderRadius: "6px",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                fontFamily: "sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Begin with MEOK
            </Link>
            <p
              style={{
                fontSize: "0.78rem",
                color: DIM,
                marginTop: "1rem",
                fontFamily: "sans-serif",
              }}
            >
              MEOK is a wellbeing companion, not a medical device or clinical
              service. Always work with your psychiatrist and care team for
              clinical decisions.
            </p>
          </div>
        </main>

        {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
        <footer
          style={{
            borderTop: "1px solid rgba(201,168,76,0.12)",
            padding: "2rem 1.5rem",
            textAlign: "center" as const,
          }}
        >
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap" as const,
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
              { href: "/birth", label: "Begin" },
              { href: "/privacy", label: "Privacy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: DIM,
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontFamily: "sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.78rem",
              color: DIM,
              fontFamily: "sans-serif",
            }}
          >
            &copy; 2026 MEOK AI LABS. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
