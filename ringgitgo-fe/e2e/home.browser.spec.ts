import { expect, test } from "@playwright/test";

test("home page renders in the browser", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /to get started, edit the page\.tsx file\./i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Documentation" }),
  ).toHaveAttribute("href", /https:\/\/nextjs\.org\/docs/);
});
