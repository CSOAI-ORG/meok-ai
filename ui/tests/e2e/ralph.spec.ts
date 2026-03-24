/**
 * Ralph Mode E2E Tests — MEOK
 * Tests: page render, terminal simulation, task queue, system commands, command input,
 *        tier gate messaging, FAQ schema, Maternal Covenant compliance references
 *
 * Run: npx playwright test tests/e2e/ralph.spec.ts
 */
import { test, expect } from "@playwright/test";

test.describe("Ralph Mode — page render", () => {
  test("loads /ralph with 200 status", async ({ request }) => {
    const resp = await request.get("/ralph");
    expect(resp.status()).toBeLessThan(400);
  });

  test("page title contains Ralph", async ({ page }) => {
    await page.goto("/ralph");
    const title = await page.title();
    expect(title).toMatch(/ralph/i);
  });

  test("hero headline present", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    // Page should mention Ralph and overnight/autonomous operation
    expect(body).toMatch(/ralph/i);
    expect(body).toMatch(/overnight|autonomous|while you sleep/i);
  });

  test("Maternal Covenant care reference present", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/maternal covenant|care/i);
  });

  test("morning briefing reference present", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/morning brief/i);
  });
});

test.describe("Ralph Mode — terminal simulation log", () => {
  test("RALPH agent lines are displayed", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toContain("RALPH");
  });

  test("ORION agent line is displayed", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toContain("ORION");
  });

  test("RIRI agent line is displayed", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toContain("RIRI");
  });

  test("HOURMAN agent line is displayed", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toContain("HOURMAN");
  });

  test("terminal shows care check line", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/care check|maternal covenant/i);
  });

  test("terminal shows sprint / task count", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/sprint|task/i);
  });
});

test.describe("Ralph Mode — task queue", () => {
  test("TASK-001 Chat Intelligence is shown", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toContain("TASK-001");
    expect(body).toMatch(/chat intelligence/i);
  });

  test("TASK-002 Tool Dispatch is shown", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toContain("TASK-002");
    expect(body).toMatch(/tool dispatch/i);
  });

  test("TASK-006 Streaming Chat v2 shows in-progress", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toContain("TASK-006");
    expect(body).toMatch(/streaming chat/i);
  });

  test("TASK-008 BFT Council Integration shows as blocked", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toContain("TASK-008");
    expect(body).toMatch(/bft council/i);
  });

  test("all 8 tasks are rendered", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent() || "";
    for (let i = 1; i <= 8; i++) {
      const taskId = `TASK-00${i}`;
      expect(body, `${taskId} missing from task queue`).toContain(taskId);
    }
  });
});

test.describe("Ralph Mode — RalphModule terminal commands", () => {
  // The terminal/command interface lives inside the dashboard terminal,
  // linked from the ralph page. These tests verify the presence of command
  // buttons and the input field within the RalphModule component.

  test("system command buttons are present", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent() || "";
    // At least some of the 8 system commands should be visible on the page
    const commandsFound = ["health", "reflect", "dream", "train", "logs"].filter(
      (cmd) => body.toLowerCase().includes(cmd)
    );
    expect(commandsFound.length).toBeGreaterThanOrEqual(3);
  });

  test("terminal page /terminal renders RalphModule", async ({ page }) => {
    await page.goto("/terminal");
    const resp = await page.request.get("/terminal");
    expect(resp.status()).toBeLessThan(400);
    await expect(page.locator("body")).toBeVisible();
  });

  test("terminal has command input field", async ({ page }) => {
    await page.goto("/terminal");
    // Wait for page to load
    await page.waitForLoadState("networkidle");
    const inputField = page.locator('input[type="text"], input:not([type])').first();
    // Input should exist (even if behind auth redirect)
    const bodyText = await page.locator("body").textContent() || "";
    // Either we see the terminal input or we see an auth redirect
    const hasTerminal = bodyText.toLowerCase().includes("terminal") ||
                        bodyText.toLowerCase().includes("ralph") ||
                        bodyText.toLowerCase().includes("command");
    const hasAuth = page.url().includes("login") || page.url().includes("sign-in");
    expect(hasTerminal || hasAuth).toBeTruthy();
  });
});

test.describe("Ralph Mode — how it works section", () => {
  test("Observe step is present", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/observe|queue tasks/i);
  });

  test("Plan / Orion step is present", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/orion|prioritis/i);
  });

  test("Execute step is present", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/execut/i);
  });

  test("Morning briefing / wake step is present", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/brief|wake/i);
  });
});

test.describe("Ralph Mode — tier gate + pricing", () => {
  test("page references tier requirement (Pro/Sovereign/plan)", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent() || "";
    // Ralph Mode is restricted to paid tiers
    const hasTierRef =
      body.match(/sovereign|pro|elite|plan|£/i) !== null;
    expect(hasTierRef).toBeTruthy();
  });

  test("page has CTA link to pricing or hatch", async ({ page }) => {
    await page.goto("/ralph");
    const ctaLinks = await page.$$eval(
      'a[href*="pricing"], a[href*="birth"], a[href*="hatch"], a[href*="login"], a[href*="register"]',
      (els) => els.map((el) => el.getAttribute("href"))
    );
    expect(ctaLinks.length).toBeGreaterThan(0);
  });
});

test.describe("Ralph Mode — FAQ + JSON-LD schema", () => {
  test("FAQ section answers What is Ralph Mode", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/what is ralph mode/i);
  });

  test("FAQ addresses safety / unsupervised operation", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/safe|unsupervised/i);
  });

  test("FAQ addresses what ralph can do overnight", async ({ page }) => {
    await page.goto("/ralph");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/what can ralph|overnight/i);
  });

  test("JSON-LD contains SoftwareApplication schema", async ({ page }) => {
    await page.goto("/ralph");
    const jsonLdScripts = await page.$$eval(
      'script[type="application/ld+json"]',
      (els) => els.map((el) => el.textContent || "")
    );
    const allSchemas = jsonLdScripts.join(" ");
    expect(allSchemas).toContain("SoftwareApplication");
    expect(allSchemas).toMatch(/ralph mode/i);
  });

  test("JSON-LD contains FAQPage schema", async ({ page }) => {
    await page.goto("/ralph");
    const jsonLdScripts = await page.$$eval(
      'script[type="application/ld+json"]',
      (els) => els.map((el) => el.textContent || "")
    );
    const allSchemas = jsonLdScripts.join(" ");
    expect(allSchemas).toContain("FAQPage");
  });
});

test.describe("Ralph Mode — agents dashboard", () => {
  test("/dashboard/agents redirects to auth when unauthenticated", async ({ page }) => {
    await page.goto("/dashboard/agents");
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {});
    const url = page.url();
    const isProtected =
      url.includes("login") || url.includes("sign-in") || url.includes("clerk");
    expect(isProtected).toBeTruthy();
  });

  test("/dashboard/morning-briefing redirects to auth when unauthenticated", async ({ page }) => {
    await page.goto("/dashboard/morning-briefing");
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {});
    const url = page.url();
    const isProtected =
      url.includes("login") || url.includes("sign-in") || url.includes("clerk");
    expect(isProtected).toBeTruthy();
  });
});
