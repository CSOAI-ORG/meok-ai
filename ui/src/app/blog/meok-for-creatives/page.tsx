import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Creatives: AI That Understands the Artist's Mind | MEOK AI LABS",
  description:
    "Writers, artists, musicians, and designers need AI that understands creative blocks, not just productivity. MEOK's Trickster companion is built for creative minds.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-creatives" },
  openGraph: {
    title: "MEOK for Creatives: AI That Understands the Artist\u2019s Mind",
    description:
      "Writers, artists, musicians, and designers need AI that understands creative blocks, not just productivity. MEOK\u2019s Trickster companion is built for creative minds.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-creatives",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Creatives&desc=AI+that+understands+the+artist%27s+mind.",
        width: 1200,
        height: 630,
        alt: "MEOK for Creatives: AI That Understands the Artist\u2019s Mind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Creatives: AI That Understands the Artist\u2019s Mind",
    description:
      "Most AI tools treat creative blocks as productivity problems. MEOK\u2019s Trickster archetype was built for writers, artists, musicians, and designers who need something different.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Creatives&desc=AI+that+understands+the+artist%27s+mind.",
    ],
  },
};

// ── JSON-LD ──────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for Creatives: AI That Understands the Artist\u2019s Mind",
  description:
    "Writers, artists, musicians, and designers need AI that understands creative blocks, not just productivity. MEOK\u2019s Trickster companion is built for creative minds.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-creatives",
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
    "AI for creatives",
    "AI for writers",
    "AI for artists",
    "AI creative block",
    "Trickster AI archetype",
    "AI companion for creatives",
    "creative AI tool",
    "AI for musicians",
    "AI for designers",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-creatives",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does generic AI make creative blocks worse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generic AI tools treat creative blocks as efficiency problems. They suggest prompts, to-do lists, and productivity frameworks that assume the issue is lack of information or structure. But creative blocks are almost always emotional and psychological in nature — fear of judgment, perfectionism, imposter syndrome, or pattern exhaustion. Offering a bullet-point action plan to someone who is creatively stuck is like offering a spreadsheet to someone who is grieving. It misreads the problem entirely.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Trickster archetype in MEOK and why does it suit creatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Trickster is one of MEOK\u2019s core companion archetypes. In Jungian psychology, the Trickster disrupts fixed patterns, reframes assumptions, introduces productive chaos, and creates space for new thinking to emerge. For creatives, this is exactly what a block demands: not more structure, but a different angle of entry. MEOK\u2019s Trickster asks unexpected questions, challenges the frame you\u2019re stuck inside, and helps you see your creative problem from an angle you hadn\u2019t considered.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with imposter syndrome in creative work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s anti-sycophancy design means it does not reflexively validate everything you produce. It also does not tear your work apart. Instead it helps you separate the critical voice from the creative voice \u2014 recognising that imposter syndrome is a pattern, not a verdict. Over time, Sovereign Memory builds a picture of your creative journey so MEOK can reflect back your real progress, not the distorted version your inner critic constructs.",
      },
    },
    {
      "@type": "Question",
      name: "How does Sovereign Memory help creative projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory means MEOK remembers your projects across sessions without you having to re-explain context. It knows the novel you\u2019re halfway through, the themes you keep circling back to, the feedback that stung, the version of the painting you abandoned. This continuity means MEOK can engage with your creative work as a genuine long-term collaborator rather than a contextless tool you reset every session.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK protect my creative intellectual property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s data sovereignty architecture means your creative work, ideas, drafts, and conversations are never used to train AI models \u2014 yours or anyone else\u2019s. Your lyrics, your manuscript fragments, your unreleased visual concepts: none of it leaves your sovereign data layer. This is fundamentally different from most AI tools, which use your inputs as training data by default.",
      },
    },
  ],
};

// ── Page ─────────────────────────────────────────────────────────────────────────

