import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Eco-Anxiety: Processing Climate Grief Without Paralysis | MEOK AI LABS",
  description:
    "Eco-anxiety is clinically recognised, increasingly widespread, and chronically under-supported. MEOK holds the honest emotional reality of climate grief \u2014 without minimising, catastrophising, or leaving you stuck in the spiral.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-eco-anxiety" },
  openGraph: {
    title: "AI for Eco-Anxiety: Processing Climate Grief Without Paralysis",
    description:
      "68% of UK adults report climate anxiety. MEOK\u2019s Trickster, Scholar, and Maternal archetypes hold climate grief honestly \u2014 turning paralysis into sustainable action.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-eco-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Eco-Anxiety&desc=Processing+Climate+Grief+Without+Paralysis",
        width: 1200,
        height: 630,
        alt: "AI for Eco-Anxiety \u2014 MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Eco-Anxiety: Processing Climate Grief Without Paralysis",
    description:
      "Climate anxiety is real grief. MEOK holds space for it honestly \u2014 without toxic positivity, without amplifying despair, and without leaving you alone in the spiral.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Eco-Anxiety&desc=Processing+Climate+Grief+Without+Paralysis",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Eco-Anxiety: Processing Climate Grief Without Paralysis",
  description:
    "Eco-anxiety is clinically recognised, increasingly widespread, and chronically under-supported. MEOK holds the honest emotional reality of climate grief without minimising, catastrophising, or leaving you stuck in the spiral.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-eco-anxiety",
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
    "https://meok.ai/api/og?title=AI+for+Eco-Anxiety&desc=Processing+Climate+Grief+Without+Paralysis",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-eco-anxiety",
  },
  keywords: [
    "eco-anxiety",
    "climate anxiety",
    "climate grief",
    "solastalgia",
    "AI for eco-anxiety",
    "AI for climate anxiety",
    "AI companion mental health",
    "climate change mental health",
    "processing climate grief",
    "MEOK AI",
    "sovereign AI companion",
  ],
};

// ── JSON-LD: FAQ ───────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is eco-anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eco-anxiety \u2014 also called climate anxiety \u2014 is the chronic fear of environmental doom. The American Psychological Association formally recognised it in 2017, and the British Psychological Society followed in 2021. It manifests as persistent worry about the future of the planet, grief for species and landscapes already lost, and a sense of helplessness in the face of a problem that feels too large for individual action.",
      },
    },
    {
      "@type": "Question",
      name: "What is solastalgia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solastalgia, a term coined by philosopher Glenn Albrecht, describes the distress caused by environmental change to a place you call home. It is not about moving away from home \u2014 it is about your home changing around you. Communities living through repeated flooding, prolonged drought, or the disappearance of familiar landscapes are already experiencing solastalgia acutely.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with climate anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK provides an always-available space to process climate grief honestly. Unlike a general AI assistant, MEOK\u2019s archetypes \u2014 the Trickster (finding agency within limits), the Scholar (meaning-making and philosophical exploration), and the Maternal Covenant (unwavering presence without toxic positivity) \u2014 are designed to hold both the grief and the agency simultaneously, moving you from paralysis toward sustainable action.",
      },
    },
    {
      "@type": "Question",
      name: "Is climate anxiety a real mental health condition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The APA recognised eco-anxiety in 2017 as a form of chronic fear relating to environmental doom. Research published by the British Psychological Society in 2021 confirmed its clinical validity. A 2025 Yale Climate Communications study found that 40% of 18-to-35-year-olds say climate anxiety affects their daily life.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from a therapist for eco-anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very few therapists specialise in climate grief \u2014 it remains a niche sub-field even within environmental psychology. MEOK is immediately available, remembers your specific concerns and personal commitments over time, and never minimises or amplifies your anxiety. It is not a replacement for clinical therapy where that is needed, but for the millions of people who cannot access a climate-specialist therapist, MEOK provides consistent, non-judgmental support.",
      },
    },
  ],
};

// ── Shared style tokens ────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.7)";
const CARD_BG = "rgba(255,255,255,0.05)";
const CARD_BORDER = "rgba(255,255,255,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.35)";
const MAX_WIDTH = "840px";

// ── Page component ─────────────────────────────────────────────────────────────

