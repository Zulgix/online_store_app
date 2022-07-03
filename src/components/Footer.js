import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <Typography>Facebook</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Instagram</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>GitHub</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Other Socials</Typography>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Footer;
