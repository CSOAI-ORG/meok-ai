import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morning Brief — Your Day, Summarised Before Coffee | MEOK.AI",
  description:
    "MEOK's Morning Brief reads your calendar, emails, tasks, and memory overnight — and delivers a personalised briefing before you wake up. Ready by 6:30AM. Every day.",
  alternates: { canonical: "https://meok.ai/personal/morning-brief" },
  openGraph: {
    title: "Morning Brief — Your Day, Summarised Before Coffee | MEOK.AI",
    description:
      "Weather mood, priorities, memory callbacks, care check-in, and your day plan — all written while you sleep by Ralph Mode.",
    type: "website",
  },
};

export default function MorningBriefLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
