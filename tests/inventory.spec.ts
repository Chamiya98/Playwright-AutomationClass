import { test, expect } from "@playwright/test";

// ✅ No login step anywhere — session is already loaded
test("inventory page shows products", async ({ page }) => {
  await page.goto("/inventory.html");

  await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test("can add item to cart", async ({ page }) => {
  await page.goto("/inventory.html");

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("1");
});