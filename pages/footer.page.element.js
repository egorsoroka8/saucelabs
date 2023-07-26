import { expect } from "@playwright/test"

export class Footer {
    constructor(page){
        this.page = page
    }

    footer = '.footer'
    twitter = '.social_twitter'
    facebook = '.social_facebook'
    linkedIn = '.social_linkedin'
    copy = '.footer_copy'
}