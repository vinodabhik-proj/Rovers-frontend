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

  const [request] = await Promise.all([
    page.waitForRequest((req) =>
      req.url().includes("/auth/entra/login")
    ),
    page.getByText("Microsoft").click(),
  ]);

  expect(request.url()).toContain("/auth/entra/login");
});
