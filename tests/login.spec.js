const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');
const { loginPageErrorMessages } = require('../test-data/error-data');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('success login into account', async ({ loginPage, productList }) => {
    await loginPage.fillUsernameInputField(users.username.standart);
    await loginPage.fillPasswordInputField(users.password.valid);
    await loginPage.submitAuthForm();
    await productList.pageIsLoaded();
});

test('try to login with locked user', async ({ loginPage }) => {
    await loginPage.fillUsernameInputField(users.username.locked);
    await loginPage.fillPasswordInputField(users.password.valid);
    await loginPage.submitAuthForm();
    await loginPage.verifyErrorMessageIsDisplayed(loginPageErrorMessages.userIsLocked);
});

test('try to login with incorrect username', async ({ loginPage }) => {
    await loginPage.fillUsernameInputField(users.username.wrong);
    await loginPage.fillPasswordInputField(users.password.valid);
    await loginPage.submitAuthForm();
    await loginPage.verifyErrorMessageIsDisplayed(loginPageErrorMessages.dontMatchAnyUser);
});

test('try to login with incorrect password', async ({ loginPage }) => {
    await loginPage.fillUsernameInputField(users.username.standart);
    await loginPage.fillPasswordInputField(users.password.wrong);
    await loginPage.submitAuthForm();
    await loginPage.verifyErrorMessageIsDisplayed(loginPageErrorMessages.dontMatchAnyUser);
});

test('try to login with without username', async ({ loginPage }) => {
    await loginPage.fillPasswordInputField(users.password.valid);
    await loginPage.submitAuthForm();
    await loginPage.verifyErrorMessageIsDisplayed(loginPageErrorMessages.usernameIsRequired);
});

test('try to login with without password', async ({ loginPage }) => {
    await loginPage.fillUsernameInputField(users.username.standart);
    await loginPage.submitAuthForm();
    await loginPage.verifyErrorMessageIsDisplayed(loginPageErrorMessages.passwordIsRequired);
});

test('try to login without username and password', async ({ loginPage }) => {
    await loginPage.submitAuthForm();
    await loginPage.verifyErrorMessageIsDisplayed(loginPageErrorMessages.usernameIsRequired);
});

test('try to close message', async ({ loginPage }) => {
    await loginPage.submitAuthForm();
    await loginPage.closeErrorMessage();
});


// Check page state before and after fill the form

