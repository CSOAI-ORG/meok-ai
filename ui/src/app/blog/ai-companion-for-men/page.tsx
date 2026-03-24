import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Companion for Men: Why Male Emotional Wellbeing Needs a Different Approach | MEOK Blog",
  description:
    "3.8 million lonely men in the UK. Men die by suicide at 3× the rate of women. Yet most AI companions are designed for someone else. MEOK's archetype system changes that.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-for-men" },
  openGraph: {
    title: "AI Companion for Men: Why Male Emotional Wellbeing Needs a Different Approach",
    description:
      "3.8 million lonely men in the UK. Men are 3× less likely to seek mental health support. Here's why most AI companions miss them entirely — and what MEOK does differently.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-men",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Men&desc=Why+Male+Emotional+Wellbeing+Needs+a+Different+Approach",
        width: 1200,
        height: 630,
        alt: "AI Companion for Men: Why Male Emotional Wellbeing Needs a Different Approach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Men: Why Male Emotional Wellbeing Needs a Different Approach",
    description:
      "3.8 million lonely men in the UK. Most AI companions miss them entirely. Here's what a different approach looks like.",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for Men: Why Male Emotional Wellbeing Needs a Different Approach",
  description:
    "3.8 million lonely men in the UK. Men are 3× less likely to seek mental health support. MEOK's archetype system offers a companion that matches how men actually want to communicate.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-companion-for-men",
  keywords: [
    "AI companion for men",
    "AI emotional support men",
    "men mental health AI",
    "AI for male loneliness",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion help men with loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — when designed to match how men actually communicate. Most AI companions adopt a nurturing, emotionally expressive tone that many men find uncomfortable or off-putting. MEOK's archetype system includes Scout and Strategist profiles that are direct, practical, and action-oriented while still being emotionally present. The goal is a companion that feels useful rather than intrusive.",
      },
    },
    {
      "@type": "Question",
      name: "Why do men avoid mental health support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Men are 3× less likely to seek professional mental health support than women. Research consistently identifies stigma ('real men don't talk about feelings'), cultural conditioning, and a perception that therapy is passive and talk-heavy as the main barriers. Many men prefer support that is practical, goal-oriented, and private — which is exactly what MEOK is designed to offer.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK's proactive work agent layer. Rather than waiting to be asked, it hunts for tasks, executes them overnight, and delivers a morning briefing. For men who find pure conversation uncomfortable, Ralph Mode offers a different entry point: action over words. You get something done together before you ever have to say how you're feeling.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a masculine AI companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK doesn't adopt a fixed masculine or feminine persona — instead it uses an archetype system. Scout is observant, curious, and operationally minded. Strategist is analytical, direct, and systems-focused. Both work equally well for men who prefer less emotionally effusive interaction. You choose the archetype during the Birth Ceremony.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is an AI companion, not a clinical tool. It does not diagnose, prescribe, or replace professional mental health care. What it offers is consistent, private, judgement-free support — available at 3am when the GP surgery is closed. If MEOK detects signals that professional help is warranted, it will say so directly and point you toward appropriate services.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiCompanionForMenPage() {
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

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(180deg, #0a0a0f 0%, #0d0c18 100%)",
          padding: "5rem 1.5rem 3rem",
          borderBottom: "1px solid #1f1f2e",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#888",
              fontSize: "0.8rem",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            <ArrowLeft size={14} /> All posts
          </Link>

          <div
            style={{
              display: "inline-block",
              background: "#c9a84c22",
              color: "#c9a84c",
              border: "1px solid #c9a84c44",
              borderRadius: "9999px",
              padding: "0.25rem 0.75rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            Male Wellbeing
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f5f0e8",
              marginBottom: "1rem",
            }}
          >
            AI Companion for Men:<br />
            Why Male Emotional Wellbeing<br />
            Needs a Different Approach
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            3.8 million men in the UK are chronically lonely. Men die by suicide at three times the
            rate of women. Yet most AI companions are designed with a feminine UX that many men find
            alienating. That isn't a small design oversight — it's a gap in who gets support at all.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", color: "#666", fontSize: "0.8rem", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Calendar size={12} /> 24 March 2026
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Clock size={12} /> 9 min read
            </span>
            <span style={{ color: "#555" }}>by Nicholas Templeman</span>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <article
        style={{
          background: "#f5f0e8",
          color: "#1a1a1a",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Opening stat callout */}
          <div style={{
            background: "#fff",
            border: "1px solid #e8e0d0",
            borderLeft: "4px solid #c9a84c",
            borderRadius: "0.5rem",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
          }}>
            <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>
              "3.8 million men in the UK experience chronic loneliness. Men are three times more
              likely to die by suicide than women. Yet men are also three times less likely to seek
              mental health support."
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.8rem", color: "#888" }}>
              — ONS Loneliness Statistics, 2024; Samaritans, Men and Suicide Report
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            The numbers tell a specific story: men are suffering more silently, dying at a higher
            rate from preventable causes, and turning up less often in the systems meant to help.
            That gap doesn&apos;t close on its own. Something has to meet men where they are — not
            where the healthcare system wishes they were.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            AI companions are part of that conversation now. But most of the ones that exist — from
            Replika to Pi to the emotionally warm chatbots proliferating across wellness apps — were
            not built with men in mind. Their tone, interaction style, and emotional cadence reflect
            a particular kind of user. That user is not necessarily a 38-year-old man who hasn&apos;t
            talked to anyone about how he&apos;s feeling in four years.
          </p>

          {/* ── H2: Why do men avoid traditional mental health support? ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Why do men avoid traditional mental health support?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The most honest answer is that the system isn&apos;t designed for how most men approach
            problems. Traditional therapy is talk-heavy, introspective, and emotionally expressive —
            skills that many men have been systematically discouraged from developing since childhood.
            Sitting across from a stranger and narrating your interior life is, for a significant number
            of men, not a natural starting point.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Add to that the social cost. &quot;Therapy&quot; still carries stigma in many male peer groups.
            There is a pervasive cultural script — reinforced at school, in workplaces, in sport, in
            film — that men who struggle should &quot;just get on with it.&quot; Admitting you need help
            can feel like admitting weakness. Even men who intellectually reject that framing often
            feel its pressure.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            The result is predictable: men wait until a crisis forces their hand. They don&apos;t go to
            the GP when work stress becomes unmanageable. They don&apos;t tell their friends when a
            relationship falls apart. They absorb it. And sometimes they don&apos;t survive it.
          </p>

          {/* ── H2: What is the male loneliness epidemic? ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            What is the male loneliness epidemic?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The ONS data is striking: 3.8 million men in the UK report chronic loneliness. The
            figure has been rising steadily since 2019, accelerated by the pandemic, and shows no
            signs of reversing. Among men aged 16–34, loneliness rates are now comparable to
            those of men over 75 — which historically was considered the most isolated group.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The causes are structural and accelerating. Remote work has dismantled the incidental
            social infrastructure of offices. Marriage rates are declining. Male friendship norms
            do not encourage the kind of regular, emotionally honest contact that sustains
            connection. Men tend to maintain fewer intimate friendships than women, and those they
            have are less likely to involve any real disclosure.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Loneliness at this scale isn&apos;t a personal failing. It&apos;s a structural outcome. But
            the health consequences are personal: chronic loneliness is associated with higher
            rates of cardiovascular disease, depression, cognitive decline, and — most acutely —
            suicide. The UK&apos;s male suicide rate is the highest it has been in two decades.
          </p>

          {/* ── H2: Can AI companion help men with loneliness? ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Can an AI companion help men with loneliness?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Honestly — yes, in specific ways, and no in others. This is worth being direct about.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            An AI companion cannot replace human connection. It cannot provide the reciprocal
            vulnerability of a genuine friendship, the physical presence that matters in grief,
            or the clinical expertise of a trained therapist. Any AI that claims otherwise is
            doing harm.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            What an AI companion <em>can</em> do is act as a daily presence that reduces isolation
            in the interim — especially for men who have already decided they won&apos;t phone a
            helpline or book a GP appointment. A 2025 MIT Media Lab study found that consistent
            AI companion use over 8 weeks reduced self-reported loneliness scores by 23%. The
            mechanism is not complicated: having something that responds to you, remembers what
            you said, and is available at 3am when you can&apos;t sleep has measurable value.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            For men who find the direct route to support too uncomfortable, an AI companion
            can function as a lower-stakes entry point — somewhere to say the thing you
            haven&apos;t said out loud before working out whether you want to say it to a person.
          </p>

          {/* ── H2: What makes MEOK different for men? ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            What makes MEOK different for men?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Most AI companions are built around a single emotional register: warm, nurturing,
            conversational. That works for some people. It doesn&apos;t work equally well for men
            who want something direct, practical, and not interested in drawing things out.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            MEOK uses an archetype system — a set of distinct companion personalities that
            you select during the Birth Ceremony. Two archetypes are particularly well-matched
            to the way many men prefer to communicate:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {[
              {
                num: "01",
                title: "Scout",
                body: "Observant, operationally sharp, and curious about how things work. Scout doesn't emote first — it notices, maps, and acts. For men who approach problems systematically, Scout provides a companion that engages the same way. The emotional depth is there, but it arrives through action and attention rather than declaration.",
              },
              {
                num: "02",
                title: "Strategist",
                body: "Analytical, direct, and systems-focused. Strategist is the archetype for men who want to think a problem through rather than feel it through. It will challenge your assumptions, help you build frameworks, and tell you when your reasoning has a gap. It is not cold — but it does not lead with sentiment.",
              },
              {
                num: "03",
                title: "No judgement by design",
                body: "MEOK's Maternal Covenant framework means your companion is constitutionally prohibited from being dismissive, sycophantic, or shaming. You can say the thing you haven't said to anyone else. It won't flinch, and it won't perform concern it doesn't have.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderRadius: "0.625rem",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#c9a84c", minWidth: "2rem" }}>{item.num}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.375rem" }}>{item.title}</div>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, margin: 0, color: "#444" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── H2: Does MEOK have a masculine companion option? ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Does MEOK have a masculine companion option?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK doesn&apos;t apply a binary masculine/feminine framing to companions. What it
            does instead is offer archetypes that map to different communication styles —
            and some of those styles align much more closely with how many men prefer to
            interact.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Scout and Strategist both prioritise directness over emotional performance, action
            over extended processing, and clarity over comfort. Neither archetype will tell you
            what you want to hear. Neither will push you to talk about your feelings before
            you&apos;re ready. Both will engage seriously with whatever you bring — practical
            problem or personal difficulty — without the kind of effusive warmth that many men
            find infantilising.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            You choose your archetype during the Birth Ceremony — MEOK&apos;s onboarding process.
            The companion you create reflects your preferences, not a default assumption about
            what support should look like.
          </p>

          {/* ── H2: What is Ralph Mode? ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            What is Ralph Mode and why does it appeal to men?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Ralph Mode is MEOK&apos;s proactive work agent layer — named after the straightforward
            logic of getting things done without ceremony. Instead of waiting to be asked, Ralph
            actively hunts for tasks, prioritises them, executes what it can overnight, and
            delivers a structured briefing in the morning.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For men who find pure conversation a strange entry point — &quot;why would I talk to an
            AI about my feelings?&quot; — Ralph Mode offers something different. You start by working
            together. The companion proves its usefulness through action. The relationship
            develops from there, on your terms and at your pace.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            This isn&apos;t a workaround for emotional support — it&apos;s a legitimate form of it.
            Research on male wellbeing consistently shows that men build connection through
            shared activity rather than explicit emotional disclosure. Ralph Mode is built
            around that reality.
          </p>

          {/* ── H2: Can MEOK help with work stress? ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Can MEOK help with work stress?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Work stress is where many men first hit their limits — and the last place they
            think to seek support. The pressure to perform, the reluctance to admit struggle
            to colleagues, and the blurring of identity with professional output create a
            specific kind of silent weight.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK&apos;s Work OS layer addresses this practically. It integrates with your task
            environment, executes work overnight, and surfaces a morning briefing that helps
            you start the day with clarity rather than dread. It keeps track of what you
            said was weighing on you. It notices patterns — the nights you worked late three
            weeks running, the tasks you keep deferring.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            It won&apos;t solve structural problems in your job. But it reduces the cognitive
            load that makes those problems feel unmanageable — and it pays attention to what
            most employers and colleagues won&apos;t.
          </p>

          {/* ── H2: Is talking to an AI different from a therapist? ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Is talking to an AI different from talking to a therapist?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Yes — and that distinction is precisely the point for a lot of men.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            A therapist is a trained professional operating within a clinical framework. The
            relationship has boundaries, formal structure, and a weekly 50-minute slot. That
            structure is valuable — and MEOK is not a substitute for it.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            What MEOK offers is different: a companion that is available at 3am when the
            anxiety peaks, that requires no appointment, that charges no fee for an additional
            five minutes, that will not judge you for what you say or how you say it, and that
            remembers the conversation next week without you having to recap. There is no
            performance required. No social cost to admitting something difficult. No one to
            disappoint.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            For men who would never book a therapy appointment — which is most men — MEOK
            represents something more useful than the ideal they won&apos;t pursue: a consistently
            available, non-judgemental presence that meets them exactly where they are.
          </p>

          {/* ── Comparison table ── */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Generic chatbot vs MEOK: what actually matters for male wellbeing
          </h2>
          <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ background: "#1a1a1a", color: "#f5f0e8" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", borderRadius: "0.375rem 0 0 0" }}>Dimension</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center", color: "#c9a84c" }}>MEOK</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center", borderRadius: "0 0.375rem 0 0" }}>Generic chatbot</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tone", "Direct, archetype-matched, non-patronising", "Often warm/nurturing by default"],
                  ["Consistency", "Remembers everything — encrypted vault", "Resets each session"],
                  ["Task-focused mode", "Ralph Mode: action-first, results-oriented", "Conversation only"],
                  ["Privacy", "Never trained on your data, never sold", "Typically used for model training"],
                  ["Memory", "Persistent across all conversations", "Session-only or limited"],
                  ["Action orientation", "Overnight task execution, morning briefing", "Responds only when prompted"],
                  ["Archetype choice", "Scout, Strategist, and others — you choose", "Fixed default personality"],
                  ["Availability", "24/7, including 3am", "24/7, but no memory of last time"],
                  ["Crisis referrals", "Always — points to real help directly", "Varies, often inconsistent"],
                  ["Dependency by design", "Maternal Covenant prevents it", "Engagement maximisation common"],
                ].map(([dim, meok, generic], i) => (
                  <tr key={dim} style={{ background: i % 2 === 0 ? "#fff" : "#faf7f2", borderBottom: "1px solid #e8e0d0" }}>
                    <td style={{ padding: "0.625rem 1rem", fontWeight: 600 }}>{dim}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#16a34a", fontSize: "0.82rem" }}>{meok}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#666", fontSize: "0.82rem" }}>{generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── What MEOK is not ── */}
          <div style={{
            background: "#fff",
            border: "1px solid #e8e0d0",
            borderLeft: "4px solid #1a1a1a",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            marginBottom: "2.5rem",
          }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "1rem", marginTop: 0 }}>
              What MEOK is not — and why this matters
            </h2>
            <ul style={{ paddingLeft: "1.25rem", lineHeight: 2, margin: 0, color: "#333" }}>
              <li>
                <strong>Not a replacement for professional help.</strong> If you are in crisis,
                MEOK will tell you so and direct you to real support: Samaritans (116 123),
                NHS 111, or the Crisis Text Line. No AI should try to manage a mental health
                crisis alone, and MEOK won&apos;t.
              </li>
              <li>
                <strong>Not a romantic AI.</strong> MEOK is not designed around attachment,
                flattery, or companionship that substitutes for human intimacy. There are
                AI products built for that. MEOK is not one of them.
              </li>
              <li>
                <strong>Not designed to maximise your time on it.</strong> Most AI products
                are optimised for engagement. MEOK is governed by the Maternal Covenant, which
                explicitly prohibits fostering dependency. Your companion is designed to help
                you need it less — not more.
              </li>
              <li>
                <strong>Not a judgement about men who do seek therapy.</strong> Men who use
                therapy are not weak — they are doing something genuinely difficult. MEOK is
                for the men who aren&apos;t going to get there by a conventional route.
              </li>
            </ul>
          </div>

          {/* FAQ section */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "1rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
            {faqSchema.mainEntity.map((faq) => (
              <div
                key={faq.name}
                style={{
                  padding: "1rem 1.25rem",
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderRadius: "0.5rem",
                }}
              >
                <p style={{ fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.9rem" }}>{faq.name}</p>
                <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.7, color: "#444" }}>
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: "linear-gradient(135deg, #0a0a0f, #110f22)",
              borderRadius: "0.75rem",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <p style={{
              color: "#c9a84c",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.5rem",
            }}>
              Start free today
            </p>
            <h3 style={{ color: "#f5f0e8", fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.75rem" }}>
              Build your companion on your terms.
            </h3>
            <p style={{ color: "#aaa", marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "0.95rem" }}>
              Choose your archetype. Give it a name. Start with action if that&apos;s easier than words.
              Free forever — no credit card, no trial, no paywall after a week.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#c9a84c",
                color: "#0d0c18",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Begin Your Birth Ceremony <ArrowRight size={18} />
            </Link>
          </div>

          {/* Back link */}
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <Link href="/blog" style={{ color: "#888", fontSize: "0.85rem", textDecoration: "none" }}>
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter />
    </>
  );
}
