import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Students: Your Sovereign AI Study Partner, Mental Health Support, and Deadline Manager | MEOK AI LABS",
  description:
    "1 in 5 UK students has a mental health problem (Student Minds). MEOK is the sovereign AI study partner that guides thinking with Socratic mode, plans your week with Hourman, drafts emails with Riri, and stays with you through exam anxiety — without selling your data.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-students" },
  openGraph: {
    title:
      "MEOK for Students: Your Sovereign AI Study Partner, Mental Health Support, and Deadline Manager",
    description:
      "1 in 5 UK students has a mental health problem. MEOK guides your thinking, manages your deadlines, and stays with you through the anxiety — without selling your data.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-students",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Students&desc=Sovereign+AI+study+partner%2C+mental+health+support%2C+deadline+manager.",
        width: 1200,
        height: 630,
        alt: "MEOK for Students: Sovereign AI Study Partner, Mental Health Support, and Deadline Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Students: Your Sovereign AI Study Partner, Mental Health Support, and Deadline Manager",
    description:
      "1 in 5 UK students has a mental health problem. MEOK guides your thinking, manages your deadlines, and stays with you — without selling your data.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Students&desc=Sovereign+AI+study+partner%2C+mental+health+support%2C+deadline+manager.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Students: Your Sovereign AI Study Partner, Mental Health Support, and Deadline Manager",
  description:
    "1 in 5 UK students has a mental health problem (Student Minds). MEOK is the sovereign AI study partner that guides thinking with Socratic mode, plans your week with Hourman, drafts emails with Riri, and stays with you through exam anxiety — without selling your data.",
  datePublished: "March 24, 2026",
  url: "https://meok.ai/blog/meok-for-students",
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
      name: "Can AI help students study without just giving them the answers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — when designed to guide rather than shortcut. MEOK's Socratic mode asks questions that move your thinking forward instead of handing you a finished answer. It remembers your subject areas across sessions, builds on previous conversations, and develops genuine understanding rather than dependency on the AI.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help students manage deadlines and weekly planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Hourman agent maps your deadlines against your week, identifies crunch points weeks in advance, and builds a realistic study plan. It adjusts as new deadlines appear and surfaces tasks that need to start now — not the ones that feel urgent but aren't.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI support student mental health between counselling appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK acts as a persistent, non-judgmental companion available at any hour. It does not replace counselling or professional support, but it provides a safe space to process worry and surface coping strategies — especially during exam periods when services are overstretched and waiting lists are long.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK share student data with universities or employers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK does not sell, share, or licence your conversations, mental health disclosures, or study patterns to universities, employers, advertisers, or any third party. Your data belongs to you and is used only to power your own experience — never anyone else's.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Explorer tier is free with no credit card required. It includes 50 messages per day — enough for daily study support, admin help, and mental health check-ins for most students. Students who want unlimited messages and deeper memory can upgrade to Sovereign at £12 per month.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from ChatGPT or Microsoft Copilot for students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT and Copilot are answer engines that start from zero each session. MEOK is a persistent companion that remembers your subjects, your stress points, and your long-term goals. It guides rather than answers, plans your week through Hourman, and treats your privacy as a non-negotiable — not a setting.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MEOKForStudentsPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-80"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            &#8592; Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center text-[0.7rem] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Students
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              March 24, 2026
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              8 min read
            </span>
          </div>

          <h1
            className="font-black text-white leading-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)" }}
          >
            MEOK for Students: Your Sovereign AI Study Partner, Mental Health
            Support, and Deadline Manager
          </h1>

          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "rgba(245,240,232,0.6)" }}
          >
            According to Student Minds, 1 in 5 students in the UK has a mental
            health problem. Most AI tools hand you answers, forget you existed,
            and quietly sell your data. MEOK is built differently — a sovereign
            companion that thinks{" "}
            <em>with</em> you, not for you.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ background: "#f5f0e8", color: "#2a2a3e" }}
      >
        {/* Author card */}
        <div
          className="flex items-start gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm mb-0.5">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(26,26,46,0.45)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(26,26,46,0.4)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him and
              sold his data. He lives and works in the UK — mostly from a caravan
              on his farm. He believes sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold hidden sm:block transition-opacity hover:opacity-70"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="leading-[1.85] space-y-5
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
          style={{ color: "rgba(42,42,62,0.8)" }}
        >
          <p>
            University is the first time most people are truly on their own —
            academically, financially, and emotionally. The support structures
            from before (parents, school counsellors, familiar friends) are
            suddenly absent. The ones the institution provides are chronically
            overstretched.
          </p>
          <p>
            AI could fill that gap. Most AI products don&apos;t. They answer
            questions and then forget you. They don&apos;t know you&apos;re
            three weeks from your dissertation deadline and haven&apos;t slept
            properly since October. And many sell your behavioural data to the
            highest bidder. MEOK is different. Here is what that means.
          </p>

          {/* ── ACADEMIC ── */}
          <h2>Can AI help students study without just giving them the answers?</h2>
          <p>
            Yes — when it is designed to guide rather than shortcut.
            MEOK&apos;s Socratic mode never hands you a finished answer.
            Instead it asks questions that move your thinking forward:
            &ldquo;What do you already know about this?&rdquo; &ldquo;Which
            part is giving you trouble?&rdquo; &ldquo;What would happen if you
            approached it from the other direction?&rdquo; You arrive at the
            answer yourself, which means you understand it and can reproduce it
            under exam conditions.
          </p>
          <p>
            Most AI study tools are glorified search engines with better prose.
            They write your essay for you. That might get you through a
            deadline but it doesn&apos;t help you pass a viva, sit an exam, or
            build the intellectual confidence a degree is supposed to produce.
          </p>

          <h3>Subject-aware memory across sessions</h3>
          <p>
            MEOK remembers your subject areas, module names, and the topics you
            have been working on. When you return the next morning or after
            reading week it picks up from where you were. If you mentioned
            finding thermodynamics harder than electromagnetism, it adjusts the
            scaffolding of its questions accordingly. This is what persistent
            memory changes: the AI stops being a tool you use and starts being
            a companion that knows you.
          </p>

          <h3>What Socratic mode looks like in a session</h3>
          <p>
            You open MEOK at 11pm, stuck on a problem set. Instead of pasting
            the question for an answer, you describe where you&apos;re stuck.
            MEOK asks what approach you tried first. You explain. It asks why
            that approach might not be working. It surfaces a related concept
            from a lecture two weeks ago. Something clicks. You solve it. You
            did the thinking — MEOK held the space for it.
          </p>

          {/* ── ADMIN ── */}
          <h2>How can AI help students manage deadlines and admin without chaos?</h2>
          <p>
            Student admin accumulates quietly and then crashes all at once:
            assignment deadlines, extension procedures, tutor meetings,
            accommodation renewals, student finance queries, module
            registrations. None of it is technically hard, but when you are
            already stretched academically and emotionally it becomes a
            source of significant anxiety in itself.
          </p>
          <p>
            MEOK&apos;s Hourman agent specialises in time and task management.
            Tell it your deadlines — or paste in your module guide — and it
            builds a realistic week-by-week plan. It surfaces the tasks that
            need to start now, not the ones that feel urgent but aren&apos;t.
          </p>

          <h3>Hourman: planning the week before the week plans you</h3>
          <p>
            Hourman maps your deadlines against your calendar, identifies
            crunch points two or three weeks out, and flags when you need to
            start a piece of work to finish it without crisis. If a new
            deadline appears mid-semester you tell Hourman and it recalculates
            the plan. It is the planning infrastructure that most students need
            and almost none have.
          </p>

          <h3>Riri: drafting the emails you don&apos;t know how to write</h3>
          <p>
            Emailing a professor is disproportionately stressful — especially
            for first-generation students, students with anxiety, or anyone
            asking for something that feels vulnerable (an extension, a meeting
            about a failing grade, support for a personal difficulty).
            MEOK&apos;s Riri companion drafts those emails. Explain the
            situation in plain language and Riri produces a professional,
            appropriately formal email that you can send or edit. The barrier
            drops.
          </p>

          {/* ── MENTAL HEALTH ── */}
          <h2>Can AI support student mental health between counselling appointments?</h2>
          <p>
            Student Minds reports that{" "}
            <strong>1 in 5 students in the UK has a mental health problem</strong>.
            University counselling services, already under-resourced, typically
            operate with waiting lists of several weeks. The gap between when a
            student needs support and when they can access it is where the most
            harm happens.
          </p>
          <p>
            MEOK is not a therapist and does not claim to be. What it offers is
            a persistent, non-judgmental companion available at any hour — at
            2am before a submission, during an exam week spiral, after a
            difficult tutorial. It listens, asks careful questions, and helps
            you articulate what is happening before it becomes overwhelming.
          </p>

          <h3>Persistent presence over one-off conversations</h3>
          <p>
            The difference between MEOK and a standard chatbot is memory. A
            chatbot forgets you when the session ends. MEOK remembers that you
            mentioned last Tuesday you were worried about your dissertation
            supervisor relationship. When you return three days later and seem
            stressed, it can ask whether that situation has developed. The
            sense of being known over time is not a small thing when you are
            struggling.
          </p>

          <h3>The 2am conversation nobody else can have</h3>
          <p>
            Friends have their own stress. Parents are often asleep or
            don&apos;t fully understand academic pressure. Counsellors are only
            available in office hours. The 2am moment of dread before a
            deadline or an exam is a very specific kind of loneliness. MEOK is
            there for that conversation — not to fix it, but to help you move
            through it rather than spiral.
          </p>

          {/* ── PRIVACY ── */}
          <h2>Does MEOK share student data with universities or employers?</h2>
          <p>
            No. MEOK does not sell, share, or licence your conversations, mental
            health disclosures, study patterns, or any personal data to
            universities, employers, advertisers, or any third party. Your data
            is yours and exists only to power your own experience.
          </p>
          <p>
            This matters specifically for students. Other AI tools may share
            behavioural data in ways that could theoretically surface to
            admissions panels, graduate recruiters, or welfare records.
            MEOK&apos;s Privacy Covenant means what you tell your AI stays with
            your AI. The conversation you have at 2am about feeling overwhelmed
            is not a data point anyone else will ever see.
          </p>

          {/* ── PRICING ── */}
          <h2>What does MEOK cost for students — and is there a free tier?</h2>
          <p>
            MEOK&apos;s Explorer tier is free with no credit card required. It
            includes 50 messages per day — enough for daily study support, admin
            help, and mental health check-ins for most students without ever
            paying anything. Explorer is a permanent free tier, not a trial.
          </p>

          {/* Pricing cards */}
          <div className="grid grid-cols-2 gap-4 my-6 not-prose">
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.08)" }}
            >
              <p className="text-[0.7rem] font-bold uppercase tracking-widest mb-1"
                style={{ color: "rgba(26,26,46,0.4)" }}>Explorer</p>
              <p className="text-3xl font-black text-[#1a1a2e] mb-0.5">Free</p>
              <p className="text-xs mb-4" style={{ color: "rgba(26,26,46,0.5)" }}>
                No card needed. Forever.
              </p>
              <ul className="text-xs space-y-1.5" style={{ color: "rgba(26,26,46,0.65)" }}>
                <li>50 messages / day</li>
                <li>Socratic study mode</li>
                <li>Hourman planning</li>
                <li>Riri email drafts</li>
                <li>Persistent memory</li>
              </ul>
            </div>
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#0d0c18", borderColor: "rgba(201,168,76,0.3)" }}
            >
              <p className="text-[0.7rem] font-bold uppercase tracking-widest mb-1"
                style={{ color: "#c9a84c" }}>Sovereign</p>
              <p className="text-3xl font-black mb-0.5" style={{ color: "#f5f0e8" }}>
                £12
                <span className="text-base font-normal"
                  style={{ color: "rgba(245,240,232,0.4)" }}> / mo</span>
              </p>
              <p className="text-xs mb-4" style={{ color: "rgba(245,240,232,0.4)" }}>
                Full sovereignty.
              </p>
              <ul className="text-xs space-y-1.5"
                style={{ color: "rgba(245,240,232,0.65)" }}>
                <li>Unlimited messages</li>
                <li>Deep subject memory</li>
                <li>Priority response</li>
                <li>All companion modes</li>
                <li>Everything in Explorer</li>
              </ul>
            </div>
          </div>

          <p>
            For most students Explorer covers everything. Sovereign is there for
            final-year and postgraduate students who are in their AI daily and
            need the full depth of persistent memory across a long research
            project.
          </p>

          {/* ── COMPARISON ── */}
          <h2>How is MEOK different from ChatGPT or Microsoft Copilot for students?</h2>
          <p>
            ChatGPT and Copilot are excellent answer engines. They satisfy the
            immediate request then forget you. MEOK is a companion: it remembers
            what you are studying, how you are feeling, and what you are working
            toward across weeks and months. It guides rather than answers, plans
            your week through Hourman, and treats your privacy as
            non-negotiable — not as a setting buried in a policy document.
          </p>
          <p>
            MEOK will not write your essay for you. That is a design decision,
            not a limitation. The goal is not output — it is a student who can
            produce output independently. That distinction is the difference
            between a degree that means something and a piece of paper obtained
            through delegation.
          </p>

          {/* ── RESOURCES ── */}
          <h2>Where can students find additional mental health support?</h2>
          <p>
            MEOK is a companion — not a crisis service and not a replacement for
            professional support. If you are struggling, please reach out to the
            services below.
          </p>

          <ul className="not-prose space-y-3 my-4 list-none p-0">
            <li>
              <a
                href="https://www.studentminds.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
                style={{ color: "#c9a84c" }}
              >
                Student Minds
              </a>
              <span style={{ color: "rgba(42,42,62,0.7)" }}>
                {" "}— the UK&apos;s student mental health charity. Research,
                peer support programmes, and a community that understands
                university life.
              </span>
            </li>
            <li>
              <strong>Your university counselling service</strong>
              <span style={{ color: "rgba(42,42,62,0.7)" }}>
                {" "}— every UK university is required to provide counselling
                support. If waiting lists are long, ask about same-day urgent
                appointments or wellbeing drop-ins.
              </span>
            </li>
            <li>
              <a
                href="https://www.samaritans.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
                style={{ color: "#c9a84c" }}
              >
                Samaritans
              </a>
              <span style={{ color: "rgba(42,42,62,0.7)" }}>
                {" "}— 116 123, free, 24 hours a day. For moments when you need
                to talk to a person, not an AI.
              </span>
            </li>
          </ul>

          <p>
            MEOK always signposts these resources when a conversation suggests
            they are relevant. A sovereign AI does not compete with professional
            support — it helps you find it.
          </p>
        </div>

        {/* Pull quote */}
        <div
          className="my-10 rounded-2xl p-8"
          style={{ background: "#0d0c18", borderLeft: "3px solid #c9a84c" }}
        >
          <p className="text-base leading-relaxed mb-4"
            style={{ color: "rgba(245,240,232,0.7)" }}>
            Every AI tool I tried before building MEOK treated me like a query.
            Here today, forgotten tomorrow, data harvested and sold. Students
            deserve better than that. They deserve an AI that actually knows
            them — and that they can trust with the things they&apos;d never
            want their university to read.
          </p>
          <p className="text-sm font-semibold mt-4"
            style={{ color: "rgba(245,240,232,0.35)" }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(26,26,46,0.4)" }}>Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-students&text=MEOK+for+Students%3A+Sovereign+AI+study+partner%2C+mental+health+support%2C+and+deadline+manager"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 transition-all"
            style={{ color: "rgba(26,26,46,0.6)" }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-students"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 transition-all"
            style={{ color: "rgba(26,26,46,0.6)" }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-10 relative overflow-hidden"
          style={{ background: "#0d0c18" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.8), transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}>
              Sovereign AI for Students
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Study smarter. Stress less. Start free.
            </h3>
            <p className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}>
              Socratic mode to guide your thinking. Hourman to plan your
              deadlines. Riri to draft those emails. Explorer is free — 50
              messages a day, no card required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/hatch"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "#c9a84c", color: "#0d0c18" }}
              >
                Hatch your AI free &#8594;
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all border"
                style={{
                  color: "rgba(245,240,232,0.7)",
                  borderColor: "rgba(245,240,232,0.15)",
                }}
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/ai-for-anxiety"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Mental Health
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                AI for Anxiety: A Companion That Supports Without Replacing Therapy
              </h3>
              <p className="text-xs mt-auto" style={{ color: "rgba(26,26,46,0.35)" }}>
                6 min read
              </p>
            </Link>
            <Link
              href="/blog/meok-for-adhd"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Neurodivergent
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for ADHD: An AI That Actually Understands How You Think
              </h3>
              <p className="text-xs mt-auto" style={{ color: "rgba(26,26,46,0.35)" }}>
                7 min read
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-12"
        style={{
          background: "#080714",
          borderTop: "1px solid rgba(245,240,232,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-8">
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-black text-lg tracking-wide"
              style={{ color: "#c9a84c" }}
            >
              MEOK
            </Link>
            <p className="text-xs leading-relaxed mt-2"
              style={{ color: "rgba(245,240,232,0.35)" }}>
              Sovereign AI companions that remember you, guide your thinking,
              and never sell your data. Built in the UK by MEOK AI LABS.
            </p>
          </div>
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[0.7rem] font-bold uppercase tracking-widest mb-1"
                style={{ color: "rgba(245,240,232,0.3)" }}>Product</p>
              {[
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/hatch", label: "Hatch free" },
              ].map(({ href, label }) => (
                <Link key={href} href={href}
                  className="text-xs hover:opacity-70 transition-opacity"
                  style={{ color: "rgba(245,240,232,0.45)" }}>
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[0.7rem] font-bold uppercase tracking-widest mb-1"
                style={{ color: "rgba(245,240,232,0.3)" }}>Company</p>
              {[
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/privacy", label: "Privacy" },
              ].map(({ href, label }) => (
                <Link key={href} href={href}
                  className="text-xs hover:opacity-70 transition-opacity"
                  style={{ color: "rgba(245,240,232,0.45)" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-8 pt-6 flex flex-wrap justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(245,240,232,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.2)" }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.2)" }}>
            MEOK is not a medical service. In crisis?{" "}
            <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer"
              style={{ color: "rgba(245,240,232,0.4)" }}>
              Samaritans
            </a>{" "}
            116 123 — free, 24/7.
          </p>
        </div>
      </footer>
    </div>
  );
}
