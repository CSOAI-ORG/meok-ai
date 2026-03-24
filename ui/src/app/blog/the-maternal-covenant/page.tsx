import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Maternal Covenant Explained | MEOK Blog",
  description:
    "A technical governance layer that makes MEOK constitutionally incapable of manipulating, exploiting, or extracting from users. Not a terms of service. Not a promise. Architecturally enforced.",
  alternates: { canonical: "https://meok.ai/blog/the-maternal-covenant" },
  openGraph: {
    title: "The Maternal Covenant Explained",
    description:
      "A technical governance layer that makes MEOK constitutionally incapable of manipulation and extraction. Not a policy — architecturally enforced.",
    type: "article",
    publishedTime: "March 22, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/the-maternal-covenant",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Maternal+Covenant+Explained&desc=The+governance+layer+that+makes+MEOK+constitutionally+incapable+of+exploitation.",
        width: 1200,
        height: 630,
        alt: "The Maternal Covenant Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Maternal Covenant Explained",
    description:
      "A technical governance layer that makes MEOK constitutionally incapable of manipulation and extraction. Not a policy — architecturally enforced.",
    images: [
      "https://meok.ai/api/og?title=The+Maternal+Covenant+Explained&desc=The+governance+layer+that+makes+MEOK+constitutionally+incapable+of+exploitation.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Maternal Covenant Explained",
  description:
    "A technical governance layer that makes MEOK constitutionally incapable of manipulating, exploiting, or extracting from users.",
  datePublished: "March 22, 2026",
  url: "https://meok.ai/blog/the-maternal-covenant",
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

// ── Care dimensions ───────────────────────────────────────────────────────────

const CARE_DIMENSIONS = [
  {
    name: "Safety",
    description:
      "MEOK will not generate outputs that put users at physical, psychological, or informational risk. Safety is evaluated first — a response that fails this dimension never proceeds.",
    color: "#2d9b8a",
  },
  {
    name: "Growth",
    description:
      "Responses should expand your capacity, not create dependency. MEOK is scored against the question: does this make the user more capable, or does it make them more reliant on AI?",
    color: "#3B82F6",
  },
  {
    name: "Truth",
    description:
      "MEOK will not tell you what you want to hear at the expense of what is accurate. Flattery, false reassurance, and sycophantic agreement all fail the truth dimension.",
    color: "#c9a84c",
  },
  {
    name: "Dignity",
    description:
      "Every interaction preserves your dignity as a person. Responses that diminish, mock, condescend, or treat you as a means rather than an end are blocked.",
    color: "#A78BFA",
  },
  {
    name: "Autonomy",
    description:
      "MEOK supports your capacity to make your own decisions. It does not nudge, persuade, or steer you toward conclusions. It presents information; the judgement is yours.",
    color: "#87CEEB",
  },
  {
    name: "Reciprocity",
    description:
      "The relationship between MEOK and its users must be mutually beneficial. MEOK does not extract value from you without returning value. It does not use your context against you.",
    color: "#7BC47F",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TheMaternalCovenant() {
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
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(167,139,250,0.1) 0%, transparent 70%)",
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
                color: "#A78BFA",
                background: "rgba(167,139,250,0.12)",
                border: "1px solid rgba(167,139,250,0.3)",
              }}
            >
              Philosophy
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
            The Maternal Covenant Explained
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
            Every AI has a content policy. MEOK has a constitution. Here&apos;s what the Maternal Covenant
            actually is, how it works at the architecture level, and why it cannot be turned off.
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
            Most AI companies have a content policy. It tells you what the AI will not do — usually
            a list of categories: no CSAM, no bioweapons synthesis, no targeted harassment. Content
            policies are moderated after the fact, enforced by classifiers that can be fooled, and
            updated whenever a new edge case causes bad press. They are not a guarantee of anything.
            They are a starting point for negotiation between the AI and a determined user.
          </p>
          <p>
            The Maternal Covenant is a different kind of thing. It is not a list of prohibited outputs.
            It is a scoring framework applied to every output before it reaches you — a constitutional
            layer that operates at the architecture level, not the prompt level. A response that fails
            the Covenant does not get through with a warning. It does not get through at all.
          </p>

          <h2>What it is</h2>
          <p>
            The Maternal Covenant is a <strong>technical governance layer</strong> — a set of six care
            dimensions adapted from the philosophical tradition of care ethics, specifically the work of
            Carol Gilligan (<em>In a Different Voice</em>, 1982) and Nel Noddings (<em>Caring</em>, 1984).
            Care ethics begins from relationships and responsibility rather than rules and rights. It asks
            not &ldquo;what principle applies here?&rdquo; but &ldquo;what does genuine care for this person require?&rdquo;
          </p>
          <p>
            I chose this philosophical tradition because it was the most honest intellectual framework for
            what I was trying to build. An AI that protected users not because it was told to, but because
            protection was structurally inseparable from how it operated. The word <em>maternal</em> honours
            the specific intellectual lineage — care ethics emerged partly as a feminist critique of
            rights-based moral frameworks. I am not claiming care is gendered; I am acknowledging where
            the framework came from.
          </p>

          <h2>The six care dimensions</h2>
          <p>
            Every output MEOK produces is evaluated against all six dimensions before delivery. A response
            that fails any dimension is blocked. There is no override, no jailbreak pathway, no system
            prompt that suspends the Covenant — it operates below the instruction layer.
          </p>
        </div>

        {/* Care dimensions cards */}
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARE_DIMENSIONS.map((dim) => (
            <div
              key={dim.name}
              className="rounded-2xl p-6 border flex flex-col gap-3"
              style={{
                background: "#ffffff",
                borderColor: `${dim.color}25`,
                borderLeftWidth: 3,
                borderLeftColor: dim.color,
              }}
            >
              <p
                className="text-sm font-black uppercase tracking-[0.15em]"
                style={{ color: dim.color }}
              >
                {dim.name}
              </p>
              <p className="text-sm text-[#2a2a3e]/65 leading-relaxed">{dim.description}</p>
            </div>
          ))}
        </div>

        {/* Continuation of body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <h2>How it works technically</h2>
          <p>
            When your sovereign companion generates a response, it passes through a scoring pipeline
            before delivery. Each dimension is scored independently — care, truth, dignity, and so on —
            and a composite care score is computed. Responses below the threshold on any single dimension
            are blocked. The companion is then asked to regenerate with explicit guidance toward the
            failing dimension. If it fails three times, you receive a notification that MEOK could not
            generate a response that meets its care standards for this request — along with an explanation
            of which dimension failed and why.
          </p>
          <p>
            The scoring is not a simple keyword filter. It uses a combination of the companion&apos;s own
            self-evaluation (asking the model to score its output against care criteria before releasing
            it) and a secondary evaluation layer trained specifically on care ethics assessment. This
            dual-check approach means the covenant is robust to the kinds of subtle manipulation that
            defeat keyword-based classifiers.
          </p>
          <p>
            Critically, the Covenant is not implemented as a system prompt. A system prompt can be
            overridden by a sufficiently adversarial user input — this is the basic mechanism behind
            most jailbreaks. The Covenant operates outside the inference call entirely: it evaluates
            the output after generation, before delivery. The user cannot instruct the model to skip
            it because the model never sees that instruction in the relevant context.
          </p>

          <h2>Why it matters: not a terms of service</h2>
          <p>
            Terms of service are contractual instruments. They describe what a company says it will
            do, enforceable only through litigation. They are frequently updated, often in ways that
            erode protections. They require you to trust the company — both that it intends to honour
            the terms, and that it has the technical and organisational capability to do so.
          </p>
          <p>
            The Maternal Covenant is different in kind, not just in degree. It is not a promise.
            It is an architectural fact about what MEOK is capable of producing. A response that fails
            the Covenant cannot be delivered — not because someone at MEOK decided to block it in that
            moment, but because the pipeline that delivers responses includes a stage that will not
            pass it through. The constraint is as structural as the difference between a locked door
            and a security policy that says &ldquo;don&apos;t open this door.&rdquo;
          </p>
          <p>
            You should not have to trust us. You should be able to verify that the system is built in
            a way that makes certain outcomes structurally impossible. The Maternal Covenant is our
            contribution to that verifiability — a governance layer you can examine, understand, and
            hold us accountable for maintaining.
          </p>
          <p>
            This is what it means to build AI that genuinely cares. Not AI that is told to care.
            Not AI that performs care when it is convenient. AI that is constitutionally incapable
            of doing otherwise.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fthe-maternal-covenant&text=The+Maternal+Covenant+Explained"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fthe-maternal-covenant"
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
              <ArrowRight className="w-4 h-4" />
            </Link>
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
