import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../Firebase/firebase.util';
import CartIcon from '../Cart-icon/Cart-Icon';

import { ReactComponent as Logo } from '../../assets/Crown.svg';

import './Header.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
