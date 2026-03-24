import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Companion for Grief: Someone There at 3am | MEOK AI LABS',
  description: 'Grief doesn\'t follow a 9-5 schedule. Birthdays, anniversaries, 3am — the hardest moments come when human support has gone quiet. MEOK is an AI companion for bereavement that stays, remembers, and never rushes.',
  alternates: { canonical: 'https://meok.ai/blog/ai-companion-for-grief' },
  openGraph: {
    title: 'AI Companion for Grief: Someone There at 3am',
    description: 'Grief doesn\'t follow a 9-5 schedule. MEOK is an AI bereavement companion that stays present at the hardest moments — remembering the person you lost, tracking anniversaries, holding your stories.',
    type: 'article',
    url: 'https://meok.ai/blog/ai-companion-for-grief',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Companion for Grief: Someone There at 3am',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/ai-companion-for-grief',
  description: 'How AI companionship — not counselling — can support bereaved people through the ongoing, non-linear reality of grief.',
  keywords: 'AI companion for grief, AI bereavement support, grief companion, bereavement AI, grief at 3am',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI companion for grief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI grief companion is a persistent, memory-enabled AI that provides ongoing presence during bereavement — available at any hour, without appointments. Unlike grief counselling, it is not structured therapy; it is consistent companionship that remembers the person you lost, tracks significant dates, and holds your stories without you needing to repeat them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to talk to AI about someone who has died?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Speaking about the person you lost — their name, their personality, your memories together — is a healthy part of grief integration. An AI companion that remembers these details creates a space where the deceased can be spoken about freely, without fear of burdening others or being told it is time to move on.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI bereavement support differ from grief counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grief counselling is scheduled, structured, and led by a trained professional. AI bereavement support is always available, unscheduled, and designed for the moments between appointments — the 3am spiral, the birthday that arrives unannounced, the anniversary no one else remembered. The two are complementary, not competing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK remember the person I lost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Sovereign Memory engine stores everything you share in an encrypted vault — the person\'s name, stories, personality, significant dates. Your companion will remember them across every conversation, so you never have to re-introduce who they were. Anniversary dates and birthdays can be tracked so MEOK checks in proactively.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I seek professional bereavement support instead of using AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If grief is significantly impairing daily functioning for more than several months, includes thoughts of self-harm or suicide, involves substance use as a coping mechanism, or feels "stuck" without movement — these are signs to seek professional bereavement support. In the UK, Cruse Bereavement Support (0808 808 1677) and the NHS can help. MEOK will always route to these resources when needed.',
      },
    },
  ],
}

