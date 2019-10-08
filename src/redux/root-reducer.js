import { combineReducers } from 'redux';

///redux persist step 2
import { persistReducer } from 'redux-persist';
//local storage
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
//persist config
const persistConfig = {
    key: 'root',
    storage,
    //white list is for the reducer we want to presist
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)