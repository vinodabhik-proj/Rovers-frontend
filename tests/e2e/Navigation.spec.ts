import { test, expect } from "@playwright/test";

test("nav links navigate to reports", async ({ page, baseURL }) => {
  await page.goto(baseURL || "/");
  await page.getByText("Reports").click();
  await expect(page.getByRole("heading", { name: "Match Reports" })).toBeVisible();
});
