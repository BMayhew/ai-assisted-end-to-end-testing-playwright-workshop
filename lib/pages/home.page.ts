import { Page } from "@playwright/test";

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com");
  }

  async selectProduct(name: string) {
    await this.page.getByText(name).click();
  }
}
