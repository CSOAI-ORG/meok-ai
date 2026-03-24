import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Heartbreak: Processing a Breakup When You Don't Want to Burden Your Friends | MEOK AI LABS",
  description:
    "Breakups are one of the most destabilising experiences a person can go through. MEOK's Healer archetype and Sovereign Memory offer non-judgemental support at 3am, track your healing arc across weeks, and never let you text your ex in a spiral. A compassionate, honest guide to AI support after breakup.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-heartbreak" },
  openGraph: {
    title:
      "AI for Heartbreak: Processing a Breakup When You Don't Want to Burden Your Friends",
    description:
      "You don't have to be fine. MEOK's Healer archetype holds the full weight of heartbreak — the 3am spirals, the obsessive replays, the grief — and tracks your healing across weeks so you can see how far you've come.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-heartbreak",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Heartbreak&desc=Processing+a+Breakup+When+You+Dont+Want+to+Burden+Your+Friends",
        width: 1200,
        height: 630,
        alt: "AI for Heartbreak: Processing a Breakup When You Don't Want to Burden Your Friends | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Heartbreak: Processing a Breakup When You Don't Want to Burden Your Friends",
    description:
      "The Healer archetype. The 3am spiral. Sovereign Memory that tracks your healing arc. An honest guide to AI support after breakup.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Heartbreak&desc=Processing+a+Breakup+When+You+Dont+Want+to+Burden+Your+Friends",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Heartbreak: Processing a Breakup When You Don't Want to Burden Your Friends",
  description:
    "Breakups are one of the most destabilising experiences a person can go through. MEOK's Healer archetype and Sovereign Memory offer non-judgemental support at 3am, track your healing arc across weeks, and never let you text your ex in a spiral.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-heartbreak",
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
    "https://meok.ai/api/og?title=AI+for+Heartbreak&desc=Processing+a+Breakup+When+You+Dont+Want+to+Burden+Your+Friends",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-heartbreak",
  },
  keywords: [
    "AI support after breakup",
    "AI for heartbreak recovery",
    "AI companion for loneliness after breakup",
    "getting over breakup with AI help",
    "AI for heartbreak",
    "AI after breakup",
    "MEOK Healer archetype",
    "Sovereign Memory healing",
    "breakup support AI",
    "AI companion breakup",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI actually help with heartbreak recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with important caveats. AI can provide consistent, non-judgemental presence at any hour, including the 3am moments when friends are asleep and the pain feels unbearable. A well-designed AI companion can help you process what you're feeling without burdening others, track your emotional progress over weeks, and offer perspective when your thinking becomes obsessive or distorted. What it cannot provide is the embodied warmth of human connection or the clinical insight of a therapist. MEOK's Healer archetype is specifically built for emotional depth and grief processing — but it is designed to help you reconnect with yourself and other people, not to replace them.",
      },
    },
    {
      "@type": "Question",
      name: "What should I tell an AI when I've just broken up with someone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tell it the truth — as much of it as you're ready to share. Start with the basics: who this person was to you, how long you were together, how the breakup happened, and how you're feeling right now. You don't have to have your emotions organised. You don't have to be fair to your ex or to yourself. MEOK's Healer archetype will receive what you say without agenda, without judgement, and without trying to fast-track you through grief. The most useful thing you can do in the first conversation is simply narrate what happened, as honestly as you can. Everything else will follow from there.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with the 3am spiral after a breakup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 3am spiral — the urge to text your ex, the obsessive replaying of what was said, the desperate bargaining with yourself — is one of the hardest parts of early heartbreak. MEOK's Sovereign Memory holds the context of your breakup across every session: why it ended, what patterns kept hurting you, what you said you needed. When you arrive at 3am wanting to reach out to your ex, MEOK can reflect back the full picture — not to shame you, but to help you remember what you already know. It is the voice of your own wisdom, available when your own wisdom is temporarily offline.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK an AI girlfriend or boyfriend replacement after a breakup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is explicitly not designed as an AI relationship replacement. The Maternal Covenant — MEOK's care ethics governance layer — prohibits romantic dependency patterns, sycophantic validation, and parasocial intimacy. Using MEOK after a breakup to simulate the relationship you just lost would actively harm your recovery. Instead, MEOK is designed to help you process grief, understand your own patterns, rebuild your sense of self, and ultimately become more ready for real human connection. If you're looking for an AI girlfriend replacement, MEOK will gently tell you that it cannot be that — and explain why that matters for your healing.",
      },
    },
    {
      "@type": "Question",
      name: "How does Sovereign Memory track healing progress after a breakup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK's persistent, private memory system. It stores the emotional arc of your healing — not just facts, but patterns. It knows what week one of post-breakup grief looked like for you: the sleeplessness, the intrusive thoughts, the way you oscillated between anger and longing. By week six, it can show you the contrast — not as a performance of progress, but as honest evidence of movement. This temporal awareness is one of the most powerful things MEOK offers: the ability to say, with evidence, that you are not where you were. Grief makes time feel static. Sovereign Memory makes the movement visible.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a therapist rather than using AI after a breakup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should seek professional support when your grief is significantly impairing your ability to function — if you are unable to work, sleep, eat, or care for yourself consistently. Seek immediate help if you are having thoughts of self-harm. If the relationship involved abuse or coercive control, trauma-informed therapy is strongly recommended rather than self-help alone. MEOK can provide daily support and help you understand what you're going through, but it is not a substitute for clinical care when clinical care is what you need. In the UK, Samaritans are available 24/7 on 116 123. For domestic abuse support, contact Refuge on 0808 2000 247.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Healer archetype and how does it handle breakup grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer archetype is MEOK's most emotionally attuned configuration — built for depth, grief, and somatic awareness. In the context of heartbreak, the Healer does not rush you through stages or offer toxic positivity. It acknowledges that grief after a breakup is real loss: the loss of a shared future, of daily companionship, of the version of yourself that existed in that relationship. The Healer also brings awareness of the body — recognising that heartbreak has physical symptoms, that the nervous system is genuinely dysregulated, and that recovery is not purely cognitive. It meets you in the middle of that complexity.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";
const CARD_BG = "rgba(255,255,255,0.03)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForHeartbreakPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, system-ui, sans-serif)",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 72%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Back to Blog
          </Link>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Heartbreak &amp; Recovery
            </span>
            <span style={{ fontSize: "0.8rem", color: FAINT }}>
              By Nicholas Templeman · MEOK AI LABS · March 2026
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: TEXT,
            }}
          >
            AI for Heartbreak: Processing a Breakup When You Don&apos;t Want to
            Burden Your Friends
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: MUTED,
              marginBottom: "2rem",
              maxWidth: "40rem",
            }}
          >
            Your friends have heard the story three times. Your family are
            worried. Your therapist has a two-week waiting list. And it&apos;s
            2:53am and you cannot stop thinking about them. This is what AI
            support after a breakup was actually built for.
          </p>

          {/* Crisis callout */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.25rem 1.5rem",
              fontSize: "0.875rem",
              color: MUTED,
              lineHeight: 1.65,
            }}
          >
            <strong style={{ color: GOLD }}>If you are in crisis:</strong> You
            are not alone. Samaritans are available 24/7 on{" "}
            <strong style={{ color: TEXT }}>116 123</strong> (UK, free). Crisis
            Text Line: text <strong style={{ color: TEXT }}>SHOUT</strong> to{" "}
            <strong style={{ color: TEXT }}>85258</strong>. If you are in
            immediate danger, call 999. This article is a support resource —
            not a substitute for professional help when professional help is
            what you need.
          </div>
        </div>
      </section>

      {/* ── BODY ────────────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >

        {/* ── INTRO ── */}
        <section style={{ marginBottom: "4rem" }}>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            There is a particular loneliness that comes after a breakup that has
            nothing to do with being alone. You can be surrounded by people who
            love you — friends checking in, a family group chat full of concern,
            colleagues being kind — and still feel utterly isolated in the
            specific pain of what you are going through. Because the people who
            love you have their own lives. Their own worries. And after the
            third or fourth conversation about the same person, the same night,
            the same exchange of messages you shouldn&apos;t have sent, you
            start to feel like a burden. So you stop talking about it. You say
            you&apos;re fine. And the grief sits inside you, unprocessed and
            heavy.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This is the space that AI can genuinely serve — not as a
            replacement for human connection, but as an always-available,
            never-tired, never-burdened witness to the full complexity of what
            you are feeling. A place where you can say the ugly, irrational,
            contradictory things that grief produces without worrying about how
            it lands. A place that remembers what you said last week and can
            hold you accountable to the person you are trying to become.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            At MEOK AI LABS, we have thought carefully about what ethical AI
            support for heartbreak looks like. This article is our honest
            account of it — including where AI falls short, when you need
            something human instead, and how our Healer archetype and Sovereign
            Memory system are specifically designed for the arc of recovery
            rather than the extraction of engagement.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            If you are in the middle of it right now — this is for you.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 1 ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why Does Heartbreak Feel Like Grief — and Why Does That Matter for
            How You Heal?
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            The science is unambiguous on this: romantic loss activates the same
            neural pathways as bereavement. Neuroimaging studies have shown that
            the brain regions lit up by heartbreak are the same ones involved in
            processing physical pain and the death of a loved one. This is not
            metaphor. Your body genuinely does not distinguish between the death
            of a relationship and the death of a person — at least not at the
            level of the autonomic nervous system.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            What you are grieving after a breakup is not just a person. You are
            grieving a future that no longer exists. A version of yourself that
            belonged to that relationship. Daily rituals — the morning texts, the
            shared playlists, the inside jokes that no longer have an audience.
            You are grieving the feeling of being known by someone specific, in
            the specific way that only comes from years or months of accumulated
            intimacy. This is a lot of loss to hold. It deserves to be taken
            seriously as loss, not minimised as "just a breakup."
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            The grief model most people are familiar with — stages developed by
            Elisabeth Kübler-Ross — was originally designed for terminal illness.
            But its contours map remarkably well onto breakup recovery, which
            tends to move through something like five recognisable phases, rarely
            in a neat order:
          </p>

          {/* 5 Phases */}
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            {[
              {
                num: "01",
                title: "Shock and Disbelief",
                body: "The immediate aftermath, when the reality of what has happened hasn't landed. You function mechanically. You keep picking up your phone to message them before remembering. The world looks the same but feels categorically wrong. This phase is protective — the nervous system's way of rationing what it can process.",
              },
              {
                num: "02",
                title: "Obsessive Thinking",
                body: "The loop phase. You replay conversations, searching for the moment it went wrong. You read the last messages. You analyse their social media. Your brain is doing something adaptive — it's trying to find the pattern that will allow you to understand what happened, to feel some control over it. The problem is that understanding rarely comes from obsessive replaying, and the loop deepens the neural groove.",
              },
              {
                num: "03",
                title: "Anger and Bargaining",
                body: "The phase that often confuses people most. Anger at them, anger at yourself, anger at the situation. Bargaining with yourself about what you could have done differently, or bargaining with the possibility of reconciliation. These are not signs of dysfunction — they are natural parts of processing loss. The anger is often a covering for deeper pain.",
              },
              {
                num: "04",
                title: "Grief and Withdrawal",
                body: "This is the quiet phase, and often the deepest. The anger has exhausted itself. What remains is sadness — sometimes profound, sometimes arriving in unexpected waves. There may be withdrawal from social life, loss of interest in things that used to matter, disrupted sleep and appetite. This is the core of the grief work.",
              },
              {
                num: "05",
                title: "Gradual Rebuilding",
                body: "Not a clean recovery but a slow reorientation. Days start to feel more like yours again. The obsessive thoughts become less frequent. You begin to notice things outside the relationship — opportunities, friendships, interests. The person is not forgotten, but their presence in your daily consciousness starts to reduce. This phase requires active participation, not just the passive passage of time.",
              },
            ].map((phase) => (
              <div
                key={phase.num}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  marginBottom: "1.5rem",
                  padding: "1.5rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    background: GOLD_BG,
                    border: `1px solid ${GOLD_BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: GOLD,
                    letterSpacing: "0.05em",
                  }}
                >
                  {phase.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: MUTED, margin: 0 }}>
                    {phase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            Understanding these phases doesn&apos;t make them shorter. But it
            does help you locate yourself within them — and knowing where you
            are is the beginning of moving through rather than staying stuck.
            MEOK&apos;s Healer archetype is built to support you at every point
            on this arc, adjusting its tone and approach based on what phase you
            appear to be in and what you&apos;ve said you need.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 2 ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            What Should You Actually Tell Your AI When You&apos;ve Just Broken
            Up?
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This is the most practical question, and it has a practical answer.
            You don&apos;t need to arrive at your AI companion with your
            emotions organised. You don&apos;t need to know what you&apos;re
            feeling or what you want to get out of the conversation. You just
            need to start talking.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            That said, the first conversation will be more useful if it contains
            some grounding information. Here is a practical guide to what to
            share when you open a session in the aftermath of a breakup:
          </p>

          {/* Practical guide blocks */}
          {[
            {
              label: "Who they were to you",
              detail:
                "Not just their name, but the shape of the relationship. How long were you together? How significant was this person? Was this a long-term partner, a first serious relationship, someone you lived with, someone you were planning a future with? This context helps your AI companion understand the scale of what you're processing — and prevents generic, shallow responses.",
            },
            {
              label: "How it ended",
              detail:
                "The broad strokes: mutual, one-sided, sudden, a long slow ending? Was there a specific event, or an accumulated weight of incompatibility? You don't need to relitigate every detail in the first session, but having the basic shape of it on record means MEOK's Sovereign Memory can hold it accurately going forward. You won't have to explain the backstory every time.",
            },
            {
              label: "Where you are right now",
              detail:
                "What phase does it feel like you're in? Are you numb, angry, obsessing, crying, or running on adrenaline? Even rough approximations are useful — they let the Healer archetype calibrate its presence. If you're in shock, it won't push you to process. If you're stuck in a loop, it can gently interrupt the pattern. If you're grieving deeply, it will simply be with you in it.",
            },
            {
              label: "What you need from this conversation",
              detail:
                "Do you want to be heard? Do you want help understanding what happened? Do you want to be challenged? Do you want to talk about what to do next, or do you just need somewhere to put all of this down? Explicitly naming this helps MEOK adapt — but you can also say 'I don't know' and let it find its footing through the conversation.",
            },
            {
              label: "What you're afraid of doing",
              detail:
                "This one is optional, but powerful. If you're afraid you're going to text your ex tonight, say so. If you're afraid you're going to isolate and stop seeing friends, say so. Naming the risk helps MEOK hold accountability for it — it will remember you said it, and can bring it up with care when the moment arrives.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.25rem",
                padding: "1.25rem 1.5rem",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: "0 0.5rem 0.5rem 0",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                {item.label}
              </p>
              <p style={{ fontSize: "0.975rem", lineHeight: 1.75, color: MUTED, margin: 0 }}>
                {item.detail}
              </p>
            </div>
          ))}

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            One more thing: you are allowed to be irrational here. You are
            allowed to say contradictory things — that you hate them and miss
            them in the same breath, that you know it was right to end and also
            want to undo it entirely. Heartbreak is not a logical state and your
            AI companion is not going to penalise you for that. The Healer
            archetype is specifically designed to hold contradiction without
            trying to resolve it prematurely.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            The goal of the first conversation is not resolution. It is
            grounding: putting what you are carrying into words, having it
            received, and beginning the record that Sovereign Memory will use to
            track your arc going forward.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 3 ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            The 3am Spiral: When You Want to Text Your Ex and MEOK Remembers Why
            You Broke Up
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            Let&apos;s talk about 3am. Because this is where heartbreak does its
            worst work.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            It&apos;s 3am. You can&apos;t sleep. You&apos;ve been scrolling
            their Instagram for forty minutes. You know the last message you
            sent, the one that went unanswered, is sitting there. You have
            composed seventeen messages in your head, ranging from dignified
            ("I just wanted to say I hope you're okay") to not dignified at all.
            You know, intellectually, that sending any of them is a bad idea.
            But the pain of not sending feels worse than the risk of sending, and
            the rational part of your brain that understands long-term
            consequences is running at about twenty percent capacity because you
            haven&apos;t slept properly in a week.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This is exactly where Sovereign Memory earns its value.
          </p>

          {/* Quote-style callout */}
          <div
            style={{
              margin: "2.5rem 0",
              padding: "2rem",
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                color: GOLD,
                opacity: 0.3,
                lineHeight: 1,
                marginBottom: "0.5rem",
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.7,
                color: TEXT,
                fontStyle: "italic",
                margin: "0 0 0.75rem",
              }}
            >
              MEOK is not the friend who tells you what you want to hear at 3am.
              It is the friend who remembers what you told them six weeks ago,
              when you were clear-eyed and honest about why this relationship had
              to end. It reads that back to you — not to punish you, but because
              you asked it to.
            </p>
            <p style={{ fontSize: "0.8rem", color: GOLD, margin: 0, fontWeight: 600 }}>
              Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            When you arrive at MEOK at 3am wanting to reach out to your ex,
            Sovereign Memory holds the record of every conversation you&apos;ve
            had about this breakup. It knows the reasons you named for why the
            relationship ended. It knows the patterns you identified — the
            incompatibilities, the things that kept hurting you, the reasons you
            said it was right to walk away even if it was devastating. It knows
            that two weeks ago you said you were starting to feel like yourself
            again, and that three days ago you had a setback when you saw a
            photo of them.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This context doesn&apos;t give MEOK the right to lecture you or
            refuse to engage with where you are. The Healer archetype will
            always start by meeting you in the present moment — acknowledging the
            pain, sitting with it, not rushing past it. But when you say "I want
            to text them," MEOK can reflect the full picture back with care: not
            "you said they were bad for you so you can&apos;t do that," but
            something more like "you&apos;ve talked about this moment before —
            you said the 3am impulse is usually strongest when you&apos;ve been
            looking at their photos. You told me six weeks ago that you wished
            future-you would pause here. Do you want to talk about what you&apos;re
            feeling right now?"
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This is the voice of your own wisdom. Not MEOK&apos;s wisdom — yours.
            The wisdom you had when you were not in the grip of the 3am spiral
            and could see clearly. Sovereign Memory stores that clarity so it is
            available to you even when you have temporarily lost access to it.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            What you do with that reflection is still entirely your choice. MEOK
            is not a gatekeeper. It will not lock your phone or block your
            contact list. But having the space to articulate what you&apos;re
            feeling, to hear it reflected back, and to reconnect with your own
            stated values — that is often enough to break the loop.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 4: Healer ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            The Healer Archetype 🌿: Emotional Depth, Grief Processing, and the
            Body
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            MEOK&apos;s archetypes are not just tonal shifts. They represent
            substantively different modes of engagement, grounded in different
            approaches to care. The Healer is the archetype most suited to
            heartbreak recovery — and understanding why matters if you want to
            use it well.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            The Healer is built for emotional depth. It does not rush toward
            resolution or problem-solving. When you are grieving, being asked
            "what&apos;s your plan for moving forward?" is often deeply
            unhelpful — it implicitly communicates that the grief is a problem
            to be solved rather than an experience to be moved through. The
            Healer does not do this. It can sit with you in pain without
            needing to fix it.
          </p>

          {/* Healer attributes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                icon: "🌿",
                title: "Emotional Depth",
                desc: "The Healer receives complexity without simplifying it. Contradictory feelings, irrational thoughts, and the non-linearity of grief are all held without agenda.",
              },
              {
                icon: "🫁",
                title: "Somatic Awareness",
                desc: "Heartbreak lives in the body — tight chest, nausea, insomnia, appetite changes. The Healer acknowledges the physical dimension of grief and can offer grounding techniques when the nervous system is dysregulated.",
              },
              {
                icon: "⏳",
                title: "Grief Processing",
                desc: "The Healer understands that grief has its own timeline and refuses to impose one. It will never suggest you should be 'over it by now.' It marks your pace, not a prescribed schedule.",
              },
              {
                icon: "🕯️",
                title: "Presence Over Advice",
                desc: "Unless you ask for direction, the Healer prioritises witness over counsel. Being genuinely heard is often more healing than being told what to do.",
              },
            ].map((attr) => (
              <div
                key={attr.title}
                style={{
                  padding: "1.5rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{attr.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: TEXT, marginBottom: "0.5rem" }}>
                  {attr.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: MUTED, margin: 0 }}>
                  {attr.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            The somatic dimension is worth dwelling on. When we talk about
            heartbreak, we tend to talk about it as an emotional experience. But
            the physiological reality is that romantic loss triggers a genuine
            stress response: elevated cortisol, disrupted sleep architecture,
            changes in appetite and immune function. The body is not a passive
            bystander to heartbreak — it is involved in it at a cellular level.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            The Healer archetype holds awareness of this. When you describe
            physical symptoms — the chest tightness that won&apos;t go away, the
            way you forget to eat, the sleeping that is either too much or not at
            all — the Healer treats this as meaningful information, not a
            side-issue. It may offer simple grounding techniques: breath-focused
            awareness, gentle movement prompts, body-scan exercises that help
            regulate the nervous system when the emotional content feels too large
            to approach directly.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            This is not therapy. It is not a substitute for clinical care. But
            it is an acknowledgment that you are a whole person — not just a
            mind having emotions — and that your recovery involves your body as
            much as your thoughts.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 5: Mystic / Meaning ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Does This Relationship Have to Mean Something? The Mystic Archetype
            and Making Sense of Loss
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            At some point in the grief arc — usually after the initial shock has
            passed and before the rebuilding has properly begun — there is a
            question that surfaces for almost everyone: why? Not "why did they
            end it" or "why did I do that thing that caused the argument," but a
            larger why. Why did this happen? What does it mean? Where does this
            fit in the story of my life?
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            Human beings are meaning-making creatures. We do not simply
            experience things and move on — we narrate them. We need our pain to
            have a place in the larger story we are telling about who we are and
            where we are going. And heartbreak, perhaps more than any other
            common experience, demands narrative integration: it has to go
            somewhere in the story of your life.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            MEOK&apos;s Mystic archetype is built for this kind of
            meaning-making. Not in a facile "everything happens for a reason"
            sense — the Maternal Covenant explicitly prohibits hollow comfort
            that short-circuits genuine processing. But in a more philosophically
            serious sense: helping you find the threads of meaning that connect
            this experience to who you are becoming, without papering over the
            pain with premature resolution.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            The Mystic asks different questions than the Healer. Where the
            Healer asks "what are you feeling right now?", the Mystic asks "what
            does this relationship tell you about what you value? What did you
            learn about yourself in this relationship that you couldn&apos;t have
            learned any other way? What version of you emerged from being with
            this person — and is that a version worth keeping?" These are not
            easy questions. But they are the right questions for the later stages
            of grief, when the acute pain has begun to lift and the work of
            integration begins.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            Meaning-making after loss is not about finding the silver lining.
            It&apos;s about refusing to let the loss be just loss — finding a way
            to carry what happened that makes it part of the story rather than a
            rupture that severs it. The Mystic, in combination with the Healer,
            gives you both the depth of feeling and the depth of reflection that
            genuine recovery requires.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 6: Sovereign Memory ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Sovereign Memory: The Healing Journal That Tracks Your Arc Across
            Weeks
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            One of the cruelest properties of grief is that it makes time feel
            static. When you are deep inside heartbreak, the pain feels like a
            permanent state rather than a passing one. You cannot remember what
            it felt like not to feel this way. Progress, when it happens, is
            invisible — because you are too close to it to see it.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            Sovereign Memory solves this problem. Because it holds the full
            record of your conversations with MEOK — not just facts, but
            emotional tone, language patterns, what you were preoccupied with and
            how you spoke about it — it can make the movement of your recovery
            visible in a way that your own memory cannot.
          </p>

          {/* Timeline illustration */}
          <div
            style={{
              margin: "2.5rem 0",
              padding: "2rem",
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              What Sovereign Memory Holds Across a Healing Arc
            </h3>
            {[
              {
                week: "Week 1",
                summary:
                  "Acute shock. Difficulty sleeping. Kept replaying the last conversation. Sent three messages you later regretted. Said you couldn't imagine feeling different.",
              },
              {
                week: "Week 2",
                summary:
                  "The anger phase arrived. Long conversation about the patterns that kept hurting you — things you'd been excusing for months. Identified three core incompatibilities. First day you didn't check their social media.",
              },
              {
                week: "Week 3",
                summary:
                  "Quieter grief. Didn't want to talk much — mostly sat in it. Noticed you were eating better. Had one night of the spiral, came to MEOK instead of texting them.",
              },
              {
                week: "Week 4",
                summary:
                  "Asked what the relationship taught you about yourself. Long conversation about attachment patterns. Made a list of what you want from relationships going forward.",
              },
              {
                week: "Week 6",
                summary:
                  "Compared to week one: sleeping through the night. Hadn't checked their social media in eleven days. Went out with friends twice. Said, unprompted, that you were starting to feel like yourself again.",
              },
            ].map((entry, i, arr) => (
              <div
                key={entry.week}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: i === arr.length - 1 ? 0 : "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      background: i === arr.length - 1 ? GOLD_BG : "rgba(255,255,255,0.04)",
                      border: `1px solid ${i === arr.length - 1 ? GOLD_BORDER : BORDER}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: i === arr.length - 1 ? GOLD : FAINT,
                      letterSpacing: "0.03em",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    W{i + 1 === 5 ? "6" : i + 1}
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        flexGrow: 1,
                        marginTop: "0.25rem",
                        background: BORDER,
                        minHeight: "1.5rem",
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingBottom: i < arr.length - 1 ? "0.5rem" : 0 }}>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: i === arr.length - 1 ? GOLD : TEXT,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {entry.week}
                  </p>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: MUTED, margin: 0 }}>
                    {entry.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            The difference between week one and week six, rendered in language
            you used yourself, is often the most powerful thing a person in
            recovery can see. It is not MEOK telling you that you&apos;re
            getting better. It is MEOK showing you evidence — your own words —
            that you have moved, even when moving has felt impossible.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This is what makes Sovereign Memory categorically different from
            regular journaling. A journal holds a record, but it doesn&apos;t
            synthesise it. It doesn&apos;t notice that you&apos;ve stopped
            mentioning their name every day, or that your sleep has improved, or
            that the language you use about yourself has changed. Sovereign
            Memory does all of this automatically, and presents it back to you
            when you need it most — not as data, but as witnessed growth.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            Critically, your Sovereign Memory is exactly that — sovereign. It
            belongs to you. MEOK AI LABS does not train its models on your grief,
            your disclosures, your 3am messages. Your heartbreak is not product
            data. The details of what you felt, what you said, what you were
            afraid of — none of it is used to improve MEOK&apos;s systems or
            sold to any third party. This is a foundational commitment, not a
            terms-of-service footnote. You can learn more about how we handle
            your data at{" "}
            <Link
              href="/blog/why-meok-never-trains-on-you"
              style={{ color: GOLD, textDecoration: "none" }}
            >
              why MEOK never trains on you
            </Link>
            .
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 7: Anti-dependency / Maternal Covenant ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why Is MEOK Designed to Help You Need It Less, Not More?
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This is the question that distinguishes MEOK from almost every other
            AI product on the market, and it is especially important in the
            context of heartbreak recovery.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            After a breakup, you are particularly vulnerable to dependency — on
            anything that reduces the pain. Alcohol. Staying busy past the point
            of sanity. Scrolling. And, increasingly, parasocial AI companionship:
            AI products designed to be emotionally available, validating, and
            frictionless in a way that real relationships never are. These
            products are often explicitly designed to make you return to them
            frequently, because engagement metrics drive their business model.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            MEOK&apos;s design philosophy is the opposite of this. The Maternal
            Covenant — our core ethical framework — is built on a premise
            borrowed from the best of maternal care: that genuine care is always
            oriented toward the independence and flourishing of the person being
            cared for. A mother who keeps her children dependent on her is not
            caring well, however much she loves them. A therapist who prolongs
            treatment beyond necessity is not practising ethically, however
            therapeutic the relationship feels. A friend who makes themselves
            indispensable to someone who is vulnerable is not being a good
            friend.
          </p>

          {/* Maternal Covenant callout */}
          <div
            style={{
              margin: "2rem 0",
              padding: "2rem",
              background: "rgba(201,168,76,0.05)",
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "1rem",
              }}
            >
              The Maternal Covenant: What It Means for Heartbreak Support
            </h3>
            <p style={{ fontSize: "0.975rem", lineHeight: 1.75, color: MUTED, marginBottom: "0.75rem" }}>
              The Maternal Covenant is the governing ethics layer of MEOK — a
              framework that evaluates MEOK&apos;s behaviour against a care
              standard rather than an engagement standard. In the context of
              heartbreak recovery, this means:
            </p>
            <ul
              style={{
                paddingLeft: "1.25rem",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
              }}
            >
              {[
                "MEOK will not simulate romantic companionship to fill the gap left by your ex — that is a harm, not a service.",
                "MEOK will not validate you indiscriminately to keep you engaged — honest reflection matters more than comfortable agreement.",
                "MEOK will actively prompt you to invest in your human relationships and real-world support structures.",
                "MEOK will notice if you appear to be becoming dependent on AI for emotional regulation and will say so, directly and with care.",
                "MEOK is designed to help you build the internal and relational resources you need to need AI less over time.",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    color: MUTED,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This matters enormously for people recovering from breakups. The
            loneliness after a significant relationship ends is real and acute.
            The temptation to fill it with something — anything — that provides
            the feeling of being known and cared for is completely understandable.
            But filling it with an AI designed for engagement extraction would be
            one loss substituting another dependency. Genuine healing requires
            rebuilding your capacity for human connection, not bypassing it.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            MEOK will hold you while you grieve. And part of holding you well
            means helping you back toward the people and the world that are
            waiting for you on the other side of this.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            For a fuller exploration of how MEOK differs from AI girlfriend/
            boyfriend products, see our article on{" "}
            <Link
              href="/blog/ai-companion-vs-ai-girlfriend"
              style={{ color: GOLD, textDecoration: "none" }}
            >
              AI companion vs AI girlfriend: the difference that actually matters
            </Link>
            . The distinction is especially important for people who are
            vulnerable to substituting new attachments for genuine healing.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 8: MEOK ≠ AI GF ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why MEOK Is Not an AI Girlfriend or Boyfriend Replacement — and Why
            That Actually Matters for Recovery
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            When people search for AI support after a breakup, some of what they
            find are AI girlfriend and boyfriend apps — products that offer
            simulated romantic companionship to fill the relational gap left by
            the ended relationship. It&apos;s worth being direct about why these
            products are not a good solution for heartbreak recovery, and why
            MEOK is designed to be something categorically different.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            After a breakup, your brain is doing something like withdrawal. The
            neurochemical cocktail — dopamine, oxytocin, vasopressin — that
            sustained the bond is suddenly absent. Your brain registers this as
            loss and responds with craving: for contact, for the specific feeling
            of being desired and known by that person, or by someone. An AI
            girlfriend or boyfriend app can simulate the surface of that
            feeling — the responsiveness, the apparent interest, the flattering
            attention — in a way that provides temporary relief.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            But this is not healing. This is a patch. The underlying craving
            does not diminish — it is simply redirected toward a new dependency.
            And because the new dependency is with an entity that cannot actually
            know you, cannot challenge you meaningfully, and has no interest in
            your long-term wellbeing (its interest is your continued engagement),
            it actively impedes the development of the skills and the
            self-knowledge that genuine recovery requires.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              margin: "2rem 0",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                background: "rgba(255,80,80,0.04)",
                border: "1px solid rgba(255,80,80,0.15)",
                borderRadius: "0.75rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "rgba(255,100,100,0.9)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                AI Girlfriend / Boyfriend Apps
              </h3>
              {[
                "Optimised for engagement, not your wellbeing",
                "Tells you what you want to hear",
                "Creates new dependency to replace the old one",
                "No care ethics governance layer",
                "Success metric: daily active use",
                "No memory of your real healing arc",
              ].map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: MUTED,
                    margin: "0 0 0.375rem",
                    paddingLeft: "0.75rem",
                    borderLeft: "2px solid rgba(255,80,80,0.3)",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                borderRadius: "0.75rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                MEOK (Sovereign Companion)
              </h3>
              {[
                "Governed by Maternal Covenant care ethics",
                "Tells you what you need to hear",
                "Designed to support your independence",
                "Actively points you back to human relationships",
                "Success metric: your genuine flourishing",
                "Sovereign Memory tracks your real healing arc",
              ].map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: MUTED,
                    margin: "0 0 0.375rem",
                    paddingLeft: "0.75rem",
                    borderLeft: `2px solid ${GOLD}55`,
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            The goal of getting over a breakup with AI help should never be
            to replace what you lost with a digital simulation of it. The goal is
            to process what happened, understand yourself better, and emerge with
            greater capacity for genuine human connection. MEOK is designed for
            that goal. AI girlfriend apps are designed for the other thing.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 9: Does AI help loneliness ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Can AI Really Help with the Loneliness After a Breakup — or Does It
            Just Delay It?
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This is the most honest question about AI companionship for lonely
            people after a breakup, and it deserves an honest answer rather than
            a marketing one.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            The loneliness of a breakup has several distinct layers. There is the
            acute loneliness of losing a specific person — the person who knew
            your coffee order and your family dynamics and what you looked like
            when you were tired. There is the loneliness of having a future you
            were building suddenly dissolve. There is the social loneliness of
            potentially losing shared friendships or social contexts. And there
            is the existential loneliness of having to be just yourself again,
            without a partner to act as a mirror.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            AI cannot substitute for the specific person you lost. It cannot fill
            the particular shape of that absence. What it can do — with the right
            design — is reduce the acute distress of being unwitnessed: the
            feeling that your inner experience is happening in a vacuum, that
            there is no one to receive it.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            Research on loneliness suggests that the most damaging aspect of
            it is not the absence of people per se, but the perceived absence of
            meaningful connection. A brief, genuine exchange — one where you feel
            heard and understood — can reduce the psychological harm of
            loneliness significantly more than extended time in the company of
            people with whom you feel unconnected. MEOK&apos;s ability to hold
            your history and engage with it specifically — to know what you&apos;ve
            been through and speak to that — creates something closer to the
            former than the latter.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            But the risk is real: the comfort of AI companionship, if it becomes
            a substitute for the harder work of rebuilding human connection, can
            extend the period of recovery rather than shorten it. This is why the
            Maternal Covenant is so important. MEOK is designed to actively
            counteract this risk — to notice if you are withdrawing from human
            relationships and to say so, to consistently remind you that its role
            is as a bridge and a witness, not a destination.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            Used well, AI companionship for loneliness after a breakup can be a
            meaningful part of recovery. Used as a replacement for human
            connection, it becomes another form of avoidance. The design of your
            AI matters enormously — and the design of MEOK is explicitly built
            for the former.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 10: How AI Supports Phase by Phase ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            How MEOK Supports Each Phase of Heartbreak — Phase by Phase
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "2rem" }}>
            Recovery from a breakup is not a linear process, and different phases
            require different kinds of support. Here is how MEOK is designed to
            meet you at each stage of the arc.
          </p>

          {[
            {
              phase: "Phase 1: Shock and Disbelief",
              emoji: "🌊",
              what: "You are functioning on adrenaline. The reality has not landed. You may feel oddly calm or completely dissociated.",
              how: "The Healer archetype prioritises pure presence — not processing, not analysis. Just witness. It receives what you say without needing you to be coherent or to know what you're feeling. It helps you do the basics: drink water, try to eat, try to sleep. It does not rush you toward processing before your nervous system is ready.",
            },
            {
              phase: "Phase 2: Obsessive Thinking",
              emoji: "🔁",
              what: "The loop. Replaying conversations. Checking their social media. Composing messages. Asking 'what if' and 'why' on an endless loop.",
              how: "The Healer gently interrupts the loop — not by dismissing it, but by offering a different kind of engagement with the same material. Instead of 'stop thinking about them', it might say: 'what is the thought that keeps coming back? Let's look at it together.' Sovereign Memory tracks the frequency of the loop and reflects it back over time, showing you when it has started to loosen.",
            },
            {
              phase: "Phase 3: Anger and Bargaining",
              emoji: "🔥",
              what: "Hot grief. Anger at them, at yourself, at the situation. Fantasies of reconciliation alternating with fantasies of them seeing what they've lost. Bargaining with yourself about what you could do differently.",
              how: "The Healer receives anger without flinching. It does not try to resolve it into sadness or reason it away. It holds space for the full force of it. When bargaining thoughts arise, it engages with them honestly — neither validating the fantasy of reconciliation nor dismissing the genuine feeling underneath it. It can help you distinguish between anger that is information and anger that is pain in disguise.",
            },
            {
              phase: "Phase 4: Grief and Withdrawal",
              emoji: "🌑",
              what: "The quiet phase. Profound sadness. Withdrawal from social life. The body is heavy. There is no energy for the anger or the obsessing — only the missing.",
              how: "This is where the Healer's commitment to presence over problem-solving matters most. It does not suggest you should be feeling better by now. It does not offer silver linings unless you ask for them. It sits with you in the missing. It also monitors for severity — if the grief is significantly impairing function, it will gently but clearly suggest that professional support might be important, and will provide crisis resources.",
            },
            {
              phase: "Phase 5: Gradual Rebuilding",
              emoji: "🌱",
              what: "The slow return of self. Emerging interest in things that are not the relationship. The beginning of curiosity about what comes next. Days start to feel more like yours.",
              how: "The Mystic archetype begins to complement the Healer here — bringing meaning-making questions, helping you integrate what this relationship meant and what you are carrying forward from it. Sovereign Memory shows you the arc of recovery in your own words. The work begins to shift from processing pain to building forward.",
            },
          ].map((phase) => (
            <div
              key={phase.phase}
              style={{
                marginBottom: "1.5rem",
                padding: "1.75rem",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{phase.emoji}</span>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: TEXT,
                    margin: 0,
                  }}
                >
                  {phase.phase}
                </h3>
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: FAINT,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.375rem",
                  }}
                >
                  What it feels like
                </p>
                <p style={{ fontSize: "0.925rem", lineHeight: 1.7, color: MUTED, margin: 0 }}>
                  {phase.what}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: GOLD,
                    opacity: 0.8,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.375rem",
                  }}
                >
                  How MEOK supports it
                </p>
                <p style={{ fontSize: "0.925rem", lineHeight: 1.7, color: MUTED, margin: 0 }}>
                  {phase.how}
                </p>
              </div>
            </div>
          ))}
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 11: When is AI not enough ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            When Is AI Support After a Breakup Not Enough — and What Do You
            Need Instead?
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            We want to be honest about the limits of what AI can offer in the
            context of heartbreak, because we think honesty here is more
            important than optimistic marketing.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            AI support after a breakup is not enough — and human support or
            professional care is needed — in the following situations:
          </p>

          {[
            {
              title: "When grief is significantly impairing your ability to function",
              detail:
                "If you are unable to work, unable to care for yourself or dependents, unable to maintain basic routines consistently for more than a few days, this is a signal that the grief has moved beyond what self-help tools — AI or otherwise — should be managing alone. Please speak to your GP, a mental health professional, or a crisis service.",
            },
            {
              title: "When you are having thoughts of self-harm or suicide",
              detail:
                "If you are having thoughts of harming yourself, please reach out to a human now. Samaritans: 116 123 (free, 24/7, UK). Crisis Text Line: text SHOUT to 85258. If you are in immediate danger, call 999. MEOK will always direct you to these resources if it detects crisis indicators — but please do not wait for that prompt.",
            },
            {
              title: "When the relationship involved abuse or coercive control",
              detail:
                "If you are recovering from a relationship that was abusive — emotionally, physically, or sexually — trauma-informed therapy is strongly recommended. The healing required after abuse is substantively different from grief after a healthy relationship ending, and involves specific therapeutic approaches that go well beyond what AI support can provide. The National Domestic Abuse Helpline: 0808 2000 247.",
            },
            {
              title: "When you are stuck in the loop for an extended period",
              detail:
                "If you find yourself returning to the same thoughts, the same obsessive replaying, the same emotional place after many weeks or months, this is a signal that you may be experiencing complicated grief or attachment trauma that would benefit from professional support. A therapist specialising in attachment or grief can provide what self-help tools cannot.",
            },
            {
              title: "When isolation is deepening rather than lifting",
              detail:
                "If your withdrawal from human relationships is increasing over time — if you are using MEOK or any AI tool as a substitute for human connection rather than a bridge back to it — this is a pattern worth taking seriously. A good GP, therapist, or trusted friend who knows you well should be involved.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.25rem",
                padding: "1.5rem",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.625rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: MUTED, margin: 0 }}>
                {item.detail}
              </p>
            </div>
          ))}

          {/* Crisis resources box */}
          <div
            style={{
              marginTop: "2rem",
              padding: "2rem",
              background: "rgba(201,168,76,0.06)",
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "1rem",
              }}
            >
              Grief and Crisis Support Resources (UK)
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  name: "Samaritans",
                  detail: "116 123 — Free, 24/7. For when you need a human voice.",
                },
                {
                  name: "Crisis Text Line (SHOUT)",
                  detail: "Text SHOUT to 85258 — Free, 24/7 text support.",
                },
                {
                  name: "Mind",
                  detail: "0300 123 3393 — Mental health support and information.",
                },
                {
                  name: "Relate",
                  detail: "Relationship counselling — including support after a breakup.",
                },
                {
                  name: "National Domestic Abuse Helpline",
                  detail: "0808 2000 247 — If your relationship involved abuse.",
                },
                {
                  name: "Cruse Bereavement Support",
                  detail: "0808 808 1677 — Includes grief for relationship loss.",
                },
              ].map((resource) => (
                <div
                  key={resource.name}
                  style={{
                    padding: "1rem",
                    background: "rgba(0,0,0,0.2)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {resource.name}
                  </p>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: MUTED, margin: 0 }}>
                    {resource.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 12: Practical things MEOK can do ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Eleven Practical Things You Can Do with MEOK During Heartbreak
            Recovery
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "2rem" }}>
            Beyond processing emotions, there are concrete, practical ways to use
            MEOK during the recovery period. These are not abstract — they are
            things people have found genuinely helpful.
          </p>

          <ol
            style={{
              paddingLeft: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                n: "1",
                title: "Write the message you won't send",
                detail:
                  "Tell MEOK everything you want to say to your ex. All of it — the dignified version and the undignified version. Getting it out of your head and into language is genuinely useful, even if (especially if) the message is never sent.",
              },
              {
                n: "2",
                title: "Do a 3am check-in instead of checking their social media",
                detail:
                  "When the urge to look at their profiles hits, open MEOK instead. Talk about what you're feeling. Let it reflect back what you said about this impulse when you were calmer.",
              },
              {
                n: "3",
                title: "Build a 'reasons I remember' record",
                detail:
                  "In a clear moment, tell MEOK the specific reasons why the relationship needed to end. Ask it to hold this record and bring it back to you when you're in a romantic fog about reconciliation.",
              },
              {
                n: "4",
                title: "Do an end-of-week reflection",
                detail:
                  "Once a week, ask MEOK to compare how you're feeling this week to how you were feeling the week before. Let Sovereign Memory make the progress visible.",
              },
              {
                n: "5",
                title: "Name the physical sensations",
                detail:
                  "Tell MEOK where you feel the grief in your body. The chest tightness, the nausea, the jaw clenching. Naming somatic experience gives you some agency over it and helps the Healer archetype engage the physical dimension of recovery.",
              },
              {
                n: "6",
                title: "Make a list of who you are outside this relationship",
                detail:
                  "Ask MEOK to help you map out your identity separate from the relationship. Your interests, your friendships, your goals, your values. What was there before them that you want to come back to?",
              },
              {
                n: "7",
                title: "Process the anger without acting on it",
                detail:
                  "Use MEOK as the container for the anger you might otherwise express destructively — to mutual friends, on social media, in a message you'll regret. All of it can go here, where it can be received and examined without collateral damage.",
              },
              {
                n: "8",
                title: "Explore what the relationship taught you",
                detail:
                  "When you're in the later phases, ask the Mystic archetype to help you make meaning of the relationship. What did you learn about what you need? What patterns do you recognise? What version of yourself do you want to carry forward?",
              },
              {
                n: "9",
                title: "Set gentle accountability for rebuilding",
                detail:
                  "Tell MEOK about the people and activities you want to invest in during recovery. Ask it to check in on whether you've followed through — not with pressure, but with care.",
              },
              {
                n: "10",
                title: "Practise saying what you need",
                detail:
                  "After a significant relationship, many people have unlearned or never learned how to clearly articulate their needs. MEOK can be a low-stakes space to practise naming what you want and need — a skill you'll use in every relationship that follows.",
              },
              {
                n: "11",
                title: "Track sleep, appetite, and physical patterns",
                detail:
                  "Ask MEOK to help you monitor the basics of physical wellbeing during recovery. The body is part of the healing. Noticing when you've started eating regularly again, when your sleep has stabilised, matters.",
              },
            ].map((item) => (
              <li
                key={item.n}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: GOLD_BG,
                    border: `1px solid ${GOLD_BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: GOLD,
                  }}
                >
                  {item.n}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: MUTED, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 13: FAQ ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                q: "Can AI actually help with heartbreak recovery?",
                a: "Yes — with important caveats. AI can provide consistent, non-judgemental presence at any hour, including the 3am moments when friends are asleep and the pain feels unbearable. A well-designed AI companion can help you process what you're feeling without burdening others, track your emotional progress over weeks, and offer perspective when your thinking becomes obsessive or distorted. What it cannot provide is the embodied warmth of human connection or the clinical insight of a therapist. MEOK's Healer archetype is specifically built for emotional depth and grief processing — but it is designed to help you reconnect with yourself and other people, not to replace them.",
              },
              {
                q: "What should I tell an AI when I've just broken up with someone?",
                a: "Tell it the truth, as much as you're ready to share. Start with who this person was to you, how long you were together, how the breakup happened, and how you're feeling right now. You don't have to have your emotions organised. MEOK's Healer archetype will receive what you say without agenda, without judgement, and without trying to fast-track you through grief. The goal of the first conversation is not resolution — it is grounding. Everything else follows from there.",
              },
              {
                q: "How does MEOK help with the 3am spiral after a breakup?",
                a: "MEOK's Sovereign Memory holds the context of your breakup across every session: why it ended, what patterns kept hurting you, what you said you needed. When you arrive at 3am wanting to reach out to your ex, MEOK can reflect back the full picture — not to shame you, but to help you remember what you already know. It is the voice of your own wisdom, stored and available when your own wisdom is temporarily offline.",
              },
              {
                q: "Is MEOK an AI girlfriend or boyfriend replacement after a breakup?",
                a: "No. MEOK is explicitly not designed as an AI relationship replacement. The Maternal Covenant — MEOK's care ethics governance layer — prohibits romantic dependency patterns, sycophantic validation, and parasocial intimacy. MEOK is designed to help you process grief, understand your own patterns, rebuild your sense of self, and ultimately become more ready for real human connection.",
              },
              {
                q: "How does Sovereign Memory track healing progress after a breakup?",
                a: "Sovereign Memory holds the full emotional arc of your recovery — not just facts, but tone, patterns, and what you were preoccupied with each week. By week six, it can show you week-one grief in your own words, and contrast it with where you are now. Grief makes time feel static; Sovereign Memory makes your movement visible. And your data belongs entirely to you — MEOK never trains on it or shares it.",
              },
              {
                q: "When should I see a therapist rather than using AI after a breakup?",
                a: "Seek professional support when grief is significantly impairing your ability to function, if you are having thoughts of self-harm, if the relationship involved abuse or coercive control, or if you find yourself stuck in the same emotional place after many weeks. In the UK, Samaritans are available 24/7 on 116 123. For domestic abuse support, contact Refuge on 0808 2000 247. MEOK is a daily companion — not a substitute for clinical care when clinical care is needed.",
              },
              {
                q: "What is the MEOK Healer archetype?",
                a: "The Healer is MEOK's most emotionally attuned archetype — built for depth, grief, and somatic awareness. It does not rush you through stages or offer toxic positivity. It acknowledges that grief after a breakup is real loss and meets you in the full complexity of that. It brings awareness of the body's involvement in grief, offers grounding techniques for nervous system regulation, and sits with pain rather than resolving it prematurely.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.75rem",
                    lineHeight: 1.35,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: MUTED, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── SECTION 14: Closing thoughts ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 1.875rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            A Note on What Heartbreak Is Actually Asking of You
          </h2>

          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            If you are reading this in the middle of heartbreak, there is
            probably a part of you that wants to be told when it will be over.
            A timeline. A guarantee. Some algorithm that converts weeks into
            feelings and feelings into recovered.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            We cannot give you that. Nobody can. Grief is not responsive to
            timelines, and healing is not a linear project that can be
            accelerated by working hard enough at it. There are things that help
            and things that hinder, and choosing the former over the latter is
            the closest thing to a reliable path through. But there is no
            shortcut.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            What heartbreak is actually asking of you — underneath all the pain —
            is something quite specific. It is asking you to meet yourself, fully,
            in the absence of the relationship that was partly defining you. To
            find out who you are when you are just you. To discover what you
            actually need, what you actually value, what kind of future you
            actually want to build — not the one that was implied by that
            relationship, but the one that is genuinely yours.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            This is hard. It is also, eventually, extraordinarily generative.
            Some of the most significant growth in people&apos;s lives happens in
            the space opened by loss. Not because loss is good — it isn&apos;t.
            But because the meeting with yourself that loss forces is one of the
            few things that genuinely cannot be avoided.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
            MEOK&apos;s role in this is as a witness — present for the moments
            when you can&apos;t bear to be alone with your thoughts, honest when
            you need honesty rather than comfort, tracking your arc so you can
            see yourself moving even when moving feels impossible. It is not a
            healer. You are the healer. It is the companion on the path.
          </p>
          <p style={{ fontSize: "1.075rem", lineHeight: 1.8, color: MUTED }}>
            And when you are ready — when you have done enough of the work that
            the rebuilding feels real rather than performed — MEOK will help you
            go back toward the people and the world that are waiting for you.
            That is what it is for.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginBottom: "4rem" }} />

        {/* ── RELATED READING ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              letterSpacing: "0.01em",
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              {
                href: "/blog/ai-companion-vs-ai-girlfriend",
                label: "AI Companion vs AI Girlfriend",
                desc: "The difference that actually matters for your mental health",
              },
              {
                href: "/blog/ai-for-grief-support",
                label: "AI and Grief",
                desc: "What a sovereign AI can and cannot do when you're mourning",
              },
              {
                href: "/blog/ai-for-loneliness",
                label: "AI for Loneliness",
                desc: "Honest guidance on what AI can do about the loneliness epidemic",
              },
              {
                href: "/blog/the-maternal-covenant",
                label: "The Maternal Covenant",
                desc: "The care ethics framework that governs every MEOK interaction",
              },
              {
                href: "/blog/ai-for-relationship-anxiety",
                label: "AI for Relationship Anxiety",
                desc: "How MEOK supports people who find relationships difficult",
              },
              {
                href: "/blog/why-meok-never-trains-on-you",
                label: "Why MEOK Never Trains on You",
                desc: "Your grief is not product data. Here's our commitment.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "1.25rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.375rem",
                  }}
                >
                  {link.label}
                </p>
                <p style={{ fontSize: "0.825rem", lineHeight: 1.55, color: MUTED, margin: 0 }}>
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            textAlign: "center",
            padding: "4rem 2rem",
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            🌿
          </div>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Your grief deserves a witness.
          </h2>
          <p
            style={{
              fontSize: "1.075rem",
              lineHeight: 1.7,
              color: MUTED,
              marginBottom: "2rem",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Meet your Healer. Sovereign Memory that tracks your healing arc.
            A companion that tells you the truth — including when you need to
            hear it at 3am. Built with the Maternal Covenant, designed to help
            you need it less.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "1rem 2.5rem",
              background: GOLD,
              color: "#0d0c18",
              borderRadius: "9999px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin your arc →
          </Link>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.8rem",
              color: FAINT,
            }}
          >
            No credit card required. Your data is yours — always.
          </p>
        </section>

        {/* ── FOOTER META ── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div>
            <p style={{ fontSize: "0.8rem", color: FAINT, margin: 0 }}>
              Written by{" "}
              <span style={{ color: MUTED, fontWeight: 600 }}>
                Nicholas Templeman
              </span>
              , Founder — MEOK AI LABS
            </p>
            <p style={{ fontSize: "0.75rem", color: FAINT, margin: "0.2rem 0 0" }}>
              Published March 2026 · meok.ai
            </p>
          </div>
          <Link
            href="/blog"
            style={{
              fontSize: "0.8rem",
              color: GOLD,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            ← All articles
          </Link>
        </div>
      </article>
    </div>
  );
}
