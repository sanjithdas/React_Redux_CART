/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:33:52
 * @modify date 2021-03-18 12:44:24
 * @desc [ Component together - All the routes and the Footer and Header [reusable coponent]]
 */
import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import NavbarHeader from "./components/layout/NavbarHeader";
import ProductDetails from "./components/common/ProductDetails";
import PageNotFound from ".//pages/PageNotFound";
import Footer from "./components/layout/Footer";
import Cart from "./components/common/Cart";

function App() {
  return (
    <>
      <NavbarHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pagenotfound" component={PageNotFound} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/pagenotfound" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
