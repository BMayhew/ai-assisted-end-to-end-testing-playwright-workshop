# Contact Page Test Plan

## Test Suite: Contact Page Functionality

### Test Environment
- **Application URL**: https://practicesoftwaretesting.com/contact
- **Starting State**: Fresh browser session

### Test Scenarios

#### 1. Contact Page Layout
**Objective**: Verify contact page displays correctly

**Steps**:
1. Navigate to contact page via main navigation
2. Verify page title and heading
3. Check contact form is visible
4. Verify all form fields are present
5. Check for contact information display
6. Verify submit button is available

**Expected Results**: 
- Contact page loads properly
- All elements are visible and accessible
- Form is complete and functional

#### 2. Contact Form Submission
**Objective**: Test valid contact form submission

**Steps**:
1. Navigate to contact page
2. Fill in name field
3. Enter valid email address
4. Enter subject line
5. Fill in message text area
6. Submit the form
7. Verify success message or confirmation

**Expected Results**: 
- Form accepts valid input
- Submission processes successfully
- User receives confirmation

#### 3. Required Field Validation
**Objective**: Test contact form field validation

**Steps**:
1. Navigate to contact page
2. Leave name field empty, fill others
3. Attempt submission, verify error
4. Leave email empty, fill others
5. Leave subject empty, fill others
6. Leave message empty, fill others
7. Submit with all fields completed

**Expected Results**: 
- Required field validation works
- Clear error messages appear
- Complete form submits successfully

#### 4. Email Format Validation
**Objective**: Test email address validation in contact form

**Steps**:
1. Navigate to contact page
2. Enter invalid email format
3. Attempt to submit form
4. Verify validation error
5. Enter valid email format
6. Verify validation passes

**Expected Results**: 
- Invalid email formats are rejected
- Validation message is clear
- Valid emails are accepted

#### 5. Message Length Validation
**Objective**: Test message field length limits

**Steps**:
1. Navigate to contact page
2. Enter very short message (1-2 words)
3. Check if minimum length validation exists
4. Enter very long message (test maximum)
5. Verify character count or limits
6. Enter appropriate length message

**Expected Results**: 
- Message length limits are enforced
- User feedback on length requirements
- Appropriate messages are accepted

#### 6. Contact Information Display
**Objective**: Verify contact information is available

**Steps**:
1. Navigate to contact page
2. Look for business address
3. Check for phone number
4. Look for email address
5. Check for business hours
6. Verify any social media links

**Expected Results**: 
- Contact information is clearly displayed
- Information appears accurate and complete
- Links function properly

#### 7. Form Reset Functionality
**Objective**: Test form clearing capability

**Steps**:
1. Navigate to contact page
2. Fill in all form fields
3. Look for reset or clear button
4. Test form reset functionality
5. Verify all fields are cleared
6. Test filling form again after reset

**Expected Results**: 
- Reset functionality works if available
- All fields clear properly
- Form remains functional after reset

#### 8. Contact Form Accessibility
**Objective**: Test form accessibility features

**Steps**:
1. Navigate to contact page using keyboard only
2. Tab through all form fields
3. Verify proper tab order
4. Check field labels are associated
5. Test form submission via keyboard
6. Verify error messages are accessible

**Expected Results**: 
- Form is fully keyboard accessible
- Tab order is logical
- Screen reader compatibility