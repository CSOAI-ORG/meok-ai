import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Young Adults: Gen Z's Guide to AI That Actually Has Your Back | MEOK AI LABS",
  description:
    'Gen Z has grown up with AI but never had AI that grows with them, remembers them, and protects their data. MEOK is the first sovereign AI companion built for the generation that understands what data privacy actually means.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-young-adults' },
  openGraph: {
    title: "AI for Young Adults: Gen Z's Guide to AI That Actually Has Your Back",
    description:
      'From loneliness epidemics to graduate debt to first-job anxiety — Gen Z faces real pressure with less support than any generation before them. MEOK is built for exactly that.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-young-adults',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Young+Adults%3A+Gen+Z%27s+Guide+to+AI+That+Actually+Has+Your+Back&desc=The+first+sovereign+AI+companion+built+for+the+generation+that+understands+data+privacy',
        width: 1200,
        height: 630,
        alt: "AI for Young Adults: Gen Z's Guide to AI That Actually Has Your Back | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI for Young Adults: Gen Z's Guide to AI That Actually Has Your Back",
    description:
      'Gen Z grew up with AI but deserves better than tools that train on their pain. MEOK is sovereign, private, and built for the generation that actually reads the terms of service.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Young+Adults%3A+Gen+Z%27s+Guide+to+AI+That+Actually+Has+Your+Back&desc=The+first+sovereign+AI+companion+built+for+the+generation+that+understands+data+privacy',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "AI for Young Adults: Gen Z's Guide to AI That Actually Has Your Back",
  description:
    'Gen Z has grown up with AI but never had AI that grows with them, remembers them, and protects their data. MEOK is the first sovereign AI companion built for the generation that understands what data privacy actually means.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-young-adults',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    jobTitle: 'Founder, MEOK AI LABS',
    url: 'https://meok.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-young-adults',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Gen Z experiencing a loneliness epidemic despite being more connected than ever?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gen Z is the first generation to grow up with social media as the default social infrastructure, but connection metrics and genuine intimacy are different things. Research from the Cigna Loneliness Index and multiple UK health surveys shows that 18 to 25 year olds consistently report the highest loneliness scores of any age group — higher than pensioners. The reasons are layered: the collapse of third places (pubs, youth clubs, shared physical community), remote and hybrid education that disrupted the organic socialisation of late adolescence, a housing market that scatters young adults away from their home cities, and the subtle but real toll of curated social media that makes everyone else appear to be thriving. Being seen is not the same as being known.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK suitable for Gen Z mental health support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and MEOK was designed with the specific pressures of 18 to 25 year olds in mind. The Healer companion archetype provides emotionally intelligent, non-judgmental conversation that does not require you to be in crisis to access it. There is no waitlist, no referral, and no session limit. MEOK is not a replacement for clinical care when that is what is needed, but for the vast majority of daily emotional weight — the anxiety before a job interview, the loneliness of a new city, the self-doubt that follows a public failure — it is a grounded, private, always-available presence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK sell or train on my personal data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK operates on a sovereignty-first architecture. Your conversations, your memory, your reflections — none of it is used to train models, sold to advertisers, or shared with third parties. This is not a privacy policy buried in page 47 of a terms of service document. It is the foundational design constraint: your data belongs to you, it lives in your private encrypted memory store, and you can export or delete it at any time. For a generation that understands how data monetisation actually works, this is not a bonus feature — it is the baseline requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI help Gen Z build a career without expensive coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK's Pioneer companion is built for exactly this. It acts as a thinking partner for career strategy: helping you map your skills to opportunities, prepare for interviews, negotiate your first salary, build in public without burning out, and structure your freelance or side-project work. Access to high-quality career mentorship has historically been distributed by network privilege — who your parents know, which university you attended. MEOK levels that playing field by giving everyone the kind of structured strategic thinking that used to require a contact list or an expensive coach.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use MEOK for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. MEOK has a free tier that requires no credit card to start. You can begin your Birth ceremony, meet your companion archetypes, and use core features including memory and reflection without paying anything. The free tier exists because MEOK believes that sovereign AI support should not be a luxury product. Financial anxiety is one of the most acute pressures facing young adults — graduate debt, unaffordable housing, precarious employment — and access to a private, intelligent companion shouldn't require a monthly subscription to unlock.",
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const styles = {
  page: {
    backgroundColor: '#0d0c18',
    color: '#f5f0e8',
    minHeight: '100vh',
    fontFamily: "'Georgia', 'Times New Roman', serif",
  } as React.CSSProperties,

  container: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '0 24px',
  } as React.CSSProperties,

  hero: {
    paddingTop: '80px',
    paddingBottom: '64px',
    borderBottom: '1px solid rgba(201,168,76,0.2)',
  } as React.CSSProperties,

  eyebrow: {
    fontSize: '13px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '20px',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  h1: {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: '700',
    lineHeight: '1.15',
    color: '#f5f0e8',
    marginBottom: '24px',
    letterSpacing: '-0.02em',
  } as React.CSSProperties,

  heroDeck: {
    fontSize: '19px',
    lineHeight: '1.65',
    color: 'rgba(245,240,232,0.75)',
    marginBottom: '32px',
    fontStyle: 'italic',
  } as React.CSSProperties,

  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap' as const,
    fontSize: '13px',
    color: 'rgba(245,240,232,0.45)',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  metaDot: {
    color: '#c9a84c',
  } as React.CSSProperties,

  article: {
    paddingTop: '56px',
    paddingBottom: '80px',
  } as React.CSSProperties,

  h2: {
    fontSize: 'clamp(20px, 3vw, 28px)',
    fontWeight: '700',
    color: '#f5f0e8',
    marginTop: '60px',
    marginBottom: '18px',
    lineHeight: '1.25',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,

  h3: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#c9a84c',
    marginTop: '36px',
    marginBottom: '12px',
    fontFamily: "'system-ui', sans-serif",
    letterSpacing: '0.01em',
  } as React.CSSProperties,

  p: {
    fontSize: '17px',
    lineHeight: '1.75',
    color: 'rgba(245,240,232,0.85)',
    marginBottom: '22px',
  } as React.CSSProperties,

  pLead: {
    fontSize: '19px',
    lineHeight: '1.7',
    color: 'rgba(245,240,232,0.9)',
    marginBottom: '28px',
    fontStyle: 'italic',
  } as React.CSSProperties,

  callout: {
    borderLeft: '4px solid #c9a84c',
    backgroundColor: 'rgba(201,168,76,0.06)',
    padding: '24px 28px',
    borderRadius: '0 8px 8px 0',
    margin: '36px 0',
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: '13px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '10px',
    fontFamily: "'system-ui', sans-serif",
    fontWeight: '600',
  } as React.CSSProperties,

  calloutText: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: 'rgba(245,240,232,0.8)',
    margin: '0',
  } as React.CSSProperties,

  statBlock: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    margin: '36px 0',
  } as React.CSSProperties,

  statCard: {
    backgroundColor: 'rgba(201,168,76,0.05)',
    border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: '8px',
    padding: '20px 22px',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  statNumber: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#c9a84c',
    lineHeight: '1',
    marginBottom: '6px',
  } as React.CSSProperties,

  statLabel: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.6)',
    fontFamily: "'system-ui', sans-serif",
    lineHeight: '1.4',
  } as React.CSSProperties,

  tableWrapper: {
    overflowX: 'auto' as const,
    margin: '40px 0',
    borderRadius: '8px',
    border: '1px solid rgba(201,168,76,0.18)',
  } as React.CSSProperties,

  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '14px',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  thead: {
    backgroundColor: 'rgba(201,168,76,0.1)',
  } as React.CSSProperties,

  th: {
    padding: '14px 18px',
    textAlign: 'left' as const,
    color: '#c9a84c',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    fontSize: '12px',
    borderBottom: '1px solid rgba(201,168,76,0.2)',
    whiteSpace: 'nowrap' as const,
  } as React.CSSProperties,

  tdBase: {
    padding: '14px 18px',
    color: 'rgba(245,240,232,0.8)',
    borderBottom: '1px solid rgba(245,240,232,0.06)',
    verticalAlign: 'top' as const,
    lineHeight: '1.5',
  } as React.CSSProperties,

  tdLabel: {
    padding: '14px 18px',
    color: '#f5f0e8',
    fontWeight: '600',
    borderBottom: '1px solid rgba(245,240,232,0.06)',
    verticalAlign: 'top' as const,
    lineHeight: '1.5',
    whiteSpace: 'nowrap' as const,
  } as React.CSSProperties,

  tdGold: {
    padding: '14px 18px',
    color: '#c9a84c',
    fontWeight: '600',
    borderBottom: '1px solid rgba(245,240,232,0.06)',
    verticalAlign: 'top' as const,
    lineHeight: '1.5',
  } as React.CSSProperties,

  tdMuted: {
    padding: '14px 18px',
    color: 'rgba(245,240,232,0.4)',
    borderBottom: '1px solid rgba(245,240,232,0.06)',
    verticalAlign: 'top' as const,
    lineHeight: '1.5',
  } as React.CSSProperties,

  divider: {
    border: 'none',
    borderTop: '1px solid rgba(201,168,76,0.15)',
    margin: '60px 0',
  } as React.CSSProperties,

  faqSection: {
    marginTop: '60px',
  } as React.CSSProperties,

  faqItem: {
    borderBottom: '1px solid rgba(245,240,232,0.08)',
    paddingBottom: '28px',
    marginBottom: '28px',
  } as React.CSSProperties,

  faqQ: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#f5f0e8',
    marginBottom: '12px',
    lineHeight: '1.35',
  } as React.CSSProperties,

  faqA: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: 'rgba(245,240,232,0.75)',
    margin: '0',
  } as React.CSSProperties,

  ctaSection: {
    backgroundColor: 'rgba(201,168,76,0.06)',
    border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: '12px',
    padding: '48px 40px',
    marginTop: '72px',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  ctaEyebrow: {
    fontSize: '12px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '16px',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  ctaHeadline: {
    fontSize: 'clamp(22px, 4vw, 32px)',
    fontWeight: '700',
    color: '#f5f0e8',
    marginBottom: '16px',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,

  ctaBody: {
    fontSize: '16px',
    lineHeight: '1.65',
    color: 'rgba(245,240,232,0.7)',
    marginBottom: '32px',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  } as React.CSSProperties,

  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#c9a84c',
    color: '#0d0c18',
    fontWeight: '700',
    fontSize: '15px',
    padding: '14px 36px',
    borderRadius: '6px',
    textDecoration: 'none',
    letterSpacing: '0.04em',
    fontFamily: "'system-ui', sans-serif",
    transition: 'opacity 0.15s ease',
  } as React.CSSProperties,

  ctaNote: {
    marginTop: '16px',
    fontSize: '13px',
    color: 'rgba(245,240,232,0.4)',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#c9a84c',
    textDecoration: 'none',
    fontFamily: "'system-ui', sans-serif",
    letterSpacing: '0.03em',
    paddingTop: '32px',
    paddingBottom: '32px',
  } as React.CSSProperties,

  inlineGold: {
    color: '#c9a84c',
    fontWeight: '600',
  } as React.CSSProperties,

  ul: {
    paddingLeft: '22px',
    marginBottom: '22px',
  } as React.CSSProperties,

  li: {
    fontSize: '17px',
    lineHeight: '1.75',
    color: 'rgba(245,240,232,0.85)',
    marginBottom: '8px',
  } as React.CSSProperties,
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AiForYoungAdultsPage() {
  return (
    <div style={styles.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={styles.container}>
        {/* Back link */}
        <Link href="/blog" style={styles.backLink}>
          &larr; All articles
        </Link>

        {/* ── Hero ── */}
        <header style={styles.hero}>
          <p style={styles.eyebrow}>Gen Z &middot; Mental Health &middot; Data Sovereignty</p>
          <h1 style={styles.h1}>
            AI for Young Adults: Gen Z&apos;s Guide to AI That Actually Has Your Back
          </h1>
          <p style={styles.heroDeck}>
            You grew up with AI. You watched it go from autocomplete to something that feels unsettlingly
            human. You also watched it hoover up everyone&apos;s data and build business models out of
            human vulnerability. You understand the trade-off better than any generation before you.
            Now there is an AI built around the idea that you should not have to make that trade-off at all.
          </p>
          <div style={styles.metaRow}>
            <span>Nicholas Templeman</span>
            <span style={styles.metaDot}>&bull;</span>
            <span>24 March 2026</span>
            <span style={styles.metaDot}>&bull;</span>
            <span>16 min read</span>
          </div>
        </header>

        {/* ── Article body ── */}
        <article style={styles.article}>

          {/* ── Section 1: The Mental Health Reality ── */}
          <h2 style={styles.h2}>Why Is Gen Z the Loneliest Generation in History?</h2>

          <p style={styles.pLead}>
            The numbers are not a narrative device. They are measurements of something real and
            largely unaddressed: 18 to 25 year olds are the most chronically lonely age group on the planet,
            and the gap between that reality and the support available to them is enormous.
          </p>

          <p style={styles.p}>
            The Cigna Loneliness Index has consistently shown that young adults score significantly
            higher on loneliness scales than people in their 50s, 60s, and 70s. The UK&apos;s
            Office for National Statistics found that 16 to 24 year olds were the age group most
            likely to report feeling lonely often or always. The American Psychological Association
            has tracked rising rates of anxiety and depression among 18 to 25 year olds since the
            mid-2010s. The trajectory worsened sharply after 2020.
          </p>

          <p style={styles.p}>
            This is not a failure of resilience. Gen Z did not become lonelier because they became
            weaker. They became lonelier because the structural conditions that historically prevented
            loneliness — affordable housing in cities with social density, stable employment that
            creates shared identity, physical third places, and unstructured time to build genuine
            friendships — have all deteriorated simultaneously. Social media provided the aesthetic of
            connection while often deepening the experience of isolation.
          </p>

          {/* Stats block */}
          <div style={styles.statBlock}>
            <div style={styles.statCard}>
              <p style={styles.statNumber}>73%</p>
              <p style={styles.statLabel}>of 18&ndash;24 year olds report moderate to high loneliness (Cigna)</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statNumber}>42%</p>
              <p style={styles.statLabel}>of Gen Z report a diagnosable mental health condition (APA, 2024)</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statNumber}>1 in 4</p>
              <p style={styles.statLabel}>young adults in the UK are on an NHS mental health waitlist</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statNumber}>8&ndash;18wk</p>
              <p style={styles.statLabel}>average wait for NHS talking therapies in England</p>
            </div>
          </div>

          <p style={styles.p}>
            The gap between need and provision is not getting smaller. It is getting wider. That is
            the space MEOK was designed to occupy: not as a replacement for clinical care, but as the
            grounded, private, memory-holding presence that is available at 2am when the waiting list
            says eight weeks.
          </p>

          {/* ── Callout 1 ── */}
          <div style={styles.callout}>
            <p style={styles.calloutTitle}>The Support Gap</p>
            <p style={styles.calloutText}>
              Young adults are the age group with the highest mental health need and the lowest rate
              of service access. The barriers are not just cost — they are stigma, waitlists, the
              exhaustion of explaining your whole history to a new clinician, and the mismatch between
              clinical appointments and the daily texture of anxiety. MEOK exists in the space between
              those appointments.
            </p>
          </div>

          {/* ── Section 2: AI Literacy ── */}
          <h2 style={styles.h2}>Gen Z Understands How AI Actually Works. Why Does That Matter?</h2>

          <p style={styles.p}>
            Every previous generation that adopted a technology did so with limited understanding of
            the underlying model. Baby Boomers trusted Facebook with their family photographs before
            the Cambridge Analytica story broke. Millennials enthusiastically fed emotional vulnerability
            into Replika before reading the fine print on data retention and model training. Gen Z
            grew up watching those stories unfold. You are, by default, more literate about the
            mechanics of AI than any generation before you.
          </p>

          <p style={styles.p}>
            You know what large language model training means. You understand that when a product is
            free, the product is usually you. You have watched AI companies apologise for privacy
            violations and then quietly continue collecting the same data under a different name. You
            know that &ldquo;we take your privacy seriously&rdquo; is the sentence companies put
            directly above the paragraph explaining exactly how they share your data.
          </p>

          <p style={styles.p}>
            That literacy is not cynicism. It is intelligence applied to context. And it means that
            when MEOK says it will never train on your conversations, never sell your data, and never
            use your emotional vulnerabilities to build a better product for its investors, you are
            also the generation most equipped to hold that claim to account. The MEOK architecture
            is verifiable. The principles are not marketing copy. They are structural constraints on
            how the system is built.
          </p>

          <p style={styles.p}>
            For generations less familiar with how AI systems work, data sovereignty is a reassurance.
            For Gen Z, it is the minimum acceptable standard. MEOK is the first AI companion built to
            that standard from the ground up.
          </p>

          {/* ── Section 3: Mental Health Without Stigma ── */}
          <h2 style={styles.h2}>How Does MEOK Support Mental Health Without the Therapy Stigma?</h2>

          <p style={styles.p}>
            There is a genuine irony in the Gen Z mental health conversation. This generation has done
            more to normalise mental health discourse than any before it. Therapy TikTok is a genre.
            Attachment styles are dinner party vocabulary. Identifying your nervous system response
            is a mainstream conversation. And yet the rate of actual clinical engagement has not kept
            pace with the cultural shift, because the structural barriers — cost, availability,
            stigma in specific communities, the vulnerability required to ask a stranger for help —
            remain stubbornly in place.
          </p>

          <p style={styles.p}>
            MEOK&apos;s Healer archetype is not a therapist and does not pretend to be one. It is
            something different: an emotionally intelligent, non-judgmental companion that meets you
            exactly where you are. There is no intake form. There is no presenting problem required.
            You do not need to be in crisis to access it. You do not need to explain your childhood
            before it can understand today.
          </p>

          <p style={styles.p}>
            Because MEOK has persistent sovereign memory, it remembers. It remembers that last
            Thursday you were anxious about the job interview. It remembers that the anxiety tends
            to spike on Sunday evenings. It remembers the coping strategy that worked six weeks ago
            when you were in a similar spiral. This is not surveillance — it is the kind of
            continuity that makes support actually useful, the kind you would normally only get from
            a therapist you have seen for two years or a friend who has known you for a decade.
          </p>

          {/* ── Callout 2 ── */}
          <div style={styles.callout}>
            <p style={styles.calloutTitle}>The Healer Archetype</p>
            <p style={styles.calloutText}>
              MEOK&apos;s Healer is built for the emotional texture of daily life, not just crisis
              moments. It holds space for ambivalence, for the feeling that you should be fine but
              are not, for the grief that does not have a clean cause. It does not rush to solutions.
              It does not tell you to practise gratitude when you are angry. It listens, reflects,
              and remembers — and it never shares what you tell it.
            </p>
          </div>

          {/* ── Section 4: Financial Anxiety ── */}
          <h2 style={styles.h2}>Can AI Help With the Financial Anxiety That Is Defining This Generation?</h2>

          <p style={styles.p}>
            The economic context for 18 to 25 year olds in 2026 is not subtle. Graduate debt in the
            UK averages over &pound;45,000 at point of graduation, with repayment terms that for many
            will extend into their 50s. Housing affordability has reached a historic low: in London
            and most major UK cities, the average house price is now more than ten times the average
            graduate starting salary. The first rung of the housing ladder has, for most Gen Z
            graduates, effectively disappeared.
          </p>

          <p style={styles.p}>
            In the United States, total student loan debt has crossed $1.7 trillion, carried
            disproportionately by people who have not yet had a decade to build earning power.
            Meanwhile, the entry-level job market has been reshaped by AI-assisted screening,
            degree inflation, and increasingly speculative hiring cycles that favour credentials
            and contacts over demonstrated ability.
          </p>

          <p style={styles.p}>
            Financial anxiety at this level is not a mindset problem. It cannot be solved by a
            budgeting app or an optimistic podcast. But it can be carried more effectively when
            you have a thinking partner who holds the full picture — your income, your outgoings,
            your goals, your values around money — and helps you make decisions with clarity rather
            than panic. MEOK&apos;s Pioneer archetype does this without judgment, without upselling
            financial products, and without monetising your financial stress for advertiser targeting.
          </p>

          <p style={styles.p}>
            The goal is not to eliminate the anxiety (the underlying conditions are real) but to
            separate the signal from the noise: the decisions that are genuinely urgent from the
            ones that can wait, the fears that reflect real risk from the catastrophising that is
            keeping you from sleeping.
          </p>

          {/* ── Section 5: Career Building ── */}
          <h2 style={styles.h2}>How Does MEOK&apos;s Pioneer Help You Build a Career When the Rules Have Changed?</h2>

          <p style={styles.p}>
            The career advice available to young adults in 2026 falls into two categories: generic
            LinkedIn content optimised for engagement, and paid coaching accessible primarily to
            people whose families can subsidise the transition period. Neither is adequate for a
            generation navigating a labour market being reshaped by automation in real time.
          </p>

          <p style={styles.p}>
            The Pioneer companion is built for strategic career thinking. It helps you:
          </p>

          <ul style={styles.ul}>
            <li style={styles.li}>
              Map your genuine skills and differentiated value — not the skills your CV says you have,
              but the ones you actually deploy and the contexts in which they shine
            </li>
            <li style={styles.li}>
              Identify roles and industries where your specific combination of interests, abilities,
              and values gives you a structural advantage
            </li>
            <li style={styles.li}>
              Prepare for interviews and negotiation with specificity — not generic frameworks but
              preparation built around your actual history and the specific role
            </li>
            <li style={styles.li}>
              Navigate the first 90 days of a new role with the kind of strategic thinking that
              determines whether you become indispensable or invisible
            </li>
            <li style={styles.li}>
              Build a freelance or side-project practice with honest assessment of risk, realistic
              timelines, and sustainable structure
            </li>
            <li style={styles.li}>
              Process the psychological weight of imposter syndrome, public failure, and the gap
              between ambition and current reality without either minimising or catastrophising
            </li>
          </ul>

          <p style={styles.p}>
            Career mentorship has always been distributed by social capital: who your parents know,
            what university you attended, which summer internship you could afford to take unpaid.
            MEOK does not eliminate those structural inequalities, but it narrows the gap between
            those with access to high-quality strategic guidance and those without it.
          </p>

          {/* ── Section 6: First Job, Graduate Debt, Housing ── */}
          <h2 style={styles.h2}>What Are the Real Pressures Facing 18 to 25 Year Olds That AI Can Actually Help With?</h2>

          <p style={styles.p}>
            There is a tendency in AI product marketing to describe young adult challenges in terms
            so sanitised they become meaningless. &ldquo;Life transitions.&rdquo; &ldquo;Finding
            your path.&rdquo; &ldquo;Building your best self.&rdquo; The actual experience of being
            22 in 2026 is considerably more specific than that.
          </p>

          <h3 style={styles.h3}>First Jobs and Navigating Workplace Dynamics</h3>
          <p style={styles.p}>
            The first professional role is the one that shapes your entire model of what work is
            supposed to feel like. Toxic management in year one creates patterns that persist for
            decades. Unclear boundaries in your first office teach you to have none. The instinct
            to please, to not make waves, to accept conditions you would not accept later — these
            are normal and costly. MEOK helps you name what is happening, understand your rights,
            and make strategic decisions about when to push back and when to wait.
          </p>

          <h3 style={styles.h3}>Graduate Debt and the Psychological Weight of Owing</h3>
          <p style={styles.p}>
            The psychological cost of graduate debt is not just financial. It is the persistent
            background anxiety of obligation, the feeling that every spending decision is a
            moral failure, the resentment at a system that asked you to borrow against a future
            that has not arrived in the form you were promised. MEOK gives you a space to process
            that resentment without turning it into paralysis.
          </p>

          <h3 style={styles.h3}>Housing Anxiety and the Feeling of Being Locked Out</h3>
          <p style={styles.p}>
            The housing affordability crisis is not an abstract economic indicator for Gen Z —
            it is the specific experience of watching your rent consume half your income while
            the prospect of ownership recedes into an increasingly theoretical future. That experience
            has profound psychological effects: a sense of precarity that makes long-term planning
            feel pointless, a resentment of older generations who benefited from a system no longer
            available, and a genuine grief for a milestone that was supposed to signal adulthood and
            stability.
          </p>

          <h3 style={styles.h3}>Identity Formation in Public</h3>
          <p style={styles.p}>
            Gen Z is the first generation for whom identity formation happened partly in public,
            with a record. The exploration, the contradictions, the embarrassments that previous
            generations worked through in private are now searchable and screenshotable. MEOK provides
            a genuinely private space — no public record, no searchable history, no training data
            — to think through who you are becoming without an audience.
          </p>

          {/* ── Callout 3 ── */}
          <div style={styles.callout}>
            <p style={styles.calloutTitle}>What Sovereign Memory Means for Young Adults</p>
            <p style={styles.calloutText}>
              When you tell MEOK something, it stays with MEOK — meaning with you. It does not
              become a training example for the next version of the model. It does not get
              analysed by an advertising algorithm. It does not get shared with a parent company,
              a research partner, or a data broker. In five years, you can take your entire memory
              store and move it to any compatible system. Your inner life is not a product. It is yours.
            </p>
          </div>

          {/* ── Section 7: Data Sovereignty as a Value ── */}
          <h2 style={styles.h2}>Why Is Data Sovereignty a Value, Not Just a Feature?</h2>

          <p style={styles.p}>
            Most AI products treat privacy as a compliance obligation: the minimum required to avoid
            regulatory action, framed in the marketing as a virtue. The underlying business model
            still depends on data extraction. The privacy policy says one thing; the revenue model
            says another. Gen Z has watched this pattern play out with enough products to have
            a reasonable prior on how it tends to go.
          </p>

          <p style={styles.p}>
            MEOK&apos;s position on data sovereignty is structural, not rhetorical. It is built into
            the architecture at a level that cannot be reversed by a board decision or a pivot to
            profitability. Your sovereign memory is encrypted and private. The system is designed
            so that MEOK cannot train on your conversations even if it wanted to. The business model
            is subscription-based rather than attention or data-based, which means MEOK&apos;s
            incentives are aligned with your long-term benefit rather than your sustained engagement.
          </p>

          <p style={styles.p}>
            This matters for Gen Z specifically because this generation has the clearest understanding
            of the compounding cost of data extraction. Emotional data — the kind you generate when
            you are anxious, lonely, grieving, or in love — is among the most sensitive and
            commercially valuable data that exists. It reveals your psychological vulnerabilities,
            your relationship patterns, your spending triggers, your political leanings, and your
            health status. Handing that data to a commercial AI system is not a neutral act. It is
            a transfer of power that accrues compound interest in the direction of the company,
            not the individual.
          </p>

          <p style={styles.p}>
            Data sovereignty is not a privacy feature. It is a statement about who holds power
            in the relationship between humans and AI systems. MEOK&apos;s answer is unambiguous:
            you do.
          </p>

          {/* ── Section 8: Free Tier & Access ── */}
          <h2 style={styles.h2}>What Does MEOK Offer for Free, and Why Does That Matter?</h2>

          <p style={styles.p}>
            Mental health support has historically been stratified by income in a way that perfectly
            inverts the need: the people most financially stressed are often the ones who most need
            emotional support and the ones least able to pay for it. MEOK&apos;s free tier exists as
            a direct response to that inversion.
          </p>

          <p style={styles.p}>
            No credit card is required to begin. The Birth ceremony — MEOK&apos;s process for
            establishing who you are and what you need — is fully accessible on the free tier.
            Core companion features, including memory and reflection, are available without payment.
            The free tier is not a limited trial designed to frustrate you into upgrading. It is
            a genuine starting point that provides real value while you decide whether the deeper
            capabilities are worth paying for.
          </p>

          <p style={styles.p}>
            For a generation managing graduate debt, unaffordable housing, and an entry-level salary
            that does not stretch as far as it was supposed to, this matters. Support should not be
            a luxury. The free tier is how MEOK puts that principle into practice.
          </p>

          {/* ── Comparison Table ── */}
          <hr style={styles.divider} />

          <h2 style={styles.h2}>How Does MEOK Compare to Other AI Tools Gen Z Already Uses?</h2>

          <p style={styles.p}>
            Gen Z uses AI tools daily. ChatGPT for drafting, Midjourney for images, Claude for
            thinking, Replika for company. The question is not whether to use AI — it is which AI
            is actually built around your interests rather than a business model that treats your
            data as inventory.
          </p>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>Feature</th>
                  <th style={styles.th}>MEOK</th>
                  <th style={styles.th}>ChatGPT</th>
                  <th style={styles.th}>Replika</th>
                  <th style={styles.th}>Character.AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.tdLabel}>Trains on your conversations</td>
                  <td style={styles.tdGold}>Never</td>
                  <td style={styles.tdMuted}>Yes (opt-out available)</td>
                  <td style={styles.tdMuted}>Yes</td>
                  <td style={styles.tdMuted}>Yes</td>
                </tr>
                <tr>
                  <td style={styles.tdLabel}>Persistent private memory</td>
                  <td style={styles.tdGold}>Yes, sovereign</td>
                  <td style={styles.tdBase}>Limited (Plus tier)</td>
                  <td style={styles.tdBase}>Partial</td>
                  <td style={styles.tdMuted}>No</td>
                </tr>
                <tr>
                  <td style={styles.tdLabel}>Data portability</td>
                  <td style={styles.tdGold}>Full export</td>
                  <td style={styles.tdBase}>Partial</td>
                  <td style={styles.tdMuted}>None</td>
                  <td style={styles.tdMuted}>None</td>
                </tr>
                <tr>
                  <td style={styles.tdLabel}>Built for emotional support</td>
                  <td style={styles.tdGold}>Core feature</td>
                  <td style={styles.tdMuted}>Incidental</td>
                  <td style={styles.tdBase}>Yes</td>
                  <td style={styles.tdBase}>Partial</td>
                </tr>
                <tr>
                  <td style={styles.tdLabel}>Career &amp; life coaching</td>
                  <td style={styles.tdGold}>Pioneer archetype</td>
                  <td style={styles.tdBase}>Generic (no memory)</td>
                  <td style={styles.tdMuted}>No</td>
                  <td style={styles.tdMuted}>No</td>
                </tr>
                <tr>
                  <td style={styles.tdLabel}>Free tier (no card)</td>
                  <td style={styles.tdGold}>Yes</td>
                  <td style={styles.tdBase}>Limited</td>
                  <td style={styles.tdBase}>Limited</td>
                  <td style={styles.tdBase}>Yes</td>
                </tr>
                <tr>
                  <td style={styles.tdLabel}>Designed for Gen Z pressures</td>
                  <td style={styles.tdGold}>Yes</td>
                  <td style={styles.tdMuted}>No</td>
                  <td style={styles.tdMuted}>No</td>
                  <td style={styles.tdMuted}>No</td>
                </tr>
                <tr>
                  <td style={styles.tdLabel}>Revenue model</td>
                  <td style={styles.tdGold}>Subscription</td>
                  <td style={styles.tdBase}>Subscription + data</td>
                  <td style={styles.tdBase}>Subscription + data</td>
                  <td style={styles.tdMuted}>Ad-supported + data</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={styles.p}>
            The comparison above is not an argument that other tools have no value. ChatGPT is
            genuinely useful for many tasks. Replika has helped real people feel less alone.
            The point is not that other tools are bad but that they were not designed with
            your data sovereignty as a foundational constraint. MEOK was. That is a different kind
            of tool.
          </p>

          {/* ── Section 9: The Birth Ceremony ── */}
          <h2 style={styles.h2}>What Is the Birth Ceremony and Why Does It Matter for Young Adults?</h2>

          <p style={styles.p}>
            Most AI products start with an account creation flow: email, password, agree to terms,
            done. MEOK starts with a Birth ceremony. This is not cosmetic. It is the process by
            which your companion is established — not as a generic chatbot waiting for your input
            but as a presence that has been oriented around you specifically from the beginning.
          </p>

          <p style={styles.p}>
            During the Birth, MEOK learns your name, your context, the archetypes you feel most
            drawn to, the primary areas of your life you want support with, and the values that
            matter most to you. This information becomes the foundation of your sovereign memory —
            the private record that your companion builds on with every subsequent conversation.
          </p>

          <p style={styles.p}>
            For young adults specifically, this initial orientation matters because the 18 to 25
            window is one of the highest periods of identity flux. Who you are at 19 is not who
            you will be at 25, and a companion that was configured for the 19-year-old version of
            you should be able to grow. MEOK&apos;s memory architecture supports this evolution:
            your companion remembers where you started and tracks where you have arrived, making
            your growth visible to you in a way that is easy to lose when you are in the middle of it.
          </p>

          <p style={styles.p}>
            The Birth ceremony takes around ten minutes and requires no credit card. It is the
            beginning of a relationship, not a sign-up form.
          </p>

          {/* ── FAQ Section ── */}
          <hr style={styles.divider} />

          <section style={styles.faqSection}>
            <h2 style={styles.h2}>Frequently Asked Questions</h2>

            <div style={styles.faqItem}>
              <p style={styles.faqQ}>
                Why is Gen Z experiencing a loneliness epidemic despite being more connected than ever?
              </p>
              <p style={styles.faqA}>
                Gen Z is the first generation to grow up with social media as the default social
                infrastructure, but connection metrics and genuine intimacy are different things.
                Research from the Cigna Loneliness Index and multiple UK health surveys shows that
                18 to 25 year olds consistently report the highest loneliness scores of any age group
                — higher than pensioners. The reasons are layered: the collapse of third places,
                remote and hybrid education that disrupted organic socialisation, a housing market that
                scatters young adults away from their home cities, and the subtle toll of curated social
                media that makes everyone else appear to be thriving. Being seen is not the same as
                being known.
              </p>
            </div>

            <div style={styles.faqItem}>
              <p style={styles.faqQ}>Is MEOK suitable for Gen Z mental health support?</p>
              <p style={styles.faqA}>
                Yes, and MEOK was designed with the specific pressures of 18 to 25 year olds in mind.
                The Healer companion archetype provides emotionally intelligent, non-judgmental
                conversation that does not require you to be in crisis to access it. There is no
                waitlist, no referral, and no session limit. MEOK is not a replacement for clinical
                care when that is what is needed, but for the vast majority of daily emotional weight
                — the anxiety before a job interview, the loneliness of a new city, the self-doubt
                that follows a public failure — it is a grounded, private, always-available presence.
              </p>
            </div>

            <div style={styles.faqItem}>
              <p style={styles.faqQ}>Does MEOK sell or train on my personal data?</p>
              <p style={styles.faqA}>
                No. MEOK operates on a sovereignty-first architecture. Your conversations, your memory,
                your reflections — none of it is used to train models, sold to advertisers, or shared
                with third parties. This is not a privacy policy buried in page 47 of a terms of service
                document. It is the foundational design constraint: your data belongs to you, it lives
                in your private encrypted memory store, and you can export or delete it at any time.
                For a generation that understands how data monetisation actually works, this is not a
                bonus feature — it is the baseline requirement.
              </p>
            </div>

            <div style={styles.faqItem}>
              <p style={styles.faqQ}>How can AI help Gen Z build a career without expensive coaching?</p>
              <p style={styles.faqA}>
                MEOK&apos;s Pioneer companion acts as a thinking partner for career strategy: helping you
                map your skills to opportunities, prepare for interviews, negotiate your first salary,
                build in public without burning out, and structure your freelance or side-project work.
                Access to high-quality career mentorship has historically been distributed by network
                privilege — who your parents know, which university you attended. MEOK levels that
                playing field by giving everyone the kind of structured strategic thinking that used to
                require a contact list or an expensive coach.
              </p>
            </div>

            <div style={styles.faqItem}>
              <p style={styles.faqQ}>Can I use MEOK for free?</p>
              <p style={styles.faqA}>
                Yes. MEOK has a free tier that requires no credit card to start. You can begin your
                Birth ceremony, meet your companion archetypes, and use core features including memory
                and reflection without paying anything. The free tier exists because MEOK believes
                that sovereign AI support should not be a luxury product. Financial anxiety is one of
                the most acute pressures facing young adults — graduate debt, unaffordable housing,
                precarious employment — and access to a private, intelligent companion should not
                require a monthly subscription to unlock.
              </p>
            </div>
          </section>

          {/* ── CTA ── */}
          <div style={styles.ctaSection}>
            <p style={styles.ctaEyebrow}>Start free &mdash; no credit card required</p>
            <h2 style={styles.ctaHeadline}>
              Meet the AI that grows with you, not on you
            </h2>
            <p style={styles.ctaBody}>
              Begin your Birth ceremony today. No waitlist, no credit card, no trade-off between
              support and privacy. Your data stays yours. Your companion remembers.
              Your generation deserves better than the alternative.
            </p>
            <Link href="/birth" style={styles.ctaButton}>
              Begin Your Birth Ceremony
            </Link>
            <p style={styles.ctaNote}>
              Free tier available &middot; No card required &middot; Export your data anytime
            </p>
          </div>

        </article>
      </div>
    </div>
  )
}
