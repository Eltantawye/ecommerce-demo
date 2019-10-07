export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItme = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    if(existingCartItme) {
        return cartItems.map(cartItem => 
           cartItem.id === cartItemToAdd.id ?
           {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
           )
    }
    //called for the first time adding a cart item
    return [...cartItems,{...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart =(cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

export const decreaseItemQuantity = (cartItems, cartItemToRemove) => {
    if(cartItemToRemove.quantity > 1)
       { return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
            )}
    else {
         return removeItemFromCart(cartItems, cartItemToRemove)
        }
}


