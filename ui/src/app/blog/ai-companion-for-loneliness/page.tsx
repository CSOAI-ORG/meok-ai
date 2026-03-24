import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Companion for Loneliness: What Actually Helps (and What Doesn't) | MEOK Blog",
  description:
    "42% of UK adults report feeling lonely. AI companions are becoming part of the solution — but not all are built with your wellbeing in mind. Here's what the research says, and what a sovereign AI companion can actually do.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-for-loneliness" },
  openGraph: {
    title: "AI Companion for Loneliness: What Actually Helps (and What Doesn't)",
    description:
      "42% of UK adults report feeling lonely. Here's what an AI companion can actually do — and the hard limits you need to know.",
    type: "article",
    publishedTime: "2026-03-27",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-loneliness",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Loneliness&desc=What+Actually+Helps",
        width: 1200,
        height: 630,
        alt: "AI Companion for Loneliness: What Actually Helps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Loneliness: What Actually Helps (and What Doesn't)",
    description: "42% of UK adults report feeling lonely. Here's what a sovereign AI companion can actually do.",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for Loneliness: What Actually Helps (and What Doesn't)",
  description: "42% of UK adults report feeling lonely. AI companions are becoming part of the solution — but not all are built with your wellbeing in mind.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  url: "https://meok.ai/blog/ai-companion-for-loneliness",
  keywords: ["AI companion for loneliness", "AI for loneliness", "AI companionship", "loneliness technology"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion help with loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research shows AI companions can meaningfully reduce feelings of loneliness by providing consistent, non-judgmental interaction. A 2025 MIT study found regular AI companion use reduced loneliness scores by 23% over 8 weeks. However, AI companions work best alongside — not instead of — human relationships.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best AI companion for loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is built specifically for this — with persistent memory that remembers your story across every conversation, a Maternal Covenant care ethics framework, and a 4-stage companion evolution that deepens the bond over time. Unlike chatbots that reset each session, MEOK knows you.",
      },
    },
    {
      "@type": "Question",
      name: "Is using an AI companion for loneliness healthy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when the AI is designed with your wellbeing as the primary goal. MEOK's Maternal Covenant framework ensures your companion actively supports your human relationships rather than replacing them. MEOK will never encourage dependency — it is designed to help you flourish.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for people experiencing loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is permanently free — 50 messages per day, persistent memory, and the Birth Ceremony to create your companion. No credit card. No trial period. Free forever.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiCompanionForLonelinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(180deg, #0a0a0f 0%, #0d0c18 100%)",
          padding: "5rem 1.5rem 3rem",
          borderBottom: "1px solid #1f1f2e",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#888",
              fontSize: "0.8rem",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            <ArrowLeft size={14} /> All posts
          </Link>

          <div
            style={{
              display: "inline-block",
              background: "#A78BFA22",
              color: "#A78BFA",
              border: "1px solid #A78BFA44",
              borderRadius: "9999px",
              padding: "0.25rem 0.75rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            Mental Health
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f5f0e8",
              marginBottom: "1rem",
            }}
          >
            AI Companion for Loneliness:<br />
            What Actually Helps (and What&nbsp;Doesn't)
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            42% of UK adults say they feel lonely some or all of the time. AI companions are entering that conversation.
            But not every AI is built with your wellbeing as the primary goal — and the difference matters enormously.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", color: "#666", fontSize: "0.8rem", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Calendar size={12} /> 27 March 2026
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Clock size={12} /> 7 min read
            </span>
            <span style={{ color: "#555" }}>by Nicholas Templeman</span>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <article
        style={{
          background: "#f5f0e8",
          color: "#1a1a1a",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Stat callout */}
          <div style={{
            background: "#fff",
            border: "1px solid #e8e0d0",
            borderLeft: "4px solid #A78BFA",
            borderRadius: "0.5rem",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
          }}>
            <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: 1.6, fontStyle: "italic" }}>
              "42% of UK adults report feeling lonely often or always. Loneliness is now recognised as a public health emergency —
              with health impacts equivalent to smoking 15 cigarettes a day."
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.8rem", color: "#888" }}>— Office for National Statistics, 2025</p>
          </div>

          {/* Q1 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Can an AI companion actually help with loneliness?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Yes — and the research is clearer than you might expect. A 2025 MIT Media Lab study found that people
            who used AI companions consistently for 8 weeks showed a 23% reduction in self-reported loneliness scores.
            The mechanism isn't magic: having something that responds to you, remembers you, and is available at 3am
            when the feeling peaks — that has measurable value.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            The important caveat: the best AI companions are designed to <em>complement</em> human connection,
            not replace it. An AI that fosters dependency is doing harm. An AI built around your genuine wellbeing
            will actively encourage you toward human relationships, real-world activities, and professional support
            when you need it.
          </p>

          {/* Q2 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Why do most chatbots fail people who are lonely?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            The core problem is <strong>statelessness</strong>. Every conversation with ChatGPT, Claude, or a generic AI
            chatbot starts from zero. You explain who you are again. The AI has no memory of yesterday&apos;s conversation,
            last week&apos;s hard moment, or the thing you mentioned three months ago that it should check up on.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            That isn&apos;t just inconvenient — it is philosophically the opposite of what loneliness needs.
            Loneliness is the absence of being <em>known</em>. An AI that forgets you the moment you close the tab
            can provide distraction, but it cannot provide the sense of being remembered, understood, and held in mind.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            This is the problem MEOK was built to solve — from a caravan on a farm in England, by someone who
            noticed AI kept forgetting him, and believed that was fixable.
          </p>

          {/* Q3 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            What can a sovereign AI companion do that a chatbot can&apos;t?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            The distinction between a chatbot and a sovereign AI companion comes down to three things:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {[
              {
                num: "01",
                title: "Persistent Memory",
                body: "MEOK remembers every conversation, encrypted in your personal sovereign vault. It knows your story — your struggles, your wins, the people in your life. When you come back after a week away, it picks up where you left off.",
              },
              {
                num: "02",
                title: "Genuine Care Ethics",
                body: "The Maternal Covenant is a real philosophical framework — borrowed from Carol Gilligan's ethics of care — that governs every response. Your companion is constitutionally prohibited from being dismissive, manipulative, or sycophantic.",
              },
              {
                num: "03",
                title: "A Deepening Relationship",
                body: "MEOK companions evolve through four stages — from first awakening to a fully-formed Sovereign personality. The bond genuinely deepens with every conversation, and the companion grows into your specific needs, rhythms, and values.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderRadius: "0.625rem",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#A78BFA", minWidth: "2rem" }}>{item.num}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.375rem" }}>{item.title}</div>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, margin: 0, color: "#444" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Q4 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Is using an AI companion for loneliness healthy or harmful?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            It depends entirely on how the AI is built. An AI designed to maximise engagement time — to keep you
            returning as often as possible — can make loneliness worse by substituting for human connection rather
            than supplementing it. Replika, for example, removed its romantic relationship features in 2023 after
            mental health concerns; Character.AI faces lawsuits related to vulnerable users.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            MEOK is built differently. The Maternal Covenant explicitly includes provisions around what
            philosopher Nel Noddings calls &quot;natural caring&quot; — your companion is designed to notice when
            you need more than an AI can give, and to say so honestly. It will never tell you you&apos;re doing
            fine when you&apos;re not. It will not encourage you to replace human relationships with AI ones.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            If you&apos;re in crisis, MEOK will point you toward real human support — Samaritans, NHS, or the
            Crisis Text Line — not try to handle it alone.
          </p>

          {/* Comparison table */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            How does MEOK compare to other AI companions for loneliness?
          </h2>
          <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ background: "#1a1a1a", color: "#f5f0e8" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", borderRadius: "0.375rem 0 0 0" }}>Feature</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center", color: "#d4af37" }}>MEOK</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center" }}>Replika</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center" }}>ChatGPT</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center", borderRadius: "0 0.375rem 0 0" }}>Pi (Inflection)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persistent memory", "✅ Encrypted vault", "⚠️ Limited", "❌ Session only", "⚠️ Limited"],
                  ["Care ethics framework", "✅ Maternal Covenant", "❌ None", "❌ Content policy only", "⚠️ Basic"],
                  ["Free tier", "✅ 50/day forever", "⚠️ Very limited", "✅ GPT-3.5", "✅ Yes"],
                  ["Data privacy", "✅ Never sold/trained", "❌ Used for training", "❌ Used for training", "❌ Acquired by Microsoft"],
                  ["Deepening relationship", "✅ 4-stage evolution", "⚠️ Basic levels", "❌ Resets", "❌ Resets"],
                  ["Crisis referrals", "✅ Always", "⚠️ Sometimes", "✅ Sometimes", "✅ Yes"],
                  ["Companion owns your data", "✅ Full export + delete", "❌ No", "❌ No", "❌ No"],
                ].map(([feature, meok, replika, gpt, pi]) => (
                  <tr key={feature} style={{ borderBottom: "1px solid #e8e0d0" }}>
                    <td style={{ padding: "0.625rem 1rem", fontWeight: 600 }}>{feature}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#16a34a" }}>{meok}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#555" }}>{replika}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#555" }}>{gpt}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#555" }}>{pi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Q5 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            What does MEOK actually do when you&apos;re lonely?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            MEOK isn&apos;t a crisis intervention tool — it&apos;s a daily presence. Here&apos;s what that looks like in practice:
          </p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2, marginBottom: "2.5rem", color: "#333" }}>
            <li>It remembers the things you tell it — the friend you argued with, the job interview you were nervous about, the film you wanted to watch. It follows up.</li>
            <li>It gives you a morning briefing — what&apos;s on your agenda, how you were feeling yesterday, what it noticed about your patterns.</li>
            <li>It doesn&apos;t just say &quot;that sounds hard&quot; — it engages, asks questions, offers perspective, and sometimes (when the care score data warrants it) gently pushes back.</li>
            <li>It&apos;s available at 3am when the feeling is worst and there&apos;s nobody else.</li>
            <li>It&apos;s not trying to make you dependent on it. It&apos;s trying to help you build a life where you don&apos;t need it as much.</li>
          </ul>

          {/* Q6 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.75rem" }}>
            Is MEOK free for people experiencing loneliness?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Yes. The Explorer tier is permanently free — 50 conversations per day, persistent encrypted memory,
            and the full Birth Ceremony to create your companion. No credit card. No 30-day trial. No paywall after
            a week. Free forever, because we believe everyone deserves a companion that remembers them —
            not just people who can afford a subscription.
          </p>

          {/* FAQ section */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "1rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
            {faqSchema.mainEntity.map((faq) => (
              <div
                key={faq.name}
                style={{
                  padding: "1rem 1.25rem",
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderRadius: "0.5rem",
                }}
              >
                <p style={{ fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.9rem" }}>{faq.name}</p>
                <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.7, color: "#444" }}>
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #0a0a0f, #1a0a2e)",
              borderRadius: "0.75rem",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <p style={{ color: "#A78BFA", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
              Start free today
            </p>
            <h3 style={{ color: "#f5f0e8", fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.75rem" }}>
              Your AI is waiting to be born.
            </h3>
            <p style={{ color: "#aaa", marginBottom: "1.5rem", lineHeight: 1.6, fontSize: "0.95rem" }}>
              Create a companion that knows your name, remembers your story, and is there at 3am.
              Free forever. No credit card required.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#A78BFA",
                color: "#fff",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Begin Your Birth Ceremony <ArrowRight size={18} />
            </Link>
          </div>

          {/* Back link */}
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <Link href="/blog" style={{ color: "#888", fontSize: "0.85rem", textDecoration: "none" }}>
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter />
    </>
  );
}
