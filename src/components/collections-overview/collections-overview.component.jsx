import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/preview-collection.component';
import { selectCollectionOverview } from '../../redux/shop/shop.selector';
import { CollectionsOverviewContainer } from './collections-overview.styles'

const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
         {
                collections.map(({id,...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
         }
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionOverview
})

export default connect(mapStateToProps)(CollectionsOverview);