import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: "Why MEOK can never be trained on your conversations — and how we enforce it technically | MEOK AI LABS",
  description: "Most AI companies talk about privacy in their terms of service. MEOK builds it into the encryption layer so that even we can't read your conversations. Here's exactly how that works.",
  alternates: { canonical: 'https://meok.ai/blog/why-meok-never-trains-on-you' },
  openGraph: {
    title: "Why MEOK can never be trained on your conversations — and how we enforce it technically",
    description: "Most AI companies talk about privacy in their terms of service. MEOK builds it into the encryption layer so that even we can't read your conversations. Here's exactly how that works.",
    type: 'article',
    url: 'https://meok.ai/blog/why-meok-never-trains-on-you',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Why MEOK can never be trained on your conversations — and how we enforce it technically",
  datePublished: '2026-03-21',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/why-meok-never-trains-on-you',
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
              Why MEOK can never be trained on your conversations — and how we enforce it technically
            </h1>
            <p className="text-lg mb-6" style={{ color: 'rgba(245,240,232,0.6)' }}>
              It&apos;s not a privacy policy. It&apos;s architecture.
            </p>
            <div className="flex gap-4 text-sm" style={{ color: 'rgba(245,240,232,0.4)' }}>
              <span>March 21, 2026</span>
              <span>·</span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl p-8 sm:p-12" style={{ background: '#f5f0e8' }}>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#2d2d2d' }}>
                Most AI companies talk about privacy in their terms of service. MEOK builds it into the encryption layer so that even we can&apos;t read your conversations. Here&apos;s exactly how that works.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                Why do most AI companies train on your data?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Conversations are free if users consent (buried in ToS). Training data is expensive to collect otherwise. For them, your data is a raw material. For MEOK, it&apos;s sacred — encrypted to your device under a constitutional covenant that no product decision can override.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What does &apos;technically impossible&apos; actually mean?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                MEOK&apos;s memory architecture stores conversations encrypted with your device key. The server never sees plaintext. There is no server-side decryption key. Even if compelled by a court order, we cannot produce unencrypted conversations because we genuinely, architecturally, do not have them.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                How does the Maternal Covenant enforce this?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                The Maternal Covenant is MEOK&apos;s constitutional layer above the privacy policy. It has four clauses: no training, no profiling, no selling, no third-party sharing without per-item explicit consent. No product decision can override these clauses. Not even a future board.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What about metadata — conversation length, frequency?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Metadata is never linked to your identity beyond billing necessity. We store message count for rate limits and tier status for features. No fingerprinting, no behavioural profiling, no sentiment scoring on our infrastructure.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What happens if MEOK is acquired?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                The Maternal Covenant includes a data rights clause: in any acquisition, users must be individually notified and granted full data export and deletion rights before the deal closes. This is contractually binding in our terms, not just a blog post promise.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                How can I verify this?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                The encryption code is open source. The Maternal Covenant text is published at meok.ai/care. Security architecture is at meok.ai/security. Independent audits are welcomed.
              </p>
            </div>

            {/* Closing quote */}
            <div className="mt-12 p-8 rounded-2xl border-l-4" style={{ background: 'rgba(201,168,76,0.08)', borderColor: '#c9a84c' }}>
              <p className="text-xl font-semibold italic" style={{ color: '#c9a84c' }}>
                &quot;Privacy is not a feature. It&apos;s constitutional.&quot;
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center p-10 rounded-2xl" style={{ background: '#1a1a2e' }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: '#f5f0e8' }}>Ready to understand our commitments?</h3>
              <Link href="/care" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: '#c9a84c', color: '#0d0c18' }}>
                Read the Maternal Covenant <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  )
}
