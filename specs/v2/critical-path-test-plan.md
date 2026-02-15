# Critical Path Test Plan: Practice Software Testing - Toolshop

**Generated:** February 13, 2026
**Target URL:** https://practicesoftwaretesting.com
**Total Scenarios:** 20

## Executive Summary

Practice Software Testing - Toolshop is an e-commerce site specializing in tools and hardware. The test coverage focuses on shopping cart/checkout flow, user authentication, product search/filtering, and account management - the core revenue-generating and user engagement features.

## Application Overview

**Main Features Discovered:**
- Product catalog with 50+ tools across categories (Hand Tools, Power Tools, Other)
- Advanced filtering (price range, categories, brands, eco-friendly)
- User authentication with registration and login flows
- Shopping cart functionality with quantity management
- Product detail pages with CO₂ sustainability ratings
- Multiple user roles (customer, admin)
- Intentional bugs for testing practice
- Google authentication integration

---

## Test Scenarios

### Scenario 1: Guest User Complete Shopping Flow

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Complex

**Preconditions:**
- User not logged in
- Cart is empty

**Steps:**
1. Navigate to https://practicesoftwaretesting.com
2. Browse products on homepage
3. Click on a product (e.g., "Combination Pliers")
4. Verify product details page displays correctly
5. Increase quantity to 2 using quantity controls
6. Click "Add to cart" button
7. Navigate to shopping cart
8. Verify cart contents and total price
9. Proceed to checkout

**Expected Results:**
- Product successfully added to cart
- Quantity and pricing calculations are accurate
- Cart persists across page navigation
- Checkout process initiates properly

**Automation Notes:**
- Use data-test attributes like `[data-test="add-to-cart"]`
- Need to handle dynamic product IDs and pricing
- Cart state management requires careful validation

---

### Scenario 2: User Registration with Complete Form

**Priority:** P1
**Category:** Authentication
**Estimated Automation Time:** Medium

**Preconditions:**
- User not registered
- Valid test data available

**Steps:**
1. Navigate to homepage and click "Sign in"
2. Click "Register your account" link
3. Fill in all required fields:
   - First name: "Test"
   - Last name: "User"
   - Date of Birth: "1990-01-01"
   - Address: "123 Main St"
   - Postal code: "12345"
   - City: "TestCity"
   - State: "TestState"
   - Country: Select "United States of America (the)"
   - Phone: "555-123-4567"
   - Email: "test@example.com"
   - Password: "TestPass123!"
4. Click "Register" button
5. Verify successful registration

**Expected Results:**
- Registration completes successfully
- Password strength validator works correctly
- All form validation rules are enforced
- User is redirected appropriately

**Automation Notes:**
- Password requirements: 8+ chars, upper/lower case, number, special character
- Country dropdown has 200+ options - select by value
- Use unique email addresses per test run

---

### Scenario 3: User Login Flow

**Priority:** P0
**Category:** Authentication
**Estimated Automation Time:** Simple

**Preconditions:**
- User already registered with valid credentials

**Steps:**
1. Navigate to homepage
2. Click "Sign in" in navigation
3. Enter valid email address
4. Enter valid password
5. Click "Login" button
6. Verify successful login

**Expected Results:**
- User successfully logged in
- Navigation shows user-specific options
- Session established correctly

**Automation Notes:**
- Use existing test user credentials
- Verify UI changes after login

---

### Scenario 4: Product Search and Filtering

**Priority:** P1
**Category:** Search
**Estimated Automation Time:** Medium

**Preconditions:**
- Homepage loaded successfully

**Steps:**
1. Use search box to search for "hammer"
2. Verify search results display relevant products
3. Apply category filter: "Hand Tools" → "Hammer"
4. Set price range filter: $10-$20
5. Select brand filter: "ForgeFlex Tools"
6. Apply sort: "Price (Low - High)"
7. Verify filtered and sorted results

**Expected Results:**
- Search returns relevant products
- Filters work independently and in combination
- Sorting changes product order correctly
- Filter combinations produce expected results

