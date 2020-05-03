import React from 'react';

import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../redux/shop/shop.selectors'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'


const ShopPage = ({collections}) => {
        return (
            <div className='shop-name'>
                {
                    collections.map(({id, ...otherCollections} )=>  (
                        <CollectionPreview key={id} {...otherCollections} />
                    ))
               }
            </div>
        );
    }



const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);