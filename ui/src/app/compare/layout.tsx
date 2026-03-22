import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK vs ChatGPT, Claude, Gemini, Copilot — The Honest Comparison",
  description:
    "You've tried the others. Here's what they never told you. A full, honest comparison of MEOK vs ChatGPT Plus, Claude Pro, Microsoft Copilot, and Google Gemini — on memory, sovereignty, care alignment, and data ownership.",
  keywords: [
    "MEOK vs ChatGPT",
    "MEOK vs Claude",
    "MEOK vs Copilot",
    "MEOK vs Gemini",
    "sovereign AI comparison",
    "AI with persistent memory",
    "care-aligned AI",
    "best AI companion 2026",
    "personal sovereign AI alternative",
  ],
  alternates: { canonical: "https://meok.ai/compare" },
  openGraph: {
    title: "MEOK vs ChatGPT, Claude, Gemini, Copilot — The Honest Comparison",
    description:
      "ChatGPT forgets you every session. Gemini feeds an ad machine. Claude has no sovereign memory. Here's what actually makes MEOK different.",
    type: "website",
    url: "https://meok.ai/compare",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=MEOK+vs+ChatGPT%2C+Claude%2C+Gemini%2C+Copilot&desc=ChatGPT+forgets+you.+Gemini+feeds+an+ad+machine.+Here%27s+what+actually+makes+MEOK+different.", width: 1200, height: 630, alt: "MEOK vs ChatGPT, Claude, Gemini, Copilot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs ChatGPT, Claude, Gemini, Copilot — The Honest Comparison",
    description: "ChatGPT forgets you every session. Gemini feeds an ad machine. Claude has no sovereign memory. Here's what actually makes MEOK different.",
    images: ["https://meok.ai/api/og?title=MEOK+vs+ChatGPT%2C+Claude%2C+Gemini%2C+Copilot&desc=ChatGPT+forgets+you.+Gemini+feeds+an+ad+machine.+Here%27s+what+actually+makes+MEOK+different."],
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
