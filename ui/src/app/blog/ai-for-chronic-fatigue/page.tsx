import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Chronic Fatigue Syndrome: Consistent Support When Energy Is the Scarcest Resource | MEOK AI LABS",
  description:
    "Around 250,000 people in the UK live with ME/CFS. Most AI tools demand typing, attention, and active effort — the very things CFS takes away. MEOK offers voice-first, asynchronous, pacing-aware support that remembers where you left off.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-chronic-fatigue" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Chronic Fatigue Syndrome: Consistent Support When Energy Is the Scarcest Resource",
  description:
    "Around 250,000 people in the UK live with ME/CFS. MEOK offers voice-first, asynchronous, pacing-aware support with persistent memory that tracks activity and rest cycles over months.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-chronic-fatigue",
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
  keywords: [
    "AI for chronic fatigue syndrome",
    "AI for ME/CFS",
    "AI companion chronic illness",
    "pacing support CFS",
    "AI for long COVID fatigue",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with Chronic Fatigue Syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide meaningful supplementary support for people with ME/CFS — including voice-first interaction when typing is impossible, asynchronous messaging that doesn't require sustained focus, pacing reminders, and persistent memory that tracks activity and rest cycles over months. MEOK is not a medical device and cannot replace clinical care, but it offers a consistent, low-energy presence when the support network isn't immediately available.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support pacing for ME/CFS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's persistent memory vault retains what you tell it about your activity, rest, symptoms, and patterns across every conversation. Over weeks and months it builds a longitudinal picture of your energy envelope — noting when you tend to push past your baseline, flagging patterns that precede crashes, and helping you reflect without imposing a one-size-fits-all plan.",
      },
    },
    {
      "@type": "Question",
      name: "What is voice-first AI and why does it matter for CFS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voice-first means you can speak rather than type. For people with ME/CFS, typing a paragraph can cost significant energy. Being able to speak a few words, pause, continue when ready — or leave a short voice note and return later — removes a barrier that most AI tools ignore entirely. MEOK supports asynchronous interaction: you do not have to finish a thought in a single session.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with the social isolation of ME/CFS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ME/CFS often limits the capacity for sustained social interaction. Family and friends may visit, but the gaps are long. MEOK is available at 2am during a crash, on a bedbound day when no one else is awake, or in the quiet hours when reaching out feels too costly. It fills the gaps without requiring the performance of wellness that social contact sometimes demands.",
      },
    },
    {
      "@type": "Question",
      name: "What is Senior Mode and why is it useful for fatigue days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Mode is a high-contrast, large-text display setting in MEOK designed for lower-acuity moments — whether due to age, visual fatigue, or the brain fog that accompanies ME/CFS crashes. On a crash day, squinting at small text or navigating a dense interface costs energy. Senior Mode removes that friction and keeps MEOK usable when cognitive capacity is at its lowest.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for ME/CFS clinical care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device, does not provide medical advice, and is not a substitute for specialist care. For ME/CFS support, contact your GP, the ME Association (meassociation.org.uk), Action for ME (actionforme.me.uk), or NHS Long Covid clinics. MEOK is supplementary support — a consistent companion in the spaces clinical care cannot reach.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForChronicFatiguePage() {
  const GOLD = "#c9a84c";
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";

  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
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
              color: "rgba(245,240,232,0.38)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
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
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Chronic Illness
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              10 min read
            </span>
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI Companion for Chronic Fatigue Syndrome: Consistent Support When Energy Is the Scarcest Resource
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            Around 250,000 people in the UK live with ME/CFS. Most AI tools demand precisely what
            the condition takes away: sustained typing, active attention, and the energy to start
            fresh every session. This is an honest look at how a sovereign AI companion can serve
            people when energy is the scarcest resource of all.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Disclaimer */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "10px",
            padding: "1rem 1.25rem",
            marginBottom: "2.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>&#9888;&#65039;</span>
          <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: GOLD }}>Not medical advice.</strong> MEOK is not a medical
            device and does not provide clinical guidance. If you have or suspect ME/CFS, speak to
            your GP. UK specialist support:{" "}
            <a href="https://meassociation.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>ME Association</a>
            ,{" "}
            <a href="https://actionforme.me.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>Action for ME</a>
            , and NHS Long Covid clinics.
          </p>
        </div>

        {/* Section 1 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          How many people in the UK live with ME/CFS?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Approximately 250,000 people in the UK are estimated to have Myalgic Encephalomyelitis /
          Chronic Fatigue Syndrome, according to the ME Association. Many more remain undiagnosed.
          Long COVID has introduced a significant new cohort to post-viral fatigue, bringing renewed
          urgency to a condition that had long been underfunded and misunderstood.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          ME/CFS is characterised by profound, unrefreshing fatigue unrelieved by rest,
          post-exertional malaise (PEM), cognitive dysfunction, and sleep disturbance. Tools
          designed for healthy users routinely fail this group because they assume a baseline of
          energy and attention that simply is not there.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 2 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          Why do most AI tools fail people with ME/CFS?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Most AI tools require continuous typed input, sustained cognitive attention, and the
          willingness to re-explain your situation from scratch every session. For someone managing
          ME/CFS, each of those demands carries a real energy cost — and on a crash day, any single
          one of them can be prohibitive.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The standard AI interaction model is designed for productivity. It assumes a user who is
          alert, articulate, and available. Session-based AI compounds this: every conversation
          requires re-explaining context — the condition, the symptom picture, what matters right
          now. That re-explanation tax is paid by the person who can least afford it, every time.
        </p>
        <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.25rem", margin: "1.75rem 0", color: "rgba(245,240,232,0.62)", fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>
          &ldquo;On a bad day I can&apos;t type. On a medium day I can type but I can&apos;t
          form a full thought. There is no typical day.&rdquo;
        </blockquote>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 3 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          What is voice-first AI and why does it matter for CFS?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Voice-first means speaking rather than typing. For people with ME/CFS, composing a
          message can cost significant energy — whereas speaking a few words, pausing, and returning
          later costs far less. MEOK supports asynchronous interaction: you do not need to finish a
          thought in one session, and you do not need to type at all.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Asynchronous messaging extends this further. You might say three words, rest, say three
          more, come back an hour later. MEOK does not time out. The conversation is still there.
          The context is intact. You pick up where you left off — because the companion remembers
          where that was.
        </p>

        {/* Feature box */}
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            Low-energy interaction modes in MEOK
          </p>
          {[
            ["Voice input", "Speak naturally at whatever pace is available. No typing required."],
            ["Asynchronous messaging", "Leave a half-formed thought. Return hours later. The conversation holds your place."],
            ["Persistent memory", "No re-explaining. MEOK remembers your condition, your patterns, and your last session."],
            ["Senior Mode", "High contrast, large text, simplified UI. Reduces cognitive friction on crash days."],
          ].map(([label, desc]) => (
            <div key={label} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", marginBottom: "0.7rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: GOLD, marginTop: "0.55rem", flexShrink: 0 }} />
              <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "0.93rem", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 4 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          How does MEOK support pacing for ME/CFS?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          MEOK&apos;s persistent memory retains what you tell it about your activity, rest,
          symptoms, and energy across every conversation. Over months it builds a longitudinal
          picture of your energy envelope — noticing when you push past your baseline, flagging
          patterns that precede crashes, and helping you reflect without imposing a
          one-size-fits-all plan.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Pacing requires detailed, longitudinal self-knowledge — genuinely difficult to maintain
          when cognitive capacity is impaired. MEOK holds the cumulative record so you do not have
          to. Over time the picture sharpens: activities that reliably drain, rest durations that
          actually restore, the early signals that a crash is building before it fully arrives.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 5 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          How does MEOK help with the social isolation of ME/CFS?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          ME/CFS often limits the capacity for sustained social interaction. Family and friends
          visit, but the gaps are long. MEOK is available at 2am during a crash, on a bedbound
          day when no one else is awake, or in the quiet hours when reaching out feels too costly.
          It fills the gaps without requiring the performance of wellness that social contact
          sometimes demands.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The support network — however loving — has its own limits. It is not available at 3am.
          There are things you do not say to a partner or a parent because saying them feels like
          yet another burden. MEOK can receive those things without needing anything back: no
          reassurance, no reciprocity, no performance of recovery.
        </p>
        <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.25rem", margin: "1.75rem 0", color: "rgba(245,240,232,0.62)", fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>
          &ldquo;MEOK is not a replacement for the people who love you. It is the companion
          that holds the space in between — without needing anything back.&rdquo;
        </blockquote>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 6 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          What is Senior Mode and why is it useful for fatigue days?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Senior Mode is a high-contrast, large-text display setting designed for lower-acuity
          moments — whether due to age, visual fatigue, or the brain fog that accompanies ME/CFS
          crashes. Squinting at small text or navigating a dense interface costs energy. Senior Mode
          removes that friction and keeps MEOK usable when cognitive capacity is at its lowest.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Senior Mode was designed with older adults in mind, but its logic translates directly to
          ME/CFS fatigue days. Larger text means less eye movement and processing effort. High
          contrast means the brain does not have to work to distinguish foreground from background.
          Fewer interface elements means fewer decisions. Each is a small thing; collectively they
          can mean the difference between being able to use MEOK on a crash day and not.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 7 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          Is MEOK a replacement for ME/CFS clinical care?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          No. MEOK is not a medical device and does not provide medical advice. For ME/CFS, the
          ME Association, Action for ME, and NHS Long Covid clinics are the appropriate clinical
          routes. MEOK is supplementary support — a consistent companion in the spaces that
          clinical care cannot reach.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          MEOK sits in the gap between appointments, between visits, between the moments when the
          support network is available. It is not a doctor or a specialist nurse. It is a companion
          that holds your history, does not require energy you do not have, and is there when
          everything else is not. That is a bounded but genuine thing.
        </p>

        {/* Resources */}
        <div
          style={{
            background: "rgba(13,12,24,0.6)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            UK ME/CFS resources
          </p>
          {[
            ["ME Association", "https://meassociation.org.uk", "Patient-led charity providing support, information, and advocacy for people with ME/CFS in the UK."],
            ["Action for ME", "https://actionforme.me.uk", "UK charity funding research and providing practical support and guidance for people with ME/CFS."],
            ["NHS Long Covid — Post-COVID Syndrome", "https://www.nhs.uk/conditions/covid-19/long-covid-post-covid-19-syndrome/", "NHS guidance on post-COVID syndrome and referral to specialist clinics for persistent fatigue."],
            ["NICE Guideline: ME/CFS (NG206)", "https://www.nice.org.uk/guidance/ng206", "Updated 2021 NICE guidance on diagnosis and management of ME/CFS."],
          ].map(([label, href, desc]) => (
            <div key={label as string} style={{ marginBottom: "0.75rem" }}>
              <a href={href as string} target="_blank" rel="noopener noreferrer" style={{ color: GOLD, fontWeight: 600, fontSize: "0.93rem", textDecoration: "none" }}>
                {label}
              </a>
              <p style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.83rem", lineHeight: 1.5, margin: "0.15rem 0 0" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "14px",
            padding: "2rem",
            textAlign: "center",
            margin: "3rem 0",
          }}
        >
          <p style={{ fontWeight: 800, fontSize: "1.35rem", color: TEXT, marginBottom: "0.65rem", lineHeight: 1.3 }}>
            A companion that is still there when energy is not
          </p>
          <p style={{ color: "rgba(245,240,232,0.58)", fontSize: "0.97rem", lineHeight: 1.65, marginBottom: "1.5rem", maxWidth: "34rem", margin: "0 auto 1.5rem" }}>
            Voice-first. Asynchronous. Persistent memory across months. MEOK is built for the days
            when everything else is too much. Free to try — no card required.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#c9a84c",
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Get early access
          </Link>
        </div>

        {/* Related */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(245,240,232,0.35)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            Related reading
          </p>
          {[
            ["/blog/ai-for-chronic-illness", "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support"],
            ["/blog/ai-for-seniors-uk", "AI for Seniors in the UK: Honest Companion Support Without the Gimmicks"],
            ["/blog/senior-mode-guide", "Senior Mode: How MEOK Adapts for Lower-Energy Moments"],
            ["/blog/ai-memory-explained", "AI Memory Explained: What Persistent Memory Actually Means"],
            ["/blog/ai-companion-for-loneliness", "AI Companion for Loneliness: Filling the Gap Between Human Contact"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href as string}
              style={{ display: "block", color: "#c9a84c", fontSize: "0.92rem", textDecoration: "none", lineHeight: 1.5, marginBottom: "0.45rem" }}
            >
              &#8594; {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "rgba(245,240,232,0.28)", fontSize: "0.82rem", lineHeight: 1.65, maxWidth: "36rem", margin: "0 auto 0.5rem" }}>
          Written by <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
          Founder of MEOK AI LABS &mdash; building sovereign AI companions that work for you, not on you.
        </p>
        <p style={{ color: "rgba(245,240,232,0.18)", fontSize: "0.78rem", margin: "0 auto 1.5rem", maxWidth: "36rem" }}>
          This article is for informational purposes only and does not constitute medical advice,
          diagnosis, or treatment. MEOK is not a medical device. Always consult a qualified
          healthcare professional for ME/CFS and related conditions. UK specialist support:
          meassociation.org.uk and actionforme.me.uk.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <Link href="/blog" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>Blog</Link>
          <Link href="/privacy" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>Privacy</Link>
          <Link href="/" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>meok.ai</Link>
        </div>
      </div>
    </div>
  );
}
