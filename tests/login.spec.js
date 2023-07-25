const { test } = require ('../fixture/fixture');


// Добавить экспекты
test('success login into account', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');

    await loginPage.fillUsernameInputField('standard_user');
    await loginPage.fillPasswordInputField('secret_sauce');
    await loginPage.submitAuthForm();

});

test('try to login with locked user', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');

    await loginPage.fillUsernameInputField('locked_out_user');
    await loginPage.fillPasswordInputField('secret_sauce');
    await loginPage.submitAuthForm();
});

test('try to login with incorrect username', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');

    await loginPage.fillUsernameInputField('standard_use');
    await loginPage.fillPasswordInputField('secret_sauce');
    await loginPage.submitAuthForm();
});

test('try to login with incorrect password', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');

    await loginPage.fillUsernameInputField('standard_user');
    await loginPage.fillPasswordInputField('secret_sauc');
    await loginPage.submitAuthForm();
});

test('try to login with without username', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');

    await loginPage.fillUsernameInputField('');
    await loginPage.fillPasswordInputField('secret_sauc');
    await loginPage.submitAuthForm();
});

test('try to login with without password', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');

    await loginPage.fillUsernameInputField('standard_user');
    await loginPage.fillPasswordInputField('');
    await loginPage.submitAuthForm();
});

test('try to login with without username and password', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');

    await loginPage.fillUsernameInputField('');
    await loginPage.fillPasswordInputField('');
    await loginPage.submitAuthForm();
});