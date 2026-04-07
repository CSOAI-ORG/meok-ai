import { defineConfig, devices } from '@playwright/test'

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3000'
const CI = process.env.CI === 'true'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!CI,
  retries: CI ? 2 : 0,
  workers: CI ? 2 : 1,
  reporter: CI ? 'line' : 'html',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: BASE_URL,
    trace: CI ? 'on-first-retry' : 'off',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'api',
      testMatch: /.*api.*\.spec\.ts/,
      use: {
        baseURL: BASE_URL,
      },
    },
    {
      name: 'fast',
      testMatch: /.*(smoke|health|accessibility|api-smoke|api-endpoints|api-errors|api-extended|sov3|ui-pages).*\.spec\.ts/,
      timeout: 15000,
    },
  ],
  webServer: CI ? {
    command: 'npm run dev',
    url: BASE_URL,
    timeout: 120000,
    reuseExistingServer: true,
  } : undefined,
})
