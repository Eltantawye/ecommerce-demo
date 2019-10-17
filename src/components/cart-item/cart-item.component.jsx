import React from 'react';
import {CartItemContainer ,
        ImageContainer ,
        ItemDetailsContainer } from './cart-items.styles'

const cartItems = ({item : {imageUrl, price, name, quantity}}) =>(
    <CartItemContainer>
        <ImageContainer  src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} * ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)


export default cartItems