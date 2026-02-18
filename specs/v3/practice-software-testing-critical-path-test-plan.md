# Critical Path Test Plan: Practice Software Testing - Toolshop (V4)

**Generated:** February 17, 2026  
**Target URL:** https://practicesoftwaretesting.com  
**Documentation URL:** https://testsmith-io.github.io/practice-software-testing/#/  
**Created By:** AI Agent exploration and analysis  
**Total Scenarios:** 25

## Executive Summary

Practice Software Testing - Toolshop is a comprehensive e-commerce demo application designed for QA training and testing practice. This test plan prioritizes critical business flows: shopping cart and checkout (highest priority), user authentication, product search/filtering, and account management. The application contains intentional bugs and offers multiple sprint versions for progressive testing.

## Application Overview

**Main Features Discovered:**

### Product Catalog & Navigation
- **Products:** 9 products currently displayed on homepage (Combination Pliers, Pliers, Bolt Cutters, Long Nose Pliers, Slip Joint Pliers, Claw Hammer with Shock Reduction Grip, Hammer, Claw Hammer, Thor Hammer)
- **Categories:** Hierarchical structure - Hand Tools (Hammer, Hand Saw, Wrench, Screwdriver, Pliers, Chisels, Measures), Power Tools (Grinder, Sander, Saw, Drill), Other (Tool Belts, Storage Solutions, Workbench, Safety Gear, Fasteners)
- **Brands:** ForgeFlex Tools, MightyCraft Hardware
- **Pricing:** Range from $9.17 to $48.41
- **CO₂ Rating:** A-E sustainability rating system for environmental impact

### Search & Filtering System
- **Text Search:** Search input with submit button and reset option
- **Category Filters:** Hierarchical checkbox filters by main category and subcategory
- **Brand Filters:** Checkbox filters by manufacturer
- **Price Range:** Slider control ($0-$200 range)
- **Sorting:** Name (A-Z, Z-A), Price (Low-High, High-Low), CO₂ Rating (A-E, E-A)
- **Eco-Friendly Filter:** Show only sustainable products checkbox

### User Authentication & Account Management
- **Login:** Email/password or Google OAuth
- **Registration:** Comprehensive form with address, country dropdown (200+ countries), password strength validation
- **Default Test Accounts:**
  - Customer: customer@practicesoftwaretesting.com / welcome01
  - Customer 2: customer2@practicesoftwaretesting.com / welcome01  
  - Customer 3: customer3@practicesoftwaretesting.com / pass123
  - Admin: admin@practicesoftwaretesting.com / welcome01
- **Account Features:** My Account dashboard with Favorites, Profile, Invoices, Messages
- **Password Recovery:** Forgot password flow available

### Shopping Cart & Checkout
- **Cart Functionality:** Add items, update quantities, remove items
- **Cart Badge:** Shows item count in navigation
- **Checkout Process:** 4-step wizard (Cart → Sign in → Billing Address → Payment)
- **Product Details:** Quantity selectors, Add to Cart, Add to Favorites buttons

### Additional Features
- **Contact Form:** Subject dropdown (Customer service, Webmaster, Return, Payments, Warranty, Status of my order), message field, file attachment
- **Multi-language:** EN, DE, ES, FR, NL, TR
- **Chat Widget:** Support chat functionality
- **Stock Status:** Products can show "Out of stock" status

---

## Critical Path Test Scenarios

### **P0 - Core Business Flows (Must Work)**

### Scenario 1: Complete Guest Checkout Flow - Single Item

**Priority:** P0  
**Category:** Core Workflow  
**Business Impact:** Critical - Revenue Generation  
**Estimated Automation Time:** Complex

**Preconditions:**
- Fresh browser session (incognito/private mode)
- Cart is empty

