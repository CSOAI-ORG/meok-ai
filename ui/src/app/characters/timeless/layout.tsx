import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Timeless AI Companions — Wisdom Across Centuries | MEOK',
  description:
    'AI companions drawing from 47 philosophical and spiritual traditions. For the questions that live at the centre of your life. Pro tier.',
  openGraph: {
    title: 'Timeless AI Companions — Wisdom Across Centuries | MEOK',
    description:
      'Wisdom that endures across centuries. Companions built from 47 traditions — Stoicism, Buddhism, Taoism, Existentialism, and 43 more.',
    type: 'website',
  },
};

export default function TimelessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
