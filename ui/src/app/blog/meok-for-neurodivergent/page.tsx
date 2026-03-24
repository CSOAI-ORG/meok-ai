import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously | MEOK Blog",
  description:
    "AI for neurodivergent people needs to be built differently. MEOK has no social judgment, consistent responses, literal language support, and Comfort Settings designed for autism, ADHD, dyslexia and more.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-neurodivergent" },
  openGraph: {
    title: "MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously",
    description:
      "AI for neurodivergent people needs to be built differently. MEOK has no social judgment, consistent responses, literal language support, and Comfort Settings designed for autism, ADHD, dyslexia and more.",
    type: "article",
    publishedTime: "March 28, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-neurodivergent",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Neurodivergent+People&desc=An+AI+that+takes+different+thinking+seriously.",
        width: 1200,
        height: 630,
        alt: "MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously",
    description:
      "AI for neurodivergent people needs to be built differently. MEOK has no social judgment, consistent responses, and Comfort Settings for autism, ADHD, dyslexia.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Neurodivergent+People&desc=An+AI+that+takes+different+thinking+seriously.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously",
  description:
    "AI for neurodivergent people needs to be built differently. MEOK has no social judgment, consistent responses, literal language support, and Comfort Settings designed for autism, ADHD, dyslexia and more.",
  datePublished: "March 28, 2026",
  url: "https://meok.ai/blog/meok-for-neurodivergent",
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
      name: "Is MEOK good for autistic people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is designed with autistic users in mind. It delivers consistent, predictable responses without shifting personality between conversations, uses literal language, avoids ambiguous subtext, and applies zero social judgment. There is no performative warmth or confusing subtext — just clear, reliable communication on your terms.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help neurodivergent people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can be genuinely useful for neurodivergent people when it is built for them. MEOK compensates for working memory challenges through persistent memory, breaks down complex tasks through Hourman, provides honest feedback via its sycophancy detector, and offers a Comfort Settings panel with font size, contrast, motion, and layout density controls.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK have accessibility features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK includes a full Comfort Settings panel covering font size, contrast, motion, sound, and layout density. Senior Mode enforces 44×44px touch targets, a 16px minimum text size, and a 7:1 contrast ratio. MEOK targets WCAG 2.2 AA compliance with semantic HTML and ARIA labels throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for disabled users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is free forever and requires no credit card. It includes 50 messages per day, persistent companion memory, and full access to the Comfort Settings panel. No subscription is needed to experience MEOK's neurodivergent-friendly features.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokForNeurodivergent() {
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
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Accessibility
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 28, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              7 min read
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
            MEOK for Neurodivergent People: An AI That Takes Different Thinking
            Seriously
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Most AI is built for the neurotypical majority and quietly punishes
            everyone else. MEOK is different — built with no social judgment,
            consistent personality, literal language support, and a Comfort
            Settings panel that actually changes how the interface works.
          </p>
        </div>
      </section>

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
            <p className="font-bold text-[#1a1a2e] text-sm">Nicholas Templeman</p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">Founder, MEOK AI LABS</p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right,
              not a luxury.
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
            There are roughly 9.5 million neurodivergent people in the UK. That includes autistic
            people, those with ADHD, dyslexia, dyscalculia, sensory processing differences, and a
            wide spectrum of cognitive profiles that do not fit the neurotypical mould. Almost
            every mainstream AI product was designed without them in mind. The default assumptions
            baked into the interaction model — casual tone, ambiguous phrasing, personality shifts
            depending on context, no persistent memory, no way to adjust how information is
            presented — quietly exclude a significant portion of the population.
          </p>
          <p>
            MEOK was built to be different. Not as a separate &ldquo;accessibility product,&rdquo; but as an
            AI whose core architecture happens to work far better for neurodivergent users by
            design.
          </p>

          <h2>What does neurodivergent mean and why does it matter for AI?</h2>
          <p>
            Neurodivergent describes people whose brains develop or function differently from
            what is considered typical. This covers <strong>autism</strong>, <strong>ADHD</strong>,{" "}
            <strong>dyslexia</strong>, <strong>dyscalculia</strong>, and{" "}
            <strong>sensory processing differences</strong>, among others. Approximately{" "}
            <strong>9.5 million people in the UK</strong> are neurodivergent in some form. The
            problem for AI is that most AI systems are trained on neurotypical communication
            patterns — idiom-heavy, tonally inconsistent, socially layered — and then deployed
            without any adjustment for users who process language or information differently. The
            result is an AI that subtly penalises difference at every interaction.
          </p>

          <h2>How does MEOK support autistic users?</h2>
          <p>
            MEOK is built around several structural properties that make it genuinely useful for
            autistic users, not just technically accessible:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: "No social judgment",
                detail:
                  "MEOK does not assign social scores, tone penalties, or implicit corrections. You communicate the way you communicate.",
              },
              {
                label: "Consistent responses",
                detail:
                  "MEOK's companion does not change personality between conversations. The same AI shows up every time — no unpredictable tonal shifts.",
              },
              {
                label: "Literal language support",
                detail:
                  "MEOK avoids ambiguous subtext and can be configured to use direct, unambiguous language. You can ask it to be literal and it will be.",
              },
              {
                label: "Predictable structure",
                detail:
                  "Responses follow a consistent format. MEOK does not randomly switch between lists, paragraphs, and conversational answers based on mood.",
              },
              {
                label: "No masking required",
                detail:
                  "You do not need to perform neurotypicality to get a useful response. MEOK meets you where you are.",
              },
            ].map(({ label, detail }) => (
              <li
                key={label}
                className="flex gap-3 p-4 rounded-xl border"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span className="text-sm text-[#2a2a3e]/80 leading-relaxed">
                  <strong className="text-[#1a1a2e]">{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>

          <h2>How does MEOK help with ADHD?</h2>
          <p>
            ADHD presents a specific set of challenges for AI interaction: working memory
            limitations, difficulty with task initiation, executive function variability, and a
            need for honest feedback rather than sycophantic reassurance. MEOK addresses these
            directly:
          </p>
          <p>
            <strong>Hourman</strong> — MEOK&apos;s task-management agent — breaks down complex goals
            into granular, ordered steps. Rather than giving you a wall of information and
            expecting you to decompose it yourself, Hourman structures action into sequences your
            working memory can handle one at a time.
          </p>
          <p>
            <strong>Morning briefings</strong> give you a structured daily context refresh. If
            yesterday&apos;s working memory didn&apos;t retain what you were working on, MEOK&apos;s persistent
            memory does. Your AI picks up where you left off — even if you have no recollection
            of where that was.
          </p>
          <p>
            <strong>Sycophancy detection</strong> means MEOK will not simply tell you what you
            want to hear. For ADHD users who often struggle to trust their own judgement, having
            an AI that gives honest evaluations — rather than enthusiastic agreement — is
            structurally valuable.
          </p>

          <h2>What is MEOK&apos;s Comfort Settings panel?</h2>
          <p>
            The Comfort Settings panel is a user-controlled interface layer that adjusts how
            MEOK displays and delivers information. It is not an afterthought — it is a
            first-class feature. Options include:
          </p>

          {/* Comfort Settings table */}
          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/[0.07] my-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1a1a2e" }}>
                  {["Setting", "Options", "Who it helps"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: "#c9a84c" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Font size", "Small / Default / Large / XL", "Dyslexia, low vision"],
                  ["Contrast", "Standard / High / Maximum", "Visual processing differences"],
                  ["Motion", "Full / Reduced / None", "Sensory sensitivity, vestibular disorders"],
                  ["Sound", "On / Off", "Auditory sensitivity"],
                  ["Layout density", "Comfortable / Compact / Spacious", "Attention, cognitive load"],
                  ["Senior Mode", "On / Off (44×44px targets, 16px min text, 7:1 contrast)", "Motor differences, older adults"],
                ].map(([setting, options, helps], i) => (
                  <tr
                    key={setting}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "rgba(245,240,232,0.5)",
                      borderTop: "1px solid rgba(26,26,46,0.06)",
                    }}
                  >
                    <td className="px-5 py-3.5 font-semibold text-[#1a1a2e] text-xs">{setting}</td>
                    <td className="px-5 py-3.5 text-[#2a2a3e]/70 text-xs">{options}</td>
                    <td className="px-5 py-3.5 text-[#2a2a3e]/60 text-xs">{helps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            <strong>Senior Mode</strong> enforces a set of accessibility standards automatically:
            44×44px minimum touch targets, 16px minimum text size, and a 7:1 contrast ratio
            throughout the interface. It can be activated by anyone — it is not age-gated.
          </p>

          <h2>Is MEOK accessible to screen reader users?</h2>
          <p>
            MEOK targets <strong>WCAG 2.2 AA compliance</strong>. All interactive elements are
            reachable by keyboard, semantic HTML is used throughout, and ARIA labels are applied
            to components that require additional context for assistive technology. The interface
            does not rely on colour alone to convey meaning, and all image content includes
            descriptive alt text. Screen reader testing is part of the ongoing development cycle,
            not a post-launch retrofit.
          </p>

          <h2>Is MEOK free for neurodivergent users?</h2>
          <p>
            Yes. The <strong>Explorer tier is free forever</strong> — no credit card, no
            subscription, no trial countdown. It includes 50 messages per day, persistent
            companion memory, and full access to the Comfort Settings panel. Neurodivergent users
            should not have to pay a premium to access an AI that communicates in a way that
            works for them. The free tier is not a stripped-down version; it is a genuine first
            experience of what MEOK does.
          </p>

          {/* Comparison table */}
          <h2>How does MEOK compare to other AI tools for neurodivergent users?</h2>

          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/[0.07] my-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1a1a2e" }}>
                  {[
                    "Feature",
                    "MEOK",
                    "ChatGPT",
                    "Alexa",
                    "Woebot",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: "#c9a84c" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Consistent personality", "Yes", "No", "Partial", "Yes"],
                  ["Comfort Settings panel", "Yes", "No", "No", "No"],
                  ["Persistent memory", "Yes", "Partial", "No", "No"],
                  ["No social judgment", "Yes", "Partial", "No", "Yes"],
                  ["Free tier", "Yes (50 msg/day)", "Yes (limited)", "No subscription", "Yes"],
                ].map(([feature, meok, chatgpt, alexa, woebot], i) => (
                  <tr
                    key={feature}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "rgba(245,240,232,0.5)",
                      borderTop: "1px solid rgba(26,26,46,0.06)",
                    }}
                  >
                    <td className="px-4 py-3 font-semibold text-[#1a1a2e] text-xs">{feature}</td>
                    <td className="px-4 py-3 text-xs">
                      <span
                        className="font-bold px-2 py-0.5 rounded-full"
                        style={{
                          color: meok === "Yes" || meok.startsWith("Yes") ? "#1a1a2e" : "#2a2a3e",
                          background:
                            meok === "Yes" || meok.startsWith("Yes")
                              ? "rgba(201,168,76,0.2)"
                              : "transparent",
                        }}
                      >
                        {meok}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-[#2a2a3e]/60">{chatgpt}</td>
                    <td className="px-4 py-3 text-xs text-[#2a2a3e]/60">{alexa}</td>
                    <td className="px-4 py-3 text-xs text-[#2a2a3e]/60">{woebot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ section */}
          <h2>Frequently asked questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "Is MEOK good for autistic people?",
                a: "Yes. MEOK is designed with autistic users in mind. It delivers consistent, predictable responses without shifting personality between conversations, uses literal language, avoids ambiguous subtext, and applies zero social judgment. There is no performative warmth or confusing subtext — just clear, reliable communication on your terms.",
              },
              {
                q: "Can AI help neurodivergent people?",
                a: "AI can be genuinely useful for neurodivergent people when it is built for them. MEOK compensates for working memory challenges through persistent memory, breaks down complex tasks through Hourman, provides honest feedback via its sycophancy detector, and offers a Comfort Settings panel with font size, contrast, motion, and layout density controls.",
              },
              {
                q: "Does MEOK have accessibility features?",
                a: "Yes. MEOK includes a full Comfort Settings panel covering font size, contrast, motion, sound, and layout density. Senior Mode enforces 44×44px touch targets, a 16px minimum text size, and a 7:1 contrast ratio. MEOK targets WCAG 2.2 AA compliance with semantic HTML and ARIA labels throughout.",
              },
              {
                q: "Is MEOK free for disabled users?",
                a: "Yes. MEOK's Explorer tier is free forever and requires no credit card. It includes 50 messages per day, persistent companion memory, and full access to the Comfort Settings panel. No subscription is needed to experience MEOK's neurodivergent-friendly features.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-6 border"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{q}</h3>
                <p className="text-sm text-[#2a2a3e]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-neurodivergent&text=MEOK+for+Neurodivergent+People%3A+An+AI+That+Takes+Different+Thinking+Seriously"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-neurodivergent"
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
              Your companion adapts to your communication style from day one.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Hatch your AI in under 3 minutes. Set your Comfort Settings, choose your
              communication preferences, and meet an AI that meets you where you are. No
              credit card. No neurotypicality required.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/meok-for-adhd"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Accessibility
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for ADHD: Task Breakdown, Memory, and Honest Feedback
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/ai-for-elderly"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Guardian
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                AI for the Elderly: How MEOK&apos;s Senior Mode Protects and Connects Older Adults
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
