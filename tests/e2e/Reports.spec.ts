import { test, expect } from "@playwright/test";

test("reports page displays mocked reports", async ({ page, baseURL }) => {
  await page.route("**/api/reports", route =>
    route.fulfill({
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        {
          id: 1,
          roversScore: 3,
          oppoScore: 2,
          oppoName: "City FC",
          mom: "Ryan",
          dod: "Ben",
          description: "A thrilling comeback.",
          date: "2024-06-01T00:00:00.000Z"
        }
      ])
    })
  );

  await page.goto((baseURL || "") + "/reports");
  await expect(page.getByText("City FC")).toBeVisible();
  await expect(page.getByText("MOM: Ryan")).toBeVisible();
});
