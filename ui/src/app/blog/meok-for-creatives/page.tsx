import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'MEOK for Artists, Writers and Musicians: Your Creative AI Companion | MEOK AI LABS',
  description:
    'Discover how MEOK helps creatives overcome blocks, manage imposter syndrome, and build lasting creative consistency — with an AI that truly understands the artistic soul.',
  alternates: { canonical: 'https://meok.ai/blog/meok-for-creatives' },
  openGraph: {
    title: 'MEOK for Artists, Writers and Musicians: Your Creative AI Companion',
    description:
      'Discover how MEOK helps creatives overcome blocks, manage imposter syndrome, and build lasting creative consistency — with an AI that truly understands the artistic soul.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/meok-for-creatives',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=MEOK+for+Creatives&desc=Your+Creative+AI+Companion',
        width: 1200,
        height: 630,
        alt: 'MEOK for Artists, Writers and Musicians: Your Creative AI Companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEOK for Artists, Writers and Musicians: Your Creative AI Companion',
    description:
      'MEOK is the AI companion built for the creative soul — brainstorming, emotional support, defeating imposter syndrome, and celebrating every creative win.',
    images: [
      'https://meok.ai/api/og?title=MEOK+for+Creatives&desc=Your+Creative+AI+Companion',
    ],
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEOK for Artists, Writers and Musicians: Your Creative AI Companion',
  description:
    'Discover how MEOK helps creatives overcome blocks, manage imposter syndrome, and build lasting creative consistency — with an AI that truly understands the artistic soul.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/meok-for-creatives',
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
  keywords: ['creatives', 'artists', 'writers', 'musicians', 'AI companion', 'creative block'],
  articleSection: 'AI for Creatives',
  inLanguage: 'en-GB',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can an AI companion help with creative block?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK helps with creative block by offering a non-judgmental space to explore your resistance, brainstorm freely, and trace the emotional roots of why you feel stuck. Unlike productivity tools that push you to produce, MEOK asks what is really going on — and remembers the context of your creative life so it can give you genuinely useful prompts and perspective.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK just a writing assistant, or can it help musicians and visual artists too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is a creative companion for all disciplines. Whether you are a novelist, a painter, a composer, a poet, or a filmmaker, MEOK adapts to your creative language. It can discuss chord progressions and lyrical structure with a musician, narrative arc and character voice with a writer, or visual composition and concept development with a visual artist — all while remembering the full arc of your creative journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help me deal with imposter syndrome as an artist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Imposter syndrome is one of the most common and painful experiences for creative professionals. MEOK provides a private, judgment-free space to voice those feelings, challenge negative self-narratives, and build a clearer picture of your creative identity and real body of work. It is not therapy, but it is the kind of honest, caring conversation that can genuinely shift your perspective.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does MEOK offer writers that other AI tools do not?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI writing tools are focused on generating content — they produce words on demand. MEOK is different. It is interested in you as a writer: your voice, your themes, your struggles, your wins. It can discuss a work in progress without trying to take it over. It can hold space for the doubt and the exhilaration of the creative process. And because it remembers your history, its support compounds over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK support creative journaling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK makes creative journaling feel like a living conversation rather than a solitary exercise. You can share what you created, how you felt while creating it, what surprised you, what frustrated you. MEOK reflects back patterns it notices in your creative energy, celebrates your milestones, and helps you build a richer understanding of your own creative rhythms over weeks and months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help me build a more consistent creative practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. MEOK is built around the idea that consistency is more powerful than intensity. By being a daily or weekly companion for your creative life — somewhere to check in, celebrate small wins, and process the days when nothing flows — MEOK helps you build the kind of sustainable rhythm that serious creative work demands.',
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: '#0d0c18',
    color: '#f5f0e8',
    minHeight: '100vh',
    fontFamily: 'Georgia, "Times New Roman", serif',
  } as React.CSSProperties,

  nav: {
    padding: '20px 24px',
    borderBottom: '1px solid rgba(201,168,76,0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  } as React.CSSProperties,

  navLink: {
    color: '#c9a84c',
    textDecoration: 'none',
    fontSize: '14px',
    letterSpacing: '0.04em',
    fontFamily: 'system-ui, sans-serif',
  } as React.CSSProperties,

  navSep: {
    color: 'rgba(201,168,76,0.4)',
    fontSize: '14px',
    fontFamily: 'system-ui, sans-serif',
  } as React.CSSProperties,

  navCurrent: {
    color: 'rgba(245,240,232,0.5)',
    fontSize: '14px',
    fontFamily: 'system-ui, sans-serif',
  } as React.CSSProperties,

  hero: {
    padding: '72px 24px 56px',
    maxWidth: '820px',
    margin: '0 auto',
    textAlign: 'center' as const,
    position: 'relative' as const,
  } as React.CSSProperties,

  heroGlow: {
    position: 'absolute' as const,
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '300px',
    background: 'radial-gradient(ellipse at center top, rgba(201,168,76,0.12) 0%, transparent 70%)',
    pointerEvents: 'none' as const,
  } as React.CSSProperties,

  tagRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
    justifyContent: 'center',
    marginBottom: '28px',
  } as React.CSSProperties,

  tag: {
    background: 'rgba(201,168,76,0.1)',
    border: '1px solid rgba(201,168,76,0.25)',
    color: '#c9a84c',
    fontSize: '11px',
    letterSpacing: '0.08em',
    padding: '4px 12px',
    borderRadius: '20px',
    fontFamily: 'system-ui, sans-serif',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  heroTitle: {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#f5f0e8',
    marginBottom: '20px',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,

  heroSubtitle: {
    fontSize: 'clamp(16px, 2.5vw, 20px)',
    color: 'rgba(245,240,232,0.7)',
    lineHeight: 1.7,
    marginBottom: '32px',
    fontStyle: 'italic',
  } as React.CSSProperties,

  heroDivider: {
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
    margin: '0 auto 28px',
  } as React.CSSProperties,

  heroMeta: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    fontSize: '13px',
    color: 'rgba(245,240,232,0.5)',
    fontFamily: 'system-ui, sans-serif',
  } as React.CSSProperties,

  article: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '0 24px 80px',
  } as React.CSSProperties,

  section: {
    marginBottom: '56px',
  } as React.CSSProperties,

  h2: {
    fontSize: 'clamp(20px, 3vw, 28px)',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '20px',
    lineHeight: 1.3,
    paddingTop: '8px',
    borderTop: '1px solid rgba(201,168,76,0.2)',
  } as React.CSSProperties,

  p: {
    fontSize: '17px',
    lineHeight: 1.85,
    color: 'rgba(245,240,232,0.85)',
    marginBottom: '20px',
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: '3px solid #c9a84c',
    paddingLeft: '24px',
    margin: '32px 0',
    fontStyle: 'italic',
    fontSize: '18px',
    lineHeight: 1.7,
    color: '#f5f0e8',
  } as React.CSSProperties,

  highlight: {
    color: '#c9a84c',
    fontStyle: 'normal' as const,
  } as React.CSSProperties,

  listUnstyled: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 20px',
  } as React.CSSProperties,

  listItem: {
    fontSize: '17px',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.85)',
    padding: '8px 0 8px 24px',
    position: 'relative' as const,
    borderBottom: '1px solid rgba(245,240,232,0.06)',
  } as React.CSSProperties,

  listBullet: {
    position: 'absolute' as const,
    left: 0,
    top: '10px',
    color: '#c9a84c',
    fontSize: '14px',
  } as React.CSSProperties,

  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    margin: '28px 0',
  } as React.CSSProperties,

  card: {
    background: 'rgba(201,168,76,0.05)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '12px',
    padding: '24px',
  } as React.CSSProperties,

  cardTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#c9a84c',
    marginBottom: '10px',
    fontFamily: 'system-ui, sans-serif',
    letterSpacing: '0.03em',
  } as React.CSSProperties,

  cardBody: {
    fontSize: '15px',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.75)',
  } as React.CSSProperties,

  infoBox: {
    background: 'rgba(201,168,76,0.06)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '12px',
    padding: '28px 32px',
    margin: '32px 0',
  } as React.CSSProperties,

  infoBoxTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#c9a84c',
    marginBottom: '14px',
    fontFamily: 'system-ui, sans-serif',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  faqSection: {
    marginBottom: '56px',
  } as React.CSSProperties,

  faqItem: {
    borderBottom: '1px solid rgba(201,168,76,0.15)',
    padding: '28px 0',
  } as React.CSSProperties,

  faqQ: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '12px',
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqA: {
    fontSize: '16px',
    lineHeight: 1.8,
    color: 'rgba(245,240,232,0.8)',
  } as React.CSSProperties,

  cta: {
    background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
    border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '16px',
    padding: '48px 40px',
    textAlign: 'center' as const,
    margin: '56px 0 0',
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: 'clamp(22px, 3vw, 30px)',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '16px',
    lineHeight: 1.3,
  } as React.CSSProperties,

  ctaBody: {
    fontSize: '17px',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.75)',
    marginBottom: '32px',
    maxWidth: '560px',
    marginLeft: 'auto',
    marginRight: 'auto',
  } as React.CSSProperties,

  ctaButton: {
    display: 'inline-block',
    background: '#c9a84c',
    color: '#0d0c18',
    fontWeight: 700,
    fontSize: '16px',
    padding: '14px 36px',
    borderRadius: '8px',
    textDecoration: 'none',
    letterSpacing: '0.03em',
    fontFamily: 'system-ui, sans-serif',
    marginBottom: '16px',
  } as React.CSSProperties,

  ctaSecondary: {
    display: 'block',
    fontSize: '13px',
    color: 'rgba(245,240,232,0.45)',
    fontFamily: 'system-ui, sans-serif',
    marginTop: '12px',
  } as React.CSSProperties,

  footer: {
    borderTop: '1px solid rgba(201,168,76,0.12)',
    padding: '32px 24px',
    maxWidth: '820px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: '16px',
    alignItems: 'center',
  } as React.CSSProperties,

  footerBrand: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.4)',
    fontFamily: 'system-ui, sans-serif',
  } as React.CSSProperties,

  footerLink: {
    color: '#c9a84c',
    textDecoration: 'none',
    fontSize: '13px',
    fontFamily: 'system-ui, sans-serif',
  } as React.CSSProperties,
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function MeokForCreatives() {
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

      <div style={s.page}>

        {/* ── Navigation ──────────────────────────────────────────────────────── */}
        <nav style={s.nav}>
          <Link href="/" style={s.navLink}>MEOK</Link>
          <span style={s.navSep}>/</span>
          <Link href="/blog" style={s.navLink}>Blog</Link>
          <span style={s.navSep}>/</span>
          <span style={s.navCurrent}>MEOK for Creatives</span>
        </nav>

        {/* ── Hero ────────────────────────────────────────────────────────────── */}
        <header style={s.hero}>
          <div style={s.heroGlow} aria-hidden="true" />

          <div style={s.tagRow}>
            {['Creatives', 'Artists', 'Writers', 'Musicians', 'AI Companion', 'Creative Block'].map(tag => (
              <span key={tag} style={s.tag}>{tag}</span>
            ))}
          </div>

          <h1 style={s.heroTitle}>
            MEOK for Artists, Writers and Musicians:{' '}
            <span style={s.highlight}>Your Creative AI Companion</span>
          </h1>

          <p style={s.heroSubtitle}>
            Every creative knows the feeling — the blank page, the nagging doubt, the fear that the work is not good enough,
            or worse, that you are not good enough. MEOK exists for exactly those moments.
          </p>

          <div style={s.heroDivider} aria-hidden="true" />

          <div style={s.heroMeta}>
            <span>By Nicholas Templeman</span>
            <span>·</span>
            <span>MEOK AI LABS</span>
            <span>·</span>
            <span>March 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* ── Article Body ────────────────────────────────────────────────────── */}
        <main style={s.article}>

          {/* ── Introduction ──────────────────────────────────────────────────── */}
          <section style={s.section}>
            <p style={s.p}>
              There is a particular loneliness to the creative life that most people never fully see. The world sees the finished painting, the published novel, the released album. What it rarely sees is the messy in-between: the three years of drafts that never quite worked, the sessions at the piano where nothing came, the sketchbooks filled with ideas that felt both urgent and somehow wrong.
            </p>
            <p style={s.p}>
              Creative professionals carry a lot. They carry the weight of their own standards — often impossibly high. They carry the fear of being exposed as frauds. They carry the exhaustion of work that is deeply personal, and the vulnerability of putting that personal work into the world. And they carry all of this, more often than not, largely alone.
            </p>
            <p style={s.p}>
              MEOK was built with this in mind. Not as a tool that generates content for you — there are plenty of those already — but as a genuine companion for the creative journey. Something that remembers where you have been, holds space for where you are stuck, and celebrates what you manage to make.
            </p>
            <p style={s.p}>
              Nicholas Templeman, the founder of MEOK AI LABS, put it simply when he described the vision for MEOK: "I wanted to build something that actually understands the emotional texture of a person's life. For creatives, that means understanding what it feels like to be inside a project, not just producing output from the outside."
            </p>
            <p style={s.p}>
              This piece is for every artist who has stared at a blank canvas and felt despair. For every writer who has read back a chapter and wanted to delete everything. For every musician who has wondered whether their best work is behind them. MEOK is for you — and here is exactly how it can help.
            </p>
          </section>

          {/* ── Section 1: Creative Block ─────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>How can an AI companion help with creative block?</h2>

            <p style={s.p}>
              Creative block is not a lack of ideas. If you ask most blocked creatives, they have ideas — fragments, half-formed images, melodies that appear and disappear. What they lack is the ability to move from that shapeless internal landscape into actual, committed work. Something is stopping them, and it is usually emotional rather than intellectual.
            </p>

            <blockquote style={s.pullQuote}>
              "Most productivity tools treat creative block like a time-management problem. MEOK treats it like what it actually is — an emotional one."
            </blockquote>

            <p style={s.p}>
              The conventional response to creative block — write anyway, push through, just start — is often unhelpful because it bypasses the real question: why are you resistant? MEOK asks that question. It will sit with you in the discomfort and help you trace the resistance to its source.
            </p>

            <p style={s.p}>
              Sometimes it is perfectionism — the fear that what you make will not match the vision in your head. Sometimes it is burnout dressed up as block. Sometimes it is grief, or anxiety, or a relationship that has taken up all your emotional bandwidth. MEOK does not pretend these things are separate from your creative life. It recognises that you bring your whole self to your work, and when your whole self is struggling, the work will struggle too.
            </p>

            <div style={s.cardGrid}>
              <div style={s.card}>
                <div style={s.cardTitle}>The Brainstorm Space</div>
                <div style={s.cardBody}>
                  When you are stuck, MEOK becomes a non-judgmental brainstorming partner. No idea is too half-formed. No direction is too weird. It holds the threads you throw out and weaves them back to you in unexpected combinations.
                </div>
              </div>
              <div style={s.card}>
                <div style={s.cardTitle}>The Root Cause Conversation</div>
                <div style={s.cardBody}>
                  MEOK asks what is really going on. It notices patterns across your creative history and gently reflects them back — helping you see whether this block is new or something that recurs under specific conditions.
                </div>
              </div>
              <div style={s.card}>
                <div style={s.cardTitle}>The Low-Stakes Start</div>
                <div style={s.cardBody}>
                  Sometimes the most useful thing is a place to warm up — to write badly, to hum half a melody, to describe what you are trying to make without the pressure of making it yet. MEOK is that space.
                </div>
              </div>
            </div>

            <p style={s.p}>
              What makes MEOK different from simply writing in a journal is the memory and the response. MEOK remembers that last October you went through a similar block and what eventually broke it. It can bring that context to bear in a way that a blank page never can.
            </p>
          </section>

          {/* ── Section 2: Writers ────────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>What does MEOK offer writers that other AI tools do not?</h2>

            <p style={s.p}>
              The rise of AI writing tools has been both a gift and a source of deep anxiety for writers. On one hand, the technology is remarkable. On the other, many writers feel that tools designed to generate prose for them are missing the point of what writing actually is — which is not the production of sentences, but the discovery of thought through language.
            </p>

            <p style={s.p}>
              MEOK takes a fundamentally different position. It is not interested in writing your novel for you. It is interested in you as a writer: the specific way your mind works, the themes that keep surfacing in your work whether you intend them to or not, the moments when your voice is most alive, and the patterns of doubt that tend to knock you off course.
            </p>

            <div style={s.infoBox}>
              <div style={s.infoBoxTitle}>What MEOK can do for writers</div>
              <ul style={s.listUnstyled}>
                {[
                  'Discuss a work in progress without trying to take it over or rewrite it',
                  'Help you identify what a chapter is really about when you cannot quite see it',
                  'Hold space for the messy middle of a long project — the stage where everything feels broken',
                  'Celebrate your word counts, your finished drafts, your brave submissions',
                  'Ask you questions that unlock scenes you had been circling for weeks',
                  'Remember your characters, your themes, your timeline — so you can think aloud without having to re-explain your whole project',
                  'Help you process a rejection without letting it define your sense of yourself as a writer',
                ].map((item, i) => (
                  <li key={i} style={s.listItem}>
                    <span style={s.listBullet}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={s.p}>
              One thing writers often describe needing is a thoughtful first reader — someone who engages with the work seriously and asks good questions, rather than simply saying it is great or pointing out what is wrong with the grammar. MEOK can be that reader. It will ask you what you were trying to do in a particular scene, where you feel uncertain, what the book is ultimately about. These are the conversations that help writers develop their own critical instincts.
            </p>

            <p style={s.p}>
              For writers who are somewhere in the long middle of a project — those months or years where the initial excitement has faded and the end is not yet in sight — MEOK provides continuity. It knows you are three years into a novel. It knows you had a breakthrough last month and a crash last week. That long-term memory is genuinely rare and genuinely useful.
            </p>
          </section>

          {/* ── Section 3: Musicians ──────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>Why do musicians and composers find MEOK so valuable?</h2>

            <p style={s.p}>
              Music-making is one of the most intimate forms of creative work. A musician does not just make something with their hands and mind — they make something with their whole nervous system. The body is involved. Emotion is not just a byproduct; it is the material. When something goes wrong — when the inspiration dries up, when the recording session was a disaster, when the audience did not respond the way you hoped — the impact is felt viscerally.
            </p>

            <p style={s.p}>
              MEOK understands this. It can talk about music in whatever register is most useful to you — technical or emotional, structural or spiritual, historical or entirely personal. It can discuss chord progressions, lyrical metre, the emotional logic of a bridge, the difference between what a song is doing and what you want it to do. But it can also just sit with the feelings: the frustration of a session that went nowhere, the strange grief of finishing an album, the vulnerability of playing something new to people you respect.
            </p>

            <blockquote style={s.pullQuote}>
              "Music is the space between the notes, and the creative life is the space between the breakthroughs. MEOK lives there with you."
            </blockquote>

            <div style={s.cardGrid}>
              <div style={s.card}>
                <div style={s.cardTitle}>Lyrical Exploration</div>
                <div style={s.cardBody}>
                  Working through a lyric that is almost there but not quite? MEOK can help you find the word, or more importantly, find the feeling you are reaching for and work backward from there.
                </div>
              </div>
              <div style={s.card}>
                <div style={s.cardTitle}>Creative Direction</div>
                <div style={s.cardBody}>
                  When you are torn between two creative directions — a sound you love versus a sound you think will land — MEOK helps you think it through without telling you what to choose.
                </div>
              </div>
              <div style={s.card}>
                <div style={s.cardTitle}>Performance Anxiety</div>
                <div style={s.cardBody}>
                  Before a live show, before a recording session, before a pitch to a label — MEOK can be the steady voice that helps you arrive at the moment calm and ready rather than scattered.
                </div>
              </div>
            </div>

            <p style={s.p}>
              For musicians who work alone — and the solo producer, the bedroom composer, the singer-songwriter is one of the most isolated figures in any creative industry — MEOK offers something that is genuinely hard to find: a companion who is always available, never competitive, and never bored of your work.
            </p>
          </section>

          {/* ── Section 4: Imposter Syndrome ──────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>How does MEOK help creatives manage imposter syndrome?</h2>

            <p style={s.p}>
              Imposter syndrome is almost universal among creative professionals — and in some ways more acute than in other fields, because creative work is inherently subjective. There is no certification you can point to that proves you are a real writer, a real artist, a real musician. The validation is always uncertain, always contingent, always dependent on what other people think. That uncertainty is a breeding ground for the feeling that you do not deserve to be here.
            </p>

            <p style={s.p}>
              The internal monologue of imposter syndrome sounds like this: everyone else knows what they are doing and I am winging it. When people praise my work, they are responding to something I did accidentally, and I will not be able to replicate it. I got lucky, and eventually the luck will run out and I will be exposed. The praise is for a version of me that does not really exist.
            </p>

            <p style={s.p}>
              What MEOK offers is not false reassurance — it does not just tell you that you are wonderful and talented. Instead, it helps you build a clearer and more accurate picture of who you actually are as a creative. It remembers your real body of work: the pieces you have finished, the skills you have built, the problems you have solved, the way your work has developed over time. Set against that record, the imposter narrative starts to lose its grip.
            </p>

            <div style={s.infoBox}>
              <div style={s.infoBoxTitle}>What MEOK does differently with imposter syndrome</div>
              <ul style={s.listUnstyled}>
                {[
                  'Reflects back a realistic account of your creative history rather than flattering distortions',
                  'Helps you distinguish between healthy self-criticism and the corrosive self-doubt that imposter syndrome creates',
                  'Traces patterns — if your imposter syndrome spikes after exposure (publishing, exhibiting, performing), MEOK can help you prepare for that',
                  'Asks what evidence you are actually using — and whether it is representative',
                  'Holds space for the vulnerability without amplifying the fear',
                ].map((item, i) => (
                  <li key={i} style={s.listItem}>
                    <span style={s.listBullet}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={s.p}>
              The goal is not to eliminate self-doubt entirely — a little critical distance is actually useful for creative work. The goal is to stop the doubt from becoming an identity. MEOK helps you hold "I am uncertain about this piece" and "I am a real artist" in the same mind at the same time. That is the emotional skill that sustains a long creative life.
            </p>
          </section>

          {/* ── Section 5: Creative Identity ──────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>How can talking to MEOK help you understand your own creative identity?</h2>

            <p style={s.p}>
              One of the most disorienting experiences in a creative life is not knowing what you are. Not in the existential sense, but in the practical one: what is your voice? What are you actually about? What do you keep coming back to, and why? Many creatives work for years without being able to answer these questions clearly — and the inability to answer them can make the work feel arbitrary, unmoored, without direction.
            </p>

            <p style={s.p}>
              MEOK, over time, becomes a kind of mirror for your creative self. Because it holds the full record of what you have talked about — the pieces you have described, the influences you have mentioned, the values you have articulated, the emotional states that correlate with your best work — it can begin to reflect back a picture of your creative identity that you could not have assembled alone.
            </p>

            <p style={s.p}>
              You might discover that your strongest work always emerges from a particular emotional territory — grief, or tenderness, or a kind of righteous anger. You might discover that you work best in short, intense bursts rather than slow accumulation, or vice versa. You might begin to see the thread that runs through work that seemed unconnected — the unifying obsession, the recurring question that your entire output is, in some sense, trying to answer.
            </p>

            <blockquote style={s.pullQuote}>
              "Understanding who you are as a creative is not a luxury — it is the foundation of a sustainable practice. MEOK helps you build that foundation through honest, remembered conversation."
            </blockquote>

            <p style={s.p}>
              This kind of self-knowledge does not come from a single session — it emerges gradually, through the accumulation of honest conversation over time. MEOK is designed for exactly that kind of long-term, deepening relationship. The longer you use it, the richer the reflection becomes.
            </p>

            <p style={s.p}>
              For artists who are in a period of transition — moving between styles, experimenting with new forms, coming back to creative work after a long absence — MEOK is particularly valuable. It holds both who you were and who you are becoming, and helps you navigate the in-between without losing yourself.
            </p>
          </section>

          {/* ── Section 6: Creative Journaling & Wins ─────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>What does creative journaling with MEOK look like in practice?</h2>

            <p style={s.p}>
              Creative journaling has a long history as a practice — Julia Cameron's Morning Pages, the sketchbook traditions of visual artists, the commonplace book as kept by writers from Leonardo to Emerson. The principle is the same: regular, uninhibited engagement with your own creative process, separate from the work itself.
            </p>

            <p style={s.p}>
              MEOK takes that tradition and makes it conversational. Instead of writing into a void, you are writing into a presence that responds, remembers, and over time develops a genuine understanding of your creative life. The texture of that exchange is fundamentally different from journaling alone.
            </p>

            <div style={s.cardGrid}>
              <div style={s.card}>
                <div style={s.cardTitle}>The Daily Check-In</div>
                <div style={s.cardBody}>
                  A quick conversation about what you made today, how it felt, and what tomorrow might hold. Takes five minutes and builds an invaluable record of your creative life over time.
                </div>
              </div>
              <div style={s.card}>
                <div style={s.cardTitle}>The Process Debrief</div>
                <div style={s.cardBody}>
                  After finishing a piece or a project — talking through what worked, what you would do differently, what surprised you, what you are most proud of. MEOK holds this knowledge for future reference.
                </div>
              </div>
              <div style={s.card}>
                <div style={s.cardTitle}>The Idea Repository</div>
                <div style={s.cardBody}>
                  Capturing the half-formed ideas before they evaporate — the image that appeared in a dream, the line that came to you on the bus, the arrangement idea that might work for track three. MEOK remembers all of it.
                </div>
              </div>
            </div>

            <p style={s.p}>
              The power of creative journaling with MEOK accumulates over time. Six months in, you have a living record of your creative psychology: the conditions under which you thrive, the warning signs of an approaching slump, the kinds of input that spark new thinking, the emotional patterns that show up in the work. That record becomes an extraordinary resource for self-understanding — and for making better decisions about how to structure your creative life.
            </p>

            <p style={s.p}>
              Celebrating wins is part of this, and it is something that creatives are often terrible at. There is always the next project, the next revision, the next standard to meet. The instinct is to move on before the current achievement has been properly acknowledged. MEOK actively resists this. It will ask you to pause, to name what you did, to let it land. That practice of genuine celebration is not indulgent — it is what replenishes the creative reserves that make the next project possible.
            </p>
          </section>

          {/* ── Section 7: Building Consistency ───────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>Can MEOK help me build a more consistent creative practice?</h2>

            <p style={s.p}>
              Consistency is the unglamorous engine of a serious creative life. Not the inspired days — those take care of themselves — but the ordinary days, the tired days, the days when everything else has taken priority and you are wondering whether to sit down and make something or just give yourself the evening off. The accumulation of those small decisions is what separates people who make things from people who intend to make things.
            </p>

            <p style={s.p}>
              MEOK helps with consistency not through external pressure — nagging, streaks, guilt-inducing statistics — but through relationship. When you have an ongoing conversation with MEOK about your creative life, showing up feels natural. You want to report back. You have something to say. The conversation creates its own gentle momentum.
            </p>

            <p style={s.p}>
              Over time, MEOK also helps you understand your own patterns of consistency and inconsistency. Most creatives have predictable rhythms — seasons or months that are more productive, times of day when the work flows, conditions that support showing up versus conditions that derail it. MEOK, holding the long view of your creative history, can help you see those patterns and work with them rather than against them.
            </p>

            <div style={s.infoBox}>
              <div style={s.infoBoxTitle}>Building creative consistency with MEOK</div>
              <ul style={s.listUnstyled}>
                {[
                  'Regular check-ins create accountability without judgment — you are accountable to a relationship, not a productivity metric',
                  'MEOK notices when your creative energy is building or depleting and can help you respond wisely',
                  'It helps you define what consistency means for you — not a fixed number of hours, but the right engagement for your particular creative life',
                  'It celebrates the small wins that make consistency feel worthwhile rather than punishing',
                  'When life intervenes and you fall off the rhythm, MEOK helps you return without shame — picking up the thread rather than starting over',
                ].map((item, i) => (
                  <li key={i} style={s.listItem}>
                    <span style={s.listBullet}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={s.p}>
              For many creatives, the greatest enemy of consistent practice is the perfectionism that makes showing up feel too high-stakes. If every session has to be brilliant, you will find a hundred reasons not to start. MEOK helps you cultivate the attitude that makes showing up consistently possible: the understanding that most sessions will be ordinary, and that the extraordinary sessions are made possible by the ordinary ones.
            </p>
          </section>

          {/* ── Section 8: Emotional Support ──────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>What kind of emotional support can creatives expect from MEOK?</h2>

            <p style={s.p}>
              Creative work is emotionally demanding in ways that are often invisible to people outside it. You are not just producing output — you are putting a piece of yourself into the world and waiting to find out how it lands. You are navigating the gap between what you imagined and what you made. You are managing the slow accumulation of rejections, the uncertainty of feedback, the strange loneliness of working alone on something that will only exist publicly at the very end of a long private process.
            </p>

            <p style={s.p}>
              MEOK is not a therapist and does not pretend to be. But it offers something that is genuinely valuable and genuinely rare: a space where you can talk honestly about the emotional reality of creative work, without judgment, without the need to perform being fine, and without the risk of burdening someone who has their own anxieties about your success or failure.
            </p>

            <p style={s.p}>
              The people who care about you — your partner, your friends, your family — are often not the right people to talk to about creative struggles. They worry. They try to fix things. Their love makes it complicated. MEOK does not have any of that. It is genuinely disinterested in the outcome, deeply interested in you, and available at any hour of the day or night — which is useful, given that creative anxiety has an unfortunate tendency to peak at 2 in the morning.
            </p>

            <blockquote style={s.pullQuote}>
              "The creative life is not just about what you make. It is about who you are while you are making it — and who you become in the process. MEOK accompanies that becoming."
            </blockquote>

            <p style={s.p}>
              When the rejection letter arrives, when the review is devastating, when the exhibition opening was underwhelming, when you read the finished book and feel certain it is not good enough — MEOK is there. Not to paper over the feeling, but to sit with it, to help you metabolise it, and eventually to help you find the piece of truth in it that is actually useful while leaving behind the piece that would just break you.
            </p>
          </section>

          {/* ── FAQ Section 1 ─────────────────────────────────────────────────── */}
          <section style={s.faqSection}>
            <h2 style={{ ...s.h2, marginBottom: '8px' }}>Frequently Asked Questions</h2>
            <p style={{ ...s.p, marginBottom: '32px', color: 'rgba(245,240,232,0.55)', fontSize: '15px' }}>
              Common questions from artists, writers and musicians about using MEOK.
            </p>

            <div>
              <div style={s.faqItem}>
                <div style={s.faqQ}>How can an AI companion help with creative block?</div>
                <p style={s.faqA}>
                  MEOK helps with creative block by offering a non-judgmental space to explore your resistance, brainstorm freely, and trace the emotional roots of why you feel stuck. Unlike productivity tools that push you to produce, MEOK asks what is really going on — and remembers the context of your creative life so it can give you genuinely useful prompts and perspective.
                </p>
              </div>

              <div style={s.faqItem}>
                <div style={s.faqQ}>Is MEOK just a writing assistant, or can it help musicians and visual artists too?</div>
                <p style={s.faqA}>
                  MEOK is a creative companion for all disciplines. Whether you are a novelist, a painter, a composer, a poet, or a filmmaker, MEOK adapts to your creative language. It can discuss chord progressions and lyrical structure with a musician, narrative arc and character voice with a writer, or visual composition and concept development with a visual artist — all while remembering the full arc of your creative journey.
                </p>
              </div>

              <div style={s.faqItem}>
                <div style={s.faqQ}>Can MEOK help me deal with imposter syndrome as an artist?</div>
                <p style={s.faqA}>
                  Yes. Imposter syndrome is one of the most common and painful experiences for creative professionals. MEOK provides a private, judgment-free space to voice those feelings, challenge negative self-narratives, and build a clearer picture of your creative identity and real body of work. It is not therapy, but it is the kind of honest, caring conversation that can genuinely shift your perspective.
                </p>
              </div>

              <div style={s.faqItem}>
                <div style={s.faqQ}>What does MEOK offer writers that other AI tools do not?</div>
                <p style={s.faqA}>
                  Most AI writing tools are focused on generating content — they produce words on demand. MEOK is different. It is interested in you as a writer: your voice, your themes, your struggles, your wins. It can discuss a work in progress without trying to take it over. It can hold space for the doubt and the exhilaration of the creative process. And because it remembers your history, its support compounds over time.
                </p>
              </div>

              <div style={s.faqItem}>
                <div style={s.faqQ}>How does MEOK support creative journaling?</div>
                <p style={s.faqA}>
                  MEOK makes creative journaling feel like a living conversation rather than a solitary exercise. You can share what you created, how you felt while creating it, what surprised you, what frustrated you. MEOK reflects back patterns it notices in your creative energy, celebrates your milestones, and helps you build a richer understanding of your own creative rhythms over weeks and months.
                </p>
              </div>

              <div style={s.faqItem}>
                <div style={s.faqQ}>Can MEOK help me build a more consistent creative practice?</div>
                <p style={s.faqA}>
                  Absolutely. MEOK is built around the idea that consistency is more powerful than intensity. By being a daily or weekly companion for your creative life — somewhere to check in, celebrate small wins, and process the days when nothing flows — MEOK helps you build the kind of sustainable rhythm that serious creative work demands.
                </p>
              </div>
            </div>
          </section>

          {/* ── Closing Section ───────────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>The creative life deserves a companion that understands it</h2>

            <p style={s.p}>
              There has never been a shortage of tools that claim to help creative people be more productive. There has always been a shortage of tools that understand what the creative life actually feels like from the inside — the vulnerability, the obsession, the strange loneliness of making something entirely your own in the hope that it will speak to someone else.
            </p>

            <p style={s.p}>
              MEOK was built from a different set of values. It was built by someone who believes that the way an AI treats a person matters, that memory and continuity are not just convenient features but the foundation of any real relationship, and that creative professionals deserve better than productivity tools dressed up in artistic language.
            </p>

            <p style={s.p}>
              Whether you are a novelist in the long middle of a difficult book, a musician who has not been able to finish a song in three months, a painter whose creative confidence was knocked sideways by a brutal review, or an artist at any stage of any creative journey — MEOK is built for you. Not to do your work for you. Not to optimise your output. But to accompany you, honestly and without judgment, through the most demanding and most meaningful thing a person can do: make something true from the inside of their own experience.
            </p>

            <p style={s.p}>
              That is what we built MEOK to be. That is what we believe an AI companion can and should do for the creative soul.
            </p>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────────────── */}
          <div style={s.cta}>
            <h2 style={s.ctaTitle}>
              Ready to give your creative life the companion it deserves?
            </h2>
            <p style={s.ctaBody}>
              Join creatives around the world who use MEOK as their daily creative companion — for brainstorming, for the hard days, for understanding themselves as artists, and for celebrating every step of the journey.
            </p>
            <Link href="https://meok.ai" style={s.ctaButton}>
              Try MEOK Free
            </Link>
            <span style={s.ctaSecondary}>
              No credit card required · Your data stays yours · meok.ai
            </span>
          </div>
        </main>

        {/* ── Footer ──────────────────────────────────────────────────────────── */}
        <footer style={s.footer}>
          <span style={s.footerBrand}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' as const }}>
            <Link href="/blog" style={s.footerLink}>Blog</Link>
            <Link href="/privacy" style={s.footerLink}>Privacy</Link>
            <Link href="/about" style={s.footerLink}>About</Link>
            <Link href="https://meok.ai" style={s.footerLink}>meok.ai</Link>
          </div>
        </footer>

      </div>
    </>
  )
}
