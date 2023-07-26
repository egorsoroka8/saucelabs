const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');


test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

// Добавить экспекты
test('success login into account', async ({ loginPage, productList }) => {
    await loginPage.fillUsernameInputField(users.username.standart);
    await loginPage.fillPasswordInputField(users.password.valid);
    await loginPage.submitAuthForm();
});

test('try to login with locked user', async ({ loginPage }) => {
    await loginPage.fillUsernameInputField(users.username.locked);
    await loginPage.fillPasswordInputField(users.password.valid);
    await loginPage.submitAuthForm();
});

test('try to login with incorrect username', async ({ loginPage }) => {
    await loginPage.fillUsernameInputField(users.username.wrong);
    await loginPage.fillPasswordInputField(users.password.valid);
    await loginPage.submitAuthForm();
});

test('try to login with incorrect password', async ({ loginPage }) => {
    await loginPage.fillUsernameInputField(users.username.standart);
    await loginPage.fillPasswordInputField(users.password.wrong);
    await loginPage.submitAuthForm();
});

test('try to login with without username', async ({ loginPage }) => {
    await loginPage.fillPasswordInputField(users.password.valid);
    await loginPage.submitAuthForm();
});

test('try to login with without password', async ({ loginPage }) => {
    await loginPage.fillUsernameInputField(users.username.standart);
    await loginPage.submitAuthForm();
});

test('try to login without username and password', async ({ loginPage }) => {
    await loginPage.submitAuthForm();
});