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

  test("should be login with valid Credentials", async ({ page }) => {
    loginPage.login(
      loginCases.validUser.userName,
      loginCases.validUser.passWord,
    );

    await expect(productPage.swagLabsText).toBeVisible();
    await expect(productPage.primaryHeader).toContainText("Swag Labs");
  });

  test("should not be login with Invalid Credentials", async ({ page }) => {
    loginPage.login(
      loginCases.invalidUser.userName,
      loginCases.invalidUser.password,
    );
    await expect(loginPage.errorMessage).toContainText(
      loginCases.invalidUser.expectedError,
    );
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
