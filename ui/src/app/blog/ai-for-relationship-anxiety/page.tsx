import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Relationship Anxiety: Processing Attachment, Not Replacing Connection | MEOK AI LABS",
  description:
    "Around 1 in 5 UK adults show anxious or avoidant attachment patterns. An honest guide to what a sovereign AI companion can and cannot offer — journaling, pattern recognition, and honest reflection between therapy sessions.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-relationship-anxiety",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for Relationship Anxiety: Processing Attachment, Not Replacing Connection",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-relationship-anxiety",
  author: { "@type": "Person", name: "Nicholas Templeman", jobTitle: "Founder, MEOK AI LABS", url: "https://meok.ai/about" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is relationship anxiety and how common is it in the UK?",
      acceptedAnswer: { "@type": "Answer", text: "Relationship anxiety describes persistent worry, fear of abandonment, or hypervigilance within close relationships. Research suggests roughly 20% of UK adults exhibit anxious or avoidant attachment patterns. It often co-occurs with generalised anxiety disorder and can severely affect daily functioning and relationship stability." },
    },
    {
      "@type": "Question",
      name: "Can an AI companion help with relationship anxiety?",
      acceptedAnswer: { "@type": "Answer", text: "An AI companion can provide a low-pressure space to process anxious thoughts between therapy sessions, track recurring triggers over time, and offer honest reflection rather than automatic reassurance. It cannot replace couples therapy, diagnose attachment disorders, or substitute human intimacy. It works best alongside professional support." },
    },
    {
      "@type": "Question",
      name: "What attachment styles fuel relationship anxiety?",
      acceptedAnswer: { "@type": "Answer", text: "Relationship anxiety most commonly stems from anxious-preoccupied attachment — craving closeness while fearing abandonment. Fearful-avoidant attachment also produces intense anxiety. Both styles are shaped by early caregiving and can be explored with a therapist using Emotionally Focused Therapy or schema therapy." },
    },
    {
      "@type": "Question",
      name: "Why won't MEOK just reassure me that my relationship is fine?",
      acceptedAnswer: { "@type": "Answer", text: "MEOK includes a sycophancy detector that flags when a reassuring response would be dishonest given the patterns it has observed. Blanket reassurance reinforces anxiety-seeking behaviour. MEOK reflects what it actually notices in your language and history — more useful than false comfort, even when harder to hear." },
    },
    {
      "@type": "Question",
      name: "What can MEOK do that a journal cannot?",
      acceptedAnswer: { "@type": "Answer", text: "A static journal cannot read its own entries, spot recurring themes, or ask a follow-up question four weeks later. MEOK's persistent memory holds your full history — noticing that anxiety spikes on Sunday evenings, or that a specific phrase from a partner consistently triggers rumination — and brings that context into every future conversation." },
    },
    {
      "@type": "Question",
      name: "When should I seek professional help for relationship anxiety?",
      acceptedAnswer: { "@type": "Answer", text: "Seek professional help if relationship anxiety is causing significant distress, affecting work or health, leading to controlling behaviour, or persisting despite self-help efforts. In the UK you can self-refer to NHS Talking Therapies, contact Relate at relate.org.uk, or speak to your GP. In crisis, call Samaritans on 116 123." },
    },
  ],
};

