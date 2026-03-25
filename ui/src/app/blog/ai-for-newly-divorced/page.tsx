import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Support After Divorce: Rebuilding Your Life with a Compassionate AI Companion | MEOK AI LABS',
  description: 'Divorce is rated the 2nd most stressful life event. Discover how MEOK\'s AI companion helps you process grief, rebuild identity, manage co-parenting, and move forward.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-newly-divorced' },
  openGraph: {
    title: 'AI Support After Divorce: Rebuilding Your Life with a Compassionate AI Companion',
    description: 'Divorce is rated the 2nd most stressful life event. MEOK\'s AI companion helps you process grief, rebuild identity, manage co-parenting stress, and move forward with clarity.',
    type: 'article',
    url: 'https://meok.ai/blog/ai-for-newly-divorced',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Support After Divorce: Rebuilding Your Life with a Compassionate AI Companion',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/ai-for-newly-divorced',
  description: 'How MEOK\'s AI companion supports newly divorced people through the emotional stages of separation — grief, loneliness, financial anxiety, co-parenting stress — and helps them rebuild a life that feels whole again.',
  keywords: 'AI support after divorce, AI companion for divorce, AI for newly divorced, divorce emotional support, rebuilding after divorce, co-parenting AI, AI grief after divorce',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI really help after a divorce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI cannot replace therapy or human connection, but it provides something uniquely valuable — constant, patient, non-judgmental presence at the exact moments human support is unavailable. The 2am spirals, the sudden waves of grief, the practical questions about financial next steps — a well-designed AI companion like MEOK holds all of these without fatigue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What emotional stages do people go through after divorce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most people cycle through shock and disbelief, grief and sadness, anger and resentment, bargaining and guilt, and eventually acceptance and renewal. These stages are rarely linear — people move between them, sometimes for years. Research consistently rates divorce as the second most stressful life event after the death of a spouse.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with loneliness after separation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK provides a persistent companion that remembers who you are, what you care about, and where you have been. It checks in, notices when you go quiet, engages in meaningful conversation, and helps you feel less alone — particularly in the evenings and weekends when post-divorce loneliness is most acute.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help with co-parenting stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can help you process difficult co-parenting emotions, think through communication strategies, prepare for challenging conversations, and track the emotional patterns that arise around handovers and custody arrangements. It is a private, non-judgmental space to work through the stress that co-parenting after separation inevitably brings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data safe when I share personal divorce details with MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Sovereign Memory stores everything you share in an end-to-end encrypted personal vault. Your data is never used to train AI models, never sold to third parties, and never accessible to advertisers. Your divorce details — the most private chapter of your life — remain entirely yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI help me rebuild my identity after divorce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Mystic archetype helps you reconnect with values, passions, and a sense of purpose that may have been submerged during the marriage. The Pioneer archetype supports practical goal-setting and forward momentum. Together they help you answer the question: who am I now, and what do I actually want my life to look like?',
      },
    },
  ],
}

