import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { ToggleCart } from '../../redux/cart/cart.actions'
import './cart-dropdown.styles.scss';
// dispatch passed to props by default from connect 
const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))
                :
                <span className="empty-message">
                    Your Cart is empty
                </span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(ToggleCart());
            }} > CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));

