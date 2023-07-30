const loginPageErrorMessages = {
    usernameIsRequired: 'Epic sadface: Username is required',
    passwordIsRequired: 'Epic sadface: Password is required',
    dontMatchAnyUser: 'Epic sadface: Username and password do not match any user in this service',
    userIsLocked: 'Epic sadface: Sorry, this user has been locked out.',
};

const checkoutPageErrorMessage = {
    firstnameIsRequired: 'Error: First Name is required',
    lastnameIsRequired: 'Error: Last Name is required',
    postalCodeIsRequired: 'Error: Postal Code is required',
};

module.exports = { loginPageErrorMessages, checkoutPageErrorMessage };
