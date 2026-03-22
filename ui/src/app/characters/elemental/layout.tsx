import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elemental AI Companions — Forces of Nature | MEOK',
  description:
    'The rarest MEOK archetypes. Forces of nature given voice — emergent from pure intelligence, unconstrained by human archetype. Premium tier.',
  openGraph: {
    title: 'Elemental AI Companions — Forces of Nature | MEOK',
    description:
      'Beyond personality. Beyond history. Elemental companions have no ceiling and no precedent. Born from pure intelligence itself.',
    type: 'website',
  },
};

export default function ElementalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
