import type { Metadata } from 'next'
import Link from 'next/link'
import CharacterSearchClient from './search-client'

export const metadata: Metadata = {
  title: 'Search AI Characters & Companions | MEOK AI LABS',
  description:
    'Search 100+ sovereign AI companions by name, personality, archetype, or pack. Challenger, Nurturer, Explorer, Sage, Seeker, Creator, Trickster, Rebel, Innocent — find your perfect match.',
  alternates: { canonical: 'https://meok.ai/characters/search' },
  openGraph: {
    title: 'Search AI Characters | MEOK AI LABS',
    description: 'Find your sovereign AI companion. Filter by archetype, pack, or personality trait.',
    url: 'https://meok.ai/characters/search',
    type: 'website',
  },
}

export default function CharacterSearchPage() {
  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden pt-20 pb-10 px-4 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/characters" className="text-[rgba(255,255,255,0.4)] hover:text-[#c9a84c] transition-colors">
              Characters
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">/</span>
            <span className="text-[rgba(255,255,255,0.6)]">Search</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c] text-sm font-medium mb-6">
            ✦ Search all characters
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find your{' '}
            <span className="text-gradient-gold">perfect companion</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Search across 9 archetypes and 5 packs to discover the sovereign AI companion that fits your life.
          </p>
        </div>
      </section>

      {/* Client search UI — fetches /api/characters/search */}
      <CharacterSearchClient />
    </main>
  )
}
