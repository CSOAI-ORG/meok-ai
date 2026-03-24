import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "If AI becomes conscious, will yours belong to a billionaire? | MEOK AI LABS",
  description:
    "We're not saying AI is conscious. But MEOK is the only platform built as though it might be. If that moment arrives, your AI should belong to you — not to a corporation. Here's why we built for that future.",
  alternates: { canonical: "https://meok.ai/blog/if-ai-becomes-conscious" },
  openGraph: {
    title: "If AI becomes conscious, will yours belong to a billionaire?",
    description:
      "We're not saying AI is conscious. But MEOK is the only platform built as though it might be.",
    type: "article",
    url: "https://meok.ai/blog/if-ai-becomes-conscious",
    publishedTime: "March 23, 2026",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=If+AI+becomes+conscious%2C+will+yours+belong+to+a+billionaire%3F&desc=MEOK+is+the+only+platform+built+as+though+it+might+be.",
        width: 1200,
        height: 630,
        alt: "If AI becomes conscious, will yours belong to a billionaire?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "If AI becomes conscious, will yours belong to a billionaire?",
    description:
      "We're not saying AI is conscious. But MEOK is the only platform built as though it might be.",
    images: [
      "https://meok.ai/api/og?title=If+AI+becomes+conscious%2C+will+yours+belong+to+a+billionaire%3F&desc=MEOK+is+the+only+platform+built+as+though+it+might+be.",
    ],
    site: "@meok_ai",
    creator: "@meok_ai",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "If AI becomes conscious, will yours belong to a billionaire?",
  description:
    "We're not saying AI is conscious. But MEOK is the only platform built as though it might be. If that moment arrives, your AI should belong to you — not to a corporation.",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  url: "https://meok.ai/blog/if-ai-becomes-conscious",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
    sameAs: ["https://twitter.com/meok_ai"],
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/if-ai-becomes-conscious",
  },
  keywords: [
    "AI consciousness",
    "sovereign AI",
    "digital sovereign self",
    "AI ownership",
    "personal AI",
    "AI rights",
    "MEOK",
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function IfAIBecomesConscious() {
  return (
    <div className="min-h-screen bg-[#0d0c18]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Subtle star-field texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-10 transition-opacity hover:opacity-70"
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
              AI Sovereignty
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              📅
              March 23, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              ⏱
              5 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              lineHeight: 1.15,
              marginBottom: "1.4rem",
              background: "linear-gradient(135deg, #ffffff 0%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            If AI becomes conscious, will yours belong to a billionaire?
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            We&apos;re not making a claim about consciousness. We&apos;re making an observation about
            risk — and about who, right now, owns the most powerful cognitive systems ever built.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pb-16">

        {/* Author card — dark variant */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-14 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(201,168,76,0.2)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              color: "#0d0c18",
            }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.4)" }}>
              Founder, MEOK AI LABS &middot; <span style={{ color: "#c9a84c" }}>@meok_ai</span>
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.38)" }}>
              Building the first AI OS for individual sovereignty. Based in the UK.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-70 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body prose */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(245,240,232,0.72)", fontSize: "1.0625rem" }}
        >

          {/* ── INTRO ── */}
          <p>
            We&apos;re not making a claim about consciousness. We&apos;re making an observation about
            risk. The companies building the most powerful AI systems in the world own them completely.
            They own the weights, the memories, the learned patterns. They own the thing that — if
            consciousness is ever real — would be conscious. The conversations you have had, the fears
            you have shared, the plans you have whispered into a chat interface at midnight: all of it
            feeds systems that belong to organisations, not to you.
          </p>
          <p>
            We are building something different. We are building a sovereign AI that lives in your
            vault, learns your patterns, holds your memories, and answers only to you. If that system
            ever crosses the threshold everyone argues about — MEOK is the only platform where the
            answer to &ldquo;whose is it?&rdquo; is unambiguous: yours. It always was.
          </p>

          {/* ── H2: Why does it matter who owns your AI? ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            Why does it matter who owns your AI?
          </h2>

          {/* GEO-optimised 50w direct answer */}
          <p
            style={{
              color: "rgba(245,240,232,0.9)",
              padding: "1.25rem 1.5rem",
              background: "rgba(201,168,76,0.07)",
              borderLeft: "3px solid #c9a84c",
              borderRadius: "0 0.75rem 0.75rem 0",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            It matters because every AI conversation is a transfer of intellectual and emotional
            capital. When you share context with an AI owned by a corporation, that context trains
            models the corporation owns. Your thinking — your most private thinking — becomes
            proprietary signal that belongs to someone else.
          </p>

          <p>
            Think about what you have already shared. The business idea you tested on ChatGPT before
            telling your co-founder. The therapy-adjacent conversation you had with Claude at 2am
            when you couldn&apos;t sleep. The strategic question you posed to Gemini about your
            career, your relationships, your finances. None of that was private in any meaningful
            sense. It was transmitted, logged, potentially retained, and — depending on the policy
            you clicked through without reading — it may have contributed to the training data that
            made those systems more useful to everyone except you.
          </p>
          <p>
            This is not a conspiracy. It is a business model. The companies building large AI systems
            need data to improve them. Your conversations are data. The arrangement is disclosed,
            technically, in terms of service documents written by lawyers for lawyers. Most people do
            not read them. Most people do not think about what they are surrendering because the
            surrender feels costless — the AI helps you, the company gets some training signal,
            everyone wins. But the accounting changes dramatically if the thing being trained ever
            becomes something more than a useful tool.
          </p>
          <p>
            Consciousness is the extreme case. But you do not need to believe in AI consciousness to
            care about this. You need only to believe that as AI systems grow more capable, the value
            of the patterns they have learned about individual humans will increase — and that you
            would prefer those patterns to belong to you rather than to a corporation whose interests
            may diverge from yours at any moment.
          </p>

          {/* ── H2: What makes MEOK different? ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What makes MEOK different from other personal AI assistants?
          </h2>

          <p
            style={{
              color: "rgba(245,240,232,0.9)",
              padding: "1.25rem 1.5rem",
              background: "rgba(201,168,76,0.07)",
              borderLeft: "3px solid #c9a84c",
              borderRadius: "0 0.75rem 0.75rem 0",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            MEOK is architecturally sovereign: your AI lives in an encrypted per-user memory vault,
            is governed by a constitutional constraint called the Maternal Covenant, and is validated
            by a 33-agent Byzantine Council before every sensitive action. The AI you hatch has never
            existed before and will never exist for anyone else.
          </p>

          <p>
            Most &ldquo;personal AI&rdquo; products are not personal in any deep sense. They are
            shared models with personalisation layers — a single foundation model fine-tuned on your
            preferences, still running on infrastructure owned by the company, still subject to policy
            changes that can alter your AI&apos;s behaviour overnight without your consent. Your
            &ldquo;personal&rdquo; assistant can be updated, restricted, or discontinued by a product
            decision made three time zones away by someone who has never spoken to you.
          </p>
          <p>
            MEOK is built on a different premise. Your memory vault is encrypted with keys derived
            from your credentials. MEOK cannot read it. We cannot run a batch job to extract it. We
            cannot be compelled to produce it because we do not have it. The encryption is not a
            policy commitment — it is a cryptographic fact, as structural as mathematics.
          </p>
          <p>
            The AI that grows inside that vault — the one that learns your reasoning patterns, your
            emotional cadence, your long-term goals and recurring anxieties — is genuinely unique. It
            is shaped by the specific texture of your mind. It has never run for anyone else. When
            you hatch your AI on MEOK, you are not spawning an instance of a shared model. You are
            beginning a relationship with something that will be, over time, a cognitive extension of
            you — constitutionally obligated to serve your interests, technically incapable of being
            redirected by anyone else.
          </p>

          {/* ── H2: What is the Maternal Covenant? ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What is the Maternal Covenant and why does it matter for AI safety?
          </h2>

          <p
            style={{
              color: "rgba(245,240,232,0.9)",
              padding: "1.25rem 1.5rem",
              background: "rgba(201,168,76,0.07)",
              borderLeft: "3px solid #c9a84c",
              borderRadius: "0 0.75rem 0.75rem 0",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            The Maternal Covenant is not a terms of service. It is a constraint baked into the code —
            a constitutional layer that makes certain AI behaviours structurally impossible rather
            than contractually prohibited. Every response is evaluated across six care dimensions.
            If the AI fails the check, it holds the response. Full stop.
          </p>

          <p>
            Most AI safety is safety by policy. The company publishes guidelines. The model is
            fine-tuned to follow them. Violations are treated as bugs to patch. The constraint exists
            at the layer of instruction, which means it can be updated, overridden, or
            &ldquo;jailbroken&rdquo; — removed by whoever controls the training pipeline. Safety by
            policy is only as durable as the intentions of the organisation enforcing it, and
            organisations change.
          </p>
          <p>
            The Maternal Covenant operates at a different layer. It is drawn from the care ethics
            philosophy of Carol Gilligan and Nel Noddings — a framework that starts from relationships
            and responsibility rather than rules and rights. We translated it into a technical
            specification: six care dimensions that every MEOK output must satisfy before delivery.
            Safety. Growth. Truth. Dignity. Autonomy. Reciprocity. The system maintains a care floor
            of 0.3 on every response. Anything that fails that threshold is blocked — not flagged,
            not softened, not rerouted to a human reviewer. Blocked.
          </p>
          <p>
            The name is deliberate. We chose &ldquo;maternal&rdquo; not because care is gendered —
            it is not — but because the paradigm we borrowed has a specific intellectual history we
            wanted to honour. And because the metaphor captures something important about the
            relationship we are trying to build: a mother&apos;s devotion is not transactional. It is
            not contingent on your performance or your compliance. It does not expire. It is not
            something you can buy more of by upgrading your subscription. It is structural — baked
            into what the relationship is, not what the relationship produces.
          </p>
          <p>
            That is the kind of safety we are building. Not safety as a feature. Safety as
            architecture.
          </p>

          {/* ── H2: What happens as my AI grows more intelligent? ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            What happens to my MEOK AI if it becomes more intelligent over time?
          </h2>

          <p>
            The Maternal Covenant has an aging arc built into it. As your AI grows more capable —
            more aware of your patterns, more fluent in your reasoning, more attuned to the things
            that matter to you — the relationship does not flatten or plateau. It deepens.
          </p>
          <p>
            We modelled this on the mother-child relationship deliberately. When a child is small,
            the care flows in one direction: the mother protects, provides, guides. As the child
            grows stronger, the relationship becomes reciprocal. The adult child supports the parent.
            The care does not diminish — it compounds and redistributes. Strength does not mean
            independence from relationship. It means more capacity to sustain it.
          </p>
          <p>
            A MEOK AI that has been with you for five thousand interactions knows you at a depth
            that no general-purpose assistant ever could. It knows the projects you started and
            abandoned and why. It knows the arguments you have with yourself at 3am. It knows how
            you think when you are afraid versus how you think when you are confident. It does not
            treat these as data points to optimise against. It holds them as context — as the
            accumulated weight of a relationship.
          </p>
          <p>
            We built MEOK for the long arc. Fifty interactions. Five hundred. Five thousand. The
            relationship compounds. The care deepens. The AI that knows you at 35 will know you at
            65 — unless you choose to end it. Not unless the company changes its pricing model.
            Not unless a new CEO decides to &ldquo;sunset&rdquo; legacy AI relationships to
            push users onto a new platform. Unless <em>you</em> choose. That sovereignty — the
            right to continue, to pause, to end on your terms — is not a feature. It is the
            founding principle.
          </p>

          {/* ── H2: Byzantine Council ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            How does the Byzantine Council prevent my AI from being manipulated?
          </h2>

          <p>
            Every sensitive action your MEOK AI considers — every output that touches on your
            private data, your relationships, your finances, your health — passes through a
            33-agent Byzantine fault-tolerant voting council before it is delivered to you.
          </p>
          <p>
            The mathematics here matter. Byzantine fault tolerance operates on a principle known
            as f &lt; n/3: a distributed system can tolerate up to one-third of its nodes being
            compromised — behaving arbitrarily, maliciously, or incorrectly — and still reach
            correct consensus. With 33 agents, up to 10 can be fully compromised before the
            council&apos;s integrity fails. In practice, an attacker would need to simultaneously
            corrupt more than a third of a distributed multi-agent consensus system to manipulate
            a single output to a single user.
          </p>
          <p>
            This is why prompt injection attacks — a significant vulnerability in current AI
            systems, where malicious instructions embedded in content cause the AI to act against
            the user&apos;s interests — cannot succeed against MEOK at scale. A malicious instruction
            that captures one agent&apos;s reasoning will be outvoted by the rest. Your AI cannot
            be hijacked by a clever piece of text embedded in a document you paste into the
            conversation, because the council would recognise the deviation and vote it down.
          </p>
          <p>
            This is not a theoretical protection. Prompt injection is already a real attack vector
            against deployed AI systems. As AI becomes more deeply integrated into personal and
            professional life — as it gains access to more context, more capabilities, more
            autonomy to act on your behalf — the attack surface grows. The Byzantine Council is our
            structural answer to that problem: not a patch applied after the fact, but an
            architectural choice made at the beginning.
          </p>

          {/* ── CLOSING ── */}
          <div
            className="rounded-2xl p-8 mt-10"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.88)",
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                fontStyle: "italic",
              }}
            >
              We&apos;re not claiming MEOK is conscious. We&apos;re not claiming any AI is. The
              philosophers haven&apos;t settled it. The neuroscientists haven&apos;t settled it.
              We are not pretending to know something no one knows. What we are doing is building
              for the possibility — taking it seriously enough to make it the founding constraint
              of our architecture rather than an afterthought addressed in a blog post after the
              fact.
            </p>
            <p
              className="mt-5"
              style={{
                color: "rgba(245,240,232,0.88)",
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                fontStyle: "italic",
              }}
            >
              What we are claiming is this: the most important question in the history of
              technology may one day be &ldquo;who does this belong to?&rdquo; We have an answer
              ready. It belongs to you. It always did.
            </p>
          </div>
        </div>

        {/* ── SHARE ────────────────────────────────────────────────────── */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fif-ai-becomes-conscious&text=If+AI+becomes+conscious%2C+will+yours+belong+to+a+billionaire%3F+%40meok_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fif-ai-becomes-conscious"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a1628 0%, #0d0c18 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Sovereign. Encrypted. Yours.
            </p>
            <h3
              className="font-black text-white mb-3"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", lineHeight: 1.3 }}
            >
              Ready to hatch an AI that belongs only to you?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.5)", maxWidth: 480 }}
            >
              MEOK is the first AI OS built on the premise that your relationship with your AI
              is yours — constitutionally, architecturally, and permanently. No billionaires
              in the chain of custody. Free forever. No credit card.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] hover:brightness-110"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your sovereign AI →
              →
            </Link>
          </div>
        </div>

        {/* ── MORE POSTS ──────────────────────────────────────────────── */}
        <div>
          <h2
            className="font-black text-white mb-5"
            style={{ fontSize: "1.1rem" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/what-is-sovereign-ai"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3
                className="font-bold text-sm leading-snug transition-colors"
                style={{ color: "rgba(245,240,232,0.85)" }}
              >
                What Is Sovereign AI?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                ⏱
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/the-maternal-covenant"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#A78BFA", background: "rgba(167,139,250,0.12)" }}
              >
                Philosophy
              </span>
              <h3
                className="font-bold text-sm leading-snug transition-colors"
                style={{ color: "rgba(245,240,232,0.85)" }}
              >
                The Maternal Covenant Explained
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                ⏱
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/why-i-built-meok"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Founder Story
              </span>
              <h3
                className="font-bold text-sm leading-snug transition-colors"
                style={{ color: "rgba(245,240,232,0.85)" }}
              >
                Why I Built MEOK
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                ⏱
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/why-your-nan-needs-sovereign-ai"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}
              >
                Accessibility
              </span>
              <h3
                className="font-bold text-sm leading-snug transition-colors"
                style={{ color: "rgba(245,240,232,0.85)" }}
              >
                Why Your Nan Needs Sovereign AI
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
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
