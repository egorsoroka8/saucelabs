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
    
}