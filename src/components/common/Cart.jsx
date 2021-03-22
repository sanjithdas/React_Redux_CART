/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:35:56
 * @modify date 2021-03-17 07:35:56
 * @desc [Display item in the cart and its total count, if there are items]
 */
import React from "react";
//import "./css/cart.css";
import CartItem from "../common/CartItem";
import { removeFromCart } from "../../redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";


const Cart = () => {

  const dispatch = useDispatch();

  // item from local storage..
  const cart = useSelector((state) => state.cart);

  const { cartItems }  = cart;

  const removeCartItem = (prod_id) => {
      dispatch(removeFromCart(prod_id));
  };

  const getCartItemCount = () => {
    console.log(cartItems.length);
    return cartItems.length;
  };

  const getCartTotal = () => {
    return cartItems.reduce((price, item) => item.price + price, 0);
  };

  return (
  <>
   <div className="mb-5" >
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            {" "}
            Your cart is empty <Link to="/">Shop now</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.products}
              item={item}
              removeItem={() => removeCartItem(item.product)}
            />
          )) 
        )}
      </div>

      <div className="cartscreen__right" style={{ height:"500px" }}>
        <div className="cartscreen__info">
          <p> Sub Total ({getCartItemCount()}) items </p>
          <p> ${getCartTotal().toFixed(2)}</p>
          <Link to="/">Shop More</Link>
        </div>

        <div>
          <button>
            {getCartItemCount()
              ? "Proceed to Checkout"
              : "Your cart is empty... Do some Shopping now"}
          </button>
        </div>
      </div>
    </div> 
  </>
  );
};

export default Cart;
