import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';

const Shop = ({match}) => {
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    );
}



export default Shop;