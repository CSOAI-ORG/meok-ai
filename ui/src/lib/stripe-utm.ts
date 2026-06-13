/**
 * stripe-utm.ts — UTM-tag any Stripe Payment Link.
 *
 * Usage:
 *   import { withUtm } from "@/lib/stripe-utm";
 *   <a href={withUtm("https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T", "/a2a", "a2a_substrate_499")} />
 *
 * The resulting URL adds utm_source / utm_medium / utm_campaign + a `client_reference_id`
 * (Stripe propagates this into the Checkout session so we can attribute revenue
 * back to the originating page in the webhook handler).
 */

export type UtmCampaign =
  | "a2a_substrate_499"
  | "a2a_substrate_999"
  | "governance_substrate_499"
  | "cobol_substrate_999"
  | "cobol_substrate_defence_4990"
  | "councilof_substrate_499"
  | "universe_substrate_1499"
  | "defence_substrate_4990"
  | "payg_universal_29"
  | "starter_29"
  | "pro_199"
  | "pro_149"
  | "scorecard_audit"
  | "watermark_attest"
  | "bias_detection_299"
  | "nis2_de_499"
  | "care_homes_99"
  | "haulage_99"
  | "smb_99"
  | "audit_prep_bundle";

export function withUtm(
  stripeUrl: string,
  pagePath: string,
  campaign: UtmCampaign | string,
  extras?: Record<string, string>
): string {
  if (!stripeUrl.startsWith("https://buy.stripe.com/")) return stripeUrl;
  // Strip leading slash from page path
  const medium = pagePath.replace(/^\//, "").replace(/\//g, "_") || "home";
  const sep = stripeUrl.includes("?") ? "&" : "?";
  const params = new URLSearchParams({
    utm_source: "meok.ai",
    utm_medium: medium,
    utm_campaign: campaign,
    client_reference_id: `${medium}__${campaign}`,
    ...(extras || {}),
  });
  return `${stripeUrl}${sep}${params.toString()}`;
}

/**
 * Build a Twitter (X) intent URL.
 */
export function twitterShareUrl(text: string, url: string, hashtags?: string[]): string {
  const params = new URLSearchParams({
    text,
    url,
    ...(hashtags && hashtags.length ? { hashtags: hashtags.join(",") } : {}),
  });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

/**
 * Build a LinkedIn share URL (sharing-offsite — works without a LinkedIn API key).
 */
export function linkedInShareUrl(url: string): string {
  const params = new URLSearchParams({ url });
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
}

/**
 * Build an HN submit URL (post-to-Hacker-News intent).
 */
export function hackerNewsSubmitUrl(url: string, title: string): string {
  const params = new URLSearchParams({ u: url, t: title });
  return `https://news.ycombinator.com/submitlink?${params.toString()}`;
}
