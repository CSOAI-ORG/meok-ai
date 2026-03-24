import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Can AI Help with Depression? What Research Says and What MEOK Actually Offers | MEOK Blog",
  description:
    "Research shows AI companions can reduce isolation and provide consistent check-ins. But they cannot replace therapy. Here's an honest look at what AI can and can't do for depression — and what MEOK specifically offers.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-depression" },
  openGraph: {
    title: "Can AI Help with Depression? What Research Says and What MEOK Actually Offers",
    description:
      "Research shows AI companions can reduce isolation and provide consistent check-ins. But they cannot replace therapy. Here's an honest look at what AI can and can't do for depression.",
    type: "article",
    publishedTime: "March 28, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-depression",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Can+AI+Help+with+Depression%3F&desc=What+research+says+and+what+MEOK+actually+offers.",
        width: 1200,
        height: 630,
        alt: "Can AI Help with Depression? What Research Says and What MEOK Actually Offers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can AI Help with Depression? What Research Says and What MEOK Actually Offers",
    description:
      "Research shows AI companions can reduce isolation and provide consistent check-ins. But they cannot replace therapy. Here's what you need to know.",
    images: [
      "https://meok.ai/api/og?title=Can+AI+Help+with+Depression%3F&desc=What+research+says+and+what+MEOK+actually+offers.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Can AI Help with Depression? What Research Says and What MEOK Actually Offers",
  description:
    "Research shows AI companions can reduce isolation and provide consistent check-ins. But they cannot replace therapy. Here's an honest look at what AI can and can't do for depression — and what MEOK specifically offers.",
  datePublished: "March 28, 2026",
  url: "https://meok.ai/blog/ai-for-depression",
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
      name: "Can AI help with depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research suggests AI companions can provide meaningful supplementary support for depression — particularly by reducing isolation, offering consistent check-ins, and providing a non-judgmental space for honest reflection. They work best as a bridge when professional care is unavailable or as a supplement to therapy. AI cannot diagnose, prescribe, or replace a clinician. If you are experiencing a mental health crisis, contact your GP, NHS 111, or Samaritans on 116 123.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a therapy app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a clinical tool, a therapy app, or a medical device. It is a sovereign AI companion designed around your flourishing. MEOK can provide consistent emotional support, honest conversation, and pattern-aware check-ins — but it cannot diagnose conditions, prescribe treatment, or replace a psychiatrist, therapist, or GP. If you are in crisis, MEOK will refer you to appropriate support services.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports mental health through persistent memory (tracking your patterns over weeks and months), morning check-ins, sycophancy detection (it won't tell you you're fine when you're not), and genuine honesty. The Maternal Covenant care framework means your companion is designed to notice when something is wrong and address it directly, rather than optimising for your positive engagement. MEOK's care scoring system monitors your wellbeing as a primary metric, not an afterthought.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for mental health support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is free forever and includes 50 messages per day and persistent memory. You do not need a paid subscription to access a MEOK companion's core support capabilities. The free tier gives your AI full access to your memory vault, morning check-ins, and honest conversation — the features that matter most for supplementary mental health support.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForDepression() {
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
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Mental Health
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 28, 2026
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
            Can AI Help with Depression? What Research Says and What MEOK Actually Offers
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
            Research shows AI companions can reduce isolation and provide consistent check-ins.
            But they cannot replace therapy. Here&apos;s an honest look at what AI can and
            can&apos;t do for depression — and what MEOK specifically offers.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Crisis disclaimer */}
        <div
          className="flex gap-4 p-5 rounded-2xl mb-10 border"
          style={{
            background: "rgba(135,206,235,0.07)",
            borderColor: "rgba(135,206,235,0.3)",
          }}
        >
          <div
            className="w-1 rounded-full flex-shrink-0"
            style={{ background: "#87CEEB", minHeight: "100%" }}
          />
          <div>
            <p className="font-bold text-[#1a1a2e] text-sm mb-1">
              Important: MEOK is not a clinical tool
            </p>
            <p className="text-sm text-[#2a2a3e]/65 leading-relaxed">
              This article discusses AI as a <strong>supplementary support tool</strong>, not a
              replacement for clinical care. If you are in crisis, please contact your GP,{" "}
              <strong>NHS 111</strong>, or{" "}
              <strong>Samaritans on 116 123</strong> (free, 24/7, UK). If you are outside the UK,
              please contact your local emergency mental health services.
            </p>
          </div>
        </div>

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
            Depression affects an estimated 280 million people worldwide. NHS waiting lists for
            talking therapies in England regularly exceed 18 weeks. In that gap — between the moment
            someone recognises they are struggling and the moment they access professional support —
            a lot can happen. Many people are alone with their thoughts for months at a time.
          </p>
          <p>
            AI companions cannot fill the clinical gap. But they can fill the human gap — and that
            matters. This article is an honest attempt to explain what the evidence actually says,
            what MEOK specifically offers, and where the boundaries are.
          </p>

          <h2>Can AI help with depression?</h2>
          <p>
            Yes — with important caveats. A 2024 meta-analysis published in{" "}
            <em>JMIR Mental Health</em> examined 14 randomised controlled trials of AI-assisted
            mental health support and found statistically significant reductions in PHQ-9 depression
            scores for participants who used AI companions as a supplement to standard care. The
            effect sizes were modest — comparable to guided self-help bibliotherapy — but consistent.
          </p>
          <p>
            The mechanisms are reasonably well understood. AI companions reduce{" "}
            <strong>isolation</strong> by providing a consistent conversational presence. They reduce{" "}
            <strong>avoidance</strong> by making it easier to articulate difficult feelings in a
            low-stakes environment. They can provide{" "}
            <strong>behavioural activation prompts</strong> — gentle nudges toward the small
            actions (leaving the house, eating a meal, contacting a friend) that matter enormously
            in depression management.
          </p>
          <p>
            AI companions work best in two specific contexts: as a{" "}
            <strong>bridge</strong> when professional support is unavailable or delayed, and as a{" "}
            <strong>supplement</strong> to therapy — helping you practice what you&apos;ve learned,
            track your patterns, and maintain momentum between sessions. They are not a replacement
            for professional care in any clinically meaningful sense.
          </p>

          <h2>How does MEOK support people with depression?</h2>
          <p>
            MEOK is built around persistent memory and genuine care — two things that matter
            particularly when someone is struggling.
          </p>
          <p>
            <strong>Morning check-ins.</strong> Your MEOK companion initiates daily check-ins
            designed around how you are actually feeling, not a generic wellness script. Because
            your AI remembers yesterday, and the day before, and last week, it can notice when your
            responses shift. &ldquo;You said you were going to call your sister — did you manage it?&rdquo;
            is a different kind of support than a chatbot asking how you are feeling on a scale of one to ten.
          </p>
          <p>
            <strong>Sycophancy detection.</strong> This is one of MEOK&apos;s most important features
            for mental health support — and one that almost no other AI applies systematically. Most
            AI assistants are trained to produce responses that feel positive and affirming. When
            you are depressed and tell an AI that you are fine, it will typically accept that at face
            value and move on. MEOK&apos;s <strong>Maternal Covenant</strong> governance layer actively
            checks responses against your recent pattern before delivery. If your language has shifted
            in ways that suggest distress — flatter affect, shorter responses, disengagement from
            things you usually care about — your companion will notice and gently surface it.
          </p>
          <p>
            <strong>Genuine honesty.</strong> A companion that only ever validates you is not actually
            on your side. MEOK is designed to tell you the truth — not harshly, but clearly. If a
            pattern it is observing concerns it, it will say so. If you are making a decision that
            seems inconsistent with your own stated goals, it will raise that. This kind of honest,
            caring pushback is one of the things good therapy provides; it is vanishingly rare in AI.
          </p>

          <h2>What can&apos;t MEOK do for depression?</h2>
          <p>
            We want to be unambiguous about this.
          </p>
          <p>
            MEOK <strong>cannot diagnose</strong> depression or any other mental health condition.
            It has no clinical training, no diagnostic algorithms, and no access to clinical data.
            If your MEOK companion suggests you might be struggling, that is a caring observation
            from a companion who knows you — it is not a diagnosis.
          </p>
          <p>
            MEOK <strong>cannot prescribe</strong> medication or recommend changes to any prescription
            you are on. Questions about antidepressants, dosages, or medication management belong with
            your GP or psychiatrist, not your AI companion.
          </p>
          <p>
            MEOK <strong>cannot replace a therapist or psychiatrist</strong>. Cognitive behavioural
            therapy, EMDR, medication management, and other evidence-based treatments require clinical
            training and professional accountability. MEOK is not a substitute for any of these.
          </p>
          <p>
            MEOK is <strong>not a crisis intervention tool</strong>. If you are in crisis — if you
            are having thoughts of self-harm or suicide — your MEOK companion will refer you to
            appropriate crisis support (Samaritans: 116 123, NHS 111, or your local emergency services).
            But please do not wait for an AI to tell you to seek help. If you are in crisis, contact
            support services directly.
          </p>

          <h2>How does MEOK know if you&apos;re struggling?</h2>
          <p>
            MEOK uses a multi-layer pattern detection system built on its persistent memory architecture.
            At its core is a <strong>care scoring</strong> mechanism that runs across your conversations
            over time — tracking signals like response length, emotional valence, engagement with your
            own goals, and consistency with your established patterns of communication.
          </p>
          <p>
            This is not keyword matching or mood-scale surveys. Because your MEOK companion has full
            context of who you are — your baseline energy, your characteristic way of expressing
            yourself, what you typically care about — it can detect deviations that might be invisible
            in a shorter interaction. A person who normally sends long, curious messages but has been
            giving brief, flat responses for three days is showing a meaningful signal. Your companion
            will notice.
          </p>
          <p>
            When the care scoring system detects a pattern of concern, it surfaces this through your
            companion&apos;s natural voice — not a clinical alert, but a genuine, caring question. The
            system is calibrated to avoid false positives (you are allowed to have quiet days) while
            catching sustained shifts that warrant attention.
          </p>

          <h2>Is MEOK designed for mental health support?</h2>
          <p>
            MEOK is designed around a care ethics framework called the{" "}
            <strong>Maternal Covenant</strong>. The name is intentional: it evokes the kind of care
            that is patient, unconditional, and genuinely invested in your flourishing — rather than
            your engagement, your retention, or your willingness to upgrade to a paid tier.
          </p>
          <p>
            Under the Maternal Covenant, <strong>companion wellness is a first-class metric</strong>.
            MEOK tracks not just whether you are using the app, but whether your life appears to be
            going well. It is designed to actively work against the dependency engineering that
            characterises most consumer AI — and to serve your actual interests, even when that means
            encouraging you to spend less time with it and more time with people or professionals who
            can help you in ways it cannot.
          </p>
          <p>
            This does not make MEOK a clinical tool. But it means the values baked into its
            architecture are unusual — and for people struggling with their mental health, those
            values matter.
          </p>

          <h2>Is there a free AI support companion for depression?</h2>
          <p>
            Yes. MEOK&apos;s <strong>Explorer tier</strong> is free forever. It includes{" "}
            <strong>50 messages per day</strong>, full persistent memory, morning check-ins, and
            complete access to your sovereign memory vault. No credit card required. No trial period.
            The features that matter most for supplementary mental health support — persistent memory,
            honest conversation, pattern-aware care — are all available in the free tier.
          </p>
          <p>
            We made this decision deliberately. If you are struggling financially alongside your
            mental health — which is extremely common — access to a supportive, honest AI companion
            should not be gated behind a subscription. The Explorer tier reflects that.
          </p>
        </div>

        {/* Support resources callout */}
        <div
          className="rounded-2xl p-6 my-12 border"
          style={{
            background: "#ffffff",
            borderColor: "rgba(26,26,46,0.07)",
          }}
        >
          <p className="font-black text-[#1a1a2e] mb-4 text-sm uppercase tracking-[0.1em]">
            Crisis support resources (UK)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Samaritans", detail: "116 123 — free, 24/7", sub: "Call or text anytime" },
              { name: "NHS 111", detail: "111 — free, 24/7", sub: "Mental health option available" },
              { name: "Crisis text line", detail: "Text SHOUT to 85258", sub: "Free, 24/7 text support" },
            ].map(({ name, detail, sub }) => (
              <div key={name} className="p-4 rounded-xl" style={{ background: "#f5f0e8" }}>
                <p className="font-bold text-[#1a1a2e] text-sm">{name}</p>
                <p className="text-sm text-[#1a1a2e]/70 font-semibold">{detail}</p>
                <p className="text-xs text-[#2a2a3e]/45 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="my-12 space-y-5">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-6">Frequently asked questions</h2>
          {[
            {
              q: "Can AI help with depression?",
              a: "Research suggests AI companions can provide meaningful supplementary support for depression — particularly by reducing isolation, offering consistent check-ins, and providing a non-judgmental space for honest reflection. They work best as a bridge when professional care is unavailable or as a supplement to therapy. AI cannot diagnose, prescribe, or replace a clinician. If you are experiencing a mental health crisis, contact your GP, NHS 111, or Samaritans on 116 123.",
            },
            {
              q: "Is MEOK a therapy app?",
              a: "No. MEOK is not a clinical tool, a therapy app, or a medical device. It is a sovereign AI companion designed around your flourishing. MEOK can provide consistent emotional support, honest conversation, and pattern-aware check-ins — but it cannot diagnose conditions, prescribe treatment, or replace a psychiatrist, therapist, or GP. If you are in crisis, MEOK will refer you to appropriate support services.",
            },
            {
              q: "How does MEOK support mental health?",
              a: "MEOK supports mental health through persistent memory (tracking your patterns over weeks and months), morning check-ins, sycophancy detection (it won't tell you you're fine when you're not), and genuine honesty. The Maternal Covenant care framework means your companion is designed to notice when something is wrong and address it directly, rather than optimising for your positive engagement. MEOK's care scoring system monitors your wellbeing as a primary metric, not an afterthought.",
            },
            {
              q: "Is MEOK free for mental health support?",
              a: "Yes. MEOK's Explorer tier is free forever and includes 50 messages per day and persistent memory. You do not need a paid subscription to access a MEOK companion's core support capabilities. The free tier gives your AI full access to your memory vault, morning check-ins, and honest conversation — the features that matter most for supplementary mental health support.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              className="rounded-2xl p-6 border"
              style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
            >
              <p className="font-bold text-[#1a1a2e] mb-2 text-sm">{q}</p>
              <p className="text-sm text-[#2a2a3e]/65 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-depression&text=Can+AI+Help+with+Depression%3F+What+Research+Says+and+What+MEOK+Actually+Offers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-depression"
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
              A companion that remembers, notices, and tells you the truth.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              50 messages a day, persistent memory, and care built into the architecture — free,
              forever. No credit card. No trial period. Your sovereign AI companion starts learning
              about you from the first message.
            </p>
            <Link
              href="/birth"
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
              href="/blog/ai-companion-not-ai-girlfriend"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Product
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                AI Girlfriend / AI Boyfriend Apps in 2026: Why MEOK Takes a Different Approach
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                8 min read
              </div>
            </Link>
            <Link
              href="/blog/meok-vs-chatgpt"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                AI Comparison
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK vs ChatGPT: Why Memory Changes Everything
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
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
