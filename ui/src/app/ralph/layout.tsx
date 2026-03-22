import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ralph Mode — Your AI Works While You Sleep | MEOK",
  description:
    "Ralph Mode is MEOK's autonomous AI agent. While you sleep, Ralph executes tasks, plans sprints, writes code, and files a morning briefing. Wake up to work done.",
  keywords: [
    "autonomous AI agent",
    "AI that works overnight",
    "AI CEO agent",
    "Ralph Mode MEOK",
    "autonomous AI assistant",
  ],
  alternates: { canonical: "https://meok.ai/ralph" },
  openGraph: {
    title: "Ralph Mode — Your AI Works While You Sleep | MEOK",
    description:
      "Ralph Mode is MEOK's autonomous AI agent. While you sleep, Ralph executes tasks, plans sprints, writes code, and files a morning briefing. Wake up to work done.",
    type: "website",
    url: "https://meok.ai/ralph",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=Ralph+Mode&desc=Autonomous+AI+agent.+Sprint+planning%2C+code%2C+research+%E2%80%94+filed+and+ready+before+you+wake+up.", width: 1200, height: 630, alt: "Ralph Mode — MEOK Autonomous AI Agent" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph Mode — Your AI Works While You Sleep | MEOK",
    description: "Autonomous AI agent that works overnight so you don't have to. Sprint planning, code writing, research — filed and ready before you wake up.",
    images: ["https://meok.ai/api/og?title=Ralph+Mode&desc=Autonomous+AI+agent.+Sprint+planning%2C+code%2C+research+%E2%80%94+filed+and+ready+before+you+wake+up."],
  },
};

export default function RalphLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
