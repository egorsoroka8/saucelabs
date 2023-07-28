import { expect } from "@playwright/test"

export class CartPage {
    constructor(page){
        this.page = page
    }

    // Sub Header
    title = '.title'
    
    // General
    cartList = '.cart_list'
    infoQTY = '.cart_quantity_label'
    infoDescription = '.cart_desc_label'
    continueShoppingButton = '[data-test=continue-shopping]'
    checkoutButton = '[data-test=checkout]'
    
    // Product
    cartItem = '.cart_item' // nth()
    productQuantity = '.cart_quantity' // nth()
    productTitle = '.inventory_item_name' // nth()
    productDescription = '.inventory_item_desc' // nth()
    productPrice = '.inventory_item_price' // nth()
    removeButton = `.cart_button` // nth()

    async pageIsLoaded(){
        await expect(await this.page.locator(this.title)).toBeVisible();
        await expect(await this.page.locator(this.infoQTY)).toBeVisible();
        await expect(await this.page.locator(this.cartList)).toBeVisible();
        await expect(await this.page.locator(this.infoDescription)).toBeVisible();
        await expect(await this.page.locator(this.continueShoppingButton)).toBeEnabled();
        await expect(await this.page.locator(this.checkoutButton)).toBeEnabled();
    }
    async checkThatProductHasAttributes(){
        await expect(await this.page.locator(this.cartItem).nth(0)).toBeVisible();
        await expect(await this.page.locator(this.productPrice).nth(0)).toHaveText(/$/);
        await expect(await this.page.locator(this.productQuantity).nth(0)).toHaveText('1');
        await expect(await this.page.locator(this.productTitle).nth(0)).toHaveText(/Sauce Labs/);
        await expect(await this.page.locator(this.productDescription).nth(0)).toBeVisible();
        await expect(await this.page.locator(this.removeButton).nth(0)).toBeEnabled();
    }
    async removeProductFromCart(){
        await this.page.locator(this.removeButton).nth(0).click();
        await expect(await this.page.locator(this.cartItem).nth(0)).not.toBeVisible();
    }
    async returnToShoppingList(){
        await this.page.locator(this.continueShoppingButton).click();
    }
    async goToCheckout(){
        await this.page.locator(this.checkoutButton).click();
    }
    async countAllProductsInCart(){
        const count = await page.locator(this.cartList).count();
        console.log(count)
    }
    async goToProductPage(){
        await this.page.locator(this.productTitle).click();
    }
    async countProducts(){
        return await this.page.locator(this.productItem).count();
    }
    async randomProduct(){
        const productQty = await this.countProducts();
        return Math.floor(Math.random() * productQty);
    }
}