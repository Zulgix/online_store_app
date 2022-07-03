import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { setBackdropOpen } from "../../redux/backdrop";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function SimpleBackdrop(props) {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.backdrop.open);
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    dispatch(setBackdropOpen(false));
  };
  const handleToggle = (open) => {
    dispatch(setBackdropOpen(!open));
  };

  return (
    <Grid item>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        {props.buttonName}
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Grid container item justifyContent="center" spacing={6}>
          {props.children}
        </Grid>
      </Backdrop>
    </Grid>
  );
}

export default SimpleBackdrop;
