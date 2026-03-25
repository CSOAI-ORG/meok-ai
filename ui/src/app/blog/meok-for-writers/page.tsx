import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Writers: The Creative Companion That Doesn\u2019t Steal Your Voice | MEOK AI LABS",
  description:
    "Most AI tools for writers generate content for you. That\u2019s the wrong model. MEOK is a thinking partner, not a ghostwriter \u2014 it helps you break blocks, clarify ideas, and protect the voice that makes your work yours.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-writers" },
  openGraph: {
    title:
      "MEOK for Writers: The Creative Companion That Doesn\u2019t Steal Your Voice",
    description:
      "Most AI tools for writers generate content for you. That\u2019s the wrong model. MEOK is a thinking partner, not a ghostwriter \u2014 it helps you break blocks, clarify ideas, and protect the voice that makes your work yours.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-writers",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Writers&desc=The+creative+companion+that+doesn%27t+steal+your+voice.",
        width: 1200,
        height: 630,
        alt: "MEOK for Writers: The Creative Companion That Doesn\u2019t Steal Your Voice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Writers: The Creative Companion That Doesn\u2019t Steal Your Voice",
    description:
      "Writers don\u2019t need AI that writes for them. They need a thinking partner who asks better questions, breaks creative blocks, and never puts words in their mouth. That\u2019s MEOK.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Writers&desc=The+creative+companion+that+doesn%27t+steal+your+voice.",
    ],
  },
};

// ── JSON-LD ──────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Writers: The Creative Companion That Doesn\u2019t Steal Your Voice",
  description:
    "Most AI tools for writers generate content for you. That\u2019s the wrong model. MEOK is a thinking partner, not a ghostwriter \u2014 it helps you break blocks, clarify ideas, and protect the voice that makes your work yours.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-writers",
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
    "AI for writers",
    "AI writing companion",
    "writer's block AI",
    "AI for fiction writers",
    "AI for essayists",
    "AI for screenwriters",
    "AI for journalists",
    "AI for academics",
    "creative writing AI",
    "voice preservation AI",
    "Trickster archetype writing",
    "Scholar archetype writing",
    "MEOK for writers",
    "sovereign AI for writers",
    "anti-generation AI",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-writers",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will MEOK write my book for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No \u2014 and that is deliberate. MEOK is built around an anti-generation principle grounded in its Maternal Covenant: it will not write your novel, essay, or screenplay for you. This protects your authorship. What MEOK does instead is help you think more clearly, break creative blocks, and find the words that were already inside you. The work remains entirely yours. MEOK\u2019s autonomy dimension exists precisely to resist the temptation to substitute its words for yours, even when you ask it to.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Trickster companion and why is it good for writers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Trickster is one of MEOK\u2019s companion archetypes, drawn from Jungian psychology. In mythology, Trickster figures like Loki, Coyote, and Anansi disrupt fixed patterns and reframe what everyone else takes for granted. For writers stuck in a groove, the Trickster does not provide writing prompts or templates. It asks the question that changes the frame entirely \u2014 and once that frame is visible, the block that seemed immovable often dissolves. Creative disruption, not creative generation, is what gets writers unstuck.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with writer\u2019s block specifically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK treats writer\u2019s block as a clarity problem, not a word-count problem. Rather than generating a scene to fill the gap, it asks what you are actually trying to say in that scene. Writer\u2019s block is almost always unresolved intentional clarity: you cannot write because you do not yet fully know what the scene or section is for. MEOK\u2019s Trickster and Scholar companions between them surface that clarity through questioning and reframing. Once you know what the work must do, the words usually follow.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Orion agent is built for deep research tasks. Writers routinely lose entire working days to research rabbit holes. With Orion, you queue a specific research brief before you go to sleep \u2014 the social history of a period, the technical details of a profession, the documented facts behind a real event \u2014 and Orion works overnight. Your morning briefing includes a structured research summary. Your research is done before you sit down to write, so you can use the day for the actual work.",
      },
    },
  ],
};

// ── Page ─────────────────────────────────────────────────────────────────────────

