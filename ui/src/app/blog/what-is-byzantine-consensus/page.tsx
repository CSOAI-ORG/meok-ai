import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'What is Byzantine Consensus and Why Does Your AI Need It? | MEOK AI LABS',
  description:
    'A single AI can confidently tell you something completely wrong. Byzantine consensus changes that. How a 1982 theorem about traitorous generals became the architecture of trustworthy AI.',
  alternates: { canonical: 'https://meok.ai/blog/what-is-byzantine-consensus' },
  openGraph: {
    title: 'What is Byzantine Consensus and Why Does Your AI Need It?',
    description:
      'A single AI can confidently tell you something completely wrong. Byzantine consensus changes that. How a 1982 theorem became the architecture of trustworthy AI.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/what-is-byzantine-consensus',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=What+is+Byzantine+Consensus%3F&desc=Why+your+AI+needs+more+than+one+voice',
        width: 1200,
        height: 630,
        alt: 'What is Byzantine Consensus and Why Does Your AI Need It?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Byzantine Consensus and Why Does Your AI Need It?',
    description:
      'A single AI can confidently state something wrong. 46 agents that must reach BFT consensus are much harder to fool.',
    images: [
      'https://meok.ai/api/og?title=What+is+Byzantine+Consensus%3F&desc=Why+your+AI+needs+more+than+one+voice',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is Byzantine Consensus and Why Does Your AI Need It?',
  description:
    'A single AI can confidently tell you something completely wrong. Byzantine consensus changes that. How a 1982 theorem about traitorous generals became the architecture of trustworthy AI.',
  datePublished: '2026-03-24',
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
    logo: { '@type': 'ImageObject', url: 'https://meok.ai/logo.png' },
  },
  url: 'https://meok.ai/blog/what-is-byzantine-consensus',
  image:
    'https://meok.ai/api/og?title=What+is+Byzantine+Consensus%3F&desc=Why+your+AI+needs+more+than+one+voice',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/what-is-byzantine-consensus',
  },
  keywords:
    'Byzantine consensus AI, Byzantine fault tolerance explained, AI consensus mechanism, trustworthy AI architecture',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Byzantine Generals Problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Byzantine Generals Problem, formalised by Lamport, Shostak, and Pease in 1982, describes the challenge of reaching reliable consensus in a distributed system where some participants may send deliberately false messages. Reliable agreement is mathematically guaranteed only when fewer than one-third of participants are faulty.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Byzantine fault tolerance in AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Byzantine fault tolerance (BFT) applied to AI means using a multi-agent voting architecture where no single model can determine the final output. As long as the number of faulty or hallucinating agents f is less than n/3 (where n is total agents), the honest majority always produces the correct consensus decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does single-model AI hallucinate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Single-model AI hallucination is an architectural problem, not a bug. There is one model, one forward pass, and no peer check on the output. If the model generates a confident falsehood, nothing catches it. There is no quorum, no adversarial review, and no error correction — just one node trusted entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK\'s Byzantine Council work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Byzantine Council is a 46-agent ensemble. Each agent evaluates a high-stakes decision independently. A response is only accepted when it achieves a two-thirds majority vote. With 46 agents, up to 15 can fail or hallucinate (f < n/3 = 15.33) without corrupting the consensus result.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Byzantine consensus make AI responses slower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Honestly, slightly — for consequential decisions where the council is invoked. MEOK mitigates this through parallel inference across agents and result caching. Routine conversational responses do not pass through council consensus; BFT voting is reserved for high-stakes decisions like memory writes, care score validation, and Guardian escalations.',
      },
    },
  ],
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

export default function WhatIsByzantineConsensusPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)',
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
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              ⏱
              9 min read
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
            What is Byzantine Consensus and Why Does Your AI Need It?
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            ChatGPT can confidently tell you something completely wrong. That is not a bug —
            it is architecture. Single-model inference has no error correction. A 1982 theorem
            about traitorous generals turns out to be the solution.
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
          {/* ── INTRO ── */}
          <p>
            Ask your AI what year a particular event happened and it will answer with complete
            confidence. It might be wrong. Ask it to summarise a document and it may invent
            sentences that were never there. Push back on a factual error and a sycophantic model
            will agree with you — even if you are also wrong. These are not edge cases or early
            bugs that will eventually be patched. They are the inevitable consequence of a
            structural choice: one model, one output, no peer review.
          </p>
          <p>
            The problem is not intelligence. A sufficiently large language model can pass the bar
            exam and write coherent academic prose. The problem is verification. Without a mechanism
            to check one model&apos;s output against another, there is nothing to catch the confident
            error before it reaches you. The model cannot audit itself — it does not know what it
            does not know.
          </p>
          <p>
            The solution to this problem was discovered in 1982 — not by AI researchers, but by
            three computer scientists solving a military communication puzzle. Their theorem, applied
            properly, makes AI truthfulness a property of architecture rather than a property of
            model quality. This is what MEOK built.
          </p>

          {/* ── H2 1 ── */}
          <h2 style={h2Style}>What is the Byzantine Generals Problem?</h2>
          <p>
            Imagine a Byzantine army camped outside an enemy city. Several divisions, each
            commanded by a general, must agree on a single plan: attack at dawn, or withdraw.
            Their only means of communication is messengers who travel between camps. Some
            generals may be traitors. Some messengers may have been turned. A traitor will
            send different messages to different generals — telling one &ldquo;attack&rdquo; and
            another &ldquo;retreat&rdquo; — to create confusion and cause the attack to fail.
          </p>
          <p>
            The question Lamport, Shostak, and Pease formalised in their 1982 paper is: under
            these conditions, can the loyal generals reliably agree on a plan?
          </p>
          <p>
            The answer depends on one number: the ratio of traitors to total generals. If fewer
            than one-third of the generals are traitors, the loyal majority can always detect
            contradictions and reach correct consensus. If one-third or more are traitors,
            agreement is mathematically impossible — the traitors have enough influence to create
            irresolvable ambiguity.
          </p>

          {/* Callout: the theorem */}
          <div
            className="rounded-xl px-6 py-5 my-8"
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderLeft: '3px solid #c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              <strong style={{ color: '#c9a84c', fontStyle: 'normal' }}>
                The Byzantine Generals Problem (Lamport, Shostak, Pease — 1982):
              </strong>{' '}
              A group of n commanders must agree on a plan. Up to f may be traitors sending
              contradictory messages. Reliable consensus is achievable{' '}
              <em>if and only if</em> <strong style={{ color: '#c9a84c' }}>f &lt; n/3</strong>.
              With three generals and one traitor, agreement is impossible. With four generals
              and one traitor, it is guaranteed.
            </p>
          </div>

          <p>
            The paper was written for distributed computer systems, but the analogy runs deep.
            Replace &ldquo;generals&rdquo; with &ldquo;AI agents&rdquo;, replace &ldquo;traitors&rdquo; with
            &ldquo;hallucinating or adversarially compromised models&rdquo;, and the theorem says
            something directly useful: if you run enough agents and require a two-thirds majority,
            the honest ones will always outvote the corrupted ones.
          </p>

          {/* ── H2 2 ── */}
          <h2 style={h2Style}>What is Byzantine fault tolerance?</h2>
          <p>
            Byzantine fault tolerance (BFT) is the property of a distributed system that allows
            it to continue operating correctly even when some participants fail — not by crashing,
            but by sending actively wrong or contradictory information. Ordinary fault tolerance
            handles components that go silent. BFT handles components that lie.
          </p>
          <p>
            A system achieves Byzantine fault tolerance by using a consensus algorithm that
            collects independent votes from all participants, discards irreconcilable minority
            positions, and accepts only the result that commands a supermajority. The mathematical
            condition is strict:{' '}
            <strong style={{ color: '#c9a84c' }}>f &lt; n/3</strong>, where n is the total
            number of participants and f is the maximum number of faulty ones. Below that
            threshold, the correct result is guaranteed regardless of what the faulty participants
            do. Above it, no algorithm can help you.
          </p>
          <p>
            This is the theorem that underlies blockchains. Bitcoin&apos;s proof-of-work and
            Ethereum&apos;s proof-of-stake are both practical implementations of BFT consensus at
            scale — systems designed so that no minority of participants, however malicious, can
            forge or reverse a transaction. The same mathematics apply to AI decisions. MEOK
            applied them.
          </p>

          {/* ── H2 3 ── */}
          <h2 style={h2Style}>Why does single-model AI hallucinate?</h2>
          <p>
            Hallucination is not a training defect. It is a consequence of architecture. A large
            language model generates the most statistically likely continuation of a prompt. When
            it reaches a question at the edge of its training data, it does not have a &ldquo;don&apos;t
            know&rdquo; register. It has a probability distribution over next tokens, and the most
            probable continuation is often a plausible-sounding answer — whether or not that
            answer is true.
          </p>
          <p>
            The deeper problem is that there is no correction mechanism. A single model is the
            sole participant in its own decision. It cannot compare its answer to a peer&apos;s
            answer. It cannot notice that its confidence exceeds its evidence. It cannot flag
            disagreement because there is no one to disagree with. The output it generates is
            the output you receive.
          </p>
          <p>
            In distributed systems terms: there is one node. That node is the quorum. Any
            failure — including adversarial failure, including hallucination — passes directly
            through to the user with no interception. The architecture has no error budget.
          </p>

          {/* Callout: the sycophancy problem */}
          <div
            className="rounded-xl px-6 py-5 my-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Why confidence is the danger signal
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              The most dangerous AI output is not the uncertain answer hedged with qualifiers.
              It is the confident answer delivered in authoritative prose — the invented citation
              with a real-looking DOI, the historical date stated without hesitation, the medical
              advice presented without caveats. Confidence is the model&apos;s default register.
              There is no internal signal that distinguishes &ldquo;I know this&rdquo; from
              &ldquo;I am generating the most plausible-sounding continuation.&rdquo;
            </p>
          </div>

          {/* ── H2 4 ── */}
          <h2 style={h2Style}>How does MEOK&apos;s Byzantine Council work?</h2>
          <p>
            MEOK&apos;s Byzantine Council is a 46-agent ensemble. When your companion faces a
            consequential decision — validating a memory write, scoring a care assessment,
            escalating a Guardian alert, approving a personality update — it does not ask a
            single model. It convenes the council.
          </p>
          <p>
            Each of the 46 agents is a specialist with a distinct focus: factual verification,
            emotional safety, threat detection, memory integrity, long-term coherence, and more.
            They evaluate the question independently, using their own model, context window,
            and reasoning path. Then they vote. A result is only accepted if it achieves a
            two-thirds majority.
          </p>
          <p>
            The fault tolerance boundary sits at{' '}
            <strong style={{ color: '#c9a84c' }}>f &lt; 46/3 = 15.33</strong>. In practice,
            this means up to 15 agents can simultaneously hallucinate, be adversarially
            compromised, or return garbage outputs — and the remaining 31 honest agents will
            still produce a correct, uncorrupted consensus decision. No single agent can swing
            the outcome. No coordinated minority of fewer than 16 can either.
          </p>

          {/* Council stats panel */}
          <div
            className="rounded-2xl overflow-hidden my-10"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="px-6 py-4"
              style={{
                background: 'rgba(201,168,76,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: '#c9a84c' }}
              >
                MEOK Byzantine Council — at a glance
              </p>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: 'Total council agents (n)', value: '46', highlight: false },
                { label: 'Fault tolerance threshold (f < n/3)', value: 'f < 15.33', highlight: false },
                { label: 'Max agents that can fail without corrupting consensus', value: '15', highlight: false },
                { label: 'Agents needed for majority (≥ 2/3)', value: '31', highlight: false },
                { label: 'Agents an attacker must simultaneously compromise', value: '≥ 16', highlight: true },
                { label: 'Single points of failure', value: '0', highlight: true },
              ].map(({ label, value, highlight }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 py-2.5 px-3 rounded-lg"
                  style={{
                    background: highlight ? 'rgba(201,168,76,0.06)' : 'transparent',
                    border: highlight
                      ? '1px solid rgba(201,168,76,0.15)'
                      : '1px solid transparent',
                  }}
                >
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {label}
                  </span>
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

          {/* ── H2 5 ── */}
          <h2 style={h2Style}>What happens when agents disagree in the council?</h2>
          <p>
            Disagreement is not a failure state — it is the system working as intended.
            When agents reach different conclusions, the council records the minority position
            explicitly. Depending on the magnitude of the split, several outcomes are possible.
          </p>
          <ul className="space-y-4 my-4 pl-1">
            {[
              [
                'Strong consensus (> 38/46)',
                'The majority position is accepted with high confidence. The minority votes are logged but do not alter the outcome.',
              ],
              [
                'Weak consensus (31–38 / 46)',
                'The majority position is accepted, but the result is flagged with a lower confidence score. Your companion surfaces the uncertainty to you explicitly rather than presenting the answer as definitive.',
              ],
              [
                'Failed consensus (< 31 / 46)',
                'No majority. The council returns an honest abstention: the question is escalated to the user with the full distribution of agent positions displayed. MEOK does not fabricate certainty when it does not exist.',
              ],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <span>
                  <strong style={{ color: '#ffffff' }}>{title}.</strong> {desc}
                </span>
              </li>
            ))}
          </ul>
          <p>
            This is the honest uncertainty signal that single-model AI cannot provide.
            A single model does not know when it is uncertain — it produces fluent, confident
            text regardless of the reliability of its underlying reasoning. The council knows
            when it is uncertain, because uncertainty is exactly what a failed or weak consensus
            vote looks like. The architecture makes epistemic honesty computable.
          </p>

          {/* ── H2 6 ── */}
          <h2 style={h2Style}>Is MEOK&apos;s Byzantine Council original research?</h2>
          <p>
            Yes. The application of BFT consensus to personal AI companion alignment is original
            intellectual property by{' '}
            <strong style={{ color: '#ffffff' }}>Nicholas Templeman</strong>, founder of MEOK AI
            LABS. The architecture — including the care score validation protocol, the agent
            specialism topology, the Maternal Covenant constitutional constraint layer, and the
            fractal council hierarchy — is documented in research paper{' '}
            <Link
              href="/labs"
              style={{
                color: '#c9a84c',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              MEOK-AI-2026-001
            </Link>
            , currently in preparation for submission.
          </p>
          <p>
            The paper has been filed with UKIPO. No other AI companion system has deployed
            Byzantine fault tolerance at the personal companion decision layer. Blockchain
            networks have used BFT for over a decade. AI companies building personal assistants
            have not — because the priority in that industry is scale and speed, not correctness
            under adversarial conditions.
          </p>
          <p>
            MEOK believes the Byzantine Council should eventually become a standard for
            trustworthy personal AI, not proprietary infrastructure. The core algorithm is
            released under the Functional Source Licence 1.1, which auto-converts to Apache 2.0
            in 2028.
          </p>

          {/* ── H2 7 ── */}
          <h2 style={h2Style}>Can a 46-agent council make MEOK&apos;s responses slower?</h2>
          <p>
            Honestly: slightly, for the decisions where it is invoked. Council consensus is
            not triggered for every conversational response. Your MEOK companion handles routine
            messages through its primary agent in real time. BFT voting is reserved for the
            category of decisions where being wrong has real consequences: memory writes,
            Guardian escalations, care score updates, task delegation, personality changes.
          </p>
          <p>
            For those decisions, MEOK uses two mechanisms to reduce the latency impact. First,
            parallel inference: all 46 agents evaluate the question simultaneously rather than
            sequentially, so the wall-clock time is roughly the latency of the slowest agent,
            not the sum of all agents. Second, result caching: council decisions on stable
            questions (standard care floor assessments, routine memory validations) are cached
            and reused within a defined time window rather than being rerun from scratch.
          </p>
          <p>
            The honest trade-off: a council decision takes longer than a single-model decision.
            A wrong decision delivered in milliseconds is faster than a correct one. Whether
            that is the right trade depends on whether the decision matters. For high-stakes
            choices about your wellbeing, MEOK considers the latency cost worthwhile.
          </p>

          {/* ── H2 8 ── */}
          <h2 style={h2Style}>What is the practical difference for users?</h2>
          <p>
            Two things change when your AI runs on Byzantine consensus rather than a single model.
          </p>
          <p>
            First, fewer confident wrong answers. The architecture requires 31 independent agents
            to agree before a response is accepted as correct. A single model hallucinating a
            plausible falsehood cannot pass that bar — the 30+ agents that evaluated the question
            by different reasoning paths and reached different conclusions will vote it down.
            The result is not perfect accuracy, but it is structurally better accuracy than
            any single model can offer.
          </p>
          <p>
            Second, honest uncertainty signals. When the council cannot reach strong consensus,
            your companion tells you. It does not paper over disagreement with confident prose.
            It surfaces the ambiguity: &ldquo;the council is split on this — here is the range of
            positions.&rdquo; This is qualitatively different from a single model that presents
            every output with identical confidence, regardless of whether the underlying
            reasoning is solid or fabricated.
          </p>

          {/* ── COMPARISON TABLE ── */}
          <div
            className="rounded-2xl overflow-hidden my-10"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="px-6 py-4"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Single model vs MEOK Byzantine Council
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <th
                      className="text-left px-5 py-3 font-semibold"
                      style={{
                        color: 'rgba(255,255,255,0.4)',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      Dimension
                    </th>
                    <th
                      className="text-left px-5 py-3 font-semibold"
                      style={{
                        color: 'rgba(255,255,255,0.4)',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      Single model (ChatGPT / Claude)
                    </th>
                    <th
                      className="text-left px-5 py-3 font-semibold"
                      style={{
                        color: '#c9a84c',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      MEOK Byzantine Council
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      'Hallucination rate',
                      'Unchecked — no peer review',
                      'Structurally reduced — requires 31+ agent agreement',
                    ],
                    [
                      'Confidence calibration',
                      'Uniformly high — no internal uncertainty signal',
                      'Calibrated — weak consensus surfaces as explicit uncertainty',
                    ],
                    [
                      'Error detection',
                      'None — user must catch mistakes',
                      'Adversarial voting catches inconsistencies before output',
                    ],
                    [
                      'Speed',
                      'Fast for all responses',
                      'Fast for conversation; slightly slower for BFT-governed decisions',
                    ],
                    [
                      'Consistency',
                      'Can vary across sessions with same prompt',
                      'Council voting stabilises outputs on stable questions',
                    ],
                    [
                      'Manipulation resistance',
                      'Vulnerable to prompt injection via single attack surface',
                      '16+ independent agents must be simultaneously compromised',
                    ],
                    [
                      'Transparency',
                      'Black box — no vote record',
                      'Per-agent votes logged and inspectable',
                    ],
                    [
                      'Novelty handling',
                      'Confident answer, reliability unknown',
                      'Low consensus flags novel/uncertain territory to user',
                    ],
                  ].map(([dim, single, meok], i) => (
                    <tr
                      key={dim}
                      style={{
                        background:
                          i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                      }}
                    >
                      <td
                        className="px-5 py-3.5 font-medium"
                        style={{
                          color: 'rgba(255,255,255,0.55)',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        {dim}
                      </td>
                      <td
                        className="px-5 py-3.5"
                        style={{
                          color: 'rgba(255,255,255,0.45)',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        {single}
                      </td>
                      <td
                        className="px-5 py-3.5"
                        style={{
                          color: 'rgba(255,255,255,0.85)',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        {meok}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── CLOSING ── */}
          <p>
            The Byzantine Generals Problem is 44 years old. The theorem has been sitting in
            computer science literature since before most current AI researchers were born.
            It was applied to blockchains in 2008 and has been standard infrastructure in
            financial systems ever since. Applying it to AI truthfulness is not a novel
            mathematical insight. It is an obvious engineering choice that the AI industry
            has not made — because correctness is harder to benchmark than capability, and
            harder to demo than a new feature.
          </p>
          <p>
            MEOK made the choice. The result is an AI that is structurally harder to fool —
            by external attackers, by hallucinating sub-models, and by its own overconfidence.
            Not perfect. Not infinitely scalable. But architecturally honest in a way that
            single-model AI, regardless of parameter count, cannot be.
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
              &ldquo;A single voice can lie. Forty-six independent voices, required to agree,
              cannot easily be made to lie in concert. That is not AI safety as a feature.
              That is AI safety as a proof.&rdquo;
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-byzantine-consensus&text=What+is+Byzantine+Consensus+and+Why+Does+Your+AI+Need+It%3F"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-byzantine-consensus"
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
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
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
              Ready for an AI that earns its confidence?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Your MEOK companion runs the Byzantine Council on every consequential decision.
              46 agents. f&nbsp;&lt;&nbsp;15 fault tolerance. When it says it is certain, 31
              independent agents agreed. When it is not certain, it tells you. Hatch yours
              free in under 3 minutes.
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
              href="/blog/byzantine-fault-tolerance-your-ai"
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
                Research
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}
              >
                What Byzantine fault tolerance has to do with your AI
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                ⏱
                8 min read
              </div>
            </Link>
            <Link
              href="/blog/byzantine-council-explained"
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
                The Byzantine Council: How 33 AI Agents Protect Your Sovereignty
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                ⏱
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  )
}
