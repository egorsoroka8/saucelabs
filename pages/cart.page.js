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
    removeButton = `[data-test=remove-sauce-labs-${productName}]`
    
}