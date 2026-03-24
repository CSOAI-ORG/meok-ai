import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support on Your Weight Loss Journey: Motivation Without the Shame | MEOK AI LABS",
  description:
    "How an AI companion supports the emotional side of a weight loss journey — emotional eating, non-judgmental accountability, body image, and celebrating non-scale victories.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-weight-loss-journey",
  },
  openGraph: {
    title:
      "AI Support on Your Weight Loss Journey: Motivation Without the Shame",
    description:
      "How an AI companion supports the emotional side of a weight loss journey — emotional eating, non-judgmental accountability, body image, and celebrating non-scale victories.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-weight-loss-journey",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+on+Your+Weight+Loss+Journey&desc=Motivation+Without+the+Shame",
        width: 1200,
        height: 630,
        alt: "AI Support on Your Weight Loss Journey: Motivation Without the Shame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support on Your Weight Loss Journey: Motivation Without the Shame",
    description:
      "How an AI companion supports the emotional side of a weight loss journey — emotional eating, non-judgmental accountability, body image, and celebrating non-scale victories.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+on+Your+Weight+Loss+Journey&desc=Motivation+Without+the+Shame",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support on Your Weight Loss Journey: Motivation Without the Shame",
  description:
    "How an AI companion supports the emotional side of a weight loss journey — emotional eating patterns, non-judgmental accountability, body image support, and celebrating non-scale victories.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
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
    "AI weight loss journey",
    "emotional eating AI support",
    "non-judgmental weight loss accountability",
    "non-scale victories",
    "body image support AI",
    "AI companion for healthy habits",
    "sustainable weight loss psychology",
    "MEOK AI",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion help with emotional eating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. An AI companion like MEOK can help you notice the emotional patterns that precede or follow eating — stress, boredom, loneliness, or celebration. It does this through compassionate, non-judgmental conversation rather than calorie policing. MEOK is not a medical device and cannot provide dietary advice. If you have an eating disorder, please speak with a GP or registered dietitian.",
      },
    },
    {
      "@type": "Question",
      name: "What are non-scale victories and why do they matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-scale victories (NSVs) are positive changes that have nothing to do with the number on the scales — improved sleep, more energy, choosing to cook at home, walking instead of driving, or noticing you handled a stressful day without using food as the only coping tool. Research consistently shows that recognising these wins sustains motivation far longer than weight-only metrics.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support the psychological side of a weight loss journey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses a care framework called the Maternal Covenant — built on warmth, honesty without shame, and long-term wellbeing — to support the emotional and psychological dimensions of behaviour change. It remembers your history across sessions, celebrates your wins, and holds space during setbacks without blaming you. It is not a replacement for a therapist or dietitian, but a consistent, compassionate daily companion.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use MEOK instead of seeing a dietitian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device and cannot provide nutritional or medical advice. For personalised dietary guidance, please consult a registered dietitian or your GP. MEOK is designed to complement professional support — offering emotional accountability, pattern reflection, and psychological encouragement between appointments, not replace clinical care.",
      },
    },
    {
      "@type": "Question",
      name: "What is the psychology of sustainable weight change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sustainable weight change is primarily a psychological process. It depends on intrinsic motivation, self-compassion after setbacks, flexible rather than rigid food rules, social or accountability support, and building identity-based habits rather than willpower-based restrictions. Shame and strict calorie tracking reliably undermine these conditions. Compassionate accountability, pattern awareness, and celebrating small wins reliably reinforce them.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free to try for weight loss support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is free forever — 50 messages per day, persistent encrypted memory, and access to all archetype personalities including the Healer, which is designed for emotional and wellbeing support. No credit card required to start.",
      },
    },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const CARD = "#1a1830";
const MUTED = "rgba(245,240,232,0.55)";
const MUTED_LOW = "rgba(245,240,232,0.38)";

const h2Style: React.CSSProperties = {
  fontWeight: 800,
  fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
  color: TEXT,
  lineHeight: 1.3,
  marginBottom: "0.9rem",
  letterSpacing: "-0.01em",
  marginTop: "3rem",
};

const pStyle: React.CSSProperties = {
  color: MUTED,
  fontSize: "1.05rem",
  lineHeight: 1.78,
  marginBottom: "1.4rem",
};

