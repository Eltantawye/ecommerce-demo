import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';

const CollectionItem = ({item,addItem}) => {
    const {id,name,price,imageUrl} = item
    return(
    <CollectionItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <PriceContainer>{name}</PriceContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton inverted onClick={()=>addItem(item)}>Add to cart</AddButton>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);
