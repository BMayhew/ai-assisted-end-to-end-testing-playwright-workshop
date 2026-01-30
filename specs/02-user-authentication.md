# User Authentication Test Plan

## Test Suite: User Authentication

### Test Environment
- **Application URL**: https://practicesoftwaretesting.com
- **Starting State**: Logged out user

### Test Scenarios

#### 1. Valid User Login
**Objective**: Test successful login with valid credentials

**Steps**:
1. Navigate to https://practicesoftwaretesting.com
2. Click "Sign in" button
3. Enter valid email address
4. Enter valid password
5. Click "Login" button
6. Verify successful login redirect
7. Verify user session is established

**Expected Results**: 
- Login form accepts valid credentials
- User is redirected to appropriate page
- User menu shows logged-in state

#### 2. Invalid Credentials Login
**Objective**: Test login failure with invalid credentials

**Steps**:
1. Navigate to login page
2. Enter invalid email address
3. Enter invalid password
4. Click "Login" button
5. Verify error message appears
6. Verify user remains on login page

**Expected Results**: 
- Appropriate error message displayed
- User remains unauthenticated
- Form validation works correctly

#### 3. Empty Field Validation
**Objective**: Test form validation for empty required fields

**Steps**:
1. Navigate to login page
2. Leave email field empty
3. Click "Login" button
4. Verify validation message for email
5. Enter email, leave password empty
6. Click "Login" button
7. Verify validation message for password

**Expected Results**: 
- Validation messages appear for empty required fields
- Form submission is prevented with empty fields

#### 4. Google Sign-in Option
**Objective**: Test Google authentication integration

**Steps**:
1. Navigate to login page
2. Click "Sign in with Google" button
3. Verify Google OAuth popup appears
4. Test cancel action
5. Verify return to login page

**Expected Results**: 
- Google OAuth integration works
- Cancel action returns user properly

#### 5. Registration Link
**Objective**: Test new user registration navigation

**Steps**:
1. Navigate to login page
2. Click "Register your account" link
3. Verify navigation to registration page
4. Verify registration form is available

**Expected Results**: 
- Registration link navigates correctly
- Registration page loads properly

#### 6. Forgot Password Functionality
**Objective**: Test password recovery process

**Steps**:
1. Navigate to login page
2. Click "Forgot your Password?" link
3. Verify navigation to password reset page
4. Enter email address
5. Submit password reset request
6. Verify confirmation message

**Expected Results**: 
- Password reset link works
- Reset process initiates successfully

#### 7. Session Management
**Objective**: Test user session persistence and logout

**Steps**:
1. Login with valid credentials
2. Navigate to different pages
3. Verify session persists across pages
4. Logout (if logout option available)
5. Verify session is terminated
6. Verify redirect to appropriate page

**Expected Results**: 
- Session persists across navigation
- Logout terminates session properly

#### 8. Password Visibility Toggle
**Objective**: Test password field visibility toggle

**Steps**:
1. Navigate to login page
2. Enter password in password field
3. Locate password visibility toggle button
4. Click toggle to show password
5. Verify password is visible
6. Click toggle to hide password
7. Verify password is hidden

**Expected Results**: 
- Password visibility toggle works correctly
- Password shows/hides appropriately