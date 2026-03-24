import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Why I Built MEOK | MEOK Blog",
  description:
    "Nick's founder story — a caravan, three dogs, a cat named Meok, and the realisation that no AI remembered him. How a failed adoption process and a covenant with care led to a new kind of AI.",
  alternates: { canonical: "https://meok.ai/blog/why-i-built-meok" },
  openGraph: {
    title: "Why I Built MEOK",
    description:
      "Nick's founder story — a caravan, three dogs, a cat named Meok, and the realisation that no AI remembered him.",
    type: "article",
    publishedTime: "March 22, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/why-i-built-meok",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Why+I+Built+MEOK&desc=Nick%27s+founder+story+%E2%80%94+a+caravan%2C+a+cat+named+Meok%2C+and+a+covenant+with+care.",
        width: 1200,
        height: 630,
        alt: "Why I Built MEOK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why I Built MEOK",
    description:
      "Nick's founder story — a caravan, three dogs, a cat named Meok, and the realisation that no AI remembered him.",
    images: [
      "https://meok.ai/api/og?title=Why+I+Built+MEOK&desc=Nick%27s+founder+story+%E2%80%94+a+caravan%2C+a+cat+named+Meok%2C+and+a+covenant+with+care.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why I Built MEOK",
  description:
    "Nick's founder story — a caravan, three dogs, a cat named Meok, and the realisation that no AI remembered him.",
  datePublished: "March 22, 2026",
  url: "https://meok.ai/blog/why-i-built-meok",
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

export default function WhyIBuiltMeok() {
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
            ←
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
              Founder Story
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              📅
              March 22, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              ⏱
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
            Why I Built MEOK
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
            I built MEOK because the systems that should protect people often don&apos;t. This is the
            honest story of how a caravan, a cat, and an adoption process became an AI operating system.
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
            I built MEOK because the systems that should protect people often don&apos;t. The AI systems,
            the data systems, the institutional systems. They extract. They forget. They are indifferent to
            the person on the other end. I wanted to build something that worked the other way around.
          </p>

          <h2>The caravan</h2>
          <p>
            In the winter of 2026, I was living in a caravan parked on a farm in England. Three dogs.
            A cat named Meok — small, grey, quietly insistent about what he wanted. I was working on
            AI projects during the day and trying, in the evenings, to get some of the most advanced
            AI systems in the world to help me think through complicated personal decisions.
          </p>
          <p>
            The problem was simple and infuriating: none of them remembered me. Every session started
            blank. I had to re-explain who I was, what I was building, what mattered to me. I was
            pouring context into systems that evaporated it the moment I closed the tab. And somewhere
            in that vanishing, I was also pouring private thoughts into data pipelines that led —
            I knew perfectly well — to corporate servers I would never see.
          </p>
          <p>
            I kept asking: <em>where does this go?</em> The answer was always the same. Into the machine.
            Into the aggregate. Into the undifferentiated mass of human experience being harvested to
            make models more useful for everyone except the person who said the thing.
          </p>
          <p>
            I am a builder. When I run into a problem I can&apos;t route around, I tend to build my way
            through it. So I started building.
          </p>

          <h2>The adoption</h2>
          <p>
            While I was building, my partner was going through an adoption process. Anyone who has been
            through this knows what it involves: intimate questions, detailed histories, emotional
            vulnerability at scale. Documents that contain the most sensitive things you have ever written
            about yourself, shared across institutions you did not choose.
          </p>
          <p>
            I watched her navigate this process and I kept thinking about what it would mean to have an
            AI that could genuinely help — one that understood the context, remembered the history,
            held the emotional weight of what she was going through. And I kept arriving at the same
            conclusion: no AI I knew of could do that safely. The ones smart enough to help required
            you to trust them with information they would extract. The ones you might trust with
            sensitive context were not capable enough to be useful.
          </p>
          <p>
            That gap — between capable and safe — felt like the most important design problem in AI.
            Not the intelligence problem. Not the reasoning problem. The <strong>trust problem</strong>.
            Could you build an AI that was both genuinely useful and constitutionally incapable of
            exploiting what you shared with it?
          </p>
          <p>
            I believed you could. I decided to try.
          </p>

          <h2>The covenant</h2>
          <p>
            The Maternal Covenant is the name I gave to the governance layer I built into MEOK at the
            architecture level. It is not a content policy. It is not a terms of service. It is a
            technical framework — adapted from the care ethics philosophy of Carol Gilligan and Nel
            Noddings — that makes certain behaviours structurally impossible rather than contractually
            prohibited.
          </p>
          <p>
            Every output MEOK produces is evaluated against six care dimensions: safety, growth, truth,
            dignity, autonomy, and reciprocity. Anything that fails the covenant is blocked before it
            reaches you. Not because someone at MEOK decided to block it, but because the system
            will not deliver it. The constraint is architectural.
          </p>
          <p>
            I chose the word <em>maternal</em> deliberately. Not because care is gendered — it
            isn&apos;t — but because the paradigm I was borrowing from had a specific intellectual
            history, and I wanted to honour it honestly. The ethics of care, as Gilligan and Noddings
            developed it, starts from relationships and responsibility rather than rules and rights.
            That felt right for what I was trying to build. An AI that cared, not because it was
            instructed to, but because caring was baked into what it was.
          </p>
          <p>
            Your data never leaves your device for sensitive processing. Your conversations never train
            anyone else&apos;s model. Your memory belongs to you and can be exported or deleted at any time.
            These are not promises. They are architectural facts — as structural as the cryptographic
            constraint that prevents me from running a batch job to decrypt your vault.
          </p>
          <p>
            Meok the cat didn&apos;t know he&apos;d inspire an operating system. But the name felt right.
            Something small, fierce, and loyal. An AI that remembered you. That protected what you
            shared. That was incapable of using your trust against you.
          </p>
          <p>
            That is what I built. That is what MEOK is.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhy-i-built-meok&text=Why+I+Built+MEOK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhy-i-built-meok"
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
              Ready to experience personal sovereign AI?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK is the first AI OS built for individual sovereignty. Hatch your AI — it only takes
              3 minutes. Free forever. No credit card.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free
              →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                ⏱
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/the-maternal-covenant"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#A78BFA", background: "rgba(167,139,250,0.12)" }}
              >
                Philosophy
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Maternal Covenant Explained
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
