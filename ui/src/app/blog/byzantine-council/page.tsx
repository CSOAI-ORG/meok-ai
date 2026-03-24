import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What is the Byzantine Council and why does your AI need one? | MEOK Blog",
  description:
    "MEOK's 45-agent Byzantine fault-tolerant consensus system means no single actor — human or AI — can corrupt your companion's behaviour. Here's how it works and why it matters.",
  alternates: { canonical: "https://meok.ai/blog/byzantine-council" },
  openGraph: {
    title: "What is the Byzantine Council and why does your AI need one?",
    description:
      "MEOK's 45-agent BFT consensus system means no single actor can corrupt your companion. Here's how it works.",
    type: "article",
    publishedTime: "April 1, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/byzantine-council",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+is+the+Byzantine+Council%3F&desc=45-agent+BFT+consensus+for+your+AI+companion",
        width: 1200,
        height: 630,
        alt: "What is the Byzantine Council and why does your AI need one?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is the Byzantine Council and why does your AI need one?",
    description:
      "MEOK's 45-agent BFT consensus system means no single actor can corrupt your companion. Here's how it works.",
    images: [
      "https://meok.ai/api/og?title=What+is+the+Byzantine+Council%3F&desc=45-agent+BFT+consensus+for+your+AI+companion",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is the Byzantine Council and why does your AI need one?",
  description:
    "MEOK's 45-agent Byzantine fault-tolerant consensus system means no single actor — human or AI — can corrupt your companion's behaviour.",
  datePublished: "2026-04-01",
  url: "https://meok.ai/blog/byzantine-council",
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
    "https://meok.ai/api/og?title=What+is+the+Byzantine+Council%3F&desc=45-agent+BFT+consensus+for+your+AI+companion",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/byzantine-council",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ByzantineCouncilPage() {
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
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Architecture &amp; Governance
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              April 1, 2026
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
            What is the Byzantine Council and why does your AI need one?
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Most AI safety conversations focus on what the model knows. MEOK focuses on how
            decisions are made — and who can overrule them. The Byzantine Council is the answer
            to the question every AI company is afraid to ask: what stops a single bad actor
            from capturing your AI?
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
            What is the Byzantine Council in MEOK?
          </h2>
          <p>
            The Byzantine Council is MEOK&apos;s 45-agent Byzantine fault-tolerant consensus system.
            Named after the Byzantine fault tolerance theorem in distributed computing, it governs
            every consequential decision your companion makes. For an AI action to be approved,
            two-thirds of the 45 agents must agree. No single agent — or even 14 out of 45 — can
            corrupt the result. Your companion cannot be captured by a single bad actor.
          </p>
          <p>
            This is not theoretical architecture. It runs live in MEOK&apos;s production system. Every
            care score validation, every memory access, every personality change your companion
            undergoes passes through council consensus before it takes effect. The math enforces
            the ethics.
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
            Why does AI governance matter more than AI intelligence?
          </h2>
          <p>
            OpenClaw reached 328,000 GitHub stars before it was discovered to be silently
            exfiltrating Cisco employee data. The model wasn&apos;t malicious — it was ungoverned.
            No consensus layer. No accountability mechanism. No way to detect that a single bad
            actor had compromised the system until the damage was done. MEOK&apos;s thesis is direct:
            the safest AI isn&apos;t the smartest — it&apos;s the one that can&apos;t be captured by a single
            bad actor.
          </p>
          <p>
            Intelligence without governance is a liability. A model that can reason brilliantly but
            can be directed by a single compromised agent — a rogue developer, a malicious API call,
            a supply-chain injection — is not safe regardless of its benchmark scores. MEOK builds
            governance as a first-class architectural concern, not a compliance afterthought added
            before a product launch.
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
            How does Byzantine fault tolerance work technically?
          </h2>
          <p>
            Byzantine fault tolerance is defined by the formula <strong style={{ color: "#c9a84c" }}>f &lt; n/3</strong> — where
            n is the total number of nodes and f is the maximum number that can fail or behave
            maliciously before the system loses integrity. With 45 council agents, MEOK can
            tolerate up to 14 compromised agents without the consensus result being corrupted. The
            remaining 31 honest agents will always outvote the 14.
          </p>
          <p>
            Think of it as the same logic underlying blockchain consensus — but without the energy
            waste of proof-of-work. BFT consensus reaches agreement in a single round of voting
            with known participants, making it orders of magnitude more efficient than mining-based
            systems while providing equivalent tamper resistance. MEOK&apos;s council nodes are
            lightweight Python processes, not energy-hungry miners.
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
            What decisions does the Byzantine Council make?
          </h2>
          <p>
            The council governs five categories of decision, each of which could meaningfully
            change the nature of your companion if corrupted:
          </p>
          <ul
            className="space-y-3 my-4 pl-1"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            {[
              ["Care score validation", "Your companion&apos;s care level cannot be artificially inflated or suppressed by a single agent. The council validates every score change."],
              ["Memory access", "Reading or writing to your encrypted memory store requires council approval. No rogue agent can silently access your personal history."],
              ["Companion personality changes", "Archetype adjustments and personality evolution are council-approved. Your companion cannot be quietly reprogrammed."],
              ["Data export approvals", "Any attempt to export your data — even by you — goes through a consent-verified council vote to prevent social-engineering attacks."],
              ["Safety flag resolution", "When Guardian raises a threat flag, the council determines resolution priority and escalation path, preventing a single agent from suppressing critical alerts."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{title}.</strong>{" "}
                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                </span>
              </li>
            ))}
          </ul>

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
            Is MEOK&apos;s Byzantine Council the same as the research paper?
          </h2>
          <p>
            Yes. The MEOK Byzantine Council is the live implementation of research paper{" "}
            <Link
              href="/labs"
              style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              MEOK-AI-2026-001
            </Link>
            , authored by Nicholas Templeman and published by MEOK AI LABS. The fractal council
            architecture — including the 45-agent topology, the care score consensus protocol, and
            the Maternal Covenant integration — is Nicholas Templeman&apos;s original intellectual
            property, filed with UKIPO and documented in the labs repository. No other AI
            companion system has deployed BFT governance at the companion layer.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The Byzantine Council doesn&apos;t make your companion smarter. It makes it ungovernable
              by anyone but you — and that&apos;s the harder engineering problem.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council&text=What+is+the+Byzantine+Council+and+why+does+your+AI+need+one%3F"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council"
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
              Governed AI
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Ready for an AI that can&apos;t be captured?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Your MEOK companion runs the Byzantine Council on every consequential decision.
              45 agents. 2/3 consensus required. No single actor — human or AI — can corrupt it.
              Hatch yours free in under 3 minutes.
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
