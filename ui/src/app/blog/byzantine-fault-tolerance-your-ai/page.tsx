import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: 'What Byzantine fault tolerance has to do with your AI | MEOK AI LABS',
  description: 'In 782 AD, generals had to reach consensus when some messengers might be lying. Your AI has the same problem. How Byzantine Fault Tolerance became the backbone of trustworthy AI decisions.',
  alternates: { canonical: 'https://meok.ai/blog/byzantine-fault-tolerance-your-ai' },
  openGraph: {
    title: 'What Byzantine fault tolerance has to do with your AI',
    description: 'In 782 AD, generals had to reach consensus when some messengers might be lying. Your AI has the same problem. How Byzantine Fault Tolerance became the backbone of trustworthy AI decisions.',
    type: 'article',
    url: 'https://meok.ai/blog/byzantine-fault-tolerance-your-ai',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Byzantine fault tolerance has to do with your AI',
  datePublished: '2026-03-18',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/byzantine-fault-tolerance-your-ai',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen" style={{ background: '#0d0c18' }}>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 relative" style={{ background: '#0d0c18' }}>
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8" style={{ color: 'rgba(245,240,232,0.4)' }}>
              ← Back to Blog
            </Link>
            <span className="text-xs font-bold px-3 py-1 rounded-full border mb-6 inline-block" style={{ color: '#c9a84c', borderColor: 'rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.1)' }}>
              Research
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: '#ffffff' }}>
              What Byzantine fault tolerance has to do with your AI
            </h1>
            <p className="text-lg mb-6" style={{ color: 'rgba(245,240,232,0.6)' }}>
              In 782 AD, generals had to reach consensus when some messengers might be lying. Your AI has the same problem.
            </p>
            <div className="flex gap-4 text-sm" style={{ color: 'rgba(245,240,232,0.4)' }}>
              <span>March 18, 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl p-8 sm:p-12" style={{ background: '#f5f0e8' }}>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#2d2d2d' }}>
                Byzantine Fault Tolerance was a 1982 computer science breakthrough about distributed systems that can&apos;t trust all their participants. In 2026, it turns out to be exactly the right architecture for AI systems that make decisions you can trust.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What is the Byzantine Generals Problem?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Imagine generals surrounding a city who must agree to attack or retreat, but some generals may be traitors. The problem: how do you reach reliable consensus when you cannot trust all participants? This 1982 problem is directly relevant to AI agent systems.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                How does this apply to AI agents?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                When multiple AI agents collaborate, each has its own biases and potential errors. If you ask one agent to fact-check another, that agent might be wrong too. Byzantine Fault Tolerance provides formal guarantees for reaching correct decisions despite individual agent failures.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What is MEOK&apos;s Byzantine Council?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                MEOK runs a 45-agent council that uses BFT consensus for high-stakes decisions. The mathematical guarantee: reliable output as long as fewer than one-third of agents are faulty. With 45 agents, 15 would need to fail simultaneously to corrupt the council&apos;s decision.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What decisions does the council make?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                High-stakes system decisions: whether to flag a response as potentially harmful, whether a Guardian alert should escalate, whether a care score is genuinely below threshold. Routine interactions are handled by individual agents; consequential decisions go to the council.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                Why not just use one very good AI?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Single-model AI has a single point of failure and a single set of biases. A council distributes both. It also enables auditability: you can inspect which agents voted which way. A single model&apos;s reasoning is a black box; a council&apos;s deliberation leaves a record.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                Is this open source?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                The Byzantine Council architecture is documented in MEOK-AI-2026-001 at meok.ai/labs. The core consensus algorithm is published under FSL 1.1 licence. This architecture is important enough to share broadly.
              </p>
            </div>

            {/* Closing quote */}
            <div className="mt-12 p-8 rounded-2xl border-l-4" style={{ background: 'rgba(201,168,76,0.08)', borderColor: '#c9a84c' }}>
              <p className="text-xl font-semibold italic" style={{ color: '#c9a84c' }}>
                &quot;Consensus under adversity. That&apos;s not just an AI problem. It&apos;s a civilisational one.&quot;
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center p-10 rounded-2xl" style={{ background: '#1a1a2e' }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: '#f5f0e8' }}>Explore the architecture behind the council</h3>
              <Link href="/labs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: '#c9a84c', color: '#0d0c18' }}>
                Read the research <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  )
}
