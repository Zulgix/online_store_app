import { Button, Grid, Modal } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductPage from "../ProductPage";

const MyModal = (props) => {
  const item = useSelector((state) => state.modal.item);

  return (
    <Grid container item>
      <Modal open={props.open} onClose={props.onClose}>
        <ProductPage
          name={item.product_name}
          image={item.thumb}
          price={item.price}
          description={item.description}
        />
      </Modal>
    </Grid>
  );
};

export default MyModal;