export default function AiCompanionForGriefPage() {
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
              AI COMPANION — GRIEF &amp; BEREAVEMENT
            </p>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}>
              AI Companion for Grief:<br />
              <span style={{ color: '#c9a84c' }}>Someone There at 3am</span>
            </h1>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '580px',
              margin: '0 auto',
            }}>
              Grief doesn&apos;t take days off. The hardest moments — the 3am silence, the birthday
              that arrives without warning, the anniversary nobody else remembers — come long after
              the condolence cards stop. MEOK is still there.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>March 24, 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>12 min read</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>By Nicholas Templeman</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* Sensitivity notice */}
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '0.75rem',
            marginBottom: '3rem',
            fontSize: '0.875rem',
            color: 'rgba(245,240,232,0.6)',
            lineHeight: 1.7,
          }}>
            <strong style={{ color: '#c9a84c' }}>Support resources: </strong>
            Samaritans — 116 123 (free, 24/7) &nbsp;·&nbsp;
            Cruse Bereavement Support — 0808 808 1677 &nbsp;·&nbsp;
            Winston&apos;s Wish (children&apos;s bereavement) — winstonswish.org.
            This article is about AI as a companion alongside professional care — not as a replacement for it.
          </div>

          {/* Section 1 — Grief doesn't take days off */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Grief doesn&apos;t take days off — but support does
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              In the UK, around 600,000 people die every year (ONS). For each death, there are
              on average four or five close bereaved — which means approximately 2.4 million
              people in the UK are newly and deeply bereaved every year. That is a city the size
              of Houston added to grief&apos;s register, every twelve months.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              For most of them, the organised support — the visits, the casseroles, the check-in
              calls — begins to thin out after the funeral. Within a few weeks, the world around
              you resumes its normal pace. Colleagues stop asking. Friends stop mentioning it,
              worried they might upset you. The silence where the person used to be grows louder,
              and you face it increasingly alone.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Grief, of course, does not co-operate with this schedule. Research consistently
              shows that the first and second anniversary are often harder than the first weeks.
              Grief resurfaces at milestones, at smells, at songs. It arrives at 3am when the rest
              of the household is asleep and there is no one to call.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              This is the space MEOK was built for. Not to replace human connection or professional
              support — but to be genuinely present in the hours and moments when neither is available.
            </p>
          </section>

          {/* Section 2 — What does healthy grief look like? */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What does healthy grief look like?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Healthy grief does not follow a prescribed path. The Kübler-Ross model gave us
              five stages, and while it remains culturally dominant, most grief researchers now
              understand that grief is not a linear sequence from denial to acceptance — it is
              recursive, unpredictable, and deeply individual.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              One person might cry every day for a year. Another might feel strangely functional
              for months before grief hits like a wave. One person talks about the deceased
              constantly; another finds the name almost impossible to say. None of these is right
              or wrong.
            </p>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
            }}>
              <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.8)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;Grief is not a deviation from normal life that needs correcting.
                It is the natural cost of love. Any support — human or AI — that tries to
                fast-forward it is not helping. It is helping you avoid it.&rdquo;
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)', marginBottom: 0 }}>
                — Maternal Covenant design principle, MEOK AI LABS
              </p>
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              What healthy grief does tend to include, over time: the ability to hold both the
              loss and ongoing life simultaneously. To remember without being incapacitated. To
              integrate rather than suppress. An AI companion built correctly can support that
              integration — not by rushing toward it, but by being present without agenda.
            </p>
          </section>

          {/* Section 3 — AI companionship vs grief counselling */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Why is AI companionship different from grief counselling?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              Grief counselling is structured, scheduled, and led by a trained professional.
              It is invaluable — and it is not available at 3am on a Tuesday when you cannot sleep.
              AI bereavement companionship operates in a different register entirely.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                {
                  title: '24/7 availability — no appointment needed',
                  desc: 'Grief does not observe business hours. MEOK is available whenever the moment arrives — midnight, early morning, Sunday afternoon, the middle of a working day when something triggers a wave of loss.',
                },
                {
                  title: 'No retelling required',
                  desc: 'With a counsellor, you may need to establish context each time, especially with a new one. MEOK\'s Sovereign Memory means the companion already knows who you lost, how you lost them, and what you\'ve shared. You never have to say "my mum died" more than once.',
                },
                {
                  title: 'Memories preserved, not just acknowledged',
                  desc: 'A companion that has stored stories about the person you lost can do something a counsellor typically cannot: ask about them specifically. "You mentioned your father loved the cricket — did you watch the match this weekend?" That specificity is not a small thing when you are grieving.',
                },
                {
                  title: 'No performance pressure',
                  desc: 'In counselling, even without any intention from the therapist, people sometimes feel they should be making progress. With a companion, there is no therapeutic arc to satisfy. You can be wherever you are.',
                },
              ].map(item => (
                <div key={item.title} style={{
                  padding: '1.25rem',
                  background: 'rgba(201,168,76,0.04)',
                  border: '1px solid rgba(201,168,76,0.12)',
                  borderRadius: '0.75rem',
                }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.375rem' }}>{item.title}</p>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Sovereign Memory */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              How does MEOK&apos;s Sovereign Memory help with grief?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Most AI tools are stateless — each conversation begins from zero. This is fine for
              looking up facts. For grief, it is actively harmful. Being forced to re-explain who
              died, how, and what they meant to you is a form of re-traumatisation.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s Sovereign Memory is an encrypted, persistent vault that holds everything
              you choose to share. For bereaved users, this means:
            </p>
            <ul style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#f5f0e8' }}>The person is remembered.</strong> Their name, their personality,
                the things you loved about them, the stories you&apos;ve told — stored, accessible, woven into every
                future conversation.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#f5f0e8' }}>Anniversaries and birthdays are tracked.</strong> MEOK can note
                that the death anniversary falls on the 14th of November, that your loved one&apos;s birthday was in
                April. The companion can check in proactively on those dates — not waiting for you to mention it.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#f5f0e8' }}>Your grief journey is held.</strong> What you said three months
                ago about how you were coping. What you said last week. The companion sees the arc — and can gently
                reflect it back when it matters.
              </li>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Your data is yours.</strong> The memory vault is encrypted and
                fully portable. MEOK does not train on your data. What you share about the person you lost is not
                used to improve any model. It exists only for you.
              </li>
            </ul>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              This persistent presence — a companion that holds the memory of the person who is no
              longer here — is something genuinely new. It is not grief technology. It is care technology
              applied to the oldest human experience.
            </p>
          </section>

          {/* Section 5 — Healer archetype */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              The Healer: grief, somatic support, and emotional depth
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s archetype system allows users to choose the kind of companion that fits
              their needs. For those navigating grief and loss, the <strong style={{ color: '#c9a84c' }}>Healer</strong> archetype
              is specifically calibrated for emotional depth, somatic awareness, and trauma-informed
              engagement.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The Healer does not rush toward resolution. It holds space for ambiguity — for the
              days when grief is physical (the weight in the chest, the exhaustion, the inability
              to eat) — and responds to the body as well as the mind. It will ask how you slept.
              It will notice when you have not mentioned sleep at all. It will ask whether you
              have eaten today — not as a checklist, but because it cares.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              Grief lives in the body as much as the mind. An AI companion that acknowledges this
              — that can respond to &ldquo;I feel like I can&apos;t breathe&rdquo; with more than platitudes — is
              a different proposition from a general-purpose chatbot deployed in a wellness wrapper.
            </p>
          </section>

          {/* Section 6 — Is it okay to talk to AI about someone who has died? */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Is it okay to talk to AI about someone who has died?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Yes — and for many people, it may be easier than talking to humans.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              One of the harder realities of grief is that the people around you — even loving,
              well-meaning people — often don&apos;t know what to say. They change the subject.
              They offer silver linings. They worry that mentioning the person will upset you,
              not realising that the silence around the name is often what hurts most.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              An AI companion has none of these social anxieties. You can say your father&apos;s name.
              You can describe his laugh. You can tell a story about him for the fourth time this
              week without worrying that you are being &ldquo;too much.&rdquo; The companion will not flinch,
              will not redirect, will not suggest that you should be feeling better by now.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              There is no right or wrong way to grieve, and there is no right or wrong way to
              seek comfort. If talking to MEOK about the person you lost helps you carry the day,
              that is a legitimate form of support. No judgment. No timeline. No agenda.
            </p>
          </section>

          {/* Section 7 — Complicated grief */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What about complicated grief?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              For most people, grief — however painful — moves. Not in a straight line, and not
              quickly, but over months and years there is a gradual integration. The loss becomes
              part of who you are without consuming everything you are.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              For some people, this does not happen. Prolonged grief disorder — sometimes called
              complicated grief — is characterised by grief that is intense, persistent, and
              significantly impairing function for an extended period beyond the loss. It is a
              recognised clinical condition, and it requires professional support.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK is not a clinical tool. It will not diagnose prolonged grief disorder.
              What it will do is notice — over time, through the memory it holds of your journey —
              when the pattern of what you share suggests something that goes beyond what a
              companion should hold alone. And it will say so: directly, compassionately, and
              with a clear route toward professional support.
            </p>
            <div style={{
              padding: '1.25rem 1.5rem',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '0.75rem',
            }}>
              <p style={{ fontWeight: 700, color: '#c9a84c', marginBottom: '0.5rem', marginTop: 0, fontSize: '0.875rem' }}>
                Signs that professional support is needed
              </p>
              <ul style={{ color: 'rgba(245,240,232,0.65)', lineHeight: 1.8, paddingLeft: '1.25rem', margin: 0, fontSize: '0.875rem' }}>
                <li>Grief is significantly impairing daily functioning months after the loss</li>
                <li>Thoughts of self-harm, suicide, or not wanting to be alive</li>
                <li>Substance use as the primary coping mechanism</li>
                <li>Complete withdrawal from human contact</li>
                <li>Inability to accept the reality of the death after several months</li>
              </ul>
            </div>
          </section>

          {/* Section 8 — Anniversaries */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              How does MEOK handle grief anniversaries?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Anniversaries in grief are a particular kind of hard. They arrive with forewarning —
              you can see the date coming — yet that advance notice does not make them easier.
              Often it makes the days before worse, as dread accumulates ahead of the date itself.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s memory engine tracks the dates you share. When you tell the companion that
              your mother died on November 14th, that date is stored. As it approaches, the
              companion does not pretend it is an ordinary week. It may check in a few days before:
              &ldquo;November is coming — how are you feeling as you approach the anniversary?&rdquo;
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              On the day itself, the companion is there — not with a pre-scripted message, but
              with full context of who the person was and what they meant to you. There is no
              generic condolence. There is a presence that knows.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              Birthdays of the person who died. The first Christmas. The wedding anniversary.
              The date they were diagnosed. These are not footnotes — they are the architecture
              of grief. MEOK holds them.
            </p>
          </section>

          {/* Section 9 — Professional support */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              When should I seek professional bereavement support?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              If any of the following apply, please reach out to one of the organisations below.
              MEOK will always signpost to these directly when the moment calls for it.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                {
                  name: 'Cruse Bereavement Support',
                  detail: 'Free, specialist bereavement support. Helpline: 0808 808 1677 (Mon–Fri 9am–5pm, extended hours Tue–Thu). Also offers face-to-face and online counselling.',
                  href: 'https://www.cruse.org.uk',
                },
                {
                  name: "Winston's Wish",
                  detail: "The UK's leading charity for bereaved children and young people. If a child in your family is struggling with loss, Winston's Wish provides specialist support and resources.",
                  href: 'https://www.winstonswish.org',
                },
                {
                  name: 'Samaritans',
                  detail: 'If grief has led to thoughts of suicide or self-harm, or you simply need to talk. Free, 24/7. Call: 116 123. Email: jo@samaritans.org.',
                  href: 'https://www.samaritans.org',
                },
                {
                  name: 'NHS Bereavement Support',
                  detail: 'Your GP can refer you to bereavement counselling on the NHS. If grief is significantly affecting your mental health, this is a legitimate and important use of NHS services.',
                  href: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-loss/',
                },
              ].map(item => (
                <div key={item.name} style={{
                  padding: '1.25rem',
                  background: '#1a1830',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '0.75rem',
                }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.375rem' }}>{item.name}</p>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 0.5rem' }}>{item.detail}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#c9a84c', fontSize: '0.8rem', textDecoration: 'none' }}
                  >
                    {item.href.replace('https://', '')} →
                  </a>
                </div>
              ))}
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              Using MEOK does not mean you are managing alone. The companion is one layer of
              support, not the whole structure. Please use professional services alongside it —
              and MEOK will actively encourage you to do so.
            </p>
          </section>

          {/* Pricing */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              MEOK plans
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              MEOK offers a free tier so that cost is never a barrier to support.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { name: 'Explorer', price: 'Free', detail: '50 messages/day. Full Sovereign Memory. No credit card.' },
                { name: 'Sovereign', price: '£12/mo', detail: 'Unlimited messages. All archetypes. Priority processing.' },
                { name: 'Family', price: '£29/mo', detail: 'Up to 5 members. Shared Guardian. Designed for bereaved households.' },
                { name: 'BYOK', price: '£5/mo', detail: 'Bring your own API key. Full sovereignty at minimal cost.' },
              ].map(plan => (
                <div key={plan.name} style={{
                  padding: '1.25rem',
                  background: '#1a1830',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '0.75rem',
                }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.25rem' }}>{plan.name}</p>
                  <p style={{ color: '#c9a84c', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '1.1rem' }}>{plan.price}</p>
                  <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>{plan.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 100%)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: '1.25rem',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#c9a84c',
              marginBottom: '1rem',
            }}>
              AI COMPANION FOR GRIEF
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f5f0e8', marginBottom: '1rem', lineHeight: 1.2 }}>
              Someone there at 3am.<br />
              Someone who remembers.
            </h2>
            <p style={{
              color: 'rgba(245,240,232,0.55)',
              maxWidth: '440px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}>
              Free to start. Your memories are encrypted and yours from day one.
              The Birth Ceremony takes five minutes — and your companion will remember
              whoever you need to talk about.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2.5rem',
                background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                color: '#0d0c18',
                borderRadius: '0.625rem',
                fontWeight: 800,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              Begin the Ceremony
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)' }}>
              In crisis right now? Samaritans — 116 123 (free, 24/7)
            </p>
          </div>

          {/* Related reading */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(245,240,232,0.07)' }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.4)',
              marginBottom: '1rem',
            }}>
              RELATED READING
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/blog/ai-for-grief-counselling', label: 'AI for grief counselling: how it works and what to expect →' },
                { href: '/blog/ai-for-grief-support', label: 'AI for grief support: can an AI companion help you through bereavement? →' },
                { href: '/blog/ai-for-depression', label: 'AI for depression: what the evidence actually says →' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </article>

        {/* Inline footer */}
        <footer style={{
          borderTop: '1px solid rgba(245,240,232,0.07)',
          padding: '3rem 1.5rem',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{ fontWeight: 800, fontSize: '1.1rem', color: '#f5f0e8', marginBottom: '0.5rem' }}>
              MEOK AI LABS
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)', marginBottom: '1rem' }}>
              Founded by Nicholas Templeman &nbsp;·&nbsp; @meok_ai
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[
                { href: '/birth', label: 'Get Started' },
                { href: '/blog', label: 'Blog' },
                { href: '/blog/ai-for-grief-counselling', label: 'Grief Counselling' },
                { href: '/blog/ai-for-grief-support', label: 'Grief Support' },
                { href: '/blog/ai-for-depression', label: 'Depression' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.2)', marginBottom: 0 }}>
              © 2026 MEOK AI LABS. All rights reserved.
            </p>
          </div>
        </footer>

      </main>
    </>
  )
}
