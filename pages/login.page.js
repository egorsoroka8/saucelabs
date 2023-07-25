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
    errorMessage = '.error-message-container.error'

    async fillUsernameInputField(firstname){
        await this.page.locator(this.usernameInputField).type(firstname)
    }

    async fillPasswordInputField(password){
        await this.page.locator(this.passwordInputField).type(password)
    }

    async submitAuthForm(){
        await this.page.click(this.loginButton)
    }
    async popupError(errorText) {
        expect(this.page.locator(this.errorMessage)).toBeVisible();
        expect(this.page.locator(this.errorMessage)).toHaveText(errorText);
    }
}

// Добавить локаторы ошибок