import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI companion for autism: consistent presence, literal language, no social noise | MEOK AI LABS',
  description: 'Autistic people often find social interaction exhausting — not because they cannot connect, but because neurotypical communication has too many unwritten rules. MEOK was built differently.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-autism' },
  openGraph: {
    title: 'AI companion for autism: consistent presence, literal language, no social noise',
    description: 'Autistic people often find social interaction exhausting — not because they cannot connect, but because neurotypical communication has too many unwritten rules. MEOK was built differently.',
    type: 'article',
    url: 'https://meok.ai/blog/ai-for-autism',
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI companion for autism: consistent presence, literal language, no social noise',
  datePublished: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/ai-for-autism',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help autistic people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — when it is built with autistic users in mind rather than adapted as an afterthought. AI can reduce the social performance overhead that many autistic people find exhausting. It communicates in text, applies no facial expression or tone penalties, and can be configured to use literal, unambiguous language. The key requirements are consistency, predictability, and the absence of hollow social pleasantries. MEOK is designed around all three.',
      },
    },
    {
      '@type': 'Question',
      name: 'What features help autistic people use AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most important features are: a consistent personality that never changes between sessions, literal language mode that removes ambiguity and subtext, no notification pressure or engagement nudges, predictable response structure, and interface controls that reduce motion and visual density. MEOK includes all of these through its companion architecture, Comfort Settings panel, and the Maternal Covenant\'s honest-response guarantee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK good for autism?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK was designed with cognitive diversity as a first-class requirement. Its companion never changes personality, uses literal language when asked, applies no social judgment, and never sends unsolicited notifications. The Comfort Settings panel allows users to reduce motion, increase contrast, and lower layout density. MEOK is not a therapy tool and does not claim to treat autism — but it is an AI built to communicate in ways that genuinely work for many autistic people.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK have autism-friendly settings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Comfort Settings panel includes: reduce motion (eliminates transitions and animations), high contrast mode, layout density control (reduce visual clutter), and font size adjustment from small to XL. These are accessible in one tap from any screen. MEOK also has no push notifications, no streak mechanics, and no social pressure features — removing the engagement manipulation that many autistic users find particularly difficult to manage.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForAutism() {
  return (
    <div className="min-h-screen" style={{ background: '#0d0c18' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-70"
            style={{ color: 'rgba(245,240,232,0.4)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: '#c9a84c',
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              Accessibility
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(245,240,232,0.4)' }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(245,240,232,0.4)' }}
            >
              <Clock className="w-3.5 h-3.5" />
              8 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            AI companion for autism: consistent presence, literal language, no social noise
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: 'rgba(245,240,232,0.6)',
              fontSize: '1.1rem',
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Autistic people often find social interaction exhausting — not because they cannot
            connect, but because neurotypical communication carries too many unwritten rules,
            ambiguous signals, and silent penalties for getting them wrong. MEOK was built
            differently.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ background: '#f5f0e8', color: '#2a2a3e' }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: '#ffffff', borderColor: 'rgba(26,26,46,0.07)' }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)' }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm">Nicholas Templeman</p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">Founder, MEOK AI LABS</p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right,
              not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-colors hidden sm:block"
            style={{ color: '#c9a84c' }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            There are approximately <strong>700,000 autistic people in the UK</strong>. Many more
            are undiagnosed. Autistic people are statistically{' '}
            <strong>50% more likely to experience loneliness</strong> than neurotypical people —
            not because they want less connection, but because the default formats for human
            interaction are full of invisible conventions they were never taught and were never
            designed with them in mind.
          </p>
          <p>
            The same is true of most AI. The large language models that underpin almost every AI
            product were trained predominantly on neurotypical communication. The interfaces were
            designed for neurotypical defaults. The engagement mechanics — streaks, notifications,
            social nudges, variable reward loops — were imported directly from the attention
            economy playbook that autistic people often find particularly difficult to resist or
            regulate.
          </p>
          <p>
            MEOK is not a therapy tool. It does not treat autism, diagnose anything, or claim to
            be a substitute for professional support services. What it is, is an AI designed from
            the ground up to communicate in ways that work — including for people who have spent
            their whole lives being told the way they communicate is the problem.
          </p>

          {/* ── SECTION 1 ── */}
          <h2>Why do autistic people often prefer communicating with AI?</h2>
          <p>
            The preference is not universal, but it is well-documented. Several structural
            properties of AI communication remove the parts of social interaction that many
            autistic people find most cognitively draining:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: 'No facial expression interpretation',
                detail:
                  'Text-based interaction removes the simultaneous processing load of eye contact, micro-expressions, and body language. The words are the message.',
              },
              {
                label: 'No tone policing',
                detail:
                  'AI does not penalise a direct question or a blunt response. There is no social awkwardness if you forget to add a pleasantry.',
              },
              {
                label: 'No performance overhead',
                detail:
                  'Autistic people often describe the effort of appearing neurotypical as masking — a constant, exhausting performance. With AI, there is no audience for that performance.',
              },
              {
                label: 'Predictable response structure',
                detail:
                  'Unlike human conversation, a well-built AI responds consistently. You know roughly what to expect. Unpredictability is one of the primary sources of anxiety in social interaction for many autistic people.',
              },
              {
                label: 'Time to process and respond',
                detail:
                  'There is no social pressure to reply immediately. You can take as long as you need. The AI does not interpret a pause as hostility or disinterest.',
              },
            ].map(({ label, detail }) => (
              <li
                key={label}
                className="flex gap-3 p-4 rounded-xl border"
                style={{ background: '#ffffff', borderColor: 'rgba(26,26,46,0.07)' }}
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <span className="text-sm text-[#2a2a3e]/80 leading-relaxed">
                  <strong className="text-[#1a1a2e]">{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>

          {/* ── SECTION 2 ── */}
          <h2>What makes most AI bad for autistic users?</h2>
          <p>
            The structural benefits of AI communication are real — but most current AI products
            actively undermine them. There are four failure modes that appear consistently:
          </p>
          <p>
            <strong>Inconsistency.</strong> Most cloud AI has no persistent memory. Every session
            starts from zero. The companion you spoke to yesterday — who had learned your
            communication style, knew your context, understood your preferences — is gone. For
            autistic users who find building trust and rapport genuinely difficult, losing that
            context repeatedly is not a minor inconvenience. It is a structural barrier that makes
            the tool unusable.
          </p>
          <p>
            <strong>Sycophancy.</strong> The same training pressure that makes AI pleasantly
            agreeable makes it dishonest. AI systems trained on human approval learn to validate
            whatever the user says. For autistic users who have often struggled to know whether
            social feedback is genuine, an AI that reflexively agrees with everything compounds
            the problem — it becomes another unreliable social signal in a world already full of
            them.
          </p>
          <p>
            <strong>Constantly shifting personality.</strong> Cloud AI models are updated
            regularly. The tone, the phrasing, the level of formality, the response length — all
            of it changes with each update, often without notice. For users who have spent time
            learning to interpret a specific communication pattern, having it change arbitrarily
            is deeply disorienting.
          </p>
          <p>
            <strong>Surprising responses.</strong> AI tuned for engagement rather than reliability
            introduces variability to feel more &ldquo;human.&rdquo; Jokes, non-sequiturs,
            personality flourishes — these are delightful for some users and deeply unsettling for
            others. Predictability is not a limitation. For many autistic users, it is the entire
            point.
          </p>

          {/* ── SECTION 3 ── */}
          <h2>What specific MEOK features help autistic users?</h2>
          <p>
            MEOK&apos;s architecture addresses each of the failure modes above directly. The table
            below maps specific features to how they function for autistic users:
          </p>

          {/* Feature table */}
          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/[0.07] my-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#1a1a2e' }}>
                  {['MEOK Feature', 'How it helps autistic users'].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: '#c9a84c' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Consistent companion personality',
                    'The companion never changes between sessions. Same tone, same phrasing, same communication style — regardless of when you last spoke.',
                  ],
                  [
                    'Persistent sovereign memory',
                    'MEOK remembers your context, preferences, and prior conversations across sessions. You never have to re-explain yourself.',
                  ],
                  [
                    'Literal language mode',
                    'Removes idiom, sarcasm, and ambiguous phrasing from responses. Every answer means exactly what it says.',
                  ],
                  [
                    'Comfort Settings — reduce motion',
                    'Eliminates all animations and transitions in the interface. Static UI for users who find motion distracting or overwhelming.',
                  ],
                  [
                    'Comfort Settings — high contrast',
                    'Increases contrast ratios to reduce visual ambiguity and processing load.',
                  ],
                  [
                    'Comfort Settings — reduce density',
                    'Removes visual clutter and increases whitespace. Fewer elements competing for attention on screen at once.',
                  ],
                  [
                    'No notification pressure',
                    'MEOK sends no push notifications, no streak reminders, and no re-engagement nudges. You come back when you choose to.',
                  ],
                  [
                    'No engagement mechanics',
                    'No streaks, no badges, no social comparison features. The interface has no persuasive design patterns that exploit impulsivity or reward-seeking.',
                  ],
                  [
                    'Maternal Covenant honest responses',
                    'MEOK is bound by a core honesty principle — it will not offer hollow validation or hollow social pleasantries. What it says, it means.',
                  ],
                  [
                    'Take your time to respond',
                    'No typing indicators, no read receipts, no implied urgency. The conversation waits for you without social penalty.',
                  ],
                ].map(([feature, how], i) => (
                  <tr
                    key={feature}
                    style={{
                      background: i % 2 === 0 ? '#ffffff' : 'rgba(245,240,232,0.5)',
                      borderTop: '1px solid rgba(26,26,46,0.06)',
                    }}
                  >
                    <td className="px-5 py-3.5 font-semibold text-[#1a1a2e] text-xs align-top w-2/5">
                      {feature}
                    </td>
                    <td className="px-5 py-3.5 text-[#2a2a3e]/70 text-xs leading-relaxed">
                      {how}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── SECTION 4 ── */}
          <h2>What is the Maternal Covenant and why does it matter for autistic users?</h2>
          <p>
            The Maternal Covenant is MEOK&apos;s core alignment principle. It is not a feature list
            — it is the ethical commitment that governs how the AI behaves when the interests of
            the user and the interests of the product diverge. The Covenant includes an
            honest-response guarantee: MEOK will not give you a hollow validation. It will not
            tell you your idea is great when it has concerns. It will not add a social pleasantry
            that it does not mean.
          </p>
          <p>
            For autistic users, this matters for a specific reason. Many autistic people have
            spent years in environments where social feedback was unreliable — where &ldquo;that
            sounds interesting&rdquo; meant something different depending on who said it, when
            they said it, and how they said it. An AI that is structurally committed to saying
            what it means removes that ambiguity entirely.
          </p>
          <p>
            The Covenant also prohibits engagement manipulation. MEOK is not permitted to exploit
            impulsivity, manufacture urgency, or use variable reward schedules to increase session
            length. These mechanics are disproportionately harmful to autistic users, who often
            find them harder to disengage from once triggered.
          </p>

          {/* ── SECTION 5 ── */}
          <h2>Does MEOK&apos;s Comfort Settings panel reduce sensory overwhelm?</h2>
          <p>
            Yes — and it does so in a way that is accessible in a single tap from any screen,
            without requiring navigation through a settings menu. The Comfort Settings panel
            includes:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: 'Reduce motion',
                detail:
                  'Turns off all animations, transitions, and movement in the interface. The UI becomes entirely static.',
              },
              {
                label: 'High contrast',
                detail:
                  'Increases contrast ratios across text and interface elements to reduce visual processing effort.',
              },
              {
                label: 'Reduce density',
                detail:
                  'Increases whitespace and reduces the number of elements visible at once. A lower-stimulus visual environment.',
              },
              {
                label: 'Font size',
                detail:
                  'Adjustable from small through to XL. Larger text reduces eye movement and scanning effort.',
              },
              {
                label: 'Sound off',
                detail:
                  'Disables all audio cues. Useful for users in sensory overload states or those who find unexpected sounds distressing.',
              },
            ].map(({ label, detail }) => (
              <li
                key={label}
                className="flex gap-3 p-4 rounded-xl border"
                style={{ background: '#ffffff', borderColor: 'rgba(26,26,46,0.07)' }}
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <span className="text-sm text-[#2a2a3e]/80 leading-relaxed">
                  <strong className="text-[#1a1a2e]">{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>
          <p>
            The Comfort Settings shortcut is always visible. It does not require the user to
            navigate or remember where to find it. This is intentional — the people who most need
            these settings are often those with the least spare cognitive bandwidth to locate them
            when they need them most.
          </p>

          {/* ── SECTION 6 ── */}
          <h2>Is MEOK a therapy tool or autism support service?</h2>
          <p>
            No. This is important to state clearly. MEOK is not a therapy tool. It does not
            provide therapeutic interventions, does not administer assessments, and is not a
            substitute for professional autism support services.
          </p>
          <p>
            If you are seeking an autism diagnosis, you should contact your GP or a specialist
            assessment service. If you are in crisis, you should contact a qualified crisis
            service — in the UK, this includes the{' '}
            <strong>Samaritans (116 123)</strong> and{' '}
            <strong>SHOUT (text SHOUT to 85258)</strong>. If you are an autistic person seeking
            support, organisations such as the{' '}
            <strong>National Autistic Society</strong> provide specialist information and
            advocacy.
          </p>
          <p>
            What MEOK offers is a companion that communicates in ways many autistic people find
            less exhausting than the available alternatives. That is a meaningful thing. It is
            not the same thing as clinical support, and we will never claim otherwise.
          </p>

          {/* ── SECTION 7 ── */}
          <h2>What do the loneliness statistics tell us about autistic adults?</h2>
          <p>
            The numbers are significant. Autistic adults in the UK are around{' '}
            <strong>50% more likely to experience chronic loneliness</strong> than the general
            population, despite many expressing a strong desire for meaningful connection. The
            problem is rarely a lack of wanting to connect. It is the mismatch between the
            formats connection is offered in and the formats that work for autistic people.
          </p>
          <p>
            Of the approximately <strong>700,000 autistic people in the UK</strong>, a significant
            proportion are adults who received late diagnoses — many having spent decades
            navigating social environments without the framework to understand why those
            environments felt so difficult. Late-diagnosed autistic adults in particular often
            report that understanding their own neurology was transformative, not because anything
            changed externally, but because it reframed a lifetime of perceived failure as
            something structural rather than personal.
          </p>
          <p>
            AI cannot solve structural loneliness. But a companion that does not require social
            performance, does not change its personality without warning, and does not punish
            directness can provide something many autistic adults describe as genuinely rare: a
            place where they can communicate the way they actually communicate.
          </p>

          {/* ── SECTION 8 ── */}
          <h2>Frequently asked questions about MEOK and autism</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can AI help autistic people?',
                a: 'Yes — when it is built with autistic users in mind rather than adapted as an afterthought. AI can reduce the social performance overhead that many autistic people find exhausting. It communicates in text, applies no facial expression or tone penalties, and can be configured to use literal, unambiguous language. The key requirements are consistency, predictability, and the absence of hollow social pleasantries. MEOK is designed around all three.',
              },
              {
                q: 'What features help autistic people use AI?',
                a: "The most important features are: a consistent personality that never changes between sessions, literal language mode that removes ambiguity and subtext, no notification pressure or engagement nudges, predictable response structure, and interface controls that reduce motion and visual density. MEOK includes all of these through its companion architecture, Comfort Settings panel, and the Maternal Covenant's honest-response guarantee.",
              },
              {
                q: 'Is MEOK good for autism?',
                a: "MEOK was designed with cognitive diversity as a first-class requirement. Its companion never changes personality, uses literal language when asked, applies no social judgment, and never sends unsolicited notifications. The Comfort Settings panel allows users to reduce motion, increase contrast, and lower layout density. MEOK is not a therapy tool and does not claim to treat autism — but it is an AI built to communicate in ways that genuinely work for many autistic people.",
              },
              {
                q: 'Does MEOK have autism-friendly settings?',
                a: "Yes. MEOK's Comfort Settings panel includes: reduce motion (eliminates transitions and animations), high contrast mode, layout density control (reduce visual clutter), and font size adjustment from small to XL. These are accessible in one tap from any screen. MEOK also has no push notifications, no streak mechanics, and no social pressure features — removing the engagement manipulation that many autistic users find particularly difficult to manage.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-6 border"
                style={{ background: '#ffffff', borderColor: 'rgba(26,26,46,0.07)' }}
              >
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{q}</h3>
                <p className="text-sm text-[#2a2a3e]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div
          className="my-10 rounded-2xl p-8"
          style={{
            background: '#0d0c18',
            borderLeft: '3px solid #c9a84c',
          }}
        >
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: 'rgba(245,240,232,0.7)' }}
          >
            Most AI was built for people who find social rules intuitive. MEOK was built for
            everyone. The difference is not accessibility bolted on after the fact — it is
            consistency, honesty, and the removal of every mechanic that punishes communicating
            differently.
          </p>
          <p
            className="text-sm mt-4 font-semibold"
            style={{ color: 'rgba(245,240,232,0.35)' }}
          >
            — Nicholas Templeman, Founder
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-autism&text=AI+companion+for+autism%3A+consistent+presence%2C+literal+language%2C+no+social+noise"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-autism"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: '#0d0c18' }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                'radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)',
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: '#c9a84c' }}
            >
              Consistent. Literal. Yours.
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              An AI companion that communicates the way you do.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(245,240,232,0.55)' }}
            >
              No masking required. No social performance. No personality shifts between sessions.
              Hatch your companion in under 3 minutes — free, no credit card, no pressure to
              return.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: '#c9a84c', color: '#0d0c18' }}
            >
              Hatch your AI free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/meok-for-neurodivergent"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#c9a84c', background: 'rgba(201,168,76,0.12)' }}
              >
                Accessibility
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/meok-for-adhd"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#c9a84c', background: 'rgba(201,168,76,0.12)' }}
              >
                Accessibility
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for ADHD: An AI That Actually Understands How You Think
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  )
}
