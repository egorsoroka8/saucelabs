// // проверить значение counter через всё приложение
// // проверить что после логаута, при повторном логине количество добавленных товаров в каунтер остается
// // проверить что товар добавленный из страницы продукта, отображается в корзине
// // проверить что товар добавленный из страницы продукта отображается как добавленный на странице всех товаров
// // проверить что цена товара одинаковая через все приложение
// \\ проверить что после логаута, при повторном логине добавленные товары остаются добавленными
// // проверить что все добавленные товары передаются через все приложение

const { test } = require('../fixture/fixture');
const { users, checkout } = require('../test-data/user-data');
const { expect } = require('@playwright/test')

test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(
        users.username.standart,
        users.password.valid
    );
});

test.describe('counter value tests', () => {

    test('check that cart counter save value after logout -> login', async ({
        productList,
        header,
        loginPage,
    }) => {
        const qty = await productList.countProducts();
        await productList.addAllProductsToCart(qty);
        await header.checkCounterQty(qty);
        await header.logout();
        await loginPage.successLoginToAccount(
            users.username.standart,
            users.password.valid
        );
        await header.checkCounterQty(qty);
    });

    test('check that cart counter save value throughout all pages', async ({
        header,
        cartPage,
        productList,
        checkoutPage,
        overviewPage,
    }) => {
        const qty = await productList.countProducts();
        await productList.addAllProductsToCart(qty);
        await header.checkCounterQty(qty);
        await header.goToCart();
        await header.checkCounterQty(qty);
        await cartPage.goToCheckout();
        await header.checkCounterQty(qty);
        await checkoutPage.successFillCheckoutForm(
            checkout.firstname,
            checkout.lastname,
            checkout.postalCode
        );
        await header.checkCounterQty(qty);
        await overviewPage.pageIsLoaded();
    });
});

// нуждается в пересмотре логики
test('check that added to cart products added after logout -> login', async ({
    header,
    loginPage,
    productList,
}) => {
    const qty = await productList.countProducts();
    await productList.addAllProductsToCart(qty);
    await header.logout();
    await loginPage.successLoginToAccount(
        users.username.standart,
        users.password.valid
    );
    await productList.checkAddedProductsQty(qty);
});

test('check that all products added to cart displayed in cart and overview', async ({
    header,
    cartPage,
    productList,
    checkoutPage,
    overviewPage,
}) => {
    const qty = await productList.countProducts();
    const productsInList = await productList.addAllProductsToCart(qty);
    await header.goToCart();
    const productsInCart = await cartPage.getProductNameAndPrice(qty);
    expect(productsInList).toStrictEqual(productsInCart);
    await cartPage.goToCheckout();
    await checkoutPage.successFillCheckoutForm(
        checkout.firstname,
        checkout.lastname,
        checkout.postalCode
    )
    const productsInOverview = await overviewPage.getProductNameAndPrice(qty);
    expect(productsInList).toStrictEqual(productsInOverview);
});