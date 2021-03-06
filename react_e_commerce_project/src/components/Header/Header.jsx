import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../Firebase/firebase.util';
import CartIcon from '../Cart_Icon/Cart-Icon';
import CartDropdown from '../Cart_Dropdown/Cart-Dropdown';
import { selectCartHidden } from '../../Redux/cart/cart.selectors';
import { selectCurrentUser } from '../../Redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/Crown.svg';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from './header.style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/'>HOME</OptionLink>
            <OptionLink to='/shop'>SHOP</OptionLink>
            {currentUser ? (
                <OptionLink
                    as='div'
                    className='option'
                    onClick={() => auth.signOut()}
                >
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
