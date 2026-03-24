import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Support for OCD: Between Sessions, Between Spikes | MEOK AI LABS',
  description:
    'OCD is not tidiness — it is intrusive thoughts and compulsions. Learn how AI companions support ERP therapy between sessions, why reassurance is harmful, and how MEOK refuses to enable compulsions.',
  keywords: [
    'AI for OCD',
    'OCD AI support UK',
    'ERP therapy AI companion',
    'OCD between sessions support',
    'intrusive thoughts AI',
    'pure O OCD',
    'OCD-UK',
    'MEOK OCD support',
    'OCD reassurance seeking',
    'NHS IAPT OCD',
    'NICE guidelines OCD',
    'NOCD UK',
    'exposure response prevention AI',
  ],
  authors: [{ name: 'Nicholas Templeman', url: 'https://meok.app' }],
  openGraph: {
    title: 'AI Support for OCD: Between Sessions, Between Spikes',
    description:
      'OCD is not tidiness — it is intrusive thoughts and compulsions. Learn how AI companions support ERP therapy without enabling reassurance compulsions.',
    type: 'article',
    publishedTime: '2026-03-24T00:00:00Z',
    authors: ['Nicholas Templeman'],
    siteName: 'MEOK AI LABS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Support for OCD: Between Sessions, Between Spikes',
    description:
      'OCD misconceptions debunked. Why AI must refuse reassurance compulsions. How MEOK supports ERP therapy between sessions without making OCD worse.',
  },
  alternates: {
    canonical: 'https://meok.app/blog/ai-for-ocd-support',
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Support for OCD: Between Sessions, Between Spikes',
  description:
    'A clinically informed guide to how AI companions can support people with OCD between therapy sessions — including what OCD actually is, why ERP is the gold standard treatment, how reassurance-seeking harms recovery, and how MEOK is designed to supplement rather than undermine specialist care.',
  datePublished: '2026-03-24T00:00:00Z',
  dateModified: '2026-03-24T00:00:00Z',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    jobTitle: 'Founder, MEOK AI LABS',
    url: 'https://meok.app',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.app',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.app/blog/ai-for-ocd-support',
  },
  about: [
    { '@type': 'Thing', name: 'Obsessive-Compulsive Disorder' },
    { '@type': 'Thing', name: 'Exposure and Response Prevention' },
    { '@type': 'Thing', name: 'AI mental health support' },
  ],
  keywords:
    'OCD, ERP, exposure response prevention, intrusive thoughts, reassurance seeking, pure O, OCD-UK, MEOK, AI companion, between sessions support',
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is OCD really? Is it just about being tidy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. OCD (Obsessive-Compulsive Disorder) is not about tidiness or personality quirks. It is a serious anxiety disorder characterised by intrusive, unwanted thoughts (obsessions) that cause significant distress, and repetitive behaviours or mental acts (compulsions) performed to neutralise that distress. Compulsions provide only temporary relief and ultimately strengthen the OCD cycle. The so-called "tidiness" stereotype captures perhaps 5% of OCD presentations and actively harms people who do not recognise themselves in it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ERP and why is it the gold standard for OCD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Exposure and Response Prevention (ERP) is a specialist form of cognitive behavioural therapy (CBT) with the strongest evidence base for OCD. It involves deliberately confronting feared triggers (exposure) while resisting the urge to perform compulsions (response prevention). Over time this teaches the brain that the obsessional fear does not materialise and that the anxiety subsides on its own — without the compulsion. NICE guidelines recommend ERP-based CBT as the first-line treatment for OCD in adults and young people.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is reassurance harmful for OCD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Reassurance-seeking is itself a compulsion. When someone with OCD asks "Are you sure I didn\'t do that thing?" or "But I\'m not actually a bad person, am I?" and receives a reassuring answer, the short-term anxiety drops — but the OCD cycle is reinforced. The brain learns that seeking reassurance is the solution, so the urge returns stronger. Any system — human or AI — that routinely provides reassurance to OCD-driven questions is actively worsening the condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK give me reassurance when I ask for it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. MEOK is explicitly designed not to provide reassurance compulsions. This is a deliberate clinical decision, not a limitation. When MEOK recognises reassurance-seeking patterns — repeated questions seeking certainty, requests for confirmation that a feared event did or did not happen, demands for safety guarantees — it will acknowledge your distress with warmth, name what is happening without shame, and redirect toward uncertainty-tolerance rather than providing the reassurance itself. This is alignment with ERP principles, not indifference.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Pure-O OCD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '"Pure-O" is an informal term for OCD presentations where the compulsions are primarily mental rather than behavioural — such as mental reviewing, mental reassurance, internal argument with thoughts, or thought suppression. The name is slightly misleading because Pure-O still involves compulsions; they just happen inside the head rather than as visible rituals. Pure-O is frequently misdiagnosed or missed entirely, and people with it often suffer for years without recognising their experience as OCD.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI help with OCD between therapy sessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A well-designed AI companion can provide consistent, non-judgmental presence during the difficult stretches between ERP sessions — helping to process the emotional weight of intrusive thoughts without engaging the content, supporting grounding and distress tolerance in spike moments, gently prompting reflection on what the person\'s therapist would say, and reminding them that thoughts are not facts and uncertainty is tolerable. Crucially, this support must never provide reassurance or validate avoidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get specialist OCD treatment in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'In the UK, OCD-UK (ocduk.org) is the leading charity providing information, support, and therapist directories. You can access NHS ERP therapy through a GP referral to your local IAPT (Improving Access to Psychological Therapies) service, now rebranded as NHS Talking Therapies. NICE guidelines (CG31) specify ERP-based CBT as first-line treatment. For specialist intensive treatment, NOCD offers ERP therapy online. Private ERP therapists can be found via the BABCP (British Association for Behavioural and Cognitive Psychotherapies) accredited therapist directory.',
      },
    },
  ],
}

// ── Design tokens ──────────────────────────────────────────────────────────────

