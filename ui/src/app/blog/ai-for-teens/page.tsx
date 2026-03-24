import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Teenagers: Safe Companions, School Support, and Why Sovereignty Matters for Young People | MEOK Blog",
  description:
    "How MEOK AI LABS builds safe AI companions for teens aged 13–17: school-safe mode, parental controls, GDPR under-18 consent, crisis resources, and an honest look at the risks and benefits.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-teens" },
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI safe for teenagers to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can be safe for teenagers when designed with age-appropriate safeguards. MEOK requires parental consent for users under 16, enforces a school-safe content filter, and complies fully with the UK Children's Code and UK GDPR. No adult content is ever surfaced to teen accounts.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI companions help teenagers with school and studying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's AI companion helps teenagers break down complex topics, plan revision schedules, and explain difficult concepts step by step. It supports GCSE and A-Level subjects without doing homework for students, actively encouraging understanding over shortcut answers.",
      },
    },
    {
      "@type": "Question",
      name: "What are the risks of AI companions for teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main risks are emotional dependency and parasocial attachment. Teens are at a critical stage of social development. If AI companionship substitutes for human relationships rather than complementing them, the long-term impact on social skills and mental health may be serious.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect teenager privacy and data under GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under UK GDPR, children aged 13–17 require verifiable parental consent before using MEOK. Data is stored on sovereign infrastructure that never trains on personal conversations. Parents receive a dashboard with visibility and control over their child's AI interactions.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK useful for neurodiverse teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is particularly beneficial for neurodiverse teens — those with ADHD, autism, dyslexia, or social anxiety. The AI communicates at the teen's pace without judgement, offers structured support, and adapts its communication style to individual cognitive needs.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a teenager is in crisis while using MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If MEOK detects distress signals or a teen expresses they are struggling, it immediately surfaces crisis resources: Childline (0800 1111), Young Minds (youngminds.org.uk), and Crisis Text Line (text 85258). It never attempts to replace professional mental health support.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const page: React.CSSProperties = {
  background: "#0d0c18",
  color: "#f5f0e8",
  minHeight: "100vh",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const hero: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "72px 24px 48px",
};

const eyebrow: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "16px",
};

const h1: React.CSSProperties = {
  fontSize: "clamp(1.75rem, 4vw, 2.65rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  color: "#f5f0e8",
  marginBottom: "20px",
};

const lead: React.CSSProperties = {
  fontSize: "1.1rem",
  lineHeight: 1.75,
  color: "#b8b0a0",
  marginBottom: "28px",
  maxWidth: "660px",
};

const metaRow: React.CSSProperties = {
  fontSize: "0.83rem",
  color: "#7a7268",
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const divider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #1f1e2e",
  margin: "40px auto",
  maxWidth: "780px",
};

const article: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "0 24px 80px",
};

const h2: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginTop: "54px",
  marginBottom: "14px",
  lineHeight: 1.35,
};

const h3: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 600,
  color: "#c9a84c",
  marginTop: "30px",
  marginBottom: "10px",
};

const p: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "#c8c0b0",
  marginBottom: "17px",
};

const atomicAnswer: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "#c8c0b0",
  marginBottom: "18px",
  padding: "13px 17px",
  borderLeft: "3px solid #c9a84c",
  background: "rgba(201,168,76,0.06)",
  borderRadius: "0 6px 6px 0",
};

const callout: React.CSSProperties = {
  background: "rgba(201,168,76,0.07)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "18px 22px",
  marginBottom: "22px",
};

const calloutLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "7px",
};

const calloutText: React.CSSProperties = {
  fontSize: "0.93rem",
  lineHeight: 1.7,
  color: "#b8b0a0",
  margin: 0,
};

const warnBox: React.CSSProperties = {
  background: "rgba(220,80,80,0.07)",
  border: "1px solid rgba(220,80,80,0.2)",
  borderRadius: "10px",
  padding: "18px 22px",
  marginBottom: "22px",
};

const warnLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#dc7070",
  marginBottom: "7px",
};

const crisisBox: React.CSSProperties = {
  background: "rgba(100,160,220,0.07)",
  border: "1px solid rgba(100,160,220,0.22)",
  borderRadius: "10px",
  padding: "22px 26px",
  marginBottom: "28px",
};

const crisisLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#80b8e8",
  marginBottom: "12px",
};

const crisisItem: React.CSSProperties = {
  fontSize: "0.96rem",
  lineHeight: 1.65,
  color: "#b8c8d8",
  margin: "0 0 8px 0",
};

const crisisLink: React.CSSProperties = {
  color: "#80b8e8",
  textDecoration: "underline",
  textDecorationColor: "rgba(128,184,232,0.35)",
};

const featureGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(212px, 1fr))",
  gap: "14px",
  marginBottom: "24px",
};

const featureCard: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #1f1e2e",
  borderRadius: "10px",
  padding: "16px 18px",
};

const featureLabel: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "6px",
};

const featureText: React.CSSProperties = {
  fontSize: "0.88rem",
  lineHeight: 1.6,
  color: "#a8a098",
  margin: 0,
};

const ul: React.CSSProperties = {
  paddingLeft: "20px",
  marginBottom: "16px",
};

const li: React.CSSProperties = {
  fontSize: "0.96rem",
  lineHeight: 1.75,
  color: "#c8c0b0",
  marginBottom: "5px",
};

const ctaBlock: React.CSSProperties = {
  background: "linear-gradient(135deg, #13121f 0%, #1a1828 100%)",
  border: "1px solid rgba(201,168,76,0.24)",
  borderRadius: "14px",
  padding: "34px 30px",
  textAlign: "center",
  marginTop: "52px",
  marginBottom: "40px",
};

const ctaHeading: React.CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "10px",
  marginTop: 0,
};

const ctaBody: React.CSSProperties = {
  fontSize: "0.97rem",
  color: "#a8a098",
  marginBottom: "22px",
  lineHeight: 1.6,
};

const ctaButton: React.CSSProperties = {
  display: "inline-block",
  background: "#c9a84c",
  color: "#0d0c18",
  fontWeight: 700,
  fontSize: "0.93rem",
  padding: "12px 26px",
  borderRadius: "8px",
  textDecoration: "none",
};

const footer: React.CSSProperties = {
  borderTop: "1px solid #1f1e2e",
  padding: "30px 24px",
  textAlign: "center",
  maxWidth: "780px",
  margin: "0 auto",
};

const footerP: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#4a4840",
  lineHeight: 1.6,
  margin: "0 0 10px 0",
};

const footerA: React.CSSProperties = {
  color: "#7a7268",
  textDecoration: "none",
  margin: "0 9px",
  fontSize: "0.8rem",
};

const breadcrumb: React.CSSProperties = {
  fontSize: "0.82rem",
  color: "#7a7268",
  display: "flex",
  gap: "6px",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "26px",
};

