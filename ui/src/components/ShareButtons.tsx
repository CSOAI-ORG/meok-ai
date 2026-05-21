/**
 * <ShareButtons /> — minimal Twitter (X) + LinkedIn + Hacker News share row.
 *
 * Usage:
 *   <ShareButtons
 *     text="20 agent-to-agent MCPs. 1 signed event. 1 invoice."
 *     url="https://meok.ai/a2a"
 *     hashtags={["mcp", "agents", "compliance"]}
 *   />
 */

import {
  twitterShareUrl,
  linkedInShareUrl,
  hackerNewsSubmitUrl,
} from "@/lib/stripe-utm";

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";

type Props = {
  text: string;
  url: string;
  hashtags?: string[];
  hnTitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export default function ShareButtons({
  text,
  url,
  hashtags,
  hnTitle,
  align = "left",
  variant = "light",
}: Props) {
  const isDark = variant === "dark";
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 12px",
    background: isDark ? "rgba(255,255,255,0.08)" : "white",
    color: isDark ? "white" : NAVY,
    border: isDark
      ? "1px solid rgba(255,255,255,0.18)"
      : `1px solid ${NAVY}1a`,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    textDecoration: "none",
  };
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        justifyContent: align === "center" ? "center" : "flex-start",
        flexWrap: "wrap",
        marginTop: 8,
      }}
    >
      <a
        href={twitterShareUrl(text, url, hashtags)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        style={baseStyle}
      >
        <span style={{ fontWeight: 900, color: isDark ? "white" : GOLD }}>X</span>
        Share
      </a>
      <a
        href={linkedInShareUrl(url)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        style={baseStyle}
      >
        <span style={{ fontWeight: 900, color: isDark ? "white" : GOLD }}>in</span>
        LinkedIn
      </a>
      <a
        href={hackerNewsSubmitUrl(url, hnTitle || text)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Post to Hacker News"
        style={baseStyle}
      >
        <span style={{ fontWeight: 900, color: isDark ? "white" : GOLD }}>Y</span>
        HN
      </a>
    </div>
  );
}
