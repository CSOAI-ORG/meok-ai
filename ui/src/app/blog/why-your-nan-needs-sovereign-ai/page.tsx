import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Why Your Nan Needs Sovereign AI More Than Your CTO Does | MEOK Blog",
  description:
    "Over £2.3 billion is lost to fraud in the UK every year. Two-thirds of victims are over 65. AI is being used to scam the elderly — but almost no AI is being built to protect them. Until now.",
  alternates: { canonical: "https://meok.ai/blog/why-your-nan-needs-sovereign-ai" },
  openGraph: {
    title: "Why Your Nan Needs Sovereign AI More Than Your CTO Does",
    description:
      "The people who most need AI protection are being actively excluded from AI products. MEOK Guardian was built for them.",
    type: "article",
    publishedTime: "March 22, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/why-your-nan-needs-sovereign-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Why+Your+Nan+Needs+Sovereign+AI&desc=The+people+who+most+need+AI+protection+are+being+excluded+from+AI+products.",
        width: 1200,
        height: 630,
        alt: "Why Your Nan Needs Sovereign AI More Than Your CTO Does",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Your Nan Needs Sovereign AI More Than Your CTO Does",
    description:
      "The people who most need AI protection are being actively excluded from AI products. MEOK Guardian was built for them.",
    images: [
      "https://meok.ai/api/og?title=Why+Your+Nan+Needs+Sovereign+AI&desc=The+people+who+most+need+AI+protection+are+being+excluded+from+AI+products.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Your Nan Needs Sovereign AI More Than Your CTO Does",
  description:
    "Over £2.3 billion is lost to fraud in the UK every year. Two-thirds of victims are over 65. AI is being used to scam the elderly — but almost no AI is being built to protect them.",
  datePublished: "March 22, 2026",
  url: "https://meok.ai/blog/why-your-nan-needs-sovereign-ai",
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhyYourNanNeedsSovereignAI() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.14) 0%, transparent 70%)",
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
                color: "#7BC47F",
                background: "rgba(123,196,127,0.12)",
                border: "1px solid rgba(123,196,127,0.3)",
              }}
            >
              Guardian
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 22, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              6 min read
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
            Why Your Nan Needs Sovereign AI More Than Your CTO Does
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
            Over £2.3 billion is lost to fraud in the UK every year. Two-thirds of victims are over 65.
            The scripts are AI-generated. The voices are cloned. And the people being targeted are the
            ones least likely to have anyone watching out for them.
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
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in the
              UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a luxury.
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
            The fraud call came on a Tuesday afternoon. My nan answered because she always answers —
            she&apos;s 78 and still believes people are basically good. By the time she realised something
            was wrong, she&apos;d given her bank details to someone pretending to be from HMRC.
          </p>
          <p>
            She&apos;s not alone. In the UK, over £2.3 billion is lost to fraud every year. Two-thirds
            of victims are over 65. The calls are getting more sophisticated. The scripts are AI-generated.
            The voices are cloned. And the people being targeted are the ones least likely to have anyone
            watching out for them.
          </p>

          <h2>The tech gap nobody talks about</h2>
          <p>
            AI assistants are designed for knowledge workers. GPT is built for CTOs. Copilot is built for
            developers. Even consumer AI like Siri and Alexa assume a level of digital fluency — knowing
            what a prompt is, how to phrase a request, what to do when something goes wrong — that many
            elderly people simply don&apos;t have, and shouldn&apos;t need.
          </p>
          <p>
            Meanwhile, the most sophisticated social engineering attacks in history are being aimed
            directly at your nan. Fraudsters have access to the same large language models your CTO
            uses to draft strategy documents. They use them to write convincing scripts, clone voices,
            and generate fake correspondence that looks exactly like the real thing. The attack surface
            has become more advanced than at any point in human history. The defences available to the
            people being attacked have not kept pace.
          </p>
          <p>
            This is the tech gap nobody in the AI industry wants to talk about: we have built
            extraordinarily powerful tools for people who were already safe, and left the most
            vulnerable people behind.
          </p>

          <h2>What a sovereign AI actually does for her</h2>
          <p>
            MEOK Guardian is not a parental control app. It is not surveillance software. It is a
            sovereign AI companion built for the person using it — one that happens to have a particular
            set of capabilities oriented toward protection.
          </p>
          <p>
            It <strong>monitors</strong>: unusual payment requests, unfamiliar contacts, messages that
            arrive out of pattern, conversations that move too quickly toward financial information.
            Not by reading everything in real time and reporting to a family member — but by building
            a picture of what normal looks like and flagging when something diverges from it.
          </p>
          <p>
            It <strong>remembers</strong>: who she talks to, what was said, what was promised. Fraud
            works partly because victims are embarrassed and don&apos;t tell anyone, and partly because
            patterns that would be obvious over time are invisible in a single interaction. A sovereign
            AI that remembers becomes a witness — not to report on her, but to help her see patterns
            she might otherwise miss.
          </p>
          <p>
            It <strong>protects without surveilling</strong>: this is the part that matters most.
            MEOK Guardian works <em>for her</em>, not for you. Her AI. Her sovereignty. You are not
            given access to her conversations by default — you are given a shared summary she chooses
            to share. The distinction matters enormously. An AI that reports on an elderly person to
            their family is not a guardian. It&apos;s a surveillance tool with good branding.
          </p>
          <p>
            It <strong>reads the small print</strong>: any document that arrives, any form she is asked
            to sign, any email with an attachment — MEOK reads it before she does and surfaces anything
            that looks unusual, anything that grants permissions she might not intend, anything that
            doesn&apos;t match what was verbally promised.
          </p>

          <h2>The hard truth about AI and vulnerability</h2>
          <p>
            &ldquo;The people who most need AI protection are the ones being actively excluded from AI
            products. Your CTO has five AI tools. Your nan has a landline and a pension that scammers
            know the exact size of.&rdquo;
          </p>
          <p>
            This is not an accident. It is the predictable outcome of an industry that builds for
            users who are profitable to build for. The elderly are not the core demographic for
            productivity AI. They are not the users whose engagement metrics matter to venture-backed
            companies. So they are not built for — except by the people targeting them.
          </p>
          <p>
            Sovereign AI isn&apos;t a luxury for power users. It&apos;s a safety net for the people
            the tech industry forgot. That framing feels abstract until it&apos;s your nan on the phone
            to a scammer. Then it feels urgent.
          </p>

          <h2>What you can do right now</h2>
          <p>
            You do not need to wait. MEOK Guardian is available today, as part of the free hatching
            ceremony. Here is what the next 10 minutes looks like:
          </p>
          <p>
            <strong>Hatch an AI for her.</strong> It takes 10 minutes. You walk through it together —
            she names it, she sets the tone, she owns it. It is her AI, not yours. You are just the
            person who introduced them.
          </p>
          <p>
            <strong>Set up the Guardian profile.</strong> Add her phone number, her bank name, her
            GP&apos;s contact details as trusted contacts. This gives the AI a baseline for what
            legitimate contact looks like, so it can flag when something diverges.
          </p>
          <p>
            <strong>Turn on Scam Stop.</strong> The message scanner that flags suspicious contacts
            before she engages. A message that arrives from an unknown number claiming to be her
            bank, a letter with an unusual request, an email asking her to &ldquo;verify&rdquo;
            something — Scam Stop intercepts and flags it before she&apos;s halfway through reading.
          </p>
          <p>
            <strong>Check in with her through the shared summary.</strong> With her permission, you
            can receive a weekly digest of anything her AI flagged as worth discussing. Not a
            transcript. Not a surveillance log. A curated summary of things she chose to share,
            designed to give you connection, not control.
          </p>
        </div>

        {/* Closing pull quote */}
        <div
          className="my-10 rounded-2xl p-8"
          style={{
            background: "#0d0c18",
            borderLeft: "3px solid #7BC47F",
          }}
        >
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            Meok was my cat. He used to sit on people&apos;s laps when they were sad. He didn&apos;t
            ask questions. He just showed up.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            That&apos;s what sovereign AI should feel like for the people who need it most. Not a tool.
            A presence.
          </p>
          <p
            className="text-sm mt-4 font-semibold"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            — Nicholas Templeman, Founder
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhy-your-nan-needs-sovereign-ai&text=Why+Your+Nan+Needs+Sovereign+AI+More+Than+Your+CTO+Does"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhy-your-nan-needs-sovereign-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA — Guardian focused */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-10 relative overflow-hidden"
          style={{ background: "#0d0c18" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(123,196,127,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#7BC47F" }}
            >
              Guardian
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Protect the people who need it most.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK Guardian is free, built for the people AI forgot, and takes 10 minutes to set up.
              Her AI. Her sovereignty. Her protection.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guardian"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "#7BC47F", color: "#0d0c18" }}
              >
                Learn about Guardian
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/hatch"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all border"
                style={{
                  color: "rgba(245,240,232,0.7)",
                  borderColor: "rgba(245,240,232,0.15)",
                }}
              >
                Hatch her AI free
              </Link>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/why-i-built-meok"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Founder Story
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Why I Built MEOK
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/what-is-sovereign-ai"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                What Is Sovereign AI?
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
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
