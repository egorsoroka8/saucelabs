import { expect } from "@playwright/test"

export class CheckoutPage {
    constructor(page){
        this.page = page
    }

    // Sub Header
    title = '.title'
    
    // Checkout form
    firstName = '[data-test=firstName]'
    lastName = '[data-test=lastName]'
    postalCode = '[data-test=postalCode]'
    cancelButton = '[data-test=cancel]'
    continueButton = '[data-test=continue]'
    errorMessage = '[data-test="error"]'
    errorButton = '.error-button'

    async pageIsLoaded(){
        await expect(await this.page.locator(this.title)).toBeVisible();
        await expect(await this.page.locator(this.lastName)).toHaveValue('');
        await expect(await this.page.locator(this.firstName)).toHaveValue('');
        await expect(await this.page.locator(this.postalCode)).toHaveValue('');
        await expect(await this.page.locator(this.continueButton)).toBeEnabled();
        await expect(await this.page.locator(this.cancelButton)).toBeEnabled();
    }
    async returnToCart(){
        await this.page.locator(this.cancelButton).click();
    }
    async goToOverview(){
        await this.page.locator(this.continueButton).click();
    }
    async fillFirstNameInput(firstname){
        await this.page.locator(this.firstName).type(firstname);
        await expect(await this.page.locator(this.firstName)).toHaveValue(firstname);
    }
    async fillLastNameInput(lastname){
        await this.page.locator(this.lastName).type(lastname);
        await expect(await this.page.locator(this.lastName)).toHaveValue(lastname);
    }
    async fillPostalCodeInput(postalcode){
        await this.page.locator(this.postalCode).type(postalcode);
        await expect(await this.page.locator(this.postalCode)).toHaveValue(postalcode);
    }
    async verifyErrorMessageIsDisplayed(errorText) {
        await expect(await this.page.locator(this.errorMessage)).toHaveText(errorText);
    }
    async closeErrorMessage(){
        await this.page.locator(this.errorButton).click();
        await expect(await this.page.locator(this.errorMessage)).not.toBeVisible();
    }
    async successFillCheckoutForm(firstname, lastname, postalcode){
        await this.page.locator(this.firstName).type(firstname);
        await this.page.locator(this.lastName).type(lastname);
        await this.page.locator(this.postalCode).type(postalcode);
        await this.page.locator(this.continueButton).click();
    }
    async checkInputValues(firstname, lastname, postalcode){
        await expect(await this.page.locator(this.firstName)).toHaveValue(firstname);
        await expect(await this.page.locator(this.lastName)).toHaveValue(lastname);
        await expect(await this.page.locator(this.postalCode)).toHaveValue(postalcode);
    }
}