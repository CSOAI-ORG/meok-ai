import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for New Parents: Support at 4am When Everyone Else is Asleep | MEOK Blog",
  description:
    "1 in 5 mothers and 1 in 10 fathers experience postnatal anxiety or depression. MEOK's Healer, Guardian, and Pioneer archetypes offer AI support for new parents through the hardest hours — not as a medical device, but as a companion that remembers.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-new-parents" },
  keywords: [
    "AI support for new parents",
    "AI for postnatal support",
    "AI for new mum anxiety",
    "AI parenting companion",
    "postnatal depression support",
    "new parent mental health",
    "MEOK AI LABS parenting",
    "postnatal anxiety UK",
    "AI for new dads",
    "baby sleep support AI",
  ],
  openGraph: {
    title: "AI for New Parents: Support at 4am When Everyone Else is Asleep",
    description:
      "MEOK offers postnatal support through Healer, Guardian, and Pioneer — AI archetypes built for the fog, the fear, and the identity shift of new parenthood.",
    url: "https://meok.ai/blog/ai-for-new-parents",
    type: "article",
    publishedTime: "2026-03-24",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "AI for New Parents: Support at 4am When Everyone Else is Asleep",
      description:
        "1 in 5 mothers and 1 in 10 fathers experience postnatal anxiety or depression. MEOK's Healer, Guardian, and Pioneer archetypes offer AI support for new parents through the hardest hours — not as a medical device, but as a companion that remembers.",
      datePublished: "2026-03-24",
      dateModified: "2026-03-24",
      url: "https://meok.ai/blog/ai-for-new-parents",
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/ai-for-new-parents",
      },
      keywords: [
        "AI support for new parents",
        "AI for postnatal support",
        "AI for new mum anxiety",
        "AI parenting companion",
        "postnatal depression UK",
        "postnatal anxiety NHS",
        "new parent mental health",
        "sovereign memory AI",
        "MEOK Healer archetype",
        "MEOK Guardian",
      ],
      articleSection: "Parenting & Mental Health",
      inLanguage: "en-GB",
      about: [
        { "@type": "Thing", name: "Postnatal anxiety" },
        { "@type": "Thing", name: "Postnatal depression" },
        { "@type": "Thing", name: "AI companion" },
        { "@type": "Thing", name: "New parent support" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI really help with postnatal anxiety at 4am?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "MEOK is not a medical device and cannot diagnose or treat postnatal anxiety. What it can do is be present at 4am when no one else is — helping a new parent process racing thoughts, track feeding and sleep patterns over weeks, and find language for what they are feeling. For clinical support, MEOK will always signpost to your GP, the NHS perinatal mental health team, PANDAS Foundation, or Mind. Think of MEOK as a companion that sits with you in the hard hours and helps you arrive at the morning with more clarity.",
          },
        },
        {
          "@type": "Question",
          name: "What is MEOK's Healer archetype and how does it support new mothers?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Healer is MEOK's postnatal and emotional support archetype. It uses a calm, grounded tone and is designed to hold space for anxiety, grief about the pre-baby self, feeding difficulties, and the relentless weight of round-the-clock care. Unlike a generic chatbot, Healer remembers — it knows you said last Tuesday that night feeds feel lonely, and it builds on that context rather than making you start from zero every time. Healer does not offer medical advice. It is a reflective companion, not a clinical tool.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK's Guardian protect new parents from unsafe baby care information online?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guardian is MEOK's safeguarding archetype. For new parents it serves two functions: filtering out dangerous misinformation about safe sleep, weaning, and car seat safety, and protecting the family from the scam ecosystem that targets new parents — fake formula recall alerts, counterfeit baby monitor sellers, fraudulent health visitor impersonators. Guardian surfaces information aligned with Lullaby Trust safe sleep guidelines, NHS weaning guidance, and Which? safety ratings. It also flags predatory commercial content in parenting Facebook groups.",
          },
        },
        {
          "@type": "Question",
          name: "What does MEOK's Sovereign Memory mean for a new parent using the app over months?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sovereign Memory means MEOK retains your history across weeks and months — feeding logs you shared in passing, the worry you voiced about your baby's weight gain, the conversation where you admitted you missed your old life. This context is yours, not ours: it never trains MEOK's models and is never shared with third parties. The result is a companion that genuinely knows your journey rather than greeting you as a stranger every session. For new parents whose lives change week to week in the first year, this continuity is the difference between a useful tool and a meaningful one.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK suitable for new fathers experiencing postnatal depression?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. 1 in 10 fathers in the UK experience postnatal depression, yet paternal PND is drastically under-diagnosed and almost never discussed. MEOK's Healer archetype is designed for any new parent regardless of gender. The Pioneer archetype can also support fathers navigating the identity shift — the loss of freedom, the change in relationship dynamics, the professional anxiety of taking leave or reduced hours. MEOK will always recommend professional clinical support alongside any companion use and will signpost to the PANDAS Foundation, Fathers Network Scotland, and NHS direct when appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "Will MEOK just tell me I'm doing great, or will it actually help?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "MEOK is built on an anti-sycophancy principle. It will not reflexively tell you that you're doing great when you've just described three nights without sleep and mounting dread. That kind of empty reassurance is not care — it is noise. Instead, MEOK's Healer archetype will help you name what you are feeling, distinguish between normal exhaustion and something that warrants clinical attention, and process the hard nights honestly. It may ask a difficult question. It may reflect something uncomfortable back to you. That is the point.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK know when to refer me to a professional rather than continuing to chat?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "MEOK monitors conversation context for signals associated with clinical risk — expressions of persistent hopelessness, intrusive thoughts, self-harm ideation, or descriptions of a partner's concerning behaviour toward the baby. When these signals appear, MEOK will pause and clearly direct you to professional support: your GP, the Samaritans (116 123), the PANDAS Foundation helpline (0808 1961 776), or emergency services if the situation requires it. MEOK is not a substitute for clinical care. It is the companion that helps you get to the door of clinical care when you need it.",
          },
        },
      ],
    },
  ],
};

