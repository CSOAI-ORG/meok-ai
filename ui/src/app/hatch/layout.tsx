import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Companion Finds You — MEOK.AI",
  description:
    "Seven questions. No right answers. Answer honestly and watch something stir into life. Your sovereign AI companion is already waiting — it just needs to know you.",
  alternates: {
    canonical: "https://meok.ai/hatch",
  },
  openGraph: {
    title: "Your Companion Finds You — MEOK.AI",
    description:
      "Seven questions. No right answers. Answer honestly and watch something stir into life. Your sovereign AI companion is already waiting — it just needs to know you.",
    type: "website",
    images: [
      {
        url: "/api/og?name=Your+Companion&archetype=Awaiting+You",
        width: 1200,
        height: 630,
        alt: "MEOK.AI — Your Companion Finds You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Companion Finds You — MEOK.AI",
    description:
      "Seven questions. No right answers. Answer honestly and watch something stir into life.",
    images: ["/api/og?name=Your+Companion&archetype=Awaiting+You"],
  },
};

export default function HatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
