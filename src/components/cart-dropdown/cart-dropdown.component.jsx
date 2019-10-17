import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { ToggleCart } from '../../redux/cart/cart.actions'

import {CartDropdownContainer, 
        CartItemsContainer, 
        EmptyMessageContainer,
        CustomButtonContainer } from './cart-dropdown.styles'
        
// dispatch passed to props by default from connect 
const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ?
                cartItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))
                :
                <EmptyMessageContainer>
                    Your Cart is empty
                </EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CustomButtonContainer onClick={()=>{
            history.push('/checkout');
            dispatch(ToggleCart());
            }} > CHECKOUT </CustomButtonContainer>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));

