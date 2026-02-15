# Critical Path Test Plan: Practice Software Testing - Toolshop

**Generated:** February 15, 2026
**Target URL:** https://practicesoftwaretesting.com
**Alternate URL:** https://testsmith-io.github.io/practice-software-testing/#/
**Total Scenarios:** 20

## Executive Summary

Practice Software Testing - Toolshop is a demo e-commerce application for tools and hardware, designed for QA training. It features product browsing with category/brand/price filtering, user registration and authentication (including Google OAuth), a shopping cart with quantity management, a multi-step checkout process, and user account management. The application contains intentional bugs. This plan prioritizes the shopping cart and checkout flow (highest business value), followed by authentication, search/filtering, and account management.

## Application Overview

**Main Features Discovered:**

- **Product Catalog:** 50+ tools across categories (Hand Tools → Hammer/Pliers/Screwdriver/Wrench, Power Tools → Grinder/Sander/Saw/Drill, Other → Measuring Tape/Storage/Tool Set/Workbench)
- **Search & Filtering:** Text search with debounce, category checkbox filters, brand filters (ForgeFlex Tools, MightyCraft Hardware), price range slider ($1–$200), sorting (Name A-Z/Z-A, Price Low-High/High-Low)
- **User Authentication:** Email/password login, Google OAuth, registration with password strength validation, forgot password flow
- **Shopping Cart:** Add-to-cart from product pages, quantity adjustment, item removal, cart icon with count badge
- **Checkout:** Multi-step process (sign-in → billing address → payment method → order confirmation)
- **User Roles:** Customer, Admin (with backend management access)
- **Product Details:** Images, descriptions, CO₂ sustainability ratings, related products, add-to-favourites
- **Contact Form:** Subject dropdown, message field, file attachment
- **Language Selector:** Multi-language support (EN, DE, ES, FR, NL, TR)
- **Chat Widget:** Interactive chat support button

**Key Navigation Structure:**

- Main menu: Home | Categories (dropdown) | Contact | Sign in
- Cart icon in header with item count badge
- Footer: Demo disclaimer, GitHub repo, Support, Privacy Policy

**Known Locator Patterns (data-test attributes):**

- `[data-test="nav-sign-in"]`, `[data-test="nav-contact"]`
- `[data-test="email"]`, `[data-test="password"]`, `[data-test="login-submit"]`
- `[data-test="add-to-cart"]`, `[data-test="cart-quantity"]`
- `[data-test="search-query"]`, `[data-test="search-submit"]`
- Product cards with `[data-test="product-name"]`, `[data-test="product-price"]`

---

## Test Scenarios

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

---

### Scenario 2: Update Cart Quantities and Remove Items

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Medium

**Preconditions:**

- Cart contains at least 2 different products

**Steps:**

1. Add Product A (e.g., "Combination Pliers") to cart with quantity 1
2. Add Product B (e.g., "Claw Hammer") to cart with quantity 1
3. Navigate to cart page
4. Verify both products appear with correct details
5. Increase Product A quantity to 3
6. Verify line total for Product A updates (unit price × 3)
7. Verify cart total recalculates correctly
8. Click remove/delete button for Product B
9. Verify Product B is removed from the cart
10. Verify cart total reflects only Product A

**Expected Results:**

- Quantity updates immediately recalculate line totals
- Cart total accurately reflects sum of all line items
- Item removal clears the product from cart view
- Cart badge count updates after removal

**Automation Notes:**

- Quantity update may require clearing then typing, or using +/- buttons
- Wait for price recalculation after quantity change before asserting
- After removing last item, verify empty cart state message

---

### Scenario 3: Complete Checkout as Logged-In Customer

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Complex

**Preconditions:**

- Registered user account exists (e.g., customer@practicesoftwaretesting.com / welcome01)
- Cart contains at least one item

**Steps:**

1. Log in with valid customer credentials
2. Add a product to cart from the product detail page
3. Navigate to cart and click "Proceed to checkout" (or equivalent)
4. Step 1 - Sign in: Verify user is already authenticated and step auto-advances
5. Step 2 - Billing Address: Verify address fields are pre-populated from user profile; modify if needed and proceed
6. Step 3 - Payment: Select payment method (e.g., Credit Card, Bank Transfer, Cash on Delivery, Buy Now Pay Later, Gift Card)
7. Fill in payment details based on selected method
8. Click "Confirm" or proceed to finalize
9. Step 4 - Confirmation: Verify order confirmation message with order/invoice number displayed
10. Verify cart is cleared after successful order

