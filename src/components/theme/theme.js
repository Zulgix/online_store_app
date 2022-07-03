import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { green, amber } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: { main: green[500] },
    secondary: { main: amber[500] },
  },
});

export default theme;
