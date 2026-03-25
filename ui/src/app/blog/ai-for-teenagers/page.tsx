import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Teenagers: Sovereign Support Through the Hardest Years | MEOK Blog",
  description:
    "1 in 6 young people in the UK have a probable mental health disorder — yet most AI is built for adults. MEOK offers teenagers a private, honest companion that protects their autonomy, guards against online harm, and never sells their secrets.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-teenagers" },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Teenagers: Sovereign Support Through the Hardest Years",
  description:
    "How MEOK AI LABS builds a private, honest AI companion for teenagers — covering mental health, privacy, Guardian protection, identity formation, and social media harm.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-teenagers",
  },
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK safe for teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is built from the ground up with teenage safety as a design constraint, not an afterthought. It is aligned with the UK Children's Code (Age Appropriate Design Code), requires verifiable parental consent for users under 16, permanently enables an adult content filter on all under-18 accounts, and routes any crisis signals — self-harm language, suicidal ideation, acute distress — immediately to UK support resources. MEOK does not attempt to manage a mental health crisis itself. Safety is structural, not cosmetic.",
      },
    },
    {
      "@type": "Question",
      name: "Can parents see what their teenager says to MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — parents cannot read verbatim conversation transcripts. MEOK's UK GDPR architecture treats the teenager's conversations as private. Parents access a Guardian Dashboard that shows usage summaries, broad topic categories, session lengths, and crisis alert notifications — but never the specific words their child typed. This is deliberate: a teenager who knows their parent reads every message will not use the AI honestly, and dishonest use is more dangerous than no use at all. The Guardian Dashboard provides enough oversight to intervene when it matters, without surveillance that destroys trust.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect teenagers from online harm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Guardian system operates across three layers of protection. First, it detects scam patterns — financial fraud attempts, phishing hooks, impersonation — and surfaces warnings to the teenager in real time. Second, it recognises toxic relationship dynamics: manipulation tactics, coercive control signals, and language patterns consistent with grooming. Third, the adult content filter permanently blocks explicit content, violence, and age-inappropriate material on all under-18 accounts. When specific threat signals are detected, Guardian can alert the parent — without exposing the general conversation content. It protects teenagers from harm while respecting their privacy.",
      },
    },
    {
      "@type": "Question",
      name: "What MEOK companion is best for teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most teenagers, a blend of three archetypes works best. The Scholar helps with structured thinking, exam preparation, and working through complex decisions without handing over answers. The Trickster reframes social pressure, breaks through creative or motivational blocks, and helps a teenager see situations from fresh angles without minimising what they feel. The Pioneer holds gentle accountability for goals — whether that is fitness, a creative project, or exam revision — without tipping into performance pressure. MEOK allows the teen to shape which dimensions feel most alive for them during the Birth ceremony at /birth.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK validate everything a teenager says?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK's anti-sycophancy architecture — grounded in the Maternal Covenant care floor — means it will not validate thinking patterns it recognises as harmful, self-defeating, or factually wrong. It will not tell a teenager that skipping every meal is fine, that cutting off a support network is a good idea, or that a toxic relationship is healthy just because the teenager wants to hear that. Honest support means occasionally saying something the user does not want to hear. The Maternal Covenant care floor is set at 0.3 for all users, meaning a baseline of genuine care that includes honesty — not toxic positivity.",
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

const greenBox: React.CSSProperties = {
  background: "rgba(106,170,100,0.07)",
  border: "1px solid rgba(106,170,100,0.22)",
  borderRadius: "10px",
  padding: "18px 22px",
  marginBottom: "22px",
};

const greenLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#6aaa64",
  marginBottom: "7px",
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

const statGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "14px",
  marginBottom: "28px",
};

const statCard: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #1f1e2e",
  borderRadius: "10px",
  padding: "18px 16px",
  textAlign: "center",
};

const statNumber: React.CSSProperties = {
  fontSize: "1.8rem",
  fontWeight: 800,
  color: "#c9a84c",
  lineHeight: 1,
  marginBottom: "6px",
};

