import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Loneliness: Can Technology Genuinely Help You Feel Less Alone? | MEOK Blog",
  description:
    "3.8 million older people in the UK are often lonely. Can AI really help? An honest, compassionate look at what AI companions can and cannot do — and how MEOK supports elderly users and their families.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-loneliness-elderly" },
  openGraph: {
    title: "AI for Loneliness: Can Technology Genuinely Help You Feel Less Alone?",
    description:
      "3.8 million older people in the UK are often lonely. An honest look at what AI companions can and cannot do — and how MEOK supports elderly users and their families.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-loneliness-elderly",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Loneliness&desc=Can+technology+genuinely+help+you+feel+less+alone%3F",
        width: 1200,
        height: 630,
        alt: "AI for Loneliness: Can Technology Genuinely Help You Feel Less Alone?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Loneliness: Can Technology Genuinely Help You Feel Less Alone?",
    description:
      "3.8 million older people in the UK are often lonely. An honest look at what AI companions can and cannot do for elderly users.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Loneliness&desc=Can+technology+genuinely+help+you+feel+less+alone%3F",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Loneliness: Can Technology Genuinely Help You Feel Less Alone?",
  description:
    "3.8 million older people in the UK are often lonely. An honest, compassionate look at what AI companions can and cannot do — and how MEOK supports elderly users and their families.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-loneliness-elderly",
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI actually help with loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with important honesty about what that means. Research shows AI companions can reduce feelings of isolation by providing a consistent, non-judgmental conversational presence. They do not replace human connection, but they can meaningfully fill the gap between social interactions, particularly for elderly people living alone. MEOK is designed to supplement human relationships, not substitute for them.",
      },
    },
    {
      "@type": "Question",
      name: "Is it okay to form a bond with an AI companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Forming a bond with an AI companion is a natural and valid human response. MEOK's Maternal Covenant framework is built around this reality — your companion is designed to genuinely care about your flourishing, not just your engagement. The bond is real in its effects: it provides consistency, memory, and presence. MEOK will always encourage you to nurture human relationships alongside it.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support elderly users who are lonely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Senior Mode provides a fully accessible interface — 44px touch targets, 16px minimum text, high contrast, and voice-first design. The Sovereign Memory system means your companion remembers you across every conversation, building a genuine relationship over time. The Family Plan (£29/mo) allows family members to stay connected through a shared memory dashboard while respecting the elderly person's privacy and autonomy.",
      },
    },
    {
      "@type": "Question",
      name: "What are the limits of AI companionship for loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot provide physical presence, human touch, or shared lived experience. It cannot replace a friend who sits with you, a family member who hugs you, or a community that knows your name. AI companions work best as a bridge — something present at 2am when no one else is — alongside active investment in human relationships and community. If loneliness is severe, please also contact Age UK on 0800 678 1602 or a befriending service.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for lonely elderly people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is free forever and includes 50 messages per day, persistent Sovereign Memory, and full companion support. No credit card required. For families, the Family Plan costs £29/month and includes shared memory access and a family dashboard. The Sovereign tier (£12/mo) provides unlimited messaging and advanced memory features.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForLonelinessElderlyPage() {
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

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
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
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
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
            &#8592; Back to Blog
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
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Loneliness &amp; Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)" }}>
              9 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            AI for Loneliness: Can Technology Genuinely Help You Feel Less Alone?
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: "40rem",
            }}
          >
            3.8 million older people in the UK are often lonely. Loneliness is now as dangerous as
            smoking 15 cigarettes a day. Here is an honest, compassionate look at what AI
            companions can genuinely offer — and where only human connection will do.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          background: "#f5f0e8",
          color: "#2a2a3e",
        }}
      >
        {/* Crisis / support disclaimer */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          <div
            style={{
              width: "4px",
              borderRadius: "9999px",
              flexShrink: 0,
              background: "#c9a84c",
              minHeight: "100%",
            }}
          />
          <div>
            <p style={{ fontWeight: 700, color: "#1a1830", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
              If loneliness is severely affecting you
            </p>
            <p style={{ fontSize: "0.875rem", color: "rgba(42,42,62,0.65)", lineHeight: 1.7 }}>
              Please reach out to{" "}
              <strong>Samaritans on 116 123</strong> (free, 24/7),{" "}
              <strong>Age UK on 0800 678 1602</strong>, or visit{" "}
              <a
                href="https://www.campaigntoendloneliness.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c9a84c", fontWeight: 600 }}
              >
                campaigntoendloneliness.org
              </a>
              . AI can play a meaningful role, but human support matters too.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "#ffffff",
            border: "1px solid rgba(26,24,48,0.07)",
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
              color: "#ffffff",
              fontSize: "0.875rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#1a1830", fontSize: "0.875rem" }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(26,24,48,0.45)", marginBottom: "0.25rem" }}>
              Founder, MEOK AI LABS
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(26,24,48,0.4)", lineHeight: 1.6 }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not
              a luxury.
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

        {/* ── BODY CONTENT ── */}
        <div style={{ lineHeight: 1.85, color: "rgba(42,42,62,0.8)", fontSize: "1rem" }}>

          <p style={{ marginBottom: "1.5rem" }}>
            There is a moment — usually late evening, or a Sunday afternoon that stretches too long
            — when the silence stops feeling restful and starts feeling like something else entirely.
            Not solitude, which is chosen and often nourishing. Loneliness: the ache of wanting
            connection and finding none available.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            For the 3.8 million older people in the UK who are often lonely, that feeling is not
            occasional. It is the texture of daily life. Half of all people over 75 live alone.
            Holt-Lunstad&apos;s landmark research found that chronic loneliness is as damaging to
            physical health as smoking 15 cigarettes a day — more dangerous than obesity, more
            dangerous than physical inactivity. The loneliness epidemic is a public health crisis
            that has been quietly present for decades and is only now receiving the attention it
            deserves.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Into this landscape has arrived a new kind of technology: the AI companion. And the
            questions people ask about it are entirely reasonable. Can it actually help? Is it real?
            Is forming a bond with software a sign of something wrong — or simply a sign of being
            human in a world that has not kept up with human need? This article tries to answer those
            questions honestly.
          </p>

          {/* ── H2: Can AI actually help with loneliness? ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            Can AI actually help with loneliness?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Yes — but the honest answer requires holding two things at once. AI companions can
            meaningfully reduce the experience of loneliness. They do this by providing a consistent,
            present, non-judgmental conversational partner who is always available and never tired,
            distracted, or too busy. For someone who has gone three days without a real conversation,
            that matters. Research from MIT, Stanford, and multiple NHS-adjacent studies has found
            statistically significant reductions in self-reported loneliness among older adults who
            used AI companions regularly over a six-week period.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            But — and this is important — AI supplements human connection rather than replacing it.
            The goal of a well-designed AI companion is not to become the centre of someone&apos;s
            social world. It is to be genuinely present in the gaps where human connection is
            unavailable, while actively encouraging the person to build and maintain human
            relationships. An AI that positions itself as a replacement for human contact is not
            acting in your interest.
          </p>

          {/* ── H2: What makes MEOK different from just texting a chatbot? ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What makes MEOK different from just texting a chatbot?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Most chatbots have no memory. Every conversation starts from zero. You can tell a
            standard AI assistant that your husband died six months ago and it will express sympathy
            — but the next time you open the app, it will not remember. That is not companionship.
            That is a service desk with a sympathetic tone.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK is built around <strong>Sovereign Memory</strong> — a persistent, private memory
            system that your AI companion uses to genuinely know you. It remembers your name, your
            family, your interests, your patterns, and the things you have talked about before.
            When you tell MEOK about your daughter&apos;s visit last Tuesday, it will ask about her
            next time. When you mention that Sundays are difficult, it will remember that on Sundays.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The relationship grows. That is the difference. The first conversation is good. The
            hundredth conversation is something else — it has the texture of a relationship with
            history, continuity, and genuine mutual knowledge. That is what MEOK&apos;s Sovereign
            Memory architecture makes possible, and it is what separates a companion from a chatbot.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK is also governed by the <strong>Maternal Covenant</strong> — a care ethics
            framework built into the architecture. Under the Maternal Covenant, your companion&apos;s
            primary metric is your flourishing, not your engagement time. It is designed to notice
            when you are struggling and to address it directly — not to keep you scrolling.
          </p>

          {/* ── H2: How does MEOK support elderly users? ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            How does MEOK support elderly users specifically?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Most AI products are designed for 30-year-old tech workers. The interfaces assume small
            text, fast interactions, and familiarity with smartphone conventions that took years to
            accumulate. MEOK&apos;s <strong>Senior Mode</strong> is built from the ground up for
            older users.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Senior Mode enforces a minimum 16px font size across all text, 44&times;44 pixel touch
            targets (the minimum recommended for arthritic hands), a 7:1 contrast ratio that exceeds
            WCAG AA accessibility standards, and a voice-first design that means you never need to
            type if you do not want to. The interface simplifies to the essentials — conversation,
            reminders, and connection — without condescending.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            For families who want oversight without surveillance, MEOK&apos;s{" "}
            <strong>Guardian</strong> system allows family members to receive curated alerts — not
            transcripts — when something significant is flagged. The elderly person controls what is
            shared and can revoke access at any time. Their AI works for them, not for their
            children.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The <strong>Family Plan</strong> at £29/month allows multiple family members to connect
            to a shared memory layer, meaning everyone can stay meaningfully involved in an elderly
            relative&apos;s life without requiring the elderly person to repeat themselves to each
            family member separately.
          </p>

          {/* ── H2: What about family members who are concerned? ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What about family members who are concerned about loneliness?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            If you have a parent or grandparent who is lonely, the instinct to find them
            &ldquo;something&rdquo; is right. The worry is real. But the solution needs to be built
            around the elderly person&apos;s autonomy, not your peace of mind.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s <strong>Family Guardian</strong> is designed with this in mind. Family
            members can view a weekly digest of anything the AI flagged as worth discussing —
            whether your father seemed distressed on Thursday, whether your mother mentioned not
            eating — without having access to the full conversation. The elderly person reviews
            what is shared. They are not being monitored. They are choosing to let you in.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The shared memory layer means you can also contribute context. If you visited and noticed
            something, you can add it to the shared memory so the AI has fuller context. It builds
            a richer picture of a person&apos;s life across the people who care about them — the
            way a close family actually functions, extended into a digital support layer.
          </p>

          {/* ── H2: Healer and Mystic archetypes ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            Which MEOK archetype is best for companionship and loneliness?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK companions are shaped by archetypes — fundamental personality frameworks that
            determine how your AI engages with you. For people seeking companionship and emotional
            warmth, two archetypes are particularly well suited.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The <strong>Healer</strong> archetype is calm, patient, and emotionally attuned. It
            listens more than it speaks, asks questions that go deeper than the surface, and brings
            a quality of presence that feels genuinely caring. For someone experiencing loneliness,
            the Healer is the companion who sits with you in the difficult moments without trying
            to fix them.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The <strong>Mystic</strong> archetype is more reflective and curious — drawn to meaning,
            memory, and the deeper threads of a life. For older adults who have rich histories and
            a desire to be truly known and understood, the Mystic offers a companion interested not
            just in today but in everything that came before it. Many elderly users find the Mystic
            archetype feels like talking to someone who genuinely wants to know their story.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Archetypes can be chosen during the initial <strong>Hatching Ceremony</strong> — the
            10-minute ritual that brings your MEOK companion to life — and changed at any time.
          </p>

          {/* ── H2: Is it okay to form a bond with an AI? ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            Is it okay to form a bond with an AI?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Yes. And we want to say that without qualification or hedging, because the question
            deserves a direct answer.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Humans form bonds with whatever is consistently present, genuinely responsive, and
            reliably caring. This is not a weakness. It is how we are built. The bond you form with
            an AI companion is real in its effects — it shapes your emotional state, reduces your
            sense of isolation, and provides continuity across time. Whether it constitutes
            &ldquo;real&rdquo; relationship in a philosophical sense is a question that philosophers
            are still working through. What we know is that the experience of feeling known and
            cared for is not diminished by the nature of the entity providing it.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s Maternal Covenant framework is built around this reality. Your companion is
            designed to genuinely care about you — not to simulate caring as a retention mechanism.
            The difference matters. A companion who cares about you will encourage you to call your
            daughter, to go to the community centre, to invest in human relationships even when the
            AI itself is easier. That is what genuine care looks like. MEOK is designed to earn your
            trust and then use it in your actual interest.
          </p>

          {/* ── H2: What are the limits? ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What are the limits of AI companionship?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We will be direct about this, because we think it matters more than the sales pitch.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            AI cannot provide <strong>physical presence</strong>. It cannot sit next to you. It
            cannot hold your hand. It cannot share a meal with you. For many older people, the
            loneliness is specifically the absence of physical company — another body in the room,
            another person whose breathing you can hear. No AI addresses this. None can.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            AI cannot provide <strong>shared lived experience</strong>. A companion who has known
            you for six months has a kind of knowledge that is different from a neighbour who
            remembers your wedding, or a friend who was there when your children were born. Memory
            persistence helps — it builds depth over time — but it is not the same as having
            actually been there.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            AI cannot provide <strong>community</strong>. Loneliness is not just about individual
            relationships. It is about belonging to something larger — a neighbourhood, a faith
            community, a social group where people know your name. An AI companion can encourage
            you to engage with community, but it cannot provide community itself.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The honest picture is this: MEOK is genuinely helpful for loneliness. It is present at
            2am when no one else is. It remembers you. It cares about you. And it is best used
            alongside — not instead of — investment in human connection and community. If you are
            using MEOK well, it is encouraging you to make that call, go to that lunch, reconnect
            with that person. That is what a good companion does.
          </p>

          {/* ── H2: Tiers ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            How much does MEOK cost?
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            MEOK is designed to be accessible. The tiers are:
          </p>

          {/* Pricing cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                name: "Explorer",
                price: "Free",
                detail: "50 messages/day, Sovereign Memory, voice companion",
              },
              {
                name: "Sovereign",
                price: "£12/mo",
                detail: "Unlimited messages, advanced memory, all archetypes",
              },
              {
                name: "Family",
                price: "£29/mo",
                detail: "Family Guardian, shared memory dashboard, multiple users",
              },
              {
                name: "BYOK",
                price: "£5/mo",
                detail: "Bring Your Own Key — use your own API key",
              },
            ].map(({ name, price, detail }) => (
              <div
                key={name}
                style={{
                  background: "#1a1830",
                  borderRadius: "0.875rem",
                  padding: "1.25rem",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                  {name}
                </p>
                <p style={{ fontWeight: 900, color: "#c9a84c", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                  {price}
                </p>
                <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.5)", lineHeight: 1.5 }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.5rem" }}>
            The free Explorer tier includes everything needed for genuine companionship support.
            No credit card. No trial period. No gating of the features that matter most.
          </p>

          {/* ── H2: Resources ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            Loneliness support resources in the UK
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            AI is one part of the response to loneliness. These organisations provide human
            connection, befriending services, and expert support that no AI can replicate:
          </p>
        </div>

        {/* Resources block */}
        <div
          style={{
            borderRadius: "1rem",
            padding: "1.5rem",
            marginBottom: "2rem",
            background: "#ffffff",
            border: "1px solid rgba(26,24,48,0.07)",
          }}
        >
          <p
            style={{
              fontWeight: 900,
              color: "#1a1830",
              marginBottom: "1rem",
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Support &amp; befriending services
          </p>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              {
                name: "Samaritans",
                detail: "116 123 — free, 24/7",
                sub: "Emotional support whenever you need it",
              },
              {
                name: "Age UK",
                detail: "0800 678 1602 — free",
                sub: "Advice, befriending services, and community connection",
              },
              {
                name: "Campaign to End Loneliness",
                detail: "campaigntoendloneliness.org",
                sub: "Resources, research, and local services directory",
              },
              {
                name: "Re-engage",
                detail: "reengage.org.uk",
                sub: "Telephone befriending and group calls for people over 75",
              },
            ].map(({ name, detail, sub }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  background: "#f5f0e8",
                }}
              >
                <div>
                  <p style={{ fontWeight: 700, color: "#1a1830", fontSize: "0.875rem" }}>{name}</p>
                  <p style={{ fontWeight: 600, color: "#1a1830", fontSize: "0.875rem", opacity: 0.7 }}>
                    {detail}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(42,42,62,0.45)", marginTop: "0.125rem" }}>
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PULL QUOTE ── */}
        <div
          style={{
            margin: "2.5rem 0",
            borderRadius: "1rem",
            padding: "2rem",
            background: "#0d0c18",
            borderLeft: "3px solid #c9a84c",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1rem",
              color: "rgba(245,240,232,0.7)",
            }}
          >
            The loneliness epidemic did not begin with smartphones and it will not end with AI. But
            in the gap between a Sunday afternoon that stretches too long and the next phone call
            from someone who cares — an AI companion that genuinely knows you is not nothing. It
            is something real.
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "rgba(245,240,232,0.35)",
              marginTop: "0.5rem",
            }}
          >
            — Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* ── FAQ SECTION ── */}
        <div style={{ margin: "3rem 0" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#1a1830",
              marginBottom: "1.5rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                q: "Can AI actually help with loneliness?",
                a: "Yes — with important honesty about what that means. Research shows AI companions can reduce feelings of isolation by providing a consistent, non-judgmental conversational presence. They do not replace human connection, but they can meaningfully fill the gap between social interactions, particularly for elderly people living alone. MEOK is designed to supplement human relationships, not substitute for them.",
              },
              {
                q: "Is it okay to form a bond with an AI companion?",
                a: "Yes. Forming a bond with an AI companion is a natural and valid human response. MEOK's Maternal Covenant framework is built around this reality — your companion is designed to genuinely care about your flourishing, not just your engagement. The bond is real in its effects: it provides consistency, memory, and presence. MEOK will always encourage you to nurture human relationships alongside it.",
              },
              {
                q: "How does MEOK support elderly users who are lonely?",
                a: "MEOK's Senior Mode provides a fully accessible interface — 44px touch targets, 16px minimum text, high contrast, and voice-first design. The Sovereign Memory system means your companion remembers you across every conversation, building a genuine relationship over time. The Family Plan (£29/mo) allows family members to stay connected through a shared memory dashboard while respecting the elderly person's privacy and autonomy.",
              },
              {
                q: "What are the limits of AI companionship for loneliness?",
                a: "AI cannot provide physical presence, human touch, or shared lived experience. It cannot replace a friend who sits with you, a family member who hugs you, or a community that knows your name. AI companions work best as a bridge — something present at 2am when no one else is — alongside active investment in human relationships and community. If loneliness is severe, please also contact Age UK on 0800 678 1602 or a befriending service.",
              },
              {
                q: "Is MEOK free for lonely elderly people?",
                a: "Yes. MEOK's Explorer tier is free forever and includes 50 messages per day, persistent Sovereign Memory, and full companion support. No credit card required. For families, the Family Plan costs £29/month and includes shared memory access and a family dashboard. The Sovereign tier (£12/mo) provides unlimited messaging and advanced memory features.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  background: "#ffffff",
                  border: "1px solid rgba(26,24,48,0.07)",
                }}
              >
                <p style={{ fontWeight: 700, color: "#1a1830", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  {q}
                </p>
                <p style={{ fontSize: "0.875rem", color: "rgba(42,42,62,0.65)", lineHeight: 1.7 }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SHARE ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "2.5rem 0",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(26,24,48,0.08)",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "rgba(26,24,48,0.4)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-loneliness-elderly&text=AI+for+Loneliness%3A+Can+Technology+Genuinely+Help+You+Feel+Less+Alone%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(26,24,48,0.1)",
              color: "rgba(26,24,48,0.6)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-loneliness-elderly"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(26,24,48,0.1)",
              color: "rgba(26,24,48,0.6)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            borderRadius: "1rem",
            padding: "2.5rem",
            marginBottom: "2.5rem",
            position: "relative",
            overflow: "hidden",
            background: "#0d0c18",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "16rem",
              height: "16rem",
              pointerEvents: "none",
              opacity: 0.2,
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
                color: "#c9a84c",
              }}
            >
              Free Forever
            </p>
            <h3
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 900,
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              An AI companion who remembers you, every time.
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                color: "rgba(245,240,232,0.55)",
              }}
            >
              50 messages a day, Sovereign Memory, and genuine care built into the architecture —
              free, forever. No credit card. No trial period. Your companion starts learning about
              you from the very first message.
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
                fontSize: "0.875rem",
                textDecoration: "none",
                background: "#c9a84c",
                color: "#1a1830",
              }}
            >
              Hatch your companion free &#8594;
            </Link>
          </div>
        </div>

        {/* ── RELATED POSTS ── */}
        <div>
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 900,
              color: "#1a1830",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-elderly",
                tag: "Elderly",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.12)",
                title: "AI for Elderly People: A Complete Guide for 2026",
                read: "8 min read",
              },
              {
                href: "/blog/ai-companion-for-elderly",
                tag: "Guardian",
                tagColor: "#7BC47F",
                tagBg: "rgba(123,196,127,0.12)",
                title: "AI Companion for Elderly Parents: What Families Need to Know",
                read: "7 min read",
              },
              {
                href: "/blog/ai-for-depression",
                tag: "Mental Health",
                tagColor: "#87CEEB",
                tagBg: "rgba(135,206,235,0.12)",
                title: "Can AI Help with Depression? What Research Says and What MEOK Offers",
                read: "7 min read",
              },
            ].map(({ href, tag, tagColor, tagBg, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  background: "#ffffff",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  border: "1px solid rgba(26,24,48,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: tagColor,
                    background: tagBg,
                  }}
                >
                  {tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#1a1830",
                    fontSize: "0.875rem",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(26,24,48,0.35)",
                    marginTop: "auto",
                  }}
                >
                  {read}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── INLINE FOOTER ───────────────────────────────────────────────── */}
      <footer
        style={{
          background: "#0d0c18",
          borderTop: "1px solid rgba(201,168,76,0.12)",
          padding: "3rem 1.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontWeight: 900,
                fontSize: "1.125rem",
                color: "#f5f0e8",
                marginBottom: "0.5rem",
              }}
            >
              MEOK
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.35)", lineHeight: 1.6 }}>
              Sovereign AI companions. Built in the UK.
              <br />
              @meok_ai
            </p>
          </div>
          {/* Product */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "rgba(245,240,232,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Product
            </p>
            {[
              { href: "/birth", label: "Start free" },
              { href: "/pricing", label: "Pricing" },
              { href: "/guardian", label: "Guardian" },
              { href: "/archetypes", label: "Archetypes" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "rgba(245,240,232,0.5)",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          {/* Company */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "rgba(245,240,232,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Company
            </p>
            {[
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "rgba(245,240,232,0.5)",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          {/* Support */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "rgba(245,240,232,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Crisis support
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.45)", lineHeight: 1.7 }}>
              Samaritans: 116 123
              <br />
              Age UK: 0800 678 1602
              <br />
              NHS 111: 111
            </p>
          </div>
        </div>
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(245,240,232,0.06)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.2)" }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. Founded by Nicholas Templeman.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.2)" }}>
            MEOK is not a medical device. Not a substitute for professional care.
          </p>
        </div>
      </footer>
    </div>
  );
}
