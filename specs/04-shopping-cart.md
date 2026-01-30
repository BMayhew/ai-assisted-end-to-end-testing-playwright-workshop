# Shopping Cart Test Plan

## Test Suite: Shopping Cart Functionality

### Test Environment
- **Application URL**: https://practicesoftwaretesting.com
- **Starting State**: Fresh browser session

### Test Scenarios

#### 1. Add Product to Cart
**Objective**: Test adding products to shopping cart

**Steps**:
1. Navigate to product listing
2. Click "Add to Cart" on a product
3. Verify product is added to cart
4. Check cart icon/counter updates
5. Add multiple different products
6. Verify cart count increases correctly

**Expected Results**: 
- Products add to cart successfully
- Cart counter updates immediately
- Multiple products can be added

#### 2. View Cart Contents
**Objective**: Test cart viewing functionality

**Steps**:
1. Add products to cart
2. Click cart icon or "View Cart" link
3. Verify all added products appear
4. Check product details in cart (name, price, image)
5. Verify quantities are correct
6. Check subtotal calculations

**Expected Results**: 
- All cart items display correctly
- Product information is accurate
- Calculations are correct

#### 3. Update Cart Quantities
**Objective**: Test quantity modification in cart

**Steps**:
1. Add products to cart
2. Navigate to cart view
3. Increase quantity of an item
4. Verify price updates correctly
5. Decrease quantity of an item
6. Test setting quantity to zero
7. Verify item removal when quantity is zero

**Expected Results**: 
- Quantity changes update prices
- Items remove when quantity is zero
- Calculations remain accurate

#### 4. Remove Items from Cart
**Objective**: Test item removal functionality

**Steps**:
1. Add multiple products to cart
2. Navigate to cart view
3. Click remove button on an item
4. Verify item is removed immediately
5. Check total price updates
6. Test removing all items
7. Verify empty cart message appears

**Expected Results**: 
- Items remove successfully
- Totals update correctly
- Empty cart state displays properly

#### 5. Cart Persistence
**Objective**: Test cart data persistence

**Steps**:
1. Add products to cart
2. Navigate to different pages
3. Verify cart contents remain
4. Refresh the page
5. Check cart contents persist
6. Close and reopen browser
7. Verify cart state (if session-based)

**Expected Results**: 
- Cart persists across page navigation
- Cart survives page refresh
- Session handling works correctly

#### 6. Cart Total Calculations
**Objective**: Verify cart total calculations

**Steps**:
1. Add products with different prices
2. Verify subtotal calculation
3. Check tax calculations (if applicable)
4. Verify shipping costs (if applicable)
5. Check discount application (if applicable)
6. Verify final total calculation

**Expected Results**: 
- All calculations are accurate
- Tax and shipping display correctly
- Discounts apply properly

#### 7. Proceed to Checkout
**Objective**: Test checkout process initiation

**Steps**:
1. Add products to cart
2. Navigate to cart view
3. Click "Proceed to Checkout" or similar button
4. Verify navigation to checkout page
5. Check cart contents transfer correctly
6. Verify user authentication requirements

**Expected Results**: 
- Checkout process initiates successfully
- Cart data transfers correctly
- Authentication requirements are clear