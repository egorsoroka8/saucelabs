import { expect } from "@playwright/test"

export class OverviewPage {
    constructor(page){
        this.page = page
    }

    // Sub Header
    title = '.title'
    
    // General
    checkoutSummary = '#checkout_summary_container'
    cartQTY = '.cart_quantity_label'
    cartDescription = '.cart_desc_label'
    cancelButton = '[data-test=cancel]'
    finishButton = '[data-test=finish]'
    
    // Product
    cartItem = '.cart_item' // nth()
    productTitle = '.inventory_item_name' // nth()
    productDescription = '.inventory_item_desc' // nth()
    productPrice = '.inventory_item_price' // nth()
    productQTY = '.cart_quantity' // nth()

    // Summary Info
    paymentInfo = '.summary_info_label' // nth(0)
    shippingInfo = '.summary_info_label' // nth(1)
    priceTotal = '.summary_info_label' // nth(2)
    paymentValue = '.summary_value_label' // nth(0)
    shippingValue = '.summary_value_label' // nth(1)
    itemPrice = '.summary_subtotal_label'
    taxPrice = '.summary_tax_label'
    totalPrice = '.summary_info_label.summary_total_label'
    
    async pageIsLoaded(){
        await expect(await this.page.locator(this.title)).toBeVisible();
        await expect(await this.page.locator(this.cartQTY)).toBeVisible();
        await expect(await this.page.locator(this.checkoutSummary)).toBeVisible();
        await expect(await this.page.locator(this.cartDescription)).toBeVisible();
        await expect(await this.page.locator(this.cancelButton)).toBeEnabled();
        await expect(await this.page.locator(this.finishButton)).toBeEnabled();

        await expect(await this.page.locator(this.shippingInfo).nth(1)).toHaveText('Shipping Information');
        await expect(await this.page.locator(this.paymentInfo).nth(0)).toHaveText('Payment Information');
        await expect(await this.page.locator(this.priceTotal).nth(2)).toHaveText('Price Total');
        await expect(await this.page.locator(this.itemPrice)).toHaveText(/Item total: \$/);
        await expect(await this.page.locator(this.totalPrice)).toHaveText(/Total: \$/);
        await expect(await this.page.locator(this.taxPrice)).toHaveText(/Tax: \$/);
    }
    async checkThatProductHasAllAttributes(){
        await expect(await this.page.locator(this.productTitle).nth(0)).toBeEnabled();
        await expect(await this.page.locator(this.productDescription).nth(0)).toBeVisible();
        await expect(await this.page.locator(this.productPrice).nth(0)).toContainText(/$/);
        await expect(await this.page.locator(this.productQTY).nth(0)).toHaveText('1');
    }
    async returnToCheckoutPage(){
        await this.page.locator(this.cancelButton).click();
    }
    async goToCompletePage(){
        await this.page.locator(this.finishButton).click();
    }
    async goToProductPage(){
        await this.page.locator(this.productTitle).nth(0).click();
    }
    async checkPaymentCard(card){
        await expect(await this.page.locator(this.paymentValue)).toHaveText(card);
    }
    async checkShippingCompany(company){
        await expect(await this.page.locator(this.shippingValue)).toHaveText(company);
    }
    async checkProductsTotalPriceWithoutTax(){

    }
    async checkTaxPrice(){
        
    }
    async checkTotalPrice(){
        
    }
    async countProducts(){
        return await this.page.locator(this.productItem).count();
    }
    async randomProduct(){
        const productQty = await this.countProducts();
        return Math.floor(Math.random() * productQty);
    }
}

