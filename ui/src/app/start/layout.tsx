import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Your Companion — Which MEOK Archetype Fits You? | MEOK.AI',
  description: 'Answer 4 questions and discover which MEOK companion archetype was built for how you think, feel, and work. Free to start.',
}

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return children
}
