import { expect } from "@playwright/test"

export class ProductListPage {
    constructor(page){
        this.page = page
    }

    // Sub Header
    title = '.title'
    selector = '.product_sort_container'
    selectorOptionAZ = 'option[value="az"]'
    selectorOptionZA = 'option[value="za"]'
    selectorOptionLOHI = 'option[value="lohi"]'
    selectorOptionHILO = 'option[value="hilo"]'
    
    // Product
    productList = '.inventory_list'
    productItem = '.inventory_item' // nth()
    productImage = '.inventory_item_img' // nth()
    productTitle = '.inventory_item_name' // nth()
    productDescription = '.inventory_item_desc' // nth()
    productPrice = '.inventory_item_price' // nth()
    addToCartButton = `.btn_primary.btn_inventory`
    removeButton = `.btn_secondary.btn_inventory`
    
    async pageIsLoaded() {
        await expect(await this.page.locator(this.productList)).toBeVisible();
    }
    async checkEachProductHaveAttributes(i) {
        await expect(await this.page.locator(this.productItem).nth(i)).toBeVisible();
        await expect(await this.page.locator(this.productDescription).nth(i)).toBeVisible();
        await expect(await this.page.locator(this.productPrice).nth(i)).toHaveText(/$/);
        await expect(await this.page.locator(this.productImage).nth(i)).toBeEnabled();
        await expect(await this.page.locator(this.productTitle).nth(i)).toBeEnabled();
        await expect(await this.page.locator(this.addToCartButton).nth(i)).toBeEnabled();
    }
    async addProductToCart(){
        await this.page.locator(this.addToCartButton).nth(0).click();
        await expect(await this.page.locator(this.removeButton).nth(0)).toBeEnabled();
        return 1
    }
    async removeProductFromCart(){
        await this.page.locator(this.removeButton).nth(0).click();
        await expect(await this.page.locator(this.addToCartButton).nth(0)).toBeEnabled();
        return -1
    }
    async clickOnImage(){
        await this.page.locator(this.productImage).nth(0).click();
    }
    async clickOnTitle(){
        await this.page.locator(this.productTitle).nth(0).click();
    }
}