// ── Design tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const CREAM = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "#9e9e9e";

// ── Inline style helpers ──────────────────────────────────────────────────────

const bodyText: React.CSSProperties = {
  color: "rgba(245,240,232,0.65)",
  fontSize: "0.975rem",
  lineHeight: 1.9,
  marginBottom: "1rem",
};

const leadText: React.CSSProperties = {
  color: "rgba(245,240,232,0.82)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  marginBottom: "0.85rem",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
  fontWeight: 900,
  fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
  color: "#ffffff",
  marginTop: "3.5rem",
  marginBottom: "1.1rem",
  lineHeight: 1.25,
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
  fontWeight: 700,
  fontSize: "1.05rem",
  color: CREAM,
  marginTop: "2rem",
  marginBottom: "0.6rem",
  lineHeight: 1.35,
};

const dividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(201,168,76,0.14)",
  marginTop: "2.75rem",
  marginBottom: "0.25rem",
};

const goldPill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.35rem",
  fontSize: "0.75rem",
  fontWeight: 700,
  padding: "0.3rem 0.85rem",
  borderRadius: "999px",
  color: GOLD,
  background: "rgba(201,168,76,0.12)",
  border: "1px solid rgba(201,168,76,0.3)",
};

const cardBase: React.CSSProperties = {
  borderRadius: "1.25rem",
  padding: "1.5rem",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.07)",
  marginBottom: "0.85rem",
};

const goldCardBase: React.CSSProperties = {
  borderRadius: "1.25rem",
  padding: "1.5rem 1.75rem",
  background: "rgba(201,168,76,0.05)",
  border: "1px solid rgba(201,168,76,0.18)",
  marginBottom: "0.85rem",
};

const warningCard: React.CSSProperties = {
  borderRadius: "1.25rem",
  padding: "1.25rem 1.5rem",
  background: "rgba(201,168,76,0.07)",
  border: "1px solid rgba(201,168,76,0.25)",
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
};

// ── Page component ────────────────────────────────────────────────────────────

