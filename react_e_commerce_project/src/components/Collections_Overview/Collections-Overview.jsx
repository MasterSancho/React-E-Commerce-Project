import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import  Collection  from '../Collection/Collection';

import { selectCollections } from '../../Redux/shop/shop.selector';

import './Collections-Overview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <Collection key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
