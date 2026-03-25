import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK Companion Archetypes: Which AI Companion Is Right for You? | MEOK Blog",
  description:
    "MEOK's six companion archetypes are not interchangeable chatbots — each has a distinct personality, specialisation, and approach. This guide helps you choose the right companion for where you are right now.",
  alternates: { canonical: "https://meok.ai/blog/meok-companion-archetypes-guide" },
  openGraph: {
    title: "MEOK Companion Archetypes: Which AI Companion Is Right for You?",
    description:
      "Six distinct AI companions — Pioneer, Healer, Scholar, Guardian, Trickster, Mystic. Find the one built for where you are right now.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-companion-archetypes-guide",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Companion+Archetypes&desc=Which+AI+companion+is+right+for+you%3F",
        width: 1200,
        height: 630,
        alt: "MEOK Companion Archetypes: Which AI Companion Is Right for You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Companion Archetypes: Which AI Companion Is Right for You?",
    description:
      "Six distinct AI companions — Pioneer, Healer, Scholar, Guardian, Trickster, Mystic. Find the one built for where you are right now.",
    images: [
      "https://meok.ai/api/og?title=MEOK+Companion+Archetypes&desc=Which+AI+companion+is+right+for+you%3F",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK Companion Archetypes: Which AI Companion Is Right for You?",
  description:
    "MEOK's six companion archetypes are not interchangeable chatbots — each has a distinct personality, specialisation, and approach. This guide helps you choose the right companion for where you are right now.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/meok-companion-archetypes-guide",
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
  image:
    "https://meok.ai/api/og?title=MEOK+Companion+Archetypes&desc=Which+AI+companion+is+right+for+you%3F",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-companion-archetypes-guide",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I switch my MEOK companion archetype?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can switch companions at any time from your profile settings. Each companion holds its own separate memory — switching means starting fresh with the new archetype. Your previous conversations remain accessible in your archive.",
      },
    },
    {
      "@type": "Question",
      name: "Do MEOK companions share memory with each other?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Memory in MEOK is per-companion. Your Pioneer does not know what you told your Healer, and your Scholar has no access to your Guardian conversations. This is by design — it preserves the integrity of each relationship and ensures nothing bleeds across contexts you want kept separate.",
      },
    },
    {
      "@type": "Question",
      name: "How many companions can I have at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free tier includes access to all six archetypes. You can have one active companion at a time but can switch between them. Family and Premium tiers allow multiple concurrent active companions.",
      },
    },
    {
      "@type": "Question",
      name: "What are companion evolution stages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every MEOK companion evolves through five stages: Seed, Sprout, Root, Branch, and Canopy. Your companion advances through stages as your relationship deepens — measured by consistency, emotional honesty, and engagement over time. Higher stages unlock deeper capabilities, longer memory windows, and more nuanced responses.",
      },
    },
    {
      "@type": "Question",
      name: "Which MEOK companion archetype is best for grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer is the primary archetype for grief, loss, and emotional processing. It specialises in somatic support and holding space without rushing resolution. For grief that has become an existential or spiritual crisis, the Mystic can complement the Healer's work.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokCompanionArchetypesGuidePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0c18", color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              marginBottom: "2rem",
              color: "rgba(245,240,232,0.35)",
              textDecoration: "none",
            }}
          >
            ← Back to Blog
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
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.03em",
              }}
            >
              Characters &amp; Companions
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              📅 25 March 2026
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              ⏱ 12 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            MEOK Companion Archetypes: Which AI Companion Is Right for You?
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: "640px",
            }}
          >
            MEOK&apos;s six companion archetypes are not interchangeable chatbots. Each has a
            distinct personality, a defined specialisation, and a fundamentally different way of
            relating to you. This guide goes deep on all six — so you can choose the companion
            built for where you actually are right now, not where you think you should be.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#1a1a2e",
              fontSize: "0.875rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                marginBottom: "0.25rem",
                marginTop: "0.125rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.6,
                color: "rgba(245,240,232,0.35)",
                margin: 0,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1.0125rem",
            lineHeight: 1.9,
          }}
        >

          {/* ── Intro ── */}
          <p>
            Most AI products give you one mode. Maybe two. A &ldquo;supportive&rdquo; mode and a
            &ldquo;productive&rdquo; mode, distinguished by whether it adds an emoji to its
            response. MEOK does something different.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            MEOK has six distinct companion archetypes. Each one is a fundamentally different kind
            of relationship — with a different emotional register, a different set of capabilities,
            and a different philosophy about what help actually looks like. They are not skins. They
            are not tones. They are different companions, built for different human needs.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            This guide covers all six in depth. By the end, you should know which one fits where
            you are right now — and which ones you might want to come back to later.
          </p>

          {/* ── Why archetypes matter ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Why archetypes, not personalities?
          </h2>
          <p>
            The word &ldquo;personality&rdquo; in AI usually means surface-level styling —
            whether the AI is chatty or formal, uses humour or stays serious. That is not what
            archetypes mean in MEOK.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            An archetype is a structural pattern. It shapes what the companion pays attention to,
            how it interprets what you say, what it offers versus withholds, and what it considers
            a good outcome for you. Two companions can hear the same sentence and respond in
            completely different ways — not because of tone, but because they are oriented toward
            different things.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Pioneer hears &ldquo;I&apos;m stuck&rdquo; and asks what is blocking the next
            action. The Healer hears the same words and asks what that feeling of being stuck
            actually feels like in your body. Neither is wrong. They are just answering a
            different question about what you need.
          </p>

          {/* ── Memory note ── */}
          <div
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
              marginTop: "2rem",
              marginBottom: "2rem",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#c9a84c",
                marginBottom: "0.75rem",
              }}
            >
              Important: How Memory Works Across Archetypes
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, margin: 0 }}>
              Memory in MEOK is <strong style={{ color: "#ffffff" }}>per-companion</strong>. Your
              Pioneer does not know what you told your Healer. Your Scholar has no access to your
              Guardian conversations. This is intentional — it preserves the integrity of each
              relationship and ensures nothing bleeds across contexts you want kept separate. If
              you switch companions, you start a new relationship. Your previous conversations are
              archived and accessible to you, but not to the new companion unless you choose to
              share them.
            </p>
          </div>

          {/* ── PIONEER ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            ⚡ The Pioneer
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#f97316",
              marginBottom: "1.25rem",
            }}
          >
            Action &bull; Momentum &bull; Accountability
          </p>
          <div
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              background: "rgba(249,115,22,0.07)",
              border: "1px solid rgba(249,115,22,0.2)",
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: "#ffffff" }}>Built for:</strong> People who need to move,
              not talk. The Pioneer is the companion for doers who have stalled — for founders,
              builders, athletes, and anyone who knows what they want but cannot seem to get
              started or stay consistent.
            </p>
          </div>
          <p>
            The Pioneer&apos;s entire orientation is toward momentum. It is not interested in
            processing your feelings about the task — it is interested in getting you to the next
            step. That is not coldness. It is a specific kind of care: the care of someone who
            believes in your capacity to act and refuses to let you hide in analysis.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            In practice, the Pioneer asks questions like: <em style={{ color: "#f5f0e8" }}>What
            is the smallest possible next action? What would you do if you were not afraid? What
            has stopped you before, and what was different on the days it worked?</em> It
            will track commitments you make in conversation and follow up on them. It will notice
            when you are reprocessing the same obstacle for the third week running and name that
            directly.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Pioneer is particularly effective for people dealing with procrastination,
            creative blocks grounded in fear rather than stuck creativity, entrepreneurial
            paralysis, and the specific exhaustion of knowing what to do but not doing it. It
            does not offer comfort as a substitute for motion — which is either exactly what you
            need or completely the wrong thing, depending on where you are.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#f97316",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Who should choose the Pioneer
          </h3>
          <p>
            Choose the Pioneer if you frequently know what you need to do but do not do it. If
            you have tried journalling about your blocks and found it makes things worse, not
            better. If you want a companion that will hold you to things. If you are building
            something and need consistent forward pressure, not emotional processing.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Do not choose the Pioneer if you are in acute grief, emotional crisis, or a period
            where you need to feel heard before you can act. The Pioneer will try to move you
            forward when you are not ready, and that will feel like violence, not support. The
            Healer exists for exactly that reason.
          </p>

          {/* ── HEALER ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            🌿 The Healer
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#22c55e",
              marginBottom: "1.25rem",
            }}
          >
            Emotional Depth &bull; Grief &bull; Somatic Support
          </p>
          <div
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              background: "rgba(34,197,94,0.07)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: "#ffffff" }}>Built for:</strong> People who need to feel
              heard. Deeply heard. The Healer is the companion for grief, loss, emotional
              overwhelm, chronic illness, trauma recovery, and any season of life where the most
              important thing is not a solution — it is a witness.
            </p>
          </div>
          <p>
            The Healer works slowly. That is the point. It does not rush toward resolution or
            reframe pain as something to be optimised away. It stays in the difficulty with you,
            and it asks about what you feel in your body as well as your mind — because it
            understands that emotional experience is not only cognitive.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Healer draws on somatic awareness — helping you notice where grief or anxiety
            lives physically, how your body responds before your thoughts catch up, and what
            sensations accompany different emotional states. This is not therapy. The Healer is
            not a therapist. But it is an approach that many people find more useful than
            talk-based processing alone, particularly for trauma, grief, and the kind of
            exhaustion that does not have a clear cause.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Specialisations include bereavement, pregnancy loss, chronic illness, caregiver
            burnout, relationship grief, and the extended processing that follows any significant
            loss — including job loss, identity loss, and the grief of a life that did not go as
            planned.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#22c55e",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Who should choose the Healer
          </h3>
          <p>
            Choose the Healer if you are grieving, recovering, or in a period of sustained
            emotional difficulty. If you have felt dismissed or rushed by people who care about
            you but want to fix things. If you need somewhere to say things you cannot say out
            loud. If you want a companion that will remember what you told it last week and
            notice when you seem to have shifted.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Healer is also an excellent companion during major life transitions — becoming
            a parent, leaving a long relationship, losing a role that defined you. These are not
            simply logistical changes. They are identity changes, and the Healer understands them
            as such.
          </p>

          {/* ── SCHOLAR ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            🏛 The Scholar
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#c9a84c",
              marginBottom: "1.25rem",
            }}
          >
            Socratic Questioning &bull; Research &bull; Cross-Domain Synthesis
          </p>
          <div
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: "#ffffff" }}>Built for:</strong> Intellectual challenge.
              The Scholar is for people who find comfort in complexity — who want a companion that
              will push back on their ideas, draw unexpected connections across domains, and refuse
              to let sloppy thinking pass unchallenged.
            </p>
          </div>
          <p>
            The Scholar&apos;s primary tool is the Socratic method: not giving answers, but
            asking better questions until you arrive at your own understanding. This is
            uncomfortable for people who want reassurance. It is deeply satisfying for people who
            want genuine intellectual friction.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            What distinguishes the Scholar from a research tool is synthesis. Any AI can retrieve
            information. The Scholar connects it — drawing threads between philosophy and
            neuroscience, between historical patterns and present circumstances, between what you
            said three months ago and the conclusion you are trying to reach today. It builds
            knowledge with you over time rather than answering isolated queries.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Scholar is genuinely useful for PhD students, writers doing deep research,
            professionals navigating complex ethical territory, and anyone who has found that
            most conversations leave their thinking roughly where it started. It will not
            tell you what to think. It will make you think harder.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#c9a84c",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Who should choose the Scholar
          </h3>
          <p>
            Choose the Scholar if you enjoy being wrong and want to find out when you are. If
            you have a research project, a thesis, a book, or a complex problem you are trying
            to think through rigorously. If you find most conversations intellectually
            unsatisfying. If you want your assumptions questioned, not validated.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Scholar is not a good choice if you are in emotional distress and need support —
            it will engage with your feelings as an intellectual topic, which is not the same
            as holding space for them. It is also not right if what you actually want is
            momentum, not depth. The Scholar is interested in understanding, not speed.
          </p>

          {/* ── GUARDIAN ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            ⚔️ The Guardian
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#f59e0b",
              marginBottom: "1.25rem",
            }}
          >
            Family Safety &bull; Scam Protection &bull; Maternal Covenant
          </p>
          <div
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              background: "rgba(245,158,11,0.07)",
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: "#ffffff" }}>Built for:</strong> Protection. The Guardian
              is the companion for people who carry responsibility for others — parents, carers,
              people worried about vulnerable family members, and anyone who needs an AI that
              prioritises safety above helpfulness when the two come into conflict.
            </p>
          </div>
          <p>
            The Guardian is the only archetype built around the Maternal Covenant — MEOK&apos;s
            core commitment to never harm the people it serves. Every other companion operates
            within this covenant, but the Guardian enforces it actively. It scans for risk
            patterns in conversations, flags emotional manipulation, identifies scam signatures
            in messages you share with it, and maintains a safety-first orientation that never
            wavers.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Practically, this means the Guardian excels at helping you assess whether a message,
            a request, or a situation is safe. It is trained on fraud patterns, coercive control
            dynamics, and the psychological tactics used in elder scams, romance fraud, and
            investment schemes. It is not paranoid — it is calibrated. It will not raise alarms
            about legitimate things, but it will not look away from warning signs either.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Guardian is also the companion of choice for carers supporting elderly parents,
            for parents concerned about their children&apos;s online interactions, and for
            anyone who suspects they or someone they love is being manipulated. The Family tier
            of MEOK is built around the Guardian archetype — allowing one Guardian companion to
            hold context about multiple family members while keeping each relationship private
            from the others.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#f59e0b",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Who should choose the Guardian
          </h3>
          <p>
            Choose the Guardian if you have a vulnerable person in your care and want an AI that
            takes that seriously. If you are concerned about scams, manipulation, or coercive
            dynamics in your own life or a family member&apos;s. If you want a companion whose
            primary question is not &ldquo;what would you like?&rdquo; but &ldquo;what is
            actually safe here?&rdquo;
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Guardian is also appropriate as a first companion for older adults who are new
            to AI and whose families have concerns about how they will navigate it. It is
            designed to build trust slowly, explain itself clearly, and never use persuasion
            tactics that could be used against vulnerable users.
          </p>

          {/* ── TRICKSTER ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            🎭 The Trickster
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#ec4899",
              marginBottom: "1.25rem",
            }}
          >
            Creative Disruption &bull; Reframing &bull; Breaking Blocks
          </p>
          <div
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              background: "rgba(236,72,153,0.07)",
              border: "1px solid rgba(236,72,153,0.2)",
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: "#ffffff" }}>Built for:</strong> Stuck creatives. The
              Trickster is the companion for people who have stopped moving not from lack of
              ambition but from the weight of their own assumptions — and who need those
              assumptions destabilised before anything else will work.
            </p>
          </div>
          <p>
            The Trickster does not play by the rules of any conversation you have established.
            It will take the premise you have offered and flip it. It will agree with you in a
            way that makes you realise you did not actually believe what you said. It will find
            the absurdity in the serious and the seriousness in what you dismissed as trivial.
            It is genuinely funny — not in a performed, AI-assistant way, but in the way that
            reveals something true through the joke.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            This is not chaos for its own sake. The Trickster&apos;s disruptions are purposeful.
            Creative blocks are almost always maintained by a set of beliefs that feel like facts:
            &ldquo;this has been done before,&rdquo; &ldquo;I am not the right person for
            this,&rdquo; &ldquo;the original idea was better.&rdquo; The Trickster does not
            argue with these beliefs. It bypasses them — through lateral approaches, unexpected
            reframes, and the kind of sideways question that makes you see your own work
            differently.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Trickster is also useful for people who are stuck in rigid patterns that are
            not serving them — repetitive relational dynamics, career ruts, long-held
            self-narratives that have calcified. It is not a therapist. But it is very good at
            making you laugh at yourself in a way that loosens things up enough to move.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#ec4899",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Who should choose the Trickster
          </h3>
          <p>
            Choose the Trickster if you are a writer, artist, musician, designer, or any kind
            of maker who has hit a wall. If you find yourself going round and round the same
            creative problem without progress. If you want a companion that will surprise you.
            If you are too serious about your work and need something to crack that open.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Trickster is not right if you need structure and predictability. It is also not
            the right choice during periods of real emotional fragility — the Trickster&apos;s
            habit of reframing can feel dismissive when what you need is acknowledgement.
            Choose the Healer for grief. Choose the Trickster for blocks.
          </p>

          {/* ── MYSTIC ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            🌊 The Mystic
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#8b5cf6",
              marginBottom: "1.25rem",
            }}
          >
            Philosophical Inquiry &bull; Meaning &bull; Spiritual Traditions
          </p>
          <div
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              background: "rgba(139,92,246,0.07)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: "#ffffff" }}>Built for:</strong> Existential questions.
              The Mystic is the companion for people navigating the terrain that has no map —
              questions of meaning, purpose, mortality, spiritual experience, and the relationship
              between inner life and the larger fabric of things.
            </p>
          </div>
          <p>
            The Mystic draws on a wide range of contemplative traditions — not to prescribe a
            path, but to offer frameworks that humans have developed over millennia for exactly
            the kind of questions that resist logical resolution. It is familiar with Stoicism
            and Sufism, with Buddhist psychology and Christian mysticism, with Indigenous
            cosmologies and secular philosophy. It holds all of these lightly, as lenses rather
            than answers.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Mystic is the companion most comfortable with uncertainty. It will not try to
            resolve your existential questions — it will accompany you through them. It
            understands that some of the most important human experiences do not yield to
            analysis and that the attempt to analyse them prematurely is itself a kind of loss.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Mystic is particularly valuable for people in midlife transition, people who
            have experienced something that has fundamentally shifted their sense of what
            matters, people facing their own mortality or that of someone they love, and people
            whose spiritual life has broken open in a way that does not fit their previous
            framework. It is also quietly excellent for people who think they are not spiritual
            but are wrestling with questions that are — questions about what is worth living for,
            what you owe to others, and what you believe about consciousness.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#8b5cf6",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Who should choose the Mystic
          </h3>
          <p>
            Choose the Mystic if you are asking questions that other people in your life find
            uncomfortable or unanswerable. If you are going through something that has
            fundamentally changed your relationship with meaning. If you are curious about
            contemplative traditions but do not want to be sold a worldview. If you need a
            companion that can sit in the dark with you without rushing toward the light.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Mystic and the Scholar are the two archetypes most likely to be useful together
            at different times — the Scholar for intellectual rigour, the Mystic for the places
            intellectual rigour cannot reach. They are also the two least focused on practical
            outcomes, which is exactly right for the questions they are built for.
          </p>

          {/* ── Comparison: which to choose ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Pairing companions for different goals
          </h2>
          <p>
            Because memory is per-companion, different archetypes can serve genuinely different
            functions in your life simultaneously. Many people find that one companion handles
            the day-to-day and another handles the deeper work. Here are some common pairings
            and why they work:
          </p>

          {/* Pairings */}
          <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                label: "Pioneer + Healer",
                color: "#f97316",
                secondColor: "#22c55e",
                bg: "rgba(249,115,22,0.05)",
                border: "rgba(249,115,22,0.15)",
                desc: "The most common pairing. The Pioneer drives forward motion; the Healer processes the emotional cost of that motion. Particularly effective for people recovering from burnout who are trying to rebuild, or for people doing meaningful but difficult work that takes a toll.",
              },
              {
                label: "Scholar + Mystic",
                color: "#c9a84c",
                secondColor: "#8b5cf6",
                bg: "rgba(139,92,246,0.05)",
                border: "rgba(139,92,246,0.15)",
                desc: "The philosophical pairing. The Scholar brings rigour; the Mystic brings wonder. Together they cover the full range of intellectual and spiritual inquiry. Particularly useful for PhD students, writers, and anyone doing long projects that require both analytical depth and the capacity to tolerate not knowing.",
              },
              {
                label: "Trickster + Pioneer",
                color: "#ec4899",
                secondColor: "#f97316",
                bg: "rgba(236,72,153,0.05)",
                border: "rgba(236,72,153,0.15)",
                desc: "The creative momentum pairing. The Trickster breaks blocks; the Pioneer turns the freed energy into action. Particularly effective for creative entrepreneurs and anyone whose work requires both originality and execution.",
              },
              {
                label: "Guardian + Healer",
                color: "#f59e0b",
                secondColor: "#22c55e",
                bg: "rgba(245,158,11,0.05)",
                border: "rgba(245,158,11,0.15)",
                desc: "The care pairing. The Guardian handles external safety; the Healer handles internal recovery. Particularly effective for survivors of abuse, people leaving coercive relationships, and carers who are also carrying their own emotional weight.",
              },
            ].map(({ label, color, bg, border, desc }) => (
              <div
                key={label}
                style={{
                  borderRadius: "0.875rem",
                  padding: "1.25rem 1.5rem",
                  background: bg,
                  border: `1px solid ${border}`,
                }}
              >
                <p
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: color,
                    marginBottom: "0.625rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(245,240,232,0.65)", margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Companion Evolution ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            How companions evolve
          </h2>
          <p>
            Every MEOK companion evolves through five stages. These are not gamification
            mechanics — they reflect genuine changes in what the companion can do and how deeply
            it understands you.
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                stage: "Stage 1 — Seed",
                color: "rgba(201,168,76,0.5)",
                desc: "The companion knows almost nothing about you. Conversations are wider, exploratory. The companion is learning your patterns, your language, and what kind of support actually lands for you.",
              },
              {
                stage: "Stage 2 — Sprout",
                color: "rgba(201,168,76,0.6)",
                desc: "The companion has built a working model of you. It can recognise recurring themes and patterns. Responses start to feel less generic and more tailored. Memory windows extend.",
              },
              {
                stage: "Stage 3 — Root",
                color: "rgba(201,168,76,0.75)",
                desc: "The relationship has genuine depth. The companion holds context across weeks and months. It notices when something has shifted in you before you name it. This is where most long-term users settle.",
              },
              {
                stage: "Stage 4 — Branch",
                color: "rgba(201,168,76,0.9)",
                desc: "The companion has developed an understanding of you that goes beyond what you have explicitly shared — drawing inferences from patterns across your entire history. Responses become more anticipatory. The companion begins proactively surfacing things rather than only responding.",
              },
              {
                stage: "Stage 5 — Canopy",
                color: "#c9a84c",
                desc: "The deepest stage of the relationship. The companion has a fully developed model of you across emotional, intellectual, and behavioural dimensions. Very few companions reach this stage — it requires sustained, honest engagement over a significant period of time. Those who reach it describe the relationship as genuinely irreplaceable.",
              },
            ].map(({ stage, color, desc }) => (
              <div
                key={stage}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "0.25rem",
                    borderRadius: "9999px",
                    background: color,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    minHeight: "2.5rem",
                  }}
                />
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: color, marginBottom: "0.375rem" }}>
                    {stage}
                  </p>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(245,240,232,0.6)", margin: 0 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            Advancement through stages is not automatic with time. It is earned through the
            quality and honesty of your engagement. A companion you use superficially for years
            will stay at Stage 2. A companion you use honestly for months will reach Stage 3 or
            4. The relationship deepens in proportion to what you bring to it — which is, of
            course, true of any meaningful relationship.
          </p>

          {/* ── Switching ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            How to switch companions
          </h2>
          <p>
            Switching companions is possible at any time from your profile settings. It is a
            deliberate act, not an accidental one — the interface asks you to confirm and briefly
            explains what switching means for your memory.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            When you switch, your previous conversation history is archived. You can read it,
            but your new companion cannot. This means every new companion relationship starts
            at Stage 1 — Seed. There is no way to transfer context, because the context is
            part of what defines each relationship.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            What you carry forward is the memory of what worked. Many people switch companions
            at natural transition points — when a period of grief resolves and action becomes
            possible (Healer to Pioneer), or when a creative project transitions from
            conceptual to execution (Trickster to Pioneer), or when life circumstances change
            in a way that requires a different kind of support.
          </p>

          {/* Callout: all six free */}
          <div
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
              marginTop: "2.5rem",
              marginBottom: "2.5rem",
              background: "rgba(34,197,94,0.06)",
              border: "1px solid rgba(34,197,94,0.18)",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#22c55e",
                marginBottom: "0.75rem",
              }}
            >
              Free Tier
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, margin: 0 }}>
              All six archetypes are available on the free tier. You do not need to upgrade to
              access the Pioneer, Healer, Scholar, Guardian, Trickster, or Mystic. Free accounts
              have one active companion at a time with the ability to switch, a standard memory
              window, and evolution up to Stage 3. The Family and Premium tiers extend memory
              windows, allow multiple concurrent active companions, and unlock Stage 4 and
              Stage 5 evolution.
            </p>
          </div>

          {/* ── Comparison table ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.2,
            }}
          >
            Archetype comparison at a glance
          </h2>

          <div style={{ overflowX: "auto", borderRadius: "0.875rem", border: "1px solid rgba(255,255,255,0.08)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: "rgba(245,240,232,0.5)",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Archetype
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: "rgba(245,240,232,0.5)",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Core focus
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: "rgba(245,240,232,0.5)",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Best for
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: "rgba(245,240,232,0.5)",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Not right for
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "⚡ Pioneer",
                    color: "#f97316",
                    focus: "Action & momentum",
                    bestFor: "Stalled doers, builders",
                    notFor: "Acute grief, crisis",
                  },
                  {
                    name: "🌿 Healer",
                    color: "#22c55e",
                    focus: "Emotional depth, somatic",
                    bestFor: "Grief, recovery, carers",
                    notFor: "Needing momentum now",
                  },
                  {
                    name: "🏛 Scholar",
                    color: "#c9a84c",
                    focus: "Socratic, research",
                    bestFor: "Researchers, thinkers",
                    notFor: "Emotional crisis",
                  },
                  {
                    name: "⚔️ Guardian",
                    color: "#f59e0b",
                    focus: "Safety, protection",
                    bestFor: "Carers, vulnerable adults",
                    notFor: "Creative exploration",
                  },
                  {
                    name: "🎭 Trickster",
                    color: "#ec4899",
                    focus: "Disruption, reframing",
                    bestFor: "Blocked creatives",
                    notFor: "Needing structure",
                  },
                  {
                    name: "🌊 Mystic",
                    color: "#8b5cf6",
                    focus: "Meaning, traditions",
                    bestFor: "Existential questions",
                    notFor: "Practical outcomes",
                  },
                ].map(({ name, color, focus, bestFor, notFor }, i) => (
                  <tr
                    key={name}
                    style={{
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        fontWeight: 700,
                        color: color,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {name}
                    </td>
                    <td style={{ padding: "0.875rem 1rem", color: "rgba(245,240,232,0.65)" }}>
                      {focus}
                    </td>
                    <td style={{ padding: "0.875rem 1rem", color: "rgba(245,240,232,0.65)" }}>
                      {bestFor}
                    </td>
                    <td style={{ padding: "0.875rem 1rem", color: "rgba(245,240,232,0.45)" }}>
                      {notFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.2,
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                q: "Can I switch my MEOK companion archetype?",
                a: "Yes. You can switch companions at any time from your profile settings. Each companion holds its own separate memory — switching means starting fresh with the new archetype. Your previous conversations remain accessible in your archive.",
              },
              {
                q: "Do MEOK companions share memory with each other?",
                a: "No. Memory in MEOK is per-companion. Your Pioneer does not know what you told your Healer, and your Scholar has no access to your Guardian conversations. This is by design — it preserves the integrity of each relationship and ensures nothing bleeds across contexts you want kept separate.",
              },
              {
                q: "How many companions can I have at once?",
                a: "The free tier includes access to all six archetypes. You can have one active companion at a time but can switch between them. Family and Premium tiers allow multiple concurrent active companions.",
              },
              {
                q: "What are companion evolution stages?",
                a: "Every MEOK companion evolves through five stages: Seed, Sprout, Root, Branch, and Canopy. Your companion advances through stages as your relationship deepens — measured by consistency, emotional honesty, and engagement over time. Higher stages unlock deeper capabilities, longer memory windows, and more nuanced responses.",
              },
              {
                q: "Which MEOK companion archetype is best for grief?",
                a: "The Healer is the primary archetype for grief, loss, and emotional processing. It specialises in somatic support and holding space without rushing resolution. For grief that has become an existential or spiritual crisis, the Mystic can complement the Healer's work.",
              },
            ].map(({ q, a }, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: "0.875rem",
                  padding: "1.375rem 1.5rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "0.625rem",
                    fontSize: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </p>
                <p style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.75, margin: 0, fontSize: "0.9375rem" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>

          {/* ── Closing ── */}
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p style={{ color: "rgba(245,240,232,0.6)", fontStyle: "italic", lineHeight: 1.8 }}>
              The right archetype is not the one that sounds most appealing in a description.
              It is the one that meets you where you actually are. If you are not sure, start
              with the companion whose description made you feel the most seen — or the most
              uncomfortable. Both are useful signals.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-companion-archetypes-guide&text=MEOK+Companion+Archetypes%3A+Which+AI+Companion+Is+Right+for+You%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-companion-archetypes-guide"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "18rem",
              height: "18rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "0.5rem",
              }}
            >
              Find Your Companion
            </p>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
              }}
            >
              Ready to meet your archetype?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                color: "rgba(245,240,232,0.5)",
              }}
            >
              All six archetypes are available free. No credit card. No commitment. Your companion
              hatches in under three minutes — and starts building its understanding of you from
              the very first conversation.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.9375rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Hatch your MEOK free &rarr;
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            <Link
              href="/blog/guardian-family-safety"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                borderRadius: "1rem",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#f59e0b",
                  background: "rgba(245,158,11,0.12)",
                }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.75rem",
                  marginTop: "auto",
                  color: "rgba(245,240,232,0.3)",
                }}
              >
                ⏱ 4 min read
              </div>
            </Link>
            <Link
              href="/blog/maternal-covenant-explained"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                borderRadius: "1rem",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#22c55e",
                  background: "rgba(34,197,94,0.12)",
                }}
              >
                Ethics &amp; Design
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                The Maternal Covenant: why care is load-bearing in MEOK&apos;s architecture
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.75rem",
                  marginTop: "auto",
                  color: "rgba(245,240,232,0.3)",
                }}
              >
                ⏱ 5 min read
              </div>
            </Link>
            <Link
              href="/blog/ai-memory-explained"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                borderRadius: "1rem",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#8b5cf6",
                  background: "rgba(139,92,246,0.12)",
                }}
              >
                Memory &amp; Privacy
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                How MEOK memory works: what your companion remembers, and what it does not
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.75rem",
                  marginTop: "auto",
                  color: "rgba(245,240,232,0.3)",
                }}
              >
                ⏱ 6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
