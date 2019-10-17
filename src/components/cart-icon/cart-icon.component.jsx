import React from 'react';

import { ToggleCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import {CartIconContainer, ShoppingIconContiner, ItemCount} from './cart-icon.styled'

const CartIcon = ({ToggleCart,itemCount}) => (
    <CartIconContainer onClick={ToggleCart}>
        <ShoppingIconContiner/>
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
        itemCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    ToggleCart : () => dispatch(ToggleCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)