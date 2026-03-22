import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legendary AI Companions — Icons of Power | MEOK',
  description:
    'Five foundational AI archetypes — Scholar, Guardian, Healer, Trickster, Pioneer. Free to start. Each one learns differently, speaks differently, and evolves with you.',
  openGraph: {
    title: 'Legendary AI Companions — Icons of Power | MEOK',
    description:
      'Icons of history, myth and power. Five free-to-start AI companions that grow through four evolution stages as your bond deepens.',
    type: 'website',
  },
};

export default function LegendaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
