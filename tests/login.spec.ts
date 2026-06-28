import { test, expect, Page } from "@playwright/test";

async function login(page: Page, user: string, pass: string) {
  await page.locator('[data-test="username"]').fill(user);
  await page.locator('[data-test="password"]').fill(pass);
  await page.locator('[data-test="login-button"]').click();
}

test.describe("Login Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("should be login with valid Credentials", async ({ page }) => {
    await login(page, "standard_user", "secret_sauce");
    await expect(page.getByText("Swag Labs")).toBeVisible();
    await expect(page.locator('[data-test="primary-header"]')).toContainText(
      "Swag Labs",
    );

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test("should not be login with Invalid Credentials", async ({ page }) => {
    await login(page, "Test", "secret_sauce");

    await expect(page.locator('[data-test="error"]')).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
});
