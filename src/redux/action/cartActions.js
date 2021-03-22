/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:44:29
 * @modify date 2021-03-19 21:31:36
 * @desc [Cart Actions - Add to Cart , Remove from Cart]
 * "dipatch an action" - will invoke the reducer and update the state. 
 * storing item to the localStorage
 */
import * as actionTypes from "../constants/cart";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://fakestoreapi.herokuapp.com/products/${id}`);
  console.log(data);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data.id,
      name: data.title,
      imageURL: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  // cart is from store - cart reducer
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

// Remove from cart
export const removeFromCart = (id) => (dispatch, getState) => {
  console.log(id);

  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
