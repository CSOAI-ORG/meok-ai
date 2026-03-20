import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/product", "/labs", "/blog", "/register", "/login", "/privacy", "/terms"],
        disallow: ["/dashboard", "/chat", "/settings", "/characters", "/api/", "/birth"],
      },
      // Allow AI crawlers to index our research content
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "anthropic-ai"],
        allow: ["/", "/product", "/labs", "/blog"],
        disallow: ["/dashboard", "/chat", "/settings", "/characters", "/api/"],
      },
    ],
    sitemap: "https://meok.ai/sitemap.xml",
    host: "https://meok.ai",
  };
}
