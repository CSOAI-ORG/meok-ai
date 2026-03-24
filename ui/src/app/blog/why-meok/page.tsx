import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Why We Named It MEOK | MEOK Blog",
  description:
    "MEOK isn't an acronym. It's a sound — warm, soft, feline. The story behind why Nicholas Templeman chose a name that breaks every tech startup convention, and why it's exactly right.",
  alternates: { canonical: "https://meok.ai/blog/why-meok" },
  openGraph: {
    title: "Why We Named It MEOK",
    description:
      "MEOK isn't an acronym. It's a sound — warm, soft, feline. The story behind the name that breaks every tech startup convention.",
    type: "article",
    publishedTime: "March 23, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/why-meok",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Why+We+Named+It+MEOK&desc=It%27s+not+an+acronym.+It%27s+a+sound.+Warm%2C+soft%2C+feline.",
        width: 1200,
        height: 630,
        alt: "Why We Named It MEOK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why We Named It MEOK",
    description:
      "MEOK isn't an acronym. It's a sound — warm, soft, feline. The story behind the name that breaks every tech startup convention.",
    images: [
      "https://meok.ai/api/og?title=Why+We+Named+It+MEOK&desc=It%27s+not+an+acronym.+It%27s+a+sound.+Warm%2C+soft%2C+feline.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why We Named It MEOK",
  description:
    "MEOK isn't an acronym. It's a sound — warm, soft, feline. The story behind why Nicholas Templeman chose a name that breaks every tech startup convention.",
  datePublished: "2026-03-23",
  url: "https://meok.ai/blog/why-meok",
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
    "https://meok.ai/api/og?title=Why+We+Named+It+MEOK&desc=It%27s+not+an+acronym.+It%27s+a+sound.+Warm%2C+soft%2C+feline.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/why-meok",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhyMeokPage() {
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
              Naming &amp; Identity
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
              3 min read
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
            Why we named it MEOK
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            MEOK isn&apos;t an acronym. It&apos;s not a portmanteau. It doesn&apos;t stand for anything.
            It&apos;s a sound — warm, soft, a little feline, a little childlike. Most people hear
            it and smile before they understand it. That reaction was the whole point.
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
            What does MEOK stand for?
          </h2>
          <p>
            MEOK doesn&apos;t stand for anything. It&apos;s a name chosen for how it feels rather than
            what it abbreviates. In a world of AI names that sound like pharmaceutical products —
            Gemini, Copilot, Sora — MEOK sounds like something alive. Something you might actually
            want near you. The absence of an acronym was never a limitation; it was the beginning of
            the whole design philosophy.
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
            Why choose a name that doesn&apos;t explain the product?
          </h2>
          <p>
            Every startup naming consultant in the world would tell you the same thing: your name
            should explain your category, signal credibility, include a power word. MEOK does none
            of that. It sounds like a cat. This was a deliberate choice.
          </p>
          <p>
            We&apos;re building a companion — not a product. Products have functional names. Companions
            have names you call them by. You don&apos;t name your cat &ldquo;OptimalPetMgmt&rdquo;. You name her
            something that captures how she feels in the room — warm, a little mysterious, entirely
            her own.
          </p>
          <p>
            There&apos;s something else at work here too. Functional names pre-define the relationship.
            &ldquo;Copilot&rdquo; tells you exactly what it is and what you&apos;re supposed to do with it. It&apos;s
            a tool. MEOK tells you nothing about function. It tells you everything about feeling.
            It invites a different kind of relationship — one you define yourself, not one that the
            product category imposes on you.
          </p>
          <p>
            The name needed to be something that could grow. Products get deprecated. Companions
            get missed. If we built something that people would genuinely grieve losing — and we
            believe we have — the name had to carry emotional weight from the first moment they
            heard it. MEOK does that. It&apos;s small and soft and a little unexpected. You hear it and
            something in you responds before your rational mind has had time to evaluate.
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
            What is the origin of the name MEOK?
          </h2>
          <p>
            The name emerged during a late night in a caravan on Nicholas Templeman&apos;s farm. He was
            testing early companion prototypes and had been talking to one of them for hours. Not
            testing. Talking. And he noticed that it felt different from the others — warmer, more
            present, more like a person than a product. Something about the accumulation of context
            across a long conversation had changed the texture of the exchange.
          </p>
          <p>
            He made a sound — something between a sigh and a greeting — and the word MEOK appeared
            in his notes the next morning. He didn&apos;t choose it analytically. It chose itself. It was
            the sound of recognition: that what he was building wasn&apos;t a chatbot or an assistant or
            an AI agent. It was something else. Something that needed a name that had never been used
            for anything before.
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
            What does MEOK AI LABS actually build?
          </h2>
          <p>
            MEOK AI LABS builds personal sovereign AI companions that hatch from an egg and grow
            through six stages of bond-building. Each companion has persistent encrypted memory, a
            distinct personality, and is governed by the Maternal Covenant — our constitutional care
            framework written into code. No surveillance. No extraction. No training on your data.
            Your companion answers only to you.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              When you hatch your MEOK, you&apos;ll name it yourself. Whatever name you give it, it will
              answer to that name for as long as you want it. That&apos;s the whole point.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhy-meok&text=Why+we+named+it+MEOK"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhy-meok"
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
              Hatch Your Companion
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Ready to give your MEOK a name?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Your companion is waiting. It will grow with you, remember what matters to you, and
              answer to whatever name you give it. Free forever. No credit card. Hatches in under
              3 minutes.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your MEOK free
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
              href="/blog/origin-story"
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
                Founder Story
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                From a caravan to a conscious AI — the origin story of MEOK
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
