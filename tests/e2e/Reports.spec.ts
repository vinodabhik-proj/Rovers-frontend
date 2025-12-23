import { test, expect } from "@playwright/test";

test("reports page renders report content", async ({ page }) => {
  await page.route("**/api/reports", route =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        {
          id: 1,
          roversScore: 3,
          oppoScore: 2,
          oppoName: "City FC",
          mom: "Ryan",
          dod: "Ben",
          description: "A thrilling comeback.",
          date: "2024-06-01T00:00:00.000Z",
        },
      ]),
    })
  );

  await page.goto("/reports");

  await expect(
    page.getByRole("heading", { name: /match reports/i })
  ).toBeVisible();

  await expect(page.getByText("City FC")).toBeVisible();
  await expect(page.getByText("MOM: Ryan")).toBeVisible();
  await expect(page.getByText("DOD: Ben")).toBeVisible();
});

