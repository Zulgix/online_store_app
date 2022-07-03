import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useCart } from "react-use-cart";
import CartCard from "./UI/CartCard";
import commonClasses from "./UI/classes";
import { Container } from "@material-ui/core";

const Cart = () => {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const classes = commonClasses();

  const removeItemHandler = (item) => removeItem(item.id);

  const incrementItemQuantityHandler = (item) =>
    updateItemQuantity(item.id, item.quantity + 1);

  const decrementItemQuantityHandler = (item) =>
    updateItemQuantity(item.id, item.quantity - 1);

  if (isEmpty) return <h1>Cart Is Empty</h1>;
  return (
    <Container>
      <Grid
        item
        container
        direction="column"
        className={classes.cart_main_container}
      >
        <Grid item>
          <Typography gutterBottom variant="h2" component="h2">
            Cart({totalUniqueItems}) total items:({totalItems}){" "}
          </Typography>
        </Grid>
        {items.map((item, index) => {
          return (
            <Grid item key={index} xs={12} className={classes.cart_item}>
              <CartCard
                img={item.thumb}
                title={item.title}
                quantity={item.quantity}
                price={item.price}
                item={item}
                incrementItemQuantityHandler={incrementItemQuantityHandler}
                decrementItemQuantityHandler={decrementItemQuantityHandler}
                removeItemHandler={removeItemHandler}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} className={classes.cart_item}>
          <Button variant="outlined" color="primary">
            Complete Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