const breadcrumbA: React.CSSProperties = { color: "#7a7268", textDecoration: "none" };
const gold: React.CSSProperties = { color: "#c9a84c" };
const relA: React.CSSProperties = { color: "#c9a84c", textDecoration: "none" };
const strong: React.CSSProperties = { color: "#f5f0e8" };

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForTeensPage() {
  return (
    <div style={page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ── */}
      <header style={hero}>
        <nav style={breadcrumb} aria-label="Breadcrumb">
          <Link href="/" style={breadcrumbA}>MEOK</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog" style={breadcrumbA}>Blog</Link>
          <span aria-hidden="true">›</span>
          <span style={gold}>AI for Teenagers</span>
        </nav>

        <p style={eyebrow}>MEOK AI LABS — Nicholas Templeman</p>

        <h1 style={h1}>
          AI for Teenagers: Safe Companions, School Support, and Why Sovereignty
          Matters for Young People
        </h1>

        <p style={lead}>
          Teenagers are already using AI — for homework, for company, for answers their parents might not give
          them. The question is not whether young people will use AI. The question is whether the AI they use will
          be honest, safe, and on their side — or quietly harvesting the most sensitive data they will ever produce.
        </p>

        <div style={metaRow}>
          <span>Nicholas Templeman · Founder, MEOK AI LABS</span>
          <span>24 March 2026</span>
          <span>10 min read</span>
          <span style={gold}>Age 13+ · UK Children&apos;s Code compliant</span>
        </div>
      </header>

      <hr style={divider} />

      {/* ── Article ── */}
      <article style={article}>

        {/* 1 */}
        <h2 style={h2}>Is AI safe for teenagers to use?</h2>
        <p style={atomicAnswer}>
          AI can be safe for teenagers when it is built with age-appropriate safeguards, genuine parental
          oversight, and a design philosophy that prioritises the young person&apos;s long-term wellbeing over
          engagement metrics. Most AI products today were not designed with teens in mind. MEOK was.
        </p>
        <p style={p}>
          Safety in AI for teens is not a single feature — it is a stack of decisions made at the architecture
          level. Who holds the data? Who can see the conversations? What happens when a teenager types something
          suggesting they are in distress? On MEOK, those answers are clear: the teenager and their guardian hold
          the data; no one reads verbatim transcripts without consent; crisis resources surface immediately.
        </p>
        <p style={p}>
          For users under 16 in the UK, nothing starts without verifiable parental consent — not self-reported
          age, but a verified guardian approval flow. Under-13 registration is blocked entirely at the
          infrastructure level. These are not policy documents — they are architectural constraints.
        </p>

        {/* 2 */}
        <h2 style={h2}>Can AI companions help teenagers with school and studying?</h2>
        <p style={atomicAnswer}>
          Yes — used correctly, AI is one of the most effective study tools available to teenagers today. It
          offers patient, on-demand explanation of difficult concepts, adaptive revision support, and a
          judgement-free space to ask questions a teenager might feel embarrassed to raise in class.
        </p>
        <p style={p}>
          MEOK&apos;s school support mode is designed around the UK curriculum. It knows the difference between
          helping a student understand a quadratic equation and doing their maths homework for them. MEOK will
          ask a student to explain their reasoning back rather than simply handing over answers — building
          comprehension that lasts beyond the exam.
        </p>
        <div style={featureGrid}>
          <div style={featureCard}>
            <p style={featureLabel}>GCSE &amp; A-Level Support</p>
            <p style={featureText}>
              Subject-aware conversations across Maths, Sciences, English, and History — aligned to AQA,
              Edexcel, and OCR specifications.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>Revision Planning</p>
            <p style={featureText}>
              Helps teens build structured timetables, break large topics into manageable chunks, and apply
              spaced repetition principles.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>Socratic Mode</p>
            <p style={featureText}>
              Guides teens through their own reasoning instead of providing answers directly — understanding
              that lasts beyond the exam hall.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>No Plagiarism Risk</p>
            <p style={featureText}>
              School-safe mode never generates pre-written essays or direct answers to set coursework tasks.
              Explanations only.
            </p>
          </div>
        </div>
        <p style={p}>
          For teenagers who struggle with concentration — whether due to ADHD, exam anxiety, or simply the
          noise of modern adolescent life — having a consistent, patient presence that helps them re-focus
          is genuinely valuable. MEOK does not get frustrated. It does not make a teenager feel stupid. It
          stays with them until they get it.
        </p>

        {/* 3 */}
        <h2 style={h2}>What are the risks of AI companions for teenagers?</h2>
        <p style={atomicAnswer}>
          The two most significant risks are emotional dependency and parasocial attachment. Teenagers are at
          a critical stage of social development. If AI companionship substitutes for human relationships rather
          than complementing them, the long-term consequences for social skills and mental health may be serious.
        </p>
        <div style={warnBox}>
          <p style={warnLabel}>Honest about the risks</p>
          <p style={{ ...calloutText, color: "#e8b0b0" }}>
            We will not pretend these risks do not exist because it helps us sell subscriptions. AI companions
            can become a crutch. Teenagers who are already socially isolated may find it easier to talk to MEOK
            than to a peer — and if that ease replaces rather than supports human connection, it is harmful.
            MEOK is explicitly designed against this pattern: conversations actively encourage real-world
            relationships rather than substituting for them.
          </p>
        </div>
        <h3 style={h3}>Signs of unhealthy AI dependency to watch for</h3>
        <ul style={ul}>
          <li style={li}>Preferring AI conversation to all human interaction, including family and close friends</li>
          <li style={li}>Distress or anxiety when unable to access the AI companion</li>
          <li style={li}>Describing the AI as a best friend with no real-world friendships alongside it</li>
          <li style={li}>Using AI interaction to avoid processing difficult emotions with real people</li>
          <li style={li}>Declining school engagement or socialising that coincides with heavy AI use</li>
        </ul>
        <p style={p}>
          If a parent notices these patterns, the MEOK parental dashboard provides usage insights and allows
          adjustments to session limits. We also recommend speaking with a school counsellor or GP if you are
          concerned about social withdrawal.
        </p>

        {/* 4 */}
        <h2 style={h2}>How does MEOK protect teenager privacy and data under GDPR?</h2>
        <p style={atomicAnswer}>
          Under UK GDPR and the UK Children&apos;s Code, children aged 13–17 require verifiable parental consent
          before creating a MEOK account. All conversation data is stored on sovereign infrastructure entirely
          under the teenager&apos;s and their guardian&apos;s control. MEOK never uses personal conversations to train AI
          models — for any user, at any age.
        </p>
        <div style={callout}>
          <p style={calloutLabel}>UK Children&apos;s Code Compliance</p>
          <p style={calloutText}>
            The Age Appropriate Design Code requires services likely to be accessed by under-18s to apply the
            highest privacy settings by default, use only the minimum data necessary, and design against features
            that exploit developmental vulnerabilities. MEOK is built to exceed these standards — parental consent
            is verified, not self-reported. Under-13 registration is blocked at the architecture level.
          </p>
        </div>
        <h3 style={h3}>Consent and account tiers by age</h3>
        <ul style={ul}>
          <li style={li}><strong style={strong}>Under 13</strong> — not eligible; account creation is blocked</li>
          <li style={li}><strong style={strong}>Ages 13–15</strong> — verifiable parental consent required before registration; Teen (supervised) account</li>
          <li style={li}><strong style={strong}>Ages 16–17</strong> — teen may consent independently per UK GDPR; parental consent strongly recommended; Teen (independent) account</li>
          <li style={li}><strong style={strong}>18+</strong> — standard adult consent and full account access</li>
        </ul>
        <p style={p}>
          The Guardian Dashboard gives parents usage summaries, broad topic overviews — not verbatim transcripts —
          daily session limits, quiet-hours windows, school-safe mode toggles, and optional crisis alert
          notifications. The adult content filter is permanently enabled on all under-18 accounts and cannot be
          disabled by the teenager.
        </p>

        {/* 5 */}
        <h2 style={h2}>Is MEOK useful for neurodiverse teenagers?</h2>
        <p style={atomicAnswer}>
          MEOK is particularly well-suited to neurodiverse teenagers — including those with ADHD, autism spectrum
          conditions, dyslexia, and social anxiety. The AI communicates without judgement, adjusts pace and
          structure to the individual, and never loses patience. For young people who find social unpredictability
          exhausting, this consistency is genuinely valuable.
        </p>
        <p style={p}>
          For teenagers with ADHD, MEOK&apos;s structured conversation approach breaks tasks into small, achievable
          steps. Hyperfocus sessions are gently redirected when the clock runs long. For autistic teenagers,
          having an interlocutor that provides literal, unambiguous answers — without social subtext or unexpected
          emotional reactions — reduces a significant source of cognitive load.
        </p>
        <div style={callout}>
          <p style={calloutLabel}>Designed for neurodiversity</p>
          <p style={calloutText}>
            MEOK supports adjustable text display, conversation pacing controls, and a simplified interface mode
            that reduces visual complexity. High-contrast colour schemes, reduced animation, and larger text options
            can be set by the teen or their guardian.
          </p>
        </div>
        <p style={p}>
          MEOK is not a therapeutic tool and does not replace SENCO support, educational psychologist input, or
          NHS CAMHS services. It is a complement — a knowledgeable, patient presence that can sit alongside
          professional support without interfering with it. For teenagers with social anxiety, the AI companion
          provides a low-stakes space to practise articulating thoughts — many report that rehearsing difficult
          conversations with MEOK before having them in person reduces anxiety significantly.
        </p>

        {/* 6 */}
        <h2 style={h2}>What happens if a teenager is in crisis while using MEOK?</h2>
        <p style={atomicAnswer}>
          If MEOK detects language associated with self-harm, suicidal ideation, or acute distress, it immediately
          surfaces UK crisis resources and encourages the teenager to reach out to a trusted adult or professional.
          MEOK does not attempt to manage a mental health crisis itself — it recognises its limits and connects
          young people to the humans and services that can actually help.
        </p>
        <div style={crisisBox}>
          <p style={crisisLabel}>UK Crisis Resources for Teenagers</p>
          <p style={crisisItem}>
            <strong style={strong}>Childline</strong> — Free, confidential support for young people under 19.{" "}
            <strong style={{ color: "#80b8e8" }}>Call 0800 1111</strong> (24/7, free from any phone)
          </p>
          <p style={crisisItem}>
            <strong style={strong}>Young Minds</strong> — Mental health support for young people and parents.{" "}
            <a href="https://youngminds.org.uk" target="_blank" rel="noopener noreferrer" style={crisisLink}>
              youngminds.org.uk
            </a>
          </p>
          <p style={crisisItem}>
            <strong style={strong}>Crisis Text Line</strong> — Text-based support when talking feels too hard.{" "}
            <strong style={{ color: "#80b8e8" }}>Text SHOUT to 85258</strong> (free, 24/7)
          </p>
          <p style={crisisItem}>
            <strong style={strong}>Samaritans</strong> — For anyone in emotional distress, whatever the reason.{" "}
            <strong style={{ color: "#80b8e8" }}>Call 116 123</strong> (free, 24/7)
          </p>
          <p style={{ ...crisisItem, marginTop: "12px", color: "#7090a8", fontSize: "0.83rem" }}>
            If you believe a young person is in immediate danger, call 999.
          </p>
        </div>
        <p style={p}>
          MEOK&apos;s crisis detection runs locally — meaning detection happens even with poor connectivity, and
          conversation content is never sent to a third party for analysis. When a guardian has crisis alerts
          enabled, they receive a notification if the system activates — without seeing specific conversation
          content, balancing guardian awareness with the teenager&apos;s right to privacy.
        </p>

        {/* 7 */}
        <h2 style={h2}>Why does sovereignty matter specifically for teenage AI users?</h2>
        <p style={atomicAnswer}>
          Teenagers produce some of the most sensitive data of their lives during adolescence: their fears, identity
          questions, mental health struggles, family tensions, and social anxieties. If that data is stored by a
          corporation, trained on, sold, or breached, the consequences follow them into adulthood. Sovereign AI —
          data that stays under the user&apos;s control — is not a luxury for teenagers. It is a necessity.
        </p>
        <p style={p}>
          Most consumer AI products are funded by data and advertising. The more intimate the conversation, the
          more valuable the data. Teenagers — who are naturally more inclined to explore identity and confide in
          any available listener — are disproportionately exposed to this extraction model. MEOK&apos;s business model
          is subscription-based: we earn money when users find value in the product, not from selling what users
          tell us. There is no advertising system to feed, no data broker relationship. The conversation stays
          where it was created — encrypted, on infrastructure MEOK controls end-to-end.
        </p>
        <div style={callout}>
          <p style={calloutLabel}>What &quot;sovereign&quot; means in practice for a teenager</p>
          <p style={calloutText}>
            Conversations are stored encrypted on infrastructure MEOK controls end-to-end. No conversation data
            is used to train AI models. No third-party analytics tools have access to conversation content. You
            can export or delete all data at any time, with no friction. This is what data sovereignty looks like
            for a 16-year-old in 2026.
          </p>
        </div>

        {/* 8 */}
        <h2 style={h2}>How does Guardian Mode work for parents of teenagers?</h2>
        <p style={atomicAnswer}>
          Guardian Mode gives parents a separate dashboard with usage visibility, content controls, daily session
          limits, and crisis notifications — without providing access to verbatim conversation transcripts. It
          balances appropriate oversight with the teenager&apos;s right to a private inner life.
        </p>
        <h3 style={h3}>Guardian Dashboard features</h3>
        <ul style={ul}>
          <li style={li}>
            <strong style={strong}>Usage summaries</strong> — Daily and weekly session lengths, broad topics
            discussed (e.g. &quot;school, study, feelings&quot;), without verbatim content
          </li>
          <li style={li}>
            <strong style={strong}>Session limits</strong> — Set maximum daily usage and quiet-hours windows,
            e.g. no AI access after 10 pm on school nights
          </li>
          <li style={li}>
            <strong style={strong}>School-safe mode</strong> — Toggle that enforces curriculum-only content,
            disables companion persona features, and restricts to study-support functions
          </li>
          <li style={li}>
            <strong style={strong}>Adult content filter</strong> — Permanently enabled for under-18 accounts;
            cannot be disabled by the teenager; covers explicit content, violence, drug use, and age-inappropriate
            material
          </li>
          <li style={li}>
            <strong style={strong}>Crisis alert</strong> — Optional notification when the crisis detection system
            activates, enabling a parent to check in without seeing the specific conversation
          </li>
          <li style={li}>
            <strong style={strong}>Account pause</strong> — Temporarily suspend the account from the guardian
            dashboard, e.g. during agreed digital breaks or exam revision lockdowns
          </li>
        </ul>
        <p style={p}>
          We have been deliberate about the boundary between oversight and surveillance. A teenager who knows their
          parent can read every message will not use the AI honestly — and dishonest use is more dangerous than no
          use at all. The guardian dashboard is designed to give parents enough information to intervene when it
          matters, without turning the AI into a monitoring device that destroys trust.
        </p>

        {/* CTA */}
        <div style={ctaBlock}>
          <h2 style={ctaHeading}>Built for young people who deserve better</h2>
          <p style={ctaBody}>
            MEOK is the AI companion that never exploits what teenagers tell it.
            Sovereign. School-safe. Honest about its limits — and yours.
          </p>
          <Link href="/signup" style={ctaButton}>
            Start with Guardian Mode
          </Link>
          <p style={{ fontSize: "0.78rem", color: "#4a4840", marginTop: "14px", marginBottom: 0 }}>
            Parental consent required for users under 16 &middot; UK GDPR compliant &middot; Free 14-day trial
          </p>
        </div>

        {/* Related */}
        <h3 style={{ ...h3, marginTop: 0 }}>Related reading</h3>
        <ul style={ul}>
          <li style={li}>
            <Link href="/blog/guardian-family-safety" style={relA}>
              Guardian Mode &amp; Family Safety — how MEOK&apos;s parental controls work
            </Link>
          </li>
          <li style={li}>
            <Link href="/blog/ai-companion-for-kids" style={relA}>
              AI Companion for Kids — safety, consent, and school-safe filters
            </Link>
          </li>
          <li style={li}>
            <Link href="/blog/meok-for-adhd" style={relA}>
              MEOK for ADHD — structured support for neurodiverse minds
            </Link>
          </li>
          <li style={li}>
            <Link href="/blog/ai-for-anxiety" style={relA}>
              AI for Anxiety — what it can and cannot do
            </Link>
          </li>
          <li style={li}>
            <Link href="/blog/why-meok-never-trains-on-you" style={relA}>
              Why MEOK never trains on you — the sovereignty promise explained
            </Link>
          </li>
        </ul>
      </article>

      {/* ── Footer ── */}
      <footer style={footer}>
        <p style={footerP}>
          &copy; {new Date().getFullYear()} MEOK AI LABS. Founded by Nicholas Templeman. All rights reserved.
        </p>
        <p style={footerP}>
          MEOK is not a medical device and does not provide clinical mental health treatment. If you or someone you
          know is in crisis, please contact Childline (0800 1111), Young Minds (youngminds.org.uk), or text SHOUT
          to 85258.
        </p>
        <nav aria-label="Footer navigation">
          <Link href="/privacy" style={footerA}>Privacy</Link>
          <Link href="/terms" style={footerA}>Terms</Link>
          <Link href="/safeguarding" style={footerA}>Safeguarding</Link>
          <Link href="/blog" style={footerA}>Blog</Link>
          <Link href="/about" style={footerA}>About</Link>
        </nav>
      </footer>
    </div>
  );
}
