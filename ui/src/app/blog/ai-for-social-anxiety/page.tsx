import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Social Anxiety: Practising Real Conversations in a Low-Stakes Space | MEOK AI LABS",
  description:
    "Social anxiety affects 1 in 8 people in the UK (NHS). MEOK lets you rehearse job interviews, difficult family conversations, and first dates privately — no judgment, no impatience, persistent memory that learns your patterns.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-social-anxiety",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for Social Anxiety: Practising Real Conversations in a Low-Stakes Space",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-social-anxiety",
  author: { "@type": "Person", name: "Nicholas Templeman", jobTitle: "Founder, MEOK AI LABS", url: "https://meok.ai/about" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How common is social anxiety in the UK?",
      acceptedAnswer: { "@type": "Answer", text: "Social anxiety disorder affects approximately 1 in 8 people in the UK, according to NHS data. It is one of the most prevalent anxiety disorders, yet frequently under-diagnosed because sufferers avoid the very situations — social contact, medical appointments — that would lead to a diagnosis." },
    },
    {
      "@type": "Question",
      name: "Can an AI companion help with social anxiety?",
      acceptedAnswer: { "@type": "Answer", text: "An AI companion provides a private, zero-judgment space to rehearse conversations before they happen in real life. It cannot replace IAPT therapy or clinical treatment, but it reduces the stakes of practice: you can stumble, restart, or repeat the same scenario without social consequence." },
    },
    {
      "@type": "Question",
      name: "What kinds of conversations can I practise with MEOK?",
      acceptedAnswer: { "@type": "Answer", text: "MEOK can simulate job interviews, first-date conversations, awkward family discussions, asserting limits with a colleague, or making a phone call you have been avoiding. You set the scenario; MEOK plays the other party at whatever difficulty level you need, from gentle to realistic." },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember my previous practice sessions?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. MEOK's persistent sovereign memory stores every session in an encrypted vault only you control. It tracks which scenarios you have practised, where you tend to freeze or over-apologise, and how your confidence changes across weeks — giving each new session a foundation rather than starting from scratch." },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for CBT or IAPT therapy for social anxiety?",
      acceptedAnswer: { "@type": "Answer", text: "No. MEOK is a practice and reflection tool, not a clinical intervention. NHS Talking Therapies (formerly IAPT) offers evidence-based CBT for social anxiety and can be reached by self-referral on 0300 123 3393. MEOK works best alongside, not instead of, professional support." },
    },
    {
      "@type": "Question",
      name: "Why does consistent AI behaviour matter for social anxiety?",
      acceptedAnswer: { "@type": "Answer", text: "Social anxiety is maintained partly by hypervigilance to unpredictable social cues. MEOK never displays impatience, frustration, or shifting moods — the same quality of presence every session, at any hour. This consistency makes it a reliably safe practice space that erratic human interactions cannot provide." },
    },
  ],
};

