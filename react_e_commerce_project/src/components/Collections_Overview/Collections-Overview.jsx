import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../Collection_Preview/Collection-Preview';

import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector';

import { CollectionsOverviewContainer } from './Collections-Overview.style';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
