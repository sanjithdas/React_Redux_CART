/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:39:10
 * @modify date 2021-03-17 07:39:10
 * @desc [Products listing for the search page display based on the search query - retrieving from localstorage]
 */

 
import { useEffect , useState  } from "react"; 
 import { Link } from "react-router-dom";
 
 const SearchProducts = ({ name, description, price, id , search }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const localStorageItem = JSON.parse(localStorage.getItem("totalProducts"));
  
    setItems(localStorageItem);
  } , [setItems])
 
 // adding .herokuapp to the url as the url changes but the product url in the products.json has not changed yet.
  //  function insert(index, string) {
  //    if (index > 0) {
  //      return this.substring(0, index) + string + this.substr(index);
  //    }
   
  //    return string + this;
  //  };
 
    let stringToBeSearched = search.toLowerCase().split(' ');

    const filteredItems = items.filter(item => {
      let wordFound  = false;
      stringToBeSearched.forEach(word => {
        if (item.title.toLowerCase().includes(word) 
          || item.category.toLowerCase().includes(word) 
          
           )
          {
          wordFound = true;
        }
      })

      if (wordFound) {
        return stringToBeSearched;
      } 

    })
   
   return (
     <div className="m-3 homescreen__products">
      
        {   filteredItems.map(item => (
              
            <div className="product m-1" key={item.id}>
            <img src={item.image.insert(20, ".herokuapp")} alt={item.title} />
            <div className="product__info">
            <p className="info__name">{item.title} </p>
              <p className="info__description">{item.description.substring(0, 100)}...</p>
              <p className="info__price">${item.price}</p>
              <Link to={`/product/${item.id}`} className="info__button">
                <b>Buy now</b>
              </Link>

            </div>
            </div>
        ) )
       
        }

         
     </div>
   );
 };
 
 export default SearchProducts;
 