import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — MEOK AI | Personal Sovereign AI Insights',
  description: 'Insights on personal sovereign AI, care-aligned AI systems, and the future of AI that works for you — not against you.',
  openGraph: {
    title: 'MEOK Blog — Personal Sovereign AI',
    description: 'The case for AI sovereignty at the individual level.',
    type: 'website',
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="text-cyan-400">M</span>EOK
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <Link href="/product" className="hover:text-white transition-colors">Product</Link>
            <Link href="/labs" className="hover:text-white transition-colors">Labs</Link>
            <Link href="/blog" className="text-white">Blog</Link>
            <Link href="/register" className="px-3 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-semibold">
              Hatch your AI
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Personal Sovereign AI
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Thinking clearly about AI<br />
            <span className="text-white/30">that actually cares about you.</span>
          </h1>
          <p className="text-white/40 max-w-xl">
            Insights on sovereignty, care-aligned AI, the Maternal Covenant, and why
            the future of AI should work for individuals — not against them.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-24 text-white/20">
            <p className="text-lg">First posts arriving soon.</p>
            <p className="text-sm mt-2">Subscribe to be notified.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post, i) => (
              <article key={post.slug} className={`group ${i === 0 ? 'p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-cyan-400/70 font-medium uppercase tracking-wider">{post.category}</span>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="text-xs text-white/30">{post.readTime} min read</span>
                  <span className="text-white/20 text-xs">·</span>
                  <time className="text-xs text-white/30">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className={`font-bold mb-3 group-hover:text-cyan-400 transition-colors ${i === 0 ? 'text-2xl' : 'text-xl'}`}>
                    {post.title}
                  </h2>
                </Link>
                <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-2xl">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-sm text-cyan-400/70 hover:text-cyan-400 transition-colors">
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
