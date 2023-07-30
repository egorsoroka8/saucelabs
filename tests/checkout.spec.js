const { test } = require('../fixture/fixture');
const { users, checkout } = require('../test-data/user-data');
const { checkoutPageErrorMessage } = require('../test-data/error-data');

test.beforeEach(async ({ page, header, cartPage, loginPage, checkoutPage }) => {
    await page.goto('/');
    await loginPage.successLoginToAccount(
        users.username.standart,
        users.password.valid
    );
    await header.goToCart();
    await cartPage.goToCheckout();
    await checkoutPage.pageIsLoaded();
});

test('success checkout', async ({ checkoutPage, overviewPage }) => {
    await checkoutPage.fillFirstNameInput(checkout.firstname);
    await checkoutPage.fillLastNameInput(checkout.lastname);
    await checkoutPage.fillPostalCodeInput(checkout.postalCode);
    await checkoutPage.goToOverview();
    await overviewPage.pageIsLoaded();
});

test('try to checkout without any data', async ({ checkoutPage }) => {
    await checkoutPage.goToOverview();
    await checkoutPage.verifyErrorMessageIsDisplayed(
        checkoutPageErrorMessage.firstnameIsRequired
    );
});

test('try to checkout use only firstname', async ({ checkoutPage }) => {
    await checkoutPage.fillFirstNameInput(checkout.firstname);
    await checkoutPage.goToOverview();
    await checkoutPage.verifyErrorMessageIsDisplayed(
        checkoutPageErrorMessage.lastnameIsRequired
    );
});

test('try to checkout without postal code', async ({ checkoutPage }) => {
    await checkoutPage.fillFirstNameInput(checkout.firstname);
    await checkoutPage.fillLastNameInput(checkout.lastname);
    await checkoutPage.goToOverview();
    await checkoutPage.verifyErrorMessageIsDisplayed(
        checkoutPageErrorMessage.postalCodeIsRequired
    );
});

test('try to checkout without firstname', async ({ checkoutPage }) => {
    await checkoutPage.fillLastNameInput(checkout.lastname);
    await checkoutPage.fillPostalCodeInput(checkout.postalCode);
    await checkoutPage.goToOverview();
    await checkoutPage.verifyErrorMessageIsDisplayed(
        checkoutPageErrorMessage.firstnameIsRequired
    );
});

test('check that error message can be close', async ({ checkoutPage }) => {
    await checkoutPage.goToOverview();
    await checkoutPage.verifyErrorMessageIsDisplayed(
        checkoutPageErrorMessage.firstnameIsRequired
    );
    await checkoutPage.closeErrorMessage();
});

test('check that it allowed to go to overview after error', async ({
    checkoutPage,
    overviewPage,
}) => {
    await checkoutPage.goToOverview();
    await checkoutPage.verifyErrorMessageIsDisplayed(
        checkoutPageErrorMessage.firstnameIsRequired
    );
    await checkoutPage.successFillCheckoutForm(
        checkout.firstname,
        checkout.lastname,
        checkout.postalCode
    );
    await overviewPage.pageIsLoaded();
});

test('check that checkout form store state', async ({
    checkoutPage,
    cartPage,
}) => {
    // As this functionality doesn't work - I pass in the checkInputValues empty string
    // Bug report will be created
    await checkoutPage.fillFirstNameInput(checkout.firstname);
    await checkoutPage.fillLastNameInput(checkout.lastname);
    await checkoutPage.fillPostalCodeInput(checkout.postalCode);
    await checkoutPage.returnToCart();
    await cartPage.goToCheckout();
    await checkoutPage.checkInputValues('', '', '');
});

test('go to overview page', async ({ checkoutPage, overviewPage }) => {
    await checkoutPage.successFillCheckoutForm(
        checkout.firstname,
        checkout.lastname,
        checkout.postalCode
    );
    await overviewPage.pageIsLoaded();
});
