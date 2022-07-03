import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setModalItem, setModalOpen } from "../../redux/modal";
import MyModal from "./MyModal";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CardProduct(props) {
  const classes = useStyles();
  const { item, addItem } = props;
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.modal.openModal);
  // console.log(item);

  const handleOpenModal = () => {
    dispatch(setModalOpen(true));
    dispatch(setModalItem(item));
  };
  const handleClose = () => {
    dispatch(setModalOpen(false));
    dispatch(setModalItem(""));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Button size="small" color="primary" onClick={() => addItem(item)}>
              Add to cart
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleOpenModal}>more details</Button>
            {/* <MyModal open={openModal} onClose={handleClose}></MyModal> */}
            <MyModal open={openModal} onClose={handleClose} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
export default CardProduct;
