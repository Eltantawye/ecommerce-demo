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
import './header.styles.scss';


const Header = ({currentUser,hidden,ToggleCart}) => (
    <div className='header'>
        <Link className="logo-continer" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>

            {currentUser ? 
            <div className="option" onClick={()=>auth.signOut()}>
                SIGN OUT
            </div>
            :
            <Link to="/signin" className="option">
                SIGN IN
            </Link>}
            <CartIcon />
        </div>
       {!hidden?<CartDropdown  /> : null}
    </div>
)
//createStructuredSelector will pass the top level state
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser ,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);