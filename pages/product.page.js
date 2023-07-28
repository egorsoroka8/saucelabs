import { expect } from "@playwright/test"

export class ProductPage {
    constructor(page){
        this.page = page
    }

    // Sub Header
    backToProductsButton = '#back-to-products'
    
    // Product
    productPage = '#inventory_item_container'
    productImage = '.inventory_details_img_container'
    productTitle = '.inventory_details_name.large_size'
    productDescription = '.inventory_details_desc.large_size'
    productPrice = '.inventory_details_price'
    addToCartButton = '.btn_primary'
    removeButton = '.btn_secondary.btn_small.btn_inventory'

    async pageIsLoaded() {
        await expect(await this.page.locator(this.productPage)).toBeVisible();
    }
    
    async checkThatProductHasAttributes() {
        await expect(await this.page.locator(this.productPrice)).toHaveText(/$/);
        await expect(await this.page.locator(this.productTitle)).toBeVisible();
        await expect(await this.page.locator(this.productDescription)).toBeVisible();
        await expect(await this.page.locator(this.productImage)).toBeEnabled();
    }
    async addProductButtonIsEnabled(){
        await expect(await this.page.locator(this.addToCartButton)).toBeEnabled();
    }
    async removeProductButtonIsEnabled(){
        await expect(await this.page.locator(this.removeButton)).toBeEnabled();
    }
    async addProductToCart(){
        await this.page.locator(this.addToCartButton).nth(0).click();
        await expect(await this.page.locator(this.removeButton).nth(0)).toBeEnabled();
    }
    async removeProductFromCart(){
        await this.page.locator(this.removeButton).nth(0).click();
        await expect(await this.page.locator(this.addToCartButton).nth(0)).toBeEnabled();
    }
    async returnToListPage(){
        await this.page.locator(this.backToProductsButton).nth(0).click();
    }
}