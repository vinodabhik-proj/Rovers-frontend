import { test, expect } from "@playwright/test";

test("nav links navigate to reports", async ({ page }) => {

  await page.route("**/api/reports", async route => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        {
          id: 1,
          roversScore: 2,
          oppoScore: 1,
          oppoName: "Test FC",
          date: new Date().toISOString(),
          mom: "Player A",
          dod: "Player B",
          description: "Test report"
        }
      ])
    });
  });

  // Go to home page
  await page.goto("/");

  // Click Reports and wait for route change
  await Promise.all([
    page.waitForURL(/\/reports/),
    page.getByRole("link", { name: "Reports" }).click(),
  ]);

  await expect(page.getByText("Loading...")).toBeVisible();

  await expect(
    page.getByRole("heading", { name: /match reports/i })
  ).toBeVisible();
});

