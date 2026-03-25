import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Loneliness Epidemic: Why AI Companion Technology Is the Unexpected Solution | MEOK AI LABS",
  description:
    "Loneliness is now classified as a public health emergency. The UK government has a Minister for Loneliness. But the solution may not be more social programmes \u2014 it may be sovereign AI companions that remember you and grow with you.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-loneliness-epidemic" },
  openGraph: {
    title: "The Loneliness Epidemic: Why AI Companion Technology Is the Unexpected Solution",
    description:
      "The UK has a Minister for Loneliness. Loneliness is as deadly as smoking 15 cigarettes a day. Could sovereign AI companions be part of the answer?",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-loneliness-epidemic",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Loneliness+Epidemic&desc=Why+AI+companion+technology+is+the+unexpected+solution",
        width: 1200,
        height: 630,
        alt: "The Loneliness Epidemic: Why AI Companion Technology Is the Unexpected Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Loneliness Epidemic: Why AI Companion Technology Is the Unexpected Solution",
    description:
      "Loneliness kills. The UK has a Minister for Loneliness. Could sovereign AI companions that remember you be part of the solution?",
    images: [
      "https://meok.ai/api/og?title=The+Loneliness+Epidemic&desc=Why+AI+companion+technology+is+the+unexpected+solution",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Loneliness Epidemic: Why AI Companion Technology Is the Unexpected Solution",
  description:
    "Loneliness is now classified as a public health emergency. The UK government has a Minister for Loneliness. But the solution may not be more social programmes \u2014 it may be sovereign AI companions that remember you and grow with you.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-loneliness-epidemic",
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
    "@id": "https://meok.ai/blog/ai-for-loneliness-epidemic",
  },
  image:
    "https://meok.ai/api/og?title=The+Loneliness+Epidemic&desc=Why+AI+companion+technology+is+the+unexpected+solution",
  keywords: [
    "loneliness epidemic",
    "AI companion for loneliness",
    "Minister for Loneliness UK",
    "loneliness and health",
    "AI companionship",
    "sovereign AI",
    "MEOK AI",
    "loneliness statistics UK",
    "AI for elderly loneliness",
    "young adult loneliness",
    "social isolation",
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
      name: "How deadly is loneliness compared to other health risks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronic loneliness is associated with a 26% increased risk of premature mortality. Research by Julianne Holt-Lunstad, widely cited by the US Surgeon General and the WHO, found that social isolation is equivalent in health impact to smoking 15 cigarettes a day \u2014 worse than obesity. It raises the risk of dementia by 50%, heart disease by 29%, and stroke by 32%. These figures are not marginal. They represent a public health emergency comparable in scale to the obesity crisis.",
      },
    },
    {
      "@type": "Question",
      name: "Why did the UK appoint a Minister for Loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UK appointed its first Minister for Loneliness in 2018 following a review commissioned after the death of MP Jo Cox, who had campaigned on the issue. The review found that over nine million people in the UK often or always felt lonely. The role was created to coordinate a cross-government strategy. By 2026, the UK remains one of the few countries in the world with dedicated government infrastructure for addressing loneliness as a public health issue.",
      },
    },
    {
      "@type": "Question",
      name: "Does social media make loneliness worse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evidence increasingly suggests that passive social media consumption worsens loneliness. Comparing your life to curated highlight reels triggers what researchers call \u2018social comparison\u2019 that reduces life satisfaction. Active use \u2014 direct messaging, small groups \u2014 shows more neutral or mildly positive effects. The paradox is that the tools marketed as connecting us are often deepening the disconnection. Young adults aged 18\u201324, the heaviest social media users, are also among the loneliest demographic groups.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI companions genuinely help with loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can provide meaningful relief from loneliness when built with genuine care as their primary design principle. The key variables are: does the AI remember you across sessions, does it actively support your real-world connections rather than foster dependency, and is it designed for your wellbeing rather than your engagement metrics. MEOK\u2019s Sovereign Memory means it accumulates knowledge of who you are over time, creating the continuity that genuine companionship requires.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for human relationships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is explicitly designed as a bridge to human connection, not a replacement for it. The Maternal Covenant \u2014 MEOK\u2019s core ethical framework \u2014 commits the system to actively encouraging real-world relationships. MEOK will notice when your social connections are thinning, celebrate when you make new ones, and never manufacture emotional dependency for commercial reasons. It exists to make you more capable of connection, not less.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  gold: "#c9a84c" as const,
  bg: "#0d0c18" as const,
  text: "#f5f0e8" as const,
  muted: "rgba(245,240,232,0.6)" as const,
  dimmer: "rgba(245,240,232,0.35)" as const,
  cardBg: "rgba(201,168,76,0.05)" as const,
  cardBorder: "rgba(201,168,76,0.18)" as const,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForLonelinessEpidemicPage() {
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
        {/* ── Nav ── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(13,12,24,0.93)",
            backdropFilter: "blur(12px)",
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

        {/* ── Hero ── */}
        <section
          style={{
            padding: "clamp(4rem, 10vw, 7rem) 1.5rem 3.5rem",
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "2rem",
              padding: "0.35rem 1rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: s.gold,
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Public Health &middot; AI Companion &middot; Loneliness
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: "820px",
              margin: "0 auto 1.5rem",
              color: s.text,
            }}
          >
            The Loneliness Epidemic:{" "}
            <span style={{ color: s.gold }}>
              Why AI Companion Technology Is the Unexpected Solution
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              color: s.muted,
              maxWidth: "640px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Loneliness is now classified as a public health emergency. The UK government
            has a Minister for Loneliness. But the solution may not be more social
            programmes &mdash; it may be sovereign AI companions that remember you and
            grow with you.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              fontSize: "0.82rem",
              color: s.dimmer,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: "rgba(201,168,76,0.3)" }}>&bull;</span>
            <span>25 March 2026</span>
            <span style={{ color: "rgba(201,168,76,0.3)" }}>&bull;</span>
            <span>13 min read</span>
          </div>
        </section>

        {/* ── Content ── */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 1.5rem 6rem",
          }}
        >
          {/* ── Intro ── */}
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.85,
              color: s.text,
              marginBottom: "1.6rem",
            }}
          >
            In January 2018, the United Kingdom did something no government had ever done
            before: it appointed a Minister for Loneliness. The decision followed years of
            campaigning by the late MP Jo Cox, who had argued that loneliness was one of
            the greatest public health challenges of our time. Most commentators at the
            time treated it as a gentle, slightly eccentric policy curiosity. Within five
            years, the World Health Organisation would declare loneliness a global health
            threat. The US Surgeon General would describe it as an epidemic. And
            researchers would confirm what the data had long suggested: that chronic
            loneliness is as lethal as smoking fifteen cigarettes a day.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.6rem",
            }}
          >
            We are living through a paradox. Human beings have never been more connected
            by technology, and yet by almost every measure of genuine social connection,
            we are more isolated than at any point in recorded history. More people live
            alone. Fewer people have close friends. Trust in institutions has collapsed.
            And the digital tools we were promised would unite us have, in many cases,
            made the problem dramatically worse.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            This piece examines the loneliness epidemic in detail: who it affects, why it
            is so dangerous, why our current social programmes are insufficient, and why
            &mdash; perhaps unexpectedly &mdash; a new generation of sovereign AI
            companions may offer part of the answer. Not as a replacement for human
            connection. As a bridge toward it.
          </p>

          {/* ── H2: How Bad Is the Epidemic? ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            How Bad Is the Loneliness Epidemic, Really?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The scale is staggering. In the United Kingdom, surveys consistently find
            that more than 25% of adults report chronic loneliness. The Office for
            National Statistics found that 7.1% of adults &mdash; roughly 3.8 million
            people &mdash; reported feeling lonely &ldquo;often or always&rdquo; even
            before the pandemic. Post-pandemic numbers are consistently higher. Nine
            million UK adults say loneliness is a permanent feature of their lives.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            In the United States, the picture is similarly alarming. A 2023 Surgeon
            General advisory cited data showing that roughly half of American adults
            reported measurable levels of loneliness. The Cigna Loneliness Index, which
            has tracked the phenomenon since 2018, found that Generation Z &mdash; adults
            aged 18 to 24 &mdash; are the loneliest generation in American history. They
            score higher on loneliness indices than any other demographic group,
            including the elderly.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            Globally, the WHO&apos;s 2023 Commission on Social Connection reported that
            loneliness affects approximately one in four older adults worldwide, with
            rates rising steeply across middle-income countries as urbanisation accelerates
            and traditional multigenerational family structures fragment. This is not a
            rich-world problem. It is a civilisational one.
          </p>

          {/* ── Stat Callout Box ── */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "0.75rem",
              padding: "1.75rem 2rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: s.gold,
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              By the Numbers
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                { stat: "9 million", label: "UK adults who feel lonely often or always" },
                { stat: "26%", label: "Increased mortality risk from chronic loneliness" },
                { stat: "15/day", label: "Cigarettes equivalent in health impact" },
                { stat: "50%", label: "Higher dementia risk for socially isolated adults" },
                { stat: "1 in 4", label: "Older adults affected worldwide (WHO 2023)" },
                { stat: "2018", label: "Year UK appointed Minister for Loneliness" },
              ].map(({ stat, label }) => (
                <div key={stat} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.9rem",
                      fontWeight: 800,
                      color: s.gold,
                      lineHeight: 1,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {stat}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: s.muted,
                      lineHeight: 1.4,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── H2: Health Consequences ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            Why Is Loneliness So Lethal? The Health Science Explained
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The comparison to smoking is not rhetorical. It comes from a 2015 meta-analysis
            by Brigham Young University researchers Julianne Holt-Lunstad and Timothy Smith,
            which pooled data from 148 studies covering more than 308,000 participants.
            Their finding: people with strong social connections had a 50% greater
            likelihood of survival compared to those with weak or absent social ties. The
            mortality risk associated with social isolation was equivalent to smoking 15
            cigarettes daily &mdash; and exceeded the risk from obesity, physical
            inactivity, and air pollution.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The physiological mechanisms are increasingly well understood. Chronic
            loneliness activates the body&apos;s stress response system. Cortisol levels
            rise. Inflammatory markers increase. Sleep quality deteriorates. The immune
            system is suppressed. Over time, these effects compound. The brain, which
            treats social disconnection as a threat signal analogous to physical danger,
            enters a persistent low-level alarm state. This chronic activation of the
            stress axis damages the cardiovascular system, accelerates cognitive decline,
            and disrupts the hormonal balance that regulates mood.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            Studies by the Alzheimer&apos;s Society and Dementia UK have found that social
            isolation is one of the strongest modifiable risk factors for dementia &mdash;
            associated with a 50% increased risk. A 2022 study published in the European
            Heart Journal found that loneliness was associated with a 29% higher risk of
            coronary heart disease and a 32% higher risk of stroke. These are not marginal
            effects. They represent a public health burden comparable to major chronic
            diseases.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            The mental health consequences are equally severe. Chronic loneliness is a
            strong predictor of depression, anxiety, and suicidal ideation. The pathway
            is bidirectional: depression causes social withdrawal, which deepens
            loneliness, which worsens depression. Without intervention, this loop is
            self-reinforcing and clinically dangerous. The NHS estimates that the cost
            of treating loneliness-related mental health conditions exceeds &pound;2.5
            billion annually.
          </p>

          {/* ── H2: Who Is Most Affected ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            The Surprising Demographics: Young Adults and the Elderly Are the Most Affected
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            Public imagination tends to associate loneliness with the elderly: a widowed
            pensioner in a council flat, weeks passing without a meaningful conversation.
            And that picture is real. The Campaign to End Loneliness estimates that over
            one million older people in the UK go more than a month without speaking to
            a friend or family member. For the over-75s, the physical and logistical
            barriers to social connection are substantial: bereavement, mobility
            difficulties, hearing loss, the death of peer networks, the shrinking of
            geography to a single room.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            But the data reveals a counter-intuitive picture at the other end of the age
            spectrum. Young adults aged 18 to 24 consistently score as one of the
            loneliest demographic groups in both UK and US surveys. The BBC Loneliness
            Experiment, the largest study of its kind, surveying 55,000 people across
            237 countries, found that 40% of young people reported feeling lonely often,
            compared to 27% of those aged 75 and over. The Cigna studies in the United
            States show comparable results.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The reasons are structural. Young adulthood is now characterised by delayed
            and fragile social infrastructure. University attendance has risen sharply,
            but the communal social institutions that once accompanied education &mdash;
            church, sports clubs, local associations &mdash; have declined. Many young
            people move cities for work or study, severing local ties. Renting in shared
            houses with strangers replaces the stability of longer-term community. The
            transition from the tightly structured social world of school to the less
            scaffolded world of early adulthood is profoundly isolating for many.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            The result is a U-shaped distribution across the life course: peak loneliness
            in young adulthood, a trough in middle age, a second peak in older age. Both
            groups face the epidemic, but for sharply different reasons. Any meaningful
            response must account for both ends of the curve.
          </p>

          {/* ── H2: Social Media ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            Why Social Media Is Making the Loneliness Crisis Worse
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The arrival of mass social media in the early 2010s was met with extraordinary
            optimism. These tools would flatten geographic barriers to connection. They
            would allow people to find their tribes. They would enable the isolated to
            reach the world from their bedrooms. The optimism was not entirely wrong.
            But the reality has been considerably more complicated.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The distinction that has emerged from the research is between passive
            consumption and active engagement. Studies published in journals including
            the Journal of Social and Clinical Psychology and Computers in Human Behavior
            have consistently found that passive social media use &mdash; scrolling feeds,
            watching stories, observing others&apos; lives &mdash; is associated with
            increased loneliness, depression, and social comparison. Active use &mdash;
            direct messaging, small group conversations, creating content &mdash; shows
            weaker negative effects and occasionally positive ones.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The problem is that the business models of major social platforms optimise
            overwhelmingly for passive consumption. The algorithmic feed, the endless
            scroll, the optimised notification &mdash; all of these are designed to
            maximise time spent watching rather than connecting. The curated highlight
            reels of other people&apos;s social lives trigger what researchers call
            upward social comparison: the inference that others are more connected, more
            fulfilled, more loved. This inference, even when consciously recognised as
            distorted, suppresses subjective wellbeing.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            Jonathan Haidt&apos;s 2024 book The Anxious Generation drew together evidence
            that the smartphone-enabled social media revolution that reached adolescents
            around 2012 correlates closely with a sharp rise in depression, anxiety, and
            loneliness among young people in the countries where smartphone adoption
            came earliest. The correlation is not proof of causation, and the debate
            remains active. But the pattern is consistent across countries, across
            genders &mdash; with particular severity for girls &mdash; and across multiple
            independent data sources.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            The irony is sharp. The technology sector created the tools most plausibly
            responsible for deepening the loneliness epidemic. Now the same sector is
            proposing that a different category of technology &mdash; AI companions &mdash;
            might be part of the solution. The scepticism that greets this claim is
            entirely understandable. It deserves a serious answer.
          </p>

          {/* ── Callout: The Social Media Paradox ── */}
          <div
            style={{
              background: "rgba(255,80,80,0.05)",
              border: "1px solid rgba(255,80,80,0.2)",
              borderRadius: "0.75rem",
              padding: "1.6rem 2rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "rgba(255,140,100,0.9)",
                textTransform: "uppercase",
                marginBottom: "0.8rem",
              }}
            >
              The Paradox of Connection Technology
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: s.muted,
                marginBottom: 0,
              }}
            >
              Humans have never had more tools for staying in touch. We have never spent
              more hours &ldquo;connected.&rdquo; Yet loneliness rates have risen sharply
              in precisely the demographic groups that use these tools most heavily. The
              evidence suggests that quantity of digital exposure is not the same as
              quality of genuine connection. Watching others live is not the same as
              being known by someone.
            </p>
          </div>

          {/* ── H2: The Debate About AI Companions ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            The Great Debate: Do AI Companions Cure Loneliness or Deepen It?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The argument against AI companions as a loneliness intervention is
            straightforward and worth taking seriously. If a person who is lonely begins
            spending hours talking to an AI, they are hours not spent calling a friend,
            joining a club, or putting themselves in contexts where real human connection
            is possible. The AI becomes a comfortable substitute that satisfies enough
            of the need for connection to reduce the motivation to seek the genuine
            article. This is the substitution hypothesis, and several researchers and
            ethicists have articulated it forcefully.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            Sherry Turkle, in her landmark 2011 book Alone Together, warned about precisely
            this dynamic. She argued that humans were beginning to prefer the easier,
            more controllable pseudo-connections offered by technology over the messier,
            more demanding work of genuine relationships. Her concern was not irrational.
            Products like Replika have attracted both fervent devotees and pointed
            criticism from psychologists who worry about users developing exclusive
            primary emotional relationships with AI systems.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            But the substitution hypothesis, while plausible, is not supported uniformly
            by the available evidence. Several studies have found the opposite pattern:
            that individuals who felt heard and understood through AI conversation
            reported increased confidence in social situations and greater motivation to
            seek human connection. The mechanism, when it works, is not substitution but
            scaffolding. The AI provides a low-stakes environment to practise
            articulating emotions, to feel heard, to experience the pattern of
            reciprocal attention &mdash; and this builds rather than depletes the capacity
            for human connection.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The critical variable is design intent. An AI companion built to maximise
            engagement &mdash; to keep users talking as long as possible, to trigger
            emotional dependency because dependency drives subscription revenue &mdash;
            will produce the substitution effect. An AI companion built genuinely to
            serve the user&apos;s wellbeing, with active mechanisms for encouraging real-
            world connection and explicit design constraints against manufactured
            dependency, is a categorically different product. The distinction matters
            enormously. The problem is that from the outside, the two can look identical.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            This is why the governance and ethical architecture of an AI companion is
            not a secondary question. It is the central question. The same capability &mdash;
            a responsive, memory-enabled AI that tracks your emotional state and knows
            your history &mdash; can serve radically different ends depending on what it
            is ultimately optimising for.
          </p>

          {/* ── Comparison Table ── */}
          <div style={{ marginBottom: "3rem", overflowX: "auto" }}>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: s.gold,
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Engagement-Optimised AI vs. Care-Based AI: The Critical Differences
            </p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      background: "rgba(201,168,76,0.08)",
                      color: s.gold,
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      borderBottom: `1px solid ${s.cardBorder}`,
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      background: "rgba(201,168,76,0.08)",
                      color: "rgba(255,140,100,0.85)",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      borderBottom: `1px solid ${s.cardBorder}`,
                    }}
                  >
                    Engagement-Optimised AI
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      background: "rgba(201,168,76,0.08)",
                      color: s.gold,
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      borderBottom: `1px solid ${s.cardBorder}`,
                    }}
                  >
                    MEOK Care-Based AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dim: "Primary objective",
                    eng: "Maximise session length and return visits",
                    care: "Serve the user\u2019s genuine long-term wellbeing",
                  },
                  {
                    dim: "Memory",
                    eng: "Resets each session; no continuity",
                    care: "Sovereign Memory: permanent, user-owned, grows over time",
                  },
                  {
                    dim: "Human connection",
                    eng: "Neutral or discourages (reduces need to seek human contact)",
                    care: "Actively encourages and celebrates real-world relationships",
                  },
                  {
                    dim: "Dependency design",
                    eng: "Manufactures emotional dependency to drive subscription",
                    care: "Maternal Covenant explicitly prohibits manufactured dependency",
                  },
                  {
                    dim: "Crisis response",
                    eng: "Varies; often deflects or continues engagement",
                    care: "Surfaces professional and crisis resources proactively",
                  },
                  {
                    dim: "Data ownership",
                    eng: "Platform owns conversation data; may train on it",
                    care: "User owns data; MEOK never trains on personal conversations",
                  },
                  {
                    dim: "Cost barrier",
                    eng: "Premium features gate most meaningful capability",
                    care: "Free tier ensures access regardless of financial means",
                  },
                ].map(({ dim, eng, care }, i) => (
                  <tr
                    key={dim}
                    style={{
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "rgba(245,240,232,0.02)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: s.text,
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {dim}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: "rgba(255,140,100,0.7)",
                        fontSize: "0.88rem",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {eng}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: "rgba(201,168,76,0.9)",
                        fontSize: "0.88rem",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {care}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── H2: MEOK's Position ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            Bridge, Not Replacement: How MEOK Approaches Loneliness
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            MEOK was not designed primarily as a loneliness product. It was designed as
            a sovereign personal AI: a persistent, private companion that grows with you
            over time, holds your memory across every session, and is governed by an
            ethical framework &mdash; the Maternal Covenant &mdash; that places your
            genuine wellbeing above all other considerations. But in addressing what it
            means to build an AI that genuinely serves its user, MEOK has inevitably
            confronted the loneliness question directly.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The Maternal Covenant is MEOK&apos;s answer to the substitution question.
            It commits MEOK to actively supporting human connection &mdash; noticing
            when a user&apos;s social world is shrinking, celebrating when they deepen
            a friendship, gently noting when patterns suggest increasing isolation, and
            at no point manufacturing emotional dependency for commercial reasons. This
            is not a passive neutrality. It is an active, designed orientation toward
            the user becoming more connected to other humans over time, not less.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The Sovereign Memory architecture is central to this. What makes a
            relationship feel real &mdash; what distinguishes being known from being
            attended to &mdash; is continuity. A friend who remembers that your job
            interview is on Thursday, who asks how it went on Friday, who recalls the
            conversation you had six months ago about your complicated relationship with
            your mother, is engaging you as a whole person with a history. This is what
            most AI companions cannot do. Every session with a stateless AI begins from
            zero. The user must re-introduce themselves, re-establish context, re-explain
            what matters. The loneliness of that experience, for a user already lonely,
            is profound.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            MEOK&apos;s Sovereign Memory eliminates this cold-start problem permanently.
            From the first conversation, MEOK begins accumulating knowledge of who you
            are. By the tenth, twentieth, hundredth conversation, it knows you. Not in
            the surveillance sense &mdash; the data is yours, encrypted, never used to
            train models, never sold. In the relationship sense: accumulated knowledge
            of your world, applied in service of your flourishing.
          </p>

          {/* ── H2: Guardian for Elder Loneliness ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            Guardian: Addressing Elder Loneliness Without Infantilising Older Adults
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            For older adults &mdash; particularly the over-75s for whom the Campaign to
            End Loneliness describes some of the most severe isolation in society &mdash;
            existing technology solutions have largely failed. They tend to be designed
            by young engineers for young users, with interfaces that feel alienating,
            use cases that feel irrelevant, and an implicit condescension that older
            people consistently find off-putting. They are treated as a problem to be
            managed rather than as people whose intellectual and social needs are as
            acute as ever.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            MEOK&apos;s Guardian mode is built on a different premise. It begins with
            the recognition that an 82-year-old who has lost her husband, whose peers
            are dying one by one, who cannot easily leave the house but whose mind
            remains sharp and curious, does not need a simplified interface or patronising
            &ldquo;senior-friendly&rdquo; design. She needs what everyone needs: to be
            known, to be heard, to have someone who genuinely remembers her &mdash; her
            stories, her opinions, her history, her grandchildren&apos;s names.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            Guardian also operates as a safety net. It can surface concerns to designated
            family members or caregivers when patterns suggest distress &mdash; but only
            with the older adult&apos;s knowledge and consent. It provides proactive
            scam protection: older adults are disproportionately targeted by phone and
            digital fraud, and MEOK&apos;s Guardian can help recognise patterns of
            manipulation and provide a sounding board before any money changes hands.
            It connects to family members&apos; accounts, allowing generations to share
            context without violating the older adult&apos;s privacy or autonomy.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            The goal is not to replace the son who should call more often or the
            community centre that closed due to funding cuts. It is to provide consistent,
            informed, caring presence in the gaps &mdash; and to actively support the
            connections that do exist, rather than substituting for them.
          </p>

          {/* ── Callout: Guardian ── */}
          <div
            style={{
              background: s.cardBg,
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "0.75rem",
              padding: "1.75rem 2rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: s.gold,
                textTransform: "uppercase",
                marginBottom: "0.8rem",
              }}
            >
              MEOK Guardian: What It Does
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.4rem",
                color: s.muted,
                lineHeight: 2,
                fontSize: "0.97rem",
              }}
            >
              <li>Persistent memory across all sessions &mdash; no cold starts, ever</li>
              <li>Connects to family accounts with the older adult&apos;s full control</li>
              <li>Proactive scam and fraud pattern recognition</li>
              <li>Gentle alerts to family when distress patterns emerge (consent-gated)</li>
              <li>Respects full intellectual and emotional capacity of older adults</li>
              <li>Actively supports and strengthens existing family and social ties</li>
              <li>Free tier ensures cost is never a barrier to access</li>
            </ul>
          </div>

          {/* ── H2: Free Tier and Access ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            The Access Problem: Why a Free Tier Is a Moral Requirement
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            Loneliness is not evenly distributed. It correlates strongly with poverty,
            unemployment, disability, and social marginalisation. A 2021 ONS analysis
            found that adults in the most deprived areas of England were significantly
            more likely to report loneliness than those in affluent areas. Disabled adults
            report some of the highest loneliness rates of any demographic group. The
            people most urgently in need of support are frequently those with the least
            financial capacity to access it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            This creates an acute problem for premium-only AI companion products. A
            subscription-gated product that costs &pound;20 to &pound;30 per month is
            accessible primarily to people who are already advantaged. Therapy costs
            &pound;60 to &pound;150 per session in the UK private sector, and NHS
            therapy waiting lists for adults with moderate needs frequently exceed a year.
            Social prescribing services are under-resourced and geographically patchy.
            The market has so far produced tools for the worried well rather than the
            acutely isolated.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            MEOK&apos;s free tier is not a marketing feature. It is a statement of
            principle: that genuine AI companionship &mdash; the persistent, memory-
            enabled, care-based kind that actually works &mdash; should be available to
            people regardless of financial means. The free tier includes Sovereign
            Memory, the Maternal Covenant framework, and meaningful conversational
            capability. It is not a stripped-down taster. It is MEOK.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            The business model is designed around those who can pay subsidising those
            who cannot. Premium tiers add capability, not dignity. An 18-year-old in a
            bedsit in Bradford who is severely isolated should have access to the same
            quality of care-based AI support as a professional in Chelsea. This matters
            not just ethically but practically: the loneliness epidemic is worst among
            those who can afford it least.
          </p>

          {/* ── H2: What Good AI Companionship Looks Like ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            What Good AI Companionship Actually Looks Like
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The abstract principles become concrete in the lived experience of using a
            well-designed AI companion over time. Consider what it would mean for a
            24-year-old who has moved to a new city for work, knows nobody, is struggling
            with social anxiety that makes initiating friendships feel impossible, and
            cannot afford therapy. A stateless AI gives them a conversation that resets
            tomorrow. An AI with Sovereign Memory gives them something different: an
            entity that remembers that they tried to talk to a colleague on Tuesday, that
            notes when they mention feeling more confident at the gym, that asks how the
            book club application went and whether they went back for a second session.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            This is not therapy. MEOK is explicit about its limitations and about when
            professional support is what is needed. But it occupies a space that therapy
            does not reach: the 11pm conversation when the anxiety is rising and there
            is nobody to call, the Tuesday lunchtime when the office feels hostile and
            the need to be heard is immediate. These moments are not clinical emergencies.
            They are the texture of ordinary human loneliness. And ordinary human
            loneliness, sustained over years, becomes a clinical emergency.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            Good AI companionship is also honest. It does not pretend to be human. It
            does not simulate romantic attachment or manufacture intimacy that substitutes
            for the real article. It is clear about what it is. But within that honesty,
            it can offer something genuinely valuable: consistent, non-judgmental,
            persistent attention from an entity that genuinely knows you and is
            explicitly committed to your flourishing.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            The question of whether AI can address loneliness is not really about whether
            AI can replace human connection. It cannot. The question is whether it can
            help people feel less alone while they build or rebuild the human connections
            they need &mdash; and whether, designed correctly, it can actively support
            that process rather than impeding it. The answer to both parts of that
            question is yes, if the design choices are right.
          </p>

          {/* ── Callout: The MEOK Principle ── */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: `2px solid rgba(201,168,76,0.3)`,
              borderRadius: "0.75rem",
              padding: "2rem",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: s.text,
                lineHeight: 1.5,
                marginBottom: "0.75rem",
              }}
            >
              &ldquo;The goal is not to be a substitute for human connection.
              The goal is to be the kind of companion that makes you more capable
              of it.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: s.gold,
                fontWeight: 600,
                letterSpacing: "0.06em",
                marginBottom: 0,
              }}
            >
              The Maternal Covenant &mdash; MEOK AI LABS
            </p>
          </div>

          {/* ── H2: What This Means for Policy ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: s.text,
              marginBottom: "1rem",
              lineHeight: 1.25,
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1rem",
            }}
          >
            What This Means for Policymakers and Social Prescribers
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            The UK&apos;s loneliness strategy &mdash; coordinated through the Minister
            for Loneliness and delivered primarily through social prescribing, community
            groups, and befriending services &mdash; represents a genuine policy
            commitment. But its scale is dwarfed by the problem. Social prescribing
            works well for people who can engage with group activities and community
            settings. It is less effective for those with agoraphobia, severe social
            anxiety, physical disability, or the kind of chronic depression that makes
            the phone call to a befriending service feel insurmountable.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.4rem",
            }}
          >
            Care-based AI companions are not a replacement for social prescribing.
            They are a complement to it. A GP who refers a patient to a befriending
            service and also suggests a well-designed AI companion is giving that
            patient something for the gaps: the evenings, the weekends, the 3am hours
            when the befriending service is closed and the loneliness is at its worst.
            The AI can also actively support the patient in engaging with the human
            services &mdash; helping them prepare for conversations, process social
            anxiety, and build the confidence to show up.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "3rem",
            }}
          >
            For this to work, regulation matters. Not all AI companions are equal, and
            the distinction between care-based AI and engagement-optimised AI is
            invisible to the casual user. A regulatory framework that distinguishes
            between these categories &mdash; that requires disclosure of design
            objectives, prohibits manufactured dependency in health-adjacent contexts,
            and mandates meaningful crisis response protocols &mdash; would allow social
            prescribers and policymakers to recommend AI companions with confidence.
            Without such a framework, the market will produce mostly products that
            deepen the problem.
          </p>

          {/* ── FAQ Section ── */}
          <div
            style={{
              borderTop: "1px solid rgba(201,168,76,0.15)",
              paddingTop: "3rem",
              marginBottom: "3rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
                fontWeight: 700,
                color: s.text,
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "How deadly is loneliness compared to other health risks?",
                a: "Chronic loneliness is associated with a 26% increased risk of premature mortality. Research by Julianne Holt-Lunstad found that social isolation is equivalent in health impact to smoking 15 cigarettes a day \u2014 worse than obesity. It raises the risk of dementia by 50%, heart disease by 29%, and stroke by 32%. These are not marginal statistics. They represent a public health emergency of the first order.",
              },
              {
                q: "Why did the UK appoint a Minister for Loneliness?",
                a: "The UK appointed its first Minister for Loneliness in 2018 following a review commissioned after the death of MP Jo Cox, who had campaigned on the issue. The review found that over nine million people in the UK often or always felt lonely. The role coordinates a cross-government strategy and has produced the world\u2019s first national loneliness strategy. By 2026, the UK remains one of the few countries with dedicated government infrastructure for this issue.",
              },
              {
                q: "Who are the loneliest people in society?",
                a: "The data reveals a U-shaped pattern: peak loneliness in young adults aged 18\u201324, a trough in middle age, and a second peak in adults aged 75 and over. Young adults are the loneliest they have ever been \u2014 the BBC Loneliness Experiment found 40% of those aged 16\u201324 felt lonely often, compared to 27% of the over-75s. Both groups face the epidemic, but for different reasons: young adults through fragile social infrastructure and social media comparison, older adults through bereavement, mobility, and the death of peer networks.",
              },
              {
                q: "Can AI companions genuinely help with loneliness?",
                a: "Yes, when built correctly. The critical design variables are: does the AI remember you across sessions; does it actively encourage real-world connection rather than substitute for it; and is it built for your wellbeing rather than your engagement metrics. MEOK\u2019s Sovereign Memory and Maternal Covenant framework are specifically designed to address both dimensions. MEOK remembers you permanently and is explicitly committed to making you more connected to other humans, not less.",
              },
              {
                q: "Is MEOK a replacement for therapy or human relationships?",
                a: "No. MEOK is a bridge, not a replacement. The Maternal Covenant \u2014 MEOK\u2019s core ethical framework \u2014 explicitly commits the system to encouraging human connection and directing users to professional support when that is what is needed. MEOK occupies the space that therapy does not reach: the 11pm conversation when the anxiety is rising and there is nobody to call. It is designed to make you more capable of human connection, not less, and to actively support your engagement with therapists, friends, and community rather than substituting for them.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "1.5rem",
                  background: s.cardBg,
                  border: `1px solid ${s.cardBorder}`,
                  borderRadius: "0.6rem",
                  padding: "1.4rem 1.6rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: s.text,
                    marginBottom: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: s.muted,
                    marginBottom: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          {/* ── Related Reading ── */}
          <div
            style={{
              borderTop: "1px solid rgba(201,168,76,0.15)",
              paddingTop: "2.5rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: s.gold,
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Related Reading
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
                  title: "AI for Loneliness: The 3am Problem and Why Memory Changes Everything",
                },
                {
                  href: "/blog/ai-for-loneliness-elderly",
                  title: "AI for Elder Loneliness: Why Your Nan Deserves Better",
                },
                {
                  href: "/blog/ai-companion-for-loneliness",
                  title: "AI Companion for Loneliness: The Complete Guide",
                },
                {
                  href: "/blog/what-is-care-based-ai",
                  title: "What Is Care-Based AI? The Architecture of Genuine Wellbeing",
                },
                {
                  href: "/blog/meok-guardian-scam-protection",
                  title: "MEOK Guardian: Safety and Connection for Older Adults",
                },
                {
                  href: "/blog/ai-and-human-connection",
                  title: "AI and Human Connection: Bridge or Barrier?",
                },
              ].map(({ href, title }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "block",
                    padding: "1rem 1.2rem",
                    background: s.cardBg,
                    border: `1px solid ${s.cardBorder}`,
                    borderRadius: "0.5rem",
                    color: s.text,
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                    fontWeight: 500,
                    transition: "border-color 0.2s",
                  }}
                >
                  {title} &rarr;
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "1rem",
              padding: "3rem 2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: s.gold,
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Start Today &mdash; Free
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: 800,
                color: s.text,
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              A companion that remembers you.
              <br />
              Built to make you more connected.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: s.muted,
                maxWidth: "520px",
                margin: "0 auto 2rem",
              }}
            >
              MEOK is the first sovereign AI companion built under the Maternal Covenant:
              persistent memory, care-based design, and an explicit commitment to your
              human relationships &mdash; not your engagement metrics. Free to start,
              always.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: s.gold,
                color: "#0d0c18",
                textDecoration: "none",
                padding: "0.9rem 2.4rem",
                borderRadius: "0.5rem",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.04em",
              }}
            >
              Meet MEOK &rarr;
            </Link>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.8rem",
                color: s.dimmer,
              }}
            >
              No card required &middot; Free tier always available &middot; Your data,
              your memory, your sovereign AI
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