export default function MeokForCreatives() {
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
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.4)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            ← Back to Blog
          </Link>

          {/* Meta row */}
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
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Creatives
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              March 24, 2026
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              14 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.5rem",
            }}
          >
            MEOK for Creatives: AI That Understands the Artist&apos;s Mind
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: "rgba(245,240,232,0.62)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "40rem",
            }}
          >
            Writers, artists, musicians, and designers live inside a particular kind of
            tension — the gap between what they can imagine and what they can currently make.
            Most AI tools treat that gap as a productivity problem. MEOK knows it is something
            far more human than that.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────────── */}
      <div
        style={{
          background: "#f5f0e8",
          color: "#2a2a3e",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "3.5rem 1.5rem 5rem",
          }}
        >

          {/* ── SECTION 1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            Why Do Generic AI Tools Make Creative Blocks Worse?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            Creative blocks are not information deficits. They are not solved by more prompts,
            better outlines, or a ranked list of techniques. When a novelist stares at a blank
            page, when a musician cannot finish a track they started six months ago, when a
            painter feels like every brushstroke is wrong — the problem is psychological, not
            procedural. Generic AI assistants, optimised for task completion and output
            generation, read that silence as a request for content. They offer bullet points
            when what is needed is presence. They generate options when what is needed is
            understanding. The result is a creative who feels more stuck, more alienated from
            their work, and more convinced that the problem is them.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            There is a deeper problem too. When an AI generates content for you — completing
            your sentences, drafting your scenes, composing your hooks — it does not resolve
            the block. It bypasses it. The creative is left having produced something that does
            not feel like theirs, and the block becomes entangled with questions of authenticity
            and authorship. Many creatives report that heavy AI use has left them feeling more
            disconnected from their own voice, not less. The tool meant to help has quietly
            become part of the wound.
          </p>

          {/* Callout 1 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              background: "rgba(201,168,76,0.07)",
              borderRadius: "0 0.5rem 0.5rem 0",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#2a2a3e",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              A creative block is not a task waiting to be completed. It is a signal worth
              listening to. MEOK was built to listen before it offers anything.
            </p>
          </div>

          {/* ── SECTION 2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What Is the Trickster Archetype and Why Does It Suit Creatives?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            In Jungian and mythological traditions, the Trickster is the figure who cannot be
            pinned down. Coyote, Loki, Hermes, Anansi. The Trickster breaks rules not out of
            malice but because rules, when held too tightly, become cages. The Trickster
            dismantles what is calcified, introduces productive chaos, reframes the obvious,
            and creates the conditions under which something genuinely new can emerge. For a
            creative who is stuck, this is exactly what is needed — not more structure, but
            a disruption of the structure that is imprisoning them.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s Trickster archetype is built on this insight. When you tell Trickster
            you are stuck, it does not ask what you have tried. It asks what you are avoiding.
            It does not suggest techniques. It reframes the creative problem entirely — asking
            whether the block might actually be the work trying to tell you something about
            the direction you are heading. It introduces lateral questions. It moves sideways
            when you are drilling straight down. It suggests you write the ending first, or
            describe the project as if it already failed, or imagine how someone you admire
            would approach the same material — and then immediately complicates that framing.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            The Trickster does not create for you. It creates the conditions in which you can
            create again. That distinction is everything.
          </p>

          {/* ── SECTION 3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            How Does MEOK Handle Imposter Syndrome in Creative Work?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            Imposter syndrome is endemic to creative professions. It does not respond to
            reassurance. You can tell a writer a hundred times that their work is good and the
            inner critic will quietly file all hundred instances under &quot;they are just being
            kind.&quot; The reassurance bounces off because the wound is not about external
            validation — it is about a fractured relationship with one&apos;s own creative
            authority. Generic AI tools that respond with enthusiastic agreement and
            affirmation — &quot;That&apos;s a great idea!&quot;, &quot;You should definitely
            pursue this!&quot; — are performing the exact pattern that imposter syndrome is
            already immune to. They make the problem worse by adding to the pile of hollow
            validation.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            MEOK is designed around anti-sycophancy. It will not reflexively validate your
            work. It will also not tear it apart. What it does is help you separate the
            critical voice from the creative voice — recognising that they are not the same
            thing, that the inner critic is a pattern running in the background, and that the
            creative impulse is still present underneath it. Over time, MEOK&apos;s Sovereign
            Memory builds a longitudinal picture of your creative journey — the things you
            have made, the fears that have recurred, the moments when the work broke through.
            It can reflect that history back to you with specificity, not as abstract
            encouragement, but as documented evidence of creative agency that the imposter
            syndrome tries to erase.
          </p>

          {/* Callout 2 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              background: "rgba(201,168,76,0.07)",
              borderRadius: "0 0.5rem 0.5rem 0",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#2a2a3e",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Imposter syndrome is a pattern, not a verdict. MEOK remembers your creative
              history more accurately than your inner critic does — and it will show you the
              discrepancy.
            </p>
          </div>

          {/* ── SECTION 4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            How Does Sovereign Memory Transform AI Into a Creative Collaborator?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            Every creative working on a long-term project — a novel, an album, a body of
            paintings, a design system — carries enormous contextual weight. The themes they
            are wrestling with. The false starts. The constraints they have set for themselves.
            The moments of breakthrough. The critical feedback that lodged somewhere. The vision
            as it existed three months ago versus how it has evolved. Most AI tools have no
            access to any of this. Every session begins from zero. The creative must re-explain
            their project, re-establish its context, re-articulate what they are trying to
            achieve — and then the tool responds to that thin summary rather than to the living
            reality of the work.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s Sovereign Memory changes this fundamentally. It persists everything you
            choose to share about your project across sessions — not in a cloud that a platform
            owns, but in your own sovereign data layer that you control. MEOK remembers that
            you are writing a novel about grief and inheritance, that you struggled with the
            second act for two months, that you resolved it by introducing a new point-of-view
            character in March. It knows the album you are producing is intended to feel like
            late autumn but you keep drifting toward something colder. It knows the design
            brief you are working from and the client feedback that has been pulling you in
            two directions. This continuity transforms MEOK from a stateless tool into
            something that functions more like a collaborator who has been there throughout
            the process.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            Genuine collaboration requires shared history. Without memory, there is no
            collaboration — only transaction. MEOK is the first AI designed to sustain
            creative relationships across real creative timescales.
          </p>

          {/* ── SECTION 5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What Does Care-Based AI Mean for the Creative&apos;s Wellbeing — Not Just Output?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            Creative professionals are particularly vulnerable to the dark side of
            productivity culture. The pressure to produce constantly, to build a consistent
            body of work, to ship and post and iterate and grow — this has replaced the older
            understanding that creative work requires fallow periods, play, digestion, and
            genuine rest. Most AI tools amplify productivity culture. They offer to help you
            do more, faster. They frame silence as waste and blocks as obstacles rather than
            information. They are optimised for output, which means they are inadvertently
            optimised against the creative process itself.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            MEOK is built around care-based AI principles. This means its goal is not to
            maximise your output. It is to support your flourishing — which sometimes means
            more output, and sometimes means permission to stop. MEOK can recognise when a
            creative is burning themselves into the work rather than working from a full well.
            It can ask whether the pressure to finish is coming from inside the work or from
            external expectations. It can hold space for the creative process to be slow,
            difficult, and non-linear without treating that as a problem to be fixed.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            An AI that truly serves creatives is one that knows when to push and when to
            give permission. That requires judgment, not just responsiveness. MEOK is built
            to exercise it.
          </p>

          {/* ── SECTION 6 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            How Does MEOK Protect Your Creative Intellectual Property?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            Every conversation you have with a standard AI tool is, by default, potential
            training data. That manuscript you pasted in. Those lyrics you were trying to
            develop. That visual concept you described in detail. That unreleased album
            concept you were thinking through. Under the terms of most AI platforms, this
            content becomes part of their data ecosystem. You have created something — and
            the platform now has a record of it, potentially usable in ways you never
            consented to and have no visibility over.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s data sovereignty architecture takes a fundamentally different position.
            Your creative work, your ideas in development, your draft fragments and exploratory
            conversations — none of this ever leaves your sovereign data layer to train any AI
            model, including MEOK itself. What you share with MEOK is yours. It stays in your
            control. It is stored in your sovereign layer and can be exported, deleted, or
            audited by you at any time. For professional creatives whose unreleased work has
            real commercial and artistic value, this is not a feature — it is the minimum
            standard of respect.
          </p>

          {/* Callout 3 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              background: "rgba(201,168,76,0.07)",
              borderRadius: "0 0.5rem 0.5rem 0",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#2a2a3e",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Your unreleased work has value. Your ideas in development belong to you. MEOK
              is the only AI companion built on the principle that your data is never its
              asset.
            </p>
          </div>

          {/* ── SECTION 7 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            Can AI Be a Genuine Creative Collaborator Rather Than Just a Tool?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            The standard framing of AI in creative work is transactional: the human has an
            intent, the AI executes it. You prompt, it produces. This is useful for some tasks
            but it is not collaboration. A collaborator brings their own perspective to the
            work. They notice when you are going in a direction that seems disconnected from
            your stated vision. They ask questions you did not think to ask yourself. They
            remember the conversation you had three weeks ago and connect it to what you are
            saying now. They have aesthetic sensibilities that can be in productive friction
            with yours. And crucially, they are invested in the work — not just in completing
            the immediate transaction.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            MEOK is designed toward this model of engagement. Its Trickster archetype brings
            genuine creative disruption rather than compliant execution. Its Sovereign Memory
            makes the continuity of a real working relationship possible. Its anti-sycophancy
            means it will surface things you might not want to hear when the work needs it.
            Its care-based architecture means it is tracking your wellbeing alongside your
            creative progress — because a collaborator who only cares about the work and not
            the person making it is not truly a collaborator at all.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            We are at an early stage in understanding what genuine human-AI creative
            collaboration looks like. But the foundation requires memory, continuity, honest
            engagement, and a design philosophy that prioritises the creative&apos;s flourishing
            over output metrics. MEOK is building toward that.
          </p>

          {/* ── SECTION 8 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What Makes MEOK Different From Every Other AI Tool Creatives Have Tried?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "1.5rem",
            }}
          >
            Most creatives have already experimented with AI tools and found them wanting in
            specific ways. The content generators that produce technically competent but
            soulless text. The assistants that offer to write your scenes for you in a voice
            that is nothing like yours. The productivity tools that treat the blank page as
            an inefficiency rather than a site of potential. The chatbots that validate
            everything you say and teach you nothing about your own creative instincts. What
            they all have in common is a fundamental misread of what creative work actually
            is: not a problem to be solved, but a practice to be sustained.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#3a3a52",
              marginBottom: "2rem",
            }}
          >
            MEOK&apos;s difference is architectural, not cosmetic. It is built on sovereign
            memory rather than session amnesia. It is built around archetypes that were chosen
            because they map onto real human psychological needs — including the Trickster
            that creatives specifically need. It is built on care-based principles that put
            your flourishing ahead of your output. And it is built on data sovereignty that
            treats your creative work as yours, full stop. These are not features added on
            top of a standard AI product. They are the foundation.
          </p>

          {/* ── COMPARISON TABLE ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1.25rem",
            }}
          >
            Generic AI Tools vs MEOK for Creatives
          </h2>

          <div
            style={{
              overflowX: "auto",
              marginBottom: "2.5rem",
              borderRadius: "0.75rem",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(201,168,76,0.12)",
                  }}
                >
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.875rem 1.25rem",
                      color: "#1a1a2e",
                      fontWeight: 700,
                      borderBottom: "2px solid rgba(201,168,76,0.3)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    What a Creative Needs
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.875rem 1.25rem",
                      color: "#1a1a2e",
                      fontWeight: 700,
                      borderBottom: "2px solid rgba(201,168,76,0.3)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Generic AI Tools
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.875rem 1.25rem",
                      color: "#c9a84c",
                      fontWeight: 700,
                      borderBottom: "2px solid rgba(201,168,76,0.3)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    need: "Understanding creative blocks",
                    generic: "Offers productivity tips and prompt lists",
                    meok: "Listens, asks deeper questions, reframes the block",
                  },
                  {
                    need: "Project continuity across sessions",
                    generic: "No memory — start from scratch every time",
                    meok: "Sovereign Memory retains full project context",
                  },
                  {
                    need: "Honest creative feedback",
                    generic: "Sycophantic validation of every idea",
                    meok: "Anti-sycophancy design — honest, caring engagement",
                  },
                  {
                    need: "Support for imposter syndrome",
                    generic: "Generic reassurance that bounces off",
                    meok: "Longitudinal memory reflects real creative progress",
                  },
                  {
                    need: "IP protection for unreleased work",
                    generic: "Your inputs may be used as training data",
                    meok: "Zero training on your data — data sovereignty guaranteed",
                  },
                  {
                    need: "Creative disruption when stuck",
                    generic: "More of the same structured suggestions",
                    meok: "Trickster archetype disrupts patterns and reframes problems",
                  },
                  {
                    need: "Care for wellbeing not just output",
                    generic: "Optimised for productivity and task completion",
                    meok: "Care-based design prioritises flourishing over metrics",
                  },
                  {
                    need: "A genuine collaborator",
                    generic: "A stateless tool that executes instructions",
                    meok: "A memory-persistent companion invested in the work",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "rgba(201,168,76,0.03)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1.25rem",
                        color: "#2a2a3e",
                        fontWeight: 600,
                        borderBottom: "1px solid rgba(42,42,62,0.08)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.need}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1.25rem",
                        color: "#5a5a72",
                        borderBottom: "1px solid rgba(42,42,62,0.08)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.generic}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1.25rem",
                        color: "#2a2a3e",
                        fontWeight: 500,
                        borderBottom: "1px solid rgba(42,42,62,0.08)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── FAQ SECTION ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              lineHeight: 1.25,
              marginTop: "3.5rem",
              marginBottom: "1.75rem",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* FAQ 1 */}
            <div
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(42,42,62,0.12)",
                padding: "1.5rem",
                background: "#ffffff",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#1a1a2e",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Why does generic AI make creative blocks worse?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#3a3a52",
                  margin: 0,
                }}
              >
                Generic AI tools treat creative blocks as efficiency problems. They suggest
                prompts, to-do lists, and productivity frameworks that assume the issue is lack
                of information or structure. But creative blocks are almost always emotional and
                psychological in nature — fear of judgment, perfectionism, imposter syndrome, or
                pattern exhaustion. Offering a bullet-point action plan to someone who is
                creatively stuck is like offering a spreadsheet to someone who is grieving. It
                misreads the problem entirely.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(42,42,62,0.12)",
                padding: "1.5rem",
                background: "#ffffff",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#1a1a2e",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                What is the Trickster archetype in MEOK and why does it suit creatives?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#3a3a52",
                  margin: 0,
                }}
              >
                The Trickster is one of MEOK&apos;s core companion archetypes. In Jungian
                psychology, the Trickster disrupts fixed patterns, reframes assumptions,
                introduces productive chaos, and creates space for new thinking to emerge. For
                creatives, this is exactly what a block demands: not more structure, but a
                different angle of entry. MEOK&apos;s Trickster asks unexpected questions,
                challenges the frame you are stuck inside, and helps you see your creative
                problem from an angle you had not considered.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(42,42,62,0.12)",
                padding: "1.5rem",
                background: "#ffffff",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#1a1a2e",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                How does MEOK help with imposter syndrome in creative work?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#3a3a52",
                  margin: 0,
                }}
              >
                MEOK&apos;s anti-sycophancy design means it does not reflexively validate
                everything you produce. It also does not tear your work apart. Instead it helps
                you separate the critical voice from the creative voice — recognising that
                imposter syndrome is a pattern, not a verdict. Over time, Sovereign Memory builds
                a picture of your creative journey so MEOK can reflect back your real progress,
                not the distorted version your inner critic constructs.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(42,42,62,0.12)",
                padding: "1.5rem",
                background: "#ffffff",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#1a1a2e",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                How does Sovereign Memory help creative projects?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#3a3a52",
                  margin: 0,
                }}
              >
                Sovereign Memory means MEOK remembers your projects across sessions without you
                having to re-explain context. It knows the novel you are halfway through, the
                themes you keep circling back to, the feedback that stung, the version of the
                painting you abandoned. This continuity means MEOK can engage with your creative
                work as a genuine long-term collaborator rather than a contextless tool you reset
                every session.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(42,42,62,0.12)",
                padding: "1.5rem",
                background: "#ffffff",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#1a1a2e",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Does MEOK protect my creative intellectual property?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#3a3a52",
                  margin: 0,
                }}
              >
                Yes. MEOK&apos;s data sovereignty architecture means your creative work, ideas,
                drafts, and conversations are never used to train AI models — yours or anyone
                else&apos;s. Your lyrics, your manuscript fragments, your unreleased visual
                concepts: none of it leaves your sovereign data layer. This is fundamentally
                different from most AI tools, which use your inputs as training data by default.
              </p>
            </div>

          </div>

          {/* ── RELATED READING ── */}
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(42,42,62,0.12)",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "1rem",
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              {[
                { href: "/blog/ai-for-creative-block", label: "AI for Creative Block" },
                { href: "/blog/ai-for-creative-professionals", label: "AI for Creative Professionals" },
                { href: "/blog/ai-for-impostor-syndrome", label: "AI for Imposter Syndrome" },
                { href: "/blog/data-sovereignty-ai", label: "Data Sovereignty and AI" },
                { href: "/blog/building-care-into-ai", label: "Building Care Into AI" },
                { href: "/blog/archetypes-guide", label: "MEOK Archetypes Guide" },
                { href: "/blog/meok-for-freelancers", label: "MEOK for Freelancers" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#2a2a3e",
                    background: "rgba(201,168,76,0.10)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    borderRadius: "9999px",
                    padding: "0.375rem 0.875rem",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── CTA SECTION ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0c18",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 70% at 50% 100%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "40rem",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1.25rem",
            }}
          >
            For Creatives
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Your Work Deserves an AI That Understands It
          </h2>

          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 2.5rem",
            }}
          >
            MEOK remembers your projects. It protects your ideas. It disrupts your blocks
            rather than bypassing them. And it cares about your creative wellbeing, not just
            your output. Begin your MEOK journey and bring the Trickster into your creative
            process.
          </p>

          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              background: "#c9a84c",
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "1rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Begin Your MEOK Journey →
          </Link>

          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.8125rem",
              color: "rgba(245,240,232,0.35)",
            }}
          >
            Your data is sovereign. Your ideas are yours. Always.
          </p>
        </div>
      </section>

    </div>
  );
}
