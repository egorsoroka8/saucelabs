test('check cart counter', async ({ productList, header }) => {
    let cartCounter = 0;
    cartCounter += await productList.addProductToCart();
    await header.checkCounterQty(String(cartCounter));
    cartCounter += await productList.removeProductFromCart();
    await header.checkCounterQty('');
});