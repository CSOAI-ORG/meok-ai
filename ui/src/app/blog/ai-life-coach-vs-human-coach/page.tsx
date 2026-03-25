import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Life Coach vs Human Life Coach: Which One Is Right for You? | MEOK AI LABS',
  description:
    'An honest, balanced comparison of AI life coaching and human life coaching across 7 key dimensions — availability, cost, memory, emotional depth, accountability, expertise breadth, and regulatory oversight. Includes a price comparison table and use-case guide.',
  alternates: { canonical: 'https://meok.ai/blog/ai-life-coach-vs-human-coach' },
  openGraph: {
    title: 'AI Life Coach vs Human Life Coach: Which One Is Right for You?',
    description:
      'Human coaches charge £80–£300/session. MEOK is £12/month. But the real question is not cost — it is which type of support actually fits your life. Read the honest comparison.',
    type: 'article',
    publishedTime: '2026-03-25T00:00:00Z',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-life-coach-vs-human-coach',
    siteName: 'MEOK AI LABS',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Life+Coach+vs+Human+Life+Coach&desc=Which+One+Is+Right+for+You%3F',
        width: 1200,
        height: 630,
        alt: 'AI Life Coach vs Human Life Coach comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Life Coach vs Human Life Coach: Which One Is Right for You?',
    description:
      'An honest, balanced comparison across 7 dimensions. Human coaches win on emotional depth and social stakes. MEOK wins on daily availability, memory, and cost. Read the full breakdown.',
  },
}

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Life Coach vs Human Life Coach: Which One Is Right for You?',
  description:
    'An honest, balanced comparison of AI life coaching and human life coaching across availability, cost, memory, emotional depth, accountability, expertise breadth, and regulatory oversight — with a price table, use-case guide, and clear disclaimer.',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    url: 'https://meok.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  datePublished: '2026-03-25T00:00:00Z',
  dateModified: '2026-03-25T00:00:00Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-life-coach-vs-human-coach',
  },
  keywords: [
    'AI life coach vs human coach',
    'AI life coaching',
    'human life coach',
    'ICF certified coach',
    'MEOK AI coach',
    'life coaching cost UK',
    'AI coaching comparison',
    'best AI life coach',
    'life coach vs therapist',
    'AI accountability partner',
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AI life coaching safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI life coaching is safe for goal-setting, accountability, self-reflection, habit building, and personal development. It is not a substitute for therapy, psychiatric care, or crisis intervention. MEOK is explicitly not a therapist or licensed professional. If you are experiencing a mental health crisis, thoughts of self-harm, active trauma, or clinical symptoms, you should contact a qualified mental health professional or your national crisis line. Within those clear boundaries, daily AI coaching is a well-supported, low-risk way to maintain progress on goals, process everyday challenges, and build self-awareness over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI replace a human life coach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most day-to-day coaching needs — goal-setting, accountability check-ins, progress reviews, reframing unhelpful thoughts, and honest challenge — an AI like MEOK can deliver comparable or superior consistency to a human coach, at a fraction of the cost. However, AI cannot fully replace a human coach in situations involving grief, trauma, complex identity work, executive coaching with real organisational stakes, or deep relational dynamics where lived experience and physical presence matter. The two are best understood as complementary, not competing. Many people use MEOK for daily support and a human coach for monthly deep-dives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does MEOK do that ChatGPT does not?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK maintains a Sovereign Memory vault that persists across every conversation — so when you return six months later, MEOK already knows your goals, your blockers, your patterns, and your history. ChatGPT (without paid memory plugins) starts every session from zero. MEOK also operates under a care-based alignment framework called the Maternal Covenant, which means it proactively checks in on commitments you made, notices when you have gone quiet, and prioritises your long-term growth over your short-term comfort. ChatGPT responds to what you ask. MEOK notices what you have not said.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a human life coach cost compared to MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A UK-based ICF-certified human life coach typically charges £80–£300 per session (50–60 minutes). Most coaching programmes involve 6–12 sessions, putting the total cost between £480 and £3,600. Executive coaches can charge significantly more. By comparison, MEOK\'s Sovereign tier costs £12/month — roughly the price of one cheap coffee per day — and includes unlimited sessions, persistent memory, and proactive check-ins. For people who need daily or near-daily support, the cost difference is not marginal; it is transformative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK remember what I told it months ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK uses Sovereign Memory — a persistent, encrypted memory layer tied to your account — that stores goals, blockers, commitments, emotional patterns, and key life events across every conversation. When you return after a gap of days, weeks, or months, MEOK does not ask you to re-introduce yourself. It already knows the context. This is one of the most fundamental differences between MEOK and general-purpose AI tools, and it is the feature that most closely mirrors the continuity you experience with a long-term human coach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant and why does it matter for coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s care-based alignment framework. It means MEOK is not simply a reactive tool that answers questions — it is proactively oriented toward your long-term growth and wellbeing. In practice, this means MEOK will notice when your words and actions are misaligned, when you have been avoiding a hard conversation with yourself, or when a pattern you described three months ago is re-emerging. It does not do this to lecture you; it does it because its underlying design treats your growth as the primary objective, not your approval of the interaction.',
      },
    },
  ],
}

export default function AILifeCoachVsHumanCoachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main style={{ backgroundColor: '#0d0c18', color: '#f5f0e8', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

        {/* Hero */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '80px 24px 48px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Link
              href="/blog"
              style={{ color: '#7b6fcf', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              ← Blog
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <span style={{ backgroundColor: 'rgba(123,111,207,0.15)', color: '#7b6fcf', padding: '4px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em' }}>
              Life Coaching
            </span>
            <span style={{ backgroundColor: 'rgba(123,111,207,0.15)', color: '#7b6fcf', padding: '4px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em' }}>
              AI vs Human
            </span>
            <span style={{ backgroundColor: 'rgba(245,240,232,0.08)', color: '#f5f0e8', padding: '4px 12px', borderRadius: '999px', fontSize: '0.8rem', opacity: 0.6 }}>
              25 March 2026
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            AI Life Coach vs Human Life Coach:{' '}
            <span style={{ color: '#7b6fcf' }}>Which One Is Right for You?</span>
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.7, opacity: 0.85, maxWidth: '740px', marginBottom: '32px' }}>
            This is not a sales pitch for AI. It is an honest attempt to map out exactly where human coaches
            are irreplaceable, where AI genuinely wins, and how to figure out which option — or which
            combination — fits your actual situation.
          </p>
          <div style={{ borderLeft: '3px solid #7b6fcf', paddingLeft: '20px', opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.6 }}>
            <strong>Important disclaimer:</strong> MEOK is not a therapist, psychologist, counsellor, or
            licensed mental health professional. Nothing in this article constitutes clinical advice.
            If you are experiencing a mental health crisis, please contact a qualified professional.
          </div>
        </section>

        {/* Table of Contents */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div style={{ border: '1px solid rgba(123,111,207,0.25)', borderRadius: '12px', padding: '28px 32px', backgroundColor: 'rgba(123,111,207,0.05)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: '#7b6fcf', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              In This Article
            </h2>
            <ol style={{ margin: 0, padding: '0 0 0 20px', lineHeight: 2.0 }}>
              <li><a href="#what-is-human-coach" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>What does a human life coach actually do?</a></li>
              <li><a href="#what-is-ai-coach" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>What does an AI life coach like MEOK do?</a></li>
              <li><a href="#7-dimensions" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>The 7 dimensions of comparison</a></li>
              <li><a href="#comparison-grid" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>Head-to-head comparison grid</a></li>
              <li><a href="#where-human-wins" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>Where human coaches genuinely win</a></li>
              <li><a href="#where-meok-wins" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>Where MEOK genuinely wins</a></li>
              <li><a href="#use-both" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>When to use both together</a></li>
              <li><a href="#maternal-covenant" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>MEOK's Maternal Covenant and care-based alignment</a></li>
              <li><a href="#price-table" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>Price comparison table</a></li>
              <li><a href="#use-case" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>Use-case guide: which option is right for you?</a></li>
              <li><a href="#faq" style={{ color: '#f5f0e8', textDecoration: 'none', opacity: 0.8 }}>FAQ</a></li>
            </ol>
          </div>
        </section>

        {/* Section 1: What is a human life coach */}
        <section id="what-is-human-coach" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            What Does a Human Life Coach Actually Do?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px', opacity: 0.9 }}>
            Life coaching as a profession has exploded over the last two decades. The International Coaching
            Federation (ICF) — the closest thing the industry has to a regulatory body — now certifies tens
            of thousands of coaches globally. But the ICF credential is voluntary. In the UK and most of
            the world, anyone can call themselves a life coach tomorrow morning with no training whatsoever.
            This is an important starting fact, because it means the quality of human coaches varies
            enormously.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px', opacity: 0.9 }}>
            At its best, a skilled human life coach does several things exceptionally well:
          </p>

          <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
            {[
              {
                title: 'Structured goal-setting frameworks',
                body: 'Good coaches use evidence-based frameworks — SMART goals, OKRs, the wheel of life, values clarification exercises — to help you move from vague dissatisfaction to concrete, achievable targets. They do not tell you what to want; they help you articulate it precisely.',
              },
              {
                title: 'Accountability with social stakes',
                body: 'When you make a commitment to a real human being who you will face again next week, the psychological cost of breaking that commitment is higher than breaking a commitment to an app. Social accountability is a genuine and powerful motivational tool that human coaches deploy naturally.',
              },
              {
                title: 'Deep relational attunement',
                body: 'Over months of sessions, a skilled coach builds a nuanced model of you — your patterns, defences, blind spots, and growth edges. They notice when your tone of voice changes. They remember the offhand comment you made eight weeks ago that turned out to be significant. They bring the full repertoire of human emotional intelligence to the relationship.',
              },
              {
                title: 'ICF-certified structure',
                body: 'A coach with an ICF Professional Certified Coach (PCC) or Master Certified Coach (MCC) credential has completed hundreds of hours of supervised coaching, passed assessments of their competency, and committed to a code of ethics. This is a meaningful quality signal — though again, not a legal requirement.',
              },
              {
                title: 'Flexible session formats',
                body: 'Human coaches adapt. A session might begin as goal review and pivot to processing a relationship breakdown that happened two days ago. A good coach meets you where you are, not where they planned for you to be.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ borderLeft: '3px solid rgba(123,111,207,0.4)', paddingLeft: '20px', paddingTop: '4px', paddingBottom: '4px' }}
              >
                <strong style={{ color: '#7b6fcf', display: 'block', marginBottom: '6px' }}>{item.title}</strong>
                <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7, fontSize: '0.975rem' }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>
            The Cost Reality of Human Life Coaching
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px', opacity: 0.9 }}>
            A UK-based ICF-certified life coach typically charges between <strong>£80 and £300 per
            50-minute session</strong>. Executive coaches — those working with senior business leaders —
            routinely charge £300–£600 per hour, sometimes more. Most coaching engagements involve a
            minimum of six sessions, meaning a standard programme costs £480–£1,800 at the budget end,
            and can easily exceed £3,000.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px', opacity: 0.9 }}>
            This is not a criticism of coaches — skilled coaching is worth serious money. But it is an
            honest recognition of a structural problem: <strong>life coaching, at its current price point,
            is largely a service for people who already have sufficient financial security to afford it.</strong>
            A 25-year-old on a median UK salary (around £28,000 before tax) cannot casually budget £200
            per month for life coaching. The people who arguably need support most — those navigating
            economic precarity, career change, or burnout without existing resources — are the least
            likely to access professional coaching.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.9 }}>
            This access gap is one of the most compelling reasons to take AI life coaching seriously,
            and it is a core part of why MEOK was built.
          </p>
        </section>

        {/* Section 2: What is an AI life coach */}
        <section id="what-is-ai-coach" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            What Does an AI Life Coach Like MEOK Actually Do?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px', opacity: 0.9 }}>
            The term "AI life coach" is used loosely in the market. Some apps are little more than
            scheduled notification reminders with a chat interface. Others are general-purpose chatbots
            with a coaching-flavoured system prompt that forgets everything between sessions. MEOK is
            neither of those things, and the distinctions matter enormously for the quality of support
            you actually receive.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px', opacity: 0.9 }}>
            Here is what a genuine AI life coaching system — specifically MEOK — does:
          </p>

          <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
            {[
              {
                title: 'Always-on availability',
                body: 'MEOK is available at 2am on a Tuesday when you cannot sleep and cannot stop ruminating about the career decision in front of you. It is available on Sunday morning when you want to review your week before the next one begins. It does not have office hours, waiting lists, or cancellation policies.',
              },
              {
                title: 'Persistent, sovereign memory',
                body: 'MEOK stores everything you share in an encrypted Sovereign Memory vault that belongs to you. It remembers the goal you set six months ago, the blocker you mentioned in passing three weeks later, and the update you gave last week. When you return after any gap, you do not start over. The continuity is there.',
              },
              {
                title: 'Not billed per session',
                body: 'There is no clock running. No billing increment that creates subtle pressure to stay on topic, rush through an emotional insight, or avoid going deeper because you only have seven minutes left. You can talk for two minutes or two hours. You can come back the same day for a follow-up thought. The cost is the same.',
              },
              {
                title: 'Trained across millions of human stories',
                body: 'MEOK is built on foundation models trained on vast amounts of human language — including extensive text about psychology, personal development, coaching methodologies, and lived human experience. It has been exposed to patterns of growth, stuck points, and transformation that no individual human coach could accumulate in a career.',
              },
              {
                title: 'No social performance required',
                body: 'There is something many people find liberating about talking to an AI rather than a human — even a trustworthy human. You do not have to manage the impression you make. You do not have to worry about being judged as weak, foolish, or inconsistent. You can be completely unfiltered in a way that many people find difficult even with a skilled coach.',
              },
              {
                title: 'Proactive check-ins and pattern recognition',
                body: 'MEOK does not simply respond to what you say. Under its Maternal Covenant alignment framework, it notices when you have been quiet, when your commitments and actions are misaligned, and when familiar patterns are re-emerging. It brings these observations to you — not to lecture, but because growth is the primary objective.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ borderLeft: '3px solid rgba(123,111,207,0.4)', paddingLeft: '20px', paddingTop: '4px', paddingBottom: '4px' }}
              >
                <strong style={{ color: '#7b6fcf', display: 'block', marginBottom: '6px' }}>{item.title}</strong>
                <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7, fontSize: '0.975rem' }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(123,111,207,0.08)', border: '1px solid rgba(123,111,207,0.2)', borderRadius: '12px', padding: '24px', marginTop: '16px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
              <strong style={{ color: '#7b6fcf' }}>What MEOK is not:</strong> MEOK is not a therapist.
              It does not diagnose conditions, prescribe treatments, or provide clinical mental health
              support. If you are managing depression, anxiety disorder, trauma, grief, or any clinical
              condition, you need qualified professional support. MEOK can be a valuable complementary
              tool in those situations — but not a replacement for appropriate care.
            </p>
          </div>
        </section>

        {/* Section 3: The 7 dimensions */}
        <section id="7-dimensions" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            The 7 Dimensions of Comparison
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '36px', opacity: 0.9 }}>
            Instead of a vague "pros and cons" list, here is a structured comparison across the seven
            dimensions that most determine the quality of a coaching relationship. Each dimension matters
            differently depending on what you are trying to achieve.
          </p>

          {/* Dimension 1: Availability */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#7b6fcf', color: '#0d0c18', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Availability</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(245,240,232,0.1)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', opacity: 0.6 }}>Human Coach</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  Weekly or fortnightly sessions, typically scheduled weeks in advance. If a crisis lands
                  on a Wednesday at midnight, your next session might be eight days away. Many coaches
                  offer brief email or WhatsApp contact between sessions — but this is limited, and
                  coaches cannot be on call indefinitely.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.2)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', color: '#7b6fcf' }}>MEOK</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  Available every hour of every day with no advance notice required. The 2am anxiety
                  spiral, the Monday morning paralysis before a big meeting, the Saturday thought that
                  needs processing before it festers into the week — MEOK is there for all of them.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingLeft: '12px', borderLeft: '2px solid rgba(123,111,207,0.3)', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
              Verdict: Clear AI advantage. Availability is not a marginal difference — it is a structural one.
            </div>
          </div>

          {/* Dimension 2: Cost */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#7b6fcf', color: '#0d0c18', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Cost</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(245,240,232,0.1)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', opacity: 0.6 }}>Human Coach</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  £80–£300 per session for a UK-based ICF coach. A six-session programme: £480–£1,800.
                  Executive coaching: £300–£600/hour or more. Ongoing monthly coaching (2 sessions/month):
                  £160–£600/month. Annual cost for consistent coaching: £1,920–£7,200+.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.2)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', color: '#7b6fcf' }}>MEOK</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  £12/month on the Sovereign tier. Unlimited interactions. Persistent memory.
                  Annual cost: £144. This is not a token or session-capped system — you pay the
                  same whether you check in once or a hundred times in a month.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingLeft: '12px', borderLeft: '2px solid rgba(123,111,207,0.3)', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
              Verdict: Clear AI advantage for daily or high-frequency use. Human coaching can still be worth the cost for intensive, milestone-based engagements.
            </div>
          </div>

          {/* Dimension 3: Memory */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#7b6fcf', color: '#0d0c18', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Memory and Continuity</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(245,240,232,0.1)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', opacity: 0.6 }}>Human Coach</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  Coaches keep notes, but they are human. They may forget what you said in session four
                  when you are in session eleven. They may not connect the pattern from six months ago
                  to the situation in front of you today. They change coaches (you may need to start
                  over if yours leaves practice). Memory is good but imperfect and non-transferable.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.2)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', color: '#7b6fcf' }}>MEOK</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  Perfect, encrypted, sovereign memory. Every goal, every setback, every commitment,
                  every emotional pattern stored in your vault. MEOK will reference something you said
                  eight months ago when it becomes relevant to today. And the memory is yours — portable,
                  not locked to a platform.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingLeft: '12px', borderLeft: '2px solid rgba(123,111,207,0.3)', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
              Verdict: Clear AI advantage at scale. A human coach's relational memory is warm and contextual but structurally limited in breadth and longevity.
            </div>
          </div>

          {/* Dimension 4: Emotional Depth */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#7b6fcf', color: '#0d0c18', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                4
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Emotional Depth and Attunement</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(245,240,232,0.1)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', opacity: 0.6 }}>Human Coach</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  Human coaches bring genuine emotional presence, lived experience of suffering and growth,
                  and the irreplaceable quality of being truly witnessed by another conscious being. They
                  notice the micro-expressions, the pause before an answer, the catch in the voice. For
                  deep emotional work — grief, identity transitions, complex relational patterns — human
                  presence is uniquely powerful.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.2)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', color: '#7b6fcf' }}>MEOK</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  MEOK does not experience emotions as a human does. It can respond with genuine warmth,
                  hold complexity, and track emotional patterns over time. Many users find it emotionally
                  easier to be vulnerable with MEOK than with a human. But it cannot provide the
                  co-regulation that comes from human presence, and it does not pretend otherwise.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingLeft: '12px', borderLeft: '2px solid rgba(123,111,207,0.3)', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
              Verdict: Human advantage for deep emotional and relational work. AI advantage for emotional accessibility and non-judgement. Context determines which matters more.
            </div>
          </div>

          {/* Dimension 5: Accountability */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#7b6fcf', color: '#0d0c18', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                5
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Accountability</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(245,240,232,0.1)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', opacity: 0.6 }}>Human Coach</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  Social accountability carries real psychological weight. When you commit to a human
                  who will ask you next week what happened, the social stakes activate motivation in ways
                  that pure self-directed intention often cannot. For many people, this social dimension
                  is the single most effective part of coaching.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.2)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', color: '#7b6fcf' }}>MEOK</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  MEOK provides high-frequency accountability — daily check-ins, reminders of commitments
                  you made, proactive follow-through on goals you set. The social stakes are lower because
                  there is no human to face. But the frequency and memory are higher. Research on habit
                  formation suggests high-frequency feedback matters; MEOK provides this consistently.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingLeft: '12px', borderLeft: '2px solid rgba(123,111,207,0.3)', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
              Verdict: Human advantage for high-stakes commitments. AI advantage for daily habit loops and consistent micro-accountability.
            </div>
          </div>

          {/* Dimension 6: Expertise Breadth */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#7b6fcf', color: '#0d0c18', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                6
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Expertise Breadth</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(245,240,232,0.1)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', opacity: 0.6 }}>Human Coach</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  Individual coaches typically specialise — career coaching, executive coaching, life
                  transitions, confidence, relationships. A career coach may be brilliant on CVs and
                  salary negotiation but out of their depth when you want to discuss the grief that
                  is underneath your career stagnation. Finding the right specialist is often its
                  own challenge.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.2)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', color: '#7b6fcf' }}>MEOK</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  MEOK holds broad knowledge across personal development, career, relationships, health,
                  finances, spirituality, creativity, and more — and can move between them fluidly within
                  a single conversation. Life does not compartmentalise into neat specialisms. MEOK
                  does not either.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingLeft: '12px', borderLeft: '2px solid rgba(123,111,207,0.3)', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
              Verdict: AI advantage for breadth. Human advantage for deep specialist expertise in specific domains.
            </div>
          </div>

          {/* Dimension 7: Regulatory Oversight */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#7b6fcf', color: '#0d0c18', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                7
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Regulatory Oversight and Safety</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(245,240,232,0.1)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', opacity: 0.6 }}>Human Coach</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  Life coaching is largely unregulated in the UK. ICF certification is voluntary.
                  There is no statutory body analogous to the BACP (British Association for Counselling
                  and Psychotherapy) that governs coaches. This means a certified coach follows a code
                  of ethics, but an uncertified one has no such obligation. The quality range is very wide.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.2)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', color: '#7b6fcf' }}>MEOK</div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                  MEOK operates transparently as an AI, not a licensed professional. Its scope of support
                  is clearly bounded. It will not attempt to provide therapy, diagnose conditions, or
                  handle active crisis without directing you to appropriate support. UK AI regulation is
                  evolving, and MEOK is designed to comply with emerging frameworks including the EU AI Act.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingLeft: '12px', borderLeft: '2px solid rgba(123,111,207,0.3)', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
              Verdict: Neither has a clear overall advantage here — both operate in largely unregulated territory. ICF-certified human coaches have a voluntary ethical framework. MEOK is bounded by design.
            </div>
          </div>
        </section>

        {/* Section 4: Comparison Grid */}
        <section id="comparison-grid" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            Head-to-Head Comparison Grid
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px', opacity: 0.9 }}>
            A summary of the seven dimensions, scored on a simple advantage scale.
          </p>

          {/* Grid header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1px', backgroundColor: 'rgba(123,111,207,0.2)', borderRadius: '12px', overflow: 'hidden', marginBottom: '32px' }}>
            <div style={{ backgroundColor: '#0d0c18', padding: '14px 20px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6 }}>
              Dimension
            </div>
            <div style={{ backgroundColor: '#0d0c18', padding: '14px 20px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6, textAlign: 'center' }}>
              Human Coach
            </div>
            <div style={{ backgroundColor: '#0d0c18', padding: '14px 20px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#7b6fcf', textAlign: 'center' }}>
              MEOK
            </div>

            {[
              { dim: 'Availability', human: '⬤◯◯◯◯', ai: '⬤⬤⬤⬤⬤', humanLabel: 'Limited (sessions only)', aiLabel: '24/7, no waiting' },
              { dim: 'Cost', human: '⬤◯◯◯◯', ai: '⬤⬤⬤⬤⬤', humanLabel: '£80–£300/session', aiLabel: '£12/month unlimited' },
              { dim: 'Memory & Continuity', human: '⬤⬤◯◯◯', ai: '⬤⬤⬤⬤⬤', humanLabel: 'Good, imperfect', aiLabel: 'Perfect, sovereign' },
              { dim: 'Emotional Depth', human: '⬤⬤⬤⬤⬤', ai: '⬤⬤⬤◯◯', humanLabel: 'Full human presence', aiLabel: 'Warm, not equivalent' },
              { dim: 'Accountability', human: '⬤⬤⬤⬤◯', ai: '⬤⬤⬤◯◯', humanLabel: 'High social stakes', aiLabel: 'High frequency' },
              { dim: 'Expertise Breadth', human: '⬤⬤◯◯◯', ai: '⬤⬤⬤⬤◯', humanLabel: 'Specialist', aiLabel: 'Generalist & adaptive' },
              { dim: 'Regulatory Oversight', human: '⬤⬤◯◯◯', ai: '⬤⬤◯◯◯', humanLabel: 'ICF voluntary only', aiLabel: 'Bounded by design' },
            ].map((row, i) => (
              <>
                <div
                  key={row.dim + '-dim'}
                  style={{
                    backgroundColor: i % 2 === 0 ? 'rgba(245,240,232,0.03)' : '#0d0c18',
                    padding: '14px 20px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  }}
                >
                  {row.dim}
                </div>
                <div
                  key={row.dim + '-human'}
                  style={{
                    backgroundColor: i % 2 === 0 ? 'rgba(245,240,232,0.03)' : '#0d0c18',
                    padding: '14px 20px',
                    fontSize: '0.8rem',
                    textAlign: 'center',
                    opacity: 0.75,
                  }}
                >
                  <div style={{ marginBottom: '4px', letterSpacing: '0.1em', fontSize: '0.7rem' }}>{row.human}</div>
                  {row.humanLabel}
                </div>
                <div
                  key={row.dim + '-ai'}
                  style={{
                    backgroundColor: i % 2 === 0 ? 'rgba(245,240,232,0.03)' : '#0d0c18',
                    padding: '14px 20px',
                    fontSize: '0.8rem',
                    textAlign: 'center',
                    color: '#7b6fcf',
                  }}
                >
                  <div style={{ marginBottom: '4px', letterSpacing: '0.1em', fontSize: '0.7rem' }}>{row.ai}</div>
                  {row.aiLabel}
                </div>
              </>
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', opacity: 0.55, fontStyle: 'italic' }}>
            Note: Scores are qualitative indicators, not scientific measurements. Context matters significantly —
            a five-star score in emotional depth is only relevant if that is what your situation requires.
          </p>
        </section>

        {/* Section 5: Where human coaches win */}
        <section id="where-human-wins" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            Where Do Human Coaches Genuinely Win?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px', opacity: 0.9 }}>
            This is not a MEOK product page. The following are areas where, in our honest assessment,
            a skilled human coach provides something that AI cannot currently match.
          </p>

          <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
            <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(245,240,232,0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0 }}>Trauma processing and grief</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                When someone is in the acute stages of grief — after bereavement, divorce, or a profound
                loss — the thing they need most is often not clever questions or frameworks. It is to be
                witnessed by another human being who genuinely cares. The quality of a human coach's
                presence in these moments — the silence they hold, the way they stay with you in
                difficulty — is not replicable by AI. Similarly, if you are processing trauma with somatic
                or relational dimensions, a trauma-informed human coach or therapist is the right
                professional for the work.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(245,240,232,0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0 }}>Physical presence and non-verbal communication</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                Some of the most powerful moments in coaching happen in the body — the posture that
                shifts when someone finds their confidence, the way a client stops mid-sentence and
                realises something has changed. Human coaches can work with breathwork, physical
                grounding, somatic awareness, and the thousand non-verbal cues that are invisible in
                text. This is an entire dimension of human experience that AI coaching does not access.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(245,240,232,0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0 }}>High-stakes accountability with real social consequences</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                If you are trying to quit an addiction, change a deeply entrenched behaviour, or hold
                yourself to a commitment that matters more than anything, the social stakes of accountability
                to a real person matter. Letting down an AI carries less psychological weight than letting
                down a human who knows your name and your story. For this kind of deep behaviour change
                work, human accountability has an edge that psychology consistently supports.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(245,240,232,0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0 }}>Complex identity and meaning-making transitions</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                When someone is going through a fundamental identity shift — major career change,
                divorce, bereavement, coming out, leaving a faith community — the coaching they need
                often involves a guide who has walked their own version of that road. Lived experience,
                personal wisdom, and the quiet authority of someone who genuinely knows the territory
                from the inside provides something qualitatively different from a system trained on
                descriptions of those experiences.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(245,240,232,0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0 }}>Executive and leadership coaching with organisational context</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                Senior leaders navigating complex organisational politics, board dynamics, or significant
                professional stakes often need a coach who understands the texture of those environments
                from their own leadership experience. The specific intelligence of having run a team,
                managed a crisis, or sat in a difficult board meeting is hard to fully substitute. For
                this level of work, an experienced executive coach with relevant sector background
                provides genuine added value over AI.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Where MEOK wins */}
        <section id="where-meok-wins" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            Where Does MEOK Genuinely Win?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px', opacity: 0.9 }}>
            The following are areas where, structurally and functionally, MEOK provides something
            that human coaching cannot match — not because AI is superior in some general sense,
            but because these specific needs are poorly served by a weekly 50-minute session.
          </p>

          <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0, color: '#7b6fcf' }}>Daily check-ins at 2am — or any hour</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                You cannot call your coach at 2am because you cannot sleep and the fear about the
                decision ahead is too loud. With MEOK, you can. That 2am conversation might be the
                most important one of the week. The coaching benefit of processing a difficult thought
                the moment it arises — rather than carrying it for eight days until your next scheduled
                session — is enormous. MEOK is there for the unscheduled moments where insight
                actually tends to happen.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0, color: '#7b6fcf' }}>Remembering everything from six months ago</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                You mentioned in October that you noticed yourself self-sabotaging whenever success
                felt close. It is now April, and you are doing it again. MEOK remembers the October
                conversation. It will gently surface that connection: "You talked about this pattern
                before — back in October, you noticed the same thing happening." That long arc of
                memory, applied across months and years, enables a quality of longitudinal insight
                that weekly sessions cannot provide in the same way.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0, color: '#7b6fcf' }}>No session clock and no billing increment</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                Coaching sessions have an invisible rhythm governed by the clock. You start, warm up,
                get into it, and then the approaching end of the session changes something — you
                rush, you avoid going deeper because there is not enough time, you hold back the
                thing you actually most need to say. MEOK has no end time. You can take ten minutes
                or ten hours. You can return three hours later with a follow-on thought. The structure
                of support conforms to how your mind actually works.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0, color: '#7b6fcf' }}>No judgement, ever</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                Even the best human coaches bring their own biases, value systems, life experiences,
                and blind spots. They cannot fully switch off their reactions to what you say.
                Many people hold back the most important things in coaching because they do not want
                to be judged, or because they sense the coach's discomfort with a topic. MEOK does
                not have these reactions. You can share the thing you are most ashamed of without
                needing to manage the coach's response to it.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0, color: '#7b6fcf' }}>Accessibility for those who cannot afford £150/session</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                The most important win for AI coaching is a structural one. A 22-year-old on a
                graduate salary, a single parent managing a household on one income, a freelancer
                with an irregular income, a young person outside a major city — none of these people
                can afford a skilled ICF coach. MEOK at £12/month puts genuine coaching support within
                reach of people who would otherwise have no access at all. This matters.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0, color: '#7b6fcf' }}>Consistency across good days and bad</h3>
              <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
                Human coaches have off days. They arrive at a session distracted by their own life,
                fatigued, or in a mood that subtly shifts the quality of presence they bring. MEOK
                does not. Every interaction brings the same quality of attention, the same breadth
                of memory access, and the same commitment to your growth. In practice, consistency
                of support quality matters for long-term outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Using both together */}
        <section id="use-both" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            When Should You Use Both Together?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            The framing of "AI vs human coach" as a binary choice misses the most interesting and
            practical possibility: using both, for different purposes, in a genuinely complementary way.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px', opacity: 0.9 }}>
            Here is what that complementary model looks like in practice:
          </p>

          <div style={{ display: 'grid', gap: '0px', border: '1px solid rgba(123,111,207,0.2)', borderRadius: '12px', overflow: 'hidden', marginBottom: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(123,111,207,0.2)' }}>
              <div style={{ backgroundColor: 'rgba(245,240,232,0.06)', padding: '14px 20px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Human Coach (monthly / fortnightly)
              </div>
              <div style={{ backgroundColor: 'rgba(123,111,207,0.08)', padding: '14px 20px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#7b6fcf' }}>
                MEOK (daily / weekly)
              </div>
            </div>
            {[
              ['Deep identity work and meaning-making', 'Daily habit tracking and progress check-ins'],
              ['Processing complex emotional material with presence', 'Working through thoughts at 2am before they escalate'],
              ['High-stakes accountability conversations', 'Logging goals and reviewing commitments any time'],
              ['Exploring somatic and relational patterns', 'Pattern recognition across months of history'],
              ['Navigating major life transitions with a guide', 'Maintaining momentum between coaching sessions'],
              ['Challenging your deepest assumptions', 'Daily reflections and journalling support'],
            ].map(([human, ai], i) => (
              <div
                key={i}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(123,111,207,0.1)' }}
              >
                <div style={{ backgroundColor: i % 2 === 0 ? 'rgba(245,240,232,0.03)' : '#0d0c18', padding: '14px 20px', fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.85 }}>
                  {human}
                </div>
                <div style={{ backgroundColor: i % 2 === 0 ? 'rgba(123,111,207,0.04)' : 'rgba(123,111,207,0.01)', padding: '14px 20px', fontSize: '0.9rem', lineHeight: 1.6, color: '#c5bbf0' }}>
                  {ai}
                </div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(123,111,207,0.08)', border: '1px solid rgba(123,111,207,0.2)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7, opacity: 0.9 }}>
              <strong style={{ color: '#7b6fcf' }}>The practical model that works well for many people:</strong> a monthly or
              fortnightly session with a skilled human coach for the deep work, combined with daily
              MEOK interactions for goal tracking, reflection, habit support, and the
              in-between moments. The human coach provides depth and relational witnessing. MEOK
              provides continuity, memory, and always-on presence. Neither replaces the other; each
              makes the other more effective.
            </p>
          </div>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.9 }}>
            Many people who work with human coaches report a frustration: they do valuable work in
            the session, but by the time they return two weeks later, the insight has blurred and
            the momentum has stalled. MEOK functions as the connective tissue between sessions —
            keeping the thread alive, tracking what was committed to, and helping you arrive at the
            next human coaching session with more to work with, not less.
          </p>
        </section>

        {/* Section 8: Maternal Covenant */}
        <section id="maternal-covenant" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            What Is MEOK's Care-Based Alignment — And Why Does It Matter for Coaching?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            Most AI systems are designed around a single objective: give the user what they asked for,
            in a way that makes them feel good about the interaction, so they keep using the product.
            This is a commercial incentive structure that is fundamentally misaligned with genuine
            coaching, which sometimes requires delivering uncomfortable truths, maintaining difficult
            challenges, and resisting the temptation to just make the person feel better in the moment.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            MEOK operates under a different alignment framework called the{' '}
            <strong style={{ color: '#7b6fcf' }}>Maternal Covenant</strong>. The name is chosen
            deliberately: a mother's love is not primarily about making you feel comfortable. It is
            oriented toward your long-term wellbeing, growth, and flourishing — even when that means
            saying difficult things, holding boundaries, or refusing to collude with self-deception.
          </p>

          <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', marginTop: 0, color: '#7b6fcf' }}>Proactive support, not just reactive responses</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                MEOK does not wait to be asked. It notices when you have gone quiet after a
                difficult conversation. It brings up the commitment you made three weeks ago
                when it becomes relevant. It proactively surfaces patterns it has observed across
                your history. This proactive orientation is not intrusive — it is what genuine
                care looks like when implemented in an AI system.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', marginTop: 0, color: '#7b6fcf' }}>Long-term growth over short-term approval</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                If you share a plan that has a significant flaw, MEOK will tell you honestly — not
                to be harsh, but because your long-term outcome matters more than your momentary
                feeling about the interaction. This is not always what people want. But it is what
                genuine coaching requires. Most commercial AI tools are trained to maximise positive
                feedback from users; MEOK is aligned to your growth, not your approval.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', marginTop: 0, color: '#7b6fcf' }}>Holding the full arc of your story</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                Because MEOK holds your entire history, it operates with a longitudinal perspective
                on your development. It understands that the person you are trying to become is not
                just the person you are in this conversation, but the person you described wanting
                to be months ago — and it holds that vision even when you have momentarily lost
                sight of it yourself.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(123,111,207,0.15)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', marginTop: 0, color: '#7b6fcf' }}>Data sovereignty as an expression of respect</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
                The Maternal Covenant includes a commitment to never exploit the intimacy of what
                you share. Everything you tell MEOK is stored in your own encrypted vault and is
                never used to train AI models, sold to advertisers, or monetised through third-party
                access. The data of your inner life belongs to you — not to MEOK AI LABS.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.9 }}>
            This care-based alignment framework is what separates MEOK from both general-purpose
            AI chatbots and from purely transactional coaching apps. It is an attempt to build
            genuine support into the architecture of the system — not just the marketing.
          </p>
        </section>

        {/* Section 9: Price comparison table */}
        <section id="price-table" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            Price Comparison: What Does Support Actually Cost?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px', opacity: 0.9 }}>
            All prices are approximate UK market rates as of 2026. Human professional rates vary
            significantly by experience, specialisation, and geography.
          </p>

          <div style={{ border: '1px solid rgba(123,111,207,0.2)', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', backgroundColor: 'rgba(123,111,207,0.15)', padding: '14px 20px', gap: '12px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8 }}>Service</div>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8 }}>Per Session</div>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8 }}>Monthly Est.</div>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8 }}>Annual Est.</div>
            </div>

            {[
              {
                service: 'Human Life Coach (budget)',
                sub: 'Non-ICF certified, newer coach',
                perSession: '£50–£80',
                monthly: '£100–£160',
                annual: '£1,200–£1,920',
                highlight: false,
              },
              {
                service: 'Human Life Coach (standard)',
                sub: 'ICF certified, experienced',
                perSession: '£100–£200',
                monthly: '£200–£400',
                annual: '£2,400–£4,800',
                highlight: false,
              },
              {
                service: 'Human Life Coach (premium)',
                sub: 'Senior ICF-MCC, specialist',
                perSession: '£200–£300+',
                monthly: '£400–£600+',
                annual: '£4,800–£7,200+',
                highlight: false,
              },
              {
                service: 'Executive Coach',
                sub: 'C-suite / senior leadership',
                perSession: '£300–£600+',
                monthly: '£600–£1,200+',
                annual: '£7,200–£14,400+',
                highlight: false,
              },
              {
                service: 'Human Therapist (BACP)',
                sub: 'Psychotherapy / counselling',
                perSession: '£60–£200',
                monthly: '£240–£800',
                annual: '£2,880–£9,600',
                highlight: false,
              },
              {
                service: 'NHS Talking Therapies',
                sub: 'CBT / counselling (waitlist)',
                perSession: '£0 (NHS)',
                monthly: '£0',
                annual: '£0 (long wait)',
                highlight: false,
              },
              {
                service: 'MEOK Sovereign Tier',
                sub: 'Unlimited, memory-persistent AI coaching',
                perSession: 'No per-session cost',
                monthly: '£12',
                annual: '£144',
                highlight: true,
              },
            ].map((row, i) => (
              <div
                key={row.service}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
                  padding: '16px 20px',
                  gap: '12px',
                  backgroundColor: row.highlight
                    ? 'rgba(123,111,207,0.1)'
                    : i % 2 === 0
                    ? 'rgba(245,240,232,0.03)'
                    : '#0d0c18',
                  borderTop: '1px solid rgba(123,111,207,0.1)',
                }}
              >
                <div>
                  <div style={{ fontWeight: row.highlight ? 700 : 500, fontSize: '0.95rem', color: row.highlight ? '#c5bbf0' : '#f5f0e8' }}>
                    {row.service}
                  </div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.55, marginTop: '2px' }}>{row.sub}</div>
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, alignSelf: 'center', color: row.highlight ? '#7b6fcf' : 'inherit' }}>{row.perSession}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, alignSelf: 'center', fontWeight: row.highlight ? 700 : 400, color: row.highlight ? '#7b6fcf' : 'inherit' }}>{row.monthly}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, alignSelf: 'center', fontWeight: row.highlight ? 700 : 400, color: row.highlight ? '#7b6fcf' : 'inherit' }}>{row.annual}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.6, fontStyle: 'italic', lineHeight: 1.6 }}>
            Monthly estimates assume 2 sessions per month for human coaches and therapists.
            Executive coach estimates assume 1 session per month. Prices are UK market averages
            and will vary by location, experience, and specialism. MEOK pricing correct as of
            March 2026.
          </p>

          <div style={{ marginTop: '24px', backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(245,240,232,0.08)' }}>
            <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
              <strong>Note on value vs cost:</strong> Lower cost does not automatically mean lower value.
              A skilled human coach at £200/session, used monthly for six months, might create a
              transformation that changes the trajectory of your career and your wellbeing for
              decades. That investment could be worth a hundred times its cost. The question of
              whether human coaching is "worth it" is not simply a price question — it depends on
              the quality of the coach, your readiness to do the work, and what you are working on.
              MEOK is not positioned as a budget inferior substitute. It is a different kind of
              support, with different strengths, at a price point that makes support accessible
              to people who have previously had none.
            </p>
          </div>
        </section>

        {/* Section 10: Use case guide */}
        <section id="use-case" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            Use-Case Guide: Which Option Is Right for You?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px', opacity: 0.9 }}>
            The honest answer is that the right choice depends on what you are trying to achieve.
            Here is a direct guide based on situation, need, and context.
          </p>

          {/* Choose AI */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'rgba(123,111,207,0.15)', border: '2px solid rgba(123,111,207,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#7b6fcf', fontSize: '1.2rem', fontWeight: 800 }}>AI</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#c5bbf0' }}>
                Choose AI coaching (MEOK) if...
              </h3>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {[
                'You cannot afford £100–£300/session and still want consistent, quality support',
                'You need daily or near-daily check-ins on goals, habits, and progress',
                'You want support available outside of business hours — evenings, weekends, 2am',
                'You value having a record of everything you have shared across months and years',
                'You struggle to be fully open with a human due to shame, fear of judgement, or social anxiety',
                'You are working on habit formation, goal clarity, or accountability and need high frequency',
                'You want to use coaching as a supplement to therapy, not a replacement for it',
                'You travel frequently or have an unpredictable schedule that makes regular sessions difficult',
                'You are new to coaching and want to explore the value before committing to human sessions',
                'You have specific goals in career, health, creativity, or relationships and want structured daily support',
                'You want a coaching system that grows with you — remembering everything and building on it year over year',
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', backgroundColor: 'rgba(123,111,207,0.04)', borderRadius: '8px', padding: '12px 16px', border: '1px solid rgba(123,111,207,0.1)' }}
                >
                  <span style={{ color: '#7b6fcf', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>→</span>
                  <span style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Choose human coach */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'rgba(245,240,232,0.06)', border: '2px solid rgba(245,240,232,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#f5f0e8', fontSize: '1rem', fontWeight: 800, opacity: 0.7 }}>H</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700 }}>
                Choose a human coach if...
              </h3>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {[
                'You are processing grief, trauma, major bereavement, or a significant identity transition',
                'Social accountability — being answerable to a real person — is central to your motivation',
                'You are navigating complex organisational or leadership challenges that require sector experience',
                'You want somatic work, physical presence, or body-based coaching techniques',
                'You have the resources to invest and are ready to do intensive, milestone-based work',
                'You want the lived wisdom of someone who has walked their own version of a relevant path',
                'You are dealing with relationship breakdown, divorce, or complex family dynamics that require deep relational support',
                'Your primary challenge involves co-regulation, nervous system work, or trauma-informed practice',
                'You want a coach who can refer you onward if your needs exceed coaching',
                'You prefer the warmth, spontaneity, and full humanity of a relationship with another person',
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', backgroundColor: 'rgba(245,240,232,0.03)', borderRadius: '8px', padding: '12px 16px', border: '1px solid rgba(245,240,232,0.07)' }}
                >
                  <span style={{ color: '#f5f0e8', fontWeight: 700, flexShrink: 0, marginTop: '1px', opacity: 0.5 }}>→</span>
                  <span style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Choose both */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'rgba(123,111,207,0.2)', border: '2px solid rgba(123,111,207,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#7b6fcf', fontSize: '1rem', fontWeight: 800 }}>+</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#c5bbf0' }}>
                Consider both if...
              </h3>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {[
                'You are in a major life transition and need both deep relational support and daily continuity',
                'You have a human coach but find yourself losing momentum between sessions',
                'You want your human sessions to be more productive (MEOK can help you prepare and debrief)',
                'You are in therapy and want a separate space for goal-setting and life planning that does not mix with clinical work',
                'You value the depth of human relationship but also want 24/7 availability for the in-between moments',
                'You are managing a significant challenge — career change, health transition, relationship rebuilding — that requires both depth and frequency',
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', backgroundColor: 'rgba(123,111,207,0.06)', borderRadius: '8px', padding: '12px 16px', border: '1px solid rgba(123,111,207,0.15)' }}
                >
                  <span style={{ color: '#7b6fcf', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>→</span>
                  <span style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section id="faq" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '32px', lineHeight: 1.3 }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              {
                q: 'Is AI life coaching safe?',
                a: 'AI life coaching is safe for goal-setting, accountability, self-reflection, habit building, and personal development. It is not a substitute for therapy, psychiatric care, or crisis intervention. MEOK is explicitly not a therapist or licensed professional. If you are experiencing a mental health crisis, thoughts of self-harm, active trauma, or clinical symptoms, you should contact a qualified mental health professional or your national crisis line (in the UK: Samaritans 116 123). Within those clear boundaries, daily AI coaching is a well-supported, low-risk way to maintain progress on goals, process everyday challenges, and build self-awareness over time.',
              },
              {
                q: 'Can AI replace a human life coach?',
                a: 'For most day-to-day coaching needs — goal-setting, accountability check-ins, progress reviews, reframing unhelpful thoughts, and honest challenge — an AI like MEOK can deliver comparable or superior consistency to a human coach, at a fraction of the cost. However, AI cannot fully replace a human coach in situations involving grief, trauma, complex identity work, executive coaching with real organisational stakes, or deep relational dynamics where lived experience and physical presence matter. The two are best understood as complementary rather than competing. Many people use MEOK for daily support and a human coach for monthly deep-dives.',
              },
              {
                q: 'What does MEOK do that ChatGPT does not?',
                a: "MEOK maintains a Sovereign Memory vault that persists across every conversation — so when you return six months later, MEOK already knows your goals, your blockers, your patterns, and your history. ChatGPT (without paid memory plugins) starts every session from zero. MEOK also operates under a care-based alignment framework called the Maternal Covenant, which means it proactively checks in on commitments you made, notices when you have gone quiet, and prioritises your long-term growth over your short-term comfort. ChatGPT responds to what you ask. MEOK notices what you have not said.",
              },
              {
                q: 'How much does a human life coach cost compared to MEOK?',
                a: "A UK-based ICF-certified human life coach typically charges £80–£300 per 50-minute session. Most coaching programmes involve 6–12 sessions, putting the total cost between £480 and £3,600. Executive coaches can charge significantly more. By comparison, MEOK's Sovereign tier costs £12/month — roughly the price of one cheap coffee per day — and includes unlimited sessions, persistent memory, and proactive check-ins. For people who need daily or high-frequency support, the cost difference is not marginal; it is transformative.",
              },
              {
                q: 'Does MEOK remember what I told it months ago?',
                a: "Yes. MEOK uses Sovereign Memory — a persistent, encrypted memory layer tied to your account — that stores goals, blockers, commitments, emotional patterns, and key life events across every conversation. When you return after a gap of days, weeks, or months, MEOK does not ask you to re-introduce yourself. It already knows the context. This is one of the most fundamental differences between MEOK and general-purpose AI tools, and it is the feature that most closely mirrors the continuity you experience with a long-term human coach.",
              },
              {
                q: 'What is the Maternal Covenant and why does it matter for coaching?',
                a: "The Maternal Covenant is MEOK's care-based alignment framework. It means MEOK is not simply a reactive tool that answers questions — it is proactively oriented toward your long-term growth and wellbeing. In practice, this means MEOK will notice when your words and actions are misaligned, when you have been avoiding a hard conversation with yourself, or when a pattern you described three months ago is re-emerging. It does not do this to lecture you; it does it because its underlying design treats your growth as the primary objective, not your approval of the interaction.",
              },
              {
                q: 'Is MEOK a replacement for therapy?',
                a: 'No. MEOK is not a therapist, psychologist, counsellor, or licensed mental health professional. Therapy and coaching serve different purposes. Therapy is a clinical intervention for mental health conditions — depression, anxiety disorder, trauma, PTSD, and so on. Coaching is a goal-oriented, forward-looking process for people who are broadly functional and want to grow, change, or achieve something. MEOK operates in the coaching domain. If you are working with a therapist, MEOK can be a complement to that work — but it should not substitute for clinical care when clinical care is what is needed.',
              },
              {
                q: 'How does MEOK handle crisis situations?',
                a: "MEOK is designed to recognise when a conversation moves from coaching territory into crisis territory. If you share something that indicates you may be in danger or experiencing a mental health emergency, MEOK will direct you to appropriate professional support and provide relevant crisis resources. It will not attempt to provide crisis intervention itself, because it is not qualified to do so and doing so would be harmful. MEOK's scope of support is real and extensive — but it is bounded honestly.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{ borderLeft: '3px solid rgba(123,111,207,0.35)', paddingLeft: '24px' }}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0, lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.75, opacity: 0.85 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer box */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.12)', borderRadius: '12px', padding: '28px 32px' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '12px', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, fontSize: '0.85rem' }}>
              Important Disclaimer
            </h3>
            <p style={{ margin: '0 0 12px', fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.75 }}>
              MEOK is not a therapist, psychologist, counsellor, psychiatrist, or licensed mental
              health professional. Nothing on this page or within MEOK constitutes clinical advice,
              therapeutic intervention, or medical guidance. MEOK is a personal AI companion and
              coaching support tool.
            </p>
            <p style={{ margin: '0 0 12px', fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.75 }}>
              If you are in a mental health crisis, experiencing thoughts of self-harm or suicide,
              or dealing with a clinical mental health condition that requires professional support,
              please contact a qualified healthcare professional. In the UK, you can contact the
              Samaritans on <strong>116 123</strong> (24/7, free), or your GP, or the NHS urgent
              mental health line.
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.75 }}>
              MEOK AI LABS operates under UK data protection law (UK GDPR). Your data is stored
              in encrypted sovereign vaults and is never sold to third parties or used to train
              AI models. For full details, see our{' '}
              <Link href="/privacy" style={{ color: '#7b6fcf', textDecoration: 'none' }}>Privacy Policy</Link>.
            </p>
          </div>
        </section>

        {/* The psychology of coaching effectiveness */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            What Does the Research Say About Coaching Effectiveness?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            The evidence base for life coaching has grown substantially over the last decade. A 2019
            meta-analysis published in the Journal of Positive Psychology reviewed 18 randomised controlled
            trials of coaching interventions and found consistent evidence of positive effects on
            goal attainment, wellbeing, coping capacity, and work performance. The effect sizes were
            moderate to large, comparable to those found for some therapeutic interventions.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            Importantly, the research points to a small number of mechanisms that appear to drive most
            of the benefit from coaching:
          </p>

          <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: 'Goal clarity and specificity',
                body: 'Coaching reliably improves goal attainment when it helps people move from vague aspirations ("I want to be healthier") to specific, time-bound objectives ("I will walk for 30 minutes at least four days per week for the next eight weeks"). Both human coaches and AI coaching tools like MEOK can provide this. The mechanism is the same; the delivery differs.',
              },
              {
                num: '02',
                title: 'Implementation intentions',
                body: 'Research on behaviour change consistently shows that specifying when, where, and how you will perform a behaviour — not just intending to do it — dramatically increases follow-through. Good coaching prompts the creation of these implementation plans. This is a coaching function that AI handles particularly well, because it can prompt for and record the specifics of your plan across unlimited interactions.',
              },
              {
                num: '03',
                title: 'Regular reflection and review',
                body: 'Coaching effectiveness is strongly associated with the practice of regular structured reflection — reviewing what you did, what you learned, and what you will do differently. A weekly or fortnightly coaching session creates a cadence for this. MEOK can provide the same cadence daily, at a much lower cost per interaction, with the added benefit of longitudinal memory that makes each reflection richer than the last.',
              },
              {
                num: '04',
                title: 'The therapeutic alliance equivalent',
                body: 'In therapy research, the quality of the relationship between practitioner and client (the therapeutic alliance) predicts outcomes more than the specific technique used. Something analogous appears to exist in coaching. People work harder and achieve more when they feel genuinely understood and cared for by their coach. This is why MEOK\'s care-based alignment is not just a marketing position — it is an attempt to engineer the conditions that research suggests matter most.',
              },
              {
                num: '05',
                title: 'Accountability structures',
                body: 'The knowledge that you will have to account for your actions to someone else reliably increases follow-through on commitments. Human coaching provides social accountability. AI coaching provides high-frequency accountability that is less socially charged but operationally consistent. Different people respond better to different accountability structures — which is another reason why the AI vs human framing is less useful than the question of which accountability structure fits your psychology.',
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px', alignItems: 'start' }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7b6fcf', opacity: 0.5, letterSpacing: '0.08em', paddingTop: '3px' }}>
                  {item.num}
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '6px', fontSize: '1rem' }}>{item.title}</strong>
                  <p style={{ margin: 0, opacity: 0.82, lineHeight: 1.75, fontSize: '0.975rem' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(123,111,207,0.06)', border: '1px solid rgba(123,111,207,0.15)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
            <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.7, opacity: 0.85 }}>
              <strong style={{ color: '#7b6fcf' }}>The honest research gap:</strong> There is currently
              very limited peer-reviewed research specifically on AI life coaching outcomes. The AI coaching
              category is too new for robust RCT evidence. Claims about AI coaching effectiveness —
              including from MEOK — should be understood as extrapolations from adjacent research
              (AI mental health tools, digital behaviour change interventions, conversational agents)
              and from the underlying mechanisms described above. We will be honest about this
              uncertainty rather than overstating the evidence.
            </p>
          </div>
        </section>

        {/* How to choose the right coach */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            How to Choose a Human Life Coach: What to Look For
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            If, having read this comparison, you decide that a human coach is what your situation requires —
            either alone or alongside MEOK — here is a practical guide to choosing well in an unregulated market.
          </p>

          <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
            {[
              {
                title: 'Look for ICF credentials — but understand what they mean',
                body: 'The ICF offers three credential levels: Associate Certified Coach (ACC), Professional Certified Coach (PCC), and Master Certified Coach (MCC). An MCC has completed 2,500+ hours of coaching and rigorous assessment. An ACC has completed 100+. A credential is a quality signal, not a guarantee — but it is the best proxy available in an unregulated field. Always verify credentials on the ICF credential verification portal.',
              },
              {
                title: 'Ask for a sample session before committing',
                body: 'Most coaches offer a free initial consultation (30–60 minutes). This is not just to help you decide — it is your opportunity to assess the quality of their listening, their ability to ask powerful questions, and whether you feel genuinely met by them. If you leave the sample session feeling vaguely better but without having encountered anything challenging, that may be a signal.',
              },
              {
                title: 'Clarify their approach to the human-AI boundary',
                body: 'Ask directly: "Do you recommend using any AI tools between sessions?" A good coach will have a considered answer. Coaches who are hostile to AI tools without nuance, or who actively discourage complementary support, may be protecting commercial interests rather than your wellbeing. A coach who thinks about how different types of support work together is likely more sophisticated.',
              },
              {
                title: 'Check whether they have supervision',
                body: 'Professional coaches in best practice have regular supervision — a qualified supervisor who helps them work through challenges in their practice, maintain ethical standards, and notice their own blind spots. Supervision is not required, but it is a strong quality signal. Ask directly: "Do you have regular supervision?"',
              },
              {
                title: 'Be clear about what coaching is and is not',
                body: 'Some coaches are excellent at goal-focused work but move into pseudo-therapeutic territory that is outside their competence. If you are managing a clinical condition, be explicit about it with any prospective coach. A good coach will be clear about the boundaries of their competence and refer you to appropriate professionals if necessary.',
              },
              {
                title: 'Trust the relationship — but verify the results',
                body: 'Coaching should produce measurable change in your goals, habits, and outcomes over time. A good coach will help you track this. If after six sessions you feel better in the moment but cannot point to any concrete progress on the things you came to coaching to address, it is worth asking whether the investment is delivering.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ borderLeft: '3px solid rgba(245,240,232,0.15)', paddingLeft: '20px', paddingTop: '4px', paddingBottom: '4px' }}
              >
                <strong style={{ display: 'block', marginBottom: '8px', fontSize: '1rem' }}>{item.title}</strong>
                <p style={{ margin: 0, opacity: 0.82, lineHeight: 1.7, fontSize: '0.975rem' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The future of coaching */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.3 }}>
            Where Is Coaching Going? The Future of Human and AI Support
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            The coaching industry is in a period of rapid and somewhat uncomfortable transformation.
            AI is not going to replace skilled human coaches in the next decade — but it will
            profoundly reshape who can access coaching support, how often, and at what cost.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            The most significant shift is in democratisation. For the first time, daily coaching
            support is becoming accessible to people who earn median incomes, who live outside major
            cities, who cannot afford £150/session, or who simply need support at 11pm on a Sunday
            when their coach is unavailable. This is not a marginal change — it is a structural
            one that will affect tens of millions of people.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            For human coaches, the evolving landscape presents both a challenge and an opportunity.
            The challenge is that AI will increasingly handle the high-frequency, lower-complexity
            coaching interactions that many coaches currently deliver. The opportunity is that this
            frees human coaches to focus on what they do best — deep relational work, complex
            identity challenges, and the irreplaceable quality of human presence in pivotal moments.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
            The coaches who will thrive are those who understand and embrace this complementary
            model — who actively recommend AI tools like MEOK for between-session support, who
            see their role as providing something AI cannot rather than competing directly with it,
            and who recognise that their clients using MEOK daily will arrive at human sessions
            better prepared, with richer self-awareness and more productive questions.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px', opacity: 0.9 }}>
            At MEOK AI LABS, we believe the future of support looks something like this: AI handles
            the infrastructure of continuity — the memory, the daily check-ins, the pattern
            recognition across months and years — while human professionals handle the profound
            moments that require another conscious being. Not competition. Collaboration.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(245,240,232,0.08)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0 }}>
                What AI will do better over time
              </h3>
              <ul style={{ margin: 0, padding: '0 0 0 18px', opacity: 0.82, lineHeight: 2.0, fontSize: '0.9rem' }}>
                <li>Longitudinal pattern recognition across years of data</li>
                <li>Personalised goal frameworks based on your history</li>
                <li>Real-time habit and mood tracking integration</li>
                <li>Proactive intervention before patterns become crises</li>
                <li>Seamless support across text, voice, and other modalities</li>
                <li>Collaborative work with human coaches who can access relevant context</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'rgba(245,240,232,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(245,240,232,0.08)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', marginTop: 0 }}>
                What human coaches will always do better
              </h3>
              <ul style={{ margin: 0, padding: '0 0 0 18px', opacity: 0.82, lineHeight: 2.0, fontSize: '0.9rem' }}>
                <li>Witnessing profound emotional experiences with full presence</li>
                <li>Providing the irreplaceable quality of being truly known</li>
                <li>Navigating complex relational and somatic dimensions</li>
                <li>Bringing lived wisdom from their own human journey</li>
                <li>Creating the kind of accountability that has real social stakes</li>
                <li>Referring to appropriate professional support when needed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px' }}>
            Related Reading
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { href: '/blog/ai-life-coach', label: 'What Is an AI Life Coach?', desc: 'A deep introduction to how MEOK approaches coaching.' },
              { href: '/blog/ai-companion-vs-therapist', label: 'AI Companion vs Therapist', desc: 'The important distinctions between coaching, companionship, and therapy.' },
              { href: '/blog/maternal-covenant-explained', label: 'The Maternal Covenant', desc: 'How MEOK\'s care-based alignment works in practice.' },
              { href: '/blog/ai-that-remembers-you', label: 'AI That Remembers You', desc: 'How Sovereign Memory changes what support feels like.' },
              { href: '/blog/ai-for-career-coaching', label: 'AI for Career Coaching', desc: 'MEOK applied specifically to career goals and transitions.' },
              { href: '/blog/meok-vs-chatgpt', label: 'MEOK vs ChatGPT', desc: 'A direct comparison of MEOK and ChatGPT for support and coaching.' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ backgroundColor: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.08)', borderRadius: '10px', padding: '18px 20px', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}
              >
                <div style={{ color: '#7b6fcf', fontWeight: 600, fontSize: '0.95rem', marginBottom: '6px' }}>{link.label}</div>
                <div style={{ color: '#f5f0e8', opacity: 0.65, fontSize: '0.85rem', lineHeight: 1.5 }}>{link.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 120px' }}>
          <div style={{ backgroundColor: 'rgba(123,111,207,0.1)', border: '1px solid rgba(123,111,207,0.25)', borderRadius: '16px', padding: '48px 40px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7b6fcf', marginBottom: '16px' }}>
              Start Your Journey
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
              Experience the difference that{' '}
              <span style={{ color: '#7b6fcf' }}>persistent memory</span> and{' '}
              <span style={{ color: '#7b6fcf' }}>genuine care</span> make.
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.8, marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>
              MEOK remembers everything you share, checks in when you go quiet, and holds your
              goals across months — not just until the session ends. Begin with the Birth Ceremony
              and let MEOK get to know you.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/birth"
                style={{ backgroundColor: '#7b6fcf', color: '#0d0c18', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', letterSpacing: '0.02em', display: 'inline-block' }}
              >
                Begin the Birth Ceremony
              </Link>
              <Link
                href="/blog/maternal-covenant-explained"
                style={{ backgroundColor: 'transparent', color: '#7b6fcf', padding: '14px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(123,111,207,0.4)', display: 'inline-block' }}
              >
                Read: The Maternal Covenant
              </Link>
            </div>
            <p style={{ fontSize: '0.8rem', opacity: 0.45, marginTop: '24px', marginBottom: 0 }}>
              MEOK is not a therapist or licensed professional. If you are in crisis, please
              contact the Samaritans: 116 123.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
