const { test } = require('../fixture/fixture');
const { users, checkout } = require('../test-data/user-data');
const { expect } = require('@playwright/test');

test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(
        users.username.standart,
        users.password.valid
    );
});

test.describe('counter value tests', () => {
    test('check that counter value equal to quantity of added products', async ({
        header,
        productList,
    }) => {
        const qty = await productList.countProducts();
        await productList.addAllProductsToCart(qty);
        await header.checkCounterQty(qty);
    });
    test('check that cart counter save value after logout -> login', async ({
        header,
        loginPage,
        productList,
    }) => {
        const qty = await productList.countProducts();
        await productList.addAllProductsToCart(qty);
        const counterValue = await header.getCounterQty();
        await header.logout();
        await loginPage.successLoginToAccount(
            users.username.standart,
            users.password.valid
            );
        await header.checkCounterQty(counterValue);
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
        const counterValue = await header.getCounterQty();
        await header.goToCart();
        await header.checkCounterQty(counterValue);
        await cartPage.goToCheckout();
        await header.checkCounterQty(counterValue);
        await checkoutPage.successFillCheckoutForm(
            checkout.firstname,
            checkout.lastname,
            checkout.postalCode
        );
        await header.checkCounterQty(counterValue);
        await overviewPage.pageIsLoaded();
    });
});

test('check that added to cart products stay added after logout -> login', async ({
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
    const productsInCart = await cartPage.getNameAndPriceAll(qty);
    expect(productsInList).toStrictEqual(productsInCart);
    await cartPage.goToCheckout();
    await checkoutPage.successFillCheckoutForm(
        checkout.firstname,
        checkout.lastname,
        checkout.postalCode
    );
    const productsInOverview = await overviewPage.getNameAndPriceAll(qty);
    expect(productsInList).toStrictEqual(productsInOverview);
});

test('check that all prices on overview page counted properly', async ({
    header,
    cartPage,
    productList,
    checkoutPage,
    overviewPage,
}) => {
    const qty = await productList.countProducts();
    await productList.addAllProductsToCart(qty);
    await header.goToCart();
    await cartPage.goToCheckout();
    await checkoutPage.successFillCheckoutForm(
        checkout.firstname,
        checkout.lastname,
        checkout.postalCode
    );
    const priceOnPage = await overviewPage.getProductsPrice();
    const countedPrices = await overviewPage.countProductsPrice(qty);
    expect(countedPrices).toStrictEqual(priceOnPage);
});
