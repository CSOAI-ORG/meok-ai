import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback — MEOK.AI",
  description:
    "Share your feedback with the MEOK team. Report bugs, request features, or tell us what you love. Your voice shapes the future of sovereign AI.",
  alternates: {
    canonical: "https://meok.ai/feedback",
  },
  openGraph: {
    title: "Feedback — MEOK.AI",
    description:
      "Share your feedback with the MEOK team. Report bugs, request features, or tell us what you love. Your voice shapes the future of sovereign AI.",
    type: "website",
    url: "https://meok.ai/feedback",
    siteName: "MEOK.AI",
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
