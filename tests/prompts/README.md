# Test Prompts

This directory contains the generated test files and prompts used at each iteration. All versions target the same scenario - Scenario 1 (Add Product to Cart and Verify Cart Contents) from the V3 critical path spec.

## Version 1 — Out of the Box Agent

Used the `playwright-test-generator` agent with Claude Sonnet 4.

**Prompt:**

```
### Scenario 1: Add Product to Cart and Verify Cart Contents

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Medium

**Preconditions:**

- Fresh browser session, no items in cart
- Homepage loaded successfully

**Steps:**

1. Navigate to https://practicesoftwaretesting.com
2. Click on a specific product card (e.g., "Combination Pliers")
3. Verify product detail page loads with correct name, price, and description
4. Set quantity to 2 using the quantity input or increment button
5. Click "Add to cart" button
6. Verify toast/confirmation message appears
7. Verify cart icon badge updates to show "2"
8. Click the cart icon in the navigation header
9. Verify cart page shows the correct product name, unit price, quantity of 2, and line total

**Expected Results:**

- Product detail page displays all required information
- "Add to cart" succeeds with visual confirmation
- Cart badge reflects the correct item count
- Cart page shows accurate product details and calculated totals

**Automation Notes:**

- Use `[data-test="add-to-cart"]` for the add button
- Cart badge may update asynchronously — use `toHaveText()` or `toContainText()` with auto-retry
- Capture product name and price on the detail page for assertion against cart values
- Quantity input may use `[data-test="quantity"]` or similar
```

- **Output:** [v1-test/add-product-to-cart-and-verify-cart-contents.spec.ts](v1-test/add-product-to-cart-and-verify-cart-contents.spec.ts)

## Version 2 — Model Upgrade

Same prompt and agent as V1, switched to Claude Opus 4.6.

- **Output:** [v2-test/add-product-to-cart-and-verify-cart-contents.spec.ts](v2-test/add-product-to-cart-and-verify-cart-contents.spec.ts)

## Version 3 — Healed & Refactored with Page Objects

The generated test had two flaky areas: a product click relying on a volatile unique ID, and a strict mode violation on price assertions. Used the `playwright-test-healer` agent to fix those issues.

**Healing prompt:**

```
The test that was generated failed let's make it less flakey  First we should go ahead and
remove all the comments, as the test is clear in what it is.

2 areas that need to be addressed as the tests will fail because of these issues. First is
the click on prodcut with unique ID should follow the product name or something else unique,
as that ID get's replaced often... 2nd the test failed on the last visible assertion

  Locator: getByText('$28.30')
    Expected: visible
    Error: strict mode violation: getByText('$28.30') resolved to 2 elements:
        1) <span data-test="line-price" _ngcontent-ng-c2628374919="">$28.30</span> aka locator('[data-test="line-price"]')
        2) <td data-test="cart-total" class="col-md-2 text-end" _ngcontent-ng-c2628374919="">$28.30</td> aka locator('[data-test="cart-total"]')
```

After healing the test, I used a standard agent with Claude Opus 4.6 to build a custom agent for generating page objects.

**Page object agent prompt:**

```
Now I have the test that is working as expected. want to create a new agent that will use
playwright best practices to create a page object for this test, and implement it. Can you
first help me create the agent with details. feel free to ask me question in order to build
out the agent needed so I get what I want first. (don't modify any files right now the goal
will be to create the agent file itself.)
```

This produced the [playwright-page-object-generator](../../.github/agents/playwright-page-object-generator.agent.md) agent, which was then used to extract page objects and refactor the test.

- **Page Objects:** [lib/pages/](../../lib/pages/) — `home.page.ts`, `product-detail.page.ts`, `cart.page.ts`
- **Final Test:** [tests/add-product-to-cart-and-verify-cart-contents.spec.ts](../add-product-to-cart-and-verify-cart-contents.spec.ts)
