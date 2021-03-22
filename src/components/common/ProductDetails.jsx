/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:35:07
 * @modify date 2021-03-17 07:35:07
 * @desc [Individual product listing by details]
 */
import React  from "react";

import {
  Row,
  Col,
  Container
} from "react-bootstrap";


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/action/productActions";
import { addToCart } from "../../redux/action/cartActions";
import LoadingIcon from "../../images/loader.gif";
const ProductDetails = ({ match , history}) => {

  const dispatch = useDispatch();

  const singleProduct = useSelector((state) => state.getProduct);

  const productID = match.params.id;

  useEffect(() => {
    dispatch(getProductDetails(productID));
  }, [dispatch, productID] )

  const addItemToCart = () => {
    dispatch(addToCart(product.id));
    console.log("cart added");
    history.push("/cart");
  };

  // adding .herokuapp to the url as the url changes but the product url in the products.json has not changed yet.
  String.prototype.insert = function(index, string) {
    if (index > 0) {
      return this.substring(0, index) + string + this.substr(index);
    }
  
    return string + this;
  };

  

  const { loading, error, product } = singleProduct;

  // product.image = product.image.insert(20, ".herokuapp");
  if(product){
  const imageURL = product.image;
  console.log(imageURL);
  }
  


  return (
      <div className="products">
        {
          loading ? ( <div className="text-center">
          Loading... <img alt ="Loading.." src={LoadingIcon} style = {{width:"150px" , height:"150px"}} /> </div> ) : error ? ( <h2>{error}</h2>) :
           (<Container>
            <Row className="mt-5 productscreen__left">
              <Col><img src={product.image ? product.image.insert(20, ".herokuapp") : ({})} alt={product.title} /></Col>
              <Col>
                  <div className="left__info">
                  <p className="left__name"> {product.title}</p>
                  <p>Price: {product.price} </p>
                  <p> {product.description}</p>
                </div>
              </Col>
              <Col>
              <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>$ {product.price} </span>
              </p>
              <p>
                <button type="button" onClick = { addItemToCart } >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
               </Col>
            </Row>
             
          </Container>)
        }
      </div>
  );
};

export default ProductDetails;
