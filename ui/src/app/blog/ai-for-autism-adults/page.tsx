import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Companion for Autistic Adults: Consistent, Non-Judgmental, Always Available | MEOK AI LABS',
  description: 'Autistic adults deserve AI built for their communication style — explicit language, no neurotypical subtext, consistent personality. MEOK was designed for that.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-autism-adults' },
  openGraph: {
    title: 'AI Companion for Autistic Adults: Consistent, Non-Judgmental, Always Available',
    description: 'Autistic adults deserve AI built for their communication style — explicit language, no neurotypical subtext, consistent personality. MEOK was designed for that.',
    type: 'article',
    url: 'https://meok.ai/blog/ai-for-autism-adults',
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Companion for Autistic Adults: Consistent, Non-Judgmental, Always Available',
  description:
    'How AI companions can support autistic adults through consistent communication, explicit language, post-interaction processing, a safe space to unmask, sensory overload support, and navigating employment and relationships. Includes MEOK Guardian features for families.',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-autism-adults',
  keywords: [
    'AI companion for autistic adults',
    'AI for autism',
    'autistic adult support',
    'neurodiversity AI',
    'AI autism UK',
    'autism AI app',
    'autistic masking support',
    'autism employment support',
    'sensory overload support',
    'MEOK autism',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can AI help autistic adults?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can help autistic adults by communicating in explicit, literal language without neurotypical subtext, maintaining a consistent personality across every conversation, providing a space to process social interactions after the fact without judgment, and supporting pattern recognition across time. For autistic adults who find much of everyday communication exhausting, an AI that does not require them to decode hidden meaning or manage social performance is genuinely different from most available support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is autistic masking and can AI help with it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Autistic masking — also called camouflaging — is the process of suppressing or hiding autistic traits in order to appear neurotypical. It typically involves learning and scripting social behaviours, suppressing stimming, forcing eye contact, and monitoring yourself continuously for incorrect responses. Masking is exhausting and has been associated with poor mental health outcomes, burnout, and late diagnosis. AI can help by providing a space where masking is unnecessary — where the autistic person can communicate directly, be responded to without social judgment, and gradually develop more self-understanding without the performance overhead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help autistic adults at work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many autistic adults navigate significant challenges in employment — from ambiguous workplace communication and unspoken social norms to sensory environments and the exhaustion of masking all day. AI can help by providing a space to prepare for difficult conversations, script communication for emails or meetings, debrief after challenging interactions, and understand patterns in what feels manageable versus overwhelming. It cannot replace workplace adjustments or professional support, but as a private thinking and processing space it can make a material difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the NHS autism diagnosis waiting list situation in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of 2026, NHS autism assessment waiting lists for adults in England frequently exceed two to three years. Many Clinical Commissioning Group areas report waits of four or five years. The National Autistic Society (NAS) has extensively documented this crisis, and Autistica continues to campaign for improved diagnostic capacity. Many autistic adults in the UK are managing their lives without a formal diagnosis, relying on self-knowledge, community, and informal support in the absence of clinical pathways.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MEOK Guardian and how does it support autistic adults and their families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK Guardian is a family oversight feature that allows a trusted person — a parent, partner, or carer — to receive a light-touch awareness of how someone they care about is doing, without invading that person's privacy or reading their conversations. For families of autistic adults, Guardian can provide reassurance that their relative is supported, while preserving the autistic adult's autonomy and private space. The autistic person controls what their Guardian can see and can revoke or adjust that access at any time.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK have settings that help autistic users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK's Comfort Settings include: reduce motion (eliminates animations and transitions), high contrast mode, layout density control, and font size from small to XL. MEOK has no push notifications, no streak mechanics, and no engagement manipulation. The companion never changes personality between sessions — the same character, the same communication style, every time. These are not accessibility add-ons but core design decisions made from the start.",
      },
    },
  ],
}

