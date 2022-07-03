import { Grid } from "@material-ui/core";
import React from "react";
import product_data from "../data/product_data";
import commonClasses from "./UI/classes";
import CardProduct from "./UI/CardProduct";
import { useCart } from "react-use-cart";

const ProductsScroll = () => {
  const classes = commonClasses();
  const { addItem } = useCart();

  return (
    <Grid
      item
      container
      xs={12}
      wrap="nowrap"
      className={classes.horizontal_scroll_container}
    >
      {product_data.map((item, index) => {
        return (
          <Grid item key={index} className={classes.horizontal_item}>
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
        );
      })}
    </Grid>
  );
};

export default ProductsScroll;
