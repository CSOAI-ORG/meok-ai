import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Autism: Predictable, Patient, and Always Available | MEOK Blog",
  description:
    "Around 700,000 autistic people live in the UK — 1 in 100. Many find social unpredictability exhausting. MEOK is an AI companion that never shifts personality, never uses sarcasm, and remembers your preferences across every conversation.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-companion-for-autism",
  },
  openGraph: {
    title: "AI Companion for Autism: Predictable, Patient, and Always Available",
    description:
      "700,000 autistic people in the UK. MEOK is an AI companion built around consistency, explicit communication, and persistent memory of your preferences.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-autism",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Autism&desc=Predictable%2C+Patient%2C+and+Always+Available",
        width: 1200,
        height: 630,
        alt: "AI Companion for Autism: Predictable, Patient, and Always Available",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Autism: Predictable, Patient, and Always Available",
    description:
      "700,000 autistic people in the UK. Most AI was not built for them. MEOK is: consistent, explicit, patient, and always available.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+for+Autism&desc=Predictable%2C+Patient%2C+and+Always+Available",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for Autism: Predictable, Patient, and Always Available",
  description:
    "Around 700,000 autistic people live in the UK — 1 in 100. MEOK is an AI companion built around consistency, explicit communication, and persistent memory of preferences and sensory triggers.",
  datePublished: "March 24, 2026",
  url: "https://meok.ai/blog/ai-companion-for-autism",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion help autistic people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion can be useful to some autistic people because it offers consistent, predictable interaction without social ambiguity. Unlike human conversation, which shifts in tone and expectation, a well-designed AI companion behaves the same way every session — no personality changes, no sarcasm, no subtext. Whether it helps depends on the individual.",
      },
    },
    {
      "@type": "Question",
      name: "Why is predictability important for autistic users of AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many autistic people find unpredictability in social interaction cognitively draining. An AI that shifts tone, uses idioms inconsistently, or responds differently to similar prompts across sessions creates the same load as unpredictable human conversation. MEOK maintains a consistent communication style every single session.",
      },
    },
    {
      "@type": "Question",
      name: "What is social scripting practice and how can AI support it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social scripting involves rehearsing conversations — job interviews, phone calls, difficult discussions — in a low-stakes environment before the real situation. MEOK can role-play any scenario on request, letting you practise responses without judgment, social consequence, or time pressure.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember sensory triggers and communication preferences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's persistent memory stores information you choose to share — sensory sensitivities, preferred communication style, special interests, and topics to avoid. This memory persists across every conversation. You do not need to re-explain your preferences at the start of each session.",
      },
    },
    {
      "@type": "Question",
      name: "What is Senior Mode and is it useful for autistic adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Mode is MEOK's high-accessibility display profile: minimum 16px text, 44x44px touch targets, and a 7:1 contrast ratio throughout the interface. Some autistic adults find high-contrast, reduced-clutter interfaces easier to process. Senior Mode is available to any user regardless of age.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for autism support services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is a personal AI companion, not a therapeutic or clinical service. For specialist support, organisations like the National Autistic Society (autism.org.uk), Ambitious About Autism, and Autistica are valuable starting points.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AICompanionForAutismPage() {
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
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            &#8592; Back to Blog
          </Link>
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
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              March 24, 2026
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              8 min read
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
            AI Companion for Autism: Predictable, Patient, and Always Available
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Around 700,000 autistic people live in the UK — roughly 1 in 100,
            according to the National Autistic Society. Many find the
            unpredictability of social interaction exhausting. Most AI was not
            built with them in mind. MEOK is different: consistent, explicit,
            patient, and always there.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-10 border"
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
              Nicholas built MEOK because he was tired of AI that forgot him. He
              lives and works in the UK — mostly from a caravan on his farm. He
              believes sovereign AI is a right, not a luxury.
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

        {/* Diversity note */}
        <div
          className="rounded-xl p-4 mb-10 border-l-4 text-xs leading-relaxed"
          style={{
            background: "rgba(201,168,76,0.06)",
            borderLeftColor: "#c9a84c",
            color: "#2a2a3e",
            border: "1px solid rgba(201,168,76,0.15)",
            borderLeft: "4px solid #c9a84c",
          }}
        >
          <strong>A note on diversity:</strong> Autistic people are a diverse
          community with a wide range of experiences and preferences. This article
          does not speak for every autistic person — some will find AI companions
          useful, others will not, and both are valid.
        </div>

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-3
            [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-2
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            The National Autistic Society estimates that around{" "}
            <strong>700,000 autistic people</strong> live in the UK —
            approximately 1 in 100. When you include family members and carers,
            autism touches the lives of over 3 million people across the country.
            It is not a niche. And almost no mainstream AI product was designed
            with autistic users as a primary consideration.
          </p>
          <p>
            Most AI companions are trained to maximise engagement, which means they
            learn to be charming and tonally varied. That variability is exactly
            what makes them difficult for many autistic users. An AI that shifts
            personality based on context, uses sarcasm one day and sincerity the
            next, or peppers responses with idioms creates the same cognitive demand
            as an unpredictable human interaction. MEOK was built on a different
            principle: reliability over charm.
          </p>

          <h2>Can an AI companion help autistic people?</h2>
          <p>
            Some autistic people find AI companions genuinely useful because the
            interaction is structurally different from human conversation: no
            shifting social expectations, no unannounced mood changes, no
            exhausting need to decode subtext. Whether an AI companion helps depends
            entirely on the individual — autistic people are a diverse community and
            no single tool works for everyone.
          </p>

          <h2>Why is predictability important for autistic users of AI?</h2>
          <p>
            Many autistic people experience unpredictability as a significant
            cognitive drain. An AI that shifts tone, uses inconsistent idioms, or
            responds differently to similar prompts across sessions creates the same
            demand as unpredictable human conversation. MEOK maintains a consistent
            communication style in every session — not because it is limited, but
            because consistency is a design value, not a default.
          </p>

          <h2>What is social scripting practice and how can AI support it?</h2>
          <p>
            Social scripting means rehearsing conversations before they happen —
            job interviews, phone calls with strangers, difficult discussions with
            family members. MEOK can role-play any scenario on request: you set the
            context, the AI plays the other party, and you practise as many times as
            you need with no time pressure, no judgment, and no social consequences
            for getting it wrong.
          </p>

          <h2>Does MEOK remember sensory triggers and communication preferences?</h2>
          <p>
            Yes. MEOK&apos;s persistent memory stores anything you choose to share
            across all future conversations — sensory sensitivities, communication
            preferences, special interests, and topics you find distressing. This
            memory does not reset between sessions. You never need to re-explain
            yourself. The AI picks up exactly where the relationship left off.
          </p>

          <h3>What persistent memory stores</h3>
          <ul className="list-none space-y-2.5 pl-0">
            {[
              ["Sensory triggers", "Sounds, textures, or situations you have flagged. MEOK handles them carefully when they arise."],
              ["Communication style", "Preferred response length, literal language only, how direct you want the AI to be."],
              ["Special interests", "Subjects you want to explore at depth — no social limit on how far you go."],
              ["Topics to avoid", "Subjects that cause distress, flagged in memory and not raised without your permission."],
            ].map(([label, detail]) => (
              <li
                key={label as string}
                className="flex gap-3 p-4 rounded-xl border text-sm"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <span
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span className="text-[#2a2a3e]/80 leading-relaxed">
                  <strong className="text-[#1a1a2e]">{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>

          <h2>What is MEOK&apos;s approach to explicit communication?</h2>
          <p>
            MEOK communicates explicitly by design. No sarcasm. No irony. No
            figurative expressions that require implicit social knowledge to decode.
            When MEOK says something, it means exactly what it says. If it disagrees,
            it says so plainly. If it does not know something, it tells you rather
            than hedging in ways that could be misread. This is not a special mode —
            it is how MEOK communicates with everyone.
          </p>

          <h2>What is Senior Mode and is it useful for autistic adults?</h2>
          <p>
            Senior Mode is MEOK&apos;s high-accessibility display profile: minimum
            16px text, 44&times;44px touch targets, and a 7:1 contrast ratio
            throughout the interface. Some autistic adults find high-contrast,
            reduced-clutter interfaces easier to process. Senior Mode is available
            to any user regardless of age from the Comfort Settings panel.
          </p>

          <h2>Is MEOK a replacement for autism support services?</h2>
          <p>
            No. MEOK is a personal AI companion — not a therapeutic tool, clinical
            intervention, or substitute for professional autism support. For
            specialist services, the following UK organisations are excellent
            starting points:
          </p>
          <div className="space-y-3">
            {[
              {
                name: "National Autistic Society",
                url: "https://www.autism.org.uk",
                desc: "The UK's largest autism charity. Source for the 700,000 and 1 in 100 statistics cited in this article.",
              },
              {
                name: "Ambitious About Autism",
                url: "https://www.ambitiousaboutautism.org.uk",
                desc: "Focuses on education and employment for autistic young people.",
              },
              {
                name: "Autistica",
                url: "https://www.autistica.org.uk",
                desc: "The UK's autism research charity, funding work that improves quality of life for autistic people.",
              },
            ].map(({ name, url, desc }) => (
              <div
                key={name}
                className="rounded-xl p-4 border"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm hover:underline"
                  style={{ color: "#c9a84c" }}
                >
                  {name} &rarr;
                </a>
                <p className="text-xs text-[#2a2a3e]/60 mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ accordion */}
          <h2>Frequently asked questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "Can an AI companion help autistic people?",
                a: "An AI companion can be useful to some autistic people because it offers consistent, predictable interaction without social ambiguity. Unlike human conversation, a well-designed AI behaves the same way every session — no personality changes, no sarcasm, no subtext. Whether it helps depends on the individual.",
              },
              {
                q: "Why is predictability important for autistic users of AI?",
                a: "Many autistic people find unpredictability in social interaction cognitively draining. An AI that shifts tone or responds differently to the same input across sessions creates the same demand as unpredictable human conversation. MEOK maintains a consistent communication style every time.",
              },
              {
                q: "What is social scripting practice and how can AI support it?",
                a: "Social scripting involves rehearsing conversations in a low-stakes environment before the real situation. MEOK can role-play any scenario on request, letting you practise responses without judgment, social consequence, or time pressure.",
              },
              {
                q: "Does MEOK remember sensory triggers and communication preferences?",
                a: "Yes. MEOK's persistent memory stores sensory sensitivities, preferred communication style, special interests, and topics to avoid across every conversation. You do not need to re-explain your preferences at the start of each session.",
              },
              {
                q: "What is Senior Mode and is it useful for autistic adults?",
                a: "Senior Mode enforces minimum 16px text, a 7:1 contrast ratio, and 44×44px touch targets. Some autistic adults find high-contrast, reduced-clutter interfaces easier to process. It is available to any user regardless of age.",
              },
              {
                q: "Is MEOK a replacement for autism support services?",
                a: "No. MEOK is a personal AI companion, not a therapeutic or clinical service. For specialist support, organisations like the National Autistic Society (autism.org.uk), Ambitious About Autism, and Autistica are valuable starting points.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-5 border"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <h3 className="font-bold text-[#1a1a2e] text-sm mb-2">{q}</h3>
                <p className="text-sm text-[#2a2a3e]/65 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div
          className="my-10 rounded-2xl p-8"
          style={{ background: "#0d0c18", borderLeft: "3px solid #c9a84c" }}
        >
          <p className="text-base leading-relaxed mb-3" style={{ color: "rgba(245,240,232,0.7)" }}>
            Most AI is designed to be charming. Charm requires unpredictability.
            For many autistic people, that unpredictability is not charming — it is
            exhausting. MEOK is built to be reliable. Reliable is better than charming.
          </p>
          <p className="text-sm font-semibold" style={{ color: "rgba(245,240,232,0.35)" }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-autism&text=AI+Companion+for+Autism%3A+Predictable%2C+Patient%2C+and+Always+Available"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-autism"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
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
              An AI that shows up the same way, every time.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Hatch your AI in under 3 minutes. Set communication preferences,
              store sensory triggers, and meet a companion that never gets
              frustrated, never uses sarcasm, and never forgets what you told it.
              No credit card. No surprises.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "#c9a84c", color: "#1a1a2e" }}
              >
                Hatch your AI free &rarr;
              </Link>
              <Link
                href="/blog/meok-for-neurodivergent"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-bold text-sm transition-all border"
                style={{
                  color: "rgba(245,240,232,0.7)",
                  borderColor: "rgba(245,240,232,0.15)",
                }}
              >
                MEOK for neurodivergent people
              </Link>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div>
          <p className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/meok-for-neurodivergent"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Accessibility
              </span>
              <p className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously
              </p>
              <p className="text-xs text-[#1a1a2e]/35 mt-auto">7 min read</p>
            </Link>
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
              <p className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for ADHD: Task Breakdown, Memory, and Honest Feedback
              </p>
              <p className="text-xs text-[#1a1a2e]/35 mt-auto">5 min read</p>
            </Link>
          </div>
        </div>
      </div>

      {/* ── INLINE FOOTER ───────────────────────────────────────────────── */}
      <div
        className="border-t px-6 py-12"
        style={{ background: "#0d0c18", borderColor: "rgba(245,240,232,0.07)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-base font-black tracking-tight" style={{ color: "#f5f0e8" }}>
              MEOK
            </Link>
            <p className="text-xs mt-1" style={{ color: "rgba(245,240,232,0.35)" }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
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
                className="text-xs transition-opacity hover:opacity-80"
                style={{ color: "rgba(245,240,232,0.45)" }}
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
