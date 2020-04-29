import { CartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  //payload: is not needed here because we are not passing in a value.
})