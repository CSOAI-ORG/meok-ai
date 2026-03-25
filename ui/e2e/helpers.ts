import { type Page } from '@playwright/test'

/** Base URL used by all E2E tests. */
export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

/** Default timeout for assertions (ms). */
export const TIMEOUT = 15_000

/**
 * Build a full URL from a relative path.
 *
 * @example testURL('/guardian') → 'http://localhost:3000/guardian'
 */
export function testURL(path: string): string {
  const normalised = path.startsWith('/') ? path : `/${path}`
  return `${BASE_URL}${normalised}`
}

/**
 * Wait until the page reaches network-idle state.
 * Useful after navigation to ensure all assets have loaded.
 */
export async function waitForPageLoad(page: Page): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout: TIMEOUT })
}

/**
 * Navigate to a path and wait for network idle.
 */
export async function navigateAndWait(page: Page, path: string): Promise<void> {
  await page.goto(path)
  await waitForPageLoad(page)
}
