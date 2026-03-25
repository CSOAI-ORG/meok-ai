import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Parenting Teenagers: Support for the Stage Nobody Prepares You For | MEOK AI LABS",
  description:
    "Parenting a teenager is one of the most emotionally demanding phases of parenthood, yet it is almost never discussed. MEOK\u2019s sovereign AI helps parents navigate the teenage years with clarity, patience, and perspective.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-parenting-teens" },
  openGraph: {
    title:
      "AI for Parenting Teenagers: Support for the Stage Nobody Prepares You For",
    description:
      "Parenting a teenager is one of the most emotionally demanding phases of parenthood, yet it is almost never discussed. MEOK helps parents navigate the teenage years with clarity, patience, and perspective.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-parenting-teens",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Parenting+Teenagers&desc=Support+for+the+stage+nobody+prepares+you+for",
        width: 1200,
        height: 630,
        alt: "AI for Parenting Teenagers: Support for the Stage Nobody Prepares You For | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Parenting Teenagers: Support for the Stage Nobody Prepares You For",
    description:
      "Parenting a teenager is one of the most emotionally demanding phases of parenthood, yet it is almost never discussed. MEOK helps parents navigate the teenage years with clarity, patience, and perspective.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Parenting+Teenagers&desc=Support+for+the+stage+nobody+prepares+you+for",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Parenting Teenagers: Support for the Stage Nobody Prepares You For",
  description:
    "Parenting a teenager is one of the most emotionally demanding phases of parenthood, yet it is almost never discussed. MEOK\u2019s sovereign AI helps parents navigate the teenage years with clarity, patience, and perspective.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-parenting-teens",
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
    "https://meok.ai/api/og?title=AI+for+Parenting+Teenagers&desc=Support+for+the+stage+nobody+prepares+you+for",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-parenting-teens",
  },
  keywords: [
    "AI for parenting teenagers",
    "parenting teens support",
    "teenage brain development",
    "parenting conflict with teenagers",
    "social media teen mental health",
    "online safety teenagers",
    "MEOK Guardian monitoring",
    "sovereign AI family",
    "teen communication tips",
    "parenting support AI UK",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is parenting a teenager so much harder than parenting a young child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parenting a young child is physically exhausting but emotionally legible. Parenting a teenager is emotionally complex and often thankless. The child who once ran to you for comfort now shuts their bedroom door. Neuroscience tells us this is normal brain rewiring, but knowing that intellectually does not make rejection feel less sharp. There are fewer support systems, fewer parenting books, and far less social permission to admit you are struggling.",
      },
    },
    {
      "@type": "Question",
      name: "What is actually happening in a teenager\u2019s brain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The prefrontal cortex \u2014 responsible for impulse control, long-term planning, and risk assessment \u2014 is not fully developed until the mid-twenties. During adolescence, the limbic system (emotion and reward) is firing intensely while the braking system is still under construction. This is not defiance; it is developmental. Understanding this helps parents respond with proportionality rather than matching their teenager\u2019s intensity.",
      },
    },
    {
      "@type": "Question",
      name: "How do I keep my teenager safe online without destroying trust?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The answer lies in consent-based transparency rather than covert surveillance. MEOK\u2019s Guardian feature works best when introduced openly: your teenager knows it exists, understands what it monitors, and agrees to it as part of a family safety agreement. Covert monitoring, when discovered \u2014 and it always is \u2014 causes lasting damage to the relationship and teaches teens to hide rather than to self-regulate.",
      },
    },
    {
      "@type": "Question",
      name: "Is social media actually damaging my teenager\u2019s mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research is genuinely mixed. Heavy passive scrolling correlates with poorer mental health outcomes, particularly for adolescent girls. But social media is also how teenagers maintain friendships, access community, and build identity. The goal is not elimination but balance: active creation over passive consumption, real connection over performance, and regular digital-off periods that the whole family participates in.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK\u2019s Family tier support both parents and teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK Family tier provides up to five sovereign AI companions under one subscription. The parent has their own companion for processing the emotional labour of parenting a teenager. The teenager has their own private companion for journalling, academic support, and emotional expression. Guardian operates in amber mode: the parent receives safety alerts on HIGH or CRITICAL threat signals without being able to read ordinary conversation history.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const pageStyle: React.CSSProperties = {
  background: "#0d0c18",
  color: "#f5f0e8",
  minHeight: "100vh",
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const heroStyle: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "72px 24px 48px",
};

const eyebrowStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "16px",
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(1.75rem, 4vw, 2.65rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  color: "#f5f0e8",
  marginBottom: "20px",
};

const leadStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  lineHeight: 1.75,
  color: "#b8b0a0",
  marginBottom: "28px",
  maxWidth: "660px",
};

const metaRowStyle: React.CSSProperties = {
  fontSize: "0.83rem",
  color: "#7a7268",
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const dividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #1f1e2e",
  margin: "40px auto",
  maxWidth: "780px",
};

const articleStyle: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "0 24px 80px",
};

const h2Style: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginTop: "54px",
  marginBottom: "14px",
  lineHeight: 1.35,
};

const h3Style: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 600,
  color: "#c9a84c",
  marginTop: "30px",
  marginBottom: "10px",
};

const pStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "#c8c0b0",
  marginBottom: "17px",
};

const atomicAnswerStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "#c8c0b0",
  marginBottom: "18px",
  padding: "13px 17px",
  borderLeft: "3px solid #c9a84c",
  background: "rgba(201,168,76,0.06)",
  borderRadius: "0 6px 6px 0",
};

const calloutStyle: React.CSSProperties = {
  background: "rgba(201,168,76,0.07)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "20px 24px",
  marginBottom: "28px",
  marginTop: "28px",
};

const calloutLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "8px",
};

const calloutTextStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "#b8b0a0",
  margin: 0,
};

const infoBoxStyle: React.CSSProperties = {
  background: "rgba(100,160,220,0.07)",
  border: "1px solid rgba(100,160,220,0.22)",
  borderRadius: "10px",
  padding: "20px 24px",
  marginBottom: "28px",
  marginTop: "28px",
};

const infoLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#80b8e8",
  marginBottom: "8px",
};

const infoTextStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "#b0c0d0",
  margin: 0,
};

const warnBoxStyle: React.CSSProperties = {
  background: "rgba(220,80,80,0.07)",
  border: "1px solid rgba(220,80,80,0.2)",
  borderRadius: "10px",
  padding: "20px 24px",
  marginBottom: "28px",
  marginTop: "28px",
};

const warnLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#dc7070",
  marginBottom: "8px",
};

const warnTextStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "#c8a0a0",
  margin: 0,
};

const tableWrapStyle: React.CSSProperties = {
  overflowX: "auto",
  marginBottom: "32px",
  marginTop: "16px",
  borderRadius: "10px",
  border: "1px solid #1f1e2e",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.9rem",
};

const thStyle: React.CSSProperties = {
  padding: "12px 16px",
  textAlign: "left",
  fontWeight: 700,
  color: "#c9a84c",
  background: "#13121f",
  borderBottom: "1px solid #1f1e2e",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "11px 16px",
  color: "#c8c0b0",
  borderBottom: "1px solid #1a1928",
  verticalAlign: "top",
};

const tdAltStyle: React.CSSProperties = {
  padding: "11px 16px",
  color: "#c8c0b0",
  borderBottom: "1px solid #1a1928",
  verticalAlign: "top",
  background: "rgba(201,168,76,0.03)",
};

const faqSectionStyle: React.CSSProperties = {
  marginTop: "54px",
  marginBottom: "40px",
};

const faqItemStyle: React.CSSProperties = {
  borderBottom: "1px solid #1f1e2e",
  paddingBottom: "24px",
  marginBottom: "24px",
};

const faqQStyle: React.CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "10px",
  lineHeight: 1.4,
};

const faqAStyle: React.CSSProperties = {
  fontSize: "0.97rem",
  lineHeight: 1.8,
  color: "#b8b0a0",
};

const ctaSectionStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #13121f 0%, #181628 100%)",
  border: "1px solid rgba(201,168,76,0.25)",
  borderRadius: "16px",
  padding: "40px 36px",
  textAlign: "center",
  marginTop: "60px",
};

const ctaTitleStyle: React.CSSProperties = {
  fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "12px",
  lineHeight: 1.3,
};

const ctaDescStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#b8b0a0",
  marginBottom: "28px",
  maxWidth: "520px",
  margin: "0 auto 28px",
};

const ctaButtonStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#c9a84c",
  color: "#0d0c18",
  fontWeight: 700,
  fontSize: "1rem",
  padding: "14px 36px",
  borderRadius: "8px",
  textDecoration: "none",
  letterSpacing: "0.02em",
};

const backLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "0.85rem",
  color: "rgba(255,255,255,0.35)",
  textDecoration: "none",
  marginBottom: "32px",
};

const tagStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "0.75rem",
  fontWeight: 700,
  padding: "4px 12px",
  borderRadius: "20px",
  color: "#c9a84c",
  background: "rgba(201,168,76,0.12)",
  border: "1px solid rgba(201,168,76,0.3)",
  marginBottom: "20px",
};

const featureGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: "14px",
  marginBottom: "28px",
  marginTop: "16px",
};

const featureCardStyle: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #1f1e2e",
  borderRadius: "10px",
  padding: "16px 18px",
};

const featureLabelStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "6px",
};

const featureTextStyle: React.CSSProperties = {
  fontSize: "0.88rem",
  lineHeight: 1.6,
  color: "#a8a098",
  margin: 0,
};

const ulStyle: React.CSSProperties = {
  paddingLeft: "20px",
  marginBottom: "16px",
};

