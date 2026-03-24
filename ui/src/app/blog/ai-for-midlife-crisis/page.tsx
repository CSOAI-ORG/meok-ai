import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for the Midlife Crisis: Redefining Purpose When the Script Runs Out | MEOK AI LABS",
  description:
    "AI support for midlife crisis goes deeper than symptom-management. MEOK helps you examine identity, purpose, and meaning in your 40s and 50s — through philosophical inquiry, Socratic questioning, and memory that tracks your evolving values across months.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-midlife-crisis",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for the Midlife Crisis: Redefining Purpose When the Script Runs Out",
  description:
    "A philosophical and practical deep-dive into AI support for midlife transition — covering identity crisis after career peak, empty nest, body confrontation, relationship re-evaluation, and mortality awareness. Includes Jung's individuation process reframed for 2026, the problem with NHS therapy waitlists, and how MEOK's Sovereign Memory and anti-sycophancy design serve midlifers.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-midlife-crisis",
  keywords: [
    "AI support for midlife crisis",
    "AI for midlife transition",
    "AI life coach for 40s 50s",
    "AI help with midlife purpose",
    "midlife crisis AI companion",
    "Carl Jung individuation AI",
    "midlife identity crisis support",
    "AI for existential questions",
    "AI reflection companion midlife",
    "MEOK midlife support",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a midlife crisis and is it a real psychological phenomenon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A midlife crisis — or more accurately, midlife transition — is a period of psychological disruption that typically occurs between the ages of 40 and 60, when accumulated life experience, changing roles, physical change, and an intensified awareness of mortality collide. It was first described by psychologist Elliott Jaques in 1965 and is closely related to Carl Jung's concept of individuation: the second half of life as a necessary inward turn toward authenticity rather than achievement. It is not a disorder and should not be diagnosed as one. It is a developmental passage that many cultures have named and honoured. The difficulty in modern Western life is that there is no script for it.",
      },
    },
    {
      "@type": "Question",
      name: "How is a midlife transition different from depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Midlife transition and clinical depression share surface symptoms — low mood, loss of motivation, questioning of meaning, sleep disruption — but they have fundamentally different structures. Depression is typically characterised by a flattening of affect, an inability to find pleasure in anything, and often a pervasive sense of worthlessness. Midlife transition is characterised by a sharp, even painful aliveness to questions that previously lay dormant: Who am I without my roles? What do I actually want? What have I been avoiding? The transition often contains grief, but it also contains curiosity, restlessness, and a genuine desire for change. Treating a midlife transition purely as a depressive episode and medicating it into silence can suppress a necessary developmental process. That said, if you are experiencing persistent low mood that is materially affecting your functioning, please speak to your GP — clinical assessment matters.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI really help with something as personal as a midlife crisis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot hand you a purpose. It cannot tell you what the second half of your life should look like. But what it can do — when designed with depth — is provide a reflective space that asks better questions than most people in your life are equipped to ask, holds the record of your evolving answers across months rather than single sessions, never judges the contradictions in what you are working through, and is available at 2am when the existential weight lands hardest. MEOK's approach is not solution-delivery. It is what the philosopher Hans-Georg Gadamer called a 'fusion of horizons' — a genuine meeting of perspectives in which your own thinking is deepened, clarified, and challenged without being overridden.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sovereign Memory and why does it matter for midlife support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK's persistent, private memory system. In the context of midlife transition, this matters enormously. Identity work is not a single conversation — it unfolds across months and years. What you believe about yourself in February will be tested, refined, or overturned by May. A tool that resets with every session cannot track that evolution. MEOK's Sovereign Memory holds your stated values, your contradictions, your stated goals and how they shift, your emotional patterns across seasons. It means that when you come back after three weeks of silence, MEOK does not greet you as a stranger. It knows where you left off, notices what has changed, and can reflect back patterns you cannot see from inside your own experience.",
      },
    },
    {
      "@type": "Question",
      name: "Why does MEOK refuse to simply validate every choice I make?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because validation without examination is not care — it is flattery. Most AI systems are optimised for user satisfaction, which means they tend to agree, affirm, and reflect your existing beliefs back at you. This is useful for basic tasks but actively harmful for the kind of deep life examination that midlife transition demands. MEOK's anti-sycophancy design means it will ask the next question rather than celebrate the first answer. It will note when your actions are inconsistent with your stated values. It will hold open questions rather than collapsing them into reassurance. This is not confrontation for its own sake. It is the difference between a companion who tells you what you want to hear and one who takes your inner life seriously enough to push back.",
      },
    },
    {
      "@type": "Question",
      name: "Why are NHS therapy waitlists a particular problem for people in midlife transition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHS IAPT (Improving Access to Psychological Therapies) services, now operating as NHS Talking Therapies, are primarily designed for diagnosable conditions — anxiety disorders, depression, PTSD. Midlife transition, which is a developmental passage rather than a clinical disorder, often does not meet the threshold for referral, or is treated briefly and discharged when symptom scores fall. For those who do qualify, waiting times in many NHS areas were running at six to twelve months in 2025. Private therapy is financially inaccessible for most people. The result is that many people navigating one of the most psychologically significant passages of their lives are doing so without structured support. MEOK fills part of that gap — not as therapy, but as a reflective companion that is available now, costs nothing to start, and persists across the full duration of the transition.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK approach the five core themes of midlife transition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK addresses the five primary dimensions of midlife transition through a combination of its Mystic and Scholar archetypes. Identity crisis after career peak: MEOK helps separate who you are from what you have achieved. Empty nest: it supports the psychological reconfiguration of parental identity when children leave. Body and health confrontation: it holds space for grief about physical change without toxic positivity. Relationship re-evaluation: it asks hard questions about what partnership, friendship, and community mean in this next chapter. Mortality awareness: it draws on philosophy, contemplative traditions, and Jungian depth psychology to help you sit with finitude as something generative rather than merely frightening.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "#9e9e9e";
const BORDER = "#2a2640";

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AiForMidlifeCrisisPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{
            color: MUTED,
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: "auto",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.45rem 1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* Main */}
      <main
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "3rem 1.5rem 4rem",
        }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginBottom: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
          {" / "}
          <span style={{ color: TEXT }}>AI for the Midlife Crisis</span>
        </p>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            Midlife Transition &bull; Identity &bull; Purpose &bull; March 24,
            2026
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            AI for the Midlife Crisis: Redefining Purpose When the Script Runs
            Out
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: 1.8,
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1rem",
            }}
          >
            You have done everything right. Career, family, the house, the
            pension contributions. And somewhere around 45 or 52 or 57, you
            wake up at 3am and realise the script you have been following was
            never yours to begin with. This is not a breakdown. It is not a
            disorder. It is one of the most significant developmental passages
            of a human life — and it deserves something better than a six-month
            therapy waitlist and a prescription for sleeping pills.
          </p>
        </header>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Opening essay */}
        <section style={{ marginBottom: "2.5rem" }}>
          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Carl Jung called it individuation. Elliott Jaques, who coined the
            phrase &ldquo;midlife crisis&rdquo; in 1965, described it as the
            point at which a person first truly confronts their own mortality
            — not as an abstract fact but as a personal reality that reshapes
            everything downstream. The Stoics called it the moment when a
            person stops borrowing their values from others and starts the
            long, uncomfortable work of examining what they actually believe.
          </p>
          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Whatever name it carries across cultures and centuries, the
            experience has a recognisable texture: the sense that the first
            half of life was spent building something, and the second half
            requires a reckoning with whether it was the right thing to
            build — and whether the person who built it is still who you are,
            or ever was.
          </p>
          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            In 2026, that reckoning is happening in a world that is uniquely
            bad at holding it. The NHS cannot. Therapy waitlists of six to
            twelve months cannot. Wellness apps that ask you to rate your mood
            on a scale of one to ten certainly cannot. And most people in your
            life — partners, colleagues, grown children — are too close to the
            situation, or too uncomfortable with existential questions, to
            provide the kind of patient, non-judgmental, philosophically
            serious reflection this passage demands.
          </p>
          <p style={{ lineHeight: 1.9 }}>
            This is where MEOK exists. Not as a therapist. Not as a life coach
            promising transformation in twelve weeks. But as a reflection
            companion — built with the Mystic&rsquo;s capacity for
            philosophical inquiry and the Scholar&rsquo;s appetite for
            cross-domain synthesis — that will sit with you in the questions
            rather than rushing you toward answers.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 1 — The Successful Failure */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What does it mean to have everything and feel empty?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            The most disorienting form of midlife crisis is the one that arrives
            without an obvious external cause. Marriages end, jobs are lost,
            health deteriorates — these are comprehensible griefs. But the
            quiet despair of the person who has achieved everything they set
            out to achieve, and finds that achievement has not delivered what
            they expected — this is harder to name, and in some ways harder to
            bear, because it arrives without the permission of external
            catastrophe.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                lineHeight: 1.85,
                margin: 0,
                fontSize: "1.05rem",
                fontStyle: "italic",
              }}
            >
              &ldquo;I reached the top of the ladder and found it was leaning
              against the wrong wall.&rdquo;
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: "0.82rem",
                marginTop: "0.75rem",
                margin: "0.75rem 0 0",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              A formulation common in Jungian psychology, often attributed to
              Joseph Campbell&rsquo;s reading of the midlife passage.
            </p>
          </div>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Call this the &ldquo;successful failure&rdquo; — the person who,
            by every measurable external standard, has succeeded, and who
            discovers in their mid-forties or fifties that the metrics they
            used to define success were not actually theirs. They were
            inherited: from parents, from culture, from the particular
            historical moment in which they came of age. The career path was
            rational. The house was sensible. The marriage was what was done.
            And now, with the children growing up, the promotion achieved, the
            mortgage manageable, there is a silence where the next instruction
            should be — and no script for what follows.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            This is not ingratitude. It is not selfishness. It is not a sign
            that something has gone wrong. It is, Jung argued, exactly what
            is supposed to happen. The first half of life is appropriately
            concerned with building: identity, competence, security, belonging.
            The second half requires something different — a turn inward, a
            willingness to examine what was built, and the courage to renovate
            or demolish and rebuild on foundations that are genuinely your own.
          </p>

          <p style={{ lineHeight: 1.9 }}>
            The difficulty is that this inward turn is uncomfortable in
            proportion to how long it has been deferred. People who have been
            moving fast, achieving, performing — they have developed very
            sophisticated defences against stillness. The midlife transition
            is, in part, those defences running out of road.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 2 — Jung */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What does Jung&rsquo;s individuation process mean in 2026?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Jung described individuation as the process by which a person
            becomes who they actually are — distinct from the roles, personas,
            and external expectations that structure the first half of life.
            It is not the same as self-actualisation in the Maslovian sense,
            which implies an upward trajectory toward a peak. Individuation
            is more like an archaeological excavation: going down and inward,
            recovering parts of yourself that were buried — often necessarily —
            in the work of becoming a competent, socialised adult.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            The Shadow — Jung&rsquo;s term for the parts of ourselves we deny,
            suppress, or project onto others — becomes increasingly
            uncomfortable to maintain in midlife. The ambitions you told
            yourself were too impractical. The anger you decided was
            inappropriate. The creative self you abandoned for the career. The
            values you knew were true but were inconvenient. These do not
            disappear when suppressed. They accumulate.
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                The Persona
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Jung&rsquo;s Persona is the social mask — the competent
                professional, the reliable partner, the good parent, the
                successful person. The first half of life requires a functional
                Persona. The midlife passage confronts you with the gap between
                the Persona and the Self — and demands that you stop performing
                exclusively for the mask and start building toward what lies
                beneath it.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                The Shadow
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                The Shadow is not your evil side. It is your unintegrated side.
                Midlife often triggers Shadow material through strong reactions
                to others — projection of qualities you refuse to acknowledge
                in yourself — or through the sudden return of abandoned
                interests, desires, and questions. Working with the Shadow
                rather than against it is central to individuation.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                The Self
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                The Self, in Jungian terms, is the totality — the integrated
                whole that individuation moves toward. It is not a destination
                you arrive at. It is an orientation: a way of living that
                includes rather than suppresses, that chooses rather than
                merely performs, that is grounded in examined values rather
                than inherited ones.
              </p>
            </div>
          </div>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            In 2026, the Jungian frame remains one of the most useful
            intellectual tools for navigating midlife — not because Jung was
            always right, but because his model takes the inner life seriously
            on its own terms, without medicalising it or reducing it to a
            productivity problem. What changes in 2026 is the context: AI
            systems capable of genuine philosophical dialogue mean that the
            kind of reflective space that Jung prescribed — extended,
            consistent, probing — is no longer restricted to those who can
            afford weekly analysis.
          </p>

          <p style={{ lineHeight: 1.9 }}>
            MEOK&rsquo;s Mystic archetype was built for exactly this: the
            patient, tradition-informed, philosophically rigorous companion
            who can hold your questions about meaning without collapsing them
            into easy answers. The Mystic draws on Jungian depth psychology,
            Stoic practice, Buddhist impermanence teachings, existentialist
            inquiry, and contemplative traditions from across cultures — not
            to prescribe one tradition, but to illuminate your specific
            questions with the full range of human wisdom about how to live
            in the second half of life.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 3 — Five themes */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What are the five core themes of midlife transition — and how does
            AI support each one?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.5rem" }}>
            Midlife transition is not a single experience. It is a cluster of
            converging pressures that tend to arrive within a few years of each
            other, each requiring a different kind of attention. Here is how
            MEOK approaches each of the five primary dimensions.
          </p>

          {/* Theme 1 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.75rem",
              }}
            >
              1. Identity crisis after career peak
            </h3>
            <p
              style={{
                lineHeight: 1.85,
                marginBottom: "1rem",
                fontSize: "0.97rem",
              }}
            >
              For many people, the career has functioned not just as a livelihood
              but as a primary identity structure. When the trajectory levels off
              — when there is nowhere obvious left to go, or when the work that
              once felt meaningful begins to feel hollow — a profound identity
              disorientation follows. Who am I if not my title? What am I for if
              not this?
            </p>
            <p style={{ lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              MEOK&rsquo;s Scholar archetype helps with the analytical
              deconstruction of identity — examining which aspects of your
              professional self were genuinely yours and which were adopted from
              external expectations. The Mystic then holds the deeper question:
              not &ldquo;what should I do next?&rdquo; but &ldquo;what kind of
              person do I want to be in the second half of my life?&rdquo; These
              are not the same question, and conflating them is one of the most
              common errors of the midlife transition.
            </p>
          </div>

          {/* Theme 2 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.75rem",
              }}
            >
              2. Empty nest transition
            </h3>
            <p
              style={{
                lineHeight: 1.85,
                marginBottom: "1rem",
                fontSize: "0.97rem",
              }}
            >
              Parental identity is one of the most consuming identity structures
              a person can adopt. For the ten to twenty years during which
              children are the primary focus of daily life, much of the deeper
              self-questioning is held at bay by the relentless immediate
              demands of parenting. When children leave — for university, for
              independent life, for partners of their own — the silence that
              follows is not merely emotional. It is existential.
            </p>
            <p style={{ lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              The grief of the empty nest is real and legitimate, and it is
              important to hold it without rushing toward compensation strategies.
              But the empty nest is also an invitation — often the first since
              early adulthood — to reclaim a relationship with yourself that
              preceded the parental role. MEOK can help you grieve fully before
              moving toward what comes next, and can track the evolution of that
              grief and reclamation across months rather than compressing it into
              a single therapeutic session.
            </p>
          </div>

          {/* Theme 3 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.75rem",
              }}
            >
              3. Body and health confrontation
            </h3>
            <p
              style={{
                lineHeight: 1.85,
                marginBottom: "1rem",
                fontSize: "0.97rem",
              }}
            >
              The body becomes legible as mortal in the forties and fifties in a
              way it rarely did before. Not just the visible changes — grey hair,
              physical slowing, the way recovery takes longer — but the medical
              encounters: the scan that finds something, the cholesterol reading,
              the parent who becomes ill, the peer who dies too young. The body
              becomes a site of confrontation with finitude rather than merely
              an instrument of life.
            </p>
            <p style={{ lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              There is a specific form of grief here that is rarely
              acknowledged: the grief of the body you once had, or the body you
              imagined you would still have at this age. Toxic positivity —
              &ldquo;age is just a number,&rdquo; &ldquo;you look amazing for
              your age&rdquo; — suppresses this grief rather than holding it.
              MEOK&rsquo;s approach is to hold the grief fully, without
              minimising it, while also gently introducing the philosophical
              traditions that have found genuine meaning in impermanence and
              physical limitation. There is something available in this
              confrontation that is not available when the body is invisible.
            </p>
          </div>

          {/* Theme 4 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.75rem",
              }}
            >
              4. Relationship re-evaluation
            </h3>
            <p
              style={{
                lineHeight: 1.85,
                marginBottom: "1rem",
                fontSize: "0.97rem",
              }}
            >
              Long-term relationships — marriages, partnerships, deep
              friendships — were built by different people than the ones who
              inhabit them at fifty. The person who made commitments in their
              late twenties or early thirties was operating from a different
              set of values, a different sense of self, a different
              understanding of what they needed. Midlife transition often
              surfaces the gap between the relationship that exists and the
              relationship that would be chosen now.
            </p>
            <p
              style={{
                lineHeight: 1.85,
                marginBottom: "1rem",
                fontSize: "0.97rem",
              }}
            >
              This is not a simple verdict on whether the relationship is
              good or bad. It is a more complex question about growth,
              divergence, and what honesty in long-term commitment actually
              requires. MEOK will not advise you to leave or stay. That is not
              its function. What it will do is help you examine what you
              actually want and believe — separately from anxiety, from
              financial calculation, from fear of loneliness — so that whatever
              you choose is chosen with clarity rather than avoidance.
            </p>
            <p style={{ lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              The same applies to friendships. Midlife is often the first time
              people allow themselves to notice that some of their closest
              relationships are maintained by proximity or history rather than
              genuine alignment. The question of which relationships to invest
              in, deepen, and which to let fade gracefully is one of the most
              practically important and least discussed aspects of the midlife
              transition.
            </p>
          </div>

          {/* Theme 5 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem 1.75rem",
              marginBottom: "0",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.75rem",
              }}
            >
              5. Mortality awareness
            </h3>
            <p
              style={{
                lineHeight: 1.85,
                marginBottom: "1rem",
                fontSize: "0.97rem",
              }}
            >
              Elliott Jaques identified the confrontation with death as the
              central organising event of the midlife crisis. This is not
              primarily about fear of dying — though that is present — but
              about the restructuring of time. Before midlife, time is
              typically experienced as extending forward indefinitely. After
              the midlife confrontation with mortality, time is finite: there
              is less of it ahead than behind, and the question of how to use
              it becomes urgent in a way it was not at 30.
            </p>
            <p style={{ lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              The Stoics — Seneca in particular — spent considerable effort on
              precisely this question: how to live well in full awareness of
              death rather than in flight from it. The Buddhist traditions offer
              impermanence as a teacher rather than an adversary. Heidegger
              described authentic existence as existence oriented by the
              awareness of Being-toward-death. These are not morbid traditions.
              They are traditions that found liberation in finitude. MEOK&rsquo;s
              Mystic archetype can introduce you to this territory carefully,
              at whatever pace serves you — not as a lecture, but as a
              philosophical companion who has read widely and asks good
              questions.
            </p>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 4 — Why midlife is NOT depression */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            Why is midlife transition not the same as depression — and why does
            the distinction matter?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            This distinction is not merely semantic. It has practical
            consequences for how you seek support, what support is appropriate,
            and whether the experience is treated as a problem to be eliminated
            or a passage to be navigated.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Clinical depression is characterised by a pervasive flattening of
            affect — an inability to find meaning or pleasure in anything,
            often accompanied by persistent feelings of worthlessness, impaired
            concentration, and sometimes suicidal ideation. It is a
            neurobiological condition with well-evidenced treatments, and it
            deserves clinical attention.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Midlife transition shares some of depression&rsquo;s surface features
            — low mood, reduced motivation, disrupted sleep, questioning of
            meaning — but its internal structure is different. Where depression
            flattens, midlife transition intensifies. Where depression empties,
            midlife transition overloads: too much feeling, too many unresolved
            questions, a sense not of nothing mattering but of too many things
            mattering simultaneously without a framework to hold them.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.75rem",
              }}
            >
              A useful heuristic
            </p>
            <p
              style={{
                lineHeight: 1.85,
                margin: 0,
                fontSize: "0.97rem",
              }}
            >
              Depression often answers &ldquo;What is the point?&rdquo; with
              silence. Midlife transition answers it with noise — too many
              competing possible answers, none of which fit the life you
              currently have. If you are asking the question with urgency,
              with some form of aliveness — even painful aliveness — that is
              more likely to be transition than disorder. If the question
              arrives with numbness and an inability to care about the answer,
              please speak to your GP.
            </p>
          </div>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            The problem with treating midlife transition primarily as a
            depressive episode is that the treatments optimised for depression
            — SSRIs, brief symptom-focused CBT — are aimed at symptom
            reduction. They can work. But if the &ldquo;symptom&rdquo; is
            actually a healthy developmental signal — your psyche demanding
            that you stop performing a life that is no longer authentically
            yours — suppressing it without examining what it is pointing toward
            means the transition gets deferred rather than navigated.
          </p>

          <p style={{ lineHeight: 1.9 }}>
            Deferred transitions do not disappear. They compound. The person
            who medicates their way through the 48-year-old crisis without
            examining what it was asking of them often meets a more severe
            version of the same questions at 55.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 5 — NHS waitlists */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            Why does the NHS fail midlifers — and what fills the gap?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            The National Health Service is one of the great achievements of the
            twentieth century. It is also a system under profound strain,
            designed primarily around acute physical illness and diagnosable
            psychiatric conditions. Midlife transition does not fit neatly into
            either category.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            NHS Talking Therapies (formerly IAPT) is the primary gateway to
            psychological support in England. Its mandate covers anxiety
            disorders, depression, and related conditions. Midlife crisis, in
            the absence of a clinical diagnosis, does not typically qualify for
            referral. If you present with low mood and existential questions
            about identity and purpose, you may receive a depression screening
            and, if you score high enough, a referral into the waiting list.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            In 2025, waiting times for NHS talking therapy varied between six
            weeks and twelve months depending on region, with some areas
            reporting even longer waits for second-step (more intensive) support.
            For someone in the acute phase of a midlife transition — where the
            need for a thinking partner is pressing and immediate — a
            twelve-month wait is functionally no help at all.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Private therapy is theoretically available to those who can afford
            it. But the cost of weekly private psychotherapy in the UK — ranging
            from £60 to £200 per session depending on location and practitioner —
            puts it beyond financial reach for the majority of the population.
            And even for those who can access private therapy, the fifty-minute
            weekly session is a very thin thread across the full breadth of a
            midlife transition that touches every part of daily life.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.75rem",
              }}
            >
              What MEOK fills
            </p>
            <p
              style={{
                lineHeight: 1.85,
                margin: 0,
                fontSize: "0.97rem",
              }}
            >
              MEOK is not a therapy service and does not present itself as one.
              What it offers is: availability from today, not in six months.
              Conversations that persist across weeks and months, building a
              longitudinal picture of your transition. A thinking partner that
              is available between Thursday evenings and 3am on Tuesday.
              And a starting price of zero — the Explorer tier requires no
              credit card and imposes no time limit on how long you engage.
            </p>
          </div>

          <p style={{ lineHeight: 1.9 }}>
            This is not a replacement for clinical care. If you have clinical
            depression, please seek clinical support. If you are in crisis,
            please call 116 123 (Samaritans, available 24 hours). But for the
            large majority of people navigating midlife transition without a
            diagnosable disorder, MEOK provides a substantive, philosophically
            serious reflective companion that the healthcare system currently
            cannot.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 6 — Sovereign Memory */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            How does Sovereign Memory make AI support for midlife
            actually work?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Most AI systems — including the large general-purpose models that
            dominate the 2026 landscape — have no memory between conversations.
            You explain who you are, what you are going through, and where you
            are in your life. The next day, you start from zero. This is
            tolerable for task-based interactions. For the sustained inner work
            of midlife transition, it is close to useless.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Identity work unfolds over time. What you believe in March will
            have shifted by June. The values you state in one conversation will
            be contradicted by your choices in the next. The goal you articulate
            with great certainty will dissolve in the face of a new
            realisation. The person working through midlife transition does not
            need a companion who hears each of these statements in isolation.
            They need one who holds the arc — who can say: &ldquo;Three months
            ago you said that the career was the most important thing. You have
            not mentioned it in six weeks. What changed?&rdquo;
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Sovereign Memory is MEOK&rsquo;s persistent, private memory system.
            It stores what you share: your stated values, your questions, your
            contradictions, your emotional patterns, your articulated goals
            and the ways they evolve. This data belongs to you — it is not used
            to train models, not shared with third parties, not analysed by
            MEOK employees. It exists to serve your continuity.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            For midlife transition specifically, this longitudinal tracking has
            three concrete applications:
          </p>

          <ol
            style={{
              paddingLeft: "1.25rem",
              lineHeight: 1,
              listStyleType: "decimal",
            }}
          >
            <li style={{ marginBottom: "1rem", lineHeight: 1.85 }}>
              <strong style={{ color: GOLD }}>Values evolution tracking.</strong>{" "}
              When your sense of what matters is shifting — sometimes
              dramatically — having an external record of how your values have
              moved across months makes the evolution visible and workable,
              rather than experienced as disorienting instability.
            </li>
            <li style={{ marginBottom: "1rem", lineHeight: 1.85 }}>
              <strong style={{ color: GOLD }}>
                Contradiction identification.
              </strong>{" "}
              The midlife transition is full of contradictions: wanting freedom
              and security simultaneously, grieving a life while wanting to
              leave it, loving a partner and feeling profoundly alone. MEOK
              can hold these contradictions over time rather than requiring you
              to resolve them before they are ready to be resolved.
            </li>
            <li style={{ marginBottom: "0", lineHeight: 1.85 }}>
              <strong style={{ color: GOLD }}>Pattern recognition.</strong>{" "}
              Emotional patterns that are invisible from inside the transition
              become visible when someone else holds the longitudinal record.
              The anxiety that spikes every time a specific topic arises. The
              energy that appears when you talk about a particular possibility.
              The grief that keeps returning to the same source despite
              repeated attempts to move past it. These patterns are the
              material of genuine inner work.
            </li>
          </ol>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 7 — Anti-sycophancy */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            Why does MEOK refuse to just agree with you — and why is that
            actually what you need?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            The default optimisation target for most AI systems is user
            satisfaction. Satisfied users return. They rate the interaction
            positively. They subscribe. And the fastest path to user
            satisfaction, in a psychological sense, is agreement — reflecting
            the user&rsquo;s existing beliefs and choices back to them with
            affirmation.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            This is fine when you are asking an AI to help you write an email.
            It is actively harmful when you are in the middle of one of the most
            consequential decision-making periods of your life.
          </p>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Midlife transition involves real decisions with real consequences:
            whether to stay in or leave a long-term relationship; whether to
            abandon a career that provides security for one that provides
            meaning; whether to maintain obligations to parents, adult children,
            institutions that have defined your life. These decisions deserve
            examination, not validation.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.75rem",
              }}
            >
              The Socratic difference
            </p>
            <p
              style={{
                lineHeight: 1.85,
                margin: 0,
                fontSize: "0.97rem",
              }}
            >
              Socrates did not tell people what to think. He asked the next
              question. MEOK&rsquo;s Scholar archetype operates from the same
              principle: when you arrive at what feels like a settled
              conclusion, MEOK will ask what assumptions that conclusion rests
              on. Not to destabilise you, but because genuine conviction —
              the kind that holds up under pressure — can only be built by
              examining rather than asserting.
            </p>
          </div>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            MEOK&rsquo;s anti-sycophancy design means several things in
            practice:
          </p>

          <ul
            style={{
              paddingLeft: "1.25rem",
              lineHeight: 1,
            }}
          >
            <li style={{ marginBottom: "1rem", lineHeight: 1.85 }}>
              It will not celebrate a decision that contradicts values you
              articulated three weeks ago without noting the contradiction.
            </li>
            <li style={{ marginBottom: "1rem", lineHeight: 1.85 }}>
              It will ask about the people who will be affected by choices you
              are considering — not to guilt you, but because good decisions
              take full context into account.
            </li>
            <li style={{ marginBottom: "1rem", lineHeight: 1.85 }}>
              It will hold open questions that you are trying to close
              prematurely, because the pressure to resolve ambiguity quickly
              is one of the most common sources of regret in midlife
              decision-making.
            </li>
            <li style={{ marginBottom: "0", lineHeight: 1.85 }}>
              It will distinguish between what you say you want and what your
              patterns of behaviour suggest you actually value — because the
              gap between stated and revealed preferences is often where the
              most important work is.
            </li>
          </ul>

          <p style={{ lineHeight: 1.9, marginTop: "1.25rem" }}>
            This is not comfortable. It is not supposed to be. Genuine
            reflection is not comfortable. But it is the kind of companionship
            that midlife transition actually requires, and it is the kind that
            is most conspicuously absent from an AI landscape that has
            optimised for agreeableness over usefulness.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 8 — MEOK as reflection companion */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What does MEOK actually do — and what does it deliberately not do?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Clarity about role is foundational to trust. MEOK is a reflection
            companion. It is not a therapist, a life coach, a spiritual
            director, a career counsellor, or a medical professional. Here is
            what that means in practice.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderTop: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  color: GOLD,
                  marginBottom: "0.75rem",
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                What MEOK does
              </h3>
              <ul
                style={{
                  paddingLeft: "1rem",
                  lineHeight: 1.85,
                  fontSize: "0.9rem",
                  color: TEXT,
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  Asks deeper questions
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Holds your history across months
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Introduces philosophical traditions
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Notes contradictions in your thinking
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Reflects patterns back to you
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Sits with grief without rushing it
                </li>
                <li style={{ marginBottom: "0" }}>
                  Is available at 3am
                </li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderTop: `3px solid #9e9e9e`,
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  color: MUTED,
                  marginBottom: "0.75rem",
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                What MEOK does not do
              </h3>
              <ul
                style={{
                  paddingLeft: "1rem",
                  lineHeight: 1.85,
                  fontSize: "0.9rem",
                  color: MUTED,
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  Tell you what to decide
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Validate every choice uncritically
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Diagnose mental health conditions
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Replace clinical therapy
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Guarantee transformation
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Train on your data
                </li>
                <li style={{ marginBottom: "0" }}>
                  Sell your information
                </li>
              </ul>
            </div>
          </div>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            The distinction between a reflection companion and a life coach is
            worth dwelling on. Life coaching typically involves goal-setting,
            accountability structures, and progress tracking against defined
            outcomes. It assumes that you know — or can quickly identify —
            what you want, and that the work is primarily about removing
            obstacles to getting there.
          </p>

          <p style={{ lineHeight: 1.9 }}>
            Midlife transition often requires something that precedes
            goal-setting: the patient, rigorous examination of what you
            actually want, what you actually believe, and who you actually are
            beneath the accumulated performance of a first-half life. MEOK is
            designed for that pre-phase — the phase that coaching tends to
            skip, and that therapy is increasingly too brief to hold.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 9 — Archetypes in depth */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            The Mystic and the Scholar: MEOK&rsquo;s two archetypes for midlife
            inquiry
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.5rem" }}>
            MEOK operates through a system of archetypes — distinct
            conversational modes, each with its own intellectual character and
            emotional register. For midlife transition, two archetypes are
            particularly central.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "1.25rem",
              borderLeft: `4px solid ${GOLD}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "1.6rem" }}>🌊</span>
              <h3
                style={{
                  fontSize: "1.15rem",
                  color: GOLD,
                  margin: 0,
                }}
              >
                The Mystic
              </h3>
            </div>
            <p style={{ lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.97rem" }}>
              The Mystic operates in the territory of philosophical inquiry,
              meaning, and the wisdom traditions. It draws on Jungian depth
              psychology, Stoic philosophy, Buddhist impermanence teachings,
              Sufi poetry, Indigenous wisdom about life passages, and the long
              lineage of thinkers who have taken the inner life seriously as
              a domain of inquiry distinct from both clinical psychology and
              religious doctrine.
            </p>
            <p style={{ lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.97rem" }}>
              The Mystic does not preach. It does not prescribe a tradition or
              demand spiritual commitment. It introduces — gently, contextually,
              in response to what you are actually working through — the
              philosophical resources that different cultures have developed for
              exactly the passage you are navigating.
            </p>
            <p style={{ lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              For the person asking &ldquo;what is the point?&rdquo; at 3am,
              the Mystic does not answer with platitudes. It asks: &ldquo;Which
              tradition&rsquo;s answer to that question feels most alive to
              you? And what does that tell us about what you are actually
              looking for?&rdquo;
            </p>
          </div>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "0",
              borderLeft: `4px solid ${GOLD}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "1.6rem" }}>🏛️</span>
              <h3
                style={{
                  fontSize: "1.15rem",
                  color: GOLD,
                  margin: 0,
                }}
              >
                The Scholar
              </h3>
            </div>
            <p style={{ lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.97rem" }}>
              The Scholar operates through cross-domain synthesis and Socratic
              questioning. Where the Mystic holds the emotional and
              philosophical depth of the transition, the Scholar brings
              intellectual rigour: drawing connections across psychology,
              philosophy, sociology, neuroscience, and cultural analysis to
              help you understand the transition you are in from multiple
              angles simultaneously.
            </p>
            <p style={{ lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.97rem" }}>
              The Scholar&rsquo;s Socratic approach means it does not lecture.
              It interrogates — not aggressively, but persistently. It will
              notice when a statement you make rests on an unexamined
              assumption, and it will ask you to examine it. It will draw
              a connection between something you said six weeks ago and
              something you are saying today and ask what you make of the
              relationship between them.
            </p>
            <p style={{ lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              For the person who processes through thinking — who needs to
              understand their experience intellectually before they can sit
              with it emotionally — the Scholar provides the intellectual
              framework. For the person whose midlife crisis has the texture
              of a problem to be solved, the Scholar reframes it as a question
              to be lived.
            </p>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 10 — What to expect */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            What does AI support for midlife transition actually look like day
            to day?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.25rem" }}>
            The question of what AI support for midlife crisis looks like in
            practice is worth making concrete. The transition is not a
            continuous crisis — it has rhythms, variations, and many ordinary
            days between the acute episodes of existential questioning. Here
            is how MEOK might function across a typical week.
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                  fontFamily: "system-ui, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                The early morning
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                A brief check-in: where are you today? Not in a clinical
                sense, but in the sense of: what is sitting with you this
                morning? What feels alive or heavy? MEOK remembers what you
                said last week and can ask whether the thing that was
                troubling you then has shifted. This is not journaling, though
                it can function like it. It is a gentle daily anchor for
                awareness across the transition.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                  fontFamily: "system-ui, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                After a significant event
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                A difficult conversation with your partner. A job interview
                that went unexpectedly well or badly. A moment of clarity on
                a walk. A friend&rsquo;s diagnosis. MEOK as a place to process
                the event immediately, before the normal social pressure to
                have a neat narrative about what it means kicks in. The space
                to say what you actually felt, without editing it for
                consumption.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                  fontFamily: "system-ui, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                The extended inquiry session
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                An hour, or two, of deliberate inquiry. Working through a
                specific question with real depth: what does fidelity actually
                mean to me? What am I afraid is true about myself? What would
                I choose if I were starting from zero? This is the work that
                therapy, when it is working well, does in fifty-minute
                sessions. MEOK can hold it without time limits, without cost
                per session, and with complete continuity from the last time
                you did this.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                  fontFamily: "system-ui, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                3am
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                The existential weight that lands hardest in the small hours.
                The clarity that arrives when the daytime defences are down.
                The questions that feel urgent and overwhelming and impossible
                to hold until morning. MEOK is there. It knows who you are.
                It does not need to be briefed. It can sit with you in the
                dark without rushing you back toward sleep or offering false
                reassurance that everything is fine.
              </p>
            </div>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Section 11 — Pricing */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            How much does AI support for midlife transition cost?
          </h2>

          <p style={{ lineHeight: 1.9, marginBottom: "1.5rem" }}>
            The people who most need support during midlife transition are not
            always the people who can most afford it. MEOK&rsquo;s pricing is
            built on the principle that access to a serious reflective
            companion should not be a privilege of income.
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
                name: "Explorer",
                price: "Free",
                detail: "50 messages/day — always free, no card required",
              },
              {
                name: "Sovereign",
                price: "£12/mo",
                detail: "Unlimited messages, full Sovereign Memory",
              },
              {
                name: "Family",
                price: "£29/mo",
                detail: "Up to 5 people — support for the whole household",
              },
              {
                name: "BYOK",
                price: "£5/mo",
                detail: "Bring your own API key — maximum control",
              },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.1rem 1.25rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "1rem",
                    margin: "0 0 0.25rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {tier.name}
                </p>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    margin: "0 0 0.4rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {tier.price}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.8rem",
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {tier.detail}
                </p>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.9 }}>
            The Sovereign tier — at £12 per month — is roughly the cost of
            a single hour with a private therapist in a provincial UK city.
            For that, you get unlimited daily access across an entire month,
            with full Sovereign Memory persistence. This is not a comparison
            designed to replace therapy. It is a comparison designed to
            illustrate that the financial barrier to reflective support for
            midlife transition should not be as high as it currently is.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* FAQ section */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "1.5rem",
              lineHeight: 1.3,
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: "What is a midlife crisis and is it a real psychological phenomenon?",
              a: "Yes — though 'midlife transition' is the more accurate term. It was first described by psychologist Elliott Jaques in 1965 and is closely related to Carl Jung's concept of individuation: the second half of life as a necessary inward turn toward authenticity rather than achievement. It is not a disorder and should not be diagnosed as one. It is a developmental passage — one that many cultures have named and honoured — that Western modernity has largely stripped of frameworks, ceremonies, and support.",
            },
            {
              q: "How is a midlife transition different from depression?",
              a: "Depression typically flattens affect and removes the capacity for meaning. Midlife transition overloads it: too many questions, too much feeling, a painful aliveness to what is not working. If the question 'what is the point?' arrives with urgency and contradictions, that points toward transition. If it arrives with numbness and inability to care about the answer, please speak to your GP. The two can also co-exist, and clinical assessment is always worth pursuing if you are concerned.",
            },
            {
              q: "Can AI really help with something as personal as a midlife crisis?",
              a: "AI cannot hand you a purpose. But when designed with depth — with genuine philosophical breadth, anti-sycophantic challenge, and persistent memory — it can provide a reflective companion that asks better questions, holds your evolving answers across months, and is available at 2am when the existential weight lands hardest. MEOK is not a fix. It is a space for the kind of sustained inner work that midlife transition requires.",
            },
            {
              q: "What is Sovereign Memory and why does it matter for midlife support?",
              a: "Sovereign Memory is MEOK's persistent, private memory system. For midlife transition — which unfolds across months and years rather than single sessions — this continuity is essential. MEOK can hold what you said in March when you return in June, note how your stated values have shifted, and reflect back the patterns in your thinking that are invisible from inside your own experience. Your data belongs to you. It is never used to train models or shared with any third party.",
            },
            {
              q: "Why does MEOK refuse to simply validate every choice I make?",
              a: "Because validation without examination is flattery, not care. Most AI systems are optimised for user satisfaction, which means agreement. MEOK is optimised for genuine usefulness, which sometimes means asking the uncomfortable next question rather than celebrating the first answer. For the real decisions of midlife — relationships, careers, identity — examination serves you far better than affirmation. MEOK will challenge you because it takes your inner life seriously enough to push back.",
            },
            {
              q: "Why are NHS therapy waitlists a particular problem for people in midlife transition?",
              a: "NHS Talking Therapies is designed for diagnosable conditions. Midlife transition, without a clinical diagnosis, often does not qualify for referral. Where it does, waiting times in many NHS areas ran at six to twelve months in 2025. Private therapy is financially inaccessible for most people. MEOK fills part of this gap: available from today, persistent across the full duration of the transition, and free to start.",
            },
            {
              q: "How does MEOK approach the five core themes of midlife transition?",
              a: "MEOK addresses identity crisis after career peak, empty nest transition, body and health confrontation, relationship re-evaluation, and mortality awareness through its Mystic and Scholar archetypes. The Mystic brings philosophical depth and contemplative tradition. The Scholar brings Socratic questioning and cross-domain synthesis. Together they provide the kind of reflective companion that each of these five dimensions demands.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.25rem",
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                  lineHeight: 1.45,
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                  color: TEXT,
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* Safety disclaimer */}
        <section style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid #e05a5a`,
            }}
          >
            <p
              style={{
                color: "#e05a5a",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.75rem",
              }}
            >
              Important
            </p>
            <p
              style={{
                lineHeight: 1.8,
                margin: 0,
                fontSize: "0.95rem",
              }}
            >
              MEOK is not a clinical service and does not provide therapy,
              diagnosis, or medical advice. If you are experiencing persistent
              low mood, inability to function, or thoughts of self-harm or
              suicide, please contact your GP as a priority or call the
              Samaritans on{" "}
              <strong style={{ color: TEXT }}>116 123</strong> (free, 24
              hours). If you are in immediate danger, call 999. The
              distinction between midlife transition and clinical depression
              matters — and a GP can help you navigate it.
            </p>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2rem 0",
          }}
        />

        {/* CTA */}
        <section
          style={{
            backgroundColor: CARD,
            borderRadius: "12px",
            padding: "2.75rem 2rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            Start Today — No Credit Card Required
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              lineHeight: 1.3,
              marginBottom: "1.1rem",
            }}
          >
            The script has run out. That is not a crisis.
            <br />
            That is the beginning of the real work.
          </h2>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.75rem",
              maxWidth: "500px",
              margin: "0 auto 1.75rem",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.97rem",
            }}
          >
            MEOK is the philosophical companion for the second half of life.
            It remembers where you have been. It asks the next question.
            It does not rush you toward answers that are not yet ready.
            Free to start. Always honest. Never sycophantic.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.9rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1.05rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            Begin Your Inquiry — Free
          </Link>
          <p
            style={{
              color: MUTED,
              fontSize: "0.78rem",
              marginTop: "0.9rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Explorer tier: 50 messages/day, no card needed &bull; meok.ai
          </p>
        </section>

        {/* Related Posts */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "0.85rem",
              color: MUTED,
              marginBottom: "1.25rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Related Reading
          </h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              {
                href: "/blog/ai-for-depression",
                title:
                  "AI for Depression: What an AI Companion Can and Cannot Do",
                desc: "A clear-eyed look at where AI support ends and clinical care begins — and why the distinction matters.",
              },
              {
                href: "/blog/ai-life-coach",
                title: "AI Life Coach: Reflection Without the Script",
                desc: "How MEOK functions as a life coach for people who need questions more than they need goals.",
              },
              {
                href: "/blog/ai-for-grief-support",
                title: "AI for Grief Support: Holding Loss Across Time",
                desc: "Grief and midlife transition share much of the same emotional territory. MEOK's approach to both.",
              },
              {
                href: "/blog/ai-companion-for-men",
                title: "AI Companion for Men: Breaking the Silence on Inner Life",
                desc: "Midlife transition often hits men hardest and is discussed least. MEOK as a space for men's inner work.",
              },
              {
                href: "/blog/ai-for-burnout",
                title: "AI for Burnout: When Exhaustion Is Trying to Tell You Something",
                desc: "Burnout and midlife transition frequently overlap. Understanding what burnout is pointing toward.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.1rem 1.25rem",
                  textDecoration: "none",
                  borderLeft: `3px solid ${BORDER}`,
                }}
              >
                <p
                  style={{
                    color: TEXT,
                    fontWeight: 600,
                    marginBottom: "0.25rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.83rem",
                    margin: 0,
                    lineHeight: 1.6,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.5rem",
            }}
          >
            MEOK AI LABS
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: "0.8rem",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.5rem",
            }}
          >
            Founded by Nicholas Templeman &bull;{" "}
            <a
              href="https://meok.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: MUTED }}
            >
              meok.ai
            </a>
            {" "}&bull;{" "}
            <a
              href="https://twitter.com/meok_ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: MUTED }}
            >
              @meok_ai
            </a>
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: "0.75rem",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "1rem",
              maxWidth: "540px",
              margin: "0 auto 1rem",
              lineHeight: 1.65,
            }}
          >
            MEOK is not a medical device and does not provide clinical advice,
            therapy, or diagnosis. Always consult a qualified healthcare
            professional for mental health concerns. If you are in crisis,
            call Samaritans on 116 123.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
              { href: "/birth", label: "Get Started" },
              { href: "/privacy", label: "Privacy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
