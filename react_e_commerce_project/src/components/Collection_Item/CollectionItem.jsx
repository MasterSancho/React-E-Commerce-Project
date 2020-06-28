import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../Redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CustomButtonContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameSpanContainer,
    PriceSpanContainer,
} from './CollectionItem.style';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <ImageContainer className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameSpanContainer>{name}</NameSpanContainer>
                <PriceSpanContainer>{price}</PriceSpanContainer>
            </CollectionFooterContainer>
            <CustomButtonContainer onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButtonContainer>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
