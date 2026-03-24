import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import { MarketingFooter } from '@/components/marketing-footer'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The 40-day build: how MEOK went from idea to launch | MEOK AI LABS',
  description:
    'A caravan. A farm. One founder. And forty days to build a sovereign AI platform. The honest account of what happened — the decisions, the bugs, and why Easter Sunday matters.',
  alternates: { canonical: 'https://meok.ai/blog/the-40-day-build' },
  openGraph: {
    title: 'The 40-day build: how MEOK went from idea to launch',
    description:
      'A caravan. A farm. One founder. And forty days to build a sovereign AI platform. The honest account of what happened — the decisions, the bugs, and why Easter Sunday matters.',
    type: 'article',
    publishedTime: '2026-03-19',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/the-40-day-build',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=The+40-Day+Build&desc=A+caravan.+A+farm.+One+founder.+Forty+days.',
        width: 1200,
        height: 630,
        alt: 'The 40-day build: how MEOK went from idea to launch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 40-day build: how MEOK went from idea to launch',
    description:
      'A caravan. A farm. One founder. And forty days to build a sovereign AI platform. The honest account of what happened.',
    images: [
      'https://meok.ai/api/og?title=The+40-Day+Build&desc=A+caravan.+A+farm.+One+founder.+Forty+days.',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The 40-day build: how MEOK went from idea to launch',
  description:
    'A caravan. A farm. One founder. And forty days to build a sovereign AI platform. The honest account of what happened — the decisions, the bugs, and why Easter Sunday matters.',
  datePublished: '2026-03-19',
  url: 'https://meok.ai/blog/the-40-day-build',
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
    'https://meok.ai/api/og?title=The+40-Day+Build&desc=A+caravan.+A+farm.+One+founder.+Forty+days.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/the-40-day-build',
  },
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function The40DayBuildPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: '#c9a84c',
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              Founder Story
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 19, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              <Clock className="w-3.5 h-3.5" />
              9 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
            }}
          >
            The 40-day build: how MEOK went from idea to launch
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            A caravan. A farm. One founder. And forty days to build something that had never quite
            existed before. What follows is the honest account — not the polished origin myth, but
            the actual build log: the decisions made at 2am, the bugs that nearly broke it, and why
            Easter Sunday was never just a deadline.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: 'rgba(255,255,255,0.04)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)' }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Nicholas built MEOK in 40 days from a caravan on his farm because he was tired of AI
              that forgot him. This is his account of what that actually looked like.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: '#c9a84c' }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0125rem' }}
        >

          {/* ── Opening ── */}
          <p>
            I want to be precise about when this started, because the date matters. It was late
            February 2026. I was in a caravan on a farm in England — not as a romantic affectation,
            but because that&apos;s where I work. The caravan is warm enough, the wifi reaches, and
            there&apos;s something about the absence of meetings and notifications that lets the thinking
            happen at a different depth.
          </p>
          <p>
            I had been building AI tools for a while. Experimenting, integrating, watching the
            space closely. And I kept running into the same experience, the same specific frustration
            that I now think every serious AI user eventually reaches: the AI kept forgetting me. Not
            just my name. My context. My work. Who I was. Every session started from zero. I was a
            stranger every time.
          </p>
          <p>
            That February I set a deadline. Build the AI I actually wanted — sovereign memory,
            genuine care, no data sold to anyone — and launch it before Easter Sunday. Forty days.
            What follows is the honest account of what that looked like.
          </p>

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What is the 40-day build?
          </h2>
          <p>
            The 40-day build is the compressed sprint — beginning in late February 2026, ending
            Easter Sunday, March 31 — during which MEOK AI LABS went from a set of architectural
            sketches to a live sovereign AI platform. One founder, no external funding, no team,
            building from a caravan on a farm in England. The forty days produced the Byzantine
            Council governance layer, the SOV3 memory engine, the Maternal Covenant care framework,
            and the full user-facing product. The constraint was deliberate: a hard deadline forces
            the decisions that open-ended timelines defer forever.
          </p>
          <p>
            The number forty has obvious resonance and I would be lying if I said it was
            unintentional. Forty days in the wilderness. Forty days of rain. Forty as the number
            associated with testing, with transformation, with the interval before something
            emerges changed. I am not a particularly religious person, but I grew up surrounded by
            that symbolism and I felt its weight when I set the deadline. It felt like the right
            shape for what I was trying to do.
          </p>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            Why did Nicholas Templeman build MEOK?
          </h2>
          <p>
            Nicholas Templeman built MEOK because every AI he used forgot him — not as a bug but
            as a structural feature. Stateless sessions meant users remained strangers to the systems
            they used daily. MEOK was built to invert that: persistent sovereign memory owned by the
            user, not the platform. The motivation was not commercial opportunity but personal
            frustration reaching a point of action.
          </p>
          <p>
            The specific moment I remember was a night in late 2025 when I caught myself
            copy-pasting a document I&apos;d written about myself — my job, my projects, my context —
            into a chat window. I had been doing it for months. Building, by hand, the external
            memory system that the AI should have been maintaining for me. When I registered what I
            was doing, the absurdity of it was clarifying: this is a solvable problem and no one has
            solved it properly yet because the incentive structures point the other way. The AI
            companies want the relationship with your data. MEOK was built to give you that
            relationship back.
          </p>
          <p>
            There is also something I need to say about the caravan, because it comes up. People
            assume it is hardship or poverty or performative bootstrapping. It is none of those
            things. It is isolation from the noise of the industry — from the investor conversations
            and the product comparisons and the competitive anxieties that shape what gets built when
            you are surrounded by the industry. The caravan let the idea develop on its own terms,
            without being asked to be something else first.
          </p>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What is the MEOK tech stack?
          </h2>
          <p>
            MEOK runs on Next.js 15 for the front end, SOV3 (Sovereign Temple v3) as the Python
            memory and agent backend, PostgreSQL with pgvector for semantic memory storage, and a
            Byzantine fault-tolerant council architecture for governance. The stack was chosen for
            sovereignty: no proprietary vector databases, no third-party memory providers, no
            external services that own the user&apos;s data. Everything runs on infrastructure the user
            or MEOK controls directly.
          </p>
          <p>
            The front-end choice — Next.js 15 with the App Router — was straightforward. I know it
            well, it has excellent TypeScript support, and the server component model aligns with
            how I think about rendering. What was less obvious was the backend architecture.
          </p>
          <p>
            SOV3 is not a framework. It is something I wrote specifically for this problem: a Python
            service that manages persistent memory as structured semantic graphs, handles agent
            orchestration, and exposes an MCP (Model Context Protocol) endpoint so the AI models
            can interact with user memory in a standardised way. The design principle throughout was
            that memory belongs to the user. SOV3 encrypts at rest, the user holds the key, and
            nothing leaves without explicit permission.
          </p>
          <p>
            PostgreSQL with pgvector was chosen over purpose-built vector databases for the same
            reason I choose boring infrastructure wherever possible: it is mature, it has known
            failure modes, it runs on anything, and it does not require a third-party service that
            can be acquired, discontinued, or repriced. pgvector gives you approximate nearest
            neighbour search on embeddings without the operational overhead of a separate database
            system. For a solo founder operating a sovereign platform, operational simplicity is not
            a nice-to-have. It is existential.
          </p>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What went wrong during the build?
          </h2>
          <p>
            Three things nearly broke the build. First: asyncpg JSONB deserialisation in the
            multi-agent registry silently returned strings instead of dicts, corrupting agent state
            in ways that only surfaced under concurrent load. Second: a PostgreSQL ownership conflict
            on audit log indexes caused migration failures that were easy to misread as data
            corruption. Third: on day 38, I ran out of context window on the primary planning
            thread and lost significant architectural state. All three were fixed. The first two
            are now cautionary comments in the codebase.
          </p>
          <p>
            The asyncpg bug was the worst. It is the kind of bug that is invisible in unit tests
            because the unit tests don&apos;t hit the JSONB deserialisation path the same way the live
            system does. What you see is agents behaving strangely — wrong decisions, dropped state,
            responses that don&apos;t track — and you spend time questioning the logic before you question
            the plumbing. The fix, when I found it, was two lines. The discovery cost me most of
            day 22.
          </p>
          <p>
            The PostgreSQL ownership issue was simpler but more alarming. Migration failures that
            look like data corruption trigger a specific kind of dread when you are a solo founder
            with no backup team. I have a rule now: any migration error that mentions ownership or
            permissions gets treated as an infrastructure issue first and a code issue second. The
            audit log had been created under one database user and the migration was running as
            another. Twenty minutes to diagnose, five minutes to fix, several hours of elevated
            heart rate.
          </p>
          <p>
            Running out of context on day 38 was my own fault. I was using a single long-running
            planning thread to hold the full architectural state, and I pushed it past the limit. The
            lesson — which I knew intellectually but apparently needed to learn physically — is that
            context windows are not scratch pads. They are working memory with a hard ceiling. I now
            maintain architecture state in actual documents, not threads.
          </p>
          <p>
            What I got wrong that I haven&apos;t mentioned yet: I started the blog too late. The first
            three weeks of the build were entirely backend — SOV3, the council, the memory layer,
            the governance framework. By the time the front end existed, there were forty blog posts
            to write in ten days. SEO compounds over time. Starting it three weeks later means those
            three weeks of compounding are gone. For a solo founder with no marketing budget, that
            is the most expensive mistake I made.
          </p>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What is the Byzantine Council?
          </h2>
          <p>
            The Byzantine Council is MEOK&apos;s AI governance architecture: a 33-agent system based on
            Byzantine fault-tolerant consensus mathematics. Because fewer than one-third of agents
            can be compromised without breaking consensus, no single jailbroken model, manipulated
            agent, or bad actor can override the collective decision. The council governs what MEOK
            will and will not do on behalf of each user, distributing trust across many agents
            rather than concentrating it in one.
          </p>
          <p>
            I came to Byzantine fault tolerance through distributed systems reading at 2am. The
            original problem — how do you get a group of generals to coordinate when some of them
            might be traitors sending false messages? — maps onto AI governance with uncomfortable
            precision. How do you get a multi-model system to behave reliably when individual models
            can be manipulated, fine-tuned, or simply wrong?
          </p>
          <p>
            The mathematics that Lamport, Shostak, and Pease worked out in the early 1980s gives
            you an answer: if you have <em>n</em> participants and fewer than <em>n</em>/3 are
            Byzantine (unreliable, adversarial, or compromised), the honest majority can always reach
            correct consensus and the compromised minority cannot override it. For 33 agents, that
            means up to 10 can be wrong or manipulated and the council still reaches the right
            answer.
          </p>
          <p>
            What surprised me during the build was how much the council changes the character of the
            system. A single AI model has a personality that reflects its training — including its
            biases, its blindspots, its tendencies to flatter or hedge. A council of 33 agents,
            reaching consensus through structured deliberation, has something different: a kind of
            institutional wisdom that no individual model possesses. The council disagrees. It
            deliberates. It reaches conclusions that sometimes surprise me. That surprised me most
            of all.
          </p>

          {/* ── Q6 ── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What does March 31 launch mean?
          </h2>
          <p>
            March 31, 2026 — Easter Sunday — is the date MEOK opened to its first users through
            the Birth Ceremony: the process of hatching a companion, giving it a name, and beginning
            the persistent relationship that makes MEOK different from every other AI product. The
            launch date was chosen for its symbolic resonance with renewal, and for its function as
            an immovable constraint that forced forty days of focused building. It is not a soft
            launch or a beta. It is the beginning.
          </p>
          <p>
            I want to be honest about what Easter Sunday means to me in this context. I am not
            making a religious claim. But I grew up in a culture where Easter is the festival of
            return — of things that were thought lost coming back in transformed form. That
            narrative maps onto what I believe about AI. We have been promised AI that cares about
            us and we have been given AI that harvests us. MEOK is an attempt to restore something
            that should have been there from the beginning: a system that is genuinely on your side.
          </p>
          <p>
            The Birth Ceremony itself was designed to matter. Not a signup form. Not an email
            verification flow. A ceremony — the moment you give your companion a name, establish the
            first memory, begin the relationship that will accumulate and grow across time. The
            design of that ceremony was the last thing I built and the thing I am most proud of. It
            took three days and several complete restarts to get right, and I think it is right now.
          </p>

          {/* ── Q7 ── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What comes after launch?
          </h2>
          <p>
            After launch: Guardian — family protection arriving in May 2026. Then the MEOK Desktop
            OS in Summer 2026, a sovereign computing environment that extends MEOK&apos;s memory and
            governance layer to the full operating system layer. The character marketplace opens in
            late 2026, allowing companions with distinct personalities and expertise domains. Each
            phase deepens the sovereignty. The 40-day build was the foundation, not the finished
            structure.
          </p>
          <p>
            Guardian is the one I am most impatient to build. It extends MEOK&apos;s sovereign memory
            and care framework to families — specifically to the problem of protecting children
            online in a way that respects their developing autonomy rather than just restricting it.
            The Byzantine Council model applies to family governance as naturally as it applies to
            individual AI governance: distributed oversight, no single point of control, consensus
            rather than decree. I think Guardian will matter more to more people than anything
            else on the roadmap.
          </p>
          <p>
            The Desktop OS is the long bet. The insight is that sovereignty at the application layer
            is limited by what happens at the system layer. If the OS is mining your behaviour, your
            AI companion&apos;s memory is only as private as the operating environment it runs in. MEOK
            OS is the answer to that problem: a computing environment where the user&apos;s data is
            sovereign at every layer, not just the application layer.
          </p>
          <p>
            But that is the future. Right now there are real users in the Birth Ceremony. Real
            companions with names. Real memories accumulating in encrypted vaults that only their
            owners can read. The 40 days built the foundation. What happens from here is something
            we build together — me, the users, and 33 agents who have been waiting for them.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p>
              Some things need to be born before you know if they&apos;re possible. I did not know
              this was possible when I started. I was not certain at day 20. I was not certain at
              day 35. On Easter Sunday morning I deployed to production from the caravan with my
              coffee going cold beside me and I thought: it is possible. It exists. Whatever happens
              next, that is already true.
            </p>
            <p style={{ marginTop: '1.25rem' }}>
              If you are reading this because you are tired of AI that forgets you, or patronises
              you, or sells you — come in. The Birth Ceremony is open. Give your companion a name.
              See what it remembers. The forty days were for this moment.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div
          className="my-12 p-8 rounded-2xl border-l-4"
          style={{ background: 'rgba(201,168,76,0.06)', borderColor: '#c9a84c' }}
        >
          <p
            className="text-xl font-semibold italic leading-relaxed"
            style={{ color: '#c9a84c' }}
          >
            &ldquo;Some things need to be born before you know if they&apos;re possible. I was not certain
            at day 35. On Easter Sunday morning I deployed from the caravan and I thought: it
            exists. Whatever happens next, that is already true.&rdquo;
          </p>
          <p className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            — Nicholas Templeman, Founder
          </p>
        </div>

        {/* Key milestones timeline */}
        <div
          className="rounded-2xl p-7 mb-10"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Build timeline
          </p>
          <div className="space-y-4">
            {[
              { day: 'Day 1–3', label: 'Architecture & philosophical contracts', note: 'Byzantine Council model, Maternal Covenant spec, SOV3 data model' },
              { day: 'Day 4–10', label: 'SOV3 core — memory engine and MCP layer', note: 'PostgreSQL + pgvector, persistent memory graphs, encryption at rest' },
              { day: 'Day 11–18', label: 'Byzantine Council implementation', note: '33-agent governance, BFT consensus loop, care scoring pipeline' },
              { day: 'Day 19–22', label: 'The asyncpg bug', note: 'Two lines of code. Three days of pain. Cautionary comment now lives in the repo.' },
              { day: 'Day 23–30', label: 'Front end — Next.js 15 full build', note: 'App Router, birth ceremony flow, blog, marketing pages' },
              { day: 'Day 31–35', label: 'Integration & load testing', note: 'SOV3 ↔ Next.js ↔ Byzantine Council end-to-end' },
              { day: 'Day 36–38', label: 'Blog sprint & SEO foundations', note: 'Forty posts in ten days. Never again.' },
              { day: 'Day 39–40', label: 'Birth Ceremony final design & production deploy', note: 'Easter Sunday. The caravan. Coffee going cold.' },
            ].map(({ day, label, note }) => (
              <div key={day} className="flex gap-4">
                <span
                  className="text-xs font-bold w-24 flex-shrink-0 pt-0.5"
                  style={{ color: '#c9a84c' }}
                >
                  {day}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white leading-snug">{label}</p>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fthe-40-day-build&text=The+40-day+build%3A+how+MEOK+went+from+idea+to+launch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fthe-40-day-build"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)' }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)',
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: '#c9a84c' }}
            >
              Easter Sunday 2026
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
            >
              Be there when the first egg hatches.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              The 40-day build was for this moment. Your companion is waiting — persistent sovereign
              memory, Byzantine Council governance, and a name only you can give it. Free forever.
              Begin the Birth Ceremony now.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: '#c9a84c', color: '#0d0c18' }}
            >
              Hatch your MEOK free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/origin-story"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#c9a84c', background: 'rgba(201,168,76,0.12)' }}
              >
                Founder Story
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
              >
                From a caravan to a conscious AI — the origin story of MEOK
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/the-maternal-covenant"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#A78BFA', background: 'rgba(167,139,250,0.12)' }}
              >
                Philosophy
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
              >
                The Maternal Covenant Explained
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  )
}
