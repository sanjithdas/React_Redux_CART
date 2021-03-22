/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:53:58
 * @modify date 2021-03-17 07:57:34
 * @desc [Product reducer - update the state when an action is dispatched from ProductAction]
 * 
 * create an initial state with empty array [all products] and object [individual items]
 * 
 * getProductsReducer - check the action type and return the updated state if the state changes
 * 
 * getProductDetails - return the individual item state.
 */
import * as actionTypes from "../constants/products";

const intialState = {
  products: [],
  product: [],
  loading: false,
};

export const getProductsReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      const products = action.payload;
      // console.log(products);
      return {
        loading: false,
        products,
      };

    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getProductDetails = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      const product = action.payload;
      console.log(product);
      return {
        loading: false,
        product,
      };

    case actionTypes.GET_PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case actionTypes.GET_PRODUCT_DETAIL_RESET:
      return {
        product: {},
      };

    default:
      return state;
  }
};
