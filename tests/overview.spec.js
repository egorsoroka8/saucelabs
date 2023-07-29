/*
    проверить удаление товара из чекаут
        1. добавить товары
        2. дойти до чекаут
        3. зайти на карточку товара
        4. удалить товар
        5. перейти на страницу чекаут (через ссылку)
        6. проверить что товар удален
*/

const { test } = require('../fixture/fixture');
const { users, checkout } = require('../test-data/user-data');
const { shippingData } = require('../test-data/summary-data');

test.beforeEach(
    async ({
        page,
        header,
        cartPage,
        loginPage,
        productList,
        checkoutPage,
        overviewPage,
    }) => {
        await page.goto('/');
        await loginPage.successLoginToAccount(
            users.username.standart,
            users.password.valid
        );
        await productList.addProductToCart();
        await header.goToCart();
        await cartPage.goToCheckout();
        await checkoutPage.successFillCheckoutForm(
            checkout.firstname,
            checkout.lastname,
            checkout.postalCode
        );
        await overviewPage.pageIsLoaded();
    }
);

test('check that it is possible to return to product list page', async ({
    productList,
    overviewPage,
}) => {
    await overviewPage.returnToCheckoutPage();
    await productList.pageIsLoaded();
});

test('check that it is possible to go to complete page', async ({
    overviewPage,
    completePage,
}) => {
    await overviewPage.goToCompletePage();
    await completePage.pageIsLoaded();
});

test('check that payment and shipping info are displayed', async ({
    overviewPage,
}) => {
    await overviewPage.checkPaymentCard(shippingData.card);
    await overviewPage.checkShippingCompany(shippingData.company);
});

test('open product page from overview page', async ({
    overviewPage,
    productPage,
}) => {
    await overviewPage.goToProductPage();
    await productPage.pageIsLoaded();
});
