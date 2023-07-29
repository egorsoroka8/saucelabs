const base = require('@playwright/test');
const { ProductListPage } = require('../pages/productsList.page');
const { CheckoutPage } = require('../pages/checkout.page');
const { OverviewPage } = require('../pages/overview.page');
const { CompletePage } = require('../pages/complete.page');
const { ProductPage } = require('../pages/product.page');
const { LoginPage } = require('../pages/login.page');
const { CartPage } = require('../pages/cart.page');
const { Header } = require('../pages/header.page.element');
const { Footer } = require('../pages/footer.page.element');


exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    completePage: async ({ page }, use) => {
        await use(new CompletePage(page));
    },
    overviewPage: async ({ page }, use) => {
        await use(new OverviewPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    productList: async ({ page }, use) => {
        await use(new ProductListPage(page));
    },
    header: async ({ page }, use) => {
        await use(new Header(page));
    },
    footer: async ({ page }, use) => {
        await use(new Footer(page))
    }
});

exports.expect = base.expect;





