import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import './header.styles.scss';

const Header = ({curruntUser}) => (
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

            {curruntUser ? 
            <div className="option" onClick={()=>auth.signOut()}>
                SIGN OUT
            </div>
            :
            <Link to="/signin" className="option">
                SIGN IN
            </Link>}
            
        </div>
    </div>
)

export default Header;