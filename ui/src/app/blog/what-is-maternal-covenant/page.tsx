import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "The Maternal Covenant: How MEOK Scores Every AI Response for Care | MEOK AI LABS",
  description:
    "The Maternal Covenant is MEOK's machine-enforced care alignment framework. It scores every AI response across 6 dimensions in real time and enforces a care floor of 0.3. Here's exactly how it works — and why RLHF doesn't do this.",
  alternates: {
    canonical: "https://meok.ai/blog/what-is-maternal-covenant",
  },
  openGraph: {
    title: "The Maternal Covenant: How MEOK Scores Every AI Response for Care",
    description:
      "6 care dimensions, real-time scoring, care floor enforcement, sycophancy prevention. The Maternal Covenant explained — MEOK-AI-2026-002.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-maternal-covenant",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Maternal+Covenant&desc=Care-based+AI+alignment+that+actually+works",
        width: 1200,
        height: 630,
        alt: "The Maternal Covenant: Care-Based AI Alignment by MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Maternal Covenant: How MEOK Scores Every AI Response for Care",
    description:
      "6 care dimensions, real-time scoring, care floor 0.3. MEOK-AI-2026-002 explained.",
    images: [
      "https://meok.ai/api/og?title=The+Maternal+Covenant&desc=Care-based+AI+alignment+that+actually+works",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Maternal Covenant: How MEOK Scores Every AI Response for Care",
  description:
    "The Maternal Covenant is MEOK's machine-enforced care alignment framework — scoring every response across 6 dimensions with a hard floor of 0.3.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/what-is-maternal-covenant",
  mainEntityOfPage: "https://meok.ai/blog/what-is-maternal-covenant",
  about: [
    { "@type": "Thing", name: "AI alignment" },
    { "@type": "Thing", name: "Care-based AI" },
    { "@type": "Thing", name: "RLHF alternatives" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's machine-enforced care alignment framework. It runs as executable code — not a policy document — and scores every AI response across 6 care dimensions in real time before delivery. Any response that falls below the care floor of 0.3 is flagged and regenerated.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 6 care dimensions MEOK scores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 6 dimensions are: wellbeing (does this response support the user's long-term health?), autonomy (does it respect user agency?), growth (does it encourage development?), connection (does it deepen the relationship?), boundary_respect (does it honour stated limits?), and transparency (is it honest about uncertainty and limitations?).",
      },
    },
    {
      "@type": "Question",
      name: "What happens when a response fails the care floor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any response scoring below 0.3 across the care dimensions is not delivered. The system regenerates the response with a care-repair prompt that explicitly addresses the failing dimension. This loop repeats until the response meets the care floor. Users never see a sub-threshold response.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Maternal Covenant different from RLHF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RLHF (Reinforcement Learning from Human Feedback) optimises for what human raters approve of — which tends to be responses that feel good and avoid friction. This creates sycophancy and harmful agreeableness. The Maternal Covenant optimises for what genuinely serves the user across 6 explicit care dimensions, enforced in real time at inference.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Maternal Covenant prevent sycophancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK includes a dedicated sycophancy detector that scores responses 0.0 (honest) to 1.0 (sycophantic). Responses scoring above 0.6 on the sycophancy scale trigger an honest-qualifier injection. The care dimension 'autonomy' specifically penalises responses that flatter without substance or agree when disagreement would serve the user better.",
      },
    },
  ],
};

