/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:37:17
 * @modify date 2021-03-17 07:37:17
 * @desc [ Cart tem by item description passing props from the parent [Cart]]
 */
import { Link } from "react-router-dom";
String.prototype.insert = function(index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }

  return string + this;
};

const CartItem = ({ item , removeItem }) => {
  console.log(item);

  return (
    <div className="cartitem ">
      <div className="cartitem__image">
        <img src={item.imageURL.insert(20, ".herokuapp")} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p> {item.name}</p>
      </Link>

      <p className="cartitem__price">${item.price}</p>

      <button
        onClick={() => removeItem(item.product)}
        className="cartItem__deleteBtn"
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
