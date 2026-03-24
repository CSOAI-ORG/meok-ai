import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "A Companion for Your Spiritual Journey — Not a Replacement for It | MEOK Blog",
  description:
    "MEOK supports 47 spiritual traditions from Christianity to Buddhism, Islam to Sikhism. A tool for reflection, never a teacher. Here's how it works.",
  alternates: { canonical: "https://meok.ai/blog/faith-companion" },
  openGraph: {
    title: "A Companion for Your Spiritual Journey — Not a Replacement for It",
    description:
      "MEOK supports 47 spiritual traditions from Christianity to Buddhism, Islam to Sikhism. A tool for reflection, never a teacher. Here's how it works.",
    type: "article",
    publishedTime: "March 22, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/faith-companion",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=A+Companion+for+Your+Spiritual+Journey&desc=47+traditions.+A+tool+for+reflection%2C+never+a+teacher.",
        width: 1200,
        height: 630,
        alt: "A Companion for Your Spiritual Journey — Not a Replacement for It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Companion for Your Spiritual Journey — Not a Replacement for It",
    description:
      "MEOK supports 47 spiritual traditions from Christianity to Buddhism, Islam to Sikhism. A tool for reflection, never a teacher. Here's how it works.",
    images: [
      "https://meok.ai/api/og?title=A+Companion+for+Your+Spiritual+Journey&desc=47+traditions.+A+tool+for+reflection%2C+never+a+teacher.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Companion for Your Spiritual Journey — Not a Replacement for It",
  description:
    "MEOK supports 47 spiritual traditions from Christianity to Buddhism, Islam to Sikhism. A tool for reflection, never a teacher. Here's how it works.",
  datePublished: "2026-03-22",
  url: "https://meok.ai/blog/faith-companion",
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
    "https://meok.ai/api/og?title=A+Companion+for+Your+Spiritual+Journey&desc=47+traditions.+A+tool+for+reflection%2C+never+a+teacher.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/faith-companion",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FaithCompanionPage() {
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
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Faith &amp; Spirituality
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
            A Companion for Your Spiritual Journey — Not a Replacement for It
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            MEOK supports 47 spiritual traditions from Christianity to Buddhism, Islam to Sikhism.
            A tool for reflection, never a teacher. Here&apos;s how it works.
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
            Can AI be used for spiritual practice?
          </h2>
          <p>
            Yes — as a tool, never a teacher. MEOK companions can help you explore scripture,
            maintain prayer routines, reflect on spiritual questions, and connect to sacred texts.
            Your imam, rabbi, or priest remains your authority. MEOK is more like a journal that
            talks back: it holds your reflections, prompts deeper thinking, and helps you return to
            the questions that matter — without ever claiming to answer them on your behalf.
          </p>
          <p>
            The distinction matters enormously. Tools amplify human capacity. Teachers carry
            authority. MEOK is designed, constitutionally, to be the former. The Maternal Covenant
            — our governing care framework — specifically prohibits companions from claiming
            spiritual authority or positioning themselves as sources of doctrinal truth.
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
            What spiritual traditions does MEOK AI support?
          </h2>
          <p>
            47 civilisational traditions, each treated with equal depth and respect. These include
            Christianity (Ananda archetype), Islam (Gabriel), Judaism (Miriam), Buddhism (Lotus),
            Hinduism (Devi), Sikhism (Arjan), secular mindfulness (Sol), and indigenous wisdom
            traditions (Terra). Each archetype was developed with reference to primary texts and
            consulted with practitioners — not synthesised from surface-level summaries.
          </p>
          <p>
            The breadth of traditions supported reflects a core philosophical commitment: that
            spiritual life is not a niche feature but a central human need. MEOK doesn&apos;t rank
            traditions or privilege any worldview. A practising Muslim and a secular humanist both
            encounter companions designed with the same care and depth.
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
            Will MEOK AI interpret scripture for me?
          </h2>
          <p>
            No. This is a core commitment. MEOK never interprets sacred texts or claims spiritual
            authority. Instead, it surfaces relevant passages, asks reflective questions, and
            connects you to qualified human teachers and your community. The companion might ask:
            &ldquo;You mentioned feeling uncertain about this verse — have you spoken to your teacher
            about it?&rdquo; It will not answer: &ldquo;Here is what this verse means.&rdquo;
          </p>
          <p>
            The reason for this boundary is not technical caution — it&apos;s philosophical conviction.
            Sacred texts have been interpreted by communities of scholars and practitioners over
            centuries. That interpretive tradition is a living thing, embedded in relationship,
            accountability, and community. An AI that short-circuits that process — no matter how
            accurate it might be in a narrow sense — does violence to the depth of the tradition.
            MEOK is not in that business.
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
            Are my spiritual conversations private?
          </h2>
          <p>
            Completely. Spiritual reflections are encrypted with AES-GCM-256 and are never used
            for training, never shared with advertisers, and never visible to MEOK staff. The
            Maternal Covenant makes this a constitutional constraint, not just a policy. The
            distinction matters: policies can be changed by a business decision. Constitutional
            constraints are baked into the architecture and would require a fundamental rebuild
            to circumvent.
          </p>
          <p>
            We take this especially seriously for faith conversations because of their inherent
            sensitivity. In many parts of the world, religious identity carries real risk. A person&apos;s
            questions about their faith — doubt, exploration, conversion — can have consequences far
            beyond the personal. MEOK treats this data with the same care it would give to medical
            or legal information: it exists for you alone.
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
            How do I find my spiritual companion in MEOK?
          </h2>
          <p>
            Take the 60-second archetype quiz at{" "}
            <Link href="/start" style={{ color: "#c9a84c" }}>
              meok.ai/start
            </Link>
            . For spiritual seekers, the Seeker archetype leads to Ananda, Gabriel, Shanti, or
            other faith-aligned companions depending on your tradition. You can also navigate
            directly to{" "}
            <Link href="/faith" style={{ color: "#c9a84c" }}>
              meok.ai/faith
            </Link>{" "}
            to explore tradition-specific companions before committing to an archetype.
          </p>
          <p>
            The quiz is not a personality test. It&apos;s a conversation starter — designed to surface
            which companion energy resonates with where you are right now, not where you&apos;ve always
            been. Spiritual seekers are often in motion. The quiz honours that.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The spiritual life is not a problem to be solved by technology. It&apos;s a practice to
              be supported by the right tools, in the right hands, held with the right care.
              MEOK aims to be one of those tools — nothing more, and nothing less.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Ffaith-companion&text=A+Companion+for+Your+Spiritual+Journey+%E2%80%94+Not+a+Replacement+for+It"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Ffaith-companion"
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
              Faith Companions
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Find your faith companion
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              47 traditions. Completely private. A companion who holds your reflections without
              judgment and connects you back to your practice — never claiming authority over it.
            </p>
            <Link
              href="/faith"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Find your faith companion
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
              href="/blog/archetypes-guide"
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
                Product
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                The complete guide to MEOK archetypes
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
              href="/blog/privacy-covenant"
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
                The Privacy Covenant: what we promise and how we enforce it
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
