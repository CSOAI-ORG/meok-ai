import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memory | MEOK AI',
  description: 'What your companion remembers about you',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
