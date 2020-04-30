import React from 'react';
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from  '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, totalItems }) => (
    <div className="cart-icon" onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
<span className="item-count">{totalItems}</span>
    </div>
)

const mapStateToProps = state => ({
    totalItems: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps)(CartIcon)
