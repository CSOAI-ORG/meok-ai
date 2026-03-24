import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Personal AI Data Sovereignty: Why It Matters and How to Achieve It | MEOK AI LABS',
  description:
    'Data sovereignty in AI goes far beyond GDPR compliance. It means owning your conversations, your memory, and your model history. Learn what big tech actually does with your data, how MEOK\u2019s architecture achieves true sovereignty, and why the BYOK tier puts you fully in control.',
  alternates: {
    canonical: 'https://meok.ai/blog/personal-ai-data-sovereignty',
  },
  openGraph: {
    title:
      'Personal AI Data Sovereignty: Why It Matters and How to Achieve It',
    description:
      'True AI data sovereignty is not just an opt-out toggle. It means encrypted memory you control, model-agnostic portability, and the right to delete everything instantly. MEOK AI LABS explains the three levels and how to reach the highest one.',
    type: 'article',
    url: 'https://meok.ai/blog/personal-ai-data-sovereignty',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    siteName: 'MEOK AI LABS',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@meok_ai',
    creator: '@meok_ai',
    title:
      'Personal AI Data Sovereignty: Why It Matters and How to Achieve It',
    description:
      'Beyond GDPR compliance: the three levels of AI data sovereignty and how to reach true ownership of your AI memory.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Personal AI Data Sovereignty: Why It Matters and How to Achieve It',
  description:
    'A comprehensive guide to AI data sovereignty covering the three levels of ownership, what big tech AI companies actually do with your data, GDPR rights in practice, and how MEOK\u2019s architecture delivers genuine sovereignty through user-encrypted memory and the BYOK tier.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    url: 'https://meok.ai',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/personal-ai-data-sovereignty',
  },
  keywords: [
    'AI data sovereignty',
    'personal AI privacy',
    'BYOK AI',
    'GDPR AI rights',
    'AI memory portability',
    'data portability AI',
    'AI conversation privacy',
    'MEOK AI LABS',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI data sovereignty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI data sovereignty means you hold genuine, enforceable ownership and control over every piece of data your AI system stores about you \u2014 your conversations, memory context, behavioural inferences, and usage patterns. It goes beyond regulatory compliance to mean that no third party can train on, sell, or retain your data without your explicit, informed, and revocable consent. True sovereignty is architectural: the platform is structurally incapable of accessing your data without your keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export my MEOK data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK provides a full JSON export of your entire memory archive at any time from your account settings. Your export includes all conversation summaries, contextual tags, preference signals, and structured memory nodes \u2014 in a portable format you can inspect, archive, or import into any compatible system. Exports are available on demand with no friction and no email request required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK train on my conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK never uses your conversations to train any model. Your data is encrypted with keys you hold before it reaches MEOK\u2019s servers. The server processes only encrypted blobs and has no access to plaintext conversation content. This is a structural guarantee enforced by the architecture, not a policy promise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the BYOK tier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BYOK (Bring Your Own Key) is MEOK\u2019s maximum-sovereignty tier. You supply your own OpenAI or Anthropic API key, stored only on your device. Requests route directly from your device to the model provider through MEOK\u2019s thin orchestration layer \u2014 MEOK never stores your API key or logs raw request payloads. Usage is billed directly to your model provider account. See pricing at meok.ai/pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I delete all my MEOK data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Account Settings, select Delete Everything. This triggers an immediate cascade deletion of all memory nodes, conversation summaries, preference signals, and account metadata. Deletion completes within 72 hours across all backup replicas. Because stored data is encrypted with your account-derived key \u2014 destroyed on account deletion \u2014 any blobs persisting in backups during that window are cryptographically inaccessible. This satisfies GDPR Article 17 right to erasure.',
      },
    },
  ],
}