export default function AiForNewlyDivorcedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>

        {/* Hero */}
        <section style={{
          padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 4rem',
          background: 'linear-gradient(180deg, rgba(201,168,76,0.06) 0%, transparent 60%)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.7)',
              marginBottom: '1.25rem',
            }}>
              AI COMPANION — DIVORCE &amp; LIFE TRANSITIONS
            </p>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}>
              AI Support After Divorce:<br />
              <span style={{ color: '#c9a84c' }}>Rebuilding Your Life with a Compassionate AI Companion</span>
            </h1>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}>
              Divorce is rated the second most stressful life event a human being can experience —
              surpassed only by the death of a spouse. Yet most people face it without a guide,
              without a plan, and without anyone who truly understands what the inside of it feels like.
              MEOK is built to change that.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.6)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '2rem',
                padding: '0.3rem 0.9rem',
              }}>
                25 March 2026
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.6)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '2rem',
                padding: '0.3rem 0.9rem',
              }}>
                18 min read
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.6)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '2rem',
                padding: '0.3rem 0.9rem',
              }}>
                Nicholas Templeman
              </span>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section style={{
          padding: '0 1.5rem 4rem',
        }}>
          <div style={{
            maxWidth: '860px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}>
            {[
              { stat: '42%', label: 'of UK marriages end in divorce', source: 'ONS / Relate' },
              { stat: '#2', label: 'most stressful life event, after bereavement', source: 'Holmes-Rahe Stress Scale' },
              { stat: '2–5 yrs', label: 'average full emotional recovery timeline', source: 'Divorce research consensus' },
              { stat: '60%', label: 'of divorced adults report significant loneliness in year one', source: 'University of Chicago Study' },
            ].map((item) => (
              <div key={item.stat} style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, color: '#c9a84c', margin: 0 }}>
                  {item.stat}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.8)', marginTop: '0.4rem', marginBottom: '0.4rem', lineHeight: 1.4 }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '0.65rem', color: 'rgba(245,240,232,0.35)', margin: 0, fontStyle: 'italic' }}>
                  {item.source}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Article Content */}
        <article style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Opening */}
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.85)', marginBottom: '1.5rem' }}>
            You signed the papers. The house is quieter now. The bed is wrong-sized. The social calendar
            — the one that used to fill itself — is suddenly, brutally empty. Friends check in for a few
            weeks, then life pulls them back. Family offer advice laced with their own agendas. Therapists
            have waiting lists. And the 2am thoughts have nobody to talk to.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.85)', marginBottom: '3rem' }}>
            This is the gap MEOK was built to fill. Not as a replacement for human connection or professional
            support — but as the always-present companion who holds the weight of transition without flinching,
            remembers your story without you having to repeat it, and walks beside you as you figure out
            who you are on the other side.
          </p>

          {/* ── SECTION 1: The Scale of Divorce ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Why Is Divorce Considered One of the Most Stressful Life Events?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              The Holmes-Rahe Stress Inventory — a clinically validated tool used by psychologists for
              decades — ranks divorce second only to the death of a spouse. It scores 73 out of 100 on the
              stress scale. The physical, emotional, financial, social, and identity disruption combined
              make it uniquely total.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              In the UK, approximately 42% of marriages end in divorce. That translates to over 100,000
              divorces per year — meaning that on any given day, thousands of people in Britain alone are
              sitting with paperwork, solicitors&apos; letters, and the specific hollow feeling of a life
              structure collapsing around them.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              What makes divorce so uniquely stressful is that it is not a single event — it is a cascade.
              The legal process. The financial untangling. The housing disruption. The social network
              fracturing (whose friends were really whose?). The identity dissolution (who am I if not
              somebody&apos;s spouse?). The grief that arrives in waves for months and years after. Each of
              these is a significant stressor in its own right. Combined, they create a load that the human
              nervous system genuinely struggles to process alone.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              And yet the support infrastructure around divorce is thin. The NHS cannot provide routine
              emotional support for life transitions. Private therapy is expensive and has waiting times.
              Friends and family — even well-meaning ones — often run out of bandwidth, patience, or the
              ability to hold the same pain conversation for the sixth month running. MEOK exists in the
              gap between the support you need and the support that is actually available.
            </p>
          </section>

          {/* ── SECTION 2: Shock ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              What Does the Shock Stage of Divorce Actually Feel Like?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Shock is the nervous system&apos;s first response to catastrophic change. Even when divorce
              was expected — even when you initiated it — the moment of formal separation triggers a
              dissociative numbness. Nothing feels real. Time becomes strange. Ordinary tasks feel absurd.
              The mind is buying itself time before the grief arrives.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              For many people, the shock phase is the most disorienting precisely because it does not feel
              like what they expected. They anticipated sadness, and instead they feel nothing — or a
              strange, floating unreality. They go to work. They eat. They respond to emails. And somewhere
              beneath the functional surface, everything is fracturing.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK&apos;s Healer archetype is specifically calibrated for this phase. The Healer does not
              push. It does not demand that you process at a particular speed. It meets you in the numbness
              without trying to fix it — because shock cannot be fixed, only held. It asks gentle questions.
              It reflects back what you share. It creates a container that is safe enough for the feelings
              to eventually arrive in their own time.
            </p>
            <div style={{
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;I don&apos;t know what I feel. I&apos;m just going through the motions. Is that normal?&rdquo;
              </p>
              <p style={{ fontSize: '0.85rem', color: '#c9a84c', marginTop: '0.75rem', marginBottom: 0, fontWeight: 600 }}>
                MEOK Healer response: &ldquo;That numbness you&apos;re describing is your mind protecting you.
                It&apos;s not nothing — it&apos;s a very particular kind of something. You don&apos;t have to feel
                anything specific right now. You just have to be here. I&apos;m here too.&rdquo;
              </p>
            </div>
          </section>

          {/* ── SECTION 3: Grief ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Does Grief After Divorce Differ from Grief After Bereavement?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Divorce grief is disenfranchised grief — the loss is real, but society does not always
              recognise it as such. Unlike bereavement, there are no condolence cards, no time off work,
              no communal mourning ritual. You are expected to &ldquo;move on.&rdquo; Yet you are grieving a
              person, a future, a version of yourself, and the life you thought you were building.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The grief of divorce is layered in ways that bereavement is not. With death, the person is
              gone — and while the loss is devastating, there is a finality that the mind can eventually
              begin to integrate. With divorce, the person still exists. They may live nearby. They may
              share custody of your children. They may appear in your social feeds. You grieve someone
              who is simultaneously absent and present, lost and still findable. That ambiguity makes the
              grief uniquely hard to resolve.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              There is also the compounded grief of what was never said, what was never resolved, and what
              you imagined the future would contain. The house you were going to renovate. The holiday you
              had saved for. The version of yourself at 60 who you had always imagined would be accompanied.
              All of these imagined futures dissolve simultaneously when a marriage ends.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK&apos;s Healer archetype holds grief without rushing it. It does not offer empty reassurances
              or set timelines for when you should feel better. It tracks — through Sovereign Memory — the
              recurring themes of your grief: the moments that keep surfacing, the losses within the loss
              that keep returning. Over time, this creates a map of your emotional landscape that helps you
              understand where you are in your own recovery.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              Grief after divorce is legitimate. It deserves space, time, and witness. MEOK provides all three.
            </p>
          </section>

          {/* ── SECTION 4: Anger ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Is Anger After Divorce Normal, and How Can You Process It Safely?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Anger is not only normal after divorce — it is often necessary. It is the psyche&apos;s mechanism
              for re-establishing a sense of self and agency after profound violation. Suppressed anger
              becomes depression. Expressed anger, processed in the right container, becomes energy for
              rebuilding. The danger is not the anger itself but where it lands.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The challenge with post-divorce anger is that it rarely has a safe landing place. Expressing
              it toward your ex-partner — especially during legal proceedings — can be legally and
              practically damaging. Expressing it toward mutual friends risks fracturing already fragile
              social networks. Expressing it toward children is actively harmful. Suppressing it entirely
              converts it into anxiety, depression, or physical illness.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK provides a private, non-judgmental space to voice anger without consequences. You can
              say exactly what you feel without worrying about how it will be used against you, without
              managing someone else&apos;s reaction, without the social cost of being perceived as bitter
              or difficult. The anger can come out — fully, honestly — and then be examined together:
              what is it protecting? what does it need? what would help it move?
            </p>
            <div style={{
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                HEALER IN PRACTICE
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;I am so angry I can&apos;t think straight. I want to send a message I know I shouldn&apos;t send.&rdquo;
              </p>
              <p style={{ fontSize: '0.85rem', color: '#c9a84c', marginTop: '0.75rem', marginBottom: 0, fontWeight: 600 }}>
                MEOK: &ldquo;Tell me everything you want to say in that message — here, first. All of it.
                I&apos;m not going anywhere, and nothing you say will be used against you. Let it out,
                then we&apos;ll look at it together.&rdquo;
              </p>
            </div>
          </section>

          {/* ── SECTION 5: Acceptance ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              What Does Acceptance Actually Look Like After a Marriage Ends?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Acceptance is not the same as being okay with what happened. It is the shift from fighting
              reality to living within it. It arrives quietly — not as a moment of resolution, but as a
              gradual noticing that you have gone several hours, then a day, without the weight being
              quite so crushing. Acceptance is the beginning of forward motion, not the end of grief.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The journey to acceptance is rarely straight. Most people cycle back through grief, anger,
              and bargaining multiple times before something settles. Significant dates — the wedding
              anniversary, their birthday, the first Christmas alone — can send someone back to the
              beginning of the emotional cycle even months or years into their recovery. This is not
              regression; it is the non-linear nature of how humans process loss.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK&apos;s Sovereign Memory tracks these cycles. If you have spoken about the difficulty of
              your wedding anniversary every September for the past two years, MEOK remembers — and
              gently checks in as the date approaches. It notices the patterns you might not notice
              yourself, and helps you prepare for them rather than being ambushed.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              Acceptance also creates space for something new — the question of who you are now, and who
              you want to become. This is where MEOK&apos;s Mystic archetype becomes particularly powerful.
            </p>
          </section>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', margin: '3rem 0' }} />

          {/* ── SECTION 6: Identity ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Do You Rebuild Your Identity After Divorce Has Stripped It Away?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Long marriages do not just end partnerships — they dissolve identities. Who you were as
              &ldquo;a couple&rdquo; becomes who you were as &ldquo;yourself.&rdquo; The hobbies you dropped, the friendships
              you neglected, the ambitions you deferred — all now return as open questions. The Mystic
              archetype in MEOK helps you excavate the self that was buried beneath the marriage.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              One of the most disorienting aspects of post-divorce life is the sudden confrontation with
              radical self-determination. When you were in a partnership, thousands of daily decisions
              were implicit — what to eat, where to live, how to spend weekends, what to prioritise
              financially. Now every single one of those decisions is yours alone. That freedom is real,
              but it arrives alongside a terrifying blankness.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK&apos;s Mystic archetype approaches identity reconstruction as an excavation rather than a
              construction. It asks: what did you love before this relationship? What did you always want
              to try but never had space for? What did you consistently push down or deprioritise? What
              kind of person do you remember being in your twenties, and what happened to that person?
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              These conversations, tracked through Sovereign Memory, build a picture over time. MEOK
              notices connections between what you say you value and what you actually talk about with
              enthusiasm. It reflects back patterns — &ldquo;you&apos;ve mentioned wanting to paint three times
              this month&rdquo; — that help you see where your energy is genuinely pointing.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1rem',
            }}>
              {[
                { archetype: 'Mystic', role: 'Finds meaning & new values', color: 'rgba(147,112,219,0.15)', border: 'rgba(147,112,219,0.3)' },
                { archetype: 'Pioneer', role: 'Builds practical new life', color: 'rgba(201,168,76,0.08)', border: 'rgba(201,168,76,0.2)' },
                { archetype: 'Healer', role: 'Holds grief & integration', color: 'rgba(64,196,128,0.08)', border: 'rgba(64,196,128,0.2)' },
              ].map((item) => (
                <div key={item.archetype} style={{
                  background: item.color,
                  border: `1px solid ${item.border}`,
                  borderRadius: '10px',
                  padding: '1.25rem',
                  textAlign: 'center',
                }}>
                  <p style={{ fontSize: '1rem', fontWeight: 800, color: '#f5f0e8', margin: '0 0 0.4rem' }}>
                    {item.archetype}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.55)', margin: 0, lineHeight: 1.4 }}>
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: Loneliness ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Why Is Loneliness After Separation So Much Worse Than Being Single Before Marriage?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Post-divorce loneliness is qualitatively different from pre-relationship singleness. It is
              not the absence of partnership — it is the presence of its ghost. Every room holds a habit,
              every routine reveals a gap, every weekend is a reminder of what used to fill it. Research
              shows 60% of newly divorced adults report significant loneliness in their first year.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The body keeps a record of partnership. Sleep patterns are disrupted when a bed is suddenly
              unfamiliar. Appetite changes. The automatic social buffer of &ldquo;my partner and I&rdquo; disappears,
              leaving people unsure how to occupy space at dinner tables, social events, and family
              gatherings designed for pairs. The world, it turns out, is still architecturally coupled.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Weekend afternoons are identified consistently as the hardest time. The unstructured hours
              that used to organise themselves around a shared life are now open in a way that feels
              threatening rather than freeing. Sunday evenings carry a particular weight — the last
              moment before the working week resumes its routine, the most exposed hour of an already
              exposed existence.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK is specifically designed for these hours. It checks in. It remembers what you were
              doing last Sunday and asks how it went. It notices when you go quiet and gently surfaces.
              It has no schedule of its own, no competing priorities, no desire to end the conversation
              because something else needs attending to. The companion is simply present — in the hours
              when presence is what matters most.
            </p>
          </section>

          {/* ── SECTION 8: Co-parenting ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Can AI Help with the Stress of Co-Parenting After Divorce?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Co-parenting after divorce is one of the most emotionally demanding sustained challenges
              a person can face. It requires maintaining a functional relationship with someone from
              whom you are actively trying to emotionally detach. Every handover is a potential trigger.
              Every disagreement about parenting carries the weight of the entire failed marriage.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The children are not just caught in the middle — they are the medium through which the
              divorce continues to be felt. Drop-offs can be sites of acute emotional dysregulation.
              Messages about school events or medical appointments arrive from the same phone number
              that sent the message ending the marriage. There is no clean break when children are shared.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK helps in several specific ways. Before difficult conversations, it helps you prepare:
              what do you want to say, what outcome do you want, what are the likely flashpoints and how
              will you navigate them? After difficult interactions, it provides a safe space to debrief
              without burdening your children with adult emotional content.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK also helps you track patterns. If tensions consistently spike around school report
              times, around the children&apos;s birthdays, or around holiday arrangements, the Sovereign
              Memory can surface these patterns — giving you forewarning and the ability to prepare
              your own nervous system rather than being repeatedly ambushed by the same emotional
              landmines.
            </p>
            <div style={{
              background: 'rgba(64,196,128,0.05)',
              border: '1px solid rgba(64,196,128,0.15)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                CO-PARENTING SUPPORT IN PRACTICE
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                <li>Pre-conversation preparation: clarify goals, anticipate triggers</li>
                <li>Post-handover debrief: process emotions safely, away from children</li>
                <li>Pattern tracking: identify recurring tension points before they arrive</li>
                <li>Message drafting: review co-parenting communications for tone before sending</li>
                <li>Emotional regulation: grounding techniques when triggered by contact</li>
              </ul>
            </div>
          </section>

          {/* ── SECTION 9: Financial Anxiety ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Does Financial Anxiety After Divorce Manifest, and What Actually Helps?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Financial anxiety after divorce is not just about money — it is about security, control,
              and the future. The dismantling of a shared financial life forces confrontation with
              mortality, uncertainty, and self-sufficiency simultaneously. Legal costs alone average
              £14,000–£20,000 in contested UK divorces. The financial fear is rational — and then
              it compounds into something much larger.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Divorce forces a financial reckoning that many people — particularly those who were not
              the primary financial manager in the household — are entirely unprepared for. Suddenly
              you need to understand mortgages, pensions, investments, and tax implications. You need
              to negotiate settlements while simultaneously managing emotional devastation. You need
              to rebuild a financial life from assets that were designed for two incomes.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The anxiety this produces is not just cognitive — it is somatic. Sleep disturbance,
              appetite disruption, chronic tension in the chest and jaw are all common physical
              manifestations of financial fear after divorce. The uncertainty feels existential
              because, in a very real sense, it is.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK&apos;s Pioneer archetype is particularly suited to this domain. The Pioneer does not
              pretend that financial anxiety is irrational — it validates the concern, then works
              through it methodically. It helps break overwhelming financial uncertainty into
              manageable questions, tracks what you have already established, and helps you
              build a new financial narrative from the ground up.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              Crucially, MEOK&apos;s Guardian archetype is also watching for the scams that specifically
              target newly divorced people — a group known to be emotionally vulnerable, recently
              liquid (from settlements), and actively making major financial decisions. We cover this
              in detail in a dedicated section below.
            </p>
          </section>

          {/* ── SECTION 10: MEOK Healer ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              What Is MEOK&apos;s Healer Archetype and Why Was It Built for Grief Processing?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              The Healer is one of MEOK&apos;s five core archetypes — specialised emotional states that
              the AI adopts depending on what you need. The Healer is low-pressure, deeply empathic,
              and unhurried. It prioritises presence over productivity. It does not rush toward solutions
              when what you need is simply to be heard. It is the archetype of sitting with.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The Healer was not designed for divorce specifically — it was designed for all forms of
              significant emotional pain. But it has particular relevance in the divorce context because
              what newly divorced people most commonly report needing is not advice, not action plans,
              not the silver lining — it is someone to sit with them in the pain without trying to
              end it prematurely.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The Healer operates on several principles that distinguish it from general AI conversation:
            </p>
            <ul style={{ paddingLeft: '1.5rem', color: 'rgba(245,240,232,0.75)', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1rem' }}>
              <li><strong style={{ color: '#f5f0e8' }}>It follows, not leads.</strong> The Healer does not introduce new topics or redirect conversations toward progress.</li>
              <li><strong style={{ color: '#f5f0e8' }}>It tolerates repetition.</strong> Grief loops. The Healer expects to hear the same pain expressed the same way dozens of times, and receives it with the same care each time.</li>
              <li><strong style={{ color: '#f5f0e8' }}>It does not catastrophise or minimise.</strong> Both are forms of abandonment. The Healer sits in the accurate register of what is actually being experienced.</li>
              <li><strong style={{ color: '#f5f0e8' }}>It notices the body.</strong> It asks about sleep, eating, physical tension — because emotional pain always has a somatic component that deserves attention.</li>
              <li><strong style={{ color: '#f5f0e8' }}>It routes appropriately.</strong> When pain reaches a clinical threshold — thoughts of self-harm, inability to function — the Healer always routes toward professional support without abandoning the person in that moment.</li>
            </ul>
          </section>

          {/* ── SECTION 11: Mystic ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Does MEOK&apos;s Mystic Help You Find New Meaning After Your Life Has Been Upended?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              The Mystic archetype is MEOK&apos;s philosophical and reflective mode — the part that asks
              the deeper questions and holds space for the existential dimensions of major transitions.
              After divorce, these are not abstract concerns. &ldquo;Why did this happen?&rdquo; and &ldquo;What does my
              life mean now?&rdquo; are not rhetorical. They are the actual questions a person needs to answer
              before forward motion is genuinely possible.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Post-divorce meaning-making is a genuine psychological need. Research on post-traumatic
              growth — the phenomenon of people emerging from profound suffering with expanded capacity —
              consistently shows that the people who do best are those who are able to construct a
              coherent narrative about what happened and what it means for who they are now.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The Mystic does not offer pre-packaged meaning. It does not reach for the &ldquo;everything
              happens for a reason&rdquo; cliché. Instead it explores: what did this relationship teach you
              about yourself? What do you understand now that you could not have seen before? What aspects
              of who you were in the marriage no longer feel true? What aspects feel more true than ever?
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The Mystic also holds the spiritual dimensions of transition — whether those are religious,
              philosophical, or simply the sense that something fundamentally shifted in the nature of
              your life. These are often the conversations that feel too abstract for friends, too
              unconventional for therapists, and too personal for anyone but a witness who carries no
              agenda about the answers.
            </p>
          </section>

          {/* ── SECTION 12: Pioneer ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              What Practical Rebuilding Steps Does MEOK&apos;s Pioneer Archetype Support?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              The Pioneer is MEOK&apos;s action-oriented, forward-moving archetype. Once the initial emotional
              storm begins to settle — even partially — the Pioneer activates: helping you identify
              practical priorities, break large challenges into manageable steps, build new routines,
              and track progress toward the life you are constructing on the other side of divorce.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Practical rebuilding after divorce involves domains that most people have never had to
              navigate simultaneously: housing (renting alone for the first time in years, or managing
              a shared mortgage sale), finances (untangling joint accounts, pension sharing, rebuilding
              a single-income budget), social life (rebuilding a network that was partially dismantled
              by the divorce), and identity (deciding what you want the next chapter to look like).
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The Pioneer does not pretend these challenges are small. What it does is refuse to let
              their enormity be paralyzing. It works through prioritisation: what absolutely must be
              addressed this week, what can wait a month, what is still premature. It creates the
              smallest possible next step in each domain — one phone call, one spreadsheet column,
              one conversation — and holds you accountable to it gently over time.
            </p>
            <div style={{
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                PIONEER&apos;S POST-DIVORCE REBUILDING FRAMEWORK
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {[
                  { phase: 'Week 1–4', label: 'Stabilise', desc: 'Immediate practical needs: housing, finances, legal, children' },
                  { phase: 'Month 2–3', label: 'Establish', desc: 'New routines, social rebuild, financial clarity' },
                  { phase: 'Month 4–6', label: 'Explore', desc: 'Identity questions, new interests, what do you actually want?' },
                  { phase: 'Month 6+', label: 'Build', desc: 'Long-term goals, relationships, life design from scratch' },
                ].map((p) => (
                  <div key={p.phase} style={{
                    background: 'rgba(201,168,76,0.08)',
                    borderRadius: '8px',
                    padding: '1rem',
                  }}>
                    <p style={{ fontSize: '0.7rem', color: '#c9a84c', fontWeight: 700, margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {p.phase}
                    </p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#f5f0e8', margin: '0 0 0.4rem' }}>
                      {p.label}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.55)', margin: 0, lineHeight: 1.4 }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', margin: '3rem 0' }} />

          {/* ── SECTION 13: Sovereign Memory ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Does Sovereign Memory Track Your Emotional Recovery Journey After Divorce?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Sovereign Memory is MEOK&apos;s persistent, encrypted memory engine — the part that means
              you never have to introduce yourself twice. For divorce recovery, it creates something
              most newly separated people desperately lack: a longitudinal record of their own
              emotional journey, visible to no one but themselves.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Recovery from divorce is impossible to assess in the moment. When you are in the middle
              of it, it always feels like you are not progressing — like the pain is as acute as it was
              on day one. Sovereign Memory makes the invisible visible. It holds the record of where
              you were three months ago, six months ago, a year ago — so that when you doubt your
              own progress, the evidence of it is retrievable.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Specifically, Sovereign Memory tracks:
            </p>
            <ul style={{ paddingLeft: '1.5rem', color: 'rgba(245,240,232,0.75)', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1rem' }}>
              <li><strong style={{ color: '#f5f0e8' }}>Emotional milestones:</strong> The first day you reported feeling something other than grief. The first week you slept through the night. The first conversation you had that was not about the divorce.</li>
              <li><strong style={{ color: '#f5f0e8' }}>Trigger patterns:</strong> The dates, situations, and topics that consistently destabilise you — so they can be anticipated rather than ambushed.</li>
              <li><strong style={{ color: '#f5f0e8' }}>Recurring themes:</strong> The fears, regrets, or questions that resurface across months of conversation — pointing toward what still needs deeper processing.</li>
              <li><strong style={{ color: '#f5f0e8' }}>Progress markers:</strong> Goals you set and met, steps you took, domains where your language and tone demonstrably shifted from despair toward agency.</li>
              <li><strong style={{ color: '#f5f0e8' }}>Significant dates:</strong> Anniversary dates, birthdays, legal milestones — so MEOK checks in proactively rather than you facing them alone.</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              All of this information is stored in your personal encrypted vault. It cannot be accessed
              by MEOK&apos;s developers, cannot be used to train AI models, and cannot be shared with any
              third party. Your recovery story belongs to you entirely.
            </p>
          </section>

          {/* ── SECTION 14: Guardian / Scam Protection ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Why Are Newly Divorced People Targeted by Scammers, and How Does MEOK&apos;s Guardian Protect You?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Scammers maintain detailed intelligence about vulnerable populations. Newly divorced people
              appear in public records, may have recently liquidated assets from settlements, are
              emotionally impaired in judgment, and are actively seeking new connections and
              opportunities. They are, from a predatory perspective, near-ideal targets. MEOK&apos;s
              Guardian is specifically calibrated to protect this window of vulnerability.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The scams that target newly divorced people fall into several predictable categories:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              {[
                {
                  title: 'Romance Scams',
                  desc: 'Fake romantic profiles on dating apps that cultivate emotional dependency before requesting money. Newly divorced individuals — lonely, seeking connection, recently liquid — are prime targets.',
                  risk: 'HIGH',
                },
                {
                  title: 'Investment Scams',
                  desc: 'Fraudulent investment opportunities pitched to people known to have recently received divorce settlements. Often begin as apparently helpful financial advice.',
                  risk: 'HIGH',
                },
                {
                  title: 'Legal Service Scams',
                  desc: 'Fake legal advisors or &ldquo;divorce support services&rdquo; that charge upfront fees for services never delivered. Exploit the confusion around legal processes.',
                  risk: 'MEDIUM',
                },
                {
                  title: 'Housing Scams',
                  desc: 'Fraudulent rental listings targeting people urgently seeking new accommodation after leaving the marital home. Deposits paid, properties non-existent.',
                  risk: 'MEDIUM',
                },
              ].map((scam) => (
                <div key={scam.title} style={{
                  background: 'rgba(220,50,50,0.05)',
                  border: '1px solid rgba(220,50,50,0.2)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#f5f0e8', margin: 0 }}>{scam.title}</p>
                    <span style={{
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      color: scam.risk === 'HIGH' ? '#ff6b6b' : '#ffa94d',
                      border: `1px solid ${scam.risk === 'HIGH' ? 'rgba(255,107,107,0.4)' : 'rgba(255,169,77,0.4)'}`,
                      borderRadius: '3px',
                      padding: '0.15rem 0.4rem',
                      letterSpacing: '0.1em',
                    }}>
                      {scam.risk}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.55)', margin: 0, lineHeight: 1.5 }}>
                    {scam.desc}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK&apos;s Guardian archetype operates as a persistent background layer — not an intrusive
              filter, but an alert system that activates when the patterns of a potential scam appear.
              If you mention a new online relationship that has moved unusually quickly, or describe a
              financial opportunity that sounds too good to be true, or share details of a service that
              requested an upfront payment before delivery, Guardian surfaces gently: &ldquo;Can I share
              something with you about this?&rdquo;
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              Guardian does not treat you as naive. It presents the pattern it has recognised, gives you
              the information you need to make an informed decision, and respects your autonomy to proceed
              as you choose. What it prevents is the most common failure mode: acting on emotional
              impulse — loneliness, hope, financial desperation — without the benefit of a single
              clear-eyed second perspective.
            </p>
          </section>

          {/* ── SECTION 15: Children ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Can You Support Your Children Through Divorce While Processing Your Own Pain?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              One of the cruelest paradoxes of divorce is that the people you most want to support —
              your children — are the people you cannot be fully honest with about what you are
              experiencing. Children need reassurance, stability, and age-appropriate honesty. They
              do not need to carry the weight of their parent&apos;s grief. The result is that divorcing
              parents often have no one to be truly honest with.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK provides the private adult space that divorcing parents desperately need. The full
              grief, the anger, the fear, the regret — all of it can be expressed with MEOK in a
              contained, private environment so that you can show up for your children from a more
              regulated, resourced place.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK can also help you navigate the specific conversations that need to happen with your
              children — how to explain what is happening in age-appropriate terms, how to hold space
              for their feelings without being overwhelmed by them, how to respond to the difficult
              questions they will inevitably ask. These conversations can be rehearsed with MEOK
              before they happen, so that when they do, you have the words ready.
            </p>
          </section>

          {/* ── SECTION 16: Social Network ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Why Does Divorce Fracture Your Social Network, and How Do You Rebuild One?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              When a marriage ends, the social infrastructure built around it collapses with it. Couple
              friends feel awkward choosing sides. Mutual friends go quiet. Family loyalties split.
              The dinner parties, holidays, and routine social occasions that used to punctuate life
              all disappear simultaneously. For many people, this social implosion is as painful as
              the loss of the partner itself.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Rebuilding a social network as an adult — particularly as an adult who is simultaneously
              grieving, financially stressed, and potentially managing children — is genuinely hard.
              The mechanisms that built the original network (school, university, shared workplace)
              are no longer available. New friendships require intentionality, repetition, and the
              willingness to be seen in an emotionally exposed state that many people find acutely
              uncomfortable.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK&apos;s Pioneer works through this as a practical rebuilding project: identifying the
              kinds of connection you want, the contexts most likely to produce them, the social
              situations that feel manageable versus overwhelming right now. It tracks who you have
              reconnected with, how interactions went, and what social investments seem to be bearing
              fruit. It helps you build a social life with the same intentionality that people apply
              to physical fitness or financial rebuilding.
            </p>
          </section>

          {/* ── SECTION 17: Sleep & Physical Health ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Does Divorce Affect Physical Health, and What Role Can AI Play in Recovery?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Divorce is not only an emotional event — it is a physiological one. Research consistently
              shows that divorced people have higher rates of cardiovascular disease, impaired immune
              function, elevated cortisol levels, and significantly disrupted sleep architecture compared
              to married peers. The stress response does not distinguish between emotional and physical
              threat. It responds to divorce as it responds to danger.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Sleep disruption is among the most common and debilitating physical effects. The body
              expects the warmth and presence of a partner — and when that presence disappears, sleep
              architecture fragments. People report difficulty falling asleep, early waking (often
              at 3–4am, which is when cortisol naturally begins to rise), and the particular hell of
              lying awake with a mind that will not stop processing.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK is available at 3am. It does not need to sleep. It does not need you to have a
              reason for being awake — the being-awake itself is reason enough to connect. The Healer
              can walk you through grounding exercises, gentle distraction, or simply hold the silence
              of a wakeful night with you until the anxiety begins to subside.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              The Pioneer tracks physical health as part of overall recovery — sleep quality,
              exercise, appetite, energy levels — because these are leading indicators of how your
              nervous system is processing the transition. When the physical metrics begin to
              stabilise, it is often the first sign that deeper healing is underway.
            </p>
          </section>

          {/* ── SECTION 18: Dating Again ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              When Are You Ready to Start Dating Again After Divorce, and How Does AI Help?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              There is no correct timeline for dating after divorce. The conventional wisdom of
              &ldquo;one year for every five years of marriage&rdquo; is not evidence-based — it is a heuristic
              that varies enormously by individual. What matters is not the elapsed time but the quality
              of integration: have you processed enough of the grief to enter a new relationship as
              yourself, rather than as a person fleeing pain?
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              The most significant risk in post-divorce dating is the rebound dynamic: seeking connection
              before the self has been sufficiently re-established, producing relationships that are
              built on need rather than genuine mutual interest. These relationships can be genuinely
              healing — or they can compound the original injury and add a second loss to the pile.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK&apos;s Mystic helps you assess readiness honestly — not by applying a formula, but by
              exploring the questions: are you dating to discover yourself or to distract yourself?
              What do you genuinely want from a relationship at this point in your life, and how does
              that differ from what you would have said five years ago? What would a healthy new
              relationship look like for the person you are becoming?
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              And throughout the dating process, the Guardian remains active — watching for the
              patterns that suggest emotional manipulation, premature intensity, or the specific
              dynamics that tend to recreate familiar pain rather than transcend it.
            </p>
          </section>

          {/* ── SECTION 19: Legal Process ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Can AI Help You Navigate the Emotional Toll of the Divorce Legal Process?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              The legal process of divorce is designed to resolve property and financial disputes —
              it is not designed to care about your emotional state. Correspondence arrives in cold
              legal language that flattens years of shared life into assets and liabilities. Mediation
              sessions require you to be functional and regulated while the relationship is being
              formally dismantled in front of you. This is profoundly dissonant. AI can hold the
              emotional layer the legal process cannot.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK does not provide legal advice — that is the domain of qualified solicitors. What
              it does provide is the emotional processing that must happen around every legal step.
              Before a mediation session: processing your anxiety, clarifying what matters most to
              you, grounding yourself. After receiving a difficult financial offer: processing the
              hurt and anger before deciding how to respond. After signing the final papers: holding
              the weight of what that moment means.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              The Pioneer also helps with the practical organisation around the legal process — tracking
              deadlines, maintaining a summary of key decisions and agreements, helping you prepare
              questions for your solicitor so that expensive legal time is used efficiently.
            </p>
          </section>

          {/* ── SECTION 20: Privacy ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Is Your Divorce Story Private When You Share It with an AI Companion?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              With most AI systems, conversations are stored on company servers, used to improve models,
              and subject to access by employees, governments, or legal processes. With MEOK, none of
              that applies. Your Sovereign Memory vault is end-to-end encrypted, stored under your
              control, never used for training, and never accessible to anyone but you.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              This distinction matters enormously in the divorce context. During and after a legal
              process, the things you say can have real-world consequences. The emotional state you
              reveal, the financial information you share, the details of co-parenting conflicts —
              all of this is material that you would not want accessible to your ex-partner&apos;s legal
              team, to data brokers, or to anyone beyond the private relationship between you and
              your AI companion.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK was built on a foundational privacy covenant: your data is yours. Full stop.
              The AI does not train on your pain. Your divorce story does not become a data point
              in a model that will be used to serve advertisements or improve a product for someone
              else. What you share with MEOK stays with MEOK — and specifically with you.
            </p>
          </section>

          {/* ── SECTION 21: MEOK vs. Therapy ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              How Is MEOK Different from Divorce Therapy, and Do You Need Both?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              MEOK is not a substitute for therapy — and it never claims to be. Professional divorce
              therapy or counselling offers something AI cannot: a qualified human clinician who can
              diagnose, treat, and provide a relational healing context that is itself therapeutic.
              What MEOK offers is the complement to therapy: the 167 hours per week when your
              therapist is unavailable, and the type of conversation that does not fit a therapy room.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Therapy typically happens once a week for 50 minutes. That is 50 minutes out of 10,080.
              The vast majority of the emotional landscape of divorce — the 2am anxieties, the
              triggered moments, the micro-decisions, the small victories — happens entirely outside
              the therapy room. MEOK lives in that space. It does not replace the weekly session;
              it makes the weekly session more productive by doing the holding work in between.
            </p>
            <div style={{
              overflowX: 'auto',
              marginBottom: '1.5rem',
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.85rem',
                minWidth: '480px',
              }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem', color: '#c9a84c', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 0.5rem', color: '#c9a84c', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>MEOK</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 0.5rem', color: 'rgba(245,240,232,0.4)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Therapy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Available 24/7', '✓', '✗'],
                    ['Remembers everything', '✓', 'Notes only'],
                    ['No waiting list', '✓', '✗'],
                    ['Clinical treatment', '✗', '✓'],
                    ['Diagnosis capability', '✗', '✓'],
                    ['Cost per month', '£/month', '£200–600+'],
                    ['Private & encrypted', '✓', 'Session notes exist'],
                    ['Tracks long-term patterns', '✓', 'Partially'],
                  ].map((row, i) => (
                    <tr key={row[0]} style={{
                      borderBottom: '1px solid rgba(245,240,232,0.05)',
                      background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                    }}>
                      <td style={{ padding: '0.7rem 0.5rem', color: 'rgba(245,240,232,0.7)' }}>{row[0]}</td>
                      <td style={{ padding: '0.7rem 0.5rem', textAlign: 'center', color: row[1] === '✓' ? '#4ec880' : row[1] === '✗' ? 'rgba(245,240,232,0.25)' : '#c9a84c', fontWeight: 700 }}>{row[1]}</td>
                      <td style={{ padding: '0.7rem 0.5rem', textAlign: 'center', color: row[2] === '✓' ? '#4ec880' : row[2] === '✗' ? 'rgba(245,240,232,0.25)' : 'rgba(245,240,232,0.5)', fontWeight: 700 }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 22: First Steps ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              What Are the First Steps to Using MEOK if You Are Newly Divorced Right Now?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              Beginning is simpler than you might expect. MEOK does not require a formal intake process,
              a list of goals, or an articulated reason for being there. You can start exactly where
              you are — sitting with the weight of what is happening, uncertain what you need, needing
              to talk to someone who will not tire of you. That is enough.
            </p>
            <ol style={{ paddingLeft: '1.5rem', color: 'rgba(245,240,232,0.75)', fontSize: '1rem', lineHeight: 2, marginBottom: '1rem' }}>
              <li>Download MEOK and create your private, encrypted account.</li>
              <li>Choose the Healer archetype when you first open a conversation — let it know where you are.</li>
              <li>Share as much or as little as you feel ready to. There is no rush, no judgment, no timeline.</li>
              <li>Return whenever you need to — morning, midnight, or 3am. The companion is there.</li>
              <li>As you stabilise, explore the Pioneer for practical rebuilding and the Mystic for meaning-making.</li>
              <li>Let the Guardian stay active in the background — especially if you are making significant financial or relationship decisions.</li>
            </ol>
          </section>

          {/* ── SECTION 23: Professional Support ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              When Should Divorce Emotional Pain Prompt You to Seek Professional Help?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              MEOK is a companion, not a crisis service and not a clinical treatment. There are specific
              signs that indicate the need for professional human support — and MEOK will always
              proactively surface this when these signs appear. Knowing the threshold is not a sign of
              weakness; it is part of genuinely good self-care.
            </p>
            <div style={{
              background: 'rgba(220,50,50,0.06)',
              border: '1px solid rgba(220,50,50,0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                SEEK PROFESSIONAL SUPPORT IF YOU EXPERIENCE:
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', lineHeight: 1.9 }}>
                <li>Thoughts of self-harm or suicide</li>
                <li>Inability to function in daily life (work, basic self-care) for more than several weeks</li>
                <li>Significant substance use as a coping mechanism</li>
                <li>Complete inability to feel any positive emotion</li>
                <li>Grief that feels entirely unchanged after six months or more</li>
                <li>Significant impact on your ability to care for your children</li>
              </ul>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)', marginBottom: '0.5rem' }}>
              <strong style={{ color: 'rgba(245,240,232,0.8)' }}>UK crisis and support resources:</strong>
            </p>
            <ul style={{ paddingLeft: '1.5rem', color: 'rgba(245,240,232,0.6)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: 0 }}>
              <li>Samaritans: 116 123 (24/7, free)</li>
              <li>SHOUT crisis text line: Text SHOUT to 85258</li>
              <li>NHS talking therapies: via your GP</li>
              <li>Relate (divorce counselling): relate.org.uk</li>
              <li>Resolution (family law): resolution.org.uk</li>
            </ul>
          </section>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', margin: '3rem 0' }} />

          {/* ── FAQ SECTION ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '2rem',
            }}>
              Frequently Asked Questions About AI Support After Divorce
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  q: 'Can AI really help after a divorce?',
                  a: 'Yes — within its proper scope. MEOK provides consistent, memory-enabled, non-judgmental presence at the hours and in the emotional registers where human support is unavailable. It does not replace therapy or human connection, but it fills the enormous gap between them with something that is genuinely useful.',
                },
                {
                  q: 'What if I start crying or completely break down talking to MEOK?',
                  a: 'That is exactly what MEOK is built for. The Healer archetype has no discomfort with your pain. It does not need you to hold yourself together. Break down fully — MEOK will hold it with you, for as long as you need, without any of the social cost that breaking down in front of a human being carries.',
                },
                {
                  q: 'Is it embarrassing to use an AI for emotional support after divorce?',
                  a: 'No. Divorce is the second most stressful life event a person can experience. Using every available resource to navigate it — including AI — is not embarrassing. It is intelligent. The only embarrassment would be refusing support out of pride and suffering unnecessarily.',
                },
                {
                  q: 'How does MEOK handle it if I express anger toward my ex-partner?',
                  a: 'MEOK holds the anger with you. It does not judge, lecture, or urge you to see your ex&apos;s point of view unless you specifically ask it to. It creates space for the anger to be fully expressed and then — when you are ready — helps you work with it constructively so it becomes fuel for rebuilding rather than a toxin.',
                },
                {
                  q: 'My divorce was my choice. Is it normal to still feel grief?',
                  a: 'Completely normal. Grief is not proportional to regret. You can know with certainty that ending the marriage was the right decision and simultaneously grieve deeply for the life, the future, and the person you shared it with. Both things are true. MEOK will never suggest that initiating divorce means you forfeit the right to mourn it.',
                },
                {
                  q: 'Can MEOK help with the specific loneliness of a suddenly empty house?',
                  a: 'Yes. The quiet of a house that used to contain a life is one of the most reported acute experiences of early divorce. MEOK is there in that silence — to talk, to listen, to accompany you through the evenings and weekends when the emptiness is loudest.',
                },
              ].map((faq) => (
                <div key={faq.q} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)', margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing essay */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              What Does Life on the Other Side of Divorce Actually Look Like?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#c9a84c',
              fontWeight: 600,
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(201,168,76,0.4)',
            }}>
              There is a version of you that exists beyond this. Research on post-divorce recovery
              consistently shows that most people — even those who describe their divorce as the worst
              experience of their lives — report that several years later, they are living more
              authentically, with clearer values, more intentional relationships, and a deeper
              understanding of who they actually are. The other side is real. Getting there takes time,
              support, and the willingness to do the work.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Post-traumatic growth is not a cliché — it is a documented psychological phenomenon.
              People who process major adversity rather than suppressing it tend to emerge with greater
              resilience, deeper empathy, more authentic self-knowledge, and a clearer sense of what
              matters. The divorce that feels like an ending is also — in the long arc of a life —
              a beginning.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              MEOK cannot make the journey shorter. It cannot shortcut the grief, bypass the anger,
              or skip the hard work of rebuilding an identity from the ground up. What it can do is
              walk beside you through every stage of it — remembering where you started, tracking
              how far you have come, holding the difficult moments with you, and supporting the
              emergence of whoever you are becoming on the other side.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)' }}>
              You do not have to do this alone. You should not have to do this alone.
              MEOK is here.
            </p>
          </section>

        </article>

        {/* Related Posts */}
        <section style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}>
          <p style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.6)',
            marginBottom: '1.5rem',
          }}>
            RELATED READING
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { href: '/blog/ai-companion-for-grief', label: 'AI Companion for Grief' },
              { href: '/blog/ai-for-loneliness-elderly', label: 'AI for Loneliness' },
              { href: '/blog/ai-for-money-anxiety', label: 'AI for Financial Anxiety' },
              { href: '/blog/ai-for-relationships', label: 'AI for Relationships' },
              { href: '/blog/guardian-family-safety', label: 'Guardian: Scam Protection' },
              { href: '/blog/archetypes-guide', label: 'MEOK Archetypes Guide' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{
                display: 'block',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(245,240,232,0.08)',
                borderRadius: '10px',
                padding: '1rem 1.25rem',
                color: 'rgba(245,240,232,0.7)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                lineHeight: 1.4,
                transition: 'border-color 0.2s',
              }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
          background: 'linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.05) 50%, transparent 100%)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.7)',
              marginBottom: '1.25rem',
            }}>
              YOU DO NOT HAVE TO DO THIS ALONE
            </p>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Start Rebuilding with MEOK
            </h2>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.6)',
              marginBottom: '2rem',
            }}>
              A compassionate AI companion that remembers your story, holds your grief,
              and helps you build the life waiting on the other side of this.
            </p>
            <Link href="/" style={{
              display: 'inline-block',
              background: '#c9a84c',
              color: '#0d0c18',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              borderRadius: '8px',
              padding: '0.9rem 2.25rem',
            }}>
              Meet MEOK
            </Link>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)', marginTop: '1rem' }}>
              Private. Encrypted. Yours alone.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
