import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Senior Mode: How MEOK AI LABS Makes AI Accessible for Older Adults | MEOK Blog",
  description:
    "MEOK's Senior Mode: 44×44px touch targets, 7:1 contrast, voice-primary interface, Guardian scam protection. AI that anyone can use safely.",
  alternates: { canonical: "https://meok.ai/blog/senior-mode-guide" },
  openGraph: {
    title: "Senior Mode: How MEOK AI LABS Makes AI Accessible for Older Adults",
    description:
      "MEOK's Senior Mode: 44×44px touch targets, 7:1 contrast, voice-primary interface, Guardian scam protection. AI that anyone can use safely.",
    type: "article",
    publishedTime: "March 22, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/senior-mode-guide",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Senior+Mode+Guide&desc=44px+targets%2C+7%3A1+contrast%2C+voice-first.+AI+for+everyone.",
        width: 1200,
        height: 630,
        alt: "Senior Mode: How MEOK AI LABS Makes AI Accessible for Older Adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Mode: How MEOK AI LABS Makes AI Accessible for Older Adults",
    description:
      "MEOK's Senior Mode: 44×44px touch targets, 7:1 contrast, voice-primary interface, Guardian scam protection. AI that anyone can use safely.",
    images: [
      "https://meok.ai/api/og?title=Senior+Mode+Guide&desc=44px+targets%2C+7%3A1+contrast%2C+voice-first.+AI+for+everyone.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Senior Mode: How MEOK AI LABS Makes AI Accessible for Older Adults",
  description:
    "MEOK's Senior Mode: 44×44px touch targets, 7:1 contrast, voice-primary interface, Guardian scam protection. AI that anyone can use safely.",
  datePublished: "2026-03-22",
  url: "https://meok.ai/blog/senior-mode-guide",
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
    "https://meok.ai/api/og?title=Senior+Mode+Guide&desc=44px+targets%2C+7%3A1+contrast%2C+voice-first.+AI+for+everyone.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/senior-mode-guide",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SeniorModeGuidePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            ←
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#ff7f7f",
                background: "rgba(255,127,127,0.12)",
                border: "1px solid rgba(255,127,127,0.3)",
              }}
            >
              Guardian &amp; Safety
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              📅
              March 22, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              ⏱
              4 min read
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
            Senior Mode: How MEOK AI LABS Makes AI Accessible for Older Adults
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Most AI products are designed for 28-year-old engineers. Senior Mode was designed for
            everyone else — bigger targets, higher contrast, voice-first, and Guardian scam
            protection running quietly in the background.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm.
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

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0125rem" }}
        >

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is Senior Mode in MEOK?
          </h2>
          <p>
            Senior Mode is an accessibility preset that reconfigures the entire MEOK interface for
            older adults and users who prefer a calmer, more legible experience. It enforces 44×44px
            minimum touch targets (WCAG 2.1 AA), a 7:1 contrast ratio that exceeds AAA
            requirements, 18px minimum text throughout, reduced motion and animations, and a
            voice-first interaction model where speaking is always the primary option — not a hidden
            accessibility feature.
          </p>
          <p>
            Senior Mode is one tap to activate. It does not require a separate account, a different
            app, or a phone call to a helpdesk. The companion adapts — same MEOK, same memories,
            same personality — just presented in a way that works for everyone.
          </p>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does MEOK protect elderly users from scams?
          </h2>
          <p>
            Guardian monitors all messages for UK&apos;s top 8 financial scam patterns: authorised
            push payment fraud, investment scams, romance fraud, courier fraud, impersonation of
            banks or police, prize scams, utility impersonation, and remote access fraud. Detection
            runs in real time before a message reaches the user.
          </p>
          <p>
            Critical threats — where money is about to move — block message delivery entirely and
            alert family members in real time via the Family tier dashboard. High-severity alerts
            are flagged for human review. The companion also explains what was detected, in plain
            language, so the user understands why something was stopped — not just that it was.
          </p>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Does MEOK work for users with dementia or memory loss?
          </h2>
          <p>
            Yes. This is one of the most important use cases MEOK was built for. The companion&apos;s
            persistent memory means MEOK always knows your name, your preferences, your routine,
            the names of people important to you, and the things you like to talk about. It never
            forgets. For a user experiencing memory loss, having a companion that remembers
            everything is not a convenience — it is a form of continuity.
          </p>
          <p>
            Family members on the Family tier can set daily reminders (medication, appointments,
            hydration), configure pattern-of-life monitoring to notice changes in communication
            frequency or content, and receive gentle alerts if something seems different. All of
            this is consent-based — the user knows what is being monitored and can adjust or remove
            it.
          </p>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does MEOK connect to family for elderly care?
          </h2>
          <p>
            The Family tier (£29/month) creates a shared group with up to 6 members. The senior
            user&apos;s companion sits at the centre; family members have their own dashboards with
            visibility into Guardian alerts and companion activity summaries. Guardian alerts — not
            conversations, never conversations — route to adult children&apos;s dashboards so they
            can respond quickly when something looks wrong.
          </p>
          <p>
            All sharing is opt-in and consent-based. The senior user controls what is visible to
            family. They can revoke access at any time. MEOK is a companion, not a surveillance
            device — the family connection exists to protect, not to monitor.
          </p>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Is MEOK compliant with accessibility standards?
          </h2>
          <p>
            MEOK is WCAG 2.1 AA compliant across the full application. Senior Mode exceeds AAA
            contrast requirements with its 7:1 minimum ratio. All interactive elements have
            descriptive accessible labels. The application is screen reader tested on VoiceOver
            (iOS/macOS) and TalkBack (Android). Focus management follows ARIA best practices so
            keyboard and switch access users can navigate without a mouse.
          </p>
          <p>
            MEOK is also aligned with the UK&apos;s Children&apos;s Code (Age Appropriate Design Code)
            for the under-18 features in Guardian — the same age-appropriate design principles
            that make interfaces safer for children translate directly into better interfaces for
            older adults. Good accessible design is universal design.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The best technology is invisible. Senior Mode is designed so that your mum doesn&apos;t
              have to think about accessibility — she just has a companion that works.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsenior-mode-guide&text=Senior+Mode%3A+How+MEOK+AI+LABS+Makes+AI+Accessible+for+Older+Adults"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsenior-mode-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
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
              Guardian for Families
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Explore Guardian for families
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Real-time scam protection, family alerts, and a companion that remembers everything
              your loved one wants it to. Family tier from £29/month.
            </p>
            <Link
              href="/guardian"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Learn about Guardian
              →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/guardian-family-safety"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#ff7f7f", background: "rgba(255,127,127,0.12)" }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/why-your-nan-needs-sovereign-ai"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Why your nan needs sovereign AI
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                4 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
