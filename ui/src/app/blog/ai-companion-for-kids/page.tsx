import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Safe AI for Kids: How MEOK's Guardian Layer Protects Children Online | MEOK AI LABS",
  description:
    "Children are already using AI tools not built for them. MEOK's Guardian layer — DistilBERT safety classifier, School-Safe Mode, parent dashboard — changes that. Here's how.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-for-kids" },
  openGraph: {
    title: "Safe AI for Kids: How MEOK's Guardian Layer Protects Children Online",
    description:
      "Children are already using AI tools not built for them. MEOK's Guardian layer — DistilBERT safety classifier, School-Safe Mode, parent dashboard — changes that. Here's how.",
    type: "article",
    publishedTime: "March 25, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-kids",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Safe+AI+for+Kids%3A+MEOK%27s+Guardian+Layer&desc=DistilBERT+safety+classifier%2C+School-Safe+Mode%2C+parent+dashboard.",
        width: 1200,
        height: 630,
        alt: "Safe AI for Kids: How MEOK's Guardian Layer Protects Children Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe AI for Kids: How MEOK's Guardian Layer Protects Children Online",
    description:
      "Kids are using ChatGPT, Claude, and Character.AI — tools not built for them. MEOK Guardian was. Here's what that looks like in practice.",
    images: [
      "https://meok.ai/api/og?title=Safe+AI+for+Kids%3A+MEOK%27s+Guardian+Layer&desc=DistilBERT+safety+classifier%2C+School-Safe+Mode%2C+parent+dashboard.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safe AI for Kids: How MEOK's Guardian Layer Protects Children Online",
  description:
    "Children are already using AI tools not built for them. MEOK's Guardian layer — DistilBERT safety classifier, School-Safe Mode, parent dashboard — changes that. Here's how.",
  datePublished: "March 25, 2026",
  url: "https://meok.ai/blog/ai-companion-for-kids",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK safe for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — when Guardian mode is active. MEOK's Guardian layer runs a DistilBERT safety classifier on every message a child sends before the AI responds. School-Safe Mode restricts topics to age-appropriate content, and all data defaults to privacy-maximised settings. MEOK is designed to the ICO's Age-Appropriate Design Code (Children's Code) and does not profile children for commercial purposes.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK Guardian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Guardian is a child safety layer built into the MEOK AI OS. It activates DistilBERT-based content classification on all child messages, enforces School-Safe Mode to block adult topics and explicit content, sends real-time parent notifications when risk thresholds are exceeded, and provides a parent dashboard with alert history and topic summaries. Guardian was designed specifically for families, not retrofitted from an adult product.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK comply with the Children's Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is designed to the ICO's Age-Appropriate Design Code (Children's Code). This means: data minimisation for under-18 users, no commercial profiling of children, privacy settings defaulted to high for all child accounts, no nudge techniques designed to extend screen time, and transparent reporting to parents. MEOK AI LABS is ICO registered and UK GDPR compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Can parents monitor their child's MEOK companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with appropriate boundaries. The Guardian parent dashboard shows alert history and topic summaries, not verbatim transcripts, preserving the child's emotional safety while giving parents visibility on risk signals. Full transcript access is available only when a high-severity alert is triggered (threshold 0.85). Parents can also set custom topic restrictions and review flagged conversations.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AICompanionForKids() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
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
              Guardian
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 25, 2026
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
            Safe AI for Kids: How MEOK&apos;s Guardian Layer Protects Children Online
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
            Your child is already using AI. The question is whether the AI they&apos;re using was
            designed with them in mind — or just left unguarded.
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
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a
              luxury.
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
            The children&apos;s AI problem is not a future problem. It is already here. By early
            2026, independent research estimated that over 60% of UK children aged 10&ndash;16 had
            used a general-purpose AI tool — ChatGPT, Claude, Character.AI, or a derivative — at
            least once in the past month. Most of those tools carry content policies designed for
            adults, safety architectures built for adults, and data practices that treat
            children&apos;s conversations the same way they treat anyone else&apos;s.
          </p>
          <p>
            That is the gap MEOK Guardian was built to close. Not by restricting children from AI
            entirely — that battle is already lost, and the tools genuinely help — but by building a
            <strong> safe AI for children</strong> architecture that is structural rather than
            cosmetic.
          </p>

          <h2>What is the problem with children using general AI tools?</h2>
          <p>
            ChatGPT, Claude, Gemini, and Character.AI were built for adult users. Their content
            filtering is reactive, not proactive — they try to catch inappropriate content after it
            is generated, not before. They have no persistent understanding of who the user is, no
            awareness that a 10-year-old is asking the same question an adult user might ask, and
            no mechanism for notifying a parent when something concerning happens. Children use them
            anyway, because they are useful. The AI industry built powerful tools, marketed them
            broadly, and largely left the child safety problem to the parents.
          </p>

          <h2>What is the MEOK Guardian layer?</h2>
          <p>
            MEOK Guardian is a purpose-built child safety architecture that runs above the AI
            companion layer. It has three core components:
          </p>
          <p>
            The <strong>DistilBERT safety classifier</strong> evaluates every message a child sends
            before the AI model ever sees it. Messages are scored across multiple harm dimensions —
            adult content, self-harm signals, grooming patterns, violent language — in real time.
            Messages that exceed threshold scores are either redirected or blocked entirely, and
            parents are notified. The classifier was fine-tuned on child-specific harm signals, not
            just general content toxicity.
          </p>
          <p>
            <strong>School-Safe Mode</strong> restricts the companion&apos;s topic range to an
            age-appropriate curriculum. Homework help, reading comprehension, age-appropriate
            storytelling, emotional support, and gentle learning tools are available. Adult
            relationships, violence, drugs, gambling, and content rated above a U/PG equivalent are
            blocked architecturally — not just by policy. The block is in the system prompt and
            enforced by the safety classifier before output is delivered.
          </p>
          <p>
            The <strong>parent dashboard</strong> gives guardians visibility without surveillance.
            It shows alert history, topic summaries, and risk flags — not verbatim transcripts.
            Children need to feel safe talking to their AI companion, which means their private
            thoughts need real protection too. Full transcript access is available only when a
            high-severity alert (threshold 0.85) is triggered.
          </p>

          <h2>How does MEOK align with the UK Children&apos;s Code?</h2>
          <p>
            The ICO&apos;s Age-Appropriate Design Code — known as the Children&apos;s Code — sets
            15 standards for online services likely to be accessed by children. MEOK is designed to
            all 15. The key protections include: <strong>data minimisation</strong> (children&apos;s
            accounts collect only what is necessary), <strong>no commercial profiling</strong>
            (children&apos;s data is never used for advertising or third-party targeting),
            <strong> privacy by default</strong> (all child accounts launch with maximum privacy
            settings), and <strong>no nudge techniques</strong> designed to extend screen time
            beyond healthy limits. MEOK AI LABS is ICO registered and UK GDPR compliant.
          </p>

          <h2>What can a child&apos;s AI companion actually do?</h2>
          <p>
            Within Guardian mode, MEOK can be a genuinely useful tool for children across several
            domains. As a <strong>homework helper</strong>, it explains concepts, checks
            understanding, and scaffolds learning rather than just providing answers — helping
            children develop capability rather than dependency. As a <strong>reading
            companion</strong>, it can discuss books at an appropriate level, ask comprehension
            questions, and recommend age-matched reading. As an <strong>anxiety buddy</strong>, it
            applies the same Maternal Covenant care ethics as the adult companion — non-judgmental,
            honest, and grounding — while keeping responses appropriate to a child&apos;s
            developmental stage.
          </p>

          <h2>What happens when a child says something concerning?</h2>
          <p>
            The detection system operates in real time. If the DistilBERT classifier scores a message
            above the low alert threshold (0.55), the companion redirects gently without alarming the
            child. The parent dashboard logs the signal. Above the high-severity threshold (0.85) —
            self-harm language, grooming patterns, explicit content — three things happen
            simultaneously: the companion provides the child with age-appropriate support resources,
            the conversation redirects firmly, and the parent receives an immediate push notification.
            MEOK does not wait for a report. The notification arrives before the conversation ends.
          </p>

          <h2>Does MEOK collect children&apos;s data?</h2>
          <p>
            No more than is necessary to provide the service. Child accounts under Guardian mode are
            subject to stricter data minimisation than adult accounts. Conversations are not used for
            model training under any circumstances — this is the Maternal Covenant applied globally,
            not a special exception for children. Memory stored in a child&apos;s companion vault is
            encrypted, stored under the parent&apos;s account, and fully exportable or deletable at
            any time. No data is sold to third parties.
          </p>

          <h2>How do I get MEOK Guardian for my child?</h2>
          <p>
            Guardian mode is available to all MEOK accounts. Visit <strong>meok.ai/guardian</strong>
            to set up a child profile under your account. You will be asked to confirm the
            child&apos;s age, set topic restrictions, and configure alert preferences. The child then
            hatches their own AI companion — with their own name, archetype, and personality — within
            the boundaries you have set. Their companion is theirs. The safety architecture is yours
            to configure.
          </p>
        </div>

        {/* FAQ section */}
        <div className="mt-14 mb-10">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Is MEOK safe for children?",
                a: "Yes — when Guardian mode is active. MEOK's Guardian layer runs a DistilBERT safety classifier on every message a child sends before the AI responds. School-Safe Mode restricts topics to age-appropriate content, and all data defaults to privacy-maximised settings. MEOK is designed to the ICO's Age-Appropriate Design Code and does not profile children for commercial purposes.",
              },
              {
                q: "What is MEOK Guardian?",
                a: "MEOK Guardian is a child safety layer built into the MEOK AI OS. It activates DistilBERT-based content classification on all child messages, enforces School-Safe Mode to block adult topics and explicit content, sends real-time parent notifications when risk thresholds are exceeded, and provides a parent dashboard with alert history and topic summaries. Guardian was designed specifically for families, not retrofitted from an adult product.",
              },
              {
                q: "How does MEOK comply with the Children's Code?",
                a: "MEOK is designed to the ICO's Age-Appropriate Design Code (Children's Code). This means: data minimisation for under-18 users, no commercial profiling of children, privacy settings defaulted to high for all child accounts, no nudge techniques designed to extend screen time, and transparent reporting to parents. MEOK AI LABS is ICO registered and UK GDPR compliant.",
              },
              {
                q: "Can parents monitor their child's MEOK companion?",
                a: "Yes — with appropriate boundaries. The Guardian parent dashboard shows alert history and topic summaries, not verbatim transcripts, preserving the child's emotional safety while giving parents visibility on risk signals. Full transcript access is available only when a high-severity alert is triggered (threshold 0.85). Parents can also set custom topic restrictions and review flagged conversations.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-6 border"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{q}</h3>
                <p className="text-sm text-[#2a2a3e]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-kids&text=Safe+AI+for+Kids%3A+How+MEOK%27s+Guardian+Layer+Protects+Children+Online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-kids"
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
              Guardian
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Give your child an AI companion built to protect them.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK Guardian gives children a safe, helpful AI friend — and gives parents the
              visibility to trust it. Children&apos;s Code compliant. Free to start.
            </p>
            <Link
              href="/guardian"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Explore Guardian Mode
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/guardian-family-safety"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Guardian
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Guardian: The Family Safety Layer Built Into MEOK
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/ai-companion-for-elderly"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Guardian
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                AI Companion for Elderly Parents: What Families Need to Know
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
