const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');

test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(users.username.standart, users.password.valid);
});

test('check that product page has all attributes', async ({ productList, productPage }) => {
    await productList.clickOnTitle();
    await productPage.checkThatProductHasAttributes();
});

test('add and remove product from cart from product page', async ({ productList, productPage, header }) => {
    await productList.clickOnTitle();
    await productPage.addProductToCart();
    await header.checkCounterQty('1');
    await productPage.removeProductFromCart();
    await header.checkCounterQty('');
});

test('remove product from cart from product page', async ({ productList, productPage, header }) => {
    await productList.addProductToCart();
    await productList.clickOnTitle();
    await header.checkCounterQty('1');
    await productList.removeProductFromCart();
    await header.checkCounterQty('');
});

test('return to list page', async ({ productList, productPage }) => {
    await productList.clickOnTitle();
    await productPage.returnToListPage();
    await productList.pageIsLoaded();
});

test('add product in product page and remove in list page', async ({ productList, productPage, header }) => {
    await productList.clickOnTitle();
    await productPage.addProductToCart();
    await productPage.returnToListPage();
    await productList.removeProductFromCart();
    await header.checkCounterQty('');
});