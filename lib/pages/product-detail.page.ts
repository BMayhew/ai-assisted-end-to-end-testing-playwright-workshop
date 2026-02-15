import { Page } from "@playwright/test";

export class ProductDetailPage {
  constructor(private readonly page: Page) {}

  readonly productName = this.page.getByTestId("product-name");
  readonly quantity = this.page.getByTestId("quantity");
  readonly increaseQuantityButton = this.page.getByTestId("increase-quantity");
  readonly addToCartButton = this.page.getByTestId("add-to-cart");
  readonly cartQuantity = this.page.getByTestId("cart-quantity");
  readonly successMessage = this.page.getByText(
    "Product added to shopping cart.",
  );

  async increaseQuantity() {
    await this.increaseQuantityButton.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.page.getByTestId("nav-cart").click();
  }
}
