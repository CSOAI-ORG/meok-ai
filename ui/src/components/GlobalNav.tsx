"use client";

/**
 * GlobalNav — thin re-export of MarketingNav for use in the root layout.
 * Importing MarketingNav directly in layout.tsx would fail because layout is
 * a Server Component and MarketingNav uses client-side hooks.  This file is
 * marked "use client" so Next.js keeps it on the client boundary.
 */
export { MarketingNav as GlobalNav } from "@/components/marketing-nav";
