import React from 'react';

import {
    CartItemContainer,
    ImgContainer,
    ItemDetailsContainer,
} from './Cart-Item.style';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ImgContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x {price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
