import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useCart } from "react-use-cart";
import CardProduct from "./UI/CardProduct";
import { useSelector } from "react-redux";
import SimpleBackdrop from "./UI/SImpleBackdrop";

function SearchResults(props, handleToggle) {
  const { addItem } = useCart();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  console.log(filteredProducts);
  const searchResult = filteredProducts.map((product, index) => (
    <Grid item xs={3} sm={3} md={3} key={index}>
      <CardProduct
        image={product?.thumb}
        title={product?.product_name}
        name={product?.product_name}
        price={product?.price}
        description={product?.description}
        product={product}
        addItem={addItem}
      />
    </Grid>
  ));

  return (
    <SimpleBackdrop buttonName={props.buttonName}>
      <Grid
        container
        item
        justifyContent="center"
        alignContent="center"
        spacing={6}
      >
        <Grid item xs={12}>
          <Typography variant="h4" color="initial">
            Products Found: {searchResult.product_name}
          </Typography>
        </Grid>
        {searchResult}
      </Grid>
    </SimpleBackdrop>
  );
}

export default SearchResults;
