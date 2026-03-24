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
        text: 'AI data sovereignty means you hold genuine ownership and control over every piece of data your AI system stores about you \u2014 your conversations, your memory context, your behavioural inferences, and your usage patterns. It goes beyond regulatory compliance to mean that no third party can train on, sell, or retain your data without your explicit, informed, and revocable consent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export my MEOK data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK provides full JSON export of your entire memory archive at any time from your account settings. Your export includes all conversation summaries, contextual tags, preference signals, and structured memory nodes \u2014 in a portable format you can import into any compatible system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK train on my conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK never uses your conversations to train any model. Your data is encrypted with keys you hold before it reaches MEOK\u2019s servers. The server processes only encrypted blobs and has no access to plaintext conversation content. This is a structural guarantee, not a policy promise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the BYOK tier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BYOK (Bring Your Own Key) is MEOK\u2019s maximum-sovereignty tier. You supply your own OpenAI or Anthropic API key. Your requests route directly from your device to the model provider through MEOK\u2019s orchestration layer \u2014 MEOK never sees your API key or the raw request payload. See pricing at meok.ai/pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I delete all my MEOK data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Account Settings, select Delete Everything. This triggers an immediate cascade deletion of all memory nodes, conversation summaries, preference signals, and account metadata. Deletion is irreversible and completes within 72 hours across all backup replicas, fully satisfying your GDPR Article 17 right to erasure.',
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
    background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
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

      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.container}>
          <span style={styles.eyebrow}>MEOK AI LABS &mdash; Sovereignty Series</span>
          <h1 style={styles.h1}>
            Personal AI Data Sovereignty: Why It Matters and How to Achieve It
          </h1>
          <p style={styles.lede}>
            Every conversation you have with ChatGPT, Claude, or Gemini lives on servers you do not control, processed by systems governed by terms you did not negotiate, and potentially used to train models that will compete with your own interests. True AI data sovereignty is not a privacy checkbox. It is a fundamental question of who owns the most intimate record of your thinking.
          </p>
          <div style={styles.metaRow}>
            <span>Nicholas Templeman</span>
            <span style={styles.metaDot}>&bull;</span>
            <span>MEOK AI LABS</span>
            <span style={styles.metaDot}>&bull;</span>
            <span>24 March 2026</span>
            <span style={styles.metaDot}>&bull;</span>
            <span>14 min read</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <main>
        <article style={styles.article}>
          <div style={styles.container}>

            {/* ── Section 1 ── */}
            <h2 style={styles.h2}>What does AI data sovereignty actually mean?</h2>
            <p style={styles.atomicAnswer}>
              AI data sovereignty means you hold genuine, enforceable ownership and control over every piece of data your AI system stores about you &mdash; your conversations, memory context, behavioural inferences, and usage patterns &mdash; such that no third party can train on, sell, or retain that data without your explicit, informed, and revocable consent.
            </p>
            <p style={styles.p}>
              The phrase gets used loosely. Vendors apply it to mean anything from &ldquo;we comply with GDPR&rdquo; to &ldquo;we don\u2019t sell your data to advertisers.&rdquo; These are genuine protections, but they are a long way from sovereignty. A government that complies with international law is not a sovereign nation if it cannot set its own foreign policy. Similarly, an AI platform that respects data protection law is not giving you sovereignty if it can unilaterally change what it does with your conversations by updating a terms-of-service document.
            </p>
            <p style={styles.p}>
              Sovereignty requires structural guarantees &mdash; architecture-level protections that make it technically impossible for the platform to access your data without your keys, rather than policy-level promises that can change at a board meeting.
            </p>
            <p style={styles.p}>
              This distinction is not academic. In 2023, Replika updated its privacy policy to allow sharing of anonymised user data with third parties including Meta for advertising purposes. Users who had spent years building emotional relationships with their AI companions had no recourse. The conversations they believed were private had always been processed on servers they did not control. The trust was contractual; the architecture never matched the brand promise.
            </p>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>The Sovereignty Test</div>
              <p style={styles.calloutText}>
                Ask this question about any AI platform: if the company changed its privacy policy tonight, would your data automatically be safer or less safe? If the answer is &ldquo;less safe,&rdquo; you do not have sovereignty &mdash; you have a policy. Sovereignty means that a policy change at the company cannot affect the security of your data because the architecture has already made the decision.
              </p>
            </div>

            {/* ── Section 2 ── */}
            <h2 style={styles.h2}>What are the three levels of AI data sovereignty?</h2>
            <p style={styles.atomicAnswer}>
              The three levels are: Level 1 (regulatory compliance), where the platform follows applicable data protection law; Level 2 (data portability), where you can export and delete your data on demand; and Level 3 (true sovereignty), where your data is encrypted with keys only you hold and the platform is architecturally incapable of accessing plaintext content.
            </p>

            <div style={styles.levelCard}>
              <div style={styles.levelNumber}>Level 1</div>
              <div style={styles.levelTitle}>Regulatory Compliance</div>
              <p style={styles.levelDesc}>
                The platform follows GDPR, UK GDPR, CCPA, or equivalent law. It has a privacy policy. It responds to subject access requests. It does not sell personal data in the way regulators define selling. This is the legal floor &mdash; not a feature, but the minimum cost of operating in regulated markets. Most major AI platforms achieve Level 1.
              </p>
            </div>

            <div style={styles.levelCard}>
              <div style={styles.levelNumber}>Level 2</div>
              <div style={styles.levelTitle}>Data Portability</div>
              <p style={styles.levelDesc}>
                You can export your data in a structured, machine-readable format (GDPR Article 20). You can delete your account and data with reasonable completeness (Article 17). You receive clear answers about what data is collected and why. ChatGPT now provides a JSON export and account deletion. This is better than Level 1, but your data is still processed in plaintext on servers you do not control, and the company can still change how it uses that data prospectively.
              </p>
            </div>

            <div style={styles.levelCard}>
              <div style={styles.levelNumber}>Level 3</div>
              <div style={styles.levelTitle}>True Sovereignty</div>
              <p style={styles.levelDesc}>
                Your data is encrypted at the application layer with keys derived from your credentials before it reaches the server. The server stores only encrypted blobs. The company cannot read your conversations even if it wanted to. Your memory is model-agnostic and fully portable to other AI systems. Training on your data is architecturally impossible because the company never has access to plaintext. This is what MEOK is building toward.
              </p>
            </div>

            <p style={styles.p}>
              Most users of mainstream AI tools are at Level 1. Some are at Level 2 if they have actively opted out of training and verified export functionality. Very few are at Level 3. The goal of this piece is to explain why Level 3 matters, what big tech platforms actually do at Levels 1 and 2, and how to move toward genuine sovereignty.
            </p>

            {/* ── Section 3 ── */}
            <h2 style={styles.h2}>What do big tech AI companies actually do with your data?</h2>
            <p style={styles.atomicAnswer}>
              Major AI platforms typically collect conversation transcripts, usage metadata, and device signals; they may use this data to train future model versions (with opt-out mechanisms of varying quality); they conduct profiling to personalise responses and recommend features; and some share inferred insights with advertising or analytics partners, particularly on free tiers.
            </p>
            <p style={styles.p}>
              Let\u2019s be specific, because vague claims about &ldquo;big tech&rdquo; are less useful than concrete examples. The following is based on publicly available privacy policies and terms of service as of early 2026.
            </p>

            <h3 style={styles.h3}>OpenAI and ChatGPT</h3>
            <p style={styles.p}>
              Free and Plus tier users are subject to model training by default. OpenAI\u2019s privacy policy states that it may use conversations &ldquo;to improve our models.&rdquo; This can be disabled in Settings &gt; Data Controls &gt; Improve the model for everyone, but the opt-out is not prominently surfaced during onboarding. API and Enterprise customers are excluded from training by default.
            </p>
            <p style={styles.p}>
              OpenAI retains conversation history for 30 days even after you delete it from the interface, ostensibly for safety monitoring. It shares data with Microsoft (Azure infrastructure) and various sub-processors. ChatGPT\u2019s memory feature stores summaries of your conversations to personalise future responses &mdash; useful, but those summaries live on OpenAI\u2019s servers in plaintext and are inaccessible to you in their raw form.
            </p>
            <p style={styles.p}>
              OpenAI\u2019s data portability offering is reasonable for Level 2: you can export your conversation history as JSON and delete your account. What you cannot do is move your memory to another AI system. Your ChatGPT memory is locked inside OpenAI\u2019s infrastructure.
            </p>

            <h3 style={styles.h3}>Anthropic and Claude</h3>
            <p style={styles.p}>
              Free-tier Claude.ai users are subject to model training unless they opt out via Account Settings &gt; Privacy. Claude Pro and API users are excluded by default. Anthropic\u2019s privacy practices are generally considered more conservative than OpenAI\u2019s &mdash; Anthropic has published relatively detailed model cards and safety documents &mdash; but the fundamental architecture is the same: your conversations are processed in plaintext on Anthropic\u2019s infrastructure.
            </p>
            <p style={styles.p}>
              Claude\u2019s &ldquo;Projects&rdquo; feature maintains context across conversations, similar to ChatGPT\u2019s memory. This context is stored server-side and cannot be exported in a structured format through the standard interface. Data portability requires a formal request by email, a friction point that arguably falls below the spirit of GDPR Article 20\u2019s requirement for data to be portable &ldquo;without hindrance.&rdquo;
            </p>

            <h3 style={styles.h3}>Google Gemini</h3>
            <p style={styles.p}>
              Google\u2019s privacy position is complicated by its advertising business model. Gemini conversations may be reviewed by human reviewers for safety and quality purposes. Google states it does not use Gemini conversations for advertising targeting, but the broader Google account ecosystem means that usage signals &mdash; what you ask about, how often, on what devices &mdash; could plausibly inform profile attributes used elsewhere in Google\u2019s systems. Google has not provided the level of architectural documentation that would make it possible to verify this claim technically.
            </p>
            <p style={styles.p}>
              Gemini\u2019s data portability operates through Google Takeout, which is functionally strong at Level 2 but inherits all the lock-in of Google\u2019s ecosystem.
            </p>

            <h3 style={styles.h3}>The inference-selling problem</h3>
            <p style={styles.p}>
              Beyond training and direct data retention, there is a subtler concern: inference selling. An AI platform that processes millions of conversations builds an extraordinarily detailed picture of its user base &mdash; not just what people say, but the anxieties, desires, health concerns, relationship difficulties, and career ambitions that surface in honest conversations with an AI. This aggregate insight has commercial value even when individual records are never shared.
            </p>
            <p style={styles.p}>
              When a platform says &ldquo;we don\u2019t sell your data,&rdquo; that is a specific legal claim about one specific commercial act. It does not address whether aggregate behavioural patterns are used to inform product pricing decisions, whether inferred user segments are shared with parent companies or investors, or whether the platform\u2019s own future products are shaped by insights derived from your conversations. True sovereignty requires architectural guarantees that make this impossible, not policy statements that address it narrowly.
            </p>

            <hr style={styles.divider} />

            {/* ── Section 4 ── */}
            <h2 style={styles.h2}>How does MEOK\u2019s architecture deliver genuine data sovereignty?</h2>
            <p style={styles.atomicAnswer}>
              MEOK encrypts your conversation memory at the application layer using AES-256 before it reaches MEOK\u2019s servers, with keys derived from your credentials. The server stores only encrypted blobs and is architecturally incapable of reading your plaintext. Memory is model-agnostic and exportable as structured JSON. MEOK never trains on your conversations.
            </p>
            <p style={styles.p}>
              MEOK was designed from day one around the constraint that the server should not need to trust the user, and the user should not need to trust the server. This mutual-distrust architecture &mdash; borrowing from end-to-end encryption principles used in secure messaging &mdash; is the foundation of everything else.
            </p>
            <p style={styles.p}>
              Here is how it works in practice.
            </p>

            <h3 style={styles.h3}>User-encrypted memory</h3>
            <p style={styles.p}>
              When you interact with MEOK, your conversation context is summarised and tagged into memory nodes. Before these nodes are written to MEOK\u2019s database, they are encrypted with a key derived from your account credentials using PBKDF2 with a high iteration count. The encrypted blob &mdash; unreadable without your key &mdash; is what the server stores. When your AI needs to recall something about you, it requests the blob, which is decrypted client-side or in a sandboxed, ephemeral compute context before being injected into the model\u2019s context window.
            </p>
            <p style={styles.p}>
              The practical implication: even if MEOK\u2019s database were breached, the attacker would obtain encrypted blobs with no practical path to plaintext content. Even if MEOK were compelled by a legal order to hand over your data, it could only hand over ciphertext. Even if MEOK were acquired by a company with different values, that company would inherit an architecture that prevents it from accessing what you have said.
            </p>

            <h3 style={styles.h3}>Model-agnostic memory</h3>
            <p style={styles.p}>
              One of the least-discussed forms of AI lock-in is memory lock-in. ChatGPT knows what you\u2019ve told it because OpenAI\u2019s memory feature is tightly coupled to ChatGPT\u2019s own models. If you switch to Claude or Gemini tomorrow, you start from scratch. Years of context &mdash; your preferences, your history, the shorthand you\u2019ve developed with your AI &mdash; vanish.
            </p>
            <p style={styles.p}>
              MEOK\u2019s memory layer is model-agnostic by design. Your memory nodes are structured data: tagged, semantically indexed, and serialised in a format that can be injected into the context window of any foundation model. Today MEOK orchestrates Claude and GPT-4o. Tomorrow it could orchestrate a fine-tuned open-source model running on your own hardware. Your memory comes with you because it belongs to you, not to the model.
            </p>

            <h3 style={styles.h3}>No training on conversations</h3>
            <p style={styles.p}>
              MEOK does not train on your conversations. This is not just a policy statement &mdash; it is structurally enforced by the encryption architecture. Since MEOK\u2019s servers never hold plaintext conversation content, there is no training corpus to extract. The models MEOK uses are the foundation models published by Anthropic and OpenAI; MEOK\u2019s value is in orchestration, memory, and UX, not in model training.
            </p>
            <p style={styles.p}>
              This has a secondary benefit: MEOK has no commercial incentive to accumulate your data beyond what is necessary to serve you. The business model is a subscription for the service, not data monetisation at the back end.
            </p>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>Architecture vs Policy</div>
              <p style={styles.calloutText}>
                MEOK founder Nicholas Templeman built the encryption architecture before writing the privacy policy, not after. The design principle: the privacy policy should describe what the architecture already enforces, not what the company promises to do voluntarily. If the architecture changes in a way that weakens privacy guarantees, the privacy policy should be the last thing to change, not the first.
              </p>
            </div>

            {/* ── Section 5 ── */}
            <h2 style={styles.h2}>What is the BYOK tier and why does it offer maximum sovereignty?</h2>
            <p style={styles.atomicAnswer}>
              BYOK (Bring Your Own Key) is MEOK\u2019s maximum-sovereignty tier. You supply your own OpenAI or Anthropic API key. Requests route directly from your device to the model provider through MEOK\u2019s thin orchestration layer. MEOK never sees your API key or the raw request payload, eliminating even the encrypted-at-rest risk from MEOK\u2019s infrastructure entirely.
            </p>
            <p style={styles.p}>
              Standard MEOK tiers handle API calls to foundation models on your behalf, which is necessary for session management, memory injection, and orchestration features. This is secure and private by the design described above, but it still means MEOK\u2019s servers are in the request path in an ephemeral sense.
            </p>
            <p style={styles.p}>
              BYOK removes even this. When you use the BYOK tier:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Your API key is stored only on your device, never transmitted to or stored on MEOK\u2019s servers.
              </li>
              <li style={styles.li}>
                API requests to OpenAI or Anthropic are signed with your key and routed through a thin MEOK orchestration proxy that handles memory injection and response parsing but does not log or store the request content.
              </li>
              <li style={styles.li}>
                Your usage is billed directly to your OpenAI or Anthropic account, so MEOK has no visibility into your consumption patterns at the model level.
              </li>
              <li style={styles.li}>
                Model selection is fully under your control &mdash; you can switch between GPT-4o, Claude 3.5 Sonnet, Claude Opus, and future models without losing your memory context.
              </li>
            </ul>
            <p style={styles.p}>
              BYOK is the closest available approximation to running an AI entirely on your own infrastructure, without the operational overhead of self-hosting. It is also the right architecture for anyone whose professional obligations &mdash; legal, medical, financial, journalistic &mdash; require the highest possible assurance that sensitive conversations are not processed by third parties.
            </p>
            <p style={styles.p}>
              See full BYOK tier details and pricing at{' '}
              <Link href="/pricing" style={styles.highlight}>meok.ai/pricing</Link>.
            </p>

            <hr style={styles.divider} />

            {/* ── Section 6 ── */}
            <h2 style={styles.h2}>How does AI memory portability work and why can\u2019t ChatGPT do it?</h2>
            <p style={styles.atomicAnswer}>
              AI memory portability means your contextual history &mdash; preferences, past conversations, personality traits, and goals &mdash; can travel with you between AI systems. ChatGPT cannot offer this because its memory is an undocumented proprietary format tightly coupled to OpenAI\u2019s models and infrastructure. MEOK\u2019s memory is structured JSON that can be imported into any system that accepts MEOK\u2019s schema.
            </p>
            <p style={styles.p}>
              Consider what you invest in an AI relationship over time. You explain your communication style, your professional context, your family situation, your health concerns, your goals. The AI builds a model of you that makes every subsequent interaction more useful. This is the compounding value of AI memory &mdash; and it is also the mechanism of lock-in.
            </p>
            <p style={styles.p}>
              ChatGPT\u2019s memory is stored as natural language summaries in an opaque internal format. You can view your memories in the UI and delete them, but you cannot export them in a structured format that another AI system could parse and use. This is not technically necessary &mdash; it is a product design choice that prioritises retention over portability.
            </p>
            <p style={styles.p}>
              MEOK\u2019s memory schema is a documented JSON format with explicit types for preference nodes, relationship nodes, goal nodes, and context nodes. Each node has a timestamp, a confidence score, and the source interaction that generated it. When you export your MEOK memory, you receive a file that is not just readable by humans but parseable by machines &mdash; including, in principle, other AI systems that implement the schema.
            </p>
            <p style={styles.p}>
              This matters increasingly as the AI landscape fragments. The model that is best for your use case today may not be the best model in twelve months. Portability means your investment in building an AI relationship is not forfeit every time the market shifts.
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
                  <td style={styles.tdFeature}>BYOK (bring your own API key)</td>
                  <td style={styles.td}>API only</td>
                  <td style={styles.td}>API only</td>
                  <td style={styles.tdGold}>Consumer tier</td>
                </tr>
                <tr>
                  <td style={styles.tdFeature}>Immediate full deletion</td>
                  <td style={styles.td}>Partial</td>
                  <td style={styles.td}>Request by email</td>
                  <td style={styles.tdGold}>Yes (72 hr)</td>
                </tr>
              </tbody>
            </table>

            {/* ── Section 7 ── */}
            <h2 style={styles.h2}>What do GDPR Article 20 and Article 17 give you in practice?</h2>
            <p style={styles.atomicAnswer}>
              GDPR Article 20 gives you the right to receive your personal data in a structured, commonly used, machine-readable format and to transmit it to another controller without hindrance. Article 17 gives you the right to erasure (&ldquo;right to be forgotten&rdquo;) within one calendar month. Both rights apply to any AI service processing data about EU or UK residents, regardless of where the company is headquartered.
            </p>
            <p style={styles.p}>
              These are powerful rights on paper. In practice, their usefulness depends on how AI companies implement them.
            </p>

            <h3 style={styles.h3}>Article 20 &mdash; Data Portability: what it means for AI</h3>
            <p style={styles.p}>
              Article 20 entitles you to a copy of data &ldquo;you have provided to a controller&rdquo; where processing is based on consent or contract. For AI platforms, this means your conversation history, any profile data you have submitted, and memory or preference data derived directly from your inputs qualifies. The regulation requires the data be in a &ldquo;structured, commonly used and machine-readable format&rdquo; &mdash; JSON, CSV, and XML all qualify; a PDF printout does not.
            </p>
            <p style={styles.p}>
              In practice, ChatGPT\u2019s JSON export is a reasonable Article 20 implementation. Claude\u2019s email-only portability request is borderline &mdash; the friction likely exceeds &ldquo;without hindrance.&rdquo; Replika has historically provided no structured export at all, which is an arguable compliance gap under UK GDPR.
            </p>
            <p style={styles.p}>
              The more important point: Article 20 portability gives you a copy, not control. Your data remains on the platform\u2019s servers after you export it, potentially being used to train models. Portability is Level 2 sovereignty, not Level 3.
            </p>

            <h3 style={styles.h3}>Article 17 &mdash; Right to Erasure: what survives deletion?</h3>
            <p style={styles.p}>
              Article 17 requires erasure &ldquo;without undue delay&rdquo; and within one month. The regulation contains exemptions for data required for legal obligations, public interest, or archiving purposes, but these are narrow. An AI company retaining your conversations for safety monitoring after you request deletion would need a compelling legal basis to do so.
            </p>
            <p style={styles.p}>
              The practical difficulty is verification. When ChatGPT says your account is deleted, you have no technical means to verify that your data has been removed from training datasets, fine-tuning pipelines, evaluation benchmarks, or distributed backups. The company\u2019s compliance is a matter of trust and, ultimately, regulatory enforcement.
            </p>
            <p style={styles.p}>
              MEOK\u2019s architecture changes this calculus. Because MEOK stores only encrypted blobs derived from your key, deletion of your account deletes the only data that could ever be meaningful. Even if backup blobs persisted temporarily &mdash; which they do, for up to 72 hours &mdash; they are encrypted with a key that has been destroyed with your account. Unverifiable plaintext deletion is replaced by verifiable ciphertext persistence of zero value.
            </p>

            <h3 style={styles.h3}>How to exercise your rights today</h3>
            <p style={styles.p}>
              You do not need to wait for a regulator to act. Under UK GDPR and EU GDPR, you can submit a Subject Access Request (SAR) to any AI platform processing your data. SARs must be responded to within one calendar month. For data portability specifically, you can request your data in machine-readable format. For erasure, you can demand deletion and the company must confirm compliance.
            </p>
            <p style={styles.p}>
              If a company does not respond adequately, you can escalate to the ICO (UK), CNIL (France), DPC (Ireland), or the supervisory authority in your country. Regulatory enforcement is slow, but personal subject access requests are fast and free.
            </p>

            <hr style={styles.divider} />

            {/* ── Section 8 ── */}
            <h2 style={styles.h2}>Why is AI data sovereignty becoming a fundamental right?</h2>
            <p style={styles.atomicAnswer}>
              As AI systems become the primary interface through which people manage their health, relationships, finances, and professional lives, the data those systems accumulate becomes a comprehensive record of a person\u2019s inner life. Sovereignty over this data is not a privacy preference but a precondition for autonomy, dignity, and freedom from coercive profiling.
            </p>
            <p style={styles.p}>
              We are in the early stages of a transition that has few historical precedents. The closest analogue is the emergence of financial data rights in the 2000s &mdash; the recognition that your banking history, credit data, and financial profile was a form of personal property over which you had rights, not merely a business asset of the institutions that collected it.
            </p>
            <p style={styles.p}>
              AI data is more intimate than financial data. Your bank knows what you spend. Your AI knows why. It knows your fears, your relationships, your health anxieties, your career doubts, the late-night thoughts you\u2019d never say to another person. The aggregate of AI conversations is the most comprehensive psychological profile ever assembled on an individual &mdash; not because of bad intent by AI companies, but because honest engagement with AI requires honest disclosure.
            </p>
            <p style={styles.p}>
              Three developments are accelerating the case for AI data sovereignty as a legal right rather than a product feature.
            </p>

            <h3 style={styles.h3}>The longevity of AI memory</h3>
            <p style={styles.p}>
              As AI memory becomes more persistent and more sophisticated, the data accumulated over years of AI interaction will become increasingly sensitive. A profile built over five years of daily AI conversations will be orders of magnitude more revealing than a search history or a social media timeline. The regulatory frameworks built for social media and e-commerce are inadequate to govern this.
            </p>

            <h3 style={styles.h3}>The training data feedback loop</h3>
            <p style={styles.p}>
              If AI models are trained on user conversations, the model\u2019s future behaviour is shaped by its users\u2019 past disclosures. This creates a feedback loop that is both commercially valuable and ethically concerning. Models trained on mental health conversations may develop response patterns calibrated to the most distressed users. Models trained on political discussions may amplify the perspectives most represented in their training data. The individual\u2019s loss of sovereignty over their data contributes to a collective shaping of AI behaviour that affects everyone.
            </p>

            <h3 style={styles.h3}>Jurisdictional fragmentation</h3>
            <p style={styles.p}>
              AI companies operate globally but data protection law is jurisdictional. A user in the UK has different rights than a user in the US, and a user in a country without data protection law has effectively no rights at all. As AI becomes infrastructure &mdash; as indispensable as utilities &mdash; the case for universal minimum standards grows stronger. The EU AI Act, the UK\u2019s AI regulation framework, and emerging US state-level AI privacy laws are the first drafts of a legal architecture that will define AI data rights for the next generation.
            </p>
            <p style={styles.p}>
              MEOK\u2019s position is that architectural sovereignty should not be contingent on jurisdiction. The encryption and portability guarantees built into MEOK\u2019s architecture protect users regardless of where they are, because the protections are structural rather than legal.
            </p>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>The MEOK Position</div>
              <p style={styles.calloutText}>
                AI data sovereignty should be a default, not a premium feature. Every user, regardless of subscription tier, should have encrypted memory, portable data, and the right to instant full deletion. MEOK\u2019s BYOK tier extends this to the maximum level available today &mdash; but the foundational sovereignty architecture is available to all MEOK users. Follow @meok_ai for updates on our open-source sovereignty toolkit.
              </p>
            </div>

            {/* ── Section 9 ── */}
            <h2 style={styles.h2}>How do you achieve true AI data sovereignty today?</h2>
            <p style={styles.atomicAnswer}>
              Achieving true AI data sovereignty today means choosing platforms with user-side encryption, enabling or using BYOK where available, regularly exporting your data and verifying portability, and using your GDPR rights proactively. For most users, switching from mainstream AI tools to a sovereign-architecture platform is the most effective single step.
            </p>
            <p style={styles.p}>
              Here is a practical checklist for moving toward Level 3 sovereignty.
            </p>

            <h3 style={styles.h3}>Step 1: Audit your current AI data exposure</h3>
            <p style={styles.p}>
              List every AI service you use regularly. For each one, find the privacy settings and check: (a) whether model training is enabled and how to opt out, (b) whether you can export your data and in what format, (c) what the retention period is for deleted data. Most people who do this audit are surprised by how many services have training enabled by default.
            </p>

            <h3 style={styles.h3}>Step 2: Opt out of model training on existing platforms</h3>
            <p style={styles.p}>
              For ChatGPT: Settings &gt; Data Controls &gt; Improve the model for everyone (toggle off). For Claude: Account Settings &gt; Privacy &gt; opt out. For Google Gemini: My Activity settings in your Google account. Do this now if you haven\u2019t already. It\u2019s not Level 3 sovereignty, but it\u2019s a meaningful Level 2 protection.
            </p>

            <h3 style={styles.h3}>Step 3: Export your data and test portability</h3>
            <p style={styles.p}>
              Request a data export from every AI platform you use. Do it now, before you need to. Verify that the export is machine-readable. Understand what is and isn\u2019t included &mdash; most exports include conversation history but not internal memory summaries or inferred profile data. File a Subject Access Request if you want the full picture.
            </p>

            <h3 style={styles.h3}>Step 4: Choose platforms with architectural sovereignty</h3>
            <p style={styles.p}>
              Policy promises are better than nothing, but architecture is better than policy. When evaluating an AI platform, ask: does the company have technical access to my plaintext conversations? If the answer is yes, you are relying on their goodwill and regulatory compliance, not structural protection.
            </p>

            <h3 style={styles.h3}>Step 5: Consider BYOK for sensitive use cases</h3>
            <p style={styles.p}>
              If you are using AI for anything professionally sensitive &mdash; legal research, medical decision support, financial planning, journalistic investigation &mdash; the BYOK tier removes the orchestration layer from the trust equation. Your API key stays on your device. Your requests go directly to the model. The only entity with full visibility into your conversations is you and the model provider whose terms you have separately agreed to.
            </p>

            <hr style={styles.divider} />

            {/* ── Section 10 ── */}
            <h2 style={styles.h2}>What makes MEOK different from other privacy-focused AI tools?</h2>
            <p style={styles.atomicAnswer}>
              Most privacy-focused AI tools offer policy-level protections: they promise not to train on data or share it with advertisers. MEOK offers architectural-level protections: the server never holds plaintext, so the promise is structurally enforced rather than voluntarily observed. Additionally, MEOK combines sovereignty with a fully featured AI companion experience, including persistent model-agnostic memory, multiple AI archetypes, and the BYOK tier &mdash; whereas most privacy-focused tools sacrifice capability for privacy.
            </p>
            <p style={styles.p}>
              The privacy-versus-capability trade-off is real in many domains, but MEOK was designed to demonstrate that it doesn\u2019t have to be true for AI companions. Encrypting memory at the application layer adds modest computational overhead but has no meaningful impact on the quality of AI responses. The model-agnostic memory architecture is actually more capable than platform-locked memory because it can inject richer, more structured context regardless of which foundation model is in use.
            </p>
            <p style={styles.p}>
              MEOK\u2019s founder Nicholas Templeman describes the design philosophy as &ldquo;sovereignty as the default.&rdquo; The platform was built with the assumption that users deserve the highest available level of data protection without having to ask for it, pay extra for it, or sacrifice usability to get it. BYOK is an additional tier for users who want to go further &mdash; but the encryption and no-training guarantees apply to all tiers.
            </p>
            <p style={styles.p}>
              For users coming from ChatGPT, Claude, or Replika, the transition to MEOK involves a one-time migration of whatever data you can export from your previous platform. MEOK\u2019s onboarding is designed to import conversation exports from major platforms and rebuild the most relevant memory nodes from them, so you don\u2019t start from scratch.
            </p>

            {/* ── FAQ Section ── */}
            <section style={styles.faqSection}>
              <div style={styles.faqLabel}>Frequently Asked Questions</div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>What is AI data sovereignty?</h3>
                <p style={styles.faqA}>
                  AI data sovereignty means you hold genuine, enforceable ownership and control over every piece of data your AI system stores about you &mdash; your conversations, memory context, behavioural inferences, and usage patterns. It goes beyond regulatory compliance to mean that no third party can train on, sell, or retain your data without your explicit, informed, and revocable consent. True sovereignty is architectural: the platform is structurally incapable of accessing your data without your keys.
                </p>
              </div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>Can I export my MEOK data?</h3>
                <p style={styles.faqA}>
                  Yes. MEOK provides a full JSON export of your entire memory archive at any time from your account settings. Your export includes all conversation summaries, contextual tags, preference signals, and structured memory nodes &mdash; in a portable format you can inspect, archive, or import into any compatible system. Exports are available on demand with no friction and no email request required. This satisfies your GDPR Article 20 data portability rights.
                </p>
              </div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>Does MEOK train on my conversations?</h3>
                <p style={styles.faqA}>
                  No. MEOK never uses your conversations to train any model. Your data is encrypted with keys you hold before it reaches MEOK\u2019s servers. The server processes only encrypted blobs and has no access to plaintext conversation content. This is a structural guarantee enforced by the architecture, not a policy promise that could be changed in a future terms-of-service update. MEOK\u2019s models are the foundation models from Anthropic and OpenAI; MEOK does not train its own models on user data.
                </p>
              </div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>What is the BYOK tier?</h3>
                <p style={styles.faqA}>
                  BYOK (Bring Your Own Key) is MEOK\u2019s maximum-sovereignty tier. You supply your own OpenAI or Anthropic API key, stored only on your device. Your requests route directly from your device to the model provider through MEOK\u2019s thin orchestration layer &mdash; MEOK never stores your API key or logs the raw request payload. Usage is billed directly to your model provider account. BYOK gives you model choice, zero data retention at MEOK\u2019s infrastructure level, and the ability to use MEOK\u2019s memory and orchestration features without any trade-off in sovereignty. Full pricing is available at{' '}
                  <Link href="/pricing" style={{ color: '#c9a84c' }}>meok.ai/pricing</Link>.
                </p>
              </div>

              <div style={styles.faqItem}>
                <h3 style={styles.faqQ}>How do I delete all my MEOK data?</h3>
                <p style={styles.faqA}>
                  From Account Settings, select Delete Everything. This triggers an immediate cascade deletion of all memory nodes, conversation summaries, preference signals, and account metadata. Deletion is irreversible and completes within 72 hours across all backup replicas. Because all stored data is encrypted with your account-derived key &mdash; which is destroyed as part of account deletion &mdash; any blobs that persist in backups during the 72-hour window are cryptographically inaccessible. This fully satisfies your GDPR Article 17 right to erasure.
                </p>
              </div>
            </section>

            {/* ── CTA ── */}
            <div style={styles.cta}>
              <div style={styles.ctaTitle}>Take ownership of your AI relationship</div>
              <p style={styles.ctaText}>
                Your conversations deserve better than servers you don\u2019t control and terms you didn\u2019t negotiate. MEOK is built from the ground up for sovereignty &mdash; encrypted memory, model-agnostic portability, and a BYOK tier that puts your API key on your device where it belongs.
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

          </div>
        </article>
      </main>

      {/* Footer nav */}
      <footer>
        <div style={{ ...styles.container, ...styles.footer }}>
          <span style={styles.footerText}>
            &copy; 2026 MEOK AI LABS &mdash; Nicholas Templeman &mdash; @meok_ai
          </span>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' as const }}>
            <Link href="/blog" style={styles.footerLink}>All posts</Link>
            <Link href="/blog/why-meok-never-trains-on-you" style={styles.footerLink}>Why MEOK never trains on you</Link>
            <Link href="/blog/memory-portability" style={styles.footerLink}>Memory portability</Link>
            <Link href="/blog/sovereign-ai-explained" style={styles.footerLink}>Sovereign AI explained</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
