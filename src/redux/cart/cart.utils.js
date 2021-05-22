export const addItemToCart = (cartItems, cartItemstoAdd) => {
    const existingCart = cartItems.find(
        cartItem=> cartItem.id === cartItemstoAdd.id
    );

    if(existingCart){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemstoAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, {...cartItemstoAdd, quantity: 1}];
}

export const removeItem = ( cartItems, toRemoveItem) => {
    const existingCart = cartItems.find(
        cartItem=> cartItem.id === toRemoveItem.id
    );

    if(existingCart.quantity === 1){
        return cartItems.filter(item=> item.id !== toRemoveItem.id)
    }

    return cartItems.map(item=> item.id === toRemoveItem.id ? { ...item, quantity: item.quantity -1}: item)
};