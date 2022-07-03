import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

function CartCard(props) {
  const classes = useStyles();
  const {
    item,
    removeItemHandler,
    decrementItemQuantityHandler,
    incrementItemQuantityHandler,
  } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.thumb}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Quantity: {item.quantity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {item.quantity * item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => decrementItemQuantityHandler(item)}
        >
          -
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => incrementItemQuantityHandler(item)}
        >
          +
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => removeItemHandler(item)}
        >
          Remove Item
        </Button>
      </CardActions>
    </Card>
  );
}
export default CartCard;
