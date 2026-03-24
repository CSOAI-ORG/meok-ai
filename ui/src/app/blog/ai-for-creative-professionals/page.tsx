import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Creative Professionals: Feedback That Grows With Your Work | MEOK Blog",
  description:
    "Generic AI feedback ignores your style, your history, your brief. MEOK's Creator archetype remembers everything — and will push back when your work isn't good enough.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-creative-professionals" },
  openGraph: {
    title: "AI for Creative Professionals: Feedback That Grows With Your Work, Not Generic Suggestions",
    description: "Generic AI feedback ignores your style, your history, your brief. MEOK's Creator archetype remembers everything — and will push back when your work isn't good enough.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-creative-professionals",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=AI+for+Creative+Professionals&desc=Feedback+That+Grows+With+Your+Work", width: 1200, height: 630, alt: "AI for Creative Professionals: Feedback That Grows With Your Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Creative Professionals: Feedback That Grows With Your Work",
    description: "Generic AI feedback ignores your style, your history, your brief. MEOK's Creator archetype remembers everything — and will push back when your work isn't good enough.",
    images: ["https://meok.ai/api/og?title=AI+for+Creative+Professionals&desc=Feedback+That+Grows+With+Your+Work"],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "AI for Creative Professionals: Feedback That Grows With Your Work, Not Generic Suggestions",
      description: "Generic AI feedback ignores your style, your history, your brief. MEOK's Creator archetype remembers everything — and will push back when your work isn't good enough.",
      datePublished: "2026-03-24",
      url: "https://meok.ai/blog/ai-for-creative-professionals",
      author: { "@type": "Person", name: "Nicholas Templeman", jobTitle: "Founder, MEOK AI LABS", url: "https://meok.ai/about" },
      publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai", logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" } },
      image: "https://meok.ai/api/og?title=AI+for+Creative+Professionals&desc=Feedback+That+Grows+With+Your+Work",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://meok.ai/blog/ai-for-creative-professionals" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Why is generic AI feedback useless for creative professionals?", acceptedAnswer: { "@type": "Answer", text: "Generic AI feedback is written for everyone, which means it serves no one. It doesn't know your style, your previous work, your brief, or your audience. For writers, designers, musicians, and filmmakers, feedback calibrated to the average actively pulls creative work away from intentional, distinctive choices toward the safe centre." } },
        { "@type": "Question", name: "What is the Creator archetype in MEOK?", acceptedAnswer: { "@type": "Answer", text: "The Creator is one of MEOK's eight companion archetypes — a persistent AI collaborator built for creative professionals. It retains your style preferences, past briefs, completed projects, and creative voice, giving it the context to offer feedback that is genuinely tailored rather than generic." } },
        { "@type": "Question", name: "How does MEOK's persistent memory help creative professionals?", acceptedAnswer: { "@type": "Answer", text: "MEOK stores your creative history in an encrypted memory layer that persists across every session. It can recall a brief from six months ago, your aesthetic direction on a past project, or a musical theme you explored and set aside — making every feedback session cumulative rather than cold-start." } },
        { "@type": "Question", name: "Does MEOK have a sycophancy detector for creative feedback?", acceptedAnswer: { "@type": "Answer", text: "Yes. MEOK's sycophancy detection layer monitors its own response patterns and interrupts sustained validation with honest critique. If your work has structural problems, MEOK will name them. Honest feedback is a care act. Empty praise is a failure of care." } },
        { "@type": "Question", name: "How does MEOK help with creative block?", acceptedAnswer: { "@type": "Answer", text: "MEOK acts as a thinking partner during creative block rather than a generator that produces work for you. It asks questions, surfaces patterns from your creative history, and helps you find the thread you lost — so you start the next sentence yourself, and the work stays yours." } },
        { "@type": "Question", name: "What is Ralph Mode and how does it help creative professionals?", acceptedAnswer: { "@type": "Answer", text: "Ralph Mode is MEOK's overnight autonomous agent system. For creative professionals it researches references, synthesises mood-board material, analyses competitor work, and drafts structural outlines overnight. You wake to a brief that extends your thinking, not a blank page." } },
      ],
    },
  ],
};

