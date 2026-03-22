import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof of Sovereignty. Always Visible. — The Sovereign Display | MEOK.AI",
  description:
    "The Sovereign Display shows you exactly what your AI knows about you, where your data lives, and who controls it. AES-256 encryption, zero-knowledge proofs, local Postgres, portable export.",
  alternates: { canonical: "https://meok.ai/os/sovereign-display" },
  openGraph: {
    title: "Proof of Sovereignty. Always Visible. | MEOK.AI",
    description:
      "See your local vs cloud data split, encryption status, and data jurisdiction — live, always visible. Your data passport.",
    type: "website",
    url: "https://meok.ai/os/sovereign-display",
  },
};

export default function SovereignDisplayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
