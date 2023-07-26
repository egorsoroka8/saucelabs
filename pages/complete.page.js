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
}