**Automation Notes:**
- Search has debounce - wait for results to load
- Price slider requires specific interaction
- Use checkbox states for category filters

---

### Scenario 5: Shopping Cart Management

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Medium

**Preconditions:**
- Cart has at least one item

**Steps:**
1. Navigate to shopping cart
2. Verify item details (name, price, quantity)
3. Update quantity of existing item
4. Add a second different product to cart
5. Remove one item from cart
6. Apply any available coupon/discount code
7. Verify total calculations

**Expected Results:**
- Cart displays correct items and quantities
- Quantity changes update totals correctly
- Item removal works properly
- Price calculations are accurate

**Automation Notes:**
- Cart may persist in localStorage/sessionStorage
- Handle dynamic pricing updates
- Test both increase and decrease quantity

---

### Scenario 6: Checkout Process Flow

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Complex

**Preconditions:**
- User logged in
- Cart contains items
- Valid payment test data available

**Steps:**
1. Navigate to checkout from cart
2. Verify billing/shipping address pre-filled
3. Select payment method
4. Enter payment information
5. Review order summary
6. Submit order
7. Verify order confirmation

**Expected Results:**
- Address information pre-populated for logged-in users
- Payment form validation works correctly
- Order summary shows accurate totals
- Order confirmation displays order number

**Automation Notes:**
- May require test payment gateway setup
- Handle form validation states
- Capture order confirmation details

---

### Scenario 7: Product Detail Page Functionality

**Priority:** P1
**Category:** Core Workflow
**Estimated Automation Time:** Simple

**Preconditions:**
- Product page accessible

**Steps:**
1. Navigate to specific product page
2. Verify all product information displays
3. Test quantity selector controls
4. Click "Add to favourites" button
5. View related products section
6. Test product image functionality

**Expected Results:**
- Product details are complete and accurate
- Quantity controls work properly
- Favourites functionality operates correctly
- Related products are relevant

**Automation Notes:**
- Product URLs contain unique IDs
- CO₂ rating display should be validated
- Handle image loading states

---

### Scenario 8: Category Navigation and Browsing

**Priority:** P1
**Category:** Search
**Estimated Automation Time:** Simple

**Preconditions:**
- Homepage loaded

**Steps:**
1. Click "Categories" dropdown in navigation
2. Navigate through category hierarchy
3. Select subcategory (e.g., Hand Tools → Pliers)
4. Verify category-specific products display
5. Use pagination to browse multiple pages
6. Test "Back" navigation

**Expected Results:**
- Category navigation works smoothly
- Products match selected categories
- Pagination functions correctly
- Browser navigation works properly

**Automation Notes:**
- Category dropdown may have hover/click behavior
- Pagination uses button elements
- Track URL changes for navigation

---

### Scenario 9: User Account Management

**Priority:** P1
**Category:** Data Management
**Estimated Automation Time:** Medium

**Preconditions:**
- User logged in

**Steps:**
1. Navigate to user account/profile page
2. Update personal information
3. Change password
4. View order history
5. Manage saved addresses
6. Update preferences/settings

**Expected Results:**
- Profile updates save correctly
- Password change requires current password
- Order history displays accurately
- Address management works properly

**Automation Notes:**
- May need to navigate to account section
- Form validation for password changes
- Handle address CRUD operations

---

### Scenario 10: Invalid Login Attempts

**Priority:** P2
**Category:** Edge Case
**Estimated Automation Time:** Simple

**Preconditions:**
- On login page

**Steps:**
1. Attempt login with invalid email format
2. Try login with non-existent email
3. Use correct email but wrong password
4. Test empty field submissions
5. Check password visibility toggle

**Expected Results:**
- Appropriate error messages display
- Form validation prevents submission
- Error messages are clear and helpful
- Password toggle works correctly

**Automation Notes:**
- Validate error message content
- Check form field highlighting
- Test password visibility button functionality

---

### Scenario 11: Product Out of Stock Handling

**Priority:** P1
**Category:** Edge Case
**Estimated Automation Time:** Simple

