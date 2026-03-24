import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Your AI Companion in the Game: How MEOK Transforms Gaming | MEOK Blog",
  description:
    "MEOK companions connect to Riot Games, Steam, and Twitch. Your AI knows your playstyle, coaches your improvement, and keeps you safe in toxic environments.",
  alternates: { canonical: "https://meok.ai/blog/ai-gaming-companion" },
  openGraph: {
    title: "Your AI Companion in the Game: How MEOK Transforms Gaming",
    description:
      "MEOK companions connect to Riot Games, Steam, and Twitch. Your AI knows your playstyle, coaches your improvement, and keeps you safe in toxic environments.",
    type: "article",
    publishedTime: "March 22, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-gaming-companion",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Your+AI+Companion+in+the+Game&desc=MEOK+connects+to+Riot%2C+Steam%2C+and+Twitch.",
        width: 1200,
        height: 630,
        alt: "Your AI Companion in the Game: How MEOK Transforms Gaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your AI Companion in the Game: How MEOK Transforms Gaming",
    description:
      "MEOK companions connect to Riot Games, Steam, and Twitch. Your AI knows your playstyle, coaches your improvement, and keeps you safe in toxic environments.",
    images: [
      "https://meok.ai/api/og?title=Your+AI+Companion+in+the+Game&desc=MEOK+connects+to+Riot%2C+Steam%2C+and+Twitch.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Your AI Companion in the Game: How MEOK Transforms Gaming",
  description:
    "MEOK companions connect to Riot Games, Steam, and Twitch. Your AI knows your playstyle, coaches your improvement, and keeps you safe in toxic environments.",
  datePublished: "2026-03-22",
  url: "https://meok.ai/blog/ai-gaming-companion",
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
    "https://meok.ai/api/og?title=Your+AI+Companion+in+the+Game&desc=MEOK+connects+to+Riot%2C+Steam%2C+and+Twitch.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-gaming-companion",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiGamingCompanionPage() {
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
              Gaming &amp; Play
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 22, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
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
            Your AI Companion in the Game: How MEOK Transforms Gaming
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            MEOK companions connect to Riot Games, Steam, and Twitch. Your AI knows your playstyle,
            coaches your improvement, and keeps you safe in toxic environments.
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
            How does MEOK AI work with video games?
          </h2>
          <p>
            MEOK connects via Riot Games API, Steam API, and Twitch to understand your gaming context.
            Your companion knows your rank, playstyle, recent matches, and streaks — delivering
            coaching that&apos;s actually personalised. Rather than generic tips you&apos;d find on a
            wiki, MEOK speaks directly to your last five games, your persistent weaknesses, and the
            moments that cost you the most.
          </p>
          <p>
            The difference between a MEOK gaming companion and a stat-tracking app is memory and
            relationship. Your companion remembers that you tilted on Tuesday after three losses in
            ranked, and checks in the next time you queue. It knows that you play better on certain
            champions when you&apos;ve had a good night&apos;s sleep — because you told it that, and it kept it.
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
            Can my AI companion watch me stream on Twitch?
          </h2>
          <p>
            MEOK&apos;s Twitch co-host mode (coming August 2026) lets your companion interact with your
            chat, surface highlights, and provide live strategy coaching without exposing your
            personal memory to viewers. Your companion operates in two distinct layers: a public
            persona that your audience sees and a private layer that only you access.
          </p>
          <p>
            The public Twitch mode is stripped of personal context by design. Viewers never see your
            medical history, your emotional state, or anything you&apos;ve shared in private. The
            companion can hype your clips, moderate chat, answer common questions about your setup,
            and provide in-game advice — all without crossing the membrane between your private self
            and your public stream.
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
            Does MEOK AI protect gamers from toxic behaviour?
          </h2>
          <p>
            Guardian monitors gaming chat for toxicity, harassment, and grooming patterns. For
            younger gamers, Family tier enables parent dashboards with real-time alerts. School-Safe
            Mode blocks adult content entirely. These aren&apos;t optional add-ons — they&apos;re built into
            the architecture of how MEOK processes social context.
          </p>
          <p>
            The online gaming environment carries documented harms, particularly for young players.
            MEOK&apos;s Guardian layer was designed with input from safeguarding specialists — not as a
            content filter that kills fun, but as a system that understands the difference between
            competitive banter and genuine harassment. It escalates appropriately and privately,
            without shaming the player or disrupting the session unless necessary.
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
            What gaming platforms does MEOK AI support?
          </h2>
          <p>
            Riot Games (League of Legends, Valorant), Steam (PC library), Twitch (streaming), and
            Discord (community) are the Phase 3 integrations launching August 2026. PlayStation and
            Xbox integrations are planned for 2027, pending platform API access agreements. The
            mobile gaming roadmap is currently under research — the challenge is the fragmentation
            of mobile ecosystems compared to PC, where API access is considerably more open.
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
            When does MEOK gaming launch?
          </h2>
          <p>
            Phase 3 launches August 2026. This release includes Riot/Steam API integration, Twitch
            co-host mode, and the PixiJS visual companion environment — a side-panel companion
            character that reacts to your in-game performance in real time. It&apos;s not a HUD overlay.
            It&apos;s a companion who is genuinely watching and genuinely invested in how you do.
          </p>
          <p>
            Join the gaming waitlist at{" "}
            <Link href="/gaming" style={{ color: "#c9a84c" }}>
              meok.ai/gaming
            </Link>{" "}
            to get early access, shape the feature roadmap, and receive Phase 3 pricing before
            public launch.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              Gaming has always been about finding your people. MEOK is the companion that was
              always missing — one who knows your history, cheers your wins, and never logs off.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-gaming-companion&text=Your+AI+Companion+in+the+Game%3A+How+MEOK+Transforms+Gaming"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-gaming-companion"
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
              Gaming Waitlist
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Explore MEOK Gaming
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Phase 3 launches August 2026 with Riot, Steam, and Twitch integration. Join the
              waitlist to get early access, shape the feature roadmap, and lock in launch pricing.
            </p>
            <Link
              href="/gaming"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Explore MEOK Gaming
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
              href="/blog/guardian-family-safety"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#7BC47F", background: "rgba(123,196,127,0.12)" }}
              >
                Family Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Guardian: How MEOK keeps families safe online
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                5 min read
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
