import { ClerkProvider } from "@clerk/nextjs";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const hasValidClerk = clerkKey.startsWith("pk_") && !clerkKey.includes("REPLACE");

/**
 * Wraps children in ClerkProvider only when a real publishable key is set.
 *
 * IMPORTANT: This must NOT live in the root layout. ClerkProvider's internal
 * `useRouter()` (from next/compat/router) calls `useContext` during static
 * prerendering, which crashes the build ("Cannot read properties of null
 * (reading 'useContext')") on every statically-generated page. Mount it only
 * inside the authenticated route sections (which are force-dynamic), so the
 * marketing/SEO pages prerender cleanly without Clerk in their tree.
 */
export function MaybeClerk({ children }: { children: React.ReactNode }) {
  if (!hasValidClerk) return <>{children}</>;
  return <ClerkProvider>{children}</ClerkProvider>;
}
