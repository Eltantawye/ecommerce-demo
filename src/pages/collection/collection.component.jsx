import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    console.log("COLLECCCE",collection);
    const {title, items} = collection;

    return(
    <div className='collection-page'>
        <h1 className='title'>{title}</h1>
        <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>  
    )
    }

//we will leverage the second para , ownProps : is the component props
const mapStateToProps = (state, ownProps) => ({
    //createSelector function takes the state so we passed it.
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);