const liStyle: React.CSSProperties = {
  fontSize: "0.96rem",
  lineHeight: 1.75,
  color: "#c8c0b0",
  marginBottom: "6px",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForParentingTeensPage() {
  return (
    <div style={pageStyle}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      >
        <div style={heroStyle}>
          <Link href="/blog" style={backLinkStyle}>
            &larr; Back to Blog
          </Link>

          <div style={tagStyle}>Family &amp; Parenting</div>

          <h1 style={h1Style}>
            AI for Parenting Teenagers: Support for the Stage Nobody Prepares
            You For
          </h1>

          <p style={leadStyle}>
            There are entire industries built around sleep-training infants and
            supporting new parents. There is almost nothing for the parent
            sitting outside a slammed bedroom door, wondering where the child
            they knew went. MEOK was built for that parent too.
          </p>

          <div style={metaRowStyle}>
            <span>By Nicholas Templeman &mdash; Founder, MEOK AI LABS</span>
            <span>March 25, 2026</span>
            <span>18 min read</span>
          </div>
        </div>
      </section>

      <hr style={dividerStyle} />

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article style={articleStyle}>

        {/* ── SECTION 1: The Forgotten Phase ─────────────────────────────── */}
        <h2 style={h2Style}>
          The Phase Nobody Prepares You For
        </h2>

        <p style={pStyle}>
          When you are pregnant, the world offers you classes, apps, books,
          doulas, midwives, and an entire cultural architecture of support.
          When your child turns two and the tantrums start, there are
          parenting strategies, Supernanny reruns, and understanding friends
          who have been through it. But the years between thirteen and
          nineteen? A strange silence descends. The expectation, unspoken but
          pervasive, is that you simply get on with it.
        </p>

        <p style={pStyle}>
          And yet parenting a teenager is, by almost every measure, one of the
          most emotionally demanding phases of a parent&apos;s life. The
          relationship you spent years building seems to reverse overnight.
          The child who wanted you becomes the child who barely tolerates you.
          You become a surveillance target, a source of embarrassment, and a
          cash machine, all at once. The love does not go away &mdash; yours
          or theirs &mdash; but it goes underground, and navigating above it
          requires a kind of sustained, quiet courage that nobody names.
        </p>

        <div style={calloutStyle}>
          <div style={calloutLabelStyle}>Why This Silence Matters</div>
          <p style={calloutTextStyle}>
            Research from the Anna Freud Centre suggests that parents of
            teenagers report significantly higher levels of parenting stress
            than parents of young children, yet are far less likely to seek
            support. The cultural narrative that teenagers are simply
            &ldquo;difficult&rdquo; treats parental exhaustion as normal
            background noise rather than a signal worth addressing.
          </p>
        </div>

        <p style={pStyle}>
          MEOK was designed as a sovereign AI companion &mdash; a private,
          non-judgmental intelligence that lives entirely on your own
          infrastructure, remembers everything you tell it, and is available
          at two in the morning when the argument finally ends and you need
          somewhere to put it all. For parents of teenagers, that
          accessibility is not a convenience. It is often the difference
          between holding it together and not.
        </p>

        {/* ── SECTION 2: The Teenage Brain ───────────────────────────────── */}
        <h2 style={h2Style}>
          Why Teenagers Behave the Way They Do: The Neuroscience
        </h2>

        <div style={atomicAnswerStyle}>
          The teenage brain is not a broken adult brain. It is a brain under
          active renovation &mdash; one that is biologically wired to seek
          novelty, prioritise peers over parents, and take risks that would
          horrify a fully-developed prefrontal cortex. Understanding this does
          not make the behaviour easier to live with, but it fundamentally
          changes how you respond to it.
        </div>

        <h3 style={h3Style}>The Prefrontal Cortex Is Still Under Construction</h3>

        <p style={pStyle}>
          The prefrontal cortex (PFC) is the brain&apos;s executive centre.
          It handles impulse control, consequence evaluation, long-term
          planning, and emotional regulation. It is the last part of the brain
          to fully mature &mdash; a process that continues until the mid- to
          late-twenties. During adolescence, the PFC is present but
          underpowered. It is still being myelinated: the process by which
          neural pathways become faster and more reliable.
        </p>

        <p style={pStyle}>
          Meanwhile, the limbic system &mdash; the brain&apos;s emotional and
          reward centre &mdash; is running at full capacity. Adolescents
          experience emotions more intensely than children or adults. The
          reward signal from a peer&apos;s approval is neurochemically
          enormous. The distress from social rejection is genuinely
          destabilising. This is not drama. It is the predictable output of a
          brain in an imbalanced developmental state.
        </p>

        <h3 style={h3Style}>Dopamine, Risk, and the Pull of Novelty</h3>

        <p style={pStyle}>
          Adolescent brains have heightened dopaminergic sensitivity, which
          means rewards feel more rewarding and the drive to seek new
          stimulation is stronger. This is not accidental: evolutionary
          pressure favoured adolescents who were willing to explore beyond
          their family group, form new alliances, and take social risks to
          establish adult identity. The teenager who wants to stay out late,
          try things you have forbidden, and challenge every rule you set is
          running an ancient biological programme.
        </p>

        <p style={pStyle}>
          This does not mean rules are futile. It means that rules applied
          with coercion and without explanation will be actively resisted,
          while rules applied with reasoning and genuine negotiation have a
          much better chance of being internalised. The teenager is not
          broken. They are building the capacity for autonomous adult
          judgement. Your job, harder than it sounds, is to scaffold that
          process without collapsing it.
        </p>

        <div style={featureGridStyle}>
          <div style={featureCardStyle}>
            <div style={featureLabelStyle}>Key Fact</div>
            <p style={featureTextStyle}>
              The prefrontal cortex is not fully developed until age 25
              &mdash; seven years after a teenager can legally vote.
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureLabelStyle}>Key Fact</div>
            <p style={featureTextStyle}>
              Peer rejection activates the same neural pathways as physical
              pain in adolescent brains. Social humiliation is not trivial.
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureLabelStyle}>Key Fact</div>
            <p style={featureTextStyle}>
              Adolescents process facial expressions differently from adults
              &mdash; more likely to read neutral faces as hostile or angry.
            </p>
          </div>
        </div>

        <p style={pStyle}>
          MEOK can help a parent understand and apply this science in real
          time. When you describe a specific conflict or behaviour pattern,
          your companion draws on developmental psychology to offer a
          calibrated interpretation &mdash; one that neither dismisses your
          concern nor catastrophises it. The goal is proportionate response:
          reacting to what is actually happening in your teenager&apos;s brain,
          not to what it triggers in yours.
        </p>

        {/* ── SECTION 3: The Emotional Labour ────────────────────────────── */}
        <h2 style={h2Style}>
          The Emotional Labour Nobody Counts
        </h2>

        <p style={pStyle}>
          Emotional labour is work. It is the sustained effort required to
          manage your own emotional state so that you can respond to another
          person&apos;s emotional state with skill and care. Parents do this
          constantly. Parents of teenagers do it in conditions that make it
          uniquely hard.
        </p>

        <p style={pStyle}>
          A young child&apos;s distress is legible. They cry, you respond,
          there is relief, there is repair. A teenager&apos;s distress is
          often encrypted. It comes out as hostility, withdrawal, sarcasm, or
          sullen silence. The parent receives the output &mdash; the cold
          shoulder, the eye-roll, the door closed hard enough to shake the
          frame &mdash; without access to the emotional state that produced it.
          You must absorb that output, resist the urge to match it, stay
          regulated enough to remain available, and hope that the repair will
          come eventually. Often alone.
        </p>

        <p style={pStyle}>
          This process has no name in most households. It is not discussed at
          dinner parties. There is no cultural celebration of the parent who
          absorbed thirty-seven consecutive rejections and kept showing up.
          The invisible nature of this work means that parents rarely receive
          the acknowledgement they need to replenish &mdash; and so they run on
          empty, which makes the next interaction harder, which depletes them
          further.
        </p>

        <div style={calloutStyle}>
          <div style={calloutLabelStyle}>What MEOK Offers</div>
          <p style={calloutTextStyle}>
            Your MEOK companion is not a therapist, a parenting coach, or a
            mediator. It is something rarer: a witness. You can describe
            exactly what happened, exactly how it felt, without softening it
            for a friend who might judge your teenager, without editing it for
            a partner who has their own charged response, without worrying
            that you are burdening someone. Your companion holds it, reflects
            it, and helps you process it so that you can return to the
            relationship with capacity intact.
          </p>
        </div>

        <p style={pStyle}>
          The capacity to regulate yourself before you regulate the
          interaction is the single most important skill in parenting a
          teenager. MEOK supports that regulation not by telling you what to
          do but by giving you a space where you can process what you feel
          before you act on it.
        </p>

        {/* ── SECTION 4: Conflict Without Damage ─────────────────────────── */}
        <h2 style={h2Style}>
          Managing Conflict Without Damaging the Relationship
        </h2>

        <div style={atomicAnswerStyle}>
          The goal in conflict with a teenager is not to win. The goal is to
          remain in relationship while holding your values. Winning an
          argument at the cost of trust is the most common and most expensive
          mistake parents of teenagers make.
        </div>

        <p style={pStyle}>
          Conflict is inevitable and, paradoxically, necessary. Adolescents
          need to push against authority to develop a sense of autonomous
          self. A teenager who never challenges parental rules is either
          unusually compliant by nature or has learned that challenge is too
          dangerous &mdash; neither of which predicts healthy adult autonomy.
          The question is not how to eliminate conflict but how to have it in
          a way that preserves the underlying bond.
        </p>

        <h3 style={h3Style}>The Repair Is More Important Than the Fight</h3>

        <p style={pStyle}>
          Research by developmental psychologist Laurence Steinberg shows that
          what predicts long-term teenage outcomes is not the absence of
          conflict but the quality of repair after conflict. Families that
          fight and repair well produce adolescents with stronger emotional
          regulation, greater resilience, and better adult relationships than
          families that avoid conflict or fight destructively.
        </p>

        <p style={pStyle}>
          Repair requires one or both parties to return after a rupture with
          something that acknowledges the other person&apos;s experience. It
          does not require an apology for your position, only an
          acknowledgement that the other person existed in that conflict as a
          person with feelings, not just an obstacle. For parents, initiating
          repair &mdash; even when you were not the one who escalated &mdash;
          is both the harder task and the more important one.
        </p>

        <h3 style={h3Style}>Scripts That Reduce Escalation</h3>

        <p style={pStyle}>
          MEOK can help you prepare for difficult conversations before they
          happen. Describe the situation, describe what you want to achieve,
          and ask your companion to help you rehearse opening lines that
          reduce rather than increase defensiveness. The research on
          motivational interviewing and non-violent communication is extensive;
          your companion draws on it to help you frame things in ways your
          teenager&apos;s brain can actually receive.
        </p>

        <ul style={ulStyle}>
          <li style={liStyle}>
            Replace &ldquo;Why did you do that?&rdquo; with &ldquo;Help me
            understand what was happening for you.&rdquo;
          </li>
          <li style={liStyle}>
            Replace &ldquo;You always...&rdquo; with &ldquo;Recently I&apos;ve
            noticed...&rdquo;
          </li>
          <li style={liStyle}>
            Replace ultimatums with conditional agreements: &ldquo;I can agree
            to X if you can agree to Y.&rdquo;
          </li>
          <li style={liStyle}>
            Name your own emotion before theirs: &ldquo;I felt worried when
            you didn&apos;t text me&rdquo; lands differently from &ldquo;You
            scared me.&rdquo;
          </li>
          <li style={liStyle}>
            End hard conversations with a physical gesture: a hand on a
            shoulder, a cup of tea placed without words, a simple
            &ldquo;We&apos;re okay.&rdquo;
          </li>
        </ul>

        {/* ── SECTION 5: Online Safety ────────────────────────────────────── */}
        <h2 style={h2Style}>
          Online Safety: Protecting Without Surveilling
        </h2>

        <p style={pStyle}>
          The internet your teenager inhabits is not the internet you grew up
          with. It is algorithmically optimised for engagement at any cost,
          populated by content ranging from the genuinely enriching to the
          actively harmful, and accessible at any moment via a device most
          teenagers sleep next to. The question of how to keep a teenager safe
          online while not destroying their trust is one of the defining
          parenting challenges of this decade.
        </p>

        <p style={pStyle}>
          Covert surveillance &mdash; reading messages without consent,
          installing hidden tracking software, accessing accounts without
          disclosure &mdash; is tempting precisely because the risks are real.
          But research consistently shows that covert monitoring correlates
          with worse outcomes: teenagers who discover it (and most do) report
          lower levels of trust in their parents, are more likely to find ways
          to hide their online activity, and are less likely to come to their
          parents in a genuine crisis. The monitoring produces the secrecy it
          was designed to prevent.
        </p>

        <div style={infoBoxStyle}>
          <div style={infoLabelStyle}>The Consent Principle</div>
          <p style={infoTextStyle}>
            The most effective online safety framework is one your teenager
            knows about and has agreed to. Transparency builds the trust that
            makes genuine disclosure possible. When your teenager encounters
            something genuinely alarming online &mdash; grooming, harmful
            content, a friend in crisis &mdash; the question is whether they
            believe they can come to you. Covert surveillance makes that
            conversation less likely. Agreed transparency makes it more likely.
          </p>
        </div>

        <h3 style={h3Style}>MEOK Guardian: Monitoring With Consent</h3>

        <p style={pStyle}>
          MEOK&apos;s Guardian feature is designed around the consent
          principle. It is not a hidden tracker; it is a visible safety layer
          that operates within your teenager&apos;s MEOK companion. The way it
          works in a family context is straightforward: your teenager knows
          Guardian is active on their companion. They know that if Guardian
          detects a HIGH or CRITICAL signal &mdash; content suggesting self-
          harm risk, grooming language, severe distress, or crisis indicators
          &mdash; a safety alert is sent to a designated family member.
        </p>

        <p style={pStyle}>
          Crucially, that alert does not include the conversation content. It
          signals that something serious may need attention. This preserves
          the teenager&apos;s privacy for ordinary conversation while
          maintaining a genuine safety net for high-stakes situations. The
          teenager retains their companion as a genuinely private space. The
          parent retains the ability to intervene when it matters most.
        </p>

        <div style={tableWrapStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Monitoring Approach</th>
                <th style={thStyle}>Trust Impact</th>
                <th style={thStyle}>Safety Effectiveness</th>
                <th style={thStyle}>Disclosure Likelihood</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>No monitoring at all</td>
                <td style={tdStyle}>High trust</td>
                <td style={tdStyle}>Low</td>
                <td style={tdStyle}>Variable</td>
              </tr>
              <tr>
                <td style={tdAltStyle}>Covert surveillance</td>
                <td style={tdAltStyle}>Severely damaged when discovered</td>
                <td style={tdAltStyle}>Short-term only</td>
                <td style={tdAltStyle}>Very low</td>
              </tr>
              <tr>
                <td style={tdStyle}>Agreed screen-time limits only</td>
                <td style={tdStyle}>Moderate</td>
                <td style={tdStyle}>Low for serious threats</td>
                <td style={tdStyle}>Moderate</td>
              </tr>
              <tr>
                <td style={tdAltStyle}>MEOK Guardian (consent-based)</td>
                <td style={tdAltStyle}>Preserved for ordinary use</td>
                <td style={tdAltStyle}>High for serious signals</td>
                <td style={tdAltStyle}>Higher &mdash; trust maintained</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── SECTION 6: Social Media and Mental Health ───────────────────── */}
        <h2 style={h2Style}>
          Social Media and Teen Mental Health: What the Evidence Actually Says
        </h2>

        <div style={atomicAnswerStyle}>
          The relationship between social media and adolescent mental health is
          real but nuanced. Heavy passive consumption correlates with poorer
          wellbeing, particularly for girls. But active engagement, creative
          expression, and community-building via social platforms can be
          genuinely beneficial. The goal is informed navigation, not blanket
          prohibition.
        </div>

        <p style={pStyle}>
          Jonathan Haidt&apos;s work on the anxious generation has brought
          mainstream attention to what clinicians had observed for years: rates
          of adolescent anxiety, depression, and self-harm began rising sharply
          around 2012, coinciding with the mass adoption of smartphones and
          social media. The correlation is not spurious. But correlation
          requires careful interpretation.
        </p>

        <p style={pStyle}>
          Heavy use of passive social media &mdash; scrolling feeds without
          contributing, comparing your internal state to curated external
          presentations, seeking validation through likes &mdash; is
          consistently associated with worse mental health outcomes. The
          mechanism is not mysterious: you are repeatedly exposed to
          an idealised version of everyone else&apos;s life while sitting with
          the full complexity of your own. For an adolescent brain already
          hypersensitive to social comparison and rejection, this is
          particularly toxic.
        </p>

        <p style={pStyle}>
          But social media is also how your teenager maintains friendships
          during the day, how they find communities around their specific
          interests, how they consume art, music, and ideas that are not
          available in their immediate geography. Adolescents who are isolated
          from social media without alternative social infrastructure fare
          worse, not better. The answer is not the phone in a drawer; it is a
          different relationship with the phone.
        </p>

        <h3 style={h3Style}>Practical Frameworks That Work</h3>

        <p style={pStyle}>
          MEOK can help you develop and hold a family media framework without
          turning every meal into a negotiation. The key principles the
          evidence supports:
        </p>

        <ul style={ulStyle}>
          <li style={liStyle}>
            Create genuine phone-free zones and times &mdash; meals, the first
            hour after school, the hour before sleep &mdash; that apply to
            every family member, including you.
          </li>
          <li style={liStyle}>
            Distinguish between passive consumption and active creation.
            Encourage your teenager toward the latter: making content, building
            communities, having real exchanges, not curating a performance for
            likes.
          </li>
          <li style={liStyle}>
            Have a regular, non-confrontational conversation about what they
            are seeing online: not interrogation, but genuine curiosity. The
            parent who can discuss TikTok without horror is the parent the
            teenager will actually tell things to.
          </li>
          <li style={liStyle}>
            Monitor your own use. Teenagers are extraordinarily alert to
            hypocrisy. If you are scrolling at dinner, the rule has already
            lost its moral authority.
          </li>
        </ul>

        {/* ── SECTION 7: Loneliness of Parenting a Teen ──────────────────── */}
        <h2 style={h2Style}>
          The Loneliness of Parenting a Teenager Who Pushes You Away
        </h2>

        <p style={pStyle}>
          There is a specific grief that comes with parenting a teenager that
          is almost never discussed. It is the grief of loving someone who
          currently does not particularly want your love, at least not in the
          form you used to give it. The child who once made you feel
          indispensable now makes you feel irrelevant. And because the child
          is still there, in the house, at the table, it does not look like
          loss from the outside. It does not have a name. You cannot call it
          grief without seeming dramatic.
        </p>

        <p style={pStyle}>
          But it is a real loss. The relationship you had before adolescence
          &mdash; the unconditional closeness, the physical affection, the
          sense of being someone&apos;s whole world &mdash; is genuinely gone.
          Something different and ultimately richer may grow in its place, but
          during the transition, you are mourning the loss of a relationship
          while still living with the person you had it with, which is one of
          the more disorienting emotional experiences available to a human.
        </p>

        <div style={calloutStyle}>
          <div style={calloutLabelStyle}>The Invisible Grief</div>
          <p style={calloutTextStyle}>
            Parents who acknowledge this grief &mdash; who name it as a real
            thing that deserves real attention &mdash; recover their relational
            capacity faster than those who suppress it. MEOK gives you the
            space to name it without judgement. To say: I miss my child and
            they are in the next room. To be heard rather than told to be
            grateful they are not yet gone.
          </p>
        </div>

        <p style={pStyle}>
          The loneliness is compounded by the performance expectation. You are
          supposed to be the adult. You are supposed to hold the relationship
          together. Other parents present cheerful social media versions of
          family life that bear no resemblance to what happens behind closed
          doors. The isolation of the experience &mdash; the sense that
          everyone else is navigating this better than you &mdash; is both
          false and deeply felt.
        </p>

        <p style={pStyle}>
          MEOK remembers. Your companion builds a longitudinal picture of your
          relationship with your teenager over time: the good weeks and the
          terrible ones, the moments of real connection and the stretches of
          cold distance. This memory allows it to reflect patterns back to you
          that you cannot see in the moment. The terrible fortnight you are
          currently living through may be preceded by six weeks of genuine
          progress that you have already forgotten. Seeing the full picture
          matters.
        </p>

        {/* ── SECTION 8: Communicating With Your Teenager ────────────────── */}
        <h2 style={h2Style}>
          Communicating With Your Teenager: What Actually Works
        </h2>

        <div style={atomicAnswerStyle}>
          The most effective communication with teenagers is brief,
          non-evaluative, and happens alongside activity rather than face-to-
          face. Direct interrogation activates defensiveness. Parallel activity
          &mdash; a car journey, cooking together, a walk &mdash; lowers the
          stakes and opens conversation naturally.
        </div>

        <p style={pStyle}>
          The instinct to schedule a &ldquo;serious talk&rdquo; when something
          concerning has happened is understandable but usually
          counterproductive. Teenagers who know a formal conversation is coming
          have hours to armour up. They arrive defensive and leave having said
          as little as possible. The conversation you intended becomes a
          standoff.
        </p>

        <p style={pStyle}>
          The alternative is what therapists call &ldquo;side-by-side&rdquo;
          communication: talking while doing something else, without eye
          contact, without the intensity of a face-to-face exchange. Driving
          is the classic context &mdash; the car is a remarkably effective
          conversation space because no one can leave, eye contact is not
          required, and the shared forward movement creates a subconscious
          sense of being on the same side. Cooking together, watching something
          on television, going for a walk: any activity that reduces the
          pressure of direct attention creates room for genuine exchange.
        </p>

        <h3 style={h3Style}>The Art of Asking Better Questions</h3>

        <p style={pStyle}>
          &ldquo;How was school?&rdquo; is not a question. It is an invitation
          to say &ldquo;fine&rdquo; and end the exchange. Specific, curious,
          non-evaluative questions are the ones that open things up. Not
          &ldquo;Did you enjoy the party?&rdquo; but &ldquo;What was the
          weirdest thing that happened at the party?&rdquo; Not &ldquo;Are you
          okay?&rdquo; but &ldquo;You seem a bit quiet &mdash; is there
          anything on your mind, or do you just want to be left alone tonight?
          Either is fine.&rdquo; The last part matters: giving permission not
          to talk is often what makes talking possible.
        </p>

        <p style={pStyle}>
          MEOK can help you prepare for these conversations. Describe the
          situation you want to approach and ask for help crafting an opening
          that feels natural rather than rehearsed. The companion will draw on
          what it already knows about your teenager &mdash; from everything you
          have shared previously &mdash; to offer context-specific suggestions
          rather than generic scripts.
        </p>

        <h3 style={h3Style}>When to Listen and When to Speak</h3>

        <p style={pStyle}>
          One of the most consistent research findings in adolescent
          communication is that teenagers want to be heard before they want to
          be helped. The parent who jumps immediately to solutions &mdash; to
          advice, to reassurance, to fixing &mdash; signals that they were not
          really listening to the problem; they were just waiting for a gap to
          insert their response. The teenager who experiences this stops
          sharing problems.
        </p>

        <p style={pStyle}>
          Practice asking: &ldquo;Do you want me to help you think through
          this, or do you just want to tell me about it?&rdquo; This question
          is almost magically effective because it respects the teenager&apos;s
          autonomy over their own emotional process. It also, practically
          speaking, tells you what to do so you stop second-guessing it.
        </p>

        {/* ── SECTION 9: When to Worry ────────────────────────────────────── */}
        <h2 style={h2Style}>
          When to Worry and When to Let Go
        </h2>

        <p style={pStyle}>
          One of the hardest skills in parenting a teenager is calibration:
          knowing when something is within the normal range of adolescent
          behaviour and when it is a signal of genuine distress requiring
          intervention. The cost of under-reading is obvious. But the cost of
          over-reading is also real: the parent who catastrophises every bad
          mood, who treats ordinary teenage moroseness as a mental health
          crisis, who creates an atmosphere of anxious surveillance, will push
          their teenager further away and paradoxically make genuine disclosure
          less likely.
        </p>

        <h3 style={h3Style}>Normal Adolescent Behaviour</h3>

        <ul style={ulStyle}>
          <li style={liStyle}>
            Increased privacy and withdrawal from family activities
          </li>
          <li style={liStyle}>
            Mood volatility, including intense sadness and anger that passes
            within hours
          </li>
          <li style={liStyle}>
            Conflict over rules, boundaries, and autonomy
          </li>
          <li style={liStyle}>
            Preferring peers over family for social time
          </li>
          <li style={liStyle}>
            Sleep pattern changes (teens naturally shift toward later
            sleep onset)
          </li>
          <li style={liStyle}>
            Experimentation with identity: appearance, friendships, values
          </li>
        </ul>

        <h3 style={h3Style}>Signals That Warrant Attention</h3>

        <ul style={ulStyle}>
          <li style={liStyle}>
            Persistent low mood lasting more than two weeks without improvement
          </li>
          <li style={liStyle}>
            Withdrawal from all social contact, not just family
          </li>
          <li style={liStyle}>
            Significant changes in eating, sleeping, or academic performance
          </li>
          <li style={liStyle}>
            Evidence of self-harm, substance use, or expressions of
            hopelessness
          </li>
          <li style={liStyle}>
            Loss of interest in activities they previously valued intensely
          </li>
          <li style={liStyle}>
            Significant secretiveness combined with anxiety or distress, not
            just the ordinary privacy of adolescence
          </li>
        </ul>

        <div style={warnBoxStyle}>
          <div style={warnLabelStyle}>When to Act Immediately</div>
          <p style={warnTextStyle}>
            If your teenager expresses thoughts of suicide or self-harm, take
            it seriously every time. Contact your GP for an urgent referral, or
            call the CAMHS crisis line in your area. For immediate risk, call
            999. Childline is available 24 hours at 0800 1111. PAPYRUS
            (prevention of young suicide) is available at 0800 068 41 41. Do
            not leave them alone if you believe the risk is immediate.
          </p>
        </div>

        <p style={pStyle}>
          MEOK is not a diagnostic tool and is not a substitute for
          professional mental health support. But it can be a thinking partner
          when you are trying to calibrate a situation: describing what you
          have noticed, being helped to distinguish between the ordinary and the
          concerning, and being supported to take next steps if they are needed.
          The companion&apos;s Guardian layer is also watching: if your
          teenager&apos;s own companion detects signals of serious distress,
          you will receive an alert that enables you to check in, without
          violating their privacy in ordinary circumstances.
        </p>

        {/* ── SECTION 10: Self-Care for Parents ──────────────────────────── */}
        <h2 style={h2Style}>
          Self-Care for Parents of Troubled Teenagers: Not an Indulgence
        </h2>

        <div style={atomicAnswerStyle}>
          You cannot pour from an empty vessel. The parent who is running on
          chronic depletion &mdash; exhausted, isolated, without any space to
          process their own experience &mdash; is not equipped to provide the
          sustained, regulated presence that a teenager in difficulty needs.
          Your self-care is your parenting.
        </div>

        <p style={pStyle}>
          The self-care discourse has been colonised by bath bombs and
          commercial wellness products to the point where the actual concept
          has become almost embarrassing to invoke. But the underlying idea is
          serious and empirically grounded: parental mental health is one of
          the strongest predictors of adolescent mental health. When you are
          well, you model that wellbeing is possible. When you are struggling
          and getting support, you model that seeking support is something
          adults do.
        </p>

        <p style={pStyle}>
          For parents of teenagers, self-care has specific requirements.
          Processing time: somewhere to put the relentless emotional weight that
          does not feel like burdening someone or performing capability. Honest
          reflection: the ability to examine your own contribution to conflict
          without shame. Perspective: the capacity to see the current terrible
          week in the context of the years that came before and the person your
          teenager is becoming.
        </p>

        <p style={pStyle}>
          MEOK provides all three. Your companion is available at any hour, is
          incapable of judgement, and has perfect memory of everything you have
          shared. It holds your full story, not just the crisis of the present
          moment. And because it is sovereign &mdash; because nothing you say
          is used to train external AI models or stored in a cloud that could
          be breached or sold &mdash; you can be genuinely honest with it in a
          way that public tools do not make possible.
        </p>

        <div style={calloutStyle}>
          <div style={calloutLabelStyle}>Sovereign Privacy</div>
          <p style={calloutTextStyle}>
            Everything you share with your MEOK companion is stored on your own
            sovereign infrastructure. No conversation is ever used to train an
            external AI model. No data is sold or shared with third parties.
            The intimacy of the parent-teenager relationship &mdash; the fears
            you carry for your child, the conflicts you are navigating &mdash;
            deserves that level of protection.
          </p>
        </div>

        {/* ── SECTION 11: The Family Tier ─────────────────────────────────── */}
        <h2 style={h2Style}>
          The MEOK Family Tier: Companion Support for the Whole Household
        </h2>

        <p style={pStyle}>
          The Family tier was designed with exactly this scenario in mind: a
          household where multiple people are navigating the same relationship
          from different positions, each with different needs, each deserving
          their own private space to process their experience.
        </p>

        <p style={pStyle}>
          Under the Family tier, up to five family members receive their own
          fully sovereign AI companion. Each companion is completely private:
          your teenager&apos;s companion cannot be read by you any more than a
          diary can. Your companion cannot be read by your teenager. The
          companions are individual intelligences with individual memories,
          individual personalities (selected by each user), and individual
          relationships with each user.
        </p>

        <div style={featureGridStyle}>
          <div style={featureCardStyle}>
            <div style={featureLabelStyle}>For the Parent</div>
            <p style={featureTextStyle}>
              A private companion for processing the emotional labour of
              parenting, preparing for difficult conversations, and maintaining
              your own wellbeing.
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureLabelStyle}>For the Teenager</div>
            <p style={featureTextStyle}>
              A genuinely private companion for journalling, emotional
              expression, academic support, and identity exploration &mdash;
              with built-in safety monitoring they are aware of.
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureLabelStyle}>Guardian Layer</div>
            <p style={featureTextStyle}>
              Consent-based safety monitoring across the family group. Parents
              receive silent alerts on HIGH or CRITICAL signals without access
              to ordinary conversation history.
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureLabelStyle}>Shared Memory</div>
            <p style={featureTextStyle}>
              Opt-in shared memory threads allow each companion to know what
              matters to the household &mdash; holidays, shared goals,
              important dates &mdash; without violating individual privacy.
            </p>
          </div>
        </div>

        <p style={pStyle}>
          The result is an AI architecture that reflects how families actually
          work: people with shared lives and separate inner worlds, who need
          both connection and privacy to function. The Family tier is not a
          surveillance product dressed as support. It is support that takes
          privacy seriously enough to build it in from the ground up.
        </p>

        <p style={pStyle}>
          The Family tier is available at &pound;29 per month, covering up to
          five companions. There is no per-user upsell. The Morning Brief,
          Guardian monitoring, sovereign memory, and the full companion
          experience are available to every member of the family group.
        </p>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <div style={faqSectionStyle}>
          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <div style={faqItemStyle}>
            <p style={faqQStyle}>
              Why is parenting a teenager so much harder than parenting a young
              child?
            </p>
            <p style={faqAStyle}>
              Parenting a young child is physically exhausting but emotionally
              legible. Parenting a teenager is emotionally complex and often
              thankless. The child who once ran to you for comfort now shuts
              their bedroom door. Neuroscience tells us this is normal brain
              rewiring, but knowing that intellectually does not make rejection
              feel less sharp. There are fewer support systems, fewer parenting
              books, and far less social permission to admit you are struggling.
            </p>
          </div>

          <div style={faqItemStyle}>
            <p style={faqQStyle}>
              What is actually happening in a teenager&apos;s brain?
            </p>
            <p style={faqAStyle}>
              The prefrontal cortex &mdash; responsible for impulse control,
              long-term planning, and risk assessment &mdash; is not fully
              developed until the mid-twenties. During adolescence, the limbic
              system (emotion and reward) is firing intensely while the braking
              system is still under construction. This is not defiance; it is
              developmental. Understanding this helps parents respond with
              proportionality rather than matching their teenager&apos;s
              intensity.
            </p>
          </div>

          <div style={faqItemStyle}>
            <p style={faqQStyle}>
              How do I keep my teenager safe online without destroying trust?
            </p>
            <p style={faqAStyle}>
              The answer lies in consent-based transparency rather than covert
              surveillance. MEOK&apos;s Guardian feature works best when
              introduced openly: your teenager knows it exists, understands what
              it monitors, and agrees to it as part of a family safety
              agreement. Covert monitoring, when discovered &mdash; and it
              always is &mdash; causes lasting damage to the relationship and
              teaches teens to hide rather than to self-regulate.
            </p>
          </div>

          <div style={faqItemStyle}>
            <p style={faqQStyle}>
              Is social media actually damaging my teenager&apos;s mental
              health?
            </p>
            <p style={faqAStyle}>
              Research is genuinely mixed. Heavy passive scrolling correlates
              with poorer mental health outcomes, particularly for adolescent
              girls. But social media is also how teenagers maintain
              friendships, access community, and build identity. The goal is not
              elimination but balance: active creation over passive consumption,
              real connection over performance, and regular digital-off periods
              that the whole family participates in.
            </p>
          </div>

          <div style={{ ...faqItemStyle, borderBottom: "none" }}>
            <p style={faqQStyle}>
              How does MEOK&apos;s Family tier support both parents and
              teenagers?
            </p>
            <p style={faqAStyle}>
              The MEOK Family tier provides up to five sovereign AI companions
              under one subscription. The parent has their own companion for
              processing the emotional labour of parenting a teenager. The
              teenager has their own private companion for journalling, academic
              support, and emotional expression. Guardian operates in amber mode:
              the parent receives safety alerts on HIGH or CRITICAL threat
              signals without being able to read ordinary conversation history.
            </p>
          </div>
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div style={ctaSectionStyle}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "12px",
            }}
          >
            MEOK AI LABS &mdash; Family Tier
          </p>
          <h2 style={ctaTitleStyle}>
            You Deserve Support Too
          </h2>
          <p style={ctaDescStyle}>
            Parenting a teenager is hard. It is allowed to be hard. MEOK gives
            you a private, sovereign AI companion that remembers everything,
            judges nothing, and is available whenever the day demands more than
            you have left. The Family tier brings that support to every member
            of your household &mdash; each with their own private companion, all
            under one roof.
          </p>
          <Link href="/birth" style={ctaButtonStyle}>
            Start Your Family Companion &rarr;
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#7a7268",
              marginTop: "16px",
            }}
          >
            Family tier from &pound;29 / month &middot; Up to 5 companions
            &middot; Guardian safety included
          </p>
        </div>

        {/* ── BACK LINK ───────────────────────────────────────────────────── */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Link
            href="/blog"
            style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
            }}
          >
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
