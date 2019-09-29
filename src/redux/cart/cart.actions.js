import { CartActionTypes } from './cart.types';

export const ToggleCart = () =>({
    type: CartActionTypes.ToggleCart,
})
export const addItem = (item) =>({
    type : CartActionTypes.ADD_ITEM,
    payload : item
})