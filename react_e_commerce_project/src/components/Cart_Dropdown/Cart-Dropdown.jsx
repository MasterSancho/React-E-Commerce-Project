import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../Cart_Item/Cart-Item';
import { selectCartItems } from '../../Redux/cart/cart.selectors';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer,
} from './Cart-Dropdown.style';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageContainer>
                    Your cart is empty
                </EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CartDropdownButton
            onClick={() => {
                history.push('./checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
