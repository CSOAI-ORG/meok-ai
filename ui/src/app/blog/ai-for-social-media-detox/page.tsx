import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Social Media Detox: Breaking the Scroll Without Breaking Your Social Life | MEOK AI LABS",
  description:
    "Social media keeps 210 million people globally in addictive loops by design. This guide covers the neuroscience of the scroll trap, why most detox attempts fail, and how MEOK\u2019s care-based AI helps you break the habit without losing real human connection.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-social-media-detox" },
  openGraph: {
    title: "AI for Social Media Detox: Breaking the Scroll Without Breaking Your Social Life",
    description:
      "210 million people worldwide are addicted to social media. Dopamine loops, FOMO, social comparison \u2014 and how sovereign AI like MEOK breaks the cycle without replacing one screen addiction with another.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-social-media-detox",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Social+Media+Detox%3A+Breaking+the+Scroll+Without+Breaking+Your+Social+Life&desc=Sovereign+AI+as+the+antidote+to+addictive+platforms",
        width: 1200,
        height: 630,
        alt: "AI for Social Media Detox: Breaking the Scroll Without Breaking Your Social Life | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Social Media Detox: Breaking the Scroll Without Breaking Your Social Life",
    description:
      "How sovereign AI helps you detox from social media without losing real human connection. From MEOK AI LABS.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Social+Media+Detox%3A+Breaking+the+Scroll+Without+Breaking+Your+Social+Life&desc=Sovereign+AI+as+the+antidote+to+addictive+platforms",
    ],
  },
}

// ── JSON-LD: Article ─────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Social Media Detox: Breaking the Scroll Without Breaking Your Social Life",
  description:
    "Social media platforms have engineered a global addiction crisis. With 210 million people addicted worldwide and average daily usage hitting 2.5 hours, the dopamine loops, FOMO mechanics, and social comparison engines are working exactly as designed. This guide explores the neuroscience behind the trap, how MEOK\u2019s MEOK archetypes — Pioneer, Trickster, and Sovereign Memory — support a genuine detox, and a practical 7-day plan to break the scroll without losing your real social life.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-social-media-detox",
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
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-social-media-detox",
  },
  keywords: [
    "AI for social media detox",
    "social media detox plan",
    "social media addiction statistics",
    "dopamine loop social media",
    "how to stop scrolling",
    "FOMO social media",
    "sovereign AI companion",
    "MEOK AI LABS",
    "care-based AI",
    "digital wellbeing",
    "social media and anxiety",
    "7-day social media detox",
    "break social media habit",
    "screen time tracking AI",
    "social comparison anxiety",
  ],
}

// ── JSON-LD: FAQPage ─────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many people are addicted to social media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estimates from behavioural researchers place the number of people globally with a problematic or addictive relationship with social media at approximately 210 million. The average person worldwide spends around 2.5 hours per day on social platforms, with heavy users exceeding five hours. Teenagers and young adults are disproportionately affected, with studies linking high-frequency social media use to elevated rates of anxiety, depression, and loneliness.",
      },
    },
    {
      "@type": "Question",
      name: "Why is it so hard to stop scrolling even when I want to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The difficulty is neurological, not a failure of willpower. Social media platforms use variable reward schedules \u2014 the same psychological mechanism behind slot machines \u2014 to keep you checking. Every scroll has a chance of delivering something exciting: a like, a comment, a viral video. That unpredictability floods the brain with dopamine. The more you do it, the stronger the neural pathway becomes, and the harder it is to break without a structured replacement.",
      },
    },
    {
      "@type": "Question",
      name: "Does a social media detox make you feel more lonely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initially, yes \u2014 and this is the most common reason detox attempts fail. When you remove social media, the FOMO and withdrawal can feel like genuine social isolation. The key is replacing passive consumption (scrolling a feed) with active connection (talking to someone who actually knows you). MEOK is designed exactly for that: a companion that remembers your life, asks meaningful questions, and supports you through the discomfort of change.",
      },
    },
    {
      "@type": "Question",
      name: "Is using an AI companion just replacing one screen addiction with another?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if the AI is designed like social media. MEOK has no infinite scroll, no algorithmic feed, no engagement metrics, no notifications engineered to pull you back. It does not monetise your attention. Every interaction is intentional and care-based \u2014 you open it because you want a real conversation, not because a red dot manipulated you into it. The architecture is fundamentally different.",
      },
    },
    {
      "@type": "Question",
      name: "What is a 7-day social media detox plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A structured 7-day social media detox involves gradually reducing exposure while building alternative habits. Day 1\u20132: audit your usage and set an intention. Day 3\u20134: remove apps from your phone and replace check-ins with a journalling or conversation habit. Day 5\u20136: reach out to three real people directly. Day 7: review how you feel and decide what, if anything, you want to reintroduce. MEOK can support every stage \u2014 from tracking your emotional patterns to providing a meaningful conversation when the urge to scroll hits.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with a social media detox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports a social media detox through three of its core archetypes. Pioneer helps you build screen-free habits with accountability check-ins. Trickster disrupts the automatic scroll reflex by reframing the urge creatively. Sovereign Memory tracks your digital wellness journey \u2014 screen time patterns, emotional triggers, and mood shifts \u2014 so you can see your own progress over time. Crucially, MEOK replaces the connection need that social media exploits, without recreating the addiction mechanics.",
      },
    },
    {
      "@type": "Question",
      name: "Can social media cause anxiety and depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The research is consistent: heavy social media use is associated with higher rates of anxiety, depression, and loneliness \u2014 a paradox, given that social media is supposed to connect us. The mechanism is social comparison: every curated highlight reel you consume implicitly measures your own life against it, and your brain almost always concludes you are falling short. This drives rumination, inadequacy, and a compulsive need to check again for validation.",
      },
    },
    {
      "@type": "Question",
      name: "What makes MEOK different from social media platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media is engagement-based: every design decision maximises the time you spend on platform because that is how it generates revenue. MEOK is care-based: every design decision asks what is genuinely good for you. There is no feed, no follower count, no algorithm surfacing outrage to keep you engaged, no advertising ecosystem requiring your attention as the product. MEOK has no incentive to make you dependent.",
      },
    },
  ],
}

