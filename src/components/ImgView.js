import { Grid } from "@material-ui/core";
import React from "react";
import commonClasses from "./UI/classes";

const ImgView = () => {
  const classes = commonClasses();
  return (
    <Grid item>
      <img
        className={classes.img}
        src="https://i2.wp.com/freedesignresources.net/wp-content/uploads/2018/09/free_t-shirt_mockup_by_acdesign_091618_pre1.jpg "
      />
    </Grid>
  );
};

export default ImgView;