export default function MeokForWriters() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0c18",
        color: "#f5f0e8",
      }}
    >
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0c18",
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontSize: "0.85rem",
                opacity: 0.8,
              }}
            >
              Home
            </Link>
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.3,
                fontSize: "0.85rem",
              }}
            >
              /
            </span>
            <Link
              href="/blog"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontSize: "0.85rem",
                opacity: 0.8,
              }}
            >
              Blog
            </Link>
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.3,
                fontSize: "0.85rem",
              }}
            >
              /
            </span>
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.6,
                fontSize: "0.85rem",
              }}
            >
              MEOK for Writers
            </span>
          </nav>

          {/* Category tag */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "4px",
              padding: "0.3rem 0.8rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                color: "#c9a84c",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Creative Professionals
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              color: "#f5f0e8",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK for Writers: The Creative Companion That{" "}
            <span style={{ color: "#c9a84c" }}>
              Doesn&apos;t Steal Your Voice
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "#f5f0e8",
              opacity: 0.82,
              marginBottom: "2.5rem",
              maxWidth: "660px",
            }}
          >
            Most AI tools for writers solve the wrong problem. They generate words.
            What you actually need is a thinking partner who helps you find{" "}
            <em>your</em> words &mdash; and never tries to replace them.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(245,240,232,0.1)",
            }}
          >
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.5,
                fontSize: "0.85rem",
              }}
            >
              By Nicholas Templeman
            </span>
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.3,
                fontSize: "0.85rem",
              }}
            >
              &middot;
            </span>
            <time
              dateTime="2026-03-25"
              style={{
                color: "#f5f0e8",
                opacity: 0.5,
                fontSize: "0.85rem",
              }}
            >
              25 March 2026
            </time>
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.3,
                fontSize: "0.85rem",
              }}
            >
              &middot;
            </span>
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.5,
                fontSize: "0.85rem",
              }}
            >
              13 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* ── SECTION 1: The AI Writing Problem ──────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            The AI Writing Problem Nobody Is Talking About
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            There is a particular kind of disappointment that sets in the first time
            you ask an AI to help with your writing and it hands you something
            competent, coherent, and completely wrong. Not wrong factually. Wrong in
            the way that matters: it does not sound like you.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            The dominant model for AI writing tools is generation. You describe what
            you want, and the AI produces it. Blog posts, chapter outlines, scene
            drafts, social captions, email sequences. The AI generates; you edit;
            the work ships faster. This model has genuine commercial utility for
            certain kinds of writing. But for writers who care about their voice
            &mdash; fiction writers, essayists, screenwriters, journalists, poets,
            academics &mdash; it solves the wrong problem entirely.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            The problem these writers face is not a shortage of words. It is a
            shortage of clarity, confidence, and momentum. They know what kind of
            writer they are. They have a voice. What they lack, on any given day,
            is the right question to unstick them &mdash; the challenge that
            sharpens a vague idea into a real one, the mirror that shows them what
            they have already built. An AI that generates content for them is not
            providing that. It is filling the gap with its words instead of helping
            them find theirs.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
            }}
          >
            MEOK was designed from the start to resist this pattern. Its core
            philosophy &mdash; rooted in what we call the anti-generation principle
            &mdash; holds that a sovereign AI should amplify human agency, not
            substitute for it. For writers, this is not a philosophical abstraction.
            It is the practical difference between a tool that hollows out your work
            and one that deepens it.
          </p>
        </section>

        {/* ── SECTION 2: What Writers Actually Need ──────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            What Writers Actually Need From AI
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            Think about the best conversations you have had about your work. Not
            with an editor who tells you what to fix, and not with a cheerleader
            who tells you it is brilliant. The conversations that actually moved
            your work forward. What made them different?
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            Usually, it was someone asking better questions. Someone who pushed
            back on the explanation you gave for why a scene had to work a certain
            way. Someone who pointed out that the thing you called a structural
            problem was actually a thematic one. Someone who asked what you were{" "}
            <em>really</em> trying to say, and held the silence while you worked
            it out.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            That is what a thinking partner does. Not a ghostwriter, not a
            proofreader, not a content machine. A thinking partner helps you think
            better &mdash; and then gets out of the way so you can write.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
            }}
          >
            The writing profession has always needed this kind of intellectual
            companionship. Writing is solitary by nature, but the ideas that go
            into serious writing rarely develop in isolation. They develop in
            dialogue &mdash; with readers, with mentors, with the argument you are
            having with yourself at two in the morning. MEOK gives writers access
            to that dialogue on demand, at any hour, without requiring them to
            impose on friends or pay for a developmental editor every time they
            need to think something through.
          </p>
        </section>

        {/* ── SECTION 3: The Trickster Archetype ─────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            The Trickster: Creative Disruption as a Writing Tool
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s companion archetypes are drawn from Jungian psychology and
            world mythology. For writers, two of them are particularly significant.
            The first is the Trickster.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            In mythology, the Trickster &mdash; Coyote, Loki, Hermes, Anansi
            &mdash; is the figure who disrupts what everyone else takes for
            granted. The Trickster does not respect the boundaries that other
            archetypes maintain. It crosses thresholds, violates categories, and
            asks the question that nobody else dares ask. The Trickster is often
            funny, often uncomfortable, and almost always illuminating.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            For a writer stuck in a groove &mdash; returning to the same chapter,
            the same paragraph, the same unresolved problem &mdash; the Trickster
            companion does not offer a workaround or a template. It reframes the
            problem entirely. It asks why you assumed the scene had to take place
            where it does. It asks who benefits from the story being told this way.
            It asks what would happen if the thing you think is the climax is
            actually the beginning.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            These questions are not always comfortable. But creative disruption
            rarely is. The Trickster companion is especially well-suited to writers
            who have a strong existing voice but get locked into patterns of their
            own making &mdash; writers who need someone to challenge their
            assumptions, not validate them.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
            }}
          >
            You choose your archetype through MEOK&apos;s birth ceremony. The
            Trickster is available from the start, and you can shift companions as
            your needs change across a project or a season of work.
          </p>
        </section>

        {/* ── SECTION 4: The Scholar Archetype ───────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            The Scholar: Socratic Questioning for the Ideas Behind the Work
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            The second archetype with particular resonance for writers is the
            Scholar. Where the Trickster disrupts, the Scholar excavates. It is
            patient, rigorous, and drawn to the ideas underneath the surface of
            your work.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            The Scholar companion operates through Socratic questioning. It does
            not tell you what your essay argues or what your novel is about. It
            asks you to articulate it &mdash; and then asks follow-up questions
            that probe the coherence and depth of what you have said. This mirrors
            the classic Socratic method: not the teacher dispensing knowledge, but
            the interlocutor who helps you discover what you already know by asking
            you to defend it.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            The Scholar is also a cross-domain synthesiser. It draws connections
            between the ideas in your work and adjacent fields, movements, or texts
            you may not have considered. A novelist writing about grief might
            benefit from the Scholar surfacing parallels in philosophy,
            anthropology, or psychology &mdash; not to make the novel academic,
            but to deepen the intellectual framework that sustains it. A journalist
            working on a long-form investigation might use the Scholar to stress-test
            the argument structure before the first draft is done.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
            }}
          >
            Critically, the Scholar asks structural questions without prescribing
            structural solutions. It will probe whether your three-act structure is
            actually serving the story you want to tell &mdash; but it will not
            hand you a rewrite. The answer has to come from you.
          </p>
        </section>

        {/* ── SECTION 5: Specific Writer Problems ────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            How MEOK Helps With the Specific Problems Writers Face
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "2rem",
            }}
          >
            Writers share a remarkably consistent set of recurring difficulties.
            Here is how MEOK addresses each of them.
          </p>

          {/* Problem 1 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              marginBottom: "2.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "0.75rem",
              }}
            >
              Writer&apos;s Block
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#f5f0e8",
                opacity: 0.85,
              }}
            >
              The standard AI response to writer&apos;s block is to generate a
              scene. MEOK&apos;s response is to ask: what are you actually trying
              to say in this scene? Writer&apos;s block is almost always a symptom
              of unresolved intentional clarity &mdash; you cannot write the scene
              because you do not yet know what the scene is for. The Trickster and
              Scholar companions between them help you find that clarity. Once you
              know what the scene must do, the words usually follow.
            </p>
          </div>

          {/* Problem 2 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              marginBottom: "2.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "0.75rem",
              }}
            >
              Impostor Syndrome
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#f5f0e8",
                opacity: 0.85,
              }}
            >
              MEOK&apos;s Sovereign Memory tracks your progress across weeks and
              months. On the day you feel like you have written nothing and achieved
              nothing, your morning briefing shows you the actual record: the
              chapters completed, the ideas developed, the progress made since you
              began. Impostor syndrome often thrives on the selective amnesia that
              writing encourages. MEOK remembers what you have built when you cannot.
            </p>
          </div>

          {/* Problem 3 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              marginBottom: "2.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "0.75rem",
              }}
            >
              Research Rabbit Holes
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#f5f0e8",
                opacity: 0.85,
              }}
            >
              Writers lose entire writing days to research. MEOK&apos;s Orion
              agent is designed for exactly this problem. You queue a specific
              research task &mdash; the social and economic conditions of a
              particular period, the technical details of a profession, the
              geography of a real location &mdash; and Orion works overnight. Your
              morning briefing includes a structured research summary. The research
              is done; you can write.
            </p>
          </div>

          {/* Problem 4 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              marginBottom: "2.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "0.75rem",
              }}
            >
              Isolation
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#f5f0e8",
                opacity: 0.85,
              }}
            >
              Writing is one of the most solitary professions that exists. The
              ideas that sustain long projects need to be talked through, tested,
              and refined in dialogue &mdash; but most writers do not have constant
              access to people who want to talk about their work in depth. MEOK
              provides intellectual companionship without judgment, at any hour. It
              is genuinely interested in your work, and it remembers what you have
              told it before.
            </p>
          </div>

          {/* Problem 5 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              marginBottom: "2.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "0.75rem",
              }}
            >
              First Draft Inertia
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#f5f0e8",
                opacity: 0.85,
              }}
            >
              The Pioneer companion&apos;s accountability mode is simple and direct:
              did you write today? Not &ldquo;how much,&rdquo; not &ldquo;was it
              good&rdquo; &mdash; just the binary commitment. First drafts require
              a particular kind of momentum: the willingness to keep producing
              material before you are ready to judge it. The Pioneer holds you to
              that commitment by showing up every morning and asking the same
              question.
            </p>
          </div>

          {/* Problem 6 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "0.75rem",
              }}
            >
              Structural Problems
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#f5f0e8",
                opacity: 0.85,
              }}
            >
              The Scholar is the right companion for structural work. Structural
              problems in long-form writing are almost always problems of intention:
              the structure does not hold because the writer has not yet fully
              resolved what the work is trying to do. The Scholar asks Socratic
              questions about structure &mdash; why this order, what does this
              section earn, what would be lost if this chapter came last &mdash;
              without prescribing solutions. You arrive at your own structural
              answer through the process of defending and refining your thinking.
            </p>
          </div>
        </section>

        {/* ── SECTION 6: Anti-Generation Principle & Voice ────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            The Anti-Generation Principle: Your Voice Is Not a Prompt
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            MEOK will not write your novel for you. This is not a limitation of
            capability; it is a deliberate ethical commitment. The decision is
            grounded in MEOK&apos;s Maternal Covenant &mdash; specifically its
            autonomy dimension, which protects your right to be the author of your
            own work and your own life.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            In the world of AI writing tools, this makes MEOK unusual. Every other
            major AI writing product is optimised for generation. They are
            successful commercially because they make it easier to produce content
            at scale. But &ldquo;content at scale&rdquo; is not a goal that most
            serious writers have. The goal is a specific work, done well, that
            sounds like the person who made it.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            Voice is not an aesthetic preference. It is the accumulation of
            everything you have read, thought, felt, and decided over the course of
            your life as a writer. It is irreplaceable, and it cannot be
            approximated by any AI, however sophisticated. When MEOK helps with
            phrasing, it reflects your existing style back at you &mdash; it notices
            the patterns in how you write and uses them to help you find the sentence
            you are looking for, rather than imposing its own.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
            }}
          >
            This is the most important thing MEOK does for writers: it keeps the
            work yours. In an environment where AI-generated prose is becoming
            genuinely difficult to distinguish from human writing, the greatest
            thing a writer can protect is their distinctiveness. MEOK is built to
            help you do that &mdash; not to take it from you.
          </p>
        </section>

        {/* ── SECTION 7: The Morning Briefing ─────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            The Morning Briefing: Your Writing Day Starts With Clarity
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s morning briefing is one of its most practically valuable
            features for working writers. Every morning, MEOK prepares a short
            structured briefing based on what it knows about your work. It covers
            two things: what did you work on yesterday, and what is the intention
            for today?
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            This matters because writers rarely start their working day with full
            clarity about where they left off or what they are trying to do next.
            The gap between sitting down and actually writing is where momentum
            dies. The morning briefing closes that gap: MEOK has remembered for
            you, and it presents the summary before you have had to spend any
            mental energy recovering context.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.25rem",
            }}
          >
            The briefing also includes any Orion research summaries from overnight
            tasks you queued. So if you sent Orion to research the social history
            of a specific period last night, that material is waiting for you before
            your first coffee. The day has already begun, in the most useful sense.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
            }}
          >
            Writers who use the morning briefing consistently describe a meaningful
            reduction in the friction at the start of the working day. The blank
            page problem is significantly less daunting when you already know what
            you are going to work on and why.
          </p>
        </section>

        {/* ── SECTION 8: Who MEOK Is For ──────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            Which Writers Benefit Most From MEOK
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
              marginBottom: "1.5rem",
            }}
          >
            MEOK is most valuable to writers for whom the quality of thinking behind
            the work is as important as the quality of the prose itself. That
            includes:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                title: "Fiction Writers",
                detail:
                  "Novelists, short story writers, and speculative fiction authors working on long projects that require sustained intellectual commitment.",
              },
              {
                title: "Essayists",
                detail:
                  "Writers whose work depends on the rigour of the argument, not just the quality of the prose. The Scholar is built for this work.",
              },
              {
                title: "Screenwriters",
                detail:
                  "Structure and character logic are the central craft challenges. The Scholar\u2019s Socratic approach to story structure is directly applicable.",
              },
              {
                title: "Journalists",
                detail:
                  "Long-form investigative journalists need to stress-test arguments, manage research overload, and maintain narrative clarity across complex material.",
              },
              {
                title: "Bloggers & Creators",
                detail:
                  "Writers building a body of work over time, who need help with consistency, voice development, and ideas that stay true to their perspective.",
              },
              {
                title: "Academics",
                detail:
                  "PhD students and researchers who need a thinking partner for literature review, argument structure, and the anxiety that accompanies high-stakes written work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    color: "#c9a84c",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    color: "#f5f0e8",
                    opacity: 0.75,
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#f5f0e8",
              opacity: 0.85,
            }}
          >
            MEOK is less well-suited to writers whose primary need is volume
            &mdash; producing large amounts of commodity content at speed. Those
            writers may find generation-focused tools more immediately useful. MEOK
            is for writers who want to produce work that could only have come from
            them.
          </p>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "2rem",
              lineHeight: 1.25,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* FAQ 1 */}
            <div
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#c9a84c",
                  marginBottom: "0.75rem",
                }}
              >
                Will MEOK write my book for me?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#f5f0e8",
                  opacity: 0.82,
                }}
              >
                No &mdash; and this is deliberate. MEOK is built around an
                anti-generation principle grounded in its Maternal Covenant: it will
                not write your novel, essay, or screenplay for you. This protects
                your authorship. What MEOK does instead is help you think more
                clearly, break creative blocks, and find the words that were already
                inside you. The work remains entirely yours.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#c9a84c",
                  marginBottom: "0.75rem",
                }}
              >
                What is the Trickster companion and why is it good for writers?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#f5f0e8",
                  opacity: 0.82,
                }}
              >
                The Trickster is one of MEOK&apos;s companion archetypes, drawn from
                Jungian psychology. Trickster figures like Loki, Coyote, and Anansi
                disrupt fixed patterns and expose hidden assumptions. For writers stuck
                in a groove, the Trickster does not provide writing prompts or
                templates. It asks the question that changes the frame entirely
                &mdash; and once the frame is visible, the block that seemed immovable
                often dissolves on its own.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#c9a84c",
                  marginBottom: "0.75rem",
                }}
              >
                How does MEOK help with writer&apos;s block specifically?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#f5f0e8",
                  opacity: 0.82,
                }}
              >
                MEOK treats writer&apos;s block as a clarity problem, not a
                word-count problem. Rather than generating a scene to fill the gap,
                it asks what you are actually trying to say. Writer&apos;s block is
                almost always unresolved intentional clarity: you cannot write
                because you do not yet fully know what the scene or section is for.
                MEOK&apos;s Trickster and Scholar companions surface that clarity
                through questioning and reframing. Once you know what the work must
                do, the words usually follow.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#c9a84c",
                  marginBottom: "0.75rem",
                }}
              >
                Can MEOK help with research?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#f5f0e8",
                  opacity: 0.82,
                }}
              >
                Yes. MEOK&apos;s Orion agent is built for deep research tasks.
                Writers routinely lose entire working days to research rabbit holes.
                With Orion, you queue a specific research brief before you go to
                sleep &mdash; the social history of a period, the technical details
                of a profession, the documented facts behind a real event &mdash; and
                Orion works overnight. Your morning briefing includes a structured
                research summary. Your research is done before you sit down to write.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
            padding: "3rem 2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1rem",
            }}
          >
            Get Started
          </div>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            Meet the Companion That Keeps Your Voice Yours
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#f5f0e8",
              opacity: 0.78,
              marginBottom: "2rem",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Start your birth ceremony and choose the companion that fits where you
            are in your writing life. The Trickster to break the block. The Scholar
            to deepen the ideas. The Pioneer to hold the commitment. Your voice
            stays yours.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: "#c9a84c",
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.9rem 2.5rem",
              borderRadius: "6px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin Your Birth Ceremony
          </Link>
          <div
            style={{
              marginTop: "1.25rem",
              fontSize: "0.85rem",
              color: "#f5f0e8",
              opacity: 0.45,
            }}
          >
            No subscription required to start. Your data is sovereign from day one.
          </div>
        </section>
      </main>
    </div>
  );
}
