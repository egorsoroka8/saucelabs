import { expect } from '@playwright/test';

export class ProductListPage {
    constructor(page) {
        this.page = page;
    }

    // Sub Header
    title = '.title';
    selector = '.product_sort_container';
    selectorOptionAZ = 'option[value="az"]';
    selectorOptionZA = '//option[@value="za"]';
    selectorOptionLOHI = 'option[value="lohi"]';
    selectorOptionHILO = 'option[value="hilo"]';

    // Product
    productList = '.inventory_list';
    productItem = '.inventory_item'; // nth()
    productImage = '.inventory_item_img'; // nth()
    productTitle = '.inventory_item_name'; // nth()
    productDescription = '.inventory_item_desc'; // nth()
    productPrice = '.inventory_item_price'; // nth()
    addToCartButton = `.btn_primary.btn_inventory`;
    removeButton = `.btn_secondary.btn_inventory`;

    async pageIsLoaded() {
        await expect(await this.page.locator(this.productList)).toBeVisible();
        await expect(await this.page.locator(this.selector)).toBeEnabled();
        await expect(await this.page.locator(this.title)).toHaveText(
            'Products'
        );
    }
    async checkEachProductHaveAttributes(i) {
        await expect(
            await this.page.locator(this.productItem).nth(i)
        ).toBeVisible();
        await expect(
            await this.page.locator(this.productDescription).nth(i)
        ).toBeVisible();
        await expect(
            await this.page.locator(this.productPrice).nth(i)
        ).toHaveText(/$/);
        await expect(
            await this.page.locator(this.productImage).nth(i)
        ).toBeEnabled();
        await expect(
            await this.page.locator(this.productTitle).nth(i)
        ).toBeEnabled();
        await expect(
            await this.page.locator(this.addToCartButton).nth(i)
        ).toBeEnabled();
    }
    async addProductToCart(i) {
        await this.page.locator(this.addToCartButton).nth(i).click();
        await expect(
            await this.page.locator(this.removeButton).nth(0)
        ).toBeEnabled();
    }
    async removeProductFromCart() {
        await this.page.locator(this.removeButton).nth(0).click();
        await expect(
            await this.page.locator(this.addToCartButton).nth(0)
        ).toBeEnabled();
    }
    async clickOnImage() {
        await this.page.locator(this.productImage).nth(0).click();
    }
    async clickOnTitle() {
        await this.page.locator(this.productTitle).nth(0).click();
    }
    async countProducts() {
        return await this.page.locator(this.productItem).count();
    }
    async randomProduct() {
        const productQty = await this.countProducts();
        return Math.floor(Math.random() * productQty);
    }
    async selectSortMethod(option) {
        option = option.toLowerCase();
        await this.page.locator(this.selector).selectOption(option);
    }
    async getProductNameAndPrice(productsQty) {
        const productsArr = [];
        for (let i = 0; i < productsQty; i++) {
            const name = await this.page
                .locator(this.productTitle)
                .nth(i)
                .textContent();
            let price = await this.page
                .locator(this.productPrice)
                .nth(i)
                .textContent();
            price = price.replace('$', '');
            productsArr.push({
                name: name,
                price: price,
            });
        }
        return productsArr;
    }
    async sortProductsByPriceLOHI(products){
        return products.sort((a, b) => a.price - b.price);
    }
    async sortProductsByPriceHILO(products){
        return products.sort((a, b) => b.price - a.price);
    }
    async checkProductsSorting(sortedManually, sortedBySelector){
        expect(JSON.stringify(sortedManually)).toBe(JSON.stringify(sortedBySelector));
    }
}
