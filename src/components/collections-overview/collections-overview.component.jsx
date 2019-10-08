import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/preview-collection.component';
import { selectShopData } from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
         {
                collections.map(({id,...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
         }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})

export default connect(mapStateToProps)(CollectionsOverview);