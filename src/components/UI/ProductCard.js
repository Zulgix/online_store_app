import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import commonClasses from "./classes";
import MainButton from "./MainButton";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme/theme";

const ProductCard = (props) => {
  const classes = commonClasses();
  return (
    <ThemeProvider theme={theme}>
      <Grid item container className={classes.product_container_paper}>
        <Paper className={classes.product_paper} elevation={12}>
          <Grid item container>
            <Grid item>
              <img src={props.img} className={classes.product_img_card} />
            </Grid>
            <Grid item container className={classes.title_price}>
              <Typography variant="h5">{props.name}</Typography>
              <Grid item>Price: {props.price}</Grid>
              <Grid item container className={classes.buttons_grid}>
                <Grid item>
                  <MainButton> product details</MainButton>
                </Grid>
                <Grid item>
                  <MainButton>add to cart </MainButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default ProductCard;
