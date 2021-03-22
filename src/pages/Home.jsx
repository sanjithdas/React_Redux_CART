/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-16 16:28:45
 * @modify date 2021-03-16 16:28:45
 * @desc [Display products - Home Page]
 * 
 * get all the products from store - redux
 * 
 * Passing props to the child - Products
 * 
 */

import React from "react";

import Product from "../components/common/Products";
import SearchProduct from "../components/common/SearchProduct";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProducts  } from "../redux/action/productActions";

import ShopVideo from "../images/river.mp4";

import LoadingIcon from "../images/loader.gif"

const Home = ({ match , props }) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const getProductsFromState = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProductsFromState;
  
  // when component mounted , get all the products from the redux store.
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  var empty = {
   height: "500px"
  };

   const search = location.state;

  return (

    <React.Fragment>
       <video autoPlay muted loop id="myVideo">
        <source src={ShopVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="homescreen">
      <h2 className="homescreen__title">Products</h2>
      <div className="">
        {loading ? (
          <div className="text-center align-content-center">
            Loading... <img src={LoadingIcon} alt="Loading.." style = {{width:"150px" , height:"150px"}} /> </div>
        ) : error ? (
          <h2>{error} </h2>
        ) : !search ?  (
          <div className="homescreen__products"> {
          products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              description={product.description}
              imageUrl={product.image}
            />
          )) }
          </div>
        ):(<SearchProduct search = { search } />)}
      </div>
    </div>

    <div style={empty}>
      
    </div>        
     
    </React.Fragment>
  );
};

export default Home;