// ── Shared style constants ────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG   = "#0d0c18";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForRelationshipAnxietyPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: "8rem", paddingBottom: "3.5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", color: "rgba(245,240,232,0.38)", marginBottom: "2rem", textDecoration: "none" }}>
            &#8592; Back to Blog
          </Link>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.375rem 0.75rem", borderRadius: "9999px", color: GOLD, background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
              Relationships &amp; Attachment
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>March 24, 2026</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>9 min read</span>
          </div>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)", color: "#fff", lineHeight: 1.18, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
            AI Companion for Relationship Anxiety: Processing Attachment, Not Replacing Connection
          </h1>
          <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "42rem", margin: 0 }}>
            Around 1 in 5 UK adults carry anxious or avoidant attachment patterns into every relationship they form.
            Relate&#39;s waiting lists stretch for weeks. In that space, a sovereign AI companion with honest memory
            can help you think — but only if you know precisely what it can and cannot do.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Crisis disclaimer */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <div
            style={{
              width: "3px",
              borderRadius: "9999px",
              flexShrink: 0,
              background: GOLD,
              alignSelf: "stretch",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: GOLD,
                marginBottom: "0.375rem",
              }}
            >
              This article is not medical advice
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK is a supplementary support tool, not a clinical device or therapy replacement. If you are in
              crisis, contact <strong style={{ color: "rgba(245,240,232,0.8)" }}>Samaritans on 116 123</strong> (free,
              24/7), <strong style={{ color: "rgba(245,240,232,0.8)" }}>NHS 111</strong>,{" "}
              <a
                href="https://www.relate.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: "underline" }}
              >
                relate.org.uk
              </a>
              , or{" "}
              <a
                href="https://www.mind.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: "underline" }}
              >
                mind.org.uk
              </a>
              .
            </p>
          </div>
        </div>

        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "9999px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: BG,
              fontSize: "0.75rem",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.875rem", margin: "0 0 0.2rem" }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", margin: 0 }}>
              Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── Q1 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is relationship anxiety and how common is it in the UK?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Relationship anxiety describes a persistent undercurrent of fear — that a partner will leave, that you are
          unlovable, or that closeness is dangerous. Research on adult attachment suggests roughly{" "}
          <strong style={{ color: TEXT }}>20% of UK adults</strong> display anxious or avoidant patterns. The Mental
          Health Foundation consistently ranks relationship difficulties as a top-five driver of poor mental health in Britain.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Attachment theory identifies four adult styles: secure, anxious-preoccupied, dismissive-avoidant, and fearful-avoidant.
          Anxious-preoccupied individuals crave reassurance and amplify threat signals. Fearful-avoidant individuals simultaneously
          want and dread intimacy — often the most painful pattern to live with. These are learned patterns, not fixed diagnoses,
          and they can change with consistent reflection and professional support.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Q2 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Can an AI companion help with relationship anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Yes, within specific limits. A sovereign AI companion can offer a low-pressure space to process anxious thoughts
          between therapy sessions, track recurring triggers across months, and provide honest reflection rather than reflexive
          reassurance. It cannot replace couples therapy, diagnose attachment disorders, or substitute the lived experience of
          human intimacy.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          The gap it genuinely fills is the <em style={{ color: "rgba(245,240,232,0.82)" }}>between-session void</em>. Therapy
          meets once a week; relationship anxiety does not schedule itself. The 11 pm spiral after a partner reads your message
          and does not reply — these moments need somewhere to go. A journal helps, but a journal cannot ask a follow-up question
          or notice this pattern has appeared seventeen times in two months.
        </p>
        <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.22)", borderLeft: "3px solid #c9a84c", borderRadius: "0.5rem", padding: "1rem 1.3rem", margin: "0 0 1.75rem" }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(245,240,232,0.78)", lineHeight: 1.68 }}>
            <strong style={{ color: GOLD }}>MEOK&#39;s role:</strong> a thinking partner that holds your full history, reflects
            honestly, and always refers you to qualified human support when something falls outside its scope.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q3 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          What attachment styles fuel relationship anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Relationship anxiety most commonly stems from anxious-preoccupied attachment — craving closeness while fearing
          abandonment — and fearful-avoidant attachment, which oscillates between desperate need and painful withdrawal.
          Both styles are shaped by early caregiving and can be addressed through Emotionally Focused Therapy, schema
          therapy, or EMDR with a qualified practitioner.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Understanding your attachment style is a map, not a life sentence. MEOK supports the naming process by learning
          your specific vocabulary — the phrases that appear when you are spiralling, the situations that reliably precede
          abandonment fear — across weeks and months, giving conversations a precision no single journaling session can match.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── What MEOK offers ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          What does MEOK offer people processing relationship anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          MEOK offers three concrete things: a persistent-memory journal that notices patterns across months; structured
          prompts that help you distinguish anxious interpretation from observable fact; and honest reflection that does
          not simply validate every worried thought.
        </p>
        <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}>1. Processing thoughts between therapy sessions</p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Most useful material from a session surfaces in the days after — a memory triggered by what your therapist said,
          an argument that suddenly makes new sense. MEOK gives you somewhere to put these realisations immediately, at any
          hour, so your therapist works with richer material rather than reconstructing the week.
        </p>
        <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}>2. Structured journaling with context</p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Freewriting about anxiety can deepen rumination. MEOK steers conversations toward questions that shift perspective:
          What evidence exists for this fear, separate from the feeling? What would you tell a close friend? These are the
          same questions a CBT or EFT therapist would ask, applied in the moment the anxiety is live.
        </p>
        <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}>3. Pattern recognition over time</p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          MEOK&#39;s sovereign memory stores everything in an encrypted vault only you can access. Across months it surfaces
          patterns you may not consciously notice: anxiety escalating before a significant anniversary, arguments following
          a predictable sequence, abandonment fear intensifying under work pressure.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── What MEOK cannot do ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          What can&#39;t an AI companion do for relationship anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          An AI companion cannot replace couples therapy, substitute real relational repair, diagnose any clinical condition,
          or simulate the felt experience of secure human attachment. These are not engineering limitations — they are hard
          boundaries that exist for good reason.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Relationship anxiety is a relational wound. It heals in relationship. Couples therapy requires two people, a trained
          clinician, and the real dynamics of the relationship in the room. MEOK has none of those things. If your relationship
          is in active distress,{" "}
          <a href="https://www.relate.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>
            Relate
          </a>{" "}
          is the appropriate first call.
        </p>
        <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.22)", borderLeft: "3px solid #c9a84c", borderRadius: "0.5rem", padding: "1rem 1.3rem", margin: "0 0 1.75rem" }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(245,240,232,0.78)", lineHeight: 1.68 }}>
            <strong style={{ color: GOLD }}>A note on dependency:</strong> if your conversations with MEOK are replacing
            rather than supporting real relationships, it will name that — gently but directly.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q4 — sycophancy ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          Why won&#39;t MEOK just reassure me that my relationship is fine?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          MEOK includes a sycophancy detector that checks whether a reassuring response would be honest given the patterns it
          has observed. Blanket reassurance reinforces the reassurance-seeking behaviour that sustains relationship anxiety.
          MEOK reflects what it actually notices in your language and history — even when that is harder to receive than false
          comfort.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Most AI systems are trained to generate affirming responses because they score higher with users. For relationship
          anxiety this is actively harmful. Someone in an anxious spiral needs help distinguishing the{" "}
          <em style={{ color: "rgba(245,240,232,0.82)" }}>feeling</em> of threat from the{" "}
          <em style={{ color: "rgba(245,240,232,0.82)" }}>actual presence</em> of threat. MEOK&#39;s sycophancy detector runs
          before each response is delivered; if it detects a dishonest reassurance is forming, it generates a more honest reply
          instead.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q5 — vs journal ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          What can MEOK do that a journal cannot?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          A static journal cannot read its own entries, notice recurring themes four months later, or ask a follow-up
          question based on something you wrote in January. MEOK&#39;s persistent memory holds your full history —
          noticing that your Sunday-evening anxiety is a pattern, not a one-off — and brings that context into every
          future conversation.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          The difference is between storage and awareness. A journal stores. MEOK holds and works. The utility of what
          you share compounds over time in a way it simply cannot with a paper notebook or a static notes app.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── UK stats ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          What do UK statistics tell us about relationship anxiety and attachment?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Relate&#39;s annual surveys consistently find relationship difficulties among the primary drivers of poor mental
          health in Britain. Approximately 42% of UK marriages end in divorce, and relationship breakdown is a leading cause
          of NHS Talking Therapies referrals. Anxious and avoidant attachment together account for roughly 40% of the adult
          population globally — suggesting millions of UK adults navigate relationships without a secure base.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          NHS waiting times for relationship-focused counselling remain long. Relate offers self-funded sessions from around
          £50. The gap between recognising a problem and accessing professional support stretches weeks or months — during
          which unprocessed anxiety can deepen and damage the relationship further. MEOK is a way to use that waiting period
          constructively, not a substitute for the support that follows.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q6 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          When should I seek professional help for relationship anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Seek professional help if relationship anxiety is causing significant distress, affecting your work or physical
          health, leading to controlling or harmful behaviour, or persisting despite sustained self-help efforts. In the
          UK you can self-refer to NHS Talking Therapies, contact{" "}
          <a href="https://www.relate.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>
            Relate
          </a>{" "}
          for relationship counselling, or speak to your GP. If you are in crisis, call Samaritans on{" "}
          <strong style={{ color: TEXT }}>116 123</strong>.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── UK Support Resources ── */}
        <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.28)", borderRadius: "0.75rem", padding: "1.5rem 1.75rem", marginBottom: "2.25rem" }}>
          <p style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 700, margin: "0 0 0.9rem", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
            UK Support Resources
          </p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", listStyle: "disc", color: "rgba(245,240,232,0.75)", fontSize: "0.9rem", lineHeight: 1.85 }}>
            <li>
              <strong style={{ color: TEXT }}>Relate</strong> — relationship counselling across the UK.{" "}
              <a href="https://www.relate.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>relate.org.uk</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>Samaritans</strong> — free, 24/7 emotional support.{" "}
              <a href="tel:116123" style={{ color: GOLD, textDecoration: "underline" }}>116 123</a>{" "}
              or <a href="mailto:jo@samaritans.org" style={{ color: GOLD, textDecoration: "underline" }}>jo@samaritans.org</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>Mind</strong> — mental health information and local support.{" "}
              <a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>mind.org.uk</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> — free self-referral to CBT and other therapies.{" "}
              <a href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>nhs.uk</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>BACP Therapist Directory</strong> — find an accredited therapist.{" "}
              <a href="https://www.bacp.co.uk/search/Therapists" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>bacp.co.uk</a>
            </li>
          </ul>
        </div>

        {/* ── Medical disclaimer ── */}
        <div style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.09)", borderRadius: "0.6rem", padding: "1rem 1.3rem", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.775rem", color: "rgba(245,240,232,0.38)", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "rgba(245,240,232,0.5)" }}>Medical &amp; therapeutic disclaimer:</strong>{" "}
            This article is for informational purposes only and does not constitute medical advice, psychological diagnosis,
            or clinical guidance. MEOK is not a medical device, therapy application, or regulated mental health service.
            It cannot diagnose attachment disorders, anxiety disorders, or any other condition. If you are experiencing
            significant distress, please speak to a qualified healthcare professional. MEOK AI LABS does not accept liability
            for decisions made on the basis of this content.
          </p>
        </div>

        {/* ── CTA ── */}
        <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.75rem", padding: "2rem", textAlign: "center" as const, marginBottom: "3rem" }}>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT, margin: "0 0 0.5rem" }}>
            Ready to process, not ruminate?
          </p>
          <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.58)", margin: "0 0 1.5rem" }}>
            MEOK remembers everything you share — across weeks and months — and reflects honestly rather than telling you
            what you want to hear.
          </p>
          <Link href="/" style={{ display: "inline-block", background: GOLD, color: BG, fontWeight: 800, fontSize: "0.9rem", padding: "0.75rem 2rem", borderRadius: "0.5rem", textDecoration: "none", letterSpacing: "0.02em" }}>
            Meet MEOK
          </Link>
        </div>

        {/* ── Related reading ── */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.73rem", fontWeight: 700, color: "rgba(245,240,232,0.32)", textTransform: "uppercase" as const, letterSpacing: "0.08em", margin: "0 0 0.9rem" }}>
            Related Reading
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.55rem" }}>
            <Link href="/blog/ai-for-anxiety" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              AI for Anxiety: Can a Sovereign AI Companion Actually Help?
            </Link>
            <Link href="/blog/ai-companion-vs-therapist" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              AI Companion vs Therapist: What Is the Actual Difference?
            </Link>
            <Link href="/blog/ai-for-depression" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              AI for Depression: Honest Support Without False Comfort
            </Link>
            <Link href="/blog/building-care-into-ai" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              Building Care Into AI: The Maternal Covenant Framework
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)", padding: "2.5rem 1.5rem", textAlign: "center" as const }}>
        <p style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.26)", margin: "0 0 0.5rem" }}>
          &copy; {new Date().getFullYear()} MEOK AI LABS. Founded by Nicholas Templeman.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" as const }}>
          <Link href="/privacy" style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.28)", textDecoration: "none" }}>Privacy</Link>
          <Link href="/blog" style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.28)", textDecoration: "none" }}>Blog</Link>
          <Link href="/" style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.28)", textDecoration: "none" }}>meok.ai</Link>
        </div>
      </div>
    </div>
  );
}
