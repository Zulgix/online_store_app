import { Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Header from "./components/Header";
import Login from "./components/Login";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Grid
      item
      container
      direction="column"
      alignContent="center"
      justifyContent="center"
    >
      {/* <Home /> */}
      <CartProvider>
        <Grid item style={{ padding: "50px" }}>
          <Header />
        </Grid>
        <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/products"
            render={(props) => <Products {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/cart" render={(props) => <Cart {...props} />} />
          <Route
            exact
            path="/product_page"
            render={(props) => <ProductPage {...props} />}
          />
        </Switch>
      </CartProvider>
    </Grid>
  );
}

export default App;
