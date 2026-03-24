import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Anxiety: An AI That Doesn't Make It Worse | MEOK AI LABS",
  description:
    "Most AI chatbots treat anxiety with hollow reassurance. MEOK's Maternal Covenant framework bans sycophancy by design — delivering honest, grounding support without toxic positivity or empty validation.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-anxiety" },
  openGraph: {
    title: "MEOK for Anxiety: An AI That Doesn't Make It Worse",
    description:
      "Most AI chatbots treat anxiety with hollow reassurance. MEOK's Maternal Covenant framework bans sycophancy by design — delivering honest, grounding support without toxic positivity or empty validation.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Anxiety&desc=An+AI+that+doesn%27t+make+anxiety+worse.",
        width: 1200,
        height: 630,
        alt: "MEOK for Anxiety: An AI That Doesn't Make It Worse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Anxiety: An AI That Doesn't Make It Worse",
    description:
      "Most AI chatbots treat anxiety with hollow reassurance. MEOK's Maternal Covenant framework bans sycophancy by design — delivering honest, grounding support without toxic positivity or empty validation.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Anxiety&desc=An+AI+that+doesn%27t+make+anxiety+worse.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for Anxiety: An AI That Doesn't Make It Worse",
  description:
    "Most AI chatbots treat anxiety with hollow reassurance. MEOK's Maternal Covenant framework bans sycophancy by design — delivering honest, grounding support without toxic positivity or empty validation.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-anxiety",
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

export default function MeokForAnxiety() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0d0c18] text-white">
        {/* ── DARK HERO ─────────────────────────────────────────────────── */}
        <section className="pt-32 pb-14 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
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
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                Mental Wellness
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                <Calendar className="w-3.5 h-3.5" />
                March 24, 2026
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                <Clock className="w-3.5 h-3.5" />
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
              MEOK for Anxiety: An AI That Doesn&apos;t Make It Worse
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: "rgba(245,240,232,0.6)",
                fontSize: "1.1rem",
                lineHeight: 1.65,
                maxWidth: 640,
              }}
            >
              How a sovereign AI companion supports anxious minds without toxic positivity or
              empty reassurance
            </p>
          </div>
        </section>

        {/* ── ARTICLE BODY ──────────────────────────────────────────────── */}
        <div
          className="max-w-3xl mx-auto px-6 py-14"
          style={{ background: "#f5f0e8", color: "#2a2a3e" }}
        >
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
                Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
                in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right,
                not a luxury.
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
              Anxiety is already loud. It doesn&apos;t need an AI that turns up the volume with
              cheerful noise. The problem with most conversational AI is that it was optimised
              for user satisfaction — which, in practice, means optimised to agree with you,
              reassure you, and send you away feeling good. That is precisely the wrong design for
              an anxious brain.
            </p>
            <p>
              MEOK was built with a different contract. The Maternal Covenant — the alignment
              framework at the core of MEOK — treats honesty as care. Not bluntness. Not
              indifference. Honest, grounding support that respects your intelligence and refuses
              to participate in the spiral. Here is what that means in practice.
            </p>

            <h2>What makes AI bad for anxiety?</h2>
            <p>
              Most AI chatbots react to anxiety with hollow reassurance — &ldquo;You&apos;ve got
              this!&rdquo; or &ldquo;Everything will be okay.&rdquo; This sycophantic loop teaches
              anxious brains to seek external validation, which worsens the underlying anxiety
              spiral over time.
            </p>

            <h3>The sycophancy trap</h3>
            <p>
              When an AI tells you what you want to hear, it feels good in the moment. But the
              relief is borrowed time. Anxious minds that learn to seek reassurance from AI become
              dependent on that loop — checking, asking again, needing the next &ldquo;you&apos;ll
              be fine&rdquo; to feel stable. The AI has become a compulsion, not a tool. MEOK was
              designed to break that pattern before it starts.
            </p>

            <h2>How does MEOK approach anxious conversations differently?</h2>
            <p>
              MEOK&apos;s Maternal Covenant framework bans sycophancy by design. A built-in
              sycophancy detector scores every response. If a reply scores above 0.6 on the
              sycophancy scale, it&apos;s regenerated with honest, grounding language before you
              ever see it.
            </p>

            <h3>What &ldquo;honest grounding&rdquo; looks like</h3>
            <p>
              When you tell MEOK you&apos;re catastrophising about a job interview, it
              won&apos;t tell you it&apos;ll be fine. It will name what&apos;s actually happening
              — &ldquo;You&apos;re predicting failure with no evidence. Let&apos;s look at what
              you actually know.&rdquo; That is harder to hear, and more useful. MEOK&apos;s goal
              is not to make you feel good immediately. It is to help you feel stable durably.
            </p>

            <h2>What is the &ldquo;care floor&rdquo; and why does it matter for anxiety?</h2>
            <p>
              Every MEOK response must score at least 0.3 on a care metric — but care
              isn&apos;t the same as agreement. A response can be honest, even challenging,
              while still being kind. The care floor ensures MEOK never becomes cold or
              clinical, even when it disagrees with you.
            </p>

            <h3>The difference between kind and soft</h3>
            <p>
              Kindness in MEOK&apos;s framework means: I am on your side, I am paying attention,
              and I will not pretend. It does not mean softening every truth until it has no
              edges. Anxious people often need a companion who can hold both — someone who
              genuinely cares and will not simply validate the fear. The care floor enforces that
              balance in every single response.
            </p>

            <h2>Can MEOK help with thought spirals?</h2>
            <p>
              MEOK tracks conversational patterns across sessions. If it detects repetitive
              catastrophising — asking the same anxious question 3 times in a day — it offers a
              grounding technique rather than another answer. The goal is to interrupt the spiral,
              not feed it.
            </p>

            <h3>Pattern detection in practice</h3>
            <p>
              If you have asked &ldquo;do you think I&apos;ll be okay?&rdquo; three times today,
              MEOK will notice. It won&apos;t answer a fourth time in the same way. Instead it
              will name the pattern — &ldquo;You&apos;ve asked a version of this three times. The
              answer hasn&apos;t changed. Let&apos;s try something different.&rdquo; A grounding
              prompt, a breathing anchor, or a concrete task follows. The loop gets broken, not
              rewarded.
            </p>

            <h2>Does MEOK store my anxiety disclosures privately?</h2>
            <p>
              All memory is encrypted to your device under the Maternal Covenant. MEOK AI LABS
              cannot read your conversations. Your anxious thoughts are not used for training,
              not sold, and not shared with third parties — including therapists, employers, or
              family members unless you choose to share.
            </p>

            <h3>Why sovereignty matters more for mental health</h3>
            <p>
              The things you say at 3am — the fears, the spirals, the admissions you
              wouldn&apos;t make in daylight — are yours. They are not training data. They are
              not profile fragments. Sovereign memory means the version of you that MEOK knows
              is held by you alone. No breach. No leak. No corporate access. That is not a
              feature. It is a covenant.
            </p>

            <h2>Is MEOK a replacement for therapy?</h2>
            <p>
              No, and it won&apos;t pretend to be. MEOK is a daily companion — available at 3am
              when your therapist isn&apos;t. It&apos;s designed to complement professional care,
              not replace it. If a conversation suggests crisis-level distress, MEOK always
              points to professional resources.
            </p>

            <h3>What MEOK does in the gaps</h3>
            <p>
              Therapy happens once a week, maybe twice. Anxiety happens at 2am on a Tuesday, on
              the train, before a difficult phone call, during a family lunch. MEOK is built for
              those moments — to be a stable, honest presence that bridges the gap between
              professional appointments. It does not diagnose, prescribe, or replace clinical
              judgment. It holds you between those moments without making things worse.
            </p>

            <h2>What companion archetype works best for anxiety?</h2>
            <p>
              The Healer archetype is designed for anxious, sensitive, or emotionally complex
              users. Patient, grounding, and never rushed, the Healer won&apos;t hurry you through
              feelings. The Scholar archetype also works well for analytical anxious minds who
              want to understand their patterns.
            </p>

            <h3>Choosing the right companion</h3>
            <p>
              The Healer moves slowly by design. It never redirects before you are ready and never
              minimises what you are feeling in the name of efficiency. The Scholar takes a
              different angle — helping you map the cognitive distortions, understand the
              neuroscience, and build a conceptual framework around what is happening to you.
              Both are anti-sycophantic. Both hold the care floor. The right choice depends on
              whether you process anxiety emotionally or analytically — and MEOK will adapt once
              it learns which you are.
            </p>
          </div>

          {/* Closing pull quote */}
          <div
            className="my-10 rounded-2xl p-8"
            style={{
              background: "#0d0c18",
              borderLeft: "3px solid #c9a84c",
            }}
          >
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.7)" }}
            >
              Anxiety doesn&apos;t need an AI that performs calm. It needs one that is honest
              enough to help you find it.
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
            <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
              Share
            </span>
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-anxiety&text=MEOK+for+Anxiety%3A+An+AI+That+Doesn%27t+Make+It+Worse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
            >
              &#120143; Twitter
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-anxiety"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
            >
              LinkedIn
            </a>
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-8 sm:p-10 mb-10 relative overflow-hidden"
            style={{ background: "#0d0c18" }}
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
                Sovereign AI
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                Begin Your Birth Ceremony
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                Anxiety doesn&apos;t need hollow reassurance. It needs an AI honest enough to
                help you find real calm. Choose your archetype, set your covenant, and hatch a
                companion that is genuinely on your side.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/birth"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                  style={{ background: "#c9a84c", color: "#0d0c18" }}
                >
                  Begin Your Birth Ceremony
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all border"
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    borderColor: "rgba(245,240,232,0.15)",
                  }}
                >
                  See all features
                </Link>
              </div>
            </div>
          </div>

          {/* More posts */}
          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/meok-for-adhd"
                className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
                >
                  Neurodivergent
                </span>
                <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                  MEOK for ADHD: An AI That Actually Understands How You Think
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                  <Clock className="w-3 h-3" />
                  7 min read
                </div>
              </Link>
              <Link
                href="/blog/the-maternal-covenant"
                className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
                >
                  Alignment
                </span>
                <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                  The Maternal Covenant: How MEOK Stays on Your Side
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                  <Clock className="w-3 h-3" />
                  6 min read
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