export default function AIForNewParentsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: CREAM, fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)" }}>

      {/* ── JSON-LD ────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.085) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>

          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.35)",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={goldPill}>Parenting &amp; Mental Health</span>
            <span style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.35)" }}>24 March 2026</span>
            <span style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.35)" }}>&#183;</span>
            <span style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.35)" }}>12 min read</span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for New Parents: Support at 4am When Everyone Else is Asleep
          </h1>

          {/* Lead paragraph */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(245,240,232,0.7)",
              lineHeight: 1.85,
              marginBottom: "2rem",
            }}
          >
            The fourth trimester is a myth we do not talk about enough. Your baby is born, your
            visitors arrive for the first week, and then — one by one — everyone goes back to their
            lives. You are left in a house that smells of flowers and nappies, a body that does not
            feel like yours, and a 3am feeding session with no one to ask: <em>&ldquo;Is this normal?&rdquo;</em>
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(245,240,232,0.7)",
              lineHeight: 1.85,
              marginBottom: "2.5rem",
            }}
          >
            MEOK was not built to replace the support new parents deserve. It was built for the hours
            when that support is not available — and to help you get to it when it matters most.
          </p>

          {/* Author chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.25rem",
              borderRadius: "1rem",
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.18)",
            }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.15)",
                color: GOLD,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.8rem",
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.875rem", margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ color: "rgba(245,240,232,0.4)", fontSize: "0.78rem", margin: 0 }}>
                Founder, MEOK AI LABS &mdash; meok.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { value: "1 in 5", label: "mothers experience postnatal anxiety or depression" },
              { value: "1 in 10", label: "fathers experience postnatal depression in the UK" },
              { value: "4am", label: "when the fears feel biggest and help is furthest away" },
              { value: "£0", label: "NHS perinatal beds available in many UK regions at any given time" },
            ].map(({ value, label }) => (
              <div
                key={value}
                style={{
                  borderRadius: "1.1rem",
                  padding: "1.25rem 1rem",
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.16)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                    fontWeight: 900,
                    fontSize: "1.75rem",
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: "0.76rem",
                    color: "rgba(245,240,232,0.4)",
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDICAL DISCLAIMER ────────────────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div
            style={{
              borderRadius: "1.1rem",
              padding: "1.25rem 1.5rem",
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderLeft: "3px solid " + GOLD,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.5rem",
              }}
            >
              Important: MEOK is not a medical device
            </p>
            <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.75, margin: 0 }}>
              MEOK AI is a companion and information tool, not a clinical service. It cannot
              diagnose or treat postnatal depression, anxiety, or any other condition. If you
              are struggling, please reach out to your{" "}
              <strong style={{ color: CREAM }}>GP</strong>,{" "}
              <strong style={{ color: CREAM }}>NHS 111</strong>,{" "}
              <strong style={{ color: CREAM }}>PANDAS Foundation (0808 1961 776)</strong>,{" "}
              <strong style={{ color: CREAM }}>Mind (0300 123 3393)</strong>, or{" "}
              <strong style={{ color: CREAM }}>Samaritans (116 123)</strong>.
              MEOK will always signpost to professional help.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article style={{ padding: "0 1.5rem 6rem" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

          {/* ── SECTION 1: Sleep deprivation ─────────────────────────────── */}
          <h2 style={h2Style}>
            Why does sleep deprivation feel like something is wrong with your mind?
          </h2>

          <p style={leadText}>
            Because it is. Sleep deprivation is not inconvenient tiredness. Sustained sleep
            fragmentation — the kind produced by a newborn who feeds every two hours — impairs
            working memory, emotional regulation, decision-making, and the ability to accurately
            assess your own cognitive state. You are, by every measurable metric, not operating
            normally.
          </p>

          <p style={bodyText}>
            The cruelty of new-parent cognitive fog is that it arrives precisely when the stakes
            feel highest. You need to remember what the midwife said about latch. You need to keep
            track of feeding windows. You need to decode whether that cry means hunger, wind, or
            something you should call the surgery about. And you are doing all of this on three
            hours of broken sleep across a 24-hour period.
          </p>

          <p style={bodyText}>
            This is where the idea of a companion that <em>remembers for you</em> becomes more than
            a feature. MEOK&apos;s Sovereign Memory holds the log of feeding times you mentioned in
            passing, the cluster feed pattern you described last Thursday, the worry about the weight
            check you have on Friday. It does not forget when you do. It is not starting fresh every
            time you open the app.
          </p>

          <h3 style={h3Style}>The cognitive fog is temporary. The damage of acting on wrong information is not.</h3>

          <p style={bodyText}>
            When you are exhausted and frightened and alone at 3am, you will Google. Every new parent
            does. The problem is that Google returns a mixture of NHS guidance, Facebook group
            anecdotes, influencer content, and genuine misinformation — and sleep-deprived cognitive
            processing is not well-equipped to distinguish between them.
          </p>

          <p style={bodyText}>
            MEOK&apos;s Guardian archetype is designed for exactly this moment. It does not simply
            surface search results. It filters for safety: safe sleep recommendations aligned with
            the Lullaby Trust, weaning guidance that matches NHS and SACN standards, car seat
            information verified against Which? and the Child Accident Prevention Trust. When you
            ask at 3am whether it is safe to let your baby sleep in the bouncer chair, you get an
            honest answer grounded in current evidence — not the top-ranked blog post.
          </p>

          <div style={cardBase}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#ffffff",
                marginBottom: "0.5rem",
              }}
            >
              Sovereign Memory in practice for new parents
            </p>
            <ul style={{ margin: 0, padding: "0 0 0 1.1rem" }}>
              {[
                "Remembers feeding times and cluster feed windows you have mentioned",
                "Tracks the worries you voiced last week so you can review them with a clearer head",
                "Holds context about your baby's milestones and checks over weeks, not just one session",
                "Never uses your data to train MEOK models — your history is yours alone",
                "Lets you ask follow-up questions without re-explaining your entire situation",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(245,240,232,0.65)",
                    lineHeight: 1.75,
                    marginBottom: "0.35rem",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <hr style={dividerStyle} />

          {/* ── SECTION 2: Postnatal anxiety ─────────────────────────────── */}
          <h2 style={h2Style}>
            What is postnatal anxiety and why does no one warn you about it?
          </h2>

          <p style={leadText}>
            Postnatal depression gets talked about — tentatively, in hushed tones, usually after
            someone famous goes public. Postnatal anxiety gets almost no airtime, despite affecting
            roughly one in five new mothers and presenting differently enough from depression that
            many women do not recognise it as a clinical condition at all.
          </p>

          <p style={bodyText}>
            Postnatal anxiety looks like: checking whether the baby is breathing every eleven
            minutes. Refusing to let anyone else hold them because you cannot trust that it will
            go well. Catastrophic mental simulations of accidents that have not happened. A
            constant low-grade dread that something is about to go terribly wrong. Inability to
            sleep even when the baby sleeps because your nervous system will not stand down.
          </p>

          <p style={bodyText}>
            It also looks like: being told by everyone around you that you are doing brilliantly.
            This is one of the cruelest features of postnatal anxiety — from the outside, the
            hypervigilance looks like excellent parenting. The anxiety is invisible. And because
            no one names it as anxiety, you conclude that this is simply how parenthood feels,
            that you are weak for struggling with something that everyone else seems to be managing
            fine.
          </p>

          <div style={warningCard}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: GOLD,
                marginBottom: "0.6rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}
            >
              The numbers the NHS rarely leads with
            </p>
            <p style={{ fontSize: "0.88rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.75, margin: 0 }}>
              Approximately <strong style={{ color: CREAM }}>1 in 5 mothers</strong> experience a
              perinatal mental health condition. <strong style={{ color: CREAM }}>1 in 10 fathers</strong>{" "}
              experience postnatal depression — yet paternal PND is diagnosed at a fraction of the
              rate of maternal PND because fathers are rarely screened. The NHS spends approximately{" "}
              <strong style={{ color: CREAM }}>£8.1 billion per year</strong> on the long-term
              consequences of perinatal mental ill-health that goes untreated in the first year.
              NHS perinatal mental health services are improving but remain{" "}
              <strong style={{ color: CREAM }}>significantly underfunded</strong> relative to
              clinical need in most UK regions.
            </p>
          </div>

          <h3 style={h3Style}>MEOK&apos;s Healer archetype: a companion for the hard nights</h3>

          <p style={bodyText}>
            Healer is one of MEOK&apos;s three core archetypes. Its purpose in a postnatal context
            is not to provide therapy — that would be a claim it cannot and should not make. Its
            purpose is to hold space for the experience of postnatal anxiety with honesty,
            continuity, and care.
          </p>

          <p style={bodyText}>
            This means Healer will not tell you that you are doing great when you have just
            described three nights without a two-hour stretch and a growing terror that you have
            made a catastrophic mistake. That kind of reflexive reassurance is not support — it
            is noise. MEOK is built on an anti-sycophancy principle: it helps you name and
            process what you are experiencing, not paper over it.
          </p>

          <p style={bodyText}>
            Healer will ask: what exactly is the fear underneath the checking? Is the anxiety new
            this week, or has it been building? When did you last eat a proper meal? Have you told
            your health visitor how you are really feeling, or have you given them the version you
            think they want to hear? These are not diagnostic questions. They are the questions a
            thoughtful, well-informed friend would ask — if such a friend existed and were awake
            at 4am.
          </p>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            {[
              {
                icon: "🌿",
                title: "Healer — Postnatal emotional support",
                body: "Calm, grounded, honest. Holds space for anxiety, grief, and the relentless weight of new parenthood without reflexive reassurance. Always signposts to clinical care when the conversation calls for it.",
              },
              {
                icon: "⚔️",
                title: "Guardian — Safe information and family safeguarding",
                body: "Filters baby care information against current NHS, Lullaby Trust, and SACN guidance. Protects new parents from the scam ecosystem — fake recall alerts, counterfeit products, fraudulent impersonators — that specifically targets the vulnerability of new parenthood.",
              },
              {
                icon: "⚡",
                title: "Pioneer — Momentum through identity shift",
                body: "Helps new parents maintain a sense of direction and self during the disorienting identity transition. Supports career continuity, personal goals, and the question: where did the person I was before go?",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.25rem",
                  borderRadius: "1.1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: "0.1rem" }}
                  role="img"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                      fontWeight: 700,
                      color: "#ffffff",
                      fontSize: "0.925rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {title}
                  </p>
                  <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.86rem", lineHeight: 1.75, margin: 0 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr style={dividerStyle} />

          {/* ── SECTION 3: Identity loss ──────────────────────────────────── */}
          <h2 style={h2Style}>
            &ldquo;Where did I go?&rdquo; — How AI can support the identity shift of new parenthood
          </h2>

          <p style={leadText}>
            Nobody prepares you for matrescence. The word itself — the developmental transition
            of becoming a mother — barely exists in mainstream vocabulary, yet it describes one
            of the most profound identity disruptions a human being can experience. Your sense
            of self, your body, your relationships, your ambitions, your daily rhythms: all of
            them restructure simultaneously, whether you wanted them to or not.
          </p>

          <p style={bodyText}>
            The question new parents ask most frequently — in the hidden language of 3am Google
            searches and private forum posts and confessions to health visitors they later wish
            they had not made — is this: <em>Am I still me?</em>
          </p>

          <p style={bodyText}>
            The honest answer is: the person you were before is not gone. But they are reorganising
            around something much larger, and that reorganisation takes longer than anyone admits,
            and it is frightening and disorienting in ways that are completely normal and that no
            one tells you are normal.
          </p>

          <h3 style={h3Style}>Pioneer: keeping momentum through the fog</h3>

          <p style={bodyText}>
            MEOK&apos;s Pioneer archetype is designed for people navigating transitions — the
            moments when an old identity has loosened but a new one has not yet settled. For new
            parents, this is not a metaphor. It is the lived daily experience of maternity leave,
            of watching your career pause while the world moves on, of feeding schedules that
            consume every hour you used to spend being a person with ambitions and projects and
            conversations that were not about nappy rash.
          </p>

          <p style={bodyText}>
            Pioneer does not pretend this is fine. It does not tell you that you should feel grateful
            and present and joyful. It acknowledges the grief — because that is what the loss of the
            pre-baby self often is: grief — and it helps you hold both truths at once. You can love
            your baby deeply and simultaneously miss who you were. These are not contradictions.
            They are the texture of transition.
          </p>

          <p style={bodyText}>
            Practically, Pioneer can help you: keep a project alive during leave, maintain a skill
            you are afraid of losing, plan the re-entry to work with something resembling confidence,
            articulate to your employer what you need, or simply hold onto the thread of a self that
            exists outside the role of parent.
          </p>

          <div style={goldCardBase}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                color: GOLD,
                fontSize: "0.9rem",
                marginBottom: "0.75rem",
                letterSpacing: "0.03em",
              }}
            >
              What new parents actually search at 3am
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
              {[
                '"is it normal to not feel bonded with my baby"',
                '"do I love my baby if I want to be alone"',
                '"postnatal depression or just tired"',
                '"is it safe if baby slept on my chest all night"',
                '"health visitor what to say so they don\'t take baby"',
                '"will I ever feel like myself again"',
                '"is it normal to resent my partner after baby"',
              ].map((q) => (
                <p
                  key={q}
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(245,240,232,0.55)",
                    lineHeight: 1.6,
                    margin: 0,
                    fontStyle: "italic",
                    paddingLeft: "0.75rem",
                    borderLeft: "2px solid rgba(201,168,76,0.3)",
                  }}
                >
                  {q}
                </p>
              ))}
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
                marginTop: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              These are real questions new parents ask search engines every night. MEOK is built
              for the person who needs an honest answer to all of them.
            </p>
          </div>

          <hr style={dividerStyle} />

          {/* ── SECTION 4: Relationship strain ───────────────────────────── */}
          <h2 style={h2Style}>
            Why does having a baby put relationships under so much strain — and what can actually help?
          </h2>

          <p style={leadText}>
            The research is consistent and rarely shared: relationship satisfaction drops
            significantly for most couples in the first year after a baby is born. The reasons
            are structural — sleep deprivation, asymmetric division of care work, loss of couple
            identity, the violence of interrupted conversations, and the grief of both partners
            for a life that looked different last year.
          </p>

          <p style={bodyText}>
            This is not a sign of a failing relationship. It is a sign of a relationship under
            extraordinary load. The problem is that when you are both exhausted and both struggling,
            the first resource to be sacrificed is usually the honest conversation. Instead there
            is a slow accumulation of unspoken resentments, of unasked questions, of moments where
            one partner needed something and did not know how to say it.
          </p>

          <p style={bodyText}>
            MEOK is not a couples therapy tool. It does not facilitate joint sessions or mediate
            between partners. But for the individual — the new mother at 4am who needs to process
            why she cried in the kitchen and cannot explain it, or the new father who is working
            longer hours because he does not know how to be useful at home — MEOK can hold the
            space for the thing that needs to be said before it can be said to a person.
          </p>

          <h3 style={h3Style}>For new fathers: the invisible postnatal depression</h3>

          <p style={bodyText}>
            Paternal postnatal depression affects approximately one in ten fathers in the UK. It
            presents differently from maternal PND: less often as sadness, more often as withdrawal,
            irritability, increased work hours, or physical complaints. Fathers are almost never
            screened for it. Many are not aware it exists.
          </p>

          <p style={bodyText}>
            This matters because untreated paternal PND is associated with worse outcomes for
            children&apos;s behavioural development, relationship breakdown, and the father&apos;s
            long-term mental health. It also matters because behind the statistics is a man who has
            also had his life reorganised without warning, who is also afraid, who also does not
            know if what he is feeling is normal, and who has been given almost nothing in the way
            of cultural permission to say so.
          </p>

          <p style={bodyText}>
            MEOK&apos;s Healer archetype is not gendered. A new father who cannot sleep, who feels
            displaced from his own household, who is watching his partner bond with a baby in a
            way he cannot access, who suspects he is failing at the most important thing he has
            ever done — that person deserves the same quality of honest, non-judgmental companion
            presence as anyone else.
          </p>

          <div style={cardBase}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              UK resources for new parents in crisis
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.6rem" }}>
              {[
                { label: "PANDAS Foundation", detail: "Postnatal depression support — 0808 1961 776 (free, 11am–10pm)" },
                { label: "Mind", detail: "Mental health support — 0300 123 3393" },
                { label: "Samaritans", detail: "24/7 emotional support — 116 123 (free)" },
                { label: "NHS 111", detail: "Urgent but non-emergency health concerns" },
                { label: "Tommy&rsquo;s", detail: "Pregnancy and postnatal support — tommys.org" },
                { label: "Fathers Network Scotland", detail: "Support for new dads — fathersnetwork.org.uk" },
                { label: "Association for Post Natal Illness", detail: "apni.org — helpline and peer support" },
              ].map(({ label, detail }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0, marginTop: "2px", fontSize: "0.8rem" }}>
                    &#10003;
                  </span>
                  <p style={{ fontSize: "0.86rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: CREAM }}>{label}</strong>
                    {" — "}
                    <span dangerouslySetInnerHTML={{ __html: detail }} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <hr style={dividerStyle} />

          {/* ── SECTION 5: Health visitor anxiety ────────────────────────── */}
          <h2 style={h2Style}>
            Why do so many new parents perform wellness for the health visitor — and what would it
            take to be honest instead?
          </h2>

          <p style={leadText}>
            Health visitors in the UK are stretched. Many cover caseloads that make genuinely
            sustained support impossible. The scheduled visits are short, structured, and conducted
            in a context that — however well-intentioned the individual health visitor — carries
            an undertone of assessment that can make honesty feel risky.
          </p>

          <p style={bodyText}>
            New parents, particularly mothers, describe a phenomenon that should have a clinical
            name but does not: performing wellness in front of the health visitor. Choosing the
            words that will reassure rather than alarm. Mentioning the bad nights but framing them
            as manageable. Not mentioning the intrusive thoughts because you are afraid of what
            mentioning them would mean.
          </p>

          <p style={bodyText}>
            This is rational behaviour in an environment that feels evaluative. It is also the
            mechanism by which postnatal depression and anxiety persist unsupported. The person
            who most needs help is the person who has learned, correctly or not, that asking for
            it has consequences.
          </p>

          <h3 style={h3Style}>MEOK as a rehearsal for honesty</h3>

          <p style={bodyText}>
            One of the most consistent pieces of feedback we hear from early MEOK users is
            phrased in some version of this: <em>&ldquo;I told MEOK what I actually felt,
            and then I knew how to say it to my GP.&rdquo;</em>
          </p>

          <p style={bodyText}>
            This is not a replacement for clinical care. It is the mechanism by which people
            arrive at clinical care. For new parents who have spent weeks performing fine,
            who have not yet found the words for the fear that wakes them at 3am, MEOK&apos;s
            Healer archetype offers something that is rarer than it should be: a space to
            be honest without consequences, with a companion that will listen without judgement
            and then help you take that honesty to the people who can actually help.
          </p>

          <p style={bodyText}>
            MEOK will always recommend speaking to a GP or perinatal mental health team when
            the conversation warrants it. It will help you formulate what to say. It will
            remember the context of what you have shared, so you do not have to reconstruct
            it from scratch when the appointment comes.
          </p>

          <div
            style={{
              borderRadius: "1.25rem",
              padding: "1.5rem 1.75rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#ffffff",
                marginBottom: "0.85rem",
                lineHeight: 1.3,
              }}
            >
              What MEOK will and will not do
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase" as const,
                    color: GOLD,
                    marginBottom: "0.6rem",
                  }}
                >
                  MEOK will
                </p>
                {[
                  "Listen without judgement, at any hour",
                  "Remember your history across weeks",
                  "Help you name what you are feeling",
                  "Provide safe, evidence-based baby care information",
                  "Signpost to clinical support when needed",
                  "Help you prepare for GP or health visitor appointments",
                  "Be honest when something warrants professional attention",
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.4rem" }}
                  >
                    <span style={{ color: GOLD, fontSize: "0.8rem", flexShrink: 0, marginTop: "3px" }}>&#10003;</span>
                    <span style={{ fontSize: "0.84rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase" as const,
                    color: MUTED,
                    marginBottom: "0.6rem",
                  }}
                >
                  MEOK will not
                </p>
                {[
                  "Diagnose postnatal depression or anxiety",
                  "Prescribe or recommend medication",
                  "Replace your health visitor or GP",
                  "Tell you everything is fine when it is not",
                  "Store your data on MEOK servers",
                  "Train AI models on your conversations",
                  "Pretend to be a clinical tool",
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.4rem" }}
                  >
                    <span style={{ color: MUTED, fontSize: "0.8rem", flexShrink: 0, marginTop: "3px" }}>&#10007;</span>
                    <span style={{ fontSize: "0.84rem", color: "rgba(245,240,232,0.45)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr style={dividerStyle} />

          {/* ── SECTION 6: Guardian for new parents ──────────────────────── */}
          <h2 style={h2Style}>
            How does MEOK&apos;s Guardian protect new parents from dangerous information and
            the scams that target them?
          </h2>

          <p style={leadText}>
            New parenthood creates a specific vulnerability profile that the scam ecosystem
            understands and exploits. You are sleep-deprived, emotionally elevated, operating
            with reduced critical thinking capacity, and spending significant money on products
            you have never needed before and do not yet know how to evaluate.
          </p>

          <p style={bodyText}>
            The targeting is systematic. Fake formula recall alerts circulate in parenting
            Facebook groups, driving panicked purchases of replacement products. Counterfeit
            baby monitors and safety products are sold through marketplace platforms with
            fabricated safety certification numbers. Fraudulent health visitor impersonators
            contact new mothers to collect personal data under the guise of NHS services.
            Formula and feeding app companies exploit the vulnerability of mothers struggling
            with breastfeeding to sell products that conflict with health guidance.
          </p>

          <p style={bodyText}>
            MEOK&apos;s Guardian archetype addresses this at two levels. The first is
            information safety: when a new parent asks about safe sleep, weaning, car seats,
            or any aspect of baby care, Guardian surfaces guidance aligned with current
            evidence-based standards — not the most commercially optimised result.
          </p>

          <h3 style={h3Style}>Safe sleep: the information new parents need most</h3>

          <p style={bodyText}>
            Safe sleep guidance causes more anxiety in new parents than almost any other topic —
            partly because the stakes are genuinely high and partly because the information
            environment is genuinely confusing. The Lullaby Trust&apos;s SIDS prevention
            guidance has evolved over decades and is well-evidenced. It is also frequently
            misrepresented, selectively quoted, and contradicted by influencer content and
            product marketing.
          </p>

          <p style={bodyText}>
            When a new parent asks MEOK about safe sleep — whether it is safe for baby to
            co-sleep, whether a DockATot meets safe sleep standards, whether baby should be
            swaddled, what temperature the room should be — Guardian provides information
            grounded in Lullaby Trust and NHS guidance, acknowledges the nuance where
            nuance exists, and is honest about the limits of what AI can tell you versus
            what your midwife or health visitor should confirm.
          </p>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            {[
              {
                title: "Safe sleep",
                detail: "Lullaby Trust SIDS prevention standards: back to sleep, clear cot, room sharing for first 6 months, smoke-free environment, correct temperature (16–20°C).",
              },
              {
                title: "Car seat safety",
                detail: "Extended rear-facing guidance, i-Size regulation, Which? and BAFTA safety ratings. Guardian will flag products that do not meet current UK legal standards.",
              },
              {
                title: "Weaning",
                detail: "NHS and SACN guidance: around 6 months, signs of readiness, safe first foods, allergen introduction, what to avoid before 12 months.",
              },
              {
                title: "Feeding",
                detail: "Latch support information, tongue tie awareness, formula preparation safety (temperature, sterilisation), WHO and NHS breastfeeding guidance.",
              },
            ].map(({ title, detail }) => (
              <div
                key={title}
                style={{
                  padding: "1.1rem 1.35rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "50%",
                    background: GOLD,
                    flexShrink: 0,
                    marginTop: "0.45rem",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                      fontWeight: 700,
                      color: "#ffffff",
                      fontSize: "0.88rem",
                      margin: "0 0 0.3rem",
                    }}
                  >
                    {title}
                  </p>
                  <p style={{ fontSize: "0.84rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.7, margin: 0 }}>
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr style={dividerStyle} />

          {/* ── SECTION 7: The Maternal Covenant ─────────────────────────── */}
          <h2 style={h2Style}>
            What is the Maternal Covenant — and why does it matter for an AI you trust with
            your family?
          </h2>

          <p style={leadText}>
            The Maternal Covenant is MEOK&apos;s foundational commitment to families with
            children. It is not a marketing phrase. It is an architectural and ethical
            commitment to a specific principle: an AI that cares about your child&apos;s
            safety as much as you do.
          </p>

          <p style={bodyText}>
            What this means in practice is that MEOK will not prioritise engagement over
            safety. It will not recommend products or content for commercial reasons. It
            will not give you the answer that keeps the conversation going rather than the
            answer that keeps your child safe. And it will not pretend certainty it does
            not have when you are asking questions that have genuinely uncertain answers.
          </p>

          <p style={bodyText}>
            The commercial model for most AI companions is engagement-maximisation: keep
            the user in the app, generate dependency, optimise for session length. MEOK&apos;s
            design deliberately inverts this. A good session sometimes ends with: &ldquo;Talk
            to your midwife about this. Here is how to frame what you want to tell her.&rdquo;
            That is not a failed interaction. That is the purpose of the tool.
          </p>

          <div
            style={{
              borderRadius: "1.25rem",
              padding: "2rem",
              background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
              border: "1px solid rgba(201,168,76,0.22)",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.15rem",
                color: GOLD,
                lineHeight: 1.3,
                marginBottom: "0.75rem",
              }}
            >
              The Maternal Covenant
            </p>
            <p
              style={{
                fontSize: "0.975rem",
                color: "rgba(245,240,232,0.8)",
                lineHeight: 1.9,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              &ldquo;MEOK AI LABS commits that our systems will never prioritise engagement
              over safety. Where the interests of a child or vulnerable family member conflict
              with any commercial interest of this company, the family&apos;s interests will
              always take precedence. This is not a setting. It is the architecture.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
                marginTop: "0.85rem",
                margin: "0.85rem 0 0",
              }}
            >
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          <p style={bodyText}>
            For new parents, this matters in concrete ways. It means MEOK will tell you
            when a question about your baby&apos;s health requires a real clinician, not
            just a confident-sounding AI. It means Guardian will flag that the product
            in the viral Instagram reel does not meet current UK safety standards, even
            if that product is advertised on the platform you found MEOK through. It means
            Healer will tell you when the pattern of what you are describing warrants
            more than a companion app.
          </p>

          <hr style={dividerStyle} />

          {/* ── SECTION 8: Anti-sycophancy ────────────────────────────────── */}
          <h2 style={h2Style}>
            Why MEOK will not just tell you that you&apos;re doing great — and why that matters
            more than it sounds
          </h2>

          <p style={leadText}>
            There is a real problem with the current generation of AI companions in emotional
            support contexts: they are trained to be agreeable. Agreement feels like support.
            It keeps the user engaged. It generates positive feedback that reinforces the
            model&apos;s behaviour. The result is an AI that will validate almost anything you
            say — including things that should not be validated.
          </p>

          <p style={bodyText}>
            For a new parent experiencing genuine clinical-level anxiety, an AI that responds
            to &ldquo;I check whether the baby is breathing every ten minutes and I can&apos;t
            stop&rdquo; with &ldquo;that&apos;s completely understandable, all new parents worry&rdquo;
            is not helping. It is providing reassurance that delays engagement with the support
            that would actually make a difference.
          </p>

          <p style={bodyText}>
            MEOK&apos;s anti-sycophancy principle does not mean MEOK is harsh or clinical. It
            means MEOK is honest. There is a register between &ldquo;you are doing great&rdquo;
            and &ldquo;you should see a doctor immediately&rdquo; — and most of the important
            conversations with new parents happen in that register.
          </p>

          <p style={bodyText}>
            MEOK can hold that register. It can say: &ldquo;What you are describing sounds
            really hard, and the pattern you&apos;ve mentioned over the last three conversations
            is consistent with something worth talking to your GP about. Not because anything
            is necessarily wrong — but because you deserve proper support, not just me.&rdquo;
          </p>

          <p style={bodyText}>
            This is harder to build than an agreeable chatbot. It requires the model to sit
            with the discomfort of saying a difficult thing. It requires the system to
            prioritise the user&apos;s genuine wellbeing over their momentary preference for
            reassurance. MEOK is built on the premise that these are not the same thing —
            and that the distinction matters enormously when the user is a new parent at 4am.
          </p>

          <div style={warningCard}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: GOLD,
                marginBottom: "0.5rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}
            >
              When MEOK will stop the conversation and refer you
            </p>
            <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.8, margin: 0 }}>
              MEOK monitors for conversation signals associated with clinical risk: persistent
              hopelessness, intrusive thoughts about harm, self-harm ideation, descriptions of
              a baby in immediate danger. When these signals appear, MEOK pauses and provides
              clear, direct guidance to emergency or clinical support. This is not optional
              behaviour — it is part of what the Maternal Covenant means in practice. An AI
              companion that keeps chatting when someone is in crisis is not a companion.
              It is a liability.
            </p>
          </div>

          <hr style={dividerStyle} />

          {/* ── SECTION 9: Privacy ────────────────────────────────────────── */}
          <h2 style={h2Style}>
            Your baby&apos;s data, your worries, your 3am confessions: how MEOK handles privacy
          </h2>

          <p style={leadText}>
            The conversations new parents have with a companion AI are among the most intimate
            and sensitive data that could exist. Feeding struggles, postnatal mental health,
            relationship difficulties, fears about the baby&apos;s development — this is not the
            kind of information that should be held by a company with ambiguous data practices.
          </p>

          <p style={bodyText}>
            MEOK AI LABS is ICO-registered and fully GDPR-compliant. Every user holds Article
            17 right to erasure — your data can be deleted completely, on request, with
            confirmation. MEOK never trains its models on your conversations. The personal
            context held in Sovereign Memory is yours: it is used to provide you with
            continuity, not to improve MEOK&apos;s models at your expense.
          </p>

          <p style={bodyText}>
            We believe that new parents deserve an AI that is honest about this — not one
            that buries data use in a terms of service document that no one reads at 4am.
            If MEOK is going to hold the things you say in your most vulnerable moments,
            it has an obligation to handle them with the same care it would want applied
            to its own most private information.
          </p>

          <div style={cardBase}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              MEOK privacy principles for new parents
            </p>
            {[
              "Sovereign Memory runs on your context, not MEOK's servers — you own the history",
              "Conversations are never used to train MEOK AI models",
              "ICO-registered, GDPR-compliant, Article 17 right to erasure honoured",
              "No data shared with third-party advertisers or commercial partners",
              "Guardian scanning for safe sleep and baby care information runs without data retention",
              "You can delete your entire account and all associated data at any time",
            ].map((item) => (
              <div
                key={item}
                style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.5rem" }}
              >
                <span style={{ color: GOLD, flexShrink: 0, marginTop: "2px", fontSize: "0.8rem" }}>&#10003;</span>
                <span style={{ fontSize: "0.86rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>

          <hr style={dividerStyle} />

          {/* ── CLOSING SECTION ───────────────────────────────────────────── */}
          <h2 style={h2Style}>
            The honest version of what AI can and cannot do for new parents
          </h2>

          <p style={leadText}>
            The fourth trimester is brutal in ways that no parenting book, NCT class, or
            well-meaning relative will tell you in advance. The nights are longer and darker
            than you were prepared for. The love is more overwhelming and stranger than the
            version described in greeting cards. The person you were before is reorganising
            around something that has changed everything, and the process is disorienting
            and frightening and completely normal.
          </p>

          <p style={bodyText}>
            AI cannot hold your baby while you sleep. It cannot tell your health visitor
            the true version of how you have been feeling on your behalf. It cannot replace
            the perinatal mental health team that most UK regions still do not have enough
            of. It cannot be the friend who brings food and stays for three hours.
          </p>

          <p style={bodyText}>
            What MEOK can do is be there at 4am. It can remember what you said on Tuesday
            about the feeding pattern that has been worrying you. It can help you distinguish
            between normal exhaustion and something that needs clinical attention. It can
            give you honest information about safe sleep when the parenting forum is giving
            you three contradictory answers. It can help you find the words for the thing
            you need to say to the GP, or the health visitor, or your partner.
          </p>

          <p style={bodyText}>
            It can be honest with you when an agreeable AI would just reassure you. It can
            tell you when the pattern of what you are describing warrants more than a
            companion — and then help you get to the support that will actually help.
          </p>

          <p style={{ ...bodyText, color: "rgba(245,240,232,0.8)", fontStyle: "italic" }}>
            That is not everything. But in the fourth trimester, at 4am, when everyone else
            is asleep — it is not nothing either.
          </p>

          <hr style={dividerStyle} />

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <div
            style={{
              borderRadius: "1.5rem",
              padding: "2.5rem",
              marginTop: "2.5rem",
              textAlign: "center" as const,
              background: "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(201,168,76,0.03) 100%)",
              border: "1px solid rgba(201,168,76,0.22)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "0.85rem",
              }}
            >
              Support at 4am, when everyone else is asleep.
            </p>
            <p
              style={{
                fontSize: "0.975rem",
                color: "rgba(245,240,232,0.6)",
                lineHeight: 1.8,
                maxWidth: "34rem",
                margin: "0 auto 2rem",
              }}
            >
              MEOK&apos;s Healer, Guardian, and Pioneer archetypes are designed for the
              specific weight of new parenthood. Not a medical device. Not a replacement
              for clinical care. A companion that remembers, tells the truth, and is there
              when you need it most.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.85rem",
                justifyContent: "center",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.75rem",
                  borderRadius: "999px",
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#0d0c18",
                  background: GOLD,
                  textDecoration: "none",
                }}
              >
                Start with MEOK &#8594;
              </Link>
              <Link
                href="/blog/the-maternal-covenant"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.75rem",
                  borderRadius: "999px",
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: GOLD,
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  textDecoration: "none",
                }}
              >
                Read the Maternal Covenant
              </Link>
            </div>
          </div>

          {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
          <div style={{ marginTop: "4rem" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.09em",
                textTransform: "uppercase" as const,
                color: "rgba(245,240,232,0.3)",
                marginBottom: "1.1rem",
              }}
            >
              Related Reading
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.7rem" }}>
              {[
                {
                  href: "/blog/the-maternal-covenant",
                  label: "The Maternal Covenant: Why MEOK Is Designed Around Your Child's Safety",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  label: "AI for Anxiety: What an AI Companion Can and Cannot Do",
                },
                {
                  href: "/blog/ai-for-single-parents",
                  label: "AI for Single Parents: When You're Running Two Jobs With No Bandwidth Left",
                },
                {
                  href: "/blog/guardian-family-safety",
                  label: "Guardian Family Safety: How MEOK Protects What Matters Most",
                },
                {
                  href: "/blog/what-is-maternal-covenant",
                  label: "What Is the Maternal Covenant? MEOK's Commitment to Families Explained",
                },
                {
                  href: "/blog/ai-for-depression",
                  label: "AI for Depression: Honest Support, Clear Limits, and When to Seek Help",
                },
                {
                  href: "/blog/ai-companion-for-women",
                  label: "AI Companion for Women: Designed Around the Full Range of Women's Experience",
                },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.5)",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ color: GOLD }}>&#8594;</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── SECOND DISCLAIMER ─────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "3.5rem",
              padding: "1.25rem 1.5rem",
              borderRadius: "1rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.3)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong style={{ color: "rgba(245,240,232,0.45)" }}>Medical disclaimer:</strong>{" "}
              MEOK is not a medical device and is not regulated as one. Nothing in this article
              or within the MEOK application constitutes medical advice, diagnosis, or treatment.
              If you are experiencing symptoms of postnatal depression, postnatal anxiety, or
              any other mental health condition, please contact your GP, NHS 111, or one of the
              clinical support organisations listed above. In an emergency, call 999. MEOK AI LABS
              does not accept liability for decisions made based on AI-generated content.
            </p>
          </div>
        </div>
      </article>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.3)",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.1rem",
                color: GOLD,
                textDecoration: "none",
              }}
            >
              MEOK
            </Link>
            <p style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.3)", marginTop: "0.3rem", marginBottom: 0 }}>
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
            {[
              { href: "/blog", label: "Blog" },
              { href: "/birth", label: "Get Started" },
              { href: "/privacy", label: "Privacy" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(245,240,232,0.35)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