**Expected Results:**

- Checkout wizard progresses through all steps without error
- Billing address pre-populates for logged-in users
- Payment form validates required fields
- Order confirmation displays a unique order/invoice number
- Cart empties after successful order placement

**Automation Notes:**

- Checkout is a multi-step wizard — each step may load dynamically
- Payment methods include: Bank Transfer, Cash on Delivery, Credit Card, Buy Now Pay Later, Gift Card
- For Credit Card: need card number, expiration date, CVV, cardholder name
- Use `test.step()` to label each checkout phase for better reporting
- Capture the order number from confirmation for potential downstream assertions

---

### Scenario 4: Checkout Requires Authentication

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Simple

**Preconditions:**

- User is NOT logged in
- Cart contains at least one item

**Steps:**

1. As a guest user, add a product to cart
2. Navigate to cart page
3. Click "Proceed to checkout"
4. Verify the checkout process presents a login/sign-in step
5. Verify user cannot proceed past the sign-in step without authenticating
6. Enter valid credentials and log in
7. Verify checkout process advances to billing address step

**Expected Results:**

- Unauthenticated users are prompted to sign in during checkout
- Cart contents persist through the authentication step
- After authentication, checkout continues normally

**Automation Notes:**

- The checkout flow's first step is sign-in — test that it blocks progression
- Verify cart items survive the login redirect
- This tests the integration between auth and checkout systems

---

### Scenario 5: Multi-Item Cart Total Calculations

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Medium

**Preconditions:**

- Empty cart

**Steps:**

1. Navigate to homepage
2. Add Product A to cart (note its exact price)
3. Navigate back to homepage
4. Add Product B to cart (note its exact price)
5. Navigate back and add Product A again (quantity should aggregate)
6. Navigate to cart page
7. Verify Product A shows quantity of 2 with correct line total (price × 2)
8. Verify Product B shows quantity of 1 with correct line total
9. Verify overall cart total equals sum of all line totals
10. Update Product B quantity to 3 and verify recalculation

**Expected Results:**

- Adding the same product multiple times aggregates quantities (not duplicate rows)
- Line totals = unit price × quantity for each item
- Cart total = sum of all line totals
- All calculations update immediately when quantities change

**Automation Notes:**

- Parse prices as numbers (strip currency symbols) for arithmetic validation
- Use `parseFloat()` for price comparison with tolerance for rounding
- Products may have different price formats — handle consistently

---

### Scenario 6: User Login with Valid Credentials

**Priority:** P0
**Category:** Authentication
**Estimated Automation Time:** Simple

**Preconditions:**

- Registered user account exists
- User is not currently logged in

**Steps:**

