# Critical Path Test Plan - Practice Software Testing E-commerce Site

**Test Site:** https://practicesoftwaretesting.com  
**Documentation:** https://testsmith-io.github.io/practice-software-testing/#/  
**Generated:** February 17, 2026  
**Test Framework:** Playwright  

## Application Overview

Practice Software Testing is an e-commerce toolshop application designed for software testing practice. It features:

- **Tech Stack:** Angular 20 frontend, Laravel 12/PHP 8.3 backend, MariaDB 10.6 database
- **Product Catalog:** Tools and hardware with categories (Hand Tools, Power Tools, Other)
- **User Roles:** Admin and Customer accounts
- **Payment Methods:** Bank Transfer, Cash on Delivery, Credit Card, Buy Now Pay Later, Gift Card
- **Authentication:** Traditional login, Google Sign-in, Guest checkout options
- **API:** https://api.practicesoftwaretesting.com with Swagger documentation

## Default Test Accounts

| Name | Role | Email | Password |
|------|------|-------|----------|
| John Doe | admin | admin@practicesoftwaretesting.com | welcome01 |
| Jane Doe | customer | customer@practicesoftwaretesting.com | welcome01 |
| Jack Howe | customer | customer2@practicesoftwaretesting.com | welcome01 |
| Bob Smith | customer | customer3@practicesoftwaretesting.com | pass123 |

## Key Locators Identified

- `[data-test="add-to-cart"]` - Product add to cart button
- `[data-test="nav-cart"]` - Cart navigation icon  
- `[data-test="search-query"]` - Search input field
- `[data-test="email"]`, `[data-test="password"]` - Login form fields
- `[data-test="guest-email"]` - Guest checkout email field
- `[data-test="proceed-1"]` - First checkout proceed button
- `[data-test="proceed-2-guest"]` - Guest checkout proceed button
- `[data-test="proceed-3"]` - Billing to payment proceed button

## Critical Path Test Scenarios

### 1. Shopping Cart and Checkout Flow (HIGHEST PRIORITY)

#### 1.1 Add Product to Cart and Complete Guest Checkout
**Priority:** P0 (Critical)  
**Business Impact:** Core revenue generation functionality  

**Steps:**
1. Navigate to the home page (https://practicesoftwaretesting.com)
2. Browse product catalog and select a product (e.g., Combination Pliers - $14.15)
3. View product details page and verify product information
4. Adjust quantity if needed using +/- controls
5. Click "Add to cart" button
6. Verify cart badge shows item count "1"
7. Navigate to checkout page via cart icon
8. Verify cart contents display correctly with pricing
9. Click "Proceed to checkout"
10. Select "Continue as Guest" tab
11. Fill in guest information:
    - Email: test@example.com
    - First Name: John
    - Last Name: Smith
12. Proceed to billing address step
13. Fill in complete billing address:
    - Street: 123 Main St
    - City: New York
    - State: NY
    - Country: USA  
    - Postal Code: 10001
14. Proceed to payment step
15. Select payment method (Credit Card)
16. Verify payment form appears with required fields

**Expected Results:** 
- User can successfully add items to cart 
- Cart accurately reflects items and quantities
- Complete guest checkout flow works without authentication
- Each checkout step validates properly before proceeding

### 2. User Authentication

#### 2.1 Customer Login and Account Access
**Priority:** P1 (High)  
**Business Impact:** Customer retention and personalization  

**Steps:**
1. Navigate to login page (https://practicesoftwaretesting.com/auth/login)
2. Verify both Google sign-in and traditional login options are available
3. Fill in customer credentials:
   - Email: customer@practicesoftwaretesting.com  
   - Password: welcome01
4. Click "Login" button
5. Verify successful login redirect to account page (/account)
6. Verify navigation menu shows "Jane Doe" instead of "Sign in"
7. Explore account sections: Favorites, Profile, Invoices, Messages

**Expected Results:**
- User can successfully authenticate with valid credentials
- Proper redirect to account page after login
- All account management features are accessible

### 3. Product Search and Filtering

#### 3.1 Product Search Functionality
**Priority:** P1 (High)  
**Business Impact:** Product discoverability affects conversion  

**Steps:**
1. Navigate to home page
2. Enter search term "hammer" in left sidebar search box
3. Click search button or press Enter
4. Verify search results show "Searched for: hammer"
5. Verify relevant products are displayed (Sledgehammer, Claw Hammer, etc.)
6. Test different search terms and verify results update

**Expected Results:**
- Search returns relevant products based on keywords
- Search results page clearly indicates search term
- Product results include images, names, and prices

## Implementation Priorities

### Phase 1 (Critical - Must Pass)
1. Guest checkout complete flow
2. Multi-item cart management
3. Customer login functionality
4. Basic product search

### Phase 2 (High Priority - Should Pass)  
1. Authenticated user checkout
2. Product filtering and sorting
3. Account management basics
4. Product detail page functionality

## Bug Hunting Focus Areas

The application intentionally contains bugs for testing practice:

- **Form Validation Edge Cases:** Boundary testing, special characters
- **Cart Calculation Errors:** Quantity multiplication, rounding issues
- **Authentication State Management:** Session persistence, logout cleanup
- **Search Accuracy:** Result relevance, filter combinations
- **Payment Processing:** Validation errors, gateway integration

## Cross-Functional Testing

### Performance Testing
- Page load times under normal conditions
- Search response times with large result sets
- Checkout completion times

### Security Testing  
- Input sanitization across forms
- Authentication token security
- Payment data handling compliance

### Mobile & Accessibility
- Critical paths on mobile devices
- Keyboard navigation support
- Screen reader compatibility

This comprehensive test plan prioritizes the highest business value user flows while ensuring thorough coverage of the critical e-commerce functionality.