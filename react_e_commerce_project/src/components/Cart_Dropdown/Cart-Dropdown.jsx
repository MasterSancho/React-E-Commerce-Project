import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../Custom_Button/Custom-Button';
import CartItem from '../Cart_Item/Cart-Item';
import { selectCartItems } from '../../Redux/cart/cart.selectors';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';

import './Cart-Dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton
            onClick={() => {
                history.push('./checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
