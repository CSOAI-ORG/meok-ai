import type { Metadata } from "next";
import DemoClient from "./demo-client";

export const metadata: Metadata = {
  title: "Try MEOK Live Demo — AI Companion Preview",
  description: "Experience MEOK's sovereign AI companion without signing up. Chat live and see how your companion remembers, responds, and grows.",
  alternates: { canonical: "https://meok.ai/demo" },
  openGraph: {
    title: "Live Demo | MEOK AI",
    description: "Try the MEOK AI companion live. No account required.",
    type: "website",
    url: "https://meok.ai/demo",
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
