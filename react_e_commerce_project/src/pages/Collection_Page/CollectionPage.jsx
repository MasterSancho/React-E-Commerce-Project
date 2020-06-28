import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection_Item/CollectionItem';

import { selectCollection } from '../../Redux/shop/shop.selector';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer,
} from './CollectionPage.style';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