// ── Shared style constants ────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG   = "#0d0c18";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForSocialAnxietyPage() {
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
              Social Anxiety
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>March 24, 2026</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>9 min read</span>
          </div>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)", color: "#fff", lineHeight: 1.18, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
            AI Companion for Social Anxiety: Practising Real Conversations in a Low-Stakes Space
          </h1>
          <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "42rem", margin: 0 }}>
            Social anxiety affects <strong style={{ color: "rgba(245,240,232,0.82)" }}>1 in 8 people in the UK</strong> (NHS).
            NHS waiting lists for therapy stretch months. In that gap, MEOK offers unlimited, judgment-free conversation
            practice built on persistent memory that learns your patterns session by session.
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
              MEOK is a supplementary support tool, not a clinical device or therapy replacement. For NHS-funded CBT,
              self-refer to <strong style={{ color: "rgba(245,240,232,0.8)" }}>NHS Talking Therapies</strong> on{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>0300 123 3393</strong>. In crisis call{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>Samaritans 116 123</strong> or{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>NHS 111</strong>.
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
            <p
              style={{ fontWeight: 700, color: TEXT, fontSize: "0.875rem", margin: "0 0 0.2rem" }}
            >
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", margin: 0 }}>
              Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── Q1 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          How common is social anxiety in the UK?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Social anxiety disorder affects approximately{" "}
          <strong style={{ color: TEXT }}>1 in 8 people in the UK</strong>, according to NHS data — one of the most prevalent
          anxiety conditions in Britain. Despite its reach, it is chronically under-diagnosed: those who live with it often
          avoid the GP appointments, job interviews, and social gatherings that might lead them to seek support.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Social anxiety disorder is not shyness. It is a persistent, intense fear of being judged or humiliated in social
          or performance situations — one that significantly disrupts work, relationships, and daily life. The NHS classifies
          it as an anxiety disorder and identifies Cognitive Behavioural Therapy as the primary evidence-based treatment.
          Adults in England can self-refer to NHS Talking Therapies without a GP referral.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          The gap between recognising social anxiety and accessing professional support often stretches weeks or months.
          During that period, avoidance tends to deepen — each bypassed opportunity making the next one feel harder. MEOK is
          designed to keep momentum going in that gap: practising rather than retreating, reflecting rather than ruminating.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q2 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          Can an AI companion help with social anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Yes — within clearly defined limits. MEOK is useful as a{" "}
          <em style={{ color: "rgba(245,240,232,0.82)" }}>practice space</em>. One of the most effective elements of CBT
          for social anxiety is behavioural exposure: gradually approaching feared situations rather than avoiding them.
          In the real world, exposure opportunities are scarce and carry genuine social stakes. MEOK removes those stakes entirely.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          You can rehearse a conversation as many times as needed, restart mid-sentence, or ask for a harder version once
          you feel ready — without any social consequence. None of this replaces professional treatment, but it usefully
          fills the gap between recognising a problem and accessing clinical support.
        </p>
        <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.22)", borderLeft: "3px solid #c9a84c", borderRadius: "0.5rem", padding: "1rem 1.3rem", margin: "0 0 1.75rem" }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(245,240,232,0.78)", lineHeight: 1.68 }}>
            <strong style={{ color: GOLD }}>MEOK&#39;s role:</strong> a private, patient, consistent practice partner — not a therapist,
            not a diagnosis tool, not a substitute for the clinical support that social anxiety disorder deserves.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q3 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          What kinds of conversations can I practise with MEOK?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Any conversation you have been avoiding. MEOK simulates real-world social scenarios and adapts its tone and
          difficulty to where you are in your confidence. Some of the most common uses:
        </p>
        <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}>Job interviews</p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Run through a full interview, rework the same answer multiple ways, or ask MEOK to push back on your responses.
          It remembers how you performed last time and raises the difficulty incrementally as your confidence builds.
        </p>
        <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}>Awkward family conversations</p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Setting a limit with a parent, telling a sibling something they do not want to hear, navigating a tense family
          dinner. Brief MEOK on the specific dynamics — including phrases your family member typically uses — and rehearse
          until the words feel natural.
        </p>
        <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}>First dates and social introductions</p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Social anxiety hits hardest in unstructured situations without a script. Practising small talk, topic transitions,
          and handling silence can reduce the anticipatory dread that leads many people to cancel plans entirely.
        </p>
        <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}>Workplace scenarios</p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Asking your manager for a pay rise, disagreeing with a colleague in a meeting, or sending a difficult email.
          MEOK helps you rehearse and tracks across sessions whether this class of interaction is becoming less triggering.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          You are not limited to preset scenarios. Because MEOK holds full context, you can describe a real situation in
          detail — the specific person, the history, the stakes — and practise with that level of specificity rather than
          a generic approximation. The more precisely you describe the situation, the more useful the rehearsal.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q4 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          Does MEOK remember my previous practice sessions?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Yes. Persistent sovereign memory is what distinguishes MEOK from generic AI chat tools. Every session is stored
          in an encrypted vault that only you control — never used to train AI models, never shared with third parties.
          MEOK knows which scenarios you have practised, where you tend to freeze or over-apologise, and how your language
          shifts across weeks.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          In practice: MEOK knows you tried the job interview scenario three times in January and found the opening question
          hardest. It builds on that history rather than treating each session as a fresh start — which is exactly the
          continuity that makes practice cumulative rather than circular.
        </p>
        <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.22)", borderLeft: "3px solid #c9a84c", borderRadius: "0.5rem", padding: "1rem 1.3rem", margin: "0 0 1.75rem" }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(245,240,232,0.78)", lineHeight: 1.68 }}>
            <strong style={{ color: GOLD }}>On privacy:</strong> your memory is yours. No conversation data is used for advertising
            or model training. You can read or delete your memory at any time.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q5 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          Is MEOK a replacement for CBT or IAPT therapy for social anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          No — and this is non-negotiable. Social anxiety disorder is a clinical condition that responds well to Cognitive
          Behavioural Therapy delivered by a qualified practitioner. MEOK is not a clinical intervention, a therapy programme,
          or a medical device. It cannot conduct structured exposure hierarchies, provide video feedback, or replicate the
          therapeutic relationship that underpins lasting clinical change.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          If you live in England you can self-refer to{" "}
          <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> on{" "}
          <strong style={{ color: TEXT }}>0300 123 3393</strong> — no GP referral needed, and self-referral takes under five
          minutes. Scotland, Wales, and Northern Ireland have equivalent programmes through their respective NHS services.
          MEOK works best alongside, not instead of, professional support.
        </p>
        <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.22)", borderLeft: "3px solid #c9a84c", borderRadius: "0.5rem", padding: "1rem 1.3rem", margin: "0 0 1.75rem" }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(245,240,232,0.78)", lineHeight: 1.68 }}>
            <strong style={{ color: GOLD }}>Self-referral takes two minutes:</strong> visit{" "}
            <a href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>nhs.uk/talking-therapies</a>{" "}
            or call <strong style={{ color: TEXT }}>0300 123 3393</strong>. No GP referral needed. Free for adults in England.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── What MEOK cannot do ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          What can&#39;t an AI companion do for social anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          There are things MEOK cannot do and will not pretend to. It cannot simulate the physiological reality of social
          fear — the racing heart, the voice that goes quiet, the flush of heat. Exposure practice with MEOK does not carry
          the same bodily activation as real exposure, which means the neurological habituation that CBT targets happens more
          fully in real situations with real people.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          MEOK also cannot diagnose social anxiety disorder, assess severity, provide a safety plan, or offer the therapeutic
          relationship that underpins clinical change. If social anxiety is significantly affecting your career, relationships,
          or ability to leave the house, the right step is professional support — not more AI practice. MEOK will name this
          directly if your conversations suggest you need more than it can offer.
        </p>
        <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.22)", borderLeft: "3px solid #c9a84c", borderRadius: "0.5rem", padding: "1rem 1.3rem", margin: "0 0 1.75rem" }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(245,240,232,0.78)", lineHeight: 1.68 }}>
            <strong style={{ color: GOLD }}>A note on avoidance:</strong> if conversations with MEOK are becoming a way to avoid
            real situations rather than prepare for them, it will name that — gently but honestly.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── UK Statistics ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          What do UK statistics tell us about the scale of social anxiety?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          NHS data puts social anxiety disorder at approximately{" "}
          <strong style={{ color: TEXT }}>1 in 8 UK adults</strong> — roughly 8.3 million people. It typically first appears
          in adolescence, with a median onset age of around 13. Without treatment, it tends to persist into adulthood, often
          co-occurring with depression, generalised anxiety disorder, and alcohol dependency.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          NHS Talking Therapies waiting times vary by region but commonly stretch six to twelve weeks. During that wait,
          many people manage by shrinking their world — refusing social invitations, delaying career moves, or avoiding phone
          calls altogether. MEOK is a way to use that waiting period constructively: practising rather than retreating, building
          conversational muscle rather than letting avoidance deepen.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Q6 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.2vw,1.4rem)", color: TEXT, lineHeight: 1.3, margin: "0 0 0.85rem", letterSpacing: "-0.01em" }}>
          Why does consistent AI behaviour matter for social anxiety specifically?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.82)", fontSize: "1rem", lineHeight: 1.72, margin: "0 0 1.15rem" }}>
          Social anxiety is maintained partly by hypervigilance to unpredictable social cues — scanning faces for boredom,
          impatience, or disapproval. Real human interactions are genuinely unpredictable. MEOK is not. It does not sigh,
          glance at its phone, or give shorter answers when tired. The quality of presence it offers is identical at 2 am
          on a Sunday as at noon on a Monday — which is what makes it a reliably safe practice environment.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          This is not coldness — it is consistency. MEOK also does not inflate your performance. Its persistent memory lets
          it notice that you have apologised unnecessarily in every conversation for three months, and surface that observation
          gently rather than validating the pattern silently. Honest reflection, even when uncomfortable, is more useful
          than frictionless approval.
        </p>
        <p style={{ color: "rgba(245,240,232,0.62)", fontSize: "0.965rem", lineHeight: 1.78, margin: "0 0 1rem" }}>
          Most AI systems are trained to generate responses that feel good to users — affirming, validating, and frictionless.
          For social anxiety this creates a subtle trap: it models social interaction as universally smooth and accepting, which
          the real world is not. MEOK can be warm and it can be challenging. It adjusts its tone to what the session needs,
          not to what maximises approval ratings.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── UK Support Resources ── */}
        <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.28)", borderRadius: "0.75rem", padding: "1.5rem 1.75rem", marginBottom: "2.25rem" }}>
          <p style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 700, margin: "0 0 0.9rem", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
            UK Support Resources — Social Anxiety
          </p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", listStyle: "disc", color: "rgba(245,240,232,0.75)", fontSize: "0.9rem", lineHeight: 1.85 }}>
            <li>
              <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> — free CBT via self-referral in England.{" "}
              <a href="tel:03001233393" style={{ color: GOLD, textDecoration: "underline" }}>0300 123 3393</a>{" "}
              or{" "}
              <a href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>nhs.uk</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>Social Anxiety UK</strong> — information, forums, and peer support groups.{" "}
              <a href="https://social-anxiety.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>social-anxiety.org.uk</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>Mind</strong> — mental health information and local support.{" "}
              <a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>mind.org.uk</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>Samaritans</strong> — free, 24/7 emotional support.{" "}
              <a href="tel:116123" style={{ color: GOLD, textDecoration: "underline" }}>116 123</a>{" "}
              or <a href="mailto:jo@samaritans.org" style={{ color: GOLD, textDecoration: "underline" }}>jo@samaritans.org</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>No Panic</strong> — helpline and recovery groups for anxiety disorders.{" "}
              <a href="https://nopanic.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "underline" }}>nopanic.org.uk</a>
            </li>
          </ul>
        </div>

        {/* ── Medical disclaimer ── */}
        <div style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.09)", borderRadius: "0.6rem", padding: "1rem 1.3rem", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.775rem", color: "rgba(245,240,232,0.38)", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "rgba(245,240,232,0.5)" }}>Medical &amp; therapeutic disclaimer:</strong>{" "}
            This article is for informational purposes only and does not constitute medical advice, psychological diagnosis,
            or clinical guidance. MEOK is not a medical device, therapy application, or regulated mental health service.
            It cannot diagnose social anxiety disorder or any other condition. If social anxiety is significantly affecting
            your life, please speak to a qualified healthcare professional. MEOK AI LABS does not accept liability for
            decisions made on the basis of this content.
          </p>
        </div>

        {/* ── CTA ── */}
        <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.75rem", padding: "2rem", textAlign: "center" as const, marginBottom: "3rem" }}>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT, margin: "0 0 0.5rem" }}>
            Ready to practise before it matters?
          </p>
          <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.58)", margin: "0 0 1.5rem" }}>
            MEOK remembers every session, never judges, and gives you the same quality of presence at 2 am as at noon —
            so you can build conversational confidence privately, at your own pace.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: GOLD,
              color: BG,
              fontWeight: 800,
              fontSize: "0.9rem",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
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
            <Link href="/blog/ai-for-relationship-anxiety" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              AI Companion for Relationship Anxiety: Processing Attachment, Not Replacing Connection
            </Link>
            <Link href="/blog/ai-memory-explained" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              AI Memory Explained: Why Persistent Memory Changes Everything
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
