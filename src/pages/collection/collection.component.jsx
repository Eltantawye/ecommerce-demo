import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles';
  
const CollectionPage = ({collection}) => {
    const {title, items} = collection;

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
    }

//we will leverage the second para , ownProps : is the component props
const mapStateToProps = (state, ownProps) => ({
    //createSelector function takes the state so we passed it.
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);