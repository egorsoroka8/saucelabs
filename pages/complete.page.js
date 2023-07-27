import { expect } from "@playwright/test"

export class CompletePage {
    constructor(page){
        this.page = page
    }

    // Sub Header
    title = '.title'
    
    // Message
    messageTitle = '.complete-header'
    messageDescription = '.complete-text'
    backHome = '#back-to-products'

    // Text
    titleText = 'Checkout: Complete!'
    messageTitleText = 'Thank you for your order!'
    messageDescription = 'Thank you for your order!'
    messageDescriptionText = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'

    async pageIsLoaded(){
        await expect(this.page.locator(this.title)).toHaveText(titleText);
        await expect(this.page.locator(this.messageTitle)).toHaveText(messageTitleText);
        await expect(this.page.locator(this.messageDescription)).toHaveText(messageDescriptionText);
        await expect(this.page.locator(this.backHome)).toBeEnabled();
    }
    async goToHome(){
        await this.page.locator(this.backHome).click();
    }
}