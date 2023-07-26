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
    productItem = '.inventory_item' // nth()
    productImage = '.inventory_item_img' // nth()
    productTitle = '.inventory_item_name' // nth()
    productDescription = '.inventory_item_desc' // nth()
    productPrice = '.inventory_item_price' // nth()
    addToCartButton = `[data-test=add-to-cart-sauce-labs-${productName}]`
    removeButton = `[data-test=remove-sauce-labs-${productName}]`
    

    
}