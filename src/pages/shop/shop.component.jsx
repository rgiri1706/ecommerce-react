import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import Category from '../category/category.component';

class ShopPage extends React.Component {

    render(){
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionPreview} />
                <Route path={`${match.path}/:categoryId`} component={Category} />
            </div>
        );
    }

}

export default ShopPage;