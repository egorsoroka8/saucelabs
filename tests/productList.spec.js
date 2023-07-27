const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');

test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(users.username.standart, users.password.valid);
});

test('check that all products have attributes', async ({ productList }) => {
    for(let i = 0; i < 6; i++){
        await productList.checkEachProductHaveAttributes(i);
    }
});

test('check cart counter', async ({ productList, header }) => {
    let cartCounter = 0;
    cartCounter += await productList.addProductToCart();
    await header.checkCounterQty(String(cartCounter));
    cartCounter += await productList.removeProductFromCart();
    await header.checkCounterQty('');
});

test('open product page by click on image', async ({ productList, productPage }) => {
    await productList.clickOnImage();
    await productPage.pageIsLoaded();
});

test('open product page by click on title', async ({ productList, productPage }) => {
    await productList.clickOnTitle();
    await productPage.pageIsLoaded();
});