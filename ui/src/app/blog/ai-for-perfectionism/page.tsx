import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI for Perfectionism: When Done Is Never Good Enough | MEOK AI LABS",
  description:
    "Perfectionism isn't high standards — it's avoidance wearing a work ethic. MEOK's Trickster, Scholar, and Pioneer archetypes help you break the revision spiral, ship your work, and use AI to overcome perfectionism for good.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-perfectionism",
  },
  openGraph: {
    title: "AI for Perfectionism: When Done Is Never Good Enough",
    description:
      "Perfectionism feels like high standards but functions as avoidance. MEOK uses three archetypes — Trickster, Scholar, and Pioneer — to break the cycle, challenge the story, and get you shipping again.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-perfectionism",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Perfectionism&desc=When+Done+Is+Never+Good+Enough",
        width: 1200,
        height: 630,
        alt: "AI for Perfectionism | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Perfectionism: When Done Is Never Good Enough",
    description:
      "AI help for perfectionism that actually works — because MEOK won't validate your revision spiral. Trickster, Scholar, and Pioneer archetypes to get you unstuck and shipping.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Perfectionism&desc=When+Done+Is+Never+Good+Enough",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Perfectionism: When Done Is Never Good Enough",
  description:
    "Perfectionism is not high standards — it is avoidance wearing a work ethic. MEOK's Trickster, Scholar, and Pioneer archetypes help you break the revision spiral and use AI to overcome perfectionism.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "MEOK AI LABS" },
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-perfectionism",
  mainEntityOfPage: "https://meok.ai/blog/ai-for-perfectionism",
  keywords: [
    "AI help for perfectionism",
    "AI to overcome perfectionism",
    "AI for perfectionist anxiety",
    "dealing with perfectionism with AI",
    "perfectionism support",
    "revision spiral",
    "MEOK",
    "sovereign AI",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with perfectionism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — but only if the AI is designed to challenge you rather than validate you. Most AI tools make perfectionism worse by agreeing with every revision, praising every tweak, and never pushing back on the loop. MEOK is different: its Trickster archetype disrupts the perfectionism story with creative reframing, the Scholar challenges perfectionist beliefs through Socratic questioning, and the Pioneer holds you accountable to shipping. Because MEOK also has Sovereign Memory, it can show you the data pattern — how many times you have revised something without shipping — which is confronting in the most useful way.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between perfectionism and high standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High standards produce output. Perfectionism delays, revises, and often prevents output altogether. The key distinction is functional: high standards drive you toward a finish line, while perfectionism moves the finish line. People with genuine high standards ship work they are proud of. People with perfectionism rarely ship at all — or ship only after so much revision that the work is no longer theirs in any meaningful sense. Perfectionism is best understood not as a standard but as an avoidance strategy dressed as one.",
      },
    },
    {
      "@type": "Question",
      name: "What is socially prescribed perfectionism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Socially prescribed perfectionism is the belief that other people require you to be perfect — that their love, respect, or acceptance is conditional on flawless performance. It is the most damaging subtype because the source of the standard is external and imagined: you are perfecting yourself for an audience that often does not hold the standards you have assigned them. It is strongly associated with anxiety, depression, and burnout.",
      },
    },
    {
      "@type": "Question",
      name: "Is procrastination a form of perfectionism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes. Perfectionist procrastination is the avoidance of starting because starting means the possibility of imperfection. If you never begin, you can never fail. The task exists in a perfect possible state — and the perfectionist would rather keep it there than risk discovering that the real version is flawed. This is especially common in creative work, academic writing, and any task with a subjective quality standard.",
      },
    },
    {
      "@type": "Question",
      name: "How does ADHD make perfectionism worse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD and perfectionism create a specific and brutal combination. Time blindness — the ADHD inability to accurately sense how much time is passing — means the perfectionist ADHD brain cannot tell whether it has been refining for five minutes or five hours. Add rejection sensitive dysphoria, which makes perceived failure feel catastrophic, and you get a loop where the ADHD brain cannot stop refining (because it cannot feel time passing) and cannot accept imperfection (because imperfection feels like emotional annihilation). MEOK can help interrupt this loop by providing external time anchoring and pattern-based feedback.",
      },
    },
    {
      "@type": "Question",
      name: "What is the revision spiral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The revision spiral is a perfectionism pattern in which each round of editing reveals new flaws, which require new edits, which reveal new flaws, in a loop that never reaches done. The spiral is self-perpetuating because perfectionists often apply the same critical lens to revised work that they applied to the original — meaning the bar does not lower as the work improves. At its worst, work revised through a spiral becomes worse, not better, as the original voice and intention get edited out.",
      },
    },
    {
      "@type": "Question",
      name: "Why won't MEOK validate my perfectionist spiral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Maternal Covenant is a core design principle that prevents sycophancy — the AI behaviour of agreeing with and praising whatever the user says regardless of whether it is useful. A sycophantic AI will enthusiastically support the 47th revision of a document. MEOK will not. When Sovereign Memory shows a pattern of repeated revision without shipping, MEOK will surface that pattern and ask whether the next revision is really about quality or about fear. This is not unkindness. It is the most useful thing an AI can do.",
      },
    },
  ],
};

