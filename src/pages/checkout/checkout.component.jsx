import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect' 

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'

const checkoutpage = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {
                cartItems.map(cartItem=>
                (<CheckoutItem cartItem={cartItem} key={cartItem.id} />))
                }
                <div className="total">
                    <span>TOTAL: ${total}</span>
                </div>      
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotalPrice
})

export default connect(mapStatetoProps)(checkoutpage)