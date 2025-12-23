import { test, expect } from "@playwright/test";

test("home page renders main heading", async ({ page }) => {
  await page.goto("/");

  const heading = page.getByRole("heading", {
    name: /trumpington rovers/i,
    level: 1,
  });

  await expect(heading).toBeVisible();
});

