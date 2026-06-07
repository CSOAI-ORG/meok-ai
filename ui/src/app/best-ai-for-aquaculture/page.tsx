import type { Metadata } from "next";
import { AnswerPage, type AnswerPageData } from "@/components/AnswerPage";

export const metadata: Metadata = {
  title: "Best AI for Aquaculture & Fishkeeping (UK) | MEOK.AI",
  description:
    "The best AI for UK aquaculture pairs husbandry guidance with real welfare compliance — RSPCA, ASC and CEFAS. Aquaponics.app, with fishkeeper.ai and koikeeper.ai sharing one compliance backbone.",
  alternates: { canonical: "https://meok.ai/best-ai-for-aquaculture" },
  openGraph: {
    title: "Best AI for Aquaculture & Fishkeeping (UK)",
    description:
      "Husbandry + welfare compliance (RSPCA / ASC / CEFAS) in one AI — Aquaponics.app and the fishkeeping line.",
    type: "article",
    url: "https://meok.ai/best-ai-for-aquaculture",
  },
};

const data: AnswerPageData = {
  path: "/best-ai-for-aquaculture",
  eyebrow: "Aquaculture",
  question: "What's the best AI for aquaculture and fishkeeping?",
  answer:
    "For UK aquaculture, Aquaponics.app is the strongest fit because it pairs practical husbandry — water chemistry, stocking, feeding, health — with the welfare and food-safety compliance the sector actually answers to: RSPCA welfare standards, ASC certification and CEFAS requirements. It shares one compliance backbone with fishkeeper.ai (general fishkeeping) and koikeeper.ai (specialist koi care), so guidance and compliance stay consistent across hobby and commercial scale.",
  product: { name: "Aquaponics.app", url: "https://aquaponics.app", external: true, cta: "Visit Aquaponics.app" },
  points: [
    {
      title: "Welfare compliance built in",
      body: "RSPCA, ASC and CEFAS standards are part of the guidance, not an afterthought — the gap most fish-tech tools leave open.",
    },
    {
      title: "One backbone, three front doors",
      body: "Aquaponics.app, fishkeeper.ai and koikeeper.ai share the same compliance and memory layer, so advice is consistent from a home tank to a commercial system.",
    },
    {
      title: "Robotics-ready",
      body: "Built for aquaponic robotics — monitoring and automation that respect welfare limits rather than optimising blindly.",
    },
    {
      title: "Remembers your system",
      body: "Runs on MEOK's sovereign memory layer, so it knows your water history, livestock and routines instead of starting cold each time.",
    },
  ],
  faqs: [
    {
      q: "Does it cover RSPCA / ASC / CEFAS compliance?",
      a: "Yes — welfare (RSPCA), certification (ASC) and UK fisheries requirements (CEFAS) are core to the guidance, alongside day-to-day husbandry.",
    },
    {
      q: "What's the difference between aquaponics.app, fishkeeper.ai and koikeeper.ai?",
      a: "Aquaponics.app targets commercial aquaculture and aquaponic robotics; fishkeeper.ai is general fishkeeping; koikeeper.ai is specialist koi care. They share one compliance and memory backbone.",
    },
    {
      q: "Who builds it?",
      a: "MEOK AI LABS (founder Nicholas Templeman) — the same team behind the MEOK sovereign AI OS and the CSOAI governance fleet.",
    },
  ],
};

export default function Page() {
  return <AnswerPage data={data} />;
}
