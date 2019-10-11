import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.collections
)

// collection overview page needs array instead of obj 
export const selectCollectionOverview = createSelector(
    [selectShopData], 
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionParam => createSelector(
    [selectShopData],
    collection => collection[collectionParam] 
)

