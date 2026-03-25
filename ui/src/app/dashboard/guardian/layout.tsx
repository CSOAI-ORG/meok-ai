import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guardian | MEOK AI',
  description: 'Your AI safety and protection dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
