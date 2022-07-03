import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useCart } from "react-use-cart";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "150px",
    height: "50px",
    border: "2px solid #DDD",
  },
  paper: {
    width: "90%",
    height: "90%",
  },
}));

function ProductPage(props) {
  const { addItem } = useCart();
  const item = useSelector((state) => state.modal.item);
  const classes = useStyles();

  return (
    <Paper>
      <Grid
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid item xs={12}>
            <img
              src={props.image}
              style={{
                height: "300px",
                width: "300px",
              }}
            ></img>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2" color="initial">
            {props.name}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" color="initial">
            Price:{""} {""}
            {props.price}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" color="initial">
            {props.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            color="primary"
            onClick={() => addItem(item)}
          >
            add to cart
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper elevation={12}>
            <Typography variant="h5">Product Description</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Grid container item direction="column" alignItems="center">
            <Paper elevation={12} className={classes.paper}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductPage;
