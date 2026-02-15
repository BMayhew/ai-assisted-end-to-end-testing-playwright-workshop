// spec: specs/v2/critical-path-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add Product to Cart and Verify Cart Contents', () => {
  test('Add Product to Cart and Verify Cart Contents', async ({ page }) => {
    // 1. Navigate to https://practicesoftwaretesting.com
    await page.goto('https://practicesoftwaretesting.com');

    // 2. Click on the "Combination Pliers" product card
    await page.locator('[data-test="product-01KHHN305R20NHVT1RBXXK0XVW"]').click();

    // 3. Verify product detail page loads with correct name, price, and description
    await expect(page.getByText('Combination Pliers')).toBeVisible();
    await expect(page.getByText('$14.15')).toBeVisible();
    await expect(page.getByText('Lorem ipsum dolor sit amet')).toBeVisible();

    // 4. Set quantity to 2 using the increment button
    await page.locator('[data-test="increase-quantity"]').click();
    await expect(page.locator('[data-test="quantity"]')).toHaveValue('2');

    // 5. Click "Add to cart" button
    await page.locator('[data-test="add-to-cart"]').click();

    // 6. Verify toast/confirmation message appears
    await expect(page.getByText('Product added to shopping cart.')).toBeVisible();

    // 7. Verify cart icon badge updates to show "2"
    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('2');

    // 8. Click the cart icon in the navigation header
    await page.locator('[data-test="nav-cart"]').click();

    // 9. Verify cart page shows the correct product name, unit price, quantity of 2, and line total
    await expect(page.getByText('Combination Pliers')).toBeVisible();
    await expect(page.getByText('$14.15')).toBeVisible();
    await expect(page.locator('[data-test="product-quantity"]')).toHaveValue('2');
    await expect(page.getByText('$28.30')).toBeVisible();
  });
});
