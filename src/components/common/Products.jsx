/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:39:10
 * @modify date 2021-03-17 07:39:10
 * @desc [Products listing for the home page display - passing props from Home page]
 */

import { Link } from "react-router-dom";
const Products = ({ imageUrl, name, description, price, id }) => {

// adding .herokuapp to the url as the url changes but the product url in the products.json has not changed yet.
  String.prototype.insert = function(index, string) {
    if (index > 0) {
      return this.substring(0, index) + string + this.substr(index);
    }
  
    return string + this;
  };

  imageUrl = imageUrl.insert(20, ".herokuapp");
  
  return (
    <div className="product">
        <img src={imageUrl} alt={name} />
        <div className="product__info">
          <p className="info__name">{name} </p>
          <p className="info__description">{description.substring(0, 100)}...</p>
          <p className="info__price">${price}</p>
          <Link to={`/product/${id}`} className="info__button">
            <b>Buy now</b>
          </Link>
        </div>
    </div>
  );
};

export default Products;