**Steps:**
1. Navigate to https://practicesoftwaretesting.com
2. Verify homepage loads with product listings
3. Select "Combination Pliers" product card
4. Verify product detail page displays price ($14.15), description, quantity controls
5. Set quantity to 2 using increment button or input field
6. Click "Add to cart" button
7. Verify success feedback (toast notification or visual confirmation)
8. Verify cart badge updates to show "2" items
9. Click cart icon in navigation to view cart
10. Verify cart displays: correct product name, unit price $14.15, quantity 2, line total $28.30
11. Click "Proceed to checkout" (or equivalent checkout button)
12. **Step 1 - Cart:** Verify cart summary is displayed correctly
13. **Step 2 - Sign in:** Choose to continue as guest or complete sign-in (test both paths)
14. **Step 3 - Billing Address:** Fill required address fields
15. **Step 4 - Payment:** Select payment method and complete checkout
16. Verify order confirmation with order number
17. Verify cart is cleared after successful order

**Expected Results:**
- Smooth flow through all 4 checkout steps
- Accurate pricing calculations at each step
- Order confirmation generated
- Cart cleared post-purchase
- No JavaScript errors in console

**Automation Notes:**
- Use `[data-test="add-to-cart"]`, `[data-test="cart-quantity"]` locators
- Wait for cart badge updates (async operations)
- Capture order number for verification
- Test both guest and logged-in checkout paths

---

### Scenario 2: Multi-Item Cart Management and Quantity Updates

**Priority:** P0  
**Category:** Core Workflow  
**Business Impact:** Critical - Cart Accuracy  
**Estimated Automation Time:** Medium

**Preconditions:**
- Empty cart

**Steps:**
1. Navigate to homepage
2. Add "Combination Pliers" ($14.15) to cart with quantity 1
3. Navigate back to homepage
4. Add "Claw Hammer" ($11.48) to cart with quantity 1
5. Navigate to cart page
6. Verify both items appear with correct details
7. Update Combination Pliers quantity to 3
8. Verify line total updates to $42.45 (3 × $14.15)
9. Update Claw Hammer quantity to 2
10. Verify line total updates to $22.96 (2 × $11.48)
11. Verify cart total = $65.41 (sum of line totals)
12. Remove Claw Hammer from cart
13. Verify cart total updates to $42.45 (only Combination Pliers remaining)
14. Verify cart badge shows "3" (quantity of remaining item)

**Expected Results:**
- Quantity updates immediately recalculate totals
- Line totals = unit price × quantity
- Cart total = sum of all line totals
- Item removal updates all calculations
- Cart badge reflects total item count

**Automation Notes:**
- Parse prices as numbers, handle currency formatting
- Use appropriate wait strategies for calculation updates
- Test quantity input field and +/- buttons
- Verify removal confirmation if present

---

### Scenario 3: User Authentication - Login with Valid Credentials

**Priority:** P0  
**Category:** Authentication  
**Business Impact:** Critical - User Access  
**Estimated Automation Time:** Simple

**Preconditions:**
- User not logged in
- Valid test account: customer@practicesoftwaretesting.com / welcome01

**Steps:**
1. Navigate to homepage
2. Click "Sign in" in navigation menu
3. Verify login page loads with email and password fields
4. Enter email: "customer@practicesoftwaretesting.com"
5. Enter password: "welcome01"
6. Click "Login" button
7. Verify successful authentication - redirect to /account page
8. Verify navigation shows user name "Jane Doe" instead of "Sign in"
9. Verify account dropdown menu contains: My account, My favorites, My profile, My invoices, My messages, Sign out

**Expected Results:**
- Successful login redirects to account dashboard
- Navigation updates to show logged-in state
- User menu provides access to account sections

**Automation Notes:**
- Use `[data-test="email"]`, `[data-test="password"]`, `[data-test="login-submit"]`
- Verify URL change to confirm successful redirect
- Test session persistence across page refreshes

---

### **P1 - Important Business Features**

### Scenario 4: User Registration with Complete Profile

**Priority:** P1  
**Category:** Authentication  
**Business Impact:** High - User Acquisition  
**Estimated Automation Time:** Medium

**Preconditions:**
- User not registered
- Unique email address available

**Steps:**
1. Navigate to login page
2. Click "Register your account" link
3. Fill complete registration form:
   - First name: "TestFirst"
   - Last name: "TestLast"
   - Date of Birth: "1990-01-15" (YYYY-MM-DD format)
   - Street: "123 Test Avenue"
   - Postal code: "90210"
   - City: "Los Angeles"
   - State: "California"
   - Country: Select "United States of America (the)"
   - Phone: "5551234567"
   - Email: Generate unique email (testuser+timestamp@example.com)
   - Password: "Welcome123!" (meets all strength requirements)
