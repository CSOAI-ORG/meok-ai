import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Companions — Choose Your Archetype | MEOK',
  description:
    'Six AI companion archetypes. Scholar, Guardian, Healer, Trickster, Pioneer, Mystic — each one learns differently, speaks differently, and cares differently. Free to start.',
  openGraph: {
    title: 'AI Companions — Choose Your Archetype | MEOK',
    description:
      'Six archetypes, four evolution stages each. Your companion builds a living memory of you and evolves with every conversation.',
    type: 'website',
  },
};

export default function CharactersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
