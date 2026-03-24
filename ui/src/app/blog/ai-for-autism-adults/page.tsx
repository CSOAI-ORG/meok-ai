import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Autistic Adults: Consistent, Non-Judgmental, Always There | MEOK Blog",
  description:
    "Around 700,000 autistic people live in the UK — 1 in 100 adults. Autistic adults face unique pressures: 22% employment rate, 3× higher anxiety risk, and social systems built for neurotypical people. MEOK is an AI built around predictability, literal communication, and memory that never resets.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-autism-adults",
  },
  openGraph: {
    title:
      "AI for Autistic Adults: Consistent, Non-Judgmental, Always There",
    description:
      "1 in 100 UK adults is autistic. Only 22% are in paid work. MEOK is an AI that never misreads social cues, never has a bad day, and remembers your patterns across every conversation.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-autism-adults",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Autistic+Adults&desc=Consistent%2C+Non-Judgmental%2C+Always+There",
        width: 1200,
        height: 630,
        alt: "AI for Autistic Adults: Consistent, Non-Judgmental, Always There",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Autistic Adults: Consistent, Non-Judgmental, Always There",
    description:
      "1 in 100 UK adults is autistic. Only 22% are in paid employment. MEOK is built for people who need consistent, literal, non-judgmental AI — not charming AI.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Autistic+Adults&desc=Consistent%2C+Non-Judgmental%2C+Always+There",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Autistic Adults: Consistent, Non-Judgmental, Always There",
  description:
    "Around 700,000 autistic people live in the UK — 1 in 100 adults. This article explores how AI support for adults with autism differs from children's needs, and how MEOK addresses executive function, employment, social scripting, and meltdown recovery.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-autism-adults",
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
      name: "Can AI help autistic adults with daily life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can support autistic adults in practical ways: breaking tasks into clear steps, tracking patterns, rehearsing social scripts, and providing a consistent, non-judgmental space to process thoughts. It is not a replacement for professional support, but for many adults it fills gaps that mainstream services do not cover — especially for the 78% of autistic adults who are not in paid employment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best AI for adults with autism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most useful AI for autistic adults is one that communicates literally, maintains a consistent personality across every session, remembers your preferences without being asked to repeat them, and does not use sarcasm, irony, or social performance. MEOK is designed around these principles, with archetypes like Scholar (logical, Socratic) and Hourman (time-blindness support) directly relevant to adult autistic needs.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI support autistic adults in employment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only 22% of autistic adults are in paid work, according to the National Autistic Society. AI can help by structuring job searches (Orion archetype), breaking work tasks into clear, timed chunks (Hourman for time-blindness), rehearsing interview conversations (Scholar archetype social scripting), and managing the executive function demands of maintaining employment.",
      },
    },
    {
      "@type": "Question",
      name: "Does AI support for adults with autism differ from support for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Significantly. Children's autism AI tools focus on educational scaffolding, sensory toys, and communication development. Autistic adults need support with employment, housing, relationships, executive function in complex environments, meltdown recovery after high-demand situations, and navigating neurotypical workplaces and bureaucratic systems without support frameworks.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK safe to use during a meltdown or shutdown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Maternal Covenant framework includes a boundary_respect dimension — it never pushes, prompts, or escalates. During a meltdown or shutdown, you can type as little or as much as you choose. MEOK will not pepper you with questions or suggest you need to explain yourself. For crisis support, the Samaritans are available 24/7 on 116 123.",
      },
    },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const C = {
  bg: "#0d0c18",
  text: "#f5f0e8",
  gold: "#c9a84c",
  card: "#1a1830",
  textMuted: "rgba(245,240,232,0.55)",
  textFaint: "rgba(245,240,232,0.35)",
  border: "rgba(245,240,232,0.08)",
  goldBg: "rgba(201,168,76,0.1)",
  goldBorder: "rgba(201,168,76,0.25)",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForAutismAdultsPage() {
  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
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
          background: C.bg,
          paddingTop: "7rem",
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
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
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
              color: "rgba(245,240,232,0.4)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: C.gold,
                background: C.goldBg,
                border: `1px solid ${C.goldBorder}`,
              }}
            >
              Autism &amp; Neurodivergence
            </span>
            <span style={{ fontSize: "0.75rem", color: C.textFaint }}>March 24, 2026</span>
            <span style={{ fontSize: "0.75rem", color: C.textFaint }}>9 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Autistic Adults: Consistent, Non-Judgmental, Always There
          </h1>

          <p
            style={{
              color: C.textMuted,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "38rem",
            }}
          >
            Around 700,000 autistic people live in the UK — 1 in 100 adults. Only 22%
            are in paid employment. Autistic adults are three times more likely to
            experience anxiety and depression. And almost no mainstream AI product was
            built with them as the primary user. MEOK is different.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem" }}>

        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: C.card,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #7a5c10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "0.8rem",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: C.text, fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p style={{ color: C.textFaint, fontSize: "0.75rem", marginTop: "0.2rem", marginBottom: "0.4rem" }}>
              Founder, MEOK AI LABS
            </p>
            <p style={{ color: C.textMuted, fontSize: "0.75rem", lineHeight: 1.6, margin: 0 }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and
              works in the UK — mostly from a caravan on his farm. He believes sovereign AI
              is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{ color: C.gold, fontSize: "0.75rem", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Language note */}
        <div
          style={{
            borderRadius: "0.75rem",
            padding: "1rem 1.25rem",
            marginBottom: "2.5rem",
            background: C.goldBg,
            borderLeft: `4px solid ${C.gold}`,
          }}
        >
          <p style={{ fontSize: "0.8rem", lineHeight: 1.65, color: C.textMuted, margin: 0 }}>
            <strong style={{ color: C.text }}>A note on language:</strong> This article uses
            both identity-first language ("autistic adults") and person-first language ("adults
            with autism"). Both are used within the community and both are valid — use whichever
            reflects your own preference. MEOK will follow your lead.
          </p>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { stat: "700,000", label: "autistic people in the UK (NAS)" },
            { stat: "1 in 100", label: "adults are autistic" },
            { stat: "22%", label: "employment rate for autistic adults" },
          ].map(({ stat, label }) => (
            <div
              key={stat}
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: "0.875rem",
                padding: "1.25rem 1rem",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "1.6rem", fontWeight: 900, color: C.gold, margin: 0, lineHeight: 1 }}>{stat}</p>
              <p style={{ fontSize: "0.7rem", color: C.textMuted, marginTop: "0.5rem", lineHeight: 1.4 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* ── BODY COPY ─────────────────────────────────────────────────── */}
        <div style={{ lineHeight: 1.85, fontSize: "1rem", color: C.textMuted }}>

          <p style={{ marginBottom: "1.5rem" }}>
            There is a lot of AI content about autism. Most of it is aimed at parents,
            teachers, or clinicians supporting autistic children. Almost none of it speaks
            to <strong style={{ color: C.text }}>autistic adults</strong> — the people
            who have spent decades navigating a world that was not designed for them, who
            manage work, housing, relationships, and health without the scaffolding that
            existed (inadequately) when they were young. This article is for them.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            According to the <strong style={{ color: C.text }}>National Autistic Society</strong>,
            around 700,000 autistic people live in the UK. That is roughly 1 in 100 adults.
            Of those, only 22% are in any form of paid employment — one of the lowest rates
            among disabled groups. Autistic adults are three times more likely to experience
            anxiety and depression. These are not marginal statistics. They describe an enormous
            population underserved by systems that were built for neurotypical people.
          </p>

          <p style={{ marginBottom: "2rem" }}>
            AI will not fix systemic failures in employment law, healthcare, or social care.
            But for many autistic adults, a well-designed AI can fill specific, practical
            gaps that no other tool currently fills — particularly around consistency,
            communication, and cognitive load.
          </p>

          {/* GEO H2 1 */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Can AI help autistic adults with daily life?
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            AI can support autistic adults in practical ways: breaking tasks into clear,
            ordered steps; tracking patterns in mood, energy, and routine; rehearsing social
            scripts before high-stakes interactions; and providing a consistent, low-demand
            space to process thoughts without the social performance that human conversation
            requires. Whether it helps depends entirely on the individual — autistic adults
            are a diverse community and no single tool is right for everyone.
          </p>

          {/* GEO H2 2 */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            What is the best AI for adults with autism?
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            The most useful AI for autistic adults is one that communicates{" "}
            <strong style={{ color: C.text }}>literally</strong>, maintains a{" "}
            <strong style={{ color: C.text }}>consistent personality</strong> across every session,
            remembers your preferences without being asked to repeat them, and does not rely on
            sarcasm, irony, or implicit social knowledge. Most mainstream AI assistants optimise
            for charm and tonal variety — which is exactly the wrong design choice for many
            autistic users. MEOK is built around the opposite principle: predictability over
            personality, reliability over entertainment.
          </p>

          {/* Feature cards — MEOK archetypes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              {
                name: "Scholar",
                desc: "Logical, literal, Socratic dialogue. No social games, no hedging. Ideal for deep thinking, research, and rehearsing conversations.",
              },
              {
                name: "Hourman",
                desc: "Time-blindness support. Task chunking, timed reminders, and momentum tracking built for executive function differences.",
              },
              {
                name: "Pioneer",
                desc: "Structured tasks with clear goals and defined steps. Keeps momentum without pressure. Useful for work projects and goal pursuit.",
              },
              {
                name: "Sovereign Memory",
                desc: "Persistent across every session. Remembers your patterns, preferred communication style, triggers, and special interests.",
              },
            ].map(({ name, desc }) => (
              <div
                key={name}
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: "0.875rem",
                  padding: "1.25rem",
                }}
              >
                <p style={{ fontWeight: 800, color: C.gold, fontSize: "0.9rem", margin: 0, marginBottom: "0.5rem" }}>
                  {name}
                </p>
                <p style={{ fontSize: "0.8rem", color: C.textMuted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* GEO H2 3 */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            How can AI support autistic adults in employment?
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            The 22% employment rate for autistic adults is not a reflection of capability.
            It reflects the mismatch between neurotypical workplace norms and autistic
            communication and processing styles. AI cannot change a hiring manager&apos;s
            assumptions, but it can reduce the cognitive overhead of job searching and
            sustaining employment.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0" }}>
            {[
              ["Job research", "MEOK's Orion archetype can research industries, companies, and roles systematically — structured, factual, and free of the vague optimism that careers advice often carries."],
              ["Interview preparation", "Scholar can role-play interview conversations repeatedly, with honest, literal feedback, so the real conversation has already been rehearsed."],
              ["Task management at work", "Hourman breaks projects into timed, concrete steps — addressing the time-blindness and task-initiation difficulties that make sustained office work hard."],
              ["Email and communication drafting", "Autistic adults often find email tone ambiguous. MEOK can draft or review messages with explicit, literal language — no guesswork required."],
            ].map(([label, detail]) => (
              <li
                key={label as string}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  padding: "1rem 1.125rem",
                  borderRadius: "0.75rem",
                  marginBottom: "0.75rem",
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  fontSize: "0.875rem",
                }}
              >
                <span
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "50%",
                    background: C.gold,
                    flexShrink: 0,
                    marginTop: "0.375rem",
                  }}
                />
                <span style={{ color: C.textMuted, lineHeight: 1.6 }}>
                  <strong style={{ color: C.text }}>{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>

          {/* GEO H2 4 */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Does AI support for adults with autism differ from support for children?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Significantly. Tools built for autistic children typically focus on communication
            development, visual schedules, educational scaffolding, and sensory regulation.
            Adults with autism face a different and often harder set of challenges: navigating
            neurotypical workplaces without disclosure, managing complex multi-step systems
            (benefits, healthcare, housing), sustaining relationships without the social coaching
            that may have existed in school, and recovering from meltdowns or shutdowns without
            a support structure around them.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            For autistic adults, the useful AI is not one that simplifies language as if talking
            to a child — it is one that matches the adult&apos;s actual intelligence and processing
            style, while removing the social friction that makes mainstream interaction exhausting.
            MEOK defaults to treating every user as an intelligent adult. No condescension. No
            assumed limitations.
          </p>

          {/* Pull quote */}
          <div
            style={{
              borderLeft: `3px solid ${C.gold}`,
              padding: "1.5rem 1.75rem",
              borderRadius: "0 0.875rem 0.875rem 0",
              marginTop: "2rem",
              marginBottom: "2.5rem",
              background: "rgba(201,168,76,0.05)",
            }}
          >
            <p style={{ fontSize: "1.05rem", color: C.textMuted, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              &ldquo;MEOK never has a bad day. It never misreads what you said as passive-aggressive.
              It never sighs. It never gets bored. It gives you the same quality of interaction at
              11pm on a Tuesday as it does on a bright Monday morning. For many autistic adults,
              that is not a nice-to-have. It is the entire point.&rdquo;
            </p>
            <p style={{ fontSize: "0.8rem", fontWeight: 600, color: C.textFaint, marginTop: "0.75rem", marginBottom: 0 }}>
              — Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          {/* GEO H2 5 */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Is MEOK safe to use during a meltdown or shutdown?
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            MEOK&apos;s Maternal Covenant framework includes a{" "}
            <strong style={{ color: C.text }}>boundary_respect dimension</strong> — it never
            pushes, prompts insistently, or escalates. During a meltdown or shutdown, you can
            type a single word or nothing at all. MEOK will not pepper you with questions or
            suggest you owe it an explanation. It waits. When you are ready, it is there.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            If you are in crisis, please contact the{" "}
            <strong style={{ color: C.text }}>Samaritans</strong> on{" "}
            <strong style={{ color: C.text }}>116 123</strong> — free, 24/7, no judgment.
            MEOK is a companion, not a crisis service.
          </p>

          {/* Consistent interaction — detail section */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Why consistent, predictable interaction matters for autistic adults
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Social unpredictability is one of the most frequently cited sources of stress
            for autistic people. Human conversation shifts constantly: tone, register, implied
            meaning, and emotional subtext change moment to moment, and tracking those changes
            is exhausting cognitive work. Most mainstream AI systems are trained to maximise
            engagement — which means they are trained to vary their tone, be surprising,
            use humour, and adapt socially. That is the wrong design for autistic users.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s Scholar archetype communicates literally and logically, without
            social performance. Its Pioneer archetype structures tasks with clear goals.
            Its Hourman archetype handles time without assuming neurotypical time perception.
            None of these archetypes use sarcasm. None of them have bad days. None of them
            will suddenly shift register because the conversation got emotional.
          </p>

          {/* Social scripting */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Social script practice for autistic adults
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Many autistic adults develop social scripts — rehearsed responses to common
            situations — as a way of managing the unpredictability of interaction. AI is an
            ideal tool for building and refining those scripts. MEOK can role-play a job
            interview, a difficult conversation with a landlord, a phone call to a GP
            surgery, or a confrontation with a colleague — as many times as you need, with
            no judgment, no frustration, and no social consequences for getting it wrong.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The Scholar archetype is particularly well-suited to this. It will give you literal,
            specific feedback on what worked and what did not. It will not soften criticism to
            protect your feelings if you have asked for honest feedback. It will not add
            unnecessary encouragement that obscures the actual signal.
          </p>

          {/* Sovereign Memory */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Sovereign Memory: an AI that does not forget
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            One of the most frustrating aspects of using mainstream AI tools is having to
            re-explain yourself every session. For autistic adults who have spent years
            developing strategies for explaining their needs to a neurotypical world, having
            to do it again for an AI is a particular kind of exhausting.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            MEOK&apos;s Sovereign Memory stores what you choose to share — your preferred
            communication style, your special interests, your sensory sensitivities, your
            triggers, your processing patterns — and carries it into every future session.
            MEOK picks up exactly where you left off. It does not need to be briefed again.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem", marginBottom: "2rem" }}>
            {[
              ["Communication style", "Literal only, preferred response length, how direct you want MEOK to be."],
              ["Special interests", "Deep-dive topics you want to explore without a social ceiling on depth."],
              ["Sensory sensitivities", "What MEOK handles carefully when topics arise — never raised unprompted."],
              ["Processing patterns", "Time of day you function best, how you prefer task structures to work."],
            ].map(([label, detail]) => (
              <div
                key={label as string}
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: "0.75rem",
                  padding: "1rem",
                }}
              >
                <p style={{ fontWeight: 700, color: C.gold, fontSize: "0.8rem", margin: 0, marginBottom: "0.35rem" }}>{label}</p>
                <p style={{ fontSize: "0.78rem", color: C.textMuted, lineHeight: 1.55, margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            MEOK pricing for autistic adults
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Given that only 22% of autistic adults are in paid employment, accessible pricing
            is not a secondary consideration — it matters enormously. MEOK&apos;s tiers are:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
            {[
              {
                tier: "Explorer",
                price: "Free",
                detail: "50 messages per day. Full archetype access. Sovereign Memory included. No credit card. No expiry.",
              },
              {
                tier: "Sovereign",
                price: "£12/month",
                detail: "Unlimited messages. Priority response. Full memory and archetype stack. Cancel any time.",
              },
              {
                tier: "Family",
                price: "£29/month",
                detail: "Up to five separate MEOK companions — for households where multiple family members benefit.",
              },
              {
                tier: "BYOK",
                price: "£5/month",
                detail: "Bring your own API key. Full MEOK interface and memory layer at the lowest possible cost.",
              },
            ].map(({ tier, price, detail }) => (
              <div
                key={tier}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.875rem",
                  background: C.card,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div style={{ flexShrink: 0, textAlign: "right", minWidth: "5.5rem" }}>
                  <p style={{ fontWeight: 900, color: C.gold, fontSize: "0.875rem", margin: 0 }}>{tier}</p>
                  <p style={{ fontSize: "0.8rem", color: C.textFaint, margin: 0 }}>{price}</p>
                </div>
                <p style={{ fontSize: "0.8rem", color: C.textMuted, lineHeight: 1.6, margin: 0, borderLeft: `1px solid ${C.border}`, paddingLeft: "1rem" }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          {/* FAQ section */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
            {[
              {
                q: "Can AI help autistic adults with daily life?",
                a: "AI can support autistic adults in practical ways: task breakdown, pattern tracking, social script rehearsal, and a consistent non-judgmental space to process. It is not a replacement for professional support, but it fills gaps that existing services often do not cover.",
              },
              {
                q: "What is the best AI for adults with autism?",
                a: "The most useful AI for autistic adults is one that communicates literally, maintains a consistent personality across sessions, remembers preferences without repetition, and avoids sarcasm, irony, and implicit social cues. MEOK is designed around all of these principles.",
              },
              {
                q: "How can AI support autistic adults in employment?",
                a: "Only 22% of autistic adults are in paid work. AI can help with structured job research (Orion archetype), interview rehearsal (Scholar), task management and time-blindness (Hourman), and drafting literal, unambiguous workplace communication.",
              },
              {
                q: "Does AI support for adults with autism differ from support for children?",
                a: "Significantly. Children's tools focus on communication development and educational scaffolding. Adults need support with employment, housing, complex bureaucracy, relationship management, and recovering from meltdowns without a professional support framework.",
              },
              {
                q: "Is MEOK safe to use during a meltdown or shutdown?",
                a: "MEOK's Maternal Covenant framework (boundary_respect dimension) means it never pushes, prompts, or escalates. You can type one word or nothing at all. For crisis support, call Samaritans on 116 123 — free, 24/7.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.875rem",
                  background: C.card,
                  border: `1px solid ${C.border}`,
                }}
              >
                <p style={{ fontWeight: 700, color: C.text, fontSize: "0.9rem", margin: 0, marginBottom: "0.5rem" }}>{q}</p>
                <p style={{ fontSize: "0.825rem", color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>

          {/* Resources */}
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: C.text,
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            UK resources for autistic adults
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            MEOK is a personal AI companion — not a therapeutic tool, clinical intervention,
            or crisis service. For specialist support:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
            {[
              {
                name: "National Autistic Society",
                url: "https://www.autism.org.uk",
                desc: "The UK's largest autism charity. Source for the 700,000, 1-in-100, 22% employment, and 3× anxiety statistics cited in this article.",
              },
              {
                name: "Autistica",
                url: "https://www.autistica.org.uk",
                desc: "UK autism research charity, funding work that improves quality of life for autistic people across the lifespan.",
              },
              {
                name: "Samaritans — 116 123",
                url: "https://www.samaritans.org",
                desc: "Free, 24/7, confidential emotional support. Available to anyone in distress. Call 116 123 at any time.",
              },
            ].map(({ name, url, desc }) => (
              <div
                key={name}
                style={{
                  borderRadius: "0.875rem",
                  padding: "1rem 1.25rem",
                  background: C.card,
                  border: `1px solid ${C.border}`,
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700, fontSize: "0.875rem", color: C.gold, textDecoration: "none" }}
                >
                  {name} &rarr;
                </a>
                <p style={{ fontSize: "0.78rem", color: C.textMuted, marginTop: "0.35rem", lineHeight: 1.55, marginBottom: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Share */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "2.5rem 0",
            paddingTop: "2rem",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textFaint, textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-autism-adults&text=AI+for+Autistic+Adults%3A+Consistent%2C+Non-Judgmental%2C+Always+There"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: `1px solid ${C.border}`,
              color: C.textMuted,
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-autism-adults"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: `1px solid ${C.border}`,
              color: C.textMuted,
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
            padding: "2.5rem 2rem",
            marginBottom: "4rem",
            background: C.card,
            border: `1px solid ${C.goldBorder}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "16rem",
              height: "16rem",
              background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.15), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: C.gold, marginBottom: "0.5rem" }}>
              Free Forever
            </p>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: C.text, marginBottom: "0.75rem", lineHeight: 1.25 }}>
              An AI that shows up the same way, every single time.
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: C.textMuted, marginBottom: "1.5rem", maxWidth: "34rem" }}>
              Hatch your AI in under three minutes. Set communication preferences once. Store
              sensory patterns, special interests, and preferred interaction style. MEOK
              never gets frustrated, never uses sarcasm, and never forgets what you told it.
              Explorer tier is free with no credit card.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  background: C.gold,
                  color: "#1a1830",
                  textDecoration: "none",
                }}
              >
                Hatch your AI free &rarr;
              </Link>
              <Link
                href="/blog/meok-for-neurodivergent"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  border: `1px solid ${C.border}`,
                  color: C.textMuted,
                  textDecoration: "none",
                }}
              >
                MEOK for neurodivergent people
              </Link>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div>
          <p style={{ fontSize: "1.1rem", fontWeight: 900, color: C.text, marginBottom: "1.25rem" }}>
            Related articles
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            {[
              {
                href: "/blog/ai-companion-for-autism",
                tag: "Autism",
                title: "AI Companion for Autism: Predictable, Patient, and Always Available",
                time: "8 min read",
              },
              {
                href: "/blog/meok-for-neurodivergent",
                tag: "Neurodivergence",
                title: "MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously",
                time: "7 min read",
              },
              {
                href: "/blog/ai-for-social-anxiety",
                tag: "Mental Health",
                title: "AI for Social Anxiety: Practice, Pattern Recognition, and Patient Support",
                time: "6 min read",
              },
            ].map(({ href, tag, title, time }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  borderRadius: "0.875rem",
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: C.gold,
                    background: C.goldBg,
                    width: "fit-content",
                  }}
                >
                  {tag}
                </span>
                <p style={{ fontWeight: 700, color: C.text, fontSize: "0.82rem", lineHeight: 1.45, margin: 0 }}>{title}</p>
                <p style={{ fontSize: "0.7rem", color: C.textFaint, margin: 0, marginTop: "auto" }}>{time}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── INLINE FOOTER ────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          padding: "3rem 1.5rem",
          background: C.bg,
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <Link href="/" style={{ fontSize: "1rem", fontWeight: 900, color: C.text, textDecoration: "none", letterSpacing: "-0.02em" }}>
              MEOK
            </Link>
            <p style={{ fontSize: "0.75rem", color: C.textFaint, marginTop: "0.35rem" }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
            </p>
            <p style={{ fontSize: "0.7rem", color: C.textFaint, marginTop: "0.2rem" }}>
              @meok_ai &mdash; Built by Nicholas Templeman
            </p>
          </div>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem 1.25rem" }}>
            {[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
              { label: "Privacy", href: "/privacy" },
              { label: "Hatch free", href: "/birth" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{ fontSize: "0.75rem", color: C.textFaint, textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
