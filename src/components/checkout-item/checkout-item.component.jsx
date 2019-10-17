import React from 'react';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux'
import cartItems from '../cart-item/cart-item.component';

import {CheckoutItemContainer ,
        ImageContainer ,
        QuantityContainer ,
        TextContainer ,
        RemoveItemButton } from './checkout-item.styles'

const CheckoutItem = ({cartItem ,clearItem, addItem, removeItem}) => {
    const  {name, imageUrl, quantity,price} = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={()=>removeItem(cartItem)}>&#10094;</div>
            <span> {quantity} </span>
            <div onClick={()=> addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveItemButton onClick={()=>clearItem(cartItem)}> &#10006;</RemoveItemButton>
    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem :(item)=> dispatch(clearItemFromCart(item)),
    addItem : (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);