import React from 'react'
import './collection-items.style.scss'

const CollectionItem = ({id, name, price , imageUrl}) => {
    return(
        <div className="collection-item">
            <div className='image'
            style = {{background: `url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
    )
};

export default CollectionItem