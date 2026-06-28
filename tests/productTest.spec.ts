import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/productPage";
import loginCases from "../testData/loginCases.json";

test.describe("Login Test", () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await page.goto("./");
  });

  test("User should be able to check out the products", async ({ page }) => {
    loginPage.login(
      loginCases.validUser.userName,
      loginCases.validUser.passWord,
    );

    await expect(productPage.swagLabsText).toBeVisible();
    await expect(productPage.primaryHeader).toContainText("Swag Labs");

    await expect(page.locator('[data-test="title"]')).toContainText("Products");

    const products = await page.locator('[data-test*="-title-link"]').all();

    expect(products.length).toBe(6);

    const addToCartButtons = await page
      .locator('[data-test*="add-to-cart"]')
      .all();

    const i = Math.floor(Math.random() * addToCartButtons.length);

    const selectedProductName = await products[i].textContent();

    const dataTest = await addToCartButtons[i].getAttribute("data-test");

    await addToCartButtons[i].click();

    await expect(
      page.locator(
        `[data-test="${dataTest!.replace("add-to-cart-", "remove-")}"]`,
      ),
    ).toBeVisible();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]'),
    ).toContainText("1");


    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');

    expect(selectedProductName).not.toBeNull();
    await expect(page.locator('[data-test="inventory-item-name"]')).toContainText(selectedProductName!);

  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
