import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selector';
import PreviewCollection from '../preview-collection/preview-collection.component';

import './collections-overview.styles.scss';

const CollectionPreview =({collections})=>(
    <div className='collections-overview'>
        {
            collections.map(collection => (
                <PreviewCollection key={collection.id} {...collection}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
})

export default connect(mapStateToProps)(CollectionPreview);