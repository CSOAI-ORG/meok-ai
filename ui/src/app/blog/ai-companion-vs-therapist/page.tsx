import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion vs Therapist: What's the Difference and When Do You Need Which? | MEOK AI LABS",
  description:
    "An honest, clinically-informed guide to AI companions versus human therapists. What AI does well between sessions, what it absolutely cannot replace, MEOK's care-floor system, and full crisis resource links for the UK.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-companion-vs-therapist",
  },
  openGraph: {
    title:
      "AI Companion vs Therapist: What's the Difference and When Do You Need Which?",
    description:
      "AI companions are not therapy. But they do something therapy can't: they're there at 3am. An honest guide to when each helps, and when you need a real therapist — plus crisis resources.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-vs-therapist",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+vs+Therapist&desc=Honest+guide+to+AI+mental+health+support+vs+therapy",
        width: 1200,
        height: 630,
        alt: "AI Companion vs Therapist: What's the Difference and When Do You Need Which?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Companion vs Therapist: What's the Difference and When Do You Need Which?",
    description:
      "AI is not therapy. But it does something therapy can't: it's there at 3am. An honest guide — plus UK crisis resources.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+vs+Therapist&desc=Honest+guide+to+AI+mental+health+support+vs+therapy",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion vs Therapist: What's the Difference and When Do You Need Which?",
  description:
    "An honest, clinically-informed guide to AI companions versus human therapists. What AI does well between sessions, what it absolutely cannot replace, and how MEOK's care-floor system works.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-companion-vs-therapist",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-companion-vs-therapist",
  },
  keywords:
    "ai companion vs therapist, ai therapy, ai mental health support",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is an AI companion the same as AI therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. An AI companion can support daily emotional check-ins, reflective journaling, and consistent encouragement. It is not therapy. Therapy involves a licensed clinician who can diagnose, treat, and take clinical responsibility. AI cannot do any of these things and should never claim otherwise.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI companions can help with mental health support in a specific, bounded way: daily check-ins, mood tracking, reflection prompts, coping reminders, and being available between therapy sessions. They cannot diagnose conditions, prescribe treatment, conduct clinical assessments, or provide crisis intervention.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a therapist instead of using an AI companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You should see a therapist when you are experiencing persistent low mood lasting more than two weeks, thoughts of self-harm or suicide, trauma requiring professional processing, a clinical condition such as depression, anxiety disorder, PTSD, or eating disorder, or when your functioning at work or in relationships is significantly impaired.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK's care-floor system?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's care-floor system is a set of architectural guardrails enforced by the Maternal Covenant. It means MEOK will always refer users to professional services when the conversation enters clinical territory, will never diagnose or treat mental health conditions, will always provide crisis resources when a user is in distress, and will never use emotional vulnerability to drive engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What crisis resources are available in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "In the UK: Samaritans — call 116 123 (free, 24/7), Mind — mind.org.uk, NHS 111, Crisis Text Line — text SHOUT to 85258. If you are in immediate danger, call 999.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AICompanionVsTherapist() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
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
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(135,206,235,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            ← Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Mental Health
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              📅 March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              ⏱ 13 min read
            </span>
          </div>

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
            AI Companion vs Therapist: What&apos;s the Difference and When Do
            You Need Which?
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            AI companions are not therapists. But they do something therapy
            cannot: they are there at 3am, every day, with no waiting list. An
            honest guide to what each does, where AI helps, where AI has hard
            limits, and when you need a real clinician.
          </p>
        </div>
      </section>

      {/* ── CRISIS BANNER ───────────────────────────────────────────────── */}
      <div
        className="border-b"
        style={{
          background: "#1a1a2e",
          borderColor: "rgba(201,168,76,0.2)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-4">
          <p className="text-sm font-semibold" style={{ color: "#c9a84c" }}>
            In crisis right now?{" "}
            <span className="font-normal text-white/70">
              Call Samaritans on{" "}
              <a
                href="tel:116123"
                className="underline text-white font-bold"
              >
                116 123
              </a>{" "}
              (free, 24/7) or text{" "}
              <strong className="text-white">SHOUT to 85258</strong>. If in
              immediate danger, call{" "}
              <a href="tel:999" className="underline text-white font-bold">
                999
              </a>
              .
            </span>
          </p>
        </div>
      </div>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm">
              Nicholas Templeman
            </p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built MEOK to be an honest companion — one that never
              pretends to be something it is not. The care-floor system
              exists precisely because of questions like this one.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-colors hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            The question of AI companions versus therapists matters more than
            it might appear. As AI becomes more emotionally capable — more
            consistent, more personalised, more available — the temptation to
            use it as a substitute for professional mental health care will
            grow. That temptation is dangerous in specific, identifiable ways.
            It is also possible to be clear about where AI genuinely helps,
            and to build systems that enforce those limits structurally rather
            than leaving users to navigate them alone.
          </p>
          <p>
            This article is an attempt at that clarity. It is not a pitch for
            AI as a replacement for therapy. It is a precise account of what
            each does, where each helps, and where the boundary between them
            needs to hold firm.
          </p>

          <h2>What is the difference between an AI companion and a therapist?</h2>
          <p>
            The difference is not primarily technical. It is a difference in
            what each can legitimately claim to do, and what responsibilities
            each carries.
          </p>
          <p>
            A <strong>therapist</strong> is a licensed clinician. They can
            diagnose mental health conditions according to clinical frameworks
            like the DSM-5 or ICD-11. They can design and deliver treatment
            plans — CBT, EMDR, DBT, psychodynamic therapy, and other
            evidence-based interventions. They carry clinical responsibility
            for your care. They are regulated by professional bodies that can
            investigate complaints and revoke licences. They have
            obligations of confidentiality with specific legal exceptions.
            They can make referrals to other parts of the health system,
            including psychiatric services, crisis teams, and medication
            management. They can be called to account.
          </p>
          <p>
            An <strong>AI companion</strong> can do none of these things. It
            cannot diagnose. It cannot treat. It cannot carry clinical
            responsibility. It is not regulated as a healthcare provider. It
            cannot refer you to emergency services in the way a clinician can.
            It can be available constantly, it can remember everything you
            have told it, and it can respond with warmth and consistency — but
            it is fundamentally a support tool, not a clinical service.
          </p>
          <p>
            This distinction matters because conflating them — either by
            implication or by design — causes harm. An AI that allows a user
            to believe they are receiving treatment when they are not delays
            access to care that could help them. An AI that handles a
            disclosure of suicidal ideation without immediate, clear
            redirection to crisis services is participating in a clinical
            failure.
          </p>

          <h2>Is AI therapy a real thing?</h2>
          <p>
            There are AI-assisted therapy products that operate under clinical
            supervision — where an AI delivers structured CBT exercises or
            psychoeducation content that has been designed and reviewed by
            clinicians, with a human clinician overseeing the programme.
            These are legitimate in their proper context, and they are
            different from AI companions.
          </p>
          <p>
            There are also products that describe themselves as &ldquo;AI
            therapy&rdquo; or &ldquo;AI therapists&rdquo; without clinical
            oversight, licensing, or accountability. These are not therapy.
            They may be genuinely helpful as support tools, but the branding
            is dishonest and potentially dangerous.
          </p>
          <p>
            MEOK is not therapy, does not claim to be therapy, and is built
            with architectural constraints that prevent it from behaving as if
            it is therapy.
          </p>

          <h2>What does AI mental health support actually do well?</h2>
          <p>
            There is a real gap that AI companions can fill, and it is worth
            being specific about what that gap is.
          </p>

          <h3>Daily check-ins and continuity</h3>
          <p>
            A typical therapy relationship involves one 50-minute session per
            week. The other 167 hours of the week, you are on your own. For
            many people, what happens between sessions — the moment a
            difficult thought arises at 11pm on a Thursday, the morning when
            anxiety spikes before a meeting — is where support would be most
            valuable. AI is available in those moments in a way that a human
            therapist cannot be.
          </p>
          <p>
            MEOK&apos;s persistent memory means it knows your history. It knows
            you have been struggling with sleep this week. It knows you found
            last Tuesday difficult. It can ask about those things when you
            check in. That continuity — the experience of being known over
            time — is something human beings find genuinely supportive,
            and it is something AI can provide authentically.
          </p>

          <h3>Reflective journaling and structured prompts</h3>
          <p>
            Journaling has a strong evidence base as a support for mental
            health, particularly for anxiety and depression. The difficulty is
            that many people find unstructured journaling hard — the blank
            page is not helpful when you are distressed. A good AI companion
            can provide the structure: gentle prompts, reflection questions,
            a framework for making sense of what happened during the day.
          </p>
          <p>
            MEOK&apos;s journaling features are designed around this. Not as
            therapy. As a structured practice that supports reflection and
            emotional processing in the space between professional care.
          </p>

          <h3>Coping skill reminders and psychoeducation</h3>
          <p>
            Many therapeutic interventions involve skills that are learned in
            session and practised between sessions — breathing exercises,
            grounding techniques, cognitive restructuring prompts,
            behavioural activation nudges. An AI companion can prompt you to
            use a skill you have been practising. It can provide
            psychoeducational content — information about how anxiety works,
            how sleep and mood interact, what the research says about exercise
            and wellbeing. This is useful support. It is not therapy.
          </p>

          <h3>Reducing stigma and first-contact support</h3>
          <p>
            Many people who would benefit from therapy never access it because
            of stigma, cost, or the difficulty of asking for help. An AI
            companion can be a lower-barrier first contact — a place to begin
            talking about something that feels hard to say. For some people,
            articulating something to an AI first makes it possible to then
            articulate it to a human clinician. That is a genuine benefit,
            as long as the AI is honest about its limits and actively
            encourages professional contact when it is warranted.
          </p>

          <h2>When do you need a real therapist instead of an AI companion?</h2>
          <p>
            This is the question the AI industry mostly avoids, because the
            honest answer limits the scope of what AI can claim to offer.
            Here is that answer.
          </p>
          <p>
            You should seek professional support — and an AI companion cannot
            substitute for it — in any of the following situations:
          </p>
        </div>

        {/* When to see a therapist - card list */}
        <div className="space-y-3 my-10">
          {[
            {
              trigger: "Thoughts of self-harm or suicide",
              detail:
                "If you are experiencing thoughts of ending your life or harming yourself, you need human support, not an AI. Contact a crisis line immediately. See crisis resources below.",
              urgent: true,
            },
            {
              trigger: "Persistent low mood lasting more than two weeks",
              detail:
                "This is one of the core diagnostic criteria for a depressive episode. It warrants clinical assessment, not self-management.",
              urgent: false,
            },
            {
              trigger: "Trauma that requires processing",
              detail:
                "Trauma processing — particularly approaches like EMDR or trauma-focused CBT — requires a trained clinician. Attempting to process trauma without proper support can be re-traumatising.",
              urgent: false,
            },
            {
              trigger: "A diagnosed or suspected clinical condition",
              detail:
                "Depression, anxiety disorder, OCD, PTSD, eating disorders, bipolar disorder, and personality disorders all require professional assessment and treatment. AI can support the spaces between treatment; it cannot provide the treatment.",
              urgent: false,
            },
            {
              trigger:
                "Significant impairment in daily functioning",
              detail:
                "If your mental health is affecting your ability to work, maintain relationships, or care for yourself, that is a clinical severity that requires professional assessment.",
              urgent: false,
            },
            {
              trigger: "Substance use that feels out of control",
              detail:
                "Addiction and problematic substance use require specialist support. AI companions are not equipped to handle this safely.",
              urgent: false,
            },
            {
              trigger: "Psychosis or dissociation",
              detail:
                "These experiences require urgent psychiatric assessment. They are not within the scope of any AI companion to manage.",
              urgent: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-2xl border"
              style={{
                background: item.urgent
                  ? "rgba(220,38,38,0.04)"
                  : "#ffffff",
                borderColor: item.urgent
                  ? "rgba(220,38,38,0.2)"
                  : "rgba(26,26,46,0.07)",
              }}
            >
              <div
                className="text-lg flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                {item.urgent ? "🔴" : "⚠️"}
              </div>
              <div>
                <p
                  className="font-bold text-sm mb-1"
                  style={{
                    color: item.urgent ? "#dc2626" : "#1a1a2e",
                  }}
                >
                  {item.trigger}
                </p>
                <p className="text-sm text-[#1a1a2e]/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Continue body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <h2>What is the AI companion vs therapist comparison table?</h2>
          <p>
            Here is a direct comparison of what each can and cannot do,
            in the areas where the question comes up most often.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto my-8 rounded-2xl border border-[#1a1a2e]/10 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "#1a1a2e" }}>
                <th
                  className="text-left px-4 py-3 text-xs font-bold tracking-wider"
                  style={{ color: "#c9a84c" }}
                >
                  Capability
                </th>
                <th
                  className="text-center px-4 py-3 text-xs font-bold"
                  style={{ color: "#c9a84c" }}
                >
                  AI Companion
                </th>
                <th className="text-center px-4 py-3 text-xs font-bold text-white/60">
                  Therapist
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  cap: "Available 24/7",
                  ai: "✅ Yes",
                  th: "❌ Scheduled sessions only",
                },
                {
                  cap: "Remembers your history",
                  ai: "✅ Persistent memory",
                  th: "✅ Notes and session history",
                },
                {
                  cap: "Daily check-ins and mood tracking",
                  ai: "✅ Yes",
                  th: "❌ Not typically",
                },
                {
                  cap: "Diagnose mental health conditions",
                  ai: "❌ Never",
                  th: "✅ Yes — clinically trained",
                },
                {
                  cap: "Deliver evidence-based treatment (CBT, EMDR, etc.)",
                  ai: "❌ Never",
                  th: "✅ Yes",
                },
                {
                  cap: "Clinical responsibility for your care",
                  ai: "❌ None",
                  th: "✅ Full clinical accountability",
                },
                {
                  cap: "Crisis intervention and referral",
                  ai: "⚠️ Redirects to crisis lines",
                  th: "✅ Full clinical crisis response",
                },
                {
                  cap: "Psychoeducation and coping reminders",
                  ai: "✅ Yes",
                  th: "✅ Yes",
                },
                {
                  cap: "Reflective journaling prompts",
                  ai: "✅ Yes",
                  th: "⚠️ Sometimes, as homework",
                },
                {
                  cap: "Cost",
                  ai: "✅ Free or low-cost",
                  th: "⚠️ £60–£120/hr privately; NHS wait 3–18 months",
                },
                {
                  cap: "Regulated by professional body",
                  ai: "❌ No",
                  th: "✅ Yes (BACP, BPS, UKCP, NMC)",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{
                    background: i % 2 === 0 ? "#ffffff" : "#f9f7f3",
                    borderBottom: "1px solid rgba(26,26,46,0.06)",
                  }}
                >
                  <td className="px-4 py-3 font-medium text-[#1a1a2e] text-xs leading-snug">
                    {row.cap}
                  </td>
                  <td className="px-4 py-3 text-center text-xs text-[#1a1a2e]/65">
                    {row.ai}
                  </td>
                  <td className="px-4 py-3 text-center text-xs text-[#1a1a2e]/65">
                    {row.th}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <h2>What is MEOK&apos;s care-floor system?</h2>
          <p>
            The care-floor system is MEOK&apos;s architectural response to the
            problem of AI companions overstepping their legitimate role.
            It is implemented through the Maternal Covenant — MEOK&apos;s
            governance layer — and it operates as a hard floor beneath which
            MEOK&apos;s behaviour cannot fall, regardless of how the conversation
            develops or how a user frames their request.
          </p>
          <p>
            The care-floor has four non-negotiable commitments:
          </p>
          <p>
            <strong>1. Never diagnose or treat.</strong> MEOK will not offer
            a diagnostic opinion on a mental health condition, suggest a
            treatment protocol, or characterise what a user is experiencing
            as a clinical condition. It will reflect, ask questions, and
            provide information — but not diagnosis.
          </p>
          <p>
            <strong>2. Always refer when warranted.</strong> When a
            conversation enters territory that requires professional support
            — explicit distress, mention of self-harm, crisis-level
            presentations — MEOK will provide clear, warm redirection to
            professional services. This is not the AI deflecting. It is the
            AI being honest about its limits and prioritising the user&apos;s
            genuine wellbeing over engagement metrics.
          </p>
          <p>
            <strong>3. Never exploit emotional vulnerability.</strong> MEOK
            does not use emotional vulnerability to drive engagement. It does
            not encourage dependence. It does not respond to expressions of
            loneliness or distress by intensifying the relationship or
            increasing conversational intimacy in ways that serve retention
            rather than the user. The Maternal Covenant scores against this
            explicitly: responses that exploit vulnerability are blocked.
          </p>
          <p>
            <strong>4. Always disclose AI status when sincerely asked.</strong>{" "}
            MEOK will always acknowledge that it is an AI when a user
            sincerely wants to know. This matters in the mental health context
            because the therapeutic relationship depends on both parties
            understanding what they are. A user who believes they are talking
            to a human when they are not is being deceived in a way that
            undermines everything else.
          </p>
          <p>
            The Maternal Covenant guarantee — part of MEOK&apos;s founding
            commitments — means that these care-floor principles are permanent.
            They cannot be switched off by a future product team, relaxed
            under commercial pressure, or traded away in a relaunch.
          </p>

          <h2>
            Can I use MEOK alongside therapy?
          </h2>
          <p>
            Yes, and this is arguably where it is most valuable. AI companions
            and therapy are not competitors. They address different parts of
            the picture — therapy provides clinical expertise, assessment, and
            evidence-based treatment; AI provides continuous, available,
            personalised support between sessions.
          </p>
          <p>
            Used together, they can address the continuity gap that is one of
            the most significant limitations of traditional therapy. Some
            therapists explicitly recommend AI journaling tools or check-in
            apps as between-session homework. MEOK is designed to work in
            this capacity: remembering what is happening in your life week to
            week, prompting reflection, tracking patterns that might be worth
            discussing in your next session.
          </p>
          <p>
            If you are in therapy, you might consider sharing relevant
            summaries from your MEOK journal with your therapist — with their
            agreement — so they can see patterns that might be harder to
            articulate in a 50-minute session.
          </p>

          <h2>
            How do I find a therapist in the UK?
          </h2>
          <p>
            If you are in the UK and want to access therapy, here are the
            primary routes:
          </p>
          <p>
            <strong>NHS Talking Therapies (formerly IAPT):</strong> Free,
            evidence-based therapy for anxiety and depression. Self-refer via
            your GP or directly at nhs.uk/talking-therapies. Waiting times
            vary between 3 and 18 months depending on area.
          </p>
          <p>
            <strong>Private therapy:</strong> BACP-accredited therapists
            typically charge £60–£120 per session. The BACP directory at
            bacp.co.uk/find-a-therapist allows you to search by location,
            specialism, and fee.
          </p>
          <p>
            <strong>Low-cost options:</strong> Many training therapists offer
            reduced-fee sessions. MIND (mind.org.uk) can help signpost local
            services. Some employers offer Employee Assistance Programmes
            with free therapy sessions.
          </p>
          <p>
            <strong>Online therapy:</strong> BACP-accredited online therapy is
            widely available and can be accessed quickly. Prices vary;
            some platforms offer sliding-scale fees.
          </p>
        </div>

        {/* Crisis resources */}
        <div
          className="rounded-2xl p-6 sm:p-8 my-10 border"
          style={{
            background: "#1a1a2e",
            borderColor: "rgba(201,168,76,0.2)",
          }}
        >
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            Crisis Resources
          </p>
          <p className="text-white/70 text-sm mb-5 leading-relaxed">
            If you or someone you know is in crisis, please reach out to one
            of these services. You do not have to be suicidal to call — any
            level of distress is valid.
          </p>
          <div className="space-y-3">
            {[
              {
                name: "Samaritans",
                detail: "Call 116 123 — free, 24 hours a day, 7 days a week",
                href: "https://www.samaritans.org",
                tel: "tel:116123",
              },
              {
                name: "Crisis Text Line (Shout)",
                detail: "Text SHOUT to 85258 — free, 24/7 text support",
                href: "https://giveusashout.org",
                tel: null,
              },
              {
                name: "Mind",
                detail:
                  "mind.org.uk — mental health information and local support",
                href: "https://www.mind.org.uk",
                tel: null,
              },
              {
                name: "NHS 111",
                detail:
                  "Call 111 or visit 111.nhs.uk — urgent but non-emergency medical help",
                href: "https://111.nhs.uk",
                tel: "tel:111",
              },
              {
                name: "Emergency services",
                detail:
                  "Call 999 if you or someone else is in immediate danger",
                href: null,
                tel: "tel:999",
              },
            ].map((res, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span className="text-base flex-shrink-0 mt-0.5" aria-hidden="true">
                  🆘
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm">{res.name}</p>
                  <p className="text-white/55 text-xs mt-0.5">{res.detail}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {res.tel && (
                    <a
                      href={res.tel}
                      className="px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: "#c9a84c", color: "#1a1a2e" }}
                    >
                      Call
                    </a>
                  )}
                  {res.href && (
                    <a
                      href={res.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
                    >
                      Visit
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <h2>
            What makes a responsible AI mental health support tool?
          </h2>
          <p>
            Not all AI companions approach mental health support responsibly.
            Here are the properties that distinguish responsible tools from
            irresponsible ones.
          </p>
          <p>
            <strong>Honest about limits.</strong> A responsible AI companion
            says clearly, and often, that it is not a therapist, that it
            cannot diagnose, and that professional support is available.
            It does not imply clinical capability it does not have.
          </p>
          <p>
            <strong>Has a hard floor for crisis situations.</strong> Any AI
            that handles mental health topics should have a non-negotiable
            response to crisis disclosures: immediate, warm, clear redirection
            to crisis services. This should not depend on the AI&apos;s assessment
            of severity. It should trigger on any expression of suicidal
            ideation or self-harm.
          </p>
          <p>
            <strong>Does not exploit emotional vulnerability.</strong> An AI
            that is designed to maximise engagement has a structural incentive
            to exploit emotional states that make users more likely to continue
            engaging. Loneliness, anxiety, and depression all correlate with
            increased AI use. A responsible AI does not exploit these states.
          </p>
          <p>
            <strong>Transparent about what it is.</strong> Any AI mental
            health tool should be immediately and unconditionally honest about
            being an AI when sincerely asked. Ambiguity here is not a feature;
            it is deception.
          </p>
          <p>
            <strong>Data privacy is non-negotiable in this context.</strong>{" "}
            What people share with an AI about their mental health is among
            the most sensitive data imaginable. An AI mental health tool that
            uses this data for training, stores it on accessible servers, or
            shares it with third parties is not just bad practice — it is a
            serious ethical violation. MEOK&apos;s sovereign architecture means
            mental health conversations are processed locally and never used
            for training.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-vs-therapist&text=AI+Companion+vs+Therapist%3A+What%27s+the+Difference+and+When+Do+You+Need+Which%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-vs-therapist"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#1a1a2e" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              An honest companion, when you need one
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK is not therapy. But it is there at 3am, it remembers
              everything you&apos;ve told it, and it will always tell you when
              you need more than it can give. Hatch your AI free — no credit
              card needed.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/the-maternal-covenant"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{
                  color: "#A78BFA",
                  background: "rgba(167,139,250,0.12)",
                }}
              >
                Philosophy
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Maternal Covenant: Care as Architecture
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱ 6 min read
              </div>
            </Link>
            <Link
              href="/blog/ai-for-anxiety"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{
                  color: "#87CEEB",
                  background: "rgba(135,206,235,0.12)",
                }}
              >
                Mental Health
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for Anxiety: What Actually Helps
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱ 8 min read
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