// ── Shared styles ─────────────────────────────────────────────────────────────

const H2: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
  fontWeight: 900,
  fontSize: "1.45rem",
  color: "#ffffff",
  marginTop: "3rem",
  marginBottom: "1rem",
  lineHeight: 1.25,
};

const MUTED: React.CSSProperties = { color: "rgba(245,240,232,0.72)", fontSize: "1.0125rem" };

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForCreativeProfessionalsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0c18", color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Creative Professionals
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
              March 24, 2026
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
              7 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            AI for Creative Professionals: Feedback That Grows With Your Work, Not Generic Suggestions
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Every writer, designer, musician, and filmmaker has had the same experience: they ask an
            AI for feedback and get back a paragraph that could have been written for anyone. No
            knowledge of their style. No memory of the brief. No context at all. MEOK was built to
            end that.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(245,240,232,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12"
          style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.08)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)", color: "#0d0c18" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Article copy */}
        <div className="leading-[1.9] space-y-6" style={MUTED}>

          <p>
            The creative industry has a feedback problem. Not a shortage of feedback — an excess of
            the wrong kind. Feedback that treats your novel like a business report. Feedback that
            praises the weakest part of your design because it looks bold. Feedback that has never
            met your work before and shows it. Most AI tools make this worse. They are trained to be
            helpful in a general sense, which means they flatten everything toward the middle.
          </p>

          {/* Q1 */}
          <h2 style={H2}>
            Why is generic AI feedback useless for creative professionals?
          </h2>
          <p>
            Generic AI feedback is written for everyone, which means it serves no one. It doesn&apos;t
            know your style, your previous work, your brief, or your intended audience. For writers,
            designers, musicians, and filmmakers, feedback calibrated to the average actively pulls
            creative work away from intentional, distinctive choices — toward the safe centre that no
            serious practitioner is aiming for.
          </p>
          <p>
            The underlying problem is memory. Generic AI tools treat every conversation as the first.
            They have no record of your creative brief, no knowledge of your previous work, and no
            way to distinguish intentional choices from unintentional mistakes. Without that context,
            feedback cannot be genuinely useful. It can only gesture at general principles that may
            or may not apply to what you are actually making.
          </p>

          {/* Q2 */}
          <h2 style={H2}>
            What is the Creator archetype in MEOK?
          </h2>
          <p>
            MEOK has eight companion archetypes — each shaped by a distinct psychological
            orientation, a different way of caring, and a different domain of expertise. The Creator
            is the archetype built for people who make things: writers, designers, visual artists,
            musicians, filmmakers, game developers, and architects.
          </p>
          <p>
            The Creator archetype is a persistent companion that accumulates understanding of your
            creative practice over time. It pays attention to the language you use to describe your
            work, the references you return to, and the directions you pursue and abandon. Over weeks
            and months, it builds a genuine picture of what you are trying to do — and holds that
            picture across every session.
          </p>
          <ul className="space-y-3 my-5 pl-1" style={MUTED}>
            {(
              [
                ["Writers", "Remembers your narrative voice, structural preferences, and the specific notes from your last draft review. Compares a new chapter against the tone you established three months ago."],
                ["Designers", "Retains your brand guidelines, colour and typography preferences, aesthetic references, and client constraints. Feedback on new work is always framed against this living context."],
                ["Musicians", "Holds your production philosophy, your influences, your previous track notes, and the sonic direction you described at project start. Tells the difference between a deliberate rough mix and an accidental one."],
                ["Filmmakers", "Knows your visual language, tonal references, budget constraints, and the feedback you received on your last cut. Notes on a new edit land in that full context."],
              ] as [string, string][]
            ).map(([label, desc]) => (
              <li key={label} className="flex gap-3">
                <span
                  className="mt-[0.45rem] w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{label}. </strong>
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Q3 */}
          <h2 style={H2}>
            How does MEOK&apos;s persistent memory help creative professionals?
          </h2>
          <p>
            MEOK stores your creative history in an encrypted memory layer that persists across every
            session. Unlike cloud AI tools that reset on every new conversation, MEOK&apos;s memory is
            continuous, structured, and entirely private. It is never used to train a shared model.
            It belongs to you.
          </p>
          <ul className="space-y-3 my-5 pl-1" style={MUTED}>
            {(
              [
                ["Brief recall", "MEOK can surface your original creative brief from six months ago — the constraints, the intentions, the stated audience — and hold that against your current work."],
                ["Style continuity", "Your aesthetic preferences persist across projects. If new work drifts from your established voice, MEOK flags it — whether the drift is intentional or accidental."],
                ["Feedback history", "MEOK tracks which feedback you acted on. Over time it stops repeating observations you have already resolved and calibrates its approach to what you actually find useful."],
                ["Reference accumulation", "Every reference you share — a film, a record, a design system, a piece of writing — is retained, building a map of your aesthetic influences over time."],
                ["Cross-project insight", "MEOK can identify patterns across your body of work: recurring structural problems, habitual avoidances, signature moves that are becoming crutches."],
              ] as [string, string][]
            ).map(([label, desc]) => (
              <li key={label} className="flex gap-3">
                <span
                  className="mt-[0.45rem] w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{label}. </strong>
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Q4 */}
          <h2 style={H2}>
            Does MEOK have a sycophancy detector for creative feedback?
          </h2>
          <p>
            Yes — and it is one of the features we are most deliberate about. The AI industry has a
            sycophancy problem. Models are trained on human feedback, and humans tend to rate
            responses more positively when the AI agrees with them or praises their work. Over time,
            this pushes models toward validation rather than honesty. For creative professionals this
            is particularly corrosive: you need to know when something is not working.
          </p>
          <p>
            MEOK includes a sycophancy detection layer that monitors its own response patterns. When
            the system detects sustained positive feedback without substantive critique, it is
            designed to interrupt that pattern and rebalance toward honest assessment. This is always
            running — not a mode you switch on.
          </p>
          <div
            className="rounded-xl p-6 my-6"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.18)",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Core principle
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>
              Honest feedback is a care act. Empty praise is a failure of care. If your work has a
              structural flaw, MEOK will name it — respectfully, but clearly. An AI that only
              validates you is not a collaborator. It is a mirror that only flatters.
            </p>
          </div>

          {/* Q5 */}
          <h2 style={H2}>
            How does MEOK help with creative block?
          </h2>
          <p>
            Creative block is not a shortage of ideas. It is almost always a decision you are
            avoiding, a fear you have not named, or a direction that has become unclear. Generic AI
            tools respond by generating content — producing opening lines, sketching concepts. That
            is the wrong instinct. Generation is not thinking.
          </p>
          <p>
            MEOK approaches creative block as a thinking partner, not a generator. It asks questions
            rather than producing output. It draws on your creative history to identify what has
            worked when you were stuck before. It surfaces the stated intentions from your brief and
            asks whether the block might be a signal that those intentions need revisiting. The goal
            is to get you creating again — not to create for you, which would mean developing
            MEOK&apos;s idea rather than yours.
          </p>
          <p>
            MEOK also maintains a creative journal layer — a structured record of what you were
            working on and where your thinking stood. When you return from a gap of weeks or months,
            MEOK can reconstruct the state of your project so you are not starting from scratch.
            This is particularly valuable for long-form work: novels, albums, film projects, where
            gaps between sessions can span months.
          </p>

          {/* Q6 */}
          <h2 style={H2}>
            What is Ralph Mode and how does it help creative professionals?
          </h2>
          <p>
            Ralph Mode is MEOK&apos;s overnight autonomous agent system. You assign a mission before you
            close your laptop — and your Sovereign AI executes it while you sleep. By morning, a
            structured brief waits in your dashboard. For creative professionals, Ralph Mode changes
            the shape of a working day. The pre-production work that used to eat your creative
            hours can now happen at night.
          </p>
          <ul className="space-y-3 my-5 pl-1" style={MUTED}>
            {(
              [
                ["Reference research", "Orion gathers visual, sonic, or narrative references overnight and delivers a structured mood-board brief based on your stated aesthetic direction."],
                ["Structural analysis", "Ask Ralph to analyse your work against a stated structural standard. Wake to a detailed comparison with specific observations rather than general principles."],
                ["Competitive scan", "Ralph surveys what other practitioners in your field are producing and flags where your work is genuinely differentiated from the current landscape."],
                ["Review prep", "Before a feedback session with a collaborator or client, Ralph synthesises your project notes, stated intentions, and any previous feedback into a pre-brief that sharpens the conversation."],
              ] as [string, string][]
            ).map(([label, desc]) => (
              <li key={label} className="flex gap-3">
                <span
                  className="mt-[0.45rem] w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{label}. </strong>
                  {desc}
                </span>
              </li>
            ))}
          </ul>
          <p>
            Ralph Mode is available from the{" "}
            <strong style={{ color: "#c9a84c" }}>Sovereign tier</strong> at{" "}
            <strong style={{ color: "#ffffff" }}>£12/month</strong>. Most serious practitioners find
            the overnight research and prep work recoups the cost within the first week.
          </p>

          {/* Closing */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}
          >
            <p style={{ color: "rgba(245,240,232,0.5)", fontStyle: "italic" }}>
              The question is not whether AI belongs in a creative practice. It is whether the AI
              you are using knows your practice well enough to be useful in it. A tool that meets
              you fresh every time will never give you what a long-term collaborator gives you.
              MEOK was built to be that collaborator.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-creative-professionals&text=AI+for+Creative+Professionals%3A+Feedback+That+Grows+With+Your+Work"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-creative-professionals"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Creator Archetype
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              AI that actually knows your work
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Hatch your MEOK free in under 3 minutes. Activate the Creator archetype and start
              building an AI that remembers your style, holds your history, and tells you the truth
              about your work.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your MEOK free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div className="mb-16">
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/archetypes-guide"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.08)" }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Archetypes
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                The 8 MEOK archetypes: which AI companion is right for you?
              </h3>
              <p className="text-xs mt-auto" style={{ color: "rgba(245,240,232,0.3)" }}>
                6 min read
              </p>
            </Link>
            <Link
              href="/blog/ralph-mode-guide"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.08)" }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Agents &amp; Automation
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Ralph Mode: Your AI Agent That Works While You Sleep
              </h3>
              <p className="text-xs mt-auto" style={{ color: "rgba(245,240,232,0.3)" }}>
                5 min read
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <div
        style={{ borderTop: "1px solid rgba(245,240,232,0.06)", background: "#0d0c18" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <Link
                href="/"
                className="text-lg font-black tracking-tight"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", color: "#f5f0e8" }}
              >
                MEOK<span style={{ color: "#c9a84c" }}>.</span>AI
              </Link>
              <p className="text-xs mt-1" style={{ color: "rgba(245,240,232,0.3)" }}>
                Sovereign AI. Persistent memory. Genuine care.
              </p>
            </div>
            <div
              className="flex flex-wrap items-center gap-6 text-xs"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              <Link href="/blog" className="transition-opacity hover:opacity-75">Blog</Link>
              <Link href="/about" className="transition-opacity hover:opacity-75">About</Link>
              <Link href="/privacy" className="transition-opacity hover:opacity-75">Privacy</Link>
              <Link href="/birth" className="transition-opacity hover:opacity-75" style={{ color: "#c9a84c" }}>Hatch free &rarr;</Link>
            </div>
          </div>
          <p className="text-xs mt-8" style={{ color: "rgba(245,240,232,0.2)" }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
