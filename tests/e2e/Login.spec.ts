import { test, expect } from "@playwright/test";

test("user can navigate to login page", async ({ page }) => {
  await page.goto("/login");

  await expect(
    page.getByRole("heading", { name: /login/i })
  ).toBeVisible();

  await expect(
    page.getByText("Microsoft")
  ).toBeVisible();
});

test("clicking Microsoft triggers redirect", async ({ page }) => {
  await page.goto("/login");

  await Promise.all([
    page.waitForURL(/auth\/entra\/login/),
    page.getByText("Microsoft").click(),
  ]);
});