const { test } = require('../fixture/fixture');
const { users } = require('../test-data/user-data');

test.beforeEach(async ({ page, loginPage, productList }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(users.username.standart, users.password.valid);
    await productList.pageIsLoaded();
});

test('check that all products have attributes', async ({ productList }) => {
    const qty = await productList.countProducts();
    for(let i = 0; i < qty; i++){
        await productList.checkEachProductHaveAttributes(i);
    }
});

test('open product page by click on image', async ({ productList, productPage }) => {
    await productList.clickOnImage();
    await productPage.pageIsLoaded();
});

test('open product page by click on title', async ({ productList, productPage }) => {
    await productList.clickOnTitle();
    await productPage.pageIsLoaded();
});

test('sort products by price hilo', async ({ productList }) => {
    await productList.sortProductList('hilo');
});

test('sort products by price liho', async ({ productList }) => {
    await productList.sortProductList('lohi');
});

test('sort products by name az', async ({ productList }) => {
    await productList.sortProductList('az');
});

test('sort products by name za', async ({ productList }) => {
    await productList.sortProductList('za');
});




test.only('test', async ({ productList }) => {
    const qty = await productList.countProducts();
    const arr = [];
    for(let i = 0; i < qty; i++){
        const product = await productList.getProductSequanceAndNameAndPrice(i);
        arr.push(product);
    }
    console.log(arr)
});