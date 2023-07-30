import { expect } from '@playwright/test';

export class Footer {
    constructor(page) {
        this.page = page;
    }

    // Locators
    footer = '.footer';
    twitter = '.social_twitter';
    facebook = '.social_facebook';
    linkedIn = '.social_linkedin';
    copy = '.footer_copy';

    copyText = '© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy';

    async checkFooterFully() {
        await expect(this.page.locator(this.footer)).toBeVisible();
        await expect(this.page.locator(this.twitter)).toBeEnabled();
        await expect(this.page.locator(this.facebook)).toBeEnabled();
        await expect(this.page.locator(this.linkedIn)).toBeEnabled();
        await expect(this.page.locator(this.copy)).toHaveText(this.copyText);
    }
    async goToTwitter() {
        await this.page.locator(this.twitter).click();
    }
    async goToFacebook() {
        await this.page.locator(this.facebook).click();
    }
    async goToLinkedIn() {
        await this.page.locator(this.linkedIn).click();
    }
}
