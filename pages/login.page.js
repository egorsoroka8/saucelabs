import { expect } from "@playwright/test"

export class LoginPage {
    constructor(page){
        this.page = page
    }

    // Locators
    title = '.login_logo'
    usernameInputField = '[data-test=username]'
    passwordInputField = '[data-test=password]'
    loginButton = '[data-test=login-button]'
    errorMessage = 'h3[data-test="error"]'

    async fillUsernameInputField(firstname){
        await this.page.locator(this.usernameInputField).type(firstname)
    }
    async fillPasswordInputField(password){
        await this.page.locator(this.passwordInputField).type(password)
    }
    async submitAuthForm(){
        await this.page.click(this.loginButton)
    }
    async verifyErrorMessageIsDisplayed(errorText) {
        await expect(await this.page.locator(this.usernameInputField)).toBeVisible();
        await expect(await this.page.locator(this.errorMessage)).toHaveText(errorText);
    }
    async successLoginToAccount (firstname, password) {
        await this.page.locator(this.usernameInputField).type(firstname)
        await this.page.locator(this.passwordInputField).type(password)
        await this.page.click(this.loginButton)
    }
}