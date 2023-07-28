const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');

test.beforeEach(async ({ page, loginPage, header, cartPage }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(users.username.standart, users.password.valid);
    await header.goToCart();
    await cartPage.goToCheckout();
});

test('', async ({  }) => {

});