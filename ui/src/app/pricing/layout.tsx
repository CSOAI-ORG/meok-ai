import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Start free. Grow when you're ready. | MEOK.AI",
  description:
    "MEOK is free forever. No credit card. Your sovereign AI hatches, grows, and stays yours. Upgrade for Work OS, Family OS, and Team OS.",
  alternates: { canonical: "https://meok.ai/pricing" },
  openGraph: {
    title: "Pricing — Start free. Grow when you're ready. | MEOK.AI",
    description:
      "MEOK is free forever. No credit card. Upgrade to Pro (£9.99/mo), Elite (£19/mo), or Team (£29.99/seat) when you're ready.",
    type: "website",
    url: "https://meok.ai/pricing",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=Pricing+%E2%80%94+Start+free.+Grow+when+you%27re+ready.&desc=MEOK+is+free+forever.+No+credit+card.+Upgrade+for+Work+OS%2C+Family+OS%2C+and+Team+OS.", width: 1200, height: 630, alt: "MEOK Pricing — Free sovereign AI forever" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Start free. Grow when you're ready. | MEOK.AI",
    description: "MEOK is free forever. No credit card. Upgrade for Work OS, Family OS, and Team OS when you're ready.",
    images: ["https://meok.ai/api/og?title=Pricing+%E2%80%94+Start+free.+Grow+when+you%27re+ready.&desc=MEOK+is+free+forever.+No+credit+card.+Upgrade+for+Work+OS%2C+Family+OS%2C+and+Team+OS."],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
