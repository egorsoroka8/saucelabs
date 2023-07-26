import { expect } from "@playwright/test"

export class ProductPage {
    constructor(page){
        this.page = page
    }

    // Sub Header
    backToProductsButton = '[data-test=back-to-products]'
    
    // Product
    productPage = '#inventory_item_container'
    productImage = '.inventory_details_img_container'
    productTitle = '.inventory_details_name large_size'
    productDescription = '.inventory_details_desc.large_size'
    productPrice = '.inventory_details_price'
    addToCartButton = `[data-test=add-to-cart-sauce-labs-${productName}]`
    removeButton = `[data-test=remove-sauce-labs-${productName}]`

    
}