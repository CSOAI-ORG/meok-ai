import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — MEOK Blog`,
    description: post.description,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // JSON-LD Article schema (SEO + GEO for AI Overview)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.date,
    publisher: { '@type': 'Organization', name: 'MEOK AI LTD' },
    keywords: post.keywords.join(', '),
    about: { '@type': 'Thing', name: 'Personal Sovereign AI' },
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="text-cyan-400">M</span>EOK
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/blog" className="text-white/50 hover:text-white transition-colors">← Blog</Link>
            <Link href="/register" className="px-3 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-semibold">
              Hatch your AI
            </Link>
          </div>
        </div>
      </nav>

      <article className="max-w-2xl mx-auto px-6 pt-28 pb-24">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-cyan-400/70 font-medium uppercase tracking-wider">{post.category}</span>
          <span className="text-white/20 text-xs">·</span>
          <span className="text-xs text-white/30">{post.readTime} min read</span>
          <span className="text-white/20 text-xs">·</span>
          <time className="text-xs text-white/30">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
        </div>

        <h1 className="text-4xl font-bold leading-tight mb-6">{post.title}</h1>
        <p className="text-xl text-white/50 mb-12 leading-relaxed">{post.description}</p>

        {/* Author */}
        <div className="flex items-center gap-3 pb-10 mb-10 border-b border-white/[0.06]">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-black font-bold text-sm">N</div>
          <div>
            <div className="text-sm font-medium">{post.author}</div>
            <div className="text-xs text-white/30">Founder, MEOK AI LTD</div>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-white/70 prose-p:leading-relaxed
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
            prose-strong:text-white
            prose-blockquote:border-l-cyan-400 prose-blockquote:text-white/50
            prose-code:text-cyan-400 prose-code:bg-white/[0.05] prose-code:px-1.5 prose-code:rounded
            prose-ul:text-white/70 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-purple-950/20 border border-cyan-400/20">
          <h3 className="text-xl font-bold mb-2">Ready to experience personal sovereign AI?</h3>
          <p className="text-white/50 text-sm mb-6">MEOK is the first AI OS built for individual sovereignty. Hatch your AI — it only takes 3 minutes.</p>
          <Link href="/register" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-colors">
            Hatch your AI — free →
          </Link>
        </div>
      </article>
    </div>
  )
}

// Simple markdown → HTML renderer (no heavy deps)
function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^\> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^(?!<[hb]|<ul|<li|<blockquote)(.+)$/gm, '<p>$1</p>')
    .replace(/\n\n+/g, '\n')
}
