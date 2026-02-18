# V1 vs V2 vs V3 Test Spec Gap Analysis

**Date:** February 17, 2026
**Analyzed Files:**
- **V1:** 20 individual test plan files (`specs/v1/01-*.md` through `specs/v1/20-*.md`)
- **V2:** `specs/v2/practice-software-testing-critical-path-test-plan.md`
- **V3:** `specs/v3/practice-software-testing-critical-path-test-plan.md`

---

## Overall Scores

| Criteria | V1 | V2 | V3 |
|----------|-----|-----|-----|
| Test Coverage Breadth | 9/10 | 4/10 | 7/10 |
| Test Coverage Depth | 5/10 | 5/10 | 8/10 |
| Application-Specific Detail | 2/10 | 7/10 | 10/10 |
| Actionability / Automation Readiness | 2/10 | 6/10 | 9/10 |
| Test Data & Environment | 1/10 | 8/10 | 9/10 |
| Prioritization | 2/10 | 6/10 | 9/10 |
| Step Specificity | 3/10 | 6/10 | 9/10 |
| Expected Results Quality | 3/10 | 5/10 | 8/10 |
| Locator / Selector Information | 0/10 | 7/10 | 8/10 |
| Risk Assessment | 1/10 | 4/10 | 8/10 |
| **TOTAL** | **28/100** | **58/100** | **85/100** |

---

## Scenario Count Summary

| Version | Total Scenarios | Functional Areas Covered | Files |
|---------|----------------|--------------------------|-------|
| V1 | 153 scenarios | 20 areas | 20 files |
| V2 | 3 scenarios | 3 areas (+ brief mentions of others) | 1 file |
| V3 | 15 scenarios | 10 areas | 1 file |

---

## Detailed Scoring Breakdown

### 1. Test Coverage Breadth

**V1 (9/10):** Covers the widest range of functional areas across 20 files:
- Core: Homepage, Auth, Product Catalog, Cart, Registration, Contact, Product Details, Search, Checkout, Account Management
- Non-functional: Responsive Design, Form Validation, Error Handling, Performance, Security, Accessibility, Cross-Browser, API, Integration, E2E Journeys

**V2 (4/10):** Only 3 core areas with test scenarios:
1. Shopping Cart & Checkout Flow
2. User Authentication
3. Product Search & Filtering
- Brief mentions of Performance, Security, and Mobile/Accessibility but no actual test scenarios for them

**V3 (7/10):** 15 scenarios across 10 distinct areas:
- P0: Guest Checkout, Multi-Item Cart Management, User Login
- P1: Registration, Search+Filters, Product Details+Favorites
- P2: Contact Form, Language/i18n, Invalid Login/Error Handling, Cart Persistence
- P3: Auth-Required Checkout, Out of Stock Handling, Sorting, Profile Updates, Google OAuth

### 2. Test Coverage Depth

**V1 (5/10):** Each file has 4-8 scenarios per area. Many scenarios, but each is shallow with generic steps like "Enter valid email address" without specifying what email to use.

**V2 (5/10):** Only 3 scenarios total, but they are reasonably detailed. The checkout scenario (1.1) has 16 steps with some specific values. The auth scenario (2.1) has 7 steps with actual test credentials.

**V3 (8/10):** 15 highly detailed scenarios. Each includes:
- Priority classification (P0-P3)
- Business impact statement
- Estimated automation complexity
- Preconditions
- Detailed numbered steps with specific values
- Concrete expected results
- Automation-specific notes

### 3. Application-Specific Detail

**V1 (2/10):** Almost entirely generic e-commerce test plans. Could apply to any shopping website. Only application-specific detail is the URL. No mention of:
- Specific product names, prices, or categories
- Actual test account credentials
- Real form field names or values
- Application-specific features (CO2 ratings, sprint versions, etc.)

**V2 (7/10):** Includes significant application-specific detail:
- Tech stack (Angular 20, Laravel 12, MariaDB 10.6)
- 4 default test accounts with roles, emails, and passwords
- Key data-test locators (8 specific selectors)
- Specific product reference (Combination Pliers - $14.15)
- API URL and Swagger documentation link
- Payment methods (Bank Transfer, Cash on Delivery, Credit Card, BNPL, Gift Card)

**V3 (10/10):** Extensive application-specific discovery:
- 9 specific products with exact prices ($9.17-$48.41)
- Full category hierarchy (Hand Tools > Hammer/Hand Saw/Wrench/etc., Power Tools > Grinder/Sander/etc.)
- Brand names (ForgeFlex Tools, MightyCraft Hardware)
- CO2 rating system (A-E scale)
- 4-step checkout wizard breakdown
- Contact form subject dropdown options
- 6 supported languages (EN, DE, ES, FR, NL, TR)
- Out-of-stock product identification (Long Nose Pliers)
- Chat widget presence
- File upload constraints (txt only, 0kb limit)
- Registration form details (200+ countries, password strength requirements)
- Sorting options with exact labels

