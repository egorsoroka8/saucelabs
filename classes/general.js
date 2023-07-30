class ProductAttributes {
    async countProducts() {
        return await this.page.locator(this.productItem).count();
    }
    async randomProduct() {
        const productQty = await this.countProducts();
        return Math.floor(Math.random() * productQty);
    }
    async getNameAndPrice(i) {
        const name = await this.page
            .locator(this.productTitle)
            .nth(i)
            .textContent();
        let price = await this.page
            .locator(this.productPrice)
            .nth(i)
            .textContent();
        price = price.replace('$', '');

        return {
            name: name,
            price: price,
        };
    }
    async getNameAndPriceAll(qty) {
        const productsArr = [];
        for (let i = 0; i < qty; i++) {
            const product = await this.getNameAndPrice(i);
            productsArr.push(product);
        }
        return productsArr;
    }
}

export default ProductAttributes;
