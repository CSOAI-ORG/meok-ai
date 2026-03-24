import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: 'The 40-day build: how MEOK went from idea to launch | MEOK AI LABS',
  description: 'A caravan. A farm. One founder. And forty days to build a sovereign AI platform. The honest account of what happened — the decisions, the bugs, and why Easter Sunday matters.',
  alternates: { canonical: 'https://meok.ai/blog/the-40-day-build' },
  openGraph: {
    title: 'The 40-day build: how MEOK went from idea to launch',
    description: 'A caravan. A farm. One founder. And forty days to build a sovereign AI platform. The honest account of what happened — the decisions, the bugs, and why Easter Sunday matters.',
    type: 'article',
    url: 'https://meok.ai/blog/the-40-day-build',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The 40-day build: how MEOK went from idea to launch',
  datePublished: '2026-03-19',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/the-40-day-build',
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
              Founder Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: '#ffffff' }}>
              The 40-day build: how MEOK went from idea to launch
            </h1>
            <p className="text-lg mb-6" style={{ color: 'rgba(245,240,232,0.6)' }}>
              A caravan. A farm. One founder. And forty days to build a sovereign AI platform.
            </p>
            <div className="flex gap-4 text-sm" style={{ color: 'rgba(245,240,232,0.4)' }}>
              <span>March 19, 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl p-8 sm:p-12" style={{ background: '#f5f0e8' }}>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#2d2d2d' }}>
                In February 2026, Nicholas Templeman started building MEOK from a caravan on a farm in England. Forty days later, it launched. This is the honest account of what happened — the decisions, the bugs that nearly broke it, and why Easter Sunday matters.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                Where did MEOK start?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                It started in a caravan in England in February 2026. Nicholas had been building AI tools for years and was tired of AI that forgot him, patronised him, and sold his data. He set a deadline: build the AI he actually wanted before Easter Sunday. Forty days.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What was built first?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                The architecture. Byzantine Council consensus, the Maternal Covenant framework, the memory encryption stack. No UI. Just the philosophical contracts that would govern everything else. Nicholas believes you build the soul of a product before you build the face.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What nearly broke the build?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Three things: asyncpg JSONB deserialisation bugs in the multi-agent registry, a PostgreSQL ownership conflict on audit log indexes, and running out of context on day 38. All three were fixed. The first two are documented as cautionary comments in the codebase.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                Why Easter Sunday as the deadline?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Easter is about resurrection — things that return from apparent impossibility. MEOK is partly about restoring what was lost: the feeling that AI can be on your side, that your memories can be safe. Easter felt right for a launch about renewal.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What would you do differently?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Start the blog earlier. The first three weeks were entirely backend. By the time the front-end existed, there were forty blog posts to write in ten days. SEO is a long game. Starting it late is the most expensive mistake a solo founder can make.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What&apos;s next?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Guardian protection for families in May, the Desktop OS in Summer 2026, the character marketplace in late 2026. But first: real users in the Birth Ceremony. The 40-day build was only the beginning.
              </p>
            </div>

            {/* Closing quote */}
            <div className="mt-12 p-8 rounded-2xl border-l-4" style={{ background: 'rgba(201,168,76,0.08)', borderColor: '#c9a84c' }}>
              <p className="text-xl font-semibold italic" style={{ color: '#c9a84c' }}>
                &quot;Some things need to be born before you know if they&apos;re possible.&quot;
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center p-10 rounded-2xl" style={{ background: '#1a1a2e' }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: '#f5f0e8' }}>Be part of what comes next</h3>
              <Link href="/birth" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: '#c9a84c', color: '#0d0c18' }}>
                Begin Your Birth Ceremony <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  )
}
