import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles'


const Header = ({currentUser,hidden,ToggleCart}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop" >
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>

            {currentUser ? 
            <OptionLink as='div' onClick={()=>auth.signOut()}>
                SIGN OUT
            </OptionLink>
            :
            <OptionLink to="/signin">
                SIGN IN
            </OptionLink>}
            <CartIcon />
        </OptionsContainer>
       {!hidden?<CartDropdown  /> : null}
    </HeaderContainer>
)
//createStructuredSelector will pass the top level state
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser ,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);