import type { Metadata } from 'next'
import Link from 'next/link'
import MarketplaceClient from './marketplace-client'

export const metadata: Metadata = {
  title: 'AI Character Marketplace | MEOK AI LABS',
  description:
    '107 open-source AI companions. Free to use, CC0 licensed. Find mythological figures, historical icons, literary legends, and archetypes — or build your own with the character generator.',
  alternates: { canonical: 'https://meok.ai/marketplace' },
  openGraph: {
    title: 'AI Character Marketplace | MEOK AI LABS',
    description: '107 free CC0 AI companions. Mythology, history, literature, archetypes — or build your own.',
    url: 'https://meok.ai/marketplace',
    type: 'website',
  },
}

export default function MarketplacePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-10 px-4 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/characters" className="text-[rgba(255,255,255,0.4)] hover:text-[#c9a84c] transition-colors">
              Characters
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">/</span>
            <span className="text-[rgba(255,255,255,0.6)]">Marketplace</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c] text-sm font-medium mb-6">
            ✦ 107 characters · CC0 open source · Free forever
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The{' '}
            <span className="text-gradient-gold">Character Marketplace</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Mythological figures, historical icons, literary legends, and timeless archetypes.
            All CC0 licensed — free to use, forever. Or build and publish your own.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="#create"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: '#c9a84c', color: '#0d0c18' }}
            >
              ✨ Create your own
            </Link>
            <Link
              href="/characters/search"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              🔍 Search all characters
            </Link>
          </div>
        </div>
      </section>

      {/* MCP Marketplace Banner */}
      <section className="py-12 px-4 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 md:p-8 border flex flex-col md:flex-row items-center gap-6" style={{ background: '#13121f', borderColor: 'rgba(167,139,250,0.25)' }}>
            <div className="text-4xl">🔌</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                MEOK MCP Marketplace
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                255 production-ready MCP servers for Claude, Cursor, and any MCP-compatible client.
                AI safety, business automation, healthcare, robotics — all open source, all MIT licensed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://csoai-org.github.io/mcp-servers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: '#A78BFA', color: '#0d0c18' }}
                >
                  Browse 255 MCP Servers →
                </a>
                <a
                  href="https://github.com/CSOAI-ORG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character grid — client component */}
      <MarketplaceClient />

      {/* Create your own CTA */}
      <section id="create" className="py-20 px-4 bg-[#0d0c18]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-3xl p-10 border" style={{ background: '#13121f', borderColor: 'rgba(201,168,76,0.2)' }}>
            <div className="text-4xl mb-4">✨</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Build your own character
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Describe any personality in plain English. Our AI (running on local hardware — no token cost to you)
              generates a full character profile with personality traits, communication style, and archetype.
              Publish it to the marketplace for everyone to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/characters/create-yourself"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: '#c9a84c', color: '#0d0c18' }}
              >
                ✨ Open character generator
              </Link>
              <Link
                href="/characters"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                Browse by archetype
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