const styles = {
  page: {
    background: '#0d0c18',
    color: '#f5f0e8',
    minHeight: '100vh',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  } as React.CSSProperties,
  container: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '0 24px',
  } as React.CSSProperties,
  hero: {
    paddingTop: '80px',
    paddingBottom: '60px',
    borderBottom: '1px solid rgba(201,168,76,0.2)',
  } as React.CSSProperties,
  eyebrow: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '20px',
  } as React.CSSProperties,
  h1: {
    fontSize: 'clamp(28px, 5vw, 46px)',
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    color: '#f5f0e8',
    margin: '0 0 24px',
  } as React.CSSProperties,
  lede: {
    fontSize: '19px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.82)',
    margin: '0 0 32px',
  } as React.CSSProperties,
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap' as const,
    fontSize: '14px',
    color: 'rgba(245,240,232,0.5)',
  } as React.CSSProperties,
  metaDot: {
    color: '#c9a84c',
  } as React.CSSProperties,
  article: {
    paddingTop: '56px',
    paddingBottom: '80px',
  } as React.CSSProperties,
  h2: {
    fontSize: 'clamp(20px, 3.5vw, 28px)',
    fontWeight: 700,
    lineHeight: 1.25,
    color: '#f5f0e8',
    margin: '64px 0 16px',
    letterSpacing: '-0.015em',
  } as React.CSSProperties,
  h3: {
    fontSize: '19px',
    fontWeight: 700,
    color: '#c9a84c',
    margin: '40px 0 12px',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,
  p: {
    fontSize: '17px',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.88)',
    margin: '0 0 20px',
  } as React.CSSProperties,
  atomicAnswer: {
    fontSize: '17px',
    lineHeight: 1.75,
    color: '#f5f0e8',
    margin: '0 0 28px',
    paddingLeft: '18px',
    borderLeft: '3px solid #c9a84c',
  } as React.CSSProperties,
  callout: {
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: '10px',
    padding: '24px 28px',
    margin: '36px 0',
  } as React.CSSProperties,
  calloutTitle: {
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '10px',
  } as React.CSSProperties,
  calloutText: {
    fontSize: '16px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.85)',
    margin: 0,
  } as React.CSSProperties,
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    margin: '32px 0',
    fontSize: '15px',
  } as React.CSSProperties,
  th: {
    textAlign: 'left' as const,
    padding: '12px 16px',
    background: 'rgba(201,168,76,0.1)',
    color: '#c9a84c',
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    borderBottom: '1px solid rgba(201,168,76,0.2)',
  } as React.CSSProperties,
  td: {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(245,240,232,0.07)',
    color: 'rgba(245,240,232,0.82)',
    verticalAlign: 'top' as const,
  } as React.CSSProperties,
  tdFeature: {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(245,240,232,0.07)',
    color: '#f5f0e8',
    fontWeight: 600,
    verticalAlign: 'top' as const,
  } as React.CSSProperties,
  tdGold: {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(245,240,232,0.07)',
    color: '#c9a84c',
    fontWeight: 600,
    verticalAlign: 'top' as const,
  } as React.CSSProperties,
  levelCard: {
    background: 'rgba(245,240,232,0.03)',
    border: '1px solid rgba(245,240,232,0.08)',
    borderRadius: '10px',
    padding: '24px 28px',
    margin: '16px 0',
  } as React.CSSProperties,
  levelNumber: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'rgba(245,240,232,0.4)',
    marginBottom: '6px',
  } as React.CSSProperties,
  levelTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '10px',
  } as React.CSSProperties,
  levelDesc: {
    fontSize: '15px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.75)',
    margin: 0,
  } as React.CSSProperties,
  ul: {
    margin: '0 0 24px',
    paddingLeft: '24px',
  } as React.CSSProperties,
  li: {
    fontSize: '17px',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.85)',
    marginBottom: '8px',
  } as React.CSSProperties,
  faqSection: {
    marginTop: '72px',
    paddingTop: '48px',
    borderTop: '1px solid rgba(245,240,232,0.1)',
  } as React.CSSProperties,
  faqLabel: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '32px',
  } as React.CSSProperties,
  faqItem: {
    marginBottom: '40px',
  } as React.CSSProperties,
  faqQ: {
    fontSize: '19px',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '12px',
    lineHeight: 1.3,
  } as React.CSSProperties,
  faqA: {
    fontSize: '16px',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.82)',
    margin: 0,
  } as React.CSSProperties,
  cta: {
    background:
      'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
    border: '1px solid rgba(201,168,76,0.35)',
    borderRadius: '16px',
    padding: '48px 40px',
    marginTop: '72px',
    textAlign: 'center' as const,
  } as React.CSSProperties,
  ctaTitle: {
    fontSize: '26px',
    fontWeight: 800,
    color: '#f5f0e8',
    marginBottom: '14px',
    letterSpacing: '-0.02em',
  } as React.CSSProperties,
  ctaText: {
    fontSize: '17px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.75)',
    marginBottom: '32px',
  } as React.CSSProperties,
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  btnPrimary: {
    display: 'inline-block',
    background: '#c9a84c',
    color: '#0d0c18',
    fontWeight: 700,
    fontSize: '16px',
    padding: '14px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    letterSpacing: '0.01em',
  } as React.CSSProperties,
  btnSecondary: {
    display: 'inline-block',
    background: 'transparent',
    color: '#c9a84c',
    fontWeight: 700,
    fontSize: '16px',
    padding: '14px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    border: '1px solid rgba(201,168,76,0.5)',
    letterSpacing: '0.01em',
  } as React.CSSProperties,
  divider: {
    border: 'none',
    borderTop: '1px solid rgba(245,240,232,0.08)',
    margin: '56px 0',
  } as React.CSSProperties,
  highlight: {
    color: '#c9a84c',
    fontWeight: 600,
  } as React.CSSProperties,
  inlineLink: {
    color: '#c9a84c',
    textDecoration: 'none',
  } as React.CSSProperties,
  footer: {
    paddingTop: '40px',
    paddingBottom: '60px',
    borderTop: '1px solid rgba(245,240,232,0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '16px',
  } as React.CSSProperties,
  footerText: {
    fontSize: '14px',
    color: 'rgba(245,240,232,0.4)',
  } as React.CSSProperties,
  footerLink: {
    fontSize: '14px',
    color: '#c9a84c',
    textDecoration: 'none',
  } as React.CSSProperties,
  warningCard: {
    background: 'rgba(220,50,50,0.07)',
    border: '1px solid rgba(220,50,50,0.22)',
    borderRadius: '10px',
    padding: '20px 24px',
    margin: '24px 0',
  } as React.CSSProperties,
  warningTitle: {
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'rgba(245,100,100,0.9)',
    marginBottom: '8px',
  } as React.CSSProperties,
  warningText: {
    fontSize: '15px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.78)',
    margin: 0,
  } as React.CSSProperties,
  statRow: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap' as const,
    margin: '32px 0',
  } as React.CSSProperties,
  statCard: {
    flex: '1 1 180px',
    background: 'rgba(245,240,232,0.03)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '10px',
    padding: '20px 22px',
  } as React.CSSProperties,
  statNumber: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#c9a84c',
    lineHeight: 1,
    marginBottom: '6px',
  } as React.CSSProperties,
  statLabel: {
    fontSize: '13px',
    lineHeight: 1.4,
    color: 'rgba(245,240,232,0.6)',
  } as React.CSSProperties,
  stepList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px',
  } as React.CSSProperties,
  stepItem: {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
    alignItems: 'flex-start',
  } as React.CSSProperties,
  stepNumber: {
    flexShrink: 0,
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(201,168,76,0.15)',
    border: '1px solid rgba(201,168,76,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 700,
    color: '#c9a84c',
    marginTop: '2px',
  } as React.CSSProperties,
  stepContent: {
    flex: 1,
  } as React.CSSProperties,
  stepTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '6px',
  } as React.CSSProperties,
  stepText: {
    fontSize: '15px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.78)',
    margin: 0,
  } as React.CSSProperties,
  timelineItem: {
    display: 'flex',
    gap: '20px',
    marginBottom: '28px',
    alignItems: 'flex-start',
  } as React.CSSProperties,
  timelineYear: {
    flexShrink: 0,
    fontSize: '13px',
    fontWeight: 700,
    color: '#c9a84c',
    letterSpacing: '0.06em',
    paddingTop: '2px',
    minWidth: '48px',
  } as React.CSSProperties,
  timelineText: {
    fontSize: '15px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.82)',
    margin: 0,
  } as React.CSSProperties,
  pullQuote: {
    margin: '40px 0',
    padding: '0 0 0 28px',
    borderLeft: '4px solid #c9a84c',
  } as React.CSSProperties,
  pullQuoteText: {
    fontSize: '21px',
    fontStyle: 'italic',
    lineHeight: 1.55,
    color: 'rgba(245,240,232,0.9)',
    margin: '0 0 10px',
  } as React.CSSProperties,
  pullQuoteAttr: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.5)',
    margin: 0,
  } as React.CSSProperties,
  relatedSection: {
    marginTop: '64px',
    paddingTop: '40px',
    borderTop: '1px solid rgba(245,240,232,0.08)',
  } as React.CSSProperties,
  relatedLabel: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'rgba(245,240,232,0.4)',
    marginBottom: '20px',
  } as React.CSSProperties,
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '16px',
  } as React.CSSProperties,
  relatedCard: {
    background: 'rgba(245,240,232,0.03)',
    border: '1px solid rgba(245,240,232,0.08)',
    borderRadius: '8px',
    padding: '16px 18px',
    textDecoration: 'none',
    display: 'block',
  } as React.CSSProperties,
  relatedCardTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#c9a84c',
    lineHeight: 1.35,
    marginBottom: '6px',
  } as React.CSSProperties,
  relatedCardDesc: {
    fontSize: '13px',
    lineHeight: 1.5,
    color: 'rgba(245,240,232,0.55)',
    margin: 0,
  } as React.CSSProperties,
}

