/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:52:33
 * @modify date 2021-03-17 07:53:21
 * @desc [Reducer for Shopping Cart]
 * Update the state when an action is dispatched
 * 
 * 
 */
import * as actionTypes from "../constants/cart";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const items = action.payload;

      const existItem = state.cartItems.find(
        (item) => item.product === items.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existItem.product ? items : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, items],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
