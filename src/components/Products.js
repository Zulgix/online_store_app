import { Grid } from "@material-ui/core";
import React from "react";
import MainContent from "./mainContent";

const Products = () => {
  return (
    <Grid
      className="container"
      spacing={10}
      item
      container
    >
      <Grid item container className="header_grid_container">
        <Grid item>
          <h1 className="h2"> Hey this is the product page</h1>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MainContent />
      </Grid>
    </Grid>
  );
};

export default Products;
