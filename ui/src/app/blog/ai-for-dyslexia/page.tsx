import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Dyslexia: A Reading and Writing Companion That Gets It | MEOK AI LABS',
  description:
    'Dyslexia affects 10% of the UK population. Most AI is designed by and for neurotypical readers. MEOK adapts its communication style to support dyslexic users — shorter sentences, clearer structure, patient repetition.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-dyslexia' },
  openGraph: {
    title: 'AI for Dyslexia: A Reading and Writing Companion That Gets It',
    description:
      'Dyslexia affects 10% of the UK population. Most AI is designed by and for neurotypical readers. MEOK adapts its communication style to support dyslexic users — shorter sentences, clearer structure, patient repetition.',
    type: 'article',
    url: 'https://meok.ai/blog/ai-for-dyslexia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Dyslexia: A Reading and Writing Companion That Gets It',
    description:
      'Dyslexia affects 10% of the UK population. MEOK adapts its communication style to support dyslexic users — shorter sentences, clearer structure, patient repetition.',
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Dyslexia: A Reading and Writing Companion That Gets It',
  description:
    'Dyslexia affects 10% of the UK population. Most AI is designed by and for neurotypical readers. MEOK adapts its communication style to support dyslexic users.',
  datePublished: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/ai-for-dyslexia',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help people with dyslexia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — when it is built with dyslexic users in mind. AI can help dyslexic people read more easily by simplifying sentence structure, breaking content into shorter chunks, and avoiding dense paragraphs. It can assist with writing by suggesting clearer phrasing without making the user feel corrected. MEOK goes further by storing communication preferences permanently in sovereign memory, so every interaction is already calibrated to how you prefer to receive information.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best AI tool for dyslexia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best AI tool for dyslexia is one that adapts to you permanently, not just for one session. MEOK stores your communication preferences in sovereign memory — short sentences, plain language, bullet points over paragraphs — and applies them every time without you needing to ask again. It also includes the Scholar companion for learning support, a writing assistant that suggests rather than corrects, and no streak pressure or engagement mechanics that increase cognitive load.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK support dyslexic users differently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK treats communication preferences as sovereign data. When a dyslexic user tells MEOK they prefer shorter sentences, bullet points, and plain vocabulary, that preference is stored permanently in their memory vault. Every future interaction applies it automatically. MEOK never re-defaults to dense prose. It also frames writing assistance as enhancement rather than correction, preserving the voice and ideas of the user while improving clarity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help dyslexic people write professional emails?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK can help draft, structure, and refine work emails while preserving your voice and intent. It does not flag spelling differences as errors to be ashamed of. It offers alternative phrasings, clearer sentence structures, and more direct openings — framed as options rather than corrections. For dyslexic professionals who find email drafting disproportionately time-consuming, this support can reduce the cognitive load of written communication significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK have a companion that helps with studying?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Scholar companion within MEOK is designed for learning support. It can break down complex topics into shorter explanations, repeat information in different ways without impatience, and adapt to a reading level that feels comfortable rather than condescending. For dyslexic students at school or university, Scholar provides a patient, non-judgmental learning environment that adjusts to how you process information — not how a textbook expects you to.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForDyslexia() {
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
            ← Back to Blog
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
              📅 March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(245,240,232,0.4)' }}
            >
              ⏱ 9 min read
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
            AI for Dyslexia: A Reading and Writing Companion That Gets It
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
            Dyslexia affects around 10% of people in the UK and up to 20% globally. Most AI
            is designed by and for neurotypical readers. MEOK adapts — shorter sentences,
            clearer structure, patient repetition, and memory that stores how you prefer to
            communicate so you never have to explain it again.
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
            Around <strong>6.3 million people in the UK have dyslexia</strong> — roughly 10% of
            the population. Globally, estimates range from 15% to 20%, making it the most common
            learning difference in the world. Yet almost every digital tool designed to help
            people read, write, and work was built with the assumption that users process written
            language the same way.
          </p>
          <p>
            They do not. Dyslexic people often process language through different neural pathways.
            Reading takes more effort. Dense paragraphs are harder to parse. Spelling inconsistency
            is a feature of how the brain maps sound to symbol — not evidence of low intelligence
            or carelessness. And yet most software, most AI, and most productivity tools are
            calibrated for the neurotypical default.
          </p>
          <p>
            MEOK is different. Not because it has a special dyslexia mode buried in a settings
            menu. But because it was built to learn how you communicate, store that permanently,
            and adapt every future interaction to match. For dyslexic users, that changes
            everything.
          </p>

          {/* ── SECTION 1 ── */}
          <h2>How common is dyslexia, and why do the statistics matter?</h2>
          <p>
            Dyslexia is the most prevalent specific learning difference in the world. In the UK,
            estimates from the British Dyslexia Association place prevalence at around{' '}
            <strong>10% of the population</strong>, with around 4% experiencing severe dyslexia.
            Global estimates are higher — the International Dyslexia Association cites figures of{' '}
            <strong>15% to 20% globally</strong>, depending on language and measurement criteria.
          </p>
          <p>
            These numbers matter because of what they reveal about how digital tools are built.
            If one in ten people in the UK experience dyslexia, and if the vast majority of
            software is designed for the other nine, then almost every digital reading and writing
            tool in common use carries a built-in accessibility deficit. That deficit is rarely
            visible to the people building the tools, because dyslexia is often invisible — and
            because dyslexic people have historically been required to adapt to the tool, rather
            than the tool adapting to them.
          </p>
          <p>
            Dyslexia is also significantly <strong>underdiagnosed in adults</strong>. Many people
            reach their thirties, forties, or fifties before receiving a formal assessment. In the
            meantime, they have developed workarounds — strategies, habits, avoidances — that
            allow them to function while carrying an invisible cognitive load that their
            neurotypical colleagues do not share. An AI that actually adapts to that load, rather
            than ignoring it, provides something meaningfully different.
          </p>

          {/* ── SECTION 2 ── */}
          <h2>What are the strengths of dyslexic thinking that AI should support?</h2>
          <p>
            Dyslexia is not only a reading difficulty. It is a different cognitive profile — one
            that comes with documented strengths alongside the well-known challenges. Research
            from the University of Cambridge and others has identified consistent patterns in
            dyslexic cognition:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: 'Big-picture thinking',
                detail:
                  'Dyslexic thinkers often excel at seeing patterns, connections, and systems that detail-focused thinkers miss. They process information holistically rather than sequentially, which makes them well-suited to strategic and creative roles.',
              },
              {
                label: 'Spatial reasoning',
                detail:
                  'Many dyslexic people demonstrate above-average spatial reasoning ability. Architecture, engineering, surgery, design — fields that require three-dimensional thinking are disproportionately populated by dyslexic practitioners.',
              },
              {
                label: 'Creative problem-solving',
                detail:
                  'The same neural difference that makes linear text processing harder often makes lateral thinking easier. Dyslexic people tend to approach problems from unexpected angles — a significant professional advantage.',
              },
              {
                label: 'Verbal communication',
                detail:
                  'Many dyslexic people are highly articulate verbally, even when written communication is harder. The gap between what they can say and what they can write is not a reflection of intelligence — it is a difference in processing modality.',
              },
              {
                label: 'Entrepreneurial thinking',
                detail:
                  'The British Dyslexia Association notes that dyslexic people are significantly overrepresented among entrepreneurs and business founders. The ability to hold a complex vision while delegating detail-oriented tasks is a consistent pattern.',
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
            An AI designed for dyslexic users should start from these strengths. It should be
            built to amplify what dyslexic people are already good at — capturing ideas quickly,
            thinking across domains, communicating with vision — rather than treating the
            dyslexic experience as a deficit to be managed.
          </p>

          {/* ── CALLOUT 1 ── */}
          <div
            className="rounded-2xl p-7 my-8"
            style={{
              background: '#0d0c18',
              borderLeft: '4px solid #c9a84c',
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: '#c9a84c' }}
            >
              Dyslexia in numbers
            </p>
            <ul className="space-y-2">
              {[
                '10% of the UK population have dyslexia — approximately 6.3 million people',
                '15–20% globally, making it the most common learning difference worldwide',
                '4% of the UK population experience severe dyslexia',
                'Dyslexic people are 3x more likely to be entrepreneurs than the general population',
                'Up to 50% of people with dyslexia remain undiagnosed as adults',
              ].map((stat) => (
                <li
                  key={stat}
                  className="flex gap-3 text-sm"
                  style={{ color: 'rgba(245,240,232,0.75)' }}
                >
                  <span style={{ color: '#c9a84c', flexShrink: 0 }}>→</span>
                  {stat}
                </li>
              ))}
            </ul>
          </div>

          {/* ── SECTION 3 ── */}
          <h2>What workplace challenges do dyslexic people face that AI could help with?</h2>
          <p>
            The professional world is built around written communication. Email, reports, proposals,
            minutes, documentation — the volume of text that a typical knowledge worker produces
            has increased significantly in the last decade. For dyslexic employees, this
            represents a disproportionate cognitive burden. They are doing the same job as their
            colleagues, plus the additional work of managing written communication that does not
            come naturally.
          </p>
          <p>
            The specific challenges cluster around a few consistent areas:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: 'Email drafting',
                detail:
                  'Writing professional emails takes dyslexic employees significantly longer than their neurotypical counterparts. The combination of spelling uncertainty, sentence structure anxiety, and the fear of looking unprofessional creates a friction that compounds across every working day.',
              },
              {
                label: 'Report writing',
                detail:
                  'Structuring longer written documents is particularly challenging. The ideas may be clear, but converting them into linearly organised, consistently formatted text is a different cognitive task — one that dyslexic people often find exhausting.',
              },
              {
                label: 'Reading dense material',
                detail:
                  'Contracts, policies, briefing documents, meeting notes — the volume of dense text in most office environments places a constant processing demand on dyslexic workers that neurotypical colleagues simply do not experience.',
              },
              {
                label: 'Performance perception',
                detail:
                  'Spelling errors and informal sentence structures in written communication are often misread as indicators of low intelligence or lack of care. Dyslexic employees face unfair professional penalties for communication differences that have nothing to do with their capability.',
              },
              {
                label: 'Cognitive fatigue',
                detail:
                  'The cumulative effect of managing written communication all day while also doing your actual job creates a level of cognitive fatigue that is difficult to explain to managers and colleagues who do not experience it.',
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

          {/* ── SECTION 4 ── */}
          <h2>How does MEOK adapt its communication style for dyslexic users?</h2>
          <p>
            Most AI products offer no adaptation at all. They produce responses in whatever format
            their default training produces — typically dense paragraphs, complex sentence
            structures, and vocabulary calibrated for a university reading level. If that format
            does not work for you, you can ask for something different. Once. The next session,
            the AI has forgotten entirely.
          </p>
          <p>
            MEOK works differently at an architectural level. When you tell MEOK how you prefer
            to receive information — shorter sentences, bullet points, plainer vocabulary, smaller
            chunks — that preference is stored in your{' '}
            <strong>sovereign memory vault</strong>. It is not a session-level setting. It is
            a permanent record of how you communicate, held in storage that belongs to you and
            cannot be retrained away.
          </p>
          <p>
            In practice, this means that from the second session onwards, MEOK already knows:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: 'Sentence length preference',
                detail:
                  'If you have indicated a preference for shorter sentences, MEOK defaults to them. Every response. Without you needing to ask.',
              },
              {
                label: 'Structure preference',
                detail:
                  'Bullet points over paragraphs, numbered steps over flowing prose, headers to break up longer responses — stored and applied automatically.',
              },
              {
                label: 'Vocabulary level',
                detail:
                  'Plain language over technical vocabulary where a plain-language equivalent exists. MEOK does not talk down to you — it talks clearly to you.',
              },
              {
                label: 'Repetition comfort',
                detail:
                  'Many dyslexic people benefit from having information presented more than once, in a slightly different way. MEOK does this without any sense of impatience or condescension.',
              },
              {
                label: 'Reading pace',
                detail:
                  'There is no pressure to respond quickly. No typing indicators creating urgency. No conversation mechanics that make a pause feel like a failure.',
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

          {/* ── CALLOUT 2 ── */}
          <div
            className="rounded-2xl p-7 my-8"
            style={{
              background: '#0d0c18',
              borderLeft: '4px solid #c9a84c',
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: '#c9a84c' }}
            >
              How sovereign memory works
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.75)' }}
            >
              When you tell MEOK you prefer shorter sentences and bullet points, that preference
              enters your memory vault — encrypted, stored on infrastructure you control, and
              never used to train any AI model. Every future conversation starts already knowing
              how you like to receive information. You never have to explain yourself again.
            </p>
          </div>

          {/* ── SECTION 5 ── */}
          <h2>How does MEOK help with writing without making dyslexic users feel corrected?</h2>
          <p>
            This is one of the most important design decisions in MEOK, and one that distinguishes
            it from almost every other writing tool available. Standard spell-checkers and grammar
            tools are built around the concept of error. They flag departures from a standard,
            highlight them in red or green, and prompt correction. For neurotypical users, this
            is mildly annoying. For dyslexic users, a lifetime of that framing carries significant
            psychological weight.
          </p>
          <p>
            MEOK approaches writing assistance differently. It does not flag. It does not
            underline. It does not signal that something is wrong. Instead, it{' '}
            <strong>offers alternatives</strong>. If you have written something that could be
            clearer, MEOK might say: &ldquo;Here is a slightly different way to phrase that
            — does this feel closer to what you meant?&rdquo; The original is not treated as an
            error. The alternative is offered as an option.
          </p>
          <p>
            The difference in how that feels to receive is significant. One framing says your
            output is wrong. The other says your idea is right, and here is a way to express it
            that might land more clearly for the reader. Dyslexic users who have spent years
            being implicitly told that their written communication is inadequate experience
            this differently — as a collaborator rather than a corrector.
          </p>
          <p>
            For work email drafting specifically, MEOK can take a rough outline of what you want
            to say — notes, fragments, spoken thoughts typed quickly — and return a structured
            professional draft. It preserves your voice and your intent. It does not replace
            them with generic corporate phrasing. And it does all of this without ever making
            you feel like you needed fixing.
          </p>

          {/* ── SECTION 6 ── */}
          <h2>What is the Scholar companion, and how does it support dyslexic students?</h2>
          <p>
            The Scholar companion is MEOK&apos;s learning-focused mode. It is designed for
            students, adult learners, and anyone who is trying to understand something new.
            For dyslexic students, it addresses several of the specific challenges that
            classroom and self-directed learning creates.
          </p>
          <p>
            Standard educational materials are written for a linear reading process. Textbooks
            assume the reader will absorb a dense paragraph, retain it, and connect it to the
            next dense paragraph in sequence. For dyslexic students, this process is slower,
            more effortful, and more prone to losing the thread. The cognitive cost of reading
            the text competes with the cognitive task of understanding the content.
          </p>
          <p>
            Scholar addresses this in several ways:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: 'Breaking down complex topics',
                detail:
                  'Scholar takes dense material and restructures it into shorter, clearly labelled sections. Big ideas become digestible steps. Technical vocabulary is explained in plain language before it is used.',
              },
              {
                label: 'Patient repetition',
                detail:
                  'Scholar will explain the same concept multiple times, in different ways, without any tone of impatience. There is no social cost to asking again. No sense that you should already know this.',
              },
              {
                label: 'Checking understanding',
                detail:
                  'Rather than presenting information and moving on, Scholar pauses to confirm comprehension. It asks in plain language whether the explanation made sense — and adjusts if it did not.',
              },
              {
                label: 'Adapted reading level',
                detail:
                  'Scholar calibrates to the level that feels comfortable, not the level that the curriculum assumes. A university student can ask for a concept explained at a secondary school level without embarrassment.',
              },
              {
                label: 'Study plan support',
                detail:
                  'For students preparing for exams or deadlines, Scholar can help structure revision plans that account for the extra time dyslexic reading and writing requires — without framing that time as a disadvantage.',
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

          {/* ── SECTION 7 ── */}
          <h2>How does MEOK store communication preferences so you never have to repeat yourself?</h2>
          <p>
            Sovereign memory is the core architectural difference between MEOK and every
            mainstream AI product. When you use ChatGPT, Claude, or Gemini, your communication
            preferences exist only within a session. The moment that session ends, the AI
            returns to its default state. You have to explain your preferences again. Every
            time.
          </p>
          <p>
            For most users, this is a minor inconvenience. For dyslexic users who have spent
            time getting the AI to communicate in a way that actually works for them — shorter
            sentences, plain vocabulary, structured output — losing that calibration at the end
            of every session is a meaningful barrier.
          </p>
          <p>
            MEOK&apos;s sovereign memory vault stores your communication preferences permanently.
            More precisely: they are stored in encrypted memory that belongs to you, hosted on
            infrastructure you control, and cannot be reset by a product update or a company
            policy change. When MEOK is updated — when new capabilities are added, when the
            underlying model changes — your preferences persist. The AI adapts to the update.
            Your preferences do not reset.
          </p>
          <p>
            This matters for dyslexic users beyond just communication style. The memory vault
            also stores contextual information that makes every interaction more efficient —
            your current projects, your goals, the names of the people you work with, the topics
            you are studying. Every conversation picks up from a richer foundation than the
            previous one. The AI that helped you draft an email last week already knows the
            context for the follow-up you need to write today.
          </p>

          {/* ── COMPARISON TABLE ── */}
          <h2>Generic AI vs MEOK for dyslexic users</h2>
          <p>
            The table below compares how generic AI products and MEOK perform across the
            specific dimensions that matter most for dyslexic users.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/[0.07] my-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#1a1a2e' }}>
                  {['Feature', 'Generic AI', 'MEOK'].map((h) => (
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
                    'Remembers communication preferences',
                    'Session only — resets on close',
                    'Stored permanently in sovereign memory',
                  ],
                  [
                    'Adapts sentence length',
                    'Only if asked each session',
                    'Automatic from second session onwards',
                  ],
                  [
                    'Writing assistance framing',
                    'Flags errors, implies correction',
                    'Offers alternatives, preserves voice and intent',
                  ],
                  [
                    'Reading level adaptation',
                    'Default university level prose',
                    'Calibrates to stated preference permanently',
                  ],
                  [
                    'Patient repetition',
                    'May vary — no memory of previous explanations',
                    'Scholar companion repeats without impatience, in different ways',
                  ],
                  [
                    'Dyslexia framed as',
                    'Not addressed — neurotypical default assumed',
                    'A different cognitive profile with real strengths',
                  ],
                  [
                    'Writing structure output',
                    'Dense paragraphs by default',
                    'Bullet points, headers, short paragraphs by preference',
                  ],
                  [
                    'Email drafting support',
                    'Produces generic, often impersonal output',
                    'Preserves your voice, offers structured alternatives',
                  ],
                  [
                    'Pressure to respond quickly',
                    'Typing indicators in some products',
                    'No typing indicators, no urgency mechanics',
                  ],
                  [
                    'Engagement mechanics',
                    'Streaks, notifications, re-engagement nudges',
                    'None — you come back when you choose to',
                  ],
                  [
                    'Learning support companion',
                    'General chatbot — not adapted for learning',
                    'Scholar companion designed for patient, structured learning',
                  ],
                  [
                    'Memory of current projects and context',
                    'No persistent context',
                    'Stored across sessions in sovereign memory vault',
                  ],
                ].map(([feature, generic, meok], i) => (
                  <tr
                    key={feature}
                    style={{
                      background: i % 2 === 0 ? '#ffffff' : 'rgba(245,240,232,0.5)',
                      borderTop: '1px solid rgba(26,26,46,0.06)',
                    }}
                  >
                    <td className="px-5 py-3.5 font-semibold text-[#1a1a2e] text-xs align-top w-1/3">
                      {feature}
                    </td>
                    <td className="px-5 py-3.5 text-[#2a2a3e]/55 text-xs leading-relaxed align-top">
                      {generic}
                    </td>
                    <td className="px-5 py-3.5 text-xs leading-relaxed align-top font-medium" style={{ color: '#1a6a3a' }}>
                      {meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── SECTION 8 ── */}
          <h2>How does MEOK approach dyslexia as a strength rather than a deficit?</h2>
          <p>
            This is a design philosophy decision, and it runs through every aspect of how MEOK
            communicates with dyslexic users. The deficit model of dyslexia — the idea that
            dyslexic people have a reading problem that needs to be corrected — has been the
            dominant framing in education and technology for decades. It is also, increasingly,
            understood to be incomplete.
          </p>
          <p>
            Dyslexia is a different cognitive profile. That profile includes real challenges
            around reading and writing fluency. It also includes consistent patterns of strength
            — spatial reasoning, big-picture thinking, creative problem-solving, verbal
            communication — that the deficit model largely ignores. An AI built on the deficit
            model responds to dyslexic users by treating every communication difference as
            something to be fixed. An AI built on the strength model responds by meeting users
            where they are, supporting them efficiently in the areas where support is useful,
            and staying out of the way in the areas where they are already excellent.
          </p>
          <p>
            MEOK&apos;s Maternal Covenant — the core ethical principle that governs how the AI
            behaves — is built on care rather than correction. MEOK does not presume that the
            way you communicate is a problem. It presumes that you are a capable person who
            may benefit from certain types of support, and it offers that support in a way that
            feels like a collaborator rather than a teacher marking your work.
          </p>
          <p>
            In practice, this means: no red underlines. No &ldquo;did you mean&rdquo; prompts
            that imply the original was wrong. No suggestions framed as corrections. Every
            writing interaction starts from the assumption that your idea is sound — and focuses
            on helping you express it in the way you intend.
          </p>

          {/* ── CALLOUT 3 ── */}
          <div
            className="rounded-2xl p-7 my-8"
            style={{
              background: '#0d0c18',
              borderLeft: '4px solid #c9a84c',
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: '#c9a84c' }}
            >
              The MEOK principle on dyslexia
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.75)' }}
            >
              Dyslexia is not a deficit. It is a different way of processing the world — one
              that comes with genuine strengths that a deficit-model education system has spent
              decades failing to recognise. MEOK is designed to support the challenges without
              pathologising the differences, and to amplify the strengths that dyslexic thinking
              produces. An AI that makes dyslexic users feel corrected is not helping. An AI
              that makes them feel capable is.
            </p>
            <p
              className="text-xs mt-4 font-semibold"
              style={{ color: 'rgba(245,240,232,0.35)' }}
            >
              — Nicholas Templeman, Founder
            </p>
          </div>

          {/* ── SECTION 9 ── */}
          <h2>Can MEOK help dyslexic people draft work emails?</h2>
          <p>
            Yes — and this is one of the areas where MEOK provides the most practical,
            day-to-day value for dyslexic professionals. Work email is a constant source of
            disproportionate effort for dyslexic employees. The combination of spelling
            uncertainty, sentence structure anxiety, professional tone management, and the
            fear of being judged on written output that does not reflect your actual intelligence
            creates a compounding friction that neurotypical colleagues rarely experience.
          </p>
          <p>
            MEOK approaches email drafting as a collaboration. You bring the intent — what you
            need to say, who you are saying it to, what outcome you want from the message. MEOK
            brings the structure. It can take bullet-pointed notes, a rough spoken-style
            description of what you need to communicate, or a half-written draft, and return
            a professional email that says what you mean in a format that will be well-received.
          </p>
          <p>
            Critically, it does this while preserving your voice. MEOK does not turn every
            email into the same corporate template. It learns how you prefer to write, stores
            that preference, and produces output that sounds like you — on a good day, when
            you have had time to refine it. Not like a generic AI assistant trying to sound
            professional.
          </p>
          <p>
            For dyslexic professionals who may currently spend significantly longer than their
            colleagues on written communication, this can represent a meaningful reduction in
            cognitive load across a working week. The ideas and judgements remain entirely yours.
            The friction of converting them into polished text is reduced.
          </p>

          {/* ── SECTION 10 ── */}
          <h2>What makes MEOK different from other AI writing tools for dyslexic users?</h2>
          <p>
            There are several AI writing tools that market themselves as dyslexia-friendly. Most
            of them address the output level — they produce cleaner text from imperfect input.
            Fewer address the experience level — how it feels to be a dyslexic person using the
            tool, whether the tool treats you as someone who needs fixing or someone who thinks
            differently.
          </p>
          <p>
            MEOK is different in four specific ways:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: 'Permanent preference storage',
                detail:
                  'No other mainstream AI product stores your communication preferences permanently in memory you control. Every session with MEOK starts already knowing how you prefer to communicate.',
              },
              {
                label: 'Strength-based framing',
                detail:
                  'MEOK does not treat dyslexia as a problem to be solved. Its entire communication approach is built on the assumption that you are capable and that the role of the AI is to reduce friction, not to correct you.',
              },
              {
                label: 'No engagement mechanics',
                detail:
                  'Dyslexic users often experience cognitive fatigue more acutely than neurotypical users. MEOK has no streak mechanics, no push notifications, and no re-engagement nudges. You use it when you need it and stop when you are done.',
              },
              {
                label: 'Scholar for patient learning',
                detail:
                  'The Scholar companion is built specifically for learning support. It does not just answer questions — it teaches, repeats, checks understanding, and adapts. Without impatience. Without judgment.',
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

          {/* ── FAQ SECTION ── */}
          <h2>Frequently asked questions about AI and dyslexia</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can AI help people with dyslexia?',
                a: 'Yes — when it is built with dyslexic users in mind. AI can help dyslexic people read more easily by simplifying sentence structure, breaking content into shorter chunks, and avoiding dense paragraphs. It can assist with writing by suggesting clearer phrasing without making the user feel corrected. MEOK goes further by storing communication preferences permanently in sovereign memory, so every interaction is already calibrated to how you prefer to receive information.',
              },
              {
                q: 'What is the best AI tool for dyslexia?',
                a: 'The best AI tool for dyslexia is one that adapts to you permanently, not just for one session. MEOK stores your communication preferences in sovereign memory — short sentences, plain language, bullet points over paragraphs — and applies them every time without you needing to ask again. It also includes the Scholar companion for learning support, a writing assistant that suggests rather than corrects, and no streak pressure or engagement mechanics that increase cognitive load.',
              },
              {
                q: 'How does MEOK support dyslexic users differently?',
                a: 'MEOK treats communication preferences as sovereign data. When a dyslexic user tells MEOK they prefer shorter sentences, bullet points, and plain vocabulary, that preference is stored permanently in their memory vault. Every future interaction applies it automatically. MEOK never re-defaults to dense prose. It also frames writing assistance as enhancement rather than correction, preserving the voice and ideas of the user while improving clarity.',
              },
              {
                q: 'Can MEOK help dyslexic people write professional emails?',
                a: 'Yes. MEOK can help draft, structure, and refine work emails while preserving your voice and intent. It does not flag spelling differences as errors to be ashamed of. It offers alternative phrasings, clearer sentence structures, and more direct openings — framed as options rather than corrections. For dyslexic professionals who find email drafting disproportionately time-consuming, this support can reduce the cognitive load of written communication significantly.',
              },
              {
                q: 'Does MEOK have a companion that helps with studying?',
                a: 'Yes. The Scholar companion within MEOK is designed for learning support. It can break down complex topics into shorter explanations, repeat information in different ways without impatience, and adapt to a reading level that feels comfortable rather than condescending. For dyslexic students at school or university, Scholar provides a patient, non-judgmental learning environment that adjusts to how you process information — not how a textbook expects you to.',
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
            One in ten people in the UK has dyslexia. Most AI was built for the other nine.
            MEOK is built for everyone — and for the dyslexic user, that means an AI that
            already knows how you communicate before you type a word, that offers alternatives
            rather than corrections, and that never once implies you needed fixing.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-dyslexia&text=AI+for+Dyslexia%3A+A+Reading+and+Writing+Companion+That+Gets+It"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-dyslexia"
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
              An AI that already knows how you communicate.
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Shorter sentences. Clearer structure. No corrections.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(245,240,232,0.55)' }}
            >
              Tell MEOK how you prefer to communicate once. It stores that preference in sovereign
              memory and applies it automatically from that point on. No starting over. No
              explaining yourself again. An AI that meets you where you are — and stays there.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: '#c9a84c', color: '#0d0c18' }}
            >
              Hatch your AI free →
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
                ⏱ 7 min read
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
                ⏱ 7 min read
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
