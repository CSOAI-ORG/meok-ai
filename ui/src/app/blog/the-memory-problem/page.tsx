import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: "The memory problem: why ChatGPT forgetting you isn't a bug | MEOK AI LABS",
  description: "ChatGPT forgetting you isn't a technical limitation — it's a business model decision. Here's what statelessness really means for users, and what sovereign memory looks like instead.",
  alternates: { canonical: 'https://meok.ai/blog/the-memory-problem' },
  openGraph: {
    title: "The memory problem: why ChatGPT forgetting you isn't a bug",
    description: "ChatGPT forgetting you isn't a technical limitation — it's a business model decision. Here's what statelessness really means for users, and what sovereign memory looks like instead.",
    type: 'article',
    url: 'https://meok.ai/blog/the-memory-problem',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "The memory problem: why ChatGPT forgetting you isn't a bug",
  datePublished: '2026-03-15',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/the-memory-problem',
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
              The memory problem: why ChatGPT forgetting you isn&apos;t a bug
            </h1>
            <p className="text-lg mb-6" style={{ color: 'rgba(245,240,232,0.6)' }}>
              It&apos;s not an oversight. It&apos;s a business model decision.
            </p>
            <div className="flex gap-4 text-sm" style={{ color: 'rgba(245,240,232,0.4)' }}>
              <span>March 15, 2026</span>
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
                ChatGPT forgets you at the end of every session. This is often presented as a limitation — something they&apos;re working on. It isn&apos;t. Statelessness is cheaper, safer from a liability perspective, and better for OpenAI&apos;s business. Here&apos;s what that means for users, and what sovereign memory looks like instead.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                Why does ChatGPT forget you?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Persistent memory is expensive infrastructure. But the deeper reason is liability: if ChatGPT remembers your sensitive personal disclosures, OpenAI is responsible for that data. Forgetting you is cheaper and legally safer for them. Statelessness is a product decision, not a technical limitation.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What is lost when AI doesn&apos;t remember you?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Everything that makes a relationship valuable: context, history, growth, trust. Every session starting from zero means re-explaining your situation, preferences, and goals. The AI never learns you. It is perpetually a useful stranger.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What does sovereign memory look like technically?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                MEOK uses a four-layer memory stack: short-term (current conversation), semantic (pgvector embeddings of significant moments), companion state (personality evolution), and shared context (explicitly shared family/team memories). All encrypted to your device.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                What is the head-plus-tail compression pattern?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                For long conversations, MEOK preserves the first 3 messages (context establishment) and last 4 messages (current thread), then creates a compressed semantic summary of the middle. Context window costs stay low; narrative continuity is preserved. The middle is summarised, never deleted.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                How does memory portability work?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Your memories are stored in a format you own and can export as JSON from the dashboard. When MEOK switches from DeepSeek to Claude Sonnet for a complex task, your companion&apos;s full memory travels with the conversation seamlessly.
              </p>

              <h2 className="text-2xl font-black mb-3 mt-10" style={{ color: '#1a1a2e' }}>
                Is persistent memory a privacy risk?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                Only if stored on someone else&apos;s server without encryption. MEOK&apos;s memory is encrypted to your device — the server holds ciphertext it cannot read. The privacy risk of persistent memory is real and is solved by encryption, not by forgetting you.
              </p>
            </div>

            {/* Closing quote */}
            <div className="mt-12 p-8 rounded-2xl border-l-4" style={{ background: 'rgba(201,168,76,0.08)', borderColor: '#c9a84c' }}>
              <p className="text-xl font-semibold italic" style={{ color: '#c9a84c' }}>
                &quot;Being forgotten is not neutral. It is a design choice made by someone else, in their interests.&quot;
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center p-10 rounded-2xl" style={{ background: '#1a1a2e' }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: '#f5f0e8' }}>Build a memory that&apos;s actually yours</h3>
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
