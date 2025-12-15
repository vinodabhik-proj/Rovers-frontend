import { test, expect } from "@playwright/test";

test("nav links navigate to reports", async ({ page, baseURL }) => {
  await page.goto(baseURL || "/");

  await Promise.all([
    page.waitForURL(/\/reports/),
    page.getByRole("link", { name: "Reports" }).click(),
  ]);

  await expect(
    page.getByRole("heading", { name: "Match Reports" })
  ).toBeVisible();

});
