import { expect } from '@playwright/test';

export class Header {
    constructor(page) {
        this.page = page;
    }

    header = '.header_label';
    burgerMenu = '#react-burger-menu-btn';
    sidebar = '.bm-menu';
    closeSideBarButton = '#react-burger-cross-btn';
    allItemsButton = '#inventory_sidebar_link';
    aboutButton = '#about_sidebar_link';
    logoutButton = '#logout_sidebar_link';
    resetAppState = '#reset_sidebar_link';
    appLogo = '.app_logo';
    shoppingCartButton = '.shopping_cart_link';
    shoppingCartProductsQtyButton = '.shopping_cart_link';

    async goToCart() {
        await this.page.locator(this.shoppingCartButton).click();
    }
    async checkCounterQty(cartCounter) {
        await expect(await this.page.locator(this.shoppingCartProductsQtyButton)).toHaveText(String(cartCounter));
    }
    async openSidebar() {
        await this.page.locator(this.burgerMenu).click();
        await expect(await this.page.locator(this.sidebar)).toBeVisible();
    }
    async closeSidebar() {
        await this.page.locator(this.closeSideBarButton).click();
    }
    async logout() {
        await this.openSidebar();
        await this.page.locator(this.logoutButton).click();
    }
    async resetState() {
        await this.page.locator(this.resetAppState).click();
    }
}
