import { Page } from "@playwright/test";

export class CartPage {
  constructor(private readonly page: Page) {}

  readonly productQuantity = this.page.getByTestId("product-quantity");
  readonly linePrice = this.page.getByTestId("line-price");
  readonly cartTotal = this.page.getByTestId("cart-total");
}
