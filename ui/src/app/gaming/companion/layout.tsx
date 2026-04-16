import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming Companion — MEOK",
  description:
    "Your AI companion that plays alongside you. Knows your playstyle, remembers every session, celebrates your wins and helps you learn from every loss.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
