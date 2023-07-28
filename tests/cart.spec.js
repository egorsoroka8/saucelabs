const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');

test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(
        users.username.standart,
        users.password.valid
    );
});

test('open empty cart', async ({ header, cartPage }) => {
    await header.goToCart();
    await cartPage.pageIsLoaded();
});

test('check that product in cart has all attributes', async ({
    header,
    productList,
    cartPage,
}) => {
    const addedProduct = await productList.randomProduct();
    await productList.addProductToCart(addedProduct);
    await header.goToCart();
    await cartPage.checkThatProductHasAttributes();
});

test('remove product from cart', async ({ header, productList, cartPage }) => {
    const addedProduct = await productList.randomProduct();
    await productList.addProductToCart(addedProduct);
    await header.goToCart();
    await cartPage.removeProductFromCart();
});

test('go to product page from cart', async ({
    header,
    productList,
    productPage,
    cartPage,
}) => {
    const addedProduct = await productList.randomProduct();
    await productList.addProductToCart(addedProduct);
    await header.goToCart();
    await cartPage.goToProductPage();
    await productPage.checkThatProductHasAttributes();
    await productPage.removeProductButtonIsEnabled();
});

test('return to shopping list page from cart', async ({
    header,
    productList,
    cartPage,
}) => {
    await header.goToCart();
    await cartPage.returnToShoppingList();
    await productList.pageIsLoaded();
});

test('go to checkout page', async ({ header, checkoutPage, cartPage }) => {
    await header.goToCart();
    await cartPage.goToCheckout();
    await checkoutPage.pageIsLoaded();
});
