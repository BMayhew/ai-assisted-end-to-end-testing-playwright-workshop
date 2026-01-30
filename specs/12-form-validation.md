# Form Validation Test Plan

## Test Suite: Form Validation and Error Handling

### Test Environment
- **Application URL**: https://practicesoftwaretesting.com
- **Starting State**: Fresh browser session

### Test Scenarios

#### 1. Email Address Validation
**Objective**: Test email validation across all forms

**Steps**:
1. Test registration form email validation
2. Test login form email validation
3. Test contact form email validation
4. Enter email without @ symbol
5. Enter email without domain
6. Enter email with spaces
7. Test email with special characters

**Expected Results**: 
- Invalid email formats are rejected
- Error messages are clear and helpful
- Valid emails are accepted consistently

#### 2. Password Strength Validation
**Objective**: Test password requirements enforcement

**Steps**:
1. Test minimum length requirements
2. Test maximum length limits
3. Enter password with only numbers
4. Enter password with only letters
5. Test password with special characters
6. Test common password rejection
7. Verify real-time password strength indication

**Expected Results**: 
- Password requirements are enforced
- Strength indicator works correctly
- Weak passwords are rejected

#### 3. Required Field Validation
**Objective**: Test required field enforcement

**Steps**:
1. Submit forms with empty required fields
2. Test partial form completion
3. Verify error highlighting on required fields
4. Test error message placement
5. Check form submission prevention
6. Test error clearing when fields are filled

**Expected Results**: 
- Required fields are clearly marked
- Submission is blocked when fields are empty
- Error states are visually clear

#### 4. Numeric Field Validation
**Objective**: Test numeric input validation

**Steps**:
1. Enter letters in quantity fields
2. Enter negative numbers where inappropriate
3. Test decimal numbers in integer fields
4. Enter extremely large numbers
5. Test copy/paste of invalid data
6. Verify numeric formatting

**Expected Results**: 
- Non-numeric input is rejected
- Appropriate number ranges are enforced
- Input formatting is handled correctly

#### 5. Date Field Validation
**Objective**: Test date input validation

**Steps**:
1. Enter invalid date formats
2. Test future/past date restrictions
3. Enter non-existent dates (Feb 30)
4. Test date picker functionality
5. Verify date format consistency
6. Test leap year handling

**Expected Results**: 
- Invalid dates are rejected
- Date restrictions are enforced
- Date picker works correctly

#### 6. Text Field Length Validation
**Objective**: Test text input length limits

**Steps**:
1. Enter text exceeding maximum length
2. Test minimum length requirements
3. Verify character counting
4. Test special character handling
5. Check for XSS prevention
6. Test whitespace handling

**Expected Results**: 
- Length limits are enforced
- Character counting is accurate
- Security measures prevent malicious input

#### 7. File Upload Validation
**Objective**: Test file upload restrictions

**Steps**:
1. Upload files exceeding size limits
2. Upload unsupported file types
3. Test multiple file uploads
4. Upload files with special characters in names
5. Test drag and drop functionality
6. Verify file preview functionality

**Expected Results**: 
- File restrictions are enforced
- Upload process is user-friendly
- Error handling is clear

#### 8. Cross-Field Validation
**Objective**: Test validation between related fields

**Steps**:
1. Test password confirmation matching
2. Verify start/end date relationships
3. Test dependent dropdown fields
4. Check billing vs shipping address logic
5. Test coupon code validation
6. Verify total calculation accuracy

**Expected Results**: 
- Related fields validate correctly
- Dependencies are properly enforced
- Complex validation rules work