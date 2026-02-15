# Test Spec Gap Analysis: V1 vs V2 vs V3

**Date:** February 15, 2026
**Application:** Practice Software Testing - Toolshop (https://practicesoftwaretesting.com)

---

## How Each Version Was Generated

| Attribute | V1 | V2 | V3 |
|---|---|---|---|
| **Prompt** | "Explore the site and create 20 different spec files" | Detailed prompt with app context, focus areas, and specific priorities | Same prompt as V2 (no changes) |
| **Agent** | playwright-test-planner-cli | Custom critical-path-analyzer agent | Same custom critical-path-analyzer agent |
| **Model** | Claude Sonnet 4 | Claude Sonnet 4 | Claude Opus 4.6 |
| **Output** | 20 separate files (~130+ scenarios) | 1 unified file (20 scenarios) | 1 unified file (20 scenarios) |

---

## Scoring Rubric (1-10 Scale)

| Dimension | V1 | V2 | V3 | What This Measures |
|---|:---:|:---:|:---:|---|
| **Automation Readiness** | 3 | 6 | 9 | Can an engineer start writing Playwright code from these specs? |
| **Application Specificity** | 3 | 7 | 9 | Does it reference real features, products, URLs, and UI elements? |
| **Prioritization** | 2 | 7 | 9 | Are scenarios ranked by business value and risk? |
| **Test Data Documentation** | 2 | 6 | 9 | Are accounts, products, and payment data specified? |
| **Locator/Selector Guidance** | 1 | 5 | 8 | Are data-test attributes and selector strategies documented? |
| **Scope Appropriateness** | 3 | 8 | 9 | Does it stay focused on what Playwright E2E can actually test? |
| **Edge Case Coverage** | 4 | 6 | 7 | Are negative paths, empty states, and boundaries covered? |
| **Structure & Organization** | 5 | 7 | 9 | Is the document navigable with coverage matrices and summaries? |
| **Actionability** | 2 | 6 | 9 | Could a QA engineer start automating today? |
| **Gap Awareness** | 1 | 7 | 9 | Does it acknowledge what's NOT covered and why? |
| **TOTAL** | **26/100** | **65/100** | **87/100** | |

---

## Detailed Dimension Analysis

### 1. Automation Readiness

**V1 (Score: 3):** Steps are generic and procedural ("Fill in first name field"). No Playwright-specific guidance. An engineer would need to independently discover every selector, wait strategy, and data approach.

**V2 (Score: 6):** Includes automation notes per scenario with some `data-test` attributes. Mentions dynamic product IDs, debounce timing, and localStorage. Still missing specific Playwright API patterns.

**V3 (Score: 9):** Provides a dedicated "Known Locator Patterns" section upfront. Automation notes reference specific Playwright methods: `toHaveText()`, `toBeDisabled()`, `setInputFiles()`, `selectOption()`, `test.step()`, `test.slow()`, `waitForResponse()`. Recommends Page Object Model and custom fixtures.

### 2. Application Specificity

**V1 (Score: 3):** Many scenarios describe features that don't exist in the application:
- Product sharing/social buttons (file 07)
- Search auto-complete/suggestions (file 08)
- Search term highlighting (file 08)
- Advanced search with boolean operators (file 08)
- Loyalty points and rewards (file 20)
- Referral programs (file 20)
- Newsletter subscriptions (file 20)
- Product variations/sizes/colors (file 07)
- Shipping calculator integration (file 19)
- CMS integration (file 19)

**V2 (Score: 7):** References real products (Combination Pliers at $14.15, Hammer at $12.58), real URLs (/contact, /auth/login), and actual features. Still includes Google OAuth scenario that's impractical to automate.

**V3 (Score: 9):** Specific product table with prices and stock status. Known test accounts with actual credentials. Lists all payment methods available (Credit Card, Bank Transfer, Cash on Delivery, Buy Now Pay Later, Gift Card). Documents the navigation structure and chat widget. Intentionally removes un-automatable features like Google OAuth.

### 3. Prioritization

**V1 (Score: 2):** No priority system whatsoever. File 01 (homepage layout) and file 15 (security penetration testing) have equal weight. A team would have no idea where to start.

**V2 (Score: 7):** P0/P1/P2 system with a coverage matrix. P0s are: guest shopping, login, cart management, checkout, multi-item calculations, and E2E journey. Reasonable but E2E journey as P0 is debatable.

**V3 (Score: 9):** Clear priority distribution table showing 6 P0, 10 P1, 4 P2. P0s are focused exclusively on cart, checkout, and login - the highest business-value paths. Includes a "Recommended Next Steps" section saying to automate P0 first. E2E journey correctly moved to P2.

### 4. Test Data Documentation

**V1 (Score: 2):** Zero test data. Some scenarios mention using "valid credentials" or "test data" without specifying what that means.

**V2 (Score: 6):** Test data section with user accounts (test.customer@example.com), products, and payment notes. However, uses placeholder emails rather than actual app test accounts.

**V3 (Score: 9):** Detailed tables for:
- User accounts: customer@practicesoftwaretesting.com / welcome01, admin credentials, alternate customer
- Products: 5 specific products with approximate prices, categories, and stock status
- Payment test data: specific card number (4111-1111-1111-1111), expiration, CVV
- Dynamic data: guidance on timestamp/UUID suffixes for registration tests
- Contact form: minimum 50+ character message requirement noted

### 5. Locator/Selector Guidance

**V1 (Score: 1):** Zero mention of data-test attributes, selectors, or locator strategies. Every step is described in human terms ("Click the button").

**V2 (Score: 5):** Scattered mentions: `[data-test="add-to-cart"]` in a few automation notes. Not systematic.

**V3 (Score: 8):** Dedicated "Known Locator Patterns" section listing:
- `[data-test="nav-sign-in"]`, `[data-test="nav-contact"]`
- `[data-test="email"]`, `[data-test="password"]`, `[data-test="login-submit"]`
- `[data-test="add-to-cart"]`, `[data-test="cart-quantity"]`
- `[data-test="search-query"]`, `[data-test="search-submit"]`
- Product cards: `[data-test="product-name"]`, `[data-test="product-price"]`
- Individual scenario notes recommend `getByRole()` alternatives

### 6. Scope Appropriateness

**V1 (Score: 3):** 50% of the files (10 of 20) cover things outside Playwright E2E testing scope:
- File 11: Responsive design/mobile (partial overlap)
- File 13: Network error simulation, concurrent user testing
- File 14: Performance metrics, load testing, memory leaks - this is k6/Lighthouse territory
- File 15: Security testing (XSS, CSRF, SQL injection) - this is OWASP ZAP/Burp Suite territory
- File 16: Accessibility (WCAG compliance) - this is axe-core/pa11y territory
- File 17: Cross-browser compatibility - valid but framed as manual visual comparison
- File 18: API testing - this is Playwright API testing but framed as monitoring network tab
- File 19: Integration testing (email service, shipping calculator, analytics, CMS, database) - most of this doesn't exist

**V2 (Score: 8):** Stays focused on E2E critical paths. Google OAuth scenario is the only questionable inclusion. Mentions that admin testing, mobile, accessibility, performance, and security are intentionally excluded.

**V3 (Score: 9):** Tightest scope. Explicitly removes Google OAuth as "complex to automate due to third-party popup/redirect." Removes forgot password flow as "requires email verification which is hard to automate in E2E." Every remaining scenario is directly automatable with Playwright.

### 7. Edge Case Coverage

**V1 (Score: 4):** File 13 is entirely about edge cases, but many are unrealistic for this app (network disconnect recovery, database backup, concurrent session management). Quantity-to-zero, empty form submissions are covered.

**V2 (Score: 6):** Covers: invalid login attempts, out-of-stock products, no-results search, price range edge cases. Missing: empty cart state, form validation comprehensive testing.

**V3 (Score: 7):** Covers all V2 edge cases plus: empty cart state (Scenario 17), registration form validation errors with specific password failure modes (Scenario 14), checkout authentication gate (Scenario 4). Missing compared to V1's breadth: network errors, session timeout, but these are intentionally excluded as not E2E-appropriate.

### 8. Structure & Organization

**V1 (Score: 5):** 20 well-organized files with consistent formatting. Each file has clear test environment, objective, steps, expected results. But no cross-file index, no coverage matrix, no priority guide - you'd need to read all 20 files to understand the full scope.

**V2 (Score: 7):** Single document with executive summary, coverage matrix, test data section, and risks/gaps. Scenarios grouped by category. Missing priority distribution table.

**V3 (Score: 9):** Everything V2 has plus:
- Application overview with feature list
- Key navigation structure documented
- Known locator patterns section
- Priority distribution table
- Coverage matrix with 7 categories
- Test data requirements in table format
- Recommended next steps section

### 9. Actionability

**V1 (Score: 2):** An engineer would need to: explore the app manually, discover all selectors, determine priorities, figure out test data, decide which scenarios actually apply. The specs create more questions than answers.

**V2 (Score: 6):** Provides enough to start on P0 scenarios, but would still need selector discovery and test data research for many scenarios.

**V3 (Score: 9):** An engineer could open Playwright, create a new test file, and start coding Scenario 1 immediately. Credentials, selectors, URLs, expected behaviors, and Playwright patterns are all documented. The "Recommended Next Steps" even suggests the file structure (lib/pages/, lib/fixtures/, lib/datafactory/).

### 10. Gap Awareness

**V1 (Score: 1):** No acknowledgment of gaps, limitations, or what's out of scope. The implicit message is "we covered everything" - when in reality many scenarios test phantom features.

**V2 (Score: 7):** Explicit "Risks & Gaps" section listing: admin functionality, advanced roles, bulk operations, mobile, performance, security, accessibility, cross-browser. Notes intentional bugs in the application.

**V3 (Score: 9):** Comprehensive gap list with specific reasoning:
- Admin functionality
- Google OAuth (with reason: "Complex to automate due to third-party popup/redirect")
- Forgot password (with reason: "Requires email verification which is hard to automate in E2E")
- Pagination, language switching, chat widget
- Responsive/mobile, accessibility, performance, security, cross-browser
- File upload in contact form
- Notes about intentional bugs and shared demo environment
- Recommends API-level setup/teardown for test data isolation

---

## Feature-Level Gap Analysis

This table shows whether each application feature has test coverage in each version.

| Feature Area | V1 | V2 | V3 | Notes |
|---|:---:|:---:|:---:|---|
| **Homepage layout** | Yes (file 01) | No | No | V1 has dedicated file; V2/V3 cover incidentally |
| **Main navigation** | Yes (file 01) | Yes (#8, #18) | No | V3 removes as standalone; covered within other flows |
| **Language selector** | Yes (file 01) | No | No | Not in V2/V3 scope |
| **Product listing/grid** | Yes (file 03) | Yes (#7, #8) | Yes (#1, #13) | All versions cover |
| **Category filtering** | Yes (file 03) | Yes (#4, #8) | Yes (#10, #20) | V3 most specific with checkbox behavior |
| **Product search (text)** | Yes (files 03, 08) | Yes (#4) | Yes (#9) | V3 notes debounce and data-test attributes |
| **Product sorting** | Yes (files 03, 08) | Partial | Yes (#12) | V3 covers all 4 sort options explicitly |
| **Price range filter** | No | Yes (#13) | Yes (#11) | V1 misses this entirely |
| **Product detail page** | Yes (file 07) | Yes (#7) | Yes (#13) | V3 includes favourites verification |
| **Product images** | Yes (file 07) | Partial | Partial | V1 over-tests with gallery/zoom |
| **Add to cart** | Yes (file 04) | Yes (#1) | Yes (#1) | All versions cover |
| **Cart management** | Yes (file 04) | Yes (#5) | Yes (#2) | V3 most specific on update/remove |
| **Cart calculations** | Yes (file 04) | Yes (#14) | Yes (#5) | V3 has parseFloat() guidance |
| **Empty cart state** | Partial (file 04) | No | Yes (#17) | Only V3 has dedicated scenario |
| **Checkout flow** | Yes (file 09) | Yes (#6) | Yes (#3) | V3 documents all 5 payment methods |
| **Checkout auth gate** | Partial (file 09) | No | Yes (#4) | V3 uniquely tests unauthenticated checkout attempt |
| **Payment methods** | Generic (file 09) | Partial (#6) | Yes (#3) | V3 lists all 5: CC, Bank, COD, BNPL, Gift Card |
| **User login** | Yes (file 02) | Yes (#3) | Yes (#6) | V3 has specific test account credentials |
| **Invalid login** | Yes (file 02) | Yes (#10) | Yes (#8) | V3 tests password toggle and generic error message |
| **User registration** | Yes (file 05) | Yes (#2) | Yes (#7) | V3 notes unique email per run |
| **Registration validation** | Yes (files 05, 12) | Yes (#15) | Yes (#14) | V3 tests specific password failure modes |
| **Forgot password** | Yes (file 02) | No | No | V2/V3 exclude as not automatable E2E |
| **Google OAuth** | Yes (file 02) | Yes (#19) | No | V3 removes as impractical |
| **Session management** | Yes (file 02) | Partial | Partial (#20) | V1 has dedicated scenarios |
| **User profile update** | Yes (file 10) | Yes (#9) | Yes (#16) | V3 verifies persistence after refresh |
| **Password change** | Yes (file 10) | Yes (#9) | No | V3 drops as lower priority |
| **Order history** | Partial (file 10) | Partial (#9) | Yes (#20) | V3 verifies in E2E journey |
| **Address management** | Yes (file 10) | Partial (#9) | No | V1 has dedicated scenarios |
| **Contact form** | Yes (file 06) | Yes (#17) | Yes (#15) | V3 notes setInputFiles() for attachment |
| **Contact form validation** | Yes (file 06) | Partial | Partial | V1 most thorough on contact-specific validation |
| **Add to favourites** | Partial (file 07) | No | Yes (#13) | V3 uniquely verifies in favourites list |
| **Out of stock** | No | Yes (#11) | Yes (#19) | V1 misses this entirely |
| **Search no results** | Yes (file 08) | Yes (#12) | Yes (#18) | All versions cover |
| **Pagination** | Yes (file 03) | Yes (#8) | No | V3 acknowledges as gap |
| **Breadcrumbs** | Yes (file 03) | Partial | No | Minor feature |
| **Responsive/mobile** | Yes (file 11) | No | No | V2/V3 exclude - different tool |
| **Form validation (cross-form)** | Yes (file 12) | Partial | Yes (#14) | V1 has dedicated file but generic |
| **Error handling** | Yes (file 13) | Partial | Partial | V1 has dedicated file |
| **Performance testing** | Yes (file 14) | No | No | Not Playwright E2E scope |
| **Security testing** | Yes (file 15) | No | No | Not Playwright E2E scope |
| **Accessibility** | Yes (file 16) | No | No | Not Playwright E2E scope |
| **Cross-browser** | Yes (file 17) | No | No | Config-level, not spec-level |
| **API testing** | Yes (file 18) | No | No | Different test layer |
| **Integration testing** | Yes (file 19) | No | No | Many features don't exist |
| **E2E user journey** | Yes (file 20) | Yes (#20) | Yes (#20) | V3 most detailed with order history verification |

---

## Key Insights

### What Improved from V1 to V2
1. **Focus.** Went from 130+ scattered scenarios to 20 prioritized critical paths
2. **Realism.** Stopped testing phantom features that don't exist
3. **Structure.** Single document with coverage matrix instead of 20 disconnected files
4. **Automation guidance.** Added data-test attributes and timing notes
5. **Test data.** Actually documented what accounts and products to use

### What Improved from V2 to V3 (Same Prompt, Better Model)

V3 used the **exact same prompt and custom agent** as V2. The only change was the model: Claude Opus 4.6 instead of Claude Sonnet 4. However, something notable happened - Opus 4.6 autonomously discovered the V1 and V2 spec files in the repository without being asked. It used that prior work as additional context to inform its output, effectively building on previous iterations on its own initiative.

This self-directed context gathering led to:
1. **Locator patterns.** Dedicated section with actual selectors from the app
2. **Playwright specificity.** References test.step(), test.slow(), waitForResponse(), POM patterns
3. **Test data depth.** Actual credentials, specific card numbers, dynamic data strategies
4. **Pragmatism.** Removed un-automatable scenarios (OAuth, forgot password) - likely informed by seeing V2 include them and recognizing the friction
5. **Implementation roadmap.** Added recommended next steps for building the test suite
6. **Verification depth.** Steps include "refresh the page and verify persistence", "navigate to favourites list and verify"
7. **Learning from V2's gaps.** Added empty cart state, checkout auth gate, and favourites verification - scenarios V2 missed

### The Prompt Engineering + Model Capability Lesson

Three variables changed across these versions, and all three mattered:

- **V1:** Vague prompt + no context + Sonnet 4 = the AI fills the void with generic content
- **V2:** Specific prompt + application context + Sonnet 4 = focused, prioritized output
- **V3:** Same specific prompt + Opus 4.6 = production-ready output (the model autonomously gathered additional context by finding V1/V2 in the repo)

The jump from V1 to V2 was almost entirely prompt engineering. The jump from V2 to V3 was model capability - a more capable model took the same instructions and independently decided to research prior work, learn from it, and produce a more thorough result. This is a meaningful distinction: better prompts get you from 26 to 65, but a more capable model with the same prompt got from 65 to 87 by doing things you didn't ask it to do.

### What V1 Uniquely Covers That V2/V3 Don't
Despite its lower quality, V1 touches areas that V2/V3 intentionally exclude:
- Responsive/mobile testing (file 11)
- Accessibility (file 16)
- Performance metrics (file 14)
- Pagination (file 03)
- Session timeout handling (file 13)
- Form reset functionality (file 06)

These are legitimate testing concerns - they just don't belong in a Playwright E2E critical path test plan. They should be separate plans using appropriate tools (Lighthouse, axe-core, k6).
