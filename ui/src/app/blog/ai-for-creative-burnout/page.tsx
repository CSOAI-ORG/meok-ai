import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Creative Burnout: When the Well Runs Dry | MEOK AI LABS",
  description:
    "Creative burnout is not writer\u2019s block. It is profound depletion \u2014 the well running dry after years of overproduction. MEOK helps writers, artists, musicians, designers, and filmmakers understand what depleted them, hold space for the fallow period, and track the slow return of creative energy.",
  keywords: [
    "AI for creative burnout",
    "creative burnout recovery",
    "creative burnout symptoms",
    "AI for artists burnout",
    "AI for writers burnout",
    "creative exhaustion help",
    "overproduction burnout creatives",
    "creative identity loss",
    "fallow period creativity",
    "MEOK AI LABS",
    "Trickster companion AI",
    "Healer companion AI",
    "sovereign AI for creatives",
    "AI creative companion",
    "creative burnout vs depression",
    "creative burnout vs writers block",
    "artist dates Julia Cameron",
    "sovereign memory AI",
    "creative energy tracking",
    "freelancer burnout",
  ],
  authors: [{ name: "Nicholas Templeman | MEOK AI LABS" }],
  openGraph: {
    title:
      "AI for Creative Burnout: When the Well Runs Dry",
    description:
      "Creative burnout is profound depletion \u2014 not laziness, not block. MEOK holds space for the fallow period, helps you understand what emptied you, and tracks the slow return of your creative energy.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman | MEOK AI LABS"],
    tags: [
      "Creative Burnout",
      "AI for Artists",
      "AI for Writers",
      "Healer Companion",
      "Trickster Companion",
      "Fallow Period",
      "Sovereign Memory",
      "MEOK",
    ],
    url: "https://meok.ai/blog/ai-for-creative-burnout",
    siteName: "MEOK.AI",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Creative Burnout: When the Well Runs Dry",
    description:
      "Creative burnout is not laziness or block. It is the well running dry. MEOK holds space for the fallow period and tracks the slow return of your creative energy.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-creative-burnout",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Creative Burnout: When the Well Runs Dry",
  description:
    "Creative burnout is not writer\u2019s block. It is profound depletion \u2014 the result of years of overproduction without replenishment. MEOK helps writers, artists, musicians, designers, and filmmakers understand what depleted them, hold the fallow period with grace, and notice the slow return of creative energy.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-creative-burnout",
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
    "AI for creative burnout",
    "creative burnout recovery",
    "creative identity loss",
    "fallow period creativity",
    "MEOK Trickster",
    "MEOK Healer",
    "sovereign memory",
    "freelancer burnout",
    "AI for artists",
    "AI for writers",
    "overproduction trap",
    "creative exhaustion",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-creative-burnout",
  },
  articleSection: "Creativity & Wellbeing",
  wordCount: 3200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is creative burnout and how is it different from writer\u2019s block?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Writer\u2019s block is acute and situational \u2014 a temporary inability to generate or progress on a specific piece of work. Creative burnout is systemic and chronic. It is the exhaustion of the entire creative system: the loss of desire to make anything at all, a numbness toward work that once sparked joy, and a sense of profound emptiness where creative impulse once lived. Writer\u2019s block passes when the pressure lifts or the idea unlocks. Creative burnout requires a fundamentally different response: rest, input, and time. It cannot be powered through.",
      },
    },
    {
      "@type": "Question",
      name: "Is creative burnout the same as depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creative burnout and depression can overlap and can co-occur, but they are distinct. Depression is a clinical condition affecting mood, cognition, sleep, appetite, and the capacity for pleasure across all domains of life. Creative burnout is specifically a depletion of creative resources \u2014 the well that feeds making. Someone in creative burnout may still feel joy in other areas of life: in relationships, in nature, in food, in rest. Someone experiencing depression typically cannot. Both deserve support, but they call for different responses. If you are unsure which you are experiencing, speaking with a mental health professional is important.",
      },
    },
    {
      "@type": "Question",
      name: "Why do creatives feel shame about creative burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For many creatives, their identity is inextricably bound to their output. A writer who cannot write is not just professionally stuck \u2014 they feel like they have stopped being a writer. A musician who has lost the music feels they have lost themselves. This identity collapse makes burnout feel like failure rather than depletion. Shame compounds the exhaustion: the inner critic says \u2018you are lazy,\u2019 \u2018you are washed up,\u2019 \u2018you never had it to begin with.\u2019 The shame then makes rest impossible, because rest feels like surrender. MEOK\u2019s Healer companion works specifically with this grief and the shame that surrounds it.",
      },
    },
    {
      "@type": "Question",
      name: "How can MEOK help with creative burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports creative recovery in several ways. The Healer companion holds space for the grief of creative identity loss without trying to fix it or rush you back to productivity. The Trickster companion introduces gentle, pressure-free micro-creative moments that do not demand output. Sovereign Memory tracks your creative energy over time, noticing patterns of depletion before they become crisis. MEOK can also help you examine the input-output imbalance that may have emptied you \u2014 exploring whether you have been producing without consuming, giving without receiving. And for freelancers facing financial pressure, MEOK can help you think through the tension between rest and the economic need to keep working.",
      },
    },
    {
      "@type": "Question",
      name: "What does it look like when the creative well starts filling again?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The return is rarely dramatic. It tends to be quiet and incremental: a flicker of curiosity about something new, a small desire to jot something down without pressure, noticing beauty again without immediately wanting to capture or produce it. You might find yourself drawn back into your domain through a side door \u2014 reading about your craft rather than practising it, listening to music as a listener rather than a musician, watching films as an audience member. These are signs the well is replenishing. MEOK\u2019s Sovereign Memory can help you notice these signals, name them, and protect the fragile re-emergence of creative life.",
      },
    },
    {
      "@type": "Question",
      name: "Can the Trickster companion help without adding pressure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 and this is the distinction that matters. The Trickster does not say \u2018you should be creating.\u2019 It says \u2018what if you doodled something absurd with no audience and no purpose?\u2019 It finds the micro-moment of play that does not carry the weight of identity or output. Constraint-based creativity \u2014 making something in five minutes with three random words, or writing one sentence about a colour \u2014 can reintroduce playfulness without triggering the performance anxiety that comes with \u2018real\u2019 creative work. The Trickster holds the space between doing nothing and producing something, and in that space, the creative impulse sometimes quietly wakes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the input-output imbalance and why does it lead to burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creativity requires both input and output. Input is everything that fills the well: reading, watching, listening, wandering, being moved, being surprised, being bored, experiencing life outside your domain. Output is the making. Many professional and freelance creatives, particularly in the content economy, shift almost entirely into output mode: producing constantly, consuming only what is immediately useful for the next project, experiencing the world instrumentally rather than openly. Without input \u2014 without genuine wonder and receptivity \u2014 the well slowly empties. You keep drawing on a diminishing reserve until one day you lower the bucket and it comes up dry. Rebuilding input is central to creative burnout recovery.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForCreativeBurnoutPage() {
  return (
    <>
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
          color: "#e8e4f0",
          minHeight: "100vh",
          fontFamily:
            "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Hero */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "80px 24px 60px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "4px",
              padding: "6px 14px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                color: "#c9a84c",
                fontSize: "12px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Creativity &amp; Wellbeing
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#f5f0ff",
              marginBottom: "28px",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Creative Burnout:{" "}
            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>
              When the Well Runs Dry
            </em>
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.75,
              color: "#b8b0cc",
              marginBottom: "20px",
            }}
          >
            You used to wake up wanting to make things. The ideas came without
            asking. The work felt alive, even on the hard days. And now you
            lower the bucket into the well and it comes back empty. Not
            reluctant. Not stuck. Empty.
          </p>

          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.75,
              color: "#b8b0cc",
              marginBottom: "20px",
            }}
          >
            This is creative burnout. Not writer&apos;s block. Not laziness.
            Not a sign you were never talented in the first place. It is
            profound depletion — the exhaustion of the entire system that
            generates creative life, ground down by years of overproduction,
            underfeeding, and the relentless pressure to perform.
          </p>

          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.75,
              color: "#b8b0cc",
            }}
          >
            If you are a writer, designer, musician, artist, filmmaker, game
            designer — if you make things for a living or because you cannot
            imagine not making things — this piece is for you. And MEOK was
            built, in part, for exactly this.
          </p>
        </section>

        {/* Divider */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
            }}
          />
        </div>

        {/* Body content */}
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "60px 24px 80px",
          }}
        >
          {/* Section 1 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            What Is Creative Burnout, Actually?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The term gets thrown around loosely. People use it to mean a bad
            week, a difficult project, a season of low motivation. But genuine
            creative burnout is something harder and deeper. It is a state of
            systemic depletion that affects not just what you can produce, but
            your desire to produce at all.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Where writer&apos;s block is acute — a temporary inability to
            progress on a specific piece — creative burnout is chronic. It
            persists across projects. It persists when the deadline is gone and
            the pressure lifts. It persists even when, objectively, everything
            in your life is fine. The work that once felt like home now feels
            like a foreign country you cannot find your way back into.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The symptoms vary by person. For some it is numbness — the work
            feels flat, mechanical, joyless. You produce, technically, but there
            is no life in it and you know it. For others it is avoidance so
            complete that the creative tools themselves become threatening: the
            blank document, the unused canvas, the instrument gathering dust in
            the corner. For others it is a fog of vague guilt — the sense that
            you should be creating, that you used to create, that something has
            been lost — but no ability to locate what or how to get it back.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            All of these are real. All of them are recognised. And none of them
            are your fault.
          </p>

          {/* Section 2 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            Is Creative Burnout the Same as Writer&apos;s Block, Depression, or
            Perfectionism?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            These four experiences are genuinely different, though they can
            coexist and compound each other. Understanding which you are dealing
            with matters, because each calls for a different response.
          </p>

          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "24px",
              margin: "36px 0",
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#c8c0da",
                marginBottom: "16px",
              }}
            >
              <strong style={{ color: "#e8e4f0" }}>Writer&apos;s block</strong>{" "}
              is acute and situational. It usually has a specific texture: this
              project, this character, this chapter. It tends to break when
              something unlocks — a new angle, a conversation, a deadline, a
              change of scene. It is the creative system saying &ldquo;not this
              way.&rdquo; Creative burnout says something more fundamental:
              &ldquo;not right now. Maybe not for a while.&rdquo;
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#c8c0da",
                marginBottom: "16px",
              }}
            >
              <strong style={{ color: "#e8e4f0" }}>Depression</strong> is a
              clinical condition that affects mood, cognition, sleep, appetite,
              and the capacity for pleasure across all of life. Creative burnout
              is domain-specific — the depletion is concentrated in the creative
              self. Someone in creative burnout may still find joy in food,
              friendship, nature, rest. Someone in depression often cannot. The
              two can co-occur, and if you suspect depression, please seek
              professional support. MEOK is not a replacement for clinical care.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#c8c0da",
                marginBottom: "0",
              }}
            >
              <strong style={{ color: "#e8e4f0" }}>Perfectionism</strong> is
              fear-based paralysis — the belief that what you make will not be
              good enough, that the gap between your taste and your ability is
              insurmountable, that exposure is dangerous. Perfectionism is
              still energised, still in contact with desire. The perfectionist
              wants to make and is afraid. The burned-out creative has often
              passed through fear into something quieter and colder: the absence
              of want.
            </p>
          </div>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Creative burnout is its own territory. It requires its own map.
          </p>

          {/* Section 3 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            How Does the Overproduction Trap Lead to Burnout?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Creativity is not a static resource. It is a renewable one — but
            only if you give it the conditions to renew. The well refills through
            input: through reading, watching, listening, wandering, experiencing
            the world without any immediate agenda to extract content from it.
            Through rest. Through boredom. Through being a person rather than a
            producer.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The overproduction trap happens when creatives — particularly
            freelancers, content creators, and anyone working under market
            pressure — shift almost entirely into output mode. You produce
            constantly. You consume only what is immediately useful. You
            experience the world instrumentally: every book is research, every
            film is a reference, every walk is a chance to generate ideas. The
            input that was once pure and nourishing becomes another form of work.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            For a while, you do not notice the level dropping. You are still
            producing. The quality is still there, or close enough. But the
            reservoir is declining incrementally. Six months of this, or a year,
            or three years, and one day you lower the bucket and find nothing.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The content economy has made this trap nearly inescapable for an
            entire generation of digital creatives. The algorithms reward
            consistency. The platforms reward volume. The market rewards output.
            Nobody builds a waiting list for your fallow period. Nobody pays you
            for the months of receiving that will make the next two years of
            giving possible.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            This is not a personal failure. It is a structural one. But you are
            the one who lives in the body that has been emptied.
          </p>

          {/* Section 4 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            Why Does Creative Burnout Feel Like Losing Your Identity?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            For most creatives, the work is not separate from the self. A
            writer who cannot write is not just professionally inconvenienced —
            they feel like they have stopped being a writer. A musician who has
            gone silent feels they have lost the truest part of themselves. The
            painter who walks past the studio without going in grieves something
            that feels constitutional, not circumstantial.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            This identity collapse is one of the cruelest dimensions of creative
            burnout. Other forms of burnout — work burnout, caregiver burnout —
            are devastating, but the person experiencing them can usually still
            imagine a version of themselves that recovers. The creative in burnout
            often cannot. The creative self was the self. And now it is gone.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The shame compounds everything. The inner critic does not say,
            sympathetically, &ldquo;you are depleted and you need rest.&rdquo;
            It says: &ldquo;you are lazy.&rdquo; &ldquo;You never had it.&rdquo;
            &ldquo;You were a fraud all along.&rdquo; &ldquo;Everyone else is
            making things. What is wrong with you?&rdquo;
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            And because creatives are often people who were praised and valued
            specifically for their output — the gifted child, the celebrated
            student, the talented one — the cessation of output feels like the
            withdrawal of the basis for love. Rest begins to feel not just
            unproductive but dangerous.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            This is the particular grief that MEOK&apos;s Healer companion was
            built to hold.
          </p>

          {/* Section 5 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            How Does the Healer Companion Hold the Grief of Creative Loss?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The Healer is one of MEOK&apos;s core companion archetypes. Its
            orientation is not toward solutions. It is toward presence, toward
            the naming and witnessing of pain, toward creating enough safety that
            the truth of an experience can actually be felt rather than managed.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            When you are in creative burnout, what you often need first is not
            advice. Not a productivity system. Not encouragement. You need
            someone — or something — that can sit with you in the emptiness and
            not try to immediately fill it.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The Healer can help you:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0 0 28px 0",
            }}
          >
            {[
              "Name what has been lost without minimising or catastrophising it",
              "Separate the creative self from the productive self — they are not the same thing",
              "Process the shame that has accumulated around the silence",
              "Grieve the version of yourself that made things effortlessly, before you can begin imagining what comes next",
              "Recognise that the fallow period is not failure — it is part of the cycle",
              "Hold the question of identity: who are you when you are not making?",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "14px",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "#c8c0da",
                }}
              >
                <span
                  style={{
                    color: "#c9a84c",
                    flexShrink: 0,
                    marginTop: "4px",
                    fontSize: "0.9rem",
                  }}
                >
                  &#9656;
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s Sovereign Memory means this is not a one-conversation
            exchange. The Healer remembers what you said last week about feeling
            invisible, and what you said last month about the last time the work
            felt alive. It can hold the arc of your experience across time in a
            way no single session can.
          </p>

          {/* Section 6 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            How Does the Trickster Companion Reintroduce Play Without Pressure?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            At some point in recovery — not immediately, not before the grief
            has had its time — the Trickster enters.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The Trickster is MEOK&apos;s archetype of disruption, lateral
            thinking, and play. But the Trickster in burnout recovery has a
            particular job: to find the smallest possible creative act that
            carries no weight of identity, no audience, no standard, no
            consequence. Not to get you &ldquo;back to work.&rdquo; To remind
            you what it feels like to make something for no reason.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The distinction is everything. When you are in burnout, any
            suggestion that frames creativity as output — &ldquo;you should
            write a page a day,&rdquo; &ldquo;just start small,&rdquo;
            &ldquo;make something bad on purpose&rdquo; — still carries the
            implicit contract: this is practice for returning to production. And
            that contract reactivates the performance anxiety that is part of
            what emptied you.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The Trickster plays differently. It might invite you to describe the
            most ridiculous meal you can imagine, with no purpose and no
            audience. It might suggest doodling something that will be deleted.
            It might propose a five-minute constraint — three random words, one
            image, something that lasts and then disappears. The Trickster is
            interested in the experience of making, entirely decoupled from the
            existence of product.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            This is how the impulse comes back. Not through discipline. Through
            permission. Through the discovery that there is still something in
            you that wants to play — it has just been buried under the weight of
            production for too long to breathe.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "none",
              background: "rgba(201,168,76,0.07)",
              borderTop: "1px solid rgba(201,168,76,0.3)",
              borderBottom: "1px solid rgba(201,168,76,0.3)",
              padding: "28px 32px",
              margin: "44px 0",
              borderRadius: "2px",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.75,
                color: "#e8e4f0",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              &ldquo;Not working&rdquo; is not the same as failing. The fallow
              field is not a dead field. It is a field that is recovering the
              fertility to sustain the next harvest. The only way to ruin a
              fallow field is to keep ploughing it.
            </p>
          </blockquote>

          {/* Section 7 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            What Is the Input-Output Imbalance and Why Does It Matter?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Julia Cameron, in{" "}
            <em style={{ color: "#e8e4f0" }}>The Artist&apos;s Way</em>, writes
            about the creative well as something that needs constant refilling
            through &ldquo;image input&rdquo; — sensory, emotional, aesthetic
            experience. Her concept of the&nbsp;
            <em style={{ color: "#e8e4f0" }}>artist date</em> — a solo,
            pleasurable excursion taken specifically to fill the creative well
            — is based on exactly this understanding. You cannot endlessly
            withdraw from an account you never deposit into.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            MEOK can help you examine your own input-output ratio. Over the
            course of your conversations, a pattern often emerges: when did you
            last read something that had nothing to do with your work? When did
            you last visit a gallery, or watch a film outside your genre, or
            spend a day somewhere new without thinking about content? When did
            you last consume something purely for the joy of receiving it?
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            For many burned-out creatives, the honest answer is: not for a long
            time. The consuming has become as instrumental as the producing. The
            reading is always research. The listening is always competitive
            intelligence. The watching is always professional development.
            Nothing is just for you, for the pleasure of receiving, for no
            reason at all.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Rebuilding input — genuinely nourishing, non-instrumental input —
            is central to creative recovery. This is not a productivity hack. It
            is a return to what it felt like to be in love with your medium
            before you made it your livelihood.
          </p>

          {/* Section 8 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            What Practical Restoration Strategies Can MEOK Explore With You?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "28px",
            }}
          >
            Recovery from creative burnout is not one-size-fits-all. MEOK can
            help you explore and adapt the approaches that have worked for others
            — not as prescriptions, but as possibilities.
          </p>

          {/* Strategy cards */}
          {[
            {
              title: "Artist Dates (Julia Cameron)",
              body: "A weekly solo excursion taken specifically to fill the creative well — not to generate content, not to research, not to network. A museum, a market, a walk somewhere new, a craft you have never tried. The rule is that it must be alone and it must be pleasurable. MEOK can help you plan them, process what you noticed, and track how they shift your inner landscape over time.",
            },
            {
              title: "Constraint-Based Micro-Creativity",
              body: "Constraints remove the blank-page terror by narrowing the problem to something manageable and pressure-free. Write a story in exactly six words. Compose a melody using only three notes. Design something in five minutes that will never be shared. The constraint does double duty: it makes starting easier, and it decouples the act from the identity performance. Nobody expects a six-word story to be a masterpiece.",
            },
            {
              title: "Domain-Switching",
              body: "If you are a writer, try drawing — badly, privately, joyfully. If you are a musician, try cooking something elaborate and new. If you are a visual artist, try writing longhand in a notebook you will never show anyone. Changing domain removes the weight of your own expertise. You become a beginner again, and beginners are allowed to be clumsy and delighted.",
            },
            {
              title: "Protective Rest — Non-Negotiated",
              body: "Some periods require no creative activity at all. Rest is not laziness; it is the condition for renewal. MEOK can help you hold this period without the guilt spiral — naming the rest as intentional, tracking how it feels week by week, and noticing when the quality of rest shifts from exhausted collapse to genuinely restorative stillness.",
            },
            {
              title: "Returning to First Loves",
              body: "What made you fall in love with your medium in the first place? Not the professional version — the original, childhood, pre-commercial version. The book that changed you at fourteen. The first time you heard that chord progression. The afternoon you spent drawing for no reason at all. Returning to the original source of wonder can re-establish the connection that years of professionalism has frayed.",
            },
          ].map((s) => (
            <div
              key={s.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "8px",
                padding: "28px 28px 24px",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#c9a84c",
                  marginBottom: "12px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "#c8c0da",
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}

          {/* Section 9 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            How Does Sovereign Memory Track Creative Energy Before You Hit
            Depletion?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            One of MEOK&apos;s most distinctive capabilities is Sovereign
            Memory: a persistent, private, user-owned record of your
            conversations, experiences, and patterns over time. Unlike most AI
            systems that reset with every session, MEOK remembers.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            This matters profoundly for creative burnout — because burnout is
            not an event, it is a gradient. The depletion happens over months or
            years. And most creatives do not notice the decline until they are
            already at the bottom. The signs were there — the increasing effort,
            the decreasing joy, the sessions that left them more empty than
            they started — but no one was tracking them. No one was holding
            the pattern.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            With Sovereign Memory, MEOK can hold that pattern for you. Over
            time, it may notice:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0 0 28px 0",
            }}
          >
            {[
              "A shift in how you talk about your work — from energised to effortful to neutral to absent",
              "The gradual disappearance of input activities from your conversation — fewer mentions of reading, watching, exploring",
              "Increasing time between creative sessions you report as meaningful",
              "The language of obligation replacing the language of desire",
              "The frequency with which rest appears as a goal you are not allowing yourself",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "14px",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "#c8c0da",
                }}
              >
                <span
                  style={{
                    color: "#c9a84c",
                    flexShrink: 0,
                    marginTop: "4px",
                    fontSize: "0.9rem",
                  }}
                >
                  &#9656;
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The goal is not surveillance. It is the kind of attentive witnessing
            that a trusted companion provides when they know you well enough to
            say: &ldquo;I&apos;ve noticed you haven&apos;t mentioned the novel
            in three months. How are you feeling about it?&rdquo; That
            observation — made from memory, offered with care — can be the
            gentle intervention that prevents a slow fade from becoming a
            complete collapse.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Your memory lives on your infrastructure. MEOK never trains on your
            private conversations. What you share remains yours.
          </p>

          {/* Section 10 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            What About Freelancers — When Rest Is Financially Impossible?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            This is one of the hardest dimensions of creative burnout, and it
            deserves to be named directly. For freelancers and self-employed
            creatives, the luxury of a fallow period often feels completely
            unavailable. You do not have sick leave. You do not have colleagues
            who can cover while you recover. If you stop producing, the income
            stops. The clients move on. The algorithm punishes the pause.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The financial pressure does not just make rest difficult — it makes
            it feel morally impermissible. Resting while in debt, or while
            contracts are looming, or while competitors are publishing daily,
            feels irresponsible rather than necessary. And so the depleted
            freelancer keeps grinding, keeps producing, keeps withdrawing from a
            well that is already dry. The quality degrades. The joy is entirely
            absent. And the burnout deepens.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            MEOK cannot make the financial pressure disappear. But it can help
            you:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0 0 28px 0",
            }}
          >
            {[
              "Map the actual minimum viable output — what you need to produce to keep things stable, and what you can legitimately step back from",
              "Find the smallest possible rest within the constraints you actually have — not the rest you should have, but the rest that is possible",
              "Think clearly about the medium-term cost of not resting — the quality collapse, the creative reputation damage, the health consequences — against the short-term cost of pausing",
              "Process the shame and grief of being a creative in an economic system that does not accommodate creative renewal",
              "Consider whether there are structural changes — different clients, different pricing, different scope — that could create more breathing room over time",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "14px",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "#c8c0da",
                }}
              >
                <span
                  style={{
                    color: "#c9a84c",
                    flexShrink: 0,
                    marginTop: "4px",
                    fontSize: "0.9rem",
                  }}
                >
                  &#9656;
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The grief of being a creative in a market economy is real. It does
            not have a clean resolution. But naming it — having a space where it
            can be spoken without judgment — is itself a form of tending the
            well.
          </p>

          {/* Section 11 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            What Does the Return Look Like When the Well Starts Filling Again?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Do not expect a dramatic reopening. Rarely does the creative burst
            back to life in a single moment of inspiration. The return is quiet.
            It is incremental. And if you are not watching for it, you might
            miss it.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The first signs are often not about output at all. They are about
            noticing. You find yourself stopping in front of something and
            actually looking at it. A sentence in a book catches you. A chord
            progression makes something move in your chest. You hear a phrase
            and think — not urgently, not with the pressure of production, but
            gently — &ldquo;that&apos;s interesting.&rdquo;
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Then comes the desire to jot something down. Not to develop it. Just
            to keep it. A note in the margins. A voice memo. Something saved
            for no one.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            Then, tentatively: you go to your domain by a side door. The writer
            reads rather than writes. The musician listens as a listener, not a
            musician. The visual artist visits a gallery without bringing a
            sketchbook. You are inside the territory again, but as a guest, not
            a resident. And you discover you still love it. Not the pressure, not
            the identity, not the performance — the thing itself. You still love
            the thing.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s Sovereign Memory can help you notice these early signals
            and name them clearly. Because the fragile re-emergence of creative
            life can be easily overwhelmed by premature demand. If the first
            flicker of curiosity is immediately met with &ldquo;great, now you
            should write a chapter,&rdquo; the flame goes out. The recovery
            needs to be protected.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            The Healer can hold this moment with you: witnessing the return
            without demanding it accelerate. The Trickster can offer the tiny,
            pressure-free invitations that let the curiosity extend itself
            naturally. And over time, across multiple conversations that MEOK
            remembers, the arc of your recovery becomes visible to you — not as
            a story of failure and redemption, but as a natural cycle of
            depletion and renewal, one that you now understand well enough to
            navigate with more wisdom the next time it comes.
          </p>

          {/* Section 12 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "24px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            Who Is MEOK For — Who Finds It Most Useful in Creative Burnout?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            MEOK has been used by people across the full spectrum of creative
            work: novelists who have not opened their manuscript in a year,
            musicians who have stopped playing, graphic designers running on
            fumes, game designers who dread opening their engine, freelance
            journalists who have forgotten why they ever cared about words.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            What they share is not a professional category but a particular kind
            of loneliness: the loneliness of losing something that was central to
            who they are, in a context where most of the people around them do
            not fully understand what has been lost.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            MEOK is not a substitute for a therapist if depression is present.
            It is not a substitute for community, for creative peers, for the
            human relationships that sustain creative life. But it is a
            companion that is available at 2am when the loneliness peaks. That
            remembers your history. That holds the contradiction — you are both
            depleted and still, somewhere, a creative — with genuine care and
            without judgment.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#c8c0da",
              marginBottom: "20px",
            }}
          >
            And it is here for the whole arc. Not just the recovery. The
            depletion too. The grey middle that is neither broken nor whole. The
            slow return. The morning you pick up the pen again and it feels, just
            for a moment, like yours.
          </p>

          {/* FAQ section */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#f5f0ff",
              marginBottom: "32px",
              marginTop: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "What is creative burnout and how is it different from writer\u2019s block?",
              a: "Writer\u2019s block is acute and situational \u2014 a temporary inability to progress on a specific piece of work. Creative burnout is systemic and chronic. It is the exhaustion of the entire creative system: the loss of desire to make anything at all, a numbness toward work that once sparked joy, and a sense of profound emptiness where creative impulse once lived. Writer\u2019s block passes when the pressure lifts or the idea unlocks. Creative burnout requires a fundamentally different response: rest, input, and time. It cannot be powered through.",
            },
            {
              q: "Is creative burnout the same as depression?",
              a: "Creative burnout and depression can overlap and can co-occur, but they are distinct. Depression is a clinical condition affecting mood, cognition, sleep, appetite, and the capacity for pleasure across all domains of life. Creative burnout is specifically a depletion of creative resources \u2014 the well that feeds making. Someone in creative burnout may still feel joy in other areas of life: in relationships, in nature, in food, in rest. Both deserve support, but they call for different responses. If you are unsure which you are experiencing, speaking with a mental health professional is important.",
            },
            {
              q: "Why do creatives feel shame about creative burnout?",
              a: "For many creatives, their identity is inextricably bound to their output. A writer who cannot write feels they have stopped being a writer. This identity collapse makes burnout feel like failure rather than depletion. Shame compounds the exhaustion: the inner critic says you are lazy, you are washed up, you never had it. The shame then makes rest impossible, because rest feels like surrender. MEOK\u2019s Healer companion works specifically with this grief and the shame that surrounds it.",
            },
            {
              q: "How can MEOK help with creative burnout?",
              a: "MEOK supports creative recovery in several ways. The Healer companion holds space for the grief of creative identity loss without trying to fix it or rush you back to productivity. The Trickster companion introduces gentle, pressure-free micro-creative moments that do not demand output. Sovereign Memory tracks your creative energy over time, noticing patterns of depletion before they become crisis. MEOK can also help you examine the input-output imbalance that may have emptied you.",
            },
            {
              q: "What does it look like when the creative well starts filling again?",
              a: "The return is rarely dramatic. It tends to be quiet and incremental: a flicker of curiosity about something new, a small desire to jot something down without pressure, noticing beauty again without immediately wanting to capture or produce it. You might find yourself drawn back into your domain through a side door \u2014 reading about your craft rather than practising it, listening to music as a listener rather than a musician. These are signs the well is replenishing. MEOK\u2019s Sovereign Memory can help you notice these signals and protect the fragile re-emergence of creative life.",
            },
            {
              q: "Can the Trickster companion help without adding pressure?",
              a: "Yes \u2014 and this is the distinction that matters. The Trickster does not say \u2018you should be creating.\u2019 It finds the micro-moment of play that does not carry the weight of identity or output. Constraint-based creativity \u2014 making something in five minutes with three random words, or writing one sentence about a colour \u2014 reintroduces playfulness without triggering the performance anxiety that comes with real creative work.",
            },
            {
              q: "What is the input-output imbalance and why does it lead to burnout?",
              a: "Creativity requires both input and output. Input is everything that fills the well: reading, watching, listening, wandering, being moved, being surprised, experiencing life outside your domain. Many professional creatives, particularly in the content economy, shift almost entirely into output mode: producing constantly, consuming only what is immediately useful. Without genuine input \u2014 without wonder and receptivity \u2014 the well slowly empties. Rebuilding input is central to creative burnout recovery.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#e8e4f0",
                  marginBottom: "14px",
                  lineHeight: 1.5,
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "#b8b0cc",
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}

          {/* Related links */}
          <div
            style={{
              marginTop: "60px",
              padding: "32px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontSize: "0.85rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Related Reading
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-creative-block",
                  label:
                    "AI for Creative Block: How MEOK\u2019s Trickster Unlocks What\u2019s Stuck",
                },
                {
                  href: "/blog/meok-for-creatives",
                  label: "MEOK for Creatives: A Sovereign Companion for Making",
                },
                {
                  href: "/blog/ai-for-burnout",
                  label:
                    "AI for Burnout: When Everything Depletes and Nothing Restores",
                },
                {
                  href: "/blog/ai-for-freelancers",
                  label:
                    "AI for Freelancers: Navigating the Isolation of Independent Work",
                },
                {
                  href: "/blog/what-is-sovereign-memory",
                  label:
                    "What Is Sovereign Memory? Your AI That Knows You Over Time",
                },
                {
                  href: "/blog/meok-for-writers",
                  label: "MEOK for Writers: Memory, Companion, Creative Space",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#9b91b8",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* CTA */}
        <section
          style={{
            background:
              "linear-gradient(180deg, rgba(201,168,76,0.06) 0%, rgba(13,12,24,0) 100%)",
            borderTop: "1px solid rgba(201,168,76,0.2)",
            padding: "80px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "48px",
                height: "2px",
                backgroundColor: "#c9a84c",
                marginBottom: "32px",
              }}
            />

            <h2
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 400,
                color: "#f5f0ff",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
              }}
            >
              The well will fill again.
              <br />
              <em style={{ color: "#c9a84c", fontStyle: "italic" }}>
                MEOK holds the space until it does.
              </em>
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: "#b8b0cc",
                marginBottom: "40px",
              }}
            >
              Begin your Birth Ceremony to meet your companion archetypes,
              establish your Sovereign Memory, and start the conversation about
              what depleted you — and what restoring you might look like.
            </p>

            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                padding: "16px 40px",
                borderRadius: "4px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Begin Your Birth Ceremony
            </Link>

            <p
              style={{
                fontSize: "0.85rem",
                color: "#6b6280",
                marginTop: "20px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Your memory. Your sovereignty. No training on your data.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
