/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:47:52
 * @modify date 2021-03-21 22:13:58
 * @desc [Product Action - get the Products and dispatch action - reducer update the state]
 * 
 * getProducts - return all the products
 * 
 * getProductDetails - return the products based on the id  provided.
 * 
 * removeProductDetails - reset the product  as an empty object
 * 
 */
import * as actionTypes from "../constants/products";
import axios from "axios";
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get("https://fakestoreapi.herokuapp.com/products");

    localStorage.setItem("totalProducts" , JSON.stringify(data));

    // const { data } = await axios.get("http://localhost:5000/api/products");

  //  console.log(data);
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("catch", error);
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAIL_REQUEST,
    });
    const { data } = await axios.get(`https://fakestoreapi.herokuapp.com/products/${id}`);
    console.log(data);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAIL_RESET,
  });
};
