# User Account Management Test Plan

## Test Suite: User Account Features

### Test Environment
- **Application URL**: https://practicesoftwaretesting.com
- **Starting State**: Registered and logged-in user

### Test Scenarios

#### 1. User Profile Access
**Objective**: Test accessing user account/profile page

**Steps**:
1. Login with valid credentials
2. Look for user account menu/link
3. Click to access user profile
4. Verify profile page loads
5. Check for account navigation menu
6. Verify user information display

**Expected Results**: 
- Profile page is accessible
- Navigation is intuitive
- User information displays correctly

#### 2. Profile Information Update
**Objective**: Test updating user profile details

**Steps**:
1. Navigate to profile editing page
2. Update first name
3. Update last name
4. Change email address
5. Save changes
6. Verify updates are saved
7. Check email verification (if required)

**Expected Results**: 
- Profile updates save successfully
- Changes reflect immediately
- Email verification works if required

#### 3. Password Change Functionality
**Objective**: Test password update feature

**Steps**:
1. Navigate to password change section
2. Enter current password
3. Enter new password
4. Confirm new password
5. Submit password change
6. Verify success confirmation
7. Test login with new password

**Expected Results**: 
- Password change process works
- Security validation is proper
- New password is effective

#### 4. Order History Access
**Objective**: Test viewing past orders

**Steps**:
1. Navigate to order history section
2. Verify past orders are listed
3. Check order details display
4. Click to view individual order details
5. Verify order status information
6. Check for reorder options

**Expected Results**: 
- Order history displays completely
- Order details are accurate
- Status information is current

#### 5. Address Book Management
**Objective**: Test saved address functionality

**Steps**:
1. Navigate to address book section
2. Add new shipping address
3. Edit existing address
4. Set default address
5. Delete saved address
6. Verify address validation

**Expected Results**: 
- Address management works correctly
- Validation prevents invalid addresses
- Default address setting functions

#### 6. Account Preferences
**Objective**: Test account preference settings

**Steps**:
1. Navigate to preferences/settings
2. Update communication preferences
3. Change language settings
4. Update notification preferences
5. Save preference changes
6. Verify preferences persist

**Expected Results**: 
- Preferences update successfully
- Settings persist across sessions
- Changes take effect immediately

#### 7. Account Security Settings
**Objective**: Test account security features

**Steps**:
1. Navigate to security settings
2. View login history (if available)
3. Test two-factor authentication setup
4. Review active sessions
5. Test account deactivation options

**Expected Results**: 
- Security features are accessible
- Login monitoring works
- Security options function properly

#### 8. Account Deletion
**Objective**: Test account closure process

**Steps**:
1. Navigate to account deletion section
2. Review deletion warnings
3. Confirm identity for deletion
4. Test account deletion process
5. Verify confirmation of deletion
6. Test login after deletion

**Expected Results**: 
- Deletion process requires confirmation
- Account is properly deactivated
- User cannot login after deletion