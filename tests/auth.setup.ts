import { test as setup } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

// Where the saved session will be written
const authFile = "playwright/.auth/standard_user.json";

setup("authenticate as standard_user", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("./");
  await loginPage.loginAsStandardUser();

  // Wait until we're actually past login before saving
  await page.waitForURL(/inventory/);

  // ✅ Save cookies + localStorage to a file
  await page.context().storageState({ path: authFile });
});