4. Verify password strength indicator updates to "Strong" or higher
5. Click "Register" button
6. Verify successful registration (redirect to login or success message)
7. Login with newly created credentials
8. Verify account access and profile data persistence

**Expected Results:**
- Registration form validates all required fields
- Password strength validation works correctly
- Country dropdown selection functions properly
- New account immediately usable for login
- User profile data saved correctly

**Automation Notes:**
- Generate unique email per test run to avoid conflicts
- Password requirements: 8+ chars, upper/lower case, digit, special character
- Country dropdown has 200+ options - select by visible text
- Date format validation may be strict

---

### Scenario 5: Product Search with Text Query and Filters

**Priority:** P1  
**Category:** Search & Discovery  
**Business Impact:** High - Product Findability  
**Estimated Automation Time:** Medium

**Preconditions:**
- Homepage loaded with full product catalog

**Steps:**
1. Navigate to homepage
2. Count total products displayed (baseline)
3. Enter "pliers" in search textbox
4. Click search button or press Enter
5. Verify results show only pliers-related products (Combination Pliers, Pliers, Long Nose Pliers, Slip Joint Pliers)
6. Verify non-matching products (hammers) are not displayed
7. Clear search using "X" button
8. Verify full product catalog returns
9. Select "Hand Tools" category filter
10. Verify only hand tools are displayed
11. Additionally select "Pliers" subcategory
12. Verify results narrow to pliers products only
13. Adjust price range slider to $10-$20
14. Verify results show only pliers within price range
15. Reset all filters and verify full catalog returns

**Expected Results:**
- Text search filters products by name
- Category filters work independently and in combination
- Price range filtering respects min/max values
- Filter combinations work with AND logic
- Clear/reset functionality restores full listing

**Automation Notes:**
- Use `[data-test="search-query"]`, `[data-test="search-submit"]`
- Category filters use checkbox inputs with data-test IDs
- Price slider may require special interaction handling
- Wait for filtering API responses or DOM updates

---

### Scenario 6: Product Detail Page and Add to Favorites

**Priority:** P1  
**Category:** Product Discovery  
**Business Impact:** Medium - User Engagement  
**Estimated Automation Time:** Simple

**Preconditions:**
- User logged in as customer

**Steps:**
1. Navigate to homepage
2. Click on "Combination Pliers" product card
3. Verify product detail page displays:
   - Product name: "Combination Pliers"
   - Price: $14.15
   - Brand: "ForgeFlex Tools"
   - Category: "Pliers"
   - CO₂ rating display (A-E scale)
   - Product description text
   - Product image
4. Verify quantity controls (decrease/increase buttons, input field)
5. Verify "Add to cart" and "Add to favourites" buttons present
6. Click "Add to favourites" button
7. Verify success feedback (visual confirmation)
8. Navigate to account > Favorites
9. Verify product appears in favorites list
10. Test related products section at bottom of page

**Expected Results:**
- Product detail page displays all required information
- Favorites functionality works for logged-in users
- Related products provide navigation to similar items

**Automation Notes:**
- Product URLs follow pattern: /product/{productId}
- Use `[data-test="add-to-favorites"]` or similar
- Favorites may require authenticated session
- Related products use carousel or grid layout

---

### **P2 - Supporting Features and Edge Cases**

### Scenario 7: Contact Form Submission

**Priority:** P2  
**Category:** Customer Support  
**Business Impact:** Medium - Support Channel  
**Estimated Automation Time:** Simple

**Steps:**
1. Navigate to Contact page
2. Fill contact form:
   - First name: "Test"
   - Last name: "User"  
   - Email: "test@example.com"
   - Subject: Select "Customer service"
   - Message: "This is a test message for automated testing purposes."
3. Optionally test file attachment (txt files only, 0kb limit)
4. Click "Send" button
5. Verify submission success message or confirmation

