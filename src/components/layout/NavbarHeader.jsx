/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:26:47
 * @modify date 2021-03-17 07:26:47
 * @desc [Navbar Component]
 * 
 * display the no of items in the cart if any..
 * 
 * useSelecter - get the state from the store
 * 
 * React bootstrap 
 * 
 * prop type - title
 * 
 */

import React ,  { useState } from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import ShopLogo from "../../images/shoplogo.jpg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const NavbarHeader = ({ title }) => {

  let history = useHistory();
  const [search,setSearch] = useState(" ");

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.length;
  };
  const seachStateUpdate = (event) => {

    setSearch(event.target.value);
  }

  const handleSearchClick = () => {
    
    history.push({
      pathname: '/',
      state: search  
    })
 
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="bg_color">
        <Navbar.Brand href="/" className="ml3">
          {" "}
          <div
            className="rounded badge"
            style={{
              textShadow: "7px 17px",
              height: "50px",
              border: "5px solid #fff",
              borderRadius: "30px",
            }}
          >
           {title}
          </div>
          <span></span>
        </Navbar.Brand>
        <Navbar.Brand>
          <Nav className="nav_links">
            <Nav.Link className="link-search text-primary cart__link" href="/cart">
              <img
                src={ShopLogo}
                alt="Logo"
                style={{
                  height: "70px",
                  width: "100px",
                  borderRadius: "20px",
                }}
              />
              {/* <i className="fas fa-shopping-cart "></i> */}
              <span className="cart__badge">{getCartCount()}</span>
              <span></span>
            </Nav.Link>
          </Nav>
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline className="form__class">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 frm__text"
              onChange = { seachStateUpdate }
            />
            <Button variant="outline-light" className="frm__button" onClick= {handleSearchClick}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
        
      </Navbar>
    </>
  );
};

NavbarHeader.defaultProps = {
  title: "V4U",
  //  icon: <Icon.Bullseye className="icon sm-icon-l1" />,
};

NavbarHeader.propTypes = {
  title: PropTypes.string.isRequired,
  // icon: PropTypes.object.isRequired,
};

export default NavbarHeader;
