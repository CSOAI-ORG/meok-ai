import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK Goes Open Source: What FSL 1.1 Means for AI Sovereignty | MEOK Blog",
  description:
    "MEOK AI LABS is open-sourcing its character SDK and MCP server toolkit under FSL 1.1. Here's why this matters for the future of personal AI.",
  alternates: { canonical: "https://meok.ai/blog/open-source-release" },
  openGraph: {
    title: "MEOK Goes Open Source: What FSL 1.1 Means for AI Sovereignty",
    description:
      "MEOK AI LABS is open-sourcing its character SDK and MCP server toolkit under FSL 1.1. Here's why this matters for the future of personal AI.",
    type: "article",
    publishedTime: "March 23, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/open-source-release",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Goes+Open+Source&desc=FSL+1.1+and+the+future+of+personal+AI.",
        width: 1200,
        height: 630,
        alt: "MEOK Goes Open Source: FSL 1.1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Goes Open Source: What FSL 1.1 Means for AI Sovereignty",
    description:
      "MEOK AI LABS is open-sourcing its character SDK and MCP server toolkit under FSL 1.1. Here's why this matters for the future of personal AI.",
    images: [
      "https://meok.ai/api/og?title=MEOK+Goes+Open+Source&desc=FSL+1.1+and+the+future+of+personal+AI.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK Goes Open Source: What FSL 1.1 Means for AI Sovereignty",
  description:
    "MEOK AI LABS is open-sourcing its character SDK and MCP server toolkit under FSL 1.1. Here's why this matters for the future of personal AI.",
  datePublished: "2026-03-23",
  url: "https://meok.ai/blog/open-source-release",
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
    "https://meok.ai/api/og?title=MEOK+Goes+Open+Source&desc=FSL+1.1+and+the+future+of+personal+AI.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/open-source-release",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OpenSourceReleasePage() {
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
              Open Source
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 23, 2026
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
            MEOK Goes Open Source: What FSL&nbsp;1.1 Means for AI Sovereignty
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Today MEOK AI LABS is releasing its character SDK, MCP server toolkit, and
            Byzantine Council consensus algorithm under the Functional Source License 1.1.
            Here is what we are releasing, why we chose FSL, and what it means for developers
            building personal AI.
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
            What is MEOK releasing as open source?
          </h2>
          <p>
            Three components are being released today. The character SDK contains the
            personality engine, voice profiles, and archetype framework that powers every
            MEOK companion. The MCP server toolkit provides the Model Context Protocol
            integrations that allow companions to connect to calendars, task managers, and
            external data sources. The Byzantine Council consensus algorithm is Nicholas
            Templeman&apos;s Byzantine Fault Tolerant approach to multi-agent AI decision-making.
            All three are available on GitHub under FSL 1.1.
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
            What is the Functional Source License 1.1?
          </h2>
          <p>
            FSL 1.1, used by Sentry and HashiCorp among others, occupies the space between
            fully proprietary and fully open. It prohibits competitors from selling the same
            functionality as their primary offering — protecting the commercial viability of
            the original creator — while permitting personal use and non-competing commercial
            use immediately. Critically, FSL 1.1 automatically converts to Apache 2.0 after
            two years. Everything we release today will be unconditionally open source
            by 2028.
          </p>
          <p>
            We chose FSL over MIT or Apache 2.0 because we want the ecosystem to grow, but we
            also need to be able to sustain the people building it. Pure open source with no
            commercial protection has killed many projects that could have been important.
            FSL is the honest version of &ldquo;we&apos;re open but we also need to survive.&rdquo;
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
            Why open source the Byzantine Council algorithm?
          </h2>
          <p>
            The Byzantine Council algorithm is the mechanism by which MEOK&apos;s council of AI
            agents reaches consensus on complex decisions — including decisions about your
            care score, task prioritisation, and companion evolution. It is a genuine
            contribution to the field of AI safety, not a marketing asset. We believe more
            implementations mean better research, more scrutiny, and faster improvements to
            the underlying approach.
          </p>
          <p>
            Nicholas spent eighteen months developing and refining this algorithm. Keeping it
            proprietary would have protected a short-term competitive advantage. Open-sourcing
            it creates a long-term contribution to an area — multi-agent consensus with care
            constraints — that the field genuinely needs. That trade-off seemed obvious.
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
            How can I contribute to MEOK?
          </h2>
          <p>
            GitHub contributions are welcome across four areas: new character archetypes
            (personality profiles for the companion engine), MCP server integrations
            (connecting companions to new data sources and tools), translations (the companion
            system currently supports English, with French, German, Spanish, and Japanese
            planned), and accessibility improvements (screen reader support, keyboard
            navigation, high-contrast modes). Bounties are available for top contributors —
            see the GitHub discussions board for active bounty listings. Join the Discord
            to coordinate with other contributors before starting larger pieces of work.
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
            Will MEOK always be open source?
          </h2>
          <p>
            Core algorithms and SDKs remain open forever — Apache 2.0 by 2028 at the latest,
            and FSL 1.1 with immediate personal and non-competing commercial use from today.
            The hosted service, advanced features, and infrastructure will remain proprietary
            because they are how we fund the people writing the open-source code. This is the
            Sentry model: trust through transparency on the things that matter most, commercial
            sustainability on the things that require ongoing investment.
          </p>
          <p>
            We are not open-sourcing MEOK as a marketing exercise. We are open-sourcing it
            because the question of how AI systems make decisions that affect people&apos;s lives
            is too important to keep inside a single company. Scrutiny makes it better.
            Collaboration makes it faster. And the Apache 2.0 conversion guarantee means
            you never have to take our word for it — you just have to wait two years.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The code is on GitHub. The companion is waiting to hatch. Both exist because
              one person got tired of AI that neither remembered him nor explained itself.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fopen-source-release&text=MEOK+Goes+Open+Source%3A+What+FSL+1.1+Means+for+AI+Sovereignty"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fopen-source-release"
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
              Open Source
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Read the code. Fork it. Build with it.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              The character SDK, MCP server toolkit, and Byzantine Council algorithm are live
              on GitHub under FSL 1.1. Contributions welcome. Bounties available.
            </p>
            <Link
              href="/open-source"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              View on GitHub
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
              href="/blog/byzantine-council-explained"
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
                Technology
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                The Byzantine Council: How MEOK&apos;s AI Agents Reach Consensus
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                6 min read
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
