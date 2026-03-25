import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Companion | MEOK AI',
  description: "Your AI companion's profile and evolution",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
