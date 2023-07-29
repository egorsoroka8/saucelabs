// // проверить значение counter через всё приложение
// // проверить что после логаута, при повторном логине количество добавленных товаров в каунтер остается
// проверить что все добавленные товары передаются через все приложение
// проверить что товар добавленный из страницы продукта, отображается в корзине
// проверить что товар добавленный из страницы продукта отображается как добавленный на странице всех товаров
// проверить что цена товара одинаковая через все приложение
// проверить что после логаута, при повторном логине добавленные товары остаются добавленными

const { test } = require('../fixture/fixture');
const { users, checkout } = require('../test-data/user-data');

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


test.only('testing', async ({
    header,
    cartPage,
    productList,
    checkoutPage,
    overviewPage,
}) => {
    const qty = await productList.countProducts();
    const products = await productList.addAllProductsToCart(qty);
    console.log(products);
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