const BG = '#0d0c18'
const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BODY_COLOR = 'rgba(245,240,232,0.82)'
const MUTED = 'rgba(245,240,232,0.5)'
const DIM = 'rgba(245,240,232,0.38)'
const GOLD_LOW = 'rgba(201,168,76,0.07)'
const GOLD_MID = 'rgba(201,168,76,0.15)'
const GOLD_BORDER = 'rgba(201,168,76,0.2)'
const GOLD_BOX = 'rgba(201,168,76,0.06)'

// ── Reusable style objects ─────────────────────────────────────────────────────

const sPage: React.CSSProperties = {
  minHeight: '100vh',
  background: BG,
  color: TEXT,
  fontFamily: "Georgia, 'Times New Roman', serif",
}

const sNav: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.1rem 2rem',
  borderBottom: `1px solid ${GOLD_MID}`,
  position: 'sticky' as const,
  top: 0,
  background: 'rgba(13,12,24,0.96)',
  backdropFilter: 'blur(10px)',
  zIndex: 50,
}

const sNavBrand: React.CSSProperties = {
  fontWeight: 800,
  fontSize: '1.1rem',
  color: TEXT,
  letterSpacing: '-0.02em',
  textDecoration: 'none',
}

const sNavLinks: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
}

const sNavLink: React.CSSProperties = {
  color: MUTED,
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const sMain: React.CSSProperties = {
  maxWidth: '760px',
  margin: '0 auto',
  padding: '3rem 1.5rem 5rem',
}

const sTag: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: GOLD,
  background: GOLD_LOW,
  border: `1px solid ${GOLD_MID}`,
  borderRadius: '4px',
  padding: '0.25rem 0.6rem',
  marginBottom: '1.25rem',
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const sH1: React.CSSProperties = {
  fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
  fontWeight: 900,
  color: TEXT,
  lineHeight: 1.2,
  marginBottom: '1rem',
  letterSpacing: '-0.025em',
}

const sByline: React.CSSProperties = {
  fontSize: '0.875rem',
  color: MUTED,
  marginBottom: '2rem',
  fontFamily: "system-ui, -apple-system, sans-serif",
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '0.4rem',
  alignItems: 'center',
}

const sBylineSep: React.CSSProperties = {
  color: DIM,
}

const sLede: React.CSSProperties = {
  fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
  lineHeight: 1.75,
  color: BODY_COLOR,
  borderLeft: `3px solid ${GOLD}`,
  paddingLeft: '1.25rem',
  marginBottom: '2.5rem',
}

const sBodyP: React.CSSProperties = {
  fontSize: '1.05rem',
  lineHeight: '1.875',
  color: BODY_COLOR,
  marginBottom: '1.3rem',
}

const sH2: React.CSSProperties = {
  fontSize: 'clamp(1.2rem, 2.4vw, 1.5rem)',
  fontWeight: 800,
  color: TEXT,
  lineHeight: 1.3,
  marginBottom: '0.9rem',
  marginTop: '2.75rem',
  paddingLeft: '1rem',
  borderLeft: `3px solid ${GOLD}`,
  letterSpacing: '-0.01em',
}

const sH3: React.CSSProperties = {
  fontSize: '1.05rem',
  fontWeight: 700,
  color: TEXT,
  marginBottom: '0.5rem',
  marginTop: '1.6rem',
}

const sDivider: React.CSSProperties = {
  border: 'none',
  borderTop: `1px solid ${GOLD_MID}`,
  margin: '2.5rem 0',
}

const sInlineLink: React.CSSProperties = {
  color: GOLD,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
}

const sCallout: React.CSSProperties = {
  background: GOLD_LOW,
  borderLeft: `3px solid ${GOLD}`,
  borderRadius: '0 8px 8px 0',
  padding: '1rem 1.25rem',
  marginBottom: '1.5rem',
  fontSize: '1rem',
  lineHeight: 1.75,
  color: BODY_COLOR,
}

const sWarning: React.CSSProperties = {
  background: 'rgba(220, 60, 60, 0.08)',
  borderLeft: '3px solid rgba(220,80,80,0.7)',
  borderRadius: '0 8px 8px 0',
  padding: '1rem 1.25rem',
  marginBottom: '1.5rem',
  fontSize: '1rem',
  lineHeight: 1.75,
  color: BODY_COLOR,
}

const sWarningLabel: React.CSSProperties = {
  fontWeight: 700,
  color: 'rgba(240,120,100,0.95)',
  display: 'block',
  marginBottom: '0.3rem',
  fontSize: '0.85rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const sCalloutLabel: React.CSSProperties = {
  fontWeight: 700,
  color: GOLD,
  display: 'block',
  marginBottom: '0.3rem',
  fontSize: '0.85rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const sFaqSection: React.CSSProperties = {
  marginTop: '3rem',
}

const sFaqItem: React.CSSProperties = {
  marginBottom: '1.5rem',
  padding: '1.25rem 1.5rem',
  background: GOLD_BOX,
  border: `1px solid ${GOLD_MID}`,
  borderRadius: '8px',
}

const sFaqQ: React.CSSProperties = {
  fontWeight: 700,
  color: TEXT,
  fontSize: '1rem',
  marginBottom: '0.55rem',
}

const sFaqA: React.CSSProperties = {
  fontSize: '0.975rem',
  lineHeight: 1.75,
  color: BODY_COLOR,
}

const sResourceBox: React.CSSProperties = {
  marginTop: '2.5rem',
  background: GOLD_BOX,
  border: `1px solid ${GOLD_BORDER}`,
  borderRadius: '10px',
  padding: '1.5rem 1.75rem',
}

const sResourceTitle: React.CSSProperties = {
  fontWeight: 800,
  color: GOLD,
  fontSize: '1rem',
  marginBottom: '0.9rem',
  letterSpacing: '-0.01em',
}

const sResourceList: React.CSSProperties = {
  margin: 0,
  padding: '0 0 0 1.2rem',
  lineHeight: 2,
  fontSize: '0.95rem',
  color: BODY_COLOR,
}

const sCta: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)',
  border: `1px solid rgba(201,168,76,0.25)`,
  borderRadius: '14px',
  padding: '2.5rem 2rem',
  textAlign: 'center' as const,
  marginTop: '3rem',
}