### 4. Actionability / Automation Readiness

**V1 (2/10):** Very difficult to write automated tests from these specs. A tester would need to:
- Discover all element locators from scratch
- Find or create test data
- Research application behavior to fill in specifics
- Make many assumptions about expected values

Example V1 step: "Enter valid email address" - What email? Where is the field? What selector?

**V2 (6/10):** Reasonably actionable for the 3 scenarios covered:
- Key locators provided for core elements
- Test accounts listed with credentials
- Specific form values given (test@example.com, John Smith, 123 Main St)
- But limited scope means most features have no test guidance

**V3 (9/10):** Highly actionable with automation-specific notes per scenario:
- Comprehensive locator patterns section
- Wait strategy guidance ("Wait for cart badge updates - async operations")
- Data management advice ("Generate unique email per test run")
- Complexity estimates (Simple/Medium/Complex)
- Specific verification points with exact values

Example V3 step: "Verify cart displays: correct product name, unit price $14.15, quantity 2, line total $28.30" with automation note: "Use `[data-test='add-to-cart']`, `[data-test='cart-quantity']` locators"

### 5. Test Data & Environment

**V1 (1/10):** Only provides the base URL. No test accounts, no product data, no form values, no locators.

**V2 (8/10):**
- 4 test accounts with roles and credentials
- API URL with Swagger docs reference
- Key locator IDs (8 data-test selectors)
- Tech stack details
- Sample address data in checkout steps

**V3 (9/10):**
- 4 test accounts with credentials
- Specific product data with prices
- Out-of-stock product identified
- Price range documented ($9.17-$48.41)
- Complete sample address (123 Test Avenue, 90210, Los Angeles, California, US)
- Phone number for forms (5551234567)
- Registration data strategy (unique email with timestamp)
- Password requirements documented (8+ chars, upper/lower, digit, special)
- Browser support matrix

### 6. Prioritization

**V1 (2/10):** Files are numbered (01-20) implying some ordering, but no explicit priority system. No P0/P1 labels, no business impact assessment, no guidance on what to test first.

**V2 (6/10):**
- Scenarios labeled with priority (P0, P1)
- Business impact statements per scenario
- Phase 1/Phase 2 implementation priorities
- "HIGHEST PRIORITY" label on checkout flow

**V3 (9/10):**
- Clear 4-tier priority system (P0/P1/P2/P3) with descriptions
- Business impact labels per scenario (Critical, High, Medium, Low-Medium)
- Estimated automation time per scenario (Simple/Medium/Complex)
- Recommended execution order section
- Test categories by complexity breakdown

### 7. Step Specificity

**V1 (3/10):** Steps are generic descriptions that could apply to any application.
- "Enter valid email address" (which email?)
- "Click 'Add to Cart' on a product" (which product?)
- "Verify error message appears" (what message?)
- "Check product images load correctly" (which images?)

**V2 (6/10):** Moderate specificity with some concrete values.
- "Enter valid email address" mixed with "Email: customer@practicesoftwaretesting.com"
- "Combination Pliers - $14.15" product reference
- Guest checkout form values specified (test@example.com, John Smith)
- Some steps remain vague ("Verify success message")

**V3 (9/10):** Highly specific with exact values throughout.
- "Select 'Combination Pliers' product card"
- "Verify product detail page displays price ($14.15), description, quantity controls"
- "Set quantity to 2 using increment button or input field"
- "Verify cart displays: correct product name, unit price $14.15, quantity 2, line total $28.30"
- "Update Combination Pliers quantity to 3 ... Verify line total updates to $42.45 (3 x $14.15)"
- "Verify navigation shows user name 'Jane Doe' instead of 'Sign in'"

### 8. Expected Results Quality

**V1 (3/10):** Expected results are vague and non-verifiable:
- "Login form accepts valid credentials"
- "Products display in organized layout"
- "All interactive elements work"
- "Information is accurate and complete"

**V2 (5/10):** More specific but still somewhat generic:
- "User can successfully add items to cart"
- "Complete guest checkout flow works without authentication"
- "Proper redirect to account page after login"

