import { createSelector } from 'reselect';

const selectCart =state=> state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItem],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItem],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
);