**Expected Results:**
- Form accepts valid inputs
- Subject dropdown populates correctly
- File attachment validation works (txt only, size limit)
- Submission provides user feedback

---

### Scenario 8: Language Selection and Localization

**Priority:** P2  
**Category:** Internationalization  
**Business Impact:** Medium - Global Reach  
**Estimated Automation Time:** Simple

**Steps:**
1. Navigate to homepage
2. Verify default language is English (EN)
3. Click language selector button in navigation
4. Verify dropdown shows: DE, EN, ES, FR, NL, TR
5. Select "ES" (Spanish)
6. Verify page content updates to Spanish language
7. Verify URL or language parameter changes
8. Navigate to different pages and verify language persistence
9. Switch back to "EN" and verify English content returns

**Expected Results:**
- Language selector displays all available options
- Language changes update page content
- Language preference persists across navigation
- URLs or parameters reflect selected language

---

### Scenario 9: Invalid Login Attempts and Error Handling

**Priority:** P2  
**Category:** Authentication Security  
**Business Impact:** Medium - Security  
**Estimated Automation Time:** Simple

**Steps:**
1. Navigate to login page
2. Test empty form submission - verify validation errors
3. Test invalid email format - verify email validation
4. Test valid email with wrong password - verify error message
5. Test non-existent email - verify generic error message
6. Test password visibility toggle functionality
7. Verify forgot password link navigation

**Expected Results:**
- Form validation prevents empty submissions
- Email format validation works correctly
- Invalid credentials show appropriate error messages
- Error messages don't reveal specific account information
- Password toggle switches visibility correctly

---

### Scenario 10: Cart Persistence Across Sessions

**Priority:** P2  
**Category:** Cart Management  
**Business Impact:** Medium - User Experience  
**Estimated Automation Time:** Medium

**Steps:**
1. Add items to cart as guest user
2. Note cart contents and quantities
3. Close browser completely
4. Reopen browser and navigate to site
5. Verify cart contents persist (for guest) or clear appropriately
6. Repeat test for logged-in user
7. Verify different persistence behavior for authenticated vs guest

**Expected Results:**
- Cart behavior follows expected persistence patterns
- Logged-in users may have longer persistence than guests
- Cart badge accurately reflects persisted contents

---

### **P3 - Advanced Features and Edge Cases**

### Scenario 11: Checkout with Authentication Required

**Priority:** P3  
**Category:** Checkout Flow  
**Business Impact:** Medium - Conversion  
**Estimated Automation Time:** Medium

**Steps:**
1. Add items to cart as guest
2. Proceed to checkout
3. Verify checkout step 2 requires authentication
4. Test that checkout cannot proceed without login
5. Complete login during checkout
6. Verify checkout continues to next step
7. Verify cart contents preserved through authentication

**Expected Results:**
- Checkout properly enforces authentication requirement
- Cart contents survive authentication step
- Flow continues seamlessly after login

---

### Scenario 12: Out of Stock Product Handling

**Priority:** P3  
**Category:** Inventory Management  
**Business Impact:** Medium - Inventory Accuracy  
**Estimated Automation Time:** Simple

**Steps:**
1. Navigate to homepage
2. Locate "Long Nose Pliers" (marked as "Out of stock")
3. Click on out-of-stock product
4. Verify product detail page displays stock status
5. Verify "Add to cart" button is disabled or shows appropriate message
6. Test that out-of-stock items cannot be added to cart
7. Verify out-of-stock products appear in search/filter results with status

**Expected Results:**
- Out-of-stock status clearly displayed
- Add to cart functionality disabled for unavailable products
- Stock status visible in listings and detail pages

---

### Scenario 13: Product Sorting and Display Options

**Priority:** P3  
**Category:** Product Discovery  
**Business Impact:** Low-Medium - User Experience  
**Estimated Automation Time:** Simple

**Steps:**
1. Navigate to homepage with multiple products
2. Use sort dropdown to select "Price (Low - High)"
3. Verify products reorder with cheapest first
4. Select "Price (High - Low)"
5. Verify products reorder with most expensive first
6. Select "Name (A - Z)"
7. Verify alphabetical ordering
8. Select "Name (Z - A)"
9. Verify reverse alphabetical ordering
10. Test CO₂ rating sorting options

