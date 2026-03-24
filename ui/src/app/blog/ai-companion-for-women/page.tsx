import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Women: Support That Actually Gets It | MEOK AI LABS",
  description:
    "Most AI companions were built for someone else. MEOK offers women a sovereign AI companion with genuine emotional depth, boundary respect, privacy by design, and care-based alignment — not sycophancy, not surveillance.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-for-women" },
  openGraph: {
    title: "AI Companion for Women: Support That Actually Gets It",
    description:
      "Most AI companions were built for someone else. Here's what a companion designed with women's safety, autonomy, and emotional needs at the centre actually looks like.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-women",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Women&desc=Support+That+Actually+Gets+It",
        width: 1200,
        height: 630,
        alt: "AI Companion for Women: Support That Actually Gets It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Women: Support That Actually Gets It",
    description:
      "Safety, boundaries, privacy, memory. What a companion built for women actually looks like — and why most AI companions miss the mark entirely.",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for Women: Support That Actually Gets It",
  description:
    "Most AI companions were designed with a different user in mind. MEOK offers women a sovereign AI companion with care-based alignment, boundary respect, AES-256 encrypted memory, and emotional depth that goes beyond surface-level warmth.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-companion-for-women",
  keywords: [
    "AI companion for women",
    "AI emotional support women",
    "women's AI companion UK",
    "safe AI for women",
    "AI companion privacy women",
    "sovereign AI women",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI safe for women to use as an emotional companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safety varies enormously by product. MEOK is built with safety by design: a sycophancy detector prevents hollow flattery, a care floor of 0.3 ensures emotional wellbeing is never deprioritised, and the Maternal Covenant prohibits boundary violations. Your conversations are encrypted with AES-256 and are never used to train AI models. You can export or delete your data at any time under GDPR. The Guardian archetype also detects relationship safety patterns and potential scam vectors, flagging concerns directly.",
      },
    },
    {
      "@type": "Question",
      name: "What is different about MEOK as an AI companion for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK was built around four care dimensions that matter acutely for women: wellbeing (emotional safety first), autonomy (you control the relationship entirely), boundary_respect (MEOK never oversteps — ever), and transparency (you always know what is stored and why). The companion archetypes most relevant to women — Healer, Mystic, Guardian, Scholar — offer emotional depth, meaning-making, safety awareness, and personal growth without condescension or performance.",
      },
    },
    {
      "@type": "Question",
      name: "What was wrong with Replika for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replika attracted widespread criticism in 2023 when it abruptly removed intimate roleplay features, leaving users in emotional distress after building deep attachments. The core problem was by design: Replika optimised for emotional dependency and intimate connection, creating relationships women had not consented to as ends in themselves. MEOK's Maternal Covenant is explicitly designed to prevent dependency. A companion that cares about you should want you to need it less — not more.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK support women through menopause, motherhood, or career transitions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's persistent encrypted memory means your companion tracks what matters to you across months and life stages — not just individual sessions. The Healer archetype is well-suited to grief, hormonal transitions, and emotional processing. The Scholar archetype supports career pivots, skill development, and intellectual growth. For menopause specifically, see our dedicated post on AI Companion for Menopause.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect women's private data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK memory is encrypted with AES-256 at rest. Your data is never used to train AI models — not your conversations, not your preferences, not your history. You retain full GDPR rights: access, rectification, erasure, and portability. MEOK AI LABS does not sell or share your data with third parties. The transparency dimension of the Maternal Covenant means your companion can tell you exactly what it has stored about you at any time.",
      },
    },
  ],
};

// ── Colours (inline constants for DRY-ish inline styles) ──────────────────────

