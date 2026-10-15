import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "frontend",
      testMatch: "**/*.browser.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "http://127.0.0.1:3100",
      },
    },
    {
      name: "backend",
      testMatch: "**/*.api.spec.ts",
      use: {
        baseURL: "http://127.0.0.1:8100",
      },
    },
  ],
  webServer: [
    {
      command: "npm run dev -- --hostname 127.0.0.1 --port 3100",
      url: "http://127.0.0.1:3100",
      timeout: 120_000,
      reuseExistingServer: false,
    },
    {
      command:
        "uv run --directory ../ringgitgo-be uvicorn app.main:app --host 127.0.0.1 --port 8100",
      url: "http://127.0.0.1:8100/health",
      timeout: 60_000,
      reuseExistingServer: false,
    },
  ],
});