**Preconditions:**
- Out of stock product identified (e.g., "Long Nose Pliers")

**Steps:**
1. Navigate to out-of-stock product
2. Verify "Out of stock" indicator displays
3. Attempt to add to cart
4. Check if "Add to cart" button is disabled
5. Verify product still shows in search results

**Expected Results:**
- Out of stock status clearly indicated
- Add to cart functionality disabled/modified
- Product information still accessible
- Stock status consistent across pages

**Automation Notes:**
- Look for "Out of stock" text in product listings
- Button states may change when out of stock
- Test both product page and listing views

---

### Scenario 12: Search with No Results

**Priority:** P2
**Category:** Edge Case
**Estimated Automation Time:** Simple

**Preconditions:**
- Homepage search available

**Steps:**
1. Search for non-existent product term (e.g., "xyz123")
2. Verify no results page displays
3. Check for suggested alternatives
4. Clear search and return to normal view

**Expected Results:**
- "No results found" message appears
- Search suggestions provided if available
- User can easily return to browsing
- Search state clears properly

**Automation Notes:**
- Test various invalid search terms
- Check for empty state handling
- Verify search reset functionality

---

### Scenario 13: Price Range Filter Edge Cases

**Priority:** P2
**Category:** Edge Case
**Estimated Automation Time:** Medium

**Preconditions:**
- Homepage with price filter available

**Steps:**
1. Set price range to maximum values ($1-$200)
2. Set range to minimum values ($0-$1)
3. Test invalid range (max < min)
4. Use extreme values outside product range
5. Verify results update correctly

**Expected Results:**
- Price filter handles edge cases gracefully
- Invalid ranges prevented or corrected
- Product results match price criteria
- Filter state persists correctly

**Automation Notes:**
- Price slider requires mouse/touch interaction
- Handle slider boundary conditions
- Validate pricing logic carefully

---

### Scenario 14: Multi-item Cart Calculations

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Medium

**Preconditions:**
- Empty cart

**Steps:**
1. Add multiple different products to cart
2. Add same product multiple times
3. Verify quantity aggregation
4. Test quantity updates for each item
5. Check subtotal, taxes, and total calculations
6. Remove some items and verify recalculation

**Expected Results:**
- Identical products combine quantities
- Individual item totals calculate correctly
- Overall cart total includes applicable taxes
- Calculations update immediately on changes

**Automation Notes:**
- Test with various price points
- Handle dynamic calculation updates
- Verify mathematical accuracy

---

### Scenario 15: Registration Form Validation

**Priority:** P1
**Category:** Data Management
**Estimated Automation Time:** Medium

**Preconditions:**
- Registration page loaded

**Steps:**
1. Submit form with missing required fields
2. Test invalid email format validation
3. Try weak password (fails requirements)
4. Use invalid date format for birth date
5. Test duplicate email registration
6. Verify all validation messages

**Expected Results:**
- Required field validation prevents submission
- Email format validation works correctly
- Password requirements enforced
- Date validation handles invalid formats
- Duplicate email prevention works

**Automation Notes:**
- Test individual field validation
- Check password strength indicator
- Verify error message display

---

### Scenario 16: Cross-Category Product Search

**Priority:** P1
**Category:** Search
**Estimated Automation Time:** Simple

**Preconditions:**
- Homepage loaded

**Steps:**
1. Search for broad term like "tool"
2. Verify results span multiple categories
3. Apply different category filters to same search
4. Test search within specific category
5. Clear filters and verify all results return

**Expected Results:**
- Search returns products from multiple categories
- Category filters work with search terms
- Results remain relevant to search query
- Filter clearing restores full results

**Automation Notes:**
- Use generic search terms for broad results
- Test search + filter combinations
- Verify result count changes

---

### Scenario 17: Contact Page and Forms

**Priority:** P2
**Category:** Data Management
**Estimated Automation Time:** Simple

**Preconditions:**
- Access to contact page

