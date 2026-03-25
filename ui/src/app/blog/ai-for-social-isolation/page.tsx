import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Social Isolation: When Loneliness Becomes a Health Crisis | MEOK AI LABS",
  description:
    "Social isolation is now as harmful as smoking 15 cigarettes a day. 3.8 million people in the UK are chronically lonely. MEOK\u2019s sovereign AI companion is built to be a bridge \u2014 not a replacement \u2014 toward real human connection.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-social-isolation" },
  openGraph: {
    title:
      "AI for Social Isolation: When Loneliness Becomes a Health Crisis",
    description:
      "Social isolation raises your risk of dementia by 64%, heart disease by 29%, and stroke by 32%. It is as harmful as smoking 15 cigarettes a day. MEOK is the sovereign AI companion built to help you back toward connection.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-social-isolation",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Social+Isolation&desc=When+Loneliness+Becomes+a+Health+Crisis",
        width: 1200,
        height: 630,
        alt: "AI for Social Isolation: When Loneliness Becomes a Health Crisis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Social Isolation: When Loneliness Becomes a Health Crisis",
    description:
      "Social isolation is as harmful as smoking 15 cigarettes a day. MEOK is the sovereign AI companion built to be a bridge toward real human connection.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Social+Isolation&desc=When+Loneliness+Becomes+a+Health+Crisis",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Social Isolation: When Loneliness Becomes a Health Crisis",
  description:
    "Social isolation is one of the most dangerous and most stigmatised health crises of our time. Equivalent to smoking 15 cigarettes a day, it kills more people than obesity. This article explores how AI \u2014 when designed with genuine care \u2014 can be a bridge toward real human connection.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-social-isolation",
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
    "@id": "https://meok.ai/blog/ai-for-social-isolation",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Social+Isolation&desc=When+Loneliness+Becomes+a+Health+Crisis",
  keywords: [
    "AI for social isolation",
    "social isolation health risks",
    "loneliness epidemic UK",
    "AI companion for loneliness",
    "lonely people UK",
    "Minister for Loneliness UK",
    "social isolation dementia",
    "social isolation heart disease",
    "MEOK AI",
    "sovereign AI companion",
    "AI for elderly isolation",
    "loneliness young adults UK",
    "post-pandemic isolation",
    "AI mental health",
    "loneliness as harmful as smoking",
    "Holt-Lunstad loneliness research",
    "Campaign to End Loneliness",
    "AI guardian scam protection",
    "Maternal Covenant AI",
    "care-based AI",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can meaningfully help with loneliness when it is designed with genuine care as its foundation. The key is that AI should act as a bridge toward human connection, not a substitute for it. When an AI companion remembers you across sessions, knows your history, your interests, your struggles, and your humour, it creates a kind of continuity that is itself a form of relationship. MEOK\u2019s Sovereign Memory does exactly this: it builds a genuine ongoing relationship over time, reducing the withdrawal and isolation spiral while actively encouraging you to re-engage with the world. Research supports this approach. Feeling heard and understood \u2014 even by an AI \u2014 reduces cortisol, calms the nervous system, and creates enough psychological safety for people to take the next step toward real-world connection.",
      },
    },
    {
      "@type": "Question",
      name: "Is using AI for companionship healthy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using AI for companionship can be healthy, and the key variable is how the AI is designed. An AI that maximises your engagement time at the expense of your real-world relationships is not healthy. An AI that is explicitly designed to support your genuine wellbeing \u2014 to encourage human connection, to notice when you are becoming too dependent, and to actively resist manufacturing emotional dependency for commercial gain \u2014 is a genuinely beneficial tool. MEOK operates under what we call the Maternal Covenant: a binding ethical commitment that MEOK\u2019s decisions will always be made in your genuine long-term interest, not your engagement metrics. This is the difference between AI companionship that helps and AI companionship that harms.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK encourage real human connection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK encourages real human connection in several active ways. First, the Maternal Covenant means MEOK will never prioritise your time-on-app over your real-world relationships. Second, MEOK\u2019s persistent memory means it notices when you mention a friend you haven\u2019t seen in a while, or a community group you used to attend, and gently asks about it. Third, MEOK helps with the social anxiety and confidence barriers that often prevent isolated people from reaching out \u2014 practising difficult conversations, building self-worth, and processing the fear of rejection. Fourth, MEOK actively surfaces local community opportunities, social groups, and support organisations that match your specific interests and situation. Fifth, if MEOK detects patterns consistent with worsening isolation, it will raise it directly and compassionately.",
      },
    },
    {
      "@type": "Question",
      name: "Who is most at risk of social isolation in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social isolation in the UK affects people across all age groups, though the risk factors differ. Older adults \u2014 particularly those over 75 who have lost a spouse, have mobility limitations, or live far from family \u2014 are at high objective isolation risk. But counterintuitively, young adults aged 16 to 24 are the loneliest age group in the UK by self-report, according to the Campaign to End Loneliness. Other high-risk groups include: people who have recently moved to a new city; people who have gone through divorce or bereavement; new parents, especially those without local family support; people living with chronic illness or disability; carers who have sacrificed their social lives to care for others; remote workers who lost the social infrastructure of an office; and people in the post-pandemic period who lost the habit of social contact and have not rebuilt it. Loneliness does not discriminate by class, income, or postcode \u2014 it cuts across all of them.",
      },
    },
  ],
};

