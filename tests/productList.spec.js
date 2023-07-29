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
        const productsSortedManually = await productList.sortProducts(products);
        await productList.checkProductsSorting(
            products,
            productsSortedManually
        );
    });

    test('checking the sorting of products by name ASC (AZ)', async ({
        productList,
    }) => {
        const sortingMethod = 'az';
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = await productList.sortProducts(
            products,
            sortingMethod
        );
        await productList.selectSortMethod(sortingMethod);
        const productsSortedBySelector =
            await productList.getProductNameAndPrice(qty);
        await productList.checkProductsSorting(
            productsSortedManually,
            productsSortedBySelector
        );
    });

    test('checking the sorting of products by name DESC (ZA)', async ({
        productList,
    }) => {
        const sortingMethod = 'za';
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = await productList.sortProducts(
            products,
            sortingMethod
        );
        await productList.selectSortMethod(sortingMethod);
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
        const sortingMethod = 'lohi'
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = await productList.sortProducts(
            products,
            sortingMethod
        );
        await productList.selectSortMethod(sortingMethod);
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
        const sortingMethod = 'hilo'
        const qty = await productList.countProducts();
        const products = await productList.getProductNameAndPrice(qty);
        const productsSortedManually = 
            await productList.sortProducts(
                products,
                sortingMethod
            );
        await productList.selectSortMethod(sortingMethod);
        const productsSortedBySelector =
            await productList.getProductNameAndPrice(qty);
        await productList.checkProductsSorting(
            productsSortedManually,
            productsSortedBySelector
        );
    });
});