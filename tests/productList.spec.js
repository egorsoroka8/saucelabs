const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');

test.beforeEach(async ({ page, loginPage, productList }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(
        users.username.standart,
        users.password.valid
    );
    await productList.pageIsLoaded();
});

test('check that all products have attributes', async ({ productList }) => {
    const qty = await productList.countProducts();
    for (let i = 0; i < qty; i++) {
        await productList.checkEachProductHaveAttributes(i);
    }
});

test('open product page by click on image', async ({
    productList,
    productPage,
}) => {
    await productList.clickOnImage();
    await productPage.pageIsLoaded();
});

test('open product page by click on title', async ({
    productList,
    productPage,
}) => {
    await productList.clickOnTitle();
    await productPage.pageIsLoaded();
});

test.describe('sorting tests', () => {
    test('checking that default products sorting method is AZ', async ({
        productList,
    }) => {
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = await productList.sortProductsByName(
            products,
            'az'
        );
        await productList.checkProductsSorting(
            products,
            productsSortedManually
        );
    });

    test('checking the sorting of products by name ASC (AZ)', async ({
        productList,
    }) => {
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = await productList.sortProductsByName(
            products,
            'az'
        );
        await productList.selectSortMethod('az');
        const productsSortedBySelector =
            await productList.getProductNameAndPrice(qty);
        await productList.checkProductsSorting(
            productsSortedManually,
            productsSortedBySelector
        );
    });

    test('checking the sorting of products by name DESC ()', async ({
        productList,
    }) => {
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = 
            await productList.sortProductsByName(products,'za');
        await productList.selectSortMethod('za');
        const productsSortedBySelector =
            await productList.getProductNameAndPrice(qty);
        await productList.checkProductsSorting(
            productsSortedManually,
            productsSortedBySelector
        );
    });

    test('checking the sorting of products by price ASC (LOHI)', async ({
        productList,
    }) => {
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = await productList.sortProductsByPrice(
            products,
            'lohi'
        );
        await productList.selectSortMethod('lohi');
        const productsSortedBySelector =
            await productList.getProductNameAndPrice(qty);
        await productList.checkProductsSorting(
            productsSortedManually,
            productsSortedBySelector
        );
    });

    test('checking the sorting of products by price DESC (HILO)', async ({
        productList,
    }) => {
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = 
            await productList.sortProductsByPrice(products,'hilo');
        await productList.selectSortMethod('hilo');
        const productsSortedBySelector =
            await productList.getProductNameAndPrice(qty);
        await productList.checkProductsSorting(
            productsSortedManually,
            productsSortedBySelector
        );
    });
});
