const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');
const { expect } = require('@playwright/test');

test.beforeEach(async ({ page, loginPage, productList }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(
        users.username.standart,
        users.password.valid
    );
    await productList.pageIsLoaded();
});

test('check that all products have attributes', async ({ productList }) => {
    const productQty = await productList.countProducts();
    await productList.checkEachProductHaveAttributes(productQty);
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
    test('check sorting selector', async ({
        productList,
    }) => {
        const sortingMethod = 'za';
        await productList.selectSortMethod(sortingMethod);
        const selectedOption = await productList.getSelectorOption();
        expect(sortingMethod).toBe(selectedOption)
    });

    test('checking that default products sorting method is AZ', async ({
        productList,
    }) => {
        const qty = await productList.countProducts();
        const products = await productList.getNameAndPriceAll(qty);
        const productsSortedManually = await productList.sortProducts(products);
        expect(products).toStrictEqual(productsSortedManually);
    });

    test('checking the sorting of products by name ASC (AZ)', async ({
        productList,
    }) => {
        await productList.checkSorting('az');
    });

    test('checking the sorting of products by name DESC (ZA)', async ({
        productList,
    }) => {
        await productList.checkSorting('za');
    });

    test('checking the sorting of products by price ASC (LOHI)', async ({
        productList,
    }) => {
        await productList.checkSorting('lohi');
    });

    test('checking the sorting of products by price DESC (HILO)', async ({
        productList,
    }) => {
        await productList.checkSorting('hilo');
    });
});