**V3 (8/10):** Specific, measurable, and verifiable:
- "Cart total = $65.41 (sum of line totals)"
- "Line total updates to $42.45 (3 x $14.15)"
- "Cart badge reflects total item count"
- "Navigation updates to show logged-in state"
- "No JavaScript errors in console"
- "Add to cart functionality disabled for unavailable products"
- "Sort options correctly reorder products ... Price sorting uses numeric values, not string comparison"

### 9. Locator / Selector Information

**V1 (0/10):** No locators, selectors, or element identification provided anywhere across all 20 files.

**V2 (7/10):** Lists 8 key locators:
- `[data-test="add-to-cart"]`
- `[data-test="nav-cart"]`
- `[data-test="search-query"]`
- `[data-test="email"]`, `[data-test="password"]`
- `[data-test="guest-email"]`
- `[data-test="proceed-1"]`, `[data-test="proceed-2-guest"]`, `[data-test="proceed-3"]`

**V3 (8/10):** Comprehensive locator section plus per-scenario locator notes:
- Navigation: `[data-test="nav-{page}"]`
- Forms: `[data-test="email"]`, `[data-test="password"]`, `[data-test="login-submit"]`
- Products: `[data-test="product-{id}"]`, `[data-test="add-to-cart"]`
- Cart: `[data-test="cart-quantity"]`, `[data-test="nav-cart"]`
- Categories: `[data-test="category-{id}"]`
- Search: `[data-test="search-query"]`, `[data-test="search-submit"]`
- Plus inline automation notes per scenario

### 10. Risk Assessment

**V1 (1/10):** No risk assessment. No mention of known bugs, limitations, or areas of concern.

**V2 (4/10):** Includes:
- Bug Hunting Focus Areas (5 areas: form validation, cart calculation, auth state, search, payment)
- Brief cross-functional testing mentions

**V3 (8/10):** Formal risk assessment section:
- High Risk Areas (4 identified: checkout, cart calculations, auth, search/filtering)
- Known Limitations (4 documented: intentional bugs, file upload restrictions, OAuth dependency, incomplete translations)
- Automation Strategy with complexity breakdown
- Data Management recommendations

---

## Gap Analysis: Feature Coverage Matrix

| Feature Area | V1 | V2 | V3 |
|-------------|-----|-----|-----|
| **Homepage & Navigation** | 4 generic scenarios | Not covered | Covered within other scenarios |
| **User Login (valid)** | 1 generic scenario | 1 specific scenario | 1 detailed scenario (P0) |
| **User Login (invalid)** | 1 generic scenario | Not covered | 1 detailed scenario (P2) |
| **User Registration** | 8 generic scenarios | Not covered | 1 detailed scenario (P1) |
| **Forgot Password** | 1 generic scenario | Not covered | Mentioned, not a scenario |
| **Google OAuth** | 1 generic scenario | Not covered | 1 detailed scenario (P3) |
| **Product Catalog Display** | 1 generic scenario | Not covered | Covered within search scenario |
| **Product Search** | 8 generic scenarios | 1 specific scenario | 1 detailed scenario (P1) |
| **Product Filtering** | Covered in search file | Mentioned in priorities | Combined with search (P1) |
| **Product Sorting** | 1 generic scenario | Not covered | 1 detailed scenario (P3) |
| **Product Details Page** | 8 generic scenarios | Not covered | 1 detailed scenario (P1) |
| **Add to Favorites** | Not covered | Not covered | Combined with product details (P1) |
| **Shopping Cart - Add** | 1 generic scenario | Combined in checkout | Covered in checkout (P0) |
| **Shopping Cart - Multi-item** | Covered generically | Not a separate scenario | 1 detailed scenario (P0) |
| **Shopping Cart - Persistence** | 1 generic scenario | Not covered | 1 detailed scenario (P2) |
| **Guest Checkout** | 1 generic scenario | 1 specific scenario (P0) | 1 detailed scenario (P0) |
| **Auth-Required Checkout** | Covered generically | Mentioned in priorities | 1 detailed scenario (P3) |
| **Contact Form** | 8 generic scenarios | Not covered | 1 detailed scenario (P2) |
| **Language / i18n** | 1 generic scenario | Not covered | 1 detailed scenario (P2) |
| **Out of Stock Handling** | Not covered | Not covered | 1 detailed scenario (P3) |
| **Account/Profile Management** | 8 generic scenarios | Not covered | 1 detailed scenario (P3) |
| **Order History** | 1 generic scenario | Not covered | Not covered |
| **Responsive / Mobile** | 8 generic scenarios | 1-line mention | Not covered |
| **Form Validation** | 8 generic scenarios | Mentioned as bug hunt area | Covered within scenarios |
| **Error Handling** | 8 generic scenarios | Not covered | Covered within invalid login |
| **Performance Testing** | 8 generic scenarios | 3-line mention | Not covered |
| **Security Testing** | 8 generic scenarios | 3-line mention | Not covered |
| **Accessibility Testing** | 8 generic scenarios | 1-line mention | Not covered |
| **Cross-Browser Testing** | 8 generic scenarios | Not covered | Browser support listed |
| **API Testing** | 8 generic scenarios | API URL mentioned | Not covered |
| **Integration Testing** | 8 generic scenarios | Not covered | Not covered |
| **E2E User Journeys** | 8 generic scenarios | Not covered | Covered by P0 scenarios |
| **CO2 Rating System** | Not covered | Not covered | Mentioned in detail |
| **Chat Widget** | Not covered | Not covered | Mentioned in overview |

