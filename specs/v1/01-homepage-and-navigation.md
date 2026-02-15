# Homepage and Navigation Test Plan

## Test Suite: Homepage and Navigation

### Test Environment
- **Application URL**: https://practicesoftwaretesting.com
- **Starting State**: Fresh browser session, no authentication

### Test Scenarios

#### 1. Homepage Layout and Elements
**Objective**: Verify homepage loads correctly with all expected elements

**Steps**:
1. Navigate to https://practicesoftwaretesting.com
2. Verify page title contains "Practice Software Testing"
3. Verify main navigation menu is visible
4. Verify header contains logo and navigation items (Home, Categories, Contact, Sign in)
5. Verify language selector is present (EN)
6. Verify footer contains demo application disclaimer
7. Verify GitHub repo link is present and functional
8. Verify "Support this project" link is present
9. Verify Privacy Policy link is present

**Expected Results**: 
- Homepage loads within 3 seconds
- All navigation elements are visible and accessible
- Links point to correct URLs

#### 2. Main Navigation Functionality
**Objective**: Test all main navigation menu items

**Steps**:
1. Navigate to homepage
2. Click "Home" menu item - verify it navigates to homepage
3. Click "Categories" dropdown - verify submenu appears
4. Click "Contact" menu item - verify navigation to contact page
5. Click "Sign in" menu item - verify navigation to login page
6. Test logo click - verify it returns to homepage

**Expected Results**: 
- All navigation items work correctly
- URLs change appropriately
- Pages load successfully

#### 3. Language Selector
**Objective**: Test language selection functionality

**Steps**:
1. Navigate to homepage
2. Locate language selector button
3. Click language selector
4. Verify language options appear
5. Select different language option
6. Verify page content updates accordingly

**Expected Results**: 
- Language selector displays available options
- Language change reflects in page content

#### 4. Responsive Design
**Objective**: Verify homepage displays correctly on different screen sizes

**Steps**:
1. Load homepage on desktop resolution (1920x1080)
2. Verify layout and element positioning
3. Resize to tablet resolution (768x1024)
4. Verify responsive layout adjustments
5. Resize to mobile resolution (375x667)
6. Verify mobile navigation works properly

**Expected Results**: 
- Layout adapts properly to different screen sizes
- All elements remain accessible
- Navigation remains functional on mobile