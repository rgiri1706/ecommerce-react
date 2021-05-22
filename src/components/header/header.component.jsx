import React from 'react';

import './header.styles.scss';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import Cart from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>SIGNOUT</div>
                :
                <Link className='option' to='/signin'>SIGNIN</Link>
            }
             <CartIcon />
        </div>
        {hidden ? '' : <Cart />}
    </div>
)


const mapStateToProps= (state) =>({
    currentUser: selectCurrentUser(state),
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