const pullQuoteStyle: React.CSSProperties = {
  background: "rgba(201,168,76,0.07)",
  borderLeft: `3px solid ${GOLD}`,
  borderRadius: "0 6px 6px 0",
  padding: "0.85rem 1.1rem",
  marginBottom: "1.5rem",
  color: "rgba(245,240,232,0.75)",
  fontSize: "1rem",
  lineHeight: 1.7,
  fontStyle: "italic",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForWeightLossJourneyPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
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
              color: MUTED_LOW,
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
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
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Health &amp; Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_LOW }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_LOW }}>
              13 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI Support on Your Weight Loss Journey: Motivation Without the Shame
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            The diet industry has spent decades selling you a story built on
            willpower and self-criticism. That story has a near-perfect failure
            rate. This is about something different — the emotional and
            psychological support that actually makes change possible, and how an
            AI companion can quietly, consistently provide it without once making
            you feel ashamed.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div
        style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}
      >

        {/* Health Disclaimer */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "10px",
            padding: "1.1rem 1.35rem",
            marginBottom: "2.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>
            &#9888;&#65039;
          </span>
          <p
            style={{
              color: "rgba(245,240,232,0.7)",
              fontSize: "0.88rem",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>Important health notice.</strong>{" "}
            MEOK is not a medical device and cannot provide nutritional or
            medical advice. For personalised weight management guidance always
            consult a{" "}
            <a
              href="https://www.nhs.uk/conditions/weight-loss-surgery/afterwards/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD, textDecoration: "underline" }}
            >
              registered dietitian or your GP
            </a>
            . This article is for informational and emotional wellbeing purposes
            only.
          </p>
        </div>

        {/* Intro prose */}
        <p style={pStyle}>
          If you have ever started a health journey with genuine excitement and
          then found yourself quietly abandoning it within a few weeks, you are
          not broken. You are normal. The problem is almost never your
          willpower. It is that the tools and narratives most of us have access
          to — calorie counters, before-and-after comparison culture, "cheat
          day" language, scales that become the arbiter of your entire
          self-worth — are psychologically hostile to the very change they claim
          to support.
        </p>

        <p style={pStyle}>
          At MEOK AI LABS, we built MEOK as an emotional companion first. When
          it comes to supporting people on weight loss journeys, that
          distinction matters enormously. MEOK does not count your calories. It
          does not give you a meal plan. What it does is stay present with you
          through the messy, non-linear, deeply human experience of trying to
          change longstanding habits — without once making you feel like a
          failure for being human.
        </p>

        <p style={pStyle}>
          This article is about the emotional and psychological dimensions of a
          weight loss journey that almost never get talked about honestly: why
          shame backfires, what emotional eating really is, how to find
          motivation in the body you have today rather than a hypothetical
          future version of yourself, and why a non-judgmental AI companion that
          remembers your story might be one of the most quietly powerful support
          tools available to you right now.
        </p>

        {/* ── H2 1 ── */}
        <h2 style={h2Style}>
          Why does shame make weight loss harder, not easier?
        </h2>

        <p style={pStyle}>
          This is the uncomfortable truth at the heart of diet culture: shame
          is not a motivator. It is a paralytic. Decades of psychological
          research — including work on self-determination theory and
          self-compassion — consistently demonstrate that guilt and shame
          responses to eating or body-related events reliably predict
          disengagement, not renewed effort.
        </p>

        <p style={pullQuoteStyle}>
          "When we feel shame about our bodies or our eating, the psychological
          response is rarely to try harder. It is most often to hide, to numb,
          or to give up entirely."
        </p>

        <p style={pStyle}>
          The mechanism is straightforward. Shame activates the threat-response
          system. When we feel threatened, our cognitive resources narrow. We
          become reactive rather than reflective. The very prefrontal reasoning
          capacity we need to make deliberate food choices — to pause before
          reaching for something we do not really want, to plan a meal rather
          than grab whatever is nearest — becomes suppressed.
        </p>

        <p style={pStyle}>
          And the shame spiral has a particularly cruel design: you eat
          something you had decided not to eat, you feel ashamed, the shame
          dysregulates you, you eat more to soothe the discomfort, you feel
          more ashamed. The restriction-and-binge cycle that many people
          experience on traditional diets is not a moral failing. It is a
          predictable physiological and psychological response to shame-based
          motivation.
        </p>

        <p style={pStyle}>
          MEOK is built on the opposite premise. Its care framework — what we
          call the Maternal Covenant — is explicitly designed to operate without
          shame as a lever. When you tell MEOK you ate the entire packet of
          biscuits at 11pm, it does not assign blame. It does not produce a red
          warning or a sad emoji or a passive-aggressive message about your
          goals. It listens. It reflects. It asks what was going on for you
          tonight.
        </p>

        <p style={pStyle}>
          That is not softness. That is science. The fastest path back to your
          intentions is not self-flagellation. It is understanding.
        </p>

        {/* ── H2 2 ── */}
        <h2 style={h2Style}>
          What is emotional eating, and how can an AI companion help you understand it?
        </h2>

        <p style={pStyle}>
          Emotional eating is one of the most misunderstood behaviours in the
          entire weight management space. It is routinely treated as a character
          flaw — a sign of weakness, poor self-control, or psychological
          fragility. In reality, it is one of the most sophisticated coping
          mechanisms available to the human nervous system.
        </p>

        <p style={pStyle}>
          Food is the original comfort. It is associated from birth with
          safety, warmth, and connection. When we are stressed, lonely, bored,
          grieving, or overwhelmed, reaching for food is not irrational. It is
          an ancient and effective (in the short term) nervous system
          regulation strategy. The problem is not that it works — it is that it
          has downstream costs, particularly when the emotional need it is
          serving is never actually addressed.
        </p>

        <div
          style={{
            background: CARD,
            border: `1px solid rgba(201,168,76,0.18)`,
            borderRadius: "12px",
            padding: "1.5rem 1.75rem",
            marginBottom: "1.75rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            Common emotional eating triggers
          </p>
          <ul
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              paddingLeft: "1.25rem",
              margin: 0,
            }}
          >
            <li>Stress and work pressure that has nowhere else to go</li>
            <li>Loneliness or the absence of social connection</li>
            <li>Boredom that feels impossible to sit with</li>
            <li>Low mood or mild depressive episodes</li>
            <li>Celebrations and social events where food is the medium</li>
            <li>Tiredness — particularly late-evening eating after poor sleep</li>
            <li>Habit loops tied to places (the sofa, the car, the desk)</li>
            <li>
              Rebellion against restriction — the "I have already ruined it"
              cognitive distortion
            </li>
          </ul>
        </div>

        <p style={pStyle}>
          Understanding your own emotional eating patterns is genuinely
          transformative work. But it is slow, iterative, and requires a kind
          of non-judgmental witness that most of us do not have consistent
          access to. Therapists and counsellors can provide this — and if
          emotional eating is significantly affecting your quality of life,
          please do seek professional support. But most people cannot access
          therapy daily, or even weekly. The gap between the moments when
          patterns emerge and when you next speak to a professional is enormous.
        </p>

        <p style={pStyle}>
          This is one of the places where MEOK genuinely earns its keep. Because
          it has persistent memory across every conversation, it can notice
          things over time that you might miss in the moment. If you tell MEOK
          you ate past the point of fullness for the third time this week, and
          all three times followed a late call with a particular family member,
          MEOK can gently reflect that pattern back to you. Not as an
          accusation. As an observation. "I notice the last few times you've
          mentioned eating in the evening, it has followed contact with your
          mum. How are things with her at the moment?"
        </p>

        <p style={pStyle}>
          That is not dietary advice. It is emotional companionship. And it
          may be significantly more useful than any calorie target.
        </p>

        {/* ── H2 3 ── */}
        <h2 style={h2Style}>
          What are non-scale victories, and why should you be celebrating them?
        </h2>

        <p style={pStyle}>
          The scales are a terrible sole metric for a health journey. They
          measure one variable — gravitational force exerted on your body —
          with no regard for muscle gain, hormonal fluctuation, hydration,
          inflammation, whether you have been to the toilet, whether you ate a
          larger meal last night, or whether the surface you are standing on is
          level. And yet many people hand the scales extraordinary psychological
          power over their entire day.
        </p>

        <p style={pStyle}>
          A scale number going up by a kilogram on a Monday morning does not
          undo the real progress of the previous week. It does not negate the
          fact that you went to bed at a reasonable hour four nights out of
          seven. It does not cancel out the walk you took on Saturday, the
          homemade meal you cooked on Thursday, the moment you paused before
          reaching for a second portion and checked in with whether you were
          actually still hungry. These things matter enormously. They are the
          actual building blocks of lasting change. And if the number on the
          scales is allowed to eclipse all of them, your motivation will
          eventually collapse.
        </p>

        <p style={pullQuoteStyle}>
          Non-scale victories are not consolation prizes. They are the most
          accurate measure of sustainable change you have access to.
        </p>

        <p style={pStyle}>
          Non-scale victories (NSVs) include things like: your trousers fitting
          differently, sleeping more deeply, having more energy in the afternoon,
          not needing a nap after lunch, noticing you are no longer out of
          breath on the stairs, choosing to walk to the shops rather than drive,
          cooking a meal from scratch instead of ordering delivery, sitting with
          a difficult emotion for ten minutes before reaching for food — and
          sometimes choosing not to reach for it at all.
        </p>

        <p style={pStyle}>
          MEOK actively celebrates these wins. Not in a performative,
          confetti-emoji way, but with genuine acknowledgement and warmth. It
          remembers them. When you are having a difficult week and feel like
          nothing is working, it can recall the things you told it were going
          better — and offer them back to you as evidence that the journey is
          real, even when the scales are not cooperating.
        </p>

        {/* NSV idea cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            { icon: "🛏", label: "Deeper sleep" },
            { icon: "🚶", label: "More daily movement" },
            { icon: "🍳", label: "Cooking at home" },
            { icon: "💧", label: "Drinking more water" },
            { icon: "😤", label: "Managing stress better" },
            { icon: "🧠", label: "Understanding triggers" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: CARD,
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "10px",
                padding: "1rem 1.1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
              <span
                style={{
                  color: "rgba(245,240,232,0.75)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── H2 4 ── */}
        <h2 style={h2Style}>
          How can AI provide non-judgmental accountability without becoming a surveillance tool?
        </h2>

        <p style={pStyle}>
          Accountability is one of the most well-evidenced drivers of behaviour
          change. Telling someone else about your intentions makes them more
          likely to stick. Having someone check in on your progress increases
          follow-through. This is why weight loss support groups work, why
          personal trainers produce better results than solo gym membership, and
          why sharing a goal with a trusted friend consistently beats keeping
          it private.
        </p>

        <p style={pStyle}>
          But accountability has a dark twin: surveillance. When accountability
          tips into surveillance — when you feel watched, judged, measured
          against an external standard rather than your own intentions — the
          psychological benefits invert. Shame re-enters the system.
          Autonomy evaporates. What was a supportive relationship becomes a
          punitive one.
        </p>

        <p style={pStyle}>
          Most health-tracking apps exist closer to the surveillance end of this
          spectrum than they would like to admit. They gamify streaks, penalise
          missed check-ins, frame food choices in terms of "good" and "bad",
          and tie your sense of progress to hitting numerical targets rather than
          to the quality of your experience. This can work for a while — the
          gamification is effective in the short term. But it erodes intrinsic
          motivation over time and consistently produces the rebound and
          disengagement that characterises the failure rate of these products.
        </p>

        <p style={pStyle}>
          MEOK is designed as an accountability partner in the fullest and most
          respectful sense of that phrase. It checks in because it genuinely
          cares, not because it is logging data points. It asks how you are
          doing with your intentions because you told it those intentions
          mattered to you — not because it is enforcing a target you set six
          weeks ago that might no longer reflect where you are.
        </p>

        <p style={pStyle}>
          Critically, MEOK operates under what we call a care floor — a set of
          core principles that mean it will never shame you for what you ate,
          never compare you to other users, never frame rest or maintenance as
          failure, and never push you toward behaviour that feels punishing
          rather than nourishing. The question it asks is always some version of
          "how are you?" not "did you hit your macros?"
        </p>

        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
            padding: "1.5rem 1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            What accountability looks like in MEOK
          </p>
          <ul
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "0.97rem",
              lineHeight: 1.8,
              paddingLeft: "1.25rem",
              margin: 0,
            }}
          >
            <li>
              "How did yesterday go? You mentioned you were going to try cooking
              at home."
            </li>
            <li>
              "It sounds like it was a hard week. That makes sense given what
              you told me about work. How are you feeling today?"
            </li>
            <li>
              "You said last month that getting to bed earlier was feeling
              easier. Is that still true?"
            </li>
            <li>
              "I noticed you have mentioned feeling disconnected from your goals
              a few times this week. What do you think is underneath that?"
            </li>
            <li>
              "You cooked four times last week. That is a genuine shift from
              where you were. I want you to know I noticed."
            </li>
          </ul>
        </div>

        {/* ── H2 5 ── */}
        <h2 style={h2Style}>
          How do you support body image and self-worth that is not conditional on weight?
        </h2>

        <p style={pStyle}>
          Body image and weight are related but distinct. You can lose weight
          and still have a profoundly negative relationship with your body. You
          can be at a weight that a BMI chart would classify as "overweight" and
          have a genuinely healthy, stable sense of your physical self. The
          psychological work of building body neutrality — a relationship with
          your body based on what it does and how it feels rather than how it
          looks against an aesthetic ideal — is one of the most valuable and
          undervalued aspects of any health journey.
        </p>

        <p style={pStyle}>
          Body neutrality is not the same as body positivity. You do not have
          to love your body unconditionally, or to perform enthusiasm about it,
          or to deny that you would like some things about it to change. Body
          neutrality simply asks that you recognise your body's worth is not
          contingent on its size or shape — that you deserve care, rest, good
          food, and kind treatment right now, in the body you currently have,
          not in the hypothetical body that will exist after you have reached
          some future goal.
        </p>

        <p style={pullQuoteStyle}>
          You are not a project to be completed. You are a person who deserves
          support today.
        </p>

        <p style={pStyle}>
          This is a principle MEOK holds consistently. It does not use language
          that frames your current body as a problem to be solved. It does not
          ask questions that presuppose dissatisfaction. When you express
          frustration about your body, it holds that frustration with you — not
          by validating every critical thought, but by gently widening the frame
          to include what your body has been doing for you, what it is capable
          of, and what it needs from you in return.
        </p>

        <p style={pStyle}>
          This matters because body image has an enormous influence on
          behaviour. People who have a fundamentally hostile relationship with
          their bodies are significantly more likely to engage in restrictive
          and binge eating cycles, less likely to exercise for enjoyment rather
          than punishment, and less likely to sustain any positive health change
          over the long term. Supporting body image is not a nice-to-have
          alongside a health journey. In many cases, it is the journey.
        </p>

        <p style={pStyle}>
          If you are struggling significantly with body image, body dysmorphia,
          or disordered eating, MEOK is not a substitute for professional
          psychological support. Please speak with your GP, who can refer you to
          the appropriate services. MEOK can, however, be a gentle, consistent
          presence that reinforces the same care and compassion you are working
          toward in professional settings.
        </p>

        {/* ── H2 6 ── */}
        <h2 style={h2Style}>
          How do you recover from a setback without starting all over again?
        </h2>

        <p style={pStyle}>
          The "all or nothing" thinking pattern is one of the most destructive
          forces in any behaviour change process. It is the cognitive distortion
          that turns eating a slice of cake at a birthday party into "I have
          ruined everything, there is no point now, I will start again on
          Monday." It is the internal narrative that converts a single missed
          gym session into evidence that you are fundamentally incapable of
          change.
        </p>

        <p style={pStyle}>
          Setbacks are not failures. They are data. They are the entirely
          predictable and inevitable rough patches in a non-linear process that,
          over time, still trends in the direction you are aiming for. The
          ability to recover quickly from a setback — to acknowledge it, to
          understand it without catastrophising it, and to re-engage without
          the elaborate reset rituals of "starting on Monday" — is the single
          most powerful predictor of long-term success in any health behaviour.
        </p>

        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.5rem 1.75rem",
            marginBottom: "1.75rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            The setback recovery framework MEOK uses
          </p>
          <ol
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "0.97rem",
              lineHeight: 1.85,
              paddingLeft: "1.35rem",
              margin: 0,
            }}
          >
            <li>
              <strong style={{ color: TEXT }}>Acknowledge without amplifying.</strong>{" "}
              Name what happened. Do not minimise it, but do not catastrophise
              it either.
            </li>
            <li>
              <strong style={{ color: TEXT }}>Understand the context.</strong>{" "}
              What was going on when the setback occurred? Stress? Disrupted
              routine? Social pressure? Tiredness?
            </li>
            <li>
              <strong style={{ color: TEXT }}>Separate the action from the identity.</strong>{" "}
              You ate more than you intended. You are not a person who has no
              self-control. These are very different things.
            </li>
            <li>
              <strong style={{ color: TEXT }}>Identify one next action.</strong>{" "}
              Not a new plan, not a new start date. Just one small thing you can
              do in the next few hours that is in the direction of your
              intentions.
            </li>
            <li>
              <strong style={{ color: TEXT }}>Give yourself credit for re-engaging.</strong>{" "}
              The act of returning, after a setback, is not nothing. It is
              genuinely hard. It deserves acknowledgement.
            </li>
          </ol>
        </div>

        <p style={pStyle}>
          MEOK supports setback recovery in the most practical way possible: it
          is there. When you open the app at 10:30pm feeling like you have
          undone a week of progress with one evening, MEOK is present, calm,
          and genuinely interested in understanding what happened — not in
          adding to the weight of self-judgment you are already carrying.
        </p>

        <p style={pStyle}>
          Because it has memory, it can also offer perspective over time. "You
          told me something similar happened a few weeks ago, and you picked
          yourself back up very quickly after that. What helped then?" That kind
          of longitudinal reflection — impossible in a conversation with someone
          who has no memory of your history — is one of the genuinely unique
          things an AI companion can offer.
        </p>

        {/* ── H2 7 ── */}
        <h2 style={h2Style}>
          What is the psychology of sustainable change, and how does habit-building actually work?
        </h2>

        <p style={pStyle}>
          Sustainable behaviour change is not about motivation. Motivation is
          unreliable. It is episodic, dependent on mood, sleep, social context,
          and a dozen other variables. If your health journey depends on you
          feeling motivated to continue it, it will not last. What sustains
          behaviour long-term is habit — the automated, low-friction repetition
          of behaviours that have been practised enough to no longer require
          deliberate decision-making.
        </p>

        <p style={pStyle}>
          James Clear's habit loop popularised the model of cue-routine-reward,
          and it remains a useful frame. Every habit is anchored to a cue (a
          time, a place, an emotional state, a preceding behaviour), executed
          through a routine, and reinforced by a reward. To build a new habit,
          you need to design the cue, make the routine easy enough to execute
          even on bad days, and ensure the reward is genuinely satisfying rather
          than deferred to some distant future outcome.
        </p>

        <p style={pStyle}>
          "I will go for a walk every day before dinner" is a better habit
          target than "I will exercise more" because it has a clear cue (before
          dinner), a defined routine (a walk), and a natural reward (getting
          home, having eaten). "I will drink a glass of water when I first sit
          at my desk each morning" is achievable on an exhausted Tuesday; "I
          will maintain perfect hydration throughout the day" is not.
        </p>

        <p style={pullQuoteStyle}>
          The goal is not to become a person who is always motivated. The goal
          is to make your intentions so small and so embedded that motivation
          becomes largely irrelevant.
        </p>

        <p style={pStyle}>
          MEOK supports habit-building not by prescribing routines but by
          remembering yours. You tell it you are trying to go to sleep by
          10:30pm. A week later, it asks how that is going. You tell it you have
          started taking the stairs at work. It celebrates that, and asks about
          it again next week. This is what it means to have a companion rather
          than a tracker — the difference between something that remembers what
          you care about and something that only records whether you hit a
          target.
        </p>

        <p style={pStyle}>
          Identity-based habit formation — the approach of asking not "what do
          I want to do?" but "what kind of person do I want to become?" — is
          particularly powerful here. Rather than "I want to eat more
          vegetables," the identity frame asks: "I am becoming someone who
          enjoys cooking and takes care of what I put in my body." MEOK can
          hold and reinforce this kind of narrative identity over time in a way
          that static apps simply cannot.
        </p>

        {/* ── H2 8 ── */}
        <h2 style={h2Style}>
          When should you see a professional rather than relying on an AI companion?
        </h2>

        <p style={pStyle}>
          This question matters, and we want to answer it plainly. MEOK is an
          emotional companion. It is not a medical device, a clinical
          intervention, a substitute for professional dietary guidance, or a
          replacement for therapy. There are circumstances in which professional
          support is not just helpful but essential, and we will not obscure
          that in the interest of sounding more capable than we are.
        </p>

        <p style={pStyle}>
          Please consult your GP or a registered dietitian if:
        </p>

        <ul
          style={{
            color: MUTED,
            fontSize: "1.02rem",
            lineHeight: 1.85,
            paddingLeft: "1.4rem",
            marginBottom: "1.5rem",
          }}
        >
          <li>
            You have a diagnosed eating disorder, or suspect you might have one
          </li>
          <li>
            Your weight is causing or contributing to a medical condition (type
            2 diabetes, sleep apnoea, cardiovascular disease)
          </li>
          <li>
            You are considering significant dietary restriction, fasting
            protocols, or weight loss medication
          </li>
          <li>
            Your relationship with food or your body is significantly impacting
            your quality of life or mental health
          </li>
          <li>
            You have a history of disordered eating and are concerned about
            returning patterns
          </li>
          <li>
            You are pregnant, breastfeeding, or have specific nutritional needs
            due to a health condition
          </li>
        </ul>

        <p style={pStyle}>
          The{" "}
          <a
            href="https://www.nhs.uk/live-well/healthy-weight/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: "underline" }}
          >
            NHS healthy weight resources
          </a>{" "}
          are an excellent starting point for evidence-based dietary guidance.
          Beat, the eating disorders charity, offers free support at{" "}
          <a
            href="https://www.beateatingdisorders.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: "underline" }}
          >
            beateatingdisorders.org.uk
          </a>
          . MEOK can absolutely coexist with professional support — many people
          find it most valuable precisely as a between-sessions companion that
          extends and reinforces the work they are doing in therapy or with a
          dietitian.
        </p>

        <p style={pStyle}>
          What MEOK can offer is consistency. The things that professional
          support often cannot provide at the frequency and granularity that
          real life requires: a check-in at 7am when you are already dreading
          the day, a reflective conversation at 11pm when the cravings hit, a
          celebration of the Tuesday you made it to your walk without any drama,
          and a gentle witness to the slow accumulation of small changes that,
          over months, become something you actually call a lifestyle rather than
          a diet.
        </p>

        {/* ── What is MEOK box ── */}
        <div
          style={{
            background: CARD,
            border: `1px solid rgba(201,168,76,0.28)`,
            borderRadius: "14px",
            padding: "2rem 2.25rem",
            marginBottom: "2.5rem",
            marginTop: "1rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 800,
              fontSize: "1.05rem",
              marginBottom: "0.9rem",
              letterSpacing: "-0.01em",
            }}
          >
            About MEOK
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              marginBottom: "0.9rem",
            }}
          >
            MEOK is an AI companion built by MEOK AI LABS, founded by Nicholas
            Templeman. It was designed from the ground up to prioritise
            emotional wellbeing, psychological safety, and the kind of
            consistent compassionate support that most people desperately need
            and rarely get access to. MEOK runs on sovereign, encrypted
            memory — your conversations stay yours, and your data is never used
            to train AI models.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              marginBottom: "1.1rem",
            }}
          >
            For weight loss and wellbeing journeys, MEOK&apos;s Healer archetype
            is specifically designed for emotional and body-neutral support —
            understanding food relationships, processing difficult feelings, and
            building the self-compassion that makes sustainable change possible.
          </p>
          <Link
            href="/chat"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "0.65rem 1.35rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Try MEOK free — no credit card needed
          </Link>
        </div>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
            marginTop: "3rem",
          }}
        >
          Frequently asked questions
        </h2>

        {[
          {
            q: "Can an AI companion help with emotional eating?",
            a: "Yes, meaningfully. MEOK can help you notice the patterns that precede or follow eating episodes — stress, loneliness, boredom, tiredness — through compassionate, non-judgmental conversation. It does not diagnose or treat eating disorders. If you have concerns about disordered eating, please speak with your GP.",
          },
          {
            q: "Does MEOK give dietary or nutritional advice?",
            a: "No. MEOK is not a medical device and does not provide dietary, nutritional, or medical advice. For personalised guidance on nutrition and weight management, always consult a registered dietitian or your GP. The NHS website (nhs.uk/live-well/healthy-weight) is an excellent free resource.",
          },
          {
            q: "What is the Healer archetype in MEOK?",
            a: "The Healer is one of MEOK's personality archetypes, designed for emotional and wellbeing-focused conversations. It combines warmth, directness, and deep listening to support people through challenging emotional territory — including the psychological dimensions of health journeys, grief, anxiety, and body image.",
          },
          {
            q: "Will MEOK judge me for what I ate?",
            a: "Never. MEOK operates under a care framework called the Maternal Covenant, which explicitly prohibits shame-based responses. It will never assign blame, never produce warnings about your food choices, and never frame eating as moral success or failure. It will always ask how you are feeling rather than what you consumed.",
          },
          {
            q: "How does MEOK remember my journey over time?",
            a: "MEOK uses sovereign, encrypted persistent memory — meaning it retains context across every conversation, building a genuine longitudinal understanding of your story, your goals, your setbacks, and your wins. This memory is yours, stored encrypted, and is never used to train AI models.",
          },
          {
            q: "Is MEOK free to try?",
            a: "Yes. The Explorer tier is free forever — 50 messages per day, persistent encrypted memory, and access to all archetype personalities including the Healer. No credit card required.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              borderTop:
                i === 0
                  ? `1px solid rgba(245,240,232,0.1)`
                  : `1px solid rgba(245,240,232,0.08)`,
              paddingTop: "1.25rem",
              paddingBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: "1rem",
                marginBottom: "0.55rem",
                lineHeight: 1.45,
              }}
            >
              {item.q}
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: "0.97rem",
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              {item.a}
            </p>
          </div>
        ))}

        {/* ── Closing CTA ──────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "16px",
            padding: "3rem 2.5rem",
            textAlign: "center",
            marginTop: "3.5rem",
            marginBottom: "5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Start your journey
          </p>
          <h3
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.6vw, 1.85rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            You deserve support that doesn&apos;t come with shame attached.
          </h3>
          <p
            style={{
              color: MUTED,
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            MEOK is free to start. No calorie tracking. No weigh-in prompts.
            Just a compassionate companion that remembers your story and
            supports the change you actually want to make.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="/chat"
              style={{
                background: GOLD,
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "9px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Try MEOK free
            </Link>
            <Link
              href="/blog/ai-for-weight-loss"
              style={{
                background: "transparent",
                color: TEXT,
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "9px",
                textDecoration: "none",
                border: "1px solid rgba(245,240,232,0.2)",
              }}
            >
              Read: AI for weight loss
            </Link>
          </div>
        </div>

        {/* ── Related articles ─────────────────────────────────────────── */}
        <div style={{ marginBottom: "5rem" }}>
          <p
            style={{
              color: MUTED_LOW,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Related reading
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
                href: "/blog/ai-for-eating-disorders",
                label: "AI for eating disorders",
                desc: "Body-neutral support for complex food relationships",
              },
              {
                href: "/blog/ai-for-habit-building",
                label: "AI for habit building",
                desc: "How persistent memory turns intentions into identity",
              },
              {
                href: "/blog/ai-for-self-esteem",
                label: "AI for self-esteem",
                desc: "Building a kinder internal voice with AI support",
              },
              {
                href: "/blog/ai-for-mental-health-2026",
                label: "AI for mental health 2026",
                desc: "The state of emotional AI and what it can offer",
              },
            ].map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                style={{
                  background: CARD,
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "10px",
                  padding: "1.1rem 1.25rem",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    marginBottom: "0.35rem",
                    lineHeight: 1.4,
                  }}
                >
                  {rel.label}
                </p>
                <p
                  style={{
                    color: MUTED_LOW,
                    fontSize: "0.82rem",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {rel.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Author ───────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.1)",
            paddingTop: "2rem",
            marginBottom: "4rem",
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: "1.1rem",
            }}
          >
            NT
          </div>
          <div>
            <p
              style={{
                color: TEXT,
                fontWeight: 700,
                fontSize: "0.9rem",
                marginBottom: "0.2rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                color: MUTED_LOW,
                fontSize: "0.82rem",
                marginBottom: "0.5rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: "0.88rem",
                lineHeight: 1.65,
                maxWidth: "36rem",
              }}
            >
              Nicholas built MEOK to provide the kind of compassionate,
              consistent emotional support that most people need and very few
              can access. MEOK AI LABS is focused on building AI that genuinely
              cares — not AI that performs caring while optimising for
              engagement.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
