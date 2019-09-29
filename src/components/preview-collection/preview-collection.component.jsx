import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'
import './preview-collection.styles.scss';

const PreviewCollection = ({title,items}) => (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((items,idx) => idx < 4)
                        .map((item)=><CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
)
export default PreviewCollection;