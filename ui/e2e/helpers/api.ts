import type { Page, APIResponse } from '@playwright/test'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface ApiRequestOptions {
  /** Request body — will be JSON-serialised automatically */
  body?: Record<string, unknown> | unknown[]
  /** Extra headers to merge into the request */
  headers?: Record<string, string>
  /** Request timeout in milliseconds (default: 10 000) */
  timeout?: number
}

/**
 * Make an authenticated API request that reuses the browser's cookie jar.
 *
 * Because Playwright's `page.request` shares the same storage state as the
 * page (including auth cookies set by Clerk or a custom session provider),
 * this wrapper is sufficient for testing protected endpoints without any
 * manual token management.
 *
 * @param page    - A Playwright `Page` instance (ideally from `authenticatedPage` fixture)
 * @param method  - HTTP verb
 * @param path    - Absolute path, e.g. `/api/user/settings`
 * @param options - Optional body, headers, and timeout
 * @returns The raw Playwright `APIResponse`
 *
 * @example
 * const res = await apiRequest(authenticatedPage, 'GET', '/api/user/settings')
 * expect(res.status()).toBe(200)
 *
 * @example
 * const res = await apiRequest(authenticatedPage, 'POST', '/api/research', {
 *   body: { query: 'What is MEOK?' },
 * })
 * const json = await res.json()
 * expect(json).toHaveProperty('answer')
 */
export async function apiRequest(
  page: Page,
  method: HttpMethod,
  path: string,
  options: ApiRequestOptions = {}
): Promise<APIResponse> {
  const { body, headers = {}, timeout = 10_000 } = options

  const requestInit: Parameters<typeof page.request.fetch>[1] = {
    method,
    timeout,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
  }

  if (body !== undefined) {
    requestInit.data = body
  }

  return page.request.fetch(path, requestInit)
}