**Expected Results:**
- All sort options correctly reorder products
- Price sorting uses numeric values, not string comparison
- Name sorting is case-insensitive and alphabetical
- CO₂ rating sorting follows A-E grade scale

---

### Scenario 14: User Account Management - Profile Updates

**Priority:** P3  
**Category:** Account Management  
**Business Impact:** Medium - User Retention  
**Estimated Automation Time:** Medium

**Steps:**
1. Login as customer
2. Navigate to My Account > Profile
3. Verify profile displays current user information
4. Update profile fields (name, address, phone)
5. Save changes
6. Verify success message and data persistence
7. Navigate away and return to verify changes saved
8. Test profile picture upload if available

**Expected Results:**
- Profile displays current user data correctly
- Updates save successfully with confirmation
- Changes persist across sessions
- Form validation works for profile updates

---

### Scenario 15: Google OAuth Authentication

**Priority:** P3  
**Category:** Authentication  
**Business Impact:** Medium - User Convenience  
**Estimated Automation Time:** Complex

**Steps:**
1. Navigate to login page
2. Click "Sign in with Google" button
3. Verify Google OAuth redirect occurs
4. Complete Google authentication (test environment setup required)
5. Verify successful return to application
6. Verify user session established
7. Verify account creation or linking occurs

**Expected Results:**
- Google OAuth integration functions correctly
- User authentication completes successfully
- Account linking or creation works properly

**Automation Notes:**
- Requires OAuth test environment setup
- May need mock OAuth provider for automated testing
- Consider security implications of OAuth testing

---

## Test Data Requirements

### User Accounts
- **Valid Customer:** customer@practicesoftwaretesting.com / welcome01
- **Valid Customer 2:** customer2@practicesoftwaretesting.com / welcome01  
- **Valid Admin:** admin@practicesoftwaretesting.com / welcome01
- **Registration Tests:** Generate unique emails with timestamp

### Product Data
- **Available Products:** Combination Pliers ($14.15), Claw Hammer ($11.48), etc.
- **Out of Stock:** Long Nose Pliers ($14.24)
- **Price Range:** $9.17 - $48.41

### Address Information

Street: 123 Test Avenue
Postal Code: 90210
City: Los Angeles
State: California
Country: United States of America (the)
Phone: 5551234567

## Environment Configuration

### Base URLs
- **Primary:** https://practicesoftwaretesting.com
- **Documentation:** https://testsmith-io.github.io/practice-software-testing/#/

### Browser Support
- Chrome (primary)
- Firefox
- Safari
- Edge

### Key Locator Patterns
- Navigation: `[data-test="nav-{page}"]`
- Forms: `[data-test="email"]`, `[data-test="password"]`, `[data-test="login-submit"]`
- Products: `[data-test="product-{id}"]`, `[data-test="add-to-cart"]`
- Cart: `[data-test="cart-quantity"]`, `[data-test="nav-cart"]`
- Categories: `[data-test="category-{id}"]`
- Search: `[data-test="search-query"]`, `[data-test="search-submit"]`

## Risk Assessment

### High Risk Areas
1. **Checkout Process:** Multi-step flow with payment integration
2. **Cart Calculations:** Mathematical accuracy critical for business
3. **Authentication:** Security and session management
4. **Search/Filtering:** Complex query combinations

### Known Limitations
- Application contains intentional bugs for training purposes
- File upload restrictions (txt only, 0kb limit)
- Google OAuth requires external service dependency
- Multi-language content may not be fully translated

## Automation Strategy

### Test Categories by Complexity
- **Simple (5 scenarios):** Login, search, product detail, contact form
- **Medium (7 scenarios):** Registration, cart management, filtering, profile
- **Complex (3 scenarios):** Complete checkout, OAuth, multi-browser

### Recommended Execution Order
1. P0 scenarios (critical path)
2. P1 scenarios (important features)  
3. P2 scenarios (supporting features)
4. P3 scenarios (advanced/edge cases)

### Data Management
- Use unique identifiers for registration tests
- Clean up test data between runs where possible
- Consider test data lifecycle for order history