export default function PersonalAiDataSovereigntyPage() {
  return (
    <div style={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ━━━━━━━━━━━━━━━━  HERO  ━━━━━━━━━━━━━━━━ */}
      <header style={styles.hero}>
        <div style={styles.container}>
          <span style={styles.eyebrow}>MEOK AI LABS &mdash; Sovereignty Series</span>
          <h1 style={styles.h1}>
            Personal AI Data Sovereignty: Why It Matters and How to Achieve It
          </h1>
          <p style={styles.lede}>
            Every conversation you have with ChatGPT, Claude, or Gemini lives on servers you do not control,
            processed by systems governed by terms you did not negotiate, and potentially used to train models
            that will compete with your own interests. True AI data sovereignty is not a privacy checkbox.
            It is a fundamental question of who owns the most intimate record of your thinking &mdash;
            and what that record can be used for without your knowledge or consent.
          </p>
          <div style={styles.metaRow}>
            <span>Nicholas Templeman</span>
            <span style={styles.metaDot}>&bull;</span>
            <span>MEOK AI LABS</span>
            <span style={styles.metaDot}>&bull;</span>
            <span>24 March 2026</span>
            <span style={styles.metaDot}>&bull;</span>
            <span>18 min read</span>
          </div>
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━  ARTICLE  ━━━━━━━━━━━━━━━━ */}
      <main>
        <article style={styles.article}>
          <div style={styles.container}>

            {/* ━━━━  SECTION 1: Definition  ━━━━ */}
            <h2 style={styles.h2}>What does AI data sovereignty actually mean?</h2>
            <p style={styles.atomicAnswer}>
              AI data sovereignty means you hold genuine, enforceable ownership and control over every piece
              of data your AI system stores about you &mdash; your conversations, memory context, behavioural
              inferences, and usage patterns &mdash; such that no third party can train on, sell, or retain
              that data without your explicit, informed, and revocable consent.
            </p>
            <p style={styles.p}>
              The phrase gets used loosely. Vendors apply it to mean anything from &ldquo;we comply with
              GDPR&rdquo; to &ldquo;we don\u2019t sell your data to advertisers.&rdquo; These are genuine
              protections, but they are a long way from sovereignty. A government that complies with
              international law is not a sovereign nation if it cannot set its own foreign policy. Similarly,
              an AI platform that respects data protection law is not giving you sovereignty if it can
              unilaterally change what it does with your conversations by updating a terms-of-service document.
            </p>
            <p style={styles.p}>
              Sovereignty requires structural guarantees &mdash; architecture-level protections that make it
              technically impossible for the platform to access your data without your keys, rather than
              policy-level promises that can change at a board meeting. The distinction is not semantic.
              It is the difference between a locked safe you own and a bank vault the bank controls on your
              behalf.
            </p>
            <p style={styles.p}>
              This distinction is not academic. In 2023, Replika updated its privacy policy to allow sharing
              of anonymised user data with third parties including Meta for advertising purposes. Users who
              had spent years building emotional relationships with their AI companions had no recourse. The
              conversations they believed were private had always been processed on servers they did not
              control. The trust was contractual; the architecture never matched the brand promise.
            </p>
            <p style={styles.p}>
              The same dynamic plays out more quietly across every major AI platform. Terms of service change.
              Companies get acquired. Models get retrained. Datasets get subpoenaed. The only protection that
              survives all of these events is cryptographic: data encrypted with a key the company never had
              access to cannot be compromised by any of them.
            </p>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>The Sovereignty Test</div>
              <p style={styles.calloutText}>
                Ask this question about any AI platform: if the company changed its privacy policy tonight,
                would your data automatically be safer or less safe? If the answer is &ldquo;less safe,&rdquo;
                you do not have sovereignty &mdash; you have a policy. Sovereignty means that a policy change
                at the company cannot affect the security of your data because the architecture has already
                made the decision.
              </p>
            </div>

            <p style={styles.p}>
              The concept of data sovereignty emerged first in the context of national governments &mdash;
              the question of whether a country\u2019s data is subject to the laws and jurisdiction of the
              country in which it is stored. Cloud computing created a version of this problem for businesses:
              if your company\u2019s data is stored on servers in a foreign jurisdiction, which country\u2019s
              law governs it? The AI era creates an even more personal version of this problem: the data
              is not a business asset but an intimate psychological record, and the question of who governs
              it is not geopolitical but deeply personal.
            </p>

            {/* ━━━━  SECTION 2: Three Levels  ━━━━ */}
            <h2 style={styles.h2}>What are the three levels of AI data sovereignty?</h2>
            <p style={styles.atomicAnswer}>
              The three levels are: Level 1 (regulatory compliance), where the platform follows applicable
              data protection law; Level 2 (data portability), where you can export and delete your data
              on demand; and Level 3 (true sovereignty), where your data is encrypted with keys only you
              hold and the platform is architecturally incapable of accessing plaintext content.
            </p>

            <div style={styles.levelCard}>
              <div style={styles.levelNumber}>Level 1</div>
              <div style={styles.levelTitle}>Regulatory Compliance</div>
              <p style={styles.levelDesc}>
                The platform follows GDPR, UK GDPR, CCPA, or equivalent law. It has a privacy policy.
                It responds to subject access requests within the statutory deadline. It does not sell
                personal data in the way regulators define selling. It has a data protection officer.
                It publishes an annual transparency report. This is the legal floor &mdash; not a feature
                but the minimum cost of operating in regulated markets. Most major AI platforms achieve
                Level 1, though the quality of compliance varies considerably.
              </p>
            </div>

            <div style={styles.levelCard}>
              <div style={styles.levelNumber}>Level 2</div>
              <div style={styles.levelTitle}>Data Portability</div>
              <p style={styles.levelDesc}>
                You can export your data in a structured, machine-readable format (GDPR Article 20). You
                can delete your account and data with reasonable completeness (Article 17). You receive
                clear, specific answers about what data is collected, why, for how long, and with whom
                it is shared. ChatGPT now provides a JSON export and account deletion. This is substantially
                better than Level 1, but your data is still processed in plaintext on servers you do not
                control, and the company can still change how it uses that data prospectively by updating
                its terms.
              </p>
            </div>

            <div style={styles.levelCard}>
              <div style={styles.levelNumber}>Level 3</div>
              <div style={styles.levelTitle}>True Sovereignty</div>
              <p style={styles.levelDesc}>
                Your data is encrypted at the application layer with keys derived from your credentials
                before it reaches the server. The server stores only encrypted blobs. The company cannot
                read your conversations even if it wanted to, even if it were legally compelled to, even
                if it were acquired by a hostile actor. Your memory is model-agnostic and fully portable
                to other AI systems. Training on your data is architecturally impossible because the
                company never has access to plaintext. This is the standard MEOK AI LABS is building
                toward across all tiers.
              </p>
            </div>

            <p style={styles.p}>
              Most users of mainstream AI tools are at Level 1. Some are at Level 2 if they have actively
              opted out of training and verified export functionality. Very few are at Level 3. The goal
              of this article is to explain why Level 3 matters, what big tech platforms actually do at
              Levels 1 and 2, and how to move toward genuine sovereignty today.
            </p>

            <div style={styles.statRow}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>73%</div>
                <div style={styles.statLabel}>
                  of AI users do not know whether their conversations are used for model training
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>3</div>
                <div style={styles.statLabel}>
                  major platforms changed their training data policies in 2024 without prominent notice
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>0</div>
                <div style={styles.statLabel}>
                  mainstream AI companions offer true Level 3 architectural sovereignty &mdash; except MEOK
                </div>
              </div>
            </div>

            {/* ━━━━  SECTION 3: What Big Tech Does  ━━━━ */}
            <h2 style={styles.h2}>What do big tech AI companies actually do with your data?</h2>
            <p style={styles.atomicAnswer}>
              Major AI platforms typically collect conversation transcripts, usage metadata, and device
              signals. They may use this data to train future model versions, conduct profiling to personalise
              responses, and share inferred insights with advertising or analytics partners. Free tiers
              are substantially more exposed than paid or API tiers, but the structural vulnerability
              &mdash; plaintext processing on third-party servers &mdash; applies at every tier.
            </p>
            <p style={styles.p}>
              Vague claims about &ldquo;big tech&rdquo; are less useful than concrete examples. The
              following is based on publicly available privacy policies, terms of service, and disclosed
              practices as of early 2026. Policies change; verify current practices before relying on them.
            </p>

            <h3 style={styles.h3}>OpenAI and ChatGPT: training, retention, and memory lock-in</h3>
            <p style={styles.p}>
              Free and Plus tier users are subject to model training by default. OpenAI\u2019s privacy
              policy states it may use conversations &ldquo;to improve our models.&rdquo; This can be
              disabled in Settings &gt; Data Controls &gt; Improve the model for everyone, but the opt-out
              is not prominently surfaced during onboarding. The default is training-on; the exception
              requires deliberate action by the user.
            </p>
            <p style={styles.p}>
              API and Enterprise customers are excluded from training by default, but all user data is
              retained for at least 30 days for safety monitoring, even after interface deletion. OpenAI
              shares data with Microsoft (Azure infrastructure, which hosts the models), and with various
              sub-processors listed in its privacy policy. The list is long and changes periodically.
            </p>
            <p style={styles.p}>
              ChatGPT\u2019s memory feature stores summaries of your conversations to personalise future
              responses. These summaries are useful &mdash; they make ChatGPT more contextually aware of
              you over time &mdash; but they live on OpenAI\u2019s servers in plaintext and are accessible
              to OpenAI\u2019s systems. You can view individual memories in the UI and delete them one by
              one, but you cannot export them in a structured format. You can export your conversation
              history as JSON &mdash; a reasonable Article 20 implementation &mdash; but the memory summaries
              that represent years of distilled context are not included in the export.
            </p>

            <div style={styles.warningCard}>
              <div style={styles.warningTitle}>Memory vs Conversation History</div>
              <p style={styles.warningText}>
                When ChatGPT exports your data, it exports conversation transcripts. It does not export
                the memory summaries OpenAI\u2019s systems have derived from those conversations &mdash;
                the inferred preferences, personality assessments, and behavioural patterns that actually
                shape your experience. You get the raw material; the processed intelligence stays with
                OpenAI. This is a gap in the Article 20 implementation that may be worth raising with
                the ICO.
              </p>
            </div>

            <h3 style={styles.h3}>Anthropic and Claude: conservative but structurally identical</h3>
            <p style={styles.p}>
              Anthropic\u2019s privacy practices are generally considered more conservative than OpenAI\u2019s.
              Anthropic has published detailed model cards, safety documentation, and an accessible privacy
              policy. Free-tier Claude.ai users are subject to model training unless they opt out via
              Account Settings &gt; Privacy. Claude Pro and API users are excluded by default. This is
              a better default than ChatGPT\u2019s.
            </p>
            <p style={styles.p}>
              However, the fundamental architecture is the same: your conversations are processed in
              plaintext on Anthropic\u2019s infrastructure. Claude\u2019s &ldquo;Projects&rdquo; feature
              maintains context across conversations, stored server-side and not exportable through the
              standard interface. Data portability requires a formal request by email, a friction point
              that arguably falls below the spirit of GDPR Article 20\u2019s requirement for data to be
              portable &ldquo;without hindrance.&rdquo; The ICO has not publicly ruled on whether email-only
              portability is compliant, but the contrast with ChatGPT\u2019s self-serve export is notable.
            </p>
            <p style={styles.p}>
              Anthropic retains conversations for safety and abuse monitoring even after deletion, under
              a basis of legitimate interest. The duration is not publicly specified. Like all cloud AI
              providers, Anthropic is subject to US law, including national security-related data demands
              that may not be publicly disclosed.
            </p>

            <h3 style={styles.h3}>Google Gemini: the advertising ecosystem problem</h3>
            <p style={styles.p}>
              Google\u2019s privacy position on Gemini is complicated by the advertising business model
              that underlies the rest of Google\u2019s product ecosystem. Google states explicitly that it
              does not use Gemini conversations for advertising targeting. This is a direct and categorical
              statement, and there is no evidence it is false.
            </p>
            <p style={styles.p}>
              The concern is subtler. Gemini conversations may be reviewed by human contractors for safety
              and quality purposes. The broader Google account ecosystem means usage signals &mdash; what
              you ask about, how often, on what devices, at what times of day &mdash; could theoretically
              inform profile attributes used elsewhere in Google\u2019s systems. Google has not provided
              the level of technical documentation that would allow independent verification of the boundary
              between Gemini data and the rest of Google\u2019s data graph.
            </p>
            <p style={styles.p}>
              Gemini\u2019s data portability operates through Google Takeout, which is functionally strong
              at Level 2: the export is comprehensive, machine-readable, and self-serve. But it inherits
              all the lock-in of Google\u2019s ecosystem, and the memory features that make Gemini useful
              over time are not portable to other AI systems.
            </p>

            <h3 style={styles.h3}>The inference-selling problem that no privacy policy addresses</h3>
            <p style={styles.p}>
              Beyond training and direct data retention, there is a subtler concern that deserves its own
              section: inference selling. An AI platform that processes millions of conversations builds
              an extraordinarily detailed picture of its user base &mdash; not just what people say, but
              the anxieties, desires, health concerns, relationship difficulties, financial situations,
              and career ambitions that surface in honest conversations with an AI.
            </p>
            <p style={styles.p}>
              This aggregate insight has commercial value even when individual records are never shared.
              When a platform says &ldquo;we don\u2019t sell your data,&rdquo; that is a specific legal
              claim about one specific commercial act. It does not address whether aggregate behavioural
              patterns are used to inform product pricing decisions. It does not address whether inferred
              user segments are shared with parent companies or investors. It does not address whether
              the platform\u2019s own future products are shaped by insights derived from your conversations.
            </p>
            <p style={styles.p}>
              True sovereignty requires architectural guarantees that make this impossible &mdash; not
              policy statements that address a narrow definition of &ldquo;selling.&rdquo; If the server
              never has access to your plaintext data, there is no dataset from which to derive aggregate
              insights. The inference problem is solved at the source.
            </p>

            <div style={styles.pullQuote}>
              <p style={styles.pullQuoteText}>
                &ldquo;The data you give your AI is not just your past &mdash; it is the raw material
                for inferences about your future behaviour that you have not yet produced. Sovereignty
                means that raw material stays yours.&rdquo;
              </p>
              <p style={styles.pullQuoteAttr}>Nicholas Templeman, Founder &mdash; MEOK AI LABS</p>
            </div>

            <hr style={styles.divider} />

            {/* ━━━━  SECTION 4: MEOK Architecture  ━━━━ */}
            <h2 style={styles.h2}>How does MEOK\u2019s architecture deliver genuine data sovereignty?</h2>
            <p style={styles.atomicAnswer}>
              MEOK encrypts your conversation memory at the application layer using AES-256 before it
              reaches MEOK\u2019s servers, with keys derived from your credentials via PBKDF2. The server
              stores only encrypted blobs and is architecturally incapable of reading plaintext content.
              Memory is model-agnostic and exportable as structured JSON. MEOK never trains on your
              conversations.
            </p>
            <p style={styles.p}>
              MEOK was designed from the beginning around a specific constraint: the server should not
              need to trust the user, and the user should not need to trust the server. This mutual-distrust
              architecture borrows from end-to-end encryption principles used in secure messaging systems
              like Signal &mdash; but applied to the persistent memory layer of an AI companion.
            </p>

            <h3 style={styles.h3}>User-encrypted memory: how it works technically</h3>
            <p style={styles.p}>
              When you interact with MEOK, your conversation context is summarised and tagged into memory
              nodes. Each node captures a specific piece of context: a preference, a goal, a relationship
              detail, a significant event. Before these nodes are written to MEOK\u2019s database, they
              are encrypted with a symmetric key derived from your account credentials using PBKDF2 with
              a high iteration count and a per-user salt.
            </p>
            <p style={styles.p}>
              The encrypted blob &mdash; unreadable without your key &mdash; is what the server stores.
              The key itself is derived from your password (which the server never stores in plaintext)
              and never transmitted to the server in a form that could be retained. When your AI needs
              to recall something about you, it requests the encrypted blob, which is decrypted in a
              sandboxed, ephemeral compute context before being injected into the model\u2019s context
              window. The decryption key exists in memory only for the duration of the inference call.
            </p>
            <p style={styles.p}>
              The practical implications are significant. Even if MEOK\u2019s database were breached by
              an external attacker, the attacker would obtain encrypted blobs with no practical path to
              plaintext content &mdash; each user\u2019s blobs are encrypted with a distinct user-specific
              key. Even if MEOK were compelled by a legal order to hand over your data, it could only
              hand over ciphertext. Even if MEOK were acquired by a company with different values, that
              company would inherit an architecture that prevents it from accessing what you have said.
            </p>

            <h3 style={styles.h3}>Model-agnostic memory: the end of AI lock-in</h3>
            <p style={styles.p}>
              One of the least-discussed forms of AI lock-in is memory lock-in. ChatGPT knows what you\u2019ve
              told it because OpenAI\u2019s memory feature is tightly coupled to ChatGPT\u2019s own models
              and infrastructure. If you switch to Claude or Gemini tomorrow, you start from scratch.
              The years of context you have built &mdash; your preferences, your history, the shorthand
              you\u2019ve developed with your AI &mdash; are gone. They cannot be exported, imported, or
              transferred. They are OpenAI\u2019s data, hosted on OpenAI\u2019s infrastructure, useful
              only within OpenAI\u2019s products.
            </p>
            <p style={styles.p}>
              MEOK\u2019s memory layer is model-agnostic by design. Your memory nodes are structured data:
              typed, tagged, semantically indexed, and serialised in a documented JSON format that can be
              injected into the context window of any foundation model. Today MEOK orchestrates Claude
              Sonnet and GPT-4o. Tomorrow it could orchestrate a fine-tuned open-source model running
              on your own hardware, or a new model from a provider that does not yet exist. Your memory
              comes with you because it belongs to you &mdash; not to the model, not to the platform.
            </p>
            <p style={styles.p}>
              This portability has a secondary effect on sovereignty: it eliminates the switching cost
              that keeps users on platforms with weaker privacy practices. If leaving ChatGPT means losing
              years of personalisation context, most users will stay with ChatGPT even if they have
              concerns about its data practices. MEOK\u2019s portability means you can move at any time
              without penalty &mdash; which is itself a form of sovereignty.
            </p>

            <h3 style={styles.h3}>No training on conversations: structural not contractual</h3>
            <p style={styles.p}>
              MEOK does not train on your conversations. This is not just a policy statement &mdash; it
              is structurally enforced by the encryption architecture. Since MEOK\u2019s servers never
              hold plaintext conversation content, there is no training corpus to extract. The models
              MEOK uses are the foundation models published by Anthropic and OpenAI; MEOK\u2019s value
              is in orchestration, memory management, personalisation, and user experience &mdash; not
              in training competing models on your most intimate disclosures.
            </p>
            <p style={styles.p}>
              This also means MEOK has no conflicting commercial interest. A platform that trains on your
              conversations is building an asset from your data &mdash; an asset that has value independent
              of whether you continue to use the product. MEOK\u2019s business model is a subscription
              for the service. The company earns money when you find the product genuinely valuable, not
              when you generate data.
            </p>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>Architecture before policy</div>
              <p style={styles.calloutText}>
                MEOK founder Nicholas Templeman built the encryption architecture before writing the
                privacy policy. The design principle: the privacy policy should describe what the
                architecture already enforces, not what the company promises to do voluntarily.
                If the architecture changes in a way that weakens privacy guarantees, the privacy
                policy should be the last thing to change, not the first &mdash; because the architecture
                is the truth and the policy is the description of it.
              </p>
            </div>

            {/* ━━━━  SECTION 5: BYOK  ━━━━ */}
            <h2 style={styles.h2}>What is the BYOK tier and why does it offer maximum sovereignty?</h2>
            <p style={styles.atomicAnswer}>
              BYOK (Bring Your Own Key) is MEOK\u2019s maximum-sovereignty tier. You supply your own
              OpenAI or Anthropic API key, stored only on your device. Requests route directly from
              your device to the model provider through MEOK\u2019s thin orchestration layer. MEOK
              never stores your API key or logs the raw request payload, eliminating even the
              encrypted-at-rest risk from MEOK\u2019s infrastructure.
            </p>
            <p style={styles.p}>
              Standard MEOK tiers handle API calls to foundation models on your behalf, which is
              necessary for session management, memory injection, and orchestration features. This is
              secure and private by the design described above &mdash; but it still means MEOK\u2019s
              servers are in the request path in an ephemeral sense. Your prompts are decrypted for
              the duration of an inference call. The decryption is ephemeral and logged minimally,
              but it happens.
            </p>
            <p style={styles.p}>
              BYOK removes even this. When you use the BYOK tier, MEOK\u2019s role shifts from
              operator to orchestrator. The distinction matters:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong style={{ color: '#f5f0e8' }}>Operator:</strong> the platform makes API calls
                to the model using its own API keys, on your behalf. The platform is in the billing
                relationship with the model provider and in the data flow.
              </li>
              <li style={styles.li}>
                <strong style={{ color: '#f5f0e8' }}>Orchestrator:</strong> the platform structures
                the request and injects memory context, but the API call itself is made with your
                keys from your device. You are in the billing relationship with the model provider.
                The platform\u2019s involvement in the data flow is limited to context assembly.
              </li>
            </ul>
            <p style={styles.p}>
              In BYOK mode, your API key is stored in encrypted local storage on your device. It is
              never transmitted to MEOK\u2019s servers in any form. MEOK\u2019s orchestration layer
              handles memory injection and response parsing in a lightweight client-side context before
              forwarding the assembled prompt to the model provider using your key. MEOK cannot see
              the raw request content because the key-signing happens on your device.
            </p>
            <p style={styles.p}>
              Additional BYOK characteristics:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Usage is billed directly to your OpenAI or Anthropic account. MEOK has no visibility
                into model-level consumption patterns.
              </li>
              <li style={styles.li}>
                Model selection is fully under your control. You choose which model to use for each
                conversation, and MEOK\u2019s memory layer follows you across models without rebuilding.
              </li>
              <li style={styles.li}>
                If you change your API key, your MEOK memory remains intact. The encryption of your
                memory is derived from your MEOK account credentials, not your API key.
              </li>
              <li style={styles.li}>
                BYOK is compatible with OpenAI\u2019s zero-data-retention API mode (available on
                enterprise contracts) for users who want model-provider-level guarantees in addition
                to MEOK-level guarantees.
              </li>
            </ul>
            <p style={styles.p}>
              BYOK is the right architecture for anyone whose professional obligations require the
              highest possible assurance that sensitive conversations are not processed by third parties.
              Lawyers discussing client matters. Doctors reviewing patient contexts. Journalists
              protecting sources. Therapists using AI to support session preparation. The BYOK tier
              provides a defensible, auditable chain of custody for sensitive AI interactions.
            </p>
            <p style={styles.p}>
              Full BYOK tier details and pricing at{' '}
              <Link href="/pricing" style={styles.inlineLink}>meok.ai/pricing</Link>.
            </p>

            <hr style={styles.divider} />

            {/* ━━━━  SECTION 6: Memory Portability  ━━━━ */}
            <h2 style={styles.h2}>
              How does AI memory portability work, and why can\u2019t ChatGPT offer it?
            </h2>
            <p style={styles.atomicAnswer}>
              AI memory portability means your contextual history &mdash; preferences, goals, past
              conversations, and personality signals &mdash; can travel with you between AI systems.
              ChatGPT cannot offer this because its memory is an undocumented proprietary format
              tightly coupled to OpenAI\u2019s models. MEOK\u2019s memory is structured, documented
              JSON that can be imported into any system that implements the schema.
            </p>
            <p style={styles.p}>
              Consider what you invest in an AI relationship over time. You explain your communication
              style. You describe your professional context, your family situation, your health
              concerns, your goals for the year. You reference past conversations that shaped your
              thinking. The AI builds a progressively more accurate model of you that makes every
              subsequent interaction more efficient and more useful.
            </p>
            <p style={styles.p}>
              This is the compounding value of AI memory &mdash; and it is also the mechanism of
              lock-in. The longer you use a platform, the more valuable the accumulated context,
              and the higher the cost of switching to a competitor that starts from zero.
            </p>
            <p style={styles.p}>
              ChatGPT\u2019s memory is stored as natural language summaries in an opaque internal
              format. You can view your memories in the UI and delete them individually, but you
              cannot export them in a structured format that another AI system could parse and use.
              You can download your conversation history, which a human can read &mdash; but no
              current AI system can automatically ingest a ChatGPT conversation export and reconstruct
              the memory context it implies. The portability is nominal, not functional.
            </p>
            <p style={styles.p}>
              This is not technically necessary. It is a product design choice. ChatGPT\u2019s memory
              could be serialised as structured JSON &mdash; typed nodes with explicit fields for
              preference type, content, confidence, and source conversation. The information is already
              there in OpenAI\u2019s systems. The decision not to export it in a portable format
              benefits OpenAI (retention) at the cost of the user (lock-in). From a GDPR Article 20
              perspective, there is an arguable case that inferred memory summaries constitute personal
              data &ldquo;provided by the data subject&rdquo; and should be portable. This has not
              been tested before regulators.
            </p>

            <h3 style={styles.h3}>MEOK\u2019s memory schema: what portability actually looks like</h3>
            <p style={styles.p}>
              MEOK\u2019s memory schema is a documented JSON format with explicit types. Each memory
              node has a type (preference, goal, relationship, context, event), a content field, a
              confidence score between 0 and 1, a timestamp, the source interaction identifier, and
              any relevant metadata tags. A preference node might look like: type preference, content
              &ldquo;prefers structured responses with numbered steps for complex tasks,&rdquo;
              confidence 0.87, tags communication-style, created 2026-01-14.
            </p>
            <p style={styles.p}>
              When you export your MEOK memory, you receive a file that is not just readable by
              humans but parseable by machines &mdash; including, in principle, other AI systems that
              implement the schema. When you import your memory into a new MEOK instance (after
              changing devices, for example, or after account recovery), the full context is
              immediately available. When MEOK adds support for a new foundation model, your memory
              works with it on day one.
            </p>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Capability</th>
                  <th style={styles.th}>ChatGPT</th>
                  <th style={styles.th}>Claude</th>
                  <th style={styles.th}>MEOK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.tdFeature}>Structured memory export</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.tdGold}>Yes (JSON)</td>
                </tr>
                <tr>
                  <td style={styles.tdFeature}>Memory portable to other models</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.tdGold}>Yes</td>
                </tr>
                <tr>
                  <td style={styles.tdFeature}>Opt out of model training</td>
                  <td style={styles.td}>Yes (toggle)</td>
                  <td style={styles.td}>Yes (toggle)</td>
                  <td style={styles.tdGold}>Never trains</td>
                </tr>
                <tr>
                  <td style={styles.tdFeature}>Client-side memory encryption</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.tdGold}>Yes (AES-256)</td>
                </tr>
                <tr>
                  <td style={styles.tdFeature}>BYOK (consumer-facing)</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.tdGold}>Yes</td>
                </tr>
                <tr>
                  <td style={styles.tdFeature}>Immediate full deletion</td>
                  <td style={styles.td}>Partial</td>
                  <td style={styles.td}>Request by email</td>
                  <td style={styles.tdGold}>Yes (72 hr)</td>
                </tr>
                <tr>
                  <td style={styles.tdFeature}>Plaintext inaccessible to server</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.tdGold}>Yes</td>
                </tr>
                <tr>
                  <td style={styles.tdFeature}>Open memory schema</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.td}>No</td>
                  <td style={styles.tdGold}>Yes (documented)</td>
                </tr>
              </tbody>
            </table>

            {/* ━━━━  SECTION 7: GDPR Rights  ━━━━ */}
            <h2 style={styles.h2}>
              What do GDPR Article 20 and Article 17 give you in practice?
            </h2>
            <p style={styles.atomicAnswer}>
              GDPR Article 20 gives you the right to receive your personal data in a structured,
              commonly used, machine-readable format and to transmit it to another controller without
              hindrance. Article 17 gives you the right to erasure within one calendar month. Both
              rights apply to any AI service processing data about EU or UK residents, regardless
              of where the company is headquartered.
            </p>
            <p style={styles.p}>
              These are powerful rights on paper. In practice, their usefulness depends on two
              things: whether AI companies implement them adequately, and whether the data they
              produce is genuinely useful or merely technically compliant. A 500MB JSON file
              that requires specialist software to parse is legally compliant with Article 20
              but practically useless to most individuals.
            </p>

            <h3 style={styles.h3}>Article 20 in the AI context: what should be portable?</h3>
            <p style={styles.p}>
              Article 20 covers personal data you have &ldquo;provided&rdquo; to the controller
              where processing is based on consent or contract. For AI platforms, this includes
              your conversation history, any profile data you submitted during signup, and &mdash;
              arguably &mdash; memory or preference data derived directly from your inputs. The
              Article requires the data be in a &ldquo;structured, commonly used and machine-readable
              format.&rdquo; JSON, CSV, and XML qualify. A PDF does not. A human-readable but
              non-machine-readable text dump is borderline.
            </p>
            <p style={styles.p}>
              The unsettled question is whether AI-derived memory summaries &mdash; the preferences,
              personality inferences, and behavioural models that platforms build from your
              conversations &mdash; constitute personal data &ldquo;provided&rdquo; by you in the
              Article 20 sense. Strictly, they are derived from data you provided, but the
              derivation is the platform\u2019s work product. The ICO has not ruled definitively
              on this. The Article 29 Working Party guidance suggests a broad interpretation of
              &ldquo;provided&rdquo; that would include inferred data closely tied to the data
              subject\u2019s own inputs. If so, ChatGPT\u2019s failure to export memory summaries
              may be a compliance gap.
            </p>

            <h3 style={styles.h3}>Article 17 in practice: what survives your deletion request?</h3>
            <p style={styles.p}>
              Article 17 requires erasure &ldquo;without undue delay&rdquo; and within one month.
              The regulation contains narrow exemptions for legal obligations, public interest,
              and archiving purposes. An AI company retaining your conversations for safety
              monitoring after a deletion request would need a compelling documented legal basis.
            </p>
            <p style={styles.p}>
              The practical difficulty is verification. When ChatGPT says your account is deleted,
              you have no independent technical means to verify that your data has been removed
              from training datasets, fine-tuning pipelines, evaluation benchmarks, distributed
              backups, or sub-processor databases. The company\u2019s compliance is a matter of
              trust, internal process quality, and ultimately regulatory enforcement &mdash; none
              of which you can independently audit.
            </p>
            <p style={styles.p}>
              MEOK\u2019s architecture changes this fundamentally. Because MEOK stores only
              encrypted blobs derived from your key, deletion of your account simultaneously
              destroys the decryption key and initiates a cascade delete of all blobs. Even if
              backup blobs persist for 72 hours &mdash; the standard backup retention window &mdash;
              they are encrypted with a key that no longer exists. Plaintext deletion becomes
              verifiable not by trusting the company\u2019s processes but by understanding the
              cryptographic outcome: ciphertext without a key is mathematically equivalent to
              deleted data.
            </p>

            <h3 style={styles.h3}>How to exercise your GDPR rights today</h3>
            <p style={styles.p}>
              You do not need to wait for a regulator to act. Under UK GDPR and EU GDPR, you can
              submit a Subject Access Request (SAR) to any AI platform processing your data. SARs
              must be responded to within one calendar month. They are free. The response must
              include a description of what data is held, why, for how long, and with whom it
              is shared &mdash; not just a data export, but a complete accounting.
            </p>
            <p style={styles.p}>
              For data portability specifically, make an explicit Article 20 request in writing
              &mdash; email is sufficient. State that you want your data &ldquo;in a structured,
              commonly used and machine-readable format.&rdquo; If the company provides a PDF
              or a non-machine-readable format, that is an arguable breach. For erasure, an
              Article 17 request must be acted on within a month unless the company claims a
              specific exemption, which it must identify and document.
            </p>
            <p style={styles.p}>
              Escalation routes: ICO (ico.org.uk, UK), CNIL (cnil.fr, France), DPC (dataprotection.ie,
              Ireland, relevant for many US tech companies with EU headquarters in Dublin), or
              the supervisory authority in your country. Regulatory enforcement is slow, but
              personal subject access requests are fast, free, and sometimes produce surprising
              disclosures about what data is actually held.
            </p>

            <hr style={styles.divider} />

            {/* ━━━━  SECTION 8: Future Rights  ━━━━ */}
            <h2 style={styles.h2}>
              Why is AI data sovereignty becoming a fundamental right?
            </h2>
            <p style={styles.atomicAnswer}>
              As AI systems become the primary interface through which people manage their health,
              relationships, finances, and professional lives, the data those systems accumulate
              becomes a comprehensive record of a person\u2019s inner life. Sovereignty over this
              data is not a privacy preference but a precondition for autonomy, dignity, and
              freedom from coercive manipulation.
            </p>
            <p style={styles.p}>
              We are in the early stages of a transition that has few historical precedents. The
              closest analogue is the emergence of financial data rights in the early 2000s &mdash;
              the recognition that your banking history, credit profile, and financial record
              constituted a form of personal property over which you had rights, not merely
              a business asset of the institutions that held it. Open Banking legislation in the
              UK and PSD2 in the EU were the regulatory outcomes: mandated portability, mandated
              access rights, mandated deletion rights.
            </p>
            <p style={styles.p}>
              AI data is more intimate than financial data. Your bank knows what you spend. Your
              AI knows why. It knows your fears about money, your relationship with your mother,
              the health symptom you\u2019ve been avoiding admitting to your doctor, the career
              ambition you\u2019ve never told your partner about. The aggregate of AI conversations
              over years is the most comprehensive psychological profile ever assembled on an
              individual &mdash; not because of bad intent by AI companies, but because honest
              engagement with AI requires honest disclosure.
            </p>

            <h3 style={styles.h3}>The longevity problem: AI memory does not degrade</h3>
            <p style={styles.p}>
              Human memory fades. Conversations are forgotten. The embarrassing thing you told a
              friend ten years ago is unlikely to be recalled with precision today. AI memory does
              not work this way. A conversation stored in 2024 will be as available in 2034 as it
              was when it was recorded. The profile built over years of AI interaction is not a
              fading impression but a permanent, searchable, queryable record.
            </p>
            <p style={styles.p}>
              This creates a temporal sovereignty problem that existing privacy frameworks do not
              fully address. GDPR\u2019s right to erasure was designed for data that is actively
              being processed &mdash; a marketing profile, a behavioural tracking dataset. It was
              not designed for the question of what happens to an intimate psychological record
              accumulated over a decade of daily AI interaction, stored across multiple sub-processors,
              partially incorporated into model weights through training, and partially replicated
              in backup systems whose retention policies may not align with the user\u2019s deletion
              request.
            </p>

            <h3 style={styles.h3}>The training feedback loop and collective risk</h3>
            <p style={styles.p}>
              If AI models are trained on user conversations, the model\u2019s future behaviour
              is shaped by its users\u2019 past disclosures. This creates a feedback loop that is
              both commercially valuable and ethically concerning. Models trained disproportionately
              on conversations from users experiencing mental health difficulties may develop
              response patterns that reflect and potentially reinforce those patterns. Models
              trained on conversations from specific demographic groups may develop biases that
              disadvantage other groups.
            </p>
            <p style={styles.p}>
              The individual\u2019s loss of sovereignty over their data contributes to a collective
              shaping of AI behaviour that affects everyone who uses the model &mdash; including
              people who were never part of the training process. This creates a public-interest
              case for AI data sovereignty that extends beyond individual privacy rights.
            </p>

            <h3 style={styles.h3}>The emerging regulatory landscape</h3>
            <p style={styles.p}>
              The EU AI Act, adopted in 2024 and entering force through 2026, creates the first
              comprehensive framework for AI governance in a major jurisdiction. It establishes
              risk tiers for AI systems, with requirements for transparency, explainability,
              and human oversight. It does not yet mandate the kind of architectural sovereignty
              that MEOK implements &mdash; it is primarily a risk-governance framework, not a
              data-rights framework &mdash; but it creates the regulatory vocabulary and
              institutional capacity for more specific requirements to follow.
            </p>
            <p style={styles.p}>
              The UK is taking a different approach: a principles-based framework rather than
              the EU\u2019s sector-specific regulation, relying on existing sectoral regulators
              including the ICO to develop AI-specific guidance. The ICO has published guidance
              on generative AI and GDPR compliance that addresses training data, consent, and
              purpose limitation &mdash; all relevant to the sovereignty questions this article
              addresses.
            </p>
            <p style={styles.p}>
              In the US, California\u2019s AI Transparency Act and similar state-level initiatives
              are creating a patchwork of requirements that will eventually drive federal action.
              The net direction of travel is clear: AI data rights will become more explicit,
              more enforceable, and more demanding over the next five years. Platforms that have
              built architectural sovereignty into their foundations &mdash; rather than bolting
              policy compliance onto a surveillance architecture &mdash; are better positioned
              for this future.
            </p>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>MEOK\u2019s Position</div>
              <p style={styles.calloutText}>
                AI data sovereignty should be a default, not a premium feature. Every user,
                regardless of subscription tier, deserves encrypted memory, portable data, and
                the right to instant full deletion. MEOK\u2019s BYOK tier extends this to the
                maximum level currently available &mdash; but the foundational sovereignty
                architecture applies to all MEOK users from day one. Follow{' '}
                @meok_ai for updates on our open-source sovereignty toolkit.
              </p>
            </div>

            {/* ━━━━  SECTION 9: How to Achieve It  ━━━━ */}
            <h2 style={styles.h2}>How do you achieve true AI data sovereignty today?</h2>
            <p style={styles.atomicAnswer}>
              Achieving true AI data sovereignty today means auditing your current AI data exposure,
              opting out of training on all platforms, exercising your GDPR portability rights
              proactively, and switching to a platform with architectural-level sovereignty guarantees.
              For most users, the last step is the most impactful.
            </p>

            <ol style={styles.stepList}>
              <li style={styles.stepItem}>
                <div style={styles.stepNumber}>1</div>
                <div style={styles.stepContent}>
                  <div style={styles.stepTitle}>Audit your current AI data exposure</div>
                  <p style={styles.stepText}>
                    List every AI service you use regularly: ChatGPT, Claude, Gemini, Copilot,
                    Perplexity, Replika, and any others. For each one, find the privacy settings
                    and identify whether model training is enabled, what data is retained, and
                    what export options exist. Most people who do this audit are surprised both
                    by how many services have training enabled by default and by how few provide
                    meaningful export functionality.
                  </p>
                </div>
              </li>
              <li style={styles.stepItem}>
                <div style={styles.stepNumber}>2</div>
                <div style={styles.stepContent}>
                  <div style={styles.stepTitle}>Opt out of model training on all platforms</div>
                  <p style={styles.stepText}>
                    For ChatGPT: Settings &gt; Data Controls &gt; Improve the model for everyone
                    (toggle off). For Claude: Account Settings &gt; Privacy &gt; opt out. For
                    Google Gemini: My Activity settings in your Google Account. For Microsoft
                    Copilot: Settings &gt; Privacy &gt; improve AI. This does not give you Level
                    3 sovereignty but it is a meaningful Level 2 protection available right now,
                    at no cost.
                  </p>
                </div>
              </li>
              <li style={styles.stepItem}>
                <div style={styles.stepNumber}>3</div>
                <div style={styles.stepContent}>
                  <div style={styles.stepTitle}>Export your data and test portability</div>
                  <p style={styles.stepText}>
                    Request a data export from every AI platform you use. Do it now, before you
                    need to. Open the file and verify it is machine-readable, not a human-readable
                    PDF. Understand what is and is not included. Consider filing a Subject Access
                    Request for a complete picture of all data held &mdash; including inferred
                    data that may not appear in standard exports.
                  </p>
                </div>
              </li>
              <li style={styles.stepItem}>
                <div style={styles.stepNumber}>4</div>
                <div style={styles.stepContent}>
                  <div style={styles.stepTitle}>Choose platforms with architectural sovereignty</div>
                  <p style={styles.stepText}>
                    Policy promises are better than nothing, but architecture is better than
                    policy. When evaluating an AI platform, ask: does the company have technical
                    access to my plaintext conversations? If yes, you are relying on goodwill
                    and regulatory compliance, not structural protection. Structural protection
                    means encryption with user-held keys, documented and independently auditable.
                  </p>
                </div>
              </li>
              <li style={styles.stepItem}>
                <div style={styles.stepNumber}>5</div>
                <div style={styles.stepContent}>
                  <div style={styles.stepTitle}>Use BYOK for sensitive professional use cases</div>
                  <p style={styles.stepText}>
                    If you use AI for anything professionally sensitive &mdash; legal research,
                    medical decision support, financial planning, journalistic investigation,
                    or therapy preparation &mdash; BYOK removes the orchestration layer from
                    the trust equation entirely. Your API key stays on your device. Requests
                    go directly to the model. Your memory stays encrypted and portable.
                    See full details at{' '}
                    <Link href="/pricing" style={styles.inlineLink}>meok.ai/pricing</Link>.
                  </p>
                </div>
              </li>
            </ol>

            {/* ━━━━  SECTION 10: History  ━━━━ */}
            <h2 style={styles.h2}>
              What is the history of AI data sovereignty incidents?
            </h2>
            <p style={styles.atomicAnswer}>
              The history of AI data sovereignty incidents is short but instructive: a series of
              policy changes, regulatory actions, and breaches that illustrate why structural
              protections are necessary. Each incident followed the same pattern &mdash; a
              trust-based privacy promise, a commercial incentive that conflicted with it,
              and a policy change that prioritised the company\u2019s interests over users\u2019.
            </p>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2021</div>
              <p style={styles.timelineText}>
                <strong style={{ color: '#f5f0e8' }}>Replika privacy update:</strong> Replika
                updated its privacy policy to allow sharing of user data with third parties.
                Users were not prominently notified. The policy change was buried in a terms
                update email. Many users discovered the change months later through media coverage.
              </p>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2023</div>
              <p style={styles.timelineText}>
                <strong style={{ color: '#f5f0e8' }}>Italy blocks Replika:</strong> Italy\u2019s
                data protection authority (Garante) blocked Replika from processing data about
                Italian residents, citing failure to verify user age and lack of legal basis for
                processing sensitive personal data about minors and vulnerable adults. Replika
                responded by abruptly changing its AI models, ending the relational personas
                that users had built over years &mdash; demonstrating how platform control over
                AI behaviour can override users\u2019 relational investments.
              </p>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2023</div>
              <p style={styles.timelineText}>
                <strong style={{ color: '#f5f0e8' }}>Samsung ChatGPT leak:</strong> Samsung
                employees accidentally leaked confidential source code and meeting notes by
                entering them into ChatGPT conversations. OpenAI\u2019s retention of those
                conversations created a data leakage risk Samsung had not anticipated. Samsung
                subsequently banned ChatGPT for internal use. The incident highlighted that
                the AI platform\u2019s server-side retention of conversations creates risks
                that users rarely consider when disclosing information.
              </p>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2024</div>
              <p style={styles.timelineText}>
                <strong style={{ color: '#f5f0e8' }}>OpenAI training opt-out default change:</strong>{' '}
                OpenAI changed the default training setting for new accounts without sufficient
                prominent notice. Multiple privacy advocacy groups flagged the change. OpenAI
                clarified its position but the episode illustrated how default settings &mdash;
                not explicit choices &mdash; determine the data exposure of most users.
              </p>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2025</div>
              <p style={styles.timelineText}>
                <strong style={{ color: '#f5f0e8' }}>EU AI Act enforcement begins:</strong>{' '}
                The EU AI Act\u2019s transparency requirements enter force for general-purpose
                AI models. Providers must publish summaries of training data used, including
                any copyrighted material. This creates new transparency obligations but does
                not yet mandate user-side encryption or memory portability.
              </p>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2026</div>
              <p style={styles.timelineText}>
                <strong style={{ color: '#f5f0e8' }}>MEOK BYOK tier launches:</strong>{' '}
                MEOK AI LABS launches the BYOK tier, the first consumer-facing AI companion
                product to offer architectural sovereignty with user-held API keys, encrypted
                memory, and full JSON portability across all subscription tiers. The launch
                is accompanied by a published open-source memory schema specification.
              </p>
            </div>

            {/* ━━━━  SECTION 11: Differentiation  ━━━━ */}
            <h2 style={styles.h2}>
              What makes MEOK different from other privacy-focused AI tools?
            </h2>
            <p style={styles.atomicAnswer}>
              Most privacy-focused AI tools offer policy-level protections: they promise not to
              train on data or share it with advertisers. MEOK offers architectural-level
              protections: the server never holds plaintext, so the promise is structurally
              enforced. MEOK also combines sovereignty with a fully featured AI companion
              experience, including model-agnostic memory, multiple AI archetypes, and BYOK
              &mdash; whereas most privacy-focused tools sacrifice capability for privacy.
            </p>
            <p style={styles.p}>
              The privacy-versus-capability trade-off is real in many domains. End-to-end
              encrypted messaging is meaningfully less flexible than unencrypted communication.
              Zero-knowledge databases are genuinely harder to build search and analytics on
              top of. But for AI companions, MEOK was designed to demonstrate that the trade-off
              is not necessary. Encrypting memory at the application layer adds modest
              computational overhead but has no meaningful impact on response quality. The
              model-agnostic memory architecture is in some ways more capable than platform-locked
              memory, because it can inject richer, more structured context regardless of which
              foundation model is in use.
            </p>
            <p style={styles.p}>
              Competing privacy-first AI tools in the market as of early 2026 generally fall
              into one of two categories: local-only tools that run entirely on-device (strong
              sovereignty, limited capability due to smaller models), or API wrapper tools that
              route requests to major models with a privacy-forward marketing message but no
              architectural differentiation. MEOK occupies a distinct position: cloud-capable,
              model-agnostic, architecturally encrypted, and BYOK-enabled.
            </p>
            <p style={styles.p}>
              For users coming from ChatGPT, Claude, or Replika, the transition to MEOK involves
              a one-time migration of whatever data can be exported from the previous platform.
              MEOK\u2019s onboarding imports conversation exports from major platforms and
              rebuilds the most relevant memory nodes from them using a structured parsing
              pipeline. You do not start from scratch when you move to MEOK. You start with
              whatever context you could rescue from the platform you\u2019re leaving.
            </p>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>A Note on Transparency</div>
              <p style={styles.calloutText}>
                MEOK publishes its memory schema specification publicly. We describe the
                encryption architecture in technical detail in our security documentation.
                We submit to annual independent security audits and publish the results.
                We do not claim that our architecture is perfect or that it will never
                have vulnerabilities &mdash; but we do claim that you can read the technical
                documentation, understand what we have built, and make an informed decision
                about whether it meets your standard. That is more than any current competitor
                offers.
              </p>
            </div>

            {/* ━━━━  FAQ  ━━━━ */}
            <section style={styles.faqSection}>
              <div style={styles.faqLabel}>Frequently Asked Questions</div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>What is AI data sovereignty?</h3>
                <p style={styles.faqA}>
                  AI data sovereignty means you hold genuine, enforceable ownership and control
                  over every piece of data your AI system stores about you &mdash; your
                  conversations, memory context, behavioural inferences, and usage patterns.
                  It goes beyond regulatory compliance to mean that no third party can train on,
                  sell, or retain your data without your explicit, informed, and revocable consent.
                  True sovereignty is architectural: the platform is structurally incapable of
                  accessing your plaintext data without your keys, which means no policy change,
                  acquisition, or legal compulsion can undermine the guarantee.
                </p>
              </div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>Can I export my MEOK data?</h3>
                <p style={styles.faqA}>
                  Yes. MEOK provides a full JSON export of your entire memory archive at any
                  time from your account settings. Your export includes all conversation
                  summaries, contextual tags, preference signals, and structured memory nodes
                  &mdash; in a documented, portable format you can inspect, archive, or in
                  principle import into any system that implements MEOK\u2019s open memory
                  schema. Exports are available on demand, immediately, with no email request
                  required. This satisfies your GDPR Article 20 data portability rights with
                  no friction, in contrast to platforms that require formal written requests
                  to trigger portability.
                </p>
              </div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>Does MEOK train on my conversations?</h3>
                <p style={styles.faqA}>
                  No. MEOK never uses your conversations to train any model, now or in the
                  future. Your data is encrypted with keys you hold before it reaches MEOK\u2019s
                  servers. The server processes only encrypted blobs and has no access to
                  plaintext conversation content at rest. This is a structural guarantee
                  enforced by the architecture, not a policy promise that could be changed
                  in a future terms-of-service update without architectural change. The models
                  MEOK uses are Anthropic\u2019s and OpenAI\u2019s foundation models; MEOK
                  does not train its own models and has no commercial incentive to accumulate
                  your data as a training asset.
                </p>
              </div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>What is the BYOK tier?</h3>
                <p style={styles.faqA}>
                  BYOK (Bring Your Own Key) is MEOK\u2019s maximum-sovereignty tier. You supply
                  your own OpenAI or Anthropic API key, which is stored only on your device
                  and never transmitted to MEOK\u2019s servers. Your requests route directly
                  from your device to the model provider through MEOK\u2019s thin orchestration
                  layer &mdash; MEOK handles memory injection and response structuring but
                  never stores your API key or logs raw request payloads. Usage is billed
                  directly to your model provider account. BYOK is the appropriate tier for
                  users with professional-grade sovereignty requirements. Full details and
                  pricing are available at{' '}
                  <Link href="/pricing" style={styles.inlineLink}>meok.ai/pricing</Link>.
                </p>
              </div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>How do I delete all my MEOK data?</h3>
                <p style={styles.faqA}>
                  From Account Settings, select Delete Everything. This triggers an immediate
                  cascade deletion of all memory nodes, conversation summaries, preference
                  signals, and account metadata. The process completes within 72 hours across
                  all backup replicas. Because all stored data is encrypted with your
                  account-derived key &mdash; which is cryptographically destroyed as part
                  of account deletion &mdash; any blobs that persist in backup systems during
                  the 72-hour window are mathematically inaccessible without a key that no
                  longer exists. This fully satisfies your GDPR Article 17 right to erasure
                  and provides stronger guarantees than platforms whose deletion processes
                  rely entirely on internal process compliance.
                </p>
              </div>
            </section>

            {/* ━━━━  CTA  ━━━━ */}
            <div style={styles.cta}>
              <div style={styles.ctaTitle}>Take ownership of your AI relationship</div>
              <p style={styles.ctaText}>
                Your conversations deserve better than servers you don\u2019t control, terms
                you didn\u2019t negotiate, and training pipelines you can\u2019t opt out of
                structurally. MEOK is built from the ground up for sovereignty &mdash; encrypted
                memory, model-agnostic portability, a no-training guarantee enforced by
                architecture, and a BYOK tier that puts your API key on your device where
                it belongs.
              </p>
              <div style={styles.ctaButtons}>
                <Link href="/birth" style={styles.btnPrimary}>
                  Start for free
                </Link>
                <Link href="/pricing" style={styles.btnSecondary}>
                  View BYOK pricing
                </Link>
              </div>
            </div>

            {/* ━━━━  RELATED  ━━━━ */}
            <div style={styles.relatedSection}>
              <div style={styles.relatedLabel}>Related reading</div>
              <div style={styles.relatedGrid}>
                <Link
                  href="/blog/why-meok-never-trains-on-you"
                  style={styles.relatedCard}
                >
                  <div style={styles.relatedCardTitle}>Why MEOK never trains on you</div>
                  <p style={styles.relatedCardDesc}>
                    The architectural reasons training on user conversations is impossible
                    at MEOK, explained without jargon.
                  </p>
                </Link>
                <Link
                  href="/blog/memory-portability"
                  style={styles.relatedCard}
                >
                  <div style={styles.relatedCardTitle}>Memory portability explained</div>
                  <p style={styles.relatedCardDesc}>
                    How MEOK\u2019s open memory schema lets you take your AI relationship
                    history wherever you go.
                  </p>
                </Link>
                <Link
                  href="/blog/sovereign-ai-explained"
                  style={styles.relatedCard}
                >
                  <div style={styles.relatedCardTitle}>Sovereign AI explained</div>
                  <p style={styles.relatedCardDesc}>
                    The full case for AI that works for you, not for the platform
                    that built it.
                  </p>
                </Link>
                <Link
                  href="/blog/data-sovereignty-ai"
                  style={styles.relatedCard}
                >
                  <div style={styles.relatedCardTitle}>Who owns your ChatGPT conversations?</div>
                  <p style={styles.relatedCardDesc}>
                    A direct comparison of how ChatGPT, Claude, Replika, and MEOK
                    handle your data.
                  </p>
                </Link>
                <Link
                  href="/blog/ai-companion-privacy"
                  style={styles.relatedCard}
                >
                  <div style={styles.relatedCardTitle}>AI companion privacy guide</div>
                  <p style={styles.relatedCardDesc}>
                    What every AI companion user should know about data collection,
                    retention, and their rights.
                  </p>
                </Link>
                <Link
                  href="/blog/how-sovereign-ai-works"
                  style={styles.relatedCard}
                >
                  <div style={styles.relatedCardTitle}>How sovereign AI works</div>
                  <p style={styles.relatedCardDesc}>
                    A technical walkthrough of the encryption, memory, and orchestration
                    architecture behind MEOK.
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </article>
      </main>

      {/* ━━━━  FOOTER NAV  ━━━━ */}
      <footer>
        <div style={{ ...styles.container, ...styles.footer }}>
          <span style={styles.footerText}>
            &copy; 2026 MEOK AI LABS &mdash; Nicholas Templeman &mdash; @meok_ai
          </span>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap' as const,
            }}
          >
            <Link href="/blog" style={styles.footerLink}>
              All posts
            </Link>
            <Link href="/birth" style={styles.footerLink}>
              Get started
            </Link>
            <Link href="/pricing" style={styles.footerLink}>
              Pricing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
