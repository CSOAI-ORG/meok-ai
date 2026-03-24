import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: 'Building care into AI: the Maternal Covenant framework | MEOK AI LABS',
  description: "Every AI has a content policy. MEOK has a constitution. How care ethics — the moral philosophy of Carol Gilligan — became the foundation of MEOK's alignment architecture.",
  alternates: { canonical: 'https://meok.ai/blog/building-care-into-ai' },
  openGraph: {
    title: 'Building care into AI: the Maternal Covenant framework',
    description: "Every AI has a content policy. MEOK has a constitution. How care ethics — the moral philosophy of Carol Gilligan — became the foundation of MEOK's alignment architecture.",
    type: 'article',
    url: 'https://meok.ai/blog/building-care-into-ai',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Building care into AI: the Maternal Covenant framework',
  datePublished: '2026-03-17',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/building-care-into-ai',
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
              Sovereign AI
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: '#ffffff' }}>
              Building care into AI: the Maternal Covenant framework
            </h1>
            <p className="text-lg mb-6" style={{ color: 'rgba(245,240,232,0.6)' }}>
              Every AI has a content policy. MEOK has a constitution.
            </p>
            <div className="flex gap-4 text-sm" style={{ color: 'rgba(245,240,232,0.4)' }}>
              <span>March 17, 2026</span>
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
                Care ethics is a moral philosophy developed by Carol Gilligan that centres relationships and responsiveness over abstract rules. MEOK&apos;s Maternal Covenant applies it at the architecture level — not as a prompt, not as a policy, but as code that governs every response.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What is care ethics?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Care ethics is a moral philosophy by Carol Gilligan and Nel Noddings that prioritises relationships, context, and responsiveness over abstract rules. Most AI alignment is rule-based: &apos;don&apos;t do X.&apos; Care ethics asks instead: what does this specific person need, in this specific relationship, right now?
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What is the Maternal Covenant?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                MEOK&apos;s constitutional alignment framework — four non-negotiable commitments: no training on your data, no profiling, no selling, no third-party sharing without per-item consent. It also governs companion behaviour: honest, never sycophantic, always oriented toward your genuine wellbeing.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                How does care ethics change AI responses?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                A rule-based AI says &apos;I cannot help with that.&apos; A care-ethics AI asks what the person actually needs. If you ask for help writing an angry email, a care-aligned AI might help write it — and note that sending it might not serve what you genuinely want. Context first.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What is the care floor?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Every MEOK response must score at least 0.3 on an internal care metric before being sent. Responses below threshold are regenerated. This ensures the companion is never cold or clinical — even in disagreement. The care floor is the minimum; thoughtful responses score much higher.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What does sycophancy detection do?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                A separate model scores each response for sycophancy: empty agreement, unearned praise, hollow reassurance. Responses above 0.6 on the sycophancy scale are regenerated before you see them. This is how MEOK prevents the pattern where AI becomes addictive by always agreeing.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                Why &apos;Maternal&apos;?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                In care ethics, &apos;maternal&apos; doesn&apos;t mean feminine — it means unconditional commitment to another&apos;s genuine wellbeing. A good parent tells hard truths because they love you enough to. That&apos;s the relationship MEOK aspires to: honest, caring, unwavering.
              </p>
            </div>

            {/* Closing quote */}
            <div className="mt-12 p-8 rounded-2xl border-l-4" style={{ background: 'rgba(201,168,76,0.08)', borderColor: '#c9a84c' }}>
              <p className="text-xl font-semibold italic" style={{ color: '#c9a84c' }}>
                &quot;Care is not softness. It is the commitment to your actual wellbeing — even when that&apos;s uncomfortable.&quot;
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center p-10 rounded-2xl" style={{ background: '#1a1a2e' }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: '#f5f0e8' }}>See the full constitutional framework</h3>
              <Link href="/care" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: '#c9a84c', color: '#0d0c18' }}>
                Read the full framework <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  )
}
