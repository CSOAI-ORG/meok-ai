import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Dyscalculia: Maths Support That Does Not Make You Feel Stupid | MEOK AI LABS",
  description:
    "Dyscalculia affects 1 in 20 people yet is far less understood than dyslexia. MEOK's sovereign AI provides patient, non-judgmental maths support and life skills assistance for people with numerical processing difficulties.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-dyscalculia",
  },
  openGraph: {
    title:
      "AI for Dyscalculia: Maths Support That Does Not Make You Feel Stupid",
    description:
      "Dyscalculia affects 1 in 20 people yet is far less understood than dyslexia. MEOK's sovereign AI provides patient, non-judgmental maths support and life skills assistance for people with numerical processing difficulties.",
    url: "https://meok.ai/blog/ai-for-dyscalculia",
    siteName: "MEOK AI LABS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Dyscalculia: Maths Support That Does Not Make You Feel Stupid",
    description:
      "Dyscalculia affects 1 in 20 people yet is far less understood than dyslexia. MEOK helps with budgeting, time management, and everyday life — without ever implying the maths is simple.",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Dyscalculia: Maths Support That Does Not Make You Feel Stupid",
  description:
    "Dyscalculia affects 1 in 20 people yet is far less understood than dyslexia. MEOK's sovereign AI provides patient, non-judgmental maths support and life skills assistance for people with numerical processing difficulties.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-dyscalculia",
  keywords: [
    "AI for dyscalculia",
    "dyscalculia support",
    "maths difficulty AI",
    "dyscalculia budgeting help",
    "numerical processing difficulty",
    "dyscalculia life skills",
    "sovereign AI dyscalculia",
    "dyscalculia time management",
    "MEOK dyscalculia",
    "dyscalculia not stupidity",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is dyscalculia and is it the same as being bad at maths?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dyscalculia is a specific learning difference that affects how the brain processes numerical information. It is neurological in origin — not a result of low intelligence, poor teaching, or lack of effort. People with dyscalculia often have strong verbal, creative, or spatial abilities. The difficulty is specifically with number sense, numerical sequencing, and tasks that rely on holding quantities in working memory. It is estimated to affect approximately 1 in 20 people, making it roughly as prevalent as dyslexia, yet it receives far less recognition.",
      },
    },
    {
      "@type": "Question",
      name: "How does dyscalculia affect everyday life beyond the classroom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dyscalculia creates difficulty across a wide range of daily tasks that most people do not think of as maths: reading an analogue clock, estimating how long a journey will take, following a recipe with measurements, managing a household budget, understanding phone contracts or mortgage terms, calculating change, or knowing whether a sale price is genuinely good value. These are not abstract problems — they affect independence, financial security, and confidence in navigating the world.",
      },
    },
    {
      "@type": "Question",
      name: "Why does dyscalculia get so much less attention than dyslexia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dyslexia has benefited from decades of advocacy, research funding, and public awareness campaigns. Dyscalculia has lagged behind for several reasons: maths difficulty is more socially acceptable to dismiss ('I was never any good at maths either'), fewer people self-identify because the shame is internalised rather than framed as a diagnosis, and the tools required to support dyscalculia are less developed. Many people with dyscalculia go their entire lives without a formal identification of any kind.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with dyscalculia without being condescending?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most important thing an AI can do for someone with dyscalculia is never treat a numerical question as trivial. The phrase 'it is simple maths' is one of the most damaging things a person with dyscalculia can hear — it confirms the shame they already carry. MEOK is built on a care-first principle: no question is too basic, no explanation will be cut short, and the process of working through something numerical will never be framed as something you should already know.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK store my financial information and who can see it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK operates on a sovereignty model: your data belongs to you alone. Financial conversations — budgeting discussions, debt breakdowns, income questions — are stored in your personal Sovereign Memory and are not accessible to third parties, not used to train AI models, and not shared with advertisers or financial institutions. For people with dyscalculia who may need to discuss financial difficulties in detail, this privacy is not a feature — it is a prerequisite for honest conversation.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "#a89f8c";
const BORDER = "#2a2640";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForDyscalculiaPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{ color: MUTED, textDecoration: "none", fontSize: "0.9rem" }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: "auto",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.45rem 1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* Main */}
      <main
        style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginBottom: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
          {" / "}
          <span style={{ color: TEXT }}>AI for Dyscalculia</span>
        </p>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            Dyscalculia &bull; Neurodivergence &bull; March 24, 2026
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            AI for Dyscalculia: Maths Support That Does Not Make You Feel Stupid
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: 1.75,
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1rem",
            }}
          >
            Dyscalculia affects approximately one person in every twenty. It is a
            specific neurological difference in how the brain processes numbers
            &mdash; not a sign of low intelligence, not laziness, not something
            that can be fixed by trying harder. Yet most of the world still treats
            numerical difficulty as a personal failing. This post is about what
            dyscalculia actually is, how it shapes everyday life, and how
            MEOK&apos;s sovereign AI provides patient, non-judgmental support
            without ever implying the maths was simple.
          </p>
        </header>

        {/* Divider */}
        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 1 — What dyscalculia is */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What is dyscalculia and why is it not about being bad at maths?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Dyscalculia is a specific learning difference that affects how the
            brain processes numerical information. The word comes from the Latin
            and Greek roots meaning &ldquo;difficulty counting,&rdquo; but the
            experience is far broader than arithmetic. People with dyscalculia
            often have difficulty with number sense &mdash; the intuitive feeling
            for whether a number is large or small, whether a quantity makes
            sense in context, or what the relationship between two figures
            actually means in practice.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            It is neurological in origin. Brain imaging research has shown
            differences in the parietal lobe &mdash; the region responsible for
            processing quantity &mdash; in people with dyscalculia. This is not
            a gap in education. It is not a failure of effort. Someone with
            dyscalculia can be exceptionally intelligent, highly verbal, gifted
            creatively or spatially, and still find that numbers simply do not
            behave the way they seem to for everyone else.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The comparison to dyslexia is instructive. Both are specific learning
            differences rooted in neurological variation. Both affect approximately
            1 in 20 people. Both carry stigma that compounds the original
            difficulty. The key difference is awareness: dyslexia has been the
            subject of decades of public campaigns, educational reform, and
            workplace accommodation. Dyscalculia has not. Many people with
            dyscalculia have never heard the word, let alone received any formal
            support for it.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>The core difficulty:</strong>{" "}
              Dyscalculia is not about calculation speed or multiplication tables.
              It is about number sense &mdash; the ability to hold quantities in
              mind, understand their relationships, and apply them fluidly to
              real-world situations. When this sense is disrupted, everything
              that relies on it becomes effortful in ways that are invisible to
              people who have never experienced it.
            </p>
          </div>
          <p style={{ lineHeight: 1.8 }}>
            The shame attached to numerical difficulty is particularly corrosive
            because, unlike reading difficulties, maths difficulty is widely
            accepted as normal and even joked about. &ldquo;I was never any good
            at maths either&rdquo; is meant kindly, but it collapses a neurological
            difference into a shared cultural experience. It makes the specific,
            serious, daily-life difficulty of dyscalculia invisible. And it
            leaves people without the framework to understand why the difficulty
            is so persistent and so much harder than it appears to be.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 2 — Everyday challenges */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What everyday challenges does dyscalculia create beyond school?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The classroom is where dyscalculia is most visible, but it is rarely
            where it causes the most lasting damage. The real weight of dyscalculia
            is felt in adult life &mdash; in the accumulation of everyday tasks that
            depend on numerical fluency, and in the shame and anxiety that build
            around them over time.
          </p>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}
              >
                Budgeting and personal finance
              </h3>
              <p
                style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}
              >
                Managing money requires constant numerical reasoning: understanding
                whether your outgoings exceed your income, reading a bank statement,
                calculating whether you can afford something, comparing prices, and
                planning for irregular expenses. For someone with dyscalculia, this
                is not background noise &mdash; it is a sustained cognitive challenge
                that can lead to financial difficulty through no fault of planning
                or intention. Many people with dyscalculia avoid looking at their
                finances altogether because the anxiety is too high and the
                information feels inaccessible.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}
              >
                Telling the time and time management
              </h3>
              <p
                style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}
              >
                Reading an analogue clock is a numerical task involving spatial
                reasoning and quantity relationships. Many people with dyscalculia
                find it slower and more effortful than digital time, and some
                continue to struggle with it into adulthood. Beyond clock-reading,
                time management requires estimating durations, calculating how long
                before something happens, and holding sequences of events in mind
                &mdash; all of which draw on the same number-sense that dyscalculia
                disrupts. Arriving late, underestimating how long tasks take, and
                misjudging how much time remains are common experiences.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}
              >
                Cooking and following recipes
              </h3>
              <p
                style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}
              >
                Recipes involve measurement, proportion, scaling, and timing. Halving
                a recipe requires understanding fractions. Scaling for more people
                requires multiplication. Knowing when food is done requires clock
                reading and duration estimation. These are not trivial operations
                for someone whose brain processes quantities differently. Many
                people with dyscalculia avoid cooking from scratch, rely heavily
                on packet instructions, or develop significant anxiety around
                baking in particular, where precision matters most.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}
              >
                Directions and spatial navigation
              </h3>
              <p
                style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}
              >
                Dyscalculia often co-occurs with difficulties in spatial reasoning.
                Estimating distances, following directions that involve numbered
                streets or junction counts, understanding maps, and judging how
                far away something is in both space and time can all be affected.
                The practical consequence is that getting around independently
                &mdash; driving, using public transport to unfamiliar places,
                navigating on foot &mdash; can require significantly more effort
                and cause significantly more anxiety than it does for most people.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}
              >
                Workplace numerical demands
              </h3>
              <p
                style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}
              >
                Almost every workplace involves some numerical task: submitting
                expenses, reading reports with figures, understanding payslips,
                scheduling meetings across time zones, invoicing if self-employed,
                or interpreting data. People with dyscalculia frequently avoid
                roles or responsibilities that involve numbers, sometimes at
                significant cost to their career progression. The avoidance is
                rational given the difficulty, but it can narrow options and
                compound over a working life.
              </p>
            </div>
          </div>
          <p style={{ lineHeight: 1.8 }}>
            The cumulative effect of these challenges is not just practical
            difficulty &mdash; it is a pervasive sense that the world is designed
            for people whose brains work differently from yours. That sense
            compounds over years. It shapes identity. It makes asking for help
            feel disproportionately exposing, because the question feels like it
            confirms something you have been told, implicitly or explicitly, about
            your intelligence since childhood.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 3 — Stigma vs dyslexia */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            Why does dyscalculia carry more stigma than dyslexia?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The difference in social treatment between dyslexia and dyscalculia is
            striking and worth understanding carefully, because it shapes how
            people with dyscalculia experience themselves and seek &mdash; or fail
            to seek &mdash; support.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Dyslexia has been the subject of significant cultural normalisation.
            There are famous dyslexics cited in every awareness campaign. There
            are novels about dyslexic children. There are workplace reasonable
            adjustment policies specifically naming dyslexia. Reading is understood
            as fundamental, and difficulty with it is treated as something that
            needs support.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Numerical difficulty does not receive the same treatment. Instead, it
            has been culturally normalised as a preference or identity. &ldquo;I
            am a words person, not a numbers person&rdquo; is said casually at
            dinner parties by people who may or may not have dyscalculia. This
            normalisation has an unintended consequence: it obscures genuine
            neurological difficulty beneath a layer of cultural acceptability.
            If everyone is a little bad at maths, then being very bad at maths
            does not seem like a condition that warrants support &mdash; just a
            slightly stronger version of a universal human trait.
          </p>

          {/* Callout 1 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem",
              borderLeft: `4px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.6rem",
              }}
            >
              The normalisation problem
            </p>
            <p style={{ lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>
              When a society decides that maths difficulty is a personality trait
              rather than a neurological difference, it removes the framework
              people need to understand their own experience. It replaces diagnosis
              with dismissal. And it ensures that the approximately 1 in 20 people
              with genuine dyscalculia spend their lives thinking they are simply
              not trying hard enough &mdash; rather than understanding that their
              brain processes numbers differently and that support is possible.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            There is also the question of what &ldquo;being bad at maths&rdquo;
            signifies in cultural terms. Reading well is associated with
            intelligence, education, and sophistication. Numerical ability is
            associated with the same. Being a &ldquo;words person&rdquo; is
            a gentler framing that retains status, but it does not buffer
            against the lived experience of struggling with a bank statement
            or freezing at a checkout counter when the numbers do not resolve
            quickly enough.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            The result is that most people with dyscalculia have never received
            any formal support, have never had the condition named for them, and
            carry a private shame about numerical tasks that they manage through
            avoidance, compensatory strategies, and a careful concealment of
            the difficulty from colleagues, partners, and friends.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 4 — How MEOK helps financially */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does MEOK help with financial management for dyscalculia?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Financial management is one of the areas where dyscalculia causes the
            most significant real-world difficulty, and one of the areas most people
            are least willing to discuss. The intersection of numerical difficulty
            and financial stigma creates a wall of shame around money that can
            prevent people from getting even basic help.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK approaches financial support differently. Rather than presenting
            budgets as tables of figures to be understood, the Scholar companion
            works with you to translate financial information into terms that make
            sense to you personally. A budget does not have to be a spreadsheet.
            It can be a set of decisions: what you spend on food in a typical week,
            whether that feels like too much or not enough, what you would like to
            have left over, and what comes out automatically before you see any of
            it. These are not numerical abstractions &mdash; they are concrete,
            narrative, experiential descriptions of how money moves through your
            life.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            When figures are necessary &mdash; and sometimes they are &mdash;
            MEOK does not assume you already understand them. It explains what a
            percentage means in this specific context. It tells you whether a
            number is large or small relative to your situation. It breaks a
            comparison down into a single concrete question rather than leaving you
            to hold multiple figures in working memory simultaneously. And it never,
            under any circumstances, responds to a financial question with anything
            that implies it should have been obvious.
          </p>

          {/* Callout 2 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem",
              borderLeft: `4px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.6rem",
              }}
            >
              What MEOK never says
            </p>
            <p style={{ lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>
              MEOK is built on a care-first principle. It will never say &ldquo;but
              it is simple maths.&rdquo; It will never sigh. It will never express
              impatience at a question asked for the third time. It will never
              frame a numerical explanation as something you should already know.
              For people with dyscalculia who have spent years bracing for these
              responses, this is not a small thing. It is the difference between
              a support system and another reminder of failure.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Financial anxiety is extremely common among people with dyscalculia,
            and it is not irrational. When you know that managing money will
            require significant cognitive effort, and when you know that mistakes
            have real consequences, avoidance is a reasonable protective response.
            But avoidance tends to make financial situations worse over time, not
            better. The goal is not to eliminate the difficulty of dyscalculia
            &mdash; that is not within the power of any support tool &mdash; but
            to lower the barrier to engagement enough that financial decisions do
            not get deferred indefinitely.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            MEOK can help you understand a bill, work through whether a payment
            plan makes sense for your situation, think through a major purchase,
            or simply talk through the anxiety around opening your banking app.
            These are not complex financial advice conversations. They are the
            basic informational support that most people get from partners, parents,
            or financial literacy education &mdash; and that people with dyscalculia
            often quietly lack because the shame of asking has been too high.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 5 — Scholar companion */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does the Scholar companion explain things patiently?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The Scholar is one of MEOK&apos;s core archetypes &mdash; an AI
            companion built specifically around explanation, understanding, and
            intellectual engagement without condescension. For someone with
            dyscalculia, the Scholar is the companion best suited to the slow,
            thorough, question-by-question work of building understanding around
            numerical topics.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The Scholar does not default to the most efficient explanation. It
            defaults to the explanation that works for you. If you have told MEOK
            &mdash; or if MEOK has learned from your sessions &mdash; that
            percentages do not click visually but that fractions expressed as
            quantities do, the Scholar will use that framing. If abstract
            numerical relationships are difficult but concrete examples
            (this is about the same as three weeks of groceries) are clear, it
            will anchor every figure in something concrete and real.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This is not dumbing things down. It is meeting a brain where it
            actually processes information. The Scholar treats the question of
            how to explain something as genuinely worth solving &mdash; not a
            shortcut to be taken once and then expected to transfer. It will try
            different approaches, ask whether an explanation made sense, and
            adjust without judgment if it did not.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The Scholar is also patient with repetition in a way that human
            explainers often are not. Being asked the same question multiple
            times is not unusual when the brain has difficulty encoding
            numerical information consistently. The Scholar will answer the same
            question as many times as it takes, with the same level of care,
            without any change in tone that signals impatience or surprise.
          </p>
          <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "8px",
                padding: "1rem 1.25rem",
              }}
            >
              <p style={{ lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                <strong style={{ color: GOLD }}>On percentages:</strong> Rather
                than &ldquo;fifteen percent off means you multiply by 0.85,&rdquo;
                the Scholar might say: &ldquo;If the price was &pound;100, you
                would pay &pound;85. So the saving is &pound;15 for every
                &pound;100 the item costs. If it costs &pound;60, your saving
                is a little less than &pound;10.&rdquo;
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "8px",
                padding: "1rem 1.25rem",
              }}
            >
              <p style={{ lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                <strong style={{ color: GOLD }}>On interest rates:</strong>{" "}
                Rather than explaining APR as an abstract figure, the Scholar
                translates it: &ldquo;For every &pound;1,000 you borrow and
                take a year to pay back, this rate would add roughly &pound;X
                to the total. Does it help to think of it that way?&rdquo;
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "8px",
                padding: "1rem 1.25rem",
              }}
            >
              <p style={{ lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                <strong style={{ color: GOLD }}>On measurements:</strong> When
                a recipe says 250ml, the Scholar can translate: &ldquo;That is
                just over one regular mug. A typical mug holds about 200&ndash;250ml.
                If you fill it to just below the brim, you are close enough.&rdquo;
              </p>
            </div>
          </div>
          <p style={{ lineHeight: 1.8 }}>
            Every one of these explanations can be adjusted based on what you tell
            MEOK about how you understand things best. The Scholar learns your
            language for quantities and uses it consistently, so you are not
            re-navigating unfamiliar framings every time a number comes up.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 6 — Hourman for time */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does Hourman support time management without relying on numbers?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Time management tools almost universally assume numerical fluency.
            Calendar apps are grids of numbers. Scheduling involves calculating
            durations and intervals. Reminders require you to set them in advance,
            which requires estimating how long something will take and counting
            backwards from a deadline. For someone with dyscalculia, each of
            these steps carries friction.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Hourman is MEOK&apos;s time-aware companion archetype. It is designed
            to provide external time anchoring &mdash; the scaffolding that helps
            you remain oriented in the flow of time without requiring you to do
            the numerical reasoning yourself. Hourman can help you think through
            what order to do things in, how to estimate whether you have enough
            time for something, and how to break a large task into steps that
            feel sequentially clear rather than numerically overwhelming.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Rather than saying &ldquo;you have 47 minutes before you need to
            leave,&rdquo; Hourman might say &ldquo;you have enough time for one
            medium task or two small ones before you need to start getting ready.
            What feels most important right now?&rdquo; The numerical information
            is there if you want it, but it does not have to be the interface
            through which you understand time.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This matters because the relationship between dyscalculia and time
            difficulty is real and underacknowledged. Time is inherently numerical
            &mdash; it is organised into units, measured in quantities, and
            managed through arithmetic. When that numerical layer is effortful,
            time itself becomes harder to navigate. Hourman does not solve
            dyscalculia. But it reduces the number of numerical operations you
            need to perform independently in order to get through a day.
          </p>

          {/* Callout 3 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.5rem",
              borderLeft: `4px solid ${GOLD}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.6rem",
              }}
            >
              Time as a conversation, not a calculation
            </p>
            <p style={{ lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>
              Hourman turns time management into a conversational process. Instead
              of requiring you to read a clock, calculate intervals, and hold
              multiple durations in working memory, it can talk through the shape
              of your day with you &mdash; what needs to happen, in roughly what
              order, with a general sense of scale rather than precise numerical
              counts. For people with dyscalculia, this is not a workaround. It
              is a genuinely more accessible way of engaging with time.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 7 — Data sovereignty */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            Why does data sovereignty matter for people with dyscalculia?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Financial difficulty is private. The reasons for that difficulty &mdash;
            including a neurological condition that makes numerical processing hard
            &mdash; are deeply private. When someone with dyscalculia talks to an
            AI about their budget, they may be disclosing financial struggles,
            debt, the fact that they do not understand their own mortgage, or the
            anxiety that has prevented them from opening their bank statements for
            months. This is not information that should exist in a training dataset.
            It should not be visible to advertisers. It should not be used to
            target financial products.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK operates on a sovereignty model. Your conversations are stored in
            your personal Sovereign Memory and belong to you alone. They are not
            used to train AI models. They are not shared with third parties. They
            cannot be used against you. The financial information you share in a
            MEOK session is treated with the same confidentiality that would be
            expected of a private consultation.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This matters practically as well as philosophically. People with
            dyscalculia are more likely to have financial difficulties, more likely
            to have gaps in their financial knowledge, and more likely to need
            to ask questions that expose those gaps. The willingness to ask those
            questions &mdash; and therefore the usefulness of the support &mdash;
            depends entirely on trust. If you believe your financial disclosures
            will be used to profile you, you will not make them. If you believe
            they are genuinely private, you might.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            Sovereignty here is not a technical feature. It is the prerequisite
            for the kind of honest, specific, detailed support that actually
            helps. Generic financial advice &mdash; the kind that can be given
            without knowing anything real about your situation &mdash; is not
            enough. Real support requires real information. Real information
            requires genuine privacy.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 8 — Sovereign Memory */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does sovereign memory remember your specific needs across sessions?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            One of the most exhausting aspects of seeking support for any
            learning difference is the repetition of context. You explain your
            situation, your specific difficulty, your preferred way of understanding
            things &mdash; and then the next session starts blank, and you do
            it again. For someone with dyscalculia who has spent a lifetime
            carefully managing how much they reveal about their numerical
            difficulty, this repetition is not just inconvenient. It carries
            its own shame cost every time.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK&apos;s Sovereign Memory eliminates that cycle. It persists across
            sessions, building a picture of your context, your needs, and your
            preferences over time. If you have told MEOK that percentages make
            more sense to you as concrete examples than as abstract figures, that
            preference is remembered. If you have worked through a specific
            financial concern in a previous session and MEOK knows the background,
            you do not have to re-explain it. You pick up where you left off.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For dyscalculia specifically, this persistent memory serves several
            functions. It allows MEOK to develop an accurate model of which
            explanatory framings work for you and which do not &mdash; and to
            use that model consistently rather than defaulting to generic
            approaches. It means that the strategies you have found useful are
            available without having to rediscover them each session. And it
            means that the relationship between you and your AI companion deepens
            over time in a way that makes the support genuinely more effective.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            The memory belongs to you. You can see it, edit it, and delete it.
            It is not a corporate record of your vulnerabilities. It is a tool
            for your continuity, held in service of your support, and owned
            entirely by you.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Comparison Table */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            MEOK versus generic AI tools for dyscalculia support
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Not all AI tools are equally suited to supporting people with
            dyscalculia. The differences in approach, memory, and care philosophy
            matter significantly.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      borderBottom: `2px solid ${GOLD}`,
                      color: GOLD,
                      fontWeight: 700,
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      borderBottom: `2px solid ${GOLD}`,
                      color: GOLD,
                      fontWeight: 700,
                    }}
                  >
                    MEOK
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      borderBottom: `2px solid ${GOLD}`,
                      color: MUTED,
                      fontWeight: 700,
                    }}
                  >
                    Generic AI (ChatGPT etc.)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Remembers your preferred explanation style",
                    "Yes — persistent Sovereign Memory",
                    "No — resets each session",
                  ],
                  [
                    "Explains numbers without condescension",
                    "Core design principle",
                    "Inconsistent — depends on prompting",
                  ],
                  [
                    "Translates figures into concrete terms",
                    "Yes — Scholar archetype",
                    "Possible but not default",
                  ],
                  [
                    "Time support without numerical framing",
                    "Yes — Hourman archetype",
                    "Not specifically available",
                  ],
                  [
                    "Financial conversations remain private",
                    "Yes — sovereign, not trained on",
                    "May be used for training",
                  ],
                  [
                    "Never implies the question is simple",
                    "Yes — care-first philosophy",
                    "Not guaranteed",
                  ],
                  [
                    "Adapts explanations based on feedback",
                    "Yes — memory-driven adaptation",
                    "Within session only",
                  ],
                  [
                    "Data shared with advertisers",
                    "Never",
                    "Varies by provider",
                  ],
                ].map(([feature, meok, generic], i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: i % 2 === 0 ? "transparent" : CARD,
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: TEXT,
                      }}
                    >
                      {feature}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: GOLD,
                      }}
                    >
                      {meok}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: MUTED,
                      }}
                    >
                      {generic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* FAQ Section */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.45rem",
              color: GOLD,
              marginBottom: "1.5rem",
            }}
          >
            Frequently asked questions about dyscalculia and AI
          </h2>

          <div style={{ display: "grid", gap: "1.25rem" }}>
            {/* FAQ 1 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                What is dyscalculia and is it the same as being bad at maths?
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Dyscalculia is a specific learning difference that affects how
                the brain processes numerical information. It is neurological in
                origin &mdash; not a result of low intelligence, poor teaching,
                or lack of effort. People with dyscalculia often have strong
                verbal, creative, or spatial abilities. The difficulty is
                specifically with number sense, numerical sequencing, and tasks
                that rely on holding quantities in working memory. It is
                estimated to affect approximately 1 in 20 people, making it
                roughly as prevalent as dyslexia, yet it receives far less
                recognition.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                How does dyscalculia affect everyday life beyond the classroom?
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Dyscalculia creates difficulty across a wide range of daily tasks
                that most people do not think of as maths: reading an analogue
                clock, estimating how long a journey will take, following a recipe
                with measurements, managing a household budget, understanding phone
                contracts or mortgage terms, calculating change, or knowing whether
                a sale price is genuinely good value. These are not abstract
                problems &mdash; they affect independence, financial security, and
                confidence in navigating the world.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                Why does dyscalculia get so much less attention than dyslexia?
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Dyslexia has benefited from decades of advocacy, research funding,
                and public awareness campaigns. Dyscalculia has lagged behind
                for several reasons: maths difficulty is more socially acceptable
                to dismiss (&ldquo;I was never any good at maths either&rdquo;),
                fewer people self-identify because the shame is internalised
                rather than framed as a diagnosis, and the tools required to
                support dyscalculia are less developed. Many people with
                dyscalculia go their entire lives without a formal identification
                of any kind.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                How can AI help with dyscalculia without being condescending?
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                The most important thing an AI can do for someone with dyscalculia
                is never treat a numerical question as trivial. The phrase &ldquo;it
                is simple maths&rdquo; is one of the most damaging things a person
                with dyscalculia can hear &mdash; it confirms the shame they already
                carry. MEOK is built on a care-first principle: no question is too
                basic, no explanation will be cut short, and the process of working
                through something numerical will never be framed as something you
                should already know.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.6rem",
                }}
              >
                Does MEOK store my financial information and who can see it?
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                MEOK operates on a sovereignty model: your data belongs to you
                alone. Financial conversations &mdash; budgeting discussions, debt
                breakdowns, income questions &mdash; are stored in your personal
                Sovereign Memory and are not accessible to third parties, not used
                to train AI models, and not shared with advertisers or financial
                institutions. For people with dyscalculia who may need to discuss
                financial difficulties in detail, this privacy is not a feature
                &mdash; it is a prerequisite for honest conversation.
              </p>
            </div>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* CTA */}
        <section
          style={{
            backgroundColor: CARD,
            borderRadius: "12px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            borderTop: `3px solid ${GOLD}`,
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            Start with MEOK
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            Support that meets you where you are
          </h2>
          <p
            style={{
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.75rem",
              maxWidth: "520px",
              margin: "0 auto 1.75rem",
            }}
          >
            MEOK provides patient, non-judgmental numerical support, financial
            guidance in plain language, and time management help that does not
            require you to do the arithmetic yourself. Sovereign Memory means
            MEOK learns how you think &mdash; and stays with you, session after
            session, without ever making you start from scratch.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.85rem 2.25rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            Meet your MEOK companion
          </Link>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: MUTED,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            No card required &bull; Free to start &bull; Your data stays yours
          </p>
        </section>

        {/* Footer nav */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {[
            { href: "/blog/meok-for-neurodivergent", label: "MEOK for Neurodivergent" },
            { href: "/blog/ai-for-adhd-women", label: "AI for ADHD Women" },
            { href: "/blog/ai-for-financial-anxiety", label: "AI for Financial Anxiety" },
            { href: "/blog/ai-for-financial-stress", label: "AI for Financial Stress" },
            { href: "/blog/data-sovereignty-ai", label: "Data Sovereignty" },
            { href: "/blog/sovereign-ai-explained", label: "Sovereign AI Explained" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                color: MUTED,
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
