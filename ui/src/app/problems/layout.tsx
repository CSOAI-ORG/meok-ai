import type React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '11 Problems. One Solution. | MEOK.AI',
  description:
    'AI amnesia, data ownership, model lock-in, family safety, gaming fragmentation — 11 fundamental problems with AI today, and how MEOK\'s sovereign OS fixes every one.',
  alternates: { canonical: 'https://meok.ai/problems' },
  openGraph: {
    title: '11 Problems. One Solution. | MEOK.AI',
    description:
      '11 major problems with AI today, and how MEOK\'s sovereign OS fixes every one.',
    type: 'website',
    url: 'https://meok.ai/problems',
  },
  twitter: {
    card: 'summary_large_image',
    title: '11 Problems. One Solution. | MEOK.AI',
    description: '11 fundamental failures of the AI industry — solved in one sovereign OS.',
  },
};

export default function ProblemsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