1. Navigate to https://practicesoftwaretesting.com
2. Click "Sign in" in the main navigation menu
3. Verify login page loads with email and password fields
4. Enter valid email address in the "Email address" field
5. Enter valid password in the "Password" field
6. Click "Login" button
7. Verify successful login — navigation changes to show user menu (e.g., user's name or "My account")
8. Verify "Sign in" link is replaced with account menu

**Expected Results:**

- Login page renders with correct form fields
- Valid credentials authenticate successfully
- UI updates to reflect logged-in state
- User session is established

**Automation Notes:**

- Known test accounts: customer@practicesoftwaretesting.com / welcome01, admin@practicesoftwaretesting.com / welcome01
- Login page URL: /auth/login
- Use `[data-test="login-submit"]` or `getByRole('button', { name: 'Login' })`
- Verify logged-in state by checking for account menu presence in navigation

---

### Scenario 7: User Registration with Valid Data

**Priority:** P1
**Category:** Authentication
**Estimated Automation Time:** Medium

**Preconditions:**

- User does not have an existing account
- Registration page is accessible

**Steps:**

1. Navigate to login page and click "Register your account" link
2. Verify registration form loads at /auth/register
3. Fill in all required fields:
   - First Name: "TestFirst"
   - Last Name: "TestLast"
   - Date of Birth: "1990-01-15"
   - Address: "456 Test Avenue"
   - Postcode: "90210"
   - City: "Los Angeles"
   - State: "California"
   - Country: select "United States of America (the)"
   - Phone: "5551234567"
   - Email: generate unique email (e.g., `testuser+{timestamp}@example.com`)
   - Password: "Welcome01!" (meets strength requirements)
4. Click "Register" button
5. Verify successful registration (redirect to login page or success message)
6. Log in with the newly created credentials
7. Verify login succeeds

**Expected Results:**

- Registration form accepts all valid inputs
- Password strength indicator shows acceptable strength
- Registration completes successfully
- New account is immediately usable for login

**Automation Notes:**

- Generate unique email per test run to avoid duplicate registration errors
- Password must meet strength requirements: 8+ chars, uppercase, lowercase, digit, special char
- Country dropdown has 200+ options — use `selectOption()` by value or label
- Date of birth field format may vary — test the expected input format

---

### Scenario 8: Invalid Login Attempts and Error Messages

**Priority:** P1
**Category:** Authentication / Edge Case
**Estimated Automation Time:** Simple

**Preconditions:**

- Login page loaded

**Steps:**

1. Navigate to /auth/login
2. Submit form with both fields empty — verify validation errors for email and password
3. Enter invalid email format (e.g., "notanemail") — verify email format validation message
4. Enter valid email but incorrect password — click Login — verify "Invalid email or password" error
5. Enter non-existent email with any password — click Login — verify error message
6. Test password visibility toggle button — click the eye icon and verify password field type changes

**Expected Results:**

- Empty field submission shows required field validation
- Invalid email format shows format-specific error
- Wrong credentials show appropriate error message without revealing which field is wrong
- Password toggle switches between masked and visible text

**Automation Notes:**

- Check for `[data-test="login-error"]` or equivalent error element
- Validation errors may appear as inline messages below each field
- Password toggle changes input type from "password" to "text"
- Do NOT assert specific user existence — error should be generic

---

### Scenario 9: Product Search with Text Query

**Priority:** P1
**Category:** Search
**Estimated Automation Time:** Simple

**Preconditions:**

- Homepage loaded

**Steps:**

1. Navigate to homepage
2. Locate the search input field in the product area
3. Type "pliers" in the search field
4. Wait for search results to update (search may auto-execute or require submit)
5. Verify results display products containing "pliers" in their name
6. Verify non-matching products are not shown
7. Count the number of results
8. Clear the search field
9. Verify all products return to the listing

**Expected Results:**

- Search returns only products matching the query
- Search is case-insensitive
- Results update after search execution
- Clearing search restores full product listing

**Automation Notes:**

- Search may use debounce (wait 300-500ms after typing before results appear)
- Use `[data-test="search-query"]` for the search input
- May need to press Enter or click a search icon to trigger
- Use `waitForResponse()` for API-driven search or `waitForTimeout()` as fallback

---

### Scenario 10: Filter Products by Category

**Priority:** P1
**Category:** Search
**Estimated Automation Time:** Medium

**Preconditions:**

- Homepage loaded with full product listing visible

**Steps:**

1. Navigate to homepage
2. Note the total number of products displayed
3. In the left sidebar, expand "Hand Tools" category
4. Check the "Hammer" subcategory checkbox
5. Wait for product list to filter
6. Verify only hammer products are displayed
7. Verify product count has decreased
8. Additionally check "Pliers" subcategory
9. Verify results now include both hammers and pliers
10. Uncheck all filters and verify full listing returns

**Expected Results:**

- Category checkboxes filter the product list
- Multiple category selections show products from all selected categories (OR logic)
- Unchecking filters restores the original product list
- Product count indicator updates correctly

**Automation Notes:**

- Category filters are checkbox-based in the left sidebar
- Categories are hierarchical: top-level (Hand Tools, Power Tools, Other) → subcategories
- Filtering triggers API calls — wait for network response or product list update
- Use `getByRole('checkbox')` or `[data-test="category-filter"]` patterns

---

### Scenario 11: Filter Products by Price Range

**Priority:** P1
**Category:** Search
**Estimated Automation Time:** Medium

**Preconditions:**

- Homepage loaded with products displayed

**Steps:**

1. Navigate to homepage
2. Locate the price range slider in the filter sidebar
3. Set minimum price to $10 and maximum price to $25
4. Wait for product list to update
5. Verify all displayed products have prices within $10–$25 range
6. Verify no products outside the range are shown
7. Reset the price range to full ($1–$200)
8. Verify all products return

**Expected Results:**

- Price slider correctly constrains product results
- All displayed products fall within the selected price range
- Resetting the range restores full results

**Automation Notes:**

- Price slider interaction is complex — may require `fill()` on numeric inputs or drag actions on slider handles
- Alternatively, the slider may have min/max input fields that accept typed values
- Parse product prices from the listing and assert each falls within range
- Allow small float precision tolerance in price assertions

---

### Scenario 12: Sort Products by Price and Name

**Priority:** P1
**Category:** Search
**Estimated Automation Time:** Simple

**Preconditions:**

- Homepage loaded with multiple products visible

**Steps:**

1. Navigate to homepage
2. Locate the sort dropdown
3. Select "Price (Low - High)"
4. Verify products reorder so the cheapest appears first
5. Capture first and last product prices and verify first ≤ last
6. Select "Price (High - Low)"
7. Verify products reorder so the most expensive appears first
8. Select "Name (A - Z)"
9. Verify products are alphabetically ordered
10. Select "Name (Z - A)"
11. Verify reverse alphabetical ordering

**Expected Results:**

- Each sort option correctly reorders the product list
- Price sorting respects numeric ordering (not string)
- Name sorting is alphabetical and case-insensitive

**Automation Notes:**

- Sort dropdown may use `<select>` or custom dropdown component
- Compare at minimum the first and last items for correct order
- For thorough validation, collect all prices/names and verify sorted order
- Use `$eval` or locator arrays to extract multiple product values

---

### Scenario 13: Product Detail Page and Add to Favourites

**Priority:** P1
**Category:** Core Workflow
**Estimated Automation Time:** Simple

**Preconditions:**

- User logged in (favourites require authentication)

**Steps:**

1. Navigate to homepage and click on a specific product
2. Verify product detail page displays: product name, price, description, product image
3. Verify quantity selector defaults to 1
4. Verify "Add to cart" button is visible and enabled
5. Click "Add to favourites" (heart icon or button)
6. Verify favourite confirmation (toast message, icon state change, or similar)
7. Navigate to user account's favourites section
8. Verify the product appears in the favourites list

**Expected Results:**

- Product detail page shows complete product information
- Add to favourites succeeds with visual feedback
- Product is accessible from the user's favourites list

**Automation Notes:**

- Favourites likely require authentication — test with logged-in user
- The favourite button may toggle state (filled/outlined heart icon)
- Navigate to `/account/favourites` or equivalent to verify persistence

---

### Scenario 14: Registration Form Validation Errors

**Priority:** P1
**Category:** Data Management / Edge Case
**Estimated Automation Time:** Medium

**Preconditions:**

- Registration page loaded (/auth/register)

**Steps:**

1. Navigate to /auth/register
2. Click "Register" without filling any fields
3. Verify validation errors appear for all required fields
4. Fill in all fields except email — verify email error on submit
5. Enter an invalid email format (e.g., "notvalid") — verify format error
6. Enter a weak password (e.g., "abc") — verify password strength error
7. Enter a password without uppercase (e.g., "welcome01!") — verify error
8. Enter a password without a digit (e.g., "Welcome!!") — verify error
9. Fill all fields correctly with a valid strong password — verify form submits

**Expected Results:**

- Each required field shows a validation error when empty
- Email format validation catches invalid addresses
- Password strength requirements are individually enforced
- Complete valid form submits successfully

**Automation Notes:**

- Password requirements: minimum 8 chars, at least 1 uppercase, 1 lowercase, 1 digit, 1 special char
- Validation messages may appear inline below each field
- Test one field at a time for clear failure isolation
- Password strength indicator may be a visual bar with color changes

---

### Scenario 15: Contact Form Submission

**Priority:** P1
**Category:** Data Management
**Estimated Automation Time:** Simple

**Preconditions:**

- Contact page accessible

**Steps:**

1. Navigate to /contact via the "Contact" menu item
2. Verify contact form loads with subject, message fields, and optional file attachment
3. Select a subject from the dropdown (e.g., "Customer service", "Webmaster", "Return")
4. Enter email address
5. Enter message text in the message field (minimum length may be required)
6. Optionally attach a file
7. Click "Send" button
8. Verify success confirmation message

**Expected Results:**

- Contact form submits successfully with valid data
- Success message confirms submission
- Subject dropdown contains expected options
- Required field validation works correctly

**Automation Notes:**

- Contact page URL: /contact
- Subject field is a dropdown/select
- Message field may have min/max length requirements
- File attachment uses standard file input — use `setInputFiles()` in Playwright
- Verify success toast or inline confirmation message

---

### Scenario 16: User Profile Update

**Priority:** P1
**Category:** Data Management
**Estimated Automation Time:** Medium

**Preconditions:**

- User logged in with a customer account

**Steps:**

1. Log in with valid customer credentials
2. Navigate to user profile/account page (click username in navigation → "My account" or similar)
3. Verify profile page displays current user information (name, email, phone, address)
4. Update the first name to a new value
5. Update the phone number
6. Click "Save" or "Update" button
7. Verify success confirmation message
8. Refresh the page
9. Verify updated values persist after refresh

**Expected Results:**

- Profile page displays current account information
- Updates save successfully with confirmation
- Changed values persist across page loads
- Form validation prevents invalid data

**Automation Notes:**

- Account page may be at /account/profile or /account
- Some fields may be read-only (email)
- Store original values to restore after test (or use unique test account)
- Verify both UI feedback and data persistence

---

### Scenario 17: Empty Cart State

**Priority:** P2
**Category:** Edge Case
**Estimated Automation Time:** Simple

**Preconditions:**

- Fresh browser session with empty cart

**Steps:**

1. Navigate to the cart page directly (e.g., /checkout)
2. Verify empty cart message is displayed (e.g., "There are no items in your cart")
3. Verify no product rows are shown
4. Verify the "Proceed to checkout" button is either hidden or disabled
5. Navigate back to homepage and verify cart icon shows 0 or no badge

**Expected Results:**

- Empty cart displays a clear informational message
- No checkout action is available with an empty cart
- Cart icon correctly reflects zero items

**Automation Notes:**

- Direct navigation to cart URL should show empty state
- The "proceed" button behavior may vary — disabled, hidden, or absent
- Use `toBeHidden()`, `toBeDisabled()`, or `not.toBeVisible()` assertions

---

### Scenario 18: Search with No Results

**Priority:** P2
**Category:** Edge Case
**Estimated Automation Time:** Simple

**Preconditions:**

- Homepage loaded

**Steps:**

1. Navigate to homepage
2. Enter a nonsensical search term (e.g., "xyznonexistent999")
3. Wait for search results to update
4. Verify "No results found" message or empty product grid
5. Verify the page doesn't break or show errors
6. Clear the search and verify products reappear

**Expected Results:**

- Application handles zero-result searches gracefully
- Clear feedback that no products match
- User can easily recover by clearing the search

**Automation Notes:**

- Check for empty state text or element
- Verify the product grid/list container exists but is empty
- Ensure no JavaScript console errors on empty results

---

### Scenario 19: Product Out of Stock Handling

**Priority:** P2
**Category:** Edge Case
**Estimated Automation Time:** Simple

**Preconditions:**

- Identify an out-of-stock product (e.g., "Long Nose Pliers" or check product listing for "Out of stock" indicators)

**Steps:**

1. Navigate to homepage
2. Locate a product with "Out of stock" indicator in the product grid
3. Click on the out-of-stock product to open its detail page
4. Verify product information still displays correctly
5. Verify "Add to cart" button is disabled or shows "Out of stock" state
6. Attempt to interact with the add-to-cart action
7. Verify the product cannot be added to cart

**Expected Results:**

- Out of stock products are clearly labeled in listings
- Product detail page is still accessible for viewing
- Add to cart is prevented for out-of-stock items
- User receives clear feedback about stock status

**Automation Notes:**

- Out-of-stock status may vary by environment — identify products dynamically
- Check for disabled button state, "Out of stock" text, or cart rejection toast
- Use `toBeDisabled()` assertion on the add-to-cart button

---

### Scenario 20: End-to-End Complete User Journey

**Priority:** P2
**Category:** Core Workflow (Integration)
**Estimated Automation Time:** Complex

**Preconditions:**

- Fresh browser session
- No prior user state

**Steps:**

1. Navigate to homepage
2. Search for "hammer" and verify results
3. Apply "Hand Tools" category filter
4. Click on a specific hammer product
5. Set quantity to 2 and add to cart
6. Navigate back to homepage
7. Search for "saw" and add a saw product to cart (quantity 1)
8. Navigate to cart
9. Verify both products are in cart with correct quantities and totals
10. Click "Proceed to checkout"
11. On sign-in step, log in with valid customer credentials
12. Complete billing address step
13. Select payment method (e.g., "Cash on Delivery")
14. Confirm order
15. Verify order confirmation with order/invoice number
16. Navigate to account → order history
17. Verify the new order appears in order history
18. Log out and verify session is cleared

**Expected Results:**

- Entire journey completes without errors across all major features
- Search, filtering, cart, authentication, checkout, and account features all integrate correctly
- Order is recorded in order history
- Logout properly clears the user session

**Automation Notes:**

- This is the longest scenario — use `test.step()` for each major phase
- Consider test.slow() to extend timeout
- Generate or use idempotent test data
- Verify session clearing by checking navigation reverts to "Sign in"
- This scenario validates cross-feature integration rather than edge cases

---

## Coverage Matrix

| Category              | Scenarios                  | Coverage                                                     |
| --------------------- | -------------------------- | ------------------------------------------------------------ |
| Shopping Cart         | #1, #2, #5, #17           | Add to cart, update quantity, remove items, totals, empty cart |
| Checkout              | #3, #4                     | Full checkout flow, authentication gate                      |
| Authentication        | #6, #7, #8                 | Login, registration, invalid credentials, validation         |
| Search & Filtering    | #9, #10, #11, #12, #18    | Text search, category filter, price filter, sorting, no results |
| Product Management    | #13, #19                   | Product details, favourites, out-of-stock handling           |
| Data Management       | #14, #15, #16              | Registration validation, contact form, profile update        |
| End-to-End            | #20                        | Full user journey integration                                |

## Priority Distribution

| Priority   | Count | Scenarios                       |
| ---------- | ----- | ------------------------------- |
| P0         | 6     | #1, #2, #3, #4, #5, #6         |
| P1         | 10    | #7, #8, #9, #10, #11, #12, #13, #14, #15, #16 |
| P2         | 4     | #17, #18, #19, #20             |

## Test Data Requirements

**User Accounts:**

| Role     | Email                                   | Password   | Notes                        |
| -------- | --------------------------------------- | ---------- | ---------------------------- |
| Customer | customer@practicesoftwaretesting.com     | welcome01  | Pre-existing test customer   |
| Customer | customer2@practicesoftwaretesting.com    | welcome01  | Alternate test customer      |
| Admin    | admin@practicesoftwaretesting.com        | welcome01  | Admin panel access           |

**Products (examples — verify current availability):**

| Product             | Approx. Price | Category    | Stock Status |
| ------------------- | ------------- | ----------- | ------------ |
| Combination Pliers  | $14.15        | Hand Tools  | In stock     |
| Claw Hammer         | $12.58        | Hand Tools  | In stock     |
| Thor Hammer         | $11.14        | Hand Tools  | In stock     |
| Long Nose Pliers    | ~$10–15       | Hand Tools  | Out of stock |
| Belt Sander         | ~$73          | Power Tools | In stock     |

**Payment Test Data:**

- Credit Card: Use standard test card numbers (e.g., 4111-1111-1111-1111, Exp: 12/2028, CVV: 123)
- Bank Transfer: May require bank name and account number fields
- Cash on Delivery: Simplest payment option for test automation
- Gift Card: May require valid gift card number and validation code

**Dynamic Test Data:**

- Registration tests need unique emails per run — use timestamp or UUID suffix
- Contact form messages need minimum character count — use 50+ char strings

## Risks & Gaps

**NOT Covered in These 20 Scenarios:**

- **Admin functionality:** Backend management, product CRUD, user management, order processing
- **Google OAuth flow:** Complex to automate due to third-party popup/redirect (Scenario 19 from v2 removed)
- **Forgot password / password reset flow:** Requires email verification which is hard to automate in E2E
- **Pagination:** Browsing beyond the first page of products
- **Language switching:** Multi-language support (DE, ES, FR, NL, TR)
- **Chat widget:** Interactive chat functionality
- **Responsive/mobile layout:** Mobile-specific UI behavior
- **Accessibility:** Screen reader compatibility, keyboard navigation
- **Performance:** Page load times, API response times under load
- **Security:** XSS, CSRF, SQL injection, session fixation
- **Cross-browser:** Only Chromium configured in current playwright.config.ts
- **File upload in contact form:** Attachment functionality

**Known Application Characteristics:**

- The application contains **intentional bugs** for testing practice — some test failures may be expected and should be triaged as application bugs, not test defects
- The application is a demo environment that may be shared across users — test data may be affected by other users
- API-driven frontend — consider API-level setup/teardown for test data isolation via `datafactory` helpers

**Recommended Next Steps:**

1. Automate P0 scenarios first (Scenarios 1–6) for immediate regression coverage
2. Add P1 scenarios incrementally to build comprehensive coverage
3. Implement API-based test data setup in `lib/datafactory/` for test isolation
4. Create Page Object Model classes in `lib/pages/` for cart, checkout, login, product, and account pages
5. Use custom fixtures in `lib/fixtures/` for authenticated user state and pre-populated cart state
