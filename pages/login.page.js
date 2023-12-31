import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    // Locators
    title = '.login_logo';
    usernameInputField = '[data-test=username]';
    passwordInputField = '[data-test=password]';
    loginButton = '[data-test=login-button]';
    errorMessage = 'h3[data-test="error"]';
    errorButton = '.error-button';

    async fillUsernameInputField(firstname) {
        await this.page.locator(this.usernameInputField).type(firstname);
        await expect(await this.page.locator(this.usernameInputField)).toHaveValue(firstname);
    }
    async fillPasswordInputField(password) {
        await this.page.locator(this.passwordInputField).type(password);
        await expect(await this.page.locator(this.passwordInputField)).toHaveValue(password);
    }
    async submitAuthForm() {
        await this.page.click(this.loginButton);
    }
    async verifyErrorMessageIsDisplayed(errorText) {
        await expect(await this.page.locator(this.errorMessage)).toHaveText(errorText);
    }
    async closeErrorMessage() {
        await this.page.locator(this.errorButton).click();
        await expect(await this.page.locator(this.errorMessage)).not.toBeVisible();
    }
    async successLoginToAccount(firstname, password) {
        await this.page.locator(this.usernameInputField).type(firstname);
        await this.page.locator(this.passwordInputField).type(password);
        await this.page.click(this.loginButton);
    }
}
