import { Page, Locator } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  readonly swagLabsText: Locator;
  readonly primaryHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.swagLabsText = page.getByText("Swag Labs");
    this.primaryHeader = page.locator('[data-test="primary-header"]');
  }

  async isLoaded(): Promise<void> {
    await this.swagLabsText.isVisible();
  }
}
