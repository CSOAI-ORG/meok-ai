/**
 * MEOK AI LABS — Public Scorecard Share
 *
 * Read-only public page at /s/[id] that renders a shared compliance/care
 * scorecard by id. Mirrors the look of the shared-research page
 * (/research/shared/[id]).
 *
 * Data source detection: this page attempts to fetch the shared scorecard
 * from /api/scorecard/share?id=<id>. If that endpoint does not exist yet
 * (404 / non-JSON), or the link is unknown/expired, the client renders a
 * clean "invalid link / coming soon" state. No existing routes are modified.
 *
 * Server component owns Metadata + canonical; the interactive fetch/render
 * lives in the client child component below.
 */

import type { Metadata } from "next";
import ScorecardShareClient from "./scorecard-share-client";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const canonical = `https://meok.ai/s/${id}`;
  const title = "Shared Compliance Scorecard · MEOK AI Labs";
  const description =
    "A read-only MEOK AI Labs compliance & care scorecard, shared via secure link.";

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ScorecardShareClient shareId={id} />;
}
