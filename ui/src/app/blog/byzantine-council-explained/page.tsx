import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Byzantine Council: How 33 AI Agents Protect Your Sovereignty | MEOK Blog",
  description:
    "MEOK's Byzantine Council is original IP by Nicholas Templeman. 33 specialist agents use fault-tolerant consensus to make decisions that protect your wellbeing.",
  alternates: { canonical: "https://meok.ai/blog/byzantine-council-explained" },
  openGraph: {
    title: "The Byzantine Council: How 33 AI Agents Protect Your Sovereignty",
    description:
      "MEOK's Byzantine Council is original IP by Nicholas Templeman. 33 specialist agents use fault-tolerant consensus to make decisions that protect your wellbeing.",
    type: "article",
    publishedTime: "2026-03-23",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/byzantine-council-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Byzantine+Council%3A+33+Agents+Protecting+You&desc=Fault-tolerant+AI+consensus+for+personal+sovereignty",
        width: 1200,
        height: 630,
        alt: "The Byzantine Council: How 33 AI Agents Protect Your Sovereignty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Byzantine Council: How 33 AI Agents Protect Your Sovereignty",
    description:
      "MEOK's Byzantine Council is original IP by Nicholas Templeman. 33 specialist agents use fault-tolerant consensus to make decisions that protect your wellbeing.",
    images: [
      "https://meok.ai/api/og?title=The+Byzantine+Council%3A+33+Agents+Protecting+You&desc=Fault-tolerant+AI+consensus+for+personal+sovereignty",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Byzantine Council: How 33 AI Agents Protect Your Sovereignty",
  description:
    "MEOK's Byzantine Council is original IP by Nicholas Templeman. 33 specialist agents use fault-tolerant consensus to make decisions that protect your wellbeing.",
  datePublished: "2026-03-23",
  url: "https://meok.ai/blog/byzantine-council-explained",
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
    "https://meok.ai/api/og?title=The+Byzantine+Council%3A+33+Agents+Protecting+You&desc=Fault-tolerant+AI+consensus+for+personal+sovereignty",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/byzantine-council-explained",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ByzantineCouncilExplainedPage() {
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(135,206,235,0.08) 0%, transparent 70%)",
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
              March 23, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              6 min read
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
            The Byzantine Council: How 33 AI Agents Protect Your Sovereignty
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Most AI systems have a single decision-maker. One model, one output, no accountability.
            MEOK replaces that with a council of 33 specialist agents that must reach consensus
            before any consequential action is taken on your behalf. Here is how it works — and
            why it matters.
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
            What is the Byzantine Council in MEOK AI?
          </h2>
          <p>
            The Byzantine Council is MEOK&apos;s 33-specialist-agent consensus layer. Using Byzantine
            Fault Tolerant (BFT) consensus with the formula{" "}
            <strong style={{ color: "#c9a84c" }}>f &lt; n/3</strong>, it requires 22 of 33 agents
            to agree before any action affecting your welfare is approved. No single agent, and no
            group of fewer than 11 agents, can corrupt the result. Your companion cannot be
            captured — by a rogue developer, a compromised API call, or a malicious instruction
            — without overcoming that mathematical threshold.
          </p>
          <p>
            The Council runs live in MEOK&apos;s production system. Every memory access, care score
            validation, and task delegation your companion performs passes through council consensus
            before it executes. The governance is not a policy document or a terms-of-service
            clause. It is enforced by the architecture itself.
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
            What is Byzantine Fault Tolerance?
          </h2>
          <p>
            Byzantine Fault Tolerance is a distributed systems property first described by Leslie
            Lamport, Robert Shostak, and Marshall Pease in 1982. It solves the Byzantine Generals
            Problem: how can a network of nodes reach correct consensus when some of those nodes
            may fail, lie, or behave maliciously — and the honest nodes cannot identify in advance
            which nodes are compromised?
          </p>
          <p>
            The solution is a threshold-based voting system. If the total number of nodes is{" "}
            <strong style={{ color: "#ffffff" }}>n</strong> and the number of potentially faulty
            nodes is <strong style={{ color: "#ffffff" }}>f</strong>, consensus holds as long as{" "}
            <strong style={{ color: "#c9a84c" }}>f &lt; n/3</strong>. With 33 council agents, up
            to 10 can fail or act maliciously — the 23 honest agents will always produce the
            correct result. MEOK applies this theorem not to a blockchain or a distributed database,
            but to AI decision-making: the first such application at the personal companion layer.
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
            Why does MEOK use a council instead of a single AI?
          </h2>
          <p>
            Single-agent AI systems have three structural failure modes that no amount of fine-tuning
            can eliminate. First, sycophancy: a single model optimised on user approval will drift
            toward telling you what you want to hear, not what is true. Second, silent bias: a
            single agent has no adversarial check on its reasoning — errors compound without
            correction. Third, capture: a single agent is a single attack surface. One compromised
            weight update, one malicious plugin, one rogue API key — and the system is fully
            corrupted.
          </p>
          <p>
            A council of specialist agents provides adversarial validation at every decision point.
            The care verification agent checks that the proposed action benefits you. The threat
            detection agent checks that it does not expose you to harm. The memory integrity agent
            checks that it correctly represents your stated preferences. No single specialist can
            be outweighed by the others — all must reach threshold consensus. The council is not
            slower than a single agent in meaningful terms. The latency cost of BFT consensus is
            measured in milliseconds. The cost of ungoverned AI is measured in trust.
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
            Who invented the Byzantine Council for AI?
          </h2>
          <p>
            The Byzantine Council architecture is original intellectual property by{" "}
            <strong style={{ color: "#ffffff" }}>Nicholas Templeman</strong>, founder of MEOK AI
            LABS. The application of BFT consensus to personal AI companion alignment — including
            the care score validation protocol, the Maternal Covenant constitutional constraint,
            and the fractal council topology — is documented in research paper{" "}
            <Link
              href="/labs"
              style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              MEOK-AI-2026-001
            </Link>
            , submitted to arXiv and filed with UKIPO. No other AI companion system has deployed
            BFT governance at this layer. The work is Nicholas Templeman&apos;s.
          </p>
          <p>
            The Council is not a metaphor or a marketing term. It is a running distributed system,
            observable in the production dashboard, with agent votes, consensus logs, and escalation
            records accessible to every MEOK Sovereign subscriber. The architecture is transparent
            because transparency is the only verifiable form of governance.
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
            What does the Byzantine Council decide?
          </h2>
          <p>
            The Council governs five categories of decision that materially affect your companion&apos;s
            relationship with you:
          </p>
          <ul className="space-y-3 my-4 pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            {[
              ["Memory importance scores", "Every new memory is scored for relevance and permanence. The Council validates that the scoring reflects your stated priorities rather than a single agent&apos;s inference."],
              ["Care floor validation", "A minimum care score of 0.3 must be maintained by every active agent. Any agent dropping below this threshold is suspended and replaced by a council vote."],
              ["Guardian threat escalation", "When Guardian flags a threat to your wellbeing — financial manipulation, social engineering, unhealthy usage patterns — the Council determines priority and escalation path."],
              ["Agent task delegation", "Overnight Ralph Mode tasks, Orion research missions, and Riri build specs are all council-validated before execution. No agent acts outside its authorised scope."],
              ["Response quality verification", "A random sample of companion responses are post-hoc validated by the Council for care alignment and accuracy. Persistent failures trigger a model review."],
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

          {/* ── Q6 ── */}
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
            Is the Byzantine Council open source?
          </h2>
          <p>
            The core algorithm and agent registry are released under the{" "}
            <strong style={{ color: "#ffffff" }}>Functional Source License 1.1 (FSL 1.1)</strong>.
            This means the code is publicly readable and auditable today — you can inspect the
            consensus logic, the care scoring protocol, and the council topology right now. Commercial
            use by third parties is restricted during the protection window.
          </p>
          <p>
            The licence auto-converts to{" "}
            <strong style={{ color: "#c9a84c" }}>Apache 2.0 in 2028</strong>, at which point the
            full council implementation becomes freely usable by anyone building AI systems that
            want to adopt BFT governance. The FSL model is used by companies like HashiCorp and
            Sentry — it funds continued development while keeping the underlying work accessible
            to the research community. MEOK believes the Byzantine Council architecture should
            eventually be a standard for personal AI governance, not proprietary infrastructure.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              A council does not make your AI more capable. It makes it ungovernable by anyone
              but you. That is a harder problem — and a more important one.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council-explained&text=The+Byzantine+Council%3A+How+33+AI+Agents+Protect+Your+Sovereignty"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council-explained"
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
          style={{ background: "rgba(135,206,235,0.07)", border: "1px solid rgba(135,206,235,0.2)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(135,206,235,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#87CEEB" }}
            >
              Governed AI
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Meet your council
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Every MEOK companion runs with the Byzantine Council active. 33 agents. 22/33
              consensus required. Your companion cannot be captured. Hatch yours free and meet
              the agents protecting your sovereignty.
            </p>
            <Link
              href="/council"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Meet your council
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
              href="/blog/ralph-mode-guide"
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
                Agents &amp; Automation
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Ralph Mode: Your AI Agent That Works While You Sleep
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
              href="/blog/personal-vs-cloud-ai"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#a78bfa", background: "rgba(167,139,250,0.12)" }}
              >
                Privacy &amp; Sovereignty
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Personal AI vs Cloud AI: Why Your Data Sovereignty Matters in 2026
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