**Steps:**
1. Navigate to Contact page via main navigation
2. Fill out contact form with valid information
3. Test form validation for required fields
4. Submit form and verify confirmation
5. Test any other contact methods available

**Expected Results:**
- Contact form submits successfully
- Form validation works on required fields
- Confirmation message appears
- Contact information is accessible

**Automation Notes:**
- Contact page URL: /contact
- Test form submission handling
- Validate required field indicators

---

### Scenario 18: Navigation and UI Consistency

**Priority:** P2
**Category:** Search
**Estimated Automation Time:** Simple

**Preconditions:**
- Homepage loaded

**Steps:**
1. Navigate through all main navigation items
2. Verify logo always returns to homepage
3. Test breadcrumb navigation if available
4. Check footer links functionality
5. Verify consistent layout across pages

**Expected Results:**
- All navigation links work correctly
- Logo consistently returns to home
- Page layouts maintain consistency
- Footer provides useful links

**Automation Notes:**
- Test all navigation elements
- Verify URL changes and page loads
- Check responsive behavior if needed

---

### Scenario 19: Google Sign-In Integration

**Priority:** P1
**Category:** Integration
**Estimated Automation Time:** Complex

**Preconditions:**
- Google sign-in test account available

**Steps:**
1. Navigate to login page
2. Click "Sign in with Google" button
3. Complete Google authentication flow
4. Verify account creation/login success
5. Test sign-out functionality

**Expected Results:**
- Google OAuth flow completes successfully
- User account created or logged in
- Profile information populated appropriately
- Sign-out works correctly

**Automation Notes:**
- Requires Google test account setup
- Handle OAuth popup/redirect flows
- Complex authentication flow timing

---

### Scenario 20: E2E Complete User Journey

**Priority:** P0
**Category:** Core Workflow
**Estimated Automation Time:** Complex

**Preconditions:**
- Fresh browser session

**Steps:**
1. Visit homepage as guest user
2. Browse products using search and filters
3. Register new account
4. Add multiple products to cart
5. Update cart contents
6. Complete checkout process
7. Verify order confirmation
8. Log out and verify session cleared

**Expected Results:**
- Complete user journey works end-to-end
- All major functionality integrates properly
- User session management works correctly
- Order completion generates confirmation

**Automation Notes:**
- Longest test scenario
- Requires coordination of all major features
- Use unique data for each test run
- Handle session state carefully

---

## Coverage Matrix

| Category       | Scenarios | Coverage                          |
| -------------- | --------- | --------------------------------- |
| Authentication | #2, #3, #10, #19 | Login, Register, Invalid attempts, OAuth |
| Core Workflow  | #1, #5, #6, #7, #14, #20 | Shopping, cart, checkout, E2E |
| Search         | #4, #8, #12, #16, #18 | Product search, filtering, navigation |
| Data Management | #9, #15, #17 | Account management, validation, forms |
| Edge Cases     | #10, #11, #12, #13 | Error states, boundary conditions |
| Integration    | #19 | External services |

## Test Data Requirements

**User Accounts:**
- Test customer: test.customer@example.com / TestPass123!
- Admin user: admin@example.com / AdminPass123!
- Google test account for OAuth testing

**Products:**
- In-stock products: Combination Pliers ($14.15), Hammer ($12.58)
- Out-of-stock product: Long Nose Pliers
- Various price points for calculation testing

**Payment:**
- Test credit card numbers
- Valid shipping addresses
- Coupon codes (if available)

## Risks & Gaps

**NOT Covered in these 20 scenarios:**
- Admin functionality and backend management
- Advanced user roles and permissions
- Bulk operations or advanced cart features
- Mobile-specific functionality testing
- Performance under load
- Security penetration testing
- Accessibility compliance testing
- Cross-browser compatibility beyond basic functionality

**Known Intentional Bugs:**
- Application contains intentional bugs for testing practice
- Test failures may indicate bugs to be reported rather than test issues

**Environment Considerations:**
- Application is a demo environment
- May have rate limiting or session restrictions
- Test data may persist between test runs