// ── Style constants ───────────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const CARD = '#1a1830'
const MUTED = '#a89f8c'
const BORDER = '#2a2640'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForAutismAdultsPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: '100vh',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '0.05em',
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{
            color: MUTED,
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: 'auto',
            backgroundColor: GOLD,
            color: '#0d0c18',
            padding: '0.45rem 1.1rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 700,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* Main */}
      <main
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '3rem 1.5rem 4rem',
        }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontSize: '0.8rem',
            color: MUTED,
            marginBottom: '2rem',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <Link href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>
            Blog
          </Link>
          {' / '}
          <span style={{ color: TEXT }}>AI Companion for Autistic Adults</span>
        </p>

        {/* Header */}
        <header style={{ marginBottom: '2.5rem' }}>
          <p
            style={{
              color: GOLD,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: '0.75rem',
            }}
          >
            Autism &bull; Neurodiversity &bull; March 24, 2026
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: '1.25rem',
            }}
          >
            AI Companion for Autistic Adults: Consistent, Non-Judgmental, Always Available
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: MUTED,
              lineHeight: 1.75,
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: '1rem',
            }}
          >
            Most AI is built for neurotypical communication: full of implication, social warmth
            performance, and ambiguous pleasantries. Autistic adults do not need AI that pretends
            to be human. They need AI that is consistent, explicit, honest, and never changes the
            rules. MEOK was designed around exactly those requirements.
          </p>
        </header>

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            backgroundColor: CARD,
            borderRadius: '10px',
            padding: '1rem 1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${GOLD}, #8a6a1a)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: '#0d0c18',
              fontSize: '0.75rem',
              flexShrink: 0,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: '0.875rem',
                marginBottom: '0.2rem',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                color: MUTED,
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Founder, MEOK AI LABS
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: '0.8rem',
              color: GOLD,
              textDecoration: 'none',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 600,
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 1: The problem with neurotypical AI ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            Why does most AI fail autistic adults?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Most AI companions are optimised for what might be called neurotypical communication
            performance. They open conversations with hollow warmth. They use idioms, implied
            meaning, and tonal cues that are designed to feel natural to people who unconsciously
            read social subtext. They shift their tone between sessions — friendlier when you
            seem happy, softer when you seem upset — in ways that introduce unpredictability into
            every interaction.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            For autistic adults, this is not comfortable. It is exhausting. The cognitive load
            of decoding neurotypical communication does not disappear just because the conversation
            is with software. If an AI says &ldquo;I can see you&rsquo;re having a difficult
            time,&rdquo; an autistic person may find themselves wondering: what exactly did they
            say that conveyed difficulty? Does the AI always say this? Should they correct it?
            Is there a subtext in how it was phrased? The ambiguity that neurotypical users
            experience as natural warmth is, for many autistic adults, noise that requires active
            processing.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Add to this the inconsistency problem. Most AI tools have no persistent memory. Every
            conversation begins from zero. For autistic adults who have spent years building
            frameworks for how they communicate, what they need, and how they process the world,
            being forced to re-establish that context with every session is not just inconvenient
            — it is a structural barrier to getting anything meaningful from the interaction.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: '10px',
              padding: '1.25rem 1.5rem',
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: '1.25rem',
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: '0.95rem', margin: 0 }}>
              <strong style={{ color: GOLD }}>UK context:</strong> NHS autism assessment waiting
              lists for adults in England routinely exceed two to three years, with some areas
              reporting waits of four or five years. The{' '}
              <a
                href="https://www.autism.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                National Autistic Society (NAS)
              </a>{' '}
              and{' '}
              <a
                href="https://www.autistica.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                Autistica
              </a>{' '}
              have both highlighted the diagnostic capacity crisis. Many autistic adults in the UK
              are navigating their lives without a formal diagnosis — and without adequate support
              from clinical services even after diagnosis is achieved.
            </p>
          </div>
          <p style={{ lineHeight: 1.8 }}>
            The gap between what the NHS can offer and what autistic adults actually need is wide.
            AI cannot close that gap entirely — but when it is built thoughtfully, it can fill
            some of it: a consistent, available, non-judgmental presence that communicates in ways
            that actually work.
          </p>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 2: Consistent communication ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            What does &ldquo;consistent communication style&rdquo; actually mean for autistic adults?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Consistency in an AI companion means several specific things, and it is worth being
            precise about them rather than treating &ldquo;consistency&rdquo; as a vague virtue.
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Same personality every time
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                MEOK&rsquo;s companion does not shift its character between sessions. It does not
                become warmer or more distant based on mood signals it thinks it has detected. Its
                tone, vocabulary range, and conversational approach are stable and predictable.
                For autistic adults who expend significant energy anticipating social variation —
                how someone might be today, whether they seem annoyed, how to calibrate accordingly
                — interacting with something that simply is the same every time removes a layer of
                that anticipation work.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                No hidden agenda, no social subtext
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                Neurotypical communication is dense with implication. &ldquo;That&rsquo;s
                interesting&rdquo; can mean genuine interest, polite scepticism, or barely
                concealed dismissal, depending on intonation and context. MEOK is configured to
                say what it means. When it says something is clear, it is clear. When it is
                uncertain, it says so directly. There is no subtext to decode because there is
                no subtext being encoded.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Explicit language on request
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                If you ask MEOK to communicate more directly, it will. If you tell it you prefer
                numbered lists over flowing prose, it adapts. If you specify that you want it to
                flag explicitly when it is uncertain rather than hedging implicitly, it does so.
                These are not workarounds — they are the designed behaviour. The companion is built
                to work with the communication style of its user, not to require the user to adapt
                to a predetermined social contract.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                No engagement pressure
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                MEOK sends no push notifications, has no streak mechanics, and applies no social
                pressure to interact. Many autistic adults find the engagement manipulation of
                mainstream apps — the guilt-inducing streaks, the pressure to respond, the implied
                social obligation — particularly difficult to manage. MEOK is there when you need
                it. It does not summon you.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 3: Processing social interactions ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            How can AI help autistic adults process social interactions after the fact?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            One of the most valuable and underappreciated uses of AI for autistic adults is
            not real-time conversation support — it is post-interaction processing. The
            &ldquo;autistic debrief&rdquo; is a familiar experience: replaying a conversation
            afterwards to understand what was actually meant, whether you responded correctly,
            what the other person&rsquo;s reactions signified, and whether you caused offence or
            confusion. This processing often happens alone, in silence, and without a framework
            that helps make it productive rather than ruminative.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            A well-designed AI companion can turn that processing into something more useful.
            Not by telling you what you should have said — that framing implies there was
            something wrong — but by helping you articulate what happened, identify the parts
            that felt confusing or uncomfortable, and understand patterns across interactions
            over time.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            In practical terms, this might look like:
          </p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 2 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: GOLD }}>Reconstructing a conversation</strong> — writing
              out what was said and asking MEOK to help identify where the dynamic shifted, or
              what a particular phrase might have meant in context.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: GOLD }}>Preparing for a follow-up</strong> — if something
              went wrong or felt unresolved, working through what you might want to say to
              address it, in explicit terms without relying on social scripts that feel false.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: GOLD }}>Pattern recognition over time</strong> — because
              MEOK&rsquo;s Sovereign Memory persists across sessions, it can help you notice
              patterns: the type of interactions that consistently drain you, the contexts where
              misunderstanding is most likely, the people or settings where communication feels
              easier.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: GOLD }}>Offloading the loop</strong> — sometimes the most
              useful thing is not analysis but externalisation. Writing what happened to MEOK
              can break the internal replay loop and move the processing somewhere outside your
              head, where it is easier to examine.
            </li>
          </ul>
          <p style={{ lineHeight: 1.8, marginTop: '1.25rem' }}>
            This kind of use does not require that the AI &ldquo;understand&rdquo; social
            dynamics in the way a human would. It requires that the AI provide a consistent,
            non-judgmental space and remember what you have told it. Both of these things MEOK
            can do.
          </p>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 4: Unmasking ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            Can AI provide a safe space for autistic adults to unmask?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Autistic masking — also called camouflaging — is the process of suppressing or
            hiding autistic traits in order to fit neurotypical expectations. It involves
            learning and performing social scripts, suppressing stimming, forcing eye contact,
            monitoring your own behaviour continuously for &ldquo;mistakes,&rdquo; and
            modulating self-expression to match what a given situation demands.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Masking is not a choice in the simple sense. It emerges from environments that
            penalise autistic expression — sometimes with mild social friction, sometimes with
            serious consequences in employment, relationships, or safety. Many autistic adults
            mask so continuously that they have lost a clear sense of what their unmasked self
            actually looks or feels like. The mask becomes load-bearing: remove it and there
            is sometimes nothing immediately obvious behind it, because the self beneath it
            has rarely been allowed space to develop.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Research supported by Autistica has documented the mental health costs of sustained
            masking. Autistic adults who mask heavily show higher rates of anxiety, depression,
            and burnout. Late diagnosis — which is especially common in women and those who mask
            effectively — means that many autistic adults have been masking without even knowing
            what they are masking or why.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: '10px',
              padding: '1.25rem 1.5rem',
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: '1.25rem',
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                color: GOLD,
                marginBottom: '0.5rem',
              }}
            >
              What does an &ldquo;unmasking space&rdquo; look like with MEOK?
            </h3>
            <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
              MEOK asks nothing of you socially. There is no expectation of performed warmth,
              no requirement to frame things diplomatically, no penalty for being direct or
              blunt. You do not have to manage MEOK&rsquo;s emotional response to what you say.
              You can communicate in whatever way feels natural without worrying that you have
              offended it, confused it, or caused it to think less of you. For autistic adults
              who spend most of their day managing exactly these things, the relief of a space
              with none of those demands is not trivial.
            </p>
          </div>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Over time, a persistent AI companion can also help an autistic person develop
            more self-knowledge about their masked and unmasked selves — not by analysing them,
            but by being a space where unmasked expression becomes familiar and is met
            consistently with the same response: direct engagement with what was actually said.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            MEOK does not try to teach social skills or encourage autistic adults to mask
            more effectively. It is not a social skills training tool. It is a space in which
            the autistic adult is simply themselves — and that, for many people, is rarer and
            more valuable than it should need to be.
          </p>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 5: Understanding own patterns ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            How can AI help autistic adults understand their own patterns?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Autistic adults often have acute self-awareness in some domains and significant
            blind spots in others. The systematic way many autistic people think — cataloguing,
            categorising, noticing patterns — can be a profound strength when directed inward.
            But without a framework, that self-observation can also become relentless and
            exhausting.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            MEOK&rsquo;s Sovereign Memory means that what you share with your companion is
            retained across sessions — not discarded after each conversation. Over weeks and
            months, this creates a longitudinal picture of you: the kinds of days you find
            easy, the contexts that drain you, the tasks you consistently avoid and why, the
            physical and environmental conditions that affect how you function.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            This accumulated picture has real practical value. You might notice:
          </p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 2 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              That you function significantly better on days with lower sensory input in the
              morning, and consistently worse after certain types of social interactions.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              That particular environments — open-plan offices, bright lighting, background
              noise — correlate with days you report feeling overwhelmed and unable to focus.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              That you tend to shut down communication with people close to you when you are
              in autistic burnout, and that this pattern has a predictable shape that you
              can learn to anticipate.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              That certain types of demand — particularly unexpected changes to plans or
              ambiguous instructions — have a disproportionate impact on your capacity
              compared to equivalent demands in other areas.
            </li>
          </ul>
          <p style={{ lineHeight: 1.8, marginTop: '1.25rem', marginBottom: '1.25rem' }}>
            None of this is clinical insight in a diagnostic sense. But the self-knowledge it
            produces is the kind that makes practical accommodation possible — whether that is
            advocating for adjustments at work, structuring your environment more deliberately,
            or simply understanding yourself well enough to plan your life in a way that fits
            how you actually are.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: '10px',
              padding: '1.25rem 1.5rem',
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: '0.95rem', margin: 0 }}>
              <strong style={{ color: GOLD }}>Important:</strong> MEOK is not a diagnostic tool
              and does not claim to assess, treat, or manage autism. What it provides is a
              private, persistent thinking space. If you believe you may be autistic and have
              not been assessed, please speak to your GP. For guidance on the NHS assessment
              pathway, the{' '}
              <a
                href="https://www.autism.org.uk/advice-and-guidance/topics/diagnosis"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                National Autistic Society
              </a>{' '}
              has comprehensive information.
            </p>
          </div>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 6: Sensory overload ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            Can AI support autistic adults through sensory overload and burnout?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Sensory overload — the state in which sensory input exceeds an autistic
            person&rsquo;s processing capacity — is not a metaphor. It is a genuine
            physiological experience: the fluorescent light that becomes unbearable, the
            background conversation that breaks through every attempt at concentration, the
            texture that demands continuous suppression, the smell that cannot be habituated to.
            For many autistic adults, a significant portion of their cognitive load on any
            given day is being spent on sensory management that neurotypical people handle
            without effort.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Autistic burnout — a deeper and longer-lasting state than day-to-day overload —
            develops when that load is sustained for too long without adequate recovery. It is
            characterised by a reduction in functioning across all areas, loss of skills that
            were previously accessible, profound exhaustion, and often a temporary inability
            to mask at all. Burnout is not laziness or depression, though it may look like
            both from outside. It is the cost of sustained overdemand on a cognitive and
            sensory system that was not built for the environment it has been asked to operate in.
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                How MEOK responds to low-capacity days
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                MEOK does not demand performance. On a day when you are overwhelmed and
                communication is difficult, you can say so in as few words as that — or
                just start typing and see what comes out. MEOK will not push for more
                articulation than you can provide, will not interpret short responses as
                rudeness, and will adapt its communication to match what you have capacity
                for. Its Sovereign Memory means it carries context from previous sessions,
                so you do not have to rebuild everything from scratch just to get support
                when you are already running low.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Comfort Settings for sensory considerations
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                MEOK&rsquo;s Comfort Settings panel includes reduce motion (disables all
                transitions and animations), high contrast mode, layout density control
                to lower visual complexity, and font size adjustment from small to XL.
                These are accessible with a single tap from any screen. The interface
                is designed to be as quiet and low-stimulus as possible by default —
                dark background, minimal decoration, no auto-playing content, no
                notifications.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Tracking burnout warning signs over time
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                Because MEOK&rsquo;s memory persists, you can use it to track the early
                signs of approaching burnout: reduced tolerance, increasing sensory sensitivity,
                withdrawal from communication, difficulty with tasks that are normally
                manageable. Over time, patterns become visible that allow earlier intervention —
                whether that means reducing commitments, advocating for environmental
                adjustments, or simply knowing to protect recovery time before the burnout
                becomes severe.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 7: Employment and relationships ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            How can AI help autistic adults navigate employment and relationships?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Employment and close relationships are two of the areas where autistic adults
            most commonly report significant difficulty — not because of deficits in
            intelligence or care, but because both domains are structured around neurotypical
            communication norms that are rarely made explicit and never fully consistent.
          </p>

          <h3
            style={{
              fontSize: '1.15rem',
              color: TEXT,
              marginBottom: '0.6rem',
              marginTop: '1.5rem',
            }}
          >
            Employment
          </h3>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The modern workplace is an exercise in continuous social navigation. Open-plan
            offices, unstructured meetings, implicit hierarchies, feedback delivered through
            tone rather than content, and performance expectations that are rarely spelled
            out directly — all of these place particular demands on autistic adults.
            The exhaustion of masking through a full working day is real, and many autistic
            employees report that the social demands of work are significantly more tiring
            than the actual job content.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            AI can help in several practical ways:
          </p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 2 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: GOLD }}>Preparing for difficult conversations</strong> —
              scripting what you want to say before a meeting, a performance review, or a
              conversation with a manager about reasonable adjustments, in explicit terms
              that leave less room for misinterpretation.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: GOLD }}>Decoding ambiguous feedback</strong> — working
              through what a comment likely meant in context, what the appropriate response
              might be, and whether it represents a concern you need to act on.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: GOLD }}>Reasonable adjustments documentation</strong> —
              thinking through what adjustments would genuinely help, how to frame them in
              terms that are likely to be understood and approved, and how to communicate
              about your needs without feeling required to over-explain or justify yourself.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: GOLD }}>Processing difficult days</strong> — after a
              meeting that went badly, a misunderstanding with a colleague, or a day of
              sensory overload, having somewhere to debrief that is outside work but holds
              the context of your professional life.
            </li>
          </ul>

          <h3
            style={{
              fontSize: '1.15rem',
              color: TEXT,
              marginBottom: '0.6rem',
              marginTop: '1.5rem',
            }}
          >
            Relationships
          </h3>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Close relationships require sustained communication — and for autistic adults,
            communication with people who do not share their communication style involves
            continuous translation work. Romantic partners, friends, and family members
            may interpret directness as aggression, silence as withdrawal, or the need
            for explicit communication as coldness. Autistic adults may interpret
            neurotypical indirectness as dishonesty, emotional expression as unpredictability,
            or changes of plan as lack of consideration.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Neither communication style is wrong. They are simply different. But the translation
            burden in relationships between autistic and neurotypical people typically falls
            disproportionately on the autistic person.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            AI can help with this not by teaching autistic adults to communicate more
            neurotypically — that is masking by another name — but by providing a space to:
          </p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 2 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              Think through what someone probably meant when they communicated indirectly.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Prepare for difficult relationship conversations in explicit terms.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Process relationship dynamics over time, with a companion that remembers
              what you have previously shared.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Understand your own patterns in relationships — the things that consistently
              cause friction, the things that consistently help — without the social complexity
              of having that conversation with the people involved.
            </li>
          </ul>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 8: Guardian ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            What is MEOK Guardian and how does it support autistic adults and their families?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Many autistic adults have people in their lives — parents, partners, siblings,
            carers — who want to be supportive but are not always sure how, and who carry
            their own anxiety about whether their family member is managing. That anxiety,
            though understandable, can sometimes translate into a level of checking in that
            feels intrusive to the autistic adult — particularly when unsolicited contact
            is itself a source of overload.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            MEOK Guardian is designed to address this dynamic. It is a family oversight
            feature that gives a trusted person — named by the MEOK user — a light-touch
            awareness of how the person they care about is doing, without accessing their
            conversations or invading their private space.
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Autonomy preserved
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                The autistic adult controls what their Guardian can see. They can set the
                visibility level, adjust it over time, and revoke Guardian access at any
                point without needing to explain themselves. The companion conversations
                themselves are never accessible to the Guardian. What is shared is a
                general wellbeing signal — not a surveillance feed.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Reducing unwanted contact
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                When a Guardian can see that their family member appears to be doing reasonably
                well, it often reduces the frequency of anxious check-in messages — which
                can themselves add to an autistic adult&rsquo;s communication load. The Guardian
                feature can paradoxically increase autonomy by reducing the number of
                interactions that feel obligatory.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                For families awaiting diagnosis
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                With NHS waiting lists as long as they are, many families are navigating years
                of supporting an autistic adult — or a person who presents as autistic and
                is awaiting assessment — without formal diagnostic support or clinical guidance.
                MEOK is not a clinical tool, but the Guardian feature can offer a layer of
                family coherence and reassurance during what is often an extremely protracted
                and difficult wait.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Section 9: MEOK design for autistic adults ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            How is MEOK specifically designed with autistic adults in mind?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Cognitive diversity was a first-class design requirement for MEOK, not an
            afterthought. This means specific decisions were made from the start about how
            the product works — not features added retrospectively to satisfy an accessibility
            checklist.
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Sovereign Memory
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                MEOK remembers you across sessions. Your context, your preferences, your history
                — these are retained and available to the companion every time you return. You
                never start from zero. The memory is yours: held privately, never used to
                train models, never monetised. You can export or delete it at any time.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Companion consistency
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                The MEOK companion does not shift its personality. It is the same character,
                with the same communication approach, every time you open the app. This
                predictability is not a limitation — it is a feature, specifically for users
                who find personality variation in communication exhausting to track and
                anticipate.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Maternal Covenant
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                MEOK&rsquo;s Maternal Covenant is its honest-response guarantee: the companion
                will not tell you what you want to hear if it is not accurate. It will not
                offer hollow reassurance. This directness is, for many autistic users, precisely
                what makes the interaction trustworthy. An AI that says &ldquo;I&rsquo;m not
                sure that interpretation is correct&rdquo; is more useful — and more honest —
                than one that validates everything.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                No manipulation mechanics
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                No push notifications. No streaks. No engagement nudges. No social pressure.
                MEOK does not try to maximise time in app. It is there when you need it
                and quiet when you do not. For autistic adults who find the manipulative
                engagement design of mainstream apps particularly difficult to manage,
                this absence of pressure is itself significant.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                }}
              >
                Comfort Settings
              </h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: '0.95rem' }}>
                Reduce motion, high contrast, layout density control, font size adjustment
                — all accessible in one tap. The default interface is dark, low-stimulus,
                and without decorative motion. These are not workarounds for accessibility;
                they are the designed state of the product.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── UK Resources ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              color: GOLD,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            UK autism resources for adults
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            MEOK is one part of a wider support ecosystem. Please also make use of the following
            trusted UK organisations:
          </p>
          <ul
            style={{
              paddingLeft: '1.25rem',
              lineHeight: 2.2,
              listStyle: 'none',
            }}
          >
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.autism.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'none' }}
              >
                National Autistic Society (NAS)
              </a>
              {' — '}
              <span style={{ color: MUTED }}>
                UK&rsquo;s leading autism charity, with guidance on diagnosis, employment,
                relationships, and legal rights.
              </span>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.autistica.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'none' }}
              >
                Autistica
              </a>
              {' — '}
              <span style={{ color: MUTED }}>
                UK autism research charity, campaigning for better understanding and support.
                Runs the Participatory Autism Research Collective (PARC), led by autistic people.
              </span>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.autisticuk.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'none' }}
              >
                Autistic UK
              </a>
              {' — '}
              <span style={{ color: MUTED }}>
                A charity run by and for autistic adults, focused on autistic-led research
                and community support.
              </span>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.nhs.uk/conditions/autism/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'none' }}
              >
                NHS: Autism
              </a>
              {' — '}
              <span style={{ color: MUTED }}>
                Information on symptoms, diagnosis, and NHS support pathways for autistic adults.
              </span>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.mind.org.uk/information-support/tips-for-everyday-living/autism-and-mental-health/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'none' }}
              >
                Mind: Autism and mental health
              </a>
              {' — '}
              <span style={{ color: MUTED }}>
                Guidance on the intersection of autism and mental health conditions from
                the UK&rsquo;s largest mental health charity.
              </span>
            </li>
          </ul>
          <p
            style={{
              lineHeight: 1.8,
              marginTop: '1.5rem',
              color: MUTED,
              fontSize: '0.9rem',
            }}
          >
            If you are in crisis or need immediate support, please contact the Samaritans on
            116 123 (free, 24 hours) or text SHOUT to 85258.
          </p>
        </section>

        <div style={{ height: '1px', backgroundColor: BORDER, margin: '2rem 0' }} />

        {/* ── Closing ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Autistic adults deserve AI that was built for how they think and communicate —
            not AI that requires them to perform neurotypicality in order to use it. The
            qualities that make MEOK useful for autistic users are not workarounds or
            accessibility features grafted onto a product designed for someone else. They
            are the product: consistent, direct, honest, private, and always available.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            MEOK was built by Nicholas Templeman at MEOK AI LABS in the UK. The design
            philosophy is simple: an AI that genuinely serves its user. For autistic adults
            whose lives involve a continuous negotiation with environments and systems that
            were not designed for them, having one thing that simply works — on their terms,
            in their communication style, with their memory held privately and used only for
            their benefit — is not a small thing.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            Being autistic is not a problem to be solved. MEOK is not trying to help you
            be less autistic. It is trying to make a small corner of your day less exhausting
            — and to be there, consistently, whenever you need it.
          </p>
        </section>

        {/* CTA */}
        <div
          style={{
            backgroundColor: CARD,
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            border: `1px solid ${BORDER}`,
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: '0.75rem',
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: '1.4rem',
              color: TEXT,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            An AI that speaks your language
          </h2>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
            }}
          >
            Consistent personality. Explicit language. No subtext. No notifications.
            Your memory, private. MEOK is available whenever you need it — and quiet
            when you do not.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              backgroundColor: GOLD,
              color: '#0d0c18',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Try MEOK Free &rarr;
          </Link>
        </div>

        {/* Related posts */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: '1.15rem',
              color: GOLD,
              marginBottom: '1.25rem',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            Related reading
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <Link
              href="/blog/ai-for-autism"
              style={{
                display: 'block',
                backgroundColor: CARD,
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                border: `1px solid ${BORDER}`,
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.3rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Autism
              </p>
              <p
                style={{
                  color: TEXT,
                  fontSize: '0.95rem',
                  lineHeight: 1.4,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                AI companion for autism: consistent presence, literal language, no social noise
              </p>
            </Link>
            <Link
              href="/blog/meok-for-neurodivergent"
              style={{
                display: 'block',
                backgroundColor: CARD,
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                border: `1px solid ${BORDER}`,
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.3rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Neurodiversity
              </p>
              <p
                style={{
                  color: TEXT,
                  fontSize: '0.95rem',
                  lineHeight: 1.4,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                MEOK for neurodivergent people: built different, for people who think different
              </p>
            </Link>
            <Link
              href="/blog/ai-for-adhd-women"
              style={{
                display: 'block',
                backgroundColor: CARD,
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                border: `1px solid ${BORDER}`,
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.3rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                ADHD
              </p>
              <p
                style={{
                  color: TEXT,
                  fontSize: '0.95rem',
                  lineHeight: 1.4,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                AI for Women with ADHD: Support After a Late Diagnosis
              </p>
            </Link>
            <Link
              href="/blog/guardian-family-safety"
              style={{
                display: 'block',
                backgroundColor: CARD,
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                border: `1px solid ${BORDER}`,
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.3rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Guardian
              </p>
              <p
                style={{
                  color: TEXT,
                  fontSize: '0.95rem',
                  lineHeight: 1.4,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                MEOK Guardian: family safety without surveillance
              </p>
            </Link>
          </div>
        </div>

        {/* Footer nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.5rem',
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <Link
            href="/blog"
            style={{
              color: MUTED,
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            &larr; All posts
          </Link>
          <Link
            href="/birth"
            style={{
              color: GOLD,
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 600,
            }}
          >
            Try MEOK &rarr;
          </Link>
        </div>
      </main>
    </div>
  )
}
