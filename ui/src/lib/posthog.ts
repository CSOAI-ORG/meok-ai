import posthog from 'posthog-js'

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || ''
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com'

export function initPostHog() {
  if (typeof window === 'undefined') return
  if (!POSTHOG_KEY) return
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false, // We'll do this manually
    loaded: (ph) => {
      if (process.env.NODE_ENV === 'development') ph.opt_out_capturing()
    },
  })
}

export function trackEvent(event: string, properties?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  if (!POSTHOG_KEY) return
  posthog.capture(event, properties)
}

export function trackVariant(variantId: string, userId?: string) {
  trackEvent('variant_assigned', { variant_id: variantId, user_id: userId })
}

export function identifyUser(userId: string, traits?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  if (!POSTHOG_KEY) return
  posthog.identify(userId, traits)
}

export function trackBirthStep(step: string, properties?: Record<string, unknown>) {
  trackEvent(`birth_${step}`, { ...properties, funnel: 'birth_ceremony' })
}

export function trackFeatureDiscovered(featureName: string) {
  trackEvent('feature_discovered', { feature: featureName, screen: 'onboarding_discovery' })
}

export default posthog
