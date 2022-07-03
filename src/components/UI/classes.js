import { makeStyles } from "@material-ui/core";

const commonClasses = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },

  search_container: {
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
  product_container_paper: {
    flexDirection: "column",
  },
  horizontal_scroll_container: {
    maxHeight: "350px",
    display: "flex",
    overflowX: "scroll",
    overflowY: "hidden",
    border: "1px solid #DDD",
    justifyContent: "flex-start",
  },

  horizontal_item: {
    minWidth: "300px",
    height: "330px",
    textAlign: "center",
    margin: "10px 20px 0px 10px",
  },

  product_paper: {
    height: "20rem",
    width: "20rem",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
  },
  product_img_card: { height: "13rem", width: "20rem" },

  title_price: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
  productGrid: {
    justifyContent: "center",
    textAlign: "center",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "50%",
    maxHeight: "50%",
  },

  form_container: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  p: {
    color: "red",
  },
  button: {
    background: "#0563b4",
  },
  main_button: {
    backgroundColor: "#2b8fff",
    color: "white",
    "&:hover": {
      backgroundColor: "#4da1ff",
    },
  },
  app_bar: {
    backgroundColor: "primary",
  },

  buttons_grid: {
    alignItems: "center",
    justifyContent: "center",
  },
  cart_main_container: {
    alignContent: "center",
  },
  cart_item: {
    padding: "50px 50px",
    marginLeft: "75px",
  },
  home_image_slider_grid: {
    justifyContent: "center",
  },
  login_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    maxWidth: "500px",
    width: "100%",
    margin: "auto",
    border: "1px solid #dfdfdf",
    padding: "20px",
    borderRadius: "5px",
    background: "#fff",
  },
}));

export default commonClasses;
