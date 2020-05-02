import React from 'react'
import { connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-button.component'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length? 
                cartItems.map( cartItem => (
                    <CartItem item={cartItem} key={cartItem.id} />
                
            ))
                : <span className="cart-empty">Your cart is eampty</span>

            }
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))