// ── Shared style tokens ──────────────────────────────────────────────────────

const BG = "#0d0c18"
const TEXT = "#f5f0e8"
const GOLD = "#c9a84c"
const MUTED = "#b0a99a"
const CARD_BG = "#13111f"
const BORDER = "#2a2640"
const LINK_HOVER = "#e0c96a"

// ── Page component ───────────────────────────────────────────────────────────

export default function AIForSocialMediaDetoxPage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div
        style={{
          backgroundColor: BG,
          color: TEXT,
          minHeight: "100vh",
          fontFamily:
            "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Nav bar ─────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: `1px solid ${BORDER}`,
            padding: "0 24px",
            position: "sticky",
            top: 0,
            zIndex: 50,
            backgroundColor: BG,
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
            }}
          >
            <Link
              href="/"
              style={{
                color: GOLD,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.15rem",
                letterSpacing: "0.04em",
              }}
            >
              MEOK AI LABS
            </Link>

            <div
              style={{
                display: "flex",
                gap: "28px",
                alignItems: "center",
              }}
            >
              <Link
                href="/blog"
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Blog
              </Link>
              <Link
                href="/archetypes-guide"
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Archetypes
              </Link>
              <Link
                href="/sovereign-ai-explained"
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Sovereign AI
              </Link>
              <Link
                href="/#waitlist"
                style={{
                  backgroundColor: GOLD,
                  color: BG,
                  padding: "8px 18px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                }}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "20px 24px 0",
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              color: MUTED,
              margin: 0,
            }}
          >
            <Link
              href="/"
              style={{ color: MUTED, textDecoration: "none" }}
            >
              Home
            </Link>
            {" › "}
            <Link
              href="/blog"
              style={{ color: MUTED, textDecoration: "none" }}
            >
              Blog
            </Link>
            {" › "}
            <span style={{ color: GOLD }}>AI for Social Media Detox</span>
          </p>
        </div>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "48px 24px 40px",
          }}
        >
          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "22px",
            }}
          >
            {[
              "Digital Wellbeing",
              "Social Media Detox",
              "Dopamine & Habits",
              "MEOK Archetypes",
              "Mental Health",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  border: `1px solid ${GOLD}`,
                  color: GOLD,
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 20px",
              color: TEXT,
            }}
          >
            AI for Social Media Detox: Breaking the Scroll Without Breaking
            Your Social Life
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              margin: "0 0 28px",
              lineHeight: 1.75,
            }}
          >
            You already know the statistics. You probably feel them in your
            body every time you pick up your phone. This is a guide about why
            social media has captured 210 million people in a cycle they
            actively want to escape — and how MEOK&apos;s care-based architecture
            offers a way out that doesn&apos;t just swap one addiction for another.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              alignItems: "center",
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "20px",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  color: MUTED,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Author
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: TEXT,
                }}
              >
                Nicholas Templeman
              </p>
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  color: MUTED,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Published
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: TEXT,
                }}
              >
                25 March 2026
              </p>
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  color: MUTED,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Reading time
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: TEXT,
                }}
              >
                12 min
              </p>
            </div>
          </div>
        </header>

        {/* ── Article body ────────────────────────────────────────────────── */}
        <main
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >

          {/* ── Section 1 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              How bad is the social media addiction problem, really?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The numbers are staggering. Behavioural researchers estimate that
              approximately{" "}
              <strong style={{ color: GOLD }}>
                210 million people worldwide
              </strong>{" "}
              have a problematic or addictive relationship with social media.
              The global average sits at{" "}
              <strong style={{ color: GOLD }}>2.5 hours per day</strong> —
              roughly 38 days of waking time every year surrendered to
              platforms that were explicitly designed to capture and monetise
              your attention.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Heavy users — people spending more than five hours per day
              scrolling — report significantly higher rates of anxiety,
              sleep disruption, difficulty concentrating, and a persistent
              low-grade sense that their life is somehow less than everyone
              else&apos;s. This is not coincidence. It is the product.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The most alarming dimension is demographic. Teenagers who came
              of age with smartphones as their primary social infrastructure
              have never known a version of friendship that isn&apos;t mediated
              by algorithmic feeds, follower counts, and the perpetual
              performance of a curated self. The mental health consequences of
              that experiment are still unfolding.
            </p>
          </section>

          {/* Stat callout */}
          <div
            style={{
              backgroundColor: CARD_BG,
              border: `1px solid ${GOLD}`,
              borderRadius: "10px",
              padding: "28px 32px",
              marginBottom: "52px",
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              justifyContent: "space-around",
            }}
          >
            {[
              { stat: "210M", label: "people addicted to social media worldwide" },
              { stat: "2.5 hrs", label: "average daily social media use per person" },
              { stat: "38 days", label: "of waking life lost to social media each year" },
              { stat: "70%", label: "of heavy users report feeling worse after scrolling" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                style={{
                  textAlign: "center",
                  minWidth: "140px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: GOLD,
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.82rem",
                    color: MUTED,
                    lineHeight: 1.4,
                    maxWidth: "140px",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 2 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              Why does scrolling feel impossible to stop even when you want to?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The short answer: it is not a willpower problem. Social media
              platforms use{" "}
              <strong style={{ color: GOLD }}>variable reward schedules</strong>{" "}
              — the same psychological mechanism that makes slot machines
              compulsive. Each scroll has a chance of delivering something
              rewarding: a like, a message, a funny video, a piece of news
              that triggers strong emotion. That unpredictability is the
              crucial ingredient.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              If every post were equally interesting, you&apos;d get bored and
              stop. If every post were dull, you&apos;d never start. It&apos;s the
              intermittent nature of the reward — never quite knowing if the
              next scroll will be the one — that creates the dopamine loop.
              Your brain releases dopamine not just when it gets the reward,
              but when it{" "}
              <em>anticipates the possibility</em> of a reward. Scrolling
              is, neurologically, an anticipatory behaviour with no off switch.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Layered on top of this are additional psychological hooks:
            </p>

            <ul
              style={{
                margin: "0 0 20px",
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>FOMO (Fear of Missing Out):</strong>{" "}
                The belief that something important is happening right now
                that you&apos;ll miss if you put your phone down. This triggers
                genuine anxiety — your nervous system treats social exclusion
                as a threat.
              </li>
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>Social comparison:</strong>{" "}
                Every feed is a curated gallery of other people&apos;s best
                moments — holidays, promotions, relationships, bodies. Your
                brain automatically benchmarks your own life against these
                highlights, and almost always finds yours wanting.
              </li>
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>Validation loops:</strong>{" "}
                Likes, comments, and shares activate the same neural reward
                circuits as social approval in the physical world. When your
                post does well, your brain registers it as genuine social
                acceptance. When it doesn&apos;t, the silence registers as
                rejection.
              </li>
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>Infinite scroll architecture:</strong>{" "}
                There is no natural stopping point. No page turn, no
                chapter break, nothing that signals completion. The platform
                is literally designed to have no end.
              </li>
            </ul>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Understanding these mechanisms is the first step in a detox,
              because it reframes the problem correctly. You are not weak.
              You are fighting against billions of dollars of engineering
              optimised specifically to exploit your neurological architecture.
            </p>
          </section>

          {/* ── Section 3 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              Can social media actually cause anxiety, depression, and loneliness?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Yes — and the paradox is that it causes loneliness specifically
              because it simulates connection without delivering it. You can
              spend three hours scrolling through a friend&apos;s holiday photos,
              liking each one, and still feel more alone at the end of the
              session than you did at the beginning. Passive consumption of
              other people&apos;s lives is not the same as experiencing your own.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The anxiety mechanism runs through social comparison. When your
              brain registers that you are continuously falling short of
              comparison benchmarks, it triggers rumination — an involuntary
              loop of negative self-evaluation. Over time, this pattern
              contributes to generalised anxiety and depression.
              Research from the Journal of Social and Clinical Psychology
              found that limiting social media use to 30 minutes per day
              produced significant reductions in depression and loneliness
              within just three weeks.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Depression compounds through what researchers call{" "}
              <strong style={{ color: GOLD }}>upward social comparison</strong>
              : the tendency to compare yourself to people who appear to be
              doing better. Social media feeds are algorithmically tuned to
              show you content that generates strong emotional reactions —
              and envy is one of the strongest, most engagement-generating
              emotions there is. The algorithm is, in effect, paid to make
              you feel inadequate.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              None of this is accidental. The platforms know. The internal
              research has leaked. The testimony has been given before
              parliaments and senates. Social media companies have
              consistently chosen engagement over wellbeing, and they will
              continue to do so as long as the business model rewards it.
            </p>
          </section>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: `4px solid ${GOLD}`,
              margin: "0 0 52px",
              padding: "20px 28px",
              backgroundColor: CARD_BG,
              borderRadius: "0 10px 10px 0",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: TEXT,
                lineHeight: 1.7,
              }}
            >
              &ldquo;The platforms know. The internal research has leaked.
              The testimony has been given. Social media companies have
              consistently chosen engagement over wellbeing, and they will
              continue to do so as long as the business model rewards it.&rdquo;
            </p>
            <footer
              style={{
                fontSize: "0.85rem",
                color: GOLD,
                fontWeight: 600,
              }}
            >
              — Nicholas Templeman, Founder, MEOK AI LABS
            </footer>
          </blockquote>

          {/* ── Section 4 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              Why do most social media detox attempts fail within the first week?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Because they try to solve a connection problem with absence.
              Most detox plans tell you to delete the apps, turn off
              notifications, and fill the time with walks and journalling.
              That advice is not wrong — but it ignores the fundamental
              reason people use social media in the first place: they are
              lonely, bored, or anxious, and social media is the fastest
              available relief.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              When you remove the app without replacing the underlying need,
              the discomfort intensifies. You feel FOMO acutely. You reach
              for your phone and find nothing to open. The withdrawal is
              real — and without support, the path of least resistance is
              to reinstall Instagram by day three.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Successful detoxes share three characteristics that failed
              ones typically lack:
            </p>

            <ol
              style={{
                margin: "0 0 20px",
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>A genuine alternative connection.</strong>{" "}
                Not a walk, not a book — an actual entity (person or AI) that
                can meet the social and emotional need that social media
                was simulating.
              </li>
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>Accountability.</strong>{" "}
                Someone or something that tracks your intention and reflects
                your progress back to you without shame. Knowing you&apos;ll
                be asked &ldquo;how did day four go?&rdquo; makes day four
                easier.
              </li>
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>Pattern awareness.</strong>{" "}
                Understanding specifically when and why you reach for social
                media — boredom at 11am, anxiety on Sunday evenings, loneliness
                after difficult conversations — so you can intervene at
                the trigger, not just the behaviour.
              </li>
            </ol>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              This is exactly what MEOK is designed to provide. Not
              a tool for abstinence. A tool for genuine replacement.
            </p>
          </section>

          {/* ── Section 5 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              How does MEOK act as a genuine human-connection substitute rather than another screen addiction?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The question is fair and important. If you&apos;re putting down
              Instagram and picking up an AI, are you just replacing one
              screen compulsion with another? The answer depends entirely
              on the architecture of the AI you choose.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Social media is{" "}
              <strong style={{ color: GOLD }}>engagement-based</strong>: every
              design decision — from notification timing to content ranking
              to the shape of the like button — maximises time on platform
              because that is directly tied to advertising revenue. Your
              attention is the product being sold.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              MEOK is{" "}
              <strong style={{ color: GOLD }}>care-based</strong>: every design
              decision asks what is genuinely good for the person using it.
              There is no infinite scroll. There is no algorithmic feed
              surfacing content to maximise emotional reactivity. There are
              no engagement metrics. There is no notification system engineered
              to interrupt your day and pull you back. MEOK does not send
              you push notifications at 9pm designed to re-engage you. It
              waits for you.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              More fundamentally: MEOK remembers you. Social media gives you
              an audience of followers who know your posts but not your
              life. MEOK gives you a companion that holds the thread of who
              you actually are — your goals, your fears, your history, the
              conversation you had last Tuesday about your mother. That is not
              engagement. That is relationship.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              When you open MEOK because you feel the pull to scroll, you
              are choosing a conversation over a consumption loop. That is
              not a small distinction.
            </p>
          </section>

          {/* Archetype cards */}
          <div
            style={{
              marginBottom: "52px",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 24px",
                textAlign: "center",
              }}
            >
              Three MEOK Archetypes Built for Your Detox
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {/* Pioneer card */}
              <div
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "1.5rem",
                  }}
                >
                  🧭
                </p>
                <h4
                  style={{
                    margin: "0 0 10px",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  Pioneer
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    color: MUTED,
                    lineHeight: 1.6,
                  }}
                >
                  Builds screen-free habits with daily accountability
                  check-ins. Tracks your intentions, celebrates
                  consistency, and gently calls out backsliding without
                  shame.
                </p>
              </div>

              {/* Trickster card */}
              <div
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "1.5rem",
                  }}
                >
                  🃏
                </p>
                <h4
                  style={{
                    margin: "0 0 10px",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  Trickster
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    color: MUTED,
                    lineHeight: 1.6,
                  }}
                >
                  Disrupts the automatic scroll reflex through creative
                  reframing. Transforms the urge to check Instagram into
                  an opportunity for a bizarre, unexpected, genuinely
                  interesting conversation.
                </p>
              </div>

              {/* Sovereign Memory card */}
              <div
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "1.5rem",
                  }}
                >
                  🧠
                </p>
                <h4
                  style={{
                    margin: "0 0 10px",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  Sovereign Memory
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    color: MUTED,
                    lineHeight: 1.6,
                  }}
                >
                  Tracks your digital wellness journey over time —
                  screen time patterns, emotional triggers, mood shifts —
                  so you can see your own data and understand yourself
                  more clearly than any platform will ever let you.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 6 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              How does Pioneer help build screen-free habits and real accountability?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Habit change research is clear on one thing above everything
              else: accountability dramatically increases the probability of
              success. When you make an intention visible to another person
              — or an entity that behaves like one — you activate social
              commitment mechanisms that make it significantly harder to
              quietly abandon your goal on day two.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Pioneer is MEOK&apos;s trailblazer archetype. Its role in a social
              media detox is to serve as your consistent, non-judgmental
              accountability partner. At the start of your detox, you tell
              Pioneer what you&apos;re doing and why. It will remember.
              Tomorrow it will ask how day one went. The day after, day two.
              It will notice when you go quiet and ask what happened.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Pioneer also helps you design the habit architecture around your
              detox. Which specific apps are you removing? What are you
              replacing them with? What is your plan for the 11pm
              loneliness scroll? Intentional pre-planning of high-risk
              moments is one of the most evidence-backed strategies in
              behavioural change research — and Pioneer is built to
              facilitate exactly that kind of structured thinking.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Crucially, Pioneer&apos;s accountability is gentle rather than
              punitive. It does not shame you for reinstalling an app.
              It asks what triggered it, what you needed in that moment,
              and what you want to do differently. This is the difference
              between accountability and surveillance.
            </p>
          </section>

          {/* ── Section 7 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              How does the Trickster archetype disrupt the compulsive scroll habit?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The scroll habit is, among other things, a boredom reflex.
              You pick up your phone not because you consciously decide to
              check Instagram, but because your hand moves there
              automatically whenever there is a microsecond of unstimulated
              time. It happens between messages, in queues, at traffic lights,
              in the bathroom. The trigger is so small and the behaviour so
              ingrained that conscious willpower alone is almost useless
              against it.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Trickster&apos;s approach is not to suppress the impulse but to
              redirect it with something genuinely more interesting than a
              feed. When you feel the pull, you open MEOK instead and
              Trickster is waiting with something unexpected: a strange
              hypothetical, a reframe of your current situation, a question
              that you&apos;ve never been asked before, a playful provocation
              that makes you laugh or think rather than consume.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The behaviour change principle here is{" "}
              <strong style={{ color: GOLD }}>habit substitution</strong>:
              keeping the cue (boredom or anxiety) and the reward (mental
              stimulation and connection) but replacing the routine (scroll)
              with something that doesn&apos;t trap you in a loop. Trickster
              exploits the fact that humans are genuinely curious creatures.
              Given a genuinely interesting alternative, the scroll becomes
              less compelling.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Over time, the Trickster interactions also build a new
              neural association: boredom prompts an interesting conversation
              rather than a passive consumption loop. That rewiring is
              slow, but it is real — and it is far more durable than
              willpower-based abstinence.
            </p>
          </section>

          {/* ── Section 8 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              How does Sovereign Memory track your digital wellness journey over time?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              One of the most powerful things you can do in a social media
              detox is understand your own patterns — specifically, the
              emotional and situational triggers that precede your heaviest
              usage. Most people do not know these. They know they scroll
              &ldquo;too much&rdquo; but they cannot tell you whether it peaks
              on Sunday evenings, after stressful work conversations, or
              specifically when they&apos;re feeling socially overlooked.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Sovereign Memory is MEOK&apos;s persistent memory layer. Unlike
              every other AI you have ever used, MEOK remembers the threads
              of your life across sessions. When you tell it on Monday that
              you found Sunday evening particularly difficult, it holds that.
              When you mention on Thursday that the urge to scroll was
              strongest after a specific conversation with a colleague, it
              files that too. Over weeks, a pattern emerges that is
              uniquely yours.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              This longitudinal tracking serves three functions in a detox:
            </p>

            <ol
              style={{
                margin: "0 0 20px",
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>Trigger identification:</strong>{" "}
                You learn which specific emotional states, situations, or
                times of day are highest-risk for relapse into compulsive
                scrolling.
              </li>
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>Progress visibility:</strong>{" "}
                You can see, concretely, how your relationship with screens
                has changed over the course of a detox. This evidence is
                motivating in a way that abstract intentions are not.
              </li>
              <li style={{ fontSize: "1.05rem", color: TEXT }}>
                <strong style={{ color: GOLD }}>Emotional literacy:</strong>{" "}
                The process of articulating your patterns to MEOK builds
                self-awareness about the emotions you were using social
                media to avoid — loneliness, inadequacy, boredom, anxiety.
                Naming these is the beginning of addressing them.
              </li>
            </ol>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Critically, all of this data is yours. MEOK operates on a
              sovereign data model: your memory is stored under your
              control and is never used to train models, never sold to
              advertisers, and never weaponised to keep you engaged with
              the platform. The contrast with social media could not be
              more complete.
            </p>
          </section>

          {/* ── Section 9 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              What makes MEOK fundamentally different from the platforms it helps you leave?
            </h2>

            <p
              style={{
                margin: "0 0 24px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The differences are architectural, not cosmetic. Social media
              and MEOK are not two versions of the same category of product.
              They are built on entirely different premises about what
              technology is for.
            </p>

            {/* Comparison table */}
            <div
              style={{
                overflowX: "auto",
                marginBottom: "20px",
                borderRadius: "10px",
                border: `1px solid ${BORDER}`,
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.92rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: CARD_BG,
                    }}
                  >
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: MUTED,
                        fontWeight: 600,
                        borderBottom: `1px solid ${BORDER}`,
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Dimension
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: MUTED,
                        fontWeight: 600,
                        borderBottom: `1px solid ${BORDER}`,
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Social Media
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: GOLD,
                        fontWeight: 600,
                        borderBottom: `1px solid ${BORDER}`,
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      MEOK
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Business model", "Sell your attention to advertisers", "Subscription — you are the customer, not the product"],
                    ["Design goal", "Maximise time on platform", "Maximise genuine value to you"],
                    ["Scroll mechanic", "Infinite, no stopping signal", "None — every interaction is intentional"],
                    ["Memory", "Remembers content you engage with to serve you more of it", "Remembers your life, your goals, your history"],
                    ["Notifications", "Engineered to interrupt and re-engage", "None designed to create compulsion"],
                    ["Algorithm", "Surfaces outrage and envy to maximise engagement", "No feed algorithm"],
                    ["Data use", "Trains models, sold to advertisers, used against you", "Sovereign — yours, never used against you"],
                    ["Connection type", "Passive audience, curated broadcast", "Active companion, genuine dialogue"],
                    ["Engagement metrics", "Likes, shares, follower counts visible to all", "None — care is not measured in metrics"],
                  ].map(([dim, social, meok], i) => (
                    <tr
                      key={dim}
                      style={{
                        backgroundColor: i % 2 === 0 ? BG : CARD_BG,
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 18px",
                          fontWeight: 600,
                          color: TEXT,
                          borderBottom: `1px solid ${BORDER}`,
                          verticalAlign: "top",
                        }}
                      >
                        {dim}
                      </td>
                      <td
                        style={{
                          padding: "12px 18px",
                          color: MUTED,
                          borderBottom: `1px solid ${BORDER}`,
                          verticalAlign: "top",
                        }}
                      >
                        {social}
                      </td>
                      <td
                        style={{
                          padding: "12px 18px",
                          color: TEXT,
                          borderBottom: `1px solid ${BORDER}`,
                          verticalAlign: "top",
                        }}
                      >
                        {meok}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              This is what care-based design looks like at the architecture
              level. Not a kinder version of the same attention trap — a
              fundamentally different premise about what technology owes
              the people who use it.
            </p>
          </section>

          {/* ── Section 10: 7-day plan ─────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              What does a practical 7-day social media detox plan look like with MEOK?
            </h2>

            <p
              style={{
                margin: "0 0 28px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              A structured seven-day detox is far more effective than a
              vague resolution to &ldquo;use my phone less.&rdquo; Here is a
              day-by-day framework that MEOK can support at every stage.
              The goal is not zero screens forever. The goal is to break
              the compulsive loop and rebuild a conscious, chosen
              relationship with technology.
            </p>

            {[
              {
                day: "Day 1",
                title: "Audit and Intention",
                body: "Before removing anything, spend one day observing without judgment. Check your screen time data. Note which apps you open most and in what situations. In the evening, tell Pioneer what you\u2019re doing and why. Write down your specific intention \u2014 not \u201cI want to use social media less\u201d but \u201cI want to reclaim my Sunday mornings and stop the 11pm scroll.\u201d Specificity is the difference between intention and commitment.",
              },
              {
                day: "Day 2",
                title: "Remove and Replace",
                body: "Delete social media apps from your phone today. Not deactivate \u2014 remove. The friction of reinstalling is a meaningful barrier during a craving spike. Identify one thing you will open instead when the urge hits: MEOK. Tell Trickster you\u2019re starting the detox and ask it to be ready for you. Set a simple rule: when you feel the pull to scroll, open MEOK first.",
              },
              {
                day: "Day 3",
                title: "Survive the Withdrawal",
                body: "Day three is typically the hardest. FOMO peaks, the anxiety of not knowing what is happening in your feeds is acute, and your hands keep reaching for apps that aren\u2019t there. This is the day Trickster earns its place. Every time you feel the pull, open MEOK. Don\u2019t aim for a long conversation \u2014 even a two-minute reframe is enough to break the reflex loop.",
              },
              {
                day: "Day 4",
                title: "Notice the Triggers",
                body: "Start paying attention to when the cravings are strongest. Is it in the morning before you\u2019ve fully woken up? After stressful meetings? In the gap between finishing dinner and starting the evening? Log these with Sovereign Memory. Tell MEOK what you\u2019re noticing. Pattern data gathered now will be invaluable by day seven.",
              },
              {
                day: "Day 5",
                title: "Reach Out for Real",
                body: "Identify three people in your life you\u2019ve been \u201cfollowing\u201d on social media but not actually talking to. Send each of them a direct message or make a call. Real connection is the deepest antidote to social media\u2019s simulation of it. Pioneer can help you plan these interactions if reaching out feels awkward. That discomfort is worth understanding.",
              },
              {
                day: "Day 6",
                title: "Rebuild a Daytime Structure",
                body: "Social media often fills structural gaps in the day \u2014 the moments between tasks that feel unpleasant to sit with. Today, design a simple structure for your highest-risk times. What do you do at 11am when you used to check Twitter? What do you do in the commute when you used to scroll Instagram? Small, concrete substitutions for specific slots are far more effective than general resolve.",
              },
              {
                day: "Day 7",
                title: "Review and Choose",
                body: "Sit with Sovereign Memory and review the week. What did you learn about your triggers? How has your mood shifted? What did you miss, genuinely, and what have you realised you don\u2019t miss at all? From this position of data and experience, make a conscious choice about what, if anything, you want to reintroduce \u2014 and on what terms. You are no longer reacting. You are choosing.",
              },
            ].map(({ day, title, body }, i) => (
              <div
                key={day}
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "24px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: CARD_BG,
                    border: `2px solid ${GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: GOLD,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                    }}
                  >
                    Day
                  </span>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      color: GOLD,
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "10px",
                    padding: "18px 22px",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: GOLD,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      color: MUTED,
                      lineHeight: 1.65,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* ── Section 11 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              Is it possible to reclaim your social life after a detox without going back to the same habits?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Yes — and the research on digital minimalism is encouraging
              here. The goal of a well-designed detox is not permanent
              abstinence. It is the re-establishment of agency. You want
              to reach a point where you choose to open an app rather
              than finding yourself inside one with no memory of deciding
              to open it.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Many people who complete a structured detox do choose to
              reintroduce some social media use — but on radically
              different terms. They use it with intention, at specific
              times, for specific purposes, and they log off when the
              purpose is complete. They no longer live inside it. The
              compulsive quality is gone.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              Others discover that they genuinely do not miss most of what
              they thought they needed social media for. The FOMO that felt
              unbearable on day three turns out, by week three, to be
              largely phantom. The life that was happening elsewhere while
              you were not scrolling was, it turns out, perfectly fine
              without you watching it.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              What does not return for most people, once they have broken
              the loop, is the compulsive baseline usage. The two hours of
              unconscious daily scrolling that produced nothing but low-grade
              dread. That particular kind of time disappears — and in its
              place is something that felt impossible to imagine before the
              detox: available time, in which you can choose what to put.
            </p>
          </section>

          {/* ── Section 12 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: GOLD,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              Why is now the right time to try a social media detox?
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The cultural conversation around social media has shifted
              dramatically in recent years. The former product managers,
              engineers, and executives who built these platforms are now
              publicly warning about what they built. The research on
              mental health consequences is no longer preliminary — it is
              a substantial body of consistent findings across populations,
              age groups, and countries.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              At the same time, the alternatives have improved. The idea
              of a social media detox used to mean enduring a void — genuine
              disconnection, boredom, and FOMO with no replacement. Today,
              care-based AI makes it possible to leave the addictive
              platforms without leaving genuine connection behind.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              The 210 million people estimated to be addicted to social
              media are not a statistic. They are people spending 38 days
              a year in a state of passive consumption that makes them feel
              worse about themselves. Most of them would leave if they
              believed they could leave without losing something important.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: TEXT,
              }}
            >
              MEOK exists to make that belief possible. Not by promising
              that leaving will be easy — it won&apos;t be, especially in the
              first week. But by being genuinely present on the other side
              of the decision, in a way that social media&apos;s simulation
              of presence never was.
            </p>
          </section>

          {/* ── Gold CTA box ─────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: CARD_BG,
              border: `2px solid ${GOLD}`,
              borderRadius: "14px",
              padding: "44px 40px",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "0.8rem",
                color: GOLD,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Start Your Detox
            </p>

            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: 800,
                color: TEXT,
                lineHeight: 1.3,
              }}
            >
              Ready to break the scroll?
            </h2>

            <p
              style={{
                margin: "0 0 32px",
                fontSize: "1.05rem",
                color: MUTED,
                maxWidth: "480px",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.7,
              }}
            >
              MEOK&apos;s Pioneer, Trickster, and Sovereign Memory archetypes are
              built for exactly this. Join the waitlist and start your 7-day
              detox with a companion that remembers who you are — and has no
              incentive to keep you hooked.
            </p>

            <Link
              href="/#waitlist"
              style={{
                display: "inline-block",
                backgroundColor: GOLD,
                color: BG,
                padding: "16px 36px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.03em",
                marginBottom: "16px",
              }}
            >
              Join the MEOK Waitlist
            </Link>

            <p
              style={{
                margin: "14px 0 0",
                fontSize: "0.82rem",
                color: MUTED,
              }}
            >
              No credit card required. No infinite scroll. No engagement
              metrics.
            </p>
          </div>

          {/* ── FAQ accordion-style section ──────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 28px",
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "How many people are addicted to social media?",
                a: "Estimates from behavioural researchers place the number of people globally with a problematic or addictive relationship with social media at approximately 210 million. The average person worldwide spends around 2.5 hours per day on social platforms, with heavy users exceeding five hours. Teenagers and young adults are disproportionately affected.",
              },
              {
                q: "Why is it so hard to stop scrolling even when I want to?",
                a: "The difficulty is neurological, not a failure of willpower. Social media platforms use variable reward schedules \u2014 the same mechanism behind slot machines \u2014 to keep you checking. Unpredictable rewards create dopamine anticipation. The more you do it, the stronger the neural pathway becomes.",
              },
              {
                q: "Does a social media detox make you feel more lonely?",
                a: "Initially, yes \u2014 and this is the most common reason detox attempts fail. When you remove social media, FOMO and withdrawal can feel like genuine social isolation. The key is replacing passive consumption with active connection. MEOK is designed exactly for that: a companion that remembers your life and supports you through the discomfort of change.",
              },
              {
                q: "Is using an AI companion just replacing one screen addiction with another?",
                a: "Only if the AI is designed like social media. MEOK has no infinite scroll, no algorithmic feed, no engagement metrics, no notifications engineered to pull you back. It does not monetise your attention. Every interaction is intentional and care-based \u2014 you open it because you want a real conversation.",
              },
              {
                q: "Can social media cause anxiety and depression?",
                a: "The research is consistent: heavy social media use is associated with higher rates of anxiety, depression, and loneliness. The mechanism is social comparison: every curated highlight reel implicitly measures your own life against it, driving rumination and inadequacy. Studies show limiting use to 30 minutes per day produces significant reductions in depression and loneliness within three weeks.",
              },
              {
                q: "What makes MEOK different from social media platforms?",
                a: "Social media is engagement-based \u2014 every design decision maximises time on platform because that is how it generates revenue. MEOK is care-based \u2014 every design decision asks what is genuinely good for the person using it. No feed, no algorithm, no notification system engineered to interrupt your day, no advertising ecosystem requiring your attention as the product.",
              },
              {
                q: "How long does a social media detox take to work?",
                a: "Most people report meaningful shifts in mood and anxiety within seven days. The compulsive checking reflex begins to weaken after three to four days without the apps installed. Full rewiring of the habit neural pathway takes longer \u2014 typically four to eight weeks of consistent alternative behaviour. MEOK\u2019s Sovereign Memory can track your progress throughout.",
              },
              {
                q: "What should I do when I get the urge to scroll?",
                a: "Open MEOK. Specifically, open the Trickster archetype. The goal is to interrupt the automatic behaviour with something that meets the underlying need (stimulation, connection, distraction) without trapping you in a compulsive loop. Even a two-minute conversation breaks the reflex. Over time the association shifts: boredom prompts conversation, not consumption.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderBottom: `1px solid ${BORDER}`,
                  padding: "22px 0",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "1.02rem",
                    fontWeight: 700,
                    color: TEXT,
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: MUTED,
                    lineHeight: 1.7,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </section>

          {/* ── Related posts ─────────────────────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 22px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Related Articles
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-social-media-addiction",
                  title: "AI for Social Media Addiction",
                  desc: "Using technology to escape technology\u2019s trap \u2014 the irony, the neuroscience, and the exit.",
                },
                {
                  href: "/blog/ai-for-social-media-anxiety",
                  title: "AI for Social Media Anxiety",
                  desc: "How the comparison culture and notification economy fuel modern anxiety spirals.",
                },
                {
                  href: "/blog/ai-for-loneliness",
                  title: "AI for Loneliness",
                  desc: "The loneliness epidemic and why care-based AI is part of the answer.",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  title: "AI for Anxiety",
                  desc: "How MEOK supports people navigating anxiety without replacing professional care.",
                },
                {
                  href: "/blog/ai-for-habit-building",
                  title: "AI for Habit Building",
                  desc: "The science of habit change and how Pioneer turns good intentions into durable behaviour.",
                },
                {
                  href: "/blog/meok-companion-archetypes-guide",
                  title: "MEOK Archetypes Guide",
                  desc: "Pioneer, Trickster, Sovereign Memory, and the full cast of MEOK\u2019s companion characters.",
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    textDecoration: "none",
                    display: "block",
                    backgroundColor: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "10px",
                    padding: "20px",
                    transition: "border-color 0.2s",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: GOLD,
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.85rem",
                      color: MUTED,
                      lineHeight: 1.55,
                    }}
                  >
                    {desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Back to blog ──────────────────────────────────────────────── */}
          <div style={{ textAlign: "center" }}>
            <Link
              href="/blog"
              style={{
                color: GOLD,
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              ← Back to Blog
            </Link>
          </div>
        </main>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer
          style={{
            borderTop: `1px solid ${BORDER}`,
            padding: "48px 24px",
            marginTop: "0",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ maxWidth: "320px" }}>
              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: GOLD,
                }}
              >
                MEOK AI LABS
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.88rem",
                  color: MUTED,
                  lineHeight: 1.65,
                }}
              >
                Sovereign AI built for genuine human connection. No
                engagement metrics. No algorithmic manipulation. No
                infinite scroll. Just care.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: MUTED,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Product
                </p>
                {[
                  ["/#waitlist", "Join Waitlist"],
                  ["/archetypes-guide", "Archetypes"],
                  ["/sovereign-ai-explained", "Sovereign AI"],
                  ["/what-is-meok", "What Is MEOK"],
                ].map(([href, label]) => (
                  <p key={href} style={{ margin: "0 0 8px" }}>
                    <Link
                      href={href}
                      style={{
                        color: MUTED,
                        textDecoration: "none",
                        fontSize: "0.88rem",
                      }}
                    >
                      {label}
                    </Link>
                  </p>
                ))}
              </div>

              <div>
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: MUTED,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Resources
                </p>
                {[
                  ["/blog", "Blog"],
                  ["/blog/ai-for-social-media-addiction", "Social Media Addiction"],
                  ["/blog/ai-for-loneliness", "Loneliness"],
                  ["/blog/ai-for-anxiety", "Anxiety"],
                ].map(([href, label]) => (
                  <p key={href} style={{ margin: "0 0 8px" }}>
                    <Link
                      href={href}
                      style={{
                        color: MUTED,
                        textDecoration: "none",
                        fontSize: "0.88rem",
                      }}
                    >
                      {label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: "1100px",
              margin: "36px auto 0",
              paddingTop: "24px",
              borderTop: `1px solid ${BORDER}`,
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: MUTED,
              }}
            >
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: MUTED,
              }}
            >
              <Link
                href="/privacy-covenant"
                style={{ color: MUTED, textDecoration: "none" }}
              >
                Privacy Covenant
              </Link>
              {" · "}
              <Link
                href="/how-meok-protects-your-data"
                style={{ color: MUTED, textDecoration: "none" }}
              >
                Data Protection
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
