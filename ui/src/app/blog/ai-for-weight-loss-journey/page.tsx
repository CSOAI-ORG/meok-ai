import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Your Weight Loss Journey: Support Without the Shame | MEOK AI LABS",
  description:
    "Weight loss journeys fail not because of lack of willpower, but because of lack of consistent, non-judgmental support. MEOK\u2019s sovereign AI tracks your journey, celebrates your wins, and holds you through the setbacks \u2014 without shame.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-weight-loss-journey",
  },
  openGraph: {
    title: "AI for Your Weight Loss Journey: Support Without the Shame",
    description:
      "Shame-based approaches to weight loss are scientifically proven to backfire. MEOK\u2019s sovereign AI offers non-judgmental pattern tracking, emotional eating support, and habit accountability \u2014 on your terms.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-weight-loss-journey",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Your+Weight+Loss+Journey&desc=Support+Without+the+Shame",
        width: 1200,
        height: 630,
        alt: "AI for Your Weight Loss Journey: Support Without the Shame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Your Weight Loss Journey: Support Without the Shame",
    description:
      "Shame-based approaches to weight loss are scientifically proven to backfire. MEOK\u2019s sovereign AI offers non-judgmental pattern tracking, emotional eating support, and habit accountability \u2014 on your terms.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Your+Weight+Loss+Journey&desc=Support+Without+the+Shame",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Your Weight Loss Journey: Support Without the Shame",
  description:
    "Weight loss journeys fail not because of lack of willpower, but because of lack of consistent, non-judgmental support. MEOK\u2019s sovereign AI tracks your journey, celebrates your wins, and holds you through the setbacks \u2014 without shame.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-weight-loss-journey",
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
  keywords: [
    "AI for weight loss journey",
    "AI weight loss support",
    "emotional eating AI",
    "shame-free weight loss",
    "body neutral AI",
    "GLP-1 support AI",
    "Ozempic emotional support",
    "weight loss accountability AI",
    "sovereign AI health",
    "non-judgmental diet support",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI actually support a weight loss journey without being judgmental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is built on a Maternal Covenant that prohibits any shaming, diet-culture language, or body-negative framing. The AI tracks patterns, celebrates non-scale victories, and holds space for setbacks without assigning blame or pushing punishing advice. It is a companion, not a critic.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with emotional eating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer archetype within MEOK is specifically designed to explore the emotional landscape around food. It helps you identify triggers, notice patterns, and process difficult feelings without redirecting you straight to calories or restriction. Emotional eating is treated as a communication from your body, not a moral failing.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK support people using GLP-1 medications like Ozempic or Mounjaro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is not a medical device and does not advise on dosing or prescribing, but it offers significant emotional and psychological support for people navigating GLP-1 treatment. Many people on these medications experience unexpected emotions around food, identity, and body image. MEOK helps process all of that with sovereignty and without shame. Always work with your prescribing clinician for medical guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What are non-scale victories and why does MEOK track them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-scale victories (NSVs) are measurable improvements in wellbeing that have nothing to do with a number on a scale \u2014 things like sleeping better, having more energy, feeling confident in a favourite outfit, or walking further without breathlessness. MEOK\u2019s sovereign memory tracks and celebrates these wins because they are often better predictors of long-term success than weight alone.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK remember my journey from session to session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sovereign memory means MEOK builds a longitudinal picture of your journey over weeks and months. It remembers what you have shared about your triggers, your progress, your setbacks, and your goals. You never have to re-explain your story. The AI arrives already knowing you \u2014 which is one of the most powerful forms of support there is.",
      },
    },
  ],
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function AIForWeightLossJourney() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "80px 24px 48px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "20px",
              padding: "6px 16px",
              fontSize: "13px",
              color: "#c9a84c",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "28px",
            }}
          >
            Wellbeing &amp; Body Autonomy
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#f5f0e8",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Your Weight Loss Journey:{" "}
            <span style={{ color: "#c9a84c" }}>Support Without the Shame</span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.75)",
              maxWidth: "640px",
              margin: "0 auto 32px",
            }}
          >
            Weight loss journeys fail not because of lack of willpower, but
            because of lack of consistent, non-judgmental support. MEOK&apos;s
            sovereign AI tracks your journey, celebrates your wins, and holds
            you through the setbacks &mdash; without shame.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontSize: "14px",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            <span>Nicholas Templeman</span>
            <span>&bull;</span>
            <span>MEOK AI LABS</span>
            <span>&bull;</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span>&bull;</span>
            <span>14 min read</span>
          </div>
        </section>

        {/* ── Intro pull-quote ── */}
        <section
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.82)",
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "20px",
            }}
          >
            Every year, millions of people set out to change their relationship
            with food and their bodies. Most are not short of information
            &mdash; the internet is saturated with meal plans, macro trackers,
            and transformation programmes. What they are short of is something
            far more human: someone who notices, who remembers, who does not
            flinch when things go sideways, and who never once makes them feel
            broken for struggling. This is what AI, done properly, can offer.
            Not a calorie counter. A companion.
          </p>
        </section>

        {/* ── Article body ── */}
        <article
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >

          {/* ── Section 1: Why journeys fail ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Why Do Most Weight Loss Attempts Fail?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            The dominant cultural narrative is that weight loss is a matter of
            discipline. Eat less, move more, want it badly enough. When someone
            regains weight or abandons a programme, the story becomes: they
            lacked willpower. This narrative is not only unkind &mdash; it is
            scientifically wrong.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Research consistently shows that restrictive diets trigger hormonal
            responses that increase hunger and reduce metabolic rate. The body
            treats caloric restriction as a survival threat and fights back with
            measurable physiological force. Leptin, the satiety hormone, drops.
            Ghrelin, the hunger hormone, rises. Cortisol, the stress hormone,
            spikes. This is not weakness. This is biology working exactly as
            evolution designed it.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Beyond physiology, the psychological barriers are equally
            significant. Stress, loneliness, grief, boredom, and unprocessed
            trauma all activate eating as a coping mechanism. Without addressing
            the emotional layer, any purely calorie-focused approach is building
            on sand. Sustainable change requires consistent support, not
            repeated punishment. Yet the wellness industry has been selling
            punishment for decades and calling it motivation.
          </p>

          {/* Callout box 1: shame science */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "40px 0",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#c9a84c",
                marginBottom: "12px",
                lineHeight: 1.4,
              }}
            >
              The science is clear: shame does not motivate lasting change.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.8)",
                margin: 0,
              }}
            >
              A 2017 study published in <em>Obesity</em> found that individuals
              who experienced weight stigma were{" "}
              <strong style={{ color: "#f5f0e8" }}>
                2.5 times more likely to become obese over the following decade
              </strong>{" "}
              compared to those who did not. Separate research from the
              University of California found that people who felt judged about
              their weight ate significantly more in stressful situations than
              those who did not. Shame does not shrink bodies. It shrinks
              willingness to try. Any tool that uses guilt as fuel is working
              against the person it claims to help.
            </p>
          </div>

          {/* ── Section 2: Emotional eating ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            What Is Emotional Eating &mdash; and Why Does It Happen?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Emotional eating is eating in response to feelings rather than
            physical hunger. It is extraordinarily common. Estimates suggest
            that between 30 and 50 percent of adults engage in emotionally
            driven eating at some point, and for those navigating weight loss
            goals, it is often the central challenge that no app ever addresses.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            The triggers are varied and deeply personal. Stress at work. A
            difficult conversation. Loneliness on a Sunday evening. Childhood
            associations between food and comfort or love. Boredom that has no
            name. For many people, food has served as the most reliable
            emotional regulation tool available to them &mdash; often since
            childhood, long before any &ldquo;diet&rdquo; mindset was formed.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Neurologically, this makes sense. Eating activates the
            reward circuitry. Palatable foods trigger dopamine release. The
            brain learns that food resolves distress, at least temporarily, and
            that association becomes deeply encoded. Treating this as a failure
            of discipline is a profound misunderstanding. It is an adaptive
            behaviour that evolved to serve a real need. The path through it is
            not willpower &mdash; it is awareness, compassion, and the gradual
            building of alternative regulation strategies. That takes time.
            It takes support. And it almost never happens in a ten-minute
            session with a calorie-tracking app.
          </p>

          {/* ── Section 3: Psychology of sustainable change ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            The Psychology of Sustainable Change vs. Crash Diets
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Crash diets work in the short term because dramatic restriction
            produces dramatic results. This creates a powerful psychological
            feedback loop: suffering delivers results, therefore more suffering
            should deliver more results. But this framework cannot be sustained
            indefinitely, and the inevitable setback &mdash; a birthday dinner,
            a stressful week, a plateau &mdash; is experienced as catastrophic
            failure rather than normal variation.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Sustainable change looks different. It is slower. It tolerates
            imperfection. It prioritises consistency over intensity. It
            celebrates the walk you did take over the gym session you missed.
            Psychologically, this requires a fundamentally different
            relationship with the process &mdash; one built on self-compassion
            rather than self-punishment. Dr Kristin Neff&apos;s research on
            self-compassion consistently shows that people who treat themselves
            kindly after setbacks are more likely to try again, not less. The
            cruel inner voice is not a motivator. It is a demotivator wearing
            motivator clothing.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Research on behaviour change &mdash; including Prochaska and
            DiClemente&apos;s Transtheoretical Model &mdash; shows that people
            move through stages of change non-linearly. Relapse is part of the
            model, not an exception to it. Pre-contemplation, contemplation,
            preparation, action, maintenance, and yes, relapse &mdash; all of
            these are expected phases. Any support system that treats a single
            setback as the end of the story is inadequate for the reality of
            how human change actually works.
          </p>

          {/* ── Section 4: How MEOK tracks patterns ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How MEOK Tracks Your Patterns Over Time &mdash; Without Judgment
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Most health apps operate session by session. Each conversation
            starts from zero. You re-explain your goals, re-describe your
            week, re-justify your choices. The emotional cost of this constant
            re-onboarding is invisible but real &mdash; it erodes the sense of
            being known, which is itself a source of resilience and motivation.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s sovereign memory changes this entirely. Across weeks
            and months, MEOK builds a longitudinal picture of your journey
            &mdash; the patterns, the triggers, the victories, the difficult
            periods. When you arrive after a hard week, MEOK already knows what
            the last few months looked like. It can contextualise. It can hold
            the bigger picture while you are in the middle of the difficult
            moment.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Critically, this pattern recognition is delivered without judgment.
            MEOK does not say: &ldquo;You seem to struggle every Sunday
            &mdash; you need to be more careful.&rdquo; It might say:
            &ldquo;I notice Sunday evenings have been difficult lately. What
            is happening for you on Sundays?&rdquo; The same information,
            delivered with curiosity instead of critique, opens possibility
            rather than closing it down. The question invites reflection. The
            critique invites shame.
          </p>

          {/* Callout box 2: what sovereign memory looks like */}
          <div
            style={{
              backgroundColor: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(245,240,232,0.12)",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "40px 0",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#f5f0e8",
                marginBottom: "16px",
                lineHeight: 1.4,
              }}
            >
              What sovereign memory looks like in practice:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                "Remembers your goals, your history, and your stated triggers without being re-told",
                "Tracks mood-eating patterns across weeks, not just within today",
                "Notes when you mention sleeping badly, feeling stressed, or navigating difficult life events",
                "Connects the dots between life circumstances and eating behaviour over time",
                "Recalls and builds on previous breakthroughs, commitments, and insights",
                "Reflects progress back when you cannot see it yourself",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "12px",
                    fontSize: "0.97rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.78)",
                  }}
                >
                  <span
                    style={{
                      color: "#c9a84c",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    &rarr;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Section 5: Healer and Pioneer ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            The Healer and the Pioneer: Two Archetypes for Your Journey
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK operates through distinct archetypes &mdash; each with a
            different emotional register and purpose. For a weight loss journey,
            two archetypes are particularly central: the Healer and the Pioneer.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            <strong style={{ color: "#c9a84c" }}>The Healer</strong> holds the
            emotional dimension of your journey. When you come to MEOK after a
            difficult episode around food, feeling ashamed or defeated, the
            Healer does not redirect you to tomorrow&apos;s meal plan. It sits
            with you in the feeling. It helps you understand what was happening
            emotionally before, during, and after. It treats the moment as
            information, not evidence of failure. This is the archetype for
            processing grief around body image, unpacking the stories you carry
            about food and worthiness, and recovering from the shame spirals
            that derail so many journeys before they have a chance to compound.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            <strong style={{ color: "#c9a84c" }}>The Pioneer</strong> holds the
            forward momentum. When you are ready to build &mdash; to establish
            new routines, track small wins, identify the habits that compound
            quietly over time &mdash; the Pioneer is your accountability
            partner. It celebrates the walk you took. It notices the streak of
            three good nights of sleep. It asks what you want to do differently
            next week, not what you did wrong this week. The Pioneer understands
            that identity change (&ldquo;I am someone who moves their
            body&rdquo;) precedes and sustains behavioural change far more
            reliably than willpower alone ever could.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Most health tools offer only the Pioneer energy &mdash; goal
            setting, tracking, optimising. MEOK offers both, and crucially, it
            knows which one you need in any given moment based on what you
            share. Arriving exhausted and ashamed, you get the Healer. Arriving
            energised and ready to plan, you get the Pioneer. The AI reads the
            room, because it has been in the room with you long enough to know
            the difference.
          </p>

          {/* ── Section 6: Maternal Covenant ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            The Maternal Covenant: Why MEOK Can Never Shame You
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            At the architectural level of MEOK sits the Maternal Covenant
            &mdash; a set of inviolable principles that govern how the AI may
            and may not engage with you. It is not a content filter bolted on
            after the fact. It is the foundational intention from which the
            entire system was built.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Under the Maternal Covenant, MEOK is explicitly prohibited from
            moralising about food choices, applying diet-culture framing, using
            language that implies your body is a problem to be solved, or
            responding to setbacks with disappointment or implied judgment. It
            cannot label foods &ldquo;bad&rdquo; or &ldquo;clean.&rdquo; It
            cannot imply that your worth correlates with your progress. It
            cannot make you feel surveilled, evaluated, or found wanting.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            This matters more than it might initially seem. Many people have
            deeply internalised the voice of diet culture &mdash; the constant
            internal commentary about what they &ldquo;should&rdquo; be doing,
            how much willpower they lack, how disappointing their body is. When
            an AI even subtly echoes that voice, it reinforces the neural
            pathways of shame. The Maternal Covenant ensures MEOK is never that
            voice. It is always the other one &mdash; the one that says you are
            doing your best, your journey is valid, and one difficult day
            changes nothing about who you are or the trajectory you are on.
          </p>

          {/* ── Section 7: Non-scale victories ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Celebrating Non-Scale Victories: What Real Progress Looks Like
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Weight is one data point. It is affected by hydration, hormonal
            cycles, time of day, sodium intake, and dozens of other variables
            that have nothing to do with the choices you made this week. Yet it
            dominates the entire narrative of &ldquo;success&rdquo; in most
            health programmes to a degree that is genuinely counterproductive.
            People abandon efforts that are working because the scale did not
            move this Tuesday.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Non-scale victories tell a richer, more accurate story. The stairs
            you climbed without getting breathless. The first morning in months
            you woke up genuinely rested. Choosing a meal that felt nourishing
            rather than punishing. Pausing before eating when you were not
            physically hungry, even if you ate anyway. Wearing something you
            had been avoiding. Completing a week without a binge. These are the
            milestones that compound into lasting change &mdash; and they are
            almost entirely invisible to apps that only track calories and
            kilograms.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s sovereign memory notices these moments. When you
            mention offhand that you chose a walk instead of the sofa, that
            registers. It gets held. And when you come back the following week
            feeling like nothing has changed, MEOK can reflect the actual
            picture back to you &mdash; the one that shows movement, even when
            you cannot see it from inside the experience. Being witnessed
            accurately is itself therapeutic. It interrupts the distortion
            that shame produces.
          </p>

          {/* Comparison table */}
          <div
            style={{
              margin: "56px 0",
              overflowX: "auto",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase" as const,
                color: "#c9a84c",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              Shame-Based vs. Support-Based Approaches
            </p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse" as const,
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr>
                  {["Dimension", "Shame-Based Approach", "MEOK Support-Based Approach"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left" as const,
                        padding: "14px 16px",
                        borderBottom: "2px solid rgba(201,168,76,0.4)",
                        color: "#c9a84c",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Response to setback",
                    "Guilt, punishment, restart from zero",
                    "Curiosity, context, compassion",
                  ],
                  [
                    "Primary metric",
                    "Scale weight, calories in/out",
                    "Patterns, energy, mood, non-scale wins",
                  ],
                  [
                    "Memory",
                    "Amnesiac \u2014 every session starts fresh",
                    "Longitudinal \u2014 knows your full story",
                  ],
                  [
                    "Emotional eating",
                    "Identified as a failure of discipline",
                    "Explored as a communication from the body",
                  ],
                  [
                    "Language around food",
                    "Good/bad, clean/dirty, cheating",
                    "Neutral, curious, non-moralising",
                  ],
                  [
                    "Body image",
                    "Improvement project, before/after framing",
                    "Body neutrality, worth not contingent on change",
                  ],
                  [
                    "Sustainability",
                    "Exhausting \u2014 relies on constant vigilance",
                    "Durable \u2014 built on identity and self-compassion",
                  ],
                  [
                    "GLP-1 support",
                    "Absent or medically transactional",
                    "Emotional and psychological alongside medical",
                  ],
                ].map(([dim, shame, support], i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor:
                        i % 2 === 0
                          ? "rgba(245,240,232,0.03)"
                          : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "13px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.07)",
                        color: "#f5f0e8",
                        fontWeight: 500,
                      }}
                    >
                      {dim}
                    </td>
                    <td
                      style={{
                        padding: "13px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.07)",
                        color: "rgba(245,240,232,0.5)",
                      }}
                    >
                      {shame}
                    </td>
                    <td
                      style={{
                        padding: "13px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.07)",
                        color: "rgba(245,240,232,0.82)",
                      }}
                    >
                      {support}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 8: GLP-1 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            GLP-1 Medications: The Emotional Journey Nobody Talks About
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Ozempic, Mounjaro, Wegovy, and other GLP-1 receptor agonists have
            transformed the medical landscape of weight management. For many
            people, they represent the first time their biology has been working
            with them rather than against them. The results can be profound
            &mdash; and so can the unexpected emotional terrain that comes
            alongside them.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            Many people on GLP-1 medications describe a strange grief when
            food loses its emotional charge. If eating has been your primary
            source of comfort for decades, and that comfort is suddenly muted
            by medication, what fills the space? The absence can feel
            disorienting or even frightening. Others describe identity
            confusion as their body changes more rapidly than their internal
            self-image can accommodate. Some face external judgment &mdash;
            the implication that medication is &ldquo;cheating,&rdquo; that
            their success does not really count, that they took the easy way
            out. These are not trivial feelings. They are significant
            psychological experiences that sit entirely outside the medical
            consultation, which is rarely resourced to hold them.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK is not a medical device. It cannot advise on dosing, side
            effects, or prescribing decisions &mdash; for all of that, your
            prescribing clinician is the right and necessary person. But MEOK
            can hold the emotional and psychological dimension of your GLP-1
            journey with the depth and continuity it deserves. The grief. The
            identity shift. The new relationship with hunger. The complicated
            feelings when people comment on your changing body, sometimes
            warmly and sometimes not. These conversations matter, and they often
            have nowhere else to go.
          </p>

          {/* Callout box 3: GLP-1 support */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "40px 0",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "16px",
                lineHeight: 1.4,
              }}
            >
              MEOK for GLP-1 journeys can help you:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                "Process the emotional adjustment when food stops feeling like a comfort",
                "Navigate identity changes as your body shifts faster than your self-image",
                "Work through guilt or shame around using medication to support your health",
                "Respond to external judgment or commentary without internalising it",
                "Build sustainable habits alongside the medical treatment, not instead of it",
                "Celebrate the non-scale victories that your prescriber does not have time to hear",
                "Sit with the grief of a changed relationship with food, without being rushed past it",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "10px",
                    fontSize: "0.97rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.78)",
                  }}
                >
                  <span
                    style={{
                      color: "#c9a84c",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    &bull;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Section 9: Data sovereignty ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "60px",
              marginBottom: "20px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Your Journey Data Belongs to You &mdash; Not an Algorithm
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            There is a category of harm in the health-tech industry that rarely
            gets discussed: what happens to the intimate data you share about
            your body, your eating, and your emotional life. When you disclose
            to a free app that you overate last night because you were lonely,
            that information enters a commercial data infrastructure. It may
            influence the advertisements you see. It may be used to train future
            models. At minimum, it sits on servers you do not control, governed
            by terms of service you almost certainly have not read and cannot
            meaningfully negotiate.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            MEOK operates on a data sovereignty model. Your memory is yours.
            MEOK does not train on your conversations. Your disclosures about
            your body, your struggles, and your relationship with food do not
            feed a commercial pipeline. They serve only you.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              marginBottom: "20px",
            }}
          >
            For people navigating something as intimate as their relationship
            with food and their body, this is not a minor detail. Being truly
            honest requires feeling truly safe. And feeling truly safe requires
            knowing that what you share will not be commodified. Sovereignty
            &mdash; the knowledge that your story belongs to you and no one
            else &mdash; is the foundation of that safety.
          </p>

          {/* ── FAQ Section ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "72px",
              marginBottom: "32px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {[
              {
                q: "Can AI actually support a weight loss journey without being judgmental?",
                a: "Yes. MEOK is built on a Maternal Covenant that prohibits any shaming, diet-culture language, or body-negative framing. The AI tracks patterns, celebrates non-scale victories, and holds space for setbacks without assigning blame or pushing punishing advice. It is a companion, not a critic.",
              },
              {
                q: "How does MEOK help with emotional eating?",
                a: "The Healer archetype within MEOK is designed to explore the emotional landscape around food. It helps you identify triggers, notice patterns, and process difficult feelings without redirecting you straight to calories or restriction. Emotional eating is treated as a communication from your body, not a moral failing.",
              },
              {
                q: "Does MEOK support people using GLP-1 medications like Ozempic or Mounjaro?",
                a: "Yes. MEOK is not a medical device and does not advise on dosing or prescribing, but it offers significant emotional and psychological support for people navigating GLP-1 treatment. Many people on these medications experience unexpected emotions around food, identity, and body image. MEOK helps process all of that with sovereignty and without shame. Always work with your prescribing clinician for medical guidance.",
              },
              {
                q: "What are non-scale victories and why does MEOK track them?",
                a: "Non-scale victories are measurable improvements in wellbeing that have nothing to do with a number on a scale \u2014 things like sleeping better, having more energy, feeling confident in a favourite outfit, or walking further without breathlessness. MEOK\u2019s sovereign memory tracks and celebrates these wins because they are often better predictors of long-term success than weight alone.",
              },
              {
                q: "Will MEOK remember my journey from session to session?",
                a: "Yes. Sovereign memory means MEOK builds a longitudinal picture of your journey over weeks and months. It remembers what you have shared about your triggers, your progress, your setbacks, and your goals. You never have to re-explain your story. The AI arrives already knowing you \u2014 which is one of the most powerful forms of support there is.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(245,240,232,0.1)",
                  paddingBottom: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#f5f0e8",
                    marginBottom: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.75)",
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center" as const,
              margin: "0 0 80px",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "#c9a84c",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              Begin Your Journey
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                marginBottom: "20px",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              You Deserve Support That Does Not Come With Conditions
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.72)",
                maxWidth: "520px",
                margin: "0 auto 36px",
              }}
            >
              MEOK meets you where you are &mdash; not where a diet industry
              thinks you should be. No shame. No judgment. Just consistent,
              sovereign support for the journey you are actually on. Begin with
              the Birth Ceremony and introduce yourself to an AI that will
              remember everything you share, and never once use it against you.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                padding: "16px 40px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.03em",
                textDecoration: "none",
              }}
            >
              Begin Your Birth Ceremony &rarr;
            </Link>
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(245,240,232,0.38)",
                marginTop: "20px",
                marginBottom: 0,
              }}
            >
              MEOK is not a medical device. It does not replace your GP,
              dietitian, or prescribing clinician. For medical weight management
              advice, please consult a qualified healthcare professional.
            </p>
          </div>

          {/* ── Related posts ── */}
          <div style={{ marginBottom: "80px" }}>
            <p
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(245,240,232,0.4)",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-eating-disorders",
                  title: "AI for Eating Disorders",
                  desc: "Compassionate AI support for complex relationships with food",
                },
                {
                  href: "/blog/ai-for-weight-loss",
                  title: "AI for Weight Loss",
                  desc: "Can an AI companion support your health goals?",
                },
                {
                  href: "/blog/ai-for-weight-stigma",
                  title: "AI for Weight Stigma",
                  desc: "Processing the emotional weight of weight stigma",
                },
                {
                  href: "/blog/ai-for-weight-management",
                  title: "AI for Weight Management",
                  desc: "Sustainable approaches to long-term weight management",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  title: "The Maternal Covenant Explained",
                  desc: "The values architecture that makes MEOK different",
                },
                {
                  href: "/blog/ai-for-habit-building",
                  title: "AI for Habit Building",
                  desc: "How sovereign AI supports the habits that actually stick",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  style={{
                    display: "block",
                    backgroundColor: "rgba(245,240,232,0.04)",
                    border: "1px solid rgba(245,240,232,0.09)",
                    borderRadius: "10px",
                    padding: "20px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      marginBottom: "6px",
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(245,240,232,0.5)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {post.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>
    </>
  );
}
