import React from 'react';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ToggleCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './cart-icon.styles.scss';

const CartIcon = ({ToggleCart,itemCount}) => (
    <div className='cart-icon' onClick={ToggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' >{itemCount}</span>
    </div>
)

const mapStateToProps = (state) =>{
    console.log("GET CALLED AG")
    return{

        itemCount : selectCartItemsCount(state)
    }
}

const mapDispatchToProps = dispatch => ({
    ToggleCart : () => dispatch(ToggleCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)