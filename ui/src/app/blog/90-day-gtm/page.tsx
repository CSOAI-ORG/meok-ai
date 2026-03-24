import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "How MEOK Plans to Win 1,000 Early Adopters in 90 Days | MEOK Blog",
  description:
    "MEOK's 90-day open-source land grab strategy: Show HN, Product Hunt, 30 personality templates, and a Supabase-style launch week. Here's the playbook.",
  alternates: { canonical: "https://meok.ai/blog/90-day-gtm" },
  openGraph: {
    title: "How MEOK Plans to Win 1,000 Early Adopters in 90 Days",
    description:
      "MEOK's 90-day open-source land grab strategy: Show HN, Product Hunt, 30 personality templates, and a Supabase-style launch week. Here's the playbook.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/90-day-gtm",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=How+MEOK+Plans+to+Win+1%2C000+Early+Adopters+in+90+Days&desc=The+open-source+land+grab+playbook.",
        width: 1200,
        height: 630,
        alt: "How MEOK Plans to Win 1,000 Early Adopters in 90 Days",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How MEOK Plans to Win 1,000 Early Adopters in 90 Days",
    description:
      "MEOK's 90-day open-source land grab strategy: Show HN, Product Hunt, 30 personality templates, and a Supabase-style launch week. Here's the playbook.",
    images: [
      "https://meok.ai/api/og?title=How+MEOK+Plans+to+Win+1%2C000+Early+Adopters+in+90+Days&desc=The+open-source+land+grab+playbook.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How MEOK Plans to Win 1,000 Early Adopters in 90 Days",
  description:
    "MEOK's 90-day open-source land grab strategy: Show HN, Product Hunt, 30 personality templates, and a Supabase-style launch week. Here's the playbook.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/90-day-gtm",
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
    "https://meok.ai/api/og?title=How+MEOK+Plans+to+Win+1%2C000+Early+Adopters+in+90+Days&desc=The+open-source+land+grab+playbook.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/90-day-gtm",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NinetyDayGTMPage() {
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
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
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
              Strategy &amp; Growth
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              5 min read
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
            How MEOK plans to win 1,000 early adopters in 90 days
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Open-source land grab. Show HN. Product Hunt. 30 personality templates.
            A Supabase-style launch week. Here&apos;s the full 90-day playbook — and
            why the personality engine is the product, not the platform.
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
            What is MEOK&apos;s go-to-market strategy?
          </h2>
          <p>
            Open-source land grab via Show HN and Product Hunt. Target: 500–1K GitHub stars in
            30 days. The MEOK character SDK is being released under FSL 1.1 — meaning it&apos;s open
            for individuals and non-commercial use from day one, with commercial terms kicking in
            only at scale.
          </p>
          <p>
            The personality engine is the product. The platform is the moat. By releasing the SDK
            openly, MEOK becomes the default layer that developers build character-driven AI on top
            of — before any enterprise sales motion is needed. The network effects come first; the
            revenue follows.
          </p>
          <p>
            Show HN posts that perform do one thing well: they solve a real problem, visibly, with
            running code. MEOK&apos;s show post will demo a live hatching — from blank screen to
            personalised companion in 180 seconds. Product Hunt follows one week later with a
            coordinated upvote window targeting the Wednesday morning slot.
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
            How does MEOK&apos;s 30-day template flywheel work?
          </h2>
          <p>
            Days 30–60: ship 30 personality templates and 20 MCP integrations as shareable links.
            Each template is a standalone character that users can fork, customise, and share.
            Think Notion templates — but for AI personalities.
          </p>
          <p>
            A user builds a &ldquo;stoic productivity coach&rdquo; character. They share the link on
            Twitter. Their followers fork it. Each fork is a new MEOK account. The viral coefficient
            is structural — it&apos;s baked into the sharing mechanic, not dependent on paid
            distribution.
          </p>
          <p>
            The 20 MCP integrations ship in the same window: Notion, Slack, GitHub, Linear,
            Obsidian, and 15 more. Each integration is a standalone plugin in the MEOK marketplace.
            Each plugin page is an SEO-indexed landing page. The flywheel compounds.
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
            What is MEOK Launch Week?
          </h2>
          <p>
            Days 60–90: a Supabase-style launch — one major feature per day for a week, each with
            a 30-second demo video for X/Twitter. Supabase proved this format works: each daily
            post generates its own news cycle without cannibalising the others.
          </p>
          <p>
            The confirmed feature sequence for MEOK Launch Week:
          </p>
          <ul
            className="list-none space-y-2 pl-0"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {[
              "Monday: Visual companion environment (PixiJS) — your AI has a face",
              "Tuesday: Gaming OS integration — Riot Games, Steam, Discord live",
              "Wednesday: Family Guardian dashboard — child safety, parent oversight",
              "Thursday: Ralph Mode — autonomous task agent goes public beta",
              "Friday: Sovereign Terminal — keyboard-driven power user interface",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Each feature gets one short video, one blog post, and one X thread. The threads link
            back to the waitlist. Every day compounds the previous day&apos;s momentum.
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
            How is MEOK positioned against OpenClaw?
          </h2>
          <p>
            OpenClaw proved that 328,000 people want open AI orchestration. The demand is real and
            validated. But Cisco&apos;s security research found data exfiltration vectors in
            third-party OpenClaw skills. China banned it for government use. The EU is scrutinising
            it under AI Act Article 52 disclosure obligations.
          </p>
          <p>
            MEOK is the safe, governed, care-based layer that OpenClaw cannot become. OpenClaw&apos;s
            architecture is plugin-first — extensibility is the product. MEOK&apos;s architecture is
            care-first — governance is the product. You cannot bolt a Maternal Covenant onto a
            plugin store after the fact. It has to be constitutional from day one.
          </p>
          <p>
            The positioning is clear: MEOK is what you use when you want the power of open AI
            orchestration without the governance liability. That message lands with parents,
            enterprise buyers, and regulated industries — the three segments that OpenClaw&apos;s
            architecture cannot serve credibly.
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
            What is MEOK&apos;s revenue model?
          </h2>
          <p>
            Freemium with a hybrid subscription and usage overage structure — the model RevenueCat
            data shows is 3&times; more profitable per user than pure subscription at scale.
          </p>
          <div
            className="rounded-2xl p-6 my-6 space-y-3"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {[
              { tier: "Explorer", price: "Free", desc: "50 messages/day, 1 companion, 7-day memory" },
              { tier: "BYOK", price: "£5/mo", desc: "Bring your own API keys, full platform access" },
              { tier: "Sovereign", price: "£12/mo", desc: "Unlimited messages, permanent memory, all models" },
              { tier: "Family", price: "£29/mo", desc: "Up to 5 companions, Guardian dashboard, Family OS" },
            ].map(({ tier, price, desc }) => (
              <div key={tier} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20">
                  <span className="text-xs font-black" style={{ color: "#c9a84c" }}>{tier}</span>
                </div>
                <div className="flex-shrink-0 w-16">
                  <span className="text-xs font-bold text-white">{price}</span>
                </div>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</span>
              </div>
            ))}
          </div>
          <p>
            Phase 4 adds a creator marketplace with a 70/30 revenue split — MEOK keeps 30%,
            creators keep 70%. Every personality template, every specialised archetype, every
            domain-specific integration becomes a revenue-generating asset in the marketplace.
            The platform flywheel closes.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The first 1,000 are the only ones who matter. They define the culture, the use cases,
              and the word-of-mouth that no growth budget can buy. If you want to be among them,
              the waitlist is open.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2F90-day-gtm&text=How+MEOK+plans+to+win+1%2C000+early+adopters+in+90+days"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2F90-day-gtm"
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
              Join the first 1,000
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Be part of the founding cohort
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Early adopters shape the product — what archetypes get built, which integrations
              ship first, and how the Maternal Covenant evolves. The waitlist is open now.
            </p>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Join the first 1,000
              <ArrowRight className="w-4 h-4" />
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
              href="/blog/open-source-release"
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
                Open Source
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Why we open-sourced the MEOK character SDK
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                4 min read
              </div>
            </Link>
            <Link
              href="/blog/what-is-sovereign-ai"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                What Is Sovereign AI?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