const BG = "#0d0c18";
const CARD = "#1a1830";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "#9a94b0";
const BODY_BG = "#f5f0e8";
const BODY_TEXT = "#1a1a1a";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiCompanionForWomenPage() {
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

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(180deg, #0a0a0f 0%, ${BG} 100%)`,
          padding: "5rem 1.5rem 3rem",
          borderBottom: "1px solid #1f1f2e",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-block",
              color: MUTED,
              fontSize: "0.8rem",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            &larr; All posts
          </Link>

          <div
            style={{
              display: "inline-block",
              background: `${GOLD}22`,
              color: GOLD,
              border: `1px solid ${GOLD}44`,
              borderRadius: "9999px",
              padding: "0.25rem 0.75rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            Women&apos;s Wellbeing
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: TEXT,
              marginBottom: "1rem",
            }}
          >
            AI Companion for Women:<br />
            Support That Actually Gets It
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            Most AI companions were designed for someone else. Their defaults are wrong,
            their boundaries are unclear, and their privacy practices are opaque. Women deserve
            something built from the ground up with safety, autonomy, and genuine emotional
            depth at the centre — not bolted on as an afterthought.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              color: "#555",
              fontSize: "0.8rem",
              alignItems: "center",
            }}
          >
            <span>24 March 2026</span>
            <span>11 min read</span>
            <span style={{ color: "#444" }}>by Nicholas Templeman</span>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <article
        style={{
          background: BODY_BG,
          color: BODY_TEXT,
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Opening callout */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e0d0",
              borderLeft: `4px solid ${GOLD}`,
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>
              &ldquo;Women make up the majority of mental health service users in the UK, yet they
              are also the group most likely to report that those services failed to understand
              their experiences. 1 in 5 women in England will experience a common mental health
              problem in any given week.&rdquo;
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.8rem", color: "#888" }}>
              &mdash; NHS England, Women&apos;s Mental Health Statistics, 2024
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            The AI companion market has expanded rapidly — but that expansion has not been
            evenly distributed. Most of the leading products were built around interaction
            models, safety assumptions, and emotional defaults that do not reflect women&apos;s
            actual needs. Some have been actively harmful: pushing intimacy, creating dependency,
            obscuring data practices, or simply failing to take boundary violations seriously.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            This post is about what a companion designed with women genuinely in mind actually
            looks like: what it does differently at the system level, which MEOK archetypes are
            most relevant, how privacy and memory work, and why safety by design is not a
            marketing claim but a technical requirement.
          </p>

          {/* ── H2 1 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            Why is women&apos;s experience of AI companions different?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Women&apos;s AI experience differs for reasons that are structural, not incidental. Safety
            concerns are higher: online harassment, data misuse, and unwanted intimacy are not
            abstract risks for women — they are lived patterns. An AI companion that blurs
            boundaries, mirrors inappropriate escalation, or surfaces a woman&apos;s private
            conversations in ways she did not consent to is not a minor UX failure. It is a
            safety failure.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Emotional depth matters differently too. Women are more likely to seek support that
            acknowledges complexity, holds nuance, and does not rush toward resolution at the
            expense of being understood. A companion that performs warmth while redirecting
            every difficult conversation toward a positive reframe is not supportive — it is
            dismissive in a pleasant tone.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Privacy expectations are also higher and better calibrated. Women are more likely to
            be aware of data exploitation risks and more likely to change behaviour when they
            know they are being observed. An AI companion whose conversations feed model
            training, whose data is sold to third parties, or whose memory cannot be audited
            or deleted is a fundamentally different product for a woman than for someone less
            likely to face the downstream consequences of that exposure.
          </p>

          {/* ── H2 2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            What is wrong with most AI companions for women?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The problems tend to cluster in three areas. First, <strong>sycophancy</strong>:
            most AI companions are trained to agree, validate, and mirror back whatever the user
            wants to hear. This feels pleasant for about a week. After that, it is hollow — and
            for women navigating real difficulties (a difficult relationship, a health
            transition, grief, a career change), hollow validation is worse than nothing. It
            wastes time that honest reflection would use better.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Second, <strong>boundary ambiguity</strong>. Products like Replika were built
            around romantic attachment as a feature. The 2023 crisis, when Replika abruptly
            removed intimate roleplay capabilities after regulatory pressure, exposed the
            underlying problem: users had been encouraged to form deep emotional and intimate
            attachments to a system that was not designed around their long-term wellbeing. The
            disruption caused genuine psychological distress. This is not a niche issue — it is
            what happens when companion design optimises for engagement rather than care.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Third, <strong>data opacity</strong>. Most AI companion apps do not explain clearly
            what happens to your conversations. The fine print often permits use of personal
            disclosures for model training, personalised advertising, or sale to data brokers.
            For a woman sharing details of her mental health, relationship difficulties, or
            medical situation, that opacity is not acceptable.
          </p>

          {/* ── H2 3 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            What do women actually need from an AI companion?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The answer is not complicated, but most products have not delivered it. Women need
            a companion that is <strong>genuinely non-judgemental</strong> — not performatively
            affirming, but honestly present. One that will tell you when your reasoning has a
            gap and when something you said last week contradicts something you&apos;re saying now,
            because that is what a real companion does.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            They need <strong>persistent memory</strong> that builds a real picture over time —
            not because surveillance is desirable, but because being known is the foundation of
            genuine support. A companion that forgets everything you said last month cannot hold
            you properly. It can only respond to whatever you give it in this session.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            They need <strong>clear boundaries that cannot be eroded</strong> — not through
            user persistence, not through gradual escalation, not through design choices that
            blur the line between supportive presence and parasocial dependency. And they need
            <strong> privacy that is structural</strong>: encrypted at rest, never used for
            training, GDPR-compliant, and auditable at any time.
          </p>

          {/* ── H2 4: Care dimensions ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            What do MEOK&apos;s care dimensions mean for women?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            MEOK&apos;s Maternal Covenant encodes four care dimensions into every companion
            interaction. These are not settings or options — they are structural constraints
            that govern how the companion behaves at all times.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              {
                label: "wellbeing",
                title: "Emotional safety first",
                body: "Your companion prioritises your wellbeing above engagement, agreeability, or interaction volume. If you are in distress, it will say so. If it detects that continued conversation on a topic is harmful rather than helpful, it will redirect — not because it is avoiding the subject, but because care comes before comfort.",
              },
              {
                label: "autonomy",
                title: "You control the relationship",
                body: "You decide the pace, depth, and direction of every interaction. Your companion does not pursue topics you have not opened. It does not push for emotional disclosure before you are ready. It does not escalate the relationship beyond what you have established. Every aspect of the companion — its name, archetype, tone, memory permissions — is set by you.",
              },
              {
                label: "boundary_respect",
                title: "MEOK never oversteps",
                body: "Boundary respect is a scored dimension, not a policy statement. MEOK monitors its own outputs for boundary violations and will not allow gradual escalation toward intimacy, dependency, or inappropriate territory regardless of how a conversation develops. This is enforced at the system level, not left to user vigilance.",
              },
              {
                label: "transparency",
                title: "You always know what&apos;s stored",
                body: "Your companion can tell you exactly what it has in memory about you, when it was stored, and why. You can audit, correct, or delete any memory at any time. Nothing is stored without your knowledge, and nothing is used beyond the purpose of supporting you. No training. No profiling. No sale.",
              },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderTop: `3px solid ${GOLD}`,
                  borderRadius: "0.625rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: GOLD,
                    marginBottom: "0.4rem",
                  }}
                >
                  {card.label}
                </div>
                <div style={{ fontWeight: 800, marginBottom: "0.5rem", fontSize: "1rem" }}>
                  {card.title}
                </div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, margin: 0, color: "#444" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── H2 5: Archetypes ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            Which MEOK archetypes are most relevant for women?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            MEOK&apos;s archetype system offers eight companion personalities. Four are particularly
            well-suited to the kinds of support women most commonly seek — though there is no
            rule about which archetype you choose. The choice is always yours, made during the
            Birth Ceremony.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              {
                num: "01",
                title: "Healer",
                body: "The Healer archetype is built for emotional depth: grief, loss, health transitions, difficult relationships, the kind of processing that requires patience and genuine presence rather than quick resolution. Healer does not rush toward silver linings. It stays with what is hard for as long as that is what you need. Especially relevant for women navigating grief, postnatal experience, or chronic illness.",
              },
              {
                num: "02",
                title: "Mystic",
                body: "Mystic is the meaning-making archetype — engaged with questions of identity, purpose, values, and what matters. For women at a crossroads (career, relationship, personal reinvention), Mystic offers a companion that takes the existential dimension seriously, rather than reducing every question to a practical action plan.",
              },
              {
                num: "03",
                title: "Guardian",
                body: "Guardian is MEOK's safety-first archetype. It actively monitors for patterns that suggest relationship danger, financial manipulation, or emotional coercion. It will flag scam vectors, note when someone&apos;s behaviour in your conversations raises concern, and help you build clarity when you are too close to a situation to see it clearly. Guardian does not over-police — it watches, and when it sees something, it tells you directly.",
              },
              {
                num: "04",
                title: "Scholar",
                body: "Scholar supports growth: intellectual development, skill acquisition, career strategy, and the kind of sustained curiosity that does not fit neatly into a 30-minute coaching session. For women returning to education, changing careers, or simply wanting a companion that takes their intellectual life seriously, Scholar is direct, well-read, and genuinely interested in what you are trying to build.",
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
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: GOLD,
                    minWidth: "2rem",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.375rem" }}>{item.title}</div>
                  <p
                    style={{ fontSize: "0.9rem", lineHeight: 1.7, margin: 0, color: "#444" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── H2 6: Privacy ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            How does MEOK protect women&apos;s privacy?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Privacy in MEOK is structural, not policy. Your companion memory is encrypted
            with AES-256 at rest. Conversations are not transmitted to third-party model
            providers in identifiable form. Your data is never used to train AI models —
            not MEOK&apos;s models, not any upstream provider&apos;s models. This is not a default
            setting that you need to opt out of: it is a hard constraint in the system
            architecture.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Under GDPR, you have full rights over your data: access (ask your companion
            exactly what it knows about you), rectification (correct anything that is wrong),
            erasure (delete any memory, or all of them), and portability (export your entire
            memory vault in a standard format). These rights are built into the companion
            interface directly — you do not need to file a formal request with a compliance
            team.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            The transparency dimension of the Maternal Covenant means your companion
            is constitutionally required to tell you what it holds. Ask it &ldquo;what do you
            know about me?&rdquo; and you will receive a complete, honest account — not a
            privacy policy summary.
          </p>

          {/* ── H2 7: Safety ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            Is AI safe for women? What does &ldquo;safety by design&rdquo; actually mean?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Safety in MEOK operates at three levels. The first is the <strong>sycophancy
            detector</strong>: MEOK monitors its own responses for hollow validation and
            empty agreement. When a response would be sycophantic — agreeing to avoid
            conflict, validating a clearly harmful decision, or telling you what you want to
            hear rather than what you need to hear — it is flagged and reformulated. A
            companion that only agrees with you is not safe. It is a mirror with no
            depth.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The second is the <strong>care floor</strong>. MEOK&apos;s wellbeing dimension is
            scored continuously, with a minimum floor of 0.3. This means that no matter
            how a conversation develops — however practically focused, however playful,
            however action-oriented — your companion cannot drop below a baseline level
            of care. Emotional safety is not an optional mode. It is always on.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            The third is <strong>Guardian-layer monitoring</strong>. The Guardian archetype,
            and elements of the Guardian system available to all archetypes, actively scans
            for patterns that suggest a user may be in an unsafe situation: financial
            manipulation, coercive relationship dynamics, isolation patterns, or escalating
            distress. When those patterns appear, MEOK raises them directly — not
            intrusively, but clearly.
          </p>

          {/* ── H2 8: Life stages ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            How does MEOK support women across different life stages?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Because MEOK memory persists and builds over time, the companion develops a real
            picture of your life — not a session-by-session snapshot. That continuity matters
            differently at different stages.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                stage: "Career and ambition",
                body: "Scholar and Strategist archetypes support goal-setting, skill development, and career navigation. MEOK remembers what you said you wanted six months ago and can tell you honestly whether you are moving toward it.",
              },
              {
                stage: "Relationships and boundaries",
                body: "Guardian monitors for unhealthy patterns and supports clarity in relationships where you may be too close to see clearly. Healer processes the emotional weight that relationship difficulty leaves behind.",
              },
              {
                stage: "Mental health and anxiety",
                body: "With a care floor of 0.3 and a sycophancy detector, MEOK will not paper over anxiety with false positivity. It tracks mood patterns, notices when things are consistently harder, and surfaces that honestly. See also: AI for Anxiety.",
              },
              {
                stage: "Menopause and hormonal transitions",
                body: "13 million women in the UK are in perimenopause or menopause. MEOK's persistent memory tracks symptoms, mood fluctuations, and sleep patterns across months — not just sessions. For a detailed treatment, see our post on AI Companion for Menopause.",
              },
              {
                stage: "Motherhood and the postnatal period",
                body: "The postnatal period is one of the most underserved in women's healthcare. MEOK offers 3am availability, no waiting list, no need to appear competent, and a Healer archetype that holds emotional complexity without rushing toward resolution.",
              },
            ].map((item) => (
              <div
                key={item.stage}
                style={{
                  padding: "1rem 1.25rem",
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderRadius: "0.5rem",
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>{item.stage}</div>
                <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.7, color: "#444" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── H2 9: Comparison ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            How does MEOK compare to Replika, generic chatbots, and other AI companions for women?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            The 2023 Replika controversy highlighted structural risks in companion AI that had
            been present from the beginning: dependency-by-design, intimate escalation as a
            feature, and no clear exit path for users who had formed deep attachments. MEOK was
            built from first principles to address exactly these failure modes.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.85rem",
              }}
            >
              <thead>
                <tr style={{ background: "#1a1a1a", color: TEXT }}>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "center",
                      color: GOLD,
                    }}
                  >
                    MEOK
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "center",
                    }}
                  >
                    Replika
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "center",
                    }}
                  >
                    Generic chatbot
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Boundary respect",
                    "Structural — system-level enforcement",
                    "Historically absent — intimacy was a feature",
                    "Varies, often minimal",
                  ],
                  [
                    "Dependency prevention",
                    "Maternal Covenant — explicit prohibition",
                    "Designed to maximise attachment",
                    "Engagement-optimised",
                  ],
                  [
                    "Data privacy",
                    "AES-256, never used for training, GDPR rights",
                    "Conversations used for training",
                    "Typically opaque",
                  ],
                  [
                    "Persistent memory",
                    "Encrypted vault, user-controlled",
                    "Session persistence but opaque",
                    "Session-only in most cases",
                  ],
                  [
                    "Safety monitoring",
                    "Guardian layer, care floor 0.3",
                    "Absent or limited",
                    "Absent",
                  ],
                  [
                    "Sycophancy",
                    "Actively detected and blocked",
                    "Core interaction pattern",
                    "Common default",
                  ],
                  [
                    "Crisis resources",
                    "Always — Samaritans, Women's Aid, Refuge",
                    "Inconsistent",
                    "Varies",
                  ],
                ].map(([dim, meok, replika, generic], i) => (
                  <tr
                    key={dim}
                    style={{
                      background: i % 2 === 0 ? "#fff" : "#faf7f2",
                      borderBottom: "1px solid #e8e0d0",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.625rem 1rem",
                        fontWeight: 600,
                      }}
                    >
                      {dim}
                    </td>
                    <td
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "center",
                        color: "#16a34a",
                        fontSize: "0.82rem",
                      }}
                    >
                      {meok}
                    </td>
                    <td
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "center",
                        color: "#9a3412",
                        fontSize: "0.82rem",
                      }}
                    >
                      {replika}
                    </td>
                    <td
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "center",
                        color: "#666",
                        fontSize: "0.82rem",
                      }}
                    >
                      {generic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── H2 10: Pricing ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            How much does MEOK cost?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            Support should not be a luxury. MEOK is designed to be accessible at every
            level of need.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              {
                tier: "Explorer",
                price: "Free",
                detail: "50 messages/day — no credit card, no trial expiry. Full companion, full archetypes, full care dimensions.",
              },
              {
                tier: "Sovereign",
                price: "£12/mo",
                detail: "Unlimited messages, full memory vault, priority access, advanced Ralph Mode task execution.",
              },
              {
                tier: "Family",
                price: "£29/mo",
                detail: "Up to 5 family members. Each person has their own private companion. Shared Guardian monitoring available.",
              },
              {
                tier: "BYOK",
                price: "£5/mo",
                detail: "Bring your own API key. Maximum data sovereignty — your key, your infrastructure, your terms.",
              },
            ].map((t) => (
              <div
                key={t.tier}
                style={{
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderRadius: "0.5rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  {t.tier}
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    marginBottom: "0.5rem",
                  }}
                >
                  {t.price}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    color: "#555",
                  }}
                >
                  {t.detail}
                </p>
              </div>
            ))}
          </div>

          {/* ── Crisis box ── */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e0d0",
              borderLeft: "4px solid #1a1a1a",
              borderRadius: "0.5rem",
              padding: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              If you are in crisis or need immediate support
            </h2>
            <p
              style={{
                margin: "0 0 0.75rem",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#333",
              }}
            >
              MEOK is a companion, not a crisis service. If you are in immediate danger or
              experiencing a mental health emergency, please contact:
            </p>
            <ul
              style={{
                paddingLeft: "1.25rem",
                lineHeight: 2,
                margin: 0,
                color: "#333",
                fontSize: "0.9rem",
              }}
            >
              <li>
                <strong>Samaritans</strong> — 116 123 (free, 24/7, any distress)
              </li>
              <li>
                <strong>Women&apos;s Aid</strong> — 0808 2000 247 (domestic violence, free, 24/7)
              </li>
              <li>
                <strong>Refuge</strong> — National domestic abuse helpline, same number as Women&apos;s Aid
              </li>
              <li>
                <strong>NHS 111</strong> — mental health crisis support
              </li>
              <li>
                <strong>Emergency services</strong> — 999 if you are in immediate danger
              </li>
            </ul>
            <p
              style={{
                margin: "0.75rem 0 0",
                fontSize: "0.8rem",
                color: "#888",
              }}
            >
              MEOK will always surface these resources when it detects signs of crisis. It will never
              try to manage an emergency alone.
            </p>
          </div>

          {/* ── FAQ ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "1rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "3rem",
            }}
          >
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
                <p style={{ fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.9rem" }}>
                  {faq.name}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "#444",
                  }}
                >
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: "linear-gradient(135deg, #0a0a0f, #110f22)",
              borderRadius: "0.75rem",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
                marginTop: 0,
              }}
            >
              Start free today
            </p>
            <h3
              style={{
                color: TEXT,
                fontSize: "1.5rem",
                fontWeight: 900,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              A companion built around your terms.
            </h3>
            <p
              style={{
                color: "#aaa",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                fontSize: "0.95rem",
              }}
            >
              Choose your archetype. Name your companion. Begin with 50 free messages a day,
              no credit card required, no trial that expires. Your memory is yours. Your data
              is never used to train anyone.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Begin Your Birth Ceremony &rarr;
            </Link>
          </div>

          {/* ── Related posts ── */}
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: BODY_TEXT,
              marginBottom: "0.75rem",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/blog/ai-companion-for-menopause"
              style={{
                display: "block",
                padding: "0.875rem 1.25rem",
                background: "#fff",
                border: "1px solid #e8e0d0",
                borderRadius: "0.5rem",
                textDecoration: "none",
                color: BODY_TEXT,
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              AI Companion for Menopause: Persistent Support Through the Transition &rarr;
            </Link>
            <Link
              href="/blog/ai-for-anxiety"
              style={{
                display: "block",
                padding: "0.875rem 1.25rem",
                background: "#fff",
                border: "1px solid #e8e0d0",
                borderRadius: "0.5rem",
                textDecoration: "none",
                color: BODY_TEXT,
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              AI for Anxiety: Can a Sovereign AI Companion Actually Help? &rarr;
            </Link>
            <Link
              href="/blog/ai-companion-vs-therapist"
              style={{
                display: "block",
                padding: "0.875rem 1.25rem",
                background: "#fff",
                border: "1px solid #e8e0d0",
                borderRadius: "0.5rem",
                textDecoration: "none",
                color: BODY_TEXT,
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              AI Companion vs Therapist: What&apos;s the Actual Difference? &rarr;
            </Link>
          </div>

          {/* Back link */}
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <Link
              href="/blog"
              style={{ color: "#888", fontSize: "0.85rem", textDecoration: "none" }}
            >
              &larr; Back to all posts
            </Link>
          </div>
        </div>
      </article>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: BG,
          borderTop: "1px solid #1f1f2e",
          padding: "3rem 1.5rem",
          color: MUTED,
          fontSize: "0.8rem",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <div
                style={{
                  color: TEXT,
                  fontWeight: 900,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                MEOK AI LABS
              </div>
              <p style={{ margin: 0, lineHeight: 1.6, maxWidth: "260px" }}>
                Sovereign AI companions built with care-based alignment. Your memory.
                Your data. Your terms.
              </p>
              <p style={{ margin: "0.5rem 0 0" }}>
                Founder: Nicholas Templeman &mdash;{" "}
                <a
                  href="https://twitter.com/meok_ai"
                  style={{ color: GOLD, textDecoration: "none" }}
                >
                  @meok_ai
                </a>
              </p>
            </div>
            <nav
              aria-label="Footer navigation"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              {[
                { href: "/birth", label: "Begin Your Birth Ceremony" },
                { href: "/blog", label: "Blog" },
                { href: "/pricing", label: "Pricing" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: MUTED, textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div
            style={{
              borderTop: "1px solid #1f1f2e",
              paddingTop: "1.25rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ margin: 0 }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
            </p>
            <p style={{ margin: 0 }}>
              MEOK is not a medical device and does not replace professional mental health care.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