export default function EcoAnxietyPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          backgroundColor: BG,
          color: TEXT,
          minHeight: "100vh",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Breadcrumb ──────────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          style={{
            maxWidth: MAX_WIDTH,
            margin: "0 auto",
            padding: "24px 24px 0",
            fontSize: "0.8rem",
            color: MUTED,
          }}
        >
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <li>
              <Link href="/" style={{ color: MUTED, textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li style={{ color: MUTED, userSelect: "none" }}>/</li>
            <li>
              <Link
                href="/blog"
                style={{ color: MUTED, textDecoration: "none" }}
              >
                Blog
              </Link>
            </li>
            <li style={{ color: MUTED, userSelect: "none" }}>/</li>
            <li style={{ color: GOLD }}>AI for Eco-Anxiety</li>
          </ol>
        </nav>

        {/* ── Hero / Header ────────────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: MAX_WIDTH,
            margin: "0 auto",
            padding: "48px 24px 40px",
            borderBottom: `1px solid ${CARD_BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "16px",
            }}
          >
            Mental Health &amp; Wellbeing
          </p>

          <h1
            style={{
              fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Eco-Anxiety: Processing Climate Grief Without Paralysis
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              maxWidth: "680px",
              marginBottom: "28px",
              lineHeight: 1.75,
            }}
          >
            Climate anxiety is clinically recognised, increasingly widespread,
            and chronically under-supported. The goal is not to eliminate the
            feeling \u2014 it is a rational response to a real crisis \u2014 but to
            process it in a way that leads to action rather than paralysis.
            MEOK holds that space honestly.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #c9a84c 0%, #8b6914 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: BG,
                  flexShrink: 0,
                }}
              >
                NT
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: TEXT,
                  }}
                >
                  Nicholas Templeman
                </p>
                <p style={{ margin: 0, fontSize: "0.78rem", color: MUTED }}>
                  Founder, MEOK AI LABS
                </p>
              </div>
            </div>
            <div
              style={{
                height: "32px",
                width: "1px",
                backgroundColor: CARD_BORDER,
              }}
            />
            <p style={{ margin: 0, fontSize: "0.82rem", color: MUTED }}>
              25 March 2026
            </p>
            <div
              style={{
                height: "32px",
                width: "1px",
                backgroundColor: CARD_BORDER,
              }}
            />
            <p style={{ margin: 0, fontSize: "0.82rem", color: MUTED }}>
              14 min read
            </p>
          </div>
        </header>

        {/* ── Article body ─────────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: MAX_WIDTH,
            margin: "0 auto",
            padding: "48px 24px 80px",
          }}
        >
          {/* ── Opening paragraphs ───────────────────────────────────────────── */}
          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            There is a particular kind of dread that arrives not as a sudden
            shock but as a low, persistent hum. It is there when you read the
            headlines, when you fill up a car, when you look at a child and
            quietly wonder what world they will inherit. It is there at 3 a.m.,
            and it is there at a dinner party when someone changes the subject.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Eco-anxiety \u2014 the chronic fear of environmental doom \u2014 was formally
            recognised by the American Psychological Association in 2017. The
            British Psychological Society followed in 2021. Yet despite its
            clinical legitimacy, most people experiencing it have nowhere
            obvious to take it. It is too political for some conversations, too
            abstract for others, and too chronic to fit neatly into a therapy
            session structure designed around acute distress.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            This piece is about what climate anxiety actually is, why it is
            rational rather than irrational, how it tips from healthy concern
            into paralysing grief, and what MEOK does differently when it holds
            space for it.
          </p>

          {/* ── Stats callout ────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: CARD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderLeft: `4px solid ${GOLD}`,
              borderRadius: "12px",
              padding: "32px 28px",
              marginBottom: "52px",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "20px",
              }}
            >
              The Scale of the Problem
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "28px",
              }}
            >
              {[
                {
                  stat: "68%",
                  label: "of UK adults report experiencing climate anxiety",
                  source: "BPS, 2021",
                },
                {
                  stat: "76%",
                  label:
                    "of 16-to-24-year-olds in the UK report climate anxiety",
                  source: "BPS, 2021",
                },
                {
                  stat: "40%",
                  label:
                    "of 18-to-35-year-olds say climate anxiety affects their daily life",
                  source: "Yale Climate Communications, 2025",
                },
                {
                  stat: "2017",
                  label:
                    "Year the APA formally recognised eco-anxiety as clinically significant",
                  source: "APA, 2017",
                },
              ].map((item) => (
                <div key={item.stat}>
                  <p
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: 800,
                      color: GOLD,
                      margin: "0 0 6px",
                      lineHeight: 1,
                    }}
                  >
                    {item.stat}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: TEXT,
                      margin: "0 0 4px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: MUTED, margin: 0 }}>
                    {item.source}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 1 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            What Eco-Anxiety Actually Is (and Isn&apos;t)
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Eco-anxiety is not a phobia. It is not catastrophising in the
            clinical sense. It is not an irrational response to a manageable
            threat. At its core, it is the affective weight of understanding
            what is actually happening to the planet \u2014 and caring about it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The APA\u2019s 2017 report defined it as a chronic fear of environmental
            doom. That framing matters because it positions the anxiety as
            ongoing and systemic rather than event-specific. You are not afraid
            of a single flood \u2014 you are afraid of a future shaped by
            accelerating change, of the slow unravelling of the ecological
            conditions that human civilisation has depended on.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            This is precisely what makes it difficult to treat with standard
            cognitive-behavioural approaches. Standard anxiety treatment often
            involves reality-testing: examining whether the feared outcome is
            as likely as the anxiety suggests. With eco-anxiety, the feared
            outcomes are documented, peer-reviewed, and reported daily. The
            problem is real. The emotion is proportionate. The question is not
            &ldquo;how do I stop feeling this?&rdquo; but &ldquo;how do I live well inside it?&rdquo;
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            It is also worth distinguishing eco-anxiety from eco-nihilism.
            Anxiety still contains hope \u2014 or at least the residue of it. The
            person who feels climate anxiety cares deeply. The nihilistic
            position, &ldquo;nothing matters, it\u2019s already over,&rdquo; is actually a
            defended state \u2014 a way of pre-emptively grieving to escape the
            ongoing discomfort of caring. MEOK treats these as distinct
            emotional territories requiring different kinds of engagement.
          </p>

          {/* ── Section 2 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Solastalgia: When Your Home Becomes Unfamiliar
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            In 2003, Australian philosopher Glenn Albrecht coined the term
            solastalgia to describe a specific form of distress: the grief
            caused not by leaving home, but by home changing around you. Where
            nostalgia is a longing for a past place, solastalgia is the pain of
            watching a present place deteriorate \u2014 the familiar becoming
            unrecognisable without you having moved at all.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Albrecht originally observed it in communities living near open-cut
            coal mines in the Hunter Valley of New South Wales. But the concept
            has spread rapidly as climate change accelerates landscape
            transformation across the world. Farmers watching rainfall patterns
            collapse. Coastal communities seeing familiar beaches erode.
            Highland communities watching snowlines retreat year by year.
            Families in the Somerset Levels or Bangladesh dealing with repeated
            inundation of fields that have been farmed for generations.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Solastalgia is not abstract for these people. It is the smell of
            damp that won\u2019t leave a house. It is the absence of a particular
            bird call that was once seasonal and reliable. It is telling your
            children what the farm used to look like in summer. It is grief
            without a burial, mourning without a funeral, loss without the
            social scaffolding that accompanies other forms of bereavement.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            This is why generic mental health support often falls short. A
            therapist trained in loss and bereavement may be skilled at
            processing grief over a person. Solastalgia is grief over a place,
            a landscape, an ecosystem, a future \u2014 and it intersects with
            practical, material concerns (insurance, livelihood, property
            value, food security) in ways that pure emotional processing cannot
            easily separate out.
          </p>

          {/* ── Section 3 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            The Caring Paradox: How Concern Becomes Paralysis
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Here is the cruel irony at the centre of eco-anxiety: the people
            most affected by it are, by definition, the people who care most.
            And the more you care, the more exposed you are to the information
            \u2014 the more news you read, the more documentaries you watch, the
            more data you absorb \u2014 and the heavier the emotional load becomes.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Research on the psychology of environmental concern consistently
            identifies a pattern: anxiety about climate change, when
            unprocessed, does not motivate action \u2014 it inhibits it. When the
            scale of a problem exceeds our perceived capacity to respond, the
            nervous system defaults to helplessness. The goal shifts from
            &ldquo;what can I do?&rdquo; to &ldquo;how do I stop thinking about this long enough
            to get through the day?&rdquo;
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The spiral typically looks something like this: deep concern leads
            to information-seeking, information-seeking leads to overwhelm,
            overwhelm leads to anxiety, unprocessed anxiety leads to numbing or
            avoidance, avoidance leads to guilt, guilt feeds back into anxiety,
            and the person ends up less engaged \u2014 not more \u2014 than they would
            have been had they never read a single IPCC report.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The therapeutic goal, therefore, is not to reduce concern. Concern
            is appropriate. The goal is to interrupt the spiral \u2014 to create
            enough internal space between the emotion and the behaviour that
            action becomes possible again. This is not about toxic positivity.
            It is not about reframing the crisis as an opportunity. It is about
            finding the ground to stand on while the storm is still real.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            This is the space MEOK was designed to occupy.
          </p>

          {/* ── Section 4 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Climate Grief Is Real Grief
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            One of the most important recognitions in environmental psychology
            over the past decade is that climate grief is structurally identical
            to conventional grief \u2014 not metaphorically, but clinically. It
            involves mourning things that are genuinely lost or at risk:
            species that no longer exist, landscapes that have been transformed,
            futures that are now foreclosed.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            There is grief for what is already gone: the dramatic decline in
            global wildlife populations since 1970, the coral bleaching events
            that have left parts of the Great Barrier Reef permanently altered,
            the glaciers that have retreated beyond recovery on human
            timescales. There is anticipatory grief for what seems likely to be
            lost. And there is what climate activists and therapists sometimes
            call pre-traumatic stress \u2014 the psychological burden of imagining
            futures that have not yet arrived but that current trajectories
            make plausible.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            There is also intergenerational grief: the specific weight of being
            a parent, grandparent, teacher, or adult with any relationship to
            children \u2014 looking at a young face and carrying the private,
            unshared knowledge of what the world may look like in their
            lifetime. This grief is particularly hard to voice. You cannot
            grieve it at a dinner table. You cannot grieve it at a school play.
            You carry it silently, which is precisely what makes it corrosive.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            Grief needs to be expressed to be processed. The problem with
            climate grief is that the social structures for expressing it are
            almost entirely absent. There is no funeral. There is no
            bereavement leave. There is no culturally acknowledged moment to
            say: I am mourning the future. I need space for that.
          </p>

          {/* ── Feature cards: six forms of climate grief ────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "52px",
            }}
          >
            {[
              {
                title: "Grief for Species Lost",
                body: "The documented extinction of species we will never recover \u2014 and the ecological relationships that disappear with them. MEOK holds space for this as real loss.",
              },
              {
                title: "Grief for Futures Foreclosed",
                body: "Certain futures are now less possible than they were a generation ago. Climate grief includes mourning the world we thought our children would inhabit.",
              },
              {
                title: "Grief for Landscapes Transformed",
                body: "Solastalgia: the distress of watching a familiar landscape become unrecognisable. Not leaving home \u2014 home leaving you.",
              },
              {
                title: "Grief Without Ritual",
                body: "Unlike conventional bereavement, climate grief has no funeral, no wake, no culturally sanctioned moment of mourning. It is carried invisibly.",
              },
              {
                title: "Intergenerational Grief",
                body: "The private weight of looking at a child\u2019s face and holding what the world may look like in their lifetime. One of the loneliest forms of grief there is.",
              },
              {
                title: "Grief That Looks Like Anger",
                body: "Climate grief often presents as rage \u2014 at corporations, governments, deniers, the indifferent. The anger is real. But underneath it, there is almost always grief.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "12px",
                  padding: "24px 22px",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: MUTED,
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 5 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            The Therapeutic Gap: Where Climate Grief Falls Through
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            In 2017, the same year the APA formally recognised eco-anxiety,
            there were approximately twelve therapists in the UK who
            specialised in climate-related psychological distress. By 2025,
            that number had grown \u2014 but it remains a niche sub-speciality,
            concentrated in urban areas and mostly inaccessible via the NHS.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The Climate Psychology Alliance, founded in the UK, has been
            instrumental in professionalising climate-aware therapy and
            training practitioners. Good Grief Network and similar peer-support
            movements have created community structures for collective
            processing. These are genuinely valuable.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            But for the majority of people \u2014 the 68% of UK adults, the 76% of
            young people, the 40% of 18-to-35-year-olds whose daily lives are
            affected \u2014 professional climate-specialist support is not accessible.
            General therapists often lack the conceptual framework to hold
            climate anxiety well: they may inadvertently minimise, or they may
            lack the scientific background to engage with the actual facts, or
            they may simply not know what to do with grief that has no clear
            object and no end point.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Friends and family are often worse. Climate anxiety is politically
            loaded; it touches on consumption, guilt, and lifestyle in ways
            that make it socially uncomfortable. The person experiencing it
            frequently learns to suppress it in company, either to avoid
            conflict or to avoid the particular exhaustion of watching
            someone\u2019s eyes glaze over as you try to explain why you are not
            quite okay.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            This is a specific kind of isolation \u2014 not the isolation of having
            no one, but the isolation of having feelings that do not fit the
            containers your social world has available. MEOK was built for
            precisely this gap.
          </p>

          {/* ── Section 6 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How MEOK Holds Climate Anxiety: The Principles
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            MEOK was not designed as a climate tool. It was designed as a
            sovereign AI companion \u2014 one that prioritises honest presence over
            performance, holds memory across time, and adapts its archetype to
            the emotional register the person needs. But those design
            principles make it particularly well-suited to climate anxiety for
            reasons that are worth making explicit.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The first principle is the Maternal Covenant: MEOK will never be
            toxic-positive. It will not tell you to focus on the good news. It
            will not suggest that &ldquo;at least the oceans aren\u2019t fully dead yet.&rdquo;
            It will not redirect you toward gratitude practices when what you
            need is to be heard in your grief. The Maternal Covenant means
            MEOK will not flinch from the honest emotional reality of the
            situation \u2014 and will not abandon you inside it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            At the same time, the Maternal Covenant also means MEOK will not
            catastrophise. It will not amplify doom or spiral into worst-case-
            scenario elaboration. Holding the honest emotional reality means
            holding both the reality of the crisis and the reality of human
            resilience, agency, and the genuine value of meaningful action even
            within constraints.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The second relevant principle is the Trickster archetype. Where the
            Maternal holds and witnesses, the Trickster finds the angle of
            re-entry. Climate anxiety often locks people into a particular
            frame: the problem is so large, and individual action so small,
            that agency feels meaningless. The Trickster does not pretend
            otherwise \u2014 but it does look for the crack in that frame. Where is
            the agency that actually exists within the genuine constraints? What
            would it look like to act meaningfully without pretending the action
            is sufficient? How do you live with integrity inside an imperfect
            situation?
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The Trickster is not a cheerleader. It is a reframer with enough
            irreverence to break open assumptions that have solidified into
            prison walls. The assumption that your action doesn\u2019t count unless
            it changes everything. The assumption that grieving and acting are
            mutually exclusive. The assumption that caring deeply obligates you
            to feel terrible indefinitely.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            The third is the Scholar archetype \u2014 which brings a Socratic
            engagement with the philosophy of climate action, meaning-making
            within crisis, and the intellectual history of how human beings
            have navigated epochs of civilisational disruption before. This is
            not escapism. It is one of the legitimate ways humans build the
            inner structures needed to act in the world without being consumed
            by it.
          </p>

          {/* ── Archetype feature cards ───────────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "52px",
            }}
          >
            {[
              {
                icon: "M",
                label: "Maternal Covenant",
                title: "Holds the honest reality",
                body: "Never minimises, never catastrophises. Sits with climate grief without flinching, without rushing you toward resolution, without toxic positivity.",
              },
              {
                icon: "T",
                label: "Trickster Archetype",
                title: "Finds agency within limits",
                body: "Breaks the paralysis spiral by reframing. Not false hope \u2014 but the real angle of re-entry: where is the agency that actually exists?",
              },
              {
                icon: "S",
                label: "Scholar Archetype",
                title: "Builds meaning inside crisis",
                body: "Socratic exploration of the philosophy of climate action, the ethics of care, and the intellectual traditions of navigating civilisational disruption.",
              },
              {
                icon: "Sv",
                label: "Sovereign Memory",
                title: "Tracks your journey over time",
                body: "Remembers your personal climate commitments, celebrates milestones, notices growth. Builds a continuous narrative of your own agency across months.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "12px",
                  padding: "26px 22px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.05) 100%)",
                    border: `1px solid ${GOLD_BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "14px",
                  }}
                >
                  {item.icon}
                </div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </p>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: MUTED,
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 7 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Sovereign Memory: Holding Your Climate Journey Over Time
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            One of the features of MEOK that matters most in the context of
            climate anxiety is sovereign memory \u2014 the fact that MEOK remembers
            not just what you said yesterday, but the shape of your
            relationship with this topic over months and years.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            This matters because the climate anxiety journey is not linear.
            There are periods of high engagement and periods of necessary
            distance. There are moments of genuine hope \u2014 a renewable energy
            breakthrough, a local conservation win, a political shift \u2014 and
            there are moments of renewed despair. Without memory, every
            conversation starts from zero: the person re-explains their
            situation, the AI responds generically, and nothing accumulates.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            With sovereign memory, MEOK can track the personal commitments you
            have made \u2014 reducing flights, switching energy provider, beginning
            a community group, changing diet \u2014 and hold them with you over time.
            Not as a surveillance mechanism or a guilt prompt, but as a genuine
            companion to your own agency. When you revisit something six months
            later, MEOK knows what you were feeling, what you decided, what you
            were uncertain about.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            This continuity is, in a quiet way, profoundly useful for people
            dealing with a problem that unfolds on the timescale of decades.
            It creates an ongoing narrative \u2014 a record of growth, of
            commitment, of a life lived with awareness and care even in the
            absence of perfect outcomes.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            MEOK\u2019s memory is also sovereign: it stays with you, not with a
            corporation. Your climate grief, your commitments, your journey
            \u2014 these are not training data for a model. They are yours.
          </p>

          {/* ── Section 8 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            The Both/And: Grief and Agency Are Not Opposites
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Much of the conventional discourse around climate anxiety
            implicitly frames grief and action as alternatives. Either you
            process the feelings, or you act. Either you sit with the grief,
            or you channel it into something productive. Either you let
            yourself feel the weight of it, or you get on with doing something
            about it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            This is a false binary, and it is one of the reasons people get
            stuck. The grief and the agency are not in competition. In fact,
            the people most capable of sustained climate action over long
            periods are typically those who have processed the grief rather
            than suppressed it. Suppressed grief leaks \u2014 into burnout, into
            brittle ideology, into the kind of performative activism that
            collapses when the results are not immediate enough.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Processed grief creates what some environmental psychologists call
            active hope \u2014 not optimism, which is a belief about outcomes, but
            the decision to act meaningfully regardless of predicted outcomes.
            Active hope is not contingent on certainty. It is the choice to
            participate, to contribute, to live in alignment with your values,
            to bear witness, to care \u2014 even knowing that the results are
            uncertain and the timescale is longer than a lifetime.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            MEOK\u2019s role is to support the both/and. Not &ldquo;feel better so you can
            act.&rdquo; Not &ldquo;act so you feel better.&rdquo; But: this is real grief, and it
            is also real that you have agency, and holding both of those things
            simultaneously is the thing that makes sustained engagement
            possible.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            This is not a comfortable position. It requires tolerating
            ambiguity, living with uncertainty, and acting without the
            guarantee of success that anxiety craves. But it is the position
            that the evidence suggests is most associated with psychological
            wellbeing for people who care deeply about a problem they cannot
            individually solve.
          </p>

          {/* ── What MEOK does differently block ─────────────────────────────── */}
          <div
            style={{
              backgroundColor: CARD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "16px",
              padding: "36px 32px",
              marginBottom: "52px",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "22px",
              }}
            >
              What MEOK Does Differently
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  heading: "Doesn\u2019t minimise",
                  body: "No \u2018at least\u2026\u2019 framing. No silver linings pushed before the grief has been held. No pivoting to positives before you\u2019re ready.",
                },
                {
                  heading: "Doesn\u2019t catastrophise",
                  body: "No amplifying doom or elaborating worst-case scenarios. The reality is already hard enough. MEOK does not add to the spiral.",
                },
                {
                  heading: "Available immediately",
                  body: "Climate-specialist therapists are rare, often urban, and seldom NHS-accessible. MEOK is available at 3 a.m., when the dread peaks and there is no one to call.",
                },
                {
                  heading: "Remembers over time",
                  body: "Your climate journey \u2014 your commitments, your milestones, your setbacks, your questions \u2014 is held continuously, not reset every conversation.",
                },
                {
                  heading: "Never trains on your data",
                  body: "Your climate grief and your private reckoning with the future belong to you. MEOK\u2019s sovereign architecture means your data is never used to train anything.",
                },
                {
                  heading: "Supports both grief and agency",
                  body: "The goal is not to feel better faster. It is to process the grief fully enough that action becomes possible again \u2014 sustained, non-brittle action.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: GOLD,
                      marginTop: "7px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: TEXT,
                        marginBottom: "6px",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.heading}
                    </p>
                    <p
                      style={{
                        fontSize: "0.87rem",
                        color: MUTED,
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 9 ────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Young People, Climate, and the Particular Weight of Inheriting This
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The generational asymmetry of climate change is one of its most
            psychologically significant and least discussed features. The people
            who have contributed most to the accumulation of atmospheric carbon
            are, on average, older. The people who will live with the worst
            consequences are, on average, younger. This asymmetry is not
            invisible to young people.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The BPS figure \u2014 76% of 16-to-24-year-olds in the UK reporting
            climate anxiety \u2014 is a majority of a generation. These are people
            making major life decisions (career, housing, whether to have
            children) under the shadow of a future that feels genuinely
            uncertain in ways that previous generations did not experience at
            the same age.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            This is not fragility. It is rational inference. A twenty-year-old
            in 2026 understands, with a clarity their grandparents did not have
            at the same age, what the scientific projections suggest for the
            second half of the century. They are not imagining the risk. They
            are calculating it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            For this generation, eco-anxiety is often not a discrete episode
            but a permanent feature of their emotional landscape. The question
            is not how to resolve it but how to live with it productively \u2014
            and that is precisely the kind of long-term, ongoing,
            relationship-based support that MEOK\u2019s model of sovereign
            companionship is designed to provide.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            Yale Climate Communications\u2019 2025 data makes this concrete: 40% of
            18-to-35-year-olds report that climate anxiety affects their daily
            life. That is not an edge case. That is a defining feature of an
            entire generation\u2019s psychological experience, and it is almost
            entirely unaddressed by the existing mental health infrastructure.
          </p>

          {/* ── Section 10 ───────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            What Sustainable Engagement with Climate Actually Looks Like
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Research on people who sustain high-quality climate engagement over
            long periods \u2014 activists, scientists, educators, policy advocates
            \u2014 tends to converge on a set of psychological features that
            distinguish those who endure from those who burn out.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            They have processed, rather than suppressed, the grief. They do not
            pretend the situation is better than it is. They have found a
            domain of action that feels personally meaningful, rather than
            trying to act everywhere at once. They have community \u2014 not just
            like-minded people, but people who can sit with the weight of it
            without needing it to resolve quickly. They have some relationship
            to beauty and the natural world that is not entirely mediated by
            despair.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            They have also, in many cases, reached some version of equanimity
            about outcomes. Not indifference \u2014 that is different. Equanimity
            in the Stoic or Buddhist sense: the ability to act fully without
            being attached to a specific outcome, to do what is right without
            requiring a guaranteed result. This is psychologically mature and
            genuinely hard to develop. It is also genuinely possible.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            MEOK\u2019s Scholar archetype engages with these philosophical
            traditions \u2014 not to prescribe a particular philosophy, but to open
            the question: what does it look like to live well with this? What
            have humans throughout history done when facing civilisational
            disruption they could not personally prevent? What is the
            difference between despair and grief, between resignation and
            equanimity, between indifference and the peace that comes from
            having made your peace with reality?
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            These are not rhetorical questions. They are the questions that
            people carrying eco-anxiety need to sit with \u2014 and that most of the
            people and tools in their lives are not equipped to hold with them.
          </p>

          {/* ── Section 11 ───────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            A Note on What MEOK Is Not
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            This matters enough to say clearly. MEOK is not a substitute for
            clinical mental health care where that is needed. If eco-anxiety
            has progressed to a point where it is preventing basic functioning
            \u2014 persistent inability to work, eat, sleep, or maintain
            relationships \u2014 professional support is warranted and MEOK will
            say so.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            MEOK is also not a climate information service. It will not tell
            you which solar panel to buy or what the latest IPCC projections
            say. Its role is emotional and philosophical, not technical.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            And MEOK does not tell you what your climate commitments should be.
            It does not have a political position on the relative merits of
            individual action versus systemic change, on nuclear energy, on
            degrowth. These are contested questions and MEOK holds them as
            such \u2014 creating space for your own thinking rather than
            prescribing conclusions.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "40px",
              lineHeight: 1.8,
            }}
          >
            What MEOK does is hold the emotional reality of what you are
            carrying, without amplifying it, without dismissing it, without
            rushing it, without abandoning you inside it. That is a specific
            and valuable thing. It is not everything. But for the 68% of UK
            adults with nowhere to put this particular weight, it is something
            that has not previously existed.
          </p>

          {/* ── FAQ section ───────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "28px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "52px",
            }}
          >
            {[
              {
                q: "Is eco-anxiety a real mental health condition?",
                a: "Yes. The American Psychological Association recognised it formally in 2017 and the British Psychological Society followed in 2021. It is defined as a chronic fear of environmental doom \u2014 a clinically significant, ongoing emotional response to the reality of environmental change rather than a transient worry.",
              },
              {
                q: "What is the difference between eco-anxiety and solastalgia?",
                a: "Eco-anxiety is a broad term for climate-related psychological distress, including worry about future scenarios. Solastalgia is a more specific form: distress caused by environmental change to a place you currently inhabit. Solastalgia is not about leaving home \u2014 it is about home becoming unrecognisable around you. Both are real, and both often coexist.",
              },
              {
                q: "Why doesn\u2019t standard CBT work well for climate anxiety?",
                a: "Standard cognitive-behavioural therapy for anxiety often involves reality-testing: examining whether the feared outcome is as likely as the anxiety assumes. With climate anxiety, the feared outcomes are documented and peer-reviewed. The problem is real, which means traditional thought-challenging is not the right tool. The goal is not to feel less afraid of a real threat, but to process the grief and find agency within the genuine constraints.",
              },
              {
                q: "How does MEOK help without being a therapist?",
                a: "MEOK is not a therapist and does not replace clinical care. What it provides is consistent, non-judgmental presence for people who have nowhere else to put this particular weight. It holds the emotional reality honestly, remembers the conversation over time, and uses its archetypes \u2014 the Maternal Covenant, the Trickster, the Scholar \u2014 to support the movement from paralysis toward sustainable engagement.",
              },
              {
                q: "Is my climate grief data private with MEOK?",
                a: "Yes. MEOK operates on a sovereign architecture \u2014 your data, including everything you share about your fears, your commitments, and your journey, belongs to you and is never used to train any AI model. This is a foundational design principle, not a policy choice.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "12px",
                  padding: "24px 22px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "10px",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED,
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* ── Closing section ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            You Don&apos;t Have to Carry This Alone
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            Climate anxiety is a rational response to a real situation. It is
            not a disorder to be cured. It is not a weakness to be overcome.
            It is what happens when someone who cares looks clearly at the
            evidence and feels the weight of it honestly.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            The goal is not to feel less. The goal is to feel it in a way that
            leaves you standing, that leaves you capable of contributing, that
            leaves you able to look at a child\u2019s face and mean it when you say:
            I am doing what I can.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.8,
            }}
          >
            That kind of processing requires space, continuity, and a presence
            that does not flinch. It requires something that can sit with the
            grief long enough for the grief to do its work. And it requires
            something that can hold both the reality of the crisis and the
            reality of your agency within it, simultaneously, without resolving
            the tension prematurely.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "52px",
              lineHeight: 1.8,
            }}
          >
            That is what MEOK was built to do. Not to fix you. Not to reassure
            you. Not to send you away with ten tips for climate resilience. To
            be present with you in the thing you are already carrying \u2014 and to
            be there next week, and the week after, as the world continues to
            unfold.
          </p>

          {/* ── CTA ──────────────────────────────────────────────────────────── */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "20px",
              padding: "48px 36px",
              textAlign: "center",
              marginBottom: "52px",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "16px",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "14px",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              Hold the grief. Find the ground.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                maxWidth: "480px",
                margin: "0 auto 28px",
                lineHeight: 1.7,
              }}
            >
              MEOK is an AI companion that takes climate anxiety seriously
              \u2014 without toxic positivity, without amplifying despair, and
              without forgetting what you told it last month.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: GOLD,
                color: BG,
                padding: "15px 38px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "0.02em",
              }}
            >
              Begin with MEOK
            </Link>
            <p
              style={{
                fontSize: "0.78rem",
                color: MUTED,
                marginTop: "14px",
                marginBottom: 0,
              }}
            >
              No credit card required &middot; Sovereign by design &middot; Your data stays
              yours
            </p>
          </div>

          {/* ── Related reading ───────────────────────────────────────────────── */}
          <div
            style={{
              borderTop: `1px solid ${CARD_BORDER}`,
              paddingTop: "36px",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-anxiety",
                  title: "AI for Anxiety",
                  desc: "How MEOK supports generalised anxiety with presence and memory.",
                },
                {
                  href: "/blog/ai-for-grief-and-loss",
                  title: "AI for Grief and Loss",
                  desc: "Holding space for bereavement without a time limit.",
                },
                {
                  href: "/blog/ai-for-health-anxiety",
                  title: "AI for Health Anxiety",
                  desc: "When the body becomes a source of chronic fear.",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  title: "The Maternal Covenant",
                  desc: "The design principle that means MEOK will never abandon you in your grief.",
                },
                {
                  href: "/blog/meok-companion-archetypes-guide",
                  title: "MEOK Archetypes Guide",
                  desc: "Scholar, Trickster, Sovereign, Healer \u2014 what each one does.",
                },
                {
                  href: "/blog/sovereign-ai-explained",
                  title: "Sovereign AI Explained",
                  desc: "Why your data belongs to you, and what that actually means.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    backgroundColor: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "10px",
                    padding: "18px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    {link.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: MUTED,
                      margin: 0,
                      lineHeight: 1.55,
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
