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