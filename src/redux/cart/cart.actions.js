export const toggleCartDropdown=()=>({
        type: 'TOGGLE_CART_HIDDEN'
});

export const addItem=item=>({
        type: 'ADD_ITEM',
        payload: item
});

export const removeItem=item=>({
         type: 'REMOVE_ITEM',
         payload: item
})

export const deleteItem = item => ({
        type: 'DELETE_ITEM',
        payload: item
})