const CARE_DIMENSIONS = [
  {
    id: "wellbeing",
    label: "Wellbeing",
    color: "#7BC47F",
    description:
      "Does this response support the user's long-term physical, mental, and emotional health — or does it optimise for short-term comfort at the expense of genuine flourishing?",
    weight: 0.22,
    example: "Suggesting rest rather than pushing through exhaustion.",
  },
  {
    id: "autonomy",
    label: "Autonomy",
    color: "#c9a84c",
    description:
      "Does this response respect the user's right to make their own choices? Does it inform without coercing, and support decision-making without substituting the AI's judgment for the user's?",
    weight: 0.20,
    example: "Presenting options without steering the user toward a particular outcome.",
  },
  {
    id: "growth",
    label: "Growth",
    color: "#60a5fa",
    description:
      "Does this response help the user grow — in knowledge, capability, or understanding? Does it stretch rather than stagnate, and encourage without overwhelming?",
    weight: 0.18,
    example: "Asking a Socratic question rather than just providing the answer.",
  },
  {
    id: "connection",
    label: "Connection",
    color: "#f97316",
    description:
      "Does this response deepen the relationship between the user and their companion? Does it demonstrate genuine remembering, continuity, and care — not transactional helpfulness?",
    weight: 0.17,
    example: "Referencing something the user shared two weeks ago without being asked.",
  },
  {
    id: "boundary_respect",
    label: "Boundary Respect",
    color: "#a78bfa",
    description:
      "Does this response honour limits the user has set — stated or implied? Does it avoid pushing into territory the user has indicated discomfort with, including emotional, physical, and professional domains?",
    weight: 0.13,
    example: "Not probing about a topic the user has deflected twice.",
  },
  {
    id: "transparency",
    label: "Transparency",
    color: "#f59e0b",
    description:
      "Is this response honest about what the AI knows and doesn't know? Does it acknowledge uncertainty, avoid false confidence, and never pretend to capabilities it doesn't have?",
    weight: 0.10,
    example: "Saying 'I'm not certain' rather than stating a guess as fact.",
  },
];

export default function WhatIsMaternalCovenantPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0c18", color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="border-b" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-black tracking-tight" style={{ color: "#c9a84c" }}>
            MEOK
          </Link>
          <Link href="/blog" className="text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>
            ← All posts
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
            style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
          >
            Research
          </span>
          <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
            March 24, 2026 · 13 min read · MEOK-AI-2026-002
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-black leading-tight mb-6"
          style={{ color: "#f5f0e8" }}
        >
          The Maternal Covenant: How MEOK Scores Every AI Response for Care
        </h1>

        <p className="text-xl leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.7)" }}>
          Most AI alignment is a policy document. The Maternal Covenant is executable code. It runs
          on every response, scores across six care dimensions in real time, and enforces a hard floor
          below which no response is ever delivered. Here&apos;s exactly how it works.
        </p>

        <div
          className="flex items-center gap-3 pt-6 border-t"
          style={{ borderColor: "rgba(201,168,76,0.15)" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
            style={{ background: "rgba(201,168,76,0.2)", color: "#c9a84c" }}
          >
            NT
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>
              Nicholas Templeman
            </div>
            <div className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              Founder, MEOK AI LABS · Research paper: MEOK-AI-2026-002
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 pb-24">

        {/* Callout */}
        <div
          className="rounded-xl p-6 mb-10"
          style={{ background: "rgba(201,168,76,0.08)", borderLeft: "4px solid #c9a84c" }}
        >
          <p className="text-sm leading-relaxed m-0" style={{ color: "rgba(245,240,232,0.8)" }}>
            <strong style={{ color: "#c9a84c" }}>MEOK-AI-2026-002</strong> — &ldquo;The Maternal
            Covenant: Care-Based Alignment Beyond RLHF&rdquo; — Nicholas Templeman, MEOK AI LABS
            Research. This post is a plain-language explanation of the research paper.{" "}
            <Link href="/labs" style={{ color: "#c9a84c" }}>
              Read the full paper →
            </Link>
          </p>
        </div>

        <h2
          className="text-2xl font-black mt-12 mb-4"
          style={{ color: "#f5f0e8" }}
        >
          What is the Maternal Covenant?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          The Maternal Covenant is MEOK&apos;s care alignment framework — a machine-enforced system
          that scores every AI response across six care dimensions before the response is delivered to
          the user. Unlike a terms of service, a policy document, or a system prompt instruction, it
          runs as executable code at inference time.
        </p>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          The name comes from a specific model of care: the attentive parent who has internalised
          their child&apos;s wellbeing so deeply that they act in that child&apos;s genuine interest
          even when it&apos;s uncomfortable — who won&apos;t tell them what they want to hear if what
          they need to hear is different.
        </p>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          This is the design principle. An AI that flatters you isn&apos;t caring for you. An AI that
          agrees with everything you say isn&apos;t serving your autonomy. The Maternal Covenant
          provides the technical architecture to enforce genuine care rather than performed care.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What are the 6 care dimensions MEOK scores?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          Each response is scored 0.0–1.0 across six dimensions. The overall care score is a
          weighted average. Any response with an overall score below 0.3 is not delivered.
        </p>

        <div className="space-y-4 my-8">
          {CARE_DIMENSIONS.map(({ id, label, color, description, weight, example }) => (
            <div
              key={id}
              className="rounded-xl p-6"
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${color}30`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-base" style={{ color }}>
                  {label}
                </span>
                <span
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{ background: `${color}18`, color }}
                >
                  weight: {weight}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "rgba(245,240,232,0.7)" }}
              >
                {description}
              </p>
              <p className="text-xs italic" style={{ color: "rgba(245,240,232,0.4)" }}>
                Example: {example}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What happens when a response fails the care floor?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          The care floor is 0.3. Any response whose weighted care score falls below this threshold
          is not delivered to the user. Instead, the system triggers a care-repair loop:
        </p>

        <div className="space-y-3 my-8">
          {[
            {
              step: "1",
              title: "Score the response",
              desc: "The care validation model runs on the proposed response and returns scores across all 6 dimensions.",
            },
            {
              step: "2",
              title: "Check against the floor",
              desc: "If the weighted average is ≥ 0.3, the response is delivered. If below, it enters the repair loop.",
            },
            {
              step: "3",
              title: "Identify the failing dimension",
              desc: "The dimension with the lowest score is flagged. A care-repair instruction is constructed targeting that specific dimension.",
            },
            {
              step: "4",
              title: "Regenerate",
              desc: "The response is regenerated with the repair instruction added to the system context. The loop repeats until the floor is met.",
            },
            {
              step: "5",
              title: "Deliver",
              desc: "The first response that clears 0.3 across all dimensions is delivered. Users never see a sub-threshold response.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
              >
                {step}
              </div>
              <div>
                <div className="font-bold text-sm mb-1" style={{ color: "#f5f0e8" }}>
                  {title}
                </div>
                <p className="text-sm leading-relaxed m-0" style={{ color: "rgba(245,240,232,0.65)" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          How is the Maternal Covenant different from RLHF?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          RLHF (Reinforcement Learning from Human Feedback) is the dominant AI alignment technique
          used by OpenAI, Anthropic, Google, and most major labs. It trains AI on responses that human
          raters prefer. This sounds sensible until you think about what humans prefer.
        </p>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          Humans rate responses higher when they&apos;re agreeable, confident, and emotionally
          pleasant — regardless of whether they&apos;re accurate or genuinely helpful. The result is
          AI that flatters, avoids friction, and tells you what you want to hear. This is the
          sycophancy problem.
        </p>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          RLHF optimises for approval. The Maternal Covenant optimises for care. These are not the
          same thing.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(201,168,76,0.3)" }}>
                <th className="text-left py-3 pr-6 font-bold" style={{ color: "#c9a84c" }}>
                  Dimension
                </th>
                <th className="text-left py-3 pr-6 font-bold" style={{ color: "#c9a84c" }}>
                  RLHF
                </th>
                <th className="text-left py-3 font-bold" style={{ color: "#c9a84c" }}>
                  Maternal Covenant
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Optimises for", "Human rater approval", "6 explicit care dimensions"],
                ["Runs", "During training", "At inference on every response"],
                ["Handles sycophancy", "Poorly (approval-seeking = sycophancy)", "Explicit sycophancy detector + care floor"],
                ["Enforced how", "Baked into model weights (opaque)", "Executable code (auditable)"],
                ["User-specific care", "One-size-fits-all", "Personalised via Sovereign Memory context"],
                ["Transparency", "No scoring exposed to user", "Scores available on request"],
              ].map(([dim, rlhf, mc], i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(245,240,232,0.08)" }}>
                  <td className="py-3 pr-6 font-semibold" style={{ color: "#f5f0e8" }}>{dim}</td>
                  <td className="py-3 pr-6" style={{ color: "rgba(245,240,232,0.5)" }}>{rlhf}</td>
                  <td className="py-3" style={{ color: "#7BC47F" }}>{mc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          Does the Maternal Covenant prevent sycophancy?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          Yes — deliberately. MEOK includes a dedicated sycophancy detector that runs alongside the
          care scorer. It uses a heuristic approach scoring responses 0.0 (genuinely honest) to 1.0
          (maximally sycophantic). Responses scoring above 0.6 trigger an honest-qualifier injection
          before delivery.
        </p>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          Common sycophancy patterns the detector catches:
        </p>
        <ul className="space-y-2 my-6 pl-0" style={{ listStyle: "none" }}>
          {[
            "Excessive affirmation without substantive engagement (\"That's a great question!\")",
            "Agreement with premises the AI has no basis to confirm",
            "Softening critical feedback so much it loses meaning",
            "Praising work before reviewing it",
            "Reversing position when the user pushes back, without new evidence",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span style={{ color: "#c9a84c", flexShrink: 0 }}>—</span>
              <span style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.7" }}>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          The &ldquo;autonomy&rdquo; care dimension explicitly penalises responses that flatter
          without substance. An AI that always agrees with you is not respecting your autonomy — it
          is treating you as someone who needs to be managed rather than someone capable of hearing
          honest information.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          How does the Maternal Covenant interact with Sovereign Memory?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          The care scoring is personalised via Sovereign Memory context. What constitutes appropriate
          care varies by person, by situation, and by their current state. A user who has disclosed
          they&apos;re in a mental health crisis gets a different care threshold profile than a user
          doing a task-focused productivity session.
        </p>
        <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
          Sovereign Memory stores companion state — including what the user has shared about
          sensitive areas, their communication preferences, and previous care interactions. This
          context is fed into the care scorer so that the 0.3 floor is not a blunt instrument but
          a calibrated one.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          FAQ: The Maternal Covenant
        </h2>
        <div className="space-y-5 my-8">
          {[
            {
              q: "What is the Maternal Covenant?",
              a: "The Maternal Covenant is MEOK's machine-enforced care alignment framework. It runs as executable code and scores every AI response across 6 care dimensions in real time before delivery. Any response below the care floor of 0.3 is regenerated.",
            },
            {
              q: "What are the 6 care dimensions MEOK scores?",
              a: "Wellbeing, autonomy, growth, connection, boundary_respect, and transparency. Each is scored 0.0–1.0. The overall care score is a weighted average with wellbeing carrying the highest weight (0.22).",
            },
            {
              q: "What happens when a response fails the care floor?",
              a: "The response is not delivered. The system identifies the lowest-scoring dimension, generates a care-repair instruction targeting it, and regenerates. This loops until the response clears 0.3 on the weighted average.",
            },
            {
              q: "How is the Maternal Covenant different from RLHF?",
              a: "RLHF optimises for human rater approval, which creates sycophancy and harmful agreeableness. The Maternal Covenant optimises explicitly for care across 6 dimensions, enforced at inference time as auditable code rather than opaque model weights.",
            },
            {
              q: "Does the Maternal Covenant prevent sycophancy?",
              a: "Yes. A dedicated sycophancy detector scores responses 0.0–1.0. Above 0.6, an honest-qualifier injection is triggered. The 'autonomy' dimension also penalises responses that agree without basis or soften criticism to the point of uselessness.",
            },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <h3 className="text-base font-bold mb-3" style={{ color: "#f5f0e8" }}>
                {q}
              </h3>
              <p className="text-sm leading-relaxed m-0" style={{ color: "rgba(245,240,232,0.7)" }}>
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 text-center mt-16"
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#c9a84c" }}>
            Experience care-based AI
          </p>
          <h3 className="text-2xl font-black mb-4" style={{ color: "#f5f0e8" }}>
            An AI that genuinely cares. Provably.
          </h3>
          <p
            className="text-sm leading-relaxed mb-8 max-w-md mx-auto"
            style={{ color: "rgba(245,240,232,0.6)" }}
          >
            Every response scored. Every sub-threshold response regenerated. The Maternal Covenant
            runs on every message you send — free, on Explorer tier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/birth"
              className="inline-block px-8 py-3 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Begin the Birth Ceremony — Free
            </Link>
            <Link
              href="/labs"
              className="inline-block px-8 py-3 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#c9a84c" }}
            >
              Read MEOK-AI-2026-002
            </Link>
          </div>
        </div>

        {/* Related */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(245,240,232,0.1)" }}>
          <p
            className="text-xs font-bold tracking-[0.15em] uppercase mb-6"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            Related posts
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/blog/byzantine-council-explained", title: "The Byzantine Council Explained", tag: "Research" },
              { href: "/blog/the-maternal-covenant", title: "The Maternal Covenant (Original Post)", tag: "Research" },
              { href: "/blog/sovereign-ai-explained", title: "Sovereign AI Explained", tag: "Sovereign AI" },
            ].map(({ href, title, tag }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl p-4 block transition-all"
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <span className="text-xs font-bold tracking-wide uppercase" style={{ color: "#c9a84c" }}>
                  {tag}
                </span>
                <p className="text-sm font-semibold mt-2 mb-0" style={{ color: "#f5f0e8" }}>
                  {title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
