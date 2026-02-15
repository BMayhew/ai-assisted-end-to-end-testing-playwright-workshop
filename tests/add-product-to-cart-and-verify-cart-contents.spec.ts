import { test, expect } from "@playwright/test";
import { HomePage } from "../lib/pages/home.page";
import { ProductDetailPage } from "../lib/pages/product-detail.page";
import { CartPage } from "../lib/pages/cart.page";

test.describe("Add Product to Cart and Verify Cart Contents", () => {
  test("Add Product to Cart and Verify Cart Contents", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await homePage.selectProduct("Combination Pliers");

    const productDetailPage = new ProductDetailPage(page);
    await expect(page.getByText("Combination Pliers")).toBeVisible();
    await expect(page.getByText("$14.15")).toBeVisible();
    await expect(page.getByText("Lorem ipsum dolor sit amet")).toBeVisible();

    await productDetailPage.increaseQuantity();
    await expect(productDetailPage.quantity).toHaveValue("2");

    await productDetailPage.addToCart();

    await expect(productDetailPage.successMessage).toBeVisible();
    await expect(productDetailPage.cartQuantity).toHaveText("2");

    await productDetailPage.goToCart();

    const cartPage = new CartPage(page);
    await expect(page.getByText("Combination Pliers")).toBeVisible();
    await expect(page.getByText("$14.15")).toBeVisible();
    await expect(cartPage.productQuantity).toHaveValue("2");
    await expect(cartPage.linePrice).toHaveText("$28.30");
    await expect(cartPage.cartTotal).toHaveText("$28.30");
  });
});
