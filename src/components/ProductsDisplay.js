import React from "react";
import { Grid } from "@material-ui/core";
import CardProduct from "./UI/CardProduct";
import product_data from "../data/product_data";
import { useCart } from "react-use-cart";
import "../App.css";

function ProductsDisplay() {
  const { addItem } = useCart();

  const listItems = product_data.map((item, index) => (
    <Grid item xs={8} sm={8} md={4} key={index} className="card">
      <CardProduct
        image={item?.thumb}
        title={item?.product_name}
        name={item?.product_name}
        price={item?.price}
        description={item?.description}
        item={item}
        addItem={addItem}
      />
    </Grid>
  ));

  return (
    <Grid
      container
      item
      justifyContent="center"
      alignContent="center"
      spacing={6}
      style={{ paddingLeft: "100px" }}
      className="productsDisplay"
    >
      {listItems}
    </Grid>
  );
}
export default ProductsDisplay;
