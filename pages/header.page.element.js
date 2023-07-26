import { expect } from "@playwright/test"

class Header {
    constructor(page){
        this.page = page
    }

    header = '.header_label'
    burgerMenu = '#react-burger-menu-btn'
    allItemsButton = '#inventory_sidebar_link'
    aboutButton = '#about_sidebar_link'
    logoutButton = '#logout_sidebar_link'
    resetAppState = '#reset_sidebar_link'
    appLogo = '.app_logo'
    shoppingCartButton = '.shopping_cart_link'
    shoppingCartProductsQtyButton = '.shopping_cart_link'
}