import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hourman — The Daily Sprint Planner | MEOK AI LABS",
  description:
    "Hourman is MEOK's planning agent. He breaks your goals into daily sprints, estimates time, and keeps you on track — every morning.",
  alternates: { canonical: "https://meok.ai/work/hourman" },
  openGraph: {
    title: "Hourman — The Daily Sprint Planner | MEOK AI LABS",
    description:
      "Hourman is MEOK's planning agent. He breaks your goals into daily sprints, estimates time, and keeps you on track — every morning.",
    type: "website",
  },
};

export default function HourmanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
