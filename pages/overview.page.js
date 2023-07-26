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

    // Summary Info
    paymentInfo = '.summary_info_label' // nth(0)
    shippingInfo = '.summary_info_label' // nth(1)
    priceTotal = '.summary_info_label' // nth(2)
    paymentValue = '.summary_value_label' // nth(0)
    shippingValue = '.summary_value_label' // nth(1)
    itemPrice = '.summary_subtotal_label'
    taxPrice = '.summary_tax_label'
    totalPrice = '.summary_info_label summary_total_label'
    

}