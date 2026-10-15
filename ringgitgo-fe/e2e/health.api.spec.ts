import { expect, test } from "@playwright/test";

test("backend health endpoint returns ok over HTTP", async ({ request }) => {
  const response = await request.get("/health");

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(await response.json()).toEqual({ status: "ok" });
});