---

## Key Observations

### V1 Strengths
- **Broadest coverage** - Touches every testable area including non-functional testing
- **Structured consistently** - Every file follows the same template
- **Good for brainstorming** - Serves as a checklist of what COULD be tested

### V1 Weaknesses
- **Completely generic** - Could be used for any e-commerce site without changes
- **No application knowledge** - Zero evidence the AI explored the actual application
- **Untestable as-is** - A tester cannot write automated tests without significant additional research
- **No prioritization** - All 153 scenarios treated equally; no guidance on what matters most
- **Quantity over quality** - Many scenarios test features that may not exist (loyalty programs, wishlists, video captions)
- **Hallucinated features** - Tests for features the application doesn't have (referral programs, live chat support tickets, newsletter subscriptions)

### V2 Strengths
- **Application-aware** - Clearly based on actual application exploration
- **Practical test data** - Includes credentials, locators, and specific values
- **Prioritized** - Clear Phase 1/Phase 2 breakdown with business impact labels
- **Bug-hunting guidance** - Identifies areas where bugs are likely

### V2 Weaknesses
- **Very narrow coverage** - Only 3 test scenarios
- **Missing major areas** - No registration, contact form, language, or account management scenarios
- **Incomplete non-functional** - Performance/security/accessibility mentioned but not detailed
- **Steps could be more specific** - Some steps still vague compared to V3

### V3 Strengths
- **Best balance** of breadth and depth across 15 well-crafted scenarios
- **Deepest application knowledge** - Lists specific products, prices, categories, brands, features
- **Most automation-ready** - Locators, wait strategies, data management, complexity estimates
- **Best prioritization** - 4-tier system with business impact and automation complexity
- **Covers edge cases** - Out of stock handling, cart persistence, invalid inputs
- **Risk-aware** - Formal risk assessment and known limitations

### V3 Weaknesses
- **No non-functional testing** - Performance, security, accessibility, cross-browser not covered as separate scenarios
- **Missing some V1 areas** - No order history, address book, or account deletion scenarios
- **Mobile testing gap** - No explicit responsive/mobile scenarios

---

## Progression Analysis: V1 -> V2 -> V3

The three versions show a clear evolution in test planning quality:

### V1: "The Generic Template"
- Approach: Cast the widest possible net with generic test plan templates
- Result: 153 scenarios that look comprehensive on paper but lack substance
- Analogy: A restaurant menu with every cuisine listed but no actual recipes

### V2: "The First Application Visit"
- Approach: Actually explored the application and documented what was found
- Result: Only 3 scenarios but each grounded in real application behavior
- Analogy: A focused tasting menu - small but every dish is well-prepared

### V3: "The Thorough Exploration"
- Approach: Deep application exploration combined with testing expertise
- Result: 15 well-prioritized, highly specific, automation-ready scenarios
- Analogy: A curated menu with wine pairings, preparation notes, and seasonal considerations

### Quality Trajectory

```
Score: 28/100 -----> 58/100 -----> 85/100
       V1            V2            V3
    (generic)    (app-aware)   (comprehensive)

     +107%          +47%
```

The biggest quality jump (V1->V2) came from actually exploring the application rather than generating generic templates. The second jump (V2->V3) came from deeper exploration and more structured testing methodology.

---

## Recommendations

### What Would Make V3 a 95+/100

1. **Add non-functional testing scenarios** - Even brief performance, security, and accessibility scenarios grounded in application specifics
2. **Add mobile/responsive scenarios** - At least one scenario testing mobile checkout or navigation
3. **Add order history verification** - Post-checkout scenario verifying order appears in account history
4. **Add negative payment scenarios** - Test invalid credit card, expired card, etc.
5. **Add admin panel scenarios** - Test admin login and basic admin functionality
6. **Include API-level scenarios** - At least basic API validation for critical endpoints
7. **Cross-reference known bugs** - Link scenarios to known intentional bugs for training value
