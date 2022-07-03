import { Grid } from "@material-ui/core";
import React from "react";
import product_data from "../data/product_data";
import { useCart } from "react-use-cart";

const MainContent = (props) => {
  console.log(product_data);
  const { addItem } = useCart();

  const listItems = product_data.map((item) => (
    <Grid item container className="card" key={item?.id}>
      <Grid item className="card_img">
        <img src={item?.thumb} />
      </Grid>
      <Grid item className="card_header">
        <h2>{item?.product_name}</h2>
        <p>{item?.description}</p>
        <p className="price">
          {item?.price}
          <span>{item?.currency}</span>
        </p>
        <Grid item className="btn">
          Add to cart
        </Grid>
      </Grid>
    </Grid>
  ));
  return (
    <Grid item container className="main_content">
      <h3>Headphones</h3>
      {listItems}
    </Grid>
  );
};
export default MainContent;