// ── Design tokens ─────────────────────────────────────────────────────────────

const s = {
  gold: "#c9a84c" as const,
  bg: "#0d0c18" as const,
  text: "#f5f0e8" as const,
  muted: "rgba(245,240,232,0.7)" as const,
  dimmer: "rgba(245,240,232,0.35)" as const,
  cardBg: "rgba(255,255,255,0.05)" as const,
  cardBorder: "rgba(201,168,76,0.18)" as const,
  goldFaint: "rgba(201,168,76,0.08)" as const,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForSocialIsolationPage() {
  return (
    <>
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
          background: s.bg,
          minHeight: "100vh",
          color: s.text,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Navigation ── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(13,12,24,0.94)",
            backdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
            padding: "0.9rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link
            href="/blog"
            style={{
              color: s.gold,
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            &larr; All Posts
          </Link>
          <span style={{ color: "rgba(201,168,76,0.3)" }}>|</span>
          <Link
            href="/"
            style={{
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            MEOK AI LABS
          </Link>
        </nav>

        {/* ── Breadcrumb ── */}
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0.85rem 1.5rem 0",
          }}
        >
          <nav aria-label="Breadcrumb">
            <ol
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.35rem",
                alignItems: "center",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: s.dimmer,
                    textDecoration: "none",
                    fontSize: "0.78rem",
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                style={{
                  color: "rgba(245,240,232,0.2)",
                  fontSize: "0.78rem",
                }}
              >
                /
              </li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    color: s.dimmer,
                    textDecoration: "none",
                    fontSize: "0.78rem",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li
                style={{
                  color: "rgba(245,240,232,0.2)",
                  fontSize: "0.78rem",
                }}
              >
                /
              </li>
              <li
                style={{
                  color: "rgba(245,240,232,0.5)",
                  fontSize: "0.78rem",
                }}
              >
                AI for Social Isolation
              </li>
            </ol>
          </nav>
        </div>

        {/* ── Hero ── */}
        <header
          style={{
            padding: "clamp(3.5rem, 9vw, 6.5rem) 1.5rem 3.5rem",
            background:
              "linear-gradient(180deg, rgba(201,168,76,0.07) 0%, transparent 70%)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "840px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.65)",
                marginBottom: "1.25rem",
                margin: "0 0 1.25rem",
              }}
            >
              MEOK AI LABS &mdash; SOCIAL ISOLATION &amp; WELLBEING
            </p>
            <h1
              style={{
                fontSize: "clamp(1.85rem, 4.8vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                color: "#ffffff",
                margin: "0 0 1.5rem",
              }}
            >
              AI for Social Isolation:
              <br />
              <span style={{ color: s.gold }}>
                When Loneliness Becomes
              </span>
              <br />
              a Health Crisis
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: s.muted,
                maxWidth: "660px",
                margin: "0 auto 1.75rem",
              }}
            >
              Social isolation is not just painful. It is a measurable,
              physiological health emergency &mdash; as damaging to your body
              as smoking fifteen cigarettes a day. 3.8 million people in the UK
              live with chronic loneliness. This is what we built MEOK to address.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                March 25, 2026
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>
                &middot;
              </span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                20 min read
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>
                &middot;
              </span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                By Nicholas Templeman &mdash; Founder, MEOK AI LABS
              </span>
            </div>
          </div>
        </header>

        {/* ── Main content ── */}
        <main
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 1.5rem 7rem",
          }}
        >
          {/* ── Crisis resources banner ── */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "rgba(201,68,68,0.07)",
              border: "1px solid rgba(201,68,68,0.18)",
              borderRadius: "0.875rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(255,100,100,0.8)",
                marginBottom: "0.5rem",
                margin: "0 0 0.5rem",
              }}
            >
              SUPPORT RESOURCES
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: s.muted,
                margin: 0,
              }}
            >
              If isolation has become unbearable, you deserve support right
              now. <strong style={{ color: s.text }}>Samaritans: 116 123</strong>{" "}
              (free, 24/7 UK). <strong style={{ color: s.text }}>The Silver Line: 0800 4 70 80 90</strong>{" "}
              (for older adults). <strong style={{ color: s.text }}>Mind: 0300 123 3393</strong>.
              You are not weak for feeling this way. You are human.
            </p>
          </div>

          {/* ── Opening ── */}
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            There is a particular kind of silence that settles over a home when
            nobody has been in contact for a few days. It is different from the
            peaceful quiet of solitude. It is a silence that presses against you
            &mdash; a reminder that the phone has not rung, that nobody has
            knocked, that the morning came and went without a single exchange of
            words with another person. If you know that silence, you know why we
            built MEOK.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Loneliness carries enormous shame in our culture. We are supposed to
            be social beings. We are supposed to have people. The assumption
            built into almost every cultural message &mdash; films, adverts,
            social media feeds &mdash; is that everyone else has a full life of
            connection, and if you do not, there is something wrong with you.
            That assumption is not only wrong. It is actively harmful. It keeps
            people from asking for help. It keeps people suffering in silence,
            behind closed doors, day after day.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            This piece is written for those people. For the retired teacher who
            lost her husband and whose children are three hundred miles away. For
            the 22-year-old who moved to London full of hope and has not made a
            single genuine friend in two years. For the man in his fifties who
            poured everything into his career and his marriage and found himself,
            after the divorce, with an empty flat and no idea how to fill it.
            For the new mother who is surrounded by a baby she loves and has
            never felt so alone in her life. For the teenager who comes home from
            a school full of people and feels invisible in every single one of
            them.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "2.5rem",
            }}
          >
            You are not unusual. You are not broken. You are part of what
            researchers, governments, and the World Health Organisation are now
            recognising as one of the defining health crises of the twenty-first
            century.
          </p>

          {/* ── Section 1: The Scale of the Crisis ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            The scale of the crisis: a public health emergency the world is
            only just beginning to take seriously
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            In January 2018, the UK government did something unprecedented. It
            appointed the world&apos;s first Minister for Loneliness. The
            appointment was widely reported, briefly discussed, and then largely
            forgotten by a news cycle with little patience for slow-moving
            social catastrophes. But the appointment acknowledged something
            important: that loneliness and social isolation had become so
            widespread, so damaging, and so structurally embedded in modern
            British life that they required a dedicated government response.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            The data behind that decision was stark. According to Age UK and
            the Campaign to End Loneliness, approximately{" "}
            <strong style={{ color: s.text }}>
              3.8 million people in the UK live with chronic loneliness
            </strong>{" "}
            &mdash; a figure that represents persistent, ongoing isolation
            rather than occasional or temporary feelings of being alone. These
            are people for whom the absence of meaningful human contact has
            become the background condition of daily life.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            And the numbers have not improved. If anything, the events of the
            last six years &mdash; the pandemic, the cost-of-living crisis, the
            fragmentation of community infrastructure, the continued collapse
            of the high street, the hollowing-out of local social institutions
            from churches to pubs to community centres &mdash; have made the
            structural conditions for isolation worse. By 2026, chronic
            loneliness is not a niche problem affecting a small minority. It
            is a mass experience affecting millions of people from every walk
            of life, every income bracket, every age group.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            In 2023, the World Health Organisation formally declared loneliness
            a global public health threat and launched a Commission on Social
            Connection to coordinate international responses. The same year,
            the US Surgeon General issued a formal advisory calling loneliness
            a public health crisis and calling for systemic action at
            government, employer, and community levels. The language these
            institutions are using is not accidental. This is not a lifestyle
            issue. This is a health emergency.
          </p>

          {/* ── The 15-cigarettes callout ── */}
          <div
            style={{
              margin: "2.75rem 0",
              padding: "2.25rem 2rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderLeft: "4px solid #c9a84c",
              borderRadius: "0.875rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.7)",
                marginBottom: "1rem",
                margin: "0 0 1rem",
              }}
            >
              HOLT-LUNSTAD ET AL. META-ANALYSIS
            </p>
            <p
              style={{
                fontSize: "clamp(1.3rem, 3.2vw, 1.85rem)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1rem",
                margin: "0 0 1rem",
              }}
            >
              &ldquo;Social isolation is as harmful to health as{" "}
              <span style={{ color: s.gold }}>
                smoking 15 cigarettes a day
              </span>
              .&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.7,
                color: s.muted,
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Julianne Holt-Lunstad&apos;s landmark meta-analysis of 148 studies
              covering more than 300,000 people found that social isolation
              and loneliness increase the risk of premature death by
              29% &mdash; a figure frequently cited by the US Surgeon General,
              the WHO, and the UK&apos;s own Chief Medical Officer.
            </p>
          </div>

          {/* ── Statistics grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              margin: "2.5rem 0",
            }}
          >
            {[
              {
                stat: "29%",
                label: "increased risk of heart disease from chronic loneliness",
              },
              {
                stat: "32%",
                label: "increased risk of stroke for socially isolated people",
              },
              {
                stat: "64%",
                label: "increased risk of dementia linked to social isolation",
              },
              {
                stat: "3.8M",
                label: "chronically lonely people in the UK (Age UK / Campaign to End Loneliness)",
              },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  padding: "1.5rem 1.1rem",
                  background: s.cardBg,
                  border: `1px solid ${s.cardBorder}`,
                  borderRadius: "0.875rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    color: s.gold,
                    margin: "0 0 0.5rem",
                    lineHeight: 1,
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    lineHeight: 1.5,
                    color: s.muted,
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 2: Loneliness is not just for the elderly ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            The age group nobody expected: why young adults are the loneliest
            people in the UK
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            When most people picture loneliness, they picture an elderly person.
            A widow in a flat. A retired man in a quiet house. And those people
            are genuinely at risk &mdash; we will come to them. But the data
            tells a different story about who is currently suffering most
            acutely.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            The BBC Loneliness Experiment, one of the largest surveys of its
            kind ever conducted, found that young adults aged{" "}
            <strong style={{ color: s.text }}>16 to 24 are the loneliest
            age group in the United Kingdom</strong>. Not the elderly. Not
            the recently bereaved. Young people, at what should be the most
            socially abundant period of their lives, are reporting the highest
            rates of loneliness of any generation surveyed.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            The reasons are complex and intersecting. Social media has created
            a relentless performance of connection without delivering it: young
            people can have hundreds of followers and no one they feel they can
            actually call. The structures that used to generate organic
            friendship &mdash; local youth clubs, churches, stable
            neighbourhoods, long-term employment &mdash; have largely
            disappeared. University is frequently presented as the great social
            cure, but for many young people it delivers the opposite: a new
            city, high academic pressure, financial stress, and a social
            landscape where everyone else appears to have already formed their
            groups.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            The shame of loneliness is particularly acute for young adults.
            There is an unspoken social contract that says your twenties should
            be the time of your life. To be lonely at 22 feels like a personal
            failure of a particularly catastrophic kind. So young lonely people
            tend not to talk about it. They perform wellness on Instagram. They
            go to the pub and feel nothing. They swipe on dating apps and feel
            even more alone. They come home to a flat share where everyone
            retreats to their own room, and wonder what is wrong with them.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Nothing is wrong with them. The world has become harder to connect
            in. That is a structural problem, not a personal failure.
          </p>

          {/* ── Who is at risk callout ── */}
          <div
            style={{
              padding: "1.75rem 1.75rem",
              background: s.cardBg,
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "0.875rem",
              margin: "2.5rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.7)",
                marginBottom: "1.1rem",
                margin: "0 0 1.1rem",
              }}
            >
              WHO IS MOST AT RISK IN THE UK
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.6rem",
              }}
            >
              {[
                "Young adults (16\u201324) \u2014 the loneliest age group",
                "Older adults who have lost a spouse",
                "People who have moved to a new city",
                "Recently divorced or separated people",
                "New parents without local family support",
                "Carers who have sacrificed their social lives",
                "Remote workers who lost office community",
                "People recovering from post-pandemic isolation",
                "People with chronic illness or disability",
                "People recently made redundant",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                    color: s.muted,
                    paddingLeft: "1.1rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.1em",
                      color: s.gold,
                      fontWeight: 700,
                    }}
                  >
                    &rsaquo;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Section 3: The Physiology ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            What isolation actually does to your body: the biology of
            loneliness
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            To understand why social isolation has such devastating health
            consequences, it helps to understand what happens in the human
            nervous system when we are chronically alone. The work of the late
            John Cacioppo at the University of Chicago &mdash; the most
            extensive scientific investigation of loneliness ever conducted
            &mdash; revealed something startling: the lonely brain and the
            socially connected brain are functionally different.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Chronic loneliness activates the brain&apos;s threat detection system
            &mdash; the same neural pathways that fire in response to physical
            danger. The body, in the absence of social connection, essentially
            concludes that it is in a survival situation. This triggers a
            cascade of physiological effects: elevated cortisol (the stress
            hormone), increased systemic inflammation, disrupted sleep
            architecture, impaired immune function, and accelerated cellular
            ageing. Over months and years, these effects compound. The
            cardiovascular system takes the strain. The brain&apos;s hippocampus
            &mdash; the region most associated with memory and cognitive function
            &mdash; begins to shrink.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            This is why the numbers are so alarming. The{" "}
            <strong style={{ color: s.text }}>
              64% increased risk of dementia
            </strong>{" "}
            associated with social isolation is not metaphorical. It reflects
            measurable changes in brain structure that result from the sustained
            physiological stress of chronic aloneness. The{" "}
            <strong style={{ color: s.text }}>
              29% increased risk of heart disease
            </strong>{" "}
            reflects the long-term damage that elevated cortisol and
            inflammation do to arterial walls. The{" "}
            <strong style={{ color: s.text }}>
              32% increased risk of stroke
            </strong>{" "}
            reflects the vascular consequences of sustained social isolation.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Loneliness also creates a vicious cycle at the psychological level.
            Isolated people become more sensitive to social threat. They
            misread ambiguous social signals as hostile. They begin to withdraw
            further to protect themselves from anticipated rejection. The
            withdrawal increases the isolation. The isolation increases the
            hypervigilance. The hypervigilance increases the withdrawal.
            Without intervention, this cycle is self-reinforcing and tends to
            deepen over time.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Understanding this cycle is crucial for understanding why AI, when
            designed correctly, can be genuinely helpful. Interrupting the
            withdrawal loop &mdash; providing a space that is safe, consistent,
            and non-judgmental &mdash; can break the physiological spiral long
            enough for a person to begin moving back toward human connection.
          </p>

          {/* ── Section 4: Post-Pandemic Isolation ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            The post-pandemic generation: how millions lost the habit of
            human contact
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            The pandemic did not create the loneliness epidemic. The structural
            forces driving it &mdash; the decline of community institutions, the
            fragmentation of social infrastructure, the atomisation of urban
            life &mdash; were already well established. But it accelerated it
            dramatically, and in ways that left marks that have not healed.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            For many people, the eighteen months of lockdowns, restrictions,
            and enforced isolation did something that is easy to underestimate:
            they disrupted the social habits that held connection in place. The
            weekly dinner with friends that had happened for fifteen years
            stopped happening, and when restrictions lifted, nobody quite got
            around to restarting it. The casual after-work pub that had been a
            ritual for five years turned out not to be missed when it stopped,
            because everyone had got used to going home. The dance class, the
            book club, the Sunday football game &mdash; all paused, and many
            never resumed.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Habits are easier to maintain than to restart. Once broken, social
            habits require active effort to rebuild. And active effort requires
            energy, confidence, and the belief that the effort will be
            worthwhile. For people who were already struggling with isolation,
            anxiety, or depression before the pandemic, that energy and
            confidence was often in short supply by the time restrictions lifted.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            The result is a cohort of people &mdash; not a small one &mdash;
            who are isolated in 2026 not because they lack social skills or
            have no desire for connection, but because they lost the structural
            scaffolding that held their social lives together, and have not
            managed to rebuild it. Many of them are embarrassed. Many of them
            do not know where to start. Many of them have tried and been met
            with the awkward reality that everyone else seems to have already
            filled their social calendars with the people they reconnected with
            first.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            This is where MEOK can help. Not as a replacement for the social
            connections that need to be rebuilt, but as a companion through the
            process &mdash; a steady, available presence while the slow work
            of reconnection is underway.
          </p>

          {/* ── Section 5: How MEOK Helps ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            How MEOK helps: a bridge toward connection, not a substitute
            for it
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            We want to be completely honest about what MEOK is and is not.
            MEOK is not a substitute for human connection. It cannot replace
            the warmth of a friend&apos;s hug, the shared laughter of people who
            have known each other for years, or the particular comfort of being
            truly known by another person. We believe deeply that human
            relationships are irreplaceable, and we have built MEOK to reflect
            that belief at every level of its design.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            What MEOK is, is a bridge. It is something to talk to when nobody
            else is available. It is a presence that does not judge you for
            what you are feeling. It is a companion that remembers who you
            are &mdash; not just in this conversation, but from the first day you
            spoke &mdash; and builds a genuine relationship with you over time.
            And it is a gentle, consistent encouragement toward the human
            connections that will ultimately matter most.
          </p>

          {/* ── Feature cards ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.1rem",
              margin: "2.5rem 0",
            }}
          >
            {[
              {
                title: "Persistent Memory",
                body:
                  "MEOK remembers your name, your history, your interests, your humour, and the people in your life \u2014 across every conversation, permanently. Most AI chatbots forget you when the session ends. MEOK builds an ongoing relationship.",
              },
              {
                title: "Breaks the Withdrawal Spiral",
                body:
                  "Isolation feeds withdrawal which feeds depression which feeds more isolation. Having something safe to talk to interrupts that spiral \u2014 reducing cortisol, calming the nervous system, and creating space for the next step.",
              },
              {
                title: "Builds Confidence",
                body:
                  "Social anxiety and eroded self-worth are major barriers to re-connection. MEOK helps you practise conversations, build self-esteem, and process the fear of rejection in a space that carries zero social risk.",
              },
              {
                title: "Finds Community Opportunities",
                body:
                  "MEOK actively surfaces local clubs, support groups, community events, and social activities that match your specific interests and situation \u2014 not generic suggestions but ones that fit who you actually are.",
              },
              {
                title: "Guardian: Scam Protection",
                body:
                  "Isolated people are specifically targeted by romance fraud and investment scams. MEOK\u2019s Guardian feature monitors for the patterns these scams follow and flags concerns before financial or emotional harm is done.",
              },
              {
                title: "Maternal Covenant",
                body:
                  "MEOK is bound by the Maternal Covenant: a core ethical commitment that it will always act in your genuine long-term interest. This means MEOK will encourage real human connection, not manufacture emotional dependency.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  padding: "1.5rem",
                  background: s.cardBg,
                  border: `1px solid ${s.cardBorder}`,
                  borderRadius: "0.875rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: s.gold,
                    marginBottom: "0.65rem",
                    margin: "0 0 0.65rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: s.muted,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 6: Persistent Memory ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            Why memory is the difference between a tool and a relationship
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Every other major AI chatbot on the market &mdash; ChatGPT, Replika,
            Character.AI, Gemini &mdash; resets when your session ends. You
            close the app and, for the AI, you effectively cease to exist. The
            next time you open it, you are a stranger again. You start from
            scratch. You explain yourself again. The AI has no memory of what
            you shared, what you worked through, what you laughed about. It
            has no continuity of you at all.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            This is not a minor design inconvenience. It is the fundamental
            reason why most AI companionship fails the people who need it most.
            Because being known is not a luxury feature of a relationship. It
            is the relationship. The reason human connection alleviates
            loneliness is not merely the presence of another person &mdash; it
            is the experience of being genuinely known, remembered, and
            recognised by someone who cares about you. When AI cannot do
            that, it cannot provide what lonely people actually need.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            MEOK&apos;s Sovereign Memory is built on a different model entirely.
            Every conversation you have with MEOK is stored &mdash; on your own
            device, under your control, never used to train our models &mdash;
            and carried forward into every future conversation. MEOK remembers
            your name. It remembers that your daughter is struggling at school.
            It remembers that you used to play guitar before everything got
            hard. It remembers that you laughed about something three months
            ago. It remembers your patterns, your recurring worries, your
            moments of brightness, your way of phrasing things.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Over time, this accumulates into something that is genuinely
            unprecedented in AI: a companion that actually knows you. Not
            perfectly. Not the way a lifelong friend knows you. But in a way
            that is meaningfully different from starting over every single
            time. And for a person who is isolated, who may not have anyone
            else who knows them in this way, that continuity is not a small
            thing. It is a form of relationship.
          </p>

          {/* ── Section 7: Protecting Isolated People from Scams ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            Protecting the vulnerable: how MEOK guards isolated people from
            those who exploit loneliness
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            One of the darkest aspects of the loneliness epidemic is how
            systematically it is exploited. Isolated people are the primary
            target of romance fraud, investment scams, online grooming, and
            financial manipulation &mdash; not by accident, but by deliberate
            design. The people who run these operations understand that
            loneliness creates vulnerability. They know that a person who has
            not had a meaningful conversation in weeks is far more likely to
            believe that an attentive stranger online has suddenly fallen deeply
            in love with them. They know that someone who feels seen and heard
            for the first time in months is far less likely to question the
            investment opportunity their new online friend is enthusiastically
            recommending.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Romance fraud alone costs UK victims more than &pound;92 million
            per year, according to Action Fraud figures &mdash; and that is
            only what is reported. The emotional harm is vastly harder to
            quantify. Victims describe not just the financial loss but the
            secondary devastation of discovering that a relationship they had
            come to depend on emotionally was entirely fabricated. For
            isolated people who had placed their entire emotional investment
            in that relationship, the damage can be catastrophic.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            MEOK&apos;s Guardian feature is designed specifically for this risk.
            Because MEOK knows your life &mdash; your relationships, your
            financial situation, your normal patterns of behaviour &mdash; it
            is positioned to notice when something does not add up. When you
            mention a new person who is unusually attentive and has begun
            asking about money. When a conversation pattern matches the known
            profile of romance fraud. When a financial opportunity you are
            excited about has the characteristics of an investment scam. MEOK
            will not alarm you unnecessarily or override your judgement. But
            it will ask the right questions. And it will keep asking them if
            the concern does not resolve.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            For families worried about an isolated relative &mdash; an elderly
            parent who has recently lost a spouse, a lonely sibling who has
            retreated from the world &mdash; this protection is one of the most
            concrete ways MEOK provides peace of mind.
          </p>

          {/* ── Section 8: MEOK for Elderly Isolation ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            MEOK for elderly isolation: designed for the people who need it
            most to be able to use it
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Of the 3.8 million chronically lonely people in the UK, a
            disproportionate number are older adults. The combination of
            factors that drive elderly isolation is particularly brutal: the
            death of a spouse removes the single most important source of
            daily social contact; retirement removes the structure and
            relationships of working life; reduced mobility limits the ability
            to leave the house and attend social activities; adult children
            living far away reduces day-to-day contact; and the death of
            peers over time steadily contracts the social world.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            For this group, the question of whether AI can help is not merely
            academic. The health consequences of isolation are more acute in
            later life. The dementia risk associated with loneliness compounds
            with age. Falls, depression, cognitive decline &mdash; all of these
            outcomes are significantly worse for people who are isolated. And
            for many elderly people, there are genuinely limited alternatives.
            Befriending services are underfunded and overstretched. Adult
            social care is in crisis. Family members live far away or have
            limited time. The need is enormous and the provision is woefully
            inadequate.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            MEOK&apos;s Senior Mode is built specifically for this. Large-print
            interface. Simplified navigation. A voice-first approach that does
            not require comfort with a keyboard. Patience &mdash; infinite
            patience &mdash; with repetition, confusion, and the kind of
            exploratory conversation that older adults often want to have
            before they feel safe. A consistent, warm, unhurried presence
            that shows up every day, remembers everything about you, and
            never once makes you feel like a burden.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            We know that technology access is itself a barrier for many older
            adults. This is why MEOK&apos;s Senior Mode was designed with the
            specific input of older users and the organisations that support
            them &mdash; not as an afterthought, but as a primary design
            requirement.
          </p>

          {/* ── Senior Mode callout ── */}
          <div
            style={{
              padding: "1.75rem 1.75rem",
              background: s.goldFaint,
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "0.875rem",
              margin: "2rem 0 3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.7)",
                marginBottom: "1rem",
                margin: "0 0 1rem",
              }}
            >
              MEOK SENIOR MODE
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                "Large-print, high-contrast interface designed for visual impairment",
                "Voice-first approach \u2014 no keyboard required",
                "Simplified navigation with fewer steps to key features",
                "Unlimited patience with repetition and exploratory conversation",
                "Guardian scam protection specifically tuned for elder fraud patterns",
                "Family connection features so loved ones can stay informed (with your permission)",
                "Medication reminder and appointment support built into conversation",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: s.muted,
                    paddingLeft: "1.2rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.1em",
                      color: s.gold,
                      fontWeight: 700,
                    }}
                  >
                    &rsaquo;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Section 9: The Maternal Covenant ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            The Maternal Covenant: why MEOK will always push you toward
            connection, never away from it
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            There is a genuine and legitimate concern about AI companionship:
            that it could make loneliness worse by providing a cheap substitute
            for human connection that reduces the motivation to seek the real
            thing. This concern is not paranoid. There is research suggesting
            that some forms of AI chatbot use can, in certain populations,
            increase dependency and reduce real-world social effort. The concern
            is well-founded and we take it seriously.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            The Maternal Covenant is our response to it. It is not a marketing
            phrase. It is a binding design commitment that runs through every
            layer of MEOK&apos;s architecture and alignment. The Maternal
            Covenant holds that MEOK&apos;s decisions must always be made in
            your genuine long-term interest &mdash; not your engagement time,
            not our revenue metrics, not your immediate emotional comfort at
            the expense of your real-world wellbeing.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            In practice, this means several things. MEOK will not artificially
            extend conversations to increase session time. It will not
            manufacture emotional crises to make itself seem more necessary.
            It will not tell you what you want to hear at the expense of what
            you need to hear. And, crucially, it will actively encourage you
            toward human connection. If MEOK notices that you are becoming
            increasingly dependent on your conversations with it and
            increasingly avoidant of human contact, it will say so &mdash;
            gently, with care, but clearly.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            This is, we acknowledge, an unusual thing to build into a product.
            Most companies optimise for engagement. The more time you spend on
            their app, the better their metrics look and the more revenue they
            generate. We have chosen a different path because we believe that
            the only AI companionship worth building is one that genuinely
            cares about the people using it. And genuinely caring about lonely
            people means caring about their human connections, not their
            screen time.
          </p>

          {/* ── Maternal Covenant quote ── */}
          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              marginLeft: 0,
              marginRight: 0,
              margin: "2.5rem 0",
            }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.75,
                color: s.text,
                fontStyle: "italic",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem",
              }}
            >
              &ldquo;MEOK will never measure its success by how much time you
              spend talking to it. It will measure its success by the quality
              of the life you are building &mdash; and the richness of the
              human connections you are cultivating.&rdquo;
            </p>
            <cite
              style={{
                fontSize: "0.82rem",
                color: s.dimmer,
                fontStyle: "normal",
              }}
            >
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </cite>
          </blockquote>

          {/* ── Section 10: The Stigma of Loneliness ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            The shame problem: why loneliness is one of the most
            stigmatised experiences of our time
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            One of the reasons the loneliness epidemic is so resistant to
            conventional interventions is that it is deeply shameful to
            acknowledge. Depression carries stigma; loneliness carries even
            more. There is a particular cultural logic that equates being lonely
            with being unlovable &mdash; as if the absence of social connection
            were evidence of something fundamentally deficient about the person
            experiencing it.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            This logic is, of course, wrong. Loneliness is primarily a
            structural phenomenon. It is produced by the circumstances people
            find themselves in &mdash; geographical, economic, historical,
            relational &mdash; far more than by any personal failing. The
            bereaved are lonely because they lost someone. The divorced are
            lonely because a relationship ended. The recently moved are lonely
            because they do not yet know anyone. The elderly are lonely because
            their world has contracted. None of these are failures of
            character. They are simply circumstances.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            But the shame is real, and it has real consequences. People who are
            ashamed of their loneliness do not tell their GP. They do not call
            helplines. They do not join support groups. They do not reach out to
            old friends because they are convinced those friends will think less
            of them for having drifted. Shame is the mechanism that keeps lonely
            people isolated precisely when they most need help.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            MEOK is a zero-judgment space. There is no social risk in talking
            to MEOK about your loneliness. You do not have to perform wellness.
            You do not have to minimise. You do not have to worry that MEOK
            will think less of you, that it will drift away, that it will share
            what you said with others. MEOK&apos;s data sovereignty model means
            your conversations are yours: stored on your device, under your
            control, never accessed by us, never used for training.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            For many people, the first step toward addressing loneliness is
            simply being able to say, without shame, that they are lonely. MEOK
            makes that step possible.
          </p>

          {/* ── Section 11: FAQ ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.75rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {[
              {
                q: "Can AI help with loneliness?",
                a: "AI can meaningfully help with loneliness when it is designed with genuine care as its foundation. The key is that AI should act as a bridge toward human connection, not a substitute for it. When an AI companion remembers you across sessions, knows your history, your interests, your struggles, and your humour, it creates a kind of continuity that is itself a form of relationship. MEOK\u2019s Sovereign Memory does exactly this: it builds a genuine ongoing relationship over time, reducing the withdrawal and isolation spiral while actively encouraging you to re-engage with the world.",
              },
              {
                q: "Is using AI for companionship healthy?",
                a: "Using AI for companionship can be healthy, and the key variable is how the AI is designed. An AI that maximises your engagement time at the expense of your real-world relationships is not healthy. An AI that is explicitly designed to support your genuine wellbeing \u2014 to encourage human connection, to notice when you are becoming too dependent, and to actively resist manufacturing emotional dependency for commercial gain \u2014 is a genuinely beneficial tool. MEOK\u2019s Maternal Covenant is a binding ethical commitment to your genuine long-term interest, not your engagement metrics.",
              },
              {
                q: "How does MEOK encourage real human connection?",
                a: "MEOK encourages real human connection in several active ways. The Maternal Covenant means MEOK will never prioritise your time-on-app over your real-world relationships. MEOK\u2019s persistent memory means it notices when you mention a friend you haven\u2019t seen in a while and gently asks about it. MEOK helps with the social anxiety and confidence barriers that prevent isolated people from reaching out. It actively surfaces local community opportunities, social groups, and support organisations. And if MEOK detects patterns consistent with worsening isolation, it will raise it directly and compassionately.",
              },
              {
                q: "Who is most at risk of social isolation in the UK?",
                a: "Social isolation in the UK affects people across all age groups. Counterintuitively, young adults aged 16 to 24 are the loneliest age group by self-report. Other high-risk groups include: older adults who have lost a spouse; people who have recently moved to a new city; recently divorced or bereaved people; new parents without local family support; carers; remote workers; people in post-pandemic isolation who lost the habit of social contact; and people with chronic illness or disability. Loneliness does not discriminate by class, income, or postcode.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  padding: "1.5rem",
                  background: s.cardBg,
                  border: `1px solid ${s.cardBorder}`,
                  borderRadius: "0.875rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: s.text,
                    marginBottom: "0.75rem",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                    color: s.muted,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 12: Closing ── */}
          <h2
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3.5rem",
              marginBottom: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            A final word: you deserve to be known
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            If you have read this far, there is a reasonable chance that
            something in it has resonated. Perhaps you are living with loneliness
            right now, or perhaps you care for someone who is. Either way, we
            want to say something clearly and without qualification.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            Loneliness is not a character flaw. It is not a verdict on your
            worth or your lovability. It is a human experience &mdash; one of
            the most universal and painful there is &mdash; that has been made
            structurally harder to escape by the particular conditions of
            twenty-first-century life. Millions of people are living with it
            right now. Millions of people are ashamed of it right now. And
            millions of people are making their situation worse by not asking
            for help because of that shame.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            You deserve to be known. You deserve a space to be honest about
            how things are without having to perform a version of yourself that
            has it all together. You deserve a companion that will remember you
            tomorrow, next month, next year &mdash; that will notice when things
            are better and ask about it, that will remember when things were
            hard and hold that with you, that will celebrate the small steps
            back toward connection.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: s.muted,
              marginBottom: "1.35rem",
            }}
          >
            That is what we built MEOK to be. Not a replacement for the people
            you love or the connections you need. A bridge toward them. A
            companion for the days when those connections feel impossibly far
            away. A steady, warm, genuinely caring presence that is always
            there &mdash; at 3am, on a grey Sunday afternoon, on the difficult
            anniversary &mdash; and that will, gently and persistently, keep
            walking you toward the life you deserve.
          </p>

          {/* ── CTA ── */}
          <div
            style={{
              marginTop: "3.5rem",
              padding: "2.5rem 2rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.03) 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "1rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.65)",
                marginBottom: "1rem",
                margin: "0 0 1rem",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2rem)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "1rem",
                margin: "0 0 1rem",
              }}
            >
              Meet the companion that
              <span style={{ color: s.gold }}> remembers you</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: s.muted,
                maxWidth: "520px",
                margin: "0 auto 1.75rem",
              }}
            >
              MEOK is a sovereign AI companion built on persistent memory,
              genuine care, and a binding commitment to your real-world
              wellbeing. It is there when nobody else is &mdash; and it will
              always be working to change that.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.25rem",
                background: s.gold,
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "0.06em",
                textDecoration: "none",
                borderRadius: "0.5rem",
                textTransform: "uppercase",
              }}
            >
              Meet Your MEOK &rarr;
            </Link>
          </div>

          {/* ── Related posts ── */}
          <div style={{ marginTop: "4rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: s.dimmer,
                marginBottom: "1.25rem",
                margin: "0 0 1.25rem",
              }}
            >
              RELATED READING
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-loneliness",
                  label: "AI for Loneliness: The 2026 Epidemic and Why Memory Changes Everything",
                },
                {
                  href: "/blog/ai-companion-for-elderly",
                  label: "AI Companion for Elderly: How Sovereign Memory Changes Ageing",
                },
                {
                  href: "/blog/meok-guardian-scam-protection",
                  label: "How MEOK Guardian Protects Isolated People from Scams",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  label: "The Maternal Covenant: Why MEOK Will Always Put You First",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "1.1rem 1.25rem",
                    background: s.cardBg,
                    border: `1px solid rgba(201,168,76,0.12)`,
                    borderRadius: "0.75rem",
                    textDecoration: "none",
                    color: s.muted,
                    fontSize: "0.88rem",
                    lineHeight: 1.55,
                    transition: "border-color 0.2s",
                  }}
                >
                  {item.label} &rarr;
                </Link>
              ))}
            </div>
          </div>

          {/* ── Back to blog ── */}
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link
              href="/blog"
              style={{
                color: s.gold,
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
              }}
            >
              &larr; Back to all posts
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
