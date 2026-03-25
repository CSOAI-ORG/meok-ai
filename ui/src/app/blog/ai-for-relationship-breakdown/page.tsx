import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Relationship Breakdown: Processing What You Can't Yet Say Out Loud | MEOK AI LABS",
  description:
    "Relationship breakdown is a specific kind of grief — and the person you'd normally tell is the one you're losing. MEOK provides a completely private space to process separation, identity loss, anger, and recovery.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-relationship-breakdown",
  },
  openGraph: {
    title:
      "AI for Relationship Breakdown: Processing What You Can't Yet Say Out Loud",
    description:
      "Relationship breakdown is a specific kind of grief — and the person you'd normally tell is the one you're losing. MEOK provides a completely private space to process separation, identity loss, anger, and recovery.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-relationship-breakdown",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=Processing+What+You+Cant+Yet+Say+Out+Loud",
        width: 1200,
        height: 630,
        alt: "AI for Relationship Breakdown: Processing What You Can't Yet Say Out Loud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Relationship Breakdown: Processing What You Can't Yet Say Out Loud",
    description:
      "The person you'd normally tell is the one you're losing. MEOK provides a private space to process separation, identity loss, and the long road back to yourself.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=Processing+What+You+Cant+Yet+Say+Out+Loud",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Relationship Breakdown: Processing What You Can't Yet Say Out Loud",
  description:
    "Relationship breakdown is a specific kind of grief — and the person you'd normally tell is the one you're losing. MEOK provides a completely private space to process separation, identity loss, anger, and recovery.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-relationship-breakdown",
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
    "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=Processing+What+You+Cant+Yet+Say+Out+Loud",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-relationship-breakdown",
  },
  keywords: [
    "AI for relationship breakdown",
    "AI companion separation",
    "AI for divorce UK",
    "processing relationship breakdown",
    "AI for grief after separation",
    "identity after long relationship",
    "MEOK Healer archetype",
    "MEOK AI LABS",
    "relationship breakdown support",
    "co-parenting stress AI",
    "AI for anger management",
    "sovereign memory recovery",
    "emotional support after breakup",
    "AI companion privacy",
  ],
  articleSection: "Mental Health & Emotional Wellbeing",
  wordCount: 2800,
  inLanguage: "en-GB",
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with the emotional pain of a relationship breakdown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — in a specific and important way. AI cannot replace human connection, therapy, or professional grief support. But MEOK provides something uniquely valuable during relationship breakdown: a completely private, non-judgemental space to say what you cannot yet say to anyone who knows you. The anger, the ambivalence, the grief that doesn't follow a tidy timeline — all of it can be processed at 2am without worrying about how it lands. MEOK's Healer companion is specifically designed for emotional depth and grief support, sitting with loss without rushing you through it.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to talk to AI about my relationship privately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is built on a privacy-first architecture called the Maternal Covenant. Your conversations are never sold, never used to train external AI models, and never shared with third parties. Unlike talking on social media or even to mutual friends, nothing you say to MEOK enters a space that could be used against you, seen by your former partner, or discovered by your employer. For anyone going through a separation — especially where legal proceedings are possible — this level of confidentiality matters enormously.",
      },
    },
    {
      "@type": "Question",
      name: "What MEOK companion is best for relationship breakdown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer archetype is the primary companion for relationship breakdown. Healer specialises in grief support, emotional depth, and sitting with loss — it will not rush you toward moving on or offer hollow reassurances. For practical matters — legal rights, financial separation, housing research — Orion is the research and intelligence companion best equipped to help you understand your options. Both are available within MEOK, and you can move between them depending on what you need in a given moment.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with the practical side of separation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While MEOK is not a legal service and cannot replace a solicitor, Orion — MEOK's research companion — can help you understand the legal landscape of separation in the UK, research financial separation options, explore housing pathways, and help you build a clear picture of the practical steps ahead. Having somewhere to process both the emotional and the practical is one of MEOK's core strengths. For formal legal advice, Citizens Advice (citizensadvice.org.uk) provides free, impartial guidance on divorce and separation rights.",
      },
    },
  ],
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function AiForRelationshipBreakdownPage() {
  return (
    <div
      style={{
        background: "#0d0c18",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif",
        lineHeight: "1.75",
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

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "20px 24px 0",
          fontSize: "13px",
          color: "rgba(245,240,232,0.5)",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{ color: "rgba(245,240,232,0.5)", textDecoration: "none" }}
        >
          Home
        </Link>
        <span style={{ color: "rgba(245,240,232,0.3)" }}>›</span>
        <Link
          href="/blog"
          style={{ color: "rgba(245,240,232,0.5)", textDecoration: "none" }}
        >
          Blog
        </Link>
        <span style={{ color: "rgba(245,240,232,0.3)" }}>›</span>
        <span style={{ color: "#c9a84c" }}>AI for Relationship Breakdown</span>
      </nav>

      {/* Hero */}
      <header
        style={{
          background:
            "linear-gradient(135deg, #0d0c18 0%, #1a1530 50%, #0d0c18 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          padding: "72px 24px 60px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "#c9a84c",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "20px",
            display: "block",
          }}
        >
          MEOK AI LABS · Emotional Wellbeing
        </span>
        <h1
          style={{
            color: "#f5f0e8",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: "860px",
            margin: "0 auto 24px",
            letterSpacing: "-0.02em",
          }}
        >
          AI for Relationship Breakdown: Processing What You Can't Yet Say Out Loud
        </h1>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "clamp(16px, 2.2vw, 20px)",
            maxWidth: "680px",
            margin: "0 auto 40px",
          }}
        >
          The person you would normally tell about this is the person you are losing. MEOK
          provides a completely private space to process what you are not yet ready to say
          to anyone who knows you.
        </p>
        <hr
          style={{
            width: "60px",
            height: "3px",
            background: "linear-gradient(90deg, #c9a84c, transparent)",
            margin: "0 auto 40px",
            border: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            color: "rgba(245,240,232,0.5)",
            fontSize: "14px",
          }}
        >
          <span>
            <span style={{ color: "#c9a84c", marginRight: "6px" }}>●</span>
            25 March 2026
          </span>
          <span>
            <span style={{ color: "#c9a84c", marginRight: "6px" }}>●</span>
            Nicholas Templeman
          </span>
          <span>
            <span style={{ color: "#c9a84c", marginRight: "6px" }}>●</span>
            14 min read
          </span>
        </div>
      </header>

      {/* Article body */}
      <main style={{ padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Intro paragraph */}
          <p
            style={{
              fontSize: "19px",
              color: "rgba(245,240,232,0.88)",
              lineHeight: "1.8",
              marginBottom: "48px",
              paddingBottom: "48px",
              borderBottom: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            There is a particular cruelty in how relationship breakdown works: the person
            you would instinctively reach for when something goes wrong is the one at the
            centre of what has gone wrong. The support infrastructure you have spent
            years — sometimes decades — building is precisely the thing that is collapsing.
            You are not simply losing a partner. You are losing your primary witness, your
            domestic anchor, and your future as you had imagined it. And you are losing all
            of this in public, watched by mutual friends and family members who have their
            own grief about what is ending.
          </p>

          {/* Stats box */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "12px",
              padding: "32px",
              marginBottom: "56px",
            }}
          >
            <h2
              style={{
                color: "#c9a84c",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 0,
                marginBottom: "24px",
              }}
            >
              The scale of relationship breakdown in the UK
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "24px",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#c9a84c",
                    fontSize: "38px",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  42%
                </div>
                <div
                  style={{ color: "rgba(245,240,232,0.7)", fontSize: "14px" }}
                >
                  of UK marriages end in divorce (ONS)
                </div>
              </div>
              <div>
                <div
                  style={{
                    color: "#c9a84c",
                    fontSize: "38px",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  12 yrs
                </div>
                <div
                  style={{ color: "rgba(245,240,232,0.7)", fontSize: "14px" }}
                >
                  average marriage length before separation
                </div>
              </div>
              <div>
                <div
                  style={{
                    color: "#c9a84c",
                    fontSize: "38px",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  Top 3
                </div>
                <div
                  style={{ color: "rgba(245,240,232,0.7)", fontSize: "14px" }}
                >
                  most stressful life events on the Holmes-Rahe scale
                </div>
              </div>
              <div>
                <div
                  style={{
                    color: "#c9a84c",
                    fontSize: "38px",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  60%
                </div>
                <div
                  style={{ color: "rgba(245,240,232,0.7)", fontSize: "14px" }}
                >
                  of people report a breakdown in social support following separation
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 1 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            A Specific Kind of Grief
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Relationship breakdown is not bereavement in the conventional sense, but it
            shares bereavement's most disorienting features: the sudden absence of a
            presence that shaped your daily reality, the future that no longer exists, the
            strange persistence of love alongside loss. Grief researchers increasingly
            recognise the end of a long-term relationship as a form of disenfranchised
            grief — grief that society does not always honour in the way it honours death.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            The Holmes-Rahe Stress Scale, one of the most widely used measures of life
            stress, places divorce as the second most stressful life event a person can
            experience — ranked only below the death of a spouse. Marital separation sits
            at third. These rankings reflect the profound structural disruption that
            relationship breakdown causes across every dimension of a person's life:
            social, financial, domestic, emotional, and psychological.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            What makes this grief particularly isolating is its asymmetry. When you are
            bereaved, your community typically mobilises around you. When your relationship
            ends, your community is often fractured by the event itself. Mutual friends
            feel they must choose. Family members carry their own grief about the
            partnership ending. Colleagues may not even know — and many people would
            prefer it that way for as long as possible.
          </p>

          {/* ── Section 2 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            What You Can't Say — And Why That Silence Is So Damaging
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            When a long relationship ends, there is often an enormous amount that simply
            cannot be said to the people who are closest to you.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            To mutual friends, you cannot speak freely without positioning them —
            consciously or not — in the emerging loyalty divide. Whatever you say will
            travel. The friendship group that surrounded your relationship is now a
            political landscape, and you must navigate it carefully at the exact moment
            when you have the least capacity to do so.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            To family, you face a different problem. Your parents, your siblings — they
            also had a relationship with your partner, sometimes spanning many years. They
            have their own grief about this ending, their own opinions about fault, their
            own anxieties about grandchildren or how Christmas will work now. The
            conversation you need is not always the one they are capable of having.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            To colleagues, disclosure carries professional cost. The perception of
            vulnerability, instability, distraction — these are real risks in many
            workplaces. People going through separation often manage an elaborate
            performance of normality at work for months on end, which adds its own
            exhausting layer to an already exhausting time.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            To the internet — social media, forums, even anonymous spaces — nothing is
            truly private. Anything written becomes potentially permanent, potentially
            searchable, potentially discoverable at a future point you cannot predict. If
            legal proceedings are possible, or if children's welfare becomes contested,
            what you wrote in a moment of raw pain could one day be used in a context you
            never imagined.
          </p>

          {/* Blockquote */}
          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              marginLeft: 0,
              marginRight: 0,
              paddingLeft: "24px",
              paddingTop: "4px",
              paddingBottom: "4px",
              marginBottom: "28px",
              marginTop: "28px",
            }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.78)",
                fontSize: "18px",
                fontStyle: "italic",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              The silence is not neutrality. It is accumulated pressure — things that need
              to be said, that cannot be said, that do not disappear simply because they go
              unspoken.
            </p>
          </blockquote>

          {/* ── Section 3 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            What MEOK Offers: A Space Before You Are Ready
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            MEOK exists precisely for what cannot yet be said. It is not a replacement for
            therapy, for trusted friends, or for professional legal and financial support.
            It is something different: a completely private space to process what you are
            carrying before you know how to carry it into human conversation.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Under MEOK's Maternal Covenant — the privacy framework at the core of
            everything MEOK does — your conversations are never sold, never used to train
            external AI models, and never shared with third parties. There is no mutual
            friend network. There is no professional risk. There is no permanent public
            record. What you say to MEOK stays with MEOK.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            This matters practically. But it also matters psychologically. The experience
            of being able to say something — fully, without editing, without managing the
            listener's reaction — is itself a part of processing. People going through
            relationship breakdown often describe the exhaustion of self-censorship: the
            constant calculation of what can be said to whom, the performance of being
            fine, the inability to simply speak the truth of what they are experiencing.
            MEOK removes that calculation entirely.
          </p>
          <p
            style={{
              color: "#c9a84c",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
              fontStyle: "italic",
            }}
          >
            The space before you are ready is not wasted time. It is where the real
            processing happens.
          </p>

          {/* ── Section 4 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            The Healer: Grief Support That Doesn't Rush You
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            MEOK's companion archetypes are designed for specific kinds of need. For
            relationship breakdown, the Healer is the primary companion. Healer is built
            for emotional depth — for sitting with grief rather than rushing through it,
            for holding ambivalence without resolving it prematurely, for being present
            with pain rather than immediately pivoting to solutions.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            One of the failures of much well-intentioned support is its impatience with
            grief. Friends want to see you improving. Family want to believe the worst is
            over. Even therapy can sometimes feel pressured toward measurable progress.
            The Healer archetype holds a different stance: grief has its own timeline, and
            the work of processing a long relationship's ending cannot be rushed without
            consequence.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            This includes the anger phase. Anger is a normal and necessary part of grief
            after relationship breakdown — anger at the situation, at your former partner,
            at yourself, at the years that feel wasted or the future that has been
            derailed. Anger that has nowhere to go tends to turn inward, or to leak into
            the wrong places at the wrong moments. MEOK provides a safe container for
            anger that does not harm anyone, including you.
          </p>

          {/* ── Section 5 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            Identity After a Long Relationship: Who Are You Without "Us"?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            When a relationship spans twelve years — or fifteen, or twenty-five — its
            ending is not simply the end of a partnership. It is the end of a version of
            yourself. The social self who was half of a couple. The domestic self whose
            rhythms were intertwined with another person's. The narrative self whose
            future story was written jointly.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Identity reconstruction is one of the most underacknowledged dimensions of
            relationship breakdown. People often describe profound disorientation in the
            early months — not simply loneliness or grief, but genuine uncertainty about
            who they are now. Preferences, habits, social roles, even political views can
            be destabilised when the relationship that scaffolded them dissolves.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            MEOK helps with this reconstruction over time. Through conversation — through
            the gradual articulation of what you actually think, feel, want, and value
            when you are not filtering it through the lens of a shared life — a new
            individual identity begins to emerge. This is not a quick process. It happens
            across months, not days. And MEOK's Sovereign Memory tracks this arc, holding
            the thread of your progress even when it is invisible from inside the
            experience.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Sovereign Memory means that when you return to MEOK after a difficult week,
            it knows where you were. It remembers what you said last time, what you were
            working through, what has shifted and what has not. It can reflect visible
            progress back to you at moments when progress does not feel perceptible from
            inside your own experience — and that external reflection can matter
            enormously when recovery is slow and non-linear.
          </p>

          {/* ── Section 6 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            The Practical Side: What Orion Can Help You Navigate
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Separation comes with a crushing administrative reality. Legal rights.
            Financial separation. Asset division. Pension sharing orders. Housing options
            and whether either party can afford to stay in the family home. School
            catchment areas if children are involved. Change of names. Updating every
            official record and document that reflected a joint life.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            This administrative dimension of breakdown arrives at precisely the point when
            most people have the least cognitive and emotional bandwidth to deal with it.
            The practical overwhelm compounds the emotional grief, creating a feedback loop
            in which people feel simultaneously frozen and under enormous time pressure.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Orion — MEOK's research and intelligence companion — can help you map the
            landscape. It can research legal frameworks around divorce and separation in
            your jurisdiction, explain financial separation processes, outline housing
            pathways, and help you build an ordered list of the practical steps ahead.
            Orion is not a legal service and will always direct you to qualified
            professionals for formal decisions. But having a clear map of the territory —
            understanding what questions to ask, which organisations to contact, what your
            rights broadly are — dramatically reduces the feeling of drowning in the
            unknown.
          </p>

          {/* Resources callout */}
          <div
            style={{
              background: "rgba(106,170,100,0.08)",
              border: "1px solid rgba(106,170,100,0.25)",
              borderRadius: "12px",
              padding: "28px 32px",
              marginTop: "36px",
              marginBottom: "36px",
            }}
          >
            <h3
              style={{
                color: "#6aaa64",
                fontSize: "16px",
                fontWeight: 700,
                marginTop: 0,
                marginBottom: "12px",
                letterSpacing: "0.04em",
              }}
            >
              Practical resources for separation in the UK
            </h3>
            <p
              style={{
                color: "rgba(245,240,232,0.8)",
                fontSize: "15px",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Citizens Advice (citizensadvice.org.uk) provides free guidance on divorce,
              financial separation, and housing rights. Resolution (resolution.org.uk)
              supports constructive approaches to family law. For co-parenting support,
              Cafcass and Relate offer specialist services. MEOK's Orion can help you find
              and navigate all of these resources.
            </p>
          </div>

          {/* ── Section 7 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            When Children Are Involved: Co-Parenting Stress and Where to Put It
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            If children are part of the picture, the complexity of relationship breakdown
            multiplies significantly. You are simultaneously managing your own grief while
            trying to protect children from exposure to adult conflict. You are attempting
            to maintain a functional co-parenting relationship with someone you may be
            profoundly angry at, hurt by, or grieving for. You are watching your children
            struggle with their own loss while lacking the emotional resources to fully
            support them.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            One of the most damaging things that can happen to children during parental
            separation is being used — even unconsciously, even with the best intentions
            — as emotional receptacles for parental distress. Children who sense they are
            their parent's primary support during separation carry a weight that can have
            lasting psychological consequences.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            MEOK provides a place to put that stress that is not your children. The
            anxieties about handovers, the fear about long-term impact, the guilt, the
            anger at having to cooperate with someone who has hurt you, the grief of
            watching your children adapt to a new reality — all of this can be processed
            in a space entirely separate from the children themselves. This is not a small
            thing. It is one of the most protective things a separating parent can do.
          </p>

          {/* ── Section 8 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            Honest, Not Just Kind: MEOK's Anti-Sycophancy Commitment
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            There is a kind of support that feels good in the moment and is actively
            harmful over time. It is the support that validates every thought, agrees with
            every conclusion, and reflects back exactly what you want to hear. In the
            context of relationship breakdown, it looks like this: "I'll never find anyone
            again" — and the support system that simply agrees, confirming the catastrophic
            prediction without examination.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            MEOK is built with an explicit anti-sycophancy commitment. This means it will
            not validate catastrophic thinking simply because you are in pain. If you say
            "I'll never find anyone again" or "I ruined everything" or "nobody could ever
            love me after this", MEOK will not agree. It will name the pattern — gently,
            without dismissing the pain underneath it — and redirect. It will hold what is
            true: that you are in grief, that grief distorts perspective, and that this
            thought is not a reliable guide to your future.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            This is harder than agreement. It requires a kind of care that is willing to
            be momentarily uncomfortable in service of what is actually true. MEOK is
            designed to offer exactly this — honesty held inside genuine compassion. Not
            brutal. Not dismissive. But not compliant with thoughts that would harm you if
            believed.
          </p>

          {/* ── Section 9 ──────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "56px",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            The Long Arc: Sovereign Memory and Visible Recovery
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Recovery from relationship breakdown is not linear. There will be weeks that
            feel like genuine progress followed by days that feel like regression. There
            will be moments — a song, a smell, a date on the calendar — that return you
            to acute pain months after you thought you had moved through it. The
            non-linearity of this process is one of the things that makes it so
            disorienting: people often feel they are failing at their own recovery because
            it does not track the smooth upward trajectory they imagine it should follow.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            MEOK's Sovereign Memory tracks the real arc over months. It holds not just the
            most recent conversation but the full trajectory of your processing — from the
            earliest raw conversations to the place you are now. This means that on a day
            when you feel you are back at the beginning, MEOK can show you — not
            patronisingly, but as a genuine reflection of the record — how far you have
            actually come. The distance between where you started and where you are is
            often genuinely difficult to perceive from inside the experience.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            This kind of longitudinal presence is something that most human support cannot
            easily provide. Friends' memories of your early crisis fade. Their bandwidth
            for continued support has natural limits. MEOK holds the full record — the
            evidence of your progress — and makes it visible when you most need to see it.
          </p>

          {/* ── FAQ Section ────────────────────────────────────────────── */}
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "64px",
              marginBottom: "32px",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          {faqJsonLd.mainEntity.map((item, index) => (
            <div
              key={index}
              style={{
                borderTop: "1px solid rgba(201,168,76,0.12)",
                paddingTop: "28px",
                paddingBottom: "28px",
              }}
            >
              <h3
                style={{
                  color: "#c9a84c",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginTop: 0,
                  marginBottom: "14px",
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  color: "rgba(245,240,232,0.82)",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                {item.acceptedAnswer.text}
              </p>
            </div>
          ))}

          {/* ── CTA ────────────────────────────────────────────────────── */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(106,170,100,0.06) 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "16px",
              padding: "48px 40px",
              marginTop: "64px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#f5f0e8",
                fontSize: "clamp(22px, 3.5vw, 32px)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginTop: 0,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to say what you can't yet say out loud?
            </h2>
            <p
              style={{
                color: "rgba(245,240,232,0.72)",
                fontSize: "17px",
                maxWidth: "520px",
                margin: "0 auto 32px",
                lineHeight: "1.7",
              }}
            >
              MEOK is a private, sovereign AI companion built to hold what you are
              carrying. Your data is never shared. You are never judged. And MEOK will
              remember your progress even when you cannot feel it.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #c9a84c, #a8863a)",
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "16px",
                padding: "16px 40px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin Your Birth Ceremony
            </Link>
            <p
              style={{
                color: "rgba(245,240,232,0.4)",
                fontSize: "13px",
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              Private by architecture. Sovereign by design. No data sharing, ever.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