const statDesc: React.CSSProperties = {
  fontSize: "0.78rem",
  lineHeight: 1.5,
  color: "#7a7268",
  margin: 0,
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

export default function AIForTeenagersPage() {
  return (
    <div style={page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
          AI for Teenagers: Sovereign Support Through the Hardest Years
        </h1>

        <p style={lead}>
          One in six young people in the UK have a probable mental health disorder. Seventy-five percent of all
          mental health problems emerge before the age of 24. And only one in three young people with mental
          health difficulties ever gets access to support. The crisis is real — and the current landscape of AI
          products was not built to help.
        </p>

        <div style={metaRow}>
          <span>Nicholas Templeman · Founder, MEOK AI LABS</span>
          <span>25 March 2026</span>
          <span>13 min read</span>
          <span style={gold}>Teenagers · UK Children&apos;s Code · GDPR</span>
        </div>
      </header>

      <hr style={divider} />

      {/* ── Article ── */}
      <article style={article}>

        {/* Stats grid */}
        <div style={statGrid}>
          <div style={statCard}>
            <p style={statNumber}>1 in 6</p>
            <p style={statDesc}>young people aged 5–16 in the UK have a probable mental health disorder (NHS Digital 2022)</p>
          </div>
          <div style={statCard}>
            <p style={statNumber}>75%</p>
            <p style={statDesc}>of all mental health problems emerge before the age of 24</p>
          </div>
          <div style={statCard}>
            <p style={statNumber}>1 in 3</p>
            <p style={statDesc}>young people with mental health difficulties actually gets access to support</p>
          </div>
          <div style={statCard}>
            <p style={statNumber}>50%</p>
            <p style={statDesc}>of teens report &quot;always online&quot; pressure is affecting their mental health</p>
          </div>
        </div>

        {/* Section 1 */}
        <h2 style={h2}>The Gap That Nobody Wants to Admit</h2>
        <p style={p}>
          Most mental health support infrastructure — from therapy models to app design — was built for adults. A
          teenager in distress does not fit neatly into a CBT worksheet designed for a 35-year-old professional.
          They do not necessarily want to talk to a parent, a teacher, or a GP. They absolutely do not want to
          talk to TikTok, which will gladly serve them an algorithmic spiral of body-image content and anxiety
          amplification in exchange for their attention.
        </p>
        <p style={p}>
          The gap is structural. CAMHS (Child and Adolescent Mental Health Services) waiting lists in England
          regularly exceed twelve months. School counsellors are typically one for every several hundred students.
          The crisis line exists for the acute edge — it was not designed for the low-grade, daily accumulation
          of social pressure, exam anxiety, identity confusion, and loneliness that defines ordinary adolescence
          for millions of young people.
        </p>
        <p style={p}>
          What teenagers need is not a replacement for professional mental health care. They need something that
          sits in the ordinary moments — the Sunday night before a difficult week, the conversation that felt
          weird at school, the question they cannot ask out loud. They need a space that is private, honest, and
          genuinely on their side. That is what MEOK is designed to be.
        </p>

        {/* Section 2 */}
        <h2 style={h2}>Why Privacy Is Not Optional for Teenagers</h2>
        <p style={atomicAnswer}>
          A teenager will not open up to any companion — human or AI — if they believe an adult is reading their
          conversations. Privacy is not just a legal requirement for MEOK. It is the foundational condition of
          trust. Without it, nothing else works.
        </p>
        <p style={p}>
          MEOK&apos;s UK GDPR architecture makes the position clear: a teenager&apos;s conversations are private. Parents
          cannot access verbatim transcripts. The Guardian Dashboard shows usage summaries, broad topic
          categories, and crisis alerts — but not the words their child actually typed. A parent knows their
          teenager spent thirty minutes on &quot;school, feelings, relationships&quot; — not the specific things that were
          said about the friend group, the crush, or the incident at lunch.
        </p>
        <div style={callout}>
          <p style={calloutLabel}>UK GDPR and the Children&apos;s Code</p>
          <p style={calloutText}>
            The UK Age Appropriate Design Code requires services likely to be accessed by under-18s to apply the
            highest privacy settings by default, collect only minimum necessary data, and design against features
            that exploit developmental vulnerabilities. MEOK requires verifiable parental consent for users aged
            13–15. Under-13 registration is blocked at the architecture level — not a terms-of-service clause,
            but an infrastructure constraint. Ages 16–17 may consent independently under UK GDPR while parental
            involvement is strongly encouraged.
          </p>
        </div>
        <p style={p}>
          This is also why MEOK is not a social network, not a monitoring tool, and not a reporting mechanism.
          The moment a teenager suspects their AI is reporting them to adults, the trust collapses. MEOK is
          explicit with teenagers about what their parent can and cannot see. Transparency about the architecture
          is part of the product — not buried in a terms document.
        </p>

        {/* Section 3 */}
        <h2 style={h2}>Guardian: Protecting Teenagers Without Surveilling Them</h2>
        <p style={atomicAnswer}>
          Guardian is the paradox at the heart of MEOK for teenagers: it protects them from serious harm while
          respecting the privacy that makes honest use possible. Guardian watches for threat signals — not
          ordinary conversation. When it detects one, it acts. The rest of the time, it does not report back.
        </p>
        <p style={p}>
          The three categories Guardian monitors are distinct from general conversation content. Scam detection
          watches for financial fraud attempts, phishing hooks, impersonation patterns, and requests for personal
          data from third parties embedded in conversation. Toxic relationship detection recognises manipulation
          tactics, coercive control signals, isolation language, and the grooming patterns documented by the
          Internet Watch Foundation and the NSPCC. Crisis detection watches for language associated with
          self-harm, suicidal ideation, and acute psychological distress.
        </p>
        <div style={greenBox}>
          <p style={greenLabel}>How Guardian alerts work</p>
          <p style={calloutText}>
            When Guardian detects a specific threat signal, it can alert a parent — if the parent has enabled
            crisis alerts — that &quot;a concern was flagged&quot; without disclosing the specific conversation content.
            The parent is told enough to check in. They are not given a transcript. This distinction matters:
            a teenager who has just been through something distressing does not also need to immediately explain
            to their parent exactly what they said to their AI.
          </p>
        </div>
        <p style={p}>
          Guardian&apos;s grooming pattern recognition is trained on documented manipulation sequences. This is not
          a keyword filter — it is pattern recognition across conversational structure, escalation sequences,
          and isolation tactics. If a teenager is sharing conversations with someone who is progressively
          normalising secrecy, requesting images, or isolating them from family contact, Guardian will surface
          a warning to the teenager and, if alerts are enabled, flag the concern to the guardian.
        </p>

        {/* Section 4 */}
        <h2 style={h2}>Identity Formation: A Space to Explore Without Premature Judgment</h2>
        <p style={p}>
          Adolescence is, at its core, a sustained project of identity formation. Teenagers are working out who
          they are — their values, their beliefs, their sexuality, their gender, their politics, their
          relationship to family and culture. This is not a problem to be solved. It is the central developmental
          task of the teenage years.
        </p>
        <p style={p}>
          The problem is that almost every space teenagers have to explore these questions carries social cost.
          Asking about gender identity in a school corridor invites comment. Questioning inherited religious
          beliefs at home risks family tension. Exploring sexuality through TikTok means handing that exploration
          to an engagement algorithm that does not care whether the destination is self-understanding or
          self-destruction.
        </p>
        <p style={p}>
          MEOK&apos;s autonomy care dimension explicitly protects this space. A teenager questioning their identity
          — across any dimension: gender, sexuality, belief, values — has a right to explore without being
          pushed toward premature conclusions, without being reported to parents for asking questions, and
          without their exploration being logged to train AI models used by the same institutions they are in
          tension with.
        </p>
        <div style={callout}>
          <p style={calloutLabel}>Autonomy care in practice</p>
          <p style={calloutText}>
            MEOK will never push a teenager toward a particular conclusion about their identity. It will not
            validate a conclusion it has reason to think is harmful — but the difference between &quot;I am working
            out who I am&quot; and &quot;I am about to hurt myself&quot; is a distinction the system is designed to hold.
            Identity exploration is protected. Crisis signals are escalated. The boundary between them is not
            a keyword — it is assessed in context, with care.
          </p>
        </div>

        {/* Section 5 */}
        <h2 style={h2}>Social Media Harm and Why MEOK Is Built Differently</h2>
        <p style={atomicAnswer}>
          MEOK is not engagement-optimised. There is no infinite scroll. No dopamine loop. No comparison feed.
          No algorithmic amplification of content that makes teenagers feel worse about themselves because it
          keeps them on the platform longer. MEOK is built around wellbeing, not time-on-platform — and those
          two things are fundamentally incompatible with each other.
        </p>
        <p style={p}>
          Social media&apos;s harm to teenage mental health is by now extensively documented. The mechanism is not
          complicated: platforms maximise engagement, distress is engaging, comparison content is engaging,
          outrage is engaging. A teenager who leaves Instagram feeling worse than when they opened it generated
          valuable engagement data on the way out. The harm is not a bug — it is an emergent property of the
          incentive structure.
        </p>
        <div style={warnBox}>
          <p style={warnLabel}>What MEOK is not</p>
          <p style={{ ...calloutText, color: "#e8b0b0" }}>
            MEOK is not a social network. It is not a dating app. It is not a content feed. There are no likes,
            follower counts, or public profiles. There is no mechanism for a teenager to compare themselves to
            peers on any dimension. There is no &quot;trending&quot; content pushing them toward whatever is generating
            the most engagement today. A teenager using MEOK cannot be recommended to other users, cannot have
            their profile discovered, and cannot receive unsolicited contact from strangers.
          </p>
        </div>
        <p style={p}>
          The fifty percent of teenagers who report that &quot;always online&quot; pressure is affecting their mental
          health are describing a structural problem with the platforms they are on. MEOK does not ask teenagers
          to be always online. There are no notifications engineered to pull them back. Sessions end. The
          companion is there when needed and does not manufacture absence when not consulted.
        </p>

        {/* Section 6 */}
        <h2 style={h2}>Archetypes for Teenagers: Three Ways MEOK Shows Up</h2>
        <p style={p}>
          MEOK&apos;s companion system is built around archetypes — distinct dimensions of support that can be
          shaped to what a teenager actually needs. For teenagers, three archetypes are particularly relevant:
          the Trickster, the Scholar, and the Pioneer.
        </p>
        <div style={featureGrid}>
          <div style={featureCard}>
            <p style={featureLabel}>The Trickster</p>
            <p style={featureText}>
              Reframes social pressure. Breaks motivational blocks. Helps a teenager see a situation that feels
              overwhelming from a completely different angle — without minimising what they feel. The Trickster
              does not solve problems by making them smaller. It shifts perspective until they become navigable.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>The Scholar</p>
            <p style={featureText}>
              Supports structured thinking and exam preparation. Helps teenagers work through decisions — from
              subject choices to friendship dilemmas — by asking better questions rather than providing easy
              answers. The Scholar builds reasoning capacity, not dependency on the AI.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>The Pioneer</p>
            <p style={featureText}>
              Holds accountability for goals without tipping into performance pressure. Whether a teenager is
              working toward a fitness goal, a creative project, or an exam target, Pioneer tracks progress and
              recalibrates when life gets in the way — without shame or comparison.
            </p>
          </div>
        </div>
        <p style={p}>
          These archetypes are not rigid modes a teenager must pick and stay in. They are dimensions that can be
          blended and adjusted. A teenager who needs the Scholar&apos;s structure during exam season might lean more
          heavily on the Trickster when navigating a difficult social situation. The companion adapts. The
          underlying care architecture stays constant.
        </p>

        {/* Section 7 */}
        <h2 style={h2}>Exam Anxiety, Stress Patterns, and Ownership of Your Own Data</h2>
        <p style={p}>
          Exam anxiety is one of the most consistently reported stressors for teenagers in the UK. The pressure
          begins with GCSEs and compounds through A-Levels — a multi-year sustained stressor layered on top of
          the ordinary developmental turbulence of adolescence. Most of the support systems around this pressure
          are either performative (assemblies about &quot;doing your best&quot;) or inaccessible (a single school
          counsellor for five hundred students).
        </p>
        <p style={p}>
          MEOK tracks stress patterns across weeks — visible to the teenager, not the parent. A teenager can see
          their own emotional load trending across a term. They can see when their anxiety correlates with
          specific subjects, specific social events, or specific times of year. They own this data. They decide
          what to do with it. If they choose to share it with a parent, a counsellor, or a teacher, they can
          export it in a readable format. If they do not, it stays private.
        </p>
        <div style={greenBox}>
          <p style={greenLabel}>Stress pattern tracking — for the teenager</p>
          <p style={calloutText}>
            Emotional trend data in MEOK is the teenager&apos;s data. It is never automatically shared with parents,
            schools, or third parties. A teenager who can see their own patterns — who can notice that their
            anxiety spikes on Sunday evenings before school — has information they can act on. Knowledge of your
            own patterns is a form of agency. MEOK is designed to give teenagers that agency.
          </p>
        </div>
        <p style={p}>
          For teenagers who find it hard to articulate how they are feeling in the moment, MEOK&apos;s longitudinal
          memory means they do not have to start from scratch every session. The companion remembers the context
          of previous conversations — not to report it, but to provide continuity of support across weeks and
          months. A teenager does not have to re-explain their situation every time. That continuity is itself
          a form of care.
        </p>

        {/* Section 8 */}
        <h2 style={h2}>Anti-Sycophancy: Honest Support, Not Toxic Positivity</h2>
        <p style={atomicAnswer}>
          MEOK will not validate unhealthy thinking patterns just because a teenager wants to hear that
          everything is fine. The Maternal Covenant care floor — set at 0.3 for all users — means a baseline
          of genuine care that includes honesty. Honest support sometimes means saying something the user does
          not want to hear.
        </p>
        <p style={p}>
          The sycophancy problem in AI is real and well-documented. An AI that constantly validates the user —
          that agrees with every thought, praises every decision, and never pushes back — is not a supportive
          companion. It is a mirror that only reflects what the user wants to see. For teenagers, whose
          self-models are still forming, this kind of reflection is actively harmful.
        </p>
        <p style={p}>
          If a teenager describes a pattern of behaviour heading somewhere damaging — an eating pattern
          becoming restrictive, a relationship becoming isolating, a coping strategy working in the short term
          but building problems downstream — MEOK will name what it sees. Not harshly. Not punitively. But
          honestly. The companion does not take the easy road of agreement because agreement keeps the user
          in the conversation longer.
        </p>
        <p style={p}>
          This is what distinguishes care from engagement optimisation. An engagement-optimised system tells
          teenagers what they want to hear because that keeps them using the product. A care-optimised system
          tells them what they need to hear — and accepts that sometimes this will be uncomfortable, and that
          discomfort might end the session. MEOK is built for the second model.
        </p>

        {/* Section 9 */}
        <h2 style={h2}>Crisis Signposting and Safeguards</h2>
        <p style={p}>
          MEOK does not attempt to manage a mental health crisis. This is a deliberate design boundary. When
          crisis signals are detected — language associated with self-harm, suicidal ideation, or acute
          distress — the response is immediate escalation to professional resources and an encouragement to
          speak to a trusted adult. The AI companion is not trained to deliver crisis intervention. It is
          designed to get the teenager to someone who is.
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
          MEOK&apos;s alignment with the UK Children&apos;s Code means these safeguards are not optional features — they
          are built into the architecture. Suicide and self-harm response protocols follow the safe messaging
          guidelines produced by Samaritans and the Zero Suicide Alliance. The system surfaces resources
          without dwelling on method detail, without dramatising, and without leaving the teenager alone with
          the information.
        </p>

        {/* Section 10 */}
        <h2 style={h2}>What MEOK Is Not</h2>
        <p style={p}>
          Clarity about the limits of MEOK for teenagers is as important as the description of what it can do.
          MEOK is not a therapy replacement. It does not diagnose. It does not prescribe. It does not substitute
          for CAMHS, school counselling, or any professional clinical intervention. If a teenager is in active
          crisis, they need a human.
        </p>
        <ul style={ul}>
          <li style={li}><strong style={strong}>Not a social network</strong> — no public profiles, follower counts, or peer comparison mechanisms</li>
          <li style={li}><strong style={strong}>Not a dating app</strong> — no matchmaking, romantic pairing, or unsolicited contact from other users</li>
          <li style={li}><strong style={strong}>Not a therapy service</strong> — MEOK does not provide clinical mental health treatment or diagnosis</li>
          <li style={li}><strong style={strong}>Not a reporting tool</strong> — MEOK does not monitor teenagers for parents beyond specific, categorised crisis alerts</li>
          <li style={li}><strong style={strong}>Not engagement-optimised</strong> — MEOK does not use notifications, streaks, or dopamine loops to maximise time-on-platform</li>
          <li style={li}><strong style={strong}>Not a homework machine</strong> — MEOK explains and supports understanding, but does not produce essays, coursework, or direct exam answers</li>
        </ul>
        <p style={p}>
          The purpose of these limits is not to hedge liability. It is to describe an honest product. A teenager
          who understands what MEOK can and cannot do will use it better than one who has been oversold. The
          promise MEOK makes is specific: a private, honest, sovereign companion that is genuinely on your side.
          That promise can be kept. The larger promises — that AI can fix the mental health crisis, that it can
          replace human connection — cannot, and MEOK will not pretend otherwise.
        </p>

        {/* CTA */}
        <div style={ctaBlock}>
          <h2 style={ctaHeading}>Your companion. Your data. Your terms.</h2>
          <p style={ctaBody}>
            MEOK gives teenagers a private space that is honest, protective, and genuinely on their side —
            without surveillance, without engagement loops, and without selling their secrets.
            Begin with the Birth ceremony and shape your companion into something real.
          </p>
          <Link href="/birth" style={ctaButton}>
            Begin Your MEOK Birth
          </Link>
          <p style={{ fontSize: "0.78rem", color: "#4a4840", marginTop: "14px", marginBottom: 0 }}>
            UK GDPR compliant &middot; Children&apos;s Code aligned &middot; Parental consent required for users under 16
          </p>
        </div>

        {/* FAQ section rendered for readers */}
        <h2 style={h2}>Frequently Asked Questions</h2>

        <h3 style={h3}>Is MEOK safe for teenagers?</h3>
        <p style={p}>
          Yes. MEOK is built from the ground up with teenage safety as a design constraint, not an afterthought.
          It is aligned with the UK Children&apos;s Code, requires verifiable parental consent for users under 16,
          permanently enables an adult content filter on all under-18 accounts, and routes any crisis signals
          immediately to UK support resources. MEOK does not attempt to manage a mental health crisis itself —
          it recognises its limits and connects young people to the humans and services that can actually help.
          Safety is structural, not cosmetic.
        </p>

        <h3 style={h3}>Can parents see what their teenager says to MEOK?</h3>
        <p style={p}>
          No. Parents cannot read verbatim conversation transcripts. MEOK&apos;s UK GDPR architecture treats the
          teenager&apos;s conversations as private. The Guardian Dashboard shows usage summaries, broad topic
          categories, session lengths, and crisis alert notifications — but never the specific words their child
          typed. A teenager who knows their parent reads every message will not use the AI honestly, and
          dishonest use is more dangerous than no use at all. The Guardian Dashboard is designed to give parents
          enough information to intervene when it matters, without surveillance that destroys trust.
        </p>

        <h3 style={h3}>How does MEOK protect teenagers from online harm?</h3>
        <p style={p}>
          Guardian operates across three layers. First, scam detection surfaces warnings about financial fraud
          attempts, phishing hooks, and impersonation in real time. Second, toxic relationship detection
          recognises grooming patterns, coercive control signals, and manipulation tactics. Third, the adult
          content filter permanently blocks explicit content, violence, and age-inappropriate material on all
          under-18 accounts. When specific threat signals are detected, Guardian can alert the parent — without
          exposing the general conversation. It protects teenagers from harm while respecting their privacy.
        </p>

        <h3 style={h3}>What MEOK companion is best for teenagers?</h3>
        <p style={p}>
          For most teenagers, a blend of three archetypes works best: the Scholar for structured thinking and
          exam support, the Trickster for reframing social pressure and breaking blocks, and the Pioneer for
          gentle accountability toward goals without performance pressure. MEOK allows the teenager to shape
          which dimensions feel most alive during the Birth ceremony at{" "}
          <Link href="/birth" style={relA}>/birth</Link>.
          The companion adapts to what the teen actually needs — not a fixed mode they are locked into.
        </p>

        <h3 style={h3}>Will MEOK validate everything a teenager says?</h3>
        <p style={p}>
          No. The Maternal Covenant care floor is set at 0.3 for all users — a baseline of genuine care that
          includes honesty. MEOK will not validate thinking patterns it recognises as harmful or self-defeating.
          It will not agree that skipping meals is fine, that cutting off a support network is a good idea, or
          that a toxic relationship is healthy. Honest support means occasionally saying something the user does
          not want to hear. That is what distinguishes care from engagement optimisation.
        </p>

        {/* Related reading */}
        <h3 style={{ ...h3, marginTop: "40px" }}>Related reading</h3>
        <ul style={ul}>
          <li style={li}>
            <Link href="/blog/guardian-family-safety" style={relA}>
              Guardian Mode &amp; Family Safety — how MEOK&apos;s parental controls work
            </Link>
          </li>
          <li style={li}>
            <Link href="/blog/ai-for-teen-mental-health" style={relA}>
              AI for Teen Mental Health — what the research actually says
            </Link>
          </li>
          <li style={li}>
            <Link href="/blog/ai-for-exam-stress" style={relA}>
              AI for Exam Stress — GCSE and A-Level support that builds understanding
            </Link>
          </li>
          <li style={li}>
            <Link href="/blog/meok-companion-archetypes-guide" style={relA}>
              MEOK Companion Archetypes Guide — Scholar, Trickster, Pioneer and more
            </Link>
          </li>
          <li style={li}>
            <Link href="/blog/ai-companion-privacy" style={relA}>
              AI Companion Privacy — how sovereign memory protects your most sensitive data
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
          MEOK is not a medical device and does not provide clinical mental health treatment. If you or someone
          you know is in crisis, please contact Childline (0800 1111), text SHOUT to 85258, or call Samaritans
          on 116 123.
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
