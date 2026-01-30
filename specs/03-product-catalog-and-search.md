# Product Catalog and Search Test Plan

## Test Suite: Product Catalog and Search

### Test Environment
- **Application URL**: https://practicesoftwaretesting.com
- **Starting State**: Fresh browser session

### Test Scenarios

#### 1. Product Listing Display
**Objective**: Verify product catalog displays correctly

**Steps**:
1. Navigate to homepage
2. Verify products are displayed in grid/list format
3. Check product images load correctly
4. Verify product names are displayed
5. Verify product prices are shown
6. Check for product ratings/reviews
7. Verify "Add to Cart" buttons are visible

**Expected Results**: 
- Products display in organized layout
- All product information is visible
- Images load properly

#### 2. Category Navigation
**Objective**: Test product category filtering

**Steps**:
1. Navigate to homepage
2. Click "Categories" dropdown menu
3. Verify category options appear
4. Select a specific category
5. Verify page displays only products from selected category
6. Test multiple category selections
7. Verify breadcrumb navigation

**Expected Results**: 
- Category filtering works correctly
- Product count updates appropriately
- Breadcrumbs show navigation path

#### 3. Product Search Functionality
**Objective**: Test product search capabilities

**Steps**:
1. Locate search input field
2. Enter product name or keyword
3. Execute search
4. Verify search results display
5. Test partial word search
6. Test search with no results
7. Test special characters in search

**Expected Results**: 
- Search returns relevant products
- "No results" message for invalid searches
- Search handles special cases properly

#### 4. Product Sorting Options
**Objective**: Test product sorting functionality

**Steps**:
1. Navigate to product listing
2. Locate sort dropdown/options
3. Sort by price (low to high)
4. Verify products reorder correctly
5. Sort by price (high to low)
6. Sort by name (A-Z)
7. Sort by popularity/rating

**Expected Results**: 
- Sorting works correctly for all options
- Product order updates immediately
- Sort selection is maintained

#### 5. Product Pagination
**Objective**: Test product list pagination

**Steps**:
1. Navigate to product listing
2. Scroll to bottom to find pagination
3. Click "Next" page button
4. Verify new products load
5. Click specific page numbers
6. Test "Previous" page button
7. Verify page indicators update

**Expected Results**: 
- Pagination controls work properly
- Page content updates correctly
- Navigation is smooth

#### 6. Product Detail View
**Objective**: Test individual product page functionality

**Steps**:
1. Click on a product from listing
2. Verify navigation to product detail page
3. Check product image gallery
4. Verify product description
5. Check price and availability
6. Test quantity selector
7. Verify "Add to Cart" functionality

**Expected Results**: 
- Product details display completely
- All interactive elements work
- Information is accurate and complete