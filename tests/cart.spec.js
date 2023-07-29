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
    productList,
    cartPage,
    header
}) => {
    const addedProduct = await productList.randomProduct();
    await productList.addProductToCart(addedProduct);
    await header.goToCart();
    await cartPage.checkThatProductHasAttributes();
});

test('remove product from cart', async ({ 
    productList, 
    cartPage, 
    header
}) => {
    const addedProduct = await productList.randomProduct();
    await productList.addProductToCart(addedProduct);
    await header.goToCart();
    await cartPage.removeProductFromCart();
});

test('go to product page from cart', async ({
    productList,
    productPage,
    cartPage,
    header
}) => {
    const addedProduct = await productList.randomProduct();
    await productList.addProductToCart(addedProduct);
    await header.goToCart();
    await cartPage.goToProductPage();
    await productPage.checkThatProductHasAttributes();
    await productPage.removeProductButtonIsEnabled();
});

test('return to shopping list page from cart', async ({
    productList,
    cartPage,
    header
}) => {
    await header.goToCart();
    await cartPage.returnToShoppingList();
    await productList.pageIsLoaded();
});

test('go to checkout page', async ({ 
    checkoutPage,
    cartPage, 
    header
}) => {
    await header.goToCart();
    await cartPage.goToCheckout();
    await checkoutPage.pageIsLoaded();
});

// проверить что товары отображены в корзине в соответсвии с порядкой добавления
