import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection_Item/CollectionItem';

import { selectCollection } from '../../Redux/shop/shop.selector';

import './CollectionPage.scss';

const CollectionPage = ({ match }) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
