
/***
 *  Memoization is an optimization technique used primarily to speed up programs 
 * by storing the results of expensive function calls and returning the
 *  """"cached"""" result when the same inputs occur again.
 */
import { createSelector } from 'reselect';

//input selecotr Function that get all state and return a slice of it
const selectCart = state => state.cart;

//createSelector takes two arg first an array (collection)
// sec is function return the val of this selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc,item) => acc + item.quantity,0)
)