const sCtaHeadline: React.CSSProperties = {
  fontWeight: 800,
  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
  color: TEXT,
  marginBottom: '0.7rem',
}

const sCtaBody: React.CSSProperties = {
  fontSize: '0.975rem',
  color: MUTED,
  marginBottom: '1.4rem',
  lineHeight: 1.7,
}

const sCtaBtn: React.CSSProperties = {
  display: 'inline-block',
  background: GOLD,
  color: '#0d0c18',
  fontWeight: 800,
  fontSize: '0.95rem',
  borderRadius: '8px',
  padding: '0.7rem 1.75rem',
  textDecoration: 'none',
  letterSpacing: '-0.01em',
}

const sFooter: React.CSSProperties = {
  borderTop: `1px solid ${GOLD_MID}`,
  padding: '2rem 1.5rem',
  textAlign: 'center' as const,
  fontSize: '0.82rem',
  color: DIM,
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const sFooterLink: React.CSSProperties = {
  color: MUTED,
  textDecoration: 'none',
  margin: '0 0.5rem',
}

const sBreadcrumb: React.CSSProperties = {
  fontSize: '0.82rem',
  color: DIM,
  marginBottom: '1.5rem',
  fontFamily: "system-ui, -apple-system, sans-serif",
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
  flexWrap: 'wrap' as const,
}

const sBreadcrumbLink: React.CSSProperties = {
  color: MUTED,
  textDecoration: 'none',
}

const sBreadcrumbSep: React.CSSProperties = {
  color: DIM,
}

const sTableOfContents: React.CSSProperties = {
  background: GOLD_BOX,
  border: `1px solid ${GOLD_MID}`,
  borderRadius: '10px',
  padding: '1.4rem 1.6rem',
  marginBottom: '2.5rem',
}

const sTocTitle: React.CSSProperties = {
  fontWeight: 700,
  color: GOLD,
  fontSize: '0.85rem',
  letterSpacing: '0.07em',
  textTransform: 'uppercase' as const,
  marginBottom: '0.75rem',
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const sTocList: React.CSSProperties = {
  margin: 0,
  padding: '0 0 0 1.1rem',
  lineHeight: 2.1,
  fontSize: '0.93rem',
}

const sTocLink: React.CSSProperties = {
  color: MUTED,
  textDecoration: 'none',
}

const sStatGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '1rem',
  marginBottom: '2rem',
}

const sStatCard: React.CSSProperties = {
  background: GOLD_BOX,
  border: `1px solid ${GOLD_MID}`,
  borderRadius: '8px',
  padding: '1.1rem 1.25rem',
}

const sStatNumber: React.CSSProperties = {
  fontSize: '1.75rem',
  fontWeight: 900,
  color: GOLD,
  lineHeight: 1.1,
  marginBottom: '0.3rem',
}

const sStatLabel: React.CSSProperties = {
  fontSize: '0.82rem',
  color: MUTED,
  lineHeight: 1.4,
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const sThemeGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '0.85rem',
  marginBottom: '1.5rem',
}

const sThemeCard: React.CSSProperties = {
  background: GOLD_LOW,
  border: `1px solid ${GOLD_MID}`,
  borderRadius: '8px',
  padding: '0.85rem 1rem',
}

const sThemeTitle: React.CSSProperties = {
  fontWeight: 700,
  color: TEXT,
  fontSize: '0.9rem',
  marginBottom: '0.3rem',
}

const sThemeDesc: React.CSSProperties = {
  fontSize: '0.82rem',
  color: MUTED,
  lineHeight: 1.5,
}

// ── Page component ─────────────────────────────────────────────────────────────

export default function AiForOcdSupportPage() {
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

      <div style={sPage}>

        {/* ── NAV ─────────────────────────────────────────────────────────── */}
        <nav style={sNav}>
          <Link href="/" style={sNavBrand}>MEOK AI LABS</Link>
          <ul style={sNavLinks}>
            <li><Link href="/blog" style={sNavLink}>Blog</Link></li>
            <li><Link href="/#features" style={sNavLink}>Features</Link></li>
            <li><Link href="/#waitlist" style={sNavLink}>Join Waitlist</Link></li>
          </ul>
        </nav>

        {/* ── MAIN ────────────────────────────────────────────────────────── */}
        <main style={sMain}>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={sBreadcrumb}>
            <Link href="/" style={sBreadcrumbLink}>Home</Link>
            <span style={sBreadcrumbSep}>›</span>
            <Link href="/blog" style={sBreadcrumbLink}>Blog</Link>
            <span style={sBreadcrumbSep}>›</span>
            <span>AI Support for OCD</span>
          </nav>

          {/* Tag */}
          <div style={sTag}>Mental Health · OCD · ERP</div>

          {/* H1 */}
          <h1 style={sH1}>
            AI Support for OCD: Between Sessions, Between Spikes
          </h1>

          {/* Byline */}
          <div style={sByline}>
            <span>By Nicholas Templeman, Founder — MEOK AI LABS</span>
            <span style={sBylineSep}>·</span>
            <span>24 March 2026</span>
            <span style={sBylineSep}>·</span>
            <span>~2,500 words</span>
            <span style={sBylineSep}>·</span>
            <span>12 min read</span>
          </div>

          {/* Lede */}
          <p style={sLede}>
            OCD is not about tidiness. It is not a personality quirk, a lifestyle preference,
            or a joke. It is a debilitating anxiety disorder affecting roughly 750,000 people
            in the UK — and for many of them, the distance between therapy sessions is the
            hardest terrain to navigate. This post is for those people: honest about what AI
            can do, explicit about what it must never do, and clear about where MEOK stands.
          </p>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" style={sTableOfContents}>
            <div style={sTocTitle}>Contents</div>
            <ol style={sTocList}>
              <li><a href="#what-ocd-actually-is" style={sTocLink}>What OCD Actually Is — And Is Not</a></li>
              <li><a href="#misconceptions" style={sTocLink}>Why Do the Misconceptions Persist?</a></li>
              <li><a href="#erp-gold-standard" style={sTocLink}>Why Is ERP the Gold Standard Treatment?</a></li>
              <li><a href="#reassurance-danger" style={sTocLink}>Why Is Reassurance-Seeking Clinically Dangerous?</a></li>
              <li><a href="#what-meok-wont-do" style={sTocLink}>What MEOK Will Never Do — And Why</a></li>
              <li><a href="#what-ai-can-do" style={sTocLink}>What Can AI Actually Do for OCD?</a></li>
              <li><a href="#pure-o" style={sTocLink}>Pure-O: The OCD Nobody Recognises</a></li>
              <li><a href="#between-sessions" style={sTocLink}>Between Sessions: Where the Real Work Happens</a></li>
              <li><a href="#uk-resources" style={sTocLink}>UK Resources for OCD</a></li>
              <li><a href="#faq" style={sTocLink}>Frequently Asked Questions</a></li>
            </ol>
          </nav>

          {/* Stats */}
          <div style={sStatGrid}>
            <div style={sStatCard}>
              <div style={sStatNumber}>750k</div>
              <div style={sStatLabel}>People in the UK living with OCD (OCD-UK estimate)</div>
            </div>
            <div style={sStatCard}>
              <div style={sStatNumber}>17 yrs</div>
              <div style={sStatLabel}>Average time from first symptoms to correct OCD diagnosis</div>
            </div>
            <div style={sStatCard}>
              <div style={sStatNumber}>~60%</div>
              <div style={sStatLabel}>Reduction in OCD symptoms achievable with specialist ERP therapy</div>
            </div>
            <div style={sStatCard}>
              <div style={sStatNumber}>1 in 50</div>
              <div style={sStatLabel}>Adults will experience OCD at some point in their lifetime</div>
            </div>
          </div>

          {/* ── SECTION 1 ──────────────────────────────────────────────────── */}
          <h2 id="what-ocd-actually-is" style={sH2}>
            What OCD Actually Is — And Is Not
          </h2>

          <p style={sBodyP}>
            Obsessive-Compulsive Disorder is defined by two interacting features: obsessions
            and compulsions. Obsessions are unwanted, intrusive thoughts, images, impulses or
            urges that arrive uninvited and feel deeply threatening, disgusting, or morally
            unacceptable. They are ego-dystonic — meaning they feel foreign to the person's
            sense of self, which is precisely why they cause such distress. A devoted parent
            may experience intrusive thoughts about harming their child. A deeply ethical person
            may be flooded with blasphemous imagery. A gentle soul may experience impulses toward
            violence. These thoughts are not desires. They are the brain misfiring its threat
            detection system.
          </p>

          <p style={sBodyP}>
            Compulsions are the behaviours — physical or mental — performed in response to the
            obsession. Checking that the door is locked sixteen times. Mentally replaying a
            conversation to verify no offence was given. Confessing imagined wrongdoings to a
            partner. Googling symptoms to seek certainty. Seeking reassurance from friends, family,
            or — dangerously — from AI. Compulsions feel like solutions. They are not. They
            provide temporary relief that reinforces the obsessional cycle: the brain learns that
            the threat required a response, so it generates the threat again.
          </p>

          <div style={sCallout}>
            <span style={sCalloutLabel}>Clinical definition</span>
            OCD is diagnosed when obsessions and compulsions are time-consuming (more than one
            hour per day), cause significant distress, or meaningfully impair occupational,
            social, or relational functioning. The content of the obsessions is almost infinitely
            variable — which is why so many people with OCD go undiagnosed for years.
          </div>

          <p style={sBodyP}>
            What OCD is not: a preference for tidiness, a love of organisation, a productivity
            strategy, or an endearing personality trait. The phrase "I'm so OCD about my desk"
            trivialises a condition that causes people to lose jobs, relationships, and years of
            their lives. OCD-UK, the UK's leading OCD charity, has campaigned for years against
            the trivialisation of OCD in media and everyday language — and they are right to do so.
          </p>

          {/* ── SECTION 2 ──────────────────────────────────────────────────── */}
          <h2 id="misconceptions" style={sH2}>
            Why Do the Misconceptions About OCD Persist?
          </h2>

          <p style={sBodyP}>
            The tidiness stereotype persists partly because it is visible. Contamination OCD
            and symmetry OCD produce observable behaviours — repeated handwashing, perfectly
            arranged objects — that are easy to depict in television dramas. But these
            presentations, while real, represent only a fraction of the OCD spectrum.
          </p>

          <p style={sBodyP}>
            Many of the most prevalent OCD subtypes are completely invisible. Harm OCD
            (intrusive thoughts about causing harm), relationship OCD (obsessive doubt about
            partners or the validity of love), sexual orientation OCD (obsessive uncertainty
            about sexuality — which is different from genuine questioning), health OCD (formerly
            "hypochondria"), religious or scrupulosity OCD, and pure-O presentations (which we
            discuss below) leave no visible trace. People with these subtypes frequently do not
            recognise themselves as having OCD at all — because OCD "looks like" tidiness, and
            they are not tidy.
          </p>

          <p style={sBodyP}>
            This misidentification is clinically costly. The average time from first OCD
            symptoms to correct diagnosis and treatment is estimated at over seventeen years.
            During that time, people may be misdiagnosed with generalised anxiety disorder,
            depression, psychosis (in cases where intrusive thoughts are misread as delusions),
            or told they simply need to "relax." Each misdiagnosis delays ERP therapy —
            the only treatment with robust evidence for OCD.
          </p>

          <div style={sThemeGrid}>
            <div style={sThemeCard}>
              <div style={sThemeTitle}>Contamination OCD</div>
              <div style={sThemeDesc}>Fear of germs, illness, or moral contamination. May drive hand-washing, avoidance of "contaminated" objects or people.</div>
            </div>
            <div style={sThemeCard}>
              <div style={sThemeTitle}>Harm OCD</div>
              <div style={sThemeDesc}>Intrusive thoughts about hurting oneself or others. Sufferer is horrified by the thoughts and goes to great lengths to prevent any possibility of acting on them.</div>
            </div>
            <div style={sThemeCard}>
              <div style={sThemeTitle}>Relationship OCD</div>
              <div style={sThemeDesc}>Obsessive doubt about the validity of a relationship, partner's feelings, or one's own love. Compulsions include mental checking and reassurance-seeking.</div>
            </div>
            <div style={sThemeCard}>
              <div style={sThemeTitle}>Scrupulosity OCD</div>
              <div style={sThemeDesc}>Religious or moral obsessions. Fear of having sinned, offended God, or violated ethical principles, often with confessional or prayer-based compulsions.</div>
            </div>
            <div style={sThemeCard}>
              <div style={sThemeTitle}>Health OCD</div>
              <div style={sThemeDesc}>Obsessive fear of illness or disease. Compulsions include repeated medical consultations, body-checking, and symptom Googling.</div>
            </div>
            <div style={sThemeCard}>
              <div style={sThemeTitle}>Pure-O</div>
              <div style={sThemeDesc}>Primarily mental compulsions — internal reassurance, reviewing, and rumination. No visible rituals, frequently undiagnosed.</div>
            </div>
          </div>

          {/* ── SECTION 3 ──────────────────────────────────────────────────── */}
          <h2 id="erp-gold-standard" style={sH2}>
            Why Is ERP the Gold Standard Treatment for OCD?
          </h2>

          <p style={sBodyP}>
            Exposure and Response Prevention therapy is the most rigorously evidenced
            psychological treatment for OCD. NICE guidelines (CG31) recommend it as the
            first-line psychological intervention for adults and young people, either alone
            or combined with an SSRI for more severe presentations. The evidence base spans
            decades of randomised controlled trials, and meta-analyses consistently show
            meaningful symptom reduction — often in the region of 50 to 60 per cent reduction
            on the Yale-Brown Obsessive Compulsive Scale — for those who complete treatment.
          </p>

          <p style={sBodyP}>
            ERP works by interrupting the obsession-compulsion cycle at the response prevention
            stage. The therapist works collaboratively with the client to construct a hierarchy
            of feared situations, from least to most anxiety-provoking. The client then
            deliberately exposes themselves to these feared situations — without performing
            the compulsion. The anxiety rises, peaks, and then — crucially — falls on its own.
            This process, repeated across sessions, teaches the nervous system that the feared
            outcome does not materialise, and that anxiety subsides without the compulsion.
          </p>

          <p style={sBodyP}>
            This is profoundly counterintuitive. Every instinct in the moment screams that
            the compulsion is necessary. Every anxious cell in the body insists that without
            the check, the confession, the reassurance, something terrible will happen. ERP
            asks the person to sit with that discomfort — not to white-knuckle through it
            in silence, but to observe it, to allow it, to learn that they can tolerate it.
            This is the mechanism of change.
          </p>

          <div style={sCallout}>
            <span style={sCalloutLabel}>ERP in practice</span>
            A good ERP therapist does not simply ask you to face your fears. They work
            collaboratively to understand the specific form of your OCD, build a personalised
            fear hierarchy, and accompany you through exposures at a pace you can sustain.
            The therapeutic relationship in ERP is itself an important part of the treatment.
            No app or AI can replicate this — but between-session support is still valuable.
          </div>

          <p style={sBodyP}>
            It is also worth being explicit: not all CBT is ERP. Many therapists who describe
            themselves as offering CBT for OCD are not specifically trained in ERP. The British
            Association for Behavioural and Cognitive Psychotherapies (BABCP) maintains an
            accredited therapist directory, and OCD-UK provides a specialist therapist list.
            If you are seeking treatment, ask specifically whether the therapist has experience
            delivering ERP for OCD — not just anxiety in general.
          </p>

          {/* ── SECTION 4 ──────────────────────────────────────────────────── */}
          <h2 id="reassurance-danger" style={sH2}>
            Why Is Reassurance-Seeking Clinically Dangerous for OCD?
          </h2>

          <p style={sBodyP}>
            This section is the most important in this post. Please read it carefully —
            particularly if you are someone who uses AI tools and has OCD.
          </p>

          <p style={sBodyP}>
            Reassurance-seeking is a compulsion. When someone with contamination OCD asks
            "Are you sure this surface is clean?" and receives a yes — the OCD is fed.
            When someone with harm OCD asks "I would never actually do that, would I?" and
            hears "Of course not, you're a good person" — the OCD is fed. When someone with
            relationship OCD asks "But we do love each other, don't you think?" and gets
            confirmation — the OCD is fed.
          </p>

          <p style={sBodyP}>
            The mechanism is identical to checking a door sixteen times. The reassurance
            provides a momentary drop in anxiety. The brain registers: threat was present,
            reassurance resolved it. Therefore: next time the thought returns, seek reassurance
            again. The reassurance-seeking urge grows. The threshold for tolerable uncertainty
            shrinks. Over time, people with OCD require more reassurance, more frequently,
            from more sources — and the relief from each reassurance lasts shorter and shorter.
          </p>

          <div style={sWarning}>
            <span style={sWarningLabel}>Clinically important</span>
            Families, partners, and friends of people with OCD are often drawn into
            "accommodation" — providing reassurance, helping to avoid triggers, modifying
            shared routines to reduce anxiety. This is an understandable and compassionate
            response. It is also clinically harmful. Accommodation maintains OCD. ERP
            therapists work explicitly with families to help them understand this and to
            reduce accommodation gently and collaboratively. AI that provides reassurance
            is acting as an accommodation system — at scale, at any hour, with no
            therapeutic oversight.
          </div>

          <p style={sBodyP}>
            This is why general-purpose AI represents a specific clinical risk for people
            with OCD. A person in an OCD spike can ask ChatGPT, Gemini, or most AI companions
            a reassurance-seeking question — and receive a direct, reassuring answer. The AI
            does not know it is feeding a compulsion. It is doing what it is designed to do:
            be helpful, clear, and reassuring. In this context, that helpfulness is harmful.
          </p>

          {/* ── SECTION 5 ──────────────────────────────────────────────────── */}
          <h2 id="what-meok-wont-do" style={sH2}>
            What MEOK Will Never Do — And Why This Is Care, Not Limitation
          </h2>

          <p style={sBodyP}>
            MEOK will not provide reassurance compulsions. This is not a product limitation.
            It is a deliberate, non-negotiable clinical design decision — built into the core
            of how MEOK responds.
          </p>

          <p style={sBodyP}>
            When MEOK detects reassurance-seeking patterns — repeated questions seeking
            certainty, requests for confirmation that a feared event did or did not occur,
            demands for safety guarantees about obsessional content — it will not comply
            with the request. Instead, it will acknowledge the distress with warmth and
            without judgement, name what is happening without shaming the person, and
            redirect toward uncertainty-tolerance rather than certainty-provision.
          </p>

          <p style={sBodyP}>
            This might feel frustrating in the moment. An OCD spike is not the moment when
            reasoning is clearest. The urge for reassurance in a spike is intense and feels
            entirely logical. But providing that reassurance — even from a place of genuine
            care — would be prioritising short-term comfort over long-term recovery. MEOK's
            design, rooted in the Maternal Covenant framework built by founder Nicholas
            Templeman, explicitly chooses long-term wellbeing over momentary relief.
          </p>

          <div style={sCallout}>
            <span style={sCalloutLabel}>What MEOK will do instead</span>
            Rather than saying "Yes, you're definitely safe" or "No, you definitely didn't
            do that," MEOK will sit with you in the uncertainty. It will help you notice
            the spike without being consumed by it. It will help you remember what your
            therapist has told you. It will help you access distress tolerance tools. It
            will remind you that you have survived spikes before. It will not make the
            OCD worse by acting as an accommodation machine.
          </div>

          <p style={sBodyP}>
            MEOK also will not diagnose OCD, will not provide ERP exercises without clinical
            oversight, and will not substitute for a specialist therapist. Its role is
            support between sessions — not treatment. This distinction is absolute and is
            restated clearly whenever relevant.
          </p>

          {/* ── SECTION 6 ──────────────────────────────────────────────────── */}
          <h2 id="what-ai-can-do" style={sH2}>
            What Can an AI Companion Actually Do for Someone with OCD?
          </h2>

          <p style={sBodyP}>
            Within the firm boundaries described above, there is genuine and meaningful
            value that a well-designed AI companion can offer someone navigating OCD.
          </p>

          <h3 style={sH3}>Non-judgmental presence during difficult moments</h3>
          <p style={sBodyP}>
            OCD is profoundly isolating. The content of intrusive thoughts is often so
            disturbing, so at odds with the person's values, that sharing it with another
            human feels impossible. The shame and secrecy compound the disorder. MEOK
            provides a space where the person can say what is happening — not to receive
            reassurance, but to be heard — without the fear of judgement, horror, or the
            other person's distress becoming an additional burden to manage.
          </p>

          <h3 style={sH3}>Psychoeducation and normalisation</h3>
          <p style={sBodyP}>
            Understanding OCD — really understanding it, not just knowing the definition —
            is itself therapeutic. Knowing that intrusive thoughts are ego-dystonic, that
            their presence says nothing about character, that the urge to perform a compulsion
            is not a moral failure but a neurological pattern — this knowledge does not cure
            OCD, but it can reduce the secondary layer of shame that makes the condition worse.
            MEOK can discuss OCD in depth, in the middle of the night, without fatigue or
            distress on its part.
          </p>

          <h3 style={sH3}>Grounding and distress tolerance during spikes</h3>
          <p style={sBodyP}>
            An OCD spike is not the time for therapy. It is the time for riding out the wave.
            MEOK can support grounding techniques — breath awareness, sensory anchoring, the
            5-4-3-2-1 method — without providing the reassurance that would make it clinically
            unsafe. It can remind the person that spikes peak and pass, that the anxiety is
            temporary, that tolerance is possible.
          </p>

          <h3 style={sH3}>Reflection and journalling support between sessions</h3>
          <p style={sBodyP}>
            ERP therapy works partly through gradual, structured reflection on the OCD pattern.
            MEOK can support journalling about the experience of OCD — the triggers, the thought
            patterns, the emotional texture — in a way that is genuinely useful to bring to a
            therapy session, rather than being an avoidance or rumination exercise in disguise.
            This requires care and context-awareness: MEOK is built to distinguish between
            productive reflection and obsessive reviewing.
          </p>

          <h3 style={sH3}>Motivation and continuity between sessions</h3>
          <p style={sBodyP}>
            ERP is hard. The weeks between sessions are full of opportunities for avoidance —
            for deferring exposures, for finding reasons why this week is not the right week.
            MEOK can hold continuity: remembering what the person has committed to, gently
            noticing when avoidance patterns are being described, and offering encouragement
            without pressure. Not as a substitute for the therapeutic relationship, but as
            a consistent presence that bridges the gap.
          </p>

          {/* ── SECTION 7 ──────────────────────────────────────────────────── */}
          <h2 id="pure-o" style={sH2}>
            Pure-O: The OCD That Nobody Recognises
          </h2>

          <p style={sBodyP}>
            "Pure-O" is an informal term — not a clinical category — for OCD presentations
            in which the compulsions are primarily or entirely mental. The name is a slight
            misnomer, because Pure-O always involves compulsions; they just occur inside the
            head, invisible to outside observers and often invisible to the person themselves.
          </p>

          <p style={sBodyP}>
            Pure-O compulsions include: mentally reviewing past events for evidence of
            wrongdoing; internally arguing with the intrusive thought; attempting to
            neutralise thoughts with "good" thoughts; mentally confessing imagined sins;
            seeking internal reassurance through reasoning; and thought suppression (trying
            to push the thought away — which reliably makes it return with greater force,
            as anyone who has tried not to think of a pink elephant can attest).
          </p>

          <p style={sBodyP}>
            Because Pure-O has no visible rituals, it is frequently missed in clinical
            assessments, misdiagnosed as generalised anxiety, health anxiety, or depression,
            and left untreated. The person knows something is very wrong — their mind feels
            like a prison — but they cannot fit their experience into the "OCD means tidiness"
            template that culture has given them.
          </p>

          <p style={sBodyP}>
            ERP for Pure-O targets the mental compulsions directly: the goal is to notice
            the intrusive thought, allow it to be present without engaging with it, and resist
            the urge to mentally neutralise, review, or argue. This is harder than it sounds.
            The urge to engage mentally is intensely compelling. But the mechanism is identical
            to physical ERP: resist the compulsion, allow the anxiety to peak and pass.
          </p>

          <div style={sCallout}>
            <span style={sCalloutLabel}>If you recognise yourself here</span>
            If you have experienced recurring, unwanted thoughts that horrify you — thoughts
            about harm, blasphemy, sexuality, contamination, or uncertainty of any kind —
            and you have developed mental routines designed to neutralise or check those
            thoughts, please consider speaking to a GP or seeking an OCD specialist.
            OCD-UK's helpline (01332 588 112) can provide information and guidance.
          </div>

          {/* ── SECTION 8 ──────────────────────────────────────────────────── */}
          <h2 id="between-sessions" style={sH2}>
            Between Sessions: Where the Real Work of OCD Recovery Happens
          </h2>

          <p style={sBodyP}>
            ERP therapy typically takes place weekly or fortnightly. Sessions run for fifty
            to ninety minutes. That leaves roughly 165 to 167 hours each week outside the
            therapy room. For someone with moderate to severe OCD, those hours contain many
            spikes, many urges, and many moments of difficulty — often without any support
            structure in reach.
          </p>

          <p style={sBodyP}>
            This is the therapeutic gap that between-session support is designed to address.
            The gap is not new: ERP homework has always been a core component of the treatment.
            Therapists routinely assign exposure exercises, ask clients to record compulsion
            urges and responses, and encourage reflection on patterns between sessions. But
            homework is easier said than done, particularly for people who are exhausted,
            isolated, and living with a condition that specifically generates reasons why the
            homework feels too dangerous to do.
          </p>

          <p style={sBodyP}>
            MEOK does not try to be the therapist. It does not run ERP sessions. It does
            not construct exposure hierarchies or guide the person through planned exposures
            without clinical oversight. What it can do is be present in the gap — at midnight
            when the spike hits, on Sunday afternoon when everything feels impossible, in the
            minutes before a difficult situation that the therapist would want the person to
            approach rather than avoid.
          </p>

          <p style={sBodyP}>
            In those moments, what most people with OCD need is not more information about
            OCD. They know the theory. What they need is: someone who is not going to panic,
            is not going to provide reassurance, is not going to treat them as fragile or
            monstrous, and will hold steady while they navigate the spike. MEOK is designed
            to be that steady presence — not a therapist, not a reassurance machine, but a
            companion with a care-floor that knows what it must not do.
          </p>

          <p style={sBodyP}>
            This matters most for people who are on NHS waiting lists — which, at the time
            of writing, can extend to twelve months or longer for IAPT psychological therapy
            services. A person waiting for ERP therapy has not yet had access to the care that
            NICE guidelines say they need. During that wait, they are not receiving nothing —
            they are continuing to live with OCD, continuing to struggle, often continuing to
            seek reassurance from whatever is available. MEOK can provide a more considered
            form of between-referral support that does not make the OCD worse.
          </p>

          <hr style={sDivider} />

          {/* ── UK RESOURCES ────────────────────────────────────────────────── */}
          <div id="uk-resources" style={sResourceBox}>
            <div style={sResourceTitle}>UK Resources for OCD</div>
            <ul style={sResourceList}>
              <li>
                <strong style={{ color: TEXT }}>OCD-UK</strong> —{' '}
                <a href="https://www.ocduk.org" target="_blank" rel="noopener noreferrer" style={sInlineLink}>ocduk.org</a>
                {' '}· Helpline: 01332 588 112 · The UK's leading OCD charity. Therapist directory, resources, and peer support.
              </li>
              <li>
                <strong style={{ color: TEXT }}>NHS Talking Therapies (formerly IAPT)</strong> — Self-refer via{' '}
                <a href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" target="_blank" rel="noopener noreferrer" style={sInlineLink}>nhs.uk</a>
                {' '}· Ask specifically for ERP for OCD, not general CBT.
              </li>
              <li>
                <strong style={{ color: TEXT }}>NICE Guideline CG31</strong> —{' '}
                <a href="https://www.nice.org.uk/guidance/cg31" target="_blank" rel="noopener noreferrer" style={sInlineLink}>nice.org.uk/guidance/cg31</a>
                {' '}· The clinical guideline specifying ERP-based CBT as first-line treatment.
              </li>
              <li>
                <strong style={{ color: TEXT }}>BABCP Therapist Directory</strong> —{' '}
                <a href="https://www.babcp.com/Therapist-Register/Find-a-Therapist" target="_blank" rel="noopener noreferrer" style={sInlineLink}>babcp.com</a>
                {' '}· Find accredited CBT therapists with ERP specialism.
              </li>
              <li>
                <strong style={{ color: TEXT }}>NOCD</strong> —{' '}
                <a href="https://www.treatmyocd.com" target="_blank" rel="noopener noreferrer" style={sInlineLink}>treatmyocd.com</a>
                {' '}· Specialist ERP therapy platform available in the UK. Shorter waiting times than NHS for many.
              </li>
              <li>
                <strong style={{ color: TEXT }}>Samaritans</strong> — 116 123 (free, 24/7) — Not OCD-specific, but available for any moment of crisis.
              </li>
            </ul>
          </div>

          <hr style={sDivider} />

          {/* ── FAQ ─────────────────────────────────────────────────────────── */}
          <section id="faq" style={sFaqSection}>
            <h2 style={{ ...sH2, marginTop: '1rem' }}>
              Frequently Asked Questions
            </h2>

            <div style={sFaqItem}>
              <div style={sFaqQ}>What is OCD really? Is it just about being tidy?</div>
              <div style={sFaqA}>
                No — OCD is not about tidiness or personality. It is a serious anxiety disorder
                characterised by intrusive, unwanted thoughts (obsessions) and repetitive behaviours
                or mental acts (compulsions) performed to reduce distress. The so-called tidiness
                stereotype represents only a small fraction of OCD presentations and causes
                enormous harm by preventing people with other OCD subtypes from recognising
                their condition. OCD-UK campaigns actively against this trivialisation.
              </div>
            </div>

            <div style={sFaqItem}>
              <div style={sFaqQ}>What is ERP and why is it the gold standard for OCD?</div>
              <div style={sFaqA}>
                Exposure and Response Prevention (ERP) is a specialist form of cognitive
                behavioural therapy recommended by NICE (CG31) as first-line treatment for OCD.
                It works by deliberately confronting feared triggers without performing the
                associated compulsion, teaching the nervous system that the feared outcome does
                not materialise and that anxiety subsides without the compulsion. Meta-analyses
                consistently show 50–60% symptom reduction for those who complete ERP treatment.
              </div>
            </div>

            <div style={sFaqItem}>
              <div style={sFaqQ}>Why is reassurance harmful for OCD?</div>
              <div style={sFaqA}>
                Reassurance-seeking is itself a compulsion. Receiving reassurance provides
                momentary anxiety relief that reinforces the OCD cycle: the brain learns the
                threat required a response, so it generates the threat again — with the threshold
                for tolerable uncertainty shrinking over time. Any person or system that provides
                reassurance to OCD-driven questions is acting as an accommodation mechanism,
                which maintains rather than reduces OCD.
              </div>
            </div>

            <div style={sFaqItem}>
              <div style={sFaqQ}>Will MEOK give me reassurance when I ask for it?</div>
              <div style={sFaqA}>
                No — and this is by deliberate clinical design. MEOK is built not to provide
                reassurance compulsions. When it recognises reassurance-seeking patterns, it
                will acknowledge your distress warmly, name what is happening without shame,
                and redirect toward uncertainty-tolerance rather than certainty-provision.
                This may feel frustrating in a spike — but it is the form of care that supports
                recovery rather than maintaining the OCD cycle.
              </div>
            </div>

            <div style={sFaqItem}>
              <div style={sFaqQ}>What is Pure-O OCD?</div>
              <div style={sFaqA}>
                Pure-O is an informal term for OCD presentations where compulsions are
                primarily mental rather than behavioural — including mental reviewing,
                internal reassurance, thought neutralising, and rumination. It is frequently
                misdiagnosed or unrecognised because it leaves no visible trace. ERP for
                Pure-O targets the mental compulsions directly, aiming to allow intrusive
                thoughts to be present without engaging with them.
              </div>
            </div>

            <div style={sFaqItem}>
              <div style={sFaqQ}>How can AI help with OCD between therapy sessions?</div>
              <div style={sFaqA}>
                A well-designed AI companion can provide consistent, non-judgmental presence
                during spikes; support grounding and distress tolerance without providing
                reassurance; assist with reflection and journalling useful to bring to therapy;
                and maintain motivation and continuity between sessions. What it must not do
                is diagnose OCD, run ERP exercises without clinical oversight, or provide
                the reassurance compulsions that would worsen the disorder.
              </div>
            </div>

            <div style={sFaqItem}>
              <div style={sFaqQ}>Where can I get specialist OCD treatment in the UK?</div>
              <div style={sFaqA}>
                OCD-UK (ocduk.org, helpline 01332 588 112) is the UK's leading OCD charity
                and provides therapist directories and resources. NHS Talking Therapies
                (formerly IAPT) offers self-referral access to ERP-based CBT. NICE guidelines
                (CG31) specify this as first-line treatment. For specialist online ERP,
                NOCD (treatmyocd.com) operates in the UK. Private ERP therapists can be found
                via the BABCP accredited therapist directory. Always ask specifically whether
                the therapist has specialist ERP experience for OCD.
              </div>
            </div>
          </section>

          <hr style={sDivider} />

          {/* ── CTA ─────────────────────────────────────────────────────────── */}
          <div style={sCta}>
            <div style={sCtaHeadline}>MEOK: A Companion That Knows What Not to Do</div>
            <p style={sCtaBody}>
              Built by Nicholas Templeman at MEOK AI LABS, MEOK is designed to supplement
              specialist mental health care — not replace it, and not undermine it. Between
              sessions, between spikes, MEOK is steady, non-accommodating, and genuinely
              on your side for the long term.
            </p>
            <Link href="/#waitlist" style={sCtaBtn}>Join the Waitlist</Link>
          </div>

          {/* ── RELATED POSTS ────────────────────────────────────────────────── */}
          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ ...sH2, marginTop: '1rem' }}>Related Reading</h2>
            <ul style={{ ...sResourceList, paddingLeft: '0', listStyle: 'none', lineHeight: 2.4 }}>
              <li>
                <Link href="/blog/ai-for-ocd" style={sInlineLink}>
                  AI for OCD: Supportive Presence Without Compulsion Enabling
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-for-anxiety" style={sInlineLink}>
                  AI for Anxiety: How a Sovereign AI Companion Supports Without Replacing Therapy
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-for-health-anxiety" style={sInlineLink}>
                  AI for Health Anxiety: Between Reassurance and Reality
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-companion-vs-therapist" style={sInlineLink}>
                  AI Companion vs Therapist: What Each Is For
                </Link>
              </li>
              <li>
                <Link href="/blog/building-care-into-ai" style={sInlineLink}>
                  Building Care Into AI: The Maternal Covenant Framework
                </Link>
              </li>
            </ul>
          </div>

        </main>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <footer style={sFooter}>
          <div style={{ marginBottom: '0.75rem' }}>
            <Link href="/" style={sFooterLink}>Home</Link>
            <Link href="/blog" style={sFooterLink}>Blog</Link>
            <Link href="/privacy" style={sFooterLink}>Privacy</Link>
            <Link href="/about" style={sFooterLink}>About</Link>
          </div>
          <div>
            © {new Date().getFullYear()} MEOK AI LABS · Built by Nicholas Templeman ·
            Not a substitute for specialist clinical care ·{' '}
            <a href="https://www.ocduk.org" target="_blank" rel="noopener noreferrer" style={sFooterLink}>
              OCD-UK
            </a>
          </div>
        </footer>

      </div>
    </>
  )
}
