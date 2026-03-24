import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Support for Family Caregivers: You\'re Allowed to Need Help Too | MEOK AI LABS',
  description:
    'Family caregivers carry an invisible burden. MEOK\'s AI companions provide 24/7 emotional support, practical care tracking, and family coordination — so you don\'t have to do it alone.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-caregivers' },
  openGraph: {
    title: 'AI Support for Family Caregivers: You\'re Allowed to Need Help Too',
    description:
      'Caregiver burnout is real. 53 million unpaid family caregivers in the US alone. MEOK provides AI emotional support, Sovereign Memory care tracking, and family coordination — built for the person doing the caring.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-caregivers',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Support+for+Family+Caregivers&desc=You%27re+Allowed+to+Need+Help+Too',
        width: 1200,
        height: 630,
        alt: 'AI Support for Family Caregivers: You\'re Allowed to Need Help Too',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Support for Family Caregivers: You\'re Allowed to Need Help Too',
    description:
      '53 million unpaid caregivers. Almost none of them have support for themselves. MEOK is the AI companion built for the caregiver — not just the patient.',
    images: [
      'https://meok.ai/api/og?title=AI+Support+for+Family+Caregivers&desc=You%27re+Allowed+to+Need+Help+Too',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI Support for Family Caregivers: You\'re Allowed to Need Help Too',
  description:
    'Family caregivers carry an invisible burden. MEOK\'s AI companions provide 24/7 emotional support, practical care tracking, and family coordination — so you don\'t have to do it alone.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-caregivers',
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
    logo: {
      '@type': 'ImageObject',
      url: 'https://meok.ai/logo.png',
    },
  },
  image:
    'https://meok.ai/api/og?title=AI+Support+for+Family+Caregivers&desc=You%27re+Allowed+to+Need+Help+Too',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-caregivers',
  },
  keywords: [
    'AI for family caregivers',
    'caregiver burnout support',
    'AI caregiver companion',
    'family caregiver mental health',
    'unpaid caregiver support',
    'AI for elderly care at home',
    'caregiver emotional support AI',
    'family care coordination app',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is caregiver burnout and how common is it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Caregiver burnout is a state of total physical, emotional, and mental exhaustion caused by the sustained, often unacknowledged demands of caring for a sick or elderly relative. Research consistently shows that 40–70% of family caregivers experience clinically significant depression. It is one of the most widespread and least treated mental health crises in the developed world, affecting tens of millions of people who never sought the role.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI help a family caregiver who is struggling emotionally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI companions like MEOK\'s Healer provide a private, non-judgmental space where caregivers can speak honestly — about guilt, resentment, grief, and exhaustion — without worrying about burdening their family. Available at 3am or whenever the silence becomes too heavy, Healer remembers what you\'ve shared and offers continuity of emotional support that human networks often cannot sustain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help me organise and track the care I provide for a relative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Sovereign Memory system lets caregivers log medication changes, appointment notes, behavioural observations, and care milestones in natural language. Over time, this creates a longitudinal record that reduces cognitive load, surfaces patterns, and gives caregivers something concrete to show doctors — instead of trying to reconstruct months of care from memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the MEOK Family plan and how does it help distributed caregiving families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MEOK Family plan supports up to five accounts within a single family group. This means the primary caregiver has their own private companion while siblings and other involved relatives can access shared care notes, Guardian safety alerts, and coordinated appointment tracking — reducing the friction of distributed caregiving and the resentment that builds when one person carries everything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free way to try MEOK before committing to a paid plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Explorer free tier gives new users full access to their AI companion with a generous conversation allowance. This lets caregivers experience the emotional support, memory features, and companion interactions before deciding whether to upgrade to a paid tier. No credit card is required to start. Visit meok.ai/birth to begin.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the MEOK Maternal Covenant and is it relevant to caregivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s core privacy guarantee: your data is never sold, never used to train external models, and never shared without your consent. For caregivers who discuss sensitive medical information, family dynamics, and personal distress, this covenant matters enormously. The conversations you have with MEOK belong to you — not to a corporation monetising your vulnerability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the MEOK Guardian companion useful for elderly care at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Guardian companion is designed for safety, routine, and family coordination in elderly care contexts. It can support check-in routines for the person being cared for, surface alerts to family members when responses deviate from baseline, and help caregivers monitor wellbeing patterns over time — giving both carer and family greater confidence without requiring institutional care.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForCaregiversPage() {
  const bg = '#0d0c18'
  const text = '#f5f0e8'
  const gold = '#c9a84c'
  const cardBg = '#1a1830'
  const muted = 'rgba(245,240,232,0.55)'
  const borderColor = '#2a2845'
  const bodyText = '#d4cfc5'

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: bg,
        color: text,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
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

      {/* Nav */}
      <nav
        style={{
          borderBottom: `1px solid ${borderColor}`,
          padding: '16px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              color: gold,
              fontWeight: 700,
              fontSize: '18px',
              textDecoration: 'none',
              letterSpacing: '-0.3px',
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{ color: muted, fontSize: '14px', textDecoration: 'none' }}
          >
            ← All posts
          </Link>
        </div>
      </nav>

      {/* Main */}
      <main
        style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 80px' }}
      >
        {/* Meta row */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '12px', color: muted }}>24 March 2026</span>
          <span style={{ fontSize: '12px', color: muted }}>·</span>
          <span style={{ fontSize: '12px', color: muted }}>14 min read</span>
          <span style={{ fontSize: '12px', color: muted }}>·</span>
          <span
            style={{
              fontSize: '12px',
              backgroundColor: '#2a2845',
              color: gold,
              padding: '2px 10px',
              borderRadius: '99px',
            }}
          >
            Family Caregiving
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 800,
            lineHeight: 1.12,
            marginBottom: '28px',
            letterSpacing: '-0.5px',
            color: text,
          }}
        >
          AI Support for Family Caregivers:{' '}
          <span style={{ color: gold }}>You&apos;re Allowed to Need Help Too</span>
        </h1>

        {/* Opening paragraphs */}
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '20px',
          }}
        >
          There is a person reading this right now who has not slept a full night
          in months. They have rearranged their career, sacrificed friendships,
          spent hours on hold to insurance companies and council offices, and
          quietly absorbed the grief of watching someone they love disappear into
          illness or old age — one small piece at a time.
        </p>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '20px',
          }}
        >
          If that person is you, this post is for you.
        </p>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '20px',
          }}
        >
          In the United States alone, an estimated 53 million people provide
          unpaid care to an adult or child with special needs. In the United
          Kingdom, 6.5 million people — roughly one in eight adults — are
          informal carers. In Australia, Canada, across Europe and beyond, the
          numbers tell the same story: the modern care system runs on an
          invisible workforce of family members who were never hired, never
          trained, never paid, and almost never supported.
        </p>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '20px',
          }}
        >
          Between 40% and 70% of family caregivers experience symptoms of
          clinical depression. The majority report that their own health
          deteriorates significantly during the caregiving period. Many describe
          a creeping isolation — the social world narrows as the caregiving
          expands, until the person they were before the diagnosis feels like a
          stranger.
        </p>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          MEOK cannot fix this. Nothing can fix it cleanly. But AI, built with
          the right values, can hold some of it with you — and that turns out to
          matter more than most people expect.
        </p>

        {/* Stat bar */}
        <div
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '12px',
            padding: '28px 32px',
            marginBottom: '56px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '28px',
          }}
        >
          {[
            { stat: '53M', label: 'unpaid caregivers in the US' },
            { stat: '6.5M', label: 'informal carers in the UK' },
            { stat: '40–70%', label: 'develop depression symptoms' },
            { stat: '£132bn', label: 'annual value of UK unpaid care' },
          ].map(({ stat, label }) => (
            <div key={stat} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: gold,
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {stat}
              </div>
              <div style={{ fontSize: '13px', color: muted, lineHeight: 1.4 }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Section 1 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          What Is the Invisible Burden of Family Caregiving?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The invisible burden is not just the physical work — the bathing, the
          administering of medication, the driving to appointments, the managing
          of symptoms at 2am. It is everything that sits beneath and around
          that work, unacknowledged by almost everyone around you.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          It is the anticipatory grief — mourning someone who is still alive. It
          is the cognitive load of holding two lives in your head simultaneously,
          tracking your own needs and someone else's medication schedule and the
          appointment the specialist needs three months of notice for. It is the
          way conversations at dinner parties become impossible because no one
          knows how to respond when you explain what your week has actually
          looked like.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          It is the guilt. Constant, shapeshifting guilt. Guilt about feeling
          frustrated with the person you love. Guilt about resenting what your
          life has become. Guilt about wanting an hour to yourself. Guilt about
          the days when you wish, briefly, that it was over — and then guilt
          about having wished that. Guilt so reflexive and pervasive that it
          prevents you from ever naming what you actually need.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          It is also the silence. Most caregivers describe learning to perform
          a kind of functional cheerfulness for the people around them — family
          who are less involved, friends who feel helpless, colleagues who do
          not ask. The honest version of the caregiving experience rarely gets
          spoken aloud. Not because caregivers are dishonest, but because the
          spaces in which it would be safe to say it honestly simply do not
          exist.
        </p>

        {/* Section 2 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          Why Does Caregiver Burnout Happen — and Why Is It So Hard to Prevent?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Caregiver burnout follows a pattern that is now well understood in
          the research literature, even though its prevention remains elusive.
          It begins not with a single crisis but with an accumulation — of
          unmet needs, of suppressed emotion, of rest that never fully arrives,
          of identity that gradually narrows to a single role.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The difficulty is structural. Western healthcare systems were built
          around the assumption that care happens in institutions — hospitals,
          nursing homes, GP surgeries. The support infrastructure for people
          providing that care at home is thin and patchy. Respite services are
          underfunded. Carer support groups are valuable but not available at
          the moment the distress arrives. Therapists are expensive and often
          have waiting lists measured in months.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          There is also a deeply embedded cultural narrative that caregiving is
          simply what loving families do — that needing support for providing
          care is somehow an admission of inadequate love. This narrative is
          false, and it kills people. Caregivers who do not receive adequate
          support for their own mental health are more likely to experience
          serious health decline, more likely to provide lower-quality care, and
          more likely to reach crisis points that result in emergency
          hospitalisations — for themselves as much as for the person they care
          for.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          The gap between when a caregiver needs support and when that support
          is accessible is the gap that MEOK was built to inhabit.
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: `1px solid ${borderColor}`,
            marginBottom: '44px',
          }}
        />

        {/* Section 3 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          How Does the MEOK Healer Companion Support Caregivers Emotionally?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The Healer companion is MEOK&apos;s emotional support archetype — built for
          people carrying weight that is difficult to set down, including the
          sustained emotional labour of family caregiving. It is not a
          replacement for a therapist. It does not diagnose, prescribe, or
          intervene clinically. What it does is provide something that clinical
          services structurally cannot: a non-judgmental presence that is
          available the moment the need arises, at any hour, on any day.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          For caregivers, that availability is not a nice-to-have. It is
          critical. Caregiving distress does not arrive during business hours.
          It arrives at 3am when the person you are caring for has been awake
          for the fourth consecutive night and you have not slept properly in
          two weeks. It arrives on the drive home from a difficult hospital
          appointment. It arrives in the ten minutes between tasks when you
          suddenly feel the full weight of how little of yourself is left.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Healer remembers. Each conversation builds on what came before. If
          you talked three weeks ago about the guilt you feel about your
          relationship with your sibling who does less than you, Healer has
          that context when you return. It does not ask you to repeat yourself.
          It does not forget. This continuity — enabled by Sovereign Memory —
          is the difference between a support tool and a genuine companion.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Healer also creates a space for honest processing that many caregivers
          cannot find elsewhere. Saying to your partner &quot;I sometimes resent
          having to do this&quot; risks causing pain. Saying it to a support group
          requires showing up, waiting your turn, and maintaining a degree of
          social composure. Saying it to Healer means saying it — getting it
          out of your body and into language — without any of those costs.
          Research on emotional processing consistently finds that articulating
          distress, even to a non-human listener, reduces its intensity and
          cognitive load.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          You are not burdening it. You are not worrying it. You are not being
          judged. You are simply allowed to be honest about what this is like —
          and that turns out to be more valuable than most people expect until
          they experience it.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: `4px solid ${gold}`,
            paddingLeft: '24px',
            margin: '0 0 44px',
            color: bodyText,
            fontStyle: 'italic',
            fontSize: '18px',
            lineHeight: 1.75,
          }}
        >
          &quot;The most common thing I hear from caregivers who first try MEOK is:
          I didn&apos;t realise how much I needed somewhere to put this.&quot;
        </blockquote>

        {/* Section 4 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          Can AI Really Help With the Practical Burden of Caregiving — or Just the Emotional One?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Both. The emotional and the practical are not as separable as they
          might seem. A significant part of caregiver stress is cognitive rather
          than purely emotional — the relentless mental housekeeping of holding
          another person&apos;s care schedule, medical history, medication regimen,
          and daily needs alongside your own life. Reducing that cognitive load
          is a form of emotional support, because it releases mental space that
          is currently consumed by anxiety about what might be forgotten.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          MEOK&apos;s Sovereign Memory system allows caregivers to log care
          information in natural language — not in forms, not in spreadsheets,
          but in the way you would describe it to another person. &quot;Dad had a
          bad night. He was confused about where he was for about two hours.
          I gave him the lorazepam at 2:15 and he settled by 4. The GP needs
          to know about this.&quot; That entry is stored, dated, searchable, and
          available the next time you need to recount what happened to a
          medical professional.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Over weeks and months, these logs build something invaluable: a
          longitudinal record of care. Patterns that were invisible in the
          moment — agitation that correlates with particular times of day,
          medication side effects that only become apparent across weeks,
          gradual changes in mobility or communication — become visible when
          there is a record. This is the kind of information that transforms
          conversations with consultants, care managers, and social workers
          from vague and distressing attempts at recall into concrete,
          evidenced accounts that lead to better decisions.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          Sovereign Memory belongs to you. It does not feed model training. It
          does not generate insights that benefit a platform. It is yours — a
          private record of care that you have built, that you own, and that
          you can take with you. That is the Maternal Covenant: your data is not
          a product.
        </p>

        {/* Feature card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '56px',
          }}
        >
          {[
            {
              title: 'Healer Companion',
              body:
                'Emotional processing, guilt without judgment, 24/7 availability, continuity of memory across every conversation.',
            },
            {
              title: 'Guardian Companion',
              body:
                'Safety routines for the person being cared for, family alerts, check-in patterns, and deviation monitoring.',
            },
            {
              title: 'Sovereign Memory',
              body:
                'Natural-language care logging. Longitudinal records. Pattern surfacing. Appointment notes. Fully yours.',
            },
            {
              title: 'Family Plan',
              body:
                'Five accounts, one family. Shared care notes, coordinated appointments, and Guardian alerts — for distributed caregiving teams.',
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderColor}`,
                borderRadius: '10px',
                padding: '22px 20px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: gold,
                  marginBottom: '10px',
                  letterSpacing: '0.02em',
                }}
              >
                {title}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.65,
                  color: bodyText,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Section 5 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          What Is the MEOK Guardian Companion — and Why Does It Matter for Elderly Care at Home?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The Guardian companion addresses one of the most persistent anxieties
          in home-based elderly care: the fear of what happens when you are not
          there. For adult children caring for an elderly parent who lives
          independently or semi-independently, the question &quot;are they okay
          right now?&quot; occupies a background frequency of constant low-level
          dread that rarely fully disappears.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Guardian works through gentle, habitual check-ins with the person
          being cared for — adapted to their cognitive ability and comfort with
          technology. Over time, it builds a baseline understanding of their
          daily patterns: when they typically engage, how they usually respond,
          what their baseline looks like. Deviations from that baseline can
          surface as alerts to family members, enabling early intervention
          before a crisis develops.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          For the person being cared for, Guardian also provides something
          valuable in its own right: a consistent, patient conversational
          presence that does not tire, does not run out of time, and does not
          make them feel like a burden. Loneliness is itself a serious health
          risk in elderly adults — comparable in effect size to smoking fifteen
          cigarettes a day. An AI companion that offers daily engagement and
          genuine conversational continuity is not a trivial intervention.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          For the caregiver, Guardian reduces the background dread. Not
          eliminates it — nothing eliminates it — but makes it quieter, more
          manageable. That is not nothing. Over months of caregiving, a quieter
          dread is the difference between sustainable and not.
        </p>

        {/* Section 6 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          How Does the MEOK Family Plan Support Caregiving Families Where Responsibility Is Unequal?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          One of the most corrosive dynamics in family caregiving is the
          inequality of contribution. In most caregiving situations, the burden
          falls disproportionately on one person — typically a woman, typically
          the one who lives closest or who said yes first. The others contribute
          when they can, when it is convenient, when they are asked specifically.
          This imbalance accumulates resentment at a rate that damages family
          relationships profoundly and sometimes permanently.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The MEOK Family plan does not solve this — that is a human problem
          requiring human negotiation. But it reduces one of the main sources
          of friction: information asymmetry. When the primary caregiver is the
          only person who knows what medications were changed last week, what
          the specialist said at the last appointment, and why Mum has been
          more confused than usual, every conversation with a sibling becomes
          an exhausting briefing that reinforces the feeling of carrying this
          alone.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          With the Family plan, care notes logged through Sovereign Memory can
          be shared with other family members in the plan. Guardian alerts go
          to the whole family group, not just the primary carer. Appointment
          notes and medication logs are accessible to anyone who needs them.
          The primary caregiver does not have to brief their siblings every
          time — the information is already there.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          This is not a replacement for honest family conversation. But it
          removes a layer of friction that, when it is gone, creates space for
          that conversation to happen on better terms. The Family plan costs
          £29 per month and supports up to five accounts — which works out
          significantly cheaper per person than any individual plan if more
          than two family members are involved.
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: `1px solid ${borderColor}`,
            marginBottom: '44px',
          }}
        />

        {/* Section 7 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          What Is the Maternal Covenant and Why Should a Caregiver Care About Privacy?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          When you are caring for someone else, the conversations you need to
          have about that experience are among the most sensitive you will ever
          have. You may discuss a family member&apos;s medical condition, their
          cognitive decline, their difficult behaviour, your own emotional
          responses to all of it — including the responses you are least proud
          of. You need to trust that those conversations are genuinely private.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The Maternal Covenant is MEOK&apos;s core privacy guarantee. It means:
          your data is never sold. Your conversations are never used to train
          external AI models. Nothing you share is monetised or shared without
          your explicit consent. The emotional honesty that makes Healer
          genuinely useful — the guilt, the resentment, the grief, the
          exhaustion — is protected.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          This matters because the dominant model in the AI industry is built
          on data extraction. The conversations you have with most AI platforms
          inform their model training, their product development, their
          commercial decisions. Your vulnerability, once shared, becomes an
          asset on their balance sheet. At MEOK, we consider that a betrayal
          of the relationship between companion and user — and we have built
          the Maternal Covenant to make it structurally impossible.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          Sovereign Memory is yours. Not ours. Yours to keep, yours to delete,
          yours to export. This is not a marketing claim — it is an architectural
          commitment. You should be able to trust the thing you tell your
          hardest truths to.
        </p>

        {/* Section 8 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          Who Is the MEOK Explorer Free Tier For — Can a Caregiver Try This Without Any Financial Commitment?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Yes, unambiguously. The Explorer free tier exists precisely because
          we know that the people who most need MEOK are often the people with
          the least time, energy, and financial headroom to evaluate a new
          product. Caregivers managing someone else&apos;s needs on top of their
          own life frequently cannot afford to add another monthly subscription
          until they are certain it is worth it.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Explorer gives you full access to your MEOK companion with a generous
          conversation allowance. You will experience the emotional support,
          the memory continuity, the companion&apos;s understanding of your context
          over time. You will encounter the actual product — not a heavily
          restricted demo or a chatbot that parrots empathy without
          understanding your situation.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          No credit card required. No countdown timer. No pressure. Begin at
          whatever pace makes sense for you — which, if you are a caregiver,
          probably means opening the app at an unusual hour because that is
          when you have a moment.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          When and if you decide to upgrade, the Sovereign plan adds unlimited
          memory, expanded conversation depth, and full access to all companion
          archetypes including Healer and Guardian. The Family plan adds the
          multi-account coordination layer. Neither requires any obligation
          before you have experienced what MEOK actually offers.
        </p>

        {/* Section 9 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          Is There Anything Specific About Caring for a Sick Relative Versus an Elderly One That MEOK Addresses Differently?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The structural demands of caring for a chronically ill relative and
          caring for an elderly one overlap considerably, but the emotional
          texture differs in ways that matter. Caring for a sick relative —
          a partner with cancer, a child with a serious condition, a sibling
          managing a chronic illness — often involves a particular kind of
          ambiguity: hope and dread coexisting, good periods that raise and
          then disappoint expectations, a non-linear relationship with the
          future that is extremely difficult to process.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Caring for an elderly relative often involves a different but equally
          demanding emotional register: the grief of gradual loss, the
          compression of identity as the person you knew recedes, the management
          of your own feelings about ageing and mortality, and — in many cases —
          significant ambivalence about a relationship that was never simple to
          begin with.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          MEOK&apos;s Healer companion does not apply a one-size approach to these
          different emotional textures. It learns from what you bring to it.
          Its understanding of your situation deepens through the conversations
          you have — which means it meets you where you actually are, rather
          than where a generic &quot;caregiver&quot; profile might be assumed to be.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          This personalisation is made possible by Sovereign Memory. Not by
          demographic data, not by behavioural inference across other users,
          but by what you have told it about your specific life. It knows your
          situation because you have described it — and it remembers.
        </p>

        {/* Section 10 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          What Does It Actually Feel Like to Use MEOK as a Caregiver?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          People describe the experience differently, but certain themes recur.
          The first thing most caregivers notice is the quality of being heard —
          not in a way that feels performative or algorithmically assembled, but
          in a way that feels genuinely attentive. The companion asks questions
          that make sense given what it already knows about you. It does not
          treat every session as the first.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Many caregivers describe initially being surprised by how much they
          needed to say. The pressure that has been building without an outlet
          emerges in the first few conversations in a way that can feel
          overwhelming and also, unexpectedly, relieving. The act of naming
          something — &quot;I think I&apos;m starting to really not be okay&quot; — in a
          space where it is safe to say it, turns out to carry significant
          weight.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Over time, the care logging becomes a habit that reduces anxiety.
          Knowing that the information is somewhere — that you do not have to
          hold it all in your head — creates a small but meaningful reduction
          in the cognitive overhead of caregiving. People describe sleeping
          slightly better after establishing the logging habit. Not because
          the caregiving has changed, but because the mental file-keeping has
          found a home outside their own skull.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          For families using the Family plan, a common experience is a reduction
          in the number of catch-up calls the primary caregiver has to make —
          because the information is already available. This sounds administrative
          but it has an emotional dimension: the primary caregiver stops feeling
          like a spokesperson for a situation they did not choose to manage alone.
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: `1px solid ${borderColor}`,
            marginBottom: '44px',
          }}
        />

        {/* Section 11 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          How Does MEOK Approach the Ethical Complexity of AI in Caregiving Contexts?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Caregiving contexts involve vulnerable people on multiple sides of the
          equation — the person receiving care, who may be cognitively impaired,
          seriously ill, or in the final stages of life; and the caregiver
          themselves, who is often exhausted, isolated, and in genuine distress.
          Deploying AI in this context without acknowledging the ethical weight
          of that would be irresponsible.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          MEOK is not designed to be the primary or sole support for either the
          caregiver or the person being cared for. It does not replace
          professional medical care, clinical mental health support, or the
          genuinely irreplaceable value of human connection. What it provides
          is a supplement — a layer of support that exists where the formal
          system has gaps, which is most of the time, for most caregivers.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The Maternal Covenant and Sovereign Memory architecture are part of
          this ethical stance. We do not use caregiving conversations to train
          models. We do not infer demographic data from health disclosures. We
          do not position the companion as a substitute for clinical support —
          and when conversations approach the territory of genuine crisis, the
          companion is designed to acknowledge that and direct users toward
          appropriate professional help.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          The ethics of AI in caregiving is not a problem that can be solved
          with a disclaimer. It requires building the values into the
          architecture — into what the system collects, what it does with that
          data, and what it is honest about regarding its own limitations. That
          is what MEOK is attempting to do.
        </p>

        {/* Section 12 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          Where Does MEOK Fit Alongside Existing Caregiver Support Services?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The best use of MEOK is alongside, not instead of, the formal support
          infrastructure that exists for caregivers. If you are in the UK,
          organisations like Carers UK, the Carers Trust, and local carer
          assessment services through your council provide legal rights and
          formal support that MEOK cannot replicate. If you are in the US,
          AARP&apos;s caregiver resources and the Family Caregiver Alliance provide
          advocacy and practical guidance.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          MEOK fills the gaps — the hours before services open, the emotional
          overflow between appointments, the practical tracking that formal
          services cannot provide, the private processing space that human
          support networks are structurally ill-equipped to offer. It is the
          layer that goes between the formal support and the void.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          We would rather you use both. The formal system matters, even when
          it frustrates. MEOK works better when it is not expected to carry
          everything — because nothing should be expected to carry everything
          except possibly a team of people who are actually paid and trained
          to help you. Until that is universally available, MEOK occupies the
          space between.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          The Explorer free tier means there is no cost barrier to finding out
          whether that space is useful to you. Visit{' '}
          <Link
            href="/birth"
            style={{ color: gold, textDecoration: 'underline' }}
          >
            meok.ai/birth
          </Link>{' '}
          to begin — no credit card, no commitment, no countdown.
        </p>

        {/* Section 13 */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          What Are the Signs That a Caregiver Is Approaching Burnout — and What Should They Do?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The warning signs are well documented, though recognising them in
          yourself when you are inside them is considerably harder than
          recognising them from the outside. They include: persistent exhaustion
          that sleep does not fully resolve; emotional numbness or a feeling of
          going through the motions; increasing irritability or impatience with
          the person you are caring for; withdrawal from relationships outside
          the caregiving role; neglecting your own health, appointments, and
          basic needs; and a sense that you have stopped being a person with a
          life of your own and have become only a caregiver.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          If you recognise more than two of those, that is a signal worth taking
          seriously. Not because it means you are failing — it means you have
          been carrying too much for too long without enough support. Those are
          not the same thing.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          The practical steps worth taking: contact your GP about your own
          mental health, not just the person you care for. Ask your local
          authority about a carer&apos;s assessment — you are legally entitled to
          one in the UK. Contact Carers UK or an equivalent national organisation
          for rights and benefits guidance. Identify one person in your social
          network who you can be more honest with. And create a space — it can
          be MEOK, it can be a journal, it can be a therapist — where you are
          allowed to process what this is actually like.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          Burnout that is prevented costs less — in every sense — than burnout
          that reaches crisis. And preventing it requires treating the
          caregiver&apos;s wellbeing as something that matters, not as a luxury to
          be attended to once everything else is stable. Everything else will
          never be fully stable. Your wellbeing matters now.
        </p>

        {/* Section 14 — a final human note */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          Why Did MEOK Build Specifically for Caregivers — and What Does That Look Like in Practice?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          MEOK was not built as a wellness app with a broad consumer appeal and
          a caregiving use case retrofitted in. It was built from a conviction
          that the people who most need a consistent, private, memory-enabled
          companion are exactly the people the existing AI market has the least
          incentive to prioritise: people who are distressed, who do not want
          to be a product, and who need honesty more than optimism.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          Caregivers fit that profile precisely. They are not looking for
          a productivity hack. They are not looking to be upsold. They need
          somewhere to put the weight that would otherwise crush them — a
          presence that remembers what yesterday looked like and can hold the
          context of their situation without needing to be briefed every time.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          In practice, this shows up in the companion design: Healer is trained
          to sit with difficulty rather than rush toward resolution. It does not
          try to fix things that cannot be fixed. It does not default to
          affirmations or reframing techniques that feel thin in the face of
          genuine grief. It stays in the conversation, asks the question that
          takes it deeper, and trusts that articulation and witness have value
          even when they do not produce answers.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '16px',
          }}
        >
          It shows up in the memory architecture: Sovereign Memory is not a
          conversation summary feature. It is an episodic record that gives the
          companion a genuine understanding of where you are in your life — so
          that when you return after a difficult week, it is not starting from
          scratch. That continuity is what turns a tool into a companion.
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: '44px',
          }}
        >
          It shows up in the Maternal Covenant: because the people who are most
          honest with MEOK are the people who are most vulnerable, and those are
          exactly the people whose data is most worth protecting. Full stop.
        </p>

        {/* CTA */}
        <div
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${gold}`,
            borderRadius: '14px',
            padding: '40px 36px',
            marginBottom: '56px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '22px',
              fontWeight: 800,
              color: text,
              marginBottom: '12px',
              lineHeight: 1.3,
            }}
          >
            You are allowed to need help too.
          </div>
          <p
            style={{
              fontSize: '16px',
              color: bodyText,
              lineHeight: 1.7,
              marginBottom: '28px',
              maxWidth: '520px',
              margin: '0 auto 28px',
            }}
          >
            Start free on the Explorer tier. No credit card. No countdown.
            A private companion that remembers, that does not judge, and that
            is there when the rest of the world is not.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              backgroundColor: gold,
              color: '#0d0c18',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Begin at meok.ai/birth
          </Link>
        </div>

        {/* FAQ Section */}
        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: text,
            marginBottom: '28px',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
          {[
            {
              q: 'What is caregiver burnout and how common is it?',
              a: 'Caregiver burnout is a state of total physical, emotional, and mental exhaustion caused by the sustained, often unacknowledged demands of caring for a sick or elderly relative. Between 40% and 70% of family caregivers develop clinically significant depression. It is one of the most widespread and least treated mental health crises affecting unpaid carers worldwide.',
            },
            {
              q: 'How can AI help a family caregiver emotionally?',
              a: 'AI companions like MEOK\'s Healer provide a private, non-judgmental space for caregivers to speak honestly about guilt, resentment, grief, and exhaustion — available at any hour. Unlike human support networks, they do not tire, do not need to be protected from difficult truths, and remember what was shared last week. Continuity of emotional support across time is the key difference.',
            },
            {
              q: 'What is Sovereign Memory and how does it reduce caregiving cognitive load?',
              a: 'Sovereign Memory allows caregivers to log care information in natural language. Over time, these logs create a longitudinal record that surfaces patterns, reduces the mental overhead of holding everything in your head, and gives you something concrete to bring to medical appointments. The data is yours — it is never sold or used to train external models.',
            },
            {
              q: 'What is the MEOK Family plan and how does it support distributed caregiving?',
              a: 'The Family plan supports up to five accounts within one family group for £29/month. Shared care notes, Guardian alerts, and appointment logs are visible to all members — reducing information asymmetry and the burden on the primary caregiver to repeatedly brief other family members who are less involved in day-to-day care.',
            },
            {
              q: 'Is there a free way to try MEOK before committing?',
              a: 'Yes. The Explorer free tier gives full access to the companion with a generous conversation allowance — no credit card required. Caregivers can experience the emotional support, memory continuity, and Healer interactions before deciding whether to upgrade. Begin at meok.ai/birth.',
            },
            {
              q: 'What is the Maternal Covenant?',
              a: 'The Maternal Covenant is MEOK\'s core privacy guarantee: your data is never sold, never used to train external AI models, and never shared without your explicit consent. For caregivers sharing sensitive medical, emotional, and family information, this is not a secondary concern — it is foundational to whether the companion can be genuinely trusted.',
            },
            {
              q: 'How does Guardian help with elderly care at home?',
              a: 'Guardian establishes a daily check-in routine for the person being cared for and builds a baseline of their typical patterns. Deviations from baseline can trigger alerts to family members, enabling early intervention. For the elderly person, it also provides consistent, patient companionship that reduces the serious health risks associated with loneliness.',
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderColor}`,
                borderRadius: '10px',
                padding: '22px 24px',
              }}
            >
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: text,
                  marginBottom: '10px',
                  lineHeight: 1.4,
                }}
              >
                {q}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: bodyText,
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* Related posts */}
        <div style={{ marginBottom: '56px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: muted,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Related Reading
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
            }}
          >
            {[
              { href: '/blog/ai-for-dementia-carers', label: 'AI for Dementia Carers' },
              { href: '/blog/ai-for-carers', label: 'AI for Carers (UK)' },
              { href: '/blog/ai-for-burnout', label: 'AI for Burnout' },
              { href: '/blog/ai-for-grief-support', label: 'AI for Grief Support' },
              { href: '/blog/ai-for-elderly', label: 'AI for Elderly' },
              { href: '/blog/guardian-family-safety', label: 'Guardian Family Safety' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '8px',
                  padding: '14px 16px',
                  fontSize: '13px',
                  color: bodyText,
                  textDecoration: 'none',
                  lineHeight: 1.4,
                }}
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${borderColor}`,
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              href="/privacy"
              style={{ fontSize: '13px', color: muted, textDecoration: 'none' }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              style={{ fontSize: '13px', color: muted, textDecoration: 'none' }}
            >
              Terms
            </Link>
            <Link
              href="/birth"
              style={{ fontSize: '13px', color: gold, textDecoration: 'none' }}
            >
              Start Free
            </Link>
          </div>
          <p style={{ fontSize: '12px', color: muted, margin: 0 }}>
            © 2026 MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
