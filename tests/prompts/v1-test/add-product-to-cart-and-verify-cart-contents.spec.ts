import { test, expect } from '@playwright/test';

test.describe('Add Product to Cart and Verify Cart Contents', () => {
  test('Add Product to Cart and Verify Cart Contents', async ({ page }) => {
    // Navigate to https://practicesoftwaretesting.com
    await page.goto('https://practicesoftwaretesting.com');
    
    // Click on a specific product card (e.g., "Combination Pliers")
    await page.locator('[data-test="product-01KHHHN839WHPKAB8GHWVMHBHH"]').click();
    
    // Verify product detail page loads with correct name, price, and description
    await expect(page.getByRole('heading', { name: 'Combination Pliers' })).toBeVisible();
    await expect(page.getByText('$14.15')).toBeVisible();
    await expect(page.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBeVisible();
    
    // Set quantity to 2 using the quantity input or increment button
    await page.locator('[data-test="increase-quantity"]').click();
    
    // Click "Add to cart" button
    await page.locator('[data-test="add-to-cart"]').click();
    
    // Verify cart icon badge updates to show "2"
    await expect(page.getByText('2')).toBeVisible();
    
    // Click the cart icon in the navigation header
    await page.locator('[data-test="nav-cart"]').click();
    
    // Verify cart page shows the correct product name, unit price, quantity of 2, and line total
    await expect(page.getByText('Combination Pliers')).toBeVisible();
    await expect(page.getByText('$14.15')).toBeVisible();
    await expect(page.locator('[data-test="product-quantity"]')).toHaveValue('2');
    await expect(page.getByText('$28.30')).toBeVisible();
  });
});