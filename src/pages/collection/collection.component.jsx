import React from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    return(
    <div>
        <h1>Category</h1>
        <CollectionPreview collections={collection} />
    </div>
)
    }

//we will leverage the second para , ownProps : is the component props

const mapStateToProps = (state, ownProps) => ({
    //createSelector function takes the state so we passed it.
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);