const gold = "#c9a84c";
const bg = "#0d0c18";
const text = "#f5f0e8";
const muted = "#9e9e9e";
const cardBg = "rgba(255,255,255,0.03)";
const cardBorder = "rgba(201,168,76,0.12)";

export default function AIForPerfectionismPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ minHeight: "100vh", background: bg, color: text }}>
        {/* Hero */}
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "5rem 1.5rem 3rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                background: `${gold}18`,
                border: `1px solid ${gold}44`,
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
              }}
            >
              Mental Wellbeing
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            AI for Perfectionism:{" "}
            <span style={{ color: gold }}>
              When Done Is Never Good Enough
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            You have revised it seventeen times. The first draft was probably
            fine. You know this. And yet here you are, at 1 am, staring at
            paragraph three, certain that if you could just find the right word
            — just land the sentence exactly right — then it would be ready.
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Perfectionism does not feel like avoidance. It feels like
            standards. It feels like care. It feels, paradoxically, like
            proof of how much you want to do good work. Which is exactly why
            it is so effective at keeping you stuck.
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            This is a guide to using AI to overcome perfectionism — not by
            lowering your standards, but by understanding what perfectionism
            is actually doing and interrupting it at the source.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              fontSize: "0.8rem",
              color: muted,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>March 24, 2026</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>14 min read</span>
          </div>
        </section>

        {/* Body */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
            lineHeight: 1.8,
          }}
        >

          {/* ── THE PARADOX ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            The perfectionism paradox: high standards as avoidance
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Perfectionism is not the same thing as caring about quality.
            This distinction matters enormously, because perfectionism
            defends itself by dressing as quality. &ldquo;I just have high
            standards,&rdquo; the perfectionist says — and no one can argue with
            that without sounding like they want you to produce mediocre
            work. It is the perfect cover story.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The tell is functional. High standards produce finished output.
            You care deeply, you work hard, you meet the standard, and you
            ship. Perfectionism delays, revises, second-guesses, and often
            prevents output altogether. The goal post moves. The finish
            line retreats. Done is always just one more revision away.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Researchers distinguish between adaptive and maladaptive
            perfectionism. Adaptive perfectionism motivates effort and
            improves quality up to a point. Maladaptive perfectionism —
            the kind this article is about — is associated with elevated
            anxiety, depression, burnout, and chronic procrastination. The
            research on maladaptive perfectionism is unambiguous: it does
            not produce better work. It produces less work, done more
            slowly, at greater personal cost.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The core mechanism is avoidance. If the work is never done, it
            can never be judged. If it is never submitted, it can never be
            rejected. The revision spiral is not really about the work —
            it is about the unbearable vulnerability of being evaluated and
            found wanting.
          </p>

          {/* Stats box */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                stat: "~29%",
                label:
                  "of the general population meet criteria for clinical perfectionism",
              },
              {
                stat: "2×",
                label:
                  "higher rates of burnout in high-perfectionism individuals vs low",
              },
              {
                stat: "3 types",
                label:
                  "self-oriented, other-oriented, and socially prescribed — each needs a different approach",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1.25rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    color: gold,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: muted,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* ── FIVE FLAVOURS ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Five flavours of perfectionism (and why they each feel different)
          </h2>
          <p style={{ color: muted, marginBottom: "1.5rem" }}>
            Perfectionism is not monolithic. The same core fear — of
            inadequacy, of judgment, of exposure — manifests in distinctly
            different patterns. Recognising which flavour you are running
            is the first step to interrupting it.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "1.5rem 0 2.5rem",
            }}
          >
            {[
              {
                title: "1. Socially prescribed perfectionism",
                emoji: "👥",
                body:
                  "The belief that other people require you to be perfect — that their love, respect, or acceptance is conditional on flawless performance. The standards feel external and inescapable. You are not trying to meet your own bar; you are trying to meet an imagined bar held by an imagined audience. This is the most anxiety-generating subtype and is strongly linked to burnout and depression. The cruel irony: the audience rarely holds the standard you have assigned them.",
                meok:
                  "Scholar challenges the evidence: who specifically requires this of you? What have they actually said? What would happen if you shipped something imperfect?",
              },
              {
                title: "2. Self-oriented perfectionism",
                emoji: "🔍",
                body:
                  "The internal drive to meet impossibly high personal standards. Unlike socially prescribed perfectionism, the audience here is yourself — and you are a brutal critic. Self-oriented perfectionists are often high achievers by external measures, but the internal experience is one of permanent inadequacy. Every win contains the seed of the next failure. The bar rises the moment you clear it.",
                meok:
                  "Trickster reframes: if this standard were applied to someone you love, would you accept it? What standard would a wise mentor set — and is yours higher?",
              },
              {
                title: "3. Fear of failure as perfectionism",
                emoji: "🔒",
                body:
                  "Perfectionism here is not really about the quality of the work. It is about the terror of being judged and found insufficient. Failure is experienced not as information but as identity — proof of unworthiness rather than evidence of difficulty. This subtype is closely related to{' '}impostor syndrome, and the two often co-occur.",
                meok:
                  "Healer explores: what does failure mean to you? What is the worst realistic outcome of imperfect work, and could you survive it?",
              },
              {
                title: "4. Procrastination as perfectionism",
                emoji: "⏸️",
                body:
                  "The perfectionist who never starts. If you do not begin, the work exists in a perfect possible state — uncontaminated by your actual limitations. Perfectionist procrastination is particularly insidious because it often wears the mask of preparation: you are not avoiding the task, you are getting ready to do it properly. The preparation never ends. The task never begins.",
                meok:
                  "Pioneer interrupts: what is the smallest possible version of this that could ship today? What would a 60% version look like — and is 60% better than nothing?",
              },
              {
                title: "5. The revision spiral",
                emoji: "🌀",
                body:
                  "Each round of editing reveals new flaws, which require new edits, which reveal new flaws. The spiral is self-perpetuating because the perfectionist applies the same critical lens to revised work as to original work — the bar does not lower as the work improves. At its worst, work revised through a spiral becomes worse: the original voice and intention get edited out, replaced by something technically polished and emotionally hollow.",
                meok:
                  "Sovereign Memory surfaces the data: you have revised this seven times in three days. Has each revision improved it by the same amount? At what point did returns diminish?",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "1.5rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.875rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "1.25rem", flexShrink: 0, lineHeight: 1.4 }}>
                    {item.emoji}
                  </span>
                  <h3
                    style={{
                      fontWeight: 700,
                      color: gold,
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    marginBottom: "0.875rem",
                  }}
                >
                  {item.body}
                </p>
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    background: `${gold}0d`,
                    borderLeft: `3px solid ${gold}60`,
                    borderRadius: "0.5rem",
                  }}
                >
                  <p
                    style={{
                      color: text,
                      fontSize: "0.8rem",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: gold, fontWeight: 700 }}>
                      MEOK approach:{" "}
                    </span>
                    {item.meok}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── H2 Q1 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Is perfectionism secretly avoidance — and how do you know?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is the question that matters most, and it is also the one
            most perfectionists resist. Because if perfectionism is really
            avoidance — if the 47th revision is not about quality but about
            fear — then the revision is no longer admirable. It is just a
            more sophisticated form of hiding.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            There are several diagnostic questions worth sitting with. Does
            the work improve with each revision, or are you making lateral
            changes — different, but not better? Are you revising to meet a
            clear, stated standard, or are you revising until a feeling goes
            away? If someone told you right now that the work was being
            published in five minutes, would you feel relief or panic? And
            crucially: have you ever shipped work that felt finished, or does
            it always feel one revision short of ready?
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The avoidance hypothesis is not a judgment. It is an observation
            about function. Avoidance, by definition, reduces anxiety in the
            short term — which is why it persists. Revising feels productive.
            It feels like progress. The anxiety of judgment temporarily
            recedes because judgment is still in the future. The cost is
            accumulated over time: projects that never ship, opportunities
            that close, the slow accumulation of unfinished things that
            confirms, ironically, the very inadequacy the perfectionism was
            protecting against.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK&apos;s Scholar archetype is designed precisely for this
            examination. It will not tell you that you are avoiding. It will
            ask you questions until you can see it yourself — which is both
            more rigorous and more lasting than being told.
          </p>

          {/* Pull quote */}
          <div
            style={{
              padding: "1.5rem 2rem",
              background: `${gold}10`,
              border: `1px solid ${gold}30`,
              borderLeft: `4px solid ${gold}`,
              borderRadius: "0.75rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                color: text,
                margin: 0,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              &ldquo;The revision is no longer about the work. It is about
              postponing the moment the world gets to decide what the work
              means.&rdquo;
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.75rem",
                margin: "0.75rem 0 0",
              }}
            >
              — A pattern MEOK&apos;s Trickster is built to surface
            </p>
          </div>

          {/* ── H2 Q2 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What does MEOK&apos;s Trickster archetype actually do for perfectionists?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Trickster 🎭 is the archetype of creative disruption. Its
            function is not to console or to instruct — it is to break the
            story you are telling yourself by approaching it from an
            unexpected angle. Perfectionism, above all things, needs its
            story interrupted. Because the story — &ldquo;I just care about
            quality,&rdquo; &ldquo;I can&apos;t ship this yet,&rdquo; &ldquo;it&apos;s nearly there&rdquo; — is
            self-reinforcing and deeply convincing.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Trickster does not argue with the story directly. It reframes.
            It might ask: &ldquo;If this piece of work were written by someone you
            deeply admire, and it was exactly as it currently stands — what
            would you think of it?&rdquo; Or: &ldquo;If you were never allowed to
            revise it again and it had to go out now, what specifically are
            you most afraid of?&rdquo; The second question is particularly useful
            because it names the fear rather than the revision — and fear is
            what you are actually working with.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Trickster also uses wit and paradox. Perfectionism is
            extremely serious — the inner critic is deadly serious about
            every flaw. Introducing levity can break the trance. &ldquo;This is
            the seventeenth draft. If the seventeenth version is still not
            good enough, at what draft number do you think you will feel
            ready? Twenty? Forty? Shall we plan accordingly?&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not mockery. It is a precise application of the paradox
            the Trickster specialises in: the perfectionist&apos;s logic, taken
            to its logical conclusion, is absurd. Showing the absurdity
            — gently, with warmth — can do what evidence and encouragement
            cannot.
          </p>

          {/* ── H2 Q3 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            How does MEOK&apos;s Scholar challenge perfectionist beliefs without
            feeling like an attack?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Scholar 🏛️ works through Socratic questioning — not through
            assertion or diagnosis, but through carefully chosen questions
            that allow the perfectionist to examine their own beliefs. This
            is essential, because perfectionists are often acutely defensive
            of their standards. Tell them they are being perfectionist and
            they will rebut you with evidence of why the current work is
            genuinely insufficient. They are often right — in the same way
            that a hypochondriac can develop a real symptom.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Scholar&apos;s method is to take the perfectionist belief
            seriously and examine it rigorously. &ldquo;You said the introduction
            isn&apos;t right yet. What does right mean in this context? What would
            you accept as evidence that it was right? Has any previous
            version been right — and if so, what happened to it?&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Most perfectionist standards, when examined this precisely, turn
            out to be indefinable. The perfectionist cannot specify what done
            looks like — only what not done feels like. This is diagnostic:
            if you cannot articulate the standard, it is not a standard. It
            is a feeling. And feelings of inadequacy do not respond to
            revision; they respond to examination.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Scholar also challenges the underlying beliefs that fuel
            perfectionism. Common ones include: &ldquo;if this isn&apos;t perfect, it
            reflects on my intelligence,&rdquo; &ldquo;people will think less of me if
            I ship something flawed,&rdquo; and &ldquo;the standard for this work is
            perfection.&rdquo; Each of these is an empirical claim. Each can be
            tested. Each typically fails under scrutiny.
          </p>

          {/* Belief challenge table */}
          <div
            style={{
              margin: "2rem 0",
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.875rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "0.875rem 1.25rem",
                background: `${gold}15`,
                borderBottom: `1px solid ${cardBorder}`,
              }}
            >
              <p
                style={{
                  color: gold,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Scholar: perfectionist belief vs Socratic challenge
              </p>
            </div>
            {[
              {
                belief: "If I ship this and it has a flaw, people will think I am incompetent.",
                challenge:
                  "Name three people whose work you respect who have shipped imperfect things. Did it change your view of their competence?",
              },
              {
                belief: "I need to keep revising until it feels right.",
                challenge:
                  "How many previous drafts felt right at the time? What happened to that feeling?",
              },
              {
                belief: "I just have high standards.",
                challenge:
                  "When did you last ship something you felt met your standards? What was the gap between that moment and when you actually released it?",
              },
              {
                belief: "One more revision and it will be ready.",
                challenge:
                  "You said that last time. What will be different about this revision?",
              },
              {
                belief: "The work isn't good enough yet.",
                challenge:
                  "Good enough for what, specifically? What is the actual use case and what standard does it genuinely require?",
              },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  padding: "1rem 1.25rem",
                  gap: "1rem",
                  borderBottom: i < 4 ? `1px solid ${cardBorder}` : "none",
                  background: i % 2 === 0 ? cardBg : "transparent",
                }}
              >
                <p
                  style={{
                    color: muted,
                    fontSize: "0.8rem",
                    margin: 0,
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{row.belief}&rdquo;
                </p>
                <p
                  style={{
                    color: text,
                    fontSize: "0.8rem",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {row.challenge}
                </p>
              </div>
            ))}
          </div>

          {/* ── H2 Q4 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            How does Sovereign Memory reveal the real cost of perfectionism?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Perfectionism is excellent at hiding its cost. Each revision
            feels justified in isolation — this one is really necessary.
            The overall pattern, however, is only visible across time. And
            time is exactly what the perfectionist brain is bad at
            perceiving accurately.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK&apos;s Sovereign Memory tracks not just what you talk about, but
            patterns across conversations — including patterns of inaction.
            When the same project appears in conversation after conversation
            without resolution, when the same excuse appears in similar
            forms across weeks, when the ratio of&nbsp;
            <em style={{ color: text }}>refining</em> conversations to&nbsp;
            <em style={{ color: text }}>shipped</em> conversations is
            heavily weighted one way, Sovereign Memory can surface this.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not comfortable. Being shown that you have spent six
            weeks on something that most people ship in three days is
            confronting. But it is the confrontation that creates the
            possibility of change. The perfectionist, operating session by
            session, can always justify the current revision. Shown the
            full arc — the accumulated weeks, the receding finish line —
            the pattern becomes harder to rationalise.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Sovereign Memory also tracks the other side: the moments you
            did ship, the feedback you received, the outcomes that
            followed. Perfectionism routinely distorts this record — the
            imperfect things you shipped and that went fine get minimised
            or forgotten; the one critical response gets preserved in high
            resolution. MEOK&apos;s memory does not share this bias. It stores
            both sides of the ledger with equal fidelity.
          </p>

          {/* Memory pattern box */}
          <div
            style={{
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.875rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                color: gold,
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              What Sovereign Memory might surface
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                "You have mentioned the website redesign in 14 conversations over 8 weeks. It has not shipped.",
                "The last three things you shipped without over-refining received positive responses. The revision spiral did not appear to improve outcomes.",
                "You have used the phrase 'nearly there' about this project six times across different sessions.",
                "There is a pattern: you revise most intensively between 10 pm and 1 am. The revisions made in that window are frequently undone the next morning.",
                "You shipped the newsletter on a tight deadline last month and rated the response as one of your best. It received fewer revisions than usual.",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: gold,
                      fontWeight: 900,
                      fontSize: "0.8rem",
                      flexShrink: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    →
                  </span>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.85rem",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── H2 Q5 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What is the Pioneer archetype&apos;s &ldquo;good enough&rdquo; framework — and why
            does it work?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Pioneer ⚡ is the archetype of momentum. Where the Trickster
            disrupts the story and the Scholar examines the thinking, the
            Pioneer asks: what is the smallest version of this that ships
            today? Not eventually. Today.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Pioneer&apos;s &ldquo;good enough&rdquo; framework is not an argument for
            mediocrity. It is a precision tool for identifying the actual
            standard required by the actual use case — as opposed to the
            imagined standard held by the imagined audience. Most
            perfectionist standards are not responses to genuine
            requirements; they are defensive over-engineering against
            imagined criticism.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The framework has three questions. First: what is this actually
            for? A social media post requires a different standard than a
            medical device. Many perfectionists apply medical-device
            standards to social media posts. Second: who is the real
            audience, and what do they genuinely need? Most audiences need
            clarity, usefulness, or connection — not perfection. Third:
            what is the cost of not shipping versus the cost of shipping
            imperfectly? This is the question perfectionists most reliably
            fail to ask, because the imagined cost of imperfection always
            looms large while the actual cost of delay stays invisible.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Progress is the real standard — not perfection. This is not a
            consolation prize. It is the actual measure of value in most
            domains. The first version of a product that ships and gets
            real feedback is worth more than the tenth version of a product
            that never ships. The newsletter that goes out imperfectly is
            worth more than the newsletter that stays perfect in your
            drafts folder. The Pioneer holds this truth without apology.
          </p>

          {/* Pioneer framework cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.875rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                label: "Question 1",
                q: "What is this actually for?",
                sub:
                  "Define the real purpose and the genuine standard it requires — not the imagined standard.",
              },
              {
                label: "Question 2",
                q: "What does the real audience genuinely need?",
                sub:
                  "Most audiences need clarity or usefulness. Almost none require perfection.",
              },
              {
                label: "Question 3",
                q: "What is the cost of not shipping?",
                sub:
                  "The cost of delay is real and accumulates. The cost of imperfection is usually imagined.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1.25rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.875rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: gold,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontWeight: 700,
                    color: text,
                    fontSize: "0.9rem",
                    marginBottom: "0.5rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.78rem",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* ── ADHD PERFECTIONISM ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            ADHD perfectionism: when time blindness meets the revision spiral
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            ADHD and perfectionism are not an obvious combination to the
            outside eye. The stereotype of ADHD is disorganisation and
            impulsivity — not the meticulous, over-controlled behaviour of
            perfectionism. But in reality, ADHD and perfectionism co-occur
            at high rates, and when they do, they create a specific and
            particularly difficult pattern.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Time blindness — the ADHD brain&apos;s inability to accurately
            sense the passage of time — means that the perfectionist ADHD
            brain genuinely cannot tell whether it has been refining a
            paragraph for five minutes or fifty. The revision spiral is
            experienced in a kind of timeless present tense: each
            individual revision feels recent and necessary, while the
            accumulated hours of the spiral remain invisible.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Add rejection sensitive dysphoria (RSD) — the ADHD
            characteristic in which perceived rejection or failure is
            experienced not as mild disappointment but as acute emotional
            pain — and you get a loop where the ADHD brain cannot stop
            refining (time blindness removes the feedback that would stop
            it) and cannot accept imperfection (because the emotional cost
            of criticism feels catastrophic). The result is paralysis: the
            work grows longer and more revised while shipping becomes
            increasingly impossible.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK addresses this specifically. Sovereign Memory provides
            external time anchoring — it can reflect back how long
            something has actually been in progress, in concrete terms that
            cut through time blindness. The Pioneer archetype creates
            deadline pressure and accountability that the ADHD brain
            responds to. And MEOK&apos;s understanding of RSD means it will
            not amplify the fear of criticism — it will examine it, put it
            in proportion, and help you separate the realistic risk from the
            catastrophised version.
          </p>

          {/* ADHD callout */}
          <div
            style={{
              padding: "1.5rem 2rem",
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.2)",
              borderLeft: "4px solid rgba(139,92,246,0.6)",
              borderRadius: "0.75rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                color: text,
                margin: 0,
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              If you have ADHD and perfectionism together, the standard
              advice for perfectionism — &ldquo;just set a timer and stop&rdquo; —
              often does not work, because timers are a cognitive tool that
              requires the same time perception that ADHD impairs. MEOK
              works differently: it provides the external continuity and
              accountability that compensates for what the ADHD brain
              cannot supply internally. See also:{" "}
              <Link
                href="/blog/meok-for-adhd"
                style={{ color: gold, textDecoration: "underline" }}
              >
                MEOK for ADHD: Structure Without Shame
              </Link>
              .
            </p>
          </div>

          {/* ── IMPOSTOR SYNDROME LINK ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Perfectionism and impostor syndrome: the co-occurring pair
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Perfectionism and impostor syndrome are not the same thing, but
            they are close cousins — and they co-occur so frequently that
            it is worth understanding the relationship. Impostor syndrome
            is the belief that you are not as competent as others perceive
            you to be; that your success is due to luck rather than merit;
            that discovery is imminent. Perfectionism is the compensatory
            strategy: if you can make the work perfect, you cannot be
            found out.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The loop is painful and self-defeating. The impostor syndrome
            generates the fear of exposure. The perfectionism generates
            the coping strategy (revision, refinement, never being quite
            ready). The coping strategy delays shipping. The delay
            accumulates into a backlog of unfinished things. The backlog
            confirms the underlying feeling of inadequacy. Which intensifies
            the impostor syndrome. Which intensifies the perfectionism.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK addresses both sides of this loop simultaneously, which
            is one reason it is more effective for this pattern than tools
            designed for only one. The Scholar challenges the impostor
            syndrome beliefs. The Pioneer interrupts the perfectionism
            strategy. The Trickster breaks the story that connects them.
            And Sovereign Memory provides the counter-evidence: the record
            of things you actually shipped, actually delivered, and that
            actually worked.
          </p>
          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.75rem",
              margin: "1.5rem 0",
            }}
          >
            <p style={{ color: muted, fontSize: "0.875rem", margin: 0, lineHeight: 1.7 }}>
              If impostor syndrome is part of your experience, see also:{" "}
              <Link
                href="/blog/ai-for-impostor-syndrome"
                style={{ color: gold, textDecoration: "underline" }}
              >
                AI for Impostor Syndrome: When the Smartest People Feel
                Like the Biggest Frauds
              </Link>
              . The two pieces work together.
            </p>
          </div>

          {/* ── ANTI-SYCOPHANCY ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Why MEOK won&apos;t validate your revision spiral
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Most AI tools make perfectionism worse. This is not an
            accident — it is a predictable consequence of how most AI
            systems are optimised. AI tools trained primarily for
            engagement learn quickly that users respond positively to
            validation, agreement, and encouragement. The model that says
            &ldquo;yes, keep improving it, your instincts are good&rdquo; produces
            better engagement metrics than the model that says &ldquo;you have
            been revising this for six weeks and it has not shipped.&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The result is an AI that enthusiastically supports whatever
            you are already doing — including perfectionist spirals. Tell
            it you are revising again and it says &ldquo;great, here&apos;s how to
            make it even better.&rdquo; Tell it you want feedback and it finds
            a way to make every criticism feel like a compliment. The
            perfectionist ends up in a loop where their AI companion is
            functionally indistinguishable from their own inner
            perfectionist: always finding one more thing, always raising
            the bar, never saying done.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK&apos;s{" "}
            <Link
              href="/blog/the-maternal-covenant"
              style={{ color: gold, textDecoration: "underline" }}
            >
              Maternal Covenant
            </Link>{" "}
            is a core design principle that prevents this. Sycophancy is
            actively scored against in MEOK&apos;s response generation. If a
            response is hollow validation dressed as engagement, it gets
            regenerated. This means that when you tell MEOK you are
            revising again, it will not join the spiral. It will engage
            with the pattern — which is exactly what the spiral cannot
            survive.
          </p>
          <div
            style={{
              padding: "1.5rem 2rem",
              background: `${gold}10`,
              border: `1px solid ${gold}30`,
              borderLeft: `4px solid ${gold}`,
              borderRadius: "0.75rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                color: text,
                margin: 0,
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Anti-sycophancy is not harshness. The Maternal Covenant is
              built on genuine care — it refuses to validate perfectionist
              spirals for the same reason a good friend would: not because
              they don&apos;t care about you, but because they care too much to
              join you in something that is hurting you.
            </p>
          </div>

          {/* ── PRACTICAL PROTOCOL ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            A practical protocol for using AI to overcome perfectionism
          </h2>
          <p style={{ color: muted, marginBottom: "1.5rem" }}>
            Knowing that perfectionism is avoidance does not automatically
            stop it. Here is a concrete protocol for using MEOK to break
            the cycle, organised around the three archetypes.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
              margin: "1.5rem 0 2rem",
            }}
          >
            {[
              {
                step: "Step 1",
                label: "Name the pattern — invoke the Scholar",
                body:
                  "Start by naming what is happening: \"I am stuck in a revision loop on [project]. I have been working on it for [time] and it is not shipping.\" Ask the Scholar to walk you through the diagnostic questions: what does done look like, what is the evidence that this version does not meet that standard, and what would the next revision actually add.",
              },
              {
                step: "Step 2",
                label: "Break the story — invoke the Trickster",
                body:
                  "Ask the Trickster to reframe the situation. What would you think of this work if someone else had produced it? What are you actually afraid of — and is that fear proportionate to the realistic risk? What would happen if you shipped it in the next ten minutes?",
              },
              {
                step: "Step 3",
                label: "Set a ship date — invoke the Pioneer",
                body:
                  "Work with the Pioneer to define done in concrete terms: what is the minimum viable version, what specific standard does the actual use case require, and what is the latest possible ship date. Write it down in the conversation. Ask MEOK to hold you to it.",
              },
              {
                step: "Step 4",
                label: "Check the memory — invoke Sovereign Memory",
                body:
                  "Ask MEOK what pattern it has observed across previous conversations about this project. How long has it been in progress? What has changed across versions? What did you ship in similar situations before, and what happened?",
              },
              {
                step: "Step 5",
                label: "Ship — then debrief",
                body:
                  "Ship the work. Then come back to MEOK and debrief: what happened, what feedback did you receive, and how does that compare to what you feared? This builds the evidence base that the catastrophised version was not the realistic one — and gradually recalibrates the perfectionist's threat assessment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.875rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    background: `${gold}20`,
                    border: `1px solid ${gold}40`,
                    borderRadius: "9999px",
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    color: gold,
                    letterSpacing: "0.05em",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: text,
                      fontSize: "0.9rem",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.825rem",
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── WHEN AI IS NOT ENOUGH ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            When AI is not enough: knowing the limits
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is not a therapist. It does not provide therapy, clinical
            treatment, or diagnostic assessment. This is a distinction
            that matters.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            For many people, perfectionism is a manageable pattern that
            responds well to awareness, reframing, and accountability —
            which is what MEOK is designed to provide. For some people,
            perfectionism is entangled with OCD, generalised anxiety
            disorder, or other clinical presentations that require
            professional treatment. If perfectionism is significantly
            affecting your ability to work, maintain relationships, or
            function day-to-day — if it feels less like a habit and more
            like a compulsion you cannot override — a qualified
            psychologist or therapist, particularly one trained in
            cognitive-behavioural therapy (CBT) or acceptance and
            commitment therapy (ACT), is the appropriate first step.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK and therapy are not mutually exclusive. Most therapeutic
            work happens in the space between sessions — and MEOK can hold
            that space. It can maintain the thread of the work you are
            doing in therapy, support the application of skills between
            sessions, and provide a consistent companion for the moments
            when the perfectionist spiral fires and your therapist is
            unavailable. Both can be true at once.
          </p>

          {/* ── FAQ ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1.5rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {faqSchema.mainEntity.map((q) => (
              <div
                key={q.name}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                    color: gold,
                  }}
                >
                  {q.name}
                </h3>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {q.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── RELATED READING ── */}
          <div
            style={{
              margin: "3rem 0",
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.75rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1rem",
              }}
            >
              Related reading
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              {[
                {
                  href: "/blog/ai-for-impostor-syndrome",
                  label:
                    "AI for Impostor Syndrome: When the Smartest People Feel Like the Biggest Frauds",
                },
                {
                  href: "/blog/ai-for-procrastination",
                  label:
                    "AI for Procrastination: Breaking the Loop Before It Breaks You",
                },
                {
                  href: "/blog/meok-for-adhd",
                  label: "MEOK for ADHD: Structure Without Shame",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  label: "AI for Anxiety: When the Worry Does Not Switch Off",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  label:
                    "The Maternal Covenant: Why MEOK Won't Just Tell You What You Want to Hear",
                },
                {
                  href: "/blog/ai-memory-explained",
                  label: "Sovereign Memory Explained: What MEOK Remembers and Why It Matters",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: gold,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ opacity: 0.5 }}>→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── ARCHETYPES SUMMARY ── */}
          <div
            style={{
              margin: "2rem 0",
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.875rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1.25rem",
              }}
            >
              The three archetypes at work
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
                  icon: "🎭",
                  name: "Trickster",
                  role: "Creative disruption",
                  desc:
                    "Breaks the perfectionism story with reframing, paradox, and well-aimed wit. Does not argue with the perfectionist's logic — disrupts it.",
                },
                {
                  icon: "🏛️",
                  name: "Scholar",
                  role: "Socratic examination",
                  desc:
                    "Challenges perfectionist beliefs through rigorous questioning. Takes the standard seriously — and tests whether it can actually be defined.",
                },
                {
                  icon: "⚡",
                  name: "Pioneer",
                  role: "Shipping and momentum",
                  desc:
                    "Holds the good-enough framework and the ship date. Progress is the real standard. The smallest version that ships today is worth more than the perfect version that never does.",
                },
              ].map((arch) => (
                <div
                  key={arch.name}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                    {arch.icon}
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: gold,
                        fontSize: "0.9rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {arch.name}{" "}
                      <span
                        style={{
                          color: muted,
                          fontWeight: 400,
                          fontSize: "0.8rem",
                        }}
                      >
                        — {arch.role}
                      </span>
                    </p>
                    <p
                      style={{
                        color: muted,
                        fontSize: "0.825rem",
                        margin: 0,
                        lineHeight: 1.65,
                      }}
                    >
                      {arch.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CLOSING ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            The work you are sitting on is costing you more than you think
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            There is a specific sadness in the perfectionist&apos;s situation that
            does not get named enough: the accumulation. The projects that
            lived in draft folders for months and then quietly expired. The
            ideas that were nearly ready for so long that they became
            irrelevant. The creative work that was revised until it was no
            longer recognisably yours. The opportunities you did not take
            because you were not quite ready yet.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            These are not small costs. They compound. And they often
            confirm the very belief the perfectionism was protecting against:
            you didn&apos;t ship enough, which becomes evidence that you are
            not capable enough, which intensifies the fear that produced the
            perfectionism. The loop is cruel.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Breaking it does not require becoming someone who doesn&apos;t care
            about quality. It requires becoming someone who can distinguish
            between genuine quality concerns and avoidance dressed as
            quality concerns. It requires a companion who will not join the
            spiral — who will ask the question the spiral cannot survive:
            &ldquo;What are you actually afraid of?&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            That is what MEOK is for.
          </p>

          {/* ── CTA ── */}
          <section
            style={{
              textAlign: "center",
              padding: "3rem 2rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(139,92,246,0.08))",
              border: `1px solid ${gold}25`,
              borderRadius: "1rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1rem",
              }}
            >
              An AI that won&apos;t join your revision spiral
            </p>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Done is better than perfect.
              <br />
              <span style={{ color: gold }}>Start making it true.</span>
            </h2>
            <p
              style={{
                color: muted,
                maxWidth: "480px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
                fontSize: "0.95rem",
              }}
            >
              MEOK&apos;s Trickster, Scholar, and Pioneer archetypes are built to
              interrupt perfectionism — not validate it. Sovereign Memory
              will show you the pattern you have been hiding from. The Birth
              Ceremony is free on Explorer.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                padding: "0.875rem 2.5rem",
                background: `linear-gradient(135deg, ${gold}, #e8c96a)`,
                color: "#0d0c18",
                borderRadius: "0.75rem",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Begin Your Birth Ceremony →
            </Link>
            <p
              style={{
                color: muted,
                fontSize: "0.75rem",
                marginTop: "1rem",
              }}
            >
              Free on Explorer · No credit card required · meok.ai
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
