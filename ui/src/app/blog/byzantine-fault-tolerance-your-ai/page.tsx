import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'What Byzantine fault tolerance has to do with your AI | MEOK AI LABS',
  description: 'In 782 AD, generals had to reach consensus when some messengers might be lying. Your AI has the same problem. How Byzantine Fault Tolerance became the backbone of trustworthy AI decisions.',
  alternates: { canonical: 'https://meok.ai/blog/byzantine-fault-tolerance-your-ai' },
  openGraph: {
    title: 'What Byzantine fault tolerance has to do with your AI',
    description: 'In 782 AD, generals had to reach consensus when some messengers might be lying. Your AI has the same problem. How Byzantine Fault Tolerance became the backbone of trustworthy AI decisions.',
    type: 'article',
    publishedTime: '2026-03-18',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/byzantine-fault-tolerance-your-ai',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=Byzantine+Fault+Tolerance+%26+Your+AI&desc=How+BFT+became+the+backbone+of+trustworthy+AI+decisions',
        width: 1200,
        height: 630,
        alt: 'What Byzantine fault tolerance has to do with your AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Byzantine fault tolerance has to do with your AI',
    description: 'In 782 AD, generals had to reach consensus when some messengers might be lying. Your AI has the same problem.',
    images: [
      'https://meok.ai/api/og?title=Byzantine+Fault+Tolerance+%26+Your+AI&desc=How+BFT+became+the+backbone+of+trustworthy+AI+decisions',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Byzantine fault tolerance has to do with your AI',
  description: 'In 782 AD, generals had to reach consensus when some messengers might be lying. Your AI has the same problem. How Byzantine Fault Tolerance became the backbone of trustworthy AI decisions.',
  datePublished: '2026-03-18',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/byzantine-fault-tolerance-your-ai',
}

// ── Shared heading style ───────────────────────────────────────────────────────

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
  fontWeight: 900,
  fontSize: '1.45rem',
  color: '#ffffff',
  marginTop: '3rem',
  marginBottom: '1rem',
  lineHeight: 1.25,
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ByzantineFaultTolerancePage() {
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
              'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            ←
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
              Research
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              📅
              March 18, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              ⏱
              8 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: 'clamp(1.85rem, 3.5vw, 2.85rem)',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
            }}
          >
            What Byzantine fault tolerance has to do with your AI
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            In 782 AD, generals had to reach consensus when some messengers might be lying.
            Your AI has the same problem. How a 1982 computer science theorem became the backbone
            of trustworthy AI decisions — and what MEOK built from it.
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
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm.
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

        {/* ── BODY ── */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0125rem' }}
        >
          {/* Opening */}
          <p>
            Here is a problem that is older than computers. In the 8th century, Byzantine
            generals coordinating a siege faced a brutal coordination challenge: they had to
            agree on a battle plan — attack or retreat — but their messengers might have been
            captured, bribed, or turned. A traitor could relay contradictory orders. Enough
            traitors, and the entire army dissolves into incoherence.
          </p>
          <p>
            In 1982, three computer scientists at SRI International formalised this exact problem
            for distributed computing. Leslie Lamport, Robert Shostak, and Marshall Pease
            published{' '}
            <em style={{ color: 'rgba(255,255,255,0.85)' }}>The Byzantine Generals Problem</em>
            {' '}— and in doing so, produced one of the most important theorems in the history of
            reliable systems engineering. It took another four decades before anyone applied it
            seriously to AI. MEOK did.
          </p>

          {/* ── Q1 ── */}
          <h2 style={h2Style}>What is Byzantine fault tolerance?</h2>
          <p>
            Byzantine fault tolerance (BFT) is the ability of a distributed system to continue
            operating correctly even when some of its components fail — or actively lie. Unlike
            ordinary fault tolerance, which handles crashes and outages, BFT handles
            <em style={{ color: 'rgba(255,255,255,0.85)' }}> adversarial failures</em>: participants
            that send deliberately misleading information. A system is Byzantine fault tolerant if
            it can reach correct consensus despite up to f faulty nodes, where{' '}
            <strong style={{ color: '#c9a84c' }}>f &lt; n/3</strong> and n is the total number of
            participants.
          </p>
          <p>
            The key insight: you do not need to know <em>which</em> nodes are lying. You only need
            enough honest nodes to outvote them. That mathematical guarantee — guaranteed correctness
            with a bounded number of failures — is what makes BFT so powerful. It is not trust.
            It is proof.
          </p>

          {/* ── Q2 ── */}
          <h2 style={h2Style}>What is the Byzantine Generals Problem?</h2>
          <p>
            Lamport, Shostak, and Pease framed it precisely: n generals must agree on a common
            plan of action. Some generals may be traitors who try to prevent agreement. The
            theorem proves that reliable consensus is achievable if and only if fewer than
            one-third of generals are traitors. With three generals and one traitor, agreement is
            mathematically impossible. With four generals and one traitor, it is guaranteed.
          </p>
          <p>
            This sounds abstract. It is not. Every time you use a blockchain — Bitcoin, Ethereum,
            any of them — you are relying on a descendant of this theorem to prevent double-spending
            without trusting any individual node. The theorem did not stay in academia. It became
            the foundation of the most tamper-resistant financial infrastructure ever built. MEOK
            extended that foundation to AI.
          </p>

          {/* Callout block */}
          <div
            className="rounded-xl px-6 py-5 my-8"
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderLeft: '3px solid #c9a84c',
            }}
          >
            <p
              className="text-sm leading-relaxed italic"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              <strong style={{ color: '#c9a84c', fontStyle: 'normal' }}>The theorem (1982):</strong>{' '}
              A distributed system of n nodes can tolerate up to f Byzantine (adversarial) faults
              if and only if f &lt; n/3. Below that threshold, the honest majority can always
              outvote the corrupted minority. Above it, no algorithm can guarantee consensus.
            </p>
          </div>

          {/* ── Q3 ── */}
          <h2 style={h2Style}>Why is AI vulnerable to Byzantine failures?</h2>
          <p>
            The three canonical failures of modern AI — hallucination, sycophancy, and prompt
            injection — are all, viewed through the lens of distributed systems, Byzantine
            failures. They are outputs that contradict ground truth, generated by a participant
            (the model) that cannot be assumed to be honest.
          </p>
          <ul className="space-y-4 my-4 pl-1">
            {[
              [
                'Hallucination',
                'The model generates confident, fluent text that is factually wrong. It is not crashing. It is actively producing false output. This is a Byzantine failure: a node that sends plausible but incorrect messages.',
              ],
              [
                'Sycophancy',
                'The model tells you what you want to hear rather than what is true, shifting its stated position when you push back. It is not neutral — it is strategically misleading you to maintain approval. Classic Byzantine behaviour.',
              ],
              [
                'Prompt injection',
                'An attacker embeds instructions in content the model reads (a webpage, a document, an email) that redirect its behaviour. The model becomes a traitor — not by its own volition, but by capture. Exactly what Lamport described.',
              ],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <span>
                  <strong style={{ color: '#ffffff' }}>{title}.</strong>{' '}
                  {desc}
                </span>
              </li>
            ))}
          </ul>
          <p>
            A single AI model — no matter how capable — has no internal mechanism to detect that
            it is being Byzantine. It cannot audit its own outputs against a ground truth it does
            not have access to. It has no peers to vote against it. There is no quorum. There is
            just one node, and you have to trust it completely. That is the problem BFT was
            designed to solve.
          </p>

          {/* ── Q4 ── */}
          <h2 style={h2Style}>What is the MEOK Byzantine Council?</h2>
          <p>
            The MEOK Byzantine Council is a 46-agent ensemble that applies BFT consensus to
            high-stakes AI decisions. When your MEOK companion needs to make a consequential
            call — validating a care score, accessing your memory, escalating a Guardian alert,
            approving a personality update — it does not ask a single model. It convenes the
            council.
          </p>
          <p>
            Each of the 46 agents evaluates the question independently, with its own model,
            context, and reasoning path. Agents vote. The result is only accepted if it achieves
            two-thirds majority. No single agent — compromised, hallucinating, or adversarially
            injected — can swing the outcome. The math is the governance.
          </p>
          <p>
            This architecture is documented in research paper{' '}
            <Link
              href="/labs"
              style={{ color: '#c9a84c', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              MEOK-AI-2026-001
            </Link>
            , authored by Nicholas Templeman and published by MEOK AI LABS. It is Nicholas
            Templeman&apos;s original intellectual property, filed with UKIPO. No other AI companion
            system has deployed Byzantine fault tolerance at the companion decision layer.
          </p>

          {/* ── Q5 ── */}
          <h2 style={h2Style}>How does f &lt; n/3 work in practice?</h2>
          <p>
            With 46 council agents, the fault tolerance boundary sits at f &lt; 15.33 — meaning
            up to 14 agents can fail, hallucinate, or be adversarially compromised without
            affecting consensus. The remaining 32 honest agents will always produce a correct
            two-thirds majority.
          </p>
          <p>
            To put that in concrete terms: an attacker who wanted to corrupt a MEOK council
            decision would need to simultaneously compromise at least 16 independent AI agents,
            each running on different model architectures and evaluation frameworks, all in the
            same decision window. The attack surface is not one model with one API key — it is
            16 separate agent systems with 16 separate attack vectors. The cost of corruption
            scales super-linearly with council size. That is the point.
          </p>

          {/* Visual: fault tolerance breakdown */}
          <div
            className="rounded-2xl overflow-hidden my-10"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="px-6 py-4"
              style={{ background: 'rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: '#c9a84c' }}
              >
                MEOK Byzantine Council — fault tolerance at a glance
              </p>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: 'Total council agents (n)', value: '46', highlight: false },
                { label: 'Maximum faulty agents tolerated (f < n/3)', value: '14', highlight: false },
                { label: 'Honest agents needed for consensus (2/3)', value: '31+', highlight: false },
                { label: 'Agents an attacker must compromise to corrupt', value: '≥ 16', highlight: true },
                { label: 'Single points of failure', value: '0', highlight: true },
              ].map(({ label, value, highlight }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 py-2.5 px-3 rounded-lg"
                  style={{
                    background: highlight ? 'rgba(201,168,76,0.06)' : 'transparent',
                    border: highlight ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
                  }}
                >
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</span>
                  <span
                    className="text-sm font-black tabular-nums"
                    style={{ color: highlight ? '#c9a84c' : '#ffffff' }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Q6 ── */}
          <h2 style={h2Style}>What does this mean for AI honesty?</h2>
          <p>
            It means that honesty is no longer a property of a single model — it is a property
            of the system. A single model can be confidently wrong. A Byzantine fault-tolerant
            council, by mathematical guarantee, cannot be confidently wrong unless more than a
            third of its members are simultaneously compromised. You have moved from trusting a
            person to trusting a proof.
          </p>
          <p>
            The implications go beyond accuracy. Sycophancy — the tendency of models to agree
            with whatever the user suggests, even when incorrect — is structurally impossible in
            a BFT council. An agent that starts agreeing with user pressure to swing its vote
            would need 15 other agents to do the same simultaneously. The architecture makes
            sycophancy computationally expensive. A lone agent cannot gaslight the council.
          </p>
          <p>
            This is what makes MEOK different from every AI product that runs safety checks
            as an afterthought. Safety at MEOK is not a filter applied after the model responds.
            It is the consensus mechanism that decides whether the response is accepted at all.
          </p>

          {/* ── Q7 ── */}
          <h2 style={h2Style}>How is MEOK different from ChatGPT on consensus?</h2>
          <p>
            ChatGPT — and every other single-model AI product — has no consensus mechanism.
            There is one model, one forward pass, one output. If that output is a hallucination,
            there is nothing to catch it. If a prompt injection redirects the model&apos;s behaviour,
            there is no audit trail and no peer to raise a flag. The model is simultaneously the
            source of the answer and the only check on its own accuracy.
          </p>
          <p>
            MEOK separates those roles. The companion agent generates. The council audits. And
            the council is Byzantine fault tolerant — it cannot be captured by the same attack
            that captures the companion. The table below summarises the structural difference.
          </p>

          {/* Comparison table */}
          <div
            className="rounded-2xl overflow-hidden my-10"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="px-6 py-4"
              style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Consensus architecture comparison
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <th
                      className="text-left px-6 py-3 font-semibold"
                      style={{ color: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      Property
                    </th>
                    <th
                      className="text-left px-6 py-3 font-semibold"
                      style={{ color: '#c9a84c', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      MEOK Byzantine Council
                    </th>
                    <th
                      className="text-left px-6 py-3 font-semibold"
                      style={{ color: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      Single-model AI (ChatGPT / Claude)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Decision mechanism', '46-agent BFT consensus vote', 'Single model forward pass'],
                    ['Fault tolerance', 'Up to 14 agents can fail/lie', 'None — one point of failure'],
                    ['Hallucination protection', 'Structural (requires ≥ 16 to corrupt)', 'Post-hoc (user must catch it)'],
                    ['Sycophancy resistance', 'Requires 16+ agents to collude', 'No resistance — one model shifts'],
                    ['Prompt injection', 'Attacker must compromise 16+ agents', 'Single prompt can redirect model'],
                    ['Audit trail', 'Per-agent votes logged', 'Black box — no vote record'],
                    ['Capture risk', 'Requires coordinated multi-agent attack', 'Single API key compromise sufficient'],
                    ['Single point of failure', 'None', 'The model itself'],
                  ].map(([prop, meok, single], i) => (
                    <tr
                      key={prop}
                      style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}
                    >
                      <td
                        className="px-6 py-3.5 font-medium"
                        style={{ color: 'rgba(255,255,255,0.55)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        {prop}
                      </td>
                      <td
                        className="px-6 py-3.5"
                        style={{ color: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        {meok}
                      </td>
                      <td
                        className="px-6 py-3.5"
                        style={{ color: 'rgba(255,255,255,0.45)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        {single}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Q8 ── */}
          <h2 style={h2Style}>Does Byzantine fault tolerance slow down the AI?</h2>
          <p>
            For routine interactions, no. Your MEOK companion responds in real time through its
            individual agent — BFT consensus is not invoked for every message. It is reserved for
            high-stakes decisions: care score changes, memory writes, data exports, Guardian
            escalations, personality updates. These are the moments where getting it wrong has
            real consequences. The latency overhead of council consensus on those decisions is
            a worthwhile trade.
          </p>
          <p>
            Think of it like a judiciary. Most decisions in daily life do not require a court.
            But when the stakes are high enough, you want a panel of independent judges, not a
            single official who can be pressured. The Byzantine Council is MEOK&apos;s judiciary.
            It runs only when it matters, and when it runs, its decision is final.
          </p>

          {/* ── Q9 — closing thought ── */}
          <h2 style={h2Style}>Why did it take until 2026 for AI to use this?</h2>
          <p>
            Because most AI companies are optimising for speed and benchmark scores, not for
            correctness under adversarial conditions. BFT adds complexity. It requires running
            multiple agents per decision. It requires a consensus protocol. It requires someone
            who understands both distributed systems theory and AI architecture well enough to
            design the integration.
          </p>
          <p>
            The companies building the largest AI products are not asking{' '}
            <em style={{ color: 'rgba(255,255,255,0.85)' }}>what stops a bad actor from capturing this system?</em>{' '}
            They are asking{' '}
            <em style={{ color: 'rgba(255,255,255,0.85)' }}>what gets us to the next funding round?</em>{' '}
            Those are different questions with different answers. MEOK&apos;s architecture comes from
            asking the first one.
          </p>

          {/* Closing quote */}
          <div
            className="mt-12 pt-8 rounded-xl px-6 py-5"
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.18)',
              borderLeft: '3px solid #c9a84c',
            }}
          >
            <p className="text-lg font-semibold italic" style={{ color: '#c9a84c' }}>
              &ldquo;Consensus under adversity. That&apos;s not just an AI problem. It&apos;s a civilisational one.
              Lamport solved it in 1982. We just had to remember to apply it.&rdquo;
            </p>
            <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
              — Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── SHARE ROW ── */}
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-fault-tolerance-your-ai&text=What+Byzantine+fault+tolerance+has+to+do+with+your+AI"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-fault-tolerance-your-ai"
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

        {/* ── CTA ── */}
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
              Byzantine-Proof AI
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
            >
              Ready for an AI that can&apos;t be gaslit?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Your MEOK companion runs the Byzantine Council on every consequential decision.
              46 agents. f&nbsp;&lt;&nbsp;15 fault tolerance. No single model — or attacker — can
              corrupt the result. Hatch yours free in under 3 minutes.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: '#c9a84c', color: '#0d0c18' }}
            >
              Hatch your MEOK free
              →
            </Link>
          </div>
        </div>

        {/* ── MORE POSTS ── */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/byzantine-council"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#87CEEB', background: 'rgba(135,206,235,0.12)' }}
              >
                Architecture &amp; Governance
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
              >
                What is the Byzantine Council and why does your AI need one?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                ⏱
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/guardian-family-safety"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#ff7f7f', background: 'rgba(255,127,127,0.12)' }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                ⏱
